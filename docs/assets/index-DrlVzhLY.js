(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var bh={exports:{}},pl={};var Xv;function r1(){if(Xv)return pl;Xv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return pl.Fragment=e,pl.jsx=i,pl.jsxs=i,pl}var kv;function s1(){return kv||(kv=1,bh.exports=r1()),bh.exports}var jt=s1(),Ah={exports:{}},fe={};var qv;function o1(){if(qv)return fe;qv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),T=Symbol.iterator;function C(k){return k===null||typeof k!="object"?null:(k=T&&k[T]||k["@@iterator"],typeof k=="function"?k:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,S={};function N(k,mt,gt){this.props=k,this.context=mt,this.refs=S,this.updater=gt||I}N.prototype.isReactComponent={},N.prototype.setState=function(k,mt){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,mt,"setState")},N.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function V(){}V.prototype=N.prototype;function w(k,mt,gt){this.props=k,this.context=mt,this.refs=S,this.updater=gt||I}var O=w.prototype=new V;O.constructor=w,M(O,N.prototype),O.isPureReactComponent=!0;var L=Array.isArray;function z(){}var E={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function b(k,mt,gt){var H=gt.ref;return{$$typeof:o,type:k,key:mt,ref:H!==void 0?H:null,props:gt}}function D(k,mt){return b(k.type,mt,k.props)}function U(k){return typeof k=="object"&&k!==null&&k.$$typeof===o}function X(k){var mt={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(gt){return mt[gt]})}var B=/\/+/g;function Z(k,mt){return typeof k=="object"&&k!==null&&k.key!=null?X(""+k.key):mt.toString(36)}function q(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(z,z):(k.status="pending",k.then(function(mt){k.status==="pending"&&(k.status="fulfilled",k.value=mt)},function(mt){k.status==="pending"&&(k.status="rejected",k.reason=mt)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function W(k,mt,gt,H,at){var _t=typeof k;(_t==="undefined"||_t==="boolean")&&(k=null);var Ct=!1;if(k===null)Ct=!0;else switch(_t){case"bigint":case"string":case"number":Ct=!0;break;case"object":switch(k.$$typeof){case o:case e:Ct=!0;break;case x:return Ct=k._init,W(Ct(k._payload),mt,gt,H,at)}}if(Ct)return at=at(k),Ct=H===""?"."+Z(k,0):H,L(at)?(gt="",Ct!=null&&(gt=Ct.replace(B,"$&/")+"/"),W(at,mt,gt,"",function(ae){return ae})):at!=null&&(U(at)&&(at=D(at,gt+(at.key==null||k&&k.key===at.key?"":(""+at.key).replace(B,"$&/")+"/")+Ct)),mt.push(at)),1;Ct=0;var ot=H===""?".":H+":";if(L(k))for(var At=0;At<k.length;At++)H=k[At],_t=ot+Z(H,At),Ct+=W(H,mt,gt,_t,at);else if(At=C(k),typeof At=="function")for(k=At.call(k),At=0;!(H=k.next()).done;)H=H.value,_t=ot+Z(H,At++),Ct+=W(H,mt,gt,_t,at);else if(_t==="object"){if(typeof k.then=="function")return W(q(k),mt,gt,H,at);throw mt=String(k),Error("Objects are not valid as a React child (found: "+(mt==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":mt)+"). If you meant to render a collection of children, use an array instead.")}return Ct}function $(k,mt,gt){if(k==null)return k;var H=[],at=0;return W(k,H,"","",function(_t){return mt.call(gt,_t,at++)}),H}function et(k){if(k._status===-1){var mt=k._result,gt=mt();gt.then(function(H){(k._status===0||k._status===-1)&&(k._status=1,k._result=H,gt.status===void 0&&(gt.status="fulfilled",gt.value=H))},function(H){(k._status===0||k._status===-1)&&(k._status=2,k._result=H,gt.status===void 0&&(gt.status="rejected",gt.reason=H))}),k._status===-1&&(k._status=0,k._result=gt)}if(k._status===1)return k._result.default;throw k._result}var ht=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var mt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(mt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function Mt(k){var mt=E.T,gt={};gt.types=mt!==null?mt.types:null,E.T=gt;try{var H=k(),at=E.S;at!==null&&at(gt,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(z,ht)}catch(_t){ht(_t)}finally{mt!==null&&gt.types!==null&&(mt.types=gt.types),E.T=mt}}function Bt(k){var mt=E.T;if(mt!==null){var gt=mt.types;gt===null?mt.types=[k]:gt.indexOf(k)===-1&&gt.push(k)}else Mt(Bt.bind(null,k))}var Dt={map:$,forEach:function(k,mt,gt){$(k,function(){mt.apply(this,arguments)},gt)},count:function(k){var mt=0;return $(k,function(){mt++}),mt},toArray:function(k){return $(k,function(mt){return mt})||[]},only:function(k){if(!U(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return fe.Activity=_,fe.Children=Dt,fe.Component=N,fe.Fragment=i,fe.Profiler=l,fe.PureComponent=w,fe.StrictMode=r,fe.Suspense=p,fe.ViewTransition=v,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,fe.__COMPILER_RUNTIME={__proto__:null,c:function(k){return E.H.useMemoCache(k)}},fe.addTransitionType=Bt,fe.cache=function(k){return function(){return k.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(k,mt,gt){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var H=M({},k.props),at=k.key;if(mt!=null)for(_t in mt.key!==void 0&&(at=""+mt.key),mt)!P.call(mt,_t)||_t==="key"||_t==="__self"||_t==="__source"||_t==="ref"&&mt.ref===void 0||(H[_t]=mt[_t]);var _t=arguments.length-2;if(_t===1)H.children=gt;else if(1<_t){for(var Ct=Array(_t),ot=0;ot<_t;ot++)Ct[ot]=arguments[ot+2];H.children=Ct}return b(k.type,at,H)},fe.createContext=function(k){return k={$$typeof:d,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:u,_context:k},k},fe.createElement=function(k,mt,gt){var H,at={},_t=null;if(mt!=null)for(H in mt.key!==void 0&&(_t=""+mt.key),mt)P.call(mt,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(at[H]=mt[H]);var Ct=arguments.length-2;if(Ct===1)at.children=gt;else if(1<Ct){for(var ot=Array(Ct),At=0;At<Ct;At++)ot[At]=arguments[At+2];at.children=ot}if(k&&k.defaultProps)for(H in Ct=k.defaultProps,Ct)at[H]===void 0&&(at[H]=Ct[H]);return b(k,_t,at)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(k){return{$$typeof:h,render:k}},fe.isValidElement=U,fe.lazy=function(k){return{$$typeof:x,_payload:{_status:-1,_result:k},_init:et}},fe.memo=function(k,mt){return{$$typeof:m,type:k,compare:mt===void 0?null:mt}},fe.startTransition=Mt,fe.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},fe.use=function(k){return E.H.use(k)},fe.useActionState=function(k,mt,gt){return E.H.useActionState(k,mt,gt)},fe.useCallback=function(k,mt){return E.H.useCallback(k,mt)},fe.useContext=function(k){return E.H.useContext(k)},fe.useDebugValue=function(){},fe.useDeferredValue=function(k,mt){return E.H.useDeferredValue(k,mt)},fe.useEffect=function(k,mt){return E.H.useEffect(k,mt)},fe.useEffectEvent=function(k){return E.H.useEffectEvent(k)},fe.useId=function(){return E.H.useId()},fe.useImperativeHandle=function(k,mt,gt){return E.H.useImperativeHandle(k,mt,gt)},fe.useInsertionEffect=function(k,mt){return E.H.useInsertionEffect(k,mt)},fe.useLayoutEffect=function(k,mt){return E.H.useLayoutEffect(k,mt)},fe.useMemo=function(k,mt){return E.H.useMemo(k,mt)},fe.useOptimistic=function(k,mt){return E.H.useOptimistic(k,mt)},fe.useReducer=function(k,mt,gt){return E.H.useReducer(k,mt,gt)},fe.useRef=function(k){return E.H.useRef(k)},fe.useState=function(k){return E.H.useState(k)},fe.useSyncExternalStore=function(k,mt,gt){return E.H.useSyncExternalStore(k,mt,gt)},fe.useTransition=function(){return E.H.useTransition()},fe.version="19.3.0",fe}var Wv;function vm(){return Wv||(Wv=1,Ah.exports=o1()),Ah.exports}var xt=vm(),Rh={exports:{}},ml={},Ch={exports:{}},wh={};var Yv;function l1(){return Yv||(Yv=1,(function(o){function e(q,W){var $=q.length;q.push(W);t:for(;0<$;){var et=$-1>>>1,ht=q[et];if(0<l(ht,W))q[et]=W,q[$]=ht,$=et;else break t}}function i(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var W=q[0],$=q.pop();if($!==W){q[0]=$;t:for(var et=0,ht=q.length,Mt=ht>>>1;et<Mt;){var Bt=2*(et+1)-1,Dt=q[Bt],k=Bt+1,mt=q[k];if(0>l(Dt,$))k<ht&&0>l(mt,Dt)?(q[et]=mt,q[k]=$,et=k):(q[et]=Dt,q[Bt]=$,et=Bt);else if(k<ht&&0>l(mt,$))q[et]=mt,q[k]=$,et=k;else break t}}return W}function l(q,W){var $=q.sortIndex-W.sortIndex;return $!==0?$:q.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],x=1,_=null,v=3,T=!1,C=!1,I=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function w(q){for(var W=i(m);W!==null;){if(W.callback===null)r(m);else if(W.startTime<=q)r(m),W.sortIndex=W.expirationTime,e(p,W);else break;W=i(m)}}function O(q){if(I=!1,w(q),!C)if(i(p)!==null)C=!0,L||(L=!0,U());else{var W=i(m);W!==null&&Z(O,W.startTime-q)}}var L=!1,z=-1,E=5,P=-1;function b(){return M?!0:!(o.unstable_now()-P<E)}function D(){if(M=!1,L){var q=o.unstable_now();P=q;var W=!0;try{t:{C=!1,I&&(I=!1,N(z),z=-1),T=!0;var $=v;try{e:{for(w(q),_=i(p);_!==null&&!(_.expirationTime>q&&b());){var et=_.callback;if(typeof et=="function"){_.callback=null,v=_.priorityLevel;var ht=et(_.expirationTime<=q);if(q=o.unstable_now(),typeof ht=="function"){_.callback=ht,w(q),W=!0;break e}_===i(p)&&r(p),w(q)}else r(p);_=i(p)}if(_!==null)W=!0;else{var Mt=i(m);Mt!==null&&Z(O,Mt.startTime-q),W=!1}}break t}finally{_=null,v=$,T=!1}W=void 0}}finally{W?U():L=!1}}}var U;if(typeof V=="function")U=function(){V(D)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,B=X.port2;X.port1.onmessage=D,U=function(){B.postMessage(null)}}else U=function(){S(D,0)};function Z(q,W){z=S(function(){q(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(q){switch(v){case 1:case 2:case 3:var W=3;break;default:W=v}var $=v;v=W;try{return q()}finally{v=$}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(q,W){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var $=v;v=q;try{return W()}finally{v=$}},o.unstable_scheduleCallback=function(q,W,$){var et=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?et+$:et):$=et,q){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=$+ht,q={id:x++,callback:W,priorityLevel:q,startTime:$,expirationTime:ht,sortIndex:-1},$>et?(q.sortIndex=$,e(m,q),i(p)===null&&q===i(m)&&(I?(N(z),z=-1):I=!0,Z(O,$-et))):(q.sortIndex=ht,e(p,q),C||T||(C=!0,L||(L=!0,U()))),q},o.unstable_shouldYield=b,o.unstable_wrapCallback=function(q){var W=v;return function(){var $=v;v=W;try{return q.apply(this,arguments)}finally{v=$}}}})(wh)),wh}var Zv;function c1(){return Zv||(Zv=1,Ch.exports=l1()),Ch.exports}var Dh={exports:{}},On={};var Kv;function u1(){if(Kv)return On;Kv=1;var o=vm();function e(x){var _="https://react.dev/errors/"+x;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)_+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+x+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(x,_,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:T==null?null:T===d?d:""+T,children:x,containerInfo:_,implementation:v}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(x,_){if(x==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,On.browser=function(x){return{$$typeof:u,_reason:x}},On.createPortal=function(x,_){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(e(299));return h(x,_,null,v)},On.flushSync=function(x){var _=p.T,v=r.p;try{if(p.T=null,r.p=2,x)return x()}finally{p.T=_,r.p=v,r.d.f()}},On.preconnect=function(x,_){typeof x=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,r.d.C(x,_))},On.prefetchDNS=function(x){typeof x=="string"&&r.d.D(x)},On.preinit=function(x,_){if(typeof x=="string"&&_&&typeof _.as=="string"){var v=_.as,T=m(v,_.crossOrigin),C=typeof _.integrity=="string"?_.integrity:void 0,I=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;v==="style"?r.d.S(x,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:T,integrity:C,fetchPriority:I}):v==="script"&&r.d.X(x,{crossOrigin:T,integrity:C,fetchPriority:I,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},On.preinitModule=function(x,_){if(typeof x=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var v=m(_.as,_.crossOrigin);r.d.M(x,{crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&r.d.M(x)},On.preload=function(x,_){if(typeof x=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var v=_.as,T=m(v,_.crossOrigin);r.d.L(x,v,{crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},On.preloadModule=function(x,_){if(typeof x=="string")if(_){var v=m(_.as,_.crossOrigin);r.d.m(x,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else r.d.m(x)},On.requestFormReset=function(x){r.d.r(x)},On.unstable_batchedUpdates=function(x,_){return x(_)},On.useFormState=function(x,_,v){return p.H.useFormState(x,_,v)},On.useFormStatus=function(){return p.H.useHostTransitionStatus()},On.version="19.3.0",On}var Qv;function f1(){if(Qv)return Dh.exports;Qv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Dh.exports=u1(),Dh.exports}var Jv;function d1(){if(Jv)return ml;Jv=1;var o=c1(),e=vm(),i=f1();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),t;if(f===s)return p(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,R=c.child;R;){if(R===a){g=!0,a=c,s=f;break}if(R===s){g=!0,s=c,a=f;break}R=R.sibling}if(!g){for(R=f.child;R;){if(R===a){g=!0,a=f,s=c;break}if(R===s){g=!0,s=f,a=c;break}R=R.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}function _(t,n,a,s,c,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,c,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&_(t.child,n,a,s,c,f))return!0;t=t.sibling}return!1}function v(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function T(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function C(t){var n=[null,null],a=v(t);return a===null||I(n,t,a.child,{foundSelf:!1}),n}function I(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&I(t,n,a.child,s))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var S=null,N=null;function V(t,n,a){return t===a?!0:t===n?(S=t,!0):!1}function w(t,n,a){return t===a?(N=t,!1):t===n?(N!==null&&(S=t),!0):!1}function O(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function L(t,n,a){for(var s=0,c=t;c;c=a(c))s++;c=0;for(var f=n;f;f=a(f))c++;for(;0<s-c;)t=a(t),s--;for(;0<c-s;)n=a(n),c--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var z=Object.assign,E=Symbol.for("react.element"),P=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),et=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Mt=Symbol.for("react.activity"),Bt=Symbol.for("react.legacy_hidden"),Dt=Symbol.for("react.memo_cache_sentinel"),k=Symbol.for("react.view_transition"),mt=Symbol.for("react.recoverable"),gt=Symbol.iterator;function H(t){return t===null||typeof t!="object"?null:(t=gt&&t[gt]||t["@@iterator"],typeof t=="function"?t:null)}var at=Symbol.for("react.client.reference");function _t(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===at?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case X:return"Profiler";case U:return"StrictMode";case W:return"Suspense";case $:return"SuspenseList";case Mt:return"Activity";case k:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case Z:return t.displayName||"Context";case B:return(t._context.displayName||"Context")+".Consumer";case q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case et:return n=t.displayName||null,n!==null?n:_t(t.type)||"Memo";case ht:n=t._payload,t=t._init;try{return _t(t(n))}catch{}}return null}var Ct=Array.isArray,ot=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,At=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},re=[],se=-1;function Qt(t){return{current:t}}function Nt(t){0>se||(t.current=re[se],re[se]=null,se--)}function ne(t,n){se++,re[se]=t.current,t.current=n}var Me=Qt(null),ze=Qt(null),ve=Qt(null),he=Qt(null);function Y(t,n){switch(ne(ve,n),ne(ze,t),ne(Me,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?j_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=j_(n),t=$_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Nt(Me),ne(Me,t)}function sn(){Nt(Me),Nt(ze),Nt(ve)}function He(t){var n=t.memoizedState;n!==null&&(Xs._currentValue=n.memoizedState,ne(he,t)),n=Me.current;var a=$_(n,t.type);n!==a&&(ne(ze,t),ne(Me,a))}function F(t){ze.current===t&&(Nt(Me),Nt(ze)),he.current===t&&(Nt(he),Xs._currentValue=ae)}var y,rt;function ft(t){if(y===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);y=n&&n[1]||"",rt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+y+t+rt}var vt=!1;function wt(t,n){if(!t||vt)return"";vt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Et=function(){throw Error()};if(Object.defineProperty(Et.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Et,[])}catch(zt){var tt=zt}Reflect.construct(t,[],Et)}else{try{Et.call()}catch(zt){tt=zt}Et=!1;try{var ut=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Et=!0,new t}finally{Et&&(ut!==void 0?Object.defineProperty(t.prototype,"props",ut):delete t.prototype.props)}}}else{try{throw Error()}catch(zt){tt=zt}(Et=t())&&typeof Et.catch=="function"&&Et.catch(function(){})}}catch(zt){if(zt&&tt&&typeof zt.stack=="string")return[zt.stack,tt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],R=f[1];if(g&&R){var G=g.split(`
`),it=R.split(`
`);for(c=s=0;s<G.length&&!G[s].includes("DetermineComponentFrameRoot");)s++;for(;c<it.length&&!it[c].includes("DetermineComponentFrameRoot");)c++;if(s===G.length||c===it.length)for(s=G.length-1,c=it.length-1;1<=s&&0<=c&&G[s]!==it[c];)c--;for(;1<=s&&0<=c;s--,c--)if(G[s]!==it[c]){if(s!==1||c!==1)do if(s--,c--,0>c||G[s]!==it[c]){var dt=`
`+G[s].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=s&&0<=c);break}}}finally{vt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ft(a):""}function Ot(t,n){switch(t.tag){case 26:case 27:case 5:return ft(t.type);case 16:return ft("Lazy");case 13:return t.child!==n&&n!==null?ft("Suspense Fallback"):ft("Suspense");case 19:return ft("SuspenseList");case 0:case 15:return wt(t.type,!1);case 11:return wt(t.type.render,!1);case 1:return wt(t.type,!0);case 31:return ft("Activity");case 30:return ft("ViewTransition");default:return""}}function St(t){try{var n="",a=null;do n+=Ot(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var bt=Object.prototype.hasOwnProperty,Lt=o.unstable_scheduleCallback,ie=o.unstable_cancelCallback,Ht=o.unstable_shouldYield,Ft=o.unstable_requestPaint,Wt=o.unstable_now,le=o.unstable_getCurrentPriorityLevel,pe=o.unstable_ImmediatePriority,j=o.unstable_UserBlockingPriority,Ut=o.unstable_NormalPriority,Tt=o.unstable_LowPriority,Pt=o.unstable_IdlePriority,qt=o.log,Rt=o.unstable_setDisableYieldValue,ee=null,kt=null;function Le(t){if(typeof qt=="function"&&Rt(t),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(ee,t)}catch{}}var me=Math.clz32?Math.clz32:$u,ri=Math.log,xi=Math.LN2;function $u(t){return t>>>=0,t===0?32:31-(ri(t)/xi|0)|0}var rs=256,Tr=262144,Va=4194304;function ma(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function br(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var R=s&134217727;return R!==0?(s=R&~f,s!==0?c=ma(s):(g&=R,g!==0?c=ma(g):a||(a=R&~t,a!==0&&(c=ma(a))))):(R=s&~f,R!==0?c=ma(R):g!==0?c=ma(g):a||(a=s&~t,a!==0&&(c=ma(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Xa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ki(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-me(a),c=1<<s;n|=t[s],a&=~c}return n}function So(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mo(){var t=Va;return Va<<=1,(Va&62914560)===0&&(Va=4194304),t}function ss(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function qi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function kl(t,n,a,s,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,G=t.expirationTimes,it=t.hiddenUpdates;for(a=g&~a;0<a;){var dt=31-me(a),Et=1<<dt;R[dt]=0,G[dt]=-1;var tt=it[dt];if(tt!==null)for(it[dt]=null,dt=0;dt<tt.length;dt++){var ut=tt[dt];ut!==null&&(ut.lane&=-536870913)}a&=~Et}s!==0&&Ar(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Ar(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-me(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function yo(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-me(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Eo(t,n){var a=n&-n;return a=(a&42)!==0?1:To(a),(a&(t.suspendedLanes|n))!==0?0:a}function To(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function bo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ql(){var t=At.p;return t!==0?t:(t=window.event,t===void 0?32:Iv(t.type))}function Wl(t,n){var a=At.p;try{return At.p=t,n()}finally{At.p=a}}var Si=Math.random().toString(36).slice(2),A="__reactFiber$"+Si,K="__reactProps$"+Si,pt="__reactContainer$"+Si,lt="__reactEvents$"+Si,ct="__reactListeners$"+Si,Gt="__reactHandles$"+Si,Yt="__reactResources$"+Si,It="__reactMarker$"+Si,Jt="__reactLoad$"+Si;function $t(t){delete t[A],delete t[K],delete t[ct],delete t[Gt]}function ue(t){var n;if(n=t[A])return n;for(var a=t.parentNode;a;){if(n=a[pt]||a[A]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=gv(t);t!==null;){if(a=t[A])return a;t=gv(t)}return n}t=a,a=t.parentNode}return null}function ge(t){if(t=t[A]||t[pt]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Zt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ae(t){var n=t[Yt];return n||(n=t[Yt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ee(t){t[It]=!0}function Je(t){t[Jt]=void 0}var ke=new Set,Sn={};function Vt(t,n){cn(t,n),cn(t+"Capture",n)}function cn(t,n){for(Sn[t]=n,t=0;t<n.length;t++)ke.add(n[t])}var Oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kn={},si={};function Wi(t){return bt.call(si,t)?!0:bt.call(kn,t)?!1:Oe.test(t)?si[t]=!0:(kn[t]=!0,!1)}var Te=!1;function Ve(){var t=Te;return Te=!1,t}function en(t,n,a){if(Wi(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function oi(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function De(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function un(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ga(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yl(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function tf(t){if(!t._valueTracker){var n=ga(t)?"checked":"value";t._valueTracker=Yl(t,n,""+t[n])}}function Hm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=ga(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var AM=/[\n"\\]/g;function Mi(t){return t.replace(AM,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ef(t,n,a,s,c,f,g,R){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+un(n)):t.value!==""+un(n)&&(t.value=""+un(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?g==="number"&&t.value==n?nf(t,un(t.value)):nf(t,un(n)):a!=null?nf(t,un(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+un(R):t.removeAttribute("name")}function Gm(t,n,a,s,c,f,g,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){tf(t);return}a=a!=null?""+un(a):"",n=n!=null?""+un(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=R?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),tf(t)}function nf(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function os(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+un(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Vm(t,n,a){if(n!=null&&(n=""+un(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+un(a):""}function Xm(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Ct(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=un(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),tf(t)}function ls(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var RM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function km(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||RM.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function qm(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",Te=!0);for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&(km(t,c,s),Te=!0)}else for(var f in n)n.hasOwnProperty(f)&&km(t,f,n[f])}function af(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var CM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zl(t){return wM.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yi(){}var rf=null;function sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cs=null,us=null;function Wm(t){var n=ge(t);if(n&&(t=n.stateNode)){var a=t[K]||null;t:switch(t=n.stateNode,n.type){case"input":if(ef(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Mi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[K]||null;if(!c)throw Error(r(90));ef(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Hm(s)}break t;case"textarea":Vm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&os(t,!!a.multiple,n,!1)}}}var of=!1;function Ym(t,n,a){if(of)return t(n,a);of=!0;try{var s=t(n);return s}finally{if(of=!1,(cs!==null||us!==null)&&(Zc(),cs&&(n=cs,t=us,us=cs=null,Wm(n),t)))for(n=0;n<t.length;n++)Wm(t[n])}}function Ao(t,n){var a=t.stateNode;if(a===null)return null;var s=a[K]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var _a=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lf=!1;if(_a)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){lf=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{lf=!1}var ka=null,cf=null,Kl=null;function Zm(){if(Kl)return Kl;var t,n=cf,a=n.length,s,c="value"in ka?ka.value:ka.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return Kl=c.slice(t,1<s?1-s:void 0)}function Ql(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Jl(){return!0}function Km(){return!1}function qn(t){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Jl:Km,this.isPropagationStopped=Km,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jl)},persist:function(){},isPersistent:Jl}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=qn(qa),Co=z({},qa,{view:0,detail:0}),DM=qn(Co),uf,ff,wo,$l=z({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wo&&(wo&&t.type==="mousemove"?(uf=t.screenX-wo.screenX,ff=t.screenY-wo.screenY):ff=uf=0,wo=t),uf)},movementY:function(t){return"movementY"in t?t.movementY:ff}}),Qm=qn($l),NM=z({},$l,{dataTransfer:0}),UM=qn(NM),LM=z({},Co,{relatedTarget:0}),df=qn(LM),OM=z({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),PM=qn(OM),IM=z({},qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zM=qn(IM),FM=z({},qa,{data:0}),Jm=qn(FM),BM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VM(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=GM[t])?!!n[t]:!1}function hf(){return VM}var XM=z({},Co,{key:function(t){if(t.key){var n=BM[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?HM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hf,charCode:function(t){return t.type==="keypress"?Ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kM=qn(XM),qM=z({},$l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jm=qn(qM),WM=z({},qa,{submitter:0}),YM=qn(WM),ZM=z({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hf}),KM=qn(ZM),QM=z({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),JM=qn(QM),jM=z({},$l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$M=qn(jM),ty=z({},qa,{newState:0,oldState:0,source:0}),ey=qn(ty),ny=[9,13,27,32],pf=_a&&"CompositionEvent"in window,Do=null;_a&&"documentMode"in document&&(Do=document.documentMode);var iy=_a&&"TextEvent"in window&&!Do,$m=_a&&(!pf||Do&&8<Do&&11>=Do),t0=" ",e0=!1;function n0(t,n){switch(t){case"keyup":return ny.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function i0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function ay(t,n){switch(t){case"compositionend":return i0(n);case"keypress":return n.which!==32?null:(e0=!0,t0);case"textInput":return t=n.data,t===t0&&e0?null:t;default:return null}}function ry(t,n){if(fs)return t==="compositionend"||!pf&&n0(t,n)?(t=Zm(),Kl=cf=ka=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return $m&&n.locale!=="ko"?null:n.data;default:return null}}var sy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function a0(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!sy[t.type]:n==="textarea"}function r0(t,n,a,s){cs?us?us.push(s):us=[s]:cs=s,n=tu(n,"onChange"),0<n.length&&(a=new jl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var No=null,Uo=null;function oy(t){W_(t,0)}function tc(t){var n=Zt(t);if(Hm(n))return t}function s0(t,n){if(t==="change")return n}var o0=!1;if(_a){var mf;if(_a){var gf="oninput"in document;if(!gf){var l0=document.createElement("div");l0.setAttribute("oninput","return;"),gf=typeof l0.oninput=="function"}mf=gf}else mf=!1;o0=mf&&(!document.documentMode||9<document.documentMode)}function c0(){No&&(No.detachEvent("onpropertychange",u0),Uo=No=null)}function u0(t){if(t.propertyName==="value"&&tc(Uo)){var n=[];r0(n,Uo,t,sf(t)),Ym(oy,n)}}function ly(t,n,a){t==="focusin"?(c0(),No=n,Uo=a,No.attachEvent("onpropertychange",u0)):t==="focusout"&&c0()}function cy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tc(Uo)}function uy(t,n){if(t==="click")return tc(n)}function fy(t,n){if(t==="input"||t==="change")return tc(n)}function dy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var li=typeof Object.is=="function"?Object.is:dy;function Lo(t,n){if(li(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!bt.call(n,c)||!li(t[c],n[c]))return!1}return!0}function _f(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function f0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function d0(t,n){var a=f0(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=f0(a)}}function h0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?h0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function p0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=_f(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=_f(t.document)}return n}function vf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var hy=_a&&"documentMode"in document&&11>=document.documentMode,ds=null,xf=null,Oo=null,Sf=!1;function m0(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Sf||ds==null||ds!==_f(s)||(s=ds,"selectionStart"in s&&vf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Oo&&Lo(Oo,s)||(Oo=s,s=tu(xf,"onSelect"),0<s.length&&(n=new jl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=ds)))}function Rr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var hs={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionrun:Rr("Transition","TransitionRun"),transitionstart:Rr("Transition","TransitionStart"),transitioncancel:Rr("Transition","TransitionCancel"),transitionend:Rr("Transition","TransitionEnd")},Mf={},g0={};_a&&(g0=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function Cr(t){if(Mf[t])return Mf[t];if(!hs[t])return t;var n=hs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in g0)return Mf[t]=n[a];return t}var _0=Cr("animationend"),v0=Cr("animationiteration"),x0=Cr("animationstart"),py=Cr("transitionrun"),my=Cr("transitionstart"),gy=Cr("transitioncancel"),S0=Cr("transitionend"),M0=new Map,yf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yf.push("scrollEnd");function Ui(t,n){M0.set(t,n),Vt(n,[t])}var _y=0;function va(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ii.identifierPrefix;var a=_y++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function y0(t){if(t==null||typeof t=="string")return t;var n=null,a=Ls;if(a!==null)for(var s=0;s<a.length;s++){var c=t[a[s]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??t.default}function xa(t,n){return t=y0(t),n=y0(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var ec=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},yi=[],ps=0,Ef=0;function nc(){for(var t=ps,n=Ef=ps=0;n<t;){var a=yi[n];yi[n++]=null;var s=yi[n];yi[n++]=null;var c=yi[n];yi[n++]=null;var f=yi[n];if(yi[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&E0(a,c,f)}}function ic(t,n,a,s){yi[ps++]=t,yi[ps++]=n,yi[ps++]=a,yi[ps++]=s,Ef|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Tf(t,n,a,s){return ic(t,n,a,s),ac(t)}function wr(t,n){return ic(t,null,null,n),ac(t)}function E0(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-me(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function ac(t){if(50<nl)throw nl=0,Yc=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ms={};function vy(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,n,a,s){return new vy(t,n,a,s)}function bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sa(t,n){var a=t.alternate;return a===null?(a=Jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function T0(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function rc(t,n,a,s,c,f){var g=0;if(s=t,typeof s=="function")bf(s)&&(g=1);else if(typeof s=="string")g=WE(t,a,Me.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Mt:return t=Jn(31,a,n,c),t.elementType=Mt,t.lanes=f,t;case D:return Dr(a.children,c,f,n);case U:g=8,c|=24;break;case X:return t=Jn(12,a,n,c|2),t.elementType=X,t.lanes=f,t;case W:return t=Jn(13,a,n,c),t.elementType=W,t.lanes=f,t;case $:return t=Jn(19,a,n,c),t.elementType=$,t.lanes=f,t;case Bt:case k:return t=c|32,t=Jn(30,a,n,t),t.elementType=k,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case Z:g=10;break t;case B:g=9;break t;case q:g=11;break t;case et:g=14;break t;case ht:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Jn(g,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Dr(t,n,a,s){return t=Jn(7,t,s,n),t.lanes=a,t}function Af(t,n,a){return t=Jn(6,t,null,n),t.lanes=a,t}function b0(t){var n=Jn(18,null,null,0);return n.stateNode=t,n}function Rf(t,n,a){return n=Jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var A0=new WeakMap;function Ei(t,n){if(typeof t=="object"&&t!==null){var a=A0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:St(n)},A0.set(t,n),n)}return{value:t,source:n,stack:St(n)}}var gs=[],_s=0,sc=null,Po=0,Ti=[],bi=0,Wa=null,Zi=1,Ki="";function Ma(t,n){gs[_s++]=Po,gs[_s++]=sc,sc=t,Po=n}function R0(t,n,a){Ti[bi++]=Zi,Ti[bi++]=Ki,Ti[bi++]=Wa,Wa=t;var s=Zi;t=Ki;var c=32-me(s)-1;s&=~(1<<c),a+=1;var f=32-me(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,Zi=1<<32-me(n)+c|a<<c|s,Ki=f+t}else Zi=1<<f|a<<c|s,Ki=t}function oc(t){t.return!==null&&(Ma(t,1),R0(t,1,0))}function Cf(t){for(;t===sc;)sc=gs[--_s],gs[_s]=null,Po=gs[--_s],gs[_s]=null;for(;t===Wa;)Wa=Ti[--bi],Ti[bi]=null,Ki=Ti[--bi],Ti[bi]=null,Zi=Ti[--bi],Ti[bi]=null}function C0(t,n){Ti[bi++]=Zi,Ti[bi++]=Ki,Ti[bi++]=Wa,Zi=n.id,Ki=n.overflow,Wa=t}var bn=null,nn=null,be=!1,Ya=null,Ai=!1,wf=Error(r(519));function Za(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Io(Ei(n,t)),wf}function w0(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[A]=t,n[K]=s,a){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(a=0;a<al.length;a++)Ce(al[a],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":Ce("invalid",n),Gm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ce("invalid",n);break;case"textarea":Ce("invalid",n),Xm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Q_(n.textContent,a)?(s.popover!=null&&(Ce("beforetoggle",n),Ce("toggle",n)),s.onScroll!=null&&Ce("scroll",n),s.onScrollEnd!=null&&Ce("scrollend",n),s.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||Za(t,!0)}function lc(t){for(bn=t.return;bn;)switch(bn.tag){case 5:case 31:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:bn=bn.return}}function vs(t){if(t!==bn)return!1;if(!be)return lc(t),be=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||rh(t.type,t.memoizedProps)),a=!a),a&&nn&&Za(t),lc(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));nn=mv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));nn=mv(t)}else n===27?(n=nn,ur(t.type)?(t=ph,ph=null,nn=t):nn=n):nn=bn?Ci(t.stateNode.nextSibling):null;return!0}function Nr(){nn=bn=null,be=!1}function Df(){var t=Ya;return t!==null&&(ti===null?ti=t:ti.push.apply(ti,t),Ya=null),t}function Io(t){Ya===null?Ya=[t]:Ya.push(t)}var Nf=Qt(null),Ur=null,ya=null;function Ka(t,n,a){ne(Nf,n._currentValue),n._currentValue=a}function Ea(t){t._currentValue=Nf.current,Nt(Nf)}function cc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Uf(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=c;for(var G=0;G<n.length;G++)if(R.context===n[G]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),cc(f.return,a,t),s||(g=null);break t}f=R.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),cc(g,a,t),g=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,g=c.alternate,g!==null&&(g.lanes|=a),cc(c.return,a,t),g=c.child,g=g!==null?g.sibling:null):g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Lr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var R=c.type;li(c.pendingProps.value,g.value)||(t!==null?t.push(R):t=[R])}}else if(c===he.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Xs):t=[Xs])}c=c.return}return t!==null&&Uf(n,t,a,s),n.flags|=262144,t!==null}function uc(t){for(t=t.firstContext;t!==null;){if(!li(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Or(t){Ur=t,ya=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return D0(Ur,t)}function fc(t,n){return Ur===null&&Or(t),D0(t,n)}function D0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ya===null){if(t===null)throw Error(r(308));ya=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ya=ya.next=n;return a}var xy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Sy=o.unstable_scheduleCallback,My=o.unstable_NormalPriority,pn={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lf(){return{controller:new xy,data:new Map,refCount:0}}function zo(t){t.refCount--,t.refCount===0&&Sy(My,function(){t.controller.abort()})}function N0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Fo=null;function yy(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Bo=null,Of=0,Pr=0,xs=null;function Ey(t,n){if(Bo===null){var a=Bo=[];Of=0,Pr=Qd(),xs={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Of++,n.then(U0,U0),n}function U0(){if(--Of===0&&(Fo=null,Bo!==null)){xs!==null&&(xs.status="fulfilled");var t=Bo;Bo=null,Pr=0,xs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Ty(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var L0=ot.S;ot.S=function(t,n){if(b_=Wt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ey(t,n),Fo!==null)for(var a=zs;a!==null;)N0(a,Fo),a=a.next;if(a=t.types,a!==null){for(var s=zs;s!==null;)N0(s,a),s=s.next;if(Pr!==0){s=Fo,s===null&&(s=Fo=[]);for(var c=0;c<a.length;c++){var f=a[c];s.indexOf(f)===-1&&s.push(f)}}}L0!==null&&L0(t,n)};var Ir=Qt(null);function Pf(){var t=Ir.current;return t!==null?t:$e.pooledCache}function dc(t,n){n===null?ne(Ir,Ir.current):ne(Ir,n.pool)}function O0(){var t=Pf();return t===null?null:{parent:pn._currentValue,pool:t}}var Ss=Error(r(460)),If=Error(r(474)),hc=Error(r(542)),pc={then:function(){}};function P0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function I0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,F0(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(t=$e,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,F0(t),t}throw Fr=n,Ss}}function zr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Fr=a,Ss):a}}var Fr=null;function z0(){if(Fr===null)throw Error(r(459));var t=Fr;return Fr=null,t}function F0(t){if(t===Ss||t===hc)throw Error(r(483))}var Ms=null,Ho=0;function mc(t){var n=Ho;return Ho+=1,Ms===null&&(Ms=[]),I0(Ms,t,n)}function Qa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function gc(t,n){throw n.$$typeof===E?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function B0(t){function n(nt,Q){if(t){var st=nt.deletions;st===null?(nt.deletions=[Q],nt.flags|=16):st.push(Q)}}function a(nt,Q){if(!t)return null;for(;Q!==null;)n(nt,Q),Q=Q.sibling;return null}function s(nt){for(var Q=new Map;nt!==null;)nt.key===null?Q.set(nt.index,nt):Q.set(nt.key,nt),nt=nt.sibling;return Q}function c(nt,Q){return nt=Sa(nt,Q),nt.index=0,nt.sibling=null,nt}function f(nt,Q,st){return nt.index=st,t?(st=nt.alternate,st!==null?(st=st.index,st<Q?(nt.flags|=2,Q):st):(nt.flags|=134217730,Q)):(nt.flags|=1048576,Q)}function g(nt){return t&&nt.alternate===null&&(nt.flags|=134217730),nt}function R(nt,Q,st,yt){return Q===null||Q.tag!==6?(Q=Af(st,nt.mode,yt),Q.return=nt,Q):(Q=c(Q,st),Q.return=nt,Q)}function G(nt,Q,st,yt){var Kt=st.type;return Kt===D?(nt=dt(nt,Q,st.props.children,yt,st.key),Qa(nt,st),nt):Q!==null&&(Q.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===ht&&zr(Kt)===Q.type)?(Q=c(Q,st.props),Qa(Q,st),Q.return=nt,Q):(Q=rc(st.type,st.key,st.props,null,nt.mode,yt),Qa(Q,st),Q.return=nt,Q)}function it(nt,Q,st,yt){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==st.containerInfo||Q.stateNode.implementation!==st.implementation?(Q=Rf(st,nt.mode,yt),Q.return=nt,Q):(Q=c(Q,st.children||[]),Q.return=nt,Q)}function dt(nt,Q,st,yt,Kt){return Q===null||Q.tag!==7?(Q=Dr(st,nt.mode,yt,Kt),Q.return=nt,Q):(Q=c(Q,st),Q.return=nt,Q)}function Et(nt,Q,st){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=Af(""+Q,nt.mode,st),Q.return=nt,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case P:return st=rc(Q.type,Q.key,Q.props,null,nt.mode,st),Qa(st,Q),st.return=nt,st;case b:return Q=Rf(Q,nt.mode,st),Q.return=nt,Q;case ht:return Q=zr(Q),Et(nt,Q,st)}if(Ct(Q)||H(Q))return Q=Dr(Q,nt.mode,st,null),Q.return=nt,Q;if(typeof Q.then=="function")return Et(nt,mc(Q),st);if(Q.$$typeof===Z)return Et(nt,fc(nt,Q),st);gc(nt,Q)}return null}function tt(nt,Q,st,yt){var Kt=Q!==null?Q.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return Kt!==null?null:R(nt,Q,""+st,yt);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case P:return st.key===Kt?G(nt,Q,st,yt):null;case b:return st.key===Kt?it(nt,Q,st,yt):null;case ht:return st=zr(st),tt(nt,Q,st,yt)}if(Ct(st)||H(st))return Kt!==null?null:dt(nt,Q,st,yt,null);if(typeof st.then=="function")return tt(nt,Q,mc(st),yt);if(st.$$typeof===Z)return tt(nt,Q,fc(nt,st),yt);gc(nt,st)}return null}function ut(nt,Q,st,yt,Kt){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return nt=nt.get(st)||null,R(Q,nt,""+yt,Kt);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case P:return nt=nt.get(yt.key===null?st:yt.key)||null,G(Q,nt,yt,Kt);case b:return nt=nt.get(yt.key===null?st:yt.key)||null,it(Q,nt,yt,Kt);case ht:return yt=zr(yt),ut(nt,Q,st,yt,Kt)}if(Ct(yt)||H(yt))return nt=nt.get(st)||null,dt(Q,nt,yt,Kt,null);if(typeof yt.then=="function")return ut(nt,Q,st,mc(yt),Kt);if(yt.$$typeof===Z)return ut(nt,Q,st,fc(Q,yt),Kt);gc(Q,yt)}return null}function zt(nt,Q,st,yt){for(var Kt=null,Ue=null,oe=Q,ce=Q=0,_n=null;oe!==null&&ce<st.length;ce++){oe.index>ce?(_n=oe,oe=null):_n=oe.sibling;var Fe=tt(nt,oe,st[ce],yt);if(Fe===null){oe===null&&(oe=_n);break}t&&oe&&Fe.alternate===null&&n(nt,oe),Q=f(Fe,Q,ce),Ue===null?Kt=Fe:Ue.sibling=Fe,Ue=Fe,oe=_n}if(ce===st.length)return a(nt,oe),be&&Ma(nt,ce),Kt;if(oe===null){for(;ce<st.length;ce++)oe=Et(nt,st[ce],yt),oe!==null&&(Q=f(oe,Q,ce),Ue===null?Kt=oe:Ue.sibling=oe,Ue=oe);return be&&Ma(nt,ce),Kt}for(oe=s(oe);ce<st.length;ce++)_n=ut(oe,nt,ce,st[ce],yt),_n!==null&&(t&&(Fe=_n.alternate,Fe!==null&&oe.delete(Fe.key===null?ce:Fe.key)),Q=f(_n,Q,ce),Ue===null?Kt=_n:Ue.sibling=_n,Ue=_n);return t&&oe.forEach(function(mr){return n(nt,mr)}),be&&Ma(nt,ce),Kt}function te(nt,Q,st,yt){if(st==null)throw Error(r(151));for(var Kt=null,Ue=null,oe=Q,ce=Q=0,_n=null,Fe=st.next();oe!==null&&!Fe.done;ce++,Fe=st.next()){oe.index>ce?(_n=oe,oe=null):_n=oe.sibling;var mr=tt(nt,oe,Fe.value,yt);if(mr===null){oe===null&&(oe=_n);break}t&&oe&&mr.alternate===null&&n(nt,oe),Q=f(mr,Q,ce),Ue===null?Kt=mr:Ue.sibling=mr,Ue=mr,oe=_n}if(Fe.done)return a(nt,oe),be&&Ma(nt,ce),Kt;if(oe===null){for(;!Fe.done;ce++,Fe=st.next())Fe=Et(nt,Fe.value,yt),Fe!==null&&(Q=f(Fe,Q,ce),Ue===null?Kt=Fe:Ue.sibling=Fe,Ue=Fe);return be&&Ma(nt,ce),Kt}for(oe=s(oe);!Fe.done;ce++,Fe=st.next())Fe=ut(oe,nt,ce,Fe.value,yt),Fe!==null&&(t&&(_n=Fe.alternate,_n!==null&&oe.delete(_n.key===null?ce:_n.key)),Q=f(Fe,Q,ce),Ue===null?Kt=Fe:Ue.sibling=Fe,Ue=Fe);return t&&oe.forEach(function(a1){return n(nt,a1)}),be&&Ma(nt,ce),Kt}function Se(nt,Q,st,yt){if(typeof st=="object"&&st!==null&&st.type===D&&st.key===null&&st.props.ref===void 0&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case P:t:{for(var Kt=st.key;Q!==null;){if(Q.key===Kt){if(Kt=st.type,Kt===D){if(Q.tag===7){a(nt,Q.sibling),yt=c(Q,st.props.children),Qa(yt,st),yt.return=nt,nt=yt;break t}}else if(Q.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===ht&&zr(Kt)===Q.type){a(nt,Q.sibling),yt=c(Q,st.props),Qa(yt,st),yt.return=nt,nt=yt;break t}a(nt,Q);break}else n(nt,Q);Q=Q.sibling}st.type===D?(yt=Dr(st.props.children,nt.mode,yt,st.key),Qa(yt,st),yt.return=nt,nt=yt):(yt=rc(st.type,st.key,st.props,null,nt.mode,yt),Qa(yt,st),yt.return=nt,nt=yt)}return g(nt);case b:t:{for(Kt=st.key;Q!==null;){if(Q.key===Kt)if(Q.tag===4&&Q.stateNode.containerInfo===st.containerInfo&&Q.stateNode.implementation===st.implementation){a(nt,Q.sibling),yt=c(Q,st.children||[]),yt.return=nt,nt=yt;break t}else{a(nt,Q);break}else n(nt,Q);Q=Q.sibling}yt=Rf(st,nt.mode,yt),yt.return=nt,nt=yt}return g(nt);case ht:return st=zr(st),Se(nt,Q,st,yt)}if(Ct(st))return zt(nt,Q,st,yt);if(H(st)){if(Kt=H(st),typeof Kt!="function")throw Error(r(150));return st=Kt.call(st),te(nt,Q,st,yt)}if(typeof st.then=="function")return Se(nt,Q,mc(st),yt);if(st.$$typeof===Z)return Se(nt,Q,fc(nt,st),yt);gc(nt,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,Q!==null&&Q.tag===6?(a(nt,Q.sibling),yt=c(Q,st),yt.return=nt,nt=yt):(a(nt,Q),yt=Af(st,nt.mode,yt),yt.return=nt,nt=yt),g(nt)):a(nt,Q)}return function(nt,Q,st,yt){try{Ho=0;var Kt=Se(nt,Q,st,yt);return Ms=null,Kt}catch(oe){if(oe===Ss||oe===hc)throw oe;var Ue=Jn(29,oe,null,nt.mode);return Ue.lanes=yt,Ue.return=nt,Ue}}}var Br=B0(!0),H0=B0(!1),Ja=!1;function zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ff(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ja(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function $a(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Xe&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=ac(t),E0(t,null,a),n}return ic(t,s,n,a),ac(t)}function Go(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,yo(t,a)}}function Bf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Hf=!1;function Vo(){if(Hf){var t=xs;if(t!==null)throw t}}function Xo(t,n,a,s){Hf=!1;var c=t.updateQueue;Ja=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var G=R,it=G.next;G.next=null,g===null?f=it:g.next=it,g=G;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,R=dt.lastBaseUpdate,R!==g&&(R===null?dt.firstBaseUpdate=it:R.next=it,dt.lastBaseUpdate=G))}if(f!==null){var Et=c.baseState;g=0,dt=it=G=null,R=f;do{var tt=R.lane&-536870913,ut=tt!==R.lane;if(ut?(Ne&tt)===tt:(s&tt)===tt){tt!==0&&tt===Pr&&(Hf=!0),dt!==null&&(dt=dt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var zt=t,te=R;tt=n;var Se=a;switch(te.tag){case 1:if(zt=te.payload,typeof zt=="function"){Et=zt.call(Se,Et,tt);break t}Et=zt;break t;case 3:zt.flags=zt.flags&-65537|128;case 0:if(zt=te.payload,tt=typeof zt=="function"?zt.call(Se,Et,tt):zt,tt==null)break t;Et=z({},Et,tt);break t;case 2:Ja=!0}}tt=R.callback,tt!==null&&(t.flags|=64,ut&&(t.flags|=8192),ut=c.callbacks,ut===null?c.callbacks=[tt]:ut.push(tt))}else ut={lane:tt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},dt===null?(it=dt=ut,G=Et):dt=dt.next=ut,g|=tt;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;ut=R,R=ut.next,ut.next=null,c.lastBaseUpdate=ut,c.shared.pending=null}}while(!0);dt===null&&(G=Et),c.baseState=G,c.firstBaseUpdate=it,c.lastBaseUpdate=dt,f===null&&(c.shared.lanes=0),sr|=g,t.lanes=g,t.memoizedState=Et}}function G0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function V0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)G0(a[t],n)}var tr=Qt(null),_c=Qt(0);function X0(t,n){t=Ca,ne(_c,t),ne(tr,n),Ca=t|n.baseLanes}function Gf(){ne(_c,Ca),ne(tr,tr.current)}function Vf(){Ca=_c.current,Nt(tr),Nt(_c)}var Dn=Qt(null),Fn=null;function er(t){var n=t.alternate;ne(Nn,Nn.current&1),ne(Dn,t),Fn===null&&(n===null||tr.current!==null||n.memoizedState!==null)&&(Fn=t)}function Xf(t){ne(Nn,Nn.current),ne(Dn,t),Fn===null&&(Fn=t)}function k0(t){t.tag===22?(ne(Nn,Nn.current),ne(Dn,t),Fn===null&&(Fn=t)):nr()}function nr(){ne(Nn,Nn.current),ne(Dn,Dn.current)}function ci(t){Nt(Dn),Fn===t&&(Fn=null),Nt(Nn)}var Nn=Qt(0);function ko(t,n){ne(Dn,Dn.current),ne(Nn,n)}function kf(t){Nt(Nn),Nt(Dn),Fn===t&&(Fn=null)}function vc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||dh(a)||hh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ta=0,xe=null,je=null,mn=null,xc=!1,ys=!1,Hr=!1,Sc=0,qo=0,Es=null,by=0;function fn(){throw Error(r(321))}function qf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!li(t[a],n[a]))return!1;return!0}function Wf(t,n,a,s,c,f){return Ta=f,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ot.H=t===null||t.memoizedState===null?Rg:Cg,Hr=!1,f=a(s,c),Hr=!1,ys&&(f=W0(n,a,s,c)),q0(t),f}function q0(t){ot.H=Rc;var n=je!==null&&je.next!==null;if(Ta=0,mn=je=xe=null,xc=!1,qo=0,Es=null,n)throw Error(r(300));t===null||gn||(t=t.dependencies,t!==null&&uc(t)&&(gn=!0))}function W0(t,n,a,s){xe=t;var c=0;do{if(ys&&(Es=null),qo=0,ys=!1,25<=c)throw Error(r(301));if(c+=1,mn=je=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}ot.H=Ly,f=n(a,s)}while(ys);return f}function Ay(){var t=ot.H,n=t.useState()[0];return n=typeof n.then=="function"?Wo(n):n,t=t.useState()[0],(je!==null?je.memoizedState:null)!==t&&(xe.flags|=1024),n}function Yf(){var t=Sc!==0;return Sc=0,t}function Zf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Kf(t){if(xc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}xc=!1}Ta=0,mn=je=xe=null,ys=!1,qo=Sc=0,Es=null}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?xe.memoizedState=mn=t:mn=mn.next=t,mn}function hn(){if(je===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var n=mn===null?xe.memoizedState:mn.next;if(n!==null)mn=n,je=t;else{if(t===null)throw xe.alternate===null?Error(r(467)):Error(r(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},mn===null?xe.memoizedState=mn=t:mn=mn.next=t}return mn}function Mc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wo(t){var n=qo;return qo+=1,Es===null&&(Es=[]),t=I0(Es,t,n),n=xe,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,ot.H=n===null||n.memoizedState===null?Rg:Cg),t}function yc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Wo(t);if(t.$$typeof===mt)return;if(t.$$typeof===Z)return wn(t)}throw Error(r(438,String(t)))}function Qf(t){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=xe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Mc(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=Dt;return n.index++,a}function ba(t,n){return typeof n=="function"?n(t):n}function Ec(t){var n=hn();return Jf(n,je,t)}function Jf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var R=g=null,G=null,it=n,dt=!1;do{var Et=it.lane&-536870913;if(Et!==it.lane?(Ne&Et)===Et:(Ta&Et)===Et){var tt=it.revertLane;if(tt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),Et===Pr&&(dt=!0);else if((Ta&tt)===tt){it=it.next,tt===Pr&&(dt=!0);continue}else Et={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(R=G=Et,g=f):G=G.next=Et,xe.lanes|=tt,sr|=tt;Et=it.action,Hr&&a(f,Et),f=it.hasEagerState?it.eagerState:a(f,Et)}else tt={lane:Et,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(R=G=tt,g=f):G=G.next=tt,xe.lanes|=Et,sr|=Et;it=it.next}while(it!==null&&it!==n);if(G===null?g=f:G.next=R,!li(f,t.memoizedState)&&(gn=!0,dt&&(a=xs,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=G,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function jf(t){var n=hn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);li(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Y0(t,n,a){var s=xe,c=hn(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!li((je||c).memoizedState,a);if(g&&(c.memoizedState=a,gn=!0),c=c.queue,ed(Q0.bind(null,s,c,t),[t]),t=c.getSnapshot!==n||g||mn!==null&&(mn.memoizedState.tag&1)!==0,Ts(t?9:8,{destroy:void 0},K0.bind(null,s,c,a,n),null),t){if(s.flags|=2048,$e===null)throw Error(r(349));f||(Ta&127)!==0||Z0(s,n,a)}return a}function Z0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=Mc(),xe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function K0(t,n,a,s){n.value=a,n.getSnapshot=s,J0(n)&&j0(t)}function Q0(t,n,a){return a(function(){J0(n)&&j0(t)})}function J0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!li(t,a)}catch{return!0}}function j0(t){var n=wr(t,2);n!==null&&ei(n,t,2)}function $f(t){var n=Wn();if(typeof t=="function"){var a=t;if(t=a(),Hr){Le(!0);try{a()}finally{Le(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},n}function $0(t,n,a,s){return t.baseState=a,Jf(t,je,typeof s=="function"?s:ba)}function Ry(t,n,a,s,c){if(Ac(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};ot.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,tg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function tg(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=ot.T,g={};g.types=f!==null?f.types:null,ot.T=g;try{var R=a(c,s),G=ot.S;G!==null&&G(g,R),eg(t,n,R)}catch(it){td(t,n,it)}finally{f!==null&&g.types!==null&&(f.types=g.types),ot.T=f}}else try{f=a(c,s),eg(t,n,f)}catch(it){td(t,n,it)}}function eg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){ng(t,n,s)},function(s){return td(t,n,s)}):ng(t,n,a)}function ng(t,n,a){n.status="fulfilled",n.value=a,ig(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,tg(t,a)))}function td(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,ig(n),n=n.next;while(n!==s)}t.action=null}function ig(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function ag(t,n){return n}function rg(t,n){if(be){var a=$e.formState;if(a!==null){t:{var s=xe;if(be){if(nn){e:{for(var c=nn,f=Ai;c.nodeType!==8;){if(!f){c=null;break e}if(c=Ci(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){nn=Ci(c.nextSibling),s=c.data==="F!";break t}}Za(s)}s=!1}s&&(n=a[0])}}return a=Wn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ag,lastRenderedState:n},a.queue=s,a=Tg.bind(null,xe,s),s.dispatch=a,s=$f(!1),f=sd.bind(null,xe,!1,s.queue),s=Wn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Ry.bind(null,xe,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function sg(t){var n=hn();return og(n,je,t)}function og(t,n,a){if(n=Jf(t,n,ag)[0],t=Ec(ba)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Wo(n)}catch(g){throw g===Ss?hc:g}else s=n;n=hn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(xe.flags|=2048,Ts(9,{destroy:void 0},Cy.bind(null,c,a),null)),[s,f,t]}function Cy(t,n){t.action=n}function lg(t){var n=hn(),a=je;if(a!==null)return og(n,a,t);hn(),n=n.memoizedState,a=hn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Ts(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=xe.updateQueue,n===null&&(n=Mc(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function cg(){return hn().memoizedState}function Tc(t,n,a,s){var c=Wn();xe.flags|=t,c.memoizedState=Ts(1|n,{destroy:void 0},a,s===void 0?null:s)}function bc(t,n,a,s){var c=hn();s=s===void 0?null:s;var f=c.memoizedState.inst;je!==null&&s!==null&&qf(s,je.memoizedState.deps)?c.memoizedState=Ts(n,f,a,s):(xe.flags|=t,c.memoizedState=Ts(1|n,f,a,s))}function ug(t,n){Tc(8390656,8,t,n)}function ed(t,n){bc(2048,8,t,n)}function wy(t){xe.flags|=4;var n=xe.updateQueue;if(n===null)n=Mc(),xe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function fg(t){var n=hn().memoizedState;return wy({ref:n,nextImpl:t}),function(){if((Xe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function dg(t,n){return bc(4,2,t,n)}function hg(t,n){return bc(4,4,t,n)}function pg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function mg(t,n,a){a=a!=null?a.concat([t]):null,bc(4,4,pg.bind(null,n,t),a)}function nd(){}function gg(t,n){var a=hn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&qf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function _g(t,n){var a=hn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&qf(n,s[1]))return s[0];if(s=t(),Hr){Le(!0);try{t()}finally{Le(!1)}}return a.memoizedState=[s,n],s}function id(t,n,a){return a===void 0||(Ta&1073741824)!==0&&(Ne&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=R_(),xe.lanes|=t,sr|=t,a)}function vg(t,n,a,s){return li(a,n)?a:tr.current!==null?(t=id(t,a,s),li(t,n)||(gn=!0),t):(Ta&106)===0||(Ta&1073741824)!==0&&(Ne&261930)===0?(gn=!0,t.memoizedState=a):(t=R_(),xe.lanes|=t,sr|=t,n)}function xg(t,n,a,s,c){var f=At.p;At.p=f!==0&&8>f?f:8;var g=ot.T,R={};R.types=g!==null?g.types:null,ot.T=R,sd(t,!1,n,a);try{var G=c(),it=ot.S;if(it!==null&&it(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var dt=Ty(G,s);Yo(t,n,dt,hi(t))}else Yo(t,n,s,hi(t))}catch(Et){Yo(t,n,{then:function(){},status:"rejected",reason:Et},hi())}finally{At.p=f,g!==null&&R.types!==null&&(g.types=R.types),ot.T=g}}function Dy(){}function ad(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Sg(t).queue;xg(t,c,n,ae,a===null?Dy:function(){return Mg(t),a(s)})}function Sg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:ae},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Mg(t){var n=Sg(t);n.next===null&&(n=t.alternate.memoizedState),Yo(t,n.next.queue,{},hi())}function rd(){return wn(Xs)}function yg(){return hn().memoizedState}function Eg(){return hn().memoizedState}function Ny(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=hi();t=ja(a);var s=$a(n,t,a);s!==null&&(ei(s,n,a),Go(s,n,a)),n={cache:Lf()},t.payload=n;return}n=n.return}}function Uy(t,n,a){var s=hi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ac(t)?bg(n,a):(a=Tf(t,n,a,s),a!==null&&(ei(a,t,s),Ag(a,n,s)))}function Tg(t,n,a){var s=hi();Yo(t,n,a,s)}function Yo(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ac(t))bg(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,R=f(g,a);if(c.hasEagerState=!0,c.eagerState=R,li(R,g))return ic(t,n,c,0),$e===null&&nc(),!1}catch{}if(a=Tf(t,n,c,s),a!==null)return ei(a,t,s),Ag(a,n,s),!0}return!1}function sd(t,n,a,s){if(s={lane:2,revertLane:Qd(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Ac(t)){if(n)throw Error(r(479))}else n=Tf(t,a,s,2),n!==null&&ei(n,t,2)}function Ac(t){var n=t.alternate;return t===xe||n!==null&&n===xe}function bg(t,n){ys=xc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Ag(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,yo(t,a)}}var Rc={readContext:wn,use:yc,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn,useEffectEvent:fn},Rg={readContext:wn,use:yc,useCallback:function(t,n){return Wn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:ug,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Tc(4194308,4,pg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Tc(4194308,4,t,n)},useInsertionEffect:function(t,n){Tc(4,2,t,n)},useMemo:function(t,n){var a=Wn();n=n===void 0?null:n;var s=t();if(Hr){Le(!0);try{t()}finally{Le(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Wn();if(a!==void 0){var c=a(n);if(Hr){Le(!0);try{a(n)}finally{Le(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Uy.bind(null,xe,t),[s.memoizedState,t]},useRef:function(t){var n=Wn();return t={current:t},n.memoizedState=t},useState:function(t){t=$f(t);var n=t.queue,a=Tg.bind(null,xe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:nd,useDeferredValue:function(t,n){var a=Wn();return id(a,t,n)},useTransition:function(){var t=$f(!1);return t=xg.bind(null,xe,t.queue,!0,!1),Wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=xe,c=Wn();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),$e===null)throw Error(r(349));(Ne&127)!==0||Z0(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,ug(Q0.bind(null,s,f,t),[t]),s.flags|=2048,Ts(9,{destroy:void 0},K0.bind(null,s,f,a,n),null),a},useId:function(){var t=Wn(),n=$e.identifierPrefix;if(be){var a=Ki,s=Zi;a=(s&~(1<<32-me(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Sc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=by++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:rd,useFormState:rg,useActionState:rg,useOptimistic:function(t){var n=Wn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=sd.bind(null,xe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Qf,useCacheRefresh:function(){return Wn().memoizedState=Ny.bind(null,xe)},useEffectEvent:function(t){var n=Wn(),a={impl:t};return n.memoizedState=a,function(){if((Xe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Cg={readContext:wn,use:yc,useCallback:gg,useContext:wn,useEffect:ed,useImperativeHandle:mg,useInsertionEffect:dg,useLayoutEffect:hg,useMemo:_g,useReducer:Ec,useRef:cg,useState:function(){return Ec(ba)},useDebugValue:nd,useDeferredValue:function(t,n){var a=hn();return vg(a,je.memoizedState,t,n)},useTransition:function(){var t=Ec(ba)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:Wo(t),n]},useSyncExternalStore:Y0,useId:yg,useHostTransitionStatus:rd,useFormState:sg,useActionState:sg,useOptimistic:function(t,n){var a=hn();return $0(a,je,t,n)},useMemoCache:Qf,useCacheRefresh:Eg,useEffectEvent:fg},Ly={readContext:wn,use:yc,useCallback:gg,useContext:wn,useEffect:ed,useImperativeHandle:mg,useInsertionEffect:dg,useLayoutEffect:hg,useMemo:_g,useReducer:jf,useRef:cg,useState:function(){return jf(ba)},useDebugValue:nd,useDeferredValue:function(t,n){var a=hn();return je===null?id(a,t,n):vg(a,je.memoizedState,t,n)},useTransition:function(){var t=jf(ba)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:Wo(t),n]},useSyncExternalStore:Y0,useId:yg,useHostTransitionStatus:rd,useFormState:lg,useActionState:lg,useOptimistic:function(t,n){var a=hn();return je!==null?$0(a,je,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Qf,useCacheRefresh:Eg,useEffectEvent:fg};function od(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:z({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ld={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=hi(),c=ja(s);c.payload=n,a!=null&&(c.callback=a),n=$a(t,c,s),n!==null&&(ei(n,t,s),Go(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=hi(),c=ja(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=$a(t,c,s),n!==null&&(ei(n,t,s),Go(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=hi(),s=ja(a);s.tag=2,n!=null&&(s.callback=n),n=$a(t,s,a),n!==null&&(ei(n,t,a),Go(n,t,a))}};function wg(t,n,a,s,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Lo(a,s)||!Lo(c,f):!0}function Dg(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&ld.enqueueReplaceState(n,n.state,null)}function Gr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=z({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Ng(t){ec(t)}function Ug(t){console.error(t)}function Lg(t){ec(t)}function Cc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Og(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function cd(t,n,a){return a=ja(a),a.tag=3,a.payload={element:null},a.callback=function(){Cc(t,n)},a}function Pg(t){return t=ja(t),t.tag=3,t}function Ig(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Og(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Og(n,a,s),typeof c!="function"&&(or===null?or=new Set([this]):or.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})})}function Oy(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Lr(n,a,c,!0),a=Dn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Fn===null?Kc():a.alternate===null&&dn===0&&(dn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===pc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Yd(t,s,c)),!1;case 22:return a.flags|=65536,s===pc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Yd(t,s,c)),!1}throw Error(r(435,a.tag))}return Yd(t,s,c),Kc(),!1}if(be)return n=Dn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==wf&&(t=Error(r(422),{cause:s}),Io(Ei(t,a)))):(s!==wf&&(n=Error(r(423),{cause:s}),Io(Ei(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Ei(s,a),c=cd(t.stateNode,s,c),Bf(t,c),dn!==4&&(dn=2)),!1;var f=Error(r(520),{cause:s});if(f=Ei(f,a),el===null?el=[f]:el.push(f),dn!==4&&(dn=2),n===null)return!0;s=Ei(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=cd(a.stateNode,s,t),Bf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(or===null||!or.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Pg(c),Ig(c,t,a,s),Bf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var ud=Error(r(461)),gn=!1;function Mn(t,n,a,s){n.child=t===null?H0(n,null,a,s):Br(n,t.child,a,s)}function zg(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var R in s)R!=="ref"&&(g[R]=s[R])}else g=s;return Or(n),s=Wf(t,n,a,g,f,c),R=Yf(),t!==null&&!gn?(Zf(t,n,c),Aa(t,n,c)):(be&&R&&oc(n),n.flags|=1,Mn(t,n,s,c),n.child)}function Fg(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!bf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Bg(t,n,f,s,c)):(t=rc(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!vd(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Lo,a(g,s)&&t.ref===n.ref)return Aa(t,n,c)}return n.flags|=1,t=Sa(f,s),t.ref=n.ref,t.return=n,n.child=t}function Bg(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Lo(f,s)&&t.ref===n.ref)if(gn=!1,n.pendingProps=s=f,vd(t,c))(t.flags&131072)!==0&&(gn=!0);else return n.lanes=t.lanes,Aa(t,n,c)}return fd(t,n,a,s,c)}function Hg(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Gg(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&dc(n,f!==null?f.cachePool:null),f!==null?X0(n,f):Gf(),k0(n);else return s=n.lanes=536870912,Gg(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(dc(n,f.cachePool),X0(n,f),nr(),n.memoizedState=null):(t!==null&&dc(n,null),Gf(),nr());return Mn(t,n,c,a),n.child}function Zo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Gg(t,n,a,s,c){var f=Pf();return f=f===null?null:{parent:pn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&dc(n,null),Gf(),k0(n),t!==null&&Lr(t,n,s,!0),n.childLanes=c,null}function wc(t,n){return n=Dc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Vg(t,n,a){return Br(n,t.child,null,a),t=wc(n,n.pendingProps),t.flags|=2,ci(n),n.memoizedState=null,t}function Py(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(be){if(s.mode==="hidden")return t=wc(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Zo(null,t);if(Xf(n),(t=nn)?(t=pv(t,Ai),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=b0(t),a.return=n,n.child=a,bn=n,nn=null)):t=null,t===null)throw Za(n);return n.lanes=536870912,null}return wc(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Xf(n),c)if(n.flags&256)n.flags&=-257,n=Vg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(gn||Lr(t,n,a,!1),c=(a&t.childLanes)!==0,gn||c){if(tr.current===null){if(s=$e,s!==null&&(g=Eo(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,wr(t,g),ei(s,t,g),ud;Kc()}n=Vg(t,n,a)}else t=f.treeContext,nn=Ci(g.nextSibling),bn=n,be=!0,Ya=null,Ai=!1,t!==null&&C0(n,t),n=wc(n,s),n.flags|=134221824;return n}return t=Sa(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function bs(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function fd(t,n,a,s,c){return Or(n),a=Wf(t,n,a,s,void 0,c),s=Yf(),t!==null&&!gn?(Zf(t,n,c),Aa(t,n,c)):(be&&s&&oc(n),n.flags|=1,Mn(t,n,a,c),n.child)}function Xg(t,n,a,s,c,f){return Or(n),n.updateQueue=null,a=W0(n,s,a,c),q0(t),s=Yf(),t!==null&&!gn?(Zf(t,n,f),Aa(t,n,f)):(be&&s&&oc(n),n.flags|=1,Mn(t,n,a,f),n.child)}function kg(t,n,a,s,c){if(Or(n),n.stateNode===null){var f=ms,g=a.contextType;typeof g=="object"&&g!==null&&(f=wn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ld,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},zf(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?wn(g):ms,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(od(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&ld.enqueueReplaceState(f,f.state,null),Xo(n,s,f,c),Vo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,G=Gr(a,R);f.props=G;var it=f.context,dt=a.contextType;g=ms,typeof dt=="object"&&dt!==null&&(g=wn(dt));var Et=a.getDerivedStateFromProps;dt=typeof Et=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||it!==g)&&Dg(n,f,s,g),Ja=!1;var tt=n.memoizedState;f.state=tt,Xo(n,s,f,c),Vo(),it=n.memoizedState,R||tt!==it||Ja?(typeof Et=="function"&&(od(n,a,Et,s),it=n.memoizedState),(G=Ja||wg(n,a,G,s,tt,it,g))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=it),f.props=s,f.state=it,f.context=g,s=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Ff(t,n),g=n.memoizedProps,dt=Gr(a,g),f.props=dt,Et=n.pendingProps,tt=f.context,it=a.contextType,G=ms,typeof it=="object"&&it!==null&&(G=wn(it)),R=a.getDerivedStateFromProps,(it=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==Et||tt!==G)&&Dg(n,f,s,G),Ja=!1,tt=n.memoizedState,f.state=tt,Xo(n,s,f,c),Vo();var ut=n.memoizedState;g!==Et||tt!==ut||Ja||t!==null&&t.dependencies!==null&&uc(t.dependencies)?(typeof R=="function"&&(od(n,a,R,s),ut=n.memoizedState),(dt=Ja||wg(n,a,dt,s,tt,ut,G)||t!==null&&t.dependencies!==null&&uc(t.dependencies))?(it||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ut,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ut,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ut),f.props=s,f.state=ut,f.context=G,s=dt):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,bs(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Br(n,t.child,null,c),n.child=Br(n,null,a,c)):Mn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Aa(t,n,c),t}function qg(t,n,a,s){return Nr(),n.flags|=256,Mn(t,n,a,s),n.child}var dd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hd(t){return{baseLanes:t,cachePool:O0()}}function pd(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=di),t}function Wg(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(Nn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(c?er(n):nr(),(t=nn)?(t=pv(t,Ai),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=b0(t),a.return=n,n.child=a,bn=n,nn=null)):t=null,t===null)throw Za(n);return hh(t)?n.lanes=32:n.lanes=536870912,null}return f=s.children,s=s.fallback,c?(nr(),c=n.mode,f=Dc({mode:"hidden",children:f},c),s=Dr(s,c,a,null),f.return=n,s.return=n,f.sibling=s,n.child=f,s=n.child,s.memoizedState=hd(a),s.childLanes=pd(t,g,a),n.memoizedState=dd,Zo(null,s)):(er(n),md(n,f))}var R=t.memoizedState;if(R!==null){var G=R.dehydrated;if(G!==null)return Iy(t,n,f,g,s,G,R,a)}return c?(nr(),c=s.fallback,f=n.mode,R=t.child,G=R.sibling,s=Sa(R,{mode:"hidden",children:s.children}),s.subtreeFlags=R.subtreeFlags&1206910976,G!==null?c=Sa(G,c):(c=Dr(c,f,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,Zo(null,s),s=n.child,c=t.child.memoizedState,c===null?c=hd(a):(f=c.cachePool,f!==null?(R=pn._currentValue,f=f.parent!==R?{parent:R,pool:R}:f):f=O0(),c={baseLanes:c.baseLanes|a,cachePool:f}),s.memoizedState=c,s.childLanes=pd(t,g,a),n.memoizedState=dd,Zo(t.child,s)):(er(n),a=t.child,t=a.sibling,a=Sa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function md(t,n){return n=Dc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Dc(t,n){return t=Jn(22,t,null,n),t.lanes=0,t}function Nc(t,n,a){return Br(n,t.child,null,a),t=md(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Iy(t,n,a,s,c,f,g,R){if(a)return n.flags&256?(er(n),n.flags&=-257,Nc(t,n,R)):n.memoizedState!==null?(nr(),n.child=t.child,n.flags|=128,null):(nr(),f=c.fallback,g=n.mode,c=Dc({mode:"visible",children:c.children},g),f=Dr(f,g,R,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Br(n,t.child,null,R),c=n.child,c.memoizedState=hd(R),c.childLanes=pd(t,s,R),n.memoizedState=dd,Zo(null,c));if(er(n),hh(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var G=s.dgst;return s=G,s!==""&&(c=Error(r(419)),c.stack="",c.digest=s,Io({value:c,source:null,stack:null})),Nc(t,n,R)}if(gn||Lr(t,n,R,!1),s=(R&t.childLanes)!==0,gn||s){if(tr.current!==null)return Nc(t,n,R);if(s=$e,s!==null&&(c=Eo(s,R),c!==0&&c!==g.retryLane))throw g.retryLane=c,wr(t,c),ei(s,t,c),ud;return dh(f)||Kc(),Nc(t,n,R)}return dh(f)?(n.flags|=192,n.child=t.child,null):(t=g.treeContext,nn=Ci(f.nextSibling),bn=n,be=!0,Ya=null,Ai=!1,t!==null&&C0(n,t),n=md(n,c.children),n.flags|=134221824,n)}function Yg(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),cc(t.return,n,a)}function Zg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&vc(a)===null&&(n=t),t=t.sibling}return n}function Uc(t,n,a,s,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function gd(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function _d(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=Nn.current;if(n.flags&128)return ko(n,g),null;var R=(g&2)!==0;if(R?(g=g&1|2,n.flags|=128):g&=1,ko(n,g),c==="backwards"&&t!==null?(gd(t),Mn(t,n,s,a),gd(t)):Mn(t,n,s,a),s=be?Po:0,!R&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yg(t,a,n);else if(t.tag===19)Yg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"backwards":a=Zg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,gd(n)),Uc(n,!0,c,null,f,s);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&vc(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Uc(n,!0,a,null,f,s);break;case"together":Uc(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=Zg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Uc(n,!1,c,a,f,s)}return n.child}function Kg(t,n,a){var s=n.pendingProps;return Ka(n,n.type,s.value),Mn(t,n,s.children,a),n.child}function Aa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),sr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Lr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Sa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Sa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function vd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&uc(t)))}function zy(t,n,a){switch(n.tag){case 3:Y(n,n.stateNode.containerInfo),Ka(n,pn,t.memoizedState.cache),Nr();break;case 27:case 5:He(n);break;case 4:Y(n,n.stateNode.containerInfo);break;case 10:Ka(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Xf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return er(n),n.flags|=128,null;s=Lr(t,n,a,!1);var c=n.child.childLanes;return s||(a&c)!==0?Wg(t,n,a):(er(n),t=Aa(t,n,a),t!==null?t.sibling:null)}er(n);break;case 19:if(n.flags&128)return _d(t,n,a);if(c=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Lr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return _d(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ko(n,Nn.current),s)break;return null;case 22:return n.lanes=0,Hg(t,n,a,n.pendingProps);case 24:Ka(n,pn,t.memoizedState.cache)}return Aa(t,n,a)}function Qg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)gn=!0;else{if(!vd(t,a)&&(n.flags&128)===0)return gn=!1,zy(t,n,a);gn=(t.flags&131072)!==0}else gn=!1,be&&(n.flags&1048576)!==0&&R0(n,Po,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=zr(n.elementType),n.type=t,typeof t=="function")bf(t)?(s=Gr(t,s),n.tag=1,n=kg(null,n,t,s,a)):(n.tag=0,n=fd(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===q){n.tag=11,n=zg(null,n,t,s,a);break t}else if(c===et){n.tag=14,n=Fg(null,n,t,s,a);break t}else if(c===Z){n.tag=10,n.type=t,n=Kg(null,n,a);break t}}throw n=_t(t)||t,Error(r(306,n,""))}}return n;case 0:return fd(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Gr(s,n.pendingProps),kg(t,n,s,c,a);case 3:t:{if(Y(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Ff(t,n),Xo(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Ka(n,pn,s),s!==f.cache&&Uf(n,[pn],a,!0),Vo(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=qg(t,n,s,a);break t}else if(s!==c){c=Ei(Error(r(424)),n),Io(c),n=qg(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,nn=Ci(t.firstChild),bn=n,be=!0,Ya=null,Ai=!0,a=H0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Nr(),s===c){n=Aa(t,n,a);break t}Mn(t,n,s,a)}n=n.child}return n;case 26:return bs(t,n),t===null?(a=Mv(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(n.stateNode=tv(n.type,n.pendingProps,ve.current,n)):n.memoizedState=Mv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return He(n),t===null&&be&&(s=n.stateNode=_v(n.type,n.pendingProps,ve.current),bn=n,Ai=!0,c=nn,ur(n.type)?(ph=c,nn=Ci(s.firstChild)):nn=c),Mn(t,n,n.pendingProps.children,a),bs(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&be&&((c=s=nn)&&(s=NE(s,n.type,n.pendingProps,Ai),s!==null?(n.stateNode=s,bn=n,nn=Ci(s.firstChild),Ai=!1,c=!0):c=!1),c||Za(n)),He(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,rh(c,f)?s=null:g!==null&&rh(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Wf(t,n,Ay,null,null,a),Xs._currentValue=c),bs(t,n),Mn(t,n,s,a),n.child;case 6:return t===null&&be&&((t=a=nn)&&(a=UE(a,n.pendingProps,Ai),a!==null?(n.stateNode=a,bn=n,nn=null,t=!0):t=!1),t||Za(n)),null;case 13:return Wg(t,n,a);case 4:return Y(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Br(n,null,s,a):Mn(t,n,s,a),n.child;case 11:return zg(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,bs(t,n),Mn(t,n,s,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return Kg(t,n,a);case 9:return c=n.type._context,s=n.pendingProps.children,Or(n),c=wn(c),s=s(c),n.flags|=1,Mn(t,n,s,a),n.child;case 14:return Fg(t,n,n.type,n.pendingProps,a);case 15:return Bg(t,n,n.type,n.pendingProps,a);case 19:return _d(t,n,a);case 31:return Py(t,n,a);case 22:return Hg(t,n,a,n.pendingProps);case 24:return Or(n),s=wn(pn),t===null?(c=Pf(),c===null&&(c=$e,f=Lf(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},zf(n),Ka(n,pn,c)):((t.lanes&a)!==0&&(Ff(t,n),Xo(n,null,null,a),Vo()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ka(n,pn,s)):(s=f.cache,Ka(n,pn,s),s!==c.cache&&Uf(n,[pn],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:be&&oc(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:bs(t,n),Mn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ra(t){t.flags|=4}function xd(t,n,a,s,c){var f;if((f=(t.mode&32)!==0)&&(f=a===null?bv(n,s):bv(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(N_())t.flags|=8192;else throw Fr=pc,If}else t.flags&=-16777217}function Jg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Av(n))if(N_())t.flags|=8192;else throw Fr=pc,If}function Lc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Mo():536870912,t.lanes|=n,Ds|=n)}function Ko(t,n){if(!be)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function an(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&1206910976,s|=c.flags&1206910976,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Fy(t,n,a){var s=n.pendingProps;switch(Cf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ea(pn),sn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(vs(n)?Ra(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Df())),an(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Ra(n),f!==null?(an(n),Jg(n,f)):(an(n),xd(n,c,null,s,a))):f?f!==t.memoizedState?(Ra(n),an(n),Jg(n,f)):(an(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Ra(n),an(n),xd(n,c,t,s,a)),null;case 27:if(F(n),a=ve.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ra(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return an(n),n.subtreeFlags&=-33554433,null}t=Me.current,vs(n)?w0(n):(t=_v(c,s,a),n.stateNode=t,Ra(n))}return an(n),n.subtreeFlags&=-33554433,null;case 5:if(F(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ra(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return an(n),n.subtreeFlags&=-33554433,null}if(f=Me.current,vs(n))w0(n);else{var g=sl(ve.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[A]=n,f[K]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Ln(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ra(n)}}return an(n),n.subtreeFlags&=-33554433,xd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ra(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=ve.current,vs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=bn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[A]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Q_(t.nodeValue,a)),t||Za(n,!0)}else t=sl(t).createTextNode(s),t[A]=n,n.stateNode=t}return an(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=vs(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[A]=n}else Nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),t=!1}else a=Df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ci(n),n):(ci(n),null);if((n.flags&128)!==0)throw Error(r(558))}return an(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=vs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[A]=n}else Nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),c=!1}else c=Df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ci(n),n):(ci(n),null)}return ci(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Lc(n,n.updateQueue),an(n),null);case 4:return sn(),t===null&&th(n.stateNode.containerInfo),n.flags|=67108864,an(n),null;case 10:return Ea(n.type),an(n),null;case 19:if(kf(n),s=n.memoizedState,s===null)return an(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)Ko(s,!1);else{if(dn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=vc(t),f!==null){for(n.flags|=128,Ko(s,!1),t=f.updateQueue,n.updateQueue=t,Lc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)T0(a,t),a=a.sibling;return ko(n,Nn.current&1|2),be&&Ma(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&Wt()>qc&&(n.flags|=128,c=!0,Ko(s,!1),n.lanes=4194304)}else{if(!c)if(t=vc(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Lc(n,t),Ko(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!f.alternate&&!be)return an(n),null}else 2*Wt()-s.renderingStartTime>qc&&a!==536870912&&(n.flags|=128,c=!0,Ko(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Wt(),t.sibling=null,f=Nn.current,f=c?f&1|2:f&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||be?ko(n,f):(a=f,ne(Dn,n),ne(Nn,a),Fn===null&&(Fn=n)),be&&Ma(n,s.treeForkCount),t}return an(n),null;case 22:case 23:return ci(n),Vf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),a=n.updateQueue,a!==null&&Lc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Nt(Ir),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ea(pn),an(n),null;case 25:return null;case 30:return n.flags|=33554432,an(n),null}throw Error(r(156,n.tag))}function By(t,n){switch(Cf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ea(pn),sn(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return F(n),null;case 31:if(n.memoizedState!==null){if(ci(n),n.alternate===null)throw Error(r(340));Nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ci(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return kf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return sn(),null;case 10:return Ea(n.type),null;case 22:case 23:return ci(n),Vf(),t!==null&&Nt(Ir),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ea(pn),null;case 25:return null;default:return null}}function jg(t,n){switch(Cf(n),n.tag){case 3:Ea(pn),sn();break;case 26:case 27:case 5:F(n);break;case 4:sn();break;case 31:n.memoizedState!==null&&ci(n);break;case 13:ci(n);break;case 19:kf(n);break;case 10:Ea(n.type);break;case 22:case 23:ci(n),Vf(),t!==null&&Nt(Ir);break;case 24:Ea(pn)}}function Qo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(R){Ye(n,n.return,R)}}function ir(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var g=s.inst,R=g.destroy;if(R!==void 0){g.destroy=void 0,c=n;var G=a,it=R;try{it()}catch(dt){Ye(c,G,dt)}}}s=s.next}while(s!==f)}}catch(dt){Ye(n,n.return,dt)}}function $g(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{V0(n,a)}catch(s){Ye(t,t.return,s)}}}function t_(t,n,a){a.props=Gr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ye(t,n,s)}}function Qi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var c=t.stateNode,f=va(t.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=ov(f)),s=c.ref;break;case 7:if(t.stateNode===null){var g=new pi(t);_(t.child,!1,wE,g,void 0,void 0),t.stateNode=g}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(R){Ye(t,n,R)}}function Un(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ye(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ye(t,n,c)}else a.current=null}function Oc(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)hv(t.stateNode,n[a])}function e_(t){for(var n=t.return;n!==null&&(Md(n)&&hv(t.stateNode,n.stateNode),!Sd(n));)n=n.return}function Jo(t){for(var n=t.return;n!==null&&(Md(n)&&DE(t.stateNode,n.stateNode),!Sd(n));)n=n.return}function Sd(t){return t.tag===5||t.tag===3||t.tag===27}function Md(t){return t&&t.tag===7&&t.stateNode!==null}function yd(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ye(t,t.return,c)}}function Ed(t,n,a){try{var s=t.stateNode;fE(s,t.type,a,n),s[K]=n}catch(c){Ye(t,t.return,c)}}function n_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ur(t.type)||t.tag===4}function Td(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||n_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ur(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bd(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi)),Oc(t,s),Te=!0;else if(c!==4&&(c===27&&(Oc(t,s),s=null,ur(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(bd(t,n,a,s),t=t.sibling;t!==null;)bd(t,n,a,s),t=t.sibling}function Pc(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Oc(t,s),Te=!0;else if(c!==4&&(c===27&&(Oc(t,s),s=null,ur(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Pc(t,n,a,s),t=t.sibling;t!==null;)Pc(t,n,a,s),t=t.sibling}function i_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Ln(n,s,a),n[A]=t,n[K]=a}catch(f){Ye(t,t.return,f)}}var Ic=!1,ui=null;function a_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Ic=!0)}var Ji=null;function r_(){var t=Ji;return Ji=null,t}var jn=0;function As(t,n,a,s,c){return jn=0,s_(t.child,n,a,s,c)}function s_(t,n,a,s,c){for(var f=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(s!==null){var R=lh(g);s.push(R),R.view&&(f=!0)}else f||lh(g).view&&(f=!0);Ic=!0,rv(g,jn===0?n:n+"_"+jn,a),jn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c||s_(t.child,n,a,s,c)&&(f=!0));t=t.sibling}return f}function ji(t,n){for(;t!==null;)t.tag===5?sv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||ji(t.child,n)),t=t.sibling}function zc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(zc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=xa(n.default,n.share),n!=="none"&&(As(t,a,n,null,!1)||ji(t.child,!1))}t=t.sibling}}function Ad(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,c=va(s,a),f=xa(s.default,a.paired?s.share:s.enter);f!=="none"?As(t,c,f,null,!1)?(zc(t),a.paired||n||Os(t,s.onEnter)):ji(t.child,!1):zc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Ad(t,n),t=t.sibling;else zc(t)}function Rd(t){if(ui!==null&&ui.size!==0){var n=ui;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var c=n.get(s);if(c!==void 0){var f=xa(a.default,a.share);if(f!=="none"&&(As(t,s,f,null,!1)?(f=t.stateNode,c.paired=f,f.paired=c,Os(t,a.onShare)):ji(t.child,!1)),n.delete(s),n.size===0)break}}}Rd(t)}t=t.sibling}}}function Cd(t){if(t.tag===30){var n=t.memoizedProps,a=va(n,t.stateNode),s=ui!==null?ui.get(a):void 0,c=xa(n.default,s!==void 0?n.share:n.exit);c!=="none"&&(As(t,a,c,null,!1)?s!==void 0?(c=t.stateNode,s.paired=c,c.paired=s,ui.delete(a),Os(t,n.onShare)):Os(t,n.onExit):ji(t.child,!1)),ui!==null&&Rd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Cd(t),t=t.sibling;else ui!==null&&Rd(t)}function o_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=va(n,t.stateNode);n=xa(n.default,n.update),t.flags&=-5,n!=="none"&&As(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&o_(t);t=t.sibling}}function wd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,ji(t.child,!1))}wd(t)}t=t.sibling}}function Fc(t){if(t.tag===30)t.stateNode.paired=null,ji(t.child,!1),wd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Fc(t),t=t.sibling;else wd(t)}function l_(t){for(t=t.child;t!==null;)t.tag===30?ji(t.child,!1):(t.subtreeFlags&33554432)!==0&&l_(t),t=t.sibling}function Dd(t,n,a,s,c,f,g){for(var R=!1;n!==null;){if(n.tag===5){var G=n.stateNode;if(f!==null&&jn<f.length){var it=f[jn],dt=lh(G);(it.view||dt.view)&&(R=!0);var Et;if(Et=(t.flags&4)===0)if(dt.clip)Et=!0;else{Et=it.rect;var tt=dt.rect;Et=Et.y!==tt.y||Et.x!==tt.x||Et.height!==tt.height||Et.width!==tt.width}Et&&(t.flags|=4),dt.abs?dt=!it.abs:(it=it.rect,dt=dt.rect,dt=it.height!==dt.height||it.width!==dt.width),dt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&rv(G,jn===0?a:a+"_"+jn,c),R&&(t.flags&4)!==0||(Ji===null&&(Ji=[]),Ji.push(G,jn===0?s:s+"_"+jn,n.memoizedProps)),jn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?t.flags|=n.flags&32:Dd(t,n.child,a,s,c,f,g)&&(R=!0));n=n.sibling}return R}function c_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,c=va(a,s),f=xa(a.default,a.update),g;g=t.memoizedState,t.memoizedState=null,s=t;var R=t.child;jn=0,c=Dd(s,R,c,c,f,g,!1),(t.flags&4)!==0&&c&&Os(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&c_(t);t=t.sibling}}var An=!1,qe=!1,$i=!1,Nd=!1,u_=typeof WeakSet=="function"?WeakSet:Set,Rn=null,ta=!1,jo=!1,Bc=!1,Ud=!1;function Hy(t,n,a){if(t=t.containerInfo,ih=ks,t=p0(t),vf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break t}var R=0,G=-1,it=-1,dt=0,Et=0,tt=t,ut=null;e:for(;;){for(var zt;tt!==s||f!==0&&tt.nodeType!==3||(G=R+f),tt!==g||c!==0&&tt.nodeType!==3||(it=R+c),tt.nodeType===3&&(R+=tt.nodeValue.length),(zt=tt.firstChild)!==null;)ut=tt,tt=zt;for(;;){if(tt===t)break e;if(ut===s&&++dt===f&&(G=R),ut===g&&++Et===c&&(it=R),(zt=tt.nextSibling)!==null)break;tt=ut,ut=tt.parentNode}tt=zt}s=G===-1||it===-1?null:{start:G,end:it}}else s=null}s=s||{start:0,end:0}}else s=null;for(ah={focusedElem:t,selectionRange:s},ks=!1,a=(a&335544064)===a,Rn=n,n=a?9270:1024;Rn!==null;){if(t=Rn,a&&(s=t.deletions,s!==null))for(f=0;f<s.length;f++)a&&Cd(s[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&a_(t),Hc(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&Cd(s),Hc(a);continue}else if(s!==null&&s.memoizedState!==null){a&&a_(t),Hc(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,Rn=s):(a&&o_(t),Hc(a))}}ui=null}function Hc(t){for(;Rn!==null;){var n=Rn,a=t,s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&s!==null){a=void 0,c=s.memoizedProps,s=s.memoizedState;var f=n.stateNode;try{var g=Gr(n.type,c);a=f.getSnapshotBeforeUpdate(g,s),f.__reactInternalSnapshotBeforeUpdate=a}catch(R){Ye(n,n.return,R)}}break;case 3:if((c&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)fh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":fh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=va(s.memoizedProps,s.stateNode),c=n.memoizedProps,c=xa(c.default,c.update),c!=="none"&&As(s,a,c,s.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Rn=s;break}Rn=n.return}}function f_(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ea(t,a),s&4&&Qo(5,a);break;case 1:if(ea(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Ye(a,a.return,g)}else{var c=Gr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Ye(a,a.return,g)}}s&64&&$g(a),s&512&&Qi(a,a.return);break;case 3:if(ea(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{V0(t,n)}catch(g){Ye(a,a.return,g)}}break;case 27:n===null&&s&4&&i_(a);case 26:case 5:ea(t,a),n===null&&s&4&&yd(a),s&512&&Qi(a,a.return);break;case 12:ea(t,a);break;case 31:ea(t,a),s&4&&m_(t,a);break;case 13:ea(t,a),s&4&&g_(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=jy.bind(null,a),LE(t,a))));break;case 22:if(s=a.memoizedState!==null||An,!s){var f=n!==null&&n.memoizedState!==null||qe;n=An,c=qe,An=s,(qe=f)&&!c?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Pi(t,a,s)):ea(t,a),An=n,qe=c}break;case 30:ea(t,a),s&512&&Qi(a,a.return);break;case 7:s&512&&Qi(a,a.return);default:ea(t,a)}}function Ld(t,n){for(t=t.child;t!==null;)d_(t,n),t=t.sibling}function d_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var c=t.stateNode,f=t.memoizedProps.style,g=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(G){Ye(t,t.return,G)}Od(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Te=!0}catch(G){Ye(t,t.return,G)}break;case 18:try{var R=t.stateNode;n?av(R,!0):av(t.stateNode,!1)}catch(G){Ye(t,t.return,G)}break;case 22:case 23:t.memoizedState===null&&Ld(t,n);break;default:Ld(t,n)}}function Od(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:d_(a,s);break t;case 22:a.memoizedState===null&&Od(a,s);break t;default:Od(a,s)}}t=t.sibling}}function h_(t){var n=t.alternate;n!==null&&(t.alternate=null,h_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&$t(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,$n=!1;function Li(t,n,a){for(a=a.child;a!==null;)p_(t,n,a),a=a.sibling}function p_(t,n,a){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(ee,a)}catch{}switch(a.tag){case 26:qe||Un(a,n),Li(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!qe&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qe||Un(a,n),Jo(a);var s=rn,c=$n;ur(a.type)&&(rn=a.stateNode,$n=!1),Li(t,n,a),vv(a.stateNode,a.type,a.memoizedProps),rn=s,$n=c;break;case 5:qe||Un(a,n),Jo(a);case 6:if(a.tag===6&&Jo(a),s=rn,c=$n,rn=null,Li(t,n,a),rn=s,$n=c,rn!==null)if($n)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode),Te=!0}catch(f){Ye(a,n,f)}else try{rn.removeChild(a.stateNode),Te=!0}catch(f){Ye(a,n,f)}break;case 18:rn!==null&&($n?(t=rn,iv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),qs(t)):iv(rn,a.stateNode));break;case 4:s=rn,c=$n,rn=a.stateNode.containerInfo,$n=!0,Li(t,n,a),rn=s,$n=c;break;case 0:case 11:case 14:case 15:ir(2,a,n),qe||ir(4,a,n),Li(t,n,a);break;case 1:qe||(Un(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&t_(a,n,s)),Li(t,n,a);break;case 21:Li(t,n,a);break;case 22:qe=(s=qe)||a.memoizedState!==null,Li(t,n,a),qe=s;break;case 30:Un(a,n),Li(t,n,a);break;case 7:qe||Un(a,n),Li(t,n,a);break;default:Li(t,n,a)}}function m_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{qs(t)}catch(a){Ye(n,n.return,a)}}}function g_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{qs(t)}catch(a){Ye(n,n.return,a)}}function Gy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new u_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new u_),n;default:throw Error(r(435,t.tag))}}function Gc(t,n){var a=Gy(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=$y.bind(null,t,s);s.then(c,c)}})}function Yn(t,n,a){var s=n.deletions;if(s!==null)for(var c=0;c<s.length;c++){var f=s[c],g=t,R=n,G=R;t:for(;G!==null;){switch(G.tag){case 27:if(ur(G.type)){rn=G.stateNode,$n=!1;break t}break;case 5:rn=G.stateNode,$n=!1;break t;case 3:case 4:rn=G.stateNode.containerInfo,$n=!0;break t}G=G.return}if(rn===null)throw Error(r(160));p_(g,R,f),rn=null,$n=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)__(n,t,a),n=n.sibling}var Oi=null;function __(t,n,a){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(c&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var f=0;f<s.length;f++){var g=s[f];g.ref.impl=g.nextImpl}Yn(n,t,a),Zn(t),c&4&&(ir(3,t,t.return),Qo(3,t),ir(5,t,t.return));break;case 1:Yn(n,t,a),Zn(t),c&512&&(qe||s===null||Un(s,s.return)),c&64&&An&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Oi,Yn(n,t,a),Zn(t),c&512&&(qe||s===null||Un(s,s.return)),c&4)if(c=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(An)t.stateNode=tv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,c=f.ownerDocument||f;e:switch(n){case"title":s=c.getElementsByTagName("title")[0],(!s||s[It]||s[A]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=c.createElement(n),c.head.insertBefore(s,c.querySelector("head > title"))),Ln(s,n,a),s[A]=t,Ee(s),n=s;break t;case"link":if(f=Tv("link","href",c).get(n+(a.href||""))){for(g=0;g<f.length;g++)if(s=f[g],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(g,1);break e}}s=c.createElement(n),Ln(s,n,a),c.head.appendChild(s);break;case"meta":if(f=Tv("meta","content",c).get(n+(a.content||""))){for(g=0;g<f.length;g++)if(s=f[g],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(g,1);break e}}s=c.createElement(n),Ln(s,n,a),c.head.appendChild(s);break;default:throw Error(r(468,n))}s[A]=t,Ee(s),n=s}t.stateNode=n}else An||vh(f,t.type,t.stateNode);else t.stateNode=Ev(f,a,t.memoizedProps);else c!==a?(c===null?(n=s.stateNode,n===null||qe||n.parentNode.removeChild(n)):c.count--,a===null?An||vh(f,t.type,t.stateNode):Ev(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Ed(t,t.memoizedProps,s.memoizedProps);break;case 27:Yn(n,t,a),Zn(t),c&512&&(qe||s===null||Un(s,s.return)),s!==null&&c&4&&Ed(t,t.memoizedProps,s.memoizedProps);break;case 5:if(f=$i,$i=!1,Yn(n,t,a),$i=f,Zn(t),c&512&&(qe||s===null||Un(s,s.return)),t.flags&32){n=t.stateNode;try{ls(n,""),Te=!0}catch(dt){Ye(t,t.return,dt)}}c&4&&t.stateNode!=null&&(n=t.memoizedProps,Ed(t,n,s!==null?s.memoizedProps:n)),c&1024&&(Nd=!0);break;case 6:if(Yn(n,t,a),Zn(t),c&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Te=!0}catch(dt){Ye(t,t.return,dt)}}break;case 3:if(Te=!1,nu=null,f=Oi,Oi=ol(n.containerInfo),Yn(n,t,a),Oi=f,Zn(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{qs(n.containerInfo)}catch(dt){Ye(t,t.return,dt)}Nd&&(Nd=!1,v_(t)),Te=!1;break;case 4:c=$i,$i=An,s=Ve(),f=Oi,Oi=ol(t.stateNode.containerInfo),Yn(n,t,a),Zn(t),Oi=f,Te&&jo&&(Bc=!0),Te=s,$i=c;break;case 12:Yn(n,t,a),Zn(t);break;case 31:Yn(n,t,a),Zn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Gc(t,n)));break;case 13:Yn(n,t,a),Zn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(kc=Wt()),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Gc(t,n)));break;case 22:f=t.memoizedState!==null,g=s!==null&&s.memoizedState!==null;var R=An,G=qe,it=$i;An=R||f,$i=it||f,qe=G||g,Yn(n,t,a),qe=G,$i=it,An=R,Zn(t),c&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||s===null||g||An||qe||(n=g||qe,a=An,s=qe,An=f||An,qe=n,ar(t,2),An=a,qe=s),!f&&$i||Ld(t,f)),c&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Gc(t,a))));break;case 19:Yn(n,t,a),Zn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Gc(t,n)));break;case 30:c&512&&(qe||s===null||Un(s,s.return)),c=Ve(),f=jo,g=(a&335544064)===a,R=t.memoizedProps,jo=g&&xa(R.default,R.update)!=="none",Yn(n,t,a),Zn(t),g&&s!==null&&Te&&(t.flags|=4),jo=f,Te=c;break;case 21:break;case 7:c&512&&(qe||s===null||Un(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Yn(n,t,a),Zn(t)}}function Zn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(n_(s)){a=s;break}s=s.return}s=null;for(var c=t.return;c!==null;){if(Md(c)){var f=c.stateNode;s===null?s=[f]:s.push(f)}if(Sd(c))break;c=c.return}var g=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var R=a.stateNode,G=Td(t);Pc(t,G,R,g);break;case 5:var it=a.stateNode;a.flags&32&&(ls(it,""),a.flags&=-33);var dt=Td(t);Pc(t,dt,it,g);break;case 3:case 4:var Et=a.stateNode.containerInfo,tt=Td(t);bd(t,tt,Et,g);break;default:throw Error(r(161))}}catch(ut){Ye(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function v_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;v_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,ks=!0,n.reset(),ks=!1),t=t.sibling}}function Rs(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)x_(n,t),n=n.sibling;else c_(n)}function x_(t,n){var a=t.alternate;if(a===null)Ad(t,!1);else switch(t.tag){case 3:if(Ud=ta=!1,r_(),Rs(n,t),!ta&&!Bc){if(t=Ji,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var c=t[s+1];sv(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ud=!0}Ji=null;break;case 5:Rs(n,t);break;case 4:s=ta,ta=!1,Rs(n,t),ta&&(Bc=!0),ta=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Ad(t,!1):Rs(n,t));break;case 30:s=ta,c=r_(),ta=!1,Rs(n,t),ta&&(t.flags|=4);var f=t.memoizedProps,g=t.stateNode;n=va(f,g),g=va(a.memoizedProps,g);var R=xa(f.default,f.update);R==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,jn=0,n=Dd(t,a,n,g,R,f,!0),jn!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Os(t,t.memoizedProps.onUpdate),Ji=c):c!==null&&(c.push.apply(c,Ji),Ji=c),ta=(t.flags&32)!==0?!0:s;break;default:Rs(n,t)}}function ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)f_(t,n.alternate,n),n=n.sibling}function ar(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:ir(4,a,a.return),ar(a,s);break;case 1:Un(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&t_(a,a.return,c),ar(a,s);break;case 27:(s&2)!==0&&vv(a.stateNode,a.type,a.memoizedProps);case 5:Un(a,a.return),a.tag!==5&&a.tag!==27||Jo(a),ar(a,s);break;case 6:Jo(a);break;case 26:Un(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||qe||c.parentNode.removeChild(c),ar(a,s);break;case 22:a.memoizedState===null&&ar(a,s);break;case 30:Un(a,a.return),ar(a,s);break;case 7:Un(a,a.return);default:ar(a,s)}t=t.sibling}}function Pi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,g=f.flags,R=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Pi(c,f,a),Qo(4,f);break;case 1:if(Pi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(dt){Ye(s,s.return,dt)}if(s=f,c=s.updateQueue,c!==null){var G=s.stateNode;try{var it=c.shared.hiddenCallbacks;if(it!==null)for(c.shared.hiddenCallbacks=null,c=0;c<it.length;c++)G0(it[c],G)}catch(dt){Ye(s,s.return,dt)}}R&&g&64&&$g(f),Qi(f,f.return);break;case 27:(a&2)!==0&&i_(f);case 5:f.tag!==5&&f.tag!==27||e_(f),Pi(c,f,a),R&&s===null&&g&4&&yd(f),Qi(f,f.return);break;case 6:e_(f);break;case 26:G=f.stateNode,f.memoizedState!==null||G===null||An||vh(ol(G.ownerDocument),f.type,G),Pi(c,f,a),R&&s===null&&g&4&&yd(f),Qi(f,f.return);break;case 12:Pi(c,f,a);break;case 31:Pi(c,f,a),R&&g&4&&m_(c,f);break;case 13:Pi(c,f,a),R&&g&4&&g_(c,f);break;case 22:f.memoizedState===null&&Pi(c,f,a),Qi(f,f.return);break;case 30:Pi(c,f,a),Qi(f,f.return);break;case 7:Qi(f,f.return);default:Pi(c,f,a)}n=n.sibling}}function Pd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&zo(a))}function Id(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&zo(t))}function Ri(t,n,a,s){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)S_(t,n,a,s),n=n.sibling;else c&&l_(n)}function S_(t,n,a,s){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Fc(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(t,n,a,s),f&2048&&Qo(9,n);break;case 1:Ri(t,n,a,s);break;case 3:Ri(t,n,a,s),c&&Ud&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&zo(f)));break;case 12:if(f&2048){Ri(t,n,a,s),f=n.stateNode;try{var g=n.memoizedProps,R=g.id,G=g.onPostCommit;typeof G=="function"&&G(R,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(it){Ye(n,n.return,it)}}else Ri(t,n,a,s);break;case 31:Ri(t,n,a,s);break;case 13:Ri(t,n,a,s);break;case 23:break;case 22:g=n.stateNode,R=n.alternate,n.memoizedState!==null?(c&&R!==null&&R.memoizedState===null&&Fc(R),g._visibility&2?Ri(t,n,a,s):$o(t,n)):(c&&R!==null&&R.memoizedState!==null&&Fc(n),g._visibility&2?Ri(t,n,a,s):(g._visibility|=2,Cs(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Pd(R,n);break;case 24:Ri(t,n,a,s),f&2048&&Id(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(ji(f.child,!0),ji(n.child,!0))),Ri(t,n,a,s);break;default:Ri(t,n,a,s)}}function Cs(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,R=a,G=s,it=g.flags;switch(g.tag){case 0:case 11:case 15:Cs(f,g,R,G,c),Qo(8,g);break;case 23:break;case 22:var dt=g.stateNode;g.memoizedState!==null?dt._visibility&2?Cs(f,g,R,G,c):$o(f,g):(dt._visibility|=2,Cs(f,g,R,G,c)),c&&it&2048&&Pd(g.alternate,g);break;case 24:Cs(f,g,R,G,c),c&&it&2048&&Id(g.alternate,g);break;default:Cs(f,g,R,G,c)}n=n.sibling}}function $o(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:$o(a,s),c&2048&&Pd(s.alternate,s);break;case 24:$o(a,s),c&2048&&Id(s.alternate,s);break;default:$o(a,s)}n=n.sibling}}var Vr=8192;function Xr(t,n,a){if(t.subtreeFlags&Vr)for(t=t.child;t!==null;)M_(t,n,a),t=t.sibling}function M_(t,n,a){switch(t.tag){case 26:Xr(t,n,a),t.flags&Vr&&(t.memoizedState!==null?YE(a,Oi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Cv(a,t)));break;case 5:Xr(t,n,a),t.flags&Vr&&(t=t.stateNode,(n&335544128)===n&&Cv(a,t));break;case 3:case 4:var s=Oi;Oi=ol(t.stateNode.containerInfo),Xr(t,n,a),Oi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Vr,Vr=16777216,Xr(t,n,a),Vr=s):Xr(t,n,a));break;case 30:if((t.flags&Vr)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var c=t.stateNode;c.paired=null,ui===null&&(ui=new Map),ui.set(s,c)}Xr(t,n,a);break;default:Xr(t,n,a)}}function y_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function tl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,T_(s,t)}y_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)E_(t),t=t.sibling}function E_(t){switch(t.tag){case 0:case 11:case 15:tl(t),t.flags&2048&&ir(9,t,t.return);break;case 3:tl(t);break;case 12:tl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Vc(t)):tl(t);break;default:tl(t)}}function Vc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,T_(s,t)}y_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ir(8,n,n.return),Vc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vc(n));break;default:Vc(n)}t=t.sibling}}function T_(t,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:ir(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:zo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Rn=s;else t:for(a=t;Rn!==null;){s=Rn;var c=s.sibling,f=s.return;if(h_(s),s===a){Rn=null;break t}if(c!==null){c.return=f,Rn=c;break t}Rn=f}}}var Vy={getCacheForType:function(t){var n=wn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return wn(pn).controller.signal}},Xy=typeof WeakMap=="function"?WeakMap:Map,Xe=0,$e=null,Re=null,Ne=0,We=0,fi=null,rr=!1,ws=!1,zd=!1,Ca=0,dn=0,sr=0,kr=0,Xc=0,di=0,Ds=0,el=null,ti=null,Fd=!1,kc=0,b_=0,qc=1/0,Wc=null,or=null,on=0,Ii=null,qr=null,na=0,Bd=0,Hd=null,A_=null,Ns=null,Us=null,Ls=null,nl=0,Yc=null;function hi(){return(Xe&2)!==0&&Ne!==0?Ne&-Ne:ot.T!==null?Qd():ql()}function R_(){if(di===0)if((Ne&536870912)===0||be){var t=Tr;Tr<<=1,(Tr&3932160)===0&&(Tr=262144),di=t}else di=536870912;return t=Dn.current,t!==null&&(t.flags|=32),di}function Os(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=ov(va(t.memoizedProps,a))),Us===null&&(Us=[]),Us.push(n.bind(null,s))}}function ei(t,n,a){(t===$e&&(We===2||We===9)||t.cancelPendingCommit!==null)&&(Ps(t,0),lr(t,Ne,di,!1)),qi(t,a),((Xe&2)===0||t!==$e)&&(t===$e&&((Xe&2)===0&&(kr|=a),dn===4&&lr(t,Ne,di,!1)),ia(t))}function C_(t,n,a){if((Xe&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Xa(t,n),c=s?Wy(t,n):Vd(t,n,!0),f=s;do{if(c===0){ws&&!s&&lr(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!ky(a)){c=Vd(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var R=t;c=el;var G=R.current.memoizedState.isDehydrated;if(G&&(Ps(R,g).flags|=256),g=Vd(R,g,!1),g!==2&&g!==6){if(zd&&!G){R.errorRecoveryDisabledLanes|=f,kr|=f,c=4;break t}f=ti,ti=c,f!==null&&(ti===null?ti=f:ti.push.apply(ti,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){Ps(t,0),lr(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:lr(s,n,di,!rr);break t;case 2:ti=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=kc+300-Wt(),10<c)){if(lr(s,n,di,!rr),br(s,0,!0)!==0)break t;na=n,s.timeoutHandle=oh(w_.bind(null,s,a,ti,Wc,Fd,n,di,kr,Ds,rr,f,"Throttled",-0,0),c);break t}w_(s,a,ti,Wc,Fd,n,di,kr,Ds,rr,f,null,-0,0)}}break}while(!0);ia(t)}function w_(t,n,a,s,c,f,g,R,G,it,dt,Et,tt,ut){t.timeoutHandle=-1;var zt=n.subtreeFlags,te=(f&335544064)===f;if(Et=null,(te||zt&8192||(zt&16785408)===16785408)&&(Et={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},ui=null,M_(n,f,Et),te&&(zt=Et,te=t.containerInfo,te=(te.nodeType===9?te:te.ownerDocument).__reactViewTransition,te!=null&&(zt.count++,zt.waitingForViewTransition=!0,zt=ul.bind(zt),te.finished.then(zt,zt))),zt=(f&62914560)===f?kc-Wt():(f&4194048)===f?b_-Wt():0,zt=ZE(Et,zt),zt!==null)){na=f,t.cancelPendingCommit=zt(z_.bind(null,t,n,f,a,s,c,g,R,G,it,dt,Et,null,tt,ut)),lr(t,f,g,!it);return}z_(t,n,f,a,s,c,g,R,G,it,dt,Et)}function ky(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!li(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function lr(t,n,a,s){n=ki(t,n),n&=~Xc,n&=~kr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-me(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&Ar(t,a,n)}function Zc(){return(Xe&6)===0?(il(0),!1):!0}function Gd(){if(Re!==null){if(We===0)var t=Re.return;else t=Re,ya=Ur=null,Kf(t),Ms=null,Ho=0,t=Re;for(;t!==null;)jg(t.alternate,t),t=t.return;Re=null}}function Ps(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,pE(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),na=0,Gd(),$e=t,Re=a=Sa(t.current,null),Ne=n,We=0,fi=null,rr=!1,ws=Xa(t,n),zd=!1,Ds=di=Xc=kr=sr=dn=0,ti=el=null,Fd=!1,Ca=ki(t,n),nc(),a}function D_(t,n){xe=null,ot.H=Rc,n===Ss||n===hc?(n=z0(),We=3):n===If?(n=z0(),We=4):We=n===ud?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,fi=n,Re===null&&(dn=1,Cc(t,Ei(n,t.current)))}function N_(){var t=Dn.current;return t===null?!0:(Ne&4194048)===Ne?Fn===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?t===Fn:!1}function U_(){var t=ot.H;return ot.H=Rc,t===null?Rc:t}function L_(){var t=ot.A;return ot.A=Vy,t}function Kc(){dn=4,rr||(Ne&4194048)!==Ne&&Dn.current!==null||(ws=!0),(sr&134217727)===0&&(kr&134217727)===0||$e===null||lr($e,Ne,di,!1)}function Vd(t,n,a){var s=Xe;Xe|=2;var c=U_(),f=L_();($e!==t||Ne!==n)&&(Wc=null,Ps(t,n)),n=!1;var g=dn;t:do try{if(We!==0&&Re!==null){var R=Re,G=fi;switch(We){case 8:Gd(),g=6;break t;case 3:case 2:case 9:case 6:Dn.current===null&&(n=!0);var it=We;if(We=0,fi=null,Is(t,R,G,it),a&&ws){g=0;break t}break;default:it=We,We=0,fi=null,Is(t,R,G,it)}}qy(),g=dn;break}catch(dt){D_(t,dt)}while(!0);return n&&t.shellSuspendCounter++,ya=Ur=null,Xe=s,ot.H=c,ot.A=f,Re===null&&($e=null,Ne=0,nc()),g}function qy(){for(;Re!==null;)O_(Re)}function Wy(t,n){var a=Xe;Xe|=2;var s=U_(),c=L_();$e!==t||Ne!==n?(Wc=null,qc=Wt()+500,Ps(t,n)):ws=Xa(t,n);t:do try{if(We!==0&&Re!==null){n=Re;var f=fi;e:switch(We){case 1:We=0,fi=null,Is(t,n,f,1);break;case 2:case 9:if(P0(f)){We=0,fi=null,P_(n);break}n=function(){We!==2&&We!==9||$e!==t||(We=7),ia(t)},f.then(n,n);break t;case 3:We=7;break t;case 4:We=5;break t;case 7:P0(f)?(We=0,fi=null,P_(n)):(We=0,fi=null,Is(t,n,f,7));break;case 5:var g=null;switch(Re.tag){case 26:g=Re.memoizedState;case 5:case 27:var R=Re;if(g?Av(g):R.stateNode.complete){We=0,fi=null;var G=R.sibling;if(G!==null)Re=G;else{var it=R.return;it!==null?(Re=it,Qc(it)):Re=null}break e}}We=0,fi=null,Is(t,n,f,5);break;case 6:We=0,fi=null,Is(t,n,f,6);break;case 8:Gd(),dn=6;break t;default:throw Error(r(462))}}Yy();break}catch(dt){D_(t,dt)}while(!0);return ya=Ur=null,ot.H=s,ot.A=c,Xe=a,Re!==null?0:($e=null,Ne=0,nc(),dn)}function Yy(){for(;Re!==null&&!Ht();)O_(Re)}function O_(t){var n=Qg(t.alternate,t,Ca);t.memoizedProps=t.pendingProps,n===null?Qc(t):Re=n}function P_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Xg(a,n,n.pendingProps,n.type,void 0,Ne);break;case 11:n=Xg(a,n,n.pendingProps,n.type.render,n.ref,Ne);break;case 5:Kf(n);var s=n;s===bn&&(be?(lc(s),s.tag===5&&s.stateNode!=null&&(nn=s.stateNode)):(lc(s),be=!0));default:jg(a,n),n=Re=T0(n,Ca),n=Qg(a,n,Ca)}t.memoizedProps=t.pendingProps,n===null?Qc(t):Re=n}function Is(t,n,a,s){ya=Ur=null,Kf(n),Ms=null,Ho=0;var c=n.return;try{if(Oy(t,c,n,a,Ne)){dn=1,Cc(t,Ei(a,t.current)),Re=null;return}}catch(f){if(c!==null)throw Re=c,f;dn=1,Cc(t,Ei(a,t.current)),Re=null;return}n.flags&32768?(be||s===1?t=!0:ws||(Ne&536870912)!==0?t=!1:(rr=t=!0,(s===2||s===9||s===3||s===6)&&(s=Dn.current,s!==null&&s.tag===13&&(s.flags|=16384))),I_(n,t)):Qc(n)}function Qc(t){var n=t;do{if((n.flags&32768)!==0){I_(n,rr);return}t=n.return;var a=Fy(n.alternate,n,Ca);if(a!==null){Re=a;return}if(n=n.sibling,n!==null){Re=n;return}Re=n=t}while(n!==null);dn===0&&(dn=5)}function I_(t,n){do{var a=By(t.alternate,t);if(a!==null){a.flags&=32767,Re=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Re=t;return}Re=t=a}while(t!==null);dn=6,Re=null}function z_(t,n,a,s,c,f,g,R,G,it,dt,Et){t.cancelPendingCommit=null;do Jc();while(on!==0);if((Xe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===$e&&(Re=$e=null,Ne=0),qr=n,Ii=t,na=a,Hd=c,A_=s,Zy(t,n,a,g,R,G,Et)}}function Zy(t,n,a,s,c,f,g){var R=n.lanes|n.childLanes;if(Bd=R,R|=Ef,kl(t,a,R,s,c,f),Us=null,(a&335544064)===a?(Ls=yy(t),s=10262):(Ls=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,tE(Ut,function(){return Wd(),null})):(t.callbackNode=null,t.callbackPriority=0),Ic=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=ot.T,ot.T=null,c=At.p,At.p=2,f=Xe,Xe|=4;try{Hy(t,n,a)}finally{Xe=f,At.p=c,ot.T=s}}on=1,Ic?Ns=SE(g,t.containerInfo,Ls,Xd,kd,Qy,qd,Wd,Ky):(Xd(),kd(),qd())}function Ky(t){if(on!==0){var n=Ii.onRecoverableError;n(t,{componentStack:null})}}function Qy(){on===3&&(on=0,x_(qr,Ii),on=4)}function Xd(){if(on===1){on=0;var t=Ii,n=qr,a=na,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=ot.T,ot.T=null;var c=At.p;At.p=2;var f=Xe;Xe|=4;try{jo=Bc=!1,__(n,t,a),a=ah;var g=p0(t.containerInfo),R=a.focusedElem,G=a.selectionRange;if(g!==R&&R&&R.ownerDocument&&h0(R.ownerDocument.documentElement,R)){if(G!==null&&vf(R)){var it=G.start,dt=G.end;if(dt===void 0&&(dt=it),"selectionStart"in R)R.selectionStart=it,R.selectionEnd=Math.min(dt,R.value.length);else{var Et=R.ownerDocument||document,tt=Et&&Et.defaultView||window;if(tt.getSelection){var ut=tt.getSelection(),zt=R.textContent.length,te=Math.min(G.start,zt),Se=G.end===void 0?te:Math.min(G.end,zt);!ut.extend&&te>Se&&(g=Se,Se=te,te=g);var nt=d0(R,te),Q=d0(R,Se);if(nt&&Q&&(ut.rangeCount!==1||ut.anchorNode!==nt.node||ut.anchorOffset!==nt.offset||ut.focusNode!==Q.node||ut.focusOffset!==Q.offset)){var st=Et.createRange();st.setStart(nt.node,nt.offset),ut.removeAllRanges(),te>Se?(ut.addRange(st),ut.extend(Q.node,Q.offset)):(st.setEnd(Q.node,Q.offset),ut.addRange(st))}}}}for(Et=[],ut=R;ut=ut.parentNode;)ut.nodeType===1&&Et.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Et.length;R++){var yt=Et[R];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}ks=!!ih,ah=ih=null}finally{Xe=f,At.p=c,ot.T=s}}t.current=n,on=2}}function kd(){if(on===2){on=0;var t=Ii,n=qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=ot.T,ot.T=null;var s=At.p;At.p=2;var c=Xe;Xe|=4;try{f_(t,n.alternate,n)}finally{Xe=c,At.p=s,ot.T=a}}on=3}}function qd(){if(on===4||on===3){on=0;var t=Ns;Ns=null,Ft();var n=Ii,a=qr,s=na,c=A_,f=(s&335544064)===s?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?on=5:(on=0,qr=Ii=null,F_(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(or=null),bo(s),a=a.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(ee,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=ot.T,f=At.p,At.p=2,ot.T=null;try{for(var g=n.onRecoverableError,R=0;R<c.length;R++){var G=c[R];g(G.value,{componentStack:G.stack})}}finally{ot.T=a,At.p=f}}if(c=Us,g=Ls,Ls=null,c!==null&&(Us=null,g===null&&(g=[]),t!==null))for(G=0;G<c.length;G++)a=(0,c[G])(g),a!==void 0&&t.finished.finally(a);(na&3)!==0&&Jc(),ia(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===Yc?nl++:(nl=0,Yc=n):(nl=0,Yc=null),il(0)}}function F_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,zo(n)))}function Jc(){return Ns!==null&&(Ns.skipTransition(),Ns=null),Xd(),kd(),qd(),Wd()}function Wd(){if(on!==5)return!1;var t=Ii,n=Bd;Bd=0;var a=bo(na),s=ot.T,c=At.p;try{At.p=32>a?32:a,ot.T=null,a=Hd,Hd=null;var f=Ii,g=na;if(on=0,qr=Ii=null,na=0,(Xe&6)!==0)throw Error(r(331));var R=Xe;if(Xe|=4,E_(f.current),S_(f,f.current,g,a),Xe=R,il(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(ee,f)}catch{}return!0}finally{At.p=c,ot.T=s,F_(t,n)}}function B_(t,n,a){n=Ei(a,n),n=cd(t.stateNode,n,2),t=$a(t,n,2),t!==null&&(qi(t,2),ia(t))}function Ye(t,n,a){if(t.tag===3)B_(t,t,a);else for(;n!==null;){if(n.tag===3){B_(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(or===null||!or.has(s))){t=Ei(a,t),a=Pg(2),s=$a(n,a,2),s!==null&&(Ig(a,s,n,t),qi(s,2),ia(s));break}}n=n.return}}function Yd(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Xy;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(zd=!0,c.add(a),t=Jy.bind(null,t,n,a),n.then(t,t))}function Jy(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,$e===t&&(Ne&a)===a&&((dn===4||dn===3&&(Ne&62914560)===Ne&&300>Wt()-kc)&&(Xe&2)===0?Ps(t,0):Xc|=a,Ds===Ne&&(Ds=0)),ia(t)}function H_(t,n){n===0&&(n=Mo()),t=wr(t,n),t!==null&&(qi(t,n),ia(t))}function jy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),H_(t,a)}function $y(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),H_(t,a)}function tE(t,n){return Lt(t,n)}var zs=null,Fs=null,Zd=!1,jc=!1,Kd=!1,cr=0;function ia(t){t!==Fs&&t.next===null&&(Fs===null?zs=Fs=t:Fs=Fs.next=t),jc=!0,Zd||(Zd=!0,nE())}function il(t,n){if(!Kd&&jc){Kd=!0;do for(var a=!1,s=zs;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,R=s.pingedLanes;f=(1<<31-me(42|t)+1)-1,f&=c&~(g&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,k_(s,f))}else f=Ne,f=br(s,s===$e?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Xa(s,f)||(a=!0,k_(s,f));s=s.next}while(a);Kd=!1}}function eE(){G_()}function G_(){jc=Zd=!1;var t=0;cr!==0&&hE()&&(t=cr);for(var n=Wt(),a=null,s=zs;s!==null;){var c=s.next,f=V_(s,n);f===0?(s.next=null,a===null?zs=c:a.next=c,c===null&&(Fs=a)):(a=s,(t!==0||(f&3)!==0)&&(jc=!0)),s=c}on!==0&&on!==5||il(t),cr!==0&&(cr=0)}function V_(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-me(f),R=1<<g,G=c[g];G===-1?((R&a)===0||(R&s)!==0)&&(c[g]=So(R,n)):G<=n&&(t.expiredLanes|=R),f&=~R}if(n=$e,a=Ne,a=br(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(We===2||We===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&ie(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Xa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&ie(s),bo(a)){case 2:case 8:a=j;break;case 32:a=Ut;break;case 268435456:a=Pt;break;default:a=Ut}return s=X_.bind(null,t),a=Lt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&ie(s),t.callbackPriority=2,t.callbackNode=null,2}function X_(t,n){if(on!==0&&on!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Jc()&&t.callbackNode!==a)return null;var s=Ne;return s=br(t,t===$e?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(C_(t,s,n),V_(t,Wt()),t.callbackNode!=null&&t.callbackNode===a?X_.bind(null,t):null)}function k_(t,n){if(Jc())return null;C_(t,n,!0)}function nE(){mE(function(){(Xe&6)!==0?Lt(pe,eE):G_()})}function Qd(){if(cr===0){var t=Pr;t===0&&(t=rs,rs<<=1,(rs&261888)===0&&(rs=256)),cr=t}return cr}function q_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Zl(t)}function iE(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=q_((c[K]||null).action),g=s.submitter;g&&(n=(n=g[K]||null)?q_(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var R=new jl("action","action",null,s,c);t.push({event:R,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(cr!==0){var G=new FormData(c,g);ad(a,{pending:!0,data:G,method:c.method,action:f},null,G)}}else typeof f=="function"&&(R.preventDefault(),G=new FormData(c,g),ad(a,{pending:!0,data:G,method:c.method,action:f},f,G))},currentTarget:c}]})}}for(var Jd=0;Jd<yf.length;Jd++){var jd=yf[Jd],aE=jd.toLowerCase(),rE=jd[0].toUpperCase()+jd.slice(1);Ui(aE,"on"+rE)}Ui(_0,"onAnimationEnd"),Ui(v0,"onAnimationIteration"),Ui(x0,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(py,"onTransitionRun"),Ui(my,"onTransitionStart"),Ui(gy,"onTransitionCancel"),Ui(S0,"onTransitionEnd"),cn("onMouseEnter",["mouseout","mouseover"]),cn("onMouseLeave",["mouseout","mouseover"]),cn("onPointerEnter",["pointerout","pointerover"]),cn("onPointerLeave",["pointerout","pointerover"]),Vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Vt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al));function W_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var R=s[g],G=R.instance,it=R.currentTarget;if(R=R.listener,G!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=it;try{f(c)}catch(dt){ec(dt)}c.currentTarget=null,f=G}else for(g=0;g<s.length;g++){if(R=s[g],G=R.instance,it=R.currentTarget,R=R.listener,G!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=it;try{f(c)}catch(dt){ec(dt)}c.currentTarget=null,f=G}}}}function Ce(t,n){var a=n[lt];a===void 0&&(a=n[lt]=new Set);var s=t+"__bubble";a.has(s)||(Y_(n,t,2,!1),a.add(s))}function $d(t,n,a){var s=0;n&&(s|=4),Y_(a,t,s,n)}var $c="_reactListening"+Math.random().toString(36).slice(2);function th(t){if(!t[$c]){t[$c]=!0,ke.forEach(function(a){a!=="selectionchange"&&(sE.has(a)||$d(a,!1,t),$d(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[$c]||(n[$c]=!0,$d("selectionchange",!1,n))}}function Y_(t,n,a,s){switch(Iv(n)){case 2:var c=jE;break;case 8:c=$E;break;default:c=Sh}a=c.bind(null,n,a,t),c=void 0,!lf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function eh(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var R=s.stateNode.containerInfo;if(R===c)break;if(g===4)for(g=s.return;g!==null;){var G=g.tag;if((G===3||G===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;R!==null;){if(g=ue(R),g===null)return;if(G=g.tag,G===5||G===6||G===26||G===27){s=f=g;continue t}R=R.parentNode}}s=s.return}Ym(function(){var it=f,dt=sf(a),Et=[];t:{var tt=M0.get(t);if(tt!==void 0){var ut=jl,zt=t;switch(t){case"keypress":if(Ql(a)===0)break t;case"keydown":case"keyup":ut=kM;break;case"focusin":zt="focus",ut=df;break;case"focusout":zt="blur",ut=df;break;case"beforeblur":case"afterblur":ut=df;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=UM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=KM;break;case _0:case v0:case x0:ut=PM;break;case S0:ut=JM;break;case"scroll":case"scrollend":ut=DM;break;case"wheel":ut=$M;break;case"copy":case"cut":case"paste":ut=zM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=jm;break;case"submit":ut=YM;break;case"toggle":case"beforetoggle":ut=ey}var te=(n&4)!==0,Se=!te&&(t==="scroll"||t==="scrollend"),nt=te?tt!==null?tt+"Capture":null:tt;te=[];for(var Q=it,st;Q!==null;){var yt=Q;if(st=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||st===null||nt===null||(yt=Ao(Q,nt),yt!=null&&te.push(rl(Q,yt,st))),Se)break;Q=Q.return}0<te.length&&(tt=new ut(tt,zt,null,a,dt),Et.push({event:tt,listeners:te}))}}if((n&7)===0){t:{if(ut=t==="mouseover"||t==="pointerover",tt=t==="mouseout"||t==="pointerout",ut&&a!==rf&&(zt=a.relatedTarget||a.fromElement)&&(ue(zt)||zt[pt]))break t;(tt||ut)&&(zt=dt.window===dt?dt:(ut=dt.ownerDocument)?ut.defaultView||ut.parentWindow:window,tt?(ut=a.relatedTarget||a.toElement,tt=it,ut=ut?ue(ut):null,ut!==null&&(Se=u(ut),te=ut.tag,ut!==Se||te!==5&&te!==27&&te!==6)&&(ut=null)):(tt=null,ut=it),tt!==ut&&(te=Qm,yt="onMouseLeave",nt="onMouseEnter",Q="mouse",(t==="pointerout"||t==="pointerover")&&(te=jm,yt="onPointerLeave",nt="onPointerEnter",Q="pointer"),Se=tt==null?zt:Zt(tt),st=ut==null?zt:Zt(ut),zt=new te(yt,Q+"leave",tt,a,dt),zt.target=Se,zt.relatedTarget=st,yt=null,ue(dt)===it&&(te=new te(nt,Q+"enter",ut,a,dt),te.target=st,te.relatedTarget=Se,yt=te),Se=yt,te=tt&&ut?L(tt,ut,oE):null,tt!==null&&Z_(Et,zt,tt,te,!1),ut!==null&&Se!==null&&Z_(Et,Se,ut,te,!0)))}t:{if(tt=it?Zt(it):window,ut=tt.nodeName&&tt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&tt.type==="file")var Kt=s0;else if(a0(tt))if(o0)Kt=fy;else{Kt=cy;var Ue=ly}else ut=tt.nodeName,!ut||ut.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?it&&af(it.elementType)&&(Kt=s0):Kt=uy;if(Kt&&(Kt=Kt(t,it))){r0(Et,Kt,a,dt);break t}Ue&&Ue(t,tt,it)}switch(Ue=it?Zt(it):window,t){case"focusin":(a0(Ue)||Ue.contentEditable==="true")&&(ds=Ue,xf=it,Oo=null);break;case"focusout":Oo=xf=ds=null;break;case"mousedown":Sf=!0;break;case"contextmenu":case"mouseup":case"dragend":Sf=!1,m0(Et,a,dt);break;case"selectionchange":if(hy)break;case"keydown":case"keyup":m0(Et,a,dt)}var oe;if(pf)t:{switch(t){case"compositionstart":var ce="onCompositionStart";break t;case"compositionend":ce="onCompositionEnd";break t;case"compositionupdate":ce="onCompositionUpdate";break t}ce=void 0}else fs?n0(t,a)&&(ce="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ce="onCompositionStart");ce&&($m&&a.locale!=="ko"&&(fs||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&fs&&(oe=Zm()):(ka=dt,cf="value"in ka?ka.value:ka.textContent,fs=!0)),Ue=tu(it,ce),0<Ue.length&&(ce=new Jm(ce,t,null,a,dt),Et.push({event:ce,listeners:Ue}),oe?ce.data=oe:(oe=i0(a),oe!==null&&(ce.data=oe)))),(oe=iy?ay(t,a):ry(t,a))&&(ce=tu(it,"onBeforeInput"),0<ce.length&&(Ue=new Jm("onBeforeInput","beforeinput",null,a,dt),Et.push({event:Ue,listeners:ce}),Ue.data=oe)),iE(Et,t,it,a,dt)}W_(Et,n)})}function rl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function tu(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ao(t,a),c!=null&&s.unshift(rl(t,c,f)),c=Ao(t,n),c!=null&&s.push(rl(t,c,f))),t.tag===3)return s;t=t.return}return[]}function oE(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Z_(t,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var R=a,G=R.alternate,it=R.stateNode;if(R=R.tag,G!==null&&G===s)break;R!==5&&R!==26&&R!==27||it===null||(G=it,c?(it=Ao(a,f),it!=null&&g.unshift(rl(a,it,G))):c||(it=Ao(a,f),it!=null&&g.push(rl(a,it,G)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var lE=/\r\n?/g,cE=/\u0000|\uFFFD/g;function K_(t){return(typeof t=="string"?t:""+t).replace(lE,`
`).replace(cE,"")}function Q_(t,n){return n=K_(n),K_(t)===n}function Ze(t,n,a,s,c,f){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||ls(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&ls(t,""+s);else return;break;case"className":oi(t,"class",s);break;case"tabIndex":oi(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":oi(t,a,s);break;case"style":qm(t,s,f);return;case"data":if(n!=="object"){oi(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Zl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ze(t,n,"name",c.name,c,null),Ze(t,n,"formEncType",c.formEncType,c,null),Ze(t,n,"formMethod",c.formMethod,c,null),Ze(t,n,"formTarget",c.formTarget,c,null)):(Ze(t,n,"encType",c.encType,c,null),Ze(t,n,"method",c.method,c,null),Ze(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Zl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Yi);return;case"onScroll":s!=null&&Ce("scroll",t);return;case"onScrollEnd":s!=null&&Ce("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Zl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ce("beforetoggle",t),Ce("toggle",t),en(t,"popover",s);break;case"xlinkActuate":De(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":De(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":De(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":De(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":De(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":De(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":De(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":De(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":De(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":en(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=CM.get(a)||a,en(t,a,s);else return}Te=!0}function nh(t,n,a,s,c,f){switch(a){case"style":qm(t,s,f);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")ls(t,s);else if(typeof s=="number"||typeof s=="bigint")ls(t,""+s);else return;break;case"onScroll":s!=null&&Ce("scroll",t);return;case"onScrollEnd":s!=null&&Ce("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Yi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Sn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=t[K]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,c),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,s,c);break t}Te=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):en(t,a,s)}return}Te=!0}function Ln(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",t),Ce("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ze(t,n,f,g,a,null)}}c&&Ze(t,n,"srcSet",a.srcSet,a,null),s&&Ze(t,n,"src",a.src,a,null);return;case"input":Ce("invalid",t);var R=f=g=c=null,G=null,it=null;for(s in a)if(a.hasOwnProperty(s)){var dt=a[s];if(dt!=null)switch(s){case"name":c=dt;break;case"type":g=dt;break;case"checked":G=dt;break;case"defaultChecked":it=dt;break;case"value":f=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Ze(t,n,s,dt,a,null)}}Gm(t,f,R,G,it,g,c,!1);return;case"select":Ce("invalid",t),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":g=R;break;case"multiple":s=R;default:Ze(t,n,c,R,a,null)}n=f,a=g,t.multiple=!!s,n!=null?os(t,!!s,n,!1):a!=null&&os(t,!!s,a,!0);return;case"textarea":Ce("invalid",t),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(R=a[g],R!=null))switch(g){case"value":s=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Ze(t,n,g,R,a,null)}Xm(t,s,c,f);return;case"option":for(G in a)a.hasOwnProperty(G)&&(s=a[G],s!=null)&&(G==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ze(t,n,G,s,a,null));return;case"dialog":Ce("beforetoggle",t),Ce("toggle",t),Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":Ce("load",t);break;case"video":case"audio":for(s=0;s<al.length;s++)Ce(al[s],t);break;case"image":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"embed":case"source":case"link":Ce("error",t),Ce("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(s=a[it],s!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ze(t,n,it,s,a,null)}return;default:if(af(n)){for(dt in a)a.hasOwnProperty(dt)&&(s=a[dt],s!==void 0&&nh(t,n,dt,s,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(s=a[R],s!=null&&Ze(t,n,R,s,a,null))}var uE={};function fE(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,R=null,G=null,it=null,dt=null;for(ut in a){var Et=a[ut];if(a.hasOwnProperty(ut)&&Et!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":G=Et;default:s.hasOwnProperty(ut)||Ze(t,n,ut,null,s,Et)}}for(var tt in s){var ut=s[tt];if(Et=a[tt],s.hasOwnProperty(tt)&&(ut!=null||Et!=null))switch(tt){case"type":ut!==Et&&(Te=!0),f=ut;break;case"name":ut!==Et&&(Te=!0),c=ut;break;case"checked":ut!==Et&&(Te=!0),it=ut;break;case"defaultChecked":ut!==Et&&(Te=!0),dt=ut;break;case"value":ut!==Et&&(Te=!0),g=ut;break;case"defaultValue":ut!==Et&&(Te=!0),R=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:ut!==Et&&Ze(t,n,tt,ut,s,Et)}}ef(t,g,R,G,it,dt,f,c);return;case"select":ut=g=R=tt=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ut=G;default:s.hasOwnProperty(f)||Ze(t,n,f,null,s,G)}for(c in s)if(f=s[c],G=a[c],s.hasOwnProperty(c)&&(f!=null||G!=null))switch(c){case"value":f!==G&&(Te=!0),tt=f;break;case"defaultValue":f!==G&&(Te=!0),R=f;break;case"multiple":f!==G&&(Te=!0),g=f;default:f!==G&&Ze(t,n,c,f,s,G)}n=R,a=g,s=ut,tt!=null?os(t,!!a,tt,!1):!!s!=!!a&&(n!=null?os(t,!!a,n,!0):os(t,!!a,a?[]:"",!1));return;case"textarea":ut=tt=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!s.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ze(t,n,R,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":c!==f&&(Te=!0),tt=c;break;case"defaultValue":c!==f&&(Te=!0),ut=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ze(t,n,g,c,s,f)}Vm(t,tt,ut);return;case"option":for(var zt in a)tt=a[zt],a.hasOwnProperty(zt)&&tt!=null&&!s.hasOwnProperty(zt)&&(zt==="selected"?t.selected=!1:Ze(t,n,zt,null,s,tt));for(G in s)tt=s[G],ut=a[G],s.hasOwnProperty(G)&&tt!==ut&&(tt!=null||ut!=null)&&(G==="selected"?(tt!==ut&&(Te=!0),t.selected=tt&&typeof tt!="function"&&typeof tt!="symbol"):Ze(t,n,G,tt,s,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)tt=a[te],a.hasOwnProperty(te)&&tt!=null&&!s.hasOwnProperty(te)&&Ze(t,n,te,null,s,tt);for(it in s)if(tt=s[it],ut=a[it],s.hasOwnProperty(it)&&tt!==ut&&(tt!=null||ut!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:Ze(t,n,it,tt,s,ut)}return;default:if(af(n)){for(var Se in a)tt=a[Se],a.hasOwnProperty(Se)&&tt!==void 0&&!s.hasOwnProperty(Se)&&nh(t,n,Se,void 0,s,tt);for(dt in s)tt=s[dt],ut=a[dt],!s.hasOwnProperty(dt)||tt===ut||tt===void 0&&ut===void 0||nh(t,n,dt,tt,s,ut);return}}for(var nt in a)tt=a[nt],a.hasOwnProperty(nt)&&tt!=null&&!s.hasOwnProperty(nt)&&Ze(t,n,nt,null,s,tt);for(Et in s)tt=s[Et],ut=a[Et],!s.hasOwnProperty(Et)||tt===ut||tt==null&&ut==null||Ze(t,n,Et,tt,s,ut)}function J_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dE(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,R=c.duration;if(f&&R&&J_(g)){for(g=0,R=c.responseEnd,s+=1;s<a.length;s++){var G=a[s],it=G.startTime;if(it>R)break;var dt=G.transferSize,Et=G.initiatorType;dt&&J_(Et)&&(G=G.responseEnd,g+=dt*(G<R?1:(R-it)/(G-it)))}if(--s,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ih=null,ah=null;function sl(t){return t.nodeType===9?t:t.ownerDocument}function j_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function tv(t,n,a,s){return a=sl(a).createElement(t),a[A]=s,a[K]=n,Ln(a,t,n),Ee(a),a}function rh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var sh=null;function hE(){var t=window.event;return t&&t.type==="popstate"?t===sh?!1:(sh=t,!0):(sh=null,!1)}var oh=typeof setTimeout=="function"?setTimeout:void 0,pE=typeof clearTimeout=="function"?clearTimeout:void 0,ev=typeof Promise=="function"?Promise:void 0,nv=typeof requestAnimationFrame=="function"?requestAnimationFrame:oh,mE=typeof queueMicrotask=="function"?queueMicrotask:typeof ev<"u"?function(t){return ev.resolve(null).then(t).catch(gE)}:oh;function gE(t){setTimeout(function(){throw t})}function ur(t){return t==="head"}function iv(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),qs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")mh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,mh(a);for(var f=a.firstChild;f;){var g=f.nextSibling,R=f.nodeName;f[It]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&mh(t.ownerDocument.body);a=c}while(a);qs(n)}function av(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function rv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var c=s=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function sv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function _E(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function lh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return _E(n,a,t)}function vE(t){return t.documentElement.clientHeight}function xE(t){this.addEventListener("load",t),this.addEventListener("error",t)}function SE(t,n,a,s,c,f,g,R,G){var it=n.nodeType===9?n:n.ownerDocument;try{var dt=it.startViewTransition({update:function(){var tt=it.defaultView,ut=tt.navigation&&tt.navigation.transition,zt=it.fonts.status;s();var te=[];if(zt==="loaded"&&(vE(it),it.fonts.status==="loading"&&te.push(it.fonts.ready)),zt=te.length,t!==null)for(var Se=t.suspenseyImages,nt=0,Q=0;Q<Se.length;Q++){var st=Se[Q];if(!st.complete){var yt=st.getBoundingClientRect();if(0<yt.bottom&&0<yt.right&&yt.top<tt.innerHeight&&yt.left<tt.innerWidth){if(nt+=Rv(st),nt>iu){te.length=zt;break}st=new Promise(xE.bind(st)),te.push(st)}}}if(0<te.length)return tt=Promise.race([Promise.all(te),new Promise(function(Kt){return setTimeout(Kt,500)})]).then(c,c),(ut?Promise.allSettled([ut.finished,tt]):tt).then(f,f);if(c(),ut)return ut.finished.then(f,f);f()},types:a});it.__reactViewTransition=dt;var Et=[];return dt.ready.then(function(){for(var tt=it.documentElement.getAnimations({subtree:!0}),ut=0;ut<tt.length;ut++){var zt=tt[ut],te=zt.effect,Se=te.pseudoElement;if(Se!=null&&Se.startsWith("::view-transition")){Et.push(zt),zt=te.getKeyframes();for(var nt=Se=void 0,Q=!0,st=0;st<zt.length;st++){var yt=zt[st],Kt=yt.width;if(Se===void 0)Se=Kt;else if(Se!==Kt){Q=!1;break}if(Kt=yt.height,nt===void 0)nt=Kt;else if(nt!==Kt){Q=!1;break}delete yt.width,delete yt.height,yt.transform==="none"&&delete yt.transform}Q&&Se!==void 0&&nt!==void 0&&(te.setKeyframes(zt),Q=getComputedStyle(te.target,te.pseudoElement),Q.width!==Se||Q.height!==nt)&&(Q=zt[0],Q.width=Se,Q.height=nt,Q=zt[zt.length-1],Q.width=Se,Q.height=nt,te.setKeyframes(zt))}}g()},function(tt){it.__reactViewTransition===dt&&(it.__reactViewTransition=null);try{typeof tt=="object"&&tt!==null&&tt.name==="InvalidStateError"&&(tt.message==="View transition was skipped because document visibility state is hidden."||tt.message==="Skipping view transition because document visibility state has become hidden."||tt.message==="Skipping view transition because viewport size changed."||tt.message==="Transition was aborted because of invalid state")&&(tt=null),tt!==null&&G(tt)}finally{s(),c(),g()}}),dt.finished.finally(function(){for(var tt=0;tt<Et.length;tt++)Et[tt].cancel();it.__reactViewTransition===dt&&(it.__reactViewTransition=null),R()}),dt}catch{return s(),c(),g(),null}}function Wr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Wr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:z({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Wr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===t&&f.pseudoElement===n&&s.push(a[c])}return s},Wr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function ov(t){return{name:t,group:new Wr("group",t),imagePair:new Wr("image-pair",t),old:new Wr("old",t),new:new Wr("new",t)}}function pi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}pi.prototype.addEventListener=function(t,n,a){var s=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(cv(f,t,n,a)===-1){var g=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(G){g.removeEventListener(t,n,a),typeof n=="function"?n.call(this,G):n.handleEvent(G)}),s!==null&&(c=g.removeEventListener.bind(g,t,n,a),s.addEventListener("abort",c,{once:!0}),c=s.removeEventListener.bind(s,"abort",c)),s=Bs(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:c}),_(this._fragmentFiber.child,!1,ME,t,R,s)}this._eventListeners=f}};function ME(t,n,a,s){return M(t).addEventListener(n,a,s),!1}pi.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=cv(s,t,n,a),n!==-1)){var c=s[n];a=c.attachedListener;var f=c.cleanup;c=Bs(c.optionsOrUseCapture),_(this._fragmentFiber.child,!1,yE,t,a,c),s.splice(n,1),f!==null&&f()}};function yE(t,n,a,s){return M(t).removeEventListener(n,a,s),!1}function Bs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function lv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function cv(t,n,a,s){if(t.length===0)return-1;s=lv(s);for(var c=0;c<t.length;c++){var f=t[c];if(f.type===n&&f.listener===a&&lv(f.optionsOrUseCapture)===s)return c}return-1}pi.prototype.dispatchEvent=function(t){var n=v(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];s.addEventListener(f.type,f.attachedListener,Bs(f.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(c=0;c<a.length;c++)f=a[c],s.removeEventListener(f.type,f.attachedListener,Bs(f.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},pi.prototype.focus=function(t){_(this._fragmentFiber.child,!0,uv,t,void 0,void 0)};function uv(t,n){return t.tag===6?!1:(t=M(t),OE(t,n))}pi.prototype.focusLast=function(t){var n=[];_(this._fragmentFiber.child,!0,ch,n,void 0,void 0);for(var a=n.length-1;0<=a&&!uv(n[a],t);a--);};function ch(t,n){return n.push(t),!1}pi.prototype.blur=function(){var t=v(this._fragmentFiber);t!==null&&(t=M(t),t=sl(t).activeElement,t!==null&&_(this._fragmentFiber.child,!1,EE,t,void 0,void 0))};function EE(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}pi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),_(this._fragmentFiber.child,!1,TE,t,void 0,void 0)};function TE(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}pi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),_(this._fragmentFiber.child,!1,bE,t,void 0,void 0);for(var a=n=0;a<zi.length;a++){var s=zi[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):zi[n++]=s}zi.length=n}};function bE(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var zi=[],uh=!1;function AE(t,n,a){zi.push({fragmentInstance:t,observer:n,instance:a}),uh||(uh=!0,PE(function(){uh=!1;var s=zi;zi=[];for(var c=0;c<s.length;c++){var f=s[c];f.observer.unobserve(f.instance)}}))}pi.prototype.getClientRects=function(){var t=[];return _(this._fragmentFiber.child,!1,RE,t,void 0,void 0),t};function RE(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}pi.prototype.getRootNode=function(t){var n=v(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},pi.prototype.compareDocumentPosition=function(t){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];_(this._fragmentFiber.child,!1,ch,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,T(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=s=a.compareDocumentPosition(t);return a===t?c=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=C(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),c=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var f=T(this._fragmentFiber)?n.parentElement:s;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(t),R=c.compareDocumentPosition(t),G=g&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=s&&f&&g&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||f&&c===t||G||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!f&&c===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||CE(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function CE(t,n,a,s,c){var f=ue(c);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;t:{for(f=n,n=v(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=L(a,f,O),n===null?n=!1:(_(n,!0,V,f,a),f=S,S=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===s)&&(n=L(s,f,O),n===null?n=!1:(_(n,!0,w,f,s),f=S,N=S=null,n=f!==null)),n):!1}function fv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}pi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];_(this._fragmentFiber.child,!1,ch,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=C(this._fragmentFiber);if(s=a?s[1]||s[0]||v(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=M(s),fv(t,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var c=n[s];c.tag===6?(c=M(c),fv(c,a)):M(c).scrollIntoView(t),s+=a?-1:1}};function wE(t,n){return t=M(t),dv(t,n),!1}function dv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function hv(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.addEventListener(c.type,c.attachedListener,Bs(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var g=0,R=0;R<zi.length;R++){var G=zi[R];(G.fragmentInstance!==n||G.observer!==f||G.instance!==t)&&(zi[g++]=G)}zi.length=g,f.observe(t)}),dv(t,n))}function DE(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.removeEventListener(c.type,c.attachedListener,Bs(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?AE(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function fh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":fh(a),$t(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function NE(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[It])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ci(t.nextSibling),t===null)break}return null}function UE(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ci(t.nextSibling),t===null))return null;return t}function pv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ci(t.nextSibling),t===null))return null;return t}function dh(t){return t.data==="$?"||t.data==="$~"}function hh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function LE(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ph=null;function mv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function gv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function OE(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function PE(t){nv(function(){nv(function(n){return t(n)})})}function _v(t,n,a){switch(n=sl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function vv(t,n,a){for(var s in a){var c=a[s];a.hasOwnProperty(s)&&c!=null&&Ze(t,n,s,null,uE,c)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Yi&&(t.onclick=null),$t(t)}function mh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$t(t)}var wi=new Map,xv=new Set;function ol(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var wa=At.d;At.d={f:IE,r:zE,D:FE,C:BE,L:HE,m:GE,X:XE,S:VE,M:kE};function IE(){var t=wa.f(),n=Zc();return t||n}function zE(t){var n=ge(t);n!==null&&n.tag===5&&n.type==="form"?Mg(n):wa.r(t)}var Hs=typeof document>"u"?null:document;function Sv(t,n,a){var s=Hs;if(s&&typeof n=="string"&&n){var c=Mi(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),xv.has(c)||(xv.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Ln(n,"link",t),Ee(n),s.head.appendChild(n)))}}function FE(t){wa.D(t),Sv("dns-prefetch",t,null)}function BE(t,n){wa.C(t,n),Sv("preconnect",t,n)}function HE(t,n,a){wa.L(t,n,a);var s=Hs;if(s&&t&&n){var c='link[rel="preload"][as="'+Mi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Mi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Mi(a.imageSizes)+'"]')):c+='[href="'+Mi(t)+'"]';var f=c;switch(n){case"style":f=Gs(t);break;case"script":f=Vs(t)}if(!(wi.has(f)||(t=z({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),wi.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(ll(f))||n==="script"&&s.querySelector(cl(f))))){var g=s.createElement("link");Ln(g,"link",t),n==="style"&&(g[Jt]=!0,g.onload=g.onerror=function(){Je(g)}),Ee(g),s.head.appendChild(g)}}}function GE(t,n){wa.m(t,n);var a=Hs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Mi(s)+'"][href="'+Mi(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Vs(t)}if(!wi.has(f)&&(t=z({rel:"modulepreload",href:t},n),wi.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(cl(f)))return}s=a.createElement("link"),Ln(s,"link",t),Ee(s),a.head.appendChild(s)}}}function VE(t,n,a){wa.S(t,n,a);var s=Hs;if(s&&t){var c=Ae(s).hoistableStyles,f=Gs(t);n=n||"default";var g=c.get(f);if(!g){var R={loading:0,preload:null};if(g=s.querySelector(ll(f)))R.loading=5;else{t=z({rel:"stylesheet",href:t,"data-precedence":n},a),(a=wi.get(f))&&gh(t,a);var G=g=s.createElement("link");Ee(G),Ln(G,"link",t),G._p=new Promise(function(it,dt){G.onload=it,G.onerror=dt}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,eu(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:R},c.set(f,g)}}}function XE(t,n){wa.X(t,n);var a=Hs;if(a&&t){var s=Ae(a).hoistableScripts,c=Vs(t),f=s.get(c);f||(f=a.querySelector(cl(c)),f||(t=z({src:t,async:!0},n),(n=wi.get(c))&&_h(t,n),f=a.createElement("script"),Ee(f),Ln(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function kE(t,n){wa.M(t,n);var a=Hs;if(a&&t){var s=Ae(a).hoistableScripts,c=Vs(t),f=s.get(c);f||(f=a.querySelector(cl(c)),f||(t=z({src:t,async:!0,type:"module"},n),(n=wi.get(c))&&_h(t,n),f=a.createElement("script"),Ee(f),Ln(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Mv(t,n,a,s){var c=(c=ve.current)?ol(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Gs(a.href),n=Ae(c).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Gs(a.href);var f=Ae(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(ll(t)))?f._p||(g.instance=f,g.state.loading=5):(f=wi.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wi.set(t,f)),qE(c,t,f,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Vs(a),n=Ae(c).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Gs(t){return'href="'+Mi(t)+'"'}function ll(t){return'link[rel="stylesheet"]['+t+"]"}function yv(t){return z({},t,{"data-precedence":t.precedence,precedence:null})}function qE(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Jt]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Jt]=!0,n.onload=n.onerror=Je.bind(null,n),Ln(n,"link",a),Ee(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Vs(t){return'[src="'+Mi(t)+'"]'}function cl(t){return"script[async]"+t}function Ev(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Mi(a.href)+'"]');if(s)return n.instance=s,Ee(s),s;var c=z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Ee(s),Ln(s,"style",c),eu(s,a.precedence,t),n.instance=s;case"stylesheet":c=Gs(a.href);var f=t.querySelector(ll(c));if(f)return n.state.loading|=4,n.instance=f,Ee(f),f;s=yv(a),(c=wi.get(c))&&gh(s,c),f=(t.ownerDocument||t).createElement("link"),Ee(f);var g=f;return g._p=new Promise(function(R,G){g.onload=R,g.onerror=G}),Ln(f,"link",s),n.state.loading|=4,eu(f,a.precedence,t),n.instance=f;case"script":return f=Vs(a.src),(c=t.querySelector(cl(f)))?(n.instance=c,Ee(c),c):(s=a,(c=wi.get(f))&&(s=z({},a),_h(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),Ee(c),Ln(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,eu(s,a.precedence,t));return n.instance}function eu(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var R=s[g];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function gh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function _h(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var nu=null;function Tv(t,n,a){if(nu===null){var s=new Map,c=nu=new Map;c.set(a,s)}else c=nu,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[It]||f[A]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var R=s.get(g);R?R.push(f):s.set(g,[f])}}return s}function vh(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function WE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function bv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Av(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Rv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Cv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Rv(n),t.suspenseyImages.push(n)),t=KE.bind(t),n.decode().then(t,t))}function YE(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Gs(s.href),f=n.querySelector(ll(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ul.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Ee(f);return}f=n.ownerDocument||n,s=yv(s),(c=wi.get(c))&&gh(s,c),f=f.createElement("link"),Ee(f);var g=f;g._p=new Promise(function(R,G){g.onload=R,g.onerror=G}),Ln(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ul.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var iu=0;function ZE(t,n){return t.stylesheets&&t.count===0&&ru(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&ru(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&iu===0&&(iu=62500*dE());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ru(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>iu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function wv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)ru(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function ul(){this.count--,wv(this)}function KE(){this.imgCount--,wv(this)}var au=null;function ru(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,au=new Map,n.forEach(QE,t),au=null,ul.call(t))}function QE(t,n){if(!(n.state.loading&4)){var a=au.get(t);if(a)var s=a.get(null);else{a=new Map,au.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=ul.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Xs={$$typeof:Z,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function JE(t,n,a,s,c,f,g,R,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ss(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ss(0),this.hiddenUpdates=ss(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.transitionTypes=null,this.incompleteTransitions=new Map}function Dv(t,n,a,s,c,f,g,R,G,it,dt,Et){return t=new JE(t,n,a,g,G,it,dt,Et,R),n=1,f===!0&&(n|=24),f=Jn(3,null,null,n),t.current=f,f.stateNode=t,n=Lf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},zf(f),t}function Nv(t){return t?(t=ms,t):ms}function Uv(t,n,a,s,c,f){c=Nv(c),s.context===null?s.context=c:s.pendingContext=c,s=ja(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=$a(t,s,n),a!==null&&(ei(a,t,n),Go(a,t,n))}function Lv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function xh(t,n){Lv(t,n),(t=t.alternate)&&Lv(t,n)}function Ov(t){if(t.tag===13||t.tag===31){var n=wr(t,67108864);n!==null&&ei(n,t,67108864),xh(t,67108864)}}function Pv(t){if(t.tag===13||t.tag===31){var n=hi();n=To(n);var a=wr(t,n);a!==null&&ei(a,t,n),xh(t,n)}}var ks=!0;function jE(t,n,a,s){var c=ot.T;ot.T=null;var f=At.p;try{At.p=2,Sh(t,n,a,s)}finally{At.p=f,ot.T=c}}function $E(t,n,a,s){var c=ot.T;ot.T=null;var f=At.p;try{At.p=8,Sh(t,n,a,s)}finally{At.p=f,ot.T=c}}function Sh(t,n,a,s){if(ks){var c=Mh(s);if(c===null)eh(t,n,s,su,a),zv(t,s);else if(e1(c,t,n,a,s))s.stopPropagation();else if(zv(t,s),n&4&&-1<t1.indexOf(t)){for(;c!==null;){var f=ge(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=ma(f.pendingLanes);if(g!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;g;){var G=1<<31-me(g);R.entanglements[1]|=G,g&=~G}ia(f),(Xe&6)===0&&(qc=Wt()+500,il(0))}}break;case 31:case 13:R=wr(f,2),R!==null&&ei(R,f,2),Zc(),xh(f,2)}if(f=Mh(s),f===null&&eh(t,n,s,su,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else eh(t,n,s,null,a)}}function Mh(t){return t=sf(t),yh(t)}var su=null;function yh(t){if(su=null,t=ue(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return su=t,null}function Iv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(le()){case pe:return 2;case j:return 8;case Ut:case Tt:return 32;case Pt:return 268435456;default:return 32}default:return 32}}var Eh=!1,fr=null,dr=null,hr=null,fl=new Map,dl=new Map,pr=[],t1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zv(t,n){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":fl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(n.pointerId)}}function hl(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ge(n),n!==null&&Ov(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function e1(t,n,a,s,c){switch(n){case"focusin":return fr=hl(fr,t,n,a,s,c),!0;case"dragenter":return dr=hl(dr,t,n,a,s,c),!0;case"mouseover":return hr=hl(hr,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return fl.set(f,hl(fl.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,dl.set(f,hl(dl.get(f)||null,t,n,a,s,c)),!0}return!1}function Fv(t){var n=ue(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Wl(t.priority,function(){Pv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Wl(t.priority,function(){Pv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ou(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Mh(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);rf=s,a.target.dispatchEvent(s),rf=null}else return n=ge(a),n!==null&&Ov(n),t.blockedOn=a,!1;n.shift()}return!0}function Bv(t,n,a){ou(t)&&a.delete(n)}function n1(){Eh=!1,fr!==null&&ou(fr)&&(fr=null),dr!==null&&ou(dr)&&(dr=null),hr!==null&&ou(hr)&&(hr=null),fl.forEach(Bv),dl.forEach(Bv)}function lu(t,n){t.blockedOn===n&&(t.blockedOn=null,Eh||(Eh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,n1)))}var cu=null;function Hv(t){cu!==t&&(cu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){cu===t&&(cu=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(yh(s||a)===null)continue;break}var f=ge(a);f!==null&&(t.splice(n,3),n-=3,ad(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function qs(t){function n(G){return lu(G,t)}fr!==null&&lu(fr,t),dr!==null&&lu(dr,t),hr!==null&&lu(hr,t),fl.forEach(n),dl.forEach(n);for(var a=0;a<pr.length;a++){var s=pr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<pr.length&&(a=pr[0],a.blockedOn===null);)Fv(a),a.blockedOn===null&&pr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[K]||null;if(typeof f=="function")g||Hv(a);else if(g){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[K]||null)R=g.formAction;else if(yh(c)!==null)continue}else R=g.action;typeof R=="function"?a[s+1]=R:(a.splice(s,3),s-=3),Hv(a)}}}function Gv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Th(t){this._internalRoot=t}uu.prototype.render=Th.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=hi();Uv(a,s,t,n,null,null)},uu.prototype.unmount=Th.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Uv(t.current,2,null,t,null,null),Zc(),n[pt]=null}};function uu(t){this._internalRoot=t}uu.prototype.unstable_scheduleHydration=function(t){if(t){var n=ql();t={blockedOn:null,target:t,priority:n};for(var a=0;a<pr.length&&n!==0&&n<pr[a].priority;a++);pr.splice(a,0,t),a===0&&Fv(t)}};var Vv=e.version;if(Vv!=="19.3.0")throw Error(r(527,Vv,"19.3.0"));At.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var i1={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:ot,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fu.isDisabled&&fu.supportsFiber)try{ee=fu.inject(i1),kt=fu}catch{}}return ml.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Ng,f=Ug,g=Lg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Dv(t,1,!1,null,null,a,s,null,c,f,g,Gv),t[pt]=n.current,th(t),new Th(n)},ml.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Ng,g=Ug,R=Lg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=Dv(t,1,!0,n,a??null,s,c,G,f,g,R,Gv),n.context=Nv(null),a=n.current,s=hi(),s=To(s),c=ja(s),c.callback=null,$a(a,c,s),a=s,n.current.lanes=a,qi(n,a),ia(n),t[pt]=n.current,th(t),new uu(n)},ml.version="19.3.0",ml}var jv;function h1(){if(jv)return Rh.exports;jv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Rh.exports=d1(),Rh.exports}var p1=h1();function _o(o){const e=new Uint32Array(1);return crypto.getRandomValues(e),Promise.resolve(e[0]%o+1)}const xm="186",m1=0,$v=1,g1=2,Iu=1,_1=2,El=3,Ni=0,ii=1,Pa=2,za=0,bl=1,tx=2,ex=3,nx=4,v1=5,ro=100,x1=101,S1=102,M1=103,y1=104,E1=200,T1=201,b1=202,A1=203,OS=204,PS=205,R1=206,C1=207,w1=208,D1=209,N1=210,U1=211,L1=212,O1=213,P1=214,dp=0,hp=1,pp=2,Rl=3,mp=4,gp=5,_p=6,vp=7,IS=0,I1=1,z1=2,fa=0,zS=1,FS=2,BS=3,HS=4,GS=5,VS=6,XS=7,kS=300,ts=301,mo=302,Nh=303,Uh=304,Qu=306,xp=1e3,Ia=1001,Sp=1002,In=1003,F1=1004,du=1005,Vn=1006,Lh=1007,jr=1008,_i=1009,qS=1010,WS=1011,Cl=1012,Sm=1013,da=1014,ca=1015,ha=1016,Mm=1017,ym=1018,wl=1020,YS=35902,ZS=35899,KS=1021,QS=1022,Vi=1023,Ha=1026,$r=1027,JS=1028,Em=1029,es=1030,Tm=1031,bm=1033,zu=33776,Fu=33777,Bu=33778,Hu=33779,Mp=35840,yp=35841,Ep=35842,Tp=35843,bp=36196,Ap=37492,Rp=37496,Cp=37488,wp=37489,Xu=37490,Dp=37491,Np=37808,Up=37809,Lp=37810,Op=37811,Pp=37812,Ip=37813,zp=37814,Fp=37815,Bp=37816,Hp=37817,Gp=37818,Vp=37819,Xp=37820,kp=37821,qp=36492,Wp=36494,Yp=36495,Zp=36283,Kp=36284,ku=36285,Qp=36286,B1=3200,Jp=0,H1=1,Er="",Pn="srgb",qu="srgb-linear",Wu="linear",Ke="srgb",Oh=7680,G1=519,V1=512,X1=513,k1=514,Am=515,q1=516,W1=517,Rm=518,Y1=519,Z1=35044,ix="300 es",ua=2e3,Dl=2001;function K1(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Yu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Q1(){const o=Yu("canvas");return o.style.display="block",o}const ax={};function rx(...o){const e="THREE."+o.shift();console.log(e,...o)}function jS(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function de(...o){o=jS(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Ge(...o){o=jS(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function oo(...o){const e=o.join(" ");e in ax||(ax[e]=!0,de(...o))}function J1(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const j1={[dp]:hp,[pp]:_p,[mp]:vp,[Rl]:gp,[hp]:dp,[_p]:pp,[vp]:mp,[gp]:Rl};class ns{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ph=Math.PI/180,jp=180/Math.PI;function Ul(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Bn[o&255]+Bn[o>>8&255]+Bn[o>>16&255]+Bn[o>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]).toLowerCase()}function Ie(o,e,i){return Math.max(e,Math.min(i,o))}function $1(o,e){return(o%e+e)%e}function Ih(o,e,i){return(1-i)*o+i*e}function gl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ni(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Pm=class Pm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ie(this.x,e.x,i.x),this.y=Ie(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ie(this.x,e,i),this.y=Ie(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ie(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ie(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pm.prototype.isVector2=!0;let we=Pm;class Qe{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let p=r[l+0],m=r[l+1],x=r[l+2],_=r[l+3],v=u[d+0],T=u[d+1],C=u[d+2],I=u[d+3];if(_!==I||p!==v||m!==T||x!==C){let M=p*v+m*T+x*C+_*I;M<0&&(v=-v,T=-T,C=-C,I=-I,M=-M);let S=1-h;if(M<.9995){const N=Math.acos(M),V=Math.sin(N);S=Math.sin(S*N)/V,h=Math.sin(h*N)/V,p=p*S+v*h,m=m*S+T*h,x=x*S+C*h,_=_*S+I*h}else{p=p*S+v*h,m=m*S+T*h,x=x*S+C*h,_=_*S+I*h;const N=1/Math.sqrt(p*p+m*m+x*x+_*_);p*=N,m*=N,x*=N,_*=N}}e[i]=p,e[i+1]=m,e[i+2]=x,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],p=r[l+1],m=r[l+2],x=r[l+3],_=u[d],v=u[d+1],T=u[d+2],C=u[d+3];return e[i]=h*C+x*_+p*T-m*v,e[i+1]=p*C+x*v+m*_-h*T,e[i+2]=m*C+x*T+h*v-p*_,e[i+3]=x*C-h*_-p*v-m*T,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(r/2),x=h(l/2),_=h(u/2),v=p(r/2),T=p(l/2),C=p(u/2);switch(d){case"XYZ":this._x=v*x*_+m*T*C,this._y=m*T*_-v*x*C,this._z=m*x*C+v*T*_,this._w=m*x*_-v*T*C;break;case"YXZ":this._x=v*x*_+m*T*C,this._y=m*T*_-v*x*C,this._z=m*x*C-v*T*_,this._w=m*x*_+v*T*C;break;case"ZXY":this._x=v*x*_-m*T*C,this._y=m*T*_+v*x*C,this._z=m*x*C+v*T*_,this._w=m*x*_-v*T*C;break;case"ZYX":this._x=v*x*_-m*T*C,this._y=m*T*_+v*x*C,this._z=m*x*C-v*T*_,this._w=m*x*_+v*T*C;break;case"YZX":this._x=v*x*_+m*T*C,this._y=m*T*_+v*x*C,this._z=m*x*C-v*T*_,this._w=m*x*_-v*T*C;break;case"XZY":this._x=v*x*_-m*T*C,this._y=m*T*_-v*x*C,this._z=m*x*C+v*T*_,this._w=m*x*_+v*T*C;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],p=i[9],m=i[2],x=i[6],_=i[10],v=r+h+_;if(v>0){const T=.5/Math.sqrt(v+1);this._w=.25/T,this._x=(x-p)*T,this._y=(u-m)*T,this._z=(d-l)*T}else if(r>h&&r>_){const T=2*Math.sqrt(1+r-h-_);this._w=(x-p)/T,this._x=.25*T,this._y=(l+d)/T,this._z=(u+m)/T}else if(h>_){const T=2*Math.sqrt(1+h-r-_);this._w=(u-m)/T,this._x=(l+d)/T,this._y=.25*T,this._z=(p+x)/T}else{const T=2*Math.sqrt(1+_-r-h);this._w=(d-l)/T,this._x=(u+m)/T,this._y=(p+x)/T,this._z=.25*T}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ie(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,p=i._y,m=i._z,x=i._w;return this._x=r*x+d*h+l*m-u*p,this._y=l*x+d*p+u*h-r*m,this._z=u*x+d*m+r*p-l*h,this._w=d*x-r*h-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,u=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),x=Math.sin(m);p=Math.sin(p*m)/x,i=Math.sin(i*m)/x,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Im=class Im{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(sx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(sx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*r),x=2*(h*i-u*l),_=2*(u*r-d*i);return this.x=i+p*m+d*_-h*x,this.y=r+p*x+h*m-u*_,this.z=l+p*_+u*x-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ie(this.x,e.x,i.x),this.y=Ie(this.y,e.y,i.y),this.z=Ie(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ie(this.x,e,i),this.y=Ie(this.y,e,i),this.z=Ie(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ie(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*d-r*p,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return zh.copy(this).projectOnVector(e),this.sub(zh)}reflect(e){return this.sub(zh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ie(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Im.prototype.isVector3=!0;let J=Im;const zh=new J,sx=new Qe,zm=class zm{constructor(e,i,r,l,u,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m)}set(e,i,r,l,u,d,h,p,m){const x=this.elements;return x[0]=e,x[1]=l,x[2]=h,x[3]=i,x[4]=u,x[5]=p,x[6]=r,x[7]=d,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],x=r[4],_=r[7],v=r[2],T=r[5],C=r[8],I=l[0],M=l[3],S=l[6],N=l[1],V=l[4],w=l[7],O=l[2],L=l[5],z=l[8];return u[0]=d*I+h*N+p*O,u[3]=d*M+h*V+p*L,u[6]=d*S+h*w+p*z,u[1]=m*I+x*N+_*O,u[4]=m*M+x*V+_*L,u[7]=m*S+x*w+_*z,u[2]=v*I+T*N+C*O,u[5]=v*M+T*V+C*L,u[8]=v*S+T*w+C*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],x=e[8];return i*d*x-i*h*m-r*u*x+r*h*p+l*u*m-l*d*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],x=e[8],_=x*d-h*m,v=h*p-x*u,T=m*u-d*p,C=i*_+r*v+l*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const I=1/C;return e[0]=_*I,e[1]=(l*m-x*r)*I,e[2]=(h*r-l*d)*I,e[3]=v*I,e[4]=(x*i-l*p)*I,e[5]=(l*u-h*i)*I,e[6]=T*I,e[7]=(r*p-m*i)*I,e[8]=(d*i-r*u)*I,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return oo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fh.makeScale(e,i)),this}rotate(e){return oo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fh.makeRotation(-e)),this}translate(e,i){return oo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zm.prototype.isMatrix3=!0;let _e=zm;const Fh=new _e,ox=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lx=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tT(){const o={enabled:!0,workingColorSpace:qu,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ke&&(l.r=Fa(l.r),l.g=Fa(l.g),l.b=Fa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ke&&(l.r=lo(l.r),l.g=lo(l.g),l.b=lo(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Er?Wu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return oo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return oo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[qu]:{primaries:e,whitePoint:r,transfer:Wu,toXYZ:ox,fromXYZ:lx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:e,whitePoint:r,transfer:Ke,toXYZ:ox,fromXYZ:lx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),o}const Pe=tT();function Fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function lo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ws;class eT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ws===void 0&&(Ws=Yu("canvas")),Ws.width=e.width,Ws.height=e.height;const l=Ws.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Ws}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Yu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Fa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Fa(i[r]/255)*255):i[r]=Fa(i[r]);return{data:i,width:e.width,height:e.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nT=0;class Cm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=Ul(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Bh(l[d].image)):u.push(Bh(l[d]))}else u=Bh(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Bh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?eT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}let iT=0;const Hh=new J;class Xn extends ns{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Ia,l=Ia,u=Vn,d=jr,h=Vi,p=_i,m=Xn.DEFAULT_ANISOTROPY,x=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iT++}),this.uuid=Ul(),this.name="",this.source=new Cm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hh).x}get height(){return this.source.getSize(Hh).y}get depth(){return this.source.getSize(Hh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){de(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){de(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xp:e.x=e.x-Math.floor(e.x);break;case Ia:e.x=e.x<0?0:1;break;case Sp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xp:e.y=e.y-Math.floor(e.y);break;case Ia:e.y=e.y<0?0:1;break;case Sp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=kS;Xn.DEFAULT_ANISOTROPY=1;const Fm=class Fm{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],x=p[4],_=p[8],v=p[1],T=p[5],C=p[9],I=p[2],M=p[6],S=p[10];if(Math.abs(x-v)<.01&&Math.abs(_-I)<.01&&Math.abs(C-M)<.01){if(Math.abs(x+v)<.1&&Math.abs(_+I)<.1&&Math.abs(C+M)<.1&&Math.abs(m+T+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const V=(m+1)/2,w=(T+1)/2,O=(S+1)/2,L=(x+v)/4,z=(_+I)/4,E=(C+M)/4;return V>w&&V>O?V<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(V),l=L/r,u=z/r):w>O?w<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),r=L/l,u=E/l):O<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(O),r=z/u,l=E/u),this.set(r,l,u,i),this}let N=Math.sqrt((M-C)*(M-C)+(_-I)*(_-I)+(v-x)*(v-x));return Math.abs(N)<.001&&(N=1),this.x=(M-C)/N,this.y=(_-I)/N,this.z=(v-x)/N,this.w=Math.acos((m+T+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ie(this.x,e.x,i.x),this.y=Ie(this.y,e.y,i.y),this.z=Ie(this.z,e.z,i.z),this.w=Ie(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ie(this.x,e,i),this.y=Ie(this.y,e,i),this.z=Ie(this.z,e,i),this.w=Ie(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ie(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fm.prototype.isVector4=!0;let ln=Fm;class aT extends ns{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},u=new Xn(l),d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Cm(l)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends aT{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class $S extends Xn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Ia,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rT extends Xn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Ia,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ku=class Ku{constructor(e,i,r,l,u,d,h,p,m,x,_,v,T,C,I,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m,x,_,v,T,C,I,M)}set(e,i,r,l,u,d,h,p,m,x,_,v,T,C,I,M){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=l,S[1]=u,S[5]=d,S[9]=h,S[13]=p,S[2]=m,S[6]=x,S[10]=_,S[14]=v,S[3]=T,S[7]=C,S[11]=I,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ku().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Ys.setFromMatrixColumn(e,0).length(),u=1/Ys.setFromMatrixColumn(e,1).length(),d=1/Ys.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),x=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const v=d*x,T=d*_,C=h*x,I=h*_;i[0]=p*x,i[4]=-p*_,i[8]=m,i[1]=T+C*m,i[5]=v-I*m,i[9]=-h*p,i[2]=I-v*m,i[6]=C+T*m,i[10]=d*p}else if(e.order==="YXZ"){const v=p*x,T=p*_,C=m*x,I=m*_;i[0]=v+I*h,i[4]=C*h-T,i[8]=d*m,i[1]=d*_,i[5]=d*x,i[9]=-h,i[2]=T*h-C,i[6]=I+v*h,i[10]=d*p}else if(e.order==="ZXY"){const v=p*x,T=p*_,C=m*x,I=m*_;i[0]=v-I*h,i[4]=-d*_,i[8]=C+T*h,i[1]=T+C*h,i[5]=d*x,i[9]=I-v*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const v=d*x,T=d*_,C=h*x,I=h*_;i[0]=p*x,i[4]=C*m-T,i[8]=v*m+I,i[1]=p*_,i[5]=I*m+v,i[9]=T*m-C,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const v=d*p,T=d*m,C=h*p,I=h*m;i[0]=p*x,i[4]=I-v*_,i[8]=C*_+T,i[1]=_,i[5]=d*x,i[9]=-h*x,i[2]=-m*x,i[6]=T*_+C,i[10]=v-I*_}else if(e.order==="XZY"){const v=d*p,T=d*m,C=h*p,I=h*m;i[0]=p*x,i[4]=-_,i[8]=m*x,i[1]=v*_+I,i[5]=d*x,i[9]=T*_-C,i[2]=C*_-T,i[6]=h*x,i[10]=I*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sT,e,oT)}lookAt(e,i,r){const l=this.elements;return mi.subVectors(e,i),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),gr.crossVectors(r,mi),gr.lengthSq()===0&&(Math.abs(r.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),gr.crossVectors(r,mi)),gr.normalize(),hu.crossVectors(mi,gr),l[0]=gr.x,l[4]=hu.x,l[8]=mi.x,l[1]=gr.y,l[5]=hu.y,l[9]=mi.y,l[2]=gr.z,l[6]=hu.z,l[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],x=r[1],_=r[5],v=r[9],T=r[13],C=r[2],I=r[6],M=r[10],S=r[14],N=r[3],V=r[7],w=r[11],O=r[15],L=l[0],z=l[4],E=l[8],P=l[12],b=l[1],D=l[5],U=l[9],X=l[13],B=l[2],Z=l[6],q=l[10],W=l[14],$=l[3],et=l[7],ht=l[11],Mt=l[15];return u[0]=d*L+h*b+p*B+m*$,u[4]=d*z+h*D+p*Z+m*et,u[8]=d*E+h*U+p*q+m*ht,u[12]=d*P+h*X+p*W+m*Mt,u[1]=x*L+_*b+v*B+T*$,u[5]=x*z+_*D+v*Z+T*et,u[9]=x*E+_*U+v*q+T*ht,u[13]=x*P+_*X+v*W+T*Mt,u[2]=C*L+I*b+M*B+S*$,u[6]=C*z+I*D+M*Z+S*et,u[10]=C*E+I*U+M*q+S*ht,u[14]=C*P+I*X+M*W+S*Mt,u[3]=N*L+V*b+w*B+O*$,u[7]=N*z+V*D+w*Z+O*et,u[11]=N*E+V*U+w*q+O*ht,u[15]=N*P+V*X+w*W+O*Mt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],p=e[9],m=e[13],x=e[2],_=e[6],v=e[10],T=e[14],C=e[3],I=e[7],M=e[11],S=e[15],N=p*T-m*v,V=h*T-m*_,w=h*v-p*_,O=d*T-m*x,L=d*v-p*x,z=d*_-h*x;return i*(I*N-M*V+S*w)-r*(C*N-M*O+S*L)+l*(C*V-I*O+S*z)-u*(C*w-I*L+M*z)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[1],d=e[5],h=e[9],p=e[2],m=e[6],x=e[10];return i*(d*x-h*m)-r*(u*x-h*p)+l*(u*m-d*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],x=e[8],_=e[9],v=e[10],T=e[11],C=e[12],I=e[13],M=e[14],S=e[15],N=i*h-r*d,V=i*p-l*d,w=i*m-u*d,O=r*p-l*h,L=r*m-u*h,z=l*m-u*p,E=x*I-_*C,P=x*M-v*C,b=x*S-T*C,D=_*M-v*I,U=_*S-T*I,X=v*S-T*M,B=N*X-V*U+w*D+O*b-L*P+z*E;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/B;return e[0]=(h*X-p*U+m*D)*Z,e[1]=(l*U-r*X-u*D)*Z,e[2]=(I*z-M*L+S*O)*Z,e[3]=(v*L-_*z-T*O)*Z,e[4]=(p*b-d*X-m*P)*Z,e[5]=(i*X-l*b+u*P)*Z,e[6]=(M*w-C*z-S*V)*Z,e[7]=(x*z-v*w+T*V)*Z,e[8]=(d*U-h*b+m*E)*Z,e[9]=(r*b-i*U-u*E)*Z,e[10]=(C*L-I*w+S*N)*Z,e[11]=(_*w-x*L-T*N)*Z,e[12]=(h*P-d*D-p*E)*Z,e[13]=(i*D-r*P+l*E)*Z,e[14]=(I*V-C*O-M*N)*Z,e[15]=(x*O-_*V+v*N)*Z,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,p=e.z,m=u*d,x=u*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,x*h+r,x*p-l*d,0,m*p-l*h,x*p+l*d,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,p=i._w,m=u+u,x=d+d,_=h+h,v=u*m,T=u*x,C=u*_,I=d*x,M=d*_,S=h*_,N=p*m,V=p*x,w=p*_,O=r.x,L=r.y,z=r.z;return l[0]=(1-(I+S))*O,l[1]=(T+w)*O,l[2]=(C-V)*O,l[3]=0,l[4]=(T-w)*L,l[5]=(1-(v+S))*L,l[6]=(M+N)*L,l[7]=0,l[8]=(C+V)*z,l[9]=(M-N)*z,l[10]=(1-(v+I))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinantAffine();if(u===0)return r.set(1,1,1),i.identity(),this;let d=Ys.set(l[0],l[1],l[2]).length();const h=Ys.set(l[4],l[5],l[6]).length(),p=Ys.set(l[8],l[9],l[10]).length();u<0&&(d=-d),Fi.copy(this);const m=1/d,x=1/h,_=1/p;return Fi.elements[0]*=m,Fi.elements[1]*=m,Fi.elements[2]*=m,Fi.elements[4]*=x,Fi.elements[5]*=x,Fi.elements[6]*=x,Fi.elements[8]*=_,Fi.elements[9]*=_,Fi.elements[10]*=_,i.setFromRotationMatrix(Fi),r.x=d,r.y=h,r.z=p,this}makePerspective(e,i,r,l,u,d,h=ua,p=!1){const m=this.elements,x=2*u/(i-e),_=2*u/(r-l),v=(i+e)/(i-e),T=(r+l)/(r-l);let C,I;if(p)C=u/(d-u),I=d*u/(d-u);else if(h===ua)C=-(d+u)/(d-u),I=-2*d*u/(d-u);else if(h===Dl)C=-d/(d-u),I=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=x,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=T,m[13]=0,m[2]=0,m[6]=0,m[10]=C,m[14]=I,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=ua,p=!1){const m=this.elements,x=2/(i-e),_=2/(r-l),v=-(i+e)/(i-e),T=-(r+l)/(r-l);let C,I;if(p)C=1/(d-u),I=d/(d-u);else if(h===ua)C=-2/(d-u),I=-(d+u)/(d-u);else if(h===Dl)C=-1/(d-u),I=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=x,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=_,m[9]=0,m[13]=T,m[2]=0,m[6]=0,m[10]=C,m[14]=I,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Ku.prototype.isMatrix4=!0;let tn=Ku;const Ys=new J,Fi=new tn,sT=new J(0,0,0),oT=new J(1,1,1),gr=new J,hu=new J,mi=new J,cx=new tn,ux=new Qe;class Qn{constructor(e=0,i=0,r=0,l=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],p=l[1],m=l[5],x=l[9],_=l[2],v=l[6],T=l[10];switch(i){case"XYZ":this._y=Math.asin(Ie(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,T),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,T),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,T),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ie(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,T),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Ie(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,T));break;case"XZY":this._z=Math.asin(-Ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-x,T),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return cx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cx,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return ux.setFromEuler(this),this.setFromQuaternion(ux,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class tM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lT=0;const fx=new J,Zs=new Qe,Da=new tn,pu=new J,_l=new J,cT=new J,uT=new Qe,dx=new J(1,0,0),hx=new J(0,1,0),px=new J(0,0,1),mx={type:"added"},fT={type:"removed"},Ks={type:"childadded",child:null},Gh={type:"childremoved",child:null};class zn extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lT++}),this.uuid=Ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new J,i=new Qn,r=new Qe,l=new J(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new _e}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Zs.setFromAxisAngle(e,i),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,i){return Zs.setFromAxisAngle(e,i),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(dx,e)}rotateY(e){return this.rotateOnAxis(hx,e)}rotateZ(e){return this.rotateOnAxis(px,e)}translateOnAxis(e,i){return fx.copy(e).applyQuaternion(this.quaternion),this.position.add(fx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(dx,e)}translateY(e){return this.translateOnAxis(hx,e)}translateZ(e){return this.translateOnAxis(px,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Da.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?pu.copy(e):pu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),_l.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Da.lookAt(_l,pu,this.up):Da.lookAt(pu,_l,this.up),this.quaternion.setFromRotationMatrix(Da),l&&(Da.extractRotation(l.matrixWorld),Zs.setFromRotationMatrix(Da),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mx),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(fT),Gh.child=e,this.dispatchEvent(Gh),Gh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Da.multiply(e.parent.matrixWorld)),e.applyMatrix4(Da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mx),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,e,cT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,uT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const u=this.children;for(let d=0,h=u.length;d<h;d++)u[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const _=p[m];u(e.shapes,_)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(e.materials,this.material[p]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),x=d(e.images),_=d(e.shapes),v=d(e.skeletons),T=d(e.animations),C=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),T.length>0&&(r.animations=T),C.length>0&&(r.nodes=C)}return r.object=l,r;function d(h){const p=[];for(const m in h){const x=h[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}zn.DEFAULT_UP=new J(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mu extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dT={type:"move"};class Vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const I of e.hand.values()){const M=i.getJointPose(I,r),S=this._getHandJoint(m,I);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const x=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],v=x.position.distanceTo(_.position),T=.02,C=.005;m.inputState.pinching&&v>T+C?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=T-C&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(dT)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new mu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const eM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},gu={h:0,s:0,l:0};function Xh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Be{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pe.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Pe.workingColorSpace){return this.r=e,this.g=i,this.b=r,Pe.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Pe.workingColorSpace){if(e=$1(e,1),i=Ie(i,0,1),r=Ie(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=Xh(d,u,e+1/3),this.g=Xh(d,u,e),this.b=Xh(d,u,e-1/3)}return Pe.colorSpaceToWorking(this,l),this}setStyle(e,i=Pn){function r(u){u!==void 0&&parseFloat(u)<1&&de("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:de("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);de("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Pn){const r=eM[e.toLowerCase()];return r!==void 0?this.setHex(r,i):de("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return Pe.workingToColorSpace(Hn.copy(this),e),Math.round(Ie(Hn.r*255,0,255))*65536+Math.round(Ie(Hn.g*255,0,255))*256+Math.round(Ie(Hn.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Pe.workingColorSpace){Pe.workingToColorSpace(Hn.copy(this),i);const r=Hn.r,l=Hn.g,u=Hn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let p,m;const x=(h+d)/2;if(h===d)p=0,m=0;else{const _=d-h;switch(m=x<=.5?_/(d+h):_/(2-d-h),d){case r:p=(l-u)/_+(l<u?6:0);break;case l:p=(u-r)/_+2;break;case u:p=(r-l)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,i=Pe.workingColorSpace){return Pe.workingToColorSpace(Hn.copy(this),i),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Pn){Pe.workingToColorSpace(Hn.copy(this),e);const i=Hn.r,r=Hn.g,l=Hn.b;return e!==Pn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+i,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(_r),e.getHSL(gu);const r=Ih(_r.h,gu.h,i),l=Ih(_r.s,gu.s,i),u=Ih(_r.l,gu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Be;Be.NAMES=eM;class Ll extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bi=new J,Na=new J,kh=new J,Ua=new J,Qs=new J,Js=new J,gx=new J,qh=new J,Wh=new J,Yh=new J,Zh=new ln,Kh=new ln,Qh=new ln;class Gi{constructor(e=new J,i=new J,r=new J){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Bi.subVectors(e,i),l.cross(Bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Bi.subVectors(l,i),Na.subVectors(r,i),kh.subVectors(e,i);const d=Bi.dot(Bi),h=Bi.dot(Na),p=Bi.dot(kh),m=Na.dot(Na),x=Na.dot(kh),_=d*m-h*h;if(_===0)return u.set(0,0,0),null;const v=1/_,T=(m*p-h*x)*v,C=(d*x-h*p)*v;return u.set(1-T-C,C,T)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getInterpolation(e,i,r,l,u,d,h,p){return this.getBarycoord(e,i,r,l,Ua)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ua.x),p.addScaledVector(d,Ua.y),p.addScaledVector(h,Ua.z),p)}static getInterpolatedAttribute(e,i,r,l,u,d){return Zh.setScalar(0),Kh.setScalar(0),Qh.setScalar(0),Zh.fromBufferAttribute(e,i),Kh.fromBufferAttribute(e,r),Qh.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Zh,u.x),d.addScaledVector(Kh,u.y),d.addScaledVector(Qh,u.z),d}static isFrontFacing(e,i,r,l){return Bi.subVectors(r,i),Na.subVectors(e,i),Bi.cross(Na).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),Na.subVectors(this.a,this.b),Bi.cross(Na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Gi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Gi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;Qs.subVectors(l,r),Js.subVectors(u,r),qh.subVectors(e,r);const p=Qs.dot(qh),m=Js.dot(qh);if(p<=0&&m<=0)return i.copy(r);Wh.subVectors(e,l);const x=Qs.dot(Wh),_=Js.dot(Wh);if(x>=0&&_<=x)return i.copy(l);const v=p*_-x*m;if(v<=0&&p>=0&&x<=0)return d=p/(p-x),i.copy(r).addScaledVector(Qs,d);Yh.subVectors(e,u);const T=Qs.dot(Yh),C=Js.dot(Yh);if(C>=0&&T<=C)return i.copy(u);const I=T*m-p*C;if(I<=0&&m>=0&&C<=0)return h=m/(m-C),i.copy(r).addScaledVector(Js,h);const M=x*C-T*_;if(M<=0&&_-x>=0&&T-C>=0)return gx.subVectors(u,l),h=(_-x)/(_-x+(T-C)),i.copy(l).addScaledVector(gx,h);const S=1/(M+I+v);return d=I*S,h=v*S,i.copy(r).addScaledVector(Qs,d).addScaledVector(Js,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ol{constructor(e=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Hi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Hi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Hi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Hi):Hi.fromBufferAttribute(u,d),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_u.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),_u.copy(r.boundingBox)),_u.applyMatrix4(e.matrixWorld),this.union(_u)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vl),vu.subVectors(this.max,vl),js.subVectors(e.a,vl),$s.subVectors(e.b,vl),to.subVectors(e.c,vl),vr.subVectors($s,js),xr.subVectors(to,$s),Yr.subVectors(js,to);let i=[0,-vr.z,vr.y,0,-xr.z,xr.y,0,-Yr.z,Yr.y,vr.z,0,-vr.x,xr.z,0,-xr.x,Yr.z,0,-Yr.x,-vr.y,vr.x,0,-xr.y,xr.x,0,-Yr.y,Yr.x,0];return!Jh(i,js,$s,to,vu)||(i=[1,0,0,0,1,0,0,0,1],!Jh(i,js,$s,to,vu))?!1:(xu.crossVectors(vr,xr),i=[xu.x,xu.y,xu.z],Jh(i,js,$s,to,vu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(La[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),La[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),La[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),La[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),La[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),La[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),La[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),La[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(La),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const La=[new J,new J,new J,new J,new J,new J,new J,new J],Hi=new J,_u=new Ol,js=new J,$s=new J,to=new J,vr=new J,xr=new J,Yr=new J,vl=new J,vu=new J,xu=new J,Zr=new J;function Jh(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){Zr.fromArray(o,u);const h=l.x*Math.abs(Zr.x)+l.y*Math.abs(Zr.y)+l.z*Math.abs(Zr.z),p=e.dot(Zr),m=i.dot(Zr),x=r.dot(Zr);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>h)return!1}return!0}const vn=new J,Su=new we;let hT=0;class Ba extends ns{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Z1,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Su.fromBufferAttribute(this,i),Su.applyMatrix3(e),this.setXY(i,Su.x,Su.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=gl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ni(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=gl(i,this.array)),i}setX(e,i){return this.normalized&&(i=ni(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=gl(i,this.array)),i}setY(e,i){return this.normalized&&(i=ni(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=gl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ni(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=gl(i,this.array)),i}setW(e,i){return this.normalized&&(i=ni(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ni(i,this.array),r=ni(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=ni(i,this.array),r=ni(r,this.array),l=ni(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=ni(i,this.array),r=ni(r,this.array),l=ni(l,this.array),u=ni(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class nM extends Ba{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class iM extends Ba{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class xn extends Ba{constructor(e,i,r){super(new Float32Array(e),i,r)}}const pT=new Ol,xl=new J,jh=new J;class wm{constructor(e=new J,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):pT.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xl.subVectors(e,this.center);const i=xl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(xl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xl.copy(e.center).add(jh)),this.expandByPoint(xl.copy(e.center).sub(jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let mT=0;const Di=new tn,$h=new zn,eo=new J,gi=new Ol,Sl=new Ol,Cn=new J;class ai extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=Ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(K1(e)?iM:nM)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new _e().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,i,r){return Di.makeTranslation(e,i,r),this.applyMatrix4(Di),this}scale(e,i,r){return Di.makeScale(e,i,r),this.applyMatrix4(Di),this}lookAt(e){return $h.lookAt(e),$h.updateMatrix(),this.applyMatrix4($h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new xn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ol);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];gi.setFromBufferAttribute(u),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wm);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Sl.setFromBufferAttribute(h),this.morphTargetsRelative?(Cn.addVectors(gi.min,Sl.min),gi.expandByPoint(Cn),Cn.addVectors(gi.max,Sl.max),gi.expandByPoint(Cn)):(gi.expandByPoint(Sl.min),gi.expandByPoint(Sl.max))}gi.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)Cn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Cn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,x=h.count;m<x;m++)Cn.fromBufferAttribute(h,m),p&&(eo.fromBufferAttribute(e,m),Cn.add(eo)),l=Math.max(l,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new Ba(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const h=[],p=[];for(let E=0;E<r.count;E++)h[E]=new J,p[E]=new J;const m=new J,x=new J,_=new J,v=new we,T=new we,C=new we,I=new J,M=new J;function S(E,P,b){m.fromBufferAttribute(r,E),x.fromBufferAttribute(r,P),_.fromBufferAttribute(r,b),v.fromBufferAttribute(u,E),T.fromBufferAttribute(u,P),C.fromBufferAttribute(u,b),x.sub(m),_.sub(m),T.sub(v),C.sub(v);const D=1/(T.x*C.y-C.x*T.y);isFinite(D)&&(I.copy(x).multiplyScalar(C.y).addScaledVector(_,-T.y).multiplyScalar(D),M.copy(_).multiplyScalar(T.x).addScaledVector(x,-C.x).multiplyScalar(D),h[E].add(I),h[P].add(I),h[b].add(I),p[E].add(M),p[P].add(M),p[b].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let E=0,P=N.length;E<P;++E){const b=N[E],D=b.start,U=b.count;for(let X=D,B=D+U;X<B;X+=3)S(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const V=new J,w=new J,O=new J,L=new J;function z(E){O.fromBufferAttribute(l,E),L.copy(O);const P=h[E];V.copy(P),V.sub(O.multiplyScalar(O.dot(P))).normalize(),w.crossVectors(L,P);const D=w.dot(p[E])<0?-1:1;d.setXYZW(E,V.x,V.y,V.z,D)}for(let E=0,P=N.length;E<P;++E){const b=N[E],D=b.start,U=b.count;for(let X=D,B=D+U;X<B;X+=3)z(e.getX(X+0)),z(e.getX(X+1)),z(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Ba(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,T=r.count;v<T;v++)r.setXYZ(v,0,0,0);const l=new J,u=new J,d=new J,h=new J,p=new J,m=new J,x=new J,_=new J;if(e)for(let v=0,T=e.count;v<T;v+=3){const C=e.getX(v+0),I=e.getX(v+1),M=e.getX(v+2);l.fromBufferAttribute(i,C),u.fromBufferAttribute(i,I),d.fromBufferAttribute(i,M),x.subVectors(d,u),_.subVectors(l,u),x.cross(_),h.fromBufferAttribute(r,C),p.fromBufferAttribute(r,I),m.fromBufferAttribute(r,M),h.add(x),p.add(x),m.add(x),r.setXYZ(C,h.x,h.y,h.z),r.setXYZ(I,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,T=i.count;v<T;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),x.subVectors(d,u),_.subVectors(l,u),x.cross(_),r.setXYZ(v+0,x.x,x.y,x.z),r.setXYZ(v+1,x.x,x.y,x.z),r.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Cn.fromBufferAttribute(e,i),Cn.normalize(),e.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(h,p){const m=h.array,x=h.itemSize,_=h.normalized,v=new m.constructor(p.length*x);let T=0,C=0;for(let I=0,M=p.length;I<M;I++){h.isInterleavedBufferAttribute?T=p[I]*h.data.stride+h.offset:T=p[I]*x;for(let S=0;S<x;S++)v[C++]=m[T++]}return new Ba(v,x,_)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ai,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let x=0,_=m.length;x<_;x++){const v=m[x],T=e(v,r);p.push(T)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let _=0,v=m.length;_<v;_++){const T=m[_];x.push(T.toJSON(e.data))}x.length>0&&(l[p]=x,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const x=l[m];this.setAttribute(m,x.clone(i))}const u=e.morphAttributes;for(const m in u){const x=[],_=u[m];for(let v=0,T=_.length;v<T;v++)x.push(_[v].clone(i));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,x=d.length;m<x;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tp=new J,gT=new J,_T=new _e;class yr{constructor(e=new J(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=tp.subVectors(r,i).cross(gT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(tp),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/u;return r===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||_T.getNormalMatrix(e),l=this.coplanarPoint(tp).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let vT=0;class Pl extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vT++}),this.uuid=Ul(),this.name="",this.type="Material",this.blending=bl,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=OS,this.blendDst=PS,this.blendEquation=ro,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=G1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oh,this.stencilZFail=Oh,this.stencilZPass=Oh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){de(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){de(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new yr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new we().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new we().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Oa=new J,ep=new J,Mu=new J,yu=new J;class xT{constructor(e=new J,i=new J(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Oa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Oa.copy(this.origin).addScaledVector(this.direction,i),Oa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){ep.copy(e).add(i).multiplyScalar(.5),Mu.copy(i).sub(e).normalize(),yu.copy(this.origin).sub(ep);const u=e.distanceTo(i)*.5,d=-this.direction.dot(Mu),h=yu.dot(this.direction),p=-yu.dot(Mu),m=yu.lengthSq(),x=Math.abs(1-d*d);let _,v,T,C;if(x>0)if(_=d*p-h,v=d*h-p,C=u*x,_>=0)if(v>=-C)if(v<=C){const I=1/x;_*=I,v*=I,T=_*(_+d*v+2*h)+v*(d*_+v+2*p)+m}else v=u,_=Math.max(0,-(d*v+h)),T=-_*_+v*(v+2*p)+m;else v=-u,_=Math.max(0,-(d*v+h)),T=-_*_+v*(v+2*p)+m;else v<=-C?(_=Math.max(0,-(-d*u+h)),v=_>0?-u:Math.min(Math.max(-u,-p),u),T=-_*_+v*(v+2*p)+m):v<=C?(_=0,v=Math.min(Math.max(-u,-p),u),T=v*(v+2*p)+m):(_=Math.max(0,-(d*u+h)),v=_>0?u:Math.min(Math.max(-u,-p),u),T=-_*_+v*(v+2*p)+m);else v=d>0?-u:u,_=Math.max(0,-(d*v+h)),T=-_*_+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ep).addScaledVector(Mu,v),T}intersectSphere(e,i){if(e.radius<0)return null;Oa.subVectors(e.center,this.origin);const r=Oa.dot(this.direction),l=Oa.dot(Oa)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,p;const m=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,l=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,l=(e.min.x-v.x)*m),x>=0?(u=(e.min.y-v.y)*x,d=(e.max.y-v.y)*x):(u=(e.max.y-v.y)*x,d=(e.min.y-v.y)*x),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),_>=0?(h=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Oa)!==null}intersectTriangle(e,i,r,l,u){const d=this.origin,h=this.direction,p=h.x,m=h.y,x=h.z,_=e.x-d.x,v=e.y-d.y,T=e.z-d.z,C=i.x-d.x,I=i.y-d.y,M=i.z-d.z,S=r.x-d.x,N=r.y-d.y,V=r.z-d.z,w=Math.abs(p),O=Math.abs(m),L=Math.abs(x);let z,E,P,b,D,U,X,B,Z,q,W,$;if(w>=O&&w>=L?(P=p,U=_,Z=C,$=S,p>=0?(z=m,E=x,b=v,D=T,X=I,B=M,q=N,W=V):(z=x,E=m,b=T,D=v,X=M,B=I,q=V,W=N)):O>=L?(P=m,U=v,Z=I,$=N,m>=0?(z=x,E=p,b=T,D=_,X=M,B=C,q=V,W=S):(z=p,E=x,b=_,D=T,X=C,B=M,q=S,W=V)):(P=x,U=T,Z=M,$=V,x>=0?(z=p,E=m,b=_,D=v,X=C,B=I,q=S,W=N):(z=m,E=p,b=v,D=_,X=I,B=C,q=N,W=S)),P===0)return null;const et=z/P,ht=E/P,Mt=1/P,Bt=b-et*U,Dt=D-ht*U,k=X-et*Z,mt=B-ht*Z,gt=q-et*$,H=W-ht*$,at=gt*mt-H*k,_t=Bt*H-Dt*gt,Ct=k*Dt-mt*Bt;if(l){if(at<0||_t<0||Ct<0)return null}else if((at<0||_t<0||Ct<0)&&(at>0||_t>0||Ct>0))return null;const ot=at+_t+Ct;if(ot===0)return null;const At=Mt*(at*U+_t*Z+Ct*$);return(ot>0?At<0:At>0)?null:this.at(At/ot,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class is extends Pl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=IS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _x=new tn,Kr=new xT,Eu=new wm,vx=new J,Tu=new J,bu=new J,Au=new J,np=new J,Ru=new J,xx=new J,Cu=new J;class yn extends zn{constructor(e=new ai,i=new is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){Ru.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const x=h[p],_=u[p];x!==0&&(np.fromBufferAttribute(_,e),d?Ru.addScaledVector(np,x):Ru.addScaledVector(np.sub(i),x))}i.add(Ru)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Eu.copy(r.boundingSphere),Eu.applyMatrix4(u),Kr.copy(e.ray).recast(e.near),!(Eu.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(Eu,vx)===null||Kr.origin.distanceToSquared(vx)>(e.far-e.near)**2))&&(_x.copy(u).invert(),Kr.copy(e.ray).applyMatrix4(_x),!(r.boundingBox!==null&&Kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Kr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,x=u.attributes.uv1,_=u.attributes.normal,v=u.groups,T=u.drawRange;if(h!==null)if(Array.isArray(d))for(let C=0,I=v.length;C<I;C++){const M=v[C],S=d[M.materialIndex],N=Math.max(M.start,T.start),V=Math.min(h.count,Math.min(M.start+M.count,T.start+T.count));for(let w=N,O=V;w<O;w+=3){const L=h.getX(w),z=h.getX(w+1),E=h.getX(w+2);l=wu(this,S,e,r,m,x,_,L,z,E),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const C=Math.max(0,T.start),I=Math.min(h.count,T.start+T.count);for(let M=C,S=I;M<S;M+=3){const N=h.getX(M),V=h.getX(M+1),w=h.getX(M+2);l=wu(this,d,e,r,m,x,_,N,V,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let C=0,I=v.length;C<I;C++){const M=v[C],S=d[M.materialIndex],N=Math.max(M.start,T.start),V=Math.min(p.count,Math.min(M.start+M.count,T.start+T.count));for(let w=N,O=V;w<O;w+=3){const L=w,z=w+1,E=w+2;l=wu(this,S,e,r,m,x,_,L,z,E),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const C=Math.max(0,T.start),I=Math.min(p.count,T.start+T.count);for(let M=C,S=I;M<S;M+=3){const N=M,V=M+1,w=M+2;l=wu(this,d,e,r,m,x,_,N,V,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function ST(o,e,i,r,l,u,d,h){let p;if(e.side===ii?p=r.intersectTriangle(d,u,l,!0,h):p=r.intersectTriangle(l,u,d,e.side===Ni,h),p===null)return null;Cu.copy(h),Cu.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Cu);return m<i.near||m>i.far?null:{distance:m,point:Cu.clone(),object:o}}function wu(o,e,i,r,l,u,d,h,p,m){o.getVertexPosition(h,Tu),o.getVertexPosition(p,bu),o.getVertexPosition(m,Au);const x=ST(o,e,i,r,Tu,bu,Au,xx);if(x){const _=new J;Gi.getBarycoord(xx,Tu,bu,Au,_),l&&(x.uv=Gi.getInterpolatedAttribute(l,h,p,m,_,new we)),u&&(x.uv1=Gi.getInterpolatedAttribute(u,h,p,m,_,new we)),d&&(x.normal=Gi.getInterpolatedAttribute(d,h,p,m,_,new J),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new J,materialIndex:0};Gi.getNormal(Tu,bu,Au,v.normal),x.face=v,x.barycoord=_}return x}class MT extends Xn{constructor(e=null,i=1,r=1,l,u,d,h,p,m=In,x=In,_,v){super(null,d,h,p,m,x,l,u,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qr=new wm,yT=new we(.5,.5),Du=new J;class Dm{constructor(e=new yr,i=new yr,r=new yr,l=new yr,u=new yr,d=new yr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ua,r=!1){const l=this.planes,u=e.elements,d=u[0],h=u[1],p=u[2],m=u[3],x=u[4],_=u[5],v=u[6],T=u[7],C=u[8],I=u[9],M=u[10],S=u[11],N=u[12],V=u[13],w=u[14],O=u[15];if(l[0].setComponents(m-d,T-x,S-C,O-N).normalize(),l[1].setComponents(m+d,T+x,S+C,O+N).normalize(),l[2].setComponents(m+h,T+_,S+I,O+V).normalize(),l[3].setComponents(m-h,T-_,S-I,O-V).normalize(),r)l[4].setComponents(p,v,M,w).normalize(),l[5].setComponents(m-p,T-v,S-M,O-w).normalize();else if(l[4].setComponents(m-p,T-v,S-M,O-w).normalize(),i===ua)l[5].setComponents(m+p,T+v,S+M,O+w).normalize();else if(i===Dl)l[5].setComponents(p,v,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){Qr.center.set(0,0,0);const i=yT.distanceTo(e.center);return Qr.radius=.7071067811865476+i,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Du.x=l.normal.x>0?e.max.x:e.min.x,Du.y=l.normal.y>0?e.max.y:e.min.y,Du.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Du)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class aM extends Xn{constructor(e=[],i=ts,r,l,u,d,h,p,m,x){super(e,i,r,l,u,d,h,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Il extends Xn{constructor(e,i,r,l,u,d,h,p,m){super(e,i,r,l,u,d,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nl extends Xn{constructor(e,i,r=da,l,u,d,h=In,p=In,m,x=Ha,_=1){if(x!==Ha&&x!==$r)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,l,u,d,h,p,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class ET extends Nl{constructor(e,i=da,r=ts,l,u,d=In,h=In,p,m=Ha){const x={width:e,height:e,depth:1},_=[x,x,x,x,x,x];super(e,e,i,r,l,u,d,h,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class rM extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zl extends ai{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],x=[],_=[];let v=0,T=0;C("z","y","x",-1,-1,r,i,e,d,u,0),C("z","y","x",1,-1,r,i,-e,d,u,1),C("x","z","y",1,1,e,r,i,l,d,2),C("x","z","y",1,-1,e,r,-i,l,d,3),C("x","y","z",1,-1,e,i,r,l,u,4),C("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new xn(m,3)),this.setAttribute("normal",new xn(x,3)),this.setAttribute("uv",new xn(_,2));function C(I,M,S,N,V,w,O,L,z,E,P){const b=w/z,D=O/E,U=w/2,X=O/2,B=L/2,Z=z+1,q=E+1;let W=0,$=0;const et=new J;for(let ht=0;ht<q;ht++){const Mt=ht*D-X;for(let Bt=0;Bt<Z;Bt++){const Dt=Bt*b-U;et[I]=Dt*N,et[M]=Mt*V,et[S]=B,m.push(et.x,et.y,et.z),et[I]=0,et[M]=0,et[S]=L>0?1:-1,x.push(et.x,et.y,et.z),_.push(Bt/z),_.push(1-ht/E),W+=1}}for(let ht=0;ht<E;ht++)for(let Mt=0;Mt<z;Mt++){const Bt=v+Mt+Z*ht,Dt=v+Mt+Z*(ht+1),k=v+(Mt+1)+Z*(ht+1),mt=v+(Mt+1)+Z*ht;p.push(Bt,Dt,mt),p.push(Dt,k,mt),$+=6}h.addGroup(T,$,P),T+=$,v+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Nm extends ai{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const u=[],d=[];h(l),m(r),x(),this.setAttribute("position",new xn(u,3)),this.setAttribute("normal",new xn(u.slice(),3)),this.setAttribute("uv",new xn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(N){const V=new J,w=new J,O=new J;for(let L=0;L<i.length;L+=3)T(i[L+0],V),T(i[L+1],w),T(i[L+2],O),p(V,w,O,N)}function p(N,V,w,O){const L=O+1,z=[];for(let E=0;E<=L;E++){z[E]=[];const P=N.clone().lerp(w,E/L),b=V.clone().lerp(w,E/L),D=L-E;for(let U=0;U<=D;U++)U===0&&E===L?z[E][U]=P:z[E][U]=P.clone().lerp(b,U/D)}for(let E=0;E<L;E++)for(let P=0;P<2*(L-E)-1;P++){const b=Math.floor(P/2);P%2===0?(v(z[E][b+1]),v(z[E+1][b]),v(z[E][b])):(v(z[E][b+1]),v(z[E+1][b+1]),v(z[E+1][b]))}}function m(N){const V=new J;for(let w=0;w<u.length;w+=3)V.x=u[w+0],V.y=u[w+1],V.z=u[w+2],V.normalize().multiplyScalar(N),u[w+0]=V.x,u[w+1]=V.y,u[w+2]=V.z}function x(){const N=new J;for(let V=0;V<u.length;V+=3){N.x=u[V+0],N.y=u[V+1],N.z=u[V+2];const w=M(N)/2/Math.PI+.5,O=S(N)/Math.PI+.5;d.push(w,1-O)}C(),_()}function _(){for(let N=0;N<d.length;N+=6){const V=d[N+0],w=d[N+2],O=d[N+4],L=Math.max(V,w,O),z=Math.min(V,w,O);L>.9&&z<.1&&(V<.2&&(d[N+0]+=1),w<.2&&(d[N+2]+=1),O<.2&&(d[N+4]+=1))}}function v(N){u.push(N.x,N.y,N.z)}function T(N,V){const w=N*3;V.x=e[w+0],V.y=e[w+1],V.z=e[w+2]}function C(){const N=new J,V=new J,w=new J,O=new J,L=new we,z=new we,E=new we;for(let P=0,b=0;P<u.length;P+=9,b+=6){N.set(u[P+0],u[P+1],u[P+2]),V.set(u[P+3],u[P+4],u[P+5]),w.set(u[P+6],u[P+7],u[P+8]),L.set(d[b+0],d[b+1]),z.set(d[b+2],d[b+3]),E.set(d[b+4],d[b+5]),O.copy(N).add(V).add(w).divideScalar(3);const D=M(O);I(L,b+0,N,D),I(z,b+2,V,D),I(E,b+4,w,D)}}function I(N,V,w,O){O<0&&N.x===1&&(d[V]=N.x-1),w.x===0&&w.z===0&&(d[V]=O/2/Math.PI+.5)}function M(N){return Math.atan2(N.z,-N.x)}function S(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nm(e.vertices,e.indices,e.radius,e.detail)}}class Um extends Nm{constructor(e=1,i=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,l,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Um(e.radius,e.detail)}}class Ga extends ai{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,x=p+1,_=e/h,v=i/p,T=[],C=[],I=[],M=[];for(let S=0;S<x;S++){const N=S*v-d;for(let V=0;V<m;V++){const w=V*_-u;C.push(w,-N,0),I.push(0,0,1),M.push(V/h),M.push(1-S/p)}}for(let S=0;S<p;S++)for(let N=0;N<h;N++){const V=N+m*S,w=N+m*(S+1),O=N+1+m*(S+1),L=N+1+m*S;T.push(V,w,L),T.push(w,O,L)}this.setIndex(T),this.setAttribute("position",new xn(C,3)),this.setAttribute("normal",new xn(I,3)),this.setAttribute("uv",new xn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.widthSegments,e.heightSegments)}}function go(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];if(Sx(l))l.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(Sx(l[0])){const u=[];for(let d=0,h=l.length;d<h;d++)u[d]=l[d].clone();e[i][r]=u}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Kn(o){const e={};for(let i=0;i<o.length;i++){const r=go(o[i]);for(const l in r)e[l]=r[l]}return e}function Sx(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function TT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function sM(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pe.workingColorSpace}const bT={clone:go,merge:Kn};var AT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pa extends Pl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AT,this.fragmentShader=RT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=TT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Be().setHex(l.value);break;case"v2":this.uniforms[r].value=new we().fromArray(l.value);break;case"v3":this.uniforms[r].value=new J().fromArray(l.value);break;case"v4":this.uniforms[r].value=new ln().fromArray(l.value);break;case"m3":this.uniforms[r].value=new _e().fromArray(l.value);break;case"m4":this.uniforms[r].value=new tn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class CT extends pa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fl extends Pl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jp,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wT extends Pl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DT extends Pl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Lm extends zn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=i}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class Bl extends Lm{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const ip=new tn,Mx=new J,yx=new J;class NT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dm,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera;Mx.setFromMatrixPosition(e.matrixWorld),i.position.copy(Mx),yx.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(yx),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(e,i,r,l){ip.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(ip,e.coordinateSystem,e.reversedDepth);const u=this._frameExtents,d=l?l.z/u.x:1,h=l?l.w/u.y:1,p=l?l.x/u.x:0,m=l?l.y/u.y:0;e.coordinateSystem===Dl||e.reversedDepth?i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,1,0,0,0,0,1):i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,.5,.5,0,0,0,1),i.multiply(ip)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Nu=new J,Uu=new Qe,aa=new J;class oM extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ua,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Nu,Uu,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nu,Uu,aa.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Nu,Uu,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nu,Uu,aa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new J,Ex=new we,Tx=new we;class Gn extends oM{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=jp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ph*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jp*2*Math.atan(Math.tan(Ph*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,i){return this.getViewBounds(e,Ex,Tx),i.subVectors(Tx,Ex)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ph*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Om extends oM{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=x*this.view.offsetY,p=h-x*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class UT extends NT{constructor(){super(new Om(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hl extends Lm{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.target=new zn,this.shadow=new UT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class Gl extends Lm{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const no=-90,io=1;class LT extends zn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Gn(no,io,e,i);l.layers=this.layers,this.add(l);const u=new Gn(no,io,e,i);u.layers=this.layers,this.add(u);const d=new Gn(no,io,e,i);d.layers=this.layers,this.add(d);const h=new Gn(no,io,e,i);h.layers=this.layers,this.add(h);const p=new Gn(no,io,e,i);p.layers=this.layers,this.add(p);const m=new Gn(no,io,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,p]=i;for(const m of i)this.remove(m);if(e===ua)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Dl)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,p,m,x]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),T=e.getActiveMipmapLevel(),C=e.xr.enabled;e.xr.enabled=!1;const I=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),r.texture.generateMipmaps=I,e.setRenderTarget(r,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(_,v,T),e.xr.enabled=C,r.texture.needsPMREMUpdate=!0}}class OT extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Bm=class Bm{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const u=this.elements;return u[0]=e,u[2]=i,u[1]=r,u[3]=l,this}};Bm.prototype.isMatrix2=!0;let bx=Bm;function Ax(o,e,i,r){const l=PT(r);switch(i){case KS:return o*e;case JS:return o*e/l.components*l.byteLength;case Em:return o*e/l.components*l.byteLength;case es:return o*e*2/l.components*l.byteLength;case Tm:return o*e*2/l.components*l.byteLength;case QS:return o*e*3/l.components*l.byteLength;case Vi:return o*e*4/l.components*l.byteLength;case bm:return o*e*4/l.components*l.byteLength;case zu:case Fu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Bu:case Hu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case yp:case Tp:return Math.max(o,16)*Math.max(e,8)/4;case Mp:case Ep:return Math.max(o,8)*Math.max(e,8)/2;case bp:case Ap:case Cp:case wp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Rp:case Xu:case Dp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Np:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Up:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Lp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Op:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Pp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Ip:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case zp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Fp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Bp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Hp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Gp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Vp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Xp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case kp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case qp:case Wp:case Yp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Zp:case Kp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case ku:case Qp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function PT(o){switch(o){case _i:case qS:return{byteLength:1,components:1};case Cl:case WS:case ha:return{byteLength:2,components:1};case Mm:case ym:return{byteLength:2,components:4};case da:case Sm:case ca:return{byteLength:4,components:1};case YS:case ZS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xm}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xm);function lM(){let o=null,e=!1,i=null,r=null;function l(u,d){r=o.requestAnimationFrame(l),i(u,d)}return{start:function(){e!==!0&&i!==null&&o!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function IT(o){const e=new WeakMap;function i(h,p){const m=h.array,x=h.usage,_=m.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,m,x),h.onUploadCallback();let T;if(m instanceof Float32Array)T=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)T=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?T=o.HALF_FLOAT:T=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)T=o.SHORT;else if(m instanceof Uint32Array)T=o.UNSIGNED_INT;else if(m instanceof Int32Array)T=o.INT;else if(m instanceof Int8Array)T=o.BYTE;else if(m instanceof Uint8Array)T=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)T=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:T,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,p,m){const x=p.array,_=p.updateRanges;if(o.bindBuffer(m,h),_.length===0)o.bufferSubData(m,0,x);else{_.sort((T,C)=>T.start-C.start);let v=0;for(let T=1;T<_.length;T++){const C=_[v],I=_[T];I.start<=C.start+C.count+1?C.count=Math.max(C.count,I.start+I.count-C.start):(++v,_[v]=I)}_.length=v+1;for(let T=0,C=_.length;T<C;T++){const I=_[T];o.bufferSubData(m,I.start*x.BYTES_PER_ELEMENT,x,I.start,I.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:u,update:d}}var zT=`#ifdef USE_ALPHAHASH
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
#endif`,xb=`#ifdef USE_ENVMAP
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
#endif`,Sb=`#ifdef USE_FOG
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
#endif`,xA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
}`,ye={alphahash_fragment:zT,alphahash_pars_fragment:FT,alphamap_fragment:BT,alphamap_pars_fragment:HT,alphatest_fragment:GT,alphatest_pars_fragment:VT,aomap_fragment:XT,aomap_pars_fragment:kT,batching_pars_vertex:qT,batching_vertex:WT,begin_vertex:YT,beginnormal_vertex:ZT,bsdfs:KT,iridescence_fragment:QT,bumpmap_pars_fragment:JT,clipping_planes_fragment:jT,clipping_planes_pars_fragment:$T,clipping_planes_pars_vertex:tb,clipping_planes_vertex:eb,color_fragment:nb,color_pars_fragment:ib,color_pars_vertex:ab,color_vertex:rb,common:sb,cube_uv_reflection_fragment:ob,defaultnormal_vertex:lb,displacementmap_pars_vertex:cb,displacementmap_vertex:ub,emissivemap_fragment:fb,emissivemap_pars_fragment:db,colorspace_fragment:hb,colorspace_pars_fragment:pb,envmap_fragment:mb,envmap_common_pars_fragment:gb,envmap_pars_fragment:_b,envmap_pars_vertex:vb,envmap_physical_pars_fragment:wb,envmap_vertex:xb,fog_vertex:Sb,fog_pars_vertex:Mb,fog_fragment:yb,fog_pars_fragment:Eb,gradientmap_pars_fragment:Tb,lightmap_pars_fragment:bb,lights_lambert_fragment:Ab,lights_lambert_pars_fragment:Rb,lights_pars_begin:Cb,lights_toon_fragment:Db,lights_toon_pars_fragment:Nb,lights_phong_fragment:Ub,lights_phong_pars_fragment:Lb,lights_physical_fragment:Ob,lights_physical_pars_fragment:Pb,lights_fragment_begin:Ib,lights_fragment_maps:zb,lights_fragment_end:Fb,lightprobes_pars_fragment:Bb,logdepthbuf_fragment:Hb,logdepthbuf_pars_fragment:Gb,logdepthbuf_pars_vertex:Vb,logdepthbuf_vertex:Xb,map_fragment:kb,map_pars_fragment:qb,map_particle_fragment:Wb,map_particle_pars_fragment:Yb,metalnessmap_fragment:Zb,metalnessmap_pars_fragment:Kb,morphinstance_vertex:Qb,morphcolor_vertex:Jb,morphnormal_vertex:jb,morphtarget_pars_vertex:$b,morphtarget_vertex:tA,normal_fragment_begin:eA,normal_fragment_maps:nA,normal_pars_fragment:iA,normal_pars_vertex:aA,normal_vertex:rA,normalmap_pars_fragment:sA,clearcoat_normal_fragment_begin:oA,clearcoat_normal_fragment_maps:lA,clearcoat_pars_fragment:cA,iridescence_pars_fragment:uA,opaque_fragment:fA,packing:dA,premultiplied_alpha_fragment:hA,project_vertex:pA,dithering_fragment:mA,dithering_pars_fragment:gA,roughnessmap_fragment:_A,roughnessmap_pars_fragment:vA,shadowmap_pars_fragment:xA,shadowmap_pars_vertex:SA,shadowmap_vertex:MA,shadowmask_pars_fragment:yA,skinbase_vertex:EA,skinning_pars_vertex:TA,skinning_vertex:bA,skinnormal_vertex:AA,specularmap_fragment:RA,specularmap_pars_fragment:CA,tonemapping_fragment:wA,tonemapping_pars_fragment:DA,transmission_fragment:NA,transmission_pars_fragment:UA,uv_pars_fragment:LA,uv_pars_vertex:OA,uv_vertex:PA,worldpos_vertex:IA,background_vert:zA,background_frag:FA,backgroundCube_vert:BA,backgroundCube_frag:HA,cube_vert:GA,cube_frag:VA,depth_vert:XA,depth_frag:kA,distance_vert:qA,distance_frag:WA,equirect_vert:YA,equirect_frag:ZA,linedashed_vert:KA,linedashed_frag:QA,meshbasic_vert:JA,meshbasic_frag:jA,meshlambert_vert:$A,meshlambert_frag:tR,meshmatcap_vert:eR,meshmatcap_frag:nR,meshnormal_vert:iR,meshnormal_frag:aR,meshphong_vert:rR,meshphong_frag:sR,meshphysical_vert:oR,meshphysical_frag:lR,meshtoon_vert:cR,meshtoon_frag:uR,points_vert:fR,points_frag:dR,shadow_vert:hR,shadow_frag:pR,sprite_vert:mR,sprite_frag:gR},Xt={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},oa={basic:{uniforms:Kn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Kn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Kn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Kn([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Kn([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new Be(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Kn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Kn([Xt.points,Xt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Kn([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Kn([Xt.common,Xt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Kn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Kn([Xt.sprite,Xt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:Kn([Xt.common,Xt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:Kn([Xt.lights,Xt.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};oa.physical={uniforms:Kn([oa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const Lu={r:0,b:0,g:0},_R=new tn,cM=new _e;cM.set(-1,0,0,0,1,0,0,0,1);function vR(o,e,i,r,l,u){const d=new Be(0);let h=l===!0?0:1,p,m,x=null,_=0,v=null;function T(N){let V=N.isScene===!0?N.background:null;if(V&&V.isTexture){const w=N.backgroundBlurriness>0;V=e.get(V,w)}return V}function C(N){let V=!1;const w=T(N);w===null?M(d,h):w&&w.isColor&&(M(w,1),V=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||V)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function I(N,V){const w=T(V);w&&(w.isCubeTexture||w.mapping===Qu)?(m===void 0&&(m=new yn(new zl(1,1,1),new pa({name:"BackgroundCubeMaterial",uniforms:go(oa.backgroundCube.uniforms),vertexShader:oa.backgroundCube.vertexShader,fragmentShader:oa.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(O,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=w,m.material.uniforms.backgroundBlurriness.value=V.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(_R.makeRotationFromEuler(V.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(cM),m.material.toneMapped=Pe.getTransfer(w.colorSpace)!==Ke,(x!==w||_!==w.version||v!==o.toneMapping)&&(m.material.needsUpdate=!0,x=w,_=w.version,v=o.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new yn(new Ga(2,2),new pa({name:"BackgroundMaterial",uniforms:go(oa.background.uniforms),vertexShader:oa.background.vertexShader,fragmentShader:oa.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,p.material.toneMapped=Pe.getTransfer(w.colorSpace)!==Ke,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(x!==w||_!==w.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,x=w,_=w.version,v=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function M(N,V){N.getRGB(Lu,sM(o)),i.buffers.color.setClear(Lu.r,Lu.g,Lu.b,V,u)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,V=1){d.set(N),h=V,M(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,M(d,h)},render:C,addToRenderList:I,dispose:S}}function xR(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=v(null);let u=l,d=!1;function h(D,U,X,B,Z){let q=!1;const W=_(D,B,X,U);u!==W&&(u=W,m(u.object)),q=T(D,B,X,Z),q&&C(D,B,X,Z),Z!==null&&e.update(Z,o.ELEMENT_ARRAY_BUFFER),(q||d)&&(d=!1,w(D,U,X,B),Z!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function p(){return o.createVertexArray()}function m(D){return o.bindVertexArray(D)}function x(D){return o.deleteVertexArray(D)}function _(D,U,X,B){const Z=B.wireframe===!0;let q=r[U.id];q===void 0&&(q={},r[U.id]=q);const W=D.isInstancedMesh===!0?D.id:0;let $=q[W];$===void 0&&($={},q[W]=$);let et=$[X.id];et===void 0&&(et={},$[X.id]=et);let ht=et[Z];return ht===void 0&&(ht=v(p()),et[Z]=ht),ht}function v(D){const U=[],X=[],B=[];for(let Z=0;Z<i;Z++)U[Z]=0,X[Z]=0,B[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:X,attributeDivisors:B,object:D,attributes:{},index:null}}function T(D,U,X,B){const Z=u.attributes,q=U.attributes;let W=0;const $=X.getAttributes();for(const et in $)if($[et].location>=0){const Mt=Z[et];let Bt=q[et];if(Bt===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(Bt=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(Bt=D.instanceColor)),Mt===void 0||Mt.attribute!==Bt||Bt&&Mt.data!==Bt.data)return!0;W++}return u.attributesNum!==W||u.index!==B}function C(D,U,X,B){const Z={},q=U.attributes;let W=0;const $=X.getAttributes();for(const et in $)if($[et].location>=0){let Mt=q[et];Mt===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(Mt=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(Mt=D.instanceColor));const Bt={};Bt.attribute=Mt,Mt&&Mt.data&&(Bt.data=Mt.data),Z[et]=Bt,W++}u.attributes=Z,u.attributesNum=W,u.index=B}function I(){const D=u.newAttributes;for(let U=0,X=D.length;U<X;U++)D[U]=0}function M(D){S(D,0)}function S(D,U){const X=u.newAttributes,B=u.enabledAttributes,Z=u.attributeDivisors;X[D]=1,B[D]===0&&(o.enableVertexAttribArray(D),B[D]=1),Z[D]!==U&&(o.vertexAttribDivisor(D,U),Z[D]=U)}function N(){const D=u.newAttributes,U=u.enabledAttributes;for(let X=0,B=U.length;X<B;X++)U[X]!==D[X]&&(o.disableVertexAttribArray(X),U[X]=0)}function V(D,U,X,B,Z,q,W){W===!0?o.vertexAttribIPointer(D,U,X,Z,q):o.vertexAttribPointer(D,U,X,B,Z,q)}function w(D,U,X,B){I();const Z=B.attributes,q=X.getAttributes(),W=U.defaultAttributeValues;for(const $ in q){const et=q[$];if(et.location>=0){let ht=Z[$];if(ht===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(ht=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(ht=D.instanceColor)),ht!==void 0){const Mt=ht.normalized,Bt=ht.itemSize,Dt=e.get(ht);if(Dt===void 0)continue;const k=Dt.buffer,mt=Dt.type,gt=Dt.bytesPerElement,H=mt===o.INT||mt===o.UNSIGNED_INT||ht.gpuType===Sm;if(ht.isInterleavedBufferAttribute){const at=ht.data,_t=at.stride,Ct=ht.offset;if(at.isInstancedInterleavedBuffer){for(let ot=0;ot<et.locationSize;ot++)S(et.location+ot,at.meshPerAttribute);D.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ot=0;ot<et.locationSize;ot++)M(et.location+ot);o.bindBuffer(o.ARRAY_BUFFER,k);for(let ot=0;ot<et.locationSize;ot++)V(et.location+ot,Bt/et.locationSize,mt,Mt,_t*gt,(Ct+Bt/et.locationSize*ot)*gt,H)}else{if(ht.isInstancedBufferAttribute){for(let at=0;at<et.locationSize;at++)S(et.location+at,ht.meshPerAttribute);D.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let at=0;at<et.locationSize;at++)M(et.location+at);o.bindBuffer(o.ARRAY_BUFFER,k);for(let at=0;at<et.locationSize;at++)V(et.location+at,Bt/et.locationSize,mt,Mt,Bt*gt,Bt/et.locationSize*at*gt,H)}}else if(W!==void 0){const Mt=W[$];if(Mt!==void 0)switch(Mt.length){case 2:o.vertexAttrib2fv(et.location,Mt);break;case 3:o.vertexAttrib3fv(et.location,Mt);break;case 4:o.vertexAttrib4fv(et.location,Mt);break;default:o.vertexAttrib1fv(et.location,Mt)}}}}N()}function O(){P();for(const D in r){const U=r[D];for(const X in U){const B=U[X];for(const Z in B){const q=B[Z];for(const W in q)x(q[W].object),delete q[W];delete B[Z]}}delete r[D]}}function L(D){if(r[D.id]===void 0)return;const U=r[D.id];for(const X in U){const B=U[X];for(const Z in B){const q=B[Z];for(const W in q)x(q[W].object),delete q[W];delete B[Z]}}delete r[D.id]}function z(D){for(const U in r){const X=r[U];for(const B in X){const Z=X[B];if(Z[D.id]===void 0)continue;const q=Z[D.id];for(const W in q)x(q[W].object),delete q[W];delete Z[D.id]}}}function E(D){for(const U in r){const X=r[U],B=D.isInstancedMesh===!0?D.id:0,Z=X[B];if(Z!==void 0){for(const q in Z){const W=Z[q];for(const $ in W)x(W[$].object),delete W[$];delete Z[q]}delete X[B],Object.keys(X).length===0&&delete r[U]}}}function P(){b(),d=!0,u!==l&&(u=l,m(u.object))}function b(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:P,resetDefaultState:b,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfObject:E,releaseStatesOfProgram:z,initAttributes:I,enableAttribute:M,disableUnusedAttributes:N}}function SR(o,e,i){let r;function l(p){r=p}function u(p,m){o.drawArrays(r,p,m),i.update(m,r,1)}function d(p,m,x){x!==0&&(o.drawArraysInstanced(r,p,m,x),i.update(m,r,x))}function h(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,x);let v=0;for(let T=0;T<x;T++)v+=m[T];i.update(v,r,1)}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function MR(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Vi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const E=z===ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==_i&&z!==ca&&!E&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const x=p(m);x!==m&&(de("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&de("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const T=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),V=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=o.getParameter(o.MAX_SAMPLES),L=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:T,maxVertexTextures:C,maxTextureSize:I,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:N,maxVaryings:V,maxFragmentUniforms:w,maxSamples:O,samples:L}}function yR(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new yr,h=new _e,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const T=_.length!==0||v||r!==0||l;return l=v,r=_.length,T},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,v){i=x(_,v,0)},this.setState=function(_,v,T){const C=_.clippingPlanes,I=_.clipIntersection,M=_.clipShadows,S=o.get(_);if(!l||C===null||C.length===0||u&&!M)u?x(null):m();else{const N=u?0:r,V=N*4;let w=S.clippingState||null;p.value=w,w=x(C,v,V,T);for(let O=0;O!==V;++O)w[O]=i[O];S.clippingState=w,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,v,T,C){const I=_!==null?_.length:0;let M=null;if(I!==0){if(M=p.value,C!==!0||M===null){const S=T+I*4,N=v.matrixWorldInverse;h.getNormalMatrix(N),(M===null||M.length<S)&&(M=new Float32Array(S));for(let V=0,w=T;V!==I;++V,w+=4)d.copy(_[V]).applyMatrix4(N,h),d.normal.toArray(M,w),M[w+3]=d.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=I,e.numIntersection=0,M}}const so=4,ER=6,TR=20,bR=256,Ml=new Om,Rx=new Be;let ap=null,rp=0,sp=0,op=!1;const AR=new J,Jr=new J;class Cx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=AR}=u;ap=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),sp=this._renderer.getActiveMipmapLevel(),op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ap,rp,sp),this._renderer.xr.enabled=op,e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ts||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ap=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),sp=this._renderer.getActiveMipmapLevel(),op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:ha,format:Vi,colorSpace:qu,depthBuffer:!1},l=wx(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wx(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=RR(u)),this._blurMaterial=wR(u,e,i),this._ggxMaterial=CR(u,e,i)}return l}_compileMaterial(e){const i=new yn(new ai,e);this._renderer.compile(i,Ml)}_sceneToCubeUV(e,i,r,l,u){const p=new Gn(90,1,i,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,T=_.toneMapping;_.getClearColor(Rx),_.toneMapping=fa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yn(new zl,new is({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const I=this._backgroundBox,M=I.material;let S=!1;const N=e.background;N?N.isColor&&(M.color.copy(N),e.background=null,S=!0):(M.color.copy(Rx),S=!0);for(let V=0;V<6;V++){const w=V%3;w===0?(p.up.set(0,m[V],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+x[V],u.y,u.z)):w===1?(p.up.set(0,0,m[V]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+x[V],u.z)):(p.up.set(0,m[V],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+x[V]));const O=this._cubeSize;ao(l,w*O,V>2?O:0,O,O),_.setRenderTarget(l),S&&_.render(I,p),_.render(e,p)}_.toneMapping=T,_.autoClear=v,e.background=N}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ts||e.mapping===mo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dx());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=e;const p=this._cubeSize;ao(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,Ml)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),_=Math.sqrt(m*m-x*x),v=m*1.25,T=_*v,{_lodMax:C}=this,I=this._sizeLods[r],M=3*I*(r>C-so?r-C+so:0),S=4*(this._cubeSize-I);p.envMap.value=e.texture,p.roughness.value=T,p.mipInt.value=C-i,ao(u,M,S,3*I,2*I),l.setRenderTarget(u),l.render(h,Ml),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=C-r,ao(e,M,S,3*I,2*I),l.setRenderTarget(e),l.render(h,Ml)}_blur(e,i,r,l){const u=this._pingPongRenderTarget,d=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(e,u,i,r,d),this._blurPass(u,e,r,r,d)}_blurPass(e,i,r,l,u){const d=this._renderer,h=this._blurMaterial,p=this._lodMeshes[l];p.material=h;const m=h.uniforms;m.envMap.value=e.texture,m.sigma.value=u,m.mipInt.value=this._lodMax-r;const x=this._sizeLods[l],_=3*x*(l>this._lodMax-so?l-this._lodMax+so:0),v=4*(this._cubeSize-x);ao(i,_,v,3*x,2*x),d.setRenderTarget(i),d.render(p,Ml)}}function RR(o){const e=[],i=[];let r=o;const l=o-so+1+ER;for(let u=0;u<l;u++){const d=Math.pow(2,r);e.push(d);const h=1/(d-2),p=-h,m=1+h,x=[p,p,m,p,m,m,p,p,m,m,p,m],_=6,v=6,T=3,C=new Float32Array(T*v*_),I=new Float32Array(T*v*_);for(let S=0;S<_;S++){const N=S%3*2/3-1,V=S>2?0:-1,w=[N,V,0,N+2/3,V,0,N+2/3,V+1,0,N,V,0,N+2/3,V+1,0,N,V+1,0];C.set(w,T*v*S);for(let O=0;O<v;O++){const L=x[O*2]*2-1,z=x[O*2+1]*2-1;S===0?Jr.set(1,z,L):S===1?Jr.set(-L,1,-z):S===2?Jr.set(-L,z,1):S===3?Jr.set(-1,z,-L):S===4?Jr.set(-L,-1,z):Jr.set(L,z,-1),Jr.toArray(I,(S*v+O)*T)}}const M=new ai;M.setAttribute("position",new Ba(C,T)),M.setAttribute("outputDirection",new Ba(I,T)),i.push(new yn(M,null)),r>so&&r--}return{lodMeshes:i,sizeLods:e}}function wx(o,e,i){const r=new Xi(o,e,i);return r.texture.mapping=Qu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ao(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function CR(o,e,i){return new pa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:za,depthTest:!1,depthWrite:!1})}function wR(o,e,i){return new pa({name:"SphericalGaussianBlur",defines:{SAMPLES:TR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:za,depthTest:!1,depthWrite:!1})}function Dx(){return new pa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:za,depthTest:!1,depthWrite:!1})}function Nx(){return new pa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function Ju(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class uM extends Xi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new aM(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new zl(5,5,5),u=new pa({name:"CubemapFromEquirect",uniforms:go(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ii,blending:za});u.uniforms.tEquirect.value=i;const d=new yn(l,u),h=i.minFilter;return i.minFilter===jr&&(i.minFilter=Vn),new LT(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}function DR(o){let e=new WeakMap,i=new WeakMap,r=null;function l(v,T=!1){return v==null?null:T?d(v):u(v)}function u(v){if(v&&v.isTexture){const T=v.mapping;if(T===Nh||T===Uh)if(e.has(v)){const C=e.get(v).texture;return h(C,v.mapping)}else{const C=v.image;if(C&&C.height>0){const I=new uM(C.height);return I.fromEquirectangularTexture(o,v),e.set(v,I),v.addEventListener("dispose",m),h(I.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const T=v.mapping,C=T===Nh||T===Uh,I=T===ts||T===mo;if(C||I){let M=i.get(v);const S=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return r===null&&(r=new Cx(o)),M=C?r.fromEquirectangular(v,M):r.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),M.texture;if(M!==void 0)return M.texture;{const N=v.image;return C&&N&&N.height>0||I&&N&&p(N)?(r===null&&(r=new Cx(o)),M=C?r.fromEquirectangular(v):r.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),v.addEventListener("dispose",x),M.texture):null}}}return v}function h(v,T){return T===Nh?v.mapping=ts:T===Uh&&(v.mapping=mo),v}function p(v){let T=0;const C=6;for(let I=0;I<C;I++)v[I]!==void 0&&T++;return T===C}function m(v){const T=v.target;T.removeEventListener("dispose",m);const C=e.get(T);C!==void 0&&(e.delete(T),C.dispose())}function x(v){const T=v.target;T.removeEventListener("dispose",x);const C=i.get(T);C!==void 0&&(i.delete(T),C.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:_}}function NR(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&oo("WebGLRenderer: "+r+" extension not supported."),l}}}function UR(o,e,i,r){const l={},u=new WeakMap;function d(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const C in v.attributes)e.remove(v.attributes[C]);v.removeEventListener("dispose",d),delete l[v.id];const T=u.get(v);T&&(e.remove(T),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function p(_){const v=_.attributes;for(const T in v)e.update(v[T],o.ARRAY_BUFFER)}function m(_){const v=[],T=_.index,C=_.attributes.position;let I=0;if(C===void 0)return;if(T!==null){const N=T.array;I=T.version;for(let V=0,w=N.length;V<w;V+=3){const O=N[V+0],L=N[V+1],z=N[V+2];v.push(O,L,L,z,z,O)}}else{const N=C.array;I=C.version;for(let V=0,w=N.length/3-1;V<w;V+=3){const O=V+0,L=V+1,z=V+2;v.push(O,L,L,z,z,O)}}const M=new(C.count>=65535?iM:nM)(v,1);M.version=I;const S=u.get(_);S&&e.remove(S),u.set(_,M)}function x(_){const v=u.get(_);if(v){const T=_.index;T!==null&&v.version<T.version&&m(_)}else m(_);return u.get(_)}return{get:h,update:p,getWireframeAttribute:x}}function LR(o,e,i){let r;function l(_){r=_}let u,d;function h(_){u=_.type,d=_.bytesPerElement}function p(_,v){o.drawElements(r,v,u,_*d),i.update(v,r,1)}function m(_,v,T){T!==0&&(o.drawElementsInstanced(r,v,u,_*d,T),i.update(v,r,T))}function x(_,v,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,u,_,0,T);let I=0;for(let M=0;M<T;M++)I+=v[M];i.update(I,r,1)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=x}function OR(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:Ge("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function PR(o,e,i){const r=new WeakMap,l=new ln;function u(d,h,p){const m=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=x!==void 0?x.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let b=function(){E.dispose(),r.delete(h),h.removeEventListener("dispose",b)};var T=b;v!==void 0&&v.texture.dispose();const C=h.morphAttributes.position!==void 0,I=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],V=h.morphAttributes.color||[];let w=0;C===!0&&(w=1),I===!0&&(w=2),M===!0&&(w=3);let O=h.attributes.position.count*w,L=1;O>e.maxTextureSize&&(L=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const z=new Float32Array(O*L*4*_),E=new $S(z,O,L,_);E.type=ca,E.needsUpdate=!0;const P=w*4;for(let D=0;D<_;D++){const U=S[D],X=N[D],B=V[D],Z=O*L*4*D;for(let q=0;q<U.count;q++){const W=q*P;C===!0&&(l.fromBufferAttribute(U,q),z[Z+W+0]=l.x,z[Z+W+1]=l.y,z[Z+W+2]=l.z,z[Z+W+3]=0),I===!0&&(l.fromBufferAttribute(X,q),z[Z+W+4]=l.x,z[Z+W+5]=l.y,z[Z+W+6]=l.z,z[Z+W+7]=0),M===!0&&(l.fromBufferAttribute(B,q),z[Z+W+8]=l.x,z[Z+W+9]=l.y,z[Z+W+10]=l.z,z[Z+W+11]=B.itemSize===4?l.w:1)}}v={count:_,texture:E,size:new we(O,L)},r.set(h,v),h.addEventListener("dispose",b)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let C=0;for(let M=0;M<m.length;M++)C+=m[M];const I=h.morphTargetsRelative?1:1-C;p.getUniforms().setValue(o,"morphTargetBaseInfluence",I),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:u}}function IR(o,e,i,r,l){let u=new WeakMap;function d(m){const x=l.render.frame,_=m.geometry,v=e.get(m,_);if(u.get(v)!==x&&(e.update(v),u.set(v,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==x&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),u.set(m,x))),m.isSkinnedMesh){const T=m.skeleton;u.get(T)!==x&&(T.update(),u.set(T,x))}return v}function h(){u=new WeakMap}function p(m){const x=m.target;x.removeEventListener("dispose",p),r.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:h}}const zR={[zS]:"LINEAR_TONE_MAPPING",[FS]:"REINHARD_TONE_MAPPING",[BS]:"CINEON_TONE_MAPPING",[HS]:"ACES_FILMIC_TONE_MAPPING",[VS]:"AGX_TONE_MAPPING",[XS]:"NEUTRAL_TONE_MAPPING",[GS]:"CUSTOM_TONE_MAPPING"};function FR(o,e,i,r,l,u){const d=new Xi(e,i,{type:o,depthBuffer:l,stencilBuffer:u,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null;const m=new ai;m.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new xn([0,2,0,0,2,0],2));const x=new CT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new yn(m,x),v=new Om(-1,1,1,-1,0,1);let T=null,C=null,I=!1,M,S=null,N=[],V=!1;this.setSize=function(w,O){d.setSize(w,O),h!==null&&h.setSize(w,O),p!==null&&p.setSize(w,O);for(let L=0;L<N.length;L++){const z=N[L];z.setSize&&z.setSize(w,O)}},this.setEffects=function(w){N=w,V=N.length>0&&N[0].isRenderPass===!0;const O=d.width,L=d.height;N.length>0&&h===null&&(h=new Xi(O,L,{type:ha,depthBuffer:!1,stencilBuffer:!1}),p=new Xi(O,L,{type:ha,depthBuffer:!1,stencilBuffer:!1}));for(let z=0;z<N.length;z++){const E=N[z];E.setSize&&E.setSize(O,L)}},this.begin=function(w,O){if(I||w.toneMapping===fa&&N.length===0)return!1;if(S=O,O!==null){const L=O.width,z=O.height;(d.width!==L||d.height!==z)&&this.setSize(L,z)}return V===!1&&w.setRenderTarget(d),M=w.toneMapping,w.toneMapping=fa,!0},this.hasRenderPass=function(){return V},this.end=function(w,O){w.toneMapping=M,I=!0;let L=d,z=h;for(let E=0;E<N.length;E++){const P=N[E];P.enabled!==!1&&(P.render(w,z,L,O),P.needsSwap!==!1&&(L=z,z=z===h?p:h))}if(T!==w.outputColorSpace||C!==w.toneMapping){T=w.outputColorSpace,C=w.toneMapping,x.defines={},Pe.getTransfer(T)===Ke&&(x.defines.SRGB_TRANSFER="");const E=zR[C];E&&(x.defines[E]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=L.texture,w.setRenderTarget(S),w.render(_,v),S=null,I=!1},this.isCompositing=function(){return I},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),m.dispose(),x.dispose()}}const fM=new Xn,$p=new Nl(1,1),dM=new $S,hM=new rT,pM=new aM,Ux=[],Lx=[],Ox=new Float32Array(16),Px=new Float32Array(9),Ix=new Float32Array(4);function vo(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=Ux[l];if(u===void 0&&(u=new Float32Array(l),Ux[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function En(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Tn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function ju(o,e){let i=Lx[e];i===void 0&&(i=new Int32Array(e),Lx[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function BR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function HR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2fv(this.addr,e),Tn(i,e)}}function GR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(En(i,e))return;o.uniform3fv(this.addr,e),Tn(i,e)}}function VR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4fv(this.addr,e),Tn(i,e)}}function XR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,r))return;Ix.set(r),o.uniformMatrix2fv(this.addr,!1,Ix),Tn(i,r)}}function kR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,r))return;Px.set(r),o.uniformMatrix3fv(this.addr,!1,Px),Tn(i,r)}}function qR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,r))return;Ox.set(r),o.uniformMatrix4fv(this.addr,!1,Ox),Tn(i,r)}}function WR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function YR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2iv(this.addr,e),Tn(i,e)}}function ZR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;o.uniform3iv(this.addr,e),Tn(i,e)}}function KR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4iv(this.addr,e),Tn(i,e)}}function QR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function JR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2uiv(this.addr,e),Tn(i,e)}}function jR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;o.uniform3uiv(this.addr,e),Tn(i,e)}}function $R(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4uiv(this.addr,e),Tn(i,e)}}function t3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?($p.compareFunction=i.isReversedDepthBuffer()?Rm:Am,u=$p):u=fM,i.setTexture2D(e||u,l)}function e3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||hM,l)}function n3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||pM,l)}function i3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||dM,l)}function a3(o){switch(o){case 5126:return BR;case 35664:return HR;case 35665:return GR;case 35666:return VR;case 35674:return XR;case 35675:return kR;case 35676:return qR;case 5124:case 35670:return WR;case 35667:case 35671:return YR;case 35668:case 35672:return ZR;case 35669:case 35673:return KR;case 5125:return QR;case 36294:return JR;case 36295:return jR;case 36296:return $R;case 35678:case 36198:case 36298:case 36306:case 35682:return t3;case 35679:case 36299:case 36307:return e3;case 35680:case 36300:case 36308:case 36293:return n3;case 36289:case 36303:case 36311:case 36292:return i3}}function r3(o,e){o.uniform1fv(this.addr,e)}function s3(o,e){const i=vo(e,this.size,2);o.uniform2fv(this.addr,i)}function o3(o,e){const i=vo(e,this.size,3);o.uniform3fv(this.addr,i)}function l3(o,e){const i=vo(e,this.size,4);o.uniform4fv(this.addr,i)}function c3(o,e){const i=vo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function u3(o,e){const i=vo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function f3(o,e){const i=vo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function d3(o,e){o.uniform1iv(this.addr,e)}function h3(o,e){o.uniform2iv(this.addr,e)}function p3(o,e){o.uniform3iv(this.addr,e)}function m3(o,e){o.uniform4iv(this.addr,e)}function g3(o,e){o.uniform1uiv(this.addr,e)}function _3(o,e){o.uniform2uiv(this.addr,e)}function v3(o,e){o.uniform3uiv(this.addr,e)}function x3(o,e){o.uniform4uiv(this.addr,e)}function S3(o,e,i){const r=this.cache,l=e.length,u=ju(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=$p:d=fM;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,u[h])}function M3(o,e,i){const r=this.cache,l=e.length,u=ju(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||hM,u[d])}function y3(o,e,i){const r=this.cache,l=e.length,u=ju(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||pM,u[d])}function E3(o,e,i){const r=this.cache,l=e.length,u=ju(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||dM,u[d])}function T3(o){switch(o){case 5126:return r3;case 35664:return s3;case 35665:return o3;case 35666:return l3;case 35674:return c3;case 35675:return u3;case 35676:return f3;case 5124:case 35670:return d3;case 35667:case 35671:return h3;case 35668:case 35672:return p3;case 35669:case 35673:return m3;case 5125:return g3;case 36294:return _3;case 36295:return v3;case 36296:return x3;case 35678:case 36198:case 36298:case 36306:case 35682:return S3;case 35679:case 36299:case 36307:return M3;case 35680:case 36300:case 36308:case 36293:return y3;case 36289:case 36303:case 36311:case 36292:return E3}}class b3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=a3(i.type)}}class A3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=T3(i.type)}}class R3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const lp=/(\w+)(\])?(\[|\.)?/g;function zx(o,e){o.seq.push(e),o.map[e.id]=e}function C3(o,e,i){const r=o.name,l=r.length;for(lp.lastIndex=0;;){const u=lp.exec(r),d=lp.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){zx(i,m===void 0?new b3(h,o,e):new A3(h,o,e));break}else{let _=i.map[h];_===void 0&&(_=new R3(h),zx(i,_)),i=_}}}class Gu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=e.getActiveUniform(i,d),p=e.getUniformLocation(i,h.name);C3(h,p,this)}const l=[],u=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function Fx(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const w3=37297;let D3=0;function N3(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const Bx=new _e;function U3(o){Pe._getMatrix(Bx,Pe.workingColorSpace,o);const e=`mat3( ${Bx.elements.map(i=>i.toFixed(4))} )`;switch(Pe.getTransfer(o)){case Wu:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Hx(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+N3(o.getShaderSource(e),h)}else return u}function L3(o,e){const i=U3(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const O3={[zS]:"Linear",[FS]:"Reinhard",[BS]:"Cineon",[HS]:"ACESFilmic",[VS]:"AgX",[XS]:"Neutral",[GS]:"Custom"};function P3(o,e){const i=O3[e];return i===void 0?(de("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ou=new J;function I3(){Pe.getLuminanceCoefficients(Ou);const o=Ou.x.toFixed(4),e=Ou.y.toFixed(4),i=Ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tl).join(`
`)}function F3(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function B3(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Tl(o){return o!==""}function Gx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const H3=/^[ \t]*#include +<([\w\d./]+)>/gm;function tm(o){return o.replace(H3,V3)}const G3=new Map;function V3(o,e){let i=ye[e];if(i===void 0){const r=G3.get(e);if(r!==void 0)i=ye[r],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return tm(i)}const X3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xx(o){return o.replace(X3,k3)}function k3(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function kx(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const q3={[Iu]:"SHADOWMAP_TYPE_PCF",[El]:"SHADOWMAP_TYPE_VSM"};function W3(o){return q3[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Y3={[ts]:"ENVMAP_TYPE_CUBE",[mo]:"ENVMAP_TYPE_CUBE",[Qu]:"ENVMAP_TYPE_CUBE_UV"};function Z3(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":Y3[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const K3={[mo]:"ENVMAP_MODE_REFRACTION"};function Q3(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":K3[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const J3={[IS]:"ENVMAP_BLENDING_MULTIPLY",[I1]:"ENVMAP_BLENDING_MIX",[z1]:"ENVMAP_BLENDING_ADD"};function j3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":J3[o.combine]||"ENVMAP_BLENDING_NONE"}function $3(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function tC(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=W3(i),m=Z3(i),x=Q3(i),_=j3(i),v=$3(i),T=z3(i),C=F3(u),I=l.createProgram();let M,S,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(Tl).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(Tl).join(`
`),S.length>0&&(S+=`
`)):(M=[kx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tl).join(`
`),S=[kx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==fa?"#define TONE_MAPPING":"",i.toneMapping!==fa?ye.tonemapping_pars_fragment:"",i.toneMapping!==fa?P3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,L3("linearToOutputTexel",i.outputColorSpace),I3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Tl).join(`
`)),d=tm(d),d=Gx(d,i),d=Vx(d,i),h=tm(h),h=Gx(h,i),h=Vx(h,i),d=Xx(d),h=Xx(h),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===ix?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ix?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const V=N+M+d,w=N+S+h,O=Fx(l,l.VERTEX_SHADER,V),L=Fx(l,l.FRAGMENT_SHADER,w);l.attachShader(I,O),l.attachShader(I,L),i.index0AttributeName!==void 0?l.bindAttribLocation(I,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(I,0,"position"),l.linkProgram(I);function z(D){if(o.debug.checkShaderErrors){const U=l.getProgramInfoLog(I)||"",X=l.getShaderInfoLog(O)||"",B=l.getShaderInfoLog(L)||"",Z=U.trim(),q=X.trim(),W=B.trim();let $=!0,et=!0;if(l.getProgramParameter(I,l.LINK_STATUS)===!1)if($=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,I,O,L);else{const ht=Hx(l,O,"vertex"),Mt=Hx(l,L,"fragment");Ge("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(I,l.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Z+`
`+ht+`
`+Mt)}else Z!==""?de("WebGLProgram: Program Info Log:",Z):(q===""||W==="")&&(et=!1);et&&(D.diagnostics={runnable:$,programLog:Z,vertexShader:{log:q,prefix:M},fragmentShader:{log:W,prefix:S}})}l.deleteShader(O),l.deleteShader(L),E=new Gu(l,I),P=B3(l,I)}let E;this.getUniforms=function(){return E===void 0&&z(this),E};let P;this.getAttributes=function(){return P===void 0&&z(this),P};let b=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=l.getProgramParameter(I,w3)),b},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(I),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=D3++,this.cacheKey=e,this.usedTimes=1,this.program=I,this.vertexShader=O,this.fragmentShader=L,this}let eC=0;class nC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new iC(e),i.set(e,r)),r}}class iC{constructor(e){this.id=eC++,this.code=e,this.usedTimes=0}}function aC(o){return o===es||o===Xu||o===ku}function rC(o,e,i,r,l,u){const d=new tM,h=new nC,p=new Set,m=[],x=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(E){return p.add(E),E===0?"uv":`uv${E}`}function I(E,P,b,D,U,X){const B=D.fog,Z=U.geometry,q=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?D.environment:null,W=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,$=e.get(E.envMap||q,W),et=$&&$.mapping===Qu?$.image.height:null,ht=T[E.type];E.precision!==null&&(v=r.getMaxPrecision(E.precision),v!==E.precision&&de("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const Mt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Bt=Mt!==void 0?Mt.length:0;let Dt=0;Z.morphAttributes.position!==void 0&&(Dt=1),Z.morphAttributes.normal!==void 0&&(Dt=2),Z.morphAttributes.color!==void 0&&(Dt=3);let k,mt,gt,H;if(ht){const Le=oa[ht];k=Le.vertexShader,mt=Le.fragmentShader}else{k=E.vertexShader,mt=E.fragmentShader;const Le=h.getVertexShaderStage(E),me=h.getFragmentShaderStage(E);h.update(E,Le,me),gt=Le.id,H=me.id}const at=o.getRenderTarget(),_t=o.state.buffers.depth.getReversed(),Ct=U.isInstancedMesh===!0,ot=U.isBatchedMesh===!0,At=!!E.map,ae=!!E.matcap,re=!!$,se=!!E.aoMap,Qt=!!E.lightMap,Nt=!!E.bumpMap&&E.wireframe===!1,ne=!!E.normalMap,Me=!!E.displacementMap,ze=!!E.emissiveMap,ve=!!E.metalnessMap,he=!!E.roughnessMap,Y=E.anisotropy>0,sn=E.clearcoat>0,He=E.dispersion>0,F=E.retroreflectivity>0,y=E.iridescence>0,rt=E.sheen>0,ft=E.transmission>0,vt=Y&&!!E.anisotropyMap,wt=sn&&!!E.clearcoatMap,Ot=sn&&!!E.clearcoatNormalMap,St=sn&&!!E.clearcoatRoughnessMap,bt=y&&!!E.iridescenceMap,Lt=y&&!!E.iridescenceThicknessMap,ie=rt&&!!E.sheenColorMap,Ht=rt&&!!E.sheenRoughnessMap,Ft=!!E.specularMap,Wt=!!E.specularColorMap,le=!!E.specularIntensityMap,pe=ft&&!!E.transmissionMap,j=ft&&!!E.thicknessMap,Ut=!!E.gradientMap,Tt=!!E.alphaMap,Pt=E.alphaTest>0,qt=!!E.alphaHash,Rt=!!E.extensions;let ee=fa;E.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ee=o.toneMapping);const kt={shaderID:ht,shaderType:E.type,shaderName:E.name,vertexShader:k,fragmentShader:mt,defines:E.defines,customVertexShaderID:gt,customFragmentShaderID:H,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:ot,batchingColor:ot&&U._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&U.instanceColor!==null,instancingMorph:Ct&&U.morphTexture!==null,outputColorSpace:at===null?o.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Pe.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:At,matcap:ae,envMap:re,envMapMode:re&&$.mapping,envMapCubeUVHeight:et,aoMap:se,lightMap:Qt,bumpMap:Nt,normalMap:ne,displacementMap:Me,emissiveMap:ze,normalMapObjectSpace:ne&&E.normalMapType===H1,normalMapTangentSpace:ne&&E.normalMapType===Jp,packedNormalMap:ne&&E.normalMapType===Jp&&aC(E.normalMap.format),metalnessMap:ve,roughnessMap:he,anisotropy:Y,anisotropyMap:vt,clearcoat:sn,clearcoatMap:wt,clearcoatNormalMap:Ot,clearcoatRoughnessMap:St,dispersion:He,retroreflection:F,iridescence:y,iridescenceMap:bt,iridescenceThicknessMap:Lt,sheen:rt,sheenColorMap:ie,sheenRoughnessMap:Ht,specularMap:Ft,specularColorMap:Wt,specularIntensityMap:le,transmission:ft,transmissionMap:pe,thicknessMap:j,gradientMap:Ut,opaque:E.transparent===!1&&E.blending===bl&&E.alphaToCoverage===!1,alphaMap:Tt,alphaTest:Pt,alphaHash:qt,combine:E.combine,mapUv:At&&C(E.map.channel),aoMapUv:se&&C(E.aoMap.channel),lightMapUv:Qt&&C(E.lightMap.channel),bumpMapUv:Nt&&C(E.bumpMap.channel),normalMapUv:ne&&C(E.normalMap.channel),displacementMapUv:Me&&C(E.displacementMap.channel),emissiveMapUv:ze&&C(E.emissiveMap.channel),metalnessMapUv:ve&&C(E.metalnessMap.channel),roughnessMapUv:he&&C(E.roughnessMap.channel),anisotropyMapUv:vt&&C(E.anisotropyMap.channel),clearcoatMapUv:wt&&C(E.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&C(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&C(E.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&C(E.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&C(E.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&C(E.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&C(E.sheenRoughnessMap.channel),specularMapUv:Ft&&C(E.specularMap.channel),specularColorMapUv:Wt&&C(E.specularColorMap.channel),specularIntensityMapUv:le&&C(E.specularIntensityMap.channel),transmissionMapUv:pe&&C(E.transmissionMap.channel),thicknessMapUv:j&&C(E.thicknessMap.channel),alphaMapUv:Tt&&C(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ne||Y),vertexNormals:!!Z.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Z.attributes.uv&&(At||Tt),fog:!!B,useFog:E.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Z.attributes.normal===void 0&&ne===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:_t,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:Dt,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&b.length>0,shadowMapType:o.shadowMap.type,toneMapping:ee,decodeVideoTexture:At&&E.map.isVideoTexture===!0&&Pe.getTransfer(E.map.colorSpace)===Ke,decodeVideoTextureEmissive:ze&&E.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(E.emissiveMap.colorSpace)===Ke,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Pa,flipSided:E.side===ii,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Rt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&E.extensions.multiDraw===!0||ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return kt.vertexUv1s=p.has(1),kt.vertexUv2s=p.has(2),kt.vertexUv3s=p.has(3),p.clear(),kt}function M(E){const P=[];if(E.shaderID?P.push(E.shaderID):(P.push(E.customVertexShaderID),P.push(E.customFragmentShaderID)),E.defines!==void 0)for(const b in E.defines)P.push(b),P.push(E.defines[b]);return E.isRawShaderMaterial===!1&&(S(P,E),N(P,E),P.push(o.outputColorSpace)),P.push(E.customProgramCacheKey),P.join()}function S(E,P){E.push(P.precision),E.push(P.outputColorSpace),E.push(P.envMapMode),E.push(P.envMapCubeUVHeight),E.push(P.mapUv),E.push(P.alphaMapUv),E.push(P.lightMapUv),E.push(P.aoMapUv),E.push(P.bumpMapUv),E.push(P.normalMapUv),E.push(P.displacementMapUv),E.push(P.emissiveMapUv),E.push(P.metalnessMapUv),E.push(P.roughnessMapUv),E.push(P.anisotropyMapUv),E.push(P.clearcoatMapUv),E.push(P.clearcoatNormalMapUv),E.push(P.clearcoatRoughnessMapUv),E.push(P.iridescenceMapUv),E.push(P.iridescenceThicknessMapUv),E.push(P.sheenColorMapUv),E.push(P.sheenRoughnessMapUv),E.push(P.specularMapUv),E.push(P.specularColorMapUv),E.push(P.specularIntensityMapUv),E.push(P.transmissionMapUv),E.push(P.thicknessMapUv),E.push(P.combine),E.push(P.fogExp2),E.push(P.sizeAttenuation),E.push(P.morphTargetsCount),E.push(P.morphAttributeCount),E.push(P.numSunLights),E.push(P.numDirLights),E.push(P.numPointLights),E.push(P.numSpotLights),E.push(P.numSpotLightMaps),E.push(P.numHemiLights),E.push(P.numRectAreaLights),E.push(P.numSunLightShadows),E.push(P.numDirLightShadows),E.push(P.numPointLightShadows),E.push(P.numSpotLightShadows),E.push(P.numSpotLightShadowsWithMaps),E.push(P.numLightProbes),E.push(P.shadowMapType),E.push(P.toneMapping),E.push(P.numClippingPlanes),E.push(P.numClipIntersection),E.push(P.depthPacking)}function N(E,P){d.disableAll(),P.instancing&&d.enable(0),P.instancingColor&&d.enable(1),P.instancingMorph&&d.enable(2),P.matcap&&d.enable(3),P.envMap&&d.enable(4),P.normalMapObjectSpace&&d.enable(5),P.normalMapTangentSpace&&d.enable(6),P.clearcoat&&d.enable(7),P.iridescence&&d.enable(8),P.alphaTest&&d.enable(9),P.vertexColors&&d.enable(10),P.vertexAlphas&&d.enable(11),P.vertexUv1s&&d.enable(12),P.vertexUv2s&&d.enable(13),P.vertexUv3s&&d.enable(14),P.vertexTangents&&d.enable(15),P.anisotropy&&d.enable(16),P.alphaHash&&d.enable(17),P.batching&&d.enable(18),P.dispersion&&d.enable(19),P.retroreflection&&d.enable(24),P.batchingColor&&d.enable(20),P.gradientMap&&d.enable(21),P.packedNormalMap&&d.enable(22),P.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),P.fog&&d.enable(0),P.useFog&&d.enable(1),P.flatShading&&d.enable(2),P.logarithmicDepthBuffer&&d.enable(3),P.reversedDepthBuffer&&d.enable(4),P.skinning&&d.enable(5),P.morphTargets&&d.enable(6),P.morphNormals&&d.enable(7),P.morphColors&&d.enable(8),P.premultipliedAlpha&&d.enable(9),P.shadowMapEnabled&&d.enable(10),P.doubleSided&&d.enable(11),P.flipSided&&d.enable(12),P.useDepthPacking&&d.enable(13),P.dithering&&d.enable(14),P.transmission&&d.enable(15),P.sheen&&d.enable(16),P.opaque&&d.enable(17),P.pointsUvs&&d.enable(18),P.decodeVideoTexture&&d.enable(19),P.decodeVideoTextureEmissive&&d.enable(20),P.alphaToCoverage&&d.enable(21),P.numLightProbeGrids>0&&d.enable(22),P.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function V(E){const P=T[E.type];let b;if(P){const D=oa[P];b=bT.clone(D.uniforms)}else b=E.uniforms;return b}function w(E,P){let b=x.get(P);return b!==void 0?++b.usedTimes:(b=new tC(o,P,E,l),m.push(b),x.set(P,b)),b}function O(E){if(--E.usedTimes===0){const P=m.indexOf(E);m[P]=m[m.length-1],m.pop(),x.delete(E.cacheKey),E.destroy()}}function L(E){h.remove(E)}function z(){h.dispose()}return{getParameters:I,getProgramCacheKey:M,getUniforms:V,acquireProgram:w,releaseProgram:O,releaseShaderCache:L,programs:m,dispose:z}}function sC(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,p){o.get(d)[h]=p}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function oC(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function qx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Wx(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(v){let T=0;return v.isInstancedMesh&&(T+=2),v.isSkinnedMesh&&(T+=1),T}function h(v,T,C,I,M,S){let N=o[e];return N===void 0?(N={id:v.id,object:v,geometry:T,material:C,materialVariant:d(v),groupOrder:I,renderOrder:v.renderOrder,z:M,group:S},o[e]=N):(N.id=v.id,N.object=v,N.geometry=T,N.material=C,N.materialVariant=d(v),N.groupOrder=I,N.renderOrder=v.renderOrder,N.z=M,N.group=S),e++,N}function p(v,T,C,I,M,S,N){N.reversedDepth===!0&&(M=-M);const V=h(v,T,C,I,M,S);C.transmission>0?r.push(V):C.transparent===!0?l.push(V):i.push(V)}function m(v,T,C,I,M,S){const N=h(v,T,C,I,M,S);C.transmission>0?r.unshift(N):C.transparent===!0?l.unshift(N):i.unshift(N)}function x(v,T){i.length>1&&i.sort(v||oC),r.length>1&&r.sort(T||qx),l.length>1&&l.sort(T||qx)}function _(){for(let v=e,T=o.length;v<T;v++){const C=o[v];if(C.id===null)break;C.id=null,C.object=null,C.geometry=null,C.material=null,C.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:p,unshift:m,finish:_,sort:x}}function lC(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new Wx,o.set(r,[d])):l>=u.length?(d=new Wx,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function cC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new J,color:new Be};break;case"SpotLight":i={position:new J,direction:new J,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new Be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":i={color:new Be,position:new J,halfWidth:new J,halfHeight:new J};break}return o[e.id]=i,i}}}function uC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let fC=0;function dC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function hC(o){const e=new cC,i=uC(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new J);const l=new J,u=new tn,d=new tn;function h(m){let x=0,_=0,v=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let T=0,C=0,I=0,M=0,S=0,N=0,V=0,w=0,O=0,L=0,z=0,E=0,P=0,b=0;m.sort(dC);for(let U=0,X=m.length;U<X;U++){const B=m[U],Z=B.color,q=B.intensity,W=B.distance;let $=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===es?$=B.shadow.map.texture:$=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)x+=Z.r*q,_+=Z.g*q,v+=Z.b*q;else if(B.isLightProbe){for(let et=0;et<9;et++)r.probe[et].addScaledVector(B.sh.coefficients[et],q);b++}else if(B.isSunLight){const et=e.get(B);if(et.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ht=B.shadow,Mt=i.get(B);Mt.shadowIntensity=ht.intensity,Mt.shadowBias=ht.bias,Mt.shadowNormalBias=ht.normalBias,Mt.shadowRadius=ht.radius,Mt.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),r.sunShadow[C]=Mt,r.sunShadowMap[C]=$;const Bt=ht.getViewportCount();for(let Dt=0;Dt<Bt;Dt++)r.sunShadowMatrix[I+Dt]=ht.getMatrix(Dt),r.sunShadowCascade[I+Dt]=ht._cascadeData[Dt];I+=Bt,C++}r.sun[T]=et,T++}else if(B.isDirectionalLight){const et=e.get(B);if(et.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ht=B.shadow,Mt=i.get(B);Mt.shadowIntensity=ht.intensity,Mt.shadowBias=ht.bias,Mt.shadowNormalBias=ht.normalBias,Mt.shadowRadius=ht.radius,Mt.shadowMapSize=ht.mapSize,r.directionalShadow[M]=Mt,r.directionalShadowMap[M]=$,r.directionalShadowMatrix[M]=B.shadow.matrix,O++}r.directional[M]=et,M++}else if(B.isSpotLight){const et=e.get(B);et.position.setFromMatrixPosition(B.matrixWorld),et.color.copy(Z).multiplyScalar(q),et.distance=W,et.coneCos=Math.cos(B.angle),et.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),et.decay=B.decay,r.spot[N]=et;const ht=B.shadow;if(B.map&&(r.spotLightMap[E]=B.map,E++,ht.updateMatrices(B),B.castShadow&&P++),r.spotLightMatrix[N]=ht.matrix,B.castShadow){const Mt=i.get(B);Mt.shadowIntensity=ht.intensity,Mt.shadowBias=ht.bias,Mt.shadowNormalBias=ht.normalBias,Mt.shadowRadius=ht.radius,Mt.shadowMapSize=ht.mapSize,r.spotShadow[N]=Mt,r.spotShadowMap[N]=$,z++}N++}else if(B.isRectAreaLight){const et=e.get(B);et.color.copy(Z).multiplyScalar(q),et.halfWidth.set(B.width*.5,0,0),et.halfHeight.set(0,B.height*.5,0),r.rectArea[V]=et,V++}else if(B.isPointLight){const et=e.get(B);if(et.color.copy(B.color).multiplyScalar(B.intensity),et.distance=B.distance,et.decay=B.decay,B.castShadow){const ht=B.shadow,Mt=i.get(B);Mt.shadowIntensity=ht.intensity,Mt.shadowBias=ht.bias,Mt.shadowNormalBias=ht.normalBias,Mt.shadowRadius=ht.radius,Mt.shadowMapSize=ht.mapSize,Mt.shadowCameraNear=ht.camera.near,Mt.shadowCameraFar=ht.camera.far,r.pointShadow[S]=Mt,r.pointShadowMap[S]=$,r.pointShadowMatrix[S]=B.shadow.matrix,L++}r.point[S]=et,S++}else if(B.isHemisphereLight){const et=e.get(B);et.skyColor.copy(B.color).multiplyScalar(q),et.groundColor.copy(B.groundColor).multiplyScalar(q),r.hemi[w]=et,w++}}V>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Xt.LTC_FLOAT_1,r.rectAreaLTC2=Xt.LTC_FLOAT_2):(r.rectAreaLTC1=Xt.LTC_HALF_1,r.rectAreaLTC2=Xt.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=v;const D=r.hash;(D.sunLength!==T||D.directionalLength!==M||D.pointLength!==S||D.spotLength!==N||D.rectAreaLength!==V||D.hemiLength!==w||D.numSunShadows!==C||D.numDirectionalShadows!==O||D.numPointShadows!==L||D.numSpotShadows!==z||D.numSpotMaps!==E||D.numLightProbes!==b)&&(r.sun.length=T,r.directional.length=M,r.spot.length=N,r.rectArea.length=V,r.point.length=S,r.hemi.length=w,r.sunShadow.length=C,r.sunShadowMap.length=C,r.sunShadowMatrix.length=I,r.sunShadowCascade.length=I,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.directionalShadowMatrix.length=O,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=z,r.spotShadowMap.length=z,r.spotLightMatrix.length=z+E-P,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=b,D.sunLength=T,D.directionalLength=M,D.pointLength=S,D.spotLength=N,D.rectAreaLength=V,D.hemiLength=w,D.numSunShadows=C,D.numDirectionalShadows=O,D.numPointShadows=L,D.numSpotShadows=z,D.numSpotMaps=E,D.numLightProbes=b,r.version=fC++)}function p(m,x){let _=0,v=0,T=0,C=0,I=0,M=0;const S=x.matrixWorldInverse;for(let N=0,V=m.length;N<V;N++){const w=m[N];if(w.isSunLight){const O=r.sun[_];O.direction.setFromMatrixPosition(w.matrixWorld),O.direction.transformDirection(S),_++}else if(w.isDirectionalLight){const O=r.directional[v];O.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(S),v++}else if(w.isSpotLight){const O=r.spot[C];O.position.setFromMatrixPosition(w.matrixWorld),O.position.applyMatrix4(S),O.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(S),C++}else if(w.isRectAreaLight){const O=r.rectArea[I];O.position.setFromMatrixPosition(w.matrixWorld),O.position.applyMatrix4(S),d.identity(),u.copy(w.matrixWorld),u.premultiply(S),d.extractRotation(u),O.halfWidth.set(w.width*.5,0,0),O.halfHeight.set(0,w.height*.5,0),O.halfWidth.applyMatrix4(d),O.halfHeight.applyMatrix4(d),I++}else if(w.isPointLight){const O=r.point[T];O.position.setFromMatrixPosition(w.matrixWorld),O.position.applyMatrix4(S),T++}else if(w.isHemisphereLight){const O=r.hemi[M];O.direction.setFromMatrixPosition(w.matrixWorld),O.direction.transformDirection(S),M++}}}return{setup:h,setupView:p,state:r}}function Yx(o){const e=new hC(o),i=[],r=[],l=[];function u(v){_.camera=v,i.length=0,r.length=0,l.length=0}function d(v){i.push(v)}function h(v){r.push(v)}function p(v){l.push(v)}function m(){e.setup(i)}function x(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:_,setupLights:m,setupLightsView:x,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function pC(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new Yx(o),e.set(l,[h])):u>=d.length?(h=new Yx(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const mC=`void main() {
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
}`,_C=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],vC=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Zx=new tn,yl=new J,cp=new J;function xC(o,e,i){let r=new Dm;const l=new we,u=new we,d=new ln,h=new wT,p=new DT,m={},x=i.maxTextureSize,_={[Ni]:ii,[ii]:Ni,[Pa]:Pa},v=new pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:mC,fragmentShader:gC}),T=v.clone();T.defines.HORIZONTAL_PASS=1;const C=new ai;C.setAttribute("position",new Ba(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const I=new yn(C,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iu;let S=this.type;this.render=function(L,z,E){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;this.type===_1&&(de("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Iu);const P=o.getRenderTarget(),b=o.getActiveCubeFace(),D=o.getActiveMipmapLevel(),U=o.state;U.setBlending(za),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const X=S!==this.type;X&&z.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(Z=>Z.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,Z=L.length;B<Z;B++){const q=L[B],W=q.shadow;if(W===void 0){de("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const $=W.getFrameExtents();l.multiply($),u.copy(W.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/$.x),l.x=u.x*$.x,W.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/$.y),l.y=u.y*$.y,W.mapSize.y=u.y));const et=o.state.buffers.depth.getReversed();if(W.camera._reversedDepth=et,W.map===null||X===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===El){if(q.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Xi(l.x,l.y,{format:es,type:ha,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new Nl(l.x,l.y,ca),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=Ha,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=In,W.map.depthTexture.magFilter=In}else q.isPointLight?(W.map=new uM(l.x),W.map.depthTexture=new ET(l.x,da)):(W.map=new Xi(l.x,l.y),W.map.depthTexture=new Nl(l.x,l.y,da)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=Ha,this.type===Iu?(W.map.depthTexture.compareFunction=et?Rm:Am,W.map.depthTexture.minFilter=Vn,W.map.depthTexture.magFilter=Vn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=In,W.map.depthTexture.magFilter=In);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==l.x||W.map.height!==l.y)&&W.map.setSize(l.x,l.y);const ht=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();q.isPointLight!==!0&&W.updateMatrices(q,E);for(let Mt=0;Mt<ht;Mt++){const Bt=W.getCamera(Mt);if(q.isPointLight){const Dt=W.camera,k=W.matrix,mt=q.distance||Dt.far;mt!==Dt.far&&(Dt.far=mt,Dt.updateProjectionMatrix()),yl.setFromMatrixPosition(q.matrixWorld),Dt.position.copy(yl),cp.copy(Dt.position),cp.add(_C[Mt]),Dt.up.copy(vC[Mt]),Dt.lookAt(cp),Dt.updateMatrixWorld(),k.makeTranslation(-yl.x,-yl.y,-yl.z),Zx.multiplyMatrices(Dt.projectionMatrix,Dt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Zx,Dt.coordinateSystem,Dt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)o.setRenderTarget(W.map,Mt),o.clear();else{Mt===0&&(o.setRenderTarget(W.map),o.clear());const Dt=W.getViewport(Mt);d.set(u.x*Dt.x,u.y*Dt.y,u.x*Dt.z,u.y*Dt.w),U.viewport(d)}r=W.getFrustum(Mt),w(z,E,Bt,q,this.type)}W.isPointLightShadow!==!0&&this.type===El&&N(W,E),W.needsUpdate=!1}S=this.type,M.needsUpdate=!1,o.setRenderTarget(P,b,D)};function N(L,z){const E=e.update(I);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,T.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,T.needsUpdate=!0),L.mapPass===null?L.mapPass=new Xi(l.x,l.y,{format:es,type:ha}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value.set(L.map.width,L.map.height),v.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(z,null,E,v,I,null),T.uniforms.shadow_pass.value=L.mapPass.texture,T.uniforms.resolution.value.set(L.map.width,L.map.height),T.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(z,null,E,T,I,null)}function V(L,z,E,P){let b=null;const D=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(D!==void 0)b=D;else if(b=E.isPointLight===!0?p:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const U=b.uuid,X=z.uuid;let B=m[U];B===void 0&&(B={},m[U]=B);let Z=B[X];Z===void 0&&(Z=b.clone(),B[X]=Z,z.addEventListener("dispose",O)),b=Z}if(b.visible=z.visible,b.wireframe=z.wireframe,P===El?b.side=z.shadowSide!==null?z.shadowSide:z.side:b.side=z.shadowSide!==null?z.shadowSide:_[z.side],b.alphaMap=z.alphaMap,b.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,b.map=z.map,b.clipShadows=z.clipShadows,b.clippingPlanes=z.clippingPlanes,b.clipIntersection=z.clipIntersection,b.displacementMap=z.displacementMap,b.displacementScale=z.displacementScale,b.displacementBias=z.displacementBias,b.wireframeLinewidth=z.wireframeLinewidth,b.linewidth=z.linewidth,E.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const U=o.properties.get(b);U.light=E}return b}function w(L,z,E,P,b){if(L.visible===!1)return;if(L.layers.test(z.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===El)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);const X=e.update(L),B=L.material;if(Array.isArray(B)){const Z=X.groups;for(let q=0,W=Z.length;q<W;q++){const $=Z[q],et=B[$.materialIndex];if(et&&et.visible){const ht=V(L,et,P,b);L.onBeforeShadow(o,L,z,E,X,ht,$),o.renderBufferDirect(E,null,X,ht,L,$),L.onAfterShadow(o,L,z,E,X,ht,$)}}}else if(B.visible){const Z=V(L,B,P,b);L.onBeforeShadow(o,L,z,E,X,Z,null),o.renderBufferDirect(E,null,X,Z,L,null),L.onAfterShadow(o,L,z,E,X,Z,null)}}const U=L.children;for(let X=0,B=U.length;X<B;X++)w(U[X],z,E,P,b)}function O(L){L.target.removeEventListener("dispose",O);for(const E in m){const P=m[E],b=L.target.uuid;b in P&&(P[b].dispose(),delete P[b])}}}function SC(o,e){function i(){let j=!1;const Ut=new ln;let Tt=null;const Pt=new ln(0,0,0,0);return{setMask:function(qt){Tt!==qt&&!j&&(o.colorMask(qt,qt,qt,qt),Tt=qt)},setLocked:function(qt){j=qt},setClear:function(qt,Rt,ee,kt,Le){Le===!0&&(qt*=kt,Rt*=kt,ee*=kt),Ut.set(qt,Rt,ee,kt),Pt.equals(Ut)===!1&&(o.clearColor(qt,Rt,ee,kt),Pt.copy(Ut))},reset:function(){j=!1,Tt=null,Pt.set(-1,0,0,0)}}}function r(){let j=!1,Ut=!1,Tt=null,Pt=null,qt=null;return{setReversed:function(Rt){if(Ut!==Rt){const ee=e.get("EXT_clip_control");Rt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT),Ut=Rt;const kt=qt;qt=null,this.setClear(kt)}},getReversed:function(){return Ut},setTest:function(Rt){Rt?at(o.DEPTH_TEST):_t(o.DEPTH_TEST)},setMask:function(Rt){Tt!==Rt&&!j&&(o.depthMask(Rt),Tt=Rt)},setFunc:function(Rt){if(Ut&&(Rt=j1[Rt]),Pt!==Rt){switch(Rt){case dp:o.depthFunc(o.NEVER);break;case hp:o.depthFunc(o.ALWAYS);break;case pp:o.depthFunc(o.LESS);break;case Rl:o.depthFunc(o.LEQUAL);break;case mp:o.depthFunc(o.EQUAL);break;case gp:o.depthFunc(o.GEQUAL);break;case _p:o.depthFunc(o.GREATER);break;case vp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pt=Rt}},setLocked:function(Rt){j=Rt},setClear:function(Rt){qt!==Rt&&(qt=Rt,Ut&&(Rt=1-Rt),o.clearDepth(Rt))},reset:function(){j=!1,Tt=null,Pt=null,qt=null,Ut=!1}}}function l(){let j=!1,Ut=null,Tt=null,Pt=null,qt=null,Rt=null,ee=null,kt=null,Le=null;return{setTest:function(me){j||(me?at(o.STENCIL_TEST):_t(o.STENCIL_TEST))},setMask:function(me){Ut!==me&&!j&&(o.stencilMask(me),Ut=me)},setFunc:function(me,ri,xi){(Tt!==me||Pt!==ri||qt!==xi)&&(o.stencilFunc(me,ri,xi),Tt=me,Pt=ri,qt=xi)},setOp:function(me,ri,xi){(Rt!==me||ee!==ri||kt!==xi)&&(o.stencilOp(me,ri,xi),Rt=me,ee=ri,kt=xi)},setLocked:function(me){j=me},setClear:function(me){Le!==me&&(o.clearStencil(me),Le=me)},reset:function(){j=!1,Ut=null,Tt=null,Pt=null,qt=null,Rt=null,ee=null,kt=null,Le=null}}}const u=new i,d=new r,h=new l,p=new WeakMap,m=new WeakMap;let x={},_={},v={},T=new WeakMap,C=[],I=null,M=!1,S=null,N=null,V=null,w=null,O=null,L=null,z=null,E=new Be(0,0,0),P=0,b=!1,D=null,U=null,X=null,B=null,Z=null;const q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,$=0;const et=o.getParameter(o.VERSION);et.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(et)[1]),W=$>=1):et.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),W=$>=2);let ht=null,Mt={};const Bt=o.getParameter(o.SCISSOR_BOX),Dt=o.getParameter(o.VIEWPORT),k=new ln().fromArray(Bt),mt=new ln().fromArray(Dt);function gt(j,Ut,Tt,Pt){const qt=new Uint8Array(4),Rt=o.createTexture();o.bindTexture(j,Rt),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ee=0;ee<Tt;ee++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,Pt,0,o.RGBA,o.UNSIGNED_BYTE,qt):o.texImage2D(Ut+ee,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,qt);return Rt}const H={};H[o.TEXTURE_2D]=gt(o.TEXTURE_2D,o.TEXTURE_2D,1),H[o.TEXTURE_CUBE_MAP]=gt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[o.TEXTURE_2D_ARRAY]=gt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),H[o.TEXTURE_3D]=gt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),at(o.DEPTH_TEST),d.setFunc(Rl),Nt(!1),ne($v),at(o.CULL_FACE),se(za);function at(j){x[j]!==!0&&(o.enable(j),x[j]=!0)}function _t(j){x[j]!==!1&&(o.disable(j),x[j]=!1)}function Ct(j,Ut){return v[j]!==Ut?(o.bindFramebuffer(j,Ut),v[j]=Ut,j===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ut),j===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function ot(j,Ut){let Tt=C,Pt=!1;if(j){Tt=T.get(Ut),Tt===void 0&&(Tt=[],T.set(Ut,Tt));const qt=j.textures;if(Tt.length!==qt.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let Rt=0,ee=qt.length;Rt<ee;Rt++)Tt[Rt]=o.COLOR_ATTACHMENT0+Rt;Tt.length=qt.length,Pt=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,Pt=!0);Pt&&o.drawBuffers(Tt)}function At(j){return I!==j?(o.useProgram(j),I=j,!0):!1}const ae={[ro]:o.FUNC_ADD,[x1]:o.FUNC_SUBTRACT,[S1]:o.FUNC_REVERSE_SUBTRACT};ae[M1]=o.MIN,ae[y1]=o.MAX;const re={[E1]:o.ZERO,[T1]:o.ONE,[b1]:o.SRC_COLOR,[OS]:o.SRC_ALPHA,[N1]:o.SRC_ALPHA_SATURATE,[w1]:o.DST_COLOR,[R1]:o.DST_ALPHA,[A1]:o.ONE_MINUS_SRC_COLOR,[PS]:o.ONE_MINUS_SRC_ALPHA,[D1]:o.ONE_MINUS_DST_COLOR,[C1]:o.ONE_MINUS_DST_ALPHA,[U1]:o.CONSTANT_COLOR,[L1]:o.ONE_MINUS_CONSTANT_COLOR,[O1]:o.CONSTANT_ALPHA,[P1]:o.ONE_MINUS_CONSTANT_ALPHA};function se(j,Ut,Tt,Pt,qt,Rt,ee,kt,Le,me){if(j===za){M===!0&&(_t(o.BLEND),M=!1);return}if(M===!1&&(at(o.BLEND),M=!0),j!==v1){if(j!==S||me!==b){if((N!==ro||O!==ro)&&(o.blendEquation(o.FUNC_ADD),N=ro,O=ro),me)switch(j){case bl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case tx:o.blendFunc(o.ONE,o.ONE);break;case ex:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case nx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ge("WebGLState: Invalid blending: ",j);break}else switch(j){case bl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case tx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case ex:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nx:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",j);break}V=null,w=null,L=null,z=null,E.set(0,0,0),P=0,S=j,b=me}return}qt=qt||Ut,Rt=Rt||Tt,ee=ee||Pt,(Ut!==N||qt!==O)&&(o.blendEquationSeparate(ae[Ut],ae[qt]),N=Ut,O=qt),(Tt!==V||Pt!==w||Rt!==L||ee!==z)&&(o.blendFuncSeparate(re[Tt],re[Pt],re[Rt],re[ee]),V=Tt,w=Pt,L=Rt,z=ee),(kt.equals(E)===!1||Le!==P)&&(o.blendColor(kt.r,kt.g,kt.b,Le),E.copy(kt),P=Le),S=j,b=!1}function Qt(j,Ut){j.side===Pa?_t(o.CULL_FACE):at(o.CULL_FACE);let Tt=j.side===ii;Ut&&(Tt=!Tt),Nt(Tt),j.blending===bl&&j.transparent===!1?se(za):se(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),u.setMask(j.colorWrite);const Pt=j.stencilWrite;h.setTest(Pt),Pt&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),ze(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?at(o.SAMPLE_ALPHA_TO_COVERAGE):_t(o.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(j){D!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),D=j)}function ne(j){j!==m1?(at(o.CULL_FACE),j!==U&&(j===$v?o.cullFace(o.BACK):j===g1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):_t(o.CULL_FACE),U=j}function Me(j){j!==X&&(W&&o.lineWidth(j),X=j)}function ze(j,Ut,Tt){j?(at(o.POLYGON_OFFSET_FILL),(B!==Ut||Z!==Tt)&&(B=Ut,Z=Tt,d.getReversed()&&(Ut=-Ut),o.polygonOffset(Ut,Tt))):_t(o.POLYGON_OFFSET_FILL)}function ve(j){j?at(o.SCISSOR_TEST):_t(o.SCISSOR_TEST)}function he(j){j===void 0&&(j=o.TEXTURE0+q-1),ht!==j&&(o.activeTexture(j),ht=j)}function Y(j,Ut,Tt){Tt===void 0&&(ht===null?Tt=o.TEXTURE0+q-1:Tt=ht);let Pt=Mt[Tt];Pt===void 0&&(Pt={type:void 0,texture:void 0},Mt[Tt]=Pt),(Pt.type!==j||Pt.texture!==Ut)&&(ht!==Tt&&(o.activeTexture(Tt),ht=Tt),o.bindTexture(j,Ut||H[j]),Pt.type=j,Pt.texture=Ut)}function sn(){const j=Mt[ht];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function He(){try{o.compressedTexImage2D(...arguments)}catch(j){Ge("WebGLState:",j)}}function F(){try{o.compressedTexImage3D(...arguments)}catch(j){Ge("WebGLState:",j)}}function y(){try{o.texSubImage2D(...arguments)}catch(j){Ge("WebGLState:",j)}}function rt(){try{o.texSubImage3D(...arguments)}catch(j){Ge("WebGLState:",j)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(j){Ge("WebGLState:",j)}}function vt(){try{o.compressedTexSubImage3D(...arguments)}catch(j){Ge("WebGLState:",j)}}function wt(){try{o.texStorage2D(...arguments)}catch(j){Ge("WebGLState:",j)}}function Ot(){try{o.texStorage3D(...arguments)}catch(j){Ge("WebGLState:",j)}}function St(){try{o.texImage2D(...arguments)}catch(j){Ge("WebGLState:",j)}}function bt(){try{o.texImage3D(...arguments)}catch(j){Ge("WebGLState:",j)}}function Lt(j){return _[j]!==void 0?_[j]:o.getParameter(j)}function ie(j,Ut){_[j]!==Ut&&(o.pixelStorei(j,Ut),_[j]=Ut)}function Ht(j){k.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),k.copy(j))}function Ft(j){mt.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),mt.copy(j))}function Wt(j,Ut){let Tt=m.get(Ut);Tt===void 0&&(Tt=new WeakMap,m.set(Ut,Tt));let Pt=Tt.get(j);Pt===void 0&&(Pt=o.getUniformBlockIndex(Ut,j.name),Tt.set(j,Pt))}function le(j,Ut){const Pt=m.get(Ut).get(j);p.get(Ut)!==Pt&&(o.uniformBlockBinding(Ut,Pt,j.__bindingPointIndex),p.set(Ut,Pt))}function pe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),x={},_={},ht=null,Mt={},v={},T=new WeakMap,C=[],I=null,M=!1,S=null,N=null,V=null,w=null,O=null,L=null,z=null,E=new Be(0,0,0),P=0,b=!1,D=null,U=null,X=null,B=null,Z=null,k.set(0,0,o.canvas.width,o.canvas.height),mt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:at,disable:_t,bindFramebuffer:Ct,drawBuffers:ot,useProgram:At,setBlending:se,setMaterial:Qt,setFlipSided:Nt,setCullFace:ne,setLineWidth:Me,setPolygonOffset:ze,setScissorTest:ve,activeTexture:he,bindTexture:Y,unbindTexture:sn,compressedTexImage2D:He,compressedTexImage3D:F,texImage2D:St,texImage3D:bt,pixelStorei:ie,getParameter:Lt,updateUBOMapping:Wt,uniformBlockBinding:le,texStorage2D:wt,texStorage3D:Ot,texSubImage2D:y,texSubImage3D:rt,compressedTexSubImage2D:ft,compressedTexSubImage3D:vt,scissor:Ht,viewport:Ft,reset:pe}}function MC(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new we,x=new WeakMap,_=new Set;let v;const T=new WeakMap;let C=!1;try{C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(F,y){return C?new OffscreenCanvas(F,y):Yu("canvas")}function M(F,y,rt){let ft=1;const vt=He(F);if((vt.width>rt||vt.height>rt)&&(ft=rt/Math.max(vt.width,vt.height)),ft<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const wt=Math.floor(ft*vt.width),Ot=Math.floor(ft*vt.height);v===void 0&&(v=I(wt,Ot));const St=y?I(wt,Ot):v;return St.width=wt,St.height=Ot,St.getContext("2d").drawImage(F,0,0,wt,Ot),de("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+wt+"x"+Ot+")."),St}else return"data"in F&&de("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),F;return F}function S(F){return F.generateMipmaps}function N(F){o.generateMipmap(F)}function V(F){return F.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?o.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function w(F,y,rt,ft,vt,wt=!1){if(F!==null){if(o[F]!==void 0)return o[F];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Ot;ft&&(Ot=e.get("EXT_texture_norm16"),Ot||de("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let St=y;if(y===o.RED&&(rt===o.FLOAT&&(St=o.R32F),rt===o.HALF_FLOAT&&(St=o.R16F),rt===o.UNSIGNED_BYTE&&(St=o.R8),rt===o.UNSIGNED_SHORT&&Ot&&(St=Ot.R16_EXT),rt===o.SHORT&&Ot&&(St=Ot.R16_SNORM_EXT)),y===o.RED_INTEGER&&(rt===o.UNSIGNED_BYTE&&(St=o.R8UI),rt===o.UNSIGNED_SHORT&&(St=o.R16UI),rt===o.UNSIGNED_INT&&(St=o.R32UI),rt===o.BYTE&&(St=o.R8I),rt===o.SHORT&&(St=o.R16I),rt===o.INT&&(St=o.R32I)),y===o.RG&&(rt===o.FLOAT&&(St=o.RG32F),rt===o.HALF_FLOAT&&(St=o.RG16F),rt===o.UNSIGNED_BYTE&&(St=o.RG8),rt===o.UNSIGNED_SHORT&&Ot&&(St=Ot.RG16_EXT),rt===o.SHORT&&Ot&&(St=Ot.RG16_SNORM_EXT)),y===o.RG_INTEGER&&(rt===o.UNSIGNED_BYTE&&(St=o.RG8UI),rt===o.UNSIGNED_SHORT&&(St=o.RG16UI),rt===o.UNSIGNED_INT&&(St=o.RG32UI),rt===o.BYTE&&(St=o.RG8I),rt===o.SHORT&&(St=o.RG16I),rt===o.INT&&(St=o.RG32I)),y===o.RGB_INTEGER&&(rt===o.UNSIGNED_BYTE&&(St=o.RGB8UI),rt===o.UNSIGNED_SHORT&&(St=o.RGB16UI),rt===o.UNSIGNED_INT&&(St=o.RGB32UI),rt===o.BYTE&&(St=o.RGB8I),rt===o.SHORT&&(St=o.RGB16I),rt===o.INT&&(St=o.RGB32I)),y===o.RGBA_INTEGER&&(rt===o.UNSIGNED_BYTE&&(St=o.RGBA8UI),rt===o.UNSIGNED_SHORT&&(St=o.RGBA16UI),rt===o.UNSIGNED_INT&&(St=o.RGBA32UI),rt===o.BYTE&&(St=o.RGBA8I),rt===o.SHORT&&(St=o.RGBA16I),rt===o.INT&&(St=o.RGBA32I)),y===o.RGB&&(rt===o.UNSIGNED_SHORT&&Ot&&(St=Ot.RGB16_EXT),rt===o.SHORT&&Ot&&(St=Ot.RGB16_SNORM_EXT),rt===o.UNSIGNED_INT_5_9_9_9_REV&&(St=o.RGB9_E5),rt===o.UNSIGNED_INT_10F_11F_11F_REV&&(St=o.R11F_G11F_B10F)),y===o.RGBA){const bt=wt?Wu:Pe.getTransfer(vt);rt===o.FLOAT&&(St=o.RGBA32F),rt===o.HALF_FLOAT&&(St=o.RGBA16F),rt===o.UNSIGNED_BYTE&&(St=bt===Ke?o.SRGB8_ALPHA8:o.RGBA8),rt===o.UNSIGNED_SHORT&&Ot&&(St=Ot.RGBA16_EXT),rt===o.SHORT&&Ot&&(St=Ot.RGBA16_SNORM_EXT),rt===o.UNSIGNED_SHORT_4_4_4_4&&(St=o.RGBA4),rt===o.UNSIGNED_SHORT_5_5_5_1&&(St=o.RGB5_A1)}return(St===o.R16F||St===o.R32F||St===o.RG16F||St===o.RG32F||St===o.RGBA16F||St===o.RGBA32F)&&e.get("EXT_color_buffer_float"),St}function O(F,y){let rt;return F?y===null||y===da||y===wl?rt=o.DEPTH24_STENCIL8:y===ca?rt=o.DEPTH32F_STENCIL8:y===Cl&&(rt=o.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===da||y===wl?rt=o.DEPTH_COMPONENT24:y===ca?rt=o.DEPTH_COMPONENT32F:y===Cl&&(rt=o.DEPTH_COMPONENT16),rt}function L(F,y){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==In&&F.minFilter!==Vn?Math.log2(Math.max(y.width,y.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?y.mipmaps.length:1}function z(F){const y=F.target;y.removeEventListener("dispose",z),P(y),y.isVideoTexture&&x.delete(y),y.isHTMLTexture&&_.delete(y)}function E(F){const y=F.target;y.removeEventListener("dispose",E),D(y)}function P(F){const y=r.get(F);if(y.__webglInit===void 0)return;const rt=F.source,ft=T.get(rt);if(ft){const vt=ft[y.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&b(F),Object.keys(ft).length===0&&T.delete(rt)}r.remove(F)}function b(F){const y=r.get(F);o.deleteTexture(y.__webglTexture);const rt=F.source,ft=T.get(rt);delete ft[y.__cacheKey],d.memory.textures--}function D(F){const y=r.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),r.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(y.__webglFramebuffer[ft]))for(let vt=0;vt<y.__webglFramebuffer[ft].length;vt++)o.deleteFramebuffer(y.__webglFramebuffer[ft][vt]);else o.deleteFramebuffer(y.__webglFramebuffer[ft]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[ft])}else{if(Array.isArray(y.__webglFramebuffer))for(let ft=0;ft<y.__webglFramebuffer.length;ft++)o.deleteFramebuffer(y.__webglFramebuffer[ft]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ft=0;ft<y.__webglColorRenderbuffer.length;ft++)y.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[ft]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const rt=F.textures;for(let ft=0,vt=rt.length;ft<vt;ft++){const wt=r.get(rt[ft]);wt.__webglTexture&&(o.deleteTexture(wt.__webglTexture),d.memory.textures--),r.remove(rt[ft])}r.remove(F)}let U=0;function X(){U=0}function B(){return U}function Z(F){U=F}function q(){const F=U;return F>=l.maxTextures&&de("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+l.maxTextures),U+=1,F}function W(F){const y=[];return y.push(F.wrapS),y.push(F.wrapT),y.push(F.wrapR||0),y.push(F.magFilter),y.push(F.minFilter),y.push(F.anisotropy),y.push(F.internalFormat),y.push(F.format),y.push(F.type),y.push(F.generateMipmaps),y.push(F.premultiplyAlpha),y.push(F.flipY),y.push(F.unpackAlignment),y.push(F.colorSpace),y.join()}function $(F,y){const rt=r.get(F);if(F.isVideoTexture&&Y(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&rt.__version!==F.version){const ft=F.image;if(ft===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(rt,F,y);return}}else F.isExternalTexture&&(rt.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,rt.__webglTexture,o.TEXTURE0+y)}function et(F,y){const rt=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&rt.__version!==F.version){_t(rt,F,y);return}else F.isExternalTexture&&(rt.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,rt.__webglTexture,o.TEXTURE0+y)}function ht(F,y){const rt=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&rt.__version!==F.version){_t(rt,F,y);return}i.bindTexture(o.TEXTURE_3D,rt.__webglTexture,o.TEXTURE0+y)}function Mt(F,y){const rt=r.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&rt.__version!==F.version){Ct(rt,F,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture,o.TEXTURE0+y)}const Bt={[xp]:o.REPEAT,[Ia]:o.CLAMP_TO_EDGE,[Sp]:o.MIRRORED_REPEAT},Dt={[In]:o.NEAREST,[F1]:o.NEAREST_MIPMAP_NEAREST,[du]:o.NEAREST_MIPMAP_LINEAR,[Vn]:o.LINEAR,[Lh]:o.LINEAR_MIPMAP_NEAREST,[jr]:o.LINEAR_MIPMAP_LINEAR},k={[V1]:o.NEVER,[Y1]:o.ALWAYS,[X1]:o.LESS,[Am]:o.LEQUAL,[k1]:o.EQUAL,[Rm]:o.GEQUAL,[q1]:o.GREATER,[W1]:o.NOTEQUAL};function mt(F,y){if(y.type===ca&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Vn||y.magFilter===Lh||y.magFilter===du||y.magFilter===jr||y.minFilter===Vn||y.minFilter===Lh||y.minFilter===du||y.minFilter===jr)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(F,o.TEXTURE_WRAP_S,Bt[y.wrapS]),o.texParameteri(F,o.TEXTURE_WRAP_T,Bt[y.wrapT]),(F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY)&&o.texParameteri(F,o.TEXTURE_WRAP_R,Bt[y.wrapR]),o.texParameteri(F,o.TEXTURE_MAG_FILTER,Dt[y.magFilter]),o.texParameteri(F,o.TEXTURE_MIN_FILTER,Dt[y.minFilter]),y.compareFunction&&(o.texParameteri(F,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(F,o.TEXTURE_COMPARE_FUNC,k[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===In||y.minFilter!==du&&y.minFilter!==jr||y.type===ca&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const rt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(F,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function gt(F,y){let rt=!1;F.__webglInit===void 0&&(F.__webglInit=!0,y.addEventListener("dispose",z));const ft=y.source;let vt=T.get(ft);vt===void 0&&(vt={},T.set(ft,vt));const wt=W(y);if(wt!==F.__cacheKey){vt[wt]===void 0&&(vt[wt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,rt=!0),vt[wt].usedTimes++;const Ot=vt[F.__cacheKey];Ot!==void 0&&(vt[F.__cacheKey].usedTimes--,Ot.usedTimes===0&&b(y)),F.__cacheKey=wt,F.__webglTexture=vt[wt].texture}return rt}function H(F,y,rt){return Math.floor(Math.floor(F/rt)/y)}function at(F,y,rt,ft){const wt=F.updateRanges;if(wt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,rt,ft,y.data);else{wt.sort((ie,Ht)=>ie.start-Ht.start);let Ot=0;for(let ie=1;ie<wt.length;ie++){const Ht=wt[Ot],Ft=wt[ie],Wt=Ht.start+Ht.count,le=H(Ft.start,y.width,4),pe=H(Ht.start,y.width,4);Ft.start<=Wt+1&&le===pe&&H(Ft.start+Ft.count-1,y.width,4)===le?Ht.count=Math.max(Ht.count,Ft.start+Ft.count-Ht.start):(++Ot,wt[Ot]=Ft)}wt.length=Ot+1;const St=i.getParameter(o.UNPACK_ROW_LENGTH),bt=i.getParameter(o.UNPACK_SKIP_PIXELS),Lt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let ie=0,Ht=wt.length;ie<Ht;ie++){const Ft=wt[ie],Wt=Math.floor(Ft.start/4),le=Math.ceil(Ft.count/4),pe=Wt%y.width,j=Math.floor(Wt/y.width),Ut=le,Tt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,pe),i.pixelStorei(o.UNPACK_SKIP_ROWS,j),i.texSubImage2D(o.TEXTURE_2D,0,pe,j,Ut,Tt,rt,ft,y.data)}F.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,St),i.pixelStorei(o.UNPACK_SKIP_PIXELS,bt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Lt)}}function _t(F,y,rt){let ft=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ft=o.TEXTURE_3D);const vt=gt(F,y),wt=y.source;i.bindTexture(ft,F.__webglTexture,o.TEXTURE0+rt);const Ot=r.get(wt);if(wt.version!==Ot.__version||vt===!0){if(i.activeTexture(o.TEXTURE0+rt),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const Tt=Pe.getPrimaries(Pe.workingColorSpace),Pt=y.colorSpace===Er?null:Pe.getPrimaries(y.colorSpace),qt=y.colorSpace===Er||Tt===Pt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt)}i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment);let bt=M(y.image,!1,l.maxTextureSize);bt=sn(y,bt);const Lt=u.convert(y.format,y.colorSpace),ie=u.convert(y.type);let Ht=w(y.internalFormat,Lt,ie,y.normalized,y.colorSpace,y.isVideoTexture);mt(ft,y);let Ft;const Wt=y.mipmaps,le=y.isVideoTexture!==!0,pe=Ot.__version===void 0||vt===!0,j=wt.dataReady,Ut=L(y,bt);if(y.isDepthTexture)Ht=O(y.format===$r,y.type),pe&&(le?i.texStorage2D(o.TEXTURE_2D,1,Ht,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Ht,bt.width,bt.height,0,Lt,ie,null));else if(y.isDataTexture)if(Wt.length>0){le&&pe&&i.texStorage2D(o.TEXTURE_2D,Ut,Ht,Wt[0].width,Wt[0].height);for(let Tt=0,Pt=Wt.length;Tt<Pt;Tt++)Ft=Wt[Tt],le?j&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Ft.width,Ft.height,Lt,ie,Ft.data):i.texImage2D(o.TEXTURE_2D,Tt,Ht,Ft.width,Ft.height,0,Lt,ie,Ft.data);y.generateMipmaps=!1}else le?(pe&&i.texStorage2D(o.TEXTURE_2D,Ut,Ht,bt.width,bt.height),j&&at(y,bt,Lt,ie)):i.texImage2D(o.TEXTURE_2D,0,Ht,bt.width,bt.height,0,Lt,ie,bt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){le&&pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,Ht,Wt[0].width,Wt[0].height,bt.depth);for(let Tt=0,Pt=Wt.length;Tt<Pt;Tt++)if(Ft=Wt[Tt],y.format!==Vi)if(Lt!==null)if(le){if(j)if(y.layerUpdates.size>0){const qt=Ax(Ft.width,Ft.height,y.format,y.type);for(const Rt of y.layerUpdates){const ee=Ft.data.subarray(Rt*qt/Ft.data.BYTES_PER_ELEMENT,(Rt+1)*qt/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,Rt,Ft.width,Ft.height,1,Lt,ee)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Ft.width,Ft.height,bt.depth,Lt,Ft.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,Ht,Ft.width,Ft.height,bt.depth,0,Ft.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?j&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Ft.width,Ft.height,bt.depth,Lt,ie,Ft.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Tt,Ht,Ft.width,Ft.height,bt.depth,0,Lt,ie,Ft.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{le&&pe&&i.texStorage2D(o.TEXTURE_2D,Ut,Ht,Wt[0].width,Wt[0].height);for(let Tt=0,Pt=Wt.length;Tt<Pt;Tt++)Ft=Wt[Tt],y.format!==Vi?Lt!==null?le?j&&i.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,Ft.width,Ft.height,Lt,Ft.data):i.compressedTexImage2D(o.TEXTURE_2D,Tt,Ht,Ft.width,Ft.height,0,Ft.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?j&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Ft.width,Ft.height,Lt,ie,Ft.data):i.texImage2D(o.TEXTURE_2D,Tt,Ht,Ft.width,Ft.height,0,Lt,ie,Ft.data)}else if(y.isDataArrayTexture)if(le){if(pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,Ht,bt.width,bt.height,bt.depth),j)if(y.layerUpdates.size>0){const Tt=Ax(bt.width,bt.height,y.format,y.type);for(const Pt of y.layerUpdates){const qt=bt.data.subarray(Pt*Tt/bt.data.BYTES_PER_ELEMENT,(Pt+1)*Tt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Pt,bt.width,bt.height,1,Lt,ie,qt)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Lt,ie,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ht,bt.width,bt.height,bt.depth,0,Lt,ie,bt.data);else if(y.isData3DTexture)le?(pe&&i.texStorage3D(o.TEXTURE_3D,Ut,Ht,bt.width,bt.height,bt.depth),j&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Lt,ie,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Ht,bt.width,bt.height,bt.depth,0,Lt,ie,bt.data);else if(y.isFramebufferTexture){if(pe)if(le)i.texStorage2D(o.TEXTURE_2D,Ut,Ht,bt.width,bt.height);else{let Tt=bt.width,Pt=bt.height;for(let qt=0;qt<Ut;qt++)i.texImage2D(o.TEXTURE_2D,qt,Ht,Tt,Pt,0,Lt,ie,null),Tt>>=1,Pt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in o){const Tt=o.canvas;if(Tt.hasAttribute("layoutsubtree")||Tt.setAttribute("layoutsubtree","true"),bt.parentNode!==Tt){Tt.appendChild(bt),_.add(y),Tt.onpaint=Pt=>{const qt=Pt.changedElements;for(const Rt of _)qt.includes(Rt.image)&&(Rt.needsUpdate=!0)},Tt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,bt);else{const qt=o.RGBA,Rt=o.RGBA,ee=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,qt,Rt,ee,bt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(le&&pe){const Tt=He(Wt[0]);i.texStorage2D(o.TEXTURE_2D,Ut,Ht,Tt.width,Tt.height)}for(let Tt=0,Pt=Wt.length;Tt<Pt;Tt++)Ft=Wt[Tt],le?j&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Lt,ie,Ft):i.texImage2D(o.TEXTURE_2D,Tt,Ht,Lt,ie,Ft);y.generateMipmaps=!1}else if(le){if(pe){const Tt=He(bt);i.texStorage2D(o.TEXTURE_2D,Ut,Ht,Tt.width,Tt.height)}j&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Lt,ie,bt)}else i.texImage2D(o.TEXTURE_2D,0,Ht,Lt,ie,bt);S(y)&&N(ft),Ot.__version=wt.version,y.onUpdate&&y.onUpdate(y)}F.__version=y.version}function Ct(F,y,rt){if(y.image.length!==6)return;const ft=gt(F,y),vt=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,F.__webglTexture,o.TEXTURE0+rt);const wt=r.get(vt);if(vt.version!==wt.__version||ft===!0){i.activeTexture(o.TEXTURE0+rt);const Ot=Pe.getPrimaries(Pe.workingColorSpace),St=y.colorSpace===Er?null:Pe.getPrimaries(y.colorSpace),bt=y.colorSpace===Er||Ot===St?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Lt=y.isCompressedTexture||y.image[0].isCompressedTexture,ie=y.image[0]&&y.image[0].isDataTexture,Ht=[];for(let Rt=0;Rt<6;Rt++)!Lt&&!ie?Ht[Rt]=M(y.image[Rt],!0,l.maxCubemapSize):Ht[Rt]=ie?y.image[Rt].image:y.image[Rt],Ht[Rt]=sn(y,Ht[Rt]);const Ft=Ht[0],Wt=u.convert(y.format,y.colorSpace),le=u.convert(y.type),pe=w(y.internalFormat,Wt,le,y.normalized,y.colorSpace),j=y.isVideoTexture!==!0,Ut=wt.__version===void 0||ft===!0,Tt=vt.dataReady;let Pt=L(y,Ft);mt(o.TEXTURE_CUBE_MAP,y);let qt;if(Lt){j&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,pe,Ft.width,Ft.height);for(let Rt=0;Rt<6;Rt++){qt=Ht[Rt].mipmaps;for(let ee=0;ee<qt.length;ee++){const kt=qt[ee];y.format!==Vi?Wt!==null?j?Tt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ee,0,0,kt.width,kt.height,Wt,kt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ee,pe,kt.width,kt.height,0,kt.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ee,0,0,kt.width,kt.height,Wt,le,kt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ee,pe,kt.width,kt.height,0,Wt,le,kt.data)}}}else{if(qt=y.mipmaps,j&&Ut){qt.length>0&&Pt++;const Rt=He(Ht[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,pe,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(ie){j?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Ht[Rt].width,Ht[Rt].height,Wt,le,Ht[Rt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,pe,Ht[Rt].width,Ht[Rt].height,0,Wt,le,Ht[Rt].data);for(let ee=0;ee<qt.length;ee++){const Le=qt[ee].image[Rt].image;j?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ee+1,0,0,Le.width,Le.height,Wt,le,Le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ee+1,pe,Le.width,Le.height,0,Wt,le,Le.data)}}else{j?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Wt,le,Ht[Rt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,pe,Wt,le,Ht[Rt]);for(let ee=0;ee<qt.length;ee++){const kt=qt[ee];j?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ee+1,0,0,Wt,le,kt.image[Rt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ee+1,pe,Wt,le,kt.image[Rt])}}}S(y)&&N(o.TEXTURE_CUBE_MAP),wt.__version=vt.version,y.onUpdate&&y.onUpdate(y)}F.__version=y.version}function ot(F,y,rt,ft,vt,wt){const Ot=u.convert(rt.format,rt.colorSpace),St=u.convert(rt.type),bt=w(rt.internalFormat,Ot,St,rt.normalized,rt.colorSpace),Lt=r.get(y),ie=r.get(rt);if(ie.__renderTarget=y,!Lt.__hasExternalTextures){const Ht=Math.max(1,y.width>>wt),Ft=Math.max(1,y.height>>wt);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,wt,bt,Ht,Ft,y.depth,0,Ot,St,null):i.texImage2D(vt,wt,bt,Ht,Ft,0,Ot,St,null)}i.bindFramebuffer(o.FRAMEBUFFER,F),he(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,vt,ie.__webglTexture,0,ve(y)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,vt,ie.__webglTexture,wt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function At(F,y,rt){if(o.bindRenderbuffer(o.RENDERBUFFER,F),y.depthBuffer){const ft=y.depthTexture,vt=ft&&ft.isDepthTexture?ft.type:null,wt=O(y.stencilBuffer,vt),Ot=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;he(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ve(y),wt,y.width,y.height):rt?o.renderbufferStorageMultisample(o.RENDERBUFFER,ve(y),wt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,wt,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ot,o.RENDERBUFFER,F)}else{const ft=y.textures;for(let vt=0;vt<ft.length;vt++){const wt=ft[vt],Ot=u.convert(wt.format,wt.colorSpace),St=u.convert(wt.type),bt=w(wt.internalFormat,Ot,St,wt.normalized,wt.colorSpace);he(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ve(y),bt,y.width,y.height):rt?o.renderbufferStorageMultisample(o.RENDERBUFFER,ve(y),bt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,bt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ae(F,y,rt){const ft=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,F),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const vt=r.get(y.depthTexture);if(vt.__renderTarget=y,(!vt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ft){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,y.depthTexture.addEventListener("dispose",z)),vt.__webglTexture===void 0){vt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),mt(o.TEXTURE_CUBE_MAP,y.depthTexture);const Lt=u.convert(y.depthTexture.format),ie=u.convert(y.depthTexture.type);let Ht;y.depthTexture.format===Ha?Ht=o.DEPTH_COMPONENT24:y.depthTexture.format===$r&&(Ht=o.DEPTH24_STENCIL8);for(let Ft=0;Ft<6;Ft++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Ht,y.width,y.height,0,Lt,ie,null)}}else $(y.depthTexture,0);const wt=vt.__webglTexture,Ot=ve(y),St=ft?o.TEXTURE_CUBE_MAP_POSITIVE_X+rt:o.TEXTURE_2D,bt=y.depthTexture.format===$r?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ha)he(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,bt,St,wt,0,Ot):o.framebufferTexture2D(o.FRAMEBUFFER,bt,St,wt,0);else if(y.depthTexture.format===$r)he(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,bt,St,wt,0,Ot):o.framebufferTexture2D(o.FRAMEBUFFER,bt,St,wt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(F){const y=r.get(F),rt=F.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==F.depthTexture){const ft=F.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ft){const vt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ft.removeEventListener("dispose",vt)};ft.addEventListener("dispose",vt),y.__depthDisposeCallback=vt}y.__boundDepthTexture=ft}if(F.depthTexture&&!y.__autoAllocateDepthBuffer)if(rt)for(let ft=0;ft<6;ft++)ae(y.__webglFramebuffer[ft],F,ft);else{const ft=F.texture.mipmaps;ft&&ft.length>0?ae(y.__webglFramebuffer[0],F,0):ae(y.__webglFramebuffer,F,0)}else if(rt){y.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[ft]),y.__webglDepthbuffer[ft]===void 0)y.__webglDepthbuffer[ft]=o.createRenderbuffer(),At(y.__webglDepthbuffer[ft],F,!1);else{const vt=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=y.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,wt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,wt)}}else{const ft=F.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),At(y.__webglDepthbuffer,F,!1);else{const vt=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,wt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,wt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function se(F,y,rt){const ft=r.get(F);y!==void 0&&ot(ft.__webglFramebuffer,F,F.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),rt!==void 0&&re(F)}function Qt(F){const y=F.texture,rt=r.get(F),ft=r.get(y);F.addEventListener("dispose",E);const vt=F.textures,wt=F.isWebGLCubeRenderTarget===!0,Ot=vt.length>1;if(Ot||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=y.version,d.memory.textures++),wt){rt.__webglFramebuffer=[];for(let St=0;St<6;St++)if(y.mipmaps&&y.mipmaps.length>0){rt.__webglFramebuffer[St]=[];for(let bt=0;bt<y.mipmaps.length;bt++)rt.__webglFramebuffer[St][bt]=o.createFramebuffer()}else rt.__webglFramebuffer[St]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){rt.__webglFramebuffer=[];for(let St=0;St<y.mipmaps.length;St++)rt.__webglFramebuffer[St]=o.createFramebuffer()}else rt.__webglFramebuffer=o.createFramebuffer();if(Ot)for(let St=0,bt=vt.length;St<bt;St++){const Lt=r.get(vt[St]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=o.createTexture(),d.memory.textures++)}if(F.samples>0&&he(F)===!1){rt.__webglMultisampledFramebuffer=o.createFramebuffer(),rt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let St=0;St<vt.length;St++){const bt=vt[St];rt.__webglColorRenderbuffer[St]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,rt.__webglColorRenderbuffer[St]);const Lt=u.convert(bt.format,bt.colorSpace),ie=u.convert(bt.type),Ht=w(bt.internalFormat,Lt,ie,bt.normalized,bt.colorSpace,F.isXRRenderTarget===!0),Ft=ve(F);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ft,Ht,F.width,F.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+St,o.RENDERBUFFER,rt.__webglColorRenderbuffer[St])}o.bindRenderbuffer(o.RENDERBUFFER,null),F.depthBuffer&&(rt.__webglDepthRenderbuffer=o.createRenderbuffer(),At(rt.__webglDepthRenderbuffer,F,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(wt){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),mt(o.TEXTURE_CUBE_MAP,y);for(let St=0;St<6;St++)if(y.mipmaps&&y.mipmaps.length>0)for(let bt=0;bt<y.mipmaps.length;bt++)ot(rt.__webglFramebuffer[St][bt],F,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+St,bt);else ot(rt.__webglFramebuffer[St],F,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);S(y)&&N(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let St=0,bt=vt.length;St<bt;St++){const Lt=vt[St],ie=r.get(Lt);let Ht=o.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ht=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ht,ie.__webglTexture),mt(Ht,Lt),ot(rt.__webglFramebuffer,F,Lt,o.COLOR_ATTACHMENT0+St,Ht,0),S(Lt)&&N(Ht)}i.unbindTexture()}else{let St=o.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(St=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(St,ft.__webglTexture),mt(St,y),y.mipmaps&&y.mipmaps.length>0)for(let bt=0;bt<y.mipmaps.length;bt++)ot(rt.__webglFramebuffer[bt],F,y,o.COLOR_ATTACHMENT0,St,bt);else ot(rt.__webglFramebuffer,F,y,o.COLOR_ATTACHMENT0,St,0);S(y)&&N(St),i.unbindTexture()}F.depthBuffer&&re(F)}function Nt(F){const y=F.textures;for(let rt=0,ft=y.length;rt<ft;rt++){const vt=y[rt];if(S(vt)){const wt=V(F),Ot=r.get(vt).__webglTexture;i.bindTexture(wt,Ot),N(wt),i.unbindTexture()}}}const ne=[],Me=[];function ze(F){if(F.samples>0){if(he(F)===!1){const y=F.textures,rt=F.width,ft=F.height;let vt=o.COLOR_BUFFER_BIT;const wt=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=r.get(F),St=y.length>1;if(St)for(let Lt=0;Lt<y.length;Lt++)i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const bt=F.texture.mipmaps;bt&&bt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Lt=0;Lt<y.length;Lt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),St){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Lt]);const ie=r.get(y[Lt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ie,0)}o.blitFramebuffer(0,0,rt,ft,0,0,rt,ft,vt,o.NEAREST),p===!0&&(ne.length=0,Me.length=0,ne.push(o.COLOR_ATTACHMENT0+Lt),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(ne.push(wt),Me.push(wt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Me)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ne))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),St)for(let Lt=0;Lt<y.length;Lt++){i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Lt]);const ie=r.get(y[Lt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.TEXTURE_2D,ie,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&p){const y=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function ve(F){return Math.min(l.maxSamples,F.samples)}function he(F){const y=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Y(F){const y=d.render.frame;x.get(F)!==y&&(x.set(F,y),F.update())}function sn(F,y){const rt=F.colorSpace,ft=F.format,vt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||rt!==qu&&rt!==Er&&(Pe.getTransfer(rt)===Ke?(ft!==Vi||vt!==_i)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",rt)),y}function He(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(m.width=F.naturalWidth||F.width,m.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(m.width=F.displayWidth,m.height=F.displayHeight):(m.width=F.width,m.height=F.height),m}this.allocateTextureUnit=q,this.resetTextureUnits=X,this.getTextureUnits=B,this.setTextureUnits=Z,this.setTexture2D=$,this.setTexture2DArray=et,this.setTexture3D=ht,this.setTextureCube=Mt,this.rebindTextures=se,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function yC(o,e){function i(r,l=Er){let u;const d=Pe.getTransfer(l);if(r===_i)return o.UNSIGNED_BYTE;if(r===Mm)return o.UNSIGNED_SHORT_4_4_4_4;if(r===ym)return o.UNSIGNED_SHORT_5_5_5_1;if(r===YS)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===ZS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===qS)return o.BYTE;if(r===WS)return o.SHORT;if(r===Cl)return o.UNSIGNED_SHORT;if(r===Sm)return o.INT;if(r===da)return o.UNSIGNED_INT;if(r===ca)return o.FLOAT;if(r===ha)return o.HALF_FLOAT;if(r===KS)return o.ALPHA;if(r===QS)return o.RGB;if(r===Vi)return o.RGBA;if(r===Ha)return o.DEPTH_COMPONENT;if(r===$r)return o.DEPTH_STENCIL;if(r===JS)return o.RED;if(r===Em)return o.RED_INTEGER;if(r===es)return o.RG;if(r===Tm)return o.RG_INTEGER;if(r===bm)return o.RGBA_INTEGER;if(r===zu||r===Fu||r===Bu||r===Hu)if(d===Ke)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===zu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===zu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mp||r===yp||r===Ep||r===Tp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Mp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ep)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Tp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bp||r===Ap||r===Rp||r===Cp||r===wp||r===Xu||r===Dp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===bp||r===Ap)return d===Ke?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Rp)return d===Ke?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Cp)return u.COMPRESSED_R11_EAC;if(r===wp)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Xu)return u.COMPRESSED_RG11_EAC;if(r===Dp)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Np||r===Up||r===Lp||r===Op||r===Pp||r===Ip||r===zp||r===Fp||r===Bp||r===Hp||r===Gp||r===Vp||r===Xp||r===kp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Np)return d===Ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Up)return d===Ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lp)return d===Ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Op)return d===Ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pp)return d===Ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ip)return d===Ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zp)return d===Ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Fp)return d===Ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bp)return d===Ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hp)return d===Ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gp)return d===Ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vp)return d===Ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xp)return d===Ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kp)return d===Ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qp||r===Wp||r===Yp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===qp)return d===Ke?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Yp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Zp||r===Kp||r===ku||r===Qp)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Zp)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Kp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ku)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const EC=`
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

}`;class bC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new rM(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new pa({vertexShader:EC,fragmentShader:TC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new yn(new Ga(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AC extends ns{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",p=1,m=null,x=null,_=null,v=null,T=null,C=null;const I=typeof XRWebGLBinding<"u",M=new bC,S={},N=i.getContextAttributes();let V=null,w=null;const O=[],L=[],z=new we;let E=null,P=null;const b=new Gn;b.viewport=new ln;const D=new Gn;D.viewport=new ln;const U=[b,D],X=new OT;let B=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let at=O[H];return at===void 0&&(at=new Vh,O[H]=at),at.getTargetRaySpace()},this.getControllerGrip=function(H){let at=O[H];return at===void 0&&(at=new Vh,O[H]=at),at.getGripSpace()},this.getHand=function(H){let at=O[H];return at===void 0&&(at=new Vh,O[H]=at),at.getHandSpace()};function q(H){const at=L.indexOf(H.inputSource);if(at===-1)return;const _t=O[at];_t!==void 0&&(_t.update(H.inputSource,H.frame,m||d),_t.dispatchEvent({type:H.type,data:H.inputSource}))}function W(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",W),l.removeEventListener("inputsourceschange",$);for(let H=0;H<O.length;H++){const at=L[H];at!==null&&(L[H]=null,O[H].disconnect(at))}B=null,Z=null,M.reset();for(const H in S)delete S[H];if(e.setRenderTarget(V),T=null,v=null,_=null,l=null,w=null,gt.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(z.width,z.height,!1),P!==null){const H=P.camera;H.fov=P.fov,H.zoom=P.zoom,H.updateProjectionMatrix(),P=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){u=H,r.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){h=H,r.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(H){m=H},this.getBaseLayer=function(){return v!==null?v:T},this.getBinding=function(){return _===null&&I&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return C},this.getSession=function(){return l},this.setSession=async function(H){if(l=H,l!==null){if(V=e.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",W),l.addEventListener("inputsourceschange",$),N.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(z),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Ct=null,ot=null;N.depth&&(ot=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_t=N.stencil?$r:Ha,Ct=N.stencil?wl:da);const At={colorFormat:i.RGBA8,depthFormat:ot,scaleFactor:u};_=this.getBinding(),v=_.createProjectionLayer(At),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),w=new Xi(v.textureWidth,v.textureHeight,{format:Vi,type:_i,depthTexture:new Nl(v.textureWidth,v.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const _t={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:u};T=new XRWebGLLayer(l,i,_t),l.updateRenderState({baseLayer:T}),e.setPixelRatio(1),e.setSize(T.framebufferWidth,T.framebufferHeight,!1),w=new Xi(T.framebufferWidth,T.framebufferHeight,{format:Vi,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1,storeMultisampledDepthBuffer:T.ignoreDepthValues===!1,storeMultisampledStencilBuffer:T.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),gt.setContext(l),gt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function $(H){for(let at=0;at<H.removed.length;at++){const _t=H.removed[at],Ct=L.indexOf(_t);Ct>=0&&(L[Ct]=null,O[Ct].disconnect(_t))}for(let at=0;at<H.added.length;at++){const _t=H.added[at];let Ct=L.indexOf(_t);if(Ct===-1){for(let At=0;At<O.length;At++)if(At>=L.length){L.push(_t),Ct=At;break}else if(L[At]===null){L[At]=_t,Ct=At;break}if(Ct===-1)break}const ot=O[Ct];ot&&ot.connect(_t)}}const et=new J,ht=new J;function Mt(H,at,_t){et.setFromMatrixPosition(at.matrixWorld),ht.setFromMatrixPosition(_t.matrixWorld);const Ct=et.distanceTo(ht),ot=at.projectionMatrix.elements,At=_t.projectionMatrix.elements,ae=ot[14]/(ot[10]-1),re=ot[14]/(ot[10]+1),se=(ot[9]+1)/ot[5],Qt=(ot[9]-1)/ot[5],Nt=(ot[8]-1)/ot[0],ne=(At[8]+1)/At[0],Me=ae*Nt,ze=ae*ne,ve=Ct/(-Nt+ne),he=ve*-Nt;if(at.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(he),H.translateZ(ve),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ot[10]===-1)H.projectionMatrix.copy(at.projectionMatrix),H.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Y=ae+ve,sn=re+ve,He=Me-he,F=ze+(Ct-he),y=se*re/sn*Y,rt=Qt*re/sn*Y;H.projectionMatrix.makePerspective(He,F,y,rt,Y,sn),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Bt(H,at){at===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(at.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(l===null)return;let at=H.near,_t=H.far;M.texture!==null&&(M.depthNear>0&&(at=M.depthNear),M.depthFar>0&&(_t=M.depthFar)),X.near=D.near=b.near=at,X.far=D.far=b.far=_t,(B!==X.near||Z!==X.far)&&(l.updateRenderState({depthNear:X.near,depthFar:X.far}),B=X.near,Z=X.far),X.layers.mask=H.layers.mask|6,b.layers.mask=X.layers.mask&-5,D.layers.mask=X.layers.mask&-3;const Ct=H.parent,ot=X.cameras;Bt(X,Ct);for(let At=0;At<ot.length;At++)Bt(ot[At],Ct);ot.length===2?Mt(X,b,D):X.projectionMatrix.copy(b.projectionMatrix),P===null&&H.isPerspectiveCamera&&(P={camera:H,fov:H.fov,zoom:H.zoom}),Dt(H,X,Ct)};function Dt(H,at,_t){_t===null?H.matrix.copy(at.matrixWorld):(H.matrix.copy(_t.matrixWorld),H.matrix.invert(),H.matrix.multiply(at.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(at.projectionMatrix),H.projectionMatrixInverse.copy(at.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=jp*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(v===null&&T===null))return p},this.setFoveation=function(H){p=H,v!==null&&(v.fixedFoveation=H),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=H)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(X)},this.getCameraTexture=function(H){return S[H]};let k=null;function mt(H,at){if(x=at.getViewerPose(m||d),C=at,x!==null){const _t=x.views;T!==null&&(e.setRenderTargetFramebuffer(w,T.framebuffer),e.setRenderTarget(w));let Ct=!1;_t.length!==X.cameras.length&&(X.cameras.length=0,Ct=!0);for(let re=0;re<_t.length;re++){const se=_t[re];let Qt=null;if(T!==null)Qt=T.getViewport(se);else{const ne=_.getViewSubImage(v,se);Qt=ne.viewport,re===0&&(e.setRenderTargetTextures(w,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(w))}let Nt=U[re];Nt===void 0&&(Nt=new Gn,Nt.layers.enable(re),Nt.viewport=new ln,U[re]=Nt),Nt.matrix.fromArray(se.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(se.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),re===0&&(X.matrix.copy(Nt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ct===!0&&X.cameras.push(Nt)}const ot=l.enabledFeatures;if(ot&&ot.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&I){_=r.getBinding();const re=_.getDepthInformation(_t[0]);re&&re.isValid&&re.texture&&M.init(re,l.renderState)}if(ot&&ot.includes("camera-access")&&I){e.state.unbindTexture(),_=r.getBinding();for(let re=0;re<_t.length;re++){const se=_t[re].camera;if(se){let Qt=S[se];Qt||(Qt=new rM,S[se]=Qt);const Nt=_.getCameraImage(se);Qt.sourceTexture=Nt}}}}for(let _t=0;_t<O.length;_t++){const Ct=L[_t],ot=O[_t];Ct!==null&&ot!==void 0&&ot.update(Ct,at,m||d)}k&&k(H,at),at.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:at}),C=null}const gt=new lM;gt.setAnimationLoop(mt),this.setAnimationLoop=function(H){k=H},this.dispose=function(){}}}const RC=new tn,mM=new _e;mM.set(-1,0,0,0,1,0,0,0,1);function CC(o,e){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function r(M,S){S.color.getRGB(M.fogColor.value,sM(o)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,N,V,w){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?u(M,S):S.isMeshLambertMaterial?(u(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(u(M,S),_(M,S)):S.isMeshPhongMaterial?(u(M,S),x(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(u(M,S),v(M,S),S.isMeshPhysicalMaterial&&T(M,S,w)):S.isMeshMatcapMaterial?(u(M,S),C(M,S)):S.isMeshDepthMaterial?u(M,S):S.isMeshDistanceMaterial?(u(M,S),I(M,S)):S.isMeshNormalMaterial?u(M,S):S.isLineBasicMaterial?(d(M,S),S.isLineDashedMaterial&&h(M,S)):S.isPointsMaterial?p(M,S,N,V):S.isSpriteMaterial?m(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===ii&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===ii&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const N=e.get(S),V=N.envMap,w=N.envMapRotation;V&&(M.envMap.value=V,M.envMapRotation.value.setFromMatrix4(RC.makeRotationFromEuler(w)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(mM),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function d(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function h(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function p(M,S,N,V){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*N,M.scale.value=V*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function m(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function x(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function _(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function v(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function T(M,S,N){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ii&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.retroreflectivity>0&&(M.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function C(M,S){S.matcap&&(M.matcap.value=S.matcap)}function I(M,S){const N=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function wC(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,O){const L=O.program;r.uniformBlockBinding(w,L)}function m(w,O){let L=l[w.id];L===void 0&&(M(w),L=x(w),l[w.id]=L,w.addEventListener("dispose",N));const z=O.program;r.updateUBOMapping(w,z);const E=e.render.frame;u[w.id]!==E&&(v(w),u[w.id]=E)}function x(w){const O=_();w.__bindingPointIndex=O;const L=o.createBuffer(),z=w.__size,E=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,z,E),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,L),L}function _(){for(let w=0;w<h;w++)if(d.indexOf(w)===-1)return d.push(w),w;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const O=l[w.id],L=w.uniforms,z=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let E=0,P=L.length;E<P;E++){const b=L[E];if(Array.isArray(b))for(let D=0,U=b.length;D<U;D++)T(b[D],E,D,z);else T(b,E,0,z)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function T(w,O,L,z){if(I(w,O,L,z)===!0){const E=w.__offset,P=w.value;if(Array.isArray(P)){let b=0;for(let D=0;D<P.length;D++){const U=P[D],X=S(U);C(U,w.__data,b),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(b+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else C(P,w.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,E,w.__data)}}function C(w,O,L){typeof w=="number"||typeof w=="boolean"?O[0]=w:w.isMatrix3?(O[0]=w.elements[0],O[1]=w.elements[1],O[2]=w.elements[2],O[3]=0,O[4]=w.elements[3],O[5]=w.elements[4],O[6]=w.elements[5],O[7]=0,O[8]=w.elements[6],O[9]=w.elements[7],O[10]=w.elements[8],O[11]=0):ArrayBuffer.isView(w)?O.set(new w.constructor(w.buffer,w.byteOffset,O.length)):w.toArray(O,L)}function I(w,O,L,z){const E=w.value,P=O+"_"+L;if(z[P]===void 0)return typeof E=="number"||typeof E=="boolean"?z[P]=E:ArrayBuffer.isView(E)?z[P]=E.slice():z[P]=E.clone(),!0;{const b=z[P];if(typeof E=="number"||typeof E=="boolean"){if(b!==E)return z[P]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(b.equals(E)===!1)return b.copy(E),!0}}return!1}function M(w){const O=w.uniforms;let L=0;const z=16;for(let P=0,b=O.length;P<b;P++){const D=Array.isArray(O[P])?O[P]:[O[P]];for(let U=0,X=D.length;U<X;U++){const B=D[U],Z=Array.isArray(B.value)?B.value:[B.value];for(let q=0,W=Z.length;q<W;q++){const $=Z[q],et=S($),ht=L%z,Mt=ht%et.boundary,Bt=ht+Mt;L+=Mt,Bt!==0&&z-Bt<et.storage&&(L+=z-Bt),B.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=L,L+=et.storage}}}const E=L%z;return E>0&&(L+=z-E),w.__size=L,w.__cache={},this}function S(w){const O={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(O.boundary=4,O.storage=4):w.isVector2?(O.boundary=8,O.storage=8):w.isVector3||w.isColor?(O.boundary=16,O.storage=12):w.isVector4?(O.boundary=16,O.storage=16):w.isMatrix3?(O.boundary=48,O.storage=48):w.isMatrix4?(O.boundary=64,O.storage=64):w.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(O.boundary=16,O.storage=w.byteLength):de("WebGLRenderer: Unsupported uniform value type.",w),O}function N(w){const O=w.target;O.removeEventListener("dispose",N);const L=d.indexOf(O.__bindingPointIndex);d.splice(L,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function V(){for(const w in l)o.deleteBuffer(l[w]);d=[],l={},u={}}return{bind:p,update:m,dispose:V}}const DC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ra=null;function NC(){return ra===null&&(ra=new MT(DC,16,16,es,ha),ra.name="DFG_LUT",ra.minFilter=Vn,ra.magFilter=Vn,ra.wrapS=Ia,ra.wrapT=Ia,ra.generateMipmaps=!1,ra.needsUpdate=!0),ra}class Vl{constructor(e={}){const{canvas:i=Q1(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:T=_i}=e;this.isWebGLRenderer=!0;let C;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");C=r.getContextAttributes().alpha}else C=d;const I=T,M=new Set([bm,Tm,Em]),S=new Set([_i,da,Cl,wl,Mm,ym]),N=new Uint32Array(4),V=new Int32Array(4),w=new J;let O=null,L=null;const z=[],E=[];let P=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let D=!1,U=null,X=null,B=null,Z=null;this._outputColorSpace=Pn;let q=0,W=0,$=null,et=-1,ht=null;const Mt=new ln,Bt=new ln;let Dt=null;const k=new Be(0);let mt=0,gt=i.width,H=i.height,at=1,_t=null,Ct=null;const ot=new ln(0,0,gt,H),At=new ln(0,0,gt,H);let ae=!1;const re=new Dm;let se=!1,Qt=!1;const Nt=new tn,ne=new J,Me=new ln,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function he(){return $===null?at:1}let Y=r;function sn(A,K){return i.getContext(A,K)}let He,F,y,rt,ft,vt,wt,Ot,St,bt,Lt,ie,Ht,Ft,Wt,le,pe,j,Ut,Tt,Pt,qt,Rt;try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${xm}`),i.addEventListener("webglcontextlost",Le,!1),i.addEventListener("webglcontextrestored",me,!1),i.addEventListener("webglcontextcreationerror",ri,!1),Y===null){const K="webgl2";if(Y=sn(K,A),Y===null)throw sn(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ee()}catch(A){throw i.removeEventListener("webglcontextlost",Le,!1),i.removeEventListener("webglcontextrestored",me,!1),i.removeEventListener("webglcontextcreationerror",ri,!1),Ge("WebGLRenderer: "+A.message),A}function ee(){He=new NR(Y),He.init(),Pt=new yC(Y,He),F=new MR(Y,He,e,Pt),y=new SC(Y,He),F.reversedDepthBuffer&&v&&y.buffers.depth.setReversed(!0),X=Y.createFramebuffer(),B=Y.createFramebuffer(),Z=Y.createFramebuffer(),rt=new OR(Y),ft=new sC,vt=new MC(Y,He,y,ft,F,Pt,rt),wt=new DR(b),Ot=new IT(Y),qt=new xR(Y,Ot),St=new UR(Y,Ot,rt,qt),bt=new IR(Y,St,Ot,qt,rt),j=new PR(Y,F,vt),Wt=new yR(ft),Lt=new rC(b,wt,He,F,qt,Wt),ie=new CC(b,ft),Ht=new lC,Ft=new pC(He),pe=new vR(b,wt,y,bt,C,p),le=new xC(b,bt,F),Rt=new wC(Y,rt,F,y),Ut=new SR(Y,He,rt),Tt=new LR(Y,He,rt),rt.programs=Lt.programs,b.capabilities=F,b.extensions=He,b.properties=ft,b.renderLists=Ht,b.shadowMap=le,b.state=y,b.info=rt}I!==_i&&(P=new FR(I,i.width,i.height,h,l,u));const kt=new AC(b,Y);this.xr=kt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=He.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=He.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(A){A!==void 0&&(at=A,this.setSize(gt,H,!1))},this.getSize=function(A){return A.set(gt,H)},this.setSize=function(A,K,pt=!0){if(kt.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}gt=A,H=K,i.width=Math.floor(A*at),i.height=Math.floor(K*at),pt===!0&&(i.style.width=A+"px",i.style.height=K+"px"),P!==null&&P.setSize(i.width,i.height),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(gt*at,H*at).floor()},this.setDrawingBufferSize=function(A,K,pt){gt=A,H=K,at=pt,i.width=Math.floor(A*pt),i.height=Math.floor(K*pt),this.setViewport(0,0,A,K)},this.setEffects=function(A){if(I===_i){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let K=0;K<A.length;K++)if(A[K].isOutputPass===!0){de("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Mt)},this.getViewport=function(A){return A.copy(ot)},this.setViewport=function(A,K,pt,lt){A.isVector4?ot.set(A.x,A.y,A.z,A.w):ot.set(A,K,pt,lt),y.viewport(Mt.copy(ot).multiplyScalar(at).round())},this.getScissor=function(A){return A.copy(At)},this.setScissor=function(A,K,pt,lt){A.isVector4?At.set(A.x,A.y,A.z,A.w):At.set(A,K,pt,lt),y.scissor(Bt.copy(At).multiplyScalar(at).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(A){y.setScissorTest(ae=A)},this.setOpaqueSort=function(A){_t=A},this.setTransparentSort=function(A){Ct=A},this.getClearColor=function(A){return A.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(A=!0,K=!0,pt=!0){let lt=0;if(A){let ct=!1;if($!==null){const Gt=$.texture.format;ct=M.has(Gt)}if(ct){const Gt=$.texture.type,Yt=S.has(Gt),It=pe.getClearColor(),Jt=pe.getClearAlpha(),$t=It.r,ue=It.g,ge=It.b;Yt?(N[0]=$t,N[1]=ue,N[2]=ge,N[3]=Jt,Y.clearBufferuiv(Y.COLOR,0,N)):(V[0]=$t,V[1]=ue,V[2]=ge,V[3]=Jt,Y.clearBufferiv(Y.COLOR,0,V))}else lt|=Y.COLOR_BUFFER_BIT}K&&(lt|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pt&&(lt|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),lt!==0&&Y.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),U=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Le,!1),i.removeEventListener("webglcontextrestored",me,!1),i.removeEventListener("webglcontextcreationerror",ri,!1),pe.dispose(),Ht.dispose(),Ft.dispose(),ft.dispose(),wt.dispose(),bt.dispose(),qt.dispose(),Rt.dispose(),Lt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",br),kt.removeEventListener("sessionend",Xa),ki.stop()};function Le(A){A.preventDefault(),rx("WebGLRenderer: Context Lost."),D=!0}function me(){rx("WebGLRenderer: Context Restored."),D=!1;const A=rt.autoReset,K=le.enabled,pt=le.autoUpdate,lt=le.needsUpdate,ct=le.type;ee(),rt.autoReset=A,le.enabled=K,le.autoUpdate=pt,le.needsUpdate=lt,le.type=ct}function ri(A){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xi(A){const K=A.target;K.removeEventListener("dispose",xi),$u(K)}function $u(A){rs(A),ft.remove(A)}function rs(A){const K=ft.get(A).programs;K!==void 0&&(K.forEach(function(pt){Lt.releaseProgram(pt)}),A.isShaderMaterial&&Lt.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,pt,lt,ct,Gt){K===null&&(K=ze);const Yt=ct.isMesh&&ct.matrixWorld.determinantAffine()<0,It=bo(A,K,pt,lt,ct);y.setMaterial(lt,Yt);let Jt=pt.index,$t=1;if(lt.wireframe===!0){if(Jt=St.getWireframeAttribute(pt),Jt===void 0)return;$t=2}const ue=pt.drawRange,ge=pt.attributes.position;let Zt=ue.start*$t,Ae=(ue.start+ue.count)*$t;Gt!==null&&(Zt=Math.max(Zt,Gt.start*$t),Ae=Math.min(Ae,(Gt.start+Gt.count)*$t)),Jt!==null?(Zt=Math.max(Zt,0),Ae=Math.min(Ae,Jt.count)):ge!=null&&(Zt=Math.max(Zt,0),Ae=Math.min(Ae,ge.count));const Ee=Ae-Zt;if(Ee<0||Ee===1/0)return;qt.setup(ct,lt,It,pt,Jt);let Je,ke=Ut;if(Jt!==null&&(Je=Ot.get(Jt),ke=Tt,ke.setIndex(Je)),ct.isMesh)lt.wireframe===!0?(y.setLineWidth(lt.wireframeLinewidth*he()),ke.setMode(Y.LINES)):ke.setMode(Y.TRIANGLES);else if(ct.isLine){let Sn=lt.linewidth;Sn===void 0&&(Sn=1),y.setLineWidth(Sn*he()),ct.isLineSegments?ke.setMode(Y.LINES):ct.isLineLoop?ke.setMode(Y.LINE_LOOP):ke.setMode(Y.LINE_STRIP)}else ct.isPoints?ke.setMode(Y.POINTS):ct.isSprite&&ke.setMode(Y.TRIANGLES);if(ct.isBatchedMesh)if(He.get("WEBGL_multi_draw"))ke.renderMultiDraw(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount);else{const Sn=ct._multiDrawStarts,Vt=ct._multiDrawCounts,cn=ct._multiDrawCount,Oe=Jt?Ot.get(Jt).bytesPerElement:1,kn=ft.get(lt).currentProgram.getUniforms();for(let si=0;si<cn;si++)kn.setValue(Y,"_gl_DrawID",si),ke.render(Sn[si]/Oe,Vt[si])}else if(ct.isInstancedMesh)ke.renderInstances(Zt,Ee,ct.count);else if(pt.isInstancedBufferGeometry){const Sn=pt._maxInstanceCount!==void 0?pt._maxInstanceCount:1/0,Vt=Math.min(pt.instanceCount,Sn);ke.renderInstances(Zt,Ee,Vt)}else ke.render(Zt,Ee)};function Tr(A,K,pt,lt){U!==null&&A.isNodeMaterial&&U.setObject(lt,A),se===!0&&Wt.setState(A,pt,!1),A.transparent===!0&&A.side===Pa&&A.forceSinglePass===!1?(A.side=ii,A.needsUpdate=!0,Ar(A,K,lt),A.side=Ni,A.needsUpdate=!0,Ar(A,K,lt),A.side=Pa):Ar(A,K,lt)}this.compile=function(A,K,pt=null){pt===null&&(pt=A),U!==null&&U.renderStart(A,K,pt),L=Ft.get(pt),L.init(K),E.push(L),pt.traverseVisible(function(ct){ct.isLight&&ct.layers.test(K.layers)&&(L.pushLight(ct),ct.castShadow&&L.pushShadow(ct))}),A!==pt&&A.traverseVisible(function(ct){ct.isLight&&ct.layers.test(K.layers)&&(L.pushLight(ct),ct.castShadow&&L.pushShadow(ct))}),L.setupLights(),U!==null&&U.updateLights(L.state.lightsArray),Qt=this.localClippingEnabled,se=Wt.init(this.clippingPlanes,Qt),se===!0&&Wt.setGlobalState(this.clippingPlanes,K),U!==null&&le.render(L.state.shadowsArray,pt,K);const lt=new Set;return A.traverse(function(ct){if(!(ct.isMesh||ct.isPoints||ct.isLine||ct.isSprite))return;const Gt=ct.material;if(Gt)if(Array.isArray(Gt))for(let Yt=0;Yt<Gt.length;Yt++){const It=Gt[Yt];Tr(It,pt,K,ct),lt.add(It)}else Tr(Gt,pt,K,ct),lt.add(Gt)}),L=E.pop(),U!==null&&U.renderEnd(),lt},this.compileAsync=function(A,K,pt=null){const lt=this.compile(A,K,pt);return new Promise(ct=>{function Gt(){if(lt.forEach(function(Yt){const Jt=ft.get(Yt).currentProgram;(Jt===void 0||Jt.isReady())&&lt.delete(Yt)}),lt.size===0){ct(A);return}setTimeout(Gt,10)}He.get("KHR_parallel_shader_compile")!==null?Gt():setTimeout(Gt,10)})};let Va=null;function ma(A){Va&&Va(A)}function br(){ki.stop()}function Xa(){ki.start()}const ki=new lM;ki.setAnimationLoop(ma),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(A){Va=A,kt.setAnimationLoop(A),A===null?ki.stop():ki.start()},kt.addEventListener("sessionstart",br),kt.addEventListener("sessionend",Xa),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(A,K);const pt=kt.enabled===!0&&kt.isPresenting===!0,lt=P!==null&&($===null||pt)&&P.begin(b,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(K),K=kt.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,K,$),L=Ft.get(A,E.length),L.init(K),L.state.textureUnits=vt.getTextureUnits(),E.push(L),Nt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),re.setFromProjectionMatrix(Nt,ua,K.reversedDepth),Qt=this.localClippingEnabled,se=Wt.init(this.clippingPlanes,Qt),O=Ht.get(A,z.length),O.init(),z.push(O),kt.enabled===!0&&kt.isPresenting===!0){const Yt=b.xr.getDepthSensingMesh();Yt!==null&&So(Yt,K,-1/0,b.sortObjects)}So(A,K,0,b.sortObjects),O.finish(),U!==null&&U.updateLights(L.state.lightsArray),b.sortObjects===!0&&O.sort(_t,Ct),ve=kt.enabled===!1||kt.isPresenting===!1||kt.hasDepthSensing()===!1,ve&&pe.addToRenderList(O,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Wt.beginShadows();const ct=L.state.shadowsArray;if(le.render(ct,A,K),se===!0&&Wt.endShadows(),(lt&&P.hasRenderPass())===!1){const Yt=O.opaque,It=O.transmissive;if(L.setupLights(),K.isArrayCamera){const Jt=K.cameras;if(It.length>0)for(let $t=0,ue=Jt.length;$t<ue;$t++){const ge=Jt[$t];ss(Yt,It,A,ge)}ve&&pe.render(A);for(let $t=0,ue=Jt.length;$t<ue;$t++){const ge=Jt[$t];Mo(O,A,ge,ge.viewport)}}else It.length>0&&ss(Yt,It,A,K),ve&&pe.render(A),Mo(O,A,K)}$!==null&&W===0&&(vt.updateMultisampleRenderTarget($),vt.updateRenderTargetMipmap($)),lt&&P.end(b),A.isScene===!0&&A.onAfterRender(b,A,K),qt.resetDefaultState(),et=-1,ht=null,E.pop(),E.length>0?(L=E[E.length-1],vt.setTextureUnits(L.state.textureUnits),se===!0&&Wt.setGlobalState(b.clippingPlanes,L.state.camera)):L=null,z.pop(),z.length>0?O=z[z.length-1]:O=null,U!==null&&U.renderEnd()};function So(A,K,pt,lt){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)pt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(re)){lt&&Me.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Nt);const Yt=bt.update(A),It=A.material;It.visible&&O.push(A,Yt,It,pt,Me.z,null,K)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(re))){const Yt=bt.update(A),It=A.material;if(lt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Me.copy(A.boundingSphere.center)):(Yt.boundingSphere===null&&Yt.computeBoundingSphere(),Me.copy(Yt.boundingSphere.center)),Me.applyMatrix4(A.matrixWorld).applyMatrix4(Nt)),Array.isArray(It)){const Jt=Yt.groups;for(let $t=0,ue=Jt.length;$t<ue;$t++){const ge=Jt[$t],Zt=It[ge.materialIndex];Zt&&Zt.visible&&O.push(A,Yt,Zt,pt,Me.z,ge,K)}}else It.visible&&O.push(A,Yt,It,pt,Me.z,null,K)}}const Gt=A.children;for(let Yt=0,It=Gt.length;Yt<It;Yt++)So(Gt[Yt],K,pt,lt)}function Mo(A,K,pt,lt){const{opaque:ct,transmissive:Gt,transparent:Yt}=A;L.setupLightsView(pt),se===!0&&Wt.setGlobalState(b.clippingPlanes,pt),lt&&y.viewport(Mt.copy(lt)),ct.length>0&&qi(ct,K,pt),Gt.length>0&&qi(Gt,K,pt),Yt.length>0&&qi(Yt,K,pt),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ss(A,K,pt,lt){if((pt.isScene===!0?pt.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[lt.id]===void 0){const Zt=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[lt.id]=new Xi(1,1,{generateMipmaps:!0,type:Zt?ha:_i,minFilter:jr,samples:Math.max(4,F.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Pe.workingColorSpace})}const Gt=L.state.transmissionRenderTarget[lt.id],Yt=lt.viewport||Mt;Gt.setSize(Yt.z*b.transmissionResolutionScale,Yt.w*b.transmissionResolutionScale);const It=b.getRenderTarget(),Jt=b.getActiveCubeFace(),$t=b.getActiveMipmapLevel();b.setRenderTarget(Gt),b.getClearColor(k),mt=b.getClearAlpha(),mt<1&&b.setClearColor(16777215,.5),b.clear(),ve&&pe.render(pt);const ue=b.toneMapping;b.toneMapping=fa;const ge=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),L.setupLightsView(lt),se===!0&&Wt.setGlobalState(b.clippingPlanes,lt),qi(A,pt,lt),vt.updateMultisampleRenderTarget(Gt),vt.updateRenderTargetMipmap(Gt),He.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ae=0,Ee=K.length;Ae<Ee;Ae++){const Je=K[Ae],{object:ke,geometry:Sn,material:Vt,group:cn}=Je;if(Vt.side===Pa&&ke.layers.test(lt.layers)){const Oe=Vt.side;Vt.side=ii,Vt.needsUpdate=!0,kl(ke,pt,lt,Sn,Vt,cn),Vt.side=Oe,Vt.needsUpdate=!0,Zt=!0}}Zt===!0&&(vt.updateMultisampleRenderTarget(Gt),vt.updateRenderTargetMipmap(Gt))}b.setRenderTarget(It,Jt,$t),b.setClearColor(k,mt),ge!==void 0&&(lt.viewport=ge),b.toneMapping=ue}function qi(A,K,pt){const lt=K.isScene===!0?K.overrideMaterial:null;for(let ct=0,Gt=A.length;ct<Gt;ct++){const Yt=A[ct],{object:It,geometry:Jt,group:$t}=Yt;let ue=Yt.material;ue.allowOverride===!0&&lt!==null&&(ue=lt),It.layers.test(pt.layers)&&kl(It,K,pt,Jt,ue,$t)}}function kl(A,K,pt,lt,ct,Gt){U!==null&&ct.isNodeMaterial&&U.setObject(A,ct),A.onBeforeRender(b,K,pt,lt,ct,Gt),A.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ct.onBeforeRender(b,K,pt,lt,A,Gt),ct.transparent===!0&&ct.side===Pa&&ct.forceSinglePass===!1?(ct.side=ii,ct.needsUpdate=!0,b.renderBufferDirect(pt,K,lt,ct,A,Gt),ct.side=Ni,ct.needsUpdate=!0,b.renderBufferDirect(pt,K,lt,ct,A,Gt),ct.side=Pa):b.renderBufferDirect(pt,K,lt,ct,A,Gt),A.onAfterRender(b,K,pt,lt,ct,Gt)}function Ar(A,K,pt){K.isScene!==!0&&(K=ze);const lt=ft.get(A),ct=L.state.lights,Gt=L.state.shadowsArray,Yt=ct.state.version,It=Lt.getParameters(A,ct.state,Gt,K,pt,L.state.lightProbeGridArray),Jt=Lt.getProgramCacheKey(It);let $t=lt.programs;lt.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?K.environment:null,lt.fog=K.fog;const ue=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;lt.envMap=wt.get(A.envMap||lt.environment,ue),lt.envMapRotation=lt.environment!==null&&A.envMap===null?K.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",xi),$t=new Map,lt.programs=$t);let ge=$t.get(Jt);if(ge!==void 0){if(lt.currentProgram===ge&&lt.lightsStateVersion===Yt)return Eo(A,It),ge}else It.uniforms=Lt.getUniforms(A),U!==null&&A.isNodeMaterial&&U.build(A,pt,It),A.onBeforeCompile(It,b),ge=Lt.acquireProgram(It,Jt),$t.set(Jt,ge),lt.uniforms=It.uniforms;const Zt=lt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Zt.clippingPlanes=Wt.uniform),Eo(A,It),lt.needsLights=Wl(A),lt.lightsStateVersion=Yt,lt.needsLights&&(Zt.ambientLightColor.value=ct.state.ambient,Zt.lightProbe.value=ct.state.probe,Zt.sunLights.value=ct.state.sun,Zt.sunLightShadows.value=ct.state.sunShadow,Zt.directionalLights.value=ct.state.directional,Zt.directionalLightShadows.value=ct.state.directionalShadow,Zt.spotLights.value=ct.state.spot,Zt.spotLightShadows.value=ct.state.spotShadow,Zt.rectAreaLights.value=ct.state.rectArea,Zt.ltc_1.value=ct.state.rectAreaLTC1,Zt.ltc_2.value=ct.state.rectAreaLTC2,Zt.pointLights.value=ct.state.point,Zt.pointLightShadows.value=ct.state.pointShadow,Zt.hemisphereLights.value=ct.state.hemi,Zt.sunShadowMatrix.value=ct.state.sunShadowMatrix,Zt.sunShadowCascade.value=ct.state.sunShadowCascade,Zt.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,Zt.spotLightMatrix.value=ct.state.spotLightMatrix,Zt.spotLightMap.value=ct.state.spotLightMap,Zt.pointShadowMatrix.value=ct.state.pointShadowMatrix),lt.lightProbeGrid=L.state.lightProbeGridArray.length>0,lt.currentProgram=ge,lt.uniformsList=null,ge}function yo(A){if(A.uniformsList===null){const K=A.currentProgram.getUniforms();A.uniformsList=Gu.seqWithValue(K.seq,A.uniforms)}return A.uniformsList}function Eo(A,K){const pt=ft.get(A);pt.outputColorSpace=K.outputColorSpace,pt.batching=K.batching,pt.batchingColor=K.batchingColor,pt.instancing=K.instancing,pt.instancingColor=K.instancingColor,pt.instancingMorph=K.instancingMorph,pt.skinning=K.skinning,pt.morphTargets=K.morphTargets,pt.morphNormals=K.morphNormals,pt.morphColors=K.morphColors,pt.morphTargetsCount=K.morphTargetsCount,pt.numClippingPlanes=K.numClippingPlanes,pt.numIntersection=K.numClipIntersection,pt.vertexAlphas=K.vertexAlphas,pt.vertexTangents=K.vertexTangents,pt.toneMapping=K.toneMapping}function To(A,K){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(K.matrixWorld);for(let pt=0,lt=A.length;pt<lt;pt++){const ct=A[pt];if(ct.texture!==null&&ct.boundingBox.containsPoint(w))return ct}return null}function bo(A,K,pt,lt,ct){K.isScene!==!0&&(K=ze),vt.resetTextureUnits();const Gt=K.fog,Yt=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial?K.environment:null,It=$===null?b.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Pe.workingColorSpace,Jt=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial&&!lt.envMap||lt.isMeshPhongMaterial&&!lt.envMap,$t=wt.get(lt.envMap||Yt,Jt),ue=lt.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,ge=!!pt.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Zt=!!pt.morphAttributes.position,Ae=!!pt.morphAttributes.normal,Ee=!!pt.morphAttributes.color;let Je=fa;lt.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Je=b.toneMapping);const ke=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,Sn=ke!==void 0?ke.length:0,Vt=ft.get(lt),cn=L.state.lights;if(se===!0&&(Qt===!0||A!==ht)){const De=A===ht&&lt.id===et;Wt.setState(lt,A,De)}let Oe=!1;lt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==cn.state.version||Vt.outputColorSpace!==It||ct.isBatchedMesh&&Vt.batching===!1||!ct.isBatchedMesh&&Vt.batching===!0||ct.isBatchedMesh&&Vt.batchingColor===!0&&ct._colorsTexture===null||ct.isBatchedMesh&&Vt.batchingColor===!1&&ct._colorsTexture!==null||ct.isInstancedMesh&&Vt.instancing===!1||!ct.isInstancedMesh&&Vt.instancing===!0||ct.isSkinnedMesh&&Vt.skinning===!1||!ct.isSkinnedMesh&&Vt.skinning===!0||ct.isInstancedMesh&&Vt.instancingColor===!0&&ct.instanceColor===null||ct.isInstancedMesh&&Vt.instancingColor===!1&&ct.instanceColor!==null||ct.isInstancedMesh&&Vt.instancingMorph===!0&&ct.morphTexture===null||ct.isInstancedMesh&&Vt.instancingMorph===!1&&ct.morphTexture!==null||Vt.envMap!==$t||lt.fog===!0&&Vt.fog!==Gt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Wt.numPlanes||Vt.numIntersection!==Wt.numIntersection)||Vt.vertexAlphas!==ue||Vt.vertexTangents!==ge||Vt.morphTargets!==Zt||Vt.morphNormals!==Ae||Vt.morphColors!==Ee||Vt.toneMapping!==Je||Vt.morphTargetsCount!==Sn||!!Vt.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Oe=!0):(Oe=!0,Vt.__version=lt.version);let kn=Vt.currentProgram;Oe===!0&&(kn=Ar(lt,K,ct),U&&lt.isNodeMaterial&&U.onUpdateProgram(lt,kn,Vt));let si=!1,Wi=!1,Te=!1;const Ve=kn.getUniforms(),en=Vt.uniforms;if(y.useProgram(kn.program)&&(si=!0,Wi=!0,Te=!0),lt.id!==et&&(et=lt.id,Wi=!0),Vt.needsLights){const De=To(L.state.lightProbeGridArray,ct);Vt.lightProbeGrid!==De&&(Vt.lightProbeGrid=De,Wi=!0)}if(si||ht!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ve.setValue(Y,"projectionMatrix",A.projectionMatrix),Ve.setValue(Y,"viewMatrix",A.matrixWorldInverse);const un=Ve.map.cameraPosition;un!==void 0&&un.setValue(Y,ne.setFromMatrixPosition(A.matrixWorld)),F.logarithmicDepthBuffer&&Ve.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Ve.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),ht!==A&&(ht=A,Wi=!0,Te=!0)}if(Vt.needsLights&&(cn.state.sunShadowMap.length>0&&Ve.setValue(Y,"sunShadowMap",cn.state.sunShadowMap,vt),cn.state.directionalShadowMap.length>0&&Ve.setValue(Y,"directionalShadowMap",cn.state.directionalShadowMap,vt),cn.state.spotShadowMap.length>0&&Ve.setValue(Y,"spotShadowMap",cn.state.spotShadowMap,vt),cn.state.pointShadowMap.length>0&&Ve.setValue(Y,"pointShadowMap",cn.state.pointShadowMap,vt)),ct.isSkinnedMesh){Ve.setOptional(Y,ct,"bindMatrix"),Ve.setOptional(Y,ct,"bindMatrixInverse");const De=ct.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Ve.setValue(Y,"boneTexture",De.boneTexture,vt))}ct.isBatchedMesh&&(Ve.setOptional(Y,ct,"batchingTexture"),Ve.setValue(Y,"batchingTexture",ct._matricesTexture,vt),Ve.setOptional(Y,ct,"batchingIdTexture"),Ve.setValue(Y,"batchingIdTexture",ct._indirectTexture,vt),Ve.setOptional(Y,ct,"batchingColorTexture"),ct._colorsTexture!==null&&Ve.setValue(Y,"batchingColorTexture",ct._colorsTexture,vt));const oi=pt.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&j.update(ct,pt,kn),(Wi||Vt.receiveShadow!==ct.receiveShadow)&&(Vt.receiveShadow=ct.receiveShadow,Ve.setValue(Y,"receiveShadow",ct.receiveShadow)),(lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial)&&lt.envMap===null&&K.environment!==null&&(en.envMapIntensity.value=K.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=NC()),Wi){if(Ve.setValue(Y,"toneMappingExposure",b.toneMappingExposure),Vt.needsLights&&ql(en,Te),Gt&&lt.fog===!0&&ie.refreshFogUniforms(en,Gt),ie.refreshMaterialUniforms(en,lt,at,H,L.state.transmissionRenderTarget[A.id]),Vt.needsLights&&Vt.lightProbeGrid){const De=Vt.lightProbeGrid;en.probesSH.value=De.texture,en.probesMin.value.copy(De.boundingBox.min),en.probesMax.value.copy(De.boundingBox.max),en.probesResolution.value.copy(De.resolution)}Gu.upload(Y,yo(Vt),en,vt)}if(lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Gu.upload(Y,yo(Vt),en,vt),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Ve.setValue(Y,"center",ct.center),Ve.setValue(Y,"modelViewMatrix",ct.modelViewMatrix),Ve.setValue(Y,"normalMatrix",ct.normalMatrix),Ve.setValue(Y,"modelMatrix",ct.matrixWorld),lt.uniformsGroups!==void 0){const De=lt.uniformsGroups;for(let un=0,ga=De.length;un<ga;un++){const Yl=De[un];Rt.update(Yl,kn),Rt.bind(Yl,kn)}}return kn}function ql(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.sunLights.needsUpdate=K,A.sunLightShadows.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function Wl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,K,pt){const lt=ft.get(A);lt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),ft.get(A.texture).__webglTexture=K,ft.get(A.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:pt,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,K){const pt=ft.get(A);pt.__webglFramebuffer=K,pt.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(A,K=0,pt=0){$=A,q=K,W=pt;let lt=null,ct=!1,Gt=!1;if(A){const It=ft.get(A);if(It.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(Y.FRAMEBUFFER,It.__webglFramebuffer),Mt.copy(A.viewport),Bt.copy(A.scissor),Dt=A.scissorTest,y.viewport(Mt),y.scissor(Bt),y.setScissorTest(Dt),et=-1;return}else if(It.__webglFramebuffer===void 0)vt.setupRenderTarget(A);else if(It.__hasExternalTextures)vt.rebindTextures(A,ft.get(A.texture).__webglTexture,ft.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ue=A.depthTexture;if(It.__boundDepthTexture!==ue){if(ue!==null&&ft.has(ue)&&(A.width!==ue.image.width||A.height!==ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");vt.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Gt=!0);const $t=ft.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[K])?lt=$t[K][pt]:lt=$t[K],ct=!0):A.samples>0&&vt.useMultisampledRTT(A)===!1?lt=ft.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?lt=$t[pt]:lt=$t,Mt.copy(A.viewport),Bt.copy(A.scissor),Dt=A.scissorTest}else Mt.copy(ot).multiplyScalar(at).floor(),Bt.copy(At).multiplyScalar(at).floor(),Dt=ae;if(pt!==0&&(lt=X),y.bindFramebuffer(Y.FRAMEBUFFER,lt)&&y.drawBuffers(A,lt),y.viewport(Mt),y.scissor(Bt),y.setScissorTest(Dt),ct){const It=ft.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+K,It.__webglTexture,pt)}else if(Gt){const It=K;for(let Jt=0;Jt<A.textures.length;Jt++){const $t=ft.get(A.textures[Jt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Jt,$t.__webglTexture,pt,It)}}else if(A!==null&&pt!==0){const It=ft.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,It.__webglTexture,pt)}et=-1};function Si(A){const K=ft.get(A);return(K.__readFormat!==A.format||K.__readType!==A.type)&&(K.__readFormat=A.format,K.__readType=A.type,K.__formatReadable=F.textureFormatReadable(A.format),K.__typeReadable=F.textureTypeReadable(A.type)),K}this.readRenderTargetPixels=function(A,K,pt,lt,ct,Gt,Yt,It=0){if(!(A&&A.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Yt!==void 0&&(Jt=Jt[Yt]),Jt){y.bindFramebuffer(Y.FRAMEBUFFER,Jt);try{const $t=A.textures[It],ue=$t.format,ge=$t.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+It);const Zt=Si($t);if(Zt.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Zt.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-lt&&pt>=0&&pt<=A.height-ct&&Y.readPixels(K,pt,lt,ct,Pt.convert(ue),Pt.convert(ge),Gt)}finally{const $t=$!==null?ft.get($).__webglFramebuffer:null;y.bindFramebuffer(Y.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(A,K,pt,lt,ct,Gt,Yt,It=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Yt!==void 0&&(Jt=Jt[Yt]),Jt)if(K>=0&&K<=A.width-lt&&pt>=0&&pt<=A.height-ct){y.bindFramebuffer(Y.FRAMEBUFFER,Jt);const $t=A.textures[It],ue=$t.format,ge=$t.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+It);const Zt=Si($t);if(Zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ae),Y.bufferData(Y.PIXEL_PACK_BUFFER,Gt.byteLength,Y.STREAM_READ),Y.readPixels(K,pt,lt,ct,Pt.convert(ue),Pt.convert(ge),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const Ee=$!==null?ft.get($).__webglFramebuffer:null;y.bindFramebuffer(Y.FRAMEBUFFER,Ee);const Je=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await J1(Y,Je,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ae),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Gt),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Ae),Y.deleteSync(Je),Gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,K=null,pt=0){const lt=Math.pow(2,-pt),ct=Math.floor(A.image.width*lt),Gt=Math.floor(A.image.height*lt),Yt=K!==null?K.x:0,It=K!==null?K.y:0;vt.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,pt,0,0,Yt,It,ct,Gt),y.unbindTexture()},this.copyTextureToTexture=function(A,K,pt=null,lt=null,ct=0,Gt=0){let Yt,It,Jt,$t,ue,ge,Zt,Ae,Ee;const Je=A.isCompressedTexture?A.mipmaps[Gt]:A.image;if(pt!==null)Yt=pt.max.x-pt.min.x,It=pt.max.y-pt.min.y,Jt=pt.isBox3?pt.max.z-pt.min.z:1,$t=pt.min.x,ue=pt.min.y,ge=pt.isBox3?pt.min.z:0;else{const en=Math.pow(2,-ct);Yt=Math.floor(Je.width*en),It=Math.floor(Je.height*en),A.isDataArrayTexture?Jt=Je.depth:A.isData3DTexture?Jt=Math.floor(Je.depth*en):Jt=1,$t=0,ue=0,ge=0}lt!==null?(Zt=lt.x,Ae=lt.y,Ee=lt.z):(Zt=0,Ae=0,Ee=0);const ke=Pt.convert(K.format),Sn=Pt.convert(K.type);let Vt;K.isData3DTexture?(vt.setTexture3D(K,0),Vt=Y.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(vt.setTexture2DArray(K,0),Vt=Y.TEXTURE_2D_ARRAY):(vt.setTexture2D(K,0),Vt=Y.TEXTURE_2D),y.activeTexture(Y.TEXTURE0),y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,K.flipY),y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),y.pixelStorei(Y.UNPACK_ALIGNMENT,K.unpackAlignment);const cn=y.getParameter(Y.UNPACK_ROW_LENGTH),Oe=y.getParameter(Y.UNPACK_IMAGE_HEIGHT),kn=y.getParameter(Y.UNPACK_SKIP_PIXELS),si=y.getParameter(Y.UNPACK_SKIP_ROWS),Wi=y.getParameter(Y.UNPACK_SKIP_IMAGES);y.pixelStorei(Y.UNPACK_ROW_LENGTH,Je.width),y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Je.height),y.pixelStorei(Y.UNPACK_SKIP_PIXELS,$t),y.pixelStorei(Y.UNPACK_SKIP_ROWS,ue),y.pixelStorei(Y.UNPACK_SKIP_IMAGES,ge);const Te=A.isDataArrayTexture||A.isData3DTexture,Ve=K.isDataArrayTexture||K.isData3DTexture;if(A.isDepthTexture){const en=ft.get(A),oi=ft.get(K),De=ft.get(en.__renderTarget),un=ft.get(oi.__renderTarget);y.bindFramebuffer(Y.READ_FRAMEBUFFER,De.__webglFramebuffer),y.bindFramebuffer(Y.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let ga=0;ga<Jt;ga++)Te&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ft.get(A).__webglTexture,ct,ge+ga),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ft.get(K).__webglTexture,Gt,Ee+ga)),Y.blitFramebuffer($t,ue,Yt,It,Zt,Ae,Yt,It,Y.DEPTH_BUFFER_BIT,Y.NEAREST);y.bindFramebuffer(Y.READ_FRAMEBUFFER,null),y.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ct!==0||A.isRenderTargetTexture||ft.has(A)){const en=ft.get(A),oi=ft.get(K);y.bindFramebuffer(Y.READ_FRAMEBUFFER,B),y.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Z);for(let De=0;De<Jt;De++)Te?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,en.__webglTexture,ct,ge+De):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,en.__webglTexture,ct),Ve?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,oi.__webglTexture,Gt,Ee+De):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,oi.__webglTexture,Gt),ct!==0?Y.blitFramebuffer($t,ue,Yt,It,Zt,Ae,Yt,It,Y.COLOR_BUFFER_BIT,Y.NEAREST):Ve?Y.copyTexSubImage3D(Vt,Gt,Zt,Ae,Ee+De,$t,ue,Yt,It):Y.copyTexSubImage2D(Vt,Gt,Zt,Ae,$t,ue,Yt,It);y.bindFramebuffer(Y.READ_FRAMEBUFFER,null),y.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Ve?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(Vt,Gt,Zt,Ae,Ee,Yt,It,Jt,ke,Sn,Je.data):K.isCompressedArrayTexture?Y.compressedTexSubImage3D(Vt,Gt,Zt,Ae,Ee,Yt,It,Jt,ke,Je.data):Y.texSubImage3D(Vt,Gt,Zt,Ae,Ee,Yt,It,Jt,ke,Sn,Je):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Gt,Zt,Ae,Yt,It,ke,Sn,Je.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Gt,Zt,Ae,Je.width,Je.height,ke,Je.data):Y.texSubImage2D(Y.TEXTURE_2D,Gt,Zt,Ae,Yt,It,ke,Sn,Je);y.pixelStorei(Y.UNPACK_ROW_LENGTH,cn),y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Oe),y.pixelStorei(Y.UNPACK_SKIP_PIXELS,kn),y.pixelStorei(Y.UNPACK_SKIP_ROWS,si),y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Wi),Gt===0&&K.generateMipmaps&&Y.generateMipmap(Vt),y.unbindTexture()},this.initRenderTarget=function(A){ft.get(A).__webglFramebuffer===void 0&&vt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?vt.setTextureCube(A,0):A.isData3DTexture?vt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?vt.setTexture2DArray(A,0):vt.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){q=0,W=0,$=null,y.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Pe._getDrawingBufferColorSpace(e),i.unpackColorSpace=Pe._getUnpackColorSpace()}}const co=Math.PI/180,em=3,gM=7,UC=.98,Kx=10,LC=85,vi=o=>1-(1-o)**3,_M=o=>new Qe().setFromEuler(new Qn(o.x*co,o.y*co,o.z*co,"XYZ")),Al=o=>(o%360+540)%360-180,vM=o=>{const e=new J(o.x,o.y,o.z),i=e.length();return i<1e-9?new J(0,1,0):(e.divideScalar(i),o.w<0&&e.negate(),e)},OC=(o,e)=>{const i=u=>_M({x:o.x+(e.x-o.x)*vi(u),y:o.y+(e.y-o.y)*vi(u),z:o.z+(e.z-o.z)*vi(u)}),r=i(UC),l=i(1);return vM(l.multiply(r.clone().invert()))},Xl=(o,e,i)=>{const r=_M(o),l=vM(r.clone().invert().multiply(e)).applyQuaternion(r).normalize(),u=Math.random()*Math.PI,d=new Qe().setFromAxisAngle(l,-u).multiply(e),h=new Qn().setFromQuaternion(d,"XYZ"),p={x:h.x/co,y:h.y/co,z:h.z/co},m=[];for(let _=em;_<=gM;_++){const v=i-_;if(!(v<1))for(const T of[1,-1])for(const C of[1,-1])for(const I of[1,-1]){const M={x:o.x+T*360*_,y:o.y+C*360*v,z:o.z+I*360*i};M.x+=Al(p.x-M.x),M.y+=Al(p.y-M.y),M.z+=Al(p.z-M.z);const S=OC(o,M).dot(l);m.push({rotation:M,dot:S})}}const x=m.filter(_=>_.dot>0);return x.length>0?x[Math.floor(Math.random()*x.length)].rotation:m.reduce((_,v)=>v.dot>_.dot?v:_).rotation},PC=(o,e,i)=>{const r=em+Math.floor(Math.random()*(gM-em+1)),l=i-r,u=Math.random()<.5?-1:1,d=Math.random()<.5?-1:1,h=T=>T*(Kx+Math.random()*(LC-Kx)),p=h(u),m=h(d),x={x:o.x+u*360*r,y:o.y+d*360*l},_={x:x.x+Al(e.x-x.x-p),y:x.y+Al(e.y-x.y-m)},v={x:_.x+p,y:_.y+m};return{spun:_,landed:v}},as={red:{hex:14034996,cssTop:[214,40,52],cssBottom:[140,18,28],label:"#ffffff"},green:{hex:1096065,cssTop:[16,185,129],cssBottom:[5,150,105],label:"#ecfdf5"},white:{hex:15790320,cssTop:[240,240,240],cssBottom:[200,200,200],label:"#111827"},black:{hex:1052691,cssTop:[16,16,19],cssBottom:[3,3,5],label:"#ffffff"},blue:{hex:1785819,cssTop:[27,63,219],cssBottom:[17,38,140],label:"#ffffff"},yellow:{hex:16761856,cssTop:[255,196,0],cssBottom:[214,152,0],label:"#111827"}},IC=[4,6,8,10,12,20],zC=["red","green","white","black","blue","yellow"],up={sides:6,color:"red",translucent:!0},FC=.87,xo=o=>o?FC:1;function BC(){const o=new URLSearchParams(window.location.search),e=Number(o.get("s")),i=IC.includes(e)?e:up.sides,r=o.get("c")?.toLowerCase(),l=r!==void 0&&zC.includes(r)?r:up.color,u=(o.get("translucent")??o.get("t"))?.toLowerCase(),d=u==="true"?!0:u==="false"?!1:up.translucent;return{sides:i,color:l,translucent:d}}const Qx={1:{name:"front",orientation:{x:0,y:0}},2:{name:"top",orientation:{x:-90,y:0}},3:{name:"right",orientation:{x:0,y:-90}},4:{name:"left",orientation:{x:0,y:90}},5:{name:"bottom",orientation:{x:90,y:0}},6:{name:"back",orientation:{x:0,y:180}}},HC={1:[[2,2]],2:[[1,1],[3,3]],3:[[1,1],[2,2],[3,3]],4:[[1,1],[1,3],[3,1],[3,3]],5:[[1,1],[1,3],[2,2],[3,1],[3,3]],6:[[1,1],[1,3],[2,1],[2,3],[3,1],[3,3]]},Jx=65,jx=.5,GC=10,fp=1500,$x=750,VC=260,tS=(o,e,i)=>Math.min(i,Math.max(e,o)),eS=o=>Math.round(o*10)/10;function XC({value:o}){return jt.jsx(jt.Fragment,{children:HC[o].map(([e,i])=>jt.jsx("span",{className:"pip",style:{gridRow:e,gridColumn:i}},`${e}-${i}`))})}function kC({color:o="red",translucent:e=!0}){const[i,r]=xt.useState({x:0,y:0}),[l,u]=xt.useState({ms:0,easing:"linear"}),[d,h]=xt.useState(!1),[p,m]=xt.useState(!1),[x,_]=xt.useState(null),[v,T]=xt.useState(null),C=xt.useRef(null),I=xt.useRef(i),M=xt.useRef({x:0,y:0}),S=xt.useRef(null),N=xt.useRef(null),V=xt.useRef([]);I.current=i;const w=as[o],O=xo(e),L=`rgb(${w.cssTop.join(" ")} / ${O})`,z=`rgb(${w.cssBottom.join(" ")} / ${O})`,E=xt.useCallback((X,B,Z="ease-out")=>{u({ms:B,easing:Z}),r(X)},[]),P=xt.useCallback(async()=>{h(!0),_(null),T(null);try{const X=await _o(6),B=Qx[X],Z=I.current,{spun:q,landed:W}=PC(Z,B.orientation,GC);E(q,fp,"cubic-bezier(0.4, 0, 0.35, 1)"),V.current.push(setTimeout(()=>{M.current=W,E(W,$x,"cubic-bezier(0.22, 1, 0.36, 1)")},fp)),V.current.push(setTimeout(()=>{h(!1),_(X)},fp+$x))}catch(X){h(!1),T(X instanceof Error?X.message:"Roll failed.")}},[E]),b=xt.useCallback(X=>{if(d)return;const B=X.currentTarget.getBoundingClientRect();S.current={centerX:B.left+B.width/2,centerY:B.top+B.height/2,halfWidth:B.width/2,halfHeight:B.height/2,nx:0,ny:0},X.currentTarget.setPointerCapture(X.pointerId),m(!0),u({ms:0,easing:"linear"})},[d]),D=xt.useCallback(X=>{const B=S.current;B&&(B.nx=tS((X.clientX-B.centerX)/B.halfWidth,-1,1),B.ny=tS((X.clientY-B.centerY)/B.halfHeight,-1,1),!N.current&&(N.current=requestAnimationFrame(()=>{N.current=null;const Z=M.current;r({x:eS(Z.x-B.ny*Jx),y:eS(Z.y+B.nx*Jx)})})))},[]),U=xt.useCallback(()=>{const X=S.current;if(!X)return;S.current=null,m(!1),N.current&&(cancelAnimationFrame(N.current),N.current=null),Math.abs(X.nx)>=jx||Math.abs(X.ny)>=jx?P():E(M.current,VC,"cubic-bezier(0.34, 1.3, 0.64, 1)")},[E,P]);return xt.useEffect(()=>{const X=V.current;return()=>{X.forEach(clearTimeout),N.current&&cancelAnimationFrame(N.current)}},[]),jt.jsxs("div",{ref:C,className:"stage",style:{"--face-top":L,"--face-bottom":z,"--die-fg":w.label},onPointerDown:b,onPointerMove:D,onPointerUp:U,onPointerCancel:U,children:[jt.jsx("div",{className:"scene",children:jt.jsx("div",{className:`cube${d?" is-rolling":""}${p?" is-dragging":""}`,style:{transform:`translateZ(0) rotateX(${i.x}deg) rotateY(${i.y}deg)`,transitionDuration:`${l.ms}ms`,transitionTimingFunction:l.easing},children:Object.entries(Qx).map(([X,B])=>jt.jsx("div",{className:`face face--${B.name}`,"data-value":X,children:jt.jsx("div",{className:"pips",children:jt.jsx(XC,{value:Number(X)})})},X))})}),jt.jsx("p",{className:"hint",children:d?"Rolling...":v||(x?`You rolled ${x}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const nS=65,iS=.5,qC=10,WC=1500,YC=750,ZC=260,sa=Math.PI/180,aS=.8,Vu=[[.981495,.981495,.981495],[.981495,-.981495,-.981495],[-.981495,.981495,-.981495],[-.981495,-.981495,.981495]],la=[[1,3,2],[0,2,3],[0,3,1],[0,1,2]],nm=[1,2,3,4],rS=[[-.122687,-.736122,-.122687],[-.736122,-.122687,-.122687],[-.122687,-.122687,-.736122],[-.122687,.736122,.122687],[-.736122,.122687,.122687],[-.122687,.122687,.736122],[.122687,-.122687,.736122],[.122687,-.736122,.122687],[.736122,-.122687,.122687],[.736122,.122687,-.122687],[.122687,.122687,-.736122],[.122687,.736122,-.122687]],KC=[180,180,0,180,0,180,0,180,180,0,180,180],sS={x:-177.2356,y:55.25,z:45},oS=(o,e,i)=>Math.min(i,Math.max(e,o)),xM=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],x=Math.sqrt(h*h+p*p+m*m),_=new J(h/x,p/x,m/x);return _.dot(e)<0&&_.negate(),_},SM=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new J(e,i,r)},im=la.map(o=>{const e=o.map(r=>Vu[r]),i=SM(e);return{normal:xM(e,i),center:i}}),QC=(o,e)=>{const i=la[o][e],r=la[o][(e+1)%3];for(let l=0;l<la.length;l++)if(l!==o&&la[l].includes(i)&&la[l].includes(r))return nm[l];return nm[o]},JC=o=>{const{normal:e}=im[o],i=new Qe().setFromUnitVectors(e,new J(0,-1,0)),r=(o+1)%la.length,l=im[r].normal.clone().applyQuaternion(i),u=Math.atan2(l.x,l.z);return new Qe().setFromAxisAngle(new J(0,1,0),-u).multiply(i)},jC="#ffffff",lS=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const l=new Il(i);l.colorSpace=Pn;const u=new is({map:l,transparent:!0,side:Ni,depthWrite:!1});return new yn(new Ga(aS,aS),u)},$C=o=>{const e=new Qn().setFromQuaternion(o,"XYZ");return{x:e.x/sa,y:e.y/sa,z:e.z/sa}};function t2({color:o="red",translucent:e=!0}){const i=xt.useRef(null),r=xt.useRef(null),l=xt.useRef(null),u=xt.useRef(null),d=xt.useRef(null),h=xt.useRef({...sS}),p=xt.useRef({...sS}),m=xt.useRef(null),x=xt.useRef(!1),[_,v]=xt.useState(!1),[T,C]=xt.useState(!1),[I,M]=xt.useState(null),[S,N]=xt.useState(null),V=xt.useCallback(b=>{h.current=b,r.current?.rotation.set(b.x*sa,b.y*sa,b.z*sa)},[]),w=xt.useCallback((b,D)=>{d.current&&cancelAnimationFrame(d.current);const U={...h.current},X=performance.now();return new Promise(B=>{const Z=q=>{const W=Math.min((q-X)/D,1),$=vi(W);V({x:U.x+(b.x-U.x)*$,y:U.y+(b.y-U.y)*$,z:U.z+(b.z-U.z)*$}),W<1?d.current=requestAnimationFrame(Z):(d.current=null,B())};d.current=requestAnimationFrame(Z)})},[V]),O=xt.useCallback((b,D)=>{d.current&&cancelAnimationFrame(d.current);const U=r.current;if(!U)return Promise.resolve();const X=U.quaternion.clone(),B=performance.now();return new Promise(Z=>{const q=W=>{const $=Math.min((W-B)/D,1);U.quaternion.slerpQuaternions(X,b,vi($)),h.current=$C(U.quaternion),$<1?d.current=requestAnimationFrame(q):(d.current=null,Z())};d.current=requestAnimationFrame(q)})},[]),L=xt.useCallback(async()=>{x.current=!0,v(!0),M(null),N(null);try{const b=await _o(4),D=nm.indexOf(b),U=JC(D),X=h.current,B=Xl(X,U,qC);await w(B,WC),await O(U,YC),p.current=h.current,v(!1),x.current=!1,M(b)}catch(b){v(!1),x.current=!1,N(b instanceof Error?b.message:"Roll failed.")}},[O,w]),z=xt.useCallback(b=>{if(x.current)return;const D=b.currentTarget.getBoundingClientRect();m.current={centerX:D.left+D.width/2,centerY:D.top+D.height/2,halfWidth:D.width/2,halfHeight:D.height/2,nx:0,ny:0},b.currentTarget.setPointerCapture(b.pointerId),C(!0)},[]),E=xt.useCallback(b=>{const D=m.current;!D||x.current||(D.nx=oS((b.clientX-D.centerX)/D.halfWidth,-1,1),D.ny=oS((b.clientY-D.centerY)/D.halfHeight,-1,1),!u.current&&(u.current=requestAnimationFrame(()=>{u.current=null;const U=p.current;V({x:U.x-D.ny*nS,y:U.y+D.nx*nS,z:U.z})})))},[V]),P=xt.useCallback(()=>{const b=m.current;if(!b)return;m.current=null,C(!1),u.current&&(cancelAnimationFrame(u.current),u.current=null),Math.abs(b.nx)>=iS||Math.abs(b.ny)>=iS?L():w(p.current,ZC)},[w,L]);return xt.useEffect(()=>{const b=i.current;if(!b)return;const D=new Ll,U=new Gn(28,1,.1,100);U.position.set(0,0,7),U.lookAt(0,0,0);const X=new Vl({alpha:!0,antialias:!0});X.setPixelRatio(Math.min(window.devicePixelRatio,2)),X.setClearColor(0,0),b.appendChild(X.domElement);const B=new ai,Z=[],q=[];for(const gt of la){const H=gt.map(Y=>Vu[Y]),at=SM(H),_t=xM(H,at),Ct=_t.x,ot=_t.y,At=_t.z,[ae,re,se]=H,Qt=[re[0]-ae[0],re[1]-ae[1],re[2]-ae[2]],Nt=[se[0]-ae[0],se[1]-ae[1],se[2]-ae[2]],ne=Qt[1]*Nt[2]-Qt[2]*Nt[1],Me=Qt[2]*Nt[0]-Qt[0]*Nt[2],ze=Qt[0]*Nt[1]-Qt[1]*Nt[0],he=ne*at.x+Me*at.y+ze*at.z>=0?H:[...H].reverse();for(let Y=1;Y<he.length-1;Y++)Z.push(...he[0],...he[Y],...he[Y+1]),q.push(Ct,ot,At,Ct,ot,At,Ct,ot,At)}B.setAttribute("position",new xn(Z,3)),B.setAttribute("normal",new xn(q,3));const W=as[o],$=xo(e),et=new yn(B,new Fl({color:W.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:$,depthWrite:!e}));et.rotation.set(h.current.x*sa,h.current.y*sa,h.current.z*sa);const ht=new Qe().setFromAxisAngle(new J(0,1,0),Math.PI),Mt=()=>{im.forEach(({normal:gt,center:H},at)=>{for(let _t=0;_t<3;_t++){const Ct=at*3+_t,ot=QC(at,_t),At=la[at][_t],ae=la[at][(_t+1)%3],re=new J().addVectors(new J(...Vu[At]),new J(...Vu[ae])).multiplyScalar(.5),se=H.clone().sub(re).normalize(),Qt=new J().crossVectors(se,gt),Nt=new Qe().setFromRotationMatrix(new tn().makeBasis(Qt,se,gt)),ne=new Qe().setFromAxisAngle(new J(0,0,1),KC[Ct]*sa),Me=Nt.multiply(ne),ze=lS(ot,W.label);ze&&(ze.renderOrder=1,ze.position.copy(new J(...rS[Ct])).addScaledVector(gt,.01),ze.quaternion.copy(Me),et.add(ze));const ve=lS(ot,jC);ve&&(ve.renderOrder=-1,ve.position.copy(new J(...rS[Ct])).addScaledVector(gt,-.05),ve.quaternion.copy(Me).multiply(ht),et.add(ve))}})};document.fonts.load("700 160px dice-font").then(Mt),D.add(et),D.add(new Gl(16777215,1)),D.add(new Bl(16777215,12303291,1));const Bt=new Hl(16777215,1);Bt.position.set(3,4,5),D.add(Bt),r.current=et;const Dt=()=>{const gt=b.clientWidth,H=b.clientHeight;X.setSize(gt,H,!1),U.aspect=gt/H,U.updateProjectionMatrix()},k=new ResizeObserver(Dt);k.observe(b),Dt();const mt=()=>{l.current=requestAnimationFrame(mt),X.render(D,U)};return mt(),()=>{k.disconnect(),l.current&&cancelAnimationFrame(l.current),d.current&&cancelAnimationFrame(d.current),B.dispose(),et.material.dispose(),et.children.forEach(gt=>{const H=gt;H.geometry.dispose(),H.material.map?.dispose(),H.material.dispose()}),X.dispose(),b.removeChild(X.domElement),r.current=null}},[o,e]),jt.jsxs("div",{className:`stage stage--four-sided${T?" is-dragging":""}`,onPointerDown:z,onPointerMove:E,onPointerUp:P,onPointerCancel:P,children:[jt.jsx("div",{ref:i,className:"three-scene"}),jt.jsx("p",{className:"hint",children:_?"Rolling...":S||(I!==null?`You rolled ${I}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const cS=65,uS=.5,e2=10,n2=1500,i2=750,a2=260,uo=Math.PI/180,fS=1.08,dS=.864,hS=(o,e,i)=>Math.min(i,Math.max(e,o)),r2=[[1,1,1],[-1,1,1],[-1,1,-1],[1,1,-1],[1,-1,1],[-1,-1,1],[-1,-1,-1],[1,-1,-1]],s2=o=>{const e=new J(...o).normalize(),i=Math.abs(e.y)>.9?new J(0,0,1):new J(0,1,0),r=i.clone().sub(e.clone().multiplyScalar(i.dot(e))).normalize(),l=new J().crossVectors(r,e).normalize(),u=new tn().makeBasis(l,r,e);return{normal:e,up:r,orientation:new Qe().setFromRotationMatrix(u)}},pS=r2.map(s2),o2=o=>{const e=new J(0,0,1),i=new Qe().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Qe().setFromAxisAngle(new J(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},l2="#ffffff",mS=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 200px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.shadowColor="rgba(0, 0, 0, 0.35)",r.shadowBlur=6,r.fillText(String(o),128,136);const l=new Il(i);l.colorSpace=Pn;const u=new is({map:l,transparent:!0,side:Ni,depthWrite:!1});return new yn(new Ga(dS,dS),u)},c2=o=>{const e=new Qn().setFromQuaternion(o,"XYZ");return{x:e.x/uo,y:e.y/uo,z:e.z/uo}};function u2({color:o="red",translucent:e=!0}){const i=xt.useRef(null),r=xt.useRef(null),l=xt.useRef(null),u=xt.useRef(null),d=xt.useRef(null),h=xt.useRef({x:0,y:0,z:0}),p=xt.useRef({x:0,y:0,z:0}),m=xt.useRef(null),x=xt.useRef(!1),[_,v]=xt.useState(!1),[T,C]=xt.useState(!1),[I,M]=xt.useState(null),[S,N]=xt.useState(null),V=xt.useCallback(b=>{h.current=b,r.current?.rotation.set(b.x*uo,b.y*uo,b.z*uo)},[]),w=xt.useCallback((b,D)=>{d.current&&cancelAnimationFrame(d.current);const U={...h.current},X=performance.now();return new Promise(B=>{const Z=q=>{const W=Math.min((q-X)/D,1),$=vi(W);V({x:U.x+(b.x-U.x)*$,y:U.y+(b.y-U.y)*$,z:U.z+(b.z-U.z)*$}),W<1?d.current=requestAnimationFrame(Z):(d.current=null,B())};d.current=requestAnimationFrame(Z)})},[V]),O=xt.useCallback((b,D)=>{d.current&&cancelAnimationFrame(d.current);const U=r.current;if(!U)return Promise.resolve();const X=U.quaternion.clone(),B=performance.now();return new Promise(Z=>{const q=W=>{const $=Math.min((W-B)/D,1);U.quaternion.slerpQuaternions(X,b,vi($)),h.current=c2(U.quaternion),$<1?d.current=requestAnimationFrame(q):(d.current=null,Z())};d.current=requestAnimationFrame(q)})},[]),L=xt.useCallback(async()=>{x.current=!0,v(!0),M(null),N(null);try{const b=await _o(8),D=o2(pS[b-1]),U=h.current,X=Xl(U,D,e2);await w(X,n2),await O(D,i2),p.current=h.current,v(!1),x.current=!1,M(b)}catch(b){v(!1),x.current=!1,N(b instanceof Error?b.message:"Roll failed.")}},[O,w]),z=xt.useCallback(b=>{if(x.current)return;const D=b.currentTarget.getBoundingClientRect();m.current={centerX:D.left+D.width/2,centerY:D.top+D.height/2,halfWidth:D.width/2,halfHeight:D.height/2,nx:0,ny:0},b.currentTarget.setPointerCapture(b.pointerId),C(!0)},[]),E=xt.useCallback(b=>{const D=m.current;!D||x.current||(D.nx=hS((b.clientX-D.centerX)/D.halfWidth,-1,1),D.ny=hS((b.clientY-D.centerY)/D.halfHeight,-1,1),!u.current&&(u.current=requestAnimationFrame(()=>{u.current=null;const U=p.current;V({x:U.x-D.ny*cS,y:U.y+D.nx*cS,z:U.z})})))},[V]),P=xt.useCallback(()=>{const b=m.current;if(!b)return;m.current=null,C(!1),u.current&&(cancelAnimationFrame(u.current),u.current=null),Math.abs(b.nx)>=uS||Math.abs(b.ny)>=uS?L():w(p.current,a2)},[w,L]);return xt.useEffect(()=>{const b=i.current;if(!b)return;const D=new Ll,U=new Gn(28,1,.1,100);U.position.set(0,0,7),U.lookAt(0,0,0);const X=new Vl({alpha:!0,antialias:!0});X.setPixelRatio(Math.min(window.devicePixelRatio,2)),X.setClearColor(0,0),b.appendChild(X.domElement);const B=as[o],Z=xo(e),q=new yn(new Um(1.7,0),new Fl({color:B.hex,roughness:.46,metalness:.08,flatShading:!0,transparent:e,opacity:Z,depthWrite:!e})),W=new Qe().setFromAxisAngle(new J(0,1,0),Math.PI),$=()=>{pS.forEach((Dt,k)=>{const mt=k+1,gt=mS(mt,B.label);if(!gt)return;gt.position.copy(Dt.normal).multiplyScalar(fS),gt.quaternion.copy(Dt.orientation),gt.renderOrder=1,q.add(gt);const H=mS(mt,l2);H&&(H.renderOrder=-1,H.position.copy(Dt.normal).multiplyScalar(fS-.2),H.quaternion.copy(Dt.orientation).multiply(W),q.add(H))})};document.fonts.load("700 200px dice-font").then($),D.add(q),D.add(new Gl(16777215,1)),D.add(new Bl(16777215,12303291,1));const et=new Hl(16777215,1);et.position.set(3,4,5),D.add(et),r.current=q;const ht=()=>{const Dt=b.clientWidth,k=b.clientHeight;X.setSize(Dt,k,!1),U.aspect=Dt/k,U.updateProjectionMatrix()},Mt=new ResizeObserver(ht);Mt.observe(b),ht();const Bt=()=>{l.current=requestAnimationFrame(Bt),X.render(D,U)};return Bt(),()=>{Mt.disconnect(),l.current&&cancelAnimationFrame(l.current),d.current&&cancelAnimationFrame(d.current),q.geometry.dispose(),q.material.dispose(),q.children.forEach(Dt=>{const k=Dt;k.geometry.dispose(),k.material.map?.dispose(),k.material.dispose()}),X.dispose(),b.removeChild(X.domElement),r.current=null}},[o,e]),jt.jsxs("div",{className:`stage stage--eight-sided${T?" is-dragging":""}`,onPointerDown:z,onPointerMove:E,onPointerUp:P,onPointerCancel:P,children:[jt.jsx("div",{ref:i,className:"three-scene"}),jt.jsx("p",{className:"hint",children:_?"Rolling...":S||(I?`You rolled ${I}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const gS=65,_S=.5,f2=10,d2=1500,h2=750,p2=260,fo=Math.PI/180,vS=.77,MM=2.2,m2=.85,Zu=MM*.9*m2,Mr=MM*.65,am=Zu*.105573,rm=Zu*.8,Pu=(Zu-rm)/(Zu-am),sm=[...[0,1,2,3,4].map(o=>[Pu*Mr*Math.cos(o*2*Math.PI/5),rm,Pu*Mr*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Pu*Mr*Math.cos((o+.5)*2*Math.PI/5),-rm,Pu*Mr*Math.sin((o+.5)*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Mr*Math.cos(o*2*Math.PI/5),am,Mr*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Mr*Math.cos((o+.5)*2*Math.PI/5),-am,Mr*Math.sin((o+.5)*2*Math.PI/5)])],om=[[0,10,15,11,1],[1,11,16,12,2],[2,12,17,13,3],[3,13,18,14,4],[4,14,19,10,0],[5,6,16,11,15],[6,7,17,12,16],[7,8,18,13,17],[8,9,19,14,18],[9,5,15,10,19],[0,1,2,3,4],[5,6,7,8,9]],lm=[1,3,5,7,9,8,6,4,2,10],xS=(o,e,i)=>Math.min(i,Math.max(e,o)),yM=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],x=Math.sqrt(h*h+p*p+m*m),_=new J(h/x,p/x,m/x);return _.dot(e)<0&&_.negate(),_},cm=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new J(e,i,r)},g2=o=>{const e=om[o].map(p=>sm[p]),i=cm(e),r=yM(e,i),l=Math.abs(r.y)>.9?new J(0,0,1):new J(0,1,0),u=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),d=new J().crossVectors(u,r).normalize(),h=new tn().makeBasis(d,u,r);return{normal:r,up:u,orientation:new Qe().setFromRotationMatrix(h)}},SS=Array.from({length:lm.length},(o,e)=>g2(e)),_2=o=>{const e=new J(0,0,1),i=new Qe().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Qe().setFromAxisAngle(new J(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},v2="#ffffff",MS=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 180px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o===10?0:o),128,136);const l=new Il(i);l.colorSpace=Pn;const u=new is({map:l,transparent:!0,side:Ni,depthWrite:!1});return new yn(new Ga(vS,vS),u)},x2=o=>{const e=new Qn().setFromQuaternion(o,"XYZ");return{x:e.x/fo,y:e.y/fo,z:e.z/fo}};function S2({color:o="red",translucent:e=!0}){const i=xt.useRef(null),r=xt.useRef(null),l=xt.useRef(null),u=xt.useRef(null),d=xt.useRef(null),h=xt.useRef({x:0,y:0,z:0}),p=xt.useRef({x:0,y:0,z:0}),m=xt.useRef(null),x=xt.useRef(!1),[_,v]=xt.useState(!1),[T,C]=xt.useState(!1),[I,M]=xt.useState(null),[S,N]=xt.useState(null),V=xt.useCallback(b=>{h.current=b,r.current?.rotation.set(b.x*fo,b.y*fo,b.z*fo)},[]),w=xt.useCallback((b,D)=>{d.current&&cancelAnimationFrame(d.current);const U={...h.current},X=performance.now();return new Promise(B=>{const Z=q=>{const W=Math.min((q-X)/D,1),$=vi(W);V({x:U.x+(b.x-U.x)*$,y:U.y+(b.y-U.y)*$,z:U.z+(b.z-U.z)*$}),W<1?d.current=requestAnimationFrame(Z):(d.current=null,B())};d.current=requestAnimationFrame(Z)})},[V]),O=xt.useCallback((b,D)=>{d.current&&cancelAnimationFrame(d.current);const U=r.current;if(!U)return Promise.resolve();const X=U.quaternion.clone(),B=performance.now();return new Promise(Z=>{const q=W=>{const $=Math.min((W-B)/D,1);U.quaternion.slerpQuaternions(X,b,vi($)),h.current=x2(U.quaternion),$<1?d.current=requestAnimationFrame(q):(d.current=null,Z())};d.current=requestAnimationFrame(q)})},[]),L=xt.useCallback(async()=>{x.current=!0,v(!0),M(null),N(null);try{const b=await _o(10),D=lm.indexOf(b),U=_2(SS[D]),X=h.current,B=Xl(X,U,f2);await w(B,d2),await O(U,h2),p.current=h.current,v(!1),x.current=!1,M(b)}catch(b){v(!1),x.current=!1,N(b instanceof Error?b.message:"Roll failed.")}},[O,w]),z=xt.useCallback(b=>{if(x.current)return;const D=b.currentTarget.getBoundingClientRect();m.current={centerX:D.left+D.width/2,centerY:D.top+D.height/2,halfWidth:D.width/2,halfHeight:D.height/2,nx:0,ny:0},b.currentTarget.setPointerCapture(b.pointerId),C(!0)},[]),E=xt.useCallback(b=>{const D=m.current;!D||x.current||(D.nx=xS((b.clientX-D.centerX)/D.halfWidth,-1,1),D.ny=xS((b.clientY-D.centerY)/D.halfHeight,-1,1),!u.current&&(u.current=requestAnimationFrame(()=>{u.current=null;const U=p.current;V({x:U.x-D.ny*gS,y:U.y+D.nx*gS,z:U.z})})))},[V]),P=xt.useCallback(()=>{const b=m.current;if(!b)return;m.current=null,C(!1),u.current&&(cancelAnimationFrame(u.current),u.current=null),Math.abs(b.nx)>=_S||Math.abs(b.ny)>=_S?L():w(p.current,p2)},[w,L]);return xt.useEffect(()=>{const b=i.current;if(!b)return;const D=new Ll,U=new Gn(28,1,.1,100);U.position.set(0,0,7),U.lookAt(0,0,0);const X=new Vl({alpha:!0,antialias:!0});X.setPixelRatio(Math.min(window.devicePixelRatio,2)),X.setClearColor(0,0),b.appendChild(X.domElement);const B=new ai,Z=[],q=[];for(const gt of om){const H=gt.map(Y=>sm[Y]),at=cm(H),_t=yM(H,at),Ct=_t.x,ot=_t.y,At=_t.z,[ae,re,se]=H,Qt=[re[0]-ae[0],re[1]-ae[1],re[2]-ae[2]],Nt=[se[0]-ae[0],se[1]-ae[1],se[2]-ae[2]],ne=Qt[1]*Nt[2]-Qt[2]*Nt[1],Me=Qt[2]*Nt[0]-Qt[0]*Nt[2],ze=Qt[0]*Nt[1]-Qt[1]*Nt[0],he=ne*at.x+Me*at.y+ze*at.z>=0?H:[...H].reverse();for(let Y=1;Y<he.length-1;Y++)Z.push(...he[0],...he[Y],...he[Y+1]),q.push(Ct,ot,At,Ct,ot,At,Ct,ot,At)}B.setAttribute("position",new xn(Z,3)),B.setAttribute("normal",new xn(q,3));const W=as[o],$=xo(e),et=new yn(B,new Fl({color:W.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:$,depthWrite:!e})),ht=new Qe().setFromAxisAngle(new J(0,1,0),Math.PI),Mt=()=>{SS.forEach((gt,H)=>{const at=lm[H],_t=MS(at,W.label);if(!_t)return;const Ct=cm(om[H].map(At=>sm[At]));_t.position.copy(Ct),_t.position.addScaledVector(gt.normal,.01),_t.quaternion.copy(gt.orientation),_t.renderOrder=1,et.add(_t);const ot=MS(at,v2);ot&&(ot.renderOrder=-1,ot.position.copy(Ct),ot.position.addScaledVector(gt.normal,-.05),ot.quaternion.copy(gt.orientation).multiply(ht),et.add(ot))})};document.fonts.load("700 180px dice-font").then(Mt),D.add(et),D.add(new Gl(16777215,1)),D.add(new Bl(16777215,12303291,1));const Bt=new Hl(16777215,1);Bt.position.set(3,4,5),D.add(Bt),r.current=et;const Dt=()=>{const gt=b.clientWidth,H=b.clientHeight;X.setSize(gt,H,!1),U.aspect=gt/H,U.updateProjectionMatrix()},k=new ResizeObserver(Dt);k.observe(b),Dt();const mt=()=>{l.current=requestAnimationFrame(mt),X.render(D,U)};return mt(),()=>{k.disconnect(),l.current&&cancelAnimationFrame(l.current),d.current&&cancelAnimationFrame(d.current),B.dispose(),et.material.dispose(),et.children.forEach(gt=>{const H=gt;H.geometry.dispose(),H.material.map?.dispose(),H.material.dispose()}),X.dispose(),b.removeChild(X.domElement),r.current=null}},[o,e]),jt.jsxs("div",{className:`stage stage--ten-sided${T?" is-dragging":""}`,onPointerDown:z,onPointerMove:E,onPointerUp:P,onPointerCancel:P,children:[jt.jsx("div",{ref:i,className:"three-scene"}),jt.jsx("p",{className:"hint",children:_?"Rolling...":S||(I!==null?`You rolled ${I}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const yS=65,ES=.5,M2=10,y2=1500,E2=750,T2=260,ho=Math.PI/180,TS=1,um=[[.981495,.981495,.981495],[.981495,.981495,-.981495],[.981495,-.981495,.981495],[.981495,-.981495,-.981495],[-.981495,.981495,.981495],[-.981495,.981495,-.981495],[-.981495,-.981495,.981495],[-.981495,-.981495,-.981495],[0,.606598,1.588093],[0,.606598,-1.588093],[0,-.606598,1.588093],[0,-.606598,-1.588093],[.606598,1.588093,0],[.606598,-1.588093,0],[-.606598,1.588093,0],[-.606598,-1.588093,0],[1.588093,0,.606598],[1.588093,0,-.606598],[-1.588093,0,.606598],[-1.588093,0,-.606598]],fm=[[14,12,1,9,5],[4,8,0,12,14],[1,12,0,16,17],[19,18,4,14,5],[7,19,5,9,11],[11,9,1,17,3],[2,16,0,8,10],[10,8,4,18,6],[17,16,2,13,3],[7,15,6,18,19],[7,11,3,13,15],[15,13,2,10,6]],dm=[1,2,3,4,5,6,8,7,9,10,11,12],bS=(o,e,i)=>Math.min(i,Math.max(e,o)),EM=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],x=Math.sqrt(h*h+p*p+m*m),_=new J(h/x,p/x,m/x);return _.dot(e)<0&&_.negate(),_},hm=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new J(e,i,r)},b2=o=>{const e=fm[o].map(p=>um[p]),i=hm(e),r=EM(e,i),l=Math.abs(r.y)>.9?new J(0,0,1):new J(0,1,0),u=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),d=new J().crossVectors(u,r).normalize(),h=new tn().makeBasis(d,u,r);return{normal:r,up:u,orientation:new Qe().setFromRotationMatrix(h)}},AS=Array.from({length:dm.length},(o,e)=>b2(e)),A2=o=>{const e=new J(0,0,1),i=new Qe().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Qe().setFromAxisAngle(new J(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},R2="#ffffff",RS=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const l=new Il(i);l.colorSpace=Pn;const u=new is({map:l,transparent:!0,side:Ni,depthWrite:!1});return new yn(new Ga(TS,TS),u)},C2=o=>{const e=new Qn().setFromQuaternion(o,"XYZ");return{x:e.x/ho,y:e.y/ho,z:e.z/ho}};function w2({color:o="red",translucent:e=!0}){const i=xt.useRef(null),r=xt.useRef(null),l=xt.useRef(null),u=xt.useRef(null),d=xt.useRef(null),h=xt.useRef({x:0,y:0,z:0}),p=xt.useRef({x:0,y:0,z:0}),m=xt.useRef(null),x=xt.useRef(!1),[_,v]=xt.useState(!1),[T,C]=xt.useState(!1),[I,M]=xt.useState(null),[S,N]=xt.useState(null),V=xt.useCallback(b=>{h.current=b,r.current?.rotation.set(b.x*ho,b.y*ho,b.z*ho)},[]),w=xt.useCallback((b,D)=>{d.current&&cancelAnimationFrame(d.current);const U={...h.current},X=performance.now();return new Promise(B=>{const Z=q=>{const W=Math.min((q-X)/D,1),$=vi(W);V({x:U.x+(b.x-U.x)*$,y:U.y+(b.y-U.y)*$,z:U.z+(b.z-U.z)*$}),W<1?d.current=requestAnimationFrame(Z):(d.current=null,B())};d.current=requestAnimationFrame(Z)})},[V]),O=xt.useCallback((b,D)=>{d.current&&cancelAnimationFrame(d.current);const U=r.current;if(!U)return Promise.resolve();const X=U.quaternion.clone(),B=performance.now();return new Promise(Z=>{const q=W=>{const $=Math.min((W-B)/D,1);U.quaternion.slerpQuaternions(X,b,vi($)),h.current=C2(U.quaternion),$<1?d.current=requestAnimationFrame(q):(d.current=null,Z())};d.current=requestAnimationFrame(q)})},[]),L=xt.useCallback(async()=>{x.current=!0,v(!0),M(null),N(null);try{const b=await _o(12),D=dm.indexOf(b),U=A2(AS[D]),X=h.current,B=Xl(X,U,M2);await w(B,y2),await O(U,E2),p.current=h.current,v(!1),x.current=!1,M(b)}catch(b){v(!1),x.current=!1,N(b instanceof Error?b.message:"Roll failed.")}},[O,w]),z=xt.useCallback(b=>{if(x.current)return;const D=b.currentTarget.getBoundingClientRect();m.current={centerX:D.left+D.width/2,centerY:D.top+D.height/2,halfWidth:D.width/2,halfHeight:D.height/2,nx:0,ny:0},b.currentTarget.setPointerCapture(b.pointerId),C(!0)},[]),E=xt.useCallback(b=>{const D=m.current;!D||x.current||(D.nx=bS((b.clientX-D.centerX)/D.halfWidth,-1,1),D.ny=bS((b.clientY-D.centerY)/D.halfHeight,-1,1),!u.current&&(u.current=requestAnimationFrame(()=>{u.current=null;const U=p.current;V({x:U.x-D.ny*yS,y:U.y+D.nx*yS,z:U.z})})))},[V]),P=xt.useCallback(()=>{const b=m.current;if(!b)return;m.current=null,C(!1),u.current&&(cancelAnimationFrame(u.current),u.current=null),Math.abs(b.nx)>=ES||Math.abs(b.ny)>=ES?L():w(p.current,T2)},[w,L]);return xt.useEffect(()=>{const b=i.current;if(!b)return;const D=new Ll,U=new Gn(28,1,.1,100);U.position.set(0,0,7),U.lookAt(0,0,0);const X=new Vl({alpha:!0,antialias:!0});X.setPixelRatio(Math.min(window.devicePixelRatio,2)),X.setClearColor(0,0),b.appendChild(X.domElement);const B=new ai,Z=[],q=[];for(const gt of fm){const H=gt.map(Y=>um[Y]),at=hm(H),_t=EM(H,at),Ct=_t.x,ot=_t.y,At=_t.z,[ae,re,se]=H,Qt=[re[0]-ae[0],re[1]-ae[1],re[2]-ae[2]],Nt=[se[0]-ae[0],se[1]-ae[1],se[2]-ae[2]],ne=Qt[1]*Nt[2]-Qt[2]*Nt[1],Me=Qt[2]*Nt[0]-Qt[0]*Nt[2],ze=Qt[0]*Nt[1]-Qt[1]*Nt[0],he=ne*at.x+Me*at.y+ze*at.z>=0?H:[...H].reverse();for(let Y=1;Y<he.length-1;Y++)Z.push(...he[0],...he[Y],...he[Y+1]),q.push(Ct,ot,At,Ct,ot,At,Ct,ot,At)}B.setAttribute("position",new xn(Z,3)),B.setAttribute("normal",new xn(q,3));const W=as[o],$=xo(e),et=new yn(B,new Fl({color:W.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:$,depthWrite:!e})),ht=new Qe().setFromAxisAngle(new J(0,1,0),Math.PI),Mt=()=>{AS.forEach((gt,H)=>{const at=dm[H],_t=RS(at,W.label);if(!_t)return;const Ct=hm(fm[H].map(At=>um[At]));_t.position.copy(Ct),_t.position.addScaledVector(gt.normal,.01),_t.quaternion.copy(gt.orientation),_t.renderOrder=1,et.add(_t);const ot=RS(at,R2);ot&&(ot.renderOrder=-1,ot.position.copy(Ct),ot.position.addScaledVector(gt.normal,-.05),ot.quaternion.copy(gt.orientation).multiply(ht),et.add(ot))})};document.fonts.load("700 160px dice-font").then(Mt),D.add(et),D.add(new Gl(16777215,1)),D.add(new Bl(16777215,12303291,1));const Bt=new Hl(16777215,1);Bt.position.set(3,4,5),D.add(Bt),r.current=et;const Dt=()=>{const gt=b.clientWidth,H=b.clientHeight;X.setSize(gt,H,!1),U.aspect=gt/H,U.updateProjectionMatrix()},k=new ResizeObserver(Dt);k.observe(b),Dt();const mt=()=>{l.current=requestAnimationFrame(mt),X.render(D,U)};return mt(),()=>{k.disconnect(),l.current&&cancelAnimationFrame(l.current),d.current&&cancelAnimationFrame(d.current),B.dispose(),et.material.dispose(),et.children.forEach(gt=>{const H=gt;H.geometry.dispose(),H.material.map?.dispose(),H.material.dispose()}),X.dispose(),b.removeChild(X.domElement),r.current=null}},[o,e]),jt.jsxs("div",{className:`stage stage--twelve-sided${T?" is-dragging":""}`,onPointerDown:z,onPointerMove:E,onPointerUp:P,onPointerCancel:P,children:[jt.jsx("div",{ref:i,className:"three-scene"}),jt.jsx("p",{className:"hint",children:_?"Rolling...":S||(I!==null?`You rolled ${I}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const CS=65,wS=.5,D2=10,N2=1500,U2=750,L2=260,po=Math.PI/180,DS=.9,pm=[[0,.893743,1.446106],[0,.893743,-1.446106],[0,-.893743,1.446106],[0,-.893743,-1.446106],[.893743,1.446106,0],[.893743,-1.446106,0],[-.893743,1.446106,0],[-.893743,-1.446106,0],[1.446106,0,.893743],[1.446106,0,-.893743],[-1.446106,0,.893743],[-1.446106,0,-.893743]],mm=[[6,4,1],[0,4,6],[11,6,1],[1,4,9],[8,4,0],[0,6,10],[4,8,9],[11,10,6],[1,3,11],[9,3,1],[0,2,8],[10,2,0],[9,8,5],[7,10,11],[3,7,11],[9,5,3],[2,5,8],[10,7,2],[3,5,7],[7,5,2]],gm=[1,2,3,4,5,6,7,8,9,10,12,11,13,14,16,15,18,17,19,20],NS=(o,e,i)=>Math.min(i,Math.max(e,o)),TM=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],x=Math.sqrt(h*h+p*p+m*m),_=new J(h/x,p/x,m/x);return _.dot(e)<0&&_.negate(),_},_m=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new J(e,i,r)},O2=o=>{const e=mm[o].map(p=>pm[p]),i=_m(e),r=TM(e,i),l=Math.abs(r.y)>.9?new J(0,0,1):new J(0,1,0),u=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),d=new J().crossVectors(u,r).normalize(),h=new tn().makeBasis(d,u,r);return{normal:r,up:u,orientation:new Qe().setFromRotationMatrix(h)}},US=Array.from({length:gm.length},(o,e)=>O2(e)),P2=o=>{const e=new J(0,0,1),i=new Qe().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Qe().setFromAxisAngle(new J(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},I2="#ffffff",LS=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const l=new Il(i);l.colorSpace=Pn;const u=new is({map:l,transparent:!0,side:Ni,depthWrite:!1});return new yn(new Ga(DS,DS),u)},z2=o=>{const e=new Qn().setFromQuaternion(o,"XYZ");return{x:e.x/po,y:e.y/po,z:e.z/po}};function F2({color:o="red",translucent:e=!0}){const i=xt.useRef(null),r=xt.useRef(null),l=xt.useRef(null),u=xt.useRef(null),d=xt.useRef(null),h=xt.useRef({x:0,y:0,z:0}),p=xt.useRef({x:0,y:0,z:0}),m=xt.useRef(null),x=xt.useRef(!1),[_,v]=xt.useState(!1),[T,C]=xt.useState(!1),[I,M]=xt.useState(null),[S,N]=xt.useState(null),V=xt.useCallback(b=>{h.current=b,r.current?.rotation.set(b.x*po,b.y*po,b.z*po)},[]),w=xt.useCallback((b,D)=>{d.current&&cancelAnimationFrame(d.current);const U={...h.current},X=performance.now();return new Promise(B=>{const Z=q=>{const W=Math.min((q-X)/D,1),$=vi(W);V({x:U.x+(b.x-U.x)*$,y:U.y+(b.y-U.y)*$,z:U.z+(b.z-U.z)*$}),W<1?d.current=requestAnimationFrame(Z):(d.current=null,B())};d.current=requestAnimationFrame(Z)})},[V]),O=xt.useCallback((b,D)=>{d.current&&cancelAnimationFrame(d.current);const U=r.current;if(!U)return Promise.resolve();const X=U.quaternion.clone(),B=performance.now();return new Promise(Z=>{const q=W=>{const $=Math.min((W-B)/D,1);U.quaternion.slerpQuaternions(X,b,vi($)),h.current=z2(U.quaternion),$<1?d.current=requestAnimationFrame(q):(d.current=null,Z())};d.current=requestAnimationFrame(q)})},[]),L=xt.useCallback(async()=>{x.current=!0,v(!0),M(null),N(null);try{const b=await _o(20),D=gm.indexOf(b),U=P2(US[D]),X=h.current,B=Xl(X,U,D2);await w(B,N2),await O(U,U2),p.current=h.current,v(!1),x.current=!1,M(b)}catch(b){v(!1),x.current=!1,N(b instanceof Error?b.message:"Roll failed.")}},[O,w]),z=xt.useCallback(b=>{if(x.current)return;const D=b.currentTarget.getBoundingClientRect();m.current={centerX:D.left+D.width/2,centerY:D.top+D.height/2,halfWidth:D.width/2,halfHeight:D.height/2,nx:0,ny:0},b.currentTarget.setPointerCapture(b.pointerId),C(!0)},[]),E=xt.useCallback(b=>{const D=m.current;!D||x.current||(D.nx=NS((b.clientX-D.centerX)/D.halfWidth,-1,1),D.ny=NS((b.clientY-D.centerY)/D.halfHeight,-1,1),!u.current&&(u.current=requestAnimationFrame(()=>{u.current=null;const U=p.current;V({x:U.x-D.ny*CS,y:U.y+D.nx*CS,z:U.z})})))},[V]),P=xt.useCallback(()=>{const b=m.current;if(!b)return;m.current=null,C(!1),u.current&&(cancelAnimationFrame(u.current),u.current=null),Math.abs(b.nx)>=wS||Math.abs(b.ny)>=wS?L():w(p.current,L2)},[w,L]);return xt.useEffect(()=>{const b=i.current;if(!b)return;const D=new Ll,U=new Gn(28,1,.1,100);U.position.set(0,0,7),U.lookAt(0,0,0);const X=new Vl({alpha:!0,antialias:!0});X.setPixelRatio(Math.min(window.devicePixelRatio,2)),X.setClearColor(0,0),b.appendChild(X.domElement);const B=new ai,Z=[],q=[];for(const gt of mm){const H=gt.map(Y=>pm[Y]),at=_m(H),_t=TM(H,at),Ct=_t.x,ot=_t.y,At=_t.z,[ae,re,se]=H,Qt=[re[0]-ae[0],re[1]-ae[1],re[2]-ae[2]],Nt=[se[0]-ae[0],se[1]-ae[1],se[2]-ae[2]],ne=Qt[1]*Nt[2]-Qt[2]*Nt[1],Me=Qt[2]*Nt[0]-Qt[0]*Nt[2],ze=Qt[0]*Nt[1]-Qt[1]*Nt[0],he=ne*at.x+Me*at.y+ze*at.z>=0?H:[...H].reverse();for(let Y=1;Y<he.length-1;Y++)Z.push(...he[0],...he[Y],...he[Y+1]),q.push(Ct,ot,At,Ct,ot,At,Ct,ot,At)}B.setAttribute("position",new xn(Z,3)),B.setAttribute("normal",new xn(q,3));const W=as[o],$=xo(e),et=new yn(B,new Fl({color:W.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:$,depthWrite:!e})),ht=new Qe().setFromAxisAngle(new J(0,1,0),Math.PI),Mt=()=>{US.forEach((gt,H)=>{const at=gm[H],_t=LS(at,W.label);if(!_t)return;const Ct=_m(mm[H].map(At=>pm[At]));_t.position.copy(Ct),_t.position.addScaledVector(gt.normal,.01),_t.quaternion.copy(gt.orientation),_t.renderOrder=1,et.add(_t);const ot=LS(at,I2);ot&&(ot.renderOrder=-1,ot.position.copy(Ct),ot.position.addScaledVector(gt.normal,-.05),ot.quaternion.copy(gt.orientation).multiply(ht),et.add(ot))})};document.fonts.load("700 160px dice-font").then(Mt),D.add(et),D.add(new Gl(16777215,1)),D.add(new Bl(16777215,12303291,1));const Bt=new Hl(16777215,1);Bt.position.set(3,4,5),D.add(Bt),r.current=et;const Dt=()=>{const gt=b.clientWidth,H=b.clientHeight;X.setSize(gt,H,!1),U.aspect=gt/H,U.updateProjectionMatrix()},k=new ResizeObserver(Dt);k.observe(b),Dt();const mt=()=>{l.current=requestAnimationFrame(mt),X.render(D,U)};return mt(),()=>{k.disconnect(),l.current&&cancelAnimationFrame(l.current),d.current&&cancelAnimationFrame(d.current),B.dispose(),et.material.dispose(),et.children.forEach(gt=>{const H=gt;H.geometry.dispose(),H.material.map?.dispose(),H.material.dispose()}),X.dispose(),b.removeChild(X.domElement),r.current=null}},[o,e]),jt.jsxs("div",{className:`stage stage--twenty-sided${T?" is-dragging":""}`,onPointerDown:z,onPointerMove:E,onPointerUp:P,onPointerCancel:P,children:[jt.jsx("div",{ref:i,className:"three-scene"}),jt.jsx("p",{className:"hint",children:_?"Rolling...":S||(I!==null?`You rolled ${I}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}function B2({sides:o=6,color:e="red",translucent:i=!0}){switch(o){case 4:return jt.jsx(t2,{color:e,translucent:i});case 6:return jt.jsx(kC,{color:e,translucent:i});case 8:return jt.jsx(u2,{color:e,translucent:i});case 10:return jt.jsx(S2,{color:e,translucent:i});case 12:return jt.jsx(w2,{color:e,translucent:i});case 20:return jt.jsx(F2,{color:e,translucent:i});default:return null}}const H2=[0,45,90,135];function G2({isOpen:o,onClick:e,ref:i}){return jt.jsx("button",{ref:i,type:"button",className:"icon-button settings-button","aria-label":"Settings","aria-haspopup":"dialog","aria-expanded":o,onClick:e,children:jt.jsxs("span",{className:"settings-button__cog","aria-hidden":"true",children:[H2.map(r=>jt.jsx("span",{className:`settings-button__tooth settings-button__tooth--${r}`},r)),jt.jsx("span",{className:"settings-button__hub"})]})})}const V2='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',X2=[4,6,8,10,12,20],k2=["red","yellow","green","blue","black","white"];function q2({sides:o,color:e,translucent:i,onSettingsChange:r,onClose:l}){const u=xt.useRef(null),d=xt.useRef(null);return xt.useEffect(()=>{d.current?.focus();const h=p=>{if(p.key==="Escape"){l();return}if(p.key!=="Tab")return;const m=u.current;if(!m)return;const x=Array.from(m.querySelectorAll(V2));if(x.length===0)return;const _=x[0],v=x[x.length-1],T=document.activeElement;if(!m.contains(T)){p.preventDefault(),(p.shiftKey?v:_).focus();return}p.shiftKey&&T===_?(p.preventDefault(),v.focus()):!p.shiftKey&&T===v&&(p.preventDefault(),_.focus())};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[l]),jt.jsxs("div",{ref:u,className:"settings-dialog",role:"dialog","aria-modal":"true","aria-label":"Settings",children:[jt.jsxs("div",{className:"settings-dialog__content",children:[jt.jsx("fieldset",{className:"sides-picker","aria-label":"Sides",children:jt.jsx("div",{className:"sides-picker__options",children:X2.map((h,p)=>jt.jsxs(xt.Fragment,{children:[p>0&&jt.jsx("span",{className:"sides-picker__divider","aria-hidden":"true"}),jt.jsxs("span",{className:"sides-picker__option",children:[jt.jsx("input",{className:"sides-picker__input",type:"radio",name:"sides",id:`sides-${h}`,value:h,checked:o===h,onChange:()=>r({sides:h})}),jt.jsx("label",{className:"sides-picker__label",htmlFor:`sides-${h}`,children:h})]})]},h))})}),jt.jsx("fieldset",{className:"color-picker","aria-label":"Color",children:jt.jsx("div",{className:"color-picker__options",children:k2.map(h=>jt.jsxs("span",{className:"color-picker__option",children:[jt.jsx("input",{className:"color-picker__input",type:"radio",name:"color",id:`color-${h}`,value:h,checked:e===h,"aria-label":h,onChange:()=>r({color:h})}),jt.jsx("label",{className:"color-picker__label",htmlFor:`color-${h}`,style:{backgroundColor:`rgb(${as[h].cssTop.join(" ")})`}})]},h))})}),jt.jsxs("label",{className:"translucent-toggle",children:[jt.jsx("input",{className:"translucent-toggle__input",type:"checkbox",checked:i,onChange:h=>r({translucent:h.target.checked})}),jt.jsx("span",{className:"translucent-toggle__text",children:"Translucent"}),jt.jsx("span",{className:"translucent-toggle__track","aria-hidden":"true",children:jt.jsx("span",{className:"translucent-toggle__knob"})})]})]}),jt.jsx("button",{ref:d,type:"button",className:"icon-button settings-dialog__close","aria-label":"Close",onClick:l,children:jt.jsxs("span",{className:"settings-dialog__x","aria-hidden":"true",children:[jt.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--45"}),jt.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--135"})]})})]})}function W2(){const[o,e]=xt.useState(()=>BC()),[i,r]=xt.useState(!1),l=xt.useRef(null),u=xt.useCallback(h=>{e(p=>({...p,...h}))},[]),d=xt.useCallback(()=>{r(!1),l.current?.focus()},[]);return jt.jsxs(jt.Fragment,{children:[jt.jsx(G2,{ref:l,isOpen:i,onClick:()=>r(!0)}),i&&jt.jsx(q2,{sides:o.sides,color:o.color,translucent:o.translucent,onSettingsChange:u,onClose:d}),jt.jsx(B2,{sides:o.sides,color:o.color,translucent:o.translucent})]})}const bM=document.getElementById("root");if(!bM)throw new Error("Root element was not found.");p1.createRoot(bM).render(jt.jsx(xt.StrictMode,{children:jt.jsx(W2,{})}));

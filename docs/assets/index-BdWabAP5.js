(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();var hh={exports:{}},ol={};var Lv;function LE(){if(Lv)return ol;Lv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var h in u)h!=="key"&&(f[h]=u[h])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:d,ref:u!==void 0?u:null,props:f}}return ol.Fragment=e,ol.jsx=i,ol.jsxs=i,ol}var Ov;function OE(){return Ov||(Ov=1,hh.exports=LE()),hh.exports}var ne=OE(),ph={exports:{}},ce={};var Pv;function PE(){if(Pv)return ce;Pv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),T=Symbol.iterator;function R(H){return H===null||typeof H!="object"?null:(H=T&&H[T]||H["@@iterator"],typeof H=="function"?H:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function D(H,mt,Tt){this.props=H,this.context=mt,this.refs=x,this.updater=Tt||P}D.prototype.isReactComponent={},D.prototype.setState=function(H,mt){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,mt,"setState")},D.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function G(){}G.prototype=D.prototype;function C(H,mt,Tt){this.props=H,this.context=mt,this.refs=x,this.updater=Tt||P}var U=C.prototype=new G;U.constructor=C,M(U,D.prototype),U.isPureReactComponent=!0;var N=Array.isArray;function z(){}var E={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function w(H,mt,Tt){var X=Tt.ref;return{$$typeof:o,type:H,key:mt,ref:X!==void 0?X:null,props:Tt}}function O(H,mt){return w(H.type,mt,H.props)}function B(H){return typeof H=="object"&&H!==null&&H.$$typeof===o}function q(H){var mt={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(Tt){return mt[Tt]})}var V=/\/+/g;function Q(H,mt){return typeof H=="object"&&H!==null&&H.key!=null?q(""+H.key):mt.toString(36)}function k(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(z,z):(H.status="pending",H.then(function(mt){H.status==="pending"&&(H.status="fulfilled",H.value=mt)},function(mt){H.status==="pending"&&(H.status="rejected",H.reason=mt)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function W(H,mt,Tt,X,ot){var Et=typeof H;(Et==="undefined"||Et==="boolean")&&(H=null);var Ct=!1;if(H===null)Ct=!0;else switch(Et){case"bigint":case"string":case"number":Ct=!0;break;case"object":switch(H.$$typeof){case o:case e:Ct=!0;break;case S:return Ct=H._init,W(Ct(H._payload),mt,Tt,X,ot)}}if(Ct)return ot=ot(H),Ct=X===""?"."+Q(H,0):X,N(ot)?(Tt="",Ct!=null&&(Tt=Ct.replace(V,"$&/")+"/"),W(ot,mt,Tt,"",function(ge){return ge})):ot!=null&&(B(ot)&&(ot=O(ot,Tt+(ot.key==null||H&&H.key===ot.key?"":(""+ot.key).replace(V,"$&/")+"/")+Ct)),mt.push(ot)),1;Ct=0;var pt=X===""?".":X+":";if(N(H))for(var At=0;At<H.length;At++)X=H[At],Et=pt+Q(X,At),Ct+=W(X,mt,Tt,Et,ot);else if(At=R(H),typeof At=="function")for(H=At.call(H),At=0;!(X=H.next()).done;)X=X.value,Et=pt+Q(X,At++),Ct+=W(X,mt,Tt,Et,ot);else if(Et==="object"){if(typeof H.then=="function")return W(k(H),mt,Tt,X,ot);throw mt=String(H),Error("Objects are not valid as a React child (found: "+(mt==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":mt)+"). If you meant to render a collection of children, use an array instead.")}return Ct}function nt(H,mt,Tt){if(H==null)return H;var X=[],ot=0;return W(H,X,"","",function(Et){return mt.call(Tt,Et,ot++)}),X}function at(H){if(H._status===-1){var mt=H._result,Tt=mt();Tt.then(function(X){(H._status===0||H._status===-1)&&(H._status=1,H._result=X,Tt.status===void 0&&(Tt.status="fulfilled",Tt.value=X))},function(X){(H._status===0||H._status===-1)&&(H._status=2,H._result=X,Tt.status===void 0&&(Tt.status="rejected",Tt.reason=X))}),H._status===-1&&(H._status=0,H._result=Tt)}if(H._status===1)return H._result.default;throw H._result}var ht=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var mt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(mt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)};function St(H){var mt=E.T,Tt={};Tt.types=mt!==null?mt.types:null,E.T=Tt;try{var X=H(),ot=E.S;ot!==null&&ot(Tt,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(z,ht)}catch(Et){ht(Et)}finally{mt!==null&&Tt.types!==null&&(mt.types=Tt.types),E.T=mt}}function kt(H){var mt=E.T;if(mt!==null){var Tt=mt.types;Tt===null?mt.types=[H]:Tt.indexOf(H)===-1&&Tt.push(H)}else St(kt.bind(null,H))}var Ut={map:nt,forEach:function(H,mt,Tt){nt(H,function(){mt.apply(this,arguments)},Tt)},count:function(H){var mt=0;return nt(H,function(){mt++}),mt},toArray:function(H){return nt(H,function(mt){return mt})||[]},only:function(H){if(!B(H))throw Error("React.Children.only expected to receive a single React element child.");return H}};return ce.Activity=_,ce.Children=Ut,ce.Component=D,ce.Fragment=i,ce.Profiler=u,ce.PureComponent=C,ce.StrictMode=s,ce.Suspense=p,ce.ViewTransition=v,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,ce.__COMPILER_RUNTIME={__proto__:null,c:function(H){return E.H.useMemoCache(H)}},ce.addTransitionType=kt,ce.cache=function(H){return function(){return H.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(H,mt,Tt){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var X=M({},H.props),ot=H.key;if(mt!=null)for(Et in mt.key!==void 0&&(ot=""+mt.key),mt)!L.call(mt,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&mt.ref===void 0||(X[Et]=mt[Et]);var Et=arguments.length-2;if(Et===1)X.children=Tt;else if(1<Et){for(var Ct=Array(Et),pt=0;pt<Et;pt++)Ct[pt]=arguments[pt+2];X.children=Ct}return w(H.type,ot,X)},ce.createContext=function(H){return H={$$typeof:d,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:f,_context:H},H},ce.createElement=function(H,mt,Tt){var X,ot={},Et=null;if(mt!=null)for(X in mt.key!==void 0&&(Et=""+mt.key),mt)L.call(mt,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ot[X]=mt[X]);var Ct=arguments.length-2;if(Ct===1)ot.children=Tt;else if(1<Ct){for(var pt=Array(Ct),At=0;At<Ct;At++)pt[At]=arguments[At+2];ot.children=pt}if(H&&H.defaultProps)for(X in Ct=H.defaultProps,Ct)ot[X]===void 0&&(ot[X]=Ct[X]);return w(H,Et,ot)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(H){return{$$typeof:h,render:H}},ce.isValidElement=B,ce.lazy=function(H){return{$$typeof:S,_payload:{_status:-1,_result:H},_init:at}},ce.memo=function(H,mt){return{$$typeof:m,type:H,compare:mt===void 0?null:mt}},ce.startTransition=St,ce.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},ce.use=function(H){return E.H.use(H)},ce.useActionState=function(H,mt,Tt){return E.H.useActionState(H,mt,Tt)},ce.useCallback=function(H,mt){return E.H.useCallback(H,mt)},ce.useContext=function(H){return E.H.useContext(H)},ce.useDebugValue=function(){},ce.useDeferredValue=function(H,mt){return E.H.useDeferredValue(H,mt)},ce.useEffect=function(H,mt){return E.H.useEffect(H,mt)},ce.useEffectEvent=function(H){return E.H.useEffectEvent(H)},ce.useId=function(){return E.H.useId()},ce.useImperativeHandle=function(H,mt,Tt){return E.H.useImperativeHandle(H,mt,Tt)},ce.useInsertionEffect=function(H,mt){return E.H.useInsertionEffect(H,mt)},ce.useLayoutEffect=function(H,mt){return E.H.useLayoutEffect(H,mt)},ce.useMemo=function(H,mt){return E.H.useMemo(H,mt)},ce.useOptimistic=function(H,mt){return E.H.useOptimistic(H,mt)},ce.useReducer=function(H,mt,Tt){return E.H.useReducer(H,mt,Tt)},ce.useRef=function(H){return E.H.useRef(H)},ce.useState=function(H){return E.H.useState(H)},ce.useSyncExternalStore=function(H,mt,Tt){return E.H.useSyncExternalStore(H,mt,Tt)},ce.useTransition=function(){return E.H.useTransition()},ce.version="19.3.0",ce}var Iv;function tm(){return Iv||(Iv=1,ph.exports=PE()),ph.exports}var Rt=tm(),mh={exports:{}},ll={},gh={exports:{}},_h={};var zv;function IE(){return zv||(zv=1,(function(o){function e(k,W){var nt=k.length;k.push(W);t:for(;0<nt;){var at=nt-1>>>1,ht=k[at];if(0<u(ht,W))k[at]=W,k[nt]=ht,nt=at;else break t}}function i(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var W=k[0],nt=k.pop();if(nt!==W){k[0]=nt;t:for(var at=0,ht=k.length,St=ht>>>1;at<St;){var kt=2*(at+1)-1,Ut=k[kt],H=kt+1,mt=k[H];if(0>u(Ut,nt))H<ht&&0>u(mt,Ut)?(k[at]=mt,k[H]=nt,at=H):(k[at]=Ut,k[kt]=nt,at=kt);else if(H<ht&&0>u(mt,nt))k[at]=mt,k[H]=nt,at=H;else break t}}return W}function u(k,W){var nt=k.sortIndex-W.sortIndex;return nt!==0?nt:k.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],S=1,_=null,v=3,T=!1,R=!1,P=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function C(k){for(var W=i(m);W!==null;){if(W.callback===null)s(m);else if(W.startTime<=k)s(m),W.sortIndex=W.expirationTime,e(p,W);else break;W=i(m)}}function U(k){if(P=!1,C(k),!R)if(i(p)!==null)R=!0,N||(N=!0,B());else{var W=i(m);W!==null&&Q(U,W.startTime-k)}}var N=!1,z=-1,E=5,L=-1;function w(){return M?!0:!(o.unstable_now()-L<E)}function O(){if(M=!1,N){var k=o.unstable_now();L=k;var W=!0;try{t:{R=!1,P&&(P=!1,D(z),z=-1),T=!0;var nt=v;try{e:{for(C(k),_=i(p);_!==null&&!(_.expirationTime>k&&w());){var at=_.callback;if(typeof at=="function"){_.callback=null,v=_.priorityLevel;var ht=at(_.expirationTime<=k);if(k=o.unstable_now(),typeof ht=="function"){_.callback=ht,C(k),W=!0;break e}_===i(p)&&s(p),C(k)}else s(p);_=i(p)}if(_!==null)W=!0;else{var St=i(m);St!==null&&Q(U,St.startTime-k),W=!1}}break t}finally{_=null,v=nt,T=!1}W=void 0}}finally{W?B():N=!1}}}var B;if(typeof G=="function")B=function(){G(O)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,V=q.port2;q.port1.onmessage=O,B=function(){V.postMessage(null)}}else B=function(){x(O,0)};function Q(k,W){z=x(function(){k(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(k){switch(v){case 1:case 2:case 3:var W=3;break;default:W=v}var nt=v;v=W;try{return k()}finally{v=nt}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(k,W){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var nt=v;v=k;try{return W()}finally{v=nt}},o.unstable_scheduleCallback=function(k,W,nt){var at=o.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?at+nt:at):nt=at,k){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=nt+ht,k={id:S++,callback:W,priorityLevel:k,startTime:nt,expirationTime:ht,sortIndex:-1},nt>at?(k.sortIndex=nt,e(m,k),i(p)===null&&k===i(m)&&(P?(D(z),z=-1):P=!0,Q(U,nt-at))):(k.sortIndex=ht,e(p,k),R||T||(R=!0,N||(N=!0,B()))),k},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(k){var W=v;return function(){var nt=v;v=W;try{return k.apply(this,arguments)}finally{v=nt}}}})(_h)),_h}var Bv;function zE(){return Bv||(Bv=1,gh.exports=IE()),gh.exports}var vh={exports:{}},Un={};var Fv;function BE(){if(Fv)return Un;Fv=1;var o=tm();function e(S){var _="https://react.dev/errors/"+S;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)_+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+S+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(S,_,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:T==null?null:T===d?d:""+T,children:S,containerInfo:_,implementation:v}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(S,_){if(S==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.browser=function(S){return{$$typeof:f,_reason:S}},Un.createPortal=function(S,_){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(e(299));return h(S,_,null,v)},Un.flushSync=function(S){var _=p.T,v=s.p;try{if(p.T=null,s.p=2,S)return S()}finally{p.T=_,s.p=v,s.d.f()}},Un.preconnect=function(S,_){typeof S=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(S,_))},Un.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},Un.preinit=function(S,_){if(typeof S=="string"&&_&&typeof _.as=="string"){var v=_.as,T=m(v,_.crossOrigin),R=typeof _.integrity=="string"?_.integrity:void 0,P=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;v==="style"?s.d.S(S,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:T,integrity:R,fetchPriority:P}):v==="script"&&s.d.X(S,{crossOrigin:T,integrity:R,fetchPriority:P,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Un.preinitModule=function(S,_){if(typeof S=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var v=m(_.as,_.crossOrigin);s.d.M(S,{crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&s.d.M(S)},Un.preload=function(S,_){if(typeof S=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var v=_.as,T=m(v,_.crossOrigin);s.d.L(S,v,{crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Un.preloadModule=function(S,_){if(typeof S=="string")if(_){var v=m(_.as,_.crossOrigin);s.d.m(S,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else s.d.m(S)},Un.requestFormReset=function(S){s.d.r(S)},Un.unstable_batchedUpdates=function(S,_){return S(_)},Un.useFormState=function(S,_,v){return p.H.useFormState(S,_,v)},Un.useFormStatus=function(){return p.H.useHostTransitionStatus()},Un.version="19.3.0",Un}var Hv;function FE(){if(Hv)return vh.exports;Hv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),vh.exports=BE(),vh.exports}var Gv;function HE(){if(Gv)return ll;Gv=1;var o=zE(),e=tm(),i=FE();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var l=a.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===a)return p(l),t;if(c===r)return p(l),n;c=c.sibling}throw Error(s(188))}if(a.return!==r.return)a=l,r=c;else{for(var g=!1,A=l.child;A;){if(A===a){g=!0,a=l,r=c;break}if(A===r){g=!0,r=l,a=c;break}A=A.sibling}if(!g){for(A=c.child;A;){if(A===a){g=!0,a=c,r=l;break}if(A===r){g=!0,r=c,a=l;break}A=A.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}function _(t,n,a,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&_(t.child,n,a,r,l,c))return!0;t=t.sibling}return!1}function v(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function T(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function R(t){var n=[null,null],a=v(t);return a===null||P(n,t,a.child,{foundSelf:!1}),n}function P(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&P(t,n,a.child,r))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,D=null;function G(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function C(t,n,a){return t===a?(D=t,!1):t===n?(D!==null&&(x=t),!0):!1}function U(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function N(t,n,a){for(var r=0,l=t;l;l=a(l))r++;l=0;for(var c=n;c;c=a(c))l++;for(;0<r-l;)t=a(t),r--;for(;0<l-r;)n=a(n),l--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var z=Object.assign,E=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),at=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),St=Symbol.for("react.activity"),kt=Symbol.for("react.legacy_hidden"),Ut=Symbol.for("react.memo_cache_sentinel"),H=Symbol.for("react.view_transition"),mt=Symbol.for("react.recoverable"),Tt=Symbol.iterator;function X(t){return t===null||typeof t!="object"?null:(t=Tt&&t[Tt]||t["@@iterator"],typeof t=="function"?t:null)}var ot=Symbol.for("react.client.reference");function Et(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ot?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case q:return"Profiler";case B:return"StrictMode";case W:return"Suspense";case nt:return"SuspenseList";case St:return"Activity";case H:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case Q:return t.displayName||"Context";case V:return(t._context.displayName||"Context")+".Consumer";case k:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case at:return n=t.displayName||null,n!==null?n:Et(t.type)||"Memo";case ht:n=t._payload,t=t._init;try{return Et(t(n))}catch{}}return null}var Ct=Array.isArray,pt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,At=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge={pending:!1,data:null,method:null,action:null},oe=[],ue=-1;function re(t){return{current:t}}function Yt(t){0>ue||(t.current=oe[ue],oe[ue]=null,ue--)}function ie(t,n){ue++,oe[ue]=t.current,t.current=n}var Be=re(null),nn=re(null),Pe=re(null),De=re(null);function K(t,n){switch(ie(Pe,n),ie(nn,t),ie(Be,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?V_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=V_(n),t=X_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Yt(Be),ie(Be,t)}function rn(){Yt(Be),Yt(nn),Yt(Pe)}function Fe(t){var n=t.memoizedState;n!==null&&(Fs._currentValue=n.memoizedState,ie(De,t)),n=Be.current;var a=X_(n,t.type);n!==a&&(ie(nn,t),ie(Be,a))}function I(t){nn.current===t&&(Yt(Be),Yt(nn)),De.current===t&&(Yt(De),Fs._currentValue=ge)}var y,it;function ct(t){if(y===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);y=n&&n[1]||"",it=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+y+t+it}var gt=!1;function wt(t,n){if(!t||gt)return"";gt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(It){var j=It}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(It){j=It}xt=!1;try{var ut=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),xt=!0,new t}finally{xt&&(ut!==void 0?Object.defineProperty(t.prototype,"props",ut):delete t.prototype.props)}}}else{try{throw Error()}catch(It){j=It}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(It){if(It&&j&&typeof It.stack=="string")return[It.stack,j.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),g=c[0],A=c[1];if(g&&A){var F=g.split(`
`),et=A.split(`
`);for(l=r=0;r<F.length&&!F[r].includes("DetermineComponentFrameRoot");)r++;for(;l<et.length&&!et[l].includes("DetermineComponentFrameRoot");)l++;if(r===F.length||l===et.length)for(r=F.length-1,l=et.length-1;1<=r&&0<=l&&F[r]!==et[l];)l--;for(;1<=r&&0<=l;r--,l--)if(F[r]!==et[l]){if(r!==1||l!==1)do if(r--,l--,0>l||F[r]!==et[l]){var ft=`
`+F[r].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=r&&0<=l);break}}}finally{gt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ct(a):""}function Lt(t,n){switch(t.tag){case 26:case 27:case 5:return ct(t.type);case 16:return ct("Lazy");case 13:return t.child!==n&&n!==null?ct("Suspense Fallback"):ct("Suspense");case 19:return ct("SuspenseList");case 0:case 15:return wt(t.type,!1);case 11:return wt(t.type.render,!1);case 1:return wt(t.type,!0);case 31:return ct("Activity");case 30:return ct("ViewTransition");default:return""}}function _t(t){try{var n="",a=null;do n+=Lt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var yt=Object.prototype.hasOwnProperty,Nt=o.unstable_scheduleCallback,te=o.unstable_cancelCallback,Bt=o.unstable_shouldYield,zt=o.unstable_requestPaint,qt=o.unstable_now,ae=o.unstable_getCurrentPriorityLevel,de=o.unstable_ImmediatePriority,J=o.unstable_UserBlockingPriority,Dt=o.unstable_NormalPriority,Mt=o.unstable_LowPriority,Ot=o.unstable_IdlePriority,Xt=o.log,bt=o.unstable_setDisableYieldValue,$t=null,Vt=null;function Ne(t){if(typeof Xt=="function"&&bt(t),Vt&&typeof Vt.setStrictMode=="function")try{Vt.setStrictMode($t,t)}catch{}}var he=Math.clz32?Math.clz32:Gc,ii=Math.log,_i=Math.LN2;function Gc(t){return t>>>=0,t===0?32:31-(ii(t)/_i|0)|0}var es=256,Mr=262144,Fa=4194304;function da(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function yr(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~c,r!==0?l=da(r):(g&=A,g!==0?l=da(g):a||(a=A&~t,a!==0&&(l=da(a))))):(A=r&~c,A!==0?l=da(A):g!==0?l=da(g):a||(a=r&~t,a!==0&&(l=da(a)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:l}function Ha(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Vi(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-he(a),l=1<<r;n|=t[r],a&=~l}return n}function ho(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function po(){var t=Fa;return Fa<<=1,(Fa&62914560)===0&&(Fa=4194304),t}function ns(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Xi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Nl(t,n,a,r,l,c){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,F=t.expirationTimes,et=t.hiddenUpdates;for(a=g&~a;0<a;){var ft=31-he(a),xt=1<<ft;A[ft]=0,F[ft]=-1;var j=et[ft];if(j!==null)for(et[ft]=null,ft=0;ft<j.length;ft++){var ut=j[ft];ut!==null&&(ut.lane&=-536870913)}a&=~xt}r!==0&&Er(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~n))}function Er(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-he(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function mo(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-he(a),l=1<<r;l&n|t[r]&n&&(t[r]|=n),a&=~l}}function go(t,n){var a=n&-n;return a=(a&42)!==0?1:_o(a),(a&(t.suspendedLanes|n))!==0?0:a}function _o(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function vo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ul(){var t=At.p;return t!==0?t:(t=window.event,t===void 0?32:Av(t.type))}function Ll(t,n){var a=At.p;try{return At.p=t,n()}finally{At.p=a}}var vi=Math.random().toString(36).slice(2),b="__reactFiber$"+vi,Y="__reactProps$"+vi,dt="__reactContainer$"+vi,st="__reactEvents$"+vi,lt="__reactListeners$"+vi,Ft="__reactHandles$"+vi,Wt="__reactResources$"+vi,Pt="__reactMarker$"+vi,Qt="__reactLoad$"+vi;function Jt(t){delete t[b],delete t[Y],delete t[lt],delete t[Ft]}function le(t){var n;if(n=t[b])return n;for(var a=t.parentNode;a;){if(n=a[dt]||a[b]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=sv(t);t!==null;){if(a=t[b])return a;t=sv(t)}return n}t=a,a=t.parentNode}return null}function pe(t){if(t=t[b]||t[dt]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Zt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ee(t){var n=t[Wt];return n||(n=t[Wt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function xe(t){t[Pt]=!0}function Ke(t){t[Qt]=void 0}var Xe=new Set,Sn={};function Ht(t,n){ln(t,n),ln(t+"Capture",n)}function ln(t,n){for(Sn[t]=n,t=0;t<n.length;t++)Xe.add(n[t])}var Ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gn={},ai={};function ki(t){return yt.call(ai,t)?!0:yt.call(Gn,t)?!1:Ue.test(t)?ai[t]=!0:(Gn[t]=!0,!1)}var Me=!1;function Ge(){var t=Me;return Me=!1,t}function je(t,n,a){if(ki(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function ri(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function Re(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function un(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ha(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ol(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(g){a=""+g,c.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Vc(t){if(!t._valueTracker){var n=ha(t)?"checked":"value";t._valueTracker=Ol(t,n,""+t[n])}}function Dm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=ha(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var tM=/[\n"\\]/g;function Si(t){return t.replace(tM,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xc(t,n,a,r,l,c,g,A){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+un(n)):t.value!==""+un(n)&&(t.value=""+un(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?g==="number"&&t.value==n?kc(t,un(t.value)):kc(t,un(n)):a!=null?kc(t,un(a)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+un(A):t.removeAttribute("name")}function Nm(t,n,a,r,l,c,g,A){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Vc(t);return}a=a!=null?""+un(a):"",n=n!=null?""+un(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Vc(t)}function kc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function is(t,n,a,r){if(t=t.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=n.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&r&&(t[a].defaultSelected=!0)}else{for(a=""+un(a),n=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function Um(t,n,a){if(n!=null&&(n=""+un(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+un(a):""}function Lm(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Ct(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=un(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Vc(t)}function as(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var eM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Om(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||eM.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Pm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Me=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&a[l]!==r&&(Om(t,l,r),Me=!0)}else for(var c in n)n.hasOwnProperty(c)&&Om(t,c,n[c])}function qc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),iM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pl(t){return iM.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qi(){}var Wc=null;function Yc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rs=null,ss=null;function Im(t){var n=pe(t);if(n&&(t=n.stateNode)){var a=t[Y]||null;t:switch(t=n.stateNode,n.type){case"input":if(Xc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Si(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var l=r[Y]||null;if(!l)throw Error(s(90));Xc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Dm(r)}break t;case"textarea":Um(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&is(t,!!a.multiple,n,!1)}}}var Zc=!1;function zm(t,n,a){if(Zc)return t(n,a);Zc=!0;try{var r=t(n);return r}finally{if(Zc=!1,(rs!==null||ss!==null)&&(Pu(),rs&&(n=rs,t=ss,ss=rs=null,Im(n),t)))for(n=0;n<t.length;n++)Im(t[n])}}function So(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Y]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(pa)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{Kc=!1}var Ga=null,Qc=null,Il=null;function Bm(){if(Il)return Il;var t,n=Qc,a=n.length,r,l="value"in Ga?Ga.value:Ga.textContent,c=l.length;for(t=0;t<a&&n[t]===l[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===l[c-r];r++);return Il=l.slice(t,1<r?1-r:void 0)}function zl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Bl(){return!0}function Fm(){return!1}function Vn(t){function n(a,r,l,c,g){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(c):c[A]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Bl:Fm,this.isPropagationStopped=Fm,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),n}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=Vn(Va),Mo=z({},Va,{view:0,detail:0}),aM=Vn(Mo),Jc,jc,yo,Hl=z({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(Jc=t.screenX-yo.screenX,jc=t.screenY-yo.screenY):jc=Jc=0,yo=t),Jc)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),Hm=Vn(Hl),rM=z({},Hl,{dataTransfer:0}),sM=Vn(rM),oM=z({},Mo,{relatedTarget:0}),$c=Vn(oM),lM=z({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),uM=Vn(lM),cM=z({},Va,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fM=Vn(cM),dM=z({},Va,{data:0}),Gm=Vn(dM),hM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gM(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=mM[t])?!!n[t]:!1}function tf(){return gM}var _M=z({},Mo,{key:function(t){if(t.key){var n=hM[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tf,charCode:function(t){return t.type==="keypress"?zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vM=Vn(_M),SM=z({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vm=Vn(SM),xM=z({},Va,{submitter:0}),MM=Vn(xM),yM=z({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tf}),EM=Vn(yM),TM=z({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),bM=Vn(TM),AM=z({},Hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),RM=Vn(AM),CM=z({},Va,{newState:0,oldState:0,source:0}),wM=Vn(CM),DM=[9,13,27,32],ef=pa&&"CompositionEvent"in window,Eo=null;pa&&"documentMode"in document&&(Eo=document.documentMode);var NM=pa&&"TextEvent"in window&&!Eo,Xm=pa&&(!ef||Eo&&8<Eo&&11>=Eo),km=" ",qm=!1;function Wm(t,n){switch(t){case"keyup":return DM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ym(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function UM(t,n){switch(t){case"compositionend":return Ym(n);case"keypress":return n.which!==32?null:(qm=!0,km);case"textInput":return t=n.data,t===km&&qm?null:t;default:return null}}function LM(t,n){if(os)return t==="compositionend"||!ef&&Wm(t,n)?(t=Bm(),Il=Qc=Ga=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Xm&&n.locale!=="ko"?null:n.data;default:return null}}var OM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!OM[t.type]:n==="textarea"}function Km(t,n,a,r){rs?ss?ss.push(r):ss=[r]:rs=r,n=Gu(n,"onChange"),0<n.length&&(a=new Fl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var To=null,bo=null;function PM(t){I_(t,0)}function Gl(t){var n=Zt(t);if(Dm(n))return t}function Qm(t,n){if(t==="change")return n}var Jm=!1;if(pa){var nf;if(pa){var af="oninput"in document;if(!af){var jm=document.createElement("div");jm.setAttribute("oninput","return;"),af=typeof jm.oninput=="function"}nf=af}else nf=!1;Jm=nf&&(!document.documentMode||9<document.documentMode)}function $m(){To&&(To.detachEvent("onpropertychange",t0),bo=To=null)}function t0(t){if(t.propertyName==="value"&&Gl(bo)){var n=[];Km(n,bo,t,Yc(t)),zm(PM,n)}}function IM(t,n,a){t==="focusin"?($m(),To=n,bo=a,To.attachEvent("onpropertychange",t0)):t==="focusout"&&$m()}function zM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gl(bo)}function BM(t,n){if(t==="click")return Gl(n)}function FM(t,n){if(t==="input"||t==="change")return Gl(n)}function HM(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var si=typeof Object.is=="function"?Object.is:HM;function Ao(t,n){if(si(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!yt.call(n,l)||!si(t[l],n[l]))return!1}return!0}function rf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function e0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function n0(t,n){var a=e0(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=e0(a)}}function i0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?i0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function a0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=rf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=rf(t.document)}return n}function sf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var GM=pa&&"documentMode"in document&&11>=document.documentMode,ls=null,of=null,Ro=null,lf=!1;function r0(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lf||ls==null||ls!==rf(r)||(r=ls,"selectionStart"in r&&sf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ro&&Ao(Ro,r)||(Ro=r,r=Gu(of,"onSelect"),0<r.length&&(n=new Fl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=ls)))}function Tr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var us={animationend:Tr("Animation","AnimationEnd"),animationiteration:Tr("Animation","AnimationIteration"),animationstart:Tr("Animation","AnimationStart"),transitionrun:Tr("Transition","TransitionRun"),transitionstart:Tr("Transition","TransitionStart"),transitioncancel:Tr("Transition","TransitionCancel"),transitionend:Tr("Transition","TransitionEnd")},uf={},s0={};pa&&(s0=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function br(t){if(uf[t])return uf[t];if(!us[t])return t;var n=us[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in s0)return uf[t]=n[a];return t}var o0=br("animationend"),l0=br("animationiteration"),u0=br("animationstart"),VM=br("transitionrun"),XM=br("transitionstart"),kM=br("transitioncancel"),c0=br("transitionend"),f0=new Map,cf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cf.push("scrollEnd");function Di(t,n){f0.set(t,n),Ht(n,[t])}var qM=0;function ma(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Oi.identifierPrefix;var a=qM++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function d0(t){if(t==null||typeof t=="string")return t;var n=null,a=ws;if(a!==null)for(var r=0;r<a.length;r++){var l=t[a[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function ga(t,n){return t=d0(t),n=d0(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Vl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},xi=[],cs=0,ff=0;function Xl(){for(var t=cs,n=ff=cs=0;n<t;){var a=xi[n];xi[n++]=null;var r=xi[n];xi[n++]=null;var l=xi[n];xi[n++]=null;var c=xi[n];if(xi[n++]=null,r!==null&&l!==null){var g=r.pending;g===null?l.next=l:(l.next=g.next,g.next=l),r.pending=l}c!==0&&h0(a,l,c)}}function kl(t,n,a,r){xi[cs++]=t,xi[cs++]=n,xi[cs++]=a,xi[cs++]=r,ff|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function df(t,n,a,r){return kl(t,n,a,r),ql(t)}function Ar(t,n){return kl(t,null,null,n),ql(t)}function h0(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var l=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-he(a),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=a|536870912),c):null}function ql(t){if(50<Ko)throw Ko=0,Ou=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var fs={};function WM(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,r){return new WM(t,n,a,r)}function hf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _a(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function p0(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Wl(t,n,a,r,l,c){var g=0;if(r=t,typeof r=="function")hf(r)&&(g=1);else if(typeof r=="string")g=xE(t,a,Be.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case St:return t=Kn(31,a,n,l),t.elementType=St,t.lanes=c,t;case O:return Rr(a.children,l,c,n);case B:g=8,l|=24;break;case q:return t=Kn(12,a,n,l|2),t.elementType=q,t.lanes=c,t;case W:return t=Kn(13,a,n,l),t.elementType=W,t.lanes=c,t;case nt:return t=Kn(19,a,n,l),t.elementType=nt,t.lanes=c,t;case kt:case H:return t=l|32,t=Kn(30,a,n,t),t.elementType=H,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Q:g=10;break t;case V:g=9;break t;case k:g=11;break t;case at:g=14;break t;case ht:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Kn(g,a,n,l),n.elementType=t,n.type=r,n.lanes=c,n}function Rr(t,n,a,r){return t=Kn(7,t,r,n),t.lanes=a,t}function pf(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function m0(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function mf(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var g0=new WeakMap;function Mi(t,n){if(typeof t=="object"&&t!==null){var a=g0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:_t(n)},g0.set(t,n),n)}return{value:t,source:n,stack:_t(n)}}var ds=[],hs=0,Yl=null,Co=0,yi=[],Ei=0,Xa=null,Wi=1,Yi="";function va(t,n){ds[hs++]=Co,ds[hs++]=Yl,Yl=t,Co=n}function _0(t,n,a){yi[Ei++]=Wi,yi[Ei++]=Yi,yi[Ei++]=Xa,Xa=t;var r=Wi;t=Yi;var l=32-he(r)-1;r&=~(1<<l),a+=1;var c=32-he(n)+l;if(30<c){var g=l-l%5;c=(r&(1<<g)-1).toString(32),r>>=g,l-=g,Wi=1<<32-he(n)+l|a<<l|r,Yi=c+t}else Wi=1<<c|a<<l|r,Yi=t}function Zl(t){t.return!==null&&(va(t,1),_0(t,1,0))}function gf(t){for(;t===Yl;)Yl=ds[--hs],ds[hs]=null,Co=ds[--hs],ds[hs]=null;for(;t===Xa;)Xa=yi[--Ei],yi[Ei]=null,Yi=yi[--Ei],yi[Ei]=null,Wi=yi[--Ei],yi[Ei]=null}function v0(t,n){yi[Ei++]=Wi,yi[Ei++]=Yi,yi[Ei++]=Xa,Wi=n.id,Yi=n.overflow,Xa=t}var En=null,$e=null,ye=!1,ka=null,Ti=!1,_f=Error(s(519));function qa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wo(Mi(n,t)),_f}function S0(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[b]=t,n[Y]=r,a){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(a=0;a<Jo.length;a++)be(Jo[a],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":be("invalid",n),Nm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":be("invalid",n);break;case"textarea":be("invalid",n),Lm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||H_(n.textContent,a)?(r.popover!=null&&(be("beforetoggle",n),be("toggle",n)),r.onScroll!=null&&be("scroll",n),r.onScrollEnd!=null&&be("scrollend",n),r.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||qa(t,!0)}function Kl(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:En=En.return}}function ps(t){if(t!==En)return!1;if(!ye)return Kl(t),ye=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Yd(t.type,t.memoizedProps)),a=!a),a&&$e&&qa(t),Kl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$e=rv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$e=rv(t)}else n===27?(n=$e,or(t.type)?(t=nh,nh=null,$e=t):$e=n):$e=En?Ai(t.stateNode.nextSibling):null;return!0}function Cr(){$e=En=null,ye=!1}function vf(){var t=ka;return t!==null&&(jn===null?jn=t:jn.push.apply(jn,t),ka=null),t}function wo(t){ka===null?ka=[t]:ka.push(t)}var Sf=re(null),wr=null,Sa=null;function Wa(t,n,a){ie(Sf,n._currentValue),n._currentValue=a}function xa(t){t._currentValue=Sf.current,Yt(Sf)}function Ql(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function xf(t,n,a,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var g=l.child;c=c.firstContext;t:for(;c!==null;){var A=c;c=l;for(var F=0;F<n.length;F++)if(A.context===n[F]){c.lanes|=a,A=c.alternate,A!==null&&(A.lanes|=a),Ql(c.return,a,t),r||(g=null);break t}c=A.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(s(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),Ql(g,a,t),g=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,g=l.alternate,g!==null&&(g.lanes|=a),Ql(l.return,a,t),g=l.child,g=g!==null?g.sibling:null):g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===t){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function Dr(t,n,a,r){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var A=l.type;si(l.pendingProps.value,g.value)||(t!==null?t.push(A):t=[A])}}else if(l===De.current){if(g=l.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Fs):t=[Fs])}l=l.return}return t!==null&&xf(n,t,a,r),n.flags|=262144,t!==null}function Jl(t){for(t=t.firstContext;t!==null;){if(!si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Nr(t){wr=t,Sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return x0(wr,t)}function jl(t,n){return wr===null&&Nr(t),x0(t,n)}function x0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Sa===null){if(t===null)throw Error(s(308));Sa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Sa=Sa.next=n;return a}var YM=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ZM=o.unstable_scheduleCallback,KM=o.unstable_NormalPriority,hn={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mf(){return{controller:new YM,data:new Map,refCount:0}}function Do(t){t.refCount--,t.refCount===0&&ZM(KM,function(){t.controller.abort()})}function M0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var No=null;function QM(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Uo=null,yf=0,Ur=0,ms=null;function JM(t,n){if(Uo===null){var a=Uo=[];yf=0,Ur=Bd(),ms={status:"pending",value:void 0,then:function(r){a.push(r)}}}return yf++,n.then(y0,y0),n}function y0(){if(--yf===0&&(No=null,Uo!==null)){ms!==null&&(ms.status="fulfilled");var t=Uo;Uo=null,Ur=0,ms=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function jM(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var E0=pt.S;pt.S=function(t,n){if(m_=qt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&JM(t,n),No!==null)for(var a=Ls;a!==null;)M0(a,No),a=a.next;if(a=t.types,a!==null){for(var r=Ls;r!==null;)M0(r,a),r=r.next;if(Ur!==0){r=No,r===null&&(r=No=[]);for(var l=0;l<a.length;l++){var c=a[l];r.indexOf(c)===-1&&r.push(c)}}}E0!==null&&E0(t,n)};var Lr=re(null);function Ef(){var t=Lr.current;return t!==null?t:Je.pooledCache}function $l(t,n){n===null?ie(Lr,Lr.current):ie(Lr,n.pool)}function T0(){var t=Ef();return t===null?null:{parent:hn._currentValue,pool:t}}var gs=Error(s(460)),Tf=Error(s(474)),tu=Error(s(542)),eu={then:function(){}};function b0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function A0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,C0(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(qi,qi);else{if(t=Je,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,C0(t),t}throw Pr=n,gs}}function Or(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Pr=a,gs):a}}var Pr=null;function R0(){if(Pr===null)throw Error(s(459));var t=Pr;return Pr=null,t}function C0(t){if(t===gs||t===tu)throw Error(s(483))}var _s=null,Lo=0;function nu(t){var n=Lo;return Lo+=1,_s===null&&(_s=[]),A0(_s,t,n)}function Ya(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function iu(t,n){throw n.$$typeof===E?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function w0(t){function n($,Z){if(t){var rt=$.deletions;rt===null?($.deletions=[Z],$.flags|=16):rt.push(Z)}}function a($,Z){if(!t)return null;for(;Z!==null;)n($,Z),Z=Z.sibling;return null}function r($){for(var Z=new Map;$!==null;)$.key===null?Z.set($.index,$):Z.set($.key,$),$=$.sibling;return Z}function l($,Z){return $=_a($,Z),$.index=0,$.sibling=null,$}function c($,Z,rt){return $.index=rt,t?(rt=$.alternate,rt!==null?(rt=rt.index,rt<Z?($.flags|=2,Z):rt):($.flags|=134217730,Z)):($.flags|=1048576,Z)}function g($){return t&&$.alternate===null&&($.flags|=134217730),$}function A($,Z,rt,vt){return Z===null||Z.tag!==6?(Z=pf(rt,$.mode,vt),Z.return=$,Z):(Z=l(Z,rt),Z.return=$,Z)}function F($,Z,rt,vt){var Kt=rt.type;return Kt===O?($=ft($,Z,rt.props.children,vt,rt.key),Ya($,rt),$):Z!==null&&(Z.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===ht&&Or(Kt)===Z.type)?(Z=l(Z,rt.props),Ya(Z,rt),Z.return=$,Z):(Z=Wl(rt.type,rt.key,rt.props,null,$.mode,vt),Ya(Z,rt),Z.return=$,Z)}function et($,Z,rt,vt){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==rt.containerInfo||Z.stateNode.implementation!==rt.implementation?(Z=mf(rt,$.mode,vt),Z.return=$,Z):(Z=l(Z,rt.children||[]),Z.return=$,Z)}function ft($,Z,rt,vt,Kt){return Z===null||Z.tag!==7?(Z=Rr(rt,$.mode,vt,Kt),Z.return=$,Z):(Z=l(Z,rt),Z.return=$,Z)}function xt($,Z,rt){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=pf(""+Z,$.mode,rt),Z.return=$,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case L:return rt=Wl(Z.type,Z.key,Z.props,null,$.mode,rt),Ya(rt,Z),rt.return=$,rt;case w:return Z=mf(Z,$.mode,rt),Z.return=$,Z;case ht:return Z=Or(Z),xt($,Z,rt)}if(Ct(Z)||X(Z))return Z=Rr(Z,$.mode,rt,null),Z.return=$,Z;if(typeof Z.then=="function")return xt($,nu(Z),rt);if(Z.$$typeof===Q)return xt($,jl($,Z),rt);iu($,Z)}return null}function j($,Z,rt,vt){var Kt=Z!==null?Z.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return Kt!==null?null:A($,Z,""+rt,vt);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case L:return rt.key===Kt?F($,Z,rt,vt):null;case w:return rt.key===Kt?et($,Z,rt,vt):null;case ht:return rt=Or(rt),j($,Z,rt,vt)}if(Ct(rt)||X(rt))return Kt!==null?null:ft($,Z,rt,vt,null);if(typeof rt.then=="function")return j($,Z,nu(rt),vt);if(rt.$$typeof===Q)return j($,Z,jl($,rt),vt);iu($,rt)}return null}function ut($,Z,rt,vt,Kt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return $=$.get(rt)||null,A(Z,$,""+vt,Kt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case L:return $=$.get(vt.key===null?rt:vt.key)||null,F(Z,$,vt,Kt);case w:return $=$.get(vt.key===null?rt:vt.key)||null,et(Z,$,vt,Kt);case ht:return vt=Or(vt),ut($,Z,rt,vt,Kt)}if(Ct(vt)||X(vt))return $=$.get(rt)||null,ft(Z,$,vt,Kt,null);if(typeof vt.then=="function")return ut($,Z,rt,nu(vt),Kt);if(vt.$$typeof===Q)return ut($,Z,rt,jl(Z,vt),Kt);iu(Z,vt)}return null}function It($,Z,rt,vt){for(var Kt=null,we=null,ee=Z,se=Z=0,gn=null;ee!==null&&se<rt.length;se++){ee.index>se?(gn=ee,ee=null):gn=ee.sibling;var Ie=j($,ee,rt[se],vt);if(Ie===null){ee===null&&(ee=gn);break}t&&ee&&Ie.alternate===null&&n($,ee),Z=c(Ie,Z,se),we===null?Kt=Ie:we.sibling=Ie,we=Ie,ee=gn}if(se===rt.length)return a($,ee),ye&&va($,se),Kt;if(ee===null){for(;se<rt.length;se++)ee=xt($,rt[se],vt),ee!==null&&(Z=c(ee,Z,se),we===null?Kt=ee:we.sibling=ee,we=ee);return ye&&va($,se),Kt}for(ee=r(ee);se<rt.length;se++)gn=ut(ee,$,se,rt[se],vt),gn!==null&&(t&&(Ie=gn.alternate,Ie!==null&&ee.delete(Ie.key===null?se:Ie.key)),Z=c(gn,Z,se),we===null?Kt=gn:we.sibling=gn,we=gn);return t&&ee.forEach(function(dr){return n($,dr)}),ye&&va($,se),Kt}function jt($,Z,rt,vt){if(rt==null)throw Error(s(151));for(var Kt=null,we=null,ee=Z,se=Z=0,gn=null,Ie=rt.next();ee!==null&&!Ie.done;se++,Ie=rt.next()){ee.index>se?(gn=ee,ee=null):gn=ee.sibling;var dr=j($,ee,Ie.value,vt);if(dr===null){ee===null&&(ee=gn);break}t&&ee&&dr.alternate===null&&n($,ee),Z=c(dr,Z,se),we===null?Kt=dr:we.sibling=dr,we=dr,ee=gn}if(Ie.done)return a($,ee),ye&&va($,se),Kt;if(ee===null){for(;!Ie.done;se++,Ie=rt.next())Ie=xt($,Ie.value,vt),Ie!==null&&(Z=c(Ie,Z,se),we===null?Kt=Ie:we.sibling=Ie,we=Ie);return ye&&va($,se),Kt}for(ee=r(ee);!Ie.done;se++,Ie=rt.next())Ie=ut(ee,$,se,Ie.value,vt),Ie!==null&&(t&&(gn=Ie.alternate,gn!==null&&ee.delete(gn.key===null?se:gn.key)),Z=c(Ie,Z,se),we===null?Kt=Ie:we.sibling=Ie,we=Ie);return t&&ee.forEach(function(UE){return n($,UE)}),ye&&va($,se),Kt}function ve($,Z,rt,vt){if(typeof rt=="object"&&rt!==null&&rt.type===O&&rt.key===null&&rt.props.ref===void 0&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case L:t:{for(var Kt=rt.key;Z!==null;){if(Z.key===Kt){if(Kt=rt.type,Kt===O){if(Z.tag===7){a($,Z.sibling),vt=l(Z,rt.props.children),Ya(vt,rt),vt.return=$,$=vt;break t}}else if(Z.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===ht&&Or(Kt)===Z.type){a($,Z.sibling),vt=l(Z,rt.props),Ya(vt,rt),vt.return=$,$=vt;break t}a($,Z);break}else n($,Z);Z=Z.sibling}rt.type===O?(vt=Rr(rt.props.children,$.mode,vt,rt.key),Ya(vt,rt),vt.return=$,$=vt):(vt=Wl(rt.type,rt.key,rt.props,null,$.mode,vt),Ya(vt,rt),vt.return=$,$=vt)}return g($);case w:t:{for(Kt=rt.key;Z!==null;){if(Z.key===Kt)if(Z.tag===4&&Z.stateNode.containerInfo===rt.containerInfo&&Z.stateNode.implementation===rt.implementation){a($,Z.sibling),vt=l(Z,rt.children||[]),vt.return=$,$=vt;break t}else{a($,Z);break}else n($,Z);Z=Z.sibling}vt=mf(rt,$.mode,vt),vt.return=$,$=vt}return g($);case ht:return rt=Or(rt),ve($,Z,rt,vt)}if(Ct(rt))return It($,Z,rt,vt);if(X(rt)){if(Kt=X(rt),typeof Kt!="function")throw Error(s(150));return rt=Kt.call(rt),jt($,Z,rt,vt)}if(typeof rt.then=="function")return ve($,Z,nu(rt),vt);if(rt.$$typeof===Q)return ve($,Z,jl($,rt),vt);iu($,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,Z!==null&&Z.tag===6?(a($,Z.sibling),vt=l(Z,rt),vt.return=$,$=vt):(a($,Z),vt=pf(rt,$.mode,vt),vt.return=$,$=vt),g($)):a($,Z)}return function($,Z,rt,vt){try{Lo=0;var Kt=ve($,Z,rt,vt);return _s=null,Kt}catch(ee){if(ee===gs||ee===tu)throw ee;var we=Kn(29,ee,null,$.mode);return we.lanes=vt,we.return=$,we}}}var Ir=w0(!0),D0=w0(!1),Za=!1;function bf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Af(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ve&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=ql(t),h0(t,null,a),n}return kl(t,r,n,a),ql(t)}function Oo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,mo(t,a)}}function Rf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?l=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?l=c=n:c=c.next=n}else l=c=n;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Cf=!1;function Po(){if(Cf){var t=ms;if(t!==null)throw t}}function Io(t,n,a,r){Cf=!1;var l=t.updateQueue;Za=!1;var c=l.firstBaseUpdate,g=l.lastBaseUpdate,A=l.shared.pending;if(A!==null){l.shared.pending=null;var F=A,et=F.next;F.next=null,g===null?c=et:g.next=et,g=F;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==g&&(A===null?ft.firstBaseUpdate=et:A.next=et,ft.lastBaseUpdate=F))}if(c!==null){var xt=l.baseState;g=0,ft=et=F=null,A=c;do{var j=A.lane&-536870913,ut=j!==A.lane;if(ut?(Ce&j)===j:(r&j)===j){j!==0&&j===Ur&&(Cf=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var It=t,jt=A;j=n;var ve=a;switch(jt.tag){case 1:if(It=jt.payload,typeof It=="function"){xt=It.call(ve,xt,j);break t}xt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=jt.payload,j=typeof It=="function"?It.call(ve,xt,j):It,j==null)break t;xt=z({},xt,j);break t;case 2:Za=!0}}j=A.callback,j!==null&&(t.flags|=64,ut&&(t.flags|=8192),ut=l.callbacks,ut===null?l.callbacks=[j]:ut.push(j))}else ut={lane:j,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?(et=ft=ut,F=xt):ft=ft.next=ut,g|=j;if(A=A.next,A===null){if(A=l.shared.pending,A===null)break;ut=A,A=ut.next,ut.next=null,l.lastBaseUpdate=ut,l.shared.pending=null}}while(!0);ft===null&&(F=xt),l.baseState=F,l.firstBaseUpdate=et,l.lastBaseUpdate=ft,c===null&&(l.shared.lanes=0),ir|=g,t.lanes=g,t.memoizedState=xt}}function N0(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function U0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)N0(a[t],n)}var Ja=re(null),au=re(0);function L0(t,n){t=ba,ie(au,t),ie(Ja,n),ba=t|n.baseLanes}function wf(){ie(au,ba),ie(Ja,Ja.current)}function Df(){ba=au.current,Yt(Ja),Yt(au)}var Cn=re(null),Pn=null;function ja(t){var n=t.alternate;ie(wn,wn.current&1),ie(Cn,t),Pn===null&&(n===null||Ja.current!==null||n.memoizedState!==null)&&(Pn=t)}function Nf(t){ie(wn,wn.current),ie(Cn,t),Pn===null&&(Pn=t)}function O0(t){t.tag===22?(ie(wn,wn.current),ie(Cn,t),Pn===null&&(Pn=t)):$a()}function $a(){ie(wn,wn.current),ie(Cn,Cn.current)}function oi(t){Yt(Cn),Pn===t&&(Pn=null),Yt(wn)}var wn=re(0);function zo(t,n){ie(Cn,Cn.current),ie(wn,n)}function Uf(t){Yt(wn),Yt(Cn),Pn===t&&(Pn=null)}function ru(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||th(a)||eh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ma=0,_e=null,Qe=null,pn=null,su=!1,vs=!1,zr=!1,ou=0,Bo=0,Ss=null,$M=0;function cn(){throw Error(s(321))}function Lf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!si(t[a],n[a]))return!1;return!0}function Of(t,n,a,r,l,c){return Ma=c,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,pt.H=t===null||t.memoizedState===null?_g:vg,zr=!1,c=a(r,l),zr=!1,vs&&(c=I0(n,a,r,l)),P0(t),c}function P0(t){pt.H=pu;var n=Qe!==null&&Qe.next!==null;if(Ma=0,pn=Qe=_e=null,su=!1,Bo=0,Ss=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&Jl(t)&&(mn=!0))}function I0(t,n,a,r){_e=t;var l=0;do{if(vs&&(Ss=null),Bo=0,vs=!1,25<=l)throw Error(s(301));if(l+=1,pn=Qe=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}pt.H=oy,c=n(a,r)}while(vs);return c}function ty(){var t=pt.H,n=t.useState()[0];return n=typeof n.then=="function"?Fo(n):n,t=t.useState()[0],(Qe!==null?Qe.memoizedState:null)!==t&&(_e.flags|=1024),n}function Pf(){var t=ou!==0;return ou=0,t}function If(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function zf(t){if(su){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}su=!1}Ma=0,pn=Qe=_e=null,vs=!1,Bo=ou=0,Ss=null}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?_e.memoizedState=pn=t:pn=pn.next=t,pn}function dn(){if(Qe===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var n=pn===null?_e.memoizedState:pn.next;if(n!==null)pn=n,Qe=t;else{if(t===null)throw _e.alternate===null?Error(s(467)):Error(s(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},pn===null?_e.memoizedState=pn=t:pn=pn.next=t}return pn}function lu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(t){var n=Bo;return Bo+=1,Ss===null&&(Ss=[]),t=A0(Ss,t,n),n=_e,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,pt.H=n===null||n.memoizedState===null?_g:vg),t}function uu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Fo(t);if(t.$$typeof===mt)return;if(t.$$typeof===Q)return Rn(t)}throw Error(s(438,String(t)))}function Bf(t){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=_e.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=lu(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=Ut;return n.index++,a}function ya(t,n){return typeof n=="function"?n(t):n}function cu(t){var n=dn();return Ff(n,Qe,t)}function Ff(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var g=l.next;l.next=c.next,c.next=g}n.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var A=g=null,F=null,et=n,ft=!1;do{var xt=et.lane&-536870913;if(xt!==et.lane?(Ce&xt)===xt:(Ma&xt)===xt){var j=et.revertLane;if(j===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),xt===Ur&&(ft=!0);else if((Ma&j)===j){et=et.next,j===Ur&&(ft=!0);continue}else xt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},F===null?(A=F=xt,g=c):F=F.next=xt,_e.lanes|=j,ir|=j;xt=et.action,zr&&a(c,xt),c=et.hasEagerState?et.eagerState:a(c,xt)}else j={lane:xt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},F===null?(A=F=j,g=c):F=F.next=j,_e.lanes|=xt,ir|=xt;et=et.next}while(et!==null&&et!==n);if(F===null?g=c:F.next=A,!si(c,t.memoizedState)&&(mn=!0,ft&&(a=ms,a!==null)))throw a;t.memoizedState=c,t.baseState=g,t.baseQueue=F,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Hf(t){var n=dn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,l=a.pending,c=n.memoizedState;if(l!==null){a.pending=null;var g=l=l.next;do c=t(c,g.action),g=g.next;while(g!==l);si(c,n.memoizedState)||(mn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,r]}function z0(t,n,a){var r=_e,l=dn(),c=ye;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!si((Qe||l).memoizedState,a);if(g&&(l.memoizedState=a,mn=!0),l=l.queue,Xf(H0.bind(null,r,l,t),[t]),t=l.getSnapshot!==n||g||pn!==null&&(pn.memoizedState.tag&1)!==0,xs(t?9:8,{destroy:void 0},F0.bind(null,r,l,a,n),null),t){if(r.flags|=2048,Je===null)throw Error(s(349));c||(Ma&127)!==0||B0(r,n,a)}return a}function B0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=lu(),_e.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function F0(t,n,a,r){n.value=a,n.getSnapshot=r,G0(n)&&V0(t)}function H0(t,n,a){return a(function(){G0(n)&&V0(t)})}function G0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!si(t,a)}catch{return!0}}function V0(t){var n=Ar(t,2);n!==null&&$n(n,t,2)}function Gf(t){var n=Xn();if(typeof t=="function"){var a=t;if(t=a(),zr){Ne(!0);try{a()}finally{Ne(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},n}function X0(t,n,a,r){return t.baseState=a,Ff(t,Qe,typeof r=="function"?r:ya)}function ey(t,n,a,r,l){if(hu(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};pt.T!==null?a(!0):c.isTransition=!1,r(c),a=n.pending,a===null?(c.next=n.pending=c,k0(n,c)):(c.next=a.next,n.pending=a.next=c)}}function k0(t,n){var a=n.action,r=n.payload,l=t.state;if(n.isTransition){var c=pt.T,g={};g.types=c!==null?c.types:null,pt.T=g;try{var A=a(l,r),F=pt.S;F!==null&&F(g,A),q0(t,n,A)}catch(et){Vf(t,n,et)}finally{c!==null&&g.types!==null&&(c.types=g.types),pt.T=c}}else try{c=a(l,r),q0(t,n,c)}catch(et){Vf(t,n,et)}}function q0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){W0(t,n,r)},function(r){return Vf(t,n,r)}):W0(t,n,a)}function W0(t,n,a){n.status="fulfilled",n.value=a,Y0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,k0(t,a)))}function Vf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Y0(n),n=n.next;while(n!==r)}t.action=null}function Y0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Z0(t,n){return n}function K0(t,n){if(ye){var a=Je.formState;if(a!==null){t:{var r=_e;if(ye){if($e){e:{for(var l=$e,c=Ti;l.nodeType!==8;){if(!c){l=null;break e}if(l=Ai(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){$e=Ai(l.nextSibling),r=l.data==="F!";break t}}qa(r)}r=!1}r&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Z0,lastRenderedState:n},a.queue=r,a=pg.bind(null,_e,r),r.dispatch=a,r=Gf(!1),c=Zf.bind(null,_e,!1,r.queue),r=Xn(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,a=ey.bind(null,_e,l,c,a),l.dispatch=a,r.memoizedState=t,[n,a,!1]}function Q0(t){var n=dn();return J0(n,Qe,t)}function J0(t,n,a){if(n=Ff(t,n,Z0)[0],t=cu(ya)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Fo(n)}catch(g){throw g===gs?tu:g}else r=n;n=dn();var l=n.queue,c=l.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,xs(9,{destroy:void 0},ny.bind(null,l,a),null)),[r,c,t]}function ny(t,n){t.action=n}function j0(t){var n=dn(),a=Qe;if(a!==null)return J0(n,a,t);dn(),n=n.memoizedState,a=dn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function xs(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=_e.updateQueue,n===null&&(n=lu(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function $0(){return dn().memoizedState}function fu(t,n,a,r){var l=Xn();_e.flags|=t,l.memoizedState=xs(1|n,{destroy:void 0},a,r===void 0?null:r)}function du(t,n,a,r){var l=dn();r=r===void 0?null:r;var c=l.memoizedState.inst;Qe!==null&&r!==null&&Lf(r,Qe.memoizedState.deps)?l.memoizedState=xs(n,c,a,r):(_e.flags|=t,l.memoizedState=xs(1|n,c,a,r))}function tg(t,n){fu(8390656,8,t,n)}function Xf(t,n){du(2048,8,t,n)}function iy(t){_e.flags|=4;var n=_e.updateQueue;if(n===null)n=lu(),_e.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function eg(t){var n=dn().memoizedState;return iy({ref:n,nextImpl:t}),function(){if((Ve&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function ng(t,n){return du(4,2,t,n)}function ig(t,n){return du(4,4,t,n)}function ag(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function rg(t,n,a){a=a!=null?a.concat([t]):null,du(4,4,ag.bind(null,n,t),a)}function kf(){}function sg(t,n){var a=dn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Lf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function og(t,n){var a=dn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Lf(n,r[1]))return r[0];if(r=t(),zr){Ne(!0);try{t()}finally{Ne(!1)}}return a.memoizedState=[r,n],r}function qf(t,n,a){return a===void 0||(Ma&1073741824)!==0&&(Ce&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=__(),_e.lanes|=t,ir|=t,a)}function lg(t,n,a,r){return si(a,n)?a:Ja.current!==null?(t=qf(t,a,r),si(t,n)||(mn=!0),t):(Ma&106)===0||(Ma&1073741824)!==0&&(Ce&261930)===0?(mn=!0,t.memoizedState=a):(t=__(),_e.lanes|=t,ir|=t,n)}function ug(t,n,a,r,l){var c=At.p;At.p=c!==0&&8>c?c:8;var g=pt.T,A={};A.types=g!==null?g.types:null,pt.T=A,Zf(t,!1,n,a);try{var F=l(),et=pt.S;if(et!==null&&et(A,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ft=jM(F,r);Ho(t,n,ft,fi(t))}else Ho(t,n,r,fi(t))}catch(xt){Ho(t,n,{then:function(){},status:"rejected",reason:xt},fi())}finally{At.p=c,g!==null&&A.types!==null&&(g.types=A.types),pt.T=g}}function ay(){}function Wf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var l=cg(t).queue;ug(t,l,n,ge,a===null?ay:function(){return fg(t),a(r)})}function cg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ge,baseState:ge,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:ge},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function fg(t){var n=cg(t);n.next===null&&(n=t.alternate.memoizedState),Ho(t,n.next.queue,{},fi())}function Yf(){return Rn(Fs)}function dg(){return dn().memoizedState}function hg(){return dn().memoizedState}function ry(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=fi();t=Ka(a);var r=Qa(n,t,a);r!==null&&($n(r,n,a),Oo(r,n,a)),n={cache:Mf()},t.payload=n;return}n=n.return}}function sy(t,n,a){var r=fi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},hu(t)?mg(n,a):(a=df(t,n,a,r),a!==null&&($n(a,t,r),gg(a,n,r)))}function pg(t,n,a){var r=fi();Ho(t,n,a,r)}function Ho(t,n,a,r){var l={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(hu(t))mg(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var g=n.lastRenderedState,A=c(g,a);if(l.hasEagerState=!0,l.eagerState=A,si(A,g))return kl(t,n,l,0),Je===null&&Xl(),!1}catch{}if(a=df(t,n,l,r),a!==null)return $n(a,t,r),gg(a,n,r),!0}return!1}function Zf(t,n,a,r){if(r={lane:2,revertLane:Bd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},hu(t)){if(n)throw Error(s(479))}else n=df(t,a,r,2),n!==null&&$n(n,t,2)}function hu(t){var n=t.alternate;return t===_e||n!==null&&n===_e}function mg(t,n){vs=su=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function gg(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,mo(t,a)}}var pu={readContext:Rn,use:uu,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn,useEffectEvent:cn},_g={readContext:Rn,use:uu,useCallback:function(t,n){return Xn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:tg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,fu(4194308,4,ag.bind(null,n,t),a)},useLayoutEffect:function(t,n){return fu(4194308,4,t,n)},useInsertionEffect:function(t,n){fu(4,2,t,n)},useMemo:function(t,n){var a=Xn();n=n===void 0?null:n;var r=t();if(zr){Ne(!0);try{t()}finally{Ne(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Xn();if(a!==void 0){var l=a(n);if(zr){Ne(!0);try{a(n)}finally{Ne(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=sy.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var n=Xn();return t={current:t},n.memoizedState=t},useState:function(t){t=Gf(t);var n=t.queue,a=pg.bind(null,_e,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:kf,useDeferredValue:function(t,n){var a=Xn();return qf(a,t,n)},useTransition:function(){var t=Gf(!1);return t=ug.bind(null,_e,t.queue,!0,!1),Xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=_e,l=Xn();if(ye){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Je===null)throw Error(s(349));(Ce&127)!==0||B0(r,n,a)}l.memoizedState=a;var c={value:a,getSnapshot:n};return l.queue=c,tg(H0.bind(null,r,c,t),[t]),r.flags|=2048,xs(9,{destroy:void 0},F0.bind(null,r,c,a,n),null),a},useId:function(){var t=Xn(),n=Je.identifierPrefix;if(ye){var a=Yi,r=Wi;a=(r&~(1<<32-he(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ou++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=$M++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Yf,useFormState:K0,useActionState:K0,useOptimistic:function(t){var n=Xn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Zf.bind(null,_e,!0,a),a.dispatch=n,[t,n]},useMemoCache:Bf,useCacheRefresh:function(){return Xn().memoizedState=ry.bind(null,_e)},useEffectEvent:function(t){var n=Xn(),a={impl:t};return n.memoizedState=a,function(){if((Ve&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},vg={readContext:Rn,use:uu,useCallback:sg,useContext:Rn,useEffect:Xf,useImperativeHandle:rg,useInsertionEffect:ng,useLayoutEffect:ig,useMemo:og,useReducer:cu,useRef:$0,useState:function(){return cu(ya)},useDebugValue:kf,useDeferredValue:function(t,n){var a=dn();return lg(a,Qe.memoizedState,t,n)},useTransition:function(){var t=cu(ya)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:Fo(t),n]},useSyncExternalStore:z0,useId:dg,useHostTransitionStatus:Yf,useFormState:Q0,useActionState:Q0,useOptimistic:function(t,n){var a=dn();return X0(a,Qe,t,n)},useMemoCache:Bf,useCacheRefresh:hg,useEffectEvent:eg},oy={readContext:Rn,use:uu,useCallback:sg,useContext:Rn,useEffect:Xf,useImperativeHandle:rg,useInsertionEffect:ng,useLayoutEffect:ig,useMemo:og,useReducer:Hf,useRef:$0,useState:function(){return Hf(ya)},useDebugValue:kf,useDeferredValue:function(t,n){var a=dn();return Qe===null?qf(a,t,n):lg(a,Qe.memoizedState,t,n)},useTransition:function(){var t=Hf(ya)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:Fo(t),n]},useSyncExternalStore:z0,useId:dg,useHostTransitionStatus:Yf,useFormState:j0,useActionState:j0,useOptimistic:function(t,n){var a=dn();return Qe!==null?X0(a,Qe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Bf,useCacheRefresh:hg,useEffectEvent:eg};function Kf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:z({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Qf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=fi(),l=Ka(r);l.payload=n,a!=null&&(l.callback=a),n=Qa(t,l,r),n!==null&&($n(n,t,r),Oo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=fi(),l=Ka(r);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Qa(t,l,r),n!==null&&($n(n,t,r),Oo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=fi(),r=Ka(a);r.tag=2,n!=null&&(r.callback=n),n=Qa(t,r,a),n!==null&&($n(n,t,a),Oo(n,t,a))}};function Sg(t,n,a,r,l,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,g):n.prototype&&n.prototype.isPureReactComponent?!Ao(a,r)||!Ao(l,c):!0}function xg(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Qf.enqueueReplaceState(n,n.state,null)}function Br(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=z({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}function Mg(t){Vl(t)}function yg(t){console.error(t)}function Eg(t){Vl(t)}function mu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Tg(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Jf(t,n,a){return a=Ka(a),a.tag=3,a.payload={element:null},a.callback=function(){mu(t,n)},a}function bg(t){return t=Ka(t),t.tag=3,t}function Ag(t,n,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){Tg(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Tg(n,a,r),typeof l!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function ly(t,n,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Dr(n,a,l,!0),a=Cn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Pn===null?Iu():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===eu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Pd(t,r,l)),!1;case 22:return a.flags|=65536,r===eu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Pd(t,r,l)),!1}throw Error(s(435,a.tag))}return Pd(t,r,l),Iu(),!1}if(ye)return n=Cn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==_f&&(t=Error(s(422),{cause:r}),wo(Mi(t,a)))):(r!==_f&&(n=Error(s(423),{cause:r}),wo(Mi(n,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=Mi(r,a),l=Jf(t.stateNode,r,l),Rf(t,l),fn!==4&&(fn=2)),!1;var c=Error(s(520),{cause:r});if(c=Mi(c,a),Zo===null?Zo=[c]:Zo.push(c),fn!==4&&(fn=2),n===null)return!0;r=Mi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=Jf(a.stateNode,r,t),Rf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ar===null||!ar.has(c))))return a.flags|=65536,l&=-l,a.lanes|=l,l=bg(l),Ag(l,t,a,r),Rf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var jf=Error(s(461)),mn=!1;function xn(t,n,a,r){n.child=t===null?D0(n,null,a,r):Ir(n,t.child,a,r)}function Rg(t,n,a,r,l){a=a.render;var c=n.ref;if("ref"in r){var g={};for(var A in r)A!=="ref"&&(g[A]=r[A])}else g=r;return Nr(n),r=Of(t,n,a,g,c,l),A=Pf(),t!==null&&!mn?(If(t,n,l),Ea(t,n,l)):(ye&&A&&Zl(n),n.flags|=1,xn(t,n,r,l),n.child)}function Cg(t,n,a,r,l){if(t===null){var c=a.type;return typeof c=="function"&&!hf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,wg(t,n,c,r,l)):(t=Wl(a.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!sd(t,l)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:Ao,a(g,r)&&t.ref===n.ref)return Ea(t,n,l)}return n.flags|=1,t=_a(c,r),t.ref=n.ref,t.return=n,n.child=t}function wg(t,n,a,r,l){if(t!==null){var c=t.memoizedProps;if(Ao(c,r)&&t.ref===n.ref)if(mn=!1,n.pendingProps=r=c,sd(t,l))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,Ea(t,n,l)}return $f(t,n,a,r,l)}function Dg(t,n,a,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,n.child=null;return Ng(t,n,c,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&$l(n,c!==null?c.cachePool:null),c!==null?L0(n,c):wf(),O0(n);else return r=n.lanes=536870912,Ng(t,n,c!==null?c.baseLanes|a:a,a,r)}else c!==null?($l(n,c.cachePool),L0(n,c),$a(),n.memoizedState=null):(t!==null&&$l(n,null),wf(),$a());return xn(t,n,l,a),n.child}function Go(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ng(t,n,a,r,l){var c=Ef();return c=c===null?null:{parent:hn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&$l(n,null),wf(),O0(n),t!==null&&Dr(t,n,r,!0),n.childLanes=l,null}function gu(t,n){return n=_u({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Ug(t,n,a){return Ir(n,t.child,null,a),t=gu(n,n.pendingProps),t.flags|=2,oi(n),n.memoizedState=null,t}function uy(t,n,a){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ye){if(r.mode==="hidden")return t=gu(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Go(null,t);if(Nf(n),(t=$e)?(t=av(t,Ti),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:Wi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=m0(t),a.return=n,n.child=a,En=n,$e=null)):t=null,t===null)throw qa(n);return n.lanes=536870912,null}return gu(n,r)}var c=t.memoizedState;if(c!==null){var g=c.dehydrated;if(Nf(n),l)if(n.flags&256)n.flags&=-257,n=Ug(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||Dr(t,n,a,!1),l=(a&t.childLanes)!==0,mn||l){if(Ja.current===null){if(r=Je,r!==null&&(g=go(r,a),g!==0&&g!==c.retryLane))throw c.retryLane=g,Ar(t,g),$n(r,t,g),jf;Iu()}n=Ug(t,n,a)}else t=c.treeContext,$e=Ai(g.nextSibling),En=n,ye=!0,ka=null,Ti=!1,t!==null&&v0(n,t),n=gu(n,r),n.flags|=134221824;return n}return t=_a(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ms(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function $f(t,n,a,r,l){return Nr(n),a=Of(t,n,a,r,void 0,l),r=Pf(),t!==null&&!mn?(If(t,n,l),Ea(t,n,l)):(ye&&r&&Zl(n),n.flags|=1,xn(t,n,a,l),n.child)}function Lg(t,n,a,r,l,c){return Nr(n),n.updateQueue=null,a=I0(n,r,a,l),P0(t),r=Pf(),t!==null&&!mn?(If(t,n,c),Ea(t,n,c)):(ye&&r&&Zl(n),n.flags|=1,xn(t,n,a,c),n.child)}function Og(t,n,a,r,l){if(Nr(n),n.stateNode===null){var c=fs,g=a.contextType;typeof g=="object"&&g!==null&&(c=Rn(g)),c=new a(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Qf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},bf(n),g=a.contextType,c.context=typeof g=="object"&&g!==null?Rn(g):fs,c.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Kf(n,a,g,r),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&Qf.enqueueReplaceState(c,c.state,null),Io(n,r,c,l),Po(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var A=n.memoizedProps,F=Br(a,A);c.props=F;var et=c.context,ft=a.contextType;g=fs,typeof ft=="object"&&ft!==null&&(g=Rn(ft));var xt=a.getDerivedStateFromProps;ft=typeof xt=="function"||typeof c.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(A||et!==g)&&xg(n,c,r,g),Za=!1;var j=n.memoizedState;c.state=j,Io(n,r,c,l),Po(),et=n.memoizedState,A||j!==et||Za?(typeof xt=="function"&&(Kf(n,a,xt,r),et=n.memoizedState),(F=Za||Sg(n,a,F,r,j,et,g))?(ft||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=et),c.props=r,c.state=et,c.context=g,r=F):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,Af(t,n),g=n.memoizedProps,ft=Br(a,g),c.props=ft,xt=n.pendingProps,j=c.context,et=a.contextType,F=fs,typeof et=="object"&&et!==null&&(F=Rn(et)),A=a.getDerivedStateFromProps,(et=typeof A=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==xt||j!==F)&&xg(n,c,r,F),Za=!1,j=n.memoizedState,c.state=j,Io(n,r,c,l),Po();var ut=n.memoizedState;g!==xt||j!==ut||Za||t!==null&&t.dependencies!==null&&Jl(t.dependencies)?(typeof A=="function"&&(Kf(n,a,A,r),ut=n.memoizedState),(ft=Za||Sg(n,a,ft,r,j,ut,F)||t!==null&&t.dependencies!==null&&Jl(t.dependencies))?(et||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,ut,F),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,ut,F)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ut),c.props=r,c.state=ut,c.context=F,r=ft):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,Ms(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=Ir(n,t.child,null,l),n.child=Ir(n,null,a,l)):xn(t,n,a,l),n.memoizedState=c.state,t=n.child):t=Ea(t,n,l),t}function Pg(t,n,a,r){return Cr(),n.flags|=256,xn(t,n,a,r),n.child}var td={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ed(t){return{baseLanes:t,cachePool:T0()}}function nd(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ci),t}function Ig(t,n,a){var r=n.pendingProps,l=!1,c=(n.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(wn.current&2)!==0),g&&(l=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(ye){if(l?ja(n):$a(),(t=$e)?(t=av(t,Ti),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:Wi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=m0(t),a.return=n,n.child=a,En=n,$e=null)):t=null,t===null)throw qa(n);return eh(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,l?($a(),l=n.mode,c=_u({mode:"hidden",children:c},l),r=Rr(r,l,a,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=ed(a),r.childLanes=nd(t,g,a),n.memoizedState=td,Go(null,r)):(ja(n),id(n,c))}var A=t.memoizedState;if(A!==null){var F=A.dehydrated;if(F!==null)return cy(t,n,c,g,r,F,A,a)}return l?($a(),l=r.fallback,c=n.mode,A=t.child,F=A.sibling,r=_a(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&1206910976,F!==null?l=_a(F,l):(l=Rr(l,c,a,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,Go(null,r),r=n.child,l=t.child.memoizedState,l===null?l=ed(a):(c=l.cachePool,c!==null?(A=hn._currentValue,c=c.parent!==A?{parent:A,pool:A}:c):c=T0(),l={baseLanes:l.baseLanes|a,cachePool:c}),r.memoizedState=l,r.childLanes=nd(t,g,a),n.memoizedState=td,Go(t.child,r)):(ja(n),a=t.child,t=a.sibling,a=_a(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function id(t,n){return n=_u({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function _u(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function vu(t,n,a){return Ir(n,t.child,null,a),t=id(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function cy(t,n,a,r,l,c,g,A){if(a)return n.flags&256?(ja(n),n.flags&=-257,vu(t,n,A)):n.memoizedState!==null?($a(),n.child=t.child,n.flags|=128,null):($a(),c=l.fallback,g=n.mode,l=_u({mode:"visible",children:l.children},g),c=Rr(c,g,A,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Ir(n,t.child,null,A),l=n.child,l.memoizedState=ed(A),l.childLanes=nd(t,r,A),n.memoizedState=td,Go(null,l));if(ja(n),eh(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var F=r.dgst;return r=F,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,wo({value:l,source:null,stack:null})),vu(t,n,A)}if(mn||Dr(t,n,A,!1),r=(A&t.childLanes)!==0,mn||r){if(Ja.current!==null)return vu(t,n,A);if(r=Je,r!==null&&(l=go(r,A),l!==0&&l!==g.retryLane))throw g.retryLane=l,Ar(t,l),$n(r,t,l),jf;return th(c)||Iu(),vu(t,n,A)}return th(c)?(n.flags|=192,n.child=t.child,null):(t=g.treeContext,$e=Ai(c.nextSibling),En=n,ye=!0,ka=null,Ti=!1,t!==null&&v0(n,t),n=id(n,l.children),n.flags|=134221824,n)}function zg(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Ql(t.return,n,a)}function Bg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&ru(a)===null&&(n=t),t=t.sibling}return n}function Su(t,n,a,r,l,c){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l,treeForkCount:c}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=l,g.treeForkCount=c)}function ad(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function rd(t,n,a){var r=n.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var g=wn.current;if(n.flags&128)return zo(n,g),null;var A=(g&2)!==0;if(A?(g=g&1|2,n.flags|=128):g&=1,zo(n,g),l==="backwards"&&t!==null?(ad(t),xn(t,n,r,a),ad(t)):xn(t,n,r,a),r=ye?Co:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zg(t,a,n);else if(t.tag===19)zg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":a=Bg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,ad(n)),Su(n,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&ru(t)===null){n.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}Su(n,!0,a,null,c,r);break;case"together":Su(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=Bg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),Su(n,!1,l,a,c,r)}return n.child}function Fg(t,n,a){var r=n.pendingProps;return Wa(n,n.type,r.value),xn(t,n,r.children,a),n.child}function Ea(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ir|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Dr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=_a(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=_a(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function sd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Jl(t)))}function fy(t,n,a){switch(n.tag){case 3:K(n,n.stateNode.containerInfo),Wa(n,hn,t.memoizedState.cache),Cr();break;case 27:case 5:Fe(n);break;case 4:K(n,n.stateNode.containerInfo);break;case 10:Wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Nf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return ja(n),n.flags|=128,null;r=Dr(t,n,a,!1);var l=n.child.childLanes;return r||(a&l)!==0?Ig(t,n,a):(ja(n),t=Ea(t,n,a),t!==null?t.sibling:null)}ja(n);break;case 19:if(n.flags&128)return rd(t,n,a);if(l=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Dr(t,n,a,!1),r=(a&n.childLanes)!==0),l){if(r)return rd(t,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),zo(n,wn.current),r)break;return null;case 22:return n.lanes=0,Dg(t,n,a,n.pendingProps);case 24:Wa(n,hn,t.memoizedState.cache)}return Ea(t,n,a)}function Hg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!sd(t,a)&&(n.flags&128)===0)return mn=!1,fy(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,ye&&(n.flags&1048576)!==0&&_0(n,Co,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Or(n.elementType),n.type=t,typeof t=="function")hf(t)?(r=Br(t,r),n.tag=1,n=Og(null,n,t,r,a)):(n.tag=0,n=$f(null,n,t,r,a));else{if(t!=null){var l=t.$$typeof;if(l===k){n.tag=11,n=Rg(null,n,t,r,a);break t}else if(l===at){n.tag=14,n=Cg(null,n,t,r,a);break t}else if(l===Q){n.tag=10,n.type=t,n=Fg(null,n,a);break t}}throw n=Et(t)||t,Error(s(306,n,""))}}return n;case 0:return $f(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,l=Br(r,n.pendingProps),Og(t,n,r,l,a);case 3:t:{if(K(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;l=c.element,Af(t,n),Io(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Wa(n,hn,r),r!==c.cache&&xf(n,[hn],a,!0),Po(),r=g.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Pg(t,n,r,a);break t}else if(r!==l){l=Mi(Error(s(424)),n),wo(l),n=Pg(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,$e=Ai(t.firstChild),En=n,ye=!0,ka=null,Ti=!0,a=D0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Cr(),r===l){n=Ea(t,n,a);break t}xn(t,n,r,a)}n=n.child}return n;case 26:return Ms(t,n),t===null?(a=fv(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(n.stateNode=k_(n.type,n.pendingProps,Pe.current,n)):n.memoizedState=fv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Fe(n),t===null&&ye&&(r=n.stateNode=ov(n.type,n.pendingProps,Pe.current),En=n,Ti=!0,l=$e,or(n.type)?(nh=l,$e=Ai(r.firstChild)):$e=l),xn(t,n,n.pendingProps.children,a),Ms(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ye&&((l=r=$e)&&(r=rE(r,n.type,n.pendingProps,Ti),r!==null?(n.stateNode=r,En=n,$e=Ai(r.firstChild),Ti=!1,l=!0):l=!1),l||qa(n)),Fe(n),l=n.type,c=n.pendingProps,g=t!==null?t.memoizedProps:null,r=c.children,Yd(l,c)?r=null:g!==null&&Yd(l,g)&&(n.flags|=32),n.memoizedState!==null&&(l=Of(t,n,ty,null,null,a),Fs._currentValue=l),Ms(t,n),xn(t,n,r,a),n.child;case 6:return t===null&&ye&&((t=a=$e)&&(a=sE(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,En=n,$e=null,t=!0):t=!1),t||qa(n)),null;case 13:return Ig(t,n,a);case 4:return K(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Ir(n,null,r,a):xn(t,n,r,a),n.child;case 11:return Rg(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Ms(t,n),xn(t,n,r,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return Fg(t,n,a);case 9:return l=n.type._context,r=n.pendingProps.children,Nr(n),l=Rn(l),r=r(l),n.flags|=1,xn(t,n,r,a),n.child;case 14:return Cg(t,n,n.type,n.pendingProps,a);case 15:return wg(t,n,n.type,n.pendingProps,a);case 19:return rd(t,n,a);case 31:return uy(t,n,a);case 22:return Dg(t,n,a,n.pendingProps);case 24:return Nr(n),r=Rn(hn),t===null?(l=Ef(),l===null&&(l=Je,c=Mf(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=a),l=c),n.memoizedState={parent:r,cache:l},bf(n),Wa(n,hn,l)):((t.lanes&a)!==0&&(Af(t,n),Io(n,null,null,a),Po()),l=t.memoizedState,c=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Wa(n,hn,r)):(r=c.cache,Wa(n,hn,r),r!==l.cache&&xf(n,[hn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:ye&&Zl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:Ms(t,n),xn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ta(t){t.flags|=4}function od(t,n,a,r,l){var c;if((c=(t.mode&32)!==0)&&(c=a===null?mv(n,r):mv(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(M_())t.flags|=8192;else throw Pr=eu,Tf}else t.flags&=-16777217}function Gg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!gv(n))if(M_())t.flags|=8192;else throw Pr=eu,Tf}function xu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?po():536870912,t.lanes|=n,As|=n)}function Vo(t,n){if(!ye)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function tn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function dy(t,n,a){var r=n.pendingProps;switch(gf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),xa(hn),rn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ps(n)?Ta(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vf())),tn(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(Ta(n),c!==null?(tn(n),Gg(n,c)):(tn(n),od(n,l,null,r,a))):c?c!==t.memoizedState?(Ta(n),tn(n),Gg(n,c)):(tn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Ta(n),tn(n),od(n,l,t,r,a)),null;case 27:if(I(n),a=Pe.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ta(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return tn(n),n.subtreeFlags&=-33554433,null}t=Be.current,ps(n)?S0(n):(t=ov(l,r,a),n.stateNode=t,Ta(n))}return tn(n),n.subtreeFlags&=-33554433,null;case 5:if(I(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ta(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return tn(n),n.subtreeFlags&=-33554433,null}if(c=Be.current,ps(n))S0(n);else{var g=$o(Pe.current);switch(c){case 1:c=g.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=g.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=g.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?g.createElement(l,{is:r.is}):g.createElement(l)}}c[b]=n,c[Y]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)c.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=c;t:switch(Nn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Ta(n)}}return tn(n),n.subtreeFlags&=-33554433,od(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Ta(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Pe.current,ps(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,l=En,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[b]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||H_(t.nodeValue,a)),t||qa(n,!0)}else t=$o(t).createTextNode(r),t[b]=n,n.stateNode=t}return tn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=ps(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[b]=n}else Cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),t=!1}else a=vf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(oi(n),n):(oi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return tn(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=ps(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[b]=n}else Cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),l=!1}else l=vf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(oi(n),n):(oi(n),null)}return oi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),xu(n,n.updateQueue),tn(n),null);case 4:return rn(),t===null&&Vd(n.stateNode.containerInfo),n.flags|=67108864,tn(n),null;case 10:return xa(n.type),tn(n),null;case 19:if(Uf(n),r=n.memoizedState,r===null)return tn(n),null;if(l=(n.flags&128)!==0,c=r.rendering,c===null)if(l)Vo(r,!1);else{if(fn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=ru(t),c!==null){for(n.flags|=128,Vo(r,!1),t=c.updateQueue,n.updateQueue=t,xu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)p0(a,t),a=a.sibling;return zo(n,wn.current&1|2),ye&&va(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&qt()>Uu&&(n.flags|=128,l=!0,Vo(r,!1),n.lanes=4194304)}else{if(!l)if(t=ru(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,xu(n,t),Vo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!ye)return tn(n),null}else 2*qt()-r.renderingStartTime>Uu&&a!==536870912&&(n.flags|=128,l=!0,Vo(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=qt(),t.sibling=null,c=wn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||ye?zo(n,c):(a=c,ie(Cn,n),ie(wn,a),Pn===null&&(Pn=n)),ye&&va(n,r.treeForkCount),t}return tn(n),null;case 22:case 23:return oi(n),Df(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&xu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Yt(Lr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),xa(hn),tn(n),null;case 25:return null;case 30:return n.flags|=33554432,tn(n),null}throw Error(s(156,n.tag))}function hy(t,n){switch(gf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return xa(hn),rn(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return I(n),null;case 31:if(n.memoizedState!==null){if(oi(n),n.alternate===null)throw Error(s(340));Cr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(oi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Cr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Uf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return rn(),null;case 10:return xa(n.type),null;case 22:case 23:return oi(n),Df(),t!==null&&Yt(Lr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return xa(hn),null;case 25:return null;default:return null}}function Vg(t,n){switch(gf(n),n.tag){case 3:xa(hn),rn();break;case 26:case 27:case 5:I(n);break;case 4:rn();break;case 31:n.memoizedState!==null&&oi(n);break;case 13:oi(n);break;case 19:Uf(n);break;case 10:xa(n.type);break;case 22:case 23:oi(n),Df(),t!==null&&Yt(Lr);break;case 24:xa(hn)}}function Xo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&t)===t){r=void 0;var c=a.create,g=a.inst;r=c(),g.destroy=r}a=a.next}while(a!==l)}}catch(A){We(n,n.return,A)}}function tr(t,n,a){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var g=r.inst,A=g.destroy;if(A!==void 0){g.destroy=void 0,l=n;var F=a,et=A;try{et()}catch(ft){We(l,F,ft)}}}r=r.next}while(r!==c)}}catch(ft){We(n,n.return,ft)}}function Xg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{U0(n,a)}catch(r){We(t,t.return,r)}}}function kg(t,n,a){a.props=Br(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){We(t,n,r)}}function Zi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=ma(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=J_(c)),r=l.ref;break;case 7:if(t.stateNode===null){var g=new di(t);_(t.child,!1,iE,g,void 0,void 0),t.stateNode=g}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(A){We(t,n,A)}}function Dn(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){We(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){We(t,n,l)}else a.current=null}function Mu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)iv(t.stateNode,n[a])}function qg(t){for(var n=t.return;n!==null&&(ud(n)&&iv(t.stateNode,n.stateNode),!ld(n));)n=n.return}function ko(t){for(var n=t.return;n!==null&&(ud(n)&&aE(t.stateNode,n.stateNode),!ld(n));)n=n.return}function ld(t){return t.tag===5||t.tag===3||t.tag===27}function ud(t){return t&&t.tag===7&&t.stateNode!==null}function cd(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){We(t,t.return,l)}}function fd(t,n,a){try{var r=t.stateNode;Fy(r,t.type,a,n),r[Y]=n}catch(l){We(t,t.return,l)}}function Wg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&or(t.type)||t.tag===4}function dd(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Wg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&or(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hd(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi)),Mu(t,r),Me=!0;else if(l!==4&&(l===27&&(Mu(t,r),r=null,or(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(hd(t,n,a,r),t=t.sibling;t!==null;)hd(t,n,a,r),t=t.sibling}function yu(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?a.insertBefore(l,n):a.appendChild(l),Mu(t,r),Me=!0;else if(l!==4&&(l===27&&(Mu(t,r),r=null,or(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(yu(t,n,a,r),t=t.sibling;t!==null;)yu(t,n,a,r),t=t.sibling}function Yg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Nn(n,r,a),n[b]=t,n[Y]=a}catch(c){We(t,t.return,c)}}var Eu=!1,li=null;function Zg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Eu=!0)}var Ki=null;function Kg(){var t=Ki;return Ki=null,t}var Qn=0;function ys(t,n,a,r,l){return Qn=0,Qg(t.child,n,a,r,l)}function Qg(t,n,a,r,l){for(var c=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(r!==null){var A=Qd(g);r.push(A),A.view&&(c=!0)}else c||Qd(g).view&&(c=!0);Eu=!0,K_(g,Qn===0?n:n+"_"+Qn,a),Qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||Qg(t.child,n,a,r,l)&&(c=!0));t=t.sibling}return c}function Qi(t,n){for(;t!==null;)t.tag===5?Q_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Qi(t.child,n)),t=t.sibling}function Tu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Tu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ga(n.default,n.share),n!=="none"&&(ys(t,a,n,null,!1)||Qi(t.child,!1))}t=t.sibling}}function pd(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,l=ma(r,a),c=ga(r.default,a.paired?r.share:r.enter);c!=="none"?ys(t,l,c,null,!1)?(Tu(t),a.paired||n||Ds(t,r.onEnter)):Qi(t.child,!1):Tu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)pd(t,n),t=t.sibling;else Tu(t)}function md(t){if(li!==null&&li.size!==0){var n=li;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var c=ga(a.default,a.share);if(c!=="none"&&(ys(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,Ds(t,a.onShare)):Qi(t.child,!1)),n.delete(r),n.size===0)break}}}md(t)}t=t.sibling}}}function gd(t){if(t.tag===30){var n=t.memoizedProps,a=ma(n,t.stateNode),r=li!==null?li.get(a):void 0,l=ga(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(ys(t,a,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,li.delete(a),Ds(t,n.onShare)):Ds(t,n.onExit):Qi(t.child,!1)),li!==null&&md(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)gd(t),t=t.sibling;else li!==null&&md(t)}function Jg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ma(n,t.stateNode);n=ga(n.default,n.update),t.flags&=-5,n!=="none"&&ys(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Jg(t);t=t.sibling}}function _d(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Qi(t.child,!1))}_d(t)}t=t.sibling}}function bu(t){if(t.tag===30)t.stateNode.paired=null,Qi(t.child,!1),_d(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)bu(t),t=t.sibling;else _d(t)}function jg(t){for(t=t.child;t!==null;)t.tag===30?Qi(t.child,!1):(t.subtreeFlags&33554432)!==0&&jg(t),t=t.sibling}function vd(t,n,a,r,l,c,g){for(var A=!1;n!==null;){if(n.tag===5){var F=n.stateNode;if(c!==null&&Qn<c.length){var et=c[Qn],ft=Qd(F);(et.view||ft.view)&&(A=!0);var xt;if(xt=(t.flags&4)===0)if(ft.clip)xt=!0;else{xt=et.rect;var j=ft.rect;xt=xt.y!==j.y||xt.x!==j.x||xt.height!==j.height||xt.width!==j.width}xt&&(t.flags|=4),ft.abs?ft=!et.abs:(et=et.rect,ft=ft.rect,ft=et.height!==ft.height||et.width!==ft.width),ft&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&K_(F,Qn===0?a:a+"_"+Qn,l),A&&(t.flags&4)!==0||(Ki===null&&(Ki=[]),Ki.push(F,Qn===0?r:r+"_"+Qn,n.memoizedProps)),Qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?t.flags|=n.flags&32:vd(t,n.child,a,r,l,c,g)&&(A=!0));n=n.sibling}return A}function $g(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,l=ma(a,r),c=ga(a.default,a.update),g;g=t.memoizedState,t.memoizedState=null,r=t;var A=t.child;Qn=0,l=vd(r,A,l,l,c,g,!1),(t.flags&4)!==0&&l&&Ds(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&$g(t);t=t.sibling}}var Tn=!1,ke=!1,Ji=!1,Sd=!1,t_=typeof WeakSet=="function"?WeakSet:Set,bn=null,ji=!1,qo=!1,Au=!1,xd=!1;function py(t,n,a){if(t=t.containerInfo,qd=Hs,t=a0(t),sf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break t}var A=0,F=-1,et=-1,ft=0,xt=0,j=t,ut=null;e:for(;;){for(var It;j!==r||c!==0&&j.nodeType!==3||(F=A+c),j!==g||l!==0&&j.nodeType!==3||(et=A+l),j.nodeType===3&&(A+=j.nodeValue.length),(It=j.firstChild)!==null;)ut=j,j=It;for(;;){if(j===t)break e;if(ut===r&&++ft===c&&(F=A),ut===g&&++xt===l&&(et=A),(It=j.nextSibling)!==null)break;j=ut,ut=j.parentNode}j=It}r=F===-1||et===-1?null:{start:F,end:et}}else r=null}r=r||{start:0,end:0}}else r=null;for(Wd={focusedElem:t,selectionRange:r},Hs=!1,a=(a&335544064)===a,bn=n,n=a?9270:1024;bn!==null;){if(t=bn,a&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)a&&gd(r[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&Zg(t),Ru(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&gd(r),Ru(a);continue}else if(r!==null&&r.memoizedState!==null){a&&Zg(t),Ru(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,bn=r):(a&&Jg(t),Ru(a))}}li=null}function Ru(t){for(;bn!==null;){var n=bn,a=t,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){a=void 0,l=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var g=Br(n.type,l);a=c.getSnapshotBeforeUpdate(g,r),c.__reactInternalSnapshotBeforeUpdate=a}catch(A){We(n,n.return,A)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)$d(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":$d(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ma(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=ga(l.default,l.update),l!=="none"&&ys(r,a,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,bn=r;break}bn=n.return}}function e_(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:$i(t,a),r&4&&Xo(5,a);break;case 1:if($i(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){We(a,a.return,g)}else{var l=Br(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){We(a,a.return,g)}}r&64&&Xg(a),r&512&&Zi(a,a.return);break;case 3:if($i(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{U0(t,n)}catch(g){We(a,a.return,g)}}break;case 27:n===null&&r&4&&Yg(a);case 26:case 5:$i(t,a),n===null&&r&4&&cd(a),r&512&&Zi(a,a.return);break;case 12:$i(t,a);break;case 31:$i(t,a),r&4&&r_(t,a);break;case 13:$i(t,a),r&4&&s_(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ay.bind(null,a),oE(t,a))));break;case 22:if(r=a.memoizedState!==null||Tn,!r){var c=n!==null&&n.memoizedState!==null||ke;n=Tn,l=ke,Tn=r,(ke=c)&&!l?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Li(t,a,r)):$i(t,a),Tn=n,ke=l}break;case 30:$i(t,a),r&512&&Zi(a,a.return);break;case 7:r&512&&Zi(a,a.return);default:$i(t,a)}}function Md(t,n){for(t=t.child;t!==null;)n_(t,n),t=t.sibling}function n_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,g=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(F){We(t,t.return,F)}yd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Me=!0}catch(F){We(t,t.return,F)}break;case 18:try{var A=t.stateNode;n?Z_(A,!0):Z_(t.stateNode,!1)}catch(F){We(t,t.return,F)}break;case 22:case 23:t.memoizedState===null&&Md(t,n);break;default:Md(t,n)}}function yd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:n_(a,r);break t;case 22:a.memoizedState===null&&yd(a,r);break t;default:yd(a,r)}}t=t.sibling}}function i_(t){var n=t.alternate;n!==null&&(t.alternate=null,i_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Jt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var an=null,Jn=!1;function Ni(t,n,a){for(a=a.child;a!==null;)a_(t,n,a),a=a.sibling}function a_(t,n,a){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount($t,a)}catch{}switch(a.tag){case 26:ke||Dn(a,n),Ni(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!ke&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ke||Dn(a,n),ko(a);var r=an,l=Jn;or(a.type)&&(an=a.stateNode,Jn=!1),Ni(t,n,a),lv(a.stateNode,a.type,a.memoizedProps),an=r,Jn=l;break;case 5:ke||Dn(a,n),ko(a);case 6:if(a.tag===6&&ko(a),r=an,l=Jn,an=null,Ni(t,n,a),an=r,Jn=l,an!==null)if(Jn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(a.stateNode),Me=!0}catch(c){We(a,n,c)}else try{an.removeChild(a.stateNode),Me=!0}catch(c){We(a,n,c)}break;case 18:an!==null&&(Jn?(t=an,Y_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Gs(t)):Y_(an,a.stateNode));break;case 4:r=an,l=Jn,an=a.stateNode.containerInfo,Jn=!0,Ni(t,n,a),an=r,Jn=l;break;case 0:case 11:case 14:case 15:tr(2,a,n),ke||tr(4,a,n),Ni(t,n,a);break;case 1:ke||(Dn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&kg(a,n,r)),Ni(t,n,a);break;case 21:Ni(t,n,a);break;case 22:ke=(r=ke)||a.memoizedState!==null,Ni(t,n,a),ke=r;break;case 30:Dn(a,n),Ni(t,n,a);break;case 7:ke||Dn(a,n),Ni(t,n,a);break;default:Ni(t,n,a)}}function r_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Gs(t)}catch(a){We(n,n.return,a)}}}function s_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Gs(t)}catch(a){We(n,n.return,a)}}function my(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new t_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new t_),n;default:throw Error(s(435,t.tag))}}function Cu(t,n){var a=my(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var l=Ry.bind(null,t,r);r.then(l,l)}})}function kn(t,n,a){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],g=t,A=n,F=A;t:for(;F!==null;){switch(F.tag){case 27:if(or(F.type)){an=F.stateNode,Jn=!1;break t}break;case 5:an=F.stateNode,Jn=!1;break t;case 3:case 4:an=F.stateNode.containerInfo,Jn=!0;break t}F=F.return}if(an===null)throw Error(s(160));a_(g,A,c),an=null,Jn=!1,g=c.alternate,g!==null&&(g.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)o_(n,t,a),n=n.sibling}var Ui=null;function o_(t,n,a){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var g=r[c];g.ref.impl=g.nextImpl}kn(n,t,a),qn(t),l&4&&(tr(3,t,t.return),Xo(3,t),tr(5,t,t.return));break;case 1:kn(n,t,a),qn(t),l&512&&(ke||r===null||Dn(r,r.return)),l&64&&Tn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=Ui,kn(n,t,a),qn(t),l&512&&(ke||r===null||Dn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(Tn)t.stateNode=k_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Pt]||r[b]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Nn(r,n,a),r[b]=t,xe(r),n=r;break t;case"link":if(c=pv("link","href",l).get(n+(a.href||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(g,1);break e}}r=l.createElement(n),Nn(r,n,a),l.head.appendChild(r);break;case"meta":if(c=pv("meta","content",l).get(n+(a.content||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(g,1);break e}}r=l.createElement(n),Nn(r,n,a),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[b]=t,xe(r),n=r}t.stateNode=n}else Tn||sh(c,t.type,t.stateNode);else t.stateNode=hv(c,a,t.memoizedProps);else l!==a?(l===null?(n=r.stateNode,n===null||ke||n.parentNode.removeChild(n)):l.count--,a===null?Tn||sh(c,t.type,t.stateNode):hv(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&fd(t,t.memoizedProps,r.memoizedProps);break;case 27:kn(n,t,a),qn(t),l&512&&(ke||r===null||Dn(r,r.return)),r!==null&&l&4&&fd(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Ji,Ji=!1,kn(n,t,a),Ji=c,qn(t),l&512&&(ke||r===null||Dn(r,r.return)),t.flags&32){n=t.stateNode;try{as(n,""),Me=!0}catch(ft){We(t,t.return,ft)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,fd(t,n,r!==null?r.memoizedProps:n)),l&1024&&(Sd=!0);break;case 6:if(kn(n,t,a),qn(t),l&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Me=!0}catch(ft){We(t,t.return,ft)}}break;case 3:if(Me=!1,Xu=null,c=Ui,Ui=tl(n.containerInfo),kn(n,t,a),Ui=c,qn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Gs(n.containerInfo)}catch(ft){We(t,t.return,ft)}Sd&&(Sd=!1,l_(t)),Me=!1;break;case 4:l=Ji,Ji=Tn,r=Ge(),c=Ui,Ui=tl(t.stateNode.containerInfo),kn(n,t,a),qn(t),Ui=c,Me&&qo&&(Au=!0),Me=r,Ji=l;break;case 12:kn(n,t,a),qn(t);break;case 31:kn(n,t,a),qn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Cu(t,n)));break;case 13:kn(n,t,a),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Nu=qt()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Cu(t,n)));break;case 22:c=t.memoizedState!==null,g=r!==null&&r.memoizedState!==null;var A=Tn,F=ke,et=Ji;Tn=A||c,Ji=et||c,ke=F||g,kn(n,t,a),ke=F,Ji=et,Tn=A,qn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||g||Tn||ke||(n=g||ke,a=Tn,r=ke,Tn=c||Tn,ke=n,er(t,2),Tn=a,ke=r),!c&&Ji||Md(t,c)),l&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Cu(t,a))));break;case 19:kn(n,t,a),qn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Cu(t,n)));break;case 30:l&512&&(ke||r===null||Dn(r,r.return)),l=Ge(),c=qo,g=(a&335544064)===a,A=t.memoizedProps,qo=g&&ga(A.default,A.update)!=="none",kn(n,t,a),qn(t),g&&r!==null&&Me&&(t.flags|=4),qo=c,Me=l;break;case 21:break;case 7:l&512&&(ke||r===null||Dn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:kn(n,t,a),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Wg(r)){a=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(ud(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(ld(l))break;l=l.return}var g=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var A=a.stateNode,F=dd(t);yu(t,F,A,g);break;case 5:var et=a.stateNode;a.flags&32&&(as(et,""),a.flags&=-33);var ft=dd(t);yu(t,ft,et,g);break;case 3:case 4:var xt=a.stateNode.containerInfo,j=dd(t);hd(t,j,xt,g);break;default:throw Error(s(161))}}catch(ut){We(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function l_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;l_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Hs=!0,n.reset(),Hs=!1),t=t.sibling}}function Es(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)u_(n,t),n=n.sibling;else $g(n)}function u_(t,n){var a=t.alternate;if(a===null)pd(t,!1);else switch(t.tag){case 3:if(xd=ji=!1,Kg(),Es(n,t),!ji&&!Au){if(t=Ki,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var l=t[r+1];Q_(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),xd=!0}Ki=null;break;case 5:Es(n,t);break;case 4:r=ji,ji=!1,Es(n,t),ji&&(Au=!0),ji=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?pd(t,!1):Es(n,t));break;case 30:r=ji,l=Kg(),ji=!1,Es(n,t),ji&&(t.flags|=4);var c=t.memoizedProps,g=t.stateNode;n=ma(c,g),g=ma(a.memoizedProps,g);var A=ga(c.default,c.update);A==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,Qn=0,n=vd(t,a,n,g,A,c,!0),Qn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Ds(t,t.memoizedProps.onUpdate),Ki=l):l!==null&&(l.push.apply(l,Ki),Ki=l),ji=(t.flags&32)!==0?!0:r;break;default:Es(n,t)}}function $i(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)e_(t,n.alternate,n),n=n.sibling}function er(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:tr(4,a,a.return),er(a,r);break;case 1:Dn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&kg(a,a.return,l),er(a,r);break;case 27:(r&2)!==0&&lv(a.stateNode,a.type,a.memoizedProps);case 5:Dn(a,a.return),a.tag!==5&&a.tag!==27||ko(a),er(a,r);break;case 6:ko(a);break;case 26:Dn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||ke||l.parentNode.removeChild(l),er(a,r);break;case 22:a.memoizedState===null&&er(a,r);break;case 30:Dn(a,a.return),er(a,r);break;case 7:Dn(a,a.return);default:er(a,r)}t=t.sibling}}function Li(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,l=t,c=n,g=c.flags,A=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Li(l,c,a),Xo(4,c);break;case 1:if(Li(l,c,a),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(ft){We(r,r.return,ft)}if(r=c,l=r.updateQueue,l!==null){var F=r.stateNode;try{var et=l.shared.hiddenCallbacks;if(et!==null)for(l.shared.hiddenCallbacks=null,l=0;l<et.length;l++)N0(et[l],F)}catch(ft){We(r,r.return,ft)}}A&&g&64&&Xg(c),Zi(c,c.return);break;case 27:(a&2)!==0&&Yg(c);case 5:c.tag!==5&&c.tag!==27||qg(c),Li(l,c,a),A&&r===null&&g&4&&cd(c),Zi(c,c.return);break;case 6:qg(c);break;case 26:F=c.stateNode,c.memoizedState!==null||F===null||Tn||sh(tl(F.ownerDocument),c.type,F),Li(l,c,a),A&&r===null&&g&4&&cd(c),Zi(c,c.return);break;case 12:Li(l,c,a);break;case 31:Li(l,c,a),A&&g&4&&r_(l,c);break;case 13:Li(l,c,a),A&&g&4&&s_(l,c);break;case 22:c.memoizedState===null&&Li(l,c,a),Zi(c,c.return);break;case 30:Li(l,c,a),Zi(c,c.return);break;case 7:Zi(c,c.return);default:Li(l,c,a)}n=n.sibling}}function Ed(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Do(a))}function Td(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Do(t))}function bi(t,n,a,r){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)c_(t,n,a,r),n=n.sibling;else l&&jg(n)}function c_(t,n,a,r){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&bu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:bi(t,n,a,r),c&2048&&Xo(9,n);break;case 1:bi(t,n,a,r);break;case 3:bi(t,n,a,r),l&&xd&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Do(c)));break;case 12:if(c&2048){bi(t,n,a,r),c=n.stateNode;try{var g=n.memoizedProps,A=g.id,F=g.onPostCommit;typeof F=="function"&&F(A,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(et){We(n,n.return,et)}}else bi(t,n,a,r);break;case 31:bi(t,n,a,r);break;case 13:bi(t,n,a,r);break;case 23:break;case 22:g=n.stateNode,A=n.alternate,n.memoizedState!==null?(l&&A!==null&&A.memoizedState===null&&bu(A),g._visibility&2?bi(t,n,a,r):Wo(t,n)):(l&&A!==null&&A.memoizedState!==null&&bu(n),g._visibility&2?bi(t,n,a,r):(g._visibility|=2,Ts(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&Ed(A,n);break;case 24:bi(t,n,a,r),c&2048&&Td(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(Qi(c.child,!0),Qi(n.child,!0))),bi(t,n,a,r);break;default:bi(t,n,a,r)}}function Ts(t,n,a,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,g=n,A=a,F=r,et=g.flags;switch(g.tag){case 0:case 11:case 15:Ts(c,g,A,F,l),Xo(8,g);break;case 23:break;case 22:var ft=g.stateNode;g.memoizedState!==null?ft._visibility&2?Ts(c,g,A,F,l):Wo(c,g):(ft._visibility|=2,Ts(c,g,A,F,l)),l&&et&2048&&Ed(g.alternate,g);break;case 24:Ts(c,g,A,F,l),l&&et&2048&&Td(g.alternate,g);break;default:Ts(c,g,A,F,l)}n=n.sibling}}function Wo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,l=r.flags;switch(r.tag){case 22:Wo(a,r),l&2048&&Ed(r.alternate,r);break;case 24:Wo(a,r),l&2048&&Td(r.alternate,r);break;default:Wo(a,r)}n=n.sibling}}var Fr=8192;function Hr(t,n,a){if(t.subtreeFlags&Fr)for(t=t.child;t!==null;)f_(t,n,a),t=t.sibling}function f_(t,n,a){switch(t.tag){case 26:Hr(t,n,a),t.flags&Fr&&(t.memoizedState!==null?ME(a,Ui,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&vv(a,t)));break;case 5:Hr(t,n,a),t.flags&Fr&&(t=t.stateNode,(n&335544128)===n&&vv(a,t));break;case 3:case 4:var r=Ui;Ui=tl(t.stateNode.containerInfo),Hr(t,n,a),Ui=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Fr,Fr=16777216,Hr(t,n,a),Fr=r):Hr(t,n,a));break;case 30:if((t.flags&Fr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,li===null&&(li=new Map),li.set(r,l)}Hr(t,n,a);break;default:Hr(t,n,a)}}function d_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Yo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,p_(r,t)}d_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)h_(t),t=t.sibling}function h_(t){switch(t.tag){case 0:case 11:case 15:Yo(t),t.flags&2048&&tr(9,t,t.return);break;case 3:Yo(t);break;case 12:Yo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,wu(t)):Yo(t);break;default:Yo(t)}}function wu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,p_(r,t)}d_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:tr(8,n,n.return),wu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,wu(n));break;default:wu(n)}t=t.sibling}}function p_(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:tr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Do(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,bn=r;else t:for(a=t;bn!==null;){r=bn;var l=r.sibling,c=r.return;if(i_(r),r===a){bn=null;break t}if(l!==null){l.return=c,bn=l;break t}bn=c}}}var gy={getCacheForType:function(t){var n=Rn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(hn).controller.signal}},_y=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Je=null,Te=null,Ce=0,qe=0,ui=null,nr=!1,bs=!1,bd=!1,ba=0,fn=0,ir=0,Gr=0,Du=0,ci=0,As=0,Zo=null,jn=null,Ad=!1,Nu=0,m_=0,Uu=1/0,Lu=null,ar=null,sn=0,Oi=null,Vr=null,ta=0,Rd=0,Cd=null,g_=null,Rs=null,Cs=null,ws=null,Ko=0,Ou=null;function fi(){return(Ve&2)!==0&&Ce!==0?Ce&-Ce:pt.T!==null?Bd():Ul()}function __(){if(ci===0)if((Ce&536870912)===0||ye){var t=Mr;Mr<<=1,(Mr&3932160)===0&&(Mr=262144),ci=t}else ci=536870912;return t=Cn.current,t!==null&&(t.flags|=32),ci}function Ds(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=J_(ma(t.memoizedProps,a))),Cs===null&&(Cs=[]),Cs.push(n.bind(null,r))}}function $n(t,n,a){(t===Je&&(qe===2||qe===9)||t.cancelPendingCommit!==null)&&(Ns(t,0),rr(t,Ce,ci,!1)),Xi(t,a),((Ve&2)===0||t!==Je)&&(t===Je&&((Ve&2)===0&&(Gr|=a),fn===4&&rr(t,Ce,ci,!1)),ea(t))}function v_(t,n,a){if((Ve&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ha(t,n),l=r?xy(t,n):Dd(t,n,!0),c=r;do{if(l===0){bs&&!r&&rr(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!vy(a)){l=Dd(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var A=t;l=Zo;var F=A.current.memoizedState.isDehydrated;if(F&&(Ns(A,g).flags|=256),g=Dd(A,g,!1),g!==2&&g!==6){if(bd&&!F){A.errorRecoveryDisabledLanes|=c,Gr|=c,l=4;break t}c=jn,jn=l,c!==null&&(jn===null?jn=c:jn.push.apply(jn,c))}l=g}if(c=!1,l!==2)continue}}if(l===1){Ns(t,0),rr(t,n,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:rr(r,n,ci,!nr);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=Nu+300-qt(),10<l)){if(rr(r,n,ci,!nr),yr(r,0,!0)!==0)break t;ta=n,r.timeoutHandle=Kd(S_.bind(null,r,a,jn,Lu,Ad,n,ci,Gr,As,nr,c,"Throttled",-0,0),l);break t}S_(r,a,jn,Lu,Ad,n,ci,Gr,As,nr,c,null,-0,0)}}break}while(!0);ea(t)}function S_(t,n,a,r,l,c,g,A,F,et,ft,xt,j,ut){t.timeoutHandle=-1;var It=n.subtreeFlags,jt=(c&335544064)===c;if(xt=null,(jt||It&8192||(It&16785408)===16785408)&&(xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},li=null,f_(n,c,xt),jt&&(It=xt,jt=t.containerInfo,jt=(jt.nodeType===9?jt:jt.ownerDocument).__reactViewTransition,jt!=null&&(It.count++,It.waitingForViewTransition=!0,It=il.bind(It),jt.finished.then(It,It))),It=(c&62914560)===c?Nu-qt():(c&4194048)===c?m_-qt():0,It=yE(xt,It),It!==null)){ta=c,t.cancelPendingCommit=It(R_.bind(null,t,n,c,a,r,l,g,A,F,et,ft,xt,null,j,ut)),rr(t,c,g,!et);return}R_(t,n,c,a,r,l,g,A,F,et,ft,xt)}function vy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],c=l.getSnapshot;l=l.value;try{if(!si(c(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rr(t,n,a,r){n=Vi(t,n),n&=~Du,n&=~Gr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var c=31-he(l),g=1<<c;r[c]=-1,l&=~g}a!==0&&Er(t,a,n)}function Pu(){return(Ve&6)===0?(Qo(0),!1):!0}function wd(){if(Te!==null){if(qe===0)var t=Te.return;else t=Te,Sa=wr=null,zf(t),_s=null,Lo=0,t=Te;for(;t!==null;)Vg(t.alternate,t),t=t.return;Te=null}}function Ns(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,Vy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ta=0,wd(),Je=t,Te=a=_a(t.current,null),Ce=n,qe=0,ui=null,nr=!1,bs=Ha(t,n),bd=!1,As=ci=Du=Gr=ir=fn=0,jn=Zo=null,Ad=!1,ba=Vi(t,n),Xl(),a}function x_(t,n){_e=null,pt.H=pu,n===gs||n===tu?(n=R0(),qe=3):n===Tf?(n=R0(),qe=4):qe=n===jf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ui=n,Te===null&&(fn=1,mu(t,Mi(n,t.current)))}function M_(){var t=Cn.current;return t===null?!0:(Ce&4194048)===Ce?Pn===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?t===Pn:!1}function y_(){var t=pt.H;return pt.H=pu,t===null?pu:t}function E_(){var t=pt.A;return pt.A=gy,t}function Iu(){fn=4,nr||(Ce&4194048)!==Ce&&Cn.current!==null||(bs=!0),(ir&134217727)===0&&(Gr&134217727)===0||Je===null||rr(Je,Ce,ci,!1)}function Dd(t,n,a){var r=Ve;Ve|=2;var l=y_(),c=E_();(Je!==t||Ce!==n)&&(Lu=null,Ns(t,n)),n=!1;var g=fn;t:do try{if(qe!==0&&Te!==null){var A=Te,F=ui;switch(qe){case 8:wd(),g=6;break t;case 3:case 2:case 9:case 6:Cn.current===null&&(n=!0);var et=qe;if(qe=0,ui=null,Us(t,A,F,et),a&&bs){g=0;break t}break;default:et=qe,qe=0,ui=null,Us(t,A,F,et)}}Sy(),g=fn;break}catch(ft){x_(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Sa=wr=null,Ve=r,pt.H=l,pt.A=c,Te===null&&(Je=null,Ce=0,Xl()),g}function Sy(){for(;Te!==null;)T_(Te)}function xy(t,n){var a=Ve;Ve|=2;var r=y_(),l=E_();Je!==t||Ce!==n?(Lu=null,Uu=qt()+500,Ns(t,n)):bs=Ha(t,n);t:do try{if(qe!==0&&Te!==null){n=Te;var c=ui;e:switch(qe){case 1:qe=0,ui=null,Us(t,n,c,1);break;case 2:case 9:if(b0(c)){qe=0,ui=null,b_(n);break}n=function(){qe!==2&&qe!==9||Je!==t||(qe=7),ea(t)},c.then(n,n);break t;case 3:qe=7;break t;case 4:qe=5;break t;case 7:b0(c)?(qe=0,ui=null,b_(n)):(qe=0,ui=null,Us(t,n,c,7));break;case 5:var g=null;switch(Te.tag){case 26:g=Te.memoizedState;case 5:case 27:var A=Te;if(g?gv(g):A.stateNode.complete){qe=0,ui=null;var F=A.sibling;if(F!==null)Te=F;else{var et=A.return;et!==null?(Te=et,zu(et)):Te=null}break e}}qe=0,ui=null,Us(t,n,c,5);break;case 6:qe=0,ui=null,Us(t,n,c,6);break;case 8:wd(),fn=6;break t;default:throw Error(s(462))}}My();break}catch(ft){x_(t,ft)}while(!0);return Sa=wr=null,pt.H=r,pt.A=l,Ve=a,Te!==null?0:(Je=null,Ce=0,Xl(),fn)}function My(){for(;Te!==null&&!Bt();)T_(Te)}function T_(t){var n=Hg(t.alternate,t,ba);t.memoizedProps=t.pendingProps,n===null?zu(t):Te=n}function b_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Lg(a,n,n.pendingProps,n.type,void 0,Ce);break;case 11:n=Lg(a,n,n.pendingProps,n.type.render,n.ref,Ce);break;case 5:zf(n);var r=n;r===En&&(ye?(Kl(r),r.tag===5&&r.stateNode!=null&&($e=r.stateNode)):(Kl(r),ye=!0));default:Vg(a,n),n=Te=p0(n,ba),n=Hg(a,n,ba)}t.memoizedProps=t.pendingProps,n===null?zu(t):Te=n}function Us(t,n,a,r){Sa=wr=null,zf(n),_s=null,Lo=0;var l=n.return;try{if(ly(t,l,n,a,Ce)){fn=1,mu(t,Mi(a,t.current)),Te=null;return}}catch(c){if(l!==null)throw Te=l,c;fn=1,mu(t,Mi(a,t.current)),Te=null;return}n.flags&32768?(ye||r===1?t=!0:bs||(Ce&536870912)!==0?t=!1:(nr=t=!0,(r===2||r===9||r===3||r===6)&&(r=Cn.current,r!==null&&r.tag===13&&(r.flags|=16384))),A_(n,t)):zu(n)}function zu(t){var n=t;do{if((n.flags&32768)!==0){A_(n,nr);return}t=n.return;var a=dy(n.alternate,n,ba);if(a!==null){Te=a;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=t}while(n!==null);fn===0&&(fn=5)}function A_(t,n){do{var a=hy(t.alternate,t);if(a!==null){a.flags&=32767,Te=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Te=t;return}Te=t=a}while(t!==null);fn=6,Te=null}function R_(t,n,a,r,l,c,g,A,F,et,ft,xt){t.cancelPendingCommit=null;do Bu();while(sn!==0);if((Ve&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Je&&(Te=Je=null,Ce=0),Vr=n,Oi=t,ta=a,Cd=l,g_=r,yy(t,n,a,g,A,F,xt)}}function yy(t,n,a,r,l,c,g){var A=n.lanes|n.childLanes;if(Rd=A,A|=ff,Nl(t,a,A,r,l,c),Cs=null,(a&335544064)===a?(ws=QM(t),r=10262):(ws=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,Cy(Dt,function(){return Od(),null})):(t.callbackNode=null,t.callbackPriority=0),Eu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=pt.T,pt.T=null,l=At.p,At.p=2,c=Ve,Ve|=4;try{py(t,n,a)}finally{Ve=c,At.p=l,pt.T=r}}sn=1,Eu?Rs=Zy(g,t.containerInfo,ws,Nd,Ud,Ty,Ld,Od,Ey):(Nd(),Ud(),Ld())}function Ey(t){if(sn!==0){var n=Oi.onRecoverableError;n(t,{componentStack:null})}}function Ty(){sn===3&&(sn=0,u_(Vr,Oi),sn=4)}function Nd(){if(sn===1){sn=0;var t=Oi,n=Vr,a=ta,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=pt.T,pt.T=null;var l=At.p;At.p=2;var c=Ve;Ve|=4;try{qo=Au=!1,o_(n,t,a),a=Wd;var g=a0(t.containerInfo),A=a.focusedElem,F=a.selectionRange;if(g!==A&&A&&A.ownerDocument&&i0(A.ownerDocument.documentElement,A)){if(F!==null&&sf(A)){var et=F.start,ft=F.end;if(ft===void 0&&(ft=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(ft,A.value.length);else{var xt=A.ownerDocument||document,j=xt&&xt.defaultView||window;if(j.getSelection){var ut=j.getSelection(),It=A.textContent.length,jt=Math.min(F.start,It),ve=F.end===void 0?jt:Math.min(F.end,It);!ut.extend&&jt>ve&&(g=ve,ve=jt,jt=g);var $=n0(A,jt),Z=n0(A,ve);if($&&Z&&(ut.rangeCount!==1||ut.anchorNode!==$.node||ut.anchorOffset!==$.offset||ut.focusNode!==Z.node||ut.focusOffset!==Z.offset)){var rt=xt.createRange();rt.setStart($.node,$.offset),ut.removeAllRanges(),jt>ve?(ut.addRange(rt),ut.extend(Z.node,Z.offset)):(rt.setEnd(Z.node,Z.offset),ut.addRange(rt))}}}}for(xt=[],ut=A;ut=ut.parentNode;)ut.nodeType===1&&xt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xt.length;A++){var vt=xt[A];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Hs=!!qd,Wd=qd=null}finally{Ve=c,At.p=l,pt.T=r}}t.current=n,sn=2}}function Ud(){if(sn===2){sn=0;var t=Oi,n=Vr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=pt.T,pt.T=null;var r=At.p;At.p=2;var l=Ve;Ve|=4;try{e_(t,n.alternate,n)}finally{Ve=l,At.p=r,pt.T=a}}sn=3}}function Ld(){if(sn===4||sn===3){sn=0;var t=Rs;Rs=null,zt();var n=Oi,a=Vr,r=ta,l=g_,c=(r&335544064)===r?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?sn=5:(sn=0,Vr=Oi=null,C_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(ar=null),vo(r),a=a.stateNode,Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot($t,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=pt.T,c=At.p,At.p=2,pt.T=null;try{for(var g=n.onRecoverableError,A=0;A<l.length;A++){var F=l[A];g(F.value,{componentStack:F.stack})}}finally{pt.T=a,At.p=c}}if(l=Cs,g=ws,ws=null,l!==null&&(Cs=null,g===null&&(g=[]),t!==null))for(F=0;F<l.length;F++)a=(0,l[F])(g),a!==void 0&&t.finished.finally(a);(ta&3)!==0&&Bu(),ea(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Ou?Ko++:(Ko=0,Ou=n):(Ko=0,Ou=null),Qo(0)}}function C_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Do(n)))}function Bu(){return Rs!==null&&(Rs.skipTransition(),Rs=null),Nd(),Ud(),Ld(),Od()}function Od(){if(sn!==5)return!1;var t=Oi,n=Rd;Rd=0;var a=vo(ta),r=pt.T,l=At.p;try{At.p=32>a?32:a,pt.T=null,a=Cd,Cd=null;var c=Oi,g=ta;if(sn=0,Vr=Oi=null,ta=0,(Ve&6)!==0)throw Error(s(331));var A=Ve;if(Ve|=4,h_(c.current),c_(c,c.current,g,a),Ve=A,Qo(0,!1),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot($t,c)}catch{}return!0}finally{At.p=l,pt.T=r,C_(t,n)}}function w_(t,n,a){n=Mi(a,n),n=Jf(t.stateNode,n,2),t=Qa(t,n,2),t!==null&&(Xi(t,2),ea(t))}function We(t,n,a){if(t.tag===3)w_(t,t,a);else for(;n!==null;){if(n.tag===3){w_(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ar===null||!ar.has(r))){t=Mi(a,t),a=bg(2),r=Qa(n,a,2),r!==null&&(Ag(a,r,n,t),Xi(r,2),ea(r));break}}n=n.return}}function Pd(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new _y;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(a)||(bd=!0,l.add(a),t=by.bind(null,t,n,a),n.then(t,t))}function by(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Je===t&&(Ce&a)===a&&((fn===4||fn===3&&(Ce&62914560)===Ce&&300>qt()-Nu)&&(Ve&2)===0?Ns(t,0):Du|=a,As===Ce&&(As=0)),ea(t)}function D_(t,n){n===0&&(n=po()),t=Ar(t,n),t!==null&&(Xi(t,n),ea(t))}function Ay(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),D_(t,a)}function Ry(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),D_(t,a)}function Cy(t,n){return Nt(t,n)}var Ls=null,Os=null,Id=!1,Fu=!1,zd=!1,sr=0;function ea(t){t!==Os&&t.next===null&&(Os===null?Ls=Os=t:Os=Os.next=t),Fu=!0,Id||(Id=!0,Dy())}function Qo(t,n){if(!zd&&Fu){zd=!0;do for(var a=!1,r=Ls;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var g=r.suspendedLanes,A=r.pingedLanes;c=(1<<31-he(42|t)+1)-1,c&=l&~(g&~A),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,O_(r,c))}else c=Ce,c=yr(r,r===Je?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Ha(r,c)||(a=!0,O_(r,c));r=r.next}while(a);zd=!1}}function wy(){N_()}function N_(){Fu=Id=!1;var t=0;sr!==0&&Gy()&&(t=sr);for(var n=qt(),a=null,r=Ls;r!==null;){var l=r.next,c=U_(r,n);c===0?(r.next=null,a===null?Ls=l:a.next=l,l===null&&(Os=a)):(a=r,(t!==0||(c&3)!==0)&&(Fu=!0)),r=l}sn!==0&&sn!==5||Qo(t),sr!==0&&(sr=0)}function U_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-he(c),A=1<<g,F=l[g];F===-1?((A&a)===0||(A&r)!==0)&&(l[g]=ho(A,n)):F<=n&&(t.expiredLanes|=A),c&=~A}if(n=Je,a=Ce,a=yr(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(qe===2||qe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&te(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ha(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&te(r),vo(a)){case 2:case 8:a=J;break;case 32:a=Dt;break;case 268435456:a=Ot;break;default:a=Dt}return r=L_.bind(null,t),a=Nt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&te(r),t.callbackPriority=2,t.callbackNode=null,2}function L_(t,n){if(sn!==0&&sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Bu()&&t.callbackNode!==a)return null;var r=Ce;return r=yr(t,t===Je?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(v_(t,r,n),U_(t,qt()),t.callbackNode!=null&&t.callbackNode===a?L_.bind(null,t):null)}function O_(t,n){if(Bu())return null;v_(t,n,!0)}function Dy(){Xy(function(){(Ve&6)!==0?Nt(de,wy):N_()})}function Bd(){if(sr===0){var t=Ur;t===0&&(t=es,es<<=1,(es&261888)===0&&(es=256)),sr=t}return sr}function P_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Pl(t)}function Ny(t,n,a,r,l){if(n==="submit"&&a&&a.stateNode===l){var c=P_((l[Y]||null).action),g=r.submitter;g&&(n=(n=g[Y]||null)?P_(n.formAction):g.getAttribute("formAction"),n!==null&&(c=n,g=null));var A=new Fl("action","action",null,r,l);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(sr!==0){var F=new FormData(l,g);Wf(a,{pending:!0,data:F,method:l.method,action:c},null,F)}}else typeof c=="function"&&(A.preventDefault(),F=new FormData(l,g),Wf(a,{pending:!0,data:F,method:l.method,action:c},c,F))},currentTarget:l}]})}}for(var Fd=0;Fd<cf.length;Fd++){var Hd=cf[Fd],Uy=Hd.toLowerCase(),Ly=Hd[0].toUpperCase()+Hd.slice(1);Di(Uy,"on"+Ly)}Di(o0,"onAnimationEnd"),Di(l0,"onAnimationIteration"),Di(u0,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(VM,"onTransitionRun"),Di(XM,"onTransitionStart"),Di(kM,"onTransitionCancel"),Di(c0,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jo));function I_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],l=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var g=r.length-1;0<=g;g--){var A=r[g],F=A.instance,et=A.currentTarget;if(A=A.listener,F!==c&&l.isPropagationStopped())break t;c=A,l.currentTarget=et;try{c(l)}catch(ft){Vl(ft)}l.currentTarget=null,c=F}else for(g=0;g<r.length;g++){if(A=r[g],F=A.instance,et=A.currentTarget,A=A.listener,F!==c&&l.isPropagationStopped())break t;c=A,l.currentTarget=et;try{c(l)}catch(ft){Vl(ft)}l.currentTarget=null,c=F}}}}function be(t,n){var a=n[st];a===void 0&&(a=n[st]=new Set);var r=t+"__bubble";a.has(r)||(z_(n,t,2,!1),a.add(r))}function Gd(t,n,a){var r=0;n&&(r|=4),z_(a,t,r,n)}var Hu="_reactListening"+Math.random().toString(36).slice(2);function Vd(t){if(!t[Hu]){t[Hu]=!0,Xe.forEach(function(a){a!=="selectionchange"&&(Oy.has(a)||Gd(a,!1,t),Gd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Hu]||(n[Hu]=!0,Gd("selectionchange",!1,n))}}function z_(t,n,a,r){switch(Av(n)){case 2:var l=AE;break;case 8:l=RE;break;default:l=lh}a=l.bind(null,n,a,t),l=void 0,!Kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,a,{capture:!0,passive:l}):t.addEventListener(n,a,!0):l!==void 0?t.addEventListener(n,a,{passive:l}):t.addEventListener(n,a,!1)}function Xd(t,n,a,r,l){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var A=r.stateNode.containerInfo;if(A===l)break;if(g===4)for(g=r.return;g!==null;){var F=g.tag;if((F===3||F===4)&&g.stateNode.containerInfo===l)return;g=g.return}for(;A!==null;){if(g=le(A),g===null)return;if(F=g.tag,F===5||F===6||F===26||F===27){r=c=g;continue t}A=A.parentNode}}r=r.return}zm(function(){var et=c,ft=Yc(a),xt=[];t:{var j=f0.get(t);if(j!==void 0){var ut=Fl,It=t;switch(t){case"keypress":if(zl(a)===0)break t;case"keydown":case"keyup":ut=vM;break;case"focusin":It="focus",ut=$c;break;case"focusout":It="blur",ut=$c;break;case"beforeblur":case"afterblur":ut=$c;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=sM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=EM;break;case o0:case l0:case u0:ut=uM;break;case c0:ut=bM;break;case"scroll":case"scrollend":ut=aM;break;case"wheel":ut=RM;break;case"copy":case"cut":case"paste":ut=fM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Vm;break;case"submit":ut=MM;break;case"toggle":case"beforetoggle":ut=wM}var jt=(n&4)!==0,ve=!jt&&(t==="scroll"||t==="scrollend"),$=jt?j!==null?j+"Capture":null:j;jt=[];for(var Z=et,rt;Z!==null;){var vt=Z;if(rt=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||rt===null||$===null||(vt=So(Z,$),vt!=null&&jt.push(jo(Z,vt,rt))),ve)break;Z=Z.return}0<jt.length&&(j=new ut(j,It,null,a,ft),xt.push({event:j,listeners:jt}))}}if((n&7)===0){t:{if(ut=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",ut&&a!==Wc&&(It=a.relatedTarget||a.fromElement)&&(le(It)||It[dt]))break t;(j||ut)&&(It=ft.window===ft?ft:(ut=ft.ownerDocument)?ut.defaultView||ut.parentWindow:window,j?(ut=a.relatedTarget||a.toElement,j=et,ut=ut?le(ut):null,ut!==null&&(ve=f(ut),jt=ut.tag,ut!==ve||jt!==5&&jt!==27&&jt!==6)&&(ut=null)):(j=null,ut=et),j!==ut&&(jt=Hm,vt="onMouseLeave",$="onMouseEnter",Z="mouse",(t==="pointerout"||t==="pointerover")&&(jt=Vm,vt="onPointerLeave",$="onPointerEnter",Z="pointer"),ve=j==null?It:Zt(j),rt=ut==null?It:Zt(ut),It=new jt(vt,Z+"leave",j,a,ft),It.target=ve,It.relatedTarget=rt,vt=null,le(ft)===et&&(jt=new jt($,Z+"enter",ut,a,ft),jt.target=rt,jt.relatedTarget=ve,vt=jt),ve=vt,jt=j&&ut?N(j,ut,Py):null,j!==null&&B_(xt,It,j,jt,!1),ut!==null&&ve!==null&&B_(xt,ve,ut,jt,!0)))}t:{if(j=et?Zt(et):window,ut=j.nodeName&&j.nodeName.toLowerCase(),ut==="select"||ut==="input"&&j.type==="file")var Kt=Qm;else if(Zm(j))if(Jm)Kt=FM;else{Kt=zM;var we=IM}else ut=j.nodeName,!ut||ut.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?et&&qc(et.elementType)&&(Kt=Qm):Kt=BM;if(Kt&&(Kt=Kt(t,et))){Km(xt,Kt,a,ft);break t}we&&we(t,j,et)}switch(we=et?Zt(et):window,t){case"focusin":(Zm(we)||we.contentEditable==="true")&&(ls=we,of=et,Ro=null);break;case"focusout":Ro=of=ls=null;break;case"mousedown":lf=!0;break;case"contextmenu":case"mouseup":case"dragend":lf=!1,r0(xt,a,ft);break;case"selectionchange":if(GM)break;case"keydown":case"keyup":r0(xt,a,ft)}var ee;if(ef)t:{switch(t){case"compositionstart":var se="onCompositionStart";break t;case"compositionend":se="onCompositionEnd";break t;case"compositionupdate":se="onCompositionUpdate";break t}se=void 0}else os?Wm(t,a)&&(se="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&(Xm&&a.locale!=="ko"&&(os||se!=="onCompositionStart"?se==="onCompositionEnd"&&os&&(ee=Bm()):(Ga=ft,Qc="value"in Ga?Ga.value:Ga.textContent,os=!0)),we=Gu(et,se),0<we.length&&(se=new Gm(se,t,null,a,ft),xt.push({event:se,listeners:we}),ee?se.data=ee:(ee=Ym(a),ee!==null&&(se.data=ee)))),(ee=NM?UM(t,a):LM(t,a))&&(se=Gu(et,"onBeforeInput"),0<se.length&&(we=new Gm("onBeforeInput","beforeinput",null,a,ft),xt.push({event:we,listeners:se}),we.data=ee)),Ny(xt,t,et,a,ft)}I_(xt,n)})}function jo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Gu(t,n){for(var a=n+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=So(t,a),l!=null&&r.unshift(jo(t,l,c)),l=So(t,n),l!=null&&r.push(jo(t,l,c))),t.tag===3)return r;t=t.return}return[]}function Py(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function B_(t,n,a,r,l){for(var c=n._reactName,g=[];a!==null&&a!==r;){var A=a,F=A.alternate,et=A.stateNode;if(A=A.tag,F!==null&&F===r)break;A!==5&&A!==26&&A!==27||et===null||(F=et,l?(et=So(a,c),et!=null&&g.unshift(jo(a,et,F))):l||(et=So(a,c),et!=null&&g.push(jo(a,et,F)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Iy=/\r\n?/g,zy=/\u0000|\uFFFD/g;function F_(t){return(typeof t=="string"?t:""+t).replace(Iy,`
`).replace(zy,"")}function H_(t,n){return n=F_(n),F_(t)===n}function Ye(t,n,a,r,l,c){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||as(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&as(t,""+r);else return;break;case"className":ri(t,"class",r);break;case"tabIndex":ri(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ri(t,a,r);break;case"style":Pm(t,r,c);return;case"data":if(n!=="object"){ri(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Pl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&Ye(t,n,"name",l.name,l,null),Ye(t,n,"formEncType",l.formEncType,l,null),Ye(t,n,"formMethod",l.formMethod,l,null),Ye(t,n,"formTarget",l.formTarget,l,null)):(Ye(t,n,"encType",l.encType,l,null),Ye(t,n,"method",l.method,l,null),Ye(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Pl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=qi);return;case"onScroll":r!=null&&be("scroll",t);return;case"onScrollEnd":r!=null&&be("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Pl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":be("beforetoggle",t),be("toggle",t),je(t,"popover",r);break;case"xlinkActuate":Re(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Re(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Re(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Re(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Re(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Re(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Re(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Re(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Re(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":je(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=nM.get(a)||a,je(t,a,r);else return}Me=!0}function kd(t,n,a,r,l,c){switch(a){case"style":Pm(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")as(t,r);else if(typeof r=="number"||typeof r=="bigint")as(t,""+r);else return;break;case"onScroll":r!=null&&be("scroll",t);return;case"onScrollEnd":r!=null&&be("scrollend",t);return;case"onClick":r!=null&&(t.onclick=qi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Sn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),c=a.slice(2,l?a.length-7:void 0),n=t[Y]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,r,l);break t}Me=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):je(t,a,r)}return}Me=!0}function Nn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",t),be("load",t);var r=!1,l=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(t,n,c,g,a,null)}}l&&Ye(t,n,"srcSet",a.srcSet,a,null),r&&Ye(t,n,"src",a.src,a,null);return;case"input":be("invalid",t);var A=c=g=l=null,F=null,et=null;for(r in a)if(a.hasOwnProperty(r)){var ft=a[r];if(ft!=null)switch(r){case"name":l=ft;break;case"type":g=ft;break;case"checked":F=ft;break;case"defaultChecked":et=ft;break;case"value":c=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Ye(t,n,r,ft,a,null)}}Nm(t,c,A,F,et,g,l,!1);return;case"select":be("invalid",t),r=g=c=null;for(l in a)if(a.hasOwnProperty(l)&&(A=a[l],A!=null))switch(l){case"value":c=A;break;case"defaultValue":g=A;break;case"multiple":r=A;default:Ye(t,n,l,A,a,null)}n=c,a=g,t.multiple=!!r,n!=null?is(t,!!r,n,!1):a!=null&&is(t,!!r,a,!0);return;case"textarea":be("invalid",t),c=l=r=null;for(g in a)if(a.hasOwnProperty(g)&&(A=a[g],A!=null))switch(g){case"value":r=A;break;case"defaultValue":l=A;break;case"children":c=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ye(t,n,g,A,a,null)}Lm(t,r,l,c);return;case"option":for(F in a)a.hasOwnProperty(F)&&(r=a[F],r!=null)&&(F==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Ye(t,n,F,r,a,null));return;case"dialog":be("beforetoggle",t),be("toggle",t),be("cancel",t),be("close",t);break;case"iframe":case"object":be("load",t);break;case"video":case"audio":for(r=0;r<Jo.length;r++)be(Jo[r],t);break;case"image":be("error",t),be("load",t);break;case"details":be("toggle",t);break;case"embed":case"source":case"link":be("error",t),be("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(r=a[et],r!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(t,n,et,r,a,null)}return;default:if(qc(n)){for(ft in a)a.hasOwnProperty(ft)&&(r=a[ft],r!==void 0&&kd(t,n,ft,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Ye(t,n,A,r,a,null))}var By={};function Fy(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,g=null,A=null,F=null,et=null,ft=null;for(ut in a){var xt=a[ut];if(a.hasOwnProperty(ut)&&xt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":F=xt;default:r.hasOwnProperty(ut)||Ye(t,n,ut,null,r,xt)}}for(var j in r){var ut=r[j];if(xt=a[j],r.hasOwnProperty(j)&&(ut!=null||xt!=null))switch(j){case"type":ut!==xt&&(Me=!0),c=ut;break;case"name":ut!==xt&&(Me=!0),l=ut;break;case"checked":ut!==xt&&(Me=!0),et=ut;break;case"defaultChecked":ut!==xt&&(Me=!0),ft=ut;break;case"value":ut!==xt&&(Me=!0),g=ut;break;case"defaultValue":ut!==xt&&(Me=!0),A=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==xt&&Ye(t,n,j,ut,r,xt)}}Xc(t,g,A,F,et,ft,c,l);return;case"select":ut=g=A=j=null;for(c in a)if(F=a[c],a.hasOwnProperty(c)&&F!=null)switch(c){case"value":break;case"multiple":ut=F;default:r.hasOwnProperty(c)||Ye(t,n,c,null,r,F)}for(l in r)if(c=r[l],F=a[l],r.hasOwnProperty(l)&&(c!=null||F!=null))switch(l){case"value":c!==F&&(Me=!0),j=c;break;case"defaultValue":c!==F&&(Me=!0),A=c;break;case"multiple":c!==F&&(Me=!0),g=c;default:c!==F&&Ye(t,n,l,c,r,F)}n=A,a=g,r=ut,j!=null?is(t,!!a,j,!1):!!r!=!!a&&(n!=null?is(t,!!a,n,!0):is(t,!!a,a?[]:"",!1));return;case"textarea":ut=j=null;for(A in a)if(l=a[A],a.hasOwnProperty(A)&&l!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ye(t,n,A,null,r,l)}for(g in r)if(l=r[g],c=a[g],r.hasOwnProperty(g)&&(l!=null||c!=null))switch(g){case"value":l!==c&&(Me=!0),j=l;break;case"defaultValue":l!==c&&(Me=!0),ut=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&Ye(t,n,g,l,r,c)}Um(t,j,ut);return;case"option":for(var It in a)j=a[It],a.hasOwnProperty(It)&&j!=null&&!r.hasOwnProperty(It)&&(It==="selected"?t.selected=!1:Ye(t,n,It,null,r,j));for(F in r)j=r[F],ut=a[F],r.hasOwnProperty(F)&&j!==ut&&(j!=null||ut!=null)&&(F==="selected"?(j!==ut&&(Me=!0),t.selected=j&&typeof j!="function"&&typeof j!="symbol"):Ye(t,n,F,j,r,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in a)j=a[jt],a.hasOwnProperty(jt)&&j!=null&&!r.hasOwnProperty(jt)&&Ye(t,n,jt,null,r,j);for(et in r)if(j=r[et],ut=a[et],r.hasOwnProperty(et)&&j!==ut&&(j!=null||ut!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,n));break;default:Ye(t,n,et,j,r,ut)}return;default:if(qc(n)){for(var ve in a)j=a[ve],a.hasOwnProperty(ve)&&j!==void 0&&!r.hasOwnProperty(ve)&&kd(t,n,ve,void 0,r,j);for(ft in r)j=r[ft],ut=a[ft],!r.hasOwnProperty(ft)||j===ut||j===void 0&&ut===void 0||kd(t,n,ft,j,r,ut);return}}for(var $ in a)j=a[$],a.hasOwnProperty($)&&j!=null&&!r.hasOwnProperty($)&&Ye(t,n,$,null,r,j);for(xt in r)j=r[xt],ut=a[xt],!r.hasOwnProperty(xt)||j===ut||j==null&&ut==null||Ye(t,n,xt,j,r,ut)}function G_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var l=a[r],c=l.transferSize,g=l.initiatorType,A=l.duration;if(c&&A&&G_(g)){for(g=0,A=l.responseEnd,r+=1;r<a.length;r++){var F=a[r],et=F.startTime;if(et>A)break;var ft=F.transferSize,xt=F.initiatorType;ft&&G_(xt)&&(F=F.responseEnd,g+=ft*(F<A?1:(A-et)/(F-et)))}if(--r,n+=8*(c+g)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var qd=null,Wd=null;function $o(t){return t.nodeType===9?t:t.ownerDocument}function V_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function X_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function k_(t,n,a,r){return a=$o(a).createElement(t),a[b]=r,a[Y]=n,Nn(a,t,n),xe(a),a}function Yd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zd=null;function Gy(){var t=window.event;return t&&t.type==="popstate"?t===Zd?!1:(Zd=t,!0):(Zd=null,!1)}var Kd=typeof setTimeout=="function"?setTimeout:void 0,Vy=typeof clearTimeout=="function"?clearTimeout:void 0,q_=typeof Promise=="function"?Promise:void 0,W_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Kd,Xy=typeof queueMicrotask=="function"?queueMicrotask:typeof q_<"u"?function(t){return q_.resolve(null).then(t).catch(ky)}:Kd;function ky(t){setTimeout(function(){throw t})}function or(t){return t==="head"}function Y_(t,n){var a=n,r=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(l),Gs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")ih(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ih(a);for(var c=a.firstChild;c;){var g=c.nextSibling,A=c.nodeName;c[Pt]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=g}}else a==="body"&&ih(t.ownerDocument.body);a=l}while(a);Gs(n)}function Z_(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function K_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function Q_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function qy(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Qd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return qy(n,a,t)}function Wy(t){return t.documentElement.clientHeight}function Yy(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Zy(t,n,a,r,l,c,g,A,F){var et=n.nodeType===9?n:n.ownerDocument;try{var ft=et.startViewTransition({update:function(){var j=et.defaultView,ut=j.navigation&&j.navigation.transition,It=et.fonts.status;r();var jt=[];if(It==="loaded"&&(Wy(et),et.fonts.status==="loading"&&jt.push(et.fonts.ready)),It=jt.length,t!==null)for(var ve=t.suspenseyImages,$=0,Z=0;Z<ve.length;Z++){var rt=ve[Z];if(!rt.complete){var vt=rt.getBoundingClientRect();if(0<vt.bottom&&0<vt.right&&vt.top<j.innerHeight&&vt.left<j.innerWidth){if($+=_v(rt),$>ku){jt.length=It;break}rt=new Promise(Yy.bind(rt)),jt.push(rt)}}}if(0<jt.length)return j=Promise.race([Promise.all(jt),new Promise(function(Kt){return setTimeout(Kt,500)})]).then(l,l),(ut?Promise.allSettled([ut.finished,j]):j).then(c,c);if(l(),ut)return ut.finished.then(c,c);c()},types:a});et.__reactViewTransition=ft;var xt=[];return ft.ready.then(function(){for(var j=et.documentElement.getAnimations({subtree:!0}),ut=0;ut<j.length;ut++){var It=j[ut],jt=It.effect,ve=jt.pseudoElement;if(ve!=null&&ve.startsWith("::view-transition")){xt.push(It),It=jt.getKeyframes();for(var $=ve=void 0,Z=!0,rt=0;rt<It.length;rt++){var vt=It[rt],Kt=vt.width;if(ve===void 0)ve=Kt;else if(ve!==Kt){Z=!1;break}if(Kt=vt.height,$===void 0)$=Kt;else if($!==Kt){Z=!1;break}delete vt.width,delete vt.height,vt.transform==="none"&&delete vt.transform}Z&&ve!==void 0&&$!==void 0&&(jt.setKeyframes(It),Z=getComputedStyle(jt.target,jt.pseudoElement),Z.width!==ve||Z.height!==$)&&(Z=It[0],Z.width=ve,Z.height=$,Z=It[It.length-1],Z.width=ve,Z.height=$,jt.setKeyframes(It))}}g()},function(j){et.__reactViewTransition===ft&&(et.__reactViewTransition=null);try{typeof j=="object"&&j!==null&&j.name==="InvalidStateError"&&(j.message==="View transition was skipped because document visibility state is hidden."||j.message==="Skipping view transition because document visibility state has become hidden."||j.message==="Skipping view transition because viewport size changed."||j.message==="Transition was aborted because of invalid state")&&(j=null),j!==null&&F(j)}finally{r(),l(),g()}}),ft.finished.finally(function(){for(var j=0;j<xt.length;j++)xt[j].cancel();et.__reactViewTransition===ft&&(et.__reactViewTransition=null),A()}),ft}catch{return r(),l(),g(),null}}function Xr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Xr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:z({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Xr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],l=0;l<a.length;l++){var c=a[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(a[l])}return r},Xr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function J_(t){return{name:t,group:new Xr("group",t),imagePair:new Xr("image-pair",t),old:new Xr("old",t),new:new Xr("new",t)}}function di(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}di.prototype.addEventListener=function(t,n,a){var r=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if($_(c,t,n,a)===-1){var g=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(F){g.removeEventListener(t,n,a),typeof n=="function"?n.call(this,F):n.handleEvent(F)}),r!==null&&(l=g.removeEventListener.bind(g,t,n,a),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Ps(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:l}),_(this._fragmentFiber.child,!1,Ky,t,A,r)}this._eventListeners=c}};function Ky(t,n,a,r){return M(t).addEventListener(n,a,r),!1}di.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=$_(r,t,n,a),n!==-1)){var l=r[n];a=l.attachedListener;var c=l.cleanup;l=Ps(l.optionsOrUseCapture),_(this._fragmentFiber.child,!1,Qy,t,a,l),r.splice(n,1),c!==null&&c()}};function Qy(t,n,a,r){return M(t).removeEventListener(n,a,r),!1}function Ps(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function j_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function $_(t,n,a,r){if(t.length===0)return-1;r=j_(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===a&&j_(c.optionsOrUseCapture)===r)return l}return-1}di.prototype.dispatchEvent=function(t){var n=v(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var c=a[l];r.addEventListener(c.type,c.attachedListener,Ps(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(l=0;l<a.length;l++)c=a[l],r.removeEventListener(c.type,c.attachedListener,Ps(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},di.prototype.focus=function(t){_(this._fragmentFiber.child,!0,tv,t,void 0,void 0)};function tv(t,n){return t.tag===6?!1:(t=M(t),lE(t,n))}di.prototype.focusLast=function(t){var n=[];_(this._fragmentFiber.child,!0,Jd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!tv(n[a],t);a--);};function Jd(t,n){return n.push(t),!1}di.prototype.blur=function(){var t=v(this._fragmentFiber);t!==null&&(t=M(t),t=$o(t).activeElement,t!==null&&_(this._fragmentFiber.child,!1,Jy,t,void 0,void 0))};function Jy(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}di.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),_(this._fragmentFiber.child,!1,jy,t,void 0,void 0)};function jy(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}di.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),_(this._fragmentFiber.child,!1,$y,t,void 0,void 0);for(var a=n=0;a<Pi.length;a++){var r=Pi[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Pi[n++]=r}Pi.length=n}};function $y(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Pi=[],jd=!1;function tE(t,n,a){Pi.push({fragmentInstance:t,observer:n,instance:a}),jd||(jd=!0,uE(function(){jd=!1;var r=Pi;Pi=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}di.prototype.getClientRects=function(){var t=[];return _(this._fragmentFiber.child,!1,eE,t,void 0,void 0),t};function eE(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}di.prototype.getRootNode=function(t){var n=v(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},di.prototype.compareDocumentPosition=function(t){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];_(this._fragmentFiber.child,!1,Jd,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,T(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=r=a.compareDocumentPosition(t);return a===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=R(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),l=M(a[a.length-1]);var c=T(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(t),A=l.compareDocumentPosition(t),F=g&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=r&&c&&g&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&l===t||F||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||nE(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function nE(t,n,a,r,l){var c=le(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=v(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=N(a,c,U),n===null?n=!1:(_(n,!0,G,c,a),c=x,x=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=N(r,c,U),n===null?n=!1:(_(n,!0,C,c,r),c=x,D=x=null,n=c!==null)),n):!1}function ev(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}di.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];_(this._fragmentFiber.child,!1,Jd,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=R(this._fragmentFiber);if(r=a?r[1]||r[0]||v(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),ev(t,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var l=n[r];l.tag===6?(l=M(l),ev(l,a)):M(l).scrollIntoView(t),r+=a?-1:1}};function iE(t,n){return t=M(t),nv(t,n),!1}function nv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function iv(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.addEventListener(l.type,l.attachedListener,Ps(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var g=0,A=0;A<Pi.length;A++){var F=Pi[A];(F.fragmentInstance!==n||F.observer!==c||F.instance!==t)&&(Pi[g++]=F)}Pi.length=g,c.observe(t)}),nv(t,n))}function aE(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.removeEventListener(l.type,l.attachedListener,Ps(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?tE(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function $d(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$d(a),Jt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function rE(t,n,a,r){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Pt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ai(t.nextSibling),t===null)break}return null}function sE(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ai(t.nextSibling),t===null))return null;return t}function av(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ai(t.nextSibling),t===null))return null;return t}function th(t){return t.data==="$?"||t.data==="$~"}function eh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function oE(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Ai(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var nh=null;function rv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ai(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function sv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function lE(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function uE(t){W_(function(){W_(function(n){return t(n)})})}function ov(t,n,a){switch(n=$o(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function lv(t,n,a){for(var r in a){var l=a[r];a.hasOwnProperty(r)&&l!=null&&Ye(t,n,r,null,By,l)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===qi&&(t.onclick=null),Jt(t)}function ih(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Jt(t)}var Ri=new Map,uv=new Set;function tl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Aa=At.d;At.d={f:cE,r:fE,D:dE,C:hE,L:pE,m:mE,X:_E,S:gE,M:vE};function cE(){var t=Aa.f(),n=Pu();return t||n}function fE(t){var n=pe(t);n!==null&&n.tag===5&&n.type==="form"?fg(n):Aa.r(t)}var Is=typeof document>"u"?null:document;function cv(t,n,a){var r=Is;if(r&&typeof n=="string"&&n){var l=Si(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),uv.has(l)||(uv.add(l),t={rel:t,crossOrigin:a,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Nn(n,"link",t),xe(n),r.head.appendChild(n)))}}function dE(t){Aa.D(t),cv("dns-prefetch",t,null)}function hE(t,n){Aa.C(t,n),cv("preconnect",t,n)}function pE(t,n,a){Aa.L(t,n,a);var r=Is;if(r&&t&&n){var l='link[rel="preload"][as="'+Si(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Si(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Si(a.imageSizes)+'"]')):l+='[href="'+Si(t)+'"]';var c=l;switch(n){case"style":c=zs(t);break;case"script":c=Bs(t)}if(!(Ri.has(c)||(t=z({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ri.set(c,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(el(c))||n==="script"&&r.querySelector(nl(c))))){var g=r.createElement("link");Nn(g,"link",t),n==="style"&&(g[Qt]=!0,g.onload=g.onerror=function(){Ke(g)}),xe(g),r.head.appendChild(g)}}}function mE(t,n){Aa.m(t,n);var a=Is;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Si(r)+'"][href="'+Si(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Bs(t)}if(!Ri.has(c)&&(t=z({rel:"modulepreload",href:t},n),Ri.set(c,t),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(nl(c)))return}r=a.createElement("link"),Nn(r,"link",t),xe(r),a.head.appendChild(r)}}}function gE(t,n,a){Aa.S(t,n,a);var r=Is;if(r&&t){var l=Ee(r).hoistableStyles,c=zs(t);n=n||"default";var g=l.get(c);if(!g){var A={loading:0,preload:null};if(g=r.querySelector(el(c)))A.loading=5;else{t=z({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ri.get(c))&&ah(t,a);var F=g=r.createElement("link");xe(F),Nn(F,"link",t),F._p=new Promise(function(et,ft){F.onload=et,F.onerror=ft}),F.addEventListener("load",function(){A.loading|=1}),F.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Vu(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:A},l.set(c,g)}}}function _E(t,n){Aa.X(t,n);var a=Is;if(a&&t){var r=Ee(a).hoistableScripts,l=Bs(t),c=r.get(l);c||(c=a.querySelector(nl(l)),c||(t=z({src:t,async:!0},n),(n=Ri.get(l))&&rh(t,n),c=a.createElement("script"),xe(c),Nn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function vE(t,n){Aa.M(t,n);var a=Is;if(a&&t){var r=Ee(a).hoistableScripts,l=Bs(t),c=r.get(l);c||(c=a.querySelector(nl(l)),c||(t=z({src:t,async:!0,type:"module"},n),(n=Ri.get(l))&&rh(t,n),c=a.createElement("script"),xe(c),Nn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function fv(t,n,a,r){var l=(l=Pe.current)?tl(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=zs(a.href),n=Ee(l).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=zs(a.href);var c=Ee(l).hoistableStyles,g=c.get(t);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=l.querySelector(el(t)))?c._p||(g.instance=c,g.state.loading=5):(c=Ri.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ri.set(t,c)),SE(l,t,c,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Bs(a),n=Ee(l).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function zs(t){return'href="'+Si(t)+'"'}function el(t){return'link[rel="stylesheet"]['+t+"]"}function dv(t){return z({},t,{"data-precedence":t.precedence,precedence:null})}function SE(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Qt]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Qt]=!0,n.onload=n.onerror=Ke.bind(null,n),Nn(n,"link",a),xe(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Bs(t){return'[src="'+Si(t)+'"]'}function nl(t){return"script[async]"+t}function hv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Si(a.href)+'"]');if(r)return n.instance=r,xe(r),r;var l=z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),xe(r),Nn(r,"style",l),Vu(r,a.precedence,t),n.instance=r;case"stylesheet":l=zs(a.href);var c=t.querySelector(el(l));if(c)return n.state.loading|=4,n.instance=c,xe(c),c;r=dv(a),(l=Ri.get(l))&&ah(r,l),c=(t.ownerDocument||t).createElement("link"),xe(c);var g=c;return g._p=new Promise(function(A,F){g.onload=A,g.onerror=F}),Nn(c,"link",r),n.state.loading|=4,Vu(c,a.precedence,t),n.instance=c;case"script":return c=Bs(a.src),(l=t.querySelector(nl(c)))?(n.instance=l,xe(l),l):(r=a,(l=Ri.get(c))&&(r=z({},a),rh(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),xe(l),Nn(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Vu(r,a.precedence,t));return n.instance}function Vu(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,g=0;g<r.length;g++){var A=r[g];if(A.dataset.precedence===n)c=A;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ah(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function rh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Xu=null;function pv(t,n,a){if(Xu===null){var r=new Map,l=Xu=new Map;l.set(a,r)}else l=Xu,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var c=a[l];if(!(c[Pt]||c[b]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(n)||"";g=t+g;var A=r.get(g);A?A.push(c):r.set(g,[c])}}return r}function sh(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function xE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function mv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function gv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function _v(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function vv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=_v(n),t.suspenseyImages.push(n)),t=EE.bind(t),n.decode().then(t,t))}function ME(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=zs(r.href),c=n.querySelector(el(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=il.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,xe(c);return}c=n.ownerDocument||n,r=dv(r),(l=Ri.get(l))&&ah(r,l),c=c.createElement("link"),xe(c);var g=c;g._p=new Promise(function(A,F){g.onload=A,g.onerror=F}),Nn(c,"link",r),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=il.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ku=0;function yE(t,n){return t.stylesheets&&t.count===0&&Wu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Wu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&ku===0&&(ku=62500*Hy());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Wu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>ku?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function Sv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Wu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function il(){this.count--,Sv(this)}function EE(){this.imgCount--,Sv(this)}var qu=null;function Wu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,qu=new Map,n.forEach(TE,t),qu=null,il.call(t))}function TE(t,n){if(!(n.state.loading&4)){var a=qu.get(t);if(a)var r=a.get(null);else{a=new Map,qu.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var g=l[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}l=n.instance,g=l.getAttribute("data-precedence"),c=a.get(g)||r,c===r&&a.set(null,l),a.set(g,l),this.count++,r=il.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Fs={$$typeof:Q,Provider:null,Consumer:null,_currentValue:ge,_currentValue2:ge,_threadCount:0};function bE(t,n,a,r,l,c,g,A,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ns(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ns(0),this.hiddenUpdates=ns(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.transitionTypes=null,this.incompleteTransitions=new Map}function xv(t,n,a,r,l,c,g,A,F,et,ft,xt){return t=new bE(t,n,a,g,F,et,ft,xt,A),n=1,c===!0&&(n|=24),c=Kn(3,null,null,n),t.current=c,c.stateNode=t,n=Mf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:n},bf(c),t}function Mv(t){return t?(t=fs,t):fs}function yv(t,n,a,r,l,c){l=Mv(l),r.context===null?r.context=l:r.pendingContext=l,r=Ka(n),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=Qa(t,r,n),a!==null&&($n(a,t,n),Oo(a,t,n))}function Ev(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function oh(t,n){Ev(t,n),(t=t.alternate)&&Ev(t,n)}function Tv(t){if(t.tag===13||t.tag===31){var n=Ar(t,67108864);n!==null&&$n(n,t,67108864),oh(t,67108864)}}function bv(t){if(t.tag===13||t.tag===31){var n=fi();n=_o(n);var a=Ar(t,n);a!==null&&$n(a,t,n),oh(t,n)}}var Hs=!0;function AE(t,n,a,r){var l=pt.T;pt.T=null;var c=At.p;try{At.p=2,lh(t,n,a,r)}finally{At.p=c,pt.T=l}}function RE(t,n,a,r){var l=pt.T;pt.T=null;var c=At.p;try{At.p=8,lh(t,n,a,r)}finally{At.p=c,pt.T=l}}function lh(t,n,a,r){if(Hs){var l=uh(r);if(l===null)Xd(t,n,r,Yu,a),Rv(t,r);else if(wE(l,t,n,a,r))r.stopPropagation();else if(Rv(t,r),n&4&&-1<CE.indexOf(t)){for(;l!==null;){var c=pe(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=da(c.pendingLanes);if(g!==0){var A=c;for(A.pendingLanes|=2,A.entangledLanes|=2;g;){var F=1<<31-he(g);A.entanglements[1]|=F,g&=~F}ea(c),(Ve&6)===0&&(Uu=qt()+500,Qo(0))}}break;case 31:case 13:A=Ar(c,2),A!==null&&$n(A,c,2),Pu(),oh(c,2)}if(c=uh(r),c===null&&Xd(t,n,r,Yu,a),c===l)break;l=c}l!==null&&r.stopPropagation()}else Xd(t,n,r,null,a)}}function uh(t){return t=Yc(t),ch(t)}var Yu=null;function ch(t){if(Yu=null,t=le(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Yu=t,null}function Av(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ae()){case de:return 2;case J:return 8;case Dt:case Mt:return 32;case Ot:return 268435456;default:return 32}default:return 32}}var fh=!1,lr=null,ur=null,cr=null,al=new Map,rl=new Map,fr=[],CE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rv(t,n){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":al.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(n.pointerId)}}function sl(t,n,a,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},n!==null&&(n=pe(n),n!==null&&Tv(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function wE(t,n,a,r,l){switch(n){case"focusin":return lr=sl(lr,t,n,a,r,l),!0;case"dragenter":return ur=sl(ur,t,n,a,r,l),!0;case"mouseover":return cr=sl(cr,t,n,a,r,l),!0;case"pointerover":var c=l.pointerId;return al.set(c,sl(al.get(c)||null,t,n,a,r,l)),!0;case"gotpointercapture":return c=l.pointerId,rl.set(c,sl(rl.get(c)||null,t,n,a,r,l)),!0}return!1}function Cv(t){var n=le(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Ll(t.priority,function(){bv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ll(t.priority,function(){bv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=uh(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Wc=r,a.target.dispatchEvent(r),Wc=null}else return n=pe(a),n!==null&&Tv(n),t.blockedOn=a,!1;n.shift()}return!0}function wv(t,n,a){Zu(t)&&a.delete(n)}function DE(){fh=!1,lr!==null&&Zu(lr)&&(lr=null),ur!==null&&Zu(ur)&&(ur=null),cr!==null&&Zu(cr)&&(cr=null),al.forEach(wv),rl.forEach(wv)}function Ku(t,n){t.blockedOn===n&&(t.blockedOn=null,fh||(fh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,DE)))}var Qu=null;function Dv(t){Qu!==t&&(Qu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Qu===t&&(Qu=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if(ch(r||a)===null)continue;break}var c=pe(a);c!==null&&(t.splice(n,3),n-=3,Wf(c,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function Gs(t){function n(F){return Ku(F,t)}lr!==null&&Ku(lr,t),ur!==null&&Ku(ur,t),cr!==null&&Ku(cr,t),al.forEach(n),rl.forEach(n);for(var a=0;a<fr.length;a++){var r=fr[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<fr.length&&(a=fr[0],a.blockedOn===null);)Cv(a),a.blockedOn===null&&fr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],c=a[r+1],g=l[Y]||null;if(typeof c=="function")g||Dv(a);else if(g){var A=null;if(c&&c.hasAttribute("formAction")){if(l=c,g=c[Y]||null)A=g.formAction;else if(ch(l)!==null)continue}else A=g.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),Dv(a)}}}function Nv(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(g){return l=g})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function dh(t){this._internalRoot=t}Ju.prototype.render=dh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=fi();yv(a,r,t,n,null,null)},Ju.prototype.unmount=dh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;yv(t.current,2,null,t,null,null),Pu(),n[dt]=null}};function Ju(t){this._internalRoot=t}Ju.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ul();t={blockedOn:null,target:t,priority:n};for(var a=0;a<fr.length&&n!==0&&n<fr[a].priority;a++);fr.splice(a,0,t),a===0&&Cv(t)}};var Uv=e.version;if(Uv!=="19.3.0")throw Error(s(527,Uv,"19.3.0"));At.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var NE={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:pt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ju.isDisabled&&ju.supportsFiber)try{$t=ju.inject(NE),Vt=ju}catch{}}return ll.createRoot=function(t,n){if(!u(t))throw Error(s(299));var a=!1,r="",l=Mg,c=yg,g=Eg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=xv(t,1,!1,null,null,a,r,null,l,c,g,Nv),t[dt]=n.current,Vd(t),new dh(n)},ll.hydrateRoot=function(t,n,a){if(!u(t))throw Error(s(299));var r=!1,l="",c=Mg,g=yg,A=Eg,F=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=xv(t,1,!0,n,a??null,r,l,F,c,g,A,Nv),n.context=Mv(null),a=n.current,r=fi(),r=_o(r),l=Ka(r),l.callback=null,Qa(a,l,r),a=r,n.current.lanes=a,Xi(n,a),ea(n),t[dt]=n.current,Vd(t),new Ju(n)},ll.version="19.3.0",ll}var Vv;function GE(){if(Vv)return mh.exports;Vv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),mh.exports=HE(),mh.exports}var VE=GE();function Ic(o){const e=new Uint32Array(1);return crypto.getRandomValues(e),Promise.resolve(e[0]%o+1)}const em="186",XE=0,Xv=1,kE=2,Ec=1,qE=2,gl=3,la=0,ni=1,Ua=2,Oa=0,vl=1,kv=2,qv=3,Wv=4,WE=5,eo=100,YE=101,ZE=102,KE=103,QE=104,JE=200,jE=201,$E=202,tT=203,fx=204,dx=205,eT=206,nT=207,iT=208,aT=209,rT=210,sT=211,oT=212,lT=213,uT=214,tp=0,ep=1,np=2,xl=3,ip=4,ap=5,rp=6,sp=7,hx=0,cT=1,fT=2,oa=0,px=1,mx=2,gx=3,_x=4,vx=5,Sx=6,xx=7,Mx=300,Jr=301,uo=302,Sh=303,xh=304,zc=306,op=1e3,La=1001,lp=1002,Ln=1003,dT=1004,$u=1005,Bn=1006,Mh=1007,Kr=1008,mi=1009,yx=1010,Ex=1011,Ml=1012,nm=1013,ua=1014,ra=1015,ca=1016,im=1017,am=1018,yl=1020,Tx=35902,bx=35899,Ax=1021,Rx=1022,Hi=1023,Ba=1026,Qr=1027,Cx=1028,rm=1029,jr=1030,sm=1031,om=1033,Tc=33776,bc=33777,Ac=33778,Rc=33779,up=35840,cp=35841,fp=35842,dp=35843,hp=36196,pp=37492,mp=37496,gp=37488,_p=37489,wc=37490,vp=37491,Sp=37808,xp=37809,Mp=37810,yp=37811,Ep=37812,Tp=37813,bp=37814,Ap=37815,Rp=37816,Cp=37817,wp=37818,Dp=37819,Np=37820,Up=37821,Lp=36492,Op=36494,Pp=36495,Ip=36283,zp=36284,Dc=36285,Bp=36286,hT=3200,Fp=0,pT=1,xr="",Yn="srgb",Nc="srgb-linear",Uc="linear",Ze="srgb",yh=7680,mT=519,gT=512,_T=513,vT=514,lm=515,ST=516,xT=517,um=518,MT=519,yT=35044,Yv="300 es",sa=2e3,El=2001;function ET(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Lc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function TT(){const o=Lc("canvas");return o.style.display="block",o}const Zv={};function Kv(...o){const e="THREE."+o.shift();console.log(e,...o)}function wx(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function fe(...o){o=wx(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function He(...o){o=wx(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function io(...o){const e=o.join(" ");e in Zv||(Zv[e]=!0,fe(...o))}function bT(o,e,i){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const AT={[tp]:ep,[np]:rp,[ip]:sp,[xl]:ap,[ep]:tp,[rp]:np,[sp]:ip,[ap]:xl};class $r{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const u=s[e];if(u!==void 0){const f=u.indexOf(i);f!==-1&&u.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const u=s.slice(0);for(let f=0,d=u.length;f<d;f++)u[f].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eh=Math.PI/180,Hp=180/Math.PI;function bl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(In[o&255]+In[o>>8&255]+In[o>>16&255]+In[o>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]).toLowerCase()}function Oe(o,e,i){return Math.max(e,Math.min(i,o))}function RT(o,e){return(o%e+e)%e}function Th(o,e,i){return(1-i)*o+i*e}function ul(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ti(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const bm=class bm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6],this.y=u[1]*i+u[4]*s+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Oe(this.x,e.x,i.x),this.y=Oe(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Oe(this.x,e,i),this.y=Oe(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Oe(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Oe(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),u=Math.sin(i),f=this.x-e.x,d=this.y-e.y;return this.x=f*s-d*u+e.x,this.y=f*u+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bm.prototype.isVector2=!0;let Ae=bm;class vn{constructor(e=0,i=0,s=0,u=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=u}static slerpFlat(e,i,s,u,f,d,h){let p=s[u+0],m=s[u+1],S=s[u+2],_=s[u+3],v=f[d+0],T=f[d+1],R=f[d+2],P=f[d+3];if(_!==P||p!==v||m!==T||S!==R){let M=p*v+m*T+S*R+_*P;M<0&&(v=-v,T=-T,R=-R,P=-P,M=-M);let x=1-h;if(M<.9995){const D=Math.acos(M),G=Math.sin(D);x=Math.sin(x*D)/G,h=Math.sin(h*D)/G,p=p*x+v*h,m=m*x+T*h,S=S*x+R*h,_=_*x+P*h}else{p=p*x+v*h,m=m*x+T*h,S=S*x+R*h,_=_*x+P*h;const D=1/Math.sqrt(p*p+m*m+S*S+_*_);p*=D,m*=D,S*=D,_*=D}}e[i]=p,e[i+1]=m,e[i+2]=S,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,u,f,d){const h=s[u],p=s[u+1],m=s[u+2],S=s[u+3],_=f[d],v=f[d+1],T=f[d+2],R=f[d+3];return e[i]=h*R+S*_+p*T-m*v,e[i+1]=p*R+S*v+m*_-h*T,e[i+2]=m*R+S*T+h*v-p*_,e[i+3]=S*R-h*_-p*v-m*T,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,u){return this._x=e,this._y=i,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,u=e._y,f=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(s/2),S=h(u/2),_=h(f/2),v=p(s/2),T=p(u/2),R=p(f/2);switch(d){case"XYZ":this._x=v*S*_+m*T*R,this._y=m*T*_-v*S*R,this._z=m*S*R+v*T*_,this._w=m*S*_-v*T*R;break;case"YXZ":this._x=v*S*_+m*T*R,this._y=m*T*_-v*S*R,this._z=m*S*R-v*T*_,this._w=m*S*_+v*T*R;break;case"ZXY":this._x=v*S*_-m*T*R,this._y=m*T*_+v*S*R,this._z=m*S*R+v*T*_,this._w=m*S*_-v*T*R;break;case"ZYX":this._x=v*S*_-m*T*R,this._y=m*T*_+v*S*R,this._z=m*S*R-v*T*_,this._w=m*S*_+v*T*R;break;case"YZX":this._x=v*S*_+m*T*R,this._y=m*T*_+v*S*R,this._z=m*S*R-v*T*_,this._w=m*S*_-v*T*R;break;case"XZY":this._x=v*S*_-m*T*R,this._y=m*T*_-v*S*R,this._z=m*S*R+v*T*_,this._w=m*S*_+v*T*R;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,u=Math.sin(s);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],u=i[4],f=i[8],d=i[1],h=i[5],p=i[9],m=i[2],S=i[6],_=i[10],v=s+h+_;if(v>0){const T=.5/Math.sqrt(v+1);this._w=.25/T,this._x=(S-p)*T,this._y=(f-m)*T,this._z=(d-u)*T}else if(s>h&&s>_){const T=2*Math.sqrt(1+s-h-_);this._w=(S-p)/T,this._x=.25*T,this._y=(u+d)/T,this._z=(f+m)/T}else if(h>_){const T=2*Math.sqrt(1+h-s-_);this._w=(f-m)/T,this._x=(u+d)/T,this._y=.25*T,this._z=(p+S)/T}else{const T=2*Math.sqrt(1+_-s-h);this._w=(d-u)/T,this._x=(f+m)/T,this._y=(p+S)/T,this._z=.25*T}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const u=Math.min(1,i/s);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,u=e._y,f=e._z,d=e._w,h=i._x,p=i._y,m=i._z,S=i._w;return this._x=s*S+d*h+u*m-f*p,this._y=u*S+d*p+f*h-s*m,this._z=f*S+d*m+s*p-u*h,this._w=d*S-s*h-u*p-f*m,this._onChangeCallback(),this}slerp(e,i){let s=e._x,u=e._y,f=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,u=-u,f=-f,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),S=Math.sin(m);p=Math.sin(p*m)/S,i=Math.sin(i*m)/S,this._x=this._x*p+s*i,this._y=this._y*p+u*i,this._z=this._z*p+f*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+s*i,this._y=this._y*p+u*i,this._z=this._z*p+f*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Am=class Am{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Qv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Qv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[3]*s+f[6]*u,this.y=f[1]*i+f[4]*s+f[7]*u,this.z=f[2]*i+f[5]*s+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,u=this.z,f=e.elements,d=1/(f[3]*i+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*u+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*u+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*u+f[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,u=this.z,f=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*u-h*s),S=2*(h*i-f*u),_=2*(f*s-d*i);return this.x=i+p*m+d*_-h*S,this.y=s+p*S+h*m-f*_,this.z=u+p*_+f*S-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*u,this.y=f[1]*i+f[5]*s+f[9]*u,this.z=f[2]*i+f[6]*s+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Oe(this.x,e.x,i.x),this.y=Oe(this.y,e.y,i.y),this.z=Oe(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Oe(this.x,e,i),this.y=Oe(this.y,e,i),this.z=Oe(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Oe(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,u=e.y,f=e.z,d=i.x,h=i.y,p=i.z;return this.x=u*p-f*h,this.y=f*d-s*p,this.z=s*h-u*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return bh.copy(this).projectOnVector(e),this.sub(bh)}reflect(e){return this.sub(bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Oe(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,u=this.z-e.z;return i*i+s*s+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const u=Math.sin(i)*e;return this.x=u*Math.sin(s),this.y=Math.cos(i)*e,this.z=u*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=u,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Am.prototype.isVector3=!0;let tt=Am;const bh=new tt,Qv=new vn,Rm=class Rm{constructor(e,i,s,u,f,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,u,f,d,h,p,m)}set(e,i,s,u,f,d,h,p,m){const S=this.elements;return S[0]=e,S[1]=u,S[2]=h,S[3]=i,S[4]=f,S[5]=p,S[6]=s,S[7]=d,S[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,u=i.elements,f=this.elements,d=s[0],h=s[3],p=s[6],m=s[1],S=s[4],_=s[7],v=s[2],T=s[5],R=s[8],P=u[0],M=u[3],x=u[6],D=u[1],G=u[4],C=u[7],U=u[2],N=u[5],z=u[8];return f[0]=d*P+h*D+p*U,f[3]=d*M+h*G+p*N,f[6]=d*x+h*C+p*z,f[1]=m*P+S*D+_*U,f[4]=m*M+S*G+_*N,f[7]=m*x+S*C+_*z,f[2]=v*P+T*D+R*U,f[5]=v*M+T*G+R*N,f[8]=v*x+T*C+R*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8];return i*d*S-i*h*m-s*f*S+s*h*p+u*f*m-u*d*p}invert(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8],_=S*d-h*m,v=h*p-S*f,T=m*f-d*p,R=i*_+s*v+u*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=_*P,e[1]=(u*m-S*s)*P,e[2]=(h*s-u*d)*P,e[3]=v*P,e[4]=(S*i-u*p)*P,e[5]=(u*f-h*i)*P,e[6]=T*P,e[7]=(s*p-m*i)*P,e[8]=(d*i-s*f)*P,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,u,f,d,h){const p=Math.cos(f),m=Math.sin(f);return this.set(s*p,s*m,-s*(p*d+m*h)+d+e,-u*m,u*p,-u*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return io("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ah.makeScale(e,i)),this}rotate(e){return io("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ah.makeRotation(-e)),this}translate(e,i){return io("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ah.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let u=0;u<9;u++)if(i[u]!==s[u])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Rm.prototype.isMatrix3=!0;let me=Rm;const Ah=new me,Jv=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jv=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CT(){const o={enabled:!0,workingColorSpace:Nc,spaces:{},convert:function(u,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Ze&&(u.r=Pa(u.r),u.g=Pa(u.g),u.b=Pa(u.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ze&&(u.r=ao(u.r),u.g=ao(u.g),u.b=ao(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===xr?Uc:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,d){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Nc]:{primaries:e,whitePoint:s,transfer:Uc,toXYZ:Jv,fromXYZ:jv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:e,whitePoint:s,transfer:Ze,toXYZ:Jv,fromXYZ:jv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),o}const Le=CT();function Pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ao(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Vs;class wT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Vs===void 0&&(Vs=Lc("canvas")),Vs.width=e.width,Vs.height=e.height;const u=Vs.getContext("2d");e instanceof ImageData?u.putImageData(e,0,0):u.drawImage(e,0,0,e.width,e.height),s=Vs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Lc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const u=s.getImageData(0,0,e.width,e.height),f=u.data;for(let d=0;d<f.length;d++)f[d]=Pa(f[d]/255)*255;return s.putImageData(u,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Pa(i[s]/255)*255):i[s]=Pa(i[s]);return{data:i,width:e.width,height:e.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let DT=0;class cm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=bl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let d=0,h=u.length;d<h;d++)u[d].isDataTexture?f.push(Rh(u[d].image)):f.push(Rh(u[d]))}else f=Rh(u);s.url=f}return i||(e.images[this.uuid]=s),s}}function Rh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?wT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}let NT=0;const Ch=new tt;class Fn extends $r{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,s=La,u=La,f=Bn,d=Kr,h=Hi,p=mi,m=Fn.DEFAULT_ANISOTROPY,S=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=bl(),this.name="",this.source=new cm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ch).x}get height(){return this.source.getSize(Ch).y}get depth(){return this.source.getSize(Ch).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){fe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){fe(`Texture.setValues(): property '${i}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case op:e.x=e.x-Math.floor(e.x);break;case La:e.x=e.x<0?0:1;break;case lp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case op:e.y=e.y-Math.floor(e.y);break;case La:e.y=e.y<0?0:1;break;case lp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Mx;Fn.DEFAULT_ANISOTROPY=1;const Cm=class Cm{constructor(e=0,i=0,s=0,u=1){this.x=e,this.y=i,this.z=s,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,u){return this.x=e,this.y=i,this.z=s,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,u=this.z,f=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*u+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*u+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*u+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*u+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,u,f;const p=e.elements,m=p[0],S=p[4],_=p[8],v=p[1],T=p[5],R=p[9],P=p[2],M=p[6],x=p[10];if(Math.abs(S-v)<.01&&Math.abs(_-P)<.01&&Math.abs(R-M)<.01){if(Math.abs(S+v)<.1&&Math.abs(_+P)<.1&&Math.abs(R+M)<.1&&Math.abs(m+T+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const G=(m+1)/2,C=(T+1)/2,U=(x+1)/2,N=(S+v)/4,z=(_+P)/4,E=(R+M)/4;return G>C&&G>U?G<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(G),u=N/s,f=z/s):C>U?C<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(C),s=N/u,f=E/u):U<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(U),s=z/f,u=E/f),this.set(s,u,f,i),this}let D=Math.sqrt((M-R)*(M-R)+(_-P)*(_-P)+(v-S)*(v-S));return Math.abs(D)<.001&&(D=1),this.x=(M-R)/D,this.y=(_-P)/D,this.z=(v-S)/D,this.w=Math.acos((m+T+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Oe(this.x,e.x,i.x),this.y=Oe(this.y,e.y,i.y),this.z=Oe(this.z,e.z,i.z),this.w=Oe(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Oe(this.x,e,i),this.y=Oe(this.y,e,i),this.z=Oe(this.z,e,i),this.w=Oe(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Oe(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cm.prototype.isVector4=!0;let on=Cm;class UT extends $r{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i),this.textures=[];const u={width:e,height:i,depth:s.depth},f=new Fn(u),d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=i,this.textures[u].image.depth=s,this.textures[u].isData3DTexture!==!0&&(this.textures[u].isArrayTexture=this.textures[u].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const u=Object.assign({},e.textures[i].image);this.textures[i].source=new cm(u)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends UT{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Dx extends Fn{constructor(e=null,i=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:u},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class LT extends Fn{constructor(e=null,i=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:u},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Pc=class Pc{constructor(e,i,s,u,f,d,h,p,m,S,_,v,T,R,P,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,u,f,d,h,p,m,S,_,v,T,R,P,M)}set(e,i,s,u,f,d,h,p,m,S,_,v,T,R,P,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=u,x[1]=f,x[5]=d,x[9]=h,x[13]=p,x[2]=m,x[6]=S,x[10]=_,x[14]=v,x[3]=T,x[7]=R,x[11]=P,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pc().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,u=1/Xs.setFromMatrixColumn(e,0).length(),f=1/Xs.setFromMatrixColumn(e,1).length(),d=1/Xs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*u,i[1]=s[1]*u,i[2]=s[2]*u,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,u=e.y,f=e.z,d=Math.cos(s),h=Math.sin(s),p=Math.cos(u),m=Math.sin(u),S=Math.cos(f),_=Math.sin(f);if(e.order==="XYZ"){const v=d*S,T=d*_,R=h*S,P=h*_;i[0]=p*S,i[4]=-p*_,i[8]=m,i[1]=T+R*m,i[5]=v-P*m,i[9]=-h*p,i[2]=P-v*m,i[6]=R+T*m,i[10]=d*p}else if(e.order==="YXZ"){const v=p*S,T=p*_,R=m*S,P=m*_;i[0]=v+P*h,i[4]=R*h-T,i[8]=d*m,i[1]=d*_,i[5]=d*S,i[9]=-h,i[2]=T*h-R,i[6]=P+v*h,i[10]=d*p}else if(e.order==="ZXY"){const v=p*S,T=p*_,R=m*S,P=m*_;i[0]=v-P*h,i[4]=-d*_,i[8]=R+T*h,i[1]=T+R*h,i[5]=d*S,i[9]=P-v*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const v=d*S,T=d*_,R=h*S,P=h*_;i[0]=p*S,i[4]=R*m-T,i[8]=v*m+P,i[1]=p*_,i[5]=P*m+v,i[9]=T*m-R,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const v=d*p,T=d*m,R=h*p,P=h*m;i[0]=p*S,i[4]=P-v*_,i[8]=R*_+T,i[1]=_,i[5]=d*S,i[9]=-h*S,i[2]=-m*S,i[6]=T*_+R,i[10]=v-P*_}else if(e.order==="XZY"){const v=d*p,T=d*m,R=h*p,P=h*m;i[0]=p*S,i[4]=-_,i[8]=m*S,i[1]=v*_+P,i[5]=d*S,i[9]=T*_-R,i[2]=R*_-T,i[6]=h*S,i[10]=P*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OT,e,PT)}lookAt(e,i,s){const u=this.elements;return hi.subVectors(e,i),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),hr.crossVectors(s,hi),hr.lengthSq()===0&&(Math.abs(s.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),hr.crossVectors(s,hi)),hr.normalize(),tc.crossVectors(hi,hr),u[0]=hr.x,u[4]=tc.x,u[8]=hi.x,u[1]=hr.y,u[5]=tc.y,u[9]=hi.y,u[2]=hr.z,u[6]=tc.z,u[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,u=i.elements,f=this.elements,d=s[0],h=s[4],p=s[8],m=s[12],S=s[1],_=s[5],v=s[9],T=s[13],R=s[2],P=s[6],M=s[10],x=s[14],D=s[3],G=s[7],C=s[11],U=s[15],N=u[0],z=u[4],E=u[8],L=u[12],w=u[1],O=u[5],B=u[9],q=u[13],V=u[2],Q=u[6],k=u[10],W=u[14],nt=u[3],at=u[7],ht=u[11],St=u[15];return f[0]=d*N+h*w+p*V+m*nt,f[4]=d*z+h*O+p*Q+m*at,f[8]=d*E+h*B+p*k+m*ht,f[12]=d*L+h*q+p*W+m*St,f[1]=S*N+_*w+v*V+T*nt,f[5]=S*z+_*O+v*Q+T*at,f[9]=S*E+_*B+v*k+T*ht,f[13]=S*L+_*q+v*W+T*St,f[2]=R*N+P*w+M*V+x*nt,f[6]=R*z+P*O+M*Q+x*at,f[10]=R*E+P*B+M*k+x*ht,f[14]=R*L+P*q+M*W+x*St,f[3]=D*N+G*w+C*V+U*nt,f[7]=D*z+G*O+C*Q+U*at,f[11]=D*E+G*B+C*k+U*ht,f[15]=D*L+G*q+C*W+U*St,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],u=e[8],f=e[12],d=e[1],h=e[5],p=e[9],m=e[13],S=e[2],_=e[6],v=e[10],T=e[14],R=e[3],P=e[7],M=e[11],x=e[15],D=p*T-m*v,G=h*T-m*_,C=h*v-p*_,U=d*T-m*S,N=d*v-p*S,z=d*_-h*S;return i*(P*D-M*G+x*C)-s*(R*D-M*U+x*N)+u*(R*G-P*U+x*z)-f*(R*C-P*N+M*z)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],u=e[8],f=e[1],d=e[5],h=e[9],p=e[2],m=e[6],S=e[10];return i*(d*S-h*m)-s*(f*S-h*p)+u*(f*m-d*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=i,u[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8],_=e[9],v=e[10],T=e[11],R=e[12],P=e[13],M=e[14],x=e[15],D=i*h-s*d,G=i*p-u*d,C=i*m-f*d,U=s*p-u*h,N=s*m-f*h,z=u*m-f*p,E=S*P-_*R,L=S*M-v*R,w=S*x-T*R,O=_*M-v*P,B=_*x-T*P,q=v*x-T*M,V=D*q-G*B+C*O+U*w-N*L+z*E;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/V;return e[0]=(h*q-p*B+m*O)*Q,e[1]=(u*B-s*q-f*O)*Q,e[2]=(P*z-M*N+x*U)*Q,e[3]=(v*N-_*z-T*U)*Q,e[4]=(p*w-d*q-m*L)*Q,e[5]=(i*q-u*w+f*L)*Q,e[6]=(M*C-R*z-x*G)*Q,e[7]=(S*z-v*C+T*G)*Q,e[8]=(d*B-h*w+m*E)*Q,e[9]=(s*w-i*B-f*E)*Q,e[10]=(R*N-P*C+x*D)*Q,e[11]=(_*C-S*N-T*D)*Q,e[12]=(h*L-d*O-p*E)*Q,e[13]=(i*O-s*L+u*E)*Q,e[14]=(P*G-R*U-M*D)*Q,e[15]=(S*U-_*G+v*D)*Q,this}scale(e){const i=this.elements,s=e.x,u=e.y,f=e.z;return i[0]*=s,i[4]*=u,i[8]*=f,i[1]*=s,i[5]*=u,i[9]*=f,i[2]*=s,i[6]*=u,i[10]*=f,i[3]*=s,i[7]*=u,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,u))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),u=Math.sin(i),f=1-s,d=e.x,h=e.y,p=e.z,m=f*d,S=f*h;return this.set(m*d+s,m*h-u*p,m*p+u*h,0,m*h+u*p,S*h+s,S*p-u*d,0,m*p-u*h,S*p+u*d,f*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,u,f,d){return this.set(1,s,f,0,e,1,d,0,i,u,1,0,0,0,0,1),this}compose(e,i,s){const u=this.elements,f=i._x,d=i._y,h=i._z,p=i._w,m=f+f,S=d+d,_=h+h,v=f*m,T=f*S,R=f*_,P=d*S,M=d*_,x=h*_,D=p*m,G=p*S,C=p*_,U=s.x,N=s.y,z=s.z;return u[0]=(1-(P+x))*U,u[1]=(T+C)*U,u[2]=(R-G)*U,u[3]=0,u[4]=(T-C)*N,u[5]=(1-(v+x))*N,u[6]=(M+D)*N,u[7]=0,u[8]=(R+G)*z,u[9]=(M-D)*z,u[10]=(1-(v+P))*z,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,i,s){const u=this.elements;e.x=u[12],e.y=u[13],e.z=u[14];const f=this.determinantAffine();if(f===0)return s.set(1,1,1),i.identity(),this;let d=Xs.set(u[0],u[1],u[2]).length();const h=Xs.set(u[4],u[5],u[6]).length(),p=Xs.set(u[8],u[9],u[10]).length();f<0&&(d=-d),Ii.copy(this);const m=1/d,S=1/h,_=1/p;return Ii.elements[0]*=m,Ii.elements[1]*=m,Ii.elements[2]*=m,Ii.elements[4]*=S,Ii.elements[5]*=S,Ii.elements[6]*=S,Ii.elements[8]*=_,Ii.elements[9]*=_,Ii.elements[10]*=_,i.setFromRotationMatrix(Ii),s.x=d,s.y=h,s.z=p,this}makePerspective(e,i,s,u,f,d,h=sa,p=!1){const m=this.elements,S=2*f/(i-e),_=2*f/(s-u),v=(i+e)/(i-e),T=(s+u)/(s-u);let R,P;if(p)R=f/(d-f),P=d*f/(d-f);else if(h===sa)R=-(d+f)/(d-f),P=-2*d*f/(d-f);else if(h===El)R=-d/(d-f),P=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=T,m[13]=0,m[2]=0,m[6]=0,m[10]=R,m[14]=P,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,u,f,d,h=sa,p=!1){const m=this.elements,S=2/(i-e),_=2/(s-u),v=-(i+e)/(i-e),T=-(s+u)/(s-u);let R,P;if(p)R=1/(d-f),P=d/(d-f);else if(h===sa)R=-2/(d-f),P=-(d+f)/(d-f);else if(h===El)R=-1/(d-f),P=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=_,m[9]=0,m[13]=T,m[2]=0,m[6]=0,m[10]=R,m[14]=P,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let u=0;u<16;u++)if(i[u]!==s[u])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Pc.prototype.isMatrix4=!0;let en=Pc;const Xs=new tt,Ii=new en,OT=new tt(0,0,0),PT=new tt(1,1,1),hr=new tt,tc=new tt,hi=new tt,$v=new en,tS=new vn;class gi{constructor(e=0,i=0,s=0,u=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,u=this._order){return this._x=e,this._y=i,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const u=e.elements,f=u[0],d=u[4],h=u[8],p=u[1],m=u[5],S=u[9],_=u[2],v=u[6],T=u[10];switch(i){case"XYZ":this._y=Math.asin(Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,T),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,T),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,f),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,T),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-Oe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,T),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Oe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,m),this._y=Math.atan2(-_,f)):(this._x=0,this._y=Math.atan2(h,T));break;case"XZY":this._z=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-S,T),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return $v.makeRotationFromQuaternion(e),this.setFromRotationMatrix($v,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return tS.setFromEuler(this),this.setFromQuaternion(tS,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class Nx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IT=0;const eS=new tt,ks=new vn,Ra=new en,ec=new tt,cl=new tt,zT=new tt,BT=new vn,nS=new tt(1,0,0),iS=new tt(0,1,0),aS=new tt(0,0,1),rS={type:"added"},FT={type:"removed"},qs={type:"childadded",child:null},wh={type:"childremoved",child:null};class On extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=bl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new tt,i=new gi,s=new vn,u=new tt(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new en},normalMatrix:{value:new me}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ks.setFromAxisAngle(e,i),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,i){return ks.setFromAxisAngle(e,i),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(nS,e)}rotateY(e){return this.rotateOnAxis(iS,e)}rotateZ(e){return this.rotateOnAxis(aS,e)}translateOnAxis(e,i){return eS.copy(e).applyQuaternion(this.quaternion),this.position.add(eS.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(nS,e)}translateY(e){return this.translateOnAxis(iS,e)}translateZ(e){return this.translateOnAxis(aS,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ra.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?ec.copy(e):ec.set(e,i,s);const u=this.parent;this.updateWorldMatrix(!0,!1),cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ra.lookAt(cl,ec,this.up):Ra.lookAt(ec,cl,this.up),this.quaternion.setFromRotationMatrix(Ra),u&&(Ra.extractRotation(u.matrixWorld),ks.setFromRotationMatrix(Ra),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rS),qs.child=e,this.dispatchEvent(qs),qs.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(FT),wh.child=e,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ra.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ra.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ra),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rS),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,u=this.children.length;s<u;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const u=this.children;for(let f=0,d=u.length;f<d;f++)u[f].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,e,zT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,BT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,u=e.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*s-f[8]*u,f[13]+=s-f[1]*i-f[5]*s-f[9]*u,f[14]+=u-f[2]*i-f[6]*s-f[10]*u}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const u=this.parent;if(e===!0&&u!==null&&u.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,u.name=this.name,u.castShadow=this.castShadow,u.receiveShadow=this.receiveShadow,u.visible=this.visible,u.frustumCulled=this.frustumCulled,u.renderOrder=this.renderOrder,u.static=this.static,u.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.pivot!==null&&(u.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(u.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(u.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(h=>({...h})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(e),u.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,S=p.length;m<S;m++){const _=p[m];f(e.shapes,_)}else f(e.shapes,p)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(f(e.materials,this.material[p]));u.material=h}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let h=0;h<this.children.length;h++)u.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];u.animations.push(f(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),S=d(e.images),_=d(e.shapes),v=d(e.skeletons),T=d(e.animations),R=d(e.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),S.length>0&&(s.images=S),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),T.length>0&&(s.animations=T),R.length>0&&(s.nodes=R)}return s.object=u,s;function d(h){const p=[];for(const m in h){const S=h[m];delete S.metadata,p.push(S)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const u=e.children[s];this.add(u.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}On.DEFAULT_UP=new tt(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class nc extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HT={type:"move"};class Dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let u=null,f=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const P of e.hand.values()){const M=i.getJointPose(P,s),x=this._getHandJoint(m,P);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const S=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],v=S.position.distanceTo(_.position),T=.02,R=.005;m.inputState.pinching&&v>T+R?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=T-R&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,s),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(u=i.getPose(e.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(HT)))}return h!==null&&(h.visible=u!==null),p!==null&&(p.visible=f!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new nc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Ux={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},ic={h:0,s:0,l:0};function Nh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ze{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(e,i,s,u=Le.workingColorSpace){return this.r=e,this.g=i,this.b=s,Le.colorSpaceToWorking(this,u),this}setHSL(e,i,s,u=Le.workingColorSpace){if(e=RT(e,1),i=Oe(i,0,1),s=Oe(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=Nh(d,f,e+1/3),this.g=Nh(d,f,e),this.b=Nh(d,f,e-1/3)}return Le.colorSpaceToWorking(this,u),this}setStyle(e,i=Yn){function s(f){f!==void 0&&parseFloat(f)<1&&fe("Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=u[1],h=u[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:fe("Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Yn){const s=Ux[e.toLowerCase()];return s!==void 0?this.setHex(s,i):fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return Le.workingToColorSpace(zn.copy(this),e),Math.round(Oe(zn.r*255,0,255))*65536+Math.round(Oe(zn.g*255,0,255))*256+Math.round(Oe(zn.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Le.workingColorSpace){Le.workingToColorSpace(zn.copy(this),i);const s=zn.r,u=zn.g,f=zn.b,d=Math.max(s,u,f),h=Math.min(s,u,f);let p,m;const S=(h+d)/2;if(h===d)p=0,m=0;else{const _=d-h;switch(m=S<=.5?_/(d+h):_/(2-d-h),d){case s:p=(u-f)/_+(u<f?6:0);break;case u:p=(f-s)/_+2;break;case f:p=(s-u)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=S,e}getRGB(e,i=Le.workingColorSpace){return Le.workingToColorSpace(zn.copy(this),i),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Yn){Le.workingToColorSpace(zn.copy(this),e);const i=zn.r,s=zn.g,u=zn.b;return e!==Yn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(e,i,s){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+i,pr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(pr),e.getHSL(ic);const s=Th(pr.h,ic.h,i),u=Th(pr.s,ic.s,i),f=Th(pr.l,ic.l,i);return this.setHSL(s,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,u=this.b,f=e.elements;return this.r=f[0]*i+f[3]*s+f[6]*u,this.g=f[1]*i+f[4]*s+f[7]*u,this.b=f[2]*i+f[5]*s+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new ze;ze.NAMES=Ux;class fm extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const zi=new tt,Ca=new tt,Uh=new tt,wa=new tt,Ws=new tt,Ys=new tt,sS=new tt,Lh=new tt,Oh=new tt,Ph=new tt,Ih=new on,zh=new on,Bh=new on;class Fi{constructor(e=new tt,i=new tt,s=new tt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,u){u.subVectors(s,i),zi.subVectors(e,i),u.cross(zi);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,i,s,u,f){zi.subVectors(u,i),Ca.subVectors(s,i),Uh.subVectors(e,i);const d=zi.dot(zi),h=zi.dot(Ca),p=zi.dot(Uh),m=Ca.dot(Ca),S=Ca.dot(Uh),_=d*m-h*h;if(_===0)return f.set(0,0,0),null;const v=1/_,T=(m*p-h*S)*v,R=(d*S-h*p)*v;return f.set(1-T-R,R,T)}static containsPoint(e,i,s,u){return this.getBarycoord(e,i,s,u,wa)===null?!1:wa.x>=0&&wa.y>=0&&wa.x+wa.y<=1}static getInterpolation(e,i,s,u,f,d,h,p){return this.getBarycoord(e,i,s,u,wa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,wa.x),p.addScaledVector(d,wa.y),p.addScaledVector(h,wa.z),p)}static getInterpolatedAttribute(e,i,s,u,f,d){return Ih.setScalar(0),zh.setScalar(0),Bh.setScalar(0),Ih.fromBufferAttribute(e,i),zh.fromBufferAttribute(e,s),Bh.fromBufferAttribute(e,u),d.setScalar(0),d.addScaledVector(Ih,f.x),d.addScaledVector(zh,f.y),d.addScaledVector(Bh,f.z),d}static isFrontFacing(e,i,s,u){return zi.subVectors(s,i),Ca.subVectors(e,i),zi.cross(Ca).dot(u)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,u){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,i,s,u){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),zi.cross(Ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Fi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,u,f){return Fi.getInterpolation(e,this.a,this.b,this.c,i,s,u,f)}containsPoint(e){return Fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,u=this.b,f=this.c;let d,h;Ws.subVectors(u,s),Ys.subVectors(f,s),Lh.subVectors(e,s);const p=Ws.dot(Lh),m=Ys.dot(Lh);if(p<=0&&m<=0)return i.copy(s);Oh.subVectors(e,u);const S=Ws.dot(Oh),_=Ys.dot(Oh);if(S>=0&&_<=S)return i.copy(u);const v=p*_-S*m;if(v<=0&&p>=0&&S<=0)return d=p/(p-S),i.copy(s).addScaledVector(Ws,d);Ph.subVectors(e,f);const T=Ws.dot(Ph),R=Ys.dot(Ph);if(R>=0&&T<=R)return i.copy(f);const P=T*m-p*R;if(P<=0&&m>=0&&R<=0)return h=m/(m-R),i.copy(s).addScaledVector(Ys,h);const M=S*R-T*_;if(M<=0&&_-S>=0&&T-R>=0)return sS.subVectors(f,u),h=(_-S)/(_-S+(T-R)),i.copy(u).addScaledVector(sS,h);const x=1/(M+P+v);return d=P*x,h=v*x,i.copy(s).addScaledVector(Ws,d).addScaledVector(Ys,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Al{constructor(e=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Bi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Bi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Bi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Bi):Bi.fromBufferAttribute(f,d),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ac.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ac.copy(s.boundingBox)),ac.applyMatrix4(e.matrixWorld),this.union(ac)}const u=e.children;for(let f=0,d=u.length;f<d;f++)this.expandByObject(u[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fl),rc.subVectors(this.max,fl),Zs.subVectors(e.a,fl),Ks.subVectors(e.b,fl),Qs.subVectors(e.c,fl),mr.subVectors(Ks,Zs),gr.subVectors(Qs,Ks),kr.subVectors(Zs,Qs);let i=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-kr.z,kr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,kr.z,0,-kr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-kr.y,kr.x,0];return!Fh(i,Zs,Ks,Qs,rc)||(i=[1,0,0,0,1,0,0,0,1],!Fh(i,Zs,Ks,Qs,rc))?!1:(sc.crossVectors(mr,gr),i=[sc.x,sc.y,sc.z],Fh(i,Zs,Ks,Qs,rc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Da=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],Bi=new tt,ac=new Al,Zs=new tt,Ks=new tt,Qs=new tt,mr=new tt,gr=new tt,kr=new tt,fl=new tt,rc=new tt,sc=new tt,qr=new tt;function Fh(o,e,i,s,u){for(let f=0,d=o.length-3;f<=d;f+=3){qr.fromArray(o,f);const h=u.x*Math.abs(qr.x)+u.y*Math.abs(qr.y)+u.z*Math.abs(qr.z),p=e.dot(qr),m=i.dot(qr),S=s.dot(qr);if(Math.max(-Math.max(p,m,S),Math.min(p,m,S))>h)return!1}return!0}const _n=new tt,oc=new Ae;let GT=0;class Ia extends $r{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=yT,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=i.array[s+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(e),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=ul(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ti(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ul(i,this.array)),i}setX(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ul(i,this.array)),i}setY(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ul(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ul(i,this.array)),i}setW(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,u){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array),u=ti(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=u,this}setXYZW(e,i,s,u,f){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array),u=ti(u,this.array),f=ti(f,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Lx extends Ia{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Ox extends Ia{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Hn extends Ia{constructor(e,i,s){super(new Float32Array(e),i,s)}}const VT=new Al,dl=new tt,Hh=new tt;class dm{constructor(e=new tt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):VT.setFromPoints(e).getCenter(s);let u=0;for(let f=0,d=e.length;f<d;f++)u=Math.max(u,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dl.subVectors(e,this.center);const i=dl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),u=(s-this.radius)*.5;this.center.addScaledVector(dl,u/s),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dl.copy(e.center).add(Hh)),this.expandByPoint(dl.copy(e.center).sub(Hh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let XT=0;const Ci=new en,Gh=new On,Js=new tt,pi=new Al,hl=new Al,An=new tt;class wi extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=bl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ET(e)?Ox:Lx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new me().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,i,s){return Ci.makeTranslation(e,i,s),this.applyMatrix4(Ci),this}scale(e,i,s){return Ci.makeScale(e,i,s),this.applyMatrix4(Ci),this}lookAt(e){return Gh.lookAt(e),Gh.updateMatrix(),this.applyMatrix4(Gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let u=0,f=e.length;u<f;u++){const d=e[u];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Hn(s,3))}else{const s=Math.min(e.length,i.count);for(let u=0;u<s;u++){const f=e[u];i.setXYZ(u,f.x,f.y,f.z||0)}e.length>i.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Al);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,u=i.length;s<u;s++){const f=i[s];pi.setFromBufferAttribute(f),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dm);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(e){const s=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];hl.setFromBufferAttribute(h),this.morphTargetsRelative?(An.addVectors(pi.min,hl.min),pi.expandByPoint(An),An.addVectors(pi.max,hl.max),pi.expandByPoint(An)):(pi.expandByPoint(hl.min),pi.expandByPoint(hl.max))}pi.getCenter(s);let u=0;for(let f=0,d=e.count;f<d;f++)An.fromBufferAttribute(e,f),u=Math.max(u,s.distanceToSquared(An));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],p=this.morphTargetsRelative;for(let m=0,S=h.count;m<S;m++)An.fromBufferAttribute(h,m),p&&(Js.fromBufferAttribute(e,m),An.add(Js)),u=Math.max(u,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,u=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Ia(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],p=[];for(let E=0;E<s.count;E++)h[E]=new tt,p[E]=new tt;const m=new tt,S=new tt,_=new tt,v=new Ae,T=new Ae,R=new Ae,P=new tt,M=new tt;function x(E,L,w){m.fromBufferAttribute(s,E),S.fromBufferAttribute(s,L),_.fromBufferAttribute(s,w),v.fromBufferAttribute(f,E),T.fromBufferAttribute(f,L),R.fromBufferAttribute(f,w),S.sub(m),_.sub(m),T.sub(v),R.sub(v);const O=1/(T.x*R.y-R.x*T.y);isFinite(O)&&(P.copy(S).multiplyScalar(R.y).addScaledVector(_,-T.y).multiplyScalar(O),M.copy(_).multiplyScalar(T.x).addScaledVector(S,-R.x).multiplyScalar(O),h[E].add(P),h[L].add(P),h[w].add(P),p[E].add(M),p[L].add(M),p[w].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let E=0,L=D.length;E<L;++E){const w=D[E],O=w.start,B=w.count;for(let q=O,V=O+B;q<V;q+=3)x(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const G=new tt,C=new tt,U=new tt,N=new tt;function z(E){U.fromBufferAttribute(u,E),N.copy(U);const L=h[E];G.copy(L),G.sub(U.multiplyScalar(U.dot(L))).normalize(),C.crossVectors(N,L);const O=C.dot(p[E])<0?-1:1;d.setXYZW(E,G.x,G.y,G.z,O)}for(let E=0,L=D.length;E<L;++E){const w=D[E],O=w.start,B=w.count;for(let q=O,V=O+B;q<V;q+=3)z(e.getX(q+0)),z(e.getX(q+1)),z(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Ia(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,T=s.count;v<T;v++)s.setXYZ(v,0,0,0);const u=new tt,f=new tt,d=new tt,h=new tt,p=new tt,m=new tt,S=new tt,_=new tt;if(e)for(let v=0,T=e.count;v<T;v+=3){const R=e.getX(v+0),P=e.getX(v+1),M=e.getX(v+2);u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,P),d.fromBufferAttribute(i,M),S.subVectors(d,f),_.subVectors(u,f),S.cross(_),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,P),m.fromBufferAttribute(s,M),h.add(S),p.add(S),m.add(S),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(P,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,T=i.count;v<T;v+=3)u.fromBufferAttribute(i,v+0),f.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),S.subVectors(d,f),_.subVectors(u,f),S.cross(_),s.setXYZ(v+0,S.x,S.y,S.z),s.setXYZ(v+1,S.x,S.y,S.z),s.setXYZ(v+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)An.fromBufferAttribute(e,i),An.normalize(),e.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function e(h,p){const m=h.array,S=h.itemSize,_=h.normalized,v=new m.constructor(p.length*S);let T=0,R=0;for(let P=0,M=p.length;P<M;P++){h.isInterleavedBufferAttribute?T=p[P]*h.data.stride+h.offset:T=p[P]*S;for(let x=0;x<S;x++)v[R++]=m[T++]}return new Ia(v,S,_)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new wi,s=this.index.array,u=this.attributes;for(const h in u){const p=u[h],m=e(p,s);i.setAttribute(h,m)}const f=this.morphAttributes;for(const h in f){const p=[],m=f[h];for(let S=0,_=m.length;S<_;S++){const v=m[S],T=e(v,s);p.push(T)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const u={};let f=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],S=[];for(let _=0,v=m.length;_<v;_++){const T=m[_];S.push(T.toJSON(e.data))}S.length>0&&(u[p]=S,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const u=e.attributes;for(const m in u){const S=u[m];this.setAttribute(m,S.clone(i))}const f=e.morphAttributes;for(const m in f){const S=[],_=f[m];for(let v=0,T=_.length;v<T;v++)S.push(_[v].clone(i));this.morphAttributes[m]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,S=d.length;m<S;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vh=new tt,kT=new tt,qT=new me;class Sr{constructor(e=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,u){return this.normal.set(e,i,s),this.constant=u,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const u=Vh.subVectors(s,i).cross(kT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const u=e.delta(Vh),f=this.normal.dot(u);if(f===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/f;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(u,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||qT.getNormalMatrix(e),u=this.coplanarPoint(Vh).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let WT=0;class Rl extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WT++}),this.uuid=bl(),this.name="",this.type="Material",this.blending=vl,this.side=la,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fx,this.blendDst=dx,this.blendEquation=eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=xl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mT,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yh,this.stencilZFail=yh,this.stencilZPass=yh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){fe(`Material: parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){fe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector2&&s&&s.isVector2||u&&u.isEuler&&s&&s.isEuler||u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const d=[];for(const h in f){const p=f[h];delete p.metadata,d.push(p)}return d}if(i){const f=u(e.textures),d=u(e.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new Sr().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Ae().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const u=i.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Na=new tt,Xh=new tt,lc=new tt,uc=new tt;class YT{constructor(e=new tt,i=new tt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Na)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Na.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Na.copy(this.origin).addScaledVector(this.direction,i),Na.distanceToSquared(e))}distanceSqToSegment(e,i,s,u){Xh.copy(e).add(i).multiplyScalar(.5),lc.copy(i).sub(e).normalize(),uc.copy(this.origin).sub(Xh);const f=e.distanceTo(i)*.5,d=-this.direction.dot(lc),h=uc.dot(this.direction),p=-uc.dot(lc),m=uc.lengthSq(),S=Math.abs(1-d*d);let _,v,T,R;if(S>0)if(_=d*p-h,v=d*h-p,R=f*S,_>=0)if(v>=-R)if(v<=R){const P=1/S;_*=P,v*=P,T=_*(_+d*v+2*h)+v*(d*_+v+2*p)+m}else v=f,_=Math.max(0,-(d*v+h)),T=-_*_+v*(v+2*p)+m;else v=-f,_=Math.max(0,-(d*v+h)),T=-_*_+v*(v+2*p)+m;else v<=-R?(_=Math.max(0,-(-d*f+h)),v=_>0?-f:Math.min(Math.max(-f,-p),f),T=-_*_+v*(v+2*p)+m):v<=R?(_=0,v=Math.min(Math.max(-f,-p),f),T=v*(v+2*p)+m):(_=Math.max(0,-(d*f+h)),v=_>0?f:Math.min(Math.max(-f,-p),f),T=-_*_+v*(v+2*p)+m);else v=d>0?-f:f,_=Math.max(0,-(d*v+h)),T=-_*_+v*(v+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),u&&u.copy(Xh).addScaledVector(lc,v),T}intersectSphere(e,i){if(e.radius<0)return null;Na.subVectors(e.center,this.origin);const s=Na.dot(this.direction),u=Na.dot(Na)-s*s,f=e.radius*e.radius;if(u>f)return null;const d=Math.sqrt(f-u),h=s-d,p=s+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,u,f,d,h,p;const m=1/this.direction.x,S=1/this.direction.y,_=1/this.direction.z,v=this.origin;return m>=0?(s=(e.min.x-v.x)*m,u=(e.max.x-v.x)*m):(s=(e.max.x-v.x)*m,u=(e.min.x-v.x)*m),S>=0?(f=(e.min.y-v.y)*S,d=(e.max.y-v.y)*S):(f=(e.max.y-v.y)*S,d=(e.min.y-v.y)*S),s>d||f>u||((f>s||isNaN(s))&&(s=f),(d<u||isNaN(u))&&(u=d),_>=0?(h=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),s>p||h>u)||((h>s||s!==s)&&(s=h),(p<u||u!==u)&&(u=p),u<0)?null:this.at(s>=0?s:u,i)}intersectsBox(e){return this.intersectBox(e,Na)!==null}intersectTriangle(e,i,s,u,f){const d=this.origin,h=this.direction,p=h.x,m=h.y,S=h.z,_=e.x-d.x,v=e.y-d.y,T=e.z-d.z,R=i.x-d.x,P=i.y-d.y,M=i.z-d.z,x=s.x-d.x,D=s.y-d.y,G=s.z-d.z,C=Math.abs(p),U=Math.abs(m),N=Math.abs(S);let z,E,L,w,O,B,q,V,Q,k,W,nt;if(C>=U&&C>=N?(L=p,B=_,Q=R,nt=x,p>=0?(z=m,E=S,w=v,O=T,q=P,V=M,k=D,W=G):(z=S,E=m,w=T,O=v,q=M,V=P,k=G,W=D)):U>=N?(L=m,B=v,Q=P,nt=D,m>=0?(z=S,E=p,w=T,O=_,q=M,V=R,k=G,W=x):(z=p,E=S,w=_,O=T,q=R,V=M,k=x,W=G)):(L=S,B=T,Q=M,nt=G,S>=0?(z=p,E=m,w=_,O=v,q=R,V=P,k=x,W=D):(z=m,E=p,w=v,O=_,q=P,V=R,k=D,W=x)),L===0)return null;const at=z/L,ht=E/L,St=1/L,kt=w-at*B,Ut=O-ht*B,H=q-at*Q,mt=V-ht*Q,Tt=k-at*nt,X=W-ht*nt,ot=Tt*mt-X*H,Et=kt*X-Ut*Tt,Ct=H*Ut-mt*kt;if(u){if(ot<0||Et<0||Ct<0)return null}else if((ot<0||Et<0||Ct<0)&&(ot>0||Et>0||Ct>0))return null;const pt=ot+Et+Ct;if(pt===0)return null;const At=St*(ot*B+Et*Q+Ct*nt);return(pt>0?At<0:At>0)?null:this.at(At/pt,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Cl extends Rl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=hx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const oS=new en,Wr=new YT,cc=new dm,lS=new tt,fc=new tt,dc=new tt,hc=new tt,kh=new tt,pc=new tt,uS=new tt,mc=new tt;class Zn extends On{constructor(e=new wi,i=new Cl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const u=i[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=u.length;f<d;f++){const h=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,i){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(u,e);const h=this.morphTargetInfluences;if(f&&h){pc.set(0,0,0);for(let p=0,m=f.length;p<m;p++){const S=h[p],_=f[p];S!==0&&(kh.fromBufferAttribute(_,e),d?pc.addScaledVector(kh,S):pc.addScaledVector(kh.sub(i),S))}i.add(pc)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),cc.copy(s.boundingSphere),cc.applyMatrix4(f),Wr.copy(e.ray).recast(e.near),!(cc.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(cc,lS)===null||Wr.origin.distanceToSquared(lS)>(e.far-e.near)**2))&&(oS.copy(f).invert(),Wr.copy(e.ray).applyMatrix4(oS),!(s.boundingBox!==null&&Wr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Wr)))}_computeIntersections(e,i,s){let u;const f=this.geometry,d=this.material,h=f.index,p=f.attributes.position,m=f.attributes.uv,S=f.attributes.uv1,_=f.attributes.normal,v=f.groups,T=f.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,P=v.length;R<P;R++){const M=v[R],x=d[M.materialIndex],D=Math.max(M.start,T.start),G=Math.min(h.count,Math.min(M.start+M.count,T.start+T.count));for(let C=D,U=G;C<U;C+=3){const N=h.getX(C),z=h.getX(C+1),E=h.getX(C+2);u=gc(this,x,e,s,m,S,_,N,z,E),u&&(u.faceIndex=Math.floor(C/3),u.face.materialIndex=M.materialIndex,i.push(u))}}else{const R=Math.max(0,T.start),P=Math.min(h.count,T.start+T.count);for(let M=R,x=P;M<x;M+=3){const D=h.getX(M),G=h.getX(M+1),C=h.getX(M+2);u=gc(this,d,e,s,m,S,_,D,G,C),u&&(u.faceIndex=Math.floor(M/3),i.push(u))}}else if(p!==void 0)if(Array.isArray(d))for(let R=0,P=v.length;R<P;R++){const M=v[R],x=d[M.materialIndex],D=Math.max(M.start,T.start),G=Math.min(p.count,Math.min(M.start+M.count,T.start+T.count));for(let C=D,U=G;C<U;C+=3){const N=C,z=C+1,E=C+2;u=gc(this,x,e,s,m,S,_,N,z,E),u&&(u.faceIndex=Math.floor(C/3),u.face.materialIndex=M.materialIndex,i.push(u))}}else{const R=Math.max(0,T.start),P=Math.min(p.count,T.start+T.count);for(let M=R,x=P;M<x;M+=3){const D=M,G=M+1,C=M+2;u=gc(this,d,e,s,m,S,_,D,G,C),u&&(u.faceIndex=Math.floor(M/3),i.push(u))}}}}function ZT(o,e,i,s,u,f,d,h){let p;if(e.side===ni?p=s.intersectTriangle(d,f,u,!0,h):p=s.intersectTriangle(u,f,d,e.side===la,h),p===null)return null;mc.copy(h),mc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(mc);return m<i.near||m>i.far?null:{distance:m,point:mc.clone(),object:o}}function gc(o,e,i,s,u,f,d,h,p,m){o.getVertexPosition(h,fc),o.getVertexPosition(p,dc),o.getVertexPosition(m,hc);const S=ZT(o,e,i,s,fc,dc,hc,uS);if(S){const _=new tt;Fi.getBarycoord(uS,fc,dc,hc,_),u&&(S.uv=Fi.getInterpolatedAttribute(u,h,p,m,_,new Ae)),f&&(S.uv1=Fi.getInterpolatedAttribute(f,h,p,m,_,new Ae)),d&&(S.normal=Fi.getInterpolatedAttribute(d,h,p,m,_,new tt),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new tt,materialIndex:0};Fi.getNormal(fc,dc,hc,v.normal),S.face=v,S.barycoord=_}return S}class KT extends Fn{constructor(e=null,i=1,s=1,u,f,d,h,p,m=Ln,S=Ln,_,v){super(null,d,h,p,m,S,u,f,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yr=new dm,QT=new Ae(.5,.5),_c=new tt;class hm{constructor(e=new Sr,i=new Sr,s=new Sr,u=new Sr,f=new Sr,d=new Sr){this.planes=[e,i,s,u,f,d]}set(e,i,s,u,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(u),h[4].copy(f),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=sa,s=!1){const u=this.planes,f=e.elements,d=f[0],h=f[1],p=f[2],m=f[3],S=f[4],_=f[5],v=f[6],T=f[7],R=f[8],P=f[9],M=f[10],x=f[11],D=f[12],G=f[13],C=f[14],U=f[15];if(u[0].setComponents(m-d,T-S,x-R,U-D).normalize(),u[1].setComponents(m+d,T+S,x+R,U+D).normalize(),u[2].setComponents(m+h,T+_,x+P,U+G).normalize(),u[3].setComponents(m-h,T-_,x-P,U-G).normalize(),s)u[4].setComponents(p,v,M,C).normalize(),u[5].setComponents(m-p,T-v,x-M,U-C).normalize();else if(u[4].setComponents(m-p,T-v,x-M,U-C).normalize(),i===sa)u[5].setComponents(m+p,T+v,x+M,U+C).normalize();else if(i===El)u[5].setComponents(p,v,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const i=QT.distanceTo(e.center);return Yr.radius=.7071067811865476+i,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const i=this.planes,s=e.center,u=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const u=i[s];if(_c.x=u.normal.x>0?e.max.x:e.min.x,_c.y=u.normal.y>0?e.max.y:e.min.y,_c.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(_c)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Px extends Fn{constructor(e=[],i=Jr,s,u,f,d,h,p,m,S){super(e,i,s,u,f,d,h,p,m,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pm extends Fn{constructor(e,i,s,u,f,d,h,p,m){super(e,i,s,u,f,d,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tl extends Fn{constructor(e,i,s=ua,u,f,d,h=Ln,p=Ln,m,S=Ba,_=1){if(S!==Ba&&S!==Qr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,u,f,d,h,p,S,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class JT extends Tl{constructor(e,i=ua,s=Jr,u,f,d=Ln,h=Ln,p,m=Ba){const S={width:e,height:e,depth:1},_=[S,S,S,S,S,S];super(e,e,i,s,u,f,d,h,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ix extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wl extends wi{constructor(e=1,i=1,s=1,u=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:u,heightSegments:f,depthSegments:d};const h=this;u=Math.floor(u),f=Math.floor(f),d=Math.floor(d);const p=[],m=[],S=[],_=[];let v=0,T=0;R("z","y","x",-1,-1,s,i,e,d,f,0),R("z","y","x",1,-1,s,i,-e,d,f,1),R("x","z","y",1,1,e,s,i,u,d,2),R("x","z","y",1,-1,e,s,-i,u,d,3),R("x","y","z",1,-1,e,i,s,u,f,4),R("x","y","z",-1,-1,e,i,-s,u,f,5),this.setIndex(p),this.setAttribute("position",new Hn(m,3)),this.setAttribute("normal",new Hn(S,3)),this.setAttribute("uv",new Hn(_,2));function R(P,M,x,D,G,C,U,N,z,E,L){const w=C/z,O=U/E,B=C/2,q=U/2,V=N/2,Q=z+1,k=E+1;let W=0,nt=0;const at=new tt;for(let ht=0;ht<k;ht++){const St=ht*O-q;for(let kt=0;kt<Q;kt++){const Ut=kt*w-B;at[P]=Ut*D,at[M]=St*G,at[x]=V,m.push(at.x,at.y,at.z),at[P]=0,at[M]=0,at[x]=N>0?1:-1,S.push(at.x,at.y,at.z),_.push(kt/z),_.push(1-ht/E),W+=1}}for(let ht=0;ht<E;ht++)for(let St=0;St<z;St++){const kt=v+St+Q*ht,Ut=v+St+Q*(ht+1),H=v+(St+1)+Q*(ht+1),mt=v+(St+1)+Q*ht;p.push(kt,Ut,mt),p.push(Ut,H,mt),nt+=6}h.addGroup(T,nt,L),T+=nt,v+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class mm extends wi{constructor(e=[],i=[],s=1,u=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:u};const f=[],d=[];h(u),m(s),S(),this.setAttribute("position",new Hn(f,3)),this.setAttribute("normal",new Hn(f.slice(),3)),this.setAttribute("uv",new Hn(d,2)),u===0?this.computeVertexNormals():this.normalizeNormals();function h(D){const G=new tt,C=new tt,U=new tt;for(let N=0;N<i.length;N+=3)T(i[N+0],G),T(i[N+1],C),T(i[N+2],U),p(G,C,U,D)}function p(D,G,C,U){const N=U+1,z=[];for(let E=0;E<=N;E++){z[E]=[];const L=D.clone().lerp(C,E/N),w=G.clone().lerp(C,E/N),O=N-E;for(let B=0;B<=O;B++)B===0&&E===N?z[E][B]=L:z[E][B]=L.clone().lerp(w,B/O)}for(let E=0;E<N;E++)for(let L=0;L<2*(N-E)-1;L++){const w=Math.floor(L/2);L%2===0?(v(z[E][w+1]),v(z[E+1][w]),v(z[E][w])):(v(z[E][w+1]),v(z[E+1][w+1]),v(z[E+1][w]))}}function m(D){const G=new tt;for(let C=0;C<f.length;C+=3)G.x=f[C+0],G.y=f[C+1],G.z=f[C+2],G.normalize().multiplyScalar(D),f[C+0]=G.x,f[C+1]=G.y,f[C+2]=G.z}function S(){const D=new tt;for(let G=0;G<f.length;G+=3){D.x=f[G+0],D.y=f[G+1],D.z=f[G+2];const C=M(D)/2/Math.PI+.5,U=x(D)/Math.PI+.5;d.push(C,1-U)}R(),_()}function _(){for(let D=0;D<d.length;D+=6){const G=d[D+0],C=d[D+2],U=d[D+4],N=Math.max(G,C,U),z=Math.min(G,C,U);N>.9&&z<.1&&(G<.2&&(d[D+0]+=1),C<.2&&(d[D+2]+=1),U<.2&&(d[D+4]+=1))}}function v(D){f.push(D.x,D.y,D.z)}function T(D,G){const C=D*3;G.x=e[C+0],G.y=e[C+1],G.z=e[C+2]}function R(){const D=new tt,G=new tt,C=new tt,U=new tt,N=new Ae,z=new Ae,E=new Ae;for(let L=0,w=0;L<f.length;L+=9,w+=6){D.set(f[L+0],f[L+1],f[L+2]),G.set(f[L+3],f[L+4],f[L+5]),C.set(f[L+6],f[L+7],f[L+8]),N.set(d[w+0],d[w+1]),z.set(d[w+2],d[w+3]),E.set(d[w+4],d[w+5]),U.copy(D).add(G).add(C).divideScalar(3);const O=M(U);P(N,w+0,D,O),P(z,w+2,G,O),P(E,w+4,C,O)}}function P(D,G,C,U){U<0&&D.x===1&&(d[G]=D.x-1),C.x===0&&C.z===0&&(d[G]=U/2/Math.PI+.5)}function M(D){return Math.atan2(D.z,-D.x)}function x(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mm(e.vertices,e.indices,e.radius,e.detail)}}class gm extends mm{constructor(e=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],u=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,u,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new gm(e.radius,e.detail)}}class ts extends wi{constructor(e=1,i=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:u};const f=e/2,d=i/2,h=Math.floor(s),p=Math.floor(u),m=h+1,S=p+1,_=e/h,v=i/p,T=[],R=[],P=[],M=[];for(let x=0;x<S;x++){const D=x*v-d;for(let G=0;G<m;G++){const C=G*_-f;R.push(C,-D,0),P.push(0,0,1),M.push(G/h),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let D=0;D<h;D++){const G=D+m*x,C=D+m*(x+1),U=D+1+m*(x+1),N=D+1+m*x;T.push(G,C,N),T.push(C,U,N)}this.setIndex(T),this.setAttribute("position",new Hn(R,3)),this.setAttribute("normal",new Hn(P,3)),this.setAttribute("uv",new Hn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.width,e.height,e.widthSegments,e.heightSegments)}}function co(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const u=o[i][s];if(cS(u))u.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=u.clone();else if(Array.isArray(u))if(cS(u[0])){const f=[];for(let d=0,h=u.length;d<h;d++)f[d]=u[d].clone();e[i][s]=f}else e[i][s]=u.slice();else e[i][s]=u}}return e}function Wn(o){const e={};for(let i=0;i<o.length;i++){const s=co(o[i]);for(const u in s)e[u]=s[u]}return e}function cS(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function jT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function zx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Le.workingColorSpace}const $T={clone:co,merge:Wn};var t1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fa extends Rl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t1,this.fragmentShader=e1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=jT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const u in this.uniforms){const d=this.uniforms[u].value;d&&d.isTexture?i.uniforms[u]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[u]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[u]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[u]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[u]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[u]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[u]={type:"m4",value:d.toArray()}:i.uniforms[u]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const u=e.uniforms[s];switch(this.uniforms[s]={},u.type){case"t":this.uniforms[s].value=i[u.value]||null;break;case"c":this.uniforms[s].value=new ze().setHex(u.value);break;case"v2":this.uniforms[s].value=new Ae().fromArray(u.value);break;case"v3":this.uniforms[s].value=new tt().fromArray(u.value);break;case"v4":this.uniforms[s].value=new on().fromArray(u.value);break;case"m3":this.uniforms[s].value=new me().fromArray(u.value);break;case"m4":this.uniforms[s].value=new en().fromArray(u.value);break;default:this.uniforms[s].value=u.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class n1 extends fa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _m extends Rl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fp,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class i1 extends Rl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a1 extends Rl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class vm extends On{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=i}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class Sm extends vm{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const qh=new en,fS=new tt,dS=new tt;class r1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hm,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera;fS.setFromMatrixPosition(e.matrixWorld),i.position.copy(fS),dS.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(dS),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(e,i,s,u){qh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s.setFromProjectionMatrix(qh,e.coordinateSystem,e.reversedDepth);const f=this._frameExtents,d=u?u.z/f.x:1,h=u?u.w/f.y:1,p=u?u.x/f.x:0,m=u?u.y/f.y:0;e.coordinateSystem===El||e.reversedDepth?i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,1,0,0,0,0,1):i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,.5,.5,0,0,0,1),i.multiply(qh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vc=new tt,Sc=new vn,na=new tt;class Bx extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vc,Sc,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vc,Sc,na.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(vc,Sc,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vc,Sc,na.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _r=new tt,hS=new Ae,pS=new Ae;class ei extends Bx{constructor(e=50,i=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Hp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hp*2*Math.atan(Math.tan(Eh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,i){return this.getViewBounds(e,hS,pS),i.subVectors(pS,hS)}setViewOffset(e,i,s,u,f,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Eh*.5*this.fov)/this.zoom,s=2*i,u=this.aspect*s,f=-.5*u;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;f+=d.offsetX*u/p,i-=d.offsetY*s/m,u*=d.width/p,s*=d.height/m}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class xm extends Bx{constructor(e=-1,i=1,s=1,u=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=u,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,u,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-e,d=s+e,h=u+i,p=u-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,d=f+m*this.view.width,h-=S*this.view.offsetY,p=h-S*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class s1 extends r1{constructor(){super(new xm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mm extends vm{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new s1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class ym extends vm{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const js=-90,$s=1;class o1 extends On{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new ei(js,$s,e,i);u.layers=this.layers,this.add(u);const f=new ei(js,$s,e,i);f.layers=this.layers,this.add(f);const d=new ei(js,$s,e,i);d.layers=this.layers,this.add(d);const h=new ei(js,$s,e,i);h.layers=this.layers,this.add(h);const p=new ei(js,$s,e,i);p.layers=this.layers,this.add(p);const m=new ei(js,$s,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,u,f,d,h,p]=i;for(const m of i)this.remove(m);if(e===sa)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===El)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,p,m,S]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),T=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const P=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,1,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,4,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),s.texture.generateMipmaps=P,e.setRenderTarget(s,5,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(_,v,T),e.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class l1 extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const wm=class wm{constructor(e,i,s,u){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,u)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,u){const f=this.elements;return f[0]=e,f[2]=i,f[1]=s,f[3]=u,this}};wm.prototype.isMatrix2=!0;let mS=wm;function gS(o,e,i,s){const u=u1(s);switch(i){case Ax:return o*e;case Cx:return o*e/u.components*u.byteLength;case rm:return o*e/u.components*u.byteLength;case jr:return o*e*2/u.components*u.byteLength;case sm:return o*e*2/u.components*u.byteLength;case Rx:return o*e*3/u.components*u.byteLength;case Hi:return o*e*4/u.components*u.byteLength;case om:return o*e*4/u.components*u.byteLength;case Tc:case bc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ac:case Rc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case cp:case dp:return Math.max(o,16)*Math.max(e,8)/4;case up:case fp:return Math.max(o,8)*Math.max(e,8)/2;case hp:case pp:case gp:case _p:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case mp:case wc:case vp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Sp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Mp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case yp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Tp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case bp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ap:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Rp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case wp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Dp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Np:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Up:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Lp:case Op:case Pp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ip:case zp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Dc:case Bp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function u1(o){switch(o){case mi:case yx:return{byteLength:1,components:1};case Ml:case Ex:case ca:return{byteLength:2,components:1};case im:case am:return{byteLength:2,components:4};case ua:case nm:case ra:return{byteLength:4,components:1};case Tx:case bx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:em}}));typeof window<"u"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=em);function Fx(){let o=null,e=!1,i=null,s=null;function u(f,d){s=o.requestAnimationFrame(u),i(f,d)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(u),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function c1(o){const e=new WeakMap;function i(h,p){const m=h.array,S=h.usage,_=m.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,m,S),h.onUploadCallback();let T;if(m instanceof Float32Array)T=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)T=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?T=o.HALF_FLOAT:T=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)T=o.SHORT;else if(m instanceof Uint32Array)T=o.UNSIGNED_INT;else if(m instanceof Int32Array)T=o.INT;else if(m instanceof Int8Array)T=o.BYTE;else if(m instanceof Uint8Array)T=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)T=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:T,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,p,m){const S=p.array,_=p.updateRanges;if(o.bindBuffer(m,h),_.length===0)o.bufferSubData(m,0,S);else{_.sort((T,R)=>T.start-R.start);let v=0;for(let T=1;T<_.length;T++){const R=_[v],P=_[T];P.start<=R.start+R.count+1?R.count=Math.max(R.count,P.start+P.count-R.start):(++v,_[v]=P)}_.length=v+1;for(let T=0,R=_.length;T<R;T++){const P=_[T];o.bufferSubData(m,P.start*S.BYTES_PER_ELEMENT,S,P.start,P.count)}p.clearUpdateRanges()}p.onUploadCallback()}function u(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=e.get(h);(!S||S.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:u,remove:f,update:d}}var f1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d1=`#ifdef USE_ALPHAHASH
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
#endif`,h1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_1=`#ifdef USE_AOMAP
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
#endif`,v1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S1=`#ifdef USE_BATCHING
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
#endif`,x1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T1=`#ifdef USE_IRIDESCENCE
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
#endif`,b1=`#ifdef USE_BUMPMAP
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
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,N1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,U1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,L1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,O1=`#define PI 3.141592653589793
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
} // validated`,P1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,I1=`vec3 transformedNormal = objectNormal;
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
#endif`,z1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G1="gl_FragColor = linearToOutputTexel( gl_FragColor );",V1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X1=`#ifdef USE_ENVMAP
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
#endif`,k1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
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
#endif`,W1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y1=`#ifdef USE_ENVMAP
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
#endif`,Z1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j1=`#ifdef USE_GRADIENTMAP
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
}`,$1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ib=`#ifdef USE_ENVMAP
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
#endif`,ab=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lb=`PhysicalMaterial material;
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
#endif`,ub=`uniform sampler2D dfgLUT;
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
}`,cb=`
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
#endif`,fb=`#if defined( RE_IndirectDiffuse )
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
#endif`,db=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,pb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mb=`#if defined( USE_POINTS_UV )
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
#endif`,yb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ab=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rb=`#ifdef USE_MORPHTARGETS
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
#endif`,Cb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Db=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ob=`#ifdef USE_NORMALMAP
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
#endif`,Pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ib=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qb=`float getShadowMask() {
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
}`,Jb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jb=`#ifdef USE_SKINNING
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
#endif`,$b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tA=`#ifdef USE_SKINNING
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
#endif`,eA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rA=`#ifdef USE_TRANSMISSION
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
#endif`,sA=`#ifdef USE_TRANSMISSION
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
#endif`,oA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dA=`uniform sampler2D t2D;
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
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_A=`#include <common>
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
}`,vA=`#if DEPTH_PACKING == 3200
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
}`,SA=`#define DISTANCE
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
}`,xA=`#define DISTANCE
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
}`,MA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EA=`uniform float scale;
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
}`,TA=`uniform vec3 diffuse;
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
}`,bA=`#include <common>
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
}`,AA=`uniform vec3 diffuse;
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
}`,RA=`#define LAMBERT
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
}`,CA=`#define LAMBERT
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
}`,wA=`#define MATCAP
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
}`,DA=`#define MATCAP
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
}`,NA=`#define NORMAL
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
}`,UA=`#define NORMAL
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
}`,LA=`#define PHONG
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
}`,OA=`#define PHONG
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
}`,PA=`#define STANDARD
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
}`,IA=`#define STANDARD
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
}`,zA=`#define TOON
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
}`,BA=`#define TOON
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
}`,FA=`uniform float size;
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
}`,HA=`uniform vec3 diffuse;
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
}`,GA=`#include <common>
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
}`,VA=`uniform vec3 color;
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
}`,XA=`uniform float rotation;
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
}`,kA=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:f1,alphahash_pars_fragment:d1,alphamap_fragment:h1,alphamap_pars_fragment:p1,alphatest_fragment:m1,alphatest_pars_fragment:g1,aomap_fragment:_1,aomap_pars_fragment:v1,batching_pars_vertex:S1,batching_vertex:x1,begin_vertex:M1,beginnormal_vertex:y1,bsdfs:E1,iridescence_fragment:T1,bumpmap_pars_fragment:b1,clipping_planes_fragment:A1,clipping_planes_pars_fragment:R1,clipping_planes_pars_vertex:C1,clipping_planes_vertex:w1,color_fragment:D1,color_pars_fragment:N1,color_pars_vertex:U1,color_vertex:L1,common:O1,cube_uv_reflection_fragment:P1,defaultnormal_vertex:I1,displacementmap_pars_vertex:z1,displacementmap_vertex:B1,emissivemap_fragment:F1,emissivemap_pars_fragment:H1,colorspace_fragment:G1,colorspace_pars_fragment:V1,envmap_fragment:X1,envmap_common_pars_fragment:k1,envmap_pars_fragment:q1,envmap_pars_vertex:W1,envmap_physical_pars_fragment:ib,envmap_vertex:Y1,fog_vertex:Z1,fog_pars_vertex:K1,fog_fragment:Q1,fog_pars_fragment:J1,gradientmap_pars_fragment:j1,lightmap_pars_fragment:$1,lights_lambert_fragment:tb,lights_lambert_pars_fragment:eb,lights_pars_begin:nb,lights_toon_fragment:ab,lights_toon_pars_fragment:rb,lights_phong_fragment:sb,lights_phong_pars_fragment:ob,lights_physical_fragment:lb,lights_physical_pars_fragment:ub,lights_fragment_begin:cb,lights_fragment_maps:fb,lights_fragment_end:db,lightprobes_pars_fragment:hb,logdepthbuf_fragment:pb,logdepthbuf_pars_fragment:mb,logdepthbuf_pars_vertex:gb,logdepthbuf_vertex:_b,map_fragment:vb,map_pars_fragment:Sb,map_particle_fragment:xb,map_particle_pars_fragment:Mb,metalnessmap_fragment:yb,metalnessmap_pars_fragment:Eb,morphinstance_vertex:Tb,morphcolor_vertex:bb,morphnormal_vertex:Ab,morphtarget_pars_vertex:Rb,morphtarget_vertex:Cb,normal_fragment_begin:wb,normal_fragment_maps:Db,normal_pars_fragment:Nb,normal_pars_vertex:Ub,normal_vertex:Lb,normalmap_pars_fragment:Ob,clearcoat_normal_fragment_begin:Pb,clearcoat_normal_fragment_maps:Ib,clearcoat_pars_fragment:zb,iridescence_pars_fragment:Bb,opaque_fragment:Fb,packing:Hb,premultiplied_alpha_fragment:Gb,project_vertex:Vb,dithering_fragment:Xb,dithering_pars_fragment:kb,roughnessmap_fragment:qb,roughnessmap_pars_fragment:Wb,shadowmap_pars_fragment:Yb,shadowmap_pars_vertex:Zb,shadowmap_vertex:Kb,shadowmask_pars_fragment:Qb,skinbase_vertex:Jb,skinning_pars_vertex:jb,skinning_vertex:$b,skinnormal_vertex:tA,specularmap_fragment:eA,specularmap_pars_fragment:nA,tonemapping_fragment:iA,tonemapping_pars_fragment:aA,transmission_fragment:rA,transmission_pars_fragment:sA,uv_pars_fragment:oA,uv_pars_vertex:lA,uv_vertex:uA,worldpos_vertex:cA,background_vert:fA,background_frag:dA,backgroundCube_vert:hA,backgroundCube_frag:pA,cube_vert:mA,cube_frag:gA,depth_vert:_A,depth_frag:vA,distance_vert:SA,distance_frag:xA,equirect_vert:MA,equirect_frag:yA,linedashed_vert:EA,linedashed_frag:TA,meshbasic_vert:bA,meshbasic_frag:AA,meshlambert_vert:RA,meshlambert_frag:CA,meshmatcap_vert:wA,meshmatcap_frag:DA,meshnormal_vert:NA,meshnormal_frag:UA,meshphong_vert:LA,meshphong_frag:OA,meshphysical_vert:PA,meshphysical_frag:IA,meshtoon_vert:zA,meshtoon_frag:BA,points_vert:FA,points_frag:HA,shadow_vert:GA,shadow_frag:VA,sprite_vert:XA,sprite_frag:kA},Gt={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new tt},probesMax:{value:new tt},probesResolution:{value:new tt}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},aa={basic:{uniforms:Wn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Wn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Wn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Wn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Wn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new ze(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Wn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Wn([Gt.points,Gt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Wn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Wn([Gt.common,Gt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Wn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Wn([Gt.sprite,Gt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:Wn([Gt.common,Gt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:Wn([Gt.lights,Gt.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};aa.physical={uniforms:Wn([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const xc={r:0,b:0,g:0},qA=new en,Hx=new me;Hx.set(-1,0,0,0,1,0,0,0,1);function WA(o,e,i,s,u,f){const d=new ze(0);let h=u===!0?0:1,p,m,S=null,_=0,v=null;function T(D){let G=D.isScene===!0?D.background:null;if(G&&G.isTexture){const C=D.backgroundBlurriness>0;G=e.get(G,C)}return G}function R(D){let G=!1;const C=T(D);C===null?M(d,h):C&&C.isColor&&(M(C,1),G=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,f):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||G)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function P(D,G){const C=T(G);C&&(C.isCubeTexture||C.mapping===zc)?(m===void 0&&(m=new Zn(new wl(1,1,1),new fa({name:"BackgroundCubeMaterial",uniforms:co(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,N,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=G.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(qA.makeRotationFromEuler(G.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Hx),m.material.toneMapped=Le.getTransfer(C.colorSpace)!==Ze,(S!==C||_!==C.version||v!==o.toneMapping)&&(m.material.needsUpdate=!0,S=C,_=C.version,v=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new Zn(new ts(2,2),new fa({name:"BackgroundMaterial",uniforms:co(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:la,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,p.material.toneMapped=Le.getTransfer(C.colorSpace)!==Ze,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(S!==C||_!==C.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,S=C,_=C.version,v=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function M(D,G){D.getRGB(xc,zx(o)),i.buffers.color.setClear(xc.r,xc.g,xc.b,G,f)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,G=1){d.set(D),h=G,M(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,M(d,h)},render:R,addToRenderList:P,dispose:x}}function YA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=v(null);let f=u,d=!1;function h(O,B,q,V,Q){let k=!1;const W=_(O,V,q,B);f!==W&&(f=W,m(f.object)),k=T(O,V,q,Q),k&&R(O,V,q,Q),Q!==null&&e.update(Q,o.ELEMENT_ARRAY_BUFFER),(k||d)&&(d=!1,C(O,B,q,V),Q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function p(){return o.createVertexArray()}function m(O){return o.bindVertexArray(O)}function S(O){return o.deleteVertexArray(O)}function _(O,B,q,V){const Q=V.wireframe===!0;let k=s[B.id];k===void 0&&(k={},s[B.id]=k);const W=O.isInstancedMesh===!0?O.id:0;let nt=k[W];nt===void 0&&(nt={},k[W]=nt);let at=nt[q.id];at===void 0&&(at={},nt[q.id]=at);let ht=at[Q];return ht===void 0&&(ht=v(p()),at[Q]=ht),ht}function v(O){const B=[],q=[],V=[];for(let Q=0;Q<i;Q++)B[Q]=0,q[Q]=0,V[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:V,object:O,attributes:{},index:null}}function T(O,B,q,V){const Q=f.attributes,k=B.attributes;let W=0;const nt=q.getAttributes();for(const at in nt)if(nt[at].location>=0){const St=Q[at];let kt=k[at];if(kt===void 0&&(at==="instanceMatrix"&&O.instanceMatrix&&(kt=O.instanceMatrix),at==="instanceColor"&&O.instanceColor&&(kt=O.instanceColor)),St===void 0||St.attribute!==kt||kt&&St.data!==kt.data)return!0;W++}return f.attributesNum!==W||f.index!==V}function R(O,B,q,V){const Q={},k=B.attributes;let W=0;const nt=q.getAttributes();for(const at in nt)if(nt[at].location>=0){let St=k[at];St===void 0&&(at==="instanceMatrix"&&O.instanceMatrix&&(St=O.instanceMatrix),at==="instanceColor"&&O.instanceColor&&(St=O.instanceColor));const kt={};kt.attribute=St,St&&St.data&&(kt.data=St.data),Q[at]=kt,W++}f.attributes=Q,f.attributesNum=W,f.index=V}function P(){const O=f.newAttributes;for(let B=0,q=O.length;B<q;B++)O[B]=0}function M(O){x(O,0)}function x(O,B){const q=f.newAttributes,V=f.enabledAttributes,Q=f.attributeDivisors;q[O]=1,V[O]===0&&(o.enableVertexAttribArray(O),V[O]=1),Q[O]!==B&&(o.vertexAttribDivisor(O,B),Q[O]=B)}function D(){const O=f.newAttributes,B=f.enabledAttributes;for(let q=0,V=B.length;q<V;q++)B[q]!==O[q]&&(o.disableVertexAttribArray(q),B[q]=0)}function G(O,B,q,V,Q,k,W){W===!0?o.vertexAttribIPointer(O,B,q,Q,k):o.vertexAttribPointer(O,B,q,V,Q,k)}function C(O,B,q,V){P();const Q=V.attributes,k=q.getAttributes(),W=B.defaultAttributeValues;for(const nt in k){const at=k[nt];if(at.location>=0){let ht=Q[nt];if(ht===void 0&&(nt==="instanceMatrix"&&O.instanceMatrix&&(ht=O.instanceMatrix),nt==="instanceColor"&&O.instanceColor&&(ht=O.instanceColor)),ht!==void 0){const St=ht.normalized,kt=ht.itemSize,Ut=e.get(ht);if(Ut===void 0)continue;const H=Ut.buffer,mt=Ut.type,Tt=Ut.bytesPerElement,X=mt===o.INT||mt===o.UNSIGNED_INT||ht.gpuType===nm;if(ht.isInterleavedBufferAttribute){const ot=ht.data,Et=ot.stride,Ct=ht.offset;if(ot.isInstancedInterleavedBuffer){for(let pt=0;pt<at.locationSize;pt++)x(at.location+pt,ot.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let pt=0;pt<at.locationSize;pt++)M(at.location+pt);o.bindBuffer(o.ARRAY_BUFFER,H);for(let pt=0;pt<at.locationSize;pt++)G(at.location+pt,kt/at.locationSize,mt,St,Et*Tt,(Ct+kt/at.locationSize*pt)*Tt,X)}else{if(ht.isInstancedBufferAttribute){for(let ot=0;ot<at.locationSize;ot++)x(at.location+ot,ht.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ot=0;ot<at.locationSize;ot++)M(at.location+ot);o.bindBuffer(o.ARRAY_BUFFER,H);for(let ot=0;ot<at.locationSize;ot++)G(at.location+ot,kt/at.locationSize,mt,St,kt*Tt,kt/at.locationSize*ot*Tt,X)}}else if(W!==void 0){const St=W[nt];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(at.location,St);break;case 3:o.vertexAttrib3fv(at.location,St);break;case 4:o.vertexAttrib4fv(at.location,St);break;default:o.vertexAttrib1fv(at.location,St)}}}}D()}function U(){L();for(const O in s){const B=s[O];for(const q in B){const V=B[q];for(const Q in V){const k=V[Q];for(const W in k)S(k[W].object),delete k[W];delete V[Q]}}delete s[O]}}function N(O){if(s[O.id]===void 0)return;const B=s[O.id];for(const q in B){const V=B[q];for(const Q in V){const k=V[Q];for(const W in k)S(k[W].object),delete k[W];delete V[Q]}}delete s[O.id]}function z(O){for(const B in s){const q=s[B];for(const V in q){const Q=q[V];if(Q[O.id]===void 0)continue;const k=Q[O.id];for(const W in k)S(k[W].object),delete k[W];delete Q[O.id]}}}function E(O){for(const B in s){const q=s[B],V=O.isInstancedMesh===!0?O.id:0,Q=q[V];if(Q!==void 0){for(const k in Q){const W=Q[k];for(const nt in W)S(W[nt].object),delete W[nt];delete Q[k]}delete q[V],Object.keys(q).length===0&&delete s[B]}}}function L(){w(),d=!0,f!==u&&(f=u,m(f.object))}function w(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:L,resetDefaultState:w,dispose:U,releaseStatesOfGeometry:N,releaseStatesOfObject:E,releaseStatesOfProgram:z,initAttributes:P,enableAttribute:M,disableUnusedAttributes:D}}function ZA(o,e,i){let s;function u(p){s=p}function f(p,m){o.drawArrays(s,p,m),i.update(m,s,1)}function d(p,m,S){S!==0&&(o.drawArraysInstanced(s,p,m,S),i.update(m,s,S))}function h(p,m,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,S);let v=0;for(let T=0;T<S;T++)v+=m[T];i.update(v,s,1)}this.setMode=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function KA(o,e,i,s){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function d(z){return!(z!==Hi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const E=z===ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==mi&&z!==ra&&!E&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const S=p(m);S!==m&&(fe("WebGLRenderer:",m,"not supported, using",S,"instead."),m=S);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const T=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),G=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=o.getParameter(o.MAX_SAMPLES),N=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:T,maxVertexTextures:R,maxTextureSize:P,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:D,maxVaryings:G,maxFragmentUniforms:C,maxSamples:U,samples:N}}function QA(o){const e=this;let i=null,s=0,u=!1,f=!1;const d=new Sr,h=new me,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const T=_.length!==0||v||s!==0||u;return u=v,s=_.length,T},this.beginShadows=function(){f=!0,S(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(_,v){i=S(_,v,0)},this.setState=function(_,v,T){const R=_.clippingPlanes,P=_.clipIntersection,M=_.clipShadows,x=o.get(_);if(!u||R===null||R.length===0||f&&!M)f?S(null):m();else{const D=f?0:s,G=D*4;let C=x.clippingState||null;p.value=C,C=S(R,v,G,T);for(let U=0;U!==G;++U)C[U]=i[U];x.clippingState=C,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(_,v,T,R){const P=_!==null?_.length:0;let M=null;if(P!==0){if(M=p.value,R!==!0||M===null){const x=T+P*4,D=v.matrixWorldInverse;h.getNormalMatrix(D),(M===null||M.length<x)&&(M=new Float32Array(x));for(let G=0,C=T;G!==P;++G,C+=4)d.copy(_[G]).applyMatrix4(D,h),d.normal.toArray(M,C),M[C+3]=d.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,M}}const no=4,JA=6,jA=20,$A=256,pl=new xm,_S=new ze;let Wh=null,Yh=0,Zh=0,Kh=!1;const tR=new tt,Zr=new tt;class vS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,u=100,f={}){const{size:d=256,position:h=tR}=f;Wh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,u,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=MS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wh,Yh,Zh),this._renderer.xr.enabled=Kh,e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Jr||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ca,format:Hi,colorSpace:Nc,depthBuffer:!1},u=SS(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=SS(e,i,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=eR(f)),this._blurMaterial=iR(f,e,i),this._ggxMaterial=nR(f,e,i)}return u}_compileMaterial(e){const i=new Zn(new wi,e);this._renderer.compile(i,pl)}_sceneToCubeUV(e,i,s,u,f){const p=new ei(90,1,i,s),m=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,T=_.toneMapping;_.getClearColor(_S),_.toneMapping=oa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(u),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zn(new wl,new Cl({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const P=this._backgroundBox,M=P.material;let x=!1;const D=e.background;D?D.isColor&&(M.color.copy(D),e.background=null,x=!0):(M.color.copy(_S),x=!0);for(let G=0;G<6;G++){const C=G%3;C===0?(p.up.set(0,m[G],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x+S[G],f.y,f.z)):C===1?(p.up.set(0,0,m[G]),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y+S[G],f.z)):(p.up.set(0,m[G],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y,f.z+S[G]));const U=this._cubeSize;to(u,C*U,G>2?U:0,U,U),_.setRenderTarget(u),x&&_.render(P,p),_.render(e,p)}_.toneMapping=T,_.autoClear=v,e.background=D}_textureToCubeUV(e,i){const s=this._renderer,u=e.mapping===Jr||e.mapping===uo;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=MS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xS());const f=u?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=e;const p=this._cubeSize;to(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(d,pl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const u=this._lodMeshes.length;for(let f=1;f<u;f++)this._applyGGXFilter(e,f-1,f);i.autoClear=s}_applyGGXFilter(e,i,s){const u=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const p=d.uniforms,m=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),_=Math.sqrt(m*m-S*S),v=m*1.25,T=_*v,{_lodMax:R}=this,P=this._sizeLods[s],M=3*P*(s>R-no?s-R+no:0),x=4*(this._cubeSize-P);p.envMap.value=e.texture,p.roughness.value=T,p.mipInt.value=R-i,to(f,M,x,3*P,2*P),u.setRenderTarget(f),u.render(h,pl),p.envMap.value=f.texture,p.roughness.value=0,p.mipInt.value=R-s,to(e,M,x,3*P,2*P),u.setRenderTarget(e),u.render(h,pl)}_blur(e,i,s,u){const f=this._pingPongRenderTarget,d=Math.min(u,Math.PI)/Math.SQRT2;this._blurPass(e,f,i,s,d),this._blurPass(f,e,s,s,d)}_blurPass(e,i,s,u,f){const d=this._renderer,h=this._blurMaterial,p=this._lodMeshes[u];p.material=h;const m=h.uniforms;m.envMap.value=e.texture,m.sigma.value=f,m.mipInt.value=this._lodMax-s;const S=this._sizeLods[u],_=3*S*(u>this._lodMax-no?u-this._lodMax+no:0),v=4*(this._cubeSize-S);to(i,_,v,3*S,2*S),d.setRenderTarget(i),d.render(p,pl)}}function eR(o){const e=[],i=[];let s=o;const u=o-no+1+JA;for(let f=0;f<u;f++){const d=Math.pow(2,s);e.push(d);const h=1/(d-2),p=-h,m=1+h,S=[p,p,m,p,m,m,p,p,m,m,p,m],_=6,v=6,T=3,R=new Float32Array(T*v*_),P=new Float32Array(T*v*_);for(let x=0;x<_;x++){const D=x%3*2/3-1,G=x>2?0:-1,C=[D,G,0,D+2/3,G,0,D+2/3,G+1,0,D,G,0,D+2/3,G+1,0,D,G+1,0];R.set(C,T*v*x);for(let U=0;U<v;U++){const N=S[U*2]*2-1,z=S[U*2+1]*2-1;x===0?Zr.set(1,z,N):x===1?Zr.set(-N,1,-z):x===2?Zr.set(-N,z,1):x===3?Zr.set(-1,z,-N):x===4?Zr.set(-N,-1,z):Zr.set(N,z,-1),Zr.toArray(P,(x*v+U)*T)}}const M=new wi;M.setAttribute("position",new Ia(R,T)),M.setAttribute("outputDirection",new Ia(P,T)),i.push(new Zn(M,null)),s>no&&s--}return{lodMeshes:i,sizeLods:e}}function SS(o,e,i){const s=new Gi(o,e,i);return s.texture.mapping=zc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function to(o,e,i,s,u){o.viewport.set(e,i,s,u),o.scissor.set(e,i,s,u)}function nR(o,e,i){return new fa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$A,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function iR(o,e,i){return new fa({name:"SphericalGaussianBlur",defines:{SAMPLES:jA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function xS(){return new fa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function MS(){return new fa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Bc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Gx extends Gi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},u=[s,s,s,s,s,s];this.texture=new Px(u),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new wl(5,5,5),f=new fa({name:"CubemapFromEquirect",uniforms:co(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ni,blending:Oa});f.uniforms.tEquirect.value=i;const d=new Zn(u,f),h=i.minFilter;return i.minFilter===Kr&&(i.minFilter=Bn),new o1(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,u=!0){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,u);e.setRenderTarget(f)}}function aR(o){let e=new WeakMap,i=new WeakMap,s=null;function u(v,T=!1){return v==null?null:T?d(v):f(v)}function f(v){if(v&&v.isTexture){const T=v.mapping;if(T===Sh||T===xh)if(e.has(v)){const R=e.get(v).texture;return h(R,v.mapping)}else{const R=v.image;if(R&&R.height>0){const P=new Gx(R.height);return P.fromEquirectangularTexture(o,v),e.set(v,P),v.addEventListener("dispose",m),h(P.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const T=v.mapping,R=T===Sh||T===xh,P=T===Jr||T===uo;if(R||P){let M=i.get(v);const x=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return s===null&&(s=new vS(o)),M=R?s.fromEquirectangular(v,M):s.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),M.texture;if(M!==void 0)return M.texture;{const D=v.image;return R&&D&&D.height>0||P&&D&&p(D)?(s===null&&(s=new vS(o)),M=R?s.fromEquirectangular(v):s.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),v.addEventListener("dispose",S),M.texture):null}}}return v}function h(v,T){return T===Sh?v.mapping=Jr:T===xh&&(v.mapping=uo),v}function p(v){let T=0;const R=6;for(let P=0;P<R;P++)v[P]!==void 0&&T++;return T===R}function m(v){const T=v.target;T.removeEventListener("dispose",m);const R=e.get(T);R!==void 0&&(e.delete(T),R.dispose())}function S(v){const T=v.target;T.removeEventListener("dispose",S);const R=i.get(T);R!==void 0&&(i.delete(T),R.dispose())}function _(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:u,dispose:_}}function rR(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const u=o.getExtension(s);return e[s]=u,u}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const u=i(s);return u===null&&io("WebGLRenderer: "+s+" extension not supported."),u}}}function sR(o,e,i,s){const u={},f=new WeakMap;function d(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const R in v.attributes)e.remove(v.attributes[R]);v.removeEventListener("dispose",d),delete u[v.id];const T=f.get(v);T&&(e.remove(T),f.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return u[v.id]===!0||(v.addEventListener("dispose",d),u[v.id]=!0,i.memory.geometries++),v}function p(_){const v=_.attributes;for(const T in v)e.update(v[T],o.ARRAY_BUFFER)}function m(_){const v=[],T=_.index,R=_.attributes.position;let P=0;if(R===void 0)return;if(T!==null){const D=T.array;P=T.version;for(let G=0,C=D.length;G<C;G+=3){const U=D[G+0],N=D[G+1],z=D[G+2];v.push(U,N,N,z,z,U)}}else{const D=R.array;P=R.version;for(let G=0,C=D.length/3-1;G<C;G+=3){const U=G+0,N=G+1,z=G+2;v.push(U,N,N,z,z,U)}}const M=new(R.count>=65535?Ox:Lx)(v,1);M.version=P;const x=f.get(_);x&&e.remove(x),f.set(_,M)}function S(_){const v=f.get(_);if(v){const T=_.index;T!==null&&v.version<T.version&&m(_)}else m(_);return f.get(_)}return{get:h,update:p,getWireframeAttribute:S}}function oR(o,e,i){let s;function u(_){s=_}let f,d;function h(_){f=_.type,d=_.bytesPerElement}function p(_,v){o.drawElements(s,v,f,_*d),i.update(v,s,1)}function m(_,v,T){T!==0&&(o.drawElementsInstanced(s,v,f,_*d,T),i.update(v,s,T))}function S(_,v,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,f,_,0,T);let P=0;for(let M=0;M<T;M++)P+=v[M];i.update(P,s,1)}this.setMode=u,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=S}function lR(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:He("WebGLInfo: Unknown draw mode:",d);break}}function u(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:u,update:s}}function uR(o,e,i){const s=new WeakMap,u=new on;function f(d,h,p){const m=d.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=S!==void 0?S.length:0;let v=s.get(h);if(v===void 0||v.count!==_){let w=function(){E.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var T=w;v!==void 0&&v.texture.dispose();const R=h.morphAttributes.position!==void 0,P=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],G=h.morphAttributes.color||[];let C=0;R===!0&&(C=1),P===!0&&(C=2),M===!0&&(C=3);let U=h.attributes.position.count*C,N=1;U>e.maxTextureSize&&(N=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const z=new Float32Array(U*N*4*_),E=new Dx(z,U,N,_);E.type=ra,E.needsUpdate=!0;const L=C*4;for(let O=0;O<_;O++){const B=x[O],q=D[O],V=G[O],Q=U*N*4*O;for(let k=0;k<B.count;k++){const W=k*L;R===!0&&(u.fromBufferAttribute(B,k),z[Q+W+0]=u.x,z[Q+W+1]=u.y,z[Q+W+2]=u.z,z[Q+W+3]=0),P===!0&&(u.fromBufferAttribute(q,k),z[Q+W+4]=u.x,z[Q+W+5]=u.y,z[Q+W+6]=u.z,z[Q+W+7]=0),M===!0&&(u.fromBufferAttribute(V,k),z[Q+W+8]=u.x,z[Q+W+9]=u.y,z[Q+W+10]=u.z,z[Q+W+11]=V.itemSize===4?u.w:1)}}v={count:_,texture:E,size:new Ae(U,N)},s.set(h,v),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let M=0;M<m.length;M++)R+=m[M];const P=h.morphTargetsRelative?1:1-R;p.getUniforms().setValue(o,"morphTargetBaseInfluence",P),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:f}}function cR(o,e,i,s,u){let f=new WeakMap;function d(m){const S=u.render.frame,_=m.geometry,v=e.get(m,_);if(f.get(v)!==S&&(e.update(v),f.set(v,S)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),f.get(m)!==S&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),f.set(m,S))),m.isSkinnedMesh){const T=m.skeleton;f.get(T)!==S&&(T.update(),f.set(T,S))}return v}function h(){f=new WeakMap}function p(m){const S=m.target;S.removeEventListener("dispose",p),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:h}}const fR={[px]:"LINEAR_TONE_MAPPING",[mx]:"REINHARD_TONE_MAPPING",[gx]:"CINEON_TONE_MAPPING",[_x]:"ACES_FILMIC_TONE_MAPPING",[Sx]:"AGX_TONE_MAPPING",[xx]:"NEUTRAL_TONE_MAPPING",[vx]:"CUSTOM_TONE_MAPPING"};function dR(o,e,i,s,u,f){const d=new Gi(e,i,{type:o,depthBuffer:u,stencilBuffer:f,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null;const m=new wi;m.setAttribute("position",new Hn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Hn([0,2,0,0,2,0],2));const S=new n1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Zn(m,S),v=new xm(-1,1,1,-1,0,1);let T=null,R=null,P=!1,M,x=null,D=[],G=!1;this.setSize=function(C,U){d.setSize(C,U),h!==null&&h.setSize(C,U),p!==null&&p.setSize(C,U);for(let N=0;N<D.length;N++){const z=D[N];z.setSize&&z.setSize(C,U)}},this.setEffects=function(C){D=C,G=D.length>0&&D[0].isRenderPass===!0;const U=d.width,N=d.height;D.length>0&&h===null&&(h=new Gi(U,N,{type:ca,depthBuffer:!1,stencilBuffer:!1}),p=new Gi(U,N,{type:ca,depthBuffer:!1,stencilBuffer:!1}));for(let z=0;z<D.length;z++){const E=D[z];E.setSize&&E.setSize(U,N)}},this.begin=function(C,U){if(P||C.toneMapping===oa&&D.length===0)return!1;if(x=U,U!==null){const N=U.width,z=U.height;(d.width!==N||d.height!==z)&&this.setSize(N,z)}return G===!1&&C.setRenderTarget(d),M=C.toneMapping,C.toneMapping=oa,!0},this.hasRenderPass=function(){return G},this.end=function(C,U){C.toneMapping=M,P=!0;let N=d,z=h;for(let E=0;E<D.length;E++){const L=D[E];L.enabled!==!1&&(L.render(C,z,N,U),L.needsSwap!==!1&&(N=z,z=z===h?p:h))}if(T!==C.outputColorSpace||R!==C.toneMapping){T=C.outputColorSpace,R=C.toneMapping,S.defines={},Le.getTransfer(T)===Ze&&(S.defines.SRGB_TRANSFER="");const E=fR[R];E&&(S.defines[E]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=N.texture,C.setRenderTarget(x),C.render(_,v),x=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),m.dispose(),S.dispose()}}const Vx=new Fn,Gp=new Tl(1,1),Xx=new Dx,kx=new LT,qx=new Px,yS=[],ES=[],TS=new Float32Array(16),bS=new Float32Array(9),AS=new Float32Array(4);function fo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const u=e*i;let f=yS[u];if(f===void 0&&(f=new Float32Array(u),yS[u]=f),e!==0){s.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(f,h)}return f}function Mn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function yn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Fc(o,e){let i=ES[e];i===void 0&&(i=new Int32Array(e),ES[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function hR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function pR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2fv(this.addr,e),yn(i,e)}}function mR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Mn(i,e))return;o.uniform3fv(this.addr,e),yn(i,e)}}function gR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4fv(this.addr,e),yn(i,e)}}function _R(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(Mn(i,s))return;AS.set(s),o.uniformMatrix2fv(this.addr,!1,AS),yn(i,s)}}function vR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(Mn(i,s))return;bS.set(s),o.uniformMatrix3fv(this.addr,!1,bS),yn(i,s)}}function SR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(Mn(i,s))return;TS.set(s),o.uniformMatrix4fv(this.addr,!1,TS),yn(i,s)}}function xR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function MR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2iv(this.addr,e),yn(i,e)}}function yR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;o.uniform3iv(this.addr,e),yn(i,e)}}function ER(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4iv(this.addr,e),yn(i,e)}}function TR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function bR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2uiv(this.addr,e),yn(i,e)}}function AR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;o.uniform3uiv(this.addr,e),yn(i,e)}}function RR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4uiv(this.addr,e),yn(i,e)}}function CR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(Gp.compareFunction=i.isReversedDepthBuffer()?um:lm,f=Gp):f=Vx,i.setTexture2D(e||f,u)}function wR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture3D(e||kx,u)}function DR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTextureCube(e||qx,u)}function NR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture2DArray(e||Xx,u)}function UR(o){switch(o){case 5126:return hR;case 35664:return pR;case 35665:return mR;case 35666:return gR;case 35674:return _R;case 35675:return vR;case 35676:return SR;case 5124:case 35670:return xR;case 35667:case 35671:return MR;case 35668:case 35672:return yR;case 35669:case 35673:return ER;case 5125:return TR;case 36294:return bR;case 36295:return AR;case 36296:return RR;case 35678:case 36198:case 36298:case 36306:case 35682:return CR;case 35679:case 36299:case 36307:return wR;case 35680:case 36300:case 36308:case 36293:return DR;case 36289:case 36303:case 36311:case 36292:return NR}}function LR(o,e){o.uniform1fv(this.addr,e)}function OR(o,e){const i=fo(e,this.size,2);o.uniform2fv(this.addr,i)}function PR(o,e){const i=fo(e,this.size,3);o.uniform3fv(this.addr,i)}function IR(o,e){const i=fo(e,this.size,4);o.uniform4fv(this.addr,i)}function zR(o,e){const i=fo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function BR(o,e){const i=fo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function FR(o,e){const i=fo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function HR(o,e){o.uniform1iv(this.addr,e)}function GR(o,e){o.uniform2iv(this.addr,e)}function VR(o,e){o.uniform3iv(this.addr,e)}function XR(o,e){o.uniform4iv(this.addr,e)}function kR(o,e){o.uniform1uiv(this.addr,e)}function qR(o,e){o.uniform2uiv(this.addr,e)}function WR(o,e){o.uniform3uiv(this.addr,e)}function YR(o,e){o.uniform4uiv(this.addr,e)}function ZR(o,e,i){const s=this.cache,u=e.length,f=Fc(i,u);Mn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=Gp:d=Vx;for(let h=0;h!==u;++h)i.setTexture2D(e[h]||d,f[h])}function KR(o,e,i){const s=this.cache,u=e.length,f=Fc(i,u);Mn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==u;++d)i.setTexture3D(e[d]||kx,f[d])}function QR(o,e,i){const s=this.cache,u=e.length,f=Fc(i,u);Mn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==u;++d)i.setTextureCube(e[d]||qx,f[d])}function JR(o,e,i){const s=this.cache,u=e.length,f=Fc(i,u);Mn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==u;++d)i.setTexture2DArray(e[d]||Xx,f[d])}function jR(o){switch(o){case 5126:return LR;case 35664:return OR;case 35665:return PR;case 35666:return IR;case 35674:return zR;case 35675:return BR;case 35676:return FR;case 5124:case 35670:return HR;case 35667:case 35671:return GR;case 35668:case 35672:return VR;case 35669:case 35673:return XR;case 5125:return kR;case 36294:return qR;case 36295:return WR;case 36296:return YR;case 35678:case 36198:case 36298:case 36306:case 35682:return ZR;case 35679:case 36299:case 36307:return KR;case 35680:case 36300:case 36308:case 36293:return QR;case 36289:case 36303:case 36311:case 36292:return JR}}class $R{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=UR(i.type)}}class tC{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jR(i.type)}}class eC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const u=this.seq;for(let f=0,d=u.length;f!==d;++f){const h=u[f];h.setValue(e,i[h.id],s)}}}const Qh=/(\w+)(\])?(\[|\.)?/g;function RS(o,e){o.seq.push(e),o.map[e.id]=e}function nC(o,e,i){const s=o.name,u=s.length;for(Qh.lastIndex=0;;){const f=Qh.exec(s),d=Qh.lastIndex;let h=f[1];const p=f[2]==="]",m=f[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===u){RS(i,m===void 0?new $R(h,o,e):new tC(h,o,e));break}else{let _=i.map[h];_===void 0&&(_=new eC(h),RS(i,_)),i=_}}}class Cc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),p=e.getUniformLocation(i,h.name);nC(h,p,this)}const u=[],f=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?u.push(d):f.push(d);u.length>0&&(this.seq=u.concat(f))}setValue(e,i,s,u){const f=this.map[i];f!==void 0&&f.setValue(e,s,u)}setOptional(e,i,s){const u=i[s];u!==void 0&&this.setValue(e,s,u)}static upload(e,i,s,u){for(let f=0,d=i.length;f!==d;++f){const h=i[f],p=s[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,u)}}static seqWithValue(e,i){const s=[];for(let u=0,f=e.length;u!==f;++u){const d=e[u];d.id in i&&s.push(d)}return s}}function CS(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const iC=37297;let aC=0;function rC(o,e){const i=o.split(`
`),s=[],u=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let d=u;d<f;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const wS=new me;function sC(o){Le._getMatrix(wS,Le.workingColorSpace,o);const e=`mat3( ${wS.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case Uc:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function DS(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+rC(o.getShaderSource(e),h)}else return f}function oC(o,e){const i=sC(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const lC={[px]:"Linear",[mx]:"Reinhard",[gx]:"Cineon",[_x]:"ACESFilmic",[Sx]:"AgX",[xx]:"Neutral",[vx]:"Custom"};function uC(o,e){const i=lC[e];return i===void 0?(fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Mc=new tt;function cC(){Le.getLuminanceCoefficients(Mc);const o=Mc.x.toFixed(4),e=Mc.y.toFixed(4),i=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_l).join(`
`)}function dC(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function hC(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(e,u),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function _l(o){return o!==""}function NS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function US(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vp(o){return o.replace(pC,gC)}const mC=new Map;function gC(o,e){let i=Se[e];if(i===void 0){const s=mC.get(e);if(s!==void 0)i=Se[s],fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Vp(i)}const _C=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function LS(o){return o.replace(_C,vC)}function vC(o,e,i,s){let u="";for(let f=parseInt(e);f<parseInt(i);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function OS(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const SC={[Ec]:"SHADOWMAP_TYPE_PCF",[gl]:"SHADOWMAP_TYPE_VSM"};function xC(o){return SC[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const MC={[Jr]:"ENVMAP_TYPE_CUBE",[uo]:"ENVMAP_TYPE_CUBE",[zc]:"ENVMAP_TYPE_CUBE_UV"};function yC(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":MC[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const EC={[uo]:"ENVMAP_MODE_REFRACTION"};function TC(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":EC[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bC={[hx]:"ENVMAP_BLENDING_MULTIPLY",[cT]:"ENVMAP_BLENDING_MIX",[fT]:"ENVMAP_BLENDING_ADD"};function AC(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":bC[o.combine]||"ENVMAP_BLENDING_NONE"}function RC(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function CC(o,e,i,s){const u=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=xC(i),m=yC(i),S=TC(i),_=AC(i),v=RC(i),T=fC(i),R=dC(f),P=u.createProgram();let M,x,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(_l).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(_l).join(`
`),x.length>0&&(x+=`
`)):(M=[OS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_l).join(`
`),x=[OS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+S:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==oa?"#define TONE_MAPPING":"",i.toneMapping!==oa?Se.tonemapping_pars_fragment:"",i.toneMapping!==oa?uC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,oC("linearToOutputTexel",i.outputColorSpace),cC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(_l).join(`
`)),d=Vp(d),d=NS(d,i),d=US(d,i),h=Vp(h),h=NS(h,i),h=US(h,i),d=LS(d),h=LS(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===Yv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Yv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const G=D+M+d,C=D+x+h,U=CS(u,u.VERTEX_SHADER,G),N=CS(u,u.FRAGMENT_SHADER,C);u.attachShader(P,U),u.attachShader(P,N),i.index0AttributeName!==void 0?u.bindAttribLocation(P,0,i.index0AttributeName):i.hasPositionAttribute===!0&&u.bindAttribLocation(P,0,"position"),u.linkProgram(P);function z(O){if(o.debug.checkShaderErrors){const B=u.getProgramInfoLog(P)||"",q=u.getShaderInfoLog(U)||"",V=u.getShaderInfoLog(N)||"",Q=B.trim(),k=q.trim(),W=V.trim();let nt=!0,at=!0;if(u.getProgramParameter(P,u.LINK_STATUS)===!1)if(nt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,P,U,N);else{const ht=DS(u,U,"vertex"),St=DS(u,N,"fragment");He("WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(P,u.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+Q+`
`+ht+`
`+St)}else Q!==""?fe("WebGLProgram: Program Info Log:",Q):(k===""||W==="")&&(at=!1);at&&(O.diagnostics={runnable:nt,programLog:Q,vertexShader:{log:k,prefix:M},fragmentShader:{log:W,prefix:x}})}u.deleteShader(U),u.deleteShader(N),E=new Cc(u,P),L=hC(u,P)}let E;this.getUniforms=function(){return E===void 0&&z(this),E};let L;this.getAttributes=function(){return L===void 0&&z(this),L};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=u.getProgramParameter(P,iC)),w},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(P),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=aC++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=U,this.fragmentShader=N,this}let wC=0;class DC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const u=this._getShaderCacheForMaterial(e);return u.has(i)===!1&&(u.add(i),i.usedTimes++),u.has(s)===!1&&(u.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new NC(e),i.set(e,s)),s}}class NC{constructor(e){this.id=wC++,this.code=e,this.usedTimes=0}}function UC(o){return o===jr||o===wc||o===Dc}function LC(o,e,i,s,u,f){const d=new Nx,h=new DC,p=new Set,m=[],S=new Map,_=s.logarithmicDepthBuffer;let v=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(E){return p.add(E),E===0?"uv":`uv${E}`}function P(E,L,w,O,B,q){const V=O.fog,Q=B.geometry,k=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,W=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,nt=e.get(E.envMap||k,W),at=nt&&nt.mapping===zc?nt.image.height:null,ht=T[E.type];E.precision!==null&&(v=s.getMaxPrecision(E.precision),v!==E.precision&&fe("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const St=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,kt=St!==void 0?St.length:0;let Ut=0;Q.morphAttributes.position!==void 0&&(Ut=1),Q.morphAttributes.normal!==void 0&&(Ut=2),Q.morphAttributes.color!==void 0&&(Ut=3);let H,mt,Tt,X;if(ht){const Ne=aa[ht];H=Ne.vertexShader,mt=Ne.fragmentShader}else{H=E.vertexShader,mt=E.fragmentShader;const Ne=h.getVertexShaderStage(E),he=h.getFragmentShaderStage(E);h.update(E,Ne,he),Tt=Ne.id,X=he.id}const ot=o.getRenderTarget(),Et=o.state.buffers.depth.getReversed(),Ct=B.isInstancedMesh===!0,pt=B.isBatchedMesh===!0,At=!!E.map,ge=!!E.matcap,oe=!!nt,ue=!!E.aoMap,re=!!E.lightMap,Yt=!!E.bumpMap&&E.wireframe===!1,ie=!!E.normalMap,Be=!!E.displacementMap,nn=!!E.emissiveMap,Pe=!!E.metalnessMap,De=!!E.roughnessMap,K=E.anisotropy>0,rn=E.clearcoat>0,Fe=E.dispersion>0,I=E.retroreflectivity>0,y=E.iridescence>0,it=E.sheen>0,ct=E.transmission>0,gt=K&&!!E.anisotropyMap,wt=rn&&!!E.clearcoatMap,Lt=rn&&!!E.clearcoatNormalMap,_t=rn&&!!E.clearcoatRoughnessMap,yt=y&&!!E.iridescenceMap,Nt=y&&!!E.iridescenceThicknessMap,te=it&&!!E.sheenColorMap,Bt=it&&!!E.sheenRoughnessMap,zt=!!E.specularMap,qt=!!E.specularColorMap,ae=!!E.specularIntensityMap,de=ct&&!!E.transmissionMap,J=ct&&!!E.thicknessMap,Dt=!!E.gradientMap,Mt=!!E.alphaMap,Ot=E.alphaTest>0,Xt=!!E.alphaHash,bt=!!E.extensions;let $t=oa;E.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&($t=o.toneMapping);const Vt={shaderID:ht,shaderType:E.type,shaderName:E.name,vertexShader:H,fragmentShader:mt,defines:E.defines,customVertexShaderID:Tt,customFragmentShaderID:X,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:pt,batchingColor:pt&&B._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&B.instanceColor!==null,instancingMorph:Ct&&B.morphTexture!==null,outputColorSpace:ot===null?o.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Le.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:At,matcap:ge,envMap:oe,envMapMode:oe&&nt.mapping,envMapCubeUVHeight:at,aoMap:ue,lightMap:re,bumpMap:Yt,normalMap:ie,displacementMap:Be,emissiveMap:nn,normalMapObjectSpace:ie&&E.normalMapType===pT,normalMapTangentSpace:ie&&E.normalMapType===Fp,packedNormalMap:ie&&E.normalMapType===Fp&&UC(E.normalMap.format),metalnessMap:Pe,roughnessMap:De,anisotropy:K,anisotropyMap:gt,clearcoat:rn,clearcoatMap:wt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:_t,dispersion:Fe,retroreflection:I,iridescence:y,iridescenceMap:yt,iridescenceThicknessMap:Nt,sheen:it,sheenColorMap:te,sheenRoughnessMap:Bt,specularMap:zt,specularColorMap:qt,specularIntensityMap:ae,transmission:ct,transmissionMap:de,thicknessMap:J,gradientMap:Dt,opaque:E.transparent===!1&&E.blending===vl&&E.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Ot,alphaHash:Xt,combine:E.combine,mapUv:At&&R(E.map.channel),aoMapUv:ue&&R(E.aoMap.channel),lightMapUv:re&&R(E.lightMap.channel),bumpMapUv:Yt&&R(E.bumpMap.channel),normalMapUv:ie&&R(E.normalMap.channel),displacementMapUv:Be&&R(E.displacementMap.channel),emissiveMapUv:nn&&R(E.emissiveMap.channel),metalnessMapUv:Pe&&R(E.metalnessMap.channel),roughnessMapUv:De&&R(E.roughnessMap.channel),anisotropyMapUv:gt&&R(E.anisotropyMap.channel),clearcoatMapUv:wt&&R(E.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&R(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&R(E.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&R(E.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&R(E.iridescenceThicknessMap.channel),sheenColorMapUv:te&&R(E.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&R(E.sheenRoughnessMap.channel),specularMapUv:zt&&R(E.specularMap.channel),specularColorMapUv:qt&&R(E.specularColorMap.channel),specularIntensityMapUv:ae&&R(E.specularIntensityMap.channel),transmissionMapUv:de&&R(E.transmissionMap.channel),thicknessMapUv:J&&R(E.thicknessMap.channel),alphaMapUv:Mt&&R(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ie||K),vertexNormals:!!Q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Q.attributes.uv&&(At||Mt),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Q.attributes.normal===void 0&&ie===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Et,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:kt,morphTextureStride:Ut,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&w.length>0,shadowMapType:o.shadowMap.type,toneMapping:$t,decodeVideoTexture:At&&E.map.isVideoTexture===!0&&Le.getTransfer(E.map.colorSpace)===Ze,decodeVideoTextureEmissive:nn&&E.emissiveMap.isVideoTexture===!0&&Le.getTransfer(E.emissiveMap.colorSpace)===Ze,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ua,flipSided:E.side===ni,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:bt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&E.extensions.multiDraw===!0||pt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Vt.vertexUv1s=p.has(1),Vt.vertexUv2s=p.has(2),Vt.vertexUv3s=p.has(3),p.clear(),Vt}function M(E){const L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(const w in E.defines)L.push(w),L.push(E.defines[w]);return E.isRawShaderMaterial===!1&&(x(L,E),D(L,E),L.push(o.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function x(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapCubeUVHeight),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.morphAttributeCount),E.push(L.numSunLights),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numSunLightShadows),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function D(E,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.retroreflection&&d.enable(24),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),L.packedNormalMap&&d.enable(22),L.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),L.numLightProbeGrids>0&&d.enable(22),L.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function G(E){const L=T[E.type];let w;if(L){const O=aa[L];w=$T.clone(O.uniforms)}else w=E.uniforms;return w}function C(E,L){let w=S.get(L);return w!==void 0?++w.usedTimes:(w=new CC(o,L,E,u),m.push(w),S.set(L,w)),w}function U(E){if(--E.usedTimes===0){const L=m.indexOf(E);m[L]=m[m.length-1],m.pop(),S.delete(E.cacheKey),E.destroy()}}function N(E){h.remove(E)}function z(){h.dispose()}return{getParameters:P,getProgramCacheKey:M,getUniforms:G,acquireProgram:C,releaseProgram:U,releaseShaderCache:N,programs:m,dispose:z}}function OC(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function u(d,h,p){o.get(d)[h]=p}function f(){o=new WeakMap}return{has:e,get:i,remove:s,update:u,dispose:f}}function PC(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function PS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function IS(){const o=[];let e=0;const i=[],s=[],u=[];function f(){e=0,i.length=0,s.length=0,u.length=0}function d(v){let T=0;return v.isInstancedMesh&&(T+=2),v.isSkinnedMesh&&(T+=1),T}function h(v,T,R,P,M,x){let D=o[e];return D===void 0?(D={id:v.id,object:v,geometry:T,material:R,materialVariant:d(v),groupOrder:P,renderOrder:v.renderOrder,z:M,group:x},o[e]=D):(D.id=v.id,D.object=v,D.geometry=T,D.material=R,D.materialVariant=d(v),D.groupOrder=P,D.renderOrder=v.renderOrder,D.z=M,D.group=x),e++,D}function p(v,T,R,P,M,x,D){D.reversedDepth===!0&&(M=-M);const G=h(v,T,R,P,M,x);R.transmission>0?s.push(G):R.transparent===!0?u.push(G):i.push(G)}function m(v,T,R,P,M,x){const D=h(v,T,R,P,M,x);R.transmission>0?s.unshift(D):R.transparent===!0?u.unshift(D):i.unshift(D)}function S(v,T){i.length>1&&i.sort(v||PC),s.length>1&&s.sort(T||PS),u.length>1&&u.sort(T||PS)}function _(){for(let v=e,T=o.length;v<T;v++){const R=o[v];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:i,transmissive:s,transparent:u,init:f,push:p,unshift:m,finish:_,sort:S}}function IC(){let o=new WeakMap;function e(s,u){const f=o.get(s);let d;return f===void 0?(d=new IS,o.set(s,[d])):u>=f.length?(d=new IS,f.push(d)):d=f[u],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function zC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new tt,color:new ze};break;case"SpotLight":i={position:new tt,direction:new tt,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new ze,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":i={color:new ze,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[e.id]=i,i}}}function BC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let FC=0;function HC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function GC(o){const e=new zC,i=BC(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new tt);const u=new tt,f=new en,d=new en;function h(m){let S=0,_=0,v=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let T=0,R=0,P=0,M=0,x=0,D=0,G=0,C=0,U=0,N=0,z=0,E=0,L=0,w=0;m.sort(HC);for(let B=0,q=m.length;B<q;B++){const V=m[B],Q=V.color,k=V.intensity,W=V.distance;let nt=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===jr?nt=V.shadow.map.texture:nt=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)S+=Q.r*k,_+=Q.g*k,v+=Q.b*k;else if(V.isLightProbe){for(let at=0;at<9;at++)s.probe[at].addScaledVector(V.sh.coefficients[at],k);w++}else if(V.isSunLight){const at=e.get(V);if(at.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ht=V.shadow,St=i.get(V);St.shadowIntensity=ht.intensity,St.shadowBias=ht.bias,St.shadowNormalBias=ht.normalBias,St.shadowRadius=ht.radius,St.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),s.sunShadow[R]=St,s.sunShadowMap[R]=nt;const kt=ht.getViewportCount();for(let Ut=0;Ut<kt;Ut++)s.sunShadowMatrix[P+Ut]=ht.getMatrix(Ut),s.sunShadowCascade[P+Ut]=ht._cascadeData[Ut];P+=kt,R++}s.sun[T]=at,T++}else if(V.isDirectionalLight){const at=e.get(V);if(at.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ht=V.shadow,St=i.get(V);St.shadowIntensity=ht.intensity,St.shadowBias=ht.bias,St.shadowNormalBias=ht.normalBias,St.shadowRadius=ht.radius,St.shadowMapSize=ht.mapSize,s.directionalShadow[M]=St,s.directionalShadowMap[M]=nt,s.directionalShadowMatrix[M]=V.shadow.matrix,U++}s.directional[M]=at,M++}else if(V.isSpotLight){const at=e.get(V);at.position.setFromMatrixPosition(V.matrixWorld),at.color.copy(Q).multiplyScalar(k),at.distance=W,at.coneCos=Math.cos(V.angle),at.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),at.decay=V.decay,s.spot[D]=at;const ht=V.shadow;if(V.map&&(s.spotLightMap[E]=V.map,E++,ht.updateMatrices(V),V.castShadow&&L++),s.spotLightMatrix[D]=ht.matrix,V.castShadow){const St=i.get(V);St.shadowIntensity=ht.intensity,St.shadowBias=ht.bias,St.shadowNormalBias=ht.normalBias,St.shadowRadius=ht.radius,St.shadowMapSize=ht.mapSize,s.spotShadow[D]=St,s.spotShadowMap[D]=nt,z++}D++}else if(V.isRectAreaLight){const at=e.get(V);at.color.copy(Q).multiplyScalar(k),at.halfWidth.set(V.width*.5,0,0),at.halfHeight.set(0,V.height*.5,0),s.rectArea[G]=at,G++}else if(V.isPointLight){const at=e.get(V);if(at.color.copy(V.color).multiplyScalar(V.intensity),at.distance=V.distance,at.decay=V.decay,V.castShadow){const ht=V.shadow,St=i.get(V);St.shadowIntensity=ht.intensity,St.shadowBias=ht.bias,St.shadowNormalBias=ht.normalBias,St.shadowRadius=ht.radius,St.shadowMapSize=ht.mapSize,St.shadowCameraNear=ht.camera.near,St.shadowCameraFar=ht.camera.far,s.pointShadow[x]=St,s.pointShadowMap[x]=nt,s.pointShadowMatrix[x]=V.shadow.matrix,N++}s.point[x]=at,x++}else if(V.isHemisphereLight){const at=e.get(V);at.skyColor.copy(V.color).multiplyScalar(k),at.groundColor.copy(V.groundColor).multiplyScalar(k),s.hemi[C]=at,C++}}G>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Gt.LTC_FLOAT_1,s.rectAreaLTC2=Gt.LTC_FLOAT_2):(s.rectAreaLTC1=Gt.LTC_HALF_1,s.rectAreaLTC2=Gt.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=_,s.ambient[2]=v;const O=s.hash;(O.sunLength!==T||O.directionalLength!==M||O.pointLength!==x||O.spotLength!==D||O.rectAreaLength!==G||O.hemiLength!==C||O.numSunShadows!==R||O.numDirectionalShadows!==U||O.numPointShadows!==N||O.numSpotShadows!==z||O.numSpotMaps!==E||O.numLightProbes!==w)&&(s.sun.length=T,s.directional.length=M,s.spot.length=D,s.rectArea.length=G,s.point.length=x,s.hemi.length=C,s.sunShadow.length=R,s.sunShadowMap.length=R,s.sunShadowMatrix.length=P,s.sunShadowCascade.length=P,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.directionalShadowMatrix.length=U,s.pointShadow.length=N,s.pointShadowMap.length=N,s.pointShadowMatrix.length=N,s.spotShadow.length=z,s.spotShadowMap.length=z,s.spotLightMatrix.length=z+E-L,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=w,O.sunLength=T,O.directionalLength=M,O.pointLength=x,O.spotLength=D,O.rectAreaLength=G,O.hemiLength=C,O.numSunShadows=R,O.numDirectionalShadows=U,O.numPointShadows=N,O.numSpotShadows=z,O.numSpotMaps=E,O.numLightProbes=w,s.version=FC++)}function p(m,S){let _=0,v=0,T=0,R=0,P=0,M=0;const x=S.matrixWorldInverse;for(let D=0,G=m.length;D<G;D++){const C=m[D];if(C.isSunLight){const U=s.sun[_];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(x),_++}else if(C.isDirectionalLight){const U=s.directional[v];U.direction.setFromMatrixPosition(C.matrixWorld),u.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(u),U.direction.transformDirection(x),v++}else if(C.isSpotLight){const U=s.spot[R];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(C.matrixWorld),u.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(u),U.direction.transformDirection(x),R++}else if(C.isRectAreaLight){const U=s.rectArea[P];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(x),d.identity(),f.copy(C.matrixWorld),f.premultiply(x),d.extractRotation(f),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),P++}else if(C.isPointLight){const U=s.point[T];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(x),T++}else if(C.isHemisphereLight){const U=s.hemi[M];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(x),M++}}}return{setup:h,setupView:p,state:s}}function zS(o){const e=new GC(o),i=[],s=[],u=[];function f(v){_.camera=v,i.length=0,s.length=0,u.length=0}function d(v){i.push(v)}function h(v){s.push(v)}function p(v){u.push(v)}function m(){e.setup(i)}function S(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:u,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:_,setupLights:m,setupLightsView:S,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function VC(o){let e=new WeakMap;function i(u,f=0){const d=e.get(u);let h;return d===void 0?(h=new zS(o),e.set(u,[h])):f>=d.length?(h=new zS(o),d.push(h)):h=d[f],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const XC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kC=`uniform sampler2D shadow_pass;
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
}`,qC=[new tt(1,0,0),new tt(-1,0,0),new tt(0,1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1)],WC=[new tt(0,-1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,-1,0),new tt(0,-1,0)],BS=new en,ml=new tt,Jh=new tt;function YC(o,e,i){let s=new hm;const u=new Ae,f=new Ae,d=new on,h=new i1,p=new a1,m={},S=i.maxTextureSize,_={[la]:ni,[ni]:la,[Ua]:Ua},v=new fa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:XC,fragmentShader:kC}),T=v.clone();T.defines.HORIZONTAL_PASS=1;const R=new wi;R.setAttribute("position",new Ia(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new Zn(R,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ec;let x=this.type;this.render=function(N,z,E){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||N.length===0)return;this.type===qE&&(fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ec);const L=o.getRenderTarget(),w=o.getActiveCubeFace(),O=o.getActiveMipmapLevel(),B=o.state;B.setBlending(Oa),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const q=x!==this.type;q&&z.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(Q=>Q.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,Q=N.length;V<Q;V++){const k=N[V],W=k.shadow;if(W===void 0){fe("WebGLShadowMap:",k,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;u.copy(W.mapSize);const nt=W.getFrameExtents();u.multiply(nt),f.copy(W.mapSize),(u.x>S||u.y>S)&&(u.x>S&&(f.x=Math.floor(S/nt.x),u.x=f.x*nt.x,W.mapSize.x=f.x),u.y>S&&(f.y=Math.floor(S/nt.y),u.y=f.y*nt.y,W.mapSize.y=f.y));const at=o.state.buffers.depth.getReversed();if(W.camera._reversedDepth=at,W.map===null||q===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===gl){if(k.isPointLight){fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Gi(u.x,u.y,{format:jr,type:ca,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),W.map.texture.name=k.name+".shadowMap",W.map.depthTexture=new Tl(u.x,u.y,ra),W.map.depthTexture.name=k.name+".shadowMapDepth",W.map.depthTexture.format=Ba,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ln,W.map.depthTexture.magFilter=Ln}else k.isPointLight?(W.map=new Gx(u.x),W.map.depthTexture=new JT(u.x,ua)):(W.map=new Gi(u.x,u.y),W.map.depthTexture=new Tl(u.x,u.y,ua)),W.map.depthTexture.name=k.name+".shadowMap",W.map.depthTexture.format=Ba,this.type===Ec?(W.map.depthTexture.compareFunction=at?um:lm,W.map.depthTexture.minFilter=Bn,W.map.depthTexture.magFilter=Bn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ln,W.map.depthTexture.magFilter=Ln);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==u.x||W.map.height!==u.y)&&W.map.setSize(u.x,u.y);const ht=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();k.isPointLight!==!0&&W.updateMatrices(k,E);for(let St=0;St<ht;St++){const kt=W.getCamera(St);if(k.isPointLight){const Ut=W.camera,H=W.matrix,mt=k.distance||Ut.far;mt!==Ut.far&&(Ut.far=mt,Ut.updateProjectionMatrix()),ml.setFromMatrixPosition(k.matrixWorld),Ut.position.copy(ml),Jh.copy(Ut.position),Jh.add(qC[St]),Ut.up.copy(WC[St]),Ut.lookAt(Jh),Ut.updateMatrixWorld(),H.makeTranslation(-ml.x,-ml.y,-ml.z),BS.multiplyMatrices(Ut.projectionMatrix,Ut.matrixWorldInverse),W._frustum.setFromProjectionMatrix(BS,Ut.coordinateSystem,Ut.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)o.setRenderTarget(W.map,St),o.clear();else{St===0&&(o.setRenderTarget(W.map),o.clear());const Ut=W.getViewport(St);d.set(f.x*Ut.x,f.y*Ut.y,f.x*Ut.z,f.y*Ut.w),B.viewport(d)}s=W.getFrustum(St),C(z,E,kt,k,this.type)}W.isPointLightShadow!==!0&&this.type===gl&&D(W,E),W.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(L,w,O)};function D(N,z){const E=e.update(P);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,T.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,T.needsUpdate=!0),N.mapPass===null?N.mapPass=new Gi(u.x,u.y,{format:jr,type:ca}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),v.uniforms.shadow_pass.value=N.map.depthTexture,v.uniforms.resolution.value.set(N.map.width,N.map.height),v.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(z,null,E,v,P,null),T.uniforms.shadow_pass.value=N.mapPass.texture,T.uniforms.resolution.value.set(N.map.width,N.map.height),T.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(z,null,E,T,P,null)}function G(N,z,E,L){let w=null;const O=E.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(O!==void 0)w=O;else if(w=E.isPointLight===!0?p:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const B=w.uuid,q=z.uuid;let V=m[B];V===void 0&&(V={},m[B]=V);let Q=V[q];Q===void 0&&(Q=w.clone(),V[q]=Q,z.addEventListener("dispose",U)),w=Q}if(w.visible=z.visible,w.wireframe=z.wireframe,L===gl?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:_[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,E.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const B=o.properties.get(w);B.light=E}return w}function C(N,z,E,L,w){if(N.visible===!1)return;if(N.layers.test(z.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&w===gl)&&(!N.frustumCulled||N.intersectsFrustum(s))){N.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,N.matrixWorld);const q=e.update(N),V=N.material;if(Array.isArray(V)){const Q=q.groups;for(let k=0,W=Q.length;k<W;k++){const nt=Q[k],at=V[nt.materialIndex];if(at&&at.visible){const ht=G(N,at,L,w);N.onBeforeShadow(o,N,z,E,q,ht,nt),o.renderBufferDirect(E,null,q,ht,N,nt),N.onAfterShadow(o,N,z,E,q,ht,nt)}}}else if(V.visible){const Q=G(N,V,L,w);N.onBeforeShadow(o,N,z,E,q,Q,null),o.renderBufferDirect(E,null,q,Q,N,null),N.onAfterShadow(o,N,z,E,q,Q,null)}}const B=N.children;for(let q=0,V=B.length;q<V;q++)C(B[q],z,E,L,w)}function U(N){N.target.removeEventListener("dispose",U);for(const E in m){const L=m[E],w=N.target.uuid;w in L&&(L[w].dispose(),delete L[w])}}}function ZC(o,e){function i(){let J=!1;const Dt=new on;let Mt=null;const Ot=new on(0,0,0,0);return{setMask:function(Xt){Mt!==Xt&&!J&&(o.colorMask(Xt,Xt,Xt,Xt),Mt=Xt)},setLocked:function(Xt){J=Xt},setClear:function(Xt,bt,$t,Vt,Ne){Ne===!0&&(Xt*=Vt,bt*=Vt,$t*=Vt),Dt.set(Xt,bt,$t,Vt),Ot.equals(Dt)===!1&&(o.clearColor(Xt,bt,$t,Vt),Ot.copy(Dt))},reset:function(){J=!1,Mt=null,Ot.set(-1,0,0,0)}}}function s(){let J=!1,Dt=!1,Mt=null,Ot=null,Xt=null;return{setReversed:function(bt){if(Dt!==bt){const $t=e.get("EXT_clip_control");bt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),Dt=bt;const Vt=Xt;Xt=null,this.setClear(Vt)}},getReversed:function(){return Dt},setTest:function(bt){bt?ot(o.DEPTH_TEST):Et(o.DEPTH_TEST)},setMask:function(bt){Mt!==bt&&!J&&(o.depthMask(bt),Mt=bt)},setFunc:function(bt){if(Dt&&(bt=AT[bt]),Ot!==bt){switch(bt){case tp:o.depthFunc(o.NEVER);break;case ep:o.depthFunc(o.ALWAYS);break;case np:o.depthFunc(o.LESS);break;case xl:o.depthFunc(o.LEQUAL);break;case ip:o.depthFunc(o.EQUAL);break;case ap:o.depthFunc(o.GEQUAL);break;case rp:o.depthFunc(o.GREATER);break;case sp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ot=bt}},setLocked:function(bt){J=bt},setClear:function(bt){Xt!==bt&&(Xt=bt,Dt&&(bt=1-bt),o.clearDepth(bt))},reset:function(){J=!1,Mt=null,Ot=null,Xt=null,Dt=!1}}}function u(){let J=!1,Dt=null,Mt=null,Ot=null,Xt=null,bt=null,$t=null,Vt=null,Ne=null;return{setTest:function(he){J||(he?ot(o.STENCIL_TEST):Et(o.STENCIL_TEST))},setMask:function(he){Dt!==he&&!J&&(o.stencilMask(he),Dt=he)},setFunc:function(he,ii,_i){(Mt!==he||Ot!==ii||Xt!==_i)&&(o.stencilFunc(he,ii,_i),Mt=he,Ot=ii,Xt=_i)},setOp:function(he,ii,_i){(bt!==he||$t!==ii||Vt!==_i)&&(o.stencilOp(he,ii,_i),bt=he,$t=ii,Vt=_i)},setLocked:function(he){J=he},setClear:function(he){Ne!==he&&(o.clearStencil(he),Ne=he)},reset:function(){J=!1,Dt=null,Mt=null,Ot=null,Xt=null,bt=null,$t=null,Vt=null,Ne=null}}}const f=new i,d=new s,h=new u,p=new WeakMap,m=new WeakMap;let S={},_={},v={},T=new WeakMap,R=[],P=null,M=!1,x=null,D=null,G=null,C=null,U=null,N=null,z=null,E=new ze(0,0,0),L=0,w=!1,O=null,B=null,q=null,V=null,Q=null;const k=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,nt=0;const at=o.getParameter(o.VERSION);at.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(at)[1]),W=nt>=1):at.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),W=nt>=2);let ht=null,St={};const kt=o.getParameter(o.SCISSOR_BOX),Ut=o.getParameter(o.VIEWPORT),H=new on().fromArray(kt),mt=new on().fromArray(Ut);function Tt(J,Dt,Mt,Ot){const Xt=new Uint8Array(4),bt=o.createTexture();o.bindTexture(J,bt),o.texParameteri(J,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(J,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<Mt;$t++)J===o.TEXTURE_3D||J===o.TEXTURE_2D_ARRAY?o.texImage3D(Dt,0,o.RGBA,1,1,Ot,0,o.RGBA,o.UNSIGNED_BYTE,Xt):o.texImage2D(Dt+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Xt);return bt}const X={};X[o.TEXTURE_2D]=Tt(o.TEXTURE_2D,o.TEXTURE_2D,1),X[o.TEXTURE_CUBE_MAP]=Tt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[o.TEXTURE_2D_ARRAY]=Tt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),X[o.TEXTURE_3D]=Tt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ot(o.DEPTH_TEST),d.setFunc(xl),Yt(!1),ie(Xv),ot(o.CULL_FACE),ue(Oa);function ot(J){S[J]!==!0&&(o.enable(J),S[J]=!0)}function Et(J){S[J]!==!1&&(o.disable(J),S[J]=!1)}function Ct(J,Dt){return v[J]!==Dt?(o.bindFramebuffer(J,Dt),v[J]=Dt,J===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Dt),J===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Dt),!0):!1}function pt(J,Dt){let Mt=R,Ot=!1;if(J){Mt=T.get(Dt),Mt===void 0&&(Mt=[],T.set(Dt,Mt));const Xt=J.textures;if(Mt.length!==Xt.length||Mt[0]!==o.COLOR_ATTACHMENT0){for(let bt=0,$t=Xt.length;bt<$t;bt++)Mt[bt]=o.COLOR_ATTACHMENT0+bt;Mt.length=Xt.length,Ot=!0}}else Mt[0]!==o.BACK&&(Mt[0]=o.BACK,Ot=!0);Ot&&o.drawBuffers(Mt)}function At(J){return P!==J?(o.useProgram(J),P=J,!0):!1}const ge={[eo]:o.FUNC_ADD,[YE]:o.FUNC_SUBTRACT,[ZE]:o.FUNC_REVERSE_SUBTRACT};ge[KE]=o.MIN,ge[QE]=o.MAX;const oe={[JE]:o.ZERO,[jE]:o.ONE,[$E]:o.SRC_COLOR,[fx]:o.SRC_ALPHA,[rT]:o.SRC_ALPHA_SATURATE,[iT]:o.DST_COLOR,[eT]:o.DST_ALPHA,[tT]:o.ONE_MINUS_SRC_COLOR,[dx]:o.ONE_MINUS_SRC_ALPHA,[aT]:o.ONE_MINUS_DST_COLOR,[nT]:o.ONE_MINUS_DST_ALPHA,[sT]:o.CONSTANT_COLOR,[oT]:o.ONE_MINUS_CONSTANT_COLOR,[lT]:o.CONSTANT_ALPHA,[uT]:o.ONE_MINUS_CONSTANT_ALPHA};function ue(J,Dt,Mt,Ot,Xt,bt,$t,Vt,Ne,he){if(J===Oa){M===!0&&(Et(o.BLEND),M=!1);return}if(M===!1&&(ot(o.BLEND),M=!0),J!==WE){if(J!==x||he!==w){if((D!==eo||U!==eo)&&(o.blendEquation(o.FUNC_ADD),D=eo,U=eo),he)switch(J){case vl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case kv:o.blendFunc(o.ONE,o.ONE);break;case qv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Wv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:He("WebGLState: Invalid blending: ",J);break}else switch(J){case vl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case kv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case qv:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wv:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",J);break}G=null,C=null,N=null,z=null,E.set(0,0,0),L=0,x=J,w=he}return}Xt=Xt||Dt,bt=bt||Mt,$t=$t||Ot,(Dt!==D||Xt!==U)&&(o.blendEquationSeparate(ge[Dt],ge[Xt]),D=Dt,U=Xt),(Mt!==G||Ot!==C||bt!==N||$t!==z)&&(o.blendFuncSeparate(oe[Mt],oe[Ot],oe[bt],oe[$t]),G=Mt,C=Ot,N=bt,z=$t),(Vt.equals(E)===!1||Ne!==L)&&(o.blendColor(Vt.r,Vt.g,Vt.b,Ne),E.copy(Vt),L=Ne),x=J,w=!1}function re(J,Dt){J.side===Ua?Et(o.CULL_FACE):ot(o.CULL_FACE);let Mt=J.side===ni;Dt&&(Mt=!Mt),Yt(Mt),J.blending===vl&&J.transparent===!1?ue(Oa):ue(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),d.setFunc(J.depthFunc),d.setTest(J.depthTest),d.setMask(J.depthWrite),f.setMask(J.colorWrite);const Ot=J.stencilWrite;h.setTest(Ot),Ot&&(h.setMask(J.stencilWriteMask),h.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),h.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),nn(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?ot(o.SAMPLE_ALPHA_TO_COVERAGE):Et(o.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(J){O!==J&&(J?o.frontFace(o.CW):o.frontFace(o.CCW),O=J)}function ie(J){J!==XE?(ot(o.CULL_FACE),J!==B&&(J===Xv?o.cullFace(o.BACK):J===kE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Et(o.CULL_FACE),B=J}function Be(J){J!==q&&(W&&o.lineWidth(J),q=J)}function nn(J,Dt,Mt){J?(ot(o.POLYGON_OFFSET_FILL),(V!==Dt||Q!==Mt)&&(V=Dt,Q=Mt,d.getReversed()&&(Dt=-Dt),o.polygonOffset(Dt,Mt))):Et(o.POLYGON_OFFSET_FILL)}function Pe(J){J?ot(o.SCISSOR_TEST):Et(o.SCISSOR_TEST)}function De(J){J===void 0&&(J=o.TEXTURE0+k-1),ht!==J&&(o.activeTexture(J),ht=J)}function K(J,Dt,Mt){Mt===void 0&&(ht===null?Mt=o.TEXTURE0+k-1:Mt=ht);let Ot=St[Mt];Ot===void 0&&(Ot={type:void 0,texture:void 0},St[Mt]=Ot),(Ot.type!==J||Ot.texture!==Dt)&&(ht!==Mt&&(o.activeTexture(Mt),ht=Mt),o.bindTexture(J,Dt||X[J]),Ot.type=J,Ot.texture=Dt)}function rn(){const J=St[ht];J!==void 0&&J.type!==void 0&&(o.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function Fe(){try{o.compressedTexImage2D(...arguments)}catch(J){He("WebGLState:",J)}}function I(){try{o.compressedTexImage3D(...arguments)}catch(J){He("WebGLState:",J)}}function y(){try{o.texSubImage2D(...arguments)}catch(J){He("WebGLState:",J)}}function it(){try{o.texSubImage3D(...arguments)}catch(J){He("WebGLState:",J)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(J){He("WebGLState:",J)}}function gt(){try{o.compressedTexSubImage3D(...arguments)}catch(J){He("WebGLState:",J)}}function wt(){try{o.texStorage2D(...arguments)}catch(J){He("WebGLState:",J)}}function Lt(){try{o.texStorage3D(...arguments)}catch(J){He("WebGLState:",J)}}function _t(){try{o.texImage2D(...arguments)}catch(J){He("WebGLState:",J)}}function yt(){try{o.texImage3D(...arguments)}catch(J){He("WebGLState:",J)}}function Nt(J){return _[J]!==void 0?_[J]:o.getParameter(J)}function te(J,Dt){_[J]!==Dt&&(o.pixelStorei(J,Dt),_[J]=Dt)}function Bt(J){H.equals(J)===!1&&(o.scissor(J.x,J.y,J.z,J.w),H.copy(J))}function zt(J){mt.equals(J)===!1&&(o.viewport(J.x,J.y,J.z,J.w),mt.copy(J))}function qt(J,Dt){let Mt=m.get(Dt);Mt===void 0&&(Mt=new WeakMap,m.set(Dt,Mt));let Ot=Mt.get(J);Ot===void 0&&(Ot=o.getUniformBlockIndex(Dt,J.name),Mt.set(J,Ot))}function ae(J,Dt){const Ot=m.get(Dt).get(J);p.get(Dt)!==Ot&&(o.uniformBlockBinding(Dt,Ot,J.__bindingPointIndex),p.set(Dt,Ot))}function de(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},_={},ht=null,St={},v={},T=new WeakMap,R=[],P=null,M=!1,x=null,D=null,G=null,C=null,U=null,N=null,z=null,E=new ze(0,0,0),L=0,w=!1,O=null,B=null,q=null,V=null,Q=null,H.set(0,0,o.canvas.width,o.canvas.height),mt.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:ot,disable:Et,bindFramebuffer:Ct,drawBuffers:pt,useProgram:At,setBlending:ue,setMaterial:re,setFlipSided:Yt,setCullFace:ie,setLineWidth:Be,setPolygonOffset:nn,setScissorTest:Pe,activeTexture:De,bindTexture:K,unbindTexture:rn,compressedTexImage2D:Fe,compressedTexImage3D:I,texImage2D:_t,texImage3D:yt,pixelStorei:te,getParameter:Nt,updateUBOMapping:qt,uniformBlockBinding:ae,texStorage2D:wt,texStorage3D:Lt,texSubImage2D:y,texSubImage3D:it,compressedTexSubImage2D:ct,compressedTexSubImage3D:gt,scissor:Bt,viewport:zt,reset:de}}function KC(o,e,i,s,u,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ae,S=new WeakMap,_=new Set;let v;const T=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(I,y){return R?new OffscreenCanvas(I,y):Lc("canvas")}function M(I,y,it){let ct=1;const gt=Fe(I);if((gt.width>it||gt.height>it)&&(ct=it/Math.max(gt.width,gt.height)),ct<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const wt=Math.floor(ct*gt.width),Lt=Math.floor(ct*gt.height);v===void 0&&(v=P(wt,Lt));const _t=y?P(wt,Lt):v;return _t.width=wt,_t.height=Lt,_t.getContext("2d").drawImage(I,0,0,wt,Lt),fe("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+wt+"x"+Lt+")."),_t}else return"data"in I&&fe("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),I;return I}function x(I){return I.generateMipmaps}function D(I){o.generateMipmap(I)}function G(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(I,y,it,ct,gt,wt=!1){if(I!==null){if(o[I]!==void 0)return o[I];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Lt;ct&&(Lt=e.get("EXT_texture_norm16"),Lt||fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _t=y;if(y===o.RED&&(it===o.FLOAT&&(_t=o.R32F),it===o.HALF_FLOAT&&(_t=o.R16F),it===o.UNSIGNED_BYTE&&(_t=o.R8),it===o.UNSIGNED_SHORT&&Lt&&(_t=Lt.R16_EXT),it===o.SHORT&&Lt&&(_t=Lt.R16_SNORM_EXT)),y===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(_t=o.R8UI),it===o.UNSIGNED_SHORT&&(_t=o.R16UI),it===o.UNSIGNED_INT&&(_t=o.R32UI),it===o.BYTE&&(_t=o.R8I),it===o.SHORT&&(_t=o.R16I),it===o.INT&&(_t=o.R32I)),y===o.RG&&(it===o.FLOAT&&(_t=o.RG32F),it===o.HALF_FLOAT&&(_t=o.RG16F),it===o.UNSIGNED_BYTE&&(_t=o.RG8),it===o.UNSIGNED_SHORT&&Lt&&(_t=Lt.RG16_EXT),it===o.SHORT&&Lt&&(_t=Lt.RG16_SNORM_EXT)),y===o.RG_INTEGER&&(it===o.UNSIGNED_BYTE&&(_t=o.RG8UI),it===o.UNSIGNED_SHORT&&(_t=o.RG16UI),it===o.UNSIGNED_INT&&(_t=o.RG32UI),it===o.BYTE&&(_t=o.RG8I),it===o.SHORT&&(_t=o.RG16I),it===o.INT&&(_t=o.RG32I)),y===o.RGB_INTEGER&&(it===o.UNSIGNED_BYTE&&(_t=o.RGB8UI),it===o.UNSIGNED_SHORT&&(_t=o.RGB16UI),it===o.UNSIGNED_INT&&(_t=o.RGB32UI),it===o.BYTE&&(_t=o.RGB8I),it===o.SHORT&&(_t=o.RGB16I),it===o.INT&&(_t=o.RGB32I)),y===o.RGBA_INTEGER&&(it===o.UNSIGNED_BYTE&&(_t=o.RGBA8UI),it===o.UNSIGNED_SHORT&&(_t=o.RGBA16UI),it===o.UNSIGNED_INT&&(_t=o.RGBA32UI),it===o.BYTE&&(_t=o.RGBA8I),it===o.SHORT&&(_t=o.RGBA16I),it===o.INT&&(_t=o.RGBA32I)),y===o.RGB&&(it===o.UNSIGNED_SHORT&&Lt&&(_t=Lt.RGB16_EXT),it===o.SHORT&&Lt&&(_t=Lt.RGB16_SNORM_EXT),it===o.UNSIGNED_INT_5_9_9_9_REV&&(_t=o.RGB9_E5),it===o.UNSIGNED_INT_10F_11F_11F_REV&&(_t=o.R11F_G11F_B10F)),y===o.RGBA){const yt=wt?Uc:Le.getTransfer(gt);it===o.FLOAT&&(_t=o.RGBA32F),it===o.HALF_FLOAT&&(_t=o.RGBA16F),it===o.UNSIGNED_BYTE&&(_t=yt===Ze?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT&&Lt&&(_t=Lt.RGBA16_EXT),it===o.SHORT&&Lt&&(_t=Lt.RGBA16_SNORM_EXT),it===o.UNSIGNED_SHORT_4_4_4_4&&(_t=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(_t=o.RGB5_A1)}return(_t===o.R16F||_t===o.R32F||_t===o.RG16F||_t===o.RG32F||_t===o.RGBA16F||_t===o.RGBA32F)&&e.get("EXT_color_buffer_float"),_t}function U(I,y){let it;return I?y===null||y===ua||y===yl?it=o.DEPTH24_STENCIL8:y===ra?it=o.DEPTH32F_STENCIL8:y===Ml&&(it=o.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ua||y===yl?it=o.DEPTH_COMPONENT24:y===ra?it=o.DEPTH_COMPONENT32F:y===Ml&&(it=o.DEPTH_COMPONENT16),it}function N(I,y){return x(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ln&&I.minFilter!==Bn?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function z(I){const y=I.target;y.removeEventListener("dispose",z),L(y),y.isVideoTexture&&S.delete(y),y.isHTMLTexture&&_.delete(y)}function E(I){const y=I.target;y.removeEventListener("dispose",E),O(y)}function L(I){const y=s.get(I);if(y.__webglInit===void 0)return;const it=I.source,ct=T.get(it);if(ct){const gt=ct[y.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&w(I),Object.keys(ct).length===0&&T.delete(it)}s.remove(I)}function w(I){const y=s.get(I);o.deleteTexture(y.__webglTexture);const it=I.source,ct=T.get(it);delete ct[y.__cacheKey],d.memory.textures--}function O(I){const y=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(y.__webglFramebuffer[ct]))for(let gt=0;gt<y.__webglFramebuffer[ct].length;gt++)o.deleteFramebuffer(y.__webglFramebuffer[ct][gt]);else o.deleteFramebuffer(y.__webglFramebuffer[ct]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[ct])}else{if(Array.isArray(y.__webglFramebuffer))for(let ct=0;ct<y.__webglFramebuffer.length;ct++)o.deleteFramebuffer(y.__webglFramebuffer[ct]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ct=0;ct<y.__webglColorRenderbuffer.length;ct++)y.__webglColorRenderbuffer[ct]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[ct]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const it=I.textures;for(let ct=0,gt=it.length;ct<gt;ct++){const wt=s.get(it[ct]);wt.__webglTexture&&(o.deleteTexture(wt.__webglTexture),d.memory.textures--),s.remove(it[ct])}s.remove(I)}let B=0;function q(){B=0}function V(){return B}function Q(I){B=I}function k(){const I=B;return I>=u.maxTextures&&fe("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+u.maxTextures),B+=1,I}function W(I){const y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function nt(I,y){const it=s.get(I);if(I.isVideoTexture&&K(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&it.__version!==I.version){const ct=I.image;if(ct===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(it,I,y);return}}else I.isExternalTexture&&(it.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+y)}function at(I,y){const it=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&it.__version!==I.version){Et(it,I,y);return}else I.isExternalTexture&&(it.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+y)}function ht(I,y){const it=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&it.__version!==I.version){Et(it,I,y);return}i.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+y)}function St(I,y){const it=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&it.__version!==I.version){Ct(it,I,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+y)}const kt={[op]:o.REPEAT,[La]:o.CLAMP_TO_EDGE,[lp]:o.MIRRORED_REPEAT},Ut={[Ln]:o.NEAREST,[dT]:o.NEAREST_MIPMAP_NEAREST,[$u]:o.NEAREST_MIPMAP_LINEAR,[Bn]:o.LINEAR,[Mh]:o.LINEAR_MIPMAP_NEAREST,[Kr]:o.LINEAR_MIPMAP_LINEAR},H={[gT]:o.NEVER,[MT]:o.ALWAYS,[_T]:o.LESS,[lm]:o.LEQUAL,[vT]:o.EQUAL,[um]:o.GEQUAL,[ST]:o.GREATER,[xT]:o.NOTEQUAL};function mt(I,y){if(y.type===ra&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Bn||y.magFilter===Mh||y.magFilter===$u||y.magFilter===Kr||y.minFilter===Bn||y.minFilter===Mh||y.minFilter===$u||y.minFilter===Kr)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,kt[y.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,kt[y.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,kt[y.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,Ut[y.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,Ut[y.minFilter]),y.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,H[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ln||y.minFilter!==$u&&y.minFilter!==Kr||y.type===ra&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||s.get(y).__currentAnisotropy){const it=e.get("EXT_texture_filter_anisotropic");o.texParameterf(I,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,u.getMaxAnisotropy())),s.get(y).__currentAnisotropy=y.anisotropy}}}function Tt(I,y){let it=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",z));const ct=y.source;let gt=T.get(ct);gt===void 0&&(gt={},T.set(ct,gt));const wt=W(y);if(wt!==I.__cacheKey){gt[wt]===void 0&&(gt[wt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,it=!0),gt[wt].usedTimes++;const Lt=gt[I.__cacheKey];Lt!==void 0&&(gt[I.__cacheKey].usedTimes--,Lt.usedTimes===0&&w(y)),I.__cacheKey=wt,I.__webglTexture=gt[wt].texture}return it}function X(I,y,it){return Math.floor(Math.floor(I/it)/y)}function ot(I,y,it,ct){const wt=I.updateRanges;if(wt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,it,ct,y.data);else{wt.sort((te,Bt)=>te.start-Bt.start);let Lt=0;for(let te=1;te<wt.length;te++){const Bt=wt[Lt],zt=wt[te],qt=Bt.start+Bt.count,ae=X(zt.start,y.width,4),de=X(Bt.start,y.width,4);zt.start<=qt+1&&ae===de&&X(zt.start+zt.count-1,y.width,4)===ae?Bt.count=Math.max(Bt.count,zt.start+zt.count-Bt.start):(++Lt,wt[Lt]=zt)}wt.length=Lt+1;const _t=i.getParameter(o.UNPACK_ROW_LENGTH),yt=i.getParameter(o.UNPACK_SKIP_PIXELS),Nt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let te=0,Bt=wt.length;te<Bt;te++){const zt=wt[te],qt=Math.floor(zt.start/4),ae=Math.ceil(zt.count/4),de=qt%y.width,J=Math.floor(qt/y.width),Dt=ae,Mt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,de),i.pixelStorei(o.UNPACK_SKIP_ROWS,J),i.texSubImage2D(o.TEXTURE_2D,0,de,J,Dt,Mt,it,ct,y.data)}I.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,_t),i.pixelStorei(o.UNPACK_SKIP_PIXELS,yt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Nt)}}function Et(I,y,it){let ct=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ct=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ct=o.TEXTURE_3D);const gt=Tt(I,y),wt=y.source;i.bindTexture(ct,I.__webglTexture,o.TEXTURE0+it);const Lt=s.get(wt);if(wt.version!==Lt.__version||gt===!0){if(i.activeTexture(o.TEXTURE0+it),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const Mt=Le.getPrimaries(Le.workingColorSpace),Ot=y.colorSpace===xr?null:Le.getPrimaries(y.colorSpace),Xt=y.colorSpace===xr||Mt===Ot?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment);let yt=M(y.image,!1,u.maxTextureSize);yt=rn(y,yt);const Nt=f.convert(y.format,y.colorSpace),te=f.convert(y.type);let Bt=C(y.internalFormat,Nt,te,y.normalized,y.colorSpace,y.isVideoTexture);mt(ct,y);let zt;const qt=y.mipmaps,ae=y.isVideoTexture!==!0,de=Lt.__version===void 0||gt===!0,J=wt.dataReady,Dt=N(y,yt);if(y.isDepthTexture)Bt=U(y.format===Qr,y.type),de&&(ae?i.texStorage2D(o.TEXTURE_2D,1,Bt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Bt,yt.width,yt.height,0,Nt,te,null));else if(y.isDataTexture)if(qt.length>0){ae&&de&&i.texStorage2D(o.TEXTURE_2D,Dt,Bt,qt[0].width,qt[0].height);for(let Mt=0,Ot=qt.length;Mt<Ot;Mt++)zt=qt[Mt],ae?J&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,zt.width,zt.height,Nt,te,zt.data):i.texImage2D(o.TEXTURE_2D,Mt,Bt,zt.width,zt.height,0,Nt,te,zt.data);y.generateMipmaps=!1}else ae?(de&&i.texStorage2D(o.TEXTURE_2D,Dt,Bt,yt.width,yt.height),J&&ot(y,yt,Nt,te)):i.texImage2D(o.TEXTURE_2D,0,Bt,yt.width,yt.height,0,Nt,te,yt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ae&&de&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,Bt,qt[0].width,qt[0].height,yt.depth);for(let Mt=0,Ot=qt.length;Mt<Ot;Mt++)if(zt=qt[Mt],y.format!==Hi)if(Nt!==null)if(ae){if(J)if(y.layerUpdates.size>0){const Xt=gS(zt.width,zt.height,y.format,y.type);for(const bt of y.layerUpdates){const $t=zt.data.subarray(bt*Xt/zt.data.BYTES_PER_ELEMENT,(bt+1)*Xt/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,bt,zt.width,zt.height,1,Nt,$t)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,zt.width,zt.height,yt.depth,Nt,zt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Bt,zt.width,zt.height,yt.depth,0,zt.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?J&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,zt.width,zt.height,yt.depth,Nt,te,zt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Bt,zt.width,zt.height,yt.depth,0,Nt,te,zt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ae&&de&&i.texStorage2D(o.TEXTURE_2D,Dt,Bt,qt[0].width,qt[0].height);for(let Mt=0,Ot=qt.length;Mt<Ot;Mt++)zt=qt[Mt],y.format!==Hi?Nt!==null?ae?J&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,zt.width,zt.height,Nt,zt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Bt,zt.width,zt.height,0,zt.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?J&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,zt.width,zt.height,Nt,te,zt.data):i.texImage2D(o.TEXTURE_2D,Mt,Bt,zt.width,zt.height,0,Nt,te,zt.data)}else if(y.isDataArrayTexture)if(ae){if(de&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,Bt,yt.width,yt.height,yt.depth),J)if(y.layerUpdates.size>0){const Mt=gS(yt.width,yt.height,y.format,y.type);for(const Ot of y.layerUpdates){const Xt=yt.data.subarray(Ot*Mt/yt.data.BYTES_PER_ELEMENT,(Ot+1)*Mt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ot,yt.width,yt.height,1,Nt,te,Xt)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Nt,te,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Bt,yt.width,yt.height,yt.depth,0,Nt,te,yt.data);else if(y.isData3DTexture)ae?(de&&i.texStorage3D(o.TEXTURE_3D,Dt,Bt,yt.width,yt.height,yt.depth),J&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Nt,te,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Bt,yt.width,yt.height,yt.depth,0,Nt,te,yt.data);else if(y.isFramebufferTexture){if(de)if(ae)i.texStorage2D(o.TEXTURE_2D,Dt,Bt,yt.width,yt.height);else{let Mt=yt.width,Ot=yt.height;for(let Xt=0;Xt<Dt;Xt++)i.texImage2D(o.TEXTURE_2D,Xt,Bt,Mt,Ot,0,Nt,te,null),Mt>>=1,Ot>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in o){const Mt=o.canvas;if(Mt.hasAttribute("layoutsubtree")||Mt.setAttribute("layoutsubtree","true"),yt.parentNode!==Mt){Mt.appendChild(yt),_.add(y),Mt.onpaint=Ot=>{const Xt=Ot.changedElements;for(const bt of _)Xt.includes(bt.image)&&(bt.needsUpdate=!0)},Mt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,yt);else{const Xt=o.RGBA,bt=o.RGBA,$t=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Xt,bt,$t,yt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(qt.length>0){if(ae&&de){const Mt=Fe(qt[0]);i.texStorage2D(o.TEXTURE_2D,Dt,Bt,Mt.width,Mt.height)}for(let Mt=0,Ot=qt.length;Mt<Ot;Mt++)zt=qt[Mt],ae?J&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Nt,te,zt):i.texImage2D(o.TEXTURE_2D,Mt,Bt,Nt,te,zt);y.generateMipmaps=!1}else if(ae){if(de){const Mt=Fe(yt);i.texStorage2D(o.TEXTURE_2D,Dt,Bt,Mt.width,Mt.height)}J&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Nt,te,yt)}else i.texImage2D(o.TEXTURE_2D,0,Bt,Nt,te,yt);x(y)&&D(ct),Lt.__version=wt.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Ct(I,y,it){if(y.image.length!==6)return;const ct=Tt(I,y),gt=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+it);const wt=s.get(gt);if(gt.version!==wt.__version||ct===!0){i.activeTexture(o.TEXTURE0+it);const Lt=Le.getPrimaries(Le.workingColorSpace),_t=y.colorSpace===xr?null:Le.getPrimaries(y.colorSpace),yt=y.colorSpace===xr||Lt===_t?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Nt=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,Bt=[];for(let bt=0;bt<6;bt++)!Nt&&!te?Bt[bt]=M(y.image[bt],!0,u.maxCubemapSize):Bt[bt]=te?y.image[bt].image:y.image[bt],Bt[bt]=rn(y,Bt[bt]);const zt=Bt[0],qt=f.convert(y.format,y.colorSpace),ae=f.convert(y.type),de=C(y.internalFormat,qt,ae,y.normalized,y.colorSpace),J=y.isVideoTexture!==!0,Dt=wt.__version===void 0||ct===!0,Mt=gt.dataReady;let Ot=N(y,zt);mt(o.TEXTURE_CUBE_MAP,y);let Xt;if(Nt){J&&Dt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,de,zt.width,zt.height);for(let bt=0;bt<6;bt++){Xt=Bt[bt].mipmaps;for(let $t=0;$t<Xt.length;$t++){const Vt=Xt[$t];y.format!==Hi?qt!==null?J?Mt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t,0,0,Vt.width,Vt.height,qt,Vt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t,de,Vt.width,Vt.height,0,Vt.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t,0,0,Vt.width,Vt.height,qt,ae,Vt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t,de,Vt.width,Vt.height,0,qt,ae,Vt.data)}}}else{if(Xt=y.mipmaps,J&&Dt){Xt.length>0&&Ot++;const bt=Fe(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,de,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(te){J?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Bt[bt].width,Bt[bt].height,qt,ae,Bt[bt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,de,Bt[bt].width,Bt[bt].height,0,qt,ae,Bt[bt].data);for(let $t=0;$t<Xt.length;$t++){const Ne=Xt[$t].image[bt].image;J?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t+1,0,0,Ne.width,Ne.height,qt,ae,Ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t+1,de,Ne.width,Ne.height,0,qt,ae,Ne.data)}}else{J?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,qt,ae,Bt[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,de,qt,ae,Bt[bt]);for(let $t=0;$t<Xt.length;$t++){const Vt=Xt[$t];J?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t+1,0,0,qt,ae,Vt.image[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t+1,de,qt,ae,Vt.image[bt])}}}x(y)&&D(o.TEXTURE_CUBE_MAP),wt.__version=gt.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function pt(I,y,it,ct,gt,wt){const Lt=f.convert(it.format,it.colorSpace),_t=f.convert(it.type),yt=C(it.internalFormat,Lt,_t,it.normalized,it.colorSpace),Nt=s.get(y),te=s.get(it);if(te.__renderTarget=y,!Nt.__hasExternalTextures){const Bt=Math.max(1,y.width>>wt),zt=Math.max(1,y.height>>wt);gt===o.TEXTURE_3D||gt===o.TEXTURE_2D_ARRAY?i.texImage3D(gt,wt,yt,Bt,zt,y.depth,0,Lt,_t,null):i.texImage2D(gt,wt,yt,Bt,zt,0,Lt,_t,null)}i.bindFramebuffer(o.FRAMEBUFFER,I),De(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ct,gt,te.__webglTexture,0,Pe(y)):(gt===o.TEXTURE_2D||gt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ct,gt,te.__webglTexture,wt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function At(I,y,it){if(o.bindRenderbuffer(o.RENDERBUFFER,I),y.depthBuffer){const ct=y.depthTexture,gt=ct&&ct.isDepthTexture?ct.type:null,wt=U(y.stencilBuffer,gt),Lt=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;De(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pe(y),wt,y.width,y.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pe(y),wt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,wt,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Lt,o.RENDERBUFFER,I)}else{const ct=y.textures;for(let gt=0;gt<ct.length;gt++){const wt=ct[gt],Lt=f.convert(wt.format,wt.colorSpace),_t=f.convert(wt.type),yt=C(wt.internalFormat,Lt,_t,wt.normalized,wt.colorSpace);De(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pe(y),yt,y.width,y.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pe(y),yt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,yt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ge(I,y,it){const ct=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const gt=s.get(y.depthTexture);if(gt.__renderTarget=y,(!gt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ct){if(gt.__webglInit===void 0&&(gt.__webglInit=!0,y.depthTexture.addEventListener("dispose",z)),gt.__webglTexture===void 0){gt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),mt(o.TEXTURE_CUBE_MAP,y.depthTexture);const Nt=f.convert(y.depthTexture.format),te=f.convert(y.depthTexture.type);let Bt;y.depthTexture.format===Ba?Bt=o.DEPTH_COMPONENT24:y.depthTexture.format===Qr&&(Bt=o.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Bt,y.width,y.height,0,Nt,te,null)}}else nt(y.depthTexture,0);const wt=gt.__webglTexture,Lt=Pe(y),_t=ct?o.TEXTURE_CUBE_MAP_POSITIVE_X+it:o.TEXTURE_2D,yt=y.depthTexture.format===Qr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ba)De(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,_t,wt,0,Lt):o.framebufferTexture2D(o.FRAMEBUFFER,yt,_t,wt,0);else if(y.depthTexture.format===Qr)De(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,_t,wt,0,Lt):o.framebufferTexture2D(o.FRAMEBUFFER,yt,_t,wt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(I){const y=s.get(I),it=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){const ct=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ct){const gt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ct.removeEventListener("dispose",gt)};ct.addEventListener("dispose",gt),y.__depthDisposeCallback=gt}y.__boundDepthTexture=ct}if(I.depthTexture&&!y.__autoAllocateDepthBuffer)if(it)for(let ct=0;ct<6;ct++)ge(y.__webglFramebuffer[ct],I,ct);else{const ct=I.texture.mipmaps;ct&&ct.length>0?ge(y.__webglFramebuffer[0],I,0):ge(y.__webglFramebuffer,I,0)}else if(it){y.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[ct]),y.__webglDepthbuffer[ct]===void 0)y.__webglDepthbuffer[ct]=o.createRenderbuffer(),At(y.__webglDepthbuffer[ct],I,!1);else{const gt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=y.__webglDepthbuffer[ct];o.bindRenderbuffer(o.RENDERBUFFER,wt),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,wt)}}else{const ct=I.texture.mipmaps;if(ct&&ct.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),At(y.__webglDepthbuffer,I,!1);else{const gt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,wt),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,wt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ue(I,y,it){const ct=s.get(I);y!==void 0&&pt(ct.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&oe(I)}function re(I){const y=I.texture,it=s.get(I),ct=s.get(y);I.addEventListener("dispose",E);const gt=I.textures,wt=I.isWebGLCubeRenderTarget===!0,Lt=gt.length>1;if(Lt||(ct.__webglTexture===void 0&&(ct.__webglTexture=o.createTexture()),ct.__version=y.version,d.memory.textures++),wt){it.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0){it.__webglFramebuffer[_t]=[];for(let yt=0;yt<y.mipmaps.length;yt++)it.__webglFramebuffer[_t][yt]=o.createFramebuffer()}else it.__webglFramebuffer[_t]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){it.__webglFramebuffer=[];for(let _t=0;_t<y.mipmaps.length;_t++)it.__webglFramebuffer[_t]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(Lt)for(let _t=0,yt=gt.length;_t<yt;_t++){const Nt=s.get(gt[_t]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=o.createTexture(),d.memory.textures++)}if(I.samples>0&&De(I)===!1){it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let _t=0;_t<gt.length;_t++){const yt=gt[_t];it.__webglColorRenderbuffer[_t]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[_t]);const Nt=f.convert(yt.format,yt.colorSpace),te=f.convert(yt.type),Bt=C(yt.internalFormat,Nt,te,yt.normalized,yt.colorSpace,I.isXRRenderTarget===!0),zt=Pe(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,Bt,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+_t,o.RENDERBUFFER,it.__webglColorRenderbuffer[_t])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),At(it.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(wt){i.bindTexture(o.TEXTURE_CUBE_MAP,ct.__webglTexture),mt(o.TEXTURE_CUBE_MAP,y);for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)pt(it.__webglFramebuffer[_t][yt],I,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,yt);else pt(it.__webglFramebuffer[_t],I,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);x(y)&&D(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Lt){for(let _t=0,yt=gt.length;_t<yt;_t++){const Nt=gt[_t],te=s.get(Nt);let Bt=o.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Bt=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Bt,te.__webglTexture),mt(Bt,Nt),pt(it.__webglFramebuffer,I,Nt,o.COLOR_ATTACHMENT0+_t,Bt,0),x(Nt)&&D(Bt)}i.unbindTexture()}else{let _t=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(_t=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(_t,ct.__webglTexture),mt(_t,y),y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)pt(it.__webglFramebuffer[yt],I,y,o.COLOR_ATTACHMENT0,_t,yt);else pt(it.__webglFramebuffer,I,y,o.COLOR_ATTACHMENT0,_t,0);x(y)&&D(_t),i.unbindTexture()}I.depthBuffer&&oe(I)}function Yt(I){const y=I.textures;for(let it=0,ct=y.length;it<ct;it++){const gt=y[it];if(x(gt)){const wt=G(I),Lt=s.get(gt).__webglTexture;i.bindTexture(wt,Lt),D(wt),i.unbindTexture()}}}const ie=[],Be=[];function nn(I){if(I.samples>0){if(De(I)===!1){const y=I.textures,it=I.width,ct=I.height;let gt=o.COLOR_BUFFER_BIT;const wt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Lt=s.get(I),_t=y.length>1;if(_t)for(let Nt=0;Nt<y.length;Nt++)i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const yt=I.texture.mipmaps;yt&&yt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Nt=0;Nt<y.length;Nt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(gt|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(gt|=o.STENCIL_BUFFER_BIT)),_t){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Nt]);const te=s.get(y[Nt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,te,0)}o.blitFramebuffer(0,0,it,ct,0,0,it,ct,gt,o.NEAREST),p===!0&&(ie.length=0,Be.length=0,ie.push(o.COLOR_ATTACHMENT0+Nt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(ie.push(wt),Be.push(wt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Be)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),_t)for(let Nt=0;Nt<y.length;Nt++){i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Nt]);const te=s.get(y[Nt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,te,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&p){const y=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function Pe(I){return Math.min(u.maxSamples,I.samples)}function De(I){const y=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function K(I){const y=d.render.frame;S.get(I)!==y&&(S.set(I,y),I.update())}function rn(I,y){const it=I.colorSpace,ct=I.format,gt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||it!==Nc&&it!==xr&&(Le.getTransfer(it)===Ze?(ct!==Hi||gt!==mi)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",it)),y}function Fe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=k,this.resetTextureUnits=q,this.getTextureUnits=V,this.setTextureUnits=Q,this.setTexture2D=nt,this.setTexture2DArray=at,this.setTexture3D=ht,this.setTextureCube=St,this.rebindTextures=ue,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function QC(o,e){function i(s,u=xr){let f;const d=Le.getTransfer(u);if(s===mi)return o.UNSIGNED_BYTE;if(s===im)return o.UNSIGNED_SHORT_4_4_4_4;if(s===am)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Tx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===bx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===yx)return o.BYTE;if(s===Ex)return o.SHORT;if(s===Ml)return o.UNSIGNED_SHORT;if(s===nm)return o.INT;if(s===ua)return o.UNSIGNED_INT;if(s===ra)return o.FLOAT;if(s===ca)return o.HALF_FLOAT;if(s===Ax)return o.ALPHA;if(s===Rx)return o.RGB;if(s===Hi)return o.RGBA;if(s===Ba)return o.DEPTH_COMPONENT;if(s===Qr)return o.DEPTH_STENCIL;if(s===Cx)return o.RED;if(s===rm)return o.RED_INTEGER;if(s===jr)return o.RG;if(s===sm)return o.RG_INTEGER;if(s===om)return o.RGBA_INTEGER;if(s===Tc||s===bc||s===Ac||s===Rc)if(d===Ze)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===Tc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===bc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ac)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Rc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===Tc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===bc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ac)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Rc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===up||s===cp||s===fp||s===dp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===up)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===dp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hp||s===pp||s===mp||s===gp||s===_p||s===wc||s===vp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===hp||s===pp)return d===Ze?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===mp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===gp)return f.COMPRESSED_R11_EAC;if(s===_p)return f.COMPRESSED_SIGNED_R11_EAC;if(s===wc)return f.COMPRESSED_RG11_EAC;if(s===vp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Sp||s===xp||s===Mp||s===yp||s===Ep||s===Tp||s===bp||s===Ap||s===Rp||s===Cp||s===wp||s===Dp||s===Np||s===Up)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===Sp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ep)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Tp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ap)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Cp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Np)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Up)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Lp||s===Op||s===Pp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===Lp)return d===Ze?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Op)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Pp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ip||s===zp||s===Dc||s===Bp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===Ip)return f.COMPRESSED_RED_RGTC1_EXT;if(s===zp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Dc)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===yl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const JC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jC=`
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

}`;class $C{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Ix(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new fa({vertexShader:JC,fragmentShader:jC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Zn(new ts(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t3 extends $r{constructor(e,i){super();const s=this;let u=null,f=1,d=null,h="local-floor",p=1,m=null,S=null,_=null,v=null,T=null,R=null;const P=typeof XRWebGLBinding<"u",M=new $C,x={},D=i.getContextAttributes();let G=null,C=null;const U=[],N=[],z=new Ae;let E=null,L=null;const w=new ei;w.viewport=new on;const O=new ei;O.viewport=new on;const B=[w,O],q=new l1;let V=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ot=U[X];return ot===void 0&&(ot=new Dh,U[X]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(X){let ot=U[X];return ot===void 0&&(ot=new Dh,U[X]=ot),ot.getGripSpace()},this.getHand=function(X){let ot=U[X];return ot===void 0&&(ot=new Dh,U[X]=ot),ot.getHandSpace()};function k(X){const ot=N.indexOf(X.inputSource);if(ot===-1)return;const Et=U[ot];Et!==void 0&&(Et.update(X.inputSource,X.frame,m||d),Et.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){u.removeEventListener("select",k),u.removeEventListener("selectstart",k),u.removeEventListener("selectend",k),u.removeEventListener("squeeze",k),u.removeEventListener("squeezestart",k),u.removeEventListener("squeezeend",k),u.removeEventListener("end",W),u.removeEventListener("inputsourceschange",nt);for(let X=0;X<U.length;X++){const ot=N[X];ot!==null&&(N[X]=null,U[X].disconnect(ot))}V=null,Q=null,M.reset();for(const X in x)delete x[X];if(e.setRenderTarget(G),T=null,v=null,_=null,u=null,C=null,Tt.stop(),s.isPresenting=!1,e.setPixelRatio(E),e.setSize(z.width,z.height,!1),L!==null){const X=L.camera;X.fov=L.fov,X.zoom=L.zoom,X.updateProjectionMatrix(),L=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){f=X,s.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){h=X,s.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(X){m=X},this.getBaseLayer=function(){return v!==null?v:T},this.getBinding=function(){return _===null&&P&&(_=new XRWebGLBinding(u,i)),_},this.getFrame=function(){return R},this.getSession=function(){return u},this.setSession=async function(X){if(u=X,u!==null){if(G=e.getRenderTarget(),u.addEventListener("select",k),u.addEventListener("selectstart",k),u.addEventListener("selectend",k),u.addEventListener("squeeze",k),u.addEventListener("squeezestart",k),u.addEventListener("squeezeend",k),u.addEventListener("end",W),u.addEventListener("inputsourceschange",nt),D.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(z),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Ct=null,pt=null;D.depth&&(pt=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=D.stencil?Qr:Ba,Ct=D.stencil?yl:ua);const At={colorFormat:i.RGBA8,depthFormat:pt,scaleFactor:f};_=this.getBinding(),v=_.createProjectionLayer(At),u.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new Gi(v.textureWidth,v.textureHeight,{format:Hi,type:mi,depthTexture:new Tl(v.textureWidth,v.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Et={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:f};T=new XRWebGLLayer(u,i,Et),u.updateRenderState({baseLayer:T}),e.setPixelRatio(1),e.setSize(T.framebufferWidth,T.framebufferHeight,!1),C=new Gi(T.framebufferWidth,T.framebufferHeight,{format:Hi,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1,storeMultisampledDepthBuffer:T.ignoreDepthValues===!1,storeMultisampledStencilBuffer:T.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await u.requestReferenceSpace(h),Tt.setContext(u),Tt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function nt(X){for(let ot=0;ot<X.removed.length;ot++){const Et=X.removed[ot],Ct=N.indexOf(Et);Ct>=0&&(N[Ct]=null,U[Ct].disconnect(Et))}for(let ot=0;ot<X.added.length;ot++){const Et=X.added[ot];let Ct=N.indexOf(Et);if(Ct===-1){for(let At=0;At<U.length;At++)if(At>=N.length){N.push(Et),Ct=At;break}else if(N[At]===null){N[At]=Et,Ct=At;break}if(Ct===-1)break}const pt=U[Ct];pt&&pt.connect(Et)}}const at=new tt,ht=new tt;function St(X,ot,Et){at.setFromMatrixPosition(ot.matrixWorld),ht.setFromMatrixPosition(Et.matrixWorld);const Ct=at.distanceTo(ht),pt=ot.projectionMatrix.elements,At=Et.projectionMatrix.elements,ge=pt[14]/(pt[10]-1),oe=pt[14]/(pt[10]+1),ue=(pt[9]+1)/pt[5],re=(pt[9]-1)/pt[5],Yt=(pt[8]-1)/pt[0],ie=(At[8]+1)/At[0],Be=ge*Yt,nn=ge*ie,Pe=Ct/(-Yt+ie),De=Pe*-Yt;if(ot.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(De),X.translateZ(Pe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),pt[10]===-1)X.projectionMatrix.copy(ot.projectionMatrix),X.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const K=ge+Pe,rn=oe+Pe,Fe=Be-De,I=nn+(Ct-De),y=ue*oe/rn*K,it=re*oe/rn*K;X.projectionMatrix.makePerspective(Fe,I,y,it,K,rn),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function kt(X,ot){ot===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ot.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(u===null)return;let ot=X.near,Et=X.far;M.texture!==null&&(M.depthNear>0&&(ot=M.depthNear),M.depthFar>0&&(Et=M.depthFar)),q.near=O.near=w.near=ot,q.far=O.far=w.far=Et,(V!==q.near||Q!==q.far)&&(u.updateRenderState({depthNear:q.near,depthFar:q.far}),V=q.near,Q=q.far),q.layers.mask=X.layers.mask|6,w.layers.mask=q.layers.mask&-5,O.layers.mask=q.layers.mask&-3;const Ct=X.parent,pt=q.cameras;kt(q,Ct);for(let At=0;At<pt.length;At++)kt(pt[At],Ct);pt.length===2?St(q,w,O):q.projectionMatrix.copy(w.projectionMatrix),L===null&&X.isPerspectiveCamera&&(L={camera:X,fov:X.fov,zoom:X.zoom}),Ut(X,q,Ct)};function Ut(X,ot,Et){Et===null?X.matrix.copy(ot.matrixWorld):(X.matrix.copy(Et.matrixWorld),X.matrix.invert(),X.matrix.multiply(ot.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ot.projectionMatrix),X.projectionMatrixInverse.copy(ot.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Hp*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(v===null&&T===null))return p},this.setFoveation=function(X){p=X,v!==null&&(v.fixedFoveation=X),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=X)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(X){return x[X]};let H=null;function mt(X,ot){if(S=ot.getViewerPose(m||d),R=ot,S!==null){const Et=S.views;T!==null&&(e.setRenderTargetFramebuffer(C,T.framebuffer),e.setRenderTarget(C));let Ct=!1;Et.length!==q.cameras.length&&(q.cameras.length=0,Ct=!0);for(let oe=0;oe<Et.length;oe++){const ue=Et[oe];let re=null;if(T!==null)re=T.getViewport(ue);else{const ie=_.getViewSubImage(v,ue);re=ie.viewport,oe===0&&(e.setRenderTargetTextures(C,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(C))}let Yt=B[oe];Yt===void 0&&(Yt=new ei,Yt.layers.enable(oe),Yt.viewport=new on,B[oe]=Yt),Yt.matrix.fromArray(ue.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(ue.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(re.x,re.y,re.width,re.height),oe===0&&(q.matrix.copy(Yt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ct===!0&&q.cameras.push(Yt)}const pt=u.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&P){_=s.getBinding();const oe=_.getDepthInformation(Et[0]);oe&&oe.isValid&&oe.texture&&M.init(oe,u.renderState)}if(pt&&pt.includes("camera-access")&&P){e.state.unbindTexture(),_=s.getBinding();for(let oe=0;oe<Et.length;oe++){const ue=Et[oe].camera;if(ue){let re=x[ue];re||(re=new Ix,x[ue]=re);const Yt=_.getCameraImage(ue);re.sourceTexture=Yt}}}}for(let Et=0;Et<U.length;Et++){const Ct=N[Et],pt=U[Et];Ct!==null&&pt!==void 0&&pt.update(Ct,ot,m||d)}H&&H(X,ot),ot.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ot}),R=null}const Tt=new Fx;Tt.setAnimationLoop(mt),this.setAnimationLoop=function(X){H=X},this.dispose=function(){}}}const e3=new en,Wx=new me;Wx.set(-1,0,0,0,1,0,0,0,1);function n3(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,zx(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function u(M,x,D,G,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?f(M,x):x.isMeshLambertMaterial?(f(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(f(M,x),_(M,x)):x.isMeshPhongMaterial?(f(M,x),S(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(f(M,x),v(M,x),x.isMeshPhysicalMaterial&&T(M,x,C)):x.isMeshMatcapMaterial?(f(M,x),R(M,x)):x.isMeshDepthMaterial?f(M,x):x.isMeshDistanceMaterial?(f(M,x),P(M,x)):x.isMeshNormalMaterial?f(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?p(M,x,D,G):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===ni&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===ni&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const D=e.get(x),G=D.envMap,C=D.envMapRotation;G&&(M.envMap.value=G,M.envMapRotation.value.setFromMatrix4(e3.makeRotationFromEuler(C)).transpose(),G.isCubeTexture&&G.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Wx),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,D,G){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*D,M.scale.value=G*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function S(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function T(M,x,D){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ni&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.retroreflectivity>0&&(M.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function R(M,x){x.matcap&&(M.matcap.value=x.matcap)}function P(M,x){const D=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function i3(o,e,i,s){let u={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,U){const N=U.program;s.uniformBlockBinding(C,N)}function m(C,U){let N=u[C.id];N===void 0&&(M(C),N=S(C),u[C.id]=N,C.addEventListener("dispose",D));const z=U.program;s.updateUBOMapping(C,z);const E=e.render.frame;f[C.id]!==E&&(v(C),f[C.id]=E)}function S(C){const U=_();C.__bindingPointIndex=U;const N=o.createBuffer(),z=C.__size,E=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,z,E),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,N),N}function _(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const U=u[C.id],N=C.uniforms,z=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let E=0,L=N.length;E<L;E++){const w=N[E];if(Array.isArray(w))for(let O=0,B=w.length;O<B;O++)T(w[O],E,O,z);else T(w,E,0,z)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function T(C,U,N,z){if(P(C,U,N,z)===!0){const E=C.__offset,L=C.value;if(Array.isArray(L)){let w=0;for(let O=0;O<L.length;O++){const B=L[O],q=x(B);R(B,C.__data,w),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(w+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(L,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,E,C.__data)}}function R(C,U,N){typeof C=="number"||typeof C=="boolean"?U[0]=C:C.isMatrix3?(U[0]=C.elements[0],U[1]=C.elements[1],U[2]=C.elements[2],U[3]=0,U[4]=C.elements[3],U[5]=C.elements[4],U[6]=C.elements[5],U[7]=0,U[8]=C.elements[6],U[9]=C.elements[7],U[10]=C.elements[8],U[11]=0):ArrayBuffer.isView(C)?U.set(new C.constructor(C.buffer,C.byteOffset,U.length)):C.toArray(U,N)}function P(C,U,N,z){const E=C.value,L=U+"_"+N;if(z[L]===void 0)return typeof E=="number"||typeof E=="boolean"?z[L]=E:ArrayBuffer.isView(E)?z[L]=E.slice():z[L]=E.clone(),!0;{const w=z[L];if(typeof E=="number"||typeof E=="boolean"){if(w!==E)return z[L]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(w.equals(E)===!1)return w.copy(E),!0}}return!1}function M(C){const U=C.uniforms;let N=0;const z=16;for(let L=0,w=U.length;L<w;L++){const O=Array.isArray(U[L])?U[L]:[U[L]];for(let B=0,q=O.length;B<q;B++){const V=O[B],Q=Array.isArray(V.value)?V.value:[V.value];for(let k=0,W=Q.length;k<W;k++){const nt=Q[k],at=x(nt),ht=N%z,St=ht%at.boundary,kt=ht+St;N+=St,kt!==0&&z-kt<at.storage&&(N+=z-kt),V.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=N,N+=at.storage}}}const E=N%z;return E>0&&(N+=z-E),C.__size=N,C.__cache={},this}function x(C){const U={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(U.boundary=4,U.storage=4):C.isVector2?(U.boundary=8,U.storage=8):C.isVector3||C.isColor?(U.boundary=16,U.storage=12):C.isVector4?(U.boundary=16,U.storage=16):C.isMatrix3?(U.boundary=48,U.storage=48):C.isMatrix4?(U.boundary=64,U.storage=64):C.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(U.boundary=16,U.storage=C.byteLength):fe("WebGLRenderer: Unsupported uniform value type.",C),U}function D(C){const U=C.target;U.removeEventListener("dispose",D);const N=d.indexOf(U.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(u[U.id]),delete u[U.id],delete f[U.id]}function G(){for(const C in u)o.deleteBuffer(u[C]);d=[],u={},f={}}return{bind:p,update:m,dispose:G}}const a3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ia=null;function r3(){return ia===null&&(ia=new KT(a3,16,16,jr,ca),ia.name="DFG_LUT",ia.minFilter=Bn,ia.magFilter=Bn,ia.wrapS=La,ia.wrapT=La,ia.generateMipmaps=!1,ia.needsUpdate=!0),ia}class Em{constructor(e={}){const{canvas:i=TT(),context:s=null,depth:u=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:T=mi}=e;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=d;const P=T,M=new Set([om,sm,rm]),x=new Set([mi,ua,Ml,yl,im,am]),D=new Uint32Array(4),G=new Int32Array(4),C=new tt;let U=null,N=null;const z=[],E=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let O=!1,B=null,q=null,V=null,Q=null;this._outputColorSpace=Yn;let k=0,W=0,nt=null,at=-1,ht=null;const St=new on,kt=new on;let Ut=null;const H=new ze(0);let mt=0,Tt=i.width,X=i.height,ot=1,Et=null,Ct=null;const pt=new on(0,0,Tt,X),At=new on(0,0,Tt,X);let ge=!1;const oe=new hm;let ue=!1,re=!1;const Yt=new en,ie=new tt,Be=new on,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function De(){return nt===null?ot:1}let K=s;function rn(b,Y){return i.getContext(b,Y)}let Fe,I,y,it,ct,gt,wt,Lt,_t,yt,Nt,te,Bt,zt,qt,ae,de,J,Dt,Mt,Ot,Xt,bt;try{const b={alpha:!0,depth:u,stencil:f,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:S,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${em}`),i.addEventListener("webglcontextlost",Ne,!1),i.addEventListener("webglcontextrestored",he,!1),i.addEventListener("webglcontextcreationerror",ii,!1),K===null){const Y="webgl2";if(K=rn(Y,b),K===null)throw rn(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(b){throw i.removeEventListener("webglcontextlost",Ne,!1),i.removeEventListener("webglcontextrestored",he,!1),i.removeEventListener("webglcontextcreationerror",ii,!1),He("WebGLRenderer: "+b.message),b}function $t(){Fe=new rR(K),Fe.init(),Ot=new QC(K,Fe),I=new KA(K,Fe,e,Ot),y=new ZC(K,Fe),I.reversedDepthBuffer&&v&&y.buffers.depth.setReversed(!0),q=K.createFramebuffer(),V=K.createFramebuffer(),Q=K.createFramebuffer(),it=new lR(K),ct=new OC,gt=new KC(K,Fe,y,ct,I,Ot,it),wt=new aR(w),Lt=new c1(K),Xt=new YA(K,Lt),_t=new sR(K,Lt,it,Xt),yt=new cR(K,_t,Lt,Xt,it),J=new uR(K,I,gt),qt=new QA(ct),Nt=new LC(w,wt,Fe,I,Xt,qt),te=new n3(w,ct),Bt=new IC,zt=new VC(Fe),de=new WA(w,wt,y,yt,R,p),ae=new YC(w,yt,I),bt=new i3(K,it,I,y),Dt=new ZA(K,Fe,it),Mt=new oR(K,Fe,it),it.programs=Nt.programs,w.capabilities=I,w.extensions=Fe,w.properties=ct,w.renderLists=Bt,w.shadowMap=ae,w.state=y,w.info=it}P!==mi&&(L=new dR(P,i.width,i.height,h,u,f));const Vt=new t3(w,K);this.xr=Vt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const b=Fe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Fe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(b){b!==void 0&&(ot=b,this.setSize(Tt,X,!1))},this.getSize=function(b){return b.set(Tt,X)},this.setSize=function(b,Y,dt=!0){if(Vt.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=b,X=Y,i.width=Math.floor(b*ot),i.height=Math.floor(Y*ot),dt===!0&&(i.style.width=b+"px",i.style.height=Y+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,b,Y)},this.getDrawingBufferSize=function(b){return b.set(Tt*ot,X*ot).floor()},this.setDrawingBufferSize=function(b,Y,dt){Tt=b,X=Y,ot=dt,i.width=Math.floor(b*dt),i.height=Math.floor(Y*dt),this.setViewport(0,0,b,Y)},this.setEffects=function(b){if(P===mi){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let Y=0;Y<b.length;Y++)if(b[Y].isOutputPass===!0){fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(St)},this.getViewport=function(b){return b.copy(pt)},this.setViewport=function(b,Y,dt,st){b.isVector4?pt.set(b.x,b.y,b.z,b.w):pt.set(b,Y,dt,st),y.viewport(St.copy(pt).multiplyScalar(ot).round())},this.getScissor=function(b){return b.copy(At)},this.setScissor=function(b,Y,dt,st){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,Y,dt,st),y.scissor(kt.copy(At).multiplyScalar(ot).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(b){y.setScissorTest(ge=b)},this.setOpaqueSort=function(b){Et=b},this.setTransparentSort=function(b){Ct=b},this.getClearColor=function(b){return b.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(b=!0,Y=!0,dt=!0){let st=0;if(b){let lt=!1;if(nt!==null){const Ft=nt.texture.format;lt=M.has(Ft)}if(lt){const Ft=nt.texture.type,Wt=x.has(Ft),Pt=de.getClearColor(),Qt=de.getClearAlpha(),Jt=Pt.r,le=Pt.g,pe=Pt.b;Wt?(D[0]=Jt,D[1]=le,D[2]=pe,D[3]=Qt,K.clearBufferuiv(K.COLOR,0,D)):(G[0]=Jt,G[1]=le,G[2]=pe,G[3]=Qt,K.clearBufferiv(K.COLOR,0,G))}else st|=K.COLOR_BUFFER_BIT}Y&&(st|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),dt&&(st|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&K.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),B=b},this.dispose=function(){i.removeEventListener("webglcontextlost",Ne,!1),i.removeEventListener("webglcontextrestored",he,!1),i.removeEventListener("webglcontextcreationerror",ii,!1),de.dispose(),Bt.dispose(),zt.dispose(),ct.dispose(),wt.dispose(),yt.dispose(),Xt.dispose(),bt.dispose(),Nt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",yr),Vt.removeEventListener("sessionend",Ha),Vi.stop()};function Ne(b){b.preventDefault(),Kv("WebGLRenderer: Context Lost."),O=!0}function he(){Kv("WebGLRenderer: Context Restored."),O=!1;const b=it.autoReset,Y=ae.enabled,dt=ae.autoUpdate,st=ae.needsUpdate,lt=ae.type;$t(),it.autoReset=b,ae.enabled=Y,ae.autoUpdate=dt,ae.needsUpdate=st,ae.type=lt}function ii(b){He("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function _i(b){const Y=b.target;Y.removeEventListener("dispose",_i),Gc(Y)}function Gc(b){es(b),ct.remove(b)}function es(b){const Y=ct.get(b).programs;Y!==void 0&&(Y.forEach(function(dt){Nt.releaseProgram(dt)}),b.isShaderMaterial&&Nt.releaseShaderCache(b))}this.renderBufferDirect=function(b,Y,dt,st,lt,Ft){Y===null&&(Y=nn);const Wt=lt.isMesh&&lt.matrixWorld.determinantAffine()<0,Pt=vo(b,Y,dt,st,lt);y.setMaterial(st,Wt);let Qt=dt.index,Jt=1;if(st.wireframe===!0){if(Qt=_t.getWireframeAttribute(dt),Qt===void 0)return;Jt=2}const le=dt.drawRange,pe=dt.attributes.position;let Zt=le.start*Jt,Ee=(le.start+le.count)*Jt;Ft!==null&&(Zt=Math.max(Zt,Ft.start*Jt),Ee=Math.min(Ee,(Ft.start+Ft.count)*Jt)),Qt!==null?(Zt=Math.max(Zt,0),Ee=Math.min(Ee,Qt.count)):pe!=null&&(Zt=Math.max(Zt,0),Ee=Math.min(Ee,pe.count));const xe=Ee-Zt;if(xe<0||xe===1/0)return;Xt.setup(lt,st,Pt,dt,Qt);let Ke,Xe=Dt;if(Qt!==null&&(Ke=Lt.get(Qt),Xe=Mt,Xe.setIndex(Ke)),lt.isMesh)st.wireframe===!0?(y.setLineWidth(st.wireframeLinewidth*De()),Xe.setMode(K.LINES)):Xe.setMode(K.TRIANGLES);else if(lt.isLine){let Sn=st.linewidth;Sn===void 0&&(Sn=1),y.setLineWidth(Sn*De()),lt.isLineSegments?Xe.setMode(K.LINES):lt.isLineLoop?Xe.setMode(K.LINE_LOOP):Xe.setMode(K.LINE_STRIP)}else lt.isPoints?Xe.setMode(K.POINTS):lt.isSprite&&Xe.setMode(K.TRIANGLES);if(lt.isBatchedMesh)if(Fe.get("WEBGL_multi_draw"))Xe.renderMultiDraw(lt._multiDrawStarts,lt._multiDrawCounts,lt._multiDrawCount);else{const Sn=lt._multiDrawStarts,Ht=lt._multiDrawCounts,ln=lt._multiDrawCount,Ue=Qt?Lt.get(Qt).bytesPerElement:1,Gn=ct.get(st).currentProgram.getUniforms();for(let ai=0;ai<ln;ai++)Gn.setValue(K,"_gl_DrawID",ai),Xe.render(Sn[ai]/Ue,Ht[ai])}else if(lt.isInstancedMesh)Xe.renderInstances(Zt,xe,lt.count);else if(dt.isInstancedBufferGeometry){const Sn=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Ht=Math.min(dt.instanceCount,Sn);Xe.renderInstances(Zt,xe,Ht)}else Xe.render(Zt,xe)};function Mr(b,Y,dt,st){B!==null&&b.isNodeMaterial&&B.setObject(st,b),ue===!0&&qt.setState(b,dt,!1),b.transparent===!0&&b.side===Ua&&b.forceSinglePass===!1?(b.side=ni,b.needsUpdate=!0,Er(b,Y,st),b.side=la,b.needsUpdate=!0,Er(b,Y,st),b.side=Ua):Er(b,Y,st)}this.compile=function(b,Y,dt=null){dt===null&&(dt=b),B!==null&&B.renderStart(b,Y,dt),N=zt.get(dt),N.init(Y),E.push(N),dt.traverseVisible(function(lt){lt.isLight&&lt.layers.test(Y.layers)&&(N.pushLight(lt),lt.castShadow&&N.pushShadow(lt))}),b!==dt&&b.traverseVisible(function(lt){lt.isLight&&lt.layers.test(Y.layers)&&(N.pushLight(lt),lt.castShadow&&N.pushShadow(lt))}),N.setupLights(),B!==null&&B.updateLights(N.state.lightsArray),re=this.localClippingEnabled,ue=qt.init(this.clippingPlanes,re),ue===!0&&qt.setGlobalState(this.clippingPlanes,Y),B!==null&&ae.render(N.state.shadowsArray,dt,Y);const st=new Set;return b.traverse(function(lt){if(!(lt.isMesh||lt.isPoints||lt.isLine||lt.isSprite))return;const Ft=lt.material;if(Ft)if(Array.isArray(Ft))for(let Wt=0;Wt<Ft.length;Wt++){const Pt=Ft[Wt];Mr(Pt,dt,Y,lt),st.add(Pt)}else Mr(Ft,dt,Y,lt),st.add(Ft)}),N=E.pop(),B!==null&&B.renderEnd(),st},this.compileAsync=function(b,Y,dt=null){const st=this.compile(b,Y,dt);return new Promise(lt=>{function Ft(){if(st.forEach(function(Wt){const Qt=ct.get(Wt).currentProgram;(Qt===void 0||Qt.isReady())&&st.delete(Wt)}),st.size===0){lt(b);return}setTimeout(Ft,10)}Fe.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let Fa=null;function da(b){Fa&&Fa(b)}function yr(){Vi.stop()}function Ha(){Vi.start()}const Vi=new Fx;Vi.setAnimationLoop(da),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(b){Fa=b,Vt.setAnimationLoop(b),b===null?Vi.stop():Vi.start()},Vt.addEventListener("sessionstart",yr),Vt.addEventListener("sessionend",Ha),this.render=function(b,Y){if(Y!==void 0&&Y.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;B!==null&&B.renderStart(b,Y);const dt=Vt.enabled===!0&&Vt.isPresenting===!0,st=L!==null&&(nt===null||dt)&&L.begin(w,nt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(Y),Y=Vt.getCamera()),b.isScene===!0&&b.onBeforeRender(w,b,Y,nt),N=zt.get(b,E.length),N.init(Y),N.state.textureUnits=gt.getTextureUnits(),E.push(N),Yt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),oe.setFromProjectionMatrix(Yt,sa,Y.reversedDepth),re=this.localClippingEnabled,ue=qt.init(this.clippingPlanes,re),U=Bt.get(b,z.length),U.init(),z.push(U),Vt.enabled===!0&&Vt.isPresenting===!0){const Wt=w.xr.getDepthSensingMesh();Wt!==null&&ho(Wt,Y,-1/0,w.sortObjects)}ho(b,Y,0,w.sortObjects),U.finish(),B!==null&&B.updateLights(N.state.lightsArray),w.sortObjects===!0&&U.sort(Et,Ct),Pe=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,Pe&&de.addToRenderList(U,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ue===!0&&qt.beginShadows();const lt=N.state.shadowsArray;if(ae.render(lt,b,Y),ue===!0&&qt.endShadows(),(st&&L.hasRenderPass())===!1){const Wt=U.opaque,Pt=U.transmissive;if(N.setupLights(),Y.isArrayCamera){const Qt=Y.cameras;if(Pt.length>0)for(let Jt=0,le=Qt.length;Jt<le;Jt++){const pe=Qt[Jt];ns(Wt,Pt,b,pe)}Pe&&de.render(b);for(let Jt=0,le=Qt.length;Jt<le;Jt++){const pe=Qt[Jt];po(U,b,pe,pe.viewport)}}else Pt.length>0&&ns(Wt,Pt,b,Y),Pe&&de.render(b),po(U,b,Y)}nt!==null&&W===0&&(gt.updateMultisampleRenderTarget(nt),gt.updateRenderTargetMipmap(nt)),st&&L.end(w),b.isScene===!0&&b.onAfterRender(w,b,Y),Xt.resetDefaultState(),at=-1,ht=null,E.pop(),E.length>0?(N=E[E.length-1],gt.setTextureUnits(N.state.textureUnits),ue===!0&&qt.setGlobalState(w.clippingPlanes,N.state.camera)):N=null,z.pop(),z.length>0?U=z[z.length-1]:U=null,B!==null&&B.renderEnd()};function ho(b,Y,dt,st){if(b.visible===!1)return;if(b.layers.test(Y.layers)){if(b.isGroup)dt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Y);else if(b.isLightProbeGrid)N.pushLightProbeGrid(b);else if(b.isLight)N.pushLight(b),b.castShadow&&N.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(oe)){st&&Be.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Yt);const Wt=yt.update(b),Pt=b.material;Pt.visible&&U.push(b,Wt,Pt,dt,Be.z,null,Y)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(oe))){const Wt=yt.update(b),Pt=b.material;if(st&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Be.copy(b.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),Be.copy(Wt.boundingSphere.center)),Be.applyMatrix4(b.matrixWorld).applyMatrix4(Yt)),Array.isArray(Pt)){const Qt=Wt.groups;for(let Jt=0,le=Qt.length;Jt<le;Jt++){const pe=Qt[Jt],Zt=Pt[pe.materialIndex];Zt&&Zt.visible&&U.push(b,Wt,Zt,dt,Be.z,pe,Y)}}else Pt.visible&&U.push(b,Wt,Pt,dt,Be.z,null,Y)}}const Ft=b.children;for(let Wt=0,Pt=Ft.length;Wt<Pt;Wt++)ho(Ft[Wt],Y,dt,st)}function po(b,Y,dt,st){const{opaque:lt,transmissive:Ft,transparent:Wt}=b;N.setupLightsView(dt),ue===!0&&qt.setGlobalState(w.clippingPlanes,dt),st&&y.viewport(St.copy(st)),lt.length>0&&Xi(lt,Y,dt),Ft.length>0&&Xi(Ft,Y,dt),Wt.length>0&&Xi(Wt,Y,dt),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ns(b,Y,dt,st){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[st.id]===void 0){const Zt=Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[st.id]=new Gi(1,1,{generateMipmaps:!0,type:Zt?ca:mi,minFilter:Kr,samples:Math.max(4,I.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Le.workingColorSpace})}const Ft=N.state.transmissionRenderTarget[st.id],Wt=st.viewport||St;Ft.setSize(Wt.z*w.transmissionResolutionScale,Wt.w*w.transmissionResolutionScale);const Pt=w.getRenderTarget(),Qt=w.getActiveCubeFace(),Jt=w.getActiveMipmapLevel();w.setRenderTarget(Ft),w.getClearColor(H),mt=w.getClearAlpha(),mt<1&&w.setClearColor(16777215,.5),w.clear(),Pe&&de.render(dt);const le=w.toneMapping;w.toneMapping=oa;const pe=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),N.setupLightsView(st),ue===!0&&qt.setGlobalState(w.clippingPlanes,st),Xi(b,dt,st),gt.updateMultisampleRenderTarget(Ft),gt.updateRenderTargetMipmap(Ft),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ee=0,xe=Y.length;Ee<xe;Ee++){const Ke=Y[Ee],{object:Xe,geometry:Sn,material:Ht,group:ln}=Ke;if(Ht.side===Ua&&Xe.layers.test(st.layers)){const Ue=Ht.side;Ht.side=ni,Ht.needsUpdate=!0,Nl(Xe,dt,st,Sn,Ht,ln),Ht.side=Ue,Ht.needsUpdate=!0,Zt=!0}}Zt===!0&&(gt.updateMultisampleRenderTarget(Ft),gt.updateRenderTargetMipmap(Ft))}w.setRenderTarget(Pt,Qt,Jt),w.setClearColor(H,mt),pe!==void 0&&(st.viewport=pe),w.toneMapping=le}function Xi(b,Y,dt){const st=Y.isScene===!0?Y.overrideMaterial:null;for(let lt=0,Ft=b.length;lt<Ft;lt++){const Wt=b[lt],{object:Pt,geometry:Qt,group:Jt}=Wt;let le=Wt.material;le.allowOverride===!0&&st!==null&&(le=st),Pt.layers.test(dt.layers)&&Nl(Pt,Y,dt,Qt,le,Jt)}}function Nl(b,Y,dt,st,lt,Ft){B!==null&&lt.isNodeMaterial&&B.setObject(b,lt),b.onBeforeRender(w,Y,dt,st,lt,Ft),b.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),lt.onBeforeRender(w,Y,dt,st,b,Ft),lt.transparent===!0&&lt.side===Ua&&lt.forceSinglePass===!1?(lt.side=ni,lt.needsUpdate=!0,w.renderBufferDirect(dt,Y,st,lt,b,Ft),lt.side=la,lt.needsUpdate=!0,w.renderBufferDirect(dt,Y,st,lt,b,Ft),lt.side=Ua):w.renderBufferDirect(dt,Y,st,lt,b,Ft),b.onAfterRender(w,Y,dt,st,lt,Ft)}function Er(b,Y,dt){Y.isScene!==!0&&(Y=nn);const st=ct.get(b),lt=N.state.lights,Ft=N.state.shadowsArray,Wt=lt.state.version,Pt=Nt.getParameters(b,lt.state,Ft,Y,dt,N.state.lightProbeGridArray),Qt=Nt.getProgramCacheKey(Pt);let Jt=st.programs;st.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?Y.environment:null,st.fog=Y.fog;const le=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;st.envMap=wt.get(b.envMap||st.environment,le),st.envMapRotation=st.environment!==null&&b.envMap===null?Y.environmentRotation:b.envMapRotation,Jt===void 0&&(b.addEventListener("dispose",_i),Jt=new Map,st.programs=Jt);let pe=Jt.get(Qt);if(pe!==void 0){if(st.currentProgram===pe&&st.lightsStateVersion===Wt)return go(b,Pt),pe}else Pt.uniforms=Nt.getUniforms(b),B!==null&&b.isNodeMaterial&&B.build(b,dt,Pt),b.onBeforeCompile(Pt,w),pe=Nt.acquireProgram(Pt,Qt),Jt.set(Qt,pe),st.uniforms=Pt.uniforms;const Zt=st.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Zt.clippingPlanes=qt.uniform),go(b,Pt),st.needsLights=Ll(b),st.lightsStateVersion=Wt,st.needsLights&&(Zt.ambientLightColor.value=lt.state.ambient,Zt.lightProbe.value=lt.state.probe,Zt.sunLights.value=lt.state.sun,Zt.sunLightShadows.value=lt.state.sunShadow,Zt.directionalLights.value=lt.state.directional,Zt.directionalLightShadows.value=lt.state.directionalShadow,Zt.spotLights.value=lt.state.spot,Zt.spotLightShadows.value=lt.state.spotShadow,Zt.rectAreaLights.value=lt.state.rectArea,Zt.ltc_1.value=lt.state.rectAreaLTC1,Zt.ltc_2.value=lt.state.rectAreaLTC2,Zt.pointLights.value=lt.state.point,Zt.pointLightShadows.value=lt.state.pointShadow,Zt.hemisphereLights.value=lt.state.hemi,Zt.sunShadowMatrix.value=lt.state.sunShadowMatrix,Zt.sunShadowCascade.value=lt.state.sunShadowCascade,Zt.directionalShadowMatrix.value=lt.state.directionalShadowMatrix,Zt.spotLightMatrix.value=lt.state.spotLightMatrix,Zt.spotLightMap.value=lt.state.spotLightMap,Zt.pointShadowMatrix.value=lt.state.pointShadowMatrix),st.lightProbeGrid=N.state.lightProbeGridArray.length>0,st.currentProgram=pe,st.uniformsList=null,pe}function mo(b){if(b.uniformsList===null){const Y=b.currentProgram.getUniforms();b.uniformsList=Cc.seqWithValue(Y.seq,b.uniforms)}return b.uniformsList}function go(b,Y){const dt=ct.get(b);dt.outputColorSpace=Y.outputColorSpace,dt.batching=Y.batching,dt.batchingColor=Y.batchingColor,dt.instancing=Y.instancing,dt.instancingColor=Y.instancingColor,dt.instancingMorph=Y.instancingMorph,dt.skinning=Y.skinning,dt.morphTargets=Y.morphTargets,dt.morphNormals=Y.morphNormals,dt.morphColors=Y.morphColors,dt.morphTargetsCount=Y.morphTargetsCount,dt.numClippingPlanes=Y.numClippingPlanes,dt.numIntersection=Y.numClipIntersection,dt.vertexAlphas=Y.vertexAlphas,dt.vertexTangents=Y.vertexTangents,dt.toneMapping=Y.toneMapping}function _o(b,Y){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;C.setFromMatrixPosition(Y.matrixWorld);for(let dt=0,st=b.length;dt<st;dt++){const lt=b[dt];if(lt.texture!==null&&lt.boundingBox.containsPoint(C))return lt}return null}function vo(b,Y,dt,st,lt){Y.isScene!==!0&&(Y=nn),gt.resetTextureUnits();const Ft=Y.fog,Wt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?Y.environment:null,Pt=nt===null?w.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Le.workingColorSpace,Qt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Jt=wt.get(st.envMap||Wt,Qt),le=st.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pe=!!dt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Zt=!!dt.morphAttributes.position,Ee=!!dt.morphAttributes.normal,xe=!!dt.morphAttributes.color;let Ke=oa;st.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ke=w.toneMapping);const Xe=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,Sn=Xe!==void 0?Xe.length:0,Ht=ct.get(st),ln=N.state.lights;if(ue===!0&&(re===!0||b!==ht)){const Re=b===ht&&st.id===at;qt.setState(st,b,Re)}let Ue=!1;st.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==ln.state.version||Ht.outputColorSpace!==Pt||lt.isBatchedMesh&&Ht.batching===!1||!lt.isBatchedMesh&&Ht.batching===!0||lt.isBatchedMesh&&Ht.batchingColor===!0&&lt._colorsTexture===null||lt.isBatchedMesh&&Ht.batchingColor===!1&&lt._colorsTexture!==null||lt.isInstancedMesh&&Ht.instancing===!1||!lt.isInstancedMesh&&Ht.instancing===!0||lt.isSkinnedMesh&&Ht.skinning===!1||!lt.isSkinnedMesh&&Ht.skinning===!0||lt.isInstancedMesh&&Ht.instancingColor===!0&&lt.instanceColor===null||lt.isInstancedMesh&&Ht.instancingColor===!1&&lt.instanceColor!==null||lt.isInstancedMesh&&Ht.instancingMorph===!0&&lt.morphTexture===null||lt.isInstancedMesh&&Ht.instancingMorph===!1&&lt.morphTexture!==null||Ht.envMap!==Jt||st.fog===!0&&Ht.fog!==Ft||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==qt.numPlanes||Ht.numIntersection!==qt.numIntersection)||Ht.vertexAlphas!==le||Ht.vertexTangents!==pe||Ht.morphTargets!==Zt||Ht.morphNormals!==Ee||Ht.morphColors!==xe||Ht.toneMapping!==Ke||Ht.morphTargetsCount!==Sn||!!Ht.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(Ue=!0):(Ue=!0,Ht.__version=st.version);let Gn=Ht.currentProgram;Ue===!0&&(Gn=Er(st,Y,lt),B&&st.isNodeMaterial&&B.onUpdateProgram(st,Gn,Ht));let ai=!1,ki=!1,Me=!1;const Ge=Gn.getUniforms(),je=Ht.uniforms;if(y.useProgram(Gn.program)&&(ai=!0,ki=!0,Me=!0),st.id!==at&&(at=st.id,ki=!0),Ht.needsLights){const Re=_o(N.state.lightProbeGridArray,lt);Ht.lightProbeGrid!==Re&&(Ht.lightProbeGrid=Re,ki=!0)}if(ai||ht!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ge.setValue(K,"projectionMatrix",b.projectionMatrix),Ge.setValue(K,"viewMatrix",b.matrixWorldInverse);const un=Ge.map.cameraPosition;un!==void 0&&un.setValue(K,ie.setFromMatrixPosition(b.matrixWorld)),I.logarithmicDepthBuffer&&Ge.setValue(K,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Ge.setValue(K,"isOrthographic",b.isOrthographicCamera===!0),ht!==b&&(ht=b,ki=!0,Me=!0)}if(Ht.needsLights&&(ln.state.sunShadowMap.length>0&&Ge.setValue(K,"sunShadowMap",ln.state.sunShadowMap,gt),ln.state.directionalShadowMap.length>0&&Ge.setValue(K,"directionalShadowMap",ln.state.directionalShadowMap,gt),ln.state.spotShadowMap.length>0&&Ge.setValue(K,"spotShadowMap",ln.state.spotShadowMap,gt),ln.state.pointShadowMap.length>0&&Ge.setValue(K,"pointShadowMap",ln.state.pointShadowMap,gt)),lt.isSkinnedMesh){Ge.setOptional(K,lt,"bindMatrix"),Ge.setOptional(K,lt,"bindMatrixInverse");const Re=lt.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),Ge.setValue(K,"boneTexture",Re.boneTexture,gt))}lt.isBatchedMesh&&(Ge.setOptional(K,lt,"batchingTexture"),Ge.setValue(K,"batchingTexture",lt._matricesTexture,gt),Ge.setOptional(K,lt,"batchingIdTexture"),Ge.setValue(K,"batchingIdTexture",lt._indirectTexture,gt),Ge.setOptional(K,lt,"batchingColorTexture"),lt._colorsTexture!==null&&Ge.setValue(K,"batchingColorTexture",lt._colorsTexture,gt));const ri=dt.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&J.update(lt,dt,Gn),(ki||Ht.receiveShadow!==lt.receiveShadow)&&(Ht.receiveShadow=lt.receiveShadow,Ge.setValue(K,"receiveShadow",lt.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&Y.environment!==null&&(je.envMapIntensity.value=Y.environmentIntensity),je.dfgLUT!==void 0&&(je.dfgLUT.value=r3()),ki){if(Ge.setValue(K,"toneMappingExposure",w.toneMappingExposure),Ht.needsLights&&Ul(je,Me),Ft&&st.fog===!0&&te.refreshFogUniforms(je,Ft),te.refreshMaterialUniforms(je,st,ot,X,N.state.transmissionRenderTarget[b.id]),Ht.needsLights&&Ht.lightProbeGrid){const Re=Ht.lightProbeGrid;je.probesSH.value=Re.texture,je.probesMin.value.copy(Re.boundingBox.min),je.probesMax.value.copy(Re.boundingBox.max),je.probesResolution.value.copy(Re.resolution)}Cc.upload(K,mo(Ht),je,gt)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Cc.upload(K,mo(Ht),je,gt),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Ge.setValue(K,"center",lt.center),Ge.setValue(K,"modelViewMatrix",lt.modelViewMatrix),Ge.setValue(K,"normalMatrix",lt.normalMatrix),Ge.setValue(K,"modelMatrix",lt.matrixWorld),st.uniformsGroups!==void 0){const Re=st.uniformsGroups;for(let un=0,ha=Re.length;un<ha;un++){const Ol=Re[un];bt.update(Ol,Gn),bt.bind(Ol,Gn)}}return Gn}function Ul(b,Y){b.ambientLightColor.needsUpdate=Y,b.lightProbe.needsUpdate=Y,b.sunLights.needsUpdate=Y,b.sunLightShadows.needsUpdate=Y,b.directionalLights.needsUpdate=Y,b.directionalLightShadows.needsUpdate=Y,b.pointLights.needsUpdate=Y,b.pointLightShadows.needsUpdate=Y,b.spotLights.needsUpdate=Y,b.spotLightShadows.needsUpdate=Y,b.rectAreaLights.needsUpdate=Y,b.hemisphereLights.needsUpdate=Y}function Ll(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(b,Y,dt){const st=ct.get(b);st.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),ct.get(b.texture).__webglTexture=Y,ct.get(b.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:dt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,Y){const dt=ct.get(b);dt.__webglFramebuffer=Y,dt.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(b,Y=0,dt=0){nt=b,k=Y,W=dt;let st=null,lt=!1,Ft=!1;if(b){const Pt=ct.get(b);if(Pt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(K.FRAMEBUFFER,Pt.__webglFramebuffer),St.copy(b.viewport),kt.copy(b.scissor),Ut=b.scissorTest,y.viewport(St),y.scissor(kt),y.setScissorTest(Ut),at=-1;return}else if(Pt.__webglFramebuffer===void 0)gt.setupRenderTarget(b);else if(Pt.__hasExternalTextures)gt.rebindTextures(b,ct.get(b.texture).__webglTexture,ct.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const le=b.depthTexture;if(Pt.__boundDepthTexture!==le){if(le!==null&&ct.has(le)&&(b.width!==le.image.width||b.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(b)}}const Qt=b.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ft=!0);const Jt=ct.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Jt[Y])?st=Jt[Y][dt]:st=Jt[Y],lt=!0):b.samples>0&&gt.useMultisampledRTT(b)===!1?st=ct.get(b).__webglMultisampledFramebuffer:Array.isArray(Jt)?st=Jt[dt]:st=Jt,St.copy(b.viewport),kt.copy(b.scissor),Ut=b.scissorTest}else St.copy(pt).multiplyScalar(ot).floor(),kt.copy(At).multiplyScalar(ot).floor(),Ut=ge;if(dt!==0&&(st=q),y.bindFramebuffer(K.FRAMEBUFFER,st)&&y.drawBuffers(b,st),y.viewport(St),y.scissor(kt),y.setScissorTest(Ut),lt){const Pt=ct.get(b.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pt.__webglTexture,dt)}else if(Ft){const Pt=Y;for(let Qt=0;Qt<b.textures.length;Qt++){const Jt=ct.get(b.textures[Qt]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Qt,Jt.__webglTexture,dt,Pt)}}else if(b!==null&&dt!==0){const Pt=ct.get(b.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Pt.__webglTexture,dt)}at=-1};function vi(b){const Y=ct.get(b);return(Y.__readFormat!==b.format||Y.__readType!==b.type)&&(Y.__readFormat=b.format,Y.__readType=b.type,Y.__formatReadable=I.textureFormatReadable(b.format),Y.__typeReadable=I.textureTypeReadable(b.type)),Y}this.readRenderTargetPixels=function(b,Y,dt,st,lt,Ft,Wt,Pt=0){if(!(b&&b.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Wt!==void 0&&(Qt=Qt[Wt]),Qt){y.bindFramebuffer(K.FRAMEBUFFER,Qt);try{const Jt=b.textures[Pt],le=Jt.format,pe=Jt.type;b.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Pt);const Zt=vi(Jt);if(Zt.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Zt.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=b.width-st&&dt>=0&&dt<=b.height-lt&&K.readPixels(Y,dt,st,lt,Ot.convert(le),Ot.convert(pe),Ft)}finally{const Jt=nt!==null?ct.get(nt).__webglFramebuffer:null;y.bindFramebuffer(K.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(b,Y,dt,st,lt,Ft,Wt,Pt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Wt!==void 0&&(Qt=Qt[Wt]),Qt)if(Y>=0&&Y<=b.width-st&&dt>=0&&dt<=b.height-lt){y.bindFramebuffer(K.FRAMEBUFFER,Qt);const Jt=b.textures[Pt],le=Jt.format,pe=Jt.type;b.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Pt);const Zt=vi(Jt);if(Zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,Ee),K.bufferData(K.PIXEL_PACK_BUFFER,Ft.byteLength,K.STREAM_READ),K.readPixels(Y,dt,st,lt,Ot.convert(le),Ot.convert(pe),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const xe=nt!==null?ct.get(nt).__webglFramebuffer:null;y.bindFramebuffer(K.FRAMEBUFFER,xe);const Ke=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await bT(K,Ke,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,Ee),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Ft),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(Ee),K.deleteSync(Ke),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,Y=null,dt=0){const st=Math.pow(2,-dt),lt=Math.floor(b.image.width*st),Ft=Math.floor(b.image.height*st),Wt=Y!==null?Y.x:0,Pt=Y!==null?Y.y:0;gt.setTexture2D(b,0),K.copyTexSubImage2D(K.TEXTURE_2D,dt,0,0,Wt,Pt,lt,Ft),y.unbindTexture()},this.copyTextureToTexture=function(b,Y,dt=null,st=null,lt=0,Ft=0){let Wt,Pt,Qt,Jt,le,pe,Zt,Ee,xe;const Ke=b.isCompressedTexture?b.mipmaps[Ft]:b.image;if(dt!==null)Wt=dt.max.x-dt.min.x,Pt=dt.max.y-dt.min.y,Qt=dt.isBox3?dt.max.z-dt.min.z:1,Jt=dt.min.x,le=dt.min.y,pe=dt.isBox3?dt.min.z:0;else{const je=Math.pow(2,-lt);Wt=Math.floor(Ke.width*je),Pt=Math.floor(Ke.height*je),b.isDataArrayTexture?Qt=Ke.depth:b.isData3DTexture?Qt=Math.floor(Ke.depth*je):Qt=1,Jt=0,le=0,pe=0}st!==null?(Zt=st.x,Ee=st.y,xe=st.z):(Zt=0,Ee=0,xe=0);const Xe=Ot.convert(Y.format),Sn=Ot.convert(Y.type);let Ht;Y.isData3DTexture?(gt.setTexture3D(Y,0),Ht=K.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(gt.setTexture2DArray(Y,0),Ht=K.TEXTURE_2D_ARRAY):(gt.setTexture2D(Y,0),Ht=K.TEXTURE_2D),y.activeTexture(K.TEXTURE0),y.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Y.flipY),y.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),y.pixelStorei(K.UNPACK_ALIGNMENT,Y.unpackAlignment);const ln=y.getParameter(K.UNPACK_ROW_LENGTH),Ue=y.getParameter(K.UNPACK_IMAGE_HEIGHT),Gn=y.getParameter(K.UNPACK_SKIP_PIXELS),ai=y.getParameter(K.UNPACK_SKIP_ROWS),ki=y.getParameter(K.UNPACK_SKIP_IMAGES);y.pixelStorei(K.UNPACK_ROW_LENGTH,Ke.width),y.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ke.height),y.pixelStorei(K.UNPACK_SKIP_PIXELS,Jt),y.pixelStorei(K.UNPACK_SKIP_ROWS,le),y.pixelStorei(K.UNPACK_SKIP_IMAGES,pe);const Me=b.isDataArrayTexture||b.isData3DTexture,Ge=Y.isDataArrayTexture||Y.isData3DTexture;if(b.isDepthTexture){const je=ct.get(b),ri=ct.get(Y),Re=ct.get(je.__renderTarget),un=ct.get(ri.__renderTarget);y.bindFramebuffer(K.READ_FRAMEBUFFER,Re.__webglFramebuffer),y.bindFramebuffer(K.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let ha=0;ha<Qt;ha++)Me&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ct.get(b).__webglTexture,lt,pe+ha),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ct.get(Y).__webglTexture,Ft,xe+ha)),K.blitFramebuffer(Jt,le,Wt,Pt,Zt,Ee,Wt,Pt,K.DEPTH_BUFFER_BIT,K.NEAREST);y.bindFramebuffer(K.READ_FRAMEBUFFER,null),y.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(lt!==0||b.isRenderTargetTexture||ct.has(b)){const je=ct.get(b),ri=ct.get(Y);y.bindFramebuffer(K.READ_FRAMEBUFFER,V),y.bindFramebuffer(K.DRAW_FRAMEBUFFER,Q);for(let Re=0;Re<Qt;Re++)Me?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,je.__webglTexture,lt,pe+Re):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,je.__webglTexture,lt),Ge?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ri.__webglTexture,Ft,xe+Re):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,ri.__webglTexture,Ft),lt!==0?K.blitFramebuffer(Jt,le,Wt,Pt,Zt,Ee,Wt,Pt,K.COLOR_BUFFER_BIT,K.NEAREST):Ge?K.copyTexSubImage3D(Ht,Ft,Zt,Ee,xe+Re,Jt,le,Wt,Pt):K.copyTexSubImage2D(Ht,Ft,Zt,Ee,Jt,le,Wt,Pt);y.bindFramebuffer(K.READ_FRAMEBUFFER,null),y.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Ge?b.isDataTexture||b.isData3DTexture?K.texSubImage3D(Ht,Ft,Zt,Ee,xe,Wt,Pt,Qt,Xe,Sn,Ke.data):Y.isCompressedArrayTexture?K.compressedTexSubImage3D(Ht,Ft,Zt,Ee,xe,Wt,Pt,Qt,Xe,Ke.data):K.texSubImage3D(Ht,Ft,Zt,Ee,xe,Wt,Pt,Qt,Xe,Sn,Ke):b.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Ft,Zt,Ee,Wt,Pt,Xe,Sn,Ke.data):b.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Ft,Zt,Ee,Ke.width,Ke.height,Xe,Ke.data):K.texSubImage2D(K.TEXTURE_2D,Ft,Zt,Ee,Wt,Pt,Xe,Sn,Ke);y.pixelStorei(K.UNPACK_ROW_LENGTH,ln),y.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ue),y.pixelStorei(K.UNPACK_SKIP_PIXELS,Gn),y.pixelStorei(K.UNPACK_SKIP_ROWS,ai),y.pixelStorei(K.UNPACK_SKIP_IMAGES,ki),Ft===0&&Y.generateMipmaps&&K.generateMipmap(Ht),y.unbindTexture()},this.initRenderTarget=function(b){ct.get(b).__webglFramebuffer===void 0&&gt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?gt.setTextureCube(b,0):b.isData3DTexture?gt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?gt.setTexture2DArray(b,0):gt.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){k=0,W=0,nt=null,y.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(e),i.unpackColorSpace=Le._getUnpackColorSpace()}}const ro=Math.PI/180,Xp=3,Yx=7,s3=.98,FS=10,o3=85,za=o=>1-(1-o)**3,Zx=o=>new vn().setFromEuler(new gi(o.x*ro,o.y*ro,o.z*ro,"XYZ")),Sl=o=>(o%360+540)%360-180,Kx=o=>{const e=new tt(o.x,o.y,o.z),i=e.length();return i<1e-9?new tt(0,1,0):(e.divideScalar(i),o.w<0&&e.negate(),e)},l3=(o,e)=>{const i=f=>Zx({x:o.x+(e.x-o.x)*za(f),y:o.y+(e.y-o.y)*za(f),z:o.z+(e.z-o.z)*za(f)}),s=i(s3),u=i(1);return Kx(u.multiply(s.clone().invert()))},Tm=(o,e,i)=>{const s=Zx(o),u=Kx(s.clone().invert().multiply(e)).applyQuaternion(s).normalize(),f=Math.random()*Math.PI,d=new vn().setFromAxisAngle(u,-f).multiply(e),h=new gi().setFromQuaternion(d,"XYZ"),p={x:h.x/ro,y:h.y/ro,z:h.z/ro},m=[];for(let _=Xp;_<=Yx;_++){const v=i-_;if(!(v<1))for(const T of[1,-1])for(const R of[1,-1])for(const P of[1,-1]){const M={x:o.x+T*360*_,y:o.y+R*360*v,z:o.z+P*360*i};M.x+=Sl(p.x-M.x),M.y+=Sl(p.y-M.y),M.z+=Sl(p.z-M.z);const x=l3(o,M).dot(u);m.push({rotation:M,dot:x})}}const S=m.filter(_=>_.dot>0);return S.length>0?S[Math.floor(Math.random()*S.length)].rotation:m.reduce((_,v)=>v.dot>_.dot?v:_).rotation},u3=(o,e,i)=>{const s=Xp+Math.floor(Math.random()*(Yx-Xp+1)),u=i-s,f=Math.random()<.5?-1:1,d=Math.random()<.5?-1:1,h=T=>T*(FS+Math.random()*(o3-FS)),p=h(f),m=h(d),S={x:o.x+f*360*s,y:o.y+d*360*u},_={x:S.x+Sl(e.x-S.x-p),y:S.y+Sl(e.y-S.y-m)},v={x:_.x+p,y:_.y+m};return{spun:_,landed:v}},Dl={red:{hex:14034996,cssTop:[214,40,52],cssBottom:[140,18,28],label:"#ffffff"},green:{hex:1096065,cssTop:[16,185,129],cssBottom:[5,150,105],label:"#ecfdf5"},white:{hex:15790320,cssTop:[240,240,240],cssBottom:[200,200,200],label:"#111827"},black:{hex:1052691,cssTop:[16,16,19],cssBottom:[3,3,5],label:"#ffffff"},blue:{hex:1785819,cssTop:[27,63,219],cssBottom:[17,38,140],label:"#ffffff"},yellow:{hex:16761856,cssTop:[255,196,0],cssBottom:[214,152,0],label:"#111827"}},c3=[6,8,10,12],f3=["red","green","white","black","blue","yellow"],jh={sides:6,color:"red",translucent:!0},d3={6:.85,8:.85,10:.9,12:.85},Hc=(o,e)=>e?d3[o]:1;function h3(){const o=new URLSearchParams(window.location.search),e=Number(o.get("s")),i=c3.includes(e)?e:jh.sides,s=o.get("c")?.toLowerCase(),u=s!==void 0&&f3.includes(s)?s:jh.color,f=(o.get("translucent")??o.get("t"))?.toLowerCase(),d=f==="true"?!0:f==="false"?!1:jh.translucent;return{sides:i,color:u,translucent:d}}const HS={1:{name:"front",orientation:{x:0,y:0}},2:{name:"top",orientation:{x:-90,y:0}},3:{name:"right",orientation:{x:0,y:-90}},4:{name:"left",orientation:{x:0,y:90}},5:{name:"bottom",orientation:{x:90,y:0}},6:{name:"back",orientation:{x:0,y:180}}},p3={1:[[2,2]],2:[[1,1],[3,3]],3:[[1,1],[2,2],[3,3]],4:[[1,1],[1,3],[3,1],[3,3]],5:[[1,1],[1,3],[2,2],[3,1],[3,3]],6:[[1,1],[1,3],[2,1],[2,3],[3,1],[3,3]]},GS=65,VS=.5,m3=10,$h=1500,XS=750,g3=260,kS=(o,e,i)=>Math.min(i,Math.max(e,o)),qS=o=>Math.round(o*10)/10;function _3({value:o}){return ne.jsx(ne.Fragment,{children:p3[o].map(([e,i])=>ne.jsx("span",{className:"pip",style:{gridRow:e,gridColumn:i}},`${e}-${i}`))})}function v3({color:o="red",translucent:e=!0}){const[i,s]=Rt.useState({x:0,y:0}),[u,f]=Rt.useState({ms:0,easing:"linear"}),[d,h]=Rt.useState(!1),[p,m]=Rt.useState(!1),[S,_]=Rt.useState(null),[v,T]=Rt.useState(null),R=Rt.useRef(null),P=Rt.useRef(i),M=Rt.useRef({x:0,y:0}),x=Rt.useRef(null),D=Rt.useRef(null),G=Rt.useRef([]);P.current=i;const C=Dl[o],U=Hc(6,e),N=`rgb(${C.cssTop.join(" ")} / ${U})`,z=`rgb(${C.cssBottom.join(" ")} / ${U})`,E=Rt.useCallback((q,V,Q="ease-out")=>{f({ms:V,easing:Q}),s(q)},[]),L=Rt.useCallback(async()=>{h(!0),_(null),T(null);try{const q=await Ic(6),V=HS[q],Q=P.current,{spun:k,landed:W}=u3(Q,V.orientation,m3);E(k,$h,"cubic-bezier(0.4, 0, 0.35, 1)"),G.current.push(setTimeout(()=>{M.current=W,E(W,XS,"cubic-bezier(0.22, 1, 0.36, 1)")},$h)),G.current.push(setTimeout(()=>{h(!1),_(q)},$h+XS))}catch(q){h(!1),T(q instanceof Error?q.message:"Roll failed.")}},[E]),w=Rt.useCallback(q=>{if(d)return;const V=q.currentTarget.getBoundingClientRect();x.current={centerX:V.left+V.width/2,centerY:V.top+V.height/2,halfWidth:V.width/2,halfHeight:V.height/2,nx:0,ny:0},q.currentTarget.setPointerCapture(q.pointerId),m(!0),f({ms:0,easing:"linear"})},[d]),O=Rt.useCallback(q=>{const V=x.current;V&&(V.nx=kS((q.clientX-V.centerX)/V.halfWidth,-1,1),V.ny=kS((q.clientY-V.centerY)/V.halfHeight,-1,1),!D.current&&(D.current=requestAnimationFrame(()=>{D.current=null;const Q=M.current;s({x:qS(Q.x-V.ny*GS),y:qS(Q.y+V.nx*GS)})})))},[]),B=Rt.useCallback(()=>{const q=x.current;if(!q)return;x.current=null,m(!1),D.current&&(cancelAnimationFrame(D.current),D.current=null),Math.abs(q.nx)>=VS||Math.abs(q.ny)>=VS?L():E(M.current,g3,"cubic-bezier(0.34, 1.3, 0.64, 1)")},[E,L]);return Rt.useEffect(()=>{const q=G.current;return()=>{q.forEach(clearTimeout),D.current&&cancelAnimationFrame(D.current)}},[]),ne.jsxs("div",{ref:R,className:"stage",style:{"--face-top":N,"--face-bottom":z,"--die-fg":C.label},onPointerDown:w,onPointerMove:O,onPointerUp:B,onPointerCancel:B,children:[ne.jsx("div",{className:"scene",children:ne.jsx("div",{className:`cube${d?" is-rolling":""}${p?" is-dragging":""}`,style:{transform:`translateZ(0) rotateX(${i.x}deg) rotateY(${i.y}deg)`,transitionDuration:`${u.ms}ms`,transitionTimingFunction:u.easing},children:Object.entries(HS).map(([q,V])=>ne.jsx("div",{className:`face face--${V.name}`,"data-value":q,children:ne.jsx("div",{className:"pips",children:ne.jsx(_3,{value:Number(q)})})},q))})}),ne.jsx("p",{className:"hint",children:d?"Rolling...":v||(S?`You rolled ${S}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const WS=65,YS=.5,S3=10,x3=1500,M3=750,y3=260,so=Math.PI/180,ZS=1.08,KS=.864,QS=(o,e,i)=>Math.min(i,Math.max(e,o)),E3=[[1,1,1],[-1,1,1],[-1,1,-1],[1,1,-1],[1,-1,1],[-1,-1,1],[-1,-1,-1],[1,-1,-1]],T3=o=>{const e=new tt(...o).normalize(),i=Math.abs(e.y)>.9?new tt(0,0,1):new tt(0,1,0),s=i.clone().sub(e.clone().multiplyScalar(i.dot(e))).normalize(),u=new tt().crossVectors(s,e).normalize(),f=new en().makeBasis(u,s,e);return{normal:e,up:s,orientation:new vn().setFromRotationMatrix(f)}},JS=E3.map(T3),b3=o=>{const e=new tt(0,0,1),i=new vn().setFromUnitVectors(o.normal,e),s=o.up.clone().applyQuaternion(i);return new vn().setFromAxisAngle(new tt(0,0,1),Math.atan2(s.x,s.y)).multiply(i)},A3="#ffffff",jS=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const s=i.getContext("2d");if(!s)return null;s.font="700 200px dice-font, system-ui, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillStyle=e,s.shadowColor="rgba(0, 0, 0, 0.35)",s.shadowBlur=6,s.fillText(String(o),128,136);const u=new pm(i);u.colorSpace=Yn;const f=new Cl({map:u,transparent:!0,side:la,depthWrite:!1});return new Zn(new ts(KS,KS),f)},R3=o=>{const e=new gi().setFromQuaternion(o,"XYZ");return{x:e.x/so,y:e.y/so,z:e.z/so}};function C3({color:o="red",translucent:e=!0}){const i=Rt.useRef(null),s=Rt.useRef(null),u=Rt.useRef(null),f=Rt.useRef(null),d=Rt.useRef(null),h=Rt.useRef({x:0,y:0,z:0}),p=Rt.useRef({x:0,y:0,z:0}),m=Rt.useRef(null),S=Rt.useRef(!1),[_,v]=Rt.useState(!1),[T,R]=Rt.useState(!1),[P,M]=Rt.useState(null),[x,D]=Rt.useState(null),G=Rt.useCallback(w=>{h.current=w,s.current?.rotation.set(w.x*so,w.y*so,w.z*so)},[]),C=Rt.useCallback((w,O)=>{d.current&&cancelAnimationFrame(d.current);const B={...h.current},q=performance.now();return new Promise(V=>{const Q=k=>{const W=Math.min((k-q)/O,1),nt=za(W);G({x:B.x+(w.x-B.x)*nt,y:B.y+(w.y-B.y)*nt,z:B.z+(w.z-B.z)*nt}),W<1?d.current=requestAnimationFrame(Q):(d.current=null,V())};d.current=requestAnimationFrame(Q)})},[G]),U=Rt.useCallback((w,O)=>{d.current&&cancelAnimationFrame(d.current);const B=s.current;if(!B)return Promise.resolve();const q=B.quaternion.clone(),V=performance.now();return new Promise(Q=>{const k=W=>{const nt=Math.min((W-V)/O,1);B.quaternion.slerpQuaternions(q,w,za(nt)),h.current=R3(B.quaternion),nt<1?d.current=requestAnimationFrame(k):(d.current=null,Q())};d.current=requestAnimationFrame(k)})},[]),N=Rt.useCallback(async()=>{S.current=!0,v(!0),M(null),D(null);try{const w=await Ic(8),O=b3(JS[w-1]),B=h.current,q=Tm(B,O,S3);await C(q,x3),await U(O,M3),p.current=h.current,v(!1),S.current=!1,M(w)}catch(w){v(!1),S.current=!1,D(w instanceof Error?w.message:"Roll failed.")}},[U,C]),z=Rt.useCallback(w=>{if(S.current)return;const O=w.currentTarget.getBoundingClientRect();m.current={centerX:O.left+O.width/2,centerY:O.top+O.height/2,halfWidth:O.width/2,halfHeight:O.height/2,nx:0,ny:0},w.currentTarget.setPointerCapture(w.pointerId),R(!0)},[]),E=Rt.useCallback(w=>{const O=m.current;!O||S.current||(O.nx=QS((w.clientX-O.centerX)/O.halfWidth,-1,1),O.ny=QS((w.clientY-O.centerY)/O.halfHeight,-1,1),!f.current&&(f.current=requestAnimationFrame(()=>{f.current=null;const B=p.current;G({x:B.x-O.ny*WS,y:B.y+O.nx*WS,z:B.z})})))},[G]),L=Rt.useCallback(()=>{const w=m.current;if(!w)return;m.current=null,R(!1),f.current&&(cancelAnimationFrame(f.current),f.current=null),Math.abs(w.nx)>=YS||Math.abs(w.ny)>=YS?N():C(p.current,y3)},[C,N]);return Rt.useEffect(()=>{const w=i.current;if(!w)return;const O=new fm,B=new ei(28,1,.1,100);B.position.set(0,0,7),B.lookAt(0,0,0);const q=new Em({alpha:!0,antialias:!0});q.setPixelRatio(Math.min(window.devicePixelRatio,2)),q.setClearColor(0,0),w.appendChild(q.domElement);const V=Dl[o],Q=Hc(8,e),k=new Zn(new gm(1.7,0),new _m({color:V.hex,roughness:.46,metalness:.08,flatShading:!0,transparent:e,opacity:Q,depthWrite:!e})),W=new vn().setFromAxisAngle(new tt(0,1,0),Math.PI),nt=()=>{JS.forEach((Ut,H)=>{const mt=H+1,Tt=jS(mt,V.label);if(!Tt)return;Tt.position.copy(Ut.normal).multiplyScalar(ZS),Tt.quaternion.copy(Ut.orientation),k.add(Tt);const X=jS(mt,A3);X&&(X.renderOrder=-1,X.position.copy(Ut.normal).multiplyScalar(ZS-.2),X.quaternion.copy(Ut.orientation).multiply(W),k.add(X))})};document.fonts.load("700 200px dice-font").then(nt),O.add(k),O.add(new ym(16777215,1)),O.add(new Sm(16777215,12303291,1));const at=new Mm(16777215,1);at.position.set(3,4,5),O.add(at),s.current=k;const ht=()=>{const Ut=w.clientWidth,H=w.clientHeight;q.setSize(Ut,H,!1),B.aspect=Ut/H,B.updateProjectionMatrix()},St=new ResizeObserver(ht);St.observe(w),ht();const kt=()=>{u.current=requestAnimationFrame(kt),q.render(O,B)};return kt(),()=>{St.disconnect(),u.current&&cancelAnimationFrame(u.current),d.current&&cancelAnimationFrame(d.current),k.geometry.dispose(),k.material.dispose(),k.children.forEach(Ut=>{const H=Ut;H.geometry.dispose(),H.material.map?.dispose(),H.material.dispose()}),q.dispose(),w.removeChild(q.domElement),s.current=null}},[o,e]),ne.jsxs("div",{className:`stage stage--eight-sided${T?" is-dragging":""}`,onPointerDown:z,onPointerMove:E,onPointerUp:L,onPointerCancel:L,children:[ne.jsx("div",{ref:i,className:"three-scene"}),ne.jsx("p",{className:"hint",children:_?"Rolling...":x||(P?`You rolled ${P}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const $S=65,tx=.5,w3=10,D3=1500,N3=750,U3=260,oo=Math.PI/180,ex=.7,Qx=2.2,L3=.85,Oc=Qx*.9*L3,vr=Qx*.65,kp=Oc*.105573,qp=Oc*.8,yc=(Oc-qp)/(Oc-kp),Wp=[...[0,1,2,3,4].map(o=>[yc*vr*Math.cos(o*2*Math.PI/5),qp,yc*vr*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[yc*vr*Math.cos((o+.5)*2*Math.PI/5),-qp,yc*vr*Math.sin((o+.5)*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[vr*Math.cos(o*2*Math.PI/5),kp,vr*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[vr*Math.cos((o+.5)*2*Math.PI/5),-kp,vr*Math.sin((o+.5)*2*Math.PI/5)])],Yp=[[0,10,15,11,1],[1,11,16,12,2],[2,12,17,13,3],[3,13,18,14,4],[4,14,19,10,0],[5,6,16,11,15],[6,7,17,12,16],[7,8,18,13,17],[8,9,19,14,18],[9,5,15,10,19],[0,1,2,3,4],[5,6,7,8,9]],Zp=[1,3,5,7,9,8,6,4,2,10],nx=(o,e,i)=>Math.min(i,Math.max(e,o)),Jx=(o,e)=>{const[i,s,u]=o,f=[s[0]-i[0],s[1]-i[1],s[2]-i[2]],d=[u[0]-i[0],u[1]-i[1],u[2]-i[2]],h=f[1]*d[2]-f[2]*d[1],p=f[2]*d[0]-f[0]*d[2],m=f[0]*d[1]-f[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),_=new tt(h/S,p/S,m/S);return _.dot(e)<0&&_.negate(),_},Kp=o=>{const e=o.reduce((u,f)=>u+f[0],0)/o.length,i=o.reduce((u,f)=>u+f[1],0)/o.length,s=o.reduce((u,f)=>u+f[2],0)/o.length;return new tt(e,i,s)},O3=o=>{const e=Yp[o].map(p=>Wp[p]),i=Kp(e),s=Jx(e,i),u=Math.abs(s.y)>.9?new tt(0,0,1):new tt(0,1,0),f=u.clone().sub(s.clone().multiplyScalar(u.dot(s))).normalize(),d=new tt().crossVectors(f,s).normalize(),h=new en().makeBasis(d,f,s);return{normal:s,up:f,orientation:new vn().setFromRotationMatrix(h)}},ix=Array.from({length:Zp.length},(o,e)=>O3(e)),P3=o=>{const e=new tt(0,0,1),i=new vn().setFromUnitVectors(o.normal,e),s=o.up.clone().applyQuaternion(i);return new vn().setFromAxisAngle(new tt(0,0,1),Math.atan2(s.x,s.y)).multiply(i)},I3="#ffffff",ax=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const s=i.getContext("2d");if(!s)return null;s.font="700 180px dice-font, system-ui, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillStyle=e,s.fillText(String(o===10?0:o),128,136);const u=new pm(i);u.colorSpace=Yn;const f=new Cl({map:u,transparent:!0,side:la,depthWrite:!1});return new Zn(new ts(ex,ex),f)},z3=o=>{const e=new gi().setFromQuaternion(o,"XYZ");return{x:e.x/oo,y:e.y/oo,z:e.z/oo}};function B3({color:o="red",translucent:e=!0}){const i=Rt.useRef(null),s=Rt.useRef(null),u=Rt.useRef(null),f=Rt.useRef(null),d=Rt.useRef(null),h=Rt.useRef({x:0,y:0,z:0}),p=Rt.useRef({x:0,y:0,z:0}),m=Rt.useRef(null),S=Rt.useRef(!1),[_,v]=Rt.useState(!1),[T,R]=Rt.useState(!1),[P,M]=Rt.useState(null),[x,D]=Rt.useState(null),G=Rt.useCallback(w=>{h.current=w,s.current?.rotation.set(w.x*oo,w.y*oo,w.z*oo)},[]),C=Rt.useCallback((w,O)=>{d.current&&cancelAnimationFrame(d.current);const B={...h.current},q=performance.now();return new Promise(V=>{const Q=k=>{const W=Math.min((k-q)/O,1),nt=za(W);G({x:B.x+(w.x-B.x)*nt,y:B.y+(w.y-B.y)*nt,z:B.z+(w.z-B.z)*nt}),W<1?d.current=requestAnimationFrame(Q):(d.current=null,V())};d.current=requestAnimationFrame(Q)})},[G]),U=Rt.useCallback((w,O)=>{d.current&&cancelAnimationFrame(d.current);const B=s.current;if(!B)return Promise.resolve();const q=B.quaternion.clone(),V=performance.now();return new Promise(Q=>{const k=W=>{const nt=Math.min((W-V)/O,1);B.quaternion.slerpQuaternions(q,w,za(nt)),h.current=z3(B.quaternion),nt<1?d.current=requestAnimationFrame(k):(d.current=null,Q())};d.current=requestAnimationFrame(k)})},[]),N=Rt.useCallback(async()=>{S.current=!0,v(!0),M(null),D(null);try{const w=await Ic(10),O=Zp.indexOf(w),B=P3(ix[O]),q=h.current,V=Tm(q,B,w3);await C(V,D3),await U(B,N3),p.current=h.current,v(!1),S.current=!1,M(w)}catch(w){v(!1),S.current=!1,D(w instanceof Error?w.message:"Roll failed.")}},[U,C]),z=Rt.useCallback(w=>{if(S.current)return;const O=w.currentTarget.getBoundingClientRect();m.current={centerX:O.left+O.width/2,centerY:O.top+O.height/2,halfWidth:O.width/2,halfHeight:O.height/2,nx:0,ny:0},w.currentTarget.setPointerCapture(w.pointerId),R(!0)},[]),E=Rt.useCallback(w=>{const O=m.current;!O||S.current||(O.nx=nx((w.clientX-O.centerX)/O.halfWidth,-1,1),O.ny=nx((w.clientY-O.centerY)/O.halfHeight,-1,1),!f.current&&(f.current=requestAnimationFrame(()=>{f.current=null;const B=p.current;G({x:B.x-O.ny*$S,y:B.y+O.nx*$S,z:B.z})})))},[G]),L=Rt.useCallback(()=>{const w=m.current;if(!w)return;m.current=null,R(!1),f.current&&(cancelAnimationFrame(f.current),f.current=null),Math.abs(w.nx)>=tx||Math.abs(w.ny)>=tx?N():C(p.current,U3)},[C,N]);return Rt.useEffect(()=>{const w=i.current;if(!w)return;const O=new fm,B=new ei(28,1,.1,100);B.position.set(0,0,7),B.lookAt(0,0,0);const q=new Em({alpha:!0,antialias:!0});q.setPixelRatio(Math.min(window.devicePixelRatio,2)),q.setClearColor(0,0),w.appendChild(q.domElement);const V=new wi,Q=[],k=[];for(const Tt of Yp){const X=Tt.map(K=>Wp[K]),ot=Kp(X),Et=Jx(X,ot),Ct=Et.x,pt=Et.y,At=Et.z,[ge,oe,ue]=X,re=[oe[0]-ge[0],oe[1]-ge[1],oe[2]-ge[2]],Yt=[ue[0]-ge[0],ue[1]-ge[1],ue[2]-ge[2]],ie=re[1]*Yt[2]-re[2]*Yt[1],Be=re[2]*Yt[0]-re[0]*Yt[2],nn=re[0]*Yt[1]-re[1]*Yt[0],De=ie*ot.x+Be*ot.y+nn*ot.z>=0?X:[...X].reverse();for(let K=1;K<De.length-1;K++)Q.push(...De[0],...De[K],...De[K+1]),k.push(Ct,pt,At,Ct,pt,At,Ct,pt,At)}V.setAttribute("position",new Hn(Q,3)),V.setAttribute("normal",new Hn(k,3));const W=Dl[o],nt=Hc(10,e),at=new Zn(V,new _m({color:W.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:nt,depthWrite:!e})),ht=new vn().setFromAxisAngle(new tt(0,1,0),Math.PI),St=()=>{ix.forEach((Tt,X)=>{const ot=Zp[X],Et=ax(ot,W.label);if(!Et)return;const Ct=Kp(Yp[X].map(At=>Wp[At]));Et.position.copy(Ct),Et.position.addScaledVector(Tt.normal,.01),Et.quaternion.copy(Tt.orientation),at.add(Et);const pt=ax(ot,I3);pt&&(pt.renderOrder=-1,pt.position.copy(Ct),pt.position.addScaledVector(Tt.normal,-.05),pt.quaternion.copy(Tt.orientation).multiply(ht),at.add(pt))})};document.fonts.load("700 180px dice-font").then(St),O.add(at),O.add(new ym(16777215,1)),O.add(new Sm(16777215,12303291,1));const kt=new Mm(16777215,1);kt.position.set(3,4,5),O.add(kt),s.current=at;const Ut=()=>{const Tt=w.clientWidth,X=w.clientHeight;q.setSize(Tt,X,!1),B.aspect=Tt/X,B.updateProjectionMatrix()},H=new ResizeObserver(Ut);H.observe(w),Ut();const mt=()=>{u.current=requestAnimationFrame(mt),q.render(O,B)};return mt(),()=>{H.disconnect(),u.current&&cancelAnimationFrame(u.current),d.current&&cancelAnimationFrame(d.current),V.dispose(),at.material.dispose(),at.children.forEach(Tt=>{const X=Tt;X.geometry.dispose(),X.material.map?.dispose(),X.material.dispose()}),q.dispose(),w.removeChild(q.domElement),s.current=null}},[o,e]),ne.jsxs("div",{className:`stage stage--ten-sided${T?" is-dragging":""}`,onPointerDown:z,onPointerMove:E,onPointerUp:L,onPointerCancel:L,children:[ne.jsx("div",{ref:i,className:"three-scene"}),ne.jsx("p",{className:"hint",children:_?"Rolling...":x||(P!==null?`You rolled ${P}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const rx=65,sx=.5,F3=10,H3=1500,G3=750,V3=260,lo=Math.PI/180,ox=1,Qp=[[.981495,.981495,.981495],[.981495,.981495,-.981495],[.981495,-.981495,.981495],[.981495,-.981495,-.981495],[-.981495,.981495,.981495],[-.981495,.981495,-.981495],[-.981495,-.981495,.981495],[-.981495,-.981495,-.981495],[0,.606598,1.588093],[0,.606598,-1.588093],[0,-.606598,1.588093],[0,-.606598,-1.588093],[.606598,1.588093,0],[.606598,-1.588093,0],[-.606598,1.588093,0],[-.606598,-1.588093,0],[1.588093,0,.606598],[1.588093,0,-.606598],[-1.588093,0,.606598],[-1.588093,0,-.606598]],Jp=[[14,12,1,9,5],[4,8,0,12,14],[1,12,0,16,17],[19,18,4,14,5],[7,19,5,9,11],[11,9,1,17,3],[2,16,0,8,10],[10,8,4,18,6],[17,16,2,13,3],[7,15,6,18,19],[7,11,3,13,15],[15,13,2,10,6]],jp=[1,2,3,4,5,6,8,7,9,10,11,12],lx=(o,e,i)=>Math.min(i,Math.max(e,o)),jx=(o,e)=>{const[i,s,u]=o,f=[s[0]-i[0],s[1]-i[1],s[2]-i[2]],d=[u[0]-i[0],u[1]-i[1],u[2]-i[2]],h=f[1]*d[2]-f[2]*d[1],p=f[2]*d[0]-f[0]*d[2],m=f[0]*d[1]-f[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),_=new tt(h/S,p/S,m/S);return _.dot(e)<0&&_.negate(),_},$p=o=>{const e=o.reduce((u,f)=>u+f[0],0)/o.length,i=o.reduce((u,f)=>u+f[1],0)/o.length,s=o.reduce((u,f)=>u+f[2],0)/o.length;return new tt(e,i,s)},X3=o=>{const e=Jp[o].map(p=>Qp[p]),i=$p(e),s=jx(e,i),u=Math.abs(s.y)>.9?new tt(0,0,1):new tt(0,1,0),f=u.clone().sub(s.clone().multiplyScalar(u.dot(s))).normalize(),d=new tt().crossVectors(f,s).normalize(),h=new en().makeBasis(d,f,s);return{normal:s,up:f,orientation:new vn().setFromRotationMatrix(h)}},ux=Array.from({length:jp.length},(o,e)=>X3(e)),k3=o=>{const e=new tt(0,0,1),i=new vn().setFromUnitVectors(o.normal,e),s=o.up.clone().applyQuaternion(i);return new vn().setFromAxisAngle(new tt(0,0,1),Math.atan2(s.x,s.y)).multiply(i)},q3="#ffffff",cx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const s=i.getContext("2d");if(!s)return null;s.font="700 160px dice-font, system-ui, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillStyle=e,s.fillText(String(o),128,136);const u=new pm(i);u.colorSpace=Yn;const f=new Cl({map:u,transparent:!0,side:la,depthWrite:!1});return new Zn(new ts(ox,ox),f)},W3=o=>{const e=new gi().setFromQuaternion(o,"XYZ");return{x:e.x/lo,y:e.y/lo,z:e.z/lo}};function Y3({color:o="red",translucent:e=!0}){const i=Rt.useRef(null),s=Rt.useRef(null),u=Rt.useRef(null),f=Rt.useRef(null),d=Rt.useRef(null),h=Rt.useRef({x:0,y:0,z:0}),p=Rt.useRef({x:0,y:0,z:0}),m=Rt.useRef(null),S=Rt.useRef(!1),[_,v]=Rt.useState(!1),[T,R]=Rt.useState(!1),[P,M]=Rt.useState(null),[x,D]=Rt.useState(null),G=Rt.useCallback(w=>{h.current=w,s.current?.rotation.set(w.x*lo,w.y*lo,w.z*lo)},[]),C=Rt.useCallback((w,O)=>{d.current&&cancelAnimationFrame(d.current);const B={...h.current},q=performance.now();return new Promise(V=>{const Q=k=>{const W=Math.min((k-q)/O,1),nt=za(W);G({x:B.x+(w.x-B.x)*nt,y:B.y+(w.y-B.y)*nt,z:B.z+(w.z-B.z)*nt}),W<1?d.current=requestAnimationFrame(Q):(d.current=null,V())};d.current=requestAnimationFrame(Q)})},[G]),U=Rt.useCallback((w,O)=>{d.current&&cancelAnimationFrame(d.current);const B=s.current;if(!B)return Promise.resolve();const q=B.quaternion.clone(),V=performance.now();return new Promise(Q=>{const k=W=>{const nt=Math.min((W-V)/O,1);B.quaternion.slerpQuaternions(q,w,za(nt)),h.current=W3(B.quaternion),nt<1?d.current=requestAnimationFrame(k):(d.current=null,Q())};d.current=requestAnimationFrame(k)})},[]),N=Rt.useCallback(async()=>{S.current=!0,v(!0),M(null),D(null);try{const w=await Ic(12),O=jp.indexOf(w),B=k3(ux[O]),q=h.current,V=Tm(q,B,F3);await C(V,H3),await U(B,G3),p.current=h.current,v(!1),S.current=!1,M(w)}catch(w){v(!1),S.current=!1,D(w instanceof Error?w.message:"Roll failed.")}},[U,C]),z=Rt.useCallback(w=>{if(S.current)return;const O=w.currentTarget.getBoundingClientRect();m.current={centerX:O.left+O.width/2,centerY:O.top+O.height/2,halfWidth:O.width/2,halfHeight:O.height/2,nx:0,ny:0},w.currentTarget.setPointerCapture(w.pointerId),R(!0)},[]),E=Rt.useCallback(w=>{const O=m.current;!O||S.current||(O.nx=lx((w.clientX-O.centerX)/O.halfWidth,-1,1),O.ny=lx((w.clientY-O.centerY)/O.halfHeight,-1,1),!f.current&&(f.current=requestAnimationFrame(()=>{f.current=null;const B=p.current;G({x:B.x-O.ny*rx,y:B.y+O.nx*rx,z:B.z})})))},[G]),L=Rt.useCallback(()=>{const w=m.current;if(!w)return;m.current=null,R(!1),f.current&&(cancelAnimationFrame(f.current),f.current=null),Math.abs(w.nx)>=sx||Math.abs(w.ny)>=sx?N():C(p.current,V3)},[C,N]);return Rt.useEffect(()=>{const w=i.current;if(!w)return;const O=new fm,B=new ei(28,1,.1,100);B.position.set(0,0,7),B.lookAt(0,0,0);const q=new Em({alpha:!0,antialias:!0});q.setPixelRatio(Math.min(window.devicePixelRatio,2)),q.setClearColor(0,0),w.appendChild(q.domElement);const V=new wi,Q=[],k=[];for(const Tt of Jp){const X=Tt.map(K=>Qp[K]),ot=$p(X),Et=jx(X,ot),Ct=Et.x,pt=Et.y,At=Et.z,[ge,oe,ue]=X,re=[oe[0]-ge[0],oe[1]-ge[1],oe[2]-ge[2]],Yt=[ue[0]-ge[0],ue[1]-ge[1],ue[2]-ge[2]],ie=re[1]*Yt[2]-re[2]*Yt[1],Be=re[2]*Yt[0]-re[0]*Yt[2],nn=re[0]*Yt[1]-re[1]*Yt[0],De=ie*ot.x+Be*ot.y+nn*ot.z>=0?X:[...X].reverse();for(let K=1;K<De.length-1;K++)Q.push(...De[0],...De[K],...De[K+1]),k.push(Ct,pt,At,Ct,pt,At,Ct,pt,At)}V.setAttribute("position",new Hn(Q,3)),V.setAttribute("normal",new Hn(k,3));const W=Dl[o],nt=Hc(12,e),at=new Zn(V,new _m({color:W.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:nt,depthWrite:!e})),ht=new vn().setFromAxisAngle(new tt(0,1,0),Math.PI),St=()=>{ux.forEach((Tt,X)=>{const ot=jp[X],Et=cx(ot,W.label);if(!Et)return;const Ct=$p(Jp[X].map(At=>Qp[At]));Et.position.copy(Ct),Et.position.addScaledVector(Tt.normal,.01),Et.quaternion.copy(Tt.orientation),at.add(Et);const pt=cx(ot,q3);pt&&(pt.renderOrder=-1,pt.position.copy(Ct),pt.position.addScaledVector(Tt.normal,-.05),pt.quaternion.copy(Tt.orientation).multiply(ht),at.add(pt))})};document.fonts.load("700 160px dice-font").then(St),O.add(at),O.add(new ym(16777215,1)),O.add(new Sm(16777215,12303291,1));const kt=new Mm(16777215,1);kt.position.set(3,4,5),O.add(kt),s.current=at;const Ut=()=>{const Tt=w.clientWidth,X=w.clientHeight;q.setSize(Tt,X,!1),B.aspect=Tt/X,B.updateProjectionMatrix()},H=new ResizeObserver(Ut);H.observe(w),Ut();const mt=()=>{u.current=requestAnimationFrame(mt),q.render(O,B)};return mt(),()=>{H.disconnect(),u.current&&cancelAnimationFrame(u.current),d.current&&cancelAnimationFrame(d.current),V.dispose(),at.material.dispose(),at.children.forEach(Tt=>{const X=Tt;X.geometry.dispose(),X.material.map?.dispose(),X.material.dispose()}),q.dispose(),w.removeChild(q.domElement),s.current=null}},[o,e]),ne.jsxs("div",{className:`stage stage--twelve-sided${T?" is-dragging":""}`,onPointerDown:z,onPointerMove:E,onPointerUp:L,onPointerCancel:L,children:[ne.jsx("div",{ref:i,className:"three-scene"}),ne.jsx("p",{className:"hint",children:_?"Rolling...":x||(P!==null?`You rolled ${P}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}function Z3({sides:o=6,color:e="red",translucent:i=!0}){return o===6?ne.jsx(v3,{color:e,translucent:i}):o===8?ne.jsx(C3,{color:e,translucent:i}):o===10?ne.jsx(B3,{color:e,translucent:i}):o===12?ne.jsx(Y3,{color:e,translucent:i}):null}const K3=[0,45,90,135];function Q3({isOpen:o,onClick:e,ref:i}){return ne.jsx("button",{ref:i,type:"button",className:"icon-button settings-button","aria-label":"Settings","aria-haspopup":"dialog","aria-expanded":o,onClick:e,children:ne.jsxs("span",{className:"settings-button__cog","aria-hidden":"true",children:[K3.map(s=>ne.jsx("span",{className:`settings-button__tooth settings-button__tooth--${s}`},s)),ne.jsx("span",{className:"settings-button__hub"})]})})}const J3='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',j3=[6,8,10,12],$3=["red","yellow","green","blue","black","white"];function t2({sides:o,color:e,translucent:i,onSettingsChange:s,onClose:u}){const f=Rt.useRef(null),d=Rt.useRef(null);return Rt.useEffect(()=>{d.current?.focus();const h=p=>{if(p.key==="Escape"){u();return}if(p.key!=="Tab")return;const m=f.current;if(!m)return;const S=Array.from(m.querySelectorAll(J3));if(S.length===0)return;const _=S[0],v=S[S.length-1],T=document.activeElement;if(!m.contains(T)){p.preventDefault(),(p.shiftKey?v:_).focus();return}p.shiftKey&&T===_?(p.preventDefault(),v.focus()):!p.shiftKey&&T===v&&(p.preventDefault(),_.focus())};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[u]),ne.jsxs("div",{ref:f,className:"settings-dialog",role:"dialog","aria-modal":"true","aria-label":"Settings",children:[ne.jsxs("div",{className:"settings-dialog__content",children:[ne.jsx("fieldset",{className:"sides-picker","aria-label":"Sides",children:ne.jsx("div",{className:"sides-picker__options",children:j3.map((h,p)=>ne.jsxs(Rt.Fragment,{children:[p>0&&ne.jsx("span",{className:"sides-picker__divider","aria-hidden":"true"}),ne.jsxs("span",{className:"sides-picker__option",children:[ne.jsx("input",{className:"sides-picker__input",type:"radio",name:"sides",id:`sides-${h}`,value:h,checked:o===h,onChange:()=>s({sides:h})}),ne.jsx("label",{className:"sides-picker__label",htmlFor:`sides-${h}`,children:h})]})]},h))})}),ne.jsx("fieldset",{className:"color-picker","aria-label":"Color",children:ne.jsx("div",{className:"color-picker__options",children:$3.map(h=>ne.jsxs("span",{className:"color-picker__option",children:[ne.jsx("input",{className:"color-picker__input",type:"radio",name:"color",id:`color-${h}`,value:h,checked:e===h,"aria-label":h,onChange:()=>s({color:h})}),ne.jsx("label",{className:"color-picker__label",htmlFor:`color-${h}`,style:{backgroundColor:`rgb(${Dl[h].cssTop.join(" ")})`}})]},h))})}),ne.jsxs("label",{className:"translucent-toggle",children:[ne.jsx("input",{className:"translucent-toggle__input",type:"checkbox",checked:i,onChange:h=>s({translucent:h.target.checked})}),ne.jsx("span",{className:"translucent-toggle__text",children:"Translucent"}),ne.jsx("span",{className:"translucent-toggle__track","aria-hidden":"true",children:ne.jsx("span",{className:"translucent-toggle__knob"})})]})]}),ne.jsx("button",{ref:d,type:"button",className:"icon-button settings-dialog__close","aria-label":"Close",onClick:u,children:ne.jsxs("span",{className:"settings-dialog__x","aria-hidden":"true",children:[ne.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--45"}),ne.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--135"})]})})]})}function e2(){const[o,e]=Rt.useState(()=>h3()),[i,s]=Rt.useState(!1),u=Rt.useRef(null),f=Rt.useCallback(h=>{e(p=>({...p,...h}))},[]),d=Rt.useCallback(()=>{s(!1),u.current?.focus()},[]);return ne.jsxs(ne.Fragment,{children:[ne.jsx(Q3,{ref:u,isOpen:i,onClick:()=>s(!0)}),i&&ne.jsx(t2,{sides:o.sides,color:o.color,translucent:o.translucent,onSettingsChange:f,onClose:d}),ne.jsx(Z3,{sides:o.sides,color:o.color,translucent:o.translucent})]})}const $x=document.getElementById("root");if(!$x)throw new Error("Root element was not found.");VE.createRoot($x).render(ne.jsx(Rt.StrictMode,{children:ne.jsx(e2,{})}));

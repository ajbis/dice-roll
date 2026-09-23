(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();var rh={exports:{}},al={};var dv;function pE(){if(dv)return al;dv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var h in u)h!=="key"&&(f[h]=u[h])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:d,ref:u!==void 0?u:null,props:f}}return al.Fragment=e,al.jsx=i,al.jsxs=i,al}var hv;function mE(){return hv||(hv=1,rh.exports=pE()),rh.exports}var cn=mE(),sh={exports:{}},se={};var pv;function gE(){if(pv)return se;pv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),T=Symbol.iterator;function R(H){return H===null||typeof H!="object"?null:(H=T&&H[T]||H["@@iterator"],typeof H=="function"?H:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function w(H,pt,bt){this.props=H,this.context=pt,this.refs=x,this.updater=bt||O}w.prototype.isReactComponent={},w.prototype.setState=function(H,pt){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,pt,"setState")},w.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function F(){}F.prototype=w.prototype;function C(H,pt,bt){this.props=H,this.context=pt,this.refs=x,this.updater=bt||O}var U=C.prototype=new F;U.constructor=C,M(U,w.prototype),U.isPureReactComponent=!0;var D=Array.isArray;function I(){}var E={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function N(H,pt,bt){var J=bt.ref;return{$$typeof:o,type:H,key:pt,ref:J!==void 0?J:null,props:bt}}function z(H,pt){return N(H.type,pt,H.props)}function G(H){return typeof H=="object"&&H!==null&&H.$$typeof===o}function Y(H){var pt={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(bt){return pt[bt]})}var V=/\/+/g;function Z(H,pt){return typeof H=="object"&&H!==null&&H.key!=null?Y(""+H.key):pt.toString(36)}function X(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(I,I):(H.status="pending",H.then(function(pt){H.status==="pending"&&(H.status="fulfilled",H.value=pt)},function(pt){H.status==="pending"&&(H.status="rejected",H.reason=pt)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function W(H,pt,bt,J,ht){var Tt=typeof H;(Tt==="undefined"||Tt==="boolean")&&(H=null);var Dt=!1;if(H===null)Dt=!0;else switch(Tt){case"bigint":case"string":case"number":Dt=!0;break;case"object":switch(H.$$typeof){case o:case e:Dt=!0;break;case S:return Dt=H._init,W(Dt(H._payload),pt,bt,J,ht)}}if(Dt)return ht=ht(H),Dt=J===""?"."+Z(H,0):J,D(ht)?(bt="",Dt!=null&&(bt=Dt.replace(V,"$&/")+"/"),W(ht,pt,bt,"",function(Ie){return Ie})):ht!=null&&(G(ht)&&(ht=z(ht,bt+(ht.key==null||H&&H.key===ht.key?"":(""+ht.key).replace(V,"$&/")+"/")+Dt)),pt.push(ht)),1;Dt=0;var _t=J===""?".":J+":";if(D(H))for(var At=0;At<H.length;At++)J=H[At],Tt=_t+Z(J,At),Dt+=W(J,pt,bt,Tt,ht);else if(At=R(H),typeof At=="function")for(H=At.call(H),At=0;!(J=H.next()).done;)J=J.value,Tt=_t+Z(J,At++),Dt+=W(J,pt,bt,Tt,ht);else if(Tt==="object"){if(typeof H.then=="function")return W(X(H),pt,bt,J,ht);throw pt=String(H),Error("Objects are not valid as a React child (found: "+(pt==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":pt)+"). If you meant to render a collection of children, use an array instead.")}return Dt}function nt(H,pt,bt){if(H==null)return H;var J=[],ht=0;return W(H,J,"","",function(Tt){return pt.call(bt,Tt,ht++)}),J}function it(H){if(H._status===-1){var pt=H._result,bt=pt();bt.then(function(J){(H._status===0||H._status===-1)&&(H._status=1,H._result=J,bt.status===void 0&&(bt.status="fulfilled",bt.value=J))},function(J){(H._status===0||H._status===-1)&&(H._status=2,H._result=J,bt.status===void 0&&(bt.status="rejected",bt.reason=J))}),H._status===-1&&(H._status=0,H._result=bt)}if(H._status===1)return H._result.default;throw H._result}var dt=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var pt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(pt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)};function vt(H){var pt=E.T,bt={};bt.types=pt!==null?pt.types:null,E.T=bt;try{var J=H(),ht=E.S;ht!==null&&ht(bt,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(I,dt)}catch(Tt){dt(Tt)}finally{pt!==null&&bt.types!==null&&(pt.types=bt.types),E.T=pt}}function Gt(H){var pt=E.T;if(pt!==null){var bt=pt.types;bt===null?pt.types=[H]:bt.indexOf(H)===-1&&bt.push(H)}else vt(Gt.bind(null,H))}var zt={map:nt,forEach:function(H,pt,bt){nt(H,function(){pt.apply(this,arguments)},bt)},count:function(H){var pt=0;return nt(H,function(){pt++}),pt},toArray:function(H){return nt(H,function(pt){return pt})||[]},only:function(H){if(!G(H))throw Error("React.Children.only expected to receive a single React element child.");return H}};return se.Activity=v,se.Children=zt,se.Component=w,se.Fragment=i,se.Profiler=u,se.PureComponent=C,se.StrictMode=s,se.Suspense=g,se.ViewTransition=_,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,se.__COMPILER_RUNTIME={__proto__:null,c:function(H){return E.H.useMemoCache(H)}},se.addTransitionType=Gt,se.cache=function(H){return function(){return H.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(H,pt,bt){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var J=M({},H.props),ht=H.key;if(pt!=null)for(Tt in pt.key!==void 0&&(ht=""+pt.key),pt)!L.call(pt,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&pt.ref===void 0||(J[Tt]=pt[Tt]);var Tt=arguments.length-2;if(Tt===1)J.children=bt;else if(1<Tt){for(var Dt=Array(Tt),_t=0;_t<Tt;_t++)Dt[_t]=arguments[_t+2];J.children=Dt}return N(H.type,ht,J)},se.createContext=function(H){return H={$$typeof:d,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:f,_context:H},H},se.createElement=function(H,pt,bt){var J,ht={},Tt=null;if(pt!=null)for(J in pt.key!==void 0&&(Tt=""+pt.key),pt)L.call(pt,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ht[J]=pt[J]);var Dt=arguments.length-2;if(Dt===1)ht.children=bt;else if(1<Dt){for(var _t=Array(Dt),At=0;At<Dt;At++)_t[At]=arguments[At+2];ht.children=_t}if(H&&H.defaultProps)for(J in Dt=H.defaultProps,Dt)ht[J]===void 0&&(ht[J]=Dt[J]);return N(H,Tt,ht)},se.createRef=function(){return{current:null}},se.forwardRef=function(H){return{$$typeof:h,render:H}},se.isValidElement=G,se.lazy=function(H){return{$$typeof:S,_payload:{_status:-1,_result:H},_init:it}},se.memo=function(H,pt){return{$$typeof:m,type:H,compare:pt===void 0?null:pt}},se.startTransition=vt,se.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},se.use=function(H){return E.H.use(H)},se.useActionState=function(H,pt,bt){return E.H.useActionState(H,pt,bt)},se.useCallback=function(H,pt){return E.H.useCallback(H,pt)},se.useContext=function(H){return E.H.useContext(H)},se.useDebugValue=function(){},se.useDeferredValue=function(H,pt){return E.H.useDeferredValue(H,pt)},se.useEffect=function(H,pt){return E.H.useEffect(H,pt)},se.useEffectEvent=function(H){return E.H.useEffectEvent(H)},se.useId=function(){return E.H.useId()},se.useImperativeHandle=function(H,pt,bt){return E.H.useImperativeHandle(H,pt,bt)},se.useInsertionEffect=function(H,pt){return E.H.useInsertionEffect(H,pt)},se.useLayoutEffect=function(H,pt){return E.H.useLayoutEffect(H,pt)},se.useMemo=function(H,pt){return E.H.useMemo(H,pt)},se.useOptimistic=function(H,pt){return E.H.useOptimistic(H,pt)},se.useReducer=function(H,pt,bt){return E.H.useReducer(H,pt,bt)},se.useRef=function(H){return E.H.useRef(H)},se.useState=function(H){return E.H.useState(H)},se.useSyncExternalStore=function(H,pt,bt){return E.H.useSyncExternalStore(H,pt,bt)},se.useTransition=function(){return E.H.useTransition()},se.version="19.3.0",se}var mv;function zp(){return mv||(mv=1,sh.exports=gE()),sh.exports}var te=zp(),oh={exports:{}},rl={},lh={exports:{}},uh={};var gv;function _E(){return gv||(gv=1,(function(o){function e(X,W){var nt=X.length;X.push(W);t:for(;0<nt;){var it=nt-1>>>1,dt=X[it];if(0<u(dt,W))X[it]=W,X[nt]=dt,nt=it;else break t}}function i(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var W=X[0],nt=X.pop();if(nt!==W){X[0]=nt;t:for(var it=0,dt=X.length,vt=dt>>>1;it<vt;){var Gt=2*(it+1)-1,zt=X[Gt],H=Gt+1,pt=X[H];if(0>u(zt,nt))H<dt&&0>u(pt,zt)?(X[it]=pt,X[H]=nt,it=H):(X[it]=zt,X[Gt]=nt,it=Gt);else if(H<dt&&0>u(pt,nt))X[it]=pt,X[H]=nt,it=H;else break t}}return W}function u(X,W){var nt=X.sortIndex-W.sortIndex;return nt!==0?nt:X.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var g=[],m=[],S=1,v=null,_=3,T=!1,R=!1,O=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function C(X){for(var W=i(m);W!==null;){if(W.callback===null)s(m);else if(W.startTime<=X)s(m),W.sortIndex=W.expirationTime,e(g,W);else break;W=i(m)}}function U(X){if(O=!1,C(X),!R)if(i(g)!==null)R=!0,D||(D=!0,G());else{var W=i(m);W!==null&&Z(U,W.startTime-X)}}var D=!1,I=-1,E=5,L=-1;function N(){return M?!0:!(o.unstable_now()-L<E)}function z(){if(M=!1,D){var X=o.unstable_now();L=X;var W=!0;try{t:{R=!1,O&&(O=!1,w(I),I=-1),T=!0;var nt=_;try{e:{for(C(X),v=i(g);v!==null&&!(v.expirationTime>X&&N());){var it=v.callback;if(typeof it=="function"){v.callback=null,_=v.priorityLevel;var dt=it(v.expirationTime<=X);if(X=o.unstable_now(),typeof dt=="function"){v.callback=dt,C(X),W=!0;break e}v===i(g)&&s(g),C(X)}else s(g);v=i(g)}if(v!==null)W=!0;else{var vt=i(m);vt!==null&&Z(U,vt.startTime-X),W=!1}}break t}finally{v=null,_=nt,T=!1}W=void 0}}finally{W?G():D=!1}}}var G;if(typeof F=="function")G=function(){F(z)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,V=Y.port2;Y.port1.onmessage=z,G=function(){V.postMessage(null)}}else G=function(){x(z,0)};function Z(X,W){I=x(function(){X(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(X){switch(_){case 1:case 2:case 3:var W=3;break;default:W=_}var nt=_;_=W;try{return X()}finally{_=nt}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(X,W){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var nt=_;_=X;try{return W()}finally{_=nt}},o.unstable_scheduleCallback=function(X,W,nt){var it=o.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?it+nt:it):nt=it,X){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=nt+dt,X={id:S++,callback:W,priorityLevel:X,startTime:nt,expirationTime:dt,sortIndex:-1},nt>it?(X.sortIndex=nt,e(m,X),i(g)===null&&X===i(m)&&(O?(w(I),I=-1):O=!0,Z(U,nt-it))):(X.sortIndex=dt,e(g,X),R||T||(R=!0,D||(D=!0,G()))),X},o.unstable_shouldYield=N,o.unstable_wrapCallback=function(X){var W=_;return function(){var nt=_;_=W;try{return X.apply(this,arguments)}finally{_=nt}}}})(uh)),uh}var _v;function vE(){return _v||(_v=1,lh.exports=_E()),lh.exports}var ch={exports:{}},Un={};var vv;function SE(){if(vv)return Un;vv=1;var o=zp();function e(S){var v="https://react.dev/errors/"+S;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)v+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+S+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(S,v,_){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:T==null?null:T===d?d:""+T,children:S,containerInfo:v,implementation:_}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(S,v){if(S==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.browser=function(S){return{$$typeof:f,_reason:S}},Un.createPortal=function(S,v){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(e(299));return h(S,v,null,_)},Un.flushSync=function(S){var v=g.T,_=s.p;try{if(g.T=null,s.p=2,S)return S()}finally{g.T=v,s.p=_,s.d.f()}},Un.preconnect=function(S,v){typeof S=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(S,v))},Un.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},Un.preinit=function(S,v){if(typeof S=="string"&&v&&typeof v.as=="string"){var _=v.as,T=m(_,v.crossOrigin),R=typeof v.integrity=="string"?v.integrity:void 0,O=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;_==="style"?s.d.S(S,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:T,integrity:R,fetchPriority:O}):_==="script"&&s.d.X(S,{crossOrigin:T,integrity:R,fetchPriority:O,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Un.preinitModule=function(S,v){if(typeof S=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var _=m(v.as,v.crossOrigin);s.d.M(S,{crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&s.d.M(S)},Un.preload=function(S,v){if(typeof S=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var _=v.as,T=m(_,v.crossOrigin);s.d.L(S,_,{crossOrigin:T,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Un.preloadModule=function(S,v){if(typeof S=="string")if(v){var _=m(v.as,v.crossOrigin);s.d.m(S,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else s.d.m(S)},Un.requestFormReset=function(S){s.d.r(S)},Un.unstable_batchedUpdates=function(S,v){return S(v)},Un.useFormState=function(S,v,_){return g.H.useFormState(S,v,_)},Un.useFormStatus=function(){return g.H.useHostTransitionStatus()},Un.version="19.3.0",Un}var Sv;function xE(){if(Sv)return ch.exports;Sv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ch.exports=SE(),ch.exports}var xv;function ME(){if(xv)return rl;xv=1;var o=vE(),e=zp(),i=xE();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(f(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var l=a.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===a)return g(l),t;if(c===r)return g(l),n;c=c.sibling}throw Error(s(188))}if(a.return!==r.return)a=l,r=c;else{for(var p=!1,A=l.child;A;){if(A===a){p=!0,a=l,r=c;break}if(A===r){p=!0,r=l,a=c;break}A=A.sibling}if(!p){for(A=c.child;A;){if(A===a){p=!0,a=c,r=l;break}if(A===r){p=!0,r=c,a=l;break}A=A.sibling}if(!p)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}function v(t,n,a,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&v(t.child,n,a,r,l,c))return!0;t=t.sibling}return!1}function _(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function T(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function R(t){var n=[null,null],a=_(t);return a===null||O(n,t,a.child,{foundSelf:!1}),n}function O(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&O(t,n,a.child,r))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,w=null;function F(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function C(t,n,a){return t===a?(w=t,!1):t===n?(w!==null&&(x=t),!0):!1}function U(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function D(t,n,a){for(var r=0,l=t;l;l=a(l))r++;l=0;for(var c=n;c;c=a(c))l++;for(;0<r-l;)t=a(t),r--;for(;0<l-r;)n=a(n),l--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var I=Object.assign,E=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),it=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),vt=Symbol.for("react.activity"),Gt=Symbol.for("react.legacy_hidden"),zt=Symbol.for("react.memo_cache_sentinel"),H=Symbol.for("react.view_transition"),pt=Symbol.for("react.recoverable"),bt=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=bt&&t[bt]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Symbol.for("react.client.reference");function Tt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ht?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case z:return"Fragment";case Y:return"Profiler";case G:return"StrictMode";case W:return"Suspense";case nt:return"SuspenseList";case vt:return"Activity";case H:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case N:return"Portal";case Z:return t.displayName||"Context";case V:return(t._context.displayName||"Context")+".Consumer";case X:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case it:return n=t.displayName||null,n!==null?n:Tt(t.type)||"Memo";case dt:n=t._payload,t=t._init;try{return Tt(t(n))}catch{}}return null}var Dt=Array.isArray,_t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,At=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ie={pending:!1,data:null,method:null,action:null},ue=[],me=-1;function ge(t){return{current:t}}function jt(t){0>me||(t.current=ue[me],ue[me]=null,me--)}function ee(t,n){me++,ue[me]=t.current,t.current=n}var be=ge(null),dn=ge(null),ze=ge(null),$e=ge(null);function Q(t,n){switch(ee(ze,n),ee(dn,t),ee(be,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?M_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=M_(n),t=y_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}jt(be),ee(be,t)}function nn(){jt(be),jt(dn),jt(ze)}function Pe(t){var n=t.memoizedState;n!==null&&(Is._currentValue=n.memoizedState,ee($e,t)),n=be.current;var a=y_(n,t.type);n!==a&&(ee(dn,t),ee(be,a))}function P(t){dn.current===t&&(jt(be),jt(dn)),$e.current===t&&(jt($e),Is._currentValue=Ie)}var y,et;function ut(t){if(y===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);y=n&&n[1]||"",et=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+y+t+et}var mt=!1;function Rt(t,n){if(!t||mt)return"";mt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(Ot){var j=Ot}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(Ot){j=Ot}xt=!1;try{var lt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),xt=!0,new t}finally{xt&&(lt!==void 0?Object.defineProperty(t.prototype,"props",lt):delete t.prototype.props)}}}else{try{throw Error()}catch(Ot){j=Ot}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(Ot){if(Ot&&j&&typeof Ot.stack=="string")return[Ot.stack,j.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),p=c[0],A=c[1];if(p&&A){var B=p.split(`
`),tt=A.split(`
`);for(l=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;l<tt.length&&!tt[l].includes("DetermineComponentFrameRoot");)l++;if(r===B.length||l===tt.length)for(r=B.length-1,l=tt.length-1;1<=r&&0<=l&&B[r]!==tt[l];)l--;for(;1<=r&&0<=l;r--,l--)if(B[r]!==tt[l]){if(r!==1||l!==1)do if(r--,l--,0>l||B[r]!==tt[l]){var ct=`
`+B[r].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=r&&0<=l);break}}}finally{mt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ut(a):""}function Ut(t,n){switch(t.tag){case 26:case 27:case 5:return ut(t.type);case 16:return ut("Lazy");case 13:return t.child!==n&&n!==null?ut("Suspense Fallback"):ut("Suspense");case 19:return ut("SuspenseList");case 0:case 15:return Rt(t.type,!1);case 11:return Rt(t.type.render,!1);case 1:return Rt(t.type,!0);case 31:return ut("Activity");case 30:return ut("ViewTransition");default:return""}}function gt(t){try{var n="",a=null;do n+=Ut(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var yt=Object.prototype.hasOwnProperty,wt=o.unstable_scheduleCallback,$t=o.unstable_cancelCallback,It=o.unstable_shouldYield,Pt=o.unstable_requestPaint,kt=o.unstable_now,ie=o.unstable_getCurrentPriorityLevel,le=o.unstable_ImmediatePriority,K=o.unstable_UserBlockingPriority,Ct=o.unstable_NormalPriority,Mt=o.unstable_LowPriority,Nt=o.unstable_IdlePriority,Xt=o.log,Et=o.unstable_setDisableYieldValue,Jt=null,Vt=null;function we(t){if(typeof Xt=="function"&&Et(t),Vt&&typeof Vt.setStrictMode=="function")try{Vt.setStrictMode(Jt,t)}catch{}}var ce=Math.clz32?Math.clz32:Lc,ti=Math.log,mi=Math.LN2;function Lc(t){return t>>>=0,t===0?32:31-(ti(t)/mi|0)|0}var jr=256,vr=262144,za=4194304;function da(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Sr(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,p=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~c,r!==0?l=da(r):(p&=A,p!==0?l=da(p):a||(a=A&~t,a!==0&&(l=da(a))))):(A=r&~c,A!==0?l=da(A):p!==0?l=da(p):a||(a=r&~t,a!==0&&(l=da(a)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:l}function Ba(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Gi(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-ce(a),l=1<<r;n|=t[r],a&=~l}return n}function uo(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function co(){var t=za;return za<<=1,(za&62914560)===0&&(za=4194304),t}function $r(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Vi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function bl(t,n,a,r,l,c){var p=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,B=t.expirationTimes,tt=t.hiddenUpdates;for(a=p&~a;0<a;){var ct=31-ce(a),xt=1<<ct;A[ct]=0,B[ct]=-1;var j=tt[ct];if(j!==null)for(tt[ct]=null,ct=0;ct<j.length;ct++){var lt=j[ct];lt!==null&&(lt.lane&=-536870913)}a&=~xt}r!==0&&xr(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(p&~n))}function xr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-ce(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function fo(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-ce(a),l=1<<r;l&n|t[r]&n&&(t[r]|=n),a&=~l}}function ho(t,n){var a=n&-n;return a=(a&42)!==0?1:po(a),(a&(t.suspendedLanes|n))!==0?0:a}function po(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function mo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Al(){var t=At.p;return t!==0?t:(t=window.event,t===void 0?32:rv(t.type))}function Rl(t,n){var a=At.p;try{return At.p=t,n()}finally{At.p=a}}var gi=Math.random().toString(36).slice(2),b="__reactFiber$"+gi,k="__reactProps$"+gi,ft="__reactContainer$"+gi,st="__reactEvents$"+gi,ot="__reactListeners$"+gi,Bt="__reactHandles$"+gi,Wt="__reactResources$"+gi,Lt="__reactMarker$"+gi,Zt="__reactLoad$"+gi;function Kt(t){delete t[b],delete t[k],delete t[ot],delete t[Bt]}function re(t){var n;if(n=t[b])return n;for(var a=t.parentNode;a;){if(n=a[ft]||a[b]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=F_(t);t!==null;){if(a=t[b])return a;t=F_(t)}return n}t=a,a=t.parentNode}return null}function fe(t){if(t=t[b]||t[ft]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function qt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Me(t){var n=t[Wt];return n||(n=t[Wt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ve(t){t[Lt]=!0}function Ye(t){t[Zt]=void 0}var Ge=new Set,vn={};function Ft(t,n){sn(t,n),sn(t+"Capture",n)}function sn(t,n){for(vn[t]=n,t=0;t<n.length;t++)Ge.add(n[t])}var De=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fn={},ei={};function Xi(t){return yt.call(ei,t)?!0:yt.call(Fn,t)?!1:De.test(t)?ei[t]=!0:(Fn[t]=!0,!1)}var Se=!1;function Fe(){var t=Se;return Se=!1,t}function Qe(t,n,a){if(Xi(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function ni(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function Ae(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function on(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ha(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Cl(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(p){a=""+p,c.call(this,p)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Oc(t){if(!t._valueTracker){var n=ha(t)?"checked":"value";t._valueTracker=Cl(t,n,""+t[n])}}function um(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=ha(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var Px=/[\n"\\]/g;function _i(t){return t.replace(Px,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pc(t,n,a,r,l,c,p,A){t.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.type=p:t.removeAttribute("type"),n!=null?p==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+on(n)):t.value!==""+on(n)&&(t.value=""+on(n)):p!=="submit"&&p!=="reset"||t.removeAttribute("value"),n!=null?p==="number"&&t.value==n?Ic(t,on(t.value)):Ic(t,on(n)):a!=null?Ic(t,on(a)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+on(A):t.removeAttribute("name")}function cm(t,n,a,r,l,c,p,A){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Oc(t);return}a=a!=null?""+on(a):"",n=n!=null?""+on(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.name=p),Oc(t)}function Ic(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function ts(t,n,a,r){if(t=t.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=n.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&r&&(t[a].defaultSelected=!0)}else{for(a=""+on(a),n=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function fm(t,n,a){if(n!=null&&(n=""+on(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+on(a):""}function dm(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Dt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=on(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Oc(t)}function es(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ix=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hm(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Ix.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function pm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Se=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&a[l]!==r&&(hm(t,l,r),Se=!0)}else for(var c in n)n.hasOwnProperty(c)&&hm(t,c,n[c])}function zc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wl(t){return Bx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ki(){}var Bc=null;function Fc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ns=null,is=null;function mm(t){var n=fe(t);if(n&&(t=n.stateNode)){var a=t[k]||null;t:switch(t=n.stateNode,n.type){case"input":if(Pc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_i(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var l=r[k]||null;if(!l)throw Error(s(90));Pc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&um(r)}break t;case"textarea":fm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ts(t,!!a.multiple,n,!1)}}}var Hc=!1;function gm(t,n,a){if(Hc)return t(n,a);Hc=!0;try{var r=t(n);return r}finally{if(Hc=!1,(ns!==null||is!==null)&&(wu(),ns&&(n=ns,t=is,is=ns=null,mm(n),t)))for(n=0;n<t.length;n++)mm(t[n])}}function go(t,n){var a=t.stateNode;if(a===null)return null;var r=a[k]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gc=!1;if(pa)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){Gc=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{Gc=!1}var Fa=null,Vc=null,Dl=null;function _m(){if(Dl)return Dl;var t,n=Vc,a=n.length,r,l="value"in Fa?Fa.value:Fa.textContent,c=l.length;for(t=0;t<a&&n[t]===l[t];t++);var p=a-t;for(r=1;r<=p&&n[a-r]===l[c-r];r++);return Dl=l.slice(t,1<r?1-r:void 0)}function Ul(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Nl(){return!0}function vm(){return!1}function Hn(t){function n(a,r,l,c,p){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(c):c[A]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Nl:vm,this.isPropagationStopped=vm,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ll=Hn(Ha),vo=I({},Ha,{view:0,detail:0}),Fx=Hn(vo),Xc,kc,So,Ol=I({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(Xc=t.screenX-So.screenX,kc=t.screenY-So.screenY):kc=Xc=0,So=t),Xc)},movementY:function(t){return"movementY"in t?t.movementY:kc}}),Sm=Hn(Ol),Hx=I({},Ol,{dataTransfer:0}),Gx=Hn(Hx),Vx=I({},vo,{relatedTarget:0}),Wc=Hn(Vx),Xx=I({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),kx=Hn(Xx),Wx=I({},Ha,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qx=Hn(Wx),Yx=I({},Ha,{data:0}),xm=Hn(Yx),Zx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Qx[t])?!!n[t]:!1}function qc(){return Jx}var jx=I({},vo,{key:function(t){if(t.key){var n=Zx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(t){return t.type==="keypress"?Ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$x=Hn(jx),tM=I({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mm=Hn(tM),eM=I({},Ha,{submitter:0}),nM=Hn(eM),iM=I({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),aM=Hn(iM),rM=I({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),sM=Hn(rM),oM=I({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lM=Hn(oM),uM=I({},Ha,{newState:0,oldState:0,source:0}),cM=Hn(uM),fM=[9,13,27,32],Yc=pa&&"CompositionEvent"in window,xo=null;pa&&"documentMode"in document&&(xo=document.documentMode);var dM=pa&&"TextEvent"in window&&!xo,ym=pa&&(!Yc||xo&&8<xo&&11>=xo),Em=" ",Tm=!1;function bm(t,n){switch(t){case"keyup":return fM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Am(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function hM(t,n){switch(t){case"compositionend":return Am(n);case"keypress":return n.which!==32?null:(Tm=!0,Em);case"textInput":return t=n.data,t===Em&&Tm?null:t;default:return null}}function pM(t,n){if(as)return t==="compositionend"||!Yc&&bm(t,n)?(t=_m(),Dl=Vc=Fa=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ym&&n.locale!=="ko"?null:n.data;default:return null}}var mM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!mM[t.type]:n==="textarea"}function Cm(t,n,a,r){ns?is?is.push(r):is=[r]:ns=r,n=Pu(n,"onChange"),0<n.length&&(a=new Ll("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Mo=null,yo=null;function gM(t){m_(t,0)}function Pl(t){var n=qt(t);if(um(n))return t}function wm(t,n){if(t==="change")return n}var Dm=!1;if(pa){var Zc;if(pa){var Kc="oninput"in document;if(!Kc){var Um=document.createElement("div");Um.setAttribute("oninput","return;"),Kc=typeof Um.oninput=="function"}Zc=Kc}else Zc=!1;Dm=Zc&&(!document.documentMode||9<document.documentMode)}function Nm(){Mo&&(Mo.detachEvent("onpropertychange",Lm),yo=Mo=null)}function Lm(t){if(t.propertyName==="value"&&Pl(yo)){var n=[];Cm(n,yo,t,Fc(t)),gm(gM,n)}}function _M(t,n,a){t==="focusin"?(Nm(),Mo=n,yo=a,Mo.attachEvent("onpropertychange",Lm)):t==="focusout"&&Nm()}function vM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pl(yo)}function SM(t,n){if(t==="click")return Pl(n)}function xM(t,n){if(t==="input"||t==="change")return Pl(n)}function MM(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ii=typeof Object.is=="function"?Object.is:MM;function Eo(t,n){if(ii(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!yt.call(n,l)||!ii(t[l],n[l]))return!1}return!0}function Qc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Om(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pm(t,n){var a=Om(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Om(a)}}function Im(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Im(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function zm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qc(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qc(t.document)}return n}function Jc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var yM=pa&&"documentMode"in document&&11>=document.documentMode,rs=null,jc=null,To=null,$c=!1;function Bm(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$c||rs==null||rs!==Qc(r)||(r=rs,"selectionStart"in r&&Jc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),To&&Eo(To,r)||(To=r,r=Pu(jc,"onSelect"),0<r.length&&(n=new Ll("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=rs)))}function Mr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ss={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionrun:Mr("Transition","TransitionRun"),transitionstart:Mr("Transition","TransitionStart"),transitioncancel:Mr("Transition","TransitionCancel"),transitionend:Mr("Transition","TransitionEnd")},tf={},Fm={};pa&&(Fm=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function yr(t){if(tf[t])return tf[t];if(!ss[t])return t;var n=ss[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Fm)return tf[t]=n[a];return t}var Hm=yr("animationend"),Gm=yr("animationiteration"),Vm=yr("animationstart"),EM=yr("transitionrun"),TM=yr("transitionstart"),bM=yr("transitioncancel"),Xm=yr("transitionend"),km=new Map,ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ef.push("scrollEnd");function Ri(t,n){km.set(t,n),Ft(n,[t])}var AM=0;function ma(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ui.identifierPrefix;var a=AM++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Wm(t){if(t==null||typeof t=="string")return t;var n=null,a=As;if(a!==null)for(var r=0;r<a.length;r++){var l=t[a[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function ga(t,n){return t=Wm(t),n=Wm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Il=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},vi=[],os=0,nf=0;function zl(){for(var t=os,n=nf=os=0;n<t;){var a=vi[n];vi[n++]=null;var r=vi[n];vi[n++]=null;var l=vi[n];vi[n++]=null;var c=vi[n];if(vi[n++]=null,r!==null&&l!==null){var p=r.pending;p===null?l.next=l:(l.next=p.next,p.next=l),r.pending=l}c!==0&&qm(a,l,c)}}function Bl(t,n,a,r){vi[os++]=t,vi[os++]=n,vi[os++]=a,vi[os++]=r,nf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function af(t,n,a,r){return Bl(t,n,a,r),Fl(t)}function Er(t,n){return Bl(t,null,null,n),Fl(t)}function qm(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var l=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-ce(a),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=a|536870912),c):null}function Fl(t){if(50<qo)throw qo=0,Cu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ls={};function RM(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,r){return new RM(t,n,a,r)}function rf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _a(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ym(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Hl(t,n,a,r,l,c){var p=0;if(r=t,typeof r=="function")rf(r)&&(p=1);else if(typeof r=="string")p=eE(t,a,be.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case vt:return t=Wn(31,a,n,l),t.elementType=vt,t.lanes=c,t;case z:return Tr(a.children,l,c,n);case G:p=8,l|=24;break;case Y:return t=Wn(12,a,n,l|2),t.elementType=Y,t.lanes=c,t;case W:return t=Wn(13,a,n,l),t.elementType=W,t.lanes=c,t;case nt:return t=Wn(19,a,n,l),t.elementType=nt,t.lanes=c,t;case Gt:case H:return t=l|32,t=Wn(30,a,n,t),t.elementType=H,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Z:p=10;break t;case V:p=9;break t;case X:p=11;break t;case it:p=14;break t;case dt:p=16,r=null;break t}p=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Wn(p,a,n,l),n.elementType=t,n.type=r,n.lanes=c,n}function Tr(t,n,a,r){return t=Wn(7,t,r,n),t.lanes=a,t}function sf(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function Zm(t){var n=Wn(18,null,null,0);return n.stateNode=t,n}function of(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Km=new WeakMap;function Si(t,n){if(typeof t=="object"&&t!==null){var a=Km.get(t);return a!==void 0?a:(n={value:t,source:n,stack:gt(n)},Km.set(t,n),n)}return{value:t,source:n,stack:gt(n)}}var us=[],cs=0,Gl=null,bo=0,xi=[],Mi=0,Ga=null,Wi=1,qi="";function va(t,n){us[cs++]=bo,us[cs++]=Gl,Gl=t,bo=n}function Qm(t,n,a){xi[Mi++]=Wi,xi[Mi++]=qi,xi[Mi++]=Ga,Ga=t;var r=Wi;t=qi;var l=32-ce(r)-1;r&=~(1<<l),a+=1;var c=32-ce(n)+l;if(30<c){var p=l-l%5;c=(r&(1<<p)-1).toString(32),r>>=p,l-=p,Wi=1<<32-ce(n)+l|a<<l|r,qi=c+t}else Wi=1<<c|a<<l|r,qi=t}function Vl(t){t.return!==null&&(va(t,1),Qm(t,1,0))}function lf(t){for(;t===Gl;)Gl=us[--cs],us[cs]=null,bo=us[--cs],us[cs]=null;for(;t===Ga;)Ga=xi[--Mi],xi[Mi]=null,qi=xi[--Mi],xi[Mi]=null,Wi=xi[--Mi],xi[Mi]=null}function Jm(t,n){xi[Mi++]=Wi,xi[Mi++]=qi,xi[Mi++]=Ga,Wi=n.id,qi=n.overflow,Ga=t}var yn=null,Je=null,xe=!1,Va=null,yi=!1,uf=Error(s(519));function Xa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ao(Si(n,t)),uf}function jm(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[b]=t,n[k]=r,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<Zo.length;a++)Ee(Zo[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),cm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),dm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||S_(n.textContent,a)?(r.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),r.onScroll!=null&&Ee("scroll",n),r.onScrollEnd!=null&&Ee("scrollend",n),r.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Xa(t,!0)}function Xl(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:yn=yn.return}}function fs(t){if(t!==yn)return!1;if(!xe)return Xl(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Fd(t.type,t.memoizedProps)),a=!a),a&&Je&&Xa(t),Xl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Je=B_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Je=B_(t)}else n===27?(n=Je,rr(t.type)?(t=Zd,Zd=null,Je=t):Je=n):Je=yn?Ti(t.stateNode.nextSibling):null;return!0}function br(){Je=yn=null,xe=!1}function cf(){var t=Va;return t!==null&&(Zn===null?Zn=t:Zn.push.apply(Zn,t),Va=null),t}function Ao(t){Va===null?Va=[t]:Va.push(t)}var ff=ge(null),Ar=null,Sa=null;function ka(t,n,a){ee(ff,n._currentValue),n._currentValue=a}function xa(t){t._currentValue=ff.current,jt(ff)}function kl(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function df(t,n,a,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var p=l.child;c=c.firstContext;t:for(;c!==null;){var A=c;c=l;for(var B=0;B<n.length;B++)if(A.context===n[B]){c.lanes|=a,A=c.alternate,A!==null&&(A.lanes|=a),kl(c.return,a,t),r||(p=null);break t}c=A.next}}else if(l.tag===18){if(p=l.return,p===null)throw Error(s(341));p.lanes|=a,c=p.alternate,c!==null&&(c.lanes|=a),kl(p,a,t),p=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,p=l.alternate,p!==null&&(p.lanes|=a),kl(l.return,a,t),p=l.child,p=p!==null?p.sibling:null):p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===t){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}}function Rr(t,n,a,r){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var p=l.alternate;if(p===null)throw Error(s(387));if(p=p.memoizedProps,p!==null){var A=l.type;ii(l.pendingProps.value,p.value)||(t!==null?t.push(A):t=[A])}}else if(l===$e.current){if(p=l.alternate,p===null)throw Error(s(387));p.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Is):t=[Is])}l=l.return}return t!==null&&df(n,t,a,r),n.flags|=262144,t!==null}function Wl(t){for(t=t.firstContext;t!==null;){if(!ii(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Cr(t){Ar=t,Sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return $m(Ar,t)}function ql(t,n){return Ar===null&&Cr(t),$m(t,n)}function $m(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Sa===null){if(t===null)throw Error(s(308));Sa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Sa=Sa.next=n;return a}var CM=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},wM=o.unstable_scheduleCallback,DM=o.unstable_NormalPriority,hn={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hf(){return{controller:new CM,data:new Map,refCount:0}}function Ro(t){t.refCount--,t.refCount===0&&wM(DM,function(){t.controller.abort()})}function tg(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Co=null;function UM(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var wo=null,pf=0,wr=0,ds=null;function NM(t,n){if(wo===null){var a=wo=[];pf=0,wr=Dd(),ds={status:"pending",value:void 0,then:function(r){a.push(r)}}}return pf++,n.then(eg,eg),n}function eg(){if(--pf===0&&(Co=null,wo!==null)){ds!==null&&(ds.status="fulfilled");var t=wo;wo=null,wr=0,ds=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function LM(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var ng=_t.S;_t.S=function(t,n){if(Z0=kt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&NM(t,n),Co!==null)for(var a=Ds;a!==null;)tg(a,Co),a=a.next;if(a=t.types,a!==null){for(var r=Ds;r!==null;)tg(r,a),r=r.next;if(wr!==0){r=Co,r===null&&(r=Co=[]);for(var l=0;l<a.length;l++){var c=a[l];r.indexOf(c)===-1&&r.push(c)}}}ng!==null&&ng(t,n)};var Dr=ge(null);function mf(){var t=Dr.current;return t!==null?t:Ke.pooledCache}function Yl(t,n){n===null?ee(Dr,Dr.current):ee(Dr,n.pool)}function ig(){var t=mf();return t===null?null:{parent:hn._currentValue,pool:t}}var hs=Error(s(460)),gf=Error(s(474)),Zl=Error(s(542)),Kl={then:function(){}};function ag(t){return t=t.status,t==="fulfilled"||t==="rejected"}function rg(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,og(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(ki,ki);else{if(t=Ke,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,og(t),t}throw Nr=n,hs}}function Ur(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Nr=a,hs):a}}var Nr=null;function sg(){if(Nr===null)throw Error(s(459));var t=Nr;return Nr=null,t}function og(t){if(t===hs||t===Zl)throw Error(s(483))}var ps=null,Do=0;function Ql(t){var n=Do;return Do+=1,ps===null&&(ps=[]),rg(ps,t,n)}function Wa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Jl(t,n){throw n.$$typeof===E?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function lg(t){function n($,q){if(t){var rt=$.deletions;rt===null?($.deletions=[q],$.flags|=16):rt.push(q)}}function a($,q){if(!t)return null;for(;q!==null;)n($,q),q=q.sibling;return null}function r($){for(var q=new Map;$!==null;)$.key===null?q.set($.index,$):q.set($.key,$),$=$.sibling;return q}function l($,q){return $=_a($,q),$.index=0,$.sibling=null,$}function c($,q,rt){return $.index=rt,t?(rt=$.alternate,rt!==null?(rt=rt.index,rt<q?($.flags|=2,q):rt):($.flags|=134217730,q)):($.flags|=1048576,q)}function p($){return t&&$.alternate===null&&($.flags|=134217730),$}function A($,q,rt,St){return q===null||q.tag!==6?(q=sf(rt,$.mode,St),q.return=$,q):(q=l(q,rt),q.return=$,q)}function B($,q,rt,St){var Yt=rt.type;return Yt===z?($=ct($,q,rt.props.children,St,rt.key),Wa($,rt),$):q!==null&&(q.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===dt&&Ur(Yt)===q.type)?(q=l(q,rt.props),Wa(q,rt),q.return=$,q):(q=Hl(rt.type,rt.key,rt.props,null,$.mode,St),Wa(q,rt),q.return=$,q)}function tt($,q,rt,St){return q===null||q.tag!==4||q.stateNode.containerInfo!==rt.containerInfo||q.stateNode.implementation!==rt.implementation?(q=of(rt,$.mode,St),q.return=$,q):(q=l(q,rt.children||[]),q.return=$,q)}function ct($,q,rt,St,Yt){return q===null||q.tag!==7?(q=Tr(rt,$.mode,St,Yt),q.return=$,q):(q=l(q,rt),q.return=$,q)}function xt($,q,rt){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=sf(""+q,$.mode,rt),q.return=$,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case L:return rt=Hl(q.type,q.key,q.props,null,$.mode,rt),Wa(rt,q),rt.return=$,rt;case N:return q=of(q,$.mode,rt),q.return=$,q;case dt:return q=Ur(q),xt($,q,rt)}if(Dt(q)||J(q))return q=Tr(q,$.mode,rt,null),q.return=$,q;if(typeof q.then=="function")return xt($,Ql(q),rt);if(q.$$typeof===Z)return xt($,ql($,q),rt);Jl($,q)}return null}function j($,q,rt,St){var Yt=q!==null?q.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return Yt!==null?null:A($,q,""+rt,St);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case L:return rt.key===Yt?B($,q,rt,St):null;case N:return rt.key===Yt?tt($,q,rt,St):null;case dt:return rt=Ur(rt),j($,q,rt,St)}if(Dt(rt)||J(rt))return Yt!==null?null:ct($,q,rt,St,null);if(typeof rt.then=="function")return j($,q,Ql(rt),St);if(rt.$$typeof===Z)return j($,q,ql($,rt),St);Jl($,rt)}return null}function lt($,q,rt,St,Yt){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return $=$.get(rt)||null,A(q,$,""+St,Yt);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case L:return $=$.get(St.key===null?rt:St.key)||null,B(q,$,St,Yt);case N:return $=$.get(St.key===null?rt:St.key)||null,tt(q,$,St,Yt);case dt:return St=Ur(St),lt($,q,rt,St,Yt)}if(Dt(St)||J(St))return $=$.get(rt)||null,ct(q,$,St,Yt,null);if(typeof St.then=="function")return lt($,q,rt,Ql(St),Yt);if(St.$$typeof===Z)return lt($,q,rt,ql(q,St),Yt);Jl(q,St)}return null}function Ot($,q,rt,St){for(var Yt=null,Ce=null,ne=q,ae=q=0,gn=null;ne!==null&&ae<rt.length;ae++){ne.index>ae?(gn=ne,ne=null):gn=ne.sibling;var Le=j($,ne,rt[ae],St);if(Le===null){ne===null&&(ne=gn);break}t&&ne&&Le.alternate===null&&n($,ne),q=c(Le,q,ae),Ce===null?Yt=Le:Ce.sibling=Le,Ce=Le,ne=gn}if(ae===rt.length)return a($,ne),xe&&va($,ae),Yt;if(ne===null){for(;ae<rt.length;ae++)ne=xt($,rt[ae],St),ne!==null&&(q=c(ne,q,ae),Ce===null?Yt=ne:Ce.sibling=ne,Ce=ne);return xe&&va($,ae),Yt}for(ne=r(ne);ae<rt.length;ae++)gn=lt(ne,$,ae,rt[ae],St),gn!==null&&(t&&(Le=gn.alternate,Le!==null&&ne.delete(Le.key===null?ae:Le.key)),q=c(gn,q,ae),Ce===null?Yt=gn:Ce.sibling=gn,Ce=gn);return t&&ne.forEach(function(cr){return n($,cr)}),xe&&va($,ae),Yt}function Qt($,q,rt,St){if(rt==null)throw Error(s(151));for(var Yt=null,Ce=null,ne=q,ae=q=0,gn=null,Le=rt.next();ne!==null&&!Le.done;ae++,Le=rt.next()){ne.index>ae?(gn=ne,ne=null):gn=ne.sibling;var cr=j($,ne,Le.value,St);if(cr===null){ne===null&&(ne=gn);break}t&&ne&&cr.alternate===null&&n($,ne),q=c(cr,q,ae),Ce===null?Yt=cr:Ce.sibling=cr,Ce=cr,ne=gn}if(Le.done)return a($,ne),xe&&va($,ae),Yt;if(ne===null){for(;!Le.done;ae++,Le=rt.next())Le=xt($,Le.value,St),Le!==null&&(q=c(Le,q,ae),Ce===null?Yt=Le:Ce.sibling=Le,Ce=Le);return xe&&va($,ae),Yt}for(ne=r(ne);!Le.done;ae++,Le=rt.next())Le=lt(ne,$,ae,Le.value,St),Le!==null&&(t&&(gn=Le.alternate,gn!==null&&ne.delete(gn.key===null?ae:gn.key)),q=c(Le,q,ae),Ce===null?Yt=Le:Ce.sibling=Le,Ce=Le);return t&&ne.forEach(function(hE){return n($,hE)}),xe&&va($,ae),Yt}function pe($,q,rt,St){if(typeof rt=="object"&&rt!==null&&rt.type===z&&rt.key===null&&rt.props.ref===void 0&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case L:t:{for(var Yt=rt.key;q!==null;){if(q.key===Yt){if(Yt=rt.type,Yt===z){if(q.tag===7){a($,q.sibling),St=l(q,rt.props.children),Wa(St,rt),St.return=$,$=St;break t}}else if(q.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===dt&&Ur(Yt)===q.type){a($,q.sibling),St=l(q,rt.props),Wa(St,rt),St.return=$,$=St;break t}a($,q);break}else n($,q);q=q.sibling}rt.type===z?(St=Tr(rt.props.children,$.mode,St,rt.key),Wa(St,rt),St.return=$,$=St):(St=Hl(rt.type,rt.key,rt.props,null,$.mode,St),Wa(St,rt),St.return=$,$=St)}return p($);case N:t:{for(Yt=rt.key;q!==null;){if(q.key===Yt)if(q.tag===4&&q.stateNode.containerInfo===rt.containerInfo&&q.stateNode.implementation===rt.implementation){a($,q.sibling),St=l(q,rt.children||[]),St.return=$,$=St;break t}else{a($,q);break}else n($,q);q=q.sibling}St=of(rt,$.mode,St),St.return=$,$=St}return p($);case dt:return rt=Ur(rt),pe($,q,rt,St)}if(Dt(rt))return Ot($,q,rt,St);if(J(rt)){if(Yt=J(rt),typeof Yt!="function")throw Error(s(150));return rt=Yt.call(rt),Qt($,q,rt,St)}if(typeof rt.then=="function")return pe($,q,Ql(rt),St);if(rt.$$typeof===Z)return pe($,q,ql($,rt),St);Jl($,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,q!==null&&q.tag===6?(a($,q.sibling),St=l(q,rt),St.return=$,$=St):(a($,q),St=sf(rt,$.mode,St),St.return=$,$=St),p($)):a($,q)}return function($,q,rt,St){try{Do=0;var Yt=pe($,q,rt,St);return ps=null,Yt}catch(ne){if(ne===hs||ne===Zl)throw ne;var Ce=Wn(29,ne,null,$.mode);return Ce.lanes=St,Ce.return=$,Ce}}}var Lr=lg(!0),ug=lg(!1),qa=!1;function _f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ya(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Za(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(He&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Fl(t),qm(t,null,a),n}return Bl(t,r,n,a),Fl(t)}function Uo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,fo(t,a)}}function Sf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?l=c=p:c=c.next=p,a=a.next}while(a!==null);c===null?l=c=n:c=c.next=n}else l=c=n;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var xf=!1;function No(){if(xf){var t=ds;if(t!==null)throw t}}function Lo(t,n,a,r){xf=!1;var l=t.updateQueue;qa=!1;var c=l.firstBaseUpdate,p=l.lastBaseUpdate,A=l.shared.pending;if(A!==null){l.shared.pending=null;var B=A,tt=B.next;B.next=null,p===null?c=tt:p.next=tt,p=B;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,A=ct.lastBaseUpdate,A!==p&&(A===null?ct.firstBaseUpdate=tt:A.next=tt,ct.lastBaseUpdate=B))}if(c!==null){var xt=l.baseState;p=0,ct=tt=B=null,A=c;do{var j=A.lane&-536870913,lt=j!==A.lane;if(lt?(Re&j)===j:(r&j)===j){j!==0&&j===wr&&(xf=!0),ct!==null&&(ct=ct.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Ot=t,Qt=A;j=n;var pe=a;switch(Qt.tag){case 1:if(Ot=Qt.payload,typeof Ot=="function"){xt=Ot.call(pe,xt,j);break t}xt=Ot;break t;case 3:Ot.flags=Ot.flags&-65537|128;case 0:if(Ot=Qt.payload,j=typeof Ot=="function"?Ot.call(pe,xt,j):Ot,j==null)break t;xt=I({},xt,j);break t;case 2:qa=!0}}j=A.callback,j!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=l.callbacks,lt===null?l.callbacks=[j]:lt.push(j))}else lt={lane:j,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ct===null?(tt=ct=lt,B=xt):ct=ct.next=lt,p|=j;if(A=A.next,A===null){if(A=l.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,l.lastBaseUpdate=lt,l.shared.pending=null}}while(!0);ct===null&&(B=xt),l.baseState=B,l.firstBaseUpdate=tt,l.lastBaseUpdate=ct,c===null&&(l.shared.lanes=0),er|=p,t.lanes=p,t.memoizedState=xt}}function cg(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function fg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)cg(a[t],n)}var Ka=ge(null),jl=ge(0);function dg(t,n){t=ba,ee(jl,t),ee(Ka,n),ba=t|n.baseLanes}function Mf(){ee(jl,ba),ee(Ka,Ka.current)}function yf(){ba=jl.current,jt(Ka),jt(jl)}var Rn=ge(null),On=null;function Qa(t){var n=t.alternate;ee(Cn,Cn.current&1),ee(Rn,t),On===null&&(n===null||Ka.current!==null||n.memoizedState!==null)&&(On=t)}function Ef(t){ee(Cn,Cn.current),ee(Rn,t),On===null&&(On=t)}function hg(t){t.tag===22?(ee(Cn,Cn.current),ee(Rn,t),On===null&&(On=t)):Ja()}function Ja(){ee(Cn,Cn.current),ee(Rn,Rn.current)}function ai(t){jt(Rn),On===t&&(On=null),jt(Cn)}var Cn=ge(0);function Oo(t,n){ee(Rn,Rn.current),ee(Cn,n)}function Tf(t){jt(Cn),jt(Rn),On===t&&(On=null)}function $l(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||qd(a)||Yd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ma=0,he=null,Ze=null,pn=null,tu=!1,ms=!1,Or=!1,eu=0,Po=0,gs=null,OM=0;function ln(){throw Error(s(321))}function bf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ii(t[a],n[a]))return!1;return!0}function Af(t,n,a,r,l,c){return Ma=c,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,_t.H=t===null||t.memoizedState===null?Qg:Jg,Or=!1,c=a(r,l),Or=!1,ms&&(c=mg(n,a,r,l)),pg(t),c}function pg(t){_t.H=lu;var n=Ze!==null&&Ze.next!==null;if(Ma=0,pn=Ze=he=null,tu=!1,Po=0,gs=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&Wl(t)&&(mn=!0))}function mg(t,n,a,r){he=t;var l=0;do{if(ms&&(gs=null),Po=0,ms=!1,25<=l)throw Error(s(301));if(l+=1,pn=Ze=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}_t.H=VM,c=n(a,r)}while(ms);return c}function PM(){var t=_t.H,n=t.useState()[0];return n=typeof n.then=="function"?Io(n):n,t=t.useState()[0],(Ze!==null?Ze.memoizedState:null)!==t&&(he.flags|=1024),n}function Rf(){var t=eu!==0;return eu=0,t}function Cf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function wf(t){if(tu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}tu=!1}Ma=0,pn=Ze=he=null,ms=!1,Po=eu=0,gs=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?he.memoizedState=pn=t:pn=pn.next=t,pn}function fn(){if(Ze===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var n=pn===null?he.memoizedState:pn.next;if(n!==null)pn=n,Ze=t;else{if(t===null)throw he.alternate===null?Error(s(467)):Error(s(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},pn===null?he.memoizedState=pn=t:pn=pn.next=t}return pn}function nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(t){var n=Po;return Po+=1,gs===null&&(gs=[]),t=rg(gs,t,n),n=he,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,_t.H=n===null||n.memoizedState===null?Qg:Jg),t}function iu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Io(t);if(t.$$typeof===pt)return;if(t.$$typeof===Z)return An(t)}throw Error(s(438,String(t)))}function Df(t){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=he.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=nu(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=zt;return n.index++,a}function ya(t,n){return typeof n=="function"?n(t):n}function au(t){var n=fn();return Uf(n,Ze,t)}function Uf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var p=l.next;l.next=c.next,c.next=p}n.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var A=p=null,B=null,tt=n,ct=!1;do{var xt=tt.lane&-536870913;if(xt!==tt.lane?(Re&xt)===xt:(Ma&xt)===xt){var j=tt.revertLane;if(j===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),xt===wr&&(ct=!0);else if((Ma&j)===j){tt=tt.next,j===wr&&(ct=!0);continue}else xt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(A=B=xt,p=c):B=B.next=xt,he.lanes|=j,er|=j;xt=tt.action,Or&&a(c,xt),c=tt.hasEagerState?tt.eagerState:a(c,xt)}else j={lane:xt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(A=B=j,p=c):B=B.next=j,he.lanes|=xt,er|=xt;tt=tt.next}while(tt!==null&&tt!==n);if(B===null?p=c:B.next=A,!ii(c,t.memoizedState)&&(mn=!0,ct&&(a=ds,a!==null)))throw a;t.memoizedState=c,t.baseState=p,t.baseQueue=B,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Nf(t){var n=fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,l=a.pending,c=n.memoizedState;if(l!==null){a.pending=null;var p=l=l.next;do c=t(c,p.action),p=p.next;while(p!==l);ii(c,n.memoizedState)||(mn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,r]}function gg(t,n,a){var r=he,l=fn(),c=xe;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=n();var p=!ii((Ze||l).memoizedState,a);if(p&&(l.memoizedState=a,mn=!0),l=l.queue,Pf(Sg.bind(null,r,l,t),[t]),t=l.getSnapshot!==n||p||pn!==null&&(pn.memoizedState.tag&1)!==0,_s(t?9:8,{destroy:void 0},vg.bind(null,r,l,a,n),null),t){if(r.flags|=2048,Ke===null)throw Error(s(349));c||(Ma&127)!==0||_g(r,n,a)}return a}function _g(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=nu(),he.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function vg(t,n,a,r){n.value=a,n.getSnapshot=r,xg(n)&&Mg(t)}function Sg(t,n,a){return a(function(){xg(n)&&Mg(t)})}function xg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ii(t,a)}catch{return!0}}function Mg(t){var n=Er(t,2);n!==null&&Kn(n,t,2)}function Lf(t){var n=Gn();if(typeof t=="function"){var a=t;if(t=a(),Or){we(!0);try{a()}finally{we(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},n}function yg(t,n,a,r){return t.baseState=a,Uf(t,Ze,typeof r=="function"?r:ya)}function IM(t,n,a,r,l){if(ou(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};_t.T!==null?a(!0):c.isTransition=!1,r(c),a=n.pending,a===null?(c.next=n.pending=c,Eg(n,c)):(c.next=a.next,n.pending=a.next=c)}}function Eg(t,n){var a=n.action,r=n.payload,l=t.state;if(n.isTransition){var c=_t.T,p={};p.types=c!==null?c.types:null,_t.T=p;try{var A=a(l,r),B=_t.S;B!==null&&B(p,A),Tg(t,n,A)}catch(tt){Of(t,n,tt)}finally{c!==null&&p.types!==null&&(c.types=p.types),_t.T=c}}else try{c=a(l,r),Tg(t,n,c)}catch(tt){Of(t,n,tt)}}function Tg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){bg(t,n,r)},function(r){return Of(t,n,r)}):bg(t,n,a)}function bg(t,n,a){n.status="fulfilled",n.value=a,Ag(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Eg(t,a)))}function Of(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Ag(n),n=n.next;while(n!==r)}t.action=null}function Ag(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Rg(t,n){return n}function Cg(t,n){if(xe){var a=Ke.formState;if(a!==null){t:{var r=he;if(xe){if(Je){e:{for(var l=Je,c=yi;l.nodeType!==8;){if(!c){l=null;break e}if(l=Ti(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Je=Ti(l.nextSibling),r=l.data==="F!";break t}}Xa(r)}r=!1}r&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rg,lastRenderedState:n},a.queue=r,a=Yg.bind(null,he,r),r.dispatch=a,r=Lf(!1),c=Hf.bind(null,he,!1,r.queue),r=Gn(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,a=IM.bind(null,he,l,c,a),l.dispatch=a,r.memoizedState=t,[n,a,!1]}function wg(t){var n=fn();return Dg(n,Ze,t)}function Dg(t,n,a){if(n=Uf(t,n,Rg)[0],t=au(ya)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Io(n)}catch(p){throw p===hs?Zl:p}else r=n;n=fn();var l=n.queue,c=l.dispatch;return a!==n.memoizedState&&(he.flags|=2048,_s(9,{destroy:void 0},zM.bind(null,l,a),null)),[r,c,t]}function zM(t,n){t.action=n}function Ug(t){var n=fn(),a=Ze;if(a!==null)return Dg(n,a,t);fn(),n=n.memoizedState,a=fn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function _s(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=he.updateQueue,n===null&&(n=nu(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Ng(){return fn().memoizedState}function ru(t,n,a,r){var l=Gn();he.flags|=t,l.memoizedState=_s(1|n,{destroy:void 0},a,r===void 0?null:r)}function su(t,n,a,r){var l=fn();r=r===void 0?null:r;var c=l.memoizedState.inst;Ze!==null&&r!==null&&bf(r,Ze.memoizedState.deps)?l.memoizedState=_s(n,c,a,r):(he.flags|=t,l.memoizedState=_s(1|n,c,a,r))}function Lg(t,n){ru(8390656,8,t,n)}function Pf(t,n){su(2048,8,t,n)}function BM(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=nu(),he.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Og(t){var n=fn().memoizedState;return BM({ref:n,nextImpl:t}),function(){if((He&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Pg(t,n){return su(4,2,t,n)}function Ig(t,n){return su(4,4,t,n)}function zg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Bg(t,n,a){a=a!=null?a.concat([t]):null,su(4,4,zg.bind(null,n,t),a)}function If(){}function Fg(t,n){var a=fn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&bf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Hg(t,n){var a=fn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&bf(n,r[1]))return r[0];if(r=t(),Or){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[r,n],r}function zf(t,n,a){return a===void 0||(Ma&1073741824)!==0&&(Re&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Q0(),he.lanes|=t,er|=t,a)}function Gg(t,n,a,r){return ii(a,n)?a:Ka.current!==null?(t=zf(t,a,r),ii(t,n)||(mn=!0),t):(Ma&106)===0||(Ma&1073741824)!==0&&(Re&261930)===0?(mn=!0,t.memoizedState=a):(t=Q0(),he.lanes|=t,er|=t,n)}function Vg(t,n,a,r,l){var c=At.p;At.p=c!==0&&8>c?c:8;var p=_t.T,A={};A.types=p!==null?p.types:null,_t.T=A,Hf(t,!1,n,a);try{var B=l(),tt=_t.S;if(tt!==null&&tt(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ct=LM(B,r);zo(t,n,ct,li(t))}else zo(t,n,r,li(t))}catch(xt){zo(t,n,{then:function(){},status:"rejected",reason:xt},li())}finally{At.p=c,p!==null&&A.types!==null&&(p.types=A.types),_t.T=p}}function FM(){}function Bf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var l=Xg(t).queue;Vg(t,l,n,Ie,a===null?FM:function(){return kg(t),a(r)})}function Xg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Ie,baseState:Ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:Ie},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function kg(t){var n=Xg(t);n.next===null&&(n=t.alternate.memoizedState),zo(t,n.next.queue,{},li())}function Ff(){return An(Is)}function Wg(){return fn().memoizedState}function qg(){return fn().memoizedState}function HM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();t=Ya(a);var r=Za(n,t,a);r!==null&&(Kn(r,n,a),Uo(r,n,a)),n={cache:hf()},t.payload=n;return}n=n.return}}function GM(t,n,a){var r=li();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ou(t)?Zg(n,a):(a=af(t,n,a,r),a!==null&&(Kn(a,t,r),Kg(a,n,r)))}function Yg(t,n,a){var r=li();zo(t,n,a,r)}function zo(t,n,a,r){var l={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ou(t))Zg(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var p=n.lastRenderedState,A=c(p,a);if(l.hasEagerState=!0,l.eagerState=A,ii(A,p))return Bl(t,n,l,0),Ke===null&&zl(),!1}catch{}if(a=af(t,n,l,r),a!==null)return Kn(a,t,r),Kg(a,n,r),!0}return!1}function Hf(t,n,a,r){if(r={lane:2,revertLane:Dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ou(t)){if(n)throw Error(s(479))}else n=af(t,a,r,2),n!==null&&Kn(n,t,2)}function ou(t){var n=t.alternate;return t===he||n!==null&&n===he}function Zg(t,n){ms=tu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Kg(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,fo(t,a)}}var lu={readContext:An,use:iu,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln,useEffectEvent:ln},Qg={readContext:An,use:iu,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Lg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ru(4194308,4,zg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ru(4194308,4,t,n)},useInsertionEffect:function(t,n){ru(4,2,t,n)},useMemo:function(t,n){var a=Gn();n=n===void 0?null:n;var r=t();if(Or){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Gn();if(a!==void 0){var l=a(n);if(Or){we(!0);try{a(n)}finally{we(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=GM.bind(null,he,t),[r.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:function(t){t=Lf(t);var n=t.queue,a=Yg.bind(null,he,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:If,useDeferredValue:function(t,n){var a=Gn();return zf(a,t,n)},useTransition:function(){var t=Lf(!1);return t=Vg.bind(null,he,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=he,l=Gn();if(xe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ke===null)throw Error(s(349));(Re&127)!==0||_g(r,n,a)}l.memoizedState=a;var c={value:a,getSnapshot:n};return l.queue=c,Lg(Sg.bind(null,r,c,t),[t]),r.flags|=2048,_s(9,{destroy:void 0},vg.bind(null,r,c,a,n),null),a},useId:function(){var t=Gn(),n=Ke.identifierPrefix;if(xe){var a=qi,r=Wi;a=(r&~(1<<32-ce(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=eu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=OM++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Ff,useFormState:Cg,useActionState:Cg,useOptimistic:function(t){var n=Gn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Hf.bind(null,he,!0,a),a.dispatch=n,[t,n]},useMemoCache:Df,useCacheRefresh:function(){return Gn().memoizedState=HM.bind(null,he)},useEffectEvent:function(t){var n=Gn(),a={impl:t};return n.memoizedState=a,function(){if((He&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Jg={readContext:An,use:iu,useCallback:Fg,useContext:An,useEffect:Pf,useImperativeHandle:Bg,useInsertionEffect:Pg,useLayoutEffect:Ig,useMemo:Hg,useReducer:au,useRef:Ng,useState:function(){return au(ya)},useDebugValue:If,useDeferredValue:function(t,n){var a=fn();return Gg(a,Ze.memoizedState,t,n)},useTransition:function(){var t=au(ya)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Io(t),n]},useSyncExternalStore:gg,useId:Wg,useHostTransitionStatus:Ff,useFormState:wg,useActionState:wg,useOptimistic:function(t,n){var a=fn();return yg(a,Ze,t,n)},useMemoCache:Df,useCacheRefresh:qg,useEffectEvent:Og},VM={readContext:An,use:iu,useCallback:Fg,useContext:An,useEffect:Pf,useImperativeHandle:Bg,useInsertionEffect:Pg,useLayoutEffect:Ig,useMemo:Hg,useReducer:Nf,useRef:Ng,useState:function(){return Nf(ya)},useDebugValue:If,useDeferredValue:function(t,n){var a=fn();return Ze===null?zf(a,t,n):Gg(a,Ze.memoizedState,t,n)},useTransition:function(){var t=Nf(ya)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Io(t),n]},useSyncExternalStore:gg,useId:Wg,useHostTransitionStatus:Ff,useFormState:Ug,useActionState:Ug,useOptimistic:function(t,n){var a=fn();return Ze!==null?yg(a,Ze,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Df,useCacheRefresh:qg,useEffectEvent:Og};function Gf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:I({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Vf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=li(),l=Ya(r);l.payload=n,a!=null&&(l.callback=a),n=Za(t,l,r),n!==null&&(Kn(n,t,r),Uo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=li(),l=Ya(r);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Za(t,l,r),n!==null&&(Kn(n,t,r),Uo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=li(),r=Ya(a);r.tag=2,n!=null&&(r.callback=n),n=Za(t,r,a),n!==null&&(Kn(n,t,a),Uo(n,t,a))}};function jg(t,n,a,r,l,c,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,p):n.prototype&&n.prototype.isPureReactComponent?!Eo(a,r)||!Eo(l,c):!0}function $g(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Vf.enqueueReplaceState(n,n.state,null)}function Pr(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=I({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}function t0(t){Il(t)}function e0(t){console.error(t)}function n0(t){Il(t)}function uu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function i0(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Xf(t,n,a){return a=Ya(a),a.tag=3,a.payload={element:null},a.callback=function(){uu(t,n)},a}function a0(t){return t=Ya(t),t.tag=3,t}function r0(t,n,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){i0(n,a,r)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(t.callback=function(){i0(n,a,r),typeof l!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function XM(t,n,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Rr(n,a,l,!0),a=Rn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return On===null?Du():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===Kl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Rd(t,r,l)),!1;case 22:return a.flags|=65536,r===Kl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Rd(t,r,l)),!1}throw Error(s(435,a.tag))}return Rd(t,r,l),Du(),!1}if(xe)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==uf&&(t=Error(s(422),{cause:r}),Ao(Si(t,a)))):(r!==uf&&(n=Error(s(423),{cause:r}),Ao(Si(n,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=Si(r,a),l=Xf(t.stateNode,r,l),Sf(t,l),un!==4&&(un=2)),!1;var c=Error(s(520),{cause:r});if(c=Si(c,a),Wo===null?Wo=[c]:Wo.push(c),un!==4&&(un=2),n===null)return!0;r=Si(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=Xf(a.stateNode,r,t),Sf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(nr===null||!nr.has(c))))return a.flags|=65536,l&=-l,a.lanes|=l,l=a0(l),r0(l,t,a,r),Sf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var kf=Error(s(461)),mn=!1;function Sn(t,n,a,r){n.child=t===null?ug(n,null,a,r):Lr(n,t.child,a,r)}function s0(t,n,a,r,l){a=a.render;var c=n.ref;if("ref"in r){var p={};for(var A in r)A!=="ref"&&(p[A]=r[A])}else p=r;return Cr(n),r=Af(t,n,a,p,c,l),A=Rf(),t!==null&&!mn?(Cf(t,n,l),Ea(t,n,l)):(xe&&A&&Vl(n),n.flags|=1,Sn(t,n,r,l),n.child)}function o0(t,n,a,r,l){if(t===null){var c=a.type;return typeof c=="function"&&!rf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,l0(t,n,c,r,l)):(t=Hl(a.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!jf(t,l)){var p=c.memoizedProps;if(a=a.compare,a=a!==null?a:Eo,a(p,r)&&t.ref===n.ref)return Ea(t,n,l)}return n.flags|=1,t=_a(c,r),t.ref=n.ref,t.return=n,n.child=t}function l0(t,n,a,r,l){if(t!==null){var c=t.memoizedProps;if(Eo(c,r)&&t.ref===n.ref)if(mn=!1,n.pendingProps=r=c,jf(t,l))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,Ea(t,n,l)}return Wf(t,n,a,r,l)}function u0(t,n,a,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,n.child=null;return c0(t,n,c,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yl(n,c!==null?c.cachePool:null),c!==null?dg(n,c):Mf(),hg(n);else return r=n.lanes=536870912,c0(t,n,c!==null?c.baseLanes|a:a,a,r)}else c!==null?(Yl(n,c.cachePool),dg(n,c),Ja(),n.memoizedState=null):(t!==null&&Yl(n,null),Mf(),Ja());return Sn(t,n,l,a),n.child}function Bo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function c0(t,n,a,r,l){var c=mf();return c=c===null?null:{parent:hn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Yl(n,null),Mf(),hg(n),t!==null&&Rr(t,n,r,!0),n.childLanes=l,null}function cu(t,n){return n=fu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function f0(t,n,a){return Lr(n,t.child,null,a),t=cu(n,n.pendingProps),t.flags|=2,ai(n),n.memoizedState=null,t}function kM(t,n,a){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(r.mode==="hidden")return t=cu(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Bo(null,t);if(Ef(n),(t=Je)?(t=z_(t,yi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ga!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Zm(t),a.return=n,n.child=a,yn=n,Je=null)):t=null,t===null)throw Xa(n);return n.lanes=536870912,null}return cu(n,r)}var c=t.memoizedState;if(c!==null){var p=c.dehydrated;if(Ef(n),l)if(n.flags&256)n.flags&=-257,n=f0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||Rr(t,n,a,!1),l=(a&t.childLanes)!==0,mn||l){if(Ka.current===null){if(r=Ke,r!==null&&(p=ho(r,a),p!==0&&p!==c.retryLane))throw c.retryLane=p,Er(t,p),Kn(r,t,p),kf;Du()}n=f0(t,n,a)}else t=c.treeContext,Je=Ti(p.nextSibling),yn=n,xe=!0,Va=null,yi=!1,t!==null&&Jm(n,t),n=cu(n,r),n.flags|=134221824;return n}return t=_a(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function vs(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Wf(t,n,a,r,l){return Cr(n),a=Af(t,n,a,r,void 0,l),r=Rf(),t!==null&&!mn?(Cf(t,n,l),Ea(t,n,l)):(xe&&r&&Vl(n),n.flags|=1,Sn(t,n,a,l),n.child)}function d0(t,n,a,r,l,c){return Cr(n),n.updateQueue=null,a=mg(n,r,a,l),pg(t),r=Rf(),t!==null&&!mn?(Cf(t,n,c),Ea(t,n,c)):(xe&&r&&Vl(n),n.flags|=1,Sn(t,n,a,c),n.child)}function h0(t,n,a,r,l){if(Cr(n),n.stateNode===null){var c=ls,p=a.contextType;typeof p=="object"&&p!==null&&(c=An(p)),c=new a(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Vf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},_f(n),p=a.contextType,c.context=typeof p=="object"&&p!==null?An(p):ls,c.state=n.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(Gf(n,a,p,r),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&Vf.enqueueReplaceState(c,c.state,null),Lo(n,r,c,l),No(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var A=n.memoizedProps,B=Pr(a,A);c.props=B;var tt=c.context,ct=a.contextType;p=ls,typeof ct=="object"&&ct!==null&&(p=An(ct));var xt=a.getDerivedStateFromProps;ct=typeof xt=="function"||typeof c.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ct||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(A||tt!==p)&&$g(n,c,r,p),qa=!1;var j=n.memoizedState;c.state=j,Lo(n,r,c,l),No(),tt=n.memoizedState,A||j!==tt||qa?(typeof xt=="function"&&(Gf(n,a,xt,r),tt=n.memoizedState),(B=qa||jg(n,a,B,r,j,tt,p))?(ct||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=tt),c.props=r,c.state=tt,c.context=p,r=B):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,vf(t,n),p=n.memoizedProps,ct=Pr(a,p),c.props=ct,xt=n.pendingProps,j=c.context,tt=a.contextType,B=ls,typeof tt=="object"&&tt!==null&&(B=An(tt)),A=a.getDerivedStateFromProps,(tt=typeof A=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==xt||j!==B)&&$g(n,c,r,B),qa=!1,j=n.memoizedState,c.state=j,Lo(n,r,c,l),No();var lt=n.memoizedState;p!==xt||j!==lt||qa||t!==null&&t.dependencies!==null&&Wl(t.dependencies)?(typeof A=="function"&&(Gf(n,a,A,r),lt=n.memoizedState),(ct=qa||jg(n,a,ct,r,j,lt,B)||t!==null&&t.dependencies!==null&&Wl(t.dependencies))?(tt||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,lt,B),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,lt,B)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),c.props=r,c.state=lt,c.context=B,r=ct):(typeof c.componentDidUpdate!="function"||p===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,vs(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=Lr(n,t.child,null,l),n.child=Lr(n,null,a,l)):Sn(t,n,a,l),n.memoizedState=c.state,t=n.child):t=Ea(t,n,l),t}function p0(t,n,a,r){return br(),n.flags|=256,Sn(t,n,a,r),n.child}var qf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yf(t){return{baseLanes:t,cachePool:ig()}}function Zf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=oi),t}function m0(t,n,a){var r=n.pendingProps,l=!1,c=(n.flags&128)!==0,p;if((p=c)||(p=t!==null&&t.memoizedState===null?!1:(Cn.current&2)!==0),p&&(l=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(l?Qa(n):Ja(),(t=Je)?(t=z_(t,yi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ga!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Zm(t),a.return=n,n.child=a,yn=n,Je=null)):t=null,t===null)throw Xa(n);return Yd(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,l?(Ja(),l=n.mode,c=fu({mode:"hidden",children:c},l),r=Tr(r,l,a,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=Yf(a),r.childLanes=Zf(t,p,a),n.memoizedState=qf,Bo(null,r)):(Qa(n),Kf(n,c))}var A=t.memoizedState;if(A!==null){var B=A.dehydrated;if(B!==null)return WM(t,n,c,p,r,B,A,a)}return l?(Ja(),l=r.fallback,c=n.mode,A=t.child,B=A.sibling,r=_a(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&1206910976,B!==null?l=_a(B,l):(l=Tr(l,c,a,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,Bo(null,r),r=n.child,l=t.child.memoizedState,l===null?l=Yf(a):(c=l.cachePool,c!==null?(A=hn._currentValue,c=c.parent!==A?{parent:A,pool:A}:c):c=ig(),l={baseLanes:l.baseLanes|a,cachePool:c}),r.memoizedState=l,r.childLanes=Zf(t,p,a),n.memoizedState=qf,Bo(t.child,r)):(Qa(n),a=t.child,t=a.sibling,a=_a(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(p=n.deletions,p===null?(n.deletions=[t],n.flags|=16):p.push(t)),n.child=a,n.memoizedState=null,a)}function Kf(t,n){return n=fu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function fu(t,n){return t=Wn(22,t,null,n),t.lanes=0,t}function du(t,n,a){return Lr(n,t.child,null,a),t=Kf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function WM(t,n,a,r,l,c,p,A){if(a)return n.flags&256?(Qa(n),n.flags&=-257,du(t,n,A)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,null):(Ja(),c=l.fallback,p=n.mode,l=fu({mode:"visible",children:l.children},p),c=Tr(c,p,A,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Lr(n,t.child,null,A),l=n.child,l.memoizedState=Yf(A),l.childLanes=Zf(t,r,A),n.memoizedState=qf,Bo(null,l));if(Qa(n),Yd(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var B=r.dgst;return r=B,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,Ao({value:l,source:null,stack:null})),du(t,n,A)}if(mn||Rr(t,n,A,!1),r=(A&t.childLanes)!==0,mn||r){if(Ka.current!==null)return du(t,n,A);if(r=Ke,r!==null&&(l=ho(r,A),l!==0&&l!==p.retryLane))throw p.retryLane=l,Er(t,l),Kn(r,t,l),kf;return qd(c)||Du(),du(t,n,A)}return qd(c)?(n.flags|=192,n.child=t.child,null):(t=p.treeContext,Je=Ti(c.nextSibling),yn=n,xe=!0,Va=null,yi=!1,t!==null&&Jm(n,t),n=Kf(n,l.children),n.flags|=134221824,n)}function g0(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),kl(t.return,n,a)}function _0(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&$l(a)===null&&(n=t),t=t.sibling}return n}function hu(t,n,a,r,l,c){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l,treeForkCount:c}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=r,p.tail=a,p.tailMode=l,p.treeForkCount=c)}function Qf(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function Jf(t,n,a){var r=n.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var p=Cn.current;if(n.flags&128)return Oo(n,p),null;var A=(p&2)!==0;if(A?(p=p&1|2,n.flags|=128):p&=1,Oo(n,p),l==="backwards"&&t!==null?(Qf(t),Sn(t,n,r,a),Qf(t)):Sn(t,n,r,a),r=xe?bo:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&g0(t,a,n);else if(t.tag===19)g0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":a=_0(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,Qf(n)),hu(n,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&$l(t)===null){n.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}hu(n,!0,a,null,c,r);break;case"together":hu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=_0(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),hu(n,!1,l,a,c,r)}return n.child}function v0(t,n,a){var r=n.pendingProps;return ka(n,n.type,r.value),Sn(t,n,r.children,a),n.child}function Ea(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),er|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Rr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=_a(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=_a(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function jf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Wl(t)))}function qM(t,n,a){switch(n.tag){case 3:Q(n,n.stateNode.containerInfo),ka(n,hn,t.memoizedState.cache),br();break;case 27:case 5:Pe(n);break;case 4:Q(n,n.stateNode.containerInfo);break;case 10:ka(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ef(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Qa(n),n.flags|=128,null;r=Rr(t,n,a,!1);var l=n.child.childLanes;return r||(a&l)!==0?m0(t,n,a):(Qa(n),t=Ea(t,n,a),t!==null?t.sibling:null)}Qa(n);break;case 19:if(n.flags&128)return Jf(t,n,a);if(l=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Rr(t,n,a,!1),r=(a&n.childLanes)!==0),l){if(r)return Jf(t,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Oo(n,Cn.current),r)break;return null;case 22:return n.lanes=0,u0(t,n,a,n.pendingProps);case 24:ka(n,hn,t.memoizedState.cache)}return Ea(t,n,a)}function S0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!jf(t,a)&&(n.flags&128)===0)return mn=!1,qM(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,xe&&(n.flags&1048576)!==0&&Qm(n,bo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Ur(n.elementType),n.type=t,typeof t=="function")rf(t)?(r=Pr(t,r),n.tag=1,n=h0(null,n,t,r,a)):(n.tag=0,n=Wf(null,n,t,r,a));else{if(t!=null){var l=t.$$typeof;if(l===X){n.tag=11,n=s0(null,n,t,r,a);break t}else if(l===it){n.tag=14,n=o0(null,n,t,r,a);break t}else if(l===Z){n.tag=10,n.type=t,n=v0(null,n,a);break t}}throw n=Tt(t)||t,Error(s(306,n,""))}}return n;case 0:return Wf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,l=Pr(r,n.pendingProps),h0(t,n,r,l,a);case 3:t:{if(Q(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;l=c.element,vf(t,n),Lo(n,r,null,a);var p=n.memoizedState;if(r=p.cache,ka(n,hn,r),r!==c.cache&&df(n,[hn],a,!0),No(),r=p.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=p0(t,n,r,a);break t}else if(r!==l){l=Si(Error(s(424)),n),Ao(l),n=p0(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Je=Ti(t.firstChild),yn=n,xe=!0,Va=null,yi=!0,a=ug(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(br(),r===l){n=Ea(t,n,a);break t}Sn(t,n,r,a)}n=n.child}return n;case 26:return vs(t,n),t===null?(a=k_(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(n.stateNode=E_(n.type,n.pendingProps,ze.current,n)):n.memoizedState=k_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Pe(n),t===null&&xe&&(r=n.stateNode=H_(n.type,n.pendingProps,ze.current),yn=n,yi=!0,l=Je,rr(n.type)?(Zd=l,Je=Ti(r.firstChild)):Je=l),Sn(t,n,n.pendingProps.children,a),vs(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((l=r=Je)&&(r=Hy(r,n.type,n.pendingProps,yi),r!==null?(n.stateNode=r,yn=n,Je=Ti(r.firstChild),yi=!1,l=!0):l=!1),l||Xa(n)),Pe(n),l=n.type,c=n.pendingProps,p=t!==null?t.memoizedProps:null,r=c.children,Fd(l,c)?r=null:p!==null&&Fd(l,p)&&(n.flags|=32),n.memoizedState!==null&&(l=Af(t,n,PM,null,null,a),Is._currentValue=l),vs(t,n),Sn(t,n,r,a),n.child;case 6:return t===null&&xe&&((t=a=Je)&&(a=Gy(a,n.pendingProps,yi),a!==null?(n.stateNode=a,yn=n,Je=null,t=!0):t=!1),t||Xa(n)),null;case 13:return m0(t,n,a);case 4:return Q(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Lr(n,null,r,a):Sn(t,n,r,a),n.child;case 11:return s0(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,vs(t,n),Sn(t,n,r,a),n.child;case 8:return Sn(t,n,n.pendingProps.children,a),n.child;case 12:return Sn(t,n,n.pendingProps.children,a),n.child;case 10:return v0(t,n,a);case 9:return l=n.type._context,r=n.pendingProps.children,Cr(n),l=An(l),r=r(l),n.flags|=1,Sn(t,n,r,a),n.child;case 14:return o0(t,n,n.type,n.pendingProps,a);case 15:return l0(t,n,n.type,n.pendingProps,a);case 19:return Jf(t,n,a);case 31:return kM(t,n,a);case 22:return u0(t,n,a,n.pendingProps);case 24:return Cr(n),r=An(hn),t===null?(l=mf(),l===null&&(l=Ke,c=hf(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=a),l=c),n.memoizedState={parent:r,cache:l},_f(n),ka(n,hn,l)):((t.lanes&a)!==0&&(vf(t,n),Lo(n,null,null,a),No()),l=t.memoizedState,c=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),ka(n,hn,r)):(r=c.cache,ka(n,hn,r),r!==l.cache&&df(n,[hn],a,!0))),Sn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:xe&&Vl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:vs(t,n),Sn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ta(t){t.flags|=4}function $f(t,n,a,r,l){var c;if((c=(t.mode&32)!==0)&&(c=a===null?Z_(n,r):Z_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(t_())t.flags|=8192;else throw Nr=Kl,gf}else t.flags&=-16777217}function x0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!K_(n))if(t_())t.flags|=8192;else throw Nr=Kl,gf}function pu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?co():536870912,t.lanes|=n,Es|=n)}function Fo(t,n){if(!xe)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function YM(t,n,a){var r=n.pendingProps;switch(lf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),xa(hn),nn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(fs(n)?Ta(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,cf())),je(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(Ta(n),c!==null?(je(n),x0(n,c)):(je(n),$f(n,l,null,r,a))):c?c!==t.memoizedState?(Ta(n),je(n),x0(n,c)):(je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Ta(n),je(n),$f(n,l,t,r,a)),null;case 27:if(P(n),a=ze.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ta(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return je(n),n.subtreeFlags&=-33554433,null}t=be.current,fs(n)?jm(n):(t=H_(l,r,a),n.stateNode=t,Ta(n))}return je(n),n.subtreeFlags&=-33554433,null;case 5:if(P(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ta(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return je(n),n.subtreeFlags&=-33554433,null}if(c=be.current,fs(n))jm(n);else{var p=Qo(ze.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?p.createElement("select",{is:r.is}):p.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?p.createElement(l,{is:r.is}):p.createElement(l)}}c[b]=n,c[k]=r;t:for(p=n.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break t;for(;p.sibling===null;){if(p.return===null||p.return===n)break t;p=p.return}p.sibling.return=p.return,p=p.sibling}n.stateNode=c;t:switch(Dn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Ta(n)}}return je(n),n.subtreeFlags&=-33554433,$f(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Ta(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=ze.current,fs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,l=yn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[b]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||S_(t.nodeValue,a)),t||Xa(n,!0)}else t=Qo(t).createTextNode(r),t[b]=n,n.stateNode=t}return je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=fs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[b]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),t=!1}else a=cf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(s(558))}return je(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=fs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[b]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),l=!1}else l=cf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),pu(n,n.updateQueue),je(n),null);case 4:return nn(),t===null&&Od(n.stateNode.containerInfo),n.flags|=67108864,je(n),null;case 10:return xa(n.type),je(n),null;case 19:if(Tf(n),r=n.memoizedState,r===null)return je(n),null;if(l=(n.flags&128)!==0,c=r.rendering,c===null)if(l)Fo(r,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=$l(t),c!==null){for(n.flags|=128,Fo(r,!1),t=c.updateQueue,n.updateQueue=t,pu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Ym(a,t),a=a.sibling;return Oo(n,Cn.current&1|2),xe&&va(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&kt()>Au&&(n.flags|=128,l=!0,Fo(r,!1),n.lanes=4194304)}else{if(!l)if(t=$l(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,pu(n,t),Fo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!xe)return je(n),null}else 2*kt()-r.renderingStartTime>Au&&a!==536870912&&(n.flags|=128,l=!0,Fo(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=kt(),t.sibling=null,c=Cn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||xe?Oo(n,c):(a=c,ee(Rn,n),ee(Cn,a),On===null&&(On=n)),xe&&va(n,r.treeForkCount),t}return je(n),null;case 22:case 23:return ai(n),yf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&pu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&jt(Dr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),xa(hn),je(n),null;case 25:return null;case 30:return n.flags|=33554432,je(n),null}throw Error(s(156,n.tag))}function ZM(t,n){switch(lf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return xa(hn),nn(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return P(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(s(340));br()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));br()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Tf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return nn(),null;case 10:return xa(n.type),null;case 22:case 23:return ai(n),yf(),t!==null&&jt(Dr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return xa(hn),null;case 25:return null;default:return null}}function M0(t,n){switch(lf(n),n.tag){case 3:xa(hn),nn();break;case 26:case 27:case 5:P(n);break;case 4:nn();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:Tf(n);break;case 10:xa(n.type);break;case 22:case 23:ai(n),yf(),t!==null&&jt(Dr);break;case 24:xa(hn)}}function Ho(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&t)===t){r=void 0;var c=a.create,p=a.inst;r=c(),p.destroy=r}a=a.next}while(a!==l)}}catch(A){ke(n,n.return,A)}}function ja(t,n,a){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var p=r.inst,A=p.destroy;if(A!==void 0){p.destroy=void 0,l=n;var B=a,tt=A;try{tt()}catch(ct){ke(l,B,ct)}}}r=r.next}while(r!==c)}}catch(ct){ke(n,n.return,ct)}}function y0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{fg(n,a)}catch(r){ke(t,t.return,r)}}}function E0(t,n,a){a.props=Pr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){ke(t,n,r)}}function Yi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=ma(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=D_(c)),r=l.ref;break;case 7:if(t.stateNode===null){var p=new ui(t);v(t.child,!1,By,p,void 0,void 0),t.stateNode=p}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(A){ke(t,n,A)}}function wn(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){ke(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){ke(t,n,l)}else a.current=null}function mu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)I_(t.stateNode,n[a])}function T0(t){for(var n=t.return;n!==null&&(ed(n)&&I_(t.stateNode,n.stateNode),!td(n));)n=n.return}function Go(t){for(var n=t.return;n!==null&&(ed(n)&&Fy(t.stateNode,n.stateNode),!td(n));)n=n.return}function td(t){return t.tag===5||t.tag===3||t.tag===27}function ed(t){return t&&t.tag===7&&t.stateNode!==null}function nd(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){ke(t,t.return,l)}}function id(t,n,a){try{var r=t.stateNode;xy(r,t.type,a,n),r[k]=n}catch(l){ke(t,t.return,l)}}function b0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&rr(t.type)||t.tag===4}function ad(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||b0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&rr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rd(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki)),mu(t,r),Se=!0;else if(l!==4&&(l===27&&(mu(t,r),r=null,rr(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(rd(t,n,a,r),t=t.sibling;t!==null;)rd(t,n,a,r),t=t.sibling}function gu(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?a.insertBefore(l,n):a.appendChild(l),mu(t,r),Se=!0;else if(l!==4&&(l===27&&(mu(t,r),r=null,rr(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(gu(t,n,a,r),t=t.sibling;t!==null;)gu(t,n,a,r),t=t.sibling}function A0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Dn(n,r,a),n[b]=t,n[k]=a}catch(c){ke(t,t.return,c)}}var _u=!1,ri=null;function R0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(_u=!0)}var Zi=null;function C0(){var t=Zi;return Zi=null,t}var qn=0;function Ss(t,n,a,r,l){return qn=0,w0(t.child,n,a,r,l)}function w0(t,n,a,r,l){for(var c=!1;t!==null;){if(t.tag===5){var p=t.stateNode;if(r!==null){var A=Vd(p);r.push(A),A.view&&(c=!0)}else c||Vd(p).view&&(c=!0);_u=!0,C_(p,qn===0?n:n+"_"+qn,a),qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||w0(t.child,n,a,r,l)&&(c=!0));t=t.sibling}return c}function Ki(t,n){for(;t!==null;)t.tag===5?w_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Ki(t.child,n)),t=t.sibling}function vu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(vu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ga(n.default,n.share),n!=="none"&&(Ss(t,a,n,null,!1)||Ki(t.child,!1))}t=t.sibling}}function sd(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,l=ma(r,a),c=ga(r.default,a.paired?r.share:r.enter);c!=="none"?Ss(t,l,c,null,!1)?(vu(t),a.paired||n||Rs(t,r.onEnter)):Ki(t.child,!1):vu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)sd(t,n),t=t.sibling;else vu(t)}function od(t){if(ri!==null&&ri.size!==0){var n=ri;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var c=ga(a.default,a.share);if(c!=="none"&&(Ss(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,Rs(t,a.onShare)):Ki(t.child,!1)),n.delete(r),n.size===0)break}}}od(t)}t=t.sibling}}}function ld(t){if(t.tag===30){var n=t.memoizedProps,a=ma(n,t.stateNode),r=ri!==null?ri.get(a):void 0,l=ga(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(Ss(t,a,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,ri.delete(a),Rs(t,n.onShare)):Rs(t,n.onExit):Ki(t.child,!1)),ri!==null&&od(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ld(t),t=t.sibling;else ri!==null&&od(t)}function D0(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ma(n,t.stateNode);n=ga(n.default,n.update),t.flags&=-5,n!=="none"&&Ss(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&D0(t);t=t.sibling}}function ud(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Ki(t.child,!1))}ud(t)}t=t.sibling}}function Su(t){if(t.tag===30)t.stateNode.paired=null,Ki(t.child,!1),ud(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Su(t),t=t.sibling;else ud(t)}function U0(t){for(t=t.child;t!==null;)t.tag===30?Ki(t.child,!1):(t.subtreeFlags&33554432)!==0&&U0(t),t=t.sibling}function cd(t,n,a,r,l,c,p){for(var A=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(c!==null&&qn<c.length){var tt=c[qn],ct=Vd(B);(tt.view||ct.view)&&(A=!0);var xt;if(xt=(t.flags&4)===0)if(ct.clip)xt=!0;else{xt=tt.rect;var j=ct.rect;xt=xt.y!==j.y||xt.x!==j.x||xt.height!==j.height||xt.width!==j.width}xt&&(t.flags|=4),ct.abs?ct=!tt.abs:(tt=tt.rect,ct=ct.rect,ct=tt.height!==ct.height||tt.width!==ct.width),ct&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&C_(B,qn===0?a:a+"_"+qn,l),A&&(t.flags&4)!==0||(Zi===null&&(Zi=[]),Zi.push(B,qn===0?r:r+"_"+qn,n.memoizedProps)),qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&p?t.flags|=n.flags&32:cd(t,n.child,a,r,l,c,p)&&(A=!0));n=n.sibling}return A}function N0(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,l=ma(a,r),c=ga(a.default,a.update),p;p=t.memoizedState,t.memoizedState=null,r=t;var A=t.child;qn=0,l=cd(r,A,l,l,c,p,!1),(t.flags&4)!==0&&l&&Rs(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&N0(t);t=t.sibling}}var En=!1,Ve=!1,Qi=!1,fd=!1,L0=typeof WeakSet=="function"?WeakSet:Set,Tn=null,Ji=!1,Vo=!1,xu=!1,dd=!1;function KM(t,n,a){if(t=t.containerInfo,zd=zs,t=zm(t),Jc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break t}var A=0,B=-1,tt=-1,ct=0,xt=0,j=t,lt=null;e:for(;;){for(var Ot;j!==r||c!==0&&j.nodeType!==3||(B=A+c),j!==p||l!==0&&j.nodeType!==3||(tt=A+l),j.nodeType===3&&(A+=j.nodeValue.length),(Ot=j.firstChild)!==null;)lt=j,j=Ot;for(;;){if(j===t)break e;if(lt===r&&++ct===c&&(B=A),lt===p&&++xt===l&&(tt=A),(Ot=j.nextSibling)!==null)break;j=lt,lt=j.parentNode}j=Ot}r=B===-1||tt===-1?null:{start:B,end:tt}}else r=null}r=r||{start:0,end:0}}else r=null;for(Bd={focusedElem:t,selectionRange:r},zs=!1,a=(a&335544064)===a,Tn=n,n=a?9270:1024;Tn!==null;){if(t=Tn,a&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)a&&ld(r[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&R0(t),Mu(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&ld(r),Mu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&R0(t),Mu(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,Tn=r):(a&&D0(t),Mu(a))}}ri=null}function Mu(t){for(;Tn!==null;){var n=Tn,a=t,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){a=void 0,l=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var p=Pr(n.type,l);a=c.getSnapshotBeforeUpdate(p,r),c.__reactInternalSnapshotBeforeUpdate=a}catch(A){ke(n,n.return,A)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Wd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Wd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ma(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=ga(l.default,l.update),l!=="none"&&Ss(r,a,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Tn=r;break}Tn=n.return}}function O0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ji(t,a),r&4&&Ho(5,a);break;case 1:if(ji(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(p){ke(a,a.return,p)}else{var l=Pr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(p){ke(a,a.return,p)}}r&64&&y0(a),r&512&&Yi(a,a.return);break;case 3:if(ji(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{fg(t,n)}catch(p){ke(a,a.return,p)}}break;case 27:n===null&&r&4&&A0(a);case 26:case 5:ji(t,a),n===null&&r&4&&nd(a),r&512&&Yi(a,a.return);break;case 12:ji(t,a);break;case 31:ji(t,a),r&4&&B0(t,a);break;case 13:ji(t,a),r&4&&F0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=oy.bind(null,a),Vy(t,a))));break;case 22:if(r=a.memoizedState!==null||En,!r){var c=n!==null&&n.memoizedState!==null||Ve;n=En,l=Ve,En=r,(Ve=c)&&!l?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Di(t,a,r)):ji(t,a),En=n,Ve=l}break;case 30:ji(t,a),r&512&&Yi(a,a.return);break;case 7:r&512&&Yi(a,a.return);default:ji(t,a)}}function hd(t,n){for(t=t.child;t!==null;)P0(t,n),t=t.sibling}function P0(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,p=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(B){ke(t,t.return,B)}pd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Se=!0}catch(B){ke(t,t.return,B)}break;case 18:try{var A=t.stateNode;n?R_(A,!0):R_(t.stateNode,!1)}catch(B){ke(t,t.return,B)}break;case 22:case 23:t.memoizedState===null&&hd(t,n);break;default:hd(t,n)}}function pd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:P0(a,r);break t;case 22:a.memoizedState===null&&pd(a,r);break t;default:pd(a,r)}}t=t.sibling}}function I0(t){var n=t.alternate;n!==null&&(t.alternate=null,I0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Kt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,Yn=!1;function Ci(t,n,a){for(a=a.child;a!==null;)z0(t,n,a),a=a.sibling}function z0(t,n,a){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Jt,a)}catch{}switch(a.tag){case 26:Ve||wn(a,n),Ci(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ve&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ve||wn(a,n),Go(a);var r=tn,l=Yn;rr(a.type)&&(tn=a.stateNode,Yn=!1),Ci(t,n,a),G_(a.stateNode,a.type,a.memoizedProps),tn=r,Yn=l;break;case 5:Ve||wn(a,n),Go(a);case 6:if(a.tag===6&&Go(a),r=tn,l=Yn,tn=null,Ci(t,n,a),tn=r,Yn=l,tn!==null)if(Yn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),Se=!0}catch(c){ke(a,n,c)}else try{tn.removeChild(a.stateNode),Se=!0}catch(c){ke(a,n,c)}break;case 18:tn!==null&&(Yn?(t=tn,A_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Bs(t)):A_(tn,a.stateNode));break;case 4:r=tn,l=Yn,tn=a.stateNode.containerInfo,Yn=!0,Ci(t,n,a),tn=r,Yn=l;break;case 0:case 11:case 14:case 15:ja(2,a,n),Ve||ja(4,a,n),Ci(t,n,a);break;case 1:Ve||(wn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&E0(a,n,r)),Ci(t,n,a);break;case 21:Ci(t,n,a);break;case 22:Ve=(r=Ve)||a.memoizedState!==null,Ci(t,n,a),Ve=r;break;case 30:wn(a,n),Ci(t,n,a);break;case 7:Ve||wn(a,n),Ci(t,n,a);break;default:Ci(t,n,a)}}function B0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Bs(t)}catch(a){ke(n,n.return,a)}}}function F0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Bs(t)}catch(a){ke(n,n.return,a)}}function QM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new L0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new L0),n;default:throw Error(s(435,t.tag))}}function yu(t,n){var a=QM(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var l=ly.bind(null,t,r);r.then(l,l)}})}function Vn(t,n,a){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],p=t,A=n,B=A;t:for(;B!==null;){switch(B.tag){case 27:if(rr(B.type)){tn=B.stateNode,Yn=!1;break t}break;case 5:tn=B.stateNode,Yn=!1;break t;case 3:case 4:tn=B.stateNode.containerInfo,Yn=!0;break t}B=B.return}if(tn===null)throw Error(s(160));z0(p,A,c),tn=null,Yn=!1,p=c.alternate,p!==null&&(p.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)H0(n,t,a),n=n.sibling}var wi=null;function H0(t,n,a){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var p=r[c];p.ref.impl=p.nextImpl}Vn(n,t,a),Xn(t),l&4&&(ja(3,t,t.return),Ho(3,t),ja(5,t,t.return));break;case 1:Vn(n,t,a),Xn(t),l&512&&(Ve||r===null||wn(r,r.return)),l&64&&En&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=wi,Vn(n,t,a),Xn(t),l&512&&(Ve||r===null||wn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(En)t.stateNode=E_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Lt]||r[b]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Dn(r,n,a),r[b]=t,ve(r),n=r;break t;case"link":if(c=Y_("link","href",l).get(n+(a.href||""))){for(p=0;p<c.length;p++)if(r=c[p],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(p,1);break e}}r=l.createElement(n),Dn(r,n,a),l.head.appendChild(r);break;case"meta":if(c=Y_("meta","content",l).get(n+(a.content||""))){for(p=0;p<c.length;p++)if(r=c[p],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(p,1);break e}}r=l.createElement(n),Dn(r,n,a),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[b]=t,ve(r),n=r}t.stateNode=n}else En||jd(c,t.type,t.stateNode);else t.stateNode=q_(c,a,t.memoizedProps);else l!==a?(l===null?(n=r.stateNode,n===null||Ve||n.parentNode.removeChild(n)):l.count--,a===null?En||jd(c,t.type,t.stateNode):q_(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&id(t,t.memoizedProps,r.memoizedProps);break;case 27:Vn(n,t,a),Xn(t),l&512&&(Ve||r===null||wn(r,r.return)),r!==null&&l&4&&id(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Qi,Qi=!1,Vn(n,t,a),Qi=c,Xn(t),l&512&&(Ve||r===null||wn(r,r.return)),t.flags&32){n=t.stateNode;try{es(n,""),Se=!0}catch(ct){ke(t,t.return,ct)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,id(t,n,r!==null?r.memoizedProps:n)),l&1024&&(fd=!0);break;case 6:if(Vn(n,t,a),Xn(t),l&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Se=!0}catch(ct){ke(t,t.return,ct)}}break;case 3:if(Se=!1,zu=null,c=wi,wi=Jo(n.containerInfo),Vn(n,t,a),wi=c,Xn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Bs(n.containerInfo)}catch(ct){ke(t,t.return,ct)}fd&&(fd=!1,G0(t)),Se=!1;break;case 4:l=Qi,Qi=En,r=Fe(),c=wi,wi=Jo(t.stateNode.containerInfo),Vn(n,t,a),Xn(t),wi=c,Se&&Vo&&(xu=!0),Se=r,Qi=l;break;case 12:Vn(n,t,a),Xn(t);break;case 31:Vn(n,t,a),Xn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,yu(t,n)));break;case 13:Vn(n,t,a),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(bu=kt()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,yu(t,n)));break;case 22:c=t.memoizedState!==null,p=r!==null&&r.memoizedState!==null;var A=En,B=Ve,tt=Qi;En=A||c,Qi=tt||c,Ve=B||p,Vn(n,t,a),Ve=B,Qi=tt,En=A,Xn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||p||En||Ve||(n=p||Ve,a=En,r=Ve,En=c||En,Ve=n,$a(t,2),En=a,Ve=r),!c&&Qi||hd(t,c)),l&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,yu(t,a))));break;case 19:Vn(n,t,a),Xn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,yu(t,n)));break;case 30:l&512&&(Ve||r===null||wn(r,r.return)),l=Fe(),c=Vo,p=(a&335544064)===a,A=t.memoizedProps,Vo=p&&ga(A.default,A.update)!=="none",Vn(n,t,a),Xn(t),p&&r!==null&&Se&&(t.flags|=4),Vo=c,Se=l;break;case 21:break;case 7:l&512&&(Ve||r===null||wn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Vn(n,t,a),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(b0(r)){a=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(ed(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(td(l))break;l=l.return}var p=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var A=a.stateNode,B=ad(t);gu(t,B,A,p);break;case 5:var tt=a.stateNode;a.flags&32&&(es(tt,""),a.flags&=-33);var ct=ad(t);gu(t,ct,tt,p);break;case 3:case 4:var xt=a.stateNode.containerInfo,j=ad(t);rd(t,j,xt,p);break;default:throw Error(s(161))}}catch(lt){ke(t,t.return,lt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function G0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;G0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,zs=!0,n.reset(),zs=!1),t=t.sibling}}function xs(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)V0(n,t),n=n.sibling;else N0(n)}function V0(t,n){var a=t.alternate;if(a===null)sd(t,!1);else switch(t.tag){case 3:if(dd=Ji=!1,C0(),xs(n,t),!Ji&&!xu){if(t=Zi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var l=t[r+1];w_(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),dd=!0}Zi=null;break;case 5:xs(n,t);break;case 4:r=Ji,Ji=!1,xs(n,t),Ji&&(xu=!0),Ji=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?sd(t,!1):xs(n,t));break;case 30:r=Ji,l=C0(),Ji=!1,xs(n,t),Ji&&(t.flags|=4);var c=t.memoizedProps,p=t.stateNode;n=ma(c,p),p=ma(a.memoizedProps,p);var A=ga(c.default,c.update);A==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,qn=0,n=cd(t,a,n,p,A,c,!0),qn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Rs(t,t.memoizedProps.onUpdate),Zi=l):l!==null&&(l.push.apply(l,Zi),Zi=l),Ji=(t.flags&32)!==0?!0:r;break;default:xs(n,t)}}function ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)O0(t,n.alternate,n),n=n.sibling}function $a(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:ja(4,a,a.return),$a(a,r);break;case 1:wn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&E0(a,a.return,l),$a(a,r);break;case 27:(r&2)!==0&&G_(a.stateNode,a.type,a.memoizedProps);case 5:wn(a,a.return),a.tag!==5&&a.tag!==27||Go(a),$a(a,r);break;case 6:Go(a);break;case 26:wn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||Ve||l.parentNode.removeChild(l),$a(a,r);break;case 22:a.memoizedState===null&&$a(a,r);break;case 30:wn(a,a.return),$a(a,r);break;case 7:wn(a,a.return);default:$a(a,r)}t=t.sibling}}function Di(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,l=t,c=n,p=c.flags,A=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Di(l,c,a),Ho(4,c);break;case 1:if(Di(l,c,a),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(ct){ke(r,r.return,ct)}if(r=c,l=r.updateQueue,l!==null){var B=r.stateNode;try{var tt=l.shared.hiddenCallbacks;if(tt!==null)for(l.shared.hiddenCallbacks=null,l=0;l<tt.length;l++)cg(tt[l],B)}catch(ct){ke(r,r.return,ct)}}A&&p&64&&y0(c),Yi(c,c.return);break;case 27:(a&2)!==0&&A0(c);case 5:c.tag!==5&&c.tag!==27||T0(c),Di(l,c,a),A&&r===null&&p&4&&nd(c),Yi(c,c.return);break;case 6:T0(c);break;case 26:B=c.stateNode,c.memoizedState!==null||B===null||En||jd(Jo(B.ownerDocument),c.type,B),Di(l,c,a),A&&r===null&&p&4&&nd(c),Yi(c,c.return);break;case 12:Di(l,c,a);break;case 31:Di(l,c,a),A&&p&4&&B0(l,c);break;case 13:Di(l,c,a),A&&p&4&&F0(l,c);break;case 22:c.memoizedState===null&&Di(l,c,a),Yi(c,c.return);break;case 30:Di(l,c,a),Yi(c,c.return);break;case 7:Yi(c,c.return);default:Di(l,c,a)}n=n.sibling}}function md(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ro(a))}function gd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ro(t))}function Ei(t,n,a,r){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)X0(t,n,a,r),n=n.sibling;else l&&U0(n)}function X0(t,n,a,r){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Su(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,r),c&2048&&Ho(9,n);break;case 1:Ei(t,n,a,r);break;case 3:Ei(t,n,a,r),l&&dd&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Ro(c)));break;case 12:if(c&2048){Ei(t,n,a,r),c=n.stateNode;try{var p=n.memoizedProps,A=p.id,B=p.onPostCommit;typeof B=="function"&&B(A,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(tt){ke(n,n.return,tt)}}else Ei(t,n,a,r);break;case 31:Ei(t,n,a,r);break;case 13:Ei(t,n,a,r);break;case 23:break;case 22:p=n.stateNode,A=n.alternate,n.memoizedState!==null?(l&&A!==null&&A.memoizedState===null&&Su(A),p._visibility&2?Ei(t,n,a,r):Xo(t,n)):(l&&A!==null&&A.memoizedState!==null&&Su(n),p._visibility&2?Ei(t,n,a,r):(p._visibility|=2,Ms(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&md(A,n);break;case 24:Ei(t,n,a,r),c&2048&&gd(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(Ki(c.child,!0),Ki(n.child,!0))),Ei(t,n,a,r);break;default:Ei(t,n,a,r)}}function Ms(t,n,a,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,p=n,A=a,B=r,tt=p.flags;switch(p.tag){case 0:case 11:case 15:Ms(c,p,A,B,l),Ho(8,p);break;case 23:break;case 22:var ct=p.stateNode;p.memoizedState!==null?ct._visibility&2?Ms(c,p,A,B,l):Xo(c,p):(ct._visibility|=2,Ms(c,p,A,B,l)),l&&tt&2048&&md(p.alternate,p);break;case 24:Ms(c,p,A,B,l),l&&tt&2048&&gd(p.alternate,p);break;default:Ms(c,p,A,B,l)}n=n.sibling}}function Xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,l=r.flags;switch(r.tag){case 22:Xo(a,r),l&2048&&md(r.alternate,r);break;case 24:Xo(a,r),l&2048&&gd(r.alternate,r);break;default:Xo(a,r)}n=n.sibling}}var Ir=8192;function zr(t,n,a){if(t.subtreeFlags&Ir)for(t=t.child;t!==null;)k0(t,n,a),t=t.sibling}function k0(t,n,a){switch(t.tag){case 26:zr(t,n,a),t.flags&Ir&&(t.memoizedState!==null?nE(a,wi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&J_(a,t)));break;case 5:zr(t,n,a),t.flags&Ir&&(t=t.stateNode,(n&335544128)===n&&J_(a,t));break;case 3:case 4:var r=wi;wi=Jo(t.stateNode.containerInfo),zr(t,n,a),wi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Ir,Ir=16777216,zr(t,n,a),Ir=r):zr(t,n,a));break;case 30:if((t.flags&Ir)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,ri===null&&(ri=new Map),ri.set(r,l)}zr(t,n,a);break;default:zr(t,n,a)}}function W0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ko(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Tn=r,Y0(r,t)}W0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)q0(t),t=t.sibling}function q0(t){switch(t.tag){case 0:case 11:case 15:ko(t),t.flags&2048&&ja(9,t,t.return);break;case 3:ko(t);break;case 12:ko(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Eu(t)):ko(t);break;default:ko(t)}}function Eu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Tn=r,Y0(r,t)}W0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ja(8,n,n.return),Eu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Eu(n));break;default:Eu(n)}t=t.sibling}}function Y0(t,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ro(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Tn=r;else t:for(a=t;Tn!==null;){r=Tn;var l=r.sibling,c=r.return;if(I0(r),r===a){Tn=null;break t}if(l!==null){l.return=c,Tn=l;break t}Tn=c}}}var JM={getCacheForType:function(t){var n=An(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(hn).controller.signal}},jM=typeof WeakMap=="function"?WeakMap:Map,He=0,Ke=null,ye=null,Re=0,Xe=0,si=null,tr=!1,ys=!1,_d=!1,ba=0,un=0,er=0,Br=0,Tu=0,oi=0,Es=0,Wo=null,Zn=null,vd=!1,bu=0,Z0=0,Au=1/0,Ru=null,nr=null,an=0,Ui=null,Fr=null,$i=0,Sd=0,xd=null,K0=null,Ts=null,bs=null,As=null,qo=0,Cu=null;function li(){return(He&2)!==0&&Re!==0?Re&-Re:_t.T!==null?Dd():Al()}function Q0(){if(oi===0)if((Re&536870912)===0||xe){var t=vr;vr<<=1,(vr&3932160)===0&&(vr=262144),oi=t}else oi=536870912;return t=Rn.current,t!==null&&(t.flags|=32),oi}function Rs(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=D_(ma(t.memoizedProps,a))),bs===null&&(bs=[]),bs.push(n.bind(null,r))}}function Kn(t,n,a){(t===Ke&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)&&(Cs(t,0),ir(t,Re,oi,!1)),Vi(t,a),((He&2)===0||t!==Ke)&&(t===Ke&&((He&2)===0&&(Br|=a),un===4&&ir(t,Re,oi,!1)),ta(t))}function J0(t,n,a){if((He&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ba(t,n),l=r?ey(t,n):yd(t,n,!0),c=r;do{if(l===0){ys&&!r&&ir(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!$M(a)){l=yd(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var p=0;else p=t.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;t:{var A=t;l=Wo;var B=A.current.memoizedState.isDehydrated;if(B&&(Cs(A,p).flags|=256),p=yd(A,p,!1),p!==2&&p!==6){if(_d&&!B){A.errorRecoveryDisabledLanes|=c,Br|=c,l=4;break t}c=Zn,Zn=l,c!==null&&(Zn===null?Zn=c:Zn.push.apply(Zn,c))}l=p}if(c=!1,l!==2)continue}}if(l===1){Cs(t,0),ir(t,n,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ir(r,n,oi,!tr);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=bu+300-kt(),10<l)){if(ir(r,n,oi,!tr),Sr(r,0,!0)!==0)break t;$i=n,r.timeoutHandle=Gd(j0.bind(null,r,a,Zn,Ru,vd,n,oi,Br,Es,tr,c,"Throttled",-0,0),l);break t}j0(r,a,Zn,Ru,vd,n,oi,Br,Es,tr,c,null,-0,0)}}break}while(!0);ta(t)}function j0(t,n,a,r,l,c,p,A,B,tt,ct,xt,j,lt){t.timeoutHandle=-1;var Ot=n.subtreeFlags,Qt=(c&335544064)===c;if(xt=null,(Qt||Ot&8192||(Ot&16785408)===16785408)&&(xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},ri=null,k0(n,c,xt),Qt&&(Ot=xt,Qt=t.containerInfo,Qt=(Qt.nodeType===9?Qt:Qt.ownerDocument).__reactViewTransition,Qt!=null&&(Ot.count++,Ot.waitingForViewTransition=!0,Ot=tl.bind(Ot),Qt.finished.then(Ot,Ot))),Ot=(c&62914560)===c?bu-kt():(c&4194048)===c?Z0-kt():0,Ot=iE(xt,Ot),Ot!==null)){$i=c,t.cancelPendingCommit=Ot(s_.bind(null,t,n,c,a,r,l,p,A,B,tt,ct,xt,null,j,lt)),ir(t,c,p,!tt);return}s_(t,n,c,a,r,l,p,A,B,tt,ct,xt)}function $M(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],c=l.getSnapshot;l=l.value;try{if(!ii(c(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ir(t,n,a,r){n=Gi(t,n),n&=~Tu,n&=~Br,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var c=31-ce(l),p=1<<c;r[c]=-1,l&=~p}a!==0&&xr(t,a,n)}function wu(){return(He&6)===0?(Yo(0),!1):!0}function Md(){if(ye!==null){if(Xe===0)var t=ye.return;else t=ye,Sa=Ar=null,wf(t),ps=null,Do=0,t=ye;for(;t!==null;)M0(t.alternate,t),t=t.return;ye=null}}function Cs(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,Ey(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),$i=0,Md(),Ke=t,ye=a=_a(t.current,null),Re=n,Xe=0,si=null,tr=!1,ys=Ba(t,n),_d=!1,Es=oi=Tu=Br=er=un=0,Zn=Wo=null,vd=!1,ba=Gi(t,n),zl(),a}function $0(t,n){he=null,_t.H=lu,n===hs||n===Zl?(n=sg(),Xe=3):n===gf?(n=sg(),Xe=4):Xe=n===kf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,ye===null&&(un=1,uu(t,Si(n,t.current)))}function t_(){var t=Rn.current;return t===null?!0:(Re&4194048)===Re?On===null:(Re&62914560)===Re||(Re&536870912)!==0?t===On:!1}function e_(){var t=_t.H;return _t.H=lu,t===null?lu:t}function n_(){var t=_t.A;return _t.A=JM,t}function Du(){un=4,tr||(Re&4194048)!==Re&&Rn.current!==null||(ys=!0),(er&134217727)===0&&(Br&134217727)===0||Ke===null||ir(Ke,Re,oi,!1)}function yd(t,n,a){var r=He;He|=2;var l=e_(),c=n_();(Ke!==t||Re!==n)&&(Ru=null,Cs(t,n)),n=!1;var p=un;t:do try{if(Xe!==0&&ye!==null){var A=ye,B=si;switch(Xe){case 8:Md(),p=6;break t;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var tt=Xe;if(Xe=0,si=null,ws(t,A,B,tt),a&&ys){p=0;break t}break;default:tt=Xe,Xe=0,si=null,ws(t,A,B,tt)}}ty(),p=un;break}catch(ct){$0(t,ct)}while(!0);return n&&t.shellSuspendCounter++,Sa=Ar=null,He=r,_t.H=l,_t.A=c,ye===null&&(Ke=null,Re=0,zl()),p}function ty(){for(;ye!==null;)i_(ye)}function ey(t,n){var a=He;He|=2;var r=e_(),l=n_();Ke!==t||Re!==n?(Ru=null,Au=kt()+500,Cs(t,n)):ys=Ba(t,n);t:do try{if(Xe!==0&&ye!==null){n=ye;var c=si;e:switch(Xe){case 1:Xe=0,si=null,ws(t,n,c,1);break;case 2:case 9:if(ag(c)){Xe=0,si=null,a_(n);break}n=function(){Xe!==2&&Xe!==9||Ke!==t||(Xe=7),ta(t)},c.then(n,n);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:ag(c)?(Xe=0,si=null,a_(n)):(Xe=0,si=null,ws(t,n,c,7));break;case 5:var p=null;switch(ye.tag){case 26:p=ye.memoizedState;case 5:case 27:var A=ye;if(p?K_(p):A.stateNode.complete){Xe=0,si=null;var B=A.sibling;if(B!==null)ye=B;else{var tt=A.return;tt!==null?(ye=tt,Uu(tt)):ye=null}break e}}Xe=0,si=null,ws(t,n,c,5);break;case 6:Xe=0,si=null,ws(t,n,c,6);break;case 8:Md(),un=6;break t;default:throw Error(s(462))}}ny();break}catch(ct){$0(t,ct)}while(!0);return Sa=Ar=null,_t.H=r,_t.A=l,He=a,ye!==null?0:(Ke=null,Re=0,zl(),un)}function ny(){for(;ye!==null&&!It();)i_(ye)}function i_(t){var n=S0(t.alternate,t,ba);t.memoizedProps=t.pendingProps,n===null?Uu(t):ye=n}function a_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=d0(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=d0(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:wf(n);var r=n;r===yn&&(xe?(Xl(r),r.tag===5&&r.stateNode!=null&&(Je=r.stateNode)):(Xl(r),xe=!0));default:M0(a,n),n=ye=Ym(n,ba),n=S0(a,n,ba)}t.memoizedProps=t.pendingProps,n===null?Uu(t):ye=n}function ws(t,n,a,r){Sa=Ar=null,wf(n),ps=null,Do=0;var l=n.return;try{if(XM(t,l,n,a,Re)){un=1,uu(t,Si(a,t.current)),ye=null;return}}catch(c){if(l!==null)throw ye=l,c;un=1,uu(t,Si(a,t.current)),ye=null;return}n.flags&32768?(xe||r===1?t=!0:ys||(Re&536870912)!==0?t=!1:(tr=t=!0,(r===2||r===9||r===3||r===6)&&(r=Rn.current,r!==null&&r.tag===13&&(r.flags|=16384))),r_(n,t)):Uu(n)}function Uu(t){var n=t;do{if((n.flags&32768)!==0){r_(n,tr);return}t=n.return;var a=YM(n.alternate,n,ba);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=t}while(n!==null);un===0&&(un=5)}function r_(t,n){do{var a=ZM(t.alternate,t);if(a!==null){a.flags&=32767,ye=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ye=t;return}ye=t=a}while(t!==null);un=6,ye=null}function s_(t,n,a,r,l,c,p,A,B,tt,ct,xt){t.cancelPendingCommit=null;do Nu();while(an!==0);if((He&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Ke&&(ye=Ke=null,Re=0),Fr=n,Ui=t,$i=a,xd=l,K0=r,iy(t,n,a,p,A,B,xt)}}function iy(t,n,a,r,l,c,p){var A=n.lanes|n.childLanes;if(Sd=A,A|=nf,bl(t,a,A,r,l,c),bs=null,(a&335544064)===a?(As=UM(t),r=10262):(As=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,uy(Ct,function(){return Ad(),null})):(t.callbackNode=null,t.callbackPriority=0),_u=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=_t.T,_t.T=null,l=At.p,At.p=2,c=He,He|=4;try{KM(t,n,a)}finally{He=c,At.p=l,_t.T=r}}an=1,_u?Ts=wy(p,t.containerInfo,As,Ed,Td,ry,bd,Ad,ay):(Ed(),Td(),bd())}function ay(t){if(an!==0){var n=Ui.onRecoverableError;n(t,{componentStack:null})}}function ry(){an===3&&(an=0,V0(Fr,Ui),an=4)}function Ed(){if(an===1){an=0;var t=Ui,n=Fr,a=$i,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=_t.T,_t.T=null;var l=At.p;At.p=2;var c=He;He|=4;try{Vo=xu=!1,H0(n,t,a),a=Bd;var p=zm(t.containerInfo),A=a.focusedElem,B=a.selectionRange;if(p!==A&&A&&A.ownerDocument&&Im(A.ownerDocument.documentElement,A)){if(B!==null&&Jc(A)){var tt=B.start,ct=B.end;if(ct===void 0&&(ct=tt),"selectionStart"in A)A.selectionStart=tt,A.selectionEnd=Math.min(ct,A.value.length);else{var xt=A.ownerDocument||document,j=xt&&xt.defaultView||window;if(j.getSelection){var lt=j.getSelection(),Ot=A.textContent.length,Qt=Math.min(B.start,Ot),pe=B.end===void 0?Qt:Math.min(B.end,Ot);!lt.extend&&Qt>pe&&(p=pe,pe=Qt,Qt=p);var $=Pm(A,Qt),q=Pm(A,pe);if($&&q&&(lt.rangeCount!==1||lt.anchorNode!==$.node||lt.anchorOffset!==$.offset||lt.focusNode!==q.node||lt.focusOffset!==q.offset)){var rt=xt.createRange();rt.setStart($.node,$.offset),lt.removeAllRanges(),Qt>pe?(lt.addRange(rt),lt.extend(q.node,q.offset)):(rt.setEnd(q.node,q.offset),lt.addRange(rt))}}}}for(xt=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&xt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xt.length;A++){var St=xt[A];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}zs=!!zd,Bd=zd=null}finally{He=c,At.p=l,_t.T=r}}t.current=n,an=2}}function Td(){if(an===2){an=0;var t=Ui,n=Fr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=_t.T,_t.T=null;var r=At.p;At.p=2;var l=He;He|=4;try{O0(t,n.alternate,n)}finally{He=l,At.p=r,_t.T=a}}an=3}}function bd(){if(an===4||an===3){an=0;var t=Ts;Ts=null,Pt();var n=Ui,a=Fr,r=$i,l=K0,c=(r&335544064)===r?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?an=5:(an=0,Fr=Ui=null,o_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(nr=null),mo(r),a=a.stateNode,Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Jt,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=_t.T,c=At.p,At.p=2,_t.T=null;try{for(var p=n.onRecoverableError,A=0;A<l.length;A++){var B=l[A];p(B.value,{componentStack:B.stack})}}finally{_t.T=a,At.p=c}}if(l=bs,p=As,As=null,l!==null&&(bs=null,p===null&&(p=[]),t!==null))for(B=0;B<l.length;B++)a=(0,l[B])(p),a!==void 0&&t.finished.finally(a);($i&3)!==0&&Nu(),ta(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Cu?qo++:(qo=0,Cu=n):(qo=0,Cu=null),Yo(0)}}function o_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ro(n)))}function Nu(){return Ts!==null&&(Ts.skipTransition(),Ts=null),Ed(),Td(),bd(),Ad()}function Ad(){if(an!==5)return!1;var t=Ui,n=Sd;Sd=0;var a=mo($i),r=_t.T,l=At.p;try{At.p=32>a?32:a,_t.T=null,a=xd,xd=null;var c=Ui,p=$i;if(an=0,Fr=Ui=null,$i=0,(He&6)!==0)throw Error(s(331));var A=He;if(He|=4,q0(c.current),X0(c,c.current,p,a),He=A,Yo(0,!1),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Jt,c)}catch{}return!0}finally{At.p=l,_t.T=r,o_(t,n)}}function l_(t,n,a){n=Si(a,n),n=Xf(t.stateNode,n,2),t=Za(t,n,2),t!==null&&(Vi(t,2),ta(t))}function ke(t,n,a){if(t.tag===3)l_(t,t,a);else for(;n!==null;){if(n.tag===3){l_(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nr===null||!nr.has(r))){t=Si(a,t),a=a0(2),r=Za(n,a,2),r!==null&&(r0(a,r,n,t),Vi(r,2),ta(r));break}}n=n.return}}function Rd(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new jM;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(a)||(_d=!0,l.add(a),t=sy.bind(null,t,n,a),n.then(t,t))}function sy(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ke===t&&(Re&a)===a&&((un===4||un===3&&(Re&62914560)===Re&&300>kt()-bu)&&(He&2)===0?Cs(t,0):Tu|=a,Es===Re&&(Es=0)),ta(t)}function u_(t,n){n===0&&(n=co()),t=Er(t,n),t!==null&&(Vi(t,n),ta(t))}function oy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),u_(t,a)}function ly(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),u_(t,a)}function uy(t,n){return wt(t,n)}var Ds=null,Us=null,Cd=!1,Lu=!1,wd=!1,ar=0;function ta(t){t!==Us&&t.next===null&&(Us===null?Ds=Us=t:Us=Us.next=t),Lu=!0,Cd||(Cd=!0,fy())}function Yo(t,n){if(!wd&&Lu){wd=!0;do for(var a=!1,r=Ds;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var p=r.suspendedLanes,A=r.pingedLanes;c=(1<<31-ce(42|t)+1)-1,c&=l&~(p&~A),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,h_(r,c))}else c=Re,c=Sr(r,r===Ke?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Ba(r,c)||(a=!0,h_(r,c));r=r.next}while(a);wd=!1}}function cy(){c_()}function c_(){Lu=Cd=!1;var t=0;ar!==0&&yy()&&(t=ar);for(var n=kt(),a=null,r=Ds;r!==null;){var l=r.next,c=f_(r,n);c===0?(r.next=null,a===null?Ds=l:a.next=l,l===null&&(Us=a)):(a=r,(t!==0||(c&3)!==0)&&(Lu=!0)),r=l}an!==0&&an!==5||Yo(t),ar!==0&&(ar=0)}function f_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var p=31-ce(c),A=1<<p,B=l[p];B===-1?((A&a)===0||(A&r)!==0)&&(l[p]=uo(A,n)):B<=n&&(t.expiredLanes|=A),c&=~A}if(n=Ke,a=Re,a=Sr(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&$t(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ba(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&$t(r),mo(a)){case 2:case 8:a=K;break;case 32:a=Ct;break;case 268435456:a=Nt;break;default:a=Ct}return r=d_.bind(null,t),a=wt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&$t(r),t.callbackPriority=2,t.callbackNode=null,2}function d_(t,n){if(an!==0&&an!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Nu()&&t.callbackNode!==a)return null;var r=Re;return r=Sr(t,t===Ke?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(J0(t,r,n),f_(t,kt()),t.callbackNode!=null&&t.callbackNode===a?d_.bind(null,t):null)}function h_(t,n){if(Nu())return null;J0(t,n,!0)}function fy(){Ty(function(){(He&6)!==0?wt(le,cy):c_()})}function Dd(){if(ar===0){var t=wr;t===0&&(t=jr,jr<<=1,(jr&261888)===0&&(jr=256)),ar=t}return ar}function p_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wl(t)}function dy(t,n,a,r,l){if(n==="submit"&&a&&a.stateNode===l){var c=p_((l[k]||null).action),p=r.submitter;p&&(n=(n=p[k]||null)?p_(n.formAction):p.getAttribute("formAction"),n!==null&&(c=n,p=null));var A=new Ll("action","action",null,r,l);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ar!==0){var B=new FormData(l,p);Bf(a,{pending:!0,data:B,method:l.method,action:c},null,B)}}else typeof c=="function"&&(A.preventDefault(),B=new FormData(l,p),Bf(a,{pending:!0,data:B,method:l.method,action:c},c,B))},currentTarget:l}]})}}for(var Ud=0;Ud<ef.length;Ud++){var Nd=ef[Ud],hy=Nd.toLowerCase(),py=Nd[0].toUpperCase()+Nd.slice(1);Ri(hy,"on"+py)}Ri(Hm,"onAnimationEnd"),Ri(Gm,"onAnimationIteration"),Ri(Vm,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(EM,"onTransitionRun"),Ri(TM,"onTransitionStart"),Ri(bM,"onTransitionCancel"),Ri(Xm,"onTransitionEnd"),sn("onMouseEnter",["mouseout","mouseover"]),sn("onMouseLeave",["mouseout","mouseover"]),sn("onPointerEnter",["pointerout","pointerover"]),sn("onPointerLeave",["pointerout","pointerover"]),Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),my=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zo));function m_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],l=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var p=r.length-1;0<=p;p--){var A=r[p],B=A.instance,tt=A.currentTarget;if(A=A.listener,B!==c&&l.isPropagationStopped())break t;c=A,l.currentTarget=tt;try{c(l)}catch(ct){Il(ct)}l.currentTarget=null,c=B}else for(p=0;p<r.length;p++){if(A=r[p],B=A.instance,tt=A.currentTarget,A=A.listener,B!==c&&l.isPropagationStopped())break t;c=A,l.currentTarget=tt;try{c(l)}catch(ct){Il(ct)}l.currentTarget=null,c=B}}}}function Ee(t,n){var a=n[st];a===void 0&&(a=n[st]=new Set);var r=t+"__bubble";a.has(r)||(g_(n,t,2,!1),a.add(r))}function Ld(t,n,a){var r=0;n&&(r|=4),g_(a,t,r,n)}var Ou="_reactListening"+Math.random().toString(36).slice(2);function Od(t){if(!t[Ou]){t[Ou]=!0,Ge.forEach(function(a){a!=="selectionchange"&&(my.has(a)||Ld(a,!1,t),Ld(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ou]||(n[Ou]=!0,Ld("selectionchange",!1,n))}}function g_(t,n,a,r){switch(rv(n)){case 2:var l=oE;break;case 8:l=lE;break;default:l=th}a=l.bind(null,n,a,t),l=void 0,!Gc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,a,{capture:!0,passive:l}):t.addEventListener(n,a,!0):l!==void 0?t.addEventListener(n,a,{passive:l}):t.addEventListener(n,a,!1)}function Pd(t,n,a,r,l){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var A=r.stateNode.containerInfo;if(A===l)break;if(p===4)for(p=r.return;p!==null;){var B=p.tag;if((B===3||B===4)&&p.stateNode.containerInfo===l)return;p=p.return}for(;A!==null;){if(p=re(A),p===null)return;if(B=p.tag,B===5||B===6||B===26||B===27){r=c=p;continue t}A=A.parentNode}}r=r.return}gm(function(){var tt=c,ct=Fc(a),xt=[];t:{var j=km.get(t);if(j!==void 0){var lt=Ll,Ot=t;switch(t){case"keypress":if(Ul(a)===0)break t;case"keydown":case"keyup":lt=$x;break;case"focusin":Ot="focus",lt=Wc;break;case"focusout":Ot="blur",lt=Wc;break;case"beforeblur":case"afterblur":lt=Wc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=aM;break;case Hm:case Gm:case Vm:lt=kx;break;case Xm:lt=sM;break;case"scroll":case"scrollend":lt=Fx;break;case"wheel":lt=lM;break;case"copy":case"cut":case"paste":lt=qx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Mm;break;case"submit":lt=nM;break;case"toggle":case"beforetoggle":lt=cM}var Qt=(n&4)!==0,pe=!Qt&&(t==="scroll"||t==="scrollend"),$=Qt?j!==null?j+"Capture":null:j;Qt=[];for(var q=tt,rt;q!==null;){var St=q;if(rt=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||rt===null||$===null||(St=go(q,$),St!=null&&Qt.push(Ko(q,St,rt))),pe)break;q=q.return}0<Qt.length&&(j=new lt(j,Ot,null,a,ct),xt.push({event:j,listeners:Qt}))}}if((n&7)===0){t:{if(lt=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",lt&&a!==Bc&&(Ot=a.relatedTarget||a.fromElement)&&(re(Ot)||Ot[ft]))break t;(j||lt)&&(Ot=ct.window===ct?ct:(lt=ct.ownerDocument)?lt.defaultView||lt.parentWindow:window,j?(lt=a.relatedTarget||a.toElement,j=tt,lt=lt?re(lt):null,lt!==null&&(pe=f(lt),Qt=lt.tag,lt!==pe||Qt!==5&&Qt!==27&&Qt!==6)&&(lt=null)):(j=null,lt=tt),j!==lt&&(Qt=Sm,St="onMouseLeave",$="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=Mm,St="onPointerLeave",$="onPointerEnter",q="pointer"),pe=j==null?Ot:qt(j),rt=lt==null?Ot:qt(lt),Ot=new Qt(St,q+"leave",j,a,ct),Ot.target=pe,Ot.relatedTarget=rt,St=null,re(ct)===tt&&(Qt=new Qt($,q+"enter",lt,a,ct),Qt.target=rt,Qt.relatedTarget=pe,St=Qt),pe=St,Qt=j&&lt?D(j,lt,gy):null,j!==null&&__(xt,Ot,j,Qt,!1),lt!==null&&pe!==null&&__(xt,pe,lt,Qt,!0)))}t:{if(j=tt?qt(tt):window,lt=j.nodeName&&j.nodeName.toLowerCase(),lt==="select"||lt==="input"&&j.type==="file")var Yt=wm;else if(Rm(j))if(Dm)Yt=xM;else{Yt=vM;var Ce=_M}else lt=j.nodeName,!lt||lt.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?tt&&zc(tt.elementType)&&(Yt=wm):Yt=SM;if(Yt&&(Yt=Yt(t,tt))){Cm(xt,Yt,a,ct);break t}Ce&&Ce(t,j,tt)}switch(Ce=tt?qt(tt):window,t){case"focusin":(Rm(Ce)||Ce.contentEditable==="true")&&(rs=Ce,jc=tt,To=null);break;case"focusout":To=jc=rs=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,Bm(xt,a,ct);break;case"selectionchange":if(yM)break;case"keydown":case"keyup":Bm(xt,a,ct)}var ne;if(Yc)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else as?bm(t,a)&&(ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(ym&&a.locale!=="ko"&&(as||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&as&&(ne=_m()):(Fa=ct,Vc="value"in Fa?Fa.value:Fa.textContent,as=!0)),Ce=Pu(tt,ae),0<Ce.length&&(ae=new xm(ae,t,null,a,ct),xt.push({event:ae,listeners:Ce}),ne?ae.data=ne:(ne=Am(a),ne!==null&&(ae.data=ne)))),(ne=dM?hM(t,a):pM(t,a))&&(ae=Pu(tt,"onBeforeInput"),0<ae.length&&(Ce=new xm("onBeforeInput","beforeinput",null,a,ct),xt.push({event:Ce,listeners:ae}),Ce.data=ne)),dy(xt,t,tt,a,ct)}m_(xt,n)})}function Ko(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Pu(t,n){for(var a=n+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=go(t,a),l!=null&&r.unshift(Ko(t,l,c)),l=go(t,n),l!=null&&r.push(Ko(t,l,c))),t.tag===3)return r;t=t.return}return[]}function gy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function __(t,n,a,r,l){for(var c=n._reactName,p=[];a!==null&&a!==r;){var A=a,B=A.alternate,tt=A.stateNode;if(A=A.tag,B!==null&&B===r)break;A!==5&&A!==26&&A!==27||tt===null||(B=tt,l?(tt=go(a,c),tt!=null&&p.unshift(Ko(a,tt,B))):l||(tt=go(a,c),tt!=null&&p.push(Ko(a,tt,B)))),a=a.return}p.length!==0&&t.push({event:n,listeners:p})}var _y=/\r\n?/g,vy=/\u0000|\uFFFD/g;function v_(t){return(typeof t=="string"?t:""+t).replace(_y,`
`).replace(vy,"")}function S_(t,n){return n=v_(n),v_(t)===n}function We(t,n,a,r,l,c){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||es(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&es(t,""+r);else return;break;case"className":ni(t,"class",r);break;case"tabIndex":ni(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ni(t,a,r);break;case"style":pm(t,r,c);return;case"data":if(n!=="object"){ni(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=wl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&We(t,n,"name",l.name,l,null),We(t,n,"formEncType",l.formEncType,l,null),We(t,n,"formMethod",l.formMethod,l,null),We(t,n,"formTarget",l.formTarget,l,null)):(We(t,n,"encType",l.encType,l,null),We(t,n,"method",l.method,l,null),We(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=wl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=ki);return;case"onScroll":r!=null&&Ee("scroll",t);return;case"onScrollEnd":r!=null&&Ee("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=wl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Ee("beforetoggle",t),Ee("toggle",t),Qe(t,"popover",r);break;case"xlinkActuate":Ae(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ae(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ae(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ae(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ae(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ae(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Qe(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=zx.get(a)||a,Qe(t,a,r);else return}Se=!0}function Id(t,n,a,r,l,c){switch(a){case"style":pm(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")es(t,r);else if(typeof r=="number"||typeof r=="bigint")es(t,""+r);else return;break;case"onScroll":r!=null&&Ee("scroll",t);return;case"onScrollEnd":r!=null&&Ee("scrollend",t);return;case"onClick":r!=null&&(t.onclick=ki);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!vn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),c=a.slice(2,l?a.length-7:void 0),n=t[k]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,r,l);break t}Se=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):Qe(t,a,r)}return}Se=!0}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",t),Ee("load",t);var r=!1,l=!1,c;for(c in a)if(a.hasOwnProperty(c)){var p=a[c];if(p!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(t,n,c,p,a,null)}}l&&We(t,n,"srcSet",a.srcSet,a,null),r&&We(t,n,"src",a.src,a,null);return;case"input":Ee("invalid",t);var A=c=p=l=null,B=null,tt=null;for(r in a)if(a.hasOwnProperty(r)){var ct=a[r];if(ct!=null)switch(r){case"name":l=ct;break;case"type":p=ct;break;case"checked":B=ct;break;case"defaultChecked":tt=ct;break;case"value":c=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:We(t,n,r,ct,a,null)}}cm(t,c,A,B,tt,p,l,!1);return;case"select":Ee("invalid",t),r=p=c=null;for(l in a)if(a.hasOwnProperty(l)&&(A=a[l],A!=null))switch(l){case"value":c=A;break;case"defaultValue":p=A;break;case"multiple":r=A;default:We(t,n,l,A,a,null)}n=c,a=p,t.multiple=!!r,n!=null?ts(t,!!r,n,!1):a!=null&&ts(t,!!r,a,!0);return;case"textarea":Ee("invalid",t),c=l=r=null;for(p in a)if(a.hasOwnProperty(p)&&(A=a[p],A!=null))switch(p){case"value":r=A;break;case"defaultValue":l=A;break;case"children":c=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:We(t,n,p,A,a,null)}dm(t,r,l,c);return;case"option":for(B in a)a.hasOwnProperty(B)&&(r=a[B],r!=null)&&(B==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":We(t,n,B,r,a,null));return;case"dialog":Ee("beforetoggle",t),Ee("toggle",t),Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":Ee("load",t);break;case"video":case"audio":for(r=0;r<Zo.length;r++)Ee(Zo[r],t);break;case"image":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"embed":case"source":case"link":Ee("error",t),Ee("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(r=a[tt],r!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(t,n,tt,r,a,null)}return;default:if(zc(n)){for(ct in a)a.hasOwnProperty(ct)&&(r=a[ct],r!==void 0&&Id(t,n,ct,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&We(t,n,A,r,a,null))}var Sy={};function xy(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,p=null,A=null,B=null,tt=null,ct=null;for(lt in a){var xt=a[lt];if(a.hasOwnProperty(lt)&&xt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":B=xt;default:r.hasOwnProperty(lt)||We(t,n,lt,null,r,xt)}}for(var j in r){var lt=r[j];if(xt=a[j],r.hasOwnProperty(j)&&(lt!=null||xt!=null))switch(j){case"type":lt!==xt&&(Se=!0),c=lt;break;case"name":lt!==xt&&(Se=!0),l=lt;break;case"checked":lt!==xt&&(Se=!0),tt=lt;break;case"defaultChecked":lt!==xt&&(Se=!0),ct=lt;break;case"value":lt!==xt&&(Se=!0),p=lt;break;case"defaultValue":lt!==xt&&(Se=!0),A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==xt&&We(t,n,j,lt,r,xt)}}Pc(t,p,A,B,tt,ct,c,l);return;case"select":lt=p=A=j=null;for(c in a)if(B=a[c],a.hasOwnProperty(c)&&B!=null)switch(c){case"value":break;case"multiple":lt=B;default:r.hasOwnProperty(c)||We(t,n,c,null,r,B)}for(l in r)if(c=r[l],B=a[l],r.hasOwnProperty(l)&&(c!=null||B!=null))switch(l){case"value":c!==B&&(Se=!0),j=c;break;case"defaultValue":c!==B&&(Se=!0),A=c;break;case"multiple":c!==B&&(Se=!0),p=c;default:c!==B&&We(t,n,l,c,r,B)}n=A,a=p,r=lt,j!=null?ts(t,!!a,j,!1):!!r!=!!a&&(n!=null?ts(t,!!a,n,!0):ts(t,!!a,a?[]:"",!1));return;case"textarea":lt=j=null;for(A in a)if(l=a[A],a.hasOwnProperty(A)&&l!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:We(t,n,A,null,r,l)}for(p in r)if(l=r[p],c=a[p],r.hasOwnProperty(p)&&(l!=null||c!=null))switch(p){case"value":l!==c&&(Se=!0),j=l;break;case"defaultValue":l!==c&&(Se=!0),lt=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&We(t,n,p,l,r,c)}fm(t,j,lt);return;case"option":for(var Ot in a)j=a[Ot],a.hasOwnProperty(Ot)&&j!=null&&!r.hasOwnProperty(Ot)&&(Ot==="selected"?t.selected=!1:We(t,n,Ot,null,r,j));for(B in r)j=r[B],lt=a[B],r.hasOwnProperty(B)&&j!==lt&&(j!=null||lt!=null)&&(B==="selected"?(j!==lt&&(Se=!0),t.selected=j&&typeof j!="function"&&typeof j!="symbol"):We(t,n,B,j,r,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)j=a[Qt],a.hasOwnProperty(Qt)&&j!=null&&!r.hasOwnProperty(Qt)&&We(t,n,Qt,null,r,j);for(tt in r)if(j=r[tt],lt=a[tt],r.hasOwnProperty(tt)&&j!==lt&&(j!=null||lt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,n));break;default:We(t,n,tt,j,r,lt)}return;default:if(zc(n)){for(var pe in a)j=a[pe],a.hasOwnProperty(pe)&&j!==void 0&&!r.hasOwnProperty(pe)&&Id(t,n,pe,void 0,r,j);for(ct in r)j=r[ct],lt=a[ct],!r.hasOwnProperty(ct)||j===lt||j===void 0&&lt===void 0||Id(t,n,ct,j,r,lt);return}}for(var $ in a)j=a[$],a.hasOwnProperty($)&&j!=null&&!r.hasOwnProperty($)&&We(t,n,$,null,r,j);for(xt in r)j=r[xt],lt=a[xt],!r.hasOwnProperty(xt)||j===lt||j==null&&lt==null||We(t,n,xt,j,r,lt)}function x_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function My(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var l=a[r],c=l.transferSize,p=l.initiatorType,A=l.duration;if(c&&A&&x_(p)){for(p=0,A=l.responseEnd,r+=1;r<a.length;r++){var B=a[r],tt=B.startTime;if(tt>A)break;var ct=B.transferSize,xt=B.initiatorType;ct&&x_(xt)&&(B=B.responseEnd,p+=ct*(B<A?1:(A-tt)/(B-tt)))}if(--r,n+=8*(c+p)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var zd=null,Bd=null;function Qo(t){return t.nodeType===9?t:t.ownerDocument}function M_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function y_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function E_(t,n,a,r){return a=Qo(a).createElement(t),a[b]=r,a[k]=n,Dn(a,t,n),ve(a),a}function Fd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Hd=null;function yy(){var t=window.event;return t&&t.type==="popstate"?t===Hd?!1:(Hd=t,!0):(Hd=null,!1)}var Gd=typeof setTimeout=="function"?setTimeout:void 0,Ey=typeof clearTimeout=="function"?clearTimeout:void 0,T_=typeof Promise=="function"?Promise:void 0,b_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Gd,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof T_<"u"?function(t){return T_.resolve(null).then(t).catch(by)}:Gd;function by(t){setTimeout(function(){throw t})}function rr(t){return t==="head"}function A_(t,n){var a=n,r=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(l),Bs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Kd(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Kd(a);for(var c=a.firstChild;c;){var p=c.nextSibling,A=c.nodeName;c[Lt]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=p}}else a==="body"&&Kd(t.ownerDocument.body);a=l}while(a);Bs(n)}function R_(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function C_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function w_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Ay(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Vd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return Ay(n,a,t)}function Ry(t){return t.documentElement.clientHeight}function Cy(t){this.addEventListener("load",t),this.addEventListener("error",t)}function wy(t,n,a,r,l,c,p,A,B){var tt=n.nodeType===9?n:n.ownerDocument;try{var ct=tt.startViewTransition({update:function(){var j=tt.defaultView,lt=j.navigation&&j.navigation.transition,Ot=tt.fonts.status;r();var Qt=[];if(Ot==="loaded"&&(Ry(tt),tt.fonts.status==="loading"&&Qt.push(tt.fonts.ready)),Ot=Qt.length,t!==null)for(var pe=t.suspenseyImages,$=0,q=0;q<pe.length;q++){var rt=pe[q];if(!rt.complete){var St=rt.getBoundingClientRect();if(0<St.bottom&&0<St.right&&St.top<j.innerHeight&&St.left<j.innerWidth){if($+=Q_(rt),$>Bu){Qt.length=Ot;break}rt=new Promise(Cy.bind(rt)),Qt.push(rt)}}}if(0<Qt.length)return j=Promise.race([Promise.all(Qt),new Promise(function(Yt){return setTimeout(Yt,500)})]).then(l,l),(lt?Promise.allSettled([lt.finished,j]):j).then(c,c);if(l(),lt)return lt.finished.then(c,c);c()},types:a});tt.__reactViewTransition=ct;var xt=[];return ct.ready.then(function(){for(var j=tt.documentElement.getAnimations({subtree:!0}),lt=0;lt<j.length;lt++){var Ot=j[lt],Qt=Ot.effect,pe=Qt.pseudoElement;if(pe!=null&&pe.startsWith("::view-transition")){xt.push(Ot),Ot=Qt.getKeyframes();for(var $=pe=void 0,q=!0,rt=0;rt<Ot.length;rt++){var St=Ot[rt],Yt=St.width;if(pe===void 0)pe=Yt;else if(pe!==Yt){q=!1;break}if(Yt=St.height,$===void 0)$=Yt;else if($!==Yt){q=!1;break}delete St.width,delete St.height,St.transform==="none"&&delete St.transform}q&&pe!==void 0&&$!==void 0&&(Qt.setKeyframes(Ot),q=getComputedStyle(Qt.target,Qt.pseudoElement),q.width!==pe||q.height!==$)&&(q=Ot[0],q.width=pe,q.height=$,q=Ot[Ot.length-1],q.width=pe,q.height=$,Qt.setKeyframes(Ot))}}p()},function(j){tt.__reactViewTransition===ct&&(tt.__reactViewTransition=null);try{typeof j=="object"&&j!==null&&j.name==="InvalidStateError"&&(j.message==="View transition was skipped because document visibility state is hidden."||j.message==="Skipping view transition because document visibility state has become hidden."||j.message==="Skipping view transition because viewport size changed."||j.message==="Transition was aborted because of invalid state")&&(j=null),j!==null&&B(j)}finally{r(),l(),p()}}),ct.finished.finally(function(){for(var j=0;j<xt.length;j++)xt[j].cancel();tt.__reactViewTransition===ct&&(tt.__reactViewTransition=null),A()}),ct}catch{return r(),l(),p(),null}}function Hr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Hr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:I({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Hr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],l=0;l<a.length;l++){var c=a[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(a[l])}return r},Hr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function D_(t){return{name:t,group:new Hr("group",t),imagePair:new Hr("image-pair",t),old:new Hr("old",t),new:new Hr("new",t)}}function ui(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ui.prototype.addEventListener=function(t,n,a){var r=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(N_(c,t,n,a)===-1){var p=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(B){p.removeEventListener(t,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),r!==null&&(l=p.removeEventListener.bind(p,t,n,a),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Ns(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:l}),v(this._fragmentFiber.child,!1,Dy,t,A,r)}this._eventListeners=c}};function Dy(t,n,a,r){return M(t).addEventListener(n,a,r),!1}ui.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=N_(r,t,n,a),n!==-1)){var l=r[n];a=l.attachedListener;var c=l.cleanup;l=Ns(l.optionsOrUseCapture),v(this._fragmentFiber.child,!1,Uy,t,a,l),r.splice(n,1),c!==null&&c()}};function Uy(t,n,a,r){return M(t).removeEventListener(n,a,r),!1}function Ns(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function U_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function N_(t,n,a,r){if(t.length===0)return-1;r=U_(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===a&&U_(c.optionsOrUseCapture)===r)return l}return-1}ui.prototype.dispatchEvent=function(t){var n=_(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var c=a[l];r.addEventListener(c.type,c.attachedListener,Ns(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(l=0;l<a.length;l++)c=a[l],r.removeEventListener(c.type,c.attachedListener,Ns(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},ui.prototype.focus=function(t){v(this._fragmentFiber.child,!0,L_,t,void 0,void 0)};function L_(t,n){return t.tag===6?!1:(t=M(t),Xy(t,n))}ui.prototype.focusLast=function(t){var n=[];v(this._fragmentFiber.child,!0,Xd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!L_(n[a],t);a--);};function Xd(t,n){return n.push(t),!1}ui.prototype.blur=function(){var t=_(this._fragmentFiber);t!==null&&(t=M(t),t=Qo(t).activeElement,t!==null&&v(this._fragmentFiber.child,!1,Ny,t,void 0,void 0))};function Ny(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ui.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),v(this._fragmentFiber.child,!1,Ly,t,void 0,void 0)};function Ly(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}ui.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),v(this._fragmentFiber.child,!1,Oy,t,void 0,void 0);for(var a=n=0;a<Ni.length;a++){var r=Ni[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ni[n++]=r}Ni.length=n}};function Oy(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Ni=[],kd=!1;function Py(t,n,a){Ni.push({fragmentInstance:t,observer:n,instance:a}),kd||(kd=!0,ky(function(){kd=!1;var r=Ni;Ni=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}ui.prototype.getClientRects=function(){var t=[];return v(this._fragmentFiber.child,!1,Iy,t,void 0,void 0),t};function Iy(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}ui.prototype.getRootNode=function(t){var n=_(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},ui.prototype.compareDocumentPosition=function(t){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];v(this._fragmentFiber.child,!1,Xd,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,T(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=r=a.compareDocumentPosition(t);return a===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=R(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),l=M(a[a.length-1]);var c=T(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var p=n.compareDocumentPosition(t),A=l.compareDocumentPosition(t),B=p&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=r&&c&&p&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&l===t||B||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:p,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||zy(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function zy(t,n,a,r,l){var c=re(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=_(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=D(a,c,U),n===null?n=!1:(v(n,!0,F,c,a),c=x,x=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=D(r,c,U),n===null?n=!1:(v(n,!0,C,c,r),c=x,w=x=null,n=c!==null)),n):!1}function O_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ui.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];v(this._fragmentFiber.child,!1,Xd,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=R(this._fragmentFiber);if(r=a?r[1]||r[0]||_(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),O_(t,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var l=n[r];l.tag===6?(l=M(l),O_(l,a)):M(l).scrollIntoView(t),r+=a?-1:1}};function By(t,n){return t=M(t),P_(t,n),!1}function P_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function I_(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.addEventListener(l.type,l.attachedListener,Ns(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var p=0,A=0;A<Ni.length;A++){var B=Ni[A];(B.fragmentInstance!==n||B.observer!==c||B.instance!==t)&&(Ni[p++]=B)}Ni.length=p,c.observe(t)}),P_(t,n))}function Fy(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.removeEventListener(l.type,l.attachedListener,Ns(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?Py(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Wd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wd(a),Kt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Hy(t,n,a,r){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Lt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ti(t.nextSibling),t===null)break}return null}function Gy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ti(t.nextSibling),t===null))return null;return t}function z_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ti(t.nextSibling),t===null))return null;return t}function qd(t){return t.data==="$?"||t.data==="$~"}function Yd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Vy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Ti(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Zd=null;function B_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ti(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function F_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Xy(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function ky(t){b_(function(){b_(function(n){return t(n)})})}function H_(t,n,a){switch(n=Qo(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function G_(t,n,a){for(var r in a){var l=a[r];a.hasOwnProperty(r)&&l!=null&&We(t,n,r,null,Sy,l)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===ki&&(t.onclick=null),Kt(t)}function Kd(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Kt(t)}var bi=new Map,V_=new Set;function Jo(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Aa=At.d;At.d={f:Wy,r:qy,D:Yy,C:Zy,L:Ky,m:Qy,X:jy,S:Jy,M:$y};function Wy(){var t=Aa.f(),n=wu();return t||n}function qy(t){var n=fe(t);n!==null&&n.tag===5&&n.type==="form"?kg(n):Aa.r(t)}var Ls=typeof document>"u"?null:document;function X_(t,n,a){var r=Ls;if(r&&typeof n=="string"&&n){var l=_i(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),V_.has(l)||(V_.add(l),t={rel:t,crossOrigin:a,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Dn(n,"link",t),ve(n),r.head.appendChild(n)))}}function Yy(t){Aa.D(t),X_("dns-prefetch",t,null)}function Zy(t,n){Aa.C(t,n),X_("preconnect",t,n)}function Ky(t,n,a){Aa.L(t,n,a);var r=Ls;if(r&&t&&n){var l='link[rel="preload"][as="'+_i(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+_i(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+_i(a.imageSizes)+'"]')):l+='[href="'+_i(t)+'"]';var c=l;switch(n){case"style":c=Os(t);break;case"script":c=Ps(t)}if(!(bi.has(c)||(t=I({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),bi.set(c,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(jo(c))||n==="script"&&r.querySelector($o(c))))){var p=r.createElement("link");Dn(p,"link",t),n==="style"&&(p[Zt]=!0,p.onload=p.onerror=function(){Ye(p)}),ve(p),r.head.appendChild(p)}}}function Qy(t,n){Aa.m(t,n);var a=Ls;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+_i(r)+'"][href="'+_i(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ps(t)}if(!bi.has(c)&&(t=I({rel:"modulepreload",href:t},n),bi.set(c,t),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($o(c)))return}r=a.createElement("link"),Dn(r,"link",t),ve(r),a.head.appendChild(r)}}}function Jy(t,n,a){Aa.S(t,n,a);var r=Ls;if(r&&t){var l=Me(r).hoistableStyles,c=Os(t);n=n||"default";var p=l.get(c);if(!p){var A={loading:0,preload:null};if(p=r.querySelector(jo(c)))A.loading=5;else{t=I({rel:"stylesheet",href:t,"data-precedence":n},a),(a=bi.get(c))&&Qd(t,a);var B=p=r.createElement("link");ve(B),Dn(B,"link",t),B._p=new Promise(function(tt,ct){B.onload=tt,B.onerror=ct}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Iu(p,n,r)}p={type:"stylesheet",instance:p,count:1,state:A},l.set(c,p)}}}function jy(t,n){Aa.X(t,n);var a=Ls;if(a&&t){var r=Me(a).hoistableScripts,l=Ps(t),c=r.get(l);c||(c=a.querySelector($o(l)),c||(t=I({src:t,async:!0},n),(n=bi.get(l))&&Jd(t,n),c=a.createElement("script"),ve(c),Dn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function $y(t,n){Aa.M(t,n);var a=Ls;if(a&&t){var r=Me(a).hoistableScripts,l=Ps(t),c=r.get(l);c||(c=a.querySelector($o(l)),c||(t=I({src:t,async:!0,type:"module"},n),(n=bi.get(l))&&Jd(t,n),c=a.createElement("script"),ve(c),Dn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function k_(t,n,a,r){var l=(l=ze.current)?Jo(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Os(a.href),n=Me(l).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Os(a.href);var c=Me(l).hoistableStyles,p=c.get(t);if(p||(l=l.ownerDocument||l,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,p),(c=l.querySelector(jo(t)))?c._p||(p.instance=c,p.state.loading=5):(c=bi.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bi.set(t,c)),tE(l,t,c,p.state))),n&&r===null)throw Error(s(528,""));return p}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Ps(a),n=Me(l).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Os(t){return'href="'+_i(t)+'"'}function jo(t){return'link[rel="stylesheet"]['+t+"]"}function W_(t){return I({},t,{"data-precedence":t.precedence,precedence:null})}function tE(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Zt]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Zt]=!0,n.onload=n.onerror=Ye.bind(null,n),Dn(n,"link",a),ve(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Ps(t){return'[src="'+_i(t)+'"]'}function $o(t){return"script[async]"+t}function q_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+_i(a.href)+'"]');if(r)return n.instance=r,ve(r),r;var l=I({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),ve(r),Dn(r,"style",l),Iu(r,a.precedence,t),n.instance=r;case"stylesheet":l=Os(a.href);var c=t.querySelector(jo(l));if(c)return n.state.loading|=4,n.instance=c,ve(c),c;r=W_(a),(l=bi.get(l))&&Qd(r,l),c=(t.ownerDocument||t).createElement("link"),ve(c);var p=c;return p._p=new Promise(function(A,B){p.onload=A,p.onerror=B}),Dn(c,"link",r),n.state.loading|=4,Iu(c,a.precedence,t),n.instance=c;case"script":return c=Ps(a.src),(l=t.querySelector($o(c)))?(n.instance=l,ve(l),l):(r=a,(l=bi.get(c))&&(r=I({},a),Jd(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),ve(l),Dn(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Iu(r,a.precedence,t));return n.instance}function Iu(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,p=0;p<r.length;p++){var A=r[p];if(A.dataset.precedence===n)c=A;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Qd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Jd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var zu=null;function Y_(t,n,a){if(zu===null){var r=new Map,l=zu=new Map;l.set(a,r)}else l=zu,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var c=a[l];if(!(c[Lt]||c[b]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(n)||"";p=t+p;var A=r.get(p);A?A.push(c):r.set(p,[c])}}return r}function jd(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function eE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Z_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function K_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Q_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function J_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Q_(n),t.suspenseyImages.push(n)),t=aE.bind(t),n.decode().then(t,t))}function nE(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Os(r.href),c=n.querySelector(jo(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=tl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,ve(c);return}c=n.ownerDocument||n,r=W_(r),(l=bi.get(l))&&Qd(r,l),c=c.createElement("link"),ve(c);var p=c;p._p=new Promise(function(A,B){p.onload=A,p.onerror=B}),Dn(c,"link",r),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=tl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Bu=0;function iE(t,n){return t.stylesheets&&t.count===0&&Hu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Hu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Bu===0&&(Bu=62500*My());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Bu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function j_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Hu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function tl(){this.count--,j_(this)}function aE(){this.imgCount--,j_(this)}var Fu=null;function Hu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fu=new Map,n.forEach(rE,t),Fu=null,tl.call(t))}function rE(t,n){if(!(n.state.loading&4)){var a=Fu.get(t);if(a)var r=a.get(null);else{a=new Map,Fu.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var p=l[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),r=p)}r&&a.set(null,r)}l=n.instance,p=l.getAttribute("data-precedence"),c=a.get(p)||r,c===r&&a.set(null,l),a.set(p,l),this.count++,r=tl.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Is={$$typeof:Z,Provider:null,Consumer:null,_currentValue:Ie,_currentValue2:Ie,_threadCount:0};function sE(t,n,a,r,l,c,p,A,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$r(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$r(0),this.hiddenUpdates=$r(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function $_(t,n,a,r,l,c,p,A,B,tt,ct,xt){return t=new sE(t,n,a,p,B,tt,ct,xt,A),n=1,c===!0&&(n|=24),c=Wn(3,null,null,n),t.current=c,c.stateNode=t,n=hf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:n},_f(c),t}function tv(t){return t?(t=ls,t):ls}function ev(t,n,a,r,l,c){l=tv(l),r.context===null?r.context=l:r.pendingContext=l,r=Ya(n),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=Za(t,r,n),a!==null&&(Kn(a,t,n),Uo(a,t,n))}function nv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function $d(t,n){nv(t,n),(t=t.alternate)&&nv(t,n)}function iv(t){if(t.tag===13||t.tag===31){var n=Er(t,67108864);n!==null&&Kn(n,t,67108864),$d(t,67108864)}}function av(t){if(t.tag===13||t.tag===31){var n=li();n=po(n);var a=Er(t,n);a!==null&&Kn(a,t,n),$d(t,n)}}var zs=!0;function oE(t,n,a,r){var l=_t.T;_t.T=null;var c=At.p;try{At.p=2,th(t,n,a,r)}finally{At.p=c,_t.T=l}}function lE(t,n,a,r){var l=_t.T;_t.T=null;var c=At.p;try{At.p=8,th(t,n,a,r)}finally{At.p=c,_t.T=l}}function th(t,n,a,r){if(zs){var l=eh(r);if(l===null)Pd(t,n,r,Gu,a),sv(t,r);else if(cE(l,t,n,a,r))r.stopPropagation();else if(sv(t,r),n&4&&-1<uE.indexOf(t)){for(;l!==null;){var c=fe(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=da(c.pendingLanes);if(p!==0){var A=c;for(A.pendingLanes|=2,A.entangledLanes|=2;p;){var B=1<<31-ce(p);A.entanglements[1]|=B,p&=~B}ta(c),(He&6)===0&&(Au=kt()+500,Yo(0))}}break;case 31:case 13:A=Er(c,2),A!==null&&Kn(A,c,2),wu(),$d(c,2)}if(c=eh(r),c===null&&Pd(t,n,r,Gu,a),c===l)break;l=c}l!==null&&r.stopPropagation()}else Pd(t,n,r,null,a)}}function eh(t){return t=Fc(t),nh(t)}var Gu=null;function nh(t){if(Gu=null,t=re(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Gu=t,null}function rv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ie()){case le:return 2;case K:return 8;case Ct:case Mt:return 32;case Nt:return 268435456;default:return 32}default:return 32}}var ih=!1,sr=null,or=null,lr=null,el=new Map,nl=new Map,ur=[],uE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sv(t,n){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":el.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(n.pointerId)}}function il(t,n,a,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},n!==null&&(n=fe(n),n!==null&&iv(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function cE(t,n,a,r,l){switch(n){case"focusin":return sr=il(sr,t,n,a,r,l),!0;case"dragenter":return or=il(or,t,n,a,r,l),!0;case"mouseover":return lr=il(lr,t,n,a,r,l),!0;case"pointerover":var c=l.pointerId;return el.set(c,il(el.get(c)||null,t,n,a,r,l)),!0;case"gotpointercapture":return c=l.pointerId,nl.set(c,il(nl.get(c)||null,t,n,a,r,l)),!0}return!1}function ov(t){var n=re(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Rl(t.priority,function(){av(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Rl(t.priority,function(){av(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=eh(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Bc=r,a.target.dispatchEvent(r),Bc=null}else return n=fe(a),n!==null&&iv(n),t.blockedOn=a,!1;n.shift()}return!0}function lv(t,n,a){Vu(t)&&a.delete(n)}function fE(){ih=!1,sr!==null&&Vu(sr)&&(sr=null),or!==null&&Vu(or)&&(or=null),lr!==null&&Vu(lr)&&(lr=null),el.forEach(lv),nl.forEach(lv)}function Xu(t,n){t.blockedOn===n&&(t.blockedOn=null,ih||(ih=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,fE)))}var ku=null;function uv(t){ku!==t&&(ku=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ku===t&&(ku=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if(nh(r||a)===null)continue;break}var c=fe(a);c!==null&&(t.splice(n,3),n-=3,Bf(c,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function Bs(t){function n(B){return Xu(B,t)}sr!==null&&Xu(sr,t),or!==null&&Xu(or,t),lr!==null&&Xu(lr,t),el.forEach(n),nl.forEach(n);for(var a=0;a<ur.length;a++){var r=ur[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<ur.length&&(a=ur[0],a.blockedOn===null);)ov(a),a.blockedOn===null&&ur.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],c=a[r+1],p=l[k]||null;if(typeof c=="function")p||uv(a);else if(p){var A=null;if(c&&c.hasAttribute("formAction")){if(l=c,p=c[k]||null)A=p.formAction;else if(nh(l)!==null)continue}else A=p.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),uv(a)}}}function cv(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return l=p})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function ah(t){this._internalRoot=t}Wu.prototype.render=ah.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=li();ev(a,r,t,n,null,null)},Wu.prototype.unmount=ah.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;ev(t.current,2,null,t,null,null),wu(),n[ft]=null}};function Wu(t){this._internalRoot=t}Wu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Al();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ur.length&&n!==0&&n<ur[a].priority;a++);ur.splice(a,0,t),a===0&&ov(t)}};var fv=e.version;if(fv!=="19.3.0")throw Error(s(527,fv,"19.3.0"));At.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var dE={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:_t,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qu.isDisabled&&qu.supportsFiber)try{Jt=qu.inject(dE),Vt=qu}catch{}}return rl.createRoot=function(t,n){if(!u(t))throw Error(s(299));var a=!1,r="",l=t0,c=e0,p=n0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=$_(t,1,!1,null,null,a,r,null,l,c,p,cv),t[ft]=n.current,Od(t),new ah(n)},rl.hydrateRoot=function(t,n,a){if(!u(t))throw Error(s(299));var r=!1,l="",c=t0,p=e0,A=n0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=$_(t,1,!0,n,a??null,r,l,B,c,p,A,cv),n.context=tv(null),a=n.current,r=li(),r=po(r),l=Ya(r),l.callback=null,Za(a,l,r),a=r,n.current.lanes=a,Vi(n,a),ta(n),t[ft]=n.current,Od(t),new Wu(n)},rl.version="19.3.0",rl}var Mv;function yE(){if(Mv)return oh.exports;Mv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),oh.exports=ME(),oh.exports}var EE=yE();function Bp(o){const e=new Uint32Array(1);return crypto.getRandomValues(e),Promise.resolve(e[0]%o+1)}const Fp={red:{hex:14034996,cssTop:[214,40,52],cssBottom:[140,18,28],label:"#ffffff"},green:{hex:1096065,cssTop:[16,185,129],cssBottom:[5,150,105],label:"#ecfdf5"},white:{hex:15790320,cssTop:[240,240,240],cssBottom:[200,200,200],label:"#111827"}},TE=[6,8,10],bE=["red","green","white"],fh={sides:6,color:"red",translucent:!0},AE={6:.85,8:.8,10:.9},Hp=(o,e)=>e?AE[o]:1;function RE(){const o=new URLSearchParams(window.location.search),e=Number(o.get("s")),i=TE.includes(e)?e:fh.sides,s=o.get("c")?.toLowerCase(),u=s!==void 0&&bE.includes(s)?s:fh.color,f=(o.get("translucent")??o.get("t"))?.toLowerCase(),d=f==="true"?!0:f==="false"?!1:fh.translucent;return{sides:i,color:u,translucent:d}}const yv={1:{name:"front",orientation:{x:0,y:0}},2:{name:"top",orientation:{x:-90,y:0}},3:{name:"right",orientation:{x:0,y:-90}},4:{name:"left",orientation:{x:0,y:90}},5:{name:"bottom",orientation:{x:90,y:0}},6:{name:"back",orientation:{x:0,y:180}}},CE={1:[[2,2]],2:[[1,1],[3,3]],3:[[1,1],[2,2],[3,3]],4:[[1,1],[1,3],[3,1],[3,3]],5:[[1,1],[1,3],[2,2],[3,1],[3,3]],6:[[1,1],[1,3],[2,1],[2,3],[3,1],[3,3]]},Ev=65,Tv=.5,wE=10,dh=1500,bv=750,DE=260,Av=(o,e,i)=>Math.min(i,Math.max(e,o)),Rv=o=>(o%360+360)%360,Cv=o=>Math.round(o*10)/10,wv=(o,e,i)=>i>=0?o+Rv(e-o):o-Rv(o-e);function UE({value:o}){return cn.jsx(cn.Fragment,{children:CE[o].map(([e,i])=>cn.jsx("span",{className:"pip",style:{gridRow:e,gridColumn:i}},`${e}-${i}`))})}function NE({color:o="red",translucent:e=!0}){const[i,s]=te.useState({x:0,y:0}),[u,f]=te.useState({ms:0,easing:"linear"}),[d,h]=te.useState(!1),[g,m]=te.useState(!1),[S,v]=te.useState(null),[_,T]=te.useState(null),R=te.useRef(null),O=te.useRef(i),M=te.useRef({x:0,y:0}),x=te.useRef(null),w=te.useRef(null),F=te.useRef([]);O.current=i;const C=Fp[o],U=Hp(6,e),D=`rgb(${C.cssTop.join(" ")} / ${U})`,I=`rgb(${C.cssBottom.join(" ")} / ${U})`,E=te.useCallback((Y,V,Z="ease-out")=>{f({ms:V,easing:Z}),s(Y)},[]),L=te.useCallback(async()=>{h(!0),v(null),T(null);try{const Y=await Bp(6),V=yv[Y],Z=3+Math.floor(Math.random()*5),X=wE-Z,W=Math.random()<.5?-1:1,nt=Math.random()<.5?-1:1,it=O.current,dt={x:it.x+W*360*Z,y:it.y+nt*360*X};E(dt,dh,"cubic-bezier(0.4, 0, 0.35, 1)"),F.current.push(setTimeout(()=>{const vt={x:wv(dt.x,V.orientation.x,W),y:wv(dt.y,V.orientation.y,nt)};M.current=vt,E(vt,bv,"cubic-bezier(0.22, 1, 0.36, 1)")},dh)),F.current.push(setTimeout(()=>{h(!1),v(Y)},dh+bv))}catch(Y){h(!1),T(Y instanceof Error?Y.message:"Roll failed.")}},[E]),N=te.useCallback(Y=>{if(d)return;const V=Y.currentTarget.getBoundingClientRect();x.current={centerX:V.left+V.width/2,centerY:V.top+V.height/2,halfWidth:V.width/2,halfHeight:V.height/2,nx:0,ny:0},Y.currentTarget.setPointerCapture(Y.pointerId),m(!0),f({ms:0,easing:"linear"})},[d]),z=te.useCallback(Y=>{const V=x.current;V&&(V.nx=Av((Y.clientX-V.centerX)/V.halfWidth,-1,1),V.ny=Av((Y.clientY-V.centerY)/V.halfHeight,-1,1),!w.current&&(w.current=requestAnimationFrame(()=>{w.current=null;const Z=M.current;s({x:Cv(Z.x-V.ny*Ev),y:Cv(Z.y+V.nx*Ev)})})))},[]),G=te.useCallback(()=>{const Y=x.current;if(!Y)return;x.current=null,m(!1),w.current&&(cancelAnimationFrame(w.current),w.current=null),Math.abs(Y.nx)>=Tv||Math.abs(Y.ny)>=Tv?L():E(M.current,DE,"cubic-bezier(0.34, 1.3, 0.64, 1)")},[E,L]);return te.useEffect(()=>{const Y=F.current;return()=>{Y.forEach(clearTimeout),w.current&&cancelAnimationFrame(w.current)}},[]),cn.jsxs("div",{ref:R,className:"stage",style:{"--face-top":D,"--face-bottom":I,"--die-fg":C.label},onPointerDown:N,onPointerMove:z,onPointerUp:G,onPointerCancel:G,children:[cn.jsx("div",{className:"scene",children:cn.jsx("div",{className:`cube${d?" is-rolling":""}${g?" is-dragging":""}`,style:{transform:`translateZ(0) rotateX(${i.x}deg) rotateY(${i.y}deg)`,transitionDuration:`${u.ms}ms`,transitionTimingFunction:u.easing},children:Object.entries(yv).map(([Y,V])=>cn.jsx("div",{className:`face face--${V.name}`,"data-value":Y,children:cn.jsx("div",{className:"pips",children:cn.jsx(UE,{value:Number(Y)})})},Y))})}),cn.jsx("p",{className:"hint",children:d?"Rolling...":_||(S?`You rolled ${S}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const Gp="186",LE=0,Dv=1,OE=2,_c=1,PE=2,hl=3,Zr=0,jn=1,Ii=2,La=0,ml=1,Uv=2,Nv=3,Lv=4,IE=5,js=100,zE=101,BE=102,FE=103,HE=104,GE=200,VE=201,XE=202,kE=203,XS=204,kS=205,WE=206,qE=207,YE=208,ZE=209,KE=210,QE=211,JE=212,jE=213,$E=214,qh=0,Yh=1,Zh=2,gl=3,Kh=4,Qh=5,Jh=6,jh=7,WS=0,tT=1,eT=2,sa=0,qS=1,YS=2,ZS=3,KS=4,QS=5,JS=6,jS=7,$S=300,Kr=301,ro=302,hh=303,ph=304,wc=306,$h=1e3,Na=1001,tp=1002,Nn=1003,nT=1004,Yu=1005,zn=1006,mh=1007,qr=1008,hi=1009,tx=1010,ex=1011,_l=1012,Vp=1013,oa=1014,aa=1015,la=1016,Xp=1017,kp=1018,vl=1020,nx=35902,ix=35899,ax=1021,rx=1022,Bi=1023,Ia=1026,Yr=1027,sx=1028,Wp=1029,Qr=1030,qp=1031,Yp=1033,vc=33776,Sc=33777,xc=33778,Mc=33779,ep=35840,np=35841,ip=35842,ap=35843,rp=36196,sp=37492,op=37496,lp=37488,up=37489,Ec=37490,cp=37491,fp=37808,dp=37809,hp=37810,pp=37811,mp=37812,gp=37813,_p=37814,vp=37815,Sp=37816,xp=37817,Mp=37818,yp=37819,Ep=37820,Tp=37821,bp=36492,Ap=36494,Rp=36495,Cp=36283,wp=36284,Tc=36285,Dp=36286,iT=3200,Up=0,aT=1,_r="",Jn="srgb",bc="srgb-linear",Ac="linear",qe="srgb",gh=7680,rT=519,sT=512,oT=513,lT=514,Zp=515,uT=516,cT=517,Kp=518,fT=519,dT=35044,Ov="300 es",ra=2e3,Sl=2001;function hT(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Rc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function pT(){const o=Rc("canvas");return o.style.display="block",o}const Pv={};function Iv(...o){const e="THREE."+o.shift();console.log(e,...o)}function ox(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function oe(...o){o=ox(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Be(...o){o=ox(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function eo(...o){const e=o.join(" ");e in Pv||(Pv[e]=!0,oe(...o))}function mT(o,e,i){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const gT={[qh]:Yh,[Zh]:Jh,[Kh]:jh,[gl]:Qh,[Yh]:qh,[Jh]:Zh,[jh]:Kh,[Qh]:gl};class Jr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const u=s[e];if(u!==void 0){const f=u.indexOf(i);f!==-1&&u.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const u=s.slice(0);for(let f=0,d=u.length;f<d;f++)u[f].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_h=Math.PI/180,Np=180/Math.PI;function Ml(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Ne(o,e,i){return Math.max(e,Math.min(i,o))}function _T(o,e){return(o%e+e)%e}function vh(o,e,i){return(1-i)*o+i*e}function sl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const am=class am{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6],this.y=u[1]*i+u[4]*s+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ne(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),u=Math.sin(i),f=this.x-e.x,d=this.y-e.y;return this.x=f*s-d*u+e.x,this.y=f*u+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};am.prototype.isVector2=!0;let Te=am;class fa{constructor(e=0,i=0,s=0,u=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=u}static slerpFlat(e,i,s,u,f,d,h){let g=s[u+0],m=s[u+1],S=s[u+2],v=s[u+3],_=f[d+0],T=f[d+1],R=f[d+2],O=f[d+3];if(v!==O||g!==_||m!==T||S!==R){let M=g*_+m*T+S*R+v*O;M<0&&(_=-_,T=-T,R=-R,O=-O,M=-M);let x=1-h;if(M<.9995){const w=Math.acos(M),F=Math.sin(w);x=Math.sin(x*w)/F,h=Math.sin(h*w)/F,g=g*x+_*h,m=m*x+T*h,S=S*x+R*h,v=v*x+O*h}else{g=g*x+_*h,m=m*x+T*h,S=S*x+R*h,v=v*x+O*h;const w=1/Math.sqrt(g*g+m*m+S*S+v*v);g*=w,m*=w,S*=w,v*=w}}e[i]=g,e[i+1]=m,e[i+2]=S,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,u,f,d){const h=s[u],g=s[u+1],m=s[u+2],S=s[u+3],v=f[d],_=f[d+1],T=f[d+2],R=f[d+3];return e[i]=h*R+S*v+g*T-m*_,e[i+1]=g*R+S*_+m*v-h*T,e[i+2]=m*R+S*T+h*_-g*v,e[i+3]=S*R-h*v-g*_-m*T,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,u){return this._x=e,this._y=i,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,u=e._y,f=e._z,d=e._order,h=Math.cos,g=Math.sin,m=h(s/2),S=h(u/2),v=h(f/2),_=g(s/2),T=g(u/2),R=g(f/2);switch(d){case"XYZ":this._x=_*S*v+m*T*R,this._y=m*T*v-_*S*R,this._z=m*S*R+_*T*v,this._w=m*S*v-_*T*R;break;case"YXZ":this._x=_*S*v+m*T*R,this._y=m*T*v-_*S*R,this._z=m*S*R-_*T*v,this._w=m*S*v+_*T*R;break;case"ZXY":this._x=_*S*v-m*T*R,this._y=m*T*v+_*S*R,this._z=m*S*R+_*T*v,this._w=m*S*v-_*T*R;break;case"ZYX":this._x=_*S*v-m*T*R,this._y=m*T*v+_*S*R,this._z=m*S*R-_*T*v,this._w=m*S*v+_*T*R;break;case"YZX":this._x=_*S*v+m*T*R,this._y=m*T*v+_*S*R,this._z=m*S*R-_*T*v,this._w=m*S*v-_*T*R;break;case"XZY":this._x=_*S*v-m*T*R,this._y=m*T*v-_*S*R,this._z=m*S*R+_*T*v,this._w=m*S*v+_*T*R;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,u=Math.sin(s);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],u=i[4],f=i[8],d=i[1],h=i[5],g=i[9],m=i[2],S=i[6],v=i[10],_=s+h+v;if(_>0){const T=.5/Math.sqrt(_+1);this._w=.25/T,this._x=(S-g)*T,this._y=(f-m)*T,this._z=(d-u)*T}else if(s>h&&s>v){const T=2*Math.sqrt(1+s-h-v);this._w=(S-g)/T,this._x=.25*T,this._y=(u+d)/T,this._z=(f+m)/T}else if(h>v){const T=2*Math.sqrt(1+h-s-v);this._w=(f-m)/T,this._x=(u+d)/T,this._y=.25*T,this._z=(g+S)/T}else{const T=2*Math.sqrt(1+v-s-h);this._w=(d-u)/T,this._x=(f+m)/T,this._y=(g+S)/T,this._z=.25*T}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ne(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const u=Math.min(1,i/s);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,u=e._y,f=e._z,d=e._w,h=i._x,g=i._y,m=i._z,S=i._w;return this._x=s*S+d*h+u*m-f*g,this._y=u*S+d*g+f*h-s*m,this._z=f*S+d*m+s*g-u*h,this._w=d*S-s*h-u*g-f*m,this._onChangeCallback(),this}slerp(e,i){let s=e._x,u=e._y,f=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,u=-u,f=-f,d=-d,h=-h);let g=1-i;if(h<.9995){const m=Math.acos(h),S=Math.sin(m);g=Math.sin(g*m)/S,i=Math.sin(i*m)/S,this._x=this._x*g+s*i,this._y=this._y*g+u*i,this._z=this._z*g+f*i,this._w=this._w*g+d*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+u*i,this._z=this._z*g+f*i,this._w=this._w*g+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const rm=class rm{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(zv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(zv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[3]*s+f[6]*u,this.y=f[1]*i+f[4]*s+f[7]*u,this.z=f[2]*i+f[5]*s+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,u=this.z,f=e.elements,d=1/(f[3]*i+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*u+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*u+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*u+f[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,u=this.z,f=e.x,d=e.y,h=e.z,g=e.w,m=2*(d*u-h*s),S=2*(h*i-f*u),v=2*(f*s-d*i);return this.x=i+g*m+d*v-h*S,this.y=s+g*S+h*m-f*v,this.z=u+g*v+f*S-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*u,this.y=f[1]*i+f[5]*s+f[9]*u,this.z=f[2]*i+f[6]*s+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this.z=Ne(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this.z=Ne(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,u=e.y,f=e.z,d=i.x,h=i.y,g=i.z;return this.x=u*g-f*h,this.y=f*d-s*g,this.z=s*h-u*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Sh.copy(this).projectOnVector(e),this.sub(Sh)}reflect(e){return this.sub(Sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ne(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,u=this.z-e.z;return i*i+s*s+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const u=Math.sin(i)*e;return this.x=u*Math.sin(s),this.y=Math.cos(i)*e,this.z=u*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=u,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rm.prototype.isVector3=!0;let at=rm;const Sh=new at,zv=new fa,sm=class sm{constructor(e,i,s,u,f,d,h,g,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,u,f,d,h,g,m)}set(e,i,s,u,f,d,h,g,m){const S=this.elements;return S[0]=e,S[1]=u,S[2]=h,S[3]=i,S[4]=f,S[5]=g,S[6]=s,S[7]=d,S[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,u=i.elements,f=this.elements,d=s[0],h=s[3],g=s[6],m=s[1],S=s[4],v=s[7],_=s[2],T=s[5],R=s[8],O=u[0],M=u[3],x=u[6],w=u[1],F=u[4],C=u[7],U=u[2],D=u[5],I=u[8];return f[0]=d*O+h*w+g*U,f[3]=d*M+h*F+g*D,f[6]=d*x+h*C+g*I,f[1]=m*O+S*w+v*U,f[4]=m*M+S*F+v*D,f[7]=m*x+S*C+v*I,f[2]=_*O+T*w+R*U,f[5]=_*M+T*F+R*D,f[8]=_*x+T*C+R*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],g=e[6],m=e[7],S=e[8];return i*d*S-i*h*m-s*f*S+s*h*g+u*f*m-u*d*g}invert(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],g=e[6],m=e[7],S=e[8],v=S*d-h*m,_=h*g-S*f,T=m*f-d*g,R=i*v+s*_+u*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const O=1/R;return e[0]=v*O,e[1]=(u*m-S*s)*O,e[2]=(h*s-u*d)*O,e[3]=_*O,e[4]=(S*i-u*g)*O,e[5]=(u*f-h*i)*O,e[6]=T*O,e[7]=(s*g-m*i)*O,e[8]=(d*i-s*f)*O,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,u,f,d,h){const g=Math.cos(f),m=Math.sin(f);return this.set(s*g,s*m,-s*(g*d+m*h)+d+e,-u*m,u*g,-u*(-m*d+g*h)+h+i,0,0,1),this}scale(e,i){return eo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xh.makeScale(e,i)),this}rotate(e){return eo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xh.makeRotation(-e)),this}translate(e,i){return eo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let u=0;u<9;u++)if(i[u]!==s[u])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};sm.prototype.isMatrix3=!0;let de=sm;const xh=new de,Bv=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fv=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vT(){const o={enabled:!0,workingColorSpace:bc,spaces:{},convert:function(u,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===qe&&(u.r=Oa(u.r),u.g=Oa(u.g),u.b=Oa(u.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qe&&(u.r=no(u.r),u.g=no(u.g),u.b=no(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===_r?Ac:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,d){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return eo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return eo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[bc]:{primaries:e,whitePoint:s,transfer:Ac,toXYZ:Bv,fromXYZ:Fv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:e,whitePoint:s,transfer:qe,toXYZ:Bv,fromXYZ:Fv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),o}const Ue=vT();function Oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function no(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Fs;class ST{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Fs===void 0&&(Fs=Rc("canvas")),Fs.width=e.width,Fs.height=e.height;const u=Fs.getContext("2d");e instanceof ImageData?u.putImageData(e,0,0):u.drawImage(e,0,0,e.width,e.height),s=Fs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Rc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const u=s.getImageData(0,0,e.width,e.height),f=u.data;for(let d=0;d<f.length;d++)f[d]=Oa(f[d]/255)*255;return s.putImageData(u,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Oa(i[s]/255)*255):i[s]=Oa(i[s]);return{data:i,width:e.width,height:e.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xT=0;class Qp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=Ml(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let d=0,h=u.length;d<h;d++)u[d].isDataTexture?f.push(Mh(u[d].image)):f.push(Mh(u[d]))}else f=Mh(u);s.url=f}return i||(e.images[this.uuid]=s),s}}function Mh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ST.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let MT=0;const yh=new at;class Bn extends Jr{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,s=Na,u=Na,f=zn,d=qr,h=Bi,g=hi,m=Bn.DEFAULT_ANISOTROPY,S=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MT++}),this.uuid=Ml(),this.name="",this.source=new Qp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=g,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yh).x}get height(){return this.source.getSize(yh).y}get depth(){return this.source.getSize(yh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){oe(`Texture.setValues(): property '${i}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$S)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $h:e.x=e.x-Math.floor(e.x);break;case Na:e.x=e.x<0?0:1;break;case tp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $h:e.y=e.y-Math.floor(e.y);break;case Na:e.y=e.y<0?0:1;break;case tp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=$S;Bn.DEFAULT_ANISOTROPY=1;const om=class om{constructor(e=0,i=0,s=0,u=1){this.x=e,this.y=i,this.z=s,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,u){return this.x=e,this.y=i,this.z=s,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,u=this.z,f=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*u+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*u+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*u+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*u+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,u,f;const g=e.elements,m=g[0],S=g[4],v=g[8],_=g[1],T=g[5],R=g[9],O=g[2],M=g[6],x=g[10];if(Math.abs(S-_)<.01&&Math.abs(v-O)<.01&&Math.abs(R-M)<.01){if(Math.abs(S+_)<.1&&Math.abs(v+O)<.1&&Math.abs(R+M)<.1&&Math.abs(m+T+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(m+1)/2,C=(T+1)/2,U=(x+1)/2,D=(S+_)/4,I=(v+O)/4,E=(R+M)/4;return F>C&&F>U?F<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(F),u=D/s,f=I/s):C>U?C<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(C),s=D/u,f=E/u):U<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(U),s=I/f,u=E/f),this.set(s,u,f,i),this}let w=Math.sqrt((M-R)*(M-R)+(v-O)*(v-O)+(_-S)*(_-S));return Math.abs(w)<.001&&(w=1),this.x=(M-R)/w,this.y=(v-O)/w,this.z=(_-S)/w,this.w=Math.acos((m+T+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this.z=Ne(this.z,e.z,i.z),this.w=Ne(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this.z=Ne(this.z,e,i),this.w=Ne(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};om.prototype.isVector4=!0;let rn=om;class yT extends Jr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i),this.textures=[];const u={width:e,height:i,depth:s.depth},f=new Bn(u),d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=i,this.textures[u].image.depth=s,this.textures[u].isData3DTexture!==!0&&(this.textures[u].isArrayTexture=this.textures[u].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const u=Object.assign({},e.textures[i].image);this.textures[i].source=new Qp(u)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends yT{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class lx extends Bn{constructor(e=null,i=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:u},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ET extends Bn{constructor(e=null,i=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:u},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Cc=class Cc{constructor(e,i,s,u,f,d,h,g,m,S,v,_,T,R,O,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,u,f,d,h,g,m,S,v,_,T,R,O,M)}set(e,i,s,u,f,d,h,g,m,S,v,_,T,R,O,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=u,x[1]=f,x[5]=d,x[9]=h,x[13]=g,x[2]=m,x[6]=S,x[10]=v,x[14]=_,x[3]=T,x[7]=R,x[11]=O,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cc().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,u=1/Hs.setFromMatrixColumn(e,0).length(),f=1/Hs.setFromMatrixColumn(e,1).length(),d=1/Hs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*u,i[1]=s[1]*u,i[2]=s[2]*u,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,u=e.y,f=e.z,d=Math.cos(s),h=Math.sin(s),g=Math.cos(u),m=Math.sin(u),S=Math.cos(f),v=Math.sin(f);if(e.order==="XYZ"){const _=d*S,T=d*v,R=h*S,O=h*v;i[0]=g*S,i[4]=-g*v,i[8]=m,i[1]=T+R*m,i[5]=_-O*m,i[9]=-h*g,i[2]=O-_*m,i[6]=R+T*m,i[10]=d*g}else if(e.order==="YXZ"){const _=g*S,T=g*v,R=m*S,O=m*v;i[0]=_+O*h,i[4]=R*h-T,i[8]=d*m,i[1]=d*v,i[5]=d*S,i[9]=-h,i[2]=T*h-R,i[6]=O+_*h,i[10]=d*g}else if(e.order==="ZXY"){const _=g*S,T=g*v,R=m*S,O=m*v;i[0]=_-O*h,i[4]=-d*v,i[8]=R+T*h,i[1]=T+R*h,i[5]=d*S,i[9]=O-_*h,i[2]=-d*m,i[6]=h,i[10]=d*g}else if(e.order==="ZYX"){const _=d*S,T=d*v,R=h*S,O=h*v;i[0]=g*S,i[4]=R*m-T,i[8]=_*m+O,i[1]=g*v,i[5]=O*m+_,i[9]=T*m-R,i[2]=-m,i[6]=h*g,i[10]=d*g}else if(e.order==="YZX"){const _=d*g,T=d*m,R=h*g,O=h*m;i[0]=g*S,i[4]=O-_*v,i[8]=R*v+T,i[1]=v,i[5]=d*S,i[9]=-h*S,i[2]=-m*S,i[6]=T*v+R,i[10]=_-O*v}else if(e.order==="XZY"){const _=d*g,T=d*m,R=h*g,O=h*m;i[0]=g*S,i[4]=-v,i[8]=m*S,i[1]=_*v+O,i[5]=d*S,i[9]=T*v-R,i[2]=R*v-T,i[6]=h*S,i[10]=O*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TT,e,bT)}lookAt(e,i,s){const u=this.elements;return ci.subVectors(e,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),fr.crossVectors(s,ci),fr.lengthSq()===0&&(Math.abs(s.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),fr.crossVectors(s,ci)),fr.normalize(),Zu.crossVectors(ci,fr),u[0]=fr.x,u[4]=Zu.x,u[8]=ci.x,u[1]=fr.y,u[5]=Zu.y,u[9]=ci.y,u[2]=fr.z,u[6]=Zu.z,u[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,u=i.elements,f=this.elements,d=s[0],h=s[4],g=s[8],m=s[12],S=s[1],v=s[5],_=s[9],T=s[13],R=s[2],O=s[6],M=s[10],x=s[14],w=s[3],F=s[7],C=s[11],U=s[15],D=u[0],I=u[4],E=u[8],L=u[12],N=u[1],z=u[5],G=u[9],Y=u[13],V=u[2],Z=u[6],X=u[10],W=u[14],nt=u[3],it=u[7],dt=u[11],vt=u[15];return f[0]=d*D+h*N+g*V+m*nt,f[4]=d*I+h*z+g*Z+m*it,f[8]=d*E+h*G+g*X+m*dt,f[12]=d*L+h*Y+g*W+m*vt,f[1]=S*D+v*N+_*V+T*nt,f[5]=S*I+v*z+_*Z+T*it,f[9]=S*E+v*G+_*X+T*dt,f[13]=S*L+v*Y+_*W+T*vt,f[2]=R*D+O*N+M*V+x*nt,f[6]=R*I+O*z+M*Z+x*it,f[10]=R*E+O*G+M*X+x*dt,f[14]=R*L+O*Y+M*W+x*vt,f[3]=w*D+F*N+C*V+U*nt,f[7]=w*I+F*z+C*Z+U*it,f[11]=w*E+F*G+C*X+U*dt,f[15]=w*L+F*Y+C*W+U*vt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],u=e[8],f=e[12],d=e[1],h=e[5],g=e[9],m=e[13],S=e[2],v=e[6],_=e[10],T=e[14],R=e[3],O=e[7],M=e[11],x=e[15],w=g*T-m*_,F=h*T-m*v,C=h*_-g*v,U=d*T-m*S,D=d*_-g*S,I=d*v-h*S;return i*(O*w-M*F+x*C)-s*(R*w-M*U+x*D)+u*(R*F-O*U+x*I)-f*(R*C-O*D+M*I)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],u=e[8],f=e[1],d=e[5],h=e[9],g=e[2],m=e[6],S=e[10];return i*(d*S-h*m)-s*(f*S-h*g)+u*(f*m-d*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=i,u[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],g=e[6],m=e[7],S=e[8],v=e[9],_=e[10],T=e[11],R=e[12],O=e[13],M=e[14],x=e[15],w=i*h-s*d,F=i*g-u*d,C=i*m-f*d,U=s*g-u*h,D=s*m-f*h,I=u*m-f*g,E=S*O-v*R,L=S*M-_*R,N=S*x-T*R,z=v*M-_*O,G=v*x-T*O,Y=_*x-T*M,V=w*Y-F*G+C*z+U*N-D*L+I*E;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/V;return e[0]=(h*Y-g*G+m*z)*Z,e[1]=(u*G-s*Y-f*z)*Z,e[2]=(O*I-M*D+x*U)*Z,e[3]=(_*D-v*I-T*U)*Z,e[4]=(g*N-d*Y-m*L)*Z,e[5]=(i*Y-u*N+f*L)*Z,e[6]=(M*C-R*I-x*F)*Z,e[7]=(S*I-_*C+T*F)*Z,e[8]=(d*G-h*N+m*E)*Z,e[9]=(s*N-i*G-f*E)*Z,e[10]=(R*D-O*C+x*w)*Z,e[11]=(v*C-S*D-T*w)*Z,e[12]=(h*L-d*z-g*E)*Z,e[13]=(i*z-s*L+u*E)*Z,e[14]=(O*F-R*U-M*w)*Z,e[15]=(S*U-v*F+_*w)*Z,this}scale(e){const i=this.elements,s=e.x,u=e.y,f=e.z;return i[0]*=s,i[4]*=u,i[8]*=f,i[1]*=s,i[5]*=u,i[9]*=f,i[2]*=s,i[6]*=u,i[10]*=f,i[3]*=s,i[7]*=u,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,u))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),u=Math.sin(i),f=1-s,d=e.x,h=e.y,g=e.z,m=f*d,S=f*h;return this.set(m*d+s,m*h-u*g,m*g+u*h,0,m*h+u*g,S*h+s,S*g-u*d,0,m*g-u*h,S*g+u*d,f*g*g+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,u,f,d){return this.set(1,s,f,0,e,1,d,0,i,u,1,0,0,0,0,1),this}compose(e,i,s){const u=this.elements,f=i._x,d=i._y,h=i._z,g=i._w,m=f+f,S=d+d,v=h+h,_=f*m,T=f*S,R=f*v,O=d*S,M=d*v,x=h*v,w=g*m,F=g*S,C=g*v,U=s.x,D=s.y,I=s.z;return u[0]=(1-(O+x))*U,u[1]=(T+C)*U,u[2]=(R-F)*U,u[3]=0,u[4]=(T-C)*D,u[5]=(1-(_+x))*D,u[6]=(M+w)*D,u[7]=0,u[8]=(R+F)*I,u[9]=(M-w)*I,u[10]=(1-(_+O))*I,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,i,s){const u=this.elements;e.x=u[12],e.y=u[13],e.z=u[14];const f=this.determinantAffine();if(f===0)return s.set(1,1,1),i.identity(),this;let d=Hs.set(u[0],u[1],u[2]).length();const h=Hs.set(u[4],u[5],u[6]).length(),g=Hs.set(u[8],u[9],u[10]).length();f<0&&(d=-d),Li.copy(this);const m=1/d,S=1/h,v=1/g;return Li.elements[0]*=m,Li.elements[1]*=m,Li.elements[2]*=m,Li.elements[4]*=S,Li.elements[5]*=S,Li.elements[6]*=S,Li.elements[8]*=v,Li.elements[9]*=v,Li.elements[10]*=v,i.setFromRotationMatrix(Li),s.x=d,s.y=h,s.z=g,this}makePerspective(e,i,s,u,f,d,h=ra,g=!1){const m=this.elements,S=2*f/(i-e),v=2*f/(s-u),_=(i+e)/(i-e),T=(s+u)/(s-u);let R,O;if(g)R=f/(d-f),O=d*f/(d-f);else if(h===ra)R=-(d+f)/(d-f),O=-2*d*f/(d-f);else if(h===Sl)R=-d/(d-f),O=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=v,m[9]=T,m[13]=0,m[2]=0,m[6]=0,m[10]=R,m[14]=O,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,u,f,d,h=ra,g=!1){const m=this.elements,S=2/(i-e),v=2/(s-u),_=-(i+e)/(i-e),T=-(s+u)/(s-u);let R,O;if(g)R=1/(d-f),O=d/(d-f);else if(h===ra)R=-2/(d-f),O=-(d+f)/(d-f);else if(h===Sl)R=-1/(d-f),O=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=0,m[12]=_,m[1]=0,m[5]=v,m[9]=0,m[13]=T,m[2]=0,m[6]=0,m[10]=R,m[14]=O,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let u=0;u<16;u++)if(i[u]!==s[u])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Cc.prototype.isMatrix4=!0;let en=Cc;const Hs=new at,Li=new en,TT=new at(0,0,0),bT=new at(1,1,1),fr=new at,Zu=new at,ci=new at,Hv=new en,Gv=new fa;class ua{constructor(e=0,i=0,s=0,u=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,u=this._order){return this._x=e,this._y=i,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const u=e.elements,f=u[0],d=u[4],h=u[8],g=u[1],m=u[5],S=u[9],v=u[2],_=u[6],T=u[10];switch(i){case"XYZ":this._y=Math.asin(Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,T),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,T),this._z=Math.atan2(g,m)):(this._y=Math.atan2(-v,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,T),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(g,f));break;case"ZYX":this._y=Math.asin(-Ne(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,T),this._z=Math.atan2(g,f)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Ne(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-S,m),this._y=Math.atan2(-v,f)):(this._x=0,this._y=Math.atan2(h,T));break;case"XZY":this._z=Math.asin(-Ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-S,T),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Hv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Gv.setFromEuler(this),this.setFromQuaternion(Gv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class ux{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AT=0;const Vv=new at,Gs=new fa,Ra=new en,Ku=new at,ol=new at,RT=new at,CT=new fa,Xv=new at(1,0,0),kv=new at(0,1,0),Wv=new at(0,0,1),qv={type:"added"},wT={type:"removed"},Vs={type:"childadded",child:null},Eh={type:"childremoved",child:null};class Ln extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AT++}),this.uuid=Ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new at,i=new ua,s=new fa,u=new at(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new en},normalMatrix:{value:new de}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ux,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Gs.setFromAxisAngle(e,i),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,i){return Gs.setFromAxisAngle(e,i),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Xv,e)}rotateY(e){return this.rotateOnAxis(kv,e)}rotateZ(e){return this.rotateOnAxis(Wv,e)}translateOnAxis(e,i){return Vv.copy(e).applyQuaternion(this.quaternion),this.position.add(Vv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Xv,e)}translateY(e){return this.translateOnAxis(kv,e)}translateZ(e){return this.translateOnAxis(Wv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ra.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Ku.copy(e):Ku.set(e,i,s);const u=this.parent;this.updateWorldMatrix(!0,!1),ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ra.lookAt(ol,Ku,this.up):Ra.lookAt(Ku,ol,this.up),this.quaternion.setFromRotationMatrix(Ra),u&&(Ra.extractRotation(u.matrixWorld),Gs.setFromRotationMatrix(Ra),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qv),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(wT),Eh.child=e,this.dispatchEvent(Eh),Eh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ra.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ra.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ra),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qv),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,u=this.children.length;s<u;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const u=this.children;for(let f=0,d=u.length;f<d;f++)u[f].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,e,RT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,CT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,u=e.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*s-f[8]*u,f[13]+=s-f[1]*i-f[5]*s-f[9]*u,f[14]+=u-f[2]*i-f[6]*s-f[10]*u}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const u=this.parent;if(e===!0&&u!==null&&u.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,u.name=this.name,u.castShadow=this.castShadow,u.receiveShadow=this.receiveShadow,u.visible=this.visible,u.frustumCulled=this.frustumCulled,u.renderOrder=this.renderOrder,u.static=this.static,u.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.pivot!==null&&(u.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(u.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(u.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(h=>({...h})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(e),u.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(h,g){return h[g.uuid]===void 0&&(h[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const g=h.shapes;if(Array.isArray(g))for(let m=0,S=g.length;m<S;m++){const v=g[m];f(e.shapes,v)}else f(e.shapes,g)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let g=0,m=this.material.length;g<m;g++)h.push(f(e.materials,this.material[g]));u.material=h}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let h=0;h<this.children.length;h++)u.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let h=0;h<this.animations.length;h++){const g=this.animations[h];u.animations.push(f(e.animations,g))}}if(i){const h=d(e.geometries),g=d(e.materials),m=d(e.textures),S=d(e.images),v=d(e.shapes),_=d(e.skeletons),T=d(e.animations),R=d(e.nodes);h.length>0&&(s.geometries=h),g.length>0&&(s.materials=g),m.length>0&&(s.textures=m),S.length>0&&(s.images=S),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),T.length>0&&(s.animations=T),R.length>0&&(s.nodes=R)}return s.object=u,s;function d(h){const g=[];for(const m in h){const S=h[m];delete S.metadata,g.push(S)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const u=e.children[s];this.add(u.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ln.DEFAULT_UP=new at(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qu extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DT={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let u=null,f=null,d=null;const h=this._targetRay,g=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const O of e.hand.values()){const M=i.getJointPose(O,s),x=this._getHandJoint(m,O);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const S=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],_=S.position.distanceTo(v.position),T=.02,R=.005;m.inputState.pinching&&_>T+R?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=T-R&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,s),f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,f.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(f.linearVelocity)):g.hasLinearVelocity=!1,f.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(f.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(u=i.getPose(e.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(DT)))}return h!==null&&(h.visible=u!==null),g!==null&&(g.visible=f!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Qu;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},Ju={h:0,s:0,l:0};function bh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Oe{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(e,i,s,u=Ue.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ue.colorSpaceToWorking(this,u),this}setHSL(e,i,s,u=Ue.workingColorSpace){if(e=_T(e,1),i=Ne(i,0,1),s=Ne(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=bh(d,f,e+1/3),this.g=bh(d,f,e),this.b=bh(d,f,e-1/3)}return Ue.colorSpaceToWorking(this,u),this}setStyle(e,i=Jn){function s(f){f!==void 0&&parseFloat(f)<1&&oe("Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=u[1],h=u[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:oe("Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Jn){const s=cx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return Ue.workingToColorSpace(In.copy(this),e),Math.round(Ne(In.r*255,0,255))*65536+Math.round(Ne(In.g*255,0,255))*256+Math.round(Ne(In.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ue.workingColorSpace){Ue.workingToColorSpace(In.copy(this),i);const s=In.r,u=In.g,f=In.b,d=Math.max(s,u,f),h=Math.min(s,u,f);let g,m;const S=(h+d)/2;if(h===d)g=0,m=0;else{const v=d-h;switch(m=S<=.5?v/(d+h):v/(2-d-h),d){case s:g=(u-f)/v+(u<f?6:0);break;case u:g=(f-s)/v+2;break;case f:g=(s-u)/v+4;break}g/=6}return e.h=g,e.s=m,e.l=S,e}getRGB(e,i=Ue.workingColorSpace){return Ue.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Jn){Ue.workingToColorSpace(In.copy(this),e);const i=In.r,s=In.g,u=In.b;return e!==Jn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(e,i,s){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+i,dr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(dr),e.getHSL(Ju);const s=vh(dr.h,Ju.h,i),u=vh(dr.s,Ju.s,i),f=vh(dr.l,Ju.l,i);return this.setHSL(s,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,u=this.b,f=e.elements;return this.r=f[0]*i+f[3]*s+f[6]*u,this.g=f[1]*i+f[4]*s+f[7]*u,this.b=f[2]*i+f[5]*s+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Oe;Oe.NAMES=cx;class fx extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Oi=new at,Ca=new at,Ah=new at,wa=new at,Xs=new at,ks=new at,Yv=new at,Rh=new at,Ch=new at,wh=new at,Dh=new rn,Uh=new rn,Nh=new rn;class zi{constructor(e=new at,i=new at,s=new at){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,u){u.subVectors(s,i),Oi.subVectors(e,i),u.cross(Oi);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,i,s,u,f){Oi.subVectors(u,i),Ca.subVectors(s,i),Ah.subVectors(e,i);const d=Oi.dot(Oi),h=Oi.dot(Ca),g=Oi.dot(Ah),m=Ca.dot(Ca),S=Ca.dot(Ah),v=d*m-h*h;if(v===0)return f.set(0,0,0),null;const _=1/v,T=(m*g-h*S)*_,R=(d*S-h*g)*_;return f.set(1-T-R,R,T)}static containsPoint(e,i,s,u){return this.getBarycoord(e,i,s,u,wa)===null?!1:wa.x>=0&&wa.y>=0&&wa.x+wa.y<=1}static getInterpolation(e,i,s,u,f,d,h,g){return this.getBarycoord(e,i,s,u,wa)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(f,wa.x),g.addScaledVector(d,wa.y),g.addScaledVector(h,wa.z),g)}static getInterpolatedAttribute(e,i,s,u,f,d){return Dh.setScalar(0),Uh.setScalar(0),Nh.setScalar(0),Dh.fromBufferAttribute(e,i),Uh.fromBufferAttribute(e,s),Nh.fromBufferAttribute(e,u),d.setScalar(0),d.addScaledVector(Dh,f.x),d.addScaledVector(Uh,f.y),d.addScaledVector(Nh,f.z),d}static isFrontFacing(e,i,s,u){return Oi.subVectors(s,i),Ca.subVectors(e,i),Oi.cross(Ca).dot(u)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,u){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,i,s,u){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),Oi.cross(Ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return zi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,u,f){return zi.getInterpolation(e,this.a,this.b,this.c,i,s,u,f)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,u=this.b,f=this.c;let d,h;Xs.subVectors(u,s),ks.subVectors(f,s),Rh.subVectors(e,s);const g=Xs.dot(Rh),m=ks.dot(Rh);if(g<=0&&m<=0)return i.copy(s);Ch.subVectors(e,u);const S=Xs.dot(Ch),v=ks.dot(Ch);if(S>=0&&v<=S)return i.copy(u);const _=g*v-S*m;if(_<=0&&g>=0&&S<=0)return d=g/(g-S),i.copy(s).addScaledVector(Xs,d);wh.subVectors(e,f);const T=Xs.dot(wh),R=ks.dot(wh);if(R>=0&&T<=R)return i.copy(f);const O=T*m-g*R;if(O<=0&&m>=0&&R<=0)return h=m/(m-R),i.copy(s).addScaledVector(ks,h);const M=S*R-T*v;if(M<=0&&v-S>=0&&T-R>=0)return Yv.subVectors(f,u),h=(v-S)/(v-S+(T-R)),i.copy(u).addScaledVector(Yv,h);const x=1/(M+O+_);return d=O*x,h=_*x,i.copy(s).addScaledVector(Xs,d).addScaledVector(ks,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class yl{constructor(e=new at(1/0,1/0,1/0),i=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Pi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Pi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Pi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Pi):Pi.fromBufferAttribute(f,d),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ju.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ju.copy(s.boundingBox)),ju.applyMatrix4(e.matrixWorld),this.union(ju)}const u=e.children;for(let f=0,d=u.length;f<d;f++)this.expandByObject(u[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ll),$u.subVectors(this.max,ll),Ws.subVectors(e.a,ll),qs.subVectors(e.b,ll),Ys.subVectors(e.c,ll),hr.subVectors(qs,Ws),pr.subVectors(Ys,qs),Gr.subVectors(Ws,Ys);let i=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-Gr.z,Gr.y,hr.z,0,-hr.x,pr.z,0,-pr.x,Gr.z,0,-Gr.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-Gr.y,Gr.x,0];return!Lh(i,Ws,qs,Ys,$u)||(i=[1,0,0,0,1,0,0,0,1],!Lh(i,Ws,qs,Ys,$u))?!1:(tc.crossVectors(hr,pr),i=[tc.x,tc.y,tc.z],Lh(i,Ws,qs,Ys,$u))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Da=[new at,new at,new at,new at,new at,new at,new at,new at],Pi=new at,ju=new yl,Ws=new at,qs=new at,Ys=new at,hr=new at,pr=new at,Gr=new at,ll=new at,$u=new at,tc=new at,Vr=new at;function Lh(o,e,i,s,u){for(let f=0,d=o.length-3;f<=d;f+=3){Vr.fromArray(o,f);const h=u.x*Math.abs(Vr.x)+u.y*Math.abs(Vr.y)+u.z*Math.abs(Vr.z),g=e.dot(Vr),m=i.dot(Vr),S=s.dot(Vr);if(Math.max(-Math.max(g,m,S),Math.min(g,m,S))>h)return!1}return!0}const _n=new at,ec=new Te;let UT=0;class Pa extends Jr{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=dT,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=i.array[s+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)ec.fromBufferAttribute(this,i),ec.applyMatrix3(e),this.setXY(i,ec.x,ec.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=sl(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Qn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=sl(i,this.array)),i}setX(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=sl(i,this.array)),i}setY(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=sl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=sl(i,this.array)),i}setW(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,u){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),u=Qn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=u,this}setXYZW(e,i,s,u,f){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),u=Qn(u,this.array),f=Qn(f,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class dx extends Pa{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class hx extends Pa{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class $n extends Pa{constructor(e,i,s){super(new Float32Array(e),i,s)}}const NT=new yl,ul=new at,Oh=new at;class Jp{constructor(e=new at,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):NT.setFromPoints(e).getCenter(s);let u=0;for(let f=0,d=e.length;f<d;f++)u=Math.max(u,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ul.subVectors(e,this.center);const i=ul.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),u=(s-this.radius)*.5;this.center.addScaledVector(ul,u/s),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ul.copy(e.center).add(Oh)),this.expandByPoint(ul.copy(e.center).sub(Oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let LT=0;const Ai=new en,Ph=new Ln,Zs=new at,fi=new yl,cl=new yl,bn=new at;class Hi extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LT++}),this.uuid=Ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hT(e)?hx:dx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new de().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,i,s){return Ai.makeTranslation(e,i,s),this.applyMatrix4(Ai),this}scale(e,i,s){return Ai.makeScale(e,i,s),this.applyMatrix4(Ai),this}lookAt(e){return Ph.lookAt(e),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let u=0,f=e.length;u<f;u++){const d=e[u];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new $n(s,3))}else{const s=Math.min(e.length,i.count);for(let u=0;u<s;u++){const f=e[u];i.setXYZ(u,f.x,f.y,f.z||0)}e.length>i.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,u=i.length;s<u;s++){const f=i[s];fi.setFromBufferAttribute(f),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(e){const s=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];cl.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(fi.min,cl.min),fi.expandByPoint(bn),bn.addVectors(fi.max,cl.max),fi.expandByPoint(bn)):(fi.expandByPoint(cl.min),fi.expandByPoint(cl.max))}fi.getCenter(s);let u=0;for(let f=0,d=e.count;f<d;f++)bn.fromBufferAttribute(e,f),u=Math.max(u,s.distanceToSquared(bn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],g=this.morphTargetsRelative;for(let m=0,S=h.count;m<S;m++)bn.fromBufferAttribute(h,m),g&&(Zs.fromBufferAttribute(e,m),bn.add(Zs)),u=Math.max(u,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,u=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Pa(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],g=[];for(let E=0;E<s.count;E++)h[E]=new at,g[E]=new at;const m=new at,S=new at,v=new at,_=new Te,T=new Te,R=new Te,O=new at,M=new at;function x(E,L,N){m.fromBufferAttribute(s,E),S.fromBufferAttribute(s,L),v.fromBufferAttribute(s,N),_.fromBufferAttribute(f,E),T.fromBufferAttribute(f,L),R.fromBufferAttribute(f,N),S.sub(m),v.sub(m),T.sub(_),R.sub(_);const z=1/(T.x*R.y-R.x*T.y);isFinite(z)&&(O.copy(S).multiplyScalar(R.y).addScaledVector(v,-T.y).multiplyScalar(z),M.copy(v).multiplyScalar(T.x).addScaledVector(S,-R.x).multiplyScalar(z),h[E].add(O),h[L].add(O),h[N].add(O),g[E].add(M),g[L].add(M),g[N].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let E=0,L=w.length;E<L;++E){const N=w[E],z=N.start,G=N.count;for(let Y=z,V=z+G;Y<V;Y+=3)x(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const F=new at,C=new at,U=new at,D=new at;function I(E){U.fromBufferAttribute(u,E),D.copy(U);const L=h[E];F.copy(L),F.sub(U.multiplyScalar(U.dot(L))).normalize(),C.crossVectors(D,L);const z=C.dot(g[E])<0?-1:1;d.setXYZW(E,F.x,F.y,F.z,z)}for(let E=0,L=w.length;E<L;++E){const N=w[E],z=N.start,G=N.count;for(let Y=z,V=z+G;Y<V;Y+=3)I(e.getX(Y+0)),I(e.getX(Y+1)),I(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Pa(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,T=s.count;_<T;_++)s.setXYZ(_,0,0,0);const u=new at,f=new at,d=new at,h=new at,g=new at,m=new at,S=new at,v=new at;if(e)for(let _=0,T=e.count;_<T;_+=3){const R=e.getX(_+0),O=e.getX(_+1),M=e.getX(_+2);u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,O),d.fromBufferAttribute(i,M),S.subVectors(d,f),v.subVectors(u,f),S.cross(v),h.fromBufferAttribute(s,R),g.fromBufferAttribute(s,O),m.fromBufferAttribute(s,M),h.add(S),g.add(S),m.add(S),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(O,g.x,g.y,g.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let _=0,T=i.count;_<T;_+=3)u.fromBufferAttribute(i,_+0),f.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),S.subVectors(d,f),v.subVectors(u,f),S.cross(v),s.setXYZ(_+0,S.x,S.y,S.z),s.setXYZ(_+1,S.x,S.y,S.z),s.setXYZ(_+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,g){const m=h.array,S=h.itemSize,v=h.normalized,_=new m.constructor(g.length*S);let T=0,R=0;for(let O=0,M=g.length;O<M;O++){h.isInterleavedBufferAttribute?T=g[O]*h.data.stride+h.offset:T=g[O]*S;for(let x=0;x<S;x++)_[R++]=m[T++]}return new Pa(_,S,v)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Hi,s=this.index.array,u=this.attributes;for(const h in u){const g=u[h],m=e(g,s);i.setAttribute(h,m)}const f=this.morphAttributes;for(const h in f){const g=[],m=f[h];for(let S=0,v=m.length;S<v;S++){const _=m[S],T=e(_,s);g.push(T)}i.morphAttributes[h]=g}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,g=d.length;h<g;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const g=this.parameters;for(const m in g)g[m]!==void 0&&(e[m]=g[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const m=s[g];e.data.attributes[g]=m.toJSON(e.data)}const u={};let f=!1;for(const g in this.morphAttributes){const m=this.morphAttributes[g],S=[];for(let v=0,_=m.length;v<_;v++){const T=m[v];S.push(T.toJSON(e.data))}S.length>0&&(u[g]=S,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const u=e.attributes;for(const m in u){const S=u[m];this.setAttribute(m,S.clone(i))}const f=e.morphAttributes;for(const m in f){const S=[],v=f[m];for(let _=0,T=v.length;_<T;_++)S.push(v[_].clone(i));this.morphAttributes[m]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,S=d.length;m<S;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ih=new at,OT=new at,PT=new de;class gr{constructor(e=new at(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,u){return this.normal.set(e,i,s),this.constant=u,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const u=Ih.subVectors(s,i).cross(OT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const u=e.delta(Ih),f=this.normal.dot(u);if(f===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/f;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(u,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||PT.getNormalMatrix(e),u=this.coplanarPoint(Ih).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let IT=0;class El extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=Ml(),this.name="",this.type="Material",this.blending=ml,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=XS,this.blendDst=kS,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=gl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rT,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gh,this.stencilZFail=gh,this.stencilZPass=gh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){oe(`Material: parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector2&&s&&s.isVector2||u&&u.isEuler&&s&&s.isEuler||u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}if(i){const f=u(e.textures),d=u(e.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new gr().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Te().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const u=i.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ua=new at,zh=new at,nc=new at,ic=new at;class zT{constructor(e=new at,i=new at(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ua)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ua.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ua.copy(this.origin).addScaledVector(this.direction,i),Ua.distanceToSquared(e))}distanceSqToSegment(e,i,s,u){zh.copy(e).add(i).multiplyScalar(.5),nc.copy(i).sub(e).normalize(),ic.copy(this.origin).sub(zh);const f=e.distanceTo(i)*.5,d=-this.direction.dot(nc),h=ic.dot(this.direction),g=-ic.dot(nc),m=ic.lengthSq(),S=Math.abs(1-d*d);let v,_,T,R;if(S>0)if(v=d*g-h,_=d*h-g,R=f*S,v>=0)if(_>=-R)if(_<=R){const O=1/S;v*=O,_*=O,T=v*(v+d*_+2*h)+_*(d*v+_+2*g)+m}else _=f,v=Math.max(0,-(d*_+h)),T=-v*v+_*(_+2*g)+m;else _=-f,v=Math.max(0,-(d*_+h)),T=-v*v+_*(_+2*g)+m;else _<=-R?(v=Math.max(0,-(-d*f+h)),_=v>0?-f:Math.min(Math.max(-f,-g),f),T=-v*v+_*(_+2*g)+m):_<=R?(v=0,_=Math.min(Math.max(-f,-g),f),T=_*(_+2*g)+m):(v=Math.max(0,-(d*f+h)),_=v>0?f:Math.min(Math.max(-f,-g),f),T=-v*v+_*(_+2*g)+m);else _=d>0?-f:f,v=Math.max(0,-(d*_+h)),T=-v*v+_*(_+2*g)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),u&&u.copy(zh).addScaledVector(nc,_),T}intersectSphere(e,i){if(e.radius<0)return null;Ua.subVectors(e.center,this.origin);const s=Ua.dot(this.direction),u=Ua.dot(Ua)-s*s,f=e.radius*e.radius;if(u>f)return null;const d=Math.sqrt(f-u),h=s-d,g=s+d;return g<0?null:h<0?this.at(g,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,u,f,d,h,g;const m=1/this.direction.x,S=1/this.direction.y,v=1/this.direction.z,_=this.origin;return m>=0?(s=(e.min.x-_.x)*m,u=(e.max.x-_.x)*m):(s=(e.max.x-_.x)*m,u=(e.min.x-_.x)*m),S>=0?(f=(e.min.y-_.y)*S,d=(e.max.y-_.y)*S):(f=(e.max.y-_.y)*S,d=(e.min.y-_.y)*S),s>d||f>u||((f>s||isNaN(s))&&(s=f),(d<u||isNaN(u))&&(u=d),v>=0?(h=(e.min.z-_.z)*v,g=(e.max.z-_.z)*v):(h=(e.max.z-_.z)*v,g=(e.min.z-_.z)*v),s>g||h>u)||((h>s||s!==s)&&(s=h),(g<u||u!==u)&&(u=g),u<0)?null:this.at(s>=0?s:u,i)}intersectsBox(e){return this.intersectBox(e,Ua)!==null}intersectTriangle(e,i,s,u,f){const d=this.origin,h=this.direction,g=h.x,m=h.y,S=h.z,v=e.x-d.x,_=e.y-d.y,T=e.z-d.z,R=i.x-d.x,O=i.y-d.y,M=i.z-d.z,x=s.x-d.x,w=s.y-d.y,F=s.z-d.z,C=Math.abs(g),U=Math.abs(m),D=Math.abs(S);let I,E,L,N,z,G,Y,V,Z,X,W,nt;if(C>=U&&C>=D?(L=g,G=v,Z=R,nt=x,g>=0?(I=m,E=S,N=_,z=T,Y=O,V=M,X=w,W=F):(I=S,E=m,N=T,z=_,Y=M,V=O,X=F,W=w)):U>=D?(L=m,G=_,Z=O,nt=w,m>=0?(I=S,E=g,N=T,z=v,Y=M,V=R,X=F,W=x):(I=g,E=S,N=v,z=T,Y=R,V=M,X=x,W=F)):(L=S,G=T,Z=M,nt=F,S>=0?(I=g,E=m,N=v,z=_,Y=R,V=O,X=x,W=w):(I=m,E=g,N=_,z=v,Y=O,V=R,X=w,W=x)),L===0)return null;const it=I/L,dt=E/L,vt=1/L,Gt=N-it*G,zt=z-dt*G,H=Y-it*Z,pt=V-dt*Z,bt=X-it*nt,J=W-dt*nt,ht=bt*pt-J*H,Tt=Gt*J-zt*bt,Dt=H*zt-pt*Gt;if(u){if(ht<0||Tt<0||Dt<0)return null}else if((ht<0||Tt<0||Dt<0)&&(ht>0||Tt>0||Dt>0))return null;const _t=ht+Tt+Dt;if(_t===0)return null;const At=vt*(ht*G+Tt*Z+Dt*nt);return(_t>0?At<0:At>0)?null:this.at(At/_t,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dc extends El{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=WS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zv=new en,Xr=new zT,ac=new Jp,Kv=new at,rc=new at,sc=new at,oc=new at,Bh=new at,lc=new at,Qv=new at,uc=new at;class pi extends Ln{constructor(e=new Hi,i=new Dc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const u=i[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=u.length;f<d;f++){const h=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,i){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(u,e);const h=this.morphTargetInfluences;if(f&&h){lc.set(0,0,0);for(let g=0,m=f.length;g<m;g++){const S=h[g],v=f[g];S!==0&&(Bh.fromBufferAttribute(v,e),d?lc.addScaledVector(Bh,S):lc.addScaledVector(Bh.sub(i),S))}i.add(lc)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ac.copy(s.boundingSphere),ac.applyMatrix4(f),Xr.copy(e.ray).recast(e.near),!(ac.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(ac,Kv)===null||Xr.origin.distanceToSquared(Kv)>(e.far-e.near)**2))&&(Zv.copy(f).invert(),Xr.copy(e.ray).applyMatrix4(Zv),!(s.boundingBox!==null&&Xr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Xr)))}_computeIntersections(e,i,s){let u;const f=this.geometry,d=this.material,h=f.index,g=f.attributes.position,m=f.attributes.uv,S=f.attributes.uv1,v=f.attributes.normal,_=f.groups,T=f.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,O=_.length;R<O;R++){const M=_[R],x=d[M.materialIndex],w=Math.max(M.start,T.start),F=Math.min(h.count,Math.min(M.start+M.count,T.start+T.count));for(let C=w,U=F;C<U;C+=3){const D=h.getX(C),I=h.getX(C+1),E=h.getX(C+2);u=cc(this,x,e,s,m,S,v,D,I,E),u&&(u.faceIndex=Math.floor(C/3),u.face.materialIndex=M.materialIndex,i.push(u))}}else{const R=Math.max(0,T.start),O=Math.min(h.count,T.start+T.count);for(let M=R,x=O;M<x;M+=3){const w=h.getX(M),F=h.getX(M+1),C=h.getX(M+2);u=cc(this,d,e,s,m,S,v,w,F,C),u&&(u.faceIndex=Math.floor(M/3),i.push(u))}}else if(g!==void 0)if(Array.isArray(d))for(let R=0,O=_.length;R<O;R++){const M=_[R],x=d[M.materialIndex],w=Math.max(M.start,T.start),F=Math.min(g.count,Math.min(M.start+M.count,T.start+T.count));for(let C=w,U=F;C<U;C+=3){const D=C,I=C+1,E=C+2;u=cc(this,x,e,s,m,S,v,D,I,E),u&&(u.faceIndex=Math.floor(C/3),u.face.materialIndex=M.materialIndex,i.push(u))}}else{const R=Math.max(0,T.start),O=Math.min(g.count,T.start+T.count);for(let M=R,x=O;M<x;M+=3){const w=M,F=M+1,C=M+2;u=cc(this,d,e,s,m,S,v,w,F,C),u&&(u.faceIndex=Math.floor(M/3),i.push(u))}}}}function BT(o,e,i,s,u,f,d,h){let g;if(e.side===jn?g=s.intersectTriangle(d,f,u,!0,h):g=s.intersectTriangle(u,f,d,e.side===Zr,h),g===null)return null;uc.copy(h),uc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(uc);return m<i.near||m>i.far?null:{distance:m,point:uc.clone(),object:o}}function cc(o,e,i,s,u,f,d,h,g,m){o.getVertexPosition(h,rc),o.getVertexPosition(g,sc),o.getVertexPosition(m,oc);const S=BT(o,e,i,s,rc,sc,oc,Qv);if(S){const v=new at;zi.getBarycoord(Qv,rc,sc,oc,v),u&&(S.uv=zi.getInterpolatedAttribute(u,h,g,m,v,new Te)),f&&(S.uv1=zi.getInterpolatedAttribute(f,h,g,m,v,new Te)),d&&(S.normal=zi.getInterpolatedAttribute(d,h,g,m,v,new at),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const _={a:h,b:g,c:m,normal:new at,materialIndex:0};zi.getNormal(rc,sc,oc,_.normal),S.face=_,S.barycoord=v}return S}class FT extends Bn{constructor(e=null,i=1,s=1,u,f,d,h,g,m=Nn,S=Nn,v,_){super(null,d,h,g,m,S,u,f,v,_),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kr=new Jp,HT=new Te(.5,.5),fc=new at;class jp{constructor(e=new gr,i=new gr,s=new gr,u=new gr,f=new gr,d=new gr){this.planes=[e,i,s,u,f,d]}set(e,i,s,u,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(u),h[4].copy(f),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ra,s=!1){const u=this.planes,f=e.elements,d=f[0],h=f[1],g=f[2],m=f[3],S=f[4],v=f[5],_=f[6],T=f[7],R=f[8],O=f[9],M=f[10],x=f[11],w=f[12],F=f[13],C=f[14],U=f[15];if(u[0].setComponents(m-d,T-S,x-R,U-w).normalize(),u[1].setComponents(m+d,T+S,x+R,U+w).normalize(),u[2].setComponents(m+h,T+v,x+O,U+F).normalize(),u[3].setComponents(m-h,T-v,x-O,U-F).normalize(),s)u[4].setComponents(g,_,M,C).normalize(),u[5].setComponents(m-g,T-_,x-M,U-C).normalize();else if(u[4].setComponents(m-g,T-_,x-M,U-C).normalize(),i===ra)u[5].setComponents(m+g,T+_,x+M,U+C).normalize();else if(i===Sl)u[5].setComponents(g,_,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){kr.center.set(0,0,0);const i=HT.distanceTo(e.center);return kr.radius=.7071067811865476+i,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const i=this.planes,s=e.center,u=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const u=i[s];if(fc.x=u.normal.x>0?e.max.x:e.min.x,fc.y=u.normal.y>0?e.max.y:e.min.y,fc.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(fc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class px extends Bn{constructor(e=[],i=Kr,s,u,f,d,h,g,m,S){super(e,i,s,u,f,d,h,g,m,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mx extends Bn{constructor(e,i,s,u,f,d,h,g,m){super(e,i,s,u,f,d,h,g,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xl extends Bn{constructor(e,i,s=oa,u,f,d,h=Nn,g=Nn,m,S=Ia,v=1){if(S!==Ia&&S!==Yr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:v};super(_,u,f,d,h,g,S,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class GT extends xl{constructor(e,i=oa,s=Kr,u,f,d=Nn,h=Nn,g,m=Ia){const S={width:e,height:e,depth:1},v=[S,S,S,S,S,S];super(e,e,i,s,u,f,d,h,g,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gx extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Tl extends Hi{constructor(e=1,i=1,s=1,u=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:u,heightSegments:f,depthSegments:d};const h=this;u=Math.floor(u),f=Math.floor(f),d=Math.floor(d);const g=[],m=[],S=[],v=[];let _=0,T=0;R("z","y","x",-1,-1,s,i,e,d,f,0),R("z","y","x",1,-1,s,i,-e,d,f,1),R("x","z","y",1,1,e,s,i,u,d,2),R("x","z","y",1,-1,e,s,-i,u,d,3),R("x","y","z",1,-1,e,i,s,u,f,4),R("x","y","z",-1,-1,e,i,-s,u,f,5),this.setIndex(g),this.setAttribute("position",new $n(m,3)),this.setAttribute("normal",new $n(S,3)),this.setAttribute("uv",new $n(v,2));function R(O,M,x,w,F,C,U,D,I,E,L){const N=C/I,z=U/E,G=C/2,Y=U/2,V=D/2,Z=I+1,X=E+1;let W=0,nt=0;const it=new at;for(let dt=0;dt<X;dt++){const vt=dt*z-Y;for(let Gt=0;Gt<Z;Gt++){const zt=Gt*N-G;it[O]=zt*w,it[M]=vt*F,it[x]=V,m.push(it.x,it.y,it.z),it[O]=0,it[M]=0,it[x]=D>0?1:-1,S.push(it.x,it.y,it.z),v.push(Gt/I),v.push(1-dt/E),W+=1}}for(let dt=0;dt<E;dt++)for(let vt=0;vt<I;vt++){const Gt=_+vt+Z*dt,zt=_+vt+Z*(dt+1),H=_+(vt+1)+Z*(dt+1),pt=_+(vt+1)+Z*dt;g.push(Gt,zt,pt),g.push(zt,H,pt),nt+=6}h.addGroup(T,nt,L),T+=nt,_+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class $p extends Hi{constructor(e=[],i=[],s=1,u=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:u};const f=[],d=[];h(u),m(s),S(),this.setAttribute("position",new $n(f,3)),this.setAttribute("normal",new $n(f.slice(),3)),this.setAttribute("uv",new $n(d,2)),u===0?this.computeVertexNormals():this.normalizeNormals();function h(w){const F=new at,C=new at,U=new at;for(let D=0;D<i.length;D+=3)T(i[D+0],F),T(i[D+1],C),T(i[D+2],U),g(F,C,U,w)}function g(w,F,C,U){const D=U+1,I=[];for(let E=0;E<=D;E++){I[E]=[];const L=w.clone().lerp(C,E/D),N=F.clone().lerp(C,E/D),z=D-E;for(let G=0;G<=z;G++)G===0&&E===D?I[E][G]=L:I[E][G]=L.clone().lerp(N,G/z)}for(let E=0;E<D;E++)for(let L=0;L<2*(D-E)-1;L++){const N=Math.floor(L/2);L%2===0?(_(I[E][N+1]),_(I[E+1][N]),_(I[E][N])):(_(I[E][N+1]),_(I[E+1][N+1]),_(I[E+1][N]))}}function m(w){const F=new at;for(let C=0;C<f.length;C+=3)F.x=f[C+0],F.y=f[C+1],F.z=f[C+2],F.normalize().multiplyScalar(w),f[C+0]=F.x,f[C+1]=F.y,f[C+2]=F.z}function S(){const w=new at;for(let F=0;F<f.length;F+=3){w.x=f[F+0],w.y=f[F+1],w.z=f[F+2];const C=M(w)/2/Math.PI+.5,U=x(w)/Math.PI+.5;d.push(C,1-U)}R(),v()}function v(){for(let w=0;w<d.length;w+=6){const F=d[w+0],C=d[w+2],U=d[w+4],D=Math.max(F,C,U),I=Math.min(F,C,U);D>.9&&I<.1&&(F<.2&&(d[w+0]+=1),C<.2&&(d[w+2]+=1),U<.2&&(d[w+4]+=1))}}function _(w){f.push(w.x,w.y,w.z)}function T(w,F){const C=w*3;F.x=e[C+0],F.y=e[C+1],F.z=e[C+2]}function R(){const w=new at,F=new at,C=new at,U=new at,D=new Te,I=new Te,E=new Te;for(let L=0,N=0;L<f.length;L+=9,N+=6){w.set(f[L+0],f[L+1],f[L+2]),F.set(f[L+3],f[L+4],f[L+5]),C.set(f[L+6],f[L+7],f[L+8]),D.set(d[N+0],d[N+1]),I.set(d[N+2],d[N+3]),E.set(d[N+4],d[N+5]),U.copy(w).add(F).add(C).divideScalar(3);const z=M(U);O(D,N+0,w,z),O(I,N+2,F,z),O(E,N+4,C,z)}}function O(w,F,C,U){U<0&&w.x===1&&(d[F]=w.x-1),C.x===0&&C.z===0&&(d[F]=U/2/Math.PI+.5)}function M(w){return Math.atan2(w.z,-w.x)}function x(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $p(e.vertices,e.indices,e.radius,e.detail)}}class tm extends $p{constructor(e=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],u=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,u,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new tm(e.radius,e.detail)}}class oo extends Hi{constructor(e=1,i=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:u};const f=e/2,d=i/2,h=Math.floor(s),g=Math.floor(u),m=h+1,S=g+1,v=e/h,_=i/g,T=[],R=[],O=[],M=[];for(let x=0;x<S;x++){const w=x*_-d;for(let F=0;F<m;F++){const C=F*v-f;R.push(C,-w,0),O.push(0,0,1),M.push(F/h),M.push(1-x/g)}}for(let x=0;x<g;x++)for(let w=0;w<h;w++){const F=w+m*x,C=w+m*(x+1),U=w+1+m*(x+1),D=w+1+m*x;T.push(F,C,D),T.push(C,U,D)}this.setIndex(T),this.setAttribute("position",new $n(R,3)),this.setAttribute("normal",new $n(O,3)),this.setAttribute("uv",new $n(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.widthSegments,e.heightSegments)}}function so(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const u=o[i][s];if(Jv(u))u.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=u.clone();else if(Array.isArray(u))if(Jv(u[0])){const f=[];for(let d=0,h=u.length;d<h;d++)f[d]=u[d].clone();e[i][s]=f}else e[i][s]=u.slice();else e[i][s]=u}}return e}function kn(o){const e={};for(let i=0;i<o.length;i++){const s=so(o[i]);for(const u in s)e[u]=s[u]}return e}function Jv(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function VT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function _x(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ue.workingColorSpace}const XT={clone:so,merge:kn};var kT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ca extends El{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kT,this.fragmentShader=WT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=VT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const u in this.uniforms){const d=this.uniforms[u].value;d&&d.isTexture?i.uniforms[u]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[u]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[u]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[u]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[u]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[u]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[u]={type:"m4",value:d.toArray()}:i.uniforms[u]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const u=e.uniforms[s];switch(this.uniforms[s]={},u.type){case"t":this.uniforms[s].value=i[u.value]||null;break;case"c":this.uniforms[s].value=new Oe().setHex(u.value);break;case"v2":this.uniforms[s].value=new Te().fromArray(u.value);break;case"v3":this.uniforms[s].value=new at().fromArray(u.value);break;case"v4":this.uniforms[s].value=new rn().fromArray(u.value);break;case"m3":this.uniforms[s].value=new de().fromArray(u.value);break;case"m4":this.uniforms[s].value=new en().fromArray(u.value);break;default:this.uniforms[s].value=u.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class qT extends ca{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vx extends El{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Up,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class YT extends El{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZT extends El{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class em extends Ln{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=i}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class Sx extends em{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const Fh=new en,jv=new at,$v=new at;class KT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jp,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera;jv.setFromMatrixPosition(e.matrixWorld),i.position.copy(jv),$v.setFromMatrixPosition(e.target.matrixWorld),i.lookAt($v),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(e,i,s,u){Fh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s.setFromProjectionMatrix(Fh,e.coordinateSystem,e.reversedDepth);const f=this._frameExtents,d=u?u.z/f.x:1,h=u?u.w/f.y:1,g=u?u.x/f.x:0,m=u?u.y/f.y:0;e.coordinateSystem===Sl||e.reversedDepth?i.set(.5*d,0,0,.5*d+g,0,.5*h,0,.5*h+m,0,0,1,0,0,0,0,1):i.set(.5*d,0,0,.5*d+g,0,.5*h,0,.5*h+m,0,0,.5,.5,0,0,0,1),i.multiply(Fh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const dc=new at,hc=new fa,ea=new at;class xx extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dc,hc,ea),ea.x===1&&ea.y===1&&ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dc,hc,ea.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(dc,hc,ea),ea.x===1&&ea.y===1&&ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dc,hc,ea.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mr=new at,tS=new Te,eS=new Te;class di extends xx{constructor(e=50,i=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Np*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_h*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Np*2*Math.atan(Math.tan(_h*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,i){return this.getViewBounds(e,tS,eS),i.subVectors(eS,tS)}setViewOffset(e,i,s,u,f,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(_h*.5*this.fov)/this.zoom,s=2*i,u=this.aspect*s,f=-.5*u;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,m=d.fullHeight;f+=d.offsetX*u/g,i-=d.offsetY*s/m,u*=d.width/g,s*=d.height/m}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class nm extends xx{constructor(e=-1,i=1,s=1,u=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=u,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,u,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-e,d=s+e,h=u+i,g=u-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,d=f+m*this.view.width,h-=S*this.view.offsetY,g=h-S*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class QT extends KT{constructor(){super(new nm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mx extends em{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new QT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class yx extends em{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ks=-90,Qs=1;class JT extends Ln{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new di(Ks,Qs,e,i);u.layers=this.layers,this.add(u);const f=new di(Ks,Qs,e,i);f.layers=this.layers,this.add(f);const d=new di(Ks,Qs,e,i);d.layers=this.layers,this.add(d);const h=new di(Ks,Qs,e,i);h.layers=this.layers,this.add(h);const g=new di(Ks,Qs,e,i);g.layers=this.layers,this.add(g);const m=new di(Ks,Qs,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,u,f,d,h,g]=i;for(const m of i)this.remove(m);if(e===ra)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===Sl)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,g,m,S]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),T=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const O=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,1,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(s,4,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),s.texture.generateMipmaps=O,e.setRenderTarget(s,5,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(v,_,T),e.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class jT extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const lm=class lm{constructor(e,i,s,u){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,u)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,u){const f=this.elements;return f[0]=e,f[2]=i,f[1]=s,f[3]=u,this}};lm.prototype.isMatrix2=!0;let nS=lm;function iS(o,e,i,s){const u=$T(s);switch(i){case ax:return o*e;case sx:return o*e/u.components*u.byteLength;case Wp:return o*e/u.components*u.byteLength;case Qr:return o*e*2/u.components*u.byteLength;case qp:return o*e*2/u.components*u.byteLength;case rx:return o*e*3/u.components*u.byteLength;case Bi:return o*e*4/u.components*u.byteLength;case Yp:return o*e*4/u.components*u.byteLength;case vc:case Sc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case xc:case Mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case np:case ap:return Math.max(o,16)*Math.max(e,8)/4;case ep:case ip:return Math.max(o,8)*Math.max(e,8)/2;case rp:case sp:case lp:case up:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case op:case Ec:case cp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case fp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case dp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case hp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case pp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case mp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case gp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case _p:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case vp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Sp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case xp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Mp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case yp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ep:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Tp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case bp:case Ap:case Rp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Cp:case wp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Tc:case Dp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function $T(o){switch(o){case hi:case tx:return{byteLength:1,components:1};case _l:case ex:case la:return{byteLength:2,components:1};case Xp:case kp:return{byteLength:2,components:4};case oa:case Vp:case aa:return{byteLength:4,components:1};case nx:case ix:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gp}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gp);function Ex(){let o=null,e=!1,i=null,s=null;function u(f,d){s=o.requestAnimationFrame(u),i(f,d)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(u),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function tb(o){const e=new WeakMap;function i(h,g){const m=h.array,S=h.usage,v=m.byteLength,_=o.createBuffer();o.bindBuffer(g,_),o.bufferData(g,m,S),h.onUploadCallback();let T;if(m instanceof Float32Array)T=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)T=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?T=o.HALF_FLOAT:T=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)T=o.SHORT;else if(m instanceof Uint32Array)T=o.UNSIGNED_INT;else if(m instanceof Int32Array)T=o.INT;else if(m instanceof Int8Array)T=o.BYTE;else if(m instanceof Uint8Array)T=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)T=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:T,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,g,m){const S=g.array,v=g.updateRanges;if(o.bindBuffer(m,h),v.length===0)o.bufferSubData(m,0,S);else{v.sort((T,R)=>T.start-R.start);let _=0;for(let T=1;T<v.length;T++){const R=v[_],O=v[T];O.start<=R.start+R.count+1?R.count=Math.max(R.count,O.start+O.count-R.start):(++_,v[_]=O)}v.length=_+1;for(let T=0,R=v.length;T<R;T++){const O=v[T];o.bufferSubData(m,O.start*S.BYTES_PER_ELEMENT,S,O.start,O.count)}g.clearUpdateRanges()}g.onUploadCallback()}function u(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const g=e.get(h);g&&(o.deleteBuffer(g.buffer),e.delete(h))}function d(h,g){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=e.get(h);(!S||S.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,g));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,g),m.version=h.version}}return{get:u,remove:f,update:d}}var eb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nb=`#ifdef USE_ALPHAHASH
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
#endif`,ib=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ab=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ob=`#ifdef USE_AOMAP
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
#endif`,lb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ub=`#ifdef USE_BATCHING
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
#endif`,cb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,db=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pb=`#ifdef USE_IRIDESCENCE
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
#endif`,mb=`#ifdef USE_BUMPMAP
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
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tb=`#define PI 3.141592653589793
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
} // validated`,bb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ab=`vec3 transformedNormal = objectNormal;
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
#endif`,Rb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Db=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lb=`#ifdef USE_ENVMAP
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
#endif`,Ob=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pb=`#ifdef USE_ENVMAP
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
#endif`,Ib=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zb=`#ifdef USE_ENVMAP
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
#endif`,Bb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vb=`#ifdef USE_GRADIENTMAP
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
}`,Xb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Yb=`#ifdef USE_ENVMAP
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
#endif`,Zb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jb=`PhysicalMaterial material;
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
#endif`,$b=`uniform sampler2D dfgLUT;
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
}`,t1=`
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
#endif`,e1=`#if defined( RE_IndirectDiffuse )
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
#endif`,n1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,a1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f1=`#if defined( USE_POINTS_UV )
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
#endif`,d1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_1=`#ifdef USE_MORPHTARGETS
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
#endif`,v1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,T1=`#ifdef USE_NORMALMAP
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
#endif`,b1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H1=`float getShadowMask() {
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
}`,G1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V1=`#ifdef USE_SKINNING
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
#endif`,X1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k1=`#ifdef USE_SKINNING
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
#endif`,W1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K1=`#ifdef USE_TRANSMISSION
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
#endif`,Q1=`#ifdef USE_TRANSMISSION
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nA=`uniform sampler2D t2D;
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
}`,iA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oA=`#include <common>
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
}`,lA=`#if DEPTH_PACKING == 3200
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
}`,uA=`#define DISTANCE
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
}`,cA=`#define DISTANCE
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
}`,fA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`uniform float scale;
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
}`,pA=`uniform vec3 diffuse;
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
}`,mA=`#include <common>
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
}`,gA=`uniform vec3 diffuse;
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
}`,_A=`#define LAMBERT
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
}`,vA=`#define LAMBERT
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
}`,SA=`#define MATCAP
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
}`,xA=`#define MATCAP
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
}`,MA=`#define NORMAL
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
}`,yA=`#define NORMAL
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
}`,EA=`#define PHONG
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
}`,TA=`#define PHONG
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
}`,bA=`#define STANDARD
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
}`,AA=`#define STANDARD
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
}`,RA=`#define TOON
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
}`,CA=`#define TOON
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
}`,wA=`uniform float size;
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
}`,DA=`uniform vec3 diffuse;
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
}`,UA=`#include <common>
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
}`,NA=`uniform vec3 color;
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
}`,LA=`uniform float rotation;
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
}`,OA=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:eb,alphahash_pars_fragment:nb,alphamap_fragment:ib,alphamap_pars_fragment:ab,alphatest_fragment:rb,alphatest_pars_fragment:sb,aomap_fragment:ob,aomap_pars_fragment:lb,batching_pars_vertex:ub,batching_vertex:cb,begin_vertex:fb,beginnormal_vertex:db,bsdfs:hb,iridescence_fragment:pb,bumpmap_pars_fragment:mb,clipping_planes_fragment:gb,clipping_planes_pars_fragment:_b,clipping_planes_pars_vertex:vb,clipping_planes_vertex:Sb,color_fragment:xb,color_pars_fragment:Mb,color_pars_vertex:yb,color_vertex:Eb,common:Tb,cube_uv_reflection_fragment:bb,defaultnormal_vertex:Ab,displacementmap_pars_vertex:Rb,displacementmap_vertex:Cb,emissivemap_fragment:wb,emissivemap_pars_fragment:Db,colorspace_fragment:Ub,colorspace_pars_fragment:Nb,envmap_fragment:Lb,envmap_common_pars_fragment:Ob,envmap_pars_fragment:Pb,envmap_pars_vertex:Ib,envmap_physical_pars_fragment:Yb,envmap_vertex:zb,fog_vertex:Bb,fog_pars_vertex:Fb,fog_fragment:Hb,fog_pars_fragment:Gb,gradientmap_pars_fragment:Vb,lightmap_pars_fragment:Xb,lights_lambert_fragment:kb,lights_lambert_pars_fragment:Wb,lights_pars_begin:qb,lights_toon_fragment:Zb,lights_toon_pars_fragment:Kb,lights_phong_fragment:Qb,lights_phong_pars_fragment:Jb,lights_physical_fragment:jb,lights_physical_pars_fragment:$b,lights_fragment_begin:t1,lights_fragment_maps:e1,lights_fragment_end:n1,lightprobes_pars_fragment:i1,logdepthbuf_fragment:a1,logdepthbuf_pars_fragment:r1,logdepthbuf_pars_vertex:s1,logdepthbuf_vertex:o1,map_fragment:l1,map_pars_fragment:u1,map_particle_fragment:c1,map_particle_pars_fragment:f1,metalnessmap_fragment:d1,metalnessmap_pars_fragment:h1,morphinstance_vertex:p1,morphcolor_vertex:m1,morphnormal_vertex:g1,morphtarget_pars_vertex:_1,morphtarget_vertex:v1,normal_fragment_begin:S1,normal_fragment_maps:x1,normal_pars_fragment:M1,normal_pars_vertex:y1,normal_vertex:E1,normalmap_pars_fragment:T1,clearcoat_normal_fragment_begin:b1,clearcoat_normal_fragment_maps:A1,clearcoat_pars_fragment:R1,iridescence_pars_fragment:C1,opaque_fragment:w1,packing:D1,premultiplied_alpha_fragment:U1,project_vertex:N1,dithering_fragment:L1,dithering_pars_fragment:O1,roughnessmap_fragment:P1,roughnessmap_pars_fragment:I1,shadowmap_pars_fragment:z1,shadowmap_pars_vertex:B1,shadowmap_vertex:F1,shadowmask_pars_fragment:H1,skinbase_vertex:G1,skinning_pars_vertex:V1,skinning_vertex:X1,skinnormal_vertex:k1,specularmap_fragment:W1,specularmap_pars_fragment:q1,tonemapping_fragment:Y1,tonemapping_pars_fragment:Z1,transmission_fragment:K1,transmission_pars_fragment:Q1,uv_pars_fragment:J1,uv_pars_vertex:j1,uv_vertex:$1,worldpos_vertex:tA,background_vert:eA,background_frag:nA,backgroundCube_vert:iA,backgroundCube_frag:aA,cube_vert:rA,cube_frag:sA,depth_vert:oA,depth_frag:lA,distance_vert:uA,distance_frag:cA,equirect_vert:fA,equirect_frag:dA,linedashed_vert:hA,linedashed_frag:pA,meshbasic_vert:mA,meshbasic_frag:gA,meshlambert_vert:_A,meshlambert_frag:vA,meshmatcap_vert:SA,meshmatcap_frag:xA,meshnormal_vert:MA,meshnormal_frag:yA,meshphong_vert:EA,meshphong_frag:TA,meshphysical_vert:bA,meshphysical_frag:AA,meshtoon_vert:RA,meshtoon_frag:CA,points_vert:wA,points_frag:DA,shadow_vert:UA,shadow_frag:NA,sprite_vert:LA,sprite_frag:OA},Ht={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new at},probesMax:{value:new at},probesResolution:{value:new at}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},ia={basic:{uniforms:kn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:kn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:kn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:kn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:kn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Oe(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:kn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:kn([Ht.points,Ht.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:kn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:kn([Ht.common,Ht.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:kn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:kn([Ht.sprite,Ht.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:kn([Ht.common,Ht.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:kn([Ht.lights,Ht.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};ia.physical={uniforms:kn([ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const pc={r:0,b:0,g:0},PA=new en,Tx=new de;Tx.set(-1,0,0,0,1,0,0,0,1);function IA(o,e,i,s,u,f){const d=new Oe(0);let h=u===!0?0:1,g,m,S=null,v=0,_=null;function T(w){let F=w.isScene===!0?w.background:null;if(F&&F.isTexture){const C=w.backgroundBlurriness>0;F=e.get(F,C)}return F}function R(w){let F=!1;const C=T(w);C===null?M(d,h):C&&C.isColor&&(M(C,1),F=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,f):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||F)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function O(w,F){const C=T(F);C&&(C.isCubeTexture||C.mapping===wc)?(m===void 0&&(m=new pi(new Tl(1,1,1),new ca({name:"BackgroundCubeMaterial",uniforms:so(ia.backgroundCube.uniforms),vertexShader:ia.backgroundCube.vertexShader,fragmentShader:ia.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(PA.makeRotationFromEuler(F.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Tx),m.material.toneMapped=Ue.getTransfer(C.colorSpace)!==qe,(S!==C||v!==C.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,S=C,v=C.version,_=o.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(g===void 0&&(g=new pi(new oo(2,2),new ca({name:"BackgroundMaterial",uniforms:so(ia.background.uniforms),vertexShader:ia.background.vertexShader,fragmentShader:ia.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=C,g.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,g.material.toneMapped=Ue.getTransfer(C.colorSpace)!==qe,C.matrixAutoUpdate===!0&&C.updateMatrix(),g.material.uniforms.uvTransform.value.copy(C.matrix),(S!==C||v!==C.version||_!==o.toneMapping)&&(g.material.needsUpdate=!0,S=C,v=C.version,_=o.toneMapping),g.layers.enableAll(),w.unshift(g,g.geometry,g.material,0,0,null))}function M(w,F){w.getRGB(pc,_x(o)),i.buffers.color.setClear(pc.r,pc.g,pc.b,F,f)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(w,F=1){d.set(w),h=F,M(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,M(d,h)},render:R,addToRenderList:O,dispose:x}}function zA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=_(null);let f=u,d=!1;function h(z,G,Y,V,Z){let X=!1;const W=v(z,V,Y,G);f!==W&&(f=W,m(f.object)),X=T(z,V,Y,Z),X&&R(z,V,Y,Z),Z!==null&&e.update(Z,o.ELEMENT_ARRAY_BUFFER),(X||d)&&(d=!1,C(z,G,Y,V),Z!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function g(){return o.createVertexArray()}function m(z){return o.bindVertexArray(z)}function S(z){return o.deleteVertexArray(z)}function v(z,G,Y,V){const Z=V.wireframe===!0;let X=s[G.id];X===void 0&&(X={},s[G.id]=X);const W=z.isInstancedMesh===!0?z.id:0;let nt=X[W];nt===void 0&&(nt={},X[W]=nt);let it=nt[Y.id];it===void 0&&(it={},nt[Y.id]=it);let dt=it[Z];return dt===void 0&&(dt=_(g()),it[Z]=dt),dt}function _(z){const G=[],Y=[],V=[];for(let Z=0;Z<i;Z++)G[Z]=0,Y[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:V,object:z,attributes:{},index:null}}function T(z,G,Y,V){const Z=f.attributes,X=G.attributes;let W=0;const nt=Y.getAttributes();for(const it in nt)if(nt[it].location>=0){const vt=Z[it];let Gt=X[it];if(Gt===void 0&&(it==="instanceMatrix"&&z.instanceMatrix&&(Gt=z.instanceMatrix),it==="instanceColor"&&z.instanceColor&&(Gt=z.instanceColor)),vt===void 0||vt.attribute!==Gt||Gt&&vt.data!==Gt.data)return!0;W++}return f.attributesNum!==W||f.index!==V}function R(z,G,Y,V){const Z={},X=G.attributes;let W=0;const nt=Y.getAttributes();for(const it in nt)if(nt[it].location>=0){let vt=X[it];vt===void 0&&(it==="instanceMatrix"&&z.instanceMatrix&&(vt=z.instanceMatrix),it==="instanceColor"&&z.instanceColor&&(vt=z.instanceColor));const Gt={};Gt.attribute=vt,vt&&vt.data&&(Gt.data=vt.data),Z[it]=Gt,W++}f.attributes=Z,f.attributesNum=W,f.index=V}function O(){const z=f.newAttributes;for(let G=0,Y=z.length;G<Y;G++)z[G]=0}function M(z){x(z,0)}function x(z,G){const Y=f.newAttributes,V=f.enabledAttributes,Z=f.attributeDivisors;Y[z]=1,V[z]===0&&(o.enableVertexAttribArray(z),V[z]=1),Z[z]!==G&&(o.vertexAttribDivisor(z,G),Z[z]=G)}function w(){const z=f.newAttributes,G=f.enabledAttributes;for(let Y=0,V=G.length;Y<V;Y++)G[Y]!==z[Y]&&(o.disableVertexAttribArray(Y),G[Y]=0)}function F(z,G,Y,V,Z,X,W){W===!0?o.vertexAttribIPointer(z,G,Y,Z,X):o.vertexAttribPointer(z,G,Y,V,Z,X)}function C(z,G,Y,V){O();const Z=V.attributes,X=Y.getAttributes(),W=G.defaultAttributeValues;for(const nt in X){const it=X[nt];if(it.location>=0){let dt=Z[nt];if(dt===void 0&&(nt==="instanceMatrix"&&z.instanceMatrix&&(dt=z.instanceMatrix),nt==="instanceColor"&&z.instanceColor&&(dt=z.instanceColor)),dt!==void 0){const vt=dt.normalized,Gt=dt.itemSize,zt=e.get(dt);if(zt===void 0)continue;const H=zt.buffer,pt=zt.type,bt=zt.bytesPerElement,J=pt===o.INT||pt===o.UNSIGNED_INT||dt.gpuType===Vp;if(dt.isInterleavedBufferAttribute){const ht=dt.data,Tt=ht.stride,Dt=dt.offset;if(ht.isInstancedInterleavedBuffer){for(let _t=0;_t<it.locationSize;_t++)x(it.location+_t,ht.meshPerAttribute);z.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let _t=0;_t<it.locationSize;_t++)M(it.location+_t);o.bindBuffer(o.ARRAY_BUFFER,H);for(let _t=0;_t<it.locationSize;_t++)F(it.location+_t,Gt/it.locationSize,pt,vt,Tt*bt,(Dt+Gt/it.locationSize*_t)*bt,J)}else{if(dt.isInstancedBufferAttribute){for(let ht=0;ht<it.locationSize;ht++)x(it.location+ht,dt.meshPerAttribute);z.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ht=0;ht<it.locationSize;ht++)M(it.location+ht);o.bindBuffer(o.ARRAY_BUFFER,H);for(let ht=0;ht<it.locationSize;ht++)F(it.location+ht,Gt/it.locationSize,pt,vt,Gt*bt,Gt/it.locationSize*ht*bt,J)}}else if(W!==void 0){const vt=W[nt];if(vt!==void 0)switch(vt.length){case 2:o.vertexAttrib2fv(it.location,vt);break;case 3:o.vertexAttrib3fv(it.location,vt);break;case 4:o.vertexAttrib4fv(it.location,vt);break;default:o.vertexAttrib1fv(it.location,vt)}}}}w()}function U(){L();for(const z in s){const G=s[z];for(const Y in G){const V=G[Y];for(const Z in V){const X=V[Z];for(const W in X)S(X[W].object),delete X[W];delete V[Z]}}delete s[z]}}function D(z){if(s[z.id]===void 0)return;const G=s[z.id];for(const Y in G){const V=G[Y];for(const Z in V){const X=V[Z];for(const W in X)S(X[W].object),delete X[W];delete V[Z]}}delete s[z.id]}function I(z){for(const G in s){const Y=s[G];for(const V in Y){const Z=Y[V];if(Z[z.id]===void 0)continue;const X=Z[z.id];for(const W in X)S(X[W].object),delete X[W];delete Z[z.id]}}}function E(z){for(const G in s){const Y=s[G],V=z.isInstancedMesh===!0?z.id:0,Z=Y[V];if(Z!==void 0){for(const X in Z){const W=Z[X];for(const nt in W)S(W[nt].object),delete W[nt];delete Z[X]}delete Y[V],Object.keys(Y).length===0&&delete s[G]}}}function L(){N(),d=!0,f!==u&&(f=u,m(f.object))}function N(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:L,resetDefaultState:N,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:I,initAttributes:O,enableAttribute:M,disableUnusedAttributes:w}}function BA(o,e,i){let s;function u(g){s=g}function f(g,m){o.drawArrays(s,g,m),i.update(m,s,1)}function d(g,m,S){S!==0&&(o.drawArraysInstanced(s,g,m,S),i.update(m,s,S))}function h(g,m,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,m,0,S);let _=0;for(let T=0;T<S;T++)_+=m[T];i.update(_,s,1)}this.setMode=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function FA(o,e,i,s){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function d(I){return!(I!==Bi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const E=I===la&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==hi&&I!==aa&&!E&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function g(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const S=g(m);S!==m&&(oe("WebGLRenderer:",m,"not supported, using",S,"instead."),m=S);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const T=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),O=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),F=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=o.getParameter(o.MAX_SAMPLES),D=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:T,maxVertexTextures:R,maxTextureSize:O,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:w,maxVaryings:F,maxFragmentUniforms:C,maxSamples:U,samples:D}}function HA(o){const e=this;let i=null,s=0,u=!1,f=!1;const d=new gr,h=new de,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const T=v.length!==0||_||s!==0||u;return u=_,s=v.length,T},this.beginShadows=function(){f=!0,S(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(v,_){i=S(v,_,0)},this.setState=function(v,_,T){const R=v.clippingPlanes,O=v.clipIntersection,M=v.clipShadows,x=o.get(v);if(!u||R===null||R.length===0||f&&!M)f?S(null):m();else{const w=f?0:s,F=w*4;let C=x.clippingState||null;g.value=C,C=S(R,_,F,T);for(let U=0;U!==F;++U)C[U]=i[U];x.clippingState=C,this.numIntersection=O?this.numPlanes:0,this.numPlanes+=w}};function m(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(v,_,T,R){const O=v!==null?v.length:0;let M=null;if(O!==0){if(M=g.value,R!==!0||M===null){const x=T+O*4,w=_.matrixWorldInverse;h.getNormalMatrix(w),(M===null||M.length<x)&&(M=new Float32Array(x));for(let F=0,C=T;F!==O;++F,C+=4)d.copy(v[F]).applyMatrix4(w,h),d.normal.toArray(M,C),M[C+3]=d.constant}g.value=M,g.needsUpdate=!0}return e.numPlanes=O,e.numIntersection=0,M}}const to=4,GA=6,VA=20,XA=256,fl=new nm,aS=new Oe;let Hh=null,Gh=0,Vh=0,Xh=!1;const kA=new at,Wr=new at;class rS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,u=100,f={}){const{size:d=256,position:h=kA}=f;Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,s,u,g,h),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hh,Gh,Vh),this._renderer.xr.enabled=Xh,e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Kr||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:la,format:Bi,colorSpace:bc,depthBuffer:!1},u=sS(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sS(e,i,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=WA(f)),this._blurMaterial=YA(f,e,i),this._ggxMaterial=qA(f,e,i)}return u}_compileMaterial(e){const i=new pi(new Hi,e);this._renderer.compile(i,fl)}_sceneToCubeUV(e,i,s,u,f){const g=new di(90,1,i,s),m=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,T=v.toneMapping;v.getClearColor(aS),v.toneMapping=sa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(u),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pi(new Tl,new Dc({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const O=this._backgroundBox,M=O.material;let x=!1;const w=e.background;w?w.isColor&&(M.color.copy(w),e.background=null,x=!0):(M.color.copy(aS),x=!0);for(let F=0;F<6;F++){const C=F%3;C===0?(g.up.set(0,m[F],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x+S[F],f.y,f.z)):C===1?(g.up.set(0,0,m[F]),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y+S[F],f.z)):(g.up.set(0,m[F],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y,f.z+S[F]));const U=this._cubeSize;Js(u,C*U,F>2?U:0,U,U),v.setRenderTarget(u),x&&v.render(O,g),v.render(e,g)}v.toneMapping=T,v.autoClear=_,e.background=w}_textureToCubeUV(e,i){const s=this._renderer,u=e.mapping===Kr||e.mapping===ro;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=lS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oS());const f=u?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=e;const g=this._cubeSize;Js(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(d,fl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const u=this._lodMeshes.length;for(let f=1;f<u;f++)this._applyGGXFilter(e,f-1,f);i.autoClear=s}_applyGGXFilter(e,i,s){const u=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const g=d.uniforms,m=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),v=Math.sqrt(m*m-S*S),_=m*1.25,T=v*_,{_lodMax:R}=this,O=this._sizeLods[s],M=3*O*(s>R-to?s-R+to:0),x=4*(this._cubeSize-O);g.envMap.value=e.texture,g.roughness.value=T,g.mipInt.value=R-i,Js(f,M,x,3*O,2*O),u.setRenderTarget(f),u.render(h,fl),g.envMap.value=f.texture,g.roughness.value=0,g.mipInt.value=R-s,Js(e,M,x,3*O,2*O),u.setRenderTarget(e),u.render(h,fl)}_blur(e,i,s,u){const f=this._pingPongRenderTarget,d=Math.min(u,Math.PI)/Math.SQRT2;this._blurPass(e,f,i,s,d),this._blurPass(f,e,s,s,d)}_blurPass(e,i,s,u,f){const d=this._renderer,h=this._blurMaterial,g=this._lodMeshes[u];g.material=h;const m=h.uniforms;m.envMap.value=e.texture,m.sigma.value=f,m.mipInt.value=this._lodMax-s;const S=this._sizeLods[u],v=3*S*(u>this._lodMax-to?u-this._lodMax+to:0),_=4*(this._cubeSize-S);Js(i,v,_,3*S,2*S),d.setRenderTarget(i),d.render(g,fl)}}function WA(o){const e=[],i=[];let s=o;const u=o-to+1+GA;for(let f=0;f<u;f++){const d=Math.pow(2,s);e.push(d);const h=1/(d-2),g=-h,m=1+h,S=[g,g,m,g,m,m,g,g,m,m,g,m],v=6,_=6,T=3,R=new Float32Array(T*_*v),O=new Float32Array(T*_*v);for(let x=0;x<v;x++){const w=x%3*2/3-1,F=x>2?0:-1,C=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];R.set(C,T*_*x);for(let U=0;U<_;U++){const D=S[U*2]*2-1,I=S[U*2+1]*2-1;x===0?Wr.set(1,I,D):x===1?Wr.set(-D,1,-I):x===2?Wr.set(-D,I,1):x===3?Wr.set(-1,I,-D):x===4?Wr.set(-D,-1,I):Wr.set(D,I,-1),Wr.toArray(O,(x*_+U)*T)}}const M=new Hi;M.setAttribute("position",new Pa(R,T)),M.setAttribute("outputDirection",new Pa(O,T)),i.push(new pi(M,null)),s>to&&s--}return{lodMeshes:i,sizeLods:e}}function sS(o,e,i){const s=new Fi(o,e,i);return s.texture.mapping=wc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Js(o,e,i,s,u){o.viewport.set(e,i,s,u),o.scissor.set(e,i,s,u)}function qA(o,e,i){return new ca({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:XA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function YA(o,e,i){return new ca({name:"SphericalGaussianBlur",defines:{SAMPLES:VA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function oS(){return new ca({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function lS(){return new ca({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function Uc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class bx extends Fi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},u=[s,s,s,s,s,s];this.texture=new px(u),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new Tl(5,5,5),f=new ca({name:"CubemapFromEquirect",uniforms:so(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:La});f.uniforms.tEquirect.value=i;const d=new pi(u,f),h=i.minFilter;return i.minFilter===qr&&(i.minFilter=zn),new JT(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,u=!0){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,u);e.setRenderTarget(f)}}function ZA(o){let e=new WeakMap,i=new WeakMap,s=null;function u(_,T=!1){return _==null?null:T?d(_):f(_)}function f(_){if(_&&_.isTexture){const T=_.mapping;if(T===hh||T===ph)if(e.has(_)){const R=e.get(_).texture;return h(R,_.mapping)}else{const R=_.image;if(R&&R.height>0){const O=new bx(R.height);return O.fromEquirectangularTexture(o,_),e.set(_,O),_.addEventListener("dispose",m),h(O.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture){const T=_.mapping,R=T===hh||T===ph,O=T===Kr||T===ro;if(R||O){let M=i.get(_);const x=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==x)return s===null&&(s=new rS(o)),M=R?s.fromEquirectangular(_,M):s.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),M.texture;if(M!==void 0)return M.texture;{const w=_.image;return R&&w&&w.height>0||O&&w&&g(w)?(s===null&&(s=new rS(o)),M=R?s.fromEquirectangular(_):s.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),_.addEventListener("dispose",S),M.texture):null}}}return _}function h(_,T){return T===hh?_.mapping=Kr:T===ph&&(_.mapping=ro),_}function g(_){let T=0;const R=6;for(let O=0;O<R;O++)_[O]!==void 0&&T++;return T===R}function m(_){const T=_.target;T.removeEventListener("dispose",m);const R=e.get(T);R!==void 0&&(e.delete(T),R.dispose())}function S(_){const T=_.target;T.removeEventListener("dispose",S);const R=i.get(T);R!==void 0&&(i.delete(T),R.dispose())}function v(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:u,dispose:v}}function KA(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const u=o.getExtension(s);return e[s]=u,u}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const u=i(s);return u===null&&eo("WebGLRenderer: "+s+" extension not supported."),u}}}function QA(o,e,i,s){const u={},f=new WeakMap;function d(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const R in _.attributes)e.remove(_.attributes[R]);_.removeEventListener("dispose",d),delete u[_.id];const T=f.get(_);T&&(e.remove(T),f.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(v,_){return u[_.id]===!0||(_.addEventListener("dispose",d),u[_.id]=!0,i.memory.geometries++),_}function g(v){const _=v.attributes;for(const T in _)e.update(_[T],o.ARRAY_BUFFER)}function m(v){const _=[],T=v.index,R=v.attributes.position;let O=0;if(R===void 0)return;if(T!==null){const w=T.array;O=T.version;for(let F=0,C=w.length;F<C;F+=3){const U=w[F+0],D=w[F+1],I=w[F+2];_.push(U,D,D,I,I,U)}}else{const w=R.array;O=R.version;for(let F=0,C=w.length/3-1;F<C;F+=3){const U=F+0,D=F+1,I=F+2;_.push(U,D,D,I,I,U)}}const M=new(R.count>=65535?hx:dx)(_,1);M.version=O;const x=f.get(v);x&&e.remove(x),f.set(v,M)}function S(v){const _=f.get(v);if(_){const T=v.index;T!==null&&_.version<T.version&&m(v)}else m(v);return f.get(v)}return{get:h,update:g,getWireframeAttribute:S}}function JA(o,e,i){let s;function u(v){s=v}let f,d;function h(v){f=v.type,d=v.bytesPerElement}function g(v,_){o.drawElements(s,_,f,v*d),i.update(_,s,1)}function m(v,_,T){T!==0&&(o.drawElementsInstanced(s,_,f,v*d,T),i.update(_,s,T))}function S(v,_,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,f,v,0,T);let O=0;for(let M=0;M<T;M++)O+=_[M];i.update(O,s,1)}this.setMode=u,this.setIndex=h,this.render=g,this.renderInstances=m,this.renderMultiDraw=S}function jA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:Be("WebGLInfo: Unknown draw mode:",d);break}}function u(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:u,update:s}}function $A(o,e,i){const s=new WeakMap,u=new rn;function f(d,h,g){const m=d.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=S!==void 0?S.length:0;let _=s.get(h);if(_===void 0||_.count!==v){let N=function(){E.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var T=N;_!==void 0&&_.texture.dispose();const R=h.morphAttributes.position!==void 0,O=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],F=h.morphAttributes.color||[];let C=0;R===!0&&(C=1),O===!0&&(C=2),M===!0&&(C=3);let U=h.attributes.position.count*C,D=1;U>e.maxTextureSize&&(D=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const I=new Float32Array(U*D*4*v),E=new lx(I,U,D,v);E.type=aa,E.needsUpdate=!0;const L=C*4;for(let z=0;z<v;z++){const G=x[z],Y=w[z],V=F[z],Z=U*D*4*z;for(let X=0;X<G.count;X++){const W=X*L;R===!0&&(u.fromBufferAttribute(G,X),I[Z+W+0]=u.x,I[Z+W+1]=u.y,I[Z+W+2]=u.z,I[Z+W+3]=0),O===!0&&(u.fromBufferAttribute(Y,X),I[Z+W+4]=u.x,I[Z+W+5]=u.y,I[Z+W+6]=u.z,I[Z+W+7]=0),M===!0&&(u.fromBufferAttribute(V,X),I[Z+W+8]=u.x,I[Z+W+9]=u.y,I[Z+W+10]=u.z,I[Z+W+11]=V.itemSize===4?u.w:1)}}_={count:v,texture:E,size:new Te(U,D)},s.set(h,_),h.addEventListener("dispose",N)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let M=0;M<m.length;M++)R+=m[M];const O=h.morphTargetsRelative?1:1-R;g.getUniforms().setValue(o,"morphTargetBaseInfluence",O),g.getUniforms().setValue(o,"morphTargetInfluences",m)}g.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:f}}function tR(o,e,i,s,u){let f=new WeakMap;function d(m){const S=u.render.frame,v=m.geometry,_=e.get(m,v);if(f.get(_)!==S&&(e.update(_),f.set(_,S)),m.isInstancedMesh&&(m.hasEventListener("dispose",g)===!1&&m.addEventListener("dispose",g),f.get(m)!==S&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),f.set(m,S))),m.isSkinnedMesh){const T=m.skeleton;f.get(T)!==S&&(T.update(),f.set(T,S))}return _}function h(){f=new WeakMap}function g(m){const S=m.target;S.removeEventListener("dispose",g),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:h}}const eR={[qS]:"LINEAR_TONE_MAPPING",[YS]:"REINHARD_TONE_MAPPING",[ZS]:"CINEON_TONE_MAPPING",[KS]:"ACES_FILMIC_TONE_MAPPING",[JS]:"AGX_TONE_MAPPING",[jS]:"NEUTRAL_TONE_MAPPING",[QS]:"CUSTOM_TONE_MAPPING"};function nR(o,e,i,s,u,f){const d=new Fi(e,i,{type:o,depthBuffer:u,stencilBuffer:f,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,g=null;const m=new Hi;m.setAttribute("position",new $n([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new $n([0,2,0,0,2,0],2));const S=new qT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new pi(m,S),_=new nm(-1,1,1,-1,0,1);let T=null,R=null,O=!1,M,x=null,w=[],F=!1;this.setSize=function(C,U){d.setSize(C,U),h!==null&&h.setSize(C,U),g!==null&&g.setSize(C,U);for(let D=0;D<w.length;D++){const I=w[D];I.setSize&&I.setSize(C,U)}},this.setEffects=function(C){w=C,F=w.length>0&&w[0].isRenderPass===!0;const U=d.width,D=d.height;w.length>0&&h===null&&(h=new Fi(U,D,{type:la,depthBuffer:!1,stencilBuffer:!1}),g=new Fi(U,D,{type:la,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<w.length;I++){const E=w[I];E.setSize&&E.setSize(U,D)}},this.begin=function(C,U){if(O||C.toneMapping===sa&&w.length===0)return!1;if(x=U,U!==null){const D=U.width,I=U.height;(d.width!==D||d.height!==I)&&this.setSize(D,I)}return F===!1&&C.setRenderTarget(d),M=C.toneMapping,C.toneMapping=sa,!0},this.hasRenderPass=function(){return F},this.end=function(C,U){C.toneMapping=M,O=!0;let D=d,I=h;for(let E=0;E<w.length;E++){const L=w[E];L.enabled!==!1&&(L.render(C,I,D,U),L.needsSwap!==!1&&(D=I,I=I===h?g:h))}if(T!==C.outputColorSpace||R!==C.toneMapping){T=C.outputColorSpace,R=C.toneMapping,S.defines={},Ue.getTransfer(T)===qe&&(S.defines.SRGB_TRANSFER="");const E=eR[R];E&&(S.defines[E]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(x),C.render(v,_),x=null,O=!1},this.isCompositing=function(){return O},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),g!==null&&g.dispose(),m.dispose(),S.dispose()}}const Ax=new Bn,Lp=new xl(1,1),Rx=new lx,Cx=new ET,wx=new px,uS=[],cS=[],fS=new Float32Array(16),dS=new Float32Array(9),hS=new Float32Array(4);function lo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const u=e*i;let f=uS[u];if(f===void 0&&(f=new Float32Array(u),uS[u]=f),e!==0){s.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(f,h)}return f}function xn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Mn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Nc(o,e){let i=cS[e];i===void 0&&(i=new Int32Array(e),cS[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function iR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function aR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2fv(this.addr,e),Mn(i,e)}}function rR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;o.uniform3fv(this.addr,e),Mn(i,e)}}function sR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4fv(this.addr,e),Mn(i,e)}}function oR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(xn(i,s))return;hS.set(s),o.uniformMatrix2fv(this.addr,!1,hS),Mn(i,s)}}function lR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(xn(i,s))return;dS.set(s),o.uniformMatrix3fv(this.addr,!1,dS),Mn(i,s)}}function uR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(xn(i,s))return;fS.set(s),o.uniformMatrix4fv(this.addr,!1,fS),Mn(i,s)}}function cR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function fR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2iv(this.addr,e),Mn(i,e)}}function dR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3iv(this.addr,e),Mn(i,e)}}function hR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4iv(this.addr,e),Mn(i,e)}}function pR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function mR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2uiv(this.addr,e),Mn(i,e)}}function gR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3uiv(this.addr,e),Mn(i,e)}}function _R(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4uiv(this.addr,e),Mn(i,e)}}function vR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(Lp.compareFunction=i.isReversedDepthBuffer()?Kp:Zp,f=Lp):f=Ax,i.setTexture2D(e||f,u)}function SR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture3D(e||Cx,u)}function xR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTextureCube(e||wx,u)}function MR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture2DArray(e||Rx,u)}function yR(o){switch(o){case 5126:return iR;case 35664:return aR;case 35665:return rR;case 35666:return sR;case 35674:return oR;case 35675:return lR;case 35676:return uR;case 5124:case 35670:return cR;case 35667:case 35671:return fR;case 35668:case 35672:return dR;case 35669:case 35673:return hR;case 5125:return pR;case 36294:return mR;case 36295:return gR;case 36296:return _R;case 35678:case 36198:case 36298:case 36306:case 35682:return vR;case 35679:case 36299:case 36307:return SR;case 35680:case 36300:case 36308:case 36293:return xR;case 36289:case 36303:case 36311:case 36292:return MR}}function ER(o,e){o.uniform1fv(this.addr,e)}function TR(o,e){const i=lo(e,this.size,2);o.uniform2fv(this.addr,i)}function bR(o,e){const i=lo(e,this.size,3);o.uniform3fv(this.addr,i)}function AR(o,e){const i=lo(e,this.size,4);o.uniform4fv(this.addr,i)}function RR(o,e){const i=lo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function CR(o,e){const i=lo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function wR(o,e){const i=lo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function DR(o,e){o.uniform1iv(this.addr,e)}function UR(o,e){o.uniform2iv(this.addr,e)}function NR(o,e){o.uniform3iv(this.addr,e)}function LR(o,e){o.uniform4iv(this.addr,e)}function OR(o,e){o.uniform1uiv(this.addr,e)}function PR(o,e){o.uniform2uiv(this.addr,e)}function IR(o,e){o.uniform3uiv(this.addr,e)}function zR(o,e){o.uniform4uiv(this.addr,e)}function BR(o,e,i){const s=this.cache,u=e.length,f=Nc(i,u);xn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=Lp:d=Ax;for(let h=0;h!==u;++h)i.setTexture2D(e[h]||d,f[h])}function FR(o,e,i){const s=this.cache,u=e.length,f=Nc(i,u);xn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));for(let d=0;d!==u;++d)i.setTexture3D(e[d]||Cx,f[d])}function HR(o,e,i){const s=this.cache,u=e.length,f=Nc(i,u);xn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));for(let d=0;d!==u;++d)i.setTextureCube(e[d]||wx,f[d])}function GR(o,e,i){const s=this.cache,u=e.length,f=Nc(i,u);xn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));for(let d=0;d!==u;++d)i.setTexture2DArray(e[d]||Rx,f[d])}function VR(o){switch(o){case 5126:return ER;case 35664:return TR;case 35665:return bR;case 35666:return AR;case 35674:return RR;case 35675:return CR;case 35676:return wR;case 5124:case 35670:return DR;case 35667:case 35671:return UR;case 35668:case 35672:return NR;case 35669:case 35673:return LR;case 5125:return OR;case 36294:return PR;case 36295:return IR;case 36296:return zR;case 35678:case 36198:case 36298:case 36306:case 35682:return BR;case 35679:case 36299:case 36307:return FR;case 35680:case 36300:case 36308:case 36293:return HR;case 36289:case 36303:case 36311:case 36292:return GR}}class XR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=yR(i.type)}}class kR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=VR(i.type)}}class WR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const u=this.seq;for(let f=0,d=u.length;f!==d;++f){const h=u[f];h.setValue(e,i[h.id],s)}}}const kh=/(\w+)(\])?(\[|\.)?/g;function pS(o,e){o.seq.push(e),o.map[e.id]=e}function qR(o,e,i){const s=o.name,u=s.length;for(kh.lastIndex=0;;){const f=kh.exec(s),d=kh.lastIndex;let h=f[1];const g=f[2]==="]",m=f[3];if(g&&(h=h|0),m===void 0||m==="["&&d+2===u){pS(i,m===void 0?new XR(h,o,e):new kR(h,o,e));break}else{let v=i.map[h];v===void 0&&(v=new WR(h),pS(i,v)),i=v}}}class yc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),g=e.getUniformLocation(i,h.name);qR(h,g,this)}const u=[],f=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?u.push(d):f.push(d);u.length>0&&(this.seq=u.concat(f))}setValue(e,i,s,u){const f=this.map[i];f!==void 0&&f.setValue(e,s,u)}setOptional(e,i,s){const u=i[s];u!==void 0&&this.setValue(e,s,u)}static upload(e,i,s,u){for(let f=0,d=i.length;f!==d;++f){const h=i[f],g=s[h.id];g.needsUpdate!==!1&&h.setValue(e,g.value,u)}}static seqWithValue(e,i){const s=[];for(let u=0,f=e.length;u!==f;++u){const d=e[u];d.id in i&&s.push(d)}return s}}function mS(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const YR=37297;let ZR=0;function KR(o,e){const i=o.split(`
`),s=[],u=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let d=u;d<f;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const gS=new de;function QR(o){Ue._getMatrix(gS,Ue.workingColorSpace,o);const e=`mat3( ${gS.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(o)){case Ac:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function _S(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+KR(o.getShaderSource(e),h)}else return f}function JR(o,e){const i=QR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const jR={[qS]:"Linear",[YS]:"Reinhard",[ZS]:"Cineon",[KS]:"ACESFilmic",[JS]:"AgX",[jS]:"Neutral",[QS]:"Custom"};function $R(o,e){const i=jR[e];return i===void 0?(oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const mc=new at;function tC(){Ue.getLuminanceCoefficients(mc);const o=mc.x.toFixed(4),e=mc.y.toFixed(4),i=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pl).join(`
`)}function nC(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function iC(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(e,u),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function pl(o){return o!==""}function vS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function SS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Op(o){return o.replace(aC,sC)}const rC=new Map;function sC(o,e){let i=_e[e];if(i===void 0){const s=rC.get(e);if(s!==void 0)i=_e[s],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Op(i)}const oC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xS(o){return o.replace(oC,lC)}function lC(o,e,i,s){let u="";for(let f=parseInt(e);f<parseInt(i);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function MS(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const uC={[_c]:"SHADOWMAP_TYPE_PCF",[hl]:"SHADOWMAP_TYPE_VSM"};function cC(o){return uC[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fC={[Kr]:"ENVMAP_TYPE_CUBE",[ro]:"ENVMAP_TYPE_CUBE",[wc]:"ENVMAP_TYPE_CUBE_UV"};function dC(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":fC[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const hC={[ro]:"ENVMAP_MODE_REFRACTION"};function pC(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":hC[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mC={[WS]:"ENVMAP_BLENDING_MULTIPLY",[tT]:"ENVMAP_BLENDING_MIX",[eT]:"ENVMAP_BLENDING_ADD"};function gC(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":mC[o.combine]||"ENVMAP_BLENDING_NONE"}function _C(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function vC(o,e,i,s){const u=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const g=cC(i),m=dC(i),S=pC(i),v=gC(i),_=_C(i),T=eC(i),R=nC(f),O=u.createProgram();let M,x,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(pl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(pl).join(`
`),x.length>0&&(x+=`
`)):(M=[MS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pl).join(`
`),x=[MS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+S:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==sa?"#define TONE_MAPPING":"",i.toneMapping!==sa?_e.tonemapping_pars_fragment:"",i.toneMapping!==sa?$R("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,JR("linearToOutputTexel",i.outputColorSpace),tC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(pl).join(`
`)),d=Op(d),d=vS(d,i),d=SS(d,i),h=Op(h),h=vS(h,i),h=SS(h,i),d=xS(d),h=xS(h),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===Ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const F=w+M+d,C=w+x+h,U=mS(u,u.VERTEX_SHADER,F),D=mS(u,u.FRAGMENT_SHADER,C);u.attachShader(O,U),u.attachShader(O,D),i.index0AttributeName!==void 0?u.bindAttribLocation(O,0,i.index0AttributeName):i.hasPositionAttribute===!0&&u.bindAttribLocation(O,0,"position"),u.linkProgram(O);function I(z){if(o.debug.checkShaderErrors){const G=u.getProgramInfoLog(O)||"",Y=u.getShaderInfoLog(U)||"",V=u.getShaderInfoLog(D)||"",Z=G.trim(),X=Y.trim(),W=V.trim();let nt=!0,it=!0;if(u.getProgramParameter(O,u.LINK_STATUS)===!1)if(nt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,O,U,D);else{const dt=_S(u,U,"vertex"),vt=_S(u,D,"fragment");Be("WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(O,u.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Z+`
`+dt+`
`+vt)}else Z!==""?oe("WebGLProgram: Program Info Log:",Z):(X===""||W==="")&&(it=!1);it&&(z.diagnostics={runnable:nt,programLog:Z,vertexShader:{log:X,prefix:M},fragmentShader:{log:W,prefix:x}})}u.deleteShader(U),u.deleteShader(D),E=new yc(u,O),L=iC(u,O)}let E;this.getUniforms=function(){return E===void 0&&I(this),E};let L;this.getAttributes=function(){return L===void 0&&I(this),L};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=u.getProgramParameter(O,YR)),N},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(O),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ZR++,this.cacheKey=e,this.usedTimes=1,this.program=O,this.vertexShader=U,this.fragmentShader=D,this}let SC=0;class xC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const u=this._getShaderCacheForMaterial(e);return u.has(i)===!1&&(u.add(i),i.usedTimes++),u.has(s)===!1&&(u.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new MC(e),i.set(e,s)),s}}class MC{constructor(e){this.id=SC++,this.code=e,this.usedTimes=0}}function yC(o){return o===Qr||o===Ec||o===Tc}function EC(o,e,i,s,u,f){const d=new ux,h=new xC,g=new Set,m=[],S=new Map,v=s.logarithmicDepthBuffer;let _=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(E){return g.add(E),E===0?"uv":`uv${E}`}function O(E,L,N,z,G,Y){const V=z.fog,Z=G.geometry,X=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,W=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,nt=e.get(E.envMap||X,W),it=nt&&nt.mapping===wc?nt.image.height:null,dt=T[E.type];E.precision!==null&&(_=s.getMaxPrecision(E.precision),_!==E.precision&&oe("WebGLProgram.getParameters:",E.precision,"not supported, using",_,"instead."));const vt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Gt=vt!==void 0?vt.length:0;let zt=0;Z.morphAttributes.position!==void 0&&(zt=1),Z.morphAttributes.normal!==void 0&&(zt=2),Z.morphAttributes.color!==void 0&&(zt=3);let H,pt,bt,J;if(dt){const we=ia[dt];H=we.vertexShader,pt=we.fragmentShader}else{H=E.vertexShader,pt=E.fragmentShader;const we=h.getVertexShaderStage(E),ce=h.getFragmentShaderStage(E);h.update(E,we,ce),bt=we.id,J=ce.id}const ht=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),Dt=G.isInstancedMesh===!0,_t=G.isBatchedMesh===!0,At=!!E.map,Ie=!!E.matcap,ue=!!nt,me=!!E.aoMap,ge=!!E.lightMap,jt=!!E.bumpMap&&E.wireframe===!1,ee=!!E.normalMap,be=!!E.displacementMap,dn=!!E.emissiveMap,ze=!!E.metalnessMap,$e=!!E.roughnessMap,Q=E.anisotropy>0,nn=E.clearcoat>0,Pe=E.dispersion>0,P=E.retroreflectivity>0,y=E.iridescence>0,et=E.sheen>0,ut=E.transmission>0,mt=Q&&!!E.anisotropyMap,Rt=nn&&!!E.clearcoatMap,Ut=nn&&!!E.clearcoatNormalMap,gt=nn&&!!E.clearcoatRoughnessMap,yt=y&&!!E.iridescenceMap,wt=y&&!!E.iridescenceThicknessMap,$t=et&&!!E.sheenColorMap,It=et&&!!E.sheenRoughnessMap,Pt=!!E.specularMap,kt=!!E.specularColorMap,ie=!!E.specularIntensityMap,le=ut&&!!E.transmissionMap,K=ut&&!!E.thicknessMap,Ct=!!E.gradientMap,Mt=!!E.alphaMap,Nt=E.alphaTest>0,Xt=!!E.alphaHash,Et=!!E.extensions;let Jt=sa;E.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Jt=o.toneMapping);const Vt={shaderID:dt,shaderType:E.type,shaderName:E.name,vertexShader:H,fragmentShader:pt,defines:E.defines,customVertexShaderID:bt,customFragmentShaderID:J,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:_,batching:_t,batchingColor:_t&&G._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&G.instanceColor!==null,instancingMorph:Dt&&G.morphTexture!==null,outputColorSpace:ht===null?o.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Ue.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:At,matcap:Ie,envMap:ue,envMapMode:ue&&nt.mapping,envMapCubeUVHeight:it,aoMap:me,lightMap:ge,bumpMap:jt,normalMap:ee,displacementMap:be,emissiveMap:dn,normalMapObjectSpace:ee&&E.normalMapType===aT,normalMapTangentSpace:ee&&E.normalMapType===Up,packedNormalMap:ee&&E.normalMapType===Up&&yC(E.normalMap.format),metalnessMap:ze,roughnessMap:$e,anisotropy:Q,anisotropyMap:mt,clearcoat:nn,clearcoatMap:Rt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:gt,dispersion:Pe,retroreflection:P,iridescence:y,iridescenceMap:yt,iridescenceThicknessMap:wt,sheen:et,sheenColorMap:$t,sheenRoughnessMap:It,specularMap:Pt,specularColorMap:kt,specularIntensityMap:ie,transmission:ut,transmissionMap:le,thicknessMap:K,gradientMap:Ct,opaque:E.transparent===!1&&E.blending===ml&&E.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Nt,alphaHash:Xt,combine:E.combine,mapUv:At&&R(E.map.channel),aoMapUv:me&&R(E.aoMap.channel),lightMapUv:ge&&R(E.lightMap.channel),bumpMapUv:jt&&R(E.bumpMap.channel),normalMapUv:ee&&R(E.normalMap.channel),displacementMapUv:be&&R(E.displacementMap.channel),emissiveMapUv:dn&&R(E.emissiveMap.channel),metalnessMapUv:ze&&R(E.metalnessMap.channel),roughnessMapUv:$e&&R(E.roughnessMap.channel),anisotropyMapUv:mt&&R(E.anisotropyMap.channel),clearcoatMapUv:Rt&&R(E.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&R(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&R(E.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&R(E.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&R(E.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&R(E.sheenColorMap.channel),sheenRoughnessMapUv:It&&R(E.sheenRoughnessMap.channel),specularMapUv:Pt&&R(E.specularMap.channel),specularColorMapUv:kt&&R(E.specularColorMap.channel),specularIntensityMapUv:ie&&R(E.specularIntensityMap.channel),transmissionMapUv:le&&R(E.transmissionMap.channel),thicknessMapUv:K&&R(E.thicknessMap.channel),alphaMapUv:Mt&&R(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ee||Q),vertexNormals:!!Z.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Z.attributes.uv&&(At||Mt),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Z.attributes.normal===void 0&&ee===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Tt,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Gt,morphTextureStride:zt,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&N.length>0,shadowMapType:o.shadowMap.type,toneMapping:Jt,decodeVideoTexture:At&&E.map.isVideoTexture===!0&&Ue.getTransfer(E.map.colorSpace)===qe,decodeVideoTextureEmissive:dn&&E.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(E.emissiveMap.colorSpace)===qe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ii,flipSided:E.side===jn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Et&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&E.extensions.multiDraw===!0||_t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Vt.vertexUv1s=g.has(1),Vt.vertexUv2s=g.has(2),Vt.vertexUv3s=g.has(3),g.clear(),Vt}function M(E){const L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)L.push(N),L.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(x(L,E),w(L,E),L.push(o.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function x(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapCubeUVHeight),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.morphAttributeCount),E.push(L.numSunLights),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numSunLightShadows),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function w(E,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.retroreflection&&d.enable(24),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),L.packedNormalMap&&d.enable(22),L.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),L.numLightProbeGrids>0&&d.enable(22),L.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function F(E){const L=T[E.type];let N;if(L){const z=ia[L];N=XT.clone(z.uniforms)}else N=E.uniforms;return N}function C(E,L){let N=S.get(L);return N!==void 0?++N.usedTimes:(N=new vC(o,L,E,u),m.push(N),S.set(L,N)),N}function U(E){if(--E.usedTimes===0){const L=m.indexOf(E);m[L]=m[m.length-1],m.pop(),S.delete(E.cacheKey),E.destroy()}}function D(E){h.remove(E)}function I(){h.dispose()}return{getParameters:O,getProgramCacheKey:M,getUniforms:F,acquireProgram:C,releaseProgram:U,releaseShaderCache:D,programs:m,dispose:I}}function TC(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function u(d,h,g){o.get(d)[h]=g}function f(){o=new WeakMap}return{has:e,get:i,remove:s,update:u,dispose:f}}function bC(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function yS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function ES(){const o=[];let e=0;const i=[],s=[],u=[];function f(){e=0,i.length=0,s.length=0,u.length=0}function d(_){let T=0;return _.isInstancedMesh&&(T+=2),_.isSkinnedMesh&&(T+=1),T}function h(_,T,R,O,M,x){let w=o[e];return w===void 0?(w={id:_.id,object:_,geometry:T,material:R,materialVariant:d(_),groupOrder:O,renderOrder:_.renderOrder,z:M,group:x},o[e]=w):(w.id=_.id,w.object=_,w.geometry=T,w.material=R,w.materialVariant=d(_),w.groupOrder=O,w.renderOrder=_.renderOrder,w.z=M,w.group=x),e++,w}function g(_,T,R,O,M,x,w){w.reversedDepth===!0&&(M=-M);const F=h(_,T,R,O,M,x);R.transmission>0?s.push(F):R.transparent===!0?u.push(F):i.push(F)}function m(_,T,R,O,M,x){const w=h(_,T,R,O,M,x);R.transmission>0?s.unshift(w):R.transparent===!0?u.unshift(w):i.unshift(w)}function S(_,T){i.length>1&&i.sort(_||bC),s.length>1&&s.sort(T||yS),u.length>1&&u.sort(T||yS)}function v(){for(let _=e,T=o.length;_<T;_++){const R=o[_];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:i,transmissive:s,transparent:u,init:f,push:g,unshift:m,finish:v,sort:S}}function AC(){let o=new WeakMap;function e(s,u){const f=o.get(s);let d;return f===void 0?(d=new ES,o.set(s,[d])):u>=f.length?(d=new ES,f.push(d)):d=f[u],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function RC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new at,color:new Oe};break;case"SpotLight":i={position:new at,direction:new at,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new at,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new at,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":i={color:new Oe,position:new at,halfWidth:new at,halfHeight:new at};break}return o[e.id]=i,i}}}function CC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let wC=0;function DC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function UC(o){const e=new RC,i=CC(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new at);const u=new at,f=new en,d=new en;function h(m){let S=0,v=0,_=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let T=0,R=0,O=0,M=0,x=0,w=0,F=0,C=0,U=0,D=0,I=0,E=0,L=0,N=0;m.sort(DC);for(let G=0,Y=m.length;G<Y;G++){const V=m[G],Z=V.color,X=V.intensity,W=V.distance;let nt=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Qr?nt=V.shadow.map.texture:nt=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)S+=Z.r*X,v+=Z.g*X,_+=Z.b*X;else if(V.isLightProbe){for(let it=0;it<9;it++)s.probe[it].addScaledVector(V.sh.coefficients[it],X);N++}else if(V.isSunLight){const it=e.get(V);if(it.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const dt=V.shadow,vt=i.get(V);vt.shadowIntensity=dt.intensity,vt.shadowBias=dt.bias,vt.shadowNormalBias=dt.normalBias,vt.shadowRadius=dt.radius,vt.shadowMapSize.copy(dt.mapSize).multiply(dt.getFrameExtents()),s.sunShadow[R]=vt,s.sunShadowMap[R]=nt;const Gt=dt.getViewportCount();for(let zt=0;zt<Gt;zt++)s.sunShadowMatrix[O+zt]=dt.getMatrix(zt),s.sunShadowCascade[O+zt]=dt._cascadeData[zt];O+=Gt,R++}s.sun[T]=it,T++}else if(V.isDirectionalLight){const it=e.get(V);if(it.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const dt=V.shadow,vt=i.get(V);vt.shadowIntensity=dt.intensity,vt.shadowBias=dt.bias,vt.shadowNormalBias=dt.normalBias,vt.shadowRadius=dt.radius,vt.shadowMapSize=dt.mapSize,s.directionalShadow[M]=vt,s.directionalShadowMap[M]=nt,s.directionalShadowMatrix[M]=V.shadow.matrix,U++}s.directional[M]=it,M++}else if(V.isSpotLight){const it=e.get(V);it.position.setFromMatrixPosition(V.matrixWorld),it.color.copy(Z).multiplyScalar(X),it.distance=W,it.coneCos=Math.cos(V.angle),it.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),it.decay=V.decay,s.spot[w]=it;const dt=V.shadow;if(V.map&&(s.spotLightMap[E]=V.map,E++,dt.updateMatrices(V),V.castShadow&&L++),s.spotLightMatrix[w]=dt.matrix,V.castShadow){const vt=i.get(V);vt.shadowIntensity=dt.intensity,vt.shadowBias=dt.bias,vt.shadowNormalBias=dt.normalBias,vt.shadowRadius=dt.radius,vt.shadowMapSize=dt.mapSize,s.spotShadow[w]=vt,s.spotShadowMap[w]=nt,I++}w++}else if(V.isRectAreaLight){const it=e.get(V);it.color.copy(Z).multiplyScalar(X),it.halfWidth.set(V.width*.5,0,0),it.halfHeight.set(0,V.height*.5,0),s.rectArea[F]=it,F++}else if(V.isPointLight){const it=e.get(V);if(it.color.copy(V.color).multiplyScalar(V.intensity),it.distance=V.distance,it.decay=V.decay,V.castShadow){const dt=V.shadow,vt=i.get(V);vt.shadowIntensity=dt.intensity,vt.shadowBias=dt.bias,vt.shadowNormalBias=dt.normalBias,vt.shadowRadius=dt.radius,vt.shadowMapSize=dt.mapSize,vt.shadowCameraNear=dt.camera.near,vt.shadowCameraFar=dt.camera.far,s.pointShadow[x]=vt,s.pointShadowMap[x]=nt,s.pointShadowMatrix[x]=V.shadow.matrix,D++}s.point[x]=it,x++}else if(V.isHemisphereLight){const it=e.get(V);it.skyColor.copy(V.color).multiplyScalar(X),it.groundColor.copy(V.groundColor).multiplyScalar(X),s.hemi[C]=it,C++}}F>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=v,s.ambient[2]=_;const z=s.hash;(z.sunLength!==T||z.directionalLength!==M||z.pointLength!==x||z.spotLength!==w||z.rectAreaLength!==F||z.hemiLength!==C||z.numSunShadows!==R||z.numDirectionalShadows!==U||z.numPointShadows!==D||z.numSpotShadows!==I||z.numSpotMaps!==E||z.numLightProbes!==N)&&(s.sun.length=T,s.directional.length=M,s.spot.length=w,s.rectArea.length=F,s.point.length=x,s.hemi.length=C,s.sunShadow.length=R,s.sunShadowMap.length=R,s.sunShadowMatrix.length=O,s.sunShadowCascade.length=O,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.directionalShadowMatrix.length=U,s.pointShadow.length=D,s.pointShadowMap.length=D,s.pointShadowMatrix.length=D,s.spotShadow.length=I,s.spotShadowMap.length=I,s.spotLightMatrix.length=I+E-L,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=N,z.sunLength=T,z.directionalLength=M,z.pointLength=x,z.spotLength=w,z.rectAreaLength=F,z.hemiLength=C,z.numSunShadows=R,z.numDirectionalShadows=U,z.numPointShadows=D,z.numSpotShadows=I,z.numSpotMaps=E,z.numLightProbes=N,s.version=wC++)}function g(m,S){let v=0,_=0,T=0,R=0,O=0,M=0;const x=S.matrixWorldInverse;for(let w=0,F=m.length;w<F;w++){const C=m[w];if(C.isSunLight){const U=s.sun[v];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(x),v++}else if(C.isDirectionalLight){const U=s.directional[_];U.direction.setFromMatrixPosition(C.matrixWorld),u.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(u),U.direction.transformDirection(x),_++}else if(C.isSpotLight){const U=s.spot[R];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(C.matrixWorld),u.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(u),U.direction.transformDirection(x),R++}else if(C.isRectAreaLight){const U=s.rectArea[O];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(x),d.identity(),f.copy(C.matrixWorld),f.premultiply(x),d.extractRotation(f),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),O++}else if(C.isPointLight){const U=s.point[T];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(x),T++}else if(C.isHemisphereLight){const U=s.hemi[M];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(x),M++}}}return{setup:h,setupView:g,state:s}}function TS(o){const e=new UC(o),i=[],s=[],u=[];function f(_){v.camera=_,i.length=0,s.length=0,u.length=0}function d(_){i.push(_)}function h(_){s.push(_)}function g(_){u.push(_)}function m(){e.setup(i)}function S(_){e.setupView(i,_)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:u,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:v,setupLights:m,setupLightsView:S,pushLight:d,pushShadow:h,pushLightProbeGrid:g}}function NC(o){let e=new WeakMap;function i(u,f=0){const d=e.get(u);let h;return d===void 0?(h=new TS(o),e.set(u,[h])):f>=d.length?(h=new TS(o),d.push(h)):h=d[f],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const LC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OC=`uniform sampler2D shadow_pass;
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
}`,PC=[new at(1,0,0),new at(-1,0,0),new at(0,1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1)],IC=[new at(0,-1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1),new at(0,-1,0),new at(0,-1,0)],bS=new en,dl=new at,Wh=new at;function zC(o,e,i){let s=new jp;const u=new Te,f=new Te,d=new rn,h=new YT,g=new ZT,m={},S=i.maxTextureSize,v={[Zr]:jn,[jn]:Zr,[Ii]:Ii},_=new ca({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:LC,fragmentShader:OC}),T=_.clone();T.defines.HORIZONTAL_PASS=1;const R=new Hi;R.setAttribute("position",new Pa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const O=new pi(R,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_c;let x=this.type;this.render=function(D,I,E){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||D.length===0)return;this.type===PE&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_c);const L=o.getRenderTarget(),N=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),G=o.state;G.setBlending(La),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Y=x!==this.type;Y&&I.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(Z=>Z.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,Z=D.length;V<Z;V++){const X=D[V],W=X.shadow;if(W===void 0){oe("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;u.copy(W.mapSize);const nt=W.getFrameExtents();u.multiply(nt),f.copy(W.mapSize),(u.x>S||u.y>S)&&(u.x>S&&(f.x=Math.floor(S/nt.x),u.x=f.x*nt.x,W.mapSize.x=f.x),u.y>S&&(f.y=Math.floor(S/nt.y),u.y=f.y*nt.y,W.mapSize.y=f.y));const it=o.state.buffers.depth.getReversed();if(W.camera._reversedDepth=it,W.map===null||Y===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===hl){if(X.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Fi(u.x,u.y,{format:Qr,type:la,minFilter:zn,magFilter:zn,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new xl(u.x,u.y,aa),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=Ia,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Nn,W.map.depthTexture.magFilter=Nn}else X.isPointLight?(W.map=new bx(u.x),W.map.depthTexture=new GT(u.x,oa)):(W.map=new Fi(u.x,u.y),W.map.depthTexture=new xl(u.x,u.y,oa)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=Ia,this.type===_c?(W.map.depthTexture.compareFunction=it?Kp:Zp,W.map.depthTexture.minFilter=zn,W.map.depthTexture.magFilter=zn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Nn,W.map.depthTexture.magFilter=Nn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==u.x||W.map.height!==u.y)&&W.map.setSize(u.x,u.y);const dt=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();X.isPointLight!==!0&&W.updateMatrices(X,E);for(let vt=0;vt<dt;vt++){const Gt=W.getCamera(vt);if(X.isPointLight){const zt=W.camera,H=W.matrix,pt=X.distance||zt.far;pt!==zt.far&&(zt.far=pt,zt.updateProjectionMatrix()),dl.setFromMatrixPosition(X.matrixWorld),zt.position.copy(dl),Wh.copy(zt.position),Wh.add(PC[vt]),zt.up.copy(IC[vt]),zt.lookAt(Wh),zt.updateMatrixWorld(),H.makeTranslation(-dl.x,-dl.y,-dl.z),bS.multiplyMatrices(zt.projectionMatrix,zt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(bS,zt.coordinateSystem,zt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)o.setRenderTarget(W.map,vt),o.clear();else{vt===0&&(o.setRenderTarget(W.map),o.clear());const zt=W.getViewport(vt);d.set(f.x*zt.x,f.y*zt.y,f.x*zt.z,f.y*zt.w),G.viewport(d)}s=W.getFrustum(vt),C(I,E,Gt,X,this.type)}W.isPointLightShadow!==!0&&this.type===hl&&w(W,E),W.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(L,N,z)};function w(D,I){const E=e.update(O);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,T.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,T.needsUpdate=!0),D.mapPass===null?D.mapPass=new Fi(u.x,u.y,{format:Qr,type:la}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),_.uniforms.shadow_pass.value=D.map.depthTexture,_.uniforms.resolution.value.set(D.map.width,D.map.height),_.uniforms.radius.value=D.radius,o.setRenderTarget(D.mapPass),o.clear(),o.renderBufferDirect(I,null,E,_,O,null),T.uniforms.shadow_pass.value=D.mapPass.texture,T.uniforms.resolution.value.set(D.map.width,D.map.height),T.uniforms.radius.value=D.radius,o.setRenderTarget(D.map),o.clear(),o.renderBufferDirect(I,null,E,T,O,null)}function F(D,I,E,L){let N=null;const z=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(z!==void 0)N=z;else if(N=E.isPointLight===!0?g:h,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const G=N.uuid,Y=I.uuid;let V=m[G];V===void 0&&(V={},m[G]=V);let Z=V[Y];Z===void 0&&(Z=N.clone(),V[Y]=Z,I.addEventListener("dispose",U)),N=Z}if(N.visible=I.visible,N.wireframe=I.wireframe,L===hl?N.side=I.shadowSide!==null?I.shadowSide:I.side:N.side=I.shadowSide!==null?I.shadowSide:v[I.side],N.alphaMap=I.alphaMap,N.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,N.map=I.map,N.clipShadows=I.clipShadows,N.clippingPlanes=I.clippingPlanes,N.clipIntersection=I.clipIntersection,N.displacementMap=I.displacementMap,N.displacementScale=I.displacementScale,N.displacementBias=I.displacementBias,N.wireframeLinewidth=I.wireframeLinewidth,N.linewidth=I.linewidth,E.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const G=o.properties.get(N);G.light=E}return N}function C(D,I,E,L,N){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&N===hl)&&(!D.frustumCulled||D.intersectsFrustum(s))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const Y=e.update(D),V=D.material;if(Array.isArray(V)){const Z=Y.groups;for(let X=0,W=Z.length;X<W;X++){const nt=Z[X],it=V[nt.materialIndex];if(it&&it.visible){const dt=F(D,it,L,N);D.onBeforeShadow(o,D,I,E,Y,dt,nt),o.renderBufferDirect(E,null,Y,dt,D,nt),D.onAfterShadow(o,D,I,E,Y,dt,nt)}}}else if(V.visible){const Z=F(D,V,L,N);D.onBeforeShadow(o,D,I,E,Y,Z,null),o.renderBufferDirect(E,null,Y,Z,D,null),D.onAfterShadow(o,D,I,E,Y,Z,null)}}const G=D.children;for(let Y=0,V=G.length;Y<V;Y++)C(G[Y],I,E,L,N)}function U(D){D.target.removeEventListener("dispose",U);for(const E in m){const L=m[E],N=D.target.uuid;N in L&&(L[N].dispose(),delete L[N])}}}function BC(o,e){function i(){let K=!1;const Ct=new rn;let Mt=null;const Nt=new rn(0,0,0,0);return{setMask:function(Xt){Mt!==Xt&&!K&&(o.colorMask(Xt,Xt,Xt,Xt),Mt=Xt)},setLocked:function(Xt){K=Xt},setClear:function(Xt,Et,Jt,Vt,we){we===!0&&(Xt*=Vt,Et*=Vt,Jt*=Vt),Ct.set(Xt,Et,Jt,Vt),Nt.equals(Ct)===!1&&(o.clearColor(Xt,Et,Jt,Vt),Nt.copy(Ct))},reset:function(){K=!1,Mt=null,Nt.set(-1,0,0,0)}}}function s(){let K=!1,Ct=!1,Mt=null,Nt=null,Xt=null;return{setReversed:function(Et){if(Ct!==Et){const Jt=e.get("EXT_clip_control");Et?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Ct=Et;const Vt=Xt;Xt=null,this.setClear(Vt)}},getReversed:function(){return Ct},setTest:function(Et){Et?ht(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(Et){Mt!==Et&&!K&&(o.depthMask(Et),Mt=Et)},setFunc:function(Et){if(Ct&&(Et=gT[Et]),Nt!==Et){switch(Et){case qh:o.depthFunc(o.NEVER);break;case Yh:o.depthFunc(o.ALWAYS);break;case Zh:o.depthFunc(o.LESS);break;case gl:o.depthFunc(o.LEQUAL);break;case Kh:o.depthFunc(o.EQUAL);break;case Qh:o.depthFunc(o.GEQUAL);break;case Jh:o.depthFunc(o.GREATER);break;case jh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Nt=Et}},setLocked:function(Et){K=Et},setClear:function(Et){Xt!==Et&&(Xt=Et,Ct&&(Et=1-Et),o.clearDepth(Et))},reset:function(){K=!1,Mt=null,Nt=null,Xt=null,Ct=!1}}}function u(){let K=!1,Ct=null,Mt=null,Nt=null,Xt=null,Et=null,Jt=null,Vt=null,we=null;return{setTest:function(ce){K||(ce?ht(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(ce){Ct!==ce&&!K&&(o.stencilMask(ce),Ct=ce)},setFunc:function(ce,ti,mi){(Mt!==ce||Nt!==ti||Xt!==mi)&&(o.stencilFunc(ce,ti,mi),Mt=ce,Nt=ti,Xt=mi)},setOp:function(ce,ti,mi){(Et!==ce||Jt!==ti||Vt!==mi)&&(o.stencilOp(ce,ti,mi),Et=ce,Jt=ti,Vt=mi)},setLocked:function(ce){K=ce},setClear:function(ce){we!==ce&&(o.clearStencil(ce),we=ce)},reset:function(){K=!1,Ct=null,Mt=null,Nt=null,Xt=null,Et=null,Jt=null,Vt=null,we=null}}}const f=new i,d=new s,h=new u,g=new WeakMap,m=new WeakMap;let S={},v={},_={},T=new WeakMap,R=[],O=null,M=!1,x=null,w=null,F=null,C=null,U=null,D=null,I=null,E=new Oe(0,0,0),L=0,N=!1,z=null,G=null,Y=null,V=null,Z=null;const X=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,nt=0;const it=o.getParameter(o.VERSION);it.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(it)[1]),W=nt>=1):it.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),W=nt>=2);let dt=null,vt={};const Gt=o.getParameter(o.SCISSOR_BOX),zt=o.getParameter(o.VIEWPORT),H=new rn().fromArray(Gt),pt=new rn().fromArray(zt);function bt(K,Ct,Mt,Nt){const Xt=new Uint8Array(4),Et=o.createTexture();o.bindTexture(K,Et),o.texParameteri(K,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(K,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<Mt;Jt++)K===o.TEXTURE_3D||K===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,Nt,0,o.RGBA,o.UNSIGNED_BYTE,Xt):o.texImage2D(Ct+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Xt);return Et}const J={};J[o.TEXTURE_2D]=bt(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=bt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=bt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=bt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ht(o.DEPTH_TEST),d.setFunc(gl),jt(!1),ee(Dv),ht(o.CULL_FACE),me(La);function ht(K){S[K]!==!0&&(o.enable(K),S[K]=!0)}function Tt(K){S[K]!==!1&&(o.disable(K),S[K]=!1)}function Dt(K,Ct){return _[K]!==Ct?(o.bindFramebuffer(K,Ct),_[K]=Ct,K===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ct),K===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function _t(K,Ct){let Mt=R,Nt=!1;if(K){Mt=T.get(Ct),Mt===void 0&&(Mt=[],T.set(Ct,Mt));const Xt=K.textures;if(Mt.length!==Xt.length||Mt[0]!==o.COLOR_ATTACHMENT0){for(let Et=0,Jt=Xt.length;Et<Jt;Et++)Mt[Et]=o.COLOR_ATTACHMENT0+Et;Mt.length=Xt.length,Nt=!0}}else Mt[0]!==o.BACK&&(Mt[0]=o.BACK,Nt=!0);Nt&&o.drawBuffers(Mt)}function At(K){return O!==K?(o.useProgram(K),O=K,!0):!1}const Ie={[js]:o.FUNC_ADD,[zE]:o.FUNC_SUBTRACT,[BE]:o.FUNC_REVERSE_SUBTRACT};Ie[FE]=o.MIN,Ie[HE]=o.MAX;const ue={[GE]:o.ZERO,[VE]:o.ONE,[XE]:o.SRC_COLOR,[XS]:o.SRC_ALPHA,[KE]:o.SRC_ALPHA_SATURATE,[YE]:o.DST_COLOR,[WE]:o.DST_ALPHA,[kE]:o.ONE_MINUS_SRC_COLOR,[kS]:o.ONE_MINUS_SRC_ALPHA,[ZE]:o.ONE_MINUS_DST_COLOR,[qE]:o.ONE_MINUS_DST_ALPHA,[QE]:o.CONSTANT_COLOR,[JE]:o.ONE_MINUS_CONSTANT_COLOR,[jE]:o.CONSTANT_ALPHA,[$E]:o.ONE_MINUS_CONSTANT_ALPHA};function me(K,Ct,Mt,Nt,Xt,Et,Jt,Vt,we,ce){if(K===La){M===!0&&(Tt(o.BLEND),M=!1);return}if(M===!1&&(ht(o.BLEND),M=!0),K!==IE){if(K!==x||ce!==N){if((w!==js||U!==js)&&(o.blendEquation(o.FUNC_ADD),w=js,U=js),ce)switch(K){case ml:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Uv:o.blendFunc(o.ONE,o.ONE);break;case Nv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Lv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Be("WebGLState: Invalid blending: ",K);break}else switch(K){case ml:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Uv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Nv:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lv:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",K);break}F=null,C=null,D=null,I=null,E.set(0,0,0),L=0,x=K,N=ce}return}Xt=Xt||Ct,Et=Et||Mt,Jt=Jt||Nt,(Ct!==w||Xt!==U)&&(o.blendEquationSeparate(Ie[Ct],Ie[Xt]),w=Ct,U=Xt),(Mt!==F||Nt!==C||Et!==D||Jt!==I)&&(o.blendFuncSeparate(ue[Mt],ue[Nt],ue[Et],ue[Jt]),F=Mt,C=Nt,D=Et,I=Jt),(Vt.equals(E)===!1||we!==L)&&(o.blendColor(Vt.r,Vt.g,Vt.b,we),E.copy(Vt),L=we),x=K,N=!1}function ge(K,Ct){K.side===Ii?Tt(o.CULL_FACE):ht(o.CULL_FACE);let Mt=K.side===jn;Ct&&(Mt=!Mt),jt(Mt),K.blending===ml&&K.transparent===!1?me(La):me(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),d.setFunc(K.depthFunc),d.setTest(K.depthTest),d.setMask(K.depthWrite),f.setMask(K.colorWrite);const Nt=K.stencilWrite;h.setTest(Nt),Nt&&(h.setMask(K.stencilWriteMask),h.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),h.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),dn(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?ht(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function jt(K){z!==K&&(K?o.frontFace(o.CW):o.frontFace(o.CCW),z=K)}function ee(K){K!==LE?(ht(o.CULL_FACE),K!==G&&(K===Dv?o.cullFace(o.BACK):K===OE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),G=K}function be(K){K!==Y&&(W&&o.lineWidth(K),Y=K)}function dn(K,Ct,Mt){K?(ht(o.POLYGON_OFFSET_FILL),(V!==Ct||Z!==Mt)&&(V=Ct,Z=Mt,d.getReversed()&&(Ct=-Ct),o.polygonOffset(Ct,Mt))):Tt(o.POLYGON_OFFSET_FILL)}function ze(K){K?ht(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function $e(K){K===void 0&&(K=o.TEXTURE0+X-1),dt!==K&&(o.activeTexture(K),dt=K)}function Q(K,Ct,Mt){Mt===void 0&&(dt===null?Mt=o.TEXTURE0+X-1:Mt=dt);let Nt=vt[Mt];Nt===void 0&&(Nt={type:void 0,texture:void 0},vt[Mt]=Nt),(Nt.type!==K||Nt.texture!==Ct)&&(dt!==Mt&&(o.activeTexture(Mt),dt=Mt),o.bindTexture(K,Ct||J[K]),Nt.type=K,Nt.texture=Ct)}function nn(){const K=vt[dt];K!==void 0&&K.type!==void 0&&(o.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function Pe(){try{o.compressedTexImage2D(...arguments)}catch(K){Be("WebGLState:",K)}}function P(){try{o.compressedTexImage3D(...arguments)}catch(K){Be("WebGLState:",K)}}function y(){try{o.texSubImage2D(...arguments)}catch(K){Be("WebGLState:",K)}}function et(){try{o.texSubImage3D(...arguments)}catch(K){Be("WebGLState:",K)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(K){Be("WebGLState:",K)}}function mt(){try{o.compressedTexSubImage3D(...arguments)}catch(K){Be("WebGLState:",K)}}function Rt(){try{o.texStorage2D(...arguments)}catch(K){Be("WebGLState:",K)}}function Ut(){try{o.texStorage3D(...arguments)}catch(K){Be("WebGLState:",K)}}function gt(){try{o.texImage2D(...arguments)}catch(K){Be("WebGLState:",K)}}function yt(){try{o.texImage3D(...arguments)}catch(K){Be("WebGLState:",K)}}function wt(K){return v[K]!==void 0?v[K]:o.getParameter(K)}function $t(K,Ct){v[K]!==Ct&&(o.pixelStorei(K,Ct),v[K]=Ct)}function It(K){H.equals(K)===!1&&(o.scissor(K.x,K.y,K.z,K.w),H.copy(K))}function Pt(K){pt.equals(K)===!1&&(o.viewport(K.x,K.y,K.z,K.w),pt.copy(K))}function kt(K,Ct){let Mt=m.get(Ct);Mt===void 0&&(Mt=new WeakMap,m.set(Ct,Mt));let Nt=Mt.get(K);Nt===void 0&&(Nt=o.getUniformBlockIndex(Ct,K.name),Mt.set(K,Nt))}function ie(K,Ct){const Nt=m.get(Ct).get(K);g.get(Ct)!==Nt&&(o.uniformBlockBinding(Ct,Nt,K.__bindingPointIndex),g.set(Ct,Nt))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},v={},dt=null,vt={},_={},T=new WeakMap,R=[],O=null,M=!1,x=null,w=null,F=null,C=null,U=null,D=null,I=null,E=new Oe(0,0,0),L=0,N=!1,z=null,G=null,Y=null,V=null,Z=null,H.set(0,0,o.canvas.width,o.canvas.height),pt.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:ht,disable:Tt,bindFramebuffer:Dt,drawBuffers:_t,useProgram:At,setBlending:me,setMaterial:ge,setFlipSided:jt,setCullFace:ee,setLineWidth:be,setPolygonOffset:dn,setScissorTest:ze,activeTexture:$e,bindTexture:Q,unbindTexture:nn,compressedTexImage2D:Pe,compressedTexImage3D:P,texImage2D:gt,texImage3D:yt,pixelStorei:$t,getParameter:wt,updateUBOMapping:kt,uniformBlockBinding:ie,texStorage2D:Rt,texStorage3D:Ut,texSubImage2D:y,texSubImage3D:et,compressedTexSubImage2D:ut,compressedTexSubImage3D:mt,scissor:It,viewport:Pt,reset:le}}function FC(o,e,i,s,u,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Te,S=new WeakMap,v=new Set;let _;const T=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function O(P,y){return R?new OffscreenCanvas(P,y):Rc("canvas")}function M(P,y,et){let ut=1;const mt=Pe(P);if((mt.width>et||mt.height>et)&&(ut=et/Math.max(mt.width,mt.height)),ut<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Rt=Math.floor(ut*mt.width),Ut=Math.floor(ut*mt.height);_===void 0&&(_=O(Rt,Ut));const gt=y?O(Rt,Ut):_;return gt.width=Rt,gt.height=Ut,gt.getContext("2d").drawImage(P,0,0,Rt,Ut),oe("WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+Rt+"x"+Ut+")."),gt}else return"data"in P&&oe("WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),P;return P}function x(P){return P.generateMipmaps}function w(P){o.generateMipmap(P)}function F(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(P,y,et,ut,mt,Rt=!1){if(P!==null){if(o[P]!==void 0)return o[P];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ut;ut&&(Ut=e.get("EXT_texture_norm16"),Ut||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let gt=y;if(y===o.RED&&(et===o.FLOAT&&(gt=o.R32F),et===o.HALF_FLOAT&&(gt=o.R16F),et===o.UNSIGNED_BYTE&&(gt=o.R8),et===o.UNSIGNED_SHORT&&Ut&&(gt=Ut.R16_EXT),et===o.SHORT&&Ut&&(gt=Ut.R16_SNORM_EXT)),y===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.R8UI),et===o.UNSIGNED_SHORT&&(gt=o.R16UI),et===o.UNSIGNED_INT&&(gt=o.R32UI),et===o.BYTE&&(gt=o.R8I),et===o.SHORT&&(gt=o.R16I),et===o.INT&&(gt=o.R32I)),y===o.RG&&(et===o.FLOAT&&(gt=o.RG32F),et===o.HALF_FLOAT&&(gt=o.RG16F),et===o.UNSIGNED_BYTE&&(gt=o.RG8),et===o.UNSIGNED_SHORT&&Ut&&(gt=Ut.RG16_EXT),et===o.SHORT&&Ut&&(gt=Ut.RG16_SNORM_EXT)),y===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RG8UI),et===o.UNSIGNED_SHORT&&(gt=o.RG16UI),et===o.UNSIGNED_INT&&(gt=o.RG32UI),et===o.BYTE&&(gt=o.RG8I),et===o.SHORT&&(gt=o.RG16I),et===o.INT&&(gt=o.RG32I)),y===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),et===o.UNSIGNED_INT&&(gt=o.RGB32UI),et===o.BYTE&&(gt=o.RGB8I),et===o.SHORT&&(gt=o.RGB16I),et===o.INT&&(gt=o.RGB32I)),y===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),et===o.UNSIGNED_INT&&(gt=o.RGBA32UI),et===o.BYTE&&(gt=o.RGBA8I),et===o.SHORT&&(gt=o.RGBA16I),et===o.INT&&(gt=o.RGBA32I)),y===o.RGB&&(et===o.UNSIGNED_SHORT&&Ut&&(gt=Ut.RGB16_EXT),et===o.SHORT&&Ut&&(gt=Ut.RGB16_SNORM_EXT),et===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),et===o.UNSIGNED_INT_10F_11F_11F_REV&&(gt=o.R11F_G11F_B10F)),y===o.RGBA){const yt=Rt?Ac:Ue.getTransfer(mt);et===o.FLOAT&&(gt=o.RGBA32F),et===o.HALF_FLOAT&&(gt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(gt=yt===qe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT&&Ut&&(gt=Ut.RGBA16_EXT),et===o.SHORT&&Ut&&(gt=Ut.RGBA16_SNORM_EXT),et===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),gt}function U(P,y){let et;return P?y===null||y===oa||y===vl?et=o.DEPTH24_STENCIL8:y===aa?et=o.DEPTH32F_STENCIL8:y===_l&&(et=o.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===oa||y===vl?et=o.DEPTH_COMPONENT24:y===aa?et=o.DEPTH_COMPONENT32F:y===_l&&(et=o.DEPTH_COMPONENT16),et}function D(P,y){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==Nn&&P.minFilter!==zn?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function I(P){const y=P.target;y.removeEventListener("dispose",I),L(y),y.isVideoTexture&&S.delete(y),y.isHTMLTexture&&v.delete(y)}function E(P){const y=P.target;y.removeEventListener("dispose",E),z(y)}function L(P){const y=s.get(P);if(y.__webglInit===void 0)return;const et=P.source,ut=T.get(et);if(ut){const mt=ut[y.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&N(P),Object.keys(ut).length===0&&T.delete(et)}s.remove(P)}function N(P){const y=s.get(P);o.deleteTexture(y.__webglTexture);const et=P.source,ut=T.get(et);delete ut[y.__cacheKey],d.memory.textures--}function z(P){const y=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(y.__webglFramebuffer[ut]))for(let mt=0;mt<y.__webglFramebuffer[ut].length;mt++)o.deleteFramebuffer(y.__webglFramebuffer[ut][mt]);else o.deleteFramebuffer(y.__webglFramebuffer[ut]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[ut])}else{if(Array.isArray(y.__webglFramebuffer))for(let ut=0;ut<y.__webglFramebuffer.length;ut++)o.deleteFramebuffer(y.__webglFramebuffer[ut]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ut=0;ut<y.__webglColorRenderbuffer.length;ut++)y.__webglColorRenderbuffer[ut]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[ut]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const et=P.textures;for(let ut=0,mt=et.length;ut<mt;ut++){const Rt=s.get(et[ut]);Rt.__webglTexture&&(o.deleteTexture(Rt.__webglTexture),d.memory.textures--),s.remove(et[ut])}s.remove(P)}let G=0;function Y(){G=0}function V(){return G}function Z(P){G=P}function X(){const P=G;return P>=u.maxTextures&&oe("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+u.maxTextures),G+=1,P}function W(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function nt(P,y){const et=s.get(P);if(P.isVideoTexture&&Q(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&et.__version!==P.version){const ut=P.image;if(ut===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(et,P,y);return}}else P.isExternalTexture&&(et.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+y)}function it(P,y){const et=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){Tt(et,P,y);return}else P.isExternalTexture&&(et.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+y)}function dt(P,y){const et=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){Tt(et,P,y);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+y)}function vt(P,y){const et=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&et.__version!==P.version){Dt(et,P,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+y)}const Gt={[$h]:o.REPEAT,[Na]:o.CLAMP_TO_EDGE,[tp]:o.MIRRORED_REPEAT},zt={[Nn]:o.NEAREST,[nT]:o.NEAREST_MIPMAP_NEAREST,[Yu]:o.NEAREST_MIPMAP_LINEAR,[zn]:o.LINEAR,[mh]:o.LINEAR_MIPMAP_NEAREST,[qr]:o.LINEAR_MIPMAP_LINEAR},H={[sT]:o.NEVER,[fT]:o.ALWAYS,[oT]:o.LESS,[Zp]:o.LEQUAL,[lT]:o.EQUAL,[Kp]:o.GEQUAL,[uT]:o.GREATER,[cT]:o.NOTEQUAL};function pt(P,y){if(y.type===aa&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===zn||y.magFilter===mh||y.magFilter===Yu||y.magFilter===qr||y.minFilter===zn||y.minFilter===mh||y.minFilter===Yu||y.minFilter===qr)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,Gt[y.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,Gt[y.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,Gt[y.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,zt[y.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,zt[y.minFilter]),y.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,H[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Nn||y.minFilter!==Yu&&y.minFilter!==qr||y.type===aa&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||s.get(y).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,u.getMaxAnisotropy())),s.get(y).__currentAnisotropy=y.anisotropy}}}function bt(P,y){let et=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",I));const ut=y.source;let mt=T.get(ut);mt===void 0&&(mt={},T.set(ut,mt));const Rt=W(y);if(Rt!==P.__cacheKey){mt[Rt]===void 0&&(mt[Rt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,et=!0),mt[Rt].usedTimes++;const Ut=mt[P.__cacheKey];Ut!==void 0&&(mt[P.__cacheKey].usedTimes--,Ut.usedTimes===0&&N(y)),P.__cacheKey=Rt,P.__webglTexture=mt[Rt].texture}return et}function J(P,y,et){return Math.floor(Math.floor(P/et)/y)}function ht(P,y,et,ut){const Rt=P.updateRanges;if(Rt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,et,ut,y.data);else{Rt.sort(($t,It)=>$t.start-It.start);let Ut=0;for(let $t=1;$t<Rt.length;$t++){const It=Rt[Ut],Pt=Rt[$t],kt=It.start+It.count,ie=J(Pt.start,y.width,4),le=J(It.start,y.width,4);Pt.start<=kt+1&&ie===le&&J(Pt.start+Pt.count-1,y.width,4)===ie?It.count=Math.max(It.count,Pt.start+Pt.count-It.start):(++Ut,Rt[Ut]=Pt)}Rt.length=Ut+1;const gt=i.getParameter(o.UNPACK_ROW_LENGTH),yt=i.getParameter(o.UNPACK_SKIP_PIXELS),wt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let $t=0,It=Rt.length;$t<It;$t++){const Pt=Rt[$t],kt=Math.floor(Pt.start/4),ie=Math.ceil(Pt.count/4),le=kt%y.width,K=Math.floor(kt/y.width),Ct=ie,Mt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,le),i.pixelStorei(o.UNPACK_SKIP_ROWS,K),i.texSubImage2D(o.TEXTURE_2D,0,le,K,Ct,Mt,et,ut,y.data)}P.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,gt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,yt),i.pixelStorei(o.UNPACK_SKIP_ROWS,wt)}}function Tt(P,y,et){let ut=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ut=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ut=o.TEXTURE_3D);const mt=bt(P,y),Rt=y.source;i.bindTexture(ut,P.__webglTexture,o.TEXTURE0+et);const Ut=s.get(Rt);if(Rt.version!==Ut.__version||mt===!0){if(i.activeTexture(o.TEXTURE0+et),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const Mt=Ue.getPrimaries(Ue.workingColorSpace),Nt=y.colorSpace===_r?null:Ue.getPrimaries(y.colorSpace),Xt=y.colorSpace===_r||Mt===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment);let yt=M(y.image,!1,u.maxTextureSize);yt=nn(y,yt);const wt=f.convert(y.format,y.colorSpace),$t=f.convert(y.type);let It=C(y.internalFormat,wt,$t,y.normalized,y.colorSpace,y.isVideoTexture);pt(ut,y);let Pt;const kt=y.mipmaps,ie=y.isVideoTexture!==!0,le=Ut.__version===void 0||mt===!0,K=Rt.dataReady,Ct=D(y,yt);if(y.isDepthTexture)It=U(y.format===Yr,y.type),le&&(ie?i.texStorage2D(o.TEXTURE_2D,1,It,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,It,yt.width,yt.height,0,wt,$t,null));else if(y.isDataTexture)if(kt.length>0){ie&&le&&i.texStorage2D(o.TEXTURE_2D,Ct,It,kt[0].width,kt[0].height);for(let Mt=0,Nt=kt.length;Mt<Nt;Mt++)Pt=kt[Mt],ie?K&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,wt,$t,Pt.data):i.texImage2D(o.TEXTURE_2D,Mt,It,Pt.width,Pt.height,0,wt,$t,Pt.data);y.generateMipmaps=!1}else ie?(le&&i.texStorage2D(o.TEXTURE_2D,Ct,It,yt.width,yt.height),K&&ht(y,yt,wt,$t)):i.texImage2D(o.TEXTURE_2D,0,It,yt.width,yt.height,0,wt,$t,yt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ie&&le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,It,kt[0].width,kt[0].height,yt.depth);for(let Mt=0,Nt=kt.length;Mt<Nt;Mt++)if(Pt=kt[Mt],y.format!==Bi)if(wt!==null)if(ie){if(K)if(y.layerUpdates.size>0){const Xt=iS(Pt.width,Pt.height,y.format,y.type);for(const Et of y.layerUpdates){const Jt=Pt.data.subarray(Et*Xt/Pt.data.BYTES_PER_ELEMENT,(Et+1)*Xt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,Et,Pt.width,Pt.height,1,wt,Jt)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Pt.width,Pt.height,yt.depth,wt,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,It,Pt.width,Pt.height,yt.depth,0,Pt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?K&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Pt.width,Pt.height,yt.depth,wt,$t,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,It,Pt.width,Pt.height,yt.depth,0,wt,$t,Pt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ie&&le&&i.texStorage2D(o.TEXTURE_2D,Ct,It,kt[0].width,kt[0].height);for(let Mt=0,Nt=kt.length;Mt<Nt;Mt++)Pt=kt[Mt],y.format!==Bi?wt!==null?ie?K&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,wt,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,It,Pt.width,Pt.height,0,Pt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?K&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,wt,$t,Pt.data):i.texImage2D(o.TEXTURE_2D,Mt,It,Pt.width,Pt.height,0,wt,$t,Pt.data)}else if(y.isDataArrayTexture)if(ie){if(le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,It,yt.width,yt.height,yt.depth),K)if(y.layerUpdates.size>0){const Mt=iS(yt.width,yt.height,y.format,y.type);for(const Nt of y.layerUpdates){const Xt=yt.data.subarray(Nt*Mt/yt.data.BYTES_PER_ELEMENT,(Nt+1)*Mt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Nt,yt.width,yt.height,1,wt,$t,Xt)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,wt,$t,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,It,yt.width,yt.height,yt.depth,0,wt,$t,yt.data);else if(y.isData3DTexture)ie?(le&&i.texStorage3D(o.TEXTURE_3D,Ct,It,yt.width,yt.height,yt.depth),K&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,wt,$t,yt.data)):i.texImage3D(o.TEXTURE_3D,0,It,yt.width,yt.height,yt.depth,0,wt,$t,yt.data);else if(y.isFramebufferTexture){if(le)if(ie)i.texStorage2D(o.TEXTURE_2D,Ct,It,yt.width,yt.height);else{let Mt=yt.width,Nt=yt.height;for(let Xt=0;Xt<Ct;Xt++)i.texImage2D(o.TEXTURE_2D,Xt,It,Mt,Nt,0,wt,$t,null),Mt>>=1,Nt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in o){const Mt=o.canvas;if(Mt.hasAttribute("layoutsubtree")||Mt.setAttribute("layoutsubtree","true"),yt.parentNode!==Mt){Mt.appendChild(yt),v.add(y),Mt.onpaint=Nt=>{const Xt=Nt.changedElements;for(const Et of v)Xt.includes(Et.image)&&(Et.needsUpdate=!0)},Mt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,yt);else{const Xt=o.RGBA,Et=o.RGBA,Jt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Xt,Et,Jt,yt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(kt.length>0){if(ie&&le){const Mt=Pe(kt[0]);i.texStorage2D(o.TEXTURE_2D,Ct,It,Mt.width,Mt.height)}for(let Mt=0,Nt=kt.length;Mt<Nt;Mt++)Pt=kt[Mt],ie?K&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,wt,$t,Pt):i.texImage2D(o.TEXTURE_2D,Mt,It,wt,$t,Pt);y.generateMipmaps=!1}else if(ie){if(le){const Mt=Pe(yt);i.texStorage2D(o.TEXTURE_2D,Ct,It,Mt.width,Mt.height)}K&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,wt,$t,yt)}else i.texImage2D(o.TEXTURE_2D,0,It,wt,$t,yt);x(y)&&w(ut),Ut.__version=Rt.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Dt(P,y,et){if(y.image.length!==6)return;const ut=bt(P,y),mt=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+et);const Rt=s.get(mt);if(mt.version!==Rt.__version||ut===!0){i.activeTexture(o.TEXTURE0+et);const Ut=Ue.getPrimaries(Ue.workingColorSpace),gt=y.colorSpace===_r?null:Ue.getPrimaries(y.colorSpace),yt=y.colorSpace===_r||Ut===gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const wt=y.isCompressedTexture||y.image[0].isCompressedTexture,$t=y.image[0]&&y.image[0].isDataTexture,It=[];for(let Et=0;Et<6;Et++)!wt&&!$t?It[Et]=M(y.image[Et],!0,u.maxCubemapSize):It[Et]=$t?y.image[Et].image:y.image[Et],It[Et]=nn(y,It[Et]);const Pt=It[0],kt=f.convert(y.format,y.colorSpace),ie=f.convert(y.type),le=C(y.internalFormat,kt,ie,y.normalized,y.colorSpace),K=y.isVideoTexture!==!0,Ct=Rt.__version===void 0||ut===!0,Mt=mt.dataReady;let Nt=D(y,Pt);pt(o.TEXTURE_CUBE_MAP,y);let Xt;if(wt){K&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,le,Pt.width,Pt.height);for(let Et=0;Et<6;Et++){Xt=It[Et].mipmaps;for(let Jt=0;Jt<Xt.length;Jt++){const Vt=Xt[Jt];y.format!==Bi?kt!==null?K?Mt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,0,0,Vt.width,Vt.height,kt,Vt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,le,Vt.width,Vt.height,0,Vt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,0,0,Vt.width,Vt.height,kt,ie,Vt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,le,Vt.width,Vt.height,0,kt,ie,Vt.data)}}}else{if(Xt=y.mipmaps,K&&Ct){Xt.length>0&&Nt++;const Et=Pe(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,le,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if($t){K?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,It[Et].width,It[Et].height,kt,ie,It[Et].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,le,It[Et].width,It[Et].height,0,kt,ie,It[Et].data);for(let Jt=0;Jt<Xt.length;Jt++){const we=Xt[Jt].image[Et].image;K?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,0,0,we.width,we.height,kt,ie,we.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,le,we.width,we.height,0,kt,ie,we.data)}}else{K?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,kt,ie,It[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,le,kt,ie,It[Et]);for(let Jt=0;Jt<Xt.length;Jt++){const Vt=Xt[Jt];K?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,0,0,kt,ie,Vt.image[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,le,kt,ie,Vt.image[Et])}}}x(y)&&w(o.TEXTURE_CUBE_MAP),Rt.__version=mt.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function _t(P,y,et,ut,mt,Rt){const Ut=f.convert(et.format,et.colorSpace),gt=f.convert(et.type),yt=C(et.internalFormat,Ut,gt,et.normalized,et.colorSpace),wt=s.get(y),$t=s.get(et);if($t.__renderTarget=y,!wt.__hasExternalTextures){const It=Math.max(1,y.width>>Rt),Pt=Math.max(1,y.height>>Rt);mt===o.TEXTURE_3D||mt===o.TEXTURE_2D_ARRAY?i.texImage3D(mt,Rt,yt,It,Pt,y.depth,0,Ut,gt,null):i.texImage2D(mt,Rt,yt,It,Pt,0,Ut,gt,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),$e(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ut,mt,$t.__webglTexture,0,ze(y)):(mt===o.TEXTURE_2D||mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ut,mt,$t.__webglTexture,Rt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function At(P,y,et){if(o.bindRenderbuffer(o.RENDERBUFFER,P),y.depthBuffer){const ut=y.depthTexture,mt=ut&&ut.isDepthTexture?ut.type:null,Rt=U(y.stencilBuffer,mt),Ut=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;$e(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ze(y),Rt,y.width,y.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,ze(y),Rt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Rt,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,P)}else{const ut=y.textures;for(let mt=0;mt<ut.length;mt++){const Rt=ut[mt],Ut=f.convert(Rt.format,Rt.colorSpace),gt=f.convert(Rt.type),yt=C(Rt.internalFormat,Ut,gt,Rt.normalized,Rt.colorSpace);$e(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ze(y),yt,y.width,y.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,ze(y),yt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,yt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ie(P,y,et){const ut=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const mt=s.get(y.depthTexture);if(mt.__renderTarget=y,(!mt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ut){if(mt.__webglInit===void 0&&(mt.__webglInit=!0,y.depthTexture.addEventListener("dispose",I)),mt.__webglTexture===void 0){mt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),pt(o.TEXTURE_CUBE_MAP,y.depthTexture);const wt=f.convert(y.depthTexture.format),$t=f.convert(y.depthTexture.type);let It;y.depthTexture.format===Ia?It=o.DEPTH_COMPONENT24:y.depthTexture.format===Yr&&(It=o.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,It,y.width,y.height,0,wt,$t,null)}}else nt(y.depthTexture,0);const Rt=mt.__webglTexture,Ut=ze(y),gt=ut?o.TEXTURE_CUBE_MAP_POSITIVE_X+et:o.TEXTURE_2D,yt=y.depthTexture.format===Yr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ia)$e(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,gt,Rt,0,Ut):o.framebufferTexture2D(o.FRAMEBUFFER,yt,gt,Rt,0);else if(y.depthTexture.format===Yr)$e(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,gt,Rt,0,Ut):o.framebufferTexture2D(o.FRAMEBUFFER,yt,gt,Rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ue(P){const y=s.get(P),et=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const ut=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ut){const mt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ut.removeEventListener("dispose",mt)};ut.addEventListener("dispose",mt),y.__depthDisposeCallback=mt}y.__boundDepthTexture=ut}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(et)for(let ut=0;ut<6;ut++)Ie(y.__webglFramebuffer[ut],P,ut);else{const ut=P.texture.mipmaps;ut&&ut.length>0?Ie(y.__webglFramebuffer[0],P,0):Ie(y.__webglFramebuffer,P,0)}else if(et){y.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[ut]),y.__webglDepthbuffer[ut]===void 0)y.__webglDepthbuffer[ut]=o.createRenderbuffer(),At(y.__webglDepthbuffer[ut],P,!1);else{const mt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=y.__webglDepthbuffer[ut];o.bindRenderbuffer(o.RENDERBUFFER,Rt),o.framebufferRenderbuffer(o.FRAMEBUFFER,mt,o.RENDERBUFFER,Rt)}}else{const ut=P.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),At(y.__webglDepthbuffer,P,!1);else{const mt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Rt),o.framebufferRenderbuffer(o.FRAMEBUFFER,mt,o.RENDERBUFFER,Rt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function me(P,y,et){const ut=s.get(P);y!==void 0&&_t(ut.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&ue(P)}function ge(P){const y=P.texture,et=s.get(P),ut=s.get(y);P.addEventListener("dispose",E);const mt=P.textures,Rt=P.isWebGLCubeRenderTarget===!0,Ut=mt.length>1;if(Ut||(ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture()),ut.__version=y.version,d.memory.textures++),Rt){et.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0){et.__webglFramebuffer[gt]=[];for(let yt=0;yt<y.mipmaps.length;yt++)et.__webglFramebuffer[gt][yt]=o.createFramebuffer()}else et.__webglFramebuffer[gt]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){et.__webglFramebuffer=[];for(let gt=0;gt<y.mipmaps.length;gt++)et.__webglFramebuffer[gt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Ut)for(let gt=0,yt=mt.length;gt<yt;gt++){const wt=s.get(mt[gt]);wt.__webglTexture===void 0&&(wt.__webglTexture=o.createTexture(),d.memory.textures++)}if(P.samples>0&&$e(P)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let gt=0;gt<mt.length;gt++){const yt=mt[gt];et.__webglColorRenderbuffer[gt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[gt]);const wt=f.convert(yt.format,yt.colorSpace),$t=f.convert(yt.type),It=C(yt.internalFormat,wt,$t,yt.normalized,yt.colorSpace,P.isXRRenderTarget===!0),Pt=ze(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,It,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+gt,o.RENDERBUFFER,et.__webglColorRenderbuffer[gt])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),At(et.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Rt){i.bindTexture(o.TEXTURE_CUBE_MAP,ut.__webglTexture),pt(o.TEXTURE_CUBE_MAP,y);for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)_t(et.__webglFramebuffer[gt][yt],P,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt);else _t(et.__webglFramebuffer[gt],P,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);x(y)&&w(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ut){for(let gt=0,yt=mt.length;gt<yt;gt++){const wt=mt[gt],$t=s.get(wt);let It=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(It=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(It,$t.__webglTexture),pt(It,wt),_t(et.__webglFramebuffer,P,wt,o.COLOR_ATTACHMENT0+gt,It,0),x(wt)&&w(It)}i.unbindTexture()}else{let gt=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(gt=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(gt,ut.__webglTexture),pt(gt,y),y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)_t(et.__webglFramebuffer[yt],P,y,o.COLOR_ATTACHMENT0,gt,yt);else _t(et.__webglFramebuffer,P,y,o.COLOR_ATTACHMENT0,gt,0);x(y)&&w(gt),i.unbindTexture()}P.depthBuffer&&ue(P)}function jt(P){const y=P.textures;for(let et=0,ut=y.length;et<ut;et++){const mt=y[et];if(x(mt)){const Rt=F(P),Ut=s.get(mt).__webglTexture;i.bindTexture(Rt,Ut),w(Rt),i.unbindTexture()}}}const ee=[],be=[];function dn(P){if(P.samples>0){if($e(P)===!1){const y=P.textures,et=P.width,ut=P.height;let mt=o.COLOR_BUFFER_BIT;const Rt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=s.get(P),gt=y.length>1;if(gt)for(let wt=0;wt<y.length;wt++)i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const yt=P.texture.mipmaps;yt&&yt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let wt=0;wt<y.length;wt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(mt|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(mt|=o.STENCIL_BUFFER_BIT)),gt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[wt]);const $t=s.get(y[wt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,$t,0)}o.blitFramebuffer(0,0,et,ut,0,0,et,ut,mt,o.NEAREST),g===!0&&(ee.length=0,be.length=0,ee.push(o.COLOR_ATTACHMENT0+wt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ee.push(Rt),be.push(Rt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,be)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ee))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),gt)for(let wt=0;wt<y.length;wt++){i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[wt]);const $t=s.get(y[wt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,$t,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&g){const y=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function ze(P){return Math.min(u.maxSamples,P.samples)}function $e(P){const y=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Q(P){const y=d.render.frame;S.get(P)!==y&&(S.set(P,y),P.update())}function nn(P,y){const et=P.colorSpace,ut=P.format,mt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||et!==bc&&et!==_r&&(Ue.getTransfer(et)===qe?(ut!==Bi||mt!==hi)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",et)),y}function Pe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=X,this.resetTextureUnits=Y,this.getTextureUnits=V,this.setTextureUnits=Z,this.setTexture2D=nt,this.setTexture2DArray=it,this.setTexture3D=dt,this.setTextureCube=vt,this.rebindTextures=me,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function HC(o,e){function i(s,u=_r){let f;const d=Ue.getTransfer(u);if(s===hi)return o.UNSIGNED_BYTE;if(s===Xp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===kp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===nx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===ix)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===tx)return o.BYTE;if(s===ex)return o.SHORT;if(s===_l)return o.UNSIGNED_SHORT;if(s===Vp)return o.INT;if(s===oa)return o.UNSIGNED_INT;if(s===aa)return o.FLOAT;if(s===la)return o.HALF_FLOAT;if(s===ax)return o.ALPHA;if(s===rx)return o.RGB;if(s===Bi)return o.RGBA;if(s===Ia)return o.DEPTH_COMPONENT;if(s===Yr)return o.DEPTH_STENCIL;if(s===sx)return o.RED;if(s===Wp)return o.RED_INTEGER;if(s===Qr)return o.RG;if(s===qp)return o.RG_INTEGER;if(s===Yp)return o.RGBA_INTEGER;if(s===vc||s===Sc||s===xc||s===Mc)if(d===qe)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===vc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Mc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===vc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Mc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ep||s===np||s===ip||s===ap)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===ep)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===np)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ip)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ap)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rp||s===sp||s===op||s===lp||s===up||s===Ec||s===cp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===rp||s===sp)return d===qe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===op)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===lp)return f.COMPRESSED_R11_EAC;if(s===up)return f.COMPRESSED_SIGNED_R11_EAC;if(s===Ec)return f.COMPRESSED_RG11_EAC;if(s===cp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===fp||s===dp||s===hp||s===pp||s===mp||s===gp||s===_p||s===vp||s===Sp||s===xp||s===Mp||s===yp||s===Ep||s===Tp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===fp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===dp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_p)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Sp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Mp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ep)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Tp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bp||s===Ap||s===Rp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===bp)return d===qe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ap)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Rp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cp||s===wp||s===Tc||s===Dp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===Cp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===wp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Tc)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Dp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const GC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VC=`
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

}`;class XC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new gx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ca({vertexShader:GC,fragmentShader:VC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new pi(new oo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kC extends Jr{constructor(e,i){super();const s=this;let u=null,f=1,d=null,h="local-floor",g=1,m=null,S=null,v=null,_=null,T=null,R=null;const O=typeof XRWebGLBinding<"u",M=new XC,x={},w=i.getContextAttributes();let F=null,C=null;const U=[],D=[],I=new Te;let E=null,L=null;const N=new di;N.viewport=new rn;const z=new di;z.viewport=new rn;const G=[N,z],Y=new jT;let V=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ht=U[J];return ht===void 0&&(ht=new Th,U[J]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(J){let ht=U[J];return ht===void 0&&(ht=new Th,U[J]=ht),ht.getGripSpace()},this.getHand=function(J){let ht=U[J];return ht===void 0&&(ht=new Th,U[J]=ht),ht.getHandSpace()};function X(J){const ht=D.indexOf(J.inputSource);if(ht===-1)return;const Tt=U[ht];Tt!==void 0&&(Tt.update(J.inputSource,J.frame,m||d),Tt.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){u.removeEventListener("select",X),u.removeEventListener("selectstart",X),u.removeEventListener("selectend",X),u.removeEventListener("squeeze",X),u.removeEventListener("squeezestart",X),u.removeEventListener("squeezeend",X),u.removeEventListener("end",W),u.removeEventListener("inputsourceschange",nt);for(let J=0;J<U.length;J++){const ht=D[J];ht!==null&&(D[J]=null,U[J].disconnect(ht))}V=null,Z=null,M.reset();for(const J in x)delete x[J];if(e.setRenderTarget(F),T=null,_=null,v=null,u=null,C=null,bt.stop(),s.isPresenting=!1,e.setPixelRatio(E),e.setSize(I.width,I.height,!1),L!==null){const J=L.camera;J.fov=L.fov,J.zoom=L.zoom,J.updateProjectionMatrix(),L=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){f=J,s.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,s.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return _!==null?_:T},this.getBinding=function(){return v===null&&O&&(v=new XRWebGLBinding(u,i)),v},this.getFrame=function(){return R},this.getSession=function(){return u},this.setSession=async function(J){if(u=J,u!==null){if(F=e.getRenderTarget(),u.addEventListener("select",X),u.addEventListener("selectstart",X),u.addEventListener("selectend",X),u.addEventListener("squeeze",X),u.addEventListener("squeezestart",X),u.addEventListener("squeezeend",X),u.addEventListener("end",W),u.addEventListener("inputsourceschange",nt),w.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(I),O&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Dt=null,_t=null;w.depth&&(_t=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=w.stencil?Yr:Ia,Dt=w.stencil?vl:oa);const At={colorFormat:i.RGBA8,depthFormat:_t,scaleFactor:f};v=this.getBinding(),_=v.createProjectionLayer(At),u.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new Fi(_.textureWidth,_.textureHeight,{format:Bi,type:hi,depthTexture:new xl(_.textureWidth,_.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Tt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:f};T=new XRWebGLLayer(u,i,Tt),u.updateRenderState({baseLayer:T}),e.setPixelRatio(1),e.setSize(T.framebufferWidth,T.framebufferHeight,!1),C=new Fi(T.framebufferWidth,T.framebufferHeight,{format:Bi,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1,storeMultisampledDepthBuffer:T.ignoreDepthValues===!1,storeMultisampledStencilBuffer:T.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(g),m=null,d=await u.requestReferenceSpace(h),bt.setContext(u),bt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function nt(J){for(let ht=0;ht<J.removed.length;ht++){const Tt=J.removed[ht],Dt=D.indexOf(Tt);Dt>=0&&(D[Dt]=null,U[Dt].disconnect(Tt))}for(let ht=0;ht<J.added.length;ht++){const Tt=J.added[ht];let Dt=D.indexOf(Tt);if(Dt===-1){for(let At=0;At<U.length;At++)if(At>=D.length){D.push(Tt),Dt=At;break}else if(D[At]===null){D[At]=Tt,Dt=At;break}if(Dt===-1)break}const _t=U[Dt];_t&&_t.connect(Tt)}}const it=new at,dt=new at;function vt(J,ht,Tt){it.setFromMatrixPosition(ht.matrixWorld),dt.setFromMatrixPosition(Tt.matrixWorld);const Dt=it.distanceTo(dt),_t=ht.projectionMatrix.elements,At=Tt.projectionMatrix.elements,Ie=_t[14]/(_t[10]-1),ue=_t[14]/(_t[10]+1),me=(_t[9]+1)/_t[5],ge=(_t[9]-1)/_t[5],jt=(_t[8]-1)/_t[0],ee=(At[8]+1)/At[0],be=Ie*jt,dn=Ie*ee,ze=Dt/(-jt+ee),$e=ze*-jt;if(ht.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX($e),J.translateZ(ze),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),_t[10]===-1)J.projectionMatrix.copy(ht.projectionMatrix),J.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Q=Ie+ze,nn=ue+ze,Pe=be-$e,P=dn+(Dt-$e),y=me*ue/nn*Q,et=ge*ue/nn*Q;J.projectionMatrix.makePerspective(Pe,P,y,et,Q,nn),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Gt(J,ht){ht===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ht.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(u===null)return;let ht=J.near,Tt=J.far;M.texture!==null&&(M.depthNear>0&&(ht=M.depthNear),M.depthFar>0&&(Tt=M.depthFar)),Y.near=z.near=N.near=ht,Y.far=z.far=N.far=Tt,(V!==Y.near||Z!==Y.far)&&(u.updateRenderState({depthNear:Y.near,depthFar:Y.far}),V=Y.near,Z=Y.far),Y.layers.mask=J.layers.mask|6,N.layers.mask=Y.layers.mask&-5,z.layers.mask=Y.layers.mask&-3;const Dt=J.parent,_t=Y.cameras;Gt(Y,Dt);for(let At=0;At<_t.length;At++)Gt(_t[At],Dt);_t.length===2?vt(Y,N,z):Y.projectionMatrix.copy(N.projectionMatrix),L===null&&J.isPerspectiveCamera&&(L={camera:J,fov:J.fov,zoom:J.zoom}),zt(J,Y,Dt)};function zt(J,ht,Tt){Tt===null?J.matrix.copy(ht.matrixWorld):(J.matrix.copy(Tt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ht.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ht.projectionMatrix),J.projectionMatrixInverse.copy(ht.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Np*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(_===null&&T===null))return g},this.setFoveation=function(J){g=J,_!==null&&(_.fixedFoveation=J),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(J){return x[J]};let H=null;function pt(J,ht){if(S=ht.getViewerPose(m||d),R=ht,S!==null){const Tt=S.views;T!==null&&(e.setRenderTargetFramebuffer(C,T.framebuffer),e.setRenderTarget(C));let Dt=!1;Tt.length!==Y.cameras.length&&(Y.cameras.length=0,Dt=!0);for(let ue=0;ue<Tt.length;ue++){const me=Tt[ue];let ge=null;if(T!==null)ge=T.getViewport(me);else{const ee=v.getViewSubImage(_,me);ge=ee.viewport,ue===0&&(e.setRenderTargetTextures(C,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(C))}let jt=G[ue];jt===void 0&&(jt=new di,jt.layers.enable(ue),jt.viewport=new rn,G[ue]=jt),jt.matrix.fromArray(me.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(me.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(ge.x,ge.y,ge.width,ge.height),ue===0&&(Y.matrix.copy(jt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Dt===!0&&Y.cameras.push(jt)}const _t=u.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&O){v=s.getBinding();const ue=v.getDepthInformation(Tt[0]);ue&&ue.isValid&&ue.texture&&M.init(ue,u.renderState)}if(_t&&_t.includes("camera-access")&&O){e.state.unbindTexture(),v=s.getBinding();for(let ue=0;ue<Tt.length;ue++){const me=Tt[ue].camera;if(me){let ge=x[me];ge||(ge=new gx,x[me]=ge);const jt=v.getCameraImage(me);ge.sourceTexture=jt}}}}for(let Tt=0;Tt<U.length;Tt++){const Dt=D[Tt],_t=U[Tt];Dt!==null&&_t!==void 0&&_t.update(Dt,ht,m||d)}H&&H(J,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),R=null}const bt=new Ex;bt.setAnimationLoop(pt),this.setAnimationLoop=function(J){H=J},this.dispose=function(){}}}const WC=new en,Dx=new de;Dx.set(-1,0,0,0,1,0,0,0,1);function qC(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,_x(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function u(M,x,w,F,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?f(M,x):x.isMeshLambertMaterial?(f(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(f(M,x),v(M,x)):x.isMeshPhongMaterial?(f(M,x),S(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(f(M,x),_(M,x),x.isMeshPhysicalMaterial&&T(M,x,C)):x.isMeshMatcapMaterial?(f(M,x),R(M,x)):x.isMeshDepthMaterial?f(M,x):x.isMeshDistanceMaterial?(f(M,x),O(M,x)):x.isMeshNormalMaterial?f(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?g(M,x,w,F):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===jn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===jn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const w=e.get(x),F=w.envMap,C=w.envMapRotation;F&&(M.envMap.value=F,M.envMapRotation.value.setFromMatrix4(WC.makeRotationFromEuler(C)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Dx),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function g(M,x,w,F){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*w,M.scale.value=F*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function S(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function v(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function T(M,x,w){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.retroreflectivity>0&&(M.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function R(M,x){x.matcap&&(M.matcap.value=x.matcap)}function O(M,x){const w=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function YC(o,e,i,s){let u={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(C,U){const D=U.program;s.uniformBlockBinding(C,D)}function m(C,U){let D=u[C.id];D===void 0&&(M(C),D=S(C),u[C.id]=D,C.addEventListener("dispose",w));const I=U.program;s.updateUBOMapping(C,I);const E=e.render.frame;f[C.id]!==E&&(_(C),f[C.id]=E)}function S(C){const U=v();C.__bindingPointIndex=U;const D=o.createBuffer(),I=C.__size,E=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,I,E),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,D),D}function v(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const U=u[C.id],D=C.uniforms,I=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let E=0,L=D.length;E<L;E++){const N=D[E];if(Array.isArray(N))for(let z=0,G=N.length;z<G;z++)T(N[z],E,z,I);else T(N,E,0,I)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function T(C,U,D,I){if(O(C,U,D,I)===!0){const E=C.__offset,L=C.value;if(Array.isArray(L)){let N=0;for(let z=0;z<L.length;z++){const G=L[z],Y=x(G);R(G,C.__data,N),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(L,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,E,C.__data)}}function R(C,U,D){typeof C=="number"||typeof C=="boolean"?U[0]=C:C.isMatrix3?(U[0]=C.elements[0],U[1]=C.elements[1],U[2]=C.elements[2],U[3]=0,U[4]=C.elements[3],U[5]=C.elements[4],U[6]=C.elements[5],U[7]=0,U[8]=C.elements[6],U[9]=C.elements[7],U[10]=C.elements[8],U[11]=0):ArrayBuffer.isView(C)?U.set(new C.constructor(C.buffer,C.byteOffset,U.length)):C.toArray(U,D)}function O(C,U,D,I){const E=C.value,L=U+"_"+D;if(I[L]===void 0)return typeof E=="number"||typeof E=="boolean"?I[L]=E:ArrayBuffer.isView(E)?I[L]=E.slice():I[L]=E.clone(),!0;{const N=I[L];if(typeof E=="number"||typeof E=="boolean"){if(N!==E)return I[L]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(N.equals(E)===!1)return N.copy(E),!0}}return!1}function M(C){const U=C.uniforms;let D=0;const I=16;for(let L=0,N=U.length;L<N;L++){const z=Array.isArray(U[L])?U[L]:[U[L]];for(let G=0,Y=z.length;G<Y;G++){const V=z[G],Z=Array.isArray(V.value)?V.value:[V.value];for(let X=0,W=Z.length;X<W;X++){const nt=Z[X],it=x(nt),dt=D%I,vt=dt%it.boundary,Gt=dt+vt;D+=vt,Gt!==0&&I-Gt<it.storage&&(D+=I-Gt),V.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=D,D+=it.storage}}}const E=D%I;return E>0&&(D+=I-E),C.__size=D,C.__cache={},this}function x(C){const U={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(U.boundary=4,U.storage=4):C.isVector2?(U.boundary=8,U.storage=8):C.isVector3||C.isColor?(U.boundary=16,U.storage=12):C.isVector4?(U.boundary=16,U.storage=16):C.isMatrix3?(U.boundary=48,U.storage=48):C.isMatrix4?(U.boundary=64,U.storage=64):C.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(U.boundary=16,U.storage=C.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",C),U}function w(C){const U=C.target;U.removeEventListener("dispose",w);const D=d.indexOf(U.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(u[U.id]),delete u[U.id],delete f[U.id]}function F(){for(const C in u)o.deleteBuffer(u[C]);d=[],u={},f={}}return{bind:g,update:m,dispose:F}}const ZC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let na=null;function KC(){return na===null&&(na=new FT(ZC,16,16,Qr,la),na.name="DFG_LUT",na.minFilter=zn,na.magFilter=zn,na.wrapS=Na,na.wrapT=Na,na.generateMipmaps=!1,na.needsUpdate=!0),na}class Ux{constructor(e={}){const{canvas:i=pT(),context:s=null,depth:u=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:m=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:T=hi}=e;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=d;const O=T,M=new Set([Yp,qp,Wp]),x=new Set([hi,oa,_l,vl,Xp,kp]),w=new Uint32Array(4),F=new Int32Array(4),C=new at;let U=null,D=null;const I=[],E=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let z=!1,G=null,Y=null,V=null,Z=null;this._outputColorSpace=Jn;let X=0,W=0,nt=null,it=-1,dt=null;const vt=new rn,Gt=new rn;let zt=null;const H=new Oe(0);let pt=0,bt=i.width,J=i.height,ht=1,Tt=null,Dt=null;const _t=new rn(0,0,bt,J),At=new rn(0,0,bt,J);let Ie=!1;const ue=new jp;let me=!1,ge=!1;const jt=new en,ee=new at,be=new rn,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function $e(){return nt===null?ht:1}let Q=s;function nn(b,k){return i.getContext(b,k)}let Pe,P,y,et,ut,mt,Rt,Ut,gt,yt,wt,$t,It,Pt,kt,ie,le,K,Ct,Mt,Nt,Xt,Et;try{const b={alpha:!0,depth:u,stencil:f,antialias:h,premultipliedAlpha:g,preserveDrawingBuffer:m,powerPreference:S,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gp}`),i.addEventListener("webglcontextlost",we,!1),i.addEventListener("webglcontextrestored",ce,!1),i.addEventListener("webglcontextcreationerror",ti,!1),Q===null){const k="webgl2";if(Q=nn(k,b),Q===null)throw nn(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(b){throw i.removeEventListener("webglcontextlost",we,!1),i.removeEventListener("webglcontextrestored",ce,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),Be("WebGLRenderer: "+b.message),b}function Jt(){Pe=new KA(Q),Pe.init(),Nt=new HC(Q,Pe),P=new FA(Q,Pe,e,Nt),y=new BC(Q,Pe),P.reversedDepthBuffer&&_&&y.buffers.depth.setReversed(!0),Y=Q.createFramebuffer(),V=Q.createFramebuffer(),Z=Q.createFramebuffer(),et=new jA(Q),ut=new TC,mt=new FC(Q,Pe,y,ut,P,Nt,et),Rt=new ZA(N),Ut=new tb(Q),Xt=new zA(Q,Ut),gt=new QA(Q,Ut,et,Xt),yt=new tR(Q,gt,Ut,Xt,et),K=new $A(Q,P,mt),kt=new HA(ut),wt=new EC(N,Rt,Pe,P,Xt,kt),$t=new qC(N,ut),It=new AC,Pt=new NC(Pe),le=new IA(N,Rt,y,yt,R,g),ie=new zC(N,yt,P),Et=new YC(Q,et,P,y),Ct=new BA(Q,Pe,et),Mt=new JA(Q,Pe,et),et.programs=wt.programs,N.capabilities=P,N.extensions=Pe,N.properties=ut,N.renderLists=It,N.shadowMap=ie,N.state=y,N.info=et}O!==hi&&(L=new nR(O,i.width,i.height,h,u,f));const Vt=new kC(N,Q);this.xr=Vt,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const b=Pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(b){b!==void 0&&(ht=b,this.setSize(bt,J,!1))},this.getSize=function(b){return b.set(bt,J)},this.setSize=function(b,k,ft=!0){if(Vt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}bt=b,J=k,i.width=Math.floor(b*ht),i.height=Math.floor(k*ht),ft===!0&&(i.style.width=b+"px",i.style.height=k+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(bt*ht,J*ht).floor()},this.setDrawingBufferSize=function(b,k,ft){bt=b,J=k,ht=ft,i.width=Math.floor(b*ft),i.height=Math.floor(k*ft),this.setViewport(0,0,b,k)},this.setEffects=function(b){if(O===hi){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let k=0;k<b.length;k++)if(b[k].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(vt)},this.getViewport=function(b){return b.copy(_t)},this.setViewport=function(b,k,ft,st){b.isVector4?_t.set(b.x,b.y,b.z,b.w):_t.set(b,k,ft,st),y.viewport(vt.copy(_t).multiplyScalar(ht).round())},this.getScissor=function(b){return b.copy(At)},this.setScissor=function(b,k,ft,st){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,k,ft,st),y.scissor(Gt.copy(At).multiplyScalar(ht).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(b){y.setScissorTest(Ie=b)},this.setOpaqueSort=function(b){Tt=b},this.setTransparentSort=function(b){Dt=b},this.getClearColor=function(b){return b.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,ft=!0){let st=0;if(b){let ot=!1;if(nt!==null){const Bt=nt.texture.format;ot=M.has(Bt)}if(ot){const Bt=nt.texture.type,Wt=x.has(Bt),Lt=le.getClearColor(),Zt=le.getClearAlpha(),Kt=Lt.r,re=Lt.g,fe=Lt.b;Wt?(w[0]=Kt,w[1]=re,w[2]=fe,w[3]=Zt,Q.clearBufferuiv(Q.COLOR,0,w)):(F[0]=Kt,F[1]=re,F[2]=fe,F[3]=Zt,Q.clearBufferiv(Q.COLOR,0,F))}else st|=Q.COLOR_BUFFER_BIT}k&&(st|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ft&&(st|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&Q.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),G=b},this.dispose=function(){i.removeEventListener("webglcontextlost",we,!1),i.removeEventListener("webglcontextrestored",ce,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),le.dispose(),It.dispose(),Pt.dispose(),ut.dispose(),Rt.dispose(),yt.dispose(),Xt.dispose(),Et.dispose(),wt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Sr),Vt.removeEventListener("sessionend",Ba),Gi.stop()};function we(b){b.preventDefault(),Iv("WebGLRenderer: Context Lost."),z=!0}function ce(){Iv("WebGLRenderer: Context Restored."),z=!1;const b=et.autoReset,k=ie.enabled,ft=ie.autoUpdate,st=ie.needsUpdate,ot=ie.type;Jt(),et.autoReset=b,ie.enabled=k,ie.autoUpdate=ft,ie.needsUpdate=st,ie.type=ot}function ti(b){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function mi(b){const k=b.target;k.removeEventListener("dispose",mi),Lc(k)}function Lc(b){jr(b),ut.remove(b)}function jr(b){const k=ut.get(b).programs;k!==void 0&&(k.forEach(function(ft){wt.releaseProgram(ft)}),b.isShaderMaterial&&wt.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,ft,st,ot,Bt){k===null&&(k=dn);const Wt=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,Lt=mo(b,k,ft,st,ot);y.setMaterial(st,Wt);let Zt=ft.index,Kt=1;if(st.wireframe===!0){if(Zt=gt.getWireframeAttribute(ft),Zt===void 0)return;Kt=2}const re=ft.drawRange,fe=ft.attributes.position;let qt=re.start*Kt,Me=(re.start+re.count)*Kt;Bt!==null&&(qt=Math.max(qt,Bt.start*Kt),Me=Math.min(Me,(Bt.start+Bt.count)*Kt)),Zt!==null?(qt=Math.max(qt,0),Me=Math.min(Me,Zt.count)):fe!=null&&(qt=Math.max(qt,0),Me=Math.min(Me,fe.count));const ve=Me-qt;if(ve<0||ve===1/0)return;Xt.setup(ot,st,Lt,ft,Zt);let Ye,Ge=Ct;if(Zt!==null&&(Ye=Ut.get(Zt),Ge=Mt,Ge.setIndex(Ye)),ot.isMesh)st.wireframe===!0?(y.setLineWidth(st.wireframeLinewidth*$e()),Ge.setMode(Q.LINES)):Ge.setMode(Q.TRIANGLES);else if(ot.isLine){let vn=st.linewidth;vn===void 0&&(vn=1),y.setLineWidth(vn*$e()),ot.isLineSegments?Ge.setMode(Q.LINES):ot.isLineLoop?Ge.setMode(Q.LINE_LOOP):Ge.setMode(Q.LINE_STRIP)}else ot.isPoints?Ge.setMode(Q.POINTS):ot.isSprite&&Ge.setMode(Q.TRIANGLES);if(ot.isBatchedMesh)if(Pe.get("WEBGL_multi_draw"))Ge.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{const vn=ot._multiDrawStarts,Ft=ot._multiDrawCounts,sn=ot._multiDrawCount,De=Zt?Ut.get(Zt).bytesPerElement:1,Fn=ut.get(st).currentProgram.getUniforms();for(let ei=0;ei<sn;ei++)Fn.setValue(Q,"_gl_DrawID",ei),Ge.render(vn[ei]/De,Ft[ei])}else if(ot.isInstancedMesh)Ge.renderInstances(qt,ve,ot.count);else if(ft.isInstancedBufferGeometry){const vn=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Ft=Math.min(ft.instanceCount,vn);Ge.renderInstances(qt,ve,Ft)}else Ge.render(qt,ve)};function vr(b,k,ft,st){G!==null&&b.isNodeMaterial&&G.setObject(st,b),me===!0&&kt.setState(b,ft,!1),b.transparent===!0&&b.side===Ii&&b.forceSinglePass===!1?(b.side=jn,b.needsUpdate=!0,xr(b,k,st),b.side=Zr,b.needsUpdate=!0,xr(b,k,st),b.side=Ii):xr(b,k,st)}this.compile=function(b,k,ft=null){ft===null&&(ft=b),G!==null&&G.renderStart(b,k,ft),D=Pt.get(ft),D.init(k),E.push(D),ft.traverseVisible(function(ot){ot.isLight&&ot.layers.test(k.layers)&&(D.pushLight(ot),ot.castShadow&&D.pushShadow(ot))}),b!==ft&&b.traverseVisible(function(ot){ot.isLight&&ot.layers.test(k.layers)&&(D.pushLight(ot),ot.castShadow&&D.pushShadow(ot))}),D.setupLights(),G!==null&&G.updateLights(D.state.lightsArray),ge=this.localClippingEnabled,me=kt.init(this.clippingPlanes,ge),me===!0&&kt.setGlobalState(this.clippingPlanes,k),G!==null&&ie.render(D.state.shadowsArray,ft,k);const st=new Set;return b.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;const Bt=ot.material;if(Bt)if(Array.isArray(Bt))for(let Wt=0;Wt<Bt.length;Wt++){const Lt=Bt[Wt];vr(Lt,ft,k,ot),st.add(Lt)}else vr(Bt,ft,k,ot),st.add(Bt)}),D=E.pop(),G!==null&&G.renderEnd(),st},this.compileAsync=function(b,k,ft=null){const st=this.compile(b,k,ft);return new Promise(ot=>{function Bt(){if(st.forEach(function(Wt){const Zt=ut.get(Wt).currentProgram;(Zt===void 0||Zt.isReady())&&st.delete(Wt)}),st.size===0){ot(b);return}setTimeout(Bt,10)}Pe.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let za=null;function da(b){za&&za(b)}function Sr(){Gi.stop()}function Ba(){Gi.start()}const Gi=new Ex;Gi.setAnimationLoop(da),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(b){za=b,Vt.setAnimationLoop(b),b===null?Gi.stop():Gi.start()},Vt.addEventListener("sessionstart",Sr),Vt.addEventListener("sessionend",Ba),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;G!==null&&G.renderStart(b,k);const ft=Vt.enabled===!0&&Vt.isPresenting===!0,st=L!==null&&(nt===null||ft)&&L.begin(N,nt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(k),k=Vt.getCamera()),b.isScene===!0&&b.onBeforeRender(N,b,k,nt),D=Pt.get(b,E.length),D.init(k),D.state.textureUnits=mt.getTextureUnits(),E.push(D),jt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ue.setFromProjectionMatrix(jt,ra,k.reversedDepth),ge=this.localClippingEnabled,me=kt.init(this.clippingPlanes,ge),U=It.get(b,I.length),U.init(),I.push(U),Vt.enabled===!0&&Vt.isPresenting===!0){const Wt=N.xr.getDepthSensingMesh();Wt!==null&&uo(Wt,k,-1/0,N.sortObjects)}uo(b,k,0,N.sortObjects),U.finish(),G!==null&&G.updateLights(D.state.lightsArray),N.sortObjects===!0&&U.sort(Tt,Dt),ze=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,ze&&le.addToRenderList(U,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),me===!0&&kt.beginShadows();const ot=D.state.shadowsArray;if(ie.render(ot,b,k),me===!0&&kt.endShadows(),(st&&L.hasRenderPass())===!1){const Wt=U.opaque,Lt=U.transmissive;if(D.setupLights(),k.isArrayCamera){const Zt=k.cameras;if(Lt.length>0)for(let Kt=0,re=Zt.length;Kt<re;Kt++){const fe=Zt[Kt];$r(Wt,Lt,b,fe)}ze&&le.render(b);for(let Kt=0,re=Zt.length;Kt<re;Kt++){const fe=Zt[Kt];co(U,b,fe,fe.viewport)}}else Lt.length>0&&$r(Wt,Lt,b,k),ze&&le.render(b),co(U,b,k)}nt!==null&&W===0&&(mt.updateMultisampleRenderTarget(nt),mt.updateRenderTargetMipmap(nt)),st&&L.end(N),b.isScene===!0&&b.onAfterRender(N,b,k),Xt.resetDefaultState(),it=-1,dt=null,E.pop(),E.length>0?(D=E[E.length-1],mt.setTextureUnits(D.state.textureUnits),me===!0&&kt.setGlobalState(N.clippingPlanes,D.state.camera)):D=null,I.pop(),I.length>0?U=I[I.length-1]:U=null,G!==null&&G.renderEnd()};function uo(b,k,ft,st){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)ft=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLightProbeGrid)D.pushLightProbeGrid(b);else if(b.isLight)D.pushLight(b),b.castShadow&&D.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(ue)){st&&be.setFromMatrixPosition(b.matrixWorld).applyMatrix4(jt);const Wt=yt.update(b),Lt=b.material;Lt.visible&&U.push(b,Wt,Lt,ft,be.z,null,k)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(ue))){const Wt=yt.update(b),Lt=b.material;if(st&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),be.copy(b.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),be.copy(Wt.boundingSphere.center)),be.applyMatrix4(b.matrixWorld).applyMatrix4(jt)),Array.isArray(Lt)){const Zt=Wt.groups;for(let Kt=0,re=Zt.length;Kt<re;Kt++){const fe=Zt[Kt],qt=Lt[fe.materialIndex];qt&&qt.visible&&U.push(b,Wt,qt,ft,be.z,fe,k)}}else Lt.visible&&U.push(b,Wt,Lt,ft,be.z,null,k)}}const Bt=b.children;for(let Wt=0,Lt=Bt.length;Wt<Lt;Wt++)uo(Bt[Wt],k,ft,st)}function co(b,k,ft,st){const{opaque:ot,transmissive:Bt,transparent:Wt}=b;D.setupLightsView(ft),me===!0&&kt.setGlobalState(N.clippingPlanes,ft),st&&y.viewport(vt.copy(st)),ot.length>0&&Vi(ot,k,ft),Bt.length>0&&Vi(Bt,k,ft),Wt.length>0&&Vi(Wt,k,ft),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function $r(b,k,ft,st){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[st.id]===void 0){const qt=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[st.id]=new Fi(1,1,{generateMipmaps:!0,type:qt?la:hi,minFilter:qr,samples:Math.max(4,P.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ue.workingColorSpace})}const Bt=D.state.transmissionRenderTarget[st.id],Wt=st.viewport||vt;Bt.setSize(Wt.z*N.transmissionResolutionScale,Wt.w*N.transmissionResolutionScale);const Lt=N.getRenderTarget(),Zt=N.getActiveCubeFace(),Kt=N.getActiveMipmapLevel();N.setRenderTarget(Bt),N.getClearColor(H),pt=N.getClearAlpha(),pt<1&&N.setClearColor(16777215,.5),N.clear(),ze&&le.render(ft);const re=N.toneMapping;N.toneMapping=sa;const fe=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),D.setupLightsView(st),me===!0&&kt.setGlobalState(N.clippingPlanes,st),Vi(b,ft,st),mt.updateMultisampleRenderTarget(Bt),mt.updateRenderTargetMipmap(Bt),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Me=0,ve=k.length;Me<ve;Me++){const Ye=k[Me],{object:Ge,geometry:vn,material:Ft,group:sn}=Ye;if(Ft.side===Ii&&Ge.layers.test(st.layers)){const De=Ft.side;Ft.side=jn,Ft.needsUpdate=!0,bl(Ge,ft,st,vn,Ft,sn),Ft.side=De,Ft.needsUpdate=!0,qt=!0}}qt===!0&&(mt.updateMultisampleRenderTarget(Bt),mt.updateRenderTargetMipmap(Bt))}N.setRenderTarget(Lt,Zt,Kt),N.setClearColor(H,pt),fe!==void 0&&(st.viewport=fe),N.toneMapping=re}function Vi(b,k,ft){const st=k.isScene===!0?k.overrideMaterial:null;for(let ot=0,Bt=b.length;ot<Bt;ot++){const Wt=b[ot],{object:Lt,geometry:Zt,group:Kt}=Wt;let re=Wt.material;re.allowOverride===!0&&st!==null&&(re=st),Lt.layers.test(ft.layers)&&bl(Lt,k,ft,Zt,re,Kt)}}function bl(b,k,ft,st,ot,Bt){G!==null&&ot.isNodeMaterial&&G.setObject(b,ot),b.onBeforeRender(N,k,ft,st,ot,Bt),b.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ot.onBeforeRender(N,k,ft,st,b,Bt),ot.transparent===!0&&ot.side===Ii&&ot.forceSinglePass===!1?(ot.side=jn,ot.needsUpdate=!0,N.renderBufferDirect(ft,k,st,ot,b,Bt),ot.side=Zr,ot.needsUpdate=!0,N.renderBufferDirect(ft,k,st,ot,b,Bt),ot.side=Ii):N.renderBufferDirect(ft,k,st,ot,b,Bt),b.onAfterRender(N,k,ft,st,ot,Bt)}function xr(b,k,ft){k.isScene!==!0&&(k=dn);const st=ut.get(b),ot=D.state.lights,Bt=D.state.shadowsArray,Wt=ot.state.version,Lt=wt.getParameters(b,ot.state,Bt,k,ft,D.state.lightProbeGridArray),Zt=wt.getProgramCacheKey(Lt);let Kt=st.programs;st.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,st.fog=k.fog;const re=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;st.envMap=Rt.get(b.envMap||st.environment,re),st.envMapRotation=st.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Kt===void 0&&(b.addEventListener("dispose",mi),Kt=new Map,st.programs=Kt);let fe=Kt.get(Zt);if(fe!==void 0){if(st.currentProgram===fe&&st.lightsStateVersion===Wt)return ho(b,Lt),fe}else Lt.uniforms=wt.getUniforms(b),G!==null&&b.isNodeMaterial&&G.build(b,ft,Lt),b.onBeforeCompile(Lt,N),fe=wt.acquireProgram(Lt,Zt),Kt.set(Zt,fe),st.uniforms=Lt.uniforms;const qt=st.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qt.clippingPlanes=kt.uniform),ho(b,Lt),st.needsLights=Rl(b),st.lightsStateVersion=Wt,st.needsLights&&(qt.ambientLightColor.value=ot.state.ambient,qt.lightProbe.value=ot.state.probe,qt.sunLights.value=ot.state.sun,qt.sunLightShadows.value=ot.state.sunShadow,qt.directionalLights.value=ot.state.directional,qt.directionalLightShadows.value=ot.state.directionalShadow,qt.spotLights.value=ot.state.spot,qt.spotLightShadows.value=ot.state.spotShadow,qt.rectAreaLights.value=ot.state.rectArea,qt.ltc_1.value=ot.state.rectAreaLTC1,qt.ltc_2.value=ot.state.rectAreaLTC2,qt.pointLights.value=ot.state.point,qt.pointLightShadows.value=ot.state.pointShadow,qt.hemisphereLights.value=ot.state.hemi,qt.sunShadowMatrix.value=ot.state.sunShadowMatrix,qt.sunShadowCascade.value=ot.state.sunShadowCascade,qt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,qt.spotLightMatrix.value=ot.state.spotLightMatrix,qt.spotLightMap.value=ot.state.spotLightMap,qt.pointShadowMatrix.value=ot.state.pointShadowMatrix),st.lightProbeGrid=D.state.lightProbeGridArray.length>0,st.currentProgram=fe,st.uniformsList=null,fe}function fo(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=yc.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function ho(b,k){const ft=ut.get(b);ft.outputColorSpace=k.outputColorSpace,ft.batching=k.batching,ft.batchingColor=k.batchingColor,ft.instancing=k.instancing,ft.instancingColor=k.instancingColor,ft.instancingMorph=k.instancingMorph,ft.skinning=k.skinning,ft.morphTargets=k.morphTargets,ft.morphNormals=k.morphNormals,ft.morphColors=k.morphColors,ft.morphTargetsCount=k.morphTargetsCount,ft.numClippingPlanes=k.numClippingPlanes,ft.numIntersection=k.numClipIntersection,ft.vertexAlphas=k.vertexAlphas,ft.vertexTangents=k.vertexTangents,ft.toneMapping=k.toneMapping}function po(b,k){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;C.setFromMatrixPosition(k.matrixWorld);for(let ft=0,st=b.length;ft<st;ft++){const ot=b[ft];if(ot.texture!==null&&ot.boundingBox.containsPoint(C))return ot}return null}function mo(b,k,ft,st,ot){k.isScene!==!0&&(k=dn),mt.resetTextureUnits();const Bt=k.fog,Wt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?k.environment:null,Lt=nt===null?N.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Ue.workingColorSpace,Zt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Kt=Rt.get(st.envMap||Wt,Zt),re=st.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,fe=!!ft.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),qt=!!ft.morphAttributes.position,Me=!!ft.morphAttributes.normal,ve=!!ft.morphAttributes.color;let Ye=sa;st.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ye=N.toneMapping);const Ge=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,vn=Ge!==void 0?Ge.length:0,Ft=ut.get(st),sn=D.state.lights;if(me===!0&&(ge===!0||b!==dt)){const Ae=b===dt&&st.id===it;kt.setState(st,b,Ae)}let De=!1;st.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==sn.state.version||Ft.outputColorSpace!==Lt||ot.isBatchedMesh&&Ft.batching===!1||!ot.isBatchedMesh&&Ft.batching===!0||ot.isBatchedMesh&&Ft.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&Ft.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&Ft.instancing===!1||!ot.isInstancedMesh&&Ft.instancing===!0||ot.isSkinnedMesh&&Ft.skinning===!1||!ot.isSkinnedMesh&&Ft.skinning===!0||ot.isInstancedMesh&&Ft.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Ft.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Ft.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Ft.instancingMorph===!1&&ot.morphTexture!==null||Ft.envMap!==Kt||st.fog===!0&&Ft.fog!==Bt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==kt.numPlanes||Ft.numIntersection!==kt.numIntersection)||Ft.vertexAlphas!==re||Ft.vertexTangents!==fe||Ft.morphTargets!==qt||Ft.morphNormals!==Me||Ft.morphColors!==ve||Ft.toneMapping!==Ye||Ft.morphTargetsCount!==vn||!!Ft.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(De=!0):(De=!0,Ft.__version=st.version);let Fn=Ft.currentProgram;De===!0&&(Fn=xr(st,k,ot),G&&st.isNodeMaterial&&G.onUpdateProgram(st,Fn,Ft));let ei=!1,Xi=!1,Se=!1;const Fe=Fn.getUniforms(),Qe=Ft.uniforms;if(y.useProgram(Fn.program)&&(ei=!0,Xi=!0,Se=!0),st.id!==it&&(it=st.id,Xi=!0),Ft.needsLights){const Ae=po(D.state.lightProbeGridArray,ot);Ft.lightProbeGrid!==Ae&&(Ft.lightProbeGrid=Ae,Xi=!0)}if(ei||dt!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Fe.setValue(Q,"projectionMatrix",b.projectionMatrix),Fe.setValue(Q,"viewMatrix",b.matrixWorldInverse);const on=Fe.map.cameraPosition;on!==void 0&&on.setValue(Q,ee.setFromMatrixPosition(b.matrixWorld)),P.logarithmicDepthBuffer&&Fe.setValue(Q,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Fe.setValue(Q,"isOrthographic",b.isOrthographicCamera===!0),dt!==b&&(dt=b,Xi=!0,Se=!0)}if(Ft.needsLights&&(sn.state.sunShadowMap.length>0&&Fe.setValue(Q,"sunShadowMap",sn.state.sunShadowMap,mt),sn.state.directionalShadowMap.length>0&&Fe.setValue(Q,"directionalShadowMap",sn.state.directionalShadowMap,mt),sn.state.spotShadowMap.length>0&&Fe.setValue(Q,"spotShadowMap",sn.state.spotShadowMap,mt),sn.state.pointShadowMap.length>0&&Fe.setValue(Q,"pointShadowMap",sn.state.pointShadowMap,mt)),ot.isSkinnedMesh){Fe.setOptional(Q,ot,"bindMatrix"),Fe.setOptional(Q,ot,"bindMatrixInverse");const Ae=ot.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),Fe.setValue(Q,"boneTexture",Ae.boneTexture,mt))}ot.isBatchedMesh&&(Fe.setOptional(Q,ot,"batchingTexture"),Fe.setValue(Q,"batchingTexture",ot._matricesTexture,mt),Fe.setOptional(Q,ot,"batchingIdTexture"),Fe.setValue(Q,"batchingIdTexture",ot._indirectTexture,mt),Fe.setOptional(Q,ot,"batchingColorTexture"),ot._colorsTexture!==null&&Fe.setValue(Q,"batchingColorTexture",ot._colorsTexture,mt));const ni=ft.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&K.update(ot,ft,Fn),(Xi||Ft.receiveShadow!==ot.receiveShadow)&&(Ft.receiveShadow=ot.receiveShadow,Fe.setValue(Q,"receiveShadow",ot.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&k.environment!==null&&(Qe.envMapIntensity.value=k.environmentIntensity),Qe.dfgLUT!==void 0&&(Qe.dfgLUT.value=KC()),Xi){if(Fe.setValue(Q,"toneMappingExposure",N.toneMappingExposure),Ft.needsLights&&Al(Qe,Se),Bt&&st.fog===!0&&$t.refreshFogUniforms(Qe,Bt),$t.refreshMaterialUniforms(Qe,st,ht,J,D.state.transmissionRenderTarget[b.id]),Ft.needsLights&&Ft.lightProbeGrid){const Ae=Ft.lightProbeGrid;Qe.probesSH.value=Ae.texture,Qe.probesMin.value.copy(Ae.boundingBox.min),Qe.probesMax.value.copy(Ae.boundingBox.max),Qe.probesResolution.value.copy(Ae.resolution)}yc.upload(Q,fo(Ft),Qe,mt)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(yc.upload(Q,fo(Ft),Qe,mt),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Fe.setValue(Q,"center",ot.center),Fe.setValue(Q,"modelViewMatrix",ot.modelViewMatrix),Fe.setValue(Q,"normalMatrix",ot.normalMatrix),Fe.setValue(Q,"modelMatrix",ot.matrixWorld),st.uniformsGroups!==void 0){const Ae=st.uniformsGroups;for(let on=0,ha=Ae.length;on<ha;on++){const Cl=Ae[on];Et.update(Cl,Fn),Et.bind(Cl,Fn)}}return Fn}function Al(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.sunLights.needsUpdate=k,b.sunLightShadows.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Rl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(b,k,ft){const st=ut.get(b);st.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),ut.get(b.texture).__webglTexture=k,ut.get(b.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ft,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const ft=ut.get(b);ft.__webglFramebuffer=k,ft.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,ft=0){nt=b,X=k,W=ft;let st=null,ot=!1,Bt=!1;if(b){const Lt=ut.get(b);if(Lt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(Q.FRAMEBUFFER,Lt.__webglFramebuffer),vt.copy(b.viewport),Gt.copy(b.scissor),zt=b.scissorTest,y.viewport(vt),y.scissor(Gt),y.setScissorTest(zt),it=-1;return}else if(Lt.__webglFramebuffer===void 0)mt.setupRenderTarget(b);else if(Lt.__hasExternalTextures)mt.rebindTextures(b,ut.get(b.texture).__webglTexture,ut.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const re=b.depthTexture;if(Lt.__boundDepthTexture!==re){if(re!==null&&ut.has(re)&&(b.width!==re.image.width||b.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");mt.setupDepthRenderbuffer(b)}}const Zt=b.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Bt=!0);const Kt=ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Kt[k])?st=Kt[k][ft]:st=Kt[k],ot=!0):b.samples>0&&mt.useMultisampledRTT(b)===!1?st=ut.get(b).__webglMultisampledFramebuffer:Array.isArray(Kt)?st=Kt[ft]:st=Kt,vt.copy(b.viewport),Gt.copy(b.scissor),zt=b.scissorTest}else vt.copy(_t).multiplyScalar(ht).floor(),Gt.copy(At).multiplyScalar(ht).floor(),zt=Ie;if(ft!==0&&(st=Y),y.bindFramebuffer(Q.FRAMEBUFFER,st)&&y.drawBuffers(b,st),y.viewport(vt),y.scissor(Gt),y.setScissorTest(zt),ot){const Lt=ut.get(b.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+k,Lt.__webglTexture,ft)}else if(Bt){const Lt=k;for(let Zt=0;Zt<b.textures.length;Zt++){const Kt=ut.get(b.textures[Zt]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+Zt,Kt.__webglTexture,ft,Lt)}}else if(b!==null&&ft!==0){const Lt=ut.get(b.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Lt.__webglTexture,ft)}it=-1};function gi(b){const k=ut.get(b);return(k.__readFormat!==b.format||k.__readType!==b.type)&&(k.__readFormat=b.format,k.__readType=b.type,k.__formatReadable=P.textureFormatReadable(b.format),k.__typeReadable=P.textureTypeReadable(b.type)),k}this.readRenderTargetPixels=function(b,k,ft,st,ot,Bt,Wt,Lt=0){if(!(b&&b.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Wt!==void 0&&(Zt=Zt[Wt]),Zt){y.bindFramebuffer(Q.FRAMEBUFFER,Zt);try{const Kt=b.textures[Lt],re=Kt.format,fe=Kt.type;b.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Lt);const qt=gi(Kt);if(qt.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qt.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-st&&ft>=0&&ft<=b.height-ot&&Q.readPixels(k,ft,st,ot,Nt.convert(re),Nt.convert(fe),Bt)}finally{const Kt=nt!==null?ut.get(nt).__webglFramebuffer:null;y.bindFramebuffer(Q.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(b,k,ft,st,ot,Bt,Wt,Lt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Wt!==void 0&&(Zt=Zt[Wt]),Zt)if(k>=0&&k<=b.width-st&&ft>=0&&ft<=b.height-ot){y.bindFramebuffer(Q.FRAMEBUFFER,Zt);const Kt=b.textures[Lt],re=Kt.format,fe=Kt.type;b.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Lt);const qt=gi(Kt);if(qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Me),Q.bufferData(Q.PIXEL_PACK_BUFFER,Bt.byteLength,Q.STREAM_READ),Q.readPixels(k,ft,st,ot,Nt.convert(re),Nt.convert(fe),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);const ve=nt!==null?ut.get(nt).__webglFramebuffer:null;y.bindFramebuffer(Q.FRAMEBUFFER,ve);const Ye=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await mT(Q,Ye,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Me),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Bt),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(Me),Q.deleteSync(Ye),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,ft=0){const st=Math.pow(2,-ft),ot=Math.floor(b.image.width*st),Bt=Math.floor(b.image.height*st),Wt=k!==null?k.x:0,Lt=k!==null?k.y:0;mt.setTexture2D(b,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,ft,0,0,Wt,Lt,ot,Bt),y.unbindTexture()},this.copyTextureToTexture=function(b,k,ft=null,st=null,ot=0,Bt=0){let Wt,Lt,Zt,Kt,re,fe,qt,Me,ve;const Ye=b.isCompressedTexture?b.mipmaps[Bt]:b.image;if(ft!==null)Wt=ft.max.x-ft.min.x,Lt=ft.max.y-ft.min.y,Zt=ft.isBox3?ft.max.z-ft.min.z:1,Kt=ft.min.x,re=ft.min.y,fe=ft.isBox3?ft.min.z:0;else{const Qe=Math.pow(2,-ot);Wt=Math.floor(Ye.width*Qe),Lt=Math.floor(Ye.height*Qe),b.isDataArrayTexture?Zt=Ye.depth:b.isData3DTexture?Zt=Math.floor(Ye.depth*Qe):Zt=1,Kt=0,re=0,fe=0}st!==null?(qt=st.x,Me=st.y,ve=st.z):(qt=0,Me=0,ve=0);const Ge=Nt.convert(k.format),vn=Nt.convert(k.type);let Ft;k.isData3DTexture?(mt.setTexture3D(k,0),Ft=Q.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(mt.setTexture2DArray(k,0),Ft=Q.TEXTURE_2D_ARRAY):(mt.setTexture2D(k,0),Ft=Q.TEXTURE_2D),y.activeTexture(Q.TEXTURE0),y.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,k.flipY),y.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),y.pixelStorei(Q.UNPACK_ALIGNMENT,k.unpackAlignment);const sn=y.getParameter(Q.UNPACK_ROW_LENGTH),De=y.getParameter(Q.UNPACK_IMAGE_HEIGHT),Fn=y.getParameter(Q.UNPACK_SKIP_PIXELS),ei=y.getParameter(Q.UNPACK_SKIP_ROWS),Xi=y.getParameter(Q.UNPACK_SKIP_IMAGES);y.pixelStorei(Q.UNPACK_ROW_LENGTH,Ye.width),y.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Ye.height),y.pixelStorei(Q.UNPACK_SKIP_PIXELS,Kt),y.pixelStorei(Q.UNPACK_SKIP_ROWS,re),y.pixelStorei(Q.UNPACK_SKIP_IMAGES,fe);const Se=b.isDataArrayTexture||b.isData3DTexture,Fe=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const Qe=ut.get(b),ni=ut.get(k),Ae=ut.get(Qe.__renderTarget),on=ut.get(ni.__renderTarget);y.bindFramebuffer(Q.READ_FRAMEBUFFER,Ae.__webglFramebuffer),y.bindFramebuffer(Q.DRAW_FRAMEBUFFER,on.__webglFramebuffer);for(let ha=0;ha<Zt;ha++)Se&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ut.get(b).__webglTexture,ot,fe+ha),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ut.get(k).__webglTexture,Bt,ve+ha)),Q.blitFramebuffer(Kt,re,Wt,Lt,qt,Me,Wt,Lt,Q.DEPTH_BUFFER_BIT,Q.NEAREST);y.bindFramebuffer(Q.READ_FRAMEBUFFER,null),y.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(ot!==0||b.isRenderTargetTexture||ut.has(b)){const Qe=ut.get(b),ni=ut.get(k);y.bindFramebuffer(Q.READ_FRAMEBUFFER,V),y.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Z);for(let Ae=0;Ae<Zt;Ae++)Se?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Qe.__webglTexture,ot,fe+Ae):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Qe.__webglTexture,ot),Fe?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ni.__webglTexture,Bt,ve+Ae):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,ni.__webglTexture,Bt),ot!==0?Q.blitFramebuffer(Kt,re,Wt,Lt,qt,Me,Wt,Lt,Q.COLOR_BUFFER_BIT,Q.NEAREST):Fe?Q.copyTexSubImage3D(Ft,Bt,qt,Me,ve+Ae,Kt,re,Wt,Lt):Q.copyTexSubImage2D(Ft,Bt,qt,Me,Kt,re,Wt,Lt);y.bindFramebuffer(Q.READ_FRAMEBUFFER,null),y.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else Fe?b.isDataTexture||b.isData3DTexture?Q.texSubImage3D(Ft,Bt,qt,Me,ve,Wt,Lt,Zt,Ge,vn,Ye.data):k.isCompressedArrayTexture?Q.compressedTexSubImage3D(Ft,Bt,qt,Me,ve,Wt,Lt,Zt,Ge,Ye.data):Q.texSubImage3D(Ft,Bt,qt,Me,ve,Wt,Lt,Zt,Ge,vn,Ye):b.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Bt,qt,Me,Wt,Lt,Ge,vn,Ye.data):b.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Bt,qt,Me,Ye.width,Ye.height,Ge,Ye.data):Q.texSubImage2D(Q.TEXTURE_2D,Bt,qt,Me,Wt,Lt,Ge,vn,Ye);y.pixelStorei(Q.UNPACK_ROW_LENGTH,sn),y.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,De),y.pixelStorei(Q.UNPACK_SKIP_PIXELS,Fn),y.pixelStorei(Q.UNPACK_SKIP_ROWS,ei),y.pixelStorei(Q.UNPACK_SKIP_IMAGES,Xi),Bt===0&&k.generateMipmaps&&Q.generateMipmap(Ft),y.unbindTexture()},this.initRenderTarget=function(b){ut.get(b).__webglFramebuffer===void 0&&mt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?mt.setTextureCube(b,0):b.isData3DTexture?mt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?mt.setTexture2DArray(b,0):mt.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){X=0,W=0,nt=null,y.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const AS=65,RS=.5,CS=10,QC=1500,JC=750,jC=260,io=Math.PI/180,$C=1.08,wS=.864,DS=(o,e,i)=>Math.min(i,Math.max(e,o)),US=o=>1-(1-o)**3,t3=[[1,1,1],[-1,1,1],[-1,1,-1],[1,1,-1],[1,-1,1],[-1,-1,1],[-1,-1,-1],[1,-1,-1]],e3=o=>{const e=new at(...o).normalize(),i=Math.abs(e.y)>.9?new at(0,0,1):new at(0,1,0),s=i.clone().sub(e.clone().multiplyScalar(i.dot(e))).normalize(),u=new at().crossVectors(s,e).normalize(),f=new en().makeBasis(u,s,e);return{normal:e,up:s,orientation:new fa().setFromRotationMatrix(f)}},NS=t3.map(e3),n3=o=>{const e=new at(0,0,1);return new fa().setFromUnitVectors(o.normal,e)},i3=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const s=i.getContext("2d");if(!s)return null;s.font="700 200px dice-font, system-ui, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillStyle=e,s.shadowColor="rgba(0, 0, 0, 0.35)",s.shadowBlur=6,s.fillText(String(o),128,136);const u=new mx(i);u.colorSpace=Jn;const f=new Dc({map:u,transparent:!0,side:Ii,depthWrite:!1});return new pi(new oo(wS,wS),f)},a3=o=>{const e=new ua().setFromQuaternion(o,"XYZ");return{x:e.x/io,y:e.y/io,z:e.z/io}};function r3({color:o="red",translucent:e=!0}){const i=te.useRef(null),s=te.useRef(null),u=te.useRef(null),f=te.useRef(null),d=te.useRef(null),h=te.useRef({x:0,y:0,z:0}),g=te.useRef({x:0,y:0,z:0}),m=te.useRef(null),S=te.useRef(!1),[v,_]=te.useState(!1),[T,R]=te.useState(!1),[O,M]=te.useState(null),[x,w]=te.useState(null),F=te.useCallback(N=>{h.current=N,s.current?.rotation.set(N.x*io,N.y*io,N.z*io)},[]),C=te.useCallback((N,z)=>{d.current&&cancelAnimationFrame(d.current);const G={...h.current},Y=performance.now();return new Promise(V=>{const Z=X=>{const W=Math.min((X-Y)/z,1),nt=US(W);F({x:G.x+(N.x-G.x)*nt,y:G.y+(N.y-G.y)*nt,z:G.z+(N.z-G.z)*nt}),W<1?d.current=requestAnimationFrame(Z):(d.current=null,V())};d.current=requestAnimationFrame(Z)})},[F]),U=te.useCallback((N,z)=>{d.current&&cancelAnimationFrame(d.current);const G=s.current;if(!G)return Promise.resolve();const Y=G.quaternion.clone(),V=performance.now();return new Promise(Z=>{const X=W=>{const nt=Math.min((W-V)/z,1);G.quaternion.slerpQuaternions(Y,N,US(nt)),h.current=a3(G.quaternion),nt<1?d.current=requestAnimationFrame(X):(d.current=null,Z())};d.current=requestAnimationFrame(X)})},[]),D=te.useCallback(async()=>{S.current=!0,_(!0),M(null),w(null);try{const N=await Bp(8),z=n3(NS[N-1]),G=h.current,Y=3+Math.floor(Math.random()*5),V=CS-Y,Z=Math.random()<.5?-1:1,X=Math.random()<.5?-1:1,W=Math.random()<.5?-1:1,nt={x:G.x+Z*360*Y,y:G.y+X*360*V,z:G.z+W*360*CS};await C(nt,QC),await U(z,JC),g.current=h.current,_(!1),S.current=!1,M(N)}catch(N){_(!1),S.current=!1,w(N instanceof Error?N.message:"Roll failed.")}},[U,C]),I=te.useCallback(N=>{if(S.current)return;const z=N.currentTarget.getBoundingClientRect();m.current={centerX:z.left+z.width/2,centerY:z.top+z.height/2,halfWidth:z.width/2,halfHeight:z.height/2,nx:0,ny:0},N.currentTarget.setPointerCapture(N.pointerId),R(!0)},[]),E=te.useCallback(N=>{const z=m.current;!z||S.current||(z.nx=DS((N.clientX-z.centerX)/z.halfWidth,-1,1),z.ny=DS((N.clientY-z.centerY)/z.halfHeight,-1,1),!f.current&&(f.current=requestAnimationFrame(()=>{f.current=null;const G=g.current;F({x:G.x-z.ny*AS,y:G.y+z.nx*AS,z:G.z})})))},[F]),L=te.useCallback(()=>{const N=m.current;if(!N)return;m.current=null,R(!1),f.current&&(cancelAnimationFrame(f.current),f.current=null),Math.abs(N.nx)>=RS||Math.abs(N.ny)>=RS?D():C(g.current,jC)},[C,D]);return te.useEffect(()=>{const N=i.current;if(!N)return;const z=new fx,G=new di(28,1,.1,100);G.position.set(0,0,7),G.lookAt(0,0,0);const Y=new Ux({alpha:!0,antialias:!0});Y.setPixelRatio(Math.min(window.devicePixelRatio,2)),Y.setClearColor(0,0),N.appendChild(Y.domElement);const V=Fp[o],Z=Hp(8,e),X=new pi(new tm(1.7,0),new vx({color:V.hex,roughness:.46,metalness:.08,flatShading:!0,transparent:e,opacity:Z,depthWrite:!e})),W=()=>{NS.forEach((Gt,zt)=>{const H=i3(zt+1,V.label);H&&(H.position.copy(Gt.normal).multiplyScalar($C),H.quaternion.copy(Gt.orientation),X.add(H))})};document.fonts.load("700 200px dice-font").then(W),z.add(X),z.add(new yx(16777215,1)),z.add(new Sx(16777215,12303291,1));const nt=new Mx(16777215,1);nt.position.set(3,4,5),z.add(nt),s.current=X;const it=()=>{const Gt=N.clientWidth,zt=N.clientHeight;Y.setSize(Gt,zt,!1),G.aspect=Gt/zt,G.updateProjectionMatrix()},dt=new ResizeObserver(it);dt.observe(N),it();const vt=()=>{u.current=requestAnimationFrame(vt),Y.render(z,G)};return vt(),()=>{dt.disconnect(),u.current&&cancelAnimationFrame(u.current),d.current&&cancelAnimationFrame(d.current),X.geometry.dispose(),X.material.dispose(),X.children.forEach(Gt=>{const zt=Gt;zt.geometry.dispose(),zt.material.map?.dispose(),zt.material.dispose()}),Y.dispose(),N.removeChild(Y.domElement),s.current=null}},[o,e]),cn.jsxs("div",{className:`stage stage--eight-sided${T?" is-dragging":""}`,onPointerDown:I,onPointerMove:E,onPointerUp:L,onPointerCancel:L,children:[cn.jsx("div",{ref:i,className:"three-scene"}),cn.jsx("p",{className:"hint",children:v?"Rolling...":x||(O?`You rolled ${O}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const LS=65,OS=.5,PS=10,s3=1500,o3=750,l3=260,ao=Math.PI/180,IS=.7,im=1.7,Nx=.85,zS=im*.9*Nx,gc=im*.45,BS=im*.15*Nx,$s=[[0,zS,0],[0,-zS,0],...[0,1,2,3,4].map(o=>[gc*Math.cos(o*2*Math.PI/5),BS,gc*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[gc*Math.cos((o+.5)*2*Math.PI/5),-BS,gc*Math.sin((o+.5)*2*Math.PI/5)])],Pp=[[0,2,7,3],[0,3,8,4],[0,4,9,5],[0,5,10,6],[0,6,11,2],[1,8,3,7],[1,9,4,8],[1,10,5,9],[1,11,6,10],[1,7,2,11]],FS=[1,3,5,7,9,8,6,4,2,10],HS=(o,e,i)=>Math.min(i,Math.max(e,o)),GS=o=>1-(1-o)**3,Lx=(o,e)=>{const[i,s,u]=o,f=[s[0]-i[0],s[1]-i[1],s[2]-i[2]],d=[u[0]-i[0],u[1]-i[1],u[2]-i[2]],h=f[1]*d[2]-f[2]*d[1],g=f[2]*d[0]-f[0]*d[2],m=f[0]*d[1]-f[1]*d[0],S=Math.sqrt(h*h+g*g+m*m),v=new at(h/S,g/S,m/S);return v.dot(e)<0&&v.negate(),v},Ip=o=>{const e=o.reduce((u,f)=>u+f[0],0)/o.length,i=o.reduce((u,f)=>u+f[1],0)/o.length,s=o.reduce((u,f)=>u+f[2],0)/o.length;return new at(e,i,s)},u3=o=>{const e=Pp[o].map(g=>$s[g]),i=Ip(e),s=Lx(e,i),u=Math.abs(s.y)>.9?new at(0,0,1):new at(0,1,0),f=u.clone().sub(s.clone().multiplyScalar(u.dot(s))).normalize(),d=new at().crossVectors(f,s).normalize(),h=new en().makeBasis(d,f,s);return{normal:s,up:f,orientation:new fa().setFromRotationMatrix(h)}},VS=Array.from({length:10},(o,e)=>u3(e)),c3=o=>{const e=new at(0,0,1);return new fa().setFromUnitVectors(o.normal,e)},f3=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const s=i.getContext("2d");if(!s)return null;s.font="700 180px dice-font, system-ui, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillStyle=e,s.fillText(String(o===10?0:o),128,136);const u=new mx(i);u.colorSpace=Jn;const f=new Dc({map:u,transparent:!0,side:Ii,depthWrite:!1});return new pi(new oo(IS,IS),f)},d3=o=>{const e=new ua().setFromQuaternion(o,"XYZ");return{x:e.x/ao,y:e.y/ao,z:e.z/ao}};function h3({color:o="red",translucent:e=!0}){const i=te.useRef(null),s=te.useRef(null),u=te.useRef(null),f=te.useRef(null),d=te.useRef(null),h=te.useRef({x:0,y:0,z:0}),g=te.useRef({x:0,y:0,z:0}),m=te.useRef(null),S=te.useRef(!1),[v,_]=te.useState(!1),[T,R]=te.useState(!1),[O,M]=te.useState(null),[x,w]=te.useState(null),F=te.useCallback(N=>{h.current=N,s.current?.rotation.set(N.x*ao,N.y*ao,N.z*ao)},[]),C=te.useCallback((N,z)=>{d.current&&cancelAnimationFrame(d.current);const G={...h.current},Y=performance.now();return new Promise(V=>{const Z=X=>{const W=Math.min((X-Y)/z,1),nt=GS(W);F({x:G.x+(N.x-G.x)*nt,y:G.y+(N.y-G.y)*nt,z:G.z+(N.z-G.z)*nt}),W<1?d.current=requestAnimationFrame(Z):(d.current=null,V())};d.current=requestAnimationFrame(Z)})},[F]),U=te.useCallback((N,z)=>{d.current&&cancelAnimationFrame(d.current);const G=s.current;if(!G)return Promise.resolve();const Y=G.quaternion.clone(),V=performance.now();return new Promise(Z=>{const X=W=>{const nt=Math.min((W-V)/z,1);G.quaternion.slerpQuaternions(Y,N,GS(nt)),h.current=d3(G.quaternion),nt<1?d.current=requestAnimationFrame(X):(d.current=null,Z())};d.current=requestAnimationFrame(X)})},[]),D=te.useCallback(async()=>{S.current=!0,_(!0),M(null),w(null);try{const N=await Bp(10),z=FS.indexOf(N),G=c3(VS[z]),Y=h.current,V=3+Math.floor(Math.random()*5),Z=PS-V,X=Math.random()<.5?-1:1,W=Math.random()<.5?-1:1,nt=Math.random()<.5?-1:1,it={x:Y.x+X*360*V,y:Y.y+W*360*Z,z:Y.z+nt*360*PS};await C(it,s3),await U(G,o3),g.current=h.current,_(!1),S.current=!1,M(N)}catch(N){_(!1),S.current=!1,w(N instanceof Error?N.message:"Roll failed.")}},[U,C]),I=te.useCallback(N=>{if(S.current)return;const z=N.currentTarget.getBoundingClientRect();m.current={centerX:z.left+z.width/2,centerY:z.top+z.height/2,halfWidth:z.width/2,halfHeight:z.height/2,nx:0,ny:0},N.currentTarget.setPointerCapture(N.pointerId),R(!0)},[]),E=te.useCallback(N=>{const z=m.current;!z||S.current||(z.nx=HS((N.clientX-z.centerX)/z.halfWidth,-1,1),z.ny=HS((N.clientY-z.centerY)/z.halfHeight,-1,1),!f.current&&(f.current=requestAnimationFrame(()=>{f.current=null;const G=g.current;F({x:G.x-z.ny*LS,y:G.y+z.nx*LS,z:G.z})})))},[F]),L=te.useCallback(()=>{const N=m.current;if(!N)return;m.current=null,R(!1),f.current&&(cancelAnimationFrame(f.current),f.current=null),Math.abs(N.nx)>=OS||Math.abs(N.ny)>=OS?D():C(g.current,l3)},[C,D]);return te.useEffect(()=>{const N=i.current;if(!N)return;const z=new fx,G=new di(28,1,.1,100);G.position.set(0,0,7),G.lookAt(0,0,0);const Y=new Ux({alpha:!0,antialias:!0});Y.setPixelRatio(Math.min(window.devicePixelRatio,2)),Y.setClearColor(0,0),N.appendChild(Y.domElement);const V=new Hi,Z=[],X=[];for(const pt of Pp){const[bt,J,ht,Tt]=pt,Dt=$s[bt],_t=$s[J],At=$s[ht],Ie=$s[Tt],ue=[Dt,_t,At,Ie],me=Ip(ue),ge=Lx(ue,me),jt=ge.x,ee=ge.y,be=ge.z;Z.push(...Dt,...At,..._t,...Dt,...Ie,...At),X.push(jt,ee,be,jt,ee,be,jt,ee,be,jt,ee,be,jt,ee,be,jt,ee,be)}V.setAttribute("position",new $n(Z,3)),V.setAttribute("normal",new $n(X,3));const W=Fp[o],nt=Hp(10,e),it=new pi(V,new vx({color:W.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:nt,depthWrite:!e})),dt=()=>{VS.forEach((pt,bt)=>{const J=f3(FS[bt],W.label);if(!J)return;const ht=Ip(Pp[bt].map(Tt=>$s[Tt]));J.position.copy(ht),J.position.addScaledVector(pt.normal,.01),J.quaternion.copy(pt.orientation),it.add(J)})};document.fonts.load("700 180px dice-font").then(dt),z.add(it),z.add(new yx(16777215,1)),z.add(new Sx(16777215,12303291,1));const vt=new Mx(16777215,1);vt.position.set(3,4,5),z.add(vt),s.current=it;const Gt=()=>{const pt=N.clientWidth,bt=N.clientHeight;Y.setSize(pt,bt,!1),G.aspect=pt/bt,G.updateProjectionMatrix()},zt=new ResizeObserver(Gt);zt.observe(N),Gt();const H=()=>{u.current=requestAnimationFrame(H),Y.render(z,G)};return H(),()=>{zt.disconnect(),u.current&&cancelAnimationFrame(u.current),d.current&&cancelAnimationFrame(d.current),V.dispose(),it.material.dispose(),it.children.forEach(pt=>{const bt=pt;bt.geometry.dispose(),bt.material.map?.dispose(),bt.material.dispose()}),Y.dispose(),N.removeChild(Y.domElement),s.current=null}},[o,e]),cn.jsxs("div",{className:`stage stage--ten-sided${T?" is-dragging":""}`,onPointerDown:I,onPointerMove:E,onPointerUp:L,onPointerCancel:L,children:[cn.jsx("div",{ref:i,className:"three-scene"}),cn.jsx("p",{className:"hint",children:v?"Rolling...":x||(O!==null?`You rolled ${O}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}function p3({sides:o=6,color:e="red",translucent:i=!0}){return o===6?cn.jsx(NE,{color:e,translucent:i}):o===8?cn.jsx(r3,{color:e,translucent:i}):o===10?cn.jsx(h3,{color:e,translucent:i}):null}function m3(){const{sides:o,color:e,translucent:i}=RE();return cn.jsx(p3,{sides:o,color:e,translucent:i})}const Ox=document.getElementById("root");if(!Ox)throw new Error("Root element was not found.");EE.createRoot(Ox).render(cn.jsx(te.StrictMode,{children:cn.jsx(m3,{})}));

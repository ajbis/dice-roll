(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();var sh={exports:{}},al={};var gv;function vE(){if(gv)return al;gv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var h in u)h!=="key"&&(f[h]=u[h])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:d,ref:u!==void 0?u:null,props:f}}return al.Fragment=e,al.jsx=i,al.jsxs=i,al}var _v;function SE(){return _v||(_v=1,sh.exports=vE()),sh.exports}var fn=SE(),oh={exports:{}},se={};var vv;function xE(){if(vv)return se;vv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),T=Symbol.iterator;function R(F){return F===null||typeof F!="object"?null:(F=T&&F[T]||F["@@iterator"],typeof F=="function"?F:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function w(F,pt,bt){this.props=F,this.context=pt,this.refs=x,this.updater=bt||O}w.prototype.isReactComponent={},w.prototype.setState=function(F,pt){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,pt,"setState")},w.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function H(){}H.prototype=w.prototype;function C(F,pt,bt){this.props=F,this.context=pt,this.refs=x,this.updater=bt||O}var U=C.prototype=new H;U.constructor=C,M(U,w.prototype),U.isPureReactComponent=!0;var D=Array.isArray;function I(){}var E={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function N(F,pt,bt){var Z=bt.ref;return{$$typeof:o,type:F,key:pt,ref:Z!==void 0?Z:null,props:bt}}function z(F,pt){return N(F.type,pt,F.props)}function G(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function Y(F){var pt={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(bt){return pt[bt]})}var V=/\/+/g;function Q(F,pt){return typeof F=="object"&&F!==null&&F.key!=null?Y(""+F.key):pt.toString(36)}function X(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(I,I):(F.status="pending",F.then(function(pt){F.status==="pending"&&(F.status="fulfilled",F.value=pt)},function(pt){F.status==="pending"&&(F.status="rejected",F.reason=pt)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function W(F,pt,bt,Z,ct){var Et=typeof F;(Et==="undefined"||Et==="boolean")&&(F=null);var Ct=!1;if(F===null)Ct=!0;else switch(Et){case"bigint":case"string":case"number":Ct=!0;break;case"object":switch(F.$$typeof){case o:case e:Ct=!0;break;case S:return Ct=F._init,W(Ct(F._payload),pt,bt,Z,ct)}}if(Ct)return ct=ct(F),Ct=Z===""?"."+Q(F,0):Z,D(ct)?(bt="",Ct!=null&&(bt=Ct.replace(V,"$&/")+"/"),W(ct,pt,bt,"",function(be){return be})):ct!=null&&(G(ct)&&(ct=z(ct,bt+(ct.key==null||F&&F.key===ct.key?"":(""+ct.key).replace(V,"$&/")+"/")+Ct)),pt.push(ct)),1;Ct=0;var mt=Z===""?".":Z+":";if(D(F))for(var At=0;At<F.length;At++)Z=F[At],Et=mt+Q(Z,At),Ct+=W(Z,pt,bt,Et,ct);else if(At=R(F),typeof At=="function")for(F=At.call(F),At=0;!(Z=F.next()).done;)Z=Z.value,Et=mt+Q(Z,At++),Ct+=W(Z,pt,bt,Et,ct);else if(Et==="object"){if(typeof F.then=="function")return W(X(F),pt,bt,Z,ct);throw pt=String(F),Error("Objects are not valid as a React child (found: "+(pt==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":pt)+"). If you meant to render a collection of children, use an array instead.")}return Ct}function nt(F,pt,bt){if(F==null)return F;var Z=[],ct=0;return W(F,Z,"","",function(Et){return pt.call(bt,Et,ct++)}),Z}function it(F){if(F._status===-1){var pt=F._result,bt=pt();bt.then(function(Z){(F._status===0||F._status===-1)&&(F._status=1,F._result=Z,bt.status===void 0&&(bt.status="fulfilled",bt.value=Z))},function(Z){(F._status===0||F._status===-1)&&(F._status=2,F._result=Z,bt.status===void 0&&(bt.status="rejected",bt.reason=Z))}),F._status===-1&&(F._status=0,F._result=bt)}if(F._status===1)return F._result.default;throw F._result}var ht=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var pt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(pt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)};function vt(F){var pt=E.T,bt={};bt.types=pt!==null?pt.types:null,E.T=bt;try{var Z=F(),ct=E.S;ct!==null&&ct(bt,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(I,ht)}catch(Et){ht(Et)}finally{pt!==null&&bt.types!==null&&(pt.types=bt.types),E.T=pt}}function kt(F){var pt=E.T;if(pt!==null){var bt=pt.types;bt===null?pt.types=[F]:bt.indexOf(F)===-1&&bt.push(F)}else vt(kt.bind(null,F))}var It={map:nt,forEach:function(F,pt,bt){nt(F,function(){pt.apply(this,arguments)},bt)},count:function(F){var pt=0;return nt(F,function(){pt++}),pt},toArray:function(F){return nt(F,function(pt){return pt})||[]},only:function(F){if(!G(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return se.Activity=v,se.Children=It,se.Component=w,se.Fragment=i,se.Profiler=u,se.PureComponent=C,se.StrictMode=s,se.Suspense=g,se.ViewTransition=_,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,se.__COMPILER_RUNTIME={__proto__:null,c:function(F){return E.H.useMemoCache(F)}},se.addTransitionType=kt,se.cache=function(F){return function(){return F.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(F,pt,bt){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Z=M({},F.props),ct=F.key;if(pt!=null)for(Et in pt.key!==void 0&&(ct=""+pt.key),pt)!L.call(pt,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&pt.ref===void 0||(Z[Et]=pt[Et]);var Et=arguments.length-2;if(Et===1)Z.children=bt;else if(1<Et){for(var Ct=Array(Et),mt=0;mt<Et;mt++)Ct[mt]=arguments[mt+2];Z.children=Ct}return N(F.type,ct,Z)},se.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:f,_context:F},F},se.createElement=function(F,pt,bt){var Z,ct={},Et=null;if(pt!=null)for(Z in pt.key!==void 0&&(Et=""+pt.key),pt)L.call(pt,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ct[Z]=pt[Z]);var Ct=arguments.length-2;if(Ct===1)ct.children=bt;else if(1<Ct){for(var mt=Array(Ct),At=0;At<Ct;At++)mt[At]=arguments[At+2];ct.children=mt}if(F&&F.defaultProps)for(Z in Ct=F.defaultProps,Ct)ct[Z]===void 0&&(ct[Z]=Ct[Z]);return N(F,Et,ct)},se.createRef=function(){return{current:null}},se.forwardRef=function(F){return{$$typeof:h,render:F}},se.isValidElement=G,se.lazy=function(F){return{$$typeof:S,_payload:{_status:-1,_result:F},_init:it}},se.memo=function(F,pt){return{$$typeof:m,type:F,compare:pt===void 0?null:pt}},se.startTransition=vt,se.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},se.use=function(F){return E.H.use(F)},se.useActionState=function(F,pt,bt){return E.H.useActionState(F,pt,bt)},se.useCallback=function(F,pt){return E.H.useCallback(F,pt)},se.useContext=function(F){return E.H.useContext(F)},se.useDebugValue=function(){},se.useDeferredValue=function(F,pt){return E.H.useDeferredValue(F,pt)},se.useEffect=function(F,pt){return E.H.useEffect(F,pt)},se.useEffectEvent=function(F){return E.H.useEffectEvent(F)},se.useId=function(){return E.H.useId()},se.useImperativeHandle=function(F,pt,bt){return E.H.useImperativeHandle(F,pt,bt)},se.useInsertionEffect=function(F,pt){return E.H.useInsertionEffect(F,pt)},se.useLayoutEffect=function(F,pt){return E.H.useLayoutEffect(F,pt)},se.useMemo=function(F,pt){return E.H.useMemo(F,pt)},se.useOptimistic=function(F,pt){return E.H.useOptimistic(F,pt)},se.useReducer=function(F,pt,bt){return E.H.useReducer(F,pt,bt)},se.useRef=function(F){return E.H.useRef(F)},se.useState=function(F){return E.H.useState(F)},se.useSyncExternalStore=function(F,pt,bt){return E.H.useSyncExternalStore(F,pt,bt)},se.useTransition=function(){return E.H.useTransition()},se.version="19.3.0",se}var Sv;function Vp(){return Sv||(Sv=1,oh.exports=xE()),oh.exports}var te=Vp(),lh={exports:{}},rl={},uh={exports:{}},ch={};var xv;function ME(){return xv||(xv=1,(function(o){function e(X,W){var nt=X.length;X.push(W);t:for(;0<nt;){var it=nt-1>>>1,ht=X[it];if(0<u(ht,W))X[it]=W,X[nt]=ht,nt=it;else break t}}function i(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var W=X[0],nt=X.pop();if(nt!==W){X[0]=nt;t:for(var it=0,ht=X.length,vt=ht>>>1;it<vt;){var kt=2*(it+1)-1,It=X[kt],F=kt+1,pt=X[F];if(0>u(It,nt))F<ht&&0>u(pt,It)?(X[it]=pt,X[F]=nt,it=F):(X[it]=It,X[kt]=nt,it=kt);else if(F<ht&&0>u(pt,nt))X[it]=pt,X[F]=nt,it=F;else break t}}return W}function u(X,W){var nt=X.sortIndex-W.sortIndex;return nt!==0?nt:X.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var g=[],m=[],S=1,v=null,_=3,T=!1,R=!1,O=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function C(X){for(var W=i(m);W!==null;){if(W.callback===null)s(m);else if(W.startTime<=X)s(m),W.sortIndex=W.expirationTime,e(g,W);else break;W=i(m)}}function U(X){if(O=!1,C(X),!R)if(i(g)!==null)R=!0,D||(D=!0,G());else{var W=i(m);W!==null&&Q(U,W.startTime-X)}}var D=!1,I=-1,E=5,L=-1;function N(){return M?!0:!(o.unstable_now()-L<E)}function z(){if(M=!1,D){var X=o.unstable_now();L=X;var W=!0;try{t:{R=!1,O&&(O=!1,w(I),I=-1),T=!0;var nt=_;try{e:{for(C(X),v=i(g);v!==null&&!(v.expirationTime>X&&N());){var it=v.callback;if(typeof it=="function"){v.callback=null,_=v.priorityLevel;var ht=it(v.expirationTime<=X);if(X=o.unstable_now(),typeof ht=="function"){v.callback=ht,C(X),W=!0;break e}v===i(g)&&s(g),C(X)}else s(g);v=i(g)}if(v!==null)W=!0;else{var vt=i(m);vt!==null&&Q(U,vt.startTime-X),W=!1}}break t}finally{v=null,_=nt,T=!1}W=void 0}}finally{W?G():D=!1}}}var G;if(typeof H=="function")G=function(){H(z)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,V=Y.port2;Y.port1.onmessage=z,G=function(){V.postMessage(null)}}else G=function(){x(z,0)};function Q(X,W){I=x(function(){X(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(X){switch(_){case 1:case 2:case 3:var W=3;break;default:W=_}var nt=_;_=W;try{return X()}finally{_=nt}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(X,W){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var nt=_;_=X;try{return W()}finally{_=nt}},o.unstable_scheduleCallback=function(X,W,nt){var it=o.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?it+nt:it):nt=it,X){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=nt+ht,X={id:S++,callback:W,priorityLevel:X,startTime:nt,expirationTime:ht,sortIndex:-1},nt>it?(X.sortIndex=nt,e(m,X),i(g)===null&&X===i(m)&&(O?(w(I),I=-1):O=!0,Q(U,nt-it))):(X.sortIndex=ht,e(g,X),R||T||(R=!0,D||(D=!0,G()))),X},o.unstable_shouldYield=N,o.unstable_wrapCallback=function(X){var W=_;return function(){var nt=_;_=W;try{return X.apply(this,arguments)}finally{_=nt}}}})(ch)),ch}var Mv;function yE(){return Mv||(Mv=1,uh.exports=ME()),uh.exports}var fh={exports:{}},Un={};var yv;function EE(){if(yv)return Un;yv=1;var o=Vp();function e(S){var v="https://react.dev/errors/"+S;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)v+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+S+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(S,v,_){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:T==null?null:T===d?d:""+T,children:S,containerInfo:v,implementation:_}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(S,v){if(S==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.browser=function(S){return{$$typeof:f,_reason:S}},Un.createPortal=function(S,v){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(e(299));return h(S,v,null,_)},Un.flushSync=function(S){var v=g.T,_=s.p;try{if(g.T=null,s.p=2,S)return S()}finally{g.T=v,s.p=_,s.d.f()}},Un.preconnect=function(S,v){typeof S=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(S,v))},Un.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},Un.preinit=function(S,v){if(typeof S=="string"&&v&&typeof v.as=="string"){var _=v.as,T=m(_,v.crossOrigin),R=typeof v.integrity=="string"?v.integrity:void 0,O=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;_==="style"?s.d.S(S,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:T,integrity:R,fetchPriority:O}):_==="script"&&s.d.X(S,{crossOrigin:T,integrity:R,fetchPriority:O,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Un.preinitModule=function(S,v){if(typeof S=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var _=m(v.as,v.crossOrigin);s.d.M(S,{crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&s.d.M(S)},Un.preload=function(S,v){if(typeof S=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var _=v.as,T=m(_,v.crossOrigin);s.d.L(S,_,{crossOrigin:T,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Un.preloadModule=function(S,v){if(typeof S=="string")if(v){var _=m(v.as,v.crossOrigin);s.d.m(S,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else s.d.m(S)},Un.requestFormReset=function(S){s.d.r(S)},Un.unstable_batchedUpdates=function(S,v){return S(v)},Un.useFormState=function(S,v,_){return g.H.useFormState(S,v,_)},Un.useFormStatus=function(){return g.H.useHostTransitionStatus()},Un.version="19.3.0",Un}var Ev;function TE(){if(Ev)return fh.exports;Ev=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),fh.exports=EE(),fh.exports}var Tv;function bE(){if(Tv)return rl;Tv=1;var o=yE(),e=Vp(),i=TE();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(f(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var l=a.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===a)return g(l),t;if(c===r)return g(l),n;c=c.sibling}throw Error(s(188))}if(a.return!==r.return)a=l,r=c;else{for(var p=!1,A=l.child;A;){if(A===a){p=!0,a=l,r=c;break}if(A===r){p=!0,r=l,a=c;break}A=A.sibling}if(!p){for(A=c.child;A;){if(A===a){p=!0,a=c,r=l;break}if(A===r){p=!0,r=c,a=l;break}A=A.sibling}if(!p)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}function v(t,n,a,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&v(t.child,n,a,r,l,c))return!0;t=t.sibling}return!1}function _(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function T(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function R(t){var n=[null,null],a=_(t);return a===null||O(n,t,a.child,{foundSelf:!1}),n}function O(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&O(t,n,a.child,r))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,w=null;function H(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function C(t,n,a){return t===a?(w=t,!1):t===n?(w!==null&&(x=t),!0):!1}function U(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function D(t,n,a){for(var r=0,l=t;l;l=a(l))r++;l=0;for(var c=n;c;c=a(c))l++;for(;0<r-l;)t=a(t),r--;for(;0<l-r;)n=a(n),l--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var I=Object.assign,E=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),it=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),vt=Symbol.for("react.activity"),kt=Symbol.for("react.legacy_hidden"),It=Symbol.for("react.memo_cache_sentinel"),F=Symbol.for("react.view_transition"),pt=Symbol.for("react.recoverable"),bt=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=bt&&t[bt]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Symbol.for("react.client.reference");function Et(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ct?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case z:return"Fragment";case Y:return"Profiler";case G:return"StrictMode";case W:return"Suspense";case nt:return"SuspenseList";case vt:return"Activity";case F:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case N:return"Portal";case Q:return t.displayName||"Context";case V:return(t._context.displayName||"Context")+".Consumer";case X:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case it:return n=t.displayName||null,n!==null?n:Et(t.type)||"Memo";case ht:n=t._payload,t=t._init;try{return Et(t(n))}catch{}}return null}var Ct=Array.isArray,mt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,At=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,be={pending:!1,data:null,method:null,action:null},le=[],pe=-1;function ce(t){return{current:t}}function jt(t){0>pe||(t.current=le[pe],le[pe]=null,pe--)}function ne(t,n){pe++,le[pe]=t.current,t.current=n}var Be=ce(null),sn=ce(null),Pe=ce(null),Ge=ce(null);function K(t,n){switch(ne(Pe,n),ne(sn,t),ne(Be,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?b_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=b_(n),t=A_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}jt(Be),ne(Be,t)}function nn(){jt(Be),jt(sn),jt(Pe)}function Ie(t){var n=t.memoizedState;n!==null&&(zs._currentValue=n.memoizedState,ne(Ge,t)),n=Be.current;var a=A_(n,t.type);n!==a&&(ne(sn,t),ne(Be,a))}function P(t){sn.current===t&&(jt(Be),jt(sn)),Ge.current===t&&(jt(Ge),zs._currentValue=be)}var y,et;function ut(t){if(y===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);y=n&&n[1]||"",et=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+y+t+et}var gt=!1;function Rt(t,n){if(!t||gt)return"";gt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(Ot){var j=Ot}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(Ot){j=Ot}xt=!1;try{var lt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),xt=!0,new t}finally{xt&&(lt!==void 0?Object.defineProperty(t.prototype,"props",lt):delete t.prototype.props)}}}else{try{throw Error()}catch(Ot){j=Ot}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(Ot){if(Ot&&j&&typeof Ot.stack=="string")return[Ot.stack,j.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),p=c[0],A=c[1];if(p&&A){var B=p.split(`
`),tt=A.split(`
`);for(l=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;l<tt.length&&!tt[l].includes("DetermineComponentFrameRoot");)l++;if(r===B.length||l===tt.length)for(r=B.length-1,l=tt.length-1;1<=r&&0<=l&&B[r]!==tt[l];)l--;for(;1<=r&&0<=l;r--,l--)if(B[r]!==tt[l]){if(r!==1||l!==1)do if(r--,l--,0>l||B[r]!==tt[l]){var ft=`
`+B[r].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=r&&0<=l);break}}}finally{gt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ut(a):""}function Ut(t,n){switch(t.tag){case 26:case 27:case 5:return ut(t.type);case 16:return ut("Lazy");case 13:return t.child!==n&&n!==null?ut("Suspense Fallback"):ut("Suspense");case 19:return ut("SuspenseList");case 0:case 15:return Rt(t.type,!1);case 11:return Rt(t.type.render,!1);case 1:return Rt(t.type,!0);case 31:return ut("Activity");case 30:return ut("ViewTransition");default:return""}}function _t(t){try{var n="",a=null;do n+=Ut(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var yt=Object.prototype.hasOwnProperty,Dt=o.unstable_scheduleCallback,$t=o.unstable_cancelCallback,zt=o.unstable_shouldYield,Pt=o.unstable_requestPaint,Xt=o.unstable_now,ie=o.unstable_getCurrentPriorityLevel,ue=o.unstable_ImmediatePriority,J=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,Mt=o.unstable_LowPriority,Nt=o.unstable_IdlePriority,Vt=o.log,Tt=o.unstable_setDisableYieldValue,Jt=null,Gt=null;function we(t){if(typeof Vt=="function"&&Tt(t),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(Jt,t)}catch{}}var fe=Math.clz32?Math.clz32:Oc,ti=Math.log,mi=Math.LN2;function Oc(t){return t>>>=0,t===0?32:31-(ti(t)/mi|0)|0}var $r=256,xr=262144,Ba=4194304;function fa(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Mr(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,p=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~c,r!==0?l=fa(r):(p&=A,p!==0?l=fa(p):a||(a=A&~t,a!==0&&(l=fa(a))))):(A=r&~c,A!==0?l=fa(A):p!==0?l=fa(p):a||(a=r&~t,a!==0&&(l=fa(a)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:l}function Fa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Gi(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-fe(a),l=1<<r;n|=t[r],a&=~l}return n}function uo(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function co(){var t=Ba;return Ba<<=1,(Ba&62914560)===0&&(Ba=4194304),t}function ts(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Vi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function bl(t,n,a,r,l,c){var p=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,B=t.expirationTimes,tt=t.hiddenUpdates;for(a=p&~a;0<a;){var ft=31-fe(a),xt=1<<ft;A[ft]=0,B[ft]=-1;var j=tt[ft];if(j!==null)for(tt[ft]=null,ft=0;ft<j.length;ft++){var lt=j[ft];lt!==null&&(lt.lane&=-536870913)}a&=~xt}r!==0&&yr(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(p&~n))}function yr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-fe(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function fo(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-fe(a),l=1<<r;l&n|t[r]&n&&(t[r]|=n),a&=~l}}function ho(t,n){var a=n&-n;return a=(a&42)!==0?1:po(a),(a&(t.suspendedLanes|n))!==0?0:a}function po(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function mo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Al(){var t=At.p;return t!==0?t:(t=window.event,t===void 0?32:uv(t.type))}function Rl(t,n){var a=At.p;try{return At.p=t,n()}finally{At.p=a}}var gi=Math.random().toString(36).slice(2),b="__reactFiber$"+gi,k="__reactProps$"+gi,dt="__reactContainer$"+gi,st="__reactEvents$"+gi,ot="__reactListeners$"+gi,Bt="__reactHandles$"+gi,Wt="__reactResources$"+gi,Lt="__reactMarker$"+gi,Zt="__reactLoad$"+gi;function Kt(t){delete t[b],delete t[k],delete t[ot],delete t[Bt]}function re(t){var n;if(n=t[b])return n;for(var a=t.parentNode;a;){if(n=a[dt]||a[b]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=X_(t);t!==null;){if(a=t[b])return a;t=X_(t)}return n}t=a,a=t.parentNode}return null}function de(t){if(t=t[b]||t[dt]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function qt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Me(t){var n=t[Wt];return n||(n=t[Wt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ve(t){t[Lt]=!0}function Ze(t){t[Zt]=void 0}var Ve=new Set,vn={};function Ft(t,n){on(t,n),on(t+"Capture",n)}function on(t,n){for(vn[t]=n,t=0;t<n.length;t++)Ve.add(n[t])}var De=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fn={},ei={};function Xi(t){return yt.call(ei,t)?!0:yt.call(Fn,t)?!1:De.test(t)?ei[t]=!0:(Fn[t]=!0,!1)}var Se=!1;function Fe(){var t=Se;return Se=!1,t}function Je(t,n,a){if(Xi(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function ni(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function Ae(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function ln(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function da(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Cl(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(p){a=""+p,c.call(this,p)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Pc(t){if(!t._valueTracker){var n=da(t)?"checked":"value";t._valueTracker=Cl(t,n,""+t[n])}}function hm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=da(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var Fx=/[\n"\\]/g;function _i(t){return t.replace(Fx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ic(t,n,a,r,l,c,p,A){t.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.type=p:t.removeAttribute("type"),n!=null?p==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ln(n)):t.value!==""+ln(n)&&(t.value=""+ln(n)):p!=="submit"&&p!=="reset"||t.removeAttribute("value"),n!=null?p==="number"&&t.value==n?zc(t,ln(t.value)):zc(t,ln(n)):a!=null?zc(t,ln(a)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ln(A):t.removeAttribute("name")}function pm(t,n,a,r,l,c,p,A){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Pc(t);return}a=a!=null?""+ln(a):"",n=n!=null?""+ln(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.name=p),Pc(t)}function zc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function es(t,n,a,r){if(t=t.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=n.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ln(a),n=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function mm(t,n,a){if(n!=null&&(n=""+ln(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ln(a):""}function gm(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Ct(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ln(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Pc(t)}function ns(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Hx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _m(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Hx.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function vm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Se=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&a[l]!==r&&(_m(t,l,r),Se=!0)}else for(var c in n)n.hasOwnProperty(c)&&_m(t,c,n[c])}function Bc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wl(t){return Vx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ki(){}var Fc=null;function Hc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var is=null,as=null;function Sm(t){var n=de(t);if(n&&(t=n.stateNode)){var a=t[k]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ic(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_i(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var l=r[k]||null;if(!l)throw Error(s(90));Ic(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&hm(r)}break t;case"textarea":mm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&es(t,!!a.multiple,n,!1)}}}var Gc=!1;function xm(t,n,a){if(Gc)return t(n,a);Gc=!0;try{var r=t(n);return r}finally{if(Gc=!1,(is!==null||as!==null)&&(wu(),is&&(n=is,t=as,as=is=null,Sm(n),t)))for(n=0;n<t.length;n++)Sm(t[n])}}function go(t,n){var a=t.stateNode;if(a===null)return null;var r=a[k]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=!1;if(ha)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){Vc=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{Vc=!1}var Ha=null,Xc=null,Dl=null;function Mm(){if(Dl)return Dl;var t,n=Xc,a=n.length,r,l="value"in Ha?Ha.value:Ha.textContent,c=l.length;for(t=0;t<a&&n[t]===l[t];t++);var p=a-t;for(r=1;r<=p&&n[a-r]===l[c-r];r++);return Dl=l.slice(t,1<r?1-r:void 0)}function Ul(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Nl(){return!0}function ym(){return!1}function Hn(t){function n(a,r,l,c,p){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(c):c[A]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Nl:ym,this.isPropagationStopped=ym,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ll=Hn(Ga),vo=I({},Ga,{view:0,detail:0}),Xx=Hn(vo),kc,Wc,So,Ol=I({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(kc=t.screenX-So.screenX,Wc=t.screenY-So.screenY):Wc=kc=0,So=t),kc)},movementY:function(t){return"movementY"in t?t.movementY:Wc}}),Em=Hn(Ol),kx=I({},Ol,{dataTransfer:0}),Wx=Hn(kx),qx=I({},vo,{relatedTarget:0}),qc=Hn(qx),Yx=I({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Zx=Hn(Yx),Kx=I({},Ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qx=Hn(Kx),Jx=I({},Ga,{data:0}),Tm=Hn(Jx),jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eM(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=tM[t])?!!n[t]:!1}function Yc(){return eM}var nM=I({},vo,{key:function(t){if(t.key){var n=jx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$x[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(t){return t.type==="keypress"?Ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iM=Hn(nM),aM=I({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=Hn(aM),rM=I({},Ga,{submitter:0}),sM=Hn(rM),oM=I({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),lM=Hn(oM),uM=I({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),cM=Hn(uM),fM=I({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dM=Hn(fM),hM=I({},Ga,{newState:0,oldState:0,source:0}),pM=Hn(hM),mM=[9,13,27,32],Zc=ha&&"CompositionEvent"in window,xo=null;ha&&"documentMode"in document&&(xo=document.documentMode);var gM=ha&&"TextEvent"in window&&!xo,Am=ha&&(!Zc||xo&&8<xo&&11>=xo),Rm=" ",Cm=!1;function wm(t,n){switch(t){case"keyup":return mM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function _M(t,n){switch(t){case"compositionend":return Dm(n);case"keypress":return n.which!==32?null:(Cm=!0,Rm);case"textInput":return t=n.data,t===Rm&&Cm?null:t;default:return null}}function vM(t,n){if(rs)return t==="compositionend"||!Zc&&wm(t,n)?(t=Mm(),Dl=Xc=Ha=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Am&&n.locale!=="ko"?null:n.data;default:return null}}var SM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Um(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!SM[t.type]:n==="textarea"}function Nm(t,n,a,r){is?as?as.push(r):as=[r]:is=r,n=Pu(n,"onChange"),0<n.length&&(a=new Ll("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Mo=null,yo=null;function xM(t){S_(t,0)}function Pl(t){var n=qt(t);if(hm(n))return t}function Lm(t,n){if(t==="change")return n}var Om=!1;if(ha){var Kc;if(ha){var Qc="oninput"in document;if(!Qc){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),Qc=typeof Pm.oninput=="function"}Kc=Qc}else Kc=!1;Om=Kc&&(!document.documentMode||9<document.documentMode)}function Im(){Mo&&(Mo.detachEvent("onpropertychange",zm),yo=Mo=null)}function zm(t){if(t.propertyName==="value"&&Pl(yo)){var n=[];Nm(n,yo,t,Hc(t)),xm(xM,n)}}function MM(t,n,a){t==="focusin"?(Im(),Mo=n,yo=a,Mo.attachEvent("onpropertychange",zm)):t==="focusout"&&Im()}function yM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pl(yo)}function EM(t,n){if(t==="click")return Pl(n)}function TM(t,n){if(t==="input"||t==="change")return Pl(n)}function bM(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ii=typeof Object.is=="function"?Object.is:bM;function Eo(t,n){if(ii(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!yt.call(n,l)||!ii(t[l],n[l]))return!1}return!0}function Jc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fm(t,n){var a=Bm(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Bm(a)}}function Hm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Hm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Gm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Jc(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Jc(t.document)}return n}function jc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var AM=ha&&"documentMode"in document&&11>=document.documentMode,ss=null,$c=null,To=null,tf=!1;function Vm(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tf||ss==null||ss!==Jc(r)||(r=ss,"selectionStart"in r&&jc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),To&&Eo(To,r)||(To=r,r=Pu($c,"onSelect"),0<r.length&&(n=new Ll("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=ss)))}function Er(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var os={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionrun:Er("Transition","TransitionRun"),transitionstart:Er("Transition","TransitionStart"),transitioncancel:Er("Transition","TransitionCancel"),transitionend:Er("Transition","TransitionEnd")},ef={},Xm={};ha&&(Xm=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function Tr(t){if(ef[t])return ef[t];if(!os[t])return t;var n=os[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xm)return ef[t]=n[a];return t}var km=Tr("animationend"),Wm=Tr("animationiteration"),qm=Tr("animationstart"),RM=Tr("transitionrun"),CM=Tr("transitionstart"),wM=Tr("transitioncancel"),Ym=Tr("transitionend"),Zm=new Map,nf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nf.push("scrollEnd");function Ci(t,n){Zm.set(t,n),Ft(n,[t])}var DM=0;function pa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ni.identifierPrefix;var a=DM++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Km(t){if(t==null||typeof t=="string")return t;var n=null,a=Rs;if(a!==null)for(var r=0;r<a.length;r++){var l=t[a[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function ma(t,n){return t=Km(t),n=Km(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Il=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},vi=[],ls=0,af=0;function zl(){for(var t=ls,n=af=ls=0;n<t;){var a=vi[n];vi[n++]=null;var r=vi[n];vi[n++]=null;var l=vi[n];vi[n++]=null;var c=vi[n];if(vi[n++]=null,r!==null&&l!==null){var p=r.pending;p===null?l.next=l:(l.next=p.next,p.next=l),r.pending=l}c!==0&&Qm(a,l,c)}}function Bl(t,n,a,r){vi[ls++]=t,vi[ls++]=n,vi[ls++]=a,vi[ls++]=r,af|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function rf(t,n,a,r){return Bl(t,n,a,r),Fl(t)}function br(t,n){return Bl(t,null,null,n),Fl(t)}function Qm(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var l=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-fe(a),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=a|536870912),c):null}function Fl(t){if(50<qo)throw qo=0,Cu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var us={};function UM(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,r){return new UM(t,n,a,r)}function sf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ga(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Jm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Hl(t,n,a,r,l,c){var p=0;if(r=t,typeof r=="function")sf(r)&&(p=1);else if(typeof r=="string")p=rE(t,a,Be.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case vt:return t=Wn(31,a,n,l),t.elementType=vt,t.lanes=c,t;case z:return Ar(a.children,l,c,n);case G:p=8,l|=24;break;case Y:return t=Wn(12,a,n,l|2),t.elementType=Y,t.lanes=c,t;case W:return t=Wn(13,a,n,l),t.elementType=W,t.lanes=c,t;case nt:return t=Wn(19,a,n,l),t.elementType=nt,t.lanes=c,t;case kt:case F:return t=l|32,t=Wn(30,a,n,t),t.elementType=F,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Q:p=10;break t;case V:p=9;break t;case X:p=11;break t;case it:p=14;break t;case ht:p=16,r=null;break t}p=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Wn(p,a,n,l),n.elementType=t,n.type=r,n.lanes=c,n}function Ar(t,n,a,r){return t=Wn(7,t,r,n),t.lanes=a,t}function of(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function jm(t){var n=Wn(18,null,null,0);return n.stateNode=t,n}function lf(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var $m=new WeakMap;function Si(t,n){if(typeof t=="object"&&t!==null){var a=$m.get(t);return a!==void 0?a:(n={value:t,source:n,stack:_t(n)},$m.set(t,n),n)}return{value:t,source:n,stack:_t(n)}}var cs=[],fs=0,Gl=null,bo=0,xi=[],Mi=0,Va=null,Wi=1,qi="";function _a(t,n){cs[fs++]=bo,cs[fs++]=Gl,Gl=t,bo=n}function tg(t,n,a){xi[Mi++]=Wi,xi[Mi++]=qi,xi[Mi++]=Va,Va=t;var r=Wi;t=qi;var l=32-fe(r)-1;r&=~(1<<l),a+=1;var c=32-fe(n)+l;if(30<c){var p=l-l%5;c=(r&(1<<p)-1).toString(32),r>>=p,l-=p,Wi=1<<32-fe(n)+l|a<<l|r,qi=c+t}else Wi=1<<c|a<<l|r,qi=t}function Vl(t){t.return!==null&&(_a(t,1),tg(t,1,0))}function uf(t){for(;t===Gl;)Gl=cs[--fs],cs[fs]=null,bo=cs[--fs],cs[fs]=null;for(;t===Va;)Va=xi[--Mi],xi[Mi]=null,qi=xi[--Mi],xi[Mi]=null,Wi=xi[--Mi],xi[Mi]=null}function eg(t,n){xi[Mi++]=Wi,xi[Mi++]=qi,xi[Mi++]=Va,Wi=n.id,qi=n.overflow,Va=t}var yn=null,je=null,xe=!1,Xa=null,yi=!1,cf=Error(s(519));function ka(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ao(Si(n,t)),cf}function ng(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[b]=t,n[k]=r,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<Zo.length;a++)Ee(Zo[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),pm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),gm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||E_(n.textContent,a)?(r.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),r.onScroll!=null&&Ee("scroll",n),r.onScrollEnd!=null&&Ee("scrollend",n),r.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||ka(t,!0)}function Xl(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:yn=yn.return}}function ds(t){if(t!==yn)return!1;if(!xe)return Xl(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Hd(t.type,t.memoizedProps)),a=!a),a&&je&&ka(t),Xl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=V_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=V_(t)}else n===27?(n=je,sr(t.type)?(t=Kd,Kd=null,je=t):je=n):je=yn?Ti(t.stateNode.nextSibling):null;return!0}function Rr(){je=yn=null,xe=!1}function ff(){var t=Xa;return t!==null&&(Zn===null?Zn=t:Zn.push.apply(Zn,t),Xa=null),t}function Ao(t){Xa===null?Xa=[t]:Xa.push(t)}var df=ce(null),Cr=null,va=null;function Wa(t,n,a){ne(df,n._currentValue),n._currentValue=a}function Sa(t){t._currentValue=df.current,jt(df)}function kl(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function hf(t,n,a,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var p=l.child;c=c.firstContext;t:for(;c!==null;){var A=c;c=l;for(var B=0;B<n.length;B++)if(A.context===n[B]){c.lanes|=a,A=c.alternate,A!==null&&(A.lanes|=a),kl(c.return,a,t),r||(p=null);break t}c=A.next}}else if(l.tag===18){if(p=l.return,p===null)throw Error(s(341));p.lanes|=a,c=p.alternate,c!==null&&(c.lanes|=a),kl(p,a,t),p=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,p=l.alternate,p!==null&&(p.lanes|=a),kl(l.return,a,t),p=l.child,p=p!==null?p.sibling:null):p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===t){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}}function wr(t,n,a,r){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var p=l.alternate;if(p===null)throw Error(s(387));if(p=p.memoizedProps,p!==null){var A=l.type;ii(l.pendingProps.value,p.value)||(t!==null?t.push(A):t=[A])}}else if(l===Ge.current){if(p=l.alternate,p===null)throw Error(s(387));p.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(zs):t=[zs])}l=l.return}return t!==null&&hf(n,t,a,r),n.flags|=262144,t!==null}function Wl(t){for(t=t.firstContext;t!==null;){if(!ii(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Dr(t){Cr=t,va=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return ig(Cr,t)}function ql(t,n){return Cr===null&&Dr(t),ig(t,n)}function ig(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},va===null){if(t===null)throw Error(s(308));va=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else va=va.next=n;return a}var NM=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},LM=o.unstable_scheduleCallback,OM=o.unstable_NormalPriority,hn={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pf(){return{controller:new NM,data:new Map,refCount:0}}function Ro(t){t.refCount--,t.refCount===0&&LM(OM,function(){t.controller.abort()})}function ag(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Co=null;function PM(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var wo=null,mf=0,Ur=0,hs=null;function IM(t,n){if(wo===null){var a=wo=[];mf=0,Ur=Ud(),hs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return mf++,n.then(rg,rg),n}function rg(){if(--mf===0&&(Co=null,wo!==null)){hs!==null&&(hs.status="fulfilled");var t=wo;wo=null,Ur=0,hs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function zM(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var sg=mt.S;mt.S=function(t,n){if(j0=Xt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&IM(t,n),Co!==null)for(var a=Us;a!==null;)ag(a,Co),a=a.next;if(a=t.types,a!==null){for(var r=Us;r!==null;)ag(r,a),r=r.next;if(Ur!==0){r=Co,r===null&&(r=Co=[]);for(var l=0;l<a.length;l++){var c=a[l];r.indexOf(c)===-1&&r.push(c)}}}sg!==null&&sg(t,n)};var Nr=ce(null);function gf(){var t=Nr.current;return t!==null?t:Qe.pooledCache}function Yl(t,n){n===null?ne(Nr,Nr.current):ne(Nr,n.pool)}function og(){var t=gf();return t===null?null:{parent:hn._currentValue,pool:t}}var ps=Error(s(460)),_f=Error(s(474)),Zl=Error(s(542)),Kl={then:function(){}};function lg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ug(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,fg(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(ki,ki);else{if(t=Qe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,fg(t),t}throw Or=n,ps}}function Lr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Or=a,ps):a}}var Or=null;function cg(){if(Or===null)throw Error(s(459));var t=Or;return Or=null,t}function fg(t){if(t===ps||t===Zl)throw Error(s(483))}var ms=null,Do=0;function Ql(t){var n=Do;return Do+=1,ms===null&&(ms=[]),ug(ms,t,n)}function qa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Jl(t,n){throw n.$$typeof===E?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function dg(t){function n($,q){if(t){var rt=$.deletions;rt===null?($.deletions=[q],$.flags|=16):rt.push(q)}}function a($,q){if(!t)return null;for(;q!==null;)n($,q),q=q.sibling;return null}function r($){for(var q=new Map;$!==null;)$.key===null?q.set($.index,$):q.set($.key,$),$=$.sibling;return q}function l($,q){return $=ga($,q),$.index=0,$.sibling=null,$}function c($,q,rt){return $.index=rt,t?(rt=$.alternate,rt!==null?(rt=rt.index,rt<q?($.flags|=2,q):rt):($.flags|=134217730,q)):($.flags|=1048576,q)}function p($){return t&&$.alternate===null&&($.flags|=134217730),$}function A($,q,rt,St){return q===null||q.tag!==6?(q=of(rt,$.mode,St),q.return=$,q):(q=l(q,rt),q.return=$,q)}function B($,q,rt,St){var Yt=rt.type;return Yt===z?($=ft($,q,rt.props.children,St,rt.key),qa($,rt),$):q!==null&&(q.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===ht&&Lr(Yt)===q.type)?(q=l(q,rt.props),qa(q,rt),q.return=$,q):(q=Hl(rt.type,rt.key,rt.props,null,$.mode,St),qa(q,rt),q.return=$,q)}function tt($,q,rt,St){return q===null||q.tag!==4||q.stateNode.containerInfo!==rt.containerInfo||q.stateNode.implementation!==rt.implementation?(q=lf(rt,$.mode,St),q.return=$,q):(q=l(q,rt.children||[]),q.return=$,q)}function ft($,q,rt,St,Yt){return q===null||q.tag!==7?(q=Ar(rt,$.mode,St,Yt),q.return=$,q):(q=l(q,rt),q.return=$,q)}function xt($,q,rt){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=of(""+q,$.mode,rt),q.return=$,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case L:return rt=Hl(q.type,q.key,q.props,null,$.mode,rt),qa(rt,q),rt.return=$,rt;case N:return q=lf(q,$.mode,rt),q.return=$,q;case ht:return q=Lr(q),xt($,q,rt)}if(Ct(q)||Z(q))return q=Ar(q,$.mode,rt,null),q.return=$,q;if(typeof q.then=="function")return xt($,Ql(q),rt);if(q.$$typeof===Q)return xt($,ql($,q),rt);Jl($,q)}return null}function j($,q,rt,St){var Yt=q!==null?q.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return Yt!==null?null:A($,q,""+rt,St);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case L:return rt.key===Yt?B($,q,rt,St):null;case N:return rt.key===Yt?tt($,q,rt,St):null;case ht:return rt=Lr(rt),j($,q,rt,St)}if(Ct(rt)||Z(rt))return Yt!==null?null:ft($,q,rt,St,null);if(typeof rt.then=="function")return j($,q,Ql(rt),St);if(rt.$$typeof===Q)return j($,q,ql($,rt),St);Jl($,rt)}return null}function lt($,q,rt,St,Yt){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return $=$.get(rt)||null,A(q,$,""+St,Yt);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case L:return $=$.get(St.key===null?rt:St.key)||null,B(q,$,St,Yt);case N:return $=$.get(St.key===null?rt:St.key)||null,tt(q,$,St,Yt);case ht:return St=Lr(St),lt($,q,rt,St,Yt)}if(Ct(St)||Z(St))return $=$.get(rt)||null,ft(q,$,St,Yt,null);if(typeof St.then=="function")return lt($,q,rt,Ql(St),Yt);if(St.$$typeof===Q)return lt($,q,rt,ql(q,St),Yt);Jl(q,St)}return null}function Ot($,q,rt,St){for(var Yt=null,Ce=null,ee=q,ae=q=0,gn=null;ee!==null&&ae<rt.length;ae++){ee.index>ae?(gn=ee,ee=null):gn=ee.sibling;var Le=j($,ee,rt[ae],St);if(Le===null){ee===null&&(ee=gn);break}t&&ee&&Le.alternate===null&&n($,ee),q=c(Le,q,ae),Ce===null?Yt=Le:Ce.sibling=Le,Ce=Le,ee=gn}if(ae===rt.length)return a($,ee),xe&&_a($,ae),Yt;if(ee===null){for(;ae<rt.length;ae++)ee=xt($,rt[ae],St),ee!==null&&(q=c(ee,q,ae),Ce===null?Yt=ee:Ce.sibling=ee,Ce=ee);return xe&&_a($,ae),Yt}for(ee=r(ee);ae<rt.length;ae++)gn=lt(ee,$,ae,rt[ae],St),gn!==null&&(t&&(Le=gn.alternate,Le!==null&&ee.delete(Le.key===null?ae:Le.key)),q=c(gn,q,ae),Ce===null?Yt=gn:Ce.sibling=gn,Ce=gn);return t&&ee.forEach(function(fr){return n($,fr)}),xe&&_a($,ae),Yt}function Qt($,q,rt,St){if(rt==null)throw Error(s(151));for(var Yt=null,Ce=null,ee=q,ae=q=0,gn=null,Le=rt.next();ee!==null&&!Le.done;ae++,Le=rt.next()){ee.index>ae?(gn=ee,ee=null):gn=ee.sibling;var fr=j($,ee,Le.value,St);if(fr===null){ee===null&&(ee=gn);break}t&&ee&&fr.alternate===null&&n($,ee),q=c(fr,q,ae),Ce===null?Yt=fr:Ce.sibling=fr,Ce=fr,ee=gn}if(Le.done)return a($,ee),xe&&_a($,ae),Yt;if(ee===null){for(;!Le.done;ae++,Le=rt.next())Le=xt($,Le.value,St),Le!==null&&(q=c(Le,q,ae),Ce===null?Yt=Le:Ce.sibling=Le,Ce=Le);return xe&&_a($,ae),Yt}for(ee=r(ee);!Le.done;ae++,Le=rt.next())Le=lt(ee,$,ae,Le.value,St),Le!==null&&(t&&(gn=Le.alternate,gn!==null&&ee.delete(gn.key===null?ae:gn.key)),q=c(Le,q,ae),Ce===null?Yt=Le:Ce.sibling=Le,Ce=Le);return t&&ee.forEach(function(_E){return n($,_E)}),xe&&_a($,ae),Yt}function ge($,q,rt,St){if(typeof rt=="object"&&rt!==null&&rt.type===z&&rt.key===null&&rt.props.ref===void 0&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case L:t:{for(var Yt=rt.key;q!==null;){if(q.key===Yt){if(Yt=rt.type,Yt===z){if(q.tag===7){a($,q.sibling),St=l(q,rt.props.children),qa(St,rt),St.return=$,$=St;break t}}else if(q.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===ht&&Lr(Yt)===q.type){a($,q.sibling),St=l(q,rt.props),qa(St,rt),St.return=$,$=St;break t}a($,q);break}else n($,q);q=q.sibling}rt.type===z?(St=Ar(rt.props.children,$.mode,St,rt.key),qa(St,rt),St.return=$,$=St):(St=Hl(rt.type,rt.key,rt.props,null,$.mode,St),qa(St,rt),St.return=$,$=St)}return p($);case N:t:{for(Yt=rt.key;q!==null;){if(q.key===Yt)if(q.tag===4&&q.stateNode.containerInfo===rt.containerInfo&&q.stateNode.implementation===rt.implementation){a($,q.sibling),St=l(q,rt.children||[]),St.return=$,$=St;break t}else{a($,q);break}else n($,q);q=q.sibling}St=lf(rt,$.mode,St),St.return=$,$=St}return p($);case ht:return rt=Lr(rt),ge($,q,rt,St)}if(Ct(rt))return Ot($,q,rt,St);if(Z(rt)){if(Yt=Z(rt),typeof Yt!="function")throw Error(s(150));return rt=Yt.call(rt),Qt($,q,rt,St)}if(typeof rt.then=="function")return ge($,q,Ql(rt),St);if(rt.$$typeof===Q)return ge($,q,ql($,rt),St);Jl($,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,q!==null&&q.tag===6?(a($,q.sibling),St=l(q,rt),St.return=$,$=St):(a($,q),St=of(rt,$.mode,St),St.return=$,$=St),p($)):a($,q)}return function($,q,rt,St){try{Do=0;var Yt=ge($,q,rt,St);return ms=null,Yt}catch(ee){if(ee===ps||ee===Zl)throw ee;var Ce=Wn(29,ee,null,$.mode);return Ce.lanes=St,Ce.return=$,Ce}}}var Pr=dg(!0),hg=dg(!1),Ya=!1;function vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(He&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Fl(t),Qm(t,null,a),n}return Bl(t,r,n,a),Fl(t)}function Uo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,fo(t,a)}}function xf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?l=c=p:c=c.next=p,a=a.next}while(a!==null);c===null?l=c=n:c=c.next=n}else l=c=n;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Mf=!1;function No(){if(Mf){var t=hs;if(t!==null)throw t}}function Lo(t,n,a,r){Mf=!1;var l=t.updateQueue;Ya=!1;var c=l.firstBaseUpdate,p=l.lastBaseUpdate,A=l.shared.pending;if(A!==null){l.shared.pending=null;var B=A,tt=B.next;B.next=null,p===null?c=tt:p.next=tt,p=B;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==p&&(A===null?ft.firstBaseUpdate=tt:A.next=tt,ft.lastBaseUpdate=B))}if(c!==null){var xt=l.baseState;p=0,ft=tt=B=null,A=c;do{var j=A.lane&-536870913,lt=j!==A.lane;if(lt?(Re&j)===j:(r&j)===j){j!==0&&j===Ur&&(Mf=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Ot=t,Qt=A;j=n;var ge=a;switch(Qt.tag){case 1:if(Ot=Qt.payload,typeof Ot=="function"){xt=Ot.call(ge,xt,j);break t}xt=Ot;break t;case 3:Ot.flags=Ot.flags&-65537|128;case 0:if(Ot=Qt.payload,j=typeof Ot=="function"?Ot.call(ge,xt,j):Ot,j==null)break t;xt=I({},xt,j);break t;case 2:Ya=!0}}j=A.callback,j!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=l.callbacks,lt===null?l.callbacks=[j]:lt.push(j))}else lt={lane:j,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?(tt=ft=lt,B=xt):ft=ft.next=lt,p|=j;if(A=A.next,A===null){if(A=l.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,l.lastBaseUpdate=lt,l.shared.pending=null}}while(!0);ft===null&&(B=xt),l.baseState=B,l.firstBaseUpdate=tt,l.lastBaseUpdate=ft,c===null&&(l.shared.lanes=0),nr|=p,t.lanes=p,t.memoizedState=xt}}function pg(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function mg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)pg(a[t],n)}var Qa=ce(null),jl=ce(0);function gg(t,n){t=Ta,ne(jl,t),ne(Qa,n),Ta=t|n.baseLanes}function yf(){ne(jl,Ta),ne(Qa,Qa.current)}function Ef(){Ta=jl.current,jt(Qa),jt(jl)}var Rn=ce(null),On=null;function Ja(t){var n=t.alternate;ne(Cn,Cn.current&1),ne(Rn,t),On===null&&(n===null||Qa.current!==null||n.memoizedState!==null)&&(On=t)}function Tf(t){ne(Cn,Cn.current),ne(Rn,t),On===null&&(On=t)}function _g(t){t.tag===22?(ne(Cn,Cn.current),ne(Rn,t),On===null&&(On=t)):ja()}function ja(){ne(Cn,Cn.current),ne(Rn,Rn.current)}function ai(t){jt(Rn),On===t&&(On=null),jt(Cn)}var Cn=ce(0);function Oo(t,n){ne(Rn,Rn.current),ne(Cn,n)}function bf(t){jt(Cn),jt(Rn),On===t&&(On=null)}function $l(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Yd(a)||Zd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var xa=0,me=null,Ke=null,pn=null,tu=!1,gs=!1,Ir=!1,eu=0,Po=0,_s=null,BM=0;function un(){throw Error(s(321))}function Af(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ii(t[a],n[a]))return!1;return!0}function Rf(t,n,a,r,l,c){return xa=c,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,mt.H=t===null||t.memoizedState===null?t0:e0,Ir=!1,c=a(r,l),Ir=!1,gs&&(c=Sg(n,a,r,l)),vg(t),c}function vg(t){mt.H=lu;var n=Ke!==null&&Ke.next!==null;if(xa=0,pn=Ke=me=null,tu=!1,Po=0,_s=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&Wl(t)&&(mn=!0))}function Sg(t,n,a,r){me=t;var l=0;do{if(gs&&(_s=null),Po=0,gs=!1,25<=l)throw Error(s(301));if(l+=1,pn=Ke=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}mt.H=qM,c=n(a,r)}while(gs);return c}function FM(){var t=mt.H,n=t.useState()[0];return n=typeof n.then=="function"?Io(n):n,t=t.useState()[0],(Ke!==null?Ke.memoizedState:null)!==t&&(me.flags|=1024),n}function Cf(){var t=eu!==0;return eu=0,t}function wf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Df(t){if(tu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}tu=!1}xa=0,pn=Ke=me=null,gs=!1,Po=eu=0,_s=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?me.memoizedState=pn=t:pn=pn.next=t,pn}function dn(){if(Ke===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var n=pn===null?me.memoizedState:pn.next;if(n!==null)pn=n,Ke=t;else{if(t===null)throw me.alternate===null?Error(s(467)):Error(s(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},pn===null?me.memoizedState=pn=t:pn=pn.next=t}return pn}function nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(t){var n=Po;return Po+=1,_s===null&&(_s=[]),t=ug(_s,t,n),n=me,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,mt.H=n===null||n.memoizedState===null?t0:e0),t}function iu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Io(t);if(t.$$typeof===pt)return;if(t.$$typeof===Q)return An(t)}throw Error(s(438,String(t)))}function Uf(t){var n=null,a=me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=me.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=nu(),me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=It;return n.index++,a}function Ma(t,n){return typeof n=="function"?n(t):n}function au(t){var n=dn();return Nf(n,Ke,t)}function Nf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var p=l.next;l.next=c.next,c.next=p}n.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var A=p=null,B=null,tt=n,ft=!1;do{var xt=tt.lane&-536870913;if(xt!==tt.lane?(Re&xt)===xt:(xa&xt)===xt){var j=tt.revertLane;if(j===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),xt===Ur&&(ft=!0);else if((xa&j)===j){tt=tt.next,j===Ur&&(ft=!0);continue}else xt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(A=B=xt,p=c):B=B.next=xt,me.lanes|=j,nr|=j;xt=tt.action,Ir&&a(c,xt),c=tt.hasEagerState?tt.eagerState:a(c,xt)}else j={lane:xt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(A=B=j,p=c):B=B.next=j,me.lanes|=xt,nr|=xt;tt=tt.next}while(tt!==null&&tt!==n);if(B===null?p=c:B.next=A,!ii(c,t.memoizedState)&&(mn=!0,ft&&(a=hs,a!==null)))throw a;t.memoizedState=c,t.baseState=p,t.baseQueue=B,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Lf(t){var n=dn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,l=a.pending,c=n.memoizedState;if(l!==null){a.pending=null;var p=l=l.next;do c=t(c,p.action),p=p.next;while(p!==l);ii(c,n.memoizedState)||(mn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,r]}function xg(t,n,a){var r=me,l=dn(),c=xe;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=n();var p=!ii((Ke||l).memoizedState,a);if(p&&(l.memoizedState=a,mn=!0),l=l.queue,If(Eg.bind(null,r,l,t),[t]),t=l.getSnapshot!==n||p||pn!==null&&(pn.memoizedState.tag&1)!==0,vs(t?9:8,{destroy:void 0},yg.bind(null,r,l,a,n),null),t){if(r.flags|=2048,Qe===null)throw Error(s(349));c||(xa&127)!==0||Mg(r,n,a)}return a}function Mg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=me.updateQueue,n===null?(n=nu(),me.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function yg(t,n,a,r){n.value=a,n.getSnapshot=r,Tg(n)&&bg(t)}function Eg(t,n,a){return a(function(){Tg(n)&&bg(t)})}function Tg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ii(t,a)}catch{return!0}}function bg(t){var n=br(t,2);n!==null&&Kn(n,t,2)}function Of(t){var n=Gn();if(typeof t=="function"){var a=t;if(t=a(),Ir){we(!0);try{a()}finally{we(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:t},n}function Ag(t,n,a,r){return t.baseState=a,Nf(t,Ke,typeof r=="function"?r:Ma)}function HM(t,n,a,r,l){if(ou(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};mt.T!==null?a(!0):c.isTransition=!1,r(c),a=n.pending,a===null?(c.next=n.pending=c,Rg(n,c)):(c.next=a.next,n.pending=a.next=c)}}function Rg(t,n){var a=n.action,r=n.payload,l=t.state;if(n.isTransition){var c=mt.T,p={};p.types=c!==null?c.types:null,mt.T=p;try{var A=a(l,r),B=mt.S;B!==null&&B(p,A),Cg(t,n,A)}catch(tt){Pf(t,n,tt)}finally{c!==null&&p.types!==null&&(c.types=p.types),mt.T=c}}else try{c=a(l,r),Cg(t,n,c)}catch(tt){Pf(t,n,tt)}}function Cg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){wg(t,n,r)},function(r){return Pf(t,n,r)}):wg(t,n,a)}function wg(t,n,a){n.status="fulfilled",n.value=a,Dg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Rg(t,a)))}function Pf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Dg(n),n=n.next;while(n!==r)}t.action=null}function Dg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Ug(t,n){return n}function Ng(t,n){if(xe){var a=Qe.formState;if(a!==null){t:{var r=me;if(xe){if(je){e:{for(var l=je,c=yi;l.nodeType!==8;){if(!c){l=null;break e}if(l=Ti(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){je=Ti(l.nextSibling),r=l.data==="F!";break t}}ka(r)}r=!1}r&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ug,lastRenderedState:n},a.queue=r,a=Jg.bind(null,me,r),r.dispatch=a,r=Of(!1),c=Gf.bind(null,me,!1,r.queue),r=Gn(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,a=HM.bind(null,me,l,c,a),l.dispatch=a,r.memoizedState=t,[n,a,!1]}function Lg(t){var n=dn();return Og(n,Ke,t)}function Og(t,n,a){if(n=Nf(t,n,Ug)[0],t=au(Ma)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Io(n)}catch(p){throw p===ps?Zl:p}else r=n;n=dn();var l=n.queue,c=l.dispatch;return a!==n.memoizedState&&(me.flags|=2048,vs(9,{destroy:void 0},GM.bind(null,l,a),null)),[r,c,t]}function GM(t,n){t.action=n}function Pg(t){var n=dn(),a=Ke;if(a!==null)return Og(n,a,t);dn(),n=n.memoizedState,a=dn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function vs(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=me.updateQueue,n===null&&(n=nu(),me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Ig(){return dn().memoizedState}function ru(t,n,a,r){var l=Gn();me.flags|=t,l.memoizedState=vs(1|n,{destroy:void 0},a,r===void 0?null:r)}function su(t,n,a,r){var l=dn();r=r===void 0?null:r;var c=l.memoizedState.inst;Ke!==null&&r!==null&&Af(r,Ke.memoizedState.deps)?l.memoizedState=vs(n,c,a,r):(me.flags|=t,l.memoizedState=vs(1|n,c,a,r))}function zg(t,n){ru(8390656,8,t,n)}function If(t,n){su(2048,8,t,n)}function VM(t){me.flags|=4;var n=me.updateQueue;if(n===null)n=nu(),me.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Bg(t){var n=dn().memoizedState;return VM({ref:n,nextImpl:t}),function(){if((He&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Fg(t,n){return su(4,2,t,n)}function Hg(t,n){return su(4,4,t,n)}function Gg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Vg(t,n,a){a=a!=null?a.concat([t]):null,su(4,4,Gg.bind(null,n,t),a)}function zf(){}function Xg(t,n){var a=dn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Af(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function kg(t,n){var a=dn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Af(n,r[1]))return r[0];if(r=t(),Ir){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[r,n],r}function Bf(t,n,a){return a===void 0||(xa&1073741824)!==0&&(Re&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=t_(),me.lanes|=t,nr|=t,a)}function Wg(t,n,a,r){return ii(a,n)?a:Qa.current!==null?(t=Bf(t,a,r),ii(t,n)||(mn=!0),t):(xa&106)===0||(xa&1073741824)!==0&&(Re&261930)===0?(mn=!0,t.memoizedState=a):(t=t_(),me.lanes|=t,nr|=t,n)}function qg(t,n,a,r,l){var c=At.p;At.p=c!==0&&8>c?c:8;var p=mt.T,A={};A.types=p!==null?p.types:null,mt.T=A,Gf(t,!1,n,a);try{var B=l(),tt=mt.S;if(tt!==null&&tt(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ft=zM(B,r);zo(t,n,ft,li(t))}else zo(t,n,r,li(t))}catch(xt){zo(t,n,{then:function(){},status:"rejected",reason:xt},li())}finally{At.p=c,p!==null&&A.types!==null&&(p.types=A.types),mt.T=p}}function XM(){}function Ff(t,n,a,r){if(t.tag!==5)throw Error(s(476));var l=Yg(t).queue;qg(t,l,n,be,a===null?XM:function(){return Zg(t),a(r)})}function Yg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:be,baseState:be,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:be},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Zg(t){var n=Yg(t);n.next===null&&(n=t.alternate.memoizedState),zo(t,n.next.queue,{},li())}function Hf(){return An(zs)}function Kg(){return dn().memoizedState}function Qg(){return dn().memoizedState}function kM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();t=Za(a);var r=Ka(n,t,a);r!==null&&(Kn(r,n,a),Uo(r,n,a)),n={cache:pf()},t.payload=n;return}n=n.return}}function WM(t,n,a){var r=li();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ou(t)?jg(n,a):(a=rf(t,n,a,r),a!==null&&(Kn(a,t,r),$g(a,n,r)))}function Jg(t,n,a){var r=li();zo(t,n,a,r)}function zo(t,n,a,r){var l={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ou(t))jg(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var p=n.lastRenderedState,A=c(p,a);if(l.hasEagerState=!0,l.eagerState=A,ii(A,p))return Bl(t,n,l,0),Qe===null&&zl(),!1}catch{}if(a=rf(t,n,l,r),a!==null)return Kn(a,t,r),$g(a,n,r),!0}return!1}function Gf(t,n,a,r){if(r={lane:2,revertLane:Ud(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ou(t)){if(n)throw Error(s(479))}else n=rf(t,a,r,2),n!==null&&Kn(n,t,2)}function ou(t){var n=t.alternate;return t===me||n!==null&&n===me}function jg(t,n){gs=tu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function $g(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,fo(t,a)}}var lu={readContext:An,use:iu,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un,useEffectEvent:un},t0={readContext:An,use:iu,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:zg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ru(4194308,4,Gg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ru(4194308,4,t,n)},useInsertionEffect:function(t,n){ru(4,2,t,n)},useMemo:function(t,n){var a=Gn();n=n===void 0?null:n;var r=t();if(Ir){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Gn();if(a!==void 0){var l=a(n);if(Ir){we(!0);try{a(n)}finally{we(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=WM.bind(null,me,t),[r.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:function(t){t=Of(t);var n=t.queue,a=Jg.bind(null,me,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:zf,useDeferredValue:function(t,n){var a=Gn();return Bf(a,t,n)},useTransition:function(){var t=Of(!1);return t=qg.bind(null,me,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=me,l=Gn();if(xe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qe===null)throw Error(s(349));(Re&127)!==0||Mg(r,n,a)}l.memoizedState=a;var c={value:a,getSnapshot:n};return l.queue=c,zg(Eg.bind(null,r,c,t),[t]),r.flags|=2048,vs(9,{destroy:void 0},yg.bind(null,r,c,a,n),null),a},useId:function(){var t=Gn(),n=Qe.identifierPrefix;if(xe){var a=qi,r=Wi;a=(r&~(1<<32-fe(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=eu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=BM++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Hf,useFormState:Ng,useActionState:Ng,useOptimistic:function(t){var n=Gn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Gf.bind(null,me,!0,a),a.dispatch=n,[t,n]},useMemoCache:Uf,useCacheRefresh:function(){return Gn().memoizedState=kM.bind(null,me)},useEffectEvent:function(t){var n=Gn(),a={impl:t};return n.memoizedState=a,function(){if((He&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},e0={readContext:An,use:iu,useCallback:Xg,useContext:An,useEffect:If,useImperativeHandle:Vg,useInsertionEffect:Fg,useLayoutEffect:Hg,useMemo:kg,useReducer:au,useRef:Ig,useState:function(){return au(Ma)},useDebugValue:zf,useDeferredValue:function(t,n){var a=dn();return Wg(a,Ke.memoizedState,t,n)},useTransition:function(){var t=au(Ma)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:Io(t),n]},useSyncExternalStore:xg,useId:Kg,useHostTransitionStatus:Hf,useFormState:Lg,useActionState:Lg,useOptimistic:function(t,n){var a=dn();return Ag(a,Ke,t,n)},useMemoCache:Uf,useCacheRefresh:Qg,useEffectEvent:Bg},qM={readContext:An,use:iu,useCallback:Xg,useContext:An,useEffect:If,useImperativeHandle:Vg,useInsertionEffect:Fg,useLayoutEffect:Hg,useMemo:kg,useReducer:Lf,useRef:Ig,useState:function(){return Lf(Ma)},useDebugValue:zf,useDeferredValue:function(t,n){var a=dn();return Ke===null?Bf(a,t,n):Wg(a,Ke.memoizedState,t,n)},useTransition:function(){var t=Lf(Ma)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:Io(t),n]},useSyncExternalStore:xg,useId:Kg,useHostTransitionStatus:Hf,useFormState:Pg,useActionState:Pg,useOptimistic:function(t,n){var a=dn();return Ke!==null?Ag(a,Ke,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Uf,useCacheRefresh:Qg,useEffectEvent:Bg};function Vf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:I({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Xf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=li(),l=Za(r);l.payload=n,a!=null&&(l.callback=a),n=Ka(t,l,r),n!==null&&(Kn(n,t,r),Uo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=li(),l=Za(r);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Ka(t,l,r),n!==null&&(Kn(n,t,r),Uo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=li(),r=Za(a);r.tag=2,n!=null&&(r.callback=n),n=Ka(t,r,a),n!==null&&(Kn(n,t,a),Uo(n,t,a))}};function n0(t,n,a,r,l,c,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,p):n.prototype&&n.prototype.isPureReactComponent?!Eo(a,r)||!Eo(l,c):!0}function i0(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Xf.enqueueReplaceState(n,n.state,null)}function zr(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=I({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}function a0(t){Il(t)}function r0(t){console.error(t)}function s0(t){Il(t)}function uu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function o0(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function kf(t,n,a){return a=Za(a),a.tag=3,a.payload={element:null},a.callback=function(){uu(t,n)},a}function l0(t){return t=Za(t),t.tag=3,t}function u0(t,n,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){o0(n,a,r)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(t.callback=function(){o0(n,a,r),typeof l!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function YM(t,n,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&wr(n,a,l,!0),a=Rn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return On===null?Du():a.alternate===null&&cn===0&&(cn=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===Kl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Cd(t,r,l)),!1;case 22:return a.flags|=65536,r===Kl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Cd(t,r,l)),!1}throw Error(s(435,a.tag))}return Cd(t,r,l),Du(),!1}if(xe)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==cf&&(t=Error(s(422),{cause:r}),Ao(Si(t,a)))):(r!==cf&&(n=Error(s(423),{cause:r}),Ao(Si(n,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=Si(r,a),l=kf(t.stateNode,r,l),xf(t,l),cn!==4&&(cn=2)),!1;var c=Error(s(520),{cause:r});if(c=Si(c,a),Wo===null?Wo=[c]:Wo.push(c),cn!==4&&(cn=2),n===null)return!0;r=Si(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=kf(a.stateNode,r,t),xf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ir===null||!ir.has(c))))return a.flags|=65536,l&=-l,a.lanes|=l,l=l0(l),u0(l,t,a,r),xf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Wf=Error(s(461)),mn=!1;function Sn(t,n,a,r){n.child=t===null?hg(n,null,a,r):Pr(n,t.child,a,r)}function c0(t,n,a,r,l){a=a.render;var c=n.ref;if("ref"in r){var p={};for(var A in r)A!=="ref"&&(p[A]=r[A])}else p=r;return Dr(n),r=Rf(t,n,a,p,c,l),A=Cf(),t!==null&&!mn?(wf(t,n,l),ya(t,n,l)):(xe&&A&&Vl(n),n.flags|=1,Sn(t,n,r,l),n.child)}function f0(t,n,a,r,l){if(t===null){var c=a.type;return typeof c=="function"&&!sf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,d0(t,n,c,r,l)):(t=Hl(a.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!$f(t,l)){var p=c.memoizedProps;if(a=a.compare,a=a!==null?a:Eo,a(p,r)&&t.ref===n.ref)return ya(t,n,l)}return n.flags|=1,t=ga(c,r),t.ref=n.ref,t.return=n,n.child=t}function d0(t,n,a,r,l){if(t!==null){var c=t.memoizedProps;if(Eo(c,r)&&t.ref===n.ref)if(mn=!1,n.pendingProps=r=c,$f(t,l))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,ya(t,n,l)}return qf(t,n,a,r,l)}function h0(t,n,a,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,n.child=null;return p0(t,n,c,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yl(n,c!==null?c.cachePool:null),c!==null?gg(n,c):yf(),_g(n);else return r=n.lanes=536870912,p0(t,n,c!==null?c.baseLanes|a:a,a,r)}else c!==null?(Yl(n,c.cachePool),gg(n,c),ja(),n.memoizedState=null):(t!==null&&Yl(n,null),yf(),ja());return Sn(t,n,l,a),n.child}function Bo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function p0(t,n,a,r,l){var c=gf();return c=c===null?null:{parent:hn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Yl(n,null),yf(),_g(n),t!==null&&wr(t,n,r,!0),n.childLanes=l,null}function cu(t,n){return n=fu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function m0(t,n,a){return Pr(n,t.child,null,a),t=cu(n,n.pendingProps),t.flags|=2,ai(n),n.memoizedState=null,t}function ZM(t,n,a){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(r.mode==="hidden")return t=cu(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Bo(null,t);if(Tf(n),(t=je)?(t=G_(t,yi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=jm(t),a.return=n,n.child=a,yn=n,je=null)):t=null,t===null)throw ka(n);return n.lanes=536870912,null}return cu(n,r)}var c=t.memoizedState;if(c!==null){var p=c.dehydrated;if(Tf(n),l)if(n.flags&256)n.flags&=-257,n=m0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||wr(t,n,a,!1),l=(a&t.childLanes)!==0,mn||l){if(Qa.current===null){if(r=Qe,r!==null&&(p=ho(r,a),p!==0&&p!==c.retryLane))throw c.retryLane=p,br(t,p),Kn(r,t,p),Wf;Du()}n=m0(t,n,a)}else t=c.treeContext,je=Ti(p.nextSibling),yn=n,xe=!0,Xa=null,yi=!1,t!==null&&eg(n,t),n=cu(n,r),n.flags|=134221824;return n}return t=ga(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ss(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function qf(t,n,a,r,l){return Dr(n),a=Rf(t,n,a,r,void 0,l),r=Cf(),t!==null&&!mn?(wf(t,n,l),ya(t,n,l)):(xe&&r&&Vl(n),n.flags|=1,Sn(t,n,a,l),n.child)}function g0(t,n,a,r,l,c){return Dr(n),n.updateQueue=null,a=Sg(n,r,a,l),vg(t),r=Cf(),t!==null&&!mn?(wf(t,n,c),ya(t,n,c)):(xe&&r&&Vl(n),n.flags|=1,Sn(t,n,a,c),n.child)}function _0(t,n,a,r,l){if(Dr(n),n.stateNode===null){var c=us,p=a.contextType;typeof p=="object"&&p!==null&&(c=An(p)),c=new a(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Xf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},vf(n),p=a.contextType,c.context=typeof p=="object"&&p!==null?An(p):us,c.state=n.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(Vf(n,a,p,r),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&Xf.enqueueReplaceState(c,c.state,null),Lo(n,r,c,l),No(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var A=n.memoizedProps,B=zr(a,A);c.props=B;var tt=c.context,ft=a.contextType;p=us,typeof ft=="object"&&ft!==null&&(p=An(ft));var xt=a.getDerivedStateFromProps;ft=typeof xt=="function"||typeof c.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(A||tt!==p)&&i0(n,c,r,p),Ya=!1;var j=n.memoizedState;c.state=j,Lo(n,r,c,l),No(),tt=n.memoizedState,A||j!==tt||Ya?(typeof xt=="function"&&(Vf(n,a,xt,r),tt=n.memoizedState),(B=Ya||n0(n,a,B,r,j,tt,p))?(ft||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=tt),c.props=r,c.state=tt,c.context=p,r=B):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,Sf(t,n),p=n.memoizedProps,ft=zr(a,p),c.props=ft,xt=n.pendingProps,j=c.context,tt=a.contextType,B=us,typeof tt=="object"&&tt!==null&&(B=An(tt)),A=a.getDerivedStateFromProps,(tt=typeof A=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==xt||j!==B)&&i0(n,c,r,B),Ya=!1,j=n.memoizedState,c.state=j,Lo(n,r,c,l),No();var lt=n.memoizedState;p!==xt||j!==lt||Ya||t!==null&&t.dependencies!==null&&Wl(t.dependencies)?(typeof A=="function"&&(Vf(n,a,A,r),lt=n.memoizedState),(ft=Ya||n0(n,a,ft,r,j,lt,B)||t!==null&&t.dependencies!==null&&Wl(t.dependencies))?(tt||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,lt,B),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,lt,B)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),c.props=r,c.state=lt,c.context=B,r=ft):(typeof c.componentDidUpdate!="function"||p===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,Ss(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=Pr(n,t.child,null,l),n.child=Pr(n,null,a,l)):Sn(t,n,a,l),n.memoizedState=c.state,t=n.child):t=ya(t,n,l),t}function v0(t,n,a,r){return Rr(),n.flags|=256,Sn(t,n,a,r),n.child}var Yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zf(t){return{baseLanes:t,cachePool:og()}}function Kf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=oi),t}function S0(t,n,a){var r=n.pendingProps,l=!1,c=(n.flags&128)!==0,p;if((p=c)||(p=t!==null&&t.memoizedState===null?!1:(Cn.current&2)!==0),p&&(l=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(l?Ja(n):ja(),(t=je)?(t=G_(t,yi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=jm(t),a.return=n,n.child=a,yn=n,je=null)):t=null,t===null)throw ka(n);return Zd(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,l?(ja(),l=n.mode,c=fu({mode:"hidden",children:c},l),r=Ar(r,l,a,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=Zf(a),r.childLanes=Kf(t,p,a),n.memoizedState=Yf,Bo(null,r)):(Ja(n),Qf(n,c))}var A=t.memoizedState;if(A!==null){var B=A.dehydrated;if(B!==null)return KM(t,n,c,p,r,B,A,a)}return l?(ja(),l=r.fallback,c=n.mode,A=t.child,B=A.sibling,r=ga(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&1206910976,B!==null?l=ga(B,l):(l=Ar(l,c,a,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,Bo(null,r),r=n.child,l=t.child.memoizedState,l===null?l=Zf(a):(c=l.cachePool,c!==null?(A=hn._currentValue,c=c.parent!==A?{parent:A,pool:A}:c):c=og(),l={baseLanes:l.baseLanes|a,cachePool:c}),r.memoizedState=l,r.childLanes=Kf(t,p,a),n.memoizedState=Yf,Bo(t.child,r)):(Ja(n),a=t.child,t=a.sibling,a=ga(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(p=n.deletions,p===null?(n.deletions=[t],n.flags|=16):p.push(t)),n.child=a,n.memoizedState=null,a)}function Qf(t,n){return n=fu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function fu(t,n){return t=Wn(22,t,null,n),t.lanes=0,t}function du(t,n,a){return Pr(n,t.child,null,a),t=Qf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function KM(t,n,a,r,l,c,p,A){if(a)return n.flags&256?(Ja(n),n.flags&=-257,du(t,n,A)):n.memoizedState!==null?(ja(),n.child=t.child,n.flags|=128,null):(ja(),c=l.fallback,p=n.mode,l=fu({mode:"visible",children:l.children},p),c=Ar(c,p,A,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Pr(n,t.child,null,A),l=n.child,l.memoizedState=Zf(A),l.childLanes=Kf(t,r,A),n.memoizedState=Yf,Bo(null,l));if(Ja(n),Zd(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var B=r.dgst;return r=B,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,Ao({value:l,source:null,stack:null})),du(t,n,A)}if(mn||wr(t,n,A,!1),r=(A&t.childLanes)!==0,mn||r){if(Qa.current!==null)return du(t,n,A);if(r=Qe,r!==null&&(l=ho(r,A),l!==0&&l!==p.retryLane))throw p.retryLane=l,br(t,l),Kn(r,t,l),Wf;return Yd(c)||Du(),du(t,n,A)}return Yd(c)?(n.flags|=192,n.child=t.child,null):(t=p.treeContext,je=Ti(c.nextSibling),yn=n,xe=!0,Xa=null,yi=!1,t!==null&&eg(n,t),n=Qf(n,l.children),n.flags|=134221824,n)}function x0(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),kl(t.return,n,a)}function M0(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&$l(a)===null&&(n=t),t=t.sibling}return n}function hu(t,n,a,r,l,c){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l,treeForkCount:c}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=r,p.tail=a,p.tailMode=l,p.treeForkCount=c)}function Jf(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function jf(t,n,a){var r=n.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var p=Cn.current;if(n.flags&128)return Oo(n,p),null;var A=(p&2)!==0;if(A?(p=p&1|2,n.flags|=128):p&=1,Oo(n,p),l==="backwards"&&t!==null?(Jf(t),Sn(t,n,r,a),Jf(t)):Sn(t,n,r,a),r=xe?bo:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&x0(t,a,n);else if(t.tag===19)x0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":a=M0(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,Jf(n)),hu(n,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&$l(t)===null){n.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}hu(n,!0,a,null,c,r);break;case"together":hu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=M0(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),hu(n,!1,l,a,c,r)}return n.child}function y0(t,n,a){var r=n.pendingProps;return Wa(n,n.type,r.value),Sn(t,n,r.children,a),n.child}function ya(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),nr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(wr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ga(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ga(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function $f(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Wl(t)))}function QM(t,n,a){switch(n.tag){case 3:K(n,n.stateNode.containerInfo),Wa(n,hn,t.memoizedState.cache),Rr();break;case 27:case 5:Ie(n);break;case 4:K(n,n.stateNode.containerInfo);break;case 10:Wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Tf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ja(n),n.flags|=128,null;r=wr(t,n,a,!1);var l=n.child.childLanes;return r||(a&l)!==0?S0(t,n,a):(Ja(n),t=ya(t,n,a),t!==null?t.sibling:null)}Ja(n);break;case 19:if(n.flags&128)return jf(t,n,a);if(l=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(wr(t,n,a,!1),r=(a&n.childLanes)!==0),l){if(r)return jf(t,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Oo(n,Cn.current),r)break;return null;case 22:return n.lanes=0,h0(t,n,a,n.pendingProps);case 24:Wa(n,hn,t.memoizedState.cache)}return ya(t,n,a)}function E0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!$f(t,a)&&(n.flags&128)===0)return mn=!1,QM(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,xe&&(n.flags&1048576)!==0&&tg(n,bo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Lr(n.elementType),n.type=t,typeof t=="function")sf(t)?(r=zr(t,r),n.tag=1,n=_0(null,n,t,r,a)):(n.tag=0,n=qf(null,n,t,r,a));else{if(t!=null){var l=t.$$typeof;if(l===X){n.tag=11,n=c0(null,n,t,r,a);break t}else if(l===it){n.tag=14,n=f0(null,n,t,r,a);break t}else if(l===Q){n.tag=10,n.type=t,n=y0(null,n,a);break t}}throw n=Et(t)||t,Error(s(306,n,""))}}return n;case 0:return qf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,l=zr(r,n.pendingProps),_0(t,n,r,l,a);case 3:t:{if(K(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;l=c.element,Sf(t,n),Lo(n,r,null,a);var p=n.memoizedState;if(r=p.cache,Wa(n,hn,r),r!==c.cache&&hf(n,[hn],a,!0),No(),r=p.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=v0(t,n,r,a);break t}else if(r!==l){l=Si(Error(s(424)),n),Ao(l),n=v0(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,je=Ti(t.firstChild),yn=n,xe=!0,Xa=null,yi=!0,a=hg(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Rr(),r===l){n=ya(t,n,a);break t}Sn(t,n,r,a)}n=n.child}return n;case 26:return Ss(t,n),t===null?(a=Z_(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(n.stateNode=R_(n.type,n.pendingProps,Pe.current,n)):n.memoizedState=Z_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ie(n),t===null&&xe&&(r=n.stateNode=k_(n.type,n.pendingProps,Pe.current),yn=n,yi=!0,l=je,sr(n.type)?(Kd=l,je=Ti(r.firstChild)):je=l),Sn(t,n,n.pendingProps.children,a),Ss(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((l=r=je)&&(r=ky(r,n.type,n.pendingProps,yi),r!==null?(n.stateNode=r,yn=n,je=Ti(r.firstChild),yi=!1,l=!0):l=!1),l||ka(n)),Ie(n),l=n.type,c=n.pendingProps,p=t!==null?t.memoizedProps:null,r=c.children,Hd(l,c)?r=null:p!==null&&Hd(l,p)&&(n.flags|=32),n.memoizedState!==null&&(l=Rf(t,n,FM,null,null,a),zs._currentValue=l),Ss(t,n),Sn(t,n,r,a),n.child;case 6:return t===null&&xe&&((t=a=je)&&(a=Wy(a,n.pendingProps,yi),a!==null?(n.stateNode=a,yn=n,je=null,t=!0):t=!1),t||ka(n)),null;case 13:return S0(t,n,a);case 4:return K(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Pr(n,null,r,a):Sn(t,n,r,a),n.child;case 11:return c0(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Ss(t,n),Sn(t,n,r,a),n.child;case 8:return Sn(t,n,n.pendingProps.children,a),n.child;case 12:return Sn(t,n,n.pendingProps.children,a),n.child;case 10:return y0(t,n,a);case 9:return l=n.type._context,r=n.pendingProps.children,Dr(n),l=An(l),r=r(l),n.flags|=1,Sn(t,n,r,a),n.child;case 14:return f0(t,n,n.type,n.pendingProps,a);case 15:return d0(t,n,n.type,n.pendingProps,a);case 19:return jf(t,n,a);case 31:return ZM(t,n,a);case 22:return h0(t,n,a,n.pendingProps);case 24:return Dr(n),r=An(hn),t===null?(l=gf(),l===null&&(l=Qe,c=pf(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=a),l=c),n.memoizedState={parent:r,cache:l},vf(n),Wa(n,hn,l)):((t.lanes&a)!==0&&(Sf(t,n),Lo(n,null,null,a),No()),l=t.memoizedState,c=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Wa(n,hn,r)):(r=c.cache,Wa(n,hn,r),r!==l.cache&&hf(n,[hn],a,!0))),Sn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:xe&&Vl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:Ss(t,n),Sn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ea(t){t.flags|=4}function td(t,n,a,r,l){var c;if((c=(t.mode&32)!==0)&&(c=a===null?j_(n,r):j_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(a_())t.flags|=8192;else throw Or=Kl,_f}else t.flags&=-16777217}function T0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!$_(n))if(a_())t.flags|=8192;else throw Or=Kl,_f}function pu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?co():536870912,t.lanes|=n,Ts|=n)}function Fo(t,n){if(!xe)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function $e(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function JM(t,n,a){var r=n.pendingProps;switch(uf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Sa(hn),nn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ds(n)?Ea(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ff())),$e(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(Ea(n),c!==null?($e(n),T0(n,c)):($e(n),td(n,l,null,r,a))):c?c!==t.memoizedState?(Ea(n),$e(n),T0(n,c)):($e(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Ea(n),$e(n),td(n,l,t,r,a)),null;case 27:if(P(n),a=Pe.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ea(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}t=Be.current,ds(n)?ng(n):(t=k_(l,r,a),n.stateNode=t,Ea(n))}return $e(n),n.subtreeFlags&=-33554433,null;case 5:if(P(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ea(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}if(c=Be.current,ds(n))ng(n);else{var p=Qo(Pe.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?p.createElement("select",{is:r.is}):p.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?p.createElement(l,{is:r.is}):p.createElement(l)}}c[b]=n,c[k]=r;t:for(p=n.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break t;for(;p.sibling===null;){if(p.return===null||p.return===n)break t;p=p.return}p.sibling.return=p.return,p=p.sibling}n.stateNode=c;t:switch(Dn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Ea(n)}}return $e(n),n.subtreeFlags&=-33554433,td(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Ea(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Pe.current,ds(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,l=yn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[b]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||E_(t.nodeValue,a)),t||ka(n,!0)}else t=Qo(t).createTextNode(r),t[b]=n,n.stateNode=t}return $e(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=ds(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[b]=n}else Rr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),t=!1}else a=ff(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $e(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=ds(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[b]=n}else Rr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),l=!1}else l=ff(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),pu(n,n.updateQueue),$e(n),null);case 4:return nn(),t===null&&Pd(n.stateNode.containerInfo),n.flags|=67108864,$e(n),null;case 10:return Sa(n.type),$e(n),null;case 19:if(bf(n),r=n.memoizedState,r===null)return $e(n),null;if(l=(n.flags&128)!==0,c=r.rendering,c===null)if(l)Fo(r,!1);else{if(cn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=$l(t),c!==null){for(n.flags|=128,Fo(r,!1),t=c.updateQueue,n.updateQueue=t,pu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Jm(a,t),a=a.sibling;return Oo(n,Cn.current&1|2),xe&&_a(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&Xt()>Au&&(n.flags|=128,l=!0,Fo(r,!1),n.lanes=4194304)}else{if(!l)if(t=$l(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,pu(n,t),Fo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!xe)return $e(n),null}else 2*Xt()-r.renderingStartTime>Au&&a!==536870912&&(n.flags|=128,l=!0,Fo(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Xt(),t.sibling=null,c=Cn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||xe?Oo(n,c):(a=c,ne(Rn,n),ne(Cn,a),On===null&&(On=n)),xe&&_a(n,r.treeForkCount),t}return $e(n),null;case 22:case 23:return ai(n),Ef(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&pu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&jt(Nr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Sa(hn),$e(n),null;case 25:return null;case 30:return n.flags|=33554432,$e(n),null}throw Error(s(156,n.tag))}function jM(t,n){switch(uf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Sa(hn),nn(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return P(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(s(340));Rr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Rr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return bf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return nn(),null;case 10:return Sa(n.type),null;case 22:case 23:return ai(n),Ef(),t!==null&&jt(Nr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Sa(hn),null;case 25:return null;default:return null}}function b0(t,n){switch(uf(n),n.tag){case 3:Sa(hn),nn();break;case 26:case 27:case 5:P(n);break;case 4:nn();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:bf(n);break;case 10:Sa(n.type);break;case 22:case 23:ai(n),Ef(),t!==null&&jt(Nr);break;case 24:Sa(hn)}}function Ho(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&t)===t){r=void 0;var c=a.create,p=a.inst;r=c(),p.destroy=r}a=a.next}while(a!==l)}}catch(A){We(n,n.return,A)}}function $a(t,n,a){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var p=r.inst,A=p.destroy;if(A!==void 0){p.destroy=void 0,l=n;var B=a,tt=A;try{tt()}catch(ft){We(l,B,ft)}}}r=r.next}while(r!==c)}}catch(ft){We(n,n.return,ft)}}function A0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{mg(n,a)}catch(r){We(t,t.return,r)}}}function R0(t,n,a){a.props=zr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){We(t,n,r)}}function Yi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=pa(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=O_(c)),r=l.ref;break;case 7:if(t.stateNode===null){var p=new ui(t);v(t.child,!1,Vy,p,void 0,void 0),t.stateNode=p}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(A){We(t,n,A)}}function wn(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){We(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){We(t,n,l)}else a.current=null}function mu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)H_(t.stateNode,n[a])}function C0(t){for(var n=t.return;n!==null&&(nd(n)&&H_(t.stateNode,n.stateNode),!ed(n));)n=n.return}function Go(t){for(var n=t.return;n!==null&&(nd(n)&&Xy(t.stateNode,n.stateNode),!ed(n));)n=n.return}function ed(t){return t.tag===5||t.tag===3||t.tag===27}function nd(t){return t&&t.tag===7&&t.stateNode!==null}function id(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){We(t,t.return,l)}}function ad(t,n,a){try{var r=t.stateNode;Ty(r,t.type,a,n),r[k]=n}catch(l){We(t,t.return,l)}}function w0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&sr(t.type)||t.tag===4}function rd(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||w0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&sr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sd(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki)),mu(t,r),Se=!0;else if(l!==4&&(l===27&&(mu(t,r),r=null,sr(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(sd(t,n,a,r),t=t.sibling;t!==null;)sd(t,n,a,r),t=t.sibling}function gu(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?a.insertBefore(l,n):a.appendChild(l),mu(t,r),Se=!0;else if(l!==4&&(l===27&&(mu(t,r),r=null,sr(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(gu(t,n,a,r),t=t.sibling;t!==null;)gu(t,n,a,r),t=t.sibling}function D0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Dn(n,r,a),n[b]=t,n[k]=a}catch(c){We(t,t.return,c)}}var _u=!1,ri=null;function U0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(_u=!0)}var Zi=null;function N0(){var t=Zi;return Zi=null,t}var qn=0;function xs(t,n,a,r,l){return qn=0,L0(t.child,n,a,r,l)}function L0(t,n,a,r,l){for(var c=!1;t!==null;){if(t.tag===5){var p=t.stateNode;if(r!==null){var A=Xd(p);r.push(A),A.view&&(c=!0)}else c||Xd(p).view&&(c=!0);_u=!0,N_(p,qn===0?n:n+"_"+qn,a),qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||L0(t.child,n,a,r,l)&&(c=!0));t=t.sibling}return c}function Ki(t,n){for(;t!==null;)t.tag===5?L_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Ki(t.child,n)),t=t.sibling}function vu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(vu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ma(n.default,n.share),n!=="none"&&(xs(t,a,n,null,!1)||Ki(t.child,!1))}t=t.sibling}}function od(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,l=pa(r,a),c=ma(r.default,a.paired?r.share:r.enter);c!=="none"?xs(t,l,c,null,!1)?(vu(t),a.paired||n||Cs(t,r.onEnter)):Ki(t.child,!1):vu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)od(t,n),t=t.sibling;else vu(t)}function ld(t){if(ri!==null&&ri.size!==0){var n=ri;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var c=ma(a.default,a.share);if(c!=="none"&&(xs(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,Cs(t,a.onShare)):Ki(t.child,!1)),n.delete(r),n.size===0)break}}}ld(t)}t=t.sibling}}}function ud(t){if(t.tag===30){var n=t.memoizedProps,a=pa(n,t.stateNode),r=ri!==null?ri.get(a):void 0,l=ma(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(xs(t,a,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,ri.delete(a),Cs(t,n.onShare)):Cs(t,n.onExit):Ki(t.child,!1)),ri!==null&&ld(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ud(t),t=t.sibling;else ri!==null&&ld(t)}function O0(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=pa(n,t.stateNode);n=ma(n.default,n.update),t.flags&=-5,n!=="none"&&xs(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&O0(t);t=t.sibling}}function cd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Ki(t.child,!1))}cd(t)}t=t.sibling}}function Su(t){if(t.tag===30)t.stateNode.paired=null,Ki(t.child,!1),cd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Su(t),t=t.sibling;else cd(t)}function P0(t){for(t=t.child;t!==null;)t.tag===30?Ki(t.child,!1):(t.subtreeFlags&33554432)!==0&&P0(t),t=t.sibling}function fd(t,n,a,r,l,c,p){for(var A=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(c!==null&&qn<c.length){var tt=c[qn],ft=Xd(B);(tt.view||ft.view)&&(A=!0);var xt;if(xt=(t.flags&4)===0)if(ft.clip)xt=!0;else{xt=tt.rect;var j=ft.rect;xt=xt.y!==j.y||xt.x!==j.x||xt.height!==j.height||xt.width!==j.width}xt&&(t.flags|=4),ft.abs?ft=!tt.abs:(tt=tt.rect,ft=ft.rect,ft=tt.height!==ft.height||tt.width!==ft.width),ft&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&N_(B,qn===0?a:a+"_"+qn,l),A&&(t.flags&4)!==0||(Zi===null&&(Zi=[]),Zi.push(B,qn===0?r:r+"_"+qn,n.memoizedProps)),qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&p?t.flags|=n.flags&32:fd(t,n.child,a,r,l,c,p)&&(A=!0));n=n.sibling}return A}function I0(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,l=pa(a,r),c=ma(a.default,a.update),p;p=t.memoizedState,t.memoizedState=null,r=t;var A=t.child;qn=0,l=fd(r,A,l,l,c,p,!1),(t.flags&4)!==0&&l&&Cs(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&I0(t);t=t.sibling}}var En=!1,Xe=!1,Qi=!1,dd=!1,z0=typeof WeakSet=="function"?WeakSet:Set,Tn=null,Ji=!1,Vo=!1,xu=!1,hd=!1;function $M(t,n,a){if(t=t.containerInfo,Bd=Bs,t=Gm(t),jc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break t}var A=0,B=-1,tt=-1,ft=0,xt=0,j=t,lt=null;e:for(;;){for(var Ot;j!==r||c!==0&&j.nodeType!==3||(B=A+c),j!==p||l!==0&&j.nodeType!==3||(tt=A+l),j.nodeType===3&&(A+=j.nodeValue.length),(Ot=j.firstChild)!==null;)lt=j,j=Ot;for(;;){if(j===t)break e;if(lt===r&&++ft===c&&(B=A),lt===p&&++xt===l&&(tt=A),(Ot=j.nextSibling)!==null)break;j=lt,lt=j.parentNode}j=Ot}r=B===-1||tt===-1?null:{start:B,end:tt}}else r=null}r=r||{start:0,end:0}}else r=null;for(Fd={focusedElem:t,selectionRange:r},Bs=!1,a=(a&335544064)===a,Tn=n,n=a?9270:1024;Tn!==null;){if(t=Tn,a&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)a&&ud(r[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&U0(t),Mu(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&ud(r),Mu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&U0(t),Mu(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,Tn=r):(a&&O0(t),Mu(a))}}ri=null}function Mu(t){for(;Tn!==null;){var n=Tn,a=t,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){a=void 0,l=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var p=zr(n.type,l);a=c.getSnapshotBeforeUpdate(p,r),c.__reactInternalSnapshotBeforeUpdate=a}catch(A){We(n,n.return,A)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)qd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":qd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=pa(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=ma(l.default,l.update),l!=="none"&&xs(r,a,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Tn=r;break}Tn=n.return}}function B0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ji(t,a),r&4&&Ho(5,a);break;case 1:if(ji(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(p){We(a,a.return,p)}else{var l=zr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(p){We(a,a.return,p)}}r&64&&A0(a),r&512&&Yi(a,a.return);break;case 3:if(ji(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{mg(t,n)}catch(p){We(a,a.return,p)}}break;case 27:n===null&&r&4&&D0(a);case 26:case 5:ji(t,a),n===null&&r&4&&id(a),r&512&&Yi(a,a.return);break;case 12:ji(t,a);break;case 31:ji(t,a),r&4&&V0(t,a);break;case 13:ji(t,a),r&4&&X0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=fy.bind(null,a),qy(t,a))));break;case 22:if(r=a.memoizedState!==null||En,!r){var c=n!==null&&n.memoizedState!==null||Xe;n=En,l=Xe,En=r,(Xe=c)&&!l?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ui(t,a,r)):ji(t,a),En=n,Xe=l}break;case 30:ji(t,a),r&512&&Yi(a,a.return);break;case 7:r&512&&Yi(a,a.return);default:ji(t,a)}}function pd(t,n){for(t=t.child;t!==null;)F0(t,n),t=t.sibling}function F0(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,p=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(B){We(t,t.return,B)}md(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Se=!0}catch(B){We(t,t.return,B)}break;case 18:try{var A=t.stateNode;n?U_(A,!0):U_(t.stateNode,!1)}catch(B){We(t,t.return,B)}break;case 22:case 23:t.memoizedState===null&&pd(t,n);break;default:pd(t,n)}}function md(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:F0(a,r);break t;case 22:a.memoizedState===null&&md(a,r);break t;default:md(a,r)}}t=t.sibling}}function H0(t){var n=t.alternate;n!==null&&(t.alternate=null,H0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Kt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,Yn=!1;function wi(t,n,a){for(a=a.child;a!==null;)G0(t,n,a),a=a.sibling}function G0(t,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Jt,a)}catch{}switch(a.tag){case 26:Xe||wn(a,n),wi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Xe&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xe||wn(a,n),Go(a);var r=tn,l=Yn;sr(a.type)&&(tn=a.stateNode,Yn=!1),wi(t,n,a),W_(a.stateNode,a.type,a.memoizedProps),tn=r,Yn=l;break;case 5:Xe||wn(a,n),Go(a);case 6:if(a.tag===6&&Go(a),r=tn,l=Yn,tn=null,wi(t,n,a),tn=r,Yn=l,tn!==null)if(Yn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),Se=!0}catch(c){We(a,n,c)}else try{tn.removeChild(a.stateNode),Se=!0}catch(c){We(a,n,c)}break;case 18:tn!==null&&(Yn?(t=tn,D_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Fs(t)):D_(tn,a.stateNode));break;case 4:r=tn,l=Yn,tn=a.stateNode.containerInfo,Yn=!0,wi(t,n,a),tn=r,Yn=l;break;case 0:case 11:case 14:case 15:$a(2,a,n),Xe||$a(4,a,n),wi(t,n,a);break;case 1:Xe||(wn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&R0(a,n,r)),wi(t,n,a);break;case 21:wi(t,n,a);break;case 22:Xe=(r=Xe)||a.memoizedState!==null,wi(t,n,a),Xe=r;break;case 30:wn(a,n),wi(t,n,a);break;case 7:Xe||wn(a,n),wi(t,n,a);break;default:wi(t,n,a)}}function V0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Fs(t)}catch(a){We(n,n.return,a)}}}function X0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Fs(t)}catch(a){We(n,n.return,a)}}function ty(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new z0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new z0),n;default:throw Error(s(435,t.tag))}}function yu(t,n){var a=ty(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var l=dy.bind(null,t,r);r.then(l,l)}})}function Vn(t,n,a){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],p=t,A=n,B=A;t:for(;B!==null;){switch(B.tag){case 27:if(sr(B.type)){tn=B.stateNode,Yn=!1;break t}break;case 5:tn=B.stateNode,Yn=!1;break t;case 3:case 4:tn=B.stateNode.containerInfo,Yn=!0;break t}B=B.return}if(tn===null)throw Error(s(160));G0(p,A,c),tn=null,Yn=!1,p=c.alternate,p!==null&&(p.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)k0(n,t,a),n=n.sibling}var Di=null;function k0(t,n,a){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var p=r[c];p.ref.impl=p.nextImpl}Vn(n,t,a),Xn(t),l&4&&($a(3,t,t.return),Ho(3,t),$a(5,t,t.return));break;case 1:Vn(n,t,a),Xn(t),l&512&&(Xe||r===null||wn(r,r.return)),l&64&&En&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=Di,Vn(n,t,a),Xn(t),l&512&&(Xe||r===null||wn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(En)t.stateNode=R_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Lt]||r[b]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Dn(r,n,a),r[b]=t,ve(r),n=r;break t;case"link":if(c=J_("link","href",l).get(n+(a.href||""))){for(p=0;p<c.length;p++)if(r=c[p],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(p,1);break e}}r=l.createElement(n),Dn(r,n,a),l.head.appendChild(r);break;case"meta":if(c=J_("meta","content",l).get(n+(a.content||""))){for(p=0;p<c.length;p++)if(r=c[p],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(p,1);break e}}r=l.createElement(n),Dn(r,n,a),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[b]=t,ve(r),n=r}t.stateNode=n}else En||$d(c,t.type,t.stateNode);else t.stateNode=Q_(c,a,t.memoizedProps);else l!==a?(l===null?(n=r.stateNode,n===null||Xe||n.parentNode.removeChild(n)):l.count--,a===null?En||$d(c,t.type,t.stateNode):Q_(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&ad(t,t.memoizedProps,r.memoizedProps);break;case 27:Vn(n,t,a),Xn(t),l&512&&(Xe||r===null||wn(r,r.return)),r!==null&&l&4&&ad(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Qi,Qi=!1,Vn(n,t,a),Qi=c,Xn(t),l&512&&(Xe||r===null||wn(r,r.return)),t.flags&32){n=t.stateNode;try{ns(n,""),Se=!0}catch(ft){We(t,t.return,ft)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,ad(t,n,r!==null?r.memoizedProps:n)),l&1024&&(dd=!0);break;case 6:if(Vn(n,t,a),Xn(t),l&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Se=!0}catch(ft){We(t,t.return,ft)}}break;case 3:if(Se=!1,zu=null,c=Di,Di=Jo(n.containerInfo),Vn(n,t,a),Di=c,Xn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Fs(n.containerInfo)}catch(ft){We(t,t.return,ft)}dd&&(dd=!1,W0(t)),Se=!1;break;case 4:l=Qi,Qi=En,r=Fe(),c=Di,Di=Jo(t.stateNode.containerInfo),Vn(n,t,a),Xn(t),Di=c,Se&&Vo&&(xu=!0),Se=r,Qi=l;break;case 12:Vn(n,t,a),Xn(t);break;case 31:Vn(n,t,a),Xn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,yu(t,n)));break;case 13:Vn(n,t,a),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(bu=Xt()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,yu(t,n)));break;case 22:c=t.memoizedState!==null,p=r!==null&&r.memoizedState!==null;var A=En,B=Xe,tt=Qi;En=A||c,Qi=tt||c,Xe=B||p,Vn(n,t,a),Xe=B,Qi=tt,En=A,Xn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||p||En||Xe||(n=p||Xe,a=En,r=Xe,En=c||En,Xe=n,tr(t,2),En=a,Xe=r),!c&&Qi||pd(t,c)),l&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,yu(t,a))));break;case 19:Vn(n,t,a),Xn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,yu(t,n)));break;case 30:l&512&&(Xe||r===null||wn(r,r.return)),l=Fe(),c=Vo,p=(a&335544064)===a,A=t.memoizedProps,Vo=p&&ma(A.default,A.update)!=="none",Vn(n,t,a),Xn(t),p&&r!==null&&Se&&(t.flags|=4),Vo=c,Se=l;break;case 21:break;case 7:l&512&&(Xe||r===null||wn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Vn(n,t,a),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(w0(r)){a=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(nd(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(ed(l))break;l=l.return}var p=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var A=a.stateNode,B=rd(t);gu(t,B,A,p);break;case 5:var tt=a.stateNode;a.flags&32&&(ns(tt,""),a.flags&=-33);var ft=rd(t);gu(t,ft,tt,p);break;case 3:case 4:var xt=a.stateNode.containerInfo,j=rd(t);sd(t,j,xt,p);break;default:throw Error(s(161))}}catch(lt){We(t,t.return,lt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function W0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;W0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Bs=!0,n.reset(),Bs=!1),t=t.sibling}}function Ms(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)q0(n,t),n=n.sibling;else I0(n)}function q0(t,n){var a=t.alternate;if(a===null)od(t,!1);else switch(t.tag){case 3:if(hd=Ji=!1,N0(),Ms(n,t),!Ji&&!xu){if(t=Zi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var l=t[r+1];L_(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),hd=!0}Zi=null;break;case 5:Ms(n,t);break;case 4:r=Ji,Ji=!1,Ms(n,t),Ji&&(xu=!0),Ji=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?od(t,!1):Ms(n,t));break;case 30:r=Ji,l=N0(),Ji=!1,Ms(n,t),Ji&&(t.flags|=4);var c=t.memoizedProps,p=t.stateNode;n=pa(c,p),p=pa(a.memoizedProps,p);var A=ma(c.default,c.update);A==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,qn=0,n=fd(t,a,n,p,A,c,!0),qn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Cs(t,t.memoizedProps.onUpdate),Zi=l):l!==null&&(l.push.apply(l,Zi),Zi=l),Ji=(t.flags&32)!==0?!0:r;break;default:Ms(n,t)}}function ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)B0(t,n.alternate,n),n=n.sibling}function tr(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:$a(4,a,a.return),tr(a,r);break;case 1:wn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&R0(a,a.return,l),tr(a,r);break;case 27:(r&2)!==0&&W_(a.stateNode,a.type,a.memoizedProps);case 5:wn(a,a.return),a.tag!==5&&a.tag!==27||Go(a),tr(a,r);break;case 6:Go(a);break;case 26:wn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||Xe||l.parentNode.removeChild(l),tr(a,r);break;case 22:a.memoizedState===null&&tr(a,r);break;case 30:wn(a,a.return),tr(a,r);break;case 7:wn(a,a.return);default:tr(a,r)}t=t.sibling}}function Ui(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,l=t,c=n,p=c.flags,A=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Ui(l,c,a),Ho(4,c);break;case 1:if(Ui(l,c,a),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(ft){We(r,r.return,ft)}if(r=c,l=r.updateQueue,l!==null){var B=r.stateNode;try{var tt=l.shared.hiddenCallbacks;if(tt!==null)for(l.shared.hiddenCallbacks=null,l=0;l<tt.length;l++)pg(tt[l],B)}catch(ft){We(r,r.return,ft)}}A&&p&64&&A0(c),Yi(c,c.return);break;case 27:(a&2)!==0&&D0(c);case 5:c.tag!==5&&c.tag!==27||C0(c),Ui(l,c,a),A&&r===null&&p&4&&id(c),Yi(c,c.return);break;case 6:C0(c);break;case 26:B=c.stateNode,c.memoizedState!==null||B===null||En||$d(Jo(B.ownerDocument),c.type,B),Ui(l,c,a),A&&r===null&&p&4&&id(c),Yi(c,c.return);break;case 12:Ui(l,c,a);break;case 31:Ui(l,c,a),A&&p&4&&V0(l,c);break;case 13:Ui(l,c,a),A&&p&4&&X0(l,c);break;case 22:c.memoizedState===null&&Ui(l,c,a),Yi(c,c.return);break;case 30:Ui(l,c,a),Yi(c,c.return);break;case 7:Yi(c,c.return);default:Ui(l,c,a)}n=n.sibling}}function gd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ro(a))}function _d(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ro(t))}function Ei(t,n,a,r){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)Y0(t,n,a,r),n=n.sibling;else l&&P0(n)}function Y0(t,n,a,r){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Su(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,r),c&2048&&Ho(9,n);break;case 1:Ei(t,n,a,r);break;case 3:Ei(t,n,a,r),l&&hd&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Ro(c)));break;case 12:if(c&2048){Ei(t,n,a,r),c=n.stateNode;try{var p=n.memoizedProps,A=p.id,B=p.onPostCommit;typeof B=="function"&&B(A,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(tt){We(n,n.return,tt)}}else Ei(t,n,a,r);break;case 31:Ei(t,n,a,r);break;case 13:Ei(t,n,a,r);break;case 23:break;case 22:p=n.stateNode,A=n.alternate,n.memoizedState!==null?(l&&A!==null&&A.memoizedState===null&&Su(A),p._visibility&2?Ei(t,n,a,r):Xo(t,n)):(l&&A!==null&&A.memoizedState!==null&&Su(n),p._visibility&2?Ei(t,n,a,r):(p._visibility|=2,ys(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&gd(A,n);break;case 24:Ei(t,n,a,r),c&2048&&_d(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(Ki(c.child,!0),Ki(n.child,!0))),Ei(t,n,a,r);break;default:Ei(t,n,a,r)}}function ys(t,n,a,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,p=n,A=a,B=r,tt=p.flags;switch(p.tag){case 0:case 11:case 15:ys(c,p,A,B,l),Ho(8,p);break;case 23:break;case 22:var ft=p.stateNode;p.memoizedState!==null?ft._visibility&2?ys(c,p,A,B,l):Xo(c,p):(ft._visibility|=2,ys(c,p,A,B,l)),l&&tt&2048&&gd(p.alternate,p);break;case 24:ys(c,p,A,B,l),l&&tt&2048&&_d(p.alternate,p);break;default:ys(c,p,A,B,l)}n=n.sibling}}function Xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,l=r.flags;switch(r.tag){case 22:Xo(a,r),l&2048&&gd(r.alternate,r);break;case 24:Xo(a,r),l&2048&&_d(r.alternate,r);break;default:Xo(a,r)}n=n.sibling}}var Br=8192;function Fr(t,n,a){if(t.subtreeFlags&Br)for(t=t.child;t!==null;)Z0(t,n,a),t=t.sibling}function Z0(t,n,a){switch(t.tag){case 26:Fr(t,n,a),t.flags&Br&&(t.memoizedState!==null?sE(a,Di,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&ev(a,t)));break;case 5:Fr(t,n,a),t.flags&Br&&(t=t.stateNode,(n&335544128)===n&&ev(a,t));break;case 3:case 4:var r=Di;Di=Jo(t.stateNode.containerInfo),Fr(t,n,a),Di=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Br,Br=16777216,Fr(t,n,a),Br=r):Fr(t,n,a));break;case 30:if((t.flags&Br)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,ri===null&&(ri=new Map),ri.set(r,l)}Fr(t,n,a);break;default:Fr(t,n,a)}}function K0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ko(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Tn=r,J0(r,t)}K0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Q0(t),t=t.sibling}function Q0(t){switch(t.tag){case 0:case 11:case 15:ko(t),t.flags&2048&&$a(9,t,t.return);break;case 3:ko(t);break;case 12:ko(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Eu(t)):ko(t);break;default:ko(t)}}function Eu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Tn=r,J0(r,t)}K0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),Eu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Eu(n));break;default:Eu(n)}t=t.sibling}}function J0(t,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:$a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ro(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Tn=r;else t:for(a=t;Tn!==null;){r=Tn;var l=r.sibling,c=r.return;if(H0(r),r===a){Tn=null;break t}if(l!==null){l.return=c,Tn=l;break t}Tn=c}}}var ey={getCacheForType:function(t){var n=An(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(hn).controller.signal}},ny=typeof WeakMap=="function"?WeakMap:Map,He=0,Qe=null,ye=null,Re=0,ke=0,si=null,er=!1,Es=!1,vd=!1,Ta=0,cn=0,nr=0,Hr=0,Tu=0,oi=0,Ts=0,Wo=null,Zn=null,Sd=!1,bu=0,j0=0,Au=1/0,Ru=null,ir=null,an=0,Ni=null,Gr=null,$i=0,xd=0,Md=null,$0=null,bs=null,As=null,Rs=null,qo=0,Cu=null;function li(){return(He&2)!==0&&Re!==0?Re&-Re:mt.T!==null?Ud():Al()}function t_(){if(oi===0)if((Re&536870912)===0||xe){var t=xr;xr<<=1,(xr&3932160)===0&&(xr=262144),oi=t}else oi=536870912;return t=Rn.current,t!==null&&(t.flags|=32),oi}function Cs(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=O_(pa(t.memoizedProps,a))),As===null&&(As=[]),As.push(n.bind(null,r))}}function Kn(t,n,a){(t===Qe&&(ke===2||ke===9)||t.cancelPendingCommit!==null)&&(ws(t,0),ar(t,Re,oi,!1)),Vi(t,a),((He&2)===0||t!==Qe)&&(t===Qe&&((He&2)===0&&(Hr|=a),cn===4&&ar(t,Re,oi,!1)),ta(t))}function e_(t,n,a){if((He&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Fa(t,n),l=r?ry(t,n):Ed(t,n,!0),c=r;do{if(l===0){Es&&!r&&ar(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!iy(a)){l=Ed(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var p=0;else p=t.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;t:{var A=t;l=Wo;var B=A.current.memoizedState.isDehydrated;if(B&&(ws(A,p).flags|=256),p=Ed(A,p,!1),p!==2&&p!==6){if(vd&&!B){A.errorRecoveryDisabledLanes|=c,Hr|=c,l=4;break t}c=Zn,Zn=l,c!==null&&(Zn===null?Zn=c:Zn.push.apply(Zn,c))}l=p}if(c=!1,l!==2)continue}}if(l===1){ws(t,0),ar(t,n,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ar(r,n,oi,!er);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=bu+300-Xt(),10<l)){if(ar(r,n,oi,!er),Mr(r,0,!0)!==0)break t;$i=n,r.timeoutHandle=Vd(n_.bind(null,r,a,Zn,Ru,Sd,n,oi,Hr,Ts,er,c,"Throttled",-0,0),l);break t}n_(r,a,Zn,Ru,Sd,n,oi,Hr,Ts,er,c,null,-0,0)}}break}while(!0);ta(t)}function n_(t,n,a,r,l,c,p,A,B,tt,ft,xt,j,lt){t.timeoutHandle=-1;var Ot=n.subtreeFlags,Qt=(c&335544064)===c;if(xt=null,(Qt||Ot&8192||(Ot&16785408)===16785408)&&(xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},ri=null,Z0(n,c,xt),Qt&&(Ot=xt,Qt=t.containerInfo,Qt=(Qt.nodeType===9?Qt:Qt.ownerDocument).__reactViewTransition,Qt!=null&&(Ot.count++,Ot.waitingForViewTransition=!0,Ot=tl.bind(Ot),Qt.finished.then(Ot,Ot))),Ot=(c&62914560)===c?bu-Xt():(c&4194048)===c?j0-Xt():0,Ot=oE(xt,Ot),Ot!==null)){$i=c,t.cancelPendingCommit=Ot(c_.bind(null,t,n,c,a,r,l,p,A,B,tt,ft,xt,null,j,lt)),ar(t,c,p,!tt);return}c_(t,n,c,a,r,l,p,A,B,tt,ft,xt)}function iy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],c=l.getSnapshot;l=l.value;try{if(!ii(c(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ar(t,n,a,r){n=Gi(t,n),n&=~Tu,n&=~Hr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var c=31-fe(l),p=1<<c;r[c]=-1,l&=~p}a!==0&&yr(t,a,n)}function wu(){return(He&6)===0?(Yo(0),!1):!0}function yd(){if(ye!==null){if(ke===0)var t=ye.return;else t=ye,va=Cr=null,Df(t),ms=null,Do=0,t=ye;for(;t!==null;)b0(t.alternate,t),t=t.return;ye=null}}function ws(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,Ry(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),$i=0,yd(),Qe=t,ye=a=ga(t.current,null),Re=n,ke=0,si=null,er=!1,Es=Fa(t,n),vd=!1,Ts=oi=Tu=Hr=nr=cn=0,Zn=Wo=null,Sd=!1,Ta=Gi(t,n),zl(),a}function i_(t,n){me=null,mt.H=lu,n===ps||n===Zl?(n=cg(),ke=3):n===_f?(n=cg(),ke=4):ke=n===Wf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,ye===null&&(cn=1,uu(t,Si(n,t.current)))}function a_(){var t=Rn.current;return t===null?!0:(Re&4194048)===Re?On===null:(Re&62914560)===Re||(Re&536870912)!==0?t===On:!1}function r_(){var t=mt.H;return mt.H=lu,t===null?lu:t}function s_(){var t=mt.A;return mt.A=ey,t}function Du(){cn=4,er||(Re&4194048)!==Re&&Rn.current!==null||(Es=!0),(nr&134217727)===0&&(Hr&134217727)===0||Qe===null||ar(Qe,Re,oi,!1)}function Ed(t,n,a){var r=He;He|=2;var l=r_(),c=s_();(Qe!==t||Re!==n)&&(Ru=null,ws(t,n)),n=!1;var p=cn;t:do try{if(ke!==0&&ye!==null){var A=ye,B=si;switch(ke){case 8:yd(),p=6;break t;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var tt=ke;if(ke=0,si=null,Ds(t,A,B,tt),a&&Es){p=0;break t}break;default:tt=ke,ke=0,si=null,Ds(t,A,B,tt)}}ay(),p=cn;break}catch(ft){i_(t,ft)}while(!0);return n&&t.shellSuspendCounter++,va=Cr=null,He=r,mt.H=l,mt.A=c,ye===null&&(Qe=null,Re=0,zl()),p}function ay(){for(;ye!==null;)o_(ye)}function ry(t,n){var a=He;He|=2;var r=r_(),l=s_();Qe!==t||Re!==n?(Ru=null,Au=Xt()+500,ws(t,n)):Es=Fa(t,n);t:do try{if(ke!==0&&ye!==null){n=ye;var c=si;e:switch(ke){case 1:ke=0,si=null,Ds(t,n,c,1);break;case 2:case 9:if(lg(c)){ke=0,si=null,l_(n);break}n=function(){ke!==2&&ke!==9||Qe!==t||(ke=7),ta(t)},c.then(n,n);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:lg(c)?(ke=0,si=null,l_(n)):(ke=0,si=null,Ds(t,n,c,7));break;case 5:var p=null;switch(ye.tag){case 26:p=ye.memoizedState;case 5:case 27:var A=ye;if(p?$_(p):A.stateNode.complete){ke=0,si=null;var B=A.sibling;if(B!==null)ye=B;else{var tt=A.return;tt!==null?(ye=tt,Uu(tt)):ye=null}break e}}ke=0,si=null,Ds(t,n,c,5);break;case 6:ke=0,si=null,Ds(t,n,c,6);break;case 8:yd(),cn=6;break t;default:throw Error(s(462))}}sy();break}catch(ft){i_(t,ft)}while(!0);return va=Cr=null,mt.H=r,mt.A=l,He=a,ye!==null?0:(Qe=null,Re=0,zl(),cn)}function sy(){for(;ye!==null&&!zt();)o_(ye)}function o_(t){var n=E0(t.alternate,t,Ta);t.memoizedProps=t.pendingProps,n===null?Uu(t):ye=n}function l_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=g0(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=g0(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:Df(n);var r=n;r===yn&&(xe?(Xl(r),r.tag===5&&r.stateNode!=null&&(je=r.stateNode)):(Xl(r),xe=!0));default:b0(a,n),n=ye=Jm(n,Ta),n=E0(a,n,Ta)}t.memoizedProps=t.pendingProps,n===null?Uu(t):ye=n}function Ds(t,n,a,r){va=Cr=null,Df(n),ms=null,Do=0;var l=n.return;try{if(YM(t,l,n,a,Re)){cn=1,uu(t,Si(a,t.current)),ye=null;return}}catch(c){if(l!==null)throw ye=l,c;cn=1,uu(t,Si(a,t.current)),ye=null;return}n.flags&32768?(xe||r===1?t=!0:Es||(Re&536870912)!==0?t=!1:(er=t=!0,(r===2||r===9||r===3||r===6)&&(r=Rn.current,r!==null&&r.tag===13&&(r.flags|=16384))),u_(n,t)):Uu(n)}function Uu(t){var n=t;do{if((n.flags&32768)!==0){u_(n,er);return}t=n.return;var a=JM(n.alternate,n,Ta);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=t}while(n!==null);cn===0&&(cn=5)}function u_(t,n){do{var a=jM(t.alternate,t);if(a!==null){a.flags&=32767,ye=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ye=t;return}ye=t=a}while(t!==null);cn=6,ye=null}function c_(t,n,a,r,l,c,p,A,B,tt,ft,xt){t.cancelPendingCommit=null;do Nu();while(an!==0);if((He&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Qe&&(ye=Qe=null,Re=0),Gr=n,Ni=t,$i=a,Md=l,$0=r,oy(t,n,a,p,A,B,xt)}}function oy(t,n,a,r,l,c,p){var A=n.lanes|n.childLanes;if(xd=A,A|=af,bl(t,a,A,r,l,c),As=null,(a&335544064)===a?(Rs=PM(t),r=10262):(Rs=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,hy(wt,function(){return Rd(),null})):(t.callbackNode=null,t.callbackPriority=0),_u=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=mt.T,mt.T=null,l=At.p,At.p=2,c=He,He|=4;try{$M(t,n,a)}finally{He=c,At.p=l,mt.T=r}}an=1,_u?bs=Ly(p,t.containerInfo,Rs,Td,bd,uy,Ad,Rd,ly):(Td(),bd(),Ad())}function ly(t){if(an!==0){var n=Ni.onRecoverableError;n(t,{componentStack:null})}}function uy(){an===3&&(an=0,q0(Gr,Ni),an=4)}function Td(){if(an===1){an=0;var t=Ni,n=Gr,a=$i,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=mt.T,mt.T=null;var l=At.p;At.p=2;var c=He;He|=4;try{Vo=xu=!1,k0(n,t,a),a=Fd;var p=Gm(t.containerInfo),A=a.focusedElem,B=a.selectionRange;if(p!==A&&A&&A.ownerDocument&&Hm(A.ownerDocument.documentElement,A)){if(B!==null&&jc(A)){var tt=B.start,ft=B.end;if(ft===void 0&&(ft=tt),"selectionStart"in A)A.selectionStart=tt,A.selectionEnd=Math.min(ft,A.value.length);else{var xt=A.ownerDocument||document,j=xt&&xt.defaultView||window;if(j.getSelection){var lt=j.getSelection(),Ot=A.textContent.length,Qt=Math.min(B.start,Ot),ge=B.end===void 0?Qt:Math.min(B.end,Ot);!lt.extend&&Qt>ge&&(p=ge,ge=Qt,Qt=p);var $=Fm(A,Qt),q=Fm(A,ge);if($&&q&&(lt.rangeCount!==1||lt.anchorNode!==$.node||lt.anchorOffset!==$.offset||lt.focusNode!==q.node||lt.focusOffset!==q.offset)){var rt=xt.createRange();rt.setStart($.node,$.offset),lt.removeAllRanges(),Qt>ge?(lt.addRange(rt),lt.extend(q.node,q.offset)):(rt.setEnd(q.node,q.offset),lt.addRange(rt))}}}}for(xt=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&xt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xt.length;A++){var St=xt[A];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}Bs=!!Bd,Fd=Bd=null}finally{He=c,At.p=l,mt.T=r}}t.current=n,an=2}}function bd(){if(an===2){an=0;var t=Ni,n=Gr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=mt.T,mt.T=null;var r=At.p;At.p=2;var l=He;He|=4;try{B0(t,n.alternate,n)}finally{He=l,At.p=r,mt.T=a}}an=3}}function Ad(){if(an===4||an===3){an=0;var t=bs;bs=null,Pt();var n=Ni,a=Gr,r=$i,l=$0,c=(r&335544064)===r?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?an=5:(an=0,Gr=Ni=null,f_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(ir=null),mo(r),a=a.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Jt,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=mt.T,c=At.p,At.p=2,mt.T=null;try{for(var p=n.onRecoverableError,A=0;A<l.length;A++){var B=l[A];p(B.value,{componentStack:B.stack})}}finally{mt.T=a,At.p=c}}if(l=As,p=Rs,Rs=null,l!==null&&(As=null,p===null&&(p=[]),t!==null))for(B=0;B<l.length;B++)a=(0,l[B])(p),a!==void 0&&t.finished.finally(a);($i&3)!==0&&Nu(),ta(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Cu?qo++:(qo=0,Cu=n):(qo=0,Cu=null),Yo(0)}}function f_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ro(n)))}function Nu(){return bs!==null&&(bs.skipTransition(),bs=null),Td(),bd(),Ad(),Rd()}function Rd(){if(an!==5)return!1;var t=Ni,n=xd;xd=0;var a=mo($i),r=mt.T,l=At.p;try{At.p=32>a?32:a,mt.T=null,a=Md,Md=null;var c=Ni,p=$i;if(an=0,Gr=Ni=null,$i=0,(He&6)!==0)throw Error(s(331));var A=He;if(He|=4,Q0(c.current),Y0(c,c.current,p,a),He=A,Yo(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Jt,c)}catch{}return!0}finally{At.p=l,mt.T=r,f_(t,n)}}function d_(t,n,a){n=Si(a,n),n=kf(t.stateNode,n,2),t=Ka(t,n,2),t!==null&&(Vi(t,2),ta(t))}function We(t,n,a){if(t.tag===3)d_(t,t,a);else for(;n!==null;){if(n.tag===3){d_(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){t=Si(a,t),a=l0(2),r=Ka(n,a,2),r!==null&&(u0(a,r,n,t),Vi(r,2),ta(r));break}}n=n.return}}function Cd(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new ny;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(a)||(vd=!0,l.add(a),t=cy.bind(null,t,n,a),n.then(t,t))}function cy(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Qe===t&&(Re&a)===a&&((cn===4||cn===3&&(Re&62914560)===Re&&300>Xt()-bu)&&(He&2)===0?ws(t,0):Tu|=a,Ts===Re&&(Ts=0)),ta(t)}function h_(t,n){n===0&&(n=co()),t=br(t,n),t!==null&&(Vi(t,n),ta(t))}function fy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),h_(t,a)}function dy(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),h_(t,a)}function hy(t,n){return Dt(t,n)}var Us=null,Ns=null,wd=!1,Lu=!1,Dd=!1,rr=0;function ta(t){t!==Ns&&t.next===null&&(Ns===null?Us=Ns=t:Ns=Ns.next=t),Lu=!0,wd||(wd=!0,my())}function Yo(t,n){if(!Dd&&Lu){Dd=!0;do for(var a=!1,r=Us;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var p=r.suspendedLanes,A=r.pingedLanes;c=(1<<31-fe(42|t)+1)-1,c&=l&~(p&~A),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,__(r,c))}else c=Re,c=Mr(r,r===Qe?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Fa(r,c)||(a=!0,__(r,c));r=r.next}while(a);Dd=!1}}function py(){p_()}function p_(){Lu=wd=!1;var t=0;rr!==0&&Ay()&&(t=rr);for(var n=Xt(),a=null,r=Us;r!==null;){var l=r.next,c=m_(r,n);c===0?(r.next=null,a===null?Us=l:a.next=l,l===null&&(Ns=a)):(a=r,(t!==0||(c&3)!==0)&&(Lu=!0)),r=l}an!==0&&an!==5||Yo(t),rr!==0&&(rr=0)}function m_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var p=31-fe(c),A=1<<p,B=l[p];B===-1?((A&a)===0||(A&r)!==0)&&(l[p]=uo(A,n)):B<=n&&(t.expiredLanes|=A),c&=~A}if(n=Qe,a=Re,a=Mr(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(ke===2||ke===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&$t(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Fa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&$t(r),mo(a)){case 2:case 8:a=J;break;case 32:a=wt;break;case 268435456:a=Nt;break;default:a=wt}return r=g_.bind(null,t),a=Dt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&$t(r),t.callbackPriority=2,t.callbackNode=null,2}function g_(t,n){if(an!==0&&an!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Nu()&&t.callbackNode!==a)return null;var r=Re;return r=Mr(t,t===Qe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(e_(t,r,n),m_(t,Xt()),t.callbackNode!=null&&t.callbackNode===a?g_.bind(null,t):null)}function __(t,n){if(Nu())return null;e_(t,n,!0)}function my(){Cy(function(){(He&6)!==0?Dt(ue,py):p_()})}function Ud(){if(rr===0){var t=Ur;t===0&&(t=$r,$r<<=1,($r&261888)===0&&($r=256)),rr=t}return rr}function v_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wl(t)}function gy(t,n,a,r,l){if(n==="submit"&&a&&a.stateNode===l){var c=v_((l[k]||null).action),p=r.submitter;p&&(n=(n=p[k]||null)?v_(n.formAction):p.getAttribute("formAction"),n!==null&&(c=n,p=null));var A=new Ll("action","action",null,r,l);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rr!==0){var B=new FormData(l,p);Ff(a,{pending:!0,data:B,method:l.method,action:c},null,B)}}else typeof c=="function"&&(A.preventDefault(),B=new FormData(l,p),Ff(a,{pending:!0,data:B,method:l.method,action:c},c,B))},currentTarget:l}]})}}for(var Nd=0;Nd<nf.length;Nd++){var Ld=nf[Nd],_y=Ld.toLowerCase(),vy=Ld[0].toUpperCase()+Ld.slice(1);Ci(_y,"on"+vy)}Ci(km,"onAnimationEnd"),Ci(Wm,"onAnimationIteration"),Ci(qm,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(RM,"onTransitionRun"),Ci(CM,"onTransitionStart"),Ci(wM,"onTransitionCancel"),Ci(Ym,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zo));function S_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],l=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var p=r.length-1;0<=p;p--){var A=r[p],B=A.instance,tt=A.currentTarget;if(A=A.listener,B!==c&&l.isPropagationStopped())break t;c=A,l.currentTarget=tt;try{c(l)}catch(ft){Il(ft)}l.currentTarget=null,c=B}else for(p=0;p<r.length;p++){if(A=r[p],B=A.instance,tt=A.currentTarget,A=A.listener,B!==c&&l.isPropagationStopped())break t;c=A,l.currentTarget=tt;try{c(l)}catch(ft){Il(ft)}l.currentTarget=null,c=B}}}}function Ee(t,n){var a=n[st];a===void 0&&(a=n[st]=new Set);var r=t+"__bubble";a.has(r)||(x_(n,t,2,!1),a.add(r))}function Od(t,n,a){var r=0;n&&(r|=4),x_(a,t,r,n)}var Ou="_reactListening"+Math.random().toString(36).slice(2);function Pd(t){if(!t[Ou]){t[Ou]=!0,Ve.forEach(function(a){a!=="selectionchange"&&(Sy.has(a)||Od(a,!1,t),Od(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ou]||(n[Ou]=!0,Od("selectionchange",!1,n))}}function x_(t,n,a,r){switch(uv(n)){case 2:var l=fE;break;case 8:l=dE;break;default:l=eh}a=l.bind(null,n,a,t),l=void 0,!Vc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,a,{capture:!0,passive:l}):t.addEventListener(n,a,!0):l!==void 0?t.addEventListener(n,a,{passive:l}):t.addEventListener(n,a,!1)}function Id(t,n,a,r,l){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var A=r.stateNode.containerInfo;if(A===l)break;if(p===4)for(p=r.return;p!==null;){var B=p.tag;if((B===3||B===4)&&p.stateNode.containerInfo===l)return;p=p.return}for(;A!==null;){if(p=re(A),p===null)return;if(B=p.tag,B===5||B===6||B===26||B===27){r=c=p;continue t}A=A.parentNode}}r=r.return}xm(function(){var tt=c,ft=Hc(a),xt=[];t:{var j=Zm.get(t);if(j!==void 0){var lt=Ll,Ot=t;switch(t){case"keypress":if(Ul(a)===0)break t;case"keydown":case"keyup":lt=iM;break;case"focusin":Ot="focus",lt=qc;break;case"focusout":Ot="blur",lt=qc;break;case"beforeblur":case"afterblur":lt=qc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=lM;break;case km:case Wm:case qm:lt=Zx;break;case Ym:lt=cM;break;case"scroll":case"scrollend":lt=Xx;break;case"wheel":lt=dM;break;case"copy":case"cut":case"paste":lt=Qx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=bm;break;case"submit":lt=sM;break;case"toggle":case"beforetoggle":lt=pM}var Qt=(n&4)!==0,ge=!Qt&&(t==="scroll"||t==="scrollend"),$=Qt?j!==null?j+"Capture":null:j;Qt=[];for(var q=tt,rt;q!==null;){var St=q;if(rt=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||rt===null||$===null||(St=go(q,$),St!=null&&Qt.push(Ko(q,St,rt))),ge)break;q=q.return}0<Qt.length&&(j=new lt(j,Ot,null,a,ft),xt.push({event:j,listeners:Qt}))}}if((n&7)===0){t:{if(lt=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",lt&&a!==Fc&&(Ot=a.relatedTarget||a.fromElement)&&(re(Ot)||Ot[dt]))break t;(j||lt)&&(Ot=ft.window===ft?ft:(lt=ft.ownerDocument)?lt.defaultView||lt.parentWindow:window,j?(lt=a.relatedTarget||a.toElement,j=tt,lt=lt?re(lt):null,lt!==null&&(ge=f(lt),Qt=lt.tag,lt!==ge||Qt!==5&&Qt!==27&&Qt!==6)&&(lt=null)):(j=null,lt=tt),j!==lt&&(Qt=Em,St="onMouseLeave",$="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=bm,St="onPointerLeave",$="onPointerEnter",q="pointer"),ge=j==null?Ot:qt(j),rt=lt==null?Ot:qt(lt),Ot=new Qt(St,q+"leave",j,a,ft),Ot.target=ge,Ot.relatedTarget=rt,St=null,re(ft)===tt&&(Qt=new Qt($,q+"enter",lt,a,ft),Qt.target=rt,Qt.relatedTarget=ge,St=Qt),ge=St,Qt=j&&lt?D(j,lt,xy):null,j!==null&&M_(xt,Ot,j,Qt,!1),lt!==null&&ge!==null&&M_(xt,ge,lt,Qt,!0)))}t:{if(j=tt?qt(tt):window,lt=j.nodeName&&j.nodeName.toLowerCase(),lt==="select"||lt==="input"&&j.type==="file")var Yt=Lm;else if(Um(j))if(Om)Yt=TM;else{Yt=yM;var Ce=MM}else lt=j.nodeName,!lt||lt.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?tt&&Bc(tt.elementType)&&(Yt=Lm):Yt=EM;if(Yt&&(Yt=Yt(t,tt))){Nm(xt,Yt,a,ft);break t}Ce&&Ce(t,j,tt)}switch(Ce=tt?qt(tt):window,t){case"focusin":(Um(Ce)||Ce.contentEditable==="true")&&(ss=Ce,$c=tt,To=null);break;case"focusout":To=$c=ss=null;break;case"mousedown":tf=!0;break;case"contextmenu":case"mouseup":case"dragend":tf=!1,Vm(xt,a,ft);break;case"selectionchange":if(AM)break;case"keydown":case"keyup":Vm(xt,a,ft)}var ee;if(Zc)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else rs?wm(t,a)&&(ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(Am&&a.locale!=="ko"&&(rs||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&rs&&(ee=Mm()):(Ha=ft,Xc="value"in Ha?Ha.value:Ha.textContent,rs=!0)),Ce=Pu(tt,ae),0<Ce.length&&(ae=new Tm(ae,t,null,a,ft),xt.push({event:ae,listeners:Ce}),ee?ae.data=ee:(ee=Dm(a),ee!==null&&(ae.data=ee)))),(ee=gM?_M(t,a):vM(t,a))&&(ae=Pu(tt,"onBeforeInput"),0<ae.length&&(Ce=new Tm("onBeforeInput","beforeinput",null,a,ft),xt.push({event:Ce,listeners:ae}),Ce.data=ee)),gy(xt,t,tt,a,ft)}S_(xt,n)})}function Ko(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Pu(t,n){for(var a=n+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=go(t,a),l!=null&&r.unshift(Ko(t,l,c)),l=go(t,n),l!=null&&r.push(Ko(t,l,c))),t.tag===3)return r;t=t.return}return[]}function xy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function M_(t,n,a,r,l){for(var c=n._reactName,p=[];a!==null&&a!==r;){var A=a,B=A.alternate,tt=A.stateNode;if(A=A.tag,B!==null&&B===r)break;A!==5&&A!==26&&A!==27||tt===null||(B=tt,l?(tt=go(a,c),tt!=null&&p.unshift(Ko(a,tt,B))):l||(tt=go(a,c),tt!=null&&p.push(Ko(a,tt,B)))),a=a.return}p.length!==0&&t.push({event:n,listeners:p})}var My=/\r\n?/g,yy=/\u0000|\uFFFD/g;function y_(t){return(typeof t=="string"?t:""+t).replace(My,`
`).replace(yy,"")}function E_(t,n){return n=y_(n),y_(t)===n}function qe(t,n,a,r,l,c){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||ns(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&ns(t,""+r);else return;break;case"className":ni(t,"class",r);break;case"tabIndex":ni(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ni(t,a,r);break;case"style":vm(t,r,c);return;case"data":if(n!=="object"){ni(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=wl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&qe(t,n,"name",l.name,l,null),qe(t,n,"formEncType",l.formEncType,l,null),qe(t,n,"formMethod",l.formMethod,l,null),qe(t,n,"formTarget",l.formTarget,l,null)):(qe(t,n,"encType",l.encType,l,null),qe(t,n,"method",l.method,l,null),qe(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=wl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=ki);return;case"onScroll":r!=null&&Ee("scroll",t);return;case"onScrollEnd":r!=null&&Ee("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=wl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Ee("beforetoggle",t),Ee("toggle",t),Je(t,"popover",r);break;case"xlinkActuate":Ae(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ae(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ae(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ae(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ae(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ae(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Je(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Gx.get(a)||a,Je(t,a,r);else return}Se=!0}function zd(t,n,a,r,l,c){switch(a){case"style":vm(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")ns(t,r);else if(typeof r=="number"||typeof r=="bigint")ns(t,""+r);else return;break;case"onScroll":r!=null&&Ee("scroll",t);return;case"onScrollEnd":r!=null&&Ee("scrollend",t);return;case"onClick":r!=null&&(t.onclick=ki);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!vn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),c=a.slice(2,l?a.length-7:void 0),n=t[k]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,r,l);break t}Se=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):Je(t,a,r)}return}Se=!0}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",t),Ee("load",t);var r=!1,l=!1,c;for(c in a)if(a.hasOwnProperty(c)){var p=a[c];if(p!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(t,n,c,p,a,null)}}l&&qe(t,n,"srcSet",a.srcSet,a,null),r&&qe(t,n,"src",a.src,a,null);return;case"input":Ee("invalid",t);var A=c=p=l=null,B=null,tt=null;for(r in a)if(a.hasOwnProperty(r)){var ft=a[r];if(ft!=null)switch(r){case"name":l=ft;break;case"type":p=ft;break;case"checked":B=ft;break;case"defaultChecked":tt=ft;break;case"value":c=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:qe(t,n,r,ft,a,null)}}pm(t,c,A,B,tt,p,l,!1);return;case"select":Ee("invalid",t),r=p=c=null;for(l in a)if(a.hasOwnProperty(l)&&(A=a[l],A!=null))switch(l){case"value":c=A;break;case"defaultValue":p=A;break;case"multiple":r=A;default:qe(t,n,l,A,a,null)}n=c,a=p,t.multiple=!!r,n!=null?es(t,!!r,n,!1):a!=null&&es(t,!!r,a,!0);return;case"textarea":Ee("invalid",t),c=l=r=null;for(p in a)if(a.hasOwnProperty(p)&&(A=a[p],A!=null))switch(p){case"value":r=A;break;case"defaultValue":l=A;break;case"children":c=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:qe(t,n,p,A,a,null)}gm(t,r,l,c);return;case"option":for(B in a)a.hasOwnProperty(B)&&(r=a[B],r!=null)&&(B==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":qe(t,n,B,r,a,null));return;case"dialog":Ee("beforetoggle",t),Ee("toggle",t),Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":Ee("load",t);break;case"video":case"audio":for(r=0;r<Zo.length;r++)Ee(Zo[r],t);break;case"image":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"embed":case"source":case"link":Ee("error",t),Ee("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(r=a[tt],r!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(t,n,tt,r,a,null)}return;default:if(Bc(n)){for(ft in a)a.hasOwnProperty(ft)&&(r=a[ft],r!==void 0&&zd(t,n,ft,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&qe(t,n,A,r,a,null))}var Ey={};function Ty(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,p=null,A=null,B=null,tt=null,ft=null;for(lt in a){var xt=a[lt];if(a.hasOwnProperty(lt)&&xt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":B=xt;default:r.hasOwnProperty(lt)||qe(t,n,lt,null,r,xt)}}for(var j in r){var lt=r[j];if(xt=a[j],r.hasOwnProperty(j)&&(lt!=null||xt!=null))switch(j){case"type":lt!==xt&&(Se=!0),c=lt;break;case"name":lt!==xt&&(Se=!0),l=lt;break;case"checked":lt!==xt&&(Se=!0),tt=lt;break;case"defaultChecked":lt!==xt&&(Se=!0),ft=lt;break;case"value":lt!==xt&&(Se=!0),p=lt;break;case"defaultValue":lt!==xt&&(Se=!0),A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==xt&&qe(t,n,j,lt,r,xt)}}Ic(t,p,A,B,tt,ft,c,l);return;case"select":lt=p=A=j=null;for(c in a)if(B=a[c],a.hasOwnProperty(c)&&B!=null)switch(c){case"value":break;case"multiple":lt=B;default:r.hasOwnProperty(c)||qe(t,n,c,null,r,B)}for(l in r)if(c=r[l],B=a[l],r.hasOwnProperty(l)&&(c!=null||B!=null))switch(l){case"value":c!==B&&(Se=!0),j=c;break;case"defaultValue":c!==B&&(Se=!0),A=c;break;case"multiple":c!==B&&(Se=!0),p=c;default:c!==B&&qe(t,n,l,c,r,B)}n=A,a=p,r=lt,j!=null?es(t,!!a,j,!1):!!r!=!!a&&(n!=null?es(t,!!a,n,!0):es(t,!!a,a?[]:"",!1));return;case"textarea":lt=j=null;for(A in a)if(l=a[A],a.hasOwnProperty(A)&&l!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:qe(t,n,A,null,r,l)}for(p in r)if(l=r[p],c=a[p],r.hasOwnProperty(p)&&(l!=null||c!=null))switch(p){case"value":l!==c&&(Se=!0),j=l;break;case"defaultValue":l!==c&&(Se=!0),lt=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&qe(t,n,p,l,r,c)}mm(t,j,lt);return;case"option":for(var Ot in a)j=a[Ot],a.hasOwnProperty(Ot)&&j!=null&&!r.hasOwnProperty(Ot)&&(Ot==="selected"?t.selected=!1:qe(t,n,Ot,null,r,j));for(B in r)j=r[B],lt=a[B],r.hasOwnProperty(B)&&j!==lt&&(j!=null||lt!=null)&&(B==="selected"?(j!==lt&&(Se=!0),t.selected=j&&typeof j!="function"&&typeof j!="symbol"):qe(t,n,B,j,r,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)j=a[Qt],a.hasOwnProperty(Qt)&&j!=null&&!r.hasOwnProperty(Qt)&&qe(t,n,Qt,null,r,j);for(tt in r)if(j=r[tt],lt=a[tt],r.hasOwnProperty(tt)&&j!==lt&&(j!=null||lt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,n));break;default:qe(t,n,tt,j,r,lt)}return;default:if(Bc(n)){for(var ge in a)j=a[ge],a.hasOwnProperty(ge)&&j!==void 0&&!r.hasOwnProperty(ge)&&zd(t,n,ge,void 0,r,j);for(ft in r)j=r[ft],lt=a[ft],!r.hasOwnProperty(ft)||j===lt||j===void 0&&lt===void 0||zd(t,n,ft,j,r,lt);return}}for(var $ in a)j=a[$],a.hasOwnProperty($)&&j!=null&&!r.hasOwnProperty($)&&qe(t,n,$,null,r,j);for(xt in r)j=r[xt],lt=a[xt],!r.hasOwnProperty(xt)||j===lt||j==null&&lt==null||qe(t,n,xt,j,r,lt)}function T_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function by(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var l=a[r],c=l.transferSize,p=l.initiatorType,A=l.duration;if(c&&A&&T_(p)){for(p=0,A=l.responseEnd,r+=1;r<a.length;r++){var B=a[r],tt=B.startTime;if(tt>A)break;var ft=B.transferSize,xt=B.initiatorType;ft&&T_(xt)&&(B=B.responseEnd,p+=ft*(B<A?1:(A-tt)/(B-tt)))}if(--r,n+=8*(c+p)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Bd=null,Fd=null;function Qo(t){return t.nodeType===9?t:t.ownerDocument}function b_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function R_(t,n,a,r){return a=Qo(a).createElement(t),a[b]=r,a[k]=n,Dn(a,t,n),ve(a),a}function Hd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gd=null;function Ay(){var t=window.event;return t&&t.type==="popstate"?t===Gd?!1:(Gd=t,!0):(Gd=null,!1)}var Vd=typeof setTimeout=="function"?setTimeout:void 0,Ry=typeof clearTimeout=="function"?clearTimeout:void 0,C_=typeof Promise=="function"?Promise:void 0,w_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Vd,Cy=typeof queueMicrotask=="function"?queueMicrotask:typeof C_<"u"?function(t){return C_.resolve(null).then(t).catch(wy)}:Vd;function wy(t){setTimeout(function(){throw t})}function sr(t){return t==="head"}function D_(t,n){var a=n,r=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(l),Fs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Qd(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Qd(a);for(var c=a.firstChild;c;){var p=c.nextSibling,A=c.nodeName;c[Lt]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=p}}else a==="body"&&Qd(t.ownerDocument.body);a=l}while(a);Fs(n)}function U_(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function N_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function L_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Dy(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Xd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return Dy(n,a,t)}function Uy(t){return t.documentElement.clientHeight}function Ny(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Ly(t,n,a,r,l,c,p,A,B){var tt=n.nodeType===9?n:n.ownerDocument;try{var ft=tt.startViewTransition({update:function(){var j=tt.defaultView,lt=j.navigation&&j.navigation.transition,Ot=tt.fonts.status;r();var Qt=[];if(Ot==="loaded"&&(Uy(tt),tt.fonts.status==="loading"&&Qt.push(tt.fonts.ready)),Ot=Qt.length,t!==null)for(var ge=t.suspenseyImages,$=0,q=0;q<ge.length;q++){var rt=ge[q];if(!rt.complete){var St=rt.getBoundingClientRect();if(0<St.bottom&&0<St.right&&St.top<j.innerHeight&&St.left<j.innerWidth){if($+=tv(rt),$>Bu){Qt.length=Ot;break}rt=new Promise(Ny.bind(rt)),Qt.push(rt)}}}if(0<Qt.length)return j=Promise.race([Promise.all(Qt),new Promise(function(Yt){return setTimeout(Yt,500)})]).then(l,l),(lt?Promise.allSettled([lt.finished,j]):j).then(c,c);if(l(),lt)return lt.finished.then(c,c);c()},types:a});tt.__reactViewTransition=ft;var xt=[];return ft.ready.then(function(){for(var j=tt.documentElement.getAnimations({subtree:!0}),lt=0;lt<j.length;lt++){var Ot=j[lt],Qt=Ot.effect,ge=Qt.pseudoElement;if(ge!=null&&ge.startsWith("::view-transition")){xt.push(Ot),Ot=Qt.getKeyframes();for(var $=ge=void 0,q=!0,rt=0;rt<Ot.length;rt++){var St=Ot[rt],Yt=St.width;if(ge===void 0)ge=Yt;else if(ge!==Yt){q=!1;break}if(Yt=St.height,$===void 0)$=Yt;else if($!==Yt){q=!1;break}delete St.width,delete St.height,St.transform==="none"&&delete St.transform}q&&ge!==void 0&&$!==void 0&&(Qt.setKeyframes(Ot),q=getComputedStyle(Qt.target,Qt.pseudoElement),q.width!==ge||q.height!==$)&&(q=Ot[0],q.width=ge,q.height=$,q=Ot[Ot.length-1],q.width=ge,q.height=$,Qt.setKeyframes(Ot))}}p()},function(j){tt.__reactViewTransition===ft&&(tt.__reactViewTransition=null);try{typeof j=="object"&&j!==null&&j.name==="InvalidStateError"&&(j.message==="View transition was skipped because document visibility state is hidden."||j.message==="Skipping view transition because document visibility state has become hidden."||j.message==="Skipping view transition because viewport size changed."||j.message==="Transition was aborted because of invalid state")&&(j=null),j!==null&&B(j)}finally{r(),l(),p()}}),ft.finished.finally(function(){for(var j=0;j<xt.length;j++)xt[j].cancel();tt.__reactViewTransition===ft&&(tt.__reactViewTransition=null),A()}),ft}catch{return r(),l(),p(),null}}function Vr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Vr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:I({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Vr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],l=0;l<a.length;l++){var c=a[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(a[l])}return r},Vr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function O_(t){return{name:t,group:new Vr("group",t),imagePair:new Vr("image-pair",t),old:new Vr("old",t),new:new Vr("new",t)}}function ui(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ui.prototype.addEventListener=function(t,n,a){var r=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(I_(c,t,n,a)===-1){var p=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(B){p.removeEventListener(t,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),r!==null&&(l=p.removeEventListener.bind(p,t,n,a),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Ls(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:l}),v(this._fragmentFiber.child,!1,Oy,t,A,r)}this._eventListeners=c}};function Oy(t,n,a,r){return M(t).addEventListener(n,a,r),!1}ui.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=I_(r,t,n,a),n!==-1)){var l=r[n];a=l.attachedListener;var c=l.cleanup;l=Ls(l.optionsOrUseCapture),v(this._fragmentFiber.child,!1,Py,t,a,l),r.splice(n,1),c!==null&&c()}};function Py(t,n,a,r){return M(t).removeEventListener(n,a,r),!1}function Ls(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function P_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function I_(t,n,a,r){if(t.length===0)return-1;r=P_(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===a&&P_(c.optionsOrUseCapture)===r)return l}return-1}ui.prototype.dispatchEvent=function(t){var n=_(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var c=a[l];r.addEventListener(c.type,c.attachedListener,Ls(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(l=0;l<a.length;l++)c=a[l],r.removeEventListener(c.type,c.attachedListener,Ls(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},ui.prototype.focus=function(t){v(this._fragmentFiber.child,!0,z_,t,void 0,void 0)};function z_(t,n){return t.tag===6?!1:(t=M(t),Yy(t,n))}ui.prototype.focusLast=function(t){var n=[];v(this._fragmentFiber.child,!0,kd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!z_(n[a],t);a--);};function kd(t,n){return n.push(t),!1}ui.prototype.blur=function(){var t=_(this._fragmentFiber);t!==null&&(t=M(t),t=Qo(t).activeElement,t!==null&&v(this._fragmentFiber.child,!1,Iy,t,void 0,void 0))};function Iy(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ui.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),v(this._fragmentFiber.child,!1,zy,t,void 0,void 0)};function zy(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}ui.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),v(this._fragmentFiber.child,!1,By,t,void 0,void 0);for(var a=n=0;a<Li.length;a++){var r=Li[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Li[n++]=r}Li.length=n}};function By(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Li=[],Wd=!1;function Fy(t,n,a){Li.push({fragmentInstance:t,observer:n,instance:a}),Wd||(Wd=!0,Zy(function(){Wd=!1;var r=Li;Li=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}ui.prototype.getClientRects=function(){var t=[];return v(this._fragmentFiber.child,!1,Hy,t,void 0,void 0),t};function Hy(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}ui.prototype.getRootNode=function(t){var n=_(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},ui.prototype.compareDocumentPosition=function(t){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];v(this._fragmentFiber.child,!1,kd,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,T(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=r=a.compareDocumentPosition(t);return a===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=R(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),l=M(a[a.length-1]);var c=T(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var p=n.compareDocumentPosition(t),A=l.compareDocumentPosition(t),B=p&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=r&&c&&p&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&l===t||B||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:p,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Gy(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Gy(t,n,a,r,l){var c=re(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=_(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=D(a,c,U),n===null?n=!1:(v(n,!0,H,c,a),c=x,x=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=D(r,c,U),n===null?n=!1:(v(n,!0,C,c,r),c=x,w=x=null,n=c!==null)),n):!1}function B_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ui.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];v(this._fragmentFiber.child,!1,kd,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=R(this._fragmentFiber);if(r=a?r[1]||r[0]||_(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),B_(t,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var l=n[r];l.tag===6?(l=M(l),B_(l,a)):M(l).scrollIntoView(t),r+=a?-1:1}};function Vy(t,n){return t=M(t),F_(t,n),!1}function F_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function H_(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.addEventListener(l.type,l.attachedListener,Ls(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var p=0,A=0;A<Li.length;A++){var B=Li[A];(B.fragmentInstance!==n||B.observer!==c||B.instance!==t)&&(Li[p++]=B)}Li.length=p,c.observe(t)}),F_(t,n))}function Xy(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.removeEventListener(l.type,l.attachedListener,Ls(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?Fy(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function qd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qd(a),Kt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ky(t,n,a,r){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Lt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ti(t.nextSibling),t===null)break}return null}function Wy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ti(t.nextSibling),t===null))return null;return t}function G_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ti(t.nextSibling),t===null))return null;return t}function Yd(t){return t.data==="$?"||t.data==="$~"}function Zd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function qy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Ti(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Kd=null;function V_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ti(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function X_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Yy(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function Zy(t){w_(function(){w_(function(n){return t(n)})})}function k_(t,n,a){switch(n=Qo(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function W_(t,n,a){for(var r in a){var l=a[r];a.hasOwnProperty(r)&&l!=null&&qe(t,n,r,null,Ey,l)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===ki&&(t.onclick=null),Kt(t)}function Qd(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Kt(t)}var bi=new Map,q_=new Set;function Jo(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var ba=At.d;At.d={f:Ky,r:Qy,D:Jy,C:jy,L:$y,m:tE,X:nE,S:eE,M:iE};function Ky(){var t=ba.f(),n=wu();return t||n}function Qy(t){var n=de(t);n!==null&&n.tag===5&&n.type==="form"?Zg(n):ba.r(t)}var Os=typeof document>"u"?null:document;function Y_(t,n,a){var r=Os;if(r&&typeof n=="string"&&n){var l=_i(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),q_.has(l)||(q_.add(l),t={rel:t,crossOrigin:a,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Dn(n,"link",t),ve(n),r.head.appendChild(n)))}}function Jy(t){ba.D(t),Y_("dns-prefetch",t,null)}function jy(t,n){ba.C(t,n),Y_("preconnect",t,n)}function $y(t,n,a){ba.L(t,n,a);var r=Os;if(r&&t&&n){var l='link[rel="preload"][as="'+_i(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+_i(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+_i(a.imageSizes)+'"]')):l+='[href="'+_i(t)+'"]';var c=l;switch(n){case"style":c=Ps(t);break;case"script":c=Is(t)}if(!(bi.has(c)||(t=I({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),bi.set(c,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(jo(c))||n==="script"&&r.querySelector($o(c))))){var p=r.createElement("link");Dn(p,"link",t),n==="style"&&(p[Zt]=!0,p.onload=p.onerror=function(){Ze(p)}),ve(p),r.head.appendChild(p)}}}function tE(t,n){ba.m(t,n);var a=Os;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+_i(r)+'"][href="'+_i(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Is(t)}if(!bi.has(c)&&(t=I({rel:"modulepreload",href:t},n),bi.set(c,t),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($o(c)))return}r=a.createElement("link"),Dn(r,"link",t),ve(r),a.head.appendChild(r)}}}function eE(t,n,a){ba.S(t,n,a);var r=Os;if(r&&t){var l=Me(r).hoistableStyles,c=Ps(t);n=n||"default";var p=l.get(c);if(!p){var A={loading:0,preload:null};if(p=r.querySelector(jo(c)))A.loading=5;else{t=I({rel:"stylesheet",href:t,"data-precedence":n},a),(a=bi.get(c))&&Jd(t,a);var B=p=r.createElement("link");ve(B),Dn(B,"link",t),B._p=new Promise(function(tt,ft){B.onload=tt,B.onerror=ft}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Iu(p,n,r)}p={type:"stylesheet",instance:p,count:1,state:A},l.set(c,p)}}}function nE(t,n){ba.X(t,n);var a=Os;if(a&&t){var r=Me(a).hoistableScripts,l=Is(t),c=r.get(l);c||(c=a.querySelector($o(l)),c||(t=I({src:t,async:!0},n),(n=bi.get(l))&&jd(t,n),c=a.createElement("script"),ve(c),Dn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function iE(t,n){ba.M(t,n);var a=Os;if(a&&t){var r=Me(a).hoistableScripts,l=Is(t),c=r.get(l);c||(c=a.querySelector($o(l)),c||(t=I({src:t,async:!0,type:"module"},n),(n=bi.get(l))&&jd(t,n),c=a.createElement("script"),ve(c),Dn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function Z_(t,n,a,r){var l=(l=Pe.current)?Jo(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ps(a.href),n=Me(l).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ps(a.href);var c=Me(l).hoistableStyles,p=c.get(t);if(p||(l=l.ownerDocument||l,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,p),(c=l.querySelector(jo(t)))?c._p||(p.instance=c,p.state.loading=5):(c=bi.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bi.set(t,c)),aE(l,t,c,p.state))),n&&r===null)throw Error(s(528,""));return p}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Is(a),n=Me(l).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ps(t){return'href="'+_i(t)+'"'}function jo(t){return'link[rel="stylesheet"]['+t+"]"}function K_(t){return I({},t,{"data-precedence":t.precedence,precedence:null})}function aE(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Zt]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Zt]=!0,n.onload=n.onerror=Ze.bind(null,n),Dn(n,"link",a),ve(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Is(t){return'[src="'+_i(t)+'"]'}function $o(t){return"script[async]"+t}function Q_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+_i(a.href)+'"]');if(r)return n.instance=r,ve(r),r;var l=I({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),ve(r),Dn(r,"style",l),Iu(r,a.precedence,t),n.instance=r;case"stylesheet":l=Ps(a.href);var c=t.querySelector(jo(l));if(c)return n.state.loading|=4,n.instance=c,ve(c),c;r=K_(a),(l=bi.get(l))&&Jd(r,l),c=(t.ownerDocument||t).createElement("link"),ve(c);var p=c;return p._p=new Promise(function(A,B){p.onload=A,p.onerror=B}),Dn(c,"link",r),n.state.loading|=4,Iu(c,a.precedence,t),n.instance=c;case"script":return c=Is(a.src),(l=t.querySelector($o(c)))?(n.instance=l,ve(l),l):(r=a,(l=bi.get(c))&&(r=I({},a),jd(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),ve(l),Dn(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Iu(r,a.precedence,t));return n.instance}function Iu(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,p=0;p<r.length;p++){var A=r[p];if(A.dataset.precedence===n)c=A;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Jd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function jd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var zu=null;function J_(t,n,a){if(zu===null){var r=new Map,l=zu=new Map;l.set(a,r)}else l=zu,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var c=a[l];if(!(c[Lt]||c[b]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(n)||"";p=t+p;var A=r.get(p);A?A.push(c):r.set(p,[c])}}return r}function $d(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function rE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function j_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function $_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function tv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function ev(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=tv(n),t.suspenseyImages.push(n)),t=lE.bind(t),n.decode().then(t,t))}function sE(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Ps(r.href),c=n.querySelector(jo(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=tl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,ve(c);return}c=n.ownerDocument||n,r=K_(r),(l=bi.get(l))&&Jd(r,l),c=c.createElement("link"),ve(c);var p=c;p._p=new Promise(function(A,B){p.onload=A,p.onerror=B}),Dn(c,"link",r),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=tl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Bu=0;function oE(t,n){return t.stylesheets&&t.count===0&&Hu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Hu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Bu===0&&(Bu=62500*by());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Bu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function nv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Hu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function tl(){this.count--,nv(this)}function lE(){this.imgCount--,nv(this)}var Fu=null;function Hu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fu=new Map,n.forEach(uE,t),Fu=null,tl.call(t))}function uE(t,n){if(!(n.state.loading&4)){var a=Fu.get(t);if(a)var r=a.get(null);else{a=new Map,Fu.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var p=l[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),r=p)}r&&a.set(null,r)}l=n.instance,p=l.getAttribute("data-precedence"),c=a.get(p)||r,c===r&&a.set(null,l),a.set(p,l),this.count++,r=tl.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var zs={$$typeof:Q,Provider:null,Consumer:null,_currentValue:be,_currentValue2:be,_threadCount:0};function cE(t,n,a,r,l,c,p,A,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ts(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ts(0),this.hiddenUpdates=ts(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function iv(t,n,a,r,l,c,p,A,B,tt,ft,xt){return t=new cE(t,n,a,p,B,tt,ft,xt,A),n=1,c===!0&&(n|=24),c=Wn(3,null,null,n),t.current=c,c.stateNode=t,n=pf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:n},vf(c),t}function av(t){return t?(t=us,t):us}function rv(t,n,a,r,l,c){l=av(l),r.context===null?r.context=l:r.pendingContext=l,r=Za(n),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=Ka(t,r,n),a!==null&&(Kn(a,t,n),Uo(a,t,n))}function sv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function th(t,n){sv(t,n),(t=t.alternate)&&sv(t,n)}function ov(t){if(t.tag===13||t.tag===31){var n=br(t,67108864);n!==null&&Kn(n,t,67108864),th(t,67108864)}}function lv(t){if(t.tag===13||t.tag===31){var n=li();n=po(n);var a=br(t,n);a!==null&&Kn(a,t,n),th(t,n)}}var Bs=!0;function fE(t,n,a,r){var l=mt.T;mt.T=null;var c=At.p;try{At.p=2,eh(t,n,a,r)}finally{At.p=c,mt.T=l}}function dE(t,n,a,r){var l=mt.T;mt.T=null;var c=At.p;try{At.p=8,eh(t,n,a,r)}finally{At.p=c,mt.T=l}}function eh(t,n,a,r){if(Bs){var l=nh(r);if(l===null)Id(t,n,r,Gu,a),cv(t,r);else if(pE(l,t,n,a,r))r.stopPropagation();else if(cv(t,r),n&4&&-1<hE.indexOf(t)){for(;l!==null;){var c=de(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=fa(c.pendingLanes);if(p!==0){var A=c;for(A.pendingLanes|=2,A.entangledLanes|=2;p;){var B=1<<31-fe(p);A.entanglements[1]|=B,p&=~B}ta(c),(He&6)===0&&(Au=Xt()+500,Yo(0))}}break;case 31:case 13:A=br(c,2),A!==null&&Kn(A,c,2),wu(),th(c,2)}if(c=nh(r),c===null&&Id(t,n,r,Gu,a),c===l)break;l=c}l!==null&&r.stopPropagation()}else Id(t,n,r,null,a)}}function nh(t){return t=Hc(t),ih(t)}var Gu=null;function ih(t){if(Gu=null,t=re(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Gu=t,null}function uv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ie()){case ue:return 2;case J:return 8;case wt:case Mt:return 32;case Nt:return 268435456;default:return 32}default:return 32}}var ah=!1,or=null,lr=null,ur=null,el=new Map,nl=new Map,cr=[],hE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cv(t,n){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":el.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(n.pointerId)}}function il(t,n,a,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},n!==null&&(n=de(n),n!==null&&ov(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function pE(t,n,a,r,l){switch(n){case"focusin":return or=il(or,t,n,a,r,l),!0;case"dragenter":return lr=il(lr,t,n,a,r,l),!0;case"mouseover":return ur=il(ur,t,n,a,r,l),!0;case"pointerover":var c=l.pointerId;return el.set(c,il(el.get(c)||null,t,n,a,r,l)),!0;case"gotpointercapture":return c=l.pointerId,nl.set(c,il(nl.get(c)||null,t,n,a,r,l)),!0}return!1}function fv(t){var n=re(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Rl(t.priority,function(){lv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Rl(t.priority,function(){lv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=nh(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Fc=r,a.target.dispatchEvent(r),Fc=null}else return n=de(a),n!==null&&ov(n),t.blockedOn=a,!1;n.shift()}return!0}function dv(t,n,a){Vu(t)&&a.delete(n)}function mE(){ah=!1,or!==null&&Vu(or)&&(or=null),lr!==null&&Vu(lr)&&(lr=null),ur!==null&&Vu(ur)&&(ur=null),el.forEach(dv),nl.forEach(dv)}function Xu(t,n){t.blockedOn===n&&(t.blockedOn=null,ah||(ah=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,mE)))}var ku=null;function hv(t){ku!==t&&(ku=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ku===t&&(ku=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if(ih(r||a)===null)continue;break}var c=de(a);c!==null&&(t.splice(n,3),n-=3,Ff(c,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function Fs(t){function n(B){return Xu(B,t)}or!==null&&Xu(or,t),lr!==null&&Xu(lr,t),ur!==null&&Xu(ur,t),el.forEach(n),nl.forEach(n);for(var a=0;a<cr.length;a++){var r=cr[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<cr.length&&(a=cr[0],a.blockedOn===null);)fv(a),a.blockedOn===null&&cr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],c=a[r+1],p=l[k]||null;if(typeof c=="function")p||hv(a);else if(p){var A=null;if(c&&c.hasAttribute("formAction")){if(l=c,p=c[k]||null)A=p.formAction;else if(ih(l)!==null)continue}else A=p.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),hv(a)}}}function pv(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return l=p})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function rh(t){this._internalRoot=t}Wu.prototype.render=rh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=li();rv(a,r,t,n,null,null)},Wu.prototype.unmount=rh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;rv(t.current,2,null,t,null,null),wu(),n[dt]=null}};function Wu(t){this._internalRoot=t}Wu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Al();t={blockedOn:null,target:t,priority:n};for(var a=0;a<cr.length&&n!==0&&n<cr[a].priority;a++);cr.splice(a,0,t),a===0&&fv(t)}};var mv=e.version;if(mv!=="19.3.0")throw Error(s(527,mv,"19.3.0"));At.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var gE={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:mt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qu.isDisabled&&qu.supportsFiber)try{Jt=qu.inject(gE),Gt=qu}catch{}}return rl.createRoot=function(t,n){if(!u(t))throw Error(s(299));var a=!1,r="",l=a0,c=r0,p=s0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=iv(t,1,!1,null,null,a,r,null,l,c,p,pv),t[dt]=n.current,Pd(t),new rh(n)},rl.hydrateRoot=function(t,n,a){if(!u(t))throw Error(s(299));var r=!1,l="",c=a0,p=r0,A=s0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=iv(t,1,!0,n,a??null,r,l,B,c,p,A,pv),n.context=av(null),a=n.current,r=li(),r=po(r),l=Za(r),l.callback=null,Ka(a,l,r),a=r,n.current.lanes=a,Vi(n,a),ta(n),t[dt]=n.current,Pd(t),new Wu(n)},rl.version="19.3.0",rl}var bv;function AE(){if(bv)return lh.exports;bv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),lh.exports=bE(),lh.exports}var RE=AE();function Xp(o){const e=new Uint32Array(1);return crypto.getRandomValues(e),Promise.resolve(e[0]%o+1)}const kp={red:{hex:14034996,cssTop:[214,40,52],cssBottom:[140,18,28],label:"#ffffff"},green:{hex:1096065,cssTop:[16,185,129],cssBottom:[5,150,105],label:"#ecfdf5"},white:{hex:15790320,cssTop:[240,240,240],cssBottom:[200,200,200],label:"#111827"},black:{hex:1052691,cssTop:[16,16,19],cssBottom:[3,3,5],label:"#ffffff"},blue:{hex:1785819,cssTop:[27,63,219],cssBottom:[17,38,140],label:"#ffffff"},yellow:{hex:16761856,cssTop:[255,196,0],cssBottom:[214,152,0],label:"#111827"}},CE=[6,8,10],wE=["red","green","white","black","blue","yellow"],dh={sides:6,color:"red",translucent:!0},DE={6:.85,8:.85,10:.9},Wp=(o,e)=>e?DE[o]:1;function UE(){const o=new URLSearchParams(window.location.search),e=Number(o.get("s")),i=CE.includes(e)?e:dh.sides,s=o.get("c")?.toLowerCase(),u=s!==void 0&&wE.includes(s)?s:dh.color,f=(o.get("translucent")??o.get("t"))?.toLowerCase(),d=f==="true"?!0:f==="false"?!1:dh.translucent;return{sides:i,color:u,translucent:d}}const Av={1:{name:"front",orientation:{x:0,y:0}},2:{name:"top",orientation:{x:-90,y:0}},3:{name:"right",orientation:{x:0,y:-90}},4:{name:"left",orientation:{x:0,y:90}},5:{name:"bottom",orientation:{x:90,y:0}},6:{name:"back",orientation:{x:0,y:180}}},NE={1:[[2,2]],2:[[1,1],[3,3]],3:[[1,1],[2,2],[3,3]],4:[[1,1],[1,3],[3,1],[3,3]],5:[[1,1],[1,3],[2,2],[3,1],[3,3]],6:[[1,1],[1,3],[2,1],[2,3],[3,1],[3,3]]},Rv=65,Cv=.5,LE=10,hh=1500,wv=750,OE=260,Dv=(o,e,i)=>Math.min(i,Math.max(e,o)),Uv=o=>(o%360+360)%360,Nv=o=>Math.round(o*10)/10,Lv=(o,e,i)=>i>=0?o+Uv(e-o):o-Uv(o-e);function PE({value:o}){return fn.jsx(fn.Fragment,{children:NE[o].map(([e,i])=>fn.jsx("span",{className:"pip",style:{gridRow:e,gridColumn:i}},`${e}-${i}`))})}function IE({color:o="red",translucent:e=!0}){const[i,s]=te.useState({x:0,y:0}),[u,f]=te.useState({ms:0,easing:"linear"}),[d,h]=te.useState(!1),[g,m]=te.useState(!1),[S,v]=te.useState(null),[_,T]=te.useState(null),R=te.useRef(null),O=te.useRef(i),M=te.useRef({x:0,y:0}),x=te.useRef(null),w=te.useRef(null),H=te.useRef([]);O.current=i;const C=kp[o],U=Wp(6,e),D=`rgb(${C.cssTop.join(" ")} / ${U})`,I=`rgb(${C.cssBottom.join(" ")} / ${U})`,E=te.useCallback((Y,V,Q="ease-out")=>{f({ms:V,easing:Q}),s(Y)},[]),L=te.useCallback(async()=>{h(!0),v(null),T(null);try{const Y=await Xp(6),V=Av[Y],Q=3+Math.floor(Math.random()*5),X=LE-Q,W=Math.random()<.5?-1:1,nt=Math.random()<.5?-1:1,it=O.current,ht={x:it.x+W*360*Q,y:it.y+nt*360*X};E(ht,hh,"cubic-bezier(0.4, 0, 0.35, 1)"),H.current.push(setTimeout(()=>{const vt={x:Lv(ht.x,V.orientation.x,W),y:Lv(ht.y,V.orientation.y,nt)};M.current=vt,E(vt,wv,"cubic-bezier(0.22, 1, 0.36, 1)")},hh)),H.current.push(setTimeout(()=>{h(!1),v(Y)},hh+wv))}catch(Y){h(!1),T(Y instanceof Error?Y.message:"Roll failed.")}},[E]),N=te.useCallback(Y=>{if(d)return;const V=Y.currentTarget.getBoundingClientRect();x.current={centerX:V.left+V.width/2,centerY:V.top+V.height/2,halfWidth:V.width/2,halfHeight:V.height/2,nx:0,ny:0},Y.currentTarget.setPointerCapture(Y.pointerId),m(!0),f({ms:0,easing:"linear"})},[d]),z=te.useCallback(Y=>{const V=x.current;V&&(V.nx=Dv((Y.clientX-V.centerX)/V.halfWidth,-1,1),V.ny=Dv((Y.clientY-V.centerY)/V.halfHeight,-1,1),!w.current&&(w.current=requestAnimationFrame(()=>{w.current=null;const Q=M.current;s({x:Nv(Q.x-V.ny*Rv),y:Nv(Q.y+V.nx*Rv)})})))},[]),G=te.useCallback(()=>{const Y=x.current;if(!Y)return;x.current=null,m(!1),w.current&&(cancelAnimationFrame(w.current),w.current=null),Math.abs(Y.nx)>=Cv||Math.abs(Y.ny)>=Cv?L():E(M.current,OE,"cubic-bezier(0.34, 1.3, 0.64, 1)")},[E,L]);return te.useEffect(()=>{const Y=H.current;return()=>{Y.forEach(clearTimeout),w.current&&cancelAnimationFrame(w.current)}},[]),fn.jsxs("div",{ref:R,className:"stage",style:{"--face-top":D,"--face-bottom":I,"--die-fg":C.label},onPointerDown:N,onPointerMove:z,onPointerUp:G,onPointerCancel:G,children:[fn.jsx("div",{className:"scene",children:fn.jsx("div",{className:`cube${d?" is-rolling":""}${g?" is-dragging":""}`,style:{transform:`translateZ(0) rotateX(${i.x}deg) rotateY(${i.y}deg)`,transitionDuration:`${u.ms}ms`,transitionTimingFunction:u.easing},children:Object.entries(Av).map(([Y,V])=>fn.jsx("div",{className:`face face--${V.name}`,"data-value":Y,children:fn.jsx("div",{className:"pips",children:fn.jsx(PE,{value:Number(Y)})})},Y))})}),fn.jsx("p",{className:"hint",children:d?"Rolling...":_||(S?`You rolled ${S}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const qp="186",zE=0,Ov=1,BE=2,_c=1,FE=2,hl=3,Ia=0,jn=1,Ua=2,La=0,ml=1,Pv=2,Iv=3,zv=4,HE=5,$s=100,GE=101,VE=102,XE=103,kE=104,WE=200,qE=201,YE=202,ZE=203,YS=204,ZS=205,KE=206,QE=207,JE=208,jE=209,$E=210,tT=211,eT=212,nT=213,iT=214,Yh=0,Zh=1,Kh=2,gl=3,Qh=4,Jh=5,jh=6,$h=7,KS=0,aT=1,rT=2,sa=0,QS=1,JS=2,jS=3,$S=4,tx=5,ex=6,nx=7,ix=300,Qr=301,ro=302,ph=303,mh=304,Dc=306,tp=1e3,Na=1001,ep=1002,Nn=1003,sT=1004,Yu=1005,zn=1006,gh=1007,Zr=1008,hi=1009,ax=1010,rx=1011,_l=1012,Yp=1013,oa=1014,aa=1015,la=1016,Zp=1017,Kp=1018,vl=1020,sx=35902,ox=35899,lx=1021,ux=1022,Bi=1023,za=1026,Kr=1027,cx=1028,Qp=1029,Jr=1030,Jp=1031,jp=1033,vc=33776,Sc=33777,xc=33778,Mc=33779,np=35840,ip=35841,ap=35842,rp=35843,sp=36196,op=37492,lp=37496,up=37488,cp=37489,Ec=37490,fp=37491,dp=37808,hp=37809,pp=37810,mp=37811,gp=37812,_p=37813,vp=37814,Sp=37815,xp=37816,Mp=37817,yp=37818,Ep=37819,Tp=37820,bp=37821,Ap=36492,Rp=36494,Cp=36495,wp=36283,Dp=36284,Tc=36285,Up=36286,oT=3200,Np=0,lT=1,Sr="",Jn="srgb",bc="srgb-linear",Ac="linear",Ye="srgb",_h=7680,uT=519,cT=512,fT=513,dT=514,$p=515,hT=516,pT=517,tm=518,mT=519,gT=35044,Bv="300 es",ra=2e3,Sl=2001;function _T(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Rc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function vT(){const o=Rc("canvas");return o.style.display="block",o}const Fv={};function Hv(...o){const e="THREE."+o.shift();console.log(e,...o)}function fx(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function oe(...o){o=fx(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function ze(...o){o=fx(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function eo(...o){const e=o.join(" ");e in Fv||(Fv[e]=!0,oe(...o))}function ST(o,e,i){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const xT={[Yh]:Zh,[Kh]:jh,[Qh]:$h,[gl]:Jh,[Zh]:Yh,[jh]:Kh,[$h]:Qh,[Jh]:gl};class jr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const u=s[e];if(u!==void 0){const f=u.indexOf(i);f!==-1&&u.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const u=s.slice(0);for(let f=0,d=u.length;f<d;f++)u[f].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vh=Math.PI/180,Lp=180/Math.PI;function Ml(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Ne(o,e,i){return Math.max(e,Math.min(i,o))}function MT(o,e){return(o%e+e)%e}function Sh(o,e,i){return(1-i)*o+i*e}function sl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const lm=class lm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6],this.y=u[1]*i+u[4]*s+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ne(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),u=Math.sin(i),f=this.x-e.x,d=this.y-e.y;return this.x=f*s-d*u+e.x,this.y=f*u+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lm.prototype.isVector2=!0;let Te=lm;class Ri{constructor(e=0,i=0,s=0,u=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=u}static slerpFlat(e,i,s,u,f,d,h){let g=s[u+0],m=s[u+1],S=s[u+2],v=s[u+3],_=f[d+0],T=f[d+1],R=f[d+2],O=f[d+3];if(v!==O||g!==_||m!==T||S!==R){let M=g*_+m*T+S*R+v*O;M<0&&(_=-_,T=-T,R=-R,O=-O,M=-M);let x=1-h;if(M<.9995){const w=Math.acos(M),H=Math.sin(w);x=Math.sin(x*w)/H,h=Math.sin(h*w)/H,g=g*x+_*h,m=m*x+T*h,S=S*x+R*h,v=v*x+O*h}else{g=g*x+_*h,m=m*x+T*h,S=S*x+R*h,v=v*x+O*h;const w=1/Math.sqrt(g*g+m*m+S*S+v*v);g*=w,m*=w,S*=w,v*=w}}e[i]=g,e[i+1]=m,e[i+2]=S,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,u,f,d){const h=s[u],g=s[u+1],m=s[u+2],S=s[u+3],v=f[d],_=f[d+1],T=f[d+2],R=f[d+3];return e[i]=h*R+S*v+g*T-m*_,e[i+1]=g*R+S*_+m*v-h*T,e[i+2]=m*R+S*T+h*_-g*v,e[i+3]=S*R-h*v-g*_-m*T,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,u){return this._x=e,this._y=i,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,u=e._y,f=e._z,d=e._order,h=Math.cos,g=Math.sin,m=h(s/2),S=h(u/2),v=h(f/2),_=g(s/2),T=g(u/2),R=g(f/2);switch(d){case"XYZ":this._x=_*S*v+m*T*R,this._y=m*T*v-_*S*R,this._z=m*S*R+_*T*v,this._w=m*S*v-_*T*R;break;case"YXZ":this._x=_*S*v+m*T*R,this._y=m*T*v-_*S*R,this._z=m*S*R-_*T*v,this._w=m*S*v+_*T*R;break;case"ZXY":this._x=_*S*v-m*T*R,this._y=m*T*v+_*S*R,this._z=m*S*R+_*T*v,this._w=m*S*v-_*T*R;break;case"ZYX":this._x=_*S*v-m*T*R,this._y=m*T*v+_*S*R,this._z=m*S*R-_*T*v,this._w=m*S*v+_*T*R;break;case"YZX":this._x=_*S*v+m*T*R,this._y=m*T*v+_*S*R,this._z=m*S*R-_*T*v,this._w=m*S*v-_*T*R;break;case"XZY":this._x=_*S*v-m*T*R,this._y=m*T*v-_*S*R,this._z=m*S*R+_*T*v,this._w=m*S*v+_*T*R;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,u=Math.sin(s);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],u=i[4],f=i[8],d=i[1],h=i[5],g=i[9],m=i[2],S=i[6],v=i[10],_=s+h+v;if(_>0){const T=.5/Math.sqrt(_+1);this._w=.25/T,this._x=(S-g)*T,this._y=(f-m)*T,this._z=(d-u)*T}else if(s>h&&s>v){const T=2*Math.sqrt(1+s-h-v);this._w=(S-g)/T,this._x=.25*T,this._y=(u+d)/T,this._z=(f+m)/T}else if(h>v){const T=2*Math.sqrt(1+h-s-v);this._w=(f-m)/T,this._x=(u+d)/T,this._y=.25*T,this._z=(g+S)/T}else{const T=2*Math.sqrt(1+v-s-h);this._w=(d-u)/T,this._x=(f+m)/T,this._y=(g+S)/T,this._z=.25*T}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ne(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const u=Math.min(1,i/s);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,u=e._y,f=e._z,d=e._w,h=i._x,g=i._y,m=i._z,S=i._w;return this._x=s*S+d*h+u*m-f*g,this._y=u*S+d*g+f*h-s*m,this._z=f*S+d*m+s*g-u*h,this._w=d*S-s*h-u*g-f*m,this._onChangeCallback(),this}slerp(e,i){let s=e._x,u=e._y,f=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,u=-u,f=-f,d=-d,h=-h);let g=1-i;if(h<.9995){const m=Math.acos(h),S=Math.sin(m);g=Math.sin(g*m)/S,i=Math.sin(i*m)/S,this._x=this._x*g+s*i,this._y=this._y*g+u*i,this._z=this._z*g+f*i,this._w=this._w*g+d*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+u*i,this._z=this._z*g+f*i,this._w=this._w*g+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const um=class um{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Gv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Gv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[3]*s+f[6]*u,this.y=f[1]*i+f[4]*s+f[7]*u,this.z=f[2]*i+f[5]*s+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,u=this.z,f=e.elements,d=1/(f[3]*i+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*u+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*u+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*u+f[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,u=this.z,f=e.x,d=e.y,h=e.z,g=e.w,m=2*(d*u-h*s),S=2*(h*i-f*u),v=2*(f*s-d*i);return this.x=i+g*m+d*v-h*S,this.y=s+g*S+h*m-f*v,this.z=u+g*v+f*S-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*u,this.y=f[1]*i+f[5]*s+f[9]*u,this.z=f[2]*i+f[6]*s+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this.z=Ne(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this.z=Ne(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,u=e.y,f=e.z,d=i.x,h=i.y,g=i.z;return this.x=u*g-f*h,this.y=f*d-s*g,this.z=s*h-u*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return xh.copy(this).projectOnVector(e),this.sub(xh)}reflect(e){return this.sub(xh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ne(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,u=this.z-e.z;return i*i+s*s+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const u=Math.sin(i)*e;return this.x=u*Math.sin(s),this.y=Math.cos(i)*e,this.z=u*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=u,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};um.prototype.isVector3=!0;let at=um;const xh=new at,Gv=new Ri,cm=class cm{constructor(e,i,s,u,f,d,h,g,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,u,f,d,h,g,m)}set(e,i,s,u,f,d,h,g,m){const S=this.elements;return S[0]=e,S[1]=u,S[2]=h,S[3]=i,S[4]=f,S[5]=g,S[6]=s,S[7]=d,S[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,u=i.elements,f=this.elements,d=s[0],h=s[3],g=s[6],m=s[1],S=s[4],v=s[7],_=s[2],T=s[5],R=s[8],O=u[0],M=u[3],x=u[6],w=u[1],H=u[4],C=u[7],U=u[2],D=u[5],I=u[8];return f[0]=d*O+h*w+g*U,f[3]=d*M+h*H+g*D,f[6]=d*x+h*C+g*I,f[1]=m*O+S*w+v*U,f[4]=m*M+S*H+v*D,f[7]=m*x+S*C+v*I,f[2]=_*O+T*w+R*U,f[5]=_*M+T*H+R*D,f[8]=_*x+T*C+R*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],g=e[6],m=e[7],S=e[8];return i*d*S-i*h*m-s*f*S+s*h*g+u*f*m-u*d*g}invert(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],g=e[6],m=e[7],S=e[8],v=S*d-h*m,_=h*g-S*f,T=m*f-d*g,R=i*v+s*_+u*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const O=1/R;return e[0]=v*O,e[1]=(u*m-S*s)*O,e[2]=(h*s-u*d)*O,e[3]=_*O,e[4]=(S*i-u*g)*O,e[5]=(u*f-h*i)*O,e[6]=T*O,e[7]=(s*g-m*i)*O,e[8]=(d*i-s*f)*O,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,u,f,d,h){const g=Math.cos(f),m=Math.sin(f);return this.set(s*g,s*m,-s*(g*d+m*h)+d+e,-u*m,u*g,-u*(-m*d+g*h)+h+i,0,0,1),this}scale(e,i){return eo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mh.makeScale(e,i)),this}rotate(e){return eo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mh.makeRotation(-e)),this}translate(e,i){return eo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let u=0;u<9;u++)if(i[u]!==s[u])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};cm.prototype.isMatrix3=!0;let he=cm;const Mh=new he,Vv=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xv=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yT(){const o={enabled:!0,workingColorSpace:bc,spaces:{},convert:function(u,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Ye&&(u.r=Oa(u.r),u.g=Oa(u.g),u.b=Oa(u.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ye&&(u.r=no(u.r),u.g=no(u.g),u.b=no(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===Sr?Ac:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,d){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return eo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return eo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[bc]:{primaries:e,whitePoint:s,transfer:Ac,toXYZ:Vv,fromXYZ:Xv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:e,whitePoint:s,transfer:Ye,toXYZ:Vv,fromXYZ:Xv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),o}const Ue=yT();function Oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function no(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Hs;class ET{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Hs===void 0&&(Hs=Rc("canvas")),Hs.width=e.width,Hs.height=e.height;const u=Hs.getContext("2d");e instanceof ImageData?u.putImageData(e,0,0):u.drawImage(e,0,0,e.width,e.height),s=Hs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Rc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const u=s.getImageData(0,0,e.width,e.height),f=u.data;for(let d=0;d<f.length;d++)f[d]=Oa(f[d]/255)*255;return s.putImageData(u,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Oa(i[s]/255)*255):i[s]=Oa(i[s]);return{data:i,width:e.width,height:e.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TT=0;class em{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=Ml(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let d=0,h=u.length;d<h;d++)u[d].isDataTexture?f.push(yh(u[d].image)):f.push(yh(u[d]))}else f=yh(u);s.url=f}return i||(e.images[this.uuid]=s),s}}function yh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ET.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let bT=0;const Eh=new at;class Bn extends jr{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,s=Na,u=Na,f=zn,d=Zr,h=Bi,g=hi,m=Bn.DEFAULT_ANISOTROPY,S=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bT++}),this.uuid=Ml(),this.name="",this.source=new em(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=g,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Eh).x}get height(){return this.source.getSize(Eh).y}get depth(){return this.source.getSize(Eh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){oe(`Texture.setValues(): property '${i}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ix)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tp:e.x=e.x-Math.floor(e.x);break;case Na:e.x=e.x<0?0:1;break;case ep:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tp:e.y=e.y-Math.floor(e.y);break;case Na:e.y=e.y<0?0:1;break;case ep:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=ix;Bn.DEFAULT_ANISOTROPY=1;const fm=class fm{constructor(e=0,i=0,s=0,u=1){this.x=e,this.y=i,this.z=s,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,u){return this.x=e,this.y=i,this.z=s,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,u=this.z,f=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*u+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*u+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*u+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*u+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,u,f;const g=e.elements,m=g[0],S=g[4],v=g[8],_=g[1],T=g[5],R=g[9],O=g[2],M=g[6],x=g[10];if(Math.abs(S-_)<.01&&Math.abs(v-O)<.01&&Math.abs(R-M)<.01){if(Math.abs(S+_)<.1&&Math.abs(v+O)<.1&&Math.abs(R+M)<.1&&Math.abs(m+T+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const H=(m+1)/2,C=(T+1)/2,U=(x+1)/2,D=(S+_)/4,I=(v+O)/4,E=(R+M)/4;return H>C&&H>U?H<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(H),u=D/s,f=I/s):C>U?C<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(C),s=D/u,f=E/u):U<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(U),s=I/f,u=E/f),this.set(s,u,f,i),this}let w=Math.sqrt((M-R)*(M-R)+(v-O)*(v-O)+(_-S)*(_-S));return Math.abs(w)<.001&&(w=1),this.x=(M-R)/w,this.y=(v-O)/w,this.z=(_-S)/w,this.w=Math.acos((m+T+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this.z=Ne(this.z,e.z,i.z),this.w=Ne(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this.z=Ne(this.z,e,i),this.w=Ne(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fm.prototype.isVector4=!0;let rn=fm;class AT extends jr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i),this.textures=[];const u={width:e,height:i,depth:s.depth},f=new Bn(u),d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=i,this.textures[u].image.depth=s,this.textures[u].isData3DTexture!==!0&&(this.textures[u].isArrayTexture=this.textures[u].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const u=Object.assign({},e.textures[i].image);this.textures[i].source=new em(u)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends AT{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class dx extends Bn{constructor(e=null,i=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:u},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RT extends Bn{constructor(e=null,i=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:u},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const wc=class wc{constructor(e,i,s,u,f,d,h,g,m,S,v,_,T,R,O,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,u,f,d,h,g,m,S,v,_,T,R,O,M)}set(e,i,s,u,f,d,h,g,m,S,v,_,T,R,O,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=u,x[1]=f,x[5]=d,x[9]=h,x[13]=g,x[2]=m,x[6]=S,x[10]=v,x[14]=_,x[3]=T,x[7]=R,x[11]=O,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wc().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,u=1/Gs.setFromMatrixColumn(e,0).length(),f=1/Gs.setFromMatrixColumn(e,1).length(),d=1/Gs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*u,i[1]=s[1]*u,i[2]=s[2]*u,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,u=e.y,f=e.z,d=Math.cos(s),h=Math.sin(s),g=Math.cos(u),m=Math.sin(u),S=Math.cos(f),v=Math.sin(f);if(e.order==="XYZ"){const _=d*S,T=d*v,R=h*S,O=h*v;i[0]=g*S,i[4]=-g*v,i[8]=m,i[1]=T+R*m,i[5]=_-O*m,i[9]=-h*g,i[2]=O-_*m,i[6]=R+T*m,i[10]=d*g}else if(e.order==="YXZ"){const _=g*S,T=g*v,R=m*S,O=m*v;i[0]=_+O*h,i[4]=R*h-T,i[8]=d*m,i[1]=d*v,i[5]=d*S,i[9]=-h,i[2]=T*h-R,i[6]=O+_*h,i[10]=d*g}else if(e.order==="ZXY"){const _=g*S,T=g*v,R=m*S,O=m*v;i[0]=_-O*h,i[4]=-d*v,i[8]=R+T*h,i[1]=T+R*h,i[5]=d*S,i[9]=O-_*h,i[2]=-d*m,i[6]=h,i[10]=d*g}else if(e.order==="ZYX"){const _=d*S,T=d*v,R=h*S,O=h*v;i[0]=g*S,i[4]=R*m-T,i[8]=_*m+O,i[1]=g*v,i[5]=O*m+_,i[9]=T*m-R,i[2]=-m,i[6]=h*g,i[10]=d*g}else if(e.order==="YZX"){const _=d*g,T=d*m,R=h*g,O=h*m;i[0]=g*S,i[4]=O-_*v,i[8]=R*v+T,i[1]=v,i[5]=d*S,i[9]=-h*S,i[2]=-m*S,i[6]=T*v+R,i[10]=_-O*v}else if(e.order==="XZY"){const _=d*g,T=d*m,R=h*g,O=h*m;i[0]=g*S,i[4]=-v,i[8]=m*S,i[1]=_*v+O,i[5]=d*S,i[9]=T*v-R,i[2]=R*v-T,i[6]=h*S,i[10]=O*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(CT,e,wT)}lookAt(e,i,s){const u=this.elements;return ci.subVectors(e,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),dr.crossVectors(s,ci),dr.lengthSq()===0&&(Math.abs(s.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),dr.crossVectors(s,ci)),dr.normalize(),Zu.crossVectors(ci,dr),u[0]=dr.x,u[4]=Zu.x,u[8]=ci.x,u[1]=dr.y,u[5]=Zu.y,u[9]=ci.y,u[2]=dr.z,u[6]=Zu.z,u[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,u=i.elements,f=this.elements,d=s[0],h=s[4],g=s[8],m=s[12],S=s[1],v=s[5],_=s[9],T=s[13],R=s[2],O=s[6],M=s[10],x=s[14],w=s[3],H=s[7],C=s[11],U=s[15],D=u[0],I=u[4],E=u[8],L=u[12],N=u[1],z=u[5],G=u[9],Y=u[13],V=u[2],Q=u[6],X=u[10],W=u[14],nt=u[3],it=u[7],ht=u[11],vt=u[15];return f[0]=d*D+h*N+g*V+m*nt,f[4]=d*I+h*z+g*Q+m*it,f[8]=d*E+h*G+g*X+m*ht,f[12]=d*L+h*Y+g*W+m*vt,f[1]=S*D+v*N+_*V+T*nt,f[5]=S*I+v*z+_*Q+T*it,f[9]=S*E+v*G+_*X+T*ht,f[13]=S*L+v*Y+_*W+T*vt,f[2]=R*D+O*N+M*V+x*nt,f[6]=R*I+O*z+M*Q+x*it,f[10]=R*E+O*G+M*X+x*ht,f[14]=R*L+O*Y+M*W+x*vt,f[3]=w*D+H*N+C*V+U*nt,f[7]=w*I+H*z+C*Q+U*it,f[11]=w*E+H*G+C*X+U*ht,f[15]=w*L+H*Y+C*W+U*vt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],u=e[8],f=e[12],d=e[1],h=e[5],g=e[9],m=e[13],S=e[2],v=e[6],_=e[10],T=e[14],R=e[3],O=e[7],M=e[11],x=e[15],w=g*T-m*_,H=h*T-m*v,C=h*_-g*v,U=d*T-m*S,D=d*_-g*S,I=d*v-h*S;return i*(O*w-M*H+x*C)-s*(R*w-M*U+x*D)+u*(R*H-O*U+x*I)-f*(R*C-O*D+M*I)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],u=e[8],f=e[1],d=e[5],h=e[9],g=e[2],m=e[6],S=e[10];return i*(d*S-h*m)-s*(f*S-h*g)+u*(f*m-d*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=i,u[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],g=e[6],m=e[7],S=e[8],v=e[9],_=e[10],T=e[11],R=e[12],O=e[13],M=e[14],x=e[15],w=i*h-s*d,H=i*g-u*d,C=i*m-f*d,U=s*g-u*h,D=s*m-f*h,I=u*m-f*g,E=S*O-v*R,L=S*M-_*R,N=S*x-T*R,z=v*M-_*O,G=v*x-T*O,Y=_*x-T*M,V=w*Y-H*G+C*z+U*N-D*L+I*E;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/V;return e[0]=(h*Y-g*G+m*z)*Q,e[1]=(u*G-s*Y-f*z)*Q,e[2]=(O*I-M*D+x*U)*Q,e[3]=(_*D-v*I-T*U)*Q,e[4]=(g*N-d*Y-m*L)*Q,e[5]=(i*Y-u*N+f*L)*Q,e[6]=(M*C-R*I-x*H)*Q,e[7]=(S*I-_*C+T*H)*Q,e[8]=(d*G-h*N+m*E)*Q,e[9]=(s*N-i*G-f*E)*Q,e[10]=(R*D-O*C+x*w)*Q,e[11]=(v*C-S*D-T*w)*Q,e[12]=(h*L-d*z-g*E)*Q,e[13]=(i*z-s*L+u*E)*Q,e[14]=(O*H-R*U-M*w)*Q,e[15]=(S*U-v*H+_*w)*Q,this}scale(e){const i=this.elements,s=e.x,u=e.y,f=e.z;return i[0]*=s,i[4]*=u,i[8]*=f,i[1]*=s,i[5]*=u,i[9]*=f,i[2]*=s,i[6]*=u,i[10]*=f,i[3]*=s,i[7]*=u,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,u))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),u=Math.sin(i),f=1-s,d=e.x,h=e.y,g=e.z,m=f*d,S=f*h;return this.set(m*d+s,m*h-u*g,m*g+u*h,0,m*h+u*g,S*h+s,S*g-u*d,0,m*g-u*h,S*g+u*d,f*g*g+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,u,f,d){return this.set(1,s,f,0,e,1,d,0,i,u,1,0,0,0,0,1),this}compose(e,i,s){const u=this.elements,f=i._x,d=i._y,h=i._z,g=i._w,m=f+f,S=d+d,v=h+h,_=f*m,T=f*S,R=f*v,O=d*S,M=d*v,x=h*v,w=g*m,H=g*S,C=g*v,U=s.x,D=s.y,I=s.z;return u[0]=(1-(O+x))*U,u[1]=(T+C)*U,u[2]=(R-H)*U,u[3]=0,u[4]=(T-C)*D,u[5]=(1-(_+x))*D,u[6]=(M+w)*D,u[7]=0,u[8]=(R+H)*I,u[9]=(M-w)*I,u[10]=(1-(_+O))*I,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,i,s){const u=this.elements;e.x=u[12],e.y=u[13],e.z=u[14];const f=this.determinantAffine();if(f===0)return s.set(1,1,1),i.identity(),this;let d=Gs.set(u[0],u[1],u[2]).length();const h=Gs.set(u[4],u[5],u[6]).length(),g=Gs.set(u[8],u[9],u[10]).length();f<0&&(d=-d),Oi.copy(this);const m=1/d,S=1/h,v=1/g;return Oi.elements[0]*=m,Oi.elements[1]*=m,Oi.elements[2]*=m,Oi.elements[4]*=S,Oi.elements[5]*=S,Oi.elements[6]*=S,Oi.elements[8]*=v,Oi.elements[9]*=v,Oi.elements[10]*=v,i.setFromRotationMatrix(Oi),s.x=d,s.y=h,s.z=g,this}makePerspective(e,i,s,u,f,d,h=ra,g=!1){const m=this.elements,S=2*f/(i-e),v=2*f/(s-u),_=(i+e)/(i-e),T=(s+u)/(s-u);let R,O;if(g)R=f/(d-f),O=d*f/(d-f);else if(h===ra)R=-(d+f)/(d-f),O=-2*d*f/(d-f);else if(h===Sl)R=-d/(d-f),O=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=v,m[9]=T,m[13]=0,m[2]=0,m[6]=0,m[10]=R,m[14]=O,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,u,f,d,h=ra,g=!1){const m=this.elements,S=2/(i-e),v=2/(s-u),_=-(i+e)/(i-e),T=-(s+u)/(s-u);let R,O;if(g)R=1/(d-f),O=d/(d-f);else if(h===ra)R=-2/(d-f),O=-(d+f)/(d-f);else if(h===Sl)R=-1/(d-f),O=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=0,m[12]=_,m[1]=0,m[5]=v,m[9]=0,m[13]=T,m[2]=0,m[6]=0,m[10]=R,m[14]=O,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let u=0;u<16;u++)if(i[u]!==s[u])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};wc.prototype.isMatrix4=!0;let en=wc;const Gs=new at,Oi=new en,CT=new at(0,0,0),wT=new at(1,1,1),dr=new at,Zu=new at,ci=new at,kv=new en,Wv=new Ri;class ua{constructor(e=0,i=0,s=0,u=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,u=this._order){return this._x=e,this._y=i,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const u=e.elements,f=u[0],d=u[4],h=u[8],g=u[1],m=u[5],S=u[9],v=u[2],_=u[6],T=u[10];switch(i){case"XYZ":this._y=Math.asin(Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,T),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,T),this._z=Math.atan2(g,m)):(this._y=Math.atan2(-v,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,T),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(g,f));break;case"ZYX":this._y=Math.asin(-Ne(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,T),this._z=Math.atan2(g,f)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Ne(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-S,m),this._y=Math.atan2(-v,f)):(this._x=0,this._y=Math.atan2(h,T));break;case"XZY":this._z=Math.asin(-Ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-S,T),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return kv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Wv.setFromEuler(this),this.setFromQuaternion(Wv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class hx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DT=0;const qv=new at,Vs=new Ri,Aa=new en,Ku=new at,ol=new at,UT=new at,NT=new Ri,Yv=new at(1,0,0),Zv=new at(0,1,0),Kv=new at(0,0,1),Qv={type:"added"},LT={type:"removed"},Xs={type:"childadded",child:null},Th={type:"childremoved",child:null};class Ln extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=Ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new at,i=new ua,s=new Ri,u=new at(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new en},normalMatrix:{value:new he}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Vs.setFromAxisAngle(e,i),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,i){return Vs.setFromAxisAngle(e,i),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(Yv,e)}rotateY(e){return this.rotateOnAxis(Zv,e)}rotateZ(e){return this.rotateOnAxis(Kv,e)}translateOnAxis(e,i){return qv.copy(e).applyQuaternion(this.quaternion),this.position.add(qv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Yv,e)}translateY(e){return this.translateOnAxis(Zv,e)}translateZ(e){return this.translateOnAxis(Kv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Ku.copy(e):Ku.set(e,i,s);const u=this.parent;this.updateWorldMatrix(!0,!1),ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(ol,Ku,this.up):Aa.lookAt(Ku,ol,this.up),this.quaternion.setFromRotationMatrix(Aa),u&&(Aa.extractRotation(u.matrixWorld),Vs.setFromRotationMatrix(Aa),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qv),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(LT),Th.child=e,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qv),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,u=this.children.length;s<u;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const u=this.children;for(let f=0,d=u.length;f<d;f++)u[f].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,e,UT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,NT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,u=e.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*s-f[8]*u,f[13]+=s-f[1]*i-f[5]*s-f[9]*u,f[14]+=u-f[2]*i-f[6]*s-f[10]*u}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const u=this.parent;if(e===!0&&u!==null&&u.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,u.name=this.name,u.castShadow=this.castShadow,u.receiveShadow=this.receiveShadow,u.visible=this.visible,u.frustumCulled=this.frustumCulled,u.renderOrder=this.renderOrder,u.static=this.static,u.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.pivot!==null&&(u.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(u.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(u.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(h=>({...h})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(e),u.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(h,g){return h[g.uuid]===void 0&&(h[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const g=h.shapes;if(Array.isArray(g))for(let m=0,S=g.length;m<S;m++){const v=g[m];f(e.shapes,v)}else f(e.shapes,g)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let g=0,m=this.material.length;g<m;g++)h.push(f(e.materials,this.material[g]));u.material=h}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let h=0;h<this.children.length;h++)u.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let h=0;h<this.animations.length;h++){const g=this.animations[h];u.animations.push(f(e.animations,g))}}if(i){const h=d(e.geometries),g=d(e.materials),m=d(e.textures),S=d(e.images),v=d(e.shapes),_=d(e.skeletons),T=d(e.animations),R=d(e.nodes);h.length>0&&(s.geometries=h),g.length>0&&(s.materials=g),m.length>0&&(s.textures=m),S.length>0&&(s.images=S),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),T.length>0&&(s.animations=T),R.length>0&&(s.nodes=R)}return s.object=u,s;function d(h){const g=[];for(const m in h){const S=h[m];delete S.metadata,g.push(S)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const u=e.children[s];this.add(u.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ln.DEFAULT_UP=new at(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qu extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OT={type:"move"};class bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let u=null,f=null,d=null;const h=this._targetRay,g=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const O of e.hand.values()){const M=i.getJointPose(O,s),x=this._getHandJoint(m,O);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const S=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],_=S.position.distanceTo(v.position),T=.02,R=.005;m.inputState.pinching&&_>T+R?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=T-R&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,s),f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,f.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(f.linearVelocity)):g.hasLinearVelocity=!1,f.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(f.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(u=i.getPose(e.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(OT)))}return h!==null&&(h.visible=u!==null),g!==null&&(g.visible=f!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Qu;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const px={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},Ju={h:0,s:0,l:0};function Ah(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Oe{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(e,i,s,u=Ue.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ue.colorSpaceToWorking(this,u),this}setHSL(e,i,s,u=Ue.workingColorSpace){if(e=MT(e,1),i=Ne(i,0,1),s=Ne(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=Ah(d,f,e+1/3),this.g=Ah(d,f,e),this.b=Ah(d,f,e-1/3)}return Ue.colorSpaceToWorking(this,u),this}setStyle(e,i=Jn){function s(f){f!==void 0&&parseFloat(f)<1&&oe("Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=u[1],h=u[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:oe("Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Jn){const s=px[e.toLowerCase()];return s!==void 0?this.setHex(s,i):oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return Ue.workingToColorSpace(In.copy(this),e),Math.round(Ne(In.r*255,0,255))*65536+Math.round(Ne(In.g*255,0,255))*256+Math.round(Ne(In.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ue.workingColorSpace){Ue.workingToColorSpace(In.copy(this),i);const s=In.r,u=In.g,f=In.b,d=Math.max(s,u,f),h=Math.min(s,u,f);let g,m;const S=(h+d)/2;if(h===d)g=0,m=0;else{const v=d-h;switch(m=S<=.5?v/(d+h):v/(2-d-h),d){case s:g=(u-f)/v+(u<f?6:0);break;case u:g=(f-s)/v+2;break;case f:g=(s-u)/v+4;break}g/=6}return e.h=g,e.s=m,e.l=S,e}getRGB(e,i=Ue.workingColorSpace){return Ue.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Jn){Ue.workingToColorSpace(In.copy(this),e);const i=In.r,s=In.g,u=In.b;return e!==Jn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(e,i,s){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+i,hr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(hr),e.getHSL(Ju);const s=Sh(hr.h,Ju.h,i),u=Sh(hr.s,Ju.s,i),f=Sh(hr.l,Ju.l,i);return this.setHSL(s,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,u=this.b,f=e.elements;return this.r=f[0]*i+f[3]*s+f[6]*u,this.g=f[1]*i+f[4]*s+f[7]*u,this.b=f[2]*i+f[5]*s+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Oe;Oe.NAMES=px;class mx extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Pi=new at,Ra=new at,Rh=new at,Ca=new at,ks=new at,Ws=new at,Jv=new at,Ch=new at,wh=new at,Dh=new at,Uh=new rn,Nh=new rn,Lh=new rn;class zi{constructor(e=new at,i=new at,s=new at){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,u){u.subVectors(s,i),Pi.subVectors(e,i),u.cross(Pi);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,i,s,u,f){Pi.subVectors(u,i),Ra.subVectors(s,i),Rh.subVectors(e,i);const d=Pi.dot(Pi),h=Pi.dot(Ra),g=Pi.dot(Rh),m=Ra.dot(Ra),S=Ra.dot(Rh),v=d*m-h*h;if(v===0)return f.set(0,0,0),null;const _=1/v,T=(m*g-h*S)*_,R=(d*S-h*g)*_;return f.set(1-T-R,R,T)}static containsPoint(e,i,s,u){return this.getBarycoord(e,i,s,u,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(e,i,s,u,f,d,h,g){return this.getBarycoord(e,i,s,u,Ca)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(f,Ca.x),g.addScaledVector(d,Ca.y),g.addScaledVector(h,Ca.z),g)}static getInterpolatedAttribute(e,i,s,u,f,d){return Uh.setScalar(0),Nh.setScalar(0),Lh.setScalar(0),Uh.fromBufferAttribute(e,i),Nh.fromBufferAttribute(e,s),Lh.fromBufferAttribute(e,u),d.setScalar(0),d.addScaledVector(Uh,f.x),d.addScaledVector(Nh,f.y),d.addScaledVector(Lh,f.z),d}static isFrontFacing(e,i,s,u){return Pi.subVectors(s,i),Ra.subVectors(e,i),Pi.cross(Ra).dot(u)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,u){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,i,s,u){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Pi.cross(Ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return zi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,u,f){return zi.getInterpolation(e,this.a,this.b,this.c,i,s,u,f)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,u=this.b,f=this.c;let d,h;ks.subVectors(u,s),Ws.subVectors(f,s),Ch.subVectors(e,s);const g=ks.dot(Ch),m=Ws.dot(Ch);if(g<=0&&m<=0)return i.copy(s);wh.subVectors(e,u);const S=ks.dot(wh),v=Ws.dot(wh);if(S>=0&&v<=S)return i.copy(u);const _=g*v-S*m;if(_<=0&&g>=0&&S<=0)return d=g/(g-S),i.copy(s).addScaledVector(ks,d);Dh.subVectors(e,f);const T=ks.dot(Dh),R=Ws.dot(Dh);if(R>=0&&T<=R)return i.copy(f);const O=T*m-g*R;if(O<=0&&m>=0&&R<=0)return h=m/(m-R),i.copy(s).addScaledVector(Ws,h);const M=S*R-T*v;if(M<=0&&v-S>=0&&T-R>=0)return Jv.subVectors(f,u),h=(v-S)/(v-S+(T-R)),i.copy(u).addScaledVector(Jv,h);const x=1/(M+O+_);return d=O*x,h=_*x,i.copy(s).addScaledVector(ks,d).addScaledVector(Ws,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class yl{constructor(e=new at(1/0,1/0,1/0),i=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ii.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ii.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ii.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ii):Ii.fromBufferAttribute(f,d),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ju.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ju.copy(s.boundingBox)),ju.applyMatrix4(e.matrixWorld),this.union(ju)}const u=e.children;for(let f=0,d=u.length;f<d;f++)this.expandByObject(u[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ll),$u.subVectors(this.max,ll),qs.subVectors(e.a,ll),Ys.subVectors(e.b,ll),Zs.subVectors(e.c,ll),pr.subVectors(Ys,qs),mr.subVectors(Zs,Ys),Xr.subVectors(qs,Zs);let i=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Xr.z,Xr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Xr.z,0,-Xr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Xr.y,Xr.x,0];return!Oh(i,qs,Ys,Zs,$u)||(i=[1,0,0,0,1,0,0,0,1],!Oh(i,qs,Ys,Zs,$u))?!1:(tc.crossVectors(pr,mr),i=[tc.x,tc.y,tc.z],Oh(i,qs,Ys,Zs,$u))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wa=[new at,new at,new at,new at,new at,new at,new at,new at],Ii=new at,ju=new yl,qs=new at,Ys=new at,Zs=new at,pr=new at,mr=new at,Xr=new at,ll=new at,$u=new at,tc=new at,kr=new at;function Oh(o,e,i,s,u){for(let f=0,d=o.length-3;f<=d;f+=3){kr.fromArray(o,f);const h=u.x*Math.abs(kr.x)+u.y*Math.abs(kr.y)+u.z*Math.abs(kr.z),g=e.dot(kr),m=i.dot(kr),S=s.dot(kr);if(Math.max(-Math.max(g,m,S),Math.min(g,m,S))>h)return!1}return!0}const _n=new at,ec=new Te;let PT=0;class Pa extends jr{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=gT,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=i.array[s+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)ec.fromBufferAttribute(this,i),ec.applyMatrix3(e),this.setXY(i,ec.x,ec.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=sl(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Qn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=sl(i,this.array)),i}setX(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=sl(i,this.array)),i}setY(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=sl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=sl(i,this.array)),i}setW(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,u){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),u=Qn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=u,this}setXYZW(e,i,s,u,f){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),u=Qn(u,this.array),f=Qn(f,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class gx extends Pa{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class _x extends Pa{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class $n extends Pa{constructor(e,i,s){super(new Float32Array(e),i,s)}}const IT=new yl,ul=new at,Ph=new at;class nm{constructor(e=new at,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):IT.setFromPoints(e).getCenter(s);let u=0;for(let f=0,d=e.length;f<d;f++)u=Math.max(u,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ul.subVectors(e,this.center);const i=ul.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),u=(s-this.radius)*.5;this.center.addScaledVector(ul,u/s),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ul.copy(e.center).add(Ph)),this.expandByPoint(ul.copy(e.center).sub(Ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zT=0;const Ai=new en,Ih=new Ln,Ks=new at,fi=new yl,cl=new yl,bn=new at;class Hi extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zT++}),this.uuid=Ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_T(e)?_x:gx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new he().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,i,s){return Ai.makeTranslation(e,i,s),this.applyMatrix4(Ai),this}scale(e,i,s){return Ai.makeScale(e,i,s),this.applyMatrix4(Ai),this}lookAt(e){return Ih.lookAt(e),Ih.updateMatrix(),this.applyMatrix4(Ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let u=0,f=e.length;u<f;u++){const d=e[u];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new $n(s,3))}else{const s=Math.min(e.length,i.count);for(let u=0;u<s;u++){const f=e[u];i.setXYZ(u,f.x,f.y,f.z||0)}e.length>i.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,u=i.length;s<u;s++){const f=i[s];fi.setFromBufferAttribute(f),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nm);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(e){const s=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];cl.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(fi.min,cl.min),fi.expandByPoint(bn),bn.addVectors(fi.max,cl.max),fi.expandByPoint(bn)):(fi.expandByPoint(cl.min),fi.expandByPoint(cl.max))}fi.getCenter(s);let u=0;for(let f=0,d=e.count;f<d;f++)bn.fromBufferAttribute(e,f),u=Math.max(u,s.distanceToSquared(bn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],g=this.morphTargetsRelative;for(let m=0,S=h.count;m<S;m++)bn.fromBufferAttribute(h,m),g&&(Ks.fromBufferAttribute(e,m),bn.add(Ks)),u=Math.max(u,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,u=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Pa(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],g=[];for(let E=0;E<s.count;E++)h[E]=new at,g[E]=new at;const m=new at,S=new at,v=new at,_=new Te,T=new Te,R=new Te,O=new at,M=new at;function x(E,L,N){m.fromBufferAttribute(s,E),S.fromBufferAttribute(s,L),v.fromBufferAttribute(s,N),_.fromBufferAttribute(f,E),T.fromBufferAttribute(f,L),R.fromBufferAttribute(f,N),S.sub(m),v.sub(m),T.sub(_),R.sub(_);const z=1/(T.x*R.y-R.x*T.y);isFinite(z)&&(O.copy(S).multiplyScalar(R.y).addScaledVector(v,-T.y).multiplyScalar(z),M.copy(v).multiplyScalar(T.x).addScaledVector(S,-R.x).multiplyScalar(z),h[E].add(O),h[L].add(O),h[N].add(O),g[E].add(M),g[L].add(M),g[N].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let E=0,L=w.length;E<L;++E){const N=w[E],z=N.start,G=N.count;for(let Y=z,V=z+G;Y<V;Y+=3)x(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const H=new at,C=new at,U=new at,D=new at;function I(E){U.fromBufferAttribute(u,E),D.copy(U);const L=h[E];H.copy(L),H.sub(U.multiplyScalar(U.dot(L))).normalize(),C.crossVectors(D,L);const z=C.dot(g[E])<0?-1:1;d.setXYZW(E,H.x,H.y,H.z,z)}for(let E=0,L=w.length;E<L;++E){const N=w[E],z=N.start,G=N.count;for(let Y=z,V=z+G;Y<V;Y+=3)I(e.getX(Y+0)),I(e.getX(Y+1)),I(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Pa(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,T=s.count;_<T;_++)s.setXYZ(_,0,0,0);const u=new at,f=new at,d=new at,h=new at,g=new at,m=new at,S=new at,v=new at;if(e)for(let _=0,T=e.count;_<T;_+=3){const R=e.getX(_+0),O=e.getX(_+1),M=e.getX(_+2);u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,O),d.fromBufferAttribute(i,M),S.subVectors(d,f),v.subVectors(u,f),S.cross(v),h.fromBufferAttribute(s,R),g.fromBufferAttribute(s,O),m.fromBufferAttribute(s,M),h.add(S),g.add(S),m.add(S),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(O,g.x,g.y,g.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let _=0,T=i.count;_<T;_+=3)u.fromBufferAttribute(i,_+0),f.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),S.subVectors(d,f),v.subVectors(u,f),S.cross(v),s.setXYZ(_+0,S.x,S.y,S.z),s.setXYZ(_+1,S.x,S.y,S.z),s.setXYZ(_+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,g){const m=h.array,S=h.itemSize,v=h.normalized,_=new m.constructor(g.length*S);let T=0,R=0;for(let O=0,M=g.length;O<M;O++){h.isInterleavedBufferAttribute?T=g[O]*h.data.stride+h.offset:T=g[O]*S;for(let x=0;x<S;x++)_[R++]=m[T++]}return new Pa(_,S,v)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Hi,s=this.index.array,u=this.attributes;for(const h in u){const g=u[h],m=e(g,s);i.setAttribute(h,m)}const f=this.morphAttributes;for(const h in f){const g=[],m=f[h];for(let S=0,v=m.length;S<v;S++){const _=m[S],T=e(_,s);g.push(T)}i.morphAttributes[h]=g}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,g=d.length;h<g;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const g=this.parameters;for(const m in g)g[m]!==void 0&&(e[m]=g[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const m=s[g];e.data.attributes[g]=m.toJSON(e.data)}const u={};let f=!1;for(const g in this.morphAttributes){const m=this.morphAttributes[g],S=[];for(let v=0,_=m.length;v<_;v++){const T=m[v];S.push(T.toJSON(e.data))}S.length>0&&(u[g]=S,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const u=e.attributes;for(const m in u){const S=u[m];this.setAttribute(m,S.clone(i))}const f=e.morphAttributes;for(const m in f){const S=[],v=f[m];for(let _=0,T=v.length;_<T;_++)S.push(v[_].clone(i));this.morphAttributes[m]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,S=d.length;m<S;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zh=new at,BT=new at,FT=new he;class vr{constructor(e=new at(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,u){return this.normal.set(e,i,s),this.constant=u,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const u=zh.subVectors(s,i).cross(BT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const u=e.delta(zh),f=this.normal.dot(u);if(f===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/f;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(u,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||FT.getNormalMatrix(e),u=this.coplanarPoint(zh).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let HT=0;class El extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HT++}),this.uuid=Ml(),this.name="",this.type="Material",this.blending=ml,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=YS,this.blendDst=ZS,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=gl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uT,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_h,this.stencilZFail=_h,this.stencilZPass=_h,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){oe(`Material: parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector2&&s&&s.isVector2||u&&u.isEuler&&s&&s.isEuler||u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}if(i){const f=u(e.textures),d=u(e.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new vr().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Te().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const u=i.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Da=new at,Bh=new at,nc=new at,ic=new at;class GT{constructor(e=new at,i=new at(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Da.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,i),Da.distanceToSquared(e))}distanceSqToSegment(e,i,s,u){Bh.copy(e).add(i).multiplyScalar(.5),nc.copy(i).sub(e).normalize(),ic.copy(this.origin).sub(Bh);const f=e.distanceTo(i)*.5,d=-this.direction.dot(nc),h=ic.dot(this.direction),g=-ic.dot(nc),m=ic.lengthSq(),S=Math.abs(1-d*d);let v,_,T,R;if(S>0)if(v=d*g-h,_=d*h-g,R=f*S,v>=0)if(_>=-R)if(_<=R){const O=1/S;v*=O,_*=O,T=v*(v+d*_+2*h)+_*(d*v+_+2*g)+m}else _=f,v=Math.max(0,-(d*_+h)),T=-v*v+_*(_+2*g)+m;else _=-f,v=Math.max(0,-(d*_+h)),T=-v*v+_*(_+2*g)+m;else _<=-R?(v=Math.max(0,-(-d*f+h)),_=v>0?-f:Math.min(Math.max(-f,-g),f),T=-v*v+_*(_+2*g)+m):_<=R?(v=0,_=Math.min(Math.max(-f,-g),f),T=_*(_+2*g)+m):(v=Math.max(0,-(d*f+h)),_=v>0?f:Math.min(Math.max(-f,-g),f),T=-v*v+_*(_+2*g)+m);else _=d>0?-f:f,v=Math.max(0,-(d*_+h)),T=-v*v+_*(_+2*g)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),u&&u.copy(Bh).addScaledVector(nc,_),T}intersectSphere(e,i){if(e.radius<0)return null;Da.subVectors(e.center,this.origin);const s=Da.dot(this.direction),u=Da.dot(Da)-s*s,f=e.radius*e.radius;if(u>f)return null;const d=Math.sqrt(f-u),h=s-d,g=s+d;return g<0?null:h<0?this.at(g,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,u,f,d,h,g;const m=1/this.direction.x,S=1/this.direction.y,v=1/this.direction.z,_=this.origin;return m>=0?(s=(e.min.x-_.x)*m,u=(e.max.x-_.x)*m):(s=(e.max.x-_.x)*m,u=(e.min.x-_.x)*m),S>=0?(f=(e.min.y-_.y)*S,d=(e.max.y-_.y)*S):(f=(e.max.y-_.y)*S,d=(e.min.y-_.y)*S),s>d||f>u||((f>s||isNaN(s))&&(s=f),(d<u||isNaN(u))&&(u=d),v>=0?(h=(e.min.z-_.z)*v,g=(e.max.z-_.z)*v):(h=(e.max.z-_.z)*v,g=(e.min.z-_.z)*v),s>g||h>u)||((h>s||s!==s)&&(s=h),(g<u||u!==u)&&(u=g),u<0)?null:this.at(s>=0?s:u,i)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,i,s,u,f){const d=this.origin,h=this.direction,g=h.x,m=h.y,S=h.z,v=e.x-d.x,_=e.y-d.y,T=e.z-d.z,R=i.x-d.x,O=i.y-d.y,M=i.z-d.z,x=s.x-d.x,w=s.y-d.y,H=s.z-d.z,C=Math.abs(g),U=Math.abs(m),D=Math.abs(S);let I,E,L,N,z,G,Y,V,Q,X,W,nt;if(C>=U&&C>=D?(L=g,G=v,Q=R,nt=x,g>=0?(I=m,E=S,N=_,z=T,Y=O,V=M,X=w,W=H):(I=S,E=m,N=T,z=_,Y=M,V=O,X=H,W=w)):U>=D?(L=m,G=_,Q=O,nt=w,m>=0?(I=S,E=g,N=T,z=v,Y=M,V=R,X=H,W=x):(I=g,E=S,N=v,z=T,Y=R,V=M,X=x,W=H)):(L=S,G=T,Q=M,nt=H,S>=0?(I=g,E=m,N=v,z=_,Y=R,V=O,X=x,W=w):(I=m,E=g,N=_,z=v,Y=O,V=R,X=w,W=x)),L===0)return null;const it=I/L,ht=E/L,vt=1/L,kt=N-it*G,It=z-ht*G,F=Y-it*Q,pt=V-ht*Q,bt=X-it*nt,Z=W-ht*nt,ct=bt*pt-Z*F,Et=kt*Z-It*bt,Ct=F*It-pt*kt;if(u){if(ct<0||Et<0||Ct<0)return null}else if((ct<0||Et<0||Ct<0)&&(ct>0||Et>0||Ct>0))return null;const mt=ct+Et+Ct;if(mt===0)return null;const At=vt*(ct*G+Et*Q+Ct*nt);return(mt>0?At<0:At>0)?null:this.at(At/mt,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Uc extends El{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=KS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jv=new en,Wr=new GT,ac=new nm,$v=new at,rc=new at,sc=new at,oc=new at,Fh=new at,lc=new at,tS=new at,uc=new at;class pi extends Ln{constructor(e=new Hi,i=new Uc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const u=i[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=u.length;f<d;f++){const h=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,i){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(u,e);const h=this.morphTargetInfluences;if(f&&h){lc.set(0,0,0);for(let g=0,m=f.length;g<m;g++){const S=h[g],v=f[g];S!==0&&(Fh.fromBufferAttribute(v,e),d?lc.addScaledVector(Fh,S):lc.addScaledVector(Fh.sub(i),S))}i.add(lc)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ac.copy(s.boundingSphere),ac.applyMatrix4(f),Wr.copy(e.ray).recast(e.near),!(ac.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(ac,$v)===null||Wr.origin.distanceToSquared($v)>(e.far-e.near)**2))&&(jv.copy(f).invert(),Wr.copy(e.ray).applyMatrix4(jv),!(s.boundingBox!==null&&Wr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Wr)))}_computeIntersections(e,i,s){let u;const f=this.geometry,d=this.material,h=f.index,g=f.attributes.position,m=f.attributes.uv,S=f.attributes.uv1,v=f.attributes.normal,_=f.groups,T=f.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,O=_.length;R<O;R++){const M=_[R],x=d[M.materialIndex],w=Math.max(M.start,T.start),H=Math.min(h.count,Math.min(M.start+M.count,T.start+T.count));for(let C=w,U=H;C<U;C+=3){const D=h.getX(C),I=h.getX(C+1),E=h.getX(C+2);u=cc(this,x,e,s,m,S,v,D,I,E),u&&(u.faceIndex=Math.floor(C/3),u.face.materialIndex=M.materialIndex,i.push(u))}}else{const R=Math.max(0,T.start),O=Math.min(h.count,T.start+T.count);for(let M=R,x=O;M<x;M+=3){const w=h.getX(M),H=h.getX(M+1),C=h.getX(M+2);u=cc(this,d,e,s,m,S,v,w,H,C),u&&(u.faceIndex=Math.floor(M/3),i.push(u))}}else if(g!==void 0)if(Array.isArray(d))for(let R=0,O=_.length;R<O;R++){const M=_[R],x=d[M.materialIndex],w=Math.max(M.start,T.start),H=Math.min(g.count,Math.min(M.start+M.count,T.start+T.count));for(let C=w,U=H;C<U;C+=3){const D=C,I=C+1,E=C+2;u=cc(this,x,e,s,m,S,v,D,I,E),u&&(u.faceIndex=Math.floor(C/3),u.face.materialIndex=M.materialIndex,i.push(u))}}else{const R=Math.max(0,T.start),O=Math.min(g.count,T.start+T.count);for(let M=R,x=O;M<x;M+=3){const w=M,H=M+1,C=M+2;u=cc(this,d,e,s,m,S,v,w,H,C),u&&(u.faceIndex=Math.floor(M/3),i.push(u))}}}}function VT(o,e,i,s,u,f,d,h){let g;if(e.side===jn?g=s.intersectTriangle(d,f,u,!0,h):g=s.intersectTriangle(u,f,d,e.side===Ia,h),g===null)return null;uc.copy(h),uc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(uc);return m<i.near||m>i.far?null:{distance:m,point:uc.clone(),object:o}}function cc(o,e,i,s,u,f,d,h,g,m){o.getVertexPosition(h,rc),o.getVertexPosition(g,sc),o.getVertexPosition(m,oc);const S=VT(o,e,i,s,rc,sc,oc,tS);if(S){const v=new at;zi.getBarycoord(tS,rc,sc,oc,v),u&&(S.uv=zi.getInterpolatedAttribute(u,h,g,m,v,new Te)),f&&(S.uv1=zi.getInterpolatedAttribute(f,h,g,m,v,new Te)),d&&(S.normal=zi.getInterpolatedAttribute(d,h,g,m,v,new at),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const _={a:h,b:g,c:m,normal:new at,materialIndex:0};zi.getNormal(rc,sc,oc,_.normal),S.face=_,S.barycoord=v}return S}class XT extends Bn{constructor(e=null,i=1,s=1,u,f,d,h,g,m=Nn,S=Nn,v,_){super(null,d,h,g,m,S,u,f,v,_),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qr=new nm,kT=new Te(.5,.5),fc=new at;class im{constructor(e=new vr,i=new vr,s=new vr,u=new vr,f=new vr,d=new vr){this.planes=[e,i,s,u,f,d]}set(e,i,s,u,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(u),h[4].copy(f),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ra,s=!1){const u=this.planes,f=e.elements,d=f[0],h=f[1],g=f[2],m=f[3],S=f[4],v=f[5],_=f[6],T=f[7],R=f[8],O=f[9],M=f[10],x=f[11],w=f[12],H=f[13],C=f[14],U=f[15];if(u[0].setComponents(m-d,T-S,x-R,U-w).normalize(),u[1].setComponents(m+d,T+S,x+R,U+w).normalize(),u[2].setComponents(m+h,T+v,x+O,U+H).normalize(),u[3].setComponents(m-h,T-v,x-O,U-H).normalize(),s)u[4].setComponents(g,_,M,C).normalize(),u[5].setComponents(m-g,T-_,x-M,U-C).normalize();else if(u[4].setComponents(m-g,T-_,x-M,U-C).normalize(),i===ra)u[5].setComponents(m+g,T+_,x+M,U+C).normalize();else if(i===Sl)u[5].setComponents(g,_,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){qr.center.set(0,0,0);const i=kT.distanceTo(e.center);return qr.radius=.7071067811865476+i,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const i=this.planes,s=e.center,u=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const u=i[s];if(fc.x=u.normal.x>0?e.max.x:e.min.x,fc.y=u.normal.y>0?e.max.y:e.min.y,fc.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(fc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vx extends Bn{constructor(e=[],i=Qr,s,u,f,d,h,g,m,S){super(e,i,s,u,f,d,h,g,m,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sx extends Bn{constructor(e,i,s,u,f,d,h,g,m){super(e,i,s,u,f,d,h,g,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xl extends Bn{constructor(e,i,s=oa,u,f,d,h=Nn,g=Nn,m,S=za,v=1){if(S!==za&&S!==Kr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:v};super(_,u,f,d,h,g,S,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new em(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class WT extends xl{constructor(e,i=oa,s=Qr,u,f,d=Nn,h=Nn,g,m=za){const S={width:e,height:e,depth:1},v=[S,S,S,S,S,S];super(e,e,i,s,u,f,d,h,g,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xx extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Tl extends Hi{constructor(e=1,i=1,s=1,u=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:u,heightSegments:f,depthSegments:d};const h=this;u=Math.floor(u),f=Math.floor(f),d=Math.floor(d);const g=[],m=[],S=[],v=[];let _=0,T=0;R("z","y","x",-1,-1,s,i,e,d,f,0),R("z","y","x",1,-1,s,i,-e,d,f,1),R("x","z","y",1,1,e,s,i,u,d,2),R("x","z","y",1,-1,e,s,-i,u,d,3),R("x","y","z",1,-1,e,i,s,u,f,4),R("x","y","z",-1,-1,e,i,-s,u,f,5),this.setIndex(g),this.setAttribute("position",new $n(m,3)),this.setAttribute("normal",new $n(S,3)),this.setAttribute("uv",new $n(v,2));function R(O,M,x,w,H,C,U,D,I,E,L){const N=C/I,z=U/E,G=C/2,Y=U/2,V=D/2,Q=I+1,X=E+1;let W=0,nt=0;const it=new at;for(let ht=0;ht<X;ht++){const vt=ht*z-Y;for(let kt=0;kt<Q;kt++){const It=kt*N-G;it[O]=It*w,it[M]=vt*H,it[x]=V,m.push(it.x,it.y,it.z),it[O]=0,it[M]=0,it[x]=D>0?1:-1,S.push(it.x,it.y,it.z),v.push(kt/I),v.push(1-ht/E),W+=1}}for(let ht=0;ht<E;ht++)for(let vt=0;vt<I;vt++){const kt=_+vt+Q*ht,It=_+vt+Q*(ht+1),F=_+(vt+1)+Q*(ht+1),pt=_+(vt+1)+Q*ht;g.push(kt,It,pt),g.push(It,F,pt),nt+=6}h.addGroup(T,nt,L),T+=nt,_+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class am extends Hi{constructor(e=[],i=[],s=1,u=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:u};const f=[],d=[];h(u),m(s),S(),this.setAttribute("position",new $n(f,3)),this.setAttribute("normal",new $n(f.slice(),3)),this.setAttribute("uv",new $n(d,2)),u===0?this.computeVertexNormals():this.normalizeNormals();function h(w){const H=new at,C=new at,U=new at;for(let D=0;D<i.length;D+=3)T(i[D+0],H),T(i[D+1],C),T(i[D+2],U),g(H,C,U,w)}function g(w,H,C,U){const D=U+1,I=[];for(let E=0;E<=D;E++){I[E]=[];const L=w.clone().lerp(C,E/D),N=H.clone().lerp(C,E/D),z=D-E;for(let G=0;G<=z;G++)G===0&&E===D?I[E][G]=L:I[E][G]=L.clone().lerp(N,G/z)}for(let E=0;E<D;E++)for(let L=0;L<2*(D-E)-1;L++){const N=Math.floor(L/2);L%2===0?(_(I[E][N+1]),_(I[E+1][N]),_(I[E][N])):(_(I[E][N+1]),_(I[E+1][N+1]),_(I[E+1][N]))}}function m(w){const H=new at;for(let C=0;C<f.length;C+=3)H.x=f[C+0],H.y=f[C+1],H.z=f[C+2],H.normalize().multiplyScalar(w),f[C+0]=H.x,f[C+1]=H.y,f[C+2]=H.z}function S(){const w=new at;for(let H=0;H<f.length;H+=3){w.x=f[H+0],w.y=f[H+1],w.z=f[H+2];const C=M(w)/2/Math.PI+.5,U=x(w)/Math.PI+.5;d.push(C,1-U)}R(),v()}function v(){for(let w=0;w<d.length;w+=6){const H=d[w+0],C=d[w+2],U=d[w+4],D=Math.max(H,C,U),I=Math.min(H,C,U);D>.9&&I<.1&&(H<.2&&(d[w+0]+=1),C<.2&&(d[w+2]+=1),U<.2&&(d[w+4]+=1))}}function _(w){f.push(w.x,w.y,w.z)}function T(w,H){const C=w*3;H.x=e[C+0],H.y=e[C+1],H.z=e[C+2]}function R(){const w=new at,H=new at,C=new at,U=new at,D=new Te,I=new Te,E=new Te;for(let L=0,N=0;L<f.length;L+=9,N+=6){w.set(f[L+0],f[L+1],f[L+2]),H.set(f[L+3],f[L+4],f[L+5]),C.set(f[L+6],f[L+7],f[L+8]),D.set(d[N+0],d[N+1]),I.set(d[N+2],d[N+3]),E.set(d[N+4],d[N+5]),U.copy(w).add(H).add(C).divideScalar(3);const z=M(U);O(D,N+0,w,z),O(I,N+2,H,z),O(E,N+4,C,z)}}function O(w,H,C,U){U<0&&w.x===1&&(d[H]=w.x-1),C.x===0&&C.z===0&&(d[H]=U/2/Math.PI+.5)}function M(w){return Math.atan2(w.z,-w.x)}function x(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new am(e.vertices,e.indices,e.radius,e.detail)}}class rm extends am{constructor(e=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],u=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,u,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new rm(e.radius,e.detail)}}class oo extends Hi{constructor(e=1,i=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:u};const f=e/2,d=i/2,h=Math.floor(s),g=Math.floor(u),m=h+1,S=g+1,v=e/h,_=i/g,T=[],R=[],O=[],M=[];for(let x=0;x<S;x++){const w=x*_-d;for(let H=0;H<m;H++){const C=H*v-f;R.push(C,-w,0),O.push(0,0,1),M.push(H/h),M.push(1-x/g)}}for(let x=0;x<g;x++)for(let w=0;w<h;w++){const H=w+m*x,C=w+m*(x+1),U=w+1+m*(x+1),D=w+1+m*x;T.push(H,C,D),T.push(C,U,D)}this.setIndex(T),this.setAttribute("position",new $n(R,3)),this.setAttribute("normal",new $n(O,3)),this.setAttribute("uv",new $n(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.widthSegments,e.heightSegments)}}function so(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const u=o[i][s];if(eS(u))u.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=u.clone();else if(Array.isArray(u))if(eS(u[0])){const f=[];for(let d=0,h=u.length;d<h;d++)f[d]=u[d].clone();e[i][s]=f}else e[i][s]=u.slice();else e[i][s]=u}}return e}function kn(o){const e={};for(let i=0;i<o.length;i++){const s=so(o[i]);for(const u in s)e[u]=s[u]}return e}function eS(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function qT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Mx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ue.workingColorSpace}const YT={clone:so,merge:kn};var ZT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ca extends El{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZT,this.fragmentShader=KT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=qT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const u in this.uniforms){const d=this.uniforms[u].value;d&&d.isTexture?i.uniforms[u]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[u]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[u]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[u]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[u]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[u]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[u]={type:"m4",value:d.toArray()}:i.uniforms[u]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const u=e.uniforms[s];switch(this.uniforms[s]={},u.type){case"t":this.uniforms[s].value=i[u.value]||null;break;case"c":this.uniforms[s].value=new Oe().setHex(u.value);break;case"v2":this.uniforms[s].value=new Te().fromArray(u.value);break;case"v3":this.uniforms[s].value=new at().fromArray(u.value);break;case"v4":this.uniforms[s].value=new rn().fromArray(u.value);break;case"m3":this.uniforms[s].value=new he().fromArray(u.value);break;case"m4":this.uniforms[s].value=new en().fromArray(u.value);break;default:this.uniforms[s].value=u.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class QT extends ca{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yx extends El{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Np,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class JT extends El{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jT extends El{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sm extends Ln{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=i}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class Ex extends sm{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const Hh=new en,nS=new at,iS=new at;class $T{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new im,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera;nS.setFromMatrixPosition(e.matrixWorld),i.position.copy(nS),iS.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(iS),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(e,i,s,u){Hh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s.setFromProjectionMatrix(Hh,e.coordinateSystem,e.reversedDepth);const f=this._frameExtents,d=u?u.z/f.x:1,h=u?u.w/f.y:1,g=u?u.x/f.x:0,m=u?u.y/f.y:0;e.coordinateSystem===Sl||e.reversedDepth?i.set(.5*d,0,0,.5*d+g,0,.5*h,0,.5*h+m,0,0,1,0,0,0,0,1):i.set(.5*d,0,0,.5*d+g,0,.5*h,0,.5*h+m,0,0,.5,.5,0,0,0,1),i.multiply(Hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const dc=new at,hc=new Ri,ea=new at;class Tx extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dc,hc,ea),ea.x===1&&ea.y===1&&ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dc,hc,ea.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(dc,hc,ea),ea.x===1&&ea.y===1&&ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dc,hc,ea.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gr=new at,aS=new Te,rS=new Te;class di extends Tx{constructor(e=50,i=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Lp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lp*2*Math.atan(Math.tan(vh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,i){return this.getViewBounds(e,aS,rS),i.subVectors(rS,aS)}setViewOffset(e,i,s,u,f,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(vh*.5*this.fov)/this.zoom,s=2*i,u=this.aspect*s,f=-.5*u;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,m=d.fullHeight;f+=d.offsetX*u/g,i-=d.offsetY*s/m,u*=d.width/g,s*=d.height/m}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class om extends Tx{constructor(e=-1,i=1,s=1,u=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=u,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,u,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-e,d=s+e,h=u+i,g=u-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,d=f+m*this.view.width,h-=S*this.view.offsetY,g=h-S*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class tb extends $T{constructor(){super(new om(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bx extends sm{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new tb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class Ax extends sm{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Qs=-90,Js=1;class eb extends Ln{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new di(Qs,Js,e,i);u.layers=this.layers,this.add(u);const f=new di(Qs,Js,e,i);f.layers=this.layers,this.add(f);const d=new di(Qs,Js,e,i);d.layers=this.layers,this.add(d);const h=new di(Qs,Js,e,i);h.layers=this.layers,this.add(h);const g=new di(Qs,Js,e,i);g.layers=this.layers,this.add(g);const m=new di(Qs,Js,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,u,f,d,h,g]=i;for(const m of i)this.remove(m);if(e===ra)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===Sl)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,g,m,S]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),T=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const O=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,1,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(s,4,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),s.texture.generateMipmaps=O,e.setRenderTarget(s,5,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(v,_,T),e.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class nb extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const dm=class dm{constructor(e,i,s,u){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,u)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,u){const f=this.elements;return f[0]=e,f[2]=i,f[1]=s,f[3]=u,this}};dm.prototype.isMatrix2=!0;let sS=dm;function oS(o,e,i,s){const u=ib(s);switch(i){case lx:return o*e;case cx:return o*e/u.components*u.byteLength;case Qp:return o*e/u.components*u.byteLength;case Jr:return o*e*2/u.components*u.byteLength;case Jp:return o*e*2/u.components*u.byteLength;case ux:return o*e*3/u.components*u.byteLength;case Bi:return o*e*4/u.components*u.byteLength;case jp:return o*e*4/u.components*u.byteLength;case vc:case Sc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case xc:case Mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ip:case rp:return Math.max(o,16)*Math.max(e,8)/4;case np:case ap:return Math.max(o,8)*Math.max(e,8)/2;case sp:case op:case up:case cp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case lp:case Ec:case fp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case dp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case hp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case pp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case mp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case gp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case _p:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case vp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case xp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case yp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Ep:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Tp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case bp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Ap:case Rp:case Cp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case wp:case Dp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Tc:case Up:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ib(o){switch(o){case hi:case ax:return{byteLength:1,components:1};case _l:case rx:case la:return{byteLength:2,components:1};case Zp:case Kp:return{byteLength:2,components:4};case oa:case Yp:case aa:return{byteLength:4,components:1};case sx:case ox:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qp}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qp);function Rx(){let o=null,e=!1,i=null,s=null;function u(f,d){s=o.requestAnimationFrame(u),i(f,d)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(u),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function ab(o){const e=new WeakMap;function i(h,g){const m=h.array,S=h.usage,v=m.byteLength,_=o.createBuffer();o.bindBuffer(g,_),o.bufferData(g,m,S),h.onUploadCallback();let T;if(m instanceof Float32Array)T=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)T=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?T=o.HALF_FLOAT:T=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)T=o.SHORT;else if(m instanceof Uint32Array)T=o.UNSIGNED_INT;else if(m instanceof Int32Array)T=o.INT;else if(m instanceof Int8Array)T=o.BYTE;else if(m instanceof Uint8Array)T=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)T=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:T,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,g,m){const S=g.array,v=g.updateRanges;if(o.bindBuffer(m,h),v.length===0)o.bufferSubData(m,0,S);else{v.sort((T,R)=>T.start-R.start);let _=0;for(let T=1;T<v.length;T++){const R=v[_],O=v[T];O.start<=R.start+R.count+1?R.count=Math.max(R.count,O.start+O.count-R.start):(++_,v[_]=O)}v.length=_+1;for(let T=0,R=v.length;T<R;T++){const O=v[T];o.bufferSubData(m,O.start*S.BYTES_PER_ELEMENT,S,O.start,O.count)}g.clearUpdateRanges()}g.onUploadCallback()}function u(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const g=e.get(h);g&&(o.deleteBuffer(g.buffer),e.delete(h))}function d(h,g){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=e.get(h);(!S||S.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,g));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,g),m.version=h.version}}return{get:u,remove:f,update:d}}var rb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sb=`#ifdef USE_ALPHAHASH
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
#endif`,ob=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ub=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fb=`#ifdef USE_AOMAP
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
#endif`,db=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hb=`#ifdef USE_BATCHING
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
#endif`,pb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_b=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vb=`#ifdef USE_IRIDESCENCE
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
#endif`,Sb=`#ifdef USE_BUMPMAP
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
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ab=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Cb=`#define PI 3.141592653589793
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
} // validated`,wb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Db=`vec3 transformedNormal = objectNormal;
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
#endif`,Ub=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ob=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ib=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zb=`#ifdef USE_ENVMAP
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
#endif`,Bb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
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
#endif`,Hb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gb=`#ifdef USE_ENVMAP
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
#endif`,Vb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qb=`#ifdef USE_GRADIENTMAP
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
}`,Yb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Jb=`#ifdef USE_ENVMAP
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
#endif`,jb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n1=`PhysicalMaterial material;
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
#endif`,i1=`uniform sampler2D dfgLUT;
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
}`,a1=`
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
#endif`,r1=`#if defined( RE_IndirectDiffuse )
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
#endif`,s1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,l1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m1=`#if defined( USE_POINTS_UV )
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
#endif`,g1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M1=`#ifdef USE_MORPHTARGETS
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
#endif`,y1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,C1=`#ifdef USE_NORMALMAP
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
#endif`,w1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,P1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,k1=`float getShadowMask() {
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
}`,W1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q1=`#ifdef USE_SKINNING
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
#endif`,Y1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z1=`#ifdef USE_SKINNING
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
#endif`,K1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$1=`#ifdef USE_TRANSMISSION
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
#endif`,tA=`#ifdef USE_TRANSMISSION
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
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sA=`uniform sampler2D t2D;
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
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fA=`#include <common>
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
}`,dA=`#if DEPTH_PACKING == 3200
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
}`,hA=`#define DISTANCE
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
}`,pA=`#define DISTANCE
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
}`,mA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_A=`uniform float scale;
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
}`,vA=`uniform vec3 diffuse;
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
}`,SA=`#include <common>
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
}`,xA=`uniform vec3 diffuse;
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
}`,MA=`#define LAMBERT
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
}`,yA=`#define LAMBERT
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
}`,EA=`#define MATCAP
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
}`,TA=`#define MATCAP
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
}`,bA=`#define NORMAL
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
}`,AA=`#define NORMAL
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
}`,RA=`#define PHONG
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
}`,CA=`#define PHONG
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
}`,wA=`#define STANDARD
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
}`,DA=`#define STANDARD
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
}`,UA=`#define TOON
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
}`,NA=`#define TOON
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
}`,LA=`uniform float size;
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
}`,OA=`uniform vec3 diffuse;
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
}`,PA=`#include <common>
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
}`,IA=`uniform vec3 color;
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
}`,zA=`uniform float rotation;
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
}`,BA=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:rb,alphahash_pars_fragment:sb,alphamap_fragment:ob,alphamap_pars_fragment:lb,alphatest_fragment:ub,alphatest_pars_fragment:cb,aomap_fragment:fb,aomap_pars_fragment:db,batching_pars_vertex:hb,batching_vertex:pb,begin_vertex:mb,beginnormal_vertex:gb,bsdfs:_b,iridescence_fragment:vb,bumpmap_pars_fragment:Sb,clipping_planes_fragment:xb,clipping_planes_pars_fragment:Mb,clipping_planes_pars_vertex:yb,clipping_planes_vertex:Eb,color_fragment:Tb,color_pars_fragment:bb,color_pars_vertex:Ab,color_vertex:Rb,common:Cb,cube_uv_reflection_fragment:wb,defaultnormal_vertex:Db,displacementmap_pars_vertex:Ub,displacementmap_vertex:Nb,emissivemap_fragment:Lb,emissivemap_pars_fragment:Ob,colorspace_fragment:Pb,colorspace_pars_fragment:Ib,envmap_fragment:zb,envmap_common_pars_fragment:Bb,envmap_pars_fragment:Fb,envmap_pars_vertex:Hb,envmap_physical_pars_fragment:Jb,envmap_vertex:Gb,fog_vertex:Vb,fog_pars_vertex:Xb,fog_fragment:kb,fog_pars_fragment:Wb,gradientmap_pars_fragment:qb,lightmap_pars_fragment:Yb,lights_lambert_fragment:Zb,lights_lambert_pars_fragment:Kb,lights_pars_begin:Qb,lights_toon_fragment:jb,lights_toon_pars_fragment:$b,lights_phong_fragment:t1,lights_phong_pars_fragment:e1,lights_physical_fragment:n1,lights_physical_pars_fragment:i1,lights_fragment_begin:a1,lights_fragment_maps:r1,lights_fragment_end:s1,lightprobes_pars_fragment:o1,logdepthbuf_fragment:l1,logdepthbuf_pars_fragment:u1,logdepthbuf_pars_vertex:c1,logdepthbuf_vertex:f1,map_fragment:d1,map_pars_fragment:h1,map_particle_fragment:p1,map_particle_pars_fragment:m1,metalnessmap_fragment:g1,metalnessmap_pars_fragment:_1,morphinstance_vertex:v1,morphcolor_vertex:S1,morphnormal_vertex:x1,morphtarget_pars_vertex:M1,morphtarget_vertex:y1,normal_fragment_begin:E1,normal_fragment_maps:T1,normal_pars_fragment:b1,normal_pars_vertex:A1,normal_vertex:R1,normalmap_pars_fragment:C1,clearcoat_normal_fragment_begin:w1,clearcoat_normal_fragment_maps:D1,clearcoat_pars_fragment:U1,iridescence_pars_fragment:N1,opaque_fragment:L1,packing:O1,premultiplied_alpha_fragment:P1,project_vertex:I1,dithering_fragment:z1,dithering_pars_fragment:B1,roughnessmap_fragment:F1,roughnessmap_pars_fragment:H1,shadowmap_pars_fragment:G1,shadowmap_pars_vertex:V1,shadowmap_vertex:X1,shadowmask_pars_fragment:k1,skinbase_vertex:W1,skinning_pars_vertex:q1,skinning_vertex:Y1,skinnormal_vertex:Z1,specularmap_fragment:K1,specularmap_pars_fragment:Q1,tonemapping_fragment:J1,tonemapping_pars_fragment:j1,transmission_fragment:$1,transmission_pars_fragment:tA,uv_pars_fragment:eA,uv_pars_vertex:nA,uv_vertex:iA,worldpos_vertex:aA,background_vert:rA,background_frag:sA,backgroundCube_vert:oA,backgroundCube_frag:lA,cube_vert:uA,cube_frag:cA,depth_vert:fA,depth_frag:dA,distance_vert:hA,distance_frag:pA,equirect_vert:mA,equirect_frag:gA,linedashed_vert:_A,linedashed_frag:vA,meshbasic_vert:SA,meshbasic_frag:xA,meshlambert_vert:MA,meshlambert_frag:yA,meshmatcap_vert:EA,meshmatcap_frag:TA,meshnormal_vert:bA,meshnormal_frag:AA,meshphong_vert:RA,meshphong_frag:CA,meshphysical_vert:wA,meshphysical_frag:DA,meshtoon_vert:UA,meshtoon_frag:NA,points_vert:LA,points_frag:OA,shadow_vert:PA,shadow_frag:IA,sprite_vert:zA,sprite_frag:BA},Ht={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new at},probesMax:{value:new at},probesResolution:{value:new at}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},ia={basic:{uniforms:kn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:kn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:kn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:kn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:kn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Oe(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:kn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:kn([Ht.points,Ht.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:kn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:kn([Ht.common,Ht.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:kn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:kn([Ht.sprite,Ht.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:kn([Ht.common,Ht.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:kn([Ht.lights,Ht.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};ia.physical={uniforms:kn([ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const pc={r:0,b:0,g:0},FA=new en,Cx=new he;Cx.set(-1,0,0,0,1,0,0,0,1);function HA(o,e,i,s,u,f){const d=new Oe(0);let h=u===!0?0:1,g,m,S=null,v=0,_=null;function T(w){let H=w.isScene===!0?w.background:null;if(H&&H.isTexture){const C=w.backgroundBlurriness>0;H=e.get(H,C)}return H}function R(w){let H=!1;const C=T(w);C===null?M(d,h):C&&C.isColor&&(M(C,1),H=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,f):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||H)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function O(w,H){const C=T(H);C&&(C.isCubeTexture||C.mapping===Dc)?(m===void 0&&(m=new pi(new Tl(1,1,1),new ca({name:"BackgroundCubeMaterial",uniforms:so(ia.backgroundCube.uniforms),vertexShader:ia.backgroundCube.vertexShader,fragmentShader:ia.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(FA.makeRotationFromEuler(H.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Cx),m.material.toneMapped=Ue.getTransfer(C.colorSpace)!==Ye,(S!==C||v!==C.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,S=C,v=C.version,_=o.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(g===void 0&&(g=new pi(new oo(2,2),new ca({name:"BackgroundMaterial",uniforms:so(ia.background.uniforms),vertexShader:ia.background.vertexShader,fragmentShader:ia.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=C,g.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,g.material.toneMapped=Ue.getTransfer(C.colorSpace)!==Ye,C.matrixAutoUpdate===!0&&C.updateMatrix(),g.material.uniforms.uvTransform.value.copy(C.matrix),(S!==C||v!==C.version||_!==o.toneMapping)&&(g.material.needsUpdate=!0,S=C,v=C.version,_=o.toneMapping),g.layers.enableAll(),w.unshift(g,g.geometry,g.material,0,0,null))}function M(w,H){w.getRGB(pc,Mx(o)),i.buffers.color.setClear(pc.r,pc.g,pc.b,H,f)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(w,H=1){d.set(w),h=H,M(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,M(d,h)},render:R,addToRenderList:O,dispose:x}}function GA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=_(null);let f=u,d=!1;function h(z,G,Y,V,Q){let X=!1;const W=v(z,V,Y,G);f!==W&&(f=W,m(f.object)),X=T(z,V,Y,Q),X&&R(z,V,Y,Q),Q!==null&&e.update(Q,o.ELEMENT_ARRAY_BUFFER),(X||d)&&(d=!1,C(z,G,Y,V),Q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function g(){return o.createVertexArray()}function m(z){return o.bindVertexArray(z)}function S(z){return o.deleteVertexArray(z)}function v(z,G,Y,V){const Q=V.wireframe===!0;let X=s[G.id];X===void 0&&(X={},s[G.id]=X);const W=z.isInstancedMesh===!0?z.id:0;let nt=X[W];nt===void 0&&(nt={},X[W]=nt);let it=nt[Y.id];it===void 0&&(it={},nt[Y.id]=it);let ht=it[Q];return ht===void 0&&(ht=_(g()),it[Q]=ht),ht}function _(z){const G=[],Y=[],V=[];for(let Q=0;Q<i;Q++)G[Q]=0,Y[Q]=0,V[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:V,object:z,attributes:{},index:null}}function T(z,G,Y,V){const Q=f.attributes,X=G.attributes;let W=0;const nt=Y.getAttributes();for(const it in nt)if(nt[it].location>=0){const vt=Q[it];let kt=X[it];if(kt===void 0&&(it==="instanceMatrix"&&z.instanceMatrix&&(kt=z.instanceMatrix),it==="instanceColor"&&z.instanceColor&&(kt=z.instanceColor)),vt===void 0||vt.attribute!==kt||kt&&vt.data!==kt.data)return!0;W++}return f.attributesNum!==W||f.index!==V}function R(z,G,Y,V){const Q={},X=G.attributes;let W=0;const nt=Y.getAttributes();for(const it in nt)if(nt[it].location>=0){let vt=X[it];vt===void 0&&(it==="instanceMatrix"&&z.instanceMatrix&&(vt=z.instanceMatrix),it==="instanceColor"&&z.instanceColor&&(vt=z.instanceColor));const kt={};kt.attribute=vt,vt&&vt.data&&(kt.data=vt.data),Q[it]=kt,W++}f.attributes=Q,f.attributesNum=W,f.index=V}function O(){const z=f.newAttributes;for(let G=0,Y=z.length;G<Y;G++)z[G]=0}function M(z){x(z,0)}function x(z,G){const Y=f.newAttributes,V=f.enabledAttributes,Q=f.attributeDivisors;Y[z]=1,V[z]===0&&(o.enableVertexAttribArray(z),V[z]=1),Q[z]!==G&&(o.vertexAttribDivisor(z,G),Q[z]=G)}function w(){const z=f.newAttributes,G=f.enabledAttributes;for(let Y=0,V=G.length;Y<V;Y++)G[Y]!==z[Y]&&(o.disableVertexAttribArray(Y),G[Y]=0)}function H(z,G,Y,V,Q,X,W){W===!0?o.vertexAttribIPointer(z,G,Y,Q,X):o.vertexAttribPointer(z,G,Y,V,Q,X)}function C(z,G,Y,V){O();const Q=V.attributes,X=Y.getAttributes(),W=G.defaultAttributeValues;for(const nt in X){const it=X[nt];if(it.location>=0){let ht=Q[nt];if(ht===void 0&&(nt==="instanceMatrix"&&z.instanceMatrix&&(ht=z.instanceMatrix),nt==="instanceColor"&&z.instanceColor&&(ht=z.instanceColor)),ht!==void 0){const vt=ht.normalized,kt=ht.itemSize,It=e.get(ht);if(It===void 0)continue;const F=It.buffer,pt=It.type,bt=It.bytesPerElement,Z=pt===o.INT||pt===o.UNSIGNED_INT||ht.gpuType===Yp;if(ht.isInterleavedBufferAttribute){const ct=ht.data,Et=ct.stride,Ct=ht.offset;if(ct.isInstancedInterleavedBuffer){for(let mt=0;mt<it.locationSize;mt++)x(it.location+mt,ct.meshPerAttribute);z.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let mt=0;mt<it.locationSize;mt++)M(it.location+mt);o.bindBuffer(o.ARRAY_BUFFER,F);for(let mt=0;mt<it.locationSize;mt++)H(it.location+mt,kt/it.locationSize,pt,vt,Et*bt,(Ct+kt/it.locationSize*mt)*bt,Z)}else{if(ht.isInstancedBufferAttribute){for(let ct=0;ct<it.locationSize;ct++)x(it.location+ct,ht.meshPerAttribute);z.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ct=0;ct<it.locationSize;ct++)M(it.location+ct);o.bindBuffer(o.ARRAY_BUFFER,F);for(let ct=0;ct<it.locationSize;ct++)H(it.location+ct,kt/it.locationSize,pt,vt,kt*bt,kt/it.locationSize*ct*bt,Z)}}else if(W!==void 0){const vt=W[nt];if(vt!==void 0)switch(vt.length){case 2:o.vertexAttrib2fv(it.location,vt);break;case 3:o.vertexAttrib3fv(it.location,vt);break;case 4:o.vertexAttrib4fv(it.location,vt);break;default:o.vertexAttrib1fv(it.location,vt)}}}}w()}function U(){L();for(const z in s){const G=s[z];for(const Y in G){const V=G[Y];for(const Q in V){const X=V[Q];for(const W in X)S(X[W].object),delete X[W];delete V[Q]}}delete s[z]}}function D(z){if(s[z.id]===void 0)return;const G=s[z.id];for(const Y in G){const V=G[Y];for(const Q in V){const X=V[Q];for(const W in X)S(X[W].object),delete X[W];delete V[Q]}}delete s[z.id]}function I(z){for(const G in s){const Y=s[G];for(const V in Y){const Q=Y[V];if(Q[z.id]===void 0)continue;const X=Q[z.id];for(const W in X)S(X[W].object),delete X[W];delete Q[z.id]}}}function E(z){for(const G in s){const Y=s[G],V=z.isInstancedMesh===!0?z.id:0,Q=Y[V];if(Q!==void 0){for(const X in Q){const W=Q[X];for(const nt in W)S(W[nt].object),delete W[nt];delete Q[X]}delete Y[V],Object.keys(Y).length===0&&delete s[G]}}}function L(){N(),d=!0,f!==u&&(f=u,m(f.object))}function N(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:L,resetDefaultState:N,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:I,initAttributes:O,enableAttribute:M,disableUnusedAttributes:w}}function VA(o,e,i){let s;function u(g){s=g}function f(g,m){o.drawArrays(s,g,m),i.update(m,s,1)}function d(g,m,S){S!==0&&(o.drawArraysInstanced(s,g,m,S),i.update(m,s,S))}function h(g,m,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,m,0,S);let _=0;for(let T=0;T<S;T++)_+=m[T];i.update(_,s,1)}this.setMode=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function XA(o,e,i,s){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function d(I){return!(I!==Bi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const E=I===la&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==hi&&I!==aa&&!E&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function g(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const S=g(m);S!==m&&(oe("WebGLRenderer:",m,"not supported, using",S,"instead."),m=S);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const T=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),O=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),H=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=o.getParameter(o.MAX_SAMPLES),D=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:T,maxVertexTextures:R,maxTextureSize:O,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:w,maxVaryings:H,maxFragmentUniforms:C,maxSamples:U,samples:D}}function kA(o){const e=this;let i=null,s=0,u=!1,f=!1;const d=new vr,h=new he,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const T=v.length!==0||_||s!==0||u;return u=_,s=v.length,T},this.beginShadows=function(){f=!0,S(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(v,_){i=S(v,_,0)},this.setState=function(v,_,T){const R=v.clippingPlanes,O=v.clipIntersection,M=v.clipShadows,x=o.get(v);if(!u||R===null||R.length===0||f&&!M)f?S(null):m();else{const w=f?0:s,H=w*4;let C=x.clippingState||null;g.value=C,C=S(R,_,H,T);for(let U=0;U!==H;++U)C[U]=i[U];x.clippingState=C,this.numIntersection=O?this.numPlanes:0,this.numPlanes+=w}};function m(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(v,_,T,R){const O=v!==null?v.length:0;let M=null;if(O!==0){if(M=g.value,R!==!0||M===null){const x=T+O*4,w=_.matrixWorldInverse;h.getNormalMatrix(w),(M===null||M.length<x)&&(M=new Float32Array(x));for(let H=0,C=T;H!==O;++H,C+=4)d.copy(v[H]).applyMatrix4(w,h),d.normal.toArray(M,C),M[C+3]=d.constant}g.value=M,g.needsUpdate=!0}return e.numPlanes=O,e.numIntersection=0,M}}const to=4,WA=6,qA=20,YA=256,fl=new om,lS=new Oe;let Gh=null,Vh=0,Xh=0,kh=!1;const ZA=new at,Yr=new at;class uS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,u=100,f={}){const{size:d=256,position:h=ZA}=f;Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,s,u,g,h),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gh,Vh,Xh),this._renderer.xr.enabled=kh,e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Qr||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:la,format:Bi,colorSpace:bc,depthBuffer:!1},u=cS(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cS(e,i,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=KA(f)),this._blurMaterial=JA(f,e,i),this._ggxMaterial=QA(f,e,i)}return u}_compileMaterial(e){const i=new pi(new Hi,e);this._renderer.compile(i,fl)}_sceneToCubeUV(e,i,s,u,f){const g=new di(90,1,i,s),m=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,T=v.toneMapping;v.getClearColor(lS),v.toneMapping=sa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(u),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pi(new Tl,new Uc({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const O=this._backgroundBox,M=O.material;let x=!1;const w=e.background;w?w.isColor&&(M.color.copy(w),e.background=null,x=!0):(M.color.copy(lS),x=!0);for(let H=0;H<6;H++){const C=H%3;C===0?(g.up.set(0,m[H],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x+S[H],f.y,f.z)):C===1?(g.up.set(0,0,m[H]),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y+S[H],f.z)):(g.up.set(0,m[H],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y,f.z+S[H]));const U=this._cubeSize;js(u,C*U,H>2?U:0,U,U),v.setRenderTarget(u),x&&v.render(O,g),v.render(e,g)}v.toneMapping=T,v.autoClear=_,e.background=w}_textureToCubeUV(e,i){const s=this._renderer,u=e.mapping===Qr||e.mapping===ro;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=dS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fS());const f=u?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=e;const g=this._cubeSize;js(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(d,fl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const u=this._lodMeshes.length;for(let f=1;f<u;f++)this._applyGGXFilter(e,f-1,f);i.autoClear=s}_applyGGXFilter(e,i,s){const u=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const g=d.uniforms,m=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),v=Math.sqrt(m*m-S*S),_=m*1.25,T=v*_,{_lodMax:R}=this,O=this._sizeLods[s],M=3*O*(s>R-to?s-R+to:0),x=4*(this._cubeSize-O);g.envMap.value=e.texture,g.roughness.value=T,g.mipInt.value=R-i,js(f,M,x,3*O,2*O),u.setRenderTarget(f),u.render(h,fl),g.envMap.value=f.texture,g.roughness.value=0,g.mipInt.value=R-s,js(e,M,x,3*O,2*O),u.setRenderTarget(e),u.render(h,fl)}_blur(e,i,s,u){const f=this._pingPongRenderTarget,d=Math.min(u,Math.PI)/Math.SQRT2;this._blurPass(e,f,i,s,d),this._blurPass(f,e,s,s,d)}_blurPass(e,i,s,u,f){const d=this._renderer,h=this._blurMaterial,g=this._lodMeshes[u];g.material=h;const m=h.uniforms;m.envMap.value=e.texture,m.sigma.value=f,m.mipInt.value=this._lodMax-s;const S=this._sizeLods[u],v=3*S*(u>this._lodMax-to?u-this._lodMax+to:0),_=4*(this._cubeSize-S);js(i,v,_,3*S,2*S),d.setRenderTarget(i),d.render(g,fl)}}function KA(o){const e=[],i=[];let s=o;const u=o-to+1+WA;for(let f=0;f<u;f++){const d=Math.pow(2,s);e.push(d);const h=1/(d-2),g=-h,m=1+h,S=[g,g,m,g,m,m,g,g,m,m,g,m],v=6,_=6,T=3,R=new Float32Array(T*_*v),O=new Float32Array(T*_*v);for(let x=0;x<v;x++){const w=x%3*2/3-1,H=x>2?0:-1,C=[w,H,0,w+2/3,H,0,w+2/3,H+1,0,w,H,0,w+2/3,H+1,0,w,H+1,0];R.set(C,T*_*x);for(let U=0;U<_;U++){const D=S[U*2]*2-1,I=S[U*2+1]*2-1;x===0?Yr.set(1,I,D):x===1?Yr.set(-D,1,-I):x===2?Yr.set(-D,I,1):x===3?Yr.set(-1,I,-D):x===4?Yr.set(-D,-1,I):Yr.set(D,I,-1),Yr.toArray(O,(x*_+U)*T)}}const M=new Hi;M.setAttribute("position",new Pa(R,T)),M.setAttribute("outputDirection",new Pa(O,T)),i.push(new pi(M,null)),s>to&&s--}return{lodMeshes:i,sizeLods:e}}function cS(o,e,i){const s=new Fi(o,e,i);return s.texture.mapping=Dc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function js(o,e,i,s,u){o.viewport.set(e,i,s,u),o.scissor.set(e,i,s,u)}function QA(o,e,i){return new ca({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:YA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function JA(o,e,i){return new ca({name:"SphericalGaussianBlur",defines:{SAMPLES:qA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function fS(){return new ca({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function dS(){return new ca({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function Nc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class wx extends Fi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},u=[s,s,s,s,s,s];this.texture=new vx(u),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new Tl(5,5,5),f=new ca({name:"CubemapFromEquirect",uniforms:so(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:La});f.uniforms.tEquirect.value=i;const d=new pi(u,f),h=i.minFilter;return i.minFilter===Zr&&(i.minFilter=zn),new eb(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,u=!0){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,u);e.setRenderTarget(f)}}function jA(o){let e=new WeakMap,i=new WeakMap,s=null;function u(_,T=!1){return _==null?null:T?d(_):f(_)}function f(_){if(_&&_.isTexture){const T=_.mapping;if(T===ph||T===mh)if(e.has(_)){const R=e.get(_).texture;return h(R,_.mapping)}else{const R=_.image;if(R&&R.height>0){const O=new wx(R.height);return O.fromEquirectangularTexture(o,_),e.set(_,O),_.addEventListener("dispose",m),h(O.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture){const T=_.mapping,R=T===ph||T===mh,O=T===Qr||T===ro;if(R||O){let M=i.get(_);const x=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==x)return s===null&&(s=new uS(o)),M=R?s.fromEquirectangular(_,M):s.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),M.texture;if(M!==void 0)return M.texture;{const w=_.image;return R&&w&&w.height>0||O&&w&&g(w)?(s===null&&(s=new uS(o)),M=R?s.fromEquirectangular(_):s.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),_.addEventListener("dispose",S),M.texture):null}}}return _}function h(_,T){return T===ph?_.mapping=Qr:T===mh&&(_.mapping=ro),_}function g(_){let T=0;const R=6;for(let O=0;O<R;O++)_[O]!==void 0&&T++;return T===R}function m(_){const T=_.target;T.removeEventListener("dispose",m);const R=e.get(T);R!==void 0&&(e.delete(T),R.dispose())}function S(_){const T=_.target;T.removeEventListener("dispose",S);const R=i.get(T);R!==void 0&&(i.delete(T),R.dispose())}function v(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:u,dispose:v}}function $A(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const u=o.getExtension(s);return e[s]=u,u}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const u=i(s);return u===null&&eo("WebGLRenderer: "+s+" extension not supported."),u}}}function tR(o,e,i,s){const u={},f=new WeakMap;function d(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const R in _.attributes)e.remove(_.attributes[R]);_.removeEventListener("dispose",d),delete u[_.id];const T=f.get(_);T&&(e.remove(T),f.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(v,_){return u[_.id]===!0||(_.addEventListener("dispose",d),u[_.id]=!0,i.memory.geometries++),_}function g(v){const _=v.attributes;for(const T in _)e.update(_[T],o.ARRAY_BUFFER)}function m(v){const _=[],T=v.index,R=v.attributes.position;let O=0;if(R===void 0)return;if(T!==null){const w=T.array;O=T.version;for(let H=0,C=w.length;H<C;H+=3){const U=w[H+0],D=w[H+1],I=w[H+2];_.push(U,D,D,I,I,U)}}else{const w=R.array;O=R.version;for(let H=0,C=w.length/3-1;H<C;H+=3){const U=H+0,D=H+1,I=H+2;_.push(U,D,D,I,I,U)}}const M=new(R.count>=65535?_x:gx)(_,1);M.version=O;const x=f.get(v);x&&e.remove(x),f.set(v,M)}function S(v){const _=f.get(v);if(_){const T=v.index;T!==null&&_.version<T.version&&m(v)}else m(v);return f.get(v)}return{get:h,update:g,getWireframeAttribute:S}}function eR(o,e,i){let s;function u(v){s=v}let f,d;function h(v){f=v.type,d=v.bytesPerElement}function g(v,_){o.drawElements(s,_,f,v*d),i.update(_,s,1)}function m(v,_,T){T!==0&&(o.drawElementsInstanced(s,_,f,v*d,T),i.update(_,s,T))}function S(v,_,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,f,v,0,T);let O=0;for(let M=0;M<T;M++)O+=_[M];i.update(O,s,1)}this.setMode=u,this.setIndex=h,this.render=g,this.renderInstances=m,this.renderMultiDraw=S}function nR(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:ze("WebGLInfo: Unknown draw mode:",d);break}}function u(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:u,update:s}}function iR(o,e,i){const s=new WeakMap,u=new rn;function f(d,h,g){const m=d.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=S!==void 0?S.length:0;let _=s.get(h);if(_===void 0||_.count!==v){let N=function(){E.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var T=N;_!==void 0&&_.texture.dispose();const R=h.morphAttributes.position!==void 0,O=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],H=h.morphAttributes.color||[];let C=0;R===!0&&(C=1),O===!0&&(C=2),M===!0&&(C=3);let U=h.attributes.position.count*C,D=1;U>e.maxTextureSize&&(D=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const I=new Float32Array(U*D*4*v),E=new dx(I,U,D,v);E.type=aa,E.needsUpdate=!0;const L=C*4;for(let z=0;z<v;z++){const G=x[z],Y=w[z],V=H[z],Q=U*D*4*z;for(let X=0;X<G.count;X++){const W=X*L;R===!0&&(u.fromBufferAttribute(G,X),I[Q+W+0]=u.x,I[Q+W+1]=u.y,I[Q+W+2]=u.z,I[Q+W+3]=0),O===!0&&(u.fromBufferAttribute(Y,X),I[Q+W+4]=u.x,I[Q+W+5]=u.y,I[Q+W+6]=u.z,I[Q+W+7]=0),M===!0&&(u.fromBufferAttribute(V,X),I[Q+W+8]=u.x,I[Q+W+9]=u.y,I[Q+W+10]=u.z,I[Q+W+11]=V.itemSize===4?u.w:1)}}_={count:v,texture:E,size:new Te(U,D)},s.set(h,_),h.addEventListener("dispose",N)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let M=0;M<m.length;M++)R+=m[M];const O=h.morphTargetsRelative?1:1-R;g.getUniforms().setValue(o,"morphTargetBaseInfluence",O),g.getUniforms().setValue(o,"morphTargetInfluences",m)}g.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:f}}function aR(o,e,i,s,u){let f=new WeakMap;function d(m){const S=u.render.frame,v=m.geometry,_=e.get(m,v);if(f.get(_)!==S&&(e.update(_),f.set(_,S)),m.isInstancedMesh&&(m.hasEventListener("dispose",g)===!1&&m.addEventListener("dispose",g),f.get(m)!==S&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),f.set(m,S))),m.isSkinnedMesh){const T=m.skeleton;f.get(T)!==S&&(T.update(),f.set(T,S))}return _}function h(){f=new WeakMap}function g(m){const S=m.target;S.removeEventListener("dispose",g),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:h}}const rR={[QS]:"LINEAR_TONE_MAPPING",[JS]:"REINHARD_TONE_MAPPING",[jS]:"CINEON_TONE_MAPPING",[$S]:"ACES_FILMIC_TONE_MAPPING",[ex]:"AGX_TONE_MAPPING",[nx]:"NEUTRAL_TONE_MAPPING",[tx]:"CUSTOM_TONE_MAPPING"};function sR(o,e,i,s,u,f){const d=new Fi(e,i,{type:o,depthBuffer:u,stencilBuffer:f,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,g=null;const m=new Hi;m.setAttribute("position",new $n([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new $n([0,2,0,0,2,0],2));const S=new QT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new pi(m,S),_=new om(-1,1,1,-1,0,1);let T=null,R=null,O=!1,M,x=null,w=[],H=!1;this.setSize=function(C,U){d.setSize(C,U),h!==null&&h.setSize(C,U),g!==null&&g.setSize(C,U);for(let D=0;D<w.length;D++){const I=w[D];I.setSize&&I.setSize(C,U)}},this.setEffects=function(C){w=C,H=w.length>0&&w[0].isRenderPass===!0;const U=d.width,D=d.height;w.length>0&&h===null&&(h=new Fi(U,D,{type:la,depthBuffer:!1,stencilBuffer:!1}),g=new Fi(U,D,{type:la,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<w.length;I++){const E=w[I];E.setSize&&E.setSize(U,D)}},this.begin=function(C,U){if(O||C.toneMapping===sa&&w.length===0)return!1;if(x=U,U!==null){const D=U.width,I=U.height;(d.width!==D||d.height!==I)&&this.setSize(D,I)}return H===!1&&C.setRenderTarget(d),M=C.toneMapping,C.toneMapping=sa,!0},this.hasRenderPass=function(){return H},this.end=function(C,U){C.toneMapping=M,O=!0;let D=d,I=h;for(let E=0;E<w.length;E++){const L=w[E];L.enabled!==!1&&(L.render(C,I,D,U),L.needsSwap!==!1&&(D=I,I=I===h?g:h))}if(T!==C.outputColorSpace||R!==C.toneMapping){T=C.outputColorSpace,R=C.toneMapping,S.defines={},Ue.getTransfer(T)===Ye&&(S.defines.SRGB_TRANSFER="");const E=rR[R];E&&(S.defines[E]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(x),C.render(v,_),x=null,O=!1},this.isCompositing=function(){return O},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),g!==null&&g.dispose(),m.dispose(),S.dispose()}}const Dx=new Bn,Op=new xl(1,1),Ux=new dx,Nx=new RT,Lx=new vx,hS=[],pS=[],mS=new Float32Array(16),gS=new Float32Array(9),_S=new Float32Array(4);function lo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const u=e*i;let f=hS[u];if(f===void 0&&(f=new Float32Array(u),hS[u]=f),e!==0){s.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(f,h)}return f}function xn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Mn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Lc(o,e){let i=pS[e];i===void 0&&(i=new Int32Array(e),pS[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function oR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function lR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2fv(this.addr,e),Mn(i,e)}}function uR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;o.uniform3fv(this.addr,e),Mn(i,e)}}function cR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4fv(this.addr,e),Mn(i,e)}}function fR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(xn(i,s))return;_S.set(s),o.uniformMatrix2fv(this.addr,!1,_S),Mn(i,s)}}function dR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(xn(i,s))return;gS.set(s),o.uniformMatrix3fv(this.addr,!1,gS),Mn(i,s)}}function hR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(xn(i,s))return;mS.set(s),o.uniformMatrix4fv(this.addr,!1,mS),Mn(i,s)}}function pR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function mR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2iv(this.addr,e),Mn(i,e)}}function gR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3iv(this.addr,e),Mn(i,e)}}function _R(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4iv(this.addr,e),Mn(i,e)}}function vR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function SR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2uiv(this.addr,e),Mn(i,e)}}function xR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3uiv(this.addr,e),Mn(i,e)}}function MR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4uiv(this.addr,e),Mn(i,e)}}function yR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(Op.compareFunction=i.isReversedDepthBuffer()?tm:$p,f=Op):f=Dx,i.setTexture2D(e||f,u)}function ER(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture3D(e||Nx,u)}function TR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTextureCube(e||Lx,u)}function bR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture2DArray(e||Ux,u)}function AR(o){switch(o){case 5126:return oR;case 35664:return lR;case 35665:return uR;case 35666:return cR;case 35674:return fR;case 35675:return dR;case 35676:return hR;case 5124:case 35670:return pR;case 35667:case 35671:return mR;case 35668:case 35672:return gR;case 35669:case 35673:return _R;case 5125:return vR;case 36294:return SR;case 36295:return xR;case 36296:return MR;case 35678:case 36198:case 36298:case 36306:case 35682:return yR;case 35679:case 36299:case 36307:return ER;case 35680:case 36300:case 36308:case 36293:return TR;case 36289:case 36303:case 36311:case 36292:return bR}}function RR(o,e){o.uniform1fv(this.addr,e)}function CR(o,e){const i=lo(e,this.size,2);o.uniform2fv(this.addr,i)}function wR(o,e){const i=lo(e,this.size,3);o.uniform3fv(this.addr,i)}function DR(o,e){const i=lo(e,this.size,4);o.uniform4fv(this.addr,i)}function UR(o,e){const i=lo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function NR(o,e){const i=lo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function LR(o,e){const i=lo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function OR(o,e){o.uniform1iv(this.addr,e)}function PR(o,e){o.uniform2iv(this.addr,e)}function IR(o,e){o.uniform3iv(this.addr,e)}function zR(o,e){o.uniform4iv(this.addr,e)}function BR(o,e){o.uniform1uiv(this.addr,e)}function FR(o,e){o.uniform2uiv(this.addr,e)}function HR(o,e){o.uniform3uiv(this.addr,e)}function GR(o,e){o.uniform4uiv(this.addr,e)}function VR(o,e,i){const s=this.cache,u=e.length,f=Lc(i,u);xn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=Op:d=Dx;for(let h=0;h!==u;++h)i.setTexture2D(e[h]||d,f[h])}function XR(o,e,i){const s=this.cache,u=e.length,f=Lc(i,u);xn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));for(let d=0;d!==u;++d)i.setTexture3D(e[d]||Nx,f[d])}function kR(o,e,i){const s=this.cache,u=e.length,f=Lc(i,u);xn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));for(let d=0;d!==u;++d)i.setTextureCube(e[d]||Lx,f[d])}function WR(o,e,i){const s=this.cache,u=e.length,f=Lc(i,u);xn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));for(let d=0;d!==u;++d)i.setTexture2DArray(e[d]||Ux,f[d])}function qR(o){switch(o){case 5126:return RR;case 35664:return CR;case 35665:return wR;case 35666:return DR;case 35674:return UR;case 35675:return NR;case 35676:return LR;case 5124:case 35670:return OR;case 35667:case 35671:return PR;case 35668:case 35672:return IR;case 35669:case 35673:return zR;case 5125:return BR;case 36294:return FR;case 36295:return HR;case 36296:return GR;case 35678:case 36198:case 36298:case 36306:case 35682:return VR;case 35679:case 36299:case 36307:return XR;case 35680:case 36300:case 36308:case 36293:return kR;case 36289:case 36303:case 36311:case 36292:return WR}}class YR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=AR(i.type)}}class ZR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=qR(i.type)}}class KR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const u=this.seq;for(let f=0,d=u.length;f!==d;++f){const h=u[f];h.setValue(e,i[h.id],s)}}}const Wh=/(\w+)(\])?(\[|\.)?/g;function vS(o,e){o.seq.push(e),o.map[e.id]=e}function QR(o,e,i){const s=o.name,u=s.length;for(Wh.lastIndex=0;;){const f=Wh.exec(s),d=Wh.lastIndex;let h=f[1];const g=f[2]==="]",m=f[3];if(g&&(h=h|0),m===void 0||m==="["&&d+2===u){vS(i,m===void 0?new YR(h,o,e):new ZR(h,o,e));break}else{let v=i.map[h];v===void 0&&(v=new KR(h),vS(i,v)),i=v}}}class yc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),g=e.getUniformLocation(i,h.name);QR(h,g,this)}const u=[],f=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?u.push(d):f.push(d);u.length>0&&(this.seq=u.concat(f))}setValue(e,i,s,u){const f=this.map[i];f!==void 0&&f.setValue(e,s,u)}setOptional(e,i,s){const u=i[s];u!==void 0&&this.setValue(e,s,u)}static upload(e,i,s,u){for(let f=0,d=i.length;f!==d;++f){const h=i[f],g=s[h.id];g.needsUpdate!==!1&&h.setValue(e,g.value,u)}}static seqWithValue(e,i){const s=[];for(let u=0,f=e.length;u!==f;++u){const d=e[u];d.id in i&&s.push(d)}return s}}function SS(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const JR=37297;let jR=0;function $R(o,e){const i=o.split(`
`),s=[],u=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let d=u;d<f;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const xS=new he;function tC(o){Ue._getMatrix(xS,Ue.workingColorSpace,o);const e=`mat3( ${xS.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(o)){case Ac:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function MS(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+$R(o.getShaderSource(e),h)}else return f}function eC(o,e){const i=tC(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const nC={[QS]:"Linear",[JS]:"Reinhard",[jS]:"Cineon",[$S]:"ACESFilmic",[ex]:"AgX",[nx]:"Neutral",[tx]:"Custom"};function iC(o,e){const i=nC[e];return i===void 0?(oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const mc=new at;function aC(){Ue.getLuminanceCoefficients(mc);const o=mc.x.toFixed(4),e=mc.y.toFixed(4),i=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pl).join(`
`)}function sC(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function oC(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(e,u),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function pl(o){return o!==""}function yS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ES(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pp(o){return o.replace(lC,cC)}const uC=new Map;function cC(o,e){let i=_e[e];if(i===void 0){const s=uC.get(e);if(s!==void 0)i=_e[s],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Pp(i)}const fC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function TS(o){return o.replace(fC,dC)}function dC(o,e,i,s){let u="";for(let f=parseInt(e);f<parseInt(i);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function bS(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const hC={[_c]:"SHADOWMAP_TYPE_PCF",[hl]:"SHADOWMAP_TYPE_VSM"};function pC(o){return hC[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mC={[Qr]:"ENVMAP_TYPE_CUBE",[ro]:"ENVMAP_TYPE_CUBE",[Dc]:"ENVMAP_TYPE_CUBE_UV"};function gC(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":mC[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const _C={[ro]:"ENVMAP_MODE_REFRACTION"};function vC(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":_C[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const SC={[KS]:"ENVMAP_BLENDING_MULTIPLY",[aT]:"ENVMAP_BLENDING_MIX",[rT]:"ENVMAP_BLENDING_ADD"};function xC(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":SC[o.combine]||"ENVMAP_BLENDING_NONE"}function MC(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function yC(o,e,i,s){const u=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const g=pC(i),m=gC(i),S=vC(i),v=xC(i),_=MC(i),T=rC(i),R=sC(f),O=u.createProgram();let M,x,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(pl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(pl).join(`
`),x.length>0&&(x+=`
`)):(M=[bS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pl).join(`
`),x=[bS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+S:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==sa?"#define TONE_MAPPING":"",i.toneMapping!==sa?_e.tonemapping_pars_fragment:"",i.toneMapping!==sa?iC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,eC("linearToOutputTexel",i.outputColorSpace),aC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(pl).join(`
`)),d=Pp(d),d=yS(d,i),d=ES(d,i),h=Pp(h),h=yS(h,i),h=ES(h,i),d=TS(d),h=TS(h),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===Bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const H=w+M+d,C=w+x+h,U=SS(u,u.VERTEX_SHADER,H),D=SS(u,u.FRAGMENT_SHADER,C);u.attachShader(O,U),u.attachShader(O,D),i.index0AttributeName!==void 0?u.bindAttribLocation(O,0,i.index0AttributeName):i.hasPositionAttribute===!0&&u.bindAttribLocation(O,0,"position"),u.linkProgram(O);function I(z){if(o.debug.checkShaderErrors){const G=u.getProgramInfoLog(O)||"",Y=u.getShaderInfoLog(U)||"",V=u.getShaderInfoLog(D)||"",Q=G.trim(),X=Y.trim(),W=V.trim();let nt=!0,it=!0;if(u.getProgramParameter(O,u.LINK_STATUS)===!1)if(nt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,O,U,D);else{const ht=MS(u,U,"vertex"),vt=MS(u,D,"fragment");ze("WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(O,u.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Q+`
`+ht+`
`+vt)}else Q!==""?oe("WebGLProgram: Program Info Log:",Q):(X===""||W==="")&&(it=!1);it&&(z.diagnostics={runnable:nt,programLog:Q,vertexShader:{log:X,prefix:M},fragmentShader:{log:W,prefix:x}})}u.deleteShader(U),u.deleteShader(D),E=new yc(u,O),L=oC(u,O)}let E;this.getUniforms=function(){return E===void 0&&I(this),E};let L;this.getAttributes=function(){return L===void 0&&I(this),L};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=u.getProgramParameter(O,JR)),N},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(O),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=jR++,this.cacheKey=e,this.usedTimes=1,this.program=O,this.vertexShader=U,this.fragmentShader=D,this}let EC=0;class TC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const u=this._getShaderCacheForMaterial(e);return u.has(i)===!1&&(u.add(i),i.usedTimes++),u.has(s)===!1&&(u.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new bC(e),i.set(e,s)),s}}class bC{constructor(e){this.id=EC++,this.code=e,this.usedTimes=0}}function AC(o){return o===Jr||o===Ec||o===Tc}function RC(o,e,i,s,u,f){const d=new hx,h=new TC,g=new Set,m=[],S=new Map,v=s.logarithmicDepthBuffer;let _=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(E){return g.add(E),E===0?"uv":`uv${E}`}function O(E,L,N,z,G,Y){const V=z.fog,Q=G.geometry,X=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,W=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,nt=e.get(E.envMap||X,W),it=nt&&nt.mapping===Dc?nt.image.height:null,ht=T[E.type];E.precision!==null&&(_=s.getMaxPrecision(E.precision),_!==E.precision&&oe("WebGLProgram.getParameters:",E.precision,"not supported, using",_,"instead."));const vt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,kt=vt!==void 0?vt.length:0;let It=0;Q.morphAttributes.position!==void 0&&(It=1),Q.morphAttributes.normal!==void 0&&(It=2),Q.morphAttributes.color!==void 0&&(It=3);let F,pt,bt,Z;if(ht){const we=ia[ht];F=we.vertexShader,pt=we.fragmentShader}else{F=E.vertexShader,pt=E.fragmentShader;const we=h.getVertexShaderStage(E),fe=h.getFragmentShaderStage(E);h.update(E,we,fe),bt=we.id,Z=fe.id}const ct=o.getRenderTarget(),Et=o.state.buffers.depth.getReversed(),Ct=G.isInstancedMesh===!0,mt=G.isBatchedMesh===!0,At=!!E.map,be=!!E.matcap,le=!!nt,pe=!!E.aoMap,ce=!!E.lightMap,jt=!!E.bumpMap&&E.wireframe===!1,ne=!!E.normalMap,Be=!!E.displacementMap,sn=!!E.emissiveMap,Pe=!!E.metalnessMap,Ge=!!E.roughnessMap,K=E.anisotropy>0,nn=E.clearcoat>0,Ie=E.dispersion>0,P=E.retroreflectivity>0,y=E.iridescence>0,et=E.sheen>0,ut=E.transmission>0,gt=K&&!!E.anisotropyMap,Rt=nn&&!!E.clearcoatMap,Ut=nn&&!!E.clearcoatNormalMap,_t=nn&&!!E.clearcoatRoughnessMap,yt=y&&!!E.iridescenceMap,Dt=y&&!!E.iridescenceThicknessMap,$t=et&&!!E.sheenColorMap,zt=et&&!!E.sheenRoughnessMap,Pt=!!E.specularMap,Xt=!!E.specularColorMap,ie=!!E.specularIntensityMap,ue=ut&&!!E.transmissionMap,J=ut&&!!E.thicknessMap,wt=!!E.gradientMap,Mt=!!E.alphaMap,Nt=E.alphaTest>0,Vt=!!E.alphaHash,Tt=!!E.extensions;let Jt=sa;E.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Jt=o.toneMapping);const Gt={shaderID:ht,shaderType:E.type,shaderName:E.name,vertexShader:F,fragmentShader:pt,defines:E.defines,customVertexShaderID:bt,customFragmentShaderID:Z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:_,batching:mt,batchingColor:mt&&G._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&G.instanceColor!==null,instancingMorph:Ct&&G.morphTexture!==null,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Ue.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:At,matcap:be,envMap:le,envMapMode:le&&nt.mapping,envMapCubeUVHeight:it,aoMap:pe,lightMap:ce,bumpMap:jt,normalMap:ne,displacementMap:Be,emissiveMap:sn,normalMapObjectSpace:ne&&E.normalMapType===lT,normalMapTangentSpace:ne&&E.normalMapType===Np,packedNormalMap:ne&&E.normalMapType===Np&&AC(E.normalMap.format),metalnessMap:Pe,roughnessMap:Ge,anisotropy:K,anisotropyMap:gt,clearcoat:nn,clearcoatMap:Rt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:_t,dispersion:Ie,retroreflection:P,iridescence:y,iridescenceMap:yt,iridescenceThicknessMap:Dt,sheen:et,sheenColorMap:$t,sheenRoughnessMap:zt,specularMap:Pt,specularColorMap:Xt,specularIntensityMap:ie,transmission:ut,transmissionMap:ue,thicknessMap:J,gradientMap:wt,opaque:E.transparent===!1&&E.blending===ml&&E.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Nt,alphaHash:Vt,combine:E.combine,mapUv:At&&R(E.map.channel),aoMapUv:pe&&R(E.aoMap.channel),lightMapUv:ce&&R(E.lightMap.channel),bumpMapUv:jt&&R(E.bumpMap.channel),normalMapUv:ne&&R(E.normalMap.channel),displacementMapUv:Be&&R(E.displacementMap.channel),emissiveMapUv:sn&&R(E.emissiveMap.channel),metalnessMapUv:Pe&&R(E.metalnessMap.channel),roughnessMapUv:Ge&&R(E.roughnessMap.channel),anisotropyMapUv:gt&&R(E.anisotropyMap.channel),clearcoatMapUv:Rt&&R(E.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&R(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&R(E.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&R(E.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&R(E.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&R(E.sheenColorMap.channel),sheenRoughnessMapUv:zt&&R(E.sheenRoughnessMap.channel),specularMapUv:Pt&&R(E.specularMap.channel),specularColorMapUv:Xt&&R(E.specularColorMap.channel),specularIntensityMapUv:ie&&R(E.specularIntensityMap.channel),transmissionMapUv:ue&&R(E.transmissionMap.channel),thicknessMapUv:J&&R(E.thicknessMap.channel),alphaMapUv:Mt&&R(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ne||K),vertexNormals:!!Q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Q.attributes.uv&&(At||Mt),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Q.attributes.normal===void 0&&ne===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Et,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:kt,morphTextureStride:It,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&N.length>0,shadowMapType:o.shadowMap.type,toneMapping:Jt,decodeVideoTexture:At&&E.map.isVideoTexture===!0&&Ue.getTransfer(E.map.colorSpace)===Ye,decodeVideoTextureEmissive:sn&&E.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(E.emissiveMap.colorSpace)===Ye,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ua,flipSided:E.side===jn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Tt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&E.extensions.multiDraw===!0||mt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Gt.vertexUv1s=g.has(1),Gt.vertexUv2s=g.has(2),Gt.vertexUv3s=g.has(3),g.clear(),Gt}function M(E){const L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)L.push(N),L.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(x(L,E),w(L,E),L.push(o.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function x(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapCubeUVHeight),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.morphAttributeCount),E.push(L.numSunLights),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numSunLightShadows),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function w(E,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.retroreflection&&d.enable(24),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),L.packedNormalMap&&d.enable(22),L.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),L.numLightProbeGrids>0&&d.enable(22),L.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function H(E){const L=T[E.type];let N;if(L){const z=ia[L];N=YT.clone(z.uniforms)}else N=E.uniforms;return N}function C(E,L){let N=S.get(L);return N!==void 0?++N.usedTimes:(N=new yC(o,L,E,u),m.push(N),S.set(L,N)),N}function U(E){if(--E.usedTimes===0){const L=m.indexOf(E);m[L]=m[m.length-1],m.pop(),S.delete(E.cacheKey),E.destroy()}}function D(E){h.remove(E)}function I(){h.dispose()}return{getParameters:O,getProgramCacheKey:M,getUniforms:H,acquireProgram:C,releaseProgram:U,releaseShaderCache:D,programs:m,dispose:I}}function CC(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function u(d,h,g){o.get(d)[h]=g}function f(){o=new WeakMap}return{has:e,get:i,remove:s,update:u,dispose:f}}function wC(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function AS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function RS(){const o=[];let e=0;const i=[],s=[],u=[];function f(){e=0,i.length=0,s.length=0,u.length=0}function d(_){let T=0;return _.isInstancedMesh&&(T+=2),_.isSkinnedMesh&&(T+=1),T}function h(_,T,R,O,M,x){let w=o[e];return w===void 0?(w={id:_.id,object:_,geometry:T,material:R,materialVariant:d(_),groupOrder:O,renderOrder:_.renderOrder,z:M,group:x},o[e]=w):(w.id=_.id,w.object=_,w.geometry=T,w.material=R,w.materialVariant=d(_),w.groupOrder=O,w.renderOrder=_.renderOrder,w.z=M,w.group=x),e++,w}function g(_,T,R,O,M,x,w){w.reversedDepth===!0&&(M=-M);const H=h(_,T,R,O,M,x);R.transmission>0?s.push(H):R.transparent===!0?u.push(H):i.push(H)}function m(_,T,R,O,M,x){const w=h(_,T,R,O,M,x);R.transmission>0?s.unshift(w):R.transparent===!0?u.unshift(w):i.unshift(w)}function S(_,T){i.length>1&&i.sort(_||wC),s.length>1&&s.sort(T||AS),u.length>1&&u.sort(T||AS)}function v(){for(let _=e,T=o.length;_<T;_++){const R=o[_];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:i,transmissive:s,transparent:u,init:f,push:g,unshift:m,finish:v,sort:S}}function DC(){let o=new WeakMap;function e(s,u){const f=o.get(s);let d;return f===void 0?(d=new RS,o.set(s,[d])):u>=f.length?(d=new RS,f.push(d)):d=f[u],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function UC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new at,color:new Oe};break;case"SpotLight":i={position:new at,direction:new at,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new at,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new at,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":i={color:new Oe,position:new at,halfWidth:new at,halfHeight:new at};break}return o[e.id]=i,i}}}function NC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let LC=0;function OC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function PC(o){const e=new UC,i=NC(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new at);const u=new at,f=new en,d=new en;function h(m){let S=0,v=0,_=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let T=0,R=0,O=0,M=0,x=0,w=0,H=0,C=0,U=0,D=0,I=0,E=0,L=0,N=0;m.sort(OC);for(let G=0,Y=m.length;G<Y;G++){const V=m[G],Q=V.color,X=V.intensity,W=V.distance;let nt=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Jr?nt=V.shadow.map.texture:nt=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)S+=Q.r*X,v+=Q.g*X,_+=Q.b*X;else if(V.isLightProbe){for(let it=0;it<9;it++)s.probe[it].addScaledVector(V.sh.coefficients[it],X);N++}else if(V.isSunLight){const it=e.get(V);if(it.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ht=V.shadow,vt=i.get(V);vt.shadowIntensity=ht.intensity,vt.shadowBias=ht.bias,vt.shadowNormalBias=ht.normalBias,vt.shadowRadius=ht.radius,vt.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),s.sunShadow[R]=vt,s.sunShadowMap[R]=nt;const kt=ht.getViewportCount();for(let It=0;It<kt;It++)s.sunShadowMatrix[O+It]=ht.getMatrix(It),s.sunShadowCascade[O+It]=ht._cascadeData[It];O+=kt,R++}s.sun[T]=it,T++}else if(V.isDirectionalLight){const it=e.get(V);if(it.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ht=V.shadow,vt=i.get(V);vt.shadowIntensity=ht.intensity,vt.shadowBias=ht.bias,vt.shadowNormalBias=ht.normalBias,vt.shadowRadius=ht.radius,vt.shadowMapSize=ht.mapSize,s.directionalShadow[M]=vt,s.directionalShadowMap[M]=nt,s.directionalShadowMatrix[M]=V.shadow.matrix,U++}s.directional[M]=it,M++}else if(V.isSpotLight){const it=e.get(V);it.position.setFromMatrixPosition(V.matrixWorld),it.color.copy(Q).multiplyScalar(X),it.distance=W,it.coneCos=Math.cos(V.angle),it.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),it.decay=V.decay,s.spot[w]=it;const ht=V.shadow;if(V.map&&(s.spotLightMap[E]=V.map,E++,ht.updateMatrices(V),V.castShadow&&L++),s.spotLightMatrix[w]=ht.matrix,V.castShadow){const vt=i.get(V);vt.shadowIntensity=ht.intensity,vt.shadowBias=ht.bias,vt.shadowNormalBias=ht.normalBias,vt.shadowRadius=ht.radius,vt.shadowMapSize=ht.mapSize,s.spotShadow[w]=vt,s.spotShadowMap[w]=nt,I++}w++}else if(V.isRectAreaLight){const it=e.get(V);it.color.copy(Q).multiplyScalar(X),it.halfWidth.set(V.width*.5,0,0),it.halfHeight.set(0,V.height*.5,0),s.rectArea[H]=it,H++}else if(V.isPointLight){const it=e.get(V);if(it.color.copy(V.color).multiplyScalar(V.intensity),it.distance=V.distance,it.decay=V.decay,V.castShadow){const ht=V.shadow,vt=i.get(V);vt.shadowIntensity=ht.intensity,vt.shadowBias=ht.bias,vt.shadowNormalBias=ht.normalBias,vt.shadowRadius=ht.radius,vt.shadowMapSize=ht.mapSize,vt.shadowCameraNear=ht.camera.near,vt.shadowCameraFar=ht.camera.far,s.pointShadow[x]=vt,s.pointShadowMap[x]=nt,s.pointShadowMatrix[x]=V.shadow.matrix,D++}s.point[x]=it,x++}else if(V.isHemisphereLight){const it=e.get(V);it.skyColor.copy(V.color).multiplyScalar(X),it.groundColor.copy(V.groundColor).multiplyScalar(X),s.hemi[C]=it,C++}}H>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=v,s.ambient[2]=_;const z=s.hash;(z.sunLength!==T||z.directionalLength!==M||z.pointLength!==x||z.spotLength!==w||z.rectAreaLength!==H||z.hemiLength!==C||z.numSunShadows!==R||z.numDirectionalShadows!==U||z.numPointShadows!==D||z.numSpotShadows!==I||z.numSpotMaps!==E||z.numLightProbes!==N)&&(s.sun.length=T,s.directional.length=M,s.spot.length=w,s.rectArea.length=H,s.point.length=x,s.hemi.length=C,s.sunShadow.length=R,s.sunShadowMap.length=R,s.sunShadowMatrix.length=O,s.sunShadowCascade.length=O,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.directionalShadowMatrix.length=U,s.pointShadow.length=D,s.pointShadowMap.length=D,s.pointShadowMatrix.length=D,s.spotShadow.length=I,s.spotShadowMap.length=I,s.spotLightMatrix.length=I+E-L,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=N,z.sunLength=T,z.directionalLength=M,z.pointLength=x,z.spotLength=w,z.rectAreaLength=H,z.hemiLength=C,z.numSunShadows=R,z.numDirectionalShadows=U,z.numPointShadows=D,z.numSpotShadows=I,z.numSpotMaps=E,z.numLightProbes=N,s.version=LC++)}function g(m,S){let v=0,_=0,T=0,R=0,O=0,M=0;const x=S.matrixWorldInverse;for(let w=0,H=m.length;w<H;w++){const C=m[w];if(C.isSunLight){const U=s.sun[v];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(x),v++}else if(C.isDirectionalLight){const U=s.directional[_];U.direction.setFromMatrixPosition(C.matrixWorld),u.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(u),U.direction.transformDirection(x),_++}else if(C.isSpotLight){const U=s.spot[R];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(C.matrixWorld),u.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(u),U.direction.transformDirection(x),R++}else if(C.isRectAreaLight){const U=s.rectArea[O];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(x),d.identity(),f.copy(C.matrixWorld),f.premultiply(x),d.extractRotation(f),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),O++}else if(C.isPointLight){const U=s.point[T];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(x),T++}else if(C.isHemisphereLight){const U=s.hemi[M];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(x),M++}}}return{setup:h,setupView:g,state:s}}function CS(o){const e=new PC(o),i=[],s=[],u=[];function f(_){v.camera=_,i.length=0,s.length=0,u.length=0}function d(_){i.push(_)}function h(_){s.push(_)}function g(_){u.push(_)}function m(){e.setup(i)}function S(_){e.setupView(i,_)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:u,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:v,setupLights:m,setupLightsView:S,pushLight:d,pushShadow:h,pushLightProbeGrid:g}}function IC(o){let e=new WeakMap;function i(u,f=0){const d=e.get(u);let h;return d===void 0?(h=new CS(o),e.set(u,[h])):f>=d.length?(h=new CS(o),d.push(h)):h=d[f],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const zC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BC=`uniform sampler2D shadow_pass;
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
}`,FC=[new at(1,0,0),new at(-1,0,0),new at(0,1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1)],HC=[new at(0,-1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1),new at(0,-1,0),new at(0,-1,0)],wS=new en,dl=new at,qh=new at;function GC(o,e,i){let s=new im;const u=new Te,f=new Te,d=new rn,h=new JT,g=new jT,m={},S=i.maxTextureSize,v={[Ia]:jn,[jn]:Ia,[Ua]:Ua},_=new ca({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:zC,fragmentShader:BC}),T=_.clone();T.defines.HORIZONTAL_PASS=1;const R=new Hi;R.setAttribute("position",new Pa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const O=new pi(R,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_c;let x=this.type;this.render=function(D,I,E){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||D.length===0)return;this.type===FE&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_c);const L=o.getRenderTarget(),N=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),G=o.state;G.setBlending(La),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Y=x!==this.type;Y&&I.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(Q=>Q.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,Q=D.length;V<Q;V++){const X=D[V],W=X.shadow;if(W===void 0){oe("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;u.copy(W.mapSize);const nt=W.getFrameExtents();u.multiply(nt),f.copy(W.mapSize),(u.x>S||u.y>S)&&(u.x>S&&(f.x=Math.floor(S/nt.x),u.x=f.x*nt.x,W.mapSize.x=f.x),u.y>S&&(f.y=Math.floor(S/nt.y),u.y=f.y*nt.y,W.mapSize.y=f.y));const it=o.state.buffers.depth.getReversed();if(W.camera._reversedDepth=it,W.map===null||Y===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===hl){if(X.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Fi(u.x,u.y,{format:Jr,type:la,minFilter:zn,magFilter:zn,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new xl(u.x,u.y,aa),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=za,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Nn,W.map.depthTexture.magFilter=Nn}else X.isPointLight?(W.map=new wx(u.x),W.map.depthTexture=new WT(u.x,oa)):(W.map=new Fi(u.x,u.y),W.map.depthTexture=new xl(u.x,u.y,oa)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=za,this.type===_c?(W.map.depthTexture.compareFunction=it?tm:$p,W.map.depthTexture.minFilter=zn,W.map.depthTexture.magFilter=zn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Nn,W.map.depthTexture.magFilter=Nn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==u.x||W.map.height!==u.y)&&W.map.setSize(u.x,u.y);const ht=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();X.isPointLight!==!0&&W.updateMatrices(X,E);for(let vt=0;vt<ht;vt++){const kt=W.getCamera(vt);if(X.isPointLight){const It=W.camera,F=W.matrix,pt=X.distance||It.far;pt!==It.far&&(It.far=pt,It.updateProjectionMatrix()),dl.setFromMatrixPosition(X.matrixWorld),It.position.copy(dl),qh.copy(It.position),qh.add(FC[vt]),It.up.copy(HC[vt]),It.lookAt(qh),It.updateMatrixWorld(),F.makeTranslation(-dl.x,-dl.y,-dl.z),wS.multiplyMatrices(It.projectionMatrix,It.matrixWorldInverse),W._frustum.setFromProjectionMatrix(wS,It.coordinateSystem,It.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)o.setRenderTarget(W.map,vt),o.clear();else{vt===0&&(o.setRenderTarget(W.map),o.clear());const It=W.getViewport(vt);d.set(f.x*It.x,f.y*It.y,f.x*It.z,f.y*It.w),G.viewport(d)}s=W.getFrustum(vt),C(I,E,kt,X,this.type)}W.isPointLightShadow!==!0&&this.type===hl&&w(W,E),W.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(L,N,z)};function w(D,I){const E=e.update(O);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,T.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,T.needsUpdate=!0),D.mapPass===null?D.mapPass=new Fi(u.x,u.y,{format:Jr,type:la}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),_.uniforms.shadow_pass.value=D.map.depthTexture,_.uniforms.resolution.value.set(D.map.width,D.map.height),_.uniforms.radius.value=D.radius,o.setRenderTarget(D.mapPass),o.clear(),o.renderBufferDirect(I,null,E,_,O,null),T.uniforms.shadow_pass.value=D.mapPass.texture,T.uniforms.resolution.value.set(D.map.width,D.map.height),T.uniforms.radius.value=D.radius,o.setRenderTarget(D.map),o.clear(),o.renderBufferDirect(I,null,E,T,O,null)}function H(D,I,E,L){let N=null;const z=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(z!==void 0)N=z;else if(N=E.isPointLight===!0?g:h,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const G=N.uuid,Y=I.uuid;let V=m[G];V===void 0&&(V={},m[G]=V);let Q=V[Y];Q===void 0&&(Q=N.clone(),V[Y]=Q,I.addEventListener("dispose",U)),N=Q}if(N.visible=I.visible,N.wireframe=I.wireframe,L===hl?N.side=I.shadowSide!==null?I.shadowSide:I.side:N.side=I.shadowSide!==null?I.shadowSide:v[I.side],N.alphaMap=I.alphaMap,N.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,N.map=I.map,N.clipShadows=I.clipShadows,N.clippingPlanes=I.clippingPlanes,N.clipIntersection=I.clipIntersection,N.displacementMap=I.displacementMap,N.displacementScale=I.displacementScale,N.displacementBias=I.displacementBias,N.wireframeLinewidth=I.wireframeLinewidth,N.linewidth=I.linewidth,E.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const G=o.properties.get(N);G.light=E}return N}function C(D,I,E,L,N){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&N===hl)&&(!D.frustumCulled||D.intersectsFrustum(s))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const Y=e.update(D),V=D.material;if(Array.isArray(V)){const Q=Y.groups;for(let X=0,W=Q.length;X<W;X++){const nt=Q[X],it=V[nt.materialIndex];if(it&&it.visible){const ht=H(D,it,L,N);D.onBeforeShadow(o,D,I,E,Y,ht,nt),o.renderBufferDirect(E,null,Y,ht,D,nt),D.onAfterShadow(o,D,I,E,Y,ht,nt)}}}else if(V.visible){const Q=H(D,V,L,N);D.onBeforeShadow(o,D,I,E,Y,Q,null),o.renderBufferDirect(E,null,Y,Q,D,null),D.onAfterShadow(o,D,I,E,Y,Q,null)}}const G=D.children;for(let Y=0,V=G.length;Y<V;Y++)C(G[Y],I,E,L,N)}function U(D){D.target.removeEventListener("dispose",U);for(const E in m){const L=m[E],N=D.target.uuid;N in L&&(L[N].dispose(),delete L[N])}}}function VC(o,e){function i(){let J=!1;const wt=new rn;let Mt=null;const Nt=new rn(0,0,0,0);return{setMask:function(Vt){Mt!==Vt&&!J&&(o.colorMask(Vt,Vt,Vt,Vt),Mt=Vt)},setLocked:function(Vt){J=Vt},setClear:function(Vt,Tt,Jt,Gt,we){we===!0&&(Vt*=Gt,Tt*=Gt,Jt*=Gt),wt.set(Vt,Tt,Jt,Gt),Nt.equals(wt)===!1&&(o.clearColor(Vt,Tt,Jt,Gt),Nt.copy(wt))},reset:function(){J=!1,Mt=null,Nt.set(-1,0,0,0)}}}function s(){let J=!1,wt=!1,Mt=null,Nt=null,Vt=null;return{setReversed:function(Tt){if(wt!==Tt){const Jt=e.get("EXT_clip_control");Tt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),wt=Tt;const Gt=Vt;Vt=null,this.setClear(Gt)}},getReversed:function(){return wt},setTest:function(Tt){Tt?ct(o.DEPTH_TEST):Et(o.DEPTH_TEST)},setMask:function(Tt){Mt!==Tt&&!J&&(o.depthMask(Tt),Mt=Tt)},setFunc:function(Tt){if(wt&&(Tt=xT[Tt]),Nt!==Tt){switch(Tt){case Yh:o.depthFunc(o.NEVER);break;case Zh:o.depthFunc(o.ALWAYS);break;case Kh:o.depthFunc(o.LESS);break;case gl:o.depthFunc(o.LEQUAL);break;case Qh:o.depthFunc(o.EQUAL);break;case Jh:o.depthFunc(o.GEQUAL);break;case jh:o.depthFunc(o.GREATER);break;case $h:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Nt=Tt}},setLocked:function(Tt){J=Tt},setClear:function(Tt){Vt!==Tt&&(Vt=Tt,wt&&(Tt=1-Tt),o.clearDepth(Tt))},reset:function(){J=!1,Mt=null,Nt=null,Vt=null,wt=!1}}}function u(){let J=!1,wt=null,Mt=null,Nt=null,Vt=null,Tt=null,Jt=null,Gt=null,we=null;return{setTest:function(fe){J||(fe?ct(o.STENCIL_TEST):Et(o.STENCIL_TEST))},setMask:function(fe){wt!==fe&&!J&&(o.stencilMask(fe),wt=fe)},setFunc:function(fe,ti,mi){(Mt!==fe||Nt!==ti||Vt!==mi)&&(o.stencilFunc(fe,ti,mi),Mt=fe,Nt=ti,Vt=mi)},setOp:function(fe,ti,mi){(Tt!==fe||Jt!==ti||Gt!==mi)&&(o.stencilOp(fe,ti,mi),Tt=fe,Jt=ti,Gt=mi)},setLocked:function(fe){J=fe},setClear:function(fe){we!==fe&&(o.clearStencil(fe),we=fe)},reset:function(){J=!1,wt=null,Mt=null,Nt=null,Vt=null,Tt=null,Jt=null,Gt=null,we=null}}}const f=new i,d=new s,h=new u,g=new WeakMap,m=new WeakMap;let S={},v={},_={},T=new WeakMap,R=[],O=null,M=!1,x=null,w=null,H=null,C=null,U=null,D=null,I=null,E=new Oe(0,0,0),L=0,N=!1,z=null,G=null,Y=null,V=null,Q=null;const X=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,nt=0;const it=o.getParameter(o.VERSION);it.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(it)[1]),W=nt>=1):it.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),W=nt>=2);let ht=null,vt={};const kt=o.getParameter(o.SCISSOR_BOX),It=o.getParameter(o.VIEWPORT),F=new rn().fromArray(kt),pt=new rn().fromArray(It);function bt(J,wt,Mt,Nt){const Vt=new Uint8Array(4),Tt=o.createTexture();o.bindTexture(J,Tt),o.texParameteri(J,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(J,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<Mt;Jt++)J===o.TEXTURE_3D||J===o.TEXTURE_2D_ARRAY?o.texImage3D(wt,0,o.RGBA,1,1,Nt,0,o.RGBA,o.UNSIGNED_BYTE,Vt):o.texImage2D(wt+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Vt);return Tt}const Z={};Z[o.TEXTURE_2D]=bt(o.TEXTURE_2D,o.TEXTURE_2D,1),Z[o.TEXTURE_CUBE_MAP]=bt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[o.TEXTURE_2D_ARRAY]=bt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Z[o.TEXTURE_3D]=bt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ct(o.DEPTH_TEST),d.setFunc(gl),jt(!1),ne(Ov),ct(o.CULL_FACE),pe(La);function ct(J){S[J]!==!0&&(o.enable(J),S[J]=!0)}function Et(J){S[J]!==!1&&(o.disable(J),S[J]=!1)}function Ct(J,wt){return _[J]!==wt?(o.bindFramebuffer(J,wt),_[J]=wt,J===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=wt),J===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=wt),!0):!1}function mt(J,wt){let Mt=R,Nt=!1;if(J){Mt=T.get(wt),Mt===void 0&&(Mt=[],T.set(wt,Mt));const Vt=J.textures;if(Mt.length!==Vt.length||Mt[0]!==o.COLOR_ATTACHMENT0){for(let Tt=0,Jt=Vt.length;Tt<Jt;Tt++)Mt[Tt]=o.COLOR_ATTACHMENT0+Tt;Mt.length=Vt.length,Nt=!0}}else Mt[0]!==o.BACK&&(Mt[0]=o.BACK,Nt=!0);Nt&&o.drawBuffers(Mt)}function At(J){return O!==J?(o.useProgram(J),O=J,!0):!1}const be={[$s]:o.FUNC_ADD,[GE]:o.FUNC_SUBTRACT,[VE]:o.FUNC_REVERSE_SUBTRACT};be[XE]=o.MIN,be[kE]=o.MAX;const le={[WE]:o.ZERO,[qE]:o.ONE,[YE]:o.SRC_COLOR,[YS]:o.SRC_ALPHA,[$E]:o.SRC_ALPHA_SATURATE,[JE]:o.DST_COLOR,[KE]:o.DST_ALPHA,[ZE]:o.ONE_MINUS_SRC_COLOR,[ZS]:o.ONE_MINUS_SRC_ALPHA,[jE]:o.ONE_MINUS_DST_COLOR,[QE]:o.ONE_MINUS_DST_ALPHA,[tT]:o.CONSTANT_COLOR,[eT]:o.ONE_MINUS_CONSTANT_COLOR,[nT]:o.CONSTANT_ALPHA,[iT]:o.ONE_MINUS_CONSTANT_ALPHA};function pe(J,wt,Mt,Nt,Vt,Tt,Jt,Gt,we,fe){if(J===La){M===!0&&(Et(o.BLEND),M=!1);return}if(M===!1&&(ct(o.BLEND),M=!0),J!==HE){if(J!==x||fe!==N){if((w!==$s||U!==$s)&&(o.blendEquation(o.FUNC_ADD),w=$s,U=$s),fe)switch(J){case ml:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Pv:o.blendFunc(o.ONE,o.ONE);break;case Iv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case zv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:ze("WebGLState: Invalid blending: ",J);break}else switch(J){case ml:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Pv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Iv:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zv:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",J);break}H=null,C=null,D=null,I=null,E.set(0,0,0),L=0,x=J,N=fe}return}Vt=Vt||wt,Tt=Tt||Mt,Jt=Jt||Nt,(wt!==w||Vt!==U)&&(o.blendEquationSeparate(be[wt],be[Vt]),w=wt,U=Vt),(Mt!==H||Nt!==C||Tt!==D||Jt!==I)&&(o.blendFuncSeparate(le[Mt],le[Nt],le[Tt],le[Jt]),H=Mt,C=Nt,D=Tt,I=Jt),(Gt.equals(E)===!1||we!==L)&&(o.blendColor(Gt.r,Gt.g,Gt.b,we),E.copy(Gt),L=we),x=J,N=!1}function ce(J,wt){J.side===Ua?Et(o.CULL_FACE):ct(o.CULL_FACE);let Mt=J.side===jn;wt&&(Mt=!Mt),jt(Mt),J.blending===ml&&J.transparent===!1?pe(La):pe(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),d.setFunc(J.depthFunc),d.setTest(J.depthTest),d.setMask(J.depthWrite),f.setMask(J.colorWrite);const Nt=J.stencilWrite;h.setTest(Nt),Nt&&(h.setMask(J.stencilWriteMask),h.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),h.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),sn(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):Et(o.SAMPLE_ALPHA_TO_COVERAGE)}function jt(J){z!==J&&(J?o.frontFace(o.CW):o.frontFace(o.CCW),z=J)}function ne(J){J!==zE?(ct(o.CULL_FACE),J!==G&&(J===Ov?o.cullFace(o.BACK):J===BE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Et(o.CULL_FACE),G=J}function Be(J){J!==Y&&(W&&o.lineWidth(J),Y=J)}function sn(J,wt,Mt){J?(ct(o.POLYGON_OFFSET_FILL),(V!==wt||Q!==Mt)&&(V=wt,Q=Mt,d.getReversed()&&(wt=-wt),o.polygonOffset(wt,Mt))):Et(o.POLYGON_OFFSET_FILL)}function Pe(J){J?ct(o.SCISSOR_TEST):Et(o.SCISSOR_TEST)}function Ge(J){J===void 0&&(J=o.TEXTURE0+X-1),ht!==J&&(o.activeTexture(J),ht=J)}function K(J,wt,Mt){Mt===void 0&&(ht===null?Mt=o.TEXTURE0+X-1:Mt=ht);let Nt=vt[Mt];Nt===void 0&&(Nt={type:void 0,texture:void 0},vt[Mt]=Nt),(Nt.type!==J||Nt.texture!==wt)&&(ht!==Mt&&(o.activeTexture(Mt),ht=Mt),o.bindTexture(J,wt||Z[J]),Nt.type=J,Nt.texture=wt)}function nn(){const J=vt[ht];J!==void 0&&J.type!==void 0&&(o.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function Ie(){try{o.compressedTexImage2D(...arguments)}catch(J){ze("WebGLState:",J)}}function P(){try{o.compressedTexImage3D(...arguments)}catch(J){ze("WebGLState:",J)}}function y(){try{o.texSubImage2D(...arguments)}catch(J){ze("WebGLState:",J)}}function et(){try{o.texSubImage3D(...arguments)}catch(J){ze("WebGLState:",J)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(J){ze("WebGLState:",J)}}function gt(){try{o.compressedTexSubImage3D(...arguments)}catch(J){ze("WebGLState:",J)}}function Rt(){try{o.texStorage2D(...arguments)}catch(J){ze("WebGLState:",J)}}function Ut(){try{o.texStorage3D(...arguments)}catch(J){ze("WebGLState:",J)}}function _t(){try{o.texImage2D(...arguments)}catch(J){ze("WebGLState:",J)}}function yt(){try{o.texImage3D(...arguments)}catch(J){ze("WebGLState:",J)}}function Dt(J){return v[J]!==void 0?v[J]:o.getParameter(J)}function $t(J,wt){v[J]!==wt&&(o.pixelStorei(J,wt),v[J]=wt)}function zt(J){F.equals(J)===!1&&(o.scissor(J.x,J.y,J.z,J.w),F.copy(J))}function Pt(J){pt.equals(J)===!1&&(o.viewport(J.x,J.y,J.z,J.w),pt.copy(J))}function Xt(J,wt){let Mt=m.get(wt);Mt===void 0&&(Mt=new WeakMap,m.set(wt,Mt));let Nt=Mt.get(J);Nt===void 0&&(Nt=o.getUniformBlockIndex(wt,J.name),Mt.set(J,Nt))}function ie(J,wt){const Nt=m.get(wt).get(J);g.get(wt)!==Nt&&(o.uniformBlockBinding(wt,Nt,J.__bindingPointIndex),g.set(wt,Nt))}function ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},v={},ht=null,vt={},_={},T=new WeakMap,R=[],O=null,M=!1,x=null,w=null,H=null,C=null,U=null,D=null,I=null,E=new Oe(0,0,0),L=0,N=!1,z=null,G=null,Y=null,V=null,Q=null,F.set(0,0,o.canvas.width,o.canvas.height),pt.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:ct,disable:Et,bindFramebuffer:Ct,drawBuffers:mt,useProgram:At,setBlending:pe,setMaterial:ce,setFlipSided:jt,setCullFace:ne,setLineWidth:Be,setPolygonOffset:sn,setScissorTest:Pe,activeTexture:Ge,bindTexture:K,unbindTexture:nn,compressedTexImage2D:Ie,compressedTexImage3D:P,texImage2D:_t,texImage3D:yt,pixelStorei:$t,getParameter:Dt,updateUBOMapping:Xt,uniformBlockBinding:ie,texStorage2D:Rt,texStorage3D:Ut,texSubImage2D:y,texSubImage3D:et,compressedTexSubImage2D:ut,compressedTexSubImage3D:gt,scissor:zt,viewport:Pt,reset:ue}}function XC(o,e,i,s,u,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Te,S=new WeakMap,v=new Set;let _;const T=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function O(P,y){return R?new OffscreenCanvas(P,y):Rc("canvas")}function M(P,y,et){let ut=1;const gt=Ie(P);if((gt.width>et||gt.height>et)&&(ut=et/Math.max(gt.width,gt.height)),ut<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Rt=Math.floor(ut*gt.width),Ut=Math.floor(ut*gt.height);_===void 0&&(_=O(Rt,Ut));const _t=y?O(Rt,Ut):_;return _t.width=Rt,_t.height=Ut,_t.getContext("2d").drawImage(P,0,0,Rt,Ut),oe("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+Rt+"x"+Ut+")."),_t}else return"data"in P&&oe("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),P;return P}function x(P){return P.generateMipmaps}function w(P){o.generateMipmap(P)}function H(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(P,y,et,ut,gt,Rt=!1){if(P!==null){if(o[P]!==void 0)return o[P];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ut;ut&&(Ut=e.get("EXT_texture_norm16"),Ut||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _t=y;if(y===o.RED&&(et===o.FLOAT&&(_t=o.R32F),et===o.HALF_FLOAT&&(_t=o.R16F),et===o.UNSIGNED_BYTE&&(_t=o.R8),et===o.UNSIGNED_SHORT&&Ut&&(_t=Ut.R16_EXT),et===o.SHORT&&Ut&&(_t=Ut.R16_SNORM_EXT)),y===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(_t=o.R8UI),et===o.UNSIGNED_SHORT&&(_t=o.R16UI),et===o.UNSIGNED_INT&&(_t=o.R32UI),et===o.BYTE&&(_t=o.R8I),et===o.SHORT&&(_t=o.R16I),et===o.INT&&(_t=o.R32I)),y===o.RG&&(et===o.FLOAT&&(_t=o.RG32F),et===o.HALF_FLOAT&&(_t=o.RG16F),et===o.UNSIGNED_BYTE&&(_t=o.RG8),et===o.UNSIGNED_SHORT&&Ut&&(_t=Ut.RG16_EXT),et===o.SHORT&&Ut&&(_t=Ut.RG16_SNORM_EXT)),y===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(_t=o.RG8UI),et===o.UNSIGNED_SHORT&&(_t=o.RG16UI),et===o.UNSIGNED_INT&&(_t=o.RG32UI),et===o.BYTE&&(_t=o.RG8I),et===o.SHORT&&(_t=o.RG16I),et===o.INT&&(_t=o.RG32I)),y===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(_t=o.RGB8UI),et===o.UNSIGNED_SHORT&&(_t=o.RGB16UI),et===o.UNSIGNED_INT&&(_t=o.RGB32UI),et===o.BYTE&&(_t=o.RGB8I),et===o.SHORT&&(_t=o.RGB16I),et===o.INT&&(_t=o.RGB32I)),y===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(_t=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(_t=o.RGBA16UI),et===o.UNSIGNED_INT&&(_t=o.RGBA32UI),et===o.BYTE&&(_t=o.RGBA8I),et===o.SHORT&&(_t=o.RGBA16I),et===o.INT&&(_t=o.RGBA32I)),y===o.RGB&&(et===o.UNSIGNED_SHORT&&Ut&&(_t=Ut.RGB16_EXT),et===o.SHORT&&Ut&&(_t=Ut.RGB16_SNORM_EXT),et===o.UNSIGNED_INT_5_9_9_9_REV&&(_t=o.RGB9_E5),et===o.UNSIGNED_INT_10F_11F_11F_REV&&(_t=o.R11F_G11F_B10F)),y===o.RGBA){const yt=Rt?Ac:Ue.getTransfer(gt);et===o.FLOAT&&(_t=o.RGBA32F),et===o.HALF_FLOAT&&(_t=o.RGBA16F),et===o.UNSIGNED_BYTE&&(_t=yt===Ye?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT&&Ut&&(_t=Ut.RGBA16_EXT),et===o.SHORT&&Ut&&(_t=Ut.RGBA16_SNORM_EXT),et===o.UNSIGNED_SHORT_4_4_4_4&&(_t=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(_t=o.RGB5_A1)}return(_t===o.R16F||_t===o.R32F||_t===o.RG16F||_t===o.RG32F||_t===o.RGBA16F||_t===o.RGBA32F)&&e.get("EXT_color_buffer_float"),_t}function U(P,y){let et;return P?y===null||y===oa||y===vl?et=o.DEPTH24_STENCIL8:y===aa?et=o.DEPTH32F_STENCIL8:y===_l&&(et=o.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===oa||y===vl?et=o.DEPTH_COMPONENT24:y===aa?et=o.DEPTH_COMPONENT32F:y===_l&&(et=o.DEPTH_COMPONENT16),et}function D(P,y){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==Nn&&P.minFilter!==zn?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function I(P){const y=P.target;y.removeEventListener("dispose",I),L(y),y.isVideoTexture&&S.delete(y),y.isHTMLTexture&&v.delete(y)}function E(P){const y=P.target;y.removeEventListener("dispose",E),z(y)}function L(P){const y=s.get(P);if(y.__webglInit===void 0)return;const et=P.source,ut=T.get(et);if(ut){const gt=ut[y.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&N(P),Object.keys(ut).length===0&&T.delete(et)}s.remove(P)}function N(P){const y=s.get(P);o.deleteTexture(y.__webglTexture);const et=P.source,ut=T.get(et);delete ut[y.__cacheKey],d.memory.textures--}function z(P){const y=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(y.__webglFramebuffer[ut]))for(let gt=0;gt<y.__webglFramebuffer[ut].length;gt++)o.deleteFramebuffer(y.__webglFramebuffer[ut][gt]);else o.deleteFramebuffer(y.__webglFramebuffer[ut]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[ut])}else{if(Array.isArray(y.__webglFramebuffer))for(let ut=0;ut<y.__webglFramebuffer.length;ut++)o.deleteFramebuffer(y.__webglFramebuffer[ut]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ut=0;ut<y.__webglColorRenderbuffer.length;ut++)y.__webglColorRenderbuffer[ut]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[ut]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const et=P.textures;for(let ut=0,gt=et.length;ut<gt;ut++){const Rt=s.get(et[ut]);Rt.__webglTexture&&(o.deleteTexture(Rt.__webglTexture),d.memory.textures--),s.remove(et[ut])}s.remove(P)}let G=0;function Y(){G=0}function V(){return G}function Q(P){G=P}function X(){const P=G;return P>=u.maxTextures&&oe("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+u.maxTextures),G+=1,P}function W(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function nt(P,y){const et=s.get(P);if(P.isVideoTexture&&K(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&et.__version!==P.version){const ut=P.image;if(ut===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(et,P,y);return}}else P.isExternalTexture&&(et.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+y)}function it(P,y){const et=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){Et(et,P,y);return}else P.isExternalTexture&&(et.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+y)}function ht(P,y){const et=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){Et(et,P,y);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+y)}function vt(P,y){const et=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&et.__version!==P.version){Ct(et,P,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+y)}const kt={[tp]:o.REPEAT,[Na]:o.CLAMP_TO_EDGE,[ep]:o.MIRRORED_REPEAT},It={[Nn]:o.NEAREST,[sT]:o.NEAREST_MIPMAP_NEAREST,[Yu]:o.NEAREST_MIPMAP_LINEAR,[zn]:o.LINEAR,[gh]:o.LINEAR_MIPMAP_NEAREST,[Zr]:o.LINEAR_MIPMAP_LINEAR},F={[cT]:o.NEVER,[mT]:o.ALWAYS,[fT]:o.LESS,[$p]:o.LEQUAL,[dT]:o.EQUAL,[tm]:o.GEQUAL,[hT]:o.GREATER,[pT]:o.NOTEQUAL};function pt(P,y){if(y.type===aa&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===zn||y.magFilter===gh||y.magFilter===Yu||y.magFilter===Zr||y.minFilter===zn||y.minFilter===gh||y.minFilter===Yu||y.minFilter===Zr)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,kt[y.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,kt[y.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,kt[y.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,It[y.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,It[y.minFilter]),y.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,F[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Nn||y.minFilter!==Yu&&y.minFilter!==Zr||y.type===aa&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||s.get(y).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,u.getMaxAnisotropy())),s.get(y).__currentAnisotropy=y.anisotropy}}}function bt(P,y){let et=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",I));const ut=y.source;let gt=T.get(ut);gt===void 0&&(gt={},T.set(ut,gt));const Rt=W(y);if(Rt!==P.__cacheKey){gt[Rt]===void 0&&(gt[Rt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,et=!0),gt[Rt].usedTimes++;const Ut=gt[P.__cacheKey];Ut!==void 0&&(gt[P.__cacheKey].usedTimes--,Ut.usedTimes===0&&N(y)),P.__cacheKey=Rt,P.__webglTexture=gt[Rt].texture}return et}function Z(P,y,et){return Math.floor(Math.floor(P/et)/y)}function ct(P,y,et,ut){const Rt=P.updateRanges;if(Rt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,et,ut,y.data);else{Rt.sort(($t,zt)=>$t.start-zt.start);let Ut=0;for(let $t=1;$t<Rt.length;$t++){const zt=Rt[Ut],Pt=Rt[$t],Xt=zt.start+zt.count,ie=Z(Pt.start,y.width,4),ue=Z(zt.start,y.width,4);Pt.start<=Xt+1&&ie===ue&&Z(Pt.start+Pt.count-1,y.width,4)===ie?zt.count=Math.max(zt.count,Pt.start+Pt.count-zt.start):(++Ut,Rt[Ut]=Pt)}Rt.length=Ut+1;const _t=i.getParameter(o.UNPACK_ROW_LENGTH),yt=i.getParameter(o.UNPACK_SKIP_PIXELS),Dt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let $t=0,zt=Rt.length;$t<zt;$t++){const Pt=Rt[$t],Xt=Math.floor(Pt.start/4),ie=Math.ceil(Pt.count/4),ue=Xt%y.width,J=Math.floor(Xt/y.width),wt=ie,Mt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,ue),i.pixelStorei(o.UNPACK_SKIP_ROWS,J),i.texSubImage2D(o.TEXTURE_2D,0,ue,J,wt,Mt,et,ut,y.data)}P.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,_t),i.pixelStorei(o.UNPACK_SKIP_PIXELS,yt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Dt)}}function Et(P,y,et){let ut=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ut=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ut=o.TEXTURE_3D);const gt=bt(P,y),Rt=y.source;i.bindTexture(ut,P.__webglTexture,o.TEXTURE0+et);const Ut=s.get(Rt);if(Rt.version!==Ut.__version||gt===!0){if(i.activeTexture(o.TEXTURE0+et),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const Mt=Ue.getPrimaries(Ue.workingColorSpace),Nt=y.colorSpace===Sr?null:Ue.getPrimaries(y.colorSpace),Vt=y.colorSpace===Sr||Mt===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt)}i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment);let yt=M(y.image,!1,u.maxTextureSize);yt=nn(y,yt);const Dt=f.convert(y.format,y.colorSpace),$t=f.convert(y.type);let zt=C(y.internalFormat,Dt,$t,y.normalized,y.colorSpace,y.isVideoTexture);pt(ut,y);let Pt;const Xt=y.mipmaps,ie=y.isVideoTexture!==!0,ue=Ut.__version===void 0||gt===!0,J=Rt.dataReady,wt=D(y,yt);if(y.isDepthTexture)zt=U(y.format===Kr,y.type),ue&&(ie?i.texStorage2D(o.TEXTURE_2D,1,zt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,zt,yt.width,yt.height,0,Dt,$t,null));else if(y.isDataTexture)if(Xt.length>0){ie&&ue&&i.texStorage2D(o.TEXTURE_2D,wt,zt,Xt[0].width,Xt[0].height);for(let Mt=0,Nt=Xt.length;Mt<Nt;Mt++)Pt=Xt[Mt],ie?J&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,Dt,$t,Pt.data):i.texImage2D(o.TEXTURE_2D,Mt,zt,Pt.width,Pt.height,0,Dt,$t,Pt.data);y.generateMipmaps=!1}else ie?(ue&&i.texStorage2D(o.TEXTURE_2D,wt,zt,yt.width,yt.height),J&&ct(y,yt,Dt,$t)):i.texImage2D(o.TEXTURE_2D,0,zt,yt.width,yt.height,0,Dt,$t,yt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ie&&ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,wt,zt,Xt[0].width,Xt[0].height,yt.depth);for(let Mt=0,Nt=Xt.length;Mt<Nt;Mt++)if(Pt=Xt[Mt],y.format!==Bi)if(Dt!==null)if(ie){if(J)if(y.layerUpdates.size>0){const Vt=oS(Pt.width,Pt.height,y.format,y.type);for(const Tt of y.layerUpdates){const Jt=Pt.data.subarray(Tt*Vt/Pt.data.BYTES_PER_ELEMENT,(Tt+1)*Vt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,Tt,Pt.width,Pt.height,1,Dt,Jt)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Pt.width,Pt.height,yt.depth,Dt,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,zt,Pt.width,Pt.height,yt.depth,0,Pt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?J&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Pt.width,Pt.height,yt.depth,Dt,$t,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,zt,Pt.width,Pt.height,yt.depth,0,Dt,$t,Pt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ie&&ue&&i.texStorage2D(o.TEXTURE_2D,wt,zt,Xt[0].width,Xt[0].height);for(let Mt=0,Nt=Xt.length;Mt<Nt;Mt++)Pt=Xt[Mt],y.format!==Bi?Dt!==null?ie?J&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,Dt,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,zt,Pt.width,Pt.height,0,Pt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?J&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,Dt,$t,Pt.data):i.texImage2D(o.TEXTURE_2D,Mt,zt,Pt.width,Pt.height,0,Dt,$t,Pt.data)}else if(y.isDataArrayTexture)if(ie){if(ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,wt,zt,yt.width,yt.height,yt.depth),J)if(y.layerUpdates.size>0){const Mt=oS(yt.width,yt.height,y.format,y.type);for(const Nt of y.layerUpdates){const Vt=yt.data.subarray(Nt*Mt/yt.data.BYTES_PER_ELEMENT,(Nt+1)*Mt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Nt,yt.width,yt.height,1,Dt,$t,Vt)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Dt,$t,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,yt.width,yt.height,yt.depth,0,Dt,$t,yt.data);else if(y.isData3DTexture)ie?(ue&&i.texStorage3D(o.TEXTURE_3D,wt,zt,yt.width,yt.height,yt.depth),J&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Dt,$t,yt.data)):i.texImage3D(o.TEXTURE_3D,0,zt,yt.width,yt.height,yt.depth,0,Dt,$t,yt.data);else if(y.isFramebufferTexture){if(ue)if(ie)i.texStorage2D(o.TEXTURE_2D,wt,zt,yt.width,yt.height);else{let Mt=yt.width,Nt=yt.height;for(let Vt=0;Vt<wt;Vt++)i.texImage2D(o.TEXTURE_2D,Vt,zt,Mt,Nt,0,Dt,$t,null),Mt>>=1,Nt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in o){const Mt=o.canvas;if(Mt.hasAttribute("layoutsubtree")||Mt.setAttribute("layoutsubtree","true"),yt.parentNode!==Mt){Mt.appendChild(yt),v.add(y),Mt.onpaint=Nt=>{const Vt=Nt.changedElements;for(const Tt of v)Vt.includes(Tt.image)&&(Tt.needsUpdate=!0)},Mt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,yt);else{const Vt=o.RGBA,Tt=o.RGBA,Jt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Vt,Tt,Jt,yt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(ie&&ue){const Mt=Ie(Xt[0]);i.texStorage2D(o.TEXTURE_2D,wt,zt,Mt.width,Mt.height)}for(let Mt=0,Nt=Xt.length;Mt<Nt;Mt++)Pt=Xt[Mt],ie?J&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt,$t,Pt):i.texImage2D(o.TEXTURE_2D,Mt,zt,Dt,$t,Pt);y.generateMipmaps=!1}else if(ie){if(ue){const Mt=Ie(yt);i.texStorage2D(o.TEXTURE_2D,wt,zt,Mt.width,Mt.height)}J&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Dt,$t,yt)}else i.texImage2D(o.TEXTURE_2D,0,zt,Dt,$t,yt);x(y)&&w(ut),Ut.__version=Rt.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Ct(P,y,et){if(y.image.length!==6)return;const ut=bt(P,y),gt=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+et);const Rt=s.get(gt);if(gt.version!==Rt.__version||ut===!0){i.activeTexture(o.TEXTURE0+et);const Ut=Ue.getPrimaries(Ue.workingColorSpace),_t=y.colorSpace===Sr?null:Ue.getPrimaries(y.colorSpace),yt=y.colorSpace===Sr||Ut===_t?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Dt=y.isCompressedTexture||y.image[0].isCompressedTexture,$t=y.image[0]&&y.image[0].isDataTexture,zt=[];for(let Tt=0;Tt<6;Tt++)!Dt&&!$t?zt[Tt]=M(y.image[Tt],!0,u.maxCubemapSize):zt[Tt]=$t?y.image[Tt].image:y.image[Tt],zt[Tt]=nn(y,zt[Tt]);const Pt=zt[0],Xt=f.convert(y.format,y.colorSpace),ie=f.convert(y.type),ue=C(y.internalFormat,Xt,ie,y.normalized,y.colorSpace),J=y.isVideoTexture!==!0,wt=Rt.__version===void 0||ut===!0,Mt=gt.dataReady;let Nt=D(y,Pt);pt(o.TEXTURE_CUBE_MAP,y);let Vt;if(Dt){J&&wt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,ue,Pt.width,Pt.height);for(let Tt=0;Tt<6;Tt++){Vt=zt[Tt].mipmaps;for(let Jt=0;Jt<Vt.length;Jt++){const Gt=Vt[Jt];y.format!==Bi?Xt!==null?J?Mt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt,0,0,Gt.width,Gt.height,Xt,Gt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt,ue,Gt.width,Gt.height,0,Gt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt,0,0,Gt.width,Gt.height,Xt,ie,Gt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt,ue,Gt.width,Gt.height,0,Xt,ie,Gt.data)}}}else{if(Vt=y.mipmaps,J&&wt){Vt.length>0&&Nt++;const Tt=Ie(zt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,ue,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if($t){J?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,zt[Tt].width,zt[Tt].height,Xt,ie,zt[Tt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,ue,zt[Tt].width,zt[Tt].height,0,Xt,ie,zt[Tt].data);for(let Jt=0;Jt<Vt.length;Jt++){const we=Vt[Jt].image[Tt].image;J?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt+1,0,0,we.width,we.height,Xt,ie,we.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt+1,ue,we.width,we.height,0,Xt,ie,we.data)}}else{J?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Xt,ie,zt[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,ue,Xt,ie,zt[Tt]);for(let Jt=0;Jt<Vt.length;Jt++){const Gt=Vt[Jt];J?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt+1,0,0,Xt,ie,Gt.image[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt+1,ue,Xt,ie,Gt.image[Tt])}}}x(y)&&w(o.TEXTURE_CUBE_MAP),Rt.__version=gt.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function mt(P,y,et,ut,gt,Rt){const Ut=f.convert(et.format,et.colorSpace),_t=f.convert(et.type),yt=C(et.internalFormat,Ut,_t,et.normalized,et.colorSpace),Dt=s.get(y),$t=s.get(et);if($t.__renderTarget=y,!Dt.__hasExternalTextures){const zt=Math.max(1,y.width>>Rt),Pt=Math.max(1,y.height>>Rt);gt===o.TEXTURE_3D||gt===o.TEXTURE_2D_ARRAY?i.texImage3D(gt,Rt,yt,zt,Pt,y.depth,0,Ut,_t,null):i.texImage2D(gt,Rt,yt,zt,Pt,0,Ut,_t,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),Ge(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ut,gt,$t.__webglTexture,0,Pe(y)):(gt===o.TEXTURE_2D||gt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ut,gt,$t.__webglTexture,Rt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function At(P,y,et){if(o.bindRenderbuffer(o.RENDERBUFFER,P),y.depthBuffer){const ut=y.depthTexture,gt=ut&&ut.isDepthTexture?ut.type:null,Rt=U(y.stencilBuffer,gt),Ut=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ge(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pe(y),Rt,y.width,y.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pe(y),Rt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Rt,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,P)}else{const ut=y.textures;for(let gt=0;gt<ut.length;gt++){const Rt=ut[gt],Ut=f.convert(Rt.format,Rt.colorSpace),_t=f.convert(Rt.type),yt=C(Rt.internalFormat,Ut,_t,Rt.normalized,Rt.colorSpace);Ge(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pe(y),yt,y.width,y.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pe(y),yt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,yt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function be(P,y,et){const ut=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const gt=s.get(y.depthTexture);if(gt.__renderTarget=y,(!gt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ut){if(gt.__webglInit===void 0&&(gt.__webglInit=!0,y.depthTexture.addEventListener("dispose",I)),gt.__webglTexture===void 0){gt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),pt(o.TEXTURE_CUBE_MAP,y.depthTexture);const Dt=f.convert(y.depthTexture.format),$t=f.convert(y.depthTexture.type);let zt;y.depthTexture.format===za?zt=o.DEPTH_COMPONENT24:y.depthTexture.format===Kr&&(zt=o.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,zt,y.width,y.height,0,Dt,$t,null)}}else nt(y.depthTexture,0);const Rt=gt.__webglTexture,Ut=Pe(y),_t=ut?o.TEXTURE_CUBE_MAP_POSITIVE_X+et:o.TEXTURE_2D,yt=y.depthTexture.format===Kr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===za)Ge(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,_t,Rt,0,Ut):o.framebufferTexture2D(o.FRAMEBUFFER,yt,_t,Rt,0);else if(y.depthTexture.format===Kr)Ge(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,_t,Rt,0,Ut):o.framebufferTexture2D(o.FRAMEBUFFER,yt,_t,Rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function le(P){const y=s.get(P),et=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const ut=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ut){const gt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ut.removeEventListener("dispose",gt)};ut.addEventListener("dispose",gt),y.__depthDisposeCallback=gt}y.__boundDepthTexture=ut}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(et)for(let ut=0;ut<6;ut++)be(y.__webglFramebuffer[ut],P,ut);else{const ut=P.texture.mipmaps;ut&&ut.length>0?be(y.__webglFramebuffer[0],P,0):be(y.__webglFramebuffer,P,0)}else if(et){y.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[ut]),y.__webglDepthbuffer[ut]===void 0)y.__webglDepthbuffer[ut]=o.createRenderbuffer(),At(y.__webglDepthbuffer[ut],P,!1);else{const gt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=y.__webglDepthbuffer[ut];o.bindRenderbuffer(o.RENDERBUFFER,Rt),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,Rt)}}else{const ut=P.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),At(y.__webglDepthbuffer,P,!1);else{const gt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Rt),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,Rt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function pe(P,y,et){const ut=s.get(P);y!==void 0&&mt(ut.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&le(P)}function ce(P){const y=P.texture,et=s.get(P),ut=s.get(y);P.addEventListener("dispose",E);const gt=P.textures,Rt=P.isWebGLCubeRenderTarget===!0,Ut=gt.length>1;if(Ut||(ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture()),ut.__version=y.version,d.memory.textures++),Rt){et.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0){et.__webglFramebuffer[_t]=[];for(let yt=0;yt<y.mipmaps.length;yt++)et.__webglFramebuffer[_t][yt]=o.createFramebuffer()}else et.__webglFramebuffer[_t]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){et.__webglFramebuffer=[];for(let _t=0;_t<y.mipmaps.length;_t++)et.__webglFramebuffer[_t]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Ut)for(let _t=0,yt=gt.length;_t<yt;_t++){const Dt=s.get(gt[_t]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=o.createTexture(),d.memory.textures++)}if(P.samples>0&&Ge(P)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let _t=0;_t<gt.length;_t++){const yt=gt[_t];et.__webglColorRenderbuffer[_t]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[_t]);const Dt=f.convert(yt.format,yt.colorSpace),$t=f.convert(yt.type),zt=C(yt.internalFormat,Dt,$t,yt.normalized,yt.colorSpace,P.isXRRenderTarget===!0),Pt=Pe(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,zt,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+_t,o.RENDERBUFFER,et.__webglColorRenderbuffer[_t])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),At(et.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Rt){i.bindTexture(o.TEXTURE_CUBE_MAP,ut.__webglTexture),pt(o.TEXTURE_CUBE_MAP,y);for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)mt(et.__webglFramebuffer[_t][yt],P,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,yt);else mt(et.__webglFramebuffer[_t],P,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);x(y)&&w(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ut){for(let _t=0,yt=gt.length;_t<yt;_t++){const Dt=gt[_t],$t=s.get(Dt);let zt=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(zt=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(zt,$t.__webglTexture),pt(zt,Dt),mt(et.__webglFramebuffer,P,Dt,o.COLOR_ATTACHMENT0+_t,zt,0),x(Dt)&&w(zt)}i.unbindTexture()}else{let _t=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_t=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(_t,ut.__webglTexture),pt(_t,y),y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)mt(et.__webglFramebuffer[yt],P,y,o.COLOR_ATTACHMENT0,_t,yt);else mt(et.__webglFramebuffer,P,y,o.COLOR_ATTACHMENT0,_t,0);x(y)&&w(_t),i.unbindTexture()}P.depthBuffer&&le(P)}function jt(P){const y=P.textures;for(let et=0,ut=y.length;et<ut;et++){const gt=y[et];if(x(gt)){const Rt=H(P),Ut=s.get(gt).__webglTexture;i.bindTexture(Rt,Ut),w(Rt),i.unbindTexture()}}}const ne=[],Be=[];function sn(P){if(P.samples>0){if(Ge(P)===!1){const y=P.textures,et=P.width,ut=P.height;let gt=o.COLOR_BUFFER_BIT;const Rt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=s.get(P),_t=y.length>1;if(_t)for(let Dt=0;Dt<y.length;Dt++)i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const yt=P.texture.mipmaps;yt&&yt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Dt=0;Dt<y.length;Dt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(gt|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(gt|=o.STENCIL_BUFFER_BIT)),_t){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[Dt]);const $t=s.get(y[Dt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,$t,0)}o.blitFramebuffer(0,0,et,ut,0,0,et,ut,gt,o.NEAREST),g===!0&&(ne.length=0,Be.length=0,ne.push(o.COLOR_ATTACHMENT0+Dt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ne.push(Rt),Be.push(Rt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Be)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ne))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),_t)for(let Dt=0;Dt<y.length;Dt++){i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[Dt]);const $t=s.get(y[Dt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,$t,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&g){const y=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function Pe(P){return Math.min(u.maxSamples,P.samples)}function Ge(P){const y=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function K(P){const y=d.render.frame;S.get(P)!==y&&(S.set(P,y),P.update())}function nn(P,y){const et=P.colorSpace,ut=P.format,gt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||et!==bc&&et!==Sr&&(Ue.getTransfer(et)===Ye?(ut!==Bi||gt!==hi)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",et)),y}function Ie(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=X,this.resetTextureUnits=Y,this.getTextureUnits=V,this.setTextureUnits=Q,this.setTexture2D=nt,this.setTexture2DArray=it,this.setTexture3D=ht,this.setTextureCube=vt,this.rebindTextures=pe,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Ge,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function kC(o,e){function i(s,u=Sr){let f;const d=Ue.getTransfer(u);if(s===hi)return o.UNSIGNED_BYTE;if(s===Zp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Kp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===sx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===ox)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===ax)return o.BYTE;if(s===rx)return o.SHORT;if(s===_l)return o.UNSIGNED_SHORT;if(s===Yp)return o.INT;if(s===oa)return o.UNSIGNED_INT;if(s===aa)return o.FLOAT;if(s===la)return o.HALF_FLOAT;if(s===lx)return o.ALPHA;if(s===ux)return o.RGB;if(s===Bi)return o.RGBA;if(s===za)return o.DEPTH_COMPONENT;if(s===Kr)return o.DEPTH_STENCIL;if(s===cx)return o.RED;if(s===Qp)return o.RED_INTEGER;if(s===Jr)return o.RG;if(s===Jp)return o.RG_INTEGER;if(s===jp)return o.RGBA_INTEGER;if(s===vc||s===Sc||s===xc||s===Mc)if(d===Ye)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===vc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Mc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===vc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Mc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===np||s===ip||s===ap||s===rp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===np)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ip)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ap)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===rp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sp||s===op||s===lp||s===up||s===cp||s===Ec||s===fp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===sp||s===op)return d===Ye?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===lp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===up)return f.COMPRESSED_R11_EAC;if(s===cp)return f.COMPRESSED_SIGNED_R11_EAC;if(s===Ec)return f.COMPRESSED_RG11_EAC;if(s===fp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===dp||s===hp||s===pp||s===mp||s===gp||s===_p||s===vp||s===Sp||s===xp||s===Mp||s===yp||s===Ep||s===Tp||s===bp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===dp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===pp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===mp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===gp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_p)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Mp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ep)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Tp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ap||s===Rp||s===Cp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===Ap)return d===Ye?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Rp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Cp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===wp||s===Dp||s===Tc||s===Up)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===wp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Dp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Tc)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Up)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const WC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qC=`
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

}`;class YC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new xx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ca({vertexShader:WC,fragmentShader:qC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new pi(new oo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZC extends jr{constructor(e,i){super();const s=this;let u=null,f=1,d=null,h="local-floor",g=1,m=null,S=null,v=null,_=null,T=null,R=null;const O=typeof XRWebGLBinding<"u",M=new YC,x={},w=i.getContextAttributes();let H=null,C=null;const U=[],D=[],I=new Te;let E=null,L=null;const N=new di;N.viewport=new rn;const z=new di;z.viewport=new rn;const G=[N,z],Y=new nb;let V=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ct=U[Z];return ct===void 0&&(ct=new bh,U[Z]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(Z){let ct=U[Z];return ct===void 0&&(ct=new bh,U[Z]=ct),ct.getGripSpace()},this.getHand=function(Z){let ct=U[Z];return ct===void 0&&(ct=new bh,U[Z]=ct),ct.getHandSpace()};function X(Z){const ct=D.indexOf(Z.inputSource);if(ct===-1)return;const Et=U[ct];Et!==void 0&&(Et.update(Z.inputSource,Z.frame,m||d),Et.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){u.removeEventListener("select",X),u.removeEventListener("selectstart",X),u.removeEventListener("selectend",X),u.removeEventListener("squeeze",X),u.removeEventListener("squeezestart",X),u.removeEventListener("squeezeend",X),u.removeEventListener("end",W),u.removeEventListener("inputsourceschange",nt);for(let Z=0;Z<U.length;Z++){const ct=D[Z];ct!==null&&(D[Z]=null,U[Z].disconnect(ct))}V=null,Q=null,M.reset();for(const Z in x)delete x[Z];if(e.setRenderTarget(H),T=null,_=null,v=null,u=null,C=null,bt.stop(),s.isPresenting=!1,e.setPixelRatio(E),e.setSize(I.width,I.height,!1),L!==null){const Z=L.camera;Z.fov=L.fov,Z.zoom=L.zoom,Z.updateProjectionMatrix(),L=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){f=Z,s.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,s.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return _!==null?_:T},this.getBinding=function(){return v===null&&O&&(v=new XRWebGLBinding(u,i)),v},this.getFrame=function(){return R},this.getSession=function(){return u},this.setSession=async function(Z){if(u=Z,u!==null){if(H=e.getRenderTarget(),u.addEventListener("select",X),u.addEventListener("selectstart",X),u.addEventListener("selectend",X),u.addEventListener("squeeze",X),u.addEventListener("squeezestart",X),u.addEventListener("squeezeend",X),u.addEventListener("end",W),u.addEventListener("inputsourceschange",nt),w.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(I),O&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Ct=null,mt=null;w.depth&&(mt=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=w.stencil?Kr:za,Ct=w.stencil?vl:oa);const At={colorFormat:i.RGBA8,depthFormat:mt,scaleFactor:f};v=this.getBinding(),_=v.createProjectionLayer(At),u.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new Fi(_.textureWidth,_.textureHeight,{format:Bi,type:hi,depthTexture:new xl(_.textureWidth,_.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Et={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:f};T=new XRWebGLLayer(u,i,Et),u.updateRenderState({baseLayer:T}),e.setPixelRatio(1),e.setSize(T.framebufferWidth,T.framebufferHeight,!1),C=new Fi(T.framebufferWidth,T.framebufferHeight,{format:Bi,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1,storeMultisampledDepthBuffer:T.ignoreDepthValues===!1,storeMultisampledStencilBuffer:T.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(g),m=null,d=await u.requestReferenceSpace(h),bt.setContext(u),bt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function nt(Z){for(let ct=0;ct<Z.removed.length;ct++){const Et=Z.removed[ct],Ct=D.indexOf(Et);Ct>=0&&(D[Ct]=null,U[Ct].disconnect(Et))}for(let ct=0;ct<Z.added.length;ct++){const Et=Z.added[ct];let Ct=D.indexOf(Et);if(Ct===-1){for(let At=0;At<U.length;At++)if(At>=D.length){D.push(Et),Ct=At;break}else if(D[At]===null){D[At]=Et,Ct=At;break}if(Ct===-1)break}const mt=U[Ct];mt&&mt.connect(Et)}}const it=new at,ht=new at;function vt(Z,ct,Et){it.setFromMatrixPosition(ct.matrixWorld),ht.setFromMatrixPosition(Et.matrixWorld);const Ct=it.distanceTo(ht),mt=ct.projectionMatrix.elements,At=Et.projectionMatrix.elements,be=mt[14]/(mt[10]-1),le=mt[14]/(mt[10]+1),pe=(mt[9]+1)/mt[5],ce=(mt[9]-1)/mt[5],jt=(mt[8]-1)/mt[0],ne=(At[8]+1)/At[0],Be=be*jt,sn=be*ne,Pe=Ct/(-jt+ne),Ge=Pe*-jt;if(ct.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ge),Z.translateZ(Pe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),mt[10]===-1)Z.projectionMatrix.copy(ct.projectionMatrix),Z.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const K=be+Pe,nn=le+Pe,Ie=Be-Ge,P=sn+(Ct-Ge),y=pe*le/nn*K,et=ce*le/nn*K;Z.projectionMatrix.makePerspective(Ie,P,y,et,K,nn),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function kt(Z,ct){ct===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ct.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(u===null)return;let ct=Z.near,Et=Z.far;M.texture!==null&&(M.depthNear>0&&(ct=M.depthNear),M.depthFar>0&&(Et=M.depthFar)),Y.near=z.near=N.near=ct,Y.far=z.far=N.far=Et,(V!==Y.near||Q!==Y.far)&&(u.updateRenderState({depthNear:Y.near,depthFar:Y.far}),V=Y.near,Q=Y.far),Y.layers.mask=Z.layers.mask|6,N.layers.mask=Y.layers.mask&-5,z.layers.mask=Y.layers.mask&-3;const Ct=Z.parent,mt=Y.cameras;kt(Y,Ct);for(let At=0;At<mt.length;At++)kt(mt[At],Ct);mt.length===2?vt(Y,N,z):Y.projectionMatrix.copy(N.projectionMatrix),L===null&&Z.isPerspectiveCamera&&(L={camera:Z,fov:Z.fov,zoom:Z.zoom}),It(Z,Y,Ct)};function It(Z,ct,Et){Et===null?Z.matrix.copy(ct.matrixWorld):(Z.matrix.copy(Et.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ct.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ct.projectionMatrix),Z.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Lp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(_===null&&T===null))return g},this.setFoveation=function(Z){g=Z,_!==null&&(_.fixedFoveation=Z),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=Z)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(Z){return x[Z]};let F=null;function pt(Z,ct){if(S=ct.getViewerPose(m||d),R=ct,S!==null){const Et=S.views;T!==null&&(e.setRenderTargetFramebuffer(C,T.framebuffer),e.setRenderTarget(C));let Ct=!1;Et.length!==Y.cameras.length&&(Y.cameras.length=0,Ct=!0);for(let le=0;le<Et.length;le++){const pe=Et[le];let ce=null;if(T!==null)ce=T.getViewport(pe);else{const ne=v.getViewSubImage(_,pe);ce=ne.viewport,le===0&&(e.setRenderTargetTextures(C,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(C))}let jt=G[le];jt===void 0&&(jt=new di,jt.layers.enable(le),jt.viewport=new rn,G[le]=jt),jt.matrix.fromArray(pe.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(pe.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(ce.x,ce.y,ce.width,ce.height),le===0&&(Y.matrix.copy(jt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ct===!0&&Y.cameras.push(jt)}const mt=u.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&O){v=s.getBinding();const le=v.getDepthInformation(Et[0]);le&&le.isValid&&le.texture&&M.init(le,u.renderState)}if(mt&&mt.includes("camera-access")&&O){e.state.unbindTexture(),v=s.getBinding();for(let le=0;le<Et.length;le++){const pe=Et[le].camera;if(pe){let ce=x[pe];ce||(ce=new xx,x[pe]=ce);const jt=v.getCameraImage(pe);ce.sourceTexture=jt}}}}for(let Et=0;Et<U.length;Et++){const Ct=D[Et],mt=U[Et];Ct!==null&&mt!==void 0&&mt.update(Ct,ct,m||d)}F&&F(Z,ct),ct.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ct}),R=null}const bt=new Rx;bt.setAnimationLoop(pt),this.setAnimationLoop=function(Z){F=Z},this.dispose=function(){}}}const KC=new en,Ox=new he;Ox.set(-1,0,0,0,1,0,0,0,1);function QC(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,Mx(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function u(M,x,w,H,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?f(M,x):x.isMeshLambertMaterial?(f(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(f(M,x),v(M,x)):x.isMeshPhongMaterial?(f(M,x),S(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(f(M,x),_(M,x),x.isMeshPhysicalMaterial&&T(M,x,C)):x.isMeshMatcapMaterial?(f(M,x),R(M,x)):x.isMeshDepthMaterial?f(M,x):x.isMeshDistanceMaterial?(f(M,x),O(M,x)):x.isMeshNormalMaterial?f(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?g(M,x,w,H):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===jn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===jn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const w=e.get(x),H=w.envMap,C=w.envMapRotation;H&&(M.envMap.value=H,M.envMapRotation.value.setFromMatrix4(KC.makeRotationFromEuler(C)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Ox),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function g(M,x,w,H){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*w,M.scale.value=H*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function S(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function v(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function T(M,x,w){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.retroreflectivity>0&&(M.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function R(M,x){x.matcap&&(M.matcap.value=x.matcap)}function O(M,x){const w=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function JC(o,e,i,s){let u={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(C,U){const D=U.program;s.uniformBlockBinding(C,D)}function m(C,U){let D=u[C.id];D===void 0&&(M(C),D=S(C),u[C.id]=D,C.addEventListener("dispose",w));const I=U.program;s.updateUBOMapping(C,I);const E=e.render.frame;f[C.id]!==E&&(_(C),f[C.id]=E)}function S(C){const U=v();C.__bindingPointIndex=U;const D=o.createBuffer(),I=C.__size,E=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,I,E),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,D),D}function v(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const U=u[C.id],D=C.uniforms,I=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let E=0,L=D.length;E<L;E++){const N=D[E];if(Array.isArray(N))for(let z=0,G=N.length;z<G;z++)T(N[z],E,z,I);else T(N,E,0,I)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function T(C,U,D,I){if(O(C,U,D,I)===!0){const E=C.__offset,L=C.value;if(Array.isArray(L)){let N=0;for(let z=0;z<L.length;z++){const G=L[z],Y=x(G);R(G,C.__data,N),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(L,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,E,C.__data)}}function R(C,U,D){typeof C=="number"||typeof C=="boolean"?U[0]=C:C.isMatrix3?(U[0]=C.elements[0],U[1]=C.elements[1],U[2]=C.elements[2],U[3]=0,U[4]=C.elements[3],U[5]=C.elements[4],U[6]=C.elements[5],U[7]=0,U[8]=C.elements[6],U[9]=C.elements[7],U[10]=C.elements[8],U[11]=0):ArrayBuffer.isView(C)?U.set(new C.constructor(C.buffer,C.byteOffset,U.length)):C.toArray(U,D)}function O(C,U,D,I){const E=C.value,L=U+"_"+D;if(I[L]===void 0)return typeof E=="number"||typeof E=="boolean"?I[L]=E:ArrayBuffer.isView(E)?I[L]=E.slice():I[L]=E.clone(),!0;{const N=I[L];if(typeof E=="number"||typeof E=="boolean"){if(N!==E)return I[L]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(N.equals(E)===!1)return N.copy(E),!0}}return!1}function M(C){const U=C.uniforms;let D=0;const I=16;for(let L=0,N=U.length;L<N;L++){const z=Array.isArray(U[L])?U[L]:[U[L]];for(let G=0,Y=z.length;G<Y;G++){const V=z[G],Q=Array.isArray(V.value)?V.value:[V.value];for(let X=0,W=Q.length;X<W;X++){const nt=Q[X],it=x(nt),ht=D%I,vt=ht%it.boundary,kt=ht+vt;D+=vt,kt!==0&&I-kt<it.storage&&(D+=I-kt),V.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=D,D+=it.storage}}}const E=D%I;return E>0&&(D+=I-E),C.__size=D,C.__cache={},this}function x(C){const U={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(U.boundary=4,U.storage=4):C.isVector2?(U.boundary=8,U.storage=8):C.isVector3||C.isColor?(U.boundary=16,U.storage=12):C.isVector4?(U.boundary=16,U.storage=16):C.isMatrix3?(U.boundary=48,U.storage=48):C.isMatrix4?(U.boundary=64,U.storage=64):C.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(U.boundary=16,U.storage=C.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",C),U}function w(C){const U=C.target;U.removeEventListener("dispose",w);const D=d.indexOf(U.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(u[U.id]),delete u[U.id],delete f[U.id]}function H(){for(const C in u)o.deleteBuffer(u[C]);d=[],u={},f={}}return{bind:g,update:m,dispose:H}}const jC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let na=null;function $C(){return na===null&&(na=new XT(jC,16,16,Jr,la),na.name="DFG_LUT",na.minFilter=zn,na.magFilter=zn,na.wrapS=Na,na.wrapT=Na,na.generateMipmaps=!1,na.needsUpdate=!0),na}class Px{constructor(e={}){const{canvas:i=vT(),context:s=null,depth:u=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:m=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:T=hi}=e;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=d;const O=T,M=new Set([jp,Jp,Qp]),x=new Set([hi,oa,_l,vl,Zp,Kp]),w=new Uint32Array(4),H=new Int32Array(4),C=new at;let U=null,D=null;const I=[],E=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let z=!1,G=null,Y=null,V=null,Q=null;this._outputColorSpace=Jn;let X=0,W=0,nt=null,it=-1,ht=null;const vt=new rn,kt=new rn;let It=null;const F=new Oe(0);let pt=0,bt=i.width,Z=i.height,ct=1,Et=null,Ct=null;const mt=new rn(0,0,bt,Z),At=new rn(0,0,bt,Z);let be=!1;const le=new im;let pe=!1,ce=!1;const jt=new en,ne=new at,Be=new rn,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function Ge(){return nt===null?ct:1}let K=s;function nn(b,k){return i.getContext(b,k)}let Ie,P,y,et,ut,gt,Rt,Ut,_t,yt,Dt,$t,zt,Pt,Xt,ie,ue,J,wt,Mt,Nt,Vt,Tt;try{const b={alpha:!0,depth:u,stencil:f,antialias:h,premultipliedAlpha:g,preserveDrawingBuffer:m,powerPreference:S,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${qp}`),i.addEventListener("webglcontextlost",we,!1),i.addEventListener("webglcontextrestored",fe,!1),i.addEventListener("webglcontextcreationerror",ti,!1),K===null){const k="webgl2";if(K=nn(k,b),K===null)throw nn(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(b){throw i.removeEventListener("webglcontextlost",we,!1),i.removeEventListener("webglcontextrestored",fe,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),ze("WebGLRenderer: "+b.message),b}function Jt(){Ie=new $A(K),Ie.init(),Nt=new kC(K,Ie),P=new XA(K,Ie,e,Nt),y=new VC(K,Ie),P.reversedDepthBuffer&&_&&y.buffers.depth.setReversed(!0),Y=K.createFramebuffer(),V=K.createFramebuffer(),Q=K.createFramebuffer(),et=new nR(K),ut=new CC,gt=new XC(K,Ie,y,ut,P,Nt,et),Rt=new jA(N),Ut=new ab(K),Vt=new GA(K,Ut),_t=new tR(K,Ut,et,Vt),yt=new aR(K,_t,Ut,Vt,et),J=new iR(K,P,gt),Xt=new kA(ut),Dt=new RC(N,Rt,Ie,P,Vt,Xt),$t=new QC(N,ut),zt=new DC,Pt=new IC(Ie),ue=new HA(N,Rt,y,yt,R,g),ie=new GC(N,yt,P),Tt=new JC(K,et,P,y),wt=new VA(K,Ie,et),Mt=new eR(K,Ie,et),et.programs=Dt.programs,N.capabilities=P,N.extensions=Ie,N.properties=ut,N.renderLists=zt,N.shadowMap=ie,N.state=y,N.info=et}O!==hi&&(L=new sR(O,i.width,i.height,h,u,f));const Gt=new ZC(N,K);this.xr=Gt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const b=Ie.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ie.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(b){b!==void 0&&(ct=b,this.setSize(bt,Z,!1))},this.getSize=function(b){return b.set(bt,Z)},this.setSize=function(b,k,dt=!0){if(Gt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}bt=b,Z=k,i.width=Math.floor(b*ct),i.height=Math.floor(k*ct),dt===!0&&(i.style.width=b+"px",i.style.height=k+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(bt*ct,Z*ct).floor()},this.setDrawingBufferSize=function(b,k,dt){bt=b,Z=k,ct=dt,i.width=Math.floor(b*dt),i.height=Math.floor(k*dt),this.setViewport(0,0,b,k)},this.setEffects=function(b){if(O===hi){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let k=0;k<b.length;k++)if(b[k].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(vt)},this.getViewport=function(b){return b.copy(mt)},this.setViewport=function(b,k,dt,st){b.isVector4?mt.set(b.x,b.y,b.z,b.w):mt.set(b,k,dt,st),y.viewport(vt.copy(mt).multiplyScalar(ct).round())},this.getScissor=function(b){return b.copy(At)},this.setScissor=function(b,k,dt,st){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,k,dt,st),y.scissor(kt.copy(At).multiplyScalar(ct).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(b){y.setScissorTest(be=b)},this.setOpaqueSort=function(b){Et=b},this.setTransparentSort=function(b){Ct=b},this.getClearColor=function(b){return b.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,dt=!0){let st=0;if(b){let ot=!1;if(nt!==null){const Bt=nt.texture.format;ot=M.has(Bt)}if(ot){const Bt=nt.texture.type,Wt=x.has(Bt),Lt=ue.getClearColor(),Zt=ue.getClearAlpha(),Kt=Lt.r,re=Lt.g,de=Lt.b;Wt?(w[0]=Kt,w[1]=re,w[2]=de,w[3]=Zt,K.clearBufferuiv(K.COLOR,0,w)):(H[0]=Kt,H[1]=re,H[2]=de,H[3]=Zt,K.clearBufferiv(K.COLOR,0,H))}else st|=K.COLOR_BUFFER_BIT}k&&(st|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),dt&&(st|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&K.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),G=b},this.dispose=function(){i.removeEventListener("webglcontextlost",we,!1),i.removeEventListener("webglcontextrestored",fe,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),ue.dispose(),zt.dispose(),Pt.dispose(),ut.dispose(),Rt.dispose(),yt.dispose(),Vt.dispose(),Tt.dispose(),Dt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",Mr),Gt.removeEventListener("sessionend",Fa),Gi.stop()};function we(b){b.preventDefault(),Hv("WebGLRenderer: Context Lost."),z=!0}function fe(){Hv("WebGLRenderer: Context Restored."),z=!1;const b=et.autoReset,k=ie.enabled,dt=ie.autoUpdate,st=ie.needsUpdate,ot=ie.type;Jt(),et.autoReset=b,ie.enabled=k,ie.autoUpdate=dt,ie.needsUpdate=st,ie.type=ot}function ti(b){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function mi(b){const k=b.target;k.removeEventListener("dispose",mi),Oc(k)}function Oc(b){$r(b),ut.remove(b)}function $r(b){const k=ut.get(b).programs;k!==void 0&&(k.forEach(function(dt){Dt.releaseProgram(dt)}),b.isShaderMaterial&&Dt.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,dt,st,ot,Bt){k===null&&(k=sn);const Wt=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,Lt=mo(b,k,dt,st,ot);y.setMaterial(st,Wt);let Zt=dt.index,Kt=1;if(st.wireframe===!0){if(Zt=_t.getWireframeAttribute(dt),Zt===void 0)return;Kt=2}const re=dt.drawRange,de=dt.attributes.position;let qt=re.start*Kt,Me=(re.start+re.count)*Kt;Bt!==null&&(qt=Math.max(qt,Bt.start*Kt),Me=Math.min(Me,(Bt.start+Bt.count)*Kt)),Zt!==null?(qt=Math.max(qt,0),Me=Math.min(Me,Zt.count)):de!=null&&(qt=Math.max(qt,0),Me=Math.min(Me,de.count));const ve=Me-qt;if(ve<0||ve===1/0)return;Vt.setup(ot,st,Lt,dt,Zt);let Ze,Ve=wt;if(Zt!==null&&(Ze=Ut.get(Zt),Ve=Mt,Ve.setIndex(Ze)),ot.isMesh)st.wireframe===!0?(y.setLineWidth(st.wireframeLinewidth*Ge()),Ve.setMode(K.LINES)):Ve.setMode(K.TRIANGLES);else if(ot.isLine){let vn=st.linewidth;vn===void 0&&(vn=1),y.setLineWidth(vn*Ge()),ot.isLineSegments?Ve.setMode(K.LINES):ot.isLineLoop?Ve.setMode(K.LINE_LOOP):Ve.setMode(K.LINE_STRIP)}else ot.isPoints?Ve.setMode(K.POINTS):ot.isSprite&&Ve.setMode(K.TRIANGLES);if(ot.isBatchedMesh)if(Ie.get("WEBGL_multi_draw"))Ve.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{const vn=ot._multiDrawStarts,Ft=ot._multiDrawCounts,on=ot._multiDrawCount,De=Zt?Ut.get(Zt).bytesPerElement:1,Fn=ut.get(st).currentProgram.getUniforms();for(let ei=0;ei<on;ei++)Fn.setValue(K,"_gl_DrawID",ei),Ve.render(vn[ei]/De,Ft[ei])}else if(ot.isInstancedMesh)Ve.renderInstances(qt,ve,ot.count);else if(dt.isInstancedBufferGeometry){const vn=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Ft=Math.min(dt.instanceCount,vn);Ve.renderInstances(qt,ve,Ft)}else Ve.render(qt,ve)};function xr(b,k,dt,st){G!==null&&b.isNodeMaterial&&G.setObject(st,b),pe===!0&&Xt.setState(b,dt,!1),b.transparent===!0&&b.side===Ua&&b.forceSinglePass===!1?(b.side=jn,b.needsUpdate=!0,yr(b,k,st),b.side=Ia,b.needsUpdate=!0,yr(b,k,st),b.side=Ua):yr(b,k,st)}this.compile=function(b,k,dt=null){dt===null&&(dt=b),G!==null&&G.renderStart(b,k,dt),D=Pt.get(dt),D.init(k),E.push(D),dt.traverseVisible(function(ot){ot.isLight&&ot.layers.test(k.layers)&&(D.pushLight(ot),ot.castShadow&&D.pushShadow(ot))}),b!==dt&&b.traverseVisible(function(ot){ot.isLight&&ot.layers.test(k.layers)&&(D.pushLight(ot),ot.castShadow&&D.pushShadow(ot))}),D.setupLights(),G!==null&&G.updateLights(D.state.lightsArray),ce=this.localClippingEnabled,pe=Xt.init(this.clippingPlanes,ce),pe===!0&&Xt.setGlobalState(this.clippingPlanes,k),G!==null&&ie.render(D.state.shadowsArray,dt,k);const st=new Set;return b.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;const Bt=ot.material;if(Bt)if(Array.isArray(Bt))for(let Wt=0;Wt<Bt.length;Wt++){const Lt=Bt[Wt];xr(Lt,dt,k,ot),st.add(Lt)}else xr(Bt,dt,k,ot),st.add(Bt)}),D=E.pop(),G!==null&&G.renderEnd(),st},this.compileAsync=function(b,k,dt=null){const st=this.compile(b,k,dt);return new Promise(ot=>{function Bt(){if(st.forEach(function(Wt){const Zt=ut.get(Wt).currentProgram;(Zt===void 0||Zt.isReady())&&st.delete(Wt)}),st.size===0){ot(b);return}setTimeout(Bt,10)}Ie.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Ba=null;function fa(b){Ba&&Ba(b)}function Mr(){Gi.stop()}function Fa(){Gi.start()}const Gi=new Rx;Gi.setAnimationLoop(fa),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(b){Ba=b,Gt.setAnimationLoop(b),b===null?Gi.stop():Gi.start()},Gt.addEventListener("sessionstart",Mr),Gt.addEventListener("sessionend",Fa),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;G!==null&&G.renderStart(b,k);const dt=Gt.enabled===!0&&Gt.isPresenting===!0,st=L!==null&&(nt===null||dt)&&L.begin(N,nt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(k),k=Gt.getCamera()),b.isScene===!0&&b.onBeforeRender(N,b,k,nt),D=Pt.get(b,E.length),D.init(k),D.state.textureUnits=gt.getTextureUnits(),E.push(D),jt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),le.setFromProjectionMatrix(jt,ra,k.reversedDepth),ce=this.localClippingEnabled,pe=Xt.init(this.clippingPlanes,ce),U=zt.get(b,I.length),U.init(),I.push(U),Gt.enabled===!0&&Gt.isPresenting===!0){const Wt=N.xr.getDepthSensingMesh();Wt!==null&&uo(Wt,k,-1/0,N.sortObjects)}uo(b,k,0,N.sortObjects),U.finish(),G!==null&&G.updateLights(D.state.lightsArray),N.sortObjects===!0&&U.sort(Et,Ct),Pe=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,Pe&&ue.addToRenderList(U,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pe===!0&&Xt.beginShadows();const ot=D.state.shadowsArray;if(ie.render(ot,b,k),pe===!0&&Xt.endShadows(),(st&&L.hasRenderPass())===!1){const Wt=U.opaque,Lt=U.transmissive;if(D.setupLights(),k.isArrayCamera){const Zt=k.cameras;if(Lt.length>0)for(let Kt=0,re=Zt.length;Kt<re;Kt++){const de=Zt[Kt];ts(Wt,Lt,b,de)}Pe&&ue.render(b);for(let Kt=0,re=Zt.length;Kt<re;Kt++){const de=Zt[Kt];co(U,b,de,de.viewport)}}else Lt.length>0&&ts(Wt,Lt,b,k),Pe&&ue.render(b),co(U,b,k)}nt!==null&&W===0&&(gt.updateMultisampleRenderTarget(nt),gt.updateRenderTargetMipmap(nt)),st&&L.end(N),b.isScene===!0&&b.onAfterRender(N,b,k),Vt.resetDefaultState(),it=-1,ht=null,E.pop(),E.length>0?(D=E[E.length-1],gt.setTextureUnits(D.state.textureUnits),pe===!0&&Xt.setGlobalState(N.clippingPlanes,D.state.camera)):D=null,I.pop(),I.length>0?U=I[I.length-1]:U=null,G!==null&&G.renderEnd()};function uo(b,k,dt,st){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)dt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLightProbeGrid)D.pushLightProbeGrid(b);else if(b.isLight)D.pushLight(b),b.castShadow&&D.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(le)){st&&Be.setFromMatrixPosition(b.matrixWorld).applyMatrix4(jt);const Wt=yt.update(b),Lt=b.material;Lt.visible&&U.push(b,Wt,Lt,dt,Be.z,null,k)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(le))){const Wt=yt.update(b),Lt=b.material;if(st&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Be.copy(b.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),Be.copy(Wt.boundingSphere.center)),Be.applyMatrix4(b.matrixWorld).applyMatrix4(jt)),Array.isArray(Lt)){const Zt=Wt.groups;for(let Kt=0,re=Zt.length;Kt<re;Kt++){const de=Zt[Kt],qt=Lt[de.materialIndex];qt&&qt.visible&&U.push(b,Wt,qt,dt,Be.z,de,k)}}else Lt.visible&&U.push(b,Wt,Lt,dt,Be.z,null,k)}}const Bt=b.children;for(let Wt=0,Lt=Bt.length;Wt<Lt;Wt++)uo(Bt[Wt],k,dt,st)}function co(b,k,dt,st){const{opaque:ot,transmissive:Bt,transparent:Wt}=b;D.setupLightsView(dt),pe===!0&&Xt.setGlobalState(N.clippingPlanes,dt),st&&y.viewport(vt.copy(st)),ot.length>0&&Vi(ot,k,dt),Bt.length>0&&Vi(Bt,k,dt),Wt.length>0&&Vi(Wt,k,dt),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ts(b,k,dt,st){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[st.id]===void 0){const qt=Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[st.id]=new Fi(1,1,{generateMipmaps:!0,type:qt?la:hi,minFilter:Zr,samples:Math.max(4,P.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ue.workingColorSpace})}const Bt=D.state.transmissionRenderTarget[st.id],Wt=st.viewport||vt;Bt.setSize(Wt.z*N.transmissionResolutionScale,Wt.w*N.transmissionResolutionScale);const Lt=N.getRenderTarget(),Zt=N.getActiveCubeFace(),Kt=N.getActiveMipmapLevel();N.setRenderTarget(Bt),N.getClearColor(F),pt=N.getClearAlpha(),pt<1&&N.setClearColor(16777215,.5),N.clear(),Pe&&ue.render(dt);const re=N.toneMapping;N.toneMapping=sa;const de=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),D.setupLightsView(st),pe===!0&&Xt.setGlobalState(N.clippingPlanes,st),Vi(b,dt,st),gt.updateMultisampleRenderTarget(Bt),gt.updateRenderTargetMipmap(Bt),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Me=0,ve=k.length;Me<ve;Me++){const Ze=k[Me],{object:Ve,geometry:vn,material:Ft,group:on}=Ze;if(Ft.side===Ua&&Ve.layers.test(st.layers)){const De=Ft.side;Ft.side=jn,Ft.needsUpdate=!0,bl(Ve,dt,st,vn,Ft,on),Ft.side=De,Ft.needsUpdate=!0,qt=!0}}qt===!0&&(gt.updateMultisampleRenderTarget(Bt),gt.updateRenderTargetMipmap(Bt))}N.setRenderTarget(Lt,Zt,Kt),N.setClearColor(F,pt),de!==void 0&&(st.viewport=de),N.toneMapping=re}function Vi(b,k,dt){const st=k.isScene===!0?k.overrideMaterial:null;for(let ot=0,Bt=b.length;ot<Bt;ot++){const Wt=b[ot],{object:Lt,geometry:Zt,group:Kt}=Wt;let re=Wt.material;re.allowOverride===!0&&st!==null&&(re=st),Lt.layers.test(dt.layers)&&bl(Lt,k,dt,Zt,re,Kt)}}function bl(b,k,dt,st,ot,Bt){G!==null&&ot.isNodeMaterial&&G.setObject(b,ot),b.onBeforeRender(N,k,dt,st,ot,Bt),b.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ot.onBeforeRender(N,k,dt,st,b,Bt),ot.transparent===!0&&ot.side===Ua&&ot.forceSinglePass===!1?(ot.side=jn,ot.needsUpdate=!0,N.renderBufferDirect(dt,k,st,ot,b,Bt),ot.side=Ia,ot.needsUpdate=!0,N.renderBufferDirect(dt,k,st,ot,b,Bt),ot.side=Ua):N.renderBufferDirect(dt,k,st,ot,b,Bt),b.onAfterRender(N,k,dt,st,ot,Bt)}function yr(b,k,dt){k.isScene!==!0&&(k=sn);const st=ut.get(b),ot=D.state.lights,Bt=D.state.shadowsArray,Wt=ot.state.version,Lt=Dt.getParameters(b,ot.state,Bt,k,dt,D.state.lightProbeGridArray),Zt=Dt.getProgramCacheKey(Lt);let Kt=st.programs;st.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,st.fog=k.fog;const re=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;st.envMap=Rt.get(b.envMap||st.environment,re),st.envMapRotation=st.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Kt===void 0&&(b.addEventListener("dispose",mi),Kt=new Map,st.programs=Kt);let de=Kt.get(Zt);if(de!==void 0){if(st.currentProgram===de&&st.lightsStateVersion===Wt)return ho(b,Lt),de}else Lt.uniforms=Dt.getUniforms(b),G!==null&&b.isNodeMaterial&&G.build(b,dt,Lt),b.onBeforeCompile(Lt,N),de=Dt.acquireProgram(Lt,Zt),Kt.set(Zt,de),st.uniforms=Lt.uniforms;const qt=st.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qt.clippingPlanes=Xt.uniform),ho(b,Lt),st.needsLights=Rl(b),st.lightsStateVersion=Wt,st.needsLights&&(qt.ambientLightColor.value=ot.state.ambient,qt.lightProbe.value=ot.state.probe,qt.sunLights.value=ot.state.sun,qt.sunLightShadows.value=ot.state.sunShadow,qt.directionalLights.value=ot.state.directional,qt.directionalLightShadows.value=ot.state.directionalShadow,qt.spotLights.value=ot.state.spot,qt.spotLightShadows.value=ot.state.spotShadow,qt.rectAreaLights.value=ot.state.rectArea,qt.ltc_1.value=ot.state.rectAreaLTC1,qt.ltc_2.value=ot.state.rectAreaLTC2,qt.pointLights.value=ot.state.point,qt.pointLightShadows.value=ot.state.pointShadow,qt.hemisphereLights.value=ot.state.hemi,qt.sunShadowMatrix.value=ot.state.sunShadowMatrix,qt.sunShadowCascade.value=ot.state.sunShadowCascade,qt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,qt.spotLightMatrix.value=ot.state.spotLightMatrix,qt.spotLightMap.value=ot.state.spotLightMap,qt.pointShadowMatrix.value=ot.state.pointShadowMatrix),st.lightProbeGrid=D.state.lightProbeGridArray.length>0,st.currentProgram=de,st.uniformsList=null,de}function fo(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=yc.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function ho(b,k){const dt=ut.get(b);dt.outputColorSpace=k.outputColorSpace,dt.batching=k.batching,dt.batchingColor=k.batchingColor,dt.instancing=k.instancing,dt.instancingColor=k.instancingColor,dt.instancingMorph=k.instancingMorph,dt.skinning=k.skinning,dt.morphTargets=k.morphTargets,dt.morphNormals=k.morphNormals,dt.morphColors=k.morphColors,dt.morphTargetsCount=k.morphTargetsCount,dt.numClippingPlanes=k.numClippingPlanes,dt.numIntersection=k.numClipIntersection,dt.vertexAlphas=k.vertexAlphas,dt.vertexTangents=k.vertexTangents,dt.toneMapping=k.toneMapping}function po(b,k){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;C.setFromMatrixPosition(k.matrixWorld);for(let dt=0,st=b.length;dt<st;dt++){const ot=b[dt];if(ot.texture!==null&&ot.boundingBox.containsPoint(C))return ot}return null}function mo(b,k,dt,st,ot){k.isScene!==!0&&(k=sn),gt.resetTextureUnits();const Bt=k.fog,Wt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?k.environment:null,Lt=nt===null?N.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Ue.workingColorSpace,Zt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Kt=Rt.get(st.envMap||Wt,Zt),re=st.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,de=!!dt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),qt=!!dt.morphAttributes.position,Me=!!dt.morphAttributes.normal,ve=!!dt.morphAttributes.color;let Ze=sa;st.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ze=N.toneMapping);const Ve=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,vn=Ve!==void 0?Ve.length:0,Ft=ut.get(st),on=D.state.lights;if(pe===!0&&(ce===!0||b!==ht)){const Ae=b===ht&&st.id===it;Xt.setState(st,b,Ae)}let De=!1;st.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==on.state.version||Ft.outputColorSpace!==Lt||ot.isBatchedMesh&&Ft.batching===!1||!ot.isBatchedMesh&&Ft.batching===!0||ot.isBatchedMesh&&Ft.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&Ft.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&Ft.instancing===!1||!ot.isInstancedMesh&&Ft.instancing===!0||ot.isSkinnedMesh&&Ft.skinning===!1||!ot.isSkinnedMesh&&Ft.skinning===!0||ot.isInstancedMesh&&Ft.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Ft.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Ft.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Ft.instancingMorph===!1&&ot.morphTexture!==null||Ft.envMap!==Kt||st.fog===!0&&Ft.fog!==Bt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Xt.numPlanes||Ft.numIntersection!==Xt.numIntersection)||Ft.vertexAlphas!==re||Ft.vertexTangents!==de||Ft.morphTargets!==qt||Ft.morphNormals!==Me||Ft.morphColors!==ve||Ft.toneMapping!==Ze||Ft.morphTargetsCount!==vn||!!Ft.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(De=!0):(De=!0,Ft.__version=st.version);let Fn=Ft.currentProgram;De===!0&&(Fn=yr(st,k,ot),G&&st.isNodeMaterial&&G.onUpdateProgram(st,Fn,Ft));let ei=!1,Xi=!1,Se=!1;const Fe=Fn.getUniforms(),Je=Ft.uniforms;if(y.useProgram(Fn.program)&&(ei=!0,Xi=!0,Se=!0),st.id!==it&&(it=st.id,Xi=!0),Ft.needsLights){const Ae=po(D.state.lightProbeGridArray,ot);Ft.lightProbeGrid!==Ae&&(Ft.lightProbeGrid=Ae,Xi=!0)}if(ei||ht!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Fe.setValue(K,"projectionMatrix",b.projectionMatrix),Fe.setValue(K,"viewMatrix",b.matrixWorldInverse);const ln=Fe.map.cameraPosition;ln!==void 0&&ln.setValue(K,ne.setFromMatrixPosition(b.matrixWorld)),P.logarithmicDepthBuffer&&Fe.setValue(K,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Fe.setValue(K,"isOrthographic",b.isOrthographicCamera===!0),ht!==b&&(ht=b,Xi=!0,Se=!0)}if(Ft.needsLights&&(on.state.sunShadowMap.length>0&&Fe.setValue(K,"sunShadowMap",on.state.sunShadowMap,gt),on.state.directionalShadowMap.length>0&&Fe.setValue(K,"directionalShadowMap",on.state.directionalShadowMap,gt),on.state.spotShadowMap.length>0&&Fe.setValue(K,"spotShadowMap",on.state.spotShadowMap,gt),on.state.pointShadowMap.length>0&&Fe.setValue(K,"pointShadowMap",on.state.pointShadowMap,gt)),ot.isSkinnedMesh){Fe.setOptional(K,ot,"bindMatrix"),Fe.setOptional(K,ot,"bindMatrixInverse");const Ae=ot.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),Fe.setValue(K,"boneTexture",Ae.boneTexture,gt))}ot.isBatchedMesh&&(Fe.setOptional(K,ot,"batchingTexture"),Fe.setValue(K,"batchingTexture",ot._matricesTexture,gt),Fe.setOptional(K,ot,"batchingIdTexture"),Fe.setValue(K,"batchingIdTexture",ot._indirectTexture,gt),Fe.setOptional(K,ot,"batchingColorTexture"),ot._colorsTexture!==null&&Fe.setValue(K,"batchingColorTexture",ot._colorsTexture,gt));const ni=dt.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&J.update(ot,dt,Fn),(Xi||Ft.receiveShadow!==ot.receiveShadow)&&(Ft.receiveShadow=ot.receiveShadow,Fe.setValue(K,"receiveShadow",ot.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&k.environment!==null&&(Je.envMapIntensity.value=k.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=$C()),Xi){if(Fe.setValue(K,"toneMappingExposure",N.toneMappingExposure),Ft.needsLights&&Al(Je,Se),Bt&&st.fog===!0&&$t.refreshFogUniforms(Je,Bt),$t.refreshMaterialUniforms(Je,st,ct,Z,D.state.transmissionRenderTarget[b.id]),Ft.needsLights&&Ft.lightProbeGrid){const Ae=Ft.lightProbeGrid;Je.probesSH.value=Ae.texture,Je.probesMin.value.copy(Ae.boundingBox.min),Je.probesMax.value.copy(Ae.boundingBox.max),Je.probesResolution.value.copy(Ae.resolution)}yc.upload(K,fo(Ft),Je,gt)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(yc.upload(K,fo(Ft),Je,gt),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Fe.setValue(K,"center",ot.center),Fe.setValue(K,"modelViewMatrix",ot.modelViewMatrix),Fe.setValue(K,"normalMatrix",ot.normalMatrix),Fe.setValue(K,"modelMatrix",ot.matrixWorld),st.uniformsGroups!==void 0){const Ae=st.uniformsGroups;for(let ln=0,da=Ae.length;ln<da;ln++){const Cl=Ae[ln];Tt.update(Cl,Fn),Tt.bind(Cl,Fn)}}return Fn}function Al(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.sunLights.needsUpdate=k,b.sunLightShadows.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Rl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(b,k,dt){const st=ut.get(b);st.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),ut.get(b.texture).__webglTexture=k,ut.get(b.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:dt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const dt=ut.get(b);dt.__webglFramebuffer=k,dt.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,dt=0){nt=b,X=k,W=dt;let st=null,ot=!1,Bt=!1;if(b){const Lt=ut.get(b);if(Lt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(K.FRAMEBUFFER,Lt.__webglFramebuffer),vt.copy(b.viewport),kt.copy(b.scissor),It=b.scissorTest,y.viewport(vt),y.scissor(kt),y.setScissorTest(It),it=-1;return}else if(Lt.__webglFramebuffer===void 0)gt.setupRenderTarget(b);else if(Lt.__hasExternalTextures)gt.rebindTextures(b,ut.get(b.texture).__webglTexture,ut.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const re=b.depthTexture;if(Lt.__boundDepthTexture!==re){if(re!==null&&ut.has(re)&&(b.width!==re.image.width||b.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(b)}}const Zt=b.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Bt=!0);const Kt=ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Kt[k])?st=Kt[k][dt]:st=Kt[k],ot=!0):b.samples>0&&gt.useMultisampledRTT(b)===!1?st=ut.get(b).__webglMultisampledFramebuffer:Array.isArray(Kt)?st=Kt[dt]:st=Kt,vt.copy(b.viewport),kt.copy(b.scissor),It=b.scissorTest}else vt.copy(mt).multiplyScalar(ct).floor(),kt.copy(At).multiplyScalar(ct).floor(),It=be;if(dt!==0&&(st=Y),y.bindFramebuffer(K.FRAMEBUFFER,st)&&y.drawBuffers(b,st),y.viewport(vt),y.scissor(kt),y.setScissorTest(It),ot){const Lt=ut.get(b.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+k,Lt.__webglTexture,dt)}else if(Bt){const Lt=k;for(let Zt=0;Zt<b.textures.length;Zt++){const Kt=ut.get(b.textures[Zt]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Zt,Kt.__webglTexture,dt,Lt)}}else if(b!==null&&dt!==0){const Lt=ut.get(b.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Lt.__webglTexture,dt)}it=-1};function gi(b){const k=ut.get(b);return(k.__readFormat!==b.format||k.__readType!==b.type)&&(k.__readFormat=b.format,k.__readType=b.type,k.__formatReadable=P.textureFormatReadable(b.format),k.__typeReadable=P.textureTypeReadable(b.type)),k}this.readRenderTargetPixels=function(b,k,dt,st,ot,Bt,Wt,Lt=0){if(!(b&&b.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Wt!==void 0&&(Zt=Zt[Wt]),Zt){y.bindFramebuffer(K.FRAMEBUFFER,Zt);try{const Kt=b.textures[Lt],re=Kt.format,de=Kt.type;b.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Lt);const qt=gi(Kt);if(qt.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qt.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-st&&dt>=0&&dt<=b.height-ot&&K.readPixels(k,dt,st,ot,Nt.convert(re),Nt.convert(de),Bt)}finally{const Kt=nt!==null?ut.get(nt).__webglFramebuffer:null;y.bindFramebuffer(K.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(b,k,dt,st,ot,Bt,Wt,Lt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Wt!==void 0&&(Zt=Zt[Wt]),Zt)if(k>=0&&k<=b.width-st&&dt>=0&&dt<=b.height-ot){y.bindFramebuffer(K.FRAMEBUFFER,Zt);const Kt=b.textures[Lt],re=Kt.format,de=Kt.type;b.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Lt);const qt=gi(Kt);if(qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,Me),K.bufferData(K.PIXEL_PACK_BUFFER,Bt.byteLength,K.STREAM_READ),K.readPixels(k,dt,st,ot,Nt.convert(re),Nt.convert(de),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const ve=nt!==null?ut.get(nt).__webglFramebuffer:null;y.bindFramebuffer(K.FRAMEBUFFER,ve);const Ze=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await ST(K,Ze,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,Me),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Bt),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(Me),K.deleteSync(Ze),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,dt=0){const st=Math.pow(2,-dt),ot=Math.floor(b.image.width*st),Bt=Math.floor(b.image.height*st),Wt=k!==null?k.x:0,Lt=k!==null?k.y:0;gt.setTexture2D(b,0),K.copyTexSubImage2D(K.TEXTURE_2D,dt,0,0,Wt,Lt,ot,Bt),y.unbindTexture()},this.copyTextureToTexture=function(b,k,dt=null,st=null,ot=0,Bt=0){let Wt,Lt,Zt,Kt,re,de,qt,Me,ve;const Ze=b.isCompressedTexture?b.mipmaps[Bt]:b.image;if(dt!==null)Wt=dt.max.x-dt.min.x,Lt=dt.max.y-dt.min.y,Zt=dt.isBox3?dt.max.z-dt.min.z:1,Kt=dt.min.x,re=dt.min.y,de=dt.isBox3?dt.min.z:0;else{const Je=Math.pow(2,-ot);Wt=Math.floor(Ze.width*Je),Lt=Math.floor(Ze.height*Je),b.isDataArrayTexture?Zt=Ze.depth:b.isData3DTexture?Zt=Math.floor(Ze.depth*Je):Zt=1,Kt=0,re=0,de=0}st!==null?(qt=st.x,Me=st.y,ve=st.z):(qt=0,Me=0,ve=0);const Ve=Nt.convert(k.format),vn=Nt.convert(k.type);let Ft;k.isData3DTexture?(gt.setTexture3D(k,0),Ft=K.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(gt.setTexture2DArray(k,0),Ft=K.TEXTURE_2D_ARRAY):(gt.setTexture2D(k,0),Ft=K.TEXTURE_2D),y.activeTexture(K.TEXTURE0),y.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,k.flipY),y.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),y.pixelStorei(K.UNPACK_ALIGNMENT,k.unpackAlignment);const on=y.getParameter(K.UNPACK_ROW_LENGTH),De=y.getParameter(K.UNPACK_IMAGE_HEIGHT),Fn=y.getParameter(K.UNPACK_SKIP_PIXELS),ei=y.getParameter(K.UNPACK_SKIP_ROWS),Xi=y.getParameter(K.UNPACK_SKIP_IMAGES);y.pixelStorei(K.UNPACK_ROW_LENGTH,Ze.width),y.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ze.height),y.pixelStorei(K.UNPACK_SKIP_PIXELS,Kt),y.pixelStorei(K.UNPACK_SKIP_ROWS,re),y.pixelStorei(K.UNPACK_SKIP_IMAGES,de);const Se=b.isDataArrayTexture||b.isData3DTexture,Fe=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const Je=ut.get(b),ni=ut.get(k),Ae=ut.get(Je.__renderTarget),ln=ut.get(ni.__renderTarget);y.bindFramebuffer(K.READ_FRAMEBUFFER,Ae.__webglFramebuffer),y.bindFramebuffer(K.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let da=0;da<Zt;da++)Se&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ut.get(b).__webglTexture,ot,de+da),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ut.get(k).__webglTexture,Bt,ve+da)),K.blitFramebuffer(Kt,re,Wt,Lt,qt,Me,Wt,Lt,K.DEPTH_BUFFER_BIT,K.NEAREST);y.bindFramebuffer(K.READ_FRAMEBUFFER,null),y.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(ot!==0||b.isRenderTargetTexture||ut.has(b)){const Je=ut.get(b),ni=ut.get(k);y.bindFramebuffer(K.READ_FRAMEBUFFER,V),y.bindFramebuffer(K.DRAW_FRAMEBUFFER,Q);for(let Ae=0;Ae<Zt;Ae++)Se?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Je.__webglTexture,ot,de+Ae):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Je.__webglTexture,ot),Fe?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ni.__webglTexture,Bt,ve+Ae):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,ni.__webglTexture,Bt),ot!==0?K.blitFramebuffer(Kt,re,Wt,Lt,qt,Me,Wt,Lt,K.COLOR_BUFFER_BIT,K.NEAREST):Fe?K.copyTexSubImage3D(Ft,Bt,qt,Me,ve+Ae,Kt,re,Wt,Lt):K.copyTexSubImage2D(Ft,Bt,qt,Me,Kt,re,Wt,Lt);y.bindFramebuffer(K.READ_FRAMEBUFFER,null),y.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Fe?b.isDataTexture||b.isData3DTexture?K.texSubImage3D(Ft,Bt,qt,Me,ve,Wt,Lt,Zt,Ve,vn,Ze.data):k.isCompressedArrayTexture?K.compressedTexSubImage3D(Ft,Bt,qt,Me,ve,Wt,Lt,Zt,Ve,Ze.data):K.texSubImage3D(Ft,Bt,qt,Me,ve,Wt,Lt,Zt,Ve,vn,Ze):b.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Bt,qt,Me,Wt,Lt,Ve,vn,Ze.data):b.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Bt,qt,Me,Ze.width,Ze.height,Ve,Ze.data):K.texSubImage2D(K.TEXTURE_2D,Bt,qt,Me,Wt,Lt,Ve,vn,Ze);y.pixelStorei(K.UNPACK_ROW_LENGTH,on),y.pixelStorei(K.UNPACK_IMAGE_HEIGHT,De),y.pixelStorei(K.UNPACK_SKIP_PIXELS,Fn),y.pixelStorei(K.UNPACK_SKIP_ROWS,ei),y.pixelStorei(K.UNPACK_SKIP_IMAGES,Xi),Bt===0&&k.generateMipmaps&&K.generateMipmap(Ft),y.unbindTexture()},this.initRenderTarget=function(b){ut.get(b).__webglFramebuffer===void 0&&gt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?gt.setTextureCube(b,0):b.isData3DTexture?gt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?gt.setTexture2DArray(b,0):gt.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){X=0,W=0,nt=null,y.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const DS=65,US=.5,NS=10,t3=1500,e3=750,n3=260,io=Math.PI/180,LS=1.08,OS=.864,PS=(o,e,i)=>Math.min(i,Math.max(e,o)),IS=o=>1-(1-o)**3,i3=[[1,1,1],[-1,1,1],[-1,1,-1],[1,1,-1],[1,-1,1],[-1,-1,1],[-1,-1,-1],[1,-1,-1]],a3=o=>{const e=new at(...o).normalize(),i=Math.abs(e.y)>.9?new at(0,0,1):new at(0,1,0),s=i.clone().sub(e.clone().multiplyScalar(i.dot(e))).normalize(),u=new at().crossVectors(s,e).normalize(),f=new en().makeBasis(u,s,e);return{normal:e,up:s,orientation:new Ri().setFromRotationMatrix(f)}},zS=i3.map(a3),r3=o=>{const e=new at(0,0,1);return new Ri().setFromUnitVectors(o.normal,e)},s3="#ffffff",BS=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const s=i.getContext("2d");if(!s)return null;s.font="700 200px dice-font, system-ui, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillStyle=e,s.shadowColor="rgba(0, 0, 0, 0.35)",s.shadowBlur=6,s.fillText(String(o),128,136);const u=new Sx(i);u.colorSpace=Jn;const f=new Uc({map:u,transparent:!0,side:Ia,depthWrite:!1});return new pi(new oo(OS,OS),f)},o3=o=>{const e=new ua().setFromQuaternion(o,"XYZ");return{x:e.x/io,y:e.y/io,z:e.z/io}};function l3({color:o="red",translucent:e=!0}){const i=te.useRef(null),s=te.useRef(null),u=te.useRef(null),f=te.useRef(null),d=te.useRef(null),h=te.useRef({x:0,y:0,z:0}),g=te.useRef({x:0,y:0,z:0}),m=te.useRef(null),S=te.useRef(!1),[v,_]=te.useState(!1),[T,R]=te.useState(!1),[O,M]=te.useState(null),[x,w]=te.useState(null),H=te.useCallback(N=>{h.current=N,s.current?.rotation.set(N.x*io,N.y*io,N.z*io)},[]),C=te.useCallback((N,z)=>{d.current&&cancelAnimationFrame(d.current);const G={...h.current},Y=performance.now();return new Promise(V=>{const Q=X=>{const W=Math.min((X-Y)/z,1),nt=IS(W);H({x:G.x+(N.x-G.x)*nt,y:G.y+(N.y-G.y)*nt,z:G.z+(N.z-G.z)*nt}),W<1?d.current=requestAnimationFrame(Q):(d.current=null,V())};d.current=requestAnimationFrame(Q)})},[H]),U=te.useCallback((N,z)=>{d.current&&cancelAnimationFrame(d.current);const G=s.current;if(!G)return Promise.resolve();const Y=G.quaternion.clone(),V=performance.now();return new Promise(Q=>{const X=W=>{const nt=Math.min((W-V)/z,1);G.quaternion.slerpQuaternions(Y,N,IS(nt)),h.current=o3(G.quaternion),nt<1?d.current=requestAnimationFrame(X):(d.current=null,Q())};d.current=requestAnimationFrame(X)})},[]),D=te.useCallback(async()=>{S.current=!0,_(!0),M(null),w(null);try{const N=await Xp(8),z=r3(zS[N-1]),G=h.current,Y=3+Math.floor(Math.random()*5),V=NS-Y,Q=Math.random()<.5?-1:1,X=Math.random()<.5?-1:1,W=Math.random()<.5?-1:1,nt={x:G.x+Q*360*Y,y:G.y+X*360*V,z:G.z+W*360*NS};await C(nt,t3),await U(z,e3),g.current=h.current,_(!1),S.current=!1,M(N)}catch(N){_(!1),S.current=!1,w(N instanceof Error?N.message:"Roll failed.")}},[U,C]),I=te.useCallback(N=>{if(S.current)return;const z=N.currentTarget.getBoundingClientRect();m.current={centerX:z.left+z.width/2,centerY:z.top+z.height/2,halfWidth:z.width/2,halfHeight:z.height/2,nx:0,ny:0},N.currentTarget.setPointerCapture(N.pointerId),R(!0)},[]),E=te.useCallback(N=>{const z=m.current;!z||S.current||(z.nx=PS((N.clientX-z.centerX)/z.halfWidth,-1,1),z.ny=PS((N.clientY-z.centerY)/z.halfHeight,-1,1),!f.current&&(f.current=requestAnimationFrame(()=>{f.current=null;const G=g.current;H({x:G.x-z.ny*DS,y:G.y+z.nx*DS,z:G.z})})))},[H]),L=te.useCallback(()=>{const N=m.current;if(!N)return;m.current=null,R(!1),f.current&&(cancelAnimationFrame(f.current),f.current=null),Math.abs(N.nx)>=US||Math.abs(N.ny)>=US?D():C(g.current,n3)},[C,D]);return te.useEffect(()=>{const N=i.current;if(!N)return;const z=new mx,G=new di(28,1,.1,100);G.position.set(0,0,7),G.lookAt(0,0,0);const Y=new Px({alpha:!0,antialias:!0});Y.setPixelRatio(Math.min(window.devicePixelRatio,2)),Y.setClearColor(0,0),N.appendChild(Y.domElement);const V=kp[o],Q=Wp(8,e),X=new pi(new rm(1.7,0),new yx({color:V.hex,roughness:.46,metalness:.08,flatShading:!0,transparent:e,opacity:Q,depthWrite:!e})),W=new Ri().setFromAxisAngle(new at(0,1,0),Math.PI),nt=()=>{zS.forEach((It,F)=>{const pt=F+1,bt=BS(pt,V.label);if(!bt)return;bt.position.copy(It.normal).multiplyScalar(LS),bt.quaternion.copy(It.orientation),X.add(bt);const Z=BS(pt,s3);Z&&(Z.renderOrder=-1,Z.position.copy(It.normal).multiplyScalar(LS-.2),Z.quaternion.copy(It.orientation).multiply(W),X.add(Z))})};document.fonts.load("700 200px dice-font").then(nt),z.add(X),z.add(new Ax(16777215,1)),z.add(new Ex(16777215,12303291,1));const it=new bx(16777215,1);it.position.set(3,4,5),z.add(it),s.current=X;const ht=()=>{const It=N.clientWidth,F=N.clientHeight;Y.setSize(It,F,!1),G.aspect=It/F,G.updateProjectionMatrix()},vt=new ResizeObserver(ht);vt.observe(N),ht();const kt=()=>{u.current=requestAnimationFrame(kt),Y.render(z,G)};return kt(),()=>{vt.disconnect(),u.current&&cancelAnimationFrame(u.current),d.current&&cancelAnimationFrame(d.current),X.geometry.dispose(),X.material.dispose(),X.children.forEach(It=>{const F=It;F.geometry.dispose(),F.material.map?.dispose(),F.material.dispose()}),Y.dispose(),N.removeChild(Y.domElement),s.current=null}},[o,e]),fn.jsxs("div",{className:`stage stage--eight-sided${T?" is-dragging":""}`,onPointerDown:I,onPointerMove:E,onPointerUp:L,onPointerCancel:L,children:[fn.jsx("div",{ref:i,className:"three-scene"}),fn.jsx("p",{className:"hint",children:v?"Rolling...":x||(O?`You rolled ${O}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const FS=65,HS=.5,GS=10,u3=1500,c3=750,f3=260,ao=Math.PI/180,VS=.7,Ix=2.2,d3=.85,Cc=Ix*.9*d3,_r=Ix*.65,Ip=Cc*.105573,zp=Cc*.8,gc=(Cc-zp)/(Cc-Ip),Bp=[...[0,1,2,3,4].map(o=>[gc*_r*Math.cos(o*2*Math.PI/5),zp,gc*_r*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[gc*_r*Math.cos((o+.5)*2*Math.PI/5),-zp,gc*_r*Math.sin((o+.5)*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[_r*Math.cos(o*2*Math.PI/5),Ip,_r*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[_r*Math.cos((o+.5)*2*Math.PI/5),-Ip,_r*Math.sin((o+.5)*2*Math.PI/5)])],Fp=[[0,10,15,11,1],[1,11,16,12,2],[2,12,17,13,3],[3,13,18,14,4],[4,14,19,10,0],[5,6,16,11,15],[6,7,17,12,16],[7,8,18,13,17],[8,9,19,14,18],[9,5,15,10,19],[0,1,2,3,4],[5,6,7,8,9]],Hp=[1,3,5,7,9,8,6,4,2,10],XS=(o,e,i)=>Math.min(i,Math.max(e,o)),kS=o=>1-(1-o)**3,zx=(o,e)=>{const[i,s,u]=o,f=[s[0]-i[0],s[1]-i[1],s[2]-i[2]],d=[u[0]-i[0],u[1]-i[1],u[2]-i[2]],h=f[1]*d[2]-f[2]*d[1],g=f[2]*d[0]-f[0]*d[2],m=f[0]*d[1]-f[1]*d[0],S=Math.sqrt(h*h+g*g+m*m),v=new at(h/S,g/S,m/S);return v.dot(e)<0&&v.negate(),v},Gp=o=>{const e=o.reduce((u,f)=>u+f[0],0)/o.length,i=o.reduce((u,f)=>u+f[1],0)/o.length,s=o.reduce((u,f)=>u+f[2],0)/o.length;return new at(e,i,s)},h3=o=>{const e=Fp[o].map(g=>Bp[g]),i=Gp(e),s=zx(e,i),u=Math.abs(s.y)>.9?new at(0,0,1):new at(0,1,0),f=u.clone().sub(s.clone().multiplyScalar(u.dot(s))).normalize(),d=new at().crossVectors(f,s).normalize(),h=new en().makeBasis(d,f,s);return{normal:s,up:f,orientation:new Ri().setFromRotationMatrix(h)}},WS=Array.from({length:Hp.length},(o,e)=>h3(e)),p3=o=>{const e=new at(0,0,1);return new Ri().setFromUnitVectors(o.normal,e)},m3="#ffffff",qS=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const s=i.getContext("2d");if(!s)return null;s.font="700 180px dice-font, system-ui, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillStyle=e,s.fillText(String(o===10?0:o),128,136);const u=new Sx(i);u.colorSpace=Jn;const f=new Uc({map:u,transparent:!0,side:Ia,depthWrite:!1});return new pi(new oo(VS,VS),f)},g3=o=>{const e=new ua().setFromQuaternion(o,"XYZ");return{x:e.x/ao,y:e.y/ao,z:e.z/ao}};function _3({color:o="red",translucent:e=!0}){const i=te.useRef(null),s=te.useRef(null),u=te.useRef(null),f=te.useRef(null),d=te.useRef(null),h=te.useRef({x:0,y:0,z:0}),g=te.useRef({x:0,y:0,z:0}),m=te.useRef(null),S=te.useRef(!1),[v,_]=te.useState(!1),[T,R]=te.useState(!1),[O,M]=te.useState(null),[x,w]=te.useState(null),H=te.useCallback(N=>{h.current=N,s.current?.rotation.set(N.x*ao,N.y*ao,N.z*ao)},[]),C=te.useCallback((N,z)=>{d.current&&cancelAnimationFrame(d.current);const G={...h.current},Y=performance.now();return new Promise(V=>{const Q=X=>{const W=Math.min((X-Y)/z,1),nt=kS(W);H({x:G.x+(N.x-G.x)*nt,y:G.y+(N.y-G.y)*nt,z:G.z+(N.z-G.z)*nt}),W<1?d.current=requestAnimationFrame(Q):(d.current=null,V())};d.current=requestAnimationFrame(Q)})},[H]),U=te.useCallback((N,z)=>{d.current&&cancelAnimationFrame(d.current);const G=s.current;if(!G)return Promise.resolve();const Y=G.quaternion.clone(),V=performance.now();return new Promise(Q=>{const X=W=>{const nt=Math.min((W-V)/z,1);G.quaternion.slerpQuaternions(Y,N,kS(nt)),h.current=g3(G.quaternion),nt<1?d.current=requestAnimationFrame(X):(d.current=null,Q())};d.current=requestAnimationFrame(X)})},[]),D=te.useCallback(async()=>{S.current=!0,_(!0),M(null),w(null);try{const N=await Xp(10),z=Hp.indexOf(N),G=p3(WS[z]),Y=h.current,V=3+Math.floor(Math.random()*5),Q=GS-V,X=Math.random()<.5?-1:1,W=Math.random()<.5?-1:1,nt=Math.random()<.5?-1:1,it={x:Y.x+X*360*V,y:Y.y+W*360*Q,z:Y.z+nt*360*GS};await C(it,u3),await U(G,c3),g.current=h.current,_(!1),S.current=!1,M(N)}catch(N){_(!1),S.current=!1,w(N instanceof Error?N.message:"Roll failed.")}},[U,C]),I=te.useCallback(N=>{if(S.current)return;const z=N.currentTarget.getBoundingClientRect();m.current={centerX:z.left+z.width/2,centerY:z.top+z.height/2,halfWidth:z.width/2,halfHeight:z.height/2,nx:0,ny:0},N.currentTarget.setPointerCapture(N.pointerId),R(!0)},[]),E=te.useCallback(N=>{const z=m.current;!z||S.current||(z.nx=XS((N.clientX-z.centerX)/z.halfWidth,-1,1),z.ny=XS((N.clientY-z.centerY)/z.halfHeight,-1,1),!f.current&&(f.current=requestAnimationFrame(()=>{f.current=null;const G=g.current;H({x:G.x-z.ny*FS,y:G.y+z.nx*FS,z:G.z})})))},[H]),L=te.useCallback(()=>{const N=m.current;if(!N)return;m.current=null,R(!1),f.current&&(cancelAnimationFrame(f.current),f.current=null),Math.abs(N.nx)>=HS||Math.abs(N.ny)>=HS?D():C(g.current,f3)},[C,D]);return te.useEffect(()=>{const N=i.current;if(!N)return;const z=new mx,G=new di(28,1,.1,100);G.position.set(0,0,7),G.lookAt(0,0,0);const Y=new Px({alpha:!0,antialias:!0});Y.setPixelRatio(Math.min(window.devicePixelRatio,2)),Y.setClearColor(0,0),N.appendChild(Y.domElement);const V=new Hi,Q=[],X=[];for(const bt of Fp){const Z=bt.map(K=>Bp[K]),ct=Gp(Z),Et=zx(Z,ct),Ct=Et.x,mt=Et.y,At=Et.z,[be,le,pe]=Z,ce=[le[0]-be[0],le[1]-be[1],le[2]-be[2]],jt=[pe[0]-be[0],pe[1]-be[1],pe[2]-be[2]],ne=ce[1]*jt[2]-ce[2]*jt[1],Be=ce[2]*jt[0]-ce[0]*jt[2],sn=ce[0]*jt[1]-ce[1]*jt[0],Ge=ne*ct.x+Be*ct.y+sn*ct.z>=0?Z:[...Z].reverse();for(let K=1;K<Ge.length-1;K++)Q.push(...Ge[0],...Ge[K],...Ge[K+1]),X.push(Ct,mt,At,Ct,mt,At,Ct,mt,At)}V.setAttribute("position",new $n(Q,3)),V.setAttribute("normal",new $n(X,3));const W=kp[o],nt=Wp(10,e),it=new pi(V,new yx({color:W.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:nt,depthWrite:!e})),ht=new Ri().setFromAxisAngle(new at(0,1,0),Math.PI),vt=()=>{WS.forEach((bt,Z)=>{const ct=Hp[Z],Et=qS(ct,W.label);if(!Et)return;const Ct=Gp(Fp[Z].map(At=>Bp[At]));Et.position.copy(Ct),Et.position.addScaledVector(bt.normal,.01),Et.quaternion.copy(bt.orientation),it.add(Et);const mt=qS(ct,m3);mt&&(mt.renderOrder=-1,mt.position.copy(Ct),mt.position.addScaledVector(bt.normal,-.05),mt.quaternion.copy(bt.orientation).multiply(ht),it.add(mt))})};document.fonts.load("700 180px dice-font").then(vt),z.add(it),z.add(new Ax(16777215,1)),z.add(new Ex(16777215,12303291,1));const kt=new bx(16777215,1);kt.position.set(3,4,5),z.add(kt),s.current=it;const It=()=>{const bt=N.clientWidth,Z=N.clientHeight;Y.setSize(bt,Z,!1),G.aspect=bt/Z,G.updateProjectionMatrix()},F=new ResizeObserver(It);F.observe(N),It();const pt=()=>{u.current=requestAnimationFrame(pt),Y.render(z,G)};return pt(),()=>{F.disconnect(),u.current&&cancelAnimationFrame(u.current),d.current&&cancelAnimationFrame(d.current),V.dispose(),it.material.dispose(),it.children.forEach(bt=>{const Z=bt;Z.geometry.dispose(),Z.material.map?.dispose(),Z.material.dispose()}),Y.dispose(),N.removeChild(Y.domElement),s.current=null}},[o,e]),fn.jsxs("div",{className:`stage stage--ten-sided${T?" is-dragging":""}`,onPointerDown:I,onPointerMove:E,onPointerUp:L,onPointerCancel:L,children:[fn.jsx("div",{ref:i,className:"three-scene"}),fn.jsx("p",{className:"hint",children:v?"Rolling...":x||(O!==null?`You rolled ${O}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}function v3({sides:o=6,color:e="red",translucent:i=!0}){return o===6?fn.jsx(IE,{color:e,translucent:i}):o===8?fn.jsx(l3,{color:e,translucent:i}):o===10?fn.jsx(_3,{color:e,translucent:i}):null}function S3(){const{sides:o,color:e,translucent:i}=UE();return fn.jsx(v3,{sides:o,color:e,translucent:i})}const Bx=document.getElementById("root");if(!Bx)throw new Error("Root element was not found.");RE.createRoot(Bx).render(fn.jsx(te.StrictMode,{children:fn.jsx(S3,{})}));

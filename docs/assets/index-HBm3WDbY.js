(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();var ch={exports:{}},sl={};var xv;function ME(){if(xv)return sl;xv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var h in u)h!=="key"&&(f[h]=u[h])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:d,ref:u!==void 0?u:null,props:f}}return sl.Fragment=e,sl.jsx=i,sl.jsxs=i,sl}var Mv;function yE(){return Mv||(Mv=1,ch.exports=ME()),ch.exports}var ae=yE(),fh={exports:{}},oe={};var yv;function EE(){if(yv)return oe;yv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),T=Symbol.iterator;function R(F){return F===null||typeof F!="object"?null:(F=T&&F[T]||F["@@iterator"],typeof F=="function"?F:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function w(F,pt,bt){this.props=F,this.context=pt,this.refs=x,this.updater=bt||O}w.prototype.isReactComponent={},w.prototype.setState=function(F,pt){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,pt,"setState")},w.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function H(){}H.prototype=w.prototype;function C(F,pt,bt){this.props=F,this.context=pt,this.refs=x,this.updater=bt||O}var N=C.prototype=new H;N.constructor=C,M(N,w.prototype),N.isPureReactComponent=!0;var D=Array.isArray;function I(){}var E={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function U(F,pt,bt){var Y=bt.ref;return{$$typeof:o,type:F,key:pt,ref:Y!==void 0?Y:null,props:bt}}function z(F,pt){return U(F.type,pt,F.props)}function G(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function Z(F){var pt={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(bt){return pt[bt]})}var V=/\/+/g;function J(F,pt){return typeof F=="object"&&F!==null&&F.key!=null?Z(""+F.key):pt.toString(36)}function k(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(I,I):(F.status="pending",F.then(function(pt){F.status==="pending"&&(F.status="fulfilled",F.value=pt)},function(pt){F.status==="pending"&&(F.status="rejected",F.reason=pt)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function q(F,pt,bt,Y,ct){var Et=typeof F;(Et==="undefined"||Et==="boolean")&&(F=null);var Ct=!1;if(F===null)Ct=!0;else switch(Et){case"bigint":case"string":case"number":Ct=!0;break;case"object":switch(F.$$typeof){case o:case e:Ct=!0;break;case S:return Ct=F._init,q(Ct(F._payload),pt,bt,Y,ct)}}if(Ct)return ct=ct(F),Ct=Y===""?"."+J(F,0):Y,D(ct)?(bt="",Ct!=null&&(bt=Ct.replace(V,"$&/")+"/"),q(ct,pt,bt,"",function(Ae){return Ae})):ct!=null&&(G(ct)&&(ct=z(ct,bt+(ct.key==null||F&&F.key===ct.key?"":(""+ct.key).replace(V,"$&/")+"/")+Ct)),pt.push(ct)),1;Ct=0;var mt=Y===""?".":Y+":";if(D(F))for(var At=0;At<F.length;At++)Y=F[At],Et=mt+J(Y,At),Ct+=q(Y,pt,bt,Et,ct);else if(At=R(F),typeof At=="function")for(F=At.call(F),At=0;!(Y=F.next()).done;)Y=Y.value,Et=mt+J(Y,At++),Ct+=q(Y,pt,bt,Et,ct);else if(Et==="object"){if(typeof F.then=="function")return q(k(F),pt,bt,Y,ct);throw pt=String(F),Error("Objects are not valid as a React child (found: "+(pt==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":pt)+"). If you meant to render a collection of children, use an array instead.")}return Ct}function rt(F,pt,bt){if(F==null)return F;var Y=[],ct=0;return q(F,Y,"","",function(Et){return pt.call(bt,Et,ct++)}),Y}function at(F){if(F._status===-1){var pt=F._result,bt=pt();bt.then(function(Y){(F._status===0||F._status===-1)&&(F._status=1,F._result=Y,bt.status===void 0&&(bt.status="fulfilled",bt.value=Y))},function(Y){(F._status===0||F._status===-1)&&(F._status=2,F._result=Y,bt.status===void 0&&(bt.status="rejected",bt.reason=Y))}),F._status===-1&&(F._status=0,F._result=bt)}if(F._status===1)return F._result.default;throw F._result}var ht=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var pt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(pt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)};function Mt(F){var pt=E.T,bt={};bt.types=pt!==null?pt.types:null,E.T=bt;try{var Y=F(),ct=E.S;ct!==null&&ct(bt,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(I,ht)}catch(Et){ht(Et)}finally{pt!==null&&bt.types!==null&&(pt.types=bt.types),E.T=pt}}function Wt(F){var pt=E.T;if(pt!==null){var bt=pt.types;bt===null?pt.types=[F]:bt.indexOf(F)===-1&&bt.push(F)}else Mt(Wt.bind(null,F))}var It={map:rt,forEach:function(F,pt,bt){rt(F,function(){pt.apply(this,arguments)},bt)},count:function(F){var pt=0;return rt(F,function(){pt++}),pt},toArray:function(F){return rt(F,function(pt){return pt})||[]},only:function(F){if(!G(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return oe.Activity=v,oe.Children=It,oe.Component=w,oe.Fragment=i,oe.Profiler=u,oe.PureComponent=C,oe.StrictMode=s,oe.Suspense=m,oe.ViewTransition=_,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,oe.__COMPILER_RUNTIME={__proto__:null,c:function(F){return E.H.useMemoCache(F)}},oe.addTransitionType=Wt,oe.cache=function(F){return function(){return F.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(F,pt,bt){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Y=M({},F.props),ct=F.key;if(pt!=null)for(Et in pt.key!==void 0&&(ct=""+pt.key),pt)!L.call(pt,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&pt.ref===void 0||(Y[Et]=pt[Et]);var Et=arguments.length-2;if(Et===1)Y.children=bt;else if(1<Et){for(var Ct=Array(Et),mt=0;mt<Et;mt++)Ct[mt]=arguments[mt+2];Y.children=Ct}return U(F.type,ct,Y)},oe.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:f,_context:F},F},oe.createElement=function(F,pt,bt){var Y,ct={},Et=null;if(pt!=null)for(Y in pt.key!==void 0&&(Et=""+pt.key),pt)L.call(pt,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(ct[Y]=pt[Y]);var Ct=arguments.length-2;if(Ct===1)ct.children=bt;else if(1<Ct){for(var mt=Array(Ct),At=0;At<Ct;At++)mt[At]=arguments[At+2];ct.children=mt}if(F&&F.defaultProps)for(Y in Ct=F.defaultProps,Ct)ct[Y]===void 0&&(ct[Y]=Ct[Y]);return U(F,Et,ct)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(F){return{$$typeof:h,render:F}},oe.isValidElement=G,oe.lazy=function(F){return{$$typeof:S,_payload:{_status:-1,_result:F},_init:at}},oe.memo=function(F,pt){return{$$typeof:p,type:F,compare:pt===void 0?null:pt}},oe.startTransition=Mt,oe.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},oe.use=function(F){return E.H.use(F)},oe.useActionState=function(F,pt,bt){return E.H.useActionState(F,pt,bt)},oe.useCallback=function(F,pt){return E.H.useCallback(F,pt)},oe.useContext=function(F){return E.H.useContext(F)},oe.useDebugValue=function(){},oe.useDeferredValue=function(F,pt){return E.H.useDeferredValue(F,pt)},oe.useEffect=function(F,pt){return E.H.useEffect(F,pt)},oe.useEffectEvent=function(F){return E.H.useEffectEvent(F)},oe.useId=function(){return E.H.useId()},oe.useImperativeHandle=function(F,pt,bt){return E.H.useImperativeHandle(F,pt,bt)},oe.useInsertionEffect=function(F,pt){return E.H.useInsertionEffect(F,pt)},oe.useLayoutEffect=function(F,pt){return E.H.useLayoutEffect(F,pt)},oe.useMemo=function(F,pt){return E.H.useMemo(F,pt)},oe.useOptimistic=function(F,pt){return E.H.useOptimistic(F,pt)},oe.useReducer=function(F,pt,bt){return E.H.useReducer(F,pt,bt)},oe.useRef=function(F){return E.H.useRef(F)},oe.useState=function(F){return E.H.useState(F)},oe.useSyncExternalStore=function(F,pt,bt){return E.H.useSyncExternalStore(F,pt,bt)},oe.useTransition=function(){return E.H.useTransition()},oe.version="19.3.0",oe}var Ev;function Yp(){return Ev||(Ev=1,fh.exports=EE()),fh.exports}var kt=Yp(),dh={exports:{}},ol={},hh={exports:{}},ph={};var Tv;function TE(){return Tv||(Tv=1,(function(o){function e(k,q){var rt=k.length;k.push(q);t:for(;0<rt;){var at=rt-1>>>1,ht=k[at];if(0<u(ht,q))k[at]=q,k[rt]=ht,rt=at;else break t}}function i(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var q=k[0],rt=k.pop();if(rt!==q){k[0]=rt;t:for(var at=0,ht=k.length,Mt=ht>>>1;at<Mt;){var Wt=2*(at+1)-1,It=k[Wt],F=Wt+1,pt=k[F];if(0>u(It,rt))F<ht&&0>u(pt,It)?(k[at]=pt,k[F]=rt,at=F):(k[at]=It,k[Wt]=rt,at=Wt);else if(F<ht&&0>u(pt,rt))k[at]=pt,k[F]=rt,at=F;else break t}}return q}function u(k,q){var rt=k.sortIndex-q.sortIndex;return rt!==0?rt:k.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],S=1,v=null,_=3,T=!1,R=!1,O=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function C(k){for(var q=i(p);q!==null;){if(q.callback===null)s(p);else if(q.startTime<=k)s(p),q.sortIndex=q.expirationTime,e(m,q);else break;q=i(p)}}function N(k){if(O=!1,C(k),!R)if(i(m)!==null)R=!0,D||(D=!0,G());else{var q=i(p);q!==null&&J(N,q.startTime-k)}}var D=!1,I=-1,E=5,L=-1;function U(){return M?!0:!(o.unstable_now()-L<E)}function z(){if(M=!1,D){var k=o.unstable_now();L=k;var q=!0;try{t:{R=!1,O&&(O=!1,w(I),I=-1),T=!0;var rt=_;try{e:{for(C(k),v=i(m);v!==null&&!(v.expirationTime>k&&U());){var at=v.callback;if(typeof at=="function"){v.callback=null,_=v.priorityLevel;var ht=at(v.expirationTime<=k);if(k=o.unstable_now(),typeof ht=="function"){v.callback=ht,C(k),q=!0;break e}v===i(m)&&s(m),C(k)}else s(m);v=i(m)}if(v!==null)q=!0;else{var Mt=i(p);Mt!==null&&J(N,Mt.startTime-k),q=!1}}break t}finally{v=null,_=rt,T=!1}q=void 0}}finally{q?G():D=!1}}}var G;if(typeof H=="function")G=function(){H(z)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,V=Z.port2;Z.port1.onmessage=z,G=function(){V.postMessage(null)}}else G=function(){x(z,0)};function J(k,q){I=x(function(){k(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(k){switch(_){case 1:case 2:case 3:var q=3;break;default:q=_}var rt=_;_=q;try{return k()}finally{_=rt}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(k,q){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var rt=_;_=k;try{return q()}finally{_=rt}},o.unstable_scheduleCallback=function(k,q,rt){var at=o.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?at+rt:at):rt=at,k){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=rt+ht,k={id:S++,callback:q,priorityLevel:k,startTime:rt,expirationTime:ht,sortIndex:-1},rt>at?(k.sortIndex=rt,e(p,k),i(m)===null&&k===i(p)&&(O?(w(I),I=-1):O=!0,J(N,rt-at))):(k.sortIndex=ht,e(m,k),R||T||(R=!0,D||(D=!0,G()))),k},o.unstable_shouldYield=U,o.unstable_wrapCallback=function(k){var q=_;return function(){var rt=_;_=q;try{return k.apply(this,arguments)}finally{_=rt}}}})(ph)),ph}var bv;function bE(){return bv||(bv=1,hh.exports=TE()),hh.exports}var mh={exports:{}},Nn={};var Av;function AE(){if(Av)return Nn;Av=1;var o=Yp();function e(S){var v="https://react.dev/errors/"+S;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)v+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+S+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(S,v,_){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:T==null?null:T===d?d:""+T,children:S,containerInfo:v,implementation:_}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(S,v){if(S==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.browser=function(S){return{$$typeof:f,_reason:S}},Nn.createPortal=function(S,v){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(e(299));return h(S,v,null,_)},Nn.flushSync=function(S){var v=m.T,_=s.p;try{if(m.T=null,s.p=2,S)return S()}finally{m.T=v,s.p=_,s.d.f()}},Nn.preconnect=function(S,v){typeof S=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(S,v))},Nn.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},Nn.preinit=function(S,v){if(typeof S=="string"&&v&&typeof v.as=="string"){var _=v.as,T=p(_,v.crossOrigin),R=typeof v.integrity=="string"?v.integrity:void 0,O=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;_==="style"?s.d.S(S,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:T,integrity:R,fetchPriority:O}):_==="script"&&s.d.X(S,{crossOrigin:T,integrity:R,fetchPriority:O,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Nn.preinitModule=function(S,v){if(typeof S=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var _=p(v.as,v.crossOrigin);s.d.M(S,{crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&s.d.M(S)},Nn.preload=function(S,v){if(typeof S=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var _=v.as,T=p(_,v.crossOrigin);s.d.L(S,_,{crossOrigin:T,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Nn.preloadModule=function(S,v){if(typeof S=="string")if(v){var _=p(v.as,v.crossOrigin);s.d.m(S,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else s.d.m(S)},Nn.requestFormReset=function(S){s.d.r(S)},Nn.unstable_batchedUpdates=function(S,v){return S(v)},Nn.useFormState=function(S,v,_){return m.H.useFormState(S,v,_)},Nn.useFormStatus=function(){return m.H.useHostTransitionStatus()},Nn.version="19.3.0",Nn}var Rv;function RE(){if(Rv)return mh.exports;Rv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),mh.exports=AE(),mh.exports}var Cv;function CE(){if(Cv)return ol;Cv=1;var o=bE(),e=Yp(),i=RE();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(f(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var l=a.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===a)return m(l),t;if(c===r)return m(l),n;c=c.sibling}throw Error(s(188))}if(a.return!==r.return)a=l,r=c;else{for(var g=!1,A=l.child;A;){if(A===a){g=!0,a=l,r=c;break}if(A===r){g=!0,r=l,a=c;break}A=A.sibling}if(!g){for(A=c.child;A;){if(A===a){g=!0,a=c,r=l;break}if(A===r){g=!0,r=c,a=l;break}A=A.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}function v(t,n,a,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&v(t.child,n,a,r,l,c))return!0;t=t.sibling}return!1}function _(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function T(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function R(t){var n=[null,null],a=_(t);return a===null||O(n,t,a.child,{foundSelf:!1}),n}function O(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&O(t,n,a.child,r))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,w=null;function H(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function C(t,n,a){return t===a?(w=t,!1):t===n?(w!==null&&(x=t),!0):!1}function N(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function D(t,n,a){for(var r=0,l=t;l;l=a(l))r++;l=0;for(var c=n;c;c=a(c))l++;for(;0<r-l;)t=a(t),r--;for(;0<l-r;)n=a(n),l--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var I=Object.assign,E=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),J=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),at=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Mt=Symbol.for("react.activity"),Wt=Symbol.for("react.legacy_hidden"),It=Symbol.for("react.memo_cache_sentinel"),F=Symbol.for("react.view_transition"),pt=Symbol.for("react.recoverable"),bt=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=bt&&t[bt]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Symbol.for("react.client.reference");function Et(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ct?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case z:return"Fragment";case Z:return"Profiler";case G:return"StrictMode";case q:return"Suspense";case rt:return"SuspenseList";case Mt:return"Activity";case F:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case U:return"Portal";case J:return t.displayName||"Context";case V:return(t._context.displayName||"Context")+".Consumer";case k:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case at:return n=t.displayName||null,n!==null?n:Et(t.type)||"Memo";case ht:n=t._payload,t=t._init;try{return Et(t(n))}catch{}}return null}var Ct=Array.isArray,mt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,At=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ae={pending:!1,data:null,method:null,action:null},ue=[],me=-1;function fe(t){return{current:t}}function $t(t){0>me||(t.current=ue[me],ue[me]=null,me--)}function ne(t,n){me++,ue[me]=t.current,t.current=n}var Fe=fe(null),on=fe(null),Ie=fe(null),Ve=fe(null);function K(t,n){switch(ne(Ie,n),ne(on,t),ne(Fe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?w_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=w_(n),t=D_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$t(Fe),ne(Fe,t)}function an(){$t(Fe),$t(on),$t(Ie)}function ze(t){var n=t.memoizedState;n!==null&&(Bs._currentValue=n.memoizedState,ne(Ve,t)),n=Fe.current;var a=D_(n,t.type);n!==a&&(ne(on,t),ne(Fe,a))}function P(t){on.current===t&&($t(Fe),$t(on)),Ve.current===t&&($t(Ve),Bs._currentValue=Ae)}var y,et;function ut(t){if(y===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);y=n&&n[1]||"",et=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+y+t+et}var gt=!1;function Rt(t,n){if(!t||gt)return"";gt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(Ot){var j=Ot}Reflect.construct(t,[],St)}else{try{St.call()}catch(Ot){j=Ot}St=!1;try{var lt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),St=!0,new t}finally{St&&(lt!==void 0?Object.defineProperty(t.prototype,"props",lt):delete t.prototype.props)}}}else{try{throw Error()}catch(Ot){j=Ot}(St=t())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(Ot){if(Ot&&j&&typeof Ot.stack=="string")return[Ot.stack,j.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),g=c[0],A=c[1];if(g&&A){var B=g.split(`
`),tt=A.split(`
`);for(l=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;l<tt.length&&!tt[l].includes("DetermineComponentFrameRoot");)l++;if(r===B.length||l===tt.length)for(r=B.length-1,l=tt.length-1;1<=r&&0<=l&&B[r]!==tt[l];)l--;for(;1<=r&&0<=l;r--,l--)if(B[r]!==tt[l]){if(r!==1||l!==1)do if(r--,l--,0>l||B[r]!==tt[l]){var ft=`
`+B[r].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=r&&0<=l);break}}}finally{gt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ut(a):""}function Nt(t,n){switch(t.tag){case 26:case 27:case 5:return ut(t.type);case 16:return ut("Lazy");case 13:return t.child!==n&&n!==null?ut("Suspense Fallback"):ut("Suspense");case 19:return ut("SuspenseList");case 0:case 15:return Rt(t.type,!1);case 11:return Rt(t.type.render,!1);case 1:return Rt(t.type,!0);case 31:return ut("Activity");case 30:return ut("ViewTransition");default:return""}}function _t(t){try{var n="",a=null;do n+=Nt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var yt=Object.prototype.hasOwnProperty,Dt=o.unstable_scheduleCallback,te=o.unstable_cancelCallback,zt=o.unstable_shouldYield,Pt=o.unstable_requestPaint,Xt=o.unstable_now,ie=o.unstable_getCurrentPriorityLevel,ce=o.unstable_ImmediatePriority,Q=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,xt=o.unstable_LowPriority,Ut=o.unstable_IdlePriority,Vt=o.log,Tt=o.unstable_setDisableYieldValue,jt=null,Gt=null;function De(t){if(typeof Vt=="function"&&Tt(t),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(jt,t)}catch{}}var de=Math.clz32?Math.clz32:Bc,ei=Math.log,gi=Math.LN2;function Bc(t){return t>>>=0,t===0?32:31-(ei(t)/gi|0)|0}var ts=256,xr=262144,Ba=4194304;function fa(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Mr(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~c,r!==0?l=fa(r):(g&=A,g!==0?l=fa(g):a||(a=A&~t,a!==0&&(l=fa(a))))):(A=r&~c,A!==0?l=fa(A):g!==0?l=fa(g):a||(a=r&~t,a!==0&&(l=fa(a)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:l}function Fa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Vi(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-de(a),l=1<<r;n|=t[r],a&=~l}return n}function fo(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ho(){var t=Ba;return Ba<<=1,(Ba&62914560)===0&&(Ba=4194304),t}function es(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Xi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Cl(t,n,a,r,l,c){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,B=t.expirationTimes,tt=t.hiddenUpdates;for(a=g&~a;0<a;){var ft=31-de(a),St=1<<ft;A[ft]=0,B[ft]=-1;var j=tt[ft];if(j!==null)for(tt[ft]=null,ft=0;ft<j.length;ft++){var lt=j[ft];lt!==null&&(lt.lane&=-536870913)}a&=~St}r!==0&&yr(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~n))}function yr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-de(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function po(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-de(a),l=1<<r;l&n|t[r]&n&&(t[r]|=n),a&=~l}}function mo(t,n){var a=n&-n;return a=(a&42)!==0?1:go(a),(a&(t.suspendedLanes|n))!==0?0:a}function go(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function _o(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wl(){var t=At.p;return t!==0?t:(t=window.event,t===void 0?32:hv(t.type))}function Dl(t,n){var a=At.p;try{return At.p=t,n()}finally{At.p=a}}var _i=Math.random().toString(36).slice(2),b="__reactFiber$"+_i,X="__reactProps$"+_i,dt="__reactContainer$"+_i,st="__reactEvents$"+_i,ot="__reactListeners$"+_i,Bt="__reactHandles$"+_i,qt="__reactResources$"+_i,Lt="__reactMarker$"+_i,Kt="__reactLoad$"+_i;function Qt(t){delete t[b],delete t[X],delete t[ot],delete t[Bt]}function se(t){var n;if(n=t[b])return n;for(var a=t.parentNode;a;){if(n=a[dt]||a[b]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Y_(t);t!==null;){if(a=t[b])return a;t=Y_(t)}return n}t=a,a=t.parentNode}return null}function he(t){if(t=t[b]||t[dt]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Yt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function ye(t){var n=t[qt];return n||(n=t[qt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Se(t){t[Lt]=!0}function Ke(t){t[Kt]=void 0}var Xe=new Set,vn={};function Ft(t,n){ln(t,n),ln(t+"Capture",n)}function ln(t,n){for(vn[t]=n,t=0;t<n.length;t++)Xe.add(n[t])}var Ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fn={},ni={};function ki(t){return yt.call(ni,t)?!0:yt.call(Fn,t)?!1:Ne.test(t)?ni[t]=!0:(Fn[t]=!0,!1)}var xe=!1;function He(){var t=xe;return xe=!1,t}function je(t,n,a){if(ki(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function ii(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function Re(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function un(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function da(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Nl(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(g){a=""+g,c.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Fc(t){if(!t._valueTracker){var n=da(t)?"checked":"value";t._valueTracker=Nl(t,n,""+t[n])}}function _m(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=da(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var Vx=/[\n"\\]/g;function vi(t){return t.replace(Vx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Hc(t,n,a,r,l,c,g,A){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+un(n)):t.value!==""+un(n)&&(t.value=""+un(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?g==="number"&&t.value==n?Gc(t,un(t.value)):Gc(t,un(n)):a!=null?Gc(t,un(a)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+un(A):t.removeAttribute("name")}function vm(t,n,a,r,l,c,g,A){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Fc(t);return}a=a!=null?""+un(a):"",n=n!=null?""+un(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Fc(t)}function Gc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function ns(t,n,a,r){if(t=t.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=n.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&r&&(t[a].defaultSelected=!0)}else{for(a=""+un(a),n=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function Sm(t,n,a){if(n!=null&&(n=""+un(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+un(a):""}function xm(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Ct(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=un(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Fc(t)}function is(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Xx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mm(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Xx.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ym(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",xe=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&a[l]!==r&&(Mm(t,l,r),xe=!0)}else for(var c in n)n.hasOwnProperty(c)&&Mm(t,c,n[c])}function Vc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(t){return Wx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Wi(){}var Xc=null;function kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var as=null,rs=null;function Em(t){var n=he(t);if(n&&(t=n.stateNode)){var a=t[X]||null;t:switch(t=n.stateNode,n.type){case"input":if(Hc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var l=r[X]||null;if(!l)throw Error(s(90));Hc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&_m(r)}break t;case"textarea":Sm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ns(t,!!a.multiple,n,!1)}}}var Wc=!1;function Tm(t,n,a){if(Wc)return t(n,a);Wc=!0;try{var r=t(n);return r}finally{if(Wc=!1,(as!==null||rs!==null)&&(Uu(),as&&(n=as,t=rs,rs=as=null,Em(n),t)))for(n=0;n<t.length;n++)Em(t[n])}}function vo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[X]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qc=!1;if(ha)try{var So={};Object.defineProperty(So,"passive",{get:function(){qc=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{qc=!1}var Ha=null,Yc=null,Ll=null;function bm(){if(Ll)return Ll;var t,n=Yc,a=n.length,r,l="value"in Ha?Ha.value:Ha.textContent,c=l.length;for(t=0;t<a&&n[t]===l[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===l[c-r];r++);return Ll=l.slice(t,1<r?1-r:void 0)}function Ol(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Pl(){return!0}function Am(){return!1}function Hn(t){function n(a,r,l,c,g){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(c):c[A]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Pl:Am,this.isPropagationStopped=Am,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=Hn(Ga),xo=I({},Ga,{view:0,detail:0}),qx=Hn(xo),Zc,Kc,Mo,zl=I({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mo&&(Mo&&t.type==="mousemove"?(Zc=t.screenX-Mo.screenX,Kc=t.screenY-Mo.screenY):Kc=Zc=0,Mo=t),Zc)},movementY:function(t){return"movementY"in t?t.movementY:Kc}}),Rm=Hn(zl),Yx=I({},zl,{dataTransfer:0}),Zx=Hn(Yx),Kx=I({},xo,{relatedTarget:0}),Qc=Hn(Kx),Qx=I({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Jx=Hn(Qx),jx=I({},Ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$x=Hn(jx),tM=I({},Ga,{data:0}),Cm=Hn(tM),eM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aM(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=iM[t])?!!n[t]:!1}function Jc(){return aM}var rM=I({},xo,{key:function(t){if(t.key){var n=eM[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jc,charCode:function(t){return t.type==="keypress"?Ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sM=Hn(rM),oM=I({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wm=Hn(oM),lM=I({},Ga,{submitter:0}),uM=Hn(lM),cM=I({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jc}),fM=Hn(cM),dM=I({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),hM=Hn(dM),pM=I({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mM=Hn(pM),gM=I({},Ga,{newState:0,oldState:0,source:0}),_M=Hn(gM),vM=[9,13,27,32],jc=ha&&"CompositionEvent"in window,yo=null;ha&&"documentMode"in document&&(yo=document.documentMode);var SM=ha&&"TextEvent"in window&&!yo,Dm=ha&&(!jc||yo&&8<yo&&11>=yo),Nm=" ",Um=!1;function Lm(t,n){switch(t){case"keyup":return vM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Om(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function xM(t,n){switch(t){case"compositionend":return Om(n);case"keypress":return n.which!==32?null:(Um=!0,Nm);case"textInput":return t=n.data,t===Nm&&Um?null:t;default:return null}}function MM(t,n){if(ss)return t==="compositionend"||!jc&&Lm(t,n)?(t=bm(),Ll=Yc=Ha=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dm&&n.locale!=="ko"?null:n.data;default:return null}}var yM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!yM[t.type]:n==="textarea"}function Im(t,n,a,r){as?rs?rs.push(r):rs=[r]:as=r,n=Bu(n,"onChange"),0<n.length&&(a=new Il("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Eo=null,To=null;function EM(t){E_(t,0)}function Bl(t){var n=Yt(t);if(_m(n))return t}function zm(t,n){if(t==="change")return n}var Bm=!1;if(ha){var $c;if(ha){var tf="oninput"in document;if(!tf){var Fm=document.createElement("div");Fm.setAttribute("oninput","return;"),tf=typeof Fm.oninput=="function"}$c=tf}else $c=!1;Bm=$c&&(!document.documentMode||9<document.documentMode)}function Hm(){Eo&&(Eo.detachEvent("onpropertychange",Gm),To=Eo=null)}function Gm(t){if(t.propertyName==="value"&&Bl(To)){var n=[];Im(n,To,t,kc(t)),Tm(EM,n)}}function TM(t,n,a){t==="focusin"?(Hm(),Eo=n,To=a,Eo.attachEvent("onpropertychange",Gm)):t==="focusout"&&Hm()}function bM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bl(To)}function AM(t,n){if(t==="click")return Bl(n)}function RM(t,n){if(t==="input"||t==="change")return Bl(n)}function CM(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ai=typeof Object.is=="function"?Object.is:CM;function bo(t,n){if(ai(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!yt.call(n,l)||!ai(t[l],n[l]))return!1}return!0}function ef(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xm(t,n){var a=Vm(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Vm(a)}}function km(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?km(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Wm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ef(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ef(t.document)}return n}function nf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var wM=ha&&"documentMode"in document&&11>=document.documentMode,os=null,af=null,Ao=null,rf=!1;function qm(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;rf||os==null||os!==ef(r)||(r=os,"selectionStart"in r&&nf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ao&&bo(Ao,r)||(Ao=r,r=Bu(af,"onSelect"),0<r.length&&(n=new Il("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=os)))}function Er(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ls={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionrun:Er("Transition","TransitionRun"),transitionstart:Er("Transition","TransitionStart"),transitioncancel:Er("Transition","TransitionCancel"),transitionend:Er("Transition","TransitionEnd")},sf={},Ym={};ha&&(Ym=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function Tr(t){if(sf[t])return sf[t];if(!ls[t])return t;var n=ls[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ym)return sf[t]=n[a];return t}var Zm=Tr("animationend"),Km=Tr("animationiteration"),Qm=Tr("animationstart"),DM=Tr("transitionrun"),NM=Tr("transitionstart"),UM=Tr("transitioncancel"),Jm=Tr("transitionend"),jm=new Map,of="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");of.push("scrollEnd");function wi(t,n){jm.set(t,n),Ft(n,[t])}var LM=0;function pa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Li.identifierPrefix;var a=LM++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function $m(t){if(t==null||typeof t=="string")return t;var n=null,a=Cs;if(a!==null)for(var r=0;r<a.length;r++){var l=t[a[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function ma(t,n){return t=$m(t),n=$m(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Fl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Si=[],us=0,lf=0;function Hl(){for(var t=us,n=lf=us=0;n<t;){var a=Si[n];Si[n++]=null;var r=Si[n];Si[n++]=null;var l=Si[n];Si[n++]=null;var c=Si[n];if(Si[n++]=null,r!==null&&l!==null){var g=r.pending;g===null?l.next=l:(l.next=g.next,g.next=l),r.pending=l}c!==0&&tg(a,l,c)}}function Gl(t,n,a,r){Si[us++]=t,Si[us++]=n,Si[us++]=a,Si[us++]=r,lf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function uf(t,n,a,r){return Gl(t,n,a,r),Vl(t)}function br(t,n){return Gl(t,null,null,n),Vl(t)}function tg(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var l=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-de(a),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=a|536870912),c):null}function Vl(t){if(50<Zo)throw Zo=0,Nu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var cs={};function OM(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,r){return new OM(t,n,a,r)}function cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ga(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function eg(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Xl(t,n,a,r,l,c){var g=0;if(r=t,typeof r=="function")cf(r)&&(g=1);else if(typeof r=="string")g=lE(t,a,Fe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Mt:return t=Wn(31,a,n,l),t.elementType=Mt,t.lanes=c,t;case z:return Ar(a.children,l,c,n);case G:g=8,l|=24;break;case Z:return t=Wn(12,a,n,l|2),t.elementType=Z,t.lanes=c,t;case q:return t=Wn(13,a,n,l),t.elementType=q,t.lanes=c,t;case rt:return t=Wn(19,a,n,l),t.elementType=rt,t.lanes=c,t;case Wt:case F:return t=l|32,t=Wn(30,a,n,t),t.elementType=F,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case J:g=10;break t;case V:g=9;break t;case k:g=11;break t;case at:g=14;break t;case ht:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Wn(g,a,n,l),n.elementType=t,n.type=r,n.lanes=c,n}function Ar(t,n,a,r){return t=Wn(7,t,r,n),t.lanes=a,t}function ff(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function ng(t){var n=Wn(18,null,null,0);return n.stateNode=t,n}function df(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ig=new WeakMap;function xi(t,n){if(typeof t=="object"&&t!==null){var a=ig.get(t);return a!==void 0?a:(n={value:t,source:n,stack:_t(n)},ig.set(t,n),n)}return{value:t,source:n,stack:_t(n)}}var fs=[],ds=0,kl=null,Ro=0,Mi=[],yi=0,Va=null,qi=1,Yi="";function _a(t,n){fs[ds++]=Ro,fs[ds++]=kl,kl=t,Ro=n}function ag(t,n,a){Mi[yi++]=qi,Mi[yi++]=Yi,Mi[yi++]=Va,Va=t;var r=qi;t=Yi;var l=32-de(r)-1;r&=~(1<<l),a+=1;var c=32-de(n)+l;if(30<c){var g=l-l%5;c=(r&(1<<g)-1).toString(32),r>>=g,l-=g,qi=1<<32-de(n)+l|a<<l|r,Yi=c+t}else qi=1<<c|a<<l|r,Yi=t}function Wl(t){t.return!==null&&(_a(t,1),ag(t,1,0))}function hf(t){for(;t===kl;)kl=fs[--ds],fs[ds]=null,Ro=fs[--ds],fs[ds]=null;for(;t===Va;)Va=Mi[--yi],Mi[yi]=null,Yi=Mi[--yi],Mi[yi]=null,qi=Mi[--yi],Mi[yi]=null}function rg(t,n){Mi[yi++]=qi,Mi[yi++]=Yi,Mi[yi++]=Va,qi=n.id,Yi=n.overflow,Va=t}var yn=null,$e=null,Me=!1,Xa=null,Ei=!1,pf=Error(s(519));function ka(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Co(xi(n,t)),pf}function sg(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[b]=t,n[X]=r,a){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(a=0;a<Qo.length;a++)Te(Qo[a],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),vm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),xm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||R_(n.textContent,a)?(r.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),r.onScroll!=null&&Te("scroll",n),r.onScrollEnd!=null&&Te("scrollend",n),r.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||ka(t,!0)}function ql(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:yn=yn.return}}function hs(t){if(t!==yn)return!1;if(!Me)return ql(t),Me=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||kd(t.type,t.memoizedProps)),a=!a),a&&$e&&ka(t),ql(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$e=q_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$e=q_(t)}else n===27?(n=$e,sr(t.type)?(t=$d,$d=null,$e=t):$e=n):$e=yn?bi(t.stateNode.nextSibling):null;return!0}function Rr(){$e=yn=null,Me=!1}function mf(){var t=Xa;return t!==null&&(Zn===null?Zn=t:Zn.push.apply(Zn,t),Xa=null),t}function Co(t){Xa===null?Xa=[t]:Xa.push(t)}var gf=fe(null),Cr=null,va=null;function Wa(t,n,a){ne(gf,n._currentValue),n._currentValue=a}function Sa(t){t._currentValue=gf.current,$t(gf)}function Yl(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function _f(t,n,a,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var g=l.child;c=c.firstContext;t:for(;c!==null;){var A=c;c=l;for(var B=0;B<n.length;B++)if(A.context===n[B]){c.lanes|=a,A=c.alternate,A!==null&&(A.lanes|=a),Yl(c.return,a,t),r||(g=null);break t}c=A.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(s(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),Yl(g,a,t),g=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,g=l.alternate,g!==null&&(g.lanes|=a),Yl(l.return,a,t),g=l.child,g=g!==null?g.sibling:null):g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===t){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function wr(t,n,a,r){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var A=l.type;ai(l.pendingProps.value,g.value)||(t!==null?t.push(A):t=[A])}}else if(l===Ve.current){if(g=l.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Bs):t=[Bs])}l=l.return}return t!==null&&_f(n,t,a,r),n.flags|=262144,t!==null}function Zl(t){for(t=t.firstContext;t!==null;){if(!ai(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Dr(t){Cr=t,va=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return og(Cr,t)}function Kl(t,n){return Cr===null&&Dr(t),og(t,n)}function og(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},va===null){if(t===null)throw Error(s(308));va=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else va=va.next=n;return a}var PM=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},IM=o.unstable_scheduleCallback,zM=o.unstable_NormalPriority,hn={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vf(){return{controller:new PM,data:new Map,refCount:0}}function wo(t){t.refCount--,t.refCount===0&&IM(zM,function(){t.controller.abort()})}function lg(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Do=null;function BM(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var No=null,Sf=0,Nr=0,ps=null;function FM(t,n){if(No===null){var a=No=[];Sf=0,Nr=Pd(),ps={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Sf++,n.then(ug,ug),n}function ug(){if(--Sf===0&&(Do=null,No!==null)){ps!==null&&(ps.status="fulfilled");var t=No;No=null,Nr=0,ps=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function HM(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var cg=mt.S;mt.S=function(t,n){if(n_=Xt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&FM(t,n),Do!==null)for(var a=Us;a!==null;)lg(a,Do),a=a.next;if(a=t.types,a!==null){for(var r=Us;r!==null;)lg(r,a),r=r.next;if(Nr!==0){r=Do,r===null&&(r=Do=[]);for(var l=0;l<a.length;l++){var c=a[l];r.indexOf(c)===-1&&r.push(c)}}}cg!==null&&cg(t,n)};var Ur=fe(null);function xf(){var t=Ur.current;return t!==null?t:Je.pooledCache}function Ql(t,n){n===null?ne(Ur,Ur.current):ne(Ur,n.pool)}function fg(){var t=xf();return t===null?null:{parent:hn._currentValue,pool:t}}var ms=Error(s(460)),Mf=Error(s(474)),Jl=Error(s(542)),jl={then:function(){}};function dg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function hg(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,mg(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(t=Je,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,mg(t),t}throw Or=n,ms}}function Lr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Or=a,ms):a}}var Or=null;function pg(){if(Or===null)throw Error(s(459));var t=Or;return Or=null,t}function mg(t){if(t===ms||t===Jl)throw Error(s(483))}var gs=null,Uo=0;function $l(t){var n=Uo;return Uo+=1,gs===null&&(gs=[]),hg(gs,t,n)}function qa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function tu(t,n){throw n.$$typeof===E?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function gg(t){function n($,W){if(t){var it=$.deletions;it===null?($.deletions=[W],$.flags|=16):it.push(W)}}function a($,W){if(!t)return null;for(;W!==null;)n($,W),W=W.sibling;return null}function r($){for(var W=new Map;$!==null;)$.key===null?W.set($.index,$):W.set($.key,$),$=$.sibling;return W}function l($,W){return $=ga($,W),$.index=0,$.sibling=null,$}function c($,W,it){return $.index=it,t?(it=$.alternate,it!==null?(it=it.index,it<W?($.flags|=2,W):it):($.flags|=134217730,W)):($.flags|=1048576,W)}function g($){return t&&$.alternate===null&&($.flags|=134217730),$}function A($,W,it,vt){return W===null||W.tag!==6?(W=ff(it,$.mode,vt),W.return=$,W):(W=l(W,it),W.return=$,W)}function B($,W,it,vt){var Zt=it.type;return Zt===z?($=ft($,W,it.props.children,vt,it.key),qa($,it),$):W!==null&&(W.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===ht&&Lr(Zt)===W.type)?(W=l(W,it.props),qa(W,it),W.return=$,W):(W=Xl(it.type,it.key,it.props,null,$.mode,vt),qa(W,it),W.return=$,W)}function tt($,W,it,vt){return W===null||W.tag!==4||W.stateNode.containerInfo!==it.containerInfo||W.stateNode.implementation!==it.implementation?(W=df(it,$.mode,vt),W.return=$,W):(W=l(W,it.children||[]),W.return=$,W)}function ft($,W,it,vt,Zt){return W===null||W.tag!==7?(W=Ar(it,$.mode,vt,Zt),W.return=$,W):(W=l(W,it),W.return=$,W)}function St($,W,it){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=ff(""+W,$.mode,it),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case L:return it=Xl(W.type,W.key,W.props,null,$.mode,it),qa(it,W),it.return=$,it;case U:return W=df(W,$.mode,it),W.return=$,W;case ht:return W=Lr(W),St($,W,it)}if(Ct(W)||Y(W))return W=Ar(W,$.mode,it,null),W.return=$,W;if(typeof W.then=="function")return St($,$l(W),it);if(W.$$typeof===J)return St($,Kl($,W),it);tu($,W)}return null}function j($,W,it,vt){var Zt=W!==null?W.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return Zt!==null?null:A($,W,""+it,vt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case L:return it.key===Zt?B($,W,it,vt):null;case U:return it.key===Zt?tt($,W,it,vt):null;case ht:return it=Lr(it),j($,W,it,vt)}if(Ct(it)||Y(it))return Zt!==null?null:ft($,W,it,vt,null);if(typeof it.then=="function")return j($,W,$l(it),vt);if(it.$$typeof===J)return j($,W,Kl($,it),vt);tu($,it)}return null}function lt($,W,it,vt,Zt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return $=$.get(it)||null,A(W,$,""+vt,Zt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case L:return $=$.get(vt.key===null?it:vt.key)||null,B(W,$,vt,Zt);case U:return $=$.get(vt.key===null?it:vt.key)||null,tt(W,$,vt,Zt);case ht:return vt=Lr(vt),lt($,W,it,vt,Zt)}if(Ct(vt)||Y(vt))return $=$.get(it)||null,ft(W,$,vt,Zt,null);if(typeof vt.then=="function")return lt($,W,it,$l(vt),Zt);if(vt.$$typeof===J)return lt($,W,it,Kl(W,vt),Zt);tu(W,vt)}return null}function Ot($,W,it,vt){for(var Zt=null,we=null,ee=W,re=W=0,gn=null;ee!==null&&re<it.length;re++){ee.index>re?(gn=ee,ee=null):gn=ee.sibling;var Oe=j($,ee,it[re],vt);if(Oe===null){ee===null&&(ee=gn);break}t&&ee&&Oe.alternate===null&&n($,ee),W=c(Oe,W,re),we===null?Zt=Oe:we.sibling=Oe,we=Oe,ee=gn}if(re===it.length)return a($,ee),Me&&_a($,re),Zt;if(ee===null){for(;re<it.length;re++)ee=St($,it[re],vt),ee!==null&&(W=c(ee,W,re),we===null?Zt=ee:we.sibling=ee,we=ee);return Me&&_a($,re),Zt}for(ee=r(ee);re<it.length;re++)gn=lt(ee,$,re,it[re],vt),gn!==null&&(t&&(Oe=gn.alternate,Oe!==null&&ee.delete(Oe.key===null?re:Oe.key)),W=c(gn,W,re),we===null?Zt=gn:we.sibling=gn,we=gn);return t&&ee.forEach(function(fr){return n($,fr)}),Me&&_a($,re),Zt}function Jt($,W,it,vt){if(it==null)throw Error(s(151));for(var Zt=null,we=null,ee=W,re=W=0,gn=null,Oe=it.next();ee!==null&&!Oe.done;re++,Oe=it.next()){ee.index>re?(gn=ee,ee=null):gn=ee.sibling;var fr=j($,ee,Oe.value,vt);if(fr===null){ee===null&&(ee=gn);break}t&&ee&&fr.alternate===null&&n($,ee),W=c(fr,W,re),we===null?Zt=fr:we.sibling=fr,we=fr,ee=gn}if(Oe.done)return a($,ee),Me&&_a($,re),Zt;if(ee===null){for(;!Oe.done;re++,Oe=it.next())Oe=St($,Oe.value,vt),Oe!==null&&(W=c(Oe,W,re),we===null?Zt=Oe:we.sibling=Oe,we=Oe);return Me&&_a($,re),Zt}for(ee=r(ee);!Oe.done;re++,Oe=it.next())Oe=lt(ee,$,re,Oe.value,vt),Oe!==null&&(t&&(gn=Oe.alternate,gn!==null&&ee.delete(gn.key===null?re:gn.key)),W=c(Oe,W,re),we===null?Zt=Oe:we.sibling=Oe,we=Oe);return t&&ee.forEach(function(xE){return n($,xE)}),Me&&_a($,re),Zt}function _e($,W,it,vt){if(typeof it=="object"&&it!==null&&it.type===z&&it.key===null&&it.props.ref===void 0&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case L:t:{for(var Zt=it.key;W!==null;){if(W.key===Zt){if(Zt=it.type,Zt===z){if(W.tag===7){a($,W.sibling),vt=l(W,it.props.children),qa(vt,it),vt.return=$,$=vt;break t}}else if(W.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===ht&&Lr(Zt)===W.type){a($,W.sibling),vt=l(W,it.props),qa(vt,it),vt.return=$,$=vt;break t}a($,W);break}else n($,W);W=W.sibling}it.type===z?(vt=Ar(it.props.children,$.mode,vt,it.key),qa(vt,it),vt.return=$,$=vt):(vt=Xl(it.type,it.key,it.props,null,$.mode,vt),qa(vt,it),vt.return=$,$=vt)}return g($);case U:t:{for(Zt=it.key;W!==null;){if(W.key===Zt)if(W.tag===4&&W.stateNode.containerInfo===it.containerInfo&&W.stateNode.implementation===it.implementation){a($,W.sibling),vt=l(W,it.children||[]),vt.return=$,$=vt;break t}else{a($,W);break}else n($,W);W=W.sibling}vt=df(it,$.mode,vt),vt.return=$,$=vt}return g($);case ht:return it=Lr(it),_e($,W,it,vt)}if(Ct(it))return Ot($,W,it,vt);if(Y(it)){if(Zt=Y(it),typeof Zt!="function")throw Error(s(150));return it=Zt.call(it),Jt($,W,it,vt)}if(typeof it.then=="function")return _e($,W,$l(it),vt);if(it.$$typeof===J)return _e($,W,Kl($,it),vt);tu($,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,W!==null&&W.tag===6?(a($,W.sibling),vt=l(W,it),vt.return=$,$=vt):(a($,W),vt=ff(it,$.mode,vt),vt.return=$,$=vt),g($)):a($,W)}return function($,W,it,vt){try{Uo=0;var Zt=_e($,W,it,vt);return gs=null,Zt}catch(ee){if(ee===ms||ee===Jl)throw ee;var we=Wn(29,ee,null,$.mode);return we.lanes=vt,we.return=$,we}}}var Pr=gg(!0),_g=gg(!1),Ya=!1;function yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ef(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ge&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Vl(t),tg(t,null,a),n}return Gl(t,r,n,a),Vl(t)}function Lo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,po(t,a)}}function Tf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?l=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?l=c=n:c=c.next=n}else l=c=n;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var bf=!1;function Oo(){if(bf){var t=ps;if(t!==null)throw t}}function Po(t,n,a,r){bf=!1;var l=t.updateQueue;Ya=!1;var c=l.firstBaseUpdate,g=l.lastBaseUpdate,A=l.shared.pending;if(A!==null){l.shared.pending=null;var B=A,tt=B.next;B.next=null,g===null?c=tt:g.next=tt,g=B;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==g&&(A===null?ft.firstBaseUpdate=tt:A.next=tt,ft.lastBaseUpdate=B))}if(c!==null){var St=l.baseState;g=0,ft=tt=B=null,A=c;do{var j=A.lane&-536870913,lt=j!==A.lane;if(lt?(Ce&j)===j:(r&j)===j){j!==0&&j===Nr&&(bf=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Ot=t,Jt=A;j=n;var _e=a;switch(Jt.tag){case 1:if(Ot=Jt.payload,typeof Ot=="function"){St=Ot.call(_e,St,j);break t}St=Ot;break t;case 3:Ot.flags=Ot.flags&-65537|128;case 0:if(Ot=Jt.payload,j=typeof Ot=="function"?Ot.call(_e,St,j):Ot,j==null)break t;St=I({},St,j);break t;case 2:Ya=!0}}j=A.callback,j!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=l.callbacks,lt===null?l.callbacks=[j]:lt.push(j))}else lt={lane:j,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?(tt=ft=lt,B=St):ft=ft.next=lt,g|=j;if(A=A.next,A===null){if(A=l.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,l.lastBaseUpdate=lt,l.shared.pending=null}}while(!0);ft===null&&(B=St),l.baseState=B,l.firstBaseUpdate=tt,l.lastBaseUpdate=ft,c===null&&(l.shared.lanes=0),nr|=g,t.lanes=g,t.memoizedState=St}}function vg(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Sg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)vg(a[t],n)}var Qa=fe(null),eu=fe(0);function xg(t,n){t=Ta,ne(eu,t),ne(Qa,n),Ta=t|n.baseLanes}function Af(){ne(eu,Ta),ne(Qa,Qa.current)}function Rf(){Ta=eu.current,$t(Qa),$t(eu)}var Rn=fe(null),On=null;function Ja(t){var n=t.alternate;ne(Cn,Cn.current&1),ne(Rn,t),On===null&&(n===null||Qa.current!==null||n.memoizedState!==null)&&(On=t)}function Cf(t){ne(Cn,Cn.current),ne(Rn,t),On===null&&(On=t)}function Mg(t){t.tag===22?(ne(Cn,Cn.current),ne(Rn,t),On===null&&(On=t)):ja()}function ja(){ne(Cn,Cn.current),ne(Rn,Rn.current)}function ri(t){$t(Rn),On===t&&(On=null),$t(Cn)}var Cn=fe(0);function Io(t,n){ne(Rn,Rn.current),ne(Cn,n)}function wf(t){$t(Cn),$t(Rn),On===t&&(On=null)}function nu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Jd(a)||jd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var xa=0,ge=null,Qe=null,pn=null,iu=!1,_s=!1,Ir=!1,au=0,zo=0,vs=null,GM=0;function cn(){throw Error(s(321))}function Df(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ai(t[a],n[a]))return!1;return!0}function Nf(t,n,a,r,l,c){return xa=c,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,mt.H=t===null||t.memoizedState===null?a0:r0,Ir=!1,c=a(r,l),Ir=!1,_s&&(c=Eg(n,a,r,l)),yg(t),c}function yg(t){mt.H=fu;var n=Qe!==null&&Qe.next!==null;if(xa=0,pn=Qe=ge=null,iu=!1,zo=0,vs=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&Zl(t)&&(mn=!0))}function Eg(t,n,a,r){ge=t;var l=0;do{if(_s&&(vs=null),zo=0,_s=!1,25<=l)throw Error(s(301));if(l+=1,pn=Qe=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}mt.H=KM,c=n(a,r)}while(_s);return c}function VM(){var t=mt.H,n=t.useState()[0];return n=typeof n.then=="function"?Bo(n):n,t=t.useState()[0],(Qe!==null?Qe.memoizedState:null)!==t&&(ge.flags|=1024),n}function Uf(){var t=au!==0;return au=0,t}function Lf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Of(t){if(iu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}iu=!1}xa=0,pn=Qe=ge=null,_s=!1,zo=au=0,vs=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?ge.memoizedState=pn=t:pn=pn.next=t,pn}function dn(){if(Qe===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var n=pn===null?ge.memoizedState:pn.next;if(n!==null)pn=n,Qe=t;else{if(t===null)throw ge.alternate===null?Error(s(467)):Error(s(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},pn===null?ge.memoizedState=pn=t:pn=pn.next=t}return pn}function ru(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bo(t){var n=zo;return zo+=1,vs===null&&(vs=[]),t=hg(vs,t,n),n=ge,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,mt.H=n===null||n.memoizedState===null?a0:r0),t}function su(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Bo(t);if(t.$$typeof===pt)return;if(t.$$typeof===J)return An(t)}throw Error(s(438,String(t)))}function Pf(t){var n=null,a=ge.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ge.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ru(),ge.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=It;return n.index++,a}function Ma(t,n){return typeof n=="function"?n(t):n}function ou(t){var n=dn();return If(n,Qe,t)}function If(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var g=l.next;l.next=c.next,c.next=g}n.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var A=g=null,B=null,tt=n,ft=!1;do{var St=tt.lane&-536870913;if(St!==tt.lane?(Ce&St)===St:(xa&St)===St){var j=tt.revertLane;if(j===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),St===Nr&&(ft=!0);else if((xa&j)===j){tt=tt.next,j===Nr&&(ft=!0);continue}else St={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(A=B=St,g=c):B=B.next=St,ge.lanes|=j,nr|=j;St=tt.action,Ir&&a(c,St),c=tt.hasEagerState?tt.eagerState:a(c,St)}else j={lane:St,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(A=B=j,g=c):B=B.next=j,ge.lanes|=St,nr|=St;tt=tt.next}while(tt!==null&&tt!==n);if(B===null?g=c:B.next=A,!ai(c,t.memoizedState)&&(mn=!0,ft&&(a=ps,a!==null)))throw a;t.memoizedState=c,t.baseState=g,t.baseQueue=B,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function zf(t){var n=dn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,l=a.pending,c=n.memoizedState;if(l!==null){a.pending=null;var g=l=l.next;do c=t(c,g.action),g=g.next;while(g!==l);ai(c,n.memoizedState)||(mn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,r]}function Tg(t,n,a){var r=ge,l=dn(),c=Me;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!ai((Qe||l).memoizedState,a);if(g&&(l.memoizedState=a,mn=!0),l=l.queue,Hf(Rg.bind(null,r,l,t),[t]),t=l.getSnapshot!==n||g||pn!==null&&(pn.memoizedState.tag&1)!==0,Ss(t?9:8,{destroy:void 0},Ag.bind(null,r,l,a,n),null),t){if(r.flags|=2048,Je===null)throw Error(s(349));c||(xa&127)!==0||bg(r,n,a)}return a}function bg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ge.updateQueue,n===null?(n=ru(),ge.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Ag(t,n,a,r){n.value=a,n.getSnapshot=r,Cg(n)&&wg(t)}function Rg(t,n,a){return a(function(){Cg(n)&&wg(t)})}function Cg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ai(t,a)}catch{return!0}}function wg(t){var n=br(t,2);n!==null&&Kn(n,t,2)}function Bf(t){var n=Gn();if(typeof t=="function"){var a=t;if(t=a(),Ir){De(!0);try{a()}finally{De(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:t},n}function Dg(t,n,a,r){return t.baseState=a,If(t,Qe,typeof r=="function"?r:Ma)}function XM(t,n,a,r,l){if(cu(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};mt.T!==null?a(!0):c.isTransition=!1,r(c),a=n.pending,a===null?(c.next=n.pending=c,Ng(n,c)):(c.next=a.next,n.pending=a.next=c)}}function Ng(t,n){var a=n.action,r=n.payload,l=t.state;if(n.isTransition){var c=mt.T,g={};g.types=c!==null?c.types:null,mt.T=g;try{var A=a(l,r),B=mt.S;B!==null&&B(g,A),Ug(t,n,A)}catch(tt){Ff(t,n,tt)}finally{c!==null&&g.types!==null&&(c.types=g.types),mt.T=c}}else try{c=a(l,r),Ug(t,n,c)}catch(tt){Ff(t,n,tt)}}function Ug(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Lg(t,n,r)},function(r){return Ff(t,n,r)}):Lg(t,n,a)}function Lg(t,n,a){n.status="fulfilled",n.value=a,Og(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Ng(t,a)))}function Ff(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Og(n),n=n.next;while(n!==r)}t.action=null}function Og(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Pg(t,n){return n}function Ig(t,n){if(Me){var a=Je.formState;if(a!==null){t:{var r=ge;if(Me){if($e){e:{for(var l=$e,c=Ei;l.nodeType!==8;){if(!c){l=null;break e}if(l=bi(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){$e=bi(l.nextSibling),r=l.data==="F!";break t}}ka(r)}r=!1}r&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pg,lastRenderedState:n},a.queue=r,a=e0.bind(null,ge,r),r.dispatch=a,r=Bf(!1),c=Wf.bind(null,ge,!1,r.queue),r=Gn(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,a=XM.bind(null,ge,l,c,a),l.dispatch=a,r.memoizedState=t,[n,a,!1]}function zg(t){var n=dn();return Bg(n,Qe,t)}function Bg(t,n,a){if(n=If(t,n,Pg)[0],t=ou(Ma)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Bo(n)}catch(g){throw g===ms?Jl:g}else r=n;n=dn();var l=n.queue,c=l.dispatch;return a!==n.memoizedState&&(ge.flags|=2048,Ss(9,{destroy:void 0},kM.bind(null,l,a),null)),[r,c,t]}function kM(t,n){t.action=n}function Fg(t){var n=dn(),a=Qe;if(a!==null)return Bg(n,a,t);dn(),n=n.memoizedState,a=dn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Ss(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=ge.updateQueue,n===null&&(n=ru(),ge.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Hg(){return dn().memoizedState}function lu(t,n,a,r){var l=Gn();ge.flags|=t,l.memoizedState=Ss(1|n,{destroy:void 0},a,r===void 0?null:r)}function uu(t,n,a,r){var l=dn();r=r===void 0?null:r;var c=l.memoizedState.inst;Qe!==null&&r!==null&&Df(r,Qe.memoizedState.deps)?l.memoizedState=Ss(n,c,a,r):(ge.flags|=t,l.memoizedState=Ss(1|n,c,a,r))}function Gg(t,n){lu(8390656,8,t,n)}function Hf(t,n){uu(2048,8,t,n)}function WM(t){ge.flags|=4;var n=ge.updateQueue;if(n===null)n=ru(),ge.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Vg(t){var n=dn().memoizedState;return WM({ref:n,nextImpl:t}),function(){if((Ge&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Xg(t,n){return uu(4,2,t,n)}function kg(t,n){return uu(4,4,t,n)}function Wg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function qg(t,n,a){a=a!=null?a.concat([t]):null,uu(4,4,Wg.bind(null,n,t),a)}function Gf(){}function Yg(t,n){var a=dn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Df(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Zg(t,n){var a=dn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Df(n,r[1]))return r[0];if(r=t(),Ir){De(!0);try{t()}finally{De(!1)}}return a.memoizedState=[r,n],r}function Vf(t,n,a){return a===void 0||(xa&1073741824)!==0&&(Ce&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=a_(),ge.lanes|=t,nr|=t,a)}function Kg(t,n,a,r){return ai(a,n)?a:Qa.current!==null?(t=Vf(t,a,r),ai(t,n)||(mn=!0),t):(xa&106)===0||(xa&1073741824)!==0&&(Ce&261930)===0?(mn=!0,t.memoizedState=a):(t=a_(),ge.lanes|=t,nr|=t,n)}function Qg(t,n,a,r,l){var c=At.p;At.p=c!==0&&8>c?c:8;var g=mt.T,A={};A.types=g!==null?g.types:null,mt.T=A,Wf(t,!1,n,a);try{var B=l(),tt=mt.S;if(tt!==null&&tt(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ft=HM(B,r);Fo(t,n,ft,ui(t))}else Fo(t,n,r,ui(t))}catch(St){Fo(t,n,{then:function(){},status:"rejected",reason:St},ui())}finally{At.p=c,g!==null&&A.types!==null&&(g.types=A.types),mt.T=g}}function qM(){}function Xf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var l=Jg(t).queue;Qg(t,l,n,Ae,a===null?qM:function(){return jg(t),a(r)})}function Jg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Ae,baseState:Ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:Ae},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function jg(t){var n=Jg(t);n.next===null&&(n=t.alternate.memoizedState),Fo(t,n.next.queue,{},ui())}function kf(){return An(Bs)}function $g(){return dn().memoizedState}function t0(){return dn().memoizedState}function YM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();t=Za(a);var r=Ka(n,t,a);r!==null&&(Kn(r,n,a),Lo(r,n,a)),n={cache:vf()},t.payload=n;return}n=n.return}}function ZM(t,n,a){var r=ui();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},cu(t)?n0(n,a):(a=uf(t,n,a,r),a!==null&&(Kn(a,t,r),i0(a,n,r)))}function e0(t,n,a){var r=ui();Fo(t,n,a,r)}function Fo(t,n,a,r){var l={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(cu(t))n0(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var g=n.lastRenderedState,A=c(g,a);if(l.hasEagerState=!0,l.eagerState=A,ai(A,g))return Gl(t,n,l,0),Je===null&&Hl(),!1}catch{}if(a=uf(t,n,l,r),a!==null)return Kn(a,t,r),i0(a,n,r),!0}return!1}function Wf(t,n,a,r){if(r={lane:2,revertLane:Pd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},cu(t)){if(n)throw Error(s(479))}else n=uf(t,a,r,2),n!==null&&Kn(n,t,2)}function cu(t){var n=t.alternate;return t===ge||n!==null&&n===ge}function n0(t,n){_s=iu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function i0(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,po(t,a)}}var fu={readContext:An,use:su,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn,useEffectEvent:cn},a0={readContext:An,use:su,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Gg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,lu(4194308,4,Wg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return lu(4194308,4,t,n)},useInsertionEffect:function(t,n){lu(4,2,t,n)},useMemo:function(t,n){var a=Gn();n=n===void 0?null:n;var r=t();if(Ir){De(!0);try{t()}finally{De(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Gn();if(a!==void 0){var l=a(n);if(Ir){De(!0);try{a(n)}finally{De(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=ZM.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:function(t){t=Bf(t);var n=t.queue,a=e0.bind(null,ge,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Gf,useDeferredValue:function(t,n){var a=Gn();return Vf(a,t,n)},useTransition:function(){var t=Bf(!1);return t=Qg.bind(null,ge,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=ge,l=Gn();if(Me){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Je===null)throw Error(s(349));(Ce&127)!==0||bg(r,n,a)}l.memoizedState=a;var c={value:a,getSnapshot:n};return l.queue=c,Gg(Rg.bind(null,r,c,t),[t]),r.flags|=2048,Ss(9,{destroy:void 0},Ag.bind(null,r,c,a,n),null),a},useId:function(){var t=Gn(),n=Je.identifierPrefix;if(Me){var a=Yi,r=qi;a=(r&~(1<<32-de(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=au++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=GM++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:kf,useFormState:Ig,useActionState:Ig,useOptimistic:function(t){var n=Gn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Wf.bind(null,ge,!0,a),a.dispatch=n,[t,n]},useMemoCache:Pf,useCacheRefresh:function(){return Gn().memoizedState=YM.bind(null,ge)},useEffectEvent:function(t){var n=Gn(),a={impl:t};return n.memoizedState=a,function(){if((Ge&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},r0={readContext:An,use:su,useCallback:Yg,useContext:An,useEffect:Hf,useImperativeHandle:qg,useInsertionEffect:Xg,useLayoutEffect:kg,useMemo:Zg,useReducer:ou,useRef:Hg,useState:function(){return ou(Ma)},useDebugValue:Gf,useDeferredValue:function(t,n){var a=dn();return Kg(a,Qe.memoizedState,t,n)},useTransition:function(){var t=ou(Ma)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:Bo(t),n]},useSyncExternalStore:Tg,useId:$g,useHostTransitionStatus:kf,useFormState:zg,useActionState:zg,useOptimistic:function(t,n){var a=dn();return Dg(a,Qe,t,n)},useMemoCache:Pf,useCacheRefresh:t0,useEffectEvent:Vg},KM={readContext:An,use:su,useCallback:Yg,useContext:An,useEffect:Hf,useImperativeHandle:qg,useInsertionEffect:Xg,useLayoutEffect:kg,useMemo:Zg,useReducer:zf,useRef:Hg,useState:function(){return zf(Ma)},useDebugValue:Gf,useDeferredValue:function(t,n){var a=dn();return Qe===null?Vf(a,t,n):Kg(a,Qe.memoizedState,t,n)},useTransition:function(){var t=zf(Ma)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:Bo(t),n]},useSyncExternalStore:Tg,useId:$g,useHostTransitionStatus:kf,useFormState:Fg,useActionState:Fg,useOptimistic:function(t,n){var a=dn();return Qe!==null?Dg(a,Qe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Pf,useCacheRefresh:t0,useEffectEvent:Vg};function qf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:I({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Yf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ui(),l=Za(r);l.payload=n,a!=null&&(l.callback=a),n=Ka(t,l,r),n!==null&&(Kn(n,t,r),Lo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ui(),l=Za(r);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Ka(t,l,r),n!==null&&(Kn(n,t,r),Lo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ui(),r=Za(a);r.tag=2,n!=null&&(r.callback=n),n=Ka(t,r,a),n!==null&&(Kn(n,t,a),Lo(n,t,a))}};function s0(t,n,a,r,l,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,g):n.prototype&&n.prototype.isPureReactComponent?!bo(a,r)||!bo(l,c):!0}function o0(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Yf.enqueueReplaceState(n,n.state,null)}function zr(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=I({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}function l0(t){Fl(t)}function u0(t){console.error(t)}function c0(t){Fl(t)}function du(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function f0(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Zf(t,n,a){return a=Za(a),a.tag=3,a.payload={element:null},a.callback=function(){du(t,n)},a}function d0(t){return t=Za(t),t.tag=3,t}function h0(t,n,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){f0(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){f0(n,a,r),typeof l!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function QM(t,n,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&wr(n,a,l,!0),a=Rn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return On===null?Lu():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===jl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Ud(t,r,l)),!1;case 22:return a.flags|=65536,r===jl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Ud(t,r,l)),!1}throw Error(s(435,a.tag))}return Ud(t,r,l),Lu(),!1}if(Me)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==pf&&(t=Error(s(422),{cause:r}),Co(xi(t,a)))):(r!==pf&&(n=Error(s(423),{cause:r}),Co(xi(n,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=xi(r,a),l=Zf(t.stateNode,r,l),Tf(t,l),fn!==4&&(fn=2)),!1;var c=Error(s(520),{cause:r});if(c=xi(c,a),Yo===null?Yo=[c]:Yo.push(c),fn!==4&&(fn=2),n===null)return!0;r=xi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=Zf(a.stateNode,r,t),Tf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ir===null||!ir.has(c))))return a.flags|=65536,l&=-l,a.lanes|=l,l=d0(l),h0(l,t,a,r),Tf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Kf=Error(s(461)),mn=!1;function Sn(t,n,a,r){n.child=t===null?_g(n,null,a,r):Pr(n,t.child,a,r)}function p0(t,n,a,r,l){a=a.render;var c=n.ref;if("ref"in r){var g={};for(var A in r)A!=="ref"&&(g[A]=r[A])}else g=r;return Dr(n),r=Nf(t,n,a,g,c,l),A=Uf(),t!==null&&!mn?(Lf(t,n,l),ya(t,n,l)):(Me&&A&&Wl(n),n.flags|=1,Sn(t,n,r,l),n.child)}function m0(t,n,a,r,l){if(t===null){var c=a.type;return typeof c=="function"&&!cf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,g0(t,n,c,r,l)):(t=Xl(a.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!id(t,l)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:bo,a(g,r)&&t.ref===n.ref)return ya(t,n,l)}return n.flags|=1,t=ga(c,r),t.ref=n.ref,t.return=n,n.child=t}function g0(t,n,a,r,l){if(t!==null){var c=t.memoizedProps;if(bo(c,r)&&t.ref===n.ref)if(mn=!1,n.pendingProps=r=c,id(t,l))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,ya(t,n,l)}return Qf(t,n,a,r,l)}function _0(t,n,a,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,n.child=null;return v0(t,n,c,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ql(n,c!==null?c.cachePool:null),c!==null?xg(n,c):Af(),Mg(n);else return r=n.lanes=536870912,v0(t,n,c!==null?c.baseLanes|a:a,a,r)}else c!==null?(Ql(n,c.cachePool),xg(n,c),ja(),n.memoizedState=null):(t!==null&&Ql(n,null),Af(),ja());return Sn(t,n,l,a),n.child}function Ho(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function v0(t,n,a,r,l){var c=xf();return c=c===null?null:{parent:hn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Ql(n,null),Af(),Mg(n),t!==null&&wr(t,n,r,!0),n.childLanes=l,null}function hu(t,n){return n=pu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function S0(t,n,a){return Pr(n,t.child,null,a),t=hu(n,n.pendingProps),t.flags|=2,ri(n),n.memoizedState=null,t}function JM(t,n,a){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Me){if(r.mode==="hidden")return t=hu(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Ho(null,t);if(Cf(n),(t=$e)?(t=W_(t,Ei),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=ng(t),a.return=n,n.child=a,yn=n,$e=null)):t=null,t===null)throw ka(n);return n.lanes=536870912,null}return hu(n,r)}var c=t.memoizedState;if(c!==null){var g=c.dehydrated;if(Cf(n),l)if(n.flags&256)n.flags&=-257,n=S0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||wr(t,n,a,!1),l=(a&t.childLanes)!==0,mn||l){if(Qa.current===null){if(r=Je,r!==null&&(g=mo(r,a),g!==0&&g!==c.retryLane))throw c.retryLane=g,br(t,g),Kn(r,t,g),Kf;Lu()}n=S0(t,n,a)}else t=c.treeContext,$e=bi(g.nextSibling),yn=n,Me=!0,Xa=null,Ei=!1,t!==null&&rg(n,t),n=hu(n,r),n.flags|=134221824;return n}return t=ga(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function xs(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Qf(t,n,a,r,l){return Dr(n),a=Nf(t,n,a,r,void 0,l),r=Uf(),t!==null&&!mn?(Lf(t,n,l),ya(t,n,l)):(Me&&r&&Wl(n),n.flags|=1,Sn(t,n,a,l),n.child)}function x0(t,n,a,r,l,c){return Dr(n),n.updateQueue=null,a=Eg(n,r,a,l),yg(t),r=Uf(),t!==null&&!mn?(Lf(t,n,c),ya(t,n,c)):(Me&&r&&Wl(n),n.flags|=1,Sn(t,n,a,c),n.child)}function M0(t,n,a,r,l){if(Dr(n),n.stateNode===null){var c=cs,g=a.contextType;typeof g=="object"&&g!==null&&(c=An(g)),c=new a(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Yf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},yf(n),g=a.contextType,c.context=typeof g=="object"&&g!==null?An(g):cs,c.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(qf(n,a,g,r),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&Yf.enqueueReplaceState(c,c.state,null),Po(n,r,c,l),Oo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var A=n.memoizedProps,B=zr(a,A);c.props=B;var tt=c.context,ft=a.contextType;g=cs,typeof ft=="object"&&ft!==null&&(g=An(ft));var St=a.getDerivedStateFromProps;ft=typeof St=="function"||typeof c.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(A||tt!==g)&&o0(n,c,r,g),Ya=!1;var j=n.memoizedState;c.state=j,Po(n,r,c,l),Oo(),tt=n.memoizedState,A||j!==tt||Ya?(typeof St=="function"&&(qf(n,a,St,r),tt=n.memoizedState),(B=Ya||s0(n,a,B,r,j,tt,g))?(ft||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=tt),c.props=r,c.state=tt,c.context=g,r=B):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,Ef(t,n),g=n.memoizedProps,ft=zr(a,g),c.props=ft,St=n.pendingProps,j=c.context,tt=a.contextType,B=cs,typeof tt=="object"&&tt!==null&&(B=An(tt)),A=a.getDerivedStateFromProps,(tt=typeof A=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==St||j!==B)&&o0(n,c,r,B),Ya=!1,j=n.memoizedState,c.state=j,Po(n,r,c,l),Oo();var lt=n.memoizedState;g!==St||j!==lt||Ya||t!==null&&t.dependencies!==null&&Zl(t.dependencies)?(typeof A=="function"&&(qf(n,a,A,r),lt=n.memoizedState),(ft=Ya||s0(n,a,ft,r,j,lt,B)||t!==null&&t.dependencies!==null&&Zl(t.dependencies))?(tt||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,lt,B),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,lt,B)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),c.props=r,c.state=lt,c.context=B,r=ft):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,xs(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=Pr(n,t.child,null,l),n.child=Pr(n,null,a,l)):Sn(t,n,a,l),n.memoizedState=c.state,t=n.child):t=ya(t,n,l),t}function y0(t,n,a,r){return Rr(),n.flags|=256,Sn(t,n,a,r),n.child}var Jf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jf(t){return{baseLanes:t,cachePool:fg()}}function $f(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=li),t}function E0(t,n,a){var r=n.pendingProps,l=!1,c=(n.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(Cn.current&2)!==0),g&&(l=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(l?Ja(n):ja(),(t=$e)?(t=W_(t,Ei),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=ng(t),a.return=n,n.child=a,yn=n,$e=null)):t=null,t===null)throw ka(n);return jd(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,l?(ja(),l=n.mode,c=pu({mode:"hidden",children:c},l),r=Ar(r,l,a,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=jf(a),r.childLanes=$f(t,g,a),n.memoizedState=Jf,Ho(null,r)):(Ja(n),td(n,c))}var A=t.memoizedState;if(A!==null){var B=A.dehydrated;if(B!==null)return jM(t,n,c,g,r,B,A,a)}return l?(ja(),l=r.fallback,c=n.mode,A=t.child,B=A.sibling,r=ga(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&1206910976,B!==null?l=ga(B,l):(l=Ar(l,c,a,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,Ho(null,r),r=n.child,l=t.child.memoizedState,l===null?l=jf(a):(c=l.cachePool,c!==null?(A=hn._currentValue,c=c.parent!==A?{parent:A,pool:A}:c):c=fg(),l={baseLanes:l.baseLanes|a,cachePool:c}),r.memoizedState=l,r.childLanes=$f(t,g,a),n.memoizedState=Jf,Ho(t.child,r)):(Ja(n),a=t.child,t=a.sibling,a=ga(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function td(t,n){return n=pu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function pu(t,n){return t=Wn(22,t,null,n),t.lanes=0,t}function mu(t,n,a){return Pr(n,t.child,null,a),t=td(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function jM(t,n,a,r,l,c,g,A){if(a)return n.flags&256?(Ja(n),n.flags&=-257,mu(t,n,A)):n.memoizedState!==null?(ja(),n.child=t.child,n.flags|=128,null):(ja(),c=l.fallback,g=n.mode,l=pu({mode:"visible",children:l.children},g),c=Ar(c,g,A,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Pr(n,t.child,null,A),l=n.child,l.memoizedState=jf(A),l.childLanes=$f(t,r,A),n.memoizedState=Jf,Ho(null,l));if(Ja(n),jd(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var B=r.dgst;return r=B,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,Co({value:l,source:null,stack:null})),mu(t,n,A)}if(mn||wr(t,n,A,!1),r=(A&t.childLanes)!==0,mn||r){if(Qa.current!==null)return mu(t,n,A);if(r=Je,r!==null&&(l=mo(r,A),l!==0&&l!==g.retryLane))throw g.retryLane=l,br(t,l),Kn(r,t,l),Kf;return Jd(c)||Lu(),mu(t,n,A)}return Jd(c)?(n.flags|=192,n.child=t.child,null):(t=g.treeContext,$e=bi(c.nextSibling),yn=n,Me=!0,Xa=null,Ei=!1,t!==null&&rg(n,t),n=td(n,l.children),n.flags|=134221824,n)}function T0(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Yl(t.return,n,a)}function b0(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&nu(a)===null&&(n=t),t=t.sibling}return n}function gu(t,n,a,r,l,c){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l,treeForkCount:c}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=l,g.treeForkCount=c)}function ed(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function nd(t,n,a){var r=n.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var g=Cn.current;if(n.flags&128)return Io(n,g),null;var A=(g&2)!==0;if(A?(g=g&1|2,n.flags|=128):g&=1,Io(n,g),l==="backwards"&&t!==null?(ed(t),Sn(t,n,r,a),ed(t)):Sn(t,n,r,a),r=Me?Ro:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&T0(t,a,n);else if(t.tag===19)T0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":a=b0(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,ed(n)),gu(n,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&nu(t)===null){n.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}gu(n,!0,a,null,c,r);break;case"together":gu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=b0(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),gu(n,!1,l,a,c,r)}return n.child}function A0(t,n,a){var r=n.pendingProps;return Wa(n,n.type,r.value),Sn(t,n,r.children,a),n.child}function ya(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),nr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(wr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ga(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ga(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function id(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Zl(t)))}function $M(t,n,a){switch(n.tag){case 3:K(n,n.stateNode.containerInfo),Wa(n,hn,t.memoizedState.cache),Rr();break;case 27:case 5:ze(n);break;case 4:K(n,n.stateNode.containerInfo);break;case 10:Wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Cf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ja(n),n.flags|=128,null;r=wr(t,n,a,!1);var l=n.child.childLanes;return r||(a&l)!==0?E0(t,n,a):(Ja(n),t=ya(t,n,a),t!==null?t.sibling:null)}Ja(n);break;case 19:if(n.flags&128)return nd(t,n,a);if(l=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(wr(t,n,a,!1),r=(a&n.childLanes)!==0),l){if(r)return nd(t,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Io(n,Cn.current),r)break;return null;case 22:return n.lanes=0,_0(t,n,a,n.pendingProps);case 24:Wa(n,hn,t.memoizedState.cache)}return ya(t,n,a)}function R0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!id(t,a)&&(n.flags&128)===0)return mn=!1,$M(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,Me&&(n.flags&1048576)!==0&&ag(n,Ro,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Lr(n.elementType),n.type=t,typeof t=="function")cf(t)?(r=zr(t,r),n.tag=1,n=M0(null,n,t,r,a)):(n.tag=0,n=Qf(null,n,t,r,a));else{if(t!=null){var l=t.$$typeof;if(l===k){n.tag=11,n=p0(null,n,t,r,a);break t}else if(l===at){n.tag=14,n=m0(null,n,t,r,a);break t}else if(l===J){n.tag=10,n.type=t,n=A0(null,n,a);break t}}throw n=Et(t)||t,Error(s(306,n,""))}}return n;case 0:return Qf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,l=zr(r,n.pendingProps),M0(t,n,r,l,a);case 3:t:{if(K(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;l=c.element,Ef(t,n),Po(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Wa(n,hn,r),r!==c.cache&&_f(n,[hn],a,!0),Oo(),r=g.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=y0(t,n,r,a);break t}else if(r!==l){l=xi(Error(s(424)),n),Co(l),n=y0(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,$e=bi(t.firstChild),yn=n,Me=!0,Xa=null,Ei=!0,a=_g(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Rr(),r===l){n=ya(t,n,a);break t}Sn(t,n,r,a)}n=n.child}return n;case 26:return xs(t,n),t===null?(a=j_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(n.stateNode=N_(n.type,n.pendingProps,Ie.current,n)):n.memoizedState=j_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ze(n),t===null&&Me&&(r=n.stateNode=Z_(n.type,n.pendingProps,Ie.current),yn=n,Ei=!0,l=$e,sr(n.type)?($d=l,$e=bi(r.firstChild)):$e=l),Sn(t,n,n.pendingProps.children,a),xs(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((l=r=$e)&&(r=Yy(r,n.type,n.pendingProps,Ei),r!==null?(n.stateNode=r,yn=n,$e=bi(r.firstChild),Ei=!1,l=!0):l=!1),l||ka(n)),ze(n),l=n.type,c=n.pendingProps,g=t!==null?t.memoizedProps:null,r=c.children,kd(l,c)?r=null:g!==null&&kd(l,g)&&(n.flags|=32),n.memoizedState!==null&&(l=Nf(t,n,VM,null,null,a),Bs._currentValue=l),xs(t,n),Sn(t,n,r,a),n.child;case 6:return t===null&&Me&&((t=a=$e)&&(a=Zy(a,n.pendingProps,Ei),a!==null?(n.stateNode=a,yn=n,$e=null,t=!0):t=!1),t||ka(n)),null;case 13:return E0(t,n,a);case 4:return K(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Pr(n,null,r,a):Sn(t,n,r,a),n.child;case 11:return p0(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,xs(t,n),Sn(t,n,r,a),n.child;case 8:return Sn(t,n,n.pendingProps.children,a),n.child;case 12:return Sn(t,n,n.pendingProps.children,a),n.child;case 10:return A0(t,n,a);case 9:return l=n.type._context,r=n.pendingProps.children,Dr(n),l=An(l),r=r(l),n.flags|=1,Sn(t,n,r,a),n.child;case 14:return m0(t,n,n.type,n.pendingProps,a);case 15:return g0(t,n,n.type,n.pendingProps,a);case 19:return nd(t,n,a);case 31:return JM(t,n,a);case 22:return _0(t,n,a,n.pendingProps);case 24:return Dr(n),r=An(hn),t===null?(l=xf(),l===null&&(l=Je,c=vf(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=a),l=c),n.memoizedState={parent:r,cache:l},yf(n),Wa(n,hn,l)):((t.lanes&a)!==0&&(Ef(t,n),Po(n,null,null,a),Oo()),l=t.memoizedState,c=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Wa(n,hn,r)):(r=c.cache,Wa(n,hn,r),r!==l.cache&&_f(n,[hn],a,!0))),Sn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:Me&&Wl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:xs(t,n),Sn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ea(t){t.flags|=4}function ad(t,n,a,r,l){var c;if((c=(t.mode&32)!==0)&&(c=a===null?nv(n,r):nv(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(l_())t.flags|=8192;else throw Or=jl,Mf}else t.flags&=-16777217}function C0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!iv(n))if(l_())t.flags|=8192;else throw Or=jl,Mf}function _u(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ho():536870912,t.lanes|=n,bs|=n)}function Go(t,n){if(!Me)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function tn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function ty(t,n,a){var r=n.pendingProps;switch(hf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Sa(hn),an(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(hs(n)?Ea(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,mf())),tn(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(Ea(n),c!==null?(tn(n),C0(n,c)):(tn(n),ad(n,l,null,r,a))):c?c!==t.memoizedState?(Ea(n),tn(n),C0(n,c)):(tn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Ea(n),tn(n),ad(n,l,t,r,a)),null;case 27:if(P(n),a=Ie.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ea(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return tn(n),n.subtreeFlags&=-33554433,null}t=Fe.current,hs(n)?sg(n):(t=Z_(l,r,a),n.stateNode=t,Ea(n))}return tn(n),n.subtreeFlags&=-33554433,null;case 5:if(P(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ea(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return tn(n),n.subtreeFlags&=-33554433,null}if(c=Fe.current,hs(n))sg(n);else{var g=jo(Ie.current);switch(c){case 1:c=g.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=g.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=g.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?g.createElement(l,{is:r.is}):g.createElement(l)}}c[b]=n,c[X]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)c.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=c;t:switch(Dn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Ea(n)}}return tn(n),n.subtreeFlags&=-33554433,ad(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Ea(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Ie.current,hs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,l=yn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[b]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||R_(t.nodeValue,a)),t||ka(n,!0)}else t=jo(t).createTextNode(r),t[b]=n,n.stateNode=t}return tn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=hs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[b]=n}else Rr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),t=!1}else a=mf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(s(558))}return tn(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=hs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[b]=n}else Rr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),l=!1}else l=mf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),_u(n,n.updateQueue),tn(n),null);case 4:return an(),t===null&&Fd(n.stateNode.containerInfo),n.flags|=67108864,tn(n),null;case 10:return Sa(n.type),tn(n),null;case 19:if(wf(n),r=n.memoizedState,r===null)return tn(n),null;if(l=(n.flags&128)!==0,c=r.rendering,c===null)if(l)Go(r,!1);else{if(fn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=nu(t),c!==null){for(n.flags|=128,Go(r,!1),t=c.updateQueue,n.updateQueue=t,_u(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)eg(a,t),a=a.sibling;return Io(n,Cn.current&1|2),Me&&_a(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&Xt()>wu&&(n.flags|=128,l=!0,Go(r,!1),n.lanes=4194304)}else{if(!l)if(t=nu(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,_u(n,t),Go(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!Me)return tn(n),null}else 2*Xt()-r.renderingStartTime>wu&&a!==536870912&&(n.flags|=128,l=!0,Go(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Xt(),t.sibling=null,c=Cn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Me?Io(n,c):(a=c,ne(Rn,n),ne(Cn,a),On===null&&(On=n)),Me&&_a(n,r.treeForkCount),t}return tn(n),null;case 22:case 23:return ri(n),Rf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&_u(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&$t(Ur),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Sa(hn),tn(n),null;case 25:return null;case 30:return n.flags|=33554432,tn(n),null}throw Error(s(156,n.tag))}function ey(t,n){switch(hf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Sa(hn),an(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return P(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(s(340));Rr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ri(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Rr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return wf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return an(),null;case 10:return Sa(n.type),null;case 22:case 23:return ri(n),Rf(),t!==null&&$t(Ur),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Sa(hn),null;case 25:return null;default:return null}}function w0(t,n){switch(hf(n),n.tag){case 3:Sa(hn),an();break;case 26:case 27:case 5:P(n);break;case 4:an();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:wf(n);break;case 10:Sa(n.type);break;case 22:case 23:ri(n),Rf(),t!==null&&$t(Ur);break;case 24:Sa(hn)}}function Vo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&t)===t){r=void 0;var c=a.create,g=a.inst;r=c(),g.destroy=r}a=a.next}while(a!==l)}}catch(A){qe(n,n.return,A)}}function $a(t,n,a){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var g=r.inst,A=g.destroy;if(A!==void 0){g.destroy=void 0,l=n;var B=a,tt=A;try{tt()}catch(ft){qe(l,B,ft)}}}r=r.next}while(r!==c)}}catch(ft){qe(n,n.return,ft)}}function D0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Sg(n,a)}catch(r){qe(t,t.return,r)}}}function N0(t,n,a){a.props=zr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){qe(t,n,r)}}function Zi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=pa(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=B_(c)),r=l.ref;break;case 7:if(t.stateNode===null){var g=new ci(t);v(t.child,!1,Wy,g,void 0,void 0),t.stateNode=g}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(A){qe(t,n,A)}}function wn(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){qe(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){qe(t,n,l)}else a.current=null}function vu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)k_(t.stateNode,n[a])}function U0(t){for(var n=t.return;n!==null&&(sd(n)&&k_(t.stateNode,n.stateNode),!rd(n));)n=n.return}function Xo(t){for(var n=t.return;n!==null&&(sd(n)&&qy(t.stateNode,n.stateNode),!rd(n));)n=n.return}function rd(t){return t.tag===5||t.tag===3||t.tag===27}function sd(t){return t&&t.tag===7&&t.stateNode!==null}function od(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){qe(t,t.return,l)}}function ld(t,n,a){try{var r=t.stateNode;Ry(r,t.type,a,n),r[X]=n}catch(l){qe(t,t.return,l)}}function L0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&sr(t.type)||t.tag===4}function ud(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||L0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&sr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cd(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi)),vu(t,r),xe=!0;else if(l!==4&&(l===27&&(vu(t,r),r=null,sr(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(cd(t,n,a,r),t=t.sibling;t!==null;)cd(t,n,a,r),t=t.sibling}function Su(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?a.insertBefore(l,n):a.appendChild(l),vu(t,r),xe=!0;else if(l!==4&&(l===27&&(vu(t,r),r=null,sr(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Su(t,n,a,r),t=t.sibling;t!==null;)Su(t,n,a,r),t=t.sibling}function O0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Dn(n,r,a),n[b]=t,n[X]=a}catch(c){qe(t,t.return,c)}}var xu=!1,si=null;function P0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(xu=!0)}var Ki=null;function I0(){var t=Ki;return Ki=null,t}var qn=0;function Ms(t,n,a,r,l){return qn=0,z0(t.child,n,a,r,l)}function z0(t,n,a,r,l){for(var c=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(r!==null){var A=Yd(g);r.push(A),A.view&&(c=!0)}else c||Yd(g).view&&(c=!0);xu=!0,I_(g,qn===0?n:n+"_"+qn,a),qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||z0(t.child,n,a,r,l)&&(c=!0));t=t.sibling}return c}function Qi(t,n){for(;t!==null;)t.tag===5?z_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Qi(t.child,n)),t=t.sibling}function Mu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Mu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ma(n.default,n.share),n!=="none"&&(Ms(t,a,n,null,!1)||Qi(t.child,!1))}t=t.sibling}}function fd(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,l=pa(r,a),c=ma(r.default,a.paired?r.share:r.enter);c!=="none"?Ms(t,l,c,null,!1)?(Mu(t),a.paired||n||ws(t,r.onEnter)):Qi(t.child,!1):Mu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)fd(t,n),t=t.sibling;else Mu(t)}function dd(t){if(si!==null&&si.size!==0){var n=si;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var c=ma(a.default,a.share);if(c!=="none"&&(Ms(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,ws(t,a.onShare)):Qi(t.child,!1)),n.delete(r),n.size===0)break}}}dd(t)}t=t.sibling}}}function hd(t){if(t.tag===30){var n=t.memoizedProps,a=pa(n,t.stateNode),r=si!==null?si.get(a):void 0,l=ma(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(Ms(t,a,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,si.delete(a),ws(t,n.onShare)):ws(t,n.onExit):Qi(t.child,!1)),si!==null&&dd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)hd(t),t=t.sibling;else si!==null&&dd(t)}function B0(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=pa(n,t.stateNode);n=ma(n.default,n.update),t.flags&=-5,n!=="none"&&Ms(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&B0(t);t=t.sibling}}function pd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Qi(t.child,!1))}pd(t)}t=t.sibling}}function yu(t){if(t.tag===30)t.stateNode.paired=null,Qi(t.child,!1),pd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)yu(t),t=t.sibling;else pd(t)}function F0(t){for(t=t.child;t!==null;)t.tag===30?Qi(t.child,!1):(t.subtreeFlags&33554432)!==0&&F0(t),t=t.sibling}function md(t,n,a,r,l,c,g){for(var A=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(c!==null&&qn<c.length){var tt=c[qn],ft=Yd(B);(tt.view||ft.view)&&(A=!0);var St;if(St=(t.flags&4)===0)if(ft.clip)St=!0;else{St=tt.rect;var j=ft.rect;St=St.y!==j.y||St.x!==j.x||St.height!==j.height||St.width!==j.width}St&&(t.flags|=4),ft.abs?ft=!tt.abs:(tt=tt.rect,ft=ft.rect,ft=tt.height!==ft.height||tt.width!==ft.width),ft&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&I_(B,qn===0?a:a+"_"+qn,l),A&&(t.flags&4)!==0||(Ki===null&&(Ki=[]),Ki.push(B,qn===0?r:r+"_"+qn,n.memoizedProps)),qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?t.flags|=n.flags&32:md(t,n.child,a,r,l,c,g)&&(A=!0));n=n.sibling}return A}function H0(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,l=pa(a,r),c=ma(a.default,a.update),g;g=t.memoizedState,t.memoizedState=null,r=t;var A=t.child;qn=0,l=md(r,A,l,l,c,g,!1),(t.flags&4)!==0&&l&&ws(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&H0(t);t=t.sibling}}var En=!1,ke=!1,Ji=!1,gd=!1,G0=typeof WeakSet=="function"?WeakSet:Set,Tn=null,ji=!1,ko=!1,Eu=!1,_d=!1;function ny(t,n,a){if(t=t.containerInfo,Vd=Fs,t=Wm(t),nf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break t}var A=0,B=-1,tt=-1,ft=0,St=0,j=t,lt=null;e:for(;;){for(var Ot;j!==r||c!==0&&j.nodeType!==3||(B=A+c),j!==g||l!==0&&j.nodeType!==3||(tt=A+l),j.nodeType===3&&(A+=j.nodeValue.length),(Ot=j.firstChild)!==null;)lt=j,j=Ot;for(;;){if(j===t)break e;if(lt===r&&++ft===c&&(B=A),lt===g&&++St===l&&(tt=A),(Ot=j.nextSibling)!==null)break;j=lt,lt=j.parentNode}j=Ot}r=B===-1||tt===-1?null:{start:B,end:tt}}else r=null}r=r||{start:0,end:0}}else r=null;for(Xd={focusedElem:t,selectionRange:r},Fs=!1,a=(a&335544064)===a,Tn=n,n=a?9270:1024;Tn!==null;){if(t=Tn,a&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)a&&hd(r[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&P0(t),Tu(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&hd(r),Tu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&P0(t),Tu(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,Tn=r):(a&&B0(t),Tu(a))}}si=null}function Tu(t){for(;Tn!==null;){var n=Tn,a=t,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){a=void 0,l=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var g=zr(n.type,l);a=c.getSnapshotBeforeUpdate(g,r),c.__reactInternalSnapshotBeforeUpdate=a}catch(A){qe(n,n.return,A)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Qd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Qd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=pa(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=ma(l.default,l.update),l!=="none"&&Ms(r,a,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Tn=r;break}Tn=n.return}}function V0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:$i(t,a),r&4&&Vo(5,a);break;case 1:if($i(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){qe(a,a.return,g)}else{var l=zr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){qe(a,a.return,g)}}r&64&&D0(a),r&512&&Zi(a,a.return);break;case 3:if($i(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Sg(t,n)}catch(g){qe(a,a.return,g)}}break;case 27:n===null&&r&4&&O0(a);case 26:case 5:$i(t,a),n===null&&r&4&&od(a),r&512&&Zi(a,a.return);break;case 12:$i(t,a);break;case 31:$i(t,a),r&4&&q0(t,a);break;case 13:$i(t,a),r&4&&Y0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=py.bind(null,a),Ky(t,a))));break;case 22:if(r=a.memoizedState!==null||En,!r){var c=n!==null&&n.memoizedState!==null||ke;n=En,l=ke,En=r,(ke=c)&&!l?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ui(t,a,r)):$i(t,a),En=n,ke=l}break;case 30:$i(t,a),r&512&&Zi(a,a.return);break;case 7:r&512&&Zi(a,a.return);default:$i(t,a)}}function vd(t,n){for(t=t.child;t!==null;)X0(t,n),t=t.sibling}function X0(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,g=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(B){qe(t,t.return,B)}Sd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,xe=!0}catch(B){qe(t,t.return,B)}break;case 18:try{var A=t.stateNode;n?P_(A,!0):P_(t.stateNode,!1)}catch(B){qe(t,t.return,B)}break;case 22:case 23:t.memoizedState===null&&vd(t,n);break;default:vd(t,n)}}function Sd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:X0(a,r);break t;case 22:a.memoizedState===null&&Sd(a,r);break t;default:Sd(a,r)}}t=t.sibling}}function k0(t){var n=t.alternate;n!==null&&(t.alternate=null,k0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Qt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,Yn=!1;function Di(t,n,a){for(a=a.child;a!==null;)W0(t,n,a),a=a.sibling}function W0(t,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(jt,a)}catch{}switch(a.tag){case 26:ke||wn(a,n),Di(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!ke&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ke||wn(a,n),Xo(a);var r=en,l=Yn;sr(a.type)&&(en=a.stateNode,Yn=!1),Di(t,n,a),K_(a.stateNode,a.type,a.memoizedProps),en=r,Yn=l;break;case 5:ke||wn(a,n),Xo(a);case 6:if(a.tag===6&&Xo(a),r=en,l=Yn,en=null,Di(t,n,a),en=r,Yn=l,en!==null)if(Yn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode),xe=!0}catch(c){qe(a,n,c)}else try{en.removeChild(a.stateNode),xe=!0}catch(c){qe(a,n,c)}break;case 18:en!==null&&(Yn?(t=en,O_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Hs(t)):O_(en,a.stateNode));break;case 4:r=en,l=Yn,en=a.stateNode.containerInfo,Yn=!0,Di(t,n,a),en=r,Yn=l;break;case 0:case 11:case 14:case 15:$a(2,a,n),ke||$a(4,a,n),Di(t,n,a);break;case 1:ke||(wn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&N0(a,n,r)),Di(t,n,a);break;case 21:Di(t,n,a);break;case 22:ke=(r=ke)||a.memoizedState!==null,Di(t,n,a),ke=r;break;case 30:wn(a,n),Di(t,n,a);break;case 7:ke||wn(a,n),Di(t,n,a);break;default:Di(t,n,a)}}function q0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Hs(t)}catch(a){qe(n,n.return,a)}}}function Y0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Hs(t)}catch(a){qe(n,n.return,a)}}function iy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new G0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new G0),n;default:throw Error(s(435,t.tag))}}function bu(t,n){var a=iy(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var l=my.bind(null,t,r);r.then(l,l)}})}function Vn(t,n,a){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],g=t,A=n,B=A;t:for(;B!==null;){switch(B.tag){case 27:if(sr(B.type)){en=B.stateNode,Yn=!1;break t}break;case 5:en=B.stateNode,Yn=!1;break t;case 3:case 4:en=B.stateNode.containerInfo,Yn=!0;break t}B=B.return}if(en===null)throw Error(s(160));W0(g,A,c),en=null,Yn=!1,g=c.alternate,g!==null&&(g.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Z0(n,t,a),n=n.sibling}var Ni=null;function Z0(t,n,a){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var g=r[c];g.ref.impl=g.nextImpl}Vn(n,t,a),Xn(t),l&4&&($a(3,t,t.return),Vo(3,t),$a(5,t,t.return));break;case 1:Vn(n,t,a),Xn(t),l&512&&(ke||r===null||wn(r,r.return)),l&64&&En&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=Ni,Vn(n,t,a),Xn(t),l&512&&(ke||r===null||wn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(En)t.stateNode=N_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Lt]||r[b]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Dn(r,n,a),r[b]=t,Se(r),n=r;break t;case"link":if(c=ev("link","href",l).get(n+(a.href||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(g,1);break e}}r=l.createElement(n),Dn(r,n,a),l.head.appendChild(r);break;case"meta":if(c=ev("meta","content",l).get(n+(a.content||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(g,1);break e}}r=l.createElement(n),Dn(r,n,a),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[b]=t,Se(r),n=r}t.stateNode=n}else En||ih(c,t.type,t.stateNode);else t.stateNode=tv(c,a,t.memoizedProps);else l!==a?(l===null?(n=r.stateNode,n===null||ke||n.parentNode.removeChild(n)):l.count--,a===null?En||ih(c,t.type,t.stateNode):tv(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&ld(t,t.memoizedProps,r.memoizedProps);break;case 27:Vn(n,t,a),Xn(t),l&512&&(ke||r===null||wn(r,r.return)),r!==null&&l&4&&ld(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Ji,Ji=!1,Vn(n,t,a),Ji=c,Xn(t),l&512&&(ke||r===null||wn(r,r.return)),t.flags&32){n=t.stateNode;try{is(n,""),xe=!0}catch(ft){qe(t,t.return,ft)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,ld(t,n,r!==null?r.memoizedProps:n)),l&1024&&(gd=!0);break;case 6:if(Vn(n,t,a),Xn(t),l&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,xe=!0}catch(ft){qe(t,t.return,ft)}}break;case 3:if(xe=!1,Hu=null,c=Ni,Ni=$o(n.containerInfo),Vn(n,t,a),Ni=c,Xn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Hs(n.containerInfo)}catch(ft){qe(t,t.return,ft)}gd&&(gd=!1,K0(t)),xe=!1;break;case 4:l=Ji,Ji=En,r=He(),c=Ni,Ni=$o(t.stateNode.containerInfo),Vn(n,t,a),Xn(t),Ni=c,xe&&ko&&(Eu=!0),xe=r,Ji=l;break;case 12:Vn(n,t,a),Xn(t);break;case 31:Vn(n,t,a),Xn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bu(t,n)));break;case 13:Vn(n,t,a),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Cu=Xt()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bu(t,n)));break;case 22:c=t.memoizedState!==null,g=r!==null&&r.memoizedState!==null;var A=En,B=ke,tt=Ji;En=A||c,Ji=tt||c,ke=B||g,Vn(n,t,a),ke=B,Ji=tt,En=A,Xn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||g||En||ke||(n=g||ke,a=En,r=ke,En=c||En,ke=n,tr(t,2),En=a,ke=r),!c&&Ji||vd(t,c)),l&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,bu(t,a))));break;case 19:Vn(n,t,a),Xn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bu(t,n)));break;case 30:l&512&&(ke||r===null||wn(r,r.return)),l=He(),c=ko,g=(a&335544064)===a,A=t.memoizedProps,ko=g&&ma(A.default,A.update)!=="none",Vn(n,t,a),Xn(t),g&&r!==null&&xe&&(t.flags|=4),ko=c,xe=l;break;case 21:break;case 7:l&512&&(ke||r===null||wn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Vn(n,t,a),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(L0(r)){a=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(sd(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(rd(l))break;l=l.return}var g=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var A=a.stateNode,B=ud(t);Su(t,B,A,g);break;case 5:var tt=a.stateNode;a.flags&32&&(is(tt,""),a.flags&=-33);var ft=ud(t);Su(t,ft,tt,g);break;case 3:case 4:var St=a.stateNode.containerInfo,j=ud(t);cd(t,j,St,g);break;default:throw Error(s(161))}}catch(lt){qe(t,t.return,lt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function K0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;K0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Fs=!0,n.reset(),Fs=!1),t=t.sibling}}function ys(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Q0(n,t),n=n.sibling;else H0(n)}function Q0(t,n){var a=t.alternate;if(a===null)fd(t,!1);else switch(t.tag){case 3:if(_d=ji=!1,I0(),ys(n,t),!ji&&!Eu){if(t=Ki,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var l=t[r+1];z_(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),_d=!0}Ki=null;break;case 5:ys(n,t);break;case 4:r=ji,ji=!1,ys(n,t),ji&&(Eu=!0),ji=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?fd(t,!1):ys(n,t));break;case 30:r=ji,l=I0(),ji=!1,ys(n,t),ji&&(t.flags|=4);var c=t.memoizedProps,g=t.stateNode;n=pa(c,g),g=pa(a.memoizedProps,g);var A=ma(c.default,c.update);A==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,qn=0,n=md(t,a,n,g,A,c,!0),qn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(ws(t,t.memoizedProps.onUpdate),Ki=l):l!==null&&(l.push.apply(l,Ki),Ki=l),ji=(t.flags&32)!==0?!0:r;break;default:ys(n,t)}}function $i(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)V0(t,n.alternate,n),n=n.sibling}function tr(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:$a(4,a,a.return),tr(a,r);break;case 1:wn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&N0(a,a.return,l),tr(a,r);break;case 27:(r&2)!==0&&K_(a.stateNode,a.type,a.memoizedProps);case 5:wn(a,a.return),a.tag!==5&&a.tag!==27||Xo(a),tr(a,r);break;case 6:Xo(a);break;case 26:wn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||ke||l.parentNode.removeChild(l),tr(a,r);break;case 22:a.memoizedState===null&&tr(a,r);break;case 30:wn(a,a.return),tr(a,r);break;case 7:wn(a,a.return);default:tr(a,r)}t=t.sibling}}function Ui(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,l=t,c=n,g=c.flags,A=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Ui(l,c,a),Vo(4,c);break;case 1:if(Ui(l,c,a),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(ft){qe(r,r.return,ft)}if(r=c,l=r.updateQueue,l!==null){var B=r.stateNode;try{var tt=l.shared.hiddenCallbacks;if(tt!==null)for(l.shared.hiddenCallbacks=null,l=0;l<tt.length;l++)vg(tt[l],B)}catch(ft){qe(r,r.return,ft)}}A&&g&64&&D0(c),Zi(c,c.return);break;case 27:(a&2)!==0&&O0(c);case 5:c.tag!==5&&c.tag!==27||U0(c),Ui(l,c,a),A&&r===null&&g&4&&od(c),Zi(c,c.return);break;case 6:U0(c);break;case 26:B=c.stateNode,c.memoizedState!==null||B===null||En||ih($o(B.ownerDocument),c.type,B),Ui(l,c,a),A&&r===null&&g&4&&od(c),Zi(c,c.return);break;case 12:Ui(l,c,a);break;case 31:Ui(l,c,a),A&&g&4&&q0(l,c);break;case 13:Ui(l,c,a),A&&g&4&&Y0(l,c);break;case 22:c.memoizedState===null&&Ui(l,c,a),Zi(c,c.return);break;case 30:Ui(l,c,a),Zi(c,c.return);break;case 7:Zi(c,c.return);default:Ui(l,c,a)}n=n.sibling}}function xd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&wo(a))}function Md(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&wo(t))}function Ti(t,n,a,r){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)J0(t,n,a,r),n=n.sibling;else l&&F0(n)}function J0(t,n,a,r){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&yu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(t,n,a,r),c&2048&&Vo(9,n);break;case 1:Ti(t,n,a,r);break;case 3:Ti(t,n,a,r),l&&_d&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&wo(c)));break;case 12:if(c&2048){Ti(t,n,a,r),c=n.stateNode;try{var g=n.memoizedProps,A=g.id,B=g.onPostCommit;typeof B=="function"&&B(A,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(tt){qe(n,n.return,tt)}}else Ti(t,n,a,r);break;case 31:Ti(t,n,a,r);break;case 13:Ti(t,n,a,r);break;case 23:break;case 22:g=n.stateNode,A=n.alternate,n.memoizedState!==null?(l&&A!==null&&A.memoizedState===null&&yu(A),g._visibility&2?Ti(t,n,a,r):Wo(t,n)):(l&&A!==null&&A.memoizedState!==null&&yu(n),g._visibility&2?Ti(t,n,a,r):(g._visibility|=2,Es(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&xd(A,n);break;case 24:Ti(t,n,a,r),c&2048&&Md(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(Qi(c.child,!0),Qi(n.child,!0))),Ti(t,n,a,r);break;default:Ti(t,n,a,r)}}function Es(t,n,a,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,g=n,A=a,B=r,tt=g.flags;switch(g.tag){case 0:case 11:case 15:Es(c,g,A,B,l),Vo(8,g);break;case 23:break;case 22:var ft=g.stateNode;g.memoizedState!==null?ft._visibility&2?Es(c,g,A,B,l):Wo(c,g):(ft._visibility|=2,Es(c,g,A,B,l)),l&&tt&2048&&xd(g.alternate,g);break;case 24:Es(c,g,A,B,l),l&&tt&2048&&Md(g.alternate,g);break;default:Es(c,g,A,B,l)}n=n.sibling}}function Wo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,l=r.flags;switch(r.tag){case 22:Wo(a,r),l&2048&&xd(r.alternate,r);break;case 24:Wo(a,r),l&2048&&Md(r.alternate,r);break;default:Wo(a,r)}n=n.sibling}}var Br=8192;function Fr(t,n,a){if(t.subtreeFlags&Br)for(t=t.child;t!==null;)j0(t,n,a),t=t.sibling}function j0(t,n,a){switch(t.tag){case 26:Fr(t,n,a),t.flags&Br&&(t.memoizedState!==null?uE(a,Ni,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&rv(a,t)));break;case 5:Fr(t,n,a),t.flags&Br&&(t=t.stateNode,(n&335544128)===n&&rv(a,t));break;case 3:case 4:var r=Ni;Ni=$o(t.stateNode.containerInfo),Fr(t,n,a),Ni=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Br,Br=16777216,Fr(t,n,a),Br=r):Fr(t,n,a));break;case 30:if((t.flags&Br)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,si===null&&(si=new Map),si.set(r,l)}Fr(t,n,a);break;default:Fr(t,n,a)}}function $0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function qo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Tn=r,e_(r,t)}$0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)t_(t),t=t.sibling}function t_(t){switch(t.tag){case 0:case 11:case 15:qo(t),t.flags&2048&&$a(9,t,t.return);break;case 3:qo(t);break;case 12:qo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Au(t)):qo(t);break;default:qo(t)}}function Au(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Tn=r,e_(r,t)}$0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),Au(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Au(n));break;default:Au(n)}t=t.sibling}}function e_(t,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:$a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:wo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Tn=r;else t:for(a=t;Tn!==null;){r=Tn;var l=r.sibling,c=r.return;if(k0(r),r===a){Tn=null;break t}if(l!==null){l.return=c,Tn=l;break t}Tn=c}}}var ay={getCacheForType:function(t){var n=An(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(hn).controller.signal}},ry=typeof WeakMap=="function"?WeakMap:Map,Ge=0,Je=null,Ee=null,Ce=0,We=0,oi=null,er=!1,Ts=!1,yd=!1,Ta=0,fn=0,nr=0,Hr=0,Ru=0,li=0,bs=0,Yo=null,Zn=null,Ed=!1,Cu=0,n_=0,wu=1/0,Du=null,ir=null,rn=0,Li=null,Gr=null,ta=0,Td=0,bd=null,i_=null,As=null,Rs=null,Cs=null,Zo=0,Nu=null;function ui(){return(Ge&2)!==0&&Ce!==0?Ce&-Ce:mt.T!==null?Pd():wl()}function a_(){if(li===0)if((Ce&536870912)===0||Me){var t=xr;xr<<=1,(xr&3932160)===0&&(xr=262144),li=t}else li=536870912;return t=Rn.current,t!==null&&(t.flags|=32),li}function ws(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=B_(pa(t.memoizedProps,a))),Rs===null&&(Rs=[]),Rs.push(n.bind(null,r))}}function Kn(t,n,a){(t===Je&&(We===2||We===9)||t.cancelPendingCommit!==null)&&(Ds(t,0),ar(t,Ce,li,!1)),Xi(t,a),((Ge&2)===0||t!==Je)&&(t===Je&&((Ge&2)===0&&(Hr|=a),fn===4&&ar(t,Ce,li,!1)),ea(t))}function r_(t,n,a){if((Ge&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Fa(t,n),l=r?ly(t,n):Rd(t,n,!0),c=r;do{if(l===0){Ts&&!r&&ar(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!sy(a)){l=Rd(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var A=t;l=Yo;var B=A.current.memoizedState.isDehydrated;if(B&&(Ds(A,g).flags|=256),g=Rd(A,g,!1),g!==2&&g!==6){if(yd&&!B){A.errorRecoveryDisabledLanes|=c,Hr|=c,l=4;break t}c=Zn,Zn=l,c!==null&&(Zn===null?Zn=c:Zn.push.apply(Zn,c))}l=g}if(c=!1,l!==2)continue}}if(l===1){Ds(t,0),ar(t,n,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ar(r,n,li,!er);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=Cu+300-Xt(),10<l)){if(ar(r,n,li,!er),Mr(r,0,!0)!==0)break t;ta=n,r.timeoutHandle=qd(s_.bind(null,r,a,Zn,Du,Ed,n,li,Hr,bs,er,c,"Throttled",-0,0),l);break t}s_(r,a,Zn,Du,Ed,n,li,Hr,bs,er,c,null,-0,0)}}break}while(!0);ea(t)}function s_(t,n,a,r,l,c,g,A,B,tt,ft,St,j,lt){t.timeoutHandle=-1;var Ot=n.subtreeFlags,Jt=(c&335544064)===c;if(St=null,(Jt||Ot&8192||(Ot&16785408)===16785408)&&(St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},si=null,j0(n,c,St),Jt&&(Ot=St,Jt=t.containerInfo,Jt=(Jt.nodeType===9?Jt:Jt.ownerDocument).__reactViewTransition,Jt!=null&&(Ot.count++,Ot.waitingForViewTransition=!0,Ot=nl.bind(Ot),Jt.finished.then(Ot,Ot))),Ot=(c&62914560)===c?Cu-Xt():(c&4194048)===c?n_-Xt():0,Ot=cE(St,Ot),Ot!==null)){ta=c,t.cancelPendingCommit=Ot(p_.bind(null,t,n,c,a,r,l,g,A,B,tt,ft,St,null,j,lt)),ar(t,c,g,!tt);return}p_(t,n,c,a,r,l,g,A,B,tt,ft,St)}function sy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],c=l.getSnapshot;l=l.value;try{if(!ai(c(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ar(t,n,a,r){n=Vi(t,n),n&=~Ru,n&=~Hr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var c=31-de(l),g=1<<c;r[c]=-1,l&=~g}a!==0&&yr(t,a,n)}function Uu(){return(Ge&6)===0?(Ko(0),!1):!0}function Ad(){if(Ee!==null){if(We===0)var t=Ee.return;else t=Ee,va=Cr=null,Of(t),gs=null,Uo=0,t=Ee;for(;t!==null;)w0(t.alternate,t),t=t.return;Ee=null}}function Ds(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,Dy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ta=0,Ad(),Je=t,Ee=a=ga(t.current,null),Ce=n,We=0,oi=null,er=!1,Ts=Fa(t,n),yd=!1,bs=li=Ru=Hr=nr=fn=0,Zn=Yo=null,Ed=!1,Ta=Vi(t,n),Hl(),a}function o_(t,n){ge=null,mt.H=fu,n===ms||n===Jl?(n=pg(),We=3):n===Mf?(n=pg(),We=4):We=n===Kf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,Ee===null&&(fn=1,du(t,xi(n,t.current)))}function l_(){var t=Rn.current;return t===null?!0:(Ce&4194048)===Ce?On===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?t===On:!1}function u_(){var t=mt.H;return mt.H=fu,t===null?fu:t}function c_(){var t=mt.A;return mt.A=ay,t}function Lu(){fn=4,er||(Ce&4194048)!==Ce&&Rn.current!==null||(Ts=!0),(nr&134217727)===0&&(Hr&134217727)===0||Je===null||ar(Je,Ce,li,!1)}function Rd(t,n,a){var r=Ge;Ge|=2;var l=u_(),c=c_();(Je!==t||Ce!==n)&&(Du=null,Ds(t,n)),n=!1;var g=fn;t:do try{if(We!==0&&Ee!==null){var A=Ee,B=oi;switch(We){case 8:Ad(),g=6;break t;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var tt=We;if(We=0,oi=null,Ns(t,A,B,tt),a&&Ts){g=0;break t}break;default:tt=We,We=0,oi=null,Ns(t,A,B,tt)}}oy(),g=fn;break}catch(ft){o_(t,ft)}while(!0);return n&&t.shellSuspendCounter++,va=Cr=null,Ge=r,mt.H=l,mt.A=c,Ee===null&&(Je=null,Ce=0,Hl()),g}function oy(){for(;Ee!==null;)f_(Ee)}function ly(t,n){var a=Ge;Ge|=2;var r=u_(),l=c_();Je!==t||Ce!==n?(Du=null,wu=Xt()+500,Ds(t,n)):Ts=Fa(t,n);t:do try{if(We!==0&&Ee!==null){n=Ee;var c=oi;e:switch(We){case 1:We=0,oi=null,Ns(t,n,c,1);break;case 2:case 9:if(dg(c)){We=0,oi=null,d_(n);break}n=function(){We!==2&&We!==9||Je!==t||(We=7),ea(t)},c.then(n,n);break t;case 3:We=7;break t;case 4:We=5;break t;case 7:dg(c)?(We=0,oi=null,d_(n)):(We=0,oi=null,Ns(t,n,c,7));break;case 5:var g=null;switch(Ee.tag){case 26:g=Ee.memoizedState;case 5:case 27:var A=Ee;if(g?iv(g):A.stateNode.complete){We=0,oi=null;var B=A.sibling;if(B!==null)Ee=B;else{var tt=A.return;tt!==null?(Ee=tt,Ou(tt)):Ee=null}break e}}We=0,oi=null,Ns(t,n,c,5);break;case 6:We=0,oi=null,Ns(t,n,c,6);break;case 8:Ad(),fn=6;break t;default:throw Error(s(462))}}uy();break}catch(ft){o_(t,ft)}while(!0);return va=Cr=null,mt.H=r,mt.A=l,Ge=a,Ee!==null?0:(Je=null,Ce=0,Hl(),fn)}function uy(){for(;Ee!==null&&!zt();)f_(Ee)}function f_(t){var n=R0(t.alternate,t,Ta);t.memoizedProps=t.pendingProps,n===null?Ou(t):Ee=n}function d_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=x0(a,n,n.pendingProps,n.type,void 0,Ce);break;case 11:n=x0(a,n,n.pendingProps,n.type.render,n.ref,Ce);break;case 5:Of(n);var r=n;r===yn&&(Me?(ql(r),r.tag===5&&r.stateNode!=null&&($e=r.stateNode)):(ql(r),Me=!0));default:w0(a,n),n=Ee=eg(n,Ta),n=R0(a,n,Ta)}t.memoizedProps=t.pendingProps,n===null?Ou(t):Ee=n}function Ns(t,n,a,r){va=Cr=null,Of(n),gs=null,Uo=0;var l=n.return;try{if(QM(t,l,n,a,Ce)){fn=1,du(t,xi(a,t.current)),Ee=null;return}}catch(c){if(l!==null)throw Ee=l,c;fn=1,du(t,xi(a,t.current)),Ee=null;return}n.flags&32768?(Me||r===1?t=!0:Ts||(Ce&536870912)!==0?t=!1:(er=t=!0,(r===2||r===9||r===3||r===6)&&(r=Rn.current,r!==null&&r.tag===13&&(r.flags|=16384))),h_(n,t)):Ou(n)}function Ou(t){var n=t;do{if((n.flags&32768)!==0){h_(n,er);return}t=n.return;var a=ty(n.alternate,n,Ta);if(a!==null){Ee=a;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=t}while(n!==null);fn===0&&(fn=5)}function h_(t,n){do{var a=ey(t.alternate,t);if(a!==null){a.flags&=32767,Ee=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Ee=t;return}Ee=t=a}while(t!==null);fn=6,Ee=null}function p_(t,n,a,r,l,c,g,A,B,tt,ft,St){t.cancelPendingCommit=null;do Pu();while(rn!==0);if((Ge&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Je&&(Ee=Je=null,Ce=0),Gr=n,Li=t,ta=a,bd=l,i_=r,cy(t,n,a,g,A,B,St)}}function cy(t,n,a,r,l,c,g){var A=n.lanes|n.childLanes;if(Td=A,A|=lf,Cl(t,a,A,r,l,c),Rs=null,(a&335544064)===a?(Cs=BM(t),r=10262):(Cs=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,gy(wt,function(){return Nd(),null})):(t.callbackNode=null,t.callbackPriority=0),xu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=mt.T,mt.T=null,l=At.p,At.p=2,c=Ge,Ge|=4;try{ny(t,n,a)}finally{Ge=c,At.p=l,mt.T=r}}rn=1,xu?As=Iy(g,t.containerInfo,Cs,Cd,wd,dy,Dd,Nd,fy):(Cd(),wd(),Dd())}function fy(t){if(rn!==0){var n=Li.onRecoverableError;n(t,{componentStack:null})}}function dy(){rn===3&&(rn=0,Q0(Gr,Li),rn=4)}function Cd(){if(rn===1){rn=0;var t=Li,n=Gr,a=ta,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=mt.T,mt.T=null;var l=At.p;At.p=2;var c=Ge;Ge|=4;try{ko=Eu=!1,Z0(n,t,a),a=Xd;var g=Wm(t.containerInfo),A=a.focusedElem,B=a.selectionRange;if(g!==A&&A&&A.ownerDocument&&km(A.ownerDocument.documentElement,A)){if(B!==null&&nf(A)){var tt=B.start,ft=B.end;if(ft===void 0&&(ft=tt),"selectionStart"in A)A.selectionStart=tt,A.selectionEnd=Math.min(ft,A.value.length);else{var St=A.ownerDocument||document,j=St&&St.defaultView||window;if(j.getSelection){var lt=j.getSelection(),Ot=A.textContent.length,Jt=Math.min(B.start,Ot),_e=B.end===void 0?Jt:Math.min(B.end,Ot);!lt.extend&&Jt>_e&&(g=_e,_e=Jt,Jt=g);var $=Xm(A,Jt),W=Xm(A,_e);if($&&W&&(lt.rangeCount!==1||lt.anchorNode!==$.node||lt.anchorOffset!==$.offset||lt.focusNode!==W.node||lt.focusOffset!==W.offset)){var it=St.createRange();it.setStart($.node,$.offset),lt.removeAllRanges(),Jt>_e?(lt.addRange(it),lt.extend(W.node,W.offset)):(it.setEnd(W.node,W.offset),lt.addRange(it))}}}}for(St=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&St.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<St.length;A++){var vt=St[A];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Fs=!!Vd,Xd=Vd=null}finally{Ge=c,At.p=l,mt.T=r}}t.current=n,rn=2}}function wd(){if(rn===2){rn=0;var t=Li,n=Gr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=mt.T,mt.T=null;var r=At.p;At.p=2;var l=Ge;Ge|=4;try{V0(t,n.alternate,n)}finally{Ge=l,At.p=r,mt.T=a}}rn=3}}function Dd(){if(rn===4||rn===3){rn=0;var t=As;As=null,Pt();var n=Li,a=Gr,r=ta,l=i_,c=(r&335544064)===r?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?rn=5:(rn=0,Gr=Li=null,m_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(ir=null),_o(r),a=a.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(jt,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=mt.T,c=At.p,At.p=2,mt.T=null;try{for(var g=n.onRecoverableError,A=0;A<l.length;A++){var B=l[A];g(B.value,{componentStack:B.stack})}}finally{mt.T=a,At.p=c}}if(l=Rs,g=Cs,Cs=null,l!==null&&(Rs=null,g===null&&(g=[]),t!==null))for(B=0;B<l.length;B++)a=(0,l[B])(g),a!==void 0&&t.finished.finally(a);(ta&3)!==0&&Pu(),ea(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Nu?Zo++:(Zo=0,Nu=n):(Zo=0,Nu=null),Ko(0)}}function m_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,wo(n)))}function Pu(){return As!==null&&(As.skipTransition(),As=null),Cd(),wd(),Dd(),Nd()}function Nd(){if(rn!==5)return!1;var t=Li,n=Td;Td=0;var a=_o(ta),r=mt.T,l=At.p;try{At.p=32>a?32:a,mt.T=null,a=bd,bd=null;var c=Li,g=ta;if(rn=0,Gr=Li=null,ta=0,(Ge&6)!==0)throw Error(s(331));var A=Ge;if(Ge|=4,t_(c.current),J0(c,c.current,g,a),Ge=A,Ko(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(jt,c)}catch{}return!0}finally{At.p=l,mt.T=r,m_(t,n)}}function g_(t,n,a){n=xi(a,n),n=Zf(t.stateNode,n,2),t=Ka(t,n,2),t!==null&&(Xi(t,2),ea(t))}function qe(t,n,a){if(t.tag===3)g_(t,t,a);else for(;n!==null;){if(n.tag===3){g_(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){t=xi(a,t),a=d0(2),r=Ka(n,a,2),r!==null&&(h0(a,r,n,t),Xi(r,2),ea(r));break}}n=n.return}}function Ud(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new ry;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(a)||(yd=!0,l.add(a),t=hy.bind(null,t,n,a),n.then(t,t))}function hy(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Je===t&&(Ce&a)===a&&((fn===4||fn===3&&(Ce&62914560)===Ce&&300>Xt()-Cu)&&(Ge&2)===0?Ds(t,0):Ru|=a,bs===Ce&&(bs=0)),ea(t)}function __(t,n){n===0&&(n=ho()),t=br(t,n),t!==null&&(Xi(t,n),ea(t))}function py(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),__(t,a)}function my(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),__(t,a)}function gy(t,n){return Dt(t,n)}var Us=null,Ls=null,Ld=!1,Iu=!1,Od=!1,rr=0;function ea(t){t!==Ls&&t.next===null&&(Ls===null?Us=Ls=t:Ls=Ls.next=t),Iu=!0,Ld||(Ld=!0,vy())}function Ko(t,n){if(!Od&&Iu){Od=!0;do for(var a=!1,r=Us;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var g=r.suspendedLanes,A=r.pingedLanes;c=(1<<31-de(42|t)+1)-1,c&=l&~(g&~A),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,M_(r,c))}else c=Ce,c=Mr(r,r===Je?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Fa(r,c)||(a=!0,M_(r,c));r=r.next}while(a);Od=!1}}function _y(){v_()}function v_(){Iu=Ld=!1;var t=0;rr!==0&&wy()&&(t=rr);for(var n=Xt(),a=null,r=Us;r!==null;){var l=r.next,c=S_(r,n);c===0?(r.next=null,a===null?Us=l:a.next=l,l===null&&(Ls=a)):(a=r,(t!==0||(c&3)!==0)&&(Iu=!0)),r=l}rn!==0&&rn!==5||Ko(t),rr!==0&&(rr=0)}function S_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-de(c),A=1<<g,B=l[g];B===-1?((A&a)===0||(A&r)!==0)&&(l[g]=fo(A,n)):B<=n&&(t.expiredLanes|=A),c&=~A}if(n=Je,a=Ce,a=Mr(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(We===2||We===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&te(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Fa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&te(r),_o(a)){case 2:case 8:a=Q;break;case 32:a=wt;break;case 268435456:a=Ut;break;default:a=wt}return r=x_.bind(null,t),a=Dt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&te(r),t.callbackPriority=2,t.callbackNode=null,2}function x_(t,n){if(rn!==0&&rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Pu()&&t.callbackNode!==a)return null;var r=Ce;return r=Mr(t,t===Je?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(r_(t,r,n),S_(t,Xt()),t.callbackNode!=null&&t.callbackNode===a?x_.bind(null,t):null)}function M_(t,n){if(Pu())return null;r_(t,n,!0)}function vy(){Ny(function(){(Ge&6)!==0?Dt(ce,_y):v_()})}function Pd(){if(rr===0){var t=Nr;t===0&&(t=ts,ts<<=1,(ts&261888)===0&&(ts=256)),rr=t}return rr}function y_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ul(t)}function Sy(t,n,a,r,l){if(n==="submit"&&a&&a.stateNode===l){var c=y_((l[X]||null).action),g=r.submitter;g&&(n=(n=g[X]||null)?y_(n.formAction):g.getAttribute("formAction"),n!==null&&(c=n,g=null));var A=new Il("action","action",null,r,l);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rr!==0){var B=new FormData(l,g);Xf(a,{pending:!0,data:B,method:l.method,action:c},null,B)}}else typeof c=="function"&&(A.preventDefault(),B=new FormData(l,g),Xf(a,{pending:!0,data:B,method:l.method,action:c},c,B))},currentTarget:l}]})}}for(var Id=0;Id<of.length;Id++){var zd=of[Id],xy=zd.toLowerCase(),My=zd[0].toUpperCase()+zd.slice(1);wi(xy,"on"+My)}wi(Zm,"onAnimationEnd"),wi(Km,"onAnimationIteration"),wi(Qm,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(DM,"onTransitionRun"),wi(NM,"onTransitionStart"),wi(UM,"onTransitionCancel"),wi(Jm,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qo));function E_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],l=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var g=r.length-1;0<=g;g--){var A=r[g],B=A.instance,tt=A.currentTarget;if(A=A.listener,B!==c&&l.isPropagationStopped())break t;c=A,l.currentTarget=tt;try{c(l)}catch(ft){Fl(ft)}l.currentTarget=null,c=B}else for(g=0;g<r.length;g++){if(A=r[g],B=A.instance,tt=A.currentTarget,A=A.listener,B!==c&&l.isPropagationStopped())break t;c=A,l.currentTarget=tt;try{c(l)}catch(ft){Fl(ft)}l.currentTarget=null,c=B}}}}function Te(t,n){var a=n[st];a===void 0&&(a=n[st]=new Set);var r=t+"__bubble";a.has(r)||(T_(n,t,2,!1),a.add(r))}function Bd(t,n,a){var r=0;n&&(r|=4),T_(a,t,r,n)}var zu="_reactListening"+Math.random().toString(36).slice(2);function Fd(t){if(!t[zu]){t[zu]=!0,Xe.forEach(function(a){a!=="selectionchange"&&(yy.has(a)||Bd(a,!1,t),Bd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[zu]||(n[zu]=!0,Bd("selectionchange",!1,n))}}function T_(t,n,a,r){switch(hv(n)){case 2:var l=pE;break;case 8:l=mE;break;default:l=rh}a=l.bind(null,n,a,t),l=void 0,!qc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,a,{capture:!0,passive:l}):t.addEventListener(n,a,!0):l!==void 0?t.addEventListener(n,a,{passive:l}):t.addEventListener(n,a,!1)}function Hd(t,n,a,r,l){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var A=r.stateNode.containerInfo;if(A===l)break;if(g===4)for(g=r.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===l)return;g=g.return}for(;A!==null;){if(g=se(A),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){r=c=g;continue t}A=A.parentNode}}r=r.return}Tm(function(){var tt=c,ft=kc(a),St=[];t:{var j=jm.get(t);if(j!==void 0){var lt=Il,Ot=t;switch(t){case"keypress":if(Ol(a)===0)break t;case"keydown":case"keyup":lt=sM;break;case"focusin":Ot="focus",lt=Qc;break;case"focusout":Ot="blur",lt=Qc;break;case"beforeblur":case"afterblur":lt=Qc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=fM;break;case Zm:case Km:case Qm:lt=Jx;break;case Jm:lt=hM;break;case"scroll":case"scrollend":lt=qx;break;case"wheel":lt=mM;break;case"copy":case"cut":case"paste":lt=$x;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=wm;break;case"submit":lt=uM;break;case"toggle":case"beforetoggle":lt=_M}var Jt=(n&4)!==0,_e=!Jt&&(t==="scroll"||t==="scrollend"),$=Jt?j!==null?j+"Capture":null:j;Jt=[];for(var W=tt,it;W!==null;){var vt=W;if(it=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||it===null||$===null||(vt=vo(W,$),vt!=null&&Jt.push(Jo(W,vt,it))),_e)break;W=W.return}0<Jt.length&&(j=new lt(j,Ot,null,a,ft),St.push({event:j,listeners:Jt}))}}if((n&7)===0){t:{if(lt=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",lt&&a!==Xc&&(Ot=a.relatedTarget||a.fromElement)&&(se(Ot)||Ot[dt]))break t;(j||lt)&&(Ot=ft.window===ft?ft:(lt=ft.ownerDocument)?lt.defaultView||lt.parentWindow:window,j?(lt=a.relatedTarget||a.toElement,j=tt,lt=lt?se(lt):null,lt!==null&&(_e=f(lt),Jt=lt.tag,lt!==_e||Jt!==5&&Jt!==27&&Jt!==6)&&(lt=null)):(j=null,lt=tt),j!==lt&&(Jt=Rm,vt="onMouseLeave",$="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=wm,vt="onPointerLeave",$="onPointerEnter",W="pointer"),_e=j==null?Ot:Yt(j),it=lt==null?Ot:Yt(lt),Ot=new Jt(vt,W+"leave",j,a,ft),Ot.target=_e,Ot.relatedTarget=it,vt=null,se(ft)===tt&&(Jt=new Jt($,W+"enter",lt,a,ft),Jt.target=it,Jt.relatedTarget=_e,vt=Jt),_e=vt,Jt=j&&lt?D(j,lt,Ey):null,j!==null&&b_(St,Ot,j,Jt,!1),lt!==null&&_e!==null&&b_(St,_e,lt,Jt,!0)))}t:{if(j=tt?Yt(tt):window,lt=j.nodeName&&j.nodeName.toLowerCase(),lt==="select"||lt==="input"&&j.type==="file")var Zt=zm;else if(Pm(j))if(Bm)Zt=RM;else{Zt=bM;var we=TM}else lt=j.nodeName,!lt||lt.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?tt&&Vc(tt.elementType)&&(Zt=zm):Zt=AM;if(Zt&&(Zt=Zt(t,tt))){Im(St,Zt,a,ft);break t}we&&we(t,j,tt)}switch(we=tt?Yt(tt):window,t){case"focusin":(Pm(we)||we.contentEditable==="true")&&(os=we,af=tt,Ao=null);break;case"focusout":Ao=af=os=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,qm(St,a,ft);break;case"selectionchange":if(wM)break;case"keydown":case"keyup":qm(St,a,ft)}var ee;if(jc)t:{switch(t){case"compositionstart":var re="onCompositionStart";break t;case"compositionend":re="onCompositionEnd";break t;case"compositionupdate":re="onCompositionUpdate";break t}re=void 0}else ss?Lm(t,a)&&(re="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(Dm&&a.locale!=="ko"&&(ss||re!=="onCompositionStart"?re==="onCompositionEnd"&&ss&&(ee=bm()):(Ha=ft,Yc="value"in Ha?Ha.value:Ha.textContent,ss=!0)),we=Bu(tt,re),0<we.length&&(re=new Cm(re,t,null,a,ft),St.push({event:re,listeners:we}),ee?re.data=ee:(ee=Om(a),ee!==null&&(re.data=ee)))),(ee=SM?xM(t,a):MM(t,a))&&(re=Bu(tt,"onBeforeInput"),0<re.length&&(we=new Cm("onBeforeInput","beforeinput",null,a,ft),St.push({event:we,listeners:re}),we.data=ee)),Sy(St,t,tt,a,ft)}E_(St,n)})}function Jo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Bu(t,n){for(var a=n+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=vo(t,a),l!=null&&r.unshift(Jo(t,l,c)),l=vo(t,n),l!=null&&r.push(Jo(t,l,c))),t.tag===3)return r;t=t.return}return[]}function Ey(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function b_(t,n,a,r,l){for(var c=n._reactName,g=[];a!==null&&a!==r;){var A=a,B=A.alternate,tt=A.stateNode;if(A=A.tag,B!==null&&B===r)break;A!==5&&A!==26&&A!==27||tt===null||(B=tt,l?(tt=vo(a,c),tt!=null&&g.unshift(Jo(a,tt,B))):l||(tt=vo(a,c),tt!=null&&g.push(Jo(a,tt,B)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Ty=/\r\n?/g,by=/\u0000|\uFFFD/g;function A_(t){return(typeof t=="string"?t:""+t).replace(Ty,`
`).replace(by,"")}function R_(t,n){return n=A_(n),A_(t)===n}function Ye(t,n,a,r,l,c){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||is(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&is(t,""+r);else return;break;case"className":ii(t,"class",r);break;case"tabIndex":ii(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ii(t,a,r);break;case"style":ym(t,r,c);return;case"data":if(n!=="object"){ii(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Ul(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&Ye(t,n,"name",l.name,l,null),Ye(t,n,"formEncType",l.formEncType,l,null),Ye(t,n,"formMethod",l.formMethod,l,null),Ye(t,n,"formTarget",l.formTarget,l,null)):(Ye(t,n,"encType",l.encType,l,null),Ye(t,n,"method",l.method,l,null),Ye(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Ul(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Wi);return;case"onScroll":r!=null&&Te("scroll",t);return;case"onScrollEnd":r!=null&&Te("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Ul(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Te("beforetoggle",t),Te("toggle",t),je(t,"popover",r);break;case"xlinkActuate":Re(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Re(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Re(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Re(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Re(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Re(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Re(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Re(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Re(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":je(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=kx.get(a)||a,je(t,a,r);else return}xe=!0}function Gd(t,n,a,r,l,c){switch(a){case"style":ym(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")is(t,r);else if(typeof r=="number"||typeof r=="bigint")is(t,""+r);else return;break;case"onScroll":r!=null&&Te("scroll",t);return;case"onScrollEnd":r!=null&&Te("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Wi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!vn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),c=a.slice(2,l?a.length-7:void 0),n=t[X]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,r,l);break t}xe=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):je(t,a,r)}return}xe=!0}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",t),Te("load",t);var r=!1,l=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(t,n,c,g,a,null)}}l&&Ye(t,n,"srcSet",a.srcSet,a,null),r&&Ye(t,n,"src",a.src,a,null);return;case"input":Te("invalid",t);var A=c=g=l=null,B=null,tt=null;for(r in a)if(a.hasOwnProperty(r)){var ft=a[r];if(ft!=null)switch(r){case"name":l=ft;break;case"type":g=ft;break;case"checked":B=ft;break;case"defaultChecked":tt=ft;break;case"value":c=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Ye(t,n,r,ft,a,null)}}vm(t,c,A,B,tt,g,l,!1);return;case"select":Te("invalid",t),r=g=c=null;for(l in a)if(a.hasOwnProperty(l)&&(A=a[l],A!=null))switch(l){case"value":c=A;break;case"defaultValue":g=A;break;case"multiple":r=A;default:Ye(t,n,l,A,a,null)}n=c,a=g,t.multiple=!!r,n!=null?ns(t,!!r,n,!1):a!=null&&ns(t,!!r,a,!0);return;case"textarea":Te("invalid",t),c=l=r=null;for(g in a)if(a.hasOwnProperty(g)&&(A=a[g],A!=null))switch(g){case"value":r=A;break;case"defaultValue":l=A;break;case"children":c=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ye(t,n,g,A,a,null)}xm(t,r,l,c);return;case"option":for(B in a)a.hasOwnProperty(B)&&(r=a[B],r!=null)&&(B==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Ye(t,n,B,r,a,null));return;case"dialog":Te("beforetoggle",t),Te("toggle",t),Te("cancel",t),Te("close",t);break;case"iframe":case"object":Te("load",t);break;case"video":case"audio":for(r=0;r<Qo.length;r++)Te(Qo[r],t);break;case"image":Te("error",t),Te("load",t);break;case"details":Te("toggle",t);break;case"embed":case"source":case"link":Te("error",t),Te("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(r=a[tt],r!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(t,n,tt,r,a,null)}return;default:if(Vc(n)){for(ft in a)a.hasOwnProperty(ft)&&(r=a[ft],r!==void 0&&Gd(t,n,ft,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Ye(t,n,A,r,a,null))}var Ay={};function Ry(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,g=null,A=null,B=null,tt=null,ft=null;for(lt in a){var St=a[lt];if(a.hasOwnProperty(lt)&&St!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":B=St;default:r.hasOwnProperty(lt)||Ye(t,n,lt,null,r,St)}}for(var j in r){var lt=r[j];if(St=a[j],r.hasOwnProperty(j)&&(lt!=null||St!=null))switch(j){case"type":lt!==St&&(xe=!0),c=lt;break;case"name":lt!==St&&(xe=!0),l=lt;break;case"checked":lt!==St&&(xe=!0),tt=lt;break;case"defaultChecked":lt!==St&&(xe=!0),ft=lt;break;case"value":lt!==St&&(xe=!0),g=lt;break;case"defaultValue":lt!==St&&(xe=!0),A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==St&&Ye(t,n,j,lt,r,St)}}Hc(t,g,A,B,tt,ft,c,l);return;case"select":lt=g=A=j=null;for(c in a)if(B=a[c],a.hasOwnProperty(c)&&B!=null)switch(c){case"value":break;case"multiple":lt=B;default:r.hasOwnProperty(c)||Ye(t,n,c,null,r,B)}for(l in r)if(c=r[l],B=a[l],r.hasOwnProperty(l)&&(c!=null||B!=null))switch(l){case"value":c!==B&&(xe=!0),j=c;break;case"defaultValue":c!==B&&(xe=!0),A=c;break;case"multiple":c!==B&&(xe=!0),g=c;default:c!==B&&Ye(t,n,l,c,r,B)}n=A,a=g,r=lt,j!=null?ns(t,!!a,j,!1):!!r!=!!a&&(n!=null?ns(t,!!a,n,!0):ns(t,!!a,a?[]:"",!1));return;case"textarea":lt=j=null;for(A in a)if(l=a[A],a.hasOwnProperty(A)&&l!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ye(t,n,A,null,r,l)}for(g in r)if(l=r[g],c=a[g],r.hasOwnProperty(g)&&(l!=null||c!=null))switch(g){case"value":l!==c&&(xe=!0),j=l;break;case"defaultValue":l!==c&&(xe=!0),lt=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&Ye(t,n,g,l,r,c)}Sm(t,j,lt);return;case"option":for(var Ot in a)j=a[Ot],a.hasOwnProperty(Ot)&&j!=null&&!r.hasOwnProperty(Ot)&&(Ot==="selected"?t.selected=!1:Ye(t,n,Ot,null,r,j));for(B in r)j=r[B],lt=a[B],r.hasOwnProperty(B)&&j!==lt&&(j!=null||lt!=null)&&(B==="selected"?(j!==lt&&(xe=!0),t.selected=j&&typeof j!="function"&&typeof j!="symbol"):Ye(t,n,B,j,r,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)j=a[Jt],a.hasOwnProperty(Jt)&&j!=null&&!r.hasOwnProperty(Jt)&&Ye(t,n,Jt,null,r,j);for(tt in r)if(j=r[tt],lt=a[tt],r.hasOwnProperty(tt)&&j!==lt&&(j!=null||lt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,n));break;default:Ye(t,n,tt,j,r,lt)}return;default:if(Vc(n)){for(var _e in a)j=a[_e],a.hasOwnProperty(_e)&&j!==void 0&&!r.hasOwnProperty(_e)&&Gd(t,n,_e,void 0,r,j);for(ft in r)j=r[ft],lt=a[ft],!r.hasOwnProperty(ft)||j===lt||j===void 0&&lt===void 0||Gd(t,n,ft,j,r,lt);return}}for(var $ in a)j=a[$],a.hasOwnProperty($)&&j!=null&&!r.hasOwnProperty($)&&Ye(t,n,$,null,r,j);for(St in r)j=r[St],lt=a[St],!r.hasOwnProperty(St)||j===lt||j==null&&lt==null||Ye(t,n,St,j,r,lt)}function C_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Cy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var l=a[r],c=l.transferSize,g=l.initiatorType,A=l.duration;if(c&&A&&C_(g)){for(g=0,A=l.responseEnd,r+=1;r<a.length;r++){var B=a[r],tt=B.startTime;if(tt>A)break;var ft=B.transferSize,St=B.initiatorType;ft&&C_(St)&&(B=B.responseEnd,g+=ft*(B<A?1:(A-tt)/(B-tt)))}if(--r,n+=8*(c+g)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Vd=null,Xd=null;function jo(t){return t.nodeType===9?t:t.ownerDocument}function w_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function D_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function N_(t,n,a,r){return a=jo(a).createElement(t),a[b]=r,a[X]=n,Dn(a,t,n),Se(a),a}function kd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wd=null;function wy(){var t=window.event;return t&&t.type==="popstate"?t===Wd?!1:(Wd=t,!0):(Wd=null,!1)}var qd=typeof setTimeout=="function"?setTimeout:void 0,Dy=typeof clearTimeout=="function"?clearTimeout:void 0,U_=typeof Promise=="function"?Promise:void 0,L_=typeof requestAnimationFrame=="function"?requestAnimationFrame:qd,Ny=typeof queueMicrotask=="function"?queueMicrotask:typeof U_<"u"?function(t){return U_.resolve(null).then(t).catch(Uy)}:qd;function Uy(t){setTimeout(function(){throw t})}function sr(t){return t==="head"}function O_(t,n){var a=n,r=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(l),Hs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")th(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,th(a);for(var c=a.firstChild;c;){var g=c.nextSibling,A=c.nodeName;c[Lt]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=g}}else a==="body"&&th(t.ownerDocument.body);a=l}while(a);Hs(n)}function P_(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function I_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function z_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Ly(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Yd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return Ly(n,a,t)}function Oy(t){return t.documentElement.clientHeight}function Py(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Iy(t,n,a,r,l,c,g,A,B){var tt=n.nodeType===9?n:n.ownerDocument;try{var ft=tt.startViewTransition({update:function(){var j=tt.defaultView,lt=j.navigation&&j.navigation.transition,Ot=tt.fonts.status;r();var Jt=[];if(Ot==="loaded"&&(Oy(tt),tt.fonts.status==="loading"&&Jt.push(tt.fonts.ready)),Ot=Jt.length,t!==null)for(var _e=t.suspenseyImages,$=0,W=0;W<_e.length;W++){var it=_e[W];if(!it.complete){var vt=it.getBoundingClientRect();if(0<vt.bottom&&0<vt.right&&vt.top<j.innerHeight&&vt.left<j.innerWidth){if($+=av(it),$>Gu){Jt.length=Ot;break}it=new Promise(Py.bind(it)),Jt.push(it)}}}if(0<Jt.length)return j=Promise.race([Promise.all(Jt),new Promise(function(Zt){return setTimeout(Zt,500)})]).then(l,l),(lt?Promise.allSettled([lt.finished,j]):j).then(c,c);if(l(),lt)return lt.finished.then(c,c);c()},types:a});tt.__reactViewTransition=ft;var St=[];return ft.ready.then(function(){for(var j=tt.documentElement.getAnimations({subtree:!0}),lt=0;lt<j.length;lt++){var Ot=j[lt],Jt=Ot.effect,_e=Jt.pseudoElement;if(_e!=null&&_e.startsWith("::view-transition")){St.push(Ot),Ot=Jt.getKeyframes();for(var $=_e=void 0,W=!0,it=0;it<Ot.length;it++){var vt=Ot[it],Zt=vt.width;if(_e===void 0)_e=Zt;else if(_e!==Zt){W=!1;break}if(Zt=vt.height,$===void 0)$=Zt;else if($!==Zt){W=!1;break}delete vt.width,delete vt.height,vt.transform==="none"&&delete vt.transform}W&&_e!==void 0&&$!==void 0&&(Jt.setKeyframes(Ot),W=getComputedStyle(Jt.target,Jt.pseudoElement),W.width!==_e||W.height!==$)&&(W=Ot[0],W.width=_e,W.height=$,W=Ot[Ot.length-1],W.width=_e,W.height=$,Jt.setKeyframes(Ot))}}g()},function(j){tt.__reactViewTransition===ft&&(tt.__reactViewTransition=null);try{typeof j=="object"&&j!==null&&j.name==="InvalidStateError"&&(j.message==="View transition was skipped because document visibility state is hidden."||j.message==="Skipping view transition because document visibility state has become hidden."||j.message==="Skipping view transition because viewport size changed."||j.message==="Transition was aborted because of invalid state")&&(j=null),j!==null&&B(j)}finally{r(),l(),g()}}),ft.finished.finally(function(){for(var j=0;j<St.length;j++)St[j].cancel();tt.__reactViewTransition===ft&&(tt.__reactViewTransition=null),A()}),ft}catch{return r(),l(),g(),null}}function Vr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Vr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:I({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Vr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],l=0;l<a.length;l++){var c=a[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(a[l])}return r},Vr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function B_(t){return{name:t,group:new Vr("group",t),imagePair:new Vr("image-pair",t),old:new Vr("old",t),new:new Vr("new",t)}}function ci(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ci.prototype.addEventListener=function(t,n,a){var r=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(H_(c,t,n,a)===-1){var g=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(B){g.removeEventListener(t,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),r!==null&&(l=g.removeEventListener.bind(g,t,n,a),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Os(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:l}),v(this._fragmentFiber.child,!1,zy,t,A,r)}this._eventListeners=c}};function zy(t,n,a,r){return M(t).addEventListener(n,a,r),!1}ci.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=H_(r,t,n,a),n!==-1)){var l=r[n];a=l.attachedListener;var c=l.cleanup;l=Os(l.optionsOrUseCapture),v(this._fragmentFiber.child,!1,By,t,a,l),r.splice(n,1),c!==null&&c()}};function By(t,n,a,r){return M(t).removeEventListener(n,a,r),!1}function Os(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function F_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function H_(t,n,a,r){if(t.length===0)return-1;r=F_(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===a&&F_(c.optionsOrUseCapture)===r)return l}return-1}ci.prototype.dispatchEvent=function(t){var n=_(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var c=a[l];r.addEventListener(c.type,c.attachedListener,Os(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(l=0;l<a.length;l++)c=a[l],r.removeEventListener(c.type,c.attachedListener,Os(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},ci.prototype.focus=function(t){v(this._fragmentFiber.child,!0,G_,t,void 0,void 0)};function G_(t,n){return t.tag===6?!1:(t=M(t),Qy(t,n))}ci.prototype.focusLast=function(t){var n=[];v(this._fragmentFiber.child,!0,Zd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!G_(n[a],t);a--);};function Zd(t,n){return n.push(t),!1}ci.prototype.blur=function(){var t=_(this._fragmentFiber);t!==null&&(t=M(t),t=jo(t).activeElement,t!==null&&v(this._fragmentFiber.child,!1,Fy,t,void 0,void 0))};function Fy(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ci.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),v(this._fragmentFiber.child,!1,Hy,t,void 0,void 0)};function Hy(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}ci.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),v(this._fragmentFiber.child,!1,Gy,t,void 0,void 0);for(var a=n=0;a<Oi.length;a++){var r=Oi[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Oi[n++]=r}Oi.length=n}};function Gy(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Oi=[],Kd=!1;function Vy(t,n,a){Oi.push({fragmentInstance:t,observer:n,instance:a}),Kd||(Kd=!0,Jy(function(){Kd=!1;var r=Oi;Oi=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}ci.prototype.getClientRects=function(){var t=[];return v(this._fragmentFiber.child,!1,Xy,t,void 0,void 0),t};function Xy(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}ci.prototype.getRootNode=function(t){var n=_(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},ci.prototype.compareDocumentPosition=function(t){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];v(this._fragmentFiber.child,!1,Zd,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,T(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=r=a.compareDocumentPosition(t);return a===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=R(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),l=M(a[a.length-1]);var c=T(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(t),A=l.compareDocumentPosition(t),B=g&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=r&&c&&g&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&l===t||B||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||ky(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function ky(t,n,a,r,l){var c=se(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=_(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=D(a,c,N),n===null?n=!1:(v(n,!0,H,c,a),c=x,x=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=D(r,c,N),n===null?n=!1:(v(n,!0,C,c,r),c=x,w=x=null,n=c!==null)),n):!1}function V_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ci.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];v(this._fragmentFiber.child,!1,Zd,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=R(this._fragmentFiber);if(r=a?r[1]||r[0]||_(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),V_(t,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var l=n[r];l.tag===6?(l=M(l),V_(l,a)):M(l).scrollIntoView(t),r+=a?-1:1}};function Wy(t,n){return t=M(t),X_(t,n),!1}function X_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function k_(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.addEventListener(l.type,l.attachedListener,Os(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var g=0,A=0;A<Oi.length;A++){var B=Oi[A];(B.fragmentInstance!==n||B.observer!==c||B.instance!==t)&&(Oi[g++]=B)}Oi.length=g,c.observe(t)}),X_(t,n))}function qy(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.removeEventListener(l.type,l.attachedListener,Os(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?Vy(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Qd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qd(a),Qt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Yy(t,n,a,r){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Lt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=bi(t.nextSibling),t===null)break}return null}function Zy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=bi(t.nextSibling),t===null))return null;return t}function W_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=bi(t.nextSibling),t===null))return null;return t}function Jd(t){return t.data==="$?"||t.data==="$~"}function jd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ky(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function bi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var $d=null;function q_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return bi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Y_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Qy(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function Jy(t){L_(function(){L_(function(n){return t(n)})})}function Z_(t,n,a){switch(n=jo(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function K_(t,n,a){for(var r in a){var l=a[r];a.hasOwnProperty(r)&&l!=null&&Ye(t,n,r,null,Ay,l)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Wi&&(t.onclick=null),Qt(t)}function th(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Qt(t)}var Ai=new Map,Q_=new Set;function $o(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var ba=At.d;At.d={f:jy,r:$y,D:tE,C:eE,L:nE,m:iE,X:rE,S:aE,M:sE};function jy(){var t=ba.f(),n=Uu();return t||n}function $y(t){var n=he(t);n!==null&&n.tag===5&&n.type==="form"?jg(n):ba.r(t)}var Ps=typeof document>"u"?null:document;function J_(t,n,a){var r=Ps;if(r&&typeof n=="string"&&n){var l=vi(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Q_.has(l)||(Q_.add(l),t={rel:t,crossOrigin:a,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Dn(n,"link",t),Se(n),r.head.appendChild(n)))}}function tE(t){ba.D(t),J_("dns-prefetch",t,null)}function eE(t,n){ba.C(t,n),J_("preconnect",t,n)}function nE(t,n,a){ba.L(t,n,a);var r=Ps;if(r&&t&&n){var l='link[rel="preload"][as="'+vi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+vi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+vi(a.imageSizes)+'"]')):l+='[href="'+vi(t)+'"]';var c=l;switch(n){case"style":c=Is(t);break;case"script":c=zs(t)}if(!(Ai.has(c)||(t=I({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ai.set(c,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(tl(c))||n==="script"&&r.querySelector(el(c))))){var g=r.createElement("link");Dn(g,"link",t),n==="style"&&(g[Kt]=!0,g.onload=g.onerror=function(){Ke(g)}),Se(g),r.head.appendChild(g)}}}function iE(t,n){ba.m(t,n);var a=Ps;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+vi(r)+'"][href="'+vi(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=zs(t)}if(!Ai.has(c)&&(t=I({rel:"modulepreload",href:t},n),Ai.set(c,t),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(el(c)))return}r=a.createElement("link"),Dn(r,"link",t),Se(r),a.head.appendChild(r)}}}function aE(t,n,a){ba.S(t,n,a);var r=Ps;if(r&&t){var l=ye(r).hoistableStyles,c=Is(t);n=n||"default";var g=l.get(c);if(!g){var A={loading:0,preload:null};if(g=r.querySelector(tl(c)))A.loading=5;else{t=I({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ai.get(c))&&eh(t,a);var B=g=r.createElement("link");Se(B),Dn(B,"link",t),B._p=new Promise(function(tt,ft){B.onload=tt,B.onerror=ft}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Fu(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:A},l.set(c,g)}}}function rE(t,n){ba.X(t,n);var a=Ps;if(a&&t){var r=ye(a).hoistableScripts,l=zs(t),c=r.get(l);c||(c=a.querySelector(el(l)),c||(t=I({src:t,async:!0},n),(n=Ai.get(l))&&nh(t,n),c=a.createElement("script"),Se(c),Dn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function sE(t,n){ba.M(t,n);var a=Ps;if(a&&t){var r=ye(a).hoistableScripts,l=zs(t),c=r.get(l);c||(c=a.querySelector(el(l)),c||(t=I({src:t,async:!0,type:"module"},n),(n=Ai.get(l))&&nh(t,n),c=a.createElement("script"),Se(c),Dn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function j_(t,n,a,r){var l=(l=Ie.current)?$o(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Is(a.href),n=ye(l).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Is(a.href);var c=ye(l).hoistableStyles,g=c.get(t);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=l.querySelector(tl(t)))?c._p||(g.instance=c,g.state.loading=5):(c=Ai.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ai.set(t,c)),oE(l,t,c,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=zs(a),n=ye(l).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Is(t){return'href="'+vi(t)+'"'}function tl(t){return'link[rel="stylesheet"]['+t+"]"}function $_(t){return I({},t,{"data-precedence":t.precedence,precedence:null})}function oE(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Kt]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Kt]=!0,n.onload=n.onerror=Ke.bind(null,n),Dn(n,"link",a),Se(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function zs(t){return'[src="'+vi(t)+'"]'}function el(t){return"script[async]"+t}function tv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+vi(a.href)+'"]');if(r)return n.instance=r,Se(r),r;var l=I({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Se(r),Dn(r,"style",l),Fu(r,a.precedence,t),n.instance=r;case"stylesheet":l=Is(a.href);var c=t.querySelector(tl(l));if(c)return n.state.loading|=4,n.instance=c,Se(c),c;r=$_(a),(l=Ai.get(l))&&eh(r,l),c=(t.ownerDocument||t).createElement("link"),Se(c);var g=c;return g._p=new Promise(function(A,B){g.onload=A,g.onerror=B}),Dn(c,"link",r),n.state.loading|=4,Fu(c,a.precedence,t),n.instance=c;case"script":return c=zs(a.src),(l=t.querySelector(el(c)))?(n.instance=l,Se(l),l):(r=a,(l=Ai.get(c))&&(r=I({},a),nh(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),Se(l),Dn(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Fu(r,a.precedence,t));return n.instance}function Fu(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,g=0;g<r.length;g++){var A=r[g];if(A.dataset.precedence===n)c=A;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function eh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function nh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Hu=null;function ev(t,n,a){if(Hu===null){var r=new Map,l=Hu=new Map;l.set(a,r)}else l=Hu,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var c=a[l];if(!(c[Lt]||c[b]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(n)||"";g=t+g;var A=r.get(g);A?A.push(c):r.set(g,[c])}}return r}function ih(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function lE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function nv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function iv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function av(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function rv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=av(n),t.suspenseyImages.push(n)),t=fE.bind(t),n.decode().then(t,t))}function uE(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Is(r.href),c=n.querySelector(tl(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=nl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,Se(c);return}c=n.ownerDocument||n,r=$_(r),(l=Ai.get(l))&&eh(r,l),c=c.createElement("link"),Se(c);var g=c;g._p=new Promise(function(A,B){g.onload=A,g.onerror=B}),Dn(c,"link",r),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=nl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Gu=0;function cE(t,n){return t.stylesheets&&t.count===0&&Xu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Xu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Gu===0&&(Gu=62500*Cy());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Gu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function sv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Xu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function nl(){this.count--,sv(this)}function fE(){this.imgCount--,sv(this)}var Vu=null;function Xu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vu=new Map,n.forEach(dE,t),Vu=null,nl.call(t))}function dE(t,n){if(!(n.state.loading&4)){var a=Vu.get(t);if(a)var r=a.get(null);else{a=new Map,Vu.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var g=l[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}l=n.instance,g=l.getAttribute("data-precedence"),c=a.get(g)||r,c===r&&a.set(null,l),a.set(g,l),this.count++,r=nl.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Bs={$$typeof:J,Provider:null,Consumer:null,_currentValue:Ae,_currentValue2:Ae,_threadCount:0};function hE(t,n,a,r,l,c,g,A,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=es(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=es(0),this.hiddenUpdates=es(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function ov(t,n,a,r,l,c,g,A,B,tt,ft,St){return t=new hE(t,n,a,g,B,tt,ft,St,A),n=1,c===!0&&(n|=24),c=Wn(3,null,null,n),t.current=c,c.stateNode=t,n=vf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:n},yf(c),t}function lv(t){return t?(t=cs,t):cs}function uv(t,n,a,r,l,c){l=lv(l),r.context===null?r.context=l:r.pendingContext=l,r=Za(n),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=Ka(t,r,n),a!==null&&(Kn(a,t,n),Lo(a,t,n))}function cv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ah(t,n){cv(t,n),(t=t.alternate)&&cv(t,n)}function fv(t){if(t.tag===13||t.tag===31){var n=br(t,67108864);n!==null&&Kn(n,t,67108864),ah(t,67108864)}}function dv(t){if(t.tag===13||t.tag===31){var n=ui();n=go(n);var a=br(t,n);a!==null&&Kn(a,t,n),ah(t,n)}}var Fs=!0;function pE(t,n,a,r){var l=mt.T;mt.T=null;var c=At.p;try{At.p=2,rh(t,n,a,r)}finally{At.p=c,mt.T=l}}function mE(t,n,a,r){var l=mt.T;mt.T=null;var c=At.p;try{At.p=8,rh(t,n,a,r)}finally{At.p=c,mt.T=l}}function rh(t,n,a,r){if(Fs){var l=sh(r);if(l===null)Hd(t,n,r,ku,a),pv(t,r);else if(_E(l,t,n,a,r))r.stopPropagation();else if(pv(t,r),n&4&&-1<gE.indexOf(t)){for(;l!==null;){var c=he(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=fa(c.pendingLanes);if(g!==0){var A=c;for(A.pendingLanes|=2,A.entangledLanes|=2;g;){var B=1<<31-de(g);A.entanglements[1]|=B,g&=~B}ea(c),(Ge&6)===0&&(wu=Xt()+500,Ko(0))}}break;case 31:case 13:A=br(c,2),A!==null&&Kn(A,c,2),Uu(),ah(c,2)}if(c=sh(r),c===null&&Hd(t,n,r,ku,a),c===l)break;l=c}l!==null&&r.stopPropagation()}else Hd(t,n,r,null,a)}}function sh(t){return t=kc(t),oh(t)}var ku=null;function oh(t){if(ku=null,t=se(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ku=t,null}function hv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ie()){case ce:return 2;case Q:return 8;case wt:case xt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var lh=!1,or=null,lr=null,ur=null,il=new Map,al=new Map,cr=[],gE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pv(t,n){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":il.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(n.pointerId)}}function rl(t,n,a,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},n!==null&&(n=he(n),n!==null&&fv(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function _E(t,n,a,r,l){switch(n){case"focusin":return or=rl(or,t,n,a,r,l),!0;case"dragenter":return lr=rl(lr,t,n,a,r,l),!0;case"mouseover":return ur=rl(ur,t,n,a,r,l),!0;case"pointerover":var c=l.pointerId;return il.set(c,rl(il.get(c)||null,t,n,a,r,l)),!0;case"gotpointercapture":return c=l.pointerId,al.set(c,rl(al.get(c)||null,t,n,a,r,l)),!0}return!1}function mv(t){var n=se(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Dl(t.priority,function(){dv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Dl(t.priority,function(){dv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=sh(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Xc=r,a.target.dispatchEvent(r),Xc=null}else return n=he(a),n!==null&&fv(n),t.blockedOn=a,!1;n.shift()}return!0}function gv(t,n,a){Wu(t)&&a.delete(n)}function vE(){lh=!1,or!==null&&Wu(or)&&(or=null),lr!==null&&Wu(lr)&&(lr=null),ur!==null&&Wu(ur)&&(ur=null),il.forEach(gv),al.forEach(gv)}function qu(t,n){t.blockedOn===n&&(t.blockedOn=null,lh||(lh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,vE)))}var Yu=null;function _v(t){Yu!==t&&(Yu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Yu===t&&(Yu=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if(oh(r||a)===null)continue;break}var c=he(a);c!==null&&(t.splice(n,3),n-=3,Xf(c,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function Hs(t){function n(B){return qu(B,t)}or!==null&&qu(or,t),lr!==null&&qu(lr,t),ur!==null&&qu(ur,t),il.forEach(n),al.forEach(n);for(var a=0;a<cr.length;a++){var r=cr[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<cr.length&&(a=cr[0],a.blockedOn===null);)mv(a),a.blockedOn===null&&cr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],c=a[r+1],g=l[X]||null;if(typeof c=="function")g||_v(a);else if(g){var A=null;if(c&&c.hasAttribute("formAction")){if(l=c,g=c[X]||null)A=g.formAction;else if(oh(l)!==null)continue}else A=g.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),_v(a)}}}function vv(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(g){return l=g})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function uh(t){this._internalRoot=t}Zu.prototype.render=uh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ui();uv(a,r,t,n,null,null)},Zu.prototype.unmount=uh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;uv(t.current,2,null,t,null,null),Uu(),n[dt]=null}};function Zu(t){this._internalRoot=t}Zu.prototype.unstable_scheduleHydration=function(t){if(t){var n=wl();t={blockedOn:null,target:t,priority:n};for(var a=0;a<cr.length&&n!==0&&n<cr[a].priority;a++);cr.splice(a,0,t),a===0&&mv(t)}};var Sv=e.version;if(Sv!=="19.3.0")throw Error(s(527,Sv,"19.3.0"));At.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var SE={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:mt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ku.isDisabled&&Ku.supportsFiber)try{jt=Ku.inject(SE),Gt=Ku}catch{}}return ol.createRoot=function(t,n){if(!u(t))throw Error(s(299));var a=!1,r="",l=l0,c=u0,g=c0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=ov(t,1,!1,null,null,a,r,null,l,c,g,vv),t[dt]=n.current,Fd(t),new uh(n)},ol.hydrateRoot=function(t,n,a){if(!u(t))throw Error(s(299));var r=!1,l="",c=l0,g=u0,A=c0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=ov(t,1,!0,n,a??null,r,l,B,c,g,A,vv),n.context=lv(null),a=n.current,r=ui(),r=go(r),l=Za(r),l.callback=null,Ka(a,l,r),a=r,n.current.lanes=a,Xi(n,a),ea(n),t[dt]=n.current,Fd(t),new Zu(n)},ol.version="19.3.0",ol}var wv;function wE(){if(wv)return dh.exports;wv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),dh.exports=CE(),dh.exports}var DE=wE();function Zp(o){const e=new Uint32Array(1);return crypto.getRandomValues(e),Promise.resolve(e[0]%o+1)}const Kp="186",NE=0,Dv=1,UE=2,xc=1,LE=2,ml=3,Ia=0,jn=1,Na=2,La=0,_l=1,Nv=2,Uv=3,Lv=4,OE=5,to=100,PE=101,IE=102,zE=103,BE=104,FE=200,HE=201,GE=202,VE=203,qS=204,YS=205,XE=206,kE=207,WE=208,qE=209,YE=210,ZE=211,KE=212,QE=213,JE=214,Jh=0,jh=1,$h=2,Sl=3,tp=4,ep=5,np=6,ip=7,ZS=0,jE=1,$E=2,oa=0,KS=1,QS=2,JS=3,jS=4,$S=5,tx=6,ex=7,nx=300,Jr=301,oo=302,gh=303,_h=304,Lc=306,ap=1e3,Ua=1001,rp=1002,Un=1003,tT=1004,Qu=1005,zn=1006,vh=1007,Zr=1008,pi=1009,ix=1010,ax=1011,xl=1012,Qp=1013,la=1014,ra=1015,ua=1016,Jp=1017,jp=1018,Ml=1020,rx=35902,sx=35899,ox=1021,lx=1022,Fi=1023,za=1026,Kr=1027,ux=1028,$p=1029,jr=1030,tm=1031,em=1033,Mc=33776,yc=33777,Ec=33778,Tc=33779,sp=35840,op=35841,lp=35842,up=35843,cp=36196,fp=37492,dp=37496,hp=37488,pp=37489,Ac=37490,mp=37491,gp=37808,_p=37809,vp=37810,Sp=37811,xp=37812,Mp=37813,yp=37814,Ep=37815,Tp=37816,bp=37817,Ap=37818,Rp=37819,Cp=37820,wp=37821,Dp=36492,Np=36494,Up=36495,Lp=36283,Op=36284,Rc=36285,Pp=36286,eT=3200,Ip=0,nT=1,Sr="",Jn="srgb",Cc="srgb-linear",wc="linear",Ze="srgb",Sh=7680,iT=519,aT=512,rT=513,sT=514,nm=515,oT=516,lT=517,im=518,uT=519,cT=35044,Ov="300 es",sa=2e3,yl=2001;function fT(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Dc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function dT(){const o=Dc("canvas");return o.style.display="block",o}const Pv={};function Iv(...o){const e="THREE."+o.shift();console.log(e,...o)}function cx(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function le(...o){o=cx(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Be(...o){o=cx(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function no(...o){const e=o.join(" ");e in Pv||(Pv[e]=!0,le(...o))}function hT(o,e,i){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const pT={[Jh]:jh,[$h]:np,[tp]:ip,[Sl]:ep,[jh]:Jh,[np]:$h,[ip]:tp,[ep]:Sl};class $r{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const u=s[e];if(u!==void 0){const f=u.indexOf(i);f!==-1&&u.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const u=s.slice(0);for(let f=0,d=u.length;f<d;f++)u[f].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xh=Math.PI/180,zp=180/Math.PI;function Tl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Le(o,e,i){return Math.max(e,Math.min(i,o))}function mT(o,e){return(o%e+e)%e}function Mh(o,e,i){return(1-i)*o+i*e}function ll(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const dm=class dm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6],this.y=u[1]*i+u[4]*s+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Le(this.x,e.x,i.x),this.y=Le(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Le(this.x,e,i),this.y=Le(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Le(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Le(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),u=Math.sin(i),f=this.x-e.x,d=this.y-e.y;return this.x=f*s-d*u+e.x,this.y=f*u+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dm.prototype.isVector2=!0;let be=dm;class ti{constructor(e=0,i=0,s=0,u=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=u}static slerpFlat(e,i,s,u,f,d,h){let m=s[u+0],p=s[u+1],S=s[u+2],v=s[u+3],_=f[d+0],T=f[d+1],R=f[d+2],O=f[d+3];if(v!==O||m!==_||p!==T||S!==R){let M=m*_+p*T+S*R+v*O;M<0&&(_=-_,T=-T,R=-R,O=-O,M=-M);let x=1-h;if(M<.9995){const w=Math.acos(M),H=Math.sin(w);x=Math.sin(x*w)/H,h=Math.sin(h*w)/H,m=m*x+_*h,p=p*x+T*h,S=S*x+R*h,v=v*x+O*h}else{m=m*x+_*h,p=p*x+T*h,S=S*x+R*h,v=v*x+O*h;const w=1/Math.sqrt(m*m+p*p+S*S+v*v);m*=w,p*=w,S*=w,v*=w}}e[i]=m,e[i+1]=p,e[i+2]=S,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,u,f,d){const h=s[u],m=s[u+1],p=s[u+2],S=s[u+3],v=f[d],_=f[d+1],T=f[d+2],R=f[d+3];return e[i]=h*R+S*v+m*T-p*_,e[i+1]=m*R+S*_+p*v-h*T,e[i+2]=p*R+S*T+h*_-m*v,e[i+3]=S*R-h*v-m*_-p*T,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,u){return this._x=e,this._y=i,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,u=e._y,f=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),S=h(u/2),v=h(f/2),_=m(s/2),T=m(u/2),R=m(f/2);switch(d){case"XYZ":this._x=_*S*v+p*T*R,this._y=p*T*v-_*S*R,this._z=p*S*R+_*T*v,this._w=p*S*v-_*T*R;break;case"YXZ":this._x=_*S*v+p*T*R,this._y=p*T*v-_*S*R,this._z=p*S*R-_*T*v,this._w=p*S*v+_*T*R;break;case"ZXY":this._x=_*S*v-p*T*R,this._y=p*T*v+_*S*R,this._z=p*S*R+_*T*v,this._w=p*S*v-_*T*R;break;case"ZYX":this._x=_*S*v-p*T*R,this._y=p*T*v+_*S*R,this._z=p*S*R-_*T*v,this._w=p*S*v+_*T*R;break;case"YZX":this._x=_*S*v+p*T*R,this._y=p*T*v+_*S*R,this._z=p*S*R-_*T*v,this._w=p*S*v-_*T*R;break;case"XZY":this._x=_*S*v-p*T*R,this._y=p*T*v-_*S*R,this._z=p*S*R+_*T*v,this._w=p*S*v+_*T*R;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,u=Math.sin(s);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],u=i[4],f=i[8],d=i[1],h=i[5],m=i[9],p=i[2],S=i[6],v=i[10],_=s+h+v;if(_>0){const T=.5/Math.sqrt(_+1);this._w=.25/T,this._x=(S-m)*T,this._y=(f-p)*T,this._z=(d-u)*T}else if(s>h&&s>v){const T=2*Math.sqrt(1+s-h-v);this._w=(S-m)/T,this._x=.25*T,this._y=(u+d)/T,this._z=(f+p)/T}else if(h>v){const T=2*Math.sqrt(1+h-s-v);this._w=(f-p)/T,this._x=(u+d)/T,this._y=.25*T,this._z=(m+S)/T}else{const T=2*Math.sqrt(1+v-s-h);this._w=(d-u)/T,this._x=(f+p)/T,this._y=(m+S)/T,this._z=.25*T}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Le(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const u=Math.min(1,i/s);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,u=e._y,f=e._z,d=e._w,h=i._x,m=i._y,p=i._z,S=i._w;return this._x=s*S+d*h+u*p-f*m,this._y=u*S+d*m+f*h-s*p,this._z=f*S+d*p+s*m-u*h,this._w=d*S-s*h-u*m-f*p,this._onChangeCallback(),this}slerp(e,i){let s=e._x,u=e._y,f=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,u=-u,f=-f,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),S=Math.sin(p);m=Math.sin(m*p)/S,i=Math.sin(i*p)/S,this._x=this._x*m+s*i,this._y=this._y*m+u*i,this._z=this._z*m+f*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+u*i,this._z=this._z*m+f*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hm=class hm{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(zv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(zv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[3]*s+f[6]*u,this.y=f[1]*i+f[4]*s+f[7]*u,this.z=f[2]*i+f[5]*s+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,u=this.z,f=e.elements,d=1/(f[3]*i+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*u+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*u+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*u+f[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,u=this.z,f=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*u-h*s),S=2*(h*i-f*u),v=2*(f*s-d*i);return this.x=i+m*p+d*v-h*S,this.y=s+m*S+h*p-f*v,this.z=u+m*v+f*S-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*u,this.y=f[1]*i+f[5]*s+f[9]*u,this.z=f[2]*i+f[6]*s+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Le(this.x,e.x,i.x),this.y=Le(this.y,e.y,i.y),this.z=Le(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Le(this.x,e,i),this.y=Le(this.y,e,i),this.z=Le(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Le(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,u=e.y,f=e.z,d=i.x,h=i.y,m=i.z;return this.x=u*m-f*h,this.y=f*d-s*m,this.z=s*h-u*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return yh.copy(this).projectOnVector(e),this.sub(yh)}reflect(e){return this.sub(yh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Le(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,u=this.z-e.z;return i*i+s*s+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const u=Math.sin(i)*e;return this.x=u*Math.sin(s),this.y=Math.cos(i)*e,this.z=u*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=u,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hm.prototype.isVector3=!0;let nt=hm;const yh=new nt,zv=new ti,pm=class pm{constructor(e,i,s,u,f,d,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,u,f,d,h,m,p)}set(e,i,s,u,f,d,h,m,p){const S=this.elements;return S[0]=e,S[1]=u,S[2]=h,S[3]=i,S[4]=f,S[5]=m,S[6]=s,S[7]=d,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,u=i.elements,f=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],S=s[4],v=s[7],_=s[2],T=s[5],R=s[8],O=u[0],M=u[3],x=u[6],w=u[1],H=u[4],C=u[7],N=u[2],D=u[5],I=u[8];return f[0]=d*O+h*w+m*N,f[3]=d*M+h*H+m*D,f[6]=d*x+h*C+m*I,f[1]=p*O+S*w+v*N,f[4]=p*M+S*H+v*D,f[7]=p*x+S*C+v*I,f[2]=_*O+T*w+R*N,f[5]=_*M+T*H+R*D,f[8]=_*x+T*C+R*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],m=e[6],p=e[7],S=e[8];return i*d*S-i*h*p-s*f*S+s*h*m+u*f*p-u*d*m}invert(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],m=e[6],p=e[7],S=e[8],v=S*d-h*p,_=h*m-S*f,T=p*f-d*m,R=i*v+s*_+u*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const O=1/R;return e[0]=v*O,e[1]=(u*p-S*s)*O,e[2]=(h*s-u*d)*O,e[3]=_*O,e[4]=(S*i-u*m)*O,e[5]=(u*f-h*i)*O,e[6]=T*O,e[7]=(s*m-p*i)*O,e[8]=(d*i-s*f)*O,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,u,f,d,h){const m=Math.cos(f),p=Math.sin(f);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-u*p,u*m,-u*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return no("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Eh.makeScale(e,i)),this}rotate(e){return no("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Eh.makeRotation(-e)),this}translate(e,i){return no("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Eh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let u=0;u<9;u++)if(i[u]!==s[u])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};pm.prototype.isMatrix3=!0;let pe=pm;const Eh=new pe,Bv=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fv=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gT(){const o={enabled:!0,workingColorSpace:Cc,spaces:{},convert:function(u,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Ze&&(u.r=Oa(u.r),u.g=Oa(u.g),u.b=Oa(u.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ze&&(u.r=io(u.r),u.g=io(u.g),u.b=io(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===Sr?wc:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,d){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return no("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return no("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Cc]:{primaries:e,whitePoint:s,transfer:wc,toXYZ:Bv,fromXYZ:Fv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:e,whitePoint:s,transfer:Ze,toXYZ:Bv,fromXYZ:Fv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),o}const Ue=gT();function Oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function io(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Gs;class _T{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Gs===void 0&&(Gs=Dc("canvas")),Gs.width=e.width,Gs.height=e.height;const u=Gs.getContext("2d");e instanceof ImageData?u.putImageData(e,0,0):u.drawImage(e,0,0,e.width,e.height),s=Gs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Dc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const u=s.getImageData(0,0,e.width,e.height),f=u.data;for(let d=0;d<f.length;d++)f[d]=Oa(f[d]/255)*255;return s.putImageData(u,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Oa(i[s]/255)*255):i[s]=Oa(i[s]);return{data:i,width:e.width,height:e.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vT=0;class am{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vT++}),this.uuid=Tl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let d=0,h=u.length;d<h;d++)u[d].isDataTexture?f.push(Th(u[d].image)):f.push(Th(u[d]))}else f=Th(u);s.url=f}return i||(e.images[this.uuid]=s),s}}function Th(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?_T.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(le("Texture: Unable to serialize Texture."),{})}let ST=0;const bh=new nt;class Bn extends $r{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,s=Ua,u=Ua,f=zn,d=Zr,h=Fi,m=pi,p=Bn.DEFAULT_ANISOTROPY,S=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ST++}),this.uuid=Tl(),this.name="",this.source=new am(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bh).x}get height(){return this.source.getSize(bh).y}get depth(){return this.source.getSize(bh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){le(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){le(`Texture.setValues(): property '${i}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ap:e.x=e.x-Math.floor(e.x);break;case Ua:e.x=e.x<0?0:1;break;case rp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ap:e.y=e.y-Math.floor(e.y);break;case Ua:e.y=e.y<0?0:1;break;case rp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=nx;Bn.DEFAULT_ANISOTROPY=1;const mm=class mm{constructor(e=0,i=0,s=0,u=1){this.x=e,this.y=i,this.z=s,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,u){return this.x=e,this.y=i,this.z=s,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,u=this.z,f=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*u+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*u+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*u+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*u+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,u,f;const m=e.elements,p=m[0],S=m[4],v=m[8],_=m[1],T=m[5],R=m[9],O=m[2],M=m[6],x=m[10];if(Math.abs(S-_)<.01&&Math.abs(v-O)<.01&&Math.abs(R-M)<.01){if(Math.abs(S+_)<.1&&Math.abs(v+O)<.1&&Math.abs(R+M)<.1&&Math.abs(p+T+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const H=(p+1)/2,C=(T+1)/2,N=(x+1)/2,D=(S+_)/4,I=(v+O)/4,E=(R+M)/4;return H>C&&H>N?H<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(H),u=D/s,f=I/s):C>N?C<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(C),s=D/u,f=E/u):N<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(N),s=I/f,u=E/f),this.set(s,u,f,i),this}let w=Math.sqrt((M-R)*(M-R)+(v-O)*(v-O)+(_-S)*(_-S));return Math.abs(w)<.001&&(w=1),this.x=(M-R)/w,this.y=(v-O)/w,this.z=(_-S)/w,this.w=Math.acos((p+T+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Le(this.x,e.x,i.x),this.y=Le(this.y,e.y,i.y),this.z=Le(this.z,e.z,i.z),this.w=Le(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Le(this.x,e,i),this.y=Le(this.y,e,i),this.z=Le(this.z,e,i),this.w=Le(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Le(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mm.prototype.isVector4=!0;let sn=mm;class xT extends $r{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i),this.textures=[];const u={width:e,height:i,depth:s.depth},f=new Bn(u),d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=i,this.textures[u].image.depth=s,this.textures[u].isData3DTexture!==!0&&(this.textures[u].isArrayTexture=this.textures[u].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const u=Object.assign({},e.textures[i].image);this.textures[i].source=new am(u)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends xT{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class fx extends Bn{constructor(e=null,i=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:u},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class MT extends Bn{constructor(e=null,i=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:u},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Uc=class Uc{constructor(e,i,s,u,f,d,h,m,p,S,v,_,T,R,O,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,u,f,d,h,m,p,S,v,_,T,R,O,M)}set(e,i,s,u,f,d,h,m,p,S,v,_,T,R,O,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=u,x[1]=f,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=S,x[10]=v,x[14]=_,x[3]=T,x[7]=R,x[11]=O,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Uc().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,u=1/Vs.setFromMatrixColumn(e,0).length(),f=1/Vs.setFromMatrixColumn(e,1).length(),d=1/Vs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*u,i[1]=s[1]*u,i[2]=s[2]*u,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,u=e.y,f=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(u),p=Math.sin(u),S=Math.cos(f),v=Math.sin(f);if(e.order==="XYZ"){const _=d*S,T=d*v,R=h*S,O=h*v;i[0]=m*S,i[4]=-m*v,i[8]=p,i[1]=T+R*p,i[5]=_-O*p,i[9]=-h*m,i[2]=O-_*p,i[6]=R+T*p,i[10]=d*m}else if(e.order==="YXZ"){const _=m*S,T=m*v,R=p*S,O=p*v;i[0]=_+O*h,i[4]=R*h-T,i[8]=d*p,i[1]=d*v,i[5]=d*S,i[9]=-h,i[2]=T*h-R,i[6]=O+_*h,i[10]=d*m}else if(e.order==="ZXY"){const _=m*S,T=m*v,R=p*S,O=p*v;i[0]=_-O*h,i[4]=-d*v,i[8]=R+T*h,i[1]=T+R*h,i[5]=d*S,i[9]=O-_*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const _=d*S,T=d*v,R=h*S,O=h*v;i[0]=m*S,i[4]=R*p-T,i[8]=_*p+O,i[1]=m*v,i[5]=O*p+_,i[9]=T*p-R,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const _=d*m,T=d*p,R=h*m,O=h*p;i[0]=m*S,i[4]=O-_*v,i[8]=R*v+T,i[1]=v,i[5]=d*S,i[9]=-h*S,i[2]=-p*S,i[6]=T*v+R,i[10]=_-O*v}else if(e.order==="XZY"){const _=d*m,T=d*p,R=h*m,O=h*p;i[0]=m*S,i[4]=-v,i[8]=p*S,i[1]=_*v+O,i[5]=d*S,i[9]=T*v-R,i[2]=R*v-T,i[6]=h*S,i[10]=O*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yT,e,ET)}lookAt(e,i,s){const u=this.elements;return fi.subVectors(e,i),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),dr.crossVectors(s,fi),dr.lengthSq()===0&&(Math.abs(s.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),dr.crossVectors(s,fi)),dr.normalize(),Ju.crossVectors(fi,dr),u[0]=dr.x,u[4]=Ju.x,u[8]=fi.x,u[1]=dr.y,u[5]=Ju.y,u[9]=fi.y,u[2]=dr.z,u[6]=Ju.z,u[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,u=i.elements,f=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],S=s[1],v=s[5],_=s[9],T=s[13],R=s[2],O=s[6],M=s[10],x=s[14],w=s[3],H=s[7],C=s[11],N=s[15],D=u[0],I=u[4],E=u[8],L=u[12],U=u[1],z=u[5],G=u[9],Z=u[13],V=u[2],J=u[6],k=u[10],q=u[14],rt=u[3],at=u[7],ht=u[11],Mt=u[15];return f[0]=d*D+h*U+m*V+p*rt,f[4]=d*I+h*z+m*J+p*at,f[8]=d*E+h*G+m*k+p*ht,f[12]=d*L+h*Z+m*q+p*Mt,f[1]=S*D+v*U+_*V+T*rt,f[5]=S*I+v*z+_*J+T*at,f[9]=S*E+v*G+_*k+T*ht,f[13]=S*L+v*Z+_*q+T*Mt,f[2]=R*D+O*U+M*V+x*rt,f[6]=R*I+O*z+M*J+x*at,f[10]=R*E+O*G+M*k+x*ht,f[14]=R*L+O*Z+M*q+x*Mt,f[3]=w*D+H*U+C*V+N*rt,f[7]=w*I+H*z+C*J+N*at,f[11]=w*E+H*G+C*k+N*ht,f[15]=w*L+H*Z+C*q+N*Mt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],u=e[8],f=e[12],d=e[1],h=e[5],m=e[9],p=e[13],S=e[2],v=e[6],_=e[10],T=e[14],R=e[3],O=e[7],M=e[11],x=e[15],w=m*T-p*_,H=h*T-p*v,C=h*_-m*v,N=d*T-p*S,D=d*_-m*S,I=d*v-h*S;return i*(O*w-M*H+x*C)-s*(R*w-M*N+x*D)+u*(R*H-O*N+x*I)-f*(R*C-O*D+M*I)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],u=e[8],f=e[1],d=e[5],h=e[9],m=e[2],p=e[6],S=e[10];return i*(d*S-h*p)-s*(f*S-h*m)+u*(f*p-d*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=i,u[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],m=e[6],p=e[7],S=e[8],v=e[9],_=e[10],T=e[11],R=e[12],O=e[13],M=e[14],x=e[15],w=i*h-s*d,H=i*m-u*d,C=i*p-f*d,N=s*m-u*h,D=s*p-f*h,I=u*p-f*m,E=S*O-v*R,L=S*M-_*R,U=S*x-T*R,z=v*M-_*O,G=v*x-T*O,Z=_*x-T*M,V=w*Z-H*G+C*z+N*U-D*L+I*E;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/V;return e[0]=(h*Z-m*G+p*z)*J,e[1]=(u*G-s*Z-f*z)*J,e[2]=(O*I-M*D+x*N)*J,e[3]=(_*D-v*I-T*N)*J,e[4]=(m*U-d*Z-p*L)*J,e[5]=(i*Z-u*U+f*L)*J,e[6]=(M*C-R*I-x*H)*J,e[7]=(S*I-_*C+T*H)*J,e[8]=(d*G-h*U+p*E)*J,e[9]=(s*U-i*G-f*E)*J,e[10]=(R*D-O*C+x*w)*J,e[11]=(v*C-S*D-T*w)*J,e[12]=(h*L-d*z-m*E)*J,e[13]=(i*z-s*L+u*E)*J,e[14]=(O*H-R*N-M*w)*J,e[15]=(S*N-v*H+_*w)*J,this}scale(e){const i=this.elements,s=e.x,u=e.y,f=e.z;return i[0]*=s,i[4]*=u,i[8]*=f,i[1]*=s,i[5]*=u,i[9]*=f,i[2]*=s,i[6]*=u,i[10]*=f,i[3]*=s,i[7]*=u,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,u))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),u=Math.sin(i),f=1-s,d=e.x,h=e.y,m=e.z,p=f*d,S=f*h;return this.set(p*d+s,p*h-u*m,p*m+u*h,0,p*h+u*m,S*h+s,S*m-u*d,0,p*m-u*h,S*m+u*d,f*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,u,f,d){return this.set(1,s,f,0,e,1,d,0,i,u,1,0,0,0,0,1),this}compose(e,i,s){const u=this.elements,f=i._x,d=i._y,h=i._z,m=i._w,p=f+f,S=d+d,v=h+h,_=f*p,T=f*S,R=f*v,O=d*S,M=d*v,x=h*v,w=m*p,H=m*S,C=m*v,N=s.x,D=s.y,I=s.z;return u[0]=(1-(O+x))*N,u[1]=(T+C)*N,u[2]=(R-H)*N,u[3]=0,u[4]=(T-C)*D,u[5]=(1-(_+x))*D,u[6]=(M+w)*D,u[7]=0,u[8]=(R+H)*I,u[9]=(M-w)*I,u[10]=(1-(_+O))*I,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,i,s){const u=this.elements;e.x=u[12],e.y=u[13],e.z=u[14];const f=this.determinantAffine();if(f===0)return s.set(1,1,1),i.identity(),this;let d=Vs.set(u[0],u[1],u[2]).length();const h=Vs.set(u[4],u[5],u[6]).length(),m=Vs.set(u[8],u[9],u[10]).length();f<0&&(d=-d),Pi.copy(this);const p=1/d,S=1/h,v=1/m;return Pi.elements[0]*=p,Pi.elements[1]*=p,Pi.elements[2]*=p,Pi.elements[4]*=S,Pi.elements[5]*=S,Pi.elements[6]*=S,Pi.elements[8]*=v,Pi.elements[9]*=v,Pi.elements[10]*=v,i.setFromRotationMatrix(Pi),s.x=d,s.y=h,s.z=m,this}makePerspective(e,i,s,u,f,d,h=sa,m=!1){const p=this.elements,S=2*f/(i-e),v=2*f/(s-u),_=(i+e)/(i-e),T=(s+u)/(s-u);let R,O;if(m)R=f/(d-f),O=d*f/(d-f);else if(h===sa)R=-(d+f)/(d-f),O=-2*d*f/(d-f);else if(h===yl)R=-d/(d-f),O=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=S,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=T,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=O,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,u,f,d,h=sa,m=!1){const p=this.elements,S=2/(i-e),v=2/(s-u),_=-(i+e)/(i-e),T=-(s+u)/(s-u);let R,O;if(m)R=1/(d-f),O=d/(d-f);else if(h===sa)R=-2/(d-f),O=-(d+f)/(d-f);else if(h===yl)R=-1/(d-f),O=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=S,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=T,p[2]=0,p[6]=0,p[10]=R,p[14]=O,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let u=0;u<16;u++)if(i[u]!==s[u])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Uc.prototype.isMatrix4=!0;let nn=Uc;const Vs=new nt,Pi=new nn,yT=new nt(0,0,0),ET=new nt(1,1,1),dr=new nt,Ju=new nt,fi=new nt,Hv=new nn,Gv=new ti;class Ci{constructor(e=0,i=0,s=0,u=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,u=this._order){return this._x=e,this._y=i,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const u=e.elements,f=u[0],d=u[4],h=u[8],m=u[1],p=u[5],S=u[9],v=u[2],_=u[6],T=u[10];switch(i){case"XYZ":this._y=Math.asin(Le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,T),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,T),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,f),this._z=0);break;case"ZXY":this._x=Math.asin(Le(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,T),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,f));break;case"ZYX":this._y=Math.asin(-Le(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,T),this._z=Math.atan2(m,f)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Le(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-v,f)):(this._x=0,this._y=Math.atan2(h,T));break;case"XZY":this._z=Math.asin(-Le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-S,T),this._y=0);break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Hv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Gv.setFromEuler(this),this.setFromQuaternion(Gv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class dx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TT=0;const Vv=new nt,Xs=new ti,Aa=new nn,ju=new nt,ul=new nt,bT=new nt,AT=new ti,Xv=new nt(1,0,0),kv=new nt(0,1,0),Wv=new nt(0,0,1),qv={type:"added"},RT={type:"removed"},ks={type:"childadded",child:null},Ah={type:"childremoved",child:null};class Ln extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=Tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new nt,i=new Ci,s=new ti,u=new nt(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new nn},normalMatrix:{value:new pe}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Xs.setFromAxisAngle(e,i),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,i){return Xs.setFromAxisAngle(e,i),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Xv,e)}rotateY(e){return this.rotateOnAxis(kv,e)}rotateZ(e){return this.rotateOnAxis(Wv,e)}translateOnAxis(e,i){return Vv.copy(e).applyQuaternion(this.quaternion),this.position.add(Vv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Xv,e)}translateY(e){return this.translateOnAxis(kv,e)}translateZ(e){return this.translateOnAxis(Wv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?ju.copy(e):ju.set(e,i,s);const u=this.parent;this.updateWorldMatrix(!0,!1),ul.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(ul,ju,this.up):Aa.lookAt(ju,ul,this.up),this.quaternion.setFromRotationMatrix(Aa),u&&(Aa.extractRotation(u.matrixWorld),Xs.setFromRotationMatrix(Aa),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qv),ks.child=e,this.dispatchEvent(ks),ks.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(RT),Ah.child=e,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qv),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,u=this.children.length;s<u;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const u=this.children;for(let f=0,d=u.length;f<d;f++)u[f].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ul,e,bT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ul,AT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,u=e.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*s-f[8]*u,f[13]+=s-f[1]*i-f[5]*s-f[9]*u,f[14]+=u-f[2]*i-f[6]*s-f[10]*u}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const u=this.parent;if(e===!0&&u!==null&&u.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,u.name=this.name,u.castShadow=this.castShadow,u.receiveShadow=this.receiveShadow,u.visible=this.visible,u.frustumCulled=this.frustumCulled,u.renderOrder=this.renderOrder,u.static=this.static,u.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.pivot!==null&&(u.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(u.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(u.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(h=>({...h})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(e),u.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,S=m.length;p<S;p++){const v=m[p];f(e.shapes,v)}else f(e.shapes,m)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(f(e.materials,this.material[m]));u.material=h}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let h=0;h<this.children.length;h++)u.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];u.animations.push(f(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),S=d(e.images),v=d(e.shapes),_=d(e.skeletons),T=d(e.animations),R=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),S.length>0&&(s.images=S),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),T.length>0&&(s.animations=T),R.length>0&&(s.nodes=R)}return s.object=u,s;function d(h){const m=[];for(const p in h){const S=h[p];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const u=e.children[s];this.add(u.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ln.DEFAULT_UP=new nt(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $u extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CT={type:"move"};class Rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $u,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $u,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $u,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let u=null,f=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const O of e.hand.values()){const M=i.getJointPose(O,s),x=this._getHandJoint(p,O);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const S=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=S.position.distanceTo(v.position),T=.02,R=.005;p.inputState.pinching&&_>T+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=T-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,s),f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,f.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(f.linearVelocity)):m.hasLinearVelocity=!1,f.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(f.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(u=i.getPose(e.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(CT)))}return h!==null&&(h.visible=u!==null),m!==null&&(m.visible=f!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new $u;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const hx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},tc={h:0,s:0,l:0};function Ch(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Pe{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(e,i,s,u=Ue.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ue.colorSpaceToWorking(this,u),this}setHSL(e,i,s,u=Ue.workingColorSpace){if(e=mT(e,1),i=Le(i,0,1),s=Le(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=Ch(d,f,e+1/3),this.g=Ch(d,f,e),this.b=Ch(d,f,e-1/3)}return Ue.colorSpaceToWorking(this,u),this}setStyle(e,i=Jn){function s(f){f!==void 0&&parseFloat(f)<1&&le("Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=u[1],h=u[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:le("Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Jn){const s=hx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return Ue.workingToColorSpace(In.copy(this),e),Math.round(Le(In.r*255,0,255))*65536+Math.round(Le(In.g*255,0,255))*256+Math.round(Le(In.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ue.workingColorSpace){Ue.workingToColorSpace(In.copy(this),i);const s=In.r,u=In.g,f=In.b,d=Math.max(s,u,f),h=Math.min(s,u,f);let m,p;const S=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=S<=.5?v/(d+h):v/(2-d-h),d){case s:m=(u-f)/v+(u<f?6:0);break;case u:m=(f-s)/v+2;break;case f:m=(s-u)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=S,e}getRGB(e,i=Ue.workingColorSpace){return Ue.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Jn){Ue.workingToColorSpace(In.copy(this),e);const i=In.r,s=In.g,u=In.b;return e!==Jn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(e,i,s){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+i,hr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(hr),e.getHSL(tc);const s=Mh(hr.h,tc.h,i),u=Mh(hr.s,tc.s,i),f=Mh(hr.l,tc.l,i);return this.setHSL(s,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,u=this.b,f=e.elements;return this.r=f[0]*i+f[3]*s+f[6]*u,this.g=f[1]*i+f[4]*s+f[7]*u,this.b=f[2]*i+f[5]*s+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Pe;Pe.NAMES=hx;class px extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ii=new nt,Ra=new nt,wh=new nt,Ca=new nt,Ws=new nt,qs=new nt,Yv=new nt,Dh=new nt,Nh=new nt,Uh=new nt,Lh=new sn,Oh=new sn,Ph=new sn;class Bi{constructor(e=new nt,i=new nt,s=new nt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,u){u.subVectors(s,i),Ii.subVectors(e,i),u.cross(Ii);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,i,s,u,f){Ii.subVectors(u,i),Ra.subVectors(s,i),wh.subVectors(e,i);const d=Ii.dot(Ii),h=Ii.dot(Ra),m=Ii.dot(wh),p=Ra.dot(Ra),S=Ra.dot(wh),v=d*p-h*h;if(v===0)return f.set(0,0,0),null;const _=1/v,T=(p*m-h*S)*_,R=(d*S-h*m)*_;return f.set(1-T-R,R,T)}static containsPoint(e,i,s,u){return this.getBarycoord(e,i,s,u,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(e,i,s,u,f,d,h,m){return this.getBarycoord(e,i,s,u,Ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(f,Ca.x),m.addScaledVector(d,Ca.y),m.addScaledVector(h,Ca.z),m)}static getInterpolatedAttribute(e,i,s,u,f,d){return Lh.setScalar(0),Oh.setScalar(0),Ph.setScalar(0),Lh.fromBufferAttribute(e,i),Oh.fromBufferAttribute(e,s),Ph.fromBufferAttribute(e,u),d.setScalar(0),d.addScaledVector(Lh,f.x),d.addScaledVector(Oh,f.y),d.addScaledVector(Ph,f.z),d}static isFrontFacing(e,i,s,u){return Ii.subVectors(s,i),Ra.subVectors(e,i),Ii.cross(Ra).dot(u)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,u){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,i,s,u){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Ii.cross(Ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,u,f){return Bi.getInterpolation(e,this.a,this.b,this.c,i,s,u,f)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,u=this.b,f=this.c;let d,h;Ws.subVectors(u,s),qs.subVectors(f,s),Dh.subVectors(e,s);const m=Ws.dot(Dh),p=qs.dot(Dh);if(m<=0&&p<=0)return i.copy(s);Nh.subVectors(e,u);const S=Ws.dot(Nh),v=qs.dot(Nh);if(S>=0&&v<=S)return i.copy(u);const _=m*v-S*p;if(_<=0&&m>=0&&S<=0)return d=m/(m-S),i.copy(s).addScaledVector(Ws,d);Uh.subVectors(e,f);const T=Ws.dot(Uh),R=qs.dot(Uh);if(R>=0&&T<=R)return i.copy(f);const O=T*p-m*R;if(O<=0&&p>=0&&R<=0)return h=p/(p-R),i.copy(s).addScaledVector(qs,h);const M=S*R-T*v;if(M<=0&&v-S>=0&&T-R>=0)return Yv.subVectors(f,u),h=(v-S)/(v-S+(T-R)),i.copy(u).addScaledVector(Yv,h);const x=1/(M+O+_);return d=O*x,h=_*x,i.copy(s).addScaledVector(Ws,d).addScaledVector(qs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class bl{constructor(e=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(zi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(zi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=zi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,zi):zi.fromBufferAttribute(f,d),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ec.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ec.copy(s.boundingBox)),ec.applyMatrix4(e.matrixWorld),this.union(ec)}const u=e.children;for(let f=0,d=u.length;f<d;f++)this.expandByObject(u[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cl),nc.subVectors(this.max,cl),Ys.subVectors(e.a,cl),Zs.subVectors(e.b,cl),Ks.subVectors(e.c,cl),pr.subVectors(Zs,Ys),mr.subVectors(Ks,Zs),Xr.subVectors(Ys,Ks);let i=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Xr.z,Xr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Xr.z,0,-Xr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Xr.y,Xr.x,0];return!Ih(i,Ys,Zs,Ks,nc)||(i=[1,0,0,0,1,0,0,0,1],!Ih(i,Ys,Zs,Ks,nc))?!1:(ic.crossVectors(pr,mr),i=[ic.x,ic.y,ic.z],Ih(i,Ys,Zs,Ks,nc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wa=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],zi=new nt,ec=new bl,Ys=new nt,Zs=new nt,Ks=new nt,pr=new nt,mr=new nt,Xr=new nt,cl=new nt,nc=new nt,ic=new nt,kr=new nt;function Ih(o,e,i,s,u){for(let f=0,d=o.length-3;f<=d;f+=3){kr.fromArray(o,f);const h=u.x*Math.abs(kr.x)+u.y*Math.abs(kr.y)+u.z*Math.abs(kr.z),m=e.dot(kr),p=i.dot(kr),S=s.dot(kr);if(Math.max(-Math.max(m,p,S),Math.min(m,p,S))>h)return!1}return!0}const _n=new nt,ac=new be;let wT=0;class Pa extends $r{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=cT,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=i.array[s+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)ac.fromBufferAttribute(this,i),ac.applyMatrix3(e),this.setXY(i,ac.x,ac.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=ll(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Qn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ll(i,this.array)),i}setX(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ll(i,this.array)),i}setY(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ll(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ll(i,this.array)),i}setW(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,u){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),u=Qn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=u,this}setXYZW(e,i,s,u,f){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),u=Qn(u,this.array),f=Qn(f,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class mx extends Pa{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class gx extends Pa{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class $n extends Pa{constructor(e,i,s){super(new Float32Array(e),i,s)}}const DT=new bl,fl=new nt,zh=new nt;class rm{constructor(e=new nt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):DT.setFromPoints(e).getCenter(s);let u=0;for(let f=0,d=e.length;f<d;f++)u=Math.max(u,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fl.subVectors(e,this.center);const i=fl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),u=(s-this.radius)*.5;this.center.addScaledVector(fl,u/s),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fl.copy(e.center).add(zh)),this.expandByPoint(fl.copy(e.center).sub(zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let NT=0;const Ri=new nn,Bh=new Ln,Qs=new nt,di=new bl,dl=new bl,bn=new nt;class Gi extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=Tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fT(e)?gx:mx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new pe().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,i,s){return Ri.makeTranslation(e,i,s),this.applyMatrix4(Ri),this}scale(e,i,s){return Ri.makeScale(e,i,s),this.applyMatrix4(Ri),this}lookAt(e){return Bh.lookAt(e),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let u=0,f=e.length;u<f;u++){const d=e[u];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new $n(s,3))}else{const s=Math.min(e.length,i.count);for(let u=0;u<s;u++){const f=e[u];i.setXYZ(u,f.x,f.y,f.z||0)}e.length>i.count&&le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,u=i.length;s<u;s++){const f=i[s];di.setFromBufferAttribute(f),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rm);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(e){const s=this.boundingSphere.center;if(di.setFromBufferAttribute(e),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];dl.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(di.min,dl.min),di.expandByPoint(bn),bn.addVectors(di.max,dl.max),di.expandByPoint(bn)):(di.expandByPoint(dl.min),di.expandByPoint(dl.max))}di.getCenter(s);let u=0;for(let f=0,d=e.count;f<d;f++)bn.fromBufferAttribute(e,f),u=Math.max(u,s.distanceToSquared(bn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],m=this.morphTargetsRelative;for(let p=0,S=h.count;p<S;p++)bn.fromBufferAttribute(h,p),m&&(Qs.fromBufferAttribute(e,p),bn.add(Qs)),u=Math.max(u,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,u=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Pa(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],m=[];for(let E=0;E<s.count;E++)h[E]=new nt,m[E]=new nt;const p=new nt,S=new nt,v=new nt,_=new be,T=new be,R=new be,O=new nt,M=new nt;function x(E,L,U){p.fromBufferAttribute(s,E),S.fromBufferAttribute(s,L),v.fromBufferAttribute(s,U),_.fromBufferAttribute(f,E),T.fromBufferAttribute(f,L),R.fromBufferAttribute(f,U),S.sub(p),v.sub(p),T.sub(_),R.sub(_);const z=1/(T.x*R.y-R.x*T.y);isFinite(z)&&(O.copy(S).multiplyScalar(R.y).addScaledVector(v,-T.y).multiplyScalar(z),M.copy(v).multiplyScalar(T.x).addScaledVector(S,-R.x).multiplyScalar(z),h[E].add(O),h[L].add(O),h[U].add(O),m[E].add(M),m[L].add(M),m[U].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let E=0,L=w.length;E<L;++E){const U=w[E],z=U.start,G=U.count;for(let Z=z,V=z+G;Z<V;Z+=3)x(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const H=new nt,C=new nt,N=new nt,D=new nt;function I(E){N.fromBufferAttribute(u,E),D.copy(N);const L=h[E];H.copy(L),H.sub(N.multiplyScalar(N.dot(L))).normalize(),C.crossVectors(D,L);const z=C.dot(m[E])<0?-1:1;d.setXYZW(E,H.x,H.y,H.z,z)}for(let E=0,L=w.length;E<L;++E){const U=w[E],z=U.start,G=U.count;for(let Z=z,V=z+G;Z<V;Z+=3)I(e.getX(Z+0)),I(e.getX(Z+1)),I(e.getX(Z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Pa(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,T=s.count;_<T;_++)s.setXYZ(_,0,0,0);const u=new nt,f=new nt,d=new nt,h=new nt,m=new nt,p=new nt,S=new nt,v=new nt;if(e)for(let _=0,T=e.count;_<T;_+=3){const R=e.getX(_+0),O=e.getX(_+1),M=e.getX(_+2);u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,O),d.fromBufferAttribute(i,M),S.subVectors(d,f),v.subVectors(u,f),S.cross(v),h.fromBufferAttribute(s,R),m.fromBufferAttribute(s,O),p.fromBufferAttribute(s,M),h.add(S),m.add(S),p.add(S),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(O,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let _=0,T=i.count;_<T;_+=3)u.fromBufferAttribute(i,_+0),f.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),S.subVectors(d,f),v.subVectors(u,f),S.cross(v),s.setXYZ(_+0,S.x,S.y,S.z),s.setXYZ(_+1,S.x,S.y,S.z),s.setXYZ(_+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,m){const p=h.array,S=h.itemSize,v=h.normalized,_=new p.constructor(m.length*S);let T=0,R=0;for(let O=0,M=m.length;O<M;O++){h.isInterleavedBufferAttribute?T=m[O]*h.data.stride+h.offset:T=m[O]*S;for(let x=0;x<S;x++)_[R++]=p[T++]}return new Pa(_,S,v)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Gi,s=this.index.array,u=this.attributes;for(const h in u){const m=u[h],p=e(m,s);i.setAttribute(h,p)}const f=this.morphAttributes;for(const h in f){const m=[],p=f[h];for(let S=0,v=p.length;S<v;S++){const _=p[S],T=e(_,s);m.push(T)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const u={};let f=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],S=[];for(let v=0,_=p.length;v<_;v++){const T=p[v];S.push(T.toJSON(e.data))}S.length>0&&(u[m]=S,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const u=e.attributes;for(const p in u){const S=u[p];this.setAttribute(p,S.clone(i))}const f=e.morphAttributes;for(const p in f){const S=[],v=f[p];for(let _=0,T=v.length;_<T;_++)S.push(v[_].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,S=d.length;p<S;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fh=new nt,UT=new nt,LT=new pe;class vr{constructor(e=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,u){return this.normal.set(e,i,s),this.constant=u,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const u=Fh.subVectors(s,i).cross(UT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const u=e.delta(Fh),f=this.normal.dot(u);if(f===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/f;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(u,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||LT.getNormalMatrix(e),u=this.coplanarPoint(Fh).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let OT=0;class Al extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OT++}),this.uuid=Tl(),this.name="",this.type="Material",this.blending=_l,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qS,this.blendDst=YS,this.blendEquation=to,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Sl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iT,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sh,this.stencilZFail=Sh,this.stencilZPass=Sh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){le(`Material: parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){le(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector2&&s&&s.isVector2||u&&u.isEuler&&s&&s.isEuler||u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}if(i){const f=u(e.textures),d=u(e.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new vr().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new be().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const u=i.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Da=new nt,Hh=new nt,rc=new nt,sc=new nt;class PT{constructor(e=new nt,i=new nt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Da.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,i),Da.distanceToSquared(e))}distanceSqToSegment(e,i,s,u){Hh.copy(e).add(i).multiplyScalar(.5),rc.copy(i).sub(e).normalize(),sc.copy(this.origin).sub(Hh);const f=e.distanceTo(i)*.5,d=-this.direction.dot(rc),h=sc.dot(this.direction),m=-sc.dot(rc),p=sc.lengthSq(),S=Math.abs(1-d*d);let v,_,T,R;if(S>0)if(v=d*m-h,_=d*h-m,R=f*S,v>=0)if(_>=-R)if(_<=R){const O=1/S;v*=O,_*=O,T=v*(v+d*_+2*h)+_*(d*v+_+2*m)+p}else _=f,v=Math.max(0,-(d*_+h)),T=-v*v+_*(_+2*m)+p;else _=-f,v=Math.max(0,-(d*_+h)),T=-v*v+_*(_+2*m)+p;else _<=-R?(v=Math.max(0,-(-d*f+h)),_=v>0?-f:Math.min(Math.max(-f,-m),f),T=-v*v+_*(_+2*m)+p):_<=R?(v=0,_=Math.min(Math.max(-f,-m),f),T=_*(_+2*m)+p):(v=Math.max(0,-(d*f+h)),_=v>0?f:Math.min(Math.max(-f,-m),f),T=-v*v+_*(_+2*m)+p);else _=d>0?-f:f,v=Math.max(0,-(d*_+h)),T=-v*v+_*(_+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),u&&u.copy(Hh).addScaledVector(rc,_),T}intersectSphere(e,i){if(e.radius<0)return null;Da.subVectors(e.center,this.origin);const s=Da.dot(this.direction),u=Da.dot(Da)-s*s,f=e.radius*e.radius;if(u>f)return null;const d=Math.sqrt(f-u),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,u,f,d,h,m;const p=1/this.direction.x,S=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(s=(e.min.x-_.x)*p,u=(e.max.x-_.x)*p):(s=(e.max.x-_.x)*p,u=(e.min.x-_.x)*p),S>=0?(f=(e.min.y-_.y)*S,d=(e.max.y-_.y)*S):(f=(e.max.y-_.y)*S,d=(e.min.y-_.y)*S),s>d||f>u||((f>s||isNaN(s))&&(s=f),(d<u||isNaN(u))&&(u=d),v>=0?(h=(e.min.z-_.z)*v,m=(e.max.z-_.z)*v):(h=(e.max.z-_.z)*v,m=(e.min.z-_.z)*v),s>m||h>u)||((h>s||s!==s)&&(s=h),(m<u||u!==u)&&(u=m),u<0)?null:this.at(s>=0?s:u,i)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,i,s,u,f){const d=this.origin,h=this.direction,m=h.x,p=h.y,S=h.z,v=e.x-d.x,_=e.y-d.y,T=e.z-d.z,R=i.x-d.x,O=i.y-d.y,M=i.z-d.z,x=s.x-d.x,w=s.y-d.y,H=s.z-d.z,C=Math.abs(m),N=Math.abs(p),D=Math.abs(S);let I,E,L,U,z,G,Z,V,J,k,q,rt;if(C>=N&&C>=D?(L=m,G=v,J=R,rt=x,m>=0?(I=p,E=S,U=_,z=T,Z=O,V=M,k=w,q=H):(I=S,E=p,U=T,z=_,Z=M,V=O,k=H,q=w)):N>=D?(L=p,G=_,J=O,rt=w,p>=0?(I=S,E=m,U=T,z=v,Z=M,V=R,k=H,q=x):(I=m,E=S,U=v,z=T,Z=R,V=M,k=x,q=H)):(L=S,G=T,J=M,rt=H,S>=0?(I=m,E=p,U=v,z=_,Z=R,V=O,k=x,q=w):(I=p,E=m,U=_,z=v,Z=O,V=R,k=w,q=x)),L===0)return null;const at=I/L,ht=E/L,Mt=1/L,Wt=U-at*G,It=z-ht*G,F=Z-at*J,pt=V-ht*J,bt=k-at*rt,Y=q-ht*rt,ct=bt*pt-Y*F,Et=Wt*Y-It*bt,Ct=F*It-pt*Wt;if(u){if(ct<0||Et<0||Ct<0)return null}else if((ct<0||Et<0||Ct<0)&&(ct>0||Et>0||Ct>0))return null;const mt=ct+Et+Ct;if(mt===0)return null;const At=Mt*(ct*G+Et*J+Ct*rt);return(mt>0?At<0:At>0)?null:this.at(At/mt,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oc extends Al{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=ZS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zv=new nn,Wr=new PT,oc=new rm,Kv=new nt,lc=new nt,uc=new nt,cc=new nt,Gh=new nt,fc=new nt,Qv=new nt,dc=new nt;class mi extends Ln{constructor(e=new Gi,i=new Oc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const u=i[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=u.length;f<d;f++){const h=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,i){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(u,e);const h=this.morphTargetInfluences;if(f&&h){fc.set(0,0,0);for(let m=0,p=f.length;m<p;m++){const S=h[m],v=f[m];S!==0&&(Gh.fromBufferAttribute(v,e),d?fc.addScaledVector(Gh,S):fc.addScaledVector(Gh.sub(i),S))}i.add(fc)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),oc.copy(s.boundingSphere),oc.applyMatrix4(f),Wr.copy(e.ray).recast(e.near),!(oc.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(oc,Kv)===null||Wr.origin.distanceToSquared(Kv)>(e.far-e.near)**2))&&(Zv.copy(f).invert(),Wr.copy(e.ray).applyMatrix4(Zv),!(s.boundingBox!==null&&Wr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Wr)))}_computeIntersections(e,i,s){let u;const f=this.geometry,d=this.material,h=f.index,m=f.attributes.position,p=f.attributes.uv,S=f.attributes.uv1,v=f.attributes.normal,_=f.groups,T=f.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,O=_.length;R<O;R++){const M=_[R],x=d[M.materialIndex],w=Math.max(M.start,T.start),H=Math.min(h.count,Math.min(M.start+M.count,T.start+T.count));for(let C=w,N=H;C<N;C+=3){const D=h.getX(C),I=h.getX(C+1),E=h.getX(C+2);u=hc(this,x,e,s,p,S,v,D,I,E),u&&(u.faceIndex=Math.floor(C/3),u.face.materialIndex=M.materialIndex,i.push(u))}}else{const R=Math.max(0,T.start),O=Math.min(h.count,T.start+T.count);for(let M=R,x=O;M<x;M+=3){const w=h.getX(M),H=h.getX(M+1),C=h.getX(M+2);u=hc(this,d,e,s,p,S,v,w,H,C),u&&(u.faceIndex=Math.floor(M/3),i.push(u))}}else if(m!==void 0)if(Array.isArray(d))for(let R=0,O=_.length;R<O;R++){const M=_[R],x=d[M.materialIndex],w=Math.max(M.start,T.start),H=Math.min(m.count,Math.min(M.start+M.count,T.start+T.count));for(let C=w,N=H;C<N;C+=3){const D=C,I=C+1,E=C+2;u=hc(this,x,e,s,p,S,v,D,I,E),u&&(u.faceIndex=Math.floor(C/3),u.face.materialIndex=M.materialIndex,i.push(u))}}else{const R=Math.max(0,T.start),O=Math.min(m.count,T.start+T.count);for(let M=R,x=O;M<x;M+=3){const w=M,H=M+1,C=M+2;u=hc(this,d,e,s,p,S,v,w,H,C),u&&(u.faceIndex=Math.floor(M/3),i.push(u))}}}}function IT(o,e,i,s,u,f,d,h){let m;if(e.side===jn?m=s.intersectTriangle(d,f,u,!0,h):m=s.intersectTriangle(u,f,d,e.side===Ia,h),m===null)return null;dc.copy(h),dc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(dc);return p<i.near||p>i.far?null:{distance:p,point:dc.clone(),object:o}}function hc(o,e,i,s,u,f,d,h,m,p){o.getVertexPosition(h,lc),o.getVertexPosition(m,uc),o.getVertexPosition(p,cc);const S=IT(o,e,i,s,lc,uc,cc,Qv);if(S){const v=new nt;Bi.getBarycoord(Qv,lc,uc,cc,v),u&&(S.uv=Bi.getInterpolatedAttribute(u,h,m,p,v,new be)),f&&(S.uv1=Bi.getInterpolatedAttribute(f,h,m,p,v,new be)),d&&(S.normal=Bi.getInterpolatedAttribute(d,h,m,p,v,new nt),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const _={a:h,b:m,c:p,normal:new nt,materialIndex:0};Bi.getNormal(lc,uc,cc,_.normal),S.face=_,S.barycoord=v}return S}class zT extends Bn{constructor(e=null,i=1,s=1,u,f,d,h,m,p=Un,S=Un,v,_){super(null,d,h,m,p,S,u,f,v,_),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qr=new rm,BT=new be(.5,.5),pc=new nt;class sm{constructor(e=new vr,i=new vr,s=new vr,u=new vr,f=new vr,d=new vr){this.planes=[e,i,s,u,f,d]}set(e,i,s,u,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(u),h[4].copy(f),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=sa,s=!1){const u=this.planes,f=e.elements,d=f[0],h=f[1],m=f[2],p=f[3],S=f[4],v=f[5],_=f[6],T=f[7],R=f[8],O=f[9],M=f[10],x=f[11],w=f[12],H=f[13],C=f[14],N=f[15];if(u[0].setComponents(p-d,T-S,x-R,N-w).normalize(),u[1].setComponents(p+d,T+S,x+R,N+w).normalize(),u[2].setComponents(p+h,T+v,x+O,N+H).normalize(),u[3].setComponents(p-h,T-v,x-O,N-H).normalize(),s)u[4].setComponents(m,_,M,C).normalize(),u[5].setComponents(p-m,T-_,x-M,N-C).normalize();else if(u[4].setComponents(p-m,T-_,x-M,N-C).normalize(),i===sa)u[5].setComponents(p+m,T+_,x+M,N+C).normalize();else if(i===yl)u[5].setComponents(m,_,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){qr.center.set(0,0,0);const i=BT.distanceTo(e.center);return qr.radius=.7071067811865476+i,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const i=this.planes,s=e.center,u=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const u=i[s];if(pc.x=u.normal.x>0?e.max.x:e.min.x,pc.y=u.normal.y>0?e.max.y:e.min.y,pc.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(pc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _x extends Bn{constructor(e=[],i=Jr,s,u,f,d,h,m,p,S){super(e,i,s,u,f,d,h,m,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vx extends Bn{constructor(e,i,s,u,f,d,h,m,p){super(e,i,s,u,f,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class El extends Bn{constructor(e,i,s=la,u,f,d,h=Un,m=Un,p,S=za,v=1){if(S!==za&&S!==Kr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:v};super(_,u,f,d,h,m,S,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new am(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class FT extends El{constructor(e,i=la,s=Jr,u,f,d=Un,h=Un,m,p=za){const S={width:e,height:e,depth:1},v=[S,S,S,S,S,S];super(e,e,i,s,u,f,d,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sx extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rl extends Gi{constructor(e=1,i=1,s=1,u=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:u,heightSegments:f,depthSegments:d};const h=this;u=Math.floor(u),f=Math.floor(f),d=Math.floor(d);const m=[],p=[],S=[],v=[];let _=0,T=0;R("z","y","x",-1,-1,s,i,e,d,f,0),R("z","y","x",1,-1,s,i,-e,d,f,1),R("x","z","y",1,1,e,s,i,u,d,2),R("x","z","y",1,-1,e,s,-i,u,d,3),R("x","y","z",1,-1,e,i,s,u,f,4),R("x","y","z",-1,-1,e,i,-s,u,f,5),this.setIndex(m),this.setAttribute("position",new $n(p,3)),this.setAttribute("normal",new $n(S,3)),this.setAttribute("uv",new $n(v,2));function R(O,M,x,w,H,C,N,D,I,E,L){const U=C/I,z=N/E,G=C/2,Z=N/2,V=D/2,J=I+1,k=E+1;let q=0,rt=0;const at=new nt;for(let ht=0;ht<k;ht++){const Mt=ht*z-Z;for(let Wt=0;Wt<J;Wt++){const It=Wt*U-G;at[O]=It*w,at[M]=Mt*H,at[x]=V,p.push(at.x,at.y,at.z),at[O]=0,at[M]=0,at[x]=D>0?1:-1,S.push(at.x,at.y,at.z),v.push(Wt/I),v.push(1-ht/E),q+=1}}for(let ht=0;ht<E;ht++)for(let Mt=0;Mt<I;Mt++){const Wt=_+Mt+J*ht,It=_+Mt+J*(ht+1),F=_+(Mt+1)+J*(ht+1),pt=_+(Mt+1)+J*ht;m.push(Wt,It,pt),m.push(It,F,pt),rt+=6}h.addGroup(T,rt,L),T+=rt,_+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class om extends Gi{constructor(e=[],i=[],s=1,u=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:u};const f=[],d=[];h(u),p(s),S(),this.setAttribute("position",new $n(f,3)),this.setAttribute("normal",new $n(f.slice(),3)),this.setAttribute("uv",new $n(d,2)),u===0?this.computeVertexNormals():this.normalizeNormals();function h(w){const H=new nt,C=new nt,N=new nt;for(let D=0;D<i.length;D+=3)T(i[D+0],H),T(i[D+1],C),T(i[D+2],N),m(H,C,N,w)}function m(w,H,C,N){const D=N+1,I=[];for(let E=0;E<=D;E++){I[E]=[];const L=w.clone().lerp(C,E/D),U=H.clone().lerp(C,E/D),z=D-E;for(let G=0;G<=z;G++)G===0&&E===D?I[E][G]=L:I[E][G]=L.clone().lerp(U,G/z)}for(let E=0;E<D;E++)for(let L=0;L<2*(D-E)-1;L++){const U=Math.floor(L/2);L%2===0?(_(I[E][U+1]),_(I[E+1][U]),_(I[E][U])):(_(I[E][U+1]),_(I[E+1][U+1]),_(I[E+1][U]))}}function p(w){const H=new nt;for(let C=0;C<f.length;C+=3)H.x=f[C+0],H.y=f[C+1],H.z=f[C+2],H.normalize().multiplyScalar(w),f[C+0]=H.x,f[C+1]=H.y,f[C+2]=H.z}function S(){const w=new nt;for(let H=0;H<f.length;H+=3){w.x=f[H+0],w.y=f[H+1],w.z=f[H+2];const C=M(w)/2/Math.PI+.5,N=x(w)/Math.PI+.5;d.push(C,1-N)}R(),v()}function v(){for(let w=0;w<d.length;w+=6){const H=d[w+0],C=d[w+2],N=d[w+4],D=Math.max(H,C,N),I=Math.min(H,C,N);D>.9&&I<.1&&(H<.2&&(d[w+0]+=1),C<.2&&(d[w+2]+=1),N<.2&&(d[w+4]+=1))}}function _(w){f.push(w.x,w.y,w.z)}function T(w,H){const C=w*3;H.x=e[C+0],H.y=e[C+1],H.z=e[C+2]}function R(){const w=new nt,H=new nt,C=new nt,N=new nt,D=new be,I=new be,E=new be;for(let L=0,U=0;L<f.length;L+=9,U+=6){w.set(f[L+0],f[L+1],f[L+2]),H.set(f[L+3],f[L+4],f[L+5]),C.set(f[L+6],f[L+7],f[L+8]),D.set(d[U+0],d[U+1]),I.set(d[U+2],d[U+3]),E.set(d[U+4],d[U+5]),N.copy(w).add(H).add(C).divideScalar(3);const z=M(N);O(D,U+0,w,z),O(I,U+2,H,z),O(E,U+4,C,z)}}function O(w,H,C,N){N<0&&w.x===1&&(d[H]=w.x-1),C.x===0&&C.z===0&&(d[H]=N/2/Math.PI+.5)}function M(w){return Math.atan2(w.z,-w.x)}function x(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new om(e.vertices,e.indices,e.radius,e.detail)}}class lm extends om{constructor(e=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],u=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,u,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new lm(e.radius,e.detail)}}class uo extends Gi{constructor(e=1,i=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:u};const f=e/2,d=i/2,h=Math.floor(s),m=Math.floor(u),p=h+1,S=m+1,v=e/h,_=i/m,T=[],R=[],O=[],M=[];for(let x=0;x<S;x++){const w=x*_-d;for(let H=0;H<p;H++){const C=H*v-f;R.push(C,-w,0),O.push(0,0,1),M.push(H/h),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let w=0;w<h;w++){const H=w+p*x,C=w+p*(x+1),N=w+1+p*(x+1),D=w+1+p*x;T.push(H,C,D),T.push(C,N,D)}this.setIndex(T),this.setAttribute("position",new $n(R,3)),this.setAttribute("normal",new $n(O,3)),this.setAttribute("uv",new $n(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.widthSegments,e.heightSegments)}}function lo(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const u=o[i][s];if(Jv(u))u.isRenderTargetTexture?(le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=u.clone();else if(Array.isArray(u))if(Jv(u[0])){const f=[];for(let d=0,h=u.length;d<h;d++)f[d]=u[d].clone();e[i][s]=f}else e[i][s]=u.slice();else e[i][s]=u}}return e}function kn(o){const e={};for(let i=0;i<o.length;i++){const s=lo(o[i]);for(const u in s)e[u]=s[u]}return e}function Jv(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function HT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function xx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ue.workingColorSpace}const GT={clone:lo,merge:kn};var VT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ca extends Al{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VT,this.fragmentShader=XT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=HT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const u in this.uniforms){const d=this.uniforms[u].value;d&&d.isTexture?i.uniforms[u]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[u]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[u]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[u]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[u]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[u]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[u]={type:"m4",value:d.toArray()}:i.uniforms[u]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const u=e.uniforms[s];switch(this.uniforms[s]={},u.type){case"t":this.uniforms[s].value=i[u.value]||null;break;case"c":this.uniforms[s].value=new Pe().setHex(u.value);break;case"v2":this.uniforms[s].value=new be().fromArray(u.value);break;case"v3":this.uniforms[s].value=new nt().fromArray(u.value);break;case"v4":this.uniforms[s].value=new sn().fromArray(u.value);break;case"m3":this.uniforms[s].value=new pe().fromArray(u.value);break;case"m4":this.uniforms[s].value=new nn().fromArray(u.value);break;default:this.uniforms[s].value=u.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class kT extends ca{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mx extends Al{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ip,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class WT extends Al{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qT extends Al{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class um extends Ln{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=i}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class yx extends um{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const Vh=new nn,jv=new nt,$v=new nt;class YT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sm,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera;jv.setFromMatrixPosition(e.matrixWorld),i.position.copy(jv),$v.setFromMatrixPosition(e.target.matrixWorld),i.lookAt($v),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(e,i,s,u){Vh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s.setFromProjectionMatrix(Vh,e.coordinateSystem,e.reversedDepth);const f=this._frameExtents,d=u?u.z/f.x:1,h=u?u.w/f.y:1,m=u?u.x/f.x:0,p=u?u.y/f.y:0;e.coordinateSystem===yl||e.reversedDepth?i.set(.5*d,0,0,.5*d+m,0,.5*h,0,.5*h+p,0,0,1,0,0,0,0,1):i.set(.5*d,0,0,.5*d+m,0,.5*h,0,.5*h+p,0,0,.5,.5,0,0,0,1),i.multiply(Vh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const mc=new nt,gc=new ti,na=new nt;class Ex extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(mc,gc,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,na.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(mc,gc,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,na.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gr=new nt,tS=new be,eS=new be;class hi extends Ex{constructor(e=50,i=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=zp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zp*2*Math.atan(Math.tan(xh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,i){return this.getViewBounds(e,tS,eS),i.subVectors(eS,tS)}setViewOffset(e,i,s,u,f,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(xh*.5*this.fov)/this.zoom,s=2*i,u=this.aspect*s,f=-.5*u;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;f+=d.offsetX*u/m,i-=d.offsetY*s/p,u*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class cm extends Ex{constructor(e=-1,i=1,s=1,u=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=u,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,u,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-e,d=s+e,h=u+i,m=u-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=p*this.view.offsetX,d=f+p*this.view.width,h-=S*this.view.offsetY,m=h-S*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ZT extends YT{constructor(){super(new cm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tx extends um{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new ZT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class bx extends um{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Js=-90,js=1;class KT extends Ln{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new hi(Js,js,e,i);u.layers=this.layers,this.add(u);const f=new hi(Js,js,e,i);f.layers=this.layers,this.add(f);const d=new hi(Js,js,e,i);d.layers=this.layers,this.add(d);const h=new hi(Js,js,e,i);h.layers=this.layers,this.add(h);const m=new hi(Js,js,e,i);m.layers=this.layers,this.add(m);const p=new hi(Js,js,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,u,f,d,h,m]=i;for(const p of i)this.remove(p);if(e===sa)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===yl)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,m,p,S]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),T=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const O=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,1,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),s.texture.generateMipmaps=O,e.setRenderTarget(s,5,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(v,_,T),e.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class QT extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const gm=class gm{constructor(e,i,s,u){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,u)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,u){const f=this.elements;return f[0]=e,f[2]=i,f[1]=s,f[3]=u,this}};gm.prototype.isMatrix2=!0;let nS=gm;function iS(o,e,i,s){const u=JT(s);switch(i){case ox:return o*e;case ux:return o*e/u.components*u.byteLength;case $p:return o*e/u.components*u.byteLength;case jr:return o*e*2/u.components*u.byteLength;case tm:return o*e*2/u.components*u.byteLength;case lx:return o*e*3/u.components*u.byteLength;case Fi:return o*e*4/u.components*u.byteLength;case em:return o*e*4/u.components*u.byteLength;case Mc:case yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ec:case Tc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case op:case up:return Math.max(o,16)*Math.max(e,8)/4;case sp:case lp:return Math.max(o,8)*Math.max(e,8)/2;case cp:case fp:case hp:case pp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case dp:case Ac:case mp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case gp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case _p:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case vp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Sp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case xp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Mp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case yp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Tp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case bp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ap:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Rp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Cp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case wp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Dp:case Np:case Up:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Lp:case Op:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Rc:case Pp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function JT(o){switch(o){case pi:case ix:return{byteLength:1,components:1};case xl:case ax:case ua:return{byteLength:2,components:1};case Jp:case jp:return{byteLength:2,components:4};case la:case Qp:case ra:return{byteLength:4,components:1};case rx:case sx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kp}}));typeof window<"u"&&(window.__THREE__?le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kp);function Ax(){let o=null,e=!1,i=null,s=null;function u(f,d){s=o.requestAnimationFrame(u),i(f,d)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(u),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function jT(o){const e=new WeakMap;function i(h,m){const p=h.array,S=h.usage,v=p.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,p,S),h.onUploadCallback();let T;if(p instanceof Float32Array)T=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)T=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?T=o.HALF_FLOAT:T=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)T=o.SHORT;else if(p instanceof Uint32Array)T=o.UNSIGNED_INT;else if(p instanceof Int32Array)T=o.INT;else if(p instanceof Int8Array)T=o.BYTE;else if(p instanceof Uint8Array)T=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)T=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:T,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const S=m.array,v=m.updateRanges;if(o.bindBuffer(p,h),v.length===0)o.bufferSubData(p,0,S);else{v.sort((T,R)=>T.start-R.start);let _=0;for(let T=1;T<v.length;T++){const R=v[_],O=v[T];O.start<=R.start+R.count+1?R.count=Math.max(R.count,O.start+O.count-R.start):(++_,v[_]=O)}v.length=_+1;for(let T=0,R=v.length;T<R;T++){const O=v[T];o.bufferSubData(p,O.start*S.BYTES_PER_ELEMENT,S,O.start,O.count)}m.clearUpdateRanges()}m.onUploadCallback()}function u(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=e.get(h);(!S||S.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:u,remove:f,update:d}}var $T=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tb=`#ifdef USE_ALPHAHASH
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
#endif`,eb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ib=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ab=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rb=`#ifdef USE_AOMAP
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
#endif`,sb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ob=`#ifdef USE_BATCHING
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
#endif`,lb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ub=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,db=`#ifdef USE_IRIDESCENCE
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
#endif`,hb=`#ifdef USE_BUMPMAP
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
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yb=`#define PI 3.141592653589793
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
} // validated`,Eb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tb=`vec3 transformedNormal = objectNormal;
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
#endif`,bb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ab=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Db=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nb=`#ifdef USE_ENVMAP
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
#endif`,Ub=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lb=`#ifdef USE_ENVMAP
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
#endif`,Ob=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pb=`#ifdef USE_ENVMAP
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
#endif`,Ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hb=`#ifdef USE_GRADIENTMAP
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
}`,Gb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Wb=`#ifdef USE_ENVMAP
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
#endif`,qb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qb=`PhysicalMaterial material;
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
#endif`,Jb=`uniform sampler2D dfgLUT;
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
}`,jb=`
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
#endif`,$b=`#if defined( RE_IndirectDiffuse )
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
#endif`,t1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,n1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u1=`#if defined( USE_POINTS_UV )
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
#endif`,c1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m1=`#ifdef USE_MORPHTARGETS
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
#endif`,g1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,v1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,y1=`#ifdef USE_NORMALMAP
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
#endif`,E1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,w1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B1=`float getShadowMask() {
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
}`,F1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H1=`#ifdef USE_SKINNING
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
#endif`,G1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V1=`#ifdef USE_SKINNING
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
#endif`,X1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y1=`#ifdef USE_TRANSMISSION
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
#endif`,Z1=`#ifdef USE_TRANSMISSION
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
#endif`,K1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tA=`uniform sampler2D t2D;
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
}`,eA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rA=`#include <common>
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
}`,sA=`#if DEPTH_PACKING == 3200
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
}`,oA=`#define DISTANCE
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
}`,lA=`#define DISTANCE
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
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fA=`uniform float scale;
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
}`,dA=`uniform vec3 diffuse;
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
}`,hA=`#include <common>
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
}`,pA=`uniform vec3 diffuse;
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
}`,mA=`#define LAMBERT
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
}`,gA=`#define LAMBERT
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
}`,_A=`#define MATCAP
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
}`,vA=`#define MATCAP
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
}`,SA=`#define NORMAL
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
}`,xA=`#define NORMAL
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
}`,MA=`#define PHONG
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
}`,yA=`#define PHONG
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
}`,EA=`#define STANDARD
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
}`,TA=`#define STANDARD
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
}`,bA=`#define TOON
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
}`,AA=`#define TOON
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
}`,RA=`uniform float size;
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
}`,CA=`uniform vec3 diffuse;
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
}`,wA=`#include <common>
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
}`,DA=`uniform vec3 color;
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
}`,NA=`uniform float rotation;
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
}`,UA=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:$T,alphahash_pars_fragment:tb,alphamap_fragment:eb,alphamap_pars_fragment:nb,alphatest_fragment:ib,alphatest_pars_fragment:ab,aomap_fragment:rb,aomap_pars_fragment:sb,batching_pars_vertex:ob,batching_vertex:lb,begin_vertex:ub,beginnormal_vertex:cb,bsdfs:fb,iridescence_fragment:db,bumpmap_pars_fragment:hb,clipping_planes_fragment:pb,clipping_planes_pars_fragment:mb,clipping_planes_pars_vertex:gb,clipping_planes_vertex:_b,color_fragment:vb,color_pars_fragment:Sb,color_pars_vertex:xb,color_vertex:Mb,common:yb,cube_uv_reflection_fragment:Eb,defaultnormal_vertex:Tb,displacementmap_pars_vertex:bb,displacementmap_vertex:Ab,emissivemap_fragment:Rb,emissivemap_pars_fragment:Cb,colorspace_fragment:wb,colorspace_pars_fragment:Db,envmap_fragment:Nb,envmap_common_pars_fragment:Ub,envmap_pars_fragment:Lb,envmap_pars_vertex:Ob,envmap_physical_pars_fragment:Wb,envmap_vertex:Pb,fog_vertex:Ib,fog_pars_vertex:zb,fog_fragment:Bb,fog_pars_fragment:Fb,gradientmap_pars_fragment:Hb,lightmap_pars_fragment:Gb,lights_lambert_fragment:Vb,lights_lambert_pars_fragment:Xb,lights_pars_begin:kb,lights_toon_fragment:qb,lights_toon_pars_fragment:Yb,lights_phong_fragment:Zb,lights_phong_pars_fragment:Kb,lights_physical_fragment:Qb,lights_physical_pars_fragment:Jb,lights_fragment_begin:jb,lights_fragment_maps:$b,lights_fragment_end:t1,lightprobes_pars_fragment:e1,logdepthbuf_fragment:n1,logdepthbuf_pars_fragment:i1,logdepthbuf_pars_vertex:a1,logdepthbuf_vertex:r1,map_fragment:s1,map_pars_fragment:o1,map_particle_fragment:l1,map_particle_pars_fragment:u1,metalnessmap_fragment:c1,metalnessmap_pars_fragment:f1,morphinstance_vertex:d1,morphcolor_vertex:h1,morphnormal_vertex:p1,morphtarget_pars_vertex:m1,morphtarget_vertex:g1,normal_fragment_begin:_1,normal_fragment_maps:v1,normal_pars_fragment:S1,normal_pars_vertex:x1,normal_vertex:M1,normalmap_pars_fragment:y1,clearcoat_normal_fragment_begin:E1,clearcoat_normal_fragment_maps:T1,clearcoat_pars_fragment:b1,iridescence_pars_fragment:A1,opaque_fragment:R1,packing:C1,premultiplied_alpha_fragment:w1,project_vertex:D1,dithering_fragment:N1,dithering_pars_fragment:U1,roughnessmap_fragment:L1,roughnessmap_pars_fragment:O1,shadowmap_pars_fragment:P1,shadowmap_pars_vertex:I1,shadowmap_vertex:z1,shadowmask_pars_fragment:B1,skinbase_vertex:F1,skinning_pars_vertex:H1,skinning_vertex:G1,skinnormal_vertex:V1,specularmap_fragment:X1,specularmap_pars_fragment:k1,tonemapping_fragment:W1,tonemapping_pars_fragment:q1,transmission_fragment:Y1,transmission_pars_fragment:Z1,uv_pars_fragment:K1,uv_pars_vertex:Q1,uv_vertex:J1,worldpos_vertex:j1,background_vert:$1,background_frag:tA,backgroundCube_vert:eA,backgroundCube_frag:nA,cube_vert:iA,cube_frag:aA,depth_vert:rA,depth_frag:sA,distance_vert:oA,distance_frag:lA,equirect_vert:uA,equirect_frag:cA,linedashed_vert:fA,linedashed_frag:dA,meshbasic_vert:hA,meshbasic_frag:pA,meshlambert_vert:mA,meshlambert_frag:gA,meshmatcap_vert:_A,meshmatcap_frag:vA,meshnormal_vert:SA,meshnormal_frag:xA,meshphong_vert:MA,meshphong_frag:yA,meshphysical_vert:EA,meshphysical_frag:TA,meshtoon_vert:bA,meshtoon_frag:AA,points_vert:RA,points_frag:CA,shadow_vert:wA,shadow_frag:DA,sprite_vert:NA,sprite_frag:UA},Ht={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new nt},probesMax:{value:new nt},probesResolution:{value:new nt}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},aa={basic:{uniforms:kn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:kn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:kn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:kn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:kn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:kn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:kn([Ht.points,Ht.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:kn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:kn([Ht.common,Ht.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:kn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:kn([Ht.sprite,Ht.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:kn([Ht.common,Ht.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:kn([Ht.lights,Ht.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};aa.physical={uniforms:kn([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const _c={r:0,b:0,g:0},LA=new nn,Rx=new pe;Rx.set(-1,0,0,0,1,0,0,0,1);function OA(o,e,i,s,u,f){const d=new Pe(0);let h=u===!0?0:1,m,p,S=null,v=0,_=null;function T(w){let H=w.isScene===!0?w.background:null;if(H&&H.isTexture){const C=w.backgroundBlurriness>0;H=e.get(H,C)}return H}function R(w){let H=!1;const C=T(w);C===null?M(d,h):C&&C.isColor&&(M(C,1),H=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,f):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||H)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function O(w,H){const C=T(H);C&&(C.isCubeTexture||C.mapping===Lc)?(p===void 0&&(p=new mi(new Rl(1,1,1),new ca({name:"BackgroundCubeMaterial",uniforms:lo(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(LA.makeRotationFromEuler(H.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Rx),p.material.toneMapped=Ue.getTransfer(C.colorSpace)!==Ze,(S!==C||v!==C.version||_!==o.toneMapping)&&(p.material.needsUpdate=!0,S=C,v=C.version,_=o.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new mi(new uo(2,2),new ca({name:"BackgroundMaterial",uniforms:lo(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,m.material.toneMapped=Ue.getTransfer(C.colorSpace)!==Ze,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(S!==C||v!==C.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,S=C,v=C.version,_=o.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function M(w,H){w.getRGB(_c,xx(o)),i.buffers.color.setClear(_c.r,_c.g,_c.b,H,f)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(w,H=1){d.set(w),h=H,M(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,M(d,h)},render:R,addToRenderList:O,dispose:x}}function PA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=_(null);let f=u,d=!1;function h(z,G,Z,V,J){let k=!1;const q=v(z,V,Z,G);f!==q&&(f=q,p(f.object)),k=T(z,V,Z,J),k&&R(z,V,Z,J),J!==null&&e.update(J,o.ELEMENT_ARRAY_BUFFER),(k||d)&&(d=!1,C(z,G,Z,V),J!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return o.createVertexArray()}function p(z){return o.bindVertexArray(z)}function S(z){return o.deleteVertexArray(z)}function v(z,G,Z,V){const J=V.wireframe===!0;let k=s[G.id];k===void 0&&(k={},s[G.id]=k);const q=z.isInstancedMesh===!0?z.id:0;let rt=k[q];rt===void 0&&(rt={},k[q]=rt);let at=rt[Z.id];at===void 0&&(at={},rt[Z.id]=at);let ht=at[J];return ht===void 0&&(ht=_(m()),at[J]=ht),ht}function _(z){const G=[],Z=[],V=[];for(let J=0;J<i;J++)G[J]=0,Z[J]=0,V[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Z,attributeDivisors:V,object:z,attributes:{},index:null}}function T(z,G,Z,V){const J=f.attributes,k=G.attributes;let q=0;const rt=Z.getAttributes();for(const at in rt)if(rt[at].location>=0){const Mt=J[at];let Wt=k[at];if(Wt===void 0&&(at==="instanceMatrix"&&z.instanceMatrix&&(Wt=z.instanceMatrix),at==="instanceColor"&&z.instanceColor&&(Wt=z.instanceColor)),Mt===void 0||Mt.attribute!==Wt||Wt&&Mt.data!==Wt.data)return!0;q++}return f.attributesNum!==q||f.index!==V}function R(z,G,Z,V){const J={},k=G.attributes;let q=0;const rt=Z.getAttributes();for(const at in rt)if(rt[at].location>=0){let Mt=k[at];Mt===void 0&&(at==="instanceMatrix"&&z.instanceMatrix&&(Mt=z.instanceMatrix),at==="instanceColor"&&z.instanceColor&&(Mt=z.instanceColor));const Wt={};Wt.attribute=Mt,Mt&&Mt.data&&(Wt.data=Mt.data),J[at]=Wt,q++}f.attributes=J,f.attributesNum=q,f.index=V}function O(){const z=f.newAttributes;for(let G=0,Z=z.length;G<Z;G++)z[G]=0}function M(z){x(z,0)}function x(z,G){const Z=f.newAttributes,V=f.enabledAttributes,J=f.attributeDivisors;Z[z]=1,V[z]===0&&(o.enableVertexAttribArray(z),V[z]=1),J[z]!==G&&(o.vertexAttribDivisor(z,G),J[z]=G)}function w(){const z=f.newAttributes,G=f.enabledAttributes;for(let Z=0,V=G.length;Z<V;Z++)G[Z]!==z[Z]&&(o.disableVertexAttribArray(Z),G[Z]=0)}function H(z,G,Z,V,J,k,q){q===!0?o.vertexAttribIPointer(z,G,Z,J,k):o.vertexAttribPointer(z,G,Z,V,J,k)}function C(z,G,Z,V){O();const J=V.attributes,k=Z.getAttributes(),q=G.defaultAttributeValues;for(const rt in k){const at=k[rt];if(at.location>=0){let ht=J[rt];if(ht===void 0&&(rt==="instanceMatrix"&&z.instanceMatrix&&(ht=z.instanceMatrix),rt==="instanceColor"&&z.instanceColor&&(ht=z.instanceColor)),ht!==void 0){const Mt=ht.normalized,Wt=ht.itemSize,It=e.get(ht);if(It===void 0)continue;const F=It.buffer,pt=It.type,bt=It.bytesPerElement,Y=pt===o.INT||pt===o.UNSIGNED_INT||ht.gpuType===Qp;if(ht.isInterleavedBufferAttribute){const ct=ht.data,Et=ct.stride,Ct=ht.offset;if(ct.isInstancedInterleavedBuffer){for(let mt=0;mt<at.locationSize;mt++)x(at.location+mt,ct.meshPerAttribute);z.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let mt=0;mt<at.locationSize;mt++)M(at.location+mt);o.bindBuffer(o.ARRAY_BUFFER,F);for(let mt=0;mt<at.locationSize;mt++)H(at.location+mt,Wt/at.locationSize,pt,Mt,Et*bt,(Ct+Wt/at.locationSize*mt)*bt,Y)}else{if(ht.isInstancedBufferAttribute){for(let ct=0;ct<at.locationSize;ct++)x(at.location+ct,ht.meshPerAttribute);z.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ct=0;ct<at.locationSize;ct++)M(at.location+ct);o.bindBuffer(o.ARRAY_BUFFER,F);for(let ct=0;ct<at.locationSize;ct++)H(at.location+ct,Wt/at.locationSize,pt,Mt,Wt*bt,Wt/at.locationSize*ct*bt,Y)}}else if(q!==void 0){const Mt=q[rt];if(Mt!==void 0)switch(Mt.length){case 2:o.vertexAttrib2fv(at.location,Mt);break;case 3:o.vertexAttrib3fv(at.location,Mt);break;case 4:o.vertexAttrib4fv(at.location,Mt);break;default:o.vertexAttrib1fv(at.location,Mt)}}}}w()}function N(){L();for(const z in s){const G=s[z];for(const Z in G){const V=G[Z];for(const J in V){const k=V[J];for(const q in k)S(k[q].object),delete k[q];delete V[J]}}delete s[z]}}function D(z){if(s[z.id]===void 0)return;const G=s[z.id];for(const Z in G){const V=G[Z];for(const J in V){const k=V[J];for(const q in k)S(k[q].object),delete k[q];delete V[J]}}delete s[z.id]}function I(z){for(const G in s){const Z=s[G];for(const V in Z){const J=Z[V];if(J[z.id]===void 0)continue;const k=J[z.id];for(const q in k)S(k[q].object),delete k[q];delete J[z.id]}}}function E(z){for(const G in s){const Z=s[G],V=z.isInstancedMesh===!0?z.id:0,J=Z[V];if(J!==void 0){for(const k in J){const q=J[k];for(const rt in q)S(q[rt].object),delete q[rt];delete J[k]}delete Z[V],Object.keys(Z).length===0&&delete s[G]}}}function L(){U(),d=!0,f!==u&&(f=u,p(f.object))}function U(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:L,resetDefaultState:U,dispose:N,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:I,initAttributes:O,enableAttribute:M,disableUnusedAttributes:w}}function IA(o,e,i){let s;function u(m){s=m}function f(m,p){o.drawArrays(s,m,p),i.update(p,s,1)}function d(m,p,S){S!==0&&(o.drawArraysInstanced(s,m,p,S),i.update(p,s,S))}function h(m,p,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,S);let _=0;for(let T=0;T<S;T++)_+=p[T];i.update(_,s,1)}this.setMode=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function zA(o,e,i,s){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function d(I){return!(I!==Fi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const E=I===ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==pi&&I!==ra&&!E&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=m(p);S!==p&&(le("WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const T=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),O=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),H=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=o.getParameter(o.MAX_SAMPLES),D=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:T,maxVertexTextures:R,maxTextureSize:O,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:w,maxVaryings:H,maxFragmentUniforms:C,maxSamples:N,samples:D}}function BA(o){const e=this;let i=null,s=0,u=!1,f=!1;const d=new vr,h=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const T=v.length!==0||_||s!==0||u;return u=_,s=v.length,T},this.beginShadows=function(){f=!0,S(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(v,_){i=S(v,_,0)},this.setState=function(v,_,T){const R=v.clippingPlanes,O=v.clipIntersection,M=v.clipShadows,x=o.get(v);if(!u||R===null||R.length===0||f&&!M)f?S(null):p();else{const w=f?0:s,H=w*4;let C=x.clippingState||null;m.value=C,C=S(R,_,H,T);for(let N=0;N!==H;++N)C[N]=i[N];x.clippingState=C,this.numIntersection=O?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(v,_,T,R){const O=v!==null?v.length:0;let M=null;if(O!==0){if(M=m.value,R!==!0||M===null){const x=T+O*4,w=_.matrixWorldInverse;h.getNormalMatrix(w),(M===null||M.length<x)&&(M=new Float32Array(x));for(let H=0,C=T;H!==O;++H,C+=4)d.copy(v[H]).applyMatrix4(w,h),d.normal.toArray(M,C),M[C+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=O,e.numIntersection=0,M}}const eo=4,FA=6,HA=20,GA=256,hl=new cm,aS=new Pe;let Xh=null,kh=0,Wh=0,qh=!1;const VA=new nt,Yr=new nt;class rS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,u=100,f={}){const{size:d=256,position:h=VA}=f;Xh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,u,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xh,kh,Wh),this._renderer.xr.enabled=qh,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Jr||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:ua,format:Fi,colorSpace:Cc,depthBuffer:!1},u=sS(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sS(e,i,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=XA(f)),this._blurMaterial=WA(f,e,i),this._ggxMaterial=kA(f,e,i)}return u}_compileMaterial(e){const i=new mi(new Gi,e);this._renderer.compile(i,hl)}_sceneToCubeUV(e,i,s,u,f){const m=new hi(90,1,i,s),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,T=v.toneMapping;v.getClearColor(aS),v.toneMapping=oa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(u),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mi(new Rl,new Oc({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const O=this._backgroundBox,M=O.material;let x=!1;const w=e.background;w?w.isColor&&(M.color.copy(w),e.background=null,x=!0):(M.color.copy(aS),x=!0);for(let H=0;H<6;H++){const C=H%3;C===0?(m.up.set(0,p[H],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x+S[H],f.y,f.z)):C===1?(m.up.set(0,0,p[H]),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y+S[H],f.z)):(m.up.set(0,p[H],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y,f.z+S[H]));const N=this._cubeSize;$s(u,C*N,H>2?N:0,N,N),v.setRenderTarget(u),x&&v.render(O,m),v.render(e,m)}v.toneMapping=T,v.autoClear=_,e.background=w}_textureToCubeUV(e,i){const s=this._renderer,u=e.mapping===Jr||e.mapping===oo;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=lS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oS());const f=u?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=e;const m=this._cubeSize;$s(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,hl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const u=this._lodMeshes.length;for(let f=1;f<u;f++)this._applyGGXFilter(e,f-1,f);i.autoClear=s}_applyGGXFilter(e,i,s){const u=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-S*S),_=p*1.25,T=v*_,{_lodMax:R}=this,O=this._sizeLods[s],M=3*O*(s>R-eo?s-R+eo:0),x=4*(this._cubeSize-O);m.envMap.value=e.texture,m.roughness.value=T,m.mipInt.value=R-i,$s(f,M,x,3*O,2*O),u.setRenderTarget(f),u.render(h,hl),m.envMap.value=f.texture,m.roughness.value=0,m.mipInt.value=R-s,$s(e,M,x,3*O,2*O),u.setRenderTarget(e),u.render(h,hl)}_blur(e,i,s,u){const f=this._pingPongRenderTarget,d=Math.min(u,Math.PI)/Math.SQRT2;this._blurPass(e,f,i,s,d),this._blurPass(f,e,s,s,d)}_blurPass(e,i,s,u,f){const d=this._renderer,h=this._blurMaterial,m=this._lodMeshes[u];m.material=h;const p=h.uniforms;p.envMap.value=e.texture,p.sigma.value=f,p.mipInt.value=this._lodMax-s;const S=this._sizeLods[u],v=3*S*(u>this._lodMax-eo?u-this._lodMax+eo:0),_=4*(this._cubeSize-S);$s(i,v,_,3*S,2*S),d.setRenderTarget(i),d.render(m,hl)}}function XA(o){const e=[],i=[];let s=o;const u=o-eo+1+FA;for(let f=0;f<u;f++){const d=Math.pow(2,s);e.push(d);const h=1/(d-2),m=-h,p=1+h,S=[m,m,p,m,p,p,m,m,p,p,m,p],v=6,_=6,T=3,R=new Float32Array(T*_*v),O=new Float32Array(T*_*v);for(let x=0;x<v;x++){const w=x%3*2/3-1,H=x>2?0:-1,C=[w,H,0,w+2/3,H,0,w+2/3,H+1,0,w,H,0,w+2/3,H+1,0,w,H+1,0];R.set(C,T*_*x);for(let N=0;N<_;N++){const D=S[N*2]*2-1,I=S[N*2+1]*2-1;x===0?Yr.set(1,I,D):x===1?Yr.set(-D,1,-I):x===2?Yr.set(-D,I,1):x===3?Yr.set(-1,I,-D):x===4?Yr.set(-D,-1,I):Yr.set(D,I,-1),Yr.toArray(O,(x*_+N)*T)}}const M=new Gi;M.setAttribute("position",new Pa(R,T)),M.setAttribute("outputDirection",new Pa(O,T)),i.push(new mi(M,null)),s>eo&&s--}return{lodMeshes:i,sizeLods:e}}function sS(o,e,i){const s=new Hi(o,e,i);return s.texture.mapping=Lc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function $s(o,e,i,s,u){o.viewport.set(e,i,s,u),o.scissor.set(e,i,s,u)}function kA(o,e,i){return new ca({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:GA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function WA(o,e,i){return new ca({name:"SphericalGaussianBlur",defines:{SAMPLES:HA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function oS(){return new ca({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function lS(){return new ca({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Cx extends Hi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},u=[s,s,s,s,s,s];this.texture=new _x(u),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new Rl(5,5,5),f=new ca({name:"CubemapFromEquirect",uniforms:lo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:La});f.uniforms.tEquirect.value=i;const d=new mi(u,f),h=i.minFilter;return i.minFilter===Zr&&(i.minFilter=zn),new KT(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,u=!0){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,u);e.setRenderTarget(f)}}function qA(o){let e=new WeakMap,i=new WeakMap,s=null;function u(_,T=!1){return _==null?null:T?d(_):f(_)}function f(_){if(_&&_.isTexture){const T=_.mapping;if(T===gh||T===_h)if(e.has(_)){const R=e.get(_).texture;return h(R,_.mapping)}else{const R=_.image;if(R&&R.height>0){const O=new Cx(R.height);return O.fromEquirectangularTexture(o,_),e.set(_,O),_.addEventListener("dispose",p),h(O.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture){const T=_.mapping,R=T===gh||T===_h,O=T===Jr||T===oo;if(R||O){let M=i.get(_);const x=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==x)return s===null&&(s=new rS(o)),M=R?s.fromEquirectangular(_,M):s.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),M.texture;if(M!==void 0)return M.texture;{const w=_.image;return R&&w&&w.height>0||O&&w&&m(w)?(s===null&&(s=new rS(o)),M=R?s.fromEquirectangular(_):s.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),_.addEventListener("dispose",S),M.texture):null}}}return _}function h(_,T){return T===gh?_.mapping=Jr:T===_h&&(_.mapping=oo),_}function m(_){let T=0;const R=6;for(let O=0;O<R;O++)_[O]!==void 0&&T++;return T===R}function p(_){const T=_.target;T.removeEventListener("dispose",p);const R=e.get(T);R!==void 0&&(e.delete(T),R.dispose())}function S(_){const T=_.target;T.removeEventListener("dispose",S);const R=i.get(T);R!==void 0&&(i.delete(T),R.dispose())}function v(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:u,dispose:v}}function YA(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const u=o.getExtension(s);return e[s]=u,u}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const u=i(s);return u===null&&no("WebGLRenderer: "+s+" extension not supported."),u}}}function ZA(o,e,i,s){const u={},f=new WeakMap;function d(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const R in _.attributes)e.remove(_.attributes[R]);_.removeEventListener("dispose",d),delete u[_.id];const T=f.get(_);T&&(e.remove(T),f.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(v,_){return u[_.id]===!0||(_.addEventListener("dispose",d),u[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const T in _)e.update(_[T],o.ARRAY_BUFFER)}function p(v){const _=[],T=v.index,R=v.attributes.position;let O=0;if(R===void 0)return;if(T!==null){const w=T.array;O=T.version;for(let H=0,C=w.length;H<C;H+=3){const N=w[H+0],D=w[H+1],I=w[H+2];_.push(N,D,D,I,I,N)}}else{const w=R.array;O=R.version;for(let H=0,C=w.length/3-1;H<C;H+=3){const N=H+0,D=H+1,I=H+2;_.push(N,D,D,I,I,N)}}const M=new(R.count>=65535?gx:mx)(_,1);M.version=O;const x=f.get(v);x&&e.remove(x),f.set(v,M)}function S(v){const _=f.get(v);if(_){const T=v.index;T!==null&&_.version<T.version&&p(v)}else p(v);return f.get(v)}return{get:h,update:m,getWireframeAttribute:S}}function KA(o,e,i){let s;function u(v){s=v}let f,d;function h(v){f=v.type,d=v.bytesPerElement}function m(v,_){o.drawElements(s,_,f,v*d),i.update(_,s,1)}function p(v,_,T){T!==0&&(o.drawElementsInstanced(s,_,f,v*d,T),i.update(_,s,T))}function S(v,_,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,f,v,0,T);let O=0;for(let M=0;M<T;M++)O+=_[M];i.update(O,s,1)}this.setMode=u,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=S}function QA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:Be("WebGLInfo: Unknown draw mode:",d);break}}function u(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:u,update:s}}function JA(o,e,i){const s=new WeakMap,u=new sn;function f(d,h,m){const p=d.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=S!==void 0?S.length:0;let _=s.get(h);if(_===void 0||_.count!==v){let U=function(){E.dispose(),s.delete(h),h.removeEventListener("dispose",U)};var T=U;_!==void 0&&_.texture.dispose();const R=h.morphAttributes.position!==void 0,O=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],H=h.morphAttributes.color||[];let C=0;R===!0&&(C=1),O===!0&&(C=2),M===!0&&(C=3);let N=h.attributes.position.count*C,D=1;N>e.maxTextureSize&&(D=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const I=new Float32Array(N*D*4*v),E=new fx(I,N,D,v);E.type=ra,E.needsUpdate=!0;const L=C*4;for(let z=0;z<v;z++){const G=x[z],Z=w[z],V=H[z],J=N*D*4*z;for(let k=0;k<G.count;k++){const q=k*L;R===!0&&(u.fromBufferAttribute(G,k),I[J+q+0]=u.x,I[J+q+1]=u.y,I[J+q+2]=u.z,I[J+q+3]=0),O===!0&&(u.fromBufferAttribute(Z,k),I[J+q+4]=u.x,I[J+q+5]=u.y,I[J+q+6]=u.z,I[J+q+7]=0),M===!0&&(u.fromBufferAttribute(V,k),I[J+q+8]=u.x,I[J+q+9]=u.y,I[J+q+10]=u.z,I[J+q+11]=V.itemSize===4?u.w:1)}}_={count:v,texture:E,size:new be(N,D)},s.set(h,_),h.addEventListener("dispose",U)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let M=0;M<p.length;M++)R+=p[M];const O=h.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",O),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:f}}function jA(o,e,i,s,u){let f=new WeakMap;function d(p){const S=u.render.frame,v=p.geometry,_=e.get(p,v);if(f.get(_)!==S&&(e.update(_),f.set(_,S)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),f.get(p)!==S&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),f.set(p,S))),p.isSkinnedMesh){const T=p.skeleton;f.get(T)!==S&&(T.update(),f.set(T,S))}return _}function h(){f=new WeakMap}function m(p){const S=p.target;S.removeEventListener("dispose",m),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:h}}const $A={[KS]:"LINEAR_TONE_MAPPING",[QS]:"REINHARD_TONE_MAPPING",[JS]:"CINEON_TONE_MAPPING",[jS]:"ACES_FILMIC_TONE_MAPPING",[tx]:"AGX_TONE_MAPPING",[ex]:"NEUTRAL_TONE_MAPPING",[$S]:"CUSTOM_TONE_MAPPING"};function tR(o,e,i,s,u,f){const d=new Hi(e,i,{type:o,depthBuffer:u,stencilBuffer:f,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,m=null;const p=new Gi;p.setAttribute("position",new $n([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new $n([0,2,0,0,2,0],2));const S=new kT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new mi(p,S),_=new cm(-1,1,1,-1,0,1);let T=null,R=null,O=!1,M,x=null,w=[],H=!1;this.setSize=function(C,N){d.setSize(C,N),h!==null&&h.setSize(C,N),m!==null&&m.setSize(C,N);for(let D=0;D<w.length;D++){const I=w[D];I.setSize&&I.setSize(C,N)}},this.setEffects=function(C){w=C,H=w.length>0&&w[0].isRenderPass===!0;const N=d.width,D=d.height;w.length>0&&h===null&&(h=new Hi(N,D,{type:ua,depthBuffer:!1,stencilBuffer:!1}),m=new Hi(N,D,{type:ua,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<w.length;I++){const E=w[I];E.setSize&&E.setSize(N,D)}},this.begin=function(C,N){if(O||C.toneMapping===oa&&w.length===0)return!1;if(x=N,N!==null){const D=N.width,I=N.height;(d.width!==D||d.height!==I)&&this.setSize(D,I)}return H===!1&&C.setRenderTarget(d),M=C.toneMapping,C.toneMapping=oa,!0},this.hasRenderPass=function(){return H},this.end=function(C,N){C.toneMapping=M,O=!0;let D=d,I=h;for(let E=0;E<w.length;E++){const L=w[E];L.enabled!==!1&&(L.render(C,I,D,N),L.needsSwap!==!1&&(D=I,I=I===h?m:h))}if(T!==C.outputColorSpace||R!==C.toneMapping){T=C.outputColorSpace,R=C.toneMapping,S.defines={},Ue.getTransfer(T)===Ze&&(S.defines.SRGB_TRANSFER="");const E=$A[R];E&&(S.defines[E]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(x),C.render(v,_),x=null,O=!1},this.isCompositing=function(){return O},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),m!==null&&m.dispose(),p.dispose(),S.dispose()}}const wx=new Bn,Bp=new El(1,1),Dx=new fx,Nx=new MT,Ux=new _x,uS=[],cS=[],fS=new Float32Array(16),dS=new Float32Array(9),hS=new Float32Array(4);function co(o,e,i){const s=o[0];if(s<=0||s>0)return o;const u=e*i;let f=uS[u];if(f===void 0&&(f=new Float32Array(u),uS[u]=f),e!==0){s.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(f,h)}return f}function xn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Mn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Ic(o,e){let i=cS[e];i===void 0&&(i=new Int32Array(e),cS[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function eR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function nR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2fv(this.addr,e),Mn(i,e)}}function iR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;o.uniform3fv(this.addr,e),Mn(i,e)}}function aR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4fv(this.addr,e),Mn(i,e)}}function rR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(xn(i,s))return;hS.set(s),o.uniformMatrix2fv(this.addr,!1,hS),Mn(i,s)}}function sR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(xn(i,s))return;dS.set(s),o.uniformMatrix3fv(this.addr,!1,dS),Mn(i,s)}}function oR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(xn(i,s))return;fS.set(s),o.uniformMatrix4fv(this.addr,!1,fS),Mn(i,s)}}function lR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function uR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2iv(this.addr,e),Mn(i,e)}}function cR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3iv(this.addr,e),Mn(i,e)}}function fR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4iv(this.addr,e),Mn(i,e)}}function dR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function hR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2uiv(this.addr,e),Mn(i,e)}}function pR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3uiv(this.addr,e),Mn(i,e)}}function mR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4uiv(this.addr,e),Mn(i,e)}}function gR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(Bp.compareFunction=i.isReversedDepthBuffer()?im:nm,f=Bp):f=wx,i.setTexture2D(e||f,u)}function _R(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture3D(e||Nx,u)}function vR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTextureCube(e||Ux,u)}function SR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture2DArray(e||Dx,u)}function xR(o){switch(o){case 5126:return eR;case 35664:return nR;case 35665:return iR;case 35666:return aR;case 35674:return rR;case 35675:return sR;case 35676:return oR;case 5124:case 35670:return lR;case 35667:case 35671:return uR;case 35668:case 35672:return cR;case 35669:case 35673:return fR;case 5125:return dR;case 36294:return hR;case 36295:return pR;case 36296:return mR;case 35678:case 36198:case 36298:case 36306:case 35682:return gR;case 35679:case 36299:case 36307:return _R;case 35680:case 36300:case 36308:case 36293:return vR;case 36289:case 36303:case 36311:case 36292:return SR}}function MR(o,e){o.uniform1fv(this.addr,e)}function yR(o,e){const i=co(e,this.size,2);o.uniform2fv(this.addr,i)}function ER(o,e){const i=co(e,this.size,3);o.uniform3fv(this.addr,i)}function TR(o,e){const i=co(e,this.size,4);o.uniform4fv(this.addr,i)}function bR(o,e){const i=co(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function AR(o,e){const i=co(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function RR(o,e){const i=co(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function CR(o,e){o.uniform1iv(this.addr,e)}function wR(o,e){o.uniform2iv(this.addr,e)}function DR(o,e){o.uniform3iv(this.addr,e)}function NR(o,e){o.uniform4iv(this.addr,e)}function UR(o,e){o.uniform1uiv(this.addr,e)}function LR(o,e){o.uniform2uiv(this.addr,e)}function OR(o,e){o.uniform3uiv(this.addr,e)}function PR(o,e){o.uniform4uiv(this.addr,e)}function IR(o,e,i){const s=this.cache,u=e.length,f=Ic(i,u);xn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=Bp:d=wx;for(let h=0;h!==u;++h)i.setTexture2D(e[h]||d,f[h])}function zR(o,e,i){const s=this.cache,u=e.length,f=Ic(i,u);xn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));for(let d=0;d!==u;++d)i.setTexture3D(e[d]||Nx,f[d])}function BR(o,e,i){const s=this.cache,u=e.length,f=Ic(i,u);xn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));for(let d=0;d!==u;++d)i.setTextureCube(e[d]||Ux,f[d])}function FR(o,e,i){const s=this.cache,u=e.length,f=Ic(i,u);xn(s,f)||(o.uniform1iv(this.addr,f),Mn(s,f));for(let d=0;d!==u;++d)i.setTexture2DArray(e[d]||Dx,f[d])}function HR(o){switch(o){case 5126:return MR;case 35664:return yR;case 35665:return ER;case 35666:return TR;case 35674:return bR;case 35675:return AR;case 35676:return RR;case 5124:case 35670:return CR;case 35667:case 35671:return wR;case 35668:case 35672:return DR;case 35669:case 35673:return NR;case 5125:return UR;case 36294:return LR;case 36295:return OR;case 36296:return PR;case 35678:case 36198:case 36298:case 36306:case 35682:return IR;case 35679:case 36299:case 36307:return zR;case 35680:case 36300:case 36308:case 36293:return BR;case 36289:case 36303:case 36311:case 36292:return FR}}class GR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=xR(i.type)}}class VR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=HR(i.type)}}class XR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const u=this.seq;for(let f=0,d=u.length;f!==d;++f){const h=u[f];h.setValue(e,i[h.id],s)}}}const Yh=/(\w+)(\])?(\[|\.)?/g;function pS(o,e){o.seq.push(e),o.map[e.id]=e}function kR(o,e,i){const s=o.name,u=s.length;for(Yh.lastIndex=0;;){const f=Yh.exec(s),d=Yh.lastIndex;let h=f[1];const m=f[2]==="]",p=f[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===u){pS(i,p===void 0?new GR(h,o,e):new VR(h,o,e));break}else{let v=i.map[h];v===void 0&&(v=new XR(h),pS(i,v)),i=v}}}class bc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),m=e.getUniformLocation(i,h.name);kR(h,m,this)}const u=[],f=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?u.push(d):f.push(d);u.length>0&&(this.seq=u.concat(f))}setValue(e,i,s,u){const f=this.map[i];f!==void 0&&f.setValue(e,s,u)}setOptional(e,i,s){const u=i[s];u!==void 0&&this.setValue(e,s,u)}static upload(e,i,s,u){for(let f=0,d=i.length;f!==d;++f){const h=i[f],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,u)}}static seqWithValue(e,i){const s=[];for(let u=0,f=e.length;u!==f;++u){const d=e[u];d.id in i&&s.push(d)}return s}}function mS(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const WR=37297;let qR=0;function YR(o,e){const i=o.split(`
`),s=[],u=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let d=u;d<f;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const gS=new pe;function ZR(o){Ue._getMatrix(gS,Ue.workingColorSpace,o);const e=`mat3( ${gS.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(o)){case wc:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function _S(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+YR(o.getShaderSource(e),h)}else return f}function KR(o,e){const i=ZR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const QR={[KS]:"Linear",[QS]:"Reinhard",[JS]:"Cineon",[jS]:"ACESFilmic",[tx]:"AgX",[ex]:"Neutral",[$S]:"Custom"};function JR(o,e){const i=QR[e];return i===void 0?(le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const vc=new nt;function jR(){Ue.getLuminanceCoefficients(vc);const o=vc.x.toFixed(4),e=vc.y.toFixed(4),i=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $R(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gl).join(`
`)}function tC(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function eC(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(e,u),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function gl(o){return o!==""}function vS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function SS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fp(o){return o.replace(nC,aC)}const iC=new Map;function aC(o,e){let i=ve[e];if(i===void 0){const s=iC.get(e);if(s!==void 0)i=ve[s],le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fp(i)}const rC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xS(o){return o.replace(rC,sC)}function sC(o,e,i,s){let u="";for(let f=parseInt(e);f<parseInt(i);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function MS(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const oC={[xc]:"SHADOWMAP_TYPE_PCF",[ml]:"SHADOWMAP_TYPE_VSM"};function lC(o){return oC[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uC={[Jr]:"ENVMAP_TYPE_CUBE",[oo]:"ENVMAP_TYPE_CUBE",[Lc]:"ENVMAP_TYPE_CUBE_UV"};function cC(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":uC[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const fC={[oo]:"ENVMAP_MODE_REFRACTION"};function dC(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":fC[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hC={[ZS]:"ENVMAP_BLENDING_MULTIPLY",[jE]:"ENVMAP_BLENDING_MIX",[$E]:"ENVMAP_BLENDING_ADD"};function pC(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":hC[o.combine]||"ENVMAP_BLENDING_NONE"}function mC(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function gC(o,e,i,s){const u=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=lC(i),p=cC(i),S=dC(i),v=pC(i),_=mC(i),T=$R(i),R=tC(f),O=u.createProgram();let M,x,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(gl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(gl).join(`
`),x.length>0&&(x+=`
`)):(M=[MS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),x=[MS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==oa?"#define TONE_MAPPING":"",i.toneMapping!==oa?ve.tonemapping_pars_fragment:"",i.toneMapping!==oa?JR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,KR("linearToOutputTexel",i.outputColorSpace),jR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(gl).join(`
`)),d=Fp(d),d=vS(d,i),d=SS(d,i),h=Fp(h),h=vS(h,i),h=SS(h,i),d=xS(d),h=xS(h),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===Ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const H=w+M+d,C=w+x+h,N=mS(u,u.VERTEX_SHADER,H),D=mS(u,u.FRAGMENT_SHADER,C);u.attachShader(O,N),u.attachShader(O,D),i.index0AttributeName!==void 0?u.bindAttribLocation(O,0,i.index0AttributeName):i.hasPositionAttribute===!0&&u.bindAttribLocation(O,0,"position"),u.linkProgram(O);function I(z){if(o.debug.checkShaderErrors){const G=u.getProgramInfoLog(O)||"",Z=u.getShaderInfoLog(N)||"",V=u.getShaderInfoLog(D)||"",J=G.trim(),k=Z.trim(),q=V.trim();let rt=!0,at=!0;if(u.getProgramParameter(O,u.LINK_STATUS)===!1)if(rt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,O,N,D);else{const ht=_S(u,N,"vertex"),Mt=_S(u,D,"fragment");Be("WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(O,u.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+J+`
`+ht+`
`+Mt)}else J!==""?le("WebGLProgram: Program Info Log:",J):(k===""||q==="")&&(at=!1);at&&(z.diagnostics={runnable:rt,programLog:J,vertexShader:{log:k,prefix:M},fragmentShader:{log:q,prefix:x}})}u.deleteShader(N),u.deleteShader(D),E=new bc(u,O),L=eC(u,O)}let E;this.getUniforms=function(){return E===void 0&&I(this),E};let L;this.getAttributes=function(){return L===void 0&&I(this),L};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=u.getProgramParameter(O,WR)),U},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(O),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=qR++,this.cacheKey=e,this.usedTimes=1,this.program=O,this.vertexShader=N,this.fragmentShader=D,this}let _C=0;class vC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const u=this._getShaderCacheForMaterial(e);return u.has(i)===!1&&(u.add(i),i.usedTimes++),u.has(s)===!1&&(u.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new SC(e),i.set(e,s)),s}}class SC{constructor(e){this.id=_C++,this.code=e,this.usedTimes=0}}function xC(o){return o===jr||o===Ac||o===Rc}function MC(o,e,i,s,u,f){const d=new dx,h=new vC,m=new Set,p=[],S=new Map,v=s.logarithmicDepthBuffer;let _=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(E){return m.add(E),E===0?"uv":`uv${E}`}function O(E,L,U,z,G,Z){const V=z.fog,J=G.geometry,k=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,q=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,rt=e.get(E.envMap||k,q),at=rt&&rt.mapping===Lc?rt.image.height:null,ht=T[E.type];E.precision!==null&&(_=s.getMaxPrecision(E.precision),_!==E.precision&&le("WebGLProgram.getParameters:",E.precision,"not supported, using",_,"instead."));const Mt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Wt=Mt!==void 0?Mt.length:0;let It=0;J.morphAttributes.position!==void 0&&(It=1),J.morphAttributes.normal!==void 0&&(It=2),J.morphAttributes.color!==void 0&&(It=3);let F,pt,bt,Y;if(ht){const De=aa[ht];F=De.vertexShader,pt=De.fragmentShader}else{F=E.vertexShader,pt=E.fragmentShader;const De=h.getVertexShaderStage(E),de=h.getFragmentShaderStage(E);h.update(E,De,de),bt=De.id,Y=de.id}const ct=o.getRenderTarget(),Et=o.state.buffers.depth.getReversed(),Ct=G.isInstancedMesh===!0,mt=G.isBatchedMesh===!0,At=!!E.map,Ae=!!E.matcap,ue=!!rt,me=!!E.aoMap,fe=!!E.lightMap,$t=!!E.bumpMap&&E.wireframe===!1,ne=!!E.normalMap,Fe=!!E.displacementMap,on=!!E.emissiveMap,Ie=!!E.metalnessMap,Ve=!!E.roughnessMap,K=E.anisotropy>0,an=E.clearcoat>0,ze=E.dispersion>0,P=E.retroreflectivity>0,y=E.iridescence>0,et=E.sheen>0,ut=E.transmission>0,gt=K&&!!E.anisotropyMap,Rt=an&&!!E.clearcoatMap,Nt=an&&!!E.clearcoatNormalMap,_t=an&&!!E.clearcoatRoughnessMap,yt=y&&!!E.iridescenceMap,Dt=y&&!!E.iridescenceThicknessMap,te=et&&!!E.sheenColorMap,zt=et&&!!E.sheenRoughnessMap,Pt=!!E.specularMap,Xt=!!E.specularColorMap,ie=!!E.specularIntensityMap,ce=ut&&!!E.transmissionMap,Q=ut&&!!E.thicknessMap,wt=!!E.gradientMap,xt=!!E.alphaMap,Ut=E.alphaTest>0,Vt=!!E.alphaHash,Tt=!!E.extensions;let jt=oa;E.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(jt=o.toneMapping);const Gt={shaderID:ht,shaderType:E.type,shaderName:E.name,vertexShader:F,fragmentShader:pt,defines:E.defines,customVertexShaderID:bt,customFragmentShaderID:Y,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:_,batching:mt,batchingColor:mt&&G._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&G.instanceColor!==null,instancingMorph:Ct&&G.morphTexture!==null,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Ue.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:At,matcap:Ae,envMap:ue,envMapMode:ue&&rt.mapping,envMapCubeUVHeight:at,aoMap:me,lightMap:fe,bumpMap:$t,normalMap:ne,displacementMap:Fe,emissiveMap:on,normalMapObjectSpace:ne&&E.normalMapType===nT,normalMapTangentSpace:ne&&E.normalMapType===Ip,packedNormalMap:ne&&E.normalMapType===Ip&&xC(E.normalMap.format),metalnessMap:Ie,roughnessMap:Ve,anisotropy:K,anisotropyMap:gt,clearcoat:an,clearcoatMap:Rt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:_t,dispersion:ze,retroreflection:P,iridescence:y,iridescenceMap:yt,iridescenceThicknessMap:Dt,sheen:et,sheenColorMap:te,sheenRoughnessMap:zt,specularMap:Pt,specularColorMap:Xt,specularIntensityMap:ie,transmission:ut,transmissionMap:ce,thicknessMap:Q,gradientMap:wt,opaque:E.transparent===!1&&E.blending===_l&&E.alphaToCoverage===!1,alphaMap:xt,alphaTest:Ut,alphaHash:Vt,combine:E.combine,mapUv:At&&R(E.map.channel),aoMapUv:me&&R(E.aoMap.channel),lightMapUv:fe&&R(E.lightMap.channel),bumpMapUv:$t&&R(E.bumpMap.channel),normalMapUv:ne&&R(E.normalMap.channel),displacementMapUv:Fe&&R(E.displacementMap.channel),emissiveMapUv:on&&R(E.emissiveMap.channel),metalnessMapUv:Ie&&R(E.metalnessMap.channel),roughnessMapUv:Ve&&R(E.roughnessMap.channel),anisotropyMapUv:gt&&R(E.anisotropyMap.channel),clearcoatMapUv:Rt&&R(E.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&R(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&R(E.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&R(E.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&R(E.iridescenceThicknessMap.channel),sheenColorMapUv:te&&R(E.sheenColorMap.channel),sheenRoughnessMapUv:zt&&R(E.sheenRoughnessMap.channel),specularMapUv:Pt&&R(E.specularMap.channel),specularColorMapUv:Xt&&R(E.specularColorMap.channel),specularIntensityMapUv:ie&&R(E.specularIntensityMap.channel),transmissionMapUv:ce&&R(E.transmissionMap.channel),thicknessMapUv:Q&&R(E.thicknessMap.channel),alphaMapUv:xt&&R(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ne||K),vertexNormals:!!J.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!J.attributes.uv&&(At||xt),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||J.attributes.normal===void 0&&ne===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Et,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Wt,morphTextureStride:It,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&U.length>0,shadowMapType:o.shadowMap.type,toneMapping:jt,decodeVideoTexture:At&&E.map.isVideoTexture===!0&&Ue.getTransfer(E.map.colorSpace)===Ze,decodeVideoTextureEmissive:on&&E.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(E.emissiveMap.colorSpace)===Ze,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Na,flipSided:E.side===jn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Tt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&E.extensions.multiDraw===!0||mt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Gt.vertexUv1s=m.has(1),Gt.vertexUv2s=m.has(2),Gt.vertexUv3s=m.has(3),m.clear(),Gt}function M(E){const L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)L.push(U),L.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(x(L,E),w(L,E),L.push(o.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function x(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapCubeUVHeight),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.morphAttributeCount),E.push(L.numSunLights),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numSunLightShadows),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function w(E,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.retroreflection&&d.enable(24),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),L.packedNormalMap&&d.enable(22),L.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),L.numLightProbeGrids>0&&d.enable(22),L.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function H(E){const L=T[E.type];let U;if(L){const z=aa[L];U=GT.clone(z.uniforms)}else U=E.uniforms;return U}function C(E,L){let U=S.get(L);return U!==void 0?++U.usedTimes:(U=new gC(o,L,E,u),p.push(U),S.set(L,U)),U}function N(E){if(--E.usedTimes===0){const L=p.indexOf(E);p[L]=p[p.length-1],p.pop(),S.delete(E.cacheKey),E.destroy()}}function D(E){h.remove(E)}function I(){h.dispose()}return{getParameters:O,getProgramCacheKey:M,getUniforms:H,acquireProgram:C,releaseProgram:N,releaseShaderCache:D,programs:p,dispose:I}}function yC(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function u(d,h,m){o.get(d)[h]=m}function f(){o=new WeakMap}return{has:e,get:i,remove:s,update:u,dispose:f}}function EC(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function yS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function ES(){const o=[];let e=0;const i=[],s=[],u=[];function f(){e=0,i.length=0,s.length=0,u.length=0}function d(_){let T=0;return _.isInstancedMesh&&(T+=2),_.isSkinnedMesh&&(T+=1),T}function h(_,T,R,O,M,x){let w=o[e];return w===void 0?(w={id:_.id,object:_,geometry:T,material:R,materialVariant:d(_),groupOrder:O,renderOrder:_.renderOrder,z:M,group:x},o[e]=w):(w.id=_.id,w.object=_,w.geometry=T,w.material=R,w.materialVariant=d(_),w.groupOrder=O,w.renderOrder=_.renderOrder,w.z=M,w.group=x),e++,w}function m(_,T,R,O,M,x,w){w.reversedDepth===!0&&(M=-M);const H=h(_,T,R,O,M,x);R.transmission>0?s.push(H):R.transparent===!0?u.push(H):i.push(H)}function p(_,T,R,O,M,x){const w=h(_,T,R,O,M,x);R.transmission>0?s.unshift(w):R.transparent===!0?u.unshift(w):i.unshift(w)}function S(_,T){i.length>1&&i.sort(_||EC),s.length>1&&s.sort(T||yS),u.length>1&&u.sort(T||yS)}function v(){for(let _=e,T=o.length;_<T;_++){const R=o[_];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:i,transmissive:s,transparent:u,init:f,push:m,unshift:p,finish:v,sort:S}}function TC(){let o=new WeakMap;function e(s,u){const f=o.get(s);let d;return f===void 0?(d=new ES,o.set(s,[d])):u>=f.length?(d=new ES,f.push(d)):d=f[u],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function bC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new nt,color:new Pe};break;case"SpotLight":i={position:new nt,direction:new nt,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":i={color:new Pe,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return o[e.id]=i,i}}}function AC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let RC=0;function CC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function wC(o){const e=new bC,i=AC(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new nt);const u=new nt,f=new nn,d=new nn;function h(p){let S=0,v=0,_=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let T=0,R=0,O=0,M=0,x=0,w=0,H=0,C=0,N=0,D=0,I=0,E=0,L=0,U=0;p.sort(CC);for(let G=0,Z=p.length;G<Z;G++){const V=p[G],J=V.color,k=V.intensity,q=V.distance;let rt=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===jr?rt=V.shadow.map.texture:rt=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)S+=J.r*k,v+=J.g*k,_+=J.b*k;else if(V.isLightProbe){for(let at=0;at<9;at++)s.probe[at].addScaledVector(V.sh.coefficients[at],k);U++}else if(V.isSunLight){const at=e.get(V);if(at.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ht=V.shadow,Mt=i.get(V);Mt.shadowIntensity=ht.intensity,Mt.shadowBias=ht.bias,Mt.shadowNormalBias=ht.normalBias,Mt.shadowRadius=ht.radius,Mt.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),s.sunShadow[R]=Mt,s.sunShadowMap[R]=rt;const Wt=ht.getViewportCount();for(let It=0;It<Wt;It++)s.sunShadowMatrix[O+It]=ht.getMatrix(It),s.sunShadowCascade[O+It]=ht._cascadeData[It];O+=Wt,R++}s.sun[T]=at,T++}else if(V.isDirectionalLight){const at=e.get(V);if(at.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ht=V.shadow,Mt=i.get(V);Mt.shadowIntensity=ht.intensity,Mt.shadowBias=ht.bias,Mt.shadowNormalBias=ht.normalBias,Mt.shadowRadius=ht.radius,Mt.shadowMapSize=ht.mapSize,s.directionalShadow[M]=Mt,s.directionalShadowMap[M]=rt,s.directionalShadowMatrix[M]=V.shadow.matrix,N++}s.directional[M]=at,M++}else if(V.isSpotLight){const at=e.get(V);at.position.setFromMatrixPosition(V.matrixWorld),at.color.copy(J).multiplyScalar(k),at.distance=q,at.coneCos=Math.cos(V.angle),at.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),at.decay=V.decay,s.spot[w]=at;const ht=V.shadow;if(V.map&&(s.spotLightMap[E]=V.map,E++,ht.updateMatrices(V),V.castShadow&&L++),s.spotLightMatrix[w]=ht.matrix,V.castShadow){const Mt=i.get(V);Mt.shadowIntensity=ht.intensity,Mt.shadowBias=ht.bias,Mt.shadowNormalBias=ht.normalBias,Mt.shadowRadius=ht.radius,Mt.shadowMapSize=ht.mapSize,s.spotShadow[w]=Mt,s.spotShadowMap[w]=rt,I++}w++}else if(V.isRectAreaLight){const at=e.get(V);at.color.copy(J).multiplyScalar(k),at.halfWidth.set(V.width*.5,0,0),at.halfHeight.set(0,V.height*.5,0),s.rectArea[H]=at,H++}else if(V.isPointLight){const at=e.get(V);if(at.color.copy(V.color).multiplyScalar(V.intensity),at.distance=V.distance,at.decay=V.decay,V.castShadow){const ht=V.shadow,Mt=i.get(V);Mt.shadowIntensity=ht.intensity,Mt.shadowBias=ht.bias,Mt.shadowNormalBias=ht.normalBias,Mt.shadowRadius=ht.radius,Mt.shadowMapSize=ht.mapSize,Mt.shadowCameraNear=ht.camera.near,Mt.shadowCameraFar=ht.camera.far,s.pointShadow[x]=Mt,s.pointShadowMap[x]=rt,s.pointShadowMatrix[x]=V.shadow.matrix,D++}s.point[x]=at,x++}else if(V.isHemisphereLight){const at=e.get(V);at.skyColor.copy(V.color).multiplyScalar(k),at.groundColor.copy(V.groundColor).multiplyScalar(k),s.hemi[C]=at,C++}}H>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=v,s.ambient[2]=_;const z=s.hash;(z.sunLength!==T||z.directionalLength!==M||z.pointLength!==x||z.spotLength!==w||z.rectAreaLength!==H||z.hemiLength!==C||z.numSunShadows!==R||z.numDirectionalShadows!==N||z.numPointShadows!==D||z.numSpotShadows!==I||z.numSpotMaps!==E||z.numLightProbes!==U)&&(s.sun.length=T,s.directional.length=M,s.spot.length=w,s.rectArea.length=H,s.point.length=x,s.hemi.length=C,s.sunShadow.length=R,s.sunShadowMap.length=R,s.sunShadowMatrix.length=O,s.sunShadowCascade.length=O,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.directionalShadowMatrix.length=N,s.pointShadow.length=D,s.pointShadowMap.length=D,s.pointShadowMatrix.length=D,s.spotShadow.length=I,s.spotShadowMap.length=I,s.spotLightMatrix.length=I+E-L,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=U,z.sunLength=T,z.directionalLength=M,z.pointLength=x,z.spotLength=w,z.rectAreaLength=H,z.hemiLength=C,z.numSunShadows=R,z.numDirectionalShadows=N,z.numPointShadows=D,z.numSpotShadows=I,z.numSpotMaps=E,z.numLightProbes=U,s.version=RC++)}function m(p,S){let v=0,_=0,T=0,R=0,O=0,M=0;const x=S.matrixWorldInverse;for(let w=0,H=p.length;w<H;w++){const C=p[w];if(C.isSunLight){const N=s.sun[v];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(x),v++}else if(C.isDirectionalLight){const N=s.directional[_];N.direction.setFromMatrixPosition(C.matrixWorld),u.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(u),N.direction.transformDirection(x),_++}else if(C.isSpotLight){const N=s.spot[R];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(x),N.direction.setFromMatrixPosition(C.matrixWorld),u.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(u),N.direction.transformDirection(x),R++}else if(C.isRectAreaLight){const N=s.rectArea[O];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(x),d.identity(),f.copy(C.matrixWorld),f.premultiply(x),d.extractRotation(f),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),O++}else if(C.isPointLight){const N=s.point[T];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(x),T++}else if(C.isHemisphereLight){const N=s.hemi[M];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(x),M++}}}return{setup:h,setupView:m,state:s}}function TS(o){const e=new wC(o),i=[],s=[],u=[];function f(_){v.camera=_,i.length=0,s.length=0,u.length=0}function d(_){i.push(_)}function h(_){s.push(_)}function m(_){u.push(_)}function p(){e.setup(i)}function S(_){e.setupView(i,_)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:u,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:v,setupLights:p,setupLightsView:S,pushLight:d,pushShadow:h,pushLightProbeGrid:m}}function DC(o){let e=new WeakMap;function i(u,f=0){const d=e.get(u);let h;return d===void 0?(h=new TS(o),e.set(u,[h])):f>=d.length?(h=new TS(o),d.push(h)):h=d[f],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const NC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UC=`uniform sampler2D shadow_pass;
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
}`,LC=[new nt(1,0,0),new nt(-1,0,0),new nt(0,1,0),new nt(0,-1,0),new nt(0,0,1),new nt(0,0,-1)],OC=[new nt(0,-1,0),new nt(0,-1,0),new nt(0,0,1),new nt(0,0,-1),new nt(0,-1,0),new nt(0,-1,0)],bS=new nn,pl=new nt,Zh=new nt;function PC(o,e,i){let s=new sm;const u=new be,f=new be,d=new sn,h=new WT,m=new qT,p={},S=i.maxTextureSize,v={[Ia]:jn,[jn]:Ia,[Na]:Na},_=new ca({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:NC,fragmentShader:UC}),T=_.clone();T.defines.HORIZONTAL_PASS=1;const R=new Gi;R.setAttribute("position",new Pa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const O=new mi(R,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xc;let x=this.type;this.render=function(D,I,E){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||D.length===0)return;this.type===LE&&(le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xc);const L=o.getRenderTarget(),U=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),G=o.state;G.setBlending(La),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Z=x!==this.type;Z&&I.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(J=>J.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,J=D.length;V<J;V++){const k=D[V],q=k.shadow;if(q===void 0){le("WebGLShadowMap:",k,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;u.copy(q.mapSize);const rt=q.getFrameExtents();u.multiply(rt),f.copy(q.mapSize),(u.x>S||u.y>S)&&(u.x>S&&(f.x=Math.floor(S/rt.x),u.x=f.x*rt.x,q.mapSize.x=f.x),u.y>S&&(f.y=Math.floor(S/rt.y),u.y=f.y*rt.y,q.mapSize.y=f.y));const at=o.state.buffers.depth.getReversed();if(q.camera._reversedDepth=at,q.map===null||Z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===ml){if(k.isPointLight){le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Hi(u.x,u.y,{format:jr,type:ua,minFilter:zn,magFilter:zn,generateMipmaps:!1}),q.map.texture.name=k.name+".shadowMap",q.map.depthTexture=new El(u.x,u.y,ra),q.map.depthTexture.name=k.name+".shadowMapDepth",q.map.depthTexture.format=za,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Un,q.map.depthTexture.magFilter=Un}else k.isPointLight?(q.map=new Cx(u.x),q.map.depthTexture=new FT(u.x,la)):(q.map=new Hi(u.x,u.y),q.map.depthTexture=new El(u.x,u.y,la)),q.map.depthTexture.name=k.name+".shadowMap",q.map.depthTexture.format=za,this.type===xc?(q.map.depthTexture.compareFunction=at?im:nm,q.map.depthTexture.minFilter=zn,q.map.depthTexture.magFilter=zn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Un,q.map.depthTexture.magFilter=Un);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==u.x||q.map.height!==u.y)&&q.map.setSize(u.x,u.y);const ht=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();k.isPointLight!==!0&&q.updateMatrices(k,E);for(let Mt=0;Mt<ht;Mt++){const Wt=q.getCamera(Mt);if(k.isPointLight){const It=q.camera,F=q.matrix,pt=k.distance||It.far;pt!==It.far&&(It.far=pt,It.updateProjectionMatrix()),pl.setFromMatrixPosition(k.matrixWorld),It.position.copy(pl),Zh.copy(It.position),Zh.add(LC[Mt]),It.up.copy(OC[Mt]),It.lookAt(Zh),It.updateMatrixWorld(),F.makeTranslation(-pl.x,-pl.y,-pl.z),bS.multiplyMatrices(It.projectionMatrix,It.matrixWorldInverse),q._frustum.setFromProjectionMatrix(bS,It.coordinateSystem,It.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)o.setRenderTarget(q.map,Mt),o.clear();else{Mt===0&&(o.setRenderTarget(q.map),o.clear());const It=q.getViewport(Mt);d.set(f.x*It.x,f.y*It.y,f.x*It.z,f.y*It.w),G.viewport(d)}s=q.getFrustum(Mt),C(I,E,Wt,k,this.type)}q.isPointLightShadow!==!0&&this.type===ml&&w(q,E),q.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(L,U,z)};function w(D,I){const E=e.update(O);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,T.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,T.needsUpdate=!0),D.mapPass===null?D.mapPass=new Hi(u.x,u.y,{format:jr,type:ua}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),_.uniforms.shadow_pass.value=D.map.depthTexture,_.uniforms.resolution.value.set(D.map.width,D.map.height),_.uniforms.radius.value=D.radius,o.setRenderTarget(D.mapPass),o.clear(),o.renderBufferDirect(I,null,E,_,O,null),T.uniforms.shadow_pass.value=D.mapPass.texture,T.uniforms.resolution.value.set(D.map.width,D.map.height),T.uniforms.radius.value=D.radius,o.setRenderTarget(D.map),o.clear(),o.renderBufferDirect(I,null,E,T,O,null)}function H(D,I,E,L){let U=null;const z=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(z!==void 0)U=z;else if(U=E.isPointLight===!0?m:h,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const G=U.uuid,Z=I.uuid;let V=p[G];V===void 0&&(V={},p[G]=V);let J=V[Z];J===void 0&&(J=U.clone(),V[Z]=J,I.addEventListener("dispose",N)),U=J}if(U.visible=I.visible,U.wireframe=I.wireframe,L===ml?U.side=I.shadowSide!==null?I.shadowSide:I.side:U.side=I.shadowSide!==null?I.shadowSide:v[I.side],U.alphaMap=I.alphaMap,U.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,U.map=I.map,U.clipShadows=I.clipShadows,U.clippingPlanes=I.clippingPlanes,U.clipIntersection=I.clipIntersection,U.displacementMap=I.displacementMap,U.displacementScale=I.displacementScale,U.displacementBias=I.displacementBias,U.wireframeLinewidth=I.wireframeLinewidth,U.linewidth=I.linewidth,E.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const G=o.properties.get(U);G.light=E}return U}function C(D,I,E,L,U){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&U===ml)&&(!D.frustumCulled||D.intersectsFrustum(s))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const Z=e.update(D),V=D.material;if(Array.isArray(V)){const J=Z.groups;for(let k=0,q=J.length;k<q;k++){const rt=J[k],at=V[rt.materialIndex];if(at&&at.visible){const ht=H(D,at,L,U);D.onBeforeShadow(o,D,I,E,Z,ht,rt),o.renderBufferDirect(E,null,Z,ht,D,rt),D.onAfterShadow(o,D,I,E,Z,ht,rt)}}}else if(V.visible){const J=H(D,V,L,U);D.onBeforeShadow(o,D,I,E,Z,J,null),o.renderBufferDirect(E,null,Z,J,D,null),D.onAfterShadow(o,D,I,E,Z,J,null)}}const G=D.children;for(let Z=0,V=G.length;Z<V;Z++)C(G[Z],I,E,L,U)}function N(D){D.target.removeEventListener("dispose",N);for(const E in p){const L=p[E],U=D.target.uuid;U in L&&(L[U].dispose(),delete L[U])}}}function IC(o,e){function i(){let Q=!1;const wt=new sn;let xt=null;const Ut=new sn(0,0,0,0);return{setMask:function(Vt){xt!==Vt&&!Q&&(o.colorMask(Vt,Vt,Vt,Vt),xt=Vt)},setLocked:function(Vt){Q=Vt},setClear:function(Vt,Tt,jt,Gt,De){De===!0&&(Vt*=Gt,Tt*=Gt,jt*=Gt),wt.set(Vt,Tt,jt,Gt),Ut.equals(wt)===!1&&(o.clearColor(Vt,Tt,jt,Gt),Ut.copy(wt))},reset:function(){Q=!1,xt=null,Ut.set(-1,0,0,0)}}}function s(){let Q=!1,wt=!1,xt=null,Ut=null,Vt=null;return{setReversed:function(Tt){if(wt!==Tt){const jt=e.get("EXT_clip_control");Tt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),wt=Tt;const Gt=Vt;Vt=null,this.setClear(Gt)}},getReversed:function(){return wt},setTest:function(Tt){Tt?ct(o.DEPTH_TEST):Et(o.DEPTH_TEST)},setMask:function(Tt){xt!==Tt&&!Q&&(o.depthMask(Tt),xt=Tt)},setFunc:function(Tt){if(wt&&(Tt=pT[Tt]),Ut!==Tt){switch(Tt){case Jh:o.depthFunc(o.NEVER);break;case jh:o.depthFunc(o.ALWAYS);break;case $h:o.depthFunc(o.LESS);break;case Sl:o.depthFunc(o.LEQUAL);break;case tp:o.depthFunc(o.EQUAL);break;case ep:o.depthFunc(o.GEQUAL);break;case np:o.depthFunc(o.GREATER);break;case ip:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ut=Tt}},setLocked:function(Tt){Q=Tt},setClear:function(Tt){Vt!==Tt&&(Vt=Tt,wt&&(Tt=1-Tt),o.clearDepth(Tt))},reset:function(){Q=!1,xt=null,Ut=null,Vt=null,wt=!1}}}function u(){let Q=!1,wt=null,xt=null,Ut=null,Vt=null,Tt=null,jt=null,Gt=null,De=null;return{setTest:function(de){Q||(de?ct(o.STENCIL_TEST):Et(o.STENCIL_TEST))},setMask:function(de){wt!==de&&!Q&&(o.stencilMask(de),wt=de)},setFunc:function(de,ei,gi){(xt!==de||Ut!==ei||Vt!==gi)&&(o.stencilFunc(de,ei,gi),xt=de,Ut=ei,Vt=gi)},setOp:function(de,ei,gi){(Tt!==de||jt!==ei||Gt!==gi)&&(o.stencilOp(de,ei,gi),Tt=de,jt=ei,Gt=gi)},setLocked:function(de){Q=de},setClear:function(de){De!==de&&(o.clearStencil(de),De=de)},reset:function(){Q=!1,wt=null,xt=null,Ut=null,Vt=null,Tt=null,jt=null,Gt=null,De=null}}}const f=new i,d=new s,h=new u,m=new WeakMap,p=new WeakMap;let S={},v={},_={},T=new WeakMap,R=[],O=null,M=!1,x=null,w=null,H=null,C=null,N=null,D=null,I=null,E=new Pe(0,0,0),L=0,U=!1,z=null,G=null,Z=null,V=null,J=null;const k=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,rt=0;const at=o.getParameter(o.VERSION);at.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(at)[1]),q=rt>=1):at.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),q=rt>=2);let ht=null,Mt={};const Wt=o.getParameter(o.SCISSOR_BOX),It=o.getParameter(o.VIEWPORT),F=new sn().fromArray(Wt),pt=new sn().fromArray(It);function bt(Q,wt,xt,Ut){const Vt=new Uint8Array(4),Tt=o.createTexture();o.bindTexture(Q,Tt),o.texParameteri(Q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let jt=0;jt<xt;jt++)Q===o.TEXTURE_3D||Q===o.TEXTURE_2D_ARRAY?o.texImage3D(wt,0,o.RGBA,1,1,Ut,0,o.RGBA,o.UNSIGNED_BYTE,Vt):o.texImage2D(wt+jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Vt);return Tt}const Y={};Y[o.TEXTURE_2D]=bt(o.TEXTURE_2D,o.TEXTURE_2D,1),Y[o.TEXTURE_CUBE_MAP]=bt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[o.TEXTURE_2D_ARRAY]=bt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Y[o.TEXTURE_3D]=bt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ct(o.DEPTH_TEST),d.setFunc(Sl),$t(!1),ne(Dv),ct(o.CULL_FACE),me(La);function ct(Q){S[Q]!==!0&&(o.enable(Q),S[Q]=!0)}function Et(Q){S[Q]!==!1&&(o.disable(Q),S[Q]=!1)}function Ct(Q,wt){return _[Q]!==wt?(o.bindFramebuffer(Q,wt),_[Q]=wt,Q===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=wt),Q===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=wt),!0):!1}function mt(Q,wt){let xt=R,Ut=!1;if(Q){xt=T.get(wt),xt===void 0&&(xt=[],T.set(wt,xt));const Vt=Q.textures;if(xt.length!==Vt.length||xt[0]!==o.COLOR_ATTACHMENT0){for(let Tt=0,jt=Vt.length;Tt<jt;Tt++)xt[Tt]=o.COLOR_ATTACHMENT0+Tt;xt.length=Vt.length,Ut=!0}}else xt[0]!==o.BACK&&(xt[0]=o.BACK,Ut=!0);Ut&&o.drawBuffers(xt)}function At(Q){return O!==Q?(o.useProgram(Q),O=Q,!0):!1}const Ae={[to]:o.FUNC_ADD,[PE]:o.FUNC_SUBTRACT,[IE]:o.FUNC_REVERSE_SUBTRACT};Ae[zE]=o.MIN,Ae[BE]=o.MAX;const ue={[FE]:o.ZERO,[HE]:o.ONE,[GE]:o.SRC_COLOR,[qS]:o.SRC_ALPHA,[YE]:o.SRC_ALPHA_SATURATE,[WE]:o.DST_COLOR,[XE]:o.DST_ALPHA,[VE]:o.ONE_MINUS_SRC_COLOR,[YS]:o.ONE_MINUS_SRC_ALPHA,[qE]:o.ONE_MINUS_DST_COLOR,[kE]:o.ONE_MINUS_DST_ALPHA,[ZE]:o.CONSTANT_COLOR,[KE]:o.ONE_MINUS_CONSTANT_COLOR,[QE]:o.CONSTANT_ALPHA,[JE]:o.ONE_MINUS_CONSTANT_ALPHA};function me(Q,wt,xt,Ut,Vt,Tt,jt,Gt,De,de){if(Q===La){M===!0&&(Et(o.BLEND),M=!1);return}if(M===!1&&(ct(o.BLEND),M=!0),Q!==OE){if(Q!==x||de!==U){if((w!==to||N!==to)&&(o.blendEquation(o.FUNC_ADD),w=to,N=to),de)switch(Q){case _l:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Nv:o.blendFunc(o.ONE,o.ONE);break;case Uv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Lv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Be("WebGLState: Invalid blending: ",Q);break}else switch(Q){case _l:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Nv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Uv:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lv:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",Q);break}H=null,C=null,D=null,I=null,E.set(0,0,0),L=0,x=Q,U=de}return}Vt=Vt||wt,Tt=Tt||xt,jt=jt||Ut,(wt!==w||Vt!==N)&&(o.blendEquationSeparate(Ae[wt],Ae[Vt]),w=wt,N=Vt),(xt!==H||Ut!==C||Tt!==D||jt!==I)&&(o.blendFuncSeparate(ue[xt],ue[Ut],ue[Tt],ue[jt]),H=xt,C=Ut,D=Tt,I=jt),(Gt.equals(E)===!1||De!==L)&&(o.blendColor(Gt.r,Gt.g,Gt.b,De),E.copy(Gt),L=De),x=Q,U=!1}function fe(Q,wt){Q.side===Na?Et(o.CULL_FACE):ct(o.CULL_FACE);let xt=Q.side===jn;wt&&(xt=!xt),$t(xt),Q.blending===_l&&Q.transparent===!1?me(La):me(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),d.setFunc(Q.depthFunc),d.setTest(Q.depthTest),d.setMask(Q.depthWrite),f.setMask(Q.colorWrite);const Ut=Q.stencilWrite;h.setTest(Ut),Ut&&(h.setMask(Q.stencilWriteMask),h.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),h.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),on(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):Et(o.SAMPLE_ALPHA_TO_COVERAGE)}function $t(Q){z!==Q&&(Q?o.frontFace(o.CW):o.frontFace(o.CCW),z=Q)}function ne(Q){Q!==NE?(ct(o.CULL_FACE),Q!==G&&(Q===Dv?o.cullFace(o.BACK):Q===UE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Et(o.CULL_FACE),G=Q}function Fe(Q){Q!==Z&&(q&&o.lineWidth(Q),Z=Q)}function on(Q,wt,xt){Q?(ct(o.POLYGON_OFFSET_FILL),(V!==wt||J!==xt)&&(V=wt,J=xt,d.getReversed()&&(wt=-wt),o.polygonOffset(wt,xt))):Et(o.POLYGON_OFFSET_FILL)}function Ie(Q){Q?ct(o.SCISSOR_TEST):Et(o.SCISSOR_TEST)}function Ve(Q){Q===void 0&&(Q=o.TEXTURE0+k-1),ht!==Q&&(o.activeTexture(Q),ht=Q)}function K(Q,wt,xt){xt===void 0&&(ht===null?xt=o.TEXTURE0+k-1:xt=ht);let Ut=Mt[xt];Ut===void 0&&(Ut={type:void 0,texture:void 0},Mt[xt]=Ut),(Ut.type!==Q||Ut.texture!==wt)&&(ht!==xt&&(o.activeTexture(xt),ht=xt),o.bindTexture(Q,wt||Y[Q]),Ut.type=Q,Ut.texture=wt)}function an(){const Q=Mt[ht];Q!==void 0&&Q.type!==void 0&&(o.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function ze(){try{o.compressedTexImage2D(...arguments)}catch(Q){Be("WebGLState:",Q)}}function P(){try{o.compressedTexImage3D(...arguments)}catch(Q){Be("WebGLState:",Q)}}function y(){try{o.texSubImage2D(...arguments)}catch(Q){Be("WebGLState:",Q)}}function et(){try{o.texSubImage3D(...arguments)}catch(Q){Be("WebGLState:",Q)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(Q){Be("WebGLState:",Q)}}function gt(){try{o.compressedTexSubImage3D(...arguments)}catch(Q){Be("WebGLState:",Q)}}function Rt(){try{o.texStorage2D(...arguments)}catch(Q){Be("WebGLState:",Q)}}function Nt(){try{o.texStorage3D(...arguments)}catch(Q){Be("WebGLState:",Q)}}function _t(){try{o.texImage2D(...arguments)}catch(Q){Be("WebGLState:",Q)}}function yt(){try{o.texImage3D(...arguments)}catch(Q){Be("WebGLState:",Q)}}function Dt(Q){return v[Q]!==void 0?v[Q]:o.getParameter(Q)}function te(Q,wt){v[Q]!==wt&&(o.pixelStorei(Q,wt),v[Q]=wt)}function zt(Q){F.equals(Q)===!1&&(o.scissor(Q.x,Q.y,Q.z,Q.w),F.copy(Q))}function Pt(Q){pt.equals(Q)===!1&&(o.viewport(Q.x,Q.y,Q.z,Q.w),pt.copy(Q))}function Xt(Q,wt){let xt=p.get(wt);xt===void 0&&(xt=new WeakMap,p.set(wt,xt));let Ut=xt.get(Q);Ut===void 0&&(Ut=o.getUniformBlockIndex(wt,Q.name),xt.set(Q,Ut))}function ie(Q,wt){const Ut=p.get(wt).get(Q);m.get(wt)!==Ut&&(o.uniformBlockBinding(wt,Ut,Q.__bindingPointIndex),m.set(wt,Ut))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},v={},ht=null,Mt={},_={},T=new WeakMap,R=[],O=null,M=!1,x=null,w=null,H=null,C=null,N=null,D=null,I=null,E=new Pe(0,0,0),L=0,U=!1,z=null,G=null,Z=null,V=null,J=null,F.set(0,0,o.canvas.width,o.canvas.height),pt.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:ct,disable:Et,bindFramebuffer:Ct,drawBuffers:mt,useProgram:At,setBlending:me,setMaterial:fe,setFlipSided:$t,setCullFace:ne,setLineWidth:Fe,setPolygonOffset:on,setScissorTest:Ie,activeTexture:Ve,bindTexture:K,unbindTexture:an,compressedTexImage2D:ze,compressedTexImage3D:P,texImage2D:_t,texImage3D:yt,pixelStorei:te,getParameter:Dt,updateUBOMapping:Xt,uniformBlockBinding:ie,texStorage2D:Rt,texStorage3D:Nt,texSubImage2D:y,texSubImage3D:et,compressedTexSubImage2D:ut,compressedTexSubImage3D:gt,scissor:zt,viewport:Pt,reset:ce}}function zC(o,e,i,s,u,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new be,S=new WeakMap,v=new Set;let _;const T=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function O(P,y){return R?new OffscreenCanvas(P,y):Dc("canvas")}function M(P,y,et){let ut=1;const gt=ze(P);if((gt.width>et||gt.height>et)&&(ut=et/Math.max(gt.width,gt.height)),ut<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Rt=Math.floor(ut*gt.width),Nt=Math.floor(ut*gt.height);_===void 0&&(_=O(Rt,Nt));const _t=y?O(Rt,Nt):_;return _t.width=Rt,_t.height=Nt,_t.getContext("2d").drawImage(P,0,0,Rt,Nt),le("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+Rt+"x"+Nt+")."),_t}else return"data"in P&&le("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),P;return P}function x(P){return P.generateMipmaps}function w(P){o.generateMipmap(P)}function H(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(P,y,et,ut,gt,Rt=!1){if(P!==null){if(o[P]!==void 0)return o[P];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Nt;ut&&(Nt=e.get("EXT_texture_norm16"),Nt||le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _t=y;if(y===o.RED&&(et===o.FLOAT&&(_t=o.R32F),et===o.HALF_FLOAT&&(_t=o.R16F),et===o.UNSIGNED_BYTE&&(_t=o.R8),et===o.UNSIGNED_SHORT&&Nt&&(_t=Nt.R16_EXT),et===o.SHORT&&Nt&&(_t=Nt.R16_SNORM_EXT)),y===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(_t=o.R8UI),et===o.UNSIGNED_SHORT&&(_t=o.R16UI),et===o.UNSIGNED_INT&&(_t=o.R32UI),et===o.BYTE&&(_t=o.R8I),et===o.SHORT&&(_t=o.R16I),et===o.INT&&(_t=o.R32I)),y===o.RG&&(et===o.FLOAT&&(_t=o.RG32F),et===o.HALF_FLOAT&&(_t=o.RG16F),et===o.UNSIGNED_BYTE&&(_t=o.RG8),et===o.UNSIGNED_SHORT&&Nt&&(_t=Nt.RG16_EXT),et===o.SHORT&&Nt&&(_t=Nt.RG16_SNORM_EXT)),y===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(_t=o.RG8UI),et===o.UNSIGNED_SHORT&&(_t=o.RG16UI),et===o.UNSIGNED_INT&&(_t=o.RG32UI),et===o.BYTE&&(_t=o.RG8I),et===o.SHORT&&(_t=o.RG16I),et===o.INT&&(_t=o.RG32I)),y===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(_t=o.RGB8UI),et===o.UNSIGNED_SHORT&&(_t=o.RGB16UI),et===o.UNSIGNED_INT&&(_t=o.RGB32UI),et===o.BYTE&&(_t=o.RGB8I),et===o.SHORT&&(_t=o.RGB16I),et===o.INT&&(_t=o.RGB32I)),y===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(_t=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(_t=o.RGBA16UI),et===o.UNSIGNED_INT&&(_t=o.RGBA32UI),et===o.BYTE&&(_t=o.RGBA8I),et===o.SHORT&&(_t=o.RGBA16I),et===o.INT&&(_t=o.RGBA32I)),y===o.RGB&&(et===o.UNSIGNED_SHORT&&Nt&&(_t=Nt.RGB16_EXT),et===o.SHORT&&Nt&&(_t=Nt.RGB16_SNORM_EXT),et===o.UNSIGNED_INT_5_9_9_9_REV&&(_t=o.RGB9_E5),et===o.UNSIGNED_INT_10F_11F_11F_REV&&(_t=o.R11F_G11F_B10F)),y===o.RGBA){const yt=Rt?wc:Ue.getTransfer(gt);et===o.FLOAT&&(_t=o.RGBA32F),et===o.HALF_FLOAT&&(_t=o.RGBA16F),et===o.UNSIGNED_BYTE&&(_t=yt===Ze?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT&&Nt&&(_t=Nt.RGBA16_EXT),et===o.SHORT&&Nt&&(_t=Nt.RGBA16_SNORM_EXT),et===o.UNSIGNED_SHORT_4_4_4_4&&(_t=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(_t=o.RGB5_A1)}return(_t===o.R16F||_t===o.R32F||_t===o.RG16F||_t===o.RG32F||_t===o.RGBA16F||_t===o.RGBA32F)&&e.get("EXT_color_buffer_float"),_t}function N(P,y){let et;return P?y===null||y===la||y===Ml?et=o.DEPTH24_STENCIL8:y===ra?et=o.DEPTH32F_STENCIL8:y===xl&&(et=o.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===la||y===Ml?et=o.DEPTH_COMPONENT24:y===ra?et=o.DEPTH_COMPONENT32F:y===xl&&(et=o.DEPTH_COMPONENT16),et}function D(P,y){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==Un&&P.minFilter!==zn?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function I(P){const y=P.target;y.removeEventListener("dispose",I),L(y),y.isVideoTexture&&S.delete(y),y.isHTMLTexture&&v.delete(y)}function E(P){const y=P.target;y.removeEventListener("dispose",E),z(y)}function L(P){const y=s.get(P);if(y.__webglInit===void 0)return;const et=P.source,ut=T.get(et);if(ut){const gt=ut[y.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&U(P),Object.keys(ut).length===0&&T.delete(et)}s.remove(P)}function U(P){const y=s.get(P);o.deleteTexture(y.__webglTexture);const et=P.source,ut=T.get(et);delete ut[y.__cacheKey],d.memory.textures--}function z(P){const y=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(y.__webglFramebuffer[ut]))for(let gt=0;gt<y.__webglFramebuffer[ut].length;gt++)o.deleteFramebuffer(y.__webglFramebuffer[ut][gt]);else o.deleteFramebuffer(y.__webglFramebuffer[ut]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[ut])}else{if(Array.isArray(y.__webglFramebuffer))for(let ut=0;ut<y.__webglFramebuffer.length;ut++)o.deleteFramebuffer(y.__webglFramebuffer[ut]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ut=0;ut<y.__webglColorRenderbuffer.length;ut++)y.__webglColorRenderbuffer[ut]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[ut]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const et=P.textures;for(let ut=0,gt=et.length;ut<gt;ut++){const Rt=s.get(et[ut]);Rt.__webglTexture&&(o.deleteTexture(Rt.__webglTexture),d.memory.textures--),s.remove(et[ut])}s.remove(P)}let G=0;function Z(){G=0}function V(){return G}function J(P){G=P}function k(){const P=G;return P>=u.maxTextures&&le("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+u.maxTextures),G+=1,P}function q(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function rt(P,y){const et=s.get(P);if(P.isVideoTexture&&K(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&et.__version!==P.version){const ut=P.image;if(ut===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(et,P,y);return}}else P.isExternalTexture&&(et.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+y)}function at(P,y){const et=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){Et(et,P,y);return}else P.isExternalTexture&&(et.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+y)}function ht(P,y){const et=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){Et(et,P,y);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+y)}function Mt(P,y){const et=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&et.__version!==P.version){Ct(et,P,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+y)}const Wt={[ap]:o.REPEAT,[Ua]:o.CLAMP_TO_EDGE,[rp]:o.MIRRORED_REPEAT},It={[Un]:o.NEAREST,[tT]:o.NEAREST_MIPMAP_NEAREST,[Qu]:o.NEAREST_MIPMAP_LINEAR,[zn]:o.LINEAR,[vh]:o.LINEAR_MIPMAP_NEAREST,[Zr]:o.LINEAR_MIPMAP_LINEAR},F={[aT]:o.NEVER,[uT]:o.ALWAYS,[rT]:o.LESS,[nm]:o.LEQUAL,[sT]:o.EQUAL,[im]:o.GEQUAL,[oT]:o.GREATER,[lT]:o.NOTEQUAL};function pt(P,y){if(y.type===ra&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===zn||y.magFilter===vh||y.magFilter===Qu||y.magFilter===Zr||y.minFilter===zn||y.minFilter===vh||y.minFilter===Qu||y.minFilter===Zr)&&le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,Wt[y.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,Wt[y.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,Wt[y.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,It[y.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,It[y.minFilter]),y.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,F[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Un||y.minFilter!==Qu&&y.minFilter!==Zr||y.type===ra&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||s.get(y).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,u.getMaxAnisotropy())),s.get(y).__currentAnisotropy=y.anisotropy}}}function bt(P,y){let et=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",I));const ut=y.source;let gt=T.get(ut);gt===void 0&&(gt={},T.set(ut,gt));const Rt=q(y);if(Rt!==P.__cacheKey){gt[Rt]===void 0&&(gt[Rt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,et=!0),gt[Rt].usedTimes++;const Nt=gt[P.__cacheKey];Nt!==void 0&&(gt[P.__cacheKey].usedTimes--,Nt.usedTimes===0&&U(y)),P.__cacheKey=Rt,P.__webglTexture=gt[Rt].texture}return et}function Y(P,y,et){return Math.floor(Math.floor(P/et)/y)}function ct(P,y,et,ut){const Rt=P.updateRanges;if(Rt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,et,ut,y.data);else{Rt.sort((te,zt)=>te.start-zt.start);let Nt=0;for(let te=1;te<Rt.length;te++){const zt=Rt[Nt],Pt=Rt[te],Xt=zt.start+zt.count,ie=Y(Pt.start,y.width,4),ce=Y(zt.start,y.width,4);Pt.start<=Xt+1&&ie===ce&&Y(Pt.start+Pt.count-1,y.width,4)===ie?zt.count=Math.max(zt.count,Pt.start+Pt.count-zt.start):(++Nt,Rt[Nt]=Pt)}Rt.length=Nt+1;const _t=i.getParameter(o.UNPACK_ROW_LENGTH),yt=i.getParameter(o.UNPACK_SKIP_PIXELS),Dt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let te=0,zt=Rt.length;te<zt;te++){const Pt=Rt[te],Xt=Math.floor(Pt.start/4),ie=Math.ceil(Pt.count/4),ce=Xt%y.width,Q=Math.floor(Xt/y.width),wt=ie,xt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),i.pixelStorei(o.UNPACK_SKIP_ROWS,Q),i.texSubImage2D(o.TEXTURE_2D,0,ce,Q,wt,xt,et,ut,y.data)}P.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,_t),i.pixelStorei(o.UNPACK_SKIP_PIXELS,yt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Dt)}}function Et(P,y,et){let ut=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ut=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ut=o.TEXTURE_3D);const gt=bt(P,y),Rt=y.source;i.bindTexture(ut,P.__webglTexture,o.TEXTURE0+et);const Nt=s.get(Rt);if(Rt.version!==Nt.__version||gt===!0){if(i.activeTexture(o.TEXTURE0+et),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const xt=Ue.getPrimaries(Ue.workingColorSpace),Ut=y.colorSpace===Sr?null:Ue.getPrimaries(y.colorSpace),Vt=y.colorSpace===Sr||xt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt)}i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment);let yt=M(y.image,!1,u.maxTextureSize);yt=an(y,yt);const Dt=f.convert(y.format,y.colorSpace),te=f.convert(y.type);let zt=C(y.internalFormat,Dt,te,y.normalized,y.colorSpace,y.isVideoTexture);pt(ut,y);let Pt;const Xt=y.mipmaps,ie=y.isVideoTexture!==!0,ce=Nt.__version===void 0||gt===!0,Q=Rt.dataReady,wt=D(y,yt);if(y.isDepthTexture)zt=N(y.format===Kr,y.type),ce&&(ie?i.texStorage2D(o.TEXTURE_2D,1,zt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,zt,yt.width,yt.height,0,Dt,te,null));else if(y.isDataTexture)if(Xt.length>0){ie&&ce&&i.texStorage2D(o.TEXTURE_2D,wt,zt,Xt[0].width,Xt[0].height);for(let xt=0,Ut=Xt.length;xt<Ut;xt++)Pt=Xt[xt],ie?Q&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Pt.width,Pt.height,Dt,te,Pt.data):i.texImage2D(o.TEXTURE_2D,xt,zt,Pt.width,Pt.height,0,Dt,te,Pt.data);y.generateMipmaps=!1}else ie?(ce&&i.texStorage2D(o.TEXTURE_2D,wt,zt,yt.width,yt.height),Q&&ct(y,yt,Dt,te)):i.texImage2D(o.TEXTURE_2D,0,zt,yt.width,yt.height,0,Dt,te,yt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ie&&ce&&i.texStorage3D(o.TEXTURE_2D_ARRAY,wt,zt,Xt[0].width,Xt[0].height,yt.depth);for(let xt=0,Ut=Xt.length;xt<Ut;xt++)if(Pt=Xt[xt],y.format!==Fi)if(Dt!==null)if(ie){if(Q)if(y.layerUpdates.size>0){const Vt=iS(Pt.width,Pt.height,y.format,y.type);for(const Tt of y.layerUpdates){const jt=Pt.data.subarray(Tt*Vt/Pt.data.BYTES_PER_ELEMENT,(Tt+1)*Vt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,Tt,Pt.width,Pt.height,1,Dt,jt)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,Pt.width,Pt.height,yt.depth,Dt,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,xt,zt,Pt.width,Pt.height,yt.depth,0,Pt.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?Q&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,Pt.width,Pt.height,yt.depth,Dt,te,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,xt,zt,Pt.width,Pt.height,yt.depth,0,Dt,te,Pt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ie&&ce&&i.texStorage2D(o.TEXTURE_2D,wt,zt,Xt[0].width,Xt[0].height);for(let xt=0,Ut=Xt.length;xt<Ut;xt++)Pt=Xt[xt],y.format!==Fi?Dt!==null?ie?Q&&i.compressedTexSubImage2D(o.TEXTURE_2D,xt,0,0,Pt.width,Pt.height,Dt,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,xt,zt,Pt.width,Pt.height,0,Pt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?Q&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Pt.width,Pt.height,Dt,te,Pt.data):i.texImage2D(o.TEXTURE_2D,xt,zt,Pt.width,Pt.height,0,Dt,te,Pt.data)}else if(y.isDataArrayTexture)if(ie){if(ce&&i.texStorage3D(o.TEXTURE_2D_ARRAY,wt,zt,yt.width,yt.height,yt.depth),Q)if(y.layerUpdates.size>0){const xt=iS(yt.width,yt.height,y.format,y.type);for(const Ut of y.layerUpdates){const Vt=yt.data.subarray(Ut*xt/yt.data.BYTES_PER_ELEMENT,(Ut+1)*xt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ut,yt.width,yt.height,1,Dt,te,Vt)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Dt,te,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,yt.width,yt.height,yt.depth,0,Dt,te,yt.data);else if(y.isData3DTexture)ie?(ce&&i.texStorage3D(o.TEXTURE_3D,wt,zt,yt.width,yt.height,yt.depth),Q&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Dt,te,yt.data)):i.texImage3D(o.TEXTURE_3D,0,zt,yt.width,yt.height,yt.depth,0,Dt,te,yt.data);else if(y.isFramebufferTexture){if(ce)if(ie)i.texStorage2D(o.TEXTURE_2D,wt,zt,yt.width,yt.height);else{let xt=yt.width,Ut=yt.height;for(let Vt=0;Vt<wt;Vt++)i.texImage2D(o.TEXTURE_2D,Vt,zt,xt,Ut,0,Dt,te,null),xt>>=1,Ut>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in o){const xt=o.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),yt.parentNode!==xt){xt.appendChild(yt),v.add(y),xt.onpaint=Ut=>{const Vt=Ut.changedElements;for(const Tt of v)Vt.includes(Tt.image)&&(Tt.needsUpdate=!0)},xt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,yt);else{const Vt=o.RGBA,Tt=o.RGBA,jt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Vt,Tt,jt,yt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(ie&&ce){const xt=ze(Xt[0]);i.texStorage2D(o.TEXTURE_2D,wt,zt,xt.width,xt.height)}for(let xt=0,Ut=Xt.length;xt<Ut;xt++)Pt=Xt[xt],ie?Q&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Dt,te,Pt):i.texImage2D(o.TEXTURE_2D,xt,zt,Dt,te,Pt);y.generateMipmaps=!1}else if(ie){if(ce){const xt=ze(yt);i.texStorage2D(o.TEXTURE_2D,wt,zt,xt.width,xt.height)}Q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Dt,te,yt)}else i.texImage2D(o.TEXTURE_2D,0,zt,Dt,te,yt);x(y)&&w(ut),Nt.__version=Rt.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Ct(P,y,et){if(y.image.length!==6)return;const ut=bt(P,y),gt=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+et);const Rt=s.get(gt);if(gt.version!==Rt.__version||ut===!0){i.activeTexture(o.TEXTURE0+et);const Nt=Ue.getPrimaries(Ue.workingColorSpace),_t=y.colorSpace===Sr?null:Ue.getPrimaries(y.colorSpace),yt=y.colorSpace===Sr||Nt===_t?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Dt=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,zt=[];for(let Tt=0;Tt<6;Tt++)!Dt&&!te?zt[Tt]=M(y.image[Tt],!0,u.maxCubemapSize):zt[Tt]=te?y.image[Tt].image:y.image[Tt],zt[Tt]=an(y,zt[Tt]);const Pt=zt[0],Xt=f.convert(y.format,y.colorSpace),ie=f.convert(y.type),ce=C(y.internalFormat,Xt,ie,y.normalized,y.colorSpace),Q=y.isVideoTexture!==!0,wt=Rt.__version===void 0||ut===!0,xt=gt.dataReady;let Ut=D(y,Pt);pt(o.TEXTURE_CUBE_MAP,y);let Vt;if(Dt){Q&&wt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,ce,Pt.width,Pt.height);for(let Tt=0;Tt<6;Tt++){Vt=zt[Tt].mipmaps;for(let jt=0;jt<Vt.length;jt++){const Gt=Vt[jt];y.format!==Fi?Xt!==null?Q?xt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,jt,0,0,Gt.width,Gt.height,Xt,Gt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,jt,ce,Gt.width,Gt.height,0,Gt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,jt,0,0,Gt.width,Gt.height,Xt,ie,Gt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,jt,ce,Gt.width,Gt.height,0,Xt,ie,Gt.data)}}}else{if(Vt=y.mipmaps,Q&&wt){Vt.length>0&&Ut++;const Tt=ze(zt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,ce,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(te){Q?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,zt[Tt].width,zt[Tt].height,Xt,ie,zt[Tt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,ce,zt[Tt].width,zt[Tt].height,0,Xt,ie,zt[Tt].data);for(let jt=0;jt<Vt.length;jt++){const De=Vt[jt].image[Tt].image;Q?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,jt+1,0,0,De.width,De.height,Xt,ie,De.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,jt+1,ce,De.width,De.height,0,Xt,ie,De.data)}}else{Q?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Xt,ie,zt[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,ce,Xt,ie,zt[Tt]);for(let jt=0;jt<Vt.length;jt++){const Gt=Vt[jt];Q?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,jt+1,0,0,Xt,ie,Gt.image[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,jt+1,ce,Xt,ie,Gt.image[Tt])}}}x(y)&&w(o.TEXTURE_CUBE_MAP),Rt.__version=gt.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function mt(P,y,et,ut,gt,Rt){const Nt=f.convert(et.format,et.colorSpace),_t=f.convert(et.type),yt=C(et.internalFormat,Nt,_t,et.normalized,et.colorSpace),Dt=s.get(y),te=s.get(et);if(te.__renderTarget=y,!Dt.__hasExternalTextures){const zt=Math.max(1,y.width>>Rt),Pt=Math.max(1,y.height>>Rt);gt===o.TEXTURE_3D||gt===o.TEXTURE_2D_ARRAY?i.texImage3D(gt,Rt,yt,zt,Pt,y.depth,0,Nt,_t,null):i.texImage2D(gt,Rt,yt,zt,Pt,0,Nt,_t,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),Ve(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ut,gt,te.__webglTexture,0,Ie(y)):(gt===o.TEXTURE_2D||gt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ut,gt,te.__webglTexture,Rt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function At(P,y,et){if(o.bindRenderbuffer(o.RENDERBUFFER,P),y.depthBuffer){const ut=y.depthTexture,gt=ut&&ut.isDepthTexture?ut.type:null,Rt=N(y.stencilBuffer,gt),Nt=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ve(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ie(y),Rt,y.width,y.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie(y),Rt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Rt,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Nt,o.RENDERBUFFER,P)}else{const ut=y.textures;for(let gt=0;gt<ut.length;gt++){const Rt=ut[gt],Nt=f.convert(Rt.format,Rt.colorSpace),_t=f.convert(Rt.type),yt=C(Rt.internalFormat,Nt,_t,Rt.normalized,Rt.colorSpace);Ve(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ie(y),yt,y.width,y.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie(y),yt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,yt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ae(P,y,et){const ut=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const gt=s.get(y.depthTexture);if(gt.__renderTarget=y,(!gt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ut){if(gt.__webglInit===void 0&&(gt.__webglInit=!0,y.depthTexture.addEventListener("dispose",I)),gt.__webglTexture===void 0){gt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),pt(o.TEXTURE_CUBE_MAP,y.depthTexture);const Dt=f.convert(y.depthTexture.format),te=f.convert(y.depthTexture.type);let zt;y.depthTexture.format===za?zt=o.DEPTH_COMPONENT24:y.depthTexture.format===Kr&&(zt=o.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,zt,y.width,y.height,0,Dt,te,null)}}else rt(y.depthTexture,0);const Rt=gt.__webglTexture,Nt=Ie(y),_t=ut?o.TEXTURE_CUBE_MAP_POSITIVE_X+et:o.TEXTURE_2D,yt=y.depthTexture.format===Kr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===za)Ve(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,_t,Rt,0,Nt):o.framebufferTexture2D(o.FRAMEBUFFER,yt,_t,Rt,0);else if(y.depthTexture.format===Kr)Ve(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,_t,Rt,0,Nt):o.framebufferTexture2D(o.FRAMEBUFFER,yt,_t,Rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ue(P){const y=s.get(P),et=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const ut=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ut){const gt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ut.removeEventListener("dispose",gt)};ut.addEventListener("dispose",gt),y.__depthDisposeCallback=gt}y.__boundDepthTexture=ut}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(et)for(let ut=0;ut<6;ut++)Ae(y.__webglFramebuffer[ut],P,ut);else{const ut=P.texture.mipmaps;ut&&ut.length>0?Ae(y.__webglFramebuffer[0],P,0):Ae(y.__webglFramebuffer,P,0)}else if(et){y.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[ut]),y.__webglDepthbuffer[ut]===void 0)y.__webglDepthbuffer[ut]=o.createRenderbuffer(),At(y.__webglDepthbuffer[ut],P,!1);else{const gt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=y.__webglDepthbuffer[ut];o.bindRenderbuffer(o.RENDERBUFFER,Rt),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,Rt)}}else{const ut=P.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),At(y.__webglDepthbuffer,P,!1);else{const gt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Rt),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,Rt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function me(P,y,et){const ut=s.get(P);y!==void 0&&mt(ut.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&ue(P)}function fe(P){const y=P.texture,et=s.get(P),ut=s.get(y);P.addEventListener("dispose",E);const gt=P.textures,Rt=P.isWebGLCubeRenderTarget===!0,Nt=gt.length>1;if(Nt||(ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture()),ut.__version=y.version,d.memory.textures++),Rt){et.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0){et.__webglFramebuffer[_t]=[];for(let yt=0;yt<y.mipmaps.length;yt++)et.__webglFramebuffer[_t][yt]=o.createFramebuffer()}else et.__webglFramebuffer[_t]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){et.__webglFramebuffer=[];for(let _t=0;_t<y.mipmaps.length;_t++)et.__webglFramebuffer[_t]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Nt)for(let _t=0,yt=gt.length;_t<yt;_t++){const Dt=s.get(gt[_t]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=o.createTexture(),d.memory.textures++)}if(P.samples>0&&Ve(P)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let _t=0;_t<gt.length;_t++){const yt=gt[_t];et.__webglColorRenderbuffer[_t]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[_t]);const Dt=f.convert(yt.format,yt.colorSpace),te=f.convert(yt.type),zt=C(yt.internalFormat,Dt,te,yt.normalized,yt.colorSpace,P.isXRRenderTarget===!0),Pt=Ie(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,zt,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+_t,o.RENDERBUFFER,et.__webglColorRenderbuffer[_t])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),At(et.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Rt){i.bindTexture(o.TEXTURE_CUBE_MAP,ut.__webglTexture),pt(o.TEXTURE_CUBE_MAP,y);for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)mt(et.__webglFramebuffer[_t][yt],P,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,yt);else mt(et.__webglFramebuffer[_t],P,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);x(y)&&w(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Nt){for(let _t=0,yt=gt.length;_t<yt;_t++){const Dt=gt[_t],te=s.get(Dt);let zt=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(zt=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(zt,te.__webglTexture),pt(zt,Dt),mt(et.__webglFramebuffer,P,Dt,o.COLOR_ATTACHMENT0+_t,zt,0),x(Dt)&&w(zt)}i.unbindTexture()}else{let _t=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_t=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(_t,ut.__webglTexture),pt(_t,y),y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)mt(et.__webglFramebuffer[yt],P,y,o.COLOR_ATTACHMENT0,_t,yt);else mt(et.__webglFramebuffer,P,y,o.COLOR_ATTACHMENT0,_t,0);x(y)&&w(_t),i.unbindTexture()}P.depthBuffer&&ue(P)}function $t(P){const y=P.textures;for(let et=0,ut=y.length;et<ut;et++){const gt=y[et];if(x(gt)){const Rt=H(P),Nt=s.get(gt).__webglTexture;i.bindTexture(Rt,Nt),w(Rt),i.unbindTexture()}}}const ne=[],Fe=[];function on(P){if(P.samples>0){if(Ve(P)===!1){const y=P.textures,et=P.width,ut=P.height;let gt=o.COLOR_BUFFER_BIT;const Rt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=s.get(P),_t=y.length>1;if(_t)for(let Dt=0;Dt<y.length;Dt++)i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const yt=P.texture.mipmaps;yt&&yt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Dt=0;Dt<y.length;Dt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(gt|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(gt|=o.STENCIL_BUFFER_BIT)),_t){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Dt]);const te=s.get(y[Dt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,te,0)}o.blitFramebuffer(0,0,et,ut,0,0,et,ut,gt,o.NEAREST),m===!0&&(ne.length=0,Fe.length=0,ne.push(o.COLOR_ATTACHMENT0+Dt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ne.push(Rt),Fe.push(Rt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Fe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ne))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),_t)for(let Dt=0;Dt<y.length;Dt++){i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Dt]);const te=s.get(y[Dt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,te,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&m){const y=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function Ie(P){return Math.min(u.maxSamples,P.samples)}function Ve(P){const y=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function K(P){const y=d.render.frame;S.get(P)!==y&&(S.set(P,y),P.update())}function an(P,y){const et=P.colorSpace,ut=P.format,gt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||et!==Cc&&et!==Sr&&(Ue.getTransfer(et)===Ze?(ut!==Fi||gt!==pi)&&le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",et)),y}function ze(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=k,this.resetTextureUnits=Z,this.getTextureUnits=V,this.setTextureUnits=J,this.setTexture2D=rt,this.setTexture2DArray=at,this.setTexture3D=ht,this.setTextureCube=Mt,this.rebindTextures=me,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function BC(o,e){function i(s,u=Sr){let f;const d=Ue.getTransfer(u);if(s===pi)return o.UNSIGNED_BYTE;if(s===Jp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===jp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===rx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===sx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===ix)return o.BYTE;if(s===ax)return o.SHORT;if(s===xl)return o.UNSIGNED_SHORT;if(s===Qp)return o.INT;if(s===la)return o.UNSIGNED_INT;if(s===ra)return o.FLOAT;if(s===ua)return o.HALF_FLOAT;if(s===ox)return o.ALPHA;if(s===lx)return o.RGB;if(s===Fi)return o.RGBA;if(s===za)return o.DEPTH_COMPONENT;if(s===Kr)return o.DEPTH_STENCIL;if(s===ux)return o.RED;if(s===$p)return o.RED_INTEGER;if(s===jr)return o.RG;if(s===tm)return o.RG_INTEGER;if(s===em)return o.RGBA_INTEGER;if(s===Mc||s===yc||s===Ec||s===Tc)if(d===Ze)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===Mc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ec)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===Mc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ec)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sp||s===op||s===lp||s===up)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===sp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===op)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===lp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===up)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===cp||s===fp||s===dp||s===hp||s===pp||s===Ac||s===mp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===cp||s===fp)return d===Ze?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===dp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===hp)return f.COMPRESSED_R11_EAC;if(s===pp)return f.COMPRESSED_SIGNED_R11_EAC;if(s===Ac)return f.COMPRESSED_RG11_EAC;if(s===mp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===gp||s===_p||s===vp||s===Sp||s===xp||s===Mp||s===yp||s===Ep||s===Tp||s===bp||s===Ap||s===Rp||s===Cp||s===wp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===gp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===_p)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Mp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ep)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Tp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ap)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Cp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Dp||s===Np||s===Up)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===Dp)return d===Ze?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Np)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Up)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Lp||s===Op||s===Rc||s===Pp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===Lp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Op)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rc)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Pp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ml?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const FC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HC=`
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

}`;class GC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Sx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ca({vertexShader:FC,fragmentShader:HC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new mi(new uo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VC extends $r{constructor(e,i){super();const s=this;let u=null,f=1,d=null,h="local-floor",m=1,p=null,S=null,v=null,_=null,T=null,R=null;const O=typeof XRWebGLBinding<"u",M=new GC,x={},w=i.getContextAttributes();let H=null,C=null;const N=[],D=[],I=new be;let E=null,L=null;const U=new hi;U.viewport=new sn;const z=new hi;z.viewport=new sn;const G=[U,z],Z=new QT;let V=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ct=N[Y];return ct===void 0&&(ct=new Rh,N[Y]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(Y){let ct=N[Y];return ct===void 0&&(ct=new Rh,N[Y]=ct),ct.getGripSpace()},this.getHand=function(Y){let ct=N[Y];return ct===void 0&&(ct=new Rh,N[Y]=ct),ct.getHandSpace()};function k(Y){const ct=D.indexOf(Y.inputSource);if(ct===-1)return;const Et=N[ct];Et!==void 0&&(Et.update(Y.inputSource,Y.frame,p||d),Et.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){u.removeEventListener("select",k),u.removeEventListener("selectstart",k),u.removeEventListener("selectend",k),u.removeEventListener("squeeze",k),u.removeEventListener("squeezestart",k),u.removeEventListener("squeezeend",k),u.removeEventListener("end",q),u.removeEventListener("inputsourceschange",rt);for(let Y=0;Y<N.length;Y++){const ct=D[Y];ct!==null&&(D[Y]=null,N[Y].disconnect(ct))}V=null,J=null,M.reset();for(const Y in x)delete x[Y];if(e.setRenderTarget(H),T=null,_=null,v=null,u=null,C=null,bt.stop(),s.isPresenting=!1,e.setPixelRatio(E),e.setSize(I.width,I.height,!1),L!==null){const Y=L.camera;Y.fov=L.fov,Y.zoom=L.zoom,Y.updateProjectionMatrix(),L=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){f=Y,s.isPresenting===!0&&le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){h=Y,s.isPresenting===!0&&le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return _!==null?_:T},this.getBinding=function(){return v===null&&O&&(v=new XRWebGLBinding(u,i)),v},this.getFrame=function(){return R},this.getSession=function(){return u},this.setSession=async function(Y){if(u=Y,u!==null){if(H=e.getRenderTarget(),u.addEventListener("select",k),u.addEventListener("selectstart",k),u.addEventListener("selectend",k),u.addEventListener("squeeze",k),u.addEventListener("squeezestart",k),u.addEventListener("squeezeend",k),u.addEventListener("end",q),u.addEventListener("inputsourceschange",rt),w.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(I),O&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Ct=null,mt=null;w.depth&&(mt=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=w.stencil?Kr:za,Ct=w.stencil?Ml:la);const At={colorFormat:i.RGBA8,depthFormat:mt,scaleFactor:f};v=this.getBinding(),_=v.createProjectionLayer(At),u.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new Hi(_.textureWidth,_.textureHeight,{format:Fi,type:pi,depthTexture:new El(_.textureWidth,_.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Et={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:f};T=new XRWebGLLayer(u,i,Et),u.updateRenderState({baseLayer:T}),e.setPixelRatio(1),e.setSize(T.framebufferWidth,T.framebufferHeight,!1),C=new Hi(T.framebufferWidth,T.framebufferHeight,{format:Fi,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1,storeMultisampledDepthBuffer:T.ignoreDepthValues===!1,storeMultisampledStencilBuffer:T.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await u.requestReferenceSpace(h),bt.setContext(u),bt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function rt(Y){for(let ct=0;ct<Y.removed.length;ct++){const Et=Y.removed[ct],Ct=D.indexOf(Et);Ct>=0&&(D[Ct]=null,N[Ct].disconnect(Et))}for(let ct=0;ct<Y.added.length;ct++){const Et=Y.added[ct];let Ct=D.indexOf(Et);if(Ct===-1){for(let At=0;At<N.length;At++)if(At>=D.length){D.push(Et),Ct=At;break}else if(D[At]===null){D[At]=Et,Ct=At;break}if(Ct===-1)break}const mt=N[Ct];mt&&mt.connect(Et)}}const at=new nt,ht=new nt;function Mt(Y,ct,Et){at.setFromMatrixPosition(ct.matrixWorld),ht.setFromMatrixPosition(Et.matrixWorld);const Ct=at.distanceTo(ht),mt=ct.projectionMatrix.elements,At=Et.projectionMatrix.elements,Ae=mt[14]/(mt[10]-1),ue=mt[14]/(mt[10]+1),me=(mt[9]+1)/mt[5],fe=(mt[9]-1)/mt[5],$t=(mt[8]-1)/mt[0],ne=(At[8]+1)/At[0],Fe=Ae*$t,on=Ae*ne,Ie=Ct/(-$t+ne),Ve=Ie*-$t;if(ct.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ve),Y.translateZ(Ie),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),mt[10]===-1)Y.projectionMatrix.copy(ct.projectionMatrix),Y.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const K=Ae+Ie,an=ue+Ie,ze=Fe-Ve,P=on+(Ct-Ve),y=me*ue/an*K,et=fe*ue/an*K;Y.projectionMatrix.makePerspective(ze,P,y,et,K,an),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Wt(Y,ct){ct===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ct.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(u===null)return;let ct=Y.near,Et=Y.far;M.texture!==null&&(M.depthNear>0&&(ct=M.depthNear),M.depthFar>0&&(Et=M.depthFar)),Z.near=z.near=U.near=ct,Z.far=z.far=U.far=Et,(V!==Z.near||J!==Z.far)&&(u.updateRenderState({depthNear:Z.near,depthFar:Z.far}),V=Z.near,J=Z.far),Z.layers.mask=Y.layers.mask|6,U.layers.mask=Z.layers.mask&-5,z.layers.mask=Z.layers.mask&-3;const Ct=Y.parent,mt=Z.cameras;Wt(Z,Ct);for(let At=0;At<mt.length;At++)Wt(mt[At],Ct);mt.length===2?Mt(Z,U,z):Z.projectionMatrix.copy(U.projectionMatrix),L===null&&Y.isPerspectiveCamera&&(L={camera:Y,fov:Y.fov,zoom:Y.zoom}),It(Y,Z,Ct)};function It(Y,ct,Et){Et===null?Y.matrix.copy(ct.matrixWorld):(Y.matrix.copy(Et.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ct.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ct.projectionMatrix),Y.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=zp*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(_===null&&T===null))return m},this.setFoveation=function(Y){m=Y,_!==null&&(_.fixedFoveation=Y),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Z)},this.getCameraTexture=function(Y){return x[Y]};let F=null;function pt(Y,ct){if(S=ct.getViewerPose(p||d),R=ct,S!==null){const Et=S.views;T!==null&&(e.setRenderTargetFramebuffer(C,T.framebuffer),e.setRenderTarget(C));let Ct=!1;Et.length!==Z.cameras.length&&(Z.cameras.length=0,Ct=!0);for(let ue=0;ue<Et.length;ue++){const me=Et[ue];let fe=null;if(T!==null)fe=T.getViewport(me);else{const ne=v.getViewSubImage(_,me);fe=ne.viewport,ue===0&&(e.setRenderTargetTextures(C,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(C))}let $t=G[ue];$t===void 0&&($t=new hi,$t.layers.enable(ue),$t.viewport=new sn,G[ue]=$t),$t.matrix.fromArray(me.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(me.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(fe.x,fe.y,fe.width,fe.height),ue===0&&(Z.matrix.copy($t.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ct===!0&&Z.cameras.push($t)}const mt=u.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&O){v=s.getBinding();const ue=v.getDepthInformation(Et[0]);ue&&ue.isValid&&ue.texture&&M.init(ue,u.renderState)}if(mt&&mt.includes("camera-access")&&O){e.state.unbindTexture(),v=s.getBinding();for(let ue=0;ue<Et.length;ue++){const me=Et[ue].camera;if(me){let fe=x[me];fe||(fe=new Sx,x[me]=fe);const $t=v.getCameraImage(me);fe.sourceTexture=$t}}}}for(let Et=0;Et<N.length;Et++){const Ct=D[Et],mt=N[Et];Ct!==null&&mt!==void 0&&mt.update(Ct,ct,p||d)}F&&F(Y,ct),ct.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ct}),R=null}const bt=new Ax;bt.setAnimationLoop(pt),this.setAnimationLoop=function(Y){F=Y},this.dispose=function(){}}}const XC=new nn,Lx=new pe;Lx.set(-1,0,0,0,1,0,0,0,1);function kC(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,xx(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function u(M,x,w,H,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?f(M,x):x.isMeshLambertMaterial?(f(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(f(M,x),v(M,x)):x.isMeshPhongMaterial?(f(M,x),S(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(f(M,x),_(M,x),x.isMeshPhysicalMaterial&&T(M,x,C)):x.isMeshMatcapMaterial?(f(M,x),R(M,x)):x.isMeshDepthMaterial?f(M,x):x.isMeshDistanceMaterial?(f(M,x),O(M,x)):x.isMeshNormalMaterial?f(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?m(M,x,w,H):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===jn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===jn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const w=e.get(x),H=w.envMap,C=w.envMapRotation;H&&(M.envMap.value=H,M.envMapRotation.value.setFromMatrix4(XC.makeRotationFromEuler(C)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Lx),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,w,H){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*w,M.scale.value=H*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function S(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function v(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function T(M,x,w){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.retroreflectivity>0&&(M.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function R(M,x){x.matcap&&(M.matcap.value=x.matcap)}function O(M,x){const w=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function WC(o,e,i,s){let u={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,N){const D=N.program;s.uniformBlockBinding(C,D)}function p(C,N){let D=u[C.id];D===void 0&&(M(C),D=S(C),u[C.id]=D,C.addEventListener("dispose",w));const I=N.program;s.updateUBOMapping(C,I);const E=e.render.frame;f[C.id]!==E&&(_(C),f[C.id]=E)}function S(C){const N=v();C.__bindingPointIndex=N;const D=o.createBuffer(),I=C.__size,E=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,I,E),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,D),D}function v(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const N=u[C.id],D=C.uniforms,I=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let E=0,L=D.length;E<L;E++){const U=D[E];if(Array.isArray(U))for(let z=0,G=U.length;z<G;z++)T(U[z],E,z,I);else T(U,E,0,I)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function T(C,N,D,I){if(O(C,N,D,I)===!0){const E=C.__offset,L=C.value;if(Array.isArray(L)){let U=0;for(let z=0;z<L.length;z++){const G=L[z],Z=x(G);R(G,C.__data,U),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(U+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(L,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,E,C.__data)}}function R(C,N,D){typeof C=="number"||typeof C=="boolean"?N[0]=C:C.isMatrix3?(N[0]=C.elements[0],N[1]=C.elements[1],N[2]=C.elements[2],N[3]=0,N[4]=C.elements[3],N[5]=C.elements[4],N[6]=C.elements[5],N[7]=0,N[8]=C.elements[6],N[9]=C.elements[7],N[10]=C.elements[8],N[11]=0):ArrayBuffer.isView(C)?N.set(new C.constructor(C.buffer,C.byteOffset,N.length)):C.toArray(N,D)}function O(C,N,D,I){const E=C.value,L=N+"_"+D;if(I[L]===void 0)return typeof E=="number"||typeof E=="boolean"?I[L]=E:ArrayBuffer.isView(E)?I[L]=E.slice():I[L]=E.clone(),!0;{const U=I[L];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return I[L]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(U.equals(E)===!1)return U.copy(E),!0}}return!1}function M(C){const N=C.uniforms;let D=0;const I=16;for(let L=0,U=N.length;L<U;L++){const z=Array.isArray(N[L])?N[L]:[N[L]];for(let G=0,Z=z.length;G<Z;G++){const V=z[G],J=Array.isArray(V.value)?V.value:[V.value];for(let k=0,q=J.length;k<q;k++){const rt=J[k],at=x(rt),ht=D%I,Mt=ht%at.boundary,Wt=ht+Mt;D+=Mt,Wt!==0&&I-Wt<at.storage&&(D+=I-Wt),V.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=D,D+=at.storage}}}const E=D%I;return E>0&&(D+=I-E),C.__size=D,C.__cache={},this}function x(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(N.boundary=16,N.storage=C.byteLength):le("WebGLRenderer: Unsupported uniform value type.",C),N}function w(C){const N=C.target;N.removeEventListener("dispose",w);const D=d.indexOf(N.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(u[N.id]),delete u[N.id],delete f[N.id]}function H(){for(const C in u)o.deleteBuffer(u[C]);d=[],u={},f={}}return{bind:m,update:p,dispose:H}}const qC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ia=null;function YC(){return ia===null&&(ia=new zT(qC,16,16,jr,ua),ia.name="DFG_LUT",ia.minFilter=zn,ia.magFilter=zn,ia.wrapS=Ua,ia.wrapT=Ua,ia.generateMipmaps=!1,ia.needsUpdate=!0),ia}class Ox{constructor(e={}){const{canvas:i=dT(),context:s=null,depth:u=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:T=pi}=e;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=d;const O=T,M=new Set([em,tm,$p]),x=new Set([pi,la,xl,Ml,Jp,jp]),w=new Uint32Array(4),H=new Int32Array(4),C=new nt;let N=null,D=null;const I=[],E=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let z=!1,G=null,Z=null,V=null,J=null;this._outputColorSpace=Jn;let k=0,q=0,rt=null,at=-1,ht=null;const Mt=new sn,Wt=new sn;let It=null;const F=new Pe(0);let pt=0,bt=i.width,Y=i.height,ct=1,Et=null,Ct=null;const mt=new sn(0,0,bt,Y),At=new sn(0,0,bt,Y);let Ae=!1;const ue=new sm;let me=!1,fe=!1;const $t=new nn,ne=new nt,Fe=new sn,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function Ve(){return rt===null?ct:1}let K=s;function an(b,X){return i.getContext(b,X)}let ze,P,y,et,ut,gt,Rt,Nt,_t,yt,Dt,te,zt,Pt,Xt,ie,ce,Q,wt,xt,Ut,Vt,Tt;try{const b={alpha:!0,depth:u,stencil:f,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Kp}`),i.addEventListener("webglcontextlost",De,!1),i.addEventListener("webglcontextrestored",de,!1),i.addEventListener("webglcontextcreationerror",ei,!1),K===null){const X="webgl2";if(K=an(X,b),K===null)throw an(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}jt()}catch(b){throw i.removeEventListener("webglcontextlost",De,!1),i.removeEventListener("webglcontextrestored",de,!1),i.removeEventListener("webglcontextcreationerror",ei,!1),Be("WebGLRenderer: "+b.message),b}function jt(){ze=new YA(K),ze.init(),Ut=new BC(K,ze),P=new zA(K,ze,e,Ut),y=new IC(K,ze),P.reversedDepthBuffer&&_&&y.buffers.depth.setReversed(!0),Z=K.createFramebuffer(),V=K.createFramebuffer(),J=K.createFramebuffer(),et=new QA(K),ut=new yC,gt=new zC(K,ze,y,ut,P,Ut,et),Rt=new qA(U),Nt=new jT(K),Vt=new PA(K,Nt),_t=new ZA(K,Nt,et,Vt),yt=new jA(K,_t,Nt,Vt,et),Q=new JA(K,P,gt),Xt=new BA(ut),Dt=new MC(U,Rt,ze,P,Vt,Xt),te=new kC(U,ut),zt=new TC,Pt=new DC(ze),ce=new OA(U,Rt,y,yt,R,m),ie=new PC(U,yt,P),Tt=new WC(K,et,P,y),wt=new IA(K,ze,et),xt=new KA(K,ze,et),et.programs=Dt.programs,U.capabilities=P,U.extensions=ze,U.properties=ut,U.renderLists=zt,U.shadowMap=ie,U.state=y,U.info=et}O!==pi&&(L=new tR(O,i.width,i.height,h,u,f));const Gt=new VC(U,K);this.xr=Gt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const b=ze.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ze.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(b){b!==void 0&&(ct=b,this.setSize(bt,Y,!1))},this.getSize=function(b){return b.set(bt,Y)},this.setSize=function(b,X,dt=!0){if(Gt.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}bt=b,Y=X,i.width=Math.floor(b*ct),i.height=Math.floor(X*ct),dt===!0&&(i.style.width=b+"px",i.style.height=X+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(bt*ct,Y*ct).floor()},this.setDrawingBufferSize=function(b,X,dt){bt=b,Y=X,ct=dt,i.width=Math.floor(b*dt),i.height=Math.floor(X*dt),this.setViewport(0,0,b,X)},this.setEffects=function(b){if(O===pi){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let X=0;X<b.length;X++)if(b[X].isOutputPass===!0){le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Mt)},this.getViewport=function(b){return b.copy(mt)},this.setViewport=function(b,X,dt,st){b.isVector4?mt.set(b.x,b.y,b.z,b.w):mt.set(b,X,dt,st),y.viewport(Mt.copy(mt).multiplyScalar(ct).round())},this.getScissor=function(b){return b.copy(At)},this.setScissor=function(b,X,dt,st){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,X,dt,st),y.scissor(Wt.copy(At).multiplyScalar(ct).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(b){y.setScissorTest(Ae=b)},this.setOpaqueSort=function(b){Et=b},this.setTransparentSort=function(b){Ct=b},this.getClearColor=function(b){return b.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(b=!0,X=!0,dt=!0){let st=0;if(b){let ot=!1;if(rt!==null){const Bt=rt.texture.format;ot=M.has(Bt)}if(ot){const Bt=rt.texture.type,qt=x.has(Bt),Lt=ce.getClearColor(),Kt=ce.getClearAlpha(),Qt=Lt.r,se=Lt.g,he=Lt.b;qt?(w[0]=Qt,w[1]=se,w[2]=he,w[3]=Kt,K.clearBufferuiv(K.COLOR,0,w)):(H[0]=Qt,H[1]=se,H[2]=he,H[3]=Kt,K.clearBufferiv(K.COLOR,0,H))}else st|=K.COLOR_BUFFER_BIT}X&&(st|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),dt&&(st|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&K.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),G=b},this.dispose=function(){i.removeEventListener("webglcontextlost",De,!1),i.removeEventListener("webglcontextrestored",de,!1),i.removeEventListener("webglcontextcreationerror",ei,!1),ce.dispose(),zt.dispose(),Pt.dispose(),ut.dispose(),Rt.dispose(),yt.dispose(),Vt.dispose(),Tt.dispose(),Dt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",Mr),Gt.removeEventListener("sessionend",Fa),Vi.stop()};function De(b){b.preventDefault(),Iv("WebGLRenderer: Context Lost."),z=!0}function de(){Iv("WebGLRenderer: Context Restored."),z=!1;const b=et.autoReset,X=ie.enabled,dt=ie.autoUpdate,st=ie.needsUpdate,ot=ie.type;jt(),et.autoReset=b,ie.enabled=X,ie.autoUpdate=dt,ie.needsUpdate=st,ie.type=ot}function ei(b){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function gi(b){const X=b.target;X.removeEventListener("dispose",gi),Bc(X)}function Bc(b){ts(b),ut.remove(b)}function ts(b){const X=ut.get(b).programs;X!==void 0&&(X.forEach(function(dt){Dt.releaseProgram(dt)}),b.isShaderMaterial&&Dt.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,dt,st,ot,Bt){X===null&&(X=on);const qt=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,Lt=_o(b,X,dt,st,ot);y.setMaterial(st,qt);let Kt=dt.index,Qt=1;if(st.wireframe===!0){if(Kt=_t.getWireframeAttribute(dt),Kt===void 0)return;Qt=2}const se=dt.drawRange,he=dt.attributes.position;let Yt=se.start*Qt,ye=(se.start+se.count)*Qt;Bt!==null&&(Yt=Math.max(Yt,Bt.start*Qt),ye=Math.min(ye,(Bt.start+Bt.count)*Qt)),Kt!==null?(Yt=Math.max(Yt,0),ye=Math.min(ye,Kt.count)):he!=null&&(Yt=Math.max(Yt,0),ye=Math.min(ye,he.count));const Se=ye-Yt;if(Se<0||Se===1/0)return;Vt.setup(ot,st,Lt,dt,Kt);let Ke,Xe=wt;if(Kt!==null&&(Ke=Nt.get(Kt),Xe=xt,Xe.setIndex(Ke)),ot.isMesh)st.wireframe===!0?(y.setLineWidth(st.wireframeLinewidth*Ve()),Xe.setMode(K.LINES)):Xe.setMode(K.TRIANGLES);else if(ot.isLine){let vn=st.linewidth;vn===void 0&&(vn=1),y.setLineWidth(vn*Ve()),ot.isLineSegments?Xe.setMode(K.LINES):ot.isLineLoop?Xe.setMode(K.LINE_LOOP):Xe.setMode(K.LINE_STRIP)}else ot.isPoints?Xe.setMode(K.POINTS):ot.isSprite&&Xe.setMode(K.TRIANGLES);if(ot.isBatchedMesh)if(ze.get("WEBGL_multi_draw"))Xe.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{const vn=ot._multiDrawStarts,Ft=ot._multiDrawCounts,ln=ot._multiDrawCount,Ne=Kt?Nt.get(Kt).bytesPerElement:1,Fn=ut.get(st).currentProgram.getUniforms();for(let ni=0;ni<ln;ni++)Fn.setValue(K,"_gl_DrawID",ni),Xe.render(vn[ni]/Ne,Ft[ni])}else if(ot.isInstancedMesh)Xe.renderInstances(Yt,Se,ot.count);else if(dt.isInstancedBufferGeometry){const vn=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Ft=Math.min(dt.instanceCount,vn);Xe.renderInstances(Yt,Se,Ft)}else Xe.render(Yt,Se)};function xr(b,X,dt,st){G!==null&&b.isNodeMaterial&&G.setObject(st,b),me===!0&&Xt.setState(b,dt,!1),b.transparent===!0&&b.side===Na&&b.forceSinglePass===!1?(b.side=jn,b.needsUpdate=!0,yr(b,X,st),b.side=Ia,b.needsUpdate=!0,yr(b,X,st),b.side=Na):yr(b,X,st)}this.compile=function(b,X,dt=null){dt===null&&(dt=b),G!==null&&G.renderStart(b,X,dt),D=Pt.get(dt),D.init(X),E.push(D),dt.traverseVisible(function(ot){ot.isLight&&ot.layers.test(X.layers)&&(D.pushLight(ot),ot.castShadow&&D.pushShadow(ot))}),b!==dt&&b.traverseVisible(function(ot){ot.isLight&&ot.layers.test(X.layers)&&(D.pushLight(ot),ot.castShadow&&D.pushShadow(ot))}),D.setupLights(),G!==null&&G.updateLights(D.state.lightsArray),fe=this.localClippingEnabled,me=Xt.init(this.clippingPlanes,fe),me===!0&&Xt.setGlobalState(this.clippingPlanes,X),G!==null&&ie.render(D.state.shadowsArray,dt,X);const st=new Set;return b.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;const Bt=ot.material;if(Bt)if(Array.isArray(Bt))for(let qt=0;qt<Bt.length;qt++){const Lt=Bt[qt];xr(Lt,dt,X,ot),st.add(Lt)}else xr(Bt,dt,X,ot),st.add(Bt)}),D=E.pop(),G!==null&&G.renderEnd(),st},this.compileAsync=function(b,X,dt=null){const st=this.compile(b,X,dt);return new Promise(ot=>{function Bt(){if(st.forEach(function(qt){const Kt=ut.get(qt).currentProgram;(Kt===void 0||Kt.isReady())&&st.delete(qt)}),st.size===0){ot(b);return}setTimeout(Bt,10)}ze.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Ba=null;function fa(b){Ba&&Ba(b)}function Mr(){Vi.stop()}function Fa(){Vi.start()}const Vi=new Ax;Vi.setAnimationLoop(fa),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(b){Ba=b,Gt.setAnimationLoop(b),b===null?Vi.stop():Vi.start()},Gt.addEventListener("sessionstart",Mr),Gt.addEventListener("sessionend",Fa),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;G!==null&&G.renderStart(b,X);const dt=Gt.enabled===!0&&Gt.isPresenting===!0,st=L!==null&&(rt===null||dt)&&L.begin(U,rt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(X),X=Gt.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,X,rt),D=Pt.get(b,E.length),D.init(X),D.state.textureUnits=gt.getTextureUnits(),E.push(D),$t.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ue.setFromProjectionMatrix($t,sa,X.reversedDepth),fe=this.localClippingEnabled,me=Xt.init(this.clippingPlanes,fe),N=zt.get(b,I.length),N.init(),I.push(N),Gt.enabled===!0&&Gt.isPresenting===!0){const qt=U.xr.getDepthSensingMesh();qt!==null&&fo(qt,X,-1/0,U.sortObjects)}fo(b,X,0,U.sortObjects),N.finish(),G!==null&&G.updateLights(D.state.lightsArray),U.sortObjects===!0&&N.sort(Et,Ct),Ie=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,Ie&&ce.addToRenderList(N,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),me===!0&&Xt.beginShadows();const ot=D.state.shadowsArray;if(ie.render(ot,b,X),me===!0&&Xt.endShadows(),(st&&L.hasRenderPass())===!1){const qt=N.opaque,Lt=N.transmissive;if(D.setupLights(),X.isArrayCamera){const Kt=X.cameras;if(Lt.length>0)for(let Qt=0,se=Kt.length;Qt<se;Qt++){const he=Kt[Qt];es(qt,Lt,b,he)}Ie&&ce.render(b);for(let Qt=0,se=Kt.length;Qt<se;Qt++){const he=Kt[Qt];ho(N,b,he,he.viewport)}}else Lt.length>0&&es(qt,Lt,b,X),Ie&&ce.render(b),ho(N,b,X)}rt!==null&&q===0&&(gt.updateMultisampleRenderTarget(rt),gt.updateRenderTargetMipmap(rt)),st&&L.end(U),b.isScene===!0&&b.onAfterRender(U,b,X),Vt.resetDefaultState(),at=-1,ht=null,E.pop(),E.length>0?(D=E[E.length-1],gt.setTextureUnits(D.state.textureUnits),me===!0&&Xt.setGlobalState(U.clippingPlanes,D.state.camera)):D=null,I.pop(),I.length>0?N=I[I.length-1]:N=null,G!==null&&G.renderEnd()};function fo(b,X,dt,st){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)dt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLightProbeGrid)D.pushLightProbeGrid(b);else if(b.isLight)D.pushLight(b),b.castShadow&&D.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(ue)){st&&Fe.setFromMatrixPosition(b.matrixWorld).applyMatrix4($t);const qt=yt.update(b),Lt=b.material;Lt.visible&&N.push(b,qt,Lt,dt,Fe.z,null,X)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(ue))){const qt=yt.update(b),Lt=b.material;if(st&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Fe.copy(b.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),Fe.copy(qt.boundingSphere.center)),Fe.applyMatrix4(b.matrixWorld).applyMatrix4($t)),Array.isArray(Lt)){const Kt=qt.groups;for(let Qt=0,se=Kt.length;Qt<se;Qt++){const he=Kt[Qt],Yt=Lt[he.materialIndex];Yt&&Yt.visible&&N.push(b,qt,Yt,dt,Fe.z,he,X)}}else Lt.visible&&N.push(b,qt,Lt,dt,Fe.z,null,X)}}const Bt=b.children;for(let qt=0,Lt=Bt.length;qt<Lt;qt++)fo(Bt[qt],X,dt,st)}function ho(b,X,dt,st){const{opaque:ot,transmissive:Bt,transparent:qt}=b;D.setupLightsView(dt),me===!0&&Xt.setGlobalState(U.clippingPlanes,dt),st&&y.viewport(Mt.copy(st)),ot.length>0&&Xi(ot,X,dt),Bt.length>0&&Xi(Bt,X,dt),qt.length>0&&Xi(qt,X,dt),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function es(b,X,dt,st){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[st.id]===void 0){const Yt=ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[st.id]=new Hi(1,1,{generateMipmaps:!0,type:Yt?ua:pi,minFilter:Zr,samples:Math.max(4,P.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ue.workingColorSpace})}const Bt=D.state.transmissionRenderTarget[st.id],qt=st.viewport||Mt;Bt.setSize(qt.z*U.transmissionResolutionScale,qt.w*U.transmissionResolutionScale);const Lt=U.getRenderTarget(),Kt=U.getActiveCubeFace(),Qt=U.getActiveMipmapLevel();U.setRenderTarget(Bt),U.getClearColor(F),pt=U.getClearAlpha(),pt<1&&U.setClearColor(16777215,.5),U.clear(),Ie&&ce.render(dt);const se=U.toneMapping;U.toneMapping=oa;const he=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),D.setupLightsView(st),me===!0&&Xt.setGlobalState(U.clippingPlanes,st),Xi(b,dt,st),gt.updateMultisampleRenderTarget(Bt),gt.updateRenderTargetMipmap(Bt),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let ye=0,Se=X.length;ye<Se;ye++){const Ke=X[ye],{object:Xe,geometry:vn,material:Ft,group:ln}=Ke;if(Ft.side===Na&&Xe.layers.test(st.layers)){const Ne=Ft.side;Ft.side=jn,Ft.needsUpdate=!0,Cl(Xe,dt,st,vn,Ft,ln),Ft.side=Ne,Ft.needsUpdate=!0,Yt=!0}}Yt===!0&&(gt.updateMultisampleRenderTarget(Bt),gt.updateRenderTargetMipmap(Bt))}U.setRenderTarget(Lt,Kt,Qt),U.setClearColor(F,pt),he!==void 0&&(st.viewport=he),U.toneMapping=se}function Xi(b,X,dt){const st=X.isScene===!0?X.overrideMaterial:null;for(let ot=0,Bt=b.length;ot<Bt;ot++){const qt=b[ot],{object:Lt,geometry:Kt,group:Qt}=qt;let se=qt.material;se.allowOverride===!0&&st!==null&&(se=st),Lt.layers.test(dt.layers)&&Cl(Lt,X,dt,Kt,se,Qt)}}function Cl(b,X,dt,st,ot,Bt){G!==null&&ot.isNodeMaterial&&G.setObject(b,ot),b.onBeforeRender(U,X,dt,st,ot,Bt),b.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ot.onBeforeRender(U,X,dt,st,b,Bt),ot.transparent===!0&&ot.side===Na&&ot.forceSinglePass===!1?(ot.side=jn,ot.needsUpdate=!0,U.renderBufferDirect(dt,X,st,ot,b,Bt),ot.side=Ia,ot.needsUpdate=!0,U.renderBufferDirect(dt,X,st,ot,b,Bt),ot.side=Na):U.renderBufferDirect(dt,X,st,ot,b,Bt),b.onAfterRender(U,X,dt,st,ot,Bt)}function yr(b,X,dt){X.isScene!==!0&&(X=on);const st=ut.get(b),ot=D.state.lights,Bt=D.state.shadowsArray,qt=ot.state.version,Lt=Dt.getParameters(b,ot.state,Bt,X,dt,D.state.lightProbeGridArray),Kt=Dt.getProgramCacheKey(Lt);let Qt=st.programs;st.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?X.environment:null,st.fog=X.fog;const se=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;st.envMap=Rt.get(b.envMap||st.environment,se),st.envMapRotation=st.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,Qt===void 0&&(b.addEventListener("dispose",gi),Qt=new Map,st.programs=Qt);let he=Qt.get(Kt);if(he!==void 0){if(st.currentProgram===he&&st.lightsStateVersion===qt)return mo(b,Lt),he}else Lt.uniforms=Dt.getUniforms(b),G!==null&&b.isNodeMaterial&&G.build(b,dt,Lt),b.onBeforeCompile(Lt,U),he=Dt.acquireProgram(Lt,Kt),Qt.set(Kt,he),st.uniforms=Lt.uniforms;const Yt=st.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Yt.clippingPlanes=Xt.uniform),mo(b,Lt),st.needsLights=Dl(b),st.lightsStateVersion=qt,st.needsLights&&(Yt.ambientLightColor.value=ot.state.ambient,Yt.lightProbe.value=ot.state.probe,Yt.sunLights.value=ot.state.sun,Yt.sunLightShadows.value=ot.state.sunShadow,Yt.directionalLights.value=ot.state.directional,Yt.directionalLightShadows.value=ot.state.directionalShadow,Yt.spotLights.value=ot.state.spot,Yt.spotLightShadows.value=ot.state.spotShadow,Yt.rectAreaLights.value=ot.state.rectArea,Yt.ltc_1.value=ot.state.rectAreaLTC1,Yt.ltc_2.value=ot.state.rectAreaLTC2,Yt.pointLights.value=ot.state.point,Yt.pointLightShadows.value=ot.state.pointShadow,Yt.hemisphereLights.value=ot.state.hemi,Yt.sunShadowMatrix.value=ot.state.sunShadowMatrix,Yt.sunShadowCascade.value=ot.state.sunShadowCascade,Yt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Yt.spotLightMatrix.value=ot.state.spotLightMatrix,Yt.spotLightMap.value=ot.state.spotLightMap,Yt.pointShadowMatrix.value=ot.state.pointShadowMatrix),st.lightProbeGrid=D.state.lightProbeGridArray.length>0,st.currentProgram=he,st.uniformsList=null,he}function po(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=bc.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function mo(b,X){const dt=ut.get(b);dt.outputColorSpace=X.outputColorSpace,dt.batching=X.batching,dt.batchingColor=X.batchingColor,dt.instancing=X.instancing,dt.instancingColor=X.instancingColor,dt.instancingMorph=X.instancingMorph,dt.skinning=X.skinning,dt.morphTargets=X.morphTargets,dt.morphNormals=X.morphNormals,dt.morphColors=X.morphColors,dt.morphTargetsCount=X.morphTargetsCount,dt.numClippingPlanes=X.numClippingPlanes,dt.numIntersection=X.numClipIntersection,dt.vertexAlphas=X.vertexAlphas,dt.vertexTangents=X.vertexTangents,dt.toneMapping=X.toneMapping}function go(b,X){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;C.setFromMatrixPosition(X.matrixWorld);for(let dt=0,st=b.length;dt<st;dt++){const ot=b[dt];if(ot.texture!==null&&ot.boundingBox.containsPoint(C))return ot}return null}function _o(b,X,dt,st,ot){X.isScene!==!0&&(X=on),gt.resetTextureUnits();const Bt=X.fog,qt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?X.environment:null,Lt=rt===null?U.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Ue.workingColorSpace,Kt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Qt=Rt.get(st.envMap||qt,Kt),se=st.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,he=!!dt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Yt=!!dt.morphAttributes.position,ye=!!dt.morphAttributes.normal,Se=!!dt.morphAttributes.color;let Ke=oa;st.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ke=U.toneMapping);const Xe=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,vn=Xe!==void 0?Xe.length:0,Ft=ut.get(st),ln=D.state.lights;if(me===!0&&(fe===!0||b!==ht)){const Re=b===ht&&st.id===at;Xt.setState(st,b,Re)}let Ne=!1;st.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==ln.state.version||Ft.outputColorSpace!==Lt||ot.isBatchedMesh&&Ft.batching===!1||!ot.isBatchedMesh&&Ft.batching===!0||ot.isBatchedMesh&&Ft.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&Ft.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&Ft.instancing===!1||!ot.isInstancedMesh&&Ft.instancing===!0||ot.isSkinnedMesh&&Ft.skinning===!1||!ot.isSkinnedMesh&&Ft.skinning===!0||ot.isInstancedMesh&&Ft.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Ft.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Ft.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Ft.instancingMorph===!1&&ot.morphTexture!==null||Ft.envMap!==Qt||st.fog===!0&&Ft.fog!==Bt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Xt.numPlanes||Ft.numIntersection!==Xt.numIntersection)||Ft.vertexAlphas!==se||Ft.vertexTangents!==he||Ft.morphTargets!==Yt||Ft.morphNormals!==ye||Ft.morphColors!==Se||Ft.toneMapping!==Ke||Ft.morphTargetsCount!==vn||!!Ft.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Ne=!0):(Ne=!0,Ft.__version=st.version);let Fn=Ft.currentProgram;Ne===!0&&(Fn=yr(st,X,ot),G&&st.isNodeMaterial&&G.onUpdateProgram(st,Fn,Ft));let ni=!1,ki=!1,xe=!1;const He=Fn.getUniforms(),je=Ft.uniforms;if(y.useProgram(Fn.program)&&(ni=!0,ki=!0,xe=!0),st.id!==at&&(at=st.id,ki=!0),Ft.needsLights){const Re=go(D.state.lightProbeGridArray,ot);Ft.lightProbeGrid!==Re&&(Ft.lightProbeGrid=Re,ki=!0)}if(ni||ht!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),He.setValue(K,"projectionMatrix",b.projectionMatrix),He.setValue(K,"viewMatrix",b.matrixWorldInverse);const un=He.map.cameraPosition;un!==void 0&&un.setValue(K,ne.setFromMatrixPosition(b.matrixWorld)),P.logarithmicDepthBuffer&&He.setValue(K,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&He.setValue(K,"isOrthographic",b.isOrthographicCamera===!0),ht!==b&&(ht=b,ki=!0,xe=!0)}if(Ft.needsLights&&(ln.state.sunShadowMap.length>0&&He.setValue(K,"sunShadowMap",ln.state.sunShadowMap,gt),ln.state.directionalShadowMap.length>0&&He.setValue(K,"directionalShadowMap",ln.state.directionalShadowMap,gt),ln.state.spotShadowMap.length>0&&He.setValue(K,"spotShadowMap",ln.state.spotShadowMap,gt),ln.state.pointShadowMap.length>0&&He.setValue(K,"pointShadowMap",ln.state.pointShadowMap,gt)),ot.isSkinnedMesh){He.setOptional(K,ot,"bindMatrix"),He.setOptional(K,ot,"bindMatrixInverse");const Re=ot.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),He.setValue(K,"boneTexture",Re.boneTexture,gt))}ot.isBatchedMesh&&(He.setOptional(K,ot,"batchingTexture"),He.setValue(K,"batchingTexture",ot._matricesTexture,gt),He.setOptional(K,ot,"batchingIdTexture"),He.setValue(K,"batchingIdTexture",ot._indirectTexture,gt),He.setOptional(K,ot,"batchingColorTexture"),ot._colorsTexture!==null&&He.setValue(K,"batchingColorTexture",ot._colorsTexture,gt));const ii=dt.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&Q.update(ot,dt,Fn),(ki||Ft.receiveShadow!==ot.receiveShadow)&&(Ft.receiveShadow=ot.receiveShadow,He.setValue(K,"receiveShadow",ot.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&X.environment!==null&&(je.envMapIntensity.value=X.environmentIntensity),je.dfgLUT!==void 0&&(je.dfgLUT.value=YC()),ki){if(He.setValue(K,"toneMappingExposure",U.toneMappingExposure),Ft.needsLights&&wl(je,xe),Bt&&st.fog===!0&&te.refreshFogUniforms(je,Bt),te.refreshMaterialUniforms(je,st,ct,Y,D.state.transmissionRenderTarget[b.id]),Ft.needsLights&&Ft.lightProbeGrid){const Re=Ft.lightProbeGrid;je.probesSH.value=Re.texture,je.probesMin.value.copy(Re.boundingBox.min),je.probesMax.value.copy(Re.boundingBox.max),je.probesResolution.value.copy(Re.resolution)}bc.upload(K,po(Ft),je,gt)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(bc.upload(K,po(Ft),je,gt),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&He.setValue(K,"center",ot.center),He.setValue(K,"modelViewMatrix",ot.modelViewMatrix),He.setValue(K,"normalMatrix",ot.normalMatrix),He.setValue(K,"modelMatrix",ot.matrixWorld),st.uniformsGroups!==void 0){const Re=st.uniformsGroups;for(let un=0,da=Re.length;un<da;un++){const Nl=Re[un];Tt.update(Nl,Fn),Tt.bind(Nl,Fn)}}return Fn}function wl(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.sunLights.needsUpdate=X,b.sunLightShadows.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function Dl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(b,X,dt){const st=ut.get(b);st.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),ut.get(b.texture).__webglTexture=X,ut.get(b.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:dt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,X){const dt=ut.get(b);dt.__webglFramebuffer=X,dt.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(b,X=0,dt=0){rt=b,k=X,q=dt;let st=null,ot=!1,Bt=!1;if(b){const Lt=ut.get(b);if(Lt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(K.FRAMEBUFFER,Lt.__webglFramebuffer),Mt.copy(b.viewport),Wt.copy(b.scissor),It=b.scissorTest,y.viewport(Mt),y.scissor(Wt),y.setScissorTest(It),at=-1;return}else if(Lt.__webglFramebuffer===void 0)gt.setupRenderTarget(b);else if(Lt.__hasExternalTextures)gt.rebindTextures(b,ut.get(b.texture).__webglTexture,ut.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const se=b.depthTexture;if(Lt.__boundDepthTexture!==se){if(se!==null&&ut.has(se)&&(b.width!==se.image.width||b.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(b)}}const Kt=b.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Bt=!0);const Qt=ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qt[X])?st=Qt[X][dt]:st=Qt[X],ot=!0):b.samples>0&&gt.useMultisampledRTT(b)===!1?st=ut.get(b).__webglMultisampledFramebuffer:Array.isArray(Qt)?st=Qt[dt]:st=Qt,Mt.copy(b.viewport),Wt.copy(b.scissor),It=b.scissorTest}else Mt.copy(mt).multiplyScalar(ct).floor(),Wt.copy(At).multiplyScalar(ct).floor(),It=Ae;if(dt!==0&&(st=Z),y.bindFramebuffer(K.FRAMEBUFFER,st)&&y.drawBuffers(b,st),y.viewport(Mt),y.scissor(Wt),y.setScissorTest(It),ot){const Lt=ut.get(b.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+X,Lt.__webglTexture,dt)}else if(Bt){const Lt=X;for(let Kt=0;Kt<b.textures.length;Kt++){const Qt=ut.get(b.textures[Kt]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Kt,Qt.__webglTexture,dt,Lt)}}else if(b!==null&&dt!==0){const Lt=ut.get(b.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Lt.__webglTexture,dt)}at=-1};function _i(b){const X=ut.get(b);return(X.__readFormat!==b.format||X.__readType!==b.type)&&(X.__readFormat=b.format,X.__readType=b.type,X.__formatReadable=P.textureFormatReadable(b.format),X.__typeReadable=P.textureTypeReadable(b.type)),X}this.readRenderTargetPixels=function(b,X,dt,st,ot,Bt,qt,Lt=0){if(!(b&&b.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&qt!==void 0&&(Kt=Kt[qt]),Kt){y.bindFramebuffer(K.FRAMEBUFFER,Kt);try{const Qt=b.textures[Lt],se=Qt.format,he=Qt.type;b.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Lt);const Yt=_i(Qt);if(Yt.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Yt.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-st&&dt>=0&&dt<=b.height-ot&&K.readPixels(X,dt,st,ot,Ut.convert(se),Ut.convert(he),Bt)}finally{const Qt=rt!==null?ut.get(rt).__webglFramebuffer:null;y.bindFramebuffer(K.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(b,X,dt,st,ot,Bt,qt,Lt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&qt!==void 0&&(Kt=Kt[qt]),Kt)if(X>=0&&X<=b.width-st&&dt>=0&&dt<=b.height-ot){y.bindFramebuffer(K.FRAMEBUFFER,Kt);const Qt=b.textures[Lt],se=Qt.format,he=Qt.type;b.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Lt);const Yt=_i(Qt);if(Yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,ye),K.bufferData(K.PIXEL_PACK_BUFFER,Bt.byteLength,K.STREAM_READ),K.readPixels(X,dt,st,ot,Ut.convert(se),Ut.convert(he),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const Se=rt!==null?ut.get(rt).__webglFramebuffer:null;y.bindFramebuffer(K.FRAMEBUFFER,Se);const Ke=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await hT(K,Ke,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,ye),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Bt),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(ye),K.deleteSync(Ke),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,X=null,dt=0){const st=Math.pow(2,-dt),ot=Math.floor(b.image.width*st),Bt=Math.floor(b.image.height*st),qt=X!==null?X.x:0,Lt=X!==null?X.y:0;gt.setTexture2D(b,0),K.copyTexSubImage2D(K.TEXTURE_2D,dt,0,0,qt,Lt,ot,Bt),y.unbindTexture()},this.copyTextureToTexture=function(b,X,dt=null,st=null,ot=0,Bt=0){let qt,Lt,Kt,Qt,se,he,Yt,ye,Se;const Ke=b.isCompressedTexture?b.mipmaps[Bt]:b.image;if(dt!==null)qt=dt.max.x-dt.min.x,Lt=dt.max.y-dt.min.y,Kt=dt.isBox3?dt.max.z-dt.min.z:1,Qt=dt.min.x,se=dt.min.y,he=dt.isBox3?dt.min.z:0;else{const je=Math.pow(2,-ot);qt=Math.floor(Ke.width*je),Lt=Math.floor(Ke.height*je),b.isDataArrayTexture?Kt=Ke.depth:b.isData3DTexture?Kt=Math.floor(Ke.depth*je):Kt=1,Qt=0,se=0,he=0}st!==null?(Yt=st.x,ye=st.y,Se=st.z):(Yt=0,ye=0,Se=0);const Xe=Ut.convert(X.format),vn=Ut.convert(X.type);let Ft;X.isData3DTexture?(gt.setTexture3D(X,0),Ft=K.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(gt.setTexture2DArray(X,0),Ft=K.TEXTURE_2D_ARRAY):(gt.setTexture2D(X,0),Ft=K.TEXTURE_2D),y.activeTexture(K.TEXTURE0),y.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,X.flipY),y.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),y.pixelStorei(K.UNPACK_ALIGNMENT,X.unpackAlignment);const ln=y.getParameter(K.UNPACK_ROW_LENGTH),Ne=y.getParameter(K.UNPACK_IMAGE_HEIGHT),Fn=y.getParameter(K.UNPACK_SKIP_PIXELS),ni=y.getParameter(K.UNPACK_SKIP_ROWS),ki=y.getParameter(K.UNPACK_SKIP_IMAGES);y.pixelStorei(K.UNPACK_ROW_LENGTH,Ke.width),y.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ke.height),y.pixelStorei(K.UNPACK_SKIP_PIXELS,Qt),y.pixelStorei(K.UNPACK_SKIP_ROWS,se),y.pixelStorei(K.UNPACK_SKIP_IMAGES,he);const xe=b.isDataArrayTexture||b.isData3DTexture,He=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){const je=ut.get(b),ii=ut.get(X),Re=ut.get(je.__renderTarget),un=ut.get(ii.__renderTarget);y.bindFramebuffer(K.READ_FRAMEBUFFER,Re.__webglFramebuffer),y.bindFramebuffer(K.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let da=0;da<Kt;da++)xe&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ut.get(b).__webglTexture,ot,he+da),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ut.get(X).__webglTexture,Bt,Se+da)),K.blitFramebuffer(Qt,se,qt,Lt,Yt,ye,qt,Lt,K.DEPTH_BUFFER_BIT,K.NEAREST);y.bindFramebuffer(K.READ_FRAMEBUFFER,null),y.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(ot!==0||b.isRenderTargetTexture||ut.has(b)){const je=ut.get(b),ii=ut.get(X);y.bindFramebuffer(K.READ_FRAMEBUFFER,V),y.bindFramebuffer(K.DRAW_FRAMEBUFFER,J);for(let Re=0;Re<Kt;Re++)xe?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,je.__webglTexture,ot,he+Re):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,je.__webglTexture,ot),He?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ii.__webglTexture,Bt,Se+Re):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,ii.__webglTexture,Bt),ot!==0?K.blitFramebuffer(Qt,se,qt,Lt,Yt,ye,qt,Lt,K.COLOR_BUFFER_BIT,K.NEAREST):He?K.copyTexSubImage3D(Ft,Bt,Yt,ye,Se+Re,Qt,se,qt,Lt):K.copyTexSubImage2D(Ft,Bt,Yt,ye,Qt,se,qt,Lt);y.bindFramebuffer(K.READ_FRAMEBUFFER,null),y.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else He?b.isDataTexture||b.isData3DTexture?K.texSubImage3D(Ft,Bt,Yt,ye,Se,qt,Lt,Kt,Xe,vn,Ke.data):X.isCompressedArrayTexture?K.compressedTexSubImage3D(Ft,Bt,Yt,ye,Se,qt,Lt,Kt,Xe,Ke.data):K.texSubImage3D(Ft,Bt,Yt,ye,Se,qt,Lt,Kt,Xe,vn,Ke):b.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Bt,Yt,ye,qt,Lt,Xe,vn,Ke.data):b.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Bt,Yt,ye,Ke.width,Ke.height,Xe,Ke.data):K.texSubImage2D(K.TEXTURE_2D,Bt,Yt,ye,qt,Lt,Xe,vn,Ke);y.pixelStorei(K.UNPACK_ROW_LENGTH,ln),y.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ne),y.pixelStorei(K.UNPACK_SKIP_PIXELS,Fn),y.pixelStorei(K.UNPACK_SKIP_ROWS,ni),y.pixelStorei(K.UNPACK_SKIP_IMAGES,ki),Bt===0&&X.generateMipmaps&&K.generateMipmap(Ft),y.unbindTexture()},this.initRenderTarget=function(b){ut.get(b).__webglFramebuffer===void 0&&gt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?gt.setTextureCube(b,0):b.isData3DTexture?gt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?gt.setTexture2DArray(b,0):gt.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){k=0,q=0,rt=null,y.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const ao=Math.PI/180,Hp=3,Px=7,ZC=.98,AS=10,KC=85,Qr=o=>1-(1-o)**3,Ix=o=>new ti().setFromEuler(new Ci(o.x*ao,o.y*ao,o.z*ao,"XYZ")),vl=o=>(o%360+540)%360-180,zx=o=>{const e=new nt(o.x,o.y,o.z),i=e.length();return i<1e-9?new nt(0,1,0):(e.divideScalar(i),o.w<0&&e.negate(),e)},QC=(o,e)=>{const i=f=>Ix({x:o.x+(e.x-o.x)*Qr(f),y:o.y+(e.y-o.y)*Qr(f),z:o.z+(e.z-o.z)*Qr(f)}),s=i(ZC),u=i(1);return zx(u.multiply(s.clone().invert()))},Bx=(o,e,i)=>{const s=Ix(o),u=zx(s.clone().invert().multiply(e)).applyQuaternion(s).normalize(),f=Math.random()*Math.PI,d=new ti().setFromAxisAngle(u,-f).multiply(e),h=new Ci().setFromQuaternion(d,"XYZ"),m={x:h.x/ao,y:h.y/ao,z:h.z/ao},p=[];for(let v=Hp;v<=Px;v++){const _=i-v;if(!(_<1))for(const T of[1,-1])for(const R of[1,-1])for(const O of[1,-1]){const M={x:o.x+T*360*v,y:o.y+R*360*_,z:o.z+O*360*i};M.x+=vl(m.x-M.x),M.y+=vl(m.y-M.y),M.z+=vl(m.z-M.z);const x=QC(o,M).dot(u);p.push({rotation:M,dot:x})}}const S=p.filter(v=>v.dot>0);return S.length>0?S[Math.floor(Math.random()*S.length)].rotation:p.reduce((v,_)=>_.dot>v.dot?_:v).rotation},JC=(o,e,i)=>{const s=Hp+Math.floor(Math.random()*(Px-Hp+1)),u=i-s,f=Math.random()<.5?-1:1,d=Math.random()<.5?-1:1,h=T=>T*(AS+Math.random()*(KC-AS)),m=h(f),p=h(d),S={x:o.x+f*360*s,y:o.y+d*360*u},v={x:S.x+vl(e.x-S.x-m),y:S.y+vl(e.y-S.y-p)},_={x:v.x+m,y:v.y+p};return{spun:v,landed:_}},zc={red:{hex:14034996,cssTop:[214,40,52],cssBottom:[140,18,28],label:"#ffffff"},green:{hex:1096065,cssTop:[16,185,129],cssBottom:[5,150,105],label:"#ecfdf5"},white:{hex:15790320,cssTop:[240,240,240],cssBottom:[200,200,200],label:"#111827"},black:{hex:1052691,cssTop:[16,16,19],cssBottom:[3,3,5],label:"#ffffff"},blue:{hex:1785819,cssTop:[27,63,219],cssBottom:[17,38,140],label:"#ffffff"},yellow:{hex:16761856,cssTop:[255,196,0],cssBottom:[214,152,0],label:"#111827"}},jC=[6,8,10],$C=["red","green","white","black","blue","yellow"],Kh={sides:6,color:"red",translucent:!0},t3={6:.85,8:.85,10:.9},fm=(o,e)=>e?t3[o]:1;function e3(){const o=new URLSearchParams(window.location.search),e=Number(o.get("s")),i=jC.includes(e)?e:Kh.sides,s=o.get("c")?.toLowerCase(),u=s!==void 0&&$C.includes(s)?s:Kh.color,f=(o.get("translucent")??o.get("t"))?.toLowerCase(),d=f==="true"?!0:f==="false"?!1:Kh.translucent;return{sides:i,color:u,translucent:d}}const RS={1:{name:"front",orientation:{x:0,y:0}},2:{name:"top",orientation:{x:-90,y:0}},3:{name:"right",orientation:{x:0,y:-90}},4:{name:"left",orientation:{x:0,y:90}},5:{name:"bottom",orientation:{x:90,y:0}},6:{name:"back",orientation:{x:0,y:180}}},n3={1:[[2,2]],2:[[1,1],[3,3]],3:[[1,1],[2,2],[3,3]],4:[[1,1],[1,3],[3,1],[3,3]],5:[[1,1],[1,3],[2,2],[3,1],[3,3]],6:[[1,1],[1,3],[2,1],[2,3],[3,1],[3,3]]},CS=65,wS=.5,i3=10,Qh=1500,DS=750,a3=260,NS=(o,e,i)=>Math.min(i,Math.max(e,o)),US=o=>Math.round(o*10)/10;function r3({value:o}){return ae.jsx(ae.Fragment,{children:n3[o].map(([e,i])=>ae.jsx("span",{className:"pip",style:{gridRow:e,gridColumn:i}},`${e}-${i}`))})}function s3({color:o="red",translucent:e=!0}){const[i,s]=kt.useState({x:0,y:0}),[u,f]=kt.useState({ms:0,easing:"linear"}),[d,h]=kt.useState(!1),[m,p]=kt.useState(!1),[S,v]=kt.useState(null),[_,T]=kt.useState(null),R=kt.useRef(null),O=kt.useRef(i),M=kt.useRef({x:0,y:0}),x=kt.useRef(null),w=kt.useRef(null),H=kt.useRef([]);O.current=i;const C=zc[o],N=fm(6,e),D=`rgb(${C.cssTop.join(" ")} / ${N})`,I=`rgb(${C.cssBottom.join(" ")} / ${N})`,E=kt.useCallback((Z,V,J="ease-out")=>{f({ms:V,easing:J}),s(Z)},[]),L=kt.useCallback(async()=>{h(!0),v(null),T(null);try{const Z=await Zp(6),V=RS[Z],J=O.current,{spun:k,landed:q}=JC(J,V.orientation,i3);E(k,Qh,"cubic-bezier(0.4, 0, 0.35, 1)"),H.current.push(setTimeout(()=>{M.current=q,E(q,DS,"cubic-bezier(0.22, 1, 0.36, 1)")},Qh)),H.current.push(setTimeout(()=>{h(!1),v(Z)},Qh+DS))}catch(Z){h(!1),T(Z instanceof Error?Z.message:"Roll failed.")}},[E]),U=kt.useCallback(Z=>{if(d)return;const V=Z.currentTarget.getBoundingClientRect();x.current={centerX:V.left+V.width/2,centerY:V.top+V.height/2,halfWidth:V.width/2,halfHeight:V.height/2,nx:0,ny:0},Z.currentTarget.setPointerCapture(Z.pointerId),p(!0),f({ms:0,easing:"linear"})},[d]),z=kt.useCallback(Z=>{const V=x.current;V&&(V.nx=NS((Z.clientX-V.centerX)/V.halfWidth,-1,1),V.ny=NS((Z.clientY-V.centerY)/V.halfHeight,-1,1),!w.current&&(w.current=requestAnimationFrame(()=>{w.current=null;const J=M.current;s({x:US(J.x-V.ny*CS),y:US(J.y+V.nx*CS)})})))},[]),G=kt.useCallback(()=>{const Z=x.current;if(!Z)return;x.current=null,p(!1),w.current&&(cancelAnimationFrame(w.current),w.current=null),Math.abs(Z.nx)>=wS||Math.abs(Z.ny)>=wS?L():E(M.current,a3,"cubic-bezier(0.34, 1.3, 0.64, 1)")},[E,L]);return kt.useEffect(()=>{const Z=H.current;return()=>{Z.forEach(clearTimeout),w.current&&cancelAnimationFrame(w.current)}},[]),ae.jsxs("div",{ref:R,className:"stage",style:{"--face-top":D,"--face-bottom":I,"--die-fg":C.label},onPointerDown:U,onPointerMove:z,onPointerUp:G,onPointerCancel:G,children:[ae.jsx("div",{className:"scene",children:ae.jsx("div",{className:`cube${d?" is-rolling":""}${m?" is-dragging":""}`,style:{transform:`translateZ(0) rotateX(${i.x}deg) rotateY(${i.y}deg)`,transitionDuration:`${u.ms}ms`,transitionTimingFunction:u.easing},children:Object.entries(RS).map(([Z,V])=>ae.jsx("div",{className:`face face--${V.name}`,"data-value":Z,children:ae.jsx("div",{className:"pips",children:ae.jsx(r3,{value:Number(Z)})})},Z))})}),ae.jsx("p",{className:"hint",children:d?"Rolling...":_||(S?`You rolled ${S}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const LS=65,OS=.5,o3=10,l3=1500,u3=750,c3=260,ro=Math.PI/180,PS=1.08,IS=.864,zS=(o,e,i)=>Math.min(i,Math.max(e,o)),f3=[[1,1,1],[-1,1,1],[-1,1,-1],[1,1,-1],[1,-1,1],[-1,-1,1],[-1,-1,-1],[1,-1,-1]],d3=o=>{const e=new nt(...o).normalize(),i=Math.abs(e.y)>.9?new nt(0,0,1):new nt(0,1,0),s=i.clone().sub(e.clone().multiplyScalar(i.dot(e))).normalize(),u=new nt().crossVectors(s,e).normalize(),f=new nn().makeBasis(u,s,e);return{normal:e,up:s,orientation:new ti().setFromRotationMatrix(f)}},BS=f3.map(d3),h3=o=>{const e=new nt(0,0,1);return new ti().setFromUnitVectors(o.normal,e)},p3="#ffffff",FS=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const s=i.getContext("2d");if(!s)return null;s.font="700 200px dice-font, system-ui, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillStyle=e,s.shadowColor="rgba(0, 0, 0, 0.35)",s.shadowBlur=6,s.fillText(String(o),128,136);const u=new vx(i);u.colorSpace=Jn;const f=new Oc({map:u,transparent:!0,side:Ia,depthWrite:!1});return new mi(new uo(IS,IS),f)},m3=o=>{const e=new Ci().setFromQuaternion(o,"XYZ");return{x:e.x/ro,y:e.y/ro,z:e.z/ro}};function g3({color:o="red",translucent:e=!0}){const i=kt.useRef(null),s=kt.useRef(null),u=kt.useRef(null),f=kt.useRef(null),d=kt.useRef(null),h=kt.useRef({x:0,y:0,z:0}),m=kt.useRef({x:0,y:0,z:0}),p=kt.useRef(null),S=kt.useRef(!1),[v,_]=kt.useState(!1),[T,R]=kt.useState(!1),[O,M]=kt.useState(null),[x,w]=kt.useState(null),H=kt.useCallback(U=>{h.current=U,s.current?.rotation.set(U.x*ro,U.y*ro,U.z*ro)},[]),C=kt.useCallback((U,z)=>{d.current&&cancelAnimationFrame(d.current);const G={...h.current},Z=performance.now();return new Promise(V=>{const J=k=>{const q=Math.min((k-Z)/z,1),rt=Qr(q);H({x:G.x+(U.x-G.x)*rt,y:G.y+(U.y-G.y)*rt,z:G.z+(U.z-G.z)*rt}),q<1?d.current=requestAnimationFrame(J):(d.current=null,V())};d.current=requestAnimationFrame(J)})},[H]),N=kt.useCallback((U,z)=>{d.current&&cancelAnimationFrame(d.current);const G=s.current;if(!G)return Promise.resolve();const Z=G.quaternion.clone(),V=performance.now();return new Promise(J=>{const k=q=>{const rt=Math.min((q-V)/z,1);G.quaternion.slerpQuaternions(Z,U,Qr(rt)),h.current=m3(G.quaternion),rt<1?d.current=requestAnimationFrame(k):(d.current=null,J())};d.current=requestAnimationFrame(k)})},[]),D=kt.useCallback(async()=>{S.current=!0,_(!0),M(null),w(null);try{const U=await Zp(8),z=h3(BS[U-1]),G=h.current,Z=Bx(G,z,o3);await C(Z,l3),await N(z,u3),m.current=h.current,_(!1),S.current=!1,M(U)}catch(U){_(!1),S.current=!1,w(U instanceof Error?U.message:"Roll failed.")}},[N,C]),I=kt.useCallback(U=>{if(S.current)return;const z=U.currentTarget.getBoundingClientRect();p.current={centerX:z.left+z.width/2,centerY:z.top+z.height/2,halfWidth:z.width/2,halfHeight:z.height/2,nx:0,ny:0},U.currentTarget.setPointerCapture(U.pointerId),R(!0)},[]),E=kt.useCallback(U=>{const z=p.current;!z||S.current||(z.nx=zS((U.clientX-z.centerX)/z.halfWidth,-1,1),z.ny=zS((U.clientY-z.centerY)/z.halfHeight,-1,1),!f.current&&(f.current=requestAnimationFrame(()=>{f.current=null;const G=m.current;H({x:G.x-z.ny*LS,y:G.y+z.nx*LS,z:G.z})})))},[H]),L=kt.useCallback(()=>{const U=p.current;if(!U)return;p.current=null,R(!1),f.current&&(cancelAnimationFrame(f.current),f.current=null),Math.abs(U.nx)>=OS||Math.abs(U.ny)>=OS?D():C(m.current,c3)},[C,D]);return kt.useEffect(()=>{const U=i.current;if(!U)return;const z=new px,G=new hi(28,1,.1,100);G.position.set(0,0,7),G.lookAt(0,0,0);const Z=new Ox({alpha:!0,antialias:!0});Z.setPixelRatio(Math.min(window.devicePixelRatio,2)),Z.setClearColor(0,0),U.appendChild(Z.domElement);const V=zc[o],J=fm(8,e),k=new mi(new lm(1.7,0),new Mx({color:V.hex,roughness:.46,metalness:.08,flatShading:!0,transparent:e,opacity:J,depthWrite:!e})),q=new ti().setFromAxisAngle(new nt(0,1,0),Math.PI),rt=()=>{BS.forEach((It,F)=>{const pt=F+1,bt=FS(pt,V.label);if(!bt)return;bt.position.copy(It.normal).multiplyScalar(PS),bt.quaternion.copy(It.orientation),k.add(bt);const Y=FS(pt,p3);Y&&(Y.renderOrder=-1,Y.position.copy(It.normal).multiplyScalar(PS-.2),Y.quaternion.copy(It.orientation).multiply(q),k.add(Y))})};document.fonts.load("700 200px dice-font").then(rt),z.add(k),z.add(new bx(16777215,1)),z.add(new yx(16777215,12303291,1));const at=new Tx(16777215,1);at.position.set(3,4,5),z.add(at),s.current=k;const ht=()=>{const It=U.clientWidth,F=U.clientHeight;Z.setSize(It,F,!1),G.aspect=It/F,G.updateProjectionMatrix()},Mt=new ResizeObserver(ht);Mt.observe(U),ht();const Wt=()=>{u.current=requestAnimationFrame(Wt),Z.render(z,G)};return Wt(),()=>{Mt.disconnect(),u.current&&cancelAnimationFrame(u.current),d.current&&cancelAnimationFrame(d.current),k.geometry.dispose(),k.material.dispose(),k.children.forEach(It=>{const F=It;F.geometry.dispose(),F.material.map?.dispose(),F.material.dispose()}),Z.dispose(),U.removeChild(Z.domElement),s.current=null}},[o,e]),ae.jsxs("div",{className:`stage stage--eight-sided${T?" is-dragging":""}`,onPointerDown:I,onPointerMove:E,onPointerUp:L,onPointerCancel:L,children:[ae.jsx("div",{ref:i,className:"three-scene"}),ae.jsx("p",{className:"hint",children:v?"Rolling...":x||(O?`You rolled ${O}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const HS=65,GS=.5,_3=10,v3=1500,S3=750,x3=260,so=Math.PI/180,VS=.7,Fx=2.2,M3=.85,Nc=Fx*.9*M3,_r=Fx*.65,Gp=Nc*.105573,Vp=Nc*.8,Sc=(Nc-Vp)/(Nc-Gp),Xp=[...[0,1,2,3,4].map(o=>[Sc*_r*Math.cos(o*2*Math.PI/5),Vp,Sc*_r*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Sc*_r*Math.cos((o+.5)*2*Math.PI/5),-Vp,Sc*_r*Math.sin((o+.5)*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[_r*Math.cos(o*2*Math.PI/5),Gp,_r*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[_r*Math.cos((o+.5)*2*Math.PI/5),-Gp,_r*Math.sin((o+.5)*2*Math.PI/5)])],kp=[[0,10,15,11,1],[1,11,16,12,2],[2,12,17,13,3],[3,13,18,14,4],[4,14,19,10,0],[5,6,16,11,15],[6,7,17,12,16],[7,8,18,13,17],[8,9,19,14,18],[9,5,15,10,19],[0,1,2,3,4],[5,6,7,8,9]],Wp=[1,3,5,7,9,8,6,4,2,10],XS=(o,e,i)=>Math.min(i,Math.max(e,o)),Hx=(o,e)=>{const[i,s,u]=o,f=[s[0]-i[0],s[1]-i[1],s[2]-i[2]],d=[u[0]-i[0],u[1]-i[1],u[2]-i[2]],h=f[1]*d[2]-f[2]*d[1],m=f[2]*d[0]-f[0]*d[2],p=f[0]*d[1]-f[1]*d[0],S=Math.sqrt(h*h+m*m+p*p),v=new nt(h/S,m/S,p/S);return v.dot(e)<0&&v.negate(),v},qp=o=>{const e=o.reduce((u,f)=>u+f[0],0)/o.length,i=o.reduce((u,f)=>u+f[1],0)/o.length,s=o.reduce((u,f)=>u+f[2],0)/o.length;return new nt(e,i,s)},y3=o=>{const e=kp[o].map(m=>Xp[m]),i=qp(e),s=Hx(e,i),u=Math.abs(s.y)>.9?new nt(0,0,1):new nt(0,1,0),f=u.clone().sub(s.clone().multiplyScalar(u.dot(s))).normalize(),d=new nt().crossVectors(f,s).normalize(),h=new nn().makeBasis(d,f,s);return{normal:s,up:f,orientation:new ti().setFromRotationMatrix(h)}},kS=Array.from({length:Wp.length},(o,e)=>y3(e)),E3=o=>{const e=new nt(0,0,1);return new ti().setFromUnitVectors(o.normal,e)},T3="#ffffff",WS=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const s=i.getContext("2d");if(!s)return null;s.font="700 180px dice-font, system-ui, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillStyle=e,s.fillText(String(o===10?0:o),128,136);const u=new vx(i);u.colorSpace=Jn;const f=new Oc({map:u,transparent:!0,side:Ia,depthWrite:!1});return new mi(new uo(VS,VS),f)},b3=o=>{const e=new Ci().setFromQuaternion(o,"XYZ");return{x:e.x/so,y:e.y/so,z:e.z/so}};function A3({color:o="red",translucent:e=!0}){const i=kt.useRef(null),s=kt.useRef(null),u=kt.useRef(null),f=kt.useRef(null),d=kt.useRef(null),h=kt.useRef({x:0,y:0,z:0}),m=kt.useRef({x:0,y:0,z:0}),p=kt.useRef(null),S=kt.useRef(!1),[v,_]=kt.useState(!1),[T,R]=kt.useState(!1),[O,M]=kt.useState(null),[x,w]=kt.useState(null),H=kt.useCallback(U=>{h.current=U,s.current?.rotation.set(U.x*so,U.y*so,U.z*so)},[]),C=kt.useCallback((U,z)=>{d.current&&cancelAnimationFrame(d.current);const G={...h.current},Z=performance.now();return new Promise(V=>{const J=k=>{const q=Math.min((k-Z)/z,1),rt=Qr(q);H({x:G.x+(U.x-G.x)*rt,y:G.y+(U.y-G.y)*rt,z:G.z+(U.z-G.z)*rt}),q<1?d.current=requestAnimationFrame(J):(d.current=null,V())};d.current=requestAnimationFrame(J)})},[H]),N=kt.useCallback((U,z)=>{d.current&&cancelAnimationFrame(d.current);const G=s.current;if(!G)return Promise.resolve();const Z=G.quaternion.clone(),V=performance.now();return new Promise(J=>{const k=q=>{const rt=Math.min((q-V)/z,1);G.quaternion.slerpQuaternions(Z,U,Qr(rt)),h.current=b3(G.quaternion),rt<1?d.current=requestAnimationFrame(k):(d.current=null,J())};d.current=requestAnimationFrame(k)})},[]),D=kt.useCallback(async()=>{S.current=!0,_(!0),M(null),w(null);try{const U=await Zp(10),z=Wp.indexOf(U),G=E3(kS[z]),Z=h.current,V=Bx(Z,G,_3);await C(V,v3),await N(G,S3),m.current=h.current,_(!1),S.current=!1,M(U)}catch(U){_(!1),S.current=!1,w(U instanceof Error?U.message:"Roll failed.")}},[N,C]),I=kt.useCallback(U=>{if(S.current)return;const z=U.currentTarget.getBoundingClientRect();p.current={centerX:z.left+z.width/2,centerY:z.top+z.height/2,halfWidth:z.width/2,halfHeight:z.height/2,nx:0,ny:0},U.currentTarget.setPointerCapture(U.pointerId),R(!0)},[]),E=kt.useCallback(U=>{const z=p.current;!z||S.current||(z.nx=XS((U.clientX-z.centerX)/z.halfWidth,-1,1),z.ny=XS((U.clientY-z.centerY)/z.halfHeight,-1,1),!f.current&&(f.current=requestAnimationFrame(()=>{f.current=null;const G=m.current;H({x:G.x-z.ny*HS,y:G.y+z.nx*HS,z:G.z})})))},[H]),L=kt.useCallback(()=>{const U=p.current;if(!U)return;p.current=null,R(!1),f.current&&(cancelAnimationFrame(f.current),f.current=null),Math.abs(U.nx)>=GS||Math.abs(U.ny)>=GS?D():C(m.current,x3)},[C,D]);return kt.useEffect(()=>{const U=i.current;if(!U)return;const z=new px,G=new hi(28,1,.1,100);G.position.set(0,0,7),G.lookAt(0,0,0);const Z=new Ox({alpha:!0,antialias:!0});Z.setPixelRatio(Math.min(window.devicePixelRatio,2)),Z.setClearColor(0,0),U.appendChild(Z.domElement);const V=new Gi,J=[],k=[];for(const bt of kp){const Y=bt.map(K=>Xp[K]),ct=qp(Y),Et=Hx(Y,ct),Ct=Et.x,mt=Et.y,At=Et.z,[Ae,ue,me]=Y,fe=[ue[0]-Ae[0],ue[1]-Ae[1],ue[2]-Ae[2]],$t=[me[0]-Ae[0],me[1]-Ae[1],me[2]-Ae[2]],ne=fe[1]*$t[2]-fe[2]*$t[1],Fe=fe[2]*$t[0]-fe[0]*$t[2],on=fe[0]*$t[1]-fe[1]*$t[0],Ve=ne*ct.x+Fe*ct.y+on*ct.z>=0?Y:[...Y].reverse();for(let K=1;K<Ve.length-1;K++)J.push(...Ve[0],...Ve[K],...Ve[K+1]),k.push(Ct,mt,At,Ct,mt,At,Ct,mt,At)}V.setAttribute("position",new $n(J,3)),V.setAttribute("normal",new $n(k,3));const q=zc[o],rt=fm(10,e),at=new mi(V,new Mx({color:q.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:rt,depthWrite:!e})),ht=new ti().setFromAxisAngle(new nt(0,1,0),Math.PI),Mt=()=>{kS.forEach((bt,Y)=>{const ct=Wp[Y],Et=WS(ct,q.label);if(!Et)return;const Ct=qp(kp[Y].map(At=>Xp[At]));Et.position.copy(Ct),Et.position.addScaledVector(bt.normal,.01),Et.quaternion.copy(bt.orientation),at.add(Et);const mt=WS(ct,T3);mt&&(mt.renderOrder=-1,mt.position.copy(Ct),mt.position.addScaledVector(bt.normal,-.05),mt.quaternion.copy(bt.orientation).multiply(ht),at.add(mt))})};document.fonts.load("700 180px dice-font").then(Mt),z.add(at),z.add(new bx(16777215,1)),z.add(new yx(16777215,12303291,1));const Wt=new Tx(16777215,1);Wt.position.set(3,4,5),z.add(Wt),s.current=at;const It=()=>{const bt=U.clientWidth,Y=U.clientHeight;Z.setSize(bt,Y,!1),G.aspect=bt/Y,G.updateProjectionMatrix()},F=new ResizeObserver(It);F.observe(U),It();const pt=()=>{u.current=requestAnimationFrame(pt),Z.render(z,G)};return pt(),()=>{F.disconnect(),u.current&&cancelAnimationFrame(u.current),d.current&&cancelAnimationFrame(d.current),V.dispose(),at.material.dispose(),at.children.forEach(bt=>{const Y=bt;Y.geometry.dispose(),Y.material.map?.dispose(),Y.material.dispose()}),Z.dispose(),U.removeChild(Z.domElement),s.current=null}},[o,e]),ae.jsxs("div",{className:`stage stage--ten-sided${T?" is-dragging":""}`,onPointerDown:I,onPointerMove:E,onPointerUp:L,onPointerCancel:L,children:[ae.jsx("div",{ref:i,className:"three-scene"}),ae.jsx("p",{className:"hint",children:v?"Rolling...":x||(O!==null?`You rolled ${O}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}function R3({sides:o=6,color:e="red",translucent:i=!0}){return o===6?ae.jsx(s3,{color:e,translucent:i}):o===8?ae.jsx(g3,{color:e,translucent:i}):o===10?ae.jsx(A3,{color:e,translucent:i}):null}const C3=[0,45,90,135];function w3({isOpen:o,onClick:e,ref:i}){return ae.jsx("button",{ref:i,type:"button",className:"icon-button settings-button","aria-label":"Settings","aria-haspopup":"dialog","aria-expanded":o,onClick:e,children:ae.jsxs("span",{className:"settings-button__cog","aria-hidden":"true",children:[C3.map(s=>ae.jsx("span",{className:`settings-button__tooth settings-button__tooth--${s}`},s)),ae.jsx("span",{className:"settings-button__hub"})]})})}const D3='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',N3=[6,8,10],U3=["red","yellow","green","blue","black","white"];function L3({sides:o,color:e,translucent:i,onSettingsChange:s,onClose:u}){const f=kt.useRef(null),d=kt.useRef(null);return kt.useEffect(()=>{d.current?.focus();const h=m=>{if(m.key==="Escape"){u();return}if(m.key!=="Tab")return;const p=f.current;if(!p)return;const S=Array.from(p.querySelectorAll(D3));if(S.length===0)return;const v=S[0],_=S[S.length-1],T=document.activeElement;if(!p.contains(T)){m.preventDefault(),(m.shiftKey?_:v).focus();return}m.shiftKey&&T===v?(m.preventDefault(),_.focus()):!m.shiftKey&&T===_&&(m.preventDefault(),v.focus())};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[u]),ae.jsxs("div",{ref:f,className:"settings-dialog",role:"dialog","aria-modal":"true","aria-label":"Settings",children:[ae.jsxs("div",{className:"settings-dialog__content",children:[ae.jsx("fieldset",{className:"sides-picker","aria-label":"Sides",children:ae.jsx("div",{className:"sides-picker__options",children:N3.map((h,m)=>ae.jsxs(kt.Fragment,{children:[m>0&&ae.jsx("span",{className:"sides-picker__divider","aria-hidden":"true"}),ae.jsxs("span",{className:"sides-picker__option",children:[ae.jsx("input",{className:"sides-picker__input",type:"radio",name:"sides",id:`sides-${h}`,value:h,checked:o===h,onChange:()=>s({sides:h})}),ae.jsx("label",{className:"sides-picker__label",htmlFor:`sides-${h}`,children:h})]})]},h))})}),ae.jsx("fieldset",{className:"color-picker","aria-label":"Color",children:ae.jsx("div",{className:"color-picker__options",children:U3.map(h=>ae.jsxs("span",{className:"color-picker__option",children:[ae.jsx("input",{className:"color-picker__input",type:"radio",name:"color",id:`color-${h}`,value:h,checked:e===h,"aria-label":h,onChange:()=>s({color:h})}),ae.jsx("label",{className:"color-picker__label",htmlFor:`color-${h}`,style:{backgroundColor:`rgb(${zc[h].cssTop.join(" ")})`}})]},h))})}),ae.jsxs("label",{className:"translucent-toggle",children:[ae.jsx("input",{className:"translucent-toggle__input",type:"checkbox",checked:i,onChange:h=>s({translucent:h.target.checked})}),ae.jsx("span",{className:"translucent-toggle__text",children:"Translucent"}),ae.jsx("span",{className:"translucent-toggle__track","aria-hidden":"true",children:ae.jsx("span",{className:"translucent-toggle__knob"})})]})]}),ae.jsx("button",{ref:d,type:"button",className:"icon-button settings-dialog__close","aria-label":"Close",onClick:u,children:ae.jsxs("span",{className:"settings-dialog__x","aria-hidden":"true",children:[ae.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--45"}),ae.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--135"})]})})]})}function O3(){const[o,e]=kt.useState(()=>e3()),[i,s]=kt.useState(!1),u=kt.useRef(null),f=kt.useCallback(h=>{e(m=>({...m,...h}))},[]),d=kt.useCallback(()=>{s(!1),u.current?.focus()},[]);return ae.jsxs(ae.Fragment,{children:[ae.jsx(w3,{ref:u,isOpen:i,onClick:()=>s(!0)}),i&&ae.jsx(L3,{sides:o.sides,color:o.color,translucent:o.translucent,onSettingsChange:f,onClose:d}),ae.jsx(R3,{sides:o.sides,color:o.color,translucent:o.translucent})]})}const Gx=document.getElementById("root");if(!Gx)throw new Error("Root element was not found.");DE.createRoot(Gx).render(ae.jsx(kt.StrictMode,{children:ae.jsx(O3,{})}));

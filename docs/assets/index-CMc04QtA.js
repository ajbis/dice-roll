(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const c of u)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(u){const c={};return u.integrity&&(c.integrity=u.integrity),u.referrerPolicy&&(c.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?c.credentials="include":u.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(u){if(u.ep)return;u.ep=!0;const c=i(u);fetch(u.href,c)}})();var yh={exports:{}},cl={};var Fv;function qE(){if(Fv)return cl;Fv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,u,c){var d=null;if(c!==void 0&&(d=""+c),u.key!==void 0&&(d=""+u.key),"key"in u){c={};for(var h in u)h!=="key"&&(c[h]=u[h])}else c=u;return u=c.ref,{$$typeof:o,type:r,key:d,ref:u!==void 0?u:null,props:c}}return cl.Fragment=e,cl.jsx=i,cl.jsxs=i,cl}var Bv;function WE(){return Bv||(Bv=1,yh.exports=qE()),yh.exports}var ee=WE(),Eh={exports:{}},fe={};var Hv;function YE(){if(Hv)return fe;Hv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),T=Symbol.iterator;function C(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function N(V,mt,vt){this.props=V,this.context=mt,this.refs=x,this.updater=vt||P}N.prototype.isReactComponent={},N.prototype.setState=function(V,mt){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,mt,"setState")},N.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function G(){}G.prototype=N.prototype;function w(V,mt,vt){this.props=V,this.context=mt,this.refs=x,this.updater=vt||P}var L=w.prototype=new G;L.constructor=w,M(L,N.prototype),L.isPureReactComponent=!0;var U=Array.isArray;function F(){}var E={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function R(V,mt,vt){var X=vt.ref;return{$$typeof:o,type:V,key:mt,ref:X!==void 0?X:null,props:vt}}function D(V,mt){return R(V.type,mt,V.props)}function I(V){return typeof V=="object"&&V!==null&&V.$$typeof===o}function k(V){var mt={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(vt){return mt[vt]})}var H=/\/+/g;function Q(V,mt){return typeof V=="object"&&V!==null&&V.key!=null?k(""+V.key):mt.toString(36)}function q(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(F,F):(V.status="pending",V.then(function(mt){V.status==="pending"&&(V.status="fulfilled",V.value=mt)},function(mt){V.status==="pending"&&(V.status="rejected",V.reason=mt)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function W(V,mt,vt,X,rt){var St=typeof V;(St==="undefined"||St==="boolean")&&(V=null);var Ct=!1;if(V===null)Ct=!0;else switch(St){case"bigint":case"string":case"number":Ct=!0;break;case"object":switch(V.$$typeof){case o:case e:Ct=!0;break;case S:return Ct=V._init,W(Ct(V._payload),mt,vt,X,rt)}}if(Ct)return rt=rt(V),Ct=X===""?"."+Q(V,0):X,U(rt)?(vt="",Ct!=null&&(vt=Ct.replace(H,"$&/")+"/"),W(rt,mt,vt,"",function(le){return le})):rt!=null&&(I(rt)&&(rt=D(rt,vt+(rt.key==null||V&&V.key===rt.key?"":(""+rt.key).replace(H,"$&/")+"/")+Ct)),mt.push(rt)),1;Ct=0;var ft=X===""?".":X+":";if(U(V))for(var Rt=0;Rt<V.length;Rt++)X=V[Rt],St=ft+Q(X,Rt),Ct+=W(X,mt,vt,St,rt);else if(Rt=C(V),typeof Rt=="function")for(V=Rt.call(V),Rt=0;!(X=V.next()).done;)X=X.value,St=ft+Q(X,Rt++),Ct+=W(X,mt,vt,St,rt);else if(St==="object"){if(typeof V.then=="function")return W(q(V),mt,vt,X,rt);throw mt=String(V),Error("Objects are not valid as a React child (found: "+(mt==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":mt)+"). If you meant to render a collection of children, use an array instead.")}return Ct}function tt(V,mt,vt){if(V==null)return V;var X=[],rt=0;return W(V,X,"","",function(St){return mt.call(vt,St,rt++)}),X}function it(V){if(V._status===-1){var mt=V._result,vt=mt();vt.then(function(X){(V._status===0||V._status===-1)&&(V._status=1,V._result=X,vt.status===void 0&&(vt.status="fulfilled",vt.value=X))},function(X){(V._status===0||V._status===-1)&&(V._status=2,V._result=X,vt.status===void 0&&(vt.status="rejected",vt.reason=X))}),V._status===-1&&(V._status=0,V._result=vt)}if(V._status===1)return V._result.default;throw V._result}var pt=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var mt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(mt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)};function xt(V){var mt=E.T,vt={};vt.types=mt!==null?mt.types:null,E.T=vt;try{var X=V(),rt=E.S;rt!==null&&rt(vt,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(F,pt)}catch(St){pt(St)}finally{mt!==null&&vt.types!==null&&(mt.types=vt.types),E.T=mt}}function Bt(V){var mt=E.T;if(mt!==null){var vt=mt.types;vt===null?mt.types=[V]:vt.indexOf(V)===-1&&vt.push(V)}else xt(Bt.bind(null,V))}var Dt={map:tt,forEach:function(V,mt,vt){tt(V,function(){mt.apply(this,arguments)},vt)},count:function(V){var mt=0;return tt(V,function(){mt++}),mt},toArray:function(V){return tt(V,function(mt){return mt})||[]},only:function(V){if(!I(V))throw Error("React.Children.only expected to receive a single React element child.");return V}};return fe.Activity=_,fe.Children=Dt,fe.Component=N,fe.Fragment=i,fe.Profiler=u,fe.PureComponent=w,fe.StrictMode=r,fe.Suspense=p,fe.ViewTransition=v,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,fe.__COMPILER_RUNTIME={__proto__:null,c:function(V){return E.H.useMemoCache(V)}},fe.addTransitionType=Bt,fe.cache=function(V){return function(){return V.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(V,mt,vt){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var X=M({},V.props),rt=V.key;if(mt!=null)for(St in mt.key!==void 0&&(rt=""+mt.key),mt)!O.call(mt,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&mt.ref===void 0||(X[St]=mt[St]);var St=arguments.length-2;if(St===1)X.children=vt;else if(1<St){for(var Ct=Array(St),ft=0;ft<St;ft++)Ct[ft]=arguments[ft+2];X.children=Ct}return R(V.type,rt,X)},fe.createContext=function(V){return V={$$typeof:d,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:c,_context:V},V},fe.createElement=function(V,mt,vt){var X,rt={},St=null;if(mt!=null)for(X in mt.key!==void 0&&(St=""+mt.key),mt)O.call(mt,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(rt[X]=mt[X]);var Ct=arguments.length-2;if(Ct===1)rt.children=vt;else if(1<Ct){for(var ft=Array(Ct),Rt=0;Rt<Ct;Rt++)ft[Rt]=arguments[Rt+2];rt.children=ft}if(V&&V.defaultProps)for(X in Ct=V.defaultProps,Ct)rt[X]===void 0&&(rt[X]=Ct[X]);return R(V,St,rt)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(V){return{$$typeof:h,render:V}},fe.isValidElement=I,fe.lazy=function(V){return{$$typeof:S,_payload:{_status:-1,_result:V},_init:it}},fe.memo=function(V,mt){return{$$typeof:m,type:V,compare:mt===void 0?null:mt}},fe.startTransition=xt,fe.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},fe.use=function(V){return E.H.use(V)},fe.useActionState=function(V,mt,vt){return E.H.useActionState(V,mt,vt)},fe.useCallback=function(V,mt){return E.H.useCallback(V,mt)},fe.useContext=function(V){return E.H.useContext(V)},fe.useDebugValue=function(){},fe.useDeferredValue=function(V,mt){return E.H.useDeferredValue(V,mt)},fe.useEffect=function(V,mt){return E.H.useEffect(V,mt)},fe.useEffectEvent=function(V){return E.H.useEffectEvent(V)},fe.useId=function(){return E.H.useId()},fe.useImperativeHandle=function(V,mt,vt){return E.H.useImperativeHandle(V,mt,vt)},fe.useInsertionEffect=function(V,mt){return E.H.useInsertionEffect(V,mt)},fe.useLayoutEffect=function(V,mt){return E.H.useLayoutEffect(V,mt)},fe.useMemo=function(V,mt){return E.H.useMemo(V,mt)},fe.useOptimistic=function(V,mt){return E.H.useOptimistic(V,mt)},fe.useReducer=function(V,mt,vt){return E.H.useReducer(V,mt,vt)},fe.useRef=function(V){return E.H.useRef(V)},fe.useState=function(V){return E.H.useState(V)},fe.useSyncExternalStore=function(V,mt,vt){return E.H.useSyncExternalStore(V,mt,vt)},fe.useTransition=function(){return E.H.useTransition()},fe.version="19.3.0",fe}var Gv;function hm(){return Gv||(Gv=1,Eh.exports=YE()),Eh.exports}var bt=hm(),Th={exports:{}},fl={},bh={exports:{}},Ah={};var Vv;function ZE(){return Vv||(Vv=1,(function(o){function e(q,W){var tt=q.length;q.push(W);t:for(;0<tt;){var it=tt-1>>>1,pt=q[it];if(0<u(pt,W))q[it]=W,q[tt]=pt,tt=it;else break t}}function i(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var W=q[0],tt=q.pop();if(tt!==W){q[0]=tt;t:for(var it=0,pt=q.length,xt=pt>>>1;it<xt;){var Bt=2*(it+1)-1,Dt=q[Bt],V=Bt+1,mt=q[V];if(0>u(Dt,tt))V<pt&&0>u(mt,Dt)?(q[it]=mt,q[V]=tt,it=V):(q[it]=Dt,q[Bt]=tt,it=Bt);else if(V<pt&&0>u(mt,tt))q[it]=mt,q[V]=tt,it=V;else break t}}return W}function u(q,W){var tt=q.sortIndex-W.sortIndex;return tt!==0?tt:q.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],S=1,_=null,v=3,T=!1,C=!1,P=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function w(q){for(var W=i(m);W!==null;){if(W.callback===null)r(m);else if(W.startTime<=q)r(m),W.sortIndex=W.expirationTime,e(p,W);else break;W=i(m)}}function L(q){if(P=!1,w(q),!C)if(i(p)!==null)C=!0,U||(U=!0,I());else{var W=i(m);W!==null&&Q(L,W.startTime-q)}}var U=!1,F=-1,E=5,O=-1;function R(){return M?!0:!(o.unstable_now()-O<E)}function D(){if(M=!1,U){var q=o.unstable_now();O=q;var W=!0;try{t:{C=!1,P&&(P=!1,N(F),F=-1),T=!0;var tt=v;try{e:{for(w(q),_=i(p);_!==null&&!(_.expirationTime>q&&R());){var it=_.callback;if(typeof it=="function"){_.callback=null,v=_.priorityLevel;var pt=it(_.expirationTime<=q);if(q=o.unstable_now(),typeof pt=="function"){_.callback=pt,w(q),W=!0;break e}_===i(p)&&r(p),w(q)}else r(p);_=i(p)}if(_!==null)W=!0;else{var xt=i(m);xt!==null&&Q(L,xt.startTime-q),W=!1}}break t}finally{_=null,v=tt,T=!1}W=void 0}}finally{W?I():U=!1}}}var I;if(typeof G=="function")I=function(){G(D)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,H=k.port2;k.port1.onmessage=D,I=function(){H.postMessage(null)}}else I=function(){x(D,0)};function Q(q,W){F=x(function(){q(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(q){switch(v){case 1:case 2:case 3:var W=3;break;default:W=v}var tt=v;v=W;try{return q()}finally{v=tt}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(q,W){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var tt=v;v=q;try{return W()}finally{v=tt}},o.unstable_scheduleCallback=function(q,W,tt){var it=o.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?it+tt:it):tt=it,q){case 1:var pt=-1;break;case 2:pt=250;break;case 5:pt=1073741823;break;case 4:pt=1e4;break;default:pt=5e3}return pt=tt+pt,q={id:S++,callback:W,priorityLevel:q,startTime:tt,expirationTime:pt,sortIndex:-1},tt>it?(q.sortIndex=tt,e(m,q),i(p)===null&&q===i(m)&&(P?(N(F),F=-1):P=!0,Q(L,tt-it))):(q.sortIndex=pt,e(p,q),C||T||(C=!0,U||(U=!0,I()))),q},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(q){var W=v;return function(){var tt=v;v=W;try{return q.apply(this,arguments)}finally{v=tt}}}})(Ah)),Ah}var Xv;function KE(){return Xv||(Xv=1,bh.exports=ZE()),bh.exports}var Rh={exports:{}},Ln={};var kv;function QE(){if(kv)return Ln;kv=1;var o=hm();function e(S){var _="https://react.dev/errors/"+S;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)_+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+S+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(S,_,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:T==null?null:T===d?d:""+T,children:S,containerInfo:_,implementation:v}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(S,_){if(S==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.browser=function(S){return{$$typeof:c,_reason:S}},Ln.createPortal=function(S,_){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(e(299));return h(S,_,null,v)},Ln.flushSync=function(S){var _=p.T,v=r.p;try{if(p.T=null,r.p=2,S)return S()}finally{p.T=_,r.p=v,r.d.f()}},Ln.preconnect=function(S,_){typeof S=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,r.d.C(S,_))},Ln.prefetchDNS=function(S){typeof S=="string"&&r.d.D(S)},Ln.preinit=function(S,_){if(typeof S=="string"&&_&&typeof _.as=="string"){var v=_.as,T=m(v,_.crossOrigin),C=typeof _.integrity=="string"?_.integrity:void 0,P=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;v==="style"?r.d.S(S,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:T,integrity:C,fetchPriority:P}):v==="script"&&r.d.X(S,{crossOrigin:T,integrity:C,fetchPriority:P,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Ln.preinitModule=function(S,_){if(typeof S=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var v=m(_.as,_.crossOrigin);r.d.M(S,{crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&r.d.M(S)},Ln.preload=function(S,_){if(typeof S=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var v=_.as,T=m(v,_.crossOrigin);r.d.L(S,v,{crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Ln.preloadModule=function(S,_){if(typeof S=="string")if(_){var v=m(_.as,_.crossOrigin);r.d.m(S,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else r.d.m(S)},Ln.requestFormReset=function(S){r.d.r(S)},Ln.unstable_batchedUpdates=function(S,_){return S(_)},Ln.useFormState=function(S,_,v){return p.H.useFormState(S,_,v)},Ln.useFormStatus=function(){return p.H.useHostTransitionStatus()},Ln.version="19.3.0",Ln}var qv;function JE(){if(qv)return Rh.exports;qv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Rh.exports=QE(),Rh.exports}var Wv;function jE(){if(Wv)return fl;Wv=1;var o=KE(),e=hm(),i=JE();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var l=a.return;if(l===null)break;var f=l.alternate;if(f===null){if(s=l.return,s!==null){a=s;continue}break}if(l.child===f.child){for(f=l.child;f;){if(f===a)return p(l),t;if(f===s)return p(l),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=l,s=f;else{for(var g=!1,A=l.child;A;){if(A===a){g=!0,a=l,s=f;break}if(A===s){g=!0,s=l,a=f;break}A=A.sibling}if(!g){for(A=f.child;A;){if(A===a){g=!0,a=f,s=l;break}if(A===s){g=!0,s=f,a=l;break}A=A.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}function _(t,n,a,s,l,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,l,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&_(t.child,n,a,s,l,f))return!0;t=t.sibling}return!1}function v(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function T(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function C(t){var n=[null,null],a=v(t);return a===null||P(n,t,a.child,{foundSelf:!1}),n}function P(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&P(t,n,a.child,s))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var x=null,N=null;function G(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function w(t,n,a){return t===a?(N=t,!1):t===n?(N!==null&&(x=t),!0):!1}function L(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function U(t,n,a){for(var s=0,l=t;l;l=a(l))s++;l=0;for(var f=n;f;f=a(f))l++;for(;0<s-l;)t=a(t),s--;for(;0<l-s;)n=a(n),l--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var F=Object.assign,E=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),it=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),xt=Symbol.for("react.activity"),Bt=Symbol.for("react.legacy_hidden"),Dt=Symbol.for("react.memo_cache_sentinel"),V=Symbol.for("react.view_transition"),mt=Symbol.for("react.recoverable"),vt=Symbol.iterator;function X(t){return t===null||typeof t!="object"?null:(t=vt&&t[vt]||t["@@iterator"],typeof t=="function"?t:null)}var rt=Symbol.for("react.client.reference");function St(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===rt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case k:return"Profiler";case I:return"StrictMode";case W:return"Suspense";case tt:return"SuspenseList";case xt:return"Activity";case V:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case Q:return t.displayName||"Context";case H:return(t._context.displayName||"Context")+".Consumer";case q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case it:return n=t.displayName||null,n!==null?n:St(t.type)||"Memo";case pt:n=t._payload,t=t._init;try{return St(t(n))}catch{}}return null}var Ct=Array.isArray,ft=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},re=[],oe=-1;function ne(t){return{current:t}}function Ht(t){0>oe||(t.current=re[oe],re[oe]=null,oe--)}function ie(t,n){oe++,re[oe]=t.current,t.current=n}var Ne=ne(null),je=ne(null),Ue=ne(null),Se=ne(null);function Y(t,n){switch(ie(Ue,n),ie(je,t),ie(Ne,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Y_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Y_(n),t=Z_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ht(Ne),ie(Ne,t)}function sn(){Ht(Ne),Ht(je),Ht(Ue)}function Be(t){var n=t.memoizedState;n!==null&&(Bs._currentValue=n.memoizedState,ie(Se,t)),n=Ne.current;var a=Z_(n,t.type);n!==a&&(ie(je,t),ie(Ne,a))}function z(t){je.current===t&&(Ht(Ne),Ht(je)),Se.current===t&&(Ht(Se),Bs._currentValue=le)}var y,at;function ct(t){if(y===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);y=n&&n[1]||"",at=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+y+t+at}var gt=!1;function wt(t,n){if(!t||gt)return"";gt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(It){var $=It}Reflect.construct(t,[],yt)}else{try{yt.call()}catch(It){$=It}yt=!1;try{var ut=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),yt=!0,new t}finally{yt&&(ut!==void 0?Object.defineProperty(t.prototype,"props",ut):delete t.prototype.props)}}}else{try{throw Error()}catch(It){$=It}(yt=t())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(It){if(It&&$&&typeof It.stack=="string")return[It.stack,$.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],A=f[1];if(g&&A){var B=g.split(`
`),nt=A.split(`
`);for(l=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;l<nt.length&&!nt[l].includes("DetermineComponentFrameRoot");)l++;if(s===B.length||l===nt.length)for(s=B.length-1,l=nt.length-1;1<=s&&0<=l&&B[s]!==nt[l];)l--;for(;1<=s&&0<=l;s--,l--)if(B[s]!==nt[l]){if(s!==1||l!==1)do if(s--,l--,0>l||B[s]!==nt[l]){var dt=`
`+B[s].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=s&&0<=l);break}}}finally{gt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ct(a):""}function Lt(t,n){switch(t.tag){case 26:case 27:case 5:return ct(t.type);case 16:return ct("Lazy");case 13:return t.child!==n&&n!==null?ct("Suspense Fallback"):ct("Suspense");case 19:return ct("SuspenseList");case 0:case 15:return wt(t.type,!1);case 11:return wt(t.type.render,!1);case 1:return wt(t.type,!0);case 31:return ct("Activity");case 30:return ct("ViewTransition");default:return""}}function _t(t){try{var n="",a=null;do n+=Lt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Tt=Object.prototype.hasOwnProperty,Ut=o.unstable_scheduleCallback,te=o.unstable_cancelCallback,Ft=o.unstable_shouldYield,zt=o.unstable_requestPaint,Wt=o.unstable_now,se=o.unstable_getCurrentPriorityLevel,he=o.unstable_ImmediatePriority,J=o.unstable_UserBlockingPriority,Nt=o.unstable_NormalPriority,Et=o.unstable_LowPriority,Ot=o.unstable_IdlePriority,qt=o.log,At=o.unstable_setDisableYieldValue,$t=null,kt=null;function Le(t){if(typeof qt=="function"&&At(t),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode($t,t)}catch{}}var pe=Math.clz32?Math.clz32:Qc,ai=Math.log,vi=Math.LN2;function Qc(t){return t>>>=0,t===0?32:31-(ai(t)/vi|0)|0}var es=256,yr=262144,Ba=4194304;function ha(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Er(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var l=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var A=s&134217727;return A!==0?(s=A&~f,s!==0?l=ha(s):(g&=A,g!==0?l=ha(g):a||(a=A&~t,a!==0&&(l=ha(a))))):(A=s&~f,A!==0?l=ha(A):g!==0?l=ha(g):a||(a=s&~t,a!==0&&(l=ha(a)))),l===0?0:n!==0&&n!==l&&(n&f)===0&&(f=l&-l,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:l}function Ha(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ki(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-pe(a),l=1<<s;n|=t[s],a&=~l}return n}function go(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _o(){var t=Ba;return Ba<<=1,(Ba&62914560)===0&&(Ba=4194304),t}function ns(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function qi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ol(t,n,a,s,l,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,B=t.expirationTimes,nt=t.hiddenUpdates;for(a=g&~a;0<a;){var dt=31-pe(a),yt=1<<dt;A[dt]=0,B[dt]=-1;var $=nt[dt];if($!==null)for(nt[dt]=null,dt=0;dt<$.length;dt++){var ut=$[dt];ut!==null&&(ut.lane&=-536870913)}a&=~yt}s!==0&&Tr(t,s,0),f!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Tr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-pe(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function vo(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-pe(a),l=1<<s;l&n|t[s]&n&&(t[s]|=n),a&=~l}}function So(t,n){var a=n&-n;return a=(a&42)!==0?1:xo(a),(a&(t.suspendedLanes|n))!==0?0:a}function xo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Mo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Pl(){var t=Rt.p;return t!==0?t:(t=window.event,t===void 0?32:Nv(t.type))}function Il(t,n){var a=Rt.p;try{return Rt.p=t,n()}finally{Rt.p=a}}var Si=Math.random().toString(36).slice(2),b="__reactFiber$"+Si,Z="__reactProps$"+Si,ht="__reactContainer$"+Si,ot="__reactEvents$"+Si,lt="__reactListeners$"+Si,Gt="__reactHandles$"+Si,Yt="__reactResources$"+Si,Pt="__reactMarker$"+Si,Qt="__reactLoad$"+Si;function Jt(t){delete t[b],delete t[Z],delete t[lt],delete t[Gt]}function ce(t){var n;if(n=t[b])return n;for(var a=t.parentNode;a;){if(n=a[ht]||a[b]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=fv(t);t!==null;){if(a=t[b])return a;t=fv(t)}return n}t=a,a=t.parentNode}return null}function me(t){if(t=t[b]||t[ht]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Zt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Te(t){var n=t[Yt];return n||(n=t[Yt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Me(t){t[Pt]=!0}function Ke(t){t[Qt]=void 0}var Xe=new Set,Sn={};function Vt(t,n){un(t,n),un(t+"Capture",n)}function un(t,n){for(Sn[t]=n,t=0;t<n.length;t++)Xe.add(n[t])}var Oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xn={},ri={};function Wi(t){return Tt.call(ri,t)?!0:Tt.call(Xn,t)?!1:Oe.test(t)?ri[t]=!0:(Xn[t]=!0,!1)}var ye=!1;function Ge(){var t=ye;return ye=!1,t}function $e(t,n,a){if(Wi(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function si(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function Ce(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function cn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pa(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function zl(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var l=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Jc(t){if(!t._valueTracker){var n=pa(t)?"checked":"value";t._valueTracker=zl(t,n,""+t[n])}}function Pm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=pa(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var dM=/[\n"\\]/g;function xi(t){return t.replace(dM,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function jc(t,n,a,s,l,f,g,A){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+cn(n)):t.value!==""+cn(n)&&(t.value=""+cn(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?g==="number"&&t.value==n?$c(t,cn(t.value)):$c(t,cn(n)):a!=null?$c(t,cn(a)):s!=null&&t.removeAttribute("value"),l==null&&f!=null&&(t.defaultChecked=!!f),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+cn(A):t.removeAttribute("name")}function Im(t,n,a,s,l,f,g,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Jc(t);return}a=a!=null?""+cn(a):"",n=n!=null?""+cn(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}s=s??l,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=A?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Jc(t)}function $c(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function is(t,n,a,s){if(t=t.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=n.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&s&&(t[a].defaultSelected=!0)}else{for(a=""+cn(a),n=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,s&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function zm(t,n,a){if(n!=null&&(n=""+cn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+cn(a):""}function Fm(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Ct(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=cn(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Jc(t)}function as(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var hM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bm(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||hM.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Hm(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",ye=!0);for(var l in n)s=n[l],n.hasOwnProperty(l)&&a[l]!==s&&(Bm(t,l,s),ye=!0)}else for(var f in n)n.hasOwnProperty(f)&&Bm(t,f,n[f])}function tf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fl(t){return mM.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yi(){}var ef=null;function nf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rs=null,ss=null;function Gm(t){var n=me(t);if(n&&(t=n.stateNode)){var a=t[Z]||null;t:switch(t=n.stateNode,n.type){case"input":if(jc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var l=s[Z]||null;if(!l)throw Error(r(90));jc(s,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Pm(s)}break t;case"textarea":zm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&is(t,!!a.multiple,n,!1)}}}var af=!1;function Vm(t,n,a){if(af)return t(n,a);af=!0;try{var s=t(n);return s}finally{if(af=!1,(rs!==null||ss!==null)&&(Fu(),rs&&(n=rs,t=ss,ss=rs=null,Gm(n),t)))for(n=0;n<t.length;n++)Gm(t[n])}}function yo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Z]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rf=!1;if(ma)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){rf=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{rf=!1}var Ga=null,sf=null,Bl=null;function Xm(){if(Bl)return Bl;var t,n=sf,a=n.length,s,l="value"in Ga?Ga.value:Ga.textContent,f=l.length;for(t=0;t<a&&n[t]===l[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===l[f-s];s++);return Bl=l.slice(t,1<s?1-s:void 0)}function Hl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Gl(){return!0}function km(){return!1}function kn(t){function n(a,s,l,f,g){this._reactName=a,this._targetInst=l,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Gl:km,this.isPropagationStopped=km,this}return F(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),n}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=kn(Va),To=F({},Va,{view:0,detail:0}),gM=kn(To),of,lf,bo,Xl=F({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bo&&(bo&&t.type==="mousemove"?(of=t.screenX-bo.screenX,lf=t.screenY-bo.screenY):lf=of=0,bo=t),of)},movementY:function(t){return"movementY"in t?t.movementY:lf}}),qm=kn(Xl),_M=F({},Xl,{dataTransfer:0}),vM=kn(_M),SM=F({},To,{relatedTarget:0}),uf=kn(SM),xM=F({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),MM=kn(xM),yM=F({},Va,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),EM=kn(yM),TM=F({},Va,{data:0}),Wm=kn(TM),bM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CM(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=RM[t])?!!n[t]:!1}function cf(){return CM}var wM=F({},To,{key:function(t){if(t.key){var n=bM[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?AM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cf,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),DM=kn(wM),NM=F({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ym=kn(NM),UM=F({},Va,{submitter:0}),LM=kn(UM),OM=F({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cf}),PM=kn(OM),IM=F({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),zM=kn(IM),FM=F({},Xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),BM=kn(FM),HM=F({},Va,{newState:0,oldState:0,source:0}),GM=kn(HM),VM=[9,13,27,32],ff=ma&&"CompositionEvent"in window,Ao=null;ma&&"documentMode"in document&&(Ao=document.documentMode);var XM=ma&&"TextEvent"in window&&!Ao,Zm=ma&&(!ff||Ao&&8<Ao&&11>=Ao),Km=" ",Qm=!1;function Jm(t,n){switch(t){case"keyup":return VM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function kM(t,n){switch(t){case"compositionend":return jm(n);case"keypress":return n.which!==32?null:(Qm=!0,Km);case"textInput":return t=n.data,t===Km&&Qm?null:t;default:return null}}function qM(t,n){if(os)return t==="compositionend"||!ff&&Jm(t,n)?(t=Xm(),Bl=sf=Ga=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zm&&n.locale!=="ko"?null:n.data;default:return null}}var WM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $m(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!WM[t.type]:n==="textarea"}function t0(t,n,a,s){rs?ss?ss.push(s):ss=[s]:rs=s,n=ku(n,"onChange"),0<n.length&&(a=new Vl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ro=null,Co=null;function YM(t){G_(t,0)}function kl(t){var n=Zt(t);if(Pm(n))return t}function e0(t,n){if(t==="change")return n}var n0=!1;if(ma){var df;if(ma){var hf="oninput"in document;if(!hf){var i0=document.createElement("div");i0.setAttribute("oninput","return;"),hf=typeof i0.oninput=="function"}df=hf}else df=!1;n0=df&&(!document.documentMode||9<document.documentMode)}function a0(){Ro&&(Ro.detachEvent("onpropertychange",r0),Co=Ro=null)}function r0(t){if(t.propertyName==="value"&&kl(Co)){var n=[];t0(n,Co,t,nf(t)),Vm(YM,n)}}function ZM(t,n,a){t==="focusin"?(a0(),Ro=n,Co=a,Ro.attachEvent("onpropertychange",r0)):t==="focusout"&&a0()}function KM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kl(Co)}function QM(t,n){if(t==="click")return kl(n)}function JM(t,n){if(t==="input"||t==="change")return kl(n)}function jM(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var oi=typeof Object.is=="function"?Object.is:jM;function wo(t,n){if(oi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var l=a[s];if(!Tt.call(n,l)||!oi(t[l],n[l]))return!1}return!0}function pf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function s0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function o0(t,n){var a=s0(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=s0(a)}}function l0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?l0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function u0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=pf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=pf(t.document)}return n}function mf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var $M=ma&&"documentMode"in document&&11>=document.documentMode,ls=null,gf=null,Do=null,_f=!1;function c0(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_f||ls==null||ls!==pf(s)||(s=ls,"selectionStart"in s&&mf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Do&&wo(Do,s)||(Do=s,s=ku(gf,"onSelect"),0<s.length&&(n=new Vl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=ls)))}function br(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var us={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionrun:br("Transition","TransitionRun"),transitionstart:br("Transition","TransitionStart"),transitioncancel:br("Transition","TransitionCancel"),transitionend:br("Transition","TransitionEnd")},vf={},f0={};ma&&(f0=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function Ar(t){if(vf[t])return vf[t];if(!us[t])return t;var n=us[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in f0)return vf[t]=n[a];return t}var d0=Ar("animationend"),h0=Ar("animationiteration"),p0=Ar("animationstart"),ty=Ar("transitionrun"),ey=Ar("transitionstart"),ny=Ar("transitioncancel"),m0=Ar("transitionend"),g0=new Map,Sf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sf.push("scrollEnd");function Di(t,n){g0.set(t,n),Vt(n,[t])}var iy=0;function ga(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Oi.identifierPrefix;var a=iy++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function _0(t){if(t==null||typeof t=="string")return t;var n=null,a=ws;if(a!==null)for(var s=0;s<a.length;s++){var l=t[a[s]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function _a(t,n){return t=_0(t),n=_0(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var ql=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Mi=[],cs=0,xf=0;function Wl(){for(var t=cs,n=xf=cs=0;n<t;){var a=Mi[n];Mi[n++]=null;var s=Mi[n];Mi[n++]=null;var l=Mi[n];Mi[n++]=null;var f=Mi[n];if(Mi[n++]=null,s!==null&&l!==null){var g=s.pending;g===null?l.next=l:(l.next=g.next,g.next=l),s.pending=l}f!==0&&v0(a,l,f)}}function Yl(t,n,a,s){Mi[cs++]=t,Mi[cs++]=n,Mi[cs++]=a,Mi[cs++]=s,xf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Mf(t,n,a,s){return Yl(t,n,a,s),Zl(t)}function Rr(t,n){return Yl(t,null,null,n),Zl(t)}function v0(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var l=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(l=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,l&&n!==null&&(l=31-pe(a),t=f.hiddenUpdates,s=t[l],s===null?t[l]=[n]:s.push(n),n.lane=a|536870912),f):null}function Zl(t){if(50<jo)throw jo=0,zu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var fs={};function ay(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,n,a,s){return new ay(t,n,a,s)}function yf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function va(t,n){var a=t.alternate;return a===null?(a=Qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function S0(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Kl(t,n,a,s,l,f){var g=0;if(s=t,typeof s=="function")yf(s)&&(g=1);else if(typeof s=="string")g=UE(t,a,Ne.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case xt:return t=Qn(31,a,n,l),t.elementType=xt,t.lanes=f,t;case D:return Cr(a.children,l,f,n);case I:g=8,l|=24;break;case k:return t=Qn(12,a,n,l|2),t.elementType=k,t.lanes=f,t;case W:return t=Qn(13,a,n,l),t.elementType=W,t.lanes=f,t;case tt:return t=Qn(19,a,n,l),t.elementType=tt,t.lanes=f,t;case Bt:case V:return t=l|32,t=Qn(30,a,n,t),t.elementType=V,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case Q:g=10;break t;case H:g=9;break t;case q:g=11;break t;case it:g=14;break t;case pt:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Qn(g,a,n,l),n.elementType=t,n.type=s,n.lanes=f,n}function Cr(t,n,a,s){return t=Qn(7,t,s,n),t.lanes=a,t}function Ef(t,n,a){return t=Qn(6,t,null,n),t.lanes=a,t}function x0(t){var n=Qn(18,null,null,0);return n.stateNode=t,n}function Tf(t,n,a){return n=Qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var M0=new WeakMap;function yi(t,n){if(typeof t=="object"&&t!==null){var a=M0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:_t(n)},M0.set(t,n),n)}return{value:t,source:n,stack:_t(n)}}var ds=[],hs=0,Ql=null,No=0,Ei=[],Ti=0,Xa=null,Zi=1,Ki="";function Sa(t,n){ds[hs++]=No,ds[hs++]=Ql,Ql=t,No=n}function y0(t,n,a){Ei[Ti++]=Zi,Ei[Ti++]=Ki,Ei[Ti++]=Xa,Xa=t;var s=Zi;t=Ki;var l=32-pe(s)-1;s&=~(1<<l),a+=1;var f=32-pe(n)+l;if(30<f){var g=l-l%5;f=(s&(1<<g)-1).toString(32),s>>=g,l-=g,Zi=1<<32-pe(n)+l|a<<l|s,Ki=f+t}else Zi=1<<f|a<<l|s,Ki=t}function Jl(t){t.return!==null&&(Sa(t,1),y0(t,1,0))}function bf(t){for(;t===Ql;)Ql=ds[--hs],ds[hs]=null,No=ds[--hs],ds[hs]=null;for(;t===Xa;)Xa=Ei[--Ti],Ei[Ti]=null,Ki=Ei[--Ti],Ei[Ti]=null,Zi=Ei[--Ti],Ei[Ti]=null}function E0(t,n){Ei[Ti++]=Zi,Ei[Ti++]=Ki,Ei[Ti++]=Xa,Zi=n.id,Ki=n.overflow,Xa=t}var En=null,tn=null,Ee=!1,ka=null,bi=!1,Af=Error(r(519));function qa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Uo(yi(n,t)),Af}function T0(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[b]=t,n[Z]=s,a){case"dialog":Ae("cancel",n),Ae("close",n);break;case"iframe":case"object":case"embed":Ae("load",n);break;case"video":case"audio":for(a=0;a<tl.length;a++)Ae(tl[a],n);break;case"source":Ae("error",n);break;case"img":case"image":case"link":Ae("error",n),Ae("load",n);break;case"details":Ae("toggle",n);break;case"input":Ae("invalid",n),Im(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ae("invalid",n);break;case"textarea":Ae("invalid",n),Fm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||q_(n.textContent,a)?(s.popover!=null&&(Ae("beforetoggle",n),Ae("toggle",n)),s.onScroll!=null&&Ae("scroll",n),s.onScrollEnd!=null&&Ae("scrollend",n),s.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||qa(t,!0)}function jl(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:En=En.return}}function ps(t){if(t!==En)return!1;if(!Ee)return jl(t),Ee=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||nh(t.type,t.memoizedProps)),a=!a),a&&tn&&qa(t),jl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=cv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=cv(t)}else n===27?(n=tn,or(t.type)?(t=fh,fh=null,tn=t):tn=n):tn=En?Ri(t.stateNode.nextSibling):null;return!0}function wr(){tn=En=null,Ee=!1}function Rf(){var t=ka;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),ka=null),t}function Uo(t){ka===null?ka=[t]:ka.push(t)}var Cf=ne(null),Dr=null,xa=null;function Wa(t,n,a){ie(Cf,n._currentValue),n._currentValue=a}function Ma(t){t._currentValue=Cf.current,Ht(Cf)}function $l(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function wf(t,n,a,s){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var f=l.dependencies;if(f!==null){var g=l.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=l;for(var B=0;B<n.length;B++)if(A.context===n[B]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),$l(f.return,a,t),s||(g=null);break t}f=A.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),$l(g,a,t),g=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,g=l.alternate,g!==null&&(g.lanes|=a),$l(l.return,a,t),g=l.child,g=g!==null?g.sibling:null):g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===t){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function Nr(t,n,a,s){t=null;for(var l=n,f=!1;l!==null;){if(!f){if((l.flags&524288)!==0)f=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var A=l.type;oi(l.pendingProps.value,g.value)||(t!==null?t.push(A):t=[A])}}else if(l===Se.current){if(g=l.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Bs):t=[Bs])}l=l.return}return t!==null&&wf(n,t,a,s),n.flags|=262144,t!==null}function tu(t){for(t=t.firstContext;t!==null;){if(!oi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ur(t){Dr=t,xa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return b0(Dr,t)}function eu(t,n){return Dr===null&&Ur(t),b0(t,n)}function b0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},xa===null){if(t===null)throw Error(r(308));xa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else xa=xa.next=n;return a}var ry=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},sy=o.unstable_scheduleCallback,oy=o.unstable_NormalPriority,pn={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Df(){return{controller:new ry,data:new Map,refCount:0}}function Lo(t){t.refCount--,t.refCount===0&&sy(oy,function(){t.controller.abort()})}function A0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Oo=null;function ly(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Po=null,Nf=0,Lr=0,ms=null;function uy(t,n){if(Po===null){var a=Po=[];Nf=0,Lr=Yd(),ms={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Nf++,n.then(R0,R0),n}function R0(){if(--Nf===0&&(Oo=null,Po!==null)){ms!==null&&(ms.status="fulfilled");var t=Po;Po=null,Lr=0,ms=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function cy(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(s.status="rejected",s.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),s}var C0=ft.S;ft.S=function(t,n){if(x_=Wt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uy(t,n),Oo!==null)for(var a=Ls;a!==null;)A0(a,Oo),a=a.next;if(a=t.types,a!==null){for(var s=Ls;s!==null;)A0(s,a),s=s.next;if(Lr!==0){s=Oo,s===null&&(s=Oo=[]);for(var l=0;l<a.length;l++){var f=a[l];s.indexOf(f)===-1&&s.push(f)}}}C0!==null&&C0(t,n)};var Or=ne(null);function Uf(){var t=Or.current;return t!==null?t:Je.pooledCache}function nu(t,n){n===null?ie(Or,Or.current):ie(Or,n.pool)}function w0(){var t=Uf();return t===null?null:{parent:pn._currentValue,pool:t}}var gs=Error(r(460)),Lf=Error(r(474)),iu=Error(r(542)),au={then:function(){}};function D0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function N0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,L0(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(t=Je,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=s}},function(s){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,L0(t),t}throw Ir=n,gs}}function Pr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ir=a,gs):a}}var Ir=null;function U0(){if(Ir===null)throw Error(r(459));var t=Ir;return Ir=null,t}function L0(t){if(t===gs||t===iu)throw Error(r(483))}var _s=null,Io=0;function ru(t){var n=Io;return Io+=1,_s===null&&(_s=[]),N0(_s,t,n)}function Ya(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function su(t,n){throw n.$$typeof===E?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function O0(t){function n(et,K){if(t){var st=et.deletions;st===null?(et.deletions=[K],et.flags|=16):st.push(K)}}function a(et,K){if(!t)return null;for(;K!==null;)n(et,K),K=K.sibling;return null}function s(et){for(var K=new Map;et!==null;)et.key===null?K.set(et.index,et):K.set(et.key,et),et=et.sibling;return K}function l(et,K){return et=va(et,K),et.index=0,et.sibling=null,et}function f(et,K,st){return et.index=st,t?(st=et.alternate,st!==null?(st=st.index,st<K?(et.flags|=2,K):st):(et.flags|=134217730,K)):(et.flags|=1048576,K)}function g(et){return t&&et.alternate===null&&(et.flags|=134217730),et}function A(et,K,st,Mt){return K===null||K.tag!==6?(K=Ef(st,et.mode,Mt),K.return=et,K):(K=l(K,st),K.return=et,K)}function B(et,K,st,Mt){var Kt=st.type;return Kt===D?(et=dt(et,K,st.props.children,Mt,st.key),Ya(et,st),et):K!==null&&(K.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===pt&&Pr(Kt)===K.type)?(K=l(K,st.props),Ya(K,st),K.return=et,K):(K=Kl(st.type,st.key,st.props,null,et.mode,Mt),Ya(K,st),K.return=et,K)}function nt(et,K,st,Mt){return K===null||K.tag!==4||K.stateNode.containerInfo!==st.containerInfo||K.stateNode.implementation!==st.implementation?(K=Tf(st,et.mode,Mt),K.return=et,K):(K=l(K,st.children||[]),K.return=et,K)}function dt(et,K,st,Mt,Kt){return K===null||K.tag!==7?(K=Cr(st,et.mode,Mt,Kt),K.return=et,K):(K=l(K,st),K.return=et,K)}function yt(et,K,st){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=Ef(""+K,et.mode,st),K.return=et,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case O:return st=Kl(K.type,K.key,K.props,null,et.mode,st),Ya(st,K),st.return=et,st;case R:return K=Tf(K,et.mode,st),K.return=et,K;case pt:return K=Pr(K),yt(et,K,st)}if(Ct(K)||X(K))return K=Cr(K,et.mode,st,null),K.return=et,K;if(typeof K.then=="function")return yt(et,ru(K),st);if(K.$$typeof===Q)return yt(et,eu(et,K),st);su(et,K)}return null}function $(et,K,st,Mt){var Kt=K!==null?K.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return Kt!==null?null:A(et,K,""+st,Mt);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case O:return st.key===Kt?B(et,K,st,Mt):null;case R:return st.key===Kt?nt(et,K,st,Mt):null;case pt:return st=Pr(st),$(et,K,st,Mt)}if(Ct(st)||X(st))return Kt!==null?null:dt(et,K,st,Mt,null);if(typeof st.then=="function")return $(et,K,ru(st),Mt);if(st.$$typeof===Q)return $(et,K,eu(et,st),Mt);su(et,st)}return null}function ut(et,K,st,Mt,Kt){if(typeof Mt=="string"&&Mt!==""||typeof Mt=="number"||typeof Mt=="bigint")return et=et.get(st)||null,A(K,et,""+Mt,Kt);if(typeof Mt=="object"&&Mt!==null){switch(Mt.$$typeof){case O:return et=et.get(Mt.key===null?st:Mt.key)||null,B(K,et,Mt,Kt);case R:return et=et.get(Mt.key===null?st:Mt.key)||null,nt(K,et,Mt,Kt);case pt:return Mt=Pr(Mt),ut(et,K,st,Mt,Kt)}if(Ct(Mt)||X(Mt))return et=et.get(st)||null,dt(K,et,Mt,Kt,null);if(typeof Mt.then=="function")return ut(et,K,st,ru(Mt),Kt);if(Mt.$$typeof===Q)return ut(et,K,st,eu(K,Mt),Kt);su(K,Mt)}return null}function It(et,K,st,Mt){for(var Kt=null,De=null,ae=K,ue=K=0,_n=null;ae!==null&&ue<st.length;ue++){ae.index>ue?(_n=ae,ae=null):_n=ae.sibling;var ze=$(et,ae,st[ue],Mt);if(ze===null){ae===null&&(ae=_n);break}t&&ae&&ze.alternate===null&&n(et,ae),K=f(ze,K,ue),De===null?Kt=ze:De.sibling=ze,De=ze,ae=_n}if(ue===st.length)return a(et,ae),Ee&&Sa(et,ue),Kt;if(ae===null){for(;ue<st.length;ue++)ae=yt(et,st[ue],Mt),ae!==null&&(K=f(ae,K,ue),De===null?Kt=ae:De.sibling=ae,De=ae);return Ee&&Sa(et,ue),Kt}for(ae=s(ae);ue<st.length;ue++)_n=ut(ae,et,ue,st[ue],Mt),_n!==null&&(t&&(ze=_n.alternate,ze!==null&&ae.delete(ze.key===null?ue:ze.key)),K=f(_n,K,ue),De===null?Kt=_n:De.sibling=_n,De=_n);return t&&ae.forEach(function(dr){return n(et,dr)}),Ee&&Sa(et,ue),Kt}function jt(et,K,st,Mt){if(st==null)throw Error(r(151));for(var Kt=null,De=null,ae=K,ue=K=0,_n=null,ze=st.next();ae!==null&&!ze.done;ue++,ze=st.next()){ae.index>ue?(_n=ae,ae=null):_n=ae.sibling;var dr=$(et,ae,ze.value,Mt);if(dr===null){ae===null&&(ae=_n);break}t&&ae&&dr.alternate===null&&n(et,ae),K=f(dr,K,ue),De===null?Kt=dr:De.sibling=dr,De=dr,ae=_n}if(ze.done)return a(et,ae),Ee&&Sa(et,ue),Kt;if(ae===null){for(;!ze.done;ue++,ze=st.next())ze=yt(et,ze.value,Mt),ze!==null&&(K=f(ze,K,ue),De===null?Kt=ze:De.sibling=ze,De=ze);return Ee&&Sa(et,ue),Kt}for(ae=s(ae);!ze.done;ue++,ze=st.next())ze=ut(ae,et,ue,ze.value,Mt),ze!==null&&(t&&(_n=ze.alternate,_n!==null&&ae.delete(_n.key===null?ue:_n.key)),K=f(ze,K,ue),De===null?Kt=ze:De.sibling=ze,De=ze);return t&&ae.forEach(function(kE){return n(et,kE)}),Ee&&Sa(et,ue),Kt}function ve(et,K,st,Mt){if(typeof st=="object"&&st!==null&&st.type===D&&st.key===null&&st.props.ref===void 0&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case O:t:{for(var Kt=st.key;K!==null;){if(K.key===Kt){if(Kt=st.type,Kt===D){if(K.tag===7){a(et,K.sibling),Mt=l(K,st.props.children),Ya(Mt,st),Mt.return=et,et=Mt;break t}}else if(K.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===pt&&Pr(Kt)===K.type){a(et,K.sibling),Mt=l(K,st.props),Ya(Mt,st),Mt.return=et,et=Mt;break t}a(et,K);break}else n(et,K);K=K.sibling}st.type===D?(Mt=Cr(st.props.children,et.mode,Mt,st.key),Ya(Mt,st),Mt.return=et,et=Mt):(Mt=Kl(st.type,st.key,st.props,null,et.mode,Mt),Ya(Mt,st),Mt.return=et,et=Mt)}return g(et);case R:t:{for(Kt=st.key;K!==null;){if(K.key===Kt)if(K.tag===4&&K.stateNode.containerInfo===st.containerInfo&&K.stateNode.implementation===st.implementation){a(et,K.sibling),Mt=l(K,st.children||[]),Mt.return=et,et=Mt;break t}else{a(et,K);break}else n(et,K);K=K.sibling}Mt=Tf(st,et.mode,Mt),Mt.return=et,et=Mt}return g(et);case pt:return st=Pr(st),ve(et,K,st,Mt)}if(Ct(st))return It(et,K,st,Mt);if(X(st)){if(Kt=X(st),typeof Kt!="function")throw Error(r(150));return st=Kt.call(st),jt(et,K,st,Mt)}if(typeof st.then=="function")return ve(et,K,ru(st),Mt);if(st.$$typeof===Q)return ve(et,K,eu(et,st),Mt);su(et,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,K!==null&&K.tag===6?(a(et,K.sibling),Mt=l(K,st),Mt.return=et,et=Mt):(a(et,K),Mt=Ef(st,et.mode,Mt),Mt.return=et,et=Mt),g(et)):a(et,K)}return function(et,K,st,Mt){try{Io=0;var Kt=ve(et,K,st,Mt);return _s=null,Kt}catch(ae){if(ae===gs||ae===iu)throw ae;var De=Qn(29,ae,null,et.mode);return De.lanes=Mt,De.return=et,De}}}var zr=O0(!0),P0=O0(!1),Za=!1;function Of(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ve&2)!==0){var l=s.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),s.pending=n,n=Zl(t),v0(t,null,a),n}return Yl(t,s,n,a),Zl(t)}function zo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,vo(t,a)}}function If(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var l=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?l=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?l=f=n:f=f.next=n}else l=f=n;a={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var zf=!1;function Fo(){if(zf){var t=ms;if(t!==null)throw t}}function Bo(t,n,a,s){zf=!1;var l=t.updateQueue;Za=!1;var f=l.firstBaseUpdate,g=l.lastBaseUpdate,A=l.shared.pending;if(A!==null){l.shared.pending=null;var B=A,nt=B.next;B.next=null,g===null?f=nt:g.next=nt,g=B;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==g&&(A===null?dt.firstBaseUpdate=nt:A.next=nt,dt.lastBaseUpdate=B))}if(f!==null){var yt=l.baseState;g=0,dt=nt=B=null,A=f;do{var $=A.lane&-536870913,ut=$!==A.lane;if(ut?(we&$)===$:(s&$)===$){$!==0&&$===Lr&&(zf=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var It=t,jt=A;$=n;var ve=a;switch(jt.tag){case 1:if(It=jt.payload,typeof It=="function"){yt=It.call(ve,yt,$);break t}yt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=jt.payload,$=typeof It=="function"?It.call(ve,yt,$):It,$==null)break t;yt=F({},yt,$);break t;case 2:Za=!0}}$=A.callback,$!==null&&(t.flags|=64,ut&&(t.flags|=8192),ut=l.callbacks,ut===null?l.callbacks=[$]:ut.push($))}else ut={lane:$,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?(nt=dt=ut,B=yt):dt=dt.next=ut,g|=$;if(A=A.next,A===null){if(A=l.shared.pending,A===null)break;ut=A,A=ut.next,ut.next=null,l.lastBaseUpdate=ut,l.shared.pending=null}}while(!0);dt===null&&(B=yt),l.baseState=B,l.firstBaseUpdate=nt,l.lastBaseUpdate=dt,f===null&&(l.shared.lanes=0),ir|=g,t.lanes=g,t.memoizedState=yt}}function I0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function z0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)I0(a[t],n)}var Ja=ne(null),ou=ne(0);function F0(t,n){t=Aa,ie(ou,t),ie(Ja,n),Aa=t|n.baseLanes}function Ff(){ie(ou,Aa),ie(Ja,Ja.current)}function Bf(){Aa=ou.current,Ht(Ja),Ht(ou)}var wn=ne(null),zn=null;function ja(t){var n=t.alternate;ie(Dn,Dn.current&1),ie(wn,t),zn===null&&(n===null||Ja.current!==null||n.memoizedState!==null)&&(zn=t)}function Hf(t){ie(Dn,Dn.current),ie(wn,t),zn===null&&(zn=t)}function B0(t){t.tag===22?(ie(Dn,Dn.current),ie(wn,t),zn===null&&(zn=t)):$a()}function $a(){ie(Dn,Dn.current),ie(wn,wn.current)}function li(t){Ht(wn),zn===t&&(zn=null),Ht(Dn)}var Dn=ne(0);function Ho(t,n){ie(wn,wn.current),ie(Dn,n)}function Gf(t){Ht(Dn),Ht(wn),zn===t&&(zn=null)}function lu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||uh(a)||ch(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ya=0,_e=null,Qe=null,mn=null,uu=!1,vs=!1,Fr=!1,cu=0,Go=0,Ss=null,fy=0;function fn(){throw Error(r(321))}function Vf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!oi(t[a],n[a]))return!1;return!0}function Xf(t,n,a,s,l,f){return ya=f,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ft.H=t===null||t.memoizedState===null?yg:Eg,Fr=!1,f=a(s,l),Fr=!1,vs&&(f=G0(n,a,s,l)),H0(t),f}function H0(t){ft.H=_u;var n=Qe!==null&&Qe.next!==null;if(ya=0,mn=Qe=_e=null,uu=!1,Go=0,Ss=null,n)throw Error(r(300));t===null||gn||(t=t.dependencies,t!==null&&tu(t)&&(gn=!0))}function G0(t,n,a,s){_e=t;var l=0;do{if(vs&&(Ss=null),Go=0,vs=!1,25<=l)throw Error(r(301));if(l+=1,mn=Qe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}ft.H=Sy,f=n(a,s)}while(vs);return f}function dy(){var t=ft.H,n=t.useState()[0];return n=typeof n.then=="function"?Vo(n):n,t=t.useState()[0],(Qe!==null?Qe.memoizedState:null)!==t&&(_e.flags|=1024),n}function kf(){var t=cu!==0;return cu=0,t}function qf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Wf(t){if(uu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}uu=!1}ya=0,mn=Qe=_e=null,vs=!1,Go=cu=0,Ss=null}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?_e.memoizedState=mn=t:mn=mn.next=t,mn}function hn(){if(Qe===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var n=mn===null?_e.memoizedState:mn.next;if(n!==null)mn=n,Qe=t;else{if(t===null)throw _e.alternate===null?Error(r(467)):Error(r(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},mn===null?_e.memoizedState=mn=t:mn=mn.next=t}return mn}function fu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vo(t){var n=Go;return Go+=1,Ss===null&&(Ss=[]),t=N0(Ss,t,n),n=_e,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,ft.H=n===null||n.memoizedState===null?yg:Eg),t}function du(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Vo(t);if(t.$$typeof===mt)return;if(t.$$typeof===Q)return Cn(t)}throw Error(r(438,String(t)))}function Yf(t){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=_e.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=fu(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=Dt;return n.index++,a}function Ea(t,n){return typeof n=="function"?n(t):n}function hu(t){var n=hn();return Zf(n,Qe,t)}function Zf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var l=t.baseQueue,f=s.pending;if(f!==null){if(l!==null){var g=l.next;l.next=f.next,f.next=g}n.baseQueue=l=f,s.pending=null}if(f=t.baseState,l===null)t.memoizedState=f;else{n=l.next;var A=g=null,B=null,nt=n,dt=!1;do{var yt=nt.lane&-536870913;if(yt!==nt.lane?(we&yt)===yt:(ya&yt)===yt){var $=nt.revertLane;if($===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),yt===Lr&&(dt=!0);else if((ya&$)===$){nt=nt.next,$===Lr&&(dt=!0);continue}else yt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},B===null?(A=B=yt,g=f):B=B.next=yt,_e.lanes|=$,ir|=$;yt=nt.action,Fr&&a(f,yt),f=nt.hasEagerState?nt.eagerState:a(f,yt)}else $={lane:yt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},B===null?(A=B=$,g=f):B=B.next=$,_e.lanes|=yt,ir|=yt;nt=nt.next}while(nt!==null&&nt!==n);if(B===null?g=f:B.next=A,!oi(f,t.memoizedState)&&(gn=!0,dt&&(a=ms,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=B,s.lastRenderedState=f}return l===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Kf(t){var n=hn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,l=a.pending,f=n.memoizedState;if(l!==null){a.pending=null;var g=l=l.next;do f=t(f,g.action),g=g.next;while(g!==l);oi(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function V0(t,n,a){var s=_e,l=hn(),f=Ee;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!oi((Qe||l).memoizedState,a);if(g&&(l.memoizedState=a,gn=!0),l=l.queue,jf(q0.bind(null,s,l,t),[t]),t=l.getSnapshot!==n||g||mn!==null&&(mn.memoizedState.tag&1)!==0,xs(t?9:8,{destroy:void 0},k0.bind(null,s,l,a,n),null),t){if(s.flags|=2048,Je===null)throw Error(r(349));f||(ya&127)!==0||X0(s,n,a)}return a}function X0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=fu(),_e.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function k0(t,n,a,s){n.value=a,n.getSnapshot=s,W0(n)&&Y0(t)}function q0(t,n,a){return a(function(){W0(n)&&Y0(t)})}function W0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!oi(t,a)}catch{return!0}}function Y0(t){var n=Rr(t,2);n!==null&&ti(n,t,2)}function Qf(t){var n=qn();if(typeof t=="function"){var a=t;if(t=a(),Fr){Le(!0);try{a()}finally{Le(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},n}function Z0(t,n,a,s){return t.baseState=a,Zf(t,Qe,typeof s=="function"?s:Ea)}function hy(t,n,a,s,l){if(gu(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};ft.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,K0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function K0(t,n){var a=n.action,s=n.payload,l=t.state;if(n.isTransition){var f=ft.T,g={};g.types=f!==null?f.types:null,ft.T=g;try{var A=a(l,s),B=ft.S;B!==null&&B(g,A),Q0(t,n,A)}catch(nt){Jf(t,n,nt)}finally{f!==null&&g.types!==null&&(f.types=g.types),ft.T=f}}else try{f=a(l,s),Q0(t,n,f)}catch(nt){Jf(t,n,nt)}}function Q0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){J0(t,n,s)},function(s){return Jf(t,n,s)}):J0(t,n,a)}function J0(t,n,a){n.status="fulfilled",n.value=a,j0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,K0(t,a)))}function Jf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,j0(n),n=n.next;while(n!==s)}t.action=null}function j0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function $0(t,n){return n}function tg(t,n){if(Ee){var a=Je.formState;if(a!==null){t:{var s=_e;if(Ee){if(tn){e:{for(var l=tn,f=bi;l.nodeType!==8;){if(!f){l=null;break e}if(l=Ri(l.nextSibling),l===null){l=null;break e}}f=l.data,l=f==="F!"||f==="F"?l:null}if(l){tn=Ri(l.nextSibling),s=l.data==="F!";break t}}qa(s)}s=!1}s&&(n=a[0])}}return a=qn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$0,lastRenderedState:n},a.queue=s,a=Sg.bind(null,_e,s),s.dispatch=a,s=Qf(!1),f=id.bind(null,_e,!1,s.queue),s=qn(),l={state:n,dispatch:null,action:t,pending:null},s.queue=l,a=hy.bind(null,_e,l,f,a),l.dispatch=a,s.memoizedState=t,[n,a,!1]}function eg(t){var n=hn();return ng(n,Qe,t)}function ng(t,n,a){if(n=Zf(t,n,$0)[0],t=hu(Ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Vo(n)}catch(g){throw g===gs?iu:g}else s=n;n=hn();var l=n.queue,f=l.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,xs(9,{destroy:void 0},py.bind(null,l,a),null)),[s,f,t]}function py(t,n){t.action=n}function ig(t){var n=hn(),a=Qe;if(a!==null)return ng(n,a,t);hn(),n=n.memoizedState,a=hn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function xs(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=_e.updateQueue,n===null&&(n=fu(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function ag(){return hn().memoizedState}function pu(t,n,a,s){var l=qn();_e.flags|=t,l.memoizedState=xs(1|n,{destroy:void 0},a,s===void 0?null:s)}function mu(t,n,a,s){var l=hn();s=s===void 0?null:s;var f=l.memoizedState.inst;Qe!==null&&s!==null&&Vf(s,Qe.memoizedState.deps)?l.memoizedState=xs(n,f,a,s):(_e.flags|=t,l.memoizedState=xs(1|n,f,a,s))}function rg(t,n){pu(8390656,8,t,n)}function jf(t,n){mu(2048,8,t,n)}function my(t){_e.flags|=4;var n=_e.updateQueue;if(n===null)n=fu(),_e.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function sg(t){var n=hn().memoizedState;return my({ref:n,nextImpl:t}),function(){if((Ve&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function og(t,n){return mu(4,2,t,n)}function lg(t,n){return mu(4,4,t,n)}function ug(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function cg(t,n,a){a=a!=null?a.concat([t]):null,mu(4,4,ug.bind(null,n,t),a)}function $f(){}function fg(t,n){var a=hn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Vf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function dg(t,n){var a=hn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Vf(n,s[1]))return s[0];if(s=t(),Fr){Le(!0);try{t()}finally{Le(!1)}}return a.memoizedState=[s,n],s}function td(t,n,a){return a===void 0||(ya&1073741824)!==0&&(we&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=y_(),_e.lanes|=t,ir|=t,a)}function hg(t,n,a,s){return oi(a,n)?a:Ja.current!==null?(t=td(t,a,s),oi(t,n)||(gn=!0),t):(ya&106)===0||(ya&1073741824)!==0&&(we&261930)===0?(gn=!0,t.memoizedState=a):(t=y_(),_e.lanes|=t,ir|=t,n)}function pg(t,n,a,s,l){var f=Rt.p;Rt.p=f!==0&&8>f?f:8;var g=ft.T,A={};A.types=g!==null?g.types:null,ft.T=A,id(t,!1,n,a);try{var B=l(),nt=ft.S;if(nt!==null&&nt(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var dt=cy(B,s);Xo(t,n,dt,di(t))}else Xo(t,n,s,di(t))}catch(yt){Xo(t,n,{then:function(){},status:"rejected",reason:yt},di())}finally{Rt.p=f,g!==null&&A.types!==null&&(g.types=A.types),ft.T=g}}function gy(){}function ed(t,n,a,s){if(t.tag!==5)throw Error(r(476));var l=mg(t).queue;pg(t,l,n,le,a===null?gy:function(){return gg(t),a(s)})}function mg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:le},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function gg(t){var n=mg(t);n.next===null&&(n=t.alternate.memoizedState),Xo(t,n.next.queue,{},di())}function nd(){return Cn(Bs)}function _g(){return hn().memoizedState}function vg(){return hn().memoizedState}function _y(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=di();t=Ka(a);var s=Qa(n,t,a);s!==null&&(ti(s,n,a),zo(s,n,a)),n={cache:Df()},t.payload=n;return}n=n.return}}function vy(t,n,a){var s=di();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gu(t)?xg(n,a):(a=Mf(t,n,a,s),a!==null&&(ti(a,t,s),Mg(a,n,s)))}function Sg(t,n,a){var s=di();Xo(t,n,a,s)}function Xo(t,n,a,s){var l={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(gu(t))xg(n,l);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,A=f(g,a);if(l.hasEagerState=!0,l.eagerState=A,oi(A,g))return Yl(t,n,l,0),Je===null&&Wl(),!1}catch{}if(a=Mf(t,n,l,s),a!==null)return ti(a,t,s),Mg(a,n,s),!0}return!1}function id(t,n,a,s){if(s={lane:2,revertLane:Yd(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},gu(t)){if(n)throw Error(r(479))}else n=Mf(t,a,s,2),n!==null&&ti(n,t,2)}function gu(t){var n=t.alternate;return t===_e||n!==null&&n===_e}function xg(t,n){vs=uu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Mg(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,vo(t,a)}}var _u={readContext:Cn,use:du,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn,useEffectEvent:fn},yg={readContext:Cn,use:du,useCallback:function(t,n){return qn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:rg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,pu(4194308,4,ug.bind(null,n,t),a)},useLayoutEffect:function(t,n){return pu(4194308,4,t,n)},useInsertionEffect:function(t,n){pu(4,2,t,n)},useMemo:function(t,n){var a=qn();n=n===void 0?null:n;var s=t();if(Fr){Le(!0);try{t()}finally{Le(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=qn();if(a!==void 0){var l=a(n);if(Fr){Le(!0);try{a(n)}finally{Le(!1)}}}else l=n;return s.memoizedState=s.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},s.queue=t,t=t.dispatch=vy.bind(null,_e,t),[s.memoizedState,t]},useRef:function(t){var n=qn();return t={current:t},n.memoizedState=t},useState:function(t){t=Qf(t);var n=t.queue,a=Sg.bind(null,_e,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:$f,useDeferredValue:function(t,n){var a=qn();return td(a,t,n)},useTransition:function(){var t=Qf(!1);return t=pg.bind(null,_e,t.queue,!0,!1),qn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=_e,l=qn();if(Ee){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Je===null)throw Error(r(349));(we&127)!==0||X0(s,n,a)}l.memoizedState=a;var f={value:a,getSnapshot:n};return l.queue=f,rg(q0.bind(null,s,f,t),[t]),s.flags|=2048,xs(9,{destroy:void 0},k0.bind(null,s,f,a,n),null),a},useId:function(){var t=qn(),n=Je.identifierPrefix;if(Ee){var a=Ki,s=Zi;a=(s&~(1<<32-pe(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=cu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=fy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:nd,useFormState:tg,useActionState:tg,useOptimistic:function(t){var n=qn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=id.bind(null,_e,!0,a),a.dispatch=n,[t,n]},useMemoCache:Yf,useCacheRefresh:function(){return qn().memoizedState=_y.bind(null,_e)},useEffectEvent:function(t){var n=qn(),a={impl:t};return n.memoizedState=a,function(){if((Ve&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Eg={readContext:Cn,use:du,useCallback:fg,useContext:Cn,useEffect:jf,useImperativeHandle:cg,useInsertionEffect:og,useLayoutEffect:lg,useMemo:dg,useReducer:hu,useRef:ag,useState:function(){return hu(Ea)},useDebugValue:$f,useDeferredValue:function(t,n){var a=hn();return hg(a,Qe.memoizedState,t,n)},useTransition:function(){var t=hu(Ea)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:Vo(t),n]},useSyncExternalStore:V0,useId:_g,useHostTransitionStatus:nd,useFormState:eg,useActionState:eg,useOptimistic:function(t,n){var a=hn();return Z0(a,Qe,t,n)},useMemoCache:Yf,useCacheRefresh:vg,useEffectEvent:sg},Sy={readContext:Cn,use:du,useCallback:fg,useContext:Cn,useEffect:jf,useImperativeHandle:cg,useInsertionEffect:og,useLayoutEffect:lg,useMemo:dg,useReducer:Kf,useRef:ag,useState:function(){return Kf(Ea)},useDebugValue:$f,useDeferredValue:function(t,n){var a=hn();return Qe===null?td(a,t,n):hg(a,Qe.memoizedState,t,n)},useTransition:function(){var t=Kf(Ea)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:Vo(t),n]},useSyncExternalStore:V0,useId:_g,useHostTransitionStatus:nd,useFormState:ig,useActionState:ig,useOptimistic:function(t,n){var a=hn();return Qe!==null?Z0(a,Qe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Yf,useCacheRefresh:vg,useEffectEvent:sg};function ad(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:F({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var rd={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=di(),l=Ka(s);l.payload=n,a!=null&&(l.callback=a),n=Qa(t,l,s),n!==null&&(ti(n,t,s),zo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=di(),l=Ka(s);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Qa(t,l,s),n!==null&&(ti(n,t,s),zo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=di(),s=Ka(a);s.tag=2,n!=null&&(s.callback=n),n=Qa(t,s,a),n!==null&&(ti(n,t,a),zo(n,t,a))}};function Tg(t,n,a,s,l,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!wo(a,s)||!wo(l,f):!0}function bg(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&rd.enqueueReplaceState(n,n.state,null)}function Br(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=F({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}function Ag(t){ql(t)}function Rg(t){console.error(t)}function Cg(t){ql(t)}function vu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function wg(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function sd(t,n,a){return a=Ka(a),a.tag=3,a.payload={element:null},a.callback=function(){vu(t,n)},a}function Dg(t){return t=Ka(t),t.tag=3,t}function Ng(t,n,a,s){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var f=s.value;t.payload=function(){return l(f)},t.callback=function(){wg(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){wg(n,a,s),typeof l!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function xy(t,n,a,s,l){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Nr(n,a,l,!0),a=wn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return zn===null?Bu():a.alternate===null&&dn===0&&(dn=3),a.flags&=-257,a.flags|=65536,a.lanes=l,s===au?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),kd(t,s,l)),!1;case 22:return a.flags|=65536,s===au?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),kd(t,s,l)),!1}throw Error(r(435,a.tag))}return kd(t,s,l),Bu(),!1}if(Ee)return n=wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,s!==Af&&(t=Error(r(422),{cause:s}),Uo(yi(t,a)))):(s!==Af&&(n=Error(r(423),{cause:s}),Uo(yi(n,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,s=yi(s,a),l=sd(t.stateNode,s,l),If(t,l),dn!==4&&(dn=2)),!1;var f=Error(r(520),{cause:s});if(f=yi(f,a),Jo===null?Jo=[f]:Jo.push(f),dn!==4&&(dn=2),n===null)return!0;s=yi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=sd(a.stateNode,s,t),If(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ar===null||!ar.has(f))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Dg(l),Ng(l,t,a,s),If(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var od=Error(r(461)),gn=!1;function xn(t,n,a,s){n.child=t===null?P0(n,null,a,s):zr(n,t.child,a,s)}function Ug(t,n,a,s,l){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var A in s)A!=="ref"&&(g[A]=s[A])}else g=s;return Ur(n),s=Xf(t,n,a,g,f,l),A=kf(),t!==null&&!gn?(qf(t,n,l),Ta(t,n,l)):(Ee&&A&&Jl(n),n.flags|=1,xn(t,n,s,l),n.child)}function Lg(t,n,a,s,l){if(t===null){var f=a.type;return typeof f=="function"&&!yf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Og(t,n,f,s,l)):(t=Kl(a.type,null,s,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!md(t,l)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:wo,a(g,s)&&t.ref===n.ref)return Ta(t,n,l)}return n.flags|=1,t=va(f,s),t.ref=n.ref,t.return=n,n.child=t}function Og(t,n,a,s,l){if(t!==null){var f=t.memoizedProps;if(wo(f,s)&&t.ref===n.ref)if(gn=!1,n.pendingProps=s=f,md(t,l))(t.flags&131072)!==0&&(gn=!0);else return n.lanes=t.lanes,Ta(t,n,l)}return ld(t,n,a,s,l)}function Pg(t,n,a,s){var l=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,l=0;s!==null;)l=l|s.lanes|s.childLanes,s=s.sibling;s=l&~f}else s=0,n.child=null;return Ig(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&nu(n,f!==null?f.cachePool:null),f!==null?F0(n,f):Ff(),B0(n);else return s=n.lanes=536870912,Ig(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(nu(n,f.cachePool),F0(n,f),$a(),n.memoizedState=null):(t!==null&&nu(n,null),Ff(),$a());return xn(t,n,l,a),n.child}function ko(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ig(t,n,a,s,l){var f=Uf();return f=f===null?null:{parent:pn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&nu(n,null),Ff(),B0(n),t!==null&&Nr(t,n,s,!0),n.childLanes=l,null}function Su(t,n){return n=xu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function zg(t,n,a){return zr(n,t.child,null,a),t=Su(n,n.pendingProps),t.flags|=2,li(n),n.memoizedState=null,t}function My(t,n,a){var s=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ee){if(s.mode==="hidden")return t=Su(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},ko(null,t);if(Hf(n),(t=tn)?(t=uv(t,bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=x0(t),a.return=n,n.child=a,En=n,tn=null)):t=null,t===null)throw qa(n);return n.lanes=536870912,null}return Su(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Hf(n),l)if(n.flags&256)n.flags&=-257,n=zg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(gn||Nr(t,n,a,!1),l=(a&t.childLanes)!==0,gn||l){if(Ja.current===null){if(s=Je,s!==null&&(g=So(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,Rr(t,g),ti(s,t,g),od;Bu()}n=zg(t,n,a)}else t=f.treeContext,tn=Ri(g.nextSibling),En=n,Ee=!0,ka=null,bi=!1,t!==null&&E0(n,t),n=Su(n,s),n.flags|=134221824;return n}return t=va(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ms(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ld(t,n,a,s,l){return Ur(n),a=Xf(t,n,a,s,void 0,l),s=kf(),t!==null&&!gn?(qf(t,n,l),Ta(t,n,l)):(Ee&&s&&Jl(n),n.flags|=1,xn(t,n,a,l),n.child)}function Fg(t,n,a,s,l,f){return Ur(n),n.updateQueue=null,a=G0(n,s,a,l),H0(t),s=kf(),t!==null&&!gn?(qf(t,n,f),Ta(t,n,f)):(Ee&&s&&Jl(n),n.flags|=1,xn(t,n,a,f),n.child)}function Bg(t,n,a,s,l){if(Ur(n),n.stateNode===null){var f=fs,g=a.contextType;typeof g=="object"&&g!==null&&(f=Cn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=rd,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Of(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Cn(g):fs,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(ad(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&rd.enqueueReplaceState(f,f.state,null),Bo(n,s,f,l),Fo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,B=Br(a,A);f.props=B;var nt=f.context,dt=a.contextType;g=fs,typeof dt=="object"&&dt!==null&&(g=Cn(dt));var yt=a.getDerivedStateFromProps;dt=typeof yt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||nt!==g)&&bg(n,f,s,g),Za=!1;var $=n.memoizedState;f.state=$,Bo(n,s,f,l),Fo(),nt=n.memoizedState,A||$!==nt||Za?(typeof yt=="function"&&(ad(n,a,yt,s),nt=n.memoizedState),(B=Za||Tg(n,a,B,s,$,nt,g))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=nt),f.props=s,f.state=nt,f.context=g,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Pf(t,n),g=n.memoizedProps,dt=Br(a,g),f.props=dt,yt=n.pendingProps,$=f.context,nt=a.contextType,B=fs,typeof nt=="object"&&nt!==null&&(B=Cn(nt)),A=a.getDerivedStateFromProps,(nt=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==yt||$!==B)&&bg(n,f,s,B),Za=!1,$=n.memoizedState,f.state=$,Bo(n,s,f,l),Fo();var ut=n.memoizedState;g!==yt||$!==ut||Za||t!==null&&t.dependencies!==null&&tu(t.dependencies)?(typeof A=="function"&&(ad(n,a,A,s),ut=n.memoizedState),(dt=Za||Tg(n,a,dt,s,$,ut,B)||t!==null&&t.dependencies!==null&&tu(t.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ut,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ut,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ut),f.props=s,f.state=ut,f.context=B,s=dt):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ms(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=zr(n,t.child,null,l),n.child=zr(n,null,a,l)):xn(t,n,a,l),n.memoizedState=f.state,t=n.child):t=Ta(t,n,l),t}function Hg(t,n,a,s){return wr(),n.flags|=256,xn(t,n,a,s),n.child}var ud={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cd(t){return{baseLanes:t,cachePool:w0()}}function fd(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=fi),t}function Gg(t,n,a){var s=n.pendingProps,l=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(Dn.current&2)!==0),g&&(l=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ee){if(l?ja(n):$a(),(t=tn)?(t=uv(t,bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=x0(t),a.return=n,n.child=a,En=n,tn=null)):t=null,t===null)throw qa(n);return ch(t)?n.lanes=32:n.lanes=536870912,null}return f=s.children,s=s.fallback,l?($a(),l=n.mode,f=xu({mode:"hidden",children:f},l),s=Cr(s,l,a,null),f.return=n,s.return=n,f.sibling=s,n.child=f,s=n.child,s.memoizedState=cd(a),s.childLanes=fd(t,g,a),n.memoizedState=ud,ko(null,s)):(ja(n),dd(n,f))}var A=t.memoizedState;if(A!==null){var B=A.dehydrated;if(B!==null)return yy(t,n,f,g,s,B,A,a)}return l?($a(),l=s.fallback,f=n.mode,A=t.child,B=A.sibling,s=va(A,{mode:"hidden",children:s.children}),s.subtreeFlags=A.subtreeFlags&1206910976,B!==null?l=va(B,l):(l=Cr(l,f,a,null),l.flags|=2),l.return=n,s.return=n,s.sibling=l,n.child=s,ko(null,s),s=n.child,l=t.child.memoizedState,l===null?l=cd(a):(f=l.cachePool,f!==null?(A=pn._currentValue,f=f.parent!==A?{parent:A,pool:A}:f):f=w0(),l={baseLanes:l.baseLanes|a,cachePool:f}),s.memoizedState=l,s.childLanes=fd(t,g,a),n.memoizedState=ud,ko(t.child,s)):(ja(n),a=t.child,t=a.sibling,a=va(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function dd(t,n){return n=xu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function xu(t,n){return t=Qn(22,t,null,n),t.lanes=0,t}function Mu(t,n,a){return zr(n,t.child,null,a),t=dd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function yy(t,n,a,s,l,f,g,A){if(a)return n.flags&256?(ja(n),n.flags&=-257,Mu(t,n,A)):n.memoizedState!==null?($a(),n.child=t.child,n.flags|=128,null):($a(),f=l.fallback,g=n.mode,l=xu({mode:"visible",children:l.children},g),f=Cr(f,g,A,null),f.flags|=2,l.return=n,f.return=n,l.sibling=f,n.child=l,zr(n,t.child,null,A),l=n.child,l.memoizedState=cd(A),l.childLanes=fd(t,s,A),n.memoizedState=ud,ko(null,l));if(ja(n),ch(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var B=s.dgst;return s=B,s!==""&&(l=Error(r(419)),l.stack="",l.digest=s,Uo({value:l,source:null,stack:null})),Mu(t,n,A)}if(gn||Nr(t,n,A,!1),s=(A&t.childLanes)!==0,gn||s){if(Ja.current!==null)return Mu(t,n,A);if(s=Je,s!==null&&(l=So(s,A),l!==0&&l!==g.retryLane))throw g.retryLane=l,Rr(t,l),ti(s,t,l),od;return uh(f)||Bu(),Mu(t,n,A)}return uh(f)?(n.flags|=192,n.child=t.child,null):(t=g.treeContext,tn=Ri(f.nextSibling),En=n,Ee=!0,ka=null,bi=!1,t!==null&&E0(n,t),n=dd(n,l.children),n.flags|=134221824,n)}function Vg(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),$l(t.return,n,a)}function Xg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&lu(a)===null&&(n=t),t=t.sibling}return n}function yu(t,n,a,s,l,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:l,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=l,g.treeForkCount=f)}function hd(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function pd(t,n,a){var s=n.pendingProps,l=s.revealOrder,f=s.tail;s=s.children;var g=Dn.current;if(n.flags&128)return Ho(n,g),null;var A=(g&2)!==0;if(A?(g=g&1|2,n.flags|=128):g&=1,Ho(n,g),l==="backwards"&&t!==null?(hd(t),xn(t,n,s,a),hd(t)):xn(t,n,s,a),s=Ee?No:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vg(t,a,n);else if(t.tag===19)Vg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":a=Xg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,hd(n)),yu(n,!0,l,null,f,s);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&lu(t)===null){n.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}yu(n,!0,a,null,f,s);break;case"together":yu(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=Xg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),yu(n,!1,l,a,f,s)}return n.child}function kg(t,n,a){var s=n.pendingProps;return Wa(n,n.type,s.value),xn(t,n,s.children,a),n.child}function Ta(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ir|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Nr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=va(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=va(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function md(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&tu(t)))}function Ey(t,n,a){switch(n.tag){case 3:Y(n,n.stateNode.containerInfo),Wa(n,pn,t.memoizedState.cache),wr();break;case 27:case 5:Be(n);break;case 4:Y(n,n.stateNode.containerInfo);break;case 10:Wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return ja(n),n.flags|=128,null;s=Nr(t,n,a,!1);var l=n.child.childLanes;return s||(a&l)!==0?Gg(t,n,a):(ja(n),t=Ta(t,n,a),t!==null?t.sibling:null)}ja(n);break;case 19:if(n.flags&128)return pd(t,n,a);if(l=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Nr(t,n,a,!1),s=(a&n.childLanes)!==0),l){if(s)return pd(t,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ho(n,Dn.current),s)break;return null;case 22:return n.lanes=0,Pg(t,n,a,n.pendingProps);case 24:Wa(n,pn,t.memoizedState.cache)}return Ta(t,n,a)}function qg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)gn=!0;else{if(!md(t,a)&&(n.flags&128)===0)return gn=!1,Ey(t,n,a);gn=(t.flags&131072)!==0}else gn=!1,Ee&&(n.flags&1048576)!==0&&y0(n,No,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Pr(n.elementType),n.type=t,typeof t=="function")yf(t)?(s=Br(t,s),n.tag=1,n=Bg(null,n,t,s,a)):(n.tag=0,n=ld(null,n,t,s,a));else{if(t!=null){var l=t.$$typeof;if(l===q){n.tag=11,n=Ug(null,n,t,s,a);break t}else if(l===it){n.tag=14,n=Lg(null,n,t,s,a);break t}else if(l===Q){n.tag=10,n.type=t,n=kg(null,n,a);break t}}throw n=St(t)||t,Error(r(306,n,""))}}return n;case 0:return ld(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,l=Br(s,n.pendingProps),Bg(t,n,s,l,a);case 3:t:{if(Y(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;l=f.element,Pf(t,n),Bo(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Wa(n,pn,s),s!==f.cache&&wf(n,[pn],a,!0),Fo(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Hg(t,n,s,a);break t}else if(s!==l){l=yi(Error(r(424)),n),Uo(l),n=Hg(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,tn=Ri(t.firstChild),En=n,Ee=!0,ka=null,bi=!0,a=P0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(wr(),s===l){n=Ta(t,n,a);break t}xn(t,n,s,a)}n=n.child}return n;case 26:return Ms(t,n),t===null?(a=gv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(n.stateNode=K_(n.type,n.pendingProps,Ue.current,n)):n.memoizedState=gv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Be(n),t===null&&Ee&&(s=n.stateNode=dv(n.type,n.pendingProps,Ue.current),En=n,bi=!0,l=tn,or(n.type)?(fh=l,tn=Ri(s.firstChild)):tn=l),xn(t,n,n.pendingProps.children,a),Ms(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ee&&((l=s=tn)&&(s=_E(s,n.type,n.pendingProps,bi),s!==null?(n.stateNode=s,En=n,tn=Ri(s.firstChild),bi=!1,l=!0):l=!1),l||qa(n)),Be(n),l=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,nh(l,f)?s=null:g!==null&&nh(l,g)&&(n.flags|=32),n.memoizedState!==null&&(l=Xf(t,n,dy,null,null,a),Bs._currentValue=l),Ms(t,n),xn(t,n,s,a),n.child;case 6:return t===null&&Ee&&((t=a=tn)&&(a=vE(a,n.pendingProps,bi),a!==null?(n.stateNode=a,En=n,tn=null,t=!0):t=!1),t||qa(n)),null;case 13:return Gg(t,n,a);case 4:return Y(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=zr(n,null,s,a):xn(t,n,s,a),n.child;case 11:return Ug(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Ms(t,n),xn(t,n,s,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return kg(t,n,a);case 9:return l=n.type._context,s=n.pendingProps.children,Ur(n),l=Cn(l),s=s(l),n.flags|=1,xn(t,n,s,a),n.child;case 14:return Lg(t,n,n.type,n.pendingProps,a);case 15:return Og(t,n,n.type,n.pendingProps,a);case 19:return pd(t,n,a);case 31:return My(t,n,a);case 22:return Pg(t,n,a,n.pendingProps);case 24:return Ur(n),s=Cn(pn),t===null?(l=Uf(),l===null&&(l=Je,f=Df(),l.pooledCache=f,f.refCount++,f!==null&&(l.pooledCacheLanes|=a),l=f),n.memoizedState={parent:s,cache:l},Of(n),Wa(n,pn,l)):((t.lanes&a)!==0&&(Pf(t,n),Bo(n,null,null,a),Fo()),l=t.memoizedState,f=n.memoizedState,l.parent!==s?(l={parent:s,cache:s},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Wa(n,pn,s)):(s=f.cache,Wa(n,pn,s),s!==l.cache&&wf(n,[pn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:Ee&&Jl(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:Ms(t,n),xn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ba(t){t.flags|=4}function gd(t,n,a,s,l){var f;if((f=(t.mode&32)!==0)&&(f=a===null?xv(n,s):xv(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(A_())t.flags|=8192;else throw Ir=au,Lf}else t.flags&=-16777217}function Wg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Mv(n))if(A_())t.flags|=8192;else throw Ir=au,Lf}function Eu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?_o():536870912,t.lanes|=n,As|=n)}function qo(t,n){if(!Ee)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags&1206910976,s|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Ty(t,n,a){var s=n.pendingProps;switch(bf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ma(pn),sn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ps(n)?ba(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Rf())),en(n),null;case 26:var l=n.type,f=n.memoizedState;return t===null?(ba(n),f!==null?(en(n),Wg(n,f)):(en(n),gd(n,l,null,s,a))):f?f!==t.memoizedState?(ba(n),en(n),Wg(n,f)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ba(n),en(n),gd(n,l,t,s,a)),null;case 27:if(z(n),a=Ue.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ba(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return en(n),n.subtreeFlags&=-33554433,null}t=Ne.current,ps(n)?T0(n):(t=dv(l,s,a),n.stateNode=t,ba(n))}return en(n),n.subtreeFlags&=-33554433,null;case 5:if(z(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ba(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return en(n),n.subtreeFlags&=-33554433,null}if(f=Ne.current,ps(n))T0(n);else{var g=nl(Ue.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(l,{is:s.is}):g.createElement(l)}}f[b]=n,f[Z]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Un(f,l,s),l){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ba(n)}}return en(n),n.subtreeFlags&=-33554433,gd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ba(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Ue.current,ps(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,l=En,l!==null)switch(l.tag){case 27:case 5:s=l.memoizedProps}t[b]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||q_(t.nodeValue,a)),t||qa(n,!0)}else t=nl(t).createTextNode(s),t[b]=n,n.stateNode=t}return en(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=ps(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[b]=n}else wr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else a=Rf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(li(n),n):(li(n),null);if((n.flags&128)!==0)throw Error(r(558))}return en(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=ps(n),s!==null&&s.dehydrated!==null){if(t===null){if(!l)throw Error(r(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[b]=n}else wr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),l=!1}else l=Rf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(li(n),n):(li(n),null)}return li(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,l=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(l=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==l&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Eu(n,n.updateQueue),en(n),null);case 4:return sn(),t===null&&Jd(n.stateNode.containerInfo),n.flags|=67108864,en(n),null;case 10:return Ma(n.type),en(n),null;case 19:if(Gf(n),s=n.memoizedState,s===null)return en(n),null;if(l=(n.flags&128)!==0,f=s.rendering,f===null)if(l)qo(s,!1);else{if(dn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=lu(t),f!==null){for(n.flags|=128,qo(s,!1),t=f.updateQueue,n.updateQueue=t,Eu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)S0(a,t),a=a.sibling;return Ho(n,Dn.current&1|2),Ee&&Sa(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&Wt()>Pu&&(n.flags|=128,l=!0,qo(s,!1),n.lanes=4194304)}else{if(!l)if(t=lu(f),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,Eu(n,t),qo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!f.alternate&&!Ee)return en(n),null}else 2*Wt()-s.renderingStartTime>Pu&&a!==536870912&&(n.flags|=128,l=!0,qo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Wt(),t.sibling=null,f=Dn.current,f=l?f&1|2:f&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||Ee?Ho(n,f):(a=f,ie(wn,n),ie(Dn,a),zn===null&&(zn=n)),Ee&&Sa(n,s.treeForkCount),t}return en(n),null;case 22:case 23:return li(n),Bf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&Eu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Ht(Or),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ma(pn),en(n),null;case 25:return null;case 30:return n.flags|=33554432,en(n),null}throw Error(r(156,n.tag))}function by(t,n){switch(bf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ma(pn),sn(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return z(n),null;case 31:if(n.memoizedState!==null){if(li(n),n.alternate===null)throw Error(r(340));wr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(li(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));wr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Gf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return sn(),null;case 10:return Ma(n.type),null;case 22:case 23:return li(n),Bf(),t!==null&&Ht(Or),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ma(pn),null;case 25:return null;default:return null}}function Yg(t,n){switch(bf(n),n.tag){case 3:Ma(pn),sn();break;case 26:case 27:case 5:z(n);break;case 4:sn();break;case 31:n.memoizedState!==null&&li(n);break;case 13:li(n);break;case 19:Gf(n);break;case 10:Ma(n.type);break;case 22:case 23:li(n),Bf(),t!==null&&Ht(Or);break;case 24:Ma(pn)}}function Wo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var l=s.next;a=l;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==l)}}catch(A){We(n,n.return,A)}}function tr(t,n,a){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){var g=s.inst,A=g.destroy;if(A!==void 0){g.destroy=void 0,l=n;var B=a,nt=A;try{nt()}catch(dt){We(l,B,dt)}}}s=s.next}while(s!==f)}}catch(dt){We(n,n.return,dt)}}function Zg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{z0(n,a)}catch(s){We(t,t.return,s)}}}function Kg(t,n,a){a.props=Br(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){We(t,n,s)}}function Qi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var l=t.stateNode,f=ga(t.memoizedProps,l);(l.ref===null||l.ref.name!==f)&&(l.ref=nv(f)),s=l.ref;break;case 7:if(t.stateNode===null){var g=new hi(t);_(t.child,!1,mE,g,void 0,void 0),t.stateNode=g}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(A){We(t,n,A)}}function Nn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(l){We(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){We(t,n,l)}else a.current=null}function Tu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)lv(t.stateNode,n[a])}function Qg(t){for(var n=t.return;n!==null&&(vd(n)&&lv(t.stateNode,n.stateNode),!_d(n));)n=n.return}function Yo(t){for(var n=t.return;n!==null&&(vd(n)&&gE(t.stateNode,n.stateNode),!_d(n));)n=n.return}function _d(t){return t.tag===5||t.tag===3||t.tag===27}function vd(t){return t&&t.tag===7&&t.stateNode!==null}function Sd(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(l){We(t,t.return,l)}}function xd(t,n,a){try{var s=t.stateNode;Jy(s,t.type,a,n),s[Z]=n}catch(l){We(t,t.return,l)}}function Jg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&or(t.type)||t.tag===4}function Md(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Jg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&or(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yd(t,n,a,s){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi)),Tu(t,s),ye=!0;else if(l!==4&&(l===27&&(Tu(t,s),s=null,or(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(yd(t,n,a,s),t=t.sibling;t!==null;)yd(t,n,a,s),t=t.sibling}function bu(t,n,a,s){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?a.insertBefore(l,n):a.appendChild(l),Tu(t,s),ye=!0;else if(l!==4&&(l===27&&(Tu(t,s),s=null,or(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(bu(t,n,a,s),t=t.sibling;t!==null;)bu(t,n,a,s),t=t.sibling}function jg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Un(n,s,a),n[b]=t,n[Z]=a}catch(f){We(t,t.return,f)}}var Au=!1,ui=null;function $g(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Au=!0)}var Ji=null;function t_(){var t=Ji;return Ji=null,t}var Jn=0;function ys(t,n,a,s,l){return Jn=0,e_(t.child,n,a,s,l)}function e_(t,n,a,s,l){for(var f=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(s!==null){var A=rh(g);s.push(A),A.view&&(f=!0)}else f||rh(g).view&&(f=!0);Au=!0,tv(g,Jn===0?n:n+"_"+Jn,a),Jn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||e_(t.child,n,a,s,l)&&(f=!0));t=t.sibling}return f}function ji(t,n){for(;t!==null;)t.tag===5?ev(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||ji(t.child,n)),t=t.sibling}function Ru(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Ru(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=_a(n.default,n.share),n!=="none"&&(ys(t,a,n,null,!1)||ji(t.child,!1))}t=t.sibling}}function Ed(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,l=ga(s,a),f=_a(s.default,a.paired?s.share:s.enter);f!=="none"?ys(t,l,f,null,!1)?(Ru(t),a.paired||n||Ds(t,s.onEnter)):ji(t.child,!1):Ru(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Ed(t,n),t=t.sibling;else Ru(t)}function Td(t){if(ui!==null&&ui.size!==0){var n=ui;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var l=n.get(s);if(l!==void 0){var f=_a(a.default,a.share);if(f!=="none"&&(ys(t,s,f,null,!1)?(f=t.stateNode,l.paired=f,f.paired=l,Ds(t,a.onShare)):ji(t.child,!1)),n.delete(s),n.size===0)break}}}Td(t)}t=t.sibling}}}function bd(t){if(t.tag===30){var n=t.memoizedProps,a=ga(n,t.stateNode),s=ui!==null?ui.get(a):void 0,l=_a(n.default,s!==void 0?n.share:n.exit);l!=="none"&&(ys(t,a,l,null,!1)?s!==void 0?(l=t.stateNode,s.paired=l,l.paired=s,ui.delete(a),Ds(t,n.onShare)):Ds(t,n.onExit):ji(t.child,!1)),ui!==null&&Td(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)bd(t),t=t.sibling;else ui!==null&&Td(t)}function n_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ga(n,t.stateNode);n=_a(n.default,n.update),t.flags&=-5,n!=="none"&&ys(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&n_(t);t=t.sibling}}function Ad(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,ji(t.child,!1))}Ad(t)}t=t.sibling}}function Cu(t){if(t.tag===30)t.stateNode.paired=null,ji(t.child,!1),Ad(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Cu(t),t=t.sibling;else Ad(t)}function i_(t){for(t=t.child;t!==null;)t.tag===30?ji(t.child,!1):(t.subtreeFlags&33554432)!==0&&i_(t),t=t.sibling}function Rd(t,n,a,s,l,f,g){for(var A=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(f!==null&&Jn<f.length){var nt=f[Jn],dt=rh(B);(nt.view||dt.view)&&(A=!0);var yt;if(yt=(t.flags&4)===0)if(dt.clip)yt=!0;else{yt=nt.rect;var $=dt.rect;yt=yt.y!==$.y||yt.x!==$.x||yt.height!==$.height||yt.width!==$.width}yt&&(t.flags|=4),dt.abs?dt=!nt.abs:(nt=nt.rect,dt=dt.rect,dt=nt.height!==dt.height||nt.width!==dt.width),dt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&tv(B,Jn===0?a:a+"_"+Jn,l),A&&(t.flags&4)!==0||(Ji===null&&(Ji=[]),Ji.push(B,Jn===0?s:s+"_"+Jn,n.memoizedProps)),Jn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?t.flags|=n.flags&32:Rd(t,n.child,a,s,l,f,g)&&(A=!0));n=n.sibling}return A}function a_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,l=ga(a,s),f=_a(a.default,a.update),g;g=t.memoizedState,t.memoizedState=null,s=t;var A=t.child;Jn=0,l=Rd(s,A,l,l,f,g,!1),(t.flags&4)!==0&&l&&Ds(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&a_(t);t=t.sibling}}var Tn=!1,ke=!1,$i=!1,Cd=!1,r_=typeof WeakSet=="function"?WeakSet:Set,bn=null,ta=!1,Zo=!1,wu=!1,wd=!1;function Ay(t,n,a){if(t=t.containerInfo,th=Hs,t=u0(t),mf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break t}var A=0,B=-1,nt=-1,dt=0,yt=0,$=t,ut=null;e:for(;;){for(var It;$!==s||f!==0&&$.nodeType!==3||(B=A+f),$!==g||l!==0&&$.nodeType!==3||(nt=A+l),$.nodeType===3&&(A+=$.nodeValue.length),(It=$.firstChild)!==null;)ut=$,$=It;for(;;){if($===t)break e;if(ut===s&&++dt===f&&(B=A),ut===g&&++yt===l&&(nt=A),(It=$.nextSibling)!==null)break;$=ut,ut=$.parentNode}$=It}s=B===-1||nt===-1?null:{start:B,end:nt}}else s=null}s=s||{start:0,end:0}}else s=null;for(eh={focusedElem:t,selectionRange:s},Hs=!1,a=(a&335544064)===a,bn=n,n=a?9270:1024;bn!==null;){if(t=bn,a&&(s=t.deletions,s!==null))for(f=0;f<s.length;f++)a&&bd(s[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&$g(t),Du(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&bd(s),Du(a);continue}else if(s!==null&&s.memoizedState!==null){a&&$g(t),Du(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,bn=s):(a&&n_(t),Du(a))}}ui=null}function Du(t){for(;bn!==null;){var n=bn,a=t,s=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&s!==null){a=void 0,l=s.memoizedProps,s=s.memoizedState;var f=n.stateNode;try{var g=Br(n.type,l);a=f.getSnapshotBeforeUpdate(g,s),f.__reactInternalSnapshotBeforeUpdate=a}catch(A){We(n,n.return,A)}}break;case 3:if((l&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)lh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":lh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=ga(s.memoizedProps,s.stateNode),l=n.memoizedProps,l=_a(l.default,l.update),l!=="none"&&ys(s,a,l,s.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,bn=s;break}bn=n.return}}function s_(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ea(t,a),s&4&&Wo(5,a);break;case 1:if(ea(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){We(a,a.return,g)}else{var l=Br(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){We(a,a.return,g)}}s&64&&Zg(a),s&512&&Qi(a,a.return);break;case 3:if(ea(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{z0(t,n)}catch(g){We(a,a.return,g)}}break;case 27:n===null&&s&4&&jg(a);case 26:case 5:ea(t,a),n===null&&s&4&&Sd(a),s&512&&Qi(a,a.return);break;case 12:ea(t,a);break;case 31:ea(t,a),s&4&&c_(t,a);break;case 13:ea(t,a),s&4&&f_(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Fy.bind(null,a),SE(t,a))));break;case 22:if(s=a.memoizedState!==null||Tn,!s){var f=n!==null&&n.memoizedState!==null||ke;n=Tn,l=ke,Tn=s,(ke=f)&&!l?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Li(t,a,s)):ea(t,a),Tn=n,ke=l}break;case 30:ea(t,a),s&512&&Qi(a,a.return);break;case 7:s&512&&Qi(a,a.return);default:ea(t,a)}}function Dd(t,n){for(t=t.child;t!==null;)o_(t,n),t=t.sibling}function o_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var l=t.stateNode,f=t.memoizedProps.style,g=f!=null&&f.hasOwnProperty("display")?f.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(B){We(t,t.return,B)}Nd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,ye=!0}catch(B){We(t,t.return,B)}break;case 18:try{var A=t.stateNode;n?$_(A,!0):$_(t.stateNode,!1)}catch(B){We(t,t.return,B)}break;case 22:case 23:t.memoizedState===null&&Dd(t,n);break;default:Dd(t,n)}}function Nd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:o_(a,s);break t;case 22:a.memoizedState===null&&Nd(a,s);break t;default:Nd(a,s)}}t=t.sibling}}function l_(t){var n=t.alternate;n!==null&&(t.alternate=null,l_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Jt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var an=null,jn=!1;function Ni(t,n,a){for(a=a.child;a!==null;)u_(t,n,a),a=a.sibling}function u_(t,n,a){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount($t,a)}catch{}switch(a.tag){case 26:ke||Nn(a,n),Ni(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!ke&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ke||Nn(a,n),Yo(a);var s=an,l=jn;or(a.type)&&(an=a.stateNode,jn=!1),Ni(t,n,a),hv(a.stateNode,a.type,a.memoizedProps),an=s,jn=l;break;case 5:ke||Nn(a,n),Yo(a);case 6:if(a.tag===6&&Yo(a),s=an,l=jn,an=null,Ni(t,n,a),an=s,jn=l,an!==null)if(jn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(a.stateNode),ye=!0}catch(f){We(a,n,f)}else try{an.removeChild(a.stateNode),ye=!0}catch(f){We(a,n,f)}break;case 18:an!==null&&(jn?(t=an,j_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Gs(t)):j_(an,a.stateNode));break;case 4:s=an,l=jn,an=a.stateNode.containerInfo,jn=!0,Ni(t,n,a),an=s,jn=l;break;case 0:case 11:case 14:case 15:tr(2,a,n),ke||tr(4,a,n),Ni(t,n,a);break;case 1:ke||(Nn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Kg(a,n,s)),Ni(t,n,a);break;case 21:Ni(t,n,a);break;case 22:ke=(s=ke)||a.memoizedState!==null,Ni(t,n,a),ke=s;break;case 30:Nn(a,n),Ni(t,n,a);break;case 7:ke||Nn(a,n),Ni(t,n,a);break;default:Ni(t,n,a)}}function c_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Gs(t)}catch(a){We(n,n.return,a)}}}function f_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Gs(t)}catch(a){We(n,n.return,a)}}function Ry(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new r_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new r_),n;default:throw Error(r(435,t.tag))}}function Nu(t,n){var a=Ry(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var l=By.bind(null,t,s);s.then(l,l)}})}function Wn(t,n,a){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],g=t,A=n,B=A;t:for(;B!==null;){switch(B.tag){case 27:if(or(B.type)){an=B.stateNode,jn=!1;break t}break;case 5:an=B.stateNode,jn=!1;break t;case 3:case 4:an=B.stateNode.containerInfo,jn=!0;break t}B=B.return}if(an===null)throw Error(r(160));u_(g,A,f),an=null,jn=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)d_(n,t,a),n=n.sibling}var Ui=null;function d_(t,n,a){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var f=0;f<s.length;f++){var g=s[f];g.ref.impl=g.nextImpl}Wn(n,t,a),Yn(t),l&4&&(tr(3,t,t.return),Wo(3,t),tr(5,t,t.return));break;case 1:Wn(n,t,a),Yn(t),l&512&&(ke||s===null||Nn(s,s.return)),l&64&&Tn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Ui,Wn(n,t,a),Yn(t),l&512&&(ke||s===null||Nn(s,s.return)),l&4)if(l=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(Tn)t.stateNode=K_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,l=f.ownerDocument||f;e:switch(n){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Pt]||s[b]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(n),l.head.insertBefore(s,l.querySelector("head > title"))),Un(s,n,a),s[b]=t,Me(s),n=s;break t;case"link":if(f=Sv("link","href",l).get(n+(a.href||""))){for(g=0;g<f.length;g++)if(s=f[g],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(g,1);break e}}s=l.createElement(n),Un(s,n,a),l.head.appendChild(s);break;case"meta":if(f=Sv("meta","content",l).get(n+(a.content||""))){for(g=0;g<f.length;g++)if(s=f[g],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(g,1);break e}}s=l.createElement(n),Un(s,n,a),l.head.appendChild(s);break;default:throw Error(r(468,n))}s[b]=t,Me(s),n=s}t.stateNode=n}else Tn||mh(f,t.type,t.stateNode);else t.stateNode=vv(f,a,t.memoizedProps);else l!==a?(l===null?(n=s.stateNode,n===null||ke||n.parentNode.removeChild(n)):l.count--,a===null?Tn||mh(f,t.type,t.stateNode):vv(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&xd(t,t.memoizedProps,s.memoizedProps);break;case 27:Wn(n,t,a),Yn(t),l&512&&(ke||s===null||Nn(s,s.return)),s!==null&&l&4&&xd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(f=$i,$i=!1,Wn(n,t,a),$i=f,Yn(t),l&512&&(ke||s===null||Nn(s,s.return)),t.flags&32){n=t.stateNode;try{as(n,""),ye=!0}catch(dt){We(t,t.return,dt)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,xd(t,n,s!==null?s.memoizedProps:n)),l&1024&&(Cd=!0);break;case 6:if(Wn(n,t,a),Yn(t),l&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,ye=!0}catch(dt){We(t,t.return,dt)}}break;case 3:if(ye=!1,Wu=null,f=Ui,Ui=il(n.containerInfo),Wn(n,t,a),Ui=f,Yn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Gs(n.containerInfo)}catch(dt){We(t,t.return,dt)}Cd&&(Cd=!1,h_(t)),ye=!1;break;case 4:l=$i,$i=Tn,s=Ge(),f=Ui,Ui=il(t.stateNode.containerInfo),Wn(n,t,a),Yn(t),Ui=f,ye&&Zo&&(wu=!0),ye=s,$i=l;break;case 12:Wn(n,t,a),Yn(t);break;case 31:Wn(n,t,a),Yn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Nu(t,n)));break;case 13:Wn(n,t,a),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ou=Wt()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Nu(t,n)));break;case 22:f=t.memoizedState!==null,g=s!==null&&s.memoizedState!==null;var A=Tn,B=ke,nt=$i;Tn=A||f,$i=nt||f,ke=B||g,Wn(n,t,a),ke=B,$i=nt,Tn=A,Yn(t),l&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||s===null||g||Tn||ke||(n=g||ke,a=Tn,s=ke,Tn=f||Tn,ke=n,er(t,2),Tn=a,ke=s),!f&&$i||Dd(t,f)),l&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Nu(t,a))));break;case 19:Wn(n,t,a),Yn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Nu(t,n)));break;case 30:l&512&&(ke||s===null||Nn(s,s.return)),l=Ge(),f=Zo,g=(a&335544064)===a,A=t.memoizedProps,Zo=g&&_a(A.default,A.update)!=="none",Wn(n,t,a),Yn(t),g&&s!==null&&ye&&(t.flags|=4),Zo=f,ye=l;break;case 21:break;case 7:l&512&&(ke||s===null||Nn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Wn(n,t,a),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Jg(s)){a=s;break}s=s.return}s=null;for(var l=t.return;l!==null;){if(vd(l)){var f=l.stateNode;s===null?s=[f]:s.push(f)}if(_d(l))break;l=l.return}var g=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var A=a.stateNode,B=Md(t);bu(t,B,A,g);break;case 5:var nt=a.stateNode;a.flags&32&&(as(nt,""),a.flags&=-33);var dt=Md(t);bu(t,dt,nt,g);break;case 3:case 4:var yt=a.stateNode.containerInfo,$=Md(t);yd(t,$,yt,g);break;default:throw Error(r(161))}}catch(ut){We(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function h_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;h_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Hs=!0,n.reset(),Hs=!1),t=t.sibling}}function Es(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)p_(n,t),n=n.sibling;else a_(n)}function p_(t,n){var a=t.alternate;if(a===null)Ed(t,!1);else switch(t.tag){case 3:if(wd=ta=!1,t_(),Es(n,t),!ta&&!wu){if(t=Ji,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var l=t[s+1];ev(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),wd=!0}Ji=null;break;case 5:Es(n,t);break;case 4:s=ta,ta=!1,Es(n,t),ta&&(wu=!0),ta=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Ed(t,!1):Es(n,t));break;case 30:s=ta,l=t_(),ta=!1,Es(n,t),ta&&(t.flags|=4);var f=t.memoizedProps,g=t.stateNode;n=ga(f,g),g=ga(a.memoizedProps,g);var A=_a(f.default,f.update);A==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,Jn=0,n=Rd(t,a,n,g,A,f,!0),Jn!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Ds(t,t.memoizedProps.onUpdate),Ji=l):l!==null&&(l.push.apply(l,Ji),Ji=l),ta=(t.flags&32)!==0?!0:s;break;default:Es(n,t)}}function ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)s_(t,n.alternate,n),n=n.sibling}function er(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:tr(4,a,a.return),er(a,s);break;case 1:Nn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&Kg(a,a.return,l),er(a,s);break;case 27:(s&2)!==0&&hv(a.stateNode,a.type,a.memoizedProps);case 5:Nn(a,a.return),a.tag!==5&&a.tag!==27||Yo(a),er(a,s);break;case 6:Yo(a);break;case 26:Nn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||ke||l.parentNode.removeChild(l),er(a,s);break;case 22:a.memoizedState===null&&er(a,s);break;case 30:Nn(a,a.return),er(a,s);break;case 7:Nn(a,a.return);default:er(a,s)}t=t.sibling}}function Li(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,l=t,f=n,g=f.flags,A=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Li(l,f,a),Wo(4,f);break;case 1:if(Li(l,f,a),s=f,l=s.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(dt){We(s,s.return,dt)}if(s=f,l=s.updateQueue,l!==null){var B=s.stateNode;try{var nt=l.shared.hiddenCallbacks;if(nt!==null)for(l.shared.hiddenCallbacks=null,l=0;l<nt.length;l++)I0(nt[l],B)}catch(dt){We(s,s.return,dt)}}A&&g&64&&Zg(f),Qi(f,f.return);break;case 27:(a&2)!==0&&jg(f);case 5:f.tag!==5&&f.tag!==27||Qg(f),Li(l,f,a),A&&s===null&&g&4&&Sd(f),Qi(f,f.return);break;case 6:Qg(f);break;case 26:B=f.stateNode,f.memoizedState!==null||B===null||Tn||mh(il(B.ownerDocument),f.type,B),Li(l,f,a),A&&s===null&&g&4&&Sd(f),Qi(f,f.return);break;case 12:Li(l,f,a);break;case 31:Li(l,f,a),A&&g&4&&c_(l,f);break;case 13:Li(l,f,a),A&&g&4&&f_(l,f);break;case 22:f.memoizedState===null&&Li(l,f,a),Qi(f,f.return);break;case 30:Li(l,f,a),Qi(f,f.return);break;case 7:Qi(f,f.return);default:Li(l,f,a)}n=n.sibling}}function Ud(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Lo(a))}function Ld(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Lo(t))}function Ai(t,n,a,s){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)m_(t,n,a,s),n=n.sibling;else l&&i_(n)}function m_(t,n,a,s){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Cu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(t,n,a,s),f&2048&&Wo(9,n);break;case 1:Ai(t,n,a,s);break;case 3:Ai(t,n,a,s),l&&wd&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Lo(f)));break;case 12:if(f&2048){Ai(t,n,a,s),f=n.stateNode;try{var g=n.memoizedProps,A=g.id,B=g.onPostCommit;typeof B=="function"&&B(A,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(nt){We(n,n.return,nt)}}else Ai(t,n,a,s);break;case 31:Ai(t,n,a,s);break;case 13:Ai(t,n,a,s);break;case 23:break;case 22:g=n.stateNode,A=n.alternate,n.memoizedState!==null?(l&&A!==null&&A.memoizedState===null&&Cu(A),g._visibility&2?Ai(t,n,a,s):Ko(t,n)):(l&&A!==null&&A.memoizedState!==null&&Cu(n),g._visibility&2?Ai(t,n,a,s):(g._visibility|=2,Ts(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Ud(A,n);break;case 24:Ai(t,n,a,s),f&2048&&Ld(n.alternate,n);break;case 30:l&&(f=n.alternate,f!==null&&(ji(f.child,!0),ji(n.child,!0))),Ai(t,n,a,s);break;default:Ai(t,n,a,s)}}function Ts(t,n,a,s,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,A=a,B=s,nt=g.flags;switch(g.tag){case 0:case 11:case 15:Ts(f,g,A,B,l),Wo(8,g);break;case 23:break;case 22:var dt=g.stateNode;g.memoizedState!==null?dt._visibility&2?Ts(f,g,A,B,l):Ko(f,g):(dt._visibility|=2,Ts(f,g,A,B,l)),l&&nt&2048&&Ud(g.alternate,g);break;case 24:Ts(f,g,A,B,l),l&&nt&2048&&Ld(g.alternate,g);break;default:Ts(f,g,A,B,l)}n=n.sibling}}function Ko(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,l=s.flags;switch(s.tag){case 22:Ko(a,s),l&2048&&Ud(s.alternate,s);break;case 24:Ko(a,s),l&2048&&Ld(s.alternate,s);break;default:Ko(a,s)}n=n.sibling}}var Hr=8192;function Gr(t,n,a){if(t.subtreeFlags&Hr)for(t=t.child;t!==null;)g_(t,n,a),t=t.sibling}function g_(t,n,a){switch(t.tag){case 26:Gr(t,n,a),t.flags&Hr&&(t.memoizedState!==null?LE(a,Ui,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Ev(a,t)));break;case 5:Gr(t,n,a),t.flags&Hr&&(t=t.stateNode,(n&335544128)===n&&Ev(a,t));break;case 3:case 4:var s=Ui;Ui=il(t.stateNode.containerInfo),Gr(t,n,a),Ui=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Hr,Hr=16777216,Gr(t,n,a),Hr=s):Gr(t,n,a));break;case 30:if((t.flags&Hr)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var l=t.stateNode;l.paired=null,ui===null&&(ui=new Map),ui.set(s,l)}Gr(t,n,a);break;default:Gr(t,n,a)}}function __(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Qo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];bn=s,S_(s,t)}__(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)v_(t),t=t.sibling}function v_(t){switch(t.tag){case 0:case 11:case 15:Qo(t),t.flags&2048&&tr(9,t,t.return);break;case 3:Qo(t);break;case 12:Qo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Uu(t)):Qo(t);break;default:Qo(t)}}function Uu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];bn=s,S_(s,t)}__(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:tr(8,n,n.return),Uu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Uu(n));break;default:Uu(n)}t=t.sibling}}function S_(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:tr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Lo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,bn=s;else t:for(a=t;bn!==null;){s=bn;var l=s.sibling,f=s.return;if(l_(s),s===a){bn=null;break t}if(l!==null){l.return=f,bn=l;break t}bn=f}}}var Cy={getCacheForType:function(t){var n=Cn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(pn).controller.signal}},wy=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Je=null,be=null,we=0,qe=0,ci=null,nr=!1,bs=!1,Od=!1,Aa=0,dn=0,ir=0,Vr=0,Lu=0,fi=0,As=0,Jo=null,$n=null,Pd=!1,Ou=0,x_=0,Pu=1/0,Iu=null,ar=null,on=0,Oi=null,Xr=null,na=0,Id=0,zd=null,M_=null,Rs=null,Cs=null,ws=null,jo=0,zu=null;function di(){return(Ve&2)!==0&&we!==0?we&-we:ft.T!==null?Yd():Pl()}function y_(){if(fi===0)if((we&536870912)===0||Ee){var t=yr;yr<<=1,(yr&3932160)===0&&(yr=262144),fi=t}else fi=536870912;return t=wn.current,t!==null&&(t.flags|=32),fi}function Ds(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=nv(ga(t.memoizedProps,a))),Cs===null&&(Cs=[]),Cs.push(n.bind(null,s))}}function ti(t,n,a){(t===Je&&(qe===2||qe===9)||t.cancelPendingCommit!==null)&&(Ns(t,0),rr(t,we,fi,!1)),qi(t,a),((Ve&2)===0||t!==Je)&&(t===Je&&((Ve&2)===0&&(Vr|=a),dn===4&&rr(t,we,fi,!1)),ia(t))}function E_(t,n,a){if((Ve&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ha(t,n),l=s?Uy(t,n):Bd(t,n,!0),f=s;do{if(l===0){bs&&!s&&rr(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Dy(a)){l=Bd(t,n,!1),f=!1;continue}if(l===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var A=t;l=Jo;var B=A.current.memoizedState.isDehydrated;if(B&&(Ns(A,g).flags|=256),g=Bd(A,g,!1),g!==2&&g!==6){if(Od&&!B){A.errorRecoveryDisabledLanes|=f,Vr|=f,l=4;break t}f=$n,$n=l,f!==null&&($n===null?$n=f:$n.push.apply($n,f))}l=g}if(f=!1,l!==2)continue}}if(l===1){Ns(t,0),rr(t,n,0,!0);break}t:{switch(s=t,f=l,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:rr(s,n,fi,!nr);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(l=Ou+300-Wt(),10<l)){if(rr(s,n,fi,!nr),Er(s,0,!0)!==0)break t;na=n,s.timeoutHandle=ah(T_.bind(null,s,a,$n,Iu,Pd,n,fi,Vr,As,nr,f,"Throttled",-0,0),l);break t}T_(s,a,$n,Iu,Pd,n,fi,Vr,As,nr,f,null,-0,0)}}break}while(!0);ia(t)}function T_(t,n,a,s,l,f,g,A,B,nt,dt,yt,$,ut){t.timeoutHandle=-1;var It=n.subtreeFlags,jt=(f&335544064)===f;if(yt=null,(jt||It&8192||(It&16785408)===16785408)&&(yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},ui=null,g_(n,f,yt),jt&&(It=yt,jt=t.containerInfo,jt=(jt.nodeType===9?jt:jt.ownerDocument).__reactViewTransition,jt!=null&&(It.count++,It.waitingForViewTransition=!0,It=sl.bind(It),jt.finished.then(It,It))),It=(f&62914560)===f?Ou-Wt():(f&4194048)===f?x_-Wt():0,It=OE(yt,It),It!==null)){na=f,t.cancelPendingCommit=It(U_.bind(null,t,n,f,a,s,l,g,A,B,nt,dt,yt,null,$,ut)),rr(t,f,g,!nt);return}U_(t,n,f,a,s,l,g,A,B,nt,dt,yt)}function Dy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var l=a[s],f=l.getSnapshot;l=l.value;try{if(!oi(f(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rr(t,n,a,s){n=ki(t,n),n&=~Lu,n&=~Vr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var l=n;0<l;){var f=31-pe(l),g=1<<f;s[f]=-1,l&=~g}a!==0&&Tr(t,a,n)}function Fu(){return(Ve&6)===0?($o(0),!1):!0}function Fd(){if(be!==null){if(qe===0)var t=be.return;else t=be,xa=Dr=null,Wf(t),_s=null,Io=0,t=be;for(;t!==null;)Yg(t.alternate,t),t=t.return;be=null}}function Ns(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,tE(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),na=0,Fd(),Je=t,be=a=va(t.current,null),we=n,qe=0,ci=null,nr=!1,bs=Ha(t,n),Od=!1,As=fi=Lu=Vr=ir=dn=0,$n=Jo=null,Pd=!1,Aa=ki(t,n),Wl(),a}function b_(t,n){_e=null,ft.H=_u,n===gs||n===iu?(n=U0(),qe=3):n===Lf?(n=U0(),qe=4):qe=n===od?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ci=n,be===null&&(dn=1,vu(t,yi(n,t.current)))}function A_(){var t=wn.current;return t===null?!0:(we&4194048)===we?zn===null:(we&62914560)===we||(we&536870912)!==0?t===zn:!1}function R_(){var t=ft.H;return ft.H=_u,t===null?_u:t}function C_(){var t=ft.A;return ft.A=Cy,t}function Bu(){dn=4,nr||(we&4194048)!==we&&wn.current!==null||(bs=!0),(ir&134217727)===0&&(Vr&134217727)===0||Je===null||rr(Je,we,fi,!1)}function Bd(t,n,a){var s=Ve;Ve|=2;var l=R_(),f=C_();(Je!==t||we!==n)&&(Iu=null,Ns(t,n)),n=!1;var g=dn;t:do try{if(qe!==0&&be!==null){var A=be,B=ci;switch(qe){case 8:Fd(),g=6;break t;case 3:case 2:case 9:case 6:wn.current===null&&(n=!0);var nt=qe;if(qe=0,ci=null,Us(t,A,B,nt),a&&bs){g=0;break t}break;default:nt=qe,qe=0,ci=null,Us(t,A,B,nt)}}Ny(),g=dn;break}catch(dt){b_(t,dt)}while(!0);return n&&t.shellSuspendCounter++,xa=Dr=null,Ve=s,ft.H=l,ft.A=f,be===null&&(Je=null,we=0,Wl()),g}function Ny(){for(;be!==null;)w_(be)}function Uy(t,n){var a=Ve;Ve|=2;var s=R_(),l=C_();Je!==t||we!==n?(Iu=null,Pu=Wt()+500,Ns(t,n)):bs=Ha(t,n);t:do try{if(qe!==0&&be!==null){n=be;var f=ci;e:switch(qe){case 1:qe=0,ci=null,Us(t,n,f,1);break;case 2:case 9:if(D0(f)){qe=0,ci=null,D_(n);break}n=function(){qe!==2&&qe!==9||Je!==t||(qe=7),ia(t)},f.then(n,n);break t;case 3:qe=7;break t;case 4:qe=5;break t;case 7:D0(f)?(qe=0,ci=null,D_(n)):(qe=0,ci=null,Us(t,n,f,7));break;case 5:var g=null;switch(be.tag){case 26:g=be.memoizedState;case 5:case 27:var A=be;if(g?Mv(g):A.stateNode.complete){qe=0,ci=null;var B=A.sibling;if(B!==null)be=B;else{var nt=A.return;nt!==null?(be=nt,Hu(nt)):be=null}break e}}qe=0,ci=null,Us(t,n,f,5);break;case 6:qe=0,ci=null,Us(t,n,f,6);break;case 8:Fd(),dn=6;break t;default:throw Error(r(462))}}Ly();break}catch(dt){b_(t,dt)}while(!0);return xa=Dr=null,ft.H=s,ft.A=l,Ve=a,be!==null?0:(Je=null,we=0,Wl(),dn)}function Ly(){for(;be!==null&&!Ft();)w_(be)}function w_(t){var n=qg(t.alternate,t,Aa);t.memoizedProps=t.pendingProps,n===null?Hu(t):be=n}function D_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Fg(a,n,n.pendingProps,n.type,void 0,we);break;case 11:n=Fg(a,n,n.pendingProps,n.type.render,n.ref,we);break;case 5:Wf(n);var s=n;s===En&&(Ee?(jl(s),s.tag===5&&s.stateNode!=null&&(tn=s.stateNode)):(jl(s),Ee=!0));default:Yg(a,n),n=be=S0(n,Aa),n=qg(a,n,Aa)}t.memoizedProps=t.pendingProps,n===null?Hu(t):be=n}function Us(t,n,a,s){xa=Dr=null,Wf(n),_s=null,Io=0;var l=n.return;try{if(xy(t,l,n,a,we)){dn=1,vu(t,yi(a,t.current)),be=null;return}}catch(f){if(l!==null)throw be=l,f;dn=1,vu(t,yi(a,t.current)),be=null;return}n.flags&32768?(Ee||s===1?t=!0:bs||(we&536870912)!==0?t=!1:(nr=t=!0,(s===2||s===9||s===3||s===6)&&(s=wn.current,s!==null&&s.tag===13&&(s.flags|=16384))),N_(n,t)):Hu(n)}function Hu(t){var n=t;do{if((n.flags&32768)!==0){N_(n,nr);return}t=n.return;var a=Ty(n.alternate,n,Aa);if(a!==null){be=a;return}if(n=n.sibling,n!==null){be=n;return}be=n=t}while(n!==null);dn===0&&(dn=5)}function N_(t,n){do{var a=by(t.alternate,t);if(a!==null){a.flags&=32767,be=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){be=t;return}be=t=a}while(t!==null);dn=6,be=null}function U_(t,n,a,s,l,f,g,A,B,nt,dt,yt){t.cancelPendingCommit=null;do Gu();while(on!==0);if((Ve&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===Je&&(be=Je=null,we=0),Xr=n,Oi=t,na=a,zd=l,M_=s,Oy(t,n,a,g,A,B,yt)}}function Oy(t,n,a,s,l,f,g){var A=n.lanes|n.childLanes;if(Id=A,A|=xf,Ol(t,a,A,s,l,f),Cs=null,(a&335544064)===a?(ws=ly(t),s=10262):(ws=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,Hy(Nt,function(){return Xd(),null})):(t.callbackNode=null,t.callbackPriority=0),Au=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=ft.T,ft.T=null,l=Rt.p,Rt.p=2,f=Ve,Ve|=4;try{Ay(t,n,a)}finally{Ve=f,Rt.p=l,ft.T=s}}on=1,Au?Rs=sE(g,t.containerInfo,ws,Hd,Gd,Iy,Vd,Xd,Py):(Hd(),Gd(),Vd())}function Py(t){if(on!==0){var n=Oi.onRecoverableError;n(t,{componentStack:null})}}function Iy(){on===3&&(on=0,p_(Xr,Oi),on=4)}function Hd(){if(on===1){on=0;var t=Oi,n=Xr,a=na,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=ft.T,ft.T=null;var l=Rt.p;Rt.p=2;var f=Ve;Ve|=4;try{Zo=wu=!1,d_(n,t,a),a=eh;var g=u0(t.containerInfo),A=a.focusedElem,B=a.selectionRange;if(g!==A&&A&&A.ownerDocument&&l0(A.ownerDocument.documentElement,A)){if(B!==null&&mf(A)){var nt=B.start,dt=B.end;if(dt===void 0&&(dt=nt),"selectionStart"in A)A.selectionStart=nt,A.selectionEnd=Math.min(dt,A.value.length);else{var yt=A.ownerDocument||document,$=yt&&yt.defaultView||window;if($.getSelection){var ut=$.getSelection(),It=A.textContent.length,jt=Math.min(B.start,It),ve=B.end===void 0?jt:Math.min(B.end,It);!ut.extend&&jt>ve&&(g=ve,ve=jt,jt=g);var et=o0(A,jt),K=o0(A,ve);if(et&&K&&(ut.rangeCount!==1||ut.anchorNode!==et.node||ut.anchorOffset!==et.offset||ut.focusNode!==K.node||ut.focusOffset!==K.offset)){var st=yt.createRange();st.setStart(et.node,et.offset),ut.removeAllRanges(),jt>ve?(ut.addRange(st),ut.extend(K.node,K.offset)):(st.setEnd(K.node,K.offset),ut.addRange(st))}}}}for(yt=[],ut=A;ut=ut.parentNode;)ut.nodeType===1&&yt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<yt.length;A++){var Mt=yt[A];Mt.element.scrollLeft=Mt.left,Mt.element.scrollTop=Mt.top}}Hs=!!th,eh=th=null}finally{Ve=f,Rt.p=l,ft.T=s}}t.current=n,on=2}}function Gd(){if(on===2){on=0;var t=Oi,n=Xr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=ft.T,ft.T=null;var s=Rt.p;Rt.p=2;var l=Ve;Ve|=4;try{s_(t,n.alternate,n)}finally{Ve=l,Rt.p=s,ft.T=a}}on=3}}function Vd(){if(on===4||on===3){on=0;var t=Rs;Rs=null,zt();var n=Oi,a=Xr,s=na,l=M_,f=(s&335544064)===s?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?on=5:(on=0,Xr=Oi=null,L_(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(ar=null),Mo(s),a=a.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot($t,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=ft.T,f=Rt.p,Rt.p=2,ft.T=null;try{for(var g=n.onRecoverableError,A=0;A<l.length;A++){var B=l[A];g(B.value,{componentStack:B.stack})}}finally{ft.T=a,Rt.p=f}}if(l=Cs,g=ws,ws=null,l!==null&&(Cs=null,g===null&&(g=[]),t!==null))for(B=0;B<l.length;B++)a=(0,l[B])(g),a!==void 0&&t.finished.finally(a);(na&3)!==0&&Gu(),ia(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===zu?jo++:(jo=0,zu=n):(jo=0,zu=null),$o(0)}}function L_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Lo(n)))}function Gu(){return Rs!==null&&(Rs.skipTransition(),Rs=null),Hd(),Gd(),Vd(),Xd()}function Xd(){if(on!==5)return!1;var t=Oi,n=Id;Id=0;var a=Mo(na),s=ft.T,l=Rt.p;try{Rt.p=32>a?32:a,ft.T=null,a=zd,zd=null;var f=Oi,g=na;if(on=0,Xr=Oi=null,na=0,(Ve&6)!==0)throw Error(r(331));var A=Ve;if(Ve|=4,v_(f.current),m_(f,f.current,g,a),Ve=A,$o(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot($t,f)}catch{}return!0}finally{Rt.p=l,ft.T=s,L_(t,n)}}function O_(t,n,a){n=yi(a,n),n=sd(t.stateNode,n,2),t=Qa(t,n,2),t!==null&&(qi(t,2),ia(t))}function We(t,n,a){if(t.tag===3)O_(t,t,a);else for(;n!==null;){if(n.tag===3){O_(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ar===null||!ar.has(s))){t=yi(a,t),a=Dg(2),s=Qa(n,a,2),s!==null&&(Ng(a,s,n,t),qi(s,2),ia(s));break}}n=n.return}}function kd(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new wy;var l=new Set;s.set(n,l)}else l=s.get(n),l===void 0&&(l=new Set,s.set(n,l));l.has(a)||(Od=!0,l.add(a),t=zy.bind(null,t,n,a),n.then(t,t))}function zy(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Je===t&&(we&a)===a&&((dn===4||dn===3&&(we&62914560)===we&&300>Wt()-Ou)&&(Ve&2)===0?Ns(t,0):Lu|=a,As===we&&(As=0)),ia(t)}function P_(t,n){n===0&&(n=_o()),t=Rr(t,n),t!==null&&(qi(t,n),ia(t))}function Fy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),P_(t,a)}function By(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),P_(t,a)}function Hy(t,n){return Ut(t,n)}var Ls=null,Os=null,qd=!1,Vu=!1,Wd=!1,sr=0;function ia(t){t!==Os&&t.next===null&&(Os===null?Ls=Os=t:Os=Os.next=t),Vu=!0,qd||(qd=!0,Vy())}function $o(t,n){if(!Wd&&Vu){Wd=!0;do for(var a=!1,s=Ls;s!==null;){if(t!==0){var l=s.pendingLanes;if(l===0)var f=0;else{var g=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-pe(42|t)+1)-1,f&=l&~(g&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,B_(s,f))}else f=we,f=Er(s,s===Je?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ha(s,f)||(a=!0,B_(s,f));s=s.next}while(a);Wd=!1}}function Gy(){I_()}function I_(){Vu=qd=!1;var t=0;sr!==0&&$y()&&(t=sr);for(var n=Wt(),a=null,s=Ls;s!==null;){var l=s.next,f=z_(s,n);f===0?(s.next=null,a===null?Ls=l:a.next=l,l===null&&(Os=a)):(a=s,(t!==0||(f&3)!==0)&&(Vu=!0)),s=l}on!==0&&on!==5||$o(t),sr!==0&&(sr=0)}function z_(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,l=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-pe(f),A=1<<g,B=l[g];B===-1?((A&a)===0||(A&s)!==0)&&(l[g]=go(A,n)):B<=n&&(t.expiredLanes|=A),f&=~A}if(n=Je,a=we,a=Er(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(qe===2||qe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&te(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ha(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&te(s),Mo(a)){case 2:case 8:a=J;break;case 32:a=Nt;break;case 268435456:a=Ot;break;default:a=Nt}return s=F_.bind(null,t),a=Ut(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&te(s),t.callbackPriority=2,t.callbackNode=null,2}function F_(t,n){if(on!==0&&on!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Gu()&&t.callbackNode!==a)return null;var s=we;return s=Er(t,t===Je?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(E_(t,s,n),z_(t,Wt()),t.callbackNode!=null&&t.callbackNode===a?F_.bind(null,t):null)}function B_(t,n){if(Gu())return null;E_(t,n,!0)}function Vy(){eE(function(){(Ve&6)!==0?Ut(he,Gy):I_()})}function Yd(){if(sr===0){var t=Lr;t===0&&(t=es,es<<=1,(es&261888)===0&&(es=256)),sr=t}return sr}function H_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Fl(t)}function Xy(t,n,a,s,l){if(n==="submit"&&a&&a.stateNode===l){var f=H_((l[Z]||null).action),g=s.submitter;g&&(n=(n=g[Z]||null)?H_(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var A=new Vl("action","action",null,s,l);t.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(sr!==0){var B=new FormData(l,g);ed(a,{pending:!0,data:B,method:l.method,action:f},null,B)}}else typeof f=="function"&&(A.preventDefault(),B=new FormData(l,g),ed(a,{pending:!0,data:B,method:l.method,action:f},f,B))},currentTarget:l}]})}}for(var Zd=0;Zd<Sf.length;Zd++){var Kd=Sf[Zd],ky=Kd.toLowerCase(),qy=Kd[0].toUpperCase()+Kd.slice(1);Di(ky,"on"+qy)}Di(d0,"onAnimationEnd"),Di(h0,"onAnimationIteration"),Di(p0,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(ty,"onTransitionRun"),Di(ey,"onTransitionStart"),Di(ny,"onTransitionCancel"),Di(m0,"onTransitionEnd"),un("onMouseEnter",["mouseout","mouseover"]),un("onMouseLeave",["mouseout","mouseover"]),un("onPointerEnter",["pointerout","pointerover"]),un("onPointerLeave",["pointerout","pointerover"]),Vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Vt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));function G_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],l=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var A=s[g],B=A.instance,nt=A.currentTarget;if(A=A.listener,B!==f&&l.isPropagationStopped())break t;f=A,l.currentTarget=nt;try{f(l)}catch(dt){ql(dt)}l.currentTarget=null,f=B}else for(g=0;g<s.length;g++){if(A=s[g],B=A.instance,nt=A.currentTarget,A=A.listener,B!==f&&l.isPropagationStopped())break t;f=A,l.currentTarget=nt;try{f(l)}catch(dt){ql(dt)}l.currentTarget=null,f=B}}}}function Ae(t,n){var a=n[ot];a===void 0&&(a=n[ot]=new Set);var s=t+"__bubble";a.has(s)||(V_(n,t,2,!1),a.add(s))}function Qd(t,n,a){var s=0;n&&(s|=4),V_(a,t,s,n)}var Xu="_reactListening"+Math.random().toString(36).slice(2);function Jd(t){if(!t[Xu]){t[Xu]=!0,Xe.forEach(function(a){a!=="selectionchange"&&(Wy.has(a)||Qd(a,!1,t),Qd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Xu]||(n[Xu]=!0,Qd("selectionchange",!1,n))}}function V_(t,n,a,s){switch(Nv(n)){case 2:var l=FE;break;case 8:l=BE;break;default:l=_h}a=l.bind(null,n,a,t),l=void 0,!rf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),s?l!==void 0?t.addEventListener(n,a,{capture:!0,passive:l}):t.addEventListener(n,a,!0):l!==void 0?t.addEventListener(n,a,{passive:l}):t.addEventListener(n,a,!1)}function jd(t,n,a,s,l){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var A=s.stateNode.containerInfo;if(A===l)break;if(g===4)for(g=s.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===l)return;g=g.return}for(;A!==null;){if(g=ce(A),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){s=f=g;continue t}A=A.parentNode}}s=s.return}Vm(function(){var nt=f,dt=nf(a),yt=[];t:{var $=g0.get(t);if($!==void 0){var ut=Vl,It=t;switch(t){case"keypress":if(Hl(a)===0)break t;case"keydown":case"keyup":ut=DM;break;case"focusin":It="focus",ut=uf;break;case"focusout":It="blur",ut=uf;break;case"beforeblur":case"afterblur":ut=uf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=vM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=PM;break;case d0:case h0:case p0:ut=MM;break;case m0:ut=zM;break;case"scroll":case"scrollend":ut=gM;break;case"wheel":ut=BM;break;case"copy":case"cut":case"paste":ut=EM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Ym;break;case"submit":ut=LM;break;case"toggle":case"beforetoggle":ut=GM}var jt=(n&4)!==0,ve=!jt&&(t==="scroll"||t==="scrollend"),et=jt?$!==null?$+"Capture":null:$;jt=[];for(var K=nt,st;K!==null;){var Mt=K;if(st=Mt.stateNode,Mt=Mt.tag,Mt!==5&&Mt!==26&&Mt!==27||st===null||et===null||(Mt=yo(K,et),Mt!=null&&jt.push(el(K,Mt,st))),ve)break;K=K.return}0<jt.length&&($=new ut($,It,null,a,dt),yt.push({event:$,listeners:jt}))}}if((n&7)===0){t:{if(ut=t==="mouseover"||t==="pointerover",$=t==="mouseout"||t==="pointerout",ut&&a!==ef&&(It=a.relatedTarget||a.fromElement)&&(ce(It)||It[ht]))break t;($||ut)&&(It=dt.window===dt?dt:(ut=dt.ownerDocument)?ut.defaultView||ut.parentWindow:window,$?(ut=a.relatedTarget||a.toElement,$=nt,ut=ut?ce(ut):null,ut!==null&&(ve=c(ut),jt=ut.tag,ut!==ve||jt!==5&&jt!==27&&jt!==6)&&(ut=null)):($=null,ut=nt),$!==ut&&(jt=qm,Mt="onMouseLeave",et="onMouseEnter",K="mouse",(t==="pointerout"||t==="pointerover")&&(jt=Ym,Mt="onPointerLeave",et="onPointerEnter",K="pointer"),ve=$==null?It:Zt($),st=ut==null?It:Zt(ut),It=new jt(Mt,K+"leave",$,a,dt),It.target=ve,It.relatedTarget=st,Mt=null,ce(dt)===nt&&(jt=new jt(et,K+"enter",ut,a,dt),jt.target=st,jt.relatedTarget=ve,Mt=jt),ve=Mt,jt=$&&ut?U($,ut,Yy):null,$!==null&&X_(yt,It,$,jt,!1),ut!==null&&ve!==null&&X_(yt,ve,ut,jt,!0)))}t:{if($=nt?Zt(nt):window,ut=$.nodeName&&$.nodeName.toLowerCase(),ut==="select"||ut==="input"&&$.type==="file")var Kt=e0;else if($m($))if(n0)Kt=JM;else{Kt=KM;var De=ZM}else ut=$.nodeName,!ut||ut.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?nt&&tf(nt.elementType)&&(Kt=e0):Kt=QM;if(Kt&&(Kt=Kt(t,nt))){t0(yt,Kt,a,dt);break t}De&&De(t,$,nt)}switch(De=nt?Zt(nt):window,t){case"focusin":($m(De)||De.contentEditable==="true")&&(ls=De,gf=nt,Do=null);break;case"focusout":Do=gf=ls=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,c0(yt,a,dt);break;case"selectionchange":if($M)break;case"keydown":case"keyup":c0(yt,a,dt)}var ae;if(ff)t:{switch(t){case"compositionstart":var ue="onCompositionStart";break t;case"compositionend":ue="onCompositionEnd";break t;case"compositionupdate":ue="onCompositionUpdate";break t}ue=void 0}else os?Jm(t,a)&&(ue="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(Zm&&a.locale!=="ko"&&(os||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&os&&(ae=Xm()):(Ga=dt,sf="value"in Ga?Ga.value:Ga.textContent,os=!0)),De=ku(nt,ue),0<De.length&&(ue=new Wm(ue,t,null,a,dt),yt.push({event:ue,listeners:De}),ae?ue.data=ae:(ae=jm(a),ae!==null&&(ue.data=ae)))),(ae=XM?kM(t,a):qM(t,a))&&(ue=ku(nt,"onBeforeInput"),0<ue.length&&(De=new Wm("onBeforeInput","beforeinput",null,a,dt),yt.push({event:De,listeners:ue}),De.data=ae)),Xy(yt,t,nt,a,dt)}G_(yt,n)})}function el(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ku(t,n){for(var a=n+"Capture",s=[];t!==null;){var l=t,f=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||f===null||(l=yo(t,a),l!=null&&s.unshift(el(t,l,f)),l=yo(t,n),l!=null&&s.push(el(t,l,f))),t.tag===3)return s;t=t.return}return[]}function Yy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function X_(t,n,a,s,l){for(var f=n._reactName,g=[];a!==null&&a!==s;){var A=a,B=A.alternate,nt=A.stateNode;if(A=A.tag,B!==null&&B===s)break;A!==5&&A!==26&&A!==27||nt===null||(B=nt,l?(nt=yo(a,f),nt!=null&&g.unshift(el(a,nt,B))):l||(nt=yo(a,f),nt!=null&&g.push(el(a,nt,B)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Zy=/\r\n?/g,Ky=/\u0000|\uFFFD/g;function k_(t){return(typeof t=="string"?t:""+t).replace(Zy,`
`).replace(Ky,"")}function q_(t,n){return n=k_(n),k_(t)===n}function Ye(t,n,a,s,l,f){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||as(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&as(t,""+s);else return;break;case"className":si(t,"class",s);break;case"tabIndex":si(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":si(t,a,s);break;case"style":Hm(t,s,f);return;case"data":if(n!=="object"){si(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Fl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ye(t,n,"name",l.name,l,null),Ye(t,n,"formEncType",l.formEncType,l,null),Ye(t,n,"formMethod",l.formMethod,l,null),Ye(t,n,"formTarget",l.formTarget,l,null)):(Ye(t,n,"encType",l.encType,l,null),Ye(t,n,"method",l.method,l,null),Ye(t,n,"target",l.target,l,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Fl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Yi);return;case"onScroll":s!=null&&Ae("scroll",t);return;case"onScrollEnd":s!=null&&Ae("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Fl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ae("beforetoggle",t),Ae("toggle",t),$e(t,"popover",s);break;case"xlinkActuate":Ce(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ce(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ce(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ce(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ce(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ce(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":$e(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=pM.get(a)||a,$e(t,a,s);else return}ye=!0}function $d(t,n,a,s,l,f){switch(a){case"style":Hm(t,s,f);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")as(t,s);else if(typeof s=="number"||typeof s=="bigint")as(t,""+s);else return;break;case"onScroll":s!=null&&Ae("scroll",t);return;case"onScrollEnd":s!=null&&Ae("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Yi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Sn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),f=a.slice(2,l?a.length-7:void 0),n=t[Z]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,l),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,s,l);break t}ye=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):$e(t,a,s)}return}ye=!0}function Un(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",t),Ae("load",t);var s=!1,l=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ye(t,n,f,g,a,null)}}l&&Ye(t,n,"srcSet",a.srcSet,a,null),s&&Ye(t,n,"src",a.src,a,null);return;case"input":Ae("invalid",t);var A=f=g=l=null,B=null,nt=null;for(s in a)if(a.hasOwnProperty(s)){var dt=a[s];if(dt!=null)switch(s){case"name":l=dt;break;case"type":g=dt;break;case"checked":B=dt;break;case"defaultChecked":nt=dt;break;case"value":f=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Ye(t,n,s,dt,a,null)}}Im(t,f,A,B,nt,g,l,!1);return;case"select":Ae("invalid",t),s=g=f=null;for(l in a)if(a.hasOwnProperty(l)&&(A=a[l],A!=null))switch(l){case"value":f=A;break;case"defaultValue":g=A;break;case"multiple":s=A;default:Ye(t,n,l,A,a,null)}n=f,a=g,t.multiple=!!s,n!=null?is(t,!!s,n,!1):a!=null&&is(t,!!s,a,!0);return;case"textarea":Ae("invalid",t),f=l=s=null;for(g in a)if(a.hasOwnProperty(g)&&(A=a[g],A!=null))switch(g){case"value":s=A;break;case"defaultValue":l=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Ye(t,n,g,A,a,null)}Fm(t,s,l,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(s=a[B],s!=null)&&(B==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ye(t,n,B,s,a,null));return;case"dialog":Ae("beforetoggle",t),Ae("toggle",t),Ae("cancel",t),Ae("close",t);break;case"iframe":case"object":Ae("load",t);break;case"video":case"audio":for(s=0;s<tl.length;s++)Ae(tl[s],t);break;case"image":Ae("error",t),Ae("load",t);break;case"details":Ae("toggle",t);break;case"embed":case"source":case"link":Ae("error",t),Ae("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(s=a[nt],s!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ye(t,n,nt,s,a,null)}return;default:if(tf(n)){for(dt in a)a.hasOwnProperty(dt)&&(s=a[dt],s!==void 0&&$d(t,n,dt,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&Ye(t,n,A,s,a,null))}var Qy={};function Jy(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,f=null,g=null,A=null,B=null,nt=null,dt=null;for(ut in a){var yt=a[ut];if(a.hasOwnProperty(ut)&&yt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":B=yt;default:s.hasOwnProperty(ut)||Ye(t,n,ut,null,s,yt)}}for(var $ in s){var ut=s[$];if(yt=a[$],s.hasOwnProperty($)&&(ut!=null||yt!=null))switch($){case"type":ut!==yt&&(ye=!0),f=ut;break;case"name":ut!==yt&&(ye=!0),l=ut;break;case"checked":ut!==yt&&(ye=!0),nt=ut;break;case"defaultChecked":ut!==yt&&(ye=!0),dt=ut;break;case"value":ut!==yt&&(ye=!0),g=ut;break;case"defaultValue":ut!==yt&&(ye=!0),A=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:ut!==yt&&Ye(t,n,$,ut,s,yt)}}jc(t,g,A,B,nt,dt,f,l);return;case"select":ut=g=A=$=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ut=B;default:s.hasOwnProperty(f)||Ye(t,n,f,null,s,B)}for(l in s)if(f=s[l],B=a[l],s.hasOwnProperty(l)&&(f!=null||B!=null))switch(l){case"value":f!==B&&(ye=!0),$=f;break;case"defaultValue":f!==B&&(ye=!0),A=f;break;case"multiple":f!==B&&(ye=!0),g=f;default:f!==B&&Ye(t,n,l,f,s,B)}n=A,a=g,s=ut,$!=null?is(t,!!a,$,!1):!!s!=!!a&&(n!=null?is(t,!!a,n,!0):is(t,!!a,a?[]:"",!1));return;case"textarea":ut=$=null;for(A in a)if(l=a[A],a.hasOwnProperty(A)&&l!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ye(t,n,A,null,s,l)}for(g in s)if(l=s[g],f=a[g],s.hasOwnProperty(g)&&(l!=null||f!=null))switch(g){case"value":l!==f&&(ye=!0),$=l;break;case"defaultValue":l!==f&&(ye=!0),ut=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==f&&Ye(t,n,g,l,s,f)}zm(t,$,ut);return;case"option":for(var It in a)$=a[It],a.hasOwnProperty(It)&&$!=null&&!s.hasOwnProperty(It)&&(It==="selected"?t.selected=!1:Ye(t,n,It,null,s,$));for(B in s)$=s[B],ut=a[B],s.hasOwnProperty(B)&&$!==ut&&($!=null||ut!=null)&&(B==="selected"?($!==ut&&(ye=!0),t.selected=$&&typeof $!="function"&&typeof $!="symbol"):Ye(t,n,B,$,s,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in a)$=a[jt],a.hasOwnProperty(jt)&&$!=null&&!s.hasOwnProperty(jt)&&Ye(t,n,jt,null,s,$);for(nt in s)if($=s[nt],ut=a[nt],s.hasOwnProperty(nt)&&$!==ut&&($!=null||ut!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:Ye(t,n,nt,$,s,ut)}return;default:if(tf(n)){for(var ve in a)$=a[ve],a.hasOwnProperty(ve)&&$!==void 0&&!s.hasOwnProperty(ve)&&$d(t,n,ve,void 0,s,$);for(dt in s)$=s[dt],ut=a[dt],!s.hasOwnProperty(dt)||$===ut||$===void 0&&ut===void 0||$d(t,n,dt,$,s,ut);return}}for(var et in a)$=a[et],a.hasOwnProperty(et)&&$!=null&&!s.hasOwnProperty(et)&&Ye(t,n,et,null,s,$);for(yt in s)$=s[yt],ut=a[yt],!s.hasOwnProperty(yt)||$===ut||$==null&&ut==null||Ye(t,n,yt,$,s,ut)}function W_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var l=a[s],f=l.transferSize,g=l.initiatorType,A=l.duration;if(f&&A&&W_(g)){for(g=0,A=l.responseEnd,s+=1;s<a.length;s++){var B=a[s],nt=B.startTime;if(nt>A)break;var dt=B.transferSize,yt=B.initiatorType;dt&&W_(yt)&&(B=B.responseEnd,g+=dt*(B<A?1:(A-nt)/(B-nt)))}if(--s,n+=8*(f+g)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var th=null,eh=null;function nl(t){return t.nodeType===9?t:t.ownerDocument}function Y_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Z_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function K_(t,n,a,s){return a=nl(a).createElement(t),a[b]=s,a[Z]=n,Un(a,t,n),Me(a),a}function nh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ih=null;function $y(){var t=window.event;return t&&t.type==="popstate"?t===ih?!1:(ih=t,!0):(ih=null,!1)}var ah=typeof setTimeout=="function"?setTimeout:void 0,tE=typeof clearTimeout=="function"?clearTimeout:void 0,Q_=typeof Promise=="function"?Promise:void 0,J_=typeof requestAnimationFrame=="function"?requestAnimationFrame:ah,eE=typeof queueMicrotask=="function"?queueMicrotask:typeof Q_<"u"?function(t){return Q_.resolve(null).then(t).catch(nE)}:ah;function nE(t){setTimeout(function(){throw t})}function or(t){return t==="head"}function j_(t,n){var a=n,s=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(l),Gs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")dh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,dh(a);for(var f=a.firstChild;f;){var g=f.nextSibling,A=f.nodeName;f[Pt]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&dh(t.ownerDocument.body);a=l}while(a);Gs(n)}function $_(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function tv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var l=s=0;l<n.length;l++){var f=n[l];0<f.width&&0<f.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function ev(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function iE(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function rh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return iE(n,a,t)}function aE(t){return t.documentElement.clientHeight}function rE(t){this.addEventListener("load",t),this.addEventListener("error",t)}function sE(t,n,a,s,l,f,g,A,B){var nt=n.nodeType===9?n:n.ownerDocument;try{var dt=nt.startViewTransition({update:function(){var $=nt.defaultView,ut=$.navigation&&$.navigation.transition,It=nt.fonts.status;s();var jt=[];if(It==="loaded"&&(aE(nt),nt.fonts.status==="loading"&&jt.push(nt.fonts.ready)),It=jt.length,t!==null)for(var ve=t.suspenseyImages,et=0,K=0;K<ve.length;K++){var st=ve[K];if(!st.complete){var Mt=st.getBoundingClientRect();if(0<Mt.bottom&&0<Mt.right&&Mt.top<$.innerHeight&&Mt.left<$.innerWidth){if(et+=yv(st),et>Yu){jt.length=It;break}st=new Promise(rE.bind(st)),jt.push(st)}}}if(0<jt.length)return $=Promise.race([Promise.all(jt),new Promise(function(Kt){return setTimeout(Kt,500)})]).then(l,l),(ut?Promise.allSettled([ut.finished,$]):$).then(f,f);if(l(),ut)return ut.finished.then(f,f);f()},types:a});nt.__reactViewTransition=dt;var yt=[];return dt.ready.then(function(){for(var $=nt.documentElement.getAnimations({subtree:!0}),ut=0;ut<$.length;ut++){var It=$[ut],jt=It.effect,ve=jt.pseudoElement;if(ve!=null&&ve.startsWith("::view-transition")){yt.push(It),It=jt.getKeyframes();for(var et=ve=void 0,K=!0,st=0;st<It.length;st++){var Mt=It[st],Kt=Mt.width;if(ve===void 0)ve=Kt;else if(ve!==Kt){K=!1;break}if(Kt=Mt.height,et===void 0)et=Kt;else if(et!==Kt){K=!1;break}delete Mt.width,delete Mt.height,Mt.transform==="none"&&delete Mt.transform}K&&ve!==void 0&&et!==void 0&&(jt.setKeyframes(It),K=getComputedStyle(jt.target,jt.pseudoElement),K.width!==ve||K.height!==et)&&(K=It[0],K.width=ve,K.height=et,K=It[It.length-1],K.width=ve,K.height=et,jt.setKeyframes(It))}}g()},function($){nt.__reactViewTransition===dt&&(nt.__reactViewTransition=null);try{typeof $=="object"&&$!==null&&$.name==="InvalidStateError"&&($.message==="View transition was skipped because document visibility state is hidden."||$.message==="Skipping view transition because document visibility state has become hidden."||$.message==="Skipping view transition because viewport size changed."||$.message==="Transition was aborted because of invalid state")&&($=null),$!==null&&B($)}finally{s(),l(),g()}}),dt.finished.finally(function(){for(var $=0;$<yt.length;$++)yt[$].cancel();nt.__reactViewTransition===dt&&(nt.__reactViewTransition=null),A()}),dt}catch{return s(),l(),g(),null}}function kr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}kr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:F({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},kr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],l=0;l<a.length;l++){var f=a[l].effect;f!==null&&f.target===t&&f.pseudoElement===n&&s.push(a[l])}return s},kr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function nv(t){return{name:t,group:new kr("group",t),imagePair:new kr("image-pair",t),old:new kr("old",t),new:new kr("new",t)}}function hi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}hi.prototype.addEventListener=function(t,n,a){var s=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(av(f,t,n,a)===-1){var g=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(B){g.removeEventListener(t,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),s!==null&&(l=g.removeEventListener.bind(g,t,n,a),s.addEventListener("abort",l,{once:!0}),l=s.removeEventListener.bind(s,"abort",l)),s=Ps(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:l}),_(this._fragmentFiber.child,!1,oE,t,A,s)}this._eventListeners=f}};function oE(t,n,a,s){return M(t).addEventListener(n,a,s),!1}hi.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=av(s,t,n,a),n!==-1)){var l=s[n];a=l.attachedListener;var f=l.cleanup;l=Ps(l.optionsOrUseCapture),_(this._fragmentFiber.child,!1,lE,t,a,l),s.splice(n,1),f!==null&&f()}};function lE(t,n,a,s){return M(t).removeEventListener(n,a,s),!1}function Ps(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function iv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function av(t,n,a,s){if(t.length===0)return-1;s=iv(s);for(var l=0;l<t.length;l++){var f=t[l];if(f.type===n&&f.listener===a&&iv(f.optionsOrUseCapture)===s)return l}return-1}hi.prototype.dispatchEvent=function(t){var n=v(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var f=a[l];s.addEventListener(f.type,f.attachedListener,Ps(f.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(l=0;l<a.length;l++)f=a[l],s.removeEventListener(f.type,f.attachedListener,Ps(f.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},hi.prototype.focus=function(t){_(this._fragmentFiber.child,!0,rv,t,void 0,void 0)};function rv(t,n){return t.tag===6?!1:(t=M(t),xE(t,n))}hi.prototype.focusLast=function(t){var n=[];_(this._fragmentFiber.child,!0,sh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!rv(n[a],t);a--);};function sh(t,n){return n.push(t),!1}hi.prototype.blur=function(){var t=v(this._fragmentFiber);t!==null&&(t=M(t),t=nl(t).activeElement,t!==null&&_(this._fragmentFiber.child,!1,uE,t,void 0,void 0))};function uE(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}hi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),_(this._fragmentFiber.child,!1,cE,t,void 0,void 0)};function cE(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}hi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),_(this._fragmentFiber.child,!1,fE,t,void 0,void 0);for(var a=n=0;a<Pi.length;a++){var s=Pi[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Pi[n++]=s}Pi.length=n}};function fE(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Pi=[],oh=!1;function dE(t,n,a){Pi.push({fragmentInstance:t,observer:n,instance:a}),oh||(oh=!0,ME(function(){oh=!1;var s=Pi;Pi=[];for(var l=0;l<s.length;l++){var f=s[l];f.observer.unobserve(f.instance)}}))}hi.prototype.getClientRects=function(){var t=[];return _(this._fragmentFiber.child,!1,hE,t,void 0,void 0),t};function hE(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}hi.prototype.getRootNode=function(t){var n=v(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},hi.prototype.compareDocumentPosition=function(t){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];_(this._fragmentFiber.child,!1,sh,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,T(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=s=a.compareDocumentPosition(t);return a===t?l=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=C(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),l=M(a[a.length-1]);var f=T(this._fragmentFiber)?n.parentElement:s;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(t),A=l.compareDocumentPosition(t),B=g&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=s&&f&&g&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||f&&l===t||B||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!f&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||pE(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function pE(t,n,a,s,l){var f=ce(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=l.ownerDocument,l===f||l===f.documentElement||l===f.body;t:{for(f=n,n=v(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=U(a,f,L),n===null?n=!1:(_(n,!0,G,f,a),f=x,x=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===s)&&(n=U(s,f,L),n===null?n=!1:(_(n,!0,w,f,s),f=x,N=x=null,n=f!==null)),n):!1}function sv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}hi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];_(this._fragmentFiber.child,!1,sh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=C(this._fragmentFiber);if(s=a?s[1]||s[0]||v(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=M(s),sv(t,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var l=n[s];l.tag===6?(l=M(l),sv(l,a)):M(l).scrollIntoView(t),s+=a?-1:1}};function mE(t,n){return t=M(t),ov(t,n),!1}function ov(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function lv(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];t.addEventListener(l.type,l.attachedListener,Ps(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var g=0,A=0;A<Pi.length;A++){var B=Pi[A];(B.fragmentInstance!==n||B.observer!==f||B.instance!==t)&&(Pi[g++]=B)}Pi.length=g,f.observe(t)}),ov(t,n))}function gE(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];t.removeEventListener(l.type,l.attachedListener,Ps(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?dE(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function lh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":lh(a),Jt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function _E(t,n,a,s){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Pt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ri(t.nextSibling),t===null)break}return null}function vE(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ri(t.nextSibling),t===null))return null;return t}function uv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ri(t.nextSibling),t===null))return null;return t}function uh(t){return t.data==="$?"||t.data==="$~"}function ch(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function SE(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Ri(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var fh=null;function cv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ri(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function fv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function xE(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function ME(t){J_(function(){J_(function(n){return t(n)})})}function dv(t,n,a){switch(n=nl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function hv(t,n,a){for(var s in a){var l=a[s];a.hasOwnProperty(s)&&l!=null&&Ye(t,n,s,null,Qy,l)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Yi&&(t.onclick=null),Jt(t)}function dh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Jt(t)}var Ci=new Map,pv=new Set;function il(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ra=Rt.d;Rt.d={f:yE,r:EE,D:TE,C:bE,L:AE,m:RE,X:wE,S:CE,M:DE};function yE(){var t=Ra.f(),n=Fu();return t||n}function EE(t){var n=me(t);n!==null&&n.tag===5&&n.type==="form"?gg(n):Ra.r(t)}var Is=typeof document>"u"?null:document;function mv(t,n,a){var s=Is;if(s&&typeof n=="string"&&n){var l=xi(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),pv.has(l)||(pv.add(l),t={rel:t,crossOrigin:a,href:n},s.querySelector(l)===null&&(n=s.createElement("link"),Un(n,"link",t),Me(n),s.head.appendChild(n)))}}function TE(t){Ra.D(t),mv("dns-prefetch",t,null)}function bE(t,n){Ra.C(t,n),mv("preconnect",t,n)}function AE(t,n,a){Ra.L(t,n,a);var s=Is;if(s&&t&&n){var l='link[rel="preload"][as="'+xi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+xi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+xi(a.imageSizes)+'"]')):l+='[href="'+xi(t)+'"]';var f=l;switch(n){case"style":f=zs(t);break;case"script":f=Fs(t)}if(!(Ci.has(f)||(t=F({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ci.set(f,t),s.querySelector(l)!==null||n==="style"&&s.querySelector(al(f))||n==="script"&&s.querySelector(rl(f))))){var g=s.createElement("link");Un(g,"link",t),n==="style"&&(g[Qt]=!0,g.onload=g.onerror=function(){Ke(g)}),Me(g),s.head.appendChild(g)}}}function RE(t,n){Ra.m(t,n);var a=Is;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+xi(s)+'"][href="'+xi(t)+'"]',f=l;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Fs(t)}if(!Ci.has(f)&&(t=F({rel:"modulepreload",href:t},n),Ci.set(f,t),a.querySelector(l)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(rl(f)))return}s=a.createElement("link"),Un(s,"link",t),Me(s),a.head.appendChild(s)}}}function CE(t,n,a){Ra.S(t,n,a);var s=Is;if(s&&t){var l=Te(s).hoistableStyles,f=zs(t);n=n||"default";var g=l.get(f);if(!g){var A={loading:0,preload:null};if(g=s.querySelector(al(f)))A.loading=5;else{t=F({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ci.get(f))&&hh(t,a);var B=g=s.createElement("link");Me(B),Un(B,"link",t),B._p=new Promise(function(nt,dt){B.onload=nt,B.onerror=dt}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,qu(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:A},l.set(f,g)}}}function wE(t,n){Ra.X(t,n);var a=Is;if(a&&t){var s=Te(a).hoistableScripts,l=Fs(t),f=s.get(l);f||(f=a.querySelector(rl(l)),f||(t=F({src:t,async:!0},n),(n=Ci.get(l))&&ph(t,n),f=a.createElement("script"),Me(f),Un(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(l,f))}}function DE(t,n){Ra.M(t,n);var a=Is;if(a&&t){var s=Te(a).hoistableScripts,l=Fs(t),f=s.get(l);f||(f=a.querySelector(rl(l)),f||(t=F({src:t,async:!0,type:"module"},n),(n=Ci.get(l))&&ph(t,n),f=a.createElement("script"),Me(f),Un(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(l,f))}}function gv(t,n,a,s){var l=(l=Ue.current)?il(l):null;if(!l)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=zs(a.href),n=Te(l).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=zs(a.href);var f=Te(l).hoistableStyles,g=f.get(t);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=l.querySelector(al(t)))?f._p||(g.instance=f,g.state.loading=5):(f=Ci.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ci.set(t,f)),NE(l,t,f,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Fs(a),n=Te(l).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function zs(t){return'href="'+xi(t)+'"'}function al(t){return'link[rel="stylesheet"]['+t+"]"}function _v(t){return F({},t,{"data-precedence":t.precedence,precedence:null})}function NE(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Qt]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Qt]=!0,n.onload=n.onerror=Ke.bind(null,n),Un(n,"link",a),Me(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Fs(t){return'[src="'+xi(t)+'"]'}function rl(t){return"script[async]"+t}function vv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+xi(a.href)+'"]');if(s)return n.instance=s,Me(s),s;var l=F({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Me(s),Un(s,"style",l),qu(s,a.precedence,t),n.instance=s;case"stylesheet":l=zs(a.href);var f=t.querySelector(al(l));if(f)return n.state.loading|=4,n.instance=f,Me(f),f;s=_v(a),(l=Ci.get(l))&&hh(s,l),f=(t.ownerDocument||t).createElement("link"),Me(f);var g=f;return g._p=new Promise(function(A,B){g.onload=A,g.onerror=B}),Un(f,"link",s),n.state.loading|=4,qu(f,a.precedence,t),n.instance=f;case"script":return f=Fs(a.src),(l=t.querySelector(rl(f)))?(n.instance=l,Me(l),l):(s=a,(l=Ci.get(f))&&(s=F({},a),ph(s,l)),t=t.ownerDocument||t,l=t.createElement("script"),Me(l),Un(l,"link",s),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,qu(s,a.precedence,t));return n.instance}function qu(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=s.length?s[s.length-1]:null,f=l,g=0;g<s.length;g++){var A=s[g];if(A.dataset.precedence===n)f=A;else if(f!==l)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function hh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ph(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Wu=null;function Sv(t,n,a){if(Wu===null){var s=new Map,l=Wu=new Map;l.set(a,s)}else l=Wu,s=l.get(a),s||(s=new Map,l.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var f=a[l];if(!(f[Pt]||f[b]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var A=s.get(g);A?A.push(f):s.set(g,[f])}}return s}function mh(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function UE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function xv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Mv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function yv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Ev(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=yv(n),t.suspenseyImages.push(n)),t=PE.bind(t),n.decode().then(t,t))}function LE(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=zs(s.href),f=n.querySelector(al(l));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=sl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Me(f);return}f=n.ownerDocument||n,s=_v(s),(l=Ci.get(l))&&hh(s,l),f=f.createElement("link"),Me(f);var g=f;g._p=new Promise(function(A,B){g.onload=A,g.onerror=B}),Un(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=sl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Yu=0;function OE(t,n){return t.stylesheets&&t.count===0&&Ku(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Ku(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Yu===0&&(Yu=62500*jy());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ku(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Yu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(l)}}:null}function Tv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Ku(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function sl(){this.count--,Tv(this)}function PE(){this.imgCount--,Tv(this)}var Zu=null;function Ku(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Zu=new Map,n.forEach(IE,t),Zu=null,sl.call(t))}function IE(t,n){if(!(n.state.loading&4)){var a=Zu.get(t);if(a)var s=a.get(null);else{a=new Map,Zu.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<l.length;f++){var g=l[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}l=n.instance,g=l.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,l),a.set(g,l),this.count++,s=sl.bind(this),l.addEventListener("load",s),l.addEventListener("error",s),f?f.parentNode.insertBefore(l,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Bs={$$typeof:Q,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function zE(t,n,a,s,l,f,g,A,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ns(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ns(0),this.hiddenUpdates=ns(null),this.identifierPrefix=s,this.onUncaughtError=l,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function bv(t,n,a,s,l,f,g,A,B,nt,dt,yt){return t=new zE(t,n,a,g,B,nt,dt,yt,A),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),t.current=f,f.stateNode=t,n=Df(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Of(f),t}function Av(t){return t?(t=fs,t):fs}function Rv(t,n,a,s,l,f){l=Av(l),s.context===null?s.context=l:s.pendingContext=l,s=Ka(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Qa(t,s,n),a!==null&&(ti(a,t,n),zo(a,t,n))}function Cv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function gh(t,n){Cv(t,n),(t=t.alternate)&&Cv(t,n)}function wv(t){if(t.tag===13||t.tag===31){var n=Rr(t,67108864);n!==null&&ti(n,t,67108864),gh(t,67108864)}}function Dv(t){if(t.tag===13||t.tag===31){var n=di();n=xo(n);var a=Rr(t,n);a!==null&&ti(a,t,n),gh(t,n)}}var Hs=!0;function FE(t,n,a,s){var l=ft.T;ft.T=null;var f=Rt.p;try{Rt.p=2,_h(t,n,a,s)}finally{Rt.p=f,ft.T=l}}function BE(t,n,a,s){var l=ft.T;ft.T=null;var f=Rt.p;try{Rt.p=8,_h(t,n,a,s)}finally{Rt.p=f,ft.T=l}}function _h(t,n,a,s){if(Hs){var l=vh(s);if(l===null)jd(t,n,s,Qu,a),Uv(t,s);else if(GE(l,t,n,a,s))s.stopPropagation();else if(Uv(t,s),n&4&&-1<HE.indexOf(t)){for(;l!==null;){var f=me(l);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=ha(f.pendingLanes);if(g!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;g;){var B=1<<31-pe(g);A.entanglements[1]|=B,g&=~B}ia(f),(Ve&6)===0&&(Pu=Wt()+500,$o(0))}}break;case 31:case 13:A=Rr(f,2),A!==null&&ti(A,f,2),Fu(),gh(f,2)}if(f=vh(s),f===null&&jd(t,n,s,Qu,a),f===l)break;l=f}l!==null&&s.stopPropagation()}else jd(t,n,s,null,a)}}function vh(t){return t=nf(t),Sh(t)}var Qu=null;function Sh(t){if(Qu=null,t=ce(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Qu=t,null}function Nv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(se()){case he:return 2;case J:return 8;case Nt:case Et:return 32;case Ot:return 268435456;default:return 32}default:return 32}}var xh=!1,lr=null,ur=null,cr=null,ol=new Map,ll=new Map,fr=[],HE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Uv(t,n){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":ol.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ll.delete(n.pointerId)}}function ul(t,n,a,s,l,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[l]},n!==null&&(n=me(n),n!==null&&wv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function GE(t,n,a,s,l){switch(n){case"focusin":return lr=ul(lr,t,n,a,s,l),!0;case"dragenter":return ur=ul(ur,t,n,a,s,l),!0;case"mouseover":return cr=ul(cr,t,n,a,s,l),!0;case"pointerover":var f=l.pointerId;return ol.set(f,ul(ol.get(f)||null,t,n,a,s,l)),!0;case"gotpointercapture":return f=l.pointerId,ll.set(f,ul(ll.get(f)||null,t,n,a,s,l)),!0}return!1}function Lv(t){var n=ce(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Il(t.priority,function(){Dv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Il(t.priority,function(){Dv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ju(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=vh(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);ef=s,a.target.dispatchEvent(s),ef=null}else return n=me(a),n!==null&&wv(n),t.blockedOn=a,!1;n.shift()}return!0}function Ov(t,n,a){Ju(t)&&a.delete(n)}function VE(){xh=!1,lr!==null&&Ju(lr)&&(lr=null),ur!==null&&Ju(ur)&&(ur=null),cr!==null&&Ju(cr)&&(cr=null),ol.forEach(Ov),ll.forEach(Ov)}function ju(t,n){t.blockedOn===n&&(t.blockedOn=null,xh||(xh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,VE)))}var $u=null;function Pv(t){$u!==t&&($u=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){$u===t&&($u=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],l=t[n+2];if(typeof s!="function"){if(Sh(s||a)===null)continue;break}var f=me(a);f!==null&&(t.splice(n,3),n-=3,ed(f,{pending:!0,data:l,method:a.method,action:s},s,l))}}))}function Gs(t){function n(B){return ju(B,t)}lr!==null&&ju(lr,t),ur!==null&&ju(ur,t),cr!==null&&ju(cr,t),ol.forEach(n),ll.forEach(n);for(var a=0;a<fr.length;a++){var s=fr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<fr.length&&(a=fr[0],a.blockedOn===null);)Lv(a),a.blockedOn===null&&fr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var l=a[s],f=a[s+1],g=l[Z]||null;if(typeof f=="function")g||Pv(a);else if(g){var A=null;if(f&&f.hasAttribute("formAction")){if(l=f,g=f[Z]||null)A=g.formAction;else if(Sh(l)!==null)continue}else A=g.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),Pv(a)}}}function Iv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return l=g})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function Mh(t){this._internalRoot=t}tc.prototype.render=Mh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=di();Rv(a,s,t,n,null,null)},tc.prototype.unmount=Mh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Rv(t.current,2,null,t,null,null),Fu(),n[ht]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Pl();t={blockedOn:null,target:t,priority:n};for(var a=0;a<fr.length&&n!==0&&n<fr[a].priority;a++);fr.splice(a,0,t),a===0&&Lv(t)}};var zv=e.version;if(zv!=="19.3.0")throw Error(r(527,zv,"19.3.0"));Rt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var XE={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:ft,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{$t=ec.inject(XE),kt=ec}catch{}}return fl.createRoot=function(t,n){if(!u(t))throw Error(r(299));var a=!1,s="",l=Ag,f=Rg,g=Cg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=bv(t,1,!1,null,null,a,s,null,l,f,g,Iv),t[ht]=n.current,Jd(t),new Mh(n)},fl.hydrateRoot=function(t,n,a){if(!u(t))throw Error(r(299));var s=!1,l="",f=Ag,g=Rg,A=Cg,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=bv(t,1,!0,n,a??null,s,l,B,f,g,A,Iv),n.context=Av(null),a=n.current,s=di(),s=xo(s),l=Ka(s),l.callback=null,Qa(a,l,s),a=s,n.current.lanes=a,qi(n,a),ia(n),t[ht]=n.current,Jd(t),new tc(n)},fl.version="19.3.0",fl}var Yv;function $E(){if(Yv)return Th.exports;Yv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Th.exports=jE(),Th.exports}var tT=$E();function Cl(o){const e=new Uint32Array(1);return crypto.getRandomValues(e),Promise.resolve(e[0]%o+1)}const pm="186",eT=0,Zv=1,nT=2,Ac=1,iT=2,Sl=3,Xi=0,ni=1,La=2,Pa=0,Ml=1,Kv=2,Qv=3,Jv=4,aT=5,eo=100,rT=101,sT=102,oT=103,lT=104,uT=200,cT=201,fT=202,dT=203,yx=204,Ex=205,hT=206,pT=207,mT=208,gT=209,_T=210,vT=211,ST=212,xT=213,MT=214,up=0,cp=1,fp=2,El=3,dp=4,hp=5,pp=6,mp=7,Tx=0,yT=1,ET=2,ua=0,bx=1,Ax=2,Rx=3,Cx=4,wx=5,Dx=6,Nx=7,Ux=300,jr=301,co=302,Ch=303,wh=304,Bc=306,gp=1e3,Oa=1001,_p=1002,On=1003,TT=1004,nc=1005,Gn=1006,Dh=1007,Qr=1008,gi=1009,Lx=1010,Ox=1011,Tl=1012,mm=1013,ca=1014,oa=1015,fa=1016,gm=1017,_m=1018,bl=1020,Px=35902,Ix=35899,zx=1021,Fx=1022,Hi=1023,Fa=1026,Jr=1027,Bx=1028,vm=1029,$r=1030,Sm=1031,xm=1033,Rc=33776,Cc=33777,wc=33778,Dc=33779,vp=35840,Sp=35841,xp=35842,Mp=35843,yp=36196,Ep=37492,Tp=37496,bp=37488,Ap=37489,Uc=37490,Rp=37491,Cp=37808,wp=37809,Dp=37810,Np=37811,Up=37812,Lp=37813,Op=37814,Pp=37815,Ip=37816,zp=37817,Fp=37818,Bp=37819,Hp=37820,Gp=37821,Vp=36492,Xp=36494,kp=36495,qp=36283,Wp=36284,Lc=36285,Yp=36286,bT=3200,Zp=0,AT=1,xr="",Hn="srgb",Oc="srgb-linear",Pc="linear",Ze="srgb",Nh=7680,RT=519,CT=512,wT=513,DT=514,Mm=515,NT=516,UT=517,ym=518,LT=519,OT=35044,jv="300 es",la=2e3,Al=2001;function PT(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ic(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function IT(){const o=Ic("canvas");return o.style.display="block",o}const $v={};function tS(...o){const e="THREE."+o.shift();console.log(e,...o)}function Hx(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function de(...o){o=Hx(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function He(...o){o=Hx(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function io(...o){const e=o.join(" ");e in $v||($v[e]=!0,de(...o))}function zT(o,e,i){return new Promise(function(r,u){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const FT={[up]:cp,[fp]:pp,[dp]:mp,[El]:hp,[cp]:up,[pp]:fp,[mp]:dp,[hp]:El};class ts{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const u=r[e];if(u!==void 0){const c=u.indexOf(i);c!==-1&&u.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const u=r.slice(0);for(let c=0,d=u.length;c<d;c++)u[c].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uh=Math.PI/180,Kp=180/Math.PI;function wl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]).toLowerCase()}function Ie(o,e,i){return Math.max(e,Math.min(i,o))}function BT(o,e){return(o%e+e)%e}function Lh(o,e,i){return(1-i)*o+i*e}function dl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ei(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Dm=class Dm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6],this.y=u[1]*i+u[4]*r+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ie(this.x,e.x,i.x),this.y=Ie(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ie(this.x,e,i),this.y=Ie(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ie(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ie(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),u=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*u+e.x,this.y=c*u+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Dm.prototype.isVector2=!0;let Re=Dm;class rn{constructor(e=0,i=0,r=0,u=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=u}static slerpFlat(e,i,r,u,c,d,h){let p=r[u+0],m=r[u+1],S=r[u+2],_=r[u+3],v=c[d+0],T=c[d+1],C=c[d+2],P=c[d+3];if(_!==P||p!==v||m!==T||S!==C){let M=p*v+m*T+S*C+_*P;M<0&&(v=-v,T=-T,C=-C,P=-P,M=-M);let x=1-h;if(M<.9995){const N=Math.acos(M),G=Math.sin(N);x=Math.sin(x*N)/G,h=Math.sin(h*N)/G,p=p*x+v*h,m=m*x+T*h,S=S*x+C*h,_=_*x+P*h}else{p=p*x+v*h,m=m*x+T*h,S=S*x+C*h,_=_*x+P*h;const N=1/Math.sqrt(p*p+m*m+S*S+_*_);p*=N,m*=N,S*=N,_*=N}}e[i]=p,e[i+1]=m,e[i+2]=S,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,u,c,d){const h=r[u],p=r[u+1],m=r[u+2],S=r[u+3],_=c[d],v=c[d+1],T=c[d+2],C=c[d+3];return e[i]=h*C+S*_+p*T-m*v,e[i+1]=p*C+S*v+m*_-h*T,e[i+2]=m*C+S*T+h*v-p*_,e[i+3]=S*C-h*_-p*v-m*T,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,u){return this._x=e,this._y=i,this._z=r,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,u=e._y,c=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(r/2),S=h(u/2),_=h(c/2),v=p(r/2),T=p(u/2),C=p(c/2);switch(d){case"XYZ":this._x=v*S*_+m*T*C,this._y=m*T*_-v*S*C,this._z=m*S*C+v*T*_,this._w=m*S*_-v*T*C;break;case"YXZ":this._x=v*S*_+m*T*C,this._y=m*T*_-v*S*C,this._z=m*S*C-v*T*_,this._w=m*S*_+v*T*C;break;case"ZXY":this._x=v*S*_-m*T*C,this._y=m*T*_+v*S*C,this._z=m*S*C+v*T*_,this._w=m*S*_-v*T*C;break;case"ZYX":this._x=v*S*_-m*T*C,this._y=m*T*_+v*S*C,this._z=m*S*C-v*T*_,this._w=m*S*_+v*T*C;break;case"YZX":this._x=v*S*_+m*T*C,this._y=m*T*_+v*S*C,this._z=m*S*C-v*T*_,this._w=m*S*_-v*T*C;break;case"XZY":this._x=v*S*_-m*T*C,this._y=m*T*_-v*S*C,this._z=m*S*C+v*T*_,this._w=m*S*_+v*T*C;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,u=Math.sin(r);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],u=i[4],c=i[8],d=i[1],h=i[5],p=i[9],m=i[2],S=i[6],_=i[10],v=r+h+_;if(v>0){const T=.5/Math.sqrt(v+1);this._w=.25/T,this._x=(S-p)*T,this._y=(c-m)*T,this._z=(d-u)*T}else if(r>h&&r>_){const T=2*Math.sqrt(1+r-h-_);this._w=(S-p)/T,this._x=.25*T,this._y=(u+d)/T,this._z=(c+m)/T}else if(h>_){const T=2*Math.sqrt(1+h-r-_);this._w=(c-m)/T,this._x=(u+d)/T,this._y=.25*T,this._z=(p+S)/T}else{const T=2*Math.sqrt(1+_-r-h);this._w=(d-u)/T,this._x=(c+m)/T,this._y=(p+S)/T,this._z=.25*T}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ie(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const u=Math.min(1,i/r);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,u=e._y,c=e._z,d=e._w,h=i._x,p=i._y,m=i._z,S=i._w;return this._x=r*S+d*h+u*m-c*p,this._y=u*S+d*p+c*h-r*m,this._z=c*S+d*m+r*p-u*h,this._w=d*S-r*h-u*p-c*m,this._onChangeCallback(),this}slerp(e,i){let r=e._x,u=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,u=-u,c=-c,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),S=Math.sin(m);p=Math.sin(p*m)/S,i=Math.sin(i*m)/S,this._x=this._x*p+r*i,this._y=this._y*p+u*i,this._z=this._z*p+c*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+u*i,this._z=this._z*p+c*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),u=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(u*Math.sin(e),u*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Nm=class Nm{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(eS.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(eS.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,u=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*u,this.y=c[1]*i+c[4]*r+c[7]*u,this.z=c[2]*i+c[5]*r+c[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,u=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*u+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*u+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*u+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*u+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,u=this.z,c=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*u-h*r),S=2*(h*i-c*u),_=2*(c*r-d*i);return this.x=i+p*m+d*_-h*S,this.y=r+p*S+h*m-c*_,this.z=u+p*_+c*S-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,u=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*u,this.y=c[1]*i+c[5]*r+c[9]*u,this.z=c[2]*i+c[6]*r+c[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ie(this.x,e.x,i.x),this.y=Ie(this.y,e.y,i.y),this.z=Ie(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ie(this.x,e,i),this.y=Ie(this.y,e,i),this.z=Ie(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ie(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,u=e.y,c=e.z,d=i.x,h=i.y,p=i.z;return this.x=u*p-c*h,this.y=c*d-r*p,this.z=r*h-u*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Oh.copy(this).projectOnVector(e),this.sub(Oh)}reflect(e){return this.sub(Oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ie(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,u=this.z-e.z;return i*i+r*r+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const u=Math.sin(i)*e;return this.x=u*Math.sin(r),this.y=Math.cos(i)*e,this.z=u*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=u,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nm.prototype.isVector3=!0;let j=Nm;const Oh=new j,eS=new rn,Um=class Um{constructor(e,i,r,u,c,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,u,c,d,h,p,m)}set(e,i,r,u,c,d,h,p,m){const S=this.elements;return S[0]=e,S[1]=u,S[2]=h,S[3]=i,S[4]=c,S[5]=p,S[6]=r,S[7]=d,S[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,u=i.elements,c=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],S=r[4],_=r[7],v=r[2],T=r[5],C=r[8],P=u[0],M=u[3],x=u[6],N=u[1],G=u[4],w=u[7],L=u[2],U=u[5],F=u[8];return c[0]=d*P+h*N+p*L,c[3]=d*M+h*G+p*U,c[6]=d*x+h*w+p*F,c[1]=m*P+S*N+_*L,c[4]=m*M+S*G+_*U,c[7]=m*x+S*w+_*F,c[2]=v*P+T*N+C*L,c[5]=v*M+T*G+C*U,c[8]=v*x+T*w+C*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],u=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8];return i*d*S-i*h*m-r*c*S+r*h*p+u*c*m-u*d*p}invert(){const e=this.elements,i=e[0],r=e[1],u=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8],_=S*d-h*m,v=h*p-S*c,T=m*c-d*p,C=i*_+r*v+u*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=_*P,e[1]=(u*m-S*r)*P,e[2]=(h*r-u*d)*P,e[3]=v*P,e[4]=(S*i-u*p)*P,e[5]=(u*c-h*i)*P,e[6]=T*P,e[7]=(r*p-m*i)*P,e[8]=(d*i-r*c)*P,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,u,c,d,h){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*d+m*h)+d+e,-u*m,u*p,-u*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return io("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ph.makeScale(e,i)),this}rotate(e){return io("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ph.makeRotation(-e)),this}translate(e,i){return io("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ph.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let u=0;u<9;u++)if(i[u]!==r[u])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Um.prototype.isMatrix3=!0;let ge=Um;const Ph=new ge,nS=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iS=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HT(){const o={enabled:!0,workingColorSpace:Oc,spaces:{},convert:function(u,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Ze&&(u.r=Ia(u.r),u.g=Ia(u.g),u.b=Ia(u.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(u.applyMatrix3(this.spaces[c].toXYZ),u.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ze&&(u.r=ao(u.r),u.g=ao(u.g),u.b=ao(u.b))),u},workingToColorSpace:function(u,c){return this.convert(u,this.workingColorSpace,c)},colorSpaceToWorking:function(u,c){return this.convert(u,c,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===xr?Pc:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,c=this.workingColorSpace){return u.fromArray(this.spaces[c].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,c,d){return u.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,c){return io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,c)},toWorkingColorSpace:function(u,c){return io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Oc]:{primaries:e,whitePoint:r,transfer:Pc,toXYZ:nS,fromXYZ:iS,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:e,whitePoint:r,transfer:Ze,toXYZ:nS,fromXYZ:iS,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),o}const Pe=HT();function Ia(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ao(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Vs;class GT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Vs===void 0&&(Vs=Ic("canvas")),Vs.width=e.width,Vs.height=e.height;const u=Vs.getContext("2d");e instanceof ImageData?u.putImageData(e,0,0):u.drawImage(e,0,0,e.width,e.height),r=Vs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ic("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const u=r.getImageData(0,0,e.width,e.height),c=u.data;for(let d=0;d<c.length;d++)c[d]=Ia(c[d]/255)*255;return r.putImageData(u,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ia(i[r]/255)*255):i[r]=Ia(i[r]);return{data:i,width:e.width,height:e.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VT=0;class Em{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=wl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},u=this.data;if(u!==null){let c;if(Array.isArray(u)){c=[];for(let d=0,h=u.length;d<h;d++)u[d].isDataTexture?c.push(Ih(u[d].image)):c.push(Ih(u[d]))}else c=Ih(u);r.url=c}return i||(e.images[this.uuid]=r),r}}function Ih(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?GT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}let XT=0;const zh=new j;class Vn extends ts{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=Oa,u=Oa,c=Gn,d=Qr,h=Hi,p=gi,m=Vn.DEFAULT_ANISOTROPY,S=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=wl(),this.name="",this.source=new Em(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=u,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zh).x}get height(){return this.source.getSize(zh).y}get depth(){return this.source.getSize(zh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){de(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){de(`Texture.setValues(): property '${i}' does not exist.`);continue}u&&r&&u.isVector2&&r.isVector2||u&&r&&u.isVector3&&r.isVector3||u&&r&&u.isMatrix3&&r.isMatrix3?u.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ux)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gp:e.x=e.x-Math.floor(e.x);break;case Oa:e.x=e.x<0?0:1;break;case _p:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gp:e.y=e.y-Math.floor(e.y);break;case Oa:e.y=e.y<0?0:1;break;case _p:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Ux;Vn.DEFAULT_ANISOTROPY=1;const Lm=class Lm{constructor(e=0,i=0,r=0,u=1){this.x=e,this.y=i,this.z=r,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,u){return this.x=e,this.y=i,this.z=r,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,u=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*u+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*u+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*u+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*u+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,u,c;const p=e.elements,m=p[0],S=p[4],_=p[8],v=p[1],T=p[5],C=p[9],P=p[2],M=p[6],x=p[10];if(Math.abs(S-v)<.01&&Math.abs(_-P)<.01&&Math.abs(C-M)<.01){if(Math.abs(S+v)<.1&&Math.abs(_+P)<.1&&Math.abs(C+M)<.1&&Math.abs(m+T+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const G=(m+1)/2,w=(T+1)/2,L=(x+1)/2,U=(S+v)/4,F=(_+P)/4,E=(C+M)/4;return G>w&&G>L?G<.01?(r=0,u=.707106781,c=.707106781):(r=Math.sqrt(G),u=U/r,c=F/r):w>L?w<.01?(r=.707106781,u=0,c=.707106781):(u=Math.sqrt(w),r=U/u,c=E/u):L<.01?(r=.707106781,u=.707106781,c=0):(c=Math.sqrt(L),r=F/c,u=E/c),this.set(r,u,c,i),this}let N=Math.sqrt((M-C)*(M-C)+(_-P)*(_-P)+(v-S)*(v-S));return Math.abs(N)<.001&&(N=1),this.x=(M-C)/N,this.y=(_-P)/N,this.z=(v-S)/N,this.w=Math.acos((m+T+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ie(this.x,e.x,i.x),this.y=Ie(this.y,e.y,i.y),this.z=Ie(this.z,e.z,i.z),this.w=Ie(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ie(this.x,e,i),this.y=Ie(this.y,e,i),this.z=Ie(this.z,e,i),this.w=Ie(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ie(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lm.prototype.isVector4=!0;let ln=Lm;class kT extends ts{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i),this.textures=[];const u={width:e,height:i,depth:r.depth},c=new Vn(u),d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let u=0,c=this.textures.length;u<c;u++)this.textures[u].image.width=e,this.textures[u].image.height=i,this.textures[u].image.depth=r,this.textures[u].isData3DTexture!==!0&&(this.textures[u].isArrayTexture=this.textures[u].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const u=Object.assign({},e.textures[i].image);this.textures[i].source=new Em(u)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends kT{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Gx extends Vn{constructor(e=null,i=1,r=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:u},this.magFilter=On,this.minFilter=On,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qT extends Vn{constructor(e=null,i=1,r=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:u},this.magFilter=On,this.minFilter=On,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Fc=class Fc{constructor(e,i,r,u,c,d,h,p,m,S,_,v,T,C,P,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,u,c,d,h,p,m,S,_,v,T,C,P,M)}set(e,i,r,u,c,d,h,p,m,S,_,v,T,C,P,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=u,x[1]=c,x[5]=d,x[9]=h,x[13]=p,x[2]=m,x[6]=S,x[10]=_,x[14]=v,x[3]=T,x[7]=C,x[11]=P,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fc().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,u=1/Xs.setFromMatrixColumn(e,0).length(),c=1/Xs.setFromMatrixColumn(e,1).length(),d=1/Xs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*u,i[1]=r[1]*u,i[2]=r[2]*u,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,u=e.y,c=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(u),m=Math.sin(u),S=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=d*S,T=d*_,C=h*S,P=h*_;i[0]=p*S,i[4]=-p*_,i[8]=m,i[1]=T+C*m,i[5]=v-P*m,i[9]=-h*p,i[2]=P-v*m,i[6]=C+T*m,i[10]=d*p}else if(e.order==="YXZ"){const v=p*S,T=p*_,C=m*S,P=m*_;i[0]=v+P*h,i[4]=C*h-T,i[8]=d*m,i[1]=d*_,i[5]=d*S,i[9]=-h,i[2]=T*h-C,i[6]=P+v*h,i[10]=d*p}else if(e.order==="ZXY"){const v=p*S,T=p*_,C=m*S,P=m*_;i[0]=v-P*h,i[4]=-d*_,i[8]=C+T*h,i[1]=T+C*h,i[5]=d*S,i[9]=P-v*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const v=d*S,T=d*_,C=h*S,P=h*_;i[0]=p*S,i[4]=C*m-T,i[8]=v*m+P,i[1]=p*_,i[5]=P*m+v,i[9]=T*m-C,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const v=d*p,T=d*m,C=h*p,P=h*m;i[0]=p*S,i[4]=P-v*_,i[8]=C*_+T,i[1]=_,i[5]=d*S,i[9]=-h*S,i[2]=-m*S,i[6]=T*_+C,i[10]=v-P*_}else if(e.order==="XZY"){const v=d*p,T=d*m,C=h*p,P=h*m;i[0]=p*S,i[4]=-_,i[8]=m*S,i[1]=v*_+P,i[5]=d*S,i[9]=T*_-C,i[2]=C*_-T,i[6]=h*S,i[10]=P*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(WT,e,YT)}lookAt(e,i,r){const u=this.elements;return pi.subVectors(e,i),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),hr.crossVectors(r,pi),hr.lengthSq()===0&&(Math.abs(r.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),hr.crossVectors(r,pi)),hr.normalize(),ic.crossVectors(pi,hr),u[0]=hr.x,u[4]=ic.x,u[8]=pi.x,u[1]=hr.y,u[5]=ic.y,u[9]=pi.y,u[2]=hr.z,u[6]=ic.z,u[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,u=i.elements,c=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],S=r[1],_=r[5],v=r[9],T=r[13],C=r[2],P=r[6],M=r[10],x=r[14],N=r[3],G=r[7],w=r[11],L=r[15],U=u[0],F=u[4],E=u[8],O=u[12],R=u[1],D=u[5],I=u[9],k=u[13],H=u[2],Q=u[6],q=u[10],W=u[14],tt=u[3],it=u[7],pt=u[11],xt=u[15];return c[0]=d*U+h*R+p*H+m*tt,c[4]=d*F+h*D+p*Q+m*it,c[8]=d*E+h*I+p*q+m*pt,c[12]=d*O+h*k+p*W+m*xt,c[1]=S*U+_*R+v*H+T*tt,c[5]=S*F+_*D+v*Q+T*it,c[9]=S*E+_*I+v*q+T*pt,c[13]=S*O+_*k+v*W+T*xt,c[2]=C*U+P*R+M*H+x*tt,c[6]=C*F+P*D+M*Q+x*it,c[10]=C*E+P*I+M*q+x*pt,c[14]=C*O+P*k+M*W+x*xt,c[3]=N*U+G*R+w*H+L*tt,c[7]=N*F+G*D+w*Q+L*it,c[11]=N*E+G*I+w*q+L*pt,c[15]=N*O+G*k+w*W+L*xt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],u=e[8],c=e[12],d=e[1],h=e[5],p=e[9],m=e[13],S=e[2],_=e[6],v=e[10],T=e[14],C=e[3],P=e[7],M=e[11],x=e[15],N=p*T-m*v,G=h*T-m*_,w=h*v-p*_,L=d*T-m*S,U=d*v-p*S,F=d*_-h*S;return i*(P*N-M*G+x*w)-r*(C*N-M*L+x*U)+u*(C*G-P*L+x*F)-c*(C*w-P*U+M*F)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],u=e[8],c=e[1],d=e[5],h=e[9],p=e[2],m=e[6],S=e[10];return i*(d*S-h*m)-r*(c*S-h*p)+u*(c*m-d*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=i,u[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],u=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8],_=e[9],v=e[10],T=e[11],C=e[12],P=e[13],M=e[14],x=e[15],N=i*h-r*d,G=i*p-u*d,w=i*m-c*d,L=r*p-u*h,U=r*m-c*h,F=u*m-c*p,E=S*P-_*C,O=S*M-v*C,R=S*x-T*C,D=_*M-v*P,I=_*x-T*P,k=v*x-T*M,H=N*k-G*I+w*D+L*R-U*O+F*E;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/H;return e[0]=(h*k-p*I+m*D)*Q,e[1]=(u*I-r*k-c*D)*Q,e[2]=(P*F-M*U+x*L)*Q,e[3]=(v*U-_*F-T*L)*Q,e[4]=(p*R-d*k-m*O)*Q,e[5]=(i*k-u*R+c*O)*Q,e[6]=(M*w-C*F-x*G)*Q,e[7]=(S*F-v*w+T*G)*Q,e[8]=(d*I-h*R+m*E)*Q,e[9]=(r*R-i*I-c*E)*Q,e[10]=(C*U-P*w+x*N)*Q,e[11]=(_*w-S*U-T*N)*Q,e[12]=(h*O-d*D-p*E)*Q,e[13]=(i*D-r*O+u*E)*Q,e[14]=(P*G-C*L-M*N)*Q,e[15]=(S*L-_*G+v*N)*Q,this}scale(e){const i=this.elements,r=e.x,u=e.y,c=e.z;return i[0]*=r,i[4]*=u,i[8]*=c,i[1]*=r,i[5]*=u,i[9]*=c,i[2]*=r,i[6]*=u,i[10]*=c,i[3]*=r,i[7]*=u,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,u))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),u=Math.sin(i),c=1-r,d=e.x,h=e.y,p=e.z,m=c*d,S=c*h;return this.set(m*d+r,m*h-u*p,m*p+u*h,0,m*h+u*p,S*h+r,S*p-u*d,0,m*p-u*h,S*p+u*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,u,c,d){return this.set(1,r,c,0,e,1,d,0,i,u,1,0,0,0,0,1),this}compose(e,i,r){const u=this.elements,c=i._x,d=i._y,h=i._z,p=i._w,m=c+c,S=d+d,_=h+h,v=c*m,T=c*S,C=c*_,P=d*S,M=d*_,x=h*_,N=p*m,G=p*S,w=p*_,L=r.x,U=r.y,F=r.z;return u[0]=(1-(P+x))*L,u[1]=(T+w)*L,u[2]=(C-G)*L,u[3]=0,u[4]=(T-w)*U,u[5]=(1-(v+x))*U,u[6]=(M+N)*U,u[7]=0,u[8]=(C+G)*F,u[9]=(M-N)*F,u[10]=(1-(v+P))*F,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,i,r){const u=this.elements;e.x=u[12],e.y=u[13],e.z=u[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let d=Xs.set(u[0],u[1],u[2]).length();const h=Xs.set(u[4],u[5],u[6]).length(),p=Xs.set(u[8],u[9],u[10]).length();c<0&&(d=-d),Ii.copy(this);const m=1/d,S=1/h,_=1/p;return Ii.elements[0]*=m,Ii.elements[1]*=m,Ii.elements[2]*=m,Ii.elements[4]*=S,Ii.elements[5]*=S,Ii.elements[6]*=S,Ii.elements[8]*=_,Ii.elements[9]*=_,Ii.elements[10]*=_,i.setFromRotationMatrix(Ii),r.x=d,r.y=h,r.z=p,this}makePerspective(e,i,r,u,c,d,h=la,p=!1){const m=this.elements,S=2*c/(i-e),_=2*c/(r-u),v=(i+e)/(i-e),T=(r+u)/(r-u);let C,P;if(p)C=c/(d-c),P=d*c/(d-c);else if(h===la)C=-(d+c)/(d-c),P=-2*d*c/(d-c);else if(h===Al)C=-d/(d-c),P=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=T,m[13]=0,m[2]=0,m[6]=0,m[10]=C,m[14]=P,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,u,c,d,h=la,p=!1){const m=this.elements,S=2/(i-e),_=2/(r-u),v=-(i+e)/(i-e),T=-(r+u)/(r-u);let C,P;if(p)C=1/(d-c),P=d/(d-c);else if(h===la)C=-2/(d-c),P=-(d+c)/(d-c);else if(h===Al)C=-1/(d-c),P=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=_,m[9]=0,m[13]=T,m[2]=0,m[6]=0,m[10]=C,m[14]=P,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let u=0;u<16;u++)if(i[u]!==r[u])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Fc.prototype.isMatrix4=!0;let nn=Fc;const Xs=new j,Ii=new nn,WT=new j(0,0,0),YT=new j(1,1,1),hr=new j,ic=new j,pi=new j,aS=new nn,rS=new rn;class ii{constructor(e=0,i=0,r=0,u=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,u=this._order){return this._x=e,this._y=i,this._z=r,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const u=e.elements,c=u[0],d=u[4],h=u[8],p=u[1],m=u[5],S=u[9],_=u[2],v=u[6],T=u[10];switch(i){case"XYZ":this._y=Math.asin(Ie(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,T),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,T),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,T),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Ie(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,T),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Ie(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,T));break;case"XZY":this._z=Math.asin(-Ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-S,T),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return aS.makeRotationFromQuaternion(e),this.setFromRotationMatrix(aS,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return rS.setFromEuler(this),this.setFromQuaternion(rS,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class Vx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ZT=0;const sS=new j,ks=new rn,Ca=new nn,ac=new j,hl=new j,KT=new j,QT=new rn,oS=new j(1,0,0),lS=new j(0,1,0),uS=new j(0,0,1),cS={type:"added"},JT={type:"removed"},qs={type:"childadded",child:null},Fh={type:"childremoved",child:null};class Pn extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=wl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new j,i=new ii,r=new rn,u=new j(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new nn},normalMatrix:{value:new ge}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ks.setFromAxisAngle(e,i),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,i){return ks.setFromAxisAngle(e,i),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(oS,e)}rotateY(e){return this.rotateOnAxis(lS,e)}rotateZ(e){return this.rotateOnAxis(uS,e)}translateOnAxis(e,i){return sS.copy(e).applyQuaternion(this.quaternion),this.position.add(sS.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(oS,e)}translateY(e){return this.translateOnAxis(lS,e)}translateZ(e){return this.translateOnAxis(uS,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ca.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?ac.copy(e):ac.set(e,i,r);const u=this.parent;this.updateWorldMatrix(!0,!1),hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ca.lookAt(hl,ac,this.up):Ca.lookAt(ac,hl,this.up),this.quaternion.setFromRotationMatrix(Ca),u&&(Ca.extractRotation(u.matrixWorld),ks.setFromRotationMatrix(Ca),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cS),qs.child=e,this.dispatchEvent(qs),qs.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(JT),Fh.child=e,this.dispatchEvent(Fh),Fh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cS),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,u=this.children.length;r<u;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const u=this.children;for(let c=0,d=u.length;c<d;c++)u[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,e,KT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,QT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let r=0,u=i.length;r<u;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,u=i.length;r<u;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,u=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*u,c[13]+=r-c[1]*i-c[5]*r-c[9]*u,c[14]+=u-c[2]*i-c[6]*r-c[10]*u}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,u=i.length;r<u;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const u=this.parent;if(e===!0&&u!==null&&u.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let d=0,h=c.length;d<h;d++)c[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,u.name=this.name,u.castShadow=this.castShadow,u.receiveShadow=this.receiveShadow,u.visible=this.visible,u.frustumCulled=this.frustumCulled,u.renderOrder=this.renderOrder,u.static=this.static,u.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.pivot!==null&&(u.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(u.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(u.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(h=>({...h})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(e),u.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,S=p.length;m<S;m++){const _=p[m];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(e.materials,this.material[p]));u.material=h}else u.material=c(e.materials,this.material);if(this.children.length>0){u.children=[];for(let h=0;h<this.children.length;h++)u.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];u.animations.push(c(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),S=d(e.images),_=d(e.shapes),v=d(e.skeletons),T=d(e.animations),C=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),S.length>0&&(r.images=S),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),T.length>0&&(r.animations=T),C.length>0&&(r.nodes=C)}return r.object=u,r;function d(h){const p=[];for(const m in h){const S=h[m];delete S.metadata,p.push(S)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const u=e.children[r];this.add(u.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Pn.DEFAULT_UP=new j(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rc extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jT={type:"move"};class Bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let u=null,c=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const P of e.hand.values()){const M=i.getJointPose(P,r),x=this._getHandJoint(m,P);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const S=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],v=S.position.distanceTo(_.position),T=.02,C=.005;m.inputState.pinching&&v>T+C?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=T-C&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(u=i.getPose(e.targetRaySpace,r),u===null&&c!==null&&(u=c),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(jT)))}return h!==null&&(h.visible=u!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new rc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},sc={h:0,s:0,l:0};function Hh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Fe{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pe.colorSpaceToWorking(this,i),this}setRGB(e,i,r,u=Pe.workingColorSpace){return this.r=e,this.g=i,this.b=r,Pe.colorSpaceToWorking(this,u),this}setHSL(e,i,r,u=Pe.workingColorSpace){if(e=BT(e,1),i=Ie(i,0,1),r=Ie(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=Hh(d,c,e+1/3),this.g=Hh(d,c,e),this.b=Hh(d,c,e-1/3)}return Pe.colorSpaceToWorking(this,u),this}setStyle(e,i=Hn){function r(c){c!==void 0&&parseFloat(c)<1&&de("Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=u[1],h=u[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:de("Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=u[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);de("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Hn){const r=Xx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):de("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return Pe.workingToColorSpace(Bn.copy(this),e),Math.round(Ie(Bn.r*255,0,255))*65536+Math.round(Ie(Bn.g*255,0,255))*256+Math.round(Ie(Bn.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Pe.workingColorSpace){Pe.workingToColorSpace(Bn.copy(this),i);const r=Bn.r,u=Bn.g,c=Bn.b,d=Math.max(r,u,c),h=Math.min(r,u,c);let p,m;const S=(h+d)/2;if(h===d)p=0,m=0;else{const _=d-h;switch(m=S<=.5?_/(d+h):_/(2-d-h),d){case r:p=(u-c)/_+(u<c?6:0);break;case u:p=(c-r)/_+2;break;case c:p=(r-u)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=S,e}getRGB(e,i=Pe.workingColorSpace){return Pe.workingToColorSpace(Bn.copy(this),i),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=Hn){Pe.workingToColorSpace(Bn.copy(this),e);const i=Bn.r,r=Bn.g,u=Bn.b;return e!==Hn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(u*255)})`}offsetHSL(e,i,r){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+i,pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(pr),e.getHSL(sc);const r=Lh(pr.h,sc.h,i),u=Lh(pr.s,sc.s,i),c=Lh(pr.l,sc.l,i);return this.setHSL(r,u,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,u=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*u,this.g=c[1]*i+c[4]*r+c[7]*u,this.b=c[2]*i+c[5]*r+c[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new Fe;Fe.NAMES=Xx;class Hc extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const zi=new j,wa=new j,Gh=new j,Da=new j,Ws=new j,Ys=new j,fS=new j,Vh=new j,Xh=new j,kh=new j,qh=new ln,Wh=new ln,Yh=new ln;class Bi{constructor(e=new j,i=new j,r=new j){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,u){u.subVectors(r,i),zi.subVectors(e,i),u.cross(zi);const c=u.lengthSq();return c>0?u.multiplyScalar(1/Math.sqrt(c)):u.set(0,0,0)}static getBarycoord(e,i,r,u,c){zi.subVectors(u,i),wa.subVectors(r,i),Gh.subVectors(e,i);const d=zi.dot(zi),h=zi.dot(wa),p=zi.dot(Gh),m=wa.dot(wa),S=wa.dot(Gh),_=d*m-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,T=(m*p-h*S)*v,C=(d*S-h*p)*v;return c.set(1-T-C,C,T)}static containsPoint(e,i,r,u){return this.getBarycoord(e,i,r,u,Da)===null?!1:Da.x>=0&&Da.y>=0&&Da.x+Da.y<=1}static getInterpolation(e,i,r,u,c,d,h,p){return this.getBarycoord(e,i,r,u,Da)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Da.x),p.addScaledVector(d,Da.y),p.addScaledVector(h,Da.z),p)}static getInterpolatedAttribute(e,i,r,u,c,d){return qh.setScalar(0),Wh.setScalar(0),Yh.setScalar(0),qh.fromBufferAttribute(e,i),Wh.fromBufferAttribute(e,r),Yh.fromBufferAttribute(e,u),d.setScalar(0),d.addScaledVector(qh,c.x),d.addScaledVector(Wh,c.y),d.addScaledVector(Yh,c.z),d}static isFrontFacing(e,i,r,u){return zi.subVectors(r,i),wa.subVectors(e,i),zi.cross(wa).dot(u)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,u){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,i,r,u){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),wa.subVectors(this.a,this.b),zi.cross(wa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,u,c){return Bi.getInterpolation(e,this.a,this.b,this.c,i,r,u,c)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,u=this.b,c=this.c;let d,h;Ws.subVectors(u,r),Ys.subVectors(c,r),Vh.subVectors(e,r);const p=Ws.dot(Vh),m=Ys.dot(Vh);if(p<=0&&m<=0)return i.copy(r);Xh.subVectors(e,u);const S=Ws.dot(Xh),_=Ys.dot(Xh);if(S>=0&&_<=S)return i.copy(u);const v=p*_-S*m;if(v<=0&&p>=0&&S<=0)return d=p/(p-S),i.copy(r).addScaledVector(Ws,d);kh.subVectors(e,c);const T=Ws.dot(kh),C=Ys.dot(kh);if(C>=0&&T<=C)return i.copy(c);const P=T*m-p*C;if(P<=0&&m>=0&&C<=0)return h=m/(m-C),i.copy(r).addScaledVector(Ys,h);const M=S*C-T*_;if(M<=0&&_-S>=0&&T-C>=0)return fS.subVectors(c,u),h=(_-S)/(_-S+(T-C)),i.copy(u).addScaledVector(fS,h);const x=1/(M+P+v);return d=P*x,h=v*x,i.copy(r).addScaledVector(Ws,d).addScaledVector(Ys,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Dl{constructor(e=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Fi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Fi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Fi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Fi):Fi.fromBufferAttribute(c,d),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),oc.copy(r.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}const u=e.children;for(let c=0,d=u.length;c<d;c++)this.expandByObject(u[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pl),lc.subVectors(this.max,pl),Zs.subVectors(e.a,pl),Ks.subVectors(e.b,pl),Qs.subVectors(e.c,pl),mr.subVectors(Ks,Zs),gr.subVectors(Qs,Ks),qr.subVectors(Zs,Qs);let i=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-qr.z,qr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,qr.z,0,-qr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-qr.y,qr.x,0];return!Zh(i,Zs,Ks,Qs,lc)||(i=[1,0,0,0,1,0,0,0,1],!Zh(i,Zs,Ks,Qs,lc))?!1:(uc.crossVectors(mr,gr),i=[uc.x,uc.y,uc.z],Zh(i,Zs,Ks,Qs,lc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Na),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Na=[new j,new j,new j,new j,new j,new j,new j,new j],Fi=new j,oc=new Dl,Zs=new j,Ks=new j,Qs=new j,mr=new j,gr=new j,qr=new j,pl=new j,lc=new j,uc=new j,Wr=new j;function Zh(o,e,i,r,u){for(let c=0,d=o.length-3;c<=d;c+=3){Wr.fromArray(o,c);const h=u.x*Math.abs(Wr.x)+u.y*Math.abs(Wr.y)+u.z*Math.abs(Wr.z),p=e.dot(Wr),m=i.dot(Wr),S=r.dot(Wr);if(Math.max(-Math.max(p,m,S),Math.min(p,m,S))>h)return!1}return!0}const vn=new j,cc=new Re;let $T=0;class za extends ts{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$T++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=OT,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let u=0,c=this.itemSize;u<c;u++)this.array[e+u]=i.array[r+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)cc.fromBufferAttribute(this,i),cc.applyMatrix3(e),this.setXY(i,cc.x,cc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=dl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ei(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=dl(i,this.array)),i}setX(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=dl(i,this.array)),i}setY(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=dl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=dl(i,this.array)),i}setW(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),r=ei(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,u){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),r=ei(r,this.array),u=ei(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=u,this}setXYZW(e,i,r,u,c){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),r=ei(r,this.array),u=ei(u,this.array),c=ei(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=u,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class kx extends za{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class qx extends za{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Rn extends za{constructor(e,i,r){super(new Float32Array(e),i,r)}}const t1=new Dl,ml=new j,Kh=new j;class Tm{constructor(e=new j,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):t1.setFromPoints(e).getCenter(r);let u=0;for(let c=0,d=e.length;c<d;c++)u=Math.max(u,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ml.subVectors(e,this.center);const i=ml.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),u=(r-this.radius)*.5;this.center.addScaledVector(ml,u/r),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ml.copy(e.center).add(Kh)),this.expandByPoint(ml.copy(e.center).sub(Kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let e1=0;const wi=new nn,Qh=new Pn,Js=new j,mi=new Dl,gl=new Dl,An=new j;class _i extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=wl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(PT(e)?qx:kx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ge().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,i,r){return wi.makeTranslation(e,i,r),this.applyMatrix4(wi),this}scale(e,i,r){return wi.makeScale(e,i,r),this.applyMatrix4(wi),this}lookAt(e){return Qh.lookAt(e),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let u=0,c=e.length;u<c;u++){const d=e[u];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Rn(r,3))}else{const r=Math.min(e.length,i.count);for(let u=0;u<r;u++){const c=e[u];i.setXYZ(u,c.x,c.y,c.z||0)}e.length>i.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,u=i.length;r<u;r++){const c=i[r];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tm);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];gl.setFromBufferAttribute(h),this.morphTargetsRelative?(An.addVectors(mi.min,gl.min),mi.expandByPoint(An),An.addVectors(mi.max,gl.max),mi.expandByPoint(An)):(mi.expandByPoint(gl.min),mi.expandByPoint(gl.max))}mi.getCenter(r);let u=0;for(let c=0,d=e.count;c<d;c++)An.fromBufferAttribute(e,c),u=Math.max(u,r.distanceToSquared(An));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,S=h.count;m<S;m++)An.fromBufferAttribute(h,m),p&&(Js.fromBufferAttribute(e,m),An.add(Js)),u=Math.max(u,r.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,u=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new za(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const h=[],p=[];for(let E=0;E<r.count;E++)h[E]=new j,p[E]=new j;const m=new j,S=new j,_=new j,v=new Re,T=new Re,C=new Re,P=new j,M=new j;function x(E,O,R){m.fromBufferAttribute(r,E),S.fromBufferAttribute(r,O),_.fromBufferAttribute(r,R),v.fromBufferAttribute(c,E),T.fromBufferAttribute(c,O),C.fromBufferAttribute(c,R),S.sub(m),_.sub(m),T.sub(v),C.sub(v);const D=1/(T.x*C.y-C.x*T.y);isFinite(D)&&(P.copy(S).multiplyScalar(C.y).addScaledVector(_,-T.y).multiplyScalar(D),M.copy(_).multiplyScalar(T.x).addScaledVector(S,-C.x).multiplyScalar(D),h[E].add(P),h[O].add(P),h[R].add(P),p[E].add(M),p[O].add(M),p[R].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let E=0,O=N.length;E<O;++E){const R=N[E],D=R.start,I=R.count;for(let k=D,H=D+I;k<H;k+=3)x(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const G=new j,w=new j,L=new j,U=new j;function F(E){L.fromBufferAttribute(u,E),U.copy(L);const O=h[E];G.copy(O),G.sub(L.multiplyScalar(L.dot(O))).normalize(),w.crossVectors(U,O);const D=w.dot(p[E])<0?-1:1;d.setXYZW(E,G.x,G.y,G.z,D)}for(let E=0,O=N.length;E<O;++E){const R=N[E],D=R.start,I=R.count;for(let k=D,H=D+I;k<H;k+=3)F(e.getX(k+0)),F(e.getX(k+1)),F(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new za(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,T=r.count;v<T;v++)r.setXYZ(v,0,0,0);const u=new j,c=new j,d=new j,h=new j,p=new j,m=new j,S=new j,_=new j;if(e)for(let v=0,T=e.count;v<T;v+=3){const C=e.getX(v+0),P=e.getX(v+1),M=e.getX(v+2);u.fromBufferAttribute(i,C),c.fromBufferAttribute(i,P),d.fromBufferAttribute(i,M),S.subVectors(d,c),_.subVectors(u,c),S.cross(_),h.fromBufferAttribute(r,C),p.fromBufferAttribute(r,P),m.fromBufferAttribute(r,M),h.add(S),p.add(S),m.add(S),r.setXYZ(C,h.x,h.y,h.z),r.setXYZ(P,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,T=i.count;v<T;v+=3)u.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),S.subVectors(d,c),_.subVectors(u,c),S.cross(_),r.setXYZ(v+0,S.x,S.y,S.z),r.setXYZ(v+1,S.x,S.y,S.z),r.setXYZ(v+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)An.fromBufferAttribute(e,i),An.normalize(),e.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function e(h,p){const m=h.array,S=h.itemSize,_=h.normalized,v=new m.constructor(p.length*S);let T=0,C=0;for(let P=0,M=p.length;P<M;P++){h.isInterleavedBufferAttribute?T=p[P]*h.data.stride+h.offset:T=p[P]*S;for(let x=0;x<S;x++)v[C++]=m[T++]}return new za(v,S,_)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new _i,r=this.index.array,u=this.attributes;for(const h in u){const p=u[h],m=e(p,r);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let S=0,_=m.length;S<_;S++){const v=m[S],T=e(v,r);p.push(T)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const u={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],S=[];for(let _=0,v=m.length;_<v;_++){const T=m[_];S.push(T.toJSON(e.data))}S.length>0&&(u[p]=S,c=!0)}c&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const u=e.attributes;for(const m in u){const S=u[m];this.setAttribute(m,S.clone(i))}const c=e.morphAttributes;for(const m in c){const S=[],_=c[m];for(let v=0,T=_.length;v<T;v++)S.push(_[v].clone(i));this.morphAttributes[m]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,S=d.length;m<S;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jh=new j,n1=new j,i1=new ge;class Sr{constructor(e=new j(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,u){return this.normal.set(e,i,r),this.constant=u,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const u=Jh.subVectors(r,i).cross(n1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const u=e.delta(Jh),c=this.normal.dot(u);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(u,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||i1.getNormalMatrix(e),u=this.coplanarPoint(Jh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-u.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let a1=0;class Nl extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=wl(),this.name="",this.type="Material",this.blending=Ml,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yx,this.blendDst=Ex,this.blendEquation=eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=El,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=RT,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nh,this.stencilZFail=Nh,this.stencilZPass=Nh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){de(`Material: parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){de(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(r):u&&u.isVector2&&r&&r.isVector2||u&&u.isEuler&&r&&r.isEuler||u&&u.isVector3&&r&&r.isVector3?u.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}if(i){const c=u(e.textures),d=u(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Sr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Re().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const u=i.length;r=new Array(u);for(let c=0;c!==u;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ua=new j,jh=new j,fc=new j,dc=new j;class r1{constructor(e=new j,i=new j(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ua)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ua.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ua.copy(this.origin).addScaledVector(this.direction,i),Ua.distanceToSquared(e))}distanceSqToSegment(e,i,r,u){jh.copy(e).add(i).multiplyScalar(.5),fc.copy(i).sub(e).normalize(),dc.copy(this.origin).sub(jh);const c=e.distanceTo(i)*.5,d=-this.direction.dot(fc),h=dc.dot(this.direction),p=-dc.dot(fc),m=dc.lengthSq(),S=Math.abs(1-d*d);let _,v,T,C;if(S>0)if(_=d*p-h,v=d*h-p,C=c*S,_>=0)if(v>=-C)if(v<=C){const P=1/S;_*=P,v*=P,T=_*(_+d*v+2*h)+v*(d*_+v+2*p)+m}else v=c,_=Math.max(0,-(d*v+h)),T=-_*_+v*(v+2*p)+m;else v=-c,_=Math.max(0,-(d*v+h)),T=-_*_+v*(v+2*p)+m;else v<=-C?(_=Math.max(0,-(-d*c+h)),v=_>0?-c:Math.min(Math.max(-c,-p),c),T=-_*_+v*(v+2*p)+m):v<=C?(_=0,v=Math.min(Math.max(-c,-p),c),T=v*(v+2*p)+m):(_=Math.max(0,-(d*c+h)),v=_>0?c:Math.min(Math.max(-c,-p),c),T=-_*_+v*(v+2*p)+m);else v=d>0?-c:c,_=Math.max(0,-(d*v+h)),T=-_*_+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),u&&u.copy(jh).addScaledVector(fc,v),T}intersectSphere(e,i){if(e.radius<0)return null;Ua.subVectors(e.center,this.origin);const r=Ua.dot(this.direction),u=Ua.dot(Ua)-r*r,c=e.radius*e.radius;if(u>c)return null;const d=Math.sqrt(c-u),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,u,c,d,h,p;const m=1/this.direction.x,S=1/this.direction.y,_=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,u=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,u=(e.min.x-v.x)*m),S>=0?(c=(e.min.y-v.y)*S,d=(e.max.y-v.y)*S):(c=(e.max.y-v.y)*S,d=(e.min.y-v.y)*S),r>d||c>u||((c>r||isNaN(r))&&(r=c),(d<u||isNaN(u))&&(u=d),_>=0?(h=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),r>p||h>u)||((h>r||r!==r)&&(r=h),(p<u||u!==u)&&(u=p),u<0)?null:this.at(r>=0?r:u,i)}intersectsBox(e){return this.intersectBox(e,Ua)!==null}intersectTriangle(e,i,r,u,c){const d=this.origin,h=this.direction,p=h.x,m=h.y,S=h.z,_=e.x-d.x,v=e.y-d.y,T=e.z-d.z,C=i.x-d.x,P=i.y-d.y,M=i.z-d.z,x=r.x-d.x,N=r.y-d.y,G=r.z-d.z,w=Math.abs(p),L=Math.abs(m),U=Math.abs(S);let F,E,O,R,D,I,k,H,Q,q,W,tt;if(w>=L&&w>=U?(O=p,I=_,Q=C,tt=x,p>=0?(F=m,E=S,R=v,D=T,k=P,H=M,q=N,W=G):(F=S,E=m,R=T,D=v,k=M,H=P,q=G,W=N)):L>=U?(O=m,I=v,Q=P,tt=N,m>=0?(F=S,E=p,R=T,D=_,k=M,H=C,q=G,W=x):(F=p,E=S,R=_,D=T,k=C,H=M,q=x,W=G)):(O=S,I=T,Q=M,tt=G,S>=0?(F=p,E=m,R=_,D=v,k=C,H=P,q=x,W=N):(F=m,E=p,R=v,D=_,k=P,H=C,q=N,W=x)),O===0)return null;const it=F/O,pt=E/O,xt=1/O,Bt=R-it*I,Dt=D-pt*I,V=k-it*Q,mt=H-pt*Q,vt=q-it*tt,X=W-pt*tt,rt=vt*mt-X*V,St=Bt*X-Dt*vt,Ct=V*Dt-mt*Bt;if(u){if(rt<0||St<0||Ct<0)return null}else if((rt<0||St<0||Ct<0)&&(rt>0||St>0||Ct>0))return null;const ft=rt+St+Ct;if(ft===0)return null;const Rt=xt*(rt*I+St*Q+Ct*tt);return(ft>0?Rt<0:Rt>0)?null:this.at(Rt/ft,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ho extends Nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Tx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dS=new nn,Yr=new r1,hc=new Tm,hS=new j,pc=new j,mc=new j,gc=new j,$h=new j,_c=new j,pS=new j,vc=new j;class In extends Pn{constructor(e=new _i,i=new ho){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const u=i[r[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=u.length;c<d;c++){const h=u[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,u=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(u,e);const h=this.morphTargetInfluences;if(c&&h){_c.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const S=h[p],_=c[p];S!==0&&($h.fromBufferAttribute(_,e),d?_c.addScaledVector($h,S):_c.addScaledVector($h.sub(i),S))}i.add(_c)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const r=this.geometry,u=this.material,c=this.matrixWorld;u!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),hc.copy(r.boundingSphere),hc.applyMatrix4(c),Yr.copy(e.ray).recast(e.near),!(hc.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(hc,hS)===null||Yr.origin.distanceToSquared(hS)>(e.far-e.near)**2))&&(dS.copy(c).invert(),Yr.copy(e.ray).applyMatrix4(dS),!(r.boundingBox!==null&&Yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Yr)))}_computeIntersections(e,i,r){let u;const c=this.geometry,d=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,S=c.attributes.uv1,_=c.attributes.normal,v=c.groups,T=c.drawRange;if(h!==null)if(Array.isArray(d))for(let C=0,P=v.length;C<P;C++){const M=v[C],x=d[M.materialIndex],N=Math.max(M.start,T.start),G=Math.min(h.count,Math.min(M.start+M.count,T.start+T.count));for(let w=N,L=G;w<L;w+=3){const U=h.getX(w),F=h.getX(w+1),E=h.getX(w+2);u=Sc(this,x,e,r,m,S,_,U,F,E),u&&(u.faceIndex=Math.floor(w/3),u.face.materialIndex=M.materialIndex,i.push(u))}}else{const C=Math.max(0,T.start),P=Math.min(h.count,T.start+T.count);for(let M=C,x=P;M<x;M+=3){const N=h.getX(M),G=h.getX(M+1),w=h.getX(M+2);u=Sc(this,d,e,r,m,S,_,N,G,w),u&&(u.faceIndex=Math.floor(M/3),i.push(u))}}else if(p!==void 0)if(Array.isArray(d))for(let C=0,P=v.length;C<P;C++){const M=v[C],x=d[M.materialIndex],N=Math.max(M.start,T.start),G=Math.min(p.count,Math.min(M.start+M.count,T.start+T.count));for(let w=N,L=G;w<L;w+=3){const U=w,F=w+1,E=w+2;u=Sc(this,x,e,r,m,S,_,U,F,E),u&&(u.faceIndex=Math.floor(w/3),u.face.materialIndex=M.materialIndex,i.push(u))}}else{const C=Math.max(0,T.start),P=Math.min(p.count,T.start+T.count);for(let M=C,x=P;M<x;M+=3){const N=M,G=M+1,w=M+2;u=Sc(this,d,e,r,m,S,_,N,G,w),u&&(u.faceIndex=Math.floor(M/3),i.push(u))}}}}function s1(o,e,i,r,u,c,d,h){let p;if(e.side===ni?p=r.intersectTriangle(d,c,u,!0,h):p=r.intersectTriangle(u,c,d,e.side===Xi,h),p===null)return null;vc.copy(h),vc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(vc);return m<i.near||m>i.far?null:{distance:m,point:vc.clone(),object:o}}function Sc(o,e,i,r,u,c,d,h,p,m){o.getVertexPosition(h,pc),o.getVertexPosition(p,mc),o.getVertexPosition(m,gc);const S=s1(o,e,i,r,pc,mc,gc,pS);if(S){const _=new j;Bi.getBarycoord(pS,pc,mc,gc,_),u&&(S.uv=Bi.getInterpolatedAttribute(u,h,p,m,_,new Re)),c&&(S.uv1=Bi.getInterpolatedAttribute(c,h,p,m,_,new Re)),d&&(S.normal=Bi.getInterpolatedAttribute(d,h,p,m,_,new j),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new j,materialIndex:0};Bi.getNormal(pc,mc,gc,v.normal),S.face=v,S.barycoord=_}return S}class o1 extends Vn{constructor(e=null,i=1,r=1,u,c,d,h,p,m=On,S=On,_,v){super(null,d,h,p,m,S,u,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zr=new Tm,l1=new Re(.5,.5),xc=new j;class bm{constructor(e=new Sr,i=new Sr,r=new Sr,u=new Sr,c=new Sr,d=new Sr){this.planes=[e,i,r,u,c,d]}set(e,i,r,u,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(u),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=la,r=!1){const u=this.planes,c=e.elements,d=c[0],h=c[1],p=c[2],m=c[3],S=c[4],_=c[5],v=c[6],T=c[7],C=c[8],P=c[9],M=c[10],x=c[11],N=c[12],G=c[13],w=c[14],L=c[15];if(u[0].setComponents(m-d,T-S,x-C,L-N).normalize(),u[1].setComponents(m+d,T+S,x+C,L+N).normalize(),u[2].setComponents(m+h,T+_,x+P,L+G).normalize(),u[3].setComponents(m-h,T-_,x-P,L-G).normalize(),r)u[4].setComponents(p,v,M,w).normalize(),u[5].setComponents(m-p,T-v,x-M,L-w).normalize();else if(u[4].setComponents(m-p,T-v,x-M,L-w).normalize(),i===la)u[5].setComponents(m+p,T+v,x+M,L+w).normalize();else if(i===Al)u[5].setComponents(p,v,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){Zr.center.set(0,0,0);const i=l1.distanceTo(e.center);return Zr.radius=.7071067811865476+i,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const i=this.planes,r=e.center,u=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<u)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const u=i[r];if(xc.x=u.normal.x>0?e.max.x:e.min.x,xc.y=u.normal.y>0?e.max.y:e.min.y,xc.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wx extends Vn{constructor(e=[],i=jr,r,u,c,d,h,p,m,S){super(e,i,r,u,c,d,h,p,m,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gc extends Vn{constructor(e,i,r,u,c,d,h,p,m){super(e,i,r,u,c,d,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rl extends Vn{constructor(e,i,r=ca,u,c,d,h=On,p=On,m,S=Fa,_=1){if(S!==Fa&&S!==Jr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,u,c,d,h,p,S,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Em(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class u1 extends Rl{constructor(e,i=ca,r=jr,u,c,d=On,h=On,p,m=Fa){const S={width:e,height:e,depth:1},_=[S,S,S,S,S,S];super(e,e,i,r,u,c,d,h,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Yx extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ul extends _i{constructor(e=1,i=1,r=1,u=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:u,heightSegments:c,depthSegments:d};const h=this;u=Math.floor(u),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],S=[],_=[];let v=0,T=0;C("z","y","x",-1,-1,r,i,e,d,c,0),C("z","y","x",1,-1,r,i,-e,d,c,1),C("x","z","y",1,1,e,r,i,u,d,2),C("x","z","y",1,-1,e,r,-i,u,d,3),C("x","y","z",1,-1,e,i,r,u,c,4),C("x","y","z",-1,-1,e,i,-r,u,c,5),this.setIndex(p),this.setAttribute("position",new Rn(m,3)),this.setAttribute("normal",new Rn(S,3)),this.setAttribute("uv",new Rn(_,2));function C(P,M,x,N,G,w,L,U,F,E,O){const R=w/F,D=L/E,I=w/2,k=L/2,H=U/2,Q=F+1,q=E+1;let W=0,tt=0;const it=new j;for(let pt=0;pt<q;pt++){const xt=pt*D-k;for(let Bt=0;Bt<Q;Bt++){const Dt=Bt*R-I;it[P]=Dt*N,it[M]=xt*G,it[x]=H,m.push(it.x,it.y,it.z),it[P]=0,it[M]=0,it[x]=U>0?1:-1,S.push(it.x,it.y,it.z),_.push(Bt/F),_.push(1-pt/E),W+=1}}for(let pt=0;pt<E;pt++)for(let xt=0;xt<F;xt++){const Bt=v+xt+Q*pt,Dt=v+xt+Q*(pt+1),V=v+(xt+1)+Q*(pt+1),mt=v+(xt+1)+Q*pt;p.push(Bt,Dt,mt),p.push(Dt,V,mt),tt+=6}h.addGroup(T,tt,O),T+=tt,v+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Am extends _i{constructor(e=[],i=[],r=1,u=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:u};const c=[],d=[];h(u),m(r),S(),this.setAttribute("position",new Rn(c,3)),this.setAttribute("normal",new Rn(c.slice(),3)),this.setAttribute("uv",new Rn(d,2)),u===0?this.computeVertexNormals():this.normalizeNormals();function h(N){const G=new j,w=new j,L=new j;for(let U=0;U<i.length;U+=3)T(i[U+0],G),T(i[U+1],w),T(i[U+2],L),p(G,w,L,N)}function p(N,G,w,L){const U=L+1,F=[];for(let E=0;E<=U;E++){F[E]=[];const O=N.clone().lerp(w,E/U),R=G.clone().lerp(w,E/U),D=U-E;for(let I=0;I<=D;I++)I===0&&E===U?F[E][I]=O:F[E][I]=O.clone().lerp(R,I/D)}for(let E=0;E<U;E++)for(let O=0;O<2*(U-E)-1;O++){const R=Math.floor(O/2);O%2===0?(v(F[E][R+1]),v(F[E+1][R]),v(F[E][R])):(v(F[E][R+1]),v(F[E+1][R+1]),v(F[E+1][R]))}}function m(N){const G=new j;for(let w=0;w<c.length;w+=3)G.x=c[w+0],G.y=c[w+1],G.z=c[w+2],G.normalize().multiplyScalar(N),c[w+0]=G.x,c[w+1]=G.y,c[w+2]=G.z}function S(){const N=new j;for(let G=0;G<c.length;G+=3){N.x=c[G+0],N.y=c[G+1],N.z=c[G+2];const w=M(N)/2/Math.PI+.5,L=x(N)/Math.PI+.5;d.push(w,1-L)}C(),_()}function _(){for(let N=0;N<d.length;N+=6){const G=d[N+0],w=d[N+2],L=d[N+4],U=Math.max(G,w,L),F=Math.min(G,w,L);U>.9&&F<.1&&(G<.2&&(d[N+0]+=1),w<.2&&(d[N+2]+=1),L<.2&&(d[N+4]+=1))}}function v(N){c.push(N.x,N.y,N.z)}function T(N,G){const w=N*3;G.x=e[w+0],G.y=e[w+1],G.z=e[w+2]}function C(){const N=new j,G=new j,w=new j,L=new j,U=new Re,F=new Re,E=new Re;for(let O=0,R=0;O<c.length;O+=9,R+=6){N.set(c[O+0],c[O+1],c[O+2]),G.set(c[O+3],c[O+4],c[O+5]),w.set(c[O+6],c[O+7],c[O+8]),U.set(d[R+0],d[R+1]),F.set(d[R+2],d[R+3]),E.set(d[R+4],d[R+5]),L.copy(N).add(G).add(w).divideScalar(3);const D=M(L);P(U,R+0,N,D),P(F,R+2,G,D),P(E,R+4,w,D)}}function P(N,G,w,L){L<0&&N.x===1&&(d[G]=N.x-1),w.x===0&&w.z===0&&(d[G]=L/2/Math.PI+.5)}function M(N){return Math.atan2(N.z,-N.x)}function x(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Am(e.vertices,e.indices,e.radius,e.detail)}}class Rm extends Am{constructor(e=1,i=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],u=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,u,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Rm(e.radius,e.detail)}}class Mr extends _i{constructor(e=1,i=1,r=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:u};const c=e/2,d=i/2,h=Math.floor(r),p=Math.floor(u),m=h+1,S=p+1,_=e/h,v=i/p,T=[],C=[],P=[],M=[];for(let x=0;x<S;x++){const N=x*v-d;for(let G=0;G<m;G++){const w=G*_-c;C.push(w,-N,0),P.push(0,0,1),M.push(G/h),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let N=0;N<h;N++){const G=N+m*x,w=N+m*(x+1),L=N+1+m*(x+1),U=N+1+m*x;T.push(G,w,U),T.push(w,L,U)}this.setIndex(T),this.setAttribute("position",new Rn(C,3)),this.setAttribute("normal",new Rn(P,3)),this.setAttribute("uv",new Rn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.widthSegments,e.heightSegments)}}function fo(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const u=o[i][r];if(mS(u))u.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=u.clone();else if(Array.isArray(u))if(mS(u[0])){const c=[];for(let d=0,h=u.length;d<h;d++)c[d]=u[d].clone();e[i][r]=c}else e[i][r]=u.slice();else e[i][r]=u}}return e}function Zn(o){const e={};for(let i=0;i<o.length;i++){const r=fo(o[i]);for(const u in r)e[u]=r[u]}return e}function mS(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function c1(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Zx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pe.workingColorSpace}const f1={clone:fo,merge:Zn};var d1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class da extends Nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d1,this.fragmentShader=h1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=c1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const u in this.uniforms){const d=this.uniforms[u].value;d&&d.isTexture?i.uniforms[u]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[u]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[u]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[u]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[u]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[u]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[u]={type:"m4",value:d.toArray()}:i.uniforms[u]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const u in this.extensions)this.extensions[u]===!0&&(r[u]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const u=e.uniforms[r];switch(this.uniforms[r]={},u.type){case"t":this.uniforms[r].value=i[u.value]||null;break;case"c":this.uniforms[r].value=new Fe().setHex(u.value);break;case"v2":this.uniforms[r].value=new Re().fromArray(u.value);break;case"v3":this.uniforms[r].value=new j().fromArray(u.value);break;case"v4":this.uniforms[r].value=new ln().fromArray(u.value);break;case"m3":this.uniforms[r].value=new ge().fromArray(u.value);break;case"m4":this.uniforms[r].value=new nn().fromArray(u.value);break;default:this.uniforms[r].value=u.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class p1 extends da{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vc extends Nl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zp,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class m1 extends Nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class g1 extends Nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Cm extends Pn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=i}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class Xc extends Cm{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const tp=new nn,gS=new j,_S=new j;class _1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bm,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera;gS.setFromMatrixPosition(e.matrixWorld),i.position.copy(gS),_S.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(_S),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(e,i,r,u){tp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(tp,e.coordinateSystem,e.reversedDepth);const c=this._frameExtents,d=u?u.z/c.x:1,h=u?u.w/c.y:1,p=u?u.x/c.x:0,m=u?u.y/c.y:0;e.coordinateSystem===Al||e.reversedDepth?i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,1,0,0,0,0,1):i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,.5,.5,0,0,0,1),i.multiply(tp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Mc=new j,yc=new rn,aa=new j;class Kx extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=la,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Mc,yc,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mc,yc,aa.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Mc,yc,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mc,yc,aa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _r=new j,vS=new Re,SS=new Re;class Kn extends Kx{constructor(e=50,i=1,r=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=u,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Kp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kp*2*Math.atan(Math.tan(Uh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,i){return this.getViewBounds(e,vS,SS),i.subVectors(SS,vS)}setViewOffset(e,i,r,u,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=u,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Uh*.5*this.fov)/this.zoom,r=2*i,u=this.aspect*r,c=-.5*u;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*u/p,i-=d.offsetY*r/m,u*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+u,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class wm extends Kx{constructor(e=-1,i=1,r=1,u=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=u,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,u,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=u,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let c=r-e,d=r+e,h=u+i,p=u-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,h-=S*this.view.offsetY,p=h-S*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class v1 extends _1{constructor(){super(new wm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kc extends Cm{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new v1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class qc extends Cm{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const js=-90,$s=1;class S1 extends Pn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new Kn(js,$s,e,i);u.layers=this.layers,this.add(u);const c=new Kn(js,$s,e,i);c.layers=this.layers,this.add(c);const d=new Kn(js,$s,e,i);d.layers=this.layers,this.add(d);const h=new Kn(js,$s,e,i);h.layers=this.layers,this.add(h);const p=new Kn(js,$s,e,i);p.layers=this.layers,this.add(p);const m=new Kn(js,$s,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,u,c,d,h,p]=i;for(const m of i)this.remove(m);if(e===la)r.up.set(0,1,0),r.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Al)r.up.set(0,-1,0),r.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,p,m,S]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),T=e.getActiveMipmapLevel(),C=e.xr.enabled;e.xr.enabled=!1;const P=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,4,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),r.texture.generateMipmaps=P,e.setRenderTarget(r,5,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(_,v,T),e.xr.enabled=C,r.texture.needsPMREMUpdate=!0}}class x1 extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Om=class Om{constructor(e,i,r,u){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,u)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,u){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=u,this}};Om.prototype.isMatrix2=!0;let xS=Om;function MS(o,e,i,r){const u=M1(r);switch(i){case zx:return o*e;case Bx:return o*e/u.components*u.byteLength;case vm:return o*e/u.components*u.byteLength;case $r:return o*e*2/u.components*u.byteLength;case Sm:return o*e*2/u.components*u.byteLength;case Fx:return o*e*3/u.components*u.byteLength;case Hi:return o*e*4/u.components*u.byteLength;case xm:return o*e*4/u.components*u.byteLength;case Rc:case Cc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case wc:case Dc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Sp:case Mp:return Math.max(o,16)*Math.max(e,8)/4;case vp:case xp:return Math.max(o,8)*Math.max(e,8)/2;case yp:case Ep:case bp:case Ap:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Tp:case Uc:case Rp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Cp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case wp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Dp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Np:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Up:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Lp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Op:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Pp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ip:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case zp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Fp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Bp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Hp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Gp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Vp:case Xp:case kp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case qp:case Wp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Lc:case Yp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function M1(o){switch(o){case gi:case Lx:return{byteLength:1,components:1};case Tl:case Ox:case fa:return{byteLength:2,components:1};case gm:case _m:return{byteLength:2,components:4};case ca:case mm:case oa:return{byteLength:4,components:1};case Px:case Ix:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pm}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pm);function Qx(){let o=null,e=!1,i=null,r=null;function u(c,d){r=o.requestAnimationFrame(u),i(c,d)}return{start:function(){e!==!0&&i!==null&&o!==null&&(r=o.requestAnimationFrame(u),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function y1(o){const e=new WeakMap;function i(h,p){const m=h.array,S=h.usage,_=m.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,m,S),h.onUploadCallback();let T;if(m instanceof Float32Array)T=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)T=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?T=o.HALF_FLOAT:T=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)T=o.SHORT;else if(m instanceof Uint32Array)T=o.UNSIGNED_INT;else if(m instanceof Int32Array)T=o.INT;else if(m instanceof Int8Array)T=o.BYTE;else if(m instanceof Uint8Array)T=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)T=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:T,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,p,m){const S=p.array,_=p.updateRanges;if(o.bindBuffer(m,h),_.length===0)o.bufferSubData(m,0,S);else{_.sort((T,C)=>T.start-C.start);let v=0;for(let T=1;T<_.length;T++){const C=_[v],P=_[T];P.start<=C.start+C.count+1?C.count=Math.max(C.count,P.start+P.count-C.start):(++v,_[v]=P)}_.length=v+1;for(let T=0,C=_.length;T<C;T++){const P=_[T];o.bufferSubData(m,P.start*S.BYTES_PER_ELEMENT,S,P.start,P.count)}p.clearUpdateRanges()}p.onUploadCallback()}function u(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=e.get(h);(!S||S.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:u,remove:c,update:d}}var E1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T1=`#ifdef USE_ALPHAHASH
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
#endif`,b1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w1=`#ifdef USE_AOMAP
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
#endif`,D1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N1=`#ifdef USE_BATCHING
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
#endif`,U1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,I1=`#ifdef USE_IRIDESCENCE
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
#endif`,z1=`#ifdef USE_BUMPMAP
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
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,X1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,k1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,q1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
} // validated`,Y1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Z1=`vec3 transformedNormal = objectNormal;
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
#endif`,K1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$1="gl_FragColor = linearToOutputTexel( gl_FragColor );",tb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eb=`#ifdef USE_ENVMAP
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
#endif`,nb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
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
#endif`,ab=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rb=`#ifdef USE_ENVMAP
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
#endif`,sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ob=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ub=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cb=`#ifdef USE_GRADIENTMAP
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
}`,fb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,db=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mb=`#ifdef USE_ENVMAP
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
#endif`,gb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xb=`PhysicalMaterial material;
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
#endif`,Mb=`uniform sampler2D dfgLUT;
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
}`,yb=`
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
#endif`,Eb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Db=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ub=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lb=`#if defined( USE_POINTS_UV )
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
#endif`,Ob=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ib=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bb=`#ifdef USE_MORPHTARGETS
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
#endif`,Hb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qb=`#ifndef FLAT_SHADED
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
#endif`,Yb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$b=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lA=`float getShadowMask() {
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
}`,uA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cA=`#ifdef USE_SKINNING
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
#endif`,fA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dA=`#ifdef USE_SKINNING
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
#endif`,hA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_A=`#ifdef USE_TRANSMISSION
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
#endif`,vA=`#ifdef USE_TRANSMISSION
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
#endif`,SA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TA=`uniform sampler2D t2D;
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
}`,bA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,RA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wA=`#include <common>
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
}`,DA=`#if DEPTH_PACKING == 3200
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
}`,NA=`#define DISTANCE
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
}`,UA=`#define DISTANCE
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
}`,LA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PA=`uniform float scale;
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
}`,IA=`uniform vec3 diffuse;
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
}`,zA=`#include <common>
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
}`,FA=`uniform vec3 diffuse;
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
}`,BA=`#define LAMBERT
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
}`,HA=`#define LAMBERT
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
}`,GA=`#define MATCAP
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
}`,VA=`#define MATCAP
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
}`,XA=`#define NORMAL
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
}`,kA=`#define NORMAL
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
}`,qA=`#define PHONG
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
}`,YA=`#define STANDARD
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
}`,ZA=`#define STANDARD
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
}`,KA=`#define TOON
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
}`,QA=`#define TOON
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
}`,JA=`uniform float size;
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
}`,jA=`uniform vec3 diffuse;
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
}`,$A=`#include <common>
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
}`,tR=`uniform vec3 color;
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
}`,eR=`uniform float rotation;
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
}`,nR=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:E1,alphahash_pars_fragment:T1,alphamap_fragment:b1,alphamap_pars_fragment:A1,alphatest_fragment:R1,alphatest_pars_fragment:C1,aomap_fragment:w1,aomap_pars_fragment:D1,batching_pars_vertex:N1,batching_vertex:U1,begin_vertex:L1,beginnormal_vertex:O1,bsdfs:P1,iridescence_fragment:I1,bumpmap_pars_fragment:z1,clipping_planes_fragment:F1,clipping_planes_pars_fragment:B1,clipping_planes_pars_vertex:H1,clipping_planes_vertex:G1,color_fragment:V1,color_pars_fragment:X1,color_pars_vertex:k1,color_vertex:q1,common:W1,cube_uv_reflection_fragment:Y1,defaultnormal_vertex:Z1,displacementmap_pars_vertex:K1,displacementmap_vertex:Q1,emissivemap_fragment:J1,emissivemap_pars_fragment:j1,colorspace_fragment:$1,colorspace_pars_fragment:tb,envmap_fragment:eb,envmap_common_pars_fragment:nb,envmap_pars_fragment:ib,envmap_pars_vertex:ab,envmap_physical_pars_fragment:mb,envmap_vertex:rb,fog_vertex:sb,fog_pars_vertex:ob,fog_fragment:lb,fog_pars_fragment:ub,gradientmap_pars_fragment:cb,lightmap_pars_fragment:fb,lights_lambert_fragment:db,lights_lambert_pars_fragment:hb,lights_pars_begin:pb,lights_toon_fragment:gb,lights_toon_pars_fragment:_b,lights_phong_fragment:vb,lights_phong_pars_fragment:Sb,lights_physical_fragment:xb,lights_physical_pars_fragment:Mb,lights_fragment_begin:yb,lights_fragment_maps:Eb,lights_fragment_end:Tb,lightprobes_pars_fragment:bb,logdepthbuf_fragment:Ab,logdepthbuf_pars_fragment:Rb,logdepthbuf_pars_vertex:Cb,logdepthbuf_vertex:wb,map_fragment:Db,map_pars_fragment:Nb,map_particle_fragment:Ub,map_particle_pars_fragment:Lb,metalnessmap_fragment:Ob,metalnessmap_pars_fragment:Pb,morphinstance_vertex:Ib,morphcolor_vertex:zb,morphnormal_vertex:Fb,morphtarget_pars_vertex:Bb,morphtarget_vertex:Hb,normal_fragment_begin:Gb,normal_fragment_maps:Vb,normal_pars_fragment:Xb,normal_pars_vertex:kb,normal_vertex:qb,normalmap_pars_fragment:Wb,clearcoat_normal_fragment_begin:Yb,clearcoat_normal_fragment_maps:Zb,clearcoat_pars_fragment:Kb,iridescence_pars_fragment:Qb,opaque_fragment:Jb,packing:jb,premultiplied_alpha_fragment:$b,project_vertex:tA,dithering_fragment:eA,dithering_pars_fragment:nA,roughnessmap_fragment:iA,roughnessmap_pars_fragment:aA,shadowmap_pars_fragment:rA,shadowmap_pars_vertex:sA,shadowmap_vertex:oA,shadowmask_pars_fragment:lA,skinbase_vertex:uA,skinning_pars_vertex:cA,skinning_vertex:fA,skinnormal_vertex:dA,specularmap_fragment:hA,specularmap_pars_fragment:pA,tonemapping_fragment:mA,tonemapping_pars_fragment:gA,transmission_fragment:_A,transmission_pars_fragment:vA,uv_pars_fragment:SA,uv_pars_vertex:xA,uv_vertex:MA,worldpos_vertex:yA,background_vert:EA,background_frag:TA,backgroundCube_vert:bA,backgroundCube_frag:AA,cube_vert:RA,cube_frag:CA,depth_vert:wA,depth_frag:DA,distance_vert:NA,distance_frag:UA,equirect_vert:LA,equirect_frag:OA,linedashed_vert:PA,linedashed_frag:IA,meshbasic_vert:zA,meshbasic_frag:FA,meshlambert_vert:BA,meshlambert_frag:HA,meshmatcap_vert:GA,meshmatcap_frag:VA,meshnormal_vert:XA,meshnormal_frag:kA,meshphong_vert:qA,meshphong_frag:WA,meshphysical_vert:YA,meshphysical_frag:ZA,meshtoon_vert:KA,meshtoon_frag:QA,points_vert:JA,points_frag:jA,shadow_vert:$A,shadow_frag:tR,sprite_vert:eR,sprite_frag:nR},Xt={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},sa={basic:{uniforms:Zn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Zn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Zn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Zn([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Zn([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new Fe(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Zn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Zn([Xt.points,Xt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Zn([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Zn([Xt.common,Xt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Zn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Zn([Xt.sprite,Xt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:Zn([Xt.common,Xt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:Zn([Xt.lights,Xt.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};sa.physical={uniforms:Zn([sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const Ec={r:0,b:0,g:0},iR=new nn,Jx=new ge;Jx.set(-1,0,0,0,1,0,0,0,1);function aR(o,e,i,r,u,c){const d=new Fe(0);let h=u===!0?0:1,p,m,S=null,_=0,v=null;function T(N){let G=N.isScene===!0?N.background:null;if(G&&G.isTexture){const w=N.backgroundBlurriness>0;G=e.get(G,w)}return G}function C(N){let G=!1;const w=T(N);w===null?M(d,h):w&&w.isColor&&(M(w,1),G=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,c):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||G)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function P(N,G){const w=T(G);w&&(w.isCubeTexture||w.mapping===Bc)?(m===void 0&&(m=new In(new Ul(1,1,1),new da({name:"BackgroundCubeMaterial",uniforms:fo(sa.backgroundCube.uniforms),vertexShader:sa.backgroundCube.vertexShader,fragmentShader:sa.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(L,U,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=w,m.material.uniforms.backgroundBlurriness.value=G.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(iR.makeRotationFromEuler(G.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Jx),m.material.toneMapped=Pe.getTransfer(w.colorSpace)!==Ze,(S!==w||_!==w.version||v!==o.toneMapping)&&(m.material.needsUpdate=!0,S=w,_=w.version,v=o.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new In(new Mr(2,2),new da({name:"BackgroundMaterial",uniforms:fo(sa.background.uniforms),vertexShader:sa.background.vertexShader,fragmentShader:sa.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,p.material.toneMapped=Pe.getTransfer(w.colorSpace)!==Ze,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(S!==w||_!==w.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,S=w,_=w.version,v=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function M(N,G){N.getRGB(Ec,Zx(o)),i.buffers.color.setClear(Ec.r,Ec.g,Ec.b,G,c)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,G=1){d.set(N),h=G,M(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,M(d,h)},render:C,addToRenderList:P,dispose:x}}function rR(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},u=v(null);let c=u,d=!1;function h(D,I,k,H,Q){let q=!1;const W=_(D,H,k,I);c!==W&&(c=W,m(c.object)),q=T(D,H,k,Q),q&&C(D,H,k,Q),Q!==null&&e.update(Q,o.ELEMENT_ARRAY_BUFFER),(q||d)&&(d=!1,w(D,I,k,H),Q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function p(){return o.createVertexArray()}function m(D){return o.bindVertexArray(D)}function S(D){return o.deleteVertexArray(D)}function _(D,I,k,H){const Q=H.wireframe===!0;let q=r[I.id];q===void 0&&(q={},r[I.id]=q);const W=D.isInstancedMesh===!0?D.id:0;let tt=q[W];tt===void 0&&(tt={},q[W]=tt);let it=tt[k.id];it===void 0&&(it={},tt[k.id]=it);let pt=it[Q];return pt===void 0&&(pt=v(p()),it[Q]=pt),pt}function v(D){const I=[],k=[],H=[];for(let Q=0;Q<i;Q++)I[Q]=0,k[Q]=0,H[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:H,object:D,attributes:{},index:null}}function T(D,I,k,H){const Q=c.attributes,q=I.attributes;let W=0;const tt=k.getAttributes();for(const it in tt)if(tt[it].location>=0){const xt=Q[it];let Bt=q[it];if(Bt===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(Bt=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(Bt=D.instanceColor)),xt===void 0||xt.attribute!==Bt||Bt&&xt.data!==Bt.data)return!0;W++}return c.attributesNum!==W||c.index!==H}function C(D,I,k,H){const Q={},q=I.attributes;let W=0;const tt=k.getAttributes();for(const it in tt)if(tt[it].location>=0){let xt=q[it];xt===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor));const Bt={};Bt.attribute=xt,xt&&xt.data&&(Bt.data=xt.data),Q[it]=Bt,W++}c.attributes=Q,c.attributesNum=W,c.index=H}function P(){const D=c.newAttributes;for(let I=0,k=D.length;I<k;I++)D[I]=0}function M(D){x(D,0)}function x(D,I){const k=c.newAttributes,H=c.enabledAttributes,Q=c.attributeDivisors;k[D]=1,H[D]===0&&(o.enableVertexAttribArray(D),H[D]=1),Q[D]!==I&&(o.vertexAttribDivisor(D,I),Q[D]=I)}function N(){const D=c.newAttributes,I=c.enabledAttributes;for(let k=0,H=I.length;k<H;k++)I[k]!==D[k]&&(o.disableVertexAttribArray(k),I[k]=0)}function G(D,I,k,H,Q,q,W){W===!0?o.vertexAttribIPointer(D,I,k,Q,q):o.vertexAttribPointer(D,I,k,H,Q,q)}function w(D,I,k,H){P();const Q=H.attributes,q=k.getAttributes(),W=I.defaultAttributeValues;for(const tt in q){const it=q[tt];if(it.location>=0){let pt=Q[tt];if(pt===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(pt=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(pt=D.instanceColor)),pt!==void 0){const xt=pt.normalized,Bt=pt.itemSize,Dt=e.get(pt);if(Dt===void 0)continue;const V=Dt.buffer,mt=Dt.type,vt=Dt.bytesPerElement,X=mt===o.INT||mt===o.UNSIGNED_INT||pt.gpuType===mm;if(pt.isInterleavedBufferAttribute){const rt=pt.data,St=rt.stride,Ct=pt.offset;if(rt.isInstancedInterleavedBuffer){for(let ft=0;ft<it.locationSize;ft++)x(it.location+ft,rt.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ft=0;ft<it.locationSize;ft++)M(it.location+ft);o.bindBuffer(o.ARRAY_BUFFER,V);for(let ft=0;ft<it.locationSize;ft++)G(it.location+ft,Bt/it.locationSize,mt,xt,St*vt,(Ct+Bt/it.locationSize*ft)*vt,X)}else{if(pt.isInstancedBufferAttribute){for(let rt=0;rt<it.locationSize;rt++)x(it.location+rt,pt.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let rt=0;rt<it.locationSize;rt++)M(it.location+rt);o.bindBuffer(o.ARRAY_BUFFER,V);for(let rt=0;rt<it.locationSize;rt++)G(it.location+rt,Bt/it.locationSize,mt,xt,Bt*vt,Bt/it.locationSize*rt*vt,X)}}else if(W!==void 0){const xt=W[tt];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(it.location,xt);break;case 3:o.vertexAttrib3fv(it.location,xt);break;case 4:o.vertexAttrib4fv(it.location,xt);break;default:o.vertexAttrib1fv(it.location,xt)}}}}N()}function L(){O();for(const D in r){const I=r[D];for(const k in I){const H=I[k];for(const Q in H){const q=H[Q];for(const W in q)S(q[W].object),delete q[W];delete H[Q]}}delete r[D]}}function U(D){if(r[D.id]===void 0)return;const I=r[D.id];for(const k in I){const H=I[k];for(const Q in H){const q=H[Q];for(const W in q)S(q[W].object),delete q[W];delete H[Q]}}delete r[D.id]}function F(D){for(const I in r){const k=r[I];for(const H in k){const Q=k[H];if(Q[D.id]===void 0)continue;const q=Q[D.id];for(const W in q)S(q[W].object),delete q[W];delete Q[D.id]}}}function E(D){for(const I in r){const k=r[I],H=D.isInstancedMesh===!0?D.id:0,Q=k[H];if(Q!==void 0){for(const q in Q){const W=Q[q];for(const tt in W)S(W[tt].object),delete W[tt];delete Q[q]}delete k[H],Object.keys(k).length===0&&delete r[I]}}}function O(){R(),d=!0,c!==u&&(c=u,m(c.object))}function R(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:O,resetDefaultState:R,dispose:L,releaseStatesOfGeometry:U,releaseStatesOfObject:E,releaseStatesOfProgram:F,initAttributes:P,enableAttribute:M,disableUnusedAttributes:N}}function sR(o,e,i){let r;function u(p){r=p}function c(p,m){o.drawArrays(r,p,m),i.update(m,r,1)}function d(p,m,S){S!==0&&(o.drawArraysInstanced(r,p,m,S),i.update(m,r,S))}function h(p,m,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,S);let v=0;for(let T=0;T<S;T++)v+=m[T];i.update(v,r,1)}this.setMode=u,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function oR(o,e,i,r){let u;function c(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function d(F){return!(F!==Hi&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const E=F===fa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==gi&&F!==oa&&!E&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const S=p(m);S!==m&&(de("WebGLRenderer:",m,"not supported, using",S,"instead."),m=S);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&de("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const T=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),G=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=o.getParameter(o.MAX_SAMPLES),U=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:T,maxVertexTextures:C,maxTextureSize:P,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:N,maxVaryings:G,maxFragmentUniforms:w,maxSamples:L,samples:U}}function lR(o){const e=this;let i=null,r=0,u=!1,c=!1;const d=new Sr,h=new ge,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const T=_.length!==0||v||r!==0||u;return u=v,r=_.length,T},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=S(_,v,0)},this.setState=function(_,v,T){const C=_.clippingPlanes,P=_.clipIntersection,M=_.clipShadows,x=o.get(_);if(!u||C===null||C.length===0||c&&!M)c?S(null):m();else{const N=c?0:r,G=N*4;let w=x.clippingState||null;p.value=w,w=S(C,v,G,T);for(let L=0;L!==G;++L)w[L]=i[L];x.clippingState=w,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(_,v,T,C){const P=_!==null?_.length:0;let M=null;if(P!==0){if(M=p.value,C!==!0||M===null){const x=T+P*4,N=v.matrixWorldInverse;h.getNormalMatrix(N),(M===null||M.length<x)&&(M=new Float32Array(x));for(let G=0,w=T;G!==P;++G,w+=4)d.copy(_[G]).applyMatrix4(N,h),d.normal.toArray(M,w),M[w+3]=d.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,M}}const no=4,uR=6,cR=20,fR=256,_l=new wm,yS=new Fe;let ep=null,np=0,ip=0,ap=!1;const dR=new j,Kr=new j;class ES{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,u=100,c={}){const{size:d=256,position:h=dR}=c;ep=this._renderer.getRenderTarget(),np=this._renderer.getActiveCubeFace(),ip=this._renderer.getActiveMipmapLevel(),ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,u,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=AS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ep,np,ip),this._renderer.xr.enabled=ap,e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===jr||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ep=this._renderer.getRenderTarget(),np=this._renderer.getActiveCubeFace(),ip=this._renderer.getActiveMipmapLevel(),ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:fa,format:Hi,colorSpace:Oc,depthBuffer:!1},u=TS(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=TS(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hR(c)),this._blurMaterial=mR(c,e,i),this._ggxMaterial=pR(c,e,i)}return u}_compileMaterial(e){const i=new In(new _i,e);this._renderer.compile(i,_l)}_sceneToCubeUV(e,i,r,u,c){const p=new Kn(90,1,i,r),m=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,T=_.toneMapping;_.getClearColor(yS),_.toneMapping=ua,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(u),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new In(new Ul,new ho({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const P=this._backgroundBox,M=P.material;let x=!1;const N=e.background;N?N.isColor&&(M.color.copy(N),e.background=null,x=!0):(M.color.copy(yS),x=!0);for(let G=0;G<6;G++){const w=G%3;w===0?(p.up.set(0,m[G],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+S[G],c.y,c.z)):w===1?(p.up.set(0,0,m[G]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+S[G],c.z)):(p.up.set(0,m[G],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+S[G]));const L=this._cubeSize;to(u,w*L,G>2?L:0,L,L),_.setRenderTarget(u),x&&_.render(P,p),_.render(e,p)}_.toneMapping=T,_.autoClear=v,e.background=N}_textureToCubeUV(e,i){const r=this._renderer,u=e.mapping===jr||e.mapping===co;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=AS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bS());const c=u?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;to(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,_l)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const u=this._lodMeshes.length;for(let c=1;c<u;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const u=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),_=Math.sqrt(m*m-S*S),v=m*1.25,T=_*v,{_lodMax:C}=this,P=this._sizeLods[r],M=3*P*(r>C-no?r-C+no:0),x=4*(this._cubeSize-P);p.envMap.value=e.texture,p.roughness.value=T,p.mipInt.value=C-i,to(c,M,x,3*P,2*P),u.setRenderTarget(c),u.render(h,_l),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=C-r,to(e,M,x,3*P,2*P),u.setRenderTarget(e),u.render(h,_l)}_blur(e,i,r,u){const c=this._pingPongRenderTarget,d=Math.min(u,Math.PI)/Math.SQRT2;this._blurPass(e,c,i,r,d),this._blurPass(c,e,r,r,d)}_blurPass(e,i,r,u,c){const d=this._renderer,h=this._blurMaterial,p=this._lodMeshes[u];p.material=h;const m=h.uniforms;m.envMap.value=e.texture,m.sigma.value=c,m.mipInt.value=this._lodMax-r;const S=this._sizeLods[u],_=3*S*(u>this._lodMax-no?u-this._lodMax+no:0),v=4*(this._cubeSize-S);to(i,_,v,3*S,2*S),d.setRenderTarget(i),d.render(p,_l)}}function hR(o){const e=[],i=[];let r=o;const u=o-no+1+uR;for(let c=0;c<u;c++){const d=Math.pow(2,r);e.push(d);const h=1/(d-2),p=-h,m=1+h,S=[p,p,m,p,m,m,p,p,m,m,p,m],_=6,v=6,T=3,C=new Float32Array(T*v*_),P=new Float32Array(T*v*_);for(let x=0;x<_;x++){const N=x%3*2/3-1,G=x>2?0:-1,w=[N,G,0,N+2/3,G,0,N+2/3,G+1,0,N,G,0,N+2/3,G+1,0,N,G+1,0];C.set(w,T*v*x);for(let L=0;L<v;L++){const U=S[L*2]*2-1,F=S[L*2+1]*2-1;x===0?Kr.set(1,F,U):x===1?Kr.set(-U,1,-F):x===2?Kr.set(-U,F,1):x===3?Kr.set(-1,F,-U):x===4?Kr.set(-U,-1,F):Kr.set(U,F,-1),Kr.toArray(P,(x*v+L)*T)}}const M=new _i;M.setAttribute("position",new za(C,T)),M.setAttribute("outputDirection",new za(P,T)),i.push(new In(M,null)),r>no&&r--}return{lodMeshes:i,sizeLods:e}}function TS(o,e,i){const r=new Gi(o,e,i);return r.texture.mapping=Bc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function to(o,e,i,r,u){o.viewport.set(e,i,r,u),o.scissor.set(e,i,r,u)}function pR(o,e,i){return new da({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function mR(o,e,i){return new da({name:"SphericalGaussianBlur",defines:{SAMPLES:cR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function bS(){return new da({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function AS(){return new da({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function Wc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class jx extends Gi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},u=[r,r,r,r,r,r];this.texture=new Wx(u),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new Ul(5,5,5),c=new da({name:"CubemapFromEquirect",uniforms:fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ni,blending:Pa});c.uniforms.tEquirect.value=i;const d=new In(u,c),h=i.minFilter;return i.minFilter===Qr&&(i.minFilter=Gn),new S1(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,u=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,u);e.setRenderTarget(c)}}function gR(o){let e=new WeakMap,i=new WeakMap,r=null;function u(v,T=!1){return v==null?null:T?d(v):c(v)}function c(v){if(v&&v.isTexture){const T=v.mapping;if(T===Ch||T===wh)if(e.has(v)){const C=e.get(v).texture;return h(C,v.mapping)}else{const C=v.image;if(C&&C.height>0){const P=new jx(C.height);return P.fromEquirectangularTexture(o,v),e.set(v,P),v.addEventListener("dispose",m),h(P.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const T=v.mapping,C=T===Ch||T===wh,P=T===jr||T===co;if(C||P){let M=i.get(v);const x=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return r===null&&(r=new ES(o)),M=C?r.fromEquirectangular(v,M):r.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),M.texture;if(M!==void 0)return M.texture;{const N=v.image;return C&&N&&N.height>0||P&&N&&p(N)?(r===null&&(r=new ES(o)),M=C?r.fromEquirectangular(v):r.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),v.addEventListener("dispose",S),M.texture):null}}}return v}function h(v,T){return T===Ch?v.mapping=jr:T===wh&&(v.mapping=co),v}function p(v){let T=0;const C=6;for(let P=0;P<C;P++)v[P]!==void 0&&T++;return T===C}function m(v){const T=v.target;T.removeEventListener("dispose",m);const C=e.get(T);C!==void 0&&(e.delete(T),C.dispose())}function S(v){const T=v.target;T.removeEventListener("dispose",S);const C=i.get(T);C!==void 0&&(i.delete(T),C.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:u,dispose:_}}function _R(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const u=o.getExtension(r);return e[r]=u,u}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const u=i(r);return u===null&&io("WebGLRenderer: "+r+" extension not supported."),u}}}function vR(o,e,i,r){const u={},c=new WeakMap;function d(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const C in v.attributes)e.remove(v.attributes[C]);v.removeEventListener("dispose",d),delete u[v.id];const T=c.get(v);T&&(e.remove(T),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return u[v.id]===!0||(v.addEventListener("dispose",d),u[v.id]=!0,i.memory.geometries++),v}function p(_){const v=_.attributes;for(const T in v)e.update(v[T],o.ARRAY_BUFFER)}function m(_){const v=[],T=_.index,C=_.attributes.position;let P=0;if(C===void 0)return;if(T!==null){const N=T.array;P=T.version;for(let G=0,w=N.length;G<w;G+=3){const L=N[G+0],U=N[G+1],F=N[G+2];v.push(L,U,U,F,F,L)}}else{const N=C.array;P=C.version;for(let G=0,w=N.length/3-1;G<w;G+=3){const L=G+0,U=G+1,F=G+2;v.push(L,U,U,F,F,L)}}const M=new(C.count>=65535?qx:kx)(v,1);M.version=P;const x=c.get(_);x&&e.remove(x),c.set(_,M)}function S(_){const v=c.get(_);if(v){const T=_.index;T!==null&&v.version<T.version&&m(_)}else m(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:S}}function SR(o,e,i){let r;function u(_){r=_}let c,d;function h(_){c=_.type,d=_.bytesPerElement}function p(_,v){o.drawElements(r,v,c,_*d),i.update(v,r,1)}function m(_,v,T){T!==0&&(o.drawElementsInstanced(r,v,c,_*d,T),i.update(v,r,T))}function S(_,v,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,_,0,T);let P=0;for(let M=0;M<T;M++)P+=v[M];i.update(P,r,1)}this.setMode=u,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=S}function xR(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:He("WebGLInfo: Unknown draw mode:",d);break}}function u(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:u,update:r}}function MR(o,e,i){const r=new WeakMap,u=new ln;function c(d,h,p){const m=d.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=S!==void 0?S.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let R=function(){E.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var T=R;v!==void 0&&v.texture.dispose();const C=h.morphAttributes.position!==void 0,P=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],G=h.morphAttributes.color||[];let w=0;C===!0&&(w=1),P===!0&&(w=2),M===!0&&(w=3);let L=h.attributes.position.count*w,U=1;L>e.maxTextureSize&&(U=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const F=new Float32Array(L*U*4*_),E=new Gx(F,L,U,_);E.type=oa,E.needsUpdate=!0;const O=w*4;for(let D=0;D<_;D++){const I=x[D],k=N[D],H=G[D],Q=L*U*4*D;for(let q=0;q<I.count;q++){const W=q*O;C===!0&&(u.fromBufferAttribute(I,q),F[Q+W+0]=u.x,F[Q+W+1]=u.y,F[Q+W+2]=u.z,F[Q+W+3]=0),P===!0&&(u.fromBufferAttribute(k,q),F[Q+W+4]=u.x,F[Q+W+5]=u.y,F[Q+W+6]=u.z,F[Q+W+7]=0),M===!0&&(u.fromBufferAttribute(H,q),F[Q+W+8]=u.x,F[Q+W+9]=u.y,F[Q+W+10]=u.z,F[Q+W+11]=H.itemSize===4?u.w:1)}}v={count:_,texture:E,size:new Re(L,U)},r.set(h,v),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let C=0;for(let M=0;M<m.length;M++)C+=m[M];const P=h.morphTargetsRelative?1:1-C;p.getUniforms().setValue(o,"morphTargetBaseInfluence",P),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function yR(o,e,i,r,u){let c=new WeakMap;function d(m){const S=u.render.frame,_=m.geometry,v=e.get(m,_);if(c.get(v)!==S&&(e.update(v),c.set(v,S)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==S&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),c.set(m,S))),m.isSkinnedMesh){const T=m.skeleton;c.get(T)!==S&&(T.update(),c.set(T,S))}return v}function h(){c=new WeakMap}function p(m){const S=m.target;S.removeEventListener("dispose",p),r.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:h}}const ER={[bx]:"LINEAR_TONE_MAPPING",[Ax]:"REINHARD_TONE_MAPPING",[Rx]:"CINEON_TONE_MAPPING",[Cx]:"ACES_FILMIC_TONE_MAPPING",[Dx]:"AGX_TONE_MAPPING",[Nx]:"NEUTRAL_TONE_MAPPING",[wx]:"CUSTOM_TONE_MAPPING"};function TR(o,e,i,r,u,c){const d=new Gi(e,i,{type:o,depthBuffer:u,stencilBuffer:c,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null;const m=new _i;m.setAttribute("position",new Rn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Rn([0,2,0,0,2,0],2));const S=new p1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new In(m,S),v=new wm(-1,1,1,-1,0,1);let T=null,C=null,P=!1,M,x=null,N=[],G=!1;this.setSize=function(w,L){d.setSize(w,L),h!==null&&h.setSize(w,L),p!==null&&p.setSize(w,L);for(let U=0;U<N.length;U++){const F=N[U];F.setSize&&F.setSize(w,L)}},this.setEffects=function(w){N=w,G=N.length>0&&N[0].isRenderPass===!0;const L=d.width,U=d.height;N.length>0&&h===null&&(h=new Gi(L,U,{type:fa,depthBuffer:!1,stencilBuffer:!1}),p=new Gi(L,U,{type:fa,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<N.length;F++){const E=N[F];E.setSize&&E.setSize(L,U)}},this.begin=function(w,L){if(P||w.toneMapping===ua&&N.length===0)return!1;if(x=L,L!==null){const U=L.width,F=L.height;(d.width!==U||d.height!==F)&&this.setSize(U,F)}return G===!1&&w.setRenderTarget(d),M=w.toneMapping,w.toneMapping=ua,!0},this.hasRenderPass=function(){return G},this.end=function(w,L){w.toneMapping=M,P=!0;let U=d,F=h;for(let E=0;E<N.length;E++){const O=N[E];O.enabled!==!1&&(O.render(w,F,U,L),O.needsSwap!==!1&&(U=F,F=F===h?p:h))}if(T!==w.outputColorSpace||C!==w.toneMapping){T=w.outputColorSpace,C=w.toneMapping,S.defines={},Pe.getTransfer(T)===Ze&&(S.defines.SRGB_TRANSFER="");const E=ER[C];E&&(S.defines[E]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=U.texture,w.setRenderTarget(x),w.render(_,v),x=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),m.dispose(),S.dispose()}}const $x=new Vn,Qp=new Rl(1,1),tM=new Gx,eM=new qT,nM=new Wx,RS=[],CS=[],wS=new Float32Array(16),DS=new Float32Array(9),NS=new Float32Array(4);function po(o,e,i){const r=o[0];if(r<=0||r>0)return o;const u=e*i;let c=RS[u];if(c===void 0&&(c=new Float32Array(u),RS[u]=c),e!==0){r.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(c,h)}return c}function Mn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function yn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Yc(o,e){let i=CS[e];i===void 0&&(i=new Int32Array(e),CS[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function bR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function AR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2fv(this.addr,e),yn(i,e)}}function RR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Mn(i,e))return;o.uniform3fv(this.addr,e),yn(i,e)}}function CR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4fv(this.addr,e),yn(i,e)}}function wR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(Mn(i,r))return;NS.set(r),o.uniformMatrix2fv(this.addr,!1,NS),yn(i,r)}}function DR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(Mn(i,r))return;DS.set(r),o.uniformMatrix3fv(this.addr,!1,DS),yn(i,r)}}function NR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(Mn(i,r))return;wS.set(r),o.uniformMatrix4fv(this.addr,!1,wS),yn(i,r)}}function UR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function LR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2iv(this.addr,e),yn(i,e)}}function OR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;o.uniform3iv(this.addr,e),yn(i,e)}}function PR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4iv(this.addr,e),yn(i,e)}}function IR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function zR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2uiv(this.addr,e),yn(i,e)}}function FR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;o.uniform3uiv(this.addr,e),yn(i,e)}}function BR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4uiv(this.addr,e),yn(i,e)}}function HR(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u);let c;this.type===o.SAMPLER_2D_SHADOW?(Qp.compareFunction=i.isReversedDepthBuffer()?ym:Mm,c=Qp):c=$x,i.setTexture2D(e||c,u)}function GR(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u),i.setTexture3D(e||eM,u)}function VR(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u),i.setTextureCube(e||nM,u)}function XR(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u),i.setTexture2DArray(e||tM,u)}function kR(o){switch(o){case 5126:return bR;case 35664:return AR;case 35665:return RR;case 35666:return CR;case 35674:return wR;case 35675:return DR;case 35676:return NR;case 5124:case 35670:return UR;case 35667:case 35671:return LR;case 35668:case 35672:return OR;case 35669:case 35673:return PR;case 5125:return IR;case 36294:return zR;case 36295:return FR;case 36296:return BR;case 35678:case 36198:case 36298:case 36306:case 35682:return HR;case 35679:case 36299:case 36307:return GR;case 35680:case 36300:case 36308:case 36293:return VR;case 36289:case 36303:case 36311:case 36292:return XR}}function qR(o,e){o.uniform1fv(this.addr,e)}function WR(o,e){const i=po(e,this.size,2);o.uniform2fv(this.addr,i)}function YR(o,e){const i=po(e,this.size,3);o.uniform3fv(this.addr,i)}function ZR(o,e){const i=po(e,this.size,4);o.uniform4fv(this.addr,i)}function KR(o,e){const i=po(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function QR(o,e){const i=po(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function JR(o,e){const i=po(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function jR(o,e){o.uniform1iv(this.addr,e)}function $R(o,e){o.uniform2iv(this.addr,e)}function t3(o,e){o.uniform3iv(this.addr,e)}function e3(o,e){o.uniform4iv(this.addr,e)}function n3(o,e){o.uniform1uiv(this.addr,e)}function i3(o,e){o.uniform2uiv(this.addr,e)}function a3(o,e){o.uniform3uiv(this.addr,e)}function r3(o,e){o.uniform4uiv(this.addr,e)}function s3(o,e,i){const r=this.cache,u=e.length,c=Yc(i,u);Mn(r,c)||(o.uniform1iv(this.addr,c),yn(r,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=Qp:d=$x;for(let h=0;h!==u;++h)i.setTexture2D(e[h]||d,c[h])}function o3(o,e,i){const r=this.cache,u=e.length,c=Yc(i,u);Mn(r,c)||(o.uniform1iv(this.addr,c),yn(r,c));for(let d=0;d!==u;++d)i.setTexture3D(e[d]||eM,c[d])}function l3(o,e,i){const r=this.cache,u=e.length,c=Yc(i,u);Mn(r,c)||(o.uniform1iv(this.addr,c),yn(r,c));for(let d=0;d!==u;++d)i.setTextureCube(e[d]||nM,c[d])}function u3(o,e,i){const r=this.cache,u=e.length,c=Yc(i,u);Mn(r,c)||(o.uniform1iv(this.addr,c),yn(r,c));for(let d=0;d!==u;++d)i.setTexture2DArray(e[d]||tM,c[d])}function c3(o){switch(o){case 5126:return qR;case 35664:return WR;case 35665:return YR;case 35666:return ZR;case 35674:return KR;case 35675:return QR;case 35676:return JR;case 5124:case 35670:return jR;case 35667:case 35671:return $R;case 35668:case 35672:return t3;case 35669:case 35673:return e3;case 5125:return n3;case 36294:return i3;case 36295:return a3;case 36296:return r3;case 35678:case 36198:case 36298:case 36306:case 35682:return s3;case 35679:case 36299:case 36307:return o3;case 35680:case 36300:case 36308:case 36293:return l3;case 36289:case 36303:case 36311:case 36292:return u3}}class f3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=kR(i.type)}}class d3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=c3(i.type)}}class h3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const u=this.seq;for(let c=0,d=u.length;c!==d;++c){const h=u[c];h.setValue(e,i[h.id],r)}}}const rp=/(\w+)(\])?(\[|\.)?/g;function US(o,e){o.seq.push(e),o.map[e.id]=e}function p3(o,e,i){const r=o.name,u=r.length;for(rp.lastIndex=0;;){const c=rp.exec(r),d=rp.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===u){US(i,m===void 0?new f3(h,o,e):new d3(h,o,e));break}else{let _=i.map[h];_===void 0&&(_=new h3(h),US(i,_)),i=_}}}class Nc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=e.getActiveUniform(i,d),p=e.getUniformLocation(i,h.name);p3(h,p,this)}const u=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?u.push(d):c.push(d);u.length>0&&(this.seq=u.concat(c))}setValue(e,i,r,u){const c=this.map[i];c!==void 0&&c.setValue(e,r,u)}setOptional(e,i,r){const u=i[r];u!==void 0&&this.setValue(e,r,u)}static upload(e,i,r,u){for(let c=0,d=i.length;c!==d;++c){const h=i[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,u)}}static seqWithValue(e,i){const r=[];for(let u=0,c=e.length;u!==c;++u){const d=e[u];d.id in i&&r.push(d)}return r}}function LS(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const m3=37297;let g3=0;function _3(o,e){const i=o.split(`
`),r=[],u=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=u;d<c;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const OS=new ge;function v3(o){Pe._getMatrix(OS,Pe.workingColorSpace,o);const e=`mat3( ${OS.elements.map(i=>i.toFixed(4))} )`;switch(Pe.getTransfer(o)){case Pc:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function PS(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+_3(o.getShaderSource(e),h)}else return c}function S3(o,e){const i=v3(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const x3={[bx]:"Linear",[Ax]:"Reinhard",[Rx]:"Cineon",[Cx]:"ACESFilmic",[Dx]:"AgX",[Nx]:"Neutral",[wx]:"Custom"};function M3(o,e){const i=x3[e];return i===void 0?(de("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Tc=new j;function y3(){Pe.getLuminanceCoefficients(Tc);const o=Tc.x.toFixed(4),e=Tc.y.toFixed(4),i=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xl).join(`
`)}function T3(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function b3(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<r;u++){const c=o.getActiveAttrib(e,u),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function xl(o){return o!==""}function IS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const A3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jp(o){return o.replace(A3,C3)}const R3=new Map;function C3(o,e){let i=xe[e];if(i===void 0){const r=R3.get(e);if(r!==void 0)i=xe[r],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Jp(i)}const w3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function FS(o){return o.replace(w3,D3)}function D3(o,e,i,r){let u="";for(let c=parseInt(e);c<parseInt(i);c++)u+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return u}function BS(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const N3={[Ac]:"SHADOWMAP_TYPE_PCF",[Sl]:"SHADOWMAP_TYPE_VSM"};function U3(o){return N3[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const L3={[jr]:"ENVMAP_TYPE_CUBE",[co]:"ENVMAP_TYPE_CUBE",[Bc]:"ENVMAP_TYPE_CUBE_UV"};function O3(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":L3[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const P3={[co]:"ENVMAP_MODE_REFRACTION"};function I3(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":P3[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const z3={[Tx]:"ENVMAP_BLENDING_MULTIPLY",[yT]:"ENVMAP_BLENDING_MIX",[ET]:"ENVMAP_BLENDING_ADD"};function F3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":z3[o.combine]||"ENVMAP_BLENDING_NONE"}function B3(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function H3(o,e,i,r){const u=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=U3(i),m=O3(i),S=I3(i),_=F3(i),v=B3(i),T=E3(i),C=T3(c),P=u.createProgram();let M,x,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(xl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(xl).join(`
`),x.length>0&&(x+=`
`)):(M=[BS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xl).join(`
`),x=[BS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+S:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ua?"#define TONE_MAPPING":"",i.toneMapping!==ua?xe.tonemapping_pars_fragment:"",i.toneMapping!==ua?M3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,S3("linearToOutputTexel",i.outputColorSpace),y3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(xl).join(`
`)),d=Jp(d),d=IS(d,i),d=zS(d,i),h=Jp(h),h=IS(h,i),h=zS(h,i),d=FS(d),h=FS(h),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===jv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===jv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const G=N+M+d,w=N+x+h,L=LS(u,u.VERTEX_SHADER,G),U=LS(u,u.FRAGMENT_SHADER,w);u.attachShader(P,L),u.attachShader(P,U),i.index0AttributeName!==void 0?u.bindAttribLocation(P,0,i.index0AttributeName):i.hasPositionAttribute===!0&&u.bindAttribLocation(P,0,"position"),u.linkProgram(P);function F(D){if(o.debug.checkShaderErrors){const I=u.getProgramInfoLog(P)||"",k=u.getShaderInfoLog(L)||"",H=u.getShaderInfoLog(U)||"",Q=I.trim(),q=k.trim(),W=H.trim();let tt=!0,it=!0;if(u.getProgramParameter(P,u.LINK_STATUS)===!1)if(tt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,P,L,U);else{const pt=PS(u,L,"vertex"),xt=PS(u,U,"fragment");He("WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(P,u.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Q+`
`+pt+`
`+xt)}else Q!==""?de("WebGLProgram: Program Info Log:",Q):(q===""||W==="")&&(it=!1);it&&(D.diagnostics={runnable:tt,programLog:Q,vertexShader:{log:q,prefix:M},fragmentShader:{log:W,prefix:x}})}u.deleteShader(L),u.deleteShader(U),E=new Nc(u,P),O=b3(u,P)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let O;this.getAttributes=function(){return O===void 0&&F(this),O};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=u.getProgramParameter(P,m3)),R},this.destroy=function(){r.releaseStatesOfProgram(this),u.deleteProgram(P),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=g3++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=L,this.fragmentShader=U,this}let G3=0;class V3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const u=this._getShaderCacheForMaterial(e);return u.has(i)===!1&&(u.add(i),i.usedTimes++),u.has(r)===!1&&(u.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new X3(e),i.set(e,r)),r}}class X3{constructor(e){this.id=G3++,this.code=e,this.usedTimes=0}}function k3(o){return o===$r||o===Uc||o===Lc}function q3(o,e,i,r,u,c){const d=new Vx,h=new V3,p=new Set,m=[],S=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(E){return p.add(E),E===0?"uv":`uv${E}`}function P(E,O,R,D,I,k){const H=D.fog,Q=I.geometry,q=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?D.environment:null,W=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,tt=e.get(E.envMap||q,W),it=tt&&tt.mapping===Bc?tt.image.height:null,pt=T[E.type];E.precision!==null&&(v=r.getMaxPrecision(E.precision),v!==E.precision&&de("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const xt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Bt=xt!==void 0?xt.length:0;let Dt=0;Q.morphAttributes.position!==void 0&&(Dt=1),Q.morphAttributes.normal!==void 0&&(Dt=2),Q.morphAttributes.color!==void 0&&(Dt=3);let V,mt,vt,X;if(pt){const Le=sa[pt];V=Le.vertexShader,mt=Le.fragmentShader}else{V=E.vertexShader,mt=E.fragmentShader;const Le=h.getVertexShaderStage(E),pe=h.getFragmentShaderStage(E);h.update(E,Le,pe),vt=Le.id,X=pe.id}const rt=o.getRenderTarget(),St=o.state.buffers.depth.getReversed(),Ct=I.isInstancedMesh===!0,ft=I.isBatchedMesh===!0,Rt=!!E.map,le=!!E.matcap,re=!!tt,oe=!!E.aoMap,ne=!!E.lightMap,Ht=!!E.bumpMap&&E.wireframe===!1,ie=!!E.normalMap,Ne=!!E.displacementMap,je=!!E.emissiveMap,Ue=!!E.metalnessMap,Se=!!E.roughnessMap,Y=E.anisotropy>0,sn=E.clearcoat>0,Be=E.dispersion>0,z=E.retroreflectivity>0,y=E.iridescence>0,at=E.sheen>0,ct=E.transmission>0,gt=Y&&!!E.anisotropyMap,wt=sn&&!!E.clearcoatMap,Lt=sn&&!!E.clearcoatNormalMap,_t=sn&&!!E.clearcoatRoughnessMap,Tt=y&&!!E.iridescenceMap,Ut=y&&!!E.iridescenceThicknessMap,te=at&&!!E.sheenColorMap,Ft=at&&!!E.sheenRoughnessMap,zt=!!E.specularMap,Wt=!!E.specularColorMap,se=!!E.specularIntensityMap,he=ct&&!!E.transmissionMap,J=ct&&!!E.thicknessMap,Nt=!!E.gradientMap,Et=!!E.alphaMap,Ot=E.alphaTest>0,qt=!!E.alphaHash,At=!!E.extensions;let $t=ua;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&($t=o.toneMapping);const kt={shaderID:pt,shaderType:E.type,shaderName:E.name,vertexShader:V,fragmentShader:mt,defines:E.defines,customVertexShaderID:vt,customFragmentShaderID:X,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:ft,batchingColor:ft&&I._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&I.instanceColor!==null,instancingMorph:Ct&&I.morphTexture!==null,outputColorSpace:rt===null?o.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Pe.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Rt,matcap:le,envMap:re,envMapMode:re&&tt.mapping,envMapCubeUVHeight:it,aoMap:oe,lightMap:ne,bumpMap:Ht,normalMap:ie,displacementMap:Ne,emissiveMap:je,normalMapObjectSpace:ie&&E.normalMapType===AT,normalMapTangentSpace:ie&&E.normalMapType===Zp,packedNormalMap:ie&&E.normalMapType===Zp&&k3(E.normalMap.format),metalnessMap:Ue,roughnessMap:Se,anisotropy:Y,anisotropyMap:gt,clearcoat:sn,clearcoatMap:wt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:_t,dispersion:Be,retroreflection:z,iridescence:y,iridescenceMap:Tt,iridescenceThicknessMap:Ut,sheen:at,sheenColorMap:te,sheenRoughnessMap:Ft,specularMap:zt,specularColorMap:Wt,specularIntensityMap:se,transmission:ct,transmissionMap:he,thicknessMap:J,gradientMap:Nt,opaque:E.transparent===!1&&E.blending===Ml&&E.alphaToCoverage===!1,alphaMap:Et,alphaTest:Ot,alphaHash:qt,combine:E.combine,mapUv:Rt&&C(E.map.channel),aoMapUv:oe&&C(E.aoMap.channel),lightMapUv:ne&&C(E.lightMap.channel),bumpMapUv:Ht&&C(E.bumpMap.channel),normalMapUv:ie&&C(E.normalMap.channel),displacementMapUv:Ne&&C(E.displacementMap.channel),emissiveMapUv:je&&C(E.emissiveMap.channel),metalnessMapUv:Ue&&C(E.metalnessMap.channel),roughnessMapUv:Se&&C(E.roughnessMap.channel),anisotropyMapUv:gt&&C(E.anisotropyMap.channel),clearcoatMapUv:wt&&C(E.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&C(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&C(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&C(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&C(E.iridescenceThicknessMap.channel),sheenColorMapUv:te&&C(E.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&C(E.sheenRoughnessMap.channel),specularMapUv:zt&&C(E.specularMap.channel),specularColorMapUv:Wt&&C(E.specularColorMap.channel),specularIntensityMapUv:se&&C(E.specularIntensityMap.channel),transmissionMapUv:he&&C(E.transmissionMap.channel),thicknessMapUv:J&&C(E.thicknessMap.channel),alphaMapUv:Et&&C(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ie||Y),vertexNormals:!!Q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!Q.attributes.uv&&(Rt||Et),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Q.attributes.normal===void 0&&ie===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:St,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:Dt,numSunLights:O.sun.length,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numSunLightShadows:O.sunShadowMap.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&R.length>0,shadowMapType:o.shadowMap.type,toneMapping:$t,decodeVideoTexture:Rt&&E.map.isVideoTexture===!0&&Pe.getTransfer(E.map.colorSpace)===Ze,decodeVideoTextureEmissive:je&&E.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(E.emissiveMap.colorSpace)===Ze,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===La,flipSided:E.side===ni,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:At&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&E.extensions.multiDraw===!0||ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return kt.vertexUv1s=p.has(1),kt.vertexUv2s=p.has(2),kt.vertexUv3s=p.has(3),p.clear(),kt}function M(E){const O=[];if(E.shaderID?O.push(E.shaderID):(O.push(E.customVertexShaderID),O.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)O.push(R),O.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(x(O,E),N(O,E),O.push(o.outputColorSpace)),O.push(E.customProgramCacheKey),O.join()}function x(E,O){E.push(O.precision),E.push(O.outputColorSpace),E.push(O.envMapMode),E.push(O.envMapCubeUVHeight),E.push(O.mapUv),E.push(O.alphaMapUv),E.push(O.lightMapUv),E.push(O.aoMapUv),E.push(O.bumpMapUv),E.push(O.normalMapUv),E.push(O.displacementMapUv),E.push(O.emissiveMapUv),E.push(O.metalnessMapUv),E.push(O.roughnessMapUv),E.push(O.anisotropyMapUv),E.push(O.clearcoatMapUv),E.push(O.clearcoatNormalMapUv),E.push(O.clearcoatRoughnessMapUv),E.push(O.iridescenceMapUv),E.push(O.iridescenceThicknessMapUv),E.push(O.sheenColorMapUv),E.push(O.sheenRoughnessMapUv),E.push(O.specularMapUv),E.push(O.specularColorMapUv),E.push(O.specularIntensityMapUv),E.push(O.transmissionMapUv),E.push(O.thicknessMapUv),E.push(O.combine),E.push(O.fogExp2),E.push(O.sizeAttenuation),E.push(O.morphTargetsCount),E.push(O.morphAttributeCount),E.push(O.numSunLights),E.push(O.numDirLights),E.push(O.numPointLights),E.push(O.numSpotLights),E.push(O.numSpotLightMaps),E.push(O.numHemiLights),E.push(O.numRectAreaLights),E.push(O.numSunLightShadows),E.push(O.numDirLightShadows),E.push(O.numPointLightShadows),E.push(O.numSpotLightShadows),E.push(O.numSpotLightShadowsWithMaps),E.push(O.numLightProbes),E.push(O.shadowMapType),E.push(O.toneMapping),E.push(O.numClippingPlanes),E.push(O.numClipIntersection),E.push(O.depthPacking)}function N(E,O){d.disableAll(),O.instancing&&d.enable(0),O.instancingColor&&d.enable(1),O.instancingMorph&&d.enable(2),O.matcap&&d.enable(3),O.envMap&&d.enable(4),O.normalMapObjectSpace&&d.enable(5),O.normalMapTangentSpace&&d.enable(6),O.clearcoat&&d.enable(7),O.iridescence&&d.enable(8),O.alphaTest&&d.enable(9),O.vertexColors&&d.enable(10),O.vertexAlphas&&d.enable(11),O.vertexUv1s&&d.enable(12),O.vertexUv2s&&d.enable(13),O.vertexUv3s&&d.enable(14),O.vertexTangents&&d.enable(15),O.anisotropy&&d.enable(16),O.alphaHash&&d.enable(17),O.batching&&d.enable(18),O.dispersion&&d.enable(19),O.retroreflection&&d.enable(24),O.batchingColor&&d.enable(20),O.gradientMap&&d.enable(21),O.packedNormalMap&&d.enable(22),O.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.reversedDepthBuffer&&d.enable(4),O.skinning&&d.enable(5),O.morphTargets&&d.enable(6),O.morphNormals&&d.enable(7),O.morphColors&&d.enable(8),O.premultipliedAlpha&&d.enable(9),O.shadowMapEnabled&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),O.decodeVideoTextureEmissive&&d.enable(20),O.alphaToCoverage&&d.enable(21),O.numLightProbeGrids>0&&d.enable(22),O.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function G(E){const O=T[E.type];let R;if(O){const D=sa[O];R=f1.clone(D.uniforms)}else R=E.uniforms;return R}function w(E,O){let R=S.get(O);return R!==void 0?++R.usedTimes:(R=new H3(o,O,E,u),m.push(R),S.set(O,R)),R}function L(E){if(--E.usedTimes===0){const O=m.indexOf(E);m[O]=m[m.length-1],m.pop(),S.delete(E.cacheKey),E.destroy()}}function U(E){h.remove(E)}function F(){h.dispose()}return{getParameters:P,getProgramCacheKey:M,getUniforms:G,acquireProgram:w,releaseProgram:L,releaseShaderCache:U,programs:m,dispose:F}}function W3(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function u(d,h,p){o.get(d)[h]=p}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:u,dispose:c}}function Y3(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function HS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function GS(){const o=[];let e=0;const i=[],r=[],u=[];function c(){e=0,i.length=0,r.length=0,u.length=0}function d(v){let T=0;return v.isInstancedMesh&&(T+=2),v.isSkinnedMesh&&(T+=1),T}function h(v,T,C,P,M,x){let N=o[e];return N===void 0?(N={id:v.id,object:v,geometry:T,material:C,materialVariant:d(v),groupOrder:P,renderOrder:v.renderOrder,z:M,group:x},o[e]=N):(N.id=v.id,N.object=v,N.geometry=T,N.material=C,N.materialVariant=d(v),N.groupOrder=P,N.renderOrder=v.renderOrder,N.z=M,N.group=x),e++,N}function p(v,T,C,P,M,x,N){N.reversedDepth===!0&&(M=-M);const G=h(v,T,C,P,M,x);C.transmission>0?r.push(G):C.transparent===!0?u.push(G):i.push(G)}function m(v,T,C,P,M,x){const N=h(v,T,C,P,M,x);C.transmission>0?r.unshift(N):C.transparent===!0?u.unshift(N):i.unshift(N)}function S(v,T){i.length>1&&i.sort(v||Y3),r.length>1&&r.sort(T||HS),u.length>1&&u.sort(T||HS)}function _(){for(let v=e,T=o.length;v<T;v++){const C=o[v];if(C.id===null)break;C.id=null,C.object=null,C.geometry=null,C.material=null,C.group=null}}return{opaque:i,transmissive:r,transparent:u,init:c,push:p,unshift:m,finish:_,sort:S}}function Z3(){let o=new WeakMap;function e(r,u){const c=o.get(r);let d;return c===void 0?(d=new GS,o.set(r,[d])):u>=c.length?(d=new GS,c.push(d)):d=c[u],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function K3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new j,color:new Fe};break;case"SpotLight":i={position:new j,direction:new j,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":i={color:new Fe,position:new j,halfWidth:new j,halfHeight:new j};break}return o[e.id]=i,i}}}function Q3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let J3=0;function j3(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function $3(o){const e=new K3,i=Q3(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new j);const u=new j,c=new nn,d=new nn;function h(m){let S=0,_=0,v=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let T=0,C=0,P=0,M=0,x=0,N=0,G=0,w=0,L=0,U=0,F=0,E=0,O=0,R=0;m.sort(j3);for(let I=0,k=m.length;I<k;I++){const H=m[I],Q=H.color,q=H.intensity,W=H.distance;let tt=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===$r?tt=H.shadow.map.texture:tt=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)S+=Q.r*q,_+=Q.g*q,v+=Q.b*q;else if(H.isLightProbe){for(let it=0;it<9;it++)r.probe[it].addScaledVector(H.sh.coefficients[it],q);R++}else if(H.isSunLight){const it=e.get(H);if(it.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const pt=H.shadow,xt=i.get(H);xt.shadowIntensity=pt.intensity,xt.shadowBias=pt.bias,xt.shadowNormalBias=pt.normalBias,xt.shadowRadius=pt.radius,xt.shadowMapSize.copy(pt.mapSize).multiply(pt.getFrameExtents()),r.sunShadow[C]=xt,r.sunShadowMap[C]=tt;const Bt=pt.getViewportCount();for(let Dt=0;Dt<Bt;Dt++)r.sunShadowMatrix[P+Dt]=pt.getMatrix(Dt),r.sunShadowCascade[P+Dt]=pt._cascadeData[Dt];P+=Bt,C++}r.sun[T]=it,T++}else if(H.isDirectionalLight){const it=e.get(H);if(it.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const pt=H.shadow,xt=i.get(H);xt.shadowIntensity=pt.intensity,xt.shadowBias=pt.bias,xt.shadowNormalBias=pt.normalBias,xt.shadowRadius=pt.radius,xt.shadowMapSize=pt.mapSize,r.directionalShadow[M]=xt,r.directionalShadowMap[M]=tt,r.directionalShadowMatrix[M]=H.shadow.matrix,L++}r.directional[M]=it,M++}else if(H.isSpotLight){const it=e.get(H);it.position.setFromMatrixPosition(H.matrixWorld),it.color.copy(Q).multiplyScalar(q),it.distance=W,it.coneCos=Math.cos(H.angle),it.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),it.decay=H.decay,r.spot[N]=it;const pt=H.shadow;if(H.map&&(r.spotLightMap[E]=H.map,E++,pt.updateMatrices(H),H.castShadow&&O++),r.spotLightMatrix[N]=pt.matrix,H.castShadow){const xt=i.get(H);xt.shadowIntensity=pt.intensity,xt.shadowBias=pt.bias,xt.shadowNormalBias=pt.normalBias,xt.shadowRadius=pt.radius,xt.shadowMapSize=pt.mapSize,r.spotShadow[N]=xt,r.spotShadowMap[N]=tt,F++}N++}else if(H.isRectAreaLight){const it=e.get(H);it.color.copy(Q).multiplyScalar(q),it.halfWidth.set(H.width*.5,0,0),it.halfHeight.set(0,H.height*.5,0),r.rectArea[G]=it,G++}else if(H.isPointLight){const it=e.get(H);if(it.color.copy(H.color).multiplyScalar(H.intensity),it.distance=H.distance,it.decay=H.decay,H.castShadow){const pt=H.shadow,xt=i.get(H);xt.shadowIntensity=pt.intensity,xt.shadowBias=pt.bias,xt.shadowNormalBias=pt.normalBias,xt.shadowRadius=pt.radius,xt.shadowMapSize=pt.mapSize,xt.shadowCameraNear=pt.camera.near,xt.shadowCameraFar=pt.camera.far,r.pointShadow[x]=xt,r.pointShadowMap[x]=tt,r.pointShadowMatrix[x]=H.shadow.matrix,U++}r.point[x]=it,x++}else if(H.isHemisphereLight){const it=e.get(H);it.skyColor.copy(H.color).multiplyScalar(q),it.groundColor.copy(H.groundColor).multiplyScalar(q),r.hemi[w]=it,w++}}G>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Xt.LTC_FLOAT_1,r.rectAreaLTC2=Xt.LTC_FLOAT_2):(r.rectAreaLTC1=Xt.LTC_HALF_1,r.rectAreaLTC2=Xt.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=_,r.ambient[2]=v;const D=r.hash;(D.sunLength!==T||D.directionalLength!==M||D.pointLength!==x||D.spotLength!==N||D.rectAreaLength!==G||D.hemiLength!==w||D.numSunShadows!==C||D.numDirectionalShadows!==L||D.numPointShadows!==U||D.numSpotShadows!==F||D.numSpotMaps!==E||D.numLightProbes!==R)&&(r.sun.length=T,r.directional.length=M,r.spot.length=N,r.rectArea.length=G,r.point.length=x,r.hemi.length=w,r.sunShadow.length=C,r.sunShadowMap.length=C,r.sunShadowMatrix.length=P,r.sunShadowCascade.length=P,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.directionalShadowMatrix.length=L,r.pointShadow.length=U,r.pointShadowMap.length=U,r.pointShadowMatrix.length=U,r.spotShadow.length=F,r.spotShadowMap.length=F,r.spotLightMatrix.length=F+E-O,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=R,D.sunLength=T,D.directionalLength=M,D.pointLength=x,D.spotLength=N,D.rectAreaLength=G,D.hemiLength=w,D.numSunShadows=C,D.numDirectionalShadows=L,D.numPointShadows=U,D.numSpotShadows=F,D.numSpotMaps=E,D.numLightProbes=R,r.version=J3++)}function p(m,S){let _=0,v=0,T=0,C=0,P=0,M=0;const x=S.matrixWorldInverse;for(let N=0,G=m.length;N<G;N++){const w=m[N];if(w.isSunLight){const L=r.sun[_];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(x),_++}else if(w.isDirectionalLight){const L=r.directional[v];L.direction.setFromMatrixPosition(w.matrixWorld),u.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(u),L.direction.transformDirection(x),v++}else if(w.isSpotLight){const L=r.spot[C];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(w.matrixWorld),u.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(u),L.direction.transformDirection(x),C++}else if(w.isRectAreaLight){const L=r.rectArea[P];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(x),d.identity(),c.copy(w.matrixWorld),c.premultiply(x),d.extractRotation(c),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),P++}else if(w.isPointLight){const L=r.point[T];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(x),T++}else if(w.isHemisphereLight){const L=r.hemi[M];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(x),M++}}}return{setup:h,setupView:p,state:r}}function VS(o){const e=new $3(o),i=[],r=[],u=[];function c(v){_.camera=v,i.length=0,r.length=0,u.length=0}function d(v){i.push(v)}function h(v){r.push(v)}function p(v){u.push(v)}function m(){e.setup(i)}function S(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:u,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:m,setupLightsView:S,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function tC(o){let e=new WeakMap;function i(u,c=0){const d=e.get(u);let h;return d===void 0?(h=new VS(o),e.set(u,[h])):c>=d.length?(h=new VS(o),d.push(h)):h=d[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const eC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nC=`uniform sampler2D shadow_pass;
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
}`,iC=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],aC=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],XS=new nn,vl=new j,sp=new j;function rC(o,e,i){let r=new bm;const u=new Re,c=new Re,d=new ln,h=new m1,p=new g1,m={},S=i.maxTextureSize,_={[Xi]:ni,[ni]:Xi,[La]:La},v=new da({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:eC,fragmentShader:nC}),T=v.clone();T.defines.HORIZONTAL_PASS=1;const C=new _i;C.setAttribute("position",new za(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new In(C,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ac;let x=this.type;this.render=function(U,F,E){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===iT&&(de("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ac);const O=o.getRenderTarget(),R=o.getActiveCubeFace(),D=o.getActiveMipmapLevel(),I=o.state;I.setBlending(Pa),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const k=x!==this.type;k&&F.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(Q=>Q.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,Q=U.length;H<Q;H++){const q=U[H],W=q.shadow;if(W===void 0){de("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;u.copy(W.mapSize);const tt=W.getFrameExtents();u.multiply(tt),c.copy(W.mapSize),(u.x>S||u.y>S)&&(u.x>S&&(c.x=Math.floor(S/tt.x),u.x=c.x*tt.x,W.mapSize.x=c.x),u.y>S&&(c.y=Math.floor(S/tt.y),u.y=c.y*tt.y,W.mapSize.y=c.y));const it=o.state.buffers.depth.getReversed();if(W.camera._reversedDepth=it,W.map===null||k===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Sl){if(q.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Gi(u.x,u.y,{format:$r,type:fa,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new Rl(u.x,u.y,oa),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=Fa,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=On,W.map.depthTexture.magFilter=On}else q.isPointLight?(W.map=new jx(u.x),W.map.depthTexture=new u1(u.x,ca)):(W.map=new Gi(u.x,u.y),W.map.depthTexture=new Rl(u.x,u.y,ca)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=Fa,this.type===Ac?(W.map.depthTexture.compareFunction=it?ym:Mm,W.map.depthTexture.minFilter=Gn,W.map.depthTexture.magFilter=Gn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=On,W.map.depthTexture.magFilter=On);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==u.x||W.map.height!==u.y)&&W.map.setSize(u.x,u.y);const pt=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();q.isPointLight!==!0&&W.updateMatrices(q,E);for(let xt=0;xt<pt;xt++){const Bt=W.getCamera(xt);if(q.isPointLight){const Dt=W.camera,V=W.matrix,mt=q.distance||Dt.far;mt!==Dt.far&&(Dt.far=mt,Dt.updateProjectionMatrix()),vl.setFromMatrixPosition(q.matrixWorld),Dt.position.copy(vl),sp.copy(Dt.position),sp.add(iC[xt]),Dt.up.copy(aC[xt]),Dt.lookAt(sp),Dt.updateMatrixWorld(),V.makeTranslation(-vl.x,-vl.y,-vl.z),XS.multiplyMatrices(Dt.projectionMatrix,Dt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(XS,Dt.coordinateSystem,Dt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)o.setRenderTarget(W.map,xt),o.clear();else{xt===0&&(o.setRenderTarget(W.map),o.clear());const Dt=W.getViewport(xt);d.set(c.x*Dt.x,c.y*Dt.y,c.x*Dt.z,c.y*Dt.w),I.viewport(d)}r=W.getFrustum(xt),w(F,E,Bt,q,this.type)}W.isPointLightShadow!==!0&&this.type===Sl&&N(W,E),W.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(O,R,D)};function N(U,F){const E=e.update(P);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,T.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,T.needsUpdate=!0),U.mapPass===null?U.mapPass=new Gi(u.x,u.y,{format:$r,type:fa}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),v.uniforms.shadow_pass.value=U.map.depthTexture,v.uniforms.resolution.value.set(U.map.width,U.map.height),v.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(F,null,E,v,P,null),T.uniforms.shadow_pass.value=U.mapPass.texture,T.uniforms.resolution.value.set(U.map.width,U.map.height),T.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(F,null,E,T,P,null)}function G(U,F,E,O){let R=null;const D=E.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(D!==void 0)R=D;else if(R=E.isPointLight===!0?p:h,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const I=R.uuid,k=F.uuid;let H=m[I];H===void 0&&(H={},m[I]=H);let Q=H[k];Q===void 0&&(Q=R.clone(),H[k]=Q,F.addEventListener("dispose",L)),R=Q}if(R.visible=F.visible,R.wireframe=F.wireframe,O===Sl?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:_[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const I=o.properties.get(R);I.light=E}return R}function w(U,F,E,O,R){if(U.visible===!1)return;if(U.layers.test(F.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&R===Sl)&&(!U.frustumCulled||U.intersectsFrustum(r))){U.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,U.matrixWorld);const k=e.update(U),H=U.material;if(Array.isArray(H)){const Q=k.groups;for(let q=0,W=Q.length;q<W;q++){const tt=Q[q],it=H[tt.materialIndex];if(it&&it.visible){const pt=G(U,it,O,R);U.onBeforeShadow(o,U,F,E,k,pt,tt),o.renderBufferDirect(E,null,k,pt,U,tt),U.onAfterShadow(o,U,F,E,k,pt,tt)}}}else if(H.visible){const Q=G(U,H,O,R);U.onBeforeShadow(o,U,F,E,k,Q,null),o.renderBufferDirect(E,null,k,Q,U,null),U.onAfterShadow(o,U,F,E,k,Q,null)}}const I=U.children;for(let k=0,H=I.length;k<H;k++)w(I[k],F,E,O,R)}function L(U){U.target.removeEventListener("dispose",L);for(const E in m){const O=m[E],R=U.target.uuid;R in O&&(O[R].dispose(),delete O[R])}}}function sC(o,e){function i(){let J=!1;const Nt=new ln;let Et=null;const Ot=new ln(0,0,0,0);return{setMask:function(qt){Et!==qt&&!J&&(o.colorMask(qt,qt,qt,qt),Et=qt)},setLocked:function(qt){J=qt},setClear:function(qt,At,$t,kt,Le){Le===!0&&(qt*=kt,At*=kt,$t*=kt),Nt.set(qt,At,$t,kt),Ot.equals(Nt)===!1&&(o.clearColor(qt,At,$t,kt),Ot.copy(Nt))},reset:function(){J=!1,Et=null,Ot.set(-1,0,0,0)}}}function r(){let J=!1,Nt=!1,Et=null,Ot=null,qt=null;return{setReversed:function(At){if(Nt!==At){const $t=e.get("EXT_clip_control");At?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),Nt=At;const kt=qt;qt=null,this.setClear(kt)}},getReversed:function(){return Nt},setTest:function(At){At?rt(o.DEPTH_TEST):St(o.DEPTH_TEST)},setMask:function(At){Et!==At&&!J&&(o.depthMask(At),Et=At)},setFunc:function(At){if(Nt&&(At=FT[At]),Ot!==At){switch(At){case up:o.depthFunc(o.NEVER);break;case cp:o.depthFunc(o.ALWAYS);break;case fp:o.depthFunc(o.LESS);break;case El:o.depthFunc(o.LEQUAL);break;case dp:o.depthFunc(o.EQUAL);break;case hp:o.depthFunc(o.GEQUAL);break;case pp:o.depthFunc(o.GREATER);break;case mp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ot=At}},setLocked:function(At){J=At},setClear:function(At){qt!==At&&(qt=At,Nt&&(At=1-At),o.clearDepth(At))},reset:function(){J=!1,Et=null,Ot=null,qt=null,Nt=!1}}}function u(){let J=!1,Nt=null,Et=null,Ot=null,qt=null,At=null,$t=null,kt=null,Le=null;return{setTest:function(pe){J||(pe?rt(o.STENCIL_TEST):St(o.STENCIL_TEST))},setMask:function(pe){Nt!==pe&&!J&&(o.stencilMask(pe),Nt=pe)},setFunc:function(pe,ai,vi){(Et!==pe||Ot!==ai||qt!==vi)&&(o.stencilFunc(pe,ai,vi),Et=pe,Ot=ai,qt=vi)},setOp:function(pe,ai,vi){(At!==pe||$t!==ai||kt!==vi)&&(o.stencilOp(pe,ai,vi),At=pe,$t=ai,kt=vi)},setLocked:function(pe){J=pe},setClear:function(pe){Le!==pe&&(o.clearStencil(pe),Le=pe)},reset:function(){J=!1,Nt=null,Et=null,Ot=null,qt=null,At=null,$t=null,kt=null,Le=null}}}const c=new i,d=new r,h=new u,p=new WeakMap,m=new WeakMap;let S={},_={},v={},T=new WeakMap,C=[],P=null,M=!1,x=null,N=null,G=null,w=null,L=null,U=null,F=null,E=new Fe(0,0,0),O=0,R=!1,D=null,I=null,k=null,H=null,Q=null;const q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,tt=0;const it=o.getParameter(o.VERSION);it.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(it)[1]),W=tt>=1):it.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),W=tt>=2);let pt=null,xt={};const Bt=o.getParameter(o.SCISSOR_BOX),Dt=o.getParameter(o.VIEWPORT),V=new ln().fromArray(Bt),mt=new ln().fromArray(Dt);function vt(J,Nt,Et,Ot){const qt=new Uint8Array(4),At=o.createTexture();o.bindTexture(J,At),o.texParameteri(J,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(J,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<Et;$t++)J===o.TEXTURE_3D||J===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,Ot,0,o.RGBA,o.UNSIGNED_BYTE,qt):o.texImage2D(Nt+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,qt);return At}const X={};X[o.TEXTURE_2D]=vt(o.TEXTURE_2D,o.TEXTURE_2D,1),X[o.TEXTURE_CUBE_MAP]=vt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[o.TEXTURE_2D_ARRAY]=vt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),X[o.TEXTURE_3D]=vt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),rt(o.DEPTH_TEST),d.setFunc(El),Ht(!1),ie(Zv),rt(o.CULL_FACE),oe(Pa);function rt(J){S[J]!==!0&&(o.enable(J),S[J]=!0)}function St(J){S[J]!==!1&&(o.disable(J),S[J]=!1)}function Ct(J,Nt){return v[J]!==Nt?(o.bindFramebuffer(J,Nt),v[J]=Nt,J===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Nt),J===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function ft(J,Nt){let Et=C,Ot=!1;if(J){Et=T.get(Nt),Et===void 0&&(Et=[],T.set(Nt,Et));const qt=J.textures;if(Et.length!==qt.length||Et[0]!==o.COLOR_ATTACHMENT0){for(let At=0,$t=qt.length;At<$t;At++)Et[At]=o.COLOR_ATTACHMENT0+At;Et.length=qt.length,Ot=!0}}else Et[0]!==o.BACK&&(Et[0]=o.BACK,Ot=!0);Ot&&o.drawBuffers(Et)}function Rt(J){return P!==J?(o.useProgram(J),P=J,!0):!1}const le={[eo]:o.FUNC_ADD,[rT]:o.FUNC_SUBTRACT,[sT]:o.FUNC_REVERSE_SUBTRACT};le[oT]=o.MIN,le[lT]=o.MAX;const re={[uT]:o.ZERO,[cT]:o.ONE,[fT]:o.SRC_COLOR,[yx]:o.SRC_ALPHA,[_T]:o.SRC_ALPHA_SATURATE,[mT]:o.DST_COLOR,[hT]:o.DST_ALPHA,[dT]:o.ONE_MINUS_SRC_COLOR,[Ex]:o.ONE_MINUS_SRC_ALPHA,[gT]:o.ONE_MINUS_DST_COLOR,[pT]:o.ONE_MINUS_DST_ALPHA,[vT]:o.CONSTANT_COLOR,[ST]:o.ONE_MINUS_CONSTANT_COLOR,[xT]:o.CONSTANT_ALPHA,[MT]:o.ONE_MINUS_CONSTANT_ALPHA};function oe(J,Nt,Et,Ot,qt,At,$t,kt,Le,pe){if(J===Pa){M===!0&&(St(o.BLEND),M=!1);return}if(M===!1&&(rt(o.BLEND),M=!0),J!==aT){if(J!==x||pe!==R){if((N!==eo||L!==eo)&&(o.blendEquation(o.FUNC_ADD),N=eo,L=eo),pe)switch(J){case Ml:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Kv:o.blendFunc(o.ONE,o.ONE);break;case Qv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Jv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:He("WebGLState: Invalid blending: ",J);break}else switch(J){case Ml:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Kv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Qv:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jv:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",J);break}G=null,w=null,U=null,F=null,E.set(0,0,0),O=0,x=J,R=pe}return}qt=qt||Nt,At=At||Et,$t=$t||Ot,(Nt!==N||qt!==L)&&(o.blendEquationSeparate(le[Nt],le[qt]),N=Nt,L=qt),(Et!==G||Ot!==w||At!==U||$t!==F)&&(o.blendFuncSeparate(re[Et],re[Ot],re[At],re[$t]),G=Et,w=Ot,U=At,F=$t),(kt.equals(E)===!1||Le!==O)&&(o.blendColor(kt.r,kt.g,kt.b,Le),E.copy(kt),O=Le),x=J,R=!1}function ne(J,Nt){J.side===La?St(o.CULL_FACE):rt(o.CULL_FACE);let Et=J.side===ni;Nt&&(Et=!Et),Ht(Et),J.blending===Ml&&J.transparent===!1?oe(Pa):oe(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),d.setFunc(J.depthFunc),d.setTest(J.depthTest),d.setMask(J.depthWrite),c.setMask(J.colorWrite);const Ot=J.stencilWrite;h.setTest(Ot),Ot&&(h.setMask(J.stencilWriteMask),h.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),h.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),je(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?rt(o.SAMPLE_ALPHA_TO_COVERAGE):St(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(J){D!==J&&(J?o.frontFace(o.CW):o.frontFace(o.CCW),D=J)}function ie(J){J!==eT?(rt(o.CULL_FACE),J!==I&&(J===Zv?o.cullFace(o.BACK):J===nT?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):St(o.CULL_FACE),I=J}function Ne(J){J!==k&&(W&&o.lineWidth(J),k=J)}function je(J,Nt,Et){J?(rt(o.POLYGON_OFFSET_FILL),(H!==Nt||Q!==Et)&&(H=Nt,Q=Et,d.getReversed()&&(Nt=-Nt),o.polygonOffset(Nt,Et))):St(o.POLYGON_OFFSET_FILL)}function Ue(J){J?rt(o.SCISSOR_TEST):St(o.SCISSOR_TEST)}function Se(J){J===void 0&&(J=o.TEXTURE0+q-1),pt!==J&&(o.activeTexture(J),pt=J)}function Y(J,Nt,Et){Et===void 0&&(pt===null?Et=o.TEXTURE0+q-1:Et=pt);let Ot=xt[Et];Ot===void 0&&(Ot={type:void 0,texture:void 0},xt[Et]=Ot),(Ot.type!==J||Ot.texture!==Nt)&&(pt!==Et&&(o.activeTexture(Et),pt=Et),o.bindTexture(J,Nt||X[J]),Ot.type=J,Ot.texture=Nt)}function sn(){const J=xt[pt];J!==void 0&&J.type!==void 0&&(o.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function Be(){try{o.compressedTexImage2D(...arguments)}catch(J){He("WebGLState:",J)}}function z(){try{o.compressedTexImage3D(...arguments)}catch(J){He("WebGLState:",J)}}function y(){try{o.texSubImage2D(...arguments)}catch(J){He("WebGLState:",J)}}function at(){try{o.texSubImage3D(...arguments)}catch(J){He("WebGLState:",J)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(J){He("WebGLState:",J)}}function gt(){try{o.compressedTexSubImage3D(...arguments)}catch(J){He("WebGLState:",J)}}function wt(){try{o.texStorage2D(...arguments)}catch(J){He("WebGLState:",J)}}function Lt(){try{o.texStorage3D(...arguments)}catch(J){He("WebGLState:",J)}}function _t(){try{o.texImage2D(...arguments)}catch(J){He("WebGLState:",J)}}function Tt(){try{o.texImage3D(...arguments)}catch(J){He("WebGLState:",J)}}function Ut(J){return _[J]!==void 0?_[J]:o.getParameter(J)}function te(J,Nt){_[J]!==Nt&&(o.pixelStorei(J,Nt),_[J]=Nt)}function Ft(J){V.equals(J)===!1&&(o.scissor(J.x,J.y,J.z,J.w),V.copy(J))}function zt(J){mt.equals(J)===!1&&(o.viewport(J.x,J.y,J.z,J.w),mt.copy(J))}function Wt(J,Nt){let Et=m.get(Nt);Et===void 0&&(Et=new WeakMap,m.set(Nt,Et));let Ot=Et.get(J);Ot===void 0&&(Ot=o.getUniformBlockIndex(Nt,J.name),Et.set(J,Ot))}function se(J,Nt){const Ot=m.get(Nt).get(J);p.get(Nt)!==Ot&&(o.uniformBlockBinding(Nt,Ot,J.__bindingPointIndex),p.set(Nt,Ot))}function he(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},_={},pt=null,xt={},v={},T=new WeakMap,C=[],P=null,M=!1,x=null,N=null,G=null,w=null,L=null,U=null,F=null,E=new Fe(0,0,0),O=0,R=!1,D=null,I=null,k=null,H=null,Q=null,V.set(0,0,o.canvas.width,o.canvas.height),mt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:rt,disable:St,bindFramebuffer:Ct,drawBuffers:ft,useProgram:Rt,setBlending:oe,setMaterial:ne,setFlipSided:Ht,setCullFace:ie,setLineWidth:Ne,setPolygonOffset:je,setScissorTest:Ue,activeTexture:Se,bindTexture:Y,unbindTexture:sn,compressedTexImage2D:Be,compressedTexImage3D:z,texImage2D:_t,texImage3D:Tt,pixelStorei:te,getParameter:Ut,updateUBOMapping:Wt,uniformBlockBinding:se,texStorage2D:wt,texStorage3D:Lt,texSubImage2D:y,texSubImage3D:at,compressedTexSubImage2D:ct,compressedTexSubImage3D:gt,scissor:Ft,viewport:zt,reset:he}}function oC(o,e,i,r,u,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Re,S=new WeakMap,_=new Set;let v;const T=new WeakMap;let C=!1;try{C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(z,y){return C?new OffscreenCanvas(z,y):Ic("canvas")}function M(z,y,at){let ct=1;const gt=Be(z);if((gt.width>at||gt.height>at)&&(ct=at/Math.max(gt.width,gt.height)),ct<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const wt=Math.floor(ct*gt.width),Lt=Math.floor(ct*gt.height);v===void 0&&(v=P(wt,Lt));const _t=y?P(wt,Lt):v;return _t.width=wt,_t.height=Lt,_t.getContext("2d").drawImage(z,0,0,wt,Lt),de("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+wt+"x"+Lt+")."),_t}else return"data"in z&&de("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),z;return z}function x(z){return z.generateMipmaps}function N(z){o.generateMipmap(z)}function G(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function w(z,y,at,ct,gt,wt=!1){if(z!==null){if(o[z]!==void 0)return o[z];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Lt;ct&&(Lt=e.get("EXT_texture_norm16"),Lt||de("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _t=y;if(y===o.RED&&(at===o.FLOAT&&(_t=o.R32F),at===o.HALF_FLOAT&&(_t=o.R16F),at===o.UNSIGNED_BYTE&&(_t=o.R8),at===o.UNSIGNED_SHORT&&Lt&&(_t=Lt.R16_EXT),at===o.SHORT&&Lt&&(_t=Lt.R16_SNORM_EXT)),y===o.RED_INTEGER&&(at===o.UNSIGNED_BYTE&&(_t=o.R8UI),at===o.UNSIGNED_SHORT&&(_t=o.R16UI),at===o.UNSIGNED_INT&&(_t=o.R32UI),at===o.BYTE&&(_t=o.R8I),at===o.SHORT&&(_t=o.R16I),at===o.INT&&(_t=o.R32I)),y===o.RG&&(at===o.FLOAT&&(_t=o.RG32F),at===o.HALF_FLOAT&&(_t=o.RG16F),at===o.UNSIGNED_BYTE&&(_t=o.RG8),at===o.UNSIGNED_SHORT&&Lt&&(_t=Lt.RG16_EXT),at===o.SHORT&&Lt&&(_t=Lt.RG16_SNORM_EXT)),y===o.RG_INTEGER&&(at===o.UNSIGNED_BYTE&&(_t=o.RG8UI),at===o.UNSIGNED_SHORT&&(_t=o.RG16UI),at===o.UNSIGNED_INT&&(_t=o.RG32UI),at===o.BYTE&&(_t=o.RG8I),at===o.SHORT&&(_t=o.RG16I),at===o.INT&&(_t=o.RG32I)),y===o.RGB_INTEGER&&(at===o.UNSIGNED_BYTE&&(_t=o.RGB8UI),at===o.UNSIGNED_SHORT&&(_t=o.RGB16UI),at===o.UNSIGNED_INT&&(_t=o.RGB32UI),at===o.BYTE&&(_t=o.RGB8I),at===o.SHORT&&(_t=o.RGB16I),at===o.INT&&(_t=o.RGB32I)),y===o.RGBA_INTEGER&&(at===o.UNSIGNED_BYTE&&(_t=o.RGBA8UI),at===o.UNSIGNED_SHORT&&(_t=o.RGBA16UI),at===o.UNSIGNED_INT&&(_t=o.RGBA32UI),at===o.BYTE&&(_t=o.RGBA8I),at===o.SHORT&&(_t=o.RGBA16I),at===o.INT&&(_t=o.RGBA32I)),y===o.RGB&&(at===o.UNSIGNED_SHORT&&Lt&&(_t=Lt.RGB16_EXT),at===o.SHORT&&Lt&&(_t=Lt.RGB16_SNORM_EXT),at===o.UNSIGNED_INT_5_9_9_9_REV&&(_t=o.RGB9_E5),at===o.UNSIGNED_INT_10F_11F_11F_REV&&(_t=o.R11F_G11F_B10F)),y===o.RGBA){const Tt=wt?Pc:Pe.getTransfer(gt);at===o.FLOAT&&(_t=o.RGBA32F),at===o.HALF_FLOAT&&(_t=o.RGBA16F),at===o.UNSIGNED_BYTE&&(_t=Tt===Ze?o.SRGB8_ALPHA8:o.RGBA8),at===o.UNSIGNED_SHORT&&Lt&&(_t=Lt.RGBA16_EXT),at===o.SHORT&&Lt&&(_t=Lt.RGBA16_SNORM_EXT),at===o.UNSIGNED_SHORT_4_4_4_4&&(_t=o.RGBA4),at===o.UNSIGNED_SHORT_5_5_5_1&&(_t=o.RGB5_A1)}return(_t===o.R16F||_t===o.R32F||_t===o.RG16F||_t===o.RG32F||_t===o.RGBA16F||_t===o.RGBA32F)&&e.get("EXT_color_buffer_float"),_t}function L(z,y){let at;return z?y===null||y===ca||y===bl?at=o.DEPTH24_STENCIL8:y===oa?at=o.DEPTH32F_STENCIL8:y===Tl&&(at=o.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ca||y===bl?at=o.DEPTH_COMPONENT24:y===oa?at=o.DEPTH_COMPONENT32F:y===Tl&&(at=o.DEPTH_COMPONENT16),at}function U(z,y){return x(z)===!0||z.isFramebufferTexture&&z.minFilter!==On&&z.minFilter!==Gn?Math.log2(Math.max(y.width,y.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?y.mipmaps.length:1}function F(z){const y=z.target;y.removeEventListener("dispose",F),O(y),y.isVideoTexture&&S.delete(y),y.isHTMLTexture&&_.delete(y)}function E(z){const y=z.target;y.removeEventListener("dispose",E),D(y)}function O(z){const y=r.get(z);if(y.__webglInit===void 0)return;const at=z.source,ct=T.get(at);if(ct){const gt=ct[y.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&R(z),Object.keys(ct).length===0&&T.delete(at)}r.remove(z)}function R(z){const y=r.get(z);o.deleteTexture(y.__webglTexture);const at=z.source,ct=T.get(at);delete ct[y.__cacheKey],d.memory.textures--}function D(z){const y=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(y.__webglFramebuffer[ct]))for(let gt=0;gt<y.__webglFramebuffer[ct].length;gt++)o.deleteFramebuffer(y.__webglFramebuffer[ct][gt]);else o.deleteFramebuffer(y.__webglFramebuffer[ct]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[ct])}else{if(Array.isArray(y.__webglFramebuffer))for(let ct=0;ct<y.__webglFramebuffer.length;ct++)o.deleteFramebuffer(y.__webglFramebuffer[ct]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ct=0;ct<y.__webglColorRenderbuffer.length;ct++)y.__webglColorRenderbuffer[ct]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[ct]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const at=z.textures;for(let ct=0,gt=at.length;ct<gt;ct++){const wt=r.get(at[ct]);wt.__webglTexture&&(o.deleteTexture(wt.__webglTexture),d.memory.textures--),r.remove(at[ct])}r.remove(z)}let I=0;function k(){I=0}function H(){return I}function Q(z){I=z}function q(){const z=I;return z>=u.maxTextures&&de("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+u.maxTextures),I+=1,z}function W(z){const y=[];return y.push(z.wrapS),y.push(z.wrapT),y.push(z.wrapR||0),y.push(z.magFilter),y.push(z.minFilter),y.push(z.anisotropy),y.push(z.internalFormat),y.push(z.format),y.push(z.type),y.push(z.generateMipmaps),y.push(z.premultiplyAlpha),y.push(z.flipY),y.push(z.unpackAlignment),y.push(z.colorSpace),y.join()}function tt(z,y){const at=r.get(z);if(z.isVideoTexture&&Y(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&at.__version!==z.version){const ct=z.image;if(ct===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{St(at,z,y);return}}else z.isExternalTexture&&(at.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,at.__webglTexture,o.TEXTURE0+y)}function it(z,y){const at=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&at.__version!==z.version){St(at,z,y);return}else z.isExternalTexture&&(at.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,at.__webglTexture,o.TEXTURE0+y)}function pt(z,y){const at=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&at.__version!==z.version){St(at,z,y);return}i.bindTexture(o.TEXTURE_3D,at.__webglTexture,o.TEXTURE0+y)}function xt(z,y){const at=r.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&at.__version!==z.version){Ct(at,z,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture,o.TEXTURE0+y)}const Bt={[gp]:o.REPEAT,[Oa]:o.CLAMP_TO_EDGE,[_p]:o.MIRRORED_REPEAT},Dt={[On]:o.NEAREST,[TT]:o.NEAREST_MIPMAP_NEAREST,[nc]:o.NEAREST_MIPMAP_LINEAR,[Gn]:o.LINEAR,[Dh]:o.LINEAR_MIPMAP_NEAREST,[Qr]:o.LINEAR_MIPMAP_LINEAR},V={[CT]:o.NEVER,[LT]:o.ALWAYS,[wT]:o.LESS,[Mm]:o.LEQUAL,[DT]:o.EQUAL,[ym]:o.GEQUAL,[NT]:o.GREATER,[UT]:o.NOTEQUAL};function mt(z,y){if(y.type===oa&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Gn||y.magFilter===Dh||y.magFilter===nc||y.magFilter===Qr||y.minFilter===Gn||y.minFilter===Dh||y.minFilter===nc||y.minFilter===Qr)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,Bt[y.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,Bt[y.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,Bt[y.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,Dt[y.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,Dt[y.minFilter]),y.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,V[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===On||y.minFilter!==nc&&y.minFilter!==Qr||y.type===oa&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const at=e.get("EXT_texture_filter_anisotropic");o.texParameterf(z,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,u.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function vt(z,y){let at=!1;z.__webglInit===void 0&&(z.__webglInit=!0,y.addEventListener("dispose",F));const ct=y.source;let gt=T.get(ct);gt===void 0&&(gt={},T.set(ct,gt));const wt=W(y);if(wt!==z.__cacheKey){gt[wt]===void 0&&(gt[wt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,at=!0),gt[wt].usedTimes++;const Lt=gt[z.__cacheKey];Lt!==void 0&&(gt[z.__cacheKey].usedTimes--,Lt.usedTimes===0&&R(y)),z.__cacheKey=wt,z.__webglTexture=gt[wt].texture}return at}function X(z,y,at){return Math.floor(Math.floor(z/at)/y)}function rt(z,y,at,ct){const wt=z.updateRanges;if(wt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,at,ct,y.data);else{wt.sort((te,Ft)=>te.start-Ft.start);let Lt=0;for(let te=1;te<wt.length;te++){const Ft=wt[Lt],zt=wt[te],Wt=Ft.start+Ft.count,se=X(zt.start,y.width,4),he=X(Ft.start,y.width,4);zt.start<=Wt+1&&se===he&&X(zt.start+zt.count-1,y.width,4)===se?Ft.count=Math.max(Ft.count,zt.start+zt.count-Ft.start):(++Lt,wt[Lt]=zt)}wt.length=Lt+1;const _t=i.getParameter(o.UNPACK_ROW_LENGTH),Tt=i.getParameter(o.UNPACK_SKIP_PIXELS),Ut=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let te=0,Ft=wt.length;te<Ft;te++){const zt=wt[te],Wt=Math.floor(zt.start/4),se=Math.ceil(zt.count/4),he=Wt%y.width,J=Math.floor(Wt/y.width),Nt=se,Et=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,he),i.pixelStorei(o.UNPACK_SKIP_ROWS,J),i.texSubImage2D(o.TEXTURE_2D,0,he,J,Nt,Et,at,ct,y.data)}z.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,_t),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Tt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Ut)}}function St(z,y,at){let ct=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ct=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ct=o.TEXTURE_3D);const gt=vt(z,y),wt=y.source;i.bindTexture(ct,z.__webglTexture,o.TEXTURE0+at);const Lt=r.get(wt);if(wt.version!==Lt.__version||gt===!0){if(i.activeTexture(o.TEXTURE0+at),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const Et=Pe.getPrimaries(Pe.workingColorSpace),Ot=y.colorSpace===xr?null:Pe.getPrimaries(y.colorSpace),qt=y.colorSpace===xr||Et===Ot?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt)}i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment);let Tt=M(y.image,!1,u.maxTextureSize);Tt=sn(y,Tt);const Ut=c.convert(y.format,y.colorSpace),te=c.convert(y.type);let Ft=w(y.internalFormat,Ut,te,y.normalized,y.colorSpace,y.isVideoTexture);mt(ct,y);let zt;const Wt=y.mipmaps,se=y.isVideoTexture!==!0,he=Lt.__version===void 0||gt===!0,J=wt.dataReady,Nt=U(y,Tt);if(y.isDepthTexture)Ft=L(y.format===Jr,y.type),he&&(se?i.texStorage2D(o.TEXTURE_2D,1,Ft,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,Ft,Tt.width,Tt.height,0,Ut,te,null));else if(y.isDataTexture)if(Wt.length>0){se&&he&&i.texStorage2D(o.TEXTURE_2D,Nt,Ft,Wt[0].width,Wt[0].height);for(let Et=0,Ot=Wt.length;Et<Ot;Et++)zt=Wt[Et],se?J&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,zt.width,zt.height,Ut,te,zt.data):i.texImage2D(o.TEXTURE_2D,Et,Ft,zt.width,zt.height,0,Ut,te,zt.data);y.generateMipmaps=!1}else se?(he&&i.texStorage2D(o.TEXTURE_2D,Nt,Ft,Tt.width,Tt.height),J&&rt(y,Tt,Ut,te)):i.texImage2D(o.TEXTURE_2D,0,Ft,Tt.width,Tt.height,0,Ut,te,Tt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){se&&he&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Nt,Ft,Wt[0].width,Wt[0].height,Tt.depth);for(let Et=0,Ot=Wt.length;Et<Ot;Et++)if(zt=Wt[Et],y.format!==Hi)if(Ut!==null)if(se){if(J)if(y.layerUpdates.size>0){const qt=MS(zt.width,zt.height,y.format,y.type);for(const At of y.layerUpdates){const $t=zt.data.subarray(At*qt/zt.data.BYTES_PER_ELEMENT,(At+1)*qt/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,At,zt.width,zt.height,1,Ut,$t)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,zt.width,zt.height,Tt.depth,Ut,zt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,Ft,zt.width,zt.height,Tt.depth,0,zt.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?J&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,zt.width,zt.height,Tt.depth,Ut,te,zt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Et,Ft,zt.width,zt.height,Tt.depth,0,Ut,te,zt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{se&&he&&i.texStorage2D(o.TEXTURE_2D,Nt,Ft,Wt[0].width,Wt[0].height);for(let Et=0,Ot=Wt.length;Et<Ot;Et++)zt=Wt[Et],y.format!==Hi?Ut!==null?se?J&&i.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,zt.width,zt.height,Ut,zt.data):i.compressedTexImage2D(o.TEXTURE_2D,Et,Ft,zt.width,zt.height,0,zt.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?J&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,zt.width,zt.height,Ut,te,zt.data):i.texImage2D(o.TEXTURE_2D,Et,Ft,zt.width,zt.height,0,Ut,te,zt.data)}else if(y.isDataArrayTexture)if(se){if(he&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Nt,Ft,Tt.width,Tt.height,Tt.depth),J)if(y.layerUpdates.size>0){const Et=MS(Tt.width,Tt.height,y.format,y.type);for(const Ot of y.layerUpdates){const qt=Tt.data.subarray(Ot*Et/Tt.data.BYTES_PER_ELEMENT,(Ot+1)*Et/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ot,Tt.width,Tt.height,1,Ut,te,qt)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ut,te,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ft,Tt.width,Tt.height,Tt.depth,0,Ut,te,Tt.data);else if(y.isData3DTexture)se?(he&&i.texStorage3D(o.TEXTURE_3D,Nt,Ft,Tt.width,Tt.height,Tt.depth),J&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ut,te,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,Ft,Tt.width,Tt.height,Tt.depth,0,Ut,te,Tt.data);else if(y.isFramebufferTexture){if(he)if(se)i.texStorage2D(o.TEXTURE_2D,Nt,Ft,Tt.width,Tt.height);else{let Et=Tt.width,Ot=Tt.height;for(let qt=0;qt<Nt;qt++)i.texImage2D(o.TEXTURE_2D,qt,Ft,Et,Ot,0,Ut,te,null),Et>>=1,Ot>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in o){const Et=o.canvas;if(Et.hasAttribute("layoutsubtree")||Et.setAttribute("layoutsubtree","true"),Tt.parentNode!==Et){Et.appendChild(Tt),_.add(y),Et.onpaint=Ot=>{const qt=Ot.changedElements;for(const At of _)qt.includes(At.image)&&(At.needsUpdate=!0)},Et.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Tt);else{const qt=o.RGBA,At=o.RGBA,$t=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,qt,At,$t,Tt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(se&&he){const Et=Be(Wt[0]);i.texStorage2D(o.TEXTURE_2D,Nt,Ft,Et.width,Et.height)}for(let Et=0,Ot=Wt.length;Et<Ot;Et++)zt=Wt[Et],se?J&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Ut,te,zt):i.texImage2D(o.TEXTURE_2D,Et,Ft,Ut,te,zt);y.generateMipmaps=!1}else if(se){if(he){const Et=Be(Tt);i.texStorage2D(o.TEXTURE_2D,Nt,Ft,Et.width,Et.height)}J&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ut,te,Tt)}else i.texImage2D(o.TEXTURE_2D,0,Ft,Ut,te,Tt);x(y)&&N(ct),Lt.__version=wt.version,y.onUpdate&&y.onUpdate(y)}z.__version=y.version}function Ct(z,y,at){if(y.image.length!==6)return;const ct=vt(z,y),gt=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+at);const wt=r.get(gt);if(gt.version!==wt.__version||ct===!0){i.activeTexture(o.TEXTURE0+at);const Lt=Pe.getPrimaries(Pe.workingColorSpace),_t=y.colorSpace===xr?null:Pe.getPrimaries(y.colorSpace),Tt=y.colorSpace===xr||Lt===_t?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Ut=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,Ft=[];for(let At=0;At<6;At++)!Ut&&!te?Ft[At]=M(y.image[At],!0,u.maxCubemapSize):Ft[At]=te?y.image[At].image:y.image[At],Ft[At]=sn(y,Ft[At]);const zt=Ft[0],Wt=c.convert(y.format,y.colorSpace),se=c.convert(y.type),he=w(y.internalFormat,Wt,se,y.normalized,y.colorSpace),J=y.isVideoTexture!==!0,Nt=wt.__version===void 0||ct===!0,Et=gt.dataReady;let Ot=U(y,zt);mt(o.TEXTURE_CUBE_MAP,y);let qt;if(Ut){J&&Nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,he,zt.width,zt.height);for(let At=0;At<6;At++){qt=Ft[At].mipmaps;for(let $t=0;$t<qt.length;$t++){const kt=qt[$t];y.format!==Hi?Wt!==null?J?Et&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,$t,0,0,kt.width,kt.height,Wt,kt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,$t,he,kt.width,kt.height,0,kt.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,$t,0,0,kt.width,kt.height,Wt,se,kt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,$t,he,kt.width,kt.height,0,Wt,se,kt.data)}}}else{if(qt=y.mipmaps,J&&Nt){qt.length>0&&Ot++;const At=Be(Ft[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,he,At.width,At.height)}for(let At=0;At<6;At++)if(te){J?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,Ft[At].width,Ft[At].height,Wt,se,Ft[At].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,he,Ft[At].width,Ft[At].height,0,Wt,se,Ft[At].data);for(let $t=0;$t<qt.length;$t++){const Le=qt[$t].image[At].image;J?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,$t+1,0,0,Le.width,Le.height,Wt,se,Le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,$t+1,he,Le.width,Le.height,0,Wt,se,Le.data)}}else{J?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,Wt,se,Ft[At]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,he,Wt,se,Ft[At]);for(let $t=0;$t<qt.length;$t++){const kt=qt[$t];J?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,$t+1,0,0,Wt,se,kt.image[At]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,$t+1,he,Wt,se,kt.image[At])}}}x(y)&&N(o.TEXTURE_CUBE_MAP),wt.__version=gt.version,y.onUpdate&&y.onUpdate(y)}z.__version=y.version}function ft(z,y,at,ct,gt,wt){const Lt=c.convert(at.format,at.colorSpace),_t=c.convert(at.type),Tt=w(at.internalFormat,Lt,_t,at.normalized,at.colorSpace),Ut=r.get(y),te=r.get(at);if(te.__renderTarget=y,!Ut.__hasExternalTextures){const Ft=Math.max(1,y.width>>wt),zt=Math.max(1,y.height>>wt);gt===o.TEXTURE_3D||gt===o.TEXTURE_2D_ARRAY?i.texImage3D(gt,wt,Tt,Ft,zt,y.depth,0,Lt,_t,null):i.texImage2D(gt,wt,Tt,Ft,zt,0,Lt,_t,null)}i.bindFramebuffer(o.FRAMEBUFFER,z),Se(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ct,gt,te.__webglTexture,0,Ue(y)):(gt===o.TEXTURE_2D||gt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ct,gt,te.__webglTexture,wt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Rt(z,y,at){if(o.bindRenderbuffer(o.RENDERBUFFER,z),y.depthBuffer){const ct=y.depthTexture,gt=ct&&ct.isDepthTexture?ct.type:null,wt=L(y.stencilBuffer,gt),Lt=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Se(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ue(y),wt,y.width,y.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ue(y),wt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,wt,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Lt,o.RENDERBUFFER,z)}else{const ct=y.textures;for(let gt=0;gt<ct.length;gt++){const wt=ct[gt],Lt=c.convert(wt.format,wt.colorSpace),_t=c.convert(wt.type),Tt=w(wt.internalFormat,Lt,_t,wt.normalized,wt.colorSpace);Se(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ue(y),Tt,y.width,y.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ue(y),Tt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Tt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function le(z,y,at){const ct=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,z),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const gt=r.get(y.depthTexture);if(gt.__renderTarget=y,(!gt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ct){if(gt.__webglInit===void 0&&(gt.__webglInit=!0,y.depthTexture.addEventListener("dispose",F)),gt.__webglTexture===void 0){gt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),mt(o.TEXTURE_CUBE_MAP,y.depthTexture);const Ut=c.convert(y.depthTexture.format),te=c.convert(y.depthTexture.type);let Ft;y.depthTexture.format===Fa?Ft=o.DEPTH_COMPONENT24:y.depthTexture.format===Jr&&(Ft=o.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Ft,y.width,y.height,0,Ut,te,null)}}else tt(y.depthTexture,0);const wt=gt.__webglTexture,Lt=Ue(y),_t=ct?o.TEXTURE_CUBE_MAP_POSITIVE_X+at:o.TEXTURE_2D,Tt=y.depthTexture.format===Jr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===Fa)Se(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Tt,_t,wt,0,Lt):o.framebufferTexture2D(o.FRAMEBUFFER,Tt,_t,wt,0);else if(y.depthTexture.format===Jr)Se(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Tt,_t,wt,0,Lt):o.framebufferTexture2D(o.FRAMEBUFFER,Tt,_t,wt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(z){const y=r.get(z),at=z.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==z.depthTexture){const ct=z.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ct){const gt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ct.removeEventListener("dispose",gt)};ct.addEventListener("dispose",gt),y.__depthDisposeCallback=gt}y.__boundDepthTexture=ct}if(z.depthTexture&&!y.__autoAllocateDepthBuffer)if(at)for(let ct=0;ct<6;ct++)le(y.__webglFramebuffer[ct],z,ct);else{const ct=z.texture.mipmaps;ct&&ct.length>0?le(y.__webglFramebuffer[0],z,0):le(y.__webglFramebuffer,z,0)}else if(at){y.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[ct]),y.__webglDepthbuffer[ct]===void 0)y.__webglDepthbuffer[ct]=o.createRenderbuffer(),Rt(y.__webglDepthbuffer[ct],z,!1);else{const gt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=y.__webglDepthbuffer[ct];o.bindRenderbuffer(o.RENDERBUFFER,wt),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,wt)}}else{const ct=z.texture.mipmaps;if(ct&&ct.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),Rt(y.__webglDepthbuffer,z,!1);else{const gt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,wt),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,wt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function oe(z,y,at){const ct=r.get(z);y!==void 0&&ft(ct.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),at!==void 0&&re(z)}function ne(z){const y=z.texture,at=r.get(z),ct=r.get(y);z.addEventListener("dispose",E);const gt=z.textures,wt=z.isWebGLCubeRenderTarget===!0,Lt=gt.length>1;if(Lt||(ct.__webglTexture===void 0&&(ct.__webglTexture=o.createTexture()),ct.__version=y.version,d.memory.textures++),wt){at.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0){at.__webglFramebuffer[_t]=[];for(let Tt=0;Tt<y.mipmaps.length;Tt++)at.__webglFramebuffer[_t][Tt]=o.createFramebuffer()}else at.__webglFramebuffer[_t]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){at.__webglFramebuffer=[];for(let _t=0;_t<y.mipmaps.length;_t++)at.__webglFramebuffer[_t]=o.createFramebuffer()}else at.__webglFramebuffer=o.createFramebuffer();if(Lt)for(let _t=0,Tt=gt.length;_t<Tt;_t++){const Ut=r.get(gt[_t]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=o.createTexture(),d.memory.textures++)}if(z.samples>0&&Se(z)===!1){at.__webglMultisampledFramebuffer=o.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let _t=0;_t<gt.length;_t++){const Tt=gt[_t];at.__webglColorRenderbuffer[_t]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,at.__webglColorRenderbuffer[_t]);const Ut=c.convert(Tt.format,Tt.colorSpace),te=c.convert(Tt.type),Ft=w(Tt.internalFormat,Ut,te,Tt.normalized,Tt.colorSpace,z.isXRRenderTarget===!0),zt=Ue(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,Ft,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+_t,o.RENDERBUFFER,at.__webglColorRenderbuffer[_t])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(at.__webglDepthRenderbuffer=o.createRenderbuffer(),Rt(at.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(wt){i.bindTexture(o.TEXTURE_CUBE_MAP,ct.__webglTexture),mt(o.TEXTURE_CUBE_MAP,y);for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0)for(let Tt=0;Tt<y.mipmaps.length;Tt++)ft(at.__webglFramebuffer[_t][Tt],z,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt);else ft(at.__webglFramebuffer[_t],z,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);x(y)&&N(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Lt){for(let _t=0,Tt=gt.length;_t<Tt;_t++){const Ut=gt[_t],te=r.get(Ut);let Ft=o.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ft=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ft,te.__webglTexture),mt(Ft,Ut),ft(at.__webglFramebuffer,z,Ut,o.COLOR_ATTACHMENT0+_t,Ft,0),x(Ut)&&N(Ft)}i.unbindTexture()}else{let _t=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(_t=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(_t,ct.__webglTexture),mt(_t,y),y.mipmaps&&y.mipmaps.length>0)for(let Tt=0;Tt<y.mipmaps.length;Tt++)ft(at.__webglFramebuffer[Tt],z,y,o.COLOR_ATTACHMENT0,_t,Tt);else ft(at.__webglFramebuffer,z,y,o.COLOR_ATTACHMENT0,_t,0);x(y)&&N(_t),i.unbindTexture()}z.depthBuffer&&re(z)}function Ht(z){const y=z.textures;for(let at=0,ct=y.length;at<ct;at++){const gt=y[at];if(x(gt)){const wt=G(z),Lt=r.get(gt).__webglTexture;i.bindTexture(wt,Lt),N(wt),i.unbindTexture()}}}const ie=[],Ne=[];function je(z){if(z.samples>0){if(Se(z)===!1){const y=z.textures,at=z.width,ct=z.height;let gt=o.COLOR_BUFFER_BIT;const wt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Lt=r.get(z),_t=y.length>1;if(_t)for(let Ut=0;Ut<y.length;Ut++)i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const Tt=z.texture.mipmaps;Tt&&Tt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Ut=0;Ut<y.length;Ut++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(gt|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(gt|=o.STENCIL_BUFFER_BIT)),_t){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ut]);const te=r.get(y[Ut]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,te,0)}o.blitFramebuffer(0,0,at,ct,0,0,at,ct,gt,o.NEAREST),p===!0&&(ie.length=0,Ne.length=0,ie.push(o.COLOR_ATTACHMENT0+Ut),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(ie.push(wt),Ne.push(wt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ne)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),_t)for(let Ut=0;Ut<y.length;Ut++){i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ut]);const te=r.get(y[Ut]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,te,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&p){const y=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function Ue(z){return Math.min(u.maxSamples,z.samples)}function Se(z){const y=r.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Y(z){const y=d.render.frame;S.get(z)!==y&&(S.set(z,y),z.update())}function sn(z,y){const at=z.colorSpace,ct=z.format,gt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||at!==Oc&&at!==xr&&(Pe.getTransfer(at)===Ze?(ct!==Hi||gt!==gi)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",at)),y}function Be(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(m.width=z.naturalWidth||z.width,m.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(m.width=z.displayWidth,m.height=z.displayHeight):(m.width=z.width,m.height=z.height),m}this.allocateTextureUnit=q,this.resetTextureUnits=k,this.getTextureUnits=H,this.setTextureUnits=Q,this.setTexture2D=tt,this.setTexture2DArray=it,this.setTexture3D=pt,this.setTextureCube=xt,this.rebindTextures=oe,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Se,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function lC(o,e){function i(r,u=xr){let c;const d=Pe.getTransfer(u);if(r===gi)return o.UNSIGNED_BYTE;if(r===gm)return o.UNSIGNED_SHORT_4_4_4_4;if(r===_m)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Px)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Ix)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Lx)return o.BYTE;if(r===Ox)return o.SHORT;if(r===Tl)return o.UNSIGNED_SHORT;if(r===mm)return o.INT;if(r===ca)return o.UNSIGNED_INT;if(r===oa)return o.FLOAT;if(r===fa)return o.HALF_FLOAT;if(r===zx)return o.ALPHA;if(r===Fx)return o.RGB;if(r===Hi)return o.RGBA;if(r===Fa)return o.DEPTH_COMPONENT;if(r===Jr)return o.DEPTH_STENCIL;if(r===Bx)return o.RED;if(r===vm)return o.RED_INTEGER;if(r===$r)return o.RG;if(r===Sm)return o.RG_INTEGER;if(r===xm)return o.RGBA_INTEGER;if(r===Rc||r===Cc||r===wc||r===Dc)if(d===Ze)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Rc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Rc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vp||r===Sp||r===xp||r===Mp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===vp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===xp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yp||r===Ep||r===Tp||r===bp||r===Ap||r===Uc||r===Rp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===yp||r===Ep)return d===Ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Tp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===bp)return c.COMPRESSED_R11_EAC;if(r===Ap)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Uc)return c.COMPRESSED_RG11_EAC;if(r===Rp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Cp||r===wp||r===Dp||r===Np||r===Up||r===Lp||r===Op||r===Pp||r===Ip||r===zp||r===Fp||r===Bp||r===Hp||r===Gp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Cp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Dp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Np)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Up)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Op)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Pp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ip)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vp||r===Xp||r===kp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Vp)return d===Ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===qp||r===Wp||r===Lc||r===Yp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===qp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Wp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Lc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const uC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cC=`
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

}`;class fC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Yx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new da({vertexShader:uC,fragmentShader:cC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new In(new Mr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dC extends ts{constructor(e,i){super();const r=this;let u=null,c=1,d=null,h="local-floor",p=1,m=null,S=null,_=null,v=null,T=null,C=null;const P=typeof XRWebGLBinding<"u",M=new fC,x={},N=i.getContextAttributes();let G=null,w=null;const L=[],U=[],F=new Re;let E=null,O=null;const R=new Kn;R.viewport=new ln;const D=new Kn;D.viewport=new ln;const I=[R,D],k=new x1;let H=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let rt=L[X];return rt===void 0&&(rt=new Bh,L[X]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(X){let rt=L[X];return rt===void 0&&(rt=new Bh,L[X]=rt),rt.getGripSpace()},this.getHand=function(X){let rt=L[X];return rt===void 0&&(rt=new Bh,L[X]=rt),rt.getHandSpace()};function q(X){const rt=U.indexOf(X.inputSource);if(rt===-1)return;const St=L[rt];St!==void 0&&(St.update(X.inputSource,X.frame,m||d),St.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){u.removeEventListener("select",q),u.removeEventListener("selectstart",q),u.removeEventListener("selectend",q),u.removeEventListener("squeeze",q),u.removeEventListener("squeezestart",q),u.removeEventListener("squeezeend",q),u.removeEventListener("end",W),u.removeEventListener("inputsourceschange",tt);for(let X=0;X<L.length;X++){const rt=U[X];rt!==null&&(U[X]=null,L[X].disconnect(rt))}H=null,Q=null,M.reset();for(const X in x)delete x[X];if(e.setRenderTarget(G),T=null,v=null,_=null,u=null,w=null,vt.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(F.width,F.height,!1),O!==null){const X=O.camera;X.fov=O.fov,X.zoom=O.zoom,X.updateProjectionMatrix(),O=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){c=X,r.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){h=X,r.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(X){m=X},this.getBaseLayer=function(){return v!==null?v:T},this.getBinding=function(){return _===null&&P&&(_=new XRWebGLBinding(u,i)),_},this.getFrame=function(){return C},this.getSession=function(){return u},this.setSession=async function(X){if(u=X,u!==null){if(G=e.getRenderTarget(),u.addEventListener("select",q),u.addEventListener("selectstart",q),u.addEventListener("selectend",q),u.addEventListener("squeeze",q),u.addEventListener("squeezestart",q),u.addEventListener("squeezeend",q),u.addEventListener("end",W),u.addEventListener("inputsourceschange",tt),N.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(F),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Ct=null,ft=null;N.depth&&(ft=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=N.stencil?Jr:Fa,Ct=N.stencil?bl:ca);const Rt={colorFormat:i.RGBA8,depthFormat:ft,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(Rt),u.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),w=new Gi(v.textureWidth,v.textureHeight,{format:Hi,type:gi,depthTexture:new Rl(v.textureWidth,v.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const St={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};T=new XRWebGLLayer(u,i,St),u.updateRenderState({baseLayer:T}),e.setPixelRatio(1),e.setSize(T.framebufferWidth,T.framebufferHeight,!1),w=new Gi(T.framebufferWidth,T.framebufferHeight,{format:Hi,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1,storeMultisampledDepthBuffer:T.ignoreDepthValues===!1,storeMultisampledStencilBuffer:T.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await u.requestReferenceSpace(h),vt.setContext(u),vt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function tt(X){for(let rt=0;rt<X.removed.length;rt++){const St=X.removed[rt],Ct=U.indexOf(St);Ct>=0&&(U[Ct]=null,L[Ct].disconnect(St))}for(let rt=0;rt<X.added.length;rt++){const St=X.added[rt];let Ct=U.indexOf(St);if(Ct===-1){for(let Rt=0;Rt<L.length;Rt++)if(Rt>=U.length){U.push(St),Ct=Rt;break}else if(U[Rt]===null){U[Rt]=St,Ct=Rt;break}if(Ct===-1)break}const ft=L[Ct];ft&&ft.connect(St)}}const it=new j,pt=new j;function xt(X,rt,St){it.setFromMatrixPosition(rt.matrixWorld),pt.setFromMatrixPosition(St.matrixWorld);const Ct=it.distanceTo(pt),ft=rt.projectionMatrix.elements,Rt=St.projectionMatrix.elements,le=ft[14]/(ft[10]-1),re=ft[14]/(ft[10]+1),oe=(ft[9]+1)/ft[5],ne=(ft[9]-1)/ft[5],Ht=(ft[8]-1)/ft[0],ie=(Rt[8]+1)/Rt[0],Ne=le*Ht,je=le*ie,Ue=Ct/(-Ht+ie),Se=Ue*-Ht;if(rt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Se),X.translateZ(Ue),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ft[10]===-1)X.projectionMatrix.copy(rt.projectionMatrix),X.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Y=le+Ue,sn=re+Ue,Be=Ne-Se,z=je+(Ct-Se),y=oe*re/sn*Y,at=ne*re/sn*Y;X.projectionMatrix.makePerspective(Be,z,y,at,Y,sn),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Bt(X,rt){rt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(rt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(u===null)return;let rt=X.near,St=X.far;M.texture!==null&&(M.depthNear>0&&(rt=M.depthNear),M.depthFar>0&&(St=M.depthFar)),k.near=D.near=R.near=rt,k.far=D.far=R.far=St,(H!==k.near||Q!==k.far)&&(u.updateRenderState({depthNear:k.near,depthFar:k.far}),H=k.near,Q=k.far),k.layers.mask=X.layers.mask|6,R.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;const Ct=X.parent,ft=k.cameras;Bt(k,Ct);for(let Rt=0;Rt<ft.length;Rt++)Bt(ft[Rt],Ct);ft.length===2?xt(k,R,D):k.projectionMatrix.copy(R.projectionMatrix),O===null&&X.isPerspectiveCamera&&(O={camera:X,fov:X.fov,zoom:X.zoom}),Dt(X,k,Ct)};function Dt(X,rt,St){St===null?X.matrix.copy(rt.matrixWorld):(X.matrix.copy(St.matrixWorld),X.matrix.invert(),X.matrix.multiply(rt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(rt.projectionMatrix),X.projectionMatrixInverse.copy(rt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Kp*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(v===null&&T===null))return p},this.setFoveation=function(X){p=X,v!==null&&(v.fixedFoveation=X),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=X)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(k)},this.getCameraTexture=function(X){return x[X]};let V=null;function mt(X,rt){if(S=rt.getViewerPose(m||d),C=rt,S!==null){const St=S.views;T!==null&&(e.setRenderTargetFramebuffer(w,T.framebuffer),e.setRenderTarget(w));let Ct=!1;St.length!==k.cameras.length&&(k.cameras.length=0,Ct=!0);for(let re=0;re<St.length;re++){const oe=St[re];let ne=null;if(T!==null)ne=T.getViewport(oe);else{const ie=_.getViewSubImage(v,oe);ne=ie.viewport,re===0&&(e.setRenderTargetTextures(w,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(w))}let Ht=I[re];Ht===void 0&&(Ht=new Kn,Ht.layers.enable(re),Ht.viewport=new ln,I[re]=Ht),Ht.matrix.fromArray(oe.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(oe.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(ne.x,ne.y,ne.width,ne.height),re===0&&(k.matrix.copy(Ht.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ct===!0&&k.cameras.push(Ht)}const ft=u.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&P){_=r.getBinding();const re=_.getDepthInformation(St[0]);re&&re.isValid&&re.texture&&M.init(re,u.renderState)}if(ft&&ft.includes("camera-access")&&P){e.state.unbindTexture(),_=r.getBinding();for(let re=0;re<St.length;re++){const oe=St[re].camera;if(oe){let ne=x[oe];ne||(ne=new Yx,x[oe]=ne);const Ht=_.getCameraImage(oe);ne.sourceTexture=Ht}}}}for(let St=0;St<L.length;St++){const Ct=U[St],ft=L[St];Ct!==null&&ft!==void 0&&ft.update(Ct,rt,m||d)}V&&V(X,rt),rt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:rt}),C=null}const vt=new Qx;vt.setAnimationLoop(mt),this.setAnimationLoop=function(X){V=X},this.dispose=function(){}}}const hC=new nn,iM=new ge;iM.set(-1,0,0,0,1,0,0,0,1);function pC(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,Zx(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function u(M,x,N,G,w){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(M,x):x.isMeshLambertMaterial?(c(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(M,x),_(M,x)):x.isMeshPhongMaterial?(c(M,x),S(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(M,x),v(M,x),x.isMeshPhysicalMaterial&&T(M,x,w)):x.isMeshMatcapMaterial?(c(M,x),C(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),P(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?p(M,x,N,G):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===ni&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===ni&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const N=e.get(x),G=N.envMap,w=N.envMapRotation;G&&(M.envMap.value=G,M.envMapRotation.value.setFromMatrix4(hC.makeRotationFromEuler(w)).transpose(),G.isCubeTexture&&G.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(iM),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,N,G){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*N,M.scale.value=G*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function S(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function T(M,x,N){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ni&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.retroreflectivity>0&&(M.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function C(M,x){x.matcap&&(M.matcap.value=x.matcap)}function P(M,x){const N=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:u}}function mC(o,e,i,r){let u={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,L){const U=L.program;r.uniformBlockBinding(w,U)}function m(w,L){let U=u[w.id];U===void 0&&(M(w),U=S(w),u[w.id]=U,w.addEventListener("dispose",N));const F=L.program;r.updateUBOMapping(w,F);const E=e.render.frame;c[w.id]!==E&&(v(w),c[w.id]=E)}function S(w){const L=_();w.__bindingPointIndex=L;const U=o.createBuffer(),F=w.__size,E=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,F,E),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,U),U}function _(){for(let w=0;w<h;w++)if(d.indexOf(w)===-1)return d.push(w),w;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const L=u[w.id],U=w.uniforms,F=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let E=0,O=U.length;E<O;E++){const R=U[E];if(Array.isArray(R))for(let D=0,I=R.length;D<I;D++)T(R[D],E,D,F);else T(R,E,0,F)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function T(w,L,U,F){if(P(w,L,U,F)===!0){const E=w.__offset,O=w.value;if(Array.isArray(O)){let R=0;for(let D=0;D<O.length;D++){const I=O[D],k=x(I);C(I,w.__data,R),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else C(O,w.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,E,w.__data)}}function C(w,L,U){typeof w=="number"||typeof w=="boolean"?L[0]=w:w.isMatrix3?(L[0]=w.elements[0],L[1]=w.elements[1],L[2]=w.elements[2],L[3]=0,L[4]=w.elements[3],L[5]=w.elements[4],L[6]=w.elements[5],L[7]=0,L[8]=w.elements[6],L[9]=w.elements[7],L[10]=w.elements[8],L[11]=0):ArrayBuffer.isView(w)?L.set(new w.constructor(w.buffer,w.byteOffset,L.length)):w.toArray(L,U)}function P(w,L,U,F){const E=w.value,O=L+"_"+U;if(F[O]===void 0)return typeof E=="number"||typeof E=="boolean"?F[O]=E:ArrayBuffer.isView(E)?F[O]=E.slice():F[O]=E.clone(),!0;{const R=F[O];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return F[O]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(R.equals(E)===!1)return R.copy(E),!0}}return!1}function M(w){const L=w.uniforms;let U=0;const F=16;for(let O=0,R=L.length;O<R;O++){const D=Array.isArray(L[O])?L[O]:[L[O]];for(let I=0,k=D.length;I<k;I++){const H=D[I],Q=Array.isArray(H.value)?H.value:[H.value];for(let q=0,W=Q.length;q<W;q++){const tt=Q[q],it=x(tt),pt=U%F,xt=pt%it.boundary,Bt=pt+xt;U+=xt,Bt!==0&&F-Bt<it.storage&&(U+=F-Bt),H.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=U,U+=it.storage}}}const E=U%F;return E>0&&(U+=F-E),w.__size=U,w.__cache={},this}function x(w){const L={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(L.boundary=4,L.storage=4):w.isVector2?(L.boundary=8,L.storage=8):w.isVector3||w.isColor?(L.boundary=16,L.storage=12):w.isVector4?(L.boundary=16,L.storage=16):w.isMatrix3?(L.boundary=48,L.storage=48):w.isMatrix4?(L.boundary=64,L.storage=64):w.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(L.boundary=16,L.storage=w.byteLength):de("WebGLRenderer: Unsupported uniform value type.",w),L}function N(w){const L=w.target;L.removeEventListener("dispose",N);const U=d.indexOf(L.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(u[L.id]),delete u[L.id],delete c[L.id]}function G(){for(const w in u)o.deleteBuffer(u[w]);d=[],u={},c={}}return{bind:p,update:m,dispose:G}}const gC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ra=null;function _C(){return ra===null&&(ra=new o1(gC,16,16,$r,fa),ra.name="DFG_LUT",ra.minFilter=Gn,ra.magFilter=Gn,ra.wrapS=Oa,ra.wrapT=Oa,ra.generateMipmaps=!1,ra.needsUpdate=!0),ra}class Zc{constructor(e={}){const{canvas:i=IT(),context:r=null,depth:u=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:T=gi}=e;this.isWebGLRenderer=!0;let C;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");C=r.getContextAttributes().alpha}else C=d;const P=T,M=new Set([xm,Sm,vm]),x=new Set([gi,ca,Tl,bl,gm,_m]),N=new Uint32Array(4),G=new Int32Array(4),w=new j;let L=null,U=null;const F=[],E=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ua,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,I=null,k=null,H=null,Q=null;this._outputColorSpace=Hn;let q=0,W=0,tt=null,it=-1,pt=null;const xt=new ln,Bt=new ln;let Dt=null;const V=new Fe(0);let mt=0,vt=i.width,X=i.height,rt=1,St=null,Ct=null;const ft=new ln(0,0,vt,X),Rt=new ln(0,0,vt,X);let le=!1;const re=new bm;let oe=!1,ne=!1;const Ht=new nn,ie=new j,Ne=new ln,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function Se(){return tt===null?rt:1}let Y=r;function sn(b,Z){return i.getContext(b,Z)}let Be,z,y,at,ct,gt,wt,Lt,_t,Tt,Ut,te,Ft,zt,Wt,se,he,J,Nt,Et,Ot,qt,At;try{const b={alpha:!0,depth:u,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:S,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${pm}`),i.addEventListener("webglcontextlost",Le,!1),i.addEventListener("webglcontextrestored",pe,!1),i.addEventListener("webglcontextcreationerror",ai,!1),Y===null){const Z="webgl2";if(Y=sn(Z,b),Y===null)throw sn(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(b){throw i.removeEventListener("webglcontextlost",Le,!1),i.removeEventListener("webglcontextrestored",pe,!1),i.removeEventListener("webglcontextcreationerror",ai,!1),He("WebGLRenderer: "+b.message),b}function $t(){Be=new _R(Y),Be.init(),Ot=new lC(Y,Be),z=new oR(Y,Be,e,Ot),y=new sC(Y,Be),z.reversedDepthBuffer&&v&&y.buffers.depth.setReversed(!0),k=Y.createFramebuffer(),H=Y.createFramebuffer(),Q=Y.createFramebuffer(),at=new xR(Y),ct=new W3,gt=new oC(Y,Be,y,ct,z,Ot,at),wt=new gR(R),Lt=new y1(Y),qt=new rR(Y,Lt),_t=new vR(Y,Lt,at,qt),Tt=new yR(Y,_t,Lt,qt,at),J=new MR(Y,z,gt),Wt=new lR(ct),Ut=new q3(R,wt,Be,z,qt,Wt),te=new pC(R,ct),Ft=new Z3,zt=new tC(Be),he=new aR(R,wt,y,Tt,C,p),se=new rC(R,Tt,z),At=new mC(Y,at,z,y),Nt=new sR(Y,Be,at),Et=new SR(Y,Be,at),at.programs=Ut.programs,R.capabilities=z,R.extensions=Be,R.properties=ct,R.renderLists=Ft,R.shadowMap=se,R.state=y,R.info=at}P!==gi&&(O=new TR(P,i.width,i.height,h,u,c));const kt=new dC(R,Y);this.xr=kt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const b=Be.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Be.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(b){b!==void 0&&(rt=b,this.setSize(vt,X,!1))},this.getSize=function(b){return b.set(vt,X)},this.setSize=function(b,Z,ht=!0){if(kt.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=b,X=Z,i.width=Math.floor(b*rt),i.height=Math.floor(Z*rt),ht===!0&&(i.style.width=b+"px",i.style.height=Z+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,b,Z)},this.getDrawingBufferSize=function(b){return b.set(vt*rt,X*rt).floor()},this.setDrawingBufferSize=function(b,Z,ht){vt=b,X=Z,rt=ht,i.width=Math.floor(b*ht),i.height=Math.floor(Z*ht),this.setViewport(0,0,b,Z)},this.setEffects=function(b){if(P===gi){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let Z=0;Z<b.length;Z++)if(b[Z].isOutputPass===!0){de("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(xt)},this.getViewport=function(b){return b.copy(ft)},this.setViewport=function(b,Z,ht,ot){b.isVector4?ft.set(b.x,b.y,b.z,b.w):ft.set(b,Z,ht,ot),y.viewport(xt.copy(ft).multiplyScalar(rt).round())},this.getScissor=function(b){return b.copy(Rt)},this.setScissor=function(b,Z,ht,ot){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,Z,ht,ot),y.scissor(Bt.copy(Rt).multiplyScalar(rt).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(b){y.setScissorTest(le=b)},this.setOpaqueSort=function(b){St=b},this.setTransparentSort=function(b){Ct=b},this.getClearColor=function(b){return b.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(b=!0,Z=!0,ht=!0){let ot=0;if(b){let lt=!1;if(tt!==null){const Gt=tt.texture.format;lt=M.has(Gt)}if(lt){const Gt=tt.texture.type,Yt=x.has(Gt),Pt=he.getClearColor(),Qt=he.getClearAlpha(),Jt=Pt.r,ce=Pt.g,me=Pt.b;Yt?(N[0]=Jt,N[1]=ce,N[2]=me,N[3]=Qt,Y.clearBufferuiv(Y.COLOR,0,N)):(G[0]=Jt,G[1]=ce,G[2]=me,G[3]=Qt,Y.clearBufferiv(Y.COLOR,0,G))}else ot|=Y.COLOR_BUFFER_BIT}Z&&(ot|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ht&&(ot|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&Y.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),I=b},this.dispose=function(){i.removeEventListener("webglcontextlost",Le,!1),i.removeEventListener("webglcontextrestored",pe,!1),i.removeEventListener("webglcontextcreationerror",ai,!1),he.dispose(),Ft.dispose(),zt.dispose(),ct.dispose(),wt.dispose(),Tt.dispose(),qt.dispose(),At.dispose(),Ut.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",Er),kt.removeEventListener("sessionend",Ha),ki.stop()};function Le(b){b.preventDefault(),tS("WebGLRenderer: Context Lost."),D=!0}function pe(){tS("WebGLRenderer: Context Restored."),D=!1;const b=at.autoReset,Z=se.enabled,ht=se.autoUpdate,ot=se.needsUpdate,lt=se.type;$t(),at.autoReset=b,se.enabled=Z,se.autoUpdate=ht,se.needsUpdate=ot,se.type=lt}function ai(b){He("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function vi(b){const Z=b.target;Z.removeEventListener("dispose",vi),Qc(Z)}function Qc(b){es(b),ct.remove(b)}function es(b){const Z=ct.get(b).programs;Z!==void 0&&(Z.forEach(function(ht){Ut.releaseProgram(ht)}),b.isShaderMaterial&&Ut.releaseShaderCache(b))}this.renderBufferDirect=function(b,Z,ht,ot,lt,Gt){Z===null&&(Z=je);const Yt=lt.isMesh&&lt.matrixWorld.determinantAffine()<0,Pt=Mo(b,Z,ht,ot,lt);y.setMaterial(ot,Yt);let Qt=ht.index,Jt=1;if(ot.wireframe===!0){if(Qt=_t.getWireframeAttribute(ht),Qt===void 0)return;Jt=2}const ce=ht.drawRange,me=ht.attributes.position;let Zt=ce.start*Jt,Te=(ce.start+ce.count)*Jt;Gt!==null&&(Zt=Math.max(Zt,Gt.start*Jt),Te=Math.min(Te,(Gt.start+Gt.count)*Jt)),Qt!==null?(Zt=Math.max(Zt,0),Te=Math.min(Te,Qt.count)):me!=null&&(Zt=Math.max(Zt,0),Te=Math.min(Te,me.count));const Me=Te-Zt;if(Me<0||Me===1/0)return;qt.setup(lt,ot,Pt,ht,Qt);let Ke,Xe=Nt;if(Qt!==null&&(Ke=Lt.get(Qt),Xe=Et,Xe.setIndex(Ke)),lt.isMesh)ot.wireframe===!0?(y.setLineWidth(ot.wireframeLinewidth*Se()),Xe.setMode(Y.LINES)):Xe.setMode(Y.TRIANGLES);else if(lt.isLine){let Sn=ot.linewidth;Sn===void 0&&(Sn=1),y.setLineWidth(Sn*Se()),lt.isLineSegments?Xe.setMode(Y.LINES):lt.isLineLoop?Xe.setMode(Y.LINE_LOOP):Xe.setMode(Y.LINE_STRIP)}else lt.isPoints?Xe.setMode(Y.POINTS):lt.isSprite&&Xe.setMode(Y.TRIANGLES);if(lt.isBatchedMesh)if(Be.get("WEBGL_multi_draw"))Xe.renderMultiDraw(lt._multiDrawStarts,lt._multiDrawCounts,lt._multiDrawCount);else{const Sn=lt._multiDrawStarts,Vt=lt._multiDrawCounts,un=lt._multiDrawCount,Oe=Qt?Lt.get(Qt).bytesPerElement:1,Xn=ct.get(ot).currentProgram.getUniforms();for(let ri=0;ri<un;ri++)Xn.setValue(Y,"_gl_DrawID",ri),Xe.render(Sn[ri]/Oe,Vt[ri])}else if(lt.isInstancedMesh)Xe.renderInstances(Zt,Me,lt.count);else if(ht.isInstancedBufferGeometry){const Sn=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,Vt=Math.min(ht.instanceCount,Sn);Xe.renderInstances(Zt,Me,Vt)}else Xe.render(Zt,Me)};function yr(b,Z,ht,ot){I!==null&&b.isNodeMaterial&&I.setObject(ot,b),oe===!0&&Wt.setState(b,ht,!1),b.transparent===!0&&b.side===La&&b.forceSinglePass===!1?(b.side=ni,b.needsUpdate=!0,Tr(b,Z,ot),b.side=Xi,b.needsUpdate=!0,Tr(b,Z,ot),b.side=La):Tr(b,Z,ot)}this.compile=function(b,Z,ht=null){ht===null&&(ht=b),I!==null&&I.renderStart(b,Z,ht),U=zt.get(ht),U.init(Z),E.push(U),ht.traverseVisible(function(lt){lt.isLight&&lt.layers.test(Z.layers)&&(U.pushLight(lt),lt.castShadow&&U.pushShadow(lt))}),b!==ht&&b.traverseVisible(function(lt){lt.isLight&&lt.layers.test(Z.layers)&&(U.pushLight(lt),lt.castShadow&&U.pushShadow(lt))}),U.setupLights(),I!==null&&I.updateLights(U.state.lightsArray),ne=this.localClippingEnabled,oe=Wt.init(this.clippingPlanes,ne),oe===!0&&Wt.setGlobalState(this.clippingPlanes,Z),I!==null&&se.render(U.state.shadowsArray,ht,Z);const ot=new Set;return b.traverse(function(lt){if(!(lt.isMesh||lt.isPoints||lt.isLine||lt.isSprite))return;const Gt=lt.material;if(Gt)if(Array.isArray(Gt))for(let Yt=0;Yt<Gt.length;Yt++){const Pt=Gt[Yt];yr(Pt,ht,Z,lt),ot.add(Pt)}else yr(Gt,ht,Z,lt),ot.add(Gt)}),U=E.pop(),I!==null&&I.renderEnd(),ot},this.compileAsync=function(b,Z,ht=null){const ot=this.compile(b,Z,ht);return new Promise(lt=>{function Gt(){if(ot.forEach(function(Yt){const Qt=ct.get(Yt).currentProgram;(Qt===void 0||Qt.isReady())&&ot.delete(Yt)}),ot.size===0){lt(b);return}setTimeout(Gt,10)}Be.get("KHR_parallel_shader_compile")!==null?Gt():setTimeout(Gt,10)})};let Ba=null;function ha(b){Ba&&Ba(b)}function Er(){ki.stop()}function Ha(){ki.start()}const ki=new Qx;ki.setAnimationLoop(ha),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(b){Ba=b,kt.setAnimationLoop(b),b===null?ki.stop():ki.start()},kt.addEventListener("sessionstart",Er),kt.addEventListener("sessionend",Ha),this.render=function(b,Z){if(Z!==void 0&&Z.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(b,Z);const ht=kt.enabled===!0&&kt.isPresenting===!0,ot=O!==null&&(tt===null||ht)&&O.begin(R,tt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(Z),Z=kt.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,Z,tt),U=zt.get(b,E.length),U.init(Z),U.state.textureUnits=gt.getTextureUnits(),E.push(U),Ht.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),re.setFromProjectionMatrix(Ht,la,Z.reversedDepth),ne=this.localClippingEnabled,oe=Wt.init(this.clippingPlanes,ne),L=Ft.get(b,F.length),L.init(),F.push(L),kt.enabled===!0&&kt.isPresenting===!0){const Yt=R.xr.getDepthSensingMesh();Yt!==null&&go(Yt,Z,-1/0,R.sortObjects)}go(b,Z,0,R.sortObjects),L.finish(),I!==null&&I.updateLights(U.state.lightsArray),R.sortObjects===!0&&L.sort(St,Ct),Ue=kt.enabled===!1||kt.isPresenting===!1||kt.hasDepthSensing()===!1,Ue&&he.addToRenderList(L,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Wt.beginShadows();const lt=U.state.shadowsArray;if(se.render(lt,b,Z),oe===!0&&Wt.endShadows(),(ot&&O.hasRenderPass())===!1){const Yt=L.opaque,Pt=L.transmissive;if(U.setupLights(),Z.isArrayCamera){const Qt=Z.cameras;if(Pt.length>0)for(let Jt=0,ce=Qt.length;Jt<ce;Jt++){const me=Qt[Jt];ns(Yt,Pt,b,me)}Ue&&he.render(b);for(let Jt=0,ce=Qt.length;Jt<ce;Jt++){const me=Qt[Jt];_o(L,b,me,me.viewport)}}else Pt.length>0&&ns(Yt,Pt,b,Z),Ue&&he.render(b),_o(L,b,Z)}tt!==null&&W===0&&(gt.updateMultisampleRenderTarget(tt),gt.updateRenderTargetMipmap(tt)),ot&&O.end(R),b.isScene===!0&&b.onAfterRender(R,b,Z),qt.resetDefaultState(),it=-1,pt=null,E.pop(),E.length>0?(U=E[E.length-1],gt.setTextureUnits(U.state.textureUnits),oe===!0&&Wt.setGlobalState(R.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?L=F[F.length-1]:L=null,I!==null&&I.renderEnd()};function go(b,Z,ht,ot){if(b.visible===!1)return;if(b.layers.test(Z.layers)){if(b.isGroup)ht=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Z);else if(b.isLightProbeGrid)U.pushLightProbeGrid(b);else if(b.isLight)U.pushLight(b),b.castShadow&&U.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(re)){ot&&Ne.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ht);const Yt=Tt.update(b),Pt=b.material;Pt.visible&&L.push(b,Yt,Pt,ht,Ne.z,null,Z)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(re))){const Yt=Tt.update(b),Pt=b.material;if(ot&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ne.copy(b.boundingSphere.center)):(Yt.boundingSphere===null&&Yt.computeBoundingSphere(),Ne.copy(Yt.boundingSphere.center)),Ne.applyMatrix4(b.matrixWorld).applyMatrix4(Ht)),Array.isArray(Pt)){const Qt=Yt.groups;for(let Jt=0,ce=Qt.length;Jt<ce;Jt++){const me=Qt[Jt],Zt=Pt[me.materialIndex];Zt&&Zt.visible&&L.push(b,Yt,Zt,ht,Ne.z,me,Z)}}else Pt.visible&&L.push(b,Yt,Pt,ht,Ne.z,null,Z)}}const Gt=b.children;for(let Yt=0,Pt=Gt.length;Yt<Pt;Yt++)go(Gt[Yt],Z,ht,ot)}function _o(b,Z,ht,ot){const{opaque:lt,transmissive:Gt,transparent:Yt}=b;U.setupLightsView(ht),oe===!0&&Wt.setGlobalState(R.clippingPlanes,ht),ot&&y.viewport(xt.copy(ot)),lt.length>0&&qi(lt,Z,ht),Gt.length>0&&qi(Gt,Z,ht),Yt.length>0&&qi(Yt,Z,ht),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ns(b,Z,ht,ot){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ot.id]===void 0){const Zt=Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ot.id]=new Gi(1,1,{generateMipmaps:!0,type:Zt?fa:gi,minFilter:Qr,samples:Math.max(4,z.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Pe.workingColorSpace})}const Gt=U.state.transmissionRenderTarget[ot.id],Yt=ot.viewport||xt;Gt.setSize(Yt.z*R.transmissionResolutionScale,Yt.w*R.transmissionResolutionScale);const Pt=R.getRenderTarget(),Qt=R.getActiveCubeFace(),Jt=R.getActiveMipmapLevel();R.setRenderTarget(Gt),R.getClearColor(V),mt=R.getClearAlpha(),mt<1&&R.setClearColor(16777215,.5),R.clear(),Ue&&he.render(ht);const ce=R.toneMapping;R.toneMapping=ua;const me=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),U.setupLightsView(ot),oe===!0&&Wt.setGlobalState(R.clippingPlanes,ot),qi(b,ht,ot),gt.updateMultisampleRenderTarget(Gt),gt.updateRenderTargetMipmap(Gt),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Te=0,Me=Z.length;Te<Me;Te++){const Ke=Z[Te],{object:Xe,geometry:Sn,material:Vt,group:un}=Ke;if(Vt.side===La&&Xe.layers.test(ot.layers)){const Oe=Vt.side;Vt.side=ni,Vt.needsUpdate=!0,Ol(Xe,ht,ot,Sn,Vt,un),Vt.side=Oe,Vt.needsUpdate=!0,Zt=!0}}Zt===!0&&(gt.updateMultisampleRenderTarget(Gt),gt.updateRenderTargetMipmap(Gt))}R.setRenderTarget(Pt,Qt,Jt),R.setClearColor(V,mt),me!==void 0&&(ot.viewport=me),R.toneMapping=ce}function qi(b,Z,ht){const ot=Z.isScene===!0?Z.overrideMaterial:null;for(let lt=0,Gt=b.length;lt<Gt;lt++){const Yt=b[lt],{object:Pt,geometry:Qt,group:Jt}=Yt;let ce=Yt.material;ce.allowOverride===!0&&ot!==null&&(ce=ot),Pt.layers.test(ht.layers)&&Ol(Pt,Z,ht,Qt,ce,Jt)}}function Ol(b,Z,ht,ot,lt,Gt){I!==null&&lt.isNodeMaterial&&I.setObject(b,lt),b.onBeforeRender(R,Z,ht,ot,lt,Gt),b.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),lt.onBeforeRender(R,Z,ht,ot,b,Gt),lt.transparent===!0&&lt.side===La&&lt.forceSinglePass===!1?(lt.side=ni,lt.needsUpdate=!0,R.renderBufferDirect(ht,Z,ot,lt,b,Gt),lt.side=Xi,lt.needsUpdate=!0,R.renderBufferDirect(ht,Z,ot,lt,b,Gt),lt.side=La):R.renderBufferDirect(ht,Z,ot,lt,b,Gt),b.onAfterRender(R,Z,ht,ot,lt,Gt)}function Tr(b,Z,ht){Z.isScene!==!0&&(Z=je);const ot=ct.get(b),lt=U.state.lights,Gt=U.state.shadowsArray,Yt=lt.state.version,Pt=Ut.getParameters(b,lt.state,Gt,Z,ht,U.state.lightProbeGridArray),Qt=Ut.getProgramCacheKey(Pt);let Jt=ot.programs;ot.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?Z.environment:null,ot.fog=Z.fog;const ce=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;ot.envMap=wt.get(b.envMap||ot.environment,ce),ot.envMapRotation=ot.environment!==null&&b.envMap===null?Z.environmentRotation:b.envMapRotation,Jt===void 0&&(b.addEventListener("dispose",vi),Jt=new Map,ot.programs=Jt);let me=Jt.get(Qt);if(me!==void 0){if(ot.currentProgram===me&&ot.lightsStateVersion===Yt)return So(b,Pt),me}else Pt.uniforms=Ut.getUniforms(b),I!==null&&b.isNodeMaterial&&I.build(b,ht,Pt),b.onBeforeCompile(Pt,R),me=Ut.acquireProgram(Pt,Qt),Jt.set(Qt,me),ot.uniforms=Pt.uniforms;const Zt=ot.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Zt.clippingPlanes=Wt.uniform),So(b,Pt),ot.needsLights=Il(b),ot.lightsStateVersion=Yt,ot.needsLights&&(Zt.ambientLightColor.value=lt.state.ambient,Zt.lightProbe.value=lt.state.probe,Zt.sunLights.value=lt.state.sun,Zt.sunLightShadows.value=lt.state.sunShadow,Zt.directionalLights.value=lt.state.directional,Zt.directionalLightShadows.value=lt.state.directionalShadow,Zt.spotLights.value=lt.state.spot,Zt.spotLightShadows.value=lt.state.spotShadow,Zt.rectAreaLights.value=lt.state.rectArea,Zt.ltc_1.value=lt.state.rectAreaLTC1,Zt.ltc_2.value=lt.state.rectAreaLTC2,Zt.pointLights.value=lt.state.point,Zt.pointLightShadows.value=lt.state.pointShadow,Zt.hemisphereLights.value=lt.state.hemi,Zt.sunShadowMatrix.value=lt.state.sunShadowMatrix,Zt.sunShadowCascade.value=lt.state.sunShadowCascade,Zt.directionalShadowMatrix.value=lt.state.directionalShadowMatrix,Zt.spotLightMatrix.value=lt.state.spotLightMatrix,Zt.spotLightMap.value=lt.state.spotLightMap,Zt.pointShadowMatrix.value=lt.state.pointShadowMatrix),ot.lightProbeGrid=U.state.lightProbeGridArray.length>0,ot.currentProgram=me,ot.uniformsList=null,me}function vo(b){if(b.uniformsList===null){const Z=b.currentProgram.getUniforms();b.uniformsList=Nc.seqWithValue(Z.seq,b.uniforms)}return b.uniformsList}function So(b,Z){const ht=ct.get(b);ht.outputColorSpace=Z.outputColorSpace,ht.batching=Z.batching,ht.batchingColor=Z.batchingColor,ht.instancing=Z.instancing,ht.instancingColor=Z.instancingColor,ht.instancingMorph=Z.instancingMorph,ht.skinning=Z.skinning,ht.morphTargets=Z.morphTargets,ht.morphNormals=Z.morphNormals,ht.morphColors=Z.morphColors,ht.morphTargetsCount=Z.morphTargetsCount,ht.numClippingPlanes=Z.numClippingPlanes,ht.numIntersection=Z.numClipIntersection,ht.vertexAlphas=Z.vertexAlphas,ht.vertexTangents=Z.vertexTangents,ht.toneMapping=Z.toneMapping}function xo(b,Z){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;w.setFromMatrixPosition(Z.matrixWorld);for(let ht=0,ot=b.length;ht<ot;ht++){const lt=b[ht];if(lt.texture!==null&&lt.boundingBox.containsPoint(w))return lt}return null}function Mo(b,Z,ht,ot,lt){Z.isScene!==!0&&(Z=je),gt.resetTextureUnits();const Gt=Z.fog,Yt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?Z.environment:null,Pt=tt===null?R.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Pe.workingColorSpace,Qt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,Jt=wt.get(ot.envMap||Yt,Qt),ce=ot.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,me=!!ht.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Zt=!!ht.morphAttributes.position,Te=!!ht.morphAttributes.normal,Me=!!ht.morphAttributes.color;let Ke=ua;ot.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ke=R.toneMapping);const Xe=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Sn=Xe!==void 0?Xe.length:0,Vt=ct.get(ot),un=U.state.lights;if(oe===!0&&(ne===!0||b!==pt)){const Ce=b===pt&&ot.id===it;Wt.setState(ot,b,Ce)}let Oe=!1;ot.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==un.state.version||Vt.outputColorSpace!==Pt||lt.isBatchedMesh&&Vt.batching===!1||!lt.isBatchedMesh&&Vt.batching===!0||lt.isBatchedMesh&&Vt.batchingColor===!0&&lt._colorsTexture===null||lt.isBatchedMesh&&Vt.batchingColor===!1&&lt._colorsTexture!==null||lt.isInstancedMesh&&Vt.instancing===!1||!lt.isInstancedMesh&&Vt.instancing===!0||lt.isSkinnedMesh&&Vt.skinning===!1||!lt.isSkinnedMesh&&Vt.skinning===!0||lt.isInstancedMesh&&Vt.instancingColor===!0&&lt.instanceColor===null||lt.isInstancedMesh&&Vt.instancingColor===!1&&lt.instanceColor!==null||lt.isInstancedMesh&&Vt.instancingMorph===!0&&lt.morphTexture===null||lt.isInstancedMesh&&Vt.instancingMorph===!1&&lt.morphTexture!==null||Vt.envMap!==Jt||ot.fog===!0&&Vt.fog!==Gt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Wt.numPlanes||Vt.numIntersection!==Wt.numIntersection)||Vt.vertexAlphas!==ce||Vt.vertexTangents!==me||Vt.morphTargets!==Zt||Vt.morphNormals!==Te||Vt.morphColors!==Me||Vt.toneMapping!==Ke||Vt.morphTargetsCount!==Sn||!!Vt.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(Oe=!0):(Oe=!0,Vt.__version=ot.version);let Xn=Vt.currentProgram;Oe===!0&&(Xn=Tr(ot,Z,lt),I&&ot.isNodeMaterial&&I.onUpdateProgram(ot,Xn,Vt));let ri=!1,Wi=!1,ye=!1;const Ge=Xn.getUniforms(),$e=Vt.uniforms;if(y.useProgram(Xn.program)&&(ri=!0,Wi=!0,ye=!0),ot.id!==it&&(it=ot.id,Wi=!0),Vt.needsLights){const Ce=xo(U.state.lightProbeGridArray,lt);Vt.lightProbeGrid!==Ce&&(Vt.lightProbeGrid=Ce,Wi=!0)}if(ri||pt!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ge.setValue(Y,"projectionMatrix",b.projectionMatrix),Ge.setValue(Y,"viewMatrix",b.matrixWorldInverse);const cn=Ge.map.cameraPosition;cn!==void 0&&cn.setValue(Y,ie.setFromMatrixPosition(b.matrixWorld)),z.logarithmicDepthBuffer&&Ge.setValue(Y,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ge.setValue(Y,"isOrthographic",b.isOrthographicCamera===!0),pt!==b&&(pt=b,Wi=!0,ye=!0)}if(Vt.needsLights&&(un.state.sunShadowMap.length>0&&Ge.setValue(Y,"sunShadowMap",un.state.sunShadowMap,gt),un.state.directionalShadowMap.length>0&&Ge.setValue(Y,"directionalShadowMap",un.state.directionalShadowMap,gt),un.state.spotShadowMap.length>0&&Ge.setValue(Y,"spotShadowMap",un.state.spotShadowMap,gt),un.state.pointShadowMap.length>0&&Ge.setValue(Y,"pointShadowMap",un.state.pointShadowMap,gt)),lt.isSkinnedMesh){Ge.setOptional(Y,lt,"bindMatrix"),Ge.setOptional(Y,lt,"bindMatrixInverse");const Ce=lt.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),Ge.setValue(Y,"boneTexture",Ce.boneTexture,gt))}lt.isBatchedMesh&&(Ge.setOptional(Y,lt,"batchingTexture"),Ge.setValue(Y,"batchingTexture",lt._matricesTexture,gt),Ge.setOptional(Y,lt,"batchingIdTexture"),Ge.setValue(Y,"batchingIdTexture",lt._indirectTexture,gt),Ge.setOptional(Y,lt,"batchingColorTexture"),lt._colorsTexture!==null&&Ge.setValue(Y,"batchingColorTexture",lt._colorsTexture,gt));const si=ht.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&J.update(lt,ht,Xn),(Wi||Vt.receiveShadow!==lt.receiveShadow)&&(Vt.receiveShadow=lt.receiveShadow,Ge.setValue(Y,"receiveShadow",lt.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&Z.environment!==null&&($e.envMapIntensity.value=Z.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=_C()),Wi){if(Ge.setValue(Y,"toneMappingExposure",R.toneMappingExposure),Vt.needsLights&&Pl($e,ye),Gt&&ot.fog===!0&&te.refreshFogUniforms($e,Gt),te.refreshMaterialUniforms($e,ot,rt,X,U.state.transmissionRenderTarget[b.id]),Vt.needsLights&&Vt.lightProbeGrid){const Ce=Vt.lightProbeGrid;$e.probesSH.value=Ce.texture,$e.probesMin.value.copy(Ce.boundingBox.min),$e.probesMax.value.copy(Ce.boundingBox.max),$e.probesResolution.value.copy(Ce.resolution)}Nc.upload(Y,vo(Vt),$e,gt)}if(ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Nc.upload(Y,vo(Vt),$e,gt),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ge.setValue(Y,"center",lt.center),Ge.setValue(Y,"modelViewMatrix",lt.modelViewMatrix),Ge.setValue(Y,"normalMatrix",lt.normalMatrix),Ge.setValue(Y,"modelMatrix",lt.matrixWorld),ot.uniformsGroups!==void 0){const Ce=ot.uniformsGroups;for(let cn=0,pa=Ce.length;cn<pa;cn++){const zl=Ce[cn];At.update(zl,Xn),At.bind(zl,Xn)}}return Xn}function Pl(b,Z){b.ambientLightColor.needsUpdate=Z,b.lightProbe.needsUpdate=Z,b.sunLights.needsUpdate=Z,b.sunLightShadows.needsUpdate=Z,b.directionalLights.needsUpdate=Z,b.directionalLightShadows.needsUpdate=Z,b.pointLights.needsUpdate=Z,b.pointLightShadows.needsUpdate=Z,b.spotLights.needsUpdate=Z,b.spotLightShadows.needsUpdate=Z,b.rectAreaLights.needsUpdate=Z,b.hemisphereLights.needsUpdate=Z}function Il(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(b,Z,ht){const ot=ct.get(b);ot.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),ct.get(b.texture).__webglTexture=Z,ct.get(b.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ht,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,Z){const ht=ct.get(b);ht.__webglFramebuffer=Z,ht.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(b,Z=0,ht=0){tt=b,q=Z,W=ht;let ot=null,lt=!1,Gt=!1;if(b){const Pt=ct.get(b);if(Pt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(Y.FRAMEBUFFER,Pt.__webglFramebuffer),xt.copy(b.viewport),Bt.copy(b.scissor),Dt=b.scissorTest,y.viewport(xt),y.scissor(Bt),y.setScissorTest(Dt),it=-1;return}else if(Pt.__webglFramebuffer===void 0)gt.setupRenderTarget(b);else if(Pt.__hasExternalTextures)gt.rebindTextures(b,ct.get(b.texture).__webglTexture,ct.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ce=b.depthTexture;if(Pt.__boundDepthTexture!==ce){if(ce!==null&&ct.has(ce)&&(b.width!==ce.image.width||b.height!==ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(b)}}const Qt=b.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Gt=!0);const Jt=ct.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Jt[Z])?ot=Jt[Z][ht]:ot=Jt[Z],lt=!0):b.samples>0&&gt.useMultisampledRTT(b)===!1?ot=ct.get(b).__webglMultisampledFramebuffer:Array.isArray(Jt)?ot=Jt[ht]:ot=Jt,xt.copy(b.viewport),Bt.copy(b.scissor),Dt=b.scissorTest}else xt.copy(ft).multiplyScalar(rt).floor(),Bt.copy(Rt).multiplyScalar(rt).floor(),Dt=le;if(ht!==0&&(ot=k),y.bindFramebuffer(Y.FRAMEBUFFER,ot)&&y.drawBuffers(b,ot),y.viewport(xt),y.scissor(Bt),y.setScissorTest(Dt),lt){const Pt=ct.get(b.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Pt.__webglTexture,ht)}else if(Gt){const Pt=Z;for(let Qt=0;Qt<b.textures.length;Qt++){const Jt=ct.get(b.textures[Qt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Qt,Jt.__webglTexture,ht,Pt)}}else if(b!==null&&ht!==0){const Pt=ct.get(b.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Pt.__webglTexture,ht)}it=-1};function Si(b){const Z=ct.get(b);return(Z.__readFormat!==b.format||Z.__readType!==b.type)&&(Z.__readFormat=b.format,Z.__readType=b.type,Z.__formatReadable=z.textureFormatReadable(b.format),Z.__typeReadable=z.textureTypeReadable(b.type)),Z}this.readRenderTargetPixels=function(b,Z,ht,ot,lt,Gt,Yt,Pt=0){if(!(b&&b.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Yt!==void 0&&(Qt=Qt[Yt]),Qt){y.bindFramebuffer(Y.FRAMEBUFFER,Qt);try{const Jt=b.textures[Pt],ce=Jt.format,me=Jt.type;b.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Pt);const Zt=Si(Jt);if(Zt.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Zt.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=b.width-ot&&ht>=0&&ht<=b.height-lt&&Y.readPixels(Z,ht,ot,lt,Ot.convert(ce),Ot.convert(me),Gt)}finally{const Jt=tt!==null?ct.get(tt).__webglFramebuffer:null;y.bindFramebuffer(Y.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(b,Z,ht,ot,lt,Gt,Yt,Pt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Yt!==void 0&&(Qt=Qt[Yt]),Qt)if(Z>=0&&Z<=b.width-ot&&ht>=0&&ht<=b.height-lt){y.bindFramebuffer(Y.FRAMEBUFFER,Qt);const Jt=b.textures[Pt],ce=Jt.format,me=Jt.type;b.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Pt);const Zt=Si(Jt);if(Zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Te),Y.bufferData(Y.PIXEL_PACK_BUFFER,Gt.byteLength,Y.STREAM_READ),Y.readPixels(Z,ht,ot,lt,Ot.convert(ce),Ot.convert(me),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const Me=tt!==null?ct.get(tt).__webglFramebuffer:null;y.bindFramebuffer(Y.FRAMEBUFFER,Me);const Ke=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await zT(Y,Ke,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Te),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Gt),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Te),Y.deleteSync(Ke),Gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,Z=null,ht=0){const ot=Math.pow(2,-ht),lt=Math.floor(b.image.width*ot),Gt=Math.floor(b.image.height*ot),Yt=Z!==null?Z.x:0,Pt=Z!==null?Z.y:0;gt.setTexture2D(b,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ht,0,0,Yt,Pt,lt,Gt),y.unbindTexture()},this.copyTextureToTexture=function(b,Z,ht=null,ot=null,lt=0,Gt=0){let Yt,Pt,Qt,Jt,ce,me,Zt,Te,Me;const Ke=b.isCompressedTexture?b.mipmaps[Gt]:b.image;if(ht!==null)Yt=ht.max.x-ht.min.x,Pt=ht.max.y-ht.min.y,Qt=ht.isBox3?ht.max.z-ht.min.z:1,Jt=ht.min.x,ce=ht.min.y,me=ht.isBox3?ht.min.z:0;else{const $e=Math.pow(2,-lt);Yt=Math.floor(Ke.width*$e),Pt=Math.floor(Ke.height*$e),b.isDataArrayTexture?Qt=Ke.depth:b.isData3DTexture?Qt=Math.floor(Ke.depth*$e):Qt=1,Jt=0,ce=0,me=0}ot!==null?(Zt=ot.x,Te=ot.y,Me=ot.z):(Zt=0,Te=0,Me=0);const Xe=Ot.convert(Z.format),Sn=Ot.convert(Z.type);let Vt;Z.isData3DTexture?(gt.setTexture3D(Z,0),Vt=Y.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(gt.setTexture2DArray(Z,0),Vt=Y.TEXTURE_2D_ARRAY):(gt.setTexture2D(Z,0),Vt=Y.TEXTURE_2D),y.activeTexture(Y.TEXTURE0),y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Z.flipY),y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),y.pixelStorei(Y.UNPACK_ALIGNMENT,Z.unpackAlignment);const un=y.getParameter(Y.UNPACK_ROW_LENGTH),Oe=y.getParameter(Y.UNPACK_IMAGE_HEIGHT),Xn=y.getParameter(Y.UNPACK_SKIP_PIXELS),ri=y.getParameter(Y.UNPACK_SKIP_ROWS),Wi=y.getParameter(Y.UNPACK_SKIP_IMAGES);y.pixelStorei(Y.UNPACK_ROW_LENGTH,Ke.width),y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ke.height),y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Jt),y.pixelStorei(Y.UNPACK_SKIP_ROWS,ce),y.pixelStorei(Y.UNPACK_SKIP_IMAGES,me);const ye=b.isDataArrayTexture||b.isData3DTexture,Ge=Z.isDataArrayTexture||Z.isData3DTexture;if(b.isDepthTexture){const $e=ct.get(b),si=ct.get(Z),Ce=ct.get($e.__renderTarget),cn=ct.get(si.__renderTarget);y.bindFramebuffer(Y.READ_FRAMEBUFFER,Ce.__webglFramebuffer),y.bindFramebuffer(Y.DRAW_FRAMEBUFFER,cn.__webglFramebuffer);for(let pa=0;pa<Qt;pa++)ye&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ct.get(b).__webglTexture,lt,me+pa),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ct.get(Z).__webglTexture,Gt,Me+pa)),Y.blitFramebuffer(Jt,ce,Yt,Pt,Zt,Te,Yt,Pt,Y.DEPTH_BUFFER_BIT,Y.NEAREST);y.bindFramebuffer(Y.READ_FRAMEBUFFER,null),y.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(lt!==0||b.isRenderTargetTexture||ct.has(b)){const $e=ct.get(b),si=ct.get(Z);y.bindFramebuffer(Y.READ_FRAMEBUFFER,H),y.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Q);for(let Ce=0;Ce<Qt;Ce++)ye?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,$e.__webglTexture,lt,me+Ce):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,$e.__webglTexture,lt),Ge?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,si.__webglTexture,Gt,Me+Ce):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,si.__webglTexture,Gt),lt!==0?Y.blitFramebuffer(Jt,ce,Yt,Pt,Zt,Te,Yt,Pt,Y.COLOR_BUFFER_BIT,Y.NEAREST):Ge?Y.copyTexSubImage3D(Vt,Gt,Zt,Te,Me+Ce,Jt,ce,Yt,Pt):Y.copyTexSubImage2D(Vt,Gt,Zt,Te,Jt,ce,Yt,Pt);y.bindFramebuffer(Y.READ_FRAMEBUFFER,null),y.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Ge?b.isDataTexture||b.isData3DTexture?Y.texSubImage3D(Vt,Gt,Zt,Te,Me,Yt,Pt,Qt,Xe,Sn,Ke.data):Z.isCompressedArrayTexture?Y.compressedTexSubImage3D(Vt,Gt,Zt,Te,Me,Yt,Pt,Qt,Xe,Ke.data):Y.texSubImage3D(Vt,Gt,Zt,Te,Me,Yt,Pt,Qt,Xe,Sn,Ke):b.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Gt,Zt,Te,Yt,Pt,Xe,Sn,Ke.data):b.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Gt,Zt,Te,Ke.width,Ke.height,Xe,Ke.data):Y.texSubImage2D(Y.TEXTURE_2D,Gt,Zt,Te,Yt,Pt,Xe,Sn,Ke);y.pixelStorei(Y.UNPACK_ROW_LENGTH,un),y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Oe),y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Xn),y.pixelStorei(Y.UNPACK_SKIP_ROWS,ri),y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Wi),Gt===0&&Z.generateMipmaps&&Y.generateMipmap(Vt),y.unbindTexture()},this.initRenderTarget=function(b){ct.get(b).__webglFramebuffer===void 0&&gt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?gt.setTextureCube(b,0):b.isData3DTexture?gt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?gt.setTexture2DArray(b,0):gt.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){q=0,W=0,tt=null,y.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Pe._getDrawingBufferColorSpace(e),i.unpackColorSpace=Pe._getUnpackColorSpace()}}const ro=Math.PI/180,jp=3,aM=7,vC=.98,kS=10,SC=85,Vi=o=>1-(1-o)**3,rM=o=>new rn().setFromEuler(new ii(o.x*ro,o.y*ro,o.z*ro,"XYZ")),yl=o=>(o%360+540)%360-180,sM=o=>{const e=new j(o.x,o.y,o.z),i=e.length();return i<1e-9?new j(0,1,0):(e.divideScalar(i),o.w<0&&e.negate(),e)},xC=(o,e)=>{const i=c=>rM({x:o.x+(e.x-o.x)*Vi(c),y:o.y+(e.y-o.y)*Vi(c),z:o.z+(e.z-o.z)*Vi(c)}),r=i(vC),u=i(1);return sM(u.multiply(r.clone().invert()))},Kc=(o,e,i)=>{const r=rM(o),u=sM(r.clone().invert().multiply(e)).applyQuaternion(r).normalize(),c=Math.random()*Math.PI,d=new rn().setFromAxisAngle(u,-c).multiply(e),h=new ii().setFromQuaternion(d,"XYZ"),p={x:h.x/ro,y:h.y/ro,z:h.z/ro},m=[];for(let _=jp;_<=aM;_++){const v=i-_;if(!(v<1))for(const T of[1,-1])for(const C of[1,-1])for(const P of[1,-1]){const M={x:o.x+T*360*_,y:o.y+C*360*v,z:o.z+P*360*i};M.x+=yl(p.x-M.x),M.y+=yl(p.y-M.y),M.z+=yl(p.z-M.z);const x=xC(o,M).dot(u);m.push({rotation:M,dot:x})}}const S=m.filter(_=>_.dot>0);return S.length>0?S[Math.floor(Math.random()*S.length)].rotation:m.reduce((_,v)=>v.dot>_.dot?v:_).rotation},MC=(o,e,i)=>{const r=jp+Math.floor(Math.random()*(aM-jp+1)),u=i-r,c=Math.random()<.5?-1:1,d=Math.random()<.5?-1:1,h=T=>T*(kS+Math.random()*(SC-kS)),p=h(c),m=h(d),S={x:o.x+c*360*r,y:o.y+d*360*u},_={x:S.x+yl(e.x-S.x-p),y:S.y+yl(e.y-S.y-m)},v={x:_.x+p,y:_.y+m};return{spun:_,landed:v}},mo={red:{hex:14034996,cssTop:[214,40,52],cssBottom:[140,18,28],label:"#ffffff"},green:{hex:1096065,cssTop:[16,185,129],cssBottom:[5,150,105],label:"#ecfdf5"},white:{hex:15790320,cssTop:[240,240,240],cssBottom:[200,200,200],label:"#111827"},black:{hex:1052691,cssTop:[16,16,19],cssBottom:[3,3,5],label:"#ffffff"},blue:{hex:1785819,cssTop:[27,63,219],cssBottom:[17,38,140],label:"#ffffff"},yellow:{hex:16761856,cssTop:[255,196,0],cssBottom:[214,152,0],label:"#111827"}},yC=[6,8,10,12,20],EC=["red","green","white","black","blue","yellow"],op={sides:6,color:"red",translucent:!0},TC=.87,Ll=o=>o?TC:1;function bC(){const o=new URLSearchParams(window.location.search),e=Number(o.get("s")),i=yC.includes(e)?e:op.sides,r=o.get("c")?.toLowerCase(),u=r!==void 0&&EC.includes(r)?r:op.color,c=(o.get("translucent")??o.get("t"))?.toLowerCase(),d=c==="true"?!0:c==="false"?!1:op.translucent;return{sides:i,color:u,translucent:d}}const qS={1:{name:"front",orientation:{x:0,y:0}},2:{name:"top",orientation:{x:-90,y:0}},3:{name:"right",orientation:{x:0,y:-90}},4:{name:"left",orientation:{x:0,y:90}},5:{name:"bottom",orientation:{x:90,y:0}},6:{name:"back",orientation:{x:0,y:180}}},AC={1:[[2,2]],2:[[1,1],[3,3]],3:[[1,1],[2,2],[3,3]],4:[[1,1],[1,3],[3,1],[3,3]],5:[[1,1],[1,3],[2,2],[3,1],[3,3]],6:[[1,1],[1,3],[2,1],[2,3],[3,1],[3,3]]},WS=65,YS=.5,RC=10,lp=1500,ZS=750,CC=260,KS=(o,e,i)=>Math.min(i,Math.max(e,o)),QS=o=>Math.round(o*10)/10;function wC({value:o}){return ee.jsx(ee.Fragment,{children:AC[o].map(([e,i])=>ee.jsx("span",{className:"pip",style:{gridRow:e,gridColumn:i}},`${e}-${i}`))})}function DC({color:o="red",translucent:e=!0}){const[i,r]=bt.useState({x:0,y:0}),[u,c]=bt.useState({ms:0,easing:"linear"}),[d,h]=bt.useState(!1),[p,m]=bt.useState(!1),[S,_]=bt.useState(null),[v,T]=bt.useState(null),C=bt.useRef(null),P=bt.useRef(i),M=bt.useRef({x:0,y:0}),x=bt.useRef(null),N=bt.useRef(null),G=bt.useRef([]);P.current=i;const w=mo[o],L=Ll(e),U=`rgb(${w.cssTop.join(" ")} / ${L})`,F=`rgb(${w.cssBottom.join(" ")} / ${L})`,E=bt.useCallback((k,H,Q="ease-out")=>{c({ms:H,easing:Q}),r(k)},[]),O=bt.useCallback(async()=>{h(!0),_(null),T(null);try{const k=await Cl(6),H=qS[k],Q=P.current,{spun:q,landed:W}=MC(Q,H.orientation,RC);E(q,lp,"cubic-bezier(0.4, 0, 0.35, 1)"),G.current.push(setTimeout(()=>{M.current=W,E(W,ZS,"cubic-bezier(0.22, 1, 0.36, 1)")},lp)),G.current.push(setTimeout(()=>{h(!1),_(k)},lp+ZS))}catch(k){h(!1),T(k instanceof Error?k.message:"Roll failed.")}},[E]),R=bt.useCallback(k=>{if(d)return;const H=k.currentTarget.getBoundingClientRect();x.current={centerX:H.left+H.width/2,centerY:H.top+H.height/2,halfWidth:H.width/2,halfHeight:H.height/2,nx:0,ny:0},k.currentTarget.setPointerCapture(k.pointerId),m(!0),c({ms:0,easing:"linear"})},[d]),D=bt.useCallback(k=>{const H=x.current;H&&(H.nx=KS((k.clientX-H.centerX)/H.halfWidth,-1,1),H.ny=KS((k.clientY-H.centerY)/H.halfHeight,-1,1),!N.current&&(N.current=requestAnimationFrame(()=>{N.current=null;const Q=M.current;r({x:QS(Q.x-H.ny*WS),y:QS(Q.y+H.nx*WS)})})))},[]),I=bt.useCallback(()=>{const k=x.current;if(!k)return;x.current=null,m(!1),N.current&&(cancelAnimationFrame(N.current),N.current=null),Math.abs(k.nx)>=YS||Math.abs(k.ny)>=YS?O():E(M.current,CC,"cubic-bezier(0.34, 1.3, 0.64, 1)")},[E,O]);return bt.useEffect(()=>{const k=G.current;return()=>{k.forEach(clearTimeout),N.current&&cancelAnimationFrame(N.current)}},[]),ee.jsxs("div",{ref:C,className:"stage",style:{"--face-top":U,"--face-bottom":F,"--die-fg":w.label},onPointerDown:R,onPointerMove:D,onPointerUp:I,onPointerCancel:I,children:[ee.jsx("div",{className:"scene",children:ee.jsx("div",{className:`cube${d?" is-rolling":""}${p?" is-dragging":""}`,style:{transform:`translateZ(0) rotateX(${i.x}deg) rotateY(${i.y}deg)`,transitionDuration:`${u.ms}ms`,transitionTimingFunction:u.easing},children:Object.entries(qS).map(([k,H])=>ee.jsx("div",{className:`face face--${H.name}`,"data-value":k,children:ee.jsx("div",{className:"pips",children:ee.jsx(wC,{value:Number(k)})})},k))})}),ee.jsx("p",{className:"hint",children:d?"Rolling...":v||(S?`You rolled ${S}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const JS=65,jS=.5,NC=10,UC=1500,LC=750,OC=260,so=Math.PI/180,$S=1.08,tx=.864,ex=(o,e,i)=>Math.min(i,Math.max(e,o)),PC=[[1,1,1],[-1,1,1],[-1,1,-1],[1,1,-1],[1,-1,1],[-1,-1,1],[-1,-1,-1],[1,-1,-1]],IC=o=>{const e=new j(...o).normalize(),i=Math.abs(e.y)>.9?new j(0,0,1):new j(0,1,0),r=i.clone().sub(e.clone().multiplyScalar(i.dot(e))).normalize(),u=new j().crossVectors(r,e).normalize(),c=new nn().makeBasis(u,r,e);return{normal:e,up:r,orientation:new rn().setFromRotationMatrix(c)}},nx=PC.map(IC),zC=o=>{const e=new j(0,0,1),i=new rn().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new rn().setFromAxisAngle(new j(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},FC="#ffffff",ix=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 200px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.shadowColor="rgba(0, 0, 0, 0.35)",r.shadowBlur=6,r.fillText(String(o),128,136);const u=new Gc(i);u.colorSpace=Hn;const c=new ho({map:u,transparent:!0,side:Xi,depthWrite:!1});return new In(new Mr(tx,tx),c)},BC=o=>{const e=new ii().setFromQuaternion(o,"XYZ");return{x:e.x/so,y:e.y/so,z:e.z/so}};function HC({color:o="red",translucent:e=!0}){const i=bt.useRef(null),r=bt.useRef(null),u=bt.useRef(null),c=bt.useRef(null),d=bt.useRef(null),h=bt.useRef({x:0,y:0,z:0}),p=bt.useRef({x:0,y:0,z:0}),m=bt.useRef(null),S=bt.useRef(!1),[_,v]=bt.useState(!1),[T,C]=bt.useState(!1),[P,M]=bt.useState(null),[x,N]=bt.useState(null),G=bt.useCallback(R=>{h.current=R,r.current?.rotation.set(R.x*so,R.y*so,R.z*so)},[]),w=bt.useCallback((R,D)=>{d.current&&cancelAnimationFrame(d.current);const I={...h.current},k=performance.now();return new Promise(H=>{const Q=q=>{const W=Math.min((q-k)/D,1),tt=Vi(W);G({x:I.x+(R.x-I.x)*tt,y:I.y+(R.y-I.y)*tt,z:I.z+(R.z-I.z)*tt}),W<1?d.current=requestAnimationFrame(Q):(d.current=null,H())};d.current=requestAnimationFrame(Q)})},[G]),L=bt.useCallback((R,D)=>{d.current&&cancelAnimationFrame(d.current);const I=r.current;if(!I)return Promise.resolve();const k=I.quaternion.clone(),H=performance.now();return new Promise(Q=>{const q=W=>{const tt=Math.min((W-H)/D,1);I.quaternion.slerpQuaternions(k,R,Vi(tt)),h.current=BC(I.quaternion),tt<1?d.current=requestAnimationFrame(q):(d.current=null,Q())};d.current=requestAnimationFrame(q)})},[]),U=bt.useCallback(async()=>{S.current=!0,v(!0),M(null),N(null);try{const R=await Cl(8),D=zC(nx[R-1]),I=h.current,k=Kc(I,D,NC);await w(k,UC),await L(D,LC),p.current=h.current,v(!1),S.current=!1,M(R)}catch(R){v(!1),S.current=!1,N(R instanceof Error?R.message:"Roll failed.")}},[L,w]),F=bt.useCallback(R=>{if(S.current)return;const D=R.currentTarget.getBoundingClientRect();m.current={centerX:D.left+D.width/2,centerY:D.top+D.height/2,halfWidth:D.width/2,halfHeight:D.height/2,nx:0,ny:0},R.currentTarget.setPointerCapture(R.pointerId),C(!0)},[]),E=bt.useCallback(R=>{const D=m.current;!D||S.current||(D.nx=ex((R.clientX-D.centerX)/D.halfWidth,-1,1),D.ny=ex((R.clientY-D.centerY)/D.halfHeight,-1,1),!c.current&&(c.current=requestAnimationFrame(()=>{c.current=null;const I=p.current;G({x:I.x-D.ny*JS,y:I.y+D.nx*JS,z:I.z})})))},[G]),O=bt.useCallback(()=>{const R=m.current;if(!R)return;m.current=null,C(!1),c.current&&(cancelAnimationFrame(c.current),c.current=null),Math.abs(R.nx)>=jS||Math.abs(R.ny)>=jS?U():w(p.current,OC)},[w,U]);return bt.useEffect(()=>{const R=i.current;if(!R)return;const D=new Hc,I=new Kn(28,1,.1,100);I.position.set(0,0,7),I.lookAt(0,0,0);const k=new Zc({alpha:!0,antialias:!0});k.setPixelRatio(Math.min(window.devicePixelRatio,2)),k.setClearColor(0,0),R.appendChild(k.domElement);const H=mo[o],Q=Ll(e),q=new In(new Rm(1.7,0),new Vc({color:H.hex,roughness:.46,metalness:.08,flatShading:!0,transparent:e,opacity:Q,depthWrite:!e})),W=new rn().setFromAxisAngle(new j(0,1,0),Math.PI),tt=()=>{nx.forEach((Dt,V)=>{const mt=V+1,vt=ix(mt,H.label);if(!vt)return;vt.position.copy(Dt.normal).multiplyScalar($S),vt.quaternion.copy(Dt.orientation),q.add(vt);const X=ix(mt,FC);X&&(X.renderOrder=-1,X.position.copy(Dt.normal).multiplyScalar($S-.2),X.quaternion.copy(Dt.orientation).multiply(W),q.add(X))})};document.fonts.load("700 200px dice-font").then(tt),D.add(q),D.add(new qc(16777215,1)),D.add(new Xc(16777215,12303291,1));const it=new kc(16777215,1);it.position.set(3,4,5),D.add(it),r.current=q;const pt=()=>{const Dt=R.clientWidth,V=R.clientHeight;k.setSize(Dt,V,!1),I.aspect=Dt/V,I.updateProjectionMatrix()},xt=new ResizeObserver(pt);xt.observe(R),pt();const Bt=()=>{u.current=requestAnimationFrame(Bt),k.render(D,I)};return Bt(),()=>{xt.disconnect(),u.current&&cancelAnimationFrame(u.current),d.current&&cancelAnimationFrame(d.current),q.geometry.dispose(),q.material.dispose(),q.children.forEach(Dt=>{const V=Dt;V.geometry.dispose(),V.material.map?.dispose(),V.material.dispose()}),k.dispose(),R.removeChild(k.domElement),r.current=null}},[o,e]),ee.jsxs("div",{className:`stage stage--eight-sided${T?" is-dragging":""}`,onPointerDown:F,onPointerMove:E,onPointerUp:O,onPointerCancel:O,children:[ee.jsx("div",{ref:i,className:"three-scene"}),ee.jsx("p",{className:"hint",children:_?"Rolling...":x||(P?`You rolled ${P}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const ax=65,rx=.5,GC=10,VC=1500,XC=750,kC=260,oo=Math.PI/180,sx=.77,oM=2.2,qC=.85,zc=oM*.9*qC,vr=oM*.65,$p=zc*.105573,tm=zc*.8,bc=(zc-tm)/(zc-$p),em=[...[0,1,2,3,4].map(o=>[bc*vr*Math.cos(o*2*Math.PI/5),tm,bc*vr*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[bc*vr*Math.cos((o+.5)*2*Math.PI/5),-tm,bc*vr*Math.sin((o+.5)*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[vr*Math.cos(o*2*Math.PI/5),$p,vr*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[vr*Math.cos((o+.5)*2*Math.PI/5),-$p,vr*Math.sin((o+.5)*2*Math.PI/5)])],nm=[[0,10,15,11,1],[1,11,16,12,2],[2,12,17,13,3],[3,13,18,14,4],[4,14,19,10,0],[5,6,16,11,15],[6,7,17,12,16],[7,8,18,13,17],[8,9,19,14,18],[9,5,15,10,19],[0,1,2,3,4],[5,6,7,8,9]],im=[1,3,5,7,9,8,6,4,2,10],ox=(o,e,i)=>Math.min(i,Math.max(e,o)),lM=(o,e)=>{const[i,r,u]=o,c=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[u[0]-i[0],u[1]-i[1],u[2]-i[2]],h=c[1]*d[2]-c[2]*d[1],p=c[2]*d[0]-c[0]*d[2],m=c[0]*d[1]-c[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),_=new j(h/S,p/S,m/S);return _.dot(e)<0&&_.negate(),_},am=o=>{const e=o.reduce((u,c)=>u+c[0],0)/o.length,i=o.reduce((u,c)=>u+c[1],0)/o.length,r=o.reduce((u,c)=>u+c[2],0)/o.length;return new j(e,i,r)},WC=o=>{const e=nm[o].map(p=>em[p]),i=am(e),r=lM(e,i),u=Math.abs(r.y)>.9?new j(0,0,1):new j(0,1,0),c=u.clone().sub(r.clone().multiplyScalar(u.dot(r))).normalize(),d=new j().crossVectors(c,r).normalize(),h=new nn().makeBasis(d,c,r);return{normal:r,up:c,orientation:new rn().setFromRotationMatrix(h)}},lx=Array.from({length:im.length},(o,e)=>WC(e)),YC=o=>{const e=new j(0,0,1),i=new rn().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new rn().setFromAxisAngle(new j(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},ZC="#ffffff",ux=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 180px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o===10?0:o),128,136);const u=new Gc(i);u.colorSpace=Hn;const c=new ho({map:u,transparent:!0,side:Xi,depthWrite:!1});return new In(new Mr(sx,sx),c)},KC=o=>{const e=new ii().setFromQuaternion(o,"XYZ");return{x:e.x/oo,y:e.y/oo,z:e.z/oo}};function QC({color:o="red",translucent:e=!0}){const i=bt.useRef(null),r=bt.useRef(null),u=bt.useRef(null),c=bt.useRef(null),d=bt.useRef(null),h=bt.useRef({x:0,y:0,z:0}),p=bt.useRef({x:0,y:0,z:0}),m=bt.useRef(null),S=bt.useRef(!1),[_,v]=bt.useState(!1),[T,C]=bt.useState(!1),[P,M]=bt.useState(null),[x,N]=bt.useState(null),G=bt.useCallback(R=>{h.current=R,r.current?.rotation.set(R.x*oo,R.y*oo,R.z*oo)},[]),w=bt.useCallback((R,D)=>{d.current&&cancelAnimationFrame(d.current);const I={...h.current},k=performance.now();return new Promise(H=>{const Q=q=>{const W=Math.min((q-k)/D,1),tt=Vi(W);G({x:I.x+(R.x-I.x)*tt,y:I.y+(R.y-I.y)*tt,z:I.z+(R.z-I.z)*tt}),W<1?d.current=requestAnimationFrame(Q):(d.current=null,H())};d.current=requestAnimationFrame(Q)})},[G]),L=bt.useCallback((R,D)=>{d.current&&cancelAnimationFrame(d.current);const I=r.current;if(!I)return Promise.resolve();const k=I.quaternion.clone(),H=performance.now();return new Promise(Q=>{const q=W=>{const tt=Math.min((W-H)/D,1);I.quaternion.slerpQuaternions(k,R,Vi(tt)),h.current=KC(I.quaternion),tt<1?d.current=requestAnimationFrame(q):(d.current=null,Q())};d.current=requestAnimationFrame(q)})},[]),U=bt.useCallback(async()=>{S.current=!0,v(!0),M(null),N(null);try{const R=await Cl(10),D=im.indexOf(R),I=YC(lx[D]),k=h.current,H=Kc(k,I,GC);await w(H,VC),await L(I,XC),p.current=h.current,v(!1),S.current=!1,M(R)}catch(R){v(!1),S.current=!1,N(R instanceof Error?R.message:"Roll failed.")}},[L,w]),F=bt.useCallback(R=>{if(S.current)return;const D=R.currentTarget.getBoundingClientRect();m.current={centerX:D.left+D.width/2,centerY:D.top+D.height/2,halfWidth:D.width/2,halfHeight:D.height/2,nx:0,ny:0},R.currentTarget.setPointerCapture(R.pointerId),C(!0)},[]),E=bt.useCallback(R=>{const D=m.current;!D||S.current||(D.nx=ox((R.clientX-D.centerX)/D.halfWidth,-1,1),D.ny=ox((R.clientY-D.centerY)/D.halfHeight,-1,1),!c.current&&(c.current=requestAnimationFrame(()=>{c.current=null;const I=p.current;G({x:I.x-D.ny*ax,y:I.y+D.nx*ax,z:I.z})})))},[G]),O=bt.useCallback(()=>{const R=m.current;if(!R)return;m.current=null,C(!1),c.current&&(cancelAnimationFrame(c.current),c.current=null),Math.abs(R.nx)>=rx||Math.abs(R.ny)>=rx?U():w(p.current,kC)},[w,U]);return bt.useEffect(()=>{const R=i.current;if(!R)return;const D=new Hc,I=new Kn(28,1,.1,100);I.position.set(0,0,7),I.lookAt(0,0,0);const k=new Zc({alpha:!0,antialias:!0});k.setPixelRatio(Math.min(window.devicePixelRatio,2)),k.setClearColor(0,0),R.appendChild(k.domElement);const H=new _i,Q=[],q=[];for(const vt of nm){const X=vt.map(Y=>em[Y]),rt=am(X),St=lM(X,rt),Ct=St.x,ft=St.y,Rt=St.z,[le,re,oe]=X,ne=[re[0]-le[0],re[1]-le[1],re[2]-le[2]],Ht=[oe[0]-le[0],oe[1]-le[1],oe[2]-le[2]],ie=ne[1]*Ht[2]-ne[2]*Ht[1],Ne=ne[2]*Ht[0]-ne[0]*Ht[2],je=ne[0]*Ht[1]-ne[1]*Ht[0],Se=ie*rt.x+Ne*rt.y+je*rt.z>=0?X:[...X].reverse();for(let Y=1;Y<Se.length-1;Y++)Q.push(...Se[0],...Se[Y],...Se[Y+1]),q.push(Ct,ft,Rt,Ct,ft,Rt,Ct,ft,Rt)}H.setAttribute("position",new Rn(Q,3)),H.setAttribute("normal",new Rn(q,3));const W=mo[o],tt=Ll(e),it=new In(H,new Vc({color:W.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:tt,depthWrite:!e})),pt=new rn().setFromAxisAngle(new j(0,1,0),Math.PI),xt=()=>{lx.forEach((vt,X)=>{const rt=im[X],St=ux(rt,W.label);if(!St)return;const Ct=am(nm[X].map(Rt=>em[Rt]));St.position.copy(Ct),St.position.addScaledVector(vt.normal,.01),St.quaternion.copy(vt.orientation),it.add(St);const ft=ux(rt,ZC);ft&&(ft.renderOrder=-1,ft.position.copy(Ct),ft.position.addScaledVector(vt.normal,-.05),ft.quaternion.copy(vt.orientation).multiply(pt),it.add(ft))})};document.fonts.load("700 180px dice-font").then(xt),D.add(it),D.add(new qc(16777215,1)),D.add(new Xc(16777215,12303291,1));const Bt=new kc(16777215,1);Bt.position.set(3,4,5),D.add(Bt),r.current=it;const Dt=()=>{const vt=R.clientWidth,X=R.clientHeight;k.setSize(vt,X,!1),I.aspect=vt/X,I.updateProjectionMatrix()},V=new ResizeObserver(Dt);V.observe(R),Dt();const mt=()=>{u.current=requestAnimationFrame(mt),k.render(D,I)};return mt(),()=>{V.disconnect(),u.current&&cancelAnimationFrame(u.current),d.current&&cancelAnimationFrame(d.current),H.dispose(),it.material.dispose(),it.children.forEach(vt=>{const X=vt;X.geometry.dispose(),X.material.map?.dispose(),X.material.dispose()}),k.dispose(),R.removeChild(k.domElement),r.current=null}},[o,e]),ee.jsxs("div",{className:`stage stage--ten-sided${T?" is-dragging":""}`,onPointerDown:F,onPointerMove:E,onPointerUp:O,onPointerCancel:O,children:[ee.jsx("div",{ref:i,className:"three-scene"}),ee.jsx("p",{className:"hint",children:_?"Rolling...":x||(P!==null?`You rolled ${P}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const cx=65,fx=.5,JC=10,jC=1500,$C=750,t2=260,lo=Math.PI/180,dx=1,rm=[[.981495,.981495,.981495],[.981495,.981495,-.981495],[.981495,-.981495,.981495],[.981495,-.981495,-.981495],[-.981495,.981495,.981495],[-.981495,.981495,-.981495],[-.981495,-.981495,.981495],[-.981495,-.981495,-.981495],[0,.606598,1.588093],[0,.606598,-1.588093],[0,-.606598,1.588093],[0,-.606598,-1.588093],[.606598,1.588093,0],[.606598,-1.588093,0],[-.606598,1.588093,0],[-.606598,-1.588093,0],[1.588093,0,.606598],[1.588093,0,-.606598],[-1.588093,0,.606598],[-1.588093,0,-.606598]],sm=[[14,12,1,9,5],[4,8,0,12,14],[1,12,0,16,17],[19,18,4,14,5],[7,19,5,9,11],[11,9,1,17,3],[2,16,0,8,10],[10,8,4,18,6],[17,16,2,13,3],[7,15,6,18,19],[7,11,3,13,15],[15,13,2,10,6]],om=[1,2,3,4,5,6,8,7,9,10,11,12],hx=(o,e,i)=>Math.min(i,Math.max(e,o)),uM=(o,e)=>{const[i,r,u]=o,c=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[u[0]-i[0],u[1]-i[1],u[2]-i[2]],h=c[1]*d[2]-c[2]*d[1],p=c[2]*d[0]-c[0]*d[2],m=c[0]*d[1]-c[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),_=new j(h/S,p/S,m/S);return _.dot(e)<0&&_.negate(),_},lm=o=>{const e=o.reduce((u,c)=>u+c[0],0)/o.length,i=o.reduce((u,c)=>u+c[1],0)/o.length,r=o.reduce((u,c)=>u+c[2],0)/o.length;return new j(e,i,r)},e2=o=>{const e=sm[o].map(p=>rm[p]),i=lm(e),r=uM(e,i),u=Math.abs(r.y)>.9?new j(0,0,1):new j(0,1,0),c=u.clone().sub(r.clone().multiplyScalar(u.dot(r))).normalize(),d=new j().crossVectors(c,r).normalize(),h=new nn().makeBasis(d,c,r);return{normal:r,up:c,orientation:new rn().setFromRotationMatrix(h)}},px=Array.from({length:om.length},(o,e)=>e2(e)),n2=o=>{const e=new j(0,0,1),i=new rn().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new rn().setFromAxisAngle(new j(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},i2="#ffffff",mx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const u=new Gc(i);u.colorSpace=Hn;const c=new ho({map:u,transparent:!0,side:Xi,depthWrite:!1});return new In(new Mr(dx,dx),c)},a2=o=>{const e=new ii().setFromQuaternion(o,"XYZ");return{x:e.x/lo,y:e.y/lo,z:e.z/lo}};function r2({color:o="red",translucent:e=!0}){const i=bt.useRef(null),r=bt.useRef(null),u=bt.useRef(null),c=bt.useRef(null),d=bt.useRef(null),h=bt.useRef({x:0,y:0,z:0}),p=bt.useRef({x:0,y:0,z:0}),m=bt.useRef(null),S=bt.useRef(!1),[_,v]=bt.useState(!1),[T,C]=bt.useState(!1),[P,M]=bt.useState(null),[x,N]=bt.useState(null),G=bt.useCallback(R=>{h.current=R,r.current?.rotation.set(R.x*lo,R.y*lo,R.z*lo)},[]),w=bt.useCallback((R,D)=>{d.current&&cancelAnimationFrame(d.current);const I={...h.current},k=performance.now();return new Promise(H=>{const Q=q=>{const W=Math.min((q-k)/D,1),tt=Vi(W);G({x:I.x+(R.x-I.x)*tt,y:I.y+(R.y-I.y)*tt,z:I.z+(R.z-I.z)*tt}),W<1?d.current=requestAnimationFrame(Q):(d.current=null,H())};d.current=requestAnimationFrame(Q)})},[G]),L=bt.useCallback((R,D)=>{d.current&&cancelAnimationFrame(d.current);const I=r.current;if(!I)return Promise.resolve();const k=I.quaternion.clone(),H=performance.now();return new Promise(Q=>{const q=W=>{const tt=Math.min((W-H)/D,1);I.quaternion.slerpQuaternions(k,R,Vi(tt)),h.current=a2(I.quaternion),tt<1?d.current=requestAnimationFrame(q):(d.current=null,Q())};d.current=requestAnimationFrame(q)})},[]),U=bt.useCallback(async()=>{S.current=!0,v(!0),M(null),N(null);try{const R=await Cl(12),D=om.indexOf(R),I=n2(px[D]),k=h.current,H=Kc(k,I,JC);await w(H,jC),await L(I,$C),p.current=h.current,v(!1),S.current=!1,M(R)}catch(R){v(!1),S.current=!1,N(R instanceof Error?R.message:"Roll failed.")}},[L,w]),F=bt.useCallback(R=>{if(S.current)return;const D=R.currentTarget.getBoundingClientRect();m.current={centerX:D.left+D.width/2,centerY:D.top+D.height/2,halfWidth:D.width/2,halfHeight:D.height/2,nx:0,ny:0},R.currentTarget.setPointerCapture(R.pointerId),C(!0)},[]),E=bt.useCallback(R=>{const D=m.current;!D||S.current||(D.nx=hx((R.clientX-D.centerX)/D.halfWidth,-1,1),D.ny=hx((R.clientY-D.centerY)/D.halfHeight,-1,1),!c.current&&(c.current=requestAnimationFrame(()=>{c.current=null;const I=p.current;G({x:I.x-D.ny*cx,y:I.y+D.nx*cx,z:I.z})})))},[G]),O=bt.useCallback(()=>{const R=m.current;if(!R)return;m.current=null,C(!1),c.current&&(cancelAnimationFrame(c.current),c.current=null),Math.abs(R.nx)>=fx||Math.abs(R.ny)>=fx?U():w(p.current,t2)},[w,U]);return bt.useEffect(()=>{const R=i.current;if(!R)return;const D=new Hc,I=new Kn(28,1,.1,100);I.position.set(0,0,7),I.lookAt(0,0,0);const k=new Zc({alpha:!0,antialias:!0});k.setPixelRatio(Math.min(window.devicePixelRatio,2)),k.setClearColor(0,0),R.appendChild(k.domElement);const H=new _i,Q=[],q=[];for(const vt of sm){const X=vt.map(Y=>rm[Y]),rt=lm(X),St=uM(X,rt),Ct=St.x,ft=St.y,Rt=St.z,[le,re,oe]=X,ne=[re[0]-le[0],re[1]-le[1],re[2]-le[2]],Ht=[oe[0]-le[0],oe[1]-le[1],oe[2]-le[2]],ie=ne[1]*Ht[2]-ne[2]*Ht[1],Ne=ne[2]*Ht[0]-ne[0]*Ht[2],je=ne[0]*Ht[1]-ne[1]*Ht[0],Se=ie*rt.x+Ne*rt.y+je*rt.z>=0?X:[...X].reverse();for(let Y=1;Y<Se.length-1;Y++)Q.push(...Se[0],...Se[Y],...Se[Y+1]),q.push(Ct,ft,Rt,Ct,ft,Rt,Ct,ft,Rt)}H.setAttribute("position",new Rn(Q,3)),H.setAttribute("normal",new Rn(q,3));const W=mo[o],tt=Ll(e),it=new In(H,new Vc({color:W.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:tt,depthWrite:!e})),pt=new rn().setFromAxisAngle(new j(0,1,0),Math.PI),xt=()=>{px.forEach((vt,X)=>{const rt=om[X],St=mx(rt,W.label);if(!St)return;const Ct=lm(sm[X].map(Rt=>rm[Rt]));St.position.copy(Ct),St.position.addScaledVector(vt.normal,.01),St.quaternion.copy(vt.orientation),it.add(St);const ft=mx(rt,i2);ft&&(ft.renderOrder=-1,ft.position.copy(Ct),ft.position.addScaledVector(vt.normal,-.05),ft.quaternion.copy(vt.orientation).multiply(pt),it.add(ft))})};document.fonts.load("700 160px dice-font").then(xt),D.add(it),D.add(new qc(16777215,1)),D.add(new Xc(16777215,12303291,1));const Bt=new kc(16777215,1);Bt.position.set(3,4,5),D.add(Bt),r.current=it;const Dt=()=>{const vt=R.clientWidth,X=R.clientHeight;k.setSize(vt,X,!1),I.aspect=vt/X,I.updateProjectionMatrix()},V=new ResizeObserver(Dt);V.observe(R),Dt();const mt=()=>{u.current=requestAnimationFrame(mt),k.render(D,I)};return mt(),()=>{V.disconnect(),u.current&&cancelAnimationFrame(u.current),d.current&&cancelAnimationFrame(d.current),H.dispose(),it.material.dispose(),it.children.forEach(vt=>{const X=vt;X.geometry.dispose(),X.material.map?.dispose(),X.material.dispose()}),k.dispose(),R.removeChild(k.domElement),r.current=null}},[o,e]),ee.jsxs("div",{className:`stage stage--twelve-sided${T?" is-dragging":""}`,onPointerDown:F,onPointerMove:E,onPointerUp:O,onPointerCancel:O,children:[ee.jsx("div",{ref:i,className:"three-scene"}),ee.jsx("p",{className:"hint",children:_?"Rolling...":x||(P!==null?`You rolled ${P}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const gx=65,_x=.5,s2=10,o2=1500,l2=750,u2=260,uo=Math.PI/180,vx=.9,um=[[0,.893743,1.446106],[0,.893743,-1.446106],[0,-.893743,1.446106],[0,-.893743,-1.446106],[.893743,1.446106,0],[.893743,-1.446106,0],[-.893743,1.446106,0],[-.893743,-1.446106,0],[1.446106,0,.893743],[1.446106,0,-.893743],[-1.446106,0,.893743],[-1.446106,0,-.893743]],cm=[[6,4,1],[0,4,6],[11,6,1],[1,4,9],[8,4,0],[0,6,10],[4,8,9],[11,10,6],[1,3,11],[9,3,1],[0,2,8],[10,2,0],[9,8,5],[7,10,11],[3,7,11],[9,5,3],[2,5,8],[10,7,2],[3,5,7],[7,5,2]],fm=[1,2,3,4,5,6,7,8,9,10,12,11,13,14,16,15,18,17,19,20],Sx=(o,e,i)=>Math.min(i,Math.max(e,o)),cM=(o,e)=>{const[i,r,u]=o,c=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[u[0]-i[0],u[1]-i[1],u[2]-i[2]],h=c[1]*d[2]-c[2]*d[1],p=c[2]*d[0]-c[0]*d[2],m=c[0]*d[1]-c[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),_=new j(h/S,p/S,m/S);return _.dot(e)<0&&_.negate(),_},dm=o=>{const e=o.reduce((u,c)=>u+c[0],0)/o.length,i=o.reduce((u,c)=>u+c[1],0)/o.length,r=o.reduce((u,c)=>u+c[2],0)/o.length;return new j(e,i,r)},c2=o=>{const e=cm[o].map(p=>um[p]),i=dm(e),r=cM(e,i),u=Math.abs(r.y)>.9?new j(0,0,1):new j(0,1,0),c=u.clone().sub(r.clone().multiplyScalar(u.dot(r))).normalize(),d=new j().crossVectors(c,r).normalize(),h=new nn().makeBasis(d,c,r);return{normal:r,up:c,orientation:new rn().setFromRotationMatrix(h)}},xx=Array.from({length:fm.length},(o,e)=>c2(e)),f2=o=>{const e=new j(0,0,1),i=new rn().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new rn().setFromAxisAngle(new j(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},d2="#ffffff",Mx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const u=new Gc(i);u.colorSpace=Hn;const c=new ho({map:u,transparent:!0,side:Xi,depthWrite:!1});return new In(new Mr(vx,vx),c)},h2=o=>{const e=new ii().setFromQuaternion(o,"XYZ");return{x:e.x/uo,y:e.y/uo,z:e.z/uo}};function p2({color:o="red",translucent:e=!0}){const i=bt.useRef(null),r=bt.useRef(null),u=bt.useRef(null),c=bt.useRef(null),d=bt.useRef(null),h=bt.useRef({x:0,y:0,z:0}),p=bt.useRef({x:0,y:0,z:0}),m=bt.useRef(null),S=bt.useRef(!1),[_,v]=bt.useState(!1),[T,C]=bt.useState(!1),[P,M]=bt.useState(null),[x,N]=bt.useState(null),G=bt.useCallback(R=>{h.current=R,r.current?.rotation.set(R.x*uo,R.y*uo,R.z*uo)},[]),w=bt.useCallback((R,D)=>{d.current&&cancelAnimationFrame(d.current);const I={...h.current},k=performance.now();return new Promise(H=>{const Q=q=>{const W=Math.min((q-k)/D,1),tt=Vi(W);G({x:I.x+(R.x-I.x)*tt,y:I.y+(R.y-I.y)*tt,z:I.z+(R.z-I.z)*tt}),W<1?d.current=requestAnimationFrame(Q):(d.current=null,H())};d.current=requestAnimationFrame(Q)})},[G]),L=bt.useCallback((R,D)=>{d.current&&cancelAnimationFrame(d.current);const I=r.current;if(!I)return Promise.resolve();const k=I.quaternion.clone(),H=performance.now();return new Promise(Q=>{const q=W=>{const tt=Math.min((W-H)/D,1);I.quaternion.slerpQuaternions(k,R,Vi(tt)),h.current=h2(I.quaternion),tt<1?d.current=requestAnimationFrame(q):(d.current=null,Q())};d.current=requestAnimationFrame(q)})},[]),U=bt.useCallback(async()=>{S.current=!0,v(!0),M(null),N(null);try{const R=await Cl(20),D=fm.indexOf(R),I=f2(xx[D]),k=h.current,H=Kc(k,I,s2);await w(H,o2),await L(I,l2),p.current=h.current,v(!1),S.current=!1,M(R)}catch(R){v(!1),S.current=!1,N(R instanceof Error?R.message:"Roll failed.")}},[L,w]),F=bt.useCallback(R=>{if(S.current)return;const D=R.currentTarget.getBoundingClientRect();m.current={centerX:D.left+D.width/2,centerY:D.top+D.height/2,halfWidth:D.width/2,halfHeight:D.height/2,nx:0,ny:0},R.currentTarget.setPointerCapture(R.pointerId),C(!0)},[]),E=bt.useCallback(R=>{const D=m.current;!D||S.current||(D.nx=Sx((R.clientX-D.centerX)/D.halfWidth,-1,1),D.ny=Sx((R.clientY-D.centerY)/D.halfHeight,-1,1),!c.current&&(c.current=requestAnimationFrame(()=>{c.current=null;const I=p.current;G({x:I.x-D.ny*gx,y:I.y+D.nx*gx,z:I.z})})))},[G]),O=bt.useCallback(()=>{const R=m.current;if(!R)return;m.current=null,C(!1),c.current&&(cancelAnimationFrame(c.current),c.current=null),Math.abs(R.nx)>=_x||Math.abs(R.ny)>=_x?U():w(p.current,u2)},[w,U]);return bt.useEffect(()=>{const R=i.current;if(!R)return;const D=new Hc,I=new Kn(28,1,.1,100);I.position.set(0,0,7),I.lookAt(0,0,0);const k=new Zc({alpha:!0,antialias:!0});k.setPixelRatio(Math.min(window.devicePixelRatio,2)),k.setClearColor(0,0),R.appendChild(k.domElement);const H=new _i,Q=[],q=[];for(const vt of cm){const X=vt.map(Y=>um[Y]),rt=dm(X),St=cM(X,rt),Ct=St.x,ft=St.y,Rt=St.z,[le,re,oe]=X,ne=[re[0]-le[0],re[1]-le[1],re[2]-le[2]],Ht=[oe[0]-le[0],oe[1]-le[1],oe[2]-le[2]],ie=ne[1]*Ht[2]-ne[2]*Ht[1],Ne=ne[2]*Ht[0]-ne[0]*Ht[2],je=ne[0]*Ht[1]-ne[1]*Ht[0],Se=ie*rt.x+Ne*rt.y+je*rt.z>=0?X:[...X].reverse();for(let Y=1;Y<Se.length-1;Y++)Q.push(...Se[0],...Se[Y],...Se[Y+1]),q.push(Ct,ft,Rt,Ct,ft,Rt,Ct,ft,Rt)}H.setAttribute("position",new Rn(Q,3)),H.setAttribute("normal",new Rn(q,3));const W=mo[o],tt=Ll(e),it=new In(H,new Vc({color:W.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:tt,depthWrite:!e})),pt=new rn().setFromAxisAngle(new j(0,1,0),Math.PI),xt=()=>{xx.forEach((vt,X)=>{const rt=fm[X],St=Mx(rt,W.label);if(!St)return;const Ct=dm(cm[X].map(Rt=>um[Rt]));St.position.copy(Ct),St.position.addScaledVector(vt.normal,.01),St.quaternion.copy(vt.orientation),it.add(St);const ft=Mx(rt,d2);ft&&(ft.renderOrder=-1,ft.position.copy(Ct),ft.position.addScaledVector(vt.normal,-.05),ft.quaternion.copy(vt.orientation).multiply(pt),it.add(ft))})};document.fonts.load("700 160px dice-font").then(xt),D.add(it),D.add(new qc(16777215,1)),D.add(new Xc(16777215,12303291,1));const Bt=new kc(16777215,1);Bt.position.set(3,4,5),D.add(Bt),r.current=it;const Dt=()=>{const vt=R.clientWidth,X=R.clientHeight;k.setSize(vt,X,!1),I.aspect=vt/X,I.updateProjectionMatrix()},V=new ResizeObserver(Dt);V.observe(R),Dt();const mt=()=>{u.current=requestAnimationFrame(mt),k.render(D,I)};return mt(),()=>{V.disconnect(),u.current&&cancelAnimationFrame(u.current),d.current&&cancelAnimationFrame(d.current),H.dispose(),it.material.dispose(),it.children.forEach(vt=>{const X=vt;X.geometry.dispose(),X.material.map?.dispose(),X.material.dispose()}),k.dispose(),R.removeChild(k.domElement),r.current=null}},[o,e]),ee.jsxs("div",{className:`stage stage--twenty-sided${T?" is-dragging":""}`,onPointerDown:F,onPointerMove:E,onPointerUp:O,onPointerCancel:O,children:[ee.jsx("div",{ref:i,className:"three-scene"}),ee.jsx("p",{className:"hint",children:_?"Rolling...":x||(P!==null?`You rolled ${P}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}function m2({sides:o=6,color:e="red",translucent:i=!0}){switch(o){case 6:return ee.jsx(DC,{color:e,translucent:i});case 8:return ee.jsx(HC,{color:e,translucent:i});case 10:return ee.jsx(QC,{color:e,translucent:i});case 12:return ee.jsx(r2,{color:e,translucent:i});case 20:return ee.jsx(p2,{color:e,translucent:i});default:return null}}const g2=[0,45,90,135];function _2({isOpen:o,onClick:e,ref:i}){return ee.jsx("button",{ref:i,type:"button",className:"icon-button settings-button","aria-label":"Settings","aria-haspopup":"dialog","aria-expanded":o,onClick:e,children:ee.jsxs("span",{className:"settings-button__cog","aria-hidden":"true",children:[g2.map(r=>ee.jsx("span",{className:`settings-button__tooth settings-button__tooth--${r}`},r)),ee.jsx("span",{className:"settings-button__hub"})]})})}const v2='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',S2=[6,8,10,12,20],x2=["red","yellow","green","blue","black","white"];function M2({sides:o,color:e,translucent:i,onSettingsChange:r,onClose:u}){const c=bt.useRef(null),d=bt.useRef(null);return bt.useEffect(()=>{d.current?.focus();const h=p=>{if(p.key==="Escape"){u();return}if(p.key!=="Tab")return;const m=c.current;if(!m)return;const S=Array.from(m.querySelectorAll(v2));if(S.length===0)return;const _=S[0],v=S[S.length-1],T=document.activeElement;if(!m.contains(T)){p.preventDefault(),(p.shiftKey?v:_).focus();return}p.shiftKey&&T===_?(p.preventDefault(),v.focus()):!p.shiftKey&&T===v&&(p.preventDefault(),_.focus())};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[u]),ee.jsxs("div",{ref:c,className:"settings-dialog",role:"dialog","aria-modal":"true","aria-label":"Settings",children:[ee.jsxs("div",{className:"settings-dialog__content",children:[ee.jsx("fieldset",{className:"sides-picker","aria-label":"Sides",children:ee.jsx("div",{className:"sides-picker__options",children:S2.map((h,p)=>ee.jsxs(bt.Fragment,{children:[p>0&&ee.jsx("span",{className:"sides-picker__divider","aria-hidden":"true"}),ee.jsxs("span",{className:"sides-picker__option",children:[ee.jsx("input",{className:"sides-picker__input",type:"radio",name:"sides",id:`sides-${h}`,value:h,checked:o===h,onChange:()=>r({sides:h})}),ee.jsx("label",{className:"sides-picker__label",htmlFor:`sides-${h}`,children:h})]})]},h))})}),ee.jsx("fieldset",{className:"color-picker","aria-label":"Color",children:ee.jsx("div",{className:"color-picker__options",children:x2.map(h=>ee.jsxs("span",{className:"color-picker__option",children:[ee.jsx("input",{className:"color-picker__input",type:"radio",name:"color",id:`color-${h}`,value:h,checked:e===h,"aria-label":h,onChange:()=>r({color:h})}),ee.jsx("label",{className:"color-picker__label",htmlFor:`color-${h}`,style:{backgroundColor:`rgb(${mo[h].cssTop.join(" ")})`}})]},h))})}),ee.jsxs("label",{className:"translucent-toggle",children:[ee.jsx("input",{className:"translucent-toggle__input",type:"checkbox",checked:i,onChange:h=>r({translucent:h.target.checked})}),ee.jsx("span",{className:"translucent-toggle__text",children:"Translucent"}),ee.jsx("span",{className:"translucent-toggle__track","aria-hidden":"true",children:ee.jsx("span",{className:"translucent-toggle__knob"})})]})]}),ee.jsx("button",{ref:d,type:"button",className:"icon-button settings-dialog__close","aria-label":"Close",onClick:u,children:ee.jsxs("span",{className:"settings-dialog__x","aria-hidden":"true",children:[ee.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--45"}),ee.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--135"})]})})]})}function y2(){const[o,e]=bt.useState(()=>bC()),[i,r]=bt.useState(!1),u=bt.useRef(null),c=bt.useCallback(h=>{e(p=>({...p,...h}))},[]),d=bt.useCallback(()=>{r(!1),u.current?.focus()},[]);return ee.jsxs(ee.Fragment,{children:[ee.jsx(_2,{ref:u,isOpen:i,onClick:()=>r(!0)}),i&&ee.jsx(M2,{sides:o.sides,color:o.color,translucent:o.translucent,onSettingsChange:c,onClose:d}),ee.jsx(m2,{sides:o.sides,color:o.color,translucent:o.translucent})]})}const fM=document.getElementById("root");if(!fM)throw new Error("Root element was not found.");tT.createRoot(fM).render(ee.jsx(bt.StrictMode,{children:ee.jsx(y2,{})}));

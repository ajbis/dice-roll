(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Oh={exports:{}},Nl={};var $v;function S1(){if($v)return Nl;$v=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Nl.Fragment=e,Nl.jsx=i,Nl.jsxs=i,Nl}var tS;function x1(){return tS||(tS=1,Oh.exports=S1()),Oh.exports}var ie=x1(),Ph={exports:{}},ue={};var eS;function M1(){if(eS)return ue;eS=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),E=Symbol.iterator;function w(O){return O===null||typeof O!="object"?null:(O=E&&O[E]||O["@@iterator"],typeof O=="function"?O:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function G(O,rt,St){this.props=O,this.context=rt,this.refs=x,this.updater=St||P}G.prototype.isReactComponent={},G.prototype.setState=function(O,rt){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,rt,"setState")},G.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function j(){}j.prototype=G.prototype;function D(O,rt,St){this.props=O,this.context=rt,this.refs=x,this.updater=St||P}var U=D.prototype=new j;U.constructor=D,M(U,G.prototype),U.isPureReactComponent=!0;var I=Array.isArray;function B(){}var b={H:null,A:null,T:null,S:null},F=Object.prototype.hasOwnProperty;function Y(O,rt,St){var q=St.ref;return{$$typeof:o,type:O,key:rt,ref:q!==void 0?q:null,props:St}}function T(O,rt){return Y(O.type,rt,O.props)}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function N(O){var rt={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(St){return rt[St]})}var H=/\/+/g;function k(O,rt){return typeof O=="object"&&O!==null&&O.key!=null?N(""+O.key):rt.toString(36)}function V(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(B,B):(O.status="pending",O.then(function(rt){O.status==="pending"&&(O.status="fulfilled",O.value=rt)},function(rt){O.status==="pending"&&(O.status="rejected",O.reason=rt)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function L(O,rt,St,q,nt){var Et=typeof O;(Et==="undefined"||Et==="boolean")&&(O=null);var wt=!1;if(O===null)wt=!0;else switch(Et){case"bigint":case"string":case"number":wt=!0;break;case"object":switch(O.$$typeof){case o:case e:wt=!0;break;case v:return wt=O._init,L(wt(O._payload),rt,St,q,nt)}}if(wt)return nt=nt(O),wt=q===""?"."+k(O,0):q,I(nt)?(St="",wt!=null&&(St=wt.replace(H,"$&/")+"/"),L(nt,rt,St,"",function(ge){return ge})):nt!=null&&(R(nt)&&(nt=T(nt,St+(nt.key==null||O&&O.key===nt.key?"":(""+nt.key).replace(H,"$&/")+"/")+wt)),rt.push(nt)),1;wt=0;var lt=q===""?".":q+":";if(I(O))for(var Rt=0;Rt<O.length;Rt++)q=O[Rt],Et=lt+k(q,Rt),wt+=L(q,rt,St,Et,nt);else if(Rt=w(O),typeof Rt=="function")for(O=Rt.call(O),Rt=0;!(q=O.next()).done;)q=q.value,Et=lt+k(q,Rt++),wt+=L(q,rt,St,Et,nt);else if(Et==="object"){if(typeof O.then=="function")return L(V(O),rt,St,q,nt);throw rt=String(O),Error("Objects are not valid as a React child (found: "+(rt==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":rt)+"). If you meant to render a collection of children, use an array instead.")}return wt}function J(O,rt,St){if(O==null)return O;var q=[],nt=0;return L(O,q,"","",function(Et){return rt.call(St,Et,nt++)}),q}function Q(O){if(O._status===-1){var rt=O._result,St=rt();St.then(function(q){(O._status===0||O._status===-1)&&(O._status=1,O._result=q,St.status===void 0&&(St.status="fulfilled",St.value=q))},function(q){(O._status===0||O._status===-1)&&(O._status=2,O._result=q,St.status===void 0&&(St.status="rejected",St.reason=q))}),O._status===-1&&(O._status=0,O._result=St)}if(O._status===1)return O._result.default;throw O._result}var pt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var rt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(rt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function st(O){var rt=b.T,St={};St.types=rt!==null?rt.types:null,b.T=St;try{var q=O(),nt=b.S;nt!==null&&nt(St,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(B,pt)}catch(Et){pt(Et)}finally{rt!==null&&St.types!==null&&(rt.types=St.types),b.T=rt}}function vt(O){var rt=b.T;if(rt!==null){var St=rt.types;St===null?rt.types=[O]:St.indexOf(O)===-1&&St.push(O)}else st(vt.bind(null,O))}var Ct={map:J,forEach:function(O,rt,St){J(O,function(){rt.apply(this,arguments)},St)},count:function(O){var rt=0;return J(O,function(){rt++}),rt},toArray:function(O){return J(O,function(rt){return rt})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ue.Activity=g,ue.Children=Ct,ue.Component=G,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=D,ue.StrictMode=r,ue.Suspense=p,ue.ViewTransition=S,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b,ue.__COMPILER_RUNTIME={__proto__:null,c:function(O){return b.H.useMemoCache(O)}},ue.addTransitionType=vt,ue.cache=function(O){return function(){return O.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(O,rt,St){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var q=M({},O.props),nt=O.key;if(rt!=null)for(Et in rt.key!==void 0&&(nt=""+rt.key),rt)!F.call(rt,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&rt.ref===void 0||(q[Et]=rt[Et]);var Et=arguments.length-2;if(Et===1)q.children=St;else if(1<Et){for(var wt=Array(Et),lt=0;lt<Et;lt++)wt[lt]=arguments[lt+2];q.children=wt}return Y(O.type,nt,q)},ue.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},ue.createElement=function(O,rt,St){var q,nt={},Et=null;if(rt!=null)for(q in rt.key!==void 0&&(Et=""+rt.key),rt)F.call(rt,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(nt[q]=rt[q]);var wt=arguments.length-2;if(wt===1)nt.children=St;else if(1<wt){for(var lt=Array(wt),Rt=0;Rt<wt;Rt++)lt[Rt]=arguments[Rt+2];nt.children=lt}if(O&&O.defaultProps)for(q in wt=O.defaultProps,wt)nt[q]===void 0&&(nt[q]=wt[q]);return Y(O,Et,nt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(O){return{$$typeof:h,render:O}},ue.isValidElement=R,ue.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:Q}},ue.memo=function(O,rt){return{$$typeof:m,type:O,compare:rt===void 0?null:rt}},ue.startTransition=st,ue.unstable_useCacheRefresh=function(){return b.H.useCacheRefresh()},ue.use=function(O){return b.H.use(O)},ue.useActionState=function(O,rt,St){return b.H.useActionState(O,rt,St)},ue.useCallback=function(O,rt){return b.H.useCallback(O,rt)},ue.useContext=function(O){return b.H.useContext(O)},ue.useDebugValue=function(){},ue.useDeferredValue=function(O,rt){return b.H.useDeferredValue(O,rt)},ue.useEffect=function(O,rt){return b.H.useEffect(O,rt)},ue.useEffectEvent=function(O){return b.H.useEffectEvent(O)},ue.useId=function(){return b.H.useId()},ue.useImperativeHandle=function(O,rt,St){return b.H.useImperativeHandle(O,rt,St)},ue.useInsertionEffect=function(O,rt){return b.H.useInsertionEffect(O,rt)},ue.useLayoutEffect=function(O,rt){return b.H.useLayoutEffect(O,rt)},ue.useMemo=function(O,rt){return b.H.useMemo(O,rt)},ue.useOptimistic=function(O,rt){return b.H.useOptimistic(O,rt)},ue.useReducer=function(O,rt,St){return b.H.useReducer(O,rt,St)},ue.useRef=function(O){return b.H.useRef(O)},ue.useState=function(O){return b.H.useState(O)},ue.useSyncExternalStore=function(O,rt,St){return b.H.useSyncExternalStore(O,rt,St)},ue.useTransition=function(){return b.H.useTransition()},ue.version="19.3.0",ue}var nS;function Cm(){return nS||(nS=1,Ph.exports=M1()),Ph.exports}var _t=Cm(),Ih={exports:{}},Ul={},zh={exports:{}},Fh={};var iS;function y1(){return iS||(iS=1,(function(o){function e(V,L){var J=V.length;V.push(L);t:for(;0<J;){var Q=J-1>>>1,pt=V[Q];if(0<l(pt,L))V[Q]=L,V[J]=pt,J=Q;else break t}}function i(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var L=V[0],J=V.pop();if(J!==L){V[0]=J;t:for(var Q=0,pt=V.length,st=pt>>>1;Q<st;){var vt=2*(Q+1)-1,Ct=V[vt],O=vt+1,rt=V[O];if(0>l(Ct,J))O<pt&&0>l(rt,Ct)?(V[Q]=rt,V[O]=J,Q=O):(V[Q]=Ct,V[vt]=J,Q=vt);else if(O<pt&&0>l(rt,J))V[Q]=rt,V[O]=J,Q=O;else break t}}return L}function l(V,L){var J=V.sortIndex-L.sortIndex;return J!==0?J:V.id-L.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],v=1,g=null,S=3,E=!1,w=!1,P=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;function D(V){for(var L=i(m);L!==null;){if(L.callback===null)r(m);else if(L.startTime<=V)r(m),L.sortIndex=L.expirationTime,e(p,L);else break;L=i(m)}}function U(V){if(P=!1,D(V),!w)if(i(p)!==null)w=!0,I||(I=!0,R());else{var L=i(m);L!==null&&k(U,L.startTime-V)}}var I=!1,B=-1,b=5,F=-1;function Y(){return M?!0:!(o.unstable_now()-F<b)}function T(){if(M=!1,I){var V=o.unstable_now();F=V;var L=!0;try{t:{w=!1,P&&(P=!1,G(B),B=-1),E=!0;var J=S;try{e:{for(D(V),g=i(p);g!==null&&!(g.expirationTime>V&&Y());){var Q=g.callback;if(typeof Q=="function"){g.callback=null,S=g.priorityLevel;var pt=Q(g.expirationTime<=V);if(V=o.unstable_now(),typeof pt=="function"){g.callback=pt,D(V),L=!0;break e}g===i(p)&&r(p),D(V)}else r(p);g=i(p)}if(g!==null)L=!0;else{var st=i(m);st!==null&&k(U,st.startTime-V),L=!1}}break t}finally{g=null,S=J,E=!1}L=void 0}}finally{L?R():I=!1}}}var R;if(typeof j=="function")R=function(){j(T)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,H=N.port2;N.port1.onmessage=T,R=function(){H.postMessage(null)}}else R=function(){x(T,0)};function k(V,L){B=x(function(){V(o.unstable_now())},L)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(V){switch(S){case 1:case 2:case 3:var L=3;break;default:L=S}var J=S;S=L;try{return V()}finally{S=J}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(V,L){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var J=S;S=V;try{return L()}finally{S=J}},o.unstable_scheduleCallback=function(V,L,J){var Q=o.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Q+J:Q):J=Q,V){case 1:var pt=-1;break;case 2:pt=250;break;case 5:pt=1073741823;break;case 4:pt=1e4;break;default:pt=5e3}return pt=J+pt,V={id:v++,callback:L,priorityLevel:V,startTime:J,expirationTime:pt,sortIndex:-1},J>Q?(V.sortIndex=J,e(m,V),i(p)===null&&V===i(m)&&(P?(G(B),B=-1):P=!0,k(U,J-Q))):(V.sortIndex=pt,e(p,V),w||E||(w=!0,I||(I=!0,R()))),V},o.unstable_shouldYield=Y,o.unstable_wrapCallback=function(V){var L=S;return function(){var J=S;S=L;try{return V.apply(this,arguments)}finally{S=J}}}})(Fh)),Fh}var aS;function E1(){return aS||(aS=1,zh.exports=y1()),zh.exports}var Bh={exports:{}},Pn={};var rS;function T1(){if(rS)return Pn;rS=1;var o=Cm();function e(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)g+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(v,g,S){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:E==null?null:E===d?d:""+E,children:v,containerInfo:g,implementation:S}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Pn.browser=function(v){return{$$typeof:u,_reason:v}},Pn.createPortal=function(v,g){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return h(v,g,null,S)},Pn.flushSync=function(v){var g=p.T,S=r.p;try{if(p.T=null,r.p=2,v)return v()}finally{p.T=g,r.p=S,r.d.f()}},Pn.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(v,g))},Pn.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},Pn.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var S=g.as,E=m(S,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,P=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;S==="style"?r.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:w,fetchPriority:P}):S==="script"&&r.d.X(v,{crossOrigin:E,integrity:w,fetchPriority:P,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Pn.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var S=m(g.as,g.crossOrigin);r.d.M(v,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&r.d.M(v)},Pn.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var S=g.as,E=m(S,g.crossOrigin);r.d.L(v,S,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Pn.preloadModule=function(v,g){if(typeof v=="string")if(g){var S=m(g.as,g.crossOrigin);r.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else r.d.m(v)},Pn.requestFormReset=function(v){r.d.r(v)},Pn.unstable_batchedUpdates=function(v,g){return v(g)},Pn.useFormState=function(v,g,S){return p.H.useFormState(v,g,S)},Pn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Pn.version="19.3.0",Pn}var sS;function Wx(){if(sS)return Bh.exports;sS=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Bh.exports=T1(),Bh.exports}var oS;function b1(){if(oS)return Ul;oS=1;var o=E1(),e=Cm(),i=Wx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),t;if(f===s)return p(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var _=!1,C=c.child;C;){if(C===a){_=!0,a=c,s=f;break}if(C===s){_=!0,s=c,a=f;break}C=C.sibling}if(!_){for(C=f.child;C;){if(C===a){_=!0,a=f,s=c;break}if(C===s){_=!0,s=f,a=c;break}C=C.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function g(t,n,a,s,c,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,c,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,a,s,c,f))return!0;t=t.sibling}return!1}function S(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function E(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function w(t){var n=[null,null],a=S(t);return a===null||P(n,t,a.child,{foundSelf:!1}),n}function P(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&P(t,n,a.child,s))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var x=null,G=null;function j(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function D(t,n,a){return t===a?(G=t,!1):t===n?(G!==null&&(x=t),!0):!1}function U(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function I(t,n,a){for(var s=0,c=t;c;c=a(c))s++;c=0;for(var f=n;f;f=a(f))c++;for(;0<s-c;)t=a(t),s--;for(;0<c-s;)n=a(n),c--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var B=Object.assign,b=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),k=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),st=Symbol.for("react.activity"),vt=Symbol.for("react.legacy_hidden"),Ct=Symbol.for("react.memo_cache_sentinel"),O=Symbol.for("react.view_transition"),rt=Symbol.for("react.recoverable"),St=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=St&&t[St]||t["@@iterator"],typeof t=="function"?t:null)}var nt=Symbol.for("react.client.reference");function Et(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===nt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case N:return"Profiler";case R:return"StrictMode";case L:return"Suspense";case J:return"SuspenseList";case st:return"Activity";case O:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case Y:return"Portal";case k:return t.displayName||"Context";case H:return(t._context.displayName||"Context")+".Consumer";case V:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Q:return n=t.displayName||null,n!==null?n:Et(t.type)||"Memo";case pt:n=t._payload,t=t._init;try{return Et(t(n))}catch{}}return null}var wt=Array.isArray,lt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge={pending:!1,data:null,method:null,action:null},ne=[],re=-1;function oe(t){return{current:t}}function Ut(t){0>re||(t.current=ne[re],ne[re]=null,re--)}function Ht(t,n){re++,ne[re]=t.current,t.current=n}var ke=oe(null),mn=oe(null),Fe=oe(null),nn=oe(null);function tt(t,n){switch(Ht(Fe,n),Ht(mn,t),Ht(ke,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?lv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=lv(n),t=cv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ut(ke),Ht(ke,t)}function rn(){Ut(ke),Ut(mn),Ut(Fe)}function Ie(t){var n=t.memoizedState;n!==null&&(Js._currentValue=n.memoizedState,Ht(nn,t)),n=ke.current;var a=cv(n,t.type);n!==a&&(Ht(mn,t),Ht(ke,a))}function z(t){mn.current===t&&(Ut(ke),Ut(mn)),nn.current===t&&(Ut(nn),Js._currentValue=ge)}var y,ot;function ht(t){if(y===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);y=n&&n[1]||"",ot=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+y+t+ot}var xt=!1;function Nt(t,n){if(!t||xt)return"";xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Tt=function(){throw Error()};if(Object.defineProperty(Tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Tt,[])}catch(Ft){var et=Ft}Reflect.construct(t,[],Tt)}else{try{Tt.call()}catch(Ft){et=Ft}Tt=!1;try{var dt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Tt=!0,new t}finally{Tt&&(dt!==void 0?Object.defineProperty(t.prototype,"props",dt):delete t.prototype.props)}}}else{try{throw Error()}catch(Ft){et=Ft}(Tt=t())&&typeof Tt.catch=="function"&&Tt.catch(function(){})}}catch(Ft){if(Ft&&et&&typeof Ft.stack=="string")return[Ft.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],C=f[1];if(_&&C){var X=_.split(`
`),at=C.split(`
`);for(c=s=0;s<X.length&&!X[s].includes("DetermineComponentFrameRoot");)s++;for(;c<at.length&&!at[c].includes("DetermineComponentFrameRoot");)c++;if(s===X.length||c===at.length)for(s=X.length-1,c=at.length-1;1<=s&&0<=c&&X[s]!==at[c];)c--;for(;1<=s&&0<=c;s--,c--)if(X[s]!==at[c]){if(s!==1||c!==1)do if(s--,c--,0>c||X[s]!==at[c]){var mt=`
`+X[s].replace(" at new "," at ");return t.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",t.displayName)),mt}while(1<=s&&0<=c);break}}}finally{xt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ht(a):""}function Pt(t,n){switch(t.tag){case 26:case 27:case 5:return ht(t.type);case 16:return ht("Lazy");case 13:return t.child!==n&&n!==null?ht("Suspense Fallback"):ht("Suspense");case 19:return ht("SuspenseList");case 0:case 15:return Nt(t.type,!1);case 11:return Nt(t.type.render,!1);case 1:return Nt(t.type,!0);case 31:return ht("Activity");case 30:return ht("ViewTransition");default:return""}}function Mt(t){try{var n="",a=null;do n+=Pt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var At=Object.prototype.hasOwnProperty,Ot=o.unstable_scheduleCallback,ee=o.unstable_cancelCallback,Gt=o.unstable_shouldYield,Bt=o.unstable_requestPaint,Yt=o.unstable_now,se=o.unstable_getCurrentPriorityLevel,de=o.unstable_ImmediatePriority,$=o.unstable_UserBlockingPriority,Lt=o.unstable_NormalPriority,bt=o.unstable_LowPriority,It=o.unstable_IdlePriority,Wt=o.log,Dt=o.unstable_setDisableYieldValue,te=null,qt=null;function we(t){if(typeof Wt=="function"&&Dt(t),qt&&typeof qt.setStrictMode=="function")try{qt.setStrictMode(te,t)}catch{}}var he=Math.clz32?Math.clz32:cf,ri=Math.log,Si=Math.LN2;function cf(t){return t>>>=0,t===0?32:31-(ri(t)/Si|0)|0}var hs=256,Ur=262144,Za=4194304;function ga(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Lr(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var C=s&134217727;return C!==0?(s=C&~f,s!==0?c=ga(s):(_&=C,_!==0?c=ga(_):a||(a=C&~t,a!==0&&(c=ga(a))))):(C=s&~f,C!==0?c=ga(C):_!==0?c=ga(_):a||(a=s&~t,a!==0&&(c=ga(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ka(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ki(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-he(a),c=1<<s;n|=t[s],a&=~c}return n}function zo(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fo(){var t=Za;return Za<<=1,(Za&62914560)===0&&(Za=4194304),t}function ps(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function qi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function $l(t,n,a,s,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var C=t.entanglements,X=t.expirationTimes,at=t.hiddenUpdates;for(a=_&~a;0<a;){var mt=31-he(a),Tt=1<<mt;C[mt]=0,X[mt]=-1;var et=at[mt];if(et!==null)for(at[mt]=null,mt=0;mt<et.length;mt++){var dt=et[mt];dt!==null&&(dt.lane&=-536870913)}a&=~Tt}s!==0&&Or(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Or(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-he(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Bo(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-he(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Ho(t,n){var a=n&-n;return a=(a&42)!==0?1:Go(a),(a&(t.suspendedLanes|n))!==0?0:a}function Go(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Vo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function tc(){var t=Rt.p;return t!==0?t:(t=window.event,t===void 0?32:Wv(t.type))}function ec(t,n){var a=Rt.p;try{return Rt.p=t,n()}finally{Rt.p=a}}var xi=Math.random().toString(36).slice(2),A="__reactFiber$"+xi,W="__reactProps$"+xi,gt="__reactContainer$"+xi,ut="__reactEvents$"+xi,ft="__reactListeners$"+xi,Vt="__reactHandles$"+xi,Zt="__reactResources$"+xi,zt="__reactMarker$"+xi,Jt="__reactLoad$"+xi;function jt(t){delete t[A],delete t[W],delete t[ft],delete t[Vt]}function ce(t){var n;if(n=t[A])return n;for(var a=t.parentNode;a;){if(n=a[gt]||a[A]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Av(t);t!==null;){if(a=t[A])return a;t=Av(t)}return n}t=a,a=t.parentNode}return null}function pe(t){if(t=t[A]||t[gt]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Kt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ee(t){var n=t[Zt];return n||(n=t[Zt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function xe(t){t[zt]=!0}function Ke(t){t[Jt]=void 0}var Ve=new Set,Mn={};function Xt(t,n){ln(t,n),ln(t+"Capture",n)}function ln(t,n){for(Mn[t]=n,t=0;t<n.length;t++)Ve.add(n[t])}var De=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kn={},si={};function Wi(t){return At.call(si,t)?!0:At.call(kn,t)?!1:De.test(t)?si[t]=!0:(kn[t]=!0,!1)}var Me=!1;function He(){var t=Me;return Me=!1,t}function $e(t,n,a){if(Wi(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function oi(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function Ae(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function cn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _a(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nc(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function uf(t){if(!t._valueTracker){var n=_a(t)?"checked":"value";t._valueTracker=nc(t,n,""+t[n])}}function Qm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=_a(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var HM=/[\n"\\]/g;function Mi(t){return t.replace(HM,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ff(t,n,a,s,c,f,_,C){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+cn(n)):t.value!==""+cn(n)&&(t.value=""+cn(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?df(t,cn(t.value)):df(t,cn(n)):a!=null?df(t,cn(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+cn(C):t.removeAttribute("name")}function Jm(t,n,a,s,c,f,_,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){uf(t);return}a=a!=null?""+cn(a):"",n=n!=null?""+cn(n):a,C||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=C?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),uf(t)}function df(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function ms(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+cn(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function jm(t,n,a){if(n!=null&&(n=""+cn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+cn(a):""}function $m(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(wt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=cn(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),uf(t)}function gs(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var GM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function t0(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||GM.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function e0(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",Me=!0);for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&(t0(t,c,s),Me=!0)}else for(var f in n)n.hasOwnProperty(f)&&t0(t,f,n[f])}function hf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var VM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),XM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ic(t){return XM.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yi(){}var pf=null;function mf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _s=null,vs=null;function n0(t){var n=pe(t);if(n&&(t=n.stateNode)){var a=t[W]||null;t:switch(t=n.stateNode,n.type){case"input":if(ff(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Mi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[W]||null;if(!c)throw Error(r(90));ff(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Qm(s)}break t;case"textarea":jm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ms(t,!!a.multiple,n,!1)}}}var gf=!1;function i0(t,n,a){if(gf)return t(n,a);gf=!0;try{var s=t(n);return s}finally{if(gf=!1,(_s!==null||vs!==null)&&(iu(),_s&&(n=_s,t=vs,vs=_s=null,n0(n),t)))for(n=0;n<t.length;n++)n0(t[n])}}function Xo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[W]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_f=!1;if(va)try{var ko={};Object.defineProperty(ko,"passive",{get:function(){_f=!0}}),window.addEventListener("test",ko,ko),window.removeEventListener("test",ko,ko)}catch{_f=!1}var Qa=null,vf=null,ac=null;function a0(){if(ac)return ac;var t,n=vf,a=n.length,s,c="value"in Qa?Qa.value:Qa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===c[f-s];s++);return ac=c.slice(t,1<s?1-s:void 0)}function rc(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function sc(){return!0}function r0(){return!1}function qn(t){function n(a,s,c,f,_){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(a=t[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?sc:r0,this.isPropagationStopped=r0,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sc)},persist:function(){},isPersistent:sc}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oc=qn(Ja),qo=B({},Ja,{view:0,detail:0}),kM=qn(qo),Sf,xf,Wo,lc=B({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wo&&(Wo&&t.type==="mousemove"?(Sf=t.screenX-Wo.screenX,xf=t.screenY-Wo.screenY):xf=Sf=0,Wo=t),Sf)},movementY:function(t){return"movementY"in t?t.movementY:xf}}),s0=qn(lc),qM=B({},lc,{dataTransfer:0}),WM=qn(qM),YM=B({},qo,{relatedTarget:0}),Mf=qn(YM),ZM=B({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),KM=qn(ZM),QM=B({},Ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),JM=qn(QM),jM=B({},Ja,{data:0}),o0=qn(jM),$M={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ey={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ny(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=ey[t])?!!n[t]:!1}function yf(){return ny}var iy=B({},qo,{key:function(t){if(t.key){var n=$M[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=rc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ty[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yf,charCode:function(t){return t.type==="keypress"?rc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ay=qn(iy),ry=B({},lc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),l0=qn(ry),sy=B({},Ja,{submitter:0}),oy=qn(sy),ly=B({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yf}),cy=qn(ly),uy=B({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),fy=qn(uy),dy=B({},lc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hy=qn(dy),py=B({},Ja,{newState:0,oldState:0,source:0}),my=qn(py),gy=[9,13,27,32],Ef=va&&"CompositionEvent"in window,Yo=null;va&&"documentMode"in document&&(Yo=document.documentMode);var _y=va&&"TextEvent"in window&&!Yo,c0=va&&(!Ef||Yo&&8<Yo&&11>=Yo),u0=" ",f0=!1;function d0(t,n){switch(t){case"keyup":return gy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function h0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ss=!1;function vy(t,n){switch(t){case"compositionend":return h0(n);case"keypress":return n.which!==32?null:(f0=!0,u0);case"textInput":return t=n.data,t===u0&&f0?null:t;default:return null}}function Sy(t,n){if(Ss)return t==="compositionend"||!Ef&&d0(t,n)?(t=a0(),ac=vf=Qa=null,Ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return c0&&n.locale!=="ko"?null:n.data;default:return null}}var xy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function p0(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!xy[t.type]:n==="textarea"}function m0(t,n,a,s){_s?vs?vs.push(s):vs=[s]:_s=s,n=cu(n,"onChange"),0<n.length&&(a=new oc("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Zo=null,Ko=null;function My(t){nv(t,0)}function cc(t){var n=Kt(t);if(Qm(n))return t}function g0(t,n){if(t==="change")return n}var _0=!1;if(va){var Tf;if(va){var bf="oninput"in document;if(!bf){var v0=document.createElement("div");v0.setAttribute("oninput","return;"),bf=typeof v0.oninput=="function"}Tf=bf}else Tf=!1;_0=Tf&&(!document.documentMode||9<document.documentMode)}function S0(){Zo&&(Zo.detachEvent("onpropertychange",x0),Ko=Zo=null)}function x0(t){if(t.propertyName==="value"&&cc(Ko)){var n=[];m0(n,Ko,t,mf(t)),i0(My,n)}}function yy(t,n,a){t==="focusin"?(S0(),Zo=n,Ko=a,Zo.attachEvent("onpropertychange",x0)):t==="focusout"&&S0()}function Ey(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cc(Ko)}function Ty(t,n){if(t==="click")return cc(n)}function by(t,n){if(t==="input"||t==="change")return cc(n)}function Ay(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var li=typeof Object.is=="function"?Object.is:Ay;function Qo(t,n){if(li(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!At.call(n,c)||!li(t[c],n[c]))return!1}return!0}function Af(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function M0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function y0(t,n){var a=M0(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=M0(a)}}function E0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?E0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function T0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Af(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Af(t.document)}return n}function Rf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ry=va&&"documentMode"in document&&11>=document.documentMode,xs=null,Cf=null,Jo=null,wf=!1;function b0(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wf||xs==null||xs!==Af(s)||(s=xs,"selectionStart"in s&&Rf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Jo&&Qo(Jo,s)||(Jo=s,s=cu(Cf,"onSelect"),0<s.length&&(n=new oc("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=xs)))}function Pr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ms={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionrun:Pr("Transition","TransitionRun"),transitionstart:Pr("Transition","TransitionStart"),transitioncancel:Pr("Transition","TransitionCancel"),transitionend:Pr("Transition","TransitionEnd")},Df={},A0={};va&&(A0=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Ir(t){if(Df[t])return Df[t];if(!Ms[t])return t;var n=Ms[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in A0)return Df[t]=n[a];return t}var R0=Ir("animationend"),C0=Ir("animationiteration"),w0=Ir("animationstart"),Cy=Ir("transitionrun"),wy=Ir("transitionstart"),Dy=Ir("transitioncancel"),D0=Ir("transitionend"),N0=new Map,Nf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nf.push("scrollEnd");function Ui(t,n){N0.set(t,n),Xt(n,[t])}var Ny=0;function Sa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ii.identifierPrefix;var a=Ny++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function U0(t){if(t==null||typeof t=="string")return t;var n=null,a=Gs;if(a!==null)for(var s=0;s<a.length;s++){var c=t[a[s]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??t.default}function xa(t,n){return t=U0(t),n=U0(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var uc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},yi=[],ys=0,Uf=0;function fc(){for(var t=ys,n=Uf=ys=0;n<t;){var a=yi[n];yi[n++]=null;var s=yi[n];yi[n++]=null;var c=yi[n];yi[n++]=null;var f=yi[n];if(yi[n++]=null,s!==null&&c!==null){var _=s.pending;_===null?c.next=c:(c.next=_.next,_.next=c),s.pending=c}f!==0&&L0(a,c,f)}}function dc(t,n,a,s){yi[ys++]=t,yi[ys++]=n,yi[ys++]=a,yi[ys++]=s,Uf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Lf(t,n,a,s){return dc(t,n,a,s),hc(t)}function zr(t,n){return dc(t,null,null,n),hc(t)}function L0(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-he(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function hc(t){if(50<Sl)throw Sl=0,nu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Es={};function Uy(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,s){return new Uy(t,n,a,s)}function Of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ma(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function O0(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function pc(t,n,a,s,c,f){var _=0;if(s=t,typeof s=="function")Of(s)&&(_=1);else if(typeof s=="string")_=s1(t,a,ke.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case st:return t=jn(31,a,n,c),t.elementType=st,t.lanes=f,t;case T:return Fr(a.children,c,f,n);case R:_=8,c|=24;break;case N:return t=jn(12,a,n,c|2),t.elementType=N,t.lanes=f,t;case L:return t=jn(13,a,n,c),t.elementType=L,t.lanes=f,t;case J:return t=jn(19,a,n,c),t.elementType=J,t.lanes=f,t;case vt:case O:return t=c|32,t=jn(30,a,n,t),t.elementType=O,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case k:_=10;break t;case H:_=9;break t;case V:_=11;break t;case Q:_=14;break t;case pt:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=jn(_,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Fr(t,n,a,s){return t=jn(7,t,s,n),t.lanes=a,t}function Pf(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function P0(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function If(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var I0=new WeakMap;function Ei(t,n){if(typeof t=="object"&&t!==null){var a=I0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Mt(n)},I0.set(t,n),n)}return{value:t,source:n,stack:Mt(n)}}var Ts=[],bs=0,mc=null,jo=0,Ti=[],bi=0,ja=null,Zi=1,Ki="";function ya(t,n){Ts[bs++]=jo,Ts[bs++]=mc,mc=t,jo=n}function z0(t,n,a){Ti[bi++]=Zi,Ti[bi++]=Ki,Ti[bi++]=ja,ja=t;var s=Zi;t=Ki;var c=32-he(s)-1;s&=~(1<<c),a+=1;var f=32-he(n)+c;if(30<f){var _=c-c%5;f=(s&(1<<_)-1).toString(32),s>>=_,c-=_,Zi=1<<32-he(n)+c|a<<c|s,Ki=f+t}else Zi=1<<f|a<<c|s,Ki=t}function gc(t){t.return!==null&&(ya(t,1),z0(t,1,0))}function zf(t){for(;t===mc;)mc=Ts[--bs],Ts[bs]=null,jo=Ts[--bs],Ts[bs]=null;for(;t===ja;)ja=Ti[--bi],Ti[bi]=null,Ki=Ti[--bi],Ti[bi]=null,Zi=Ti[--bi],Ti[bi]=null}function F0(t,n){Ti[bi++]=Zi,Ti[bi++]=Ki,Ti[bi++]=ja,Zi=n.id,Ki=n.overflow,ja=t}var bn=null,tn=null,ye=!1,$a=null,Ai=!1,Ff=Error(r(519));function tr(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $o(Ei(n,t)),Ff}function B0(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[A]=t,n[W]=s,a){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(a=0;a<Ml.length;a++)be(Ml[a],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":be("invalid",n),Jm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":be("invalid",n);break;case"textarea":be("invalid",n),$m(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||sv(n.textContent,a)?(s.popover!=null&&(be("beforetoggle",n),be("toggle",n)),s.onScroll!=null&&be("scroll",n),s.onScrollEnd!=null&&be("scrollend",n),s.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||tr(t,!0)}function _c(t){for(bn=t.return;bn;)switch(bn.tag){case 5:case 31:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:bn=bn.return}}function As(t){if(t!==bn)return!1;if(!ye)return _c(t),ye=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ph(t.type,t.memoizedProps)),a=!a),a&&tn&&tr(t),_c(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=bv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=bv(t)}else n===27?(n=tn,gr(t.type)?(t=Eh,Eh=null,tn=t):tn=n):tn=bn?Ci(t.stateNode.nextSibling):null;return!0}function Br(){tn=bn=null,ye=!1}function Bf(){var t=$a;return t!==null&&(ei===null?ei=t:ei.push.apply(ei,t),$a=null),t}function $o(t){$a===null?$a=[t]:$a.push(t)}var Hf=oe(null),Hr=null,Ea=null;function er(t,n,a){Ht(Hf,n._currentValue),n._currentValue=a}function Ta(t){t._currentValue=Hf.current,Ut(Hf)}function vc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Gf(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var C=f;f=c;for(var X=0;X<n.length;X++)if(C.context===n[X]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),vc(f.return,a,t),s||(_=null);break t}f=C.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),vc(_,a,t),_=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,_=c.alternate,_!==null&&(_.lanes|=a),vc(c.return,a,t),_=c.child,_=_!==null?_.sibling:null):_=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Gr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var C=c.type;li(c.pendingProps.value,_.value)||(t!==null?t.push(C):t=[C])}}else if(c===nn.current){if(_=c.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Js):t=[Js])}c=c.return}return t!==null&&Gf(n,t,a,s),n.flags|=262144,t!==null}function Sc(t){for(t=t.firstContext;t!==null;){if(!li(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Vr(t){Hr=t,Ea=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Dn(t){return H0(Hr,t)}function xc(t,n){return Hr===null&&Vr(t),H0(t,n)}function H0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ea===null){if(t===null)throw Error(r(308));Ea=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ea=Ea.next=n;return a}var Ly=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Oy=o.unstable_scheduleCallback,Py=o.unstable_NormalPriority,gn={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vf(){return{controller:new Ly,data:new Map,refCount:0}}function tl(t){t.refCount--,t.refCount===0&&Oy(Py,function(){t.controller.abort()})}function G0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var el=null;function Iy(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var nl=null,Xf=0,Xr=0,Rs=null;function zy(t,n){if(nl===null){var a=nl=[];Xf=0,Xr=rh(),Rs={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Xf++,n.then(V0,V0),n}function V0(){if(--Xf===0&&(el=null,nl!==null)){Rs!==null&&(Rs.status="fulfilled");var t=nl;nl=null,Xr=0,Rs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Fy(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var X0=lt.S;lt.S=function(t,n){if(P_=Yt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&zy(t,n),el!==null)for(var a=qs;a!==null;)G0(a,el),a=a.next;if(a=t.types,a!==null){for(var s=qs;s!==null;)G0(s,a),s=s.next;if(Xr!==0){s=el,s===null&&(s=el=[]);for(var c=0;c<a.length;c++){var f=a[c];s.indexOf(f)===-1&&s.push(f)}}}X0!==null&&X0(t,n)};var kr=oe(null);function kf(){var t=kr.current;return t!==null?t:je.pooledCache}function Mc(t,n){n===null?Ht(kr,kr.current):Ht(kr,n.pool)}function k0(){var t=kf();return t===null?null:{parent:gn._currentValue,pool:t}}var Cs=Error(r(460)),qf=Error(r(474)),yc=Error(r(542)),Ec={then:function(){}};function q0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function W0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Z0(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(t=je,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Z0(t),t}throw Wr=n,Cs}}function qr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Wr=a,Cs):a}}var Wr=null;function Y0(){if(Wr===null)throw Error(r(459));var t=Wr;return Wr=null,t}function Z0(t){if(t===Cs||t===yc)throw Error(r(483))}var ws=null,il=0;function Tc(t){var n=il;return il+=1,ws===null&&(ws=[]),W0(ws,t,n)}function nr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function bc(t,n){throw n.$$typeof===b?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function K0(t){function n(it,Z){if(t){var ct=it.deletions;ct===null?(it.deletions=[Z],it.flags|=16):ct.push(Z)}}function a(it,Z){if(!t)return null;for(;Z!==null;)n(it,Z),Z=Z.sibling;return null}function s(it){for(var Z=new Map;it!==null;)it.key===null?Z.set(it.index,it):Z.set(it.key,it),it=it.sibling;return Z}function c(it,Z){return it=Ma(it,Z),it.index=0,it.sibling=null,it}function f(it,Z,ct){return it.index=ct,t?(ct=it.alternate,ct!==null?(ct=ct.index,ct<Z?(it.flags|=2,Z):ct):(it.flags|=134217730,Z)):(it.flags|=1048576,Z)}function _(it){return t&&it.alternate===null&&(it.flags|=134217730),it}function C(it,Z,ct,yt){return Z===null||Z.tag!==6?(Z=Pf(ct,it.mode,yt),Z.return=it,Z):(Z=c(Z,ct),Z.return=it,Z)}function X(it,Z,ct,yt){var Qt=ct.type;return Qt===T?(it=mt(it,Z,ct.props.children,yt,ct.key),nr(it,ct),it):Z!==null&&(Z.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===pt&&qr(Qt)===Z.type)?(Z=c(Z,ct.props),nr(Z,ct),Z.return=it,Z):(Z=pc(ct.type,ct.key,ct.props,null,it.mode,yt),nr(Z,ct),Z.return=it,Z)}function at(it,Z,ct,yt){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==ct.containerInfo||Z.stateNode.implementation!==ct.implementation?(Z=If(ct,it.mode,yt),Z.return=it,Z):(Z=c(Z,ct.children||[]),Z.return=it,Z)}function mt(it,Z,ct,yt,Qt){return Z===null||Z.tag!==7?(Z=Fr(ct,it.mode,yt,Qt),Z.return=it,Z):(Z=c(Z,ct),Z.return=it,Z)}function Tt(it,Z,ct){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Pf(""+Z,it.mode,ct),Z.return=it,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case F:return ct=pc(Z.type,Z.key,Z.props,null,it.mode,ct),nr(ct,Z),ct.return=it,ct;case Y:return Z=If(Z,it.mode,ct),Z.return=it,Z;case pt:return Z=qr(Z),Tt(it,Z,ct)}if(wt(Z)||q(Z))return Z=Fr(Z,it.mode,ct,null),Z.return=it,Z;if(typeof Z.then=="function")return Tt(it,Tc(Z),ct);if(Z.$$typeof===k)return Tt(it,xc(it,Z),ct);bc(it,Z)}return null}function et(it,Z,ct,yt){var Qt=Z!==null?Z.key:null;if(typeof ct=="string"&&ct!==""||typeof ct=="number"||typeof ct=="bigint")return Qt!==null?null:C(it,Z,""+ct,yt);if(typeof ct=="object"&&ct!==null){switch(ct.$$typeof){case F:return ct.key===Qt?X(it,Z,ct,yt):null;case Y:return ct.key===Qt?at(it,Z,ct,yt):null;case pt:return ct=qr(ct),et(it,Z,ct,yt)}if(wt(ct)||q(ct))return Qt!==null?null:mt(it,Z,ct,yt,null);if(typeof ct.then=="function")return et(it,Z,Tc(ct),yt);if(ct.$$typeof===k)return et(it,Z,xc(it,ct),yt);bc(it,ct)}return null}function dt(it,Z,ct,yt,Qt){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return it=it.get(ct)||null,C(Z,it,""+yt,Qt);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case F:return it=it.get(yt.key===null?ct:yt.key)||null,X(Z,it,yt,Qt);case Y:return it=it.get(yt.key===null?ct:yt.key)||null,at(Z,it,yt,Qt);case pt:return yt=qr(yt),dt(it,Z,ct,yt,Qt)}if(wt(yt)||q(yt))return it=it.get(ct)||null,mt(Z,it,yt,Qt,null);if(typeof yt.then=="function")return dt(it,Z,ct,Tc(yt),Qt);if(yt.$$typeof===k)return dt(it,Z,ct,xc(Z,yt),Qt);bc(Z,yt)}return null}function Ft(it,Z,ct,yt){for(var Qt=null,Ce=null,ae=Z,le=Z=0,Sn=null;ae!==null&&le<ct.length;le++){ae.index>le?(Sn=ae,ae=null):Sn=ae.sibling;var Le=et(it,ae,ct[le],yt);if(Le===null){ae===null&&(ae=Sn);break}t&&ae&&Le.alternate===null&&n(it,ae),Z=f(Le,Z,le),Ce===null?Qt=Le:Ce.sibling=Le,Ce=Le,ae=Sn}if(le===ct.length)return a(it,ae),ye&&ya(it,le),Qt;if(ae===null){for(;le<ct.length;le++)ae=Tt(it,ct[le],yt),ae!==null&&(Z=f(ae,Z,le),Ce===null?Qt=ae:Ce.sibling=ae,Ce=ae);return ye&&ya(it,le),Qt}for(ae=s(ae);le<ct.length;le++)Sn=dt(ae,it,le,ct[le],yt),Sn!==null&&(t&&(Le=Sn.alternate,Le!==null&&ae.delete(Le.key===null?le:Le.key)),Z=f(Sn,Z,le),Ce===null?Qt=Sn:Ce.sibling=Sn,Ce=Sn);return t&&ae.forEach(function(Mr){return n(it,Mr)}),ye&&ya(it,le),Qt}function $t(it,Z,ct,yt){if(ct==null)throw Error(r(151));for(var Qt=null,Ce=null,ae=Z,le=Z=0,Sn=null,Le=ct.next();ae!==null&&!Le.done;le++,Le=ct.next()){ae.index>le?(Sn=ae,ae=null):Sn=ae.sibling;var Mr=et(it,ae,Le.value,yt);if(Mr===null){ae===null&&(ae=Sn);break}t&&ae&&Mr.alternate===null&&n(it,ae),Z=f(Mr,Z,le),Ce===null?Qt=Mr:Ce.sibling=Mr,Ce=Mr,ae=Sn}if(Le.done)return a(it,ae),ye&&ya(it,le),Qt;if(ae===null){for(;!Le.done;le++,Le=ct.next())Le=Tt(it,Le.value,yt),Le!==null&&(Z=f(Le,Z,le),Ce===null?Qt=Le:Ce.sibling=Le,Ce=Le);return ye&&ya(it,le),Qt}for(ae=s(ae);!Le.done;le++,Le=ct.next())Le=dt(ae,it,le,Le.value,yt),Le!==null&&(t&&(Sn=Le.alternate,Sn!==null&&ae.delete(Sn.key===null?le:Sn.key)),Z=f(Le,Z,le),Ce===null?Qt=Le:Ce.sibling=Le,Ce=Le);return t&&ae.forEach(function(v1){return n(it,v1)}),ye&&ya(it,le),Qt}function ve(it,Z,ct,yt){if(typeof ct=="object"&&ct!==null&&ct.type===T&&ct.key===null&&ct.props.ref===void 0&&(ct=ct.props.children),typeof ct=="object"&&ct!==null){switch(ct.$$typeof){case F:t:{for(var Qt=ct.key;Z!==null;){if(Z.key===Qt){if(Qt=ct.type,Qt===T){if(Z.tag===7){a(it,Z.sibling),yt=c(Z,ct.props.children),nr(yt,ct),yt.return=it,it=yt;break t}}else if(Z.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===pt&&qr(Qt)===Z.type){a(it,Z.sibling),yt=c(Z,ct.props),nr(yt,ct),yt.return=it,it=yt;break t}a(it,Z);break}else n(it,Z);Z=Z.sibling}ct.type===T?(yt=Fr(ct.props.children,it.mode,yt,ct.key),nr(yt,ct),yt.return=it,it=yt):(yt=pc(ct.type,ct.key,ct.props,null,it.mode,yt),nr(yt,ct),yt.return=it,it=yt)}return _(it);case Y:t:{for(Qt=ct.key;Z!==null;){if(Z.key===Qt)if(Z.tag===4&&Z.stateNode.containerInfo===ct.containerInfo&&Z.stateNode.implementation===ct.implementation){a(it,Z.sibling),yt=c(Z,ct.children||[]),yt.return=it,it=yt;break t}else{a(it,Z);break}else n(it,Z);Z=Z.sibling}yt=If(ct,it.mode,yt),yt.return=it,it=yt}return _(it);case pt:return ct=qr(ct),ve(it,Z,ct,yt)}if(wt(ct))return Ft(it,Z,ct,yt);if(q(ct)){if(Qt=q(ct),typeof Qt!="function")throw Error(r(150));return ct=Qt.call(ct),$t(it,Z,ct,yt)}if(typeof ct.then=="function")return ve(it,Z,Tc(ct),yt);if(ct.$$typeof===k)return ve(it,Z,xc(it,ct),yt);bc(it,ct)}return typeof ct=="string"&&ct!==""||typeof ct=="number"||typeof ct=="bigint"?(ct=""+ct,Z!==null&&Z.tag===6?(a(it,Z.sibling),yt=c(Z,ct),yt.return=it,it=yt):(a(it,Z),yt=Pf(ct,it.mode,yt),yt.return=it,it=yt),_(it)):a(it,Z)}return function(it,Z,ct,yt){try{il=0;var Qt=ve(it,Z,ct,yt);return ws=null,Qt}catch(ae){if(ae===Cs||ae===yc)throw ae;var Ce=jn(29,ae,null,it.mode);return Ce.lanes=yt,Ce.return=it,Ce}}}var Yr=K0(!0),Q0=K0(!1),ir=!1;function Wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ar(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function rr(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ge&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=hc(t),L0(t,null,a),n}return dc(t,s,n,a),hc(t)}function al(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Bo(t,a)}}function Zf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Kf=!1;function rl(){if(Kf){var t=Rs;if(t!==null)throw t}}function sl(t,n,a,s){Kf=!1;var c=t.updateQueue;ir=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,C=c.shared.pending;if(C!==null){c.shared.pending=null;var X=C,at=X.next;X.next=null,_===null?f=at:_.next=at,_=X;var mt=t.alternate;mt!==null&&(mt=mt.updateQueue,C=mt.lastBaseUpdate,C!==_&&(C===null?mt.firstBaseUpdate=at:C.next=at,mt.lastBaseUpdate=X))}if(f!==null){var Tt=c.baseState;_=0,mt=at=X=null,C=f;do{var et=C.lane&-536870913,dt=et!==C.lane;if(dt?(Re&et)===et:(s&et)===et){et!==0&&et===Xr&&(Kf=!0),mt!==null&&(mt=mt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Ft=t,$t=C;et=n;var ve=a;switch($t.tag){case 1:if(Ft=$t.payload,typeof Ft=="function"){Tt=Ft.call(ve,Tt,et);break t}Tt=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=$t.payload,et=typeof Ft=="function"?Ft.call(ve,Tt,et):Ft,et==null)break t;Tt=B({},Tt,et);break t;case 2:ir=!0}}et=C.callback,et!==null&&(t.flags|=64,dt&&(t.flags|=8192),dt=c.callbacks,dt===null?c.callbacks=[et]:dt.push(et))}else dt={lane:et,tag:C.tag,payload:C.payload,callback:C.callback,next:null},mt===null?(at=mt=dt,X=Tt):mt=mt.next=dt,_|=et;if(C=C.next,C===null){if(C=c.shared.pending,C===null)break;dt=C,C=dt.next,dt.next=null,c.lastBaseUpdate=dt,c.shared.pending=null}}while(!0);mt===null&&(X=Tt),c.baseState=X,c.firstBaseUpdate=at,c.lastBaseUpdate=mt,f===null&&(c.shared.lanes=0),dr|=_,t.lanes=_,t.memoizedState=Tt}}function J0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function j0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)J0(a[t],n)}var sr=oe(null),Ac=oe(0);function $0(t,n){t=wa,Ht(Ac,t),Ht(sr,n),wa=t|n.baseLanes}function Qf(){Ht(Ac,wa),Ht(sr,sr.current)}function Jf(){wa=Ac.current,Ut(sr),Ut(Ac)}var Nn=oe(null),Fn=null;function or(t){var n=t.alternate;Ht(Un,Un.current&1),Ht(Nn,t),Fn===null&&(n===null||sr.current!==null||n.memoizedState!==null)&&(Fn=t)}function jf(t){Ht(Un,Un.current),Ht(Nn,t),Fn===null&&(Fn=t)}function tg(t){t.tag===22?(Ht(Un,Un.current),Ht(Nn,t),Fn===null&&(Fn=t)):lr()}function lr(){Ht(Un,Un.current),Ht(Nn,Nn.current)}function ci(t){Ut(Nn),Fn===t&&(Fn=null),Ut(Un)}var Un=oe(0);function ol(t,n){Ht(Nn,Nn.current),Ht(Un,n)}function $f(t){Ut(Un),Ut(Nn),Fn===t&&(Fn=null)}function Rc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Mh(a)||yh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ba=0,_e=null,Qe=null,_n=null,Cc=!1,Ds=!1,Zr=!1,wc=0,ll=0,Ns=null,By=0;function un(){throw Error(r(321))}function td(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!li(t[a],n[a]))return!1;return!0}function ed(t,n,a,s,c,f){return ba=f,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,lt.H=t===null||t.memoizedState===null?zg:Fg,Zr=!1,f=a(s,c),Zr=!1,Ds&&(f=ng(n,a,s,c)),eg(t),f}function eg(t){lt.H=Ic;var n=Qe!==null&&Qe.next!==null;if(ba=0,_n=Qe=_e=null,Cc=!1,ll=0,Ns=null,n)throw Error(r(300));t===null||vn||(t=t.dependencies,t!==null&&Sc(t)&&(vn=!0))}function ng(t,n,a,s){_e=t;var c=0;do{if(Ds&&(Ns=null),ll=0,Ds=!1,25<=c)throw Error(r(301));if(c+=1,_n=Qe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}lt.H=Yy,f=n(a,s)}while(Ds);return f}function Hy(){var t=lt.H,n=t.useState()[0];return n=typeof n.then=="function"?cl(n):n,t=t.useState()[0],(Qe!==null?Qe.memoizedState:null)!==t&&(_e.flags|=1024),n}function nd(){var t=wc!==0;return wc=0,t}function id(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function ad(t){if(Cc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Cc=!1}ba=0,_n=Qe=_e=null,Ds=!1,ll=wc=0,Ns=null}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?_e.memoizedState=_n=t:_n=_n.next=t,_n}function dn(){if(Qe===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var n=_n===null?_e.memoizedState:_n.next;if(n!==null)_n=n,Qe=t;else{if(t===null)throw _e.alternate===null?Error(r(467)):Error(r(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},_n===null?_e.memoizedState=_n=t:_n=_n.next=t}return _n}function Dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cl(t){var n=ll;return ll+=1,Ns===null&&(Ns=[]),t=W0(Ns,t,n),n=_e,(_n===null?n.memoizedState:_n.next)===null&&(n=n.alternate,lt.H=n===null||n.memoizedState===null?zg:Fg),t}function Nc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return cl(t);if(t.$$typeof===rt)return;if(t.$$typeof===k)return Dn(t)}throw Error(r(438,String(t)))}function rd(t){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=_e.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Dc(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=Ct;return n.index++,a}function Aa(t,n){return typeof n=="function"?n(t):n}function Uc(t){var n=dn();return sd(n,Qe,t)}function sd(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var C=_=null,X=null,at=n,mt=!1;do{var Tt=at.lane&-536870913;if(Tt!==at.lane?(Re&Tt)===Tt:(ba&Tt)===Tt){var et=at.revertLane;if(et===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),Tt===Xr&&(mt=!0);else if((ba&et)===et){at=at.next,et===Xr&&(mt=!0);continue}else Tt={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},X===null?(C=X=Tt,_=f):X=X.next=Tt,_e.lanes|=et,dr|=et;Tt=at.action,Zr&&a(f,Tt),f=at.hasEagerState?at.eagerState:a(f,Tt)}else et={lane:Tt,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},X===null?(C=X=et,_=f):X=X.next=et,_e.lanes|=Tt,dr|=Tt;at=at.next}while(at!==null&&at!==n);if(X===null?_=f:X.next=C,!li(f,t.memoizedState)&&(vn=!0,mt&&(a=Rs,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=X,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function od(t){var n=dn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);li(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function ig(t,n,a){var s=_e,c=dn(),f=ye;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!li((Qe||c).memoizedState,a);if(_&&(c.memoizedState=a,vn=!0),c=c.queue,ud(sg.bind(null,s,c,t),[t]),t=c.getSnapshot!==n||_||_n!==null&&(_n.memoizedState.tag&1)!==0,Us(t?9:8,{destroy:void 0},rg.bind(null,s,c,a,n),null),t){if(s.flags|=2048,je===null)throw Error(r(349));f||(ba&127)!==0||ag(s,n,a)}return a}function ag(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=Dc(),_e.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function rg(t,n,a,s){n.value=a,n.getSnapshot=s,og(n)&&lg(t)}function sg(t,n,a){return a(function(){og(n)&&lg(t)})}function og(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!li(t,a)}catch{return!0}}function lg(t){var n=zr(t,2);n!==null&&ni(n,t,2)}function ld(t){var n=Wn();if(typeof t=="function"){var a=t;if(t=a(),Zr){we(!0);try{a()}finally{we(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:t},n}function cg(t,n,a,s){return t.baseState=a,sd(t,Qe,typeof s=="function"?s:Aa)}function Gy(t,n,a,s,c){if(Pc(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};lt.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,ug(n,f)):(f.next=a.next,n.pending=a.next=f)}}function ug(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=lt.T,_={};_.types=f!==null?f.types:null,lt.T=_;try{var C=a(c,s),X=lt.S;X!==null&&X(_,C),fg(t,n,C)}catch(at){cd(t,n,at)}finally{f!==null&&_.types!==null&&(f.types=_.types),lt.T=f}}else try{f=a(c,s),fg(t,n,f)}catch(at){cd(t,n,at)}}function fg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){dg(t,n,s)},function(s){return cd(t,n,s)}):dg(t,n,a)}function dg(t,n,a){n.status="fulfilled",n.value=a,hg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,ug(t,a)))}function cd(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,hg(n),n=n.next;while(n!==s)}t.action=null}function hg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function pg(t,n){return n}function mg(t,n){if(ye){var a=je.formState;if(a!==null){t:{var s=_e;if(ye){if(tn){e:{for(var c=tn,f=Ai;c.nodeType!==8;){if(!f){c=null;break e}if(c=Ci(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){tn=Ci(c.nextSibling),s=c.data==="F!";break t}}tr(s)}s=!1}s&&(n=a[0])}}return a=Wn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pg,lastRenderedState:n},a.queue=s,a=Og.bind(null,_e,s),s.dispatch=a,s=ld(!1),f=md.bind(null,_e,!1,s.queue),s=Wn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Gy.bind(null,_e,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function gg(t){var n=dn();return _g(n,Qe,t)}function _g(t,n,a){if(n=sd(t,n,pg)[0],t=Uc(Aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=cl(n)}catch(_){throw _===Cs?yc:_}else s=n;n=dn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,Us(9,{destroy:void 0},Vy.bind(null,c,a),null)),[s,f,t]}function Vy(t,n){t.action=n}function vg(t){var n=dn(),a=Qe;if(a!==null)return _g(n,a,t);dn(),n=n.memoizedState,a=dn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Us(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=_e.updateQueue,n===null&&(n=Dc(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Sg(){return dn().memoizedState}function Lc(t,n,a,s){var c=Wn();_e.flags|=t,c.memoizedState=Us(1|n,{destroy:void 0},a,s===void 0?null:s)}function Oc(t,n,a,s){var c=dn();s=s===void 0?null:s;var f=c.memoizedState.inst;Qe!==null&&s!==null&&td(s,Qe.memoizedState.deps)?c.memoizedState=Us(n,f,a,s):(_e.flags|=t,c.memoizedState=Us(1|n,f,a,s))}function xg(t,n){Lc(8390656,8,t,n)}function ud(t,n){Oc(2048,8,t,n)}function Xy(t){_e.flags|=4;var n=_e.updateQueue;if(n===null)n=Dc(),_e.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Mg(t){var n=dn().memoizedState;return Xy({ref:n,nextImpl:t}),function(){if((Ge&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function yg(t,n){return Oc(4,2,t,n)}function Eg(t,n){return Oc(4,4,t,n)}function Tg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function bg(t,n,a){a=a!=null?a.concat([t]):null,Oc(4,4,Tg.bind(null,n,t),a)}function fd(){}function Ag(t,n){var a=dn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&td(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Rg(t,n){var a=dn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&td(n,s[1]))return s[0];if(s=t(),Zr){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[s,n],s}function dd(t,n,a){return a===void 0||(ba&1073741824)!==0&&(Re&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=z_(),_e.lanes|=t,dr|=t,a)}function Cg(t,n,a,s){return li(a,n)?a:sr.current!==null?(t=dd(t,a,s),li(t,n)||(vn=!0),t):(ba&106)===0||(ba&1073741824)!==0&&(Re&261930)===0?(vn=!0,t.memoizedState=a):(t=z_(),_e.lanes|=t,dr|=t,n)}function wg(t,n,a,s,c){var f=Rt.p;Rt.p=f!==0&&8>f?f:8;var _=lt.T,C={};C.types=_!==null?_.types:null,lt.T=C,md(t,!1,n,a);try{var X=c(),at=lt.S;if(at!==null&&at(C,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var mt=Fy(X,s);ul(t,n,mt,hi(t))}else ul(t,n,s,hi(t))}catch(Tt){ul(t,n,{then:function(){},status:"rejected",reason:Tt},hi())}finally{Rt.p=f,_!==null&&C.types!==null&&(_.types=C.types),lt.T=_}}function ky(){}function hd(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Dg(t).queue;wg(t,c,n,ge,a===null?ky:function(){return Ng(t),a(s)})}function Dg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ge,baseState:ge,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:ge},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Ng(t){var n=Dg(t);n.next===null&&(n=t.alternate.memoizedState),ul(t,n.next.queue,{},hi())}function pd(){return Dn(Js)}function Ug(){return dn().memoizedState}function Lg(){return dn().memoizedState}function qy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=hi();t=ar(a);var s=rr(n,t,a);s!==null&&(ni(s,n,a),al(s,n,a)),n={cache:Vf()},t.payload=n;return}n=n.return}}function Wy(t,n,a){var s=hi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Pc(t)?Pg(n,a):(a=Lf(t,n,a,s),a!==null&&(ni(a,t,s),Ig(a,n,s)))}function Og(t,n,a){var s=hi();ul(t,n,a,s)}function ul(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pc(t))Pg(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,C=f(_,a);if(c.hasEagerState=!0,c.eagerState=C,li(C,_))return dc(t,n,c,0),je===null&&fc(),!1}catch{}if(a=Lf(t,n,c,s),a!==null)return ni(a,t,s),Ig(a,n,s),!0}return!1}function md(t,n,a,s){if(s={lane:2,revertLane:rh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Pc(t)){if(n)throw Error(r(479))}else n=Lf(t,a,s,2),n!==null&&ni(n,t,2)}function Pc(t){var n=t.alternate;return t===_e||n!==null&&n===_e}function Pg(t,n){Ds=Cc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Ig(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Bo(t,a)}}var Ic={readContext:Dn,use:Nc,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un,useEffectEvent:un},zg={readContext:Dn,use:Nc,useCallback:function(t,n){return Wn().memoizedState=[t,n===void 0?null:n],t},useContext:Dn,useEffect:xg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Lc(4194308,4,Tg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Lc(4194308,4,t,n)},useInsertionEffect:function(t,n){Lc(4,2,t,n)},useMemo:function(t,n){var a=Wn();n=n===void 0?null:n;var s=t();if(Zr){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Wn();if(a!==void 0){var c=a(n);if(Zr){we(!0);try{a(n)}finally{we(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Wy.bind(null,_e,t),[s.memoizedState,t]},useRef:function(t){var n=Wn();return t={current:t},n.memoizedState=t},useState:function(t){t=ld(t);var n=t.queue,a=Og.bind(null,_e,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:fd,useDeferredValue:function(t,n){var a=Wn();return dd(a,t,n)},useTransition:function(){var t=ld(!1);return t=wg.bind(null,_e,t.queue,!0,!1),Wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=_e,c=Wn();if(ye){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),je===null)throw Error(r(349));(Re&127)!==0||ag(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,xg(sg.bind(null,s,f,t),[t]),s.flags|=2048,Us(9,{destroy:void 0},rg.bind(null,s,f,a,n),null),a},useId:function(){var t=Wn(),n=je.identifierPrefix;if(ye){var a=Ki,s=Zi;a=(s&~(1<<32-he(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=wc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=By++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:pd,useFormState:mg,useActionState:mg,useOptimistic:function(t){var n=Wn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=md.bind(null,_e,!0,a),a.dispatch=n,[t,n]},useMemoCache:rd,useCacheRefresh:function(){return Wn().memoizedState=qy.bind(null,_e)},useEffectEvent:function(t){var n=Wn(),a={impl:t};return n.memoizedState=a,function(){if((Ge&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Fg={readContext:Dn,use:Nc,useCallback:Ag,useContext:Dn,useEffect:ud,useImperativeHandle:bg,useInsertionEffect:yg,useLayoutEffect:Eg,useMemo:Rg,useReducer:Uc,useRef:Sg,useState:function(){return Uc(Aa)},useDebugValue:fd,useDeferredValue:function(t,n){var a=dn();return Cg(a,Qe.memoizedState,t,n)},useTransition:function(){var t=Uc(Aa)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:cl(t),n]},useSyncExternalStore:ig,useId:Ug,useHostTransitionStatus:pd,useFormState:gg,useActionState:gg,useOptimistic:function(t,n){var a=dn();return cg(a,Qe,t,n)},useMemoCache:rd,useCacheRefresh:Lg,useEffectEvent:Mg},Yy={readContext:Dn,use:Nc,useCallback:Ag,useContext:Dn,useEffect:ud,useImperativeHandle:bg,useInsertionEffect:yg,useLayoutEffect:Eg,useMemo:Rg,useReducer:od,useRef:Sg,useState:function(){return od(Aa)},useDebugValue:fd,useDeferredValue:function(t,n){var a=dn();return Qe===null?dd(a,t,n):Cg(a,Qe.memoizedState,t,n)},useTransition:function(){var t=od(Aa)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:cl(t),n]},useSyncExternalStore:ig,useId:Ug,useHostTransitionStatus:pd,useFormState:vg,useActionState:vg,useOptimistic:function(t,n){var a=dn();return Qe!==null?cg(a,Qe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:rd,useCacheRefresh:Lg,useEffectEvent:Mg};function gd(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:B({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var _d={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=hi(),c=ar(s);c.payload=n,a!=null&&(c.callback=a),n=rr(t,c,s),n!==null&&(ni(n,t,s),al(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=hi(),c=ar(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=rr(t,c,s),n!==null&&(ni(n,t,s),al(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=hi(),s=ar(a);s.tag=2,n!=null&&(s.callback=n),n=rr(t,s,a),n!==null&&(ni(n,t,a),al(n,t,a))}};function Bg(t,n,a,s,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Qo(a,s)||!Qo(c,f):!0}function Hg(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&_d.enqueueReplaceState(n,n.state,null)}function Kr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=B({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Gg(t){uc(t)}function Vg(t){console.error(t)}function Xg(t){uc(t)}function zc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function kg(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function vd(t,n,a){return a=ar(a),a.tag=3,a.payload={element:null},a.callback=function(){zc(t,n)},a}function qg(t){return t=ar(t),t.tag=3,t}function Wg(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){kg(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){kg(n,a,s),typeof c!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var C=s.stack;this.componentDidCatch(s.value,{componentStack:C!==null?C:""})})}function Zy(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Gr(n,a,c,!0),a=Nn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Fn===null?au():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Ec?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),nh(t,s,c)),!1;case 22:return a.flags|=65536,s===Ec?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),nh(t,s,c)),!1}throw Error(r(435,a.tag))}return nh(t,s,c),au(),!1}if(ye)return n=Nn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Ff&&(t=Error(r(422),{cause:s}),$o(Ei(t,a)))):(s!==Ff&&(n=Error(r(423),{cause:s}),$o(Ei(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Ei(s,a),c=vd(t.stateNode,s,c),Zf(t,c),fn!==4&&(fn=2)),!1;var f=Error(r(520),{cause:s});if(f=Ei(f,a),vl===null?vl=[f]:vl.push(f),fn!==4&&(fn=2),n===null)return!0;s=Ei(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=vd(a.stateNode,s,t),Zf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(hr===null||!hr.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=qg(c),Wg(c,t,a,s),Zf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Sd=Error(r(461)),vn=!1;function yn(t,n,a,s){n.child=t===null?Q0(n,null,a,s):Yr(n,t.child,a,s)}function Yg(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var C in s)C!=="ref"&&(_[C]=s[C])}else _=s;return Vr(n),s=ed(t,n,a,_,f,c),C=nd(),t!==null&&!vn?(id(t,n,c),Ra(t,n,c)):(ye&&C&&gc(n),n.flags|=1,yn(t,n,s,c),n.child)}function Zg(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Of(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Kg(t,n,f,s,c)):(t=pc(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Rd(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Qo,a(_,s)&&t.ref===n.ref)return Ra(t,n,c)}return n.flags|=1,t=Ma(f,s),t.ref=n.ref,t.return=n,n.child=t}function Kg(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Qo(f,s)&&t.ref===n.ref)if(vn=!1,n.pendingProps=s=f,Rd(t,c))(t.flags&131072)!==0&&(vn=!0);else return n.lanes=t.lanes,Ra(t,n,c)}return xd(t,n,a,s,c)}function Qg(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Jg(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Mc(n,f!==null?f.cachePool:null),f!==null?$0(n,f):Qf(),tg(n);else return s=n.lanes=536870912,Jg(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(Mc(n,f.cachePool),$0(n,f),lr(),n.memoizedState=null):(t!==null&&Mc(n,null),Qf(),lr());return yn(t,n,c,a),n.child}function fl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Jg(t,n,a,s,c){var f=kf();return f=f===null?null:{parent:gn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Mc(n,null),Qf(),tg(n),t!==null&&Gr(t,n,s,!0),n.childLanes=c,null}function Fc(t,n){return n=Bc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function jg(t,n,a){return Yr(n,t.child,null,a),t=Fc(n,n.pendingProps),t.flags|=2,ci(n),n.memoizedState=null,t}function Ky(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ye){if(s.mode==="hidden")return t=Fc(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},fl(null,t);if(jf(n),(t=tn)?(t=Tv(t,Ai),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ja!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=P0(t),a.return=n,n.child=a,bn=n,tn=null)):t=null,t===null)throw tr(n);return n.lanes=536870912,null}return Fc(n,s)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(jf(n),c)if(n.flags&256)n.flags&=-257,n=jg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(vn||Gr(t,n,a,!1),c=(a&t.childLanes)!==0,vn||c){if(sr.current===null){if(s=je,s!==null&&(_=Ho(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,zr(t,_),ni(s,t,_),Sd;au()}n=jg(t,n,a)}else t=f.treeContext,tn=Ci(_.nextSibling),bn=n,ye=!0,$a=null,Ai=!1,t!==null&&F0(n,t),n=Fc(n,s),n.flags|=134221824;return n}return t=Ma(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ls(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function xd(t,n,a,s,c){return Vr(n),a=ed(t,n,a,s,void 0,c),s=nd(),t!==null&&!vn?(id(t,n,c),Ra(t,n,c)):(ye&&s&&gc(n),n.flags|=1,yn(t,n,a,c),n.child)}function $g(t,n,a,s,c,f){return Vr(n),n.updateQueue=null,a=ng(n,s,a,c),eg(t),s=nd(),t!==null&&!vn?(id(t,n,f),Ra(t,n,f)):(ye&&s&&gc(n),n.flags|=1,yn(t,n,a,f),n.child)}function t_(t,n,a,s,c){if(Vr(n),n.stateNode===null){var f=Es,_=a.contextType;typeof _=="object"&&_!==null&&(f=Dn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=_d,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Wf(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Dn(_):Es,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(gd(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&_d.enqueueReplaceState(f,f.state,null),sl(n,s,f,c),rl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var C=n.memoizedProps,X=Kr(a,C);f.props=X;var at=f.context,mt=a.contextType;_=Es,typeof mt=="object"&&mt!==null&&(_=Dn(mt));var Tt=a.getDerivedStateFromProps;mt=typeof Tt=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,mt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||at!==_)&&Hg(n,f,s,_),ir=!1;var et=n.memoizedState;f.state=et,sl(n,s,f,c),rl(),at=n.memoizedState,C||et!==at||ir?(typeof Tt=="function"&&(gd(n,a,Tt,s),at=n.memoizedState),(X=ir||Bg(n,a,X,s,et,at,_))?(mt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=at),f.props=s,f.state=at,f.context=_,s=X):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Yf(t,n),_=n.memoizedProps,mt=Kr(a,_),f.props=mt,Tt=n.pendingProps,et=f.context,at=a.contextType,X=Es,typeof at=="object"&&at!==null&&(X=Dn(at)),C=a.getDerivedStateFromProps,(at=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==Tt||et!==X)&&Hg(n,f,s,X),ir=!1,et=n.memoizedState,f.state=et,sl(n,s,f,c),rl();var dt=n.memoizedState;_!==Tt||et!==dt||ir||t!==null&&t.dependencies!==null&&Sc(t.dependencies)?(typeof C=="function"&&(gd(n,a,C,s),dt=n.memoizedState),(mt=ir||Bg(n,a,mt,s,et,dt,X)||t!==null&&t.dependencies!==null&&Sc(t.dependencies))?(at||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,dt,X),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,dt,X)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=dt),f.props=s,f.state=dt,f.context=X,s=mt):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ls(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Yr(n,t.child,null,c),n.child=Yr(n,null,a,c)):yn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Ra(t,n,c),t}function e_(t,n,a,s){return Br(),n.flags|=256,yn(t,n,a,s),n.child}var Md={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yd(t){return{baseLanes:t,cachePool:k0()}}function Ed(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=di),t}function n_(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(Un.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(ye){if(c?or(n):lr(),(t=tn)?(t=Tv(t,Ai),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ja!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=P0(t),a.return=n,n.child=a,bn=n,tn=null)):t=null,t===null)throw tr(n);return yh(t)?n.lanes=32:n.lanes=536870912,null}return f=s.children,s=s.fallback,c?(lr(),c=n.mode,f=Bc({mode:"hidden",children:f},c),s=Fr(s,c,a,null),f.return=n,s.return=n,f.sibling=s,n.child=f,s=n.child,s.memoizedState=yd(a),s.childLanes=Ed(t,_,a),n.memoizedState=Md,fl(null,s)):(or(n),Td(n,f))}var C=t.memoizedState;if(C!==null){var X=C.dehydrated;if(X!==null)return Qy(t,n,f,_,s,X,C,a)}return c?(lr(),c=s.fallback,f=n.mode,C=t.child,X=C.sibling,s=Ma(C,{mode:"hidden",children:s.children}),s.subtreeFlags=C.subtreeFlags&1206910976,X!==null?c=Ma(X,c):(c=Fr(c,f,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,fl(null,s),s=n.child,c=t.child.memoizedState,c===null?c=yd(a):(f=c.cachePool,f!==null?(C=gn._currentValue,f=f.parent!==C?{parent:C,pool:C}:f):f=k0(),c={baseLanes:c.baseLanes|a,cachePool:f}),s.memoizedState=c,s.childLanes=Ed(t,_,a),n.memoizedState=Md,fl(t.child,s)):(or(n),a=t.child,t=a.sibling,a=Ma(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Td(t,n){return n=Bc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Bc(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function Hc(t,n,a){return Yr(n,t.child,null,a),t=Td(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Qy(t,n,a,s,c,f,_,C){if(a)return n.flags&256?(or(n),n.flags&=-257,Hc(t,n,C)):n.memoizedState!==null?(lr(),n.child=t.child,n.flags|=128,null):(lr(),f=c.fallback,_=n.mode,c=Bc({mode:"visible",children:c.children},_),f=Fr(f,_,C,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Yr(n,t.child,null,C),c=n.child,c.memoizedState=yd(C),c.childLanes=Ed(t,s,C),n.memoizedState=Md,fl(null,c));if(or(n),yh(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var X=s.dgst;return s=X,s!==""&&(c=Error(r(419)),c.stack="",c.digest=s,$o({value:c,source:null,stack:null})),Hc(t,n,C)}if(vn||Gr(t,n,C,!1),s=(C&t.childLanes)!==0,vn||s){if(sr.current!==null)return Hc(t,n,C);if(s=je,s!==null&&(c=Ho(s,C),c!==0&&c!==_.retryLane))throw _.retryLane=c,zr(t,c),ni(s,t,c),Sd;return Mh(f)||au(),Hc(t,n,C)}return Mh(f)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,tn=Ci(f.nextSibling),bn=n,ye=!0,$a=null,Ai=!1,t!==null&&F0(n,t),n=Td(n,c.children),n.flags|=134221824,n)}function i_(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),vc(t.return,n,a)}function a_(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&Rc(a)===null&&(n=t),t=t.sibling}return n}function Gc(t,n,a,s,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function bd(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function Ad(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var _=Un.current;if(n.flags&128)return ol(n,_),null;var C=(_&2)!==0;if(C?(_=_&1|2,n.flags|=128):_&=1,ol(n,_),c==="backwards"&&t!==null?(bd(t),yn(t,n,s,a),bd(t)):yn(t,n,s,a),s=ye?jo:0,!C&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&i_(t,a,n);else if(t.tag===19)i_(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"backwards":a=a_(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,bd(n)),Gc(n,!0,c,null,f,s);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Rc(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Gc(n,!0,a,null,f,s);break;case"together":Gc(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=a_(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Gc(n,!1,c,a,f,s)}return n.child}function r_(t,n,a){var s=n.pendingProps;return er(n,n.type,s.value),yn(t,n,s.children,a),n.child}function Ra(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),dr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Gr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ma(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ma(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Rd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Sc(t)))}function Jy(t,n,a){switch(n.tag){case 3:tt(n,n.stateNode.containerInfo),er(n,gn,t.memoizedState.cache),Br();break;case 27:case 5:Ie(n);break;case 4:tt(n,n.stateNode.containerInfo);break;case 10:er(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,jf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return or(n),n.flags|=128,null;s=Gr(t,n,a,!1);var c=n.child.childLanes;return s||(a&c)!==0?n_(t,n,a):(or(n),t=Ra(t,n,a),t!==null?t.sibling:null)}or(n);break;case 19:if(n.flags&128)return Ad(t,n,a);if(c=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Gr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Ad(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ol(n,Un.current),s)break;return null;case 22:return n.lanes=0,Qg(t,n,a,n.pendingProps);case 24:er(n,gn,t.memoizedState.cache)}return Ra(t,n,a)}function s_(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)vn=!0;else{if(!Rd(t,a)&&(n.flags&128)===0)return vn=!1,Jy(t,n,a);vn=(t.flags&131072)!==0}else vn=!1,ye&&(n.flags&1048576)!==0&&z0(n,jo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=qr(n.elementType),n.type=t,typeof t=="function")Of(t)?(s=Kr(t,s),n.tag=1,n=t_(null,n,t,s,a)):(n.tag=0,n=xd(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===V){n.tag=11,n=Yg(null,n,t,s,a);break t}else if(c===Q){n.tag=14,n=Zg(null,n,t,s,a);break t}else if(c===k){n.tag=10,n.type=t,n=r_(null,n,a);break t}}throw n=Et(t)||t,Error(r(306,n,""))}}return n;case 0:return xd(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Kr(s,n.pendingProps),t_(t,n,s,c,a);case 3:t:{if(tt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Yf(t,n),sl(n,s,null,a);var _=n.memoizedState;if(s=_.cache,er(n,gn,s),s!==f.cache&&Gf(n,[gn],a,!0),rl(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=e_(t,n,s,a);break t}else if(s!==c){c=Ei(Error(r(424)),n),$o(c),n=e_(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,tn=Ci(t.firstChild),bn=n,ye=!0,$a=null,Ai=!0,a=Q0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Br(),s===c){n=Ra(t,n,a);break t}yn(t,n,s,a)}n=n.child}return n;case 26:return Ls(t,n),t===null?(a=Nv(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(n.stateNode=uv(n.type,n.pendingProps,Fe.current,n)):n.memoizedState=Nv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ie(n),t===null&&ye&&(s=n.stateNode=Rv(n.type,n.pendingProps,Fe.current),bn=n,Ai=!0,c=tn,gr(n.type)?(Eh=c,tn=Ci(s.firstChild)):tn=c),yn(t,n,n.pendingProps.children,a),Ls(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ye&&((c=s=tn)&&(s=qE(s,n.type,n.pendingProps,Ai),s!==null?(n.stateNode=s,bn=n,tn=Ci(s.firstChild),Ai=!1,c=!0):c=!1),c||tr(n)),Ie(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,s=f.children,ph(c,f)?s=null:_!==null&&ph(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=ed(t,n,Hy,null,null,a),Js._currentValue=c),Ls(t,n),yn(t,n,s,a),n.child;case 6:return t===null&&ye&&((t=a=tn)&&(a=WE(a,n.pendingProps,Ai),a!==null?(n.stateNode=a,bn=n,tn=null,t=!0):t=!1),t||tr(n)),null;case 13:return n_(t,n,a);case 4:return tt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Yr(n,null,s,a):yn(t,n,s,a),n.child;case 11:return Yg(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Ls(t,n),yn(t,n,s,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return r_(t,n,a);case 9:return c=n.type._context,s=n.pendingProps.children,Vr(n),c=Dn(c),s=s(c),n.flags|=1,yn(t,n,s,a),n.child;case 14:return Zg(t,n,n.type,n.pendingProps,a);case 15:return Kg(t,n,n.type,n.pendingProps,a);case 19:return Ad(t,n,a);case 31:return Ky(t,n,a);case 22:return Qg(t,n,a,n.pendingProps);case 24:return Vr(n),s=Dn(gn),t===null?(c=kf(),c===null&&(c=je,f=Vf(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Wf(n),er(n,gn,c)):((t.lanes&a)!==0&&(Yf(t,n),sl(n,null,null,a),rl()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),er(n,gn,s)):(s=f.cache,er(n,gn,s),s!==c.cache&&Gf(n,[gn],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:ye&&gc(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:Ls(t,n),yn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ca(t){t.flags|=4}function Cd(t,n,a,s,c){var f;if((f=(t.mode&32)!==0)&&(f=a===null?Pv(n,s):Pv(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(G_())t.flags|=8192;else throw Wr=Ec,qf}else t.flags&=-16777217}function o_(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Iv(n))if(G_())t.flags|=8192;else throw Wr=Ec,qf}function Vc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Fo():536870912,t.lanes|=n,Fs|=n)}function dl(t,n){if(!ye)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&1206910976,s|=c.flags&1206910976,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function jy(t,n,a){var s=n.pendingProps;switch(zf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ta(gn),rn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(As(n)?Ca(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Bf())),en(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Ca(n),f!==null?(en(n),o_(n,f)):(en(n),Cd(n,c,null,s,a))):f?f!==t.memoizedState?(Ca(n),en(n),o_(n,f)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Ca(n),en(n),Cd(n,c,t,s,a)),null;case 27:if(z(n),a=Fe.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ca(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return en(n),n.subtreeFlags&=-33554433,null}t=ke.current,As(n)?B0(n):(t=Rv(c,s,a),n.stateNode=t,Ca(n))}return en(n),n.subtreeFlags&=-33554433,null;case 5:if(z(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ca(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return en(n),n.subtreeFlags&=-33554433,null}if(f=ke.current,As(n))B0(n);else{var _=El(Fe.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(c,{is:s.is}):_.createElement(c)}}f[A]=n,f[W]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(On(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ca(n)}}return en(n),n.subtreeFlags&=-33554433,Cd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ca(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Fe.current,As(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=bn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[A]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||sv(t.nodeValue,a)),t||tr(n,!0)}else t=El(t).createTextNode(s),t[A]=n,n.stateNode=t}return en(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=As(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[A]=n}else Br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else a=Bf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ci(n),n):(ci(n),null);if((n.flags&128)!==0)throw Error(r(558))}return en(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=As(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[A]=n}else Br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),c=!1}else c=Bf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ci(n),n):(ci(n),null)}return ci(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Vc(n,n.updateQueue),en(n),null);case 4:return rn(),t===null&&ch(n.stateNode.containerInfo),n.flags|=67108864,en(n),null;case 10:return Ta(n.type),en(n),null;case 19:if($f(n),s=n.memoizedState,s===null)return en(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)dl(s,!1);else{if(fn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Rc(t),f!==null){for(n.flags|=128,dl(s,!1),t=f.updateQueue,n.updateQueue=t,Vc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)O0(a,t),a=a.sibling;return ol(n,Un.current&1|2),ye&&ya(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&Yt()>tu&&(n.flags|=128,c=!0,dl(s,!1),n.lanes=4194304)}else{if(!c)if(t=Rc(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Vc(n,t),dl(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!f.alternate&&!ye)return en(n),null}else 2*Yt()-s.renderingStartTime>tu&&a!==536870912&&(n.flags|=128,c=!0,dl(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Yt(),t.sibling=null,f=Un.current,f=c?f&1|2:f&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||ye?ol(n,f):(a=f,Ht(Nn,n),Ht(Un,a),Fn===null&&(Fn=n)),ye&&ya(n,s.treeForkCount),t}return en(n),null;case 22:case 23:return ci(n),Jf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&Vc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Ut(kr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ta(gn),en(n),null;case 25:return null;case 30:return n.flags|=33554432,en(n),null}throw Error(r(156,n.tag))}function $y(t,n){switch(zf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ta(gn),rn(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return z(n),null;case 31:if(n.memoizedState!==null){if(ci(n),n.alternate===null)throw Error(r(340));Br()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ci(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Br()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return $f(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return rn(),null;case 10:return Ta(n.type),null;case 22:case 23:return ci(n),Jf(),t!==null&&Ut(kr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ta(gn),null;case 25:return null;default:return null}}function l_(t,n){switch(zf(n),n.tag){case 3:Ta(gn),rn();break;case 26:case 27:case 5:z(n);break;case 4:rn();break;case 31:n.memoizedState!==null&&ci(n);break;case 13:ci(n);break;case 19:$f(n);break;case 10:Ta(n.type);break;case 22:case 23:ci(n),Jf(),t!==null&&Ut(kr);break;case 24:Ta(gn)}}function hl(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==c)}}catch(C){We(n,n.return,C)}}function cr(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var _=s.inst,C=_.destroy;if(C!==void 0){_.destroy=void 0,c=n;var X=a,at=C;try{at()}catch(mt){We(c,X,mt)}}}s=s.next}while(s!==f)}}catch(mt){We(n,n.return,mt)}}function c_(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{j0(n,a)}catch(s){We(t,t.return,s)}}}function u_(t,n,a){a.props=Kr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){We(t,n,s)}}function Qi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var c=t.stateNode,f=Sa(t.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=_v(f)),s=c.ref;break;case 7:if(t.stateNode===null){var _=new pi(t);g(t.child,!1,XE,_,void 0,void 0),t.stateNode=_}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(C){We(t,n,C)}}function Ln(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){We(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){We(t,n,c)}else a.current=null}function Xc(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Ev(t.stateNode,n[a])}function f_(t){for(var n=t.return;n!==null&&(Dd(n)&&Ev(t.stateNode,n.stateNode),!wd(n));)n=n.return}function pl(t){for(var n=t.return;n!==null&&(Dd(n)&&kE(t.stateNode,n.stateNode),!wd(n));)n=n.return}function wd(t){return t.tag===5||t.tag===3||t.tag===27}function Dd(t){return t&&t.tag===7&&t.stateNode!==null}function Nd(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){We(t,t.return,c)}}function Ud(t,n,a){try{var s=t.stateNode;bE(s,t.type,a,n),s[W]=n}catch(c){We(t,t.return,c)}}function d_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&gr(t.type)||t.tag===4}function Ld(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||d_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&gr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Od(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi)),Xc(t,s),Me=!0;else if(c!==4&&(c===27&&(Xc(t,s),s=null,gr(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(Od(t,n,a,s),t=t.sibling;t!==null;)Od(t,n,a,s),t=t.sibling}function kc(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Xc(t,s),Me=!0;else if(c!==4&&(c===27&&(Xc(t,s),s=null,gr(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(kc(t,n,a,s),t=t.sibling;t!==null;)kc(t,n,a,s),t=t.sibling}function h_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);On(n,s,a),n[A]=t,n[W]=a}catch(f){We(t,t.return,f)}}var qc=!1,ui=null;function p_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(qc=!0)}var Ji=null;function m_(){var t=Ji;return Ji=null,t}var $n=0;function Os(t,n,a,s,c){return $n=0,g_(t.child,n,a,s,c)}function g_(t,n,a,s,c){for(var f=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(s!==null){var C=_h(_);s.push(C),C.view&&(f=!0)}else f||_h(_).view&&(f=!0);qc=!0,mv(_,$n===0?n:n+"_"+$n,a),$n++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c||g_(t.child,n,a,s,c)&&(f=!0));t=t.sibling}return f}function ji(t,n){for(;t!==null;)t.tag===5?gv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||ji(t.child,n)),t=t.sibling}function Wc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Wc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=xa(n.default,n.share),n!=="none"&&(Os(t,a,n,null,!1)||ji(t.child,!1))}t=t.sibling}}function Pd(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,c=Sa(s,a),f=xa(s.default,a.paired?s.share:s.enter);f!=="none"?Os(t,c,f,null,!1)?(Wc(t),a.paired||n||Vs(t,s.onEnter)):ji(t.child,!1):Wc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Pd(t,n),t=t.sibling;else Wc(t)}function Id(t){if(ui!==null&&ui.size!==0){var n=ui;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var c=n.get(s);if(c!==void 0){var f=xa(a.default,a.share);if(f!=="none"&&(Os(t,s,f,null,!1)?(f=t.stateNode,c.paired=f,f.paired=c,Vs(t,a.onShare)):ji(t.child,!1)),n.delete(s),n.size===0)break}}}Id(t)}t=t.sibling}}}function zd(t){if(t.tag===30){var n=t.memoizedProps,a=Sa(n,t.stateNode),s=ui!==null?ui.get(a):void 0,c=xa(n.default,s!==void 0?n.share:n.exit);c!=="none"&&(Os(t,a,c,null,!1)?s!==void 0?(c=t.stateNode,s.paired=c,c.paired=s,ui.delete(a),Vs(t,n.onShare)):Vs(t,n.onExit):ji(t.child,!1)),ui!==null&&Id(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)zd(t),t=t.sibling;else ui!==null&&Id(t)}function __(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=Sa(n,t.stateNode);n=xa(n.default,n.update),t.flags&=-5,n!=="none"&&Os(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&__(t);t=t.sibling}}function Fd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,ji(t.child,!1))}Fd(t)}t=t.sibling}}function Yc(t){if(t.tag===30)t.stateNode.paired=null,ji(t.child,!1),Fd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Yc(t),t=t.sibling;else Fd(t)}function v_(t){for(t=t.child;t!==null;)t.tag===30?ji(t.child,!1):(t.subtreeFlags&33554432)!==0&&v_(t),t=t.sibling}function Bd(t,n,a,s,c,f,_){for(var C=!1;n!==null;){if(n.tag===5){var X=n.stateNode;if(f!==null&&$n<f.length){var at=f[$n],mt=_h(X);(at.view||mt.view)&&(C=!0);var Tt;if(Tt=(t.flags&4)===0)if(mt.clip)Tt=!0;else{Tt=at.rect;var et=mt.rect;Tt=Tt.y!==et.y||Tt.x!==et.x||Tt.height!==et.height||Tt.width!==et.width}Tt&&(t.flags|=4),mt.abs?mt=!at.abs:(at=at.rect,mt=mt.rect,mt=at.height!==mt.height||at.width!==mt.width),mt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&mv(X,$n===0?a:a+"_"+$n,c),C&&(t.flags&4)!==0||(Ji===null&&(Ji=[]),Ji.push(X,$n===0?s:s+"_"+$n,n.memoizedProps)),$n++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:Bd(t,n.child,a,s,c,f,_)&&(C=!0));n=n.sibling}return C}function S_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,c=Sa(a,s),f=xa(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,s=t;var C=t.child;$n=0,c=Bd(s,C,c,c,f,_,!1),(t.flags&4)!==0&&c&&Vs(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&S_(t);t=t.sibling}}var An=!1,Xe=!1,$i=!1,Hd=!1,x_=typeof WeakSet=="function"?WeakSet:Set,Rn=null,ta=!1,ml=!1,Zc=!1,Gd=!1;function tE(t,n,a){if(t=t.containerInfo,dh=js,t=T0(t),Rf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var f=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break t}var C=0,X=-1,at=-1,mt=0,Tt=0,et=t,dt=null;e:for(;;){for(var Ft;et!==s||f!==0&&et.nodeType!==3||(X=C+f),et!==_||c!==0&&et.nodeType!==3||(at=C+c),et.nodeType===3&&(C+=et.nodeValue.length),(Ft=et.firstChild)!==null;)dt=et,et=Ft;for(;;){if(et===t)break e;if(dt===s&&++mt===f&&(X=C),dt===_&&++Tt===c&&(at=C),(Ft=et.nextSibling)!==null)break;et=dt,dt=et.parentNode}et=Ft}s=X===-1||at===-1?null:{start:X,end:at}}else s=null}s=s||{start:0,end:0}}else s=null;for(hh={focusedElem:t,selectionRange:s},js=!1,a=(a&335544064)===a,Rn=n,n=a?9270:1024;Rn!==null;){if(t=Rn,a&&(s=t.deletions,s!==null))for(f=0;f<s.length;f++)a&&zd(s[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&p_(t),Kc(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&zd(s),Kc(a);continue}else if(s!==null&&s.memoizedState!==null){a&&p_(t),Kc(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,Rn=s):(a&&__(t),Kc(a))}}ui=null}function Kc(t){for(;Rn!==null;){var n=Rn,a=t,s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&s!==null){a=void 0,c=s.memoizedProps,s=s.memoizedState;var f=n.stateNode;try{var _=Kr(n.type,c);a=f.getSnapshotBeforeUpdate(_,s),f.__reactInternalSnapshotBeforeUpdate=a}catch(C){We(n,n.return,C)}}break;case 3:if((c&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)xh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":xh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=Sa(s.memoizedProps,s.stateNode),c=n.memoizedProps,c=xa(c.default,c.update),c!=="none"&&Os(s,a,c,s.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Rn=s;break}Rn=n.return}}function M_(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ea(t,a),s&4&&hl(5,a);break;case 1:if(ea(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){We(a,a.return,_)}else{var c=Kr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){We(a,a.return,_)}}s&64&&c_(a),s&512&&Qi(a,a.return);break;case 3:if(ea(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{j0(t,n)}catch(_){We(a,a.return,_)}}break;case 27:n===null&&s&4&&h_(a);case 26:case 5:ea(t,a),n===null&&s&4&&Nd(a),s&512&&Qi(a,a.return);break;case 12:ea(t,a);break;case 31:ea(t,a),s&4&&b_(t,a);break;case 13:ea(t,a),s&4&&A_(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=dE.bind(null,a),YE(t,a))));break;case 22:if(s=a.memoizedState!==null||An,!s){var f=n!==null&&n.memoizedState!==null||Xe;n=An,c=Xe,An=s,(Xe=f)&&!c?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Pi(t,a,s)):ea(t,a),An=n,Xe=c}break;case 30:ea(t,a),s&512&&Qi(a,a.return);break;case 7:s&512&&Qi(a,a.return);default:ea(t,a)}}function Vd(t,n){for(t=t.child;t!==null;)y_(t,n),t=t.sibling}function y_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var c=t.stateNode,f=t.memoizedProps.style,_=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(X){We(t,t.return,X)}Xd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Me=!0}catch(X){We(t,t.return,X)}break;case 18:try{var C=t.stateNode;n?pv(C,!0):pv(t.stateNode,!1)}catch(X){We(t,t.return,X)}break;case 22:case 23:t.memoizedState===null&&Vd(t,n);break;default:Vd(t,n)}}function Xd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:y_(a,s);break t;case 22:a.memoizedState===null&&Xd(a,s);break t;default:Xd(a,s)}}t=t.sibling}}function E_(t){var n=t.alternate;n!==null&&(t.alternate=null,E_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&jt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var an=null,ti=!1;function Li(t,n,a){for(a=a.child;a!==null;)T_(t,n,a),a=a.sibling}function T_(t,n,a){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(te,a)}catch{}switch(a.tag){case 26:Xe||Ln(a,n),Li(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Xe&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xe||Ln(a,n),pl(a);var s=an,c=ti;gr(a.type)&&(an=a.stateNode,ti=!1),Li(t,n,a),Cv(a.stateNode,a.type,a.memoizedProps),an=s,ti=c;break;case 5:Xe||Ln(a,n),pl(a);case 6:if(a.tag===6&&pl(a),s=an,c=ti,an=null,Li(t,n,a),an=s,ti=c,an!==null)if(ti)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(a.stateNode),Me=!0}catch(f){We(a,n,f)}else try{an.removeChild(a.stateNode),Me=!0}catch(f){We(a,n,f)}break;case 18:an!==null&&(ti?(t=an,hv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),$s(t)):hv(an,a.stateNode));break;case 4:s=an,c=ti,an=a.stateNode.containerInfo,ti=!0,Li(t,n,a),an=s,ti=c;break;case 0:case 11:case 14:case 15:cr(2,a,n),Xe||cr(4,a,n),Li(t,n,a);break;case 1:Xe||(Ln(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&u_(a,n,s)),Li(t,n,a);break;case 21:Li(t,n,a);break;case 22:Xe=(s=Xe)||a.memoizedState!==null,Li(t,n,a),Xe=s;break;case 30:Ln(a,n),Li(t,n,a);break;case 7:Xe||Ln(a,n),Li(t,n,a);break;default:Li(t,n,a)}}function b_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{$s(t)}catch(a){We(n,n.return,a)}}}function A_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{$s(t)}catch(a){We(n,n.return,a)}}function eE(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new x_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new x_),n;default:throw Error(r(435,t.tag))}}function Qc(t,n){var a=eE(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=hE.bind(null,t,s);s.then(c,c)}})}function Yn(t,n,a){var s=n.deletions;if(s!==null)for(var c=0;c<s.length;c++){var f=s[c],_=t,C=n,X=C;t:for(;X!==null;){switch(X.tag){case 27:if(gr(X.type)){an=X.stateNode,ti=!1;break t}break;case 5:an=X.stateNode,ti=!1;break t;case 3:case 4:an=X.stateNode.containerInfo,ti=!0;break t}X=X.return}if(an===null)throw Error(r(160));T_(_,C,f),an=null,ti=!1,_=f.alternate,_!==null&&(_.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)R_(n,t,a),n=n.sibling}var Oi=null;function R_(t,n,a){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(c&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var f=0;f<s.length;f++){var _=s[f];_.ref.impl=_.nextImpl}Yn(n,t,a),Zn(t),c&4&&(cr(3,t,t.return),hl(3,t),cr(5,t,t.return));break;case 1:Yn(n,t,a),Zn(t),c&512&&(Xe||s===null||Ln(s,s.return)),c&64&&An&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Oi,Yn(n,t,a),Zn(t),c&512&&(Xe||s===null||Ln(s,s.return)),c&4)if(c=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(An)t.stateNode=uv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,c=f.ownerDocument||f;e:switch(n){case"title":s=c.getElementsByTagName("title")[0],(!s||s[zt]||s[A]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=c.createElement(n),c.head.insertBefore(s,c.querySelector("head > title"))),On(s,n,a),s[A]=t,xe(s),n=s;break t;case"link":if(f=Ov("link","href",c).get(n+(a.href||""))){for(_=0;_<f.length;_++)if(s=f[_],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(_,1);break e}}s=c.createElement(n),On(s,n,a),c.head.appendChild(s);break;case"meta":if(f=Ov("meta","content",c).get(n+(a.content||""))){for(_=0;_<f.length;_++)if(s=f[_],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(_,1);break e}}s=c.createElement(n),On(s,n,a),c.head.appendChild(s);break;default:throw Error(r(468,n))}s[A]=t,xe(s),n=s}t.stateNode=n}else An||Rh(f,t.type,t.stateNode);else t.stateNode=Lv(f,a,t.memoizedProps);else c!==a?(c===null?(n=s.stateNode,n===null||Xe||n.parentNode.removeChild(n)):c.count--,a===null?An||Rh(f,t.type,t.stateNode):Lv(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Ud(t,t.memoizedProps,s.memoizedProps);break;case 27:Yn(n,t,a),Zn(t),c&512&&(Xe||s===null||Ln(s,s.return)),s!==null&&c&4&&Ud(t,t.memoizedProps,s.memoizedProps);break;case 5:if(f=$i,$i=!1,Yn(n,t,a),$i=f,Zn(t),c&512&&(Xe||s===null||Ln(s,s.return)),t.flags&32){n=t.stateNode;try{gs(n,""),Me=!0}catch(mt){We(t,t.return,mt)}}c&4&&t.stateNode!=null&&(n=t.memoizedProps,Ud(t,n,s!==null?s.memoizedProps:n)),c&1024&&(Hd=!0);break;case 6:if(Yn(n,t,a),Zn(t),c&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Me=!0}catch(mt){We(t,t.return,mt)}}break;case 3:if(Me=!1,fu=null,f=Oi,Oi=Tl(n.containerInfo),Yn(n,t,a),Oi=f,Zn(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{$s(n.containerInfo)}catch(mt){We(t,t.return,mt)}Hd&&(Hd=!1,C_(t)),Me=!1;break;case 4:c=$i,$i=An,s=He(),f=Oi,Oi=Tl(t.stateNode.containerInfo),Yn(n,t,a),Zn(t),Oi=f,Me&&ml&&(Zc=!0),Me=s,$i=c;break;case 12:Yn(n,t,a),Zn(t);break;case 31:Yn(n,t,a),Zn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Qc(t,n)));break;case 13:Yn(n,t,a),Zn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&($c=Yt()),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Qc(t,n)));break;case 22:f=t.memoizedState!==null,_=s!==null&&s.memoizedState!==null;var C=An,X=Xe,at=$i;An=C||f,$i=at||f,Xe=X||_,Yn(n,t,a),Xe=X,$i=at,An=C,Zn(t),c&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||s===null||_||An||Xe||(n=_||Xe,a=An,s=Xe,An=f||An,Xe=n,ur(t,2),An=a,Xe=s),!f&&$i||Vd(t,f)),c&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Qc(t,a))));break;case 19:Yn(n,t,a),Zn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Qc(t,n)));break;case 30:c&512&&(Xe||s===null||Ln(s,s.return)),c=He(),f=ml,_=(a&335544064)===a,C=t.memoizedProps,ml=_&&xa(C.default,C.update)!=="none",Yn(n,t,a),Zn(t),_&&s!==null&&Me&&(t.flags|=4),ml=f,Me=c;break;case 21:break;case 7:c&512&&(Xe||s===null||Ln(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Yn(n,t,a),Zn(t)}}function Zn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(d_(s)){a=s;break}s=s.return}s=null;for(var c=t.return;c!==null;){if(Dd(c)){var f=c.stateNode;s===null?s=[f]:s.push(f)}if(wd(c))break;c=c.return}var _=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var C=a.stateNode,X=Ld(t);kc(t,X,C,_);break;case 5:var at=a.stateNode;a.flags&32&&(gs(at,""),a.flags&=-33);var mt=Ld(t);kc(t,mt,at,_);break;case 3:case 4:var Tt=a.stateNode.containerInfo,et=Ld(t);Od(t,et,Tt,_);break;default:throw Error(r(161))}}catch(dt){We(t,t.return,dt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function C_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;C_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,js=!0,n.reset(),js=!1),t=t.sibling}}function Ps(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)w_(n,t),n=n.sibling;else S_(n)}function w_(t,n){var a=t.alternate;if(a===null)Pd(t,!1);else switch(t.tag){case 3:if(Gd=ta=!1,m_(),Ps(n,t),!ta&&!Zc){if(t=Ji,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var c=t[s+1];gv(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Gd=!0}Ji=null;break;case 5:Ps(n,t);break;case 4:s=ta,ta=!1,Ps(n,t),ta&&(Zc=!0),ta=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Pd(t,!1):Ps(n,t));break;case 30:s=ta,c=m_(),ta=!1,Ps(n,t),ta&&(t.flags|=4);var f=t.memoizedProps,_=t.stateNode;n=Sa(f,_),_=Sa(a.memoizedProps,_);var C=xa(f.default,f.update);C==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,$n=0,n=Bd(t,a,n,_,C,f,!0),$n!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Vs(t,t.memoizedProps.onUpdate),Ji=c):c!==null&&(c.push.apply(c,Ji),Ji=c),ta=(t.flags&32)!==0?!0:s;break;default:Ps(n,t)}}function ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)M_(t,n.alternate,n),n=n.sibling}function ur(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:cr(4,a,a.return),ur(a,s);break;case 1:Ln(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&u_(a,a.return,c),ur(a,s);break;case 27:(s&2)!==0&&Cv(a.stateNode,a.type,a.memoizedProps);case 5:Ln(a,a.return),a.tag!==5&&a.tag!==27||pl(a),ur(a,s);break;case 6:pl(a);break;case 26:Ln(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Xe||c.parentNode.removeChild(c),ur(a,s);break;case 22:a.memoizedState===null&&ur(a,s);break;case 30:Ln(a,a.return),ur(a,s);break;case 7:Ln(a,a.return);default:ur(a,s)}t=t.sibling}}function Pi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,_=f.flags,C=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Pi(c,f,a),hl(4,f);break;case 1:if(Pi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(mt){We(s,s.return,mt)}if(s=f,c=s.updateQueue,c!==null){var X=s.stateNode;try{var at=c.shared.hiddenCallbacks;if(at!==null)for(c.shared.hiddenCallbacks=null,c=0;c<at.length;c++)J0(at[c],X)}catch(mt){We(s,s.return,mt)}}C&&_&64&&c_(f),Qi(f,f.return);break;case 27:(a&2)!==0&&h_(f);case 5:f.tag!==5&&f.tag!==27||f_(f),Pi(c,f,a),C&&s===null&&_&4&&Nd(f),Qi(f,f.return);break;case 6:f_(f);break;case 26:X=f.stateNode,f.memoizedState!==null||X===null||An||Rh(Tl(X.ownerDocument),f.type,X),Pi(c,f,a),C&&s===null&&_&4&&Nd(f),Qi(f,f.return);break;case 12:Pi(c,f,a);break;case 31:Pi(c,f,a),C&&_&4&&b_(c,f);break;case 13:Pi(c,f,a),C&&_&4&&A_(c,f);break;case 22:f.memoizedState===null&&Pi(c,f,a),Qi(f,f.return);break;case 30:Pi(c,f,a),Qi(f,f.return);break;case 7:Qi(f,f.return);default:Pi(c,f,a)}n=n.sibling}}function kd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&tl(a))}function qd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&tl(t))}function Ri(t,n,a,s){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)D_(t,n,a,s),n=n.sibling;else c&&v_(n)}function D_(t,n,a,s){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Yc(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(t,n,a,s),f&2048&&hl(9,n);break;case 1:Ri(t,n,a,s);break;case 3:Ri(t,n,a,s),c&&Gd&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&tl(f)));break;case 12:if(f&2048){Ri(t,n,a,s),f=n.stateNode;try{var _=n.memoizedProps,C=_.id,X=_.onPostCommit;typeof X=="function"&&X(C,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(at){We(n,n.return,at)}}else Ri(t,n,a,s);break;case 31:Ri(t,n,a,s);break;case 13:Ri(t,n,a,s);break;case 23:break;case 22:_=n.stateNode,C=n.alternate,n.memoizedState!==null?(c&&C!==null&&C.memoizedState===null&&Yc(C),_._visibility&2?Ri(t,n,a,s):gl(t,n)):(c&&C!==null&&C.memoizedState!==null&&Yc(n),_._visibility&2?Ri(t,n,a,s):(_._visibility|=2,Is(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),f&2048&&kd(C,n);break;case 24:Ri(t,n,a,s),f&2048&&qd(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(ji(f.child,!0),ji(n.child,!0))),Ri(t,n,a,s);break;default:Ri(t,n,a,s)}}function Is(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,C=a,X=s,at=_.flags;switch(_.tag){case 0:case 11:case 15:Is(f,_,C,X,c),hl(8,_);break;case 23:break;case 22:var mt=_.stateNode;_.memoizedState!==null?mt._visibility&2?Is(f,_,C,X,c):gl(f,_):(mt._visibility|=2,Is(f,_,C,X,c)),c&&at&2048&&kd(_.alternate,_);break;case 24:Is(f,_,C,X,c),c&&at&2048&&qd(_.alternate,_);break;default:Is(f,_,C,X,c)}n=n.sibling}}function gl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:gl(a,s),c&2048&&kd(s.alternate,s);break;case 24:gl(a,s),c&2048&&qd(s.alternate,s);break;default:gl(a,s)}n=n.sibling}}var Qr=8192;function Jr(t,n,a){if(t.subtreeFlags&Qr)for(t=t.child;t!==null;)N_(t,n,a),t=t.sibling}function N_(t,n,a){switch(t.tag){case 26:Jr(t,n,a),t.flags&Qr&&(t.memoizedState!==null?o1(a,Oi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Fv(a,t)));break;case 5:Jr(t,n,a),t.flags&Qr&&(t=t.stateNode,(n&335544128)===n&&Fv(a,t));break;case 3:case 4:var s=Oi;Oi=Tl(t.stateNode.containerInfo),Jr(t,n,a),Oi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Qr,Qr=16777216,Jr(t,n,a),Qr=s):Jr(t,n,a));break;case 30:if((t.flags&Qr)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var c=t.stateNode;c.paired=null,ui===null&&(ui=new Map),ui.set(s,c)}Jr(t,n,a);break;default:Jr(t,n,a)}}function U_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function _l(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,O_(s,t)}U_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)L_(t),t=t.sibling}function L_(t){switch(t.tag){case 0:case 11:case 15:_l(t),t.flags&2048&&cr(9,t,t.return);break;case 3:_l(t);break;case 12:_l(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Jc(t)):_l(t);break;default:_l(t)}}function Jc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,O_(s,t)}U_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:cr(8,n,n.return),Jc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Jc(n));break;default:Jc(n)}t=t.sibling}}function O_(t,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:cr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:tl(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Rn=s;else t:for(a=t;Rn!==null;){s=Rn;var c=s.sibling,f=s.return;if(E_(s),s===a){Rn=null;break t}if(c!==null){c.return=f,Rn=c;break t}Rn=f}}}var nE={getCacheForType:function(t){var n=Dn(gn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Dn(gn).controller.signal}},iE=typeof WeakMap=="function"?WeakMap:Map,Ge=0,je=null,Te=null,Re=0,qe=0,fi=null,fr=!1,zs=!1,Wd=!1,wa=0,fn=0,dr=0,jr=0,jc=0,di=0,Fs=0,vl=null,ei=null,Yd=!1,$c=0,P_=0,tu=1/0,eu=null,hr=null,sn=0,Ii=null,$r=null,na=0,Zd=0,Kd=null,I_=null,Bs=null,Hs=null,Gs=null,Sl=0,nu=null;function hi(){return(Ge&2)!==0&&Re!==0?Re&-Re:lt.T!==null?rh():tc()}function z_(){if(di===0)if((Re&536870912)===0||ye){var t=Ur;Ur<<=1,(Ur&3932160)===0&&(Ur=262144),di=t}else di=536870912;return t=Nn.current,t!==null&&(t.flags|=32),di}function Vs(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=_v(Sa(t.memoizedProps,a))),Hs===null&&(Hs=[]),Hs.push(n.bind(null,s))}}function ni(t,n,a){(t===je&&(qe===2||qe===9)||t.cancelPendingCommit!==null)&&(Xs(t,0),pr(t,Re,di,!1)),qi(t,a),((Ge&2)===0||t!==je)&&(t===je&&((Ge&2)===0&&(jr|=a),fn===4&&pr(t,Re,di,!1)),ia(t))}function F_(t,n,a){if((Ge&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ka(t,n),c=s?sE(t,n):Jd(t,n,!0),f=s;do{if(c===0){zs&&!s&&pr(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!aE(a)){c=Jd(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var C=t;c=vl;var X=C.current.memoizedState.isDehydrated;if(X&&(Xs(C,_).flags|=256),_=Jd(C,_,!1),_!==2&&_!==6){if(Wd&&!X){C.errorRecoveryDisabledLanes|=f,jr|=f,c=4;break t}f=ei,ei=c,f!==null&&(ei===null?ei=f:ei.push.apply(ei,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){Xs(t,0),pr(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:pr(s,n,di,!fr);break t;case 2:ei=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=$c+300-Yt(),10<c)){if(pr(s,n,di,!fr),Lr(s,0,!0)!==0)break t;na=n,s.timeoutHandle=gh(B_.bind(null,s,a,ei,eu,Yd,n,di,jr,Fs,fr,f,"Throttled",-0,0),c);break t}B_(s,a,ei,eu,Yd,n,di,jr,Fs,fr,f,null,-0,0)}}break}while(!0);ia(t)}function B_(t,n,a,s,c,f,_,C,X,at,mt,Tt,et,dt){t.timeoutHandle=-1;var Ft=n.subtreeFlags,$t=(f&335544064)===f;if(Tt=null,($t||Ft&8192||(Ft&16785408)===16785408)&&(Tt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},ui=null,N_(n,f,Tt),$t&&(Ft=Tt,$t=t.containerInfo,$t=($t.nodeType===9?$t:$t.ownerDocument).__reactViewTransition,$t!=null&&(Ft.count++,Ft.waitingForViewTransition=!0,Ft=Rl.bind(Ft),$t.finished.then(Ft,Ft))),Ft=(f&62914560)===f?$c-Yt():(f&4194048)===f?P_-Yt():0,Ft=l1(Tt,Ft),Ft!==null)){na=f,t.cancelPendingCommit=Ft(Y_.bind(null,t,n,f,a,s,c,_,C,X,at,mt,Tt,null,et,dt)),pr(t,f,_,!at);return}Y_(t,n,f,a,s,c,_,C,X,at,mt,Tt)}function aE(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!li(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function pr(t,n,a,s){n=ki(t,n),n&=~jc,n&=~jr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-he(c),_=1<<f;s[f]=-1,c&=~_}a!==0&&Or(t,a,n)}function iu(){return(Ge&6)===0?(xl(0),!1):!0}function Qd(){if(Te!==null){if(qe===0)var t=Te.return;else t=Te,Ea=Hr=null,ad(t),ws=null,il=0,t=Te;for(;t!==null;)l_(t.alternate,t),t=t.return;Te=null}}function Xs(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,CE(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),na=0,Qd(),je=t,Te=a=Ma(t.current,null),Re=n,qe=0,fi=null,fr=!1,zs=Ka(t,n),Wd=!1,Fs=di=jc=jr=dr=fn=0,ei=vl=null,Yd=!1,wa=ki(t,n),fc(),a}function H_(t,n){_e=null,lt.H=Ic,n===Cs||n===yc?(n=Y0(),qe=3):n===qf?(n=Y0(),qe=4):qe=n===Sd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,fi=n,Te===null&&(fn=1,zc(t,Ei(n,t.current)))}function G_(){var t=Nn.current;return t===null?!0:(Re&4194048)===Re?Fn===null:(Re&62914560)===Re||(Re&536870912)!==0?t===Fn:!1}function V_(){var t=lt.H;return lt.H=Ic,t===null?Ic:t}function X_(){var t=lt.A;return lt.A=nE,t}function au(){fn=4,fr||(Re&4194048)!==Re&&Nn.current!==null||(zs=!0),(dr&134217727)===0&&(jr&134217727)===0||je===null||pr(je,Re,di,!1)}function Jd(t,n,a){var s=Ge;Ge|=2;var c=V_(),f=X_();(je!==t||Re!==n)&&(eu=null,Xs(t,n)),n=!1;var _=fn;t:do try{if(qe!==0&&Te!==null){var C=Te,X=fi;switch(qe){case 8:Qd(),_=6;break t;case 3:case 2:case 9:case 6:Nn.current===null&&(n=!0);var at=qe;if(qe=0,fi=null,ks(t,C,X,at),a&&zs){_=0;break t}break;default:at=qe,qe=0,fi=null,ks(t,C,X,at)}}rE(),_=fn;break}catch(mt){H_(t,mt)}while(!0);return n&&t.shellSuspendCounter++,Ea=Hr=null,Ge=s,lt.H=c,lt.A=f,Te===null&&(je=null,Re=0,fc()),_}function rE(){for(;Te!==null;)k_(Te)}function sE(t,n){var a=Ge;Ge|=2;var s=V_(),c=X_();je!==t||Re!==n?(eu=null,tu=Yt()+500,Xs(t,n)):zs=Ka(t,n);t:do try{if(qe!==0&&Te!==null){n=Te;var f=fi;e:switch(qe){case 1:qe=0,fi=null,ks(t,n,f,1);break;case 2:case 9:if(q0(f)){qe=0,fi=null,q_(n);break}n=function(){qe!==2&&qe!==9||je!==t||(qe=7),ia(t)},f.then(n,n);break t;case 3:qe=7;break t;case 4:qe=5;break t;case 7:q0(f)?(qe=0,fi=null,q_(n)):(qe=0,fi=null,ks(t,n,f,7));break;case 5:var _=null;switch(Te.tag){case 26:_=Te.memoizedState;case 5:case 27:var C=Te;if(_?Iv(_):C.stateNode.complete){qe=0,fi=null;var X=C.sibling;if(X!==null)Te=X;else{var at=C.return;at!==null?(Te=at,ru(at)):Te=null}break e}}qe=0,fi=null,ks(t,n,f,5);break;case 6:qe=0,fi=null,ks(t,n,f,6);break;case 8:Qd(),fn=6;break t;default:throw Error(r(462))}}oE();break}catch(mt){H_(t,mt)}while(!0);return Ea=Hr=null,lt.H=s,lt.A=c,Ge=a,Te!==null?0:(je=null,Re=0,fc(),fn)}function oE(){for(;Te!==null&&!Gt();)k_(Te)}function k_(t){var n=s_(t.alternate,t,wa);t.memoizedProps=t.pendingProps,n===null?ru(t):Te=n}function q_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=$g(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=$g(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:ad(n);var s=n;s===bn&&(ye?(_c(s),s.tag===5&&s.stateNode!=null&&(tn=s.stateNode)):(_c(s),ye=!0));default:l_(a,n),n=Te=O0(n,wa),n=s_(a,n,wa)}t.memoizedProps=t.pendingProps,n===null?ru(t):Te=n}function ks(t,n,a,s){Ea=Hr=null,ad(n),ws=null,il=0;var c=n.return;try{if(Zy(t,c,n,a,Re)){fn=1,zc(t,Ei(a,t.current)),Te=null;return}}catch(f){if(c!==null)throw Te=c,f;fn=1,zc(t,Ei(a,t.current)),Te=null;return}n.flags&32768?(ye||s===1?t=!0:zs||(Re&536870912)!==0?t=!1:(fr=t=!0,(s===2||s===9||s===3||s===6)&&(s=Nn.current,s!==null&&s.tag===13&&(s.flags|=16384))),W_(n,t)):ru(n)}function ru(t){var n=t;do{if((n.flags&32768)!==0){W_(n,fr);return}t=n.return;var a=jy(n.alternate,n,wa);if(a!==null){Te=a;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=t}while(n!==null);fn===0&&(fn=5)}function W_(t,n){do{var a=$y(t.alternate,t);if(a!==null){a.flags&=32767,Te=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Te=t;return}Te=t=a}while(t!==null);fn=6,Te=null}function Y_(t,n,a,s,c,f,_,C,X,at,mt,Tt){t.cancelPendingCommit=null;do su();while(sn!==0);if((Ge&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===je&&(Te=je=null,Re=0),$r=n,Ii=t,na=a,Kd=c,I_=s,lE(t,n,a,_,C,X,Tt)}}function lE(t,n,a,s,c,f,_){var C=n.lanes|n.childLanes;if(Zd=C,C|=Uf,$l(t,a,C,s,c,f),Hs=null,(a&335544064)===a?(Gs=Iy(t),s=10262):(Gs=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,pE(Lt,function(){return eh(),null})):(t.callbackNode=null,t.callbackPriority=0),qc=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=lt.T,lt.T=null,c=Rt.p,Rt.p=2,f=Ge,Ge|=4;try{tE(t,n,a)}finally{Ge=f,Rt.p=c,lt.T=s}}sn=1,qc?Bs=OE(_,t.containerInfo,Gs,jd,$d,uE,th,eh,cE):(jd(),$d(),th())}function cE(t){if(sn!==0){var n=Ii.onRecoverableError;n(t,{componentStack:null})}}function uE(){sn===3&&(sn=0,w_($r,Ii),sn=4)}function jd(){if(sn===1){sn=0;var t=Ii,n=$r,a=na,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=lt.T,lt.T=null;var c=Rt.p;Rt.p=2;var f=Ge;Ge|=4;try{ml=Zc=!1,R_(n,t,a),a=hh;var _=T0(t.containerInfo),C=a.focusedElem,X=a.selectionRange;if(_!==C&&C&&C.ownerDocument&&E0(C.ownerDocument.documentElement,C)){if(X!==null&&Rf(C)){var at=X.start,mt=X.end;if(mt===void 0&&(mt=at),"selectionStart"in C)C.selectionStart=at,C.selectionEnd=Math.min(mt,C.value.length);else{var Tt=C.ownerDocument||document,et=Tt&&Tt.defaultView||window;if(et.getSelection){var dt=et.getSelection(),Ft=C.textContent.length,$t=Math.min(X.start,Ft),ve=X.end===void 0?$t:Math.min(X.end,Ft);!dt.extend&&$t>ve&&(_=ve,ve=$t,$t=_);var it=y0(C,$t),Z=y0(C,ve);if(it&&Z&&(dt.rangeCount!==1||dt.anchorNode!==it.node||dt.anchorOffset!==it.offset||dt.focusNode!==Z.node||dt.focusOffset!==Z.offset)){var ct=Tt.createRange();ct.setStart(it.node,it.offset),dt.removeAllRanges(),$t>ve?(dt.addRange(ct),dt.extend(Z.node,Z.offset)):(ct.setEnd(Z.node,Z.offset),dt.addRange(ct))}}}}for(Tt=[],dt=C;dt=dt.parentNode;)dt.nodeType===1&&Tt.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Tt.length;C++){var yt=Tt[C];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}js=!!dh,hh=dh=null}finally{Ge=f,Rt.p=c,lt.T=s}}t.current=n,sn=2}}function $d(){if(sn===2){sn=0;var t=Ii,n=$r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=lt.T,lt.T=null;var s=Rt.p;Rt.p=2;var c=Ge;Ge|=4;try{M_(t,n.alternate,n)}finally{Ge=c,Rt.p=s,lt.T=a}}sn=3}}function th(){if(sn===4||sn===3){sn=0;var t=Bs;Bs=null,Bt();var n=Ii,a=$r,s=na,c=I_,f=(s&335544064)===s?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?sn=5:(sn=0,$r=Ii=null,Z_(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(hr=null),Vo(s),a=a.stateNode,qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(te,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=lt.T,f=Rt.p,Rt.p=2,lt.T=null;try{for(var _=n.onRecoverableError,C=0;C<c.length;C++){var X=c[C];_(X.value,{componentStack:X.stack})}}finally{lt.T=a,Rt.p=f}}if(c=Hs,_=Gs,Gs=null,c!==null&&(Hs=null,_===null&&(_=[]),t!==null))for(X=0;X<c.length;X++)a=(0,c[X])(_),a!==void 0&&t.finished.finally(a);(na&3)!==0&&su(),ia(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===nu?Sl++:(Sl=0,nu=n):(Sl=0,nu=null),xl(0)}}function Z_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,tl(n)))}function su(){return Bs!==null&&(Bs.skipTransition(),Bs=null),jd(),$d(),th(),eh()}function eh(){if(sn!==5)return!1;var t=Ii,n=Zd;Zd=0;var a=Vo(na),s=lt.T,c=Rt.p;try{Rt.p=32>a?32:a,lt.T=null,a=Kd,Kd=null;var f=Ii,_=na;if(sn=0,$r=Ii=null,na=0,(Ge&6)!==0)throw Error(r(331));var C=Ge;if(Ge|=4,L_(f.current),D_(f,f.current,_,a),Ge=C,xl(0,!1),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(te,f)}catch{}return!0}finally{Rt.p=c,lt.T=s,Z_(t,n)}}function K_(t,n,a){n=Ei(a,n),n=vd(t.stateNode,n,2),t=rr(t,n,2),t!==null&&(qi(t,2),ia(t))}function We(t,n,a){if(t.tag===3)K_(t,t,a);else for(;n!==null;){if(n.tag===3){K_(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(hr===null||!hr.has(s))){t=Ei(a,t),a=qg(2),s=rr(n,a,2),s!==null&&(Wg(a,s,n,t),qi(s,2),ia(s));break}}n=n.return}}function nh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new iE;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Wd=!0,c.add(a),t=fE.bind(null,t,n,a),n.then(t,t))}function fE(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,je===t&&(Re&a)===a&&((fn===4||fn===3&&(Re&62914560)===Re&&300>Yt()-$c)&&(Ge&2)===0?Xs(t,0):jc|=a,Fs===Re&&(Fs=0)),ia(t)}function Q_(t,n){n===0&&(n=Fo()),t=zr(t,n),t!==null&&(qi(t,n),ia(t))}function dE(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Q_(t,a)}function hE(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Q_(t,a)}function pE(t,n){return Ot(t,n)}var qs=null,Ws=null,ih=!1,ou=!1,ah=!1,mr=0;function ia(t){t!==Ws&&t.next===null&&(Ws===null?qs=Ws=t:Ws=Ws.next=t),ou=!0,ih||(ih=!0,gE())}function xl(t,n){if(!ah&&ou){ah=!0;do for(var a=!1,s=qs;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var _=s.suspendedLanes,C=s.pingedLanes;f=(1<<31-he(42|t)+1)-1,f&=c&~(_&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,tv(s,f))}else f=Re,f=Lr(s,s===je?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ka(s,f)||(a=!0,tv(s,f));s=s.next}while(a);ah=!1}}function mE(){J_()}function J_(){ou=ih=!1;var t=0;mr!==0&&RE()&&(t=mr);for(var n=Yt(),a=null,s=qs;s!==null;){var c=s.next,f=j_(s,n);f===0?(s.next=null,a===null?qs=c:a.next=c,c===null&&(Ws=a)):(a=s,(t!==0||(f&3)!==0)&&(ou=!0)),s=c}sn!==0&&sn!==5||xl(t),mr!==0&&(mr=0)}function j_(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-he(f),C=1<<_,X=c[_];X===-1?((C&a)===0||(C&s)!==0)&&(c[_]=zo(C,n)):X<=n&&(t.expiredLanes|=C),f&=~C}if(n=je,a=Re,a=Lr(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(qe===2||qe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&ee(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ka(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&ee(s),Vo(a)){case 2:case 8:a=$;break;case 32:a=Lt;break;case 268435456:a=It;break;default:a=Lt}return s=$_.bind(null,t),a=Ot(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&ee(s),t.callbackPriority=2,t.callbackNode=null,2}function $_(t,n){if(sn!==0&&sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(su()&&t.callbackNode!==a)return null;var s=Re;return s=Lr(t,t===je?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(F_(t,s,n),j_(t,Yt()),t.callbackNode!=null&&t.callbackNode===a?$_.bind(null,t):null)}function tv(t,n){if(su())return null;F_(t,n,!0)}function gE(){wE(function(){(Ge&6)!==0?Ot(de,mE):J_()})}function rh(){if(mr===0){var t=Xr;t===0&&(t=hs,hs<<=1,(hs&261888)===0&&(hs=256)),mr=t}return mr}function ev(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ic(t)}function _E(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=ev((c[W]||null).action),_=s.submitter;_&&(n=(n=_[W]||null)?ev(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var C=new oc("action","action",null,s,c);t.push({event:C,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(mr!==0){var X=new FormData(c,_);hd(a,{pending:!0,data:X,method:c.method,action:f},null,X)}}else typeof f=="function"&&(C.preventDefault(),X=new FormData(c,_),hd(a,{pending:!0,data:X,method:c.method,action:f},f,X))},currentTarget:c}]})}}for(var sh=0;sh<Nf.length;sh++){var oh=Nf[sh],vE=oh.toLowerCase(),SE=oh[0].toUpperCase()+oh.slice(1);Ui(vE,"on"+SE)}Ui(R0,"onAnimationEnd"),Ui(C0,"onAnimationIteration"),Ui(w0,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(Cy,"onTransitionRun"),Ui(wy,"onTransitionStart"),Ui(Dy,"onTransitionCancel"),Ui(D0,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),Xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ml));function nv(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var C=s[_],X=C.instance,at=C.currentTarget;if(C=C.listener,X!==f&&c.isPropagationStopped())break t;f=C,c.currentTarget=at;try{f(c)}catch(mt){uc(mt)}c.currentTarget=null,f=X}else for(_=0;_<s.length;_++){if(C=s[_],X=C.instance,at=C.currentTarget,C=C.listener,X!==f&&c.isPropagationStopped())break t;f=C,c.currentTarget=at;try{f(c)}catch(mt){uc(mt)}c.currentTarget=null,f=X}}}}function be(t,n){var a=n[ut];a===void 0&&(a=n[ut]=new Set);var s=t+"__bubble";a.has(s)||(iv(n,t,2,!1),a.add(s))}function lh(t,n,a){var s=0;n&&(s|=4),iv(a,t,s,n)}var lu="_reactListening"+Math.random().toString(36).slice(2);function ch(t){if(!t[lu]){t[lu]=!0,Ve.forEach(function(a){a!=="selectionchange"&&(xE.has(a)||lh(a,!1,t),lh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[lu]||(n[lu]=!0,lh("selectionchange",!1,n))}}function iv(t,n,a,s){switch(Wv(n)){case 2:var c=d1;break;case 8:c=h1;break;default:c=wh}a=c.bind(null,n,a,t),c=void 0,!_f||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function uh(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var C=s.stateNode.containerInfo;if(C===c)break;if(_===4)for(_=s.return;_!==null;){var X=_.tag;if((X===3||X===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;C!==null;){if(_=ce(C),_===null)return;if(X=_.tag,X===5||X===6||X===26||X===27){s=f=_;continue t}C=C.parentNode}}s=s.return}i0(function(){var at=f,mt=mf(a),Tt=[];t:{var et=N0.get(t);if(et!==void 0){var dt=oc,Ft=t;switch(t){case"keypress":if(rc(a)===0)break t;case"keydown":case"keyup":dt=ay;break;case"focusin":Ft="focus",dt=Mf;break;case"focusout":Ft="blur",dt=Mf;break;case"beforeblur":case"afterblur":dt=Mf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=s0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=WM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=cy;break;case R0:case C0:case w0:dt=KM;break;case D0:dt=fy;break;case"scroll":case"scrollend":dt=kM;break;case"wheel":dt=hy;break;case"copy":case"cut":case"paste":dt=JM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=l0;break;case"submit":dt=oy;break;case"toggle":case"beforetoggle":dt=my}var $t=(n&4)!==0,ve=!$t&&(t==="scroll"||t==="scrollend"),it=$t?et!==null?et+"Capture":null:et;$t=[];for(var Z=at,ct;Z!==null;){var yt=Z;if(ct=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||ct===null||it===null||(yt=Xo(Z,it),yt!=null&&$t.push(yl(Z,yt,ct))),ve)break;Z=Z.return}0<$t.length&&(et=new dt(et,Ft,null,a,mt),Tt.push({event:et,listeners:$t}))}}if((n&7)===0){t:{if(dt=t==="mouseover"||t==="pointerover",et=t==="mouseout"||t==="pointerout",dt&&a!==pf&&(Ft=a.relatedTarget||a.fromElement)&&(ce(Ft)||Ft[gt]))break t;(et||dt)&&(Ft=mt.window===mt?mt:(dt=mt.ownerDocument)?dt.defaultView||dt.parentWindow:window,et?(dt=a.relatedTarget||a.toElement,et=at,dt=dt?ce(dt):null,dt!==null&&(ve=u(dt),$t=dt.tag,dt!==ve||$t!==5&&$t!==27&&$t!==6)&&(dt=null)):(et=null,dt=at),et!==dt&&($t=s0,yt="onMouseLeave",it="onMouseEnter",Z="mouse",(t==="pointerout"||t==="pointerover")&&($t=l0,yt="onPointerLeave",it="onPointerEnter",Z="pointer"),ve=et==null?Ft:Kt(et),ct=dt==null?Ft:Kt(dt),Ft=new $t(yt,Z+"leave",et,a,mt),Ft.target=ve,Ft.relatedTarget=ct,yt=null,ce(mt)===at&&($t=new $t(it,Z+"enter",dt,a,mt),$t.target=ct,$t.relatedTarget=ve,yt=$t),ve=yt,$t=et&&dt?I(et,dt,ME):null,et!==null&&av(Tt,Ft,et,$t,!1),dt!==null&&ve!==null&&av(Tt,ve,dt,$t,!0)))}t:{if(et=at?Kt(at):window,dt=et.nodeName&&et.nodeName.toLowerCase(),dt==="select"||dt==="input"&&et.type==="file")var Qt=g0;else if(p0(et))if(_0)Qt=by;else{Qt=Ey;var Ce=yy}else dt=et.nodeName,!dt||dt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?at&&hf(at.elementType)&&(Qt=g0):Qt=Ty;if(Qt&&(Qt=Qt(t,at))){m0(Tt,Qt,a,mt);break t}Ce&&Ce(t,et,at)}switch(Ce=at?Kt(at):window,t){case"focusin":(p0(Ce)||Ce.contentEditable==="true")&&(xs=Ce,Cf=at,Jo=null);break;case"focusout":Jo=Cf=xs=null;break;case"mousedown":wf=!0;break;case"contextmenu":case"mouseup":case"dragend":wf=!1,b0(Tt,a,mt);break;case"selectionchange":if(Ry)break;case"keydown":case"keyup":b0(Tt,a,mt)}var ae;if(Ef)t:{switch(t){case"compositionstart":var le="onCompositionStart";break t;case"compositionend":le="onCompositionEnd";break t;case"compositionupdate":le="onCompositionUpdate";break t}le=void 0}else Ss?d0(t,a)&&(le="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(le="onCompositionStart");le&&(c0&&a.locale!=="ko"&&(Ss||le!=="onCompositionStart"?le==="onCompositionEnd"&&Ss&&(ae=a0()):(Qa=mt,vf="value"in Qa?Qa.value:Qa.textContent,Ss=!0)),Ce=cu(at,le),0<Ce.length&&(le=new o0(le,t,null,a,mt),Tt.push({event:le,listeners:Ce}),ae?le.data=ae:(ae=h0(a),ae!==null&&(le.data=ae)))),(ae=_y?vy(t,a):Sy(t,a))&&(le=cu(at,"onBeforeInput"),0<le.length&&(Ce=new o0("onBeforeInput","beforeinput",null,a,mt),Tt.push({event:Ce,listeners:le}),Ce.data=ae)),_E(Tt,t,at,a,mt)}nv(Tt,n)})}function yl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function cu(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Xo(t,a),c!=null&&s.unshift(yl(t,c,f)),c=Xo(t,n),c!=null&&s.push(yl(t,c,f))),t.tag===3)return s;t=t.return}return[]}function ME(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function av(t,n,a,s,c){for(var f=n._reactName,_=[];a!==null&&a!==s;){var C=a,X=C.alternate,at=C.stateNode;if(C=C.tag,X!==null&&X===s)break;C!==5&&C!==26&&C!==27||at===null||(X=at,c?(at=Xo(a,f),at!=null&&_.unshift(yl(a,at,X))):c||(at=Xo(a,f),at!=null&&_.push(yl(a,at,X)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var yE=/\r\n?/g,EE=/\u0000|\uFFFD/g;function rv(t){return(typeof t=="string"?t:""+t).replace(yE,`
`).replace(EE,"")}function sv(t,n){return n=rv(n),rv(t)===n}function Ye(t,n,a,s,c,f){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||gs(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&gs(t,""+s);else return;break;case"className":oi(t,"class",s);break;case"tabIndex":oi(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":oi(t,a,s);break;case"style":e0(t,s,f);return;case"data":if(n!=="object"){oi(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ic(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ye(t,n,"name",c.name,c,null),Ye(t,n,"formEncType",c.formEncType,c,null),Ye(t,n,"formMethod",c.formMethod,c,null),Ye(t,n,"formTarget",c.formTarget,c,null)):(Ye(t,n,"encType",c.encType,c,null),Ye(t,n,"method",c.method,c,null),Ye(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ic(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Yi);return;case"onScroll":s!=null&&be("scroll",t);return;case"onScrollEnd":s!=null&&be("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=ic(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":be("beforetoggle",t),be("toggle",t),$e(t,"popover",s);break;case"xlinkActuate":Ae(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ae(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ae(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ae(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ae(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ae(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":$e(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=VM.get(a)||a,$e(t,a,s);else return}Me=!0}function fh(t,n,a,s,c,f){switch(a){case"style":e0(t,s,f);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")gs(t,s);else if(typeof s=="number"||typeof s=="bigint")gs(t,""+s);else return;break;case"onScroll":s!=null&&be("scroll",t);return;case"onScrollEnd":s!=null&&be("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Yi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Mn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=t[W]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,c),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,s,c);break t}Me=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):$e(t,a,s)}return}Me=!0}function On(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",t),be("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ye(t,n,f,_,a,null)}}c&&Ye(t,n,"srcSet",a.srcSet,a,null),s&&Ye(t,n,"src",a.src,a,null);return;case"input":be("invalid",t);var C=f=_=c=null,X=null,at=null;for(s in a)if(a.hasOwnProperty(s)){var mt=a[s];if(mt!=null)switch(s){case"name":c=mt;break;case"type":_=mt;break;case"checked":X=mt;break;case"defaultChecked":at=mt;break;case"value":f=mt;break;case"defaultValue":C=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,n));break;default:Ye(t,n,s,mt,a,null)}}Jm(t,f,C,X,at,_,c,!1);return;case"select":be("invalid",t),s=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(C=a[c],C!=null))switch(c){case"value":f=C;break;case"defaultValue":_=C;break;case"multiple":s=C;default:Ye(t,n,c,C,a,null)}n=f,a=_,t.multiple=!!s,n!=null?ms(t,!!s,n,!1):a!=null&&ms(t,!!s,a,!0);return;case"textarea":be("invalid",t),f=c=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(C=a[_],C!=null))switch(_){case"value":s=C;break;case"defaultValue":c=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:Ye(t,n,_,C,a,null)}$m(t,s,c,f);return;case"option":for(X in a)a.hasOwnProperty(X)&&(s=a[X],s!=null)&&(X==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ye(t,n,X,s,a,null));return;case"dialog":be("beforetoggle",t),be("toggle",t),be("cancel",t),be("close",t);break;case"iframe":case"object":be("load",t);break;case"video":case"audio":for(s=0;s<Ml.length;s++)be(Ml[s],t);break;case"image":be("error",t),be("load",t);break;case"details":be("toggle",t);break;case"embed":case"source":case"link":be("error",t),be("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in a)if(a.hasOwnProperty(at)&&(s=a[at],s!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ye(t,n,at,s,a,null)}return;default:if(hf(n)){for(mt in a)a.hasOwnProperty(mt)&&(s=a[mt],s!==void 0&&fh(t,n,mt,s,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(s=a[C],s!=null&&Ye(t,n,C,s,a,null))}var TE={};function bE(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,C=null,X=null,at=null,mt=null;for(dt in a){var Tt=a[dt];if(a.hasOwnProperty(dt)&&Tt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":X=Tt;default:s.hasOwnProperty(dt)||Ye(t,n,dt,null,s,Tt)}}for(var et in s){var dt=s[et];if(Tt=a[et],s.hasOwnProperty(et)&&(dt!=null||Tt!=null))switch(et){case"type":dt!==Tt&&(Me=!0),f=dt;break;case"name":dt!==Tt&&(Me=!0),c=dt;break;case"checked":dt!==Tt&&(Me=!0),at=dt;break;case"defaultChecked":dt!==Tt&&(Me=!0),mt=dt;break;case"value":dt!==Tt&&(Me=!0),_=dt;break;case"defaultValue":dt!==Tt&&(Me=!0),C=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:dt!==Tt&&Ye(t,n,et,dt,s,Tt)}}ff(t,_,C,X,at,mt,f,c);return;case"select":dt=_=C=et=null;for(f in a)if(X=a[f],a.hasOwnProperty(f)&&X!=null)switch(f){case"value":break;case"multiple":dt=X;default:s.hasOwnProperty(f)||Ye(t,n,f,null,s,X)}for(c in s)if(f=s[c],X=a[c],s.hasOwnProperty(c)&&(f!=null||X!=null))switch(c){case"value":f!==X&&(Me=!0),et=f;break;case"defaultValue":f!==X&&(Me=!0),C=f;break;case"multiple":f!==X&&(Me=!0),_=f;default:f!==X&&Ye(t,n,c,f,s,X)}n=C,a=_,s=dt,et!=null?ms(t,!!a,et,!1):!!s!=!!a&&(n!=null?ms(t,!!a,n,!0):ms(t,!!a,a?[]:"",!1));return;case"textarea":dt=et=null;for(C in a)if(c=a[C],a.hasOwnProperty(C)&&c!=null&&!s.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Ye(t,n,C,null,s,c)}for(_ in s)if(c=s[_],f=a[_],s.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":c!==f&&(Me=!0),et=c;break;case"defaultValue":c!==f&&(Me=!0),dt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ye(t,n,_,c,s,f)}jm(t,et,dt);return;case"option":for(var Ft in a)et=a[Ft],a.hasOwnProperty(Ft)&&et!=null&&!s.hasOwnProperty(Ft)&&(Ft==="selected"?t.selected=!1:Ye(t,n,Ft,null,s,et));for(X in s)et=s[X],dt=a[X],s.hasOwnProperty(X)&&et!==dt&&(et!=null||dt!=null)&&(X==="selected"?(et!==dt&&(Me=!0),t.selected=et&&typeof et!="function"&&typeof et!="symbol"):Ye(t,n,X,et,s,dt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)et=a[$t],a.hasOwnProperty($t)&&et!=null&&!s.hasOwnProperty($t)&&Ye(t,n,$t,null,s,et);for(at in s)if(et=s[at],dt=a[at],s.hasOwnProperty(at)&&et!==dt&&(et!=null||dt!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Ye(t,n,at,et,s,dt)}return;default:if(hf(n)){for(var ve in a)et=a[ve],a.hasOwnProperty(ve)&&et!==void 0&&!s.hasOwnProperty(ve)&&fh(t,n,ve,void 0,s,et);for(mt in s)et=s[mt],dt=a[mt],!s.hasOwnProperty(mt)||et===dt||et===void 0&&dt===void 0||fh(t,n,mt,et,s,dt);return}}for(var it in a)et=a[it],a.hasOwnProperty(it)&&et!=null&&!s.hasOwnProperty(it)&&Ye(t,n,it,null,s,et);for(Tt in s)et=s[Tt],dt=a[Tt],!s.hasOwnProperty(Tt)||et===dt||et==null&&dt==null||Ye(t,n,Tt,et,s,dt)}function ov(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function AE(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,_=c.initiatorType,C=c.duration;if(f&&C&&ov(_)){for(_=0,C=c.responseEnd,s+=1;s<a.length;s++){var X=a[s],at=X.startTime;if(at>C)break;var mt=X.transferSize,Tt=X.initiatorType;mt&&ov(Tt)&&(X=X.responseEnd,_+=mt*(X<C?1:(C-at)/(X-at)))}if(--s,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var dh=null,hh=null;function El(t){return t.nodeType===9?t:t.ownerDocument}function lv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function uv(t,n,a,s){return a=El(a).createElement(t),a[A]=s,a[W]=n,On(a,t,n),xe(a),a}function ph(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var mh=null;function RE(){var t=window.event;return t&&t.type==="popstate"?t===mh?!1:(mh=t,!0):(mh=null,!1)}var gh=typeof setTimeout=="function"?setTimeout:void 0,CE=typeof clearTimeout=="function"?clearTimeout:void 0,fv=typeof Promise=="function"?Promise:void 0,dv=typeof requestAnimationFrame=="function"?requestAnimationFrame:gh,wE=typeof queueMicrotask=="function"?queueMicrotask:typeof fv<"u"?function(t){return fv.resolve(null).then(t).catch(DE)}:gh;function DE(t){setTimeout(function(){throw t})}function gr(t){return t==="head"}function hv(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),$s(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Th(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Th(a);for(var f=a.firstChild;f;){var _=f.nextSibling,C=f.nodeName;f[zt]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Th(t.ownerDocument.body);a=c}while(a);$s(n)}function pv(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function mv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var c=s=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function gv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function NE(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function _h(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return NE(n,a,t)}function UE(t){return t.documentElement.clientHeight}function LE(t){this.addEventListener("load",t),this.addEventListener("error",t)}function OE(t,n,a,s,c,f,_,C,X){var at=n.nodeType===9?n:n.ownerDocument;try{var mt=at.startViewTransition({update:function(){var et=at.defaultView,dt=et.navigation&&et.navigation.transition,Ft=at.fonts.status;s();var $t=[];if(Ft==="loaded"&&(UE(at),at.fonts.status==="loading"&&$t.push(at.fonts.ready)),Ft=$t.length,t!==null)for(var ve=t.suspenseyImages,it=0,Z=0;Z<ve.length;Z++){var ct=ve[Z];if(!ct.complete){var yt=ct.getBoundingClientRect();if(0<yt.bottom&&0<yt.right&&yt.top<et.innerHeight&&yt.left<et.innerWidth){if(it+=zv(ct),it>du){$t.length=Ft;break}ct=new Promise(LE.bind(ct)),$t.push(ct)}}}if(0<$t.length)return et=Promise.race([Promise.all($t),new Promise(function(Qt){return setTimeout(Qt,500)})]).then(c,c),(dt?Promise.allSettled([dt.finished,et]):et).then(f,f);if(c(),dt)return dt.finished.then(f,f);f()},types:a});at.__reactViewTransition=mt;var Tt=[];return mt.ready.then(function(){for(var et=at.documentElement.getAnimations({subtree:!0}),dt=0;dt<et.length;dt++){var Ft=et[dt],$t=Ft.effect,ve=$t.pseudoElement;if(ve!=null&&ve.startsWith("::view-transition")){Tt.push(Ft),Ft=$t.getKeyframes();for(var it=ve=void 0,Z=!0,ct=0;ct<Ft.length;ct++){var yt=Ft[ct],Qt=yt.width;if(ve===void 0)ve=Qt;else if(ve!==Qt){Z=!1;break}if(Qt=yt.height,it===void 0)it=Qt;else if(it!==Qt){Z=!1;break}delete yt.width,delete yt.height,yt.transform==="none"&&delete yt.transform}Z&&ve!==void 0&&it!==void 0&&($t.setKeyframes(Ft),Z=getComputedStyle($t.target,$t.pseudoElement),Z.width!==ve||Z.height!==it)&&(Z=Ft[0],Z.width=ve,Z.height=it,Z=Ft[Ft.length-1],Z.width=ve,Z.height=it,$t.setKeyframes(Ft))}}_()},function(et){at.__reactViewTransition===mt&&(at.__reactViewTransition=null);try{typeof et=="object"&&et!==null&&et.name==="InvalidStateError"&&(et.message==="View transition was skipped because document visibility state is hidden."||et.message==="Skipping view transition because document visibility state has become hidden."||et.message==="Skipping view transition because viewport size changed."||et.message==="Transition was aborted because of invalid state")&&(et=null),et!==null&&X(et)}finally{s(),c(),_()}}),mt.finished.finally(function(){for(var et=0;et<Tt.length;et++)Tt[et].cancel();at.__reactViewTransition===mt&&(at.__reactViewTransition=null),C()}),mt}catch{return s(),c(),_(),null}}function ts(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}ts.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:B({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},ts.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===t&&f.pseudoElement===n&&s.push(a[c])}return s},ts.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function _v(t){return{name:t,group:new ts("group",t),imagePair:new ts("image-pair",t),old:new ts("old",t),new:new ts("new",t)}}function pi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}pi.prototype.addEventListener=function(t,n,a){var s=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(Sv(f,t,n,a)===-1){var _=this,C=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(C=function(X){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,X):n.handleEvent(X)}),s!==null&&(c=_.removeEventListener.bind(_,t,n,a),s.addEventListener("abort",c,{once:!0}),c=s.removeEventListener.bind(s,"abort",c)),s=Ys(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:C,cleanup:c}),g(this._fragmentFiber.child,!1,PE,t,C,s)}this._eventListeners=f}};function PE(t,n,a,s){return M(t).addEventListener(n,a,s),!1}pi.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=Sv(s,t,n,a),n!==-1)){var c=s[n];a=c.attachedListener;var f=c.cleanup;c=Ys(c.optionsOrUseCapture),g(this._fragmentFiber.child,!1,IE,t,a,c),s.splice(n,1),f!==null&&f()}};function IE(t,n,a,s){return M(t).removeEventListener(n,a,s),!1}function Ys(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function vv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Sv(t,n,a,s){if(t.length===0)return-1;s=vv(s);for(var c=0;c<t.length;c++){var f=t[c];if(f.type===n&&f.listener===a&&vv(f.optionsOrUseCapture)===s)return c}return-1}pi.prototype.dispatchEvent=function(t){var n=S(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];s.addEventListener(f.type,f.attachedListener,Ys(f.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(c=0;c<a.length;c++)f=a[c],s.removeEventListener(f.type,f.attachedListener,Ys(f.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},pi.prototype.focus=function(t){g(this._fragmentFiber.child,!0,xv,t,void 0,void 0)};function xv(t,n){return t.tag===6?!1:(t=M(t),ZE(t,n))}pi.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,vh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!xv(n[a],t);a--);};function vh(t,n){return n.push(t),!1}pi.prototype.blur=function(){var t=S(this._fragmentFiber);t!==null&&(t=M(t),t=El(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,zE,t,void 0,void 0))};function zE(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}pi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,FE,t,void 0,void 0)};function FE(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}pi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,BE,t,void 0,void 0);for(var a=n=0;a<zi.length;a++){var s=zi[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):zi[n++]=s}zi.length=n}};function BE(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var zi=[],Sh=!1;function HE(t,n,a){zi.push({fragmentInstance:t,observer:n,instance:a}),Sh||(Sh=!0,KE(function(){Sh=!1;var s=zi;zi=[];for(var c=0;c<s.length;c++){var f=s[c];f.observer.unobserve(f.instance)}}))}pi.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,GE,t,void 0,void 0),t};function GE(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}pi.prototype.getRootNode=function(t){var n=S(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},pi.prototype.compareDocumentPosition=function(t){var n=S(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,vh,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,E(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=s=a.compareDocumentPosition(t);return a===t?c=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=w(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),c=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var f=E(this._fragmentFiber)?n.parentElement:s;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),C=c.compareDocumentPosition(t),X=_&Node.DOCUMENT_POSITION_CONTAINED_BY||C&Node.DOCUMENT_POSITION_CONTAINED_BY;return C=s&&f&&_&Node.DOCUMENT_POSITION_FOLLOWING&&C&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||f&&c===t||X||C?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!f&&c===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||VE(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function VE(t,n,a,s,c){var f=ce(c);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;t:{for(f=n,n=S(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=I(a,f,U),n===null?n=!1:(g(n,!0,j,f,a),f=x,x=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===s)&&(n=I(s,f,U),n===null?n=!1:(g(n,!0,D,f,s),f=x,G=x=null,n=f!==null)),n):!1}function Mv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}pi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];g(this._fragmentFiber.child,!1,vh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=w(this._fragmentFiber);if(s=a?s[1]||s[0]||S(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=M(s),Mv(t,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var c=n[s];c.tag===6?(c=M(c),Mv(c,a)):M(c).scrollIntoView(t),s+=a?-1:1}};function XE(t,n){return t=M(t),yv(t,n),!1}function yv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function Ev(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.addEventListener(c.type,c.attachedListener,Ys(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var _=0,C=0;C<zi.length;C++){var X=zi[C];(X.fragmentInstance!==n||X.observer!==f||X.instance!==t)&&(zi[_++]=X)}zi.length=_,f.observe(t)}),yv(t,n))}function kE(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.removeEventListener(c.type,c.attachedListener,Ys(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?HE(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function xh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xh(a),jt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function qE(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[zt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ci(t.nextSibling),t===null)break}return null}function WE(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ci(t.nextSibling),t===null))return null;return t}function Tv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ci(t.nextSibling),t===null))return null;return t}function Mh(t){return t.data==="$?"||t.data==="$~"}function yh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function YE(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Eh=null;function bv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Av(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function ZE(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function KE(t){dv(function(){dv(function(n){return t(n)})})}function Rv(t,n,a){switch(n=El(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Cv(t,n,a){for(var s in a){var c=a[s];a.hasOwnProperty(s)&&c!=null&&Ye(t,n,s,null,TE,c)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Yi&&(t.onclick=null),jt(t)}function Th(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);jt(t)}var wi=new Map,wv=new Set;function Tl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Da=Rt.d;Rt.d={f:QE,r:JE,D:jE,C:$E,L:t1,m:e1,X:i1,S:n1,M:a1};function QE(){var t=Da.f(),n=iu();return t||n}function JE(t){var n=pe(t);n!==null&&n.tag===5&&n.type==="form"?Ng(n):Da.r(t)}var Zs=typeof document>"u"?null:document;function Dv(t,n,a){var s=Zs;if(s&&typeof n=="string"&&n){var c=Mi(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),wv.has(c)||(wv.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),On(n,"link",t),xe(n),s.head.appendChild(n)))}}function jE(t){Da.D(t),Dv("dns-prefetch",t,null)}function $E(t,n){Da.C(t,n),Dv("preconnect",t,n)}function t1(t,n,a){Da.L(t,n,a);var s=Zs;if(s&&t&&n){var c='link[rel="preload"][as="'+Mi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Mi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Mi(a.imageSizes)+'"]')):c+='[href="'+Mi(t)+'"]';var f=c;switch(n){case"style":f=Ks(t);break;case"script":f=Qs(t)}if(!(wi.has(f)||(t=B({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),wi.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(bl(f))||n==="script"&&s.querySelector(Al(f))))){var _=s.createElement("link");On(_,"link",t),n==="style"&&(_[Jt]=!0,_.onload=_.onerror=function(){Ke(_)}),xe(_),s.head.appendChild(_)}}}function e1(t,n){Da.m(t,n);var a=Zs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Mi(s)+'"][href="'+Mi(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Qs(t)}if(!wi.has(f)&&(t=B({rel:"modulepreload",href:t},n),wi.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Al(f)))return}s=a.createElement("link"),On(s,"link",t),xe(s),a.head.appendChild(s)}}}function n1(t,n,a){Da.S(t,n,a);var s=Zs;if(s&&t){var c=Ee(s).hoistableStyles,f=Ks(t);n=n||"default";var _=c.get(f);if(!_){var C={loading:0,preload:null};if(_=s.querySelector(bl(f)))C.loading=5;else{t=B({rel:"stylesheet",href:t,"data-precedence":n},a),(a=wi.get(f))&&bh(t,a);var X=_=s.createElement("link");xe(X),On(X,"link",t),X._p=new Promise(function(at,mt){X.onload=at,X.onerror=mt}),X.addEventListener("load",function(){C.loading|=1}),X.addEventListener("error",function(){C.loading|=2}),C.loading|=4,uu(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:C},c.set(f,_)}}}function i1(t,n){Da.X(t,n);var a=Zs;if(a&&t){var s=Ee(a).hoistableScripts,c=Qs(t),f=s.get(c);f||(f=a.querySelector(Al(c)),f||(t=B({src:t,async:!0},n),(n=wi.get(c))&&Ah(t,n),f=a.createElement("script"),xe(f),On(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function a1(t,n){Da.M(t,n);var a=Zs;if(a&&t){var s=Ee(a).hoistableScripts,c=Qs(t),f=s.get(c);f||(f=a.querySelector(Al(c)),f||(t=B({src:t,async:!0,type:"module"},n),(n=wi.get(c))&&Ah(t,n),f=a.createElement("script"),xe(f),On(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Nv(t,n,a,s){var c=(c=Fe.current)?Tl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ks(a.href),n=Ee(c).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ks(a.href);var f=Ee(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(bl(t)))?f._p||(_.instance=f,_.state.loading=5):(f=wi.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wi.set(t,f)),r1(c,t,f,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Qs(a),n=Ee(c).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ks(t){return'href="'+Mi(t)+'"'}function bl(t){return'link[rel="stylesheet"]['+t+"]"}function Uv(t){return B({},t,{"data-precedence":t.precedence,precedence:null})}function r1(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Jt]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Jt]=!0,n.onload=n.onerror=Ke.bind(null,n),On(n,"link",a),xe(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Qs(t){return'[src="'+Mi(t)+'"]'}function Al(t){return"script[async]"+t}function Lv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Mi(a.href)+'"]');if(s)return n.instance=s,xe(s),s;var c=B({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),xe(s),On(s,"style",c),uu(s,a.precedence,t),n.instance=s;case"stylesheet":c=Ks(a.href);var f=t.querySelector(bl(c));if(f)return n.state.loading|=4,n.instance=f,xe(f),f;s=Uv(a),(c=wi.get(c))&&bh(s,c),f=(t.ownerDocument||t).createElement("link"),xe(f);var _=f;return _._p=new Promise(function(C,X){_.onload=C,_.onerror=X}),On(f,"link",s),n.state.loading|=4,uu(f,a.precedence,t),n.instance=f;case"script":return f=Qs(a.src),(c=t.querySelector(Al(f)))?(n.instance=c,xe(c),c):(s=a,(c=wi.get(f))&&(s=B({},a),Ah(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),xe(c),On(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,uu(s,a.precedence,t));return n.instance}function uu(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,_=0;_<s.length;_++){var C=s[_];if(C.dataset.precedence===n)f=C;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function bh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ah(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var fu=null;function Ov(t,n,a){if(fu===null){var s=new Map,c=fu=new Map;c.set(a,s)}else c=fu,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[zt]||f[A]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var C=s.get(_);C?C.push(f):s.set(_,[f])}}return s}function Rh(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function s1(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Pv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Iv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function zv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Fv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=zv(n),t.suspenseyImages.push(n)),t=c1.bind(t),n.decode().then(t,t))}function o1(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Ks(s.href),f=n.querySelector(bl(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Rl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,xe(f);return}f=n.ownerDocument||n,s=Uv(s),(c=wi.get(c))&&bh(s,c),f=f.createElement("link"),xe(f);var _=f;_._p=new Promise(function(C,X){_.onload=C,_.onerror=X}),On(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Rl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var du=0;function l1(t,n){return t.stylesheets&&t.count===0&&pu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&pu(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&du===0&&(du=62500*AE());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&pu(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>du?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Bv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)pu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function Rl(){this.count--,Bv(this)}function c1(){this.imgCount--,Bv(this)}var hu=null;function pu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,hu=new Map,n.forEach(u1,t),hu=null,Rl.call(t))}function u1(t,n){if(!(n.state.loading&4)){var a=hu.get(t);if(a)var s=a.get(null);else{a=new Map,hu.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,c),a.set(_,c),this.count++,s=Rl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Js={$$typeof:k,Provider:null,Consumer:null,_currentValue:ge,_currentValue2:ge,_threadCount:0};function f1(t,n,a,s,c,f,_,C,X){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ps(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ps(0),this.hiddenUpdates=ps(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.transitionTypes=null,this.incompleteTransitions=new Map}function Hv(t,n,a,s,c,f,_,C,X,at,mt,Tt){return t=new f1(t,n,a,_,X,at,mt,Tt,C),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=Vf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Wf(f),t}function Gv(t){return t?(t=Es,t):Es}function Vv(t,n,a,s,c,f){c=Gv(c),s.context===null?s.context=c:s.pendingContext=c,s=ar(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=rr(t,s,n),a!==null&&(ni(a,t,n),al(a,t,n))}function Xv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Ch(t,n){Xv(t,n),(t=t.alternate)&&Xv(t,n)}function kv(t){if(t.tag===13||t.tag===31){var n=zr(t,67108864);n!==null&&ni(n,t,67108864),Ch(t,67108864)}}function qv(t){if(t.tag===13||t.tag===31){var n=hi();n=Go(n);var a=zr(t,n);a!==null&&ni(a,t,n),Ch(t,n)}}var js=!0;function d1(t,n,a,s){var c=lt.T;lt.T=null;var f=Rt.p;try{Rt.p=2,wh(t,n,a,s)}finally{Rt.p=f,lt.T=c}}function h1(t,n,a,s){var c=lt.T;lt.T=null;var f=Rt.p;try{Rt.p=8,wh(t,n,a,s)}finally{Rt.p=f,lt.T=c}}function wh(t,n,a,s){if(js){var c=Dh(s);if(c===null)uh(t,n,s,mu,a),Yv(t,s);else if(m1(c,t,n,a,s))s.stopPropagation();else if(Yv(t,s),n&4&&-1<p1.indexOf(t)){for(;c!==null;){var f=pe(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=ga(f.pendingLanes);if(_!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;_;){var X=1<<31-he(_);C.entanglements[1]|=X,_&=~X}ia(f),(Ge&6)===0&&(tu=Yt()+500,xl(0))}}break;case 31:case 13:C=zr(f,2),C!==null&&ni(C,f,2),iu(),Ch(f,2)}if(f=Dh(s),f===null&&uh(t,n,s,mu,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else uh(t,n,s,null,a)}}function Dh(t){return t=mf(t),Nh(t)}var mu=null;function Nh(t){if(mu=null,t=ce(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return mu=t,null}function Wv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(se()){case de:return 2;case $:return 8;case Lt:case bt:return 32;case It:return 268435456;default:return 32}default:return 32}}var Uh=!1,_r=null,vr=null,Sr=null,Cl=new Map,wl=new Map,xr=[],p1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yv(t,n){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Cl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(n.pointerId)}}function Dl(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=pe(n),n!==null&&kv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function m1(t,n,a,s,c){switch(n){case"focusin":return _r=Dl(_r,t,n,a,s,c),!0;case"dragenter":return vr=Dl(vr,t,n,a,s,c),!0;case"mouseover":return Sr=Dl(Sr,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Cl.set(f,Dl(Cl.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,wl.set(f,Dl(wl.get(f)||null,t,n,a,s,c)),!0}return!1}function Zv(t){var n=ce(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,ec(t.priority,function(){qv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,ec(t.priority,function(){qv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Dh(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);pf=s,a.target.dispatchEvent(s),pf=null}else return n=pe(a),n!==null&&kv(n),t.blockedOn=a,!1;n.shift()}return!0}function Kv(t,n,a){gu(t)&&a.delete(n)}function g1(){Uh=!1,_r!==null&&gu(_r)&&(_r=null),vr!==null&&gu(vr)&&(vr=null),Sr!==null&&gu(Sr)&&(Sr=null),Cl.forEach(Kv),wl.forEach(Kv)}function _u(t,n){t.blockedOn===n&&(t.blockedOn=null,Uh||(Uh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,g1)))}var vu=null;function Qv(t){vu!==t&&(vu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){vu===t&&(vu=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Nh(s||a)===null)continue;break}var f=pe(a);f!==null&&(t.splice(n,3),n-=3,hd(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function $s(t){function n(X){return _u(X,t)}_r!==null&&_u(_r,t),vr!==null&&_u(vr,t),Sr!==null&&_u(Sr,t),Cl.forEach(n),wl.forEach(n);for(var a=0;a<xr.length;a++){var s=xr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<xr.length&&(a=xr[0],a.blockedOn===null);)Zv(a),a.blockedOn===null&&xr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],_=c[W]||null;if(typeof f=="function")_||Qv(a);else if(_){var C=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[W]||null)C=_.formAction;else if(Nh(c)!==null)continue}else C=_.action;typeof C=="function"?a[s+1]=C:(a.splice(s,3),s-=3),Qv(a)}}}function Jv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Lh(t){this._internalRoot=t}Su.prototype.render=Lh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=hi();Vv(a,s,t,n,null,null)},Su.prototype.unmount=Lh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Vv(t.current,2,null,t,null,null),iu(),n[gt]=null}};function Su(t){this._internalRoot=t}Su.prototype.unstable_scheduleHydration=function(t){if(t){var n=tc();t={blockedOn:null,target:t,priority:n};for(var a=0;a<xr.length&&n!==0&&n<xr[a].priority;a++);xr.splice(a,0,t),a===0&&Zv(t)}};var jv=e.version;if(jv!=="19.3.0")throw Error(r(527,jv,"19.3.0"));Rt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var _1={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:lt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xu.isDisabled&&xu.supportsFiber)try{te=xu.inject(_1),qt=xu}catch{}}return Ul.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Gg,f=Vg,_=Xg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Hv(t,1,!1,null,null,a,s,null,c,f,_,Jv),t[gt]=n.current,ch(t),new Lh(n)},Ul.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Gg,_=Vg,C=Xg,X=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(X=a.formState)),n=Hv(t,1,!0,n,a??null,s,c,X,f,_,C,Jv),n.context=Gv(null),a=n.current,s=hi(),s=Go(s),c=ar(s),c.callback=null,rr(a,c,s),a=s,n.current.lanes=a,qi(n,a),ia(n),t[gt]=n.current,ch(t),new Su(n)},Ul.version="19.3.0",Ul}var lS;function A1(){if(lS)return Ih.exports;lS=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ih.exports=b1(),Ih.exports}var R1=A1();const wm="186",C1=0,cS=1,w1=2,qu=1,D1=2,Gl=3,vi=0,ai=1,Va=2,ka=0,Xl=1,uS=2,fS=3,dS=4,N1=5,mo=100,U1=101,L1=102,O1=103,P1=104,I1=200,z1=201,F1=202,B1=203,Yx=204,Zx=205,H1=206,G1=207,V1=208,X1=209,k1=210,q1=211,W1=212,Y1=213,Z1=214,Ep=0,Tp=1,bp=2,kl=3,Ap=4,Rp=5,Cp=6,wp=7,Kx=0,K1=1,Q1=2,fa=0,Qx=1,Jx=2,jx=3,$x=4,tM=5,eM=6,nM=7,iM=300,cs=301,Mo=302,Hh=303,Gh=304,sf=306,Dp=1e3,Xa=1001,Np=1002,In=1003,J1=1004,Mu=1005,Gn=1006,Vh=1007,os=1008,_i=1009,aM=1010,rM=1011,ql=1012,Dm=1013,da=1014,ca=1015,ha=1016,Nm=1017,Um=1018,Wl=1020,sM=35902,oM=35899,lM=1021,cM=1022,Vi=1023,Ya=1026,ls=1027,uM=1028,Lm=1029,us=1030,Om=1031,Pm=1033,Wu=33776,Yu=33777,Zu=33778,Ku=33779,Up=35840,Lp=35841,Op=35842,Pp=35843,Ip=36196,zp=37492,Fp=37496,Bp=37488,Hp=37489,ju=37490,Gp=37491,Vp=37808,Xp=37809,kp=37810,qp=37811,Wp=37812,Yp=37813,Zp=37814,Kp=37815,Qp=37816,Jp=37817,jp=37818,$p=37819,tm=37820,em=37821,nm=36492,im=36494,am=36495,rm=36283,sm=36284,$u=36285,om=36286,j1=3200,lm=0,$1=1,wr="",wn="srgb",tf="srgb-linear",ef="linear",Ze="srgb",Xh=7680,tT=519,eT=512,nT=513,iT=514,Im=515,aT=516,rT=517,zm=518,sT=519,oT=35044,hS="300 es",ua=2e3,Yl=2001;function lT(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function nf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function cT(){const o=nf("canvas");return o.style.display="block",o}const pS={};function mS(...o){const e="THREE."+o.shift();console.log(e,...o)}function fM(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function fe(...o){o=fM(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Be(...o){o=fM(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function _o(...o){const e=o.join(" ");e in pS||(pS[e]=!0,fe(...o))}function uT(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const fT={[Ep]:Tp,[bp]:Cp,[Ap]:wp,[kl]:Rp,[Tp]:Ep,[Cp]:bp,[wp]:Ap,[Rp]:kl};class fs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kh=Math.PI/180,cm=180/Math.PI;function Kl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Bn[o&255]+Bn[o>>8&255]+Bn[o>>16&255]+Bn[o>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]).toLowerCase()}function Ue(o,e,i){return Math.max(e,Math.min(i,o))}function dT(o,e){return(o%e+e)%e}function qh(o,e,i){return(1-i)*o+i*e}function Ll(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ii(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const qm=class qm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ue(this.x,e.x,i.x),this.y=Ue(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ue(this.x,e,i),this.y=Ue(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ue(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ue(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qm.prototype.isVector2=!0;let Pe=qm;class ze{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let p=r[l+0],m=r[l+1],v=r[l+2],g=r[l+3],S=u[d+0],E=u[d+1],w=u[d+2],P=u[d+3];if(g!==P||p!==S||m!==E||v!==w){let M=p*S+m*E+v*w+g*P;M<0&&(S=-S,E=-E,w=-w,P=-P,M=-M);let x=1-h;if(M<.9995){const G=Math.acos(M),j=Math.sin(G);x=Math.sin(x*G)/j,h=Math.sin(h*G)/j,p=p*x+S*h,m=m*x+E*h,v=v*x+w*h,g=g*x+P*h}else{p=p*x+S*h,m=m*x+E*h,v=v*x+w*h,g=g*x+P*h;const G=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=G,m*=G,v*=G,g*=G}}e[i]=p,e[i+1]=m,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],p=r[l+1],m=r[l+2],v=r[l+3],g=u[d],S=u[d+1],E=u[d+2],w=u[d+3];return e[i]=h*w+v*g+p*E-m*S,e[i+1]=p*w+v*S+m*g-h*E,e[i+2]=m*w+v*E+h*S-p*g,e[i+3]=v*w-h*g-p*S-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(r/2),v=h(l/2),g=h(u/2),S=p(r/2),E=p(l/2),w=p(u/2);switch(d){case"XYZ":this._x=S*v*g+m*E*w,this._y=m*E*g-S*v*w,this._z=m*v*w+S*E*g,this._w=m*v*g-S*E*w;break;case"YXZ":this._x=S*v*g+m*E*w,this._y=m*E*g-S*v*w,this._z=m*v*w-S*E*g,this._w=m*v*g+S*E*w;break;case"ZXY":this._x=S*v*g-m*E*w,this._y=m*E*g+S*v*w,this._z=m*v*w+S*E*g,this._w=m*v*g-S*E*w;break;case"ZYX":this._x=S*v*g-m*E*w,this._y=m*E*g+S*v*w,this._z=m*v*w-S*E*g,this._w=m*v*g+S*E*w;break;case"YZX":this._x=S*v*g+m*E*w,this._y=m*E*g+S*v*w,this._z=m*v*w-S*E*g,this._w=m*v*g-S*E*w;break;case"XZY":this._x=S*v*g-m*E*w,this._y=m*E*g-S*v*w,this._z=m*v*w+S*E*g,this._w=m*v*g+S*E*w;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],p=i[9],m=i[2],v=i[6],g=i[10],S=r+h+g;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(v-p)*E,this._y=(u-m)*E,this._z=(d-l)*E}else if(r>h&&r>g){const E=2*Math.sqrt(1+r-h-g);this._w=(v-p)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(u+m)/E}else if(h>g){const E=2*Math.sqrt(1+h-r-g);this._w=(u-m)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(p+v)/E}else{const E=2*Math.sqrt(1+g-r-h);this._w=(d-l)/E,this._x=(u+m)/E,this._y=(p+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ue(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,p=i._y,m=i._z,v=i._w;return this._x=r*v+d*h+l*m-u*p,this._y=l*v+d*p+u*h-r*m,this._z=u*v+d*m+r*p-l*h,this._w=d*v-r*h-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,u=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),v=Math.sin(m);p=Math.sin(p*m)/v,i=Math.sin(i*m)/v,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wm=class Wm{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(gS.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(gS.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*r),v=2*(h*i-u*l),g=2*(u*r-d*i);return this.x=i+p*m+d*g-h*v,this.y=r+p*v+h*m-u*g,this.z=l+p*g+u*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ue(this.x,e.x,i.x),this.y=Ue(this.y,e.y,i.y),this.z=Ue(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ue(this.x,e,i),this.y=Ue(this.y,e,i),this.z=Ue(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ue(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*d-r*p,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Wh.copy(this).projectOnVector(e),this.sub(Wh)}reflect(e){return this.sub(Wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ue(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wm.prototype.isVector3=!0;let K=Wm;const Wh=new K,gS=new ze,Ym=class Ym{constructor(e,i,r,l,u,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m)}set(e,i,r,l,u,d,h,p,m){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=u,v[5]=p,v[6]=r,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],v=r[4],g=r[7],S=r[2],E=r[5],w=r[8],P=l[0],M=l[3],x=l[6],G=l[1],j=l[4],D=l[7],U=l[2],I=l[5],B=l[8];return u[0]=d*P+h*G+p*U,u[3]=d*M+h*j+p*I,u[6]=d*x+h*D+p*B,u[1]=m*P+v*G+g*U,u[4]=m*M+v*j+g*I,u[7]=m*x+v*D+g*B,u[2]=S*P+E*G+w*U,u[5]=S*M+E*j+w*I,u[8]=S*x+E*D+w*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],v=e[8];return i*d*v-i*h*m-r*u*v+r*h*p+l*u*m-l*d*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],v=e[8],g=v*d-h*m,S=h*p-v*u,E=m*u-d*p,w=i*g+r*S+l*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/w;return e[0]=g*P,e[1]=(l*m-v*r)*P,e[2]=(h*r-l*d)*P,e[3]=S*P,e[4]=(v*i-l*p)*P,e[5]=(l*u-h*i)*P,e[6]=E*P,e[7]=(r*p-m*i)*P,e[8]=(d*i-r*u)*P,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return _o("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yh.makeScale(e,i)),this}rotate(e){return _o("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yh.makeRotation(-e)),this}translate(e,i){return _o("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ym.prototype.isMatrix3=!0;let me=Ym;const Yh=new me,_S=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vS=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hT(){const o={enabled:!0,workingColorSpace:tf,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ze&&(l.r=qa(l.r),l.g=qa(l.g),l.b=qa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ze&&(l.r=vo(l.r),l.g=vo(l.g),l.b=vo(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===wr?ef:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return _o("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return _o("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[tf]:{primaries:e,whitePoint:r,transfer:ef,toXYZ:_S,fromXYZ:vS,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:r,transfer:Ze,toXYZ:_S,fromXYZ:vS,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),o}const Ne=hT();function qa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function vo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let to;class pT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{to===void 0&&(to=nf("canvas")),to.width=e.width,to.height=e.height;const l=to.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=to}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=nf("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=qa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(qa(i[r]/255)*255):i[r]=qa(i[r]);return{data:i,width:e.width,height:e.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mT=0;class Fm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=Kl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Zh(l[d].image)):u.push(Zh(l[d]))}else u=Zh(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Zh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?pT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}let gT=0;const Kh=new K;class Vn extends fs{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=Xa,l=Xa,u=Gn,d=os,h=Vi,p=_i,m=Vn.DEFAULT_ANISOTROPY,v=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=Kl(),this.name="",this.source=new Fm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kh).x}get height(){return this.source.getSize(Kh).y}get depth(){return this.source.getSize(Kh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){fe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){fe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dp:e.x=e.x-Math.floor(e.x);break;case Xa:e.x=e.x<0?0:1;break;case Np:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dp:e.y=e.y-Math.floor(e.y);break;case Xa:e.y=e.y<0?0:1;break;case Np:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=iM;Vn.DEFAULT_ANISOTROPY=1;const Zm=class Zm{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],v=p[4],g=p[8],S=p[1],E=p[5],w=p[9],P=p[2],M=p[6],x=p[10];if(Math.abs(v-S)<.01&&Math.abs(g-P)<.01&&Math.abs(w-M)<.01){if(Math.abs(v+S)<.1&&Math.abs(g+P)<.1&&Math.abs(w+M)<.1&&Math.abs(m+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const j=(m+1)/2,D=(E+1)/2,U=(x+1)/2,I=(v+S)/4,B=(g+P)/4,b=(w+M)/4;return j>D&&j>U?j<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(j),l=I/r,u=B/r):D>U?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=I/l,u=b/l):U<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(U),r=B/u,l=b/u),this.set(r,l,u,i),this}let G=Math.sqrt((M-w)*(M-w)+(g-P)*(g-P)+(S-v)*(S-v));return Math.abs(G)<.001&&(G=1),this.x=(M-w)/G,this.y=(g-P)/G,this.z=(S-v)/G,this.w=Math.acos((m+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ue(this.x,e.x,i.x),this.y=Ue(this.y,e.y,i.y),this.z=Ue(this.z,e.z,i.z),this.w=Ue(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ue(this.x,e,i),this.y=Ue(this.y,e,i),this.z=Ue(this.z,e,i),this.w=Ue(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ue(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zm.prototype.isVector4=!0;let on=Zm;class _T extends fs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},u=new Vn(l),d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Fm(l)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends _T{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class dM extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vT extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const rf=class rf{constructor(e,i,r,l,u,d,h,p,m,v,g,S,E,w,P,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m,v,g,S,E,w,P,M)}set(e,i,r,l,u,d,h,p,m,v,g,S,E,w,P,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=u,x[5]=d,x[9]=h,x[13]=p,x[2]=m,x[6]=v,x[10]=g,x[14]=S,x[3]=E,x[7]=w,x[11]=P,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rf().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/eo.setFromMatrixColumn(e,0).length(),u=1/eo.setFromMatrixColumn(e,1).length(),d=1/eo.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),v=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const S=d*v,E=d*g,w=h*v,P=h*g;i[0]=p*v,i[4]=-p*g,i[8]=m,i[1]=E+w*m,i[5]=S-P*m,i[9]=-h*p,i[2]=P-S*m,i[6]=w+E*m,i[10]=d*p}else if(e.order==="YXZ"){const S=p*v,E=p*g,w=m*v,P=m*g;i[0]=S+P*h,i[4]=w*h-E,i[8]=d*m,i[1]=d*g,i[5]=d*v,i[9]=-h,i[2]=E*h-w,i[6]=P+S*h,i[10]=d*p}else if(e.order==="ZXY"){const S=p*v,E=p*g,w=m*v,P=m*g;i[0]=S-P*h,i[4]=-d*g,i[8]=w+E*h,i[1]=E+w*h,i[5]=d*v,i[9]=P-S*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const S=d*v,E=d*g,w=h*v,P=h*g;i[0]=p*v,i[4]=w*m-E,i[8]=S*m+P,i[1]=p*g,i[5]=P*m+S,i[9]=E*m-w,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const S=d*p,E=d*m,w=h*p,P=h*m;i[0]=p*v,i[4]=P-S*g,i[8]=w*g+E,i[1]=g,i[5]=d*v,i[9]=-h*v,i[2]=-m*v,i[6]=E*g+w,i[10]=S-P*g}else if(e.order==="XZY"){const S=d*p,E=d*m,w=h*p,P=h*m;i[0]=p*v,i[4]=-g,i[8]=m*v,i[1]=S*g+P,i[5]=d*v,i[9]=E*g-w,i[2]=w*g-E,i[6]=h*v,i[10]=P*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ST,e,xT)}lookAt(e,i,r){const l=this.elements;return mi.subVectors(e,i),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),yr.crossVectors(r,mi),yr.lengthSq()===0&&(Math.abs(r.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),yr.crossVectors(r,mi)),yr.normalize(),yu.crossVectors(mi,yr),l[0]=yr.x,l[4]=yu.x,l[8]=mi.x,l[1]=yr.y,l[5]=yu.y,l[9]=mi.y,l[2]=yr.z,l[6]=yu.z,l[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],v=r[1],g=r[5],S=r[9],E=r[13],w=r[2],P=r[6],M=r[10],x=r[14],G=r[3],j=r[7],D=r[11],U=r[15],I=l[0],B=l[4],b=l[8],F=l[12],Y=l[1],T=l[5],R=l[9],N=l[13],H=l[2],k=l[6],V=l[10],L=l[14],J=l[3],Q=l[7],pt=l[11],st=l[15];return u[0]=d*I+h*Y+p*H+m*J,u[4]=d*B+h*T+p*k+m*Q,u[8]=d*b+h*R+p*V+m*pt,u[12]=d*F+h*N+p*L+m*st,u[1]=v*I+g*Y+S*H+E*J,u[5]=v*B+g*T+S*k+E*Q,u[9]=v*b+g*R+S*V+E*pt,u[13]=v*F+g*N+S*L+E*st,u[2]=w*I+P*Y+M*H+x*J,u[6]=w*B+P*T+M*k+x*Q,u[10]=w*b+P*R+M*V+x*pt,u[14]=w*F+P*N+M*L+x*st,u[3]=G*I+j*Y+D*H+U*J,u[7]=G*B+j*T+D*k+U*Q,u[11]=G*b+j*R+D*V+U*pt,u[15]=G*F+j*N+D*L+U*st,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],p=e[9],m=e[13],v=e[2],g=e[6],S=e[10],E=e[14],w=e[3],P=e[7],M=e[11],x=e[15],G=p*E-m*S,j=h*E-m*g,D=h*S-p*g,U=d*E-m*v,I=d*S-p*v,B=d*g-h*v;return i*(P*G-M*j+x*D)-r*(w*G-M*U+x*I)+l*(w*j-P*U+x*B)-u*(w*D-P*I+M*B)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[1],d=e[5],h=e[9],p=e[2],m=e[6],v=e[10];return i*(d*v-h*m)-r*(u*v-h*p)+l*(u*m-d*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],v=e[8],g=e[9],S=e[10],E=e[11],w=e[12],P=e[13],M=e[14],x=e[15],G=i*h-r*d,j=i*p-l*d,D=i*m-u*d,U=r*p-l*h,I=r*m-u*h,B=l*m-u*p,b=v*P-g*w,F=v*M-S*w,Y=v*x-E*w,T=g*M-S*P,R=g*x-E*P,N=S*x-E*M,H=G*N-j*R+D*T+U*Y-I*F+B*b;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/H;return e[0]=(h*N-p*R+m*T)*k,e[1]=(l*R-r*N-u*T)*k,e[2]=(P*B-M*I+x*U)*k,e[3]=(S*I-g*B-E*U)*k,e[4]=(p*Y-d*N-m*F)*k,e[5]=(i*N-l*Y+u*F)*k,e[6]=(M*D-w*B-x*j)*k,e[7]=(v*B-S*D+E*j)*k,e[8]=(d*R-h*Y+m*b)*k,e[9]=(r*Y-i*R-u*b)*k,e[10]=(w*I-P*D+x*G)*k,e[11]=(g*D-v*I-E*G)*k,e[12]=(h*F-d*T-p*b)*k,e[13]=(i*T-r*F+l*b)*k,e[14]=(P*j-w*U-M*G)*k,e[15]=(v*U-g*j+S*G)*k,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,p=e.z,m=u*d,v=u*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,v*h+r,v*p-l*d,0,m*p-l*h,v*p+l*d,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,p=i._w,m=u+u,v=d+d,g=h+h,S=u*m,E=u*v,w=u*g,P=d*v,M=d*g,x=h*g,G=p*m,j=p*v,D=p*g,U=r.x,I=r.y,B=r.z;return l[0]=(1-(P+x))*U,l[1]=(E+D)*U,l[2]=(w-j)*U,l[3]=0,l[4]=(E-D)*I,l[5]=(1-(S+x))*I,l[6]=(M+G)*I,l[7]=0,l[8]=(w+j)*B,l[9]=(M-G)*B,l[10]=(1-(S+P))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinantAffine();if(u===0)return r.set(1,1,1),i.identity(),this;let d=eo.set(l[0],l[1],l[2]).length();const h=eo.set(l[4],l[5],l[6]).length(),p=eo.set(l[8],l[9],l[10]).length();u<0&&(d=-d),Fi.copy(this);const m=1/d,v=1/h,g=1/p;return Fi.elements[0]*=m,Fi.elements[1]*=m,Fi.elements[2]*=m,Fi.elements[4]*=v,Fi.elements[5]*=v,Fi.elements[6]*=v,Fi.elements[8]*=g,Fi.elements[9]*=g,Fi.elements[10]*=g,i.setFromRotationMatrix(Fi),r.x=d,r.y=h,r.z=p,this}makePerspective(e,i,r,l,u,d,h=ua,p=!1){const m=this.elements,v=2*u/(i-e),g=2*u/(r-l),S=(i+e)/(i-e),E=(r+l)/(r-l);let w,P;if(p)w=u/(d-u),P=d*u/(d-u);else if(h===ua)w=-(d+u)/(d-u),P=-2*d*u/(d-u);else if(h===Yl)w=-d/(d-u),P=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=g,m[9]=E,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=P,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=ua,p=!1){const m=this.elements,v=2/(i-e),g=2/(r-l),S=-(i+e)/(i-e),E=-(r+l)/(r-l);let w,P;if(p)w=1/(d-u),P=d/(d-u);else if(h===ua)w=-2/(d-u),P=-(d+u)/(d-u);else if(h===Yl)w=-1/(d-u),P=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=0,m[12]=S,m[1]=0,m[5]=g,m[9]=0,m[13]=E,m[2]=0,m[6]=0,m[10]=w,m[14]=P,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};rf.prototype.isMatrix4=!0;let Je=rf;const eo=new K,Fi=new Je,ST=new K(0,0,0),xT=new K(1,1,1),yr=new K,yu=new K,mi=new K,SS=new Je,xS=new ze;class Xn{constructor(e=0,i=0,r=0,l=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],p=l[1],m=l[5],v=l[9],g=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,E),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ue(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Ue(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,E),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return SS.makeRotationFromQuaternion(e),this.setFromRotationMatrix(SS,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return xS.setFromEuler(this),this.setFromQuaternion(xS,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class hM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let MT=0;const MS=new K,no=new ze,Na=new Je,Eu=new K,Ol=new K,yT=new K,ET=new ze,yS=new K(1,0,0),ES=new K(0,1,0),TS=new K(0,0,1),bS={type:"added"},TT={type:"removed"},io={type:"childadded",child:null},Qh={type:"childremoved",child:null};class zn extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MT++}),this.uuid=Kl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new K,i=new Xn,r=new ze,l=new K(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new me}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return no.setFromAxisAngle(e,i),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,i){return no.setFromAxisAngle(e,i),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(yS,e)}rotateY(e){return this.rotateOnAxis(ES,e)}rotateZ(e){return this.rotateOnAxis(TS,e)}translateOnAxis(e,i){return MS.copy(e).applyQuaternion(this.quaternion),this.position.add(MS.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(yS,e)}translateY(e){return this.translateOnAxis(ES,e)}translateZ(e){return this.translateOnAxis(TS,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Na.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Eu.copy(e):Eu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Na.lookAt(Ol,Eu,this.up):Na.lookAt(Eu,Ol,this.up),this.quaternion.setFromRotationMatrix(Na),l&&(Na.extractRotation(l.matrixWorld),no.setFromRotationMatrix(Na),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bS),io.child=e,this.dispatchEvent(io),io.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(TT),Qh.child=e,this.dispatchEvent(Qh),Qh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Na.multiply(e.parent.matrixWorld)),e.applyMatrix4(Na),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bS),io.child=e,this.dispatchEvent(io),io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ol,e,yT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ol,ET,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const u=this.children;for(let d=0,h=u.length;d<h;d++)u[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];u(e.shapes,g)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(e.materials,this.material[p]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),v=d(e.images),g=d(e.shapes),S=d(e.skeletons),E=d(e.animations),w=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),E.length>0&&(r.animations=E),w.length>0&&(r.nodes=w)}return r.object=l,r;function d(h){const p=[];for(const m in h){const v=h[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}zn.DEFAULT_UP=new K(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tu extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bT={type:"move"};class Jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const P of e.hand.values()){const M=i.getJointPose(P,r),x=this._getHandJoint(m,P);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],S=v.position.distanceTo(g.position),E=.02,w=.005;m.inputState.pinching&&S>E+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=E-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(bT)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Tu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const pM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},bu={h:0,s:0,l:0};function jh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Oe{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ne.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ne.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ne.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ne.workingColorSpace){if(e=dT(e,1),i=Ue(i,0,1),r=Ue(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=jh(d,u,e+1/3),this.g=jh(d,u,e),this.b=jh(d,u,e-1/3)}return Ne.colorSpaceToWorking(this,l),this}setStyle(e,i=wn){function r(u){u!==void 0&&parseFloat(u)<1&&fe("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:fe("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=wn){const r=pM[e.toLowerCase()];return r!==void 0?this.setHex(r,i):fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qa(e.r),this.g=qa(e.g),this.b=qa(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return Ne.workingToColorSpace(Hn.copy(this),e),Math.round(Ue(Hn.r*255,0,255))*65536+Math.round(Ue(Hn.g*255,0,255))*256+Math.round(Ue(Hn.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ne.workingColorSpace){Ne.workingToColorSpace(Hn.copy(this),i);const r=Hn.r,l=Hn.g,u=Hn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let p,m;const v=(h+d)/2;if(h===d)p=0,m=0;else{const g=d-h;switch(m=v<=.5?g/(d+h):g/(2-d-h),d){case r:p=(l-u)/g+(l<u?6:0);break;case l:p=(u-r)/g+2;break;case u:p=(r-l)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,i=Ne.workingColorSpace){return Ne.workingToColorSpace(Hn.copy(this),i),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=wn){Ne.workingToColorSpace(Hn.copy(this),e);const i=Hn.r,r=Hn.g,l=Hn.b;return e!==wn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+i,Er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Er),e.getHSL(bu);const r=qh(Er.h,bu.h,i),l=qh(Er.s,bu.s,i),u=qh(Er.l,bu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Oe;Oe.NAMES=pM;class Eo extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bi=new K,Ua=new K,$h=new K,La=new K,ao=new K,ro=new K,AS=new K,tp=new K,ep=new K,np=new K,ip=new on,ap=new on,rp=new on;class Gi{constructor(e=new K,i=new K,r=new K){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Bi.subVectors(e,i),l.cross(Bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Bi.subVectors(l,i),Ua.subVectors(r,i),$h.subVectors(e,i);const d=Bi.dot(Bi),h=Bi.dot(Ua),p=Bi.dot($h),m=Ua.dot(Ua),v=Ua.dot($h),g=d*m-h*h;if(g===0)return u.set(0,0,0),null;const S=1/g,E=(m*p-h*v)*S,w=(d*v-h*p)*S;return u.set(1-E-w,w,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,La)===null?!1:La.x>=0&&La.y>=0&&La.x+La.y<=1}static getInterpolation(e,i,r,l,u,d,h,p){return this.getBarycoord(e,i,r,l,La)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,La.x),p.addScaledVector(d,La.y),p.addScaledVector(h,La.z),p)}static getInterpolatedAttribute(e,i,r,l,u,d){return ip.setScalar(0),ap.setScalar(0),rp.setScalar(0),ip.fromBufferAttribute(e,i),ap.fromBufferAttribute(e,r),rp.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(ip,u.x),d.addScaledVector(ap,u.y),d.addScaledVector(rp,u.z),d}static isFrontFacing(e,i,r,l){return Bi.subVectors(r,i),Ua.subVectors(e,i),Bi.cross(Ua).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),Ua.subVectors(this.a,this.b),Bi.cross(Ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Gi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Gi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;ao.subVectors(l,r),ro.subVectors(u,r),tp.subVectors(e,r);const p=ao.dot(tp),m=ro.dot(tp);if(p<=0&&m<=0)return i.copy(r);ep.subVectors(e,l);const v=ao.dot(ep),g=ro.dot(ep);if(v>=0&&g<=v)return i.copy(l);const S=p*g-v*m;if(S<=0&&p>=0&&v<=0)return d=p/(p-v),i.copy(r).addScaledVector(ao,d);np.subVectors(e,u);const E=ao.dot(np),w=ro.dot(np);if(w>=0&&E<=w)return i.copy(u);const P=E*m-p*w;if(P<=0&&m>=0&&w<=0)return h=m/(m-w),i.copy(r).addScaledVector(ro,h);const M=v*w-E*g;if(M<=0&&g-v>=0&&E-w>=0)return AS.subVectors(u,l),h=(g-v)/(g-v+(E-w)),i.copy(l).addScaledVector(AS,h);const x=1/(M+P+S);return d=P*x,h=S*x,i.copy(r).addScaledVector(ao,d).addScaledVector(ro,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ql{constructor(e=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Hi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Hi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Hi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Hi):Hi.fromBufferAttribute(u,d),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Au.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Au.copy(r.boundingBox)),Au.applyMatrix4(e.matrixWorld),this.union(Au)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pl),Ru.subVectors(this.max,Pl),so.subVectors(e.a,Pl),oo.subVectors(e.b,Pl),lo.subVectors(e.c,Pl),Tr.subVectors(oo,so),br.subVectors(lo,oo),es.subVectors(so,lo);let i=[0,-Tr.z,Tr.y,0,-br.z,br.y,0,-es.z,es.y,Tr.z,0,-Tr.x,br.z,0,-br.x,es.z,0,-es.x,-Tr.y,Tr.x,0,-br.y,br.x,0,-es.y,es.x,0];return!sp(i,so,oo,lo,Ru)||(i=[1,0,0,0,1,0,0,0,1],!sp(i,so,oo,lo,Ru))?!1:(Cu.crossVectors(Tr,br),i=[Cu.x,Cu.y,Cu.z],sp(i,so,oo,lo,Ru))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oa=[new K,new K,new K,new K,new K,new K,new K,new K],Hi=new K,Au=new Ql,so=new K,oo=new K,lo=new K,Tr=new K,br=new K,es=new K,Pl=new K,Ru=new K,Cu=new K,ns=new K;function sp(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){ns.fromArray(o,u);const h=l.x*Math.abs(ns.x)+l.y*Math.abs(ns.y)+l.z*Math.abs(ns.z),p=e.dot(ns),m=i.dot(ns),v=r.dot(ns);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>h)return!1}return!0}const xn=new K,wu=new Pe;let AT=0;class Wa extends fs{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=oT,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)wu.fromBufferAttribute(this,i),wu.applyMatrix3(e),this.setXY(i,wu.x,wu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ll(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ii(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ll(i,this.array)),i}setX(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ll(i,this.array)),i}setY(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ll(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ll(i,this.array)),i}setW(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ii(i,this.array),r=ii(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=ii(i,this.array),r=ii(r,this.array),l=ii(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=ii(i,this.array),r=ii(r,this.array),l=ii(l,this.array),u=ii(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class mM extends Wa{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class gM extends Wa{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class hn extends Wa{constructor(e,i,r){super(new Float32Array(e),i,r)}}const RT=new Ql,Il=new K,op=new K;class Bm{constructor(e=new K,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):RT.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Il.subVectors(e,this.center);const i=Il.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Il,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(op.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Il.copy(e.center).add(op)),this.expandByPoint(Il.copy(e.center).sub(op))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let CT=0;const Di=new Je,lp=new zn,co=new K,gi=new Ql,zl=new Ql,Cn=new K;class Jn extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CT++}),this.uuid=Kl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lT(e)?gM:mM)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new me().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,i,r){return Di.makeTranslation(e,i,r),this.applyMatrix4(Di),this}scale(e,i,r){return Di.makeScale(e,i,r),this.applyMatrix4(Di),this}lookAt(e){return lp.lookAt(e),lp.updateMatrix(),this.applyMatrix4(lp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new hn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ql);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];gi.setFromBufferAttribute(u),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bm);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];zl.setFromBufferAttribute(h),this.morphTargetsRelative?(Cn.addVectors(gi.min,zl.min),gi.expandByPoint(Cn),Cn.addVectors(gi.max,zl.max),gi.expandByPoint(Cn)):(gi.expandByPoint(zl.min),gi.expandByPoint(zl.max))}gi.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)Cn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Cn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)Cn.fromBufferAttribute(h,m),p&&(co.fromBufferAttribute(e,m),Cn.add(co)),l=Math.max(l,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new Wa(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const h=[],p=[];for(let b=0;b<r.count;b++)h[b]=new K,p[b]=new K;const m=new K,v=new K,g=new K,S=new Pe,E=new Pe,w=new Pe,P=new K,M=new K;function x(b,F,Y){m.fromBufferAttribute(r,b),v.fromBufferAttribute(r,F),g.fromBufferAttribute(r,Y),S.fromBufferAttribute(u,b),E.fromBufferAttribute(u,F),w.fromBufferAttribute(u,Y),v.sub(m),g.sub(m),E.sub(S),w.sub(S);const T=1/(E.x*w.y-w.x*E.y);isFinite(T)&&(P.copy(v).multiplyScalar(w.y).addScaledVector(g,-E.y).multiplyScalar(T),M.copy(g).multiplyScalar(E.x).addScaledVector(v,-w.x).multiplyScalar(T),h[b].add(P),h[F].add(P),h[Y].add(P),p[b].add(M),p[F].add(M),p[Y].add(M))}let G=this.groups;G.length===0&&(G=[{start:0,count:e.count}]);for(let b=0,F=G.length;b<F;++b){const Y=G[b],T=Y.start,R=Y.count;for(let N=T,H=T+R;N<H;N+=3)x(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const j=new K,D=new K,U=new K,I=new K;function B(b){U.fromBufferAttribute(l,b),I.copy(U);const F=h[b];j.copy(F),j.sub(U.multiplyScalar(U.dot(F))).normalize(),D.crossVectors(I,F);const T=D.dot(p[b])<0?-1:1;d.setXYZW(b,j.x,j.y,j.z,T)}for(let b=0,F=G.length;b<F;++b){const Y=G[b],T=Y.start,R=Y.count;for(let N=T,H=T+R;N<H;N+=3)B(e.getX(N+0)),B(e.getX(N+1)),B(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Wa(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,E=r.count;S<E;S++)r.setXYZ(S,0,0,0);const l=new K,u=new K,d=new K,h=new K,p=new K,m=new K,v=new K,g=new K;if(e)for(let S=0,E=e.count;S<E;S+=3){const w=e.getX(S+0),P=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,w),u.fromBufferAttribute(i,P),d.fromBufferAttribute(i,M),v.subVectors(d,u),g.subVectors(l,u),v.cross(g),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,P),m.fromBufferAttribute(r,M),h.add(v),p.add(v),m.add(v),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(P,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),v.subVectors(d,u),g.subVectors(l,u),v.cross(g),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Cn.fromBufferAttribute(e,i),Cn.normalize(),e.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(h,p){const m=h.array,v=h.itemSize,g=h.normalized,S=new m.constructor(p.length*v);let E=0,w=0;for(let P=0,M=p.length;P<M;P++){h.isInterleavedBufferAttribute?E=p[P]*h.data.stride+h.offset:E=p[P]*v;for(let x=0;x<v;x++)S[w++]=m[E++]}return new Wa(S,v,g)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Jn,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let v=0,g=m.length;v<g;v++){const S=m[v],E=e(S,r);p.push(E)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,S=m.length;g<S;g++){const E=m[g];v.push(E.toJSON(e.data))}v.length>0&&(l[p]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const u=e.morphAttributes;for(const m in u){const v=[],g=u[m];for(let S=0,E=g.length;S<E;S++)v.push(g[S].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const g=d[m];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cp=new K,wT=new K,DT=new me;class Cr{constructor(e=new K(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=cp.subVectors(r,i).cross(wT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(cp),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/u;return r===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||DT.getNormalMatrix(e),l=this.coplanarPoint(cp).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let NT=0;class Jl extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=Kl(),this.name="",this.type="Material",this.blending=Xl,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yx,this.blendDst=Zx,this.blendEquation=mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=kl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tT,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xh,this.stencilZFail=Xh,this.stencilZPass=Xh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){fe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){fe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Cr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Pe().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Pa=new K,up=new K,Du=new K,Nu=new K;class UT{constructor(e=new K,i=new K(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Pa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Pa.copy(this.origin).addScaledVector(this.direction,i),Pa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){up.copy(e).add(i).multiplyScalar(.5),Du.copy(i).sub(e).normalize(),Nu.copy(this.origin).sub(up);const u=e.distanceTo(i)*.5,d=-this.direction.dot(Du),h=Nu.dot(this.direction),p=-Nu.dot(Du),m=Nu.lengthSq(),v=Math.abs(1-d*d);let g,S,E,w;if(v>0)if(g=d*p-h,S=d*h-p,w=u*v,g>=0)if(S>=-w)if(S<=w){const P=1/v;g*=P,S*=P,E=g*(g+d*S+2*h)+S*(d*g+S+2*p)+m}else S=u,g=Math.max(0,-(d*S+h)),E=-g*g+S*(S+2*p)+m;else S=-u,g=Math.max(0,-(d*S+h)),E=-g*g+S*(S+2*p)+m;else S<=-w?(g=Math.max(0,-(-d*u+h)),S=g>0?-u:Math.min(Math.max(-u,-p),u),E=-g*g+S*(S+2*p)+m):S<=w?(g=0,S=Math.min(Math.max(-u,-p),u),E=S*(S+2*p)+m):(g=Math.max(0,-(d*u+h)),S=g>0?u:Math.min(Math.max(-u,-p),u),E=-g*g+S*(S+2*p)+m);else S=d>0?-u:u,g=Math.max(0,-(d*S+h)),E=-g*g+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(up).addScaledVector(Du,S),E}intersectSphere(e,i){if(e.radius<0)return null;Pa.subVectors(e.center,this.origin);const r=Pa.dot(this.direction),l=Pa.dot(Pa)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,l=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,l=(e.min.x-S.x)*m),v>=0?(u=(e.min.y-S.y)*v,d=(e.max.y-S.y)*v):(u=(e.max.y-S.y)*v,d=(e.min.y-S.y)*v),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),g>=0?(h=(e.min.z-S.z)*g,p=(e.max.z-S.z)*g):(h=(e.max.z-S.z)*g,p=(e.min.z-S.z)*g),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Pa)!==null}intersectTriangle(e,i,r,l,u){const d=this.origin,h=this.direction,p=h.x,m=h.y,v=h.z,g=e.x-d.x,S=e.y-d.y,E=e.z-d.z,w=i.x-d.x,P=i.y-d.y,M=i.z-d.z,x=r.x-d.x,G=r.y-d.y,j=r.z-d.z,D=Math.abs(p),U=Math.abs(m),I=Math.abs(v);let B,b,F,Y,T,R,N,H,k,V,L,J;if(D>=U&&D>=I?(F=p,R=g,k=w,J=x,p>=0?(B=m,b=v,Y=S,T=E,N=P,H=M,V=G,L=j):(B=v,b=m,Y=E,T=S,N=M,H=P,V=j,L=G)):U>=I?(F=m,R=S,k=P,J=G,m>=0?(B=v,b=p,Y=E,T=g,N=M,H=w,V=j,L=x):(B=p,b=v,Y=g,T=E,N=w,H=M,V=x,L=j)):(F=v,R=E,k=M,J=j,v>=0?(B=p,b=m,Y=g,T=S,N=w,H=P,V=x,L=G):(B=m,b=p,Y=S,T=g,N=P,H=w,V=G,L=x)),F===0)return null;const Q=B/F,pt=b/F,st=1/F,vt=Y-Q*R,Ct=T-pt*R,O=N-Q*k,rt=H-pt*k,St=V-Q*J,q=L-pt*J,nt=St*rt-q*O,Et=vt*q-Ct*St,wt=O*Ct-rt*vt;if(l){if(nt<0||Et<0||wt<0)return null}else if((nt<0||Et<0||wt<0)&&(nt>0||Et>0||wt>0))return null;const lt=nt+Et+wt;if(lt===0)return null;const Rt=st*(nt*R+Et*k+wt*J);return(lt>0?Rt<0:Rt>0)?null:this.at(Rt/lt,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nr extends Jl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Kx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const RS=new Je,is=new UT,Uu=new Bm,CS=new K,Lu=new K,Ou=new K,Pu=new K,fp=new K,Iu=new K,wS=new K,zu=new K;class pn extends zn{constructor(e=new Jn,i=new Nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){Iu.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=h[p],g=u[p];v!==0&&(fp.fromBufferAttribute(g,e),d?Iu.addScaledVector(fp,v):Iu.addScaledVector(fp.sub(i),v))}i.add(Iu)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Uu.copy(r.boundingSphere),Uu.applyMatrix4(u),is.copy(e.ray).recast(e.near),!(Uu.containsPoint(is.origin)===!1&&(is.intersectSphere(Uu,CS)===null||is.origin.distanceToSquared(CS)>(e.far-e.near)**2))&&(RS.copy(u).invert(),is.copy(e.ray).applyMatrix4(RS),!(r.boundingBox!==null&&is.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,is)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,S=u.groups,E=u.drawRange;if(h!==null)if(Array.isArray(d))for(let w=0,P=S.length;w<P;w++){const M=S[w],x=d[M.materialIndex],G=Math.max(M.start,E.start),j=Math.min(h.count,Math.min(M.start+M.count,E.start+E.count));for(let D=G,U=j;D<U;D+=3){const I=h.getX(D),B=h.getX(D+1),b=h.getX(D+2);l=Fu(this,x,e,r,m,v,g,I,B,b),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const w=Math.max(0,E.start),P=Math.min(h.count,E.start+E.count);for(let M=w,x=P;M<x;M+=3){const G=h.getX(M),j=h.getX(M+1),D=h.getX(M+2);l=Fu(this,d,e,r,m,v,g,G,j,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let w=0,P=S.length;w<P;w++){const M=S[w],x=d[M.materialIndex],G=Math.max(M.start,E.start),j=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let D=G,U=j;D<U;D+=3){const I=D,B=D+1,b=D+2;l=Fu(this,x,e,r,m,v,g,I,B,b),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const w=Math.max(0,E.start),P=Math.min(p.count,E.start+E.count);for(let M=w,x=P;M<x;M+=3){const G=M,j=M+1,D=M+2;l=Fu(this,d,e,r,m,v,g,G,j,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function LT(o,e,i,r,l,u,d,h){let p;if(e.side===ai?p=r.intersectTriangle(d,u,l,!0,h):p=r.intersectTriangle(l,u,d,e.side===vi,h),p===null)return null;zu.copy(h),zu.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(zu);return m<i.near||m>i.far?null:{distance:m,point:zu.clone(),object:o}}function Fu(o,e,i,r,l,u,d,h,p,m){o.getVertexPosition(h,Lu),o.getVertexPosition(p,Ou),o.getVertexPosition(m,Pu);const v=LT(o,e,i,r,Lu,Ou,Pu,wS);if(v){const g=new K;Gi.getBarycoord(wS,Lu,Ou,Pu,g),l&&(v.uv=Gi.getInterpolatedAttribute(l,h,p,m,g,new Pe)),u&&(v.uv1=Gi.getInterpolatedAttribute(u,h,p,m,g,new Pe)),d&&(v.normal=Gi.getInterpolatedAttribute(d,h,p,m,g,new K),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:h,b:p,c:m,normal:new K,materialIndex:0};Gi.getNormal(Lu,Ou,Pu,S.normal),v.face=S,v.barycoord=g}return v}class OT extends Vn{constructor(e=null,i=1,r=1,l,u,d,h,p,m=In,v=In,g,S){super(null,d,h,p,m,v,l,u,g,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const as=new Bm,PT=new Pe(.5,.5),Bu=new K;class Hm{constructor(e=new Cr,i=new Cr,r=new Cr,l=new Cr,u=new Cr,d=new Cr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ua,r=!1){const l=this.planes,u=e.elements,d=u[0],h=u[1],p=u[2],m=u[3],v=u[4],g=u[5],S=u[6],E=u[7],w=u[8],P=u[9],M=u[10],x=u[11],G=u[12],j=u[13],D=u[14],U=u[15];if(l[0].setComponents(m-d,E-v,x-w,U-G).normalize(),l[1].setComponents(m+d,E+v,x+w,U+G).normalize(),l[2].setComponents(m+h,E+g,x+P,U+j).normalize(),l[3].setComponents(m-h,E-g,x-P,U-j).normalize(),r)l[4].setComponents(p,S,M,D).normalize(),l[5].setComponents(m-p,E-S,x-M,U-D).normalize();else if(l[4].setComponents(m-p,E-S,x-M,U-D).normalize(),i===ua)l[5].setComponents(m+p,E+S,x+M,U+D).normalize();else if(i===Yl)l[5].setComponents(p,S,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),as.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);const i=PT.distanceTo(e.center);return as.radius=.7071067811865476+i,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Bu.x=l.normal.x>0?e.max.x:e.min.x,Bu.y=l.normal.y>0?e.max.y:e.min.y,Bu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Bu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _M extends Vn{constructor(e=[],i=cs,r,l,u,d,h,p,m,v){super(e,i,r,l,u,d,h,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class To extends Vn{constructor(e,i,r,l,u,d,h,p,m){super(e,i,r,l,u,d,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zl extends Vn{constructor(e,i,r=da,l,u,d,h=In,p=In,m,v=Ya,g=1){if(v!==Ya&&v!==ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,u,d,h,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class IT extends Zl{constructor(e,i=da,r=cs,l,u,d=In,h=In,p,m=Ya){const v={width:e,height:e,depth:1},g=[v,v,v,v,v,v];super(e,e,i,r,l,u,d,h,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vM extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jl extends Jn{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],v=[],g=[];let S=0,E=0;w("z","y","x",-1,-1,r,i,e,d,u,0),w("z","y","x",1,-1,r,i,-e,d,u,1),w("x","z","y",1,1,e,r,i,l,d,2),w("x","z","y",1,-1,e,r,-i,l,d,3),w("x","y","z",1,-1,e,i,r,l,u,4),w("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new hn(m,3)),this.setAttribute("normal",new hn(v,3)),this.setAttribute("uv",new hn(g,2));function w(P,M,x,G,j,D,U,I,B,b,F){const Y=D/B,T=U/b,R=D/2,N=U/2,H=I/2,k=B+1,V=b+1;let L=0,J=0;const Q=new K;for(let pt=0;pt<V;pt++){const st=pt*T-N;for(let vt=0;vt<k;vt++){const Ct=vt*Y-R;Q[P]=Ct*G,Q[M]=st*j,Q[x]=H,m.push(Q.x,Q.y,Q.z),Q[P]=0,Q[M]=0,Q[x]=I>0?1:-1,v.push(Q.x,Q.y,Q.z),g.push(vt/B),g.push(1-pt/b),L+=1}}for(let pt=0;pt<b;pt++)for(let st=0;st<B;st++){const vt=S+st+k*pt,Ct=S+st+k*(pt+1),O=S+(st+1)+k*(pt+1),rt=S+(st+1)+k*pt;p.push(vt,Ct,rt),p.push(Ct,O,rt),J+=6}h.addGroup(E,J,F),E+=J,S+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ma extends Jn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,v=p+1,g=e/h,S=i/p,E=[],w=[],P=[],M=[];for(let x=0;x<v;x++){const G=x*S-d;for(let j=0;j<m;j++){const D=j*g-u;w.push(D,-G,0),P.push(0,0,1),M.push(j/h),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let G=0;G<h;G++){const j=G+m*x,D=G+m*(x+1),U=G+1+m*(x+1),I=G+1+m*x;E.push(j,D,I),E.push(D,U,I)}this.setIndex(E),this.setAttribute("position",new hn(w,3)),this.setAttribute("normal",new hn(P,3)),this.setAttribute("uv",new hn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.widthSegments,e.heightSegments)}}function yo(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];if(DS(l))l.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(DS(l[0])){const u=[];for(let d=0,h=l.length;d<h;d++)u[d]=l[d].clone();e[i][r]=u}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Kn(o){const e={};for(let i=0;i<o.length;i++){const r=yo(o[i]);for(const l in r)e[l]=r[l]}return e}function DS(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function zT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function SM(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ne.workingColorSpace}const FT={clone:yo,merge:Kn};var BT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pa extends Jl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BT,this.fragmentShader=HT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=zT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Oe().setHex(l.value);break;case"v2":this.uniforms[r].value=new Pe().fromArray(l.value);break;case"v3":this.uniforms[r].value=new K().fromArray(l.value);break;case"v4":this.uniforms[r].value=new on().fromArray(l.value);break;case"m3":this.uniforms[r].value=new me().fromArray(l.value);break;case"m4":this.uniforms[r].value=new Je().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class GT extends pa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bo extends Jl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lm,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class VT extends Jl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=j1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XT extends Jl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Gm extends zn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=i}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class Ao extends Gm{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const dp=new Je,NS=new K,US=new K;class kT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hm,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera;NS.setFromMatrixPosition(e.matrixWorld),i.position.copy(NS),US.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(US),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(e,i,r,l){dp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(dp,e.coordinateSystem,e.reversedDepth);const u=this._frameExtents,d=l?l.z/u.x:1,h=l?l.w/u.y:1,p=l?l.x/u.x:0,m=l?l.y/u.y:0;e.coordinateSystem===Yl||e.reversedDepth?i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,1,0,0,0,0,1):i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,.5,.5,0,0,0,1),i.multiply(dp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hu=new K,Gu=new ze,aa=new K;class xM extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=ua,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hu,Gu,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hu,Gu,aa.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Hu,Gu,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hu,Gu,aa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new K,LS=new Pe,OS=new Pe;class Ni extends xM{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=cm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cm*2*Math.atan(Math.tan(kh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,i){return this.getViewBounds(e,LS,OS),i.subVectors(OS,LS)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(kh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Vm extends xM{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class qT extends kT{constructor(){super(new Vm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ro extends Gm{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.target=new zn,this.shadow=new qT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class Co extends Gm{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const uo=-90,fo=1;class WT extends zn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ni(uo,fo,e,i);l.layers=this.layers,this.add(l);const u=new Ni(uo,fo,e,i);u.layers=this.layers,this.add(u);const d=new Ni(uo,fo,e,i);d.layers=this.layers,this.add(d);const h=new Ni(uo,fo,e,i);h.layers=this.layers,this.add(h);const p=new Ni(uo,fo,e,i);p.layers=this.layers,this.add(p);const m=new Ni(uo,fo,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,p]=i;for(const m of i)this.remove(m);if(e===ua)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Yl)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,p,m,v]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const P=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),r.texture.generateMipmaps=P,e.setRenderTarget(r,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(g,S,E),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class YT extends Ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Km=class Km{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const u=this.elements;return u[0]=e,u[2]=i,u[1]=r,u[3]=l,this}};Km.prototype.isMatrix2=!0;let PS=Km;function IS(o,e,i,r){const l=ZT(r);switch(i){case lM:return o*e;case uM:return o*e/l.components*l.byteLength;case Lm:return o*e/l.components*l.byteLength;case us:return o*e*2/l.components*l.byteLength;case Om:return o*e*2/l.components*l.byteLength;case cM:return o*e*3/l.components*l.byteLength;case Vi:return o*e*4/l.components*l.byteLength;case Pm:return o*e*4/l.components*l.byteLength;case Wu:case Yu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Zu:case Ku:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Lp:case Pp:return Math.max(o,16)*Math.max(e,8)/4;case Up:case Op:return Math.max(o,8)*Math.max(e,8)/2;case Ip:case zp:case Bp:case Hp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Fp:case ju:case Gp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Vp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Xp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case kp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case qp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Wp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Yp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Zp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Kp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Qp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Jp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case jp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case $p:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case tm:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case em:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case nm:case im:case am:return Math.ceil(o/4)*Math.ceil(e/4)*16;case rm:case sm:return Math.ceil(o/4)*Math.ceil(e/4)*8;case $u:case om:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ZT(o){switch(o){case _i:case aM:return{byteLength:1,components:1};case ql:case rM:case ha:return{byteLength:2,components:1};case Nm:case Um:return{byteLength:2,components:4};case da:case Dm:case ca:return{byteLength:4,components:1};case sM:case oM:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wm}}));typeof window<"u"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wm);function MM(){let o=null,e=!1,i=null,r=null;function l(u,d){r=o.requestAnimationFrame(l),i(u,d)}return{start:function(){e!==!0&&i!==null&&o!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function KT(o){const e=new WeakMap;function i(h,p){const m=h.array,v=h.usage,g=m.byteLength,S=o.createBuffer();o.bindBuffer(p,S),o.bufferData(p,m,v),h.onUploadCallback();let E;if(m instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)E=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=o.SHORT;else if(m instanceof Uint32Array)E=o.UNSIGNED_INT;else if(m instanceof Int32Array)E=o.INT;else if(m instanceof Int8Array)E=o.BYTE;else if(m instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,p,m){const v=p.array,g=p.updateRanges;if(o.bindBuffer(m,h),g.length===0)o.bufferSubData(m,0,v);else{g.sort((E,w)=>E.start-w.start);let S=0;for(let E=1;E<g.length;E++){const w=g[S],P=g[E];P.start<=w.start+w.count+1?w.count=Math.max(w.count,P.start+P.count-w.start):(++S,g[S]=P)}g.length=S+1;for(let E=0,w=g.length;E<w;E++){const P=g[E];o.bufferSubData(m,P.start*v.BYTES_PER_ELEMENT,v,P.start,P.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:u,update:d}}var QT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JT=`#ifdef USE_ALPHAHASH
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
#endif`,jT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$T=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nb=`#ifdef USE_AOMAP
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
#endif`,ib=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ab=`#ifdef USE_BATCHING
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
#endif`,rb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ob=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cb=`#ifdef USE_IRIDESCENCE
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
#endif`,ub=`#ifdef USE_BUMPMAP
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
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_b=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sb=`#define PI 3.141592653589793
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
} // validated`,xb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mb=`vec3 transformedNormal = objectNormal;
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
#endif`,yb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ab="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cb=`#ifdef USE_ENVMAP
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
#endif`,wb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Db=`#ifdef USE_ENVMAP
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
#endif`,Nb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ub=`#ifdef USE_ENVMAP
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
#endif`,Lb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ob=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zb=`#ifdef USE_GRADIENTMAP
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
}`,Fb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vb=`#ifdef USE_ENVMAP
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
#endif`,Xb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yb=`PhysicalMaterial material;
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
#endif`,Zb=`uniform sampler2D dfgLUT;
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
}`,Kb=`
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
#endif`,Qb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$b=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sA=`#if defined( USE_POINTS_UV )
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
#endif`,oA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dA=`#ifdef USE_MORPHTARGETS
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
#endif`,hA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_A=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,SA=`#ifdef USE_NORMALMAP
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
#endif`,xA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,AA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PA=`float getShadowMask() {
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
}`,IA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zA=`#ifdef USE_SKINNING
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
#endif`,FA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BA=`#ifdef USE_SKINNING
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
#endif`,HA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kA=`#ifdef USE_TRANSMISSION
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
#endif`,qA=`#ifdef USE_TRANSMISSION
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
#endif`,WA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JA=`uniform sampler2D t2D;
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
}`,jA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$A=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nR=`#include <common>
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
}`,iR=`#if DEPTH_PACKING == 3200
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
}`,aR=`#define DISTANCE
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
}`,rR=`#define DISTANCE
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
}`,sR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lR=`uniform float scale;
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
}`,cR=`uniform vec3 diffuse;
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
}`,uR=`#include <common>
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
}`,fR=`uniform vec3 diffuse;
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
}`,dR=`#define LAMBERT
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
}`,hR=`#define LAMBERT
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
}`,pR=`#define MATCAP
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
}`,mR=`#define MATCAP
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
}`,gR=`#define NORMAL
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
}`,_R=`#define NORMAL
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
}`,vR=`#define PHONG
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
}`,SR=`#define PHONG
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
}`,xR=`#define STANDARD
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
}`,MR=`#define STANDARD
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
}`,yR=`#define TOON
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
}`,ER=`#define TOON
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
}`,TR=`uniform float size;
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
}`,bR=`uniform vec3 diffuse;
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
}`,AR=`#include <common>
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
}`,RR=`uniform vec3 color;
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
}`,CR=`uniform float rotation;
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
}`,wR=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:QT,alphahash_pars_fragment:JT,alphamap_fragment:jT,alphamap_pars_fragment:$T,alphatest_fragment:tb,alphatest_pars_fragment:eb,aomap_fragment:nb,aomap_pars_fragment:ib,batching_pars_vertex:ab,batching_vertex:rb,begin_vertex:sb,beginnormal_vertex:ob,bsdfs:lb,iridescence_fragment:cb,bumpmap_pars_fragment:ub,clipping_planes_fragment:fb,clipping_planes_pars_fragment:db,clipping_planes_pars_vertex:hb,clipping_planes_vertex:pb,color_fragment:mb,color_pars_fragment:gb,color_pars_vertex:_b,color_vertex:vb,common:Sb,cube_uv_reflection_fragment:xb,defaultnormal_vertex:Mb,displacementmap_pars_vertex:yb,displacementmap_vertex:Eb,emissivemap_fragment:Tb,emissivemap_pars_fragment:bb,colorspace_fragment:Ab,colorspace_pars_fragment:Rb,envmap_fragment:Cb,envmap_common_pars_fragment:wb,envmap_pars_fragment:Db,envmap_pars_vertex:Nb,envmap_physical_pars_fragment:Vb,envmap_vertex:Ub,fog_vertex:Lb,fog_pars_vertex:Ob,fog_fragment:Pb,fog_pars_fragment:Ib,gradientmap_pars_fragment:zb,lightmap_pars_fragment:Fb,lights_lambert_fragment:Bb,lights_lambert_pars_fragment:Hb,lights_pars_begin:Gb,lights_toon_fragment:Xb,lights_toon_pars_fragment:kb,lights_phong_fragment:qb,lights_phong_pars_fragment:Wb,lights_physical_fragment:Yb,lights_physical_pars_fragment:Zb,lights_fragment_begin:Kb,lights_fragment_maps:Qb,lights_fragment_end:Jb,lightprobes_pars_fragment:jb,logdepthbuf_fragment:$b,logdepthbuf_pars_fragment:tA,logdepthbuf_pars_vertex:eA,logdepthbuf_vertex:nA,map_fragment:iA,map_pars_fragment:aA,map_particle_fragment:rA,map_particle_pars_fragment:sA,metalnessmap_fragment:oA,metalnessmap_pars_fragment:lA,morphinstance_vertex:cA,morphcolor_vertex:uA,morphnormal_vertex:fA,morphtarget_pars_vertex:dA,morphtarget_vertex:hA,normal_fragment_begin:pA,normal_fragment_maps:mA,normal_pars_fragment:gA,normal_pars_vertex:_A,normal_vertex:vA,normalmap_pars_fragment:SA,clearcoat_normal_fragment_begin:xA,clearcoat_normal_fragment_maps:MA,clearcoat_pars_fragment:yA,iridescence_pars_fragment:EA,opaque_fragment:TA,packing:bA,premultiplied_alpha_fragment:AA,project_vertex:RA,dithering_fragment:CA,dithering_pars_fragment:wA,roughnessmap_fragment:DA,roughnessmap_pars_fragment:NA,shadowmap_pars_fragment:UA,shadowmap_pars_vertex:LA,shadowmap_vertex:OA,shadowmask_pars_fragment:PA,skinbase_vertex:IA,skinning_pars_vertex:zA,skinning_vertex:FA,skinnormal_vertex:BA,specularmap_fragment:HA,specularmap_pars_fragment:GA,tonemapping_fragment:VA,tonemapping_pars_fragment:XA,transmission_fragment:kA,transmission_pars_fragment:qA,uv_pars_fragment:WA,uv_pars_vertex:YA,uv_vertex:ZA,worldpos_vertex:KA,background_vert:QA,background_frag:JA,backgroundCube_vert:jA,backgroundCube_frag:$A,cube_vert:tR,cube_frag:eR,depth_vert:nR,depth_frag:iR,distance_vert:aR,distance_frag:rR,equirect_vert:sR,equirect_frag:oR,linedashed_vert:lR,linedashed_frag:cR,meshbasic_vert:uR,meshbasic_frag:fR,meshlambert_vert:dR,meshlambert_frag:hR,meshmatcap_vert:pR,meshmatcap_frag:mR,meshnormal_vert:gR,meshnormal_frag:_R,meshphong_vert:vR,meshphong_frag:SR,meshphysical_vert:xR,meshphysical_frag:MR,meshtoon_vert:yR,meshtoon_frag:ER,points_vert:TR,points_frag:bR,shadow_vert:AR,shadow_frag:RR,sprite_vert:CR,sprite_frag:wR},kt={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},oa={basic:{uniforms:Kn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Kn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Kn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Kn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Kn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Kn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Kn([kt.points,kt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Kn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Kn([kt.common,kt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Kn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Kn([kt.sprite,kt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:Kn([kt.common,kt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:Kn([kt.lights,kt.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};oa.physical={uniforms:Kn([oa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Vu={r:0,b:0,g:0},DR=new Je,yM=new me;yM.set(-1,0,0,0,1,0,0,0,1);function NR(o,e,i,r,l,u){const d=new Oe(0);let h=l===!0?0:1,p,m,v=null,g=0,S=null;function E(G){let j=G.isScene===!0?G.background:null;if(j&&j.isTexture){const D=G.backgroundBlurriness>0;j=e.get(j,D)}return j}function w(G){let j=!1;const D=E(G);D===null?M(d,h):D&&D.isColor&&(M(D,1),j=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,u):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||j)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function P(G,j){const D=E(j);D&&(D.isCubeTexture||D.mapping===sf)?(m===void 0&&(m=new pn(new jl(1,1,1),new pa({name:"BackgroundCubeMaterial",uniforms:yo(oa.backgroundCube.uniforms),vertexShader:oa.backgroundCube.vertexShader,fragmentShader:oa.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,I,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=D,m.material.uniforms.backgroundBlurriness.value=j.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=j.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(DR.makeRotationFromEuler(j.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(yM),m.material.toneMapped=Ne.getTransfer(D.colorSpace)!==Ze,(v!==D||g!==D.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,v=D,g=D.version,S=o.toneMapping),m.layers.enableAll(),G.unshift(m,m.geometry,m.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new pn(new ma(2,2),new pa({name:"BackgroundMaterial",uniforms:yo(oa.background.uniforms),vertexShader:oa.background.vertexShader,fragmentShader:oa.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=j.backgroundIntensity,p.material.toneMapped=Ne.getTransfer(D.colorSpace)!==Ze,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(v!==D||g!==D.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,v=D,g=D.version,S=o.toneMapping),p.layers.enableAll(),G.unshift(p,p.geometry,p.material,0,0,null))}function M(G,j){G.getRGB(Vu,SM(o)),i.buffers.color.setClear(Vu.r,Vu.g,Vu.b,j,u)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(G,j=1){d.set(G),h=j,M(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(G){h=G,M(d,h)},render:w,addToRenderList:P,dispose:x}}function UR(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(T,R,N,H,k){let V=!1;const L=g(T,H,N,R);u!==L&&(u=L,m(u.object)),V=E(T,H,N,k),V&&w(T,H,N,k),k!==null&&e.update(k,o.ELEMENT_ARRAY_BUFFER),(V||d)&&(d=!1,D(T,R,N,H),k!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function p(){return o.createVertexArray()}function m(T){return o.bindVertexArray(T)}function v(T){return o.deleteVertexArray(T)}function g(T,R,N,H){const k=H.wireframe===!0;let V=r[R.id];V===void 0&&(V={},r[R.id]=V);const L=T.isInstancedMesh===!0?T.id:0;let J=V[L];J===void 0&&(J={},V[L]=J);let Q=J[N.id];Q===void 0&&(Q={},J[N.id]=Q);let pt=Q[k];return pt===void 0&&(pt=S(p()),Q[k]=pt),pt}function S(T){const R=[],N=[],H=[];for(let k=0;k<i;k++)R[k]=0,N[k]=0,H[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:H,object:T,attributes:{},index:null}}function E(T,R,N,H){const k=u.attributes,V=R.attributes;let L=0;const J=N.getAttributes();for(const Q in J)if(J[Q].location>=0){const st=k[Q];let vt=V[Q];if(vt===void 0&&(Q==="instanceMatrix"&&T.instanceMatrix&&(vt=T.instanceMatrix),Q==="instanceColor"&&T.instanceColor&&(vt=T.instanceColor)),st===void 0||st.attribute!==vt||vt&&st.data!==vt.data)return!0;L++}return u.attributesNum!==L||u.index!==H}function w(T,R,N,H){const k={},V=R.attributes;let L=0;const J=N.getAttributes();for(const Q in J)if(J[Q].location>=0){let st=V[Q];st===void 0&&(Q==="instanceMatrix"&&T.instanceMatrix&&(st=T.instanceMatrix),Q==="instanceColor"&&T.instanceColor&&(st=T.instanceColor));const vt={};vt.attribute=st,st&&st.data&&(vt.data=st.data),k[Q]=vt,L++}u.attributes=k,u.attributesNum=L,u.index=H}function P(){const T=u.newAttributes;for(let R=0,N=T.length;R<N;R++)T[R]=0}function M(T){x(T,0)}function x(T,R){const N=u.newAttributes,H=u.enabledAttributes,k=u.attributeDivisors;N[T]=1,H[T]===0&&(o.enableVertexAttribArray(T),H[T]=1),k[T]!==R&&(o.vertexAttribDivisor(T,R),k[T]=R)}function G(){const T=u.newAttributes,R=u.enabledAttributes;for(let N=0,H=R.length;N<H;N++)R[N]!==T[N]&&(o.disableVertexAttribArray(N),R[N]=0)}function j(T,R,N,H,k,V,L){L===!0?o.vertexAttribIPointer(T,R,N,k,V):o.vertexAttribPointer(T,R,N,H,k,V)}function D(T,R,N,H){P();const k=H.attributes,V=N.getAttributes(),L=R.defaultAttributeValues;for(const J in V){const Q=V[J];if(Q.location>=0){let pt=k[J];if(pt===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(pt=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(pt=T.instanceColor)),pt!==void 0){const st=pt.normalized,vt=pt.itemSize,Ct=e.get(pt);if(Ct===void 0)continue;const O=Ct.buffer,rt=Ct.type,St=Ct.bytesPerElement,q=rt===o.INT||rt===o.UNSIGNED_INT||pt.gpuType===Dm;if(pt.isInterleavedBufferAttribute){const nt=pt.data,Et=nt.stride,wt=pt.offset;if(nt.isInstancedInterleavedBuffer){for(let lt=0;lt<Q.locationSize;lt++)x(Q.location+lt,nt.meshPerAttribute);T.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let lt=0;lt<Q.locationSize;lt++)M(Q.location+lt);o.bindBuffer(o.ARRAY_BUFFER,O);for(let lt=0;lt<Q.locationSize;lt++)j(Q.location+lt,vt/Q.locationSize,rt,st,Et*St,(wt+vt/Q.locationSize*lt)*St,q)}else{if(pt.isInstancedBufferAttribute){for(let nt=0;nt<Q.locationSize;nt++)x(Q.location+nt,pt.meshPerAttribute);T.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let nt=0;nt<Q.locationSize;nt++)M(Q.location+nt);o.bindBuffer(o.ARRAY_BUFFER,O);for(let nt=0;nt<Q.locationSize;nt++)j(Q.location+nt,vt/Q.locationSize,rt,st,vt*St,vt/Q.locationSize*nt*St,q)}}else if(L!==void 0){const st=L[J];if(st!==void 0)switch(st.length){case 2:o.vertexAttrib2fv(Q.location,st);break;case 3:o.vertexAttrib3fv(Q.location,st);break;case 4:o.vertexAttrib4fv(Q.location,st);break;default:o.vertexAttrib1fv(Q.location,st)}}}}G()}function U(){F();for(const T in r){const R=r[T];for(const N in R){const H=R[N];for(const k in H){const V=H[k];for(const L in V)v(V[L].object),delete V[L];delete H[k]}}delete r[T]}}function I(T){if(r[T.id]===void 0)return;const R=r[T.id];for(const N in R){const H=R[N];for(const k in H){const V=H[k];for(const L in V)v(V[L].object),delete V[L];delete H[k]}}delete r[T.id]}function B(T){for(const R in r){const N=r[R];for(const H in N){const k=N[H];if(k[T.id]===void 0)continue;const V=k[T.id];for(const L in V)v(V[L].object),delete V[L];delete k[T.id]}}}function b(T){for(const R in r){const N=r[R],H=T.isInstancedMesh===!0?T.id:0,k=N[H];if(k!==void 0){for(const V in k){const L=k[V];for(const J in L)v(L[J].object),delete L[J];delete k[V]}delete N[H],Object.keys(N).length===0&&delete r[R]}}}function F(){Y(),d=!0,u!==l&&(u=l,m(u.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:F,resetDefaultState:Y,dispose:U,releaseStatesOfGeometry:I,releaseStatesOfObject:b,releaseStatesOfProgram:B,initAttributes:P,enableAttribute:M,disableUnusedAttributes:G}}function LR(o,e,i){let r;function l(p){r=p}function u(p,m){o.drawArrays(r,p,m),i.update(m,r,1)}function d(p,m,v){v!==0&&(o.drawArraysInstanced(r,p,m,v),i.update(m,r,v))}function h(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,v);let S=0;for(let E=0;E<v;E++)S+=m[E];i.update(S,r,1)}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function OR(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==Vi&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const b=B===ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==_i&&B!==ca&&!b&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(fe("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&S===!1&&fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),G=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),j=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=o.getParameter(o.MAX_SAMPLES),I=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:w,maxTextureSize:P,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:G,maxVaryings:j,maxFragmentUniforms:D,maxSamples:U,samples:I}}function PR(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Cr,h=new me,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const E=g.length!==0||S||r!==0||l;return l=S,r=g.length,E},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=v(g,S,0)},this.setState=function(g,S,E){const w=g.clippingPlanes,P=g.clipIntersection,M=g.clipShadows,x=o.get(g);if(!l||w===null||w.length===0||u&&!M)u?v(null):m();else{const G=u?0:r,j=G*4;let D=x.clippingState||null;p.value=D,D=v(w,S,j,E);for(let U=0;U!==j;++U)D[U]=i[U];x.clippingState=D,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=G}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,S,E,w){const P=g!==null?g.length:0;let M=null;if(P!==0){if(M=p.value,w!==!0||M===null){const x=E+P*4,G=S.matrixWorldInverse;h.getNormalMatrix(G),(M===null||M.length<x)&&(M=new Float32Array(x));for(let j=0,D=E;j!==P;++j,D+=4)d.copy(g[j]).applyMatrix4(G,h),d.normal.toArray(M,D),M[D+3]=d.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,M}}const go=4,IR=6,zR=20,FR=256,Fl=new Vm,zS=new Oe;let hp=null,pp=0,mp=0,gp=!1;const BR=new K,rs=new K;class FS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=BR}=u;hp=this._renderer.getRenderTarget(),pp=this._renderer.getActiveCubeFace(),mp=this._renderer.getActiveMipmapLevel(),gp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=GS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=HS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hp,pp,mp),this._renderer.xr.enabled=gp,e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===cs||e.mapping===Mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hp=this._renderer.getRenderTarget(),pp=this._renderer.getActiveCubeFace(),mp=this._renderer.getActiveMipmapLevel(),gp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:ha,format:Vi,colorSpace:tf,depthBuffer:!1},l=BS(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=BS(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=HR(u)),this._blurMaterial=VR(u,e,i),this._ggxMaterial=GR(u,e,i)}return l}_compileMaterial(e){const i=new pn(new Jn,e);this._renderer.compile(i,Fl)}_sceneToCubeUV(e,i,r,l,u){const p=new Ni(90,1,i,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,E=g.toneMapping;g.getClearColor(zS),g.toneMapping=fa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pn(new jl,new Nr({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1})));const P=this._backgroundBox,M=P.material;let x=!1;const G=e.background;G?G.isColor&&(M.color.copy(G),e.background=null,x=!0):(M.color.copy(zS),x=!0);for(let j=0;j<6;j++){const D=j%3;D===0?(p.up.set(0,m[j],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+v[j],u.y,u.z)):D===1?(p.up.set(0,0,m[j]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+v[j],u.z)):(p.up.set(0,m[j],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+v[j]));const U=this._cubeSize;ho(l,D*U,j>2?U:0,U,U),g.setRenderTarget(l),x&&g.render(P,p),g.render(e,p)}g.toneMapping=E,g.autoClear=S,e.background=G}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===cs||e.mapping===Mo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=GS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=HS());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=e;const p=this._cubeSize;ho(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,Fl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(m*m-v*v),S=m*1.25,E=g*S,{_lodMax:w}=this,P=this._sizeLods[r],M=3*P*(r>w-go?r-w+go:0),x=4*(this._cubeSize-P);p.envMap.value=e.texture,p.roughness.value=E,p.mipInt.value=w-i,ho(u,M,x,3*P,2*P),l.setRenderTarget(u),l.render(h,Fl),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=w-r,ho(e,M,x,3*P,2*P),l.setRenderTarget(e),l.render(h,Fl)}_blur(e,i,r,l){const u=this._pingPongRenderTarget,d=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(e,u,i,r,d),this._blurPass(u,e,r,r,d)}_blurPass(e,i,r,l,u){const d=this._renderer,h=this._blurMaterial,p=this._lodMeshes[l];p.material=h;const m=h.uniforms;m.envMap.value=e.texture,m.sigma.value=u,m.mipInt.value=this._lodMax-r;const v=this._sizeLods[l],g=3*v*(l>this._lodMax-go?l-this._lodMax+go:0),S=4*(this._cubeSize-v);ho(i,g,S,3*v,2*v),d.setRenderTarget(i),d.render(p,Fl)}}function HR(o){const e=[],i=[];let r=o;const l=o-go+1+IR;for(let u=0;u<l;u++){const d=Math.pow(2,r);e.push(d);const h=1/(d-2),p=-h,m=1+h,v=[p,p,m,p,m,m,p,p,m,m,p,m],g=6,S=6,E=3,w=new Float32Array(E*S*g),P=new Float32Array(E*S*g);for(let x=0;x<g;x++){const G=x%3*2/3-1,j=x>2?0:-1,D=[G,j,0,G+2/3,j,0,G+2/3,j+1,0,G,j,0,G+2/3,j+1,0,G,j+1,0];w.set(D,E*S*x);for(let U=0;U<S;U++){const I=v[U*2]*2-1,B=v[U*2+1]*2-1;x===0?rs.set(1,B,I):x===1?rs.set(-I,1,-B):x===2?rs.set(-I,B,1):x===3?rs.set(-1,B,-I):x===4?rs.set(-I,-1,B):rs.set(I,B,-1),rs.toArray(P,(x*S+U)*E)}}const M=new Jn;M.setAttribute("position",new Wa(w,E)),M.setAttribute("outputDirection",new Wa(P,E)),i.push(new pn(M,null)),r>go&&r--}return{lodMeshes:i,sizeLods:e}}function BS(o,e,i){const r=new Xi(o,e,i);return r.texture.mapping=sf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ho(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function GR(o,e,i){return new pa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:FR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:of(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function VR(o,e,i){return new pa({name:"SphericalGaussianBlur",defines:{SAMPLES:zR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:of(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function HS(){return new pa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:of(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function GS(){return new pa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function of(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class EM extends Xi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new _M(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new jl(5,5,5),u=new pa({name:"CubemapFromEquirect",uniforms:yo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ai,blending:ka});u.uniforms.tEquirect.value=i;const d=new pn(l,u),h=i.minFilter;return i.minFilter===os&&(i.minFilter=Gn),new WT(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}function XR(o){let e=new WeakMap,i=new WeakMap,r=null;function l(S,E=!1){return S==null?null:E?d(S):u(S)}function u(S){if(S&&S.isTexture){const E=S.mapping;if(E===Hh||E===Gh)if(e.has(S)){const w=e.get(S).texture;return h(w,S.mapping)}else{const w=S.image;if(w&&w.height>0){const P=new EM(w.height);return P.fromEquirectangularTexture(o,S),e.set(S,P),S.addEventListener("dispose",m),h(P.texture,S.mapping)}else return null}}return S}function d(S){if(S&&S.isTexture){const E=S.mapping,w=E===Hh||E===Gh,P=E===cs||E===Mo;if(w||P){let M=i.get(S);const x=M!==void 0?M.texture.pmremVersion:0;if(S.isRenderTargetTexture&&S.pmremVersion!==x)return r===null&&(r=new FS(o)),M=w?r.fromEquirectangular(S,M):r.fromCubemap(S,M),M.texture.pmremVersion=S.pmremVersion,i.set(S,M),M.texture;if(M!==void 0)return M.texture;{const G=S.image;return w&&G&&G.height>0||P&&G&&p(G)?(r===null&&(r=new FS(o)),M=w?r.fromEquirectangular(S):r.fromCubemap(S),M.texture.pmremVersion=S.pmremVersion,i.set(S,M),S.addEventListener("dispose",v),M.texture):null}}}return S}function h(S,E){return E===Hh?S.mapping=cs:E===Gh&&(S.mapping=Mo),S}function p(S){let E=0;const w=6;for(let P=0;P<w;P++)S[P]!==void 0&&E++;return E===w}function m(S){const E=S.target;E.removeEventListener("dispose",m);const w=e.get(E);w!==void 0&&(e.delete(E),w.dispose())}function v(S){const E=S.target;E.removeEventListener("dispose",v);const w=i.get(E);w!==void 0&&(i.delete(E),w.dispose())}function g(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:g}}function kR(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&_o("WebGLRenderer: "+r+" extension not supported."),l}}}function qR(o,e,i,r){const l={},u=new WeakMap;function d(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const w in S.attributes)e.remove(S.attributes[w]);S.removeEventListener("dispose",d),delete l[S.id];const E=u.get(S);E&&(e.remove(E),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(g,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function p(g){const S=g.attributes;for(const E in S)e.update(S[E],o.ARRAY_BUFFER)}function m(g){const S=[],E=g.index,w=g.attributes.position;let P=0;if(w===void 0)return;if(E!==null){const G=E.array;P=E.version;for(let j=0,D=G.length;j<D;j+=3){const U=G[j+0],I=G[j+1],B=G[j+2];S.push(U,I,I,B,B,U)}}else{const G=w.array;P=w.version;for(let j=0,D=G.length/3-1;j<D;j+=3){const U=j+0,I=j+1,B=j+2;S.push(U,I,I,B,B,U)}}const M=new(w.count>=65535?gM:mM)(S,1);M.version=P;const x=u.get(g);x&&e.remove(x),u.set(g,M)}function v(g){const S=u.get(g);if(S){const E=g.index;E!==null&&S.version<E.version&&m(g)}else m(g);return u.get(g)}return{get:h,update:p,getWireframeAttribute:v}}function WR(o,e,i){let r;function l(g){r=g}let u,d;function h(g){u=g.type,d=g.bytesPerElement}function p(g,S){o.drawElements(r,S,u,g*d),i.update(S,r,1)}function m(g,S,E){E!==0&&(o.drawElementsInstanced(r,S,u,g*d,E),i.update(S,r,E))}function v(g,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,g,0,E);let P=0;for(let M=0;M<E;M++)P+=S[M];i.update(P,r,1)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=v}function YR(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:Be("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function ZR(o,e,i){const r=new WeakMap,l=new on;function u(d,h,p){const m=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let S=r.get(h);if(S===void 0||S.count!==g){let Y=function(){b.dispose(),r.delete(h),h.removeEventListener("dispose",Y)};var E=Y;S!==void 0&&S.texture.dispose();const w=h.morphAttributes.position!==void 0,P=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],G=h.morphAttributes.normal||[],j=h.morphAttributes.color||[];let D=0;w===!0&&(D=1),P===!0&&(D=2),M===!0&&(D=3);let U=h.attributes.position.count*D,I=1;U>e.maxTextureSize&&(I=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const B=new Float32Array(U*I*4*g),b=new dM(B,U,I,g);b.type=ca,b.needsUpdate=!0;const F=D*4;for(let T=0;T<g;T++){const R=x[T],N=G[T],H=j[T],k=U*I*4*T;for(let V=0;V<R.count;V++){const L=V*F;w===!0&&(l.fromBufferAttribute(R,V),B[k+L+0]=l.x,B[k+L+1]=l.y,B[k+L+2]=l.z,B[k+L+3]=0),P===!0&&(l.fromBufferAttribute(N,V),B[k+L+4]=l.x,B[k+L+5]=l.y,B[k+L+6]=l.z,B[k+L+7]=0),M===!0&&(l.fromBufferAttribute(H,V),B[k+L+8]=l.x,B[k+L+9]=l.y,B[k+L+10]=l.z,B[k+L+11]=H.itemSize===4?l.w:1)}}S={count:g,texture:b,size:new Pe(U,I)},r.set(h,S),h.addEventListener("dispose",Y)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let w=0;for(let M=0;M<m.length;M++)w+=m[M];const P=h.morphTargetsRelative?1:1-w;p.getUniforms().setValue(o,"morphTargetBaseInfluence",P),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function KR(o,e,i,r,l){let u=new WeakMap;function d(m){const v=l.render.frame,g=m.geometry,S=e.get(m,g);if(u.get(S)!==v&&(e.update(S),u.set(S,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==v&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),u.set(m,v))),m.isSkinnedMesh){const E=m.skeleton;u.get(E)!==v&&(E.update(),u.set(E,v))}return S}function h(){u=new WeakMap}function p(m){const v=m.target;v.removeEventListener("dispose",p),r.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:d,dispose:h}}const QR={[Qx]:"LINEAR_TONE_MAPPING",[Jx]:"REINHARD_TONE_MAPPING",[jx]:"CINEON_TONE_MAPPING",[$x]:"ACES_FILMIC_TONE_MAPPING",[eM]:"AGX_TONE_MAPPING",[nM]:"NEUTRAL_TONE_MAPPING",[tM]:"CUSTOM_TONE_MAPPING"};function JR(o,e,i,r,l,u){const d=new Xi(e,i,{type:o,depthBuffer:l,stencilBuffer:u,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null;const m=new Jn;m.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new hn([0,2,0,0,2,0],2));const v=new GT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new pn(m,v),S=new Vm(-1,1,1,-1,0,1);let E=null,w=null,P=!1,M,x=null,G=[],j=!1;this.setSize=function(D,U){d.setSize(D,U),h!==null&&h.setSize(D,U),p!==null&&p.setSize(D,U);for(let I=0;I<G.length;I++){const B=G[I];B.setSize&&B.setSize(D,U)}},this.setEffects=function(D){G=D,j=G.length>0&&G[0].isRenderPass===!0;const U=d.width,I=d.height;G.length>0&&h===null&&(h=new Xi(U,I,{type:ha,depthBuffer:!1,stencilBuffer:!1}),p=new Xi(U,I,{type:ha,depthBuffer:!1,stencilBuffer:!1}));for(let B=0;B<G.length;B++){const b=G[B];b.setSize&&b.setSize(U,I)}},this.begin=function(D,U){if(P||D.toneMapping===fa&&G.length===0)return!1;if(x=U,U!==null){const I=U.width,B=U.height;(d.width!==I||d.height!==B)&&this.setSize(I,B)}return j===!1&&D.setRenderTarget(d),M=D.toneMapping,D.toneMapping=fa,!0},this.hasRenderPass=function(){return j},this.end=function(D,U){D.toneMapping=M,P=!0;let I=d,B=h;for(let b=0;b<G.length;b++){const F=G[b];F.enabled!==!1&&(F.render(D,B,I,U),F.needsSwap!==!1&&(I=B,B=B===h?p:h))}if(E!==D.outputColorSpace||w!==D.toneMapping){E=D.outputColorSpace,w=D.toneMapping,v.defines={},Ne.getTransfer(E)===Ze&&(v.defines.SRGB_TRANSFER="");const b=QR[w];b&&(v.defines[b]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=I.texture,D.setRenderTarget(x),D.render(g,S),x=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),m.dispose(),v.dispose()}}const TM=new Vn,um=new Zl(1,1),bM=new dM,AM=new vT,RM=new _M,VS=[],XS=[],kS=new Float32Array(16),qS=new Float32Array(9),WS=new Float32Array(4);function wo(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=VS[l];if(u===void 0&&(u=new Float32Array(l),VS[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function En(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Tn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function lf(o,e){let i=XS[e];i===void 0&&(i=new Int32Array(e),XS[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function jR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function $R(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2fv(this.addr,e),Tn(i,e)}}function tC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(En(i,e))return;o.uniform3fv(this.addr,e),Tn(i,e)}}function eC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4fv(this.addr,e),Tn(i,e)}}function nC(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,r))return;WS.set(r),o.uniformMatrix2fv(this.addr,!1,WS),Tn(i,r)}}function iC(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,r))return;qS.set(r),o.uniformMatrix3fv(this.addr,!1,qS),Tn(i,r)}}function aC(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,r))return;kS.set(r),o.uniformMatrix4fv(this.addr,!1,kS),Tn(i,r)}}function rC(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function sC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2iv(this.addr,e),Tn(i,e)}}function oC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;o.uniform3iv(this.addr,e),Tn(i,e)}}function lC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4iv(this.addr,e),Tn(i,e)}}function cC(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function uC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2uiv(this.addr,e),Tn(i,e)}}function fC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;o.uniform3uiv(this.addr,e),Tn(i,e)}}function dC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4uiv(this.addr,e),Tn(i,e)}}function hC(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(um.compareFunction=i.isReversedDepthBuffer()?zm:Im,u=um):u=TM,i.setTexture2D(e||u,l)}function pC(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||AM,l)}function mC(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||RM,l)}function gC(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||bM,l)}function _C(o){switch(o){case 5126:return jR;case 35664:return $R;case 35665:return tC;case 35666:return eC;case 35674:return nC;case 35675:return iC;case 35676:return aC;case 5124:case 35670:return rC;case 35667:case 35671:return sC;case 35668:case 35672:return oC;case 35669:case 35673:return lC;case 5125:return cC;case 36294:return uC;case 36295:return fC;case 36296:return dC;case 35678:case 36198:case 36298:case 36306:case 35682:return hC;case 35679:case 36299:case 36307:return pC;case 35680:case 36300:case 36308:case 36293:return mC;case 36289:case 36303:case 36311:case 36292:return gC}}function vC(o,e){o.uniform1fv(this.addr,e)}function SC(o,e){const i=wo(e,this.size,2);o.uniform2fv(this.addr,i)}function xC(o,e){const i=wo(e,this.size,3);o.uniform3fv(this.addr,i)}function MC(o,e){const i=wo(e,this.size,4);o.uniform4fv(this.addr,i)}function yC(o,e){const i=wo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function EC(o,e){const i=wo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function TC(o,e){const i=wo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function bC(o,e){o.uniform1iv(this.addr,e)}function AC(o,e){o.uniform2iv(this.addr,e)}function RC(o,e){o.uniform3iv(this.addr,e)}function CC(o,e){o.uniform4iv(this.addr,e)}function wC(o,e){o.uniform1uiv(this.addr,e)}function DC(o,e){o.uniform2uiv(this.addr,e)}function NC(o,e){o.uniform3uiv(this.addr,e)}function UC(o,e){o.uniform4uiv(this.addr,e)}function LC(o,e,i){const r=this.cache,l=e.length,u=lf(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=um:d=TM;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,u[h])}function OC(o,e,i){const r=this.cache,l=e.length,u=lf(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||AM,u[d])}function PC(o,e,i){const r=this.cache,l=e.length,u=lf(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||RM,u[d])}function IC(o,e,i){const r=this.cache,l=e.length,u=lf(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||bM,u[d])}function zC(o){switch(o){case 5126:return vC;case 35664:return SC;case 35665:return xC;case 35666:return MC;case 35674:return yC;case 35675:return EC;case 35676:return TC;case 5124:case 35670:return bC;case 35667:case 35671:return AC;case 35668:case 35672:return RC;case 35669:case 35673:return CC;case 5125:return wC;case 36294:return DC;case 36295:return NC;case 36296:return UC;case 35678:case 36198:case 36298:case 36306:case 35682:return LC;case 35679:case 36299:case 36307:return OC;case 35680:case 36300:case 36308:case 36293:return PC;case 36289:case 36303:case 36311:case 36292:return IC}}class FC{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=_C(i.type)}}class BC{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=zC(i.type)}}class HC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const _p=/(\w+)(\])?(\[|\.)?/g;function YS(o,e){o.seq.push(e),o.map[e.id]=e}function GC(o,e,i){const r=o.name,l=r.length;for(_p.lastIndex=0;;){const u=_p.exec(r),d=_p.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){YS(i,m===void 0?new FC(h,o,e):new BC(h,o,e));break}else{let g=i.map[h];g===void 0&&(g=new HC(h),YS(i,g)),i=g}}}class Qu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=e.getActiveUniform(i,d),p=e.getUniformLocation(i,h.name);GC(h,p,this)}const l=[],u=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function ZS(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const VC=37297;let XC=0;function kC(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const KS=new me;function qC(o){Ne._getMatrix(KS,Ne.workingColorSpace,o);const e=`mat3( ${KS.elements.map(i=>i.toFixed(4))} )`;switch(Ne.getTransfer(o)){case ef:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function QS(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+kC(o.getShaderSource(e),h)}else return u}function WC(o,e){const i=qC(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const YC={[Qx]:"Linear",[Jx]:"Reinhard",[jx]:"Cineon",[$x]:"ACESFilmic",[eM]:"AgX",[nM]:"Neutral",[tM]:"Custom"};function ZC(o,e){const i=YC[e];return i===void 0?(fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Xu=new K;function KC(){Ne.getLuminanceCoefficients(Xu);const o=Xu.x.toFixed(4),e=Xu.y.toFixed(4),i=Xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vl).join(`
`)}function JC(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function jC(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Vl(o){return o!==""}function JS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $C=/^[ \t]*#include +<([\w\d./]+)>/gm;function fm(o){return o.replace($C,e3)}const t3=new Map;function e3(o,e){let i=Se[e];if(i===void 0){const r=t3.get(e);if(r!==void 0)i=Se[r],fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return fm(i)}const n3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $S(o){return o.replace(n3,i3)}function i3(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function tx(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const a3={[qu]:"SHADOWMAP_TYPE_PCF",[Gl]:"SHADOWMAP_TYPE_VSM"};function r3(o){return a3[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const s3={[cs]:"ENVMAP_TYPE_CUBE",[Mo]:"ENVMAP_TYPE_CUBE",[sf]:"ENVMAP_TYPE_CUBE_UV"};function o3(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":s3[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const l3={[Mo]:"ENVMAP_MODE_REFRACTION"};function c3(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":l3[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const u3={[Kx]:"ENVMAP_BLENDING_MULTIPLY",[K1]:"ENVMAP_BLENDING_MIX",[Q1]:"ENVMAP_BLENDING_ADD"};function f3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":u3[o.combine]||"ENVMAP_BLENDING_NONE"}function d3(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function h3(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=r3(i),m=o3(i),v=c3(i),g=f3(i),S=d3(i),E=QC(i),w=JC(u),P=l.createProgram();let M,x,G=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(Vl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(Vl).join(`
`),x.length>0&&(x+=`
`)):(M=[tx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vl).join(`
`),x=[tx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==fa?"#define TONE_MAPPING":"",i.toneMapping!==fa?Se.tonemapping_pars_fragment:"",i.toneMapping!==fa?ZC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,WC("linearToOutputTexel",i.outputColorSpace),KC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vl).join(`
`)),d=fm(d),d=JS(d,i),d=jS(d,i),h=fm(h),h=JS(h,i),h=jS(h,i),d=$S(d),h=$S(h),i.isRawShaderMaterial!==!0&&(G=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===hS?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===hS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const j=G+M+d,D=G+x+h,U=ZS(l,l.VERTEX_SHADER,j),I=ZS(l,l.FRAGMENT_SHADER,D);l.attachShader(P,U),l.attachShader(P,I),i.index0AttributeName!==void 0?l.bindAttribLocation(P,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(P,0,"position"),l.linkProgram(P);function B(T){if(o.debug.checkShaderErrors){const R=l.getProgramInfoLog(P)||"",N=l.getShaderInfoLog(U)||"",H=l.getShaderInfoLog(I)||"",k=R.trim(),V=N.trim(),L=H.trim();let J=!0,Q=!0;if(l.getProgramParameter(P,l.LINK_STATUS)===!1)if(J=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,P,U,I);else{const pt=QS(l,U,"vertex"),st=QS(l,I,"fragment");Be("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(P,l.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+k+`
`+pt+`
`+st)}else k!==""?fe("WebGLProgram: Program Info Log:",k):(V===""||L==="")&&(Q=!1);Q&&(T.diagnostics={runnable:J,programLog:k,vertexShader:{log:V,prefix:M},fragmentShader:{log:L,prefix:x}})}l.deleteShader(U),l.deleteShader(I),b=new Qu(l,P),F=jC(l,P)}let b;this.getUniforms=function(){return b===void 0&&B(this),b};let F;this.getAttributes=function(){return F===void 0&&B(this),F};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(P,VC)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(P),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=XC++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=U,this.fragmentShader=I,this}let p3=0;class m3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new g3(e),i.set(e,r)),r}}class g3{constructor(e){this.id=p3++,this.code=e,this.usedTimes=0}}function _3(o){return o===us||o===ju||o===$u}function v3(o,e,i,r,l,u){const d=new hM,h=new m3,p=new Set,m=[],v=new Map,g=r.logarithmicDepthBuffer;let S=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return p.add(b),b===0?"uv":`uv${b}`}function P(b,F,Y,T,R,N){const H=T.fog,k=R.geometry,V=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?T.environment:null,L=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,J=e.get(b.envMap||V,L),Q=J&&J.mapping===sf?J.image.height:null,pt=E[b.type];b.precision!==null&&(S=r.getMaxPrecision(b.precision),S!==b.precision&&fe("WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const st=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,vt=st!==void 0?st.length:0;let Ct=0;k.morphAttributes.position!==void 0&&(Ct=1),k.morphAttributes.normal!==void 0&&(Ct=2),k.morphAttributes.color!==void 0&&(Ct=3);let O,rt,St,q;if(pt){const we=oa[pt];O=we.vertexShader,rt=we.fragmentShader}else{O=b.vertexShader,rt=b.fragmentShader;const we=h.getVertexShaderStage(b),he=h.getFragmentShaderStage(b);h.update(b,we,he),St=we.id,q=he.id}const nt=o.getRenderTarget(),Et=o.state.buffers.depth.getReversed(),wt=R.isInstancedMesh===!0,lt=R.isBatchedMesh===!0,Rt=!!b.map,ge=!!b.matcap,ne=!!J,re=!!b.aoMap,oe=!!b.lightMap,Ut=!!b.bumpMap&&b.wireframe===!1,Ht=!!b.normalMap,ke=!!b.displacementMap,mn=!!b.emissiveMap,Fe=!!b.metalnessMap,nn=!!b.roughnessMap,tt=b.anisotropy>0,rn=b.clearcoat>0,Ie=b.dispersion>0,z=b.retroreflectivity>0,y=b.iridescence>0,ot=b.sheen>0,ht=b.transmission>0,xt=tt&&!!b.anisotropyMap,Nt=rn&&!!b.clearcoatMap,Pt=rn&&!!b.clearcoatNormalMap,Mt=rn&&!!b.clearcoatRoughnessMap,At=y&&!!b.iridescenceMap,Ot=y&&!!b.iridescenceThicknessMap,ee=ot&&!!b.sheenColorMap,Gt=ot&&!!b.sheenRoughnessMap,Bt=!!b.specularMap,Yt=!!b.specularColorMap,se=!!b.specularIntensityMap,de=ht&&!!b.transmissionMap,$=ht&&!!b.thicknessMap,Lt=!!b.gradientMap,bt=!!b.alphaMap,It=b.alphaTest>0,Wt=!!b.alphaHash,Dt=!!b.extensions;let te=fa;b.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(te=o.toneMapping);const qt={shaderID:pt,shaderType:b.type,shaderName:b.name,vertexShader:O,fragmentShader:rt,defines:b.defines,customVertexShaderID:St,customFragmentShaderID:q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:lt,batchingColor:lt&&R._colorsTexture!==null,instancing:wt,instancingColor:wt&&R.instanceColor!==null,instancingMorph:wt&&R.morphTexture!==null,outputColorSpace:nt===null?o.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Ne.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Rt,matcap:ge,envMap:ne,envMapMode:ne&&J.mapping,envMapCubeUVHeight:Q,aoMap:re,lightMap:oe,bumpMap:Ut,normalMap:Ht,displacementMap:ke,emissiveMap:mn,normalMapObjectSpace:Ht&&b.normalMapType===$1,normalMapTangentSpace:Ht&&b.normalMapType===lm,packedNormalMap:Ht&&b.normalMapType===lm&&_3(b.normalMap.format),metalnessMap:Fe,roughnessMap:nn,anisotropy:tt,anisotropyMap:xt,clearcoat:rn,clearcoatMap:Nt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:Mt,dispersion:Ie,retroreflection:z,iridescence:y,iridescenceMap:At,iridescenceThicknessMap:Ot,sheen:ot,sheenColorMap:ee,sheenRoughnessMap:Gt,specularMap:Bt,specularColorMap:Yt,specularIntensityMap:se,transmission:ht,transmissionMap:de,thicknessMap:$,gradientMap:Lt,opaque:b.transparent===!1&&b.blending===Xl&&b.alphaToCoverage===!1,alphaMap:bt,alphaTest:It,alphaHash:Wt,combine:b.combine,mapUv:Rt&&w(b.map.channel),aoMapUv:re&&w(b.aoMap.channel),lightMapUv:oe&&w(b.lightMap.channel),bumpMapUv:Ut&&w(b.bumpMap.channel),normalMapUv:Ht&&w(b.normalMap.channel),displacementMapUv:ke&&w(b.displacementMap.channel),emissiveMapUv:mn&&w(b.emissiveMap.channel),metalnessMapUv:Fe&&w(b.metalnessMap.channel),roughnessMapUv:nn&&w(b.roughnessMap.channel),anisotropyMapUv:xt&&w(b.anisotropyMap.channel),clearcoatMapUv:Nt&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&w(b.sheenRoughnessMap.channel),specularMapUv:Bt&&w(b.specularMap.channel),specularColorMapUv:Yt&&w(b.specularColorMap.channel),specularIntensityMapUv:se&&w(b.specularIntensityMap.channel),transmissionMapUv:de&&w(b.transmissionMap.channel),thicknessMapUv:$&&w(b.thicknessMap.channel),alphaMapUv:bt&&w(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ht||tt),vertexNormals:!!k.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!k.attributes.uv&&(Rt||bt),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||k.attributes.normal===void 0&&Ht===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Et,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Ct,numSunLights:F.sun.length,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numSunLightShadows:F.sunShadowMap.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&Y.length>0,shadowMapType:o.shadowMap.type,toneMapping:te,decodeVideoTexture:Rt&&b.map.isVideoTexture===!0&&Ne.getTransfer(b.map.colorSpace)===Ze,decodeVideoTextureEmissive:mn&&b.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(b.emissiveMap.colorSpace)===Ze,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Va,flipSided:b.side===ai,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Dt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&b.extensions.multiDraw===!0||lt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return qt.vertexUv1s=p.has(1),qt.vertexUv2s=p.has(2),qt.vertexUv3s=p.has(3),p.clear(),qt}function M(b){const F=[];if(b.shaderID?F.push(b.shaderID):(F.push(b.customVertexShaderID),F.push(b.customFragmentShaderID)),b.defines!==void 0)for(const Y in b.defines)F.push(Y),F.push(b.defines[Y]);return b.isRawShaderMaterial===!1&&(x(F,b),G(F,b),F.push(o.outputColorSpace)),F.push(b.customProgramCacheKey),F.join()}function x(b,F){b.push(F.precision),b.push(F.outputColorSpace),b.push(F.envMapMode),b.push(F.envMapCubeUVHeight),b.push(F.mapUv),b.push(F.alphaMapUv),b.push(F.lightMapUv),b.push(F.aoMapUv),b.push(F.bumpMapUv),b.push(F.normalMapUv),b.push(F.displacementMapUv),b.push(F.emissiveMapUv),b.push(F.metalnessMapUv),b.push(F.roughnessMapUv),b.push(F.anisotropyMapUv),b.push(F.clearcoatMapUv),b.push(F.clearcoatNormalMapUv),b.push(F.clearcoatRoughnessMapUv),b.push(F.iridescenceMapUv),b.push(F.iridescenceThicknessMapUv),b.push(F.sheenColorMapUv),b.push(F.sheenRoughnessMapUv),b.push(F.specularMapUv),b.push(F.specularColorMapUv),b.push(F.specularIntensityMapUv),b.push(F.transmissionMapUv),b.push(F.thicknessMapUv),b.push(F.combine),b.push(F.fogExp2),b.push(F.sizeAttenuation),b.push(F.morphTargetsCount),b.push(F.morphAttributeCount),b.push(F.numSunLights),b.push(F.numDirLights),b.push(F.numPointLights),b.push(F.numSpotLights),b.push(F.numSpotLightMaps),b.push(F.numHemiLights),b.push(F.numRectAreaLights),b.push(F.numSunLightShadows),b.push(F.numDirLightShadows),b.push(F.numPointLightShadows),b.push(F.numSpotLightShadows),b.push(F.numSpotLightShadowsWithMaps),b.push(F.numLightProbes),b.push(F.shadowMapType),b.push(F.toneMapping),b.push(F.numClippingPlanes),b.push(F.numClipIntersection),b.push(F.depthPacking)}function G(b,F){d.disableAll(),F.instancing&&d.enable(0),F.instancingColor&&d.enable(1),F.instancingMorph&&d.enable(2),F.matcap&&d.enable(3),F.envMap&&d.enable(4),F.normalMapObjectSpace&&d.enable(5),F.normalMapTangentSpace&&d.enable(6),F.clearcoat&&d.enable(7),F.iridescence&&d.enable(8),F.alphaTest&&d.enable(9),F.vertexColors&&d.enable(10),F.vertexAlphas&&d.enable(11),F.vertexUv1s&&d.enable(12),F.vertexUv2s&&d.enable(13),F.vertexUv3s&&d.enable(14),F.vertexTangents&&d.enable(15),F.anisotropy&&d.enable(16),F.alphaHash&&d.enable(17),F.batching&&d.enable(18),F.dispersion&&d.enable(19),F.retroreflection&&d.enable(24),F.batchingColor&&d.enable(20),F.gradientMap&&d.enable(21),F.packedNormalMap&&d.enable(22),F.vertexNormals&&d.enable(23),b.push(d.mask),d.disableAll(),F.fog&&d.enable(0),F.useFog&&d.enable(1),F.flatShading&&d.enable(2),F.logarithmicDepthBuffer&&d.enable(3),F.reversedDepthBuffer&&d.enable(4),F.skinning&&d.enable(5),F.morphTargets&&d.enable(6),F.morphNormals&&d.enable(7),F.morphColors&&d.enable(8),F.premultipliedAlpha&&d.enable(9),F.shadowMapEnabled&&d.enable(10),F.doubleSided&&d.enable(11),F.flipSided&&d.enable(12),F.useDepthPacking&&d.enable(13),F.dithering&&d.enable(14),F.transmission&&d.enable(15),F.sheen&&d.enable(16),F.opaque&&d.enable(17),F.pointsUvs&&d.enable(18),F.decodeVideoTexture&&d.enable(19),F.decodeVideoTextureEmissive&&d.enable(20),F.alphaToCoverage&&d.enable(21),F.numLightProbeGrids>0&&d.enable(22),F.hasPositionAttribute&&d.enable(23),b.push(d.mask)}function j(b){const F=E[b.type];let Y;if(F){const T=oa[F];Y=FT.clone(T.uniforms)}else Y=b.uniforms;return Y}function D(b,F){let Y=v.get(F);return Y!==void 0?++Y.usedTimes:(Y=new h3(o,F,b,l),m.push(Y),v.set(F,Y)),Y}function U(b){if(--b.usedTimes===0){const F=m.indexOf(b);m[F]=m[m.length-1],m.pop(),v.delete(b.cacheKey),b.destroy()}}function I(b){h.remove(b)}function B(){h.dispose()}return{getParameters:P,getProgramCacheKey:M,getUniforms:j,acquireProgram:D,releaseProgram:U,releaseShaderCache:I,programs:m,dispose:B}}function S3(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,p){o.get(d)[h]=p}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function x3(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function ex(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function nx(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(S){let E=0;return S.isInstancedMesh&&(E+=2),S.isSkinnedMesh&&(E+=1),E}function h(S,E,w,P,M,x){let G=o[e];return G===void 0?(G={id:S.id,object:S,geometry:E,material:w,materialVariant:d(S),groupOrder:P,renderOrder:S.renderOrder,z:M,group:x},o[e]=G):(G.id=S.id,G.object=S,G.geometry=E,G.material=w,G.materialVariant=d(S),G.groupOrder=P,G.renderOrder=S.renderOrder,G.z=M,G.group=x),e++,G}function p(S,E,w,P,M,x,G){G.reversedDepth===!0&&(M=-M);const j=h(S,E,w,P,M,x);w.transmission>0?r.push(j):w.transparent===!0?l.push(j):i.push(j)}function m(S,E,w,P,M,x){const G=h(S,E,w,P,M,x);w.transmission>0?r.unshift(G):w.transparent===!0?l.unshift(G):i.unshift(G)}function v(S,E){i.length>1&&i.sort(S||x3),r.length>1&&r.sort(E||ex),l.length>1&&l.sort(E||ex)}function g(){for(let S=e,E=o.length;S<E;S++){const w=o[S];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:p,unshift:m,finish:g,sort:v}}function M3(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new nx,o.set(r,[d])):l>=u.length?(d=new nx,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function y3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new K,color:new Oe};break;case"SpotLight":i={position:new K,direction:new K,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":i={color:new Oe,position:new K,halfWidth:new K,halfHeight:new K};break}return o[e.id]=i,i}}}function E3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let T3=0;function b3(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function A3(o){const e=new y3,i=E3(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new K);const l=new K,u=new Je,d=new Je;function h(m){let v=0,g=0,S=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let E=0,w=0,P=0,M=0,x=0,G=0,j=0,D=0,U=0,I=0,B=0,b=0,F=0,Y=0;m.sort(b3);for(let R=0,N=m.length;R<N;R++){const H=m[R],k=H.color,V=H.intensity,L=H.distance;let J=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===us?J=H.shadow.map.texture:J=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=k.r*V,g+=k.g*V,S+=k.b*V;else if(H.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(H.sh.coefficients[Q],V);Y++}else if(H.isSunLight){const Q=e.get(H);if(Q.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const pt=H.shadow,st=i.get(H);st.shadowIntensity=pt.intensity,st.shadowBias=pt.bias,st.shadowNormalBias=pt.normalBias,st.shadowRadius=pt.radius,st.shadowMapSize.copy(pt.mapSize).multiply(pt.getFrameExtents()),r.sunShadow[w]=st,r.sunShadowMap[w]=J;const vt=pt.getViewportCount();for(let Ct=0;Ct<vt;Ct++)r.sunShadowMatrix[P+Ct]=pt.getMatrix(Ct),r.sunShadowCascade[P+Ct]=pt._cascadeData[Ct];P+=vt,w++}r.sun[E]=Q,E++}else if(H.isDirectionalLight){const Q=e.get(H);if(Q.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const pt=H.shadow,st=i.get(H);st.shadowIntensity=pt.intensity,st.shadowBias=pt.bias,st.shadowNormalBias=pt.normalBias,st.shadowRadius=pt.radius,st.shadowMapSize=pt.mapSize,r.directionalShadow[M]=st,r.directionalShadowMap[M]=J,r.directionalShadowMatrix[M]=H.shadow.matrix,U++}r.directional[M]=Q,M++}else if(H.isSpotLight){const Q=e.get(H);Q.position.setFromMatrixPosition(H.matrixWorld),Q.color.copy(k).multiplyScalar(V),Q.distance=L,Q.coneCos=Math.cos(H.angle),Q.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Q.decay=H.decay,r.spot[G]=Q;const pt=H.shadow;if(H.map&&(r.spotLightMap[b]=H.map,b++,pt.updateMatrices(H),H.castShadow&&F++),r.spotLightMatrix[G]=pt.matrix,H.castShadow){const st=i.get(H);st.shadowIntensity=pt.intensity,st.shadowBias=pt.bias,st.shadowNormalBias=pt.normalBias,st.shadowRadius=pt.radius,st.shadowMapSize=pt.mapSize,r.spotShadow[G]=st,r.spotShadowMap[G]=J,B++}G++}else if(H.isRectAreaLight){const Q=e.get(H);Q.color.copy(k).multiplyScalar(V),Q.halfWidth.set(H.width*.5,0,0),Q.halfHeight.set(0,H.height*.5,0),r.rectArea[j]=Q,j++}else if(H.isPointLight){const Q=e.get(H);if(Q.color.copy(H.color).multiplyScalar(H.intensity),Q.distance=H.distance,Q.decay=H.decay,H.castShadow){const pt=H.shadow,st=i.get(H);st.shadowIntensity=pt.intensity,st.shadowBias=pt.bias,st.shadowNormalBias=pt.normalBias,st.shadowRadius=pt.radius,st.shadowMapSize=pt.mapSize,st.shadowCameraNear=pt.camera.near,st.shadowCameraFar=pt.camera.far,r.pointShadow[x]=st,r.pointShadowMap[x]=J,r.pointShadowMatrix[x]=H.shadow.matrix,I++}r.point[x]=Q,x++}else if(H.isHemisphereLight){const Q=e.get(H);Q.skyColor.copy(H.color).multiplyScalar(V),Q.groundColor.copy(H.groundColor).multiplyScalar(V),r.hemi[D]=Q,D++}}j>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=kt.LTC_FLOAT_1,r.rectAreaLTC2=kt.LTC_FLOAT_2):(r.rectAreaLTC1=kt.LTC_HALF_1,r.rectAreaLTC2=kt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=S;const T=r.hash;(T.sunLength!==E||T.directionalLength!==M||T.pointLength!==x||T.spotLength!==G||T.rectAreaLength!==j||T.hemiLength!==D||T.numSunShadows!==w||T.numDirectionalShadows!==U||T.numPointShadows!==I||T.numSpotShadows!==B||T.numSpotMaps!==b||T.numLightProbes!==Y)&&(r.sun.length=E,r.directional.length=M,r.spot.length=G,r.rectArea.length=j,r.point.length=x,r.hemi.length=D,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=P,r.sunShadowCascade.length=P,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.directionalShadowMatrix.length=U,r.pointShadow.length=I,r.pointShadowMap.length=I,r.pointShadowMatrix.length=I,r.spotShadow.length=B,r.spotShadowMap.length=B,r.spotLightMatrix.length=B+b-F,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=Y,T.sunLength=E,T.directionalLength=M,T.pointLength=x,T.spotLength=G,T.rectAreaLength=j,T.hemiLength=D,T.numSunShadows=w,T.numDirectionalShadows=U,T.numPointShadows=I,T.numSpotShadows=B,T.numSpotMaps=b,T.numLightProbes=Y,r.version=T3++)}function p(m,v){let g=0,S=0,E=0,w=0,P=0,M=0;const x=v.matrixWorldInverse;for(let G=0,j=m.length;G<j;G++){const D=m[G];if(D.isSunLight){const U=r.sun[g];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(x),g++}else if(D.isDirectionalLight){const U=r.directional[S];U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),S++}else if(D.isSpotLight){const U=r.spot[w];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),w++}else if(D.isRectAreaLight){const U=r.rectArea[P];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(x),d.identity(),u.copy(D.matrixWorld),u.premultiply(x),d.extractRotation(u),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),P++}else if(D.isPointLight){const U=r.point[E];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(x),E++}else if(D.isHemisphereLight){const U=r.hemi[M];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(x),M++}}}return{setup:h,setupView:p,state:r}}function ix(o){const e=new A3(o),i=[],r=[],l=[];function u(S){g.camera=S,i.length=0,r.length=0,l.length=0}function d(S){i.push(S)}function h(S){r.push(S)}function p(S){l.push(S)}function m(){e.setup(i)}function v(S){e.setupView(i,S)}const g={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:g,setupLights:m,setupLightsView:v,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function R3(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new ix(o),e.set(l,[h])):u>=d.length?(h=new ix(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const C3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w3=`uniform sampler2D shadow_pass;
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
}`,D3=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],N3=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],ax=new Je,Bl=new K,vp=new K;function U3(o,e,i){let r=new Hm;const l=new Pe,u=new Pe,d=new on,h=new VT,p=new XT,m={},v=i.maxTextureSize,g={[vi]:ai,[ai]:vi,[Va]:Va},S=new pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:C3,fragmentShader:w3}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const w=new Jn;w.setAttribute("position",new Wa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new pn(w,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qu;let x=this.type;this.render=function(I,B,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;this.type===D1&&(fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qu);const F=o.getRenderTarget(),Y=o.getActiveCubeFace(),T=o.getActiveMipmapLevel(),R=o.state;R.setBlending(ka),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const N=x!==this.type;N&&B.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(k=>k.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,k=I.length;H<k;H++){const V=I[H],L=V.shadow;if(L===void 0){fe("WebGLShadowMap:",V,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;l.copy(L.mapSize);const J=L.getFrameExtents();l.multiply(J),u.copy(L.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/J.x),l.x=u.x*J.x,L.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/J.y),l.y=u.y*J.y,L.mapSize.y=u.y));const Q=o.state.buffers.depth.getReversed();if(L.camera._reversedDepth=Q,L.map===null||N===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===Gl){if(V.isPointLight){fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new Xi(l.x,l.y,{format:us,type:ha,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),L.map.texture.name=V.name+".shadowMap",L.map.depthTexture=new Zl(l.x,l.y,ca),L.map.depthTexture.name=V.name+".shadowMapDepth",L.map.depthTexture.format=Ya,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=In,L.map.depthTexture.magFilter=In}else V.isPointLight?(L.map=new EM(l.x),L.map.depthTexture=new IT(l.x,da)):(L.map=new Xi(l.x,l.y),L.map.depthTexture=new Zl(l.x,l.y,da)),L.map.depthTexture.name=V.name+".shadowMap",L.map.depthTexture.format=Ya,this.type===qu?(L.map.depthTexture.compareFunction=Q?zm:Im,L.map.depthTexture.minFilter=Gn,L.map.depthTexture.magFilter=Gn):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=In,L.map.depthTexture.magFilter=In);L.camera.updateProjectionMatrix()}L.map.isWebGLCubeRenderTarget!==!0&&(L.map.width!==l.x||L.map.height!==l.y)&&L.map.setSize(l.x,l.y);const pt=L.map.isWebGLCubeRenderTarget?6:L.getViewportCount();V.isPointLight!==!0&&L.updateMatrices(V,b);for(let st=0;st<pt;st++){const vt=L.getCamera(st);if(V.isPointLight){const Ct=L.camera,O=L.matrix,rt=V.distance||Ct.far;rt!==Ct.far&&(Ct.far=rt,Ct.updateProjectionMatrix()),Bl.setFromMatrixPosition(V.matrixWorld),Ct.position.copy(Bl),vp.copy(Ct.position),vp.add(D3[st]),Ct.up.copy(N3[st]),Ct.lookAt(vp),Ct.updateMatrixWorld(),O.makeTranslation(-Bl.x,-Bl.y,-Bl.z),ax.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),L._frustum.setFromProjectionMatrix(ax,Ct.coordinateSystem,Ct.reversedDepth)}if(L.map.isWebGLCubeRenderTarget)o.setRenderTarget(L.map,st),o.clear();else{st===0&&(o.setRenderTarget(L.map),o.clear());const Ct=L.getViewport(st);d.set(u.x*Ct.x,u.y*Ct.y,u.x*Ct.z,u.y*Ct.w),R.viewport(d)}r=L.getFrustum(st),D(B,b,vt,V,this.type)}L.isPointLightShadow!==!0&&this.type===Gl&&G(L,b),L.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(F,Y,T)};function G(I,B){const b=e.update(P);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,E.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),I.mapPass===null?I.mapPass=new Xi(l.x,l.y,{format:us,type:ha}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),S.uniforms.shadow_pass.value=I.map.depthTexture,S.uniforms.resolution.value.set(I.map.width,I.map.height),S.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(B,null,b,S,P,null),E.uniforms.shadow_pass.value=I.mapPass.texture,E.uniforms.resolution.value.set(I.map.width,I.map.height),E.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(B,null,b,E,P,null)}function j(I,B,b,F){let Y=null;const T=b.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(T!==void 0)Y=T;else if(Y=b.isPointLight===!0?p:h,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const R=Y.uuid,N=B.uuid;let H=m[R];H===void 0&&(H={},m[R]=H);let k=H[N];k===void 0&&(k=Y.clone(),H[N]=k,B.addEventListener("dispose",U)),Y=k}if(Y.visible=B.visible,Y.wireframe=B.wireframe,F===Gl?Y.side=B.shadowSide!==null?B.shadowSide:B.side:Y.side=B.shadowSide!==null?B.shadowSide:g[B.side],Y.alphaMap=B.alphaMap,Y.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,Y.map=B.map,Y.clipShadows=B.clipShadows,Y.clippingPlanes=B.clippingPlanes,Y.clipIntersection=B.clipIntersection,Y.displacementMap=B.displacementMap,Y.displacementScale=B.displacementScale,Y.displacementBias=B.displacementBias,Y.wireframeLinewidth=B.wireframeLinewidth,Y.linewidth=B.linewidth,b.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const R=o.properties.get(Y);R.light=b}return Y}function D(I,B,b,F,Y){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&Y===Gl)&&(!I.frustumCulled||I.intersectsFrustum(r))){I.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,I.matrixWorld);const N=e.update(I),H=I.material;if(Array.isArray(H)){const k=N.groups;for(let V=0,L=k.length;V<L;V++){const J=k[V],Q=H[J.materialIndex];if(Q&&Q.visible){const pt=j(I,Q,F,Y);I.onBeforeShadow(o,I,B,b,N,pt,J),o.renderBufferDirect(b,null,N,pt,I,J),I.onAfterShadow(o,I,B,b,N,pt,J)}}}else if(H.visible){const k=j(I,H,F,Y);I.onBeforeShadow(o,I,B,b,N,k,null),o.renderBufferDirect(b,null,N,k,I,null),I.onAfterShadow(o,I,B,b,N,k,null)}}const R=I.children;for(let N=0,H=R.length;N<H;N++)D(R[N],B,b,F,Y)}function U(I){I.target.removeEventListener("dispose",U);for(const b in m){const F=m[b],Y=I.target.uuid;Y in F&&(F[Y].dispose(),delete F[Y])}}}function L3(o,e){function i(){let $=!1;const Lt=new on;let bt=null;const It=new on(0,0,0,0);return{setMask:function(Wt){bt!==Wt&&!$&&(o.colorMask(Wt,Wt,Wt,Wt),bt=Wt)},setLocked:function(Wt){$=Wt},setClear:function(Wt,Dt,te,qt,we){we===!0&&(Wt*=qt,Dt*=qt,te*=qt),Lt.set(Wt,Dt,te,qt),It.equals(Lt)===!1&&(o.clearColor(Wt,Dt,te,qt),It.copy(Lt))},reset:function(){$=!1,bt=null,It.set(-1,0,0,0)}}}function r(){let $=!1,Lt=!1,bt=null,It=null,Wt=null;return{setReversed:function(Dt){if(Lt!==Dt){const te=e.get("EXT_clip_control");Dt?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT),Lt=Dt;const qt=Wt;Wt=null,this.setClear(qt)}},getReversed:function(){return Lt},setTest:function(Dt){Dt?nt(o.DEPTH_TEST):Et(o.DEPTH_TEST)},setMask:function(Dt){bt!==Dt&&!$&&(o.depthMask(Dt),bt=Dt)},setFunc:function(Dt){if(Lt&&(Dt=fT[Dt]),It!==Dt){switch(Dt){case Ep:o.depthFunc(o.NEVER);break;case Tp:o.depthFunc(o.ALWAYS);break;case bp:o.depthFunc(o.LESS);break;case kl:o.depthFunc(o.LEQUAL);break;case Ap:o.depthFunc(o.EQUAL);break;case Rp:o.depthFunc(o.GEQUAL);break;case Cp:o.depthFunc(o.GREATER);break;case wp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}It=Dt}},setLocked:function(Dt){$=Dt},setClear:function(Dt){Wt!==Dt&&(Wt=Dt,Lt&&(Dt=1-Dt),o.clearDepth(Dt))},reset:function(){$=!1,bt=null,It=null,Wt=null,Lt=!1}}}function l(){let $=!1,Lt=null,bt=null,It=null,Wt=null,Dt=null,te=null,qt=null,we=null;return{setTest:function(he){$||(he?nt(o.STENCIL_TEST):Et(o.STENCIL_TEST))},setMask:function(he){Lt!==he&&!$&&(o.stencilMask(he),Lt=he)},setFunc:function(he,ri,Si){(bt!==he||It!==ri||Wt!==Si)&&(o.stencilFunc(he,ri,Si),bt=he,It=ri,Wt=Si)},setOp:function(he,ri,Si){(Dt!==he||te!==ri||qt!==Si)&&(o.stencilOp(he,ri,Si),Dt=he,te=ri,qt=Si)},setLocked:function(he){$=he},setClear:function(he){we!==he&&(o.clearStencil(he),we=he)},reset:function(){$=!1,Lt=null,bt=null,It=null,Wt=null,Dt=null,te=null,qt=null,we=null}}}const u=new i,d=new r,h=new l,p=new WeakMap,m=new WeakMap;let v={},g={},S={},E=new WeakMap,w=[],P=null,M=!1,x=null,G=null,j=null,D=null,U=null,I=null,B=null,b=new Oe(0,0,0),F=0,Y=!1,T=null,R=null,N=null,H=null,k=null;const V=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,J=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Q)[1]),L=J>=1):Q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),L=J>=2);let pt=null,st={};const vt=o.getParameter(o.SCISSOR_BOX),Ct=o.getParameter(o.VIEWPORT),O=new on().fromArray(vt),rt=new on().fromArray(Ct);function St($,Lt,bt,It){const Wt=new Uint8Array(4),Dt=o.createTexture();o.bindTexture($,Dt),o.texParameteri($,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri($,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let te=0;te<bt;te++)$===o.TEXTURE_3D||$===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,It,0,o.RGBA,o.UNSIGNED_BYTE,Wt):o.texImage2D(Lt+te,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Wt);return Dt}const q={};q[o.TEXTURE_2D]=St(o.TEXTURE_2D,o.TEXTURE_2D,1),q[o.TEXTURE_CUBE_MAP]=St(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[o.TEXTURE_2D_ARRAY]=St(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),q[o.TEXTURE_3D]=St(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),nt(o.DEPTH_TEST),d.setFunc(kl),Ut(!1),Ht(cS),nt(o.CULL_FACE),re(ka);function nt($){v[$]!==!0&&(o.enable($),v[$]=!0)}function Et($){v[$]!==!1&&(o.disable($),v[$]=!1)}function wt($,Lt){return S[$]!==Lt?(o.bindFramebuffer($,Lt),S[$]=Lt,$===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Lt),$===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function lt($,Lt){let bt=w,It=!1;if($){bt=E.get(Lt),bt===void 0&&(bt=[],E.set(Lt,bt));const Wt=$.textures;if(bt.length!==Wt.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,te=Wt.length;Dt<te;Dt++)bt[Dt]=o.COLOR_ATTACHMENT0+Dt;bt.length=Wt.length,It=!0}}else bt[0]!==o.BACK&&(bt[0]=o.BACK,It=!0);It&&o.drawBuffers(bt)}function Rt($){return P!==$?(o.useProgram($),P=$,!0):!1}const ge={[mo]:o.FUNC_ADD,[U1]:o.FUNC_SUBTRACT,[L1]:o.FUNC_REVERSE_SUBTRACT};ge[O1]=o.MIN,ge[P1]=o.MAX;const ne={[I1]:o.ZERO,[z1]:o.ONE,[F1]:o.SRC_COLOR,[Yx]:o.SRC_ALPHA,[k1]:o.SRC_ALPHA_SATURATE,[V1]:o.DST_COLOR,[H1]:o.DST_ALPHA,[B1]:o.ONE_MINUS_SRC_COLOR,[Zx]:o.ONE_MINUS_SRC_ALPHA,[X1]:o.ONE_MINUS_DST_COLOR,[G1]:o.ONE_MINUS_DST_ALPHA,[q1]:o.CONSTANT_COLOR,[W1]:o.ONE_MINUS_CONSTANT_COLOR,[Y1]:o.CONSTANT_ALPHA,[Z1]:o.ONE_MINUS_CONSTANT_ALPHA};function re($,Lt,bt,It,Wt,Dt,te,qt,we,he){if($===ka){M===!0&&(Et(o.BLEND),M=!1);return}if(M===!1&&(nt(o.BLEND),M=!0),$!==N1){if($!==x||he!==Y){if((G!==mo||U!==mo)&&(o.blendEquation(o.FUNC_ADD),G=mo,U=mo),he)switch($){case Xl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case uS:o.blendFunc(o.ONE,o.ONE);break;case fS:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case dS:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Be("WebGLState: Invalid blending: ",$);break}else switch($){case Xl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case uS:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case fS:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dS:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",$);break}j=null,D=null,I=null,B=null,b.set(0,0,0),F=0,x=$,Y=he}return}Wt=Wt||Lt,Dt=Dt||bt,te=te||It,(Lt!==G||Wt!==U)&&(o.blendEquationSeparate(ge[Lt],ge[Wt]),G=Lt,U=Wt),(bt!==j||It!==D||Dt!==I||te!==B)&&(o.blendFuncSeparate(ne[bt],ne[It],ne[Dt],ne[te]),j=bt,D=It,I=Dt,B=te),(qt.equals(b)===!1||we!==F)&&(o.blendColor(qt.r,qt.g,qt.b,we),b.copy(qt),F=we),x=$,Y=!1}function oe($,Lt){$.side===Va?Et(o.CULL_FACE):nt(o.CULL_FACE);let bt=$.side===ai;Lt&&(bt=!bt),Ut(bt),$.blending===Xl&&$.transparent===!1?re(ka):re($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),d.setFunc($.depthFunc),d.setTest($.depthTest),d.setMask($.depthWrite),u.setMask($.colorWrite);const It=$.stencilWrite;h.setTest(It),It&&(h.setMask($.stencilWriteMask),h.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),h.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),mn($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?nt(o.SAMPLE_ALPHA_TO_COVERAGE):Et(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ut($){T!==$&&($?o.frontFace(o.CW):o.frontFace(o.CCW),T=$)}function Ht($){$!==C1?(nt(o.CULL_FACE),$!==R&&($===cS?o.cullFace(o.BACK):$===w1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Et(o.CULL_FACE),R=$}function ke($){$!==N&&(L&&o.lineWidth($),N=$)}function mn($,Lt,bt){$?(nt(o.POLYGON_OFFSET_FILL),(H!==Lt||k!==bt)&&(H=Lt,k=bt,d.getReversed()&&(Lt=-Lt),o.polygonOffset(Lt,bt))):Et(o.POLYGON_OFFSET_FILL)}function Fe($){$?nt(o.SCISSOR_TEST):Et(o.SCISSOR_TEST)}function nn($){$===void 0&&($=o.TEXTURE0+V-1),pt!==$&&(o.activeTexture($),pt=$)}function tt($,Lt,bt){bt===void 0&&(pt===null?bt=o.TEXTURE0+V-1:bt=pt);let It=st[bt];It===void 0&&(It={type:void 0,texture:void 0},st[bt]=It),(It.type!==$||It.texture!==Lt)&&(pt!==bt&&(o.activeTexture(bt),pt=bt),o.bindTexture($,Lt||q[$]),It.type=$,It.texture=Lt)}function rn(){const $=st[pt];$!==void 0&&$.type!==void 0&&(o.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function Ie(){try{o.compressedTexImage2D(...arguments)}catch($){Be("WebGLState:",$)}}function z(){try{o.compressedTexImage3D(...arguments)}catch($){Be("WebGLState:",$)}}function y(){try{o.texSubImage2D(...arguments)}catch($){Be("WebGLState:",$)}}function ot(){try{o.texSubImage3D(...arguments)}catch($){Be("WebGLState:",$)}}function ht(){try{o.compressedTexSubImage2D(...arguments)}catch($){Be("WebGLState:",$)}}function xt(){try{o.compressedTexSubImage3D(...arguments)}catch($){Be("WebGLState:",$)}}function Nt(){try{o.texStorage2D(...arguments)}catch($){Be("WebGLState:",$)}}function Pt(){try{o.texStorage3D(...arguments)}catch($){Be("WebGLState:",$)}}function Mt(){try{o.texImage2D(...arguments)}catch($){Be("WebGLState:",$)}}function At(){try{o.texImage3D(...arguments)}catch($){Be("WebGLState:",$)}}function Ot($){return g[$]!==void 0?g[$]:o.getParameter($)}function ee($,Lt){g[$]!==Lt&&(o.pixelStorei($,Lt),g[$]=Lt)}function Gt($){O.equals($)===!1&&(o.scissor($.x,$.y,$.z,$.w),O.copy($))}function Bt($){rt.equals($)===!1&&(o.viewport($.x,$.y,$.z,$.w),rt.copy($))}function Yt($,Lt){let bt=m.get(Lt);bt===void 0&&(bt=new WeakMap,m.set(Lt,bt));let It=bt.get($);It===void 0&&(It=o.getUniformBlockIndex(Lt,$.name),bt.set($,It))}function se($,Lt){const It=m.get(Lt).get($);p.get(Lt)!==It&&(o.uniformBlockBinding(Lt,It,$.__bindingPointIndex),p.set(Lt,It))}function de(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),v={},g={},pt=null,st={},S={},E=new WeakMap,w=[],P=null,M=!1,x=null,G=null,j=null,D=null,U=null,I=null,B=null,b=new Oe(0,0,0),F=0,Y=!1,T=null,R=null,N=null,H=null,k=null,O.set(0,0,o.canvas.width,o.canvas.height),rt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:nt,disable:Et,bindFramebuffer:wt,drawBuffers:lt,useProgram:Rt,setBlending:re,setMaterial:oe,setFlipSided:Ut,setCullFace:Ht,setLineWidth:ke,setPolygonOffset:mn,setScissorTest:Fe,activeTexture:nn,bindTexture:tt,unbindTexture:rn,compressedTexImage2D:Ie,compressedTexImage3D:z,texImage2D:Mt,texImage3D:At,pixelStorei:ee,getParameter:Ot,updateUBOMapping:Yt,uniformBlockBinding:se,texStorage2D:Nt,texStorage3D:Pt,texSubImage2D:y,texSubImage3D:ot,compressedTexSubImage2D:ht,compressedTexSubImage3D:xt,scissor:Gt,viewport:Bt,reset:de}}function O3(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Pe,v=new WeakMap,g=new Set;let S;const E=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(z,y){return w?new OffscreenCanvas(z,y):nf("canvas")}function M(z,y,ot){let ht=1;const xt=Ie(z);if((xt.width>ot||xt.height>ot)&&(ht=ot/Math.max(xt.width,xt.height)),ht<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const Nt=Math.floor(ht*xt.width),Pt=Math.floor(ht*xt.height);S===void 0&&(S=P(Nt,Pt));const Mt=y?P(Nt,Pt):S;return Mt.width=Nt,Mt.height=Pt,Mt.getContext("2d").drawImage(z,0,0,Nt,Pt),fe("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+Nt+"x"+Pt+")."),Mt}else return"data"in z&&fe("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),z;return z}function x(z){return z.generateMipmaps}function G(z){o.generateMipmap(z)}function j(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(z,y,ot,ht,xt,Nt=!1){if(z!==null){if(o[z]!==void 0)return o[z];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Pt;ht&&(Pt=e.get("EXT_texture_norm16"),Pt||fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Mt=y;if(y===o.RED&&(ot===o.FLOAT&&(Mt=o.R32F),ot===o.HALF_FLOAT&&(Mt=o.R16F),ot===o.UNSIGNED_BYTE&&(Mt=o.R8),ot===o.UNSIGNED_SHORT&&Pt&&(Mt=Pt.R16_EXT),ot===o.SHORT&&Pt&&(Mt=Pt.R16_SNORM_EXT)),y===o.RED_INTEGER&&(ot===o.UNSIGNED_BYTE&&(Mt=o.R8UI),ot===o.UNSIGNED_SHORT&&(Mt=o.R16UI),ot===o.UNSIGNED_INT&&(Mt=o.R32UI),ot===o.BYTE&&(Mt=o.R8I),ot===o.SHORT&&(Mt=o.R16I),ot===o.INT&&(Mt=o.R32I)),y===o.RG&&(ot===o.FLOAT&&(Mt=o.RG32F),ot===o.HALF_FLOAT&&(Mt=o.RG16F),ot===o.UNSIGNED_BYTE&&(Mt=o.RG8),ot===o.UNSIGNED_SHORT&&Pt&&(Mt=Pt.RG16_EXT),ot===o.SHORT&&Pt&&(Mt=Pt.RG16_SNORM_EXT)),y===o.RG_INTEGER&&(ot===o.UNSIGNED_BYTE&&(Mt=o.RG8UI),ot===o.UNSIGNED_SHORT&&(Mt=o.RG16UI),ot===o.UNSIGNED_INT&&(Mt=o.RG32UI),ot===o.BYTE&&(Mt=o.RG8I),ot===o.SHORT&&(Mt=o.RG16I),ot===o.INT&&(Mt=o.RG32I)),y===o.RGB_INTEGER&&(ot===o.UNSIGNED_BYTE&&(Mt=o.RGB8UI),ot===o.UNSIGNED_SHORT&&(Mt=o.RGB16UI),ot===o.UNSIGNED_INT&&(Mt=o.RGB32UI),ot===o.BYTE&&(Mt=o.RGB8I),ot===o.SHORT&&(Mt=o.RGB16I),ot===o.INT&&(Mt=o.RGB32I)),y===o.RGBA_INTEGER&&(ot===o.UNSIGNED_BYTE&&(Mt=o.RGBA8UI),ot===o.UNSIGNED_SHORT&&(Mt=o.RGBA16UI),ot===o.UNSIGNED_INT&&(Mt=o.RGBA32UI),ot===o.BYTE&&(Mt=o.RGBA8I),ot===o.SHORT&&(Mt=o.RGBA16I),ot===o.INT&&(Mt=o.RGBA32I)),y===o.RGB&&(ot===o.UNSIGNED_SHORT&&Pt&&(Mt=Pt.RGB16_EXT),ot===o.SHORT&&Pt&&(Mt=Pt.RGB16_SNORM_EXT),ot===o.UNSIGNED_INT_5_9_9_9_REV&&(Mt=o.RGB9_E5),ot===o.UNSIGNED_INT_10F_11F_11F_REV&&(Mt=o.R11F_G11F_B10F)),y===o.RGBA){const At=Nt?ef:Ne.getTransfer(xt);ot===o.FLOAT&&(Mt=o.RGBA32F),ot===o.HALF_FLOAT&&(Mt=o.RGBA16F),ot===o.UNSIGNED_BYTE&&(Mt=At===Ze?o.SRGB8_ALPHA8:o.RGBA8),ot===o.UNSIGNED_SHORT&&Pt&&(Mt=Pt.RGBA16_EXT),ot===o.SHORT&&Pt&&(Mt=Pt.RGBA16_SNORM_EXT),ot===o.UNSIGNED_SHORT_4_4_4_4&&(Mt=o.RGBA4),ot===o.UNSIGNED_SHORT_5_5_5_1&&(Mt=o.RGB5_A1)}return(Mt===o.R16F||Mt===o.R32F||Mt===o.RG16F||Mt===o.RG32F||Mt===o.RGBA16F||Mt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Mt}function U(z,y){let ot;return z?y===null||y===da||y===Wl?ot=o.DEPTH24_STENCIL8:y===ca?ot=o.DEPTH32F_STENCIL8:y===ql&&(ot=o.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===da||y===Wl?ot=o.DEPTH_COMPONENT24:y===ca?ot=o.DEPTH_COMPONENT32F:y===ql&&(ot=o.DEPTH_COMPONENT16),ot}function I(z,y){return x(z)===!0||z.isFramebufferTexture&&z.minFilter!==In&&z.minFilter!==Gn?Math.log2(Math.max(y.width,y.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?y.mipmaps.length:1}function B(z){const y=z.target;y.removeEventListener("dispose",B),F(y),y.isVideoTexture&&v.delete(y),y.isHTMLTexture&&g.delete(y)}function b(z){const y=z.target;y.removeEventListener("dispose",b),T(y)}function F(z){const y=r.get(z);if(y.__webglInit===void 0)return;const ot=z.source,ht=E.get(ot);if(ht){const xt=ht[y.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&Y(z),Object.keys(ht).length===0&&E.delete(ot)}r.remove(z)}function Y(z){const y=r.get(z);o.deleteTexture(y.__webglTexture);const ot=z.source,ht=E.get(ot);delete ht[y.__cacheKey],d.memory.textures--}function T(z){const y=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(y.__webglFramebuffer[ht]))for(let xt=0;xt<y.__webglFramebuffer[ht].length;xt++)o.deleteFramebuffer(y.__webglFramebuffer[ht][xt]);else o.deleteFramebuffer(y.__webglFramebuffer[ht]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[ht])}else{if(Array.isArray(y.__webglFramebuffer))for(let ht=0;ht<y.__webglFramebuffer.length;ht++)o.deleteFramebuffer(y.__webglFramebuffer[ht]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ht=0;ht<y.__webglColorRenderbuffer.length;ht++)y.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[ht]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const ot=z.textures;for(let ht=0,xt=ot.length;ht<xt;ht++){const Nt=r.get(ot[ht]);Nt.__webglTexture&&(o.deleteTexture(Nt.__webglTexture),d.memory.textures--),r.remove(ot[ht])}r.remove(z)}let R=0;function N(){R=0}function H(){return R}function k(z){R=z}function V(){const z=R;return z>=l.maxTextures&&fe("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+l.maxTextures),R+=1,z}function L(z){const y=[];return y.push(z.wrapS),y.push(z.wrapT),y.push(z.wrapR||0),y.push(z.magFilter),y.push(z.minFilter),y.push(z.anisotropy),y.push(z.internalFormat),y.push(z.format),y.push(z.type),y.push(z.generateMipmaps),y.push(z.premultiplyAlpha),y.push(z.flipY),y.push(z.unpackAlignment),y.push(z.colorSpace),y.join()}function J(z,y){const ot=r.get(z);if(z.isVideoTexture&&tt(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&ot.__version!==z.version){const ht=z.image;if(ht===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(ot,z,y);return}}else z.isExternalTexture&&(ot.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,ot.__webglTexture,o.TEXTURE0+y)}function Q(z,y){const ot=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ot.__version!==z.version){Et(ot,z,y);return}else z.isExternalTexture&&(ot.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,ot.__webglTexture,o.TEXTURE0+y)}function pt(z,y){const ot=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ot.__version!==z.version){Et(ot,z,y);return}i.bindTexture(o.TEXTURE_3D,ot.__webglTexture,o.TEXTURE0+y)}function st(z,y){const ot=r.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&ot.__version!==z.version){wt(ot,z,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ot.__webglTexture,o.TEXTURE0+y)}const vt={[Dp]:o.REPEAT,[Xa]:o.CLAMP_TO_EDGE,[Np]:o.MIRRORED_REPEAT},Ct={[In]:o.NEAREST,[J1]:o.NEAREST_MIPMAP_NEAREST,[Mu]:o.NEAREST_MIPMAP_LINEAR,[Gn]:o.LINEAR,[Vh]:o.LINEAR_MIPMAP_NEAREST,[os]:o.LINEAR_MIPMAP_LINEAR},O={[eT]:o.NEVER,[sT]:o.ALWAYS,[nT]:o.LESS,[Im]:o.LEQUAL,[iT]:o.EQUAL,[zm]:o.GEQUAL,[aT]:o.GREATER,[rT]:o.NOTEQUAL};function rt(z,y){if(y.type===ca&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Gn||y.magFilter===Vh||y.magFilter===Mu||y.magFilter===os||y.minFilter===Gn||y.minFilter===Vh||y.minFilter===Mu||y.minFilter===os)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,vt[y.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,vt[y.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,vt[y.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,Ct[y.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,Ct[y.minFilter]),y.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,O[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===In||y.minFilter!==Mu&&y.minFilter!==os||y.type===ca&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const ot=e.get("EXT_texture_filter_anisotropic");o.texParameterf(z,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function St(z,y){let ot=!1;z.__webglInit===void 0&&(z.__webglInit=!0,y.addEventListener("dispose",B));const ht=y.source;let xt=E.get(ht);xt===void 0&&(xt={},E.set(ht,xt));const Nt=L(y);if(Nt!==z.__cacheKey){xt[Nt]===void 0&&(xt[Nt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,ot=!0),xt[Nt].usedTimes++;const Pt=xt[z.__cacheKey];Pt!==void 0&&(xt[z.__cacheKey].usedTimes--,Pt.usedTimes===0&&Y(y)),z.__cacheKey=Nt,z.__webglTexture=xt[Nt].texture}return ot}function q(z,y,ot){return Math.floor(Math.floor(z/ot)/y)}function nt(z,y,ot,ht){const Nt=z.updateRanges;if(Nt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,ot,ht,y.data);else{Nt.sort((ee,Gt)=>ee.start-Gt.start);let Pt=0;for(let ee=1;ee<Nt.length;ee++){const Gt=Nt[Pt],Bt=Nt[ee],Yt=Gt.start+Gt.count,se=q(Bt.start,y.width,4),de=q(Gt.start,y.width,4);Bt.start<=Yt+1&&se===de&&q(Bt.start+Bt.count-1,y.width,4)===se?Gt.count=Math.max(Gt.count,Bt.start+Bt.count-Gt.start):(++Pt,Nt[Pt]=Bt)}Nt.length=Pt+1;const Mt=i.getParameter(o.UNPACK_ROW_LENGTH),At=i.getParameter(o.UNPACK_SKIP_PIXELS),Ot=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let ee=0,Gt=Nt.length;ee<Gt;ee++){const Bt=Nt[ee],Yt=Math.floor(Bt.start/4),se=Math.ceil(Bt.count/4),de=Yt%y.width,$=Math.floor(Yt/y.width),Lt=se,bt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,de),i.pixelStorei(o.UNPACK_SKIP_ROWS,$),i.texSubImage2D(o.TEXTURE_2D,0,de,$,Lt,bt,ot,ht,y.data)}z.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,Mt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,At),i.pixelStorei(o.UNPACK_SKIP_ROWS,Ot)}}function Et(z,y,ot){let ht=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ht=o.TEXTURE_3D);const xt=St(z,y),Nt=y.source;i.bindTexture(ht,z.__webglTexture,o.TEXTURE0+ot);const Pt=r.get(Nt);if(Nt.version!==Pt.__version||xt===!0){if(i.activeTexture(o.TEXTURE0+ot),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const bt=Ne.getPrimaries(Ne.workingColorSpace),It=y.colorSpace===wr?null:Ne.getPrimaries(y.colorSpace),Wt=y.colorSpace===wr||bt===It?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt)}i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment);let At=M(y.image,!1,l.maxTextureSize);At=rn(y,At);const Ot=u.convert(y.format,y.colorSpace),ee=u.convert(y.type);let Gt=D(y.internalFormat,Ot,ee,y.normalized,y.colorSpace,y.isVideoTexture);rt(ht,y);let Bt;const Yt=y.mipmaps,se=y.isVideoTexture!==!0,de=Pt.__version===void 0||xt===!0,$=Nt.dataReady,Lt=I(y,At);if(y.isDepthTexture)Gt=U(y.format===ls,y.type),de&&(se?i.texStorage2D(o.TEXTURE_2D,1,Gt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,Gt,At.width,At.height,0,Ot,ee,null));else if(y.isDataTexture)if(Yt.length>0){se&&de&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,Yt[0].width,Yt[0].height);for(let bt=0,It=Yt.length;bt<It;bt++)Bt=Yt[bt],se?$&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Bt.width,Bt.height,Ot,ee,Bt.data):i.texImage2D(o.TEXTURE_2D,bt,Gt,Bt.width,Bt.height,0,Ot,ee,Bt.data);y.generateMipmaps=!1}else se?(de&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,At.width,At.height),$&&nt(y,At,Ot,ee)):i.texImage2D(o.TEXTURE_2D,0,Gt,At.width,At.height,0,Ot,ee,At.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){se&&de&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,Yt[0].width,Yt[0].height,At.depth);for(let bt=0,It=Yt.length;bt<It;bt++)if(Bt=Yt[bt],y.format!==Vi)if(Ot!==null)if(se){if($)if(y.layerUpdates.size>0){const Wt=IS(Bt.width,Bt.height,y.format,y.type);for(const Dt of y.layerUpdates){const te=Bt.data.subarray(Dt*Wt/Bt.data.BYTES_PER_ELEMENT,(Dt+1)*Wt/Bt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,Dt,Bt.width,Bt.height,1,Ot,te)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Bt.width,Bt.height,At.depth,Ot,Bt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,Gt,Bt.width,Bt.height,At.depth,0,Bt.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?$&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Bt.width,Bt.height,At.depth,Ot,ee,Bt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,Gt,Bt.width,Bt.height,At.depth,0,Ot,ee,Bt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{se&&de&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,Yt[0].width,Yt[0].height);for(let bt=0,It=Yt.length;bt<It;bt++)Bt=Yt[bt],y.format!==Vi?Ot!==null?se?$&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Bt.width,Bt.height,Ot,Bt.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,Gt,Bt.width,Bt.height,0,Bt.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?$&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Bt.width,Bt.height,Ot,ee,Bt.data):i.texImage2D(o.TEXTURE_2D,bt,Gt,Bt.width,Bt.height,0,Ot,ee,Bt.data)}else if(y.isDataArrayTexture)if(se){if(de&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,At.width,At.height,At.depth),$)if(y.layerUpdates.size>0){const bt=IS(At.width,At.height,y.format,y.type);for(const It of y.layerUpdates){const Wt=At.data.subarray(It*bt/At.data.BYTES_PER_ELEMENT,(It+1)*bt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,It,At.width,At.height,1,Ot,ee,Wt)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ot,ee,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,At.width,At.height,At.depth,0,Ot,ee,At.data);else if(y.isData3DTexture)se?(de&&i.texStorage3D(o.TEXTURE_3D,Lt,Gt,At.width,At.height,At.depth),$&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ot,ee,At.data)):i.texImage3D(o.TEXTURE_3D,0,Gt,At.width,At.height,At.depth,0,Ot,ee,At.data);else if(y.isFramebufferTexture){if(de)if(se)i.texStorage2D(o.TEXTURE_2D,Lt,Gt,At.width,At.height);else{let bt=At.width,It=At.height;for(let Wt=0;Wt<Lt;Wt++)i.texImage2D(o.TEXTURE_2D,Wt,Gt,bt,It,0,Ot,ee,null),bt>>=1,It>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in o){const bt=o.canvas;if(bt.hasAttribute("layoutsubtree")||bt.setAttribute("layoutsubtree","true"),At.parentNode!==bt){bt.appendChild(At),g.add(y),bt.onpaint=It=>{const Wt=It.changedElements;for(const Dt of g)Wt.includes(Dt.image)&&(Dt.needsUpdate=!0)},bt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,At);else{const Wt=o.RGBA,Dt=o.RGBA,te=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Wt,Dt,te,At)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Yt.length>0){if(se&&de){const bt=Ie(Yt[0]);i.texStorage2D(o.TEXTURE_2D,Lt,Gt,bt.width,bt.height)}for(let bt=0,It=Yt.length;bt<It;bt++)Bt=Yt[bt],se?$&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ot,ee,Bt):i.texImage2D(o.TEXTURE_2D,bt,Gt,Ot,ee,Bt);y.generateMipmaps=!1}else if(se){if(de){const bt=Ie(At);i.texStorage2D(o.TEXTURE_2D,Lt,Gt,bt.width,bt.height)}$&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,ee,At)}else i.texImage2D(o.TEXTURE_2D,0,Gt,Ot,ee,At);x(y)&&G(ht),Pt.__version=Nt.version,y.onUpdate&&y.onUpdate(y)}z.__version=y.version}function wt(z,y,ot){if(y.image.length!==6)return;const ht=St(z,y),xt=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+ot);const Nt=r.get(xt);if(xt.version!==Nt.__version||ht===!0){i.activeTexture(o.TEXTURE0+ot);const Pt=Ne.getPrimaries(Ne.workingColorSpace),Mt=y.colorSpace===wr?null:Ne.getPrimaries(y.colorSpace),At=y.colorSpace===wr||Pt===Mt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Ot=y.isCompressedTexture||y.image[0].isCompressedTexture,ee=y.image[0]&&y.image[0].isDataTexture,Gt=[];for(let Dt=0;Dt<6;Dt++)!Ot&&!ee?Gt[Dt]=M(y.image[Dt],!0,l.maxCubemapSize):Gt[Dt]=ee?y.image[Dt].image:y.image[Dt],Gt[Dt]=rn(y,Gt[Dt]);const Bt=Gt[0],Yt=u.convert(y.format,y.colorSpace),se=u.convert(y.type),de=D(y.internalFormat,Yt,se,y.normalized,y.colorSpace),$=y.isVideoTexture!==!0,Lt=Nt.__version===void 0||ht===!0,bt=xt.dataReady;let It=I(y,Bt);rt(o.TEXTURE_CUBE_MAP,y);let Wt;if(Ot){$&&Lt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,It,de,Bt.width,Bt.height);for(let Dt=0;Dt<6;Dt++){Wt=Gt[Dt].mipmaps;for(let te=0;te<Wt.length;te++){const qt=Wt[te];y.format!==Vi?Yt!==null?$?bt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,te,0,0,qt.width,qt.height,Yt,qt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,te,de,qt.width,qt.height,0,qt.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,te,0,0,qt.width,qt.height,Yt,se,qt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,te,de,qt.width,qt.height,0,Yt,se,qt.data)}}}else{if(Wt=y.mipmaps,$&&Lt){Wt.length>0&&It++;const Dt=Ie(Gt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,It,de,Dt.width,Dt.height)}for(let Dt=0;Dt<6;Dt++)if(ee){$?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,Gt[Dt].width,Gt[Dt].height,Yt,se,Gt[Dt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,de,Gt[Dt].width,Gt[Dt].height,0,Yt,se,Gt[Dt].data);for(let te=0;te<Wt.length;te++){const we=Wt[te].image[Dt].image;$?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,te+1,0,0,we.width,we.height,Yt,se,we.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,te+1,de,we.width,we.height,0,Yt,se,we.data)}}else{$?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,Yt,se,Gt[Dt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,de,Yt,se,Gt[Dt]);for(let te=0;te<Wt.length;te++){const qt=Wt[te];$?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,te+1,0,0,Yt,se,qt.image[Dt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,te+1,de,Yt,se,qt.image[Dt])}}}x(y)&&G(o.TEXTURE_CUBE_MAP),Nt.__version=xt.version,y.onUpdate&&y.onUpdate(y)}z.__version=y.version}function lt(z,y,ot,ht,xt,Nt){const Pt=u.convert(ot.format,ot.colorSpace),Mt=u.convert(ot.type),At=D(ot.internalFormat,Pt,Mt,ot.normalized,ot.colorSpace),Ot=r.get(y),ee=r.get(ot);if(ee.__renderTarget=y,!Ot.__hasExternalTextures){const Gt=Math.max(1,y.width>>Nt),Bt=Math.max(1,y.height>>Nt);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,Nt,At,Gt,Bt,y.depth,0,Pt,Mt,null):i.texImage2D(xt,Nt,At,Gt,Bt,0,Pt,Mt,null)}i.bindFramebuffer(o.FRAMEBUFFER,z),nn(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,xt,ee.__webglTexture,0,Fe(y)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,xt,ee.__webglTexture,Nt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Rt(z,y,ot){if(o.bindRenderbuffer(o.RENDERBUFFER,z),y.depthBuffer){const ht=y.depthTexture,xt=ht&&ht.isDepthTexture?ht.type:null,Nt=U(y.stencilBuffer,xt),Pt=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;nn(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Fe(y),Nt,y.width,y.height):ot?o.renderbufferStorageMultisample(o.RENDERBUFFER,Fe(y),Nt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Nt,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,z)}else{const ht=y.textures;for(let xt=0;xt<ht.length;xt++){const Nt=ht[xt],Pt=u.convert(Nt.format,Nt.colorSpace),Mt=u.convert(Nt.type),At=D(Nt.internalFormat,Pt,Mt,Nt.normalized,Nt.colorSpace);nn(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Fe(y),At,y.width,y.height):ot?o.renderbufferStorageMultisample(o.RENDERBUFFER,Fe(y),At,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,At,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ge(z,y,ot){const ht=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,z),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const xt=r.get(y.depthTexture);if(xt.__renderTarget=y,(!xt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ht){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,y.depthTexture.addEventListener("dispose",B)),xt.__webglTexture===void 0){xt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),rt(o.TEXTURE_CUBE_MAP,y.depthTexture);const Ot=u.convert(y.depthTexture.format),ee=u.convert(y.depthTexture.type);let Gt;y.depthTexture.format===Ya?Gt=o.DEPTH_COMPONENT24:y.depthTexture.format===ls&&(Gt=o.DEPTH24_STENCIL8);for(let Bt=0;Bt<6;Bt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,Gt,y.width,y.height,0,Ot,ee,null)}}else J(y.depthTexture,0);const Nt=xt.__webglTexture,Pt=Fe(y),Mt=ht?o.TEXTURE_CUBE_MAP_POSITIVE_X+ot:o.TEXTURE_2D,At=y.depthTexture.format===ls?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ya)nn(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,At,Mt,Nt,0,Pt):o.framebufferTexture2D(o.FRAMEBUFFER,At,Mt,Nt,0);else if(y.depthTexture.format===ls)nn(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,At,Mt,Nt,0,Pt):o.framebufferTexture2D(o.FRAMEBUFFER,At,Mt,Nt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(z){const y=r.get(z),ot=z.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==z.depthTexture){const ht=z.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ht){const xt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ht.removeEventListener("dispose",xt)};ht.addEventListener("dispose",xt),y.__depthDisposeCallback=xt}y.__boundDepthTexture=ht}if(z.depthTexture&&!y.__autoAllocateDepthBuffer)if(ot)for(let ht=0;ht<6;ht++)ge(y.__webglFramebuffer[ht],z,ht);else{const ht=z.texture.mipmaps;ht&&ht.length>0?ge(y.__webglFramebuffer[0],z,0):ge(y.__webglFramebuffer,z,0)}else if(ot){y.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[ht]),y.__webglDepthbuffer[ht]===void 0)y.__webglDepthbuffer[ht]=o.createRenderbuffer(),Rt(y.__webglDepthbuffer[ht],z,!1);else{const xt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=y.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,Nt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,Nt)}}else{const ht=z.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),Rt(y.__webglDepthbuffer,z,!1);else{const xt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Nt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,Nt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function re(z,y,ot){const ht=r.get(z);y!==void 0&&lt(ht.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ot!==void 0&&ne(z)}function oe(z){const y=z.texture,ot=r.get(z),ht=r.get(y);z.addEventListener("dispose",b);const xt=z.textures,Nt=z.isWebGLCubeRenderTarget===!0,Pt=xt.length>1;if(Pt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=y.version,d.memory.textures++),Nt){ot.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(y.mipmaps&&y.mipmaps.length>0){ot.__webglFramebuffer[Mt]=[];for(let At=0;At<y.mipmaps.length;At++)ot.__webglFramebuffer[Mt][At]=o.createFramebuffer()}else ot.__webglFramebuffer[Mt]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){ot.__webglFramebuffer=[];for(let Mt=0;Mt<y.mipmaps.length;Mt++)ot.__webglFramebuffer[Mt]=o.createFramebuffer()}else ot.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let Mt=0,At=xt.length;Mt<At;Mt++){const Ot=r.get(xt[Mt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=o.createTexture(),d.memory.textures++)}if(z.samples>0&&nn(z)===!1){ot.__webglMultisampledFramebuffer=o.createFramebuffer(),ot.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ot.__webglMultisampledFramebuffer);for(let Mt=0;Mt<xt.length;Mt++){const At=xt[Mt];ot.__webglColorRenderbuffer[Mt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ot.__webglColorRenderbuffer[Mt]);const Ot=u.convert(At.format,At.colorSpace),ee=u.convert(At.type),Gt=D(At.internalFormat,Ot,ee,At.normalized,At.colorSpace,z.isXRRenderTarget===!0),Bt=Fe(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,Bt,Gt,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Mt,o.RENDERBUFFER,ot.__webglColorRenderbuffer[Mt])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(ot.__webglDepthRenderbuffer=o.createRenderbuffer(),Rt(ot.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Nt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),rt(o.TEXTURE_CUBE_MAP,y);for(let Mt=0;Mt<6;Mt++)if(y.mipmaps&&y.mipmaps.length>0)for(let At=0;At<y.mipmaps.length;At++)lt(ot.__webglFramebuffer[Mt][At],z,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,At);else lt(ot.__webglFramebuffer[Mt],z,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);x(y)&&G(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let Mt=0,At=xt.length;Mt<At;Mt++){const Ot=xt[Mt],ee=r.get(Ot);let Gt=o.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Gt=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Gt,ee.__webglTexture),rt(Gt,Ot),lt(ot.__webglFramebuffer,z,Ot,o.COLOR_ATTACHMENT0+Mt,Gt,0),x(Ot)&&G(Gt)}i.unbindTexture()}else{let Mt=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Mt=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Mt,ht.__webglTexture),rt(Mt,y),y.mipmaps&&y.mipmaps.length>0)for(let At=0;At<y.mipmaps.length;At++)lt(ot.__webglFramebuffer[At],z,y,o.COLOR_ATTACHMENT0,Mt,At);else lt(ot.__webglFramebuffer,z,y,o.COLOR_ATTACHMENT0,Mt,0);x(y)&&G(Mt),i.unbindTexture()}z.depthBuffer&&ne(z)}function Ut(z){const y=z.textures;for(let ot=0,ht=y.length;ot<ht;ot++){const xt=y[ot];if(x(xt)){const Nt=j(z),Pt=r.get(xt).__webglTexture;i.bindTexture(Nt,Pt),G(Nt),i.unbindTexture()}}}const Ht=[],ke=[];function mn(z){if(z.samples>0){if(nn(z)===!1){const y=z.textures,ot=z.width,ht=z.height;let xt=o.COLOR_BUFFER_BIT;const Nt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=r.get(z),Mt=y.length>1;if(Mt)for(let Ot=0;Ot<y.length;Ot++)i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const At=z.texture.mipmaps;At&&At.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Ot=0;Ot<y.length;Ot++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Mt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Ot]);const ee=r.get(y[Ot]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ee,0)}o.blitFramebuffer(0,0,ot,ht,0,0,ot,ht,xt,o.NEAREST),p===!0&&(Ht.length=0,ke.length=0,Ht.push(o.COLOR_ATTACHMENT0+Ot),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(Ht.push(Nt),ke.push(Nt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ke)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ht))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Mt)for(let Ot=0;Ot<y.length;Ot++){i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Ot]);const ee=r.get(y[Ot]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,ee,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&p){const y=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function Fe(z){return Math.min(l.maxSamples,z.samples)}function nn(z){const y=r.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function tt(z){const y=d.render.frame;v.get(z)!==y&&(v.set(z,y),z.update())}function rn(z,y){const ot=z.colorSpace,ht=z.format,xt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ot!==tf&&ot!==wr&&(Ne.getTransfer(ot)===Ze?(ht!==Vi||xt!==_i)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",ot)),y}function Ie(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(m.width=z.naturalWidth||z.width,m.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(m.width=z.displayWidth,m.height=z.displayHeight):(m.width=z.width,m.height=z.height),m}this.allocateTextureUnit=V,this.resetTextureUnits=N,this.getTextureUnits=H,this.setTextureUnits=k,this.setTexture2D=J,this.setTexture2DArray=Q,this.setTexture3D=pt,this.setTextureCube=st,this.rebindTextures=re,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=nn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function P3(o,e){function i(r,l=wr){let u;const d=Ne.getTransfer(l);if(r===_i)return o.UNSIGNED_BYTE;if(r===Nm)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Um)return o.UNSIGNED_SHORT_5_5_5_1;if(r===sM)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===oM)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===aM)return o.BYTE;if(r===rM)return o.SHORT;if(r===ql)return o.UNSIGNED_SHORT;if(r===Dm)return o.INT;if(r===da)return o.UNSIGNED_INT;if(r===ca)return o.FLOAT;if(r===ha)return o.HALF_FLOAT;if(r===lM)return o.ALPHA;if(r===cM)return o.RGB;if(r===Vi)return o.RGBA;if(r===Ya)return o.DEPTH_COMPONENT;if(r===ls)return o.DEPTH_STENCIL;if(r===uM)return o.RED;if(r===Lm)return o.RED_INTEGER;if(r===us)return o.RG;if(r===Om)return o.RG_INTEGER;if(r===Pm)return o.RGBA_INTEGER;if(r===Wu||r===Yu||r===Zu||r===Ku)if(d===Ze)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Wu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Yu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Wu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Yu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Zu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ku)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Up||r===Lp||r===Op||r===Pp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Up)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Op)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ip||r===zp||r===Fp||r===Bp||r===Hp||r===ju||r===Gp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Ip||r===zp)return d===Ze?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Fp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Bp)return u.COMPRESSED_R11_EAC;if(r===Hp)return u.COMPRESSED_SIGNED_R11_EAC;if(r===ju)return u.COMPRESSED_RG11_EAC;if(r===Gp)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Vp||r===Xp||r===kp||r===qp||r===Wp||r===Yp||r===Zp||r===Kp||r===Qp||r===Jp||r===jp||r===$p||r===tm||r===em)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Vp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$p)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===tm)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===em)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===nm||r===im||r===am)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===nm)return d===Ze?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===im)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===am)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===rm||r===sm||r===$u||r===om)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===rm)return u.COMPRESSED_RED_RGTC1_EXT;if(r===sm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===$u)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===om)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const I3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z3=`
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

}`;class F3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new vM(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new pa({vertexShader:I3,fragmentShader:z3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new pn(new ma(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B3 extends fs{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",p=1,m=null,v=null,g=null,S=null,E=null,w=null;const P=typeof XRWebGLBinding<"u",M=new F3,x={},G=i.getContextAttributes();let j=null,D=null;const U=[],I=[],B=new Pe;let b=null,F=null;const Y=new Ni;Y.viewport=new on;const T=new Ni;T.viewport=new on;const R=[Y,T],N=new YT;let H=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let nt=U[q];return nt===void 0&&(nt=new Jh,U[q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(q){let nt=U[q];return nt===void 0&&(nt=new Jh,U[q]=nt),nt.getGripSpace()},this.getHand=function(q){let nt=U[q];return nt===void 0&&(nt=new Jh,U[q]=nt),nt.getHandSpace()};function V(q){const nt=I.indexOf(q.inputSource);if(nt===-1)return;const Et=U[nt];Et!==void 0&&(Et.update(q.inputSource,q.frame,m||d),Et.dispatchEvent({type:q.type,data:q.inputSource}))}function L(){l.removeEventListener("select",V),l.removeEventListener("selectstart",V),l.removeEventListener("selectend",V),l.removeEventListener("squeeze",V),l.removeEventListener("squeezestart",V),l.removeEventListener("squeezeend",V),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",J);for(let q=0;q<U.length;q++){const nt=I[q];nt!==null&&(I[q]=null,U[q].disconnect(nt))}H=null,k=null,M.reset();for(const q in x)delete x[q];if(e.setRenderTarget(j),E=null,S=null,g=null,l=null,D=null,St.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(B.width,B.height,!1),F!==null){const q=F.camera;q.fov=F.fov,q.zoom=F.zoom,q.updateProjectionMatrix(),F=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){u=q,r.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){h=q,r.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return g===null&&P&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return w},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(j=e.getRenderTarget(),l.addEventListener("select",V),l.addEventListener("selectstart",V),l.addEventListener("selectend",V),l.addEventListener("squeeze",V),l.addEventListener("squeezestart",V),l.addEventListener("squeezeend",V),l.addEventListener("end",L),l.addEventListener("inputsourceschange",J),G.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(B),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,wt=null,lt=null;G.depth&&(lt=G.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=G.stencil?ls:Ya,wt=G.stencil?Wl:da);const Rt={colorFormat:i.RGBA8,depthFormat:lt,scaleFactor:u};g=this.getBinding(),S=g.createProjectionLayer(Rt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),D=new Xi(S.textureWidth,S.textureHeight,{format:Vi,type:_i,depthTexture:new Zl(S.textureWidth,S.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:G.stencil,colorSpace:e.outputColorSpace,samples:G.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}else{const Et={antialias:G.antialias,alpha:!0,depth:G.depth,stencil:G.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),D=new Xi(E.framebufferWidth,E.framebufferHeight,{format:Vi,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:G.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),St.setContext(l),St.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function J(q){for(let nt=0;nt<q.removed.length;nt++){const Et=q.removed[nt],wt=I.indexOf(Et);wt>=0&&(I[wt]=null,U[wt].disconnect(Et))}for(let nt=0;nt<q.added.length;nt++){const Et=q.added[nt];let wt=I.indexOf(Et);if(wt===-1){for(let Rt=0;Rt<U.length;Rt++)if(Rt>=I.length){I.push(Et),wt=Rt;break}else if(I[Rt]===null){I[Rt]=Et,wt=Rt;break}if(wt===-1)break}const lt=U[wt];lt&&lt.connect(Et)}}const Q=new K,pt=new K;function st(q,nt,Et){Q.setFromMatrixPosition(nt.matrixWorld),pt.setFromMatrixPosition(Et.matrixWorld);const wt=Q.distanceTo(pt),lt=nt.projectionMatrix.elements,Rt=Et.projectionMatrix.elements,ge=lt[14]/(lt[10]-1),ne=lt[14]/(lt[10]+1),re=(lt[9]+1)/lt[5],oe=(lt[9]-1)/lt[5],Ut=(lt[8]-1)/lt[0],Ht=(Rt[8]+1)/Rt[0],ke=ge*Ut,mn=ge*Ht,Fe=wt/(-Ut+Ht),nn=Fe*-Ut;if(nt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(nn),q.translateZ(Fe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),lt[10]===-1)q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const tt=ge+Fe,rn=ne+Fe,Ie=ke-nn,z=mn+(wt-nn),y=re*ne/rn*tt,ot=oe*ne/rn*tt;q.projectionMatrix.makePerspective(Ie,z,y,ot,tt,rn),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function vt(q,nt){nt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(nt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let nt=q.near,Et=q.far;M.texture!==null&&(M.depthNear>0&&(nt=M.depthNear),M.depthFar>0&&(Et=M.depthFar)),N.near=T.near=Y.near=nt,N.far=T.far=Y.far=Et,(H!==N.near||k!==N.far)&&(l.updateRenderState({depthNear:N.near,depthFar:N.far}),H=N.near,k=N.far),N.layers.mask=q.layers.mask|6,Y.layers.mask=N.layers.mask&-5,T.layers.mask=N.layers.mask&-3;const wt=q.parent,lt=N.cameras;vt(N,wt);for(let Rt=0;Rt<lt.length;Rt++)vt(lt[Rt],wt);lt.length===2?st(N,Y,T):N.projectionMatrix.copy(Y.projectionMatrix),F===null&&q.isPerspectiveCamera&&(F={camera:q,fov:q.fov,zoom:q.zoom}),Ct(q,N,wt)};function Ct(q,nt,Et){Et===null?q.matrix.copy(nt.matrixWorld):(q.matrix.copy(Et.matrixWorld),q.matrix.invert(),q.matrix.multiply(nt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=cm*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(S===null&&E===null))return p},this.setFoveation=function(q){p=q,S!==null&&(S.fixedFoveation=q),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(N)},this.getCameraTexture=function(q){return x[q]};let O=null;function rt(q,nt){if(v=nt.getViewerPose(m||d),w=nt,v!==null){const Et=v.views;E!==null&&(e.setRenderTargetFramebuffer(D,E.framebuffer),e.setRenderTarget(D));let wt=!1;Et.length!==N.cameras.length&&(N.cameras.length=0,wt=!0);for(let ne=0;ne<Et.length;ne++){const re=Et[ne];let oe=null;if(E!==null)oe=E.getViewport(re);else{const Ht=g.getViewSubImage(S,re);oe=Ht.viewport,ne===0&&(e.setRenderTargetTextures(D,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(D))}let Ut=R[ne];Ut===void 0&&(Ut=new Ni,Ut.layers.enable(ne),Ut.viewport=new on,R[ne]=Ut),Ut.matrix.fromArray(re.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(re.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(oe.x,oe.y,oe.width,oe.height),ne===0&&(N.matrix.copy(Ut.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),wt===!0&&N.cameras.push(Ut)}const lt=l.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&P){g=r.getBinding();const ne=g.getDepthInformation(Et[0]);ne&&ne.isValid&&ne.texture&&M.init(ne,l.renderState)}if(lt&&lt.includes("camera-access")&&P){e.state.unbindTexture(),g=r.getBinding();for(let ne=0;ne<Et.length;ne++){const re=Et[ne].camera;if(re){let oe=x[re];oe||(oe=new vM,x[re]=oe);const Ut=g.getCameraImage(re);oe.sourceTexture=Ut}}}}for(let Et=0;Et<U.length;Et++){const wt=I[Et],lt=U[Et];wt!==null&&lt!==void 0&&lt.update(wt,nt,m||d)}O&&O(q,nt),nt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:nt}),w=null}const St=new MM;St.setAnimationLoop(rt),this.setAnimationLoop=function(q){O=q},this.dispose=function(){}}}const H3=new Je,CM=new me;CM.set(-1,0,0,0,1,0,0,0,1);function G3(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,SM(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,G,j,D){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?u(M,x):x.isMeshLambertMaterial?(u(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(u(M,x),g(M,x)):x.isMeshPhongMaterial?(u(M,x),v(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(u(M,x),S(M,x),x.isMeshPhysicalMaterial&&E(M,x,D)):x.isMeshMatcapMaterial?(u(M,x),w(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),P(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?p(M,x,G,j):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===ai&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===ai&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const G=e.get(x),j=G.envMap,D=G.envMapRotation;j&&(M.envMap.value=j,M.envMapRotation.value.setFromMatrix4(H3.makeRotationFromEuler(D)).transpose(),j.isCubeTexture&&j.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(CM),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,G,j){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*G,M.scale.value=j*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function S(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function E(M,x,G){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ai&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.retroreflectivity>0&&(M.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=G.texture,M.transmissionSamplerSize.value.set(G.width,G.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function w(M,x){x.matcap&&(M.matcap.value=x.matcap)}function P(M,x){const G=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(G.matrixWorld),M.nearDistance.value=G.shadow.camera.near,M.farDistance.value=G.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function V3(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,U){const I=U.program;r.uniformBlockBinding(D,I)}function m(D,U){let I=l[D.id];I===void 0&&(M(D),I=v(D),l[D.id]=I,D.addEventListener("dispose",G));const B=U.program;r.updateUBOMapping(D,B);const b=e.render.frame;u[D.id]!==b&&(S(D),u[D.id]=b)}function v(D){const U=g();D.__bindingPointIndex=U;const I=o.createBuffer(),B=D.__size,b=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,I),o.bufferData(o.UNIFORM_BUFFER,B,b),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,I),I}function g(){for(let D=0;D<h;D++)if(d.indexOf(D)===-1)return d.push(D),D;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(D){const U=l[D.id],I=D.uniforms,B=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let b=0,F=I.length;b<F;b++){const Y=I[b];if(Array.isArray(Y))for(let T=0,R=Y.length;T<R;T++)E(Y[T],b,T,B);else E(Y,b,0,B)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(D,U,I,B){if(P(D,U,I,B)===!0){const b=D.__offset,F=D.value;if(Array.isArray(F)){let Y=0;for(let T=0;T<F.length;T++){const R=F[T],N=x(R);w(R,D.__data,Y),typeof R!="number"&&typeof R!="boolean"&&!R.isMatrix3&&!ArrayBuffer.isView(R)&&(Y+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(F,D.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,b,D.__data)}}function w(D,U,I){typeof D=="number"||typeof D=="boolean"?U[0]=D:D.isMatrix3?(U[0]=D.elements[0],U[1]=D.elements[1],U[2]=D.elements[2],U[3]=0,U[4]=D.elements[3],U[5]=D.elements[4],U[6]=D.elements[5],U[7]=0,U[8]=D.elements[6],U[9]=D.elements[7],U[10]=D.elements[8],U[11]=0):ArrayBuffer.isView(D)?U.set(new D.constructor(D.buffer,D.byteOffset,U.length)):D.toArray(U,I)}function P(D,U,I,B){const b=D.value,F=U+"_"+I;if(B[F]===void 0)return typeof b=="number"||typeof b=="boolean"?B[F]=b:ArrayBuffer.isView(b)?B[F]=b.slice():B[F]=b.clone(),!0;{const Y=B[F];if(typeof b=="number"||typeof b=="boolean"){if(Y!==b)return B[F]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(Y.equals(b)===!1)return Y.copy(b),!0}}return!1}function M(D){const U=D.uniforms;let I=0;const B=16;for(let F=0,Y=U.length;F<Y;F++){const T=Array.isArray(U[F])?U[F]:[U[F]];for(let R=0,N=T.length;R<N;R++){const H=T[R],k=Array.isArray(H.value)?H.value:[H.value];for(let V=0,L=k.length;V<L;V++){const J=k[V],Q=x(J),pt=I%B,st=pt%Q.boundary,vt=pt+st;I+=st,vt!==0&&B-vt<Q.storage&&(I+=B-vt),H.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=I,I+=Q.storage}}}const b=I%B;return b>0&&(I+=B-b),D.__size=I,D.__cache={},this}function x(D){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=48,U.storage=48):D.isMatrix4?(U.boundary=64,U.storage=64):D.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(U.boundary=16,U.storage=D.byteLength):fe("WebGLRenderer: Unsupported uniform value type.",D),U}function G(D){const U=D.target;U.removeEventListener("dispose",G);const I=d.indexOf(U.__bindingPointIndex);d.splice(I,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function j(){for(const D in l)o.deleteBuffer(l[D]);d=[],l={},u={}}return{bind:p,update:m,dispose:j}}const X3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ra=null;function k3(){return ra===null&&(ra=new OT(X3,16,16,us,ha),ra.name="DFG_LUT",ra.minFilter=Gn,ra.magFilter=Gn,ra.wrapS=Xa,ra.wrapT=Xa,ra.generateMipmaps=!1,ra.needsUpdate=!0),ra}class q3{constructor(e={}){const{canvas:i=cT(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1,outputBufferType:E=_i}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=d;const P=E,M=new Set([Pm,Om,Lm]),x=new Set([_i,da,ql,Wl,Nm,Um]),G=new Uint32Array(4),j=new Int32Array(4),D=new K;let U=null,I=null;const B=[],b=[];let F=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let T=!1,R=null,N=null,H=null,k=null;this._outputColorSpace=wn;let V=0,L=0,J=null,Q=-1,pt=null;const st=new on,vt=new on;let Ct=null;const O=new Oe(0);let rt=0,St=i.width,q=i.height,nt=1,Et=null,wt=null;const lt=new on(0,0,St,q),Rt=new on(0,0,St,q);let ge=!1;const ne=new Hm;let re=!1,oe=!1;const Ut=new Je,Ht=new K,ke=new on,mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function nn(){return J===null?nt:1}let tt=r;function rn(A,W){return i.getContext(A,W)}let Ie,z,y,ot,ht,xt,Nt,Pt,Mt,At,Ot,ee,Gt,Bt,Yt,se,de,$,Lt,bt,It,Wt,Dt;try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wm}`),i.addEventListener("webglcontextlost",we,!1),i.addEventListener("webglcontextrestored",he,!1),i.addEventListener("webglcontextcreationerror",ri,!1),tt===null){const W="webgl2";if(tt=rn(W,A),tt===null)throw rn(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}te()}catch(A){throw i.removeEventListener("webglcontextlost",we,!1),i.removeEventListener("webglcontextrestored",he,!1),i.removeEventListener("webglcontextcreationerror",ri,!1),Be("WebGLRenderer: "+A.message),A}function te(){Ie=new kR(tt),Ie.init(),It=new P3(tt,Ie),z=new OR(tt,Ie,e,It),y=new L3(tt,Ie),z.reversedDepthBuffer&&S&&y.buffers.depth.setReversed(!0),N=tt.createFramebuffer(),H=tt.createFramebuffer(),k=tt.createFramebuffer(),ot=new YR(tt),ht=new S3,xt=new O3(tt,Ie,y,ht,z,It,ot),Nt=new XR(Y),Pt=new KT(tt),Wt=new UR(tt,Pt),Mt=new qR(tt,Pt,ot,Wt),At=new KR(tt,Mt,Pt,Wt,ot),$=new ZR(tt,z,xt),Yt=new PR(ht),Ot=new v3(Y,Nt,Ie,z,Wt,Yt),ee=new G3(Y,ht),Gt=new M3,Bt=new R3(Ie),de=new NR(Y,Nt,y,At,w,p),se=new U3(Y,At,z),Dt=new V3(tt,ot,z,y),Lt=new LR(tt,Ie,ot),bt=new WR(tt,Ie,ot),ot.programs=Ot.programs,Y.capabilities=z,Y.extensions=Ie,Y.properties=ht,Y.renderLists=Gt,Y.shadowMap=se,Y.state=y,Y.info=ot}P!==_i&&(F=new JR(P,i.width,i.height,h,l,u));const qt=new B3(Y,tt);this.xr=qt,this.getContext=function(){return tt},this.getContextAttributes=function(){return tt.getContextAttributes()},this.forceContextLoss=function(){const A=Ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(A){A!==void 0&&(nt=A,this.setSize(St,q,!1))},this.getSize=function(A){return A.set(St,q)},this.setSize=function(A,W,gt=!0){if(qt.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}St=A,q=W,i.width=Math.floor(A*nt),i.height=Math.floor(W*nt),gt===!0&&(i.style.width=A+"px",i.style.height=W+"px"),F!==null&&F.setSize(i.width,i.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(St*nt,q*nt).floor()},this.setDrawingBufferSize=function(A,W,gt){St=A,q=W,nt=gt,i.width=Math.floor(A*gt),i.height=Math.floor(W*gt),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(P===_i){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(st)},this.getViewport=function(A){return A.copy(lt)},this.setViewport=function(A,W,gt,ut){A.isVector4?lt.set(A.x,A.y,A.z,A.w):lt.set(A,W,gt,ut),y.viewport(st.copy(lt).multiplyScalar(nt).round())},this.getScissor=function(A){return A.copy(Rt)},this.setScissor=function(A,W,gt,ut){A.isVector4?Rt.set(A.x,A.y,A.z,A.w):Rt.set(A,W,gt,ut),y.scissor(vt.copy(Rt).multiplyScalar(nt).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(A){y.setScissorTest(ge=A)},this.setOpaqueSort=function(A){Et=A},this.setTransparentSort=function(A){wt=A},this.getClearColor=function(A){return A.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,gt=!0){let ut=0;if(A){let ft=!1;if(J!==null){const Vt=J.texture.format;ft=M.has(Vt)}if(ft){const Vt=J.texture.type,Zt=x.has(Vt),zt=de.getClearColor(),Jt=de.getClearAlpha(),jt=zt.r,ce=zt.g,pe=zt.b;Zt?(G[0]=jt,G[1]=ce,G[2]=pe,G[3]=Jt,tt.clearBufferuiv(tt.COLOR,0,G)):(j[0]=jt,j[1]=ce,j[2]=pe,j[3]=Jt,tt.clearBufferiv(tt.COLOR,0,j))}else ut|=tt.COLOR_BUFFER_BIT}W&&(ut|=tt.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),gt&&(ut|=tt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ut!==0&&tt.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),R=A},this.dispose=function(){i.removeEventListener("webglcontextlost",we,!1),i.removeEventListener("webglcontextrestored",he,!1),i.removeEventListener("webglcontextcreationerror",ri,!1),de.dispose(),Gt.dispose(),Bt.dispose(),ht.dispose(),Nt.dispose(),At.dispose(),Wt.dispose(),Dt.dispose(),Ot.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",Lr),qt.removeEventListener("sessionend",Ka),ki.stop()};function we(A){A.preventDefault(),mS("WebGLRenderer: Context Lost."),T=!0}function he(){mS("WebGLRenderer: Context Restored."),T=!1;const A=ot.autoReset,W=se.enabled,gt=se.autoUpdate,ut=se.needsUpdate,ft=se.type;te(),ot.autoReset=A,se.enabled=W,se.autoUpdate=gt,se.needsUpdate=ut,se.type=ft}function ri(A){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Si(A){const W=A.target;W.removeEventListener("dispose",Si),cf(W)}function cf(A){hs(A),ht.remove(A)}function hs(A){const W=ht.get(A).programs;W!==void 0&&(W.forEach(function(gt){Ot.releaseProgram(gt)}),A.isShaderMaterial&&Ot.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,gt,ut,ft,Vt){W===null&&(W=mn);const Zt=ft.isMesh&&ft.matrixWorld.determinantAffine()<0,zt=Vo(A,W,gt,ut,ft);y.setMaterial(ut,Zt);let Jt=gt.index,jt=1;if(ut.wireframe===!0){if(Jt=Mt.getWireframeAttribute(gt),Jt===void 0)return;jt=2}const ce=gt.drawRange,pe=gt.attributes.position;let Kt=ce.start*jt,Ee=(ce.start+ce.count)*jt;Vt!==null&&(Kt=Math.max(Kt,Vt.start*jt),Ee=Math.min(Ee,(Vt.start+Vt.count)*jt)),Jt!==null?(Kt=Math.max(Kt,0),Ee=Math.min(Ee,Jt.count)):pe!=null&&(Kt=Math.max(Kt,0),Ee=Math.min(Ee,pe.count));const xe=Ee-Kt;if(xe<0||xe===1/0)return;Wt.setup(ft,ut,zt,gt,Jt);let Ke,Ve=Lt;if(Jt!==null&&(Ke=Pt.get(Jt),Ve=bt,Ve.setIndex(Ke)),ft.isMesh)ut.wireframe===!0?(y.setLineWidth(ut.wireframeLinewidth*nn()),Ve.setMode(tt.LINES)):Ve.setMode(tt.TRIANGLES);else if(ft.isLine){let Mn=ut.linewidth;Mn===void 0&&(Mn=1),y.setLineWidth(Mn*nn()),ft.isLineSegments?Ve.setMode(tt.LINES):ft.isLineLoop?Ve.setMode(tt.LINE_LOOP):Ve.setMode(tt.LINE_STRIP)}else ft.isPoints?Ve.setMode(tt.POINTS):ft.isSprite&&Ve.setMode(tt.TRIANGLES);if(ft.isBatchedMesh)if(Ie.get("WEBGL_multi_draw"))Ve.renderMultiDraw(ft._multiDrawStarts,ft._multiDrawCounts,ft._multiDrawCount);else{const Mn=ft._multiDrawStarts,Xt=ft._multiDrawCounts,ln=ft._multiDrawCount,De=Jt?Pt.get(Jt).bytesPerElement:1,kn=ht.get(ut).currentProgram.getUniforms();for(let si=0;si<ln;si++)kn.setValue(tt,"_gl_DrawID",si),Ve.render(Mn[si]/De,Xt[si])}else if(ft.isInstancedMesh)Ve.renderInstances(Kt,xe,ft.count);else if(gt.isInstancedBufferGeometry){const Mn=gt._maxInstanceCount!==void 0?gt._maxInstanceCount:1/0,Xt=Math.min(gt.instanceCount,Mn);Ve.renderInstances(Kt,xe,Xt)}else Ve.render(Kt,xe)};function Ur(A,W,gt,ut){R!==null&&A.isNodeMaterial&&R.setObject(ut,A),re===!0&&Yt.setState(A,gt,!1),A.transparent===!0&&A.side===Va&&A.forceSinglePass===!1?(A.side=ai,A.needsUpdate=!0,Or(A,W,ut),A.side=vi,A.needsUpdate=!0,Or(A,W,ut),A.side=Va):Or(A,W,ut)}this.compile=function(A,W,gt=null){gt===null&&(gt=A),R!==null&&R.renderStart(A,W,gt),I=Bt.get(gt),I.init(W),b.push(I),gt.traverseVisible(function(ft){ft.isLight&&ft.layers.test(W.layers)&&(I.pushLight(ft),ft.castShadow&&I.pushShadow(ft))}),A!==gt&&A.traverseVisible(function(ft){ft.isLight&&ft.layers.test(W.layers)&&(I.pushLight(ft),ft.castShadow&&I.pushShadow(ft))}),I.setupLights(),R!==null&&R.updateLights(I.state.lightsArray),oe=this.localClippingEnabled,re=Yt.init(this.clippingPlanes,oe),re===!0&&Yt.setGlobalState(this.clippingPlanes,W),R!==null&&se.render(I.state.shadowsArray,gt,W);const ut=new Set;return A.traverse(function(ft){if(!(ft.isMesh||ft.isPoints||ft.isLine||ft.isSprite))return;const Vt=ft.material;if(Vt)if(Array.isArray(Vt))for(let Zt=0;Zt<Vt.length;Zt++){const zt=Vt[Zt];Ur(zt,gt,W,ft),ut.add(zt)}else Ur(Vt,gt,W,ft),ut.add(Vt)}),I=b.pop(),R!==null&&R.renderEnd(),ut},this.compileAsync=function(A,W,gt=null){const ut=this.compile(A,W,gt);return new Promise(ft=>{function Vt(){if(ut.forEach(function(Zt){const Jt=ht.get(Zt).currentProgram;(Jt===void 0||Jt.isReady())&&ut.delete(Zt)}),ut.size===0){ft(A);return}setTimeout(Vt,10)}Ie.get("KHR_parallel_shader_compile")!==null?Vt():setTimeout(Vt,10)})};let Za=null;function ga(A){Za&&Za(A)}function Lr(){ki.stop()}function Ka(){ki.start()}const ki=new MM;ki.setAnimationLoop(ga),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(A){Za=A,qt.setAnimationLoop(A),A===null?ki.stop():ki.start()},qt.addEventListener("sessionstart",Lr),qt.addEventListener("sessionend",Ka),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;R!==null&&R.renderStart(A,W);const gt=qt.enabled===!0&&qt.isPresenting===!0,ut=F!==null&&(J===null||gt)&&F.begin(Y,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(W),W=qt.getCamera()),A.isScene===!0&&A.onBeforeRender(Y,A,W,J),I=Bt.get(A,b.length),I.init(W),I.state.textureUnits=xt.getTextureUnits(),b.push(I),Ut.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ne.setFromProjectionMatrix(Ut,ua,W.reversedDepth),oe=this.localClippingEnabled,re=Yt.init(this.clippingPlanes,oe),U=Gt.get(A,B.length),U.init(),B.push(U),qt.enabled===!0&&qt.isPresenting===!0){const Zt=Y.xr.getDepthSensingMesh();Zt!==null&&zo(Zt,W,-1/0,Y.sortObjects)}zo(A,W,0,Y.sortObjects),U.finish(),R!==null&&R.updateLights(I.state.lightsArray),Y.sortObjects===!0&&U.sort(Et,wt),Fe=qt.enabled===!1||qt.isPresenting===!1||qt.hasDepthSensing()===!1,Fe&&de.addToRenderList(U,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Yt.beginShadows();const ft=I.state.shadowsArray;if(se.render(ft,A,W),re===!0&&Yt.endShadows(),(ut&&F.hasRenderPass())===!1){const Zt=U.opaque,zt=U.transmissive;if(I.setupLights(),W.isArrayCamera){const Jt=W.cameras;if(zt.length>0)for(let jt=0,ce=Jt.length;jt<ce;jt++){const pe=Jt[jt];ps(Zt,zt,A,pe)}Fe&&de.render(A);for(let jt=0,ce=Jt.length;jt<ce;jt++){const pe=Jt[jt];Fo(U,A,pe,pe.viewport)}}else zt.length>0&&ps(Zt,zt,A,W),Fe&&de.render(A),Fo(U,A,W)}J!==null&&L===0&&(xt.updateMultisampleRenderTarget(J),xt.updateRenderTargetMipmap(J)),ut&&F.end(Y),A.isScene===!0&&A.onAfterRender(Y,A,W),Wt.resetDefaultState(),Q=-1,pt=null,b.pop(),b.length>0?(I=b[b.length-1],xt.setTextureUnits(I.state.textureUnits),re===!0&&Yt.setGlobalState(Y.clippingPlanes,I.state.camera)):I=null,B.pop(),B.length>0?U=B[B.length-1]:U=null,R!==null&&R.renderEnd()};function zo(A,W,gt,ut){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)gt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)I.pushLightProbeGrid(A);else if(A.isLight)I.pushLight(A),A.castShadow&&I.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ne)){ut&&ke.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ut);const Zt=At.update(A),zt=A.material;zt.visible&&U.push(A,Zt,zt,gt,ke.z,null,W)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ne))){const Zt=At.update(A),zt=A.material;if(ut&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ke.copy(A.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),ke.copy(Zt.boundingSphere.center)),ke.applyMatrix4(A.matrixWorld).applyMatrix4(Ut)),Array.isArray(zt)){const Jt=Zt.groups;for(let jt=0,ce=Jt.length;jt<ce;jt++){const pe=Jt[jt],Kt=zt[pe.materialIndex];Kt&&Kt.visible&&U.push(A,Zt,Kt,gt,ke.z,pe,W)}}else zt.visible&&U.push(A,Zt,zt,gt,ke.z,null,W)}}const Vt=A.children;for(let Zt=0,zt=Vt.length;Zt<zt;Zt++)zo(Vt[Zt],W,gt,ut)}function Fo(A,W,gt,ut){const{opaque:ft,transmissive:Vt,transparent:Zt}=A;I.setupLightsView(gt),re===!0&&Yt.setGlobalState(Y.clippingPlanes,gt),ut&&y.viewport(st.copy(ut)),ft.length>0&&qi(ft,W,gt),Vt.length>0&&qi(Vt,W,gt),Zt.length>0&&qi(Zt,W,gt),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ps(A,W,gt,ut){if((gt.isScene===!0?gt.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ut.id]===void 0){const Kt=Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ut.id]=new Xi(1,1,{generateMipmaps:!0,type:Kt?ha:_i,minFilter:os,samples:Math.max(4,z.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ne.workingColorSpace})}const Vt=I.state.transmissionRenderTarget[ut.id],Zt=ut.viewport||st;Vt.setSize(Zt.z*Y.transmissionResolutionScale,Zt.w*Y.transmissionResolutionScale);const zt=Y.getRenderTarget(),Jt=Y.getActiveCubeFace(),jt=Y.getActiveMipmapLevel();Y.setRenderTarget(Vt),Y.getClearColor(O),rt=Y.getClearAlpha(),rt<1&&Y.setClearColor(16777215,.5),Y.clear(),Fe&&de.render(gt);const ce=Y.toneMapping;Y.toneMapping=fa;const pe=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),I.setupLightsView(ut),re===!0&&Yt.setGlobalState(Y.clippingPlanes,ut),qi(A,gt,ut),xt.updateMultisampleRenderTarget(Vt),xt.updateRenderTargetMipmap(Vt),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Ee=0,xe=W.length;Ee<xe;Ee++){const Ke=W[Ee],{object:Ve,geometry:Mn,material:Xt,group:ln}=Ke;if(Xt.side===Va&&Ve.layers.test(ut.layers)){const De=Xt.side;Xt.side=ai,Xt.needsUpdate=!0,$l(Ve,gt,ut,Mn,Xt,ln),Xt.side=De,Xt.needsUpdate=!0,Kt=!0}}Kt===!0&&(xt.updateMultisampleRenderTarget(Vt),xt.updateRenderTargetMipmap(Vt))}Y.setRenderTarget(zt,Jt,jt),Y.setClearColor(O,rt),pe!==void 0&&(ut.viewport=pe),Y.toneMapping=ce}function qi(A,W,gt){const ut=W.isScene===!0?W.overrideMaterial:null;for(let ft=0,Vt=A.length;ft<Vt;ft++){const Zt=A[ft],{object:zt,geometry:Jt,group:jt}=Zt;let ce=Zt.material;ce.allowOverride===!0&&ut!==null&&(ce=ut),zt.layers.test(gt.layers)&&$l(zt,W,gt,Jt,ce,jt)}}function $l(A,W,gt,ut,ft,Vt){R!==null&&ft.isNodeMaterial&&R.setObject(A,ft),A.onBeforeRender(Y,W,gt,ut,ft,Vt),A.modelViewMatrix.multiplyMatrices(gt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ft.onBeforeRender(Y,W,gt,ut,A,Vt),ft.transparent===!0&&ft.side===Va&&ft.forceSinglePass===!1?(ft.side=ai,ft.needsUpdate=!0,Y.renderBufferDirect(gt,W,ut,ft,A,Vt),ft.side=vi,ft.needsUpdate=!0,Y.renderBufferDirect(gt,W,ut,ft,A,Vt),ft.side=Va):Y.renderBufferDirect(gt,W,ut,ft,A,Vt),A.onAfterRender(Y,W,gt,ut,ft,Vt)}function Or(A,W,gt){W.isScene!==!0&&(W=mn);const ut=ht.get(A),ft=I.state.lights,Vt=I.state.shadowsArray,Zt=ft.state.version,zt=Ot.getParameters(A,ft.state,Vt,W,gt,I.state.lightProbeGridArray),Jt=Ot.getProgramCacheKey(zt);let jt=ut.programs;ut.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,ut.fog=W.fog;const ce=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ut.envMap=Nt.get(A.envMap||ut.environment,ce),ut.envMapRotation=ut.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,jt===void 0&&(A.addEventListener("dispose",Si),jt=new Map,ut.programs=jt);let pe=jt.get(Jt);if(pe!==void 0){if(ut.currentProgram===pe&&ut.lightsStateVersion===Zt)return Ho(A,zt),pe}else zt.uniforms=Ot.getUniforms(A),R!==null&&A.isNodeMaterial&&R.build(A,gt,zt),A.onBeforeCompile(zt,Y),pe=Ot.acquireProgram(zt,Jt),jt.set(Jt,pe),ut.uniforms=zt.uniforms;const Kt=ut.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Kt.clippingPlanes=Yt.uniform),Ho(A,zt),ut.needsLights=ec(A),ut.lightsStateVersion=Zt,ut.needsLights&&(Kt.ambientLightColor.value=ft.state.ambient,Kt.lightProbe.value=ft.state.probe,Kt.sunLights.value=ft.state.sun,Kt.sunLightShadows.value=ft.state.sunShadow,Kt.directionalLights.value=ft.state.directional,Kt.directionalLightShadows.value=ft.state.directionalShadow,Kt.spotLights.value=ft.state.spot,Kt.spotLightShadows.value=ft.state.spotShadow,Kt.rectAreaLights.value=ft.state.rectArea,Kt.ltc_1.value=ft.state.rectAreaLTC1,Kt.ltc_2.value=ft.state.rectAreaLTC2,Kt.pointLights.value=ft.state.point,Kt.pointLightShadows.value=ft.state.pointShadow,Kt.hemisphereLights.value=ft.state.hemi,Kt.sunShadowMatrix.value=ft.state.sunShadowMatrix,Kt.sunShadowCascade.value=ft.state.sunShadowCascade,Kt.directionalShadowMatrix.value=ft.state.directionalShadowMatrix,Kt.spotLightMatrix.value=ft.state.spotLightMatrix,Kt.spotLightMap.value=ft.state.spotLightMap,Kt.pointShadowMatrix.value=ft.state.pointShadowMatrix),ut.lightProbeGrid=I.state.lightProbeGridArray.length>0,ut.currentProgram=pe,ut.uniformsList=null,pe}function Bo(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Qu.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Ho(A,W){const gt=ht.get(A);gt.outputColorSpace=W.outputColorSpace,gt.batching=W.batching,gt.batchingColor=W.batchingColor,gt.instancing=W.instancing,gt.instancingColor=W.instancingColor,gt.instancingMorph=W.instancingMorph,gt.skinning=W.skinning,gt.morphTargets=W.morphTargets,gt.morphNormals=W.morphNormals,gt.morphColors=W.morphColors,gt.morphTargetsCount=W.morphTargetsCount,gt.numClippingPlanes=W.numClippingPlanes,gt.numIntersection=W.numClipIntersection,gt.vertexAlphas=W.vertexAlphas,gt.vertexTangents=W.vertexTangents,gt.toneMapping=W.toneMapping}function Go(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;D.setFromMatrixPosition(W.matrixWorld);for(let gt=0,ut=A.length;gt<ut;gt++){const ft=A[gt];if(ft.texture!==null&&ft.boundingBox.containsPoint(D))return ft}return null}function Vo(A,W,gt,ut,ft){W.isScene!==!0&&(W=mn),xt.resetTextureUnits();const Vt=W.fog,Zt=ut.isMeshStandardMaterial||ut.isMeshLambertMaterial||ut.isMeshPhongMaterial?W.environment:null,zt=J===null?Y.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ne.workingColorSpace,Jt=ut.isMeshStandardMaterial||ut.isMeshLambertMaterial&&!ut.envMap||ut.isMeshPhongMaterial&&!ut.envMap,jt=Nt.get(ut.envMap||Zt,Jt),ce=ut.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,pe=!!gt.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),Kt=!!gt.morphAttributes.position,Ee=!!gt.morphAttributes.normal,xe=!!gt.morphAttributes.color;let Ke=fa;ut.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ke=Y.toneMapping);const Ve=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,Mn=Ve!==void 0?Ve.length:0,Xt=ht.get(ut),ln=I.state.lights;if(re===!0&&(oe===!0||A!==pt)){const Ae=A===pt&&ut.id===Q;Yt.setState(ut,A,Ae)}let De=!1;ut.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==ln.state.version||Xt.outputColorSpace!==zt||ft.isBatchedMesh&&Xt.batching===!1||!ft.isBatchedMesh&&Xt.batching===!0||ft.isBatchedMesh&&Xt.batchingColor===!0&&ft._colorsTexture===null||ft.isBatchedMesh&&Xt.batchingColor===!1&&ft._colorsTexture!==null||ft.isInstancedMesh&&Xt.instancing===!1||!ft.isInstancedMesh&&Xt.instancing===!0||ft.isSkinnedMesh&&Xt.skinning===!1||!ft.isSkinnedMesh&&Xt.skinning===!0||ft.isInstancedMesh&&Xt.instancingColor===!0&&ft.instanceColor===null||ft.isInstancedMesh&&Xt.instancingColor===!1&&ft.instanceColor!==null||ft.isInstancedMesh&&Xt.instancingMorph===!0&&ft.morphTexture===null||ft.isInstancedMesh&&Xt.instancingMorph===!1&&ft.morphTexture!==null||Xt.envMap!==jt||ut.fog===!0&&Xt.fog!==Vt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Yt.numPlanes||Xt.numIntersection!==Yt.numIntersection)||Xt.vertexAlphas!==ce||Xt.vertexTangents!==pe||Xt.morphTargets!==Kt||Xt.morphNormals!==Ee||Xt.morphColors!==xe||Xt.toneMapping!==Ke||Xt.morphTargetsCount!==Mn||!!Xt.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(De=!0):(De=!0,Xt.__version=ut.version);let kn=Xt.currentProgram;De===!0&&(kn=Or(ut,W,ft),R&&ut.isNodeMaterial&&R.onUpdateProgram(ut,kn,Xt));let si=!1,Wi=!1,Me=!1;const He=kn.getUniforms(),$e=Xt.uniforms;if(y.useProgram(kn.program)&&(si=!0,Wi=!0,Me=!0),ut.id!==Q&&(Q=ut.id,Wi=!0),Xt.needsLights){const Ae=Go(I.state.lightProbeGridArray,ft);Xt.lightProbeGrid!==Ae&&(Xt.lightProbeGrid=Ae,Wi=!0)}if(si||pt!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),He.setValue(tt,"projectionMatrix",A.projectionMatrix),He.setValue(tt,"viewMatrix",A.matrixWorldInverse);const cn=He.map.cameraPosition;cn!==void 0&&cn.setValue(tt,Ht.setFromMatrixPosition(A.matrixWorld)),z.logarithmicDepthBuffer&&He.setValue(tt,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&He.setValue(tt,"isOrthographic",A.isOrthographicCamera===!0),pt!==A&&(pt=A,Wi=!0,Me=!0)}if(Xt.needsLights&&(ln.state.sunShadowMap.length>0&&He.setValue(tt,"sunShadowMap",ln.state.sunShadowMap,xt),ln.state.directionalShadowMap.length>0&&He.setValue(tt,"directionalShadowMap",ln.state.directionalShadowMap,xt),ln.state.spotShadowMap.length>0&&He.setValue(tt,"spotShadowMap",ln.state.spotShadowMap,xt),ln.state.pointShadowMap.length>0&&He.setValue(tt,"pointShadowMap",ln.state.pointShadowMap,xt)),ft.isSkinnedMesh){He.setOptional(tt,ft,"bindMatrix"),He.setOptional(tt,ft,"bindMatrixInverse");const Ae=ft.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),He.setValue(tt,"boneTexture",Ae.boneTexture,xt))}ft.isBatchedMesh&&(He.setOptional(tt,ft,"batchingTexture"),He.setValue(tt,"batchingTexture",ft._matricesTexture,xt),He.setOptional(tt,ft,"batchingIdTexture"),He.setValue(tt,"batchingIdTexture",ft._indirectTexture,xt),He.setOptional(tt,ft,"batchingColorTexture"),ft._colorsTexture!==null&&He.setValue(tt,"batchingColorTexture",ft._colorsTexture,xt));const oi=gt.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&$.update(ft,gt,kn),(Wi||Xt.receiveShadow!==ft.receiveShadow)&&(Xt.receiveShadow=ft.receiveShadow,He.setValue(tt,"receiveShadow",ft.receiveShadow)),(ut.isMeshStandardMaterial||ut.isMeshLambertMaterial||ut.isMeshPhongMaterial)&&ut.envMap===null&&W.environment!==null&&($e.envMapIntensity.value=W.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=k3()),Wi){if(He.setValue(tt,"toneMappingExposure",Y.toneMappingExposure),Xt.needsLights&&tc($e,Me),Vt&&ut.fog===!0&&ee.refreshFogUniforms($e,Vt),ee.refreshMaterialUniforms($e,ut,nt,q,I.state.transmissionRenderTarget[A.id]),Xt.needsLights&&Xt.lightProbeGrid){const Ae=Xt.lightProbeGrid;$e.probesSH.value=Ae.texture,$e.probesMin.value.copy(Ae.boundingBox.min),$e.probesMax.value.copy(Ae.boundingBox.max),$e.probesResolution.value.copy(Ae.resolution)}Qu.upload(tt,Bo(Xt),$e,xt)}if(ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Qu.upload(tt,Bo(Xt),$e,xt),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&He.setValue(tt,"center",ft.center),He.setValue(tt,"modelViewMatrix",ft.modelViewMatrix),He.setValue(tt,"normalMatrix",ft.normalMatrix),He.setValue(tt,"modelMatrix",ft.matrixWorld),ut.uniformsGroups!==void 0){const Ae=ut.uniformsGroups;for(let cn=0,_a=Ae.length;cn<_a;cn++){const nc=Ae[cn];Dt.update(nc,kn),Dt.bind(nc,kn)}}return kn}function tc(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.sunLights.needsUpdate=W,A.sunLightShadows.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function ec(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,W,gt){const ut=ht.get(A);ut.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),ht.get(A.texture).__webglTexture=W,ht.get(A.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:gt,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const gt=ht.get(A);gt.__webglFramebuffer=W,gt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,gt=0){J=A,V=W,L=gt;let ut=null,ft=!1,Vt=!1;if(A){const zt=ht.get(A);if(zt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(tt.FRAMEBUFFER,zt.__webglFramebuffer),st.copy(A.viewport),vt.copy(A.scissor),Ct=A.scissorTest,y.viewport(st),y.scissor(vt),y.setScissorTest(Ct),Q=-1;return}else if(zt.__webglFramebuffer===void 0)xt.setupRenderTarget(A);else if(zt.__hasExternalTextures)xt.rebindTextures(A,ht.get(A.texture).__webglTexture,ht.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ce=A.depthTexture;if(zt.__boundDepthTexture!==ce){if(ce!==null&&ht.has(ce)&&(A.width!==ce.image.width||A.height!==ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xt.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Vt=!0);const jt=ht.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(jt[W])?ut=jt[W][gt]:ut=jt[W],ft=!0):A.samples>0&&xt.useMultisampledRTT(A)===!1?ut=ht.get(A).__webglMultisampledFramebuffer:Array.isArray(jt)?ut=jt[gt]:ut=jt,st.copy(A.viewport),vt.copy(A.scissor),Ct=A.scissorTest}else st.copy(lt).multiplyScalar(nt).floor(),vt.copy(Rt).multiplyScalar(nt).floor(),Ct=ge;if(gt!==0&&(ut=N),y.bindFramebuffer(tt.FRAMEBUFFER,ut)&&y.drawBuffers(A,ut),y.viewport(st),y.scissor(vt),y.setScissorTest(Ct),ft){const zt=ht.get(A.texture);tt.framebufferTexture2D(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_CUBE_MAP_POSITIVE_X+W,zt.__webglTexture,gt)}else if(Vt){const zt=W;for(let Jt=0;Jt<A.textures.length;Jt++){const jt=ht.get(A.textures[Jt]);tt.framebufferTextureLayer(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0+Jt,jt.__webglTexture,gt,zt)}}else if(A!==null&&gt!==0){const zt=ht.get(A.texture);tt.framebufferTexture2D(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_2D,zt.__webglTexture,gt)}Q=-1};function xi(A){const W=ht.get(A);return(W.__readFormat!==A.format||W.__readType!==A.type)&&(W.__readFormat=A.format,W.__readType=A.type,W.__formatReadable=z.textureFormatReadable(A.format),W.__typeReadable=z.textureTypeReadable(A.type)),W}this.readRenderTargetPixels=function(A,W,gt,ut,ft,Vt,Zt,zt=0){if(!(A&&A.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Zt!==void 0&&(Jt=Jt[Zt]),Jt){y.bindFramebuffer(tt.FRAMEBUFFER,Jt);try{const jt=A.textures[zt],ce=jt.format,pe=jt.type;A.textures.length>1&&tt.readBuffer(tt.COLOR_ATTACHMENT0+zt);const Kt=xi(jt);if(Kt.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-ut&&gt>=0&&gt<=A.height-ft&&tt.readPixels(W,gt,ut,ft,It.convert(ce),It.convert(pe),Vt)}finally{const jt=J!==null?ht.get(J).__webglFramebuffer:null;y.bindFramebuffer(tt.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(A,W,gt,ut,ft,Vt,Zt,zt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Zt!==void 0&&(Jt=Jt[Zt]),Jt)if(W>=0&&W<=A.width-ut&&gt>=0&&gt<=A.height-ft){y.bindFramebuffer(tt.FRAMEBUFFER,Jt);const jt=A.textures[zt],ce=jt.format,pe=jt.type;A.textures.length>1&&tt.readBuffer(tt.COLOR_ATTACHMENT0+zt);const Kt=xi(jt);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=tt.createBuffer();tt.bindBuffer(tt.PIXEL_PACK_BUFFER,Ee),tt.bufferData(tt.PIXEL_PACK_BUFFER,Vt.byteLength,tt.STREAM_READ),tt.readPixels(W,gt,ut,ft,It.convert(ce),It.convert(pe),0),tt.bindBuffer(tt.PIXEL_PACK_BUFFER,null);const xe=J!==null?ht.get(J).__webglFramebuffer:null;y.bindFramebuffer(tt.FRAMEBUFFER,xe);const Ke=tt.fenceSync(tt.SYNC_GPU_COMMANDS_COMPLETE,0);return tt.flush(),await uT(tt,Ke,4),tt.bindBuffer(tt.PIXEL_PACK_BUFFER,Ee),tt.getBufferSubData(tt.PIXEL_PACK_BUFFER,0,Vt),tt.bindBuffer(tt.PIXEL_PACK_BUFFER,null),tt.deleteBuffer(Ee),tt.deleteSync(Ke),Vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,gt=0){const ut=Math.pow(2,-gt),ft=Math.floor(A.image.width*ut),Vt=Math.floor(A.image.height*ut),Zt=W!==null?W.x:0,zt=W!==null?W.y:0;xt.setTexture2D(A,0),tt.copyTexSubImage2D(tt.TEXTURE_2D,gt,0,0,Zt,zt,ft,Vt),y.unbindTexture()},this.copyTextureToTexture=function(A,W,gt=null,ut=null,ft=0,Vt=0){let Zt,zt,Jt,jt,ce,pe,Kt,Ee,xe;const Ke=A.isCompressedTexture?A.mipmaps[Vt]:A.image;if(gt!==null)Zt=gt.max.x-gt.min.x,zt=gt.max.y-gt.min.y,Jt=gt.isBox3?gt.max.z-gt.min.z:1,jt=gt.min.x,ce=gt.min.y,pe=gt.isBox3?gt.min.z:0;else{const $e=Math.pow(2,-ft);Zt=Math.floor(Ke.width*$e),zt=Math.floor(Ke.height*$e),A.isDataArrayTexture?Jt=Ke.depth:A.isData3DTexture?Jt=Math.floor(Ke.depth*$e):Jt=1,jt=0,ce=0,pe=0}ut!==null?(Kt=ut.x,Ee=ut.y,xe=ut.z):(Kt=0,Ee=0,xe=0);const Ve=It.convert(W.format),Mn=It.convert(W.type);let Xt;W.isData3DTexture?(xt.setTexture3D(W,0),Xt=tt.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(xt.setTexture2DArray(W,0),Xt=tt.TEXTURE_2D_ARRAY):(xt.setTexture2D(W,0),Xt=tt.TEXTURE_2D),y.activeTexture(tt.TEXTURE0),y.pixelStorei(tt.UNPACK_FLIP_Y_WEBGL,W.flipY),y.pixelStorei(tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),y.pixelStorei(tt.UNPACK_ALIGNMENT,W.unpackAlignment);const ln=y.getParameter(tt.UNPACK_ROW_LENGTH),De=y.getParameter(tt.UNPACK_IMAGE_HEIGHT),kn=y.getParameter(tt.UNPACK_SKIP_PIXELS),si=y.getParameter(tt.UNPACK_SKIP_ROWS),Wi=y.getParameter(tt.UNPACK_SKIP_IMAGES);y.pixelStorei(tt.UNPACK_ROW_LENGTH,Ke.width),y.pixelStorei(tt.UNPACK_IMAGE_HEIGHT,Ke.height),y.pixelStorei(tt.UNPACK_SKIP_PIXELS,jt),y.pixelStorei(tt.UNPACK_SKIP_ROWS,ce),y.pixelStorei(tt.UNPACK_SKIP_IMAGES,pe);const Me=A.isDataArrayTexture||A.isData3DTexture,He=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const $e=ht.get(A),oi=ht.get(W),Ae=ht.get($e.__renderTarget),cn=ht.get(oi.__renderTarget);y.bindFramebuffer(tt.READ_FRAMEBUFFER,Ae.__webglFramebuffer),y.bindFramebuffer(tt.DRAW_FRAMEBUFFER,cn.__webglFramebuffer);for(let _a=0;_a<Jt;_a++)Me&&(tt.framebufferTextureLayer(tt.READ_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,ht.get(A).__webglTexture,ft,pe+_a),tt.framebufferTextureLayer(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,ht.get(W).__webglTexture,Vt,xe+_a)),tt.blitFramebuffer(jt,ce,Zt,zt,Kt,Ee,Zt,zt,tt.DEPTH_BUFFER_BIT,tt.NEAREST);y.bindFramebuffer(tt.READ_FRAMEBUFFER,null),y.bindFramebuffer(tt.DRAW_FRAMEBUFFER,null)}else if(ft!==0||A.isRenderTargetTexture||ht.has(A)){const $e=ht.get(A),oi=ht.get(W);y.bindFramebuffer(tt.READ_FRAMEBUFFER,H),y.bindFramebuffer(tt.DRAW_FRAMEBUFFER,k);for(let Ae=0;Ae<Jt;Ae++)Me?tt.framebufferTextureLayer(tt.READ_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,$e.__webglTexture,ft,pe+Ae):tt.framebufferTexture2D(tt.READ_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_2D,$e.__webglTexture,ft),He?tt.framebufferTextureLayer(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,oi.__webglTexture,Vt,xe+Ae):tt.framebufferTexture2D(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_2D,oi.__webglTexture,Vt),ft!==0?tt.blitFramebuffer(jt,ce,Zt,zt,Kt,Ee,Zt,zt,tt.COLOR_BUFFER_BIT,tt.NEAREST):He?tt.copyTexSubImage3D(Xt,Vt,Kt,Ee,xe+Ae,jt,ce,Zt,zt):tt.copyTexSubImage2D(Xt,Vt,Kt,Ee,jt,ce,Zt,zt);y.bindFramebuffer(tt.READ_FRAMEBUFFER,null),y.bindFramebuffer(tt.DRAW_FRAMEBUFFER,null)}else He?A.isDataTexture||A.isData3DTexture?tt.texSubImage3D(Xt,Vt,Kt,Ee,xe,Zt,zt,Jt,Ve,Mn,Ke.data):W.isCompressedArrayTexture?tt.compressedTexSubImage3D(Xt,Vt,Kt,Ee,xe,Zt,zt,Jt,Ve,Ke.data):tt.texSubImage3D(Xt,Vt,Kt,Ee,xe,Zt,zt,Jt,Ve,Mn,Ke):A.isDataTexture?tt.texSubImage2D(tt.TEXTURE_2D,Vt,Kt,Ee,Zt,zt,Ve,Mn,Ke.data):A.isCompressedTexture?tt.compressedTexSubImage2D(tt.TEXTURE_2D,Vt,Kt,Ee,Ke.width,Ke.height,Ve,Ke.data):tt.texSubImage2D(tt.TEXTURE_2D,Vt,Kt,Ee,Zt,zt,Ve,Mn,Ke);y.pixelStorei(tt.UNPACK_ROW_LENGTH,ln),y.pixelStorei(tt.UNPACK_IMAGE_HEIGHT,De),y.pixelStorei(tt.UNPACK_SKIP_PIXELS,kn),y.pixelStorei(tt.UNPACK_SKIP_ROWS,si),y.pixelStorei(tt.UNPACK_SKIP_IMAGES,Wi),Vt===0&&W.generateMipmaps&&tt.generateMipmap(Xt),y.unbindTexture()},this.initRenderTarget=function(A){ht.get(A).__webglFramebuffer===void 0&&xt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?xt.setTextureCube(A,0):A.isData3DTexture?xt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?xt.setTexture2DArray(A,0):xt.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){V=0,L=0,J=null,y.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ne._getUnpackColorSpace()}}function Do(o){const e=new Uint32Array(1);return crypto.getRandomValues(e),Promise.resolve(e[0]%o+1)}const So=Math.PI/180,W3=3,Y3=7,Z3=.98,Qn=o=>1-(1-o)**3,wM=o=>new ze().setFromEuler(new Xn(o.x*So,o.y*So,o.z*So,"XYZ")),Sp=o=>(o%360+540)%360-180,DM=o=>{const e=new K(o.x,o.y,o.z),i=e.length();return i<1e-9?new K(0,1,0):(e.divideScalar(i),o.w<0&&e.negate(),e)},K3=(o,e)=>{const i=u=>wM({x:o.x+(e.x-o.x)*Qn(u),y:o.y+(e.y-o.y)*Qn(u),z:o.z+(e.z-o.z)*Qn(u)}),r=i(Z3),l=i(1);return DM(l.multiply(r.clone().invert()))},No=(o,e,i)=>{const r=wM(o),l=DM(r.clone().invert().multiply(e)).applyQuaternion(r).normalize(),u=Math.random()*Math.PI,d=new ze().setFromAxisAngle(l,-u).multiply(e),h=new Xn().setFromQuaternion(d,"XYZ"),p={x:h.x/So,y:h.y/So,z:h.z/So},m=[];for(let g=W3;g<=Y3;g++){const S=i-g;if(!(S<1))for(const E of[1,-1])for(const w of[1,-1])for(const P of[1,-1]){const M={x:o.x+E*360*g,y:o.y+w*360*S,z:o.z+P*360*i};M.x+=Sp(p.x-M.x),M.y+=Sp(p.y-M.y),M.z+=Sp(p.z-M.z);const x=K3(o,M).dot(l);m.push({rotation:M,dot:x})}}const v=m.filter(g=>g.dot>0);return v.length>0?v[Math.floor(Math.random()*v.length)].rotation:m.reduce((g,S)=>S.dot>g.dot?S:g).rotation};let Dr=null,Ju=0,xo=null,rx=!1;const Uo=()=>rx?!1:(rx=!0,!0),Lo=()=>{if(xo!==null&&(clearTimeout(xo),xo=null),Ju+=1,!Dr){const o=new Ni(28,1,.1,100);o.position.set(0,0,7),o.lookAt(0,0,0);const e=new q3({alpha:!0,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setClearColor(0,0),Dr={renderer:e,camera:o}}return Dr},Oo=()=>{Ju-=1,!(Ju>0||xo!==null)&&(xo=setTimeout(()=>{xo=null,!(Ju>0||!Dr)&&(Dr.renderer.domElement.remove(),Dr.renderer.dispose(),Dr.renderer.forceContextLoss(),Dr=null)},0))},ds={red:{hex:14034996,cssTop:[214,40,52],cssBottom:[140,18,28],label:"#ffffff"},green:{hex:769384,cssTop:[11,189,104],cssBottom:[9,165,90],label:"#ffffff"},white:{hex:15790320,cssTop:[240,240,240],cssBottom:[200,200,200],label:"#111827"},black:{hex:1052691,cssTop:[16,16,19],cssBottom:[3,3,5],label:"#ffffff"},blue:{hex:1785819,cssTop:[27,63,219],cssBottom:[17,38,140],label:"#ffffff"},yellow:{hex:16761856,cssTop:[255,196,0],cssBottom:[214,152,0],label:"#111827"}},Xm=[4,6,8,10,12,20],km=["red","yellow","green","blue","black","white"];function sx(o,e){return o[(o.indexOf(e)+1)%o.length]}const xp={sides:6,color:"red",translucent:!0},Q3=.87,Po=o=>o?Q3:1;function J3(){const o=new URLSearchParams(window.location.search),e=Number(o.get("s")),i=Xm.includes(e)?e:xp.sides,r=o.get("c")?.toLowerCase(),l=r!==void 0&&km.includes(r)?r:xp.color,u=(o.get("translucent")??o.get("t"))?.toLowerCase(),d=u==="true"?!0:u==="false"?!1:xp.translucent;return{sides:i,color:l,translucent:d}}var j3=Wx();function Io({isRolling:o,error:e,result:i}){return j3.createPortal(ie.jsx("p",{className:"hint",children:o?"Rolling...":e||(i!==null?`You rolled ${i}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")}),document.body)}const ox=65,lx=.5,$3=10,t2=1500,e2=750,n2=260,Ia=Math.PI/180,i2=1.01,a2=2,r2=.95,s2=1.9,o2=.07,Hl=512,cx=[.246667,.5,.753333],l2=.055733,c2="#ffffff",ux=(o,e,i)=>Math.min(i,Math.max(e,o)),u2=[[0,0,1],[0,1,0],[1,0,0],[-1,0,0],[0,-1,0],[0,0,-1]],f2={1:[[2,2]],2:[[1,1],[3,3]],3:[[1,1],[2,2],[3,3]],4:[[1,1],[1,3],[3,1],[3,3]],5:[[1,1],[1,3],[2,2],[3,1],[3,3]],6:[[1,1],[1,3],[2,1],[2,3],[3,1],[3,3]]},fx=(o,e,i)=>[o[0]+(e[0]-o[0])*i,o[1]+(e[1]-o[1])*i,o[2]+(e[2]-o[2])*i],d2=o=>{const e=[],i=o/2,r=[1,-1];for(const l of[0,1,2]){const[u,d]=[0,1,2].filter(h=>h!==l);for(const h of r){const p=[[1,1],[1,-1],[-1,-1],[-1,1]].map(([v,g])=>{const S=[0,0,0];return S[l]=h,S[u]=v,S[d]=g,S}),m=[];for(let v=0;v<4;v++){const g=p[v],S=p[(v+1)%4];m.push(fx(g,S,i)),m.push(fx(S,g,i))}e.push(m)}}for(const l of r)for(const u of r)for(const d of r)e.push([[l*(1-o),u,d],[l,u*(1-o),d],[l,u,d*(1-o)]]);return e},h2=d2(o2),p2=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new K(e,i,r)},m2=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],v=Math.sqrt(h*h+p*p+m*m),g=new K(h/v,p/v,m/v);return g.dot(e)<0&&g.negate(),g},g2=o=>{const e=new K(...o).normalize(),i=Math.abs(e.y)>.9?new K(0,0,1):new K(0,1,0),r=i.clone().sub(e.clone().multiplyScalar(i.dot(e))).normalize(),l=new K().crossVectors(r,e).normalize(),u=new Je().makeBasis(l,r,e);return{normal:e,up:r,orientation:new ze().setFromRotationMatrix(u)}},dx=u2.map(g2),_2=o=>{const e=new K(0,0,1),i=new ze().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new ze().setFromAxisAngle(new K(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},hx=(o,e,i)=>{const r=document.createElement("canvas");r.width=Hl,r.height=Hl;const l=r.getContext("2d");if(!l)return null;const u=l2*Hl;l.fillStyle=e;for(const[p,m]of f2[o]){const v=cx[m-1]*Hl,g=cx[p-1]*Hl;l.beginPath(),l.arc(v,g,u,0,Math.PI*2),l.fill()}const d=new To(r);d.colorSpace=wn;const h=new Nr({map:d,transparent:!0,side:vi,depthWrite:!1});return new pn(new ma(i,i),h)},v2=o=>{const e=new Xn().setFromQuaternion(o,"XYZ");return{x:e.x/Ia,y:e.y/Ia,z:e.z/Ia}};function S2({color:o="red",translucent:e=!0}){const i=_t.useRef(null),r=_t.useRef(null),l=_t.useRef(null),u=_t.useRef(null),d=_t.useRef(null),h=_t.useRef(null),p=_t.useRef({x:0,y:0,z:0}),m=_t.useRef({x:0,y:0,z:0}),v=_t.useRef(null),g=_t.useRef(!1),[S,E]=_t.useState(!1),[w,P]=_t.useState(!1),[M,x]=_t.useState(null),[G,j]=_t.useState(null),D=_t.useCallback(T=>{p.current=T,r.current?.rotation.set(T.x*Ia,T.y*Ia,T.z*Ia)},[]),U=_t.useCallback((T,R)=>{h.current&&cancelAnimationFrame(h.current);const N={...p.current},H=performance.now();return new Promise(k=>{const V=L=>{const J=Math.min((L-H)/R,1),Q=Qn(J);D({x:N.x+(T.x-N.x)*Q,y:N.y+(T.y-N.y)*Q,z:N.z+(T.z-N.z)*Q}),J<1?h.current=requestAnimationFrame(V):(h.current=null,k())};h.current=requestAnimationFrame(V)})},[D]),I=_t.useCallback((T,R)=>{h.current&&cancelAnimationFrame(h.current);const N=r.current;if(!N)return Promise.resolve();const H=N.quaternion.clone(),k=performance.now();return new Promise(V=>{const L=J=>{const Q=Math.min((J-k)/R,1);N.quaternion.slerpQuaternions(H,T,Qn(Q)),p.current=v2(N.quaternion),Q<1?h.current=requestAnimationFrame(L):(h.current=null,V())};h.current=requestAnimationFrame(L)})},[]),B=_t.useCallback(async()=>{g.current=!0,E(!0),x(null),j(null);try{const T=await Do(6),R=_2(dx[T-1]),N=p.current,H=No(N,R,$3);await U(H,t2),await I(R,e2),m.current=p.current,E(!1),g.current=!1,x(T)}catch(T){E(!1),g.current=!1,j(T instanceof Error?T.message:"Roll failed.")}},[I,U]),b=_t.useCallback(T=>{if(g.current)return;const R=T.currentTarget.getBoundingClientRect();v.current={centerX:R.left+R.width/2,centerY:R.top+R.height/2,halfWidth:R.width/2,halfHeight:R.height/2,nx:0,ny:0},T.currentTarget.setPointerCapture(T.pointerId),P(!0)},[]),F=_t.useCallback(T=>{const R=v.current;!R||g.current||(R.nx=ux((T.clientX-R.centerX)/R.halfWidth,-1,1),R.ny=ux((T.clientY-R.centerY)/R.halfHeight,-1,1),!d.current&&(d.current=requestAnimationFrame(()=>{d.current=null;const N=m.current;D({x:N.x-R.ny*ox,y:N.y+R.nx*ox,z:N.z})})))},[D]),Y=_t.useCallback(()=>{const T=v.current;if(!T)return;v.current=null,P(!1),d.current&&(cancelAnimationFrame(d.current),d.current=null),Math.abs(T.nx)>=lx||Math.abs(T.ny)>=lx?B():U(m.current,n2)},[U,B]);return _t.useEffect(()=>{const T=new Eo,R=new Jn,N=[],H=[];for(const st of h2){const vt=p2(st),Ct=m2(st,vt),O=Ct.x,rt=Ct.y,St=Ct.z,[q,nt,Et]=st,wt=[nt[0]-q[0],nt[1]-q[1],nt[2]-q[2]],lt=[Et[0]-q[0],Et[1]-q[1],Et[2]-q[2]],Rt=wt[1]*lt[2]-wt[2]*lt[1],ge=wt[2]*lt[0]-wt[0]*lt[2],ne=wt[0]*lt[1]-wt[1]*lt[0],oe=Rt*vt.x+ge*vt.y+ne*vt.z>=0?st:[...st].reverse();for(let Ut=1;Ut<oe.length-1;Ut++)N.push(...oe[0],...oe[Ut],...oe[Ut+1]),H.push(O,rt,St,O,rt,St,O,rt,St)}R.setAttribute("position",new hn(N,3)),R.setAttribute("normal",new hn(H,3));const k=ds[o],V=Po(e),L=new pn(R,new bo({color:k.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:V,depthWrite:!e}));L.rotation.set(p.current.x*Ia,p.current.y*Ia,p.current.z*Ia);const J=new ze().setFromAxisAngle(new K(0,1,0),Math.PI);dx.forEach((st,vt)=>{const Ct=vt+1,O=hx(Ct,k.label,a2);if(!O)return;O.position.copy(st.normal).multiplyScalar(i2),O.quaternion.copy(st.orientation),O.renderOrder=1,L.add(O);const rt=hx(Ct,c2,s2);rt&&(rt.renderOrder=-1,rt.position.copy(st.normal).multiplyScalar(r2),rt.quaternion.copy(st.orientation).multiply(J),L.add(rt))}),T.add(L),T.add(new Co(16777215,1)),T.add(new Ao(16777215,12303291,1));const pt=new Ro(16777215,1);return pt.position.set(3,4,5),T.add(pt),r.current=L,l.current=T,()=>{h.current&&cancelAnimationFrame(h.current),L.geometry.dispose(),L.material.dispose(),L.children.forEach(st=>{const vt=st;vt.geometry.dispose(),vt.material.map?.dispose(),vt.material.dispose()}),r.current=null,l.current=null}},[o,e]),_t.useEffect(()=>{const T=i.current;if(!T)return;const{renderer:R,camera:N}=Lo(),H=()=>{const L=T.clientWidth,J=T.clientHeight;R.setSize(L,J,!1),N.aspect=L/J,N.updateProjectionMatrix()},k=new ResizeObserver(H);k.observe(T),H(),l.current&&R.render(l.current,N),Uo()&&R.getContext().finish(),T.appendChild(R.domElement);const V=()=>{u.current=requestAnimationFrame(V),l.current&&R.render(l.current,N)};return V(),()=>{R.domElement.remove(),k.disconnect(),u.current&&cancelAnimationFrame(u.current),Oo()}},[]),ie.jsxs("div",{className:`stage stage--six-sided${w?" is-dragging":""}`,onPointerDown:b,onPointerMove:F,onPointerUp:Y,onPointerCancel:Y,children:[ie.jsx("div",{ref:i,className:"three-scene"}),ie.jsx(Io,{isRolling:S,error:G,result:M})]})}const px=65,mx=.5,x2=10,M2=1500,y2=750,E2=260,sa=Math.PI/180,gx=.8,za=[[.981495,.981495,.981495],[.981495,-.981495,-.981495],[-.981495,.981495,-.981495],[-.981495,-.981495,.981495]],la=[[1,3,2],[0,2,3],[0,3,1],[0,1,2]],dm=[1,2,3,4],_x=[[-.122687,-.736122,-.122687],[-.736122,-.122687,-.122687],[-.122687,-.122687,-.736122],[-.122687,.736122,.122687],[-.736122,.122687,.122687],[-.122687,.122687,.736122],[.122687,-.122687,.736122],[.122687,-.736122,.122687],[.736122,-.122687,.122687],[.736122,.122687,-.122687],[.122687,.122687,-.736122],[.122687,.736122,-.122687]],T2=[180,180,0,180,0,180,0,180,180,0,180,180],vx={x:-177.2356,y:55.25,z:45},Sx=(o,e,i)=>Math.min(i,Math.max(e,o)),Mp=(o,e,i)=>[o[0]+(e[0]-o[0])*i,o[1]+(e[1]-o[1])*i,o[2]+(e[2]-o[2])*i],NM=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],v=Math.sqrt(h*h+p*p+m*m),g=new K(h/v,p/v,m/v);return g.dot(e)<0&&g.negate(),g},UM=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new K(e,i,r)},hm=la.map(o=>{const e=o.map(r=>za[r]),i=UM(e);return{normal:NM(e,i),center:i}}),b2=.07,A2=o=>{const e=[];for(const i of la){const r=[];for(let l=0;l<3;l++){const u=za[i[l]],d=za[i[(l+1)%3]],h=Math.hypot(d[0]-u[0],d[1]-u[1],d[2]-u[2]),p=o/h;r.push(Mp(u,d,p)),r.push(Mp(d,u,p))}e.push(r)}for(let i=0;i<za.length;i++){const r=[];for(let l=0;l<za.length;l++){if(l===i)continue;const u=za[i],d=za[l],h=Math.hypot(d[0]-u[0],d[1]-u[1],d[2]-u[2]);r.push(Mp(u,d,o/h))}e.push(r)}return e},R2=A2(b2),C2=(o,e)=>{const i=la[o][e],r=la[o][(e+1)%3];for(let l=0;l<la.length;l++)if(l!==o&&la[l].includes(i)&&la[l].includes(r))return dm[l];return dm[o]},w2=o=>{const{normal:e}=hm[o],i=new ze().setFromUnitVectors(e,new K(0,-1,0)),r=(o+1)%la.length,l=hm[r].normal.clone().applyQuaternion(i),u=Math.atan2(l.x,l.z);return new ze().setFromAxisAngle(new K(0,1,0),-u).multiply(i)},D2="#ffffff",xx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const l=new To(i);l.colorSpace=wn;const u=new Nr({map:l,transparent:!0,side:vi,depthWrite:!1});return new pn(new ma(gx,gx),u)},N2=o=>{const e=new Xn().setFromQuaternion(o,"XYZ");return{x:e.x/sa,y:e.y/sa,z:e.z/sa}};function U2({color:o="red",translucent:e=!0}){const i=_t.useRef(null),r=_t.useRef(null),l=_t.useRef(null),u=_t.useRef(null),d=_t.useRef(null),h=_t.useRef(null),p=_t.useRef({...vx}),m=_t.useRef({...vx}),v=_t.useRef(null),g=_t.useRef(!1),[S,E]=_t.useState(!1),[w,P]=_t.useState(!1),[M,x]=_t.useState(null),[G,j]=_t.useState(null),D=_t.useCallback(T=>{p.current=T,r.current?.rotation.set(T.x*sa,T.y*sa,T.z*sa)},[]),U=_t.useCallback((T,R)=>{h.current&&cancelAnimationFrame(h.current);const N={...p.current},H=performance.now();return new Promise(k=>{const V=L=>{const J=Math.min((L-H)/R,1),Q=Qn(J);D({x:N.x+(T.x-N.x)*Q,y:N.y+(T.y-N.y)*Q,z:N.z+(T.z-N.z)*Q}),J<1?h.current=requestAnimationFrame(V):(h.current=null,k())};h.current=requestAnimationFrame(V)})},[D]),I=_t.useCallback((T,R)=>{h.current&&cancelAnimationFrame(h.current);const N=r.current;if(!N)return Promise.resolve();const H=N.quaternion.clone(),k=performance.now();return new Promise(V=>{const L=J=>{const Q=Math.min((J-k)/R,1);N.quaternion.slerpQuaternions(H,T,Qn(Q)),p.current=N2(N.quaternion),Q<1?h.current=requestAnimationFrame(L):(h.current=null,V())};h.current=requestAnimationFrame(L)})},[]),B=_t.useCallback(async()=>{g.current=!0,E(!0),x(null),j(null);try{const T=await Do(4),R=dm.indexOf(T),N=w2(R),H=p.current,k=No(H,N,x2);await U(k,M2),await I(N,y2),m.current=p.current,E(!1),g.current=!1,x(T)}catch(T){E(!1),g.current=!1,j(T instanceof Error?T.message:"Roll failed.")}},[I,U]),b=_t.useCallback(T=>{if(g.current)return;const R=T.currentTarget.getBoundingClientRect();v.current={centerX:R.left+R.width/2,centerY:R.top+R.height/2,halfWidth:R.width/2,halfHeight:R.height/2,nx:0,ny:0},T.currentTarget.setPointerCapture(T.pointerId),P(!0)},[]),F=_t.useCallback(T=>{const R=v.current;!R||g.current||(R.nx=Sx((T.clientX-R.centerX)/R.halfWidth,-1,1),R.ny=Sx((T.clientY-R.centerY)/R.halfHeight,-1,1),!d.current&&(d.current=requestAnimationFrame(()=>{d.current=null;const N=m.current;D({x:N.x-R.ny*px,y:N.y+R.nx*px,z:N.z})})))},[D]),Y=_t.useCallback(()=>{const T=v.current;if(!T)return;v.current=null,P(!1),d.current&&(cancelAnimationFrame(d.current),d.current=null),Math.abs(T.nx)>=mx||Math.abs(T.ny)>=mx?B():U(m.current,E2)},[U,B]);return _t.useEffect(()=>{const T=new Eo,R=new Jn,N=[],H=[];for(const st of R2){const vt=st,Ct=UM(vt),O=NM(vt,Ct),rt=O.x,St=O.y,q=O.z,[nt,Et,wt]=vt,lt=[Et[0]-nt[0],Et[1]-nt[1],Et[2]-nt[2]],Rt=[wt[0]-nt[0],wt[1]-nt[1],wt[2]-nt[2]],ge=lt[1]*Rt[2]-lt[2]*Rt[1],ne=lt[2]*Rt[0]-lt[0]*Rt[2],re=lt[0]*Rt[1]-lt[1]*Rt[0],Ut=ge*Ct.x+ne*Ct.y+re*Ct.z>=0?vt:[...vt].reverse();for(let Ht=1;Ht<Ut.length-1;Ht++)N.push(...Ut[0],...Ut[Ht],...Ut[Ht+1]),H.push(rt,St,q,rt,St,q,rt,St,q)}R.setAttribute("position",new hn(N,3)),R.setAttribute("normal",new hn(H,3));const k=ds[o],V=Po(e),L=new pn(R,new bo({color:k.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:V,depthWrite:!e}));L.rotation.set(p.current.x*sa,p.current.y*sa,p.current.z*sa);const J=new ze().setFromAxisAngle(new K(1,0,0),Math.PI),Q=()=>{hm.forEach(({normal:st,center:vt},Ct)=>{for(let O=0;O<3;O++){const rt=Ct*3+O,St=C2(Ct,O),q=la[Ct][O],nt=la[Ct][(O+1)%3],Et=new K().addVectors(new K(...za[q]),new K(...za[nt])).multiplyScalar(.5),wt=vt.clone().sub(Et).normalize(),lt=new K().crossVectors(wt,st),Rt=new ze().setFromRotationMatrix(new Je().makeBasis(lt,wt,st)),ge=new ze().setFromAxisAngle(new K(0,0,1),T2[rt]*sa),ne=xx(St,k.label);ne&&(ne.renderOrder=1,ne.position.copy(new K(..._x[rt])).addScaledVector(st,.01),ne.quaternion.copy(Rt),L.add(ne));const re=xx(St,D2);re&&(re.renderOrder=-1,re.position.copy(new K(..._x[rt])).addScaledVector(st,-.05),re.quaternion.copy(Rt).multiply(ge).multiply(J),L.add(re))}})};document.fonts.load("700 160px dice-font").then(Q),T.add(L),T.add(new Co(16777215,1)),T.add(new Ao(16777215,12303291,1));const pt=new Ro(16777215,1);return pt.position.set(3,4,5),T.add(pt),r.current=L,l.current=T,()=>{h.current&&cancelAnimationFrame(h.current),R.dispose(),L.material.dispose(),L.children.forEach(st=>{const vt=st;vt.geometry.dispose(),vt.material.map?.dispose(),vt.material.dispose()}),r.current=null,l.current=null}},[o,e]),_t.useEffect(()=>{const T=i.current;if(!T)return;const{renderer:R,camera:N}=Lo(),H=()=>{const L=T.clientWidth,J=T.clientHeight;R.setSize(L,J,!1),N.aspect=L/J,N.updateProjectionMatrix()},k=new ResizeObserver(H);k.observe(T),H(),l.current&&R.render(l.current,N),Uo()&&R.getContext().finish(),T.appendChild(R.domElement);const V=()=>{u.current=requestAnimationFrame(V),l.current&&R.render(l.current,N)};return V(),()=>{R.domElement.remove(),k.disconnect(),u.current&&cancelAnimationFrame(u.current),Oo()}},[]),ie.jsxs("div",{className:`stage stage--four-sided${w?" is-dragging":""}`,onPointerDown:b,onPointerMove:F,onPointerUp:Y,onPointerCancel:Y,children:[ie.jsx("div",{ref:i,className:"three-scene"}),ie.jsx(Io,{isRolling:S,error:G,result:M})]})}const Mx=65,yx=.5,L2=10,O2=1500,P2=750,I2=260,Fa=Math.PI/180,Ex=1.08,Tx=.864,bx=(o,e,i)=>Math.min(i,Math.max(e,o)),LM=[[1,1,1],[-1,1,1],[-1,1,-1],[1,1,-1],[1,-1,1],[-1,-1,1],[-1,-1,-1],[1,-1,-1]],z2=o=>{const e=new K(...o).normalize(),i=Math.abs(e.y)>.9?new K(0,0,1):new K(0,1,0),r=i.clone().sub(e.clone().multiplyScalar(i.dot(e))).normalize(),l=new K().crossVectors(r,e).normalize(),u=new Je().makeBasis(l,r,e);return{normal:e,up:r,orientation:new ze().setFromRotationMatrix(u)}},Ax=LM.map(z2),yp=(o,e,i)=>[o[0]+(e[0]-o[0])*i,o[1]+(e[1]-o[1])*i,o[2]+(e[2]-o[2])*i],F2=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],v=Math.sqrt(h*h+p*p+m*m),g=new K(h/v,p/v,m/v);return g.dot(e)<0&&g.negate(),g},OM=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new K(e,i,r)},B2=.07,po=1.7,ss=[[po,0,0],[-po,0,0],[0,po,0],[0,-po,0],[0,0,po],[0,0,-po]],H2=LM.map(([o,e,i])=>[o>0?0:1,e>0?2:3,i>0?4:5]),G2=o=>{const e=[];for(const i of H2){const r=[];for(let l=0;l<3;l++){const u=ss[i[l]],d=ss[i[(l+1)%3]],h=Math.hypot(d[0]-u[0],d[1]-u[1],d[2]-u[2]),p=o/h;r.push(yp(u,d,p)),r.push(yp(d,u,p))}e.push(r)}for(let i=0;i<ss.length;i++){const r=[];for(let p=0;p<ss.length;p++){if(Math.floor(p/2)===Math.floor(i/2))continue;const v=ss[i],g=ss[p],S=Math.hypot(g[0]-v[0],g[1]-v[1],g[2]-v[2]);r.push(yp(v,g,o/S))}const l=OM(r),u=new K(...ss[i]).normalize(),d=new K(...r[0]).sub(l),h=new K().crossVectors(u,d);r.sort((p,m)=>{const v=new K(...p).sub(l),g=new K(...m).sub(l);return Math.atan2(v.dot(h),v.dot(d))-Math.atan2(g.dot(h),g.dot(d))}),e.push(r)}return e},V2=G2(B2),X2=o=>{const e=new K(0,0,1),i=new ze().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new ze().setFromAxisAngle(new K(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},k2="#ffffff",Rx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 200px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.shadowColor="rgba(0, 0, 0, 0.35)",r.shadowBlur=6,r.fillText(String(o),128,136);const l=new To(i);l.colorSpace=wn;const u=new Nr({map:l,transparent:!0,side:vi,depthWrite:!1});return new pn(new ma(Tx,Tx),u)},q2=o=>{const e=new Xn().setFromQuaternion(o,"XYZ");return{x:e.x/Fa,y:e.y/Fa,z:e.z/Fa}};function W2({color:o="red",translucent:e=!0}){const i=_t.useRef(null),r=_t.useRef(null),l=_t.useRef(null),u=_t.useRef(null),d=_t.useRef(null),h=_t.useRef(null),p=_t.useRef({x:0,y:0,z:0}),m=_t.useRef({x:0,y:0,z:0}),v=_t.useRef(null),g=_t.useRef(!1),[S,E]=_t.useState(!1),[w,P]=_t.useState(!1),[M,x]=_t.useState(null),[G,j]=_t.useState(null),D=_t.useCallback(T=>{p.current=T,r.current?.rotation.set(T.x*Fa,T.y*Fa,T.z*Fa)},[]),U=_t.useCallback((T,R)=>{h.current&&cancelAnimationFrame(h.current);const N={...p.current},H=performance.now();return new Promise(k=>{const V=L=>{const J=Math.min((L-H)/R,1),Q=Qn(J);D({x:N.x+(T.x-N.x)*Q,y:N.y+(T.y-N.y)*Q,z:N.z+(T.z-N.z)*Q}),J<1?h.current=requestAnimationFrame(V):(h.current=null,k())};h.current=requestAnimationFrame(V)})},[D]),I=_t.useCallback((T,R)=>{h.current&&cancelAnimationFrame(h.current);const N=r.current;if(!N)return Promise.resolve();const H=N.quaternion.clone(),k=performance.now();return new Promise(V=>{const L=J=>{const Q=Math.min((J-k)/R,1);N.quaternion.slerpQuaternions(H,T,Qn(Q)),p.current=q2(N.quaternion),Q<1?h.current=requestAnimationFrame(L):(h.current=null,V())};h.current=requestAnimationFrame(L)})},[]),B=_t.useCallback(async()=>{g.current=!0,E(!0),x(null),j(null);try{const T=await Do(8),R=X2(Ax[T-1]),N=p.current,H=No(N,R,L2);await U(H,O2),await I(R,P2),m.current=p.current,E(!1),g.current=!1,x(T)}catch(T){E(!1),g.current=!1,j(T instanceof Error?T.message:"Roll failed.")}},[I,U]),b=_t.useCallback(T=>{if(g.current)return;const R=T.currentTarget.getBoundingClientRect();v.current={centerX:R.left+R.width/2,centerY:R.top+R.height/2,halfWidth:R.width/2,halfHeight:R.height/2,nx:0,ny:0},T.currentTarget.setPointerCapture(T.pointerId),P(!0)},[]),F=_t.useCallback(T=>{const R=v.current;!R||g.current||(R.nx=bx((T.clientX-R.centerX)/R.halfWidth,-1,1),R.ny=bx((T.clientY-R.centerY)/R.halfHeight,-1,1),!d.current&&(d.current=requestAnimationFrame(()=>{d.current=null;const N=m.current;D({x:N.x-R.ny*Mx,y:N.y+R.nx*Mx,z:N.z})})))},[D]),Y=_t.useCallback(()=>{const T=v.current;if(!T)return;v.current=null,P(!1),d.current&&(cancelAnimationFrame(d.current),d.current=null),Math.abs(T.nx)>=yx||Math.abs(T.ny)>=yx?B():U(m.current,I2)},[U,B]);return _t.useEffect(()=>{const T=new Eo,R=ds[o],N=Po(e),H=new Jn,k=[],V=[];for(const st of V2){const vt=OM(st),Ct=F2(st,vt),O=Ct.x,rt=Ct.y,St=Ct.z,[q,nt,Et]=st,wt=[nt[0]-q[0],nt[1]-q[1],nt[2]-q[2]],lt=[Et[0]-q[0],Et[1]-q[1],Et[2]-q[2]],Rt=wt[1]*lt[2]-wt[2]*lt[1],ge=wt[2]*lt[0]-wt[0]*lt[2],ne=wt[0]*lt[1]-wt[1]*lt[0],oe=Rt*vt.x+ge*vt.y+ne*vt.z>=0?st:[...st].reverse();for(let Ut=1;Ut<oe.length-1;Ut++)k.push(...oe[0],...oe[Ut],...oe[Ut+1]),V.push(O,rt,St,O,rt,St,O,rt,St)}H.setAttribute("position",new hn(k,3)),H.setAttribute("normal",new hn(V,3));const L=new pn(H,new bo({color:R.hex,roughness:.46,metalness:.08,flatShading:!0,transparent:e,opacity:N,depthWrite:!e}));L.rotation.set(p.current.x*Fa,p.current.y*Fa,p.current.z*Fa);const J=new ze().setFromAxisAngle(new K(0,1,0),Math.PI),Q=()=>{Ax.forEach((st,vt)=>{const Ct=vt+1,O=Rx(Ct,R.label);if(!O)return;O.position.copy(st.normal).multiplyScalar(Ex),O.quaternion.copy(st.orientation),O.renderOrder=1,L.add(O);const rt=Rx(Ct,k2);rt&&(rt.renderOrder=-1,rt.position.copy(st.normal).multiplyScalar(Ex-.2),rt.quaternion.copy(st.orientation).multiply(J),L.add(rt))})};document.fonts.load("700 200px dice-font").then(Q),T.add(L),T.add(new Co(16777215,1)),T.add(new Ao(16777215,12303291,1));const pt=new Ro(16777215,1);return pt.position.set(3,4,5),T.add(pt),r.current=L,l.current=T,()=>{h.current&&cancelAnimationFrame(h.current),L.geometry.dispose(),L.material.dispose(),L.children.forEach(st=>{const vt=st;vt.geometry.dispose(),vt.material.map?.dispose(),vt.material.dispose()}),r.current=null,l.current=null}},[o,e]),_t.useEffect(()=>{const T=i.current;if(!T)return;const{renderer:R,camera:N}=Lo(),H=()=>{const L=T.clientWidth,J=T.clientHeight;R.setSize(L,J,!1),N.aspect=L/J,N.updateProjectionMatrix()},k=new ResizeObserver(H);k.observe(T),H(),l.current&&R.render(l.current,N),Uo()&&R.getContext().finish(),T.appendChild(R.domElement);const V=()=>{u.current=requestAnimationFrame(V),l.current&&R.render(l.current,N)};return V(),()=>{R.domElement.remove(),k.disconnect(),u.current&&cancelAnimationFrame(u.current),Oo()}},[]),ie.jsxs("div",{className:`stage stage--eight-sided${w?" is-dragging":""}`,onPointerDown:b,onPointerMove:F,onPointerUp:Y,onPointerCancel:Y,children:[ie.jsx("div",{ref:i,className:"three-scene"}),ie.jsx(Io,{isRolling:S,error:G,result:M})]})}const Cx=65,wx=.5,Y2=10,Z2=1500,K2=750,Q2=260,Ba=Math.PI/180,Dx=.77,PM=2.2,J2=.85,af=PM*.9*J2,Rr=PM*.65,pm=af*.105573,mm=af*.8,ku=(af-mm)/(af-pm),gm=[...[0,1,2,3,4].map(o=>[ku*Rr*Math.cos(o*2*Math.PI/5),mm,ku*Rr*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[ku*Rr*Math.cos((o+.5)*2*Math.PI/5),-mm,ku*Rr*Math.sin((o+.5)*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Rr*Math.cos(o*2*Math.PI/5),pm,Rr*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Rr*Math.cos((o+.5)*2*Math.PI/5),-pm,Rr*Math.sin((o+.5)*2*Math.PI/5)])],_m=[[0,10,15,11,1],[1,11,16,12,2],[2,12,17,13,3],[3,13,18,14,4],[4,14,19,10,0],[5,6,16,11,15],[6,7,17,12,16],[7,8,18,13,17],[8,9,19,14,18],[9,5,15,10,19],[0,1,2,3,4],[5,6,7,8,9]],vm=[1,3,5,7,9,8,6,4,2,10],Nx=(o,e,i)=>Math.min(i,Math.max(e,o)),IM=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],v=Math.sqrt(h*h+p*p+m*m),g=new K(h/v,p/v,m/v);return g.dot(e)<0&&g.negate(),g},Sm=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new K(e,i,r)},j2=o=>{const e=_m[o].map(p=>gm[p]),i=Sm(e),r=IM(e,i),l=Math.abs(r.y)>.9?new K(0,0,1):new K(0,1,0),u=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),d=new K().crossVectors(u,r).normalize(),h=new Je().makeBasis(d,u,r);return{normal:r,up:u,orientation:new ze().setFromRotationMatrix(h)}},Ux=Array.from({length:vm.length},(o,e)=>j2(e)),$2=o=>{const e=new K(0,0,1),i=new ze().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new ze().setFromAxisAngle(new K(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},tw="#ffffff",Lx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 180px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o===10?0:o),128,136);const l=new To(i);l.colorSpace=wn;const u=new Nr({map:l,transparent:!0,side:vi,depthWrite:!1});return new pn(new ma(Dx,Dx),u)},ew=o=>{const e=new Xn().setFromQuaternion(o,"XYZ");return{x:e.x/Ba,y:e.y/Ba,z:e.z/Ba}};function nw({color:o="red",translucent:e=!0}){const i=_t.useRef(null),r=_t.useRef(null),l=_t.useRef(null),u=_t.useRef(null),d=_t.useRef(null),h=_t.useRef(null),p=_t.useRef({x:0,y:0,z:0}),m=_t.useRef({x:0,y:0,z:0}),v=_t.useRef(null),g=_t.useRef(!1),[S,E]=_t.useState(!1),[w,P]=_t.useState(!1),[M,x]=_t.useState(null),[G,j]=_t.useState(null),D=_t.useCallback(T=>{p.current=T,r.current?.rotation.set(T.x*Ba,T.y*Ba,T.z*Ba)},[]),U=_t.useCallback((T,R)=>{h.current&&cancelAnimationFrame(h.current);const N={...p.current},H=performance.now();return new Promise(k=>{const V=L=>{const J=Math.min((L-H)/R,1),Q=Qn(J);D({x:N.x+(T.x-N.x)*Q,y:N.y+(T.y-N.y)*Q,z:N.z+(T.z-N.z)*Q}),J<1?h.current=requestAnimationFrame(V):(h.current=null,k())};h.current=requestAnimationFrame(V)})},[D]),I=_t.useCallback((T,R)=>{h.current&&cancelAnimationFrame(h.current);const N=r.current;if(!N)return Promise.resolve();const H=N.quaternion.clone(),k=performance.now();return new Promise(V=>{const L=J=>{const Q=Math.min((J-k)/R,1);N.quaternion.slerpQuaternions(H,T,Qn(Q)),p.current=ew(N.quaternion),Q<1?h.current=requestAnimationFrame(L):(h.current=null,V())};h.current=requestAnimationFrame(L)})},[]),B=_t.useCallback(async()=>{g.current=!0,E(!0),x(null),j(null);try{const T=await Do(10),R=vm.indexOf(T),N=$2(Ux[R]),H=p.current,k=No(H,N,Y2);await U(k,Z2),await I(N,K2),m.current=p.current,E(!1),g.current=!1,x(T)}catch(T){E(!1),g.current=!1,j(T instanceof Error?T.message:"Roll failed.")}},[I,U]),b=_t.useCallback(T=>{if(g.current)return;const R=T.currentTarget.getBoundingClientRect();v.current={centerX:R.left+R.width/2,centerY:R.top+R.height/2,halfWidth:R.width/2,halfHeight:R.height/2,nx:0,ny:0},T.currentTarget.setPointerCapture(T.pointerId),P(!0)},[]),F=_t.useCallback(T=>{const R=v.current;!R||g.current||(R.nx=Nx((T.clientX-R.centerX)/R.halfWidth,-1,1),R.ny=Nx((T.clientY-R.centerY)/R.halfHeight,-1,1),!d.current&&(d.current=requestAnimationFrame(()=>{d.current=null;const N=m.current;D({x:N.x-R.ny*Cx,y:N.y+R.nx*Cx,z:N.z})})))},[D]),Y=_t.useCallback(()=>{const T=v.current;if(!T)return;v.current=null,P(!1),d.current&&(cancelAnimationFrame(d.current),d.current=null),Math.abs(T.nx)>=wx||Math.abs(T.ny)>=wx?B():U(m.current,Q2)},[U,B]);return _t.useEffect(()=>{const T=new Eo,R=new Jn,N=[],H=[];for(const st of _m){const vt=st.map(Ht=>gm[Ht]),Ct=Sm(vt),O=IM(vt,Ct),rt=O.x,St=O.y,q=O.z,[nt,Et,wt]=vt,lt=[Et[0]-nt[0],Et[1]-nt[1],Et[2]-nt[2]],Rt=[wt[0]-nt[0],wt[1]-nt[1],wt[2]-nt[2]],ge=lt[1]*Rt[2]-lt[2]*Rt[1],ne=lt[2]*Rt[0]-lt[0]*Rt[2],re=lt[0]*Rt[1]-lt[1]*Rt[0],Ut=ge*Ct.x+ne*Ct.y+re*Ct.z>=0?vt:[...vt].reverse();for(let Ht=1;Ht<Ut.length-1;Ht++)N.push(...Ut[0],...Ut[Ht],...Ut[Ht+1]),H.push(rt,St,q,rt,St,q,rt,St,q)}R.setAttribute("position",new hn(N,3)),R.setAttribute("normal",new hn(H,3));const k=ds[o],V=Po(e),L=new pn(R,new bo({color:k.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:V,depthWrite:!e}));L.rotation.set(p.current.x*Ba,p.current.y*Ba,p.current.z*Ba);const J=new ze().setFromAxisAngle(new K(0,1,0),Math.PI),Q=()=>{Ux.forEach((st,vt)=>{const Ct=vm[vt],O=Lx(Ct,k.label);if(!O)return;const rt=Sm(_m[vt].map(q=>gm[q]));O.position.copy(rt),O.position.addScaledVector(st.normal,.01),O.quaternion.copy(st.orientation),O.renderOrder=1,L.add(O);const St=Lx(Ct,tw);St&&(St.renderOrder=-1,St.position.copy(rt),St.position.addScaledVector(st.normal,-.05),St.quaternion.copy(st.orientation).multiply(J),L.add(St))})};document.fonts.load("700 180px dice-font").then(Q),T.add(L),T.add(new Co(16777215,1)),T.add(new Ao(16777215,12303291,1));const pt=new Ro(16777215,1);return pt.position.set(3,4,5),T.add(pt),r.current=L,l.current=T,()=>{h.current&&cancelAnimationFrame(h.current),R.dispose(),L.material.dispose(),L.children.forEach(st=>{const vt=st;vt.geometry.dispose(),vt.material.map?.dispose(),vt.material.dispose()}),r.current=null,l.current=null}},[o,e]),_t.useEffect(()=>{const T=i.current;if(!T)return;const{renderer:R,camera:N}=Lo(),H=()=>{const L=T.clientWidth,J=T.clientHeight;R.setSize(L,J,!1),N.aspect=L/J,N.updateProjectionMatrix()},k=new ResizeObserver(H);k.observe(T),H(),l.current&&R.render(l.current,N),Uo()&&R.getContext().finish(),T.appendChild(R.domElement);const V=()=>{u.current=requestAnimationFrame(V),l.current&&R.render(l.current,N)};return V(),()=>{R.domElement.remove(),k.disconnect(),u.current&&cancelAnimationFrame(u.current),Oo()}},[]),ie.jsxs("div",{className:`stage stage--ten-sided${w?" is-dragging":""}`,onPointerDown:b,onPointerMove:F,onPointerUp:Y,onPointerCancel:Y,children:[ie.jsx("div",{ref:i,className:"three-scene"}),ie.jsx(Io,{isRolling:S,error:G,result:M})]})}const Ox=65,Px=.5,iw=10,aw=1500,rw=750,sw=260,Ha=Math.PI/180,Ix=1,xm=[[.981495,.981495,.981495],[.981495,.981495,-.981495],[.981495,-.981495,.981495],[.981495,-.981495,-.981495],[-.981495,.981495,.981495],[-.981495,.981495,-.981495],[-.981495,-.981495,.981495],[-.981495,-.981495,-.981495],[0,.606598,1.588093],[0,.606598,-1.588093],[0,-.606598,1.588093],[0,-.606598,-1.588093],[.606598,1.588093,0],[.606598,-1.588093,0],[-.606598,1.588093,0],[-.606598,-1.588093,0],[1.588093,0,.606598],[1.588093,0,-.606598],[-1.588093,0,.606598],[-1.588093,0,-.606598]],Mm=[[14,12,1,9,5],[4,8,0,12,14],[1,12,0,16,17],[19,18,4,14,5],[7,19,5,9,11],[11,9,1,17,3],[2,16,0,8,10],[10,8,4,18,6],[17,16,2,13,3],[7,15,6,18,19],[7,11,3,13,15],[15,13,2,10,6]],ym=[1,2,3,4,5,6,8,7,9,10,11,12],zx=(o,e,i)=>Math.min(i,Math.max(e,o)),zM=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],v=Math.sqrt(h*h+p*p+m*m),g=new K(h/v,p/v,m/v);return g.dot(e)<0&&g.negate(),g},Em=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new K(e,i,r)},ow=o=>{const e=Mm[o].map(p=>xm[p]),i=Em(e),r=zM(e,i),l=Math.abs(r.y)>.9?new K(0,0,1):new K(0,1,0),u=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),d=new K().crossVectors(u,r).normalize(),h=new Je().makeBasis(d,u,r);return{normal:r,up:u,orientation:new ze().setFromRotationMatrix(h)}},Fx=Array.from({length:ym.length},(o,e)=>ow(e)),lw=o=>{const e=new K(0,0,1),i=new ze().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new ze().setFromAxisAngle(new K(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},cw="#ffffff",Bx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const l=new To(i);l.colorSpace=wn;const u=new Nr({map:l,transparent:!0,side:vi,depthWrite:!1});return new pn(new ma(Ix,Ix),u)},uw=o=>{const e=new Xn().setFromQuaternion(o,"XYZ");return{x:e.x/Ha,y:e.y/Ha,z:e.z/Ha}};function fw({color:o="red",translucent:e=!0}){const i=_t.useRef(null),r=_t.useRef(null),l=_t.useRef(null),u=_t.useRef(null),d=_t.useRef(null),h=_t.useRef(null),p=_t.useRef({x:0,y:0,z:0}),m=_t.useRef({x:0,y:0,z:0}),v=_t.useRef(null),g=_t.useRef(!1),[S,E]=_t.useState(!1),[w,P]=_t.useState(!1),[M,x]=_t.useState(null),[G,j]=_t.useState(null),D=_t.useCallback(T=>{p.current=T,r.current?.rotation.set(T.x*Ha,T.y*Ha,T.z*Ha)},[]),U=_t.useCallback((T,R)=>{h.current&&cancelAnimationFrame(h.current);const N={...p.current},H=performance.now();return new Promise(k=>{const V=L=>{const J=Math.min((L-H)/R,1),Q=Qn(J);D({x:N.x+(T.x-N.x)*Q,y:N.y+(T.y-N.y)*Q,z:N.z+(T.z-N.z)*Q}),J<1?h.current=requestAnimationFrame(V):(h.current=null,k())};h.current=requestAnimationFrame(V)})},[D]),I=_t.useCallback((T,R)=>{h.current&&cancelAnimationFrame(h.current);const N=r.current;if(!N)return Promise.resolve();const H=N.quaternion.clone(),k=performance.now();return new Promise(V=>{const L=J=>{const Q=Math.min((J-k)/R,1);N.quaternion.slerpQuaternions(H,T,Qn(Q)),p.current=uw(N.quaternion),Q<1?h.current=requestAnimationFrame(L):(h.current=null,V())};h.current=requestAnimationFrame(L)})},[]),B=_t.useCallback(async()=>{g.current=!0,E(!0),x(null),j(null);try{const T=await Do(12),R=ym.indexOf(T),N=lw(Fx[R]),H=p.current,k=No(H,N,iw);await U(k,aw),await I(N,rw),m.current=p.current,E(!1),g.current=!1,x(T)}catch(T){E(!1),g.current=!1,j(T instanceof Error?T.message:"Roll failed.")}},[I,U]),b=_t.useCallback(T=>{if(g.current)return;const R=T.currentTarget.getBoundingClientRect();v.current={centerX:R.left+R.width/2,centerY:R.top+R.height/2,halfWidth:R.width/2,halfHeight:R.height/2,nx:0,ny:0},T.currentTarget.setPointerCapture(T.pointerId),P(!0)},[]),F=_t.useCallback(T=>{const R=v.current;!R||g.current||(R.nx=zx((T.clientX-R.centerX)/R.halfWidth,-1,1),R.ny=zx((T.clientY-R.centerY)/R.halfHeight,-1,1),!d.current&&(d.current=requestAnimationFrame(()=>{d.current=null;const N=m.current;D({x:N.x-R.ny*Ox,y:N.y+R.nx*Ox,z:N.z})})))},[D]),Y=_t.useCallback(()=>{const T=v.current;if(!T)return;v.current=null,P(!1),d.current&&(cancelAnimationFrame(d.current),d.current=null),Math.abs(T.nx)>=Px||Math.abs(T.ny)>=Px?B():U(m.current,sw)},[U,B]);return _t.useEffect(()=>{const T=new Eo,R=new Jn,N=[],H=[];for(const st of Mm){const vt=st.map(Ht=>xm[Ht]),Ct=Em(vt),O=zM(vt,Ct),rt=O.x,St=O.y,q=O.z,[nt,Et,wt]=vt,lt=[Et[0]-nt[0],Et[1]-nt[1],Et[2]-nt[2]],Rt=[wt[0]-nt[0],wt[1]-nt[1],wt[2]-nt[2]],ge=lt[1]*Rt[2]-lt[2]*Rt[1],ne=lt[2]*Rt[0]-lt[0]*Rt[2],re=lt[0]*Rt[1]-lt[1]*Rt[0],Ut=ge*Ct.x+ne*Ct.y+re*Ct.z>=0?vt:[...vt].reverse();for(let Ht=1;Ht<Ut.length-1;Ht++)N.push(...Ut[0],...Ut[Ht],...Ut[Ht+1]),H.push(rt,St,q,rt,St,q,rt,St,q)}R.setAttribute("position",new hn(N,3)),R.setAttribute("normal",new hn(H,3));const k=ds[o],V=Po(e),L=new pn(R,new bo({color:k.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:V,depthWrite:!e}));L.rotation.set(p.current.x*Ha,p.current.y*Ha,p.current.z*Ha);const J=new ze().setFromAxisAngle(new K(0,1,0),Math.PI),Q=()=>{Fx.forEach((st,vt)=>{const Ct=ym[vt],O=Bx(Ct,k.label);if(!O)return;const rt=Em(Mm[vt].map(q=>xm[q]));O.position.copy(rt),O.position.addScaledVector(st.normal,.01),O.quaternion.copy(st.orientation),O.renderOrder=1,L.add(O);const St=Bx(Ct,cw);St&&(St.renderOrder=-1,St.position.copy(rt),St.position.addScaledVector(st.normal,-.05),St.quaternion.copy(st.orientation).multiply(J),L.add(St))})};document.fonts.load("700 160px dice-font").then(Q),T.add(L),T.add(new Co(16777215,1)),T.add(new Ao(16777215,12303291,1));const pt=new Ro(16777215,1);return pt.position.set(3,4,5),T.add(pt),r.current=L,l.current=T,()=>{h.current&&cancelAnimationFrame(h.current),R.dispose(),L.material.dispose(),L.children.forEach(st=>{const vt=st;vt.geometry.dispose(),vt.material.map?.dispose(),vt.material.dispose()}),r.current=null,l.current=null}},[o,e]),_t.useEffect(()=>{const T=i.current;if(!T)return;const{renderer:R,camera:N}=Lo(),H=()=>{const L=T.clientWidth,J=T.clientHeight;R.setSize(L,J,!1),N.aspect=L/J,N.updateProjectionMatrix()},k=new ResizeObserver(H);k.observe(T),H(),l.current&&R.render(l.current,N),Uo()&&R.getContext().finish(),T.appendChild(R.domElement);const V=()=>{u.current=requestAnimationFrame(V),l.current&&R.render(l.current,N)};return V(),()=>{R.domElement.remove(),k.disconnect(),u.current&&cancelAnimationFrame(u.current),Oo()}},[]),ie.jsxs("div",{className:`stage stage--twelve-sided${w?" is-dragging":""}`,onPointerDown:b,onPointerMove:F,onPointerUp:Y,onPointerCancel:Y,children:[ie.jsx("div",{ref:i,className:"three-scene"}),ie.jsx(Io,{isRolling:S,error:G,result:M})]})}const Hx=65,Gx=.5,dw=10,hw=1500,pw=750,mw=260,Ga=Math.PI/180,Vx=.9,Tm=[[0,.893743,1.446106],[0,.893743,-1.446106],[0,-.893743,1.446106],[0,-.893743,-1.446106],[.893743,1.446106,0],[.893743,-1.446106,0],[-.893743,1.446106,0],[-.893743,-1.446106,0],[1.446106,0,.893743],[1.446106,0,-.893743],[-1.446106,0,.893743],[-1.446106,0,-.893743]],bm=[[6,4,1],[0,4,6],[11,6,1],[1,4,9],[8,4,0],[0,6,10],[4,8,9],[11,10,6],[1,3,11],[9,3,1],[0,2,8],[10,2,0],[9,8,5],[7,10,11],[3,7,11],[9,5,3],[2,5,8],[10,7,2],[3,5,7],[7,5,2]],Am=[1,2,3,4,5,6,7,8,9,10,12,11,13,14,16,15,18,17,19,20],Xx=(o,e,i)=>Math.min(i,Math.max(e,o)),FM=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],v=Math.sqrt(h*h+p*p+m*m),g=new K(h/v,p/v,m/v);return g.dot(e)<0&&g.negate(),g},Rm=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new K(e,i,r)},gw=o=>{const e=bm[o].map(p=>Tm[p]),i=Rm(e),r=FM(e,i),l=Math.abs(r.y)>.9?new K(0,0,1):new K(0,1,0),u=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),d=new K().crossVectors(u,r).normalize(),h=new Je().makeBasis(d,u,r);return{normal:r,up:u,orientation:new ze().setFromRotationMatrix(h)}},kx=Array.from({length:Am.length},(o,e)=>gw(e)),_w=o=>{const e=new K(0,0,1),i=new ze().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new ze().setFromAxisAngle(new K(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},vw="#ffffff",qx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const l=new To(i);l.colorSpace=wn;const u=new Nr({map:l,transparent:!0,side:vi,depthWrite:!1});return new pn(new ma(Vx,Vx),u)},Sw=o=>{const e=new Xn().setFromQuaternion(o,"XYZ");return{x:e.x/Ga,y:e.y/Ga,z:e.z/Ga}};function xw({color:o="red",translucent:e=!0}){const i=_t.useRef(null),r=_t.useRef(null),l=_t.useRef(null),u=_t.useRef(null),d=_t.useRef(null),h=_t.useRef(null),p=_t.useRef({x:0,y:0,z:0}),m=_t.useRef({x:0,y:0,z:0}),v=_t.useRef(null),g=_t.useRef(!1),[S,E]=_t.useState(!1),[w,P]=_t.useState(!1),[M,x]=_t.useState(null),[G,j]=_t.useState(null),D=_t.useCallback(T=>{p.current=T,r.current?.rotation.set(T.x*Ga,T.y*Ga,T.z*Ga)},[]),U=_t.useCallback((T,R)=>{h.current&&cancelAnimationFrame(h.current);const N={...p.current},H=performance.now();return new Promise(k=>{const V=L=>{const J=Math.min((L-H)/R,1),Q=Qn(J);D({x:N.x+(T.x-N.x)*Q,y:N.y+(T.y-N.y)*Q,z:N.z+(T.z-N.z)*Q}),J<1?h.current=requestAnimationFrame(V):(h.current=null,k())};h.current=requestAnimationFrame(V)})},[D]),I=_t.useCallback((T,R)=>{h.current&&cancelAnimationFrame(h.current);const N=r.current;if(!N)return Promise.resolve();const H=N.quaternion.clone(),k=performance.now();return new Promise(V=>{const L=J=>{const Q=Math.min((J-k)/R,1);N.quaternion.slerpQuaternions(H,T,Qn(Q)),p.current=Sw(N.quaternion),Q<1?h.current=requestAnimationFrame(L):(h.current=null,V())};h.current=requestAnimationFrame(L)})},[]),B=_t.useCallback(async()=>{g.current=!0,E(!0),x(null),j(null);try{const T=await Do(20),R=Am.indexOf(T),N=_w(kx[R]),H=p.current,k=No(H,N,dw);await U(k,hw),await I(N,pw),m.current=p.current,E(!1),g.current=!1,x(T)}catch(T){E(!1),g.current=!1,j(T instanceof Error?T.message:"Roll failed.")}},[I,U]),b=_t.useCallback(T=>{if(g.current)return;const R=T.currentTarget.getBoundingClientRect();v.current={centerX:R.left+R.width/2,centerY:R.top+R.height/2,halfWidth:R.width/2,halfHeight:R.height/2,nx:0,ny:0},T.currentTarget.setPointerCapture(T.pointerId),P(!0)},[]),F=_t.useCallback(T=>{const R=v.current;!R||g.current||(R.nx=Xx((T.clientX-R.centerX)/R.halfWidth,-1,1),R.ny=Xx((T.clientY-R.centerY)/R.halfHeight,-1,1),!d.current&&(d.current=requestAnimationFrame(()=>{d.current=null;const N=m.current;D({x:N.x-R.ny*Hx,y:N.y+R.nx*Hx,z:N.z})})))},[D]),Y=_t.useCallback(()=>{const T=v.current;if(!T)return;v.current=null,P(!1),d.current&&(cancelAnimationFrame(d.current),d.current=null),Math.abs(T.nx)>=Gx||Math.abs(T.ny)>=Gx?B():U(m.current,mw)},[U,B]);return _t.useEffect(()=>{const T=new Eo,R=new Jn,N=[],H=[];for(const st of bm){const vt=st.map(Ht=>Tm[Ht]),Ct=Rm(vt),O=FM(vt,Ct),rt=O.x,St=O.y,q=O.z,[nt,Et,wt]=vt,lt=[Et[0]-nt[0],Et[1]-nt[1],Et[2]-nt[2]],Rt=[wt[0]-nt[0],wt[1]-nt[1],wt[2]-nt[2]],ge=lt[1]*Rt[2]-lt[2]*Rt[1],ne=lt[2]*Rt[0]-lt[0]*Rt[2],re=lt[0]*Rt[1]-lt[1]*Rt[0],Ut=ge*Ct.x+ne*Ct.y+re*Ct.z>=0?vt:[...vt].reverse();for(let Ht=1;Ht<Ut.length-1;Ht++)N.push(...Ut[0],...Ut[Ht],...Ut[Ht+1]),H.push(rt,St,q,rt,St,q,rt,St,q)}R.setAttribute("position",new hn(N,3)),R.setAttribute("normal",new hn(H,3));const k=ds[o],V=Po(e),L=new pn(R,new bo({color:k.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:V,depthWrite:!e}));L.rotation.set(p.current.x*Ga,p.current.y*Ga,p.current.z*Ga);const J=new ze().setFromAxisAngle(new K(0,1,0),Math.PI),Q=()=>{kx.forEach((st,vt)=>{const Ct=Am[vt],O=qx(Ct,k.label);if(!O)return;const rt=Rm(bm[vt].map(q=>Tm[q]));O.position.copy(rt),O.position.addScaledVector(st.normal,.01),O.quaternion.copy(st.orientation),O.renderOrder=1,L.add(O);const St=qx(Ct,vw);St&&(St.renderOrder=-1,St.position.copy(rt),St.position.addScaledVector(st.normal,-.05),St.quaternion.copy(st.orientation).multiply(J),L.add(St))})};document.fonts.load("700 160px dice-font").then(Q),T.add(L),T.add(new Co(16777215,1)),T.add(new Ao(16777215,12303291,1));const pt=new Ro(16777215,1);return pt.position.set(3,4,5),T.add(pt),r.current=L,l.current=T,()=>{h.current&&cancelAnimationFrame(h.current),R.dispose(),L.material.dispose(),L.children.forEach(st=>{const vt=st;vt.geometry.dispose(),vt.material.map?.dispose(),vt.material.dispose()}),r.current=null,l.current=null}},[o,e]),_t.useEffect(()=>{const T=i.current;if(!T)return;const{renderer:R,camera:N}=Lo(),H=()=>{const L=T.clientWidth,J=T.clientHeight;R.setSize(L,J,!1),N.aspect=L/J,N.updateProjectionMatrix()},k=new ResizeObserver(H);k.observe(T),H(),l.current&&R.render(l.current,N),Uo()&&R.getContext().finish(),T.appendChild(R.domElement);const V=()=>{u.current=requestAnimationFrame(V),l.current&&R.render(l.current,N)};return V(),()=>{R.domElement.remove(),k.disconnect(),u.current&&cancelAnimationFrame(u.current),Oo()}},[]),ie.jsxs("div",{className:`stage stage--twenty-sided${w?" is-dragging":""}`,onPointerDown:b,onPointerMove:F,onPointerUp:Y,onPointerCancel:Y,children:[ie.jsx("div",{ref:i,className:"three-scene"}),ie.jsx(Io,{isRolling:S,error:G,result:M})]})}function Mw({sides:o=6,color:e="red",translucent:i=!0}){switch(o){case 4:return ie.jsx(U2,{color:e,translucent:i});case 6:return ie.jsx(S2,{color:e,translucent:i});case 8:return ie.jsx(W2,{color:e,translucent:i});case 10:return ie.jsx(nw,{color:e,translucent:i});case 12:return ie.jsx(fw,{color:e,translucent:i});case 20:return ie.jsx(xw,{color:e,translucent:i});default:return null}}const yw=[0,45,90,135];function Ew({isOpen:o,onClick:e,ref:i}){return ie.jsx("button",{ref:i,type:"button",className:"icon-button settings-button","aria-label":"Settings","aria-haspopup":"dialog","aria-expanded":o,onClick:e,children:ie.jsxs("span",{className:"settings-button__cog","aria-hidden":"true",children:[yw.map(r=>ie.jsx("span",{className:`settings-button__tooth settings-button__tooth--${r}`},r)),ie.jsx("span",{className:"settings-button__hub"})]})})}const Tw='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';function bw({sides:o,color:e,translucent:i,onSettingsChange:r,onClose:l}){const u=_t.useRef(null),d=_t.useRef(null);return _t.useEffect(()=>{d.current?.focus();const h=p=>{if(p.key==="Escape"){l();return}if(p.key!=="Tab")return;const m=u.current;if(!m)return;const v=Array.from(m.querySelectorAll(Tw));if(v.length===0)return;const g=v[0],S=v[v.length-1],E=document.activeElement;if(!m.contains(E)){p.preventDefault(),(p.shiftKey?S:g).focus();return}p.shiftKey&&E===g?(p.preventDefault(),S.focus()):!p.shiftKey&&E===S&&(p.preventDefault(),g.focus())};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[l]),ie.jsxs("div",{ref:u,className:"settings-dialog",role:"dialog","aria-modal":"true","aria-label":"Settings",children:[ie.jsxs("div",{className:"settings-dialog__content",children:[ie.jsx("fieldset",{className:"sides-picker","aria-label":"Sides",children:ie.jsx("div",{className:"sides-picker__options",children:Xm.map((h,p)=>ie.jsxs(_t.Fragment,{children:[p>0&&ie.jsx("span",{className:"sides-picker__divider","aria-hidden":"true"}),ie.jsxs("span",{className:"sides-picker__option",children:[ie.jsx("input",{className:"sides-picker__input",type:"radio",name:"sides",id:`sides-${h}`,value:h,checked:o===h,onChange:()=>r({sides:h})}),ie.jsx("label",{className:"sides-picker__label",htmlFor:`sides-${h}`,children:h})]})]},h))})}),ie.jsx("fieldset",{className:"color-picker","aria-label":"Color",children:ie.jsx("div",{className:"color-picker__options",children:km.map(h=>ie.jsxs("span",{className:"color-picker__option",children:[ie.jsx("input",{className:"color-picker__input",type:"radio",name:"color",id:`color-${h}`,value:h,checked:e===h,"aria-label":h,onChange:()=>r({color:h})}),ie.jsx("label",{className:"color-picker__label",htmlFor:`color-${h}`,style:{backgroundColor:`rgb(${ds[h].cssTop.join(" ")})`}})]},h))})}),ie.jsxs("label",{className:"translucent-toggle",children:[ie.jsx("input",{className:"translucent-toggle__input",type:"checkbox",checked:i,onChange:h=>r({translucent:h.target.checked})}),ie.jsx("span",{className:"translucent-toggle__text",children:"Translucent"}),ie.jsx("span",{className:"translucent-toggle__track","aria-hidden":"true",children:ie.jsx("span",{className:"translucent-toggle__knob"})})]})]}),ie.jsx("button",{ref:d,type:"button",className:"icon-button settings-dialog__close","aria-label":"Close",onClick:l,children:ie.jsxs("span",{className:"settings-dialog__x","aria-hidden":"true",children:[ie.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--45"}),ie.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--135"})]})})]})}function Aw(){const[o,e]=_t.useState(()=>J3()),[i,r]=_t.useState(!1),l=_t.useRef(null),u=_t.useCallback(h=>{e(p=>({...p,...h}))},[]),d=_t.useCallback(()=>{r(!1),l.current?.focus()},[]);return _t.useEffect(()=>{const h=p=>{if(i||p.ctrlKey||p.altKey||p.metaKey)return;const m=p.key.toLowerCase();m==="s"?e(v=>({...v,sides:sx(Xm,v.sides)})):m==="c"?e(v=>({...v,color:sx(km,v.color)})):m==="t"&&e(v=>({...v,translucent:!v.translucent}))};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[i]),ie.jsxs(ie.Fragment,{children:[ie.jsx(Ew,{ref:l,isOpen:i,onClick:()=>r(!0)}),i&&ie.jsx(bw,{sides:o.sides,color:o.color,translucent:o.translucent,onSettingsChange:u,onClose:d}),ie.jsx(Mw,{sides:o.sides,color:o.color,translucent:o.translucent})]})}const BM=document.getElementById("root");if(!BM)throw new Error("Root element was not found.");R1.createRoot(BM).render(ie.jsx(_t.StrictMode,{children:ie.jsx(Aw,{})}));

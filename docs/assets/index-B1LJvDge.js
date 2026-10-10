(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Mh={exports:{}},_l={};var Hv;function WE(){if(Hv)return _l;Hv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:c}}return _l.Fragment=e,_l.jsx=i,_l.jsxs=i,_l}var Gv;function qE(){return Gv||(Gv=1,Mh.exports=WE()),Mh.exports}var $t=qE(),yh={exports:{}},se={};var Vv;function YE(){if(Vv)return se;Vv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),y=Symbol.iterator;function R(V){return V===null||typeof V!="object"?null:(V=y&&V[y]||V["@@iterator"],typeof V=="function"?V:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function I(V,mt,Ct){this.props=V,this.context=mt,this.refs=x,this.updater=Ct||U}I.prototype.isReactComponent={},I.prototype.setState=function(V,mt){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,mt,"setState")},I.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function k(){}k.prototype=I.prototype;function D(V,mt,Ct){this.props=V,this.context=mt,this.refs=x,this.updater=Ct||U}var L=D.prototype=new k;L.constructor=D,M(L,I.prototype),L.isPureReactComponent=!0;var w=Array.isArray;function N(){}var E={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function F(V,mt,Ct){var $=Ct.ref;return{$$typeof:o,type:V,key:mt,ref:$!==void 0?$:null,props:Ct}}function P(V,mt){return F(V.type,mt,V.props)}function H(V){return typeof V=="object"&&V!==null&&V.$$typeof===o}function K(V){var mt={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Ct){return mt[Ct]})}var W=/\/+/g;function Z(V,mt){return typeof V=="object"&&V!==null&&V.key!=null?K(""+V.key):mt.toString(36)}function B(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(N,N):(V.status="pending",V.then(function(mt){V.status==="pending"&&(V.status="fulfilled",V.value=mt)},function(mt){V.status==="pending"&&(V.status="rejected",V.reason=mt)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function G(V,mt,Ct,$,ht){var Tt=typeof V;(Tt==="undefined"||Tt==="boolean")&&(V=null);var Ft=!1;if(V===null)Ft=!0;else switch(Tt){case"bigint":case"string":case"number":Ft=!0;break;case"object":switch(V.$$typeof){case o:case e:Ft=!0;break;case S:return Ft=V._init,G(Ft(V._payload),mt,Ct,$,ht)}}if(Ft)return ht=ht(V),Ft=$===""?"."+Z(V,0):$,w(ht)?(Ct="",Ft!=null&&(Ct=Ft.replace(W,"$&/")+"/"),G(ht,mt,Ct,"",function(Xe){return Xe})):ht!=null&&(H(ht)&&(ht=P(ht,Ct+(ht.key==null||V&&V.key===ht.key?"":(""+ht.key).replace(W,"$&/")+"/")+Ft)),mt.push(ht)),1;Ft=0;var vt=$===""?".":$+":";if(w(V))for(var wt=0;wt<V.length;wt++)$=V[wt],Tt=vt+Z($,wt),Ft+=G($,mt,Ct,Tt,ht);else if(wt=R(V),typeof wt=="function")for(V=wt.call(V),wt=0;!($=V.next()).done;)$=$.value,Tt=vt+Z($,wt++),Ft+=G($,mt,Ct,Tt,ht);else if(Tt==="object"){if(typeof V.then=="function")return G(B(V),mt,Ct,$,ht);throw mt=String(V),Error("Objects are not valid as a React child (found: "+(mt==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":mt)+"). If you meant to render a collection of children, use an array instead.")}return Ft}function rt(V,mt,Ct){if(V==null)return V;var $=[],ht=0;return G(V,$,"","",function(Tt){return mt.call(Ct,Tt,ht++)}),$}function nt(V){if(V._status===-1){var mt=V._result,Ct=mt();Ct.then(function($){(V._status===0||V._status===-1)&&(V._status=1,V._result=$,Ct.status===void 0&&(Ct.status="fulfilled",Ct.value=$))},function($){(V._status===0||V._status===-1)&&(V._status=2,V._result=$,Ct.status===void 0&&(Ct.status="rejected",Ct.reason=$))}),V._status===-1&&(V._status=0,V._result=Ct)}if(V._status===1)return V._result.default;throw V._result}var ct=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var mt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(mt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)};function gt(V){var mt=E.T,Ct={};Ct.types=mt!==null?mt.types:null,E.T=Ct;try{var $=V(),ht=E.S;ht!==null&&ht(Ct,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(N,ct)}catch(Tt){ct(Tt)}finally{mt!==null&&Ct.types!==null&&(mt.types=Ct.types),E.T=mt}}function bt(V){var mt=E.T;if(mt!==null){var Ct=mt.types;Ct===null?mt.types=[V]:Ct.indexOf(V)===-1&&Ct.push(V)}else gt(bt.bind(null,V))}var At={map:rt,forEach:function(V,mt,Ct){rt(V,function(){mt.apply(this,arguments)},Ct)},count:function(V){var mt=0;return rt(V,function(){mt++}),mt},toArray:function(V){return rt(V,function(mt){return mt})||[]},only:function(V){if(!H(V))throw Error("React.Children.only expected to receive a single React element child.");return V}};return se.Activity=g,se.Children=At,se.Component=I,se.Fragment=i,se.Profiler=l,se.PureComponent=D,se.StrictMode=r,se.Suspense=p,se.ViewTransition=v,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,se.__COMPILER_RUNTIME={__proto__:null,c:function(V){return E.H.useMemoCache(V)}},se.addTransitionType=bt,se.cache=function(V){return function(){return V.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(V,mt,Ct){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var $=M({},V.props),ht=V.key;if(mt!=null)for(Tt in mt.key!==void 0&&(ht=""+mt.key),mt)!C.call(mt,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&mt.ref===void 0||($[Tt]=mt[Tt]);var Tt=arguments.length-2;if(Tt===1)$.children=Ct;else if(1<Tt){for(var Ft=Array(Tt),vt=0;vt<Tt;vt++)Ft[vt]=arguments[vt+2];$.children=Ft}return F(V.type,ht,$)},se.createContext=function(V){return V={$$typeof:d,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:c,_context:V},V},se.createElement=function(V,mt,Ct){var $,ht={},Tt=null;if(mt!=null)for($ in mt.key!==void 0&&(Tt=""+mt.key),mt)C.call(mt,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(ht[$]=mt[$]);var Ft=arguments.length-2;if(Ft===1)ht.children=Ct;else if(1<Ft){for(var vt=Array(Ft),wt=0;wt<Ft;wt++)vt[wt]=arguments[wt+2];ht.children=vt}if(V&&V.defaultProps)for($ in Ft=V.defaultProps,Ft)ht[$]===void 0&&(ht[$]=Ft[$]);return F(V,Tt,ht)},se.createRef=function(){return{current:null}},se.forwardRef=function(V){return{$$typeof:h,render:V}},se.isValidElement=H,se.lazy=function(V){return{$$typeof:S,_payload:{_status:-1,_result:V},_init:nt}},se.memo=function(V,mt){return{$$typeof:m,type:V,compare:mt===void 0?null:mt}},se.startTransition=gt,se.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},se.use=function(V){return E.H.use(V)},se.useActionState=function(V,mt,Ct){return E.H.useActionState(V,mt,Ct)},se.useCallback=function(V,mt){return E.H.useCallback(V,mt)},se.useContext=function(V){return E.H.useContext(V)},se.useDebugValue=function(){},se.useDeferredValue=function(V,mt){return E.H.useDeferredValue(V,mt)},se.useEffect=function(V,mt){return E.H.useEffect(V,mt)},se.useEffectEvent=function(V){return E.H.useEffectEvent(V)},se.useId=function(){return E.H.useId()},se.useImperativeHandle=function(V,mt,Ct){return E.H.useImperativeHandle(V,mt,Ct)},se.useInsertionEffect=function(V,mt){return E.H.useInsertionEffect(V,mt)},se.useLayoutEffect=function(V,mt){return E.H.useLayoutEffect(V,mt)},se.useMemo=function(V,mt){return E.H.useMemo(V,mt)},se.useOptimistic=function(V,mt){return E.H.useOptimistic(V,mt)},se.useReducer=function(V,mt,Ct){return E.H.useReducer(V,mt,Ct)},se.useRef=function(V){return E.H.useRef(V)},se.useState=function(V){return E.H.useState(V)},se.useSyncExternalStore=function(V,mt,Ct){return E.H.useSyncExternalStore(V,mt,Ct)},se.useTransition=function(){return E.H.useTransition()},se.version="19.3.0",se}var Xv;function mm(){return Xv||(Xv=1,yh.exports=YE()),yh.exports}var Te=mm(),Eh={exports:{}},vl={},Th={exports:{}},bh={};var kv;function ZE(){return kv||(kv=1,(function(o){function e(B,G){var rt=B.length;B.push(G);t:for(;0<rt;){var nt=rt-1>>>1,ct=B[nt];if(0<l(ct,G))B[nt]=G,B[rt]=ct,rt=nt;else break t}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],rt=B.pop();if(rt!==G){B[0]=rt;t:for(var nt=0,ct=B.length,gt=ct>>>1;nt<gt;){var bt=2*(nt+1)-1,At=B[bt],V=bt+1,mt=B[V];if(0>l(At,rt))V<ct&&0>l(mt,At)?(B[nt]=mt,B[V]=rt,nt=V):(B[nt]=At,B[bt]=rt,nt=bt);else if(V<ct&&0>l(mt,rt))B[nt]=mt,B[V]=rt,nt=V;else break t}}return G}function l(B,G){var rt=B.sortIndex-G.sortIndex;return rt!==0?rt:B.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],S=1,g=null,v=3,y=!1,R=!1,U=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function D(B){for(var G=i(m);G!==null;){if(G.callback===null)r(m);else if(G.startTime<=B)r(m),G.sortIndex=G.expirationTime,e(p,G);else break;G=i(m)}}function L(B){if(U=!1,D(B),!R)if(i(p)!==null)R=!0,w||(w=!0,H());else{var G=i(m);G!==null&&Z(L,G.startTime-B)}}var w=!1,N=-1,E=5,C=-1;function F(){return M?!0:!(o.unstable_now()-C<E)}function P(){if(M=!1,w){var B=o.unstable_now();C=B;var G=!0;try{t:{R=!1,U&&(U=!1,I(N),N=-1),y=!0;var rt=v;try{e:{for(D(B),g=i(p);g!==null&&!(g.expirationTime>B&&F());){var nt=g.callback;if(typeof nt=="function"){g.callback=null,v=g.priorityLevel;var ct=nt(g.expirationTime<=B);if(B=o.unstable_now(),typeof ct=="function"){g.callback=ct,D(B),G=!0;break e}g===i(p)&&r(p),D(B)}else r(p);g=i(p)}if(g!==null)G=!0;else{var gt=i(m);gt!==null&&Z(L,gt.startTime-B),G=!1}}break t}finally{g=null,v=rt,y=!1}G=void 0}}finally{G?H():w=!1}}}var H;if(typeof k=="function")H=function(){k(P)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,W=K.port2;K.port1.onmessage=P,H=function(){W.postMessage(null)}}else H=function(){x(P,0)};function Z(B,G){N=x(function(){B(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(B){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var rt=v;v=G;try{return B()}finally{v=rt}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var rt=v;v=B;try{return G()}finally{v=rt}},o.unstable_scheduleCallback=function(B,G,rt){var nt=o.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?nt+rt:nt):rt=nt,B){case 1:var ct=-1;break;case 2:ct=250;break;case 5:ct=1073741823;break;case 4:ct=1e4;break;default:ct=5e3}return ct=rt+ct,B={id:S++,callback:G,priorityLevel:B,startTime:rt,expirationTime:ct,sortIndex:-1},rt>nt?(B.sortIndex=rt,e(m,B),i(p)===null&&B===i(m)&&(U?(I(N),N=-1):U=!0,Z(L,rt-nt))):(B.sortIndex=ct,e(p,B),R||y||(R=!0,w||(w=!0,H()))),B},o.unstable_shouldYield=F,o.unstable_wrapCallback=function(B){var G=v;return function(){var rt=v;v=G;try{return B.apply(this,arguments)}finally{v=rt}}}})(bh)),bh}var Wv;function KE(){return Wv||(Wv=1,Th.exports=ZE()),Th.exports}var Ah={exports:{}},On={};var qv;function QE(){if(qv)return On;qv=1;var o=mm();function e(S){var g="https://react.dev/errors/"+S;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+S+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(S,g,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:y===d?d:""+y,children:S,containerInfo:g,implementation:v}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(S,g){if(S==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,On.browser=function(S){return{$$typeof:c,_reason:S}},On.createPortal=function(S,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return h(S,g,null,v)},On.flushSync=function(S){var g=p.T,v=r.p;try{if(p.T=null,r.p=2,S)return S()}finally{p.T=g,r.p=v,r.d.f()}},On.preconnect=function(S,g){typeof S=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(S,g))},On.prefetchDNS=function(S){typeof S=="string"&&r.d.D(S)},On.preinit=function(S,g){if(typeof S=="string"&&g&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin),R=typeof g.integrity=="string"?g.integrity:void 0,U=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?r.d.S(S,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:y,integrity:R,fetchPriority:U}):v==="script"&&r.d.X(S,{crossOrigin:y,integrity:R,fetchPriority:U,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},On.preinitModule=function(S,g){if(typeof S=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);r.d.M(S,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&r.d.M(S)},On.preload=function(S,g){if(typeof S=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin);r.d.L(S,v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},On.preloadModule=function(S,g){if(typeof S=="string")if(g){var v=m(g.as,g.crossOrigin);r.d.m(S,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else r.d.m(S)},On.requestFormReset=function(S){r.d.r(S)},On.unstable_batchedUpdates=function(S,g){return S(g)},On.useFormState=function(S,g,v){return p.H.useFormState(S,g,v)},On.useFormStatus=function(){return p.H.useHostTransitionStatus()},On.version="19.3.0",On}var Yv;function _x(){if(Yv)return Ah.exports;Yv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ah.exports=QE(),Ah.exports}var Zv;function JE(){if(Zv)return vl;Zv=1;var o=KE(),e=mm(),i=_x();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),t;if(f===s)return p(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var _=!1,A=u.child;A;){if(A===a){_=!0,a=u,s=f;break}if(A===s){_=!0,s=u,a=f;break}A=A.sibling}if(!_){for(A=f.child;A;){if(A===a){_=!0,a=f,s=u;break}if(A===s){_=!0,s=f,a=u;break}A=A.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}function g(t,n,a,s,u,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,u,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,a,s,u,f))return!0;t=t.sibling}return!1}function v(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function y(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function R(t){var n=[null,null],a=v(t);return a===null||U(n,t,a.child,{foundSelf:!1}),n}function U(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&U(t,n,a.child,s))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var x=null,I=null;function k(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function D(t,n,a){return t===a?(I=t,!1):t===n?(I!==null&&(x=t),!0):!1}function L(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function w(t,n,a){for(var s=0,u=t;u;u=a(u))s++;u=0;for(var f=n;f;f=a(f))u++;for(;0<s-u;)t=a(t),s--;for(;0<u-s;)n=a(n),u--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var N=Object.assign,E=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),nt=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),gt=Symbol.for("react.activity"),bt=Symbol.for("react.legacy_hidden"),At=Symbol.for("react.memo_cache_sentinel"),V=Symbol.for("react.view_transition"),mt=Symbol.for("react.recoverable"),Ct=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=Ct&&t[Ct]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Symbol.for("react.client.reference");function Tt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ht?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case P:return"Fragment";case K:return"Profiler";case H:return"StrictMode";case G:return"Suspense";case rt:return"SuspenseList";case gt:return"Activity";case V:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case F:return"Portal";case Z:return t.displayName||"Context";case W:return(t._context.displayName||"Context")+".Consumer";case B:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nt:return n=t.displayName||null,n!==null?n:Tt(t.type)||"Memo";case ct:n=t._payload,t=t._init;try{return Tt(t(n))}catch{}}return null}var Ft=Array.isArray,vt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,wt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Xe={pending:!1,data:null,method:null,action:null},pe=[],ge=-1;function xe(t){return{current:t}}function ee(t){0>ge||(t.current=pe[ge],pe[ge]=null,ge--)}function ie(t,n){ge++,pe[ge]=t.current,t.current=n}var ke=xe(null),mn=xe(null),ze=xe(null),nn=xe(null);function J(t,n){switch(ie(ze,n),ie(mn,t),ie(ke,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?K_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=K_(n),t=Q_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ee(ke),ie(ke,t)}function rn(){ee(ke),ee(mn),ee(ze)}function Pe(t){var n=t.memoizedState;n!==null&&(ks._currentValue=n.memoizedState,ie(nn,t)),n=ke.current;var a=Q_(n,t.type);n!==a&&(ie(mn,t),ie(ke,a))}function O(t){mn.current===t&&(ee(ke),ee(mn)),nn.current===t&&(ee(nn),ks._currentValue=Xe)}var T,it;function ut(t){if(T===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);T=n&&n[1]||"",it=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+T+t+it}var pt=!1;function Rt(t,n){if(!t||pt)return"";pt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(Pt){var j=Pt}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(Pt){j=Pt}xt=!1;try{var lt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),xt=!0,new t}finally{xt&&(lt!==void 0?Object.defineProperty(t.prototype,"props",lt):delete t.prototype.props)}}}else{try{throw Error()}catch(Pt){j=Pt}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(Pt){if(Pt&&j&&typeof Pt.stack=="string")return[Pt.stack,j.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],A=f[1];if(_&&A){var z=_.split(`
`),et=A.split(`
`);for(u=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(s===z.length||u===et.length)for(s=z.length-1,u=et.length-1;1<=s&&0<=u&&z[s]!==et[u];)u--;for(;1<=s&&0<=u;s--,u--)if(z[s]!==et[u]){if(s!==1||u!==1)do if(s--,u--,0>u||z[s]!==et[u]){var ft=`
`+z[s].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=s&&0<=u);break}}}finally{pt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ut(a):""}function Ut(t,n){switch(t.tag){case 26:case 27:case 5:return ut(t.type);case 16:return ut("Lazy");case 13:return t.child!==n&&n!==null?ut("Suspense Fallback"):ut("Suspense");case 19:return ut("SuspenseList");case 0:case 15:return Rt(t.type,!1);case 11:return Rt(t.type.render,!1);case 1:return Rt(t.type,!0);case 31:return ut("Activity");case 30:return ut("ViewTransition");default:return""}}function _t(t){try{var n="",a=null;do n+=Ut(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var yt=Object.prototype.hasOwnProperty,Nt=o.unstable_scheduleCallback,jt=o.unstable_cancelCallback,zt=o.unstable_shouldYield,It=o.unstable_requestPaint,kt=o.unstable_now,ne=o.unstable_getCurrentPriorityLevel,le=o.unstable_ImmediatePriority,Q=o.unstable_UserBlockingPriority,Dt=o.unstable_NormalPriority,Mt=o.unstable_LowPriority,Lt=o.unstable_IdlePriority,Xt=o.log,Et=o.unstable_setDisableYieldValue,Jt=null,Vt=null;function Ce(t){if(typeof Xt=="function"&&Et(t),Vt&&typeof Vt.setStrictMode=="function")try{Vt.setStrictMode(Jt,t)}catch{}}var ue=Math.clz32?Math.clz32:Kc,ni=Math.log,_i=Math.LN2;function Kc(t){return t>>>=0,t===0?32:31-(ni(t)/_i|0)|0}var ss=256,Ar=262144,Va=4194304;function ma(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Rr(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var A=s&134217727;return A!==0?(s=A&~f,s!==0?u=ma(s):(_&=A,_!==0?u=ma(_):a||(a=A&~t,a!==0&&(u=ma(a))))):(A=s&~f,A!==0?u=ma(A):_!==0?u=ma(_):a||(a=s&~t,a!==0&&(u=ma(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Xa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Xi(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-ue(a),u=1<<s;n|=t[s],a&=~u}return n}function Eo(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function To(){var t=Va;return Va<<=1,(Va&62914560)===0&&(Va=4194304),t}function os(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ki(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Hl(t,n,a,s,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,z=t.expirationTimes,et=t.hiddenUpdates;for(a=_&~a;0<a;){var ft=31-ue(a),xt=1<<ft;A[ft]=0,z[ft]=-1;var j=et[ft];if(j!==null)for(et[ft]=null,ft=0;ft<j.length;ft++){var lt=j[ft];lt!==null&&(lt.lane&=-536870913)}a&=~xt}s!==0&&Cr(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Cr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-ue(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function bo(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-ue(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Ao(t,n){var a=n&-n;return a=(a&42)!==0?1:Ro(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ro(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Co(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Gl(){var t=wt.p;return t!==0?t:(t=window.event,t===void 0?32:Lv(t.type))}function Vl(t,n){var a=wt.p;try{return wt.p=t,n()}finally{wt.p=a}}var vi=Math.random().toString(36).slice(2),b="__reactFiber$"+vi,X="__reactProps$"+vi,dt="__reactContainer$"+vi,st="__reactEvents$"+vi,ot="__reactListeners$"+vi,Bt="__reactHandles$"+vi,Wt="__reactResources$"+vi,Ot="__reactMarker$"+vi,Zt="__reactLoad$"+vi;function Kt(t){delete t[b],delete t[X],delete t[ot],delete t[Bt]}function re(t){var n;if(n=t[b])return n;for(var a=t.parentNode;a;){if(n=a[dt]||a[b]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=hv(t);t!==null;){if(a=t[b])return a;t=hv(t)}return n}t=a,a=t.parentNode}return null}function ce(t){if(t=t[b]||t[dt]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function qt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Me(t){var n=t[Wt];return n||(n=t[Wt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _e(t){t[Ot]=!0}function Ke(t){t[Zt]=void 0}var Ge=new Set,Mn={};function Ht(t,n){ln(t,n),ln(t+"Capture",n)}function ln(t,n){for(Mn[t]=n,t=0;t<n.length;t++)Ge.add(n[t])}var we=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vn={},ii={};function Wi(t){return yt.call(ii,t)?!0:yt.call(Vn,t)?!1:we.test(t)?ii[t]=!0:(Vn[t]=!0,!1)}var ve=!1;function Be(){var t=ve;return ve=!1,t}function $e(t,n,a){if(Wi(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function ai(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function be(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function un(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ga(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xl(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Qc(t){if(!t._valueTracker){var n=ga(t)?"checked":"value";t._valueTracker=Xl(t,n,""+t[n])}}function zm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=ga(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var dM=/[\n"\\]/g;function Si(t){return t.replace(dM,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Jc(t,n,a,s,u,f,_,A){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+un(n)):t.value!==""+un(n)&&(t.value=""+un(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?jc(t,un(t.value)):jc(t,un(n)):a!=null?jc(t,un(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+un(A):t.removeAttribute("name")}function Fm(t,n,a,s,u,f,_,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Qc(t);return}a=a!=null?""+un(a):"",n=n!=null?""+un(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=A?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Qc(t)}function jc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function ls(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+un(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Bm(t,n,a){if(n!=null&&(n=""+un(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+un(a):""}function Hm(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Ft(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=un(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Qc(t)}function us(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var hM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gm(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||hM.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Vm(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",ve=!0);for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&(Gm(t,u,s),ve=!0)}else for(var f in n)n.hasOwnProperty(f)&&Gm(t,f,n[f])}function $c(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kl(t){return mM.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qi(){}var tf=null;function ef(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cs=null,fs=null;function Xm(t){var n=ce(t);if(n&&(t=n.stateNode)){var a=t[X]||null;t:switch(t=n.stateNode,n.type){case"input":if(Jc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Si(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[X]||null;if(!u)throw Error(r(90));Jc(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&zm(s)}break t;case"textarea":Bm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ls(t,!!a.multiple,n,!1)}}}var nf=!1;function km(t,n,a){if(nf)return t(n,a);nf=!0;try{var s=t(n);return s}finally{if(nf=!1,(cs!==null||fs!==null)&&(ku(),cs&&(n=cs,t=fs,fs=cs=null,Xm(n),t)))for(n=0;n<t.length;n++)Xm(t[n])}}function wo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[X]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var _a=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),af=!1;if(_a)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){af=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{af=!1}var ka=null,rf=null,Wl=null;function Wm(){if(Wl)return Wl;var t,n=rf,a=n.length,s,u="value"in ka?ka.value:ka.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===u[f-s];s++);return Wl=u.slice(t,1<s?1-s:void 0)}function ql(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Yl(){return!0}function qm(){return!1}function Xn(t){function n(a,s,u,f,_){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Yl:qm,this.isPropagationStopped=qm,this}return N(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yl)},persist:function(){},isPersistent:Yl}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=Xn(Wa),No=N({},Wa,{view:0,detail:0}),gM=Xn(No),sf,of,Uo,Kl=N({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Uo&&(Uo&&t.type==="mousemove"?(sf=t.screenX-Uo.screenX,of=t.screenY-Uo.screenY):of=sf=0,Uo=t),sf)},movementY:function(t){return"movementY"in t?t.movementY:of}}),Ym=Xn(Kl),_M=N({},Kl,{dataTransfer:0}),vM=Xn(_M),SM=N({},No,{relatedTarget:0}),lf=Xn(SM),xM=N({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),MM=Xn(xM),yM=N({},Wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),EM=Xn(yM),TM=N({},Wa,{data:0}),Zm=Xn(TM),bM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CM(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=RM[t])?!!n[t]:!1}function uf(){return CM}var wM=N({},No,{key:function(t){if(t.key){var n=bM[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?AM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uf,charCode:function(t){return t.type==="keypress"?ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),DM=Xn(wM),NM=N({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=Xn(NM),UM=N({},Wa,{submitter:0}),LM=Xn(UM),OM=N({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uf}),PM=Xn(OM),IM=N({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),zM=Xn(IM),FM=N({},Kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),BM=Xn(FM),HM=N({},Wa,{newState:0,oldState:0,source:0}),GM=Xn(HM),VM=[9,13,27,32],cf=_a&&"CompositionEvent"in window,Lo=null;_a&&"documentMode"in document&&(Lo=document.documentMode);var XM=_a&&"TextEvent"in window&&!Lo,Qm=_a&&(!cf||Lo&&8<Lo&&11>=Lo),Jm=" ",jm=!1;function $m(t,n){switch(t){case"keyup":return VM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function kM(t,n){switch(t){case"compositionend":return t0(n);case"keypress":return n.which!==32?null:(jm=!0,Jm);case"textInput":return t=n.data,t===Jm&&jm?null:t;default:return null}}function WM(t,n){if(ds)return t==="compositionend"||!cf&&$m(t,n)?(t=Wm(),Wl=rf=ka=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qm&&n.locale!=="ko"?null:n.data;default:return null}}var qM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function e0(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!qM[t.type]:n==="textarea"}function n0(t,n,a,s){cs?fs?fs.push(s):fs=[s]:cs=s,n=Qu(n,"onChange"),0<n.length&&(a=new Zl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Oo=null,Po=null;function YM(t){X_(t,0)}function Ql(t){var n=qt(t);if(zm(n))return t}function i0(t,n){if(t==="change")return n}var a0=!1;if(_a){var ff;if(_a){var df="oninput"in document;if(!df){var r0=document.createElement("div");r0.setAttribute("oninput","return;"),df=typeof r0.oninput=="function"}ff=df}else ff=!1;a0=ff&&(!document.documentMode||9<document.documentMode)}function s0(){Oo&&(Oo.detachEvent("onpropertychange",o0),Po=Oo=null)}function o0(t){if(t.propertyName==="value"&&Ql(Po)){var n=[];n0(n,Po,t,ef(t)),km(YM,n)}}function ZM(t,n,a){t==="focusin"?(s0(),Oo=n,Po=a,Oo.attachEvent("onpropertychange",o0)):t==="focusout"&&s0()}function KM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ql(Po)}function QM(t,n){if(t==="click")return Ql(n)}function JM(t,n){if(t==="input"||t==="change")return Ql(n)}function jM(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ri=typeof Object.is=="function"?Object.is:jM;function Io(t,n){if(ri(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!yt.call(n,u)||!ri(t[u],n[u]))return!1}return!0}function hf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function l0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function u0(t,n){var a=l0(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=l0(a)}}function c0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?c0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function f0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=hf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=hf(t.document)}return n}function pf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var $M=_a&&"documentMode"in document&&11>=document.documentMode,hs=null,mf=null,zo=null,gf=!1;function d0(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gf||hs==null||hs!==hf(s)||(s=hs,"selectionStart"in s&&pf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),zo&&Io(zo,s)||(zo=s,s=Qu(mf,"onSelect"),0<s.length&&(n=new Zl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=hs)))}function wr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ps={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionrun:wr("Transition","TransitionRun"),transitionstart:wr("Transition","TransitionStart"),transitioncancel:wr("Transition","TransitionCancel"),transitionend:wr("Transition","TransitionEnd")},_f={},h0={};_a&&(h0=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function Dr(t){if(_f[t])return _f[t];if(!ps[t])return t;var n=ps[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in h0)return _f[t]=n[a];return t}var p0=Dr("animationend"),m0=Dr("animationiteration"),g0=Dr("animationstart"),ty=Dr("transitionrun"),ey=Dr("transitionstart"),ny=Dr("transitioncancel"),_0=Dr("transitionend"),v0=new Map,vf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vf.push("scrollEnd");function Di(t,n){v0.set(t,n),Ht(n,[t])}var iy=0;function va(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Oi.identifierPrefix;var a=iy++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function S0(t){if(t==null||typeof t=="string")return t;var n=null,a=Os;if(a!==null)for(var s=0;s<a.length;s++){var u=t[a[s]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function Sa(t,n){return t=S0(t),n=S0(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Jl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},xi=[],ms=0,Sf=0;function jl(){for(var t=ms,n=Sf=ms=0;n<t;){var a=xi[n];xi[n++]=null;var s=xi[n];xi[n++]=null;var u=xi[n];xi[n++]=null;var f=xi[n];if(xi[n++]=null,s!==null&&u!==null){var _=s.pending;_===null?u.next=u:(u.next=_.next,_.next=u),s.pending=u}f!==0&&x0(a,u,f)}}function $l(t,n,a,s){xi[ms++]=t,xi[ms++]=n,xi[ms++]=a,xi[ms++]=s,Sf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function xf(t,n,a,s){return $l(t,n,a,s),tu(t)}function Nr(t,n){return $l(t,null,null,n),tu(t)}function x0(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-ue(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function tu(t){if(50<rl)throw rl=0,Xu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var gs={};function ay(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,s){return new ay(t,n,a,s)}function Mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xa(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function M0(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function eu(t,n,a,s,u,f){var _=0;if(s=t,typeof s=="function")Mf(s)&&(_=1);else if(typeof s=="string")_=UE(t,a,ke.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case gt:return t=Kn(31,a,n,u),t.elementType=gt,t.lanes=f,t;case P:return Ur(a.children,u,f,n);case H:_=8,u|=24;break;case K:return t=Kn(12,a,n,u|2),t.elementType=K,t.lanes=f,t;case G:return t=Kn(13,a,n,u),t.elementType=G,t.lanes=f,t;case rt:return t=Kn(19,a,n,u),t.elementType=rt,t.lanes=f,t;case bt:case V:return t=u|32,t=Kn(30,a,n,t),t.elementType=V,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case Z:_=10;break t;case W:_=9;break t;case B:_=11;break t;case nt:_=14;break t;case ct:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Kn(_,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function Ur(t,n,a,s){return t=Kn(7,t,s,n),t.lanes=a,t}function yf(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function y0(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function Ef(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var E0=new WeakMap;function Mi(t,n){if(typeof t=="object"&&t!==null){var a=E0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:_t(n)},E0.set(t,n),n)}return{value:t,source:n,stack:_t(n)}}var _s=[],vs=0,nu=null,Fo=0,yi=[],Ei=0,qa=null,Yi=1,Zi="";function Ma(t,n){_s[vs++]=Fo,_s[vs++]=nu,nu=t,Fo=n}function T0(t,n,a){yi[Ei++]=Yi,yi[Ei++]=Zi,yi[Ei++]=qa,qa=t;var s=Yi;t=Zi;var u=32-ue(s)-1;s&=~(1<<u),a+=1;var f=32-ue(n)+u;if(30<f){var _=u-u%5;f=(s&(1<<_)-1).toString(32),s>>=_,u-=_,Yi=1<<32-ue(n)+u|a<<u|s,Zi=f+t}else Yi=1<<f|a<<u|s,Zi=t}function iu(t){t.return!==null&&(Ma(t,1),T0(t,1,0))}function Tf(t){for(;t===nu;)nu=_s[--vs],_s[vs]=null,Fo=_s[--vs],_s[vs]=null;for(;t===qa;)qa=yi[--Ei],yi[Ei]=null,Zi=yi[--Ei],yi[Ei]=null,Yi=yi[--Ei],yi[Ei]=null}function b0(t,n){yi[Ei++]=Yi,yi[Ei++]=Zi,yi[Ei++]=qa,Yi=n.id,Zi=n.overflow,qa=t}var bn=null,tn=null,Se=!1,Ya=null,Ti=!1,bf=Error(r(519));function Za(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Bo(Mi(n,t)),bf}function A0(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[b]=t,n[X]=s,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<ol.length;a++)Ee(ol[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),Fm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),Hm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Y_(n.textContent,a)?(s.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),s.onScroll!=null&&Ee("scroll",n),s.onScrollEnd!=null&&Ee("scrollend",n),s.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||Za(t,!0)}function au(t){for(bn=t.return;bn;)switch(bn.tag){case 5:case 31:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:bn=bn.return}}function Ss(t){if(t!==bn)return!1;if(!Se)return au(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||eh(t.type,t.memoizedProps)),a=!a),a&&tn&&Za(t),au(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=dv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=dv(t)}else n===27?(n=tn,cr(t.type)?(t=ch,ch=null,tn=t):tn=n):tn=bn?Ai(t.stateNode.nextSibling):null;return!0}function Lr(){tn=bn=null,Se=!1}function Af(){var t=Ya;return t!==null&&(jn===null?jn=t:jn.push.apply(jn,t),Ya=null),t}function Bo(t){Ya===null?Ya=[t]:Ya.push(t)}var Rf=xe(null),Or=null,ya=null;function Ka(t,n,a){ie(Rf,n._currentValue),n._currentValue=a}function Ea(t){t._currentValue=Rf.current,ee(Rf)}function ru(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Cf(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var z=0;z<n.length;z++)if(A.context===n[z]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),ru(f.return,a,t),s||(_=null);break t}f=A.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),ru(_,a,t),_=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,_=u.alternate,_!==null&&(_.lanes|=a),ru(u.return,a,t),_=u.child,_=_!==null?_.sibling:null):_=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Pr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var A=u.type;ri(u.pendingProps.value,_.value)||(t!==null?t.push(A):t=[A])}}else if(u===nn.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ks):t=[ks])}u=u.return}return t!==null&&Cf(n,t,a,s),n.flags|=262144,t!==null}function su(t){for(t=t.firstContext;t!==null;){if(!ri(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ir(t){Or=t,ya=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return R0(Or,t)}function ou(t,n){return Or===null&&Ir(t),R0(t,n)}function R0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ya===null){if(t===null)throw Error(r(308));ya=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ya=ya.next=n;return a}var ry=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},sy=o.unstable_scheduleCallback,oy=o.unstable_NormalPriority,gn={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wf(){return{controller:new ry,data:new Map,refCount:0}}function Ho(t){t.refCount--,t.refCount===0&&sy(oy,function(){t.controller.abort()})}function C0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Go=null;function ly(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Vo=null,Df=0,zr=0,xs=null;function uy(t,n){if(Vo===null){var a=Vo=[];Df=0,zr=qd(),xs={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Df++,n.then(w0,w0),n}function w0(){if(--Df===0&&(Go=null,Vo!==null)){xs!==null&&(xs.status="fulfilled");var t=Vo;Vo=null,zr=0,xs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function cy(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var D0=vt.S;vt.S=function(t,n){if(y_=kt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uy(t,n),Go!==null)for(var a=Fs;a!==null;)C0(a,Go),a=a.next;if(a=t.types,a!==null){for(var s=Fs;s!==null;)C0(s,a),s=s.next;if(zr!==0){s=Go,s===null&&(s=Go=[]);for(var u=0;u<a.length;u++){var f=a[u];s.indexOf(f)===-1&&s.push(f)}}}D0!==null&&D0(t,n)};var Fr=xe(null);function Nf(){var t=Fr.current;return t!==null?t:je.pooledCache}function lu(t,n){n===null?ie(Fr,Fr.current):ie(Fr,n.pool)}function N0(){var t=Nf();return t===null?null:{parent:gn._currentValue,pool:t}}var Ms=Error(r(460)),Uf=Error(r(474)),uu=Error(r(542)),cu={then:function(){}};function U0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function L0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,P0(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(qi,qi);else{if(t=je,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,P0(t),t}throw Hr=n,Ms}}function Br(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Hr=a,Ms):a}}var Hr=null;function O0(){if(Hr===null)throw Error(r(459));var t=Hr;return Hr=null,t}function P0(t){if(t===Ms||t===uu)throw Error(r(483))}var ys=null,Xo=0;function fu(t){var n=Xo;return Xo+=1,ys===null&&(ys=[]),L0(ys,t,n)}function Qa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function du(t,n){throw n.$$typeof===E?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function I0(t){function n(tt,q){if(t){var at=tt.deletions;at===null?(tt.deletions=[q],tt.flags|=16):at.push(q)}}function a(tt,q){if(!t)return null;for(;q!==null;)n(tt,q),q=q.sibling;return null}function s(tt){for(var q=new Map;tt!==null;)tt.key===null?q.set(tt.index,tt):q.set(tt.key,tt),tt=tt.sibling;return q}function u(tt,q){return tt=xa(tt,q),tt.index=0,tt.sibling=null,tt}function f(tt,q,at){return tt.index=at,t?(at=tt.alternate,at!==null?(at=at.index,at<q?(tt.flags|=2,q):at):(tt.flags|=134217730,q)):(tt.flags|=1048576,q)}function _(tt){return t&&tt.alternate===null&&(tt.flags|=134217730),tt}function A(tt,q,at,St){return q===null||q.tag!==6?(q=yf(at,tt.mode,St),q.return=tt,q):(q=u(q,at),q.return=tt,q)}function z(tt,q,at,St){var Yt=at.type;return Yt===P?(tt=ft(tt,q,at.props.children,St,at.key),Qa(tt,at),tt):q!==null&&(q.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===ct&&Br(Yt)===q.type)?(q=u(q,at.props),Qa(q,at),q.return=tt,q):(q=eu(at.type,at.key,at.props,null,tt.mode,St),Qa(q,at),q.return=tt,q)}function et(tt,q,at,St){return q===null||q.tag!==4||q.stateNode.containerInfo!==at.containerInfo||q.stateNode.implementation!==at.implementation?(q=Ef(at,tt.mode,St),q.return=tt,q):(q=u(q,at.children||[]),q.return=tt,q)}function ft(tt,q,at,St,Yt){return q===null||q.tag!==7?(q=Ur(at,tt.mode,St,Yt),q.return=tt,q):(q=u(q,at),q.return=tt,q)}function xt(tt,q,at){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=yf(""+q,tt.mode,at),q.return=tt,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case C:return at=eu(q.type,q.key,q.props,null,tt.mode,at),Qa(at,q),at.return=tt,at;case F:return q=Ef(q,tt.mode,at),q.return=tt,q;case ct:return q=Br(q),xt(tt,q,at)}if(Ft(q)||$(q))return q=Ur(q,tt.mode,at,null),q.return=tt,q;if(typeof q.then=="function")return xt(tt,fu(q),at);if(q.$$typeof===Z)return xt(tt,ou(tt,q),at);du(tt,q)}return null}function j(tt,q,at,St){var Yt=q!==null?q.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return Yt!==null?null:A(tt,q,""+at,St);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case C:return at.key===Yt?z(tt,q,at,St):null;case F:return at.key===Yt?et(tt,q,at,St):null;case ct:return at=Br(at),j(tt,q,at,St)}if(Ft(at)||$(at))return Yt!==null?null:ft(tt,q,at,St,null);if(typeof at.then=="function")return j(tt,q,fu(at),St);if(at.$$typeof===Z)return j(tt,q,ou(tt,at),St);du(tt,at)}return null}function lt(tt,q,at,St,Yt){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return tt=tt.get(at)||null,A(q,tt,""+St,Yt);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case C:return tt=tt.get(St.key===null?at:St.key)||null,z(q,tt,St,Yt);case F:return tt=tt.get(St.key===null?at:St.key)||null,et(q,tt,St,Yt);case ct:return St=Br(St),lt(tt,q,at,St,Yt)}if(Ft(St)||$(St))return tt=tt.get(at)||null,ft(q,tt,St,Yt,null);if(typeof St.then=="function")return lt(tt,q,at,fu(St),Yt);if(St.$$typeof===Z)return lt(tt,q,at,ou(q,St),Yt);du(q,St)}return null}function Pt(tt,q,at,St){for(var Yt=null,Re=null,te=q,ae=q=0,Sn=null;te!==null&&ae<at.length;ae++){te.index>ae?(Sn=te,te=null):Sn=te.sibling;var Ue=j(tt,te,at[ae],St);if(Ue===null){te===null&&(te=Sn);break}t&&te&&Ue.alternate===null&&n(tt,te),q=f(Ue,q,ae),Re===null?Yt=Ue:Re.sibling=Ue,Re=Ue,te=Sn}if(ae===at.length)return a(tt,te),Se&&Ma(tt,ae),Yt;if(te===null){for(;ae<at.length;ae++)te=xt(tt,at[ae],St),te!==null&&(q=f(te,q,ae),Re===null?Yt=te:Re.sibling=te,Re=te);return Se&&Ma(tt,ae),Yt}for(te=s(te);ae<at.length;ae++)Sn=lt(te,tt,ae,at[ae],St),Sn!==null&&(t&&(Ue=Sn.alternate,Ue!==null&&te.delete(Ue.key===null?ae:Ue.key)),q=f(Sn,q,ae),Re===null?Yt=Sn:Re.sibling=Sn,Re=Sn);return t&&te.forEach(function(mr){return n(tt,mr)}),Se&&Ma(tt,ae),Yt}function Qt(tt,q,at,St){if(at==null)throw Error(r(151));for(var Yt=null,Re=null,te=q,ae=q=0,Sn=null,Ue=at.next();te!==null&&!Ue.done;ae++,Ue=at.next()){te.index>ae?(Sn=te,te=null):Sn=te.sibling;var mr=j(tt,te,Ue.value,St);if(mr===null){te===null&&(te=Sn);break}t&&te&&mr.alternate===null&&n(tt,te),q=f(mr,q,ae),Re===null?Yt=mr:Re.sibling=mr,Re=mr,te=Sn}if(Ue.done)return a(tt,te),Se&&Ma(tt,ae),Yt;if(te===null){for(;!Ue.done;ae++,Ue=at.next())Ue=xt(tt,Ue.value,St),Ue!==null&&(q=f(Ue,q,ae),Re===null?Yt=Ue:Re.sibling=Ue,Re=Ue);return Se&&Ma(tt,ae),Yt}for(te=s(te);!Ue.done;ae++,Ue=at.next())Ue=lt(te,tt,ae,Ue.value,St),Ue!==null&&(t&&(Sn=Ue.alternate,Sn!==null&&te.delete(Sn.key===null?ae:Sn.key)),q=f(Ue,q,ae),Re===null?Yt=Ue:Re.sibling=Ue,Re=Ue);return t&&te.forEach(function(kE){return n(tt,kE)}),Se&&Ma(tt,ae),Yt}function he(tt,q,at,St){if(typeof at=="object"&&at!==null&&at.type===P&&at.key===null&&at.props.ref===void 0&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case C:t:{for(var Yt=at.key;q!==null;){if(q.key===Yt){if(Yt=at.type,Yt===P){if(q.tag===7){a(tt,q.sibling),St=u(q,at.props.children),Qa(St,at),St.return=tt,tt=St;break t}}else if(q.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===ct&&Br(Yt)===q.type){a(tt,q.sibling),St=u(q,at.props),Qa(St,at),St.return=tt,tt=St;break t}a(tt,q);break}else n(tt,q);q=q.sibling}at.type===P?(St=Ur(at.props.children,tt.mode,St,at.key),Qa(St,at),St.return=tt,tt=St):(St=eu(at.type,at.key,at.props,null,tt.mode,St),Qa(St,at),St.return=tt,tt=St)}return _(tt);case F:t:{for(Yt=at.key;q!==null;){if(q.key===Yt)if(q.tag===4&&q.stateNode.containerInfo===at.containerInfo&&q.stateNode.implementation===at.implementation){a(tt,q.sibling),St=u(q,at.children||[]),St.return=tt,tt=St;break t}else{a(tt,q);break}else n(tt,q);q=q.sibling}St=Ef(at,tt.mode,St),St.return=tt,tt=St}return _(tt);case ct:return at=Br(at),he(tt,q,at,St)}if(Ft(at))return Pt(tt,q,at,St);if($(at)){if(Yt=$(at),typeof Yt!="function")throw Error(r(150));return at=Yt.call(at),Qt(tt,q,at,St)}if(typeof at.then=="function")return he(tt,q,fu(at),St);if(at.$$typeof===Z)return he(tt,q,ou(tt,at),St);du(tt,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,q!==null&&q.tag===6?(a(tt,q.sibling),St=u(q,at),St.return=tt,tt=St):(a(tt,q),St=yf(at,tt.mode,St),St.return=tt,tt=St),_(tt)):a(tt,q)}return function(tt,q,at,St){try{Xo=0;var Yt=he(tt,q,at,St);return ys=null,Yt}catch(te){if(te===Ms||te===uu)throw te;var Re=Kn(29,te,null,tt.mode);return Re.lanes=St,Re.return=tt,Re}}}var Gr=I0(!0),z0=I0(!1),Ja=!1;function Lf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Of(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ja(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function $a(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(He&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=tu(t),x0(t,null,a),n}return $l(t,s,n,a),tu(t)}function ko(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,bo(t,a)}}function Pf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var If=!1;function Wo(){if(If){var t=xs;if(t!==null)throw t}}function qo(t,n,a,s){If=!1;var u=t.updateQueue;Ja=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var z=A,et=z.next;z.next=null,_===null?f=et:_.next=et,_=z;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==_&&(A===null?ft.firstBaseUpdate=et:A.next=et,ft.lastBaseUpdate=z))}if(f!==null){var xt=u.baseState;_=0,ft=et=z=null,A=f;do{var j=A.lane&-536870913,lt=j!==A.lane;if(lt?(Ae&j)===j:(s&j)===j){j!==0&&j===zr&&(If=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Pt=t,Qt=A;j=n;var he=a;switch(Qt.tag){case 1:if(Pt=Qt.payload,typeof Pt=="function"){xt=Pt.call(he,xt,j);break t}xt=Pt;break t;case 3:Pt.flags=Pt.flags&-65537|128;case 0:if(Pt=Qt.payload,j=typeof Pt=="function"?Pt.call(he,xt,j):Pt,j==null)break t;xt=N({},xt,j);break t;case 2:Ja=!0}}j=A.callback,j!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[j]:lt.push(j))}else lt={lane:j,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?(et=ft=lt,z=xt):ft=ft.next=lt,_|=j;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);ft===null&&(z=xt),u.baseState=z,u.firstBaseUpdate=et,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),sr|=_,t.lanes=_,t.memoizedState=xt}}function F0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function B0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)F0(a[t],n)}var tr=xe(null),hu=xe(0);function H0(t,n){t=Ca,ie(hu,t),ie(tr,n),Ca=t|n.baseLanes}function zf(){ie(hu,Ca),ie(tr,tr.current)}function Ff(){Ca=hu.current,ee(tr),ee(hu)}var Dn=xe(null),zn=null;function er(t){var n=t.alternate;ie(Nn,Nn.current&1),ie(Dn,t),zn===null&&(n===null||tr.current!==null||n.memoizedState!==null)&&(zn=t)}function Bf(t){ie(Nn,Nn.current),ie(Dn,t),zn===null&&(zn=t)}function G0(t){t.tag===22?(ie(Nn,Nn.current),ie(Dn,t),zn===null&&(zn=t)):nr()}function nr(){ie(Nn,Nn.current),ie(Dn,Dn.current)}function si(t){ee(Dn),zn===t&&(zn=null),ee(Nn)}var Nn=xe(0);function Yo(t,n){ie(Dn,Dn.current),ie(Nn,n)}function Hf(t){ee(Nn),ee(Dn),zn===t&&(zn=null)}function pu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||lh(a)||uh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ta=0,de=null,Qe=null,_n=null,mu=!1,Es=!1,Vr=!1,gu=0,Zo=0,Ts=null,fy=0;function cn(){throw Error(r(321))}function Gf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ri(t[a],n[a]))return!1;return!0}function Vf(t,n,a,s,u,f){return Ta=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,vt.H=t===null||t.memoizedState===null?Tg:bg,Vr=!1,f=a(s,u),Vr=!1,Es&&(f=X0(n,a,s,u)),V0(t),f}function V0(t){vt.H=Eu;var n=Qe!==null&&Qe.next!==null;if(Ta=0,_n=Qe=de=null,mu=!1,Zo=0,Ts=null,n)throw Error(r(300));t===null||vn||(t=t.dependencies,t!==null&&su(t)&&(vn=!0))}function X0(t,n,a,s){de=t;var u=0;do{if(Es&&(Ts=null),Zo=0,Es=!1,25<=u)throw Error(r(301));if(u+=1,_n=Qe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}vt.H=Sy,f=n(a,s)}while(Es);return f}function dy(){var t=vt.H,n=t.useState()[0];return n=typeof n.then=="function"?Ko(n):n,t=t.useState()[0],(Qe!==null?Qe.memoizedState:null)!==t&&(de.flags|=1024),n}function Xf(){var t=gu!==0;return gu=0,t}function kf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Wf(t){if(mu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}mu=!1}Ta=0,_n=Qe=de=null,Es=!1,Zo=gu=0,Ts=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?de.memoizedState=_n=t:_n=_n.next=t,_n}function dn(){if(Qe===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var n=_n===null?de.memoizedState:_n.next;if(n!==null)_n=n,Qe=t;else{if(t===null)throw de.alternate===null?Error(r(467)):Error(r(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},_n===null?de.memoizedState=_n=t:_n=_n.next=t}return _n}function _u(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ko(t){var n=Zo;return Zo+=1,Ts===null&&(Ts=[]),t=L0(Ts,t,n),n=de,(_n===null?n.memoizedState:_n.next)===null&&(n=n.alternate,vt.H=n===null||n.memoizedState===null?Tg:bg),t}function vu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ko(t);if(t.$$typeof===mt)return;if(t.$$typeof===Z)return wn(t)}throw Error(r(438,String(t)))}function qf(t){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=de.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=_u(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=At;return n.index++,a}function ba(t,n){return typeof n=="function"?n(t):n}function Su(t){var n=dn();return Yf(n,Qe,t)}function Yf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var A=_=null,z=null,et=n,ft=!1;do{var xt=et.lane&-536870913;if(xt!==et.lane?(Ae&xt)===xt:(Ta&xt)===xt){var j=et.revertLane;if(j===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),xt===zr&&(ft=!0);else if((Ta&j)===j){et=et.next,j===zr&&(ft=!0);continue}else xt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},z===null?(A=z=xt,_=f):z=z.next=xt,de.lanes|=j,sr|=j;xt=et.action,Vr&&a(f,xt),f=et.hasEagerState?et.eagerState:a(f,xt)}else j={lane:xt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},z===null?(A=z=j,_=f):z=z.next=j,de.lanes|=xt,sr|=xt;et=et.next}while(et!==null&&et!==n);if(z===null?_=f:z.next=A,!ri(f,t.memoizedState)&&(vn=!0,ft&&(a=xs,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=z,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Zf(t){var n=dn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);ri(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function k0(t,n,a){var s=de,u=dn(),f=Se;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!ri((Qe||u).memoizedState,a);if(_&&(u.memoizedState=a,vn=!0),u=u.queue,Jf(Y0.bind(null,s,u,t),[t]),t=u.getSnapshot!==n||_||_n!==null&&(_n.memoizedState.tag&1)!==0,bs(t?9:8,{destroy:void 0},q0.bind(null,s,u,a,n),null),t){if(s.flags|=2048,je===null)throw Error(r(349));f||(Ta&127)!==0||W0(s,n,a)}return a}function W0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=_u(),de.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function q0(t,n,a,s){n.value=a,n.getSnapshot=s,Z0(n)&&K0(t)}function Y0(t,n,a){return a(function(){Z0(n)&&K0(t)})}function Z0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ri(t,a)}catch{return!0}}function K0(t){var n=Nr(t,2);n!==null&&$n(n,t,2)}function Kf(t){var n=kn();if(typeof t=="function"){var a=t;if(t=a(),Vr){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},n}function Q0(t,n,a,s){return t.baseState=a,Yf(t,Qe,typeof s=="function"?s:ba)}function hy(t,n,a,s,u){if(yu(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};vt.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,J0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function J0(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=vt.T,_={};_.types=f!==null?f.types:null,vt.T=_;try{var A=a(u,s),z=vt.S;z!==null&&z(_,A),j0(t,n,A)}catch(et){Qf(t,n,et)}finally{f!==null&&_.types!==null&&(f.types=_.types),vt.T=f}}else try{f=a(u,s),j0(t,n,f)}catch(et){Qf(t,n,et)}}function j0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){$0(t,n,s)},function(s){return Qf(t,n,s)}):$0(t,n,a)}function $0(t,n,a){n.status="fulfilled",n.value=a,tg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,J0(t,a)))}function Qf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,tg(n),n=n.next;while(n!==s)}t.action=null}function tg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function eg(t,n){return n}function ng(t,n){if(Se){var a=je.formState;if(a!==null){t:{var s=de;if(Se){if(tn){e:{for(var u=tn,f=Ti;u.nodeType!==8;){if(!f){u=null;break e}if(u=Ai(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){tn=Ai(u.nextSibling),s=u.data==="F!";break t}}Za(s)}s=!1}s&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:eg,lastRenderedState:n},a.queue=s,a=Mg.bind(null,de,s),s.dispatch=a,s=Kf(!1),f=nd.bind(null,de,!1,s.queue),s=kn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=hy.bind(null,de,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function ig(t){var n=dn();return ag(n,Qe,t)}function ag(t,n,a){if(n=Yf(t,n,eg)[0],t=Su(ba)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ko(n)}catch(_){throw _===Ms?uu:_}else s=n;n=dn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,bs(9,{destroy:void 0},py.bind(null,u,a),null)),[s,f,t]}function py(t,n){t.action=n}function rg(t){var n=dn(),a=Qe;if(a!==null)return ag(n,a,t);dn(),n=n.memoizedState,a=dn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function bs(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=de.updateQueue,n===null&&(n=_u(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function sg(){return dn().memoizedState}function xu(t,n,a,s){var u=kn();de.flags|=t,u.memoizedState=bs(1|n,{destroy:void 0},a,s===void 0?null:s)}function Mu(t,n,a,s){var u=dn();s=s===void 0?null:s;var f=u.memoizedState.inst;Qe!==null&&s!==null&&Gf(s,Qe.memoizedState.deps)?u.memoizedState=bs(n,f,a,s):(de.flags|=t,u.memoizedState=bs(1|n,f,a,s))}function og(t,n){xu(8390656,8,t,n)}function Jf(t,n){Mu(2048,8,t,n)}function my(t){de.flags|=4;var n=de.updateQueue;if(n===null)n=_u(),de.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function lg(t){var n=dn().memoizedState;return my({ref:n,nextImpl:t}),function(){if((He&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function ug(t,n){return Mu(4,2,t,n)}function cg(t,n){return Mu(4,4,t,n)}function fg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function dg(t,n,a){a=a!=null?a.concat([t]):null,Mu(4,4,fg.bind(null,n,t),a)}function jf(){}function hg(t,n){var a=dn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Gf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function pg(t,n){var a=dn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Gf(n,s[1]))return s[0];if(s=t(),Vr){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[s,n],s}function $f(t,n,a){return a===void 0||(Ta&1073741824)!==0&&(Ae&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=T_(),de.lanes|=t,sr|=t,a)}function mg(t,n,a,s){return ri(a,n)?a:tr.current!==null?(t=$f(t,a,s),ri(t,n)||(vn=!0),t):(Ta&106)===0||(Ta&1073741824)!==0&&(Ae&261930)===0?(vn=!0,t.memoizedState=a):(t=T_(),de.lanes|=t,sr|=t,n)}function gg(t,n,a,s,u){var f=wt.p;wt.p=f!==0&&8>f?f:8;var _=vt.T,A={};A.types=_!==null?_.types:null,vt.T=A,nd(t,!1,n,a);try{var z=u(),et=vt.S;if(et!==null&&et(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ft=cy(z,s);Qo(t,n,ft,ci(t))}else Qo(t,n,s,ci(t))}catch(xt){Qo(t,n,{then:function(){},status:"rejected",reason:xt},ci())}finally{wt.p=f,_!==null&&A.types!==null&&(_.types=A.types),vt.T=_}}function gy(){}function td(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=_g(t).queue;gg(t,u,n,Xe,a===null?gy:function(){return vg(t),a(s)})}function _g(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Xe,baseState:Xe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:Xe},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function vg(t){var n=_g(t);n.next===null&&(n=t.alternate.memoizedState),Qo(t,n.next.queue,{},ci())}function ed(){return wn(ks)}function Sg(){return dn().memoizedState}function xg(){return dn().memoizedState}function _y(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ci();t=ja(a);var s=$a(n,t,a);s!==null&&($n(s,n,a),ko(s,n,a)),n={cache:wf()},t.payload=n;return}n=n.return}}function vy(t,n,a){var s=ci();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},yu(t)?yg(n,a):(a=xf(t,n,a,s),a!==null&&($n(a,t,s),Eg(a,n,s)))}function Mg(t,n,a){var s=ci();Qo(t,n,a,s)}function Qo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(yu(t))yg(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,A=f(_,a);if(u.hasEagerState=!0,u.eagerState=A,ri(A,_))return $l(t,n,u,0),je===null&&jl(),!1}catch{}if(a=xf(t,n,u,s),a!==null)return $n(a,t,s),Eg(a,n,s),!0}return!1}function nd(t,n,a,s){if(s={lane:2,revertLane:qd(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},yu(t)){if(n)throw Error(r(479))}else n=xf(t,a,s,2),n!==null&&$n(n,t,2)}function yu(t){var n=t.alternate;return t===de||n!==null&&n===de}function yg(t,n){Es=mu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Eg(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,bo(t,a)}}var Eu={readContext:wn,use:vu,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn,useEffectEvent:cn},Tg={readContext:wn,use:vu,useCallback:function(t,n){return kn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:og,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,xu(4194308,4,fg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return xu(4194308,4,t,n)},useInsertionEffect:function(t,n){xu(4,2,t,n)},useMemo:function(t,n){var a=kn();n=n===void 0?null:n;var s=t();if(Vr){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=kn();if(a!==void 0){var u=a(n);if(Vr){Ce(!0);try{a(n)}finally{Ce(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=vy.bind(null,de,t),[s.memoizedState,t]},useRef:function(t){var n=kn();return t={current:t},n.memoizedState=t},useState:function(t){t=Kf(t);var n=t.queue,a=Mg.bind(null,de,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:jf,useDeferredValue:function(t,n){var a=kn();return $f(a,t,n)},useTransition:function(){var t=Kf(!1);return t=gg.bind(null,de,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=de,u=kn();if(Se){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),je===null)throw Error(r(349));(Ae&127)!==0||W0(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,og(Y0.bind(null,s,f,t),[t]),s.flags|=2048,bs(9,{destroy:void 0},q0.bind(null,s,f,a,n),null),a},useId:function(){var t=kn(),n=je.identifierPrefix;if(Se){var a=Zi,s=Yi;a=(s&~(1<<32-ue(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=gu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=fy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ed,useFormState:ng,useActionState:ng,useOptimistic:function(t){var n=kn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=nd.bind(null,de,!0,a),a.dispatch=n,[t,n]},useMemoCache:qf,useCacheRefresh:function(){return kn().memoizedState=_y.bind(null,de)},useEffectEvent:function(t){var n=kn(),a={impl:t};return n.memoizedState=a,function(){if((He&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},bg={readContext:wn,use:vu,useCallback:hg,useContext:wn,useEffect:Jf,useImperativeHandle:dg,useInsertionEffect:ug,useLayoutEffect:cg,useMemo:pg,useReducer:Su,useRef:sg,useState:function(){return Su(ba)},useDebugValue:jf,useDeferredValue:function(t,n){var a=dn();return mg(a,Qe.memoizedState,t,n)},useTransition:function(){var t=Su(ba)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:Ko(t),n]},useSyncExternalStore:k0,useId:Sg,useHostTransitionStatus:ed,useFormState:ig,useActionState:ig,useOptimistic:function(t,n){var a=dn();return Q0(a,Qe,t,n)},useMemoCache:qf,useCacheRefresh:xg,useEffectEvent:lg},Sy={readContext:wn,use:vu,useCallback:hg,useContext:wn,useEffect:Jf,useImperativeHandle:dg,useInsertionEffect:ug,useLayoutEffect:cg,useMemo:pg,useReducer:Zf,useRef:sg,useState:function(){return Zf(ba)},useDebugValue:jf,useDeferredValue:function(t,n){var a=dn();return Qe===null?$f(a,t,n):mg(a,Qe.memoizedState,t,n)},useTransition:function(){var t=Zf(ba)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:Ko(t),n]},useSyncExternalStore:k0,useId:Sg,useHostTransitionStatus:ed,useFormState:rg,useActionState:rg,useOptimistic:function(t,n){var a=dn();return Qe!==null?Q0(a,Qe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:qf,useCacheRefresh:xg,useEffectEvent:lg};function id(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:N({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ad={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ci(),u=ja(s);u.payload=n,a!=null&&(u.callback=a),n=$a(t,u,s),n!==null&&($n(n,t,s),ko(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ci(),u=ja(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=$a(t,u,s),n!==null&&($n(n,t,s),ko(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ci(),s=ja(a);s.tag=2,n!=null&&(s.callback=n),n=$a(t,s,a),n!==null&&($n(n,t,a),ko(n,t,a))}};function Ag(t,n,a,s,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Io(a,s)||!Io(u,f):!0}function Rg(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&ad.enqueueReplaceState(n,n.state,null)}function Xr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=N({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Cg(t){Jl(t)}function wg(t){console.error(t)}function Dg(t){Jl(t)}function Tu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Ng(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function rd(t,n,a){return a=ja(a),a.tag=3,a.payload={element:null},a.callback=function(){Tu(t,n)},a}function Ug(t){return t=ja(t),t.tag=3,t}function Lg(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){Ng(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Ng(n,a,s),typeof u!="function"&&(or===null?or=new Set([this]):or.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function xy(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Pr(n,a,u,!0),a=Dn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return zn===null?Wu():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===cu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Xd(t,s,u)),!1;case 22:return a.flags|=65536,s===cu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Xd(t,s,u)),!1}throw Error(r(435,a.tag))}return Xd(t,s,u),Wu(),!1}if(Se)return n=Dn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==bf&&(t=Error(r(422),{cause:s}),Bo(Mi(t,a)))):(s!==bf&&(n=Error(r(423),{cause:s}),Bo(Mi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Mi(s,a),u=rd(t.stateNode,s,u),Pf(t,u),fn!==4&&(fn=2)),!1;var f=Error(r(520),{cause:s});if(f=Mi(f,a),al===null?al=[f]:al.push(f),fn!==4&&(fn=2),n===null)return!0;s=Mi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=rd(a.stateNode,s,t),Pf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(or===null||!or.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Ug(u),Lg(u,t,a,s),Pf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var sd=Error(r(461)),vn=!1;function yn(t,n,a,s){n.child=t===null?z0(n,null,a,s):Gr(n,t.child,a,s)}function Og(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var A in s)A!=="ref"&&(_[A]=s[A])}else _=s;return Ir(n),s=Vf(t,n,a,_,f,u),A=Xf(),t!==null&&!vn?(kf(t,n,u),Aa(t,n,u)):(Se&&A&&iu(n),n.flags|=1,yn(t,n,s,u),n.child)}function Pg(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Mf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Ig(t,n,f,s,u)):(t=eu(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!pd(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Io,a(_,s)&&t.ref===n.ref)return Aa(t,n,u)}return n.flags|=1,t=xa(f,s),t.ref=n.ref,t.return=n,n.child=t}function Ig(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Io(f,s)&&t.ref===n.ref)if(vn=!1,n.pendingProps=s=f,pd(t,u))(t.flags&131072)!==0&&(vn=!0);else return n.lanes=t.lanes,Aa(t,n,u)}return od(t,n,a,s,u)}function zg(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return Fg(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&lu(n,f!==null?f.cachePool:null),f!==null?H0(n,f):zf(),G0(n);else return s=n.lanes=536870912,Fg(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(lu(n,f.cachePool),H0(n,f),nr(),n.memoizedState=null):(t!==null&&lu(n,null),zf(),nr());return yn(t,n,u,a),n.child}function Jo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Fg(t,n,a,s,u){var f=Nf();return f=f===null?null:{parent:gn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&lu(n,null),zf(),G0(n),t!==null&&Pr(t,n,s,!0),n.childLanes=u,null}function bu(t,n){return n=Au({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Bg(t,n,a){return Gr(n,t.child,null,a),t=bu(n,n.pendingProps),t.flags|=2,si(n),n.memoizedState=null,t}function My(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(s.mode==="hidden")return t=bu(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Jo(null,t);if(Bf(n),(t=tn)?(t=fv(t,Ti),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:qa!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=y0(t),a.return=n,n.child=a,bn=n,tn=null)):t=null,t===null)throw Za(n);return n.lanes=536870912,null}return bu(n,s)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Bf(n),u)if(n.flags&256)n.flags&=-257,n=Bg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(vn||Pr(t,n,a,!1),u=(a&t.childLanes)!==0,vn||u){if(tr.current===null){if(s=je,s!==null&&(_=Ao(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Nr(t,_),$n(s,t,_),sd;Wu()}n=Bg(t,n,a)}else t=f.treeContext,tn=Ai(_.nextSibling),bn=n,Se=!0,Ya=null,Ti=!1,t!==null&&b0(n,t),n=bu(n,s),n.flags|=134221824;return n}return t=xa(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function As(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function od(t,n,a,s,u){return Ir(n),a=Vf(t,n,a,s,void 0,u),s=Xf(),t!==null&&!vn?(kf(t,n,u),Aa(t,n,u)):(Se&&s&&iu(n),n.flags|=1,yn(t,n,a,u),n.child)}function Hg(t,n,a,s,u,f){return Ir(n),n.updateQueue=null,a=X0(n,s,a,u),V0(t),s=Xf(),t!==null&&!vn?(kf(t,n,f),Aa(t,n,f)):(Se&&s&&iu(n),n.flags|=1,yn(t,n,a,f),n.child)}function Gg(t,n,a,s,u){if(Ir(n),n.stateNode===null){var f=gs,_=a.contextType;typeof _=="object"&&_!==null&&(f=wn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ad,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Lf(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?wn(_):gs,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(id(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&ad.enqueueReplaceState(f,f.state,null),qo(n,s,f,u),Wo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,z=Xr(a,A);f.props=z;var et=f.context,ft=a.contextType;_=gs,typeof ft=="object"&&ft!==null&&(_=wn(ft));var xt=a.getDerivedStateFromProps;ft=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||et!==_)&&Rg(n,f,s,_),Ja=!1;var j=n.memoizedState;f.state=j,qo(n,s,f,u),Wo(),et=n.memoizedState,A||j!==et||Ja?(typeof xt=="function"&&(id(n,a,xt,s),et=n.memoizedState),(z=Ja||Ag(n,a,z,s,j,et,_))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=et),f.props=s,f.state=et,f.context=_,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Of(t,n),_=n.memoizedProps,ft=Xr(a,_),f.props=ft,xt=n.pendingProps,j=f.context,et=a.contextType,z=gs,typeof et=="object"&&et!==null&&(z=wn(et)),A=a.getDerivedStateFromProps,(et=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==xt||j!==z)&&Rg(n,f,s,z),Ja=!1,j=n.memoizedState,f.state=j,qo(n,s,f,u),Wo();var lt=n.memoizedState;_!==xt||j!==lt||Ja||t!==null&&t.dependencies!==null&&su(t.dependencies)?(typeof A=="function"&&(id(n,a,A,s),lt=n.memoizedState),(ft=Ja||Ag(n,a,ft,s,j,lt,z)||t!==null&&t.dependencies!==null&&su(t.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,lt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,lt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=lt),f.props=s,f.state=lt,f.context=z,s=ft):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,As(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Gr(n,t.child,null,u),n.child=Gr(n,null,a,u)):yn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Aa(t,n,u),t}function Vg(t,n,a,s){return Lr(),n.flags|=256,yn(t,n,a,s),n.child}var ld={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ud(t){return{baseLanes:t,cachePool:N0()}}function cd(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ui),t}function Xg(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(Nn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(u?er(n):nr(),(t=tn)?(t=fv(t,Ti),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:qa!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=y0(t),a.return=n,n.child=a,bn=n,tn=null)):t=null,t===null)throw Za(n);return uh(t)?n.lanes=32:n.lanes=536870912,null}return f=s.children,s=s.fallback,u?(nr(),u=n.mode,f=Au({mode:"hidden",children:f},u),s=Ur(s,u,a,null),f.return=n,s.return=n,f.sibling=s,n.child=f,s=n.child,s.memoizedState=ud(a),s.childLanes=cd(t,_,a),n.memoizedState=ld,Jo(null,s)):(er(n),fd(n,f))}var A=t.memoizedState;if(A!==null){var z=A.dehydrated;if(z!==null)return yy(t,n,f,_,s,z,A,a)}return u?(nr(),u=s.fallback,f=n.mode,A=t.child,z=A.sibling,s=xa(A,{mode:"hidden",children:s.children}),s.subtreeFlags=A.subtreeFlags&1206910976,z!==null?u=xa(z,u):(u=Ur(u,f,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,Jo(null,s),s=n.child,u=t.child.memoizedState,u===null?u=ud(a):(f=u.cachePool,f!==null?(A=gn._currentValue,f=f.parent!==A?{parent:A,pool:A}:f):f=N0(),u={baseLanes:u.baseLanes|a,cachePool:f}),s.memoizedState=u,s.childLanes=cd(t,_,a),n.memoizedState=ld,Jo(t.child,s)):(er(n),a=t.child,t=a.sibling,a=xa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function fd(t,n){return n=Au({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Au(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function Ru(t,n,a){return Gr(n,t.child,null,a),t=fd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function yy(t,n,a,s,u,f,_,A){if(a)return n.flags&256?(er(n),n.flags&=-257,Ru(t,n,A)):n.memoizedState!==null?(nr(),n.child=t.child,n.flags|=128,null):(nr(),f=u.fallback,_=n.mode,u=Au({mode:"visible",children:u.children},_),f=Ur(f,_,A,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,Gr(n,t.child,null,A),u=n.child,u.memoizedState=ud(A),u.childLanes=cd(t,s,A),n.memoizedState=ld,Jo(null,u));if(er(n),uh(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var z=s.dgst;return s=z,s!==""&&(u=Error(r(419)),u.stack="",u.digest=s,Bo({value:u,source:null,stack:null})),Ru(t,n,A)}if(vn||Pr(t,n,A,!1),s=(A&t.childLanes)!==0,vn||s){if(tr.current!==null)return Ru(t,n,A);if(s=je,s!==null&&(u=Ao(s,A),u!==0&&u!==_.retryLane))throw _.retryLane=u,Nr(t,u),$n(s,t,u),sd;return lh(f)||Wu(),Ru(t,n,A)}return lh(f)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,tn=Ai(f.nextSibling),bn=n,Se=!0,Ya=null,Ti=!1,t!==null&&b0(n,t),n=fd(n,u.children),n.flags|=134221824,n)}function kg(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),ru(t.return,n,a)}function Wg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&pu(a)===null&&(n=t),t=t.sibling}return n}function Cu(t,n,a,s,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function dd(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function hd(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var _=Nn.current;if(n.flags&128)return Yo(n,_),null;var A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,Yo(n,_),u==="backwards"&&t!==null?(dd(t),yn(t,n,s,a),dd(t)):yn(t,n,s,a),s=Se?Fo:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kg(t,a,n);else if(t.tag===19)kg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=Wg(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,dd(n)),Cu(n,!0,u,null,f,s);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&pu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Cu(n,!0,a,null,f,s);break;case"together":Cu(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=Wg(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Cu(n,!1,u,a,f,s)}return n.child}function qg(t,n,a){var s=n.pendingProps;return Ka(n,n.type,s.value),yn(t,n,s.children,a),n.child}function Aa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),sr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Pr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=xa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=xa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function pd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&su(t)))}function Ey(t,n,a){switch(n.tag){case 3:J(n,n.stateNode.containerInfo),Ka(n,gn,t.memoizedState.cache),Lr();break;case 27:case 5:Pe(n);break;case 4:J(n,n.stateNode.containerInfo);break;case 10:Ka(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Bf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return er(n),n.flags|=128,null;s=Pr(t,n,a,!1);var u=n.child.childLanes;return s||(a&u)!==0?Xg(t,n,a):(er(n),t=Aa(t,n,a),t!==null?t.sibling:null)}er(n);break;case 19:if(n.flags&128)return hd(t,n,a);if(u=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Pr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return hd(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Yo(n,Nn.current),s)break;return null;case 22:return n.lanes=0,zg(t,n,a,n.pendingProps);case 24:Ka(n,gn,t.memoizedState.cache)}return Aa(t,n,a)}function Yg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)vn=!0;else{if(!pd(t,a)&&(n.flags&128)===0)return vn=!1,Ey(t,n,a);vn=(t.flags&131072)!==0}else vn=!1,Se&&(n.flags&1048576)!==0&&T0(n,Fo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Br(n.elementType),n.type=t,typeof t=="function")Mf(t)?(s=Xr(t,s),n.tag=1,n=Gg(null,n,t,s,a)):(n.tag=0,n=od(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===B){n.tag=11,n=Og(null,n,t,s,a);break t}else if(u===nt){n.tag=14,n=Pg(null,n,t,s,a);break t}else if(u===Z){n.tag=10,n.type=t,n=qg(null,n,a);break t}}throw n=Tt(t)||t,Error(r(306,n,""))}}return n;case 0:return od(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Xr(s,n.pendingProps),Gg(t,n,s,u,a);case 3:t:{if(J(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Of(t,n),qo(n,s,null,a);var _=n.memoizedState;if(s=_.cache,Ka(n,gn,s),s!==f.cache&&Cf(n,[gn],a,!0),Wo(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Vg(t,n,s,a);break t}else if(s!==u){u=Mi(Error(r(424)),n),Bo(u),n=Vg(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,tn=Ai(t.firstChild),bn=n,Se=!0,Ya=null,Ti=!0,a=z0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Lr(),s===u){n=Aa(t,n,a);break t}yn(t,n,s,a)}n=n.child}return n;case 26:return As(t,n),t===null?(a=vv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(n.stateNode=J_(n.type,n.pendingProps,ze.current,n)):n.memoizedState=vv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Pe(n),t===null&&Se&&(s=n.stateNode=pv(n.type,n.pendingProps,ze.current),bn=n,Ti=!0,u=tn,cr(n.type)?(ch=u,tn=Ai(s.firstChild)):tn=u),yn(t,n,n.pendingProps.children,a),As(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((u=s=tn)&&(s=_E(s,n.type,n.pendingProps,Ti),s!==null?(n.stateNode=s,bn=n,tn=Ai(s.firstChild),Ti=!1,u=!0):u=!1),u||Za(n)),Pe(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,s=f.children,eh(u,f)?s=null:_!==null&&eh(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Vf(t,n,dy,null,null,a),ks._currentValue=u),As(t,n),yn(t,n,s,a),n.child;case 6:return t===null&&Se&&((t=a=tn)&&(a=vE(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,bn=n,tn=null,t=!0):t=!1),t||Za(n)),null;case 13:return Xg(t,n,a);case 4:return J(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Gr(n,null,s,a):yn(t,n,s,a),n.child;case 11:return Og(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,As(t,n),yn(t,n,s,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return qg(t,n,a);case 9:return u=n.type._context,s=n.pendingProps.children,Ir(n),u=wn(u),s=s(u),n.flags|=1,yn(t,n,s,a),n.child;case 14:return Pg(t,n,n.type,n.pendingProps,a);case 15:return Ig(t,n,n.type,n.pendingProps,a);case 19:return hd(t,n,a);case 31:return My(t,n,a);case 22:return zg(t,n,a,n.pendingProps);case 24:return Ir(n),s=wn(gn),t===null?(u=Nf(),u===null&&(u=je,f=wf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Lf(n),Ka(n,gn,u)):((t.lanes&a)!==0&&(Of(t,n),qo(n,null,null,a),Wo()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ka(n,gn,s)):(s=f.cache,Ka(n,gn,s),s!==u.cache&&Cf(n,[gn],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:Se&&iu(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:As(t,n),yn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ra(t){t.flags|=4}function md(t,n,a,s,u){var f;if((f=(t.mode&32)!==0)&&(f=a===null?yv(n,s):yv(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(C_())t.flags|=8192;else throw Hr=cu,Uf}else t.flags&=-16777217}function Zg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ev(n))if(C_())t.flags|=8192;else throw Hr=cu,Uf}function wu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?To():536870912,t.lanes|=n,Ns|=n)}function jo(t,n){if(!Se)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&1206910976,s|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Ty(t,n,a){var s=n.pendingProps;switch(Tf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ea(gn),rn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ss(n)?Ra(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Af())),en(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Ra(n),f!==null?(en(n),Zg(n,f)):(en(n),md(n,u,null,s,a))):f?f!==t.memoizedState?(Ra(n),en(n),Zg(n,f)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Ra(n),en(n),md(n,u,t,s,a)),null;case 27:if(O(n),a=ze.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ra(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return en(n),n.subtreeFlags&=-33554433,null}t=ke.current,Ss(n)?A0(n):(t=pv(u,s,a),n.stateNode=t,Ra(n))}return en(n),n.subtreeFlags&=-33554433,null;case 5:if(O(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ra(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return en(n),n.subtreeFlags&=-33554433,null}if(f=ke.current,Ss(n))A0(n);else{var _=ul(ze.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(u,{is:s.is}):_.createElement(u)}}f[b]=n,f[X]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Ln(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ra(n)}}return en(n),n.subtreeFlags&=-33554433,md(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ra(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=ze.current,Ss(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=bn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[b]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Y_(t.nodeValue,a)),t||Za(n,!0)}else t=ul(t).createTextNode(s),t[b]=n,n.stateNode=t}return en(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Ss(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[b]=n}else Lr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else a=Af(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(r(558))}return en(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ss(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[b]=n}else Lr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),u=!1}else u=Af(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),wu(n,n.updateQueue),en(n),null);case 4:return rn(),t===null&&Qd(n.stateNode.containerInfo),n.flags|=67108864,en(n),null;case 10:return Ea(n.type),en(n),null;case 19:if(Hf(n),s=n.memoizedState,s===null)return en(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)jo(s,!1);else{if(fn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=pu(t),f!==null){for(n.flags|=128,jo(s,!1),t=f.updateQueue,n.updateQueue=t,wu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)M0(a,t),a=a.sibling;return Yo(n,Nn.current&1|2),Se&&Ma(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&kt()>Gu&&(n.flags|=128,u=!0,jo(s,!1),n.lanes=4194304)}else{if(!u)if(t=pu(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,wu(n,t),jo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!f.alternate&&!Se)return en(n),null}else 2*kt()-s.renderingStartTime>Gu&&a!==536870912&&(n.flags|=128,u=!0,jo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=kt(),t.sibling=null,f=Nn.current,f=u?f&1|2:f&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||Se?Yo(n,f):(a=f,ie(Dn,n),ie(Nn,a),zn===null&&(zn=n)),Se&&Ma(n,s.treeForkCount),t}return en(n),null;case 22:case 23:return si(n),Ff(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&wu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&ee(Fr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ea(gn),en(n),null;case 25:return null;case 30:return n.flags|=33554432,en(n),null}throw Error(r(156,n.tag))}function by(t,n){switch(Tf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ea(gn),rn(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return O(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(r(340));Lr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(si(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Lr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Hf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return rn(),null;case 10:return Ea(n.type),null;case 22:case 23:return si(n),Ff(),t!==null&&ee(Fr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ea(gn),null;case 25:return null;default:return null}}function Kg(t,n){switch(Tf(n),n.tag){case 3:Ea(gn),rn();break;case 26:case 27:case 5:O(n);break;case 4:rn();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:Hf(n);break;case 10:Ea(n.type);break;case 22:case 23:si(n),Ff(),t!==null&&ee(Fr);break;case 24:Ea(gn)}}function $o(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==u)}}catch(A){qe(n,n.return,A)}}function ir(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var _=s.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,u=n;var z=a,et=A;try{et()}catch(ft){qe(u,z,ft)}}}s=s.next}while(s!==f)}}catch(ft){qe(n,n.return,ft)}}function Qg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{B0(n,a)}catch(s){qe(t,t.return,s)}}}function Jg(t,n,a){a.props=Xr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){qe(t,n,s)}}function Ki(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var u=t.stateNode,f=va(t.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=av(f)),s=u.ref;break;case 7:if(t.stateNode===null){var _=new fi(t);g(t.child,!1,mE,_,void 0,void 0),t.stateNode=_}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(A){qe(t,n,A)}}function Un(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){qe(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){qe(t,n,u)}else a.current=null}function Du(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)cv(t.stateNode,n[a])}function jg(t){for(var n=t.return;n!==null&&(_d(n)&&cv(t.stateNode,n.stateNode),!gd(n));)n=n.return}function tl(t){for(var n=t.return;n!==null&&(_d(n)&&gE(t.stateNode,n.stateNode),!gd(n));)n=n.return}function gd(t){return t.tag===5||t.tag===3||t.tag===27}function _d(t){return t&&t.tag===7&&t.stateNode!==null}function vd(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){qe(t,t.return,u)}}function Sd(t,n,a){try{var s=t.stateNode;Jy(s,t.type,a,n),s[X]=n}catch(u){qe(t,t.return,u)}}function $g(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&cr(t.type)||t.tag===4}function xd(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||$g(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&cr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Md(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi)),Du(t,s),ve=!0;else if(u!==4&&(u===27&&(Du(t,s),s=null,cr(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(Md(t,n,a,s),t=t.sibling;t!==null;)Md(t,n,a,s),t=t.sibling}function Nu(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Du(t,s),ve=!0;else if(u!==4&&(u===27&&(Du(t,s),s=null,cr(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Nu(t,n,a,s),t=t.sibling;t!==null;)Nu(t,n,a,s),t=t.sibling}function t_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Ln(n,s,a),n[b]=t,n[X]=a}catch(f){qe(t,t.return,f)}}var Uu=!1,oi=null;function e_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Uu=!0)}var Qi=null;function n_(){var t=Qi;return Qi=null,t}var Qn=0;function Rs(t,n,a,s,u){return Qn=0,i_(t.child,n,a,s,u)}function i_(t,n,a,s,u){for(var f=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(s!==null){var A=ah(_);s.push(A),A.view&&(f=!0)}else f||ah(_).view&&(f=!0);Uu=!0,nv(_,Qn===0?n:n+"_"+Qn,a),Qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||i_(t.child,n,a,s,u)&&(f=!0));t=t.sibling}return f}function Ji(t,n){for(;t!==null;)t.tag===5?iv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Ji(t.child,n)),t=t.sibling}function Lu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Lu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=Sa(n.default,n.share),n!=="none"&&(Rs(t,a,n,null,!1)||Ji(t.child,!1))}t=t.sibling}}function yd(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,u=va(s,a),f=Sa(s.default,a.paired?s.share:s.enter);f!=="none"?Rs(t,u,f,null,!1)?(Lu(t),a.paired||n||Ps(t,s.onEnter)):Ji(t.child,!1):Lu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)yd(t,n),t=t.sibling;else Lu(t)}function Ed(t){if(oi!==null&&oi.size!==0){var n=oi;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var u=n.get(s);if(u!==void 0){var f=Sa(a.default,a.share);if(f!=="none"&&(Rs(t,s,f,null,!1)?(f=t.stateNode,u.paired=f,f.paired=u,Ps(t,a.onShare)):Ji(t.child,!1)),n.delete(s),n.size===0)break}}}Ed(t)}t=t.sibling}}}function Td(t){if(t.tag===30){var n=t.memoizedProps,a=va(n,t.stateNode),s=oi!==null?oi.get(a):void 0,u=Sa(n.default,s!==void 0?n.share:n.exit);u!=="none"&&(Rs(t,a,u,null,!1)?s!==void 0?(u=t.stateNode,s.paired=u,u.paired=s,oi.delete(a),Ps(t,n.onShare)):Ps(t,n.onExit):Ji(t.child,!1)),oi!==null&&Ed(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Td(t),t=t.sibling;else oi!==null&&Ed(t)}function a_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=va(n,t.stateNode);n=Sa(n.default,n.update),t.flags&=-5,n!=="none"&&Rs(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&a_(t);t=t.sibling}}function bd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Ji(t.child,!1))}bd(t)}t=t.sibling}}function Ou(t){if(t.tag===30)t.stateNode.paired=null,Ji(t.child,!1),bd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Ou(t),t=t.sibling;else bd(t)}function r_(t){for(t=t.child;t!==null;)t.tag===30?Ji(t.child,!1):(t.subtreeFlags&33554432)!==0&&r_(t),t=t.sibling}function Ad(t,n,a,s,u,f,_){for(var A=!1;n!==null;){if(n.tag===5){var z=n.stateNode;if(f!==null&&Qn<f.length){var et=f[Qn],ft=ah(z);(et.view||ft.view)&&(A=!0);var xt;if(xt=(t.flags&4)===0)if(ft.clip)xt=!0;else{xt=et.rect;var j=ft.rect;xt=xt.y!==j.y||xt.x!==j.x||xt.height!==j.height||xt.width!==j.width}xt&&(t.flags|=4),ft.abs?ft=!et.abs:(et=et.rect,ft=ft.rect,ft=et.height!==ft.height||et.width!==ft.width),ft&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&nv(z,Qn===0?a:a+"_"+Qn,u),A&&(t.flags&4)!==0||(Qi===null&&(Qi=[]),Qi.push(z,Qn===0?s:s+"_"+Qn,n.memoizedProps)),Qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:Ad(t,n.child,a,s,u,f,_)&&(A=!0));n=n.sibling}return A}function s_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,u=va(a,s),f=Sa(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,s=t;var A=t.child;Qn=0,u=Ad(s,A,u,u,f,_,!1),(t.flags&4)!==0&&u&&Ps(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&s_(t);t=t.sibling}}var An=!1,Ve=!1,ji=!1,Rd=!1,o_=typeof WeakSet=="function"?WeakSet:Set,Rn=null,$i=!1,el=!1,Pu=!1,Cd=!1;function Ay(t,n,a){if(t=t.containerInfo,$d=Ws,t=f0(t),pf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var f=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break t}var A=0,z=-1,et=-1,ft=0,xt=0,j=t,lt=null;e:for(;;){for(var Pt;j!==s||f!==0&&j.nodeType!==3||(z=A+f),j!==_||u!==0&&j.nodeType!==3||(et=A+u),j.nodeType===3&&(A+=j.nodeValue.length),(Pt=j.firstChild)!==null;)lt=j,j=Pt;for(;;){if(j===t)break e;if(lt===s&&++ft===f&&(z=A),lt===_&&++xt===u&&(et=A),(Pt=j.nextSibling)!==null)break;j=lt,lt=j.parentNode}j=Pt}s=z===-1||et===-1?null:{start:z,end:et}}else s=null}s=s||{start:0,end:0}}else s=null;for(th={focusedElem:t,selectionRange:s},Ws=!1,a=(a&335544064)===a,Rn=n,n=a?9270:1024;Rn!==null;){if(t=Rn,a&&(s=t.deletions,s!==null))for(f=0;f<s.length;f++)a&&Td(s[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&e_(t),Iu(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&Td(s),Iu(a);continue}else if(s!==null&&s.memoizedState!==null){a&&e_(t),Iu(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,Rn=s):(a&&a_(t),Iu(a))}}oi=null}function Iu(t){for(;Rn!==null;){var n=Rn,a=t,s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&s!==null){a=void 0,u=s.memoizedProps,s=s.memoizedState;var f=n.stateNode;try{var _=Xr(n.type,u);a=f.getSnapshotBeforeUpdate(_,s),f.__reactInternalSnapshotBeforeUpdate=a}catch(A){qe(n,n.return,A)}}break;case 3:if((u&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)oh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":oh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=va(s.memoizedProps,s.stateNode),u=n.memoizedProps,u=Sa(u.default,u.update),u!=="none"&&Rs(s,a,u,s.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Rn=s;break}Rn=n.return}}function l_(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ta(t,a),s&4&&$o(5,a);break;case 1:if(ta(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){qe(a,a.return,_)}else{var u=Xr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){qe(a,a.return,_)}}s&64&&Qg(a),s&512&&Ki(a,a.return);break;case 3:if(ta(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{B0(t,n)}catch(_){qe(a,a.return,_)}}break;case 27:n===null&&s&4&&t_(a);case 26:case 5:ta(t,a),n===null&&s&4&&vd(a),s&512&&Ki(a,a.return);break;case 12:ta(t,a);break;case 31:ta(t,a),s&4&&d_(t,a);break;case 13:ta(t,a),s&4&&h_(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Fy.bind(null,a),SE(t,a))));break;case 22:if(s=a.memoizedState!==null||An,!s){var f=n!==null&&n.memoizedState!==null||Ve;n=An,u=Ve,An=s,(Ve=f)&&!u?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Li(t,a,s)):ta(t,a),An=n,Ve=u}break;case 30:ta(t,a),s&512&&Ki(a,a.return);break;case 7:s&512&&Ki(a,a.return);default:ta(t,a)}}function wd(t,n){for(t=t.child;t!==null;)u_(t,n),t=t.sibling}function u_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var u=t.stateNode,f=t.memoizedProps.style,_=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(z){qe(t,t.return,z)}Dd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,ve=!0}catch(z){qe(t,t.return,z)}break;case 18:try{var A=t.stateNode;n?ev(A,!0):ev(t.stateNode,!1)}catch(z){qe(t,t.return,z)}break;case 22:case 23:t.memoizedState===null&&wd(t,n);break;default:wd(t,n)}}function Dd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:u_(a,s);break t;case 22:a.memoizedState===null&&Dd(a,s);break t;default:Dd(a,s)}}t=t.sibling}}function c_(t){var n=t.alternate;n!==null&&(t.alternate=null,c_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Kt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var an=null,Jn=!1;function Ni(t,n,a){for(a=a.child;a!==null;)f_(t,n,a),a=a.sibling}function f_(t,n,a){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Jt,a)}catch{}switch(a.tag){case 26:Ve||Un(a,n),Ni(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ve&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ve||Un(a,n),tl(a);var s=an,u=Jn;cr(a.type)&&(an=a.stateNode,Jn=!1),Ni(t,n,a),mv(a.stateNode,a.type,a.memoizedProps),an=s,Jn=u;break;case 5:Ve||Un(a,n),tl(a);case 6:if(a.tag===6&&tl(a),s=an,u=Jn,an=null,Ni(t,n,a),an=s,Jn=u,an!==null)if(Jn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(a.stateNode),ve=!0}catch(f){qe(a,n,f)}else try{an.removeChild(a.stateNode),ve=!0}catch(f){qe(a,n,f)}break;case 18:an!==null&&(Jn?(t=an,tv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),qs(t)):tv(an,a.stateNode));break;case 4:s=an,u=Jn,an=a.stateNode.containerInfo,Jn=!0,Ni(t,n,a),an=s,Jn=u;break;case 0:case 11:case 14:case 15:ir(2,a,n),Ve||ir(4,a,n),Ni(t,n,a);break;case 1:Ve||(Un(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Jg(a,n,s)),Ni(t,n,a);break;case 21:Ni(t,n,a);break;case 22:Ve=(s=Ve)||a.memoizedState!==null,Ni(t,n,a),Ve=s;break;case 30:Un(a,n),Ni(t,n,a);break;case 7:Ve||Un(a,n),Ni(t,n,a);break;default:Ni(t,n,a)}}function d_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{qs(t)}catch(a){qe(n,n.return,a)}}}function h_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{qs(t)}catch(a){qe(n,n.return,a)}}function Ry(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new o_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new o_),n;default:throw Error(r(435,t.tag))}}function zu(t,n){var a=Ry(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=By.bind(null,t,s);s.then(u,u)}})}function Wn(t,n,a){var s=n.deletions;if(s!==null)for(var u=0;u<s.length;u++){var f=s[u],_=t,A=n,z=A;t:for(;z!==null;){switch(z.tag){case 27:if(cr(z.type)){an=z.stateNode,Jn=!1;break t}break;case 5:an=z.stateNode,Jn=!1;break t;case 3:case 4:an=z.stateNode.containerInfo,Jn=!0;break t}z=z.return}if(an===null)throw Error(r(160));f_(_,A,f),an=null,Jn=!1,_=f.alternate,_!==null&&(_.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)p_(n,t,a),n=n.sibling}var Ui=null;function p_(t,n,a){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var f=0;f<s.length;f++){var _=s[f];_.ref.impl=_.nextImpl}Wn(n,t,a),qn(t),u&4&&(ir(3,t,t.return),$o(3,t),ir(5,t,t.return));break;case 1:Wn(n,t,a),qn(t),u&512&&(Ve||s===null||Un(s,s.return)),u&64&&An&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Ui,Wn(n,t,a),qn(t),u&512&&(Ve||s===null||Un(s,s.return)),u&4)if(u=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(An)t.stateNode=J_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":s=u.getElementsByTagName("title")[0],(!s||s[Ot]||s[b]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=u.createElement(n),u.head.insertBefore(s,u.querySelector("head > title"))),Ln(s,n,a),s[b]=t,_e(s),n=s;break t;case"link":if(f=Mv("link","href",u).get(n+(a.href||""))){for(_=0;_<f.length;_++)if(s=f[_],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(_,1);break e}}s=u.createElement(n),Ln(s,n,a),u.head.appendChild(s);break;case"meta":if(f=Mv("meta","content",u).get(n+(a.content||""))){for(_=0;_<f.length;_++)if(s=f[_],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(_,1);break e}}s=u.createElement(n),Ln(s,n,a),u.head.appendChild(s);break;default:throw Error(r(468,n))}s[b]=t,_e(s),n=s}t.stateNode=n}else An||ph(f,t.type,t.stateNode);else t.stateNode=xv(f,a,t.memoizedProps);else u!==a?(u===null?(n=s.stateNode,n===null||Ve||n.parentNode.removeChild(n)):u.count--,a===null?An||ph(f,t.type,t.stateNode):xv(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Sd(t,t.memoizedProps,s.memoizedProps);break;case 27:Wn(n,t,a),qn(t),u&512&&(Ve||s===null||Un(s,s.return)),s!==null&&u&4&&Sd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(f=ji,ji=!1,Wn(n,t,a),ji=f,qn(t),u&512&&(Ve||s===null||Un(s,s.return)),t.flags&32){n=t.stateNode;try{us(n,""),ve=!0}catch(ft){qe(t,t.return,ft)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,Sd(t,n,s!==null?s.memoizedProps:n)),u&1024&&(Rd=!0);break;case 6:if(Wn(n,t,a),qn(t),u&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,ve=!0}catch(ft){qe(t,t.return,ft)}}break;case 3:if(ve=!1,ju=null,f=Ui,Ui=cl(n.containerInfo),Wn(n,t,a),Ui=f,qn(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{qs(n.containerInfo)}catch(ft){qe(t,t.return,ft)}Rd&&(Rd=!1,m_(t)),ve=!1;break;case 4:u=ji,ji=An,s=Be(),f=Ui,Ui=cl(t.stateNode.containerInfo),Wn(n,t,a),qn(t),Ui=f,ve&&el&&(Pu=!0),ve=s,ji=u;break;case 12:Wn(n,t,a),qn(t);break;case 31:Wn(n,t,a),qn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,zu(t,n)));break;case 13:Wn(n,t,a),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Hu=kt()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,zu(t,n)));break;case 22:f=t.memoizedState!==null,_=s!==null&&s.memoizedState!==null;var A=An,z=Ve,et=ji;An=A||f,ji=et||f,Ve=z||_,Wn(n,t,a),Ve=z,ji=et,An=A,qn(t),u&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||s===null||_||An||Ve||(n=_||Ve,a=An,s=Ve,An=f||An,Ve=n,ar(t,2),An=a,Ve=s),!f&&ji||wd(t,f)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,zu(t,a))));break;case 19:Wn(n,t,a),qn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,zu(t,n)));break;case 30:u&512&&(Ve||s===null||Un(s,s.return)),u=Be(),f=el,_=(a&335544064)===a,A=t.memoizedProps,el=_&&Sa(A.default,A.update)!=="none",Wn(n,t,a),qn(t),_&&s!==null&&ve&&(t.flags|=4),el=f,ve=u;break;case 21:break;case 7:u&512&&(Ve||s===null||Un(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Wn(n,t,a),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if($g(s)){a=s;break}s=s.return}s=null;for(var u=t.return;u!==null;){if(_d(u)){var f=u.stateNode;s===null?s=[f]:s.push(f)}if(gd(u))break;u=u.return}var _=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var A=a.stateNode,z=xd(t);Nu(t,z,A,_);break;case 5:var et=a.stateNode;a.flags&32&&(us(et,""),a.flags&=-33);var ft=xd(t);Nu(t,ft,et,_);break;case 3:case 4:var xt=a.stateNode.containerInfo,j=xd(t);Md(t,j,xt,_);break;default:throw Error(r(161))}}catch(lt){qe(t,t.return,lt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function m_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;m_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Ws=!0,n.reset(),Ws=!1),t=t.sibling}}function Cs(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)g_(n,t),n=n.sibling;else s_(n)}function g_(t,n){var a=t.alternate;if(a===null)yd(t,!1);else switch(t.tag){case 3:if(Cd=$i=!1,n_(),Cs(n,t),!$i&&!Pu){if(t=Qi,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var u=t[s+1];iv(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Cd=!0}Qi=null;break;case 5:Cs(n,t);break;case 4:s=$i,$i=!1,Cs(n,t),$i&&(Pu=!0),$i=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?yd(t,!1):Cs(n,t));break;case 30:s=$i,u=n_(),$i=!1,Cs(n,t),$i&&(t.flags|=4);var f=t.memoizedProps,_=t.stateNode;n=va(f,_),_=va(a.memoizedProps,_);var A=Sa(f.default,f.update);A==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,Qn=0,n=Ad(t,a,n,_,A,f,!0),Qn!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Ps(t,t.memoizedProps.onUpdate),Qi=u):u!==null&&(u.push.apply(u,Qi),Qi=u),$i=(t.flags&32)!==0?!0:s;break;default:Cs(n,t)}}function ta(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)l_(t,n.alternate,n),n=n.sibling}function ar(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:ir(4,a,a.return),ar(a,s);break;case 1:Un(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&Jg(a,a.return,u),ar(a,s);break;case 27:(s&2)!==0&&mv(a.stateNode,a.type,a.memoizedProps);case 5:Un(a,a.return),a.tag!==5&&a.tag!==27||tl(a),ar(a,s);break;case 6:tl(a);break;case 26:Un(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Ve||u.parentNode.removeChild(u),ar(a,s);break;case 22:a.memoizedState===null&&ar(a,s);break;case 30:Un(a,a.return),ar(a,s);break;case 7:Un(a,a.return);default:ar(a,s)}t=t.sibling}}function Li(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,_=f.flags,A=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Li(u,f,a),$o(4,f);break;case 1:if(Li(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ft){qe(s,s.return,ft)}if(s=f,u=s.updateQueue,u!==null){var z=s.stateNode;try{var et=u.shared.hiddenCallbacks;if(et!==null)for(u.shared.hiddenCallbacks=null,u=0;u<et.length;u++)F0(et[u],z)}catch(ft){qe(s,s.return,ft)}}A&&_&64&&Qg(f),Ki(f,f.return);break;case 27:(a&2)!==0&&t_(f);case 5:f.tag!==5&&f.tag!==27||jg(f),Li(u,f,a),A&&s===null&&_&4&&vd(f),Ki(f,f.return);break;case 6:jg(f);break;case 26:z=f.stateNode,f.memoizedState!==null||z===null||An||ph(cl(z.ownerDocument),f.type,z),Li(u,f,a),A&&s===null&&_&4&&vd(f),Ki(f,f.return);break;case 12:Li(u,f,a);break;case 31:Li(u,f,a),A&&_&4&&d_(u,f);break;case 13:Li(u,f,a),A&&_&4&&h_(u,f);break;case 22:f.memoizedState===null&&Li(u,f,a),Ki(f,f.return);break;case 30:Li(u,f,a),Ki(f,f.return);break;case 7:Ki(f,f.return);default:Li(u,f,a)}n=n.sibling}}function Nd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ho(a))}function Ud(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ho(t))}function bi(t,n,a,s){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)__(t,n,a,s),n=n.sibling;else u&&r_(n)}function __(t,n,a,s){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Ou(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:bi(t,n,a,s),f&2048&&$o(9,n);break;case 1:bi(t,n,a,s);break;case 3:bi(t,n,a,s),u&&Cd&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Ho(f)));break;case 12:if(f&2048){bi(t,n,a,s),f=n.stateNode;try{var _=n.memoizedProps,A=_.id,z=_.onPostCommit;typeof z=="function"&&z(A,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(et){qe(n,n.return,et)}}else bi(t,n,a,s);break;case 31:bi(t,n,a,s);break;case 13:bi(t,n,a,s);break;case 23:break;case 22:_=n.stateNode,A=n.alternate,n.memoizedState!==null?(u&&A!==null&&A.memoizedState===null&&Ou(A),_._visibility&2?bi(t,n,a,s):nl(t,n)):(u&&A!==null&&A.memoizedState!==null&&Ou(n),_._visibility&2?bi(t,n,a,s):(_._visibility|=2,ws(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Nd(A,n);break;case 24:bi(t,n,a,s),f&2048&&Ud(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(Ji(f.child,!0),Ji(n.child,!0))),bi(t,n,a,s);break;default:bi(t,n,a,s)}}function ws(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,A=a,z=s,et=_.flags;switch(_.tag){case 0:case 11:case 15:ws(f,_,A,z,u),$o(8,_);break;case 23:break;case 22:var ft=_.stateNode;_.memoizedState!==null?ft._visibility&2?ws(f,_,A,z,u):nl(f,_):(ft._visibility|=2,ws(f,_,A,z,u)),u&&et&2048&&Nd(_.alternate,_);break;case 24:ws(f,_,A,z,u),u&&et&2048&&Ud(_.alternate,_);break;default:ws(f,_,A,z,u)}n=n.sibling}}function nl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:nl(a,s),u&2048&&Nd(s.alternate,s);break;case 24:nl(a,s),u&2048&&Ud(s.alternate,s);break;default:nl(a,s)}n=n.sibling}}var kr=8192;function Wr(t,n,a){if(t.subtreeFlags&kr)for(t=t.child;t!==null;)v_(t,n,a),t=t.sibling}function v_(t,n,a){switch(t.tag){case 26:Wr(t,n,a),t.flags&kr&&(t.memoizedState!==null?LE(a,Ui,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&bv(a,t)));break;case 5:Wr(t,n,a),t.flags&kr&&(t=t.stateNode,(n&335544128)===n&&bv(a,t));break;case 3:case 4:var s=Ui;Ui=cl(t.stateNode.containerInfo),Wr(t,n,a),Ui=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=kr,kr=16777216,Wr(t,n,a),kr=s):Wr(t,n,a));break;case 30:if((t.flags&kr)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var u=t.stateNode;u.paired=null,oi===null&&(oi=new Map),oi.set(s,u)}Wr(t,n,a);break;default:Wr(t,n,a)}}function S_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function il(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,M_(s,t)}S_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)x_(t),t=t.sibling}function x_(t){switch(t.tag){case 0:case 11:case 15:il(t),t.flags&2048&&ir(9,t,t.return);break;case 3:il(t);break;case 12:il(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Fu(t)):il(t);break;default:il(t)}}function Fu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,M_(s,t)}S_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ir(8,n,n.return),Fu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fu(n));break;default:Fu(n)}t=t.sibling}}function M_(t,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:ir(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ho(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Rn=s;else t:for(a=t;Rn!==null;){s=Rn;var u=s.sibling,f=s.return;if(c_(s),s===a){Rn=null;break t}if(u!==null){u.return=f,Rn=u;break t}Rn=f}}}var Cy={getCacheForType:function(t){var n=wn(gn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return wn(gn).controller.signal}},wy=typeof WeakMap=="function"?WeakMap:Map,He=0,je=null,ye=null,Ae=0,We=0,li=null,rr=!1,Ds=!1,Ld=!1,Ca=0,fn=0,sr=0,qr=0,Bu=0,ui=0,Ns=0,al=null,jn=null,Od=!1,Hu=0,y_=0,Gu=1/0,Vu=null,or=null,sn=0,Oi=null,Yr=null,ea=0,Pd=0,Id=null,E_=null,Us=null,Ls=null,Os=null,rl=0,Xu=null;function ci(){return(He&2)!==0&&Ae!==0?Ae&-Ae:vt.T!==null?qd():Gl()}function T_(){if(ui===0)if((Ae&536870912)===0||Se){var t=Ar;Ar<<=1,(Ar&3932160)===0&&(Ar=262144),ui=t}else ui=536870912;return t=Dn.current,t!==null&&(t.flags|=32),ui}function Ps(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=av(va(t.memoizedProps,a))),Ls===null&&(Ls=[]),Ls.push(n.bind(null,s))}}function $n(t,n,a){(t===je&&(We===2||We===9)||t.cancelPendingCommit!==null)&&(Is(t,0),lr(t,Ae,ui,!1)),ki(t,a),((He&2)===0||t!==je)&&(t===je&&((He&2)===0&&(qr|=a),fn===4&&lr(t,Ae,ui,!1)),na(t))}function b_(t,n,a){if((He&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Xa(t,n),u=s?Uy(t,n):Fd(t,n,!0),f=s;do{if(u===0){Ds&&!s&&lr(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Dy(a)){u=Fd(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var A=t;u=al;var z=A.current.memoizedState.isDehydrated;if(z&&(Is(A,_).flags|=256),_=Fd(A,_,!1),_!==2&&_!==6){if(Ld&&!z){A.errorRecoveryDisabledLanes|=f,qr|=f,u=4;break t}f=jn,jn=u,f!==null&&(jn===null?jn=f:jn.push.apply(jn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){Is(t,0),lr(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:lr(s,n,ui,!rr);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Hu+300-kt(),10<u)){if(lr(s,n,ui,!rr),Rr(s,0,!0)!==0)break t;ea=n,s.timeoutHandle=ih(A_.bind(null,s,a,jn,Vu,Od,n,ui,qr,Ns,rr,f,"Throttled",-0,0),u);break t}A_(s,a,jn,Vu,Od,n,ui,qr,Ns,rr,f,null,-0,0)}}break}while(!0);na(t)}function A_(t,n,a,s,u,f,_,A,z,et,ft,xt,j,lt){t.timeoutHandle=-1;var Pt=n.subtreeFlags,Qt=(f&335544064)===f;if(xt=null,(Qt||Pt&8192||(Pt&16785408)===16785408)&&(xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},oi=null,v_(n,f,xt),Qt&&(Pt=xt,Qt=t.containerInfo,Qt=(Qt.nodeType===9?Qt:Qt.ownerDocument).__reactViewTransition,Qt!=null&&(Pt.count++,Pt.waitingForViewTransition=!0,Pt=hl.bind(Pt),Qt.finished.then(Pt,Pt))),Pt=(f&62914560)===f?Hu-kt():(f&4194048)===f?y_-kt():0,Pt=OE(xt,Pt),Pt!==null)){ea=f,t.cancelPendingCommit=Pt(O_.bind(null,t,n,f,a,s,u,_,A,z,et,ft,xt,null,j,lt)),lr(t,f,_,!et);return}O_(t,n,f,a,s,u,_,A,z,et,ft,xt)}function Dy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!ri(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function lr(t,n,a,s){n=Xi(t,n),n&=~Bu,n&=~qr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-ue(u),_=1<<f;s[f]=-1,u&=~_}a!==0&&Cr(t,a,n)}function ku(){return(He&6)===0?(sl(0),!1):!0}function zd(){if(ye!==null){if(We===0)var t=ye.return;else t=ye,ya=Or=null,Wf(t),ys=null,Xo=0,t=ye;for(;t!==null;)Kg(t.alternate,t),t=t.return;ye=null}}function Is(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,tE(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ea=0,zd(),je=t,ye=a=xa(t.current,null),Ae=n,We=0,li=null,rr=!1,Ds=Xa(t,n),Ld=!1,Ns=ui=Bu=qr=sr=fn=0,jn=al=null,Od=!1,Ca=Xi(t,n),jl(),a}function R_(t,n){de=null,vt.H=Eu,n===Ms||n===uu?(n=O0(),We=3):n===Uf?(n=O0(),We=4):We=n===sd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,li=n,ye===null&&(fn=1,Tu(t,Mi(n,t.current)))}function C_(){var t=Dn.current;return t===null?!0:(Ae&4194048)===Ae?zn===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?t===zn:!1}function w_(){var t=vt.H;return vt.H=Eu,t===null?Eu:t}function D_(){var t=vt.A;return vt.A=Cy,t}function Wu(){fn=4,rr||(Ae&4194048)!==Ae&&Dn.current!==null||(Ds=!0),(sr&134217727)===0&&(qr&134217727)===0||je===null||lr(je,Ae,ui,!1)}function Fd(t,n,a){var s=He;He|=2;var u=w_(),f=D_();(je!==t||Ae!==n)&&(Vu=null,Is(t,n)),n=!1;var _=fn;t:do try{if(We!==0&&ye!==null){var A=ye,z=li;switch(We){case 8:zd(),_=6;break t;case 3:case 2:case 9:case 6:Dn.current===null&&(n=!0);var et=We;if(We=0,li=null,zs(t,A,z,et),a&&Ds){_=0;break t}break;default:et=We,We=0,li=null,zs(t,A,z,et)}}Ny(),_=fn;break}catch(ft){R_(t,ft)}while(!0);return n&&t.shellSuspendCounter++,ya=Or=null,He=s,vt.H=u,vt.A=f,ye===null&&(je=null,Ae=0,jl()),_}function Ny(){for(;ye!==null;)N_(ye)}function Uy(t,n){var a=He;He|=2;var s=w_(),u=D_();je!==t||Ae!==n?(Vu=null,Gu=kt()+500,Is(t,n)):Ds=Xa(t,n);t:do try{if(We!==0&&ye!==null){n=ye;var f=li;e:switch(We){case 1:We=0,li=null,zs(t,n,f,1);break;case 2:case 9:if(U0(f)){We=0,li=null,U_(n);break}n=function(){We!==2&&We!==9||je!==t||(We=7),na(t)},f.then(n,n);break t;case 3:We=7;break t;case 4:We=5;break t;case 7:U0(f)?(We=0,li=null,U_(n)):(We=0,li=null,zs(t,n,f,7));break;case 5:var _=null;switch(ye.tag){case 26:_=ye.memoizedState;case 5:case 27:var A=ye;if(_?Ev(_):A.stateNode.complete){We=0,li=null;var z=A.sibling;if(z!==null)ye=z;else{var et=A.return;et!==null?(ye=et,qu(et)):ye=null}break e}}We=0,li=null,zs(t,n,f,5);break;case 6:We=0,li=null,zs(t,n,f,6);break;case 8:zd(),fn=6;break t;default:throw Error(r(462))}}Ly();break}catch(ft){R_(t,ft)}while(!0);return ya=Or=null,vt.H=s,vt.A=u,He=a,ye!==null?0:(je=null,Ae=0,jl(),fn)}function Ly(){for(;ye!==null&&!zt();)N_(ye)}function N_(t){var n=Yg(t.alternate,t,Ca);t.memoizedProps=t.pendingProps,n===null?qu(t):ye=n}function U_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Hg(a,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=Hg(a,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:Wf(n);var s=n;s===bn&&(Se?(au(s),s.tag===5&&s.stateNode!=null&&(tn=s.stateNode)):(au(s),Se=!0));default:Kg(a,n),n=ye=M0(n,Ca),n=Yg(a,n,Ca)}t.memoizedProps=t.pendingProps,n===null?qu(t):ye=n}function zs(t,n,a,s){ya=Or=null,Wf(n),ys=null,Xo=0;var u=n.return;try{if(xy(t,u,n,a,Ae)){fn=1,Tu(t,Mi(a,t.current)),ye=null;return}}catch(f){if(u!==null)throw ye=u,f;fn=1,Tu(t,Mi(a,t.current)),ye=null;return}n.flags&32768?(Se||s===1?t=!0:Ds||(Ae&536870912)!==0?t=!1:(rr=t=!0,(s===2||s===9||s===3||s===6)&&(s=Dn.current,s!==null&&s.tag===13&&(s.flags|=16384))),L_(n,t)):qu(n)}function qu(t){var n=t;do{if((n.flags&32768)!==0){L_(n,rr);return}t=n.return;var a=Ty(n.alternate,n,Ca);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=t}while(n!==null);fn===0&&(fn=5)}function L_(t,n){do{var a=by(t.alternate,t);if(a!==null){a.flags&=32767,ye=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ye=t;return}ye=t=a}while(t!==null);fn=6,ye=null}function O_(t,n,a,s,u,f,_,A,z,et,ft,xt){t.cancelPendingCommit=null;do Yu();while(sn!==0);if((He&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===je&&(ye=je=null,Ae=0),Yr=n,Oi=t,ea=a,Id=u,E_=s,Oy(t,n,a,_,A,z,xt)}}function Oy(t,n,a,s,u,f,_){var A=n.lanes|n.childLanes;if(Pd=A,A|=Sf,Hl(t,a,A,s,u,f),Ls=null,(a&335544064)===a?(Os=ly(t),s=10262):(Os=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,Hy(Dt,function(){return Vd(),null})):(t.callbackNode=null,t.callbackPriority=0),Uu=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=vt.T,vt.T=null,u=wt.p,wt.p=2,f=He,He|=4;try{Ay(t,n,a)}finally{He=f,wt.p=u,vt.T=s}}sn=1,Uu?Us=sE(_,t.containerInfo,Os,Bd,Hd,Iy,Gd,Vd,Py):(Bd(),Hd(),Gd())}function Py(t){if(sn!==0){var n=Oi.onRecoverableError;n(t,{componentStack:null})}}function Iy(){sn===3&&(sn=0,g_(Yr,Oi),sn=4)}function Bd(){if(sn===1){sn=0;var t=Oi,n=Yr,a=ea,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=vt.T,vt.T=null;var u=wt.p;wt.p=2;var f=He;He|=4;try{el=Pu=!1,p_(n,t,a),a=th;var _=f0(t.containerInfo),A=a.focusedElem,z=a.selectionRange;if(_!==A&&A&&A.ownerDocument&&c0(A.ownerDocument.documentElement,A)){if(z!==null&&pf(A)){var et=z.start,ft=z.end;if(ft===void 0&&(ft=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(ft,A.value.length);else{var xt=A.ownerDocument||document,j=xt&&xt.defaultView||window;if(j.getSelection){var lt=j.getSelection(),Pt=A.textContent.length,Qt=Math.min(z.start,Pt),he=z.end===void 0?Qt:Math.min(z.end,Pt);!lt.extend&&Qt>he&&(_=he,he=Qt,Qt=_);var tt=u0(A,Qt),q=u0(A,he);if(tt&&q&&(lt.rangeCount!==1||lt.anchorNode!==tt.node||lt.anchorOffset!==tt.offset||lt.focusNode!==q.node||lt.focusOffset!==q.offset)){var at=xt.createRange();at.setStart(tt.node,tt.offset),lt.removeAllRanges(),Qt>he?(lt.addRange(at),lt.extend(q.node,q.offset)):(at.setEnd(q.node,q.offset),lt.addRange(at))}}}}for(xt=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&xt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xt.length;A++){var St=xt[A];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}Ws=!!$d,th=$d=null}finally{He=f,wt.p=u,vt.T=s}}t.current=n,sn=2}}function Hd(){if(sn===2){sn=0;var t=Oi,n=Yr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=vt.T,vt.T=null;var s=wt.p;wt.p=2;var u=He;He|=4;try{l_(t,n.alternate,n)}finally{He=u,wt.p=s,vt.T=a}}sn=3}}function Gd(){if(sn===4||sn===3){sn=0;var t=Us;Us=null,It();var n=Oi,a=Yr,s=ea,u=E_,f=(s&335544064)===s?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?sn=5:(sn=0,Yr=Oi=null,P_(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(or=null),Co(s),a=a.stateNode,Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Jt,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=vt.T,f=wt.p,wt.p=2,vt.T=null;try{for(var _=n.onRecoverableError,A=0;A<u.length;A++){var z=u[A];_(z.value,{componentStack:z.stack})}}finally{vt.T=a,wt.p=f}}if(u=Ls,_=Os,Os=null,u!==null&&(Ls=null,_===null&&(_=[]),t!==null))for(z=0;z<u.length;z++)a=(0,u[z])(_),a!==void 0&&t.finished.finally(a);(ea&3)!==0&&Yu(),na(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===Xu?rl++:(rl=0,Xu=n):(rl=0,Xu=null),sl(0)}}function P_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ho(n)))}function Yu(){return Us!==null&&(Us.skipTransition(),Us=null),Bd(),Hd(),Gd(),Vd()}function Vd(){if(sn!==5)return!1;var t=Oi,n=Pd;Pd=0;var a=Co(ea),s=vt.T,u=wt.p;try{wt.p=32>a?32:a,vt.T=null,a=Id,Id=null;var f=Oi,_=ea;if(sn=0,Yr=Oi=null,ea=0,(He&6)!==0)throw Error(r(331));var A=He;if(He|=4,x_(f.current),__(f,f.current,_,a),He=A,sl(0,!1),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Jt,f)}catch{}return!0}finally{wt.p=u,vt.T=s,P_(t,n)}}function I_(t,n,a){n=Mi(a,n),n=rd(t.stateNode,n,2),t=$a(t,n,2),t!==null&&(ki(t,2),na(t))}function qe(t,n,a){if(t.tag===3)I_(t,t,a);else for(;n!==null;){if(n.tag===3){I_(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(or===null||!or.has(s))){t=Mi(a,t),a=Ug(2),s=$a(n,a,2),s!==null&&(Lg(a,s,n,t),ki(s,2),na(s));break}}n=n.return}}function Xd(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new wy;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Ld=!0,u.add(a),t=zy.bind(null,t,n,a),n.then(t,t))}function zy(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,je===t&&(Ae&a)===a&&((fn===4||fn===3&&(Ae&62914560)===Ae&&300>kt()-Hu)&&(He&2)===0?Is(t,0):Bu|=a,Ns===Ae&&(Ns=0)),na(t)}function z_(t,n){n===0&&(n=To()),t=Nr(t,n),t!==null&&(ki(t,n),na(t))}function Fy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),z_(t,a)}function By(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),z_(t,a)}function Hy(t,n){return Nt(t,n)}var Fs=null,Bs=null,kd=!1,Zu=!1,Wd=!1,ur=0;function na(t){t!==Bs&&t.next===null&&(Bs===null?Fs=Bs=t:Bs=Bs.next=t),Zu=!0,kd||(kd=!0,Vy())}function sl(t,n){if(!Wd&&Zu){Wd=!0;do for(var a=!1,s=Fs;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var _=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-ue(42|t)+1)-1,f&=u&~(_&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,G_(s,f))}else f=Ae,f=Rr(s,s===je?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Xa(s,f)||(a=!0,G_(s,f));s=s.next}while(a);Wd=!1}}function Gy(){F_()}function F_(){Zu=kd=!1;var t=0;ur!==0&&$y()&&(t=ur);for(var n=kt(),a=null,s=Fs;s!==null;){var u=s.next,f=B_(s,n);f===0?(s.next=null,a===null?Fs=u:a.next=u,u===null&&(Bs=a)):(a=s,(t!==0||(f&3)!==0)&&(Zu=!0)),s=u}sn!==0&&sn!==5||sl(t),ur!==0&&(ur=0)}function B_(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-ue(f),A=1<<_,z=u[_];z===-1?((A&a)===0||(A&s)!==0)&&(u[_]=Eo(A,n)):z<=n&&(t.expiredLanes|=A),f&=~A}if(n=je,a=Ae,a=Rr(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(We===2||We===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&jt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Xa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&jt(s),Co(a)){case 2:case 8:a=Q;break;case 32:a=Dt;break;case 268435456:a=Lt;break;default:a=Dt}return s=H_.bind(null,t),a=Nt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&jt(s),t.callbackPriority=2,t.callbackNode=null,2}function H_(t,n){if(sn!==0&&sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Yu()&&t.callbackNode!==a)return null;var s=Ae;return s=Rr(t,t===je?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(b_(t,s,n),B_(t,kt()),t.callbackNode!=null&&t.callbackNode===a?H_.bind(null,t):null)}function G_(t,n){if(Yu())return null;b_(t,n,!0)}function Vy(){eE(function(){(He&6)!==0?Nt(le,Gy):F_()})}function qd(){if(ur===0){var t=zr;t===0&&(t=ss,ss<<=1,(ss&261888)===0&&(ss=256)),ur=t}return ur}function V_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:kl(t)}function Xy(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=V_((u[X]||null).action),_=s.submitter;_&&(n=(n=_[X]||null)?V_(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var A=new Zl("action","action",null,s,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ur!==0){var z=new FormData(u,_);td(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(A.preventDefault(),z=new FormData(u,_),td(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var Yd=0;Yd<vf.length;Yd++){var Zd=vf[Yd],ky=Zd.toLowerCase(),Wy=Zd[0].toUpperCase()+Zd.slice(1);Di(ky,"on"+Wy)}Di(p0,"onAnimationEnd"),Di(m0,"onAnimationIteration"),Di(g0,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(ty,"onTransitionRun"),Di(ey,"onTransitionStart"),Di(ny,"onTransitionCancel"),Di(_0,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function X_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var A=s[_],z=A.instance,et=A.currentTarget;if(A=A.listener,z!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=et;try{f(u)}catch(ft){Jl(ft)}u.currentTarget=null,f=z}else for(_=0;_<s.length;_++){if(A=s[_],z=A.instance,et=A.currentTarget,A=A.listener,z!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=et;try{f(u)}catch(ft){Jl(ft)}u.currentTarget=null,f=z}}}}function Ee(t,n){var a=n[st];a===void 0&&(a=n[st]=new Set);var s=t+"__bubble";a.has(s)||(k_(n,t,2,!1),a.add(s))}function Kd(t,n,a){var s=0;n&&(s|=4),k_(a,t,s,n)}var Ku="_reactListening"+Math.random().toString(36).slice(2);function Qd(t){if(!t[Ku]){t[Ku]=!0,Ge.forEach(function(a){a!=="selectionchange"&&(qy.has(a)||Kd(a,!1,t),Kd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ku]||(n[Ku]=!0,Kd("selectionchange",!1,n))}}function k_(t,n,a,s){switch(Lv(n)){case 2:var u=FE;break;case 8:u=BE;break;default:u=gh}a=u.bind(null,n,a,t),u=void 0,!af||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Jd(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var A=s.stateNode.containerInfo;if(A===u)break;if(_===4)for(_=s.return;_!==null;){var z=_.tag;if((z===3||z===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;A!==null;){if(_=re(A),_===null)return;if(z=_.tag,z===5||z===6||z===26||z===27){s=f=_;continue t}A=A.parentNode}}s=s.return}km(function(){var et=f,ft=ef(a),xt=[];t:{var j=v0.get(t);if(j!==void 0){var lt=Zl,Pt=t;switch(t){case"keypress":if(ql(a)===0)break t;case"keydown":case"keyup":lt=DM;break;case"focusin":Pt="focus",lt=lf;break;case"focusout":Pt="blur",lt=lf;break;case"beforeblur":case"afterblur":lt=lf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=vM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=PM;break;case p0:case m0:case g0:lt=MM;break;case _0:lt=zM;break;case"scroll":case"scrollend":lt=gM;break;case"wheel":lt=BM;break;case"copy":case"cut":case"paste":lt=EM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Km;break;case"submit":lt=LM;break;case"toggle":case"beforetoggle":lt=GM}var Qt=(n&4)!==0,he=!Qt&&(t==="scroll"||t==="scrollend"),tt=Qt?j!==null?j+"Capture":null:j;Qt=[];for(var q=et,at;q!==null;){var St=q;if(at=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||at===null||tt===null||(St=wo(q,tt),St!=null&&Qt.push(ll(q,St,at))),he)break;q=q.return}0<Qt.length&&(j=new lt(j,Pt,null,a,ft),xt.push({event:j,listeners:Qt}))}}if((n&7)===0){t:{if(lt=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",lt&&a!==tf&&(Pt=a.relatedTarget||a.fromElement)&&(re(Pt)||Pt[dt]))break t;(j||lt)&&(Pt=ft.window===ft?ft:(lt=ft.ownerDocument)?lt.defaultView||lt.parentWindow:window,j?(lt=a.relatedTarget||a.toElement,j=et,lt=lt?re(lt):null,lt!==null&&(he=c(lt),Qt=lt.tag,lt!==he||Qt!==5&&Qt!==27&&Qt!==6)&&(lt=null)):(j=null,lt=et),j!==lt&&(Qt=Ym,St="onMouseLeave",tt="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=Km,St="onPointerLeave",tt="onPointerEnter",q="pointer"),he=j==null?Pt:qt(j),at=lt==null?Pt:qt(lt),Pt=new Qt(St,q+"leave",j,a,ft),Pt.target=he,Pt.relatedTarget=at,St=null,re(ft)===et&&(Qt=new Qt(tt,q+"enter",lt,a,ft),Qt.target=at,Qt.relatedTarget=he,St=Qt),he=St,Qt=j&&lt?w(j,lt,Yy):null,j!==null&&W_(xt,Pt,j,Qt,!1),lt!==null&&he!==null&&W_(xt,he,lt,Qt,!0)))}t:{if(j=et?qt(et):window,lt=j.nodeName&&j.nodeName.toLowerCase(),lt==="select"||lt==="input"&&j.type==="file")var Yt=i0;else if(e0(j))if(a0)Yt=JM;else{Yt=KM;var Re=ZM}else lt=j.nodeName,!lt||lt.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?et&&$c(et.elementType)&&(Yt=i0):Yt=QM;if(Yt&&(Yt=Yt(t,et))){n0(xt,Yt,a,ft);break t}Re&&Re(t,j,et)}switch(Re=et?qt(et):window,t){case"focusin":(e0(Re)||Re.contentEditable==="true")&&(hs=Re,mf=et,zo=null);break;case"focusout":zo=mf=hs=null;break;case"mousedown":gf=!0;break;case"contextmenu":case"mouseup":case"dragend":gf=!1,d0(xt,a,ft);break;case"selectionchange":if($M)break;case"keydown":case"keyup":d0(xt,a,ft)}var te;if(cf)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else ds?$m(t,a)&&(ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(Qm&&a.locale!=="ko"&&(ds||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&ds&&(te=Wm()):(ka=ft,rf="value"in ka?ka.value:ka.textContent,ds=!0)),Re=Qu(et,ae),0<Re.length&&(ae=new Zm(ae,t,null,a,ft),xt.push({event:ae,listeners:Re}),te?ae.data=te:(te=t0(a),te!==null&&(ae.data=te)))),(te=XM?kM(t,a):WM(t,a))&&(ae=Qu(et,"onBeforeInput"),0<ae.length&&(Re=new Zm("onBeforeInput","beforeinput",null,a,ft),xt.push({event:Re,listeners:ae}),Re.data=te)),Xy(xt,t,et,a,ft)}X_(xt,n)})}function ll(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Qu(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=wo(t,a),u!=null&&s.unshift(ll(t,u,f)),u=wo(t,n),u!=null&&s.push(ll(t,u,f))),t.tag===3)return s;t=t.return}return[]}function Yy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function W_(t,n,a,s,u){for(var f=n._reactName,_=[];a!==null&&a!==s;){var A=a,z=A.alternate,et=A.stateNode;if(A=A.tag,z!==null&&z===s)break;A!==5&&A!==26&&A!==27||et===null||(z=et,u?(et=wo(a,f),et!=null&&_.unshift(ll(a,et,z))):u||(et=wo(a,f),et!=null&&_.push(ll(a,et,z)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var Zy=/\r\n?/g,Ky=/\u0000|\uFFFD/g;function q_(t){return(typeof t=="string"?t:""+t).replace(Zy,`
`).replace(Ky,"")}function Y_(t,n){return n=q_(n),q_(t)===n}function Ye(t,n,a,s,u,f){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||us(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&us(t,""+s);else return;break;case"className":ai(t,"class",s);break;case"tabIndex":ai(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ai(t,a,s);break;case"style":Vm(t,s,f);return;case"data":if(n!=="object"){ai(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=kl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ye(t,n,"name",u.name,u,null),Ye(t,n,"formEncType",u.formEncType,u,null),Ye(t,n,"formMethod",u.formMethod,u,null),Ye(t,n,"formTarget",u.formTarget,u,null)):(Ye(t,n,"encType",u.encType,u,null),Ye(t,n,"method",u.method,u,null),Ye(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=kl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=qi);return;case"onScroll":s!=null&&Ee("scroll",t);return;case"onScrollEnd":s!=null&&Ee("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=kl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ee("beforetoggle",t),Ee("toggle",t),$e(t,"popover",s);break;case"xlinkActuate":be(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":be(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":be(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":be(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":be(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":be(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":be(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":be(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":be(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":$e(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=pM.get(a)||a,$e(t,a,s);else return}ve=!0}function jd(t,n,a,s,u,f){switch(a){case"style":Vm(t,s,f);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")us(t,s);else if(typeof s=="number"||typeof s=="bigint")us(t,""+s);else return;break;case"onScroll":s!=null&&Ee("scroll",t);return;case"onScrollEnd":s!=null&&Ee("scrollend",t);return;case"onClick":s!=null&&(t.onclick=qi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Mn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=t[X]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,u),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,s,u);break t}ve=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):$e(t,a,s)}return}ve=!0}function Ln(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",t),Ee("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ye(t,n,f,_,a,null)}}u&&Ye(t,n,"srcSet",a.srcSet,a,null),s&&Ye(t,n,"src",a.src,a,null);return;case"input":Ee("invalid",t);var A=f=_=u=null,z=null,et=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":u=ft;break;case"type":_=ft;break;case"checked":z=ft;break;case"defaultChecked":et=ft;break;case"value":f=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Ye(t,n,s,ft,a,null)}}Fm(t,f,A,z,et,_,u,!1);return;case"select":Ee("invalid",t),s=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":_=A;break;case"multiple":s=A;default:Ye(t,n,u,A,a,null)}n=f,a=_,t.multiple=!!s,n!=null?ls(t,!!s,n,!1):a!=null&&ls(t,!!s,a,!0);return;case"textarea":Ee("invalid",t),f=u=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":s=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Ye(t,n,_,A,a,null)}Hm(t,s,u,f);return;case"option":for(z in a)a.hasOwnProperty(z)&&(s=a[z],s!=null)&&(z==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ye(t,n,z,s,a,null));return;case"dialog":Ee("beforetoggle",t),Ee("toggle",t),Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":Ee("load",t);break;case"video":case"audio":for(s=0;s<ol.length;s++)Ee(ol[s],t);break;case"image":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"embed":case"source":case"link":Ee("error",t),Ee("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(s=a[et],s!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ye(t,n,et,s,a,null)}return;default:if($c(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&jd(t,n,ft,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&Ye(t,n,A,s,a,null))}var Qy={};function Jy(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,A=null,z=null,et=null,ft=null;for(lt in a){var xt=a[lt];if(a.hasOwnProperty(lt)&&xt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":z=xt;default:s.hasOwnProperty(lt)||Ye(t,n,lt,null,s,xt)}}for(var j in s){var lt=s[j];if(xt=a[j],s.hasOwnProperty(j)&&(lt!=null||xt!=null))switch(j){case"type":lt!==xt&&(ve=!0),f=lt;break;case"name":lt!==xt&&(ve=!0),u=lt;break;case"checked":lt!==xt&&(ve=!0),et=lt;break;case"defaultChecked":lt!==xt&&(ve=!0),ft=lt;break;case"value":lt!==xt&&(ve=!0),_=lt;break;case"defaultValue":lt!==xt&&(ve=!0),A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==xt&&Ye(t,n,j,lt,s,xt)}}Jc(t,_,A,z,et,ft,f,u);return;case"select":lt=_=A=j=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":lt=z;default:s.hasOwnProperty(f)||Ye(t,n,f,null,s,z)}for(u in s)if(f=s[u],z=a[u],s.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":f!==z&&(ve=!0),j=f;break;case"defaultValue":f!==z&&(ve=!0),A=f;break;case"multiple":f!==z&&(ve=!0),_=f;default:f!==z&&Ye(t,n,u,f,s,z)}n=A,a=_,s=lt,j!=null?ls(t,!!a,j,!1):!!s!=!!a&&(n!=null?ls(t,!!a,n,!0):ls(t,!!a,a?[]:"",!1));return;case"textarea":lt=j=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ye(t,n,A,null,s,u)}for(_ in s)if(u=s[_],f=a[_],s.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":u!==f&&(ve=!0),j=u;break;case"defaultValue":u!==f&&(ve=!0),lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ye(t,n,_,u,s,f)}Bm(t,j,lt);return;case"option":for(var Pt in a)j=a[Pt],a.hasOwnProperty(Pt)&&j!=null&&!s.hasOwnProperty(Pt)&&(Pt==="selected"?t.selected=!1:Ye(t,n,Pt,null,s,j));for(z in s)j=s[z],lt=a[z],s.hasOwnProperty(z)&&j!==lt&&(j!=null||lt!=null)&&(z==="selected"?(j!==lt&&(ve=!0),t.selected=j&&typeof j!="function"&&typeof j!="symbol"):Ye(t,n,z,j,s,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)j=a[Qt],a.hasOwnProperty(Qt)&&j!=null&&!s.hasOwnProperty(Qt)&&Ye(t,n,Qt,null,s,j);for(et in s)if(j=s[et],lt=a[et],s.hasOwnProperty(et)&&j!==lt&&(j!=null||lt!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(r(137,n));break;default:Ye(t,n,et,j,s,lt)}return;default:if($c(n)){for(var he in a)j=a[he],a.hasOwnProperty(he)&&j!==void 0&&!s.hasOwnProperty(he)&&jd(t,n,he,void 0,s,j);for(ft in s)j=s[ft],lt=a[ft],!s.hasOwnProperty(ft)||j===lt||j===void 0&&lt===void 0||jd(t,n,ft,j,s,lt);return}}for(var tt in a)j=a[tt],a.hasOwnProperty(tt)&&j!=null&&!s.hasOwnProperty(tt)&&Ye(t,n,tt,null,s,j);for(xt in s)j=s[xt],lt=a[xt],!s.hasOwnProperty(xt)||j===lt||j==null&&lt==null||Ye(t,n,xt,j,s,lt)}function Z_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,_=u.initiatorType,A=u.duration;if(f&&A&&Z_(_)){for(_=0,A=u.responseEnd,s+=1;s<a.length;s++){var z=a[s],et=z.startTime;if(et>A)break;var ft=z.transferSize,xt=z.initiatorType;ft&&Z_(xt)&&(z=z.responseEnd,_+=ft*(z<A?1:(A-et)/(z-et)))}if(--s,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var $d=null,th=null;function ul(t){return t.nodeType===9?t:t.ownerDocument}function K_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Q_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function J_(t,n,a,s){return a=ul(a).createElement(t),a[b]=s,a[X]=n,Ln(a,t,n),_e(a),a}function eh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var nh=null;function $y(){var t=window.event;return t&&t.type==="popstate"?t===nh?!1:(nh=t,!0):(nh=null,!1)}var ih=typeof setTimeout=="function"?setTimeout:void 0,tE=typeof clearTimeout=="function"?clearTimeout:void 0,j_=typeof Promise=="function"?Promise:void 0,$_=typeof requestAnimationFrame=="function"?requestAnimationFrame:ih,eE=typeof queueMicrotask=="function"?queueMicrotask:typeof j_<"u"?function(t){return j_.resolve(null).then(t).catch(nE)}:ih;function nE(t){setTimeout(function(){throw t})}function cr(t){return t==="head"}function tv(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),qs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")fh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,fh(a);for(var f=a.firstChild;f;){var _=f.nextSibling,A=f.nodeName;f[Ot]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&fh(t.ownerDocument.body);a=u}while(a);qs(n)}function ev(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function nv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var u=s=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function iv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function iE(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function ah(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return iE(n,a,t)}function aE(t){return t.documentElement.clientHeight}function rE(t){this.addEventListener("load",t),this.addEventListener("error",t)}function sE(t,n,a,s,u,f,_,A,z){var et=n.nodeType===9?n:n.ownerDocument;try{var ft=et.startViewTransition({update:function(){var j=et.defaultView,lt=j.navigation&&j.navigation.transition,Pt=et.fonts.status;s();var Qt=[];if(Pt==="loaded"&&(aE(et),et.fonts.status==="loading"&&Qt.push(et.fonts.ready)),Pt=Qt.length,t!==null)for(var he=t.suspenseyImages,tt=0,q=0;q<he.length;q++){var at=he[q];if(!at.complete){var St=at.getBoundingClientRect();if(0<St.bottom&&0<St.right&&St.top<j.innerHeight&&St.left<j.innerWidth){if(tt+=Tv(at),tt>$u){Qt.length=Pt;break}at=new Promise(rE.bind(at)),Qt.push(at)}}}if(0<Qt.length)return j=Promise.race([Promise.all(Qt),new Promise(function(Yt){return setTimeout(Yt,500)})]).then(u,u),(lt?Promise.allSettled([lt.finished,j]):j).then(f,f);if(u(),lt)return lt.finished.then(f,f);f()},types:a});et.__reactViewTransition=ft;var xt=[];return ft.ready.then(function(){for(var j=et.documentElement.getAnimations({subtree:!0}),lt=0;lt<j.length;lt++){var Pt=j[lt],Qt=Pt.effect,he=Qt.pseudoElement;if(he!=null&&he.startsWith("::view-transition")){xt.push(Pt),Pt=Qt.getKeyframes();for(var tt=he=void 0,q=!0,at=0;at<Pt.length;at++){var St=Pt[at],Yt=St.width;if(he===void 0)he=Yt;else if(he!==Yt){q=!1;break}if(Yt=St.height,tt===void 0)tt=Yt;else if(tt!==Yt){q=!1;break}delete St.width,delete St.height,St.transform==="none"&&delete St.transform}q&&he!==void 0&&tt!==void 0&&(Qt.setKeyframes(Pt),q=getComputedStyle(Qt.target,Qt.pseudoElement),q.width!==he||q.height!==tt)&&(q=Pt[0],q.width=he,q.height=tt,q=Pt[Pt.length-1],q.width=he,q.height=tt,Qt.setKeyframes(Pt))}}_()},function(j){et.__reactViewTransition===ft&&(et.__reactViewTransition=null);try{typeof j=="object"&&j!==null&&j.name==="InvalidStateError"&&(j.message==="View transition was skipped because document visibility state is hidden."||j.message==="Skipping view transition because document visibility state has become hidden."||j.message==="Skipping view transition because viewport size changed."||j.message==="Transition was aborted because of invalid state")&&(j=null),j!==null&&z(j)}finally{s(),u(),_()}}),ft.finished.finally(function(){for(var j=0;j<xt.length;j++)xt[j].cancel();et.__reactViewTransition===ft&&(et.__reactViewTransition=null),A()}),ft}catch{return s(),u(),_(),null}}function Zr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Zr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:N({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Zr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===t&&f.pseudoElement===n&&s.push(a[u])}return s},Zr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function av(t){return{name:t,group:new Zr("group",t),imagePair:new Zr("image-pair",t),old:new Zr("old",t),new:new Zr("new",t)}}function fi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}fi.prototype.addEventListener=function(t,n,a){var s=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(sv(f,t,n,a)===-1){var _=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(z){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,z):n.handleEvent(z)}),s!==null&&(u=_.removeEventListener.bind(_,t,n,a),s.addEventListener("abort",u,{once:!0}),u=s.removeEventListener.bind(s,"abort",u)),s=Hs(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:u}),g(this._fragmentFiber.child,!1,oE,t,A,s)}this._eventListeners=f}};function oE(t,n,a,s){return M(t).addEventListener(n,a,s),!1}fi.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=sv(s,t,n,a),n!==-1)){var u=s[n];a=u.attachedListener;var f=u.cleanup;u=Hs(u.optionsOrUseCapture),g(this._fragmentFiber.child,!1,lE,t,a,u),s.splice(n,1),f!==null&&f()}};function lE(t,n,a,s){return M(t).removeEventListener(n,a,s),!1}function Hs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function rv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function sv(t,n,a,s){if(t.length===0)return-1;s=rv(s);for(var u=0;u<t.length;u++){var f=t[u];if(f.type===n&&f.listener===a&&rv(f.optionsOrUseCapture)===s)return u}return-1}fi.prototype.dispatchEvent=function(t){var n=v(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];s.addEventListener(f.type,f.attachedListener,Hs(f.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(u=0;u<a.length;u++)f=a[u],s.removeEventListener(f.type,f.attachedListener,Hs(f.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},fi.prototype.focus=function(t){g(this._fragmentFiber.child,!0,ov,t,void 0,void 0)};function ov(t,n){return t.tag===6?!1:(t=M(t),xE(t,n))}fi.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,rh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!ov(n[a],t);a--);};function rh(t,n){return n.push(t),!1}fi.prototype.blur=function(){var t=v(this._fragmentFiber);t!==null&&(t=M(t),t=ul(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,uE,t,void 0,void 0))};function uE(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}fi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,cE,t,void 0,void 0)};function cE(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}fi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,fE,t,void 0,void 0);for(var a=n=0;a<Pi.length;a++){var s=Pi[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Pi[n++]=s}Pi.length=n}};function fE(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Pi=[],sh=!1;function dE(t,n,a){Pi.push({fragmentInstance:t,observer:n,instance:a}),sh||(sh=!0,ME(function(){sh=!1;var s=Pi;Pi=[];for(var u=0;u<s.length;u++){var f=s[u];f.observer.unobserve(f.instance)}}))}fi.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,hE,t,void 0,void 0),t};function hE(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}fi.prototype.getRootNode=function(t){var n=v(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},fi.prototype.compareDocumentPosition=function(t){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,rh,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,y(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=s=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=R(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var f=y(this._fragmentFiber)?n.parentElement:s;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),A=u.compareDocumentPosition(t),z=_&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=s&&f&&_&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||f&&u===t||z||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!f&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||pE(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function pE(t,n,a,s,u){var f=re(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=v(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=w(a,f,L),n===null?n=!1:(g(n,!0,k,f,a),f=x,x=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===s)&&(n=w(s,f,L),n===null?n=!1:(g(n,!0,D,f,s),f=x,I=x=null,n=f!==null)),n):!1}function lv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}fi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];g(this._fragmentFiber.child,!1,rh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=R(this._fragmentFiber);if(s=a?s[1]||s[0]||v(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=M(s),lv(t,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var u=n[s];u.tag===6?(u=M(u),lv(u,a)):M(u).scrollIntoView(t),s+=a?-1:1}};function mE(t,n){return t=M(t),uv(t,n),!1}function uv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function cv(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.addEventListener(u.type,u.attachedListener,Hs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var _=0,A=0;A<Pi.length;A++){var z=Pi[A];(z.fragmentInstance!==n||z.observer!==f||z.instance!==t)&&(Pi[_++]=z)}Pi.length=_,f.observe(t)}),uv(t,n))}function gE(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.removeEventListener(u.type,u.attachedListener,Hs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?dE(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function oh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":oh(a),Kt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function _E(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ot])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ai(t.nextSibling),t===null)break}return null}function vE(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ai(t.nextSibling),t===null))return null;return t}function fv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ai(t.nextSibling),t===null))return null;return t}function lh(t){return t.data==="$?"||t.data==="$~"}function uh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function SE(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Ai(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ch=null;function dv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ai(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function hv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function xE(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function ME(t){$_(function(){$_(function(n){return t(n)})})}function pv(t,n,a){switch(n=ul(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function mv(t,n,a){for(var s in a){var u=a[s];a.hasOwnProperty(s)&&u!=null&&Ye(t,n,s,null,Qy,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===qi&&(t.onclick=null),Kt(t)}function fh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Kt(t)}var Ri=new Map,gv=new Set;function cl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var wa=wt.d;wt.d={f:yE,r:EE,D:TE,C:bE,L:AE,m:RE,X:wE,S:CE,M:DE};function yE(){var t=wa.f(),n=ku();return t||n}function EE(t){var n=ce(t);n!==null&&n.tag===5&&n.type==="form"?vg(n):wa.r(t)}var Gs=typeof document>"u"?null:document;function _v(t,n,a){var s=Gs;if(s&&typeof n=="string"&&n){var u=Si(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),gv.has(u)||(gv.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Ln(n,"link",t),_e(n),s.head.appendChild(n)))}}function TE(t){wa.D(t),_v("dns-prefetch",t,null)}function bE(t,n){wa.C(t,n),_v("preconnect",t,n)}function AE(t,n,a){wa.L(t,n,a);var s=Gs;if(s&&t&&n){var u='link[rel="preload"][as="'+Si(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Si(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Si(a.imageSizes)+'"]')):u+='[href="'+Si(t)+'"]';var f=u;switch(n){case"style":f=Vs(t);break;case"script":f=Xs(t)}if(!(Ri.has(f)||(t=N({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ri.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(fl(f))||n==="script"&&s.querySelector(dl(f))))){var _=s.createElement("link");Ln(_,"link",t),n==="style"&&(_[Zt]=!0,_.onload=_.onerror=function(){Ke(_)}),_e(_),s.head.appendChild(_)}}}function RE(t,n){wa.m(t,n);var a=Gs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Si(s)+'"][href="'+Si(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Xs(t)}if(!Ri.has(f)&&(t=N({rel:"modulepreload",href:t},n),Ri.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(dl(f)))return}s=a.createElement("link"),Ln(s,"link",t),_e(s),a.head.appendChild(s)}}}function CE(t,n,a){wa.S(t,n,a);var s=Gs;if(s&&t){var u=Me(s).hoistableStyles,f=Vs(t);n=n||"default";var _=u.get(f);if(!_){var A={loading:0,preload:null};if(_=s.querySelector(fl(f)))A.loading=5;else{t=N({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ri.get(f))&&dh(t,a);var z=_=s.createElement("link");_e(z),Ln(z,"link",t),z._p=new Promise(function(et,ft){z.onload=et,z.onerror=ft}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Ju(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:A},u.set(f,_)}}}function wE(t,n){wa.X(t,n);var a=Gs;if(a&&t){var s=Me(a).hoistableScripts,u=Xs(t),f=s.get(u);f||(f=a.querySelector(dl(u)),f||(t=N({src:t,async:!0},n),(n=Ri.get(u))&&hh(t,n),f=a.createElement("script"),_e(f),Ln(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function DE(t,n){wa.M(t,n);var a=Gs;if(a&&t){var s=Me(a).hoistableScripts,u=Xs(t),f=s.get(u);f||(f=a.querySelector(dl(u)),f||(t=N({src:t,async:!0,type:"module"},n),(n=Ri.get(u))&&hh(t,n),f=a.createElement("script"),_e(f),Ln(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function vv(t,n,a,s){var u=(u=ze.current)?cl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Vs(a.href),n=Me(u).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Vs(a.href);var f=Me(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(fl(t)))?f._p||(_.instance=f,_.state.loading=5):(f=Ri.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ri.set(t,f)),NE(u,t,f,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Xs(a),n=Me(u).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Vs(t){return'href="'+Si(t)+'"'}function fl(t){return'link[rel="stylesheet"]['+t+"]"}function Sv(t){return N({},t,{"data-precedence":t.precedence,precedence:null})}function NE(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Zt]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Zt]=!0,n.onload=n.onerror=Ke.bind(null,n),Ln(n,"link",a),_e(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Xs(t){return'[src="'+Si(t)+'"]'}function dl(t){return"script[async]"+t}function xv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Si(a.href)+'"]');if(s)return n.instance=s,_e(s),s;var u=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),_e(s),Ln(s,"style",u),Ju(s,a.precedence,t),n.instance=s;case"stylesheet":u=Vs(a.href);var f=t.querySelector(fl(u));if(f)return n.state.loading|=4,n.instance=f,_e(f),f;s=Sv(a),(u=Ri.get(u))&&dh(s,u),f=(t.ownerDocument||t).createElement("link"),_e(f);var _=f;return _._p=new Promise(function(A,z){_.onload=A,_.onerror=z}),Ln(f,"link",s),n.state.loading|=4,Ju(f,a.precedence,t),n.instance=f;case"script":return f=Xs(a.src),(u=t.querySelector(dl(f)))?(n.instance=u,_e(u),u):(s=a,(u=Ri.get(f))&&(s=N({},a),hh(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),_e(u),Ln(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ju(s,a.precedence,t));return n.instance}function Ju(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,_=0;_<s.length;_++){var A=s[_];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function dh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function hh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ju=null;function Mv(t,n,a){if(ju===null){var s=new Map,u=ju=new Map;u.set(a,s)}else u=ju,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ot]||f[b]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var A=s.get(_);A?A.push(f):s.set(_,[f])}}return s}function ph(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function UE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function yv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Ev(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Tv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function bv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Tv(n),t.suspenseyImages.push(n)),t=PE.bind(t),n.decode().then(t,t))}function LE(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Vs(s.href),f=n.querySelector(fl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=hl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,_e(f);return}f=n.ownerDocument||n,s=Sv(s),(u=Ri.get(u))&&dh(s,u),f=f.createElement("link"),_e(f);var _=f;_._p=new Promise(function(A,z){_.onload=A,_.onerror=z}),Ln(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=hl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var $u=0;function OE(t,n){return t.stylesheets&&t.count===0&&ec(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&ec(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&$u===0&&($u=62500*jy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ec(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>$u?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Av(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)ec(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function hl(){this.count--,Av(this)}function PE(){this.imgCount--,Av(this)}var tc=null;function ec(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,tc=new Map,n.forEach(IE,t),tc=null,hl.call(t))}function IE(t,n){if(!(n.state.loading&4)){var a=tc.get(t);if(a)var s=a.get(null);else{a=new Map,tc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,u),a.set(_,u),this.count++,s=hl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var ks={$$typeof:Z,Provider:null,Consumer:null,_currentValue:Xe,_currentValue2:Xe,_threadCount:0};function zE(t,n,a,s,u,f,_,A,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=os(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=os(0),this.hiddenUpdates=os(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.transitionTypes=null,this.incompleteTransitions=new Map}function Rv(t,n,a,s,u,f,_,A,z,et,ft,xt){return t=new zE(t,n,a,_,z,et,ft,xt,A),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),t.current=f,f.stateNode=t,n=wf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Lf(f),t}function Cv(t){return t?(t=gs,t):gs}function wv(t,n,a,s,u,f){u=Cv(u),s.context===null?s.context=u:s.pendingContext=u,s=ja(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=$a(t,s,n),a!==null&&($n(a,t,n),ko(a,t,n))}function Dv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function mh(t,n){Dv(t,n),(t=t.alternate)&&Dv(t,n)}function Nv(t){if(t.tag===13||t.tag===31){var n=Nr(t,67108864);n!==null&&$n(n,t,67108864),mh(t,67108864)}}function Uv(t){if(t.tag===13||t.tag===31){var n=ci();n=Ro(n);var a=Nr(t,n);a!==null&&$n(a,t,n),mh(t,n)}}var Ws=!0;function FE(t,n,a,s){var u=vt.T;vt.T=null;var f=wt.p;try{wt.p=2,gh(t,n,a,s)}finally{wt.p=f,vt.T=u}}function BE(t,n,a,s){var u=vt.T;vt.T=null;var f=wt.p;try{wt.p=8,gh(t,n,a,s)}finally{wt.p=f,vt.T=u}}function gh(t,n,a,s){if(Ws){var u=_h(s);if(u===null)Jd(t,n,s,nc,a),Ov(t,s);else if(GE(u,t,n,a,s))s.stopPropagation();else if(Ov(t,s),n&4&&-1<HE.indexOf(t)){for(;u!==null;){var f=ce(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=ma(f.pendingLanes);if(_!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var z=1<<31-ue(_);A.entanglements[1]|=z,_&=~z}na(f),(He&6)===0&&(Gu=kt()+500,sl(0))}}break;case 31:case 13:A=Nr(f,2),A!==null&&$n(A,f,2),ku(),mh(f,2)}if(f=_h(s),f===null&&Jd(t,n,s,nc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Jd(t,n,s,null,a)}}function _h(t){return t=ef(t),vh(t)}var nc=null;function vh(t){if(nc=null,t=re(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return nc=t,null}function Lv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case le:return 2;case Q:return 8;case Dt:case Mt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var Sh=!1,fr=null,dr=null,hr=null,pl=new Map,ml=new Map,pr=[],HE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ov(t,n){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":pl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(n.pointerId)}}function gl(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ce(n),n!==null&&Nv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function GE(t,n,a,s,u){switch(n){case"focusin":return fr=gl(fr,t,n,a,s,u),!0;case"dragenter":return dr=gl(dr,t,n,a,s,u),!0;case"mouseover":return hr=gl(hr,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return pl.set(f,gl(pl.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,ml.set(f,gl(ml.get(f)||null,t,n,a,s,u)),!0}return!1}function Pv(t){var n=re(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Vl(t.priority,function(){Uv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Vl(t.priority,function(){Uv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ic(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=_h(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);tf=s,a.target.dispatchEvent(s),tf=null}else return n=ce(a),n!==null&&Nv(n),t.blockedOn=a,!1;n.shift()}return!0}function Iv(t,n,a){ic(t)&&a.delete(n)}function VE(){Sh=!1,fr!==null&&ic(fr)&&(fr=null),dr!==null&&ic(dr)&&(dr=null),hr!==null&&ic(hr)&&(hr=null),pl.forEach(Iv),ml.forEach(Iv)}function ac(t,n){t.blockedOn===n&&(t.blockedOn=null,Sh||(Sh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,VE)))}var rc=null;function zv(t){rc!==t&&(rc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){rc===t&&(rc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(vh(s||a)===null)continue;break}var f=ce(a);f!==null&&(t.splice(n,3),n-=3,td(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function qs(t){function n(z){return ac(z,t)}fr!==null&&ac(fr,t),dr!==null&&ac(dr,t),hr!==null&&ac(hr,t),pl.forEach(n),ml.forEach(n);for(var a=0;a<pr.length;a++){var s=pr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<pr.length&&(a=pr[0],a.blockedOn===null);)Pv(a),a.blockedOn===null&&pr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],_=u[X]||null;if(typeof f=="function")_||zv(a);else if(_){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[X]||null)A=_.formAction;else if(vh(u)!==null)continue}else A=_.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),zv(a)}}}function Fv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function xh(t){this._internalRoot=t}sc.prototype.render=xh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ci();wv(a,s,t,n,null,null)},sc.prototype.unmount=xh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;wv(t.current,2,null,t,null,null),ku(),n[dt]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Gl();t={blockedOn:null,target:t,priority:n};for(var a=0;a<pr.length&&n!==0&&n<pr[a].priority;a++);pr.splice(a,0,t),a===0&&Pv(t)}};var Bv=e.version;if(Bv!=="19.3.0")throw Error(r(527,Bv,"19.3.0"));wt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var XE={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:vt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{Jt=oc.inject(XE),Vt=oc}catch{}}return vl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Cg,f=wg,_=Dg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Rv(t,1,!1,null,null,a,s,null,u,f,_,Fv),t[dt]=n.current,Qd(t),new xh(n)},vl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Cg,_=wg,A=Dg,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=Rv(t,1,!0,n,a??null,s,u,z,f,_,A,Fv),n.context=Cv(null),a=n.current,s=ci(),s=Ro(s),u=ja(s),u.callback=null,$a(a,u,s),a=s,n.current.lanes=a,ki(n,a),na(n),t[dt]=n.current,Qd(t),new sc(n)},vl.version="19.3.0",vl}var Kv;function jE(){if(Kv)return Eh.exports;Kv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Eh.exports=JE(),Eh.exports}var $E=jE();const gm="186",t1=0,Qv=1,e1=2,Uc=1,n1=2,Rl=3,gi=0,ei=1,Ia=2,Fa=0,wl=1,Jv=2,jv=3,$v=4,i1=5,oo=100,a1=101,r1=102,s1=103,o1=104,l1=200,u1=201,c1=202,f1=203,vx=204,Sx=205,d1=206,h1=207,p1=208,m1=209,g1=210,_1=211,v1=212,S1=213,x1=214,cp=0,fp=1,dp=2,Nl=3,hp=4,pp=5,mp=6,gp=7,xx=0,M1=1,y1=2,ua=0,Mx=1,yx=2,Ex=3,Tx=4,bx=5,Ax=6,Rx=7,Cx=300,is=301,po=302,Rh=303,Ch=304,qc=306,_p=1e3,za=1001,vp=1002,Pn=1003,E1=1004,lc=1005,Hn=1006,wh=1007,es=1008,mi=1009,wx=1010,Dx=1011,Ul=1012,_m=1013,fa=1014,oa=1015,da=1016,vm=1017,Sm=1018,Ll=1020,Nx=35902,Ux=35899,Lx=1021,Ox=1022,Hi=1023,Ga=1026,ns=1027,Px=1028,xm=1029,as=1030,Mm=1031,ym=1033,Lc=33776,Oc=33777,Pc=33778,Ic=33779,Sp=35840,xp=35841,Mp=35842,yp=35843,Ep=36196,Tp=37492,bp=37496,Ap=37488,Rp=37489,Bc=37490,Cp=37491,wp=37808,Dp=37809,Np=37810,Up=37811,Lp=37812,Op=37813,Pp=37814,Ip=37815,zp=37816,Fp=37817,Bp=37818,Hp=37819,Gp=37820,Vp=37821,Xp=36492,kp=36494,Wp=36495,qp=36283,Yp=36284,Hc=36285,Zp=36286,T1=3200,Kp=0,b1=1,Er="",pi="srgb",Gc="srgb-linear",Vc="linear",Ze="srgb",Dh=7680,A1=519,R1=512,C1=513,w1=514,Em=515,D1=516,N1=517,Tm=518,U1=519,L1=35044,tS="300 es",la=2e3,Ol=2001;function O1(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Xc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function P1(){const o=Xc("canvas");return o.style.display="block",o}const eS={};function nS(...o){const e="THREE."+o.shift();console.log(e,...o)}function Ix(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function oe(...o){o=Ix(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Fe(...o){o=Ix(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function uo(...o){const e=o.join(" ");e in eS||(eS[e]=!0,oe(...o))}function I1(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const z1={[cp]:fp,[dp]:mp,[hp]:gp,[Nl]:pp,[fp]:cp,[mp]:dp,[gp]:hp,[pp]:Nl};class rs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nh=Math.PI/180,Qp=180/Math.PI;function Il(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]).toLowerCase()}function Ne(o,e,i){return Math.max(e,Math.min(i,o))}function F1(o,e){return(o%e+e)%e}function Uh(o,e,i){return(1-i)*o+i*e}function Sl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ti(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Um=class Um{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ne(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ne(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Um.prototype.isVector2=!0;let Oe=Um;class Ie{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,h){let p=r[l+0],m=r[l+1],S=r[l+2],g=r[l+3],v=c[d+0],y=c[d+1],R=c[d+2],U=c[d+3];if(g!==U||p!==v||m!==y||S!==R){let M=p*v+m*y+S*R+g*U;M<0&&(v=-v,y=-y,R=-R,U=-U,M=-M);let x=1-h;if(M<.9995){const I=Math.acos(M),k=Math.sin(I);x=Math.sin(x*I)/k,h=Math.sin(h*I)/k,p=p*x+v*h,m=m*x+y*h,S=S*x+R*h,g=g*x+U*h}else{p=p*x+v*h,m=m*x+y*h,S=S*x+R*h,g=g*x+U*h;const I=1/Math.sqrt(p*p+m*m+S*S+g*g);p*=I,m*=I,S*=I,g*=I}}e[i]=p,e[i+1]=m,e[i+2]=S,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,d){const h=r[l],p=r[l+1],m=r[l+2],S=r[l+3],g=c[d],v=c[d+1],y=c[d+2],R=c[d+3];return e[i]=h*R+S*g+p*y-m*v,e[i+1]=p*R+S*v+m*g-h*y,e[i+2]=m*R+S*y+h*v-p*g,e[i+3]=S*R-h*g-p*v-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(r/2),S=h(l/2),g=h(c/2),v=p(r/2),y=p(l/2),R=p(c/2);switch(d){case"XYZ":this._x=v*S*g+m*y*R,this._y=m*y*g-v*S*R,this._z=m*S*R+v*y*g,this._w=m*S*g-v*y*R;break;case"YXZ":this._x=v*S*g+m*y*R,this._y=m*y*g-v*S*R,this._z=m*S*R-v*y*g,this._w=m*S*g+v*y*R;break;case"ZXY":this._x=v*S*g-m*y*R,this._y=m*y*g+v*S*R,this._z=m*S*R+v*y*g,this._w=m*S*g-v*y*R;break;case"ZYX":this._x=v*S*g-m*y*R,this._y=m*y*g+v*S*R,this._z=m*S*R-v*y*g,this._w=m*S*g+v*y*R;break;case"YZX":this._x=v*S*g+m*y*R,this._y=m*y*g+v*S*R,this._z=m*S*R-v*y*g,this._w=m*S*g-v*y*R;break;case"XZY":this._x=v*S*g-m*y*R,this._y=m*y*g-v*S*R,this._z=m*S*R+v*y*g,this._w=m*S*g+v*y*R;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],p=i[9],m=i[2],S=i[6],g=i[10],v=r+h+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(S-p)*y,this._y=(c-m)*y,this._z=(d-l)*y}else if(r>h&&r>g){const y=2*Math.sqrt(1+r-h-g);this._w=(S-p)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+m)/y}else if(h>g){const y=2*Math.sqrt(1+h-r-g);this._w=(c-m)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(p+S)/y}else{const y=2*Math.sqrt(1+g-r-h);this._w=(d-l)/y,this._x=(c+m)/y,this._y=(p+S)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ne(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,h=i._x,p=i._y,m=i._z,S=i._w;return this._x=r*S+d*h+l*m-c*p,this._y=l*S+d*p+c*h-r*m,this._z=c*S+d*m+r*p-l*h,this._w=d*S-r*h-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),S=Math.sin(m);p=Math.sin(p*m)/S,i=Math.sin(i*m)/S,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Lm=class Lm{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(iS.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(iS.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*r),S=2*(h*i-c*l),g=2*(c*r-d*i);return this.x=i+p*m+d*g-h*S,this.y=r+p*S+h*m-c*g,this.z=l+p*g+c*S-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this.z=Ne(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this.z=Ne(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ne(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-c*h,this.y=c*d-r*p,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Lh.copy(this).projectOnVector(e),this.sub(Lh)}reflect(e){return this.sub(Lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ne(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lm.prototype.isVector3=!0;let Y=Lm;const Lh=new Y,iS=new Ie,Om=class Om{constructor(e,i,r,l,c,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,p,m)}set(e,i,r,l,c,d,h,p,m){const S=this.elements;return S[0]=e,S[1]=l,S[2]=h,S[3]=i,S[4]=c,S[5]=p,S[6]=r,S[7]=d,S[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],S=r[4],g=r[7],v=r[2],y=r[5],R=r[8],U=l[0],M=l[3],x=l[6],I=l[1],k=l[4],D=l[7],L=l[2],w=l[5],N=l[8];return c[0]=d*U+h*I+p*L,c[3]=d*M+h*k+p*w,c[6]=d*x+h*D+p*N,c[1]=m*U+S*I+g*L,c[4]=m*M+S*k+g*w,c[7]=m*x+S*D+g*N,c[2]=v*U+y*I+R*L,c[5]=v*M+y*k+R*w,c[8]=v*x+y*D+R*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8];return i*d*S-i*h*m-r*c*S+r*h*p+l*c*m-l*d*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8],g=S*d-h*m,v=h*p-S*c,y=m*c-d*p,R=i*g+r*v+l*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const U=1/R;return e[0]=g*U,e[1]=(l*m-S*r)*U,e[2]=(h*r-l*d)*U,e[3]=v*U,e[4]=(S*i-l*p)*U,e[5]=(l*c-h*i)*U,e[6]=y*U,e[7]=(r*p-m*i)*U,e[8]=(d*i-r*c)*U,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,h){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return uo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oh.makeScale(e,i)),this}rotate(e){return uo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oh.makeRotation(-e)),this}translate(e,i){return uo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Om.prototype.isMatrix3=!0;let fe=Om;const Oh=new fe,aS=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rS=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function B1(){const o={enabled:!0,workingColorSpace:Gc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Ze&&(l.r=Ba(l.r),l.g=Ba(l.g),l.b=Ba(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ze&&(l.r=co(l.r),l.g=co(l.g),l.b=co(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Er?Vc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return uo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return uo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Gc]:{primaries:e,whitePoint:r,transfer:Vc,toXYZ:aS,fromXYZ:rS,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:r,transfer:Ze,toXYZ:aS,fromXYZ:rS,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),o}const De=B1();function Ba(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function co(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ys;class H1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ys===void 0&&(Ys=Xc("canvas")),Ys.width=e.width,Ys.height=e.height;const l=Ys.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Ys}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Xc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Ba(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ba(i[r]/255)*255):i[r]=Ba(i[r]);return{data:i,width:e.width,height:e.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let G1=0;class bm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=Il(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(Ph(l[d].image)):c.push(Ph(l[d]))}else c=Ph(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Ph(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?H1.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let V1=0;const Ih=new Y;class Gn extends rs{constructor(e=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=za,l=za,c=Hn,d=es,h=Hi,p=mi,m=Gn.DEFAULT_ANISOTROPY,S=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=Il(),this.name="",this.source=new bm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ih).x}get height(){return this.source.getSize(Ih).y}get depth(){return this.source.getSize(Ih).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _p:e.x=e.x-Math.floor(e.x);break;case za:e.x=e.x<0?0:1;break;case vp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _p:e.y=e.y-Math.floor(e.y);break;case za:e.y=e.y<0?0:1;break;case vp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Cx;Gn.DEFAULT_ANISOTROPY=1;const Pm=class Pm{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const p=e.elements,m=p[0],S=p[4],g=p[8],v=p[1],y=p[5],R=p[9],U=p[2],M=p[6],x=p[10];if(Math.abs(S-v)<.01&&Math.abs(g-U)<.01&&Math.abs(R-M)<.01){if(Math.abs(S+v)<.1&&Math.abs(g+U)<.1&&Math.abs(R+M)<.1&&Math.abs(m+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const k=(m+1)/2,D=(y+1)/2,L=(x+1)/2,w=(S+v)/4,N=(g+U)/4,E=(R+M)/4;return k>D&&k>L?k<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(k),l=w/r,c=N/r):D>L?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=w/l,c=E/l):L<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(L),r=N/c,l=E/c),this.set(r,l,c,i),this}let I=Math.sqrt((M-R)*(M-R)+(g-U)*(g-U)+(v-S)*(v-S));return Math.abs(I)<.001&&(I=1),this.x=(M-R)/I,this.y=(g-U)/I,this.z=(v-S)/I,this.w=Math.acos((m+y+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this.z=Ne(this.z,e.z,i.z),this.w=Ne(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this.z=Ne(this.z,e,i),this.w=Ne(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ne(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pm.prototype.isVector4=!0;let on=Pm;class X1 extends rs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new Gn(l),d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new bm(l)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends X1{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class zx extends Gn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class k1 extends Gn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Wc=class Wc{constructor(e,i,r,l,c,d,h,p,m,S,g,v,y,R,U,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,p,m,S,g,v,y,R,U,M)}set(e,i,r,l,c,d,h,p,m,S,g,v,y,R,U,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=d,x[9]=h,x[13]=p,x[2]=m,x[6]=S,x[10]=g,x[14]=v,x[3]=y,x[7]=R,x[11]=U,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wc().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Zs.setFromMatrixColumn(e,0).length(),c=1/Zs.setFromMatrixColumn(e,1).length(),d=1/Zs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),S=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const v=d*S,y=d*g,R=h*S,U=h*g;i[0]=p*S,i[4]=-p*g,i[8]=m,i[1]=y+R*m,i[5]=v-U*m,i[9]=-h*p,i[2]=U-v*m,i[6]=R+y*m,i[10]=d*p}else if(e.order==="YXZ"){const v=p*S,y=p*g,R=m*S,U=m*g;i[0]=v+U*h,i[4]=R*h-y,i[8]=d*m,i[1]=d*g,i[5]=d*S,i[9]=-h,i[2]=y*h-R,i[6]=U+v*h,i[10]=d*p}else if(e.order==="ZXY"){const v=p*S,y=p*g,R=m*S,U=m*g;i[0]=v-U*h,i[4]=-d*g,i[8]=R+y*h,i[1]=y+R*h,i[5]=d*S,i[9]=U-v*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const v=d*S,y=d*g,R=h*S,U=h*g;i[0]=p*S,i[4]=R*m-y,i[8]=v*m+U,i[1]=p*g,i[5]=U*m+v,i[9]=y*m-R,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const v=d*p,y=d*m,R=h*p,U=h*m;i[0]=p*S,i[4]=U-v*g,i[8]=R*g+y,i[1]=g,i[5]=d*S,i[9]=-h*S,i[2]=-m*S,i[6]=y*g+R,i[10]=v-U*g}else if(e.order==="XZY"){const v=d*p,y=d*m,R=h*p,U=h*m;i[0]=p*S,i[4]=-g,i[8]=m*S,i[1]=v*g+U,i[5]=d*S,i[9]=y*g-R,i[2]=R*g-y,i[6]=h*S,i[10]=U*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W1,e,q1)}lookAt(e,i,r){const l=this.elements;return di.subVectors(e,i),di.lengthSq()===0&&(di.z=1),di.normalize(),gr.crossVectors(r,di),gr.lengthSq()===0&&(Math.abs(r.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),gr.crossVectors(r,di)),gr.normalize(),uc.crossVectors(di,gr),l[0]=gr.x,l[4]=uc.x,l[8]=di.x,l[1]=gr.y,l[5]=uc.y,l[9]=di.y,l[2]=gr.z,l[6]=uc.z,l[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],S=r[1],g=r[5],v=r[9],y=r[13],R=r[2],U=r[6],M=r[10],x=r[14],I=r[3],k=r[7],D=r[11],L=r[15],w=l[0],N=l[4],E=l[8],C=l[12],F=l[1],P=l[5],H=l[9],K=l[13],W=l[2],Z=l[6],B=l[10],G=l[14],rt=l[3],nt=l[7],ct=l[11],gt=l[15];return c[0]=d*w+h*F+p*W+m*rt,c[4]=d*N+h*P+p*Z+m*nt,c[8]=d*E+h*H+p*B+m*ct,c[12]=d*C+h*K+p*G+m*gt,c[1]=S*w+g*F+v*W+y*rt,c[5]=S*N+g*P+v*Z+y*nt,c[9]=S*E+g*H+v*B+y*ct,c[13]=S*C+g*K+v*G+y*gt,c[2]=R*w+U*F+M*W+x*rt,c[6]=R*N+U*P+M*Z+x*nt,c[10]=R*E+U*H+M*B+x*ct,c[14]=R*C+U*K+M*G+x*gt,c[3]=I*w+k*F+D*W+L*rt,c[7]=I*N+k*P+D*Z+L*nt,c[11]=I*E+k*H+D*B+L*ct,c[15]=I*C+k*K+D*G+L*gt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],h=e[5],p=e[9],m=e[13],S=e[2],g=e[6],v=e[10],y=e[14],R=e[3],U=e[7],M=e[11],x=e[15],I=p*y-m*v,k=h*y-m*g,D=h*v-p*g,L=d*y-m*S,w=d*v-p*S,N=d*g-h*S;return i*(U*I-M*k+x*D)-r*(R*I-M*L+x*w)+l*(R*k-U*L+x*N)-c*(R*D-U*w+M*N)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[1],d=e[5],h=e[9],p=e[2],m=e[6],S=e[10];return i*(d*S-h*m)-r*(c*S-h*p)+l*(c*m-d*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8],g=e[9],v=e[10],y=e[11],R=e[12],U=e[13],M=e[14],x=e[15],I=i*h-r*d,k=i*p-l*d,D=i*m-c*d,L=r*p-l*h,w=r*m-c*h,N=l*m-c*p,E=S*U-g*R,C=S*M-v*R,F=S*x-y*R,P=g*M-v*U,H=g*x-y*U,K=v*x-y*M,W=I*K-k*H+D*P+L*F-w*C+N*E;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/W;return e[0]=(h*K-p*H+m*P)*Z,e[1]=(l*H-r*K-c*P)*Z,e[2]=(U*N-M*w+x*L)*Z,e[3]=(v*w-g*N-y*L)*Z,e[4]=(p*F-d*K-m*C)*Z,e[5]=(i*K-l*F+c*C)*Z,e[6]=(M*D-R*N-x*k)*Z,e[7]=(S*N-v*D+y*k)*Z,e[8]=(d*H-h*F+m*E)*Z,e[9]=(r*F-i*H-c*E)*Z,e[10]=(R*w-U*D+x*I)*Z,e[11]=(g*D-S*w-y*I)*Z,e[12]=(h*C-d*P-p*E)*Z,e[13]=(i*P-r*C+l*E)*Z,e[14]=(U*k-R*L-M*I)*Z,e[15]=(S*L-g*k+v*I)*Z,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,h=e.y,p=e.z,m=c*d,S=c*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,S*h+r,S*p-l*d,0,m*p-l*h,S*p+l*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,p=i._w,m=c+c,S=d+d,g=h+h,v=c*m,y=c*S,R=c*g,U=d*S,M=d*g,x=h*g,I=p*m,k=p*S,D=p*g,L=r.x,w=r.y,N=r.z;return l[0]=(1-(U+x))*L,l[1]=(y+D)*L,l[2]=(R-k)*L,l[3]=0,l[4]=(y-D)*w,l[5]=(1-(v+x))*w,l[6]=(M+I)*w,l[7]=0,l[8]=(R+k)*N,l[9]=(M-I)*N,l[10]=(1-(v+U))*N,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let d=Zs.set(l[0],l[1],l[2]).length();const h=Zs.set(l[4],l[5],l[6]).length(),p=Zs.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ii.copy(this);const m=1/d,S=1/h,g=1/p;return Ii.elements[0]*=m,Ii.elements[1]*=m,Ii.elements[2]*=m,Ii.elements[4]*=S,Ii.elements[5]*=S,Ii.elements[6]*=S,Ii.elements[8]*=g,Ii.elements[9]*=g,Ii.elements[10]*=g,i.setFromRotationMatrix(Ii),r.x=d,r.y=h,r.z=p,this}makePerspective(e,i,r,l,c,d,h=la,p=!1){const m=this.elements,S=2*c/(i-e),g=2*c/(r-l),v=(i+e)/(i-e),y=(r+l)/(r-l);let R,U;if(p)R=c/(d-c),U=d*c/(d-c);else if(h===la)R=-(d+c)/(d-c),U=-2*d*c/(d-c);else if(h===Ol)R=-d/(d-c),U=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=R,m[14]=U,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,c,d,h=la,p=!1){const m=this.elements,S=2/(i-e),g=2/(r-l),v=-(i+e)/(i-e),y=-(r+l)/(r-l);let R,U;if(p)R=1/(d-c),U=d/(d-c);else if(h===la)R=-2/(d-c),U=-(d+c)/(d-c);else if(h===Ol)R=-1/(d-c),U=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=g,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=R,m[14]=U,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Wc.prototype.isMatrix4=!0;let Je=Wc;const Zs=new Y,Ii=new Je,W1=new Y(0,0,0),q1=new Y(1,1,1),gr=new Y,uc=new Y,di=new Y,sS=new Je,oS=new Ie;class Vi{constructor(e=0,i=0,r=0,l=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],p=l[1],m=l[5],S=l[9],g=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Ne(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Ne(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-S,y),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return sS.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sS,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return oS.setFromEuler(this),this.setFromQuaternion(oS,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class Fx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Y1=0;const lS=new Y,Ks=new Ie,Da=new Je,cc=new Y,xl=new Y,Z1=new Y,K1=new Ie,uS=new Y(1,0,0),cS=new Y(0,1,0),fS=new Y(0,0,1),dS={type:"added"},Q1={type:"removed"},Qs={type:"childadded",child:null},zh={type:"childremoved",child:null};class In extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=Il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new Y,i=new Vi,r=new Ie,l=new Y(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new fe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ks.setFromAxisAngle(e,i),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,i){return Ks.setFromAxisAngle(e,i),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(uS,e)}rotateY(e){return this.rotateOnAxis(cS,e)}rotateZ(e){return this.rotateOnAxis(fS,e)}translateOnAxis(e,i){return lS.copy(e).applyQuaternion(this.quaternion),this.position.add(lS.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(uS,e)}translateY(e){return this.translateOnAxis(cS,e)}translateZ(e){return this.translateOnAxis(fS,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Da.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?cc.copy(e):cc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Da.lookAt(xl,cc,this.up):Da.lookAt(cc,xl,this.up),this.quaternion.setFromRotationMatrix(Da),l&&(Da.extractRotation(l.matrixWorld),Ks.setFromRotationMatrix(Da),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dS),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Q1),zh.child=e,this.dispatchEvent(zh),zh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Da.multiply(e.parent.matrixWorld)),e.applyMatrix4(Da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dS),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,e,Z1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,K1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let d=0,h=c.length;d<h;d++)c[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,S=p.length;m<S;m++){const g=p[m];c(e.shapes,g)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(e.materials,this.material[p]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),S=d(e.images),g=d(e.shapes),v=d(e.skeletons),y=d(e.animations),R=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),S.length>0&&(r.images=S),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),R.length>0&&(r.nodes=R)}return r.object=l,r;function d(h){const p=[];for(const m in h){const S=h[m];delete S.metadata,p.push(S)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}In.DEFAULT_UP=new Y(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fc extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J1={type:"move"};class Fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const U of e.hand.values()){const M=i.getJointPose(U,r),x=this._getHandJoint(m,U);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const S=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],v=S.position.distanceTo(g.position),y=.02,R=.005;m.inputState.pinching&&v>y+R?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=y-R&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(J1)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new fc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Bx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},dc={h:0,s:0,l:0};function Bh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Le{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=De.workingColorSpace){return this.r=e,this.g=i,this.b=r,De.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=De.workingColorSpace){if(e=F1(e,1),i=Ne(i,0,1),r=Ne(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=Bh(d,c,e+1/3),this.g=Bh(d,c,e),this.b=Bh(d,c,e-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(e,i=pi){function r(c){c!==void 0&&parseFloat(c)<1&&oe("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:oe("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=pi){const r=Bx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ba(e.r),this.g=Ba(e.g),this.b=Ba(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return De.workingToColorSpace(Bn.copy(this),e),Math.round(Ne(Bn.r*255,0,255))*65536+Math.round(Ne(Bn.g*255,0,255))*256+Math.round(Ne(Bn.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=De.workingColorSpace){De.workingToColorSpace(Bn.copy(this),i);const r=Bn.r,l=Bn.g,c=Bn.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let p,m;const S=(h+d)/2;if(h===d)p=0,m=0;else{const g=d-h;switch(m=S<=.5?g/(d+h):g/(2-d-h),d){case r:p=(l-c)/g+(l<c?6:0);break;case l:p=(c-r)/g+2;break;case c:p=(r-l)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=S,e}getRGB(e,i=De.workingColorSpace){return De.workingToColorSpace(Bn.copy(this),i),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=pi){De.workingToColorSpace(Bn.copy(this),e);const i=Bn.r,r=Bn.g,l=Bn.b;return e!==pi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+i,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(_r),e.getHSL(dc);const r=Uh(_r.h,dc.h,i),l=Uh(_r.s,dc.s,i),c=Uh(_r.l,dc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new Le;Le.NAMES=Bx;class j1 extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const zi=new Y,Na=new Y,Hh=new Y,Ua=new Y,Js=new Y,js=new Y,hS=new Y,Gh=new Y,Vh=new Y,Xh=new Y,kh=new on,Wh=new on,qh=new on;class Bi{constructor(e=new Y,i=new Y,r=new Y){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),zi.subVectors(e,i),l.cross(zi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){zi.subVectors(l,i),Na.subVectors(r,i),Hh.subVectors(e,i);const d=zi.dot(zi),h=zi.dot(Na),p=zi.dot(Hh),m=Na.dot(Na),S=Na.dot(Hh),g=d*m-h*h;if(g===0)return c.set(0,0,0),null;const v=1/g,y=(m*p-h*S)*v,R=(d*S-h*p)*v;return c.set(1-y-R,R,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getInterpolation(e,i,r,l,c,d,h,p){return this.getBarycoord(e,i,r,l,Ua)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ua.x),p.addScaledVector(d,Ua.y),p.addScaledVector(h,Ua.z),p)}static getInterpolatedAttribute(e,i,r,l,c,d){return kh.setScalar(0),Wh.setScalar(0),qh.setScalar(0),kh.fromBufferAttribute(e,i),Wh.fromBufferAttribute(e,r),qh.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(kh,c.x),d.addScaledVector(Wh,c.y),d.addScaledVector(qh,c.z),d}static isFrontFacing(e,i,r,l){return zi.subVectors(r,i),Na.subVectors(e,i),zi.cross(Na).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),Na.subVectors(this.a,this.b),zi.cross(Na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Bi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,h;Js.subVectors(l,r),js.subVectors(c,r),Gh.subVectors(e,r);const p=Js.dot(Gh),m=js.dot(Gh);if(p<=0&&m<=0)return i.copy(r);Vh.subVectors(e,l);const S=Js.dot(Vh),g=js.dot(Vh);if(S>=0&&g<=S)return i.copy(l);const v=p*g-S*m;if(v<=0&&p>=0&&S<=0)return d=p/(p-S),i.copy(r).addScaledVector(Js,d);Xh.subVectors(e,c);const y=Js.dot(Xh),R=js.dot(Xh);if(R>=0&&y<=R)return i.copy(c);const U=y*m-p*R;if(U<=0&&m>=0&&R<=0)return h=m/(m-R),i.copy(r).addScaledVector(js,h);const M=S*R-y*g;if(M<=0&&g-S>=0&&y-R>=0)return hS.subVectors(c,l),h=(g-S)/(g-S+(y-R)),i.copy(l).addScaledVector(hS,h);const x=1/(M+U+v);return d=U*x,h=v*x,i.copy(r).addScaledVector(Js,d).addScaledVector(js,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zl{constructor(e=new Y(1/0,1/0,1/0),i=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Fi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Fi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Fi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Fi):Fi.fromBufferAttribute(c,d),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hc.copy(r.boundingBox)),hc.applyMatrix4(e.matrixWorld),this.union(hc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ml),pc.subVectors(this.max,Ml),$s.subVectors(e.a,Ml),to.subVectors(e.b,Ml),eo.subVectors(e.c,Ml),vr.subVectors(to,$s),Sr.subVectors(eo,to),Kr.subVectors($s,eo);let i=[0,-vr.z,vr.y,0,-Sr.z,Sr.y,0,-Kr.z,Kr.y,vr.z,0,-vr.x,Sr.z,0,-Sr.x,Kr.z,0,-Kr.x,-vr.y,vr.x,0,-Sr.y,Sr.x,0,-Kr.y,Kr.x,0];return!Yh(i,$s,to,eo,pc)||(i=[1,0,0,0,1,0,0,0,1],!Yh(i,$s,to,eo,pc))?!1:(mc.crossVectors(vr,Sr),i=[mc.x,mc.y,mc.z],Yh(i,$s,to,eo,pc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(La[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),La[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),La[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),La[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),La[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),La[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),La[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),La[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(La),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const La=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Fi=new Y,hc=new zl,$s=new Y,to=new Y,eo=new Y,vr=new Y,Sr=new Y,Kr=new Y,Ml=new Y,pc=new Y,mc=new Y,Qr=new Y;function Yh(o,e,i,r,l){for(let c=0,d=o.length-3;c<=d;c+=3){Qr.fromArray(o,c);const h=l.x*Math.abs(Qr.x)+l.y*Math.abs(Qr.y)+l.z*Math.abs(Qr.z),p=e.dot(Qr),m=i.dot(Qr),S=r.dot(Qr);if(Math.max(-Math.max(p,m,S),Math.min(p,m,S))>h)return!1}return!0}const xn=new Y,gc=new Oe;let $1=0;class Ha extends rs{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=L1,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)gc.fromBufferAttribute(this,i),gc.applyMatrix3(e),this.setXY(i,gc.x,gc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Sl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ti(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Sl(i,this.array)),i}setX(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Sl(i,this.array)),i}setY(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Sl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Sl(i,this.array)),i}setW(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),r=ti(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),r=ti(r,this.array),l=ti(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),r=ti(r,this.array),l=ti(l,this.array),c=ti(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Hx extends Ha{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Gx extends Ha{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class hn extends Ha{constructor(e,i,r){super(new Float32Array(e),i,r)}}const tT=new zl,yl=new Y,Zh=new Y;class Am{constructor(e=new Y,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):tT.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yl.subVectors(e,this.center);const i=yl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(yl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yl.copy(e.center).add(Zh)),this.expandByPoint(yl.copy(e.center).sub(Zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let eT=0;const Ci=new Je,Kh=new In,no=new Y,hi=new zl,El=new zl,Cn=new Y;class Zn extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eT++}),this.uuid=Il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(O1(e)?Gx:Hx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new fe().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,i,r){return Ci.makeTranslation(e,i,r),this.applyMatrix4(Ci),this}scale(e,i,r){return Ci.makeScale(e,i,r),this.applyMatrix4(Ci),this}lookAt(e){return Kh.lookAt(e),Kh.updateMatrix(),this.applyMatrix4(Kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new hn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];hi.setFromBufferAttribute(c),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Am);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];El.setFromBufferAttribute(h),this.morphTargetsRelative?(Cn.addVectors(hi.min,El.min),hi.expandByPoint(Cn),Cn.addVectors(hi.max,El.max),hi.expandByPoint(Cn)):(hi.expandByPoint(El.min),hi.expandByPoint(El.max))}hi.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)Cn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Cn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,S=h.count;m<S;m++)Cn.fromBufferAttribute(h,m),p&&(no.fromBufferAttribute(e,m),Cn.add(no)),l=Math.max(l,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new Ha(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const h=[],p=[];for(let E=0;E<r.count;E++)h[E]=new Y,p[E]=new Y;const m=new Y,S=new Y,g=new Y,v=new Oe,y=new Oe,R=new Oe,U=new Y,M=new Y;function x(E,C,F){m.fromBufferAttribute(r,E),S.fromBufferAttribute(r,C),g.fromBufferAttribute(r,F),v.fromBufferAttribute(c,E),y.fromBufferAttribute(c,C),R.fromBufferAttribute(c,F),S.sub(m),g.sub(m),y.sub(v),R.sub(v);const P=1/(y.x*R.y-R.x*y.y);isFinite(P)&&(U.copy(S).multiplyScalar(R.y).addScaledVector(g,-y.y).multiplyScalar(P),M.copy(g).multiplyScalar(y.x).addScaledVector(S,-R.x).multiplyScalar(P),h[E].add(U),h[C].add(U),h[F].add(U),p[E].add(M),p[C].add(M),p[F].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let E=0,C=I.length;E<C;++E){const F=I[E],P=F.start,H=F.count;for(let K=P,W=P+H;K<W;K+=3)x(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const k=new Y,D=new Y,L=new Y,w=new Y;function N(E){L.fromBufferAttribute(l,E),w.copy(L);const C=h[E];k.copy(C),k.sub(L.multiplyScalar(L.dot(C))).normalize(),D.crossVectors(w,C);const P=D.dot(p[E])<0?-1:1;d.setXYZW(E,k.x,k.y,k.z,P)}for(let E=0,C=I.length;E<C;++E){const F=I[E],P=F.start,H=F.count;for(let K=P,W=P+H;K<W;K+=3)N(e.getX(K+0)),N(e.getX(K+1)),N(e.getX(K+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Ha(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const l=new Y,c=new Y,d=new Y,h=new Y,p=new Y,m=new Y,S=new Y,g=new Y;if(e)for(let v=0,y=e.count;v<y;v+=3){const R=e.getX(v+0),U=e.getX(v+1),M=e.getX(v+2);l.fromBufferAttribute(i,R),c.fromBufferAttribute(i,U),d.fromBufferAttribute(i,M),S.subVectors(d,c),g.subVectors(l,c),S.cross(g),h.fromBufferAttribute(r,R),p.fromBufferAttribute(r,U),m.fromBufferAttribute(r,M),h.add(S),p.add(S),m.add(S),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(U,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),S.subVectors(d,c),g.subVectors(l,c),S.cross(g),r.setXYZ(v+0,S.x,S.y,S.z),r.setXYZ(v+1,S.x,S.y,S.z),r.setXYZ(v+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Cn.fromBufferAttribute(e,i),Cn.normalize(),e.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(h,p){const m=h.array,S=h.itemSize,g=h.normalized,v=new m.constructor(p.length*S);let y=0,R=0;for(let U=0,M=p.length;U<M;U++){h.isInterleavedBufferAttribute?y=p[U]*h.data.stride+h.offset:y=p[U]*S;for(let x=0;x<S;x++)v[R++]=m[y++]}return new Ha(v,S,g)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Zn,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let S=0,g=m.length;S<g;S++){const v=m[S],y=e(v,r);p.push(y)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],S=[];for(let g=0,v=m.length;g<v;g++){const y=m[g];S.push(y.toJSON(e.data))}S.length>0&&(l[p]=S,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const S=l[m];this.setAttribute(m,S.clone(i))}const c=e.morphAttributes;for(const m in c){const S=[],g=c[m];for(let v=0,y=g.length;v<y;v++)S.push(g[v].clone(i));this.morphAttributes[m]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,S=d.length;m<S;m++){const g=d[m];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qh=new Y,nT=new Y,iT=new fe;class yr{constructor(e=new Y(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Qh.subVectors(r,i).cross(nT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(Qh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||iT.getNormalMatrix(e),l=this.coplanarPoint(Qh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let aT=0;class Fl extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aT++}),this.uuid=Il(),this.name="",this.type="Material",this.blending=wl,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vx,this.blendDst=Sx,this.blendEquation=oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dh,this.stencilZFail=Dh,this.stencilZPass=Dh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){oe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new yr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Oe().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Oa=new Y,Jh=new Y,_c=new Y,vc=new Y;class rT{constructor(e=new Y,i=new Y(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Oa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Oa.copy(this.origin).addScaledVector(this.direction,i),Oa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Jh.copy(e).add(i).multiplyScalar(.5),_c.copy(i).sub(e).normalize(),vc.copy(this.origin).sub(Jh);const c=e.distanceTo(i)*.5,d=-this.direction.dot(_c),h=vc.dot(this.direction),p=-vc.dot(_c),m=vc.lengthSq(),S=Math.abs(1-d*d);let g,v,y,R;if(S>0)if(g=d*p-h,v=d*h-p,R=c*S,g>=0)if(v>=-R)if(v<=R){const U=1/S;g*=U,v*=U,y=g*(g+d*v+2*h)+v*(d*g+v+2*p)+m}else v=c,g=Math.max(0,-(d*v+h)),y=-g*g+v*(v+2*p)+m;else v=-c,g=Math.max(0,-(d*v+h)),y=-g*g+v*(v+2*p)+m;else v<=-R?(g=Math.max(0,-(-d*c+h)),v=g>0?-c:Math.min(Math.max(-c,-p),c),y=-g*g+v*(v+2*p)+m):v<=R?(g=0,v=Math.min(Math.max(-c,-p),c),y=v*(v+2*p)+m):(g=Math.max(0,-(d*c+h)),v=g>0?c:Math.min(Math.max(-c,-p),c),y=-g*g+v*(v+2*p)+m);else v=d>0?-c:c,g=Math.max(0,-(d*v+h)),y=-g*g+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Jh).addScaledVector(_c,v),y}intersectSphere(e,i){if(e.radius<0)return null;Oa.subVectors(e.center,this.origin);const r=Oa.dot(this.direction),l=Oa.dot(Oa)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,h,p;const m=1/this.direction.x,S=1/this.direction.y,g=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,l=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,l=(e.min.x-v.x)*m),S>=0?(c=(e.min.y-v.y)*S,d=(e.max.y-v.y)*S):(c=(e.max.y-v.y)*S,d=(e.min.y-v.y)*S),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),g>=0?(h=(e.min.z-v.z)*g,p=(e.max.z-v.z)*g):(h=(e.max.z-v.z)*g,p=(e.min.z-v.z)*g),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Oa)!==null}intersectTriangle(e,i,r,l,c){const d=this.origin,h=this.direction,p=h.x,m=h.y,S=h.z,g=e.x-d.x,v=e.y-d.y,y=e.z-d.z,R=i.x-d.x,U=i.y-d.y,M=i.z-d.z,x=r.x-d.x,I=r.y-d.y,k=r.z-d.z,D=Math.abs(p),L=Math.abs(m),w=Math.abs(S);let N,E,C,F,P,H,K,W,Z,B,G,rt;if(D>=L&&D>=w?(C=p,H=g,Z=R,rt=x,p>=0?(N=m,E=S,F=v,P=y,K=U,W=M,B=I,G=k):(N=S,E=m,F=y,P=v,K=M,W=U,B=k,G=I)):L>=w?(C=m,H=v,Z=U,rt=I,m>=0?(N=S,E=p,F=y,P=g,K=M,W=R,B=k,G=x):(N=p,E=S,F=g,P=y,K=R,W=M,B=x,G=k)):(C=S,H=y,Z=M,rt=k,S>=0?(N=p,E=m,F=g,P=v,K=R,W=U,B=x,G=I):(N=m,E=p,F=v,P=g,K=U,W=R,B=I,G=x)),C===0)return null;const nt=N/C,ct=E/C,gt=1/C,bt=F-nt*H,At=P-ct*H,V=K-nt*Z,mt=W-ct*Z,Ct=B-nt*rt,$=G-ct*rt,ht=Ct*mt-$*V,Tt=bt*$-At*Ct,Ft=V*At-mt*bt;if(l){if(ht<0||Tt<0||Ft<0)return null}else if((ht<0||Tt<0||Ft<0)&&(ht>0||Tt>0||Ft>0))return null;const vt=ht+Tt+Ft;if(vt===0)return null;const wt=gt*(ht*H+Tt*Z+Ft*rt);return(vt>0?wt<0:wt>0)?null:this.at(wt/vt,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class br extends Fl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=xx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pS=new Je,Jr=new rT,Sc=new Am,mS=new Y,xc=new Y,Mc=new Y,yc=new Y,jh=new Y,Ec=new Y,gS=new Y,Tc=new Y;class pn extends In{constructor(e=new Zn,i=new br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Ec.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const S=h[p],g=c[p];S!==0&&(jh.fromBufferAttribute(g,e),d?Ec.addScaledVector(jh,S):Ec.addScaledVector(jh.sub(i),S))}i.add(Ec)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Sc.copy(r.boundingSphere),Sc.applyMatrix4(c),Jr.copy(e.ray).recast(e.near),!(Sc.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Sc,mS)===null||Jr.origin.distanceToSquared(mS)>(e.far-e.near)**2))&&(pS.copy(c).invert(),Jr.copy(e.ray).applyMatrix4(pS),!(r.boundingBox!==null&&Jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Jr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,d=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,S=c.attributes.uv1,g=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,U=v.length;R<U;R++){const M=v[R],x=d[M.materialIndex],I=Math.max(M.start,y.start),k=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let D=I,L=k;D<L;D+=3){const w=h.getX(D),N=h.getX(D+1),E=h.getX(D+2);l=bc(this,x,e,r,m,S,g,w,N,E),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,y.start),U=Math.min(h.count,y.start+y.count);for(let M=R,x=U;M<x;M+=3){const I=h.getX(M),k=h.getX(M+1),D=h.getX(M+2);l=bc(this,d,e,r,m,S,g,I,k,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let R=0,U=v.length;R<U;R++){const M=v[R],x=d[M.materialIndex],I=Math.max(M.start,y.start),k=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let D=I,L=k;D<L;D+=3){const w=D,N=D+1,E=D+2;l=bc(this,x,e,r,m,S,g,w,N,E),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,y.start),U=Math.min(p.count,y.start+y.count);for(let M=R,x=U;M<x;M+=3){const I=M,k=M+1,D=M+2;l=bc(this,d,e,r,m,S,g,I,k,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function sT(o,e,i,r,l,c,d,h){let p;if(e.side===ei?p=r.intersectTriangle(d,c,l,!0,h):p=r.intersectTriangle(l,c,d,e.side===gi,h),p===null)return null;Tc.copy(h),Tc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Tc);return m<i.near||m>i.far?null:{distance:m,point:Tc.clone(),object:o}}function bc(o,e,i,r,l,c,d,h,p,m){o.getVertexPosition(h,xc),o.getVertexPosition(p,Mc),o.getVertexPosition(m,yc);const S=sT(o,e,i,r,xc,Mc,yc,gS);if(S){const g=new Y;Bi.getBarycoord(gS,xc,Mc,yc,g),l&&(S.uv=Bi.getInterpolatedAttribute(l,h,p,m,g,new Oe)),c&&(S.uv1=Bi.getInterpolatedAttribute(c,h,p,m,g,new Oe)),d&&(S.normal=Bi.getInterpolatedAttribute(d,h,p,m,g,new Y),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new Y,materialIndex:0};Bi.getNormal(xc,Mc,yc,v.normal),S.face=v,S.barycoord=g}return S}class oT extends Gn{constructor(e=null,i=1,r=1,l,c,d,h,p,m=Pn,S=Pn,g,v){super(null,d,h,p,m,S,l,c,g,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jr=new Am,lT=new Oe(.5,.5),Ac=new Y;class Rm{constructor(e=new yr,i=new yr,r=new yr,l=new yr,c=new yr,d=new yr){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=la,r=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],p=c[2],m=c[3],S=c[4],g=c[5],v=c[6],y=c[7],R=c[8],U=c[9],M=c[10],x=c[11],I=c[12],k=c[13],D=c[14],L=c[15];if(l[0].setComponents(m-d,y-S,x-R,L-I).normalize(),l[1].setComponents(m+d,y+S,x+R,L+I).normalize(),l[2].setComponents(m+h,y+g,x+U,L+k).normalize(),l[3].setComponents(m-h,y-g,x-U,L-k).normalize(),r)l[4].setComponents(p,v,M,D).normalize(),l[5].setComponents(m-p,y-v,x-M,L-D).normalize();else if(l[4].setComponents(m-p,y-v,x-M,L-D).normalize(),i===la)l[5].setComponents(m+p,y+v,x+M,L+D).normalize();else if(i===Ol)l[5].setComponents(p,v,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){jr.center.set(0,0,0);const i=lT.distanceTo(e.center);return jr.radius=.7071067811865476+i,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ac.x=l.normal.x>0?e.max.x:e.min.x,Ac.y=l.normal.y>0?e.max.y:e.min.y,Ac.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vx extends Gn{constructor(e=[],i=is,r,l,c,d,h,p,m,S){super(e,i,r,l,c,d,h,p,m,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pl extends Gn{constructor(e,i,r=fa,l,c,d,h=Pn,p=Pn,m,S=Ga,g=1){if(S!==Ga&&S!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:g};super(v,l,c,d,h,p,S,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class uT extends Pl{constructor(e,i=fa,r=is,l,c,d=Pn,h=Pn,p,m=Ga){const S={width:e,height:e,depth:1},g=[S,S,S,S,S,S];super(e,e,i,r,l,c,d,h,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Xx extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bl extends Zn{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],S=[],g=[];let v=0,y=0;R("z","y","x",-1,-1,r,i,e,d,c,0),R("z","y","x",1,-1,r,i,-e,d,c,1),R("x","z","y",1,1,e,r,i,l,d,2),R("x","z","y",1,-1,e,r,-i,l,d,3),R("x","y","z",1,-1,e,i,r,l,c,4),R("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new hn(m,3)),this.setAttribute("normal",new hn(S,3)),this.setAttribute("uv",new hn(g,2));function R(U,M,x,I,k,D,L,w,N,E,C){const F=D/N,P=L/E,H=D/2,K=L/2,W=w/2,Z=N+1,B=E+1;let G=0,rt=0;const nt=new Y;for(let ct=0;ct<B;ct++){const gt=ct*P-K;for(let bt=0;bt<Z;bt++){const At=bt*F-H;nt[U]=At*I,nt[M]=gt*k,nt[x]=W,m.push(nt.x,nt.y,nt.z),nt[U]=0,nt[M]=0,nt[x]=w>0?1:-1,S.push(nt.x,nt.y,nt.z),g.push(bt/N),g.push(1-ct/E),G+=1}}for(let ct=0;ct<E;ct++)for(let gt=0;gt<N;gt++){const bt=v+gt+Z*ct,At=v+gt+Z*(ct+1),V=v+(gt+1)+Z*(ct+1),mt=v+(gt+1)+Z*ct;p.push(bt,At,mt),p.push(At,V,mt),rt+=6}h.addGroup(y,rt,C),y+=rt,v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class pa extends Zn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,S=p+1,g=e/h,v=i/p,y=[],R=[],U=[],M=[];for(let x=0;x<S;x++){const I=x*v-d;for(let k=0;k<m;k++){const D=k*g-c;R.push(D,-I,0),U.push(0,0,1),M.push(k/h),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let I=0;I<h;I++){const k=I+m*x,D=I+m*(x+1),L=I+1+m*(x+1),w=I+1+m*x;y.push(k,D,w),y.push(D,L,w)}this.setIndex(y),this.setAttribute("position",new hn(R,3)),this.setAttribute("normal",new hn(U,3)),this.setAttribute("uv",new hn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.widthSegments,e.heightSegments)}}function mo(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];if(_S(l))l.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(_S(l[0])){const c=[];for(let d=0,h=l.length;d<h;d++)c[d]=l[d].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Yn(o){const e={};for(let i=0;i<o.length;i++){const r=mo(o[i]);for(const l in r)e[l]=r[l]}return e}function _S(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function cT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function kx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const fT={clone:mo,merge:Yn};var dT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ha extends Fl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dT,this.fragmentShader=hT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=cT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Le().setHex(l.value);break;case"v2":this.uniforms[r].value=new Oe().fromArray(l.value);break;case"v3":this.uniforms[r].value=new Y().fromArray(l.value);break;case"v4":this.uniforms[r].value=new on().fromArray(l.value);break;case"m3":this.uniforms[r].value=new fe().fromArray(l.value);break;case"m4":this.uniforms[r].value=new Je().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class pT extends ha{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class go extends Fl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kp,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mT extends Fl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=T1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gT extends Fl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Cm extends In{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=i}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class _T extends Cm{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const $h=new Je,vS=new Y,SS=new Y;class vT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rm,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera;vS.setFromMatrixPosition(e.matrixWorld),i.position.copy(vS),SS.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(SS),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(e,i,r,l){$h.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix($h,e.coordinateSystem,e.reversedDepth);const c=this._frameExtents,d=l?l.z/c.x:1,h=l?l.w/c.y:1,p=l?l.x/c.x:0,m=l?l.y/c.y:0;e.coordinateSystem===Ol||e.reversedDepth?i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,1,0,0,0,0,1):i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,.5,.5,0,0,0,1),i.multiply($h)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Rc=new Y,Cc=new Ie,ia=new Y;class Wx extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=la,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rc,Cc,ia),ia.x===1&&ia.y===1&&ia.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rc,Cc,ia.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Rc,Cc,ia),ia.x===1&&ia.y===1&&ia.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rc,Cc,ia.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xr=new Y,xS=new Oe,MS=new Oe;class wi extends Wx{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Qp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qp*2*Math.atan(Math.tan(Nh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,i){return this.getViewBounds(e,xS,MS),i.subVectors(MS,xS)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Nh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class wm extends Wx{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,h-=S*this.view.offsetY,p=h-S*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ST extends vT{constructor(){super(new wm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xT extends Cm{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new ST}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class MT extends Cm{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const io=-90,ao=1;class yT extends In{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new wi(io,ao,e,i);l.layers=this.layers,this.add(l);const c=new wi(io,ao,e,i);c.layers=this.layers,this.add(c);const d=new wi(io,ao,e,i);d.layers=this.layers,this.add(d);const h=new wi(io,ao,e,i);h.layers=this.layers,this.add(h);const p=new wi(io,ao,e,i);p.layers=this.layers,this.add(p);const m=new wi(io,ao,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,p]=i;for(const m of i)this.remove(m);if(e===la)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ol)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,p,m,S]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const U=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),r.texture.generateMipmaps=U,e.setRenderTarget(r,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(g,v,y),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class ET extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Im=class Im{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};Im.prototype.isMatrix2=!0;let yS=Im;function ES(o,e,i,r){const l=TT(r);switch(i){case Lx:return o*e;case Px:return o*e/l.components*l.byteLength;case xm:return o*e/l.components*l.byteLength;case as:return o*e*2/l.components*l.byteLength;case Mm:return o*e*2/l.components*l.byteLength;case Ox:return o*e*3/l.components*l.byteLength;case Hi:return o*e*4/l.components*l.byteLength;case ym:return o*e*4/l.components*l.byteLength;case Lc:case Oc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Pc:case Ic:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xp:case yp:return Math.max(o,16)*Math.max(e,8)/4;case Sp:case Mp:return Math.max(o,8)*Math.max(e,8)/2;case Ep:case Tp:case Ap:case Rp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case bp:case Bc:case Cp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case wp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Dp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Np:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Up:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Lp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Op:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Pp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ip:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case zp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Fp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Bp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Hp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Gp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Vp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Xp:case kp:case Wp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case qp:case Yp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Hc:case Zp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function TT(o){switch(o){case mi:case wx:return{byteLength:1,components:1};case Ul:case Dx:case da:return{byteLength:2,components:1};case vm:case Sm:return{byteLength:2,components:4};case fa:case _m:case oa:return{byteLength:4,components:1};case Nx:case Ux:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gm}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gm);function qx(){let o=null,e=!1,i=null,r=null;function l(c,d){r=o.requestAnimationFrame(l),i(c,d)}return{start:function(){e!==!0&&i!==null&&o!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function bT(o){const e=new WeakMap;function i(h,p){const m=h.array,S=h.usage,g=m.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,m,S),h.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,p,m){const S=p.array,g=p.updateRanges;if(o.bindBuffer(m,h),g.length===0)o.bufferSubData(m,0,S);else{g.sort((y,R)=>y.start-R.start);let v=0;for(let y=1;y<g.length;y++){const R=g[v],U=g[y];U.start<=R.start+R.count+1?R.count=Math.max(R.count,U.start+U.count-R.start):(++v,g[v]=U)}g.length=v+1;for(let y=0,R=g.length;y<R;y++){const U=g[y];o.bufferSubData(m,U.start*S.BYTES_PER_ELEMENT,S,U.start,U.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=e.get(h);(!S||S.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:d}}var AT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RT=`#ifdef USE_ALPHAHASH
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
#endif`,CT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UT=`#ifdef USE_AOMAP
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
#endif`,LT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OT=`#ifdef USE_BATCHING
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
#endif`,PT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,BT=`#ifdef USE_IRIDESCENCE
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
#endif`,HT=`#ifdef USE_BUMPMAP
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
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,YT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ZT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,KT=`#define PI 3.141592653589793
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
} // validated`,QT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,JT=`vec3 transformedNormal = objectNormal;
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
#endif`,jT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$T=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ib=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ab=`#ifdef USE_ENVMAP
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
#endif`,rb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sb=`#ifdef USE_ENVMAP
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
#endif`,ob=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
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
#endif`,ub=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,db=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hb=`#ifdef USE_GRADIENTMAP
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
}`,pb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_b=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vb=`#ifdef USE_ENVMAP
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
#endif`,Sb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eb=`PhysicalMaterial material;
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
#endif`,Tb=`uniform sampler2D dfgLUT;
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
}`,bb=`
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
#endif`,Ab=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,wb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Db=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ob=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ib=`#if defined( USE_POINTS_UV )
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
#endif`,zb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vb=`#ifdef USE_MORPHTARGETS
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
#endif`,Xb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kb=`#ifdef USE_NORMALMAP
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
#endif`,Qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fA=`float getShadowMask() {
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
}`,dA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hA=`#ifdef USE_SKINNING
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
#endif`,pA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mA=`#ifdef USE_SKINNING
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
#endif`,gA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_A=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xA=`#ifdef USE_TRANSMISSION
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
#endif`,MA=`#ifdef USE_TRANSMISSION
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
#endif`,yA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RA=`uniform sampler2D t2D;
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
}`,CA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,DA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UA=`#include <common>
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
}`,LA=`#if DEPTH_PACKING == 3200
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
}`,OA=`#define DISTANCE
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
}`,PA=`#define DISTANCE
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
}`,IA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FA=`uniform float scale;
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
}`,BA=`uniform vec3 diffuse;
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
}`,HA=`#include <common>
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
}`,GA=`uniform vec3 diffuse;
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
}`,VA=`#define LAMBERT
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
}`,XA=`#define LAMBERT
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
}`,kA=`#define MATCAP
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
}`,WA=`#define MATCAP
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
}`,qA=`#define NORMAL
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
}`,YA=`#define NORMAL
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
}`,ZA=`#define PHONG
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
}`,KA=`#define PHONG
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
}`,QA=`#define STANDARD
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
}`,JA=`#define STANDARD
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
}`,jA=`#define TOON
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
}`,$A=`#define TOON
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
}`,tR=`uniform float size;
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
}`,eR=`uniform vec3 diffuse;
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
}`,nR=`#include <common>
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
}`,iR=`uniform vec3 color;
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
}`,aR=`uniform float rotation;
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
}`,rR=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:AT,alphahash_pars_fragment:RT,alphamap_fragment:CT,alphamap_pars_fragment:wT,alphatest_fragment:DT,alphatest_pars_fragment:NT,aomap_fragment:UT,aomap_pars_fragment:LT,batching_pars_vertex:OT,batching_vertex:PT,begin_vertex:IT,beginnormal_vertex:zT,bsdfs:FT,iridescence_fragment:BT,bumpmap_pars_fragment:HT,clipping_planes_fragment:GT,clipping_planes_pars_fragment:VT,clipping_planes_pars_vertex:XT,clipping_planes_vertex:kT,color_fragment:WT,color_pars_fragment:qT,color_pars_vertex:YT,color_vertex:ZT,common:KT,cube_uv_reflection_fragment:QT,defaultnormal_vertex:JT,displacementmap_pars_vertex:jT,displacementmap_vertex:$T,emissivemap_fragment:tb,emissivemap_pars_fragment:eb,colorspace_fragment:nb,colorspace_pars_fragment:ib,envmap_fragment:ab,envmap_common_pars_fragment:rb,envmap_pars_fragment:sb,envmap_pars_vertex:ob,envmap_physical_pars_fragment:vb,envmap_vertex:lb,fog_vertex:ub,fog_pars_vertex:cb,fog_fragment:fb,fog_pars_fragment:db,gradientmap_pars_fragment:hb,lightmap_pars_fragment:pb,lights_lambert_fragment:mb,lights_lambert_pars_fragment:gb,lights_pars_begin:_b,lights_toon_fragment:Sb,lights_toon_pars_fragment:xb,lights_phong_fragment:Mb,lights_phong_pars_fragment:yb,lights_physical_fragment:Eb,lights_physical_pars_fragment:Tb,lights_fragment_begin:bb,lights_fragment_maps:Ab,lights_fragment_end:Rb,lightprobes_pars_fragment:Cb,logdepthbuf_fragment:wb,logdepthbuf_pars_fragment:Db,logdepthbuf_pars_vertex:Nb,logdepthbuf_vertex:Ub,map_fragment:Lb,map_pars_fragment:Ob,map_particle_fragment:Pb,map_particle_pars_fragment:Ib,metalnessmap_fragment:zb,metalnessmap_pars_fragment:Fb,morphinstance_vertex:Bb,morphcolor_vertex:Hb,morphnormal_vertex:Gb,morphtarget_pars_vertex:Vb,morphtarget_vertex:Xb,normal_fragment_begin:kb,normal_fragment_maps:Wb,normal_pars_fragment:qb,normal_pars_vertex:Yb,normal_vertex:Zb,normalmap_pars_fragment:Kb,clearcoat_normal_fragment_begin:Qb,clearcoat_normal_fragment_maps:Jb,clearcoat_pars_fragment:jb,iridescence_pars_fragment:$b,opaque_fragment:tA,packing:eA,premultiplied_alpha_fragment:nA,project_vertex:iA,dithering_fragment:aA,dithering_pars_fragment:rA,roughnessmap_fragment:sA,roughnessmap_pars_fragment:oA,shadowmap_pars_fragment:lA,shadowmap_pars_vertex:uA,shadowmap_vertex:cA,shadowmask_pars_fragment:fA,skinbase_vertex:dA,skinning_pars_vertex:hA,skinning_vertex:pA,skinnormal_vertex:mA,specularmap_fragment:gA,specularmap_pars_fragment:_A,tonemapping_fragment:vA,tonemapping_pars_fragment:SA,transmission_fragment:xA,transmission_pars_fragment:MA,uv_pars_fragment:yA,uv_pars_vertex:EA,uv_vertex:TA,worldpos_vertex:bA,background_vert:AA,background_frag:RA,backgroundCube_vert:CA,backgroundCube_frag:wA,cube_vert:DA,cube_frag:NA,depth_vert:UA,depth_frag:LA,distance_vert:OA,distance_frag:PA,equirect_vert:IA,equirect_frag:zA,linedashed_vert:FA,linedashed_frag:BA,meshbasic_vert:HA,meshbasic_frag:GA,meshlambert_vert:VA,meshlambert_frag:XA,meshmatcap_vert:kA,meshmatcap_frag:WA,meshnormal_vert:qA,meshnormal_frag:YA,meshphong_vert:ZA,meshphong_frag:KA,meshphysical_vert:QA,meshphysical_frag:JA,meshtoon_vert:jA,meshtoon_frag:$A,points_vert:tR,points_frag:eR,shadow_vert:nR,shadow_frag:iR,sprite_vert:aR,sprite_frag:rR},Gt={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},ra={basic:{uniforms:Yn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Yn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Yn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Yn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Yn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new Le(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Yn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Yn([Gt.points,Gt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Yn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Yn([Gt.common,Gt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Yn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Yn([Gt.sprite,Gt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:Yn([Gt.common,Gt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:Yn([Gt.lights,Gt.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};ra.physical={uniforms:Yn([ra.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const wc={r:0,b:0,g:0},sR=new Je,Yx=new fe;Yx.set(-1,0,0,0,1,0,0,0,1);function oR(o,e,i,r,l,c){const d=new Le(0);let h=l===!0?0:1,p,m,S=null,g=0,v=null;function y(I){let k=I.isScene===!0?I.background:null;if(k&&k.isTexture){const D=I.backgroundBlurriness>0;k=e.get(k,D)}return k}function R(I){let k=!1;const D=y(I);D===null?M(d,h):D&&D.isColor&&(M(D,1),k=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,c):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||k)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function U(I,k){const D=y(k);D&&(D.isCubeTexture||D.mapping===qc)?(m===void 0&&(m=new pn(new Bl(1,1,1),new ha({name:"BackgroundCubeMaterial",uniforms:mo(ra.backgroundCube.uniforms),vertexShader:ra.backgroundCube.vertexShader,fragmentShader:ra.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(L,w,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=D,m.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(sR.makeRotationFromEuler(k.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Yx),m.material.toneMapped=De.getTransfer(D.colorSpace)!==Ze,(S!==D||g!==D.version||v!==o.toneMapping)&&(m.material.needsUpdate=!0,S=D,g=D.version,v=o.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new pn(new pa(2,2),new ha({name:"BackgroundMaterial",uniforms:mo(ra.background.uniforms),vertexShader:ra.background.vertexShader,fragmentShader:ra.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,p.material.toneMapped=De.getTransfer(D.colorSpace)!==Ze,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(S!==D||g!==D.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,S=D,g=D.version,v=o.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null))}function M(I,k){I.getRGB(wc,kx(o)),i.buffers.color.setClear(wc.r,wc.g,wc.b,k,c)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(I,k=1){d.set(I),h=k,M(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,M(d,h)},render:R,addToRenderList:U,dispose:x}}function lR(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,d=!1;function h(P,H,K,W,Z){let B=!1;const G=g(P,W,K,H);c!==G&&(c=G,m(c.object)),B=y(P,W,K,Z),B&&R(P,W,K,Z),Z!==null&&e.update(Z,o.ELEMENT_ARRAY_BUFFER),(B||d)&&(d=!1,D(P,H,K,W),Z!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function p(){return o.createVertexArray()}function m(P){return o.bindVertexArray(P)}function S(P){return o.deleteVertexArray(P)}function g(P,H,K,W){const Z=W.wireframe===!0;let B=r[H.id];B===void 0&&(B={},r[H.id]=B);const G=P.isInstancedMesh===!0?P.id:0;let rt=B[G];rt===void 0&&(rt={},B[G]=rt);let nt=rt[K.id];nt===void 0&&(nt={},rt[K.id]=nt);let ct=nt[Z];return ct===void 0&&(ct=v(p()),nt[Z]=ct),ct}function v(P){const H=[],K=[],W=[];for(let Z=0;Z<i;Z++)H[Z]=0,K[Z]=0,W[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:W,object:P,attributes:{},index:null}}function y(P,H,K,W){const Z=c.attributes,B=H.attributes;let G=0;const rt=K.getAttributes();for(const nt in rt)if(rt[nt].location>=0){const gt=Z[nt];let bt=B[nt];if(bt===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(bt=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(bt=P.instanceColor)),gt===void 0||gt.attribute!==bt||bt&&gt.data!==bt.data)return!0;G++}return c.attributesNum!==G||c.index!==W}function R(P,H,K,W){const Z={},B=H.attributes;let G=0;const rt=K.getAttributes();for(const nt in rt)if(rt[nt].location>=0){let gt=B[nt];gt===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(gt=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(gt=P.instanceColor));const bt={};bt.attribute=gt,gt&&gt.data&&(bt.data=gt.data),Z[nt]=bt,G++}c.attributes=Z,c.attributesNum=G,c.index=W}function U(){const P=c.newAttributes;for(let H=0,K=P.length;H<K;H++)P[H]=0}function M(P){x(P,0)}function x(P,H){const K=c.newAttributes,W=c.enabledAttributes,Z=c.attributeDivisors;K[P]=1,W[P]===0&&(o.enableVertexAttribArray(P),W[P]=1),Z[P]!==H&&(o.vertexAttribDivisor(P,H),Z[P]=H)}function I(){const P=c.newAttributes,H=c.enabledAttributes;for(let K=0,W=H.length;K<W;K++)H[K]!==P[K]&&(o.disableVertexAttribArray(K),H[K]=0)}function k(P,H,K,W,Z,B,G){G===!0?o.vertexAttribIPointer(P,H,K,Z,B):o.vertexAttribPointer(P,H,K,W,Z,B)}function D(P,H,K,W){U();const Z=W.attributes,B=K.getAttributes(),G=H.defaultAttributeValues;for(const rt in B){const nt=B[rt];if(nt.location>=0){let ct=Z[rt];if(ct===void 0&&(rt==="instanceMatrix"&&P.instanceMatrix&&(ct=P.instanceMatrix),rt==="instanceColor"&&P.instanceColor&&(ct=P.instanceColor)),ct!==void 0){const gt=ct.normalized,bt=ct.itemSize,At=e.get(ct);if(At===void 0)continue;const V=At.buffer,mt=At.type,Ct=At.bytesPerElement,$=mt===o.INT||mt===o.UNSIGNED_INT||ct.gpuType===_m;if(ct.isInterleavedBufferAttribute){const ht=ct.data,Tt=ht.stride,Ft=ct.offset;if(ht.isInstancedInterleavedBuffer){for(let vt=0;vt<nt.locationSize;vt++)x(nt.location+vt,ht.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let vt=0;vt<nt.locationSize;vt++)M(nt.location+vt);o.bindBuffer(o.ARRAY_BUFFER,V);for(let vt=0;vt<nt.locationSize;vt++)k(nt.location+vt,bt/nt.locationSize,mt,gt,Tt*Ct,(Ft+bt/nt.locationSize*vt)*Ct,$)}else{if(ct.isInstancedBufferAttribute){for(let ht=0;ht<nt.locationSize;ht++)x(nt.location+ht,ct.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ht=0;ht<nt.locationSize;ht++)M(nt.location+ht);o.bindBuffer(o.ARRAY_BUFFER,V);for(let ht=0;ht<nt.locationSize;ht++)k(nt.location+ht,bt/nt.locationSize,mt,gt,bt*Ct,bt/nt.locationSize*ht*Ct,$)}}else if(G!==void 0){const gt=G[rt];if(gt!==void 0)switch(gt.length){case 2:o.vertexAttrib2fv(nt.location,gt);break;case 3:o.vertexAttrib3fv(nt.location,gt);break;case 4:o.vertexAttrib4fv(nt.location,gt);break;default:o.vertexAttrib1fv(nt.location,gt)}}}}I()}function L(){C();for(const P in r){const H=r[P];for(const K in H){const W=H[K];for(const Z in W){const B=W[Z];for(const G in B)S(B[G].object),delete B[G];delete W[Z]}}delete r[P]}}function w(P){if(r[P.id]===void 0)return;const H=r[P.id];for(const K in H){const W=H[K];for(const Z in W){const B=W[Z];for(const G in B)S(B[G].object),delete B[G];delete W[Z]}}delete r[P.id]}function N(P){for(const H in r){const K=r[H];for(const W in K){const Z=K[W];if(Z[P.id]===void 0)continue;const B=Z[P.id];for(const G in B)S(B[G].object),delete B[G];delete Z[P.id]}}}function E(P){for(const H in r){const K=r[H],W=P.isInstancedMesh===!0?P.id:0,Z=K[W];if(Z!==void 0){for(const B in Z){const G=Z[B];for(const rt in G)S(G[rt].object),delete G[rt];delete Z[B]}delete K[W],Object.keys(K).length===0&&delete r[H]}}}function C(){F(),d=!0,c!==l&&(c=l,m(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:C,resetDefaultState:F,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfObject:E,releaseStatesOfProgram:N,initAttributes:U,enableAttribute:M,disableUnusedAttributes:I}}function uR(o,e,i){let r;function l(p){r=p}function c(p,m){o.drawArrays(r,p,m),i.update(m,r,1)}function d(p,m,S){S!==0&&(o.drawArraysInstanced(r,p,m,S),i.update(m,r,S))}function h(p,m,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,S);let v=0;for(let y=0;y<S;y++)v+=m[y];i.update(v,r,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function cR(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(N){return!(N!==Hi&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(N){const E=N===da&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==mi&&N!==oa&&!E&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const S=p(m);S!==m&&(oe("WebGLRenderer:",m,"not supported, using",S,"instead."),m=S);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),k=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=o.getParameter(o.MAX_SAMPLES),w=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:R,maxTextureSize:U,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:I,maxVaryings:k,maxFragmentUniforms:D,maxSamples:L,samples:w}}function fR(o){const e=this;let i=null,r=0,l=!1,c=!1;const d=new yr,h=new fe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||r!==0||l;return l=v,r=g.length,y},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){i=S(g,v,0)},this.setState=function(g,v,y){const R=g.clippingPlanes,U=g.clipIntersection,M=g.clipShadows,x=o.get(g);if(!l||R===null||R.length===0||c&&!M)c?S(null):m();else{const I=c?0:r,k=I*4;let D=x.clippingState||null;p.value=D,D=S(R,v,k,y);for(let L=0;L!==k;++L)D[L]=i[L];x.clippingState=D,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(g,v,y,R){const U=g!==null?g.length:0;let M=null;if(U!==0){if(M=p.value,R!==!0||M===null){const x=y+U*4,I=v.matrixWorldInverse;h.getNormalMatrix(I),(M===null||M.length<x)&&(M=new Float32Array(x));for(let k=0,D=y;k!==U;++k,D+=4)d.copy(g[k]).applyMatrix4(I,h),d.normal.toArray(M,D),M[D+3]=d.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=U,e.numIntersection=0,M}}const lo=4,dR=6,hR=20,pR=256,Tl=new wm,TS=new Le;let tp=null,ep=0,np=0,ip=!1;const mR=new Y,$r=new Y;class bS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=mR}=c;tp=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),np=this._renderer.getActiveMipmapLevel(),ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=CS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=RS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(tp,ep,np),this._renderer.xr.enabled=ip,e.scissorTest=!1,ro(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===is||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tp=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),np=this._renderer.getActiveMipmapLevel(),ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:da,format:Hi,colorSpace:Gc,depthBuffer:!1},l=AS(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=AS(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gR(c)),this._blurMaterial=vR(c,e,i),this._ggxMaterial=_R(c,e,i)}return l}_compileMaterial(e){const i=new pn(new Zn,e);this._renderer.compile(i,Tl)}_sceneToCubeUV(e,i,r,l,c){const p=new wi(90,1,i,r),m=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(TS),g.toneMapping=ua,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pn(new Bl,new br({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const U=this._backgroundBox,M=U.material;let x=!1;const I=e.background;I?I.isColor&&(M.color.copy(I),e.background=null,x=!0):(M.color.copy(TS),x=!0);for(let k=0;k<6;k++){const D=k%3;D===0?(p.up.set(0,m[k],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+S[k],c.y,c.z)):D===1?(p.up.set(0,0,m[k]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+S[k],c.z)):(p.up.set(0,m[k],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+S[k]));const L=this._cubeSize;ro(l,D*L,k>2?L:0,L,L),g.setRenderTarget(l),x&&g.render(U,p),g.render(e,p)}g.toneMapping=y,g.autoClear=v,e.background=I}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===is||e.mapping===po;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=CS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=RS());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;ro(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,Tl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),g=Math.sqrt(m*m-S*S),v=m*1.25,y=g*v,{_lodMax:R}=this,U=this._sizeLods[r],M=3*U*(r>R-lo?r-R+lo:0),x=4*(this._cubeSize-U);p.envMap.value=e.texture,p.roughness.value=y,p.mipInt.value=R-i,ro(c,M,x,3*U,2*U),l.setRenderTarget(c),l.render(h,Tl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=R-r,ro(e,M,x,3*U,2*U),l.setRenderTarget(e),l.render(h,Tl)}_blur(e,i,r,l){const c=this._pingPongRenderTarget,d=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(e,c,i,r,d),this._blurPass(c,e,r,r,d)}_blurPass(e,i,r,l,c){const d=this._renderer,h=this._blurMaterial,p=this._lodMeshes[l];p.material=h;const m=h.uniforms;m.envMap.value=e.texture,m.sigma.value=c,m.mipInt.value=this._lodMax-r;const S=this._sizeLods[l],g=3*S*(l>this._lodMax-lo?l-this._lodMax+lo:0),v=4*(this._cubeSize-S);ro(i,g,v,3*S,2*S),d.setRenderTarget(i),d.render(p,Tl)}}function gR(o){const e=[],i=[];let r=o;const l=o-lo+1+dR;for(let c=0;c<l;c++){const d=Math.pow(2,r);e.push(d);const h=1/(d-2),p=-h,m=1+h,S=[p,p,m,p,m,m,p,p,m,m,p,m],g=6,v=6,y=3,R=new Float32Array(y*v*g),U=new Float32Array(y*v*g);for(let x=0;x<g;x++){const I=x%3*2/3-1,k=x>2?0:-1,D=[I,k,0,I+2/3,k,0,I+2/3,k+1,0,I,k,0,I+2/3,k+1,0,I,k+1,0];R.set(D,y*v*x);for(let L=0;L<v;L++){const w=S[L*2]*2-1,N=S[L*2+1]*2-1;x===0?$r.set(1,N,w):x===1?$r.set(-w,1,-N):x===2?$r.set(-w,N,1):x===3?$r.set(-1,N,-w):x===4?$r.set(-w,-1,N):$r.set(w,N,-1),$r.toArray(U,(x*v+L)*y)}}const M=new Zn;M.setAttribute("position",new Ha(R,y)),M.setAttribute("outputDirection",new Ha(U,y)),i.push(new pn(M,null)),r>lo&&r--}return{lodMeshes:i,sizeLods:e}}function AS(o,e,i){const r=new Gi(o,e,i);return r.texture.mapping=qc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ro(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function _R(o,e,i){return new ha({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function vR(o,e,i){return new ha({name:"SphericalGaussianBlur",defines:{SAMPLES:hR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function RS(){return new ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function CS(){return new ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Yc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Zx extends Gi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Vx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Bl(5,5,5),c=new ha({name:"CubemapFromEquirect",uniforms:mo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ei,blending:Fa});c.uniforms.tEquirect.value=i;const d=new pn(l,c),h=i.minFilter;return i.minFilter===es&&(i.minFilter=Hn),new yT(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}function SR(o){let e=new WeakMap,i=new WeakMap,r=null;function l(v,y=!1){return v==null?null:y?d(v):c(v)}function c(v){if(v&&v.isTexture){const y=v.mapping;if(y===Rh||y===Ch)if(e.has(v)){const R=e.get(v).texture;return h(R,v.mapping)}else{const R=v.image;if(R&&R.height>0){const U=new Zx(R.height);return U.fromEquirectangularTexture(o,v),e.set(v,U),v.addEventListener("dispose",m),h(U.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const y=v.mapping,R=y===Rh||y===Ch,U=y===is||y===po;if(R||U){let M=i.get(v);const x=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return r===null&&(r=new bS(o)),M=R?r.fromEquirectangular(v,M):r.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),M.texture;if(M!==void 0)return M.texture;{const I=v.image;return R&&I&&I.height>0||U&&I&&p(I)?(r===null&&(r=new bS(o)),M=R?r.fromEquirectangular(v):r.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),v.addEventListener("dispose",S),M.texture):null}}}return v}function h(v,y){return y===Rh?v.mapping=is:y===Ch&&(v.mapping=po),v}function p(v){let y=0;const R=6;for(let U=0;U<R;U++)v[U]!==void 0&&y++;return y===R}function m(v){const y=v.target;y.removeEventListener("dispose",m);const R=e.get(y);R!==void 0&&(e.delete(y),R.dispose())}function S(v){const y=v.target;y.removeEventListener("dispose",S);const R=i.get(y);R!==void 0&&(i.delete(y),R.dispose())}function g(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:g}}function xR(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&uo("WebGLRenderer: "+r+" extension not supported."),l}}}function MR(o,e,i,r){const l={},c=new WeakMap;function d(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const R in v.attributes)e.remove(v.attributes[R]);v.removeEventListener("dispose",d),delete l[v.id];const y=c.get(v);y&&(e.remove(y),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(g,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function p(g){const v=g.attributes;for(const y in v)e.update(v[y],o.ARRAY_BUFFER)}function m(g){const v=[],y=g.index,R=g.attributes.position;let U=0;if(R===void 0)return;if(y!==null){const I=y.array;U=y.version;for(let k=0,D=I.length;k<D;k+=3){const L=I[k+0],w=I[k+1],N=I[k+2];v.push(L,w,w,N,N,L)}}else{const I=R.array;U=R.version;for(let k=0,D=I.length/3-1;k<D;k+=3){const L=k+0,w=k+1,N=k+2;v.push(L,w,w,N,N,L)}}const M=new(R.count>=65535?Gx:Hx)(v,1);M.version=U;const x=c.get(g);x&&e.remove(x),c.set(g,M)}function S(g){const v=c.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&m(g)}else m(g);return c.get(g)}return{get:h,update:p,getWireframeAttribute:S}}function yR(o,e,i){let r;function l(g){r=g}let c,d;function h(g){c=g.type,d=g.bytesPerElement}function p(g,v){o.drawElements(r,v,c,g*d),i.update(v,r,1)}function m(g,v,y){y!==0&&(o.drawElementsInstanced(r,v,c,g*d,y),i.update(v,r,y))}function S(g,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,g,0,y);let U=0;for(let M=0;M<y;M++)U+=v[M];i.update(U,r,1)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=S}function ER(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:Fe("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function TR(o,e,i){const r=new WeakMap,l=new on;function c(d,h,p){const m=d.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=S!==void 0?S.length:0;let v=r.get(h);if(v===void 0||v.count!==g){let F=function(){E.dispose(),r.delete(h),h.removeEventListener("dispose",F)};var y=F;v!==void 0&&v.texture.dispose();const R=h.morphAttributes.position!==void 0,U=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],k=h.morphAttributes.color||[];let D=0;R===!0&&(D=1),U===!0&&(D=2),M===!0&&(D=3);let L=h.attributes.position.count*D,w=1;L>e.maxTextureSize&&(w=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const N=new Float32Array(L*w*4*g),E=new zx(N,L,w,g);E.type=oa,E.needsUpdate=!0;const C=D*4;for(let P=0;P<g;P++){const H=x[P],K=I[P],W=k[P],Z=L*w*4*P;for(let B=0;B<H.count;B++){const G=B*C;R===!0&&(l.fromBufferAttribute(H,B),N[Z+G+0]=l.x,N[Z+G+1]=l.y,N[Z+G+2]=l.z,N[Z+G+3]=0),U===!0&&(l.fromBufferAttribute(K,B),N[Z+G+4]=l.x,N[Z+G+5]=l.y,N[Z+G+6]=l.z,N[Z+G+7]=0),M===!0&&(l.fromBufferAttribute(W,B),N[Z+G+8]=l.x,N[Z+G+9]=l.y,N[Z+G+10]=l.z,N[Z+G+11]=W.itemSize===4?l.w:1)}}v={count:g,texture:E,size:new Oe(L,w)},r.set(h,v),h.addEventListener("dispose",F)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let M=0;M<m.length;M++)R+=m[M];const U=h.morphTargetsRelative?1:1-R;p.getUniforms().setValue(o,"morphTargetBaseInfluence",U),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function bR(o,e,i,r,l){let c=new WeakMap;function d(m){const S=l.render.frame,g=m.geometry,v=e.get(m,g);if(c.get(v)!==S&&(e.update(v),c.set(v,S)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==S&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),c.set(m,S))),m.isSkinnedMesh){const y=m.skeleton;c.get(y)!==S&&(y.update(),c.set(y,S))}return v}function h(){c=new WeakMap}function p(m){const S=m.target;S.removeEventListener("dispose",p),r.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:h}}const AR={[Mx]:"LINEAR_TONE_MAPPING",[yx]:"REINHARD_TONE_MAPPING",[Ex]:"CINEON_TONE_MAPPING",[Tx]:"ACES_FILMIC_TONE_MAPPING",[Ax]:"AGX_TONE_MAPPING",[Rx]:"NEUTRAL_TONE_MAPPING",[bx]:"CUSTOM_TONE_MAPPING"};function RR(o,e,i,r,l,c){const d=new Gi(e,i,{type:o,depthBuffer:l,stencilBuffer:c,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null;const m=new Zn;m.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new hn([0,2,0,0,2,0],2));const S=new pT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new pn(m,S),v=new wm(-1,1,1,-1,0,1);let y=null,R=null,U=!1,M,x=null,I=[],k=!1;this.setSize=function(D,L){d.setSize(D,L),h!==null&&h.setSize(D,L),p!==null&&p.setSize(D,L);for(let w=0;w<I.length;w++){const N=I[w];N.setSize&&N.setSize(D,L)}},this.setEffects=function(D){I=D,k=I.length>0&&I[0].isRenderPass===!0;const L=d.width,w=d.height;I.length>0&&h===null&&(h=new Gi(L,w,{type:da,depthBuffer:!1,stencilBuffer:!1}),p=new Gi(L,w,{type:da,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<I.length;N++){const E=I[N];E.setSize&&E.setSize(L,w)}},this.begin=function(D,L){if(U||D.toneMapping===ua&&I.length===0)return!1;if(x=L,L!==null){const w=L.width,N=L.height;(d.width!==w||d.height!==N)&&this.setSize(w,N)}return k===!1&&D.setRenderTarget(d),M=D.toneMapping,D.toneMapping=ua,!0},this.hasRenderPass=function(){return k},this.end=function(D,L){D.toneMapping=M,U=!0;let w=d,N=h;for(let E=0;E<I.length;E++){const C=I[E];C.enabled!==!1&&(C.render(D,N,w,L),C.needsSwap!==!1&&(w=N,N=N===h?p:h))}if(y!==D.outputColorSpace||R!==D.toneMapping){y=D.outputColorSpace,R=D.toneMapping,S.defines={},De.getTransfer(y)===Ze&&(S.defines.SRGB_TRANSFER="");const E=AR[R];E&&(S.defines[E]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=w.texture,D.setRenderTarget(x),D.render(g,v),x=null,U=!1},this.isCompositing=function(){return U},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),m.dispose(),S.dispose()}}const Kx=new Gn,Jp=new Pl(1,1),Qx=new zx,Jx=new k1,jx=new Vx,wS=[],DS=[],NS=new Float32Array(16),US=new Float32Array(9),LS=new Float32Array(4);function _o(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=wS[l];if(c===void 0&&(c=new Float32Array(l),wS[l]=c),e!==0){r.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(c,h)}return c}function En(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Tn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Zc(o,e){let i=DS[e];i===void 0&&(i=new Int32Array(e),DS[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function CR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function wR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2fv(this.addr,e),Tn(i,e)}}function DR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(En(i,e))return;o.uniform3fv(this.addr,e),Tn(i,e)}}function NR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4fv(this.addr,e),Tn(i,e)}}function UR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,r))return;LS.set(r),o.uniformMatrix2fv(this.addr,!1,LS),Tn(i,r)}}function LR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,r))return;US.set(r),o.uniformMatrix3fv(this.addr,!1,US),Tn(i,r)}}function OR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,r))return;NS.set(r),o.uniformMatrix4fv(this.addr,!1,NS),Tn(i,r)}}function PR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function IR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2iv(this.addr,e),Tn(i,e)}}function zR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;o.uniform3iv(this.addr,e),Tn(i,e)}}function FR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4iv(this.addr,e),Tn(i,e)}}function BR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function HR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2uiv(this.addr,e),Tn(i,e)}}function GR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;o.uniform3uiv(this.addr,e),Tn(i,e)}}function VR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4uiv(this.addr,e),Tn(i,e)}}function XR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Jp.compareFunction=i.isReversedDepthBuffer()?Tm:Em,c=Jp):c=Kx,i.setTexture2D(e||c,l)}function kR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Jx,l)}function WR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||jx,l)}function qR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Qx,l)}function YR(o){switch(o){case 5126:return CR;case 35664:return wR;case 35665:return DR;case 35666:return NR;case 35674:return UR;case 35675:return LR;case 35676:return OR;case 5124:case 35670:return PR;case 35667:case 35671:return IR;case 35668:case 35672:return zR;case 35669:case 35673:return FR;case 5125:return BR;case 36294:return HR;case 36295:return GR;case 36296:return VR;case 35678:case 36198:case 36298:case 36306:case 35682:return XR;case 35679:case 36299:case 36307:return kR;case 35680:case 36300:case 36308:case 36293:return WR;case 36289:case 36303:case 36311:case 36292:return qR}}function ZR(o,e){o.uniform1fv(this.addr,e)}function KR(o,e){const i=_o(e,this.size,2);o.uniform2fv(this.addr,i)}function QR(o,e){const i=_o(e,this.size,3);o.uniform3fv(this.addr,i)}function JR(o,e){const i=_o(e,this.size,4);o.uniform4fv(this.addr,i)}function jR(o,e){const i=_o(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function $R(o,e){const i=_o(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function t3(o,e){const i=_o(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function e3(o,e){o.uniform1iv(this.addr,e)}function n3(o,e){o.uniform2iv(this.addr,e)}function i3(o,e){o.uniform3iv(this.addr,e)}function a3(o,e){o.uniform4iv(this.addr,e)}function r3(o,e){o.uniform1uiv(this.addr,e)}function s3(o,e){o.uniform2uiv(this.addr,e)}function o3(o,e){o.uniform3uiv(this.addr,e)}function l3(o,e){o.uniform4uiv(this.addr,e)}function u3(o,e,i){const r=this.cache,l=e.length,c=Zc(i,l);En(r,c)||(o.uniform1iv(this.addr,c),Tn(r,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=Jp:d=Kx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,c[h])}function c3(o,e,i){const r=this.cache,l=e.length,c=Zc(i,l);En(r,c)||(o.uniform1iv(this.addr,c),Tn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Jx,c[d])}function f3(o,e,i){const r=this.cache,l=e.length,c=Zc(i,l);En(r,c)||(o.uniform1iv(this.addr,c),Tn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||jx,c[d])}function d3(o,e,i){const r=this.cache,l=e.length,c=Zc(i,l);En(r,c)||(o.uniform1iv(this.addr,c),Tn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Qx,c[d])}function h3(o){switch(o){case 5126:return ZR;case 35664:return KR;case 35665:return QR;case 35666:return JR;case 35674:return jR;case 35675:return $R;case 35676:return t3;case 5124:case 35670:return e3;case 35667:case 35671:return n3;case 35668:case 35672:return i3;case 35669:case 35673:return a3;case 5125:return r3;case 36294:return s3;case 36295:return o3;case 36296:return l3;case 35678:case 36198:case 36298:case 36306:case 35682:return u3;case 35679:case 36299:case 36307:return c3;case 35680:case 36300:case 36308:case 36293:return f3;case 36289:case 36303:case 36311:case 36292:return d3}}class p3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=YR(i.type)}}class m3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=h3(i.type)}}class g3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const ap=/(\w+)(\])?(\[|\.)?/g;function OS(o,e){o.seq.push(e),o.map[e.id]=e}function _3(o,e,i){const r=o.name,l=r.length;for(ap.lastIndex=0;;){const c=ap.exec(r),d=ap.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){OS(i,m===void 0?new p3(h,o,e):new m3(h,o,e));break}else{let g=i.map[h];g===void 0&&(g=new g3(h),OS(i,g)),i=g}}}class zc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=e.getActiveUniform(i,d),p=e.getUniformLocation(i,h.name);_3(h,p,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function PS(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const v3=37297;let S3=0;function x3(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const IS=new fe;function M3(o){De._getMatrix(IS,De.workingColorSpace,o);const e=`mat3( ${IS.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case Vc:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function zS(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+x3(o.getShaderSource(e),h)}else return c}function y3(o,e){const i=M3(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const E3={[Mx]:"Linear",[yx]:"Reinhard",[Ex]:"Cineon",[Tx]:"ACESFilmic",[Ax]:"AgX",[Rx]:"Neutral",[bx]:"Custom"};function T3(o,e){const i=E3[e];return i===void 0?(oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Dc=new Y;function b3(){De.getLuminanceCoefficients(Dc);const o=Dc.x.toFixed(4),e=Dc.y.toFixed(4),i=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cl).join(`
`)}function R3(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function C3(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Cl(o){return o!==""}function FS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function BS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w3=/^[ \t]*#include +<([\w\d./]+)>/gm;function jp(o){return o.replace(w3,N3)}const D3=new Map;function N3(o,e){let i=me[e];if(i===void 0){const r=D3.get(e);if(r!==void 0)i=me[r],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return jp(i)}const U3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function HS(o){return o.replace(U3,L3)}function L3(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function GS(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const O3={[Uc]:"SHADOWMAP_TYPE_PCF",[Rl]:"SHADOWMAP_TYPE_VSM"};function P3(o){return O3[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const I3={[is]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE",[qc]:"ENVMAP_TYPE_CUBE_UV"};function z3(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":I3[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const F3={[po]:"ENVMAP_MODE_REFRACTION"};function B3(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":F3[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const H3={[xx]:"ENVMAP_BLENDING_MULTIPLY",[M1]:"ENVMAP_BLENDING_MIX",[y1]:"ENVMAP_BLENDING_ADD"};function G3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":H3[o.combine]||"ENVMAP_BLENDING_NONE"}function V3(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function X3(o,e,i,r){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=P3(i),m=z3(i),S=B3(i),g=G3(i),v=V3(i),y=A3(i),R=R3(c),U=l.createProgram();let M,x,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Cl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Cl).join(`
`),x.length>0&&(x+=`
`)):(M=[GS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cl).join(`
`),x=[GS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+S:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ua?"#define TONE_MAPPING":"",i.toneMapping!==ua?me.tonemapping_pars_fragment:"",i.toneMapping!==ua?T3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,y3("linearToOutputTexel",i.outputColorSpace),b3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Cl).join(`
`)),d=jp(d),d=FS(d,i),d=BS(d,i),h=jp(h),h=FS(h,i),h=BS(h,i),d=HS(d),h=HS(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===tS?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===tS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const k=I+M+d,D=I+x+h,L=PS(l,l.VERTEX_SHADER,k),w=PS(l,l.FRAGMENT_SHADER,D);l.attachShader(U,L),l.attachShader(U,w),i.index0AttributeName!==void 0?l.bindAttribLocation(U,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(U,0,"position"),l.linkProgram(U);function N(P){if(o.debug.checkShaderErrors){const H=l.getProgramInfoLog(U)||"",K=l.getShaderInfoLog(L)||"",W=l.getShaderInfoLog(w)||"",Z=H.trim(),B=K.trim(),G=W.trim();let rt=!0,nt=!0;if(l.getProgramParameter(U,l.LINK_STATUS)===!1)if(rt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,U,L,w);else{const ct=zS(l,L,"vertex"),gt=zS(l,w,"fragment");Fe("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(U,l.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Z+`
`+ct+`
`+gt)}else Z!==""?oe("WebGLProgram: Program Info Log:",Z):(B===""||G==="")&&(nt=!1);nt&&(P.diagnostics={runnable:rt,programLog:Z,vertexShader:{log:B,prefix:M},fragmentShader:{log:G,prefix:x}})}l.deleteShader(L),l.deleteShader(w),E=new zc(l,U),C=C3(l,U)}let E;this.getUniforms=function(){return E===void 0&&N(this),E};let C;this.getAttributes=function(){return C===void 0&&N(this),C};let F=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=l.getProgramParameter(U,v3)),F},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(U),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=S3++,this.cacheKey=e,this.usedTimes=1,this.program=U,this.vertexShader=L,this.fragmentShader=w,this}let k3=0;class W3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new q3(e),i.set(e,r)),r}}class q3{constructor(e){this.id=k3++,this.code=e,this.usedTimes=0}}function Y3(o){return o===as||o===Bc||o===Hc}function Z3(o,e,i,r,l,c){const d=new Fx,h=new W3,p=new Set,m=[],S=new Map,g=r.logarithmicDepthBuffer;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(E){return p.add(E),E===0?"uv":`uv${E}`}function U(E,C,F,P,H,K){const W=P.fog,Z=H.geometry,B=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?P.environment:null,G=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,rt=e.get(E.envMap||B,G),nt=rt&&rt.mapping===qc?rt.image.height:null,ct=y[E.type];E.precision!==null&&(v=r.getMaxPrecision(E.precision),v!==E.precision&&oe("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const gt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,bt=gt!==void 0?gt.length:0;let At=0;Z.morphAttributes.position!==void 0&&(At=1),Z.morphAttributes.normal!==void 0&&(At=2),Z.morphAttributes.color!==void 0&&(At=3);let V,mt,Ct,$;if(ct){const Ce=ra[ct];V=Ce.vertexShader,mt=Ce.fragmentShader}else{V=E.vertexShader,mt=E.fragmentShader;const Ce=h.getVertexShaderStage(E),ue=h.getFragmentShaderStage(E);h.update(E,Ce,ue),Ct=Ce.id,$=ue.id}const ht=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),Ft=H.isInstancedMesh===!0,vt=H.isBatchedMesh===!0,wt=!!E.map,Xe=!!E.matcap,pe=!!rt,ge=!!E.aoMap,xe=!!E.lightMap,ee=!!E.bumpMap&&E.wireframe===!1,ie=!!E.normalMap,ke=!!E.displacementMap,mn=!!E.emissiveMap,ze=!!E.metalnessMap,nn=!!E.roughnessMap,J=E.anisotropy>0,rn=E.clearcoat>0,Pe=E.dispersion>0,O=E.retroreflectivity>0,T=E.iridescence>0,it=E.sheen>0,ut=E.transmission>0,pt=J&&!!E.anisotropyMap,Rt=rn&&!!E.clearcoatMap,Ut=rn&&!!E.clearcoatNormalMap,_t=rn&&!!E.clearcoatRoughnessMap,yt=T&&!!E.iridescenceMap,Nt=T&&!!E.iridescenceThicknessMap,jt=it&&!!E.sheenColorMap,zt=it&&!!E.sheenRoughnessMap,It=!!E.specularMap,kt=!!E.specularColorMap,ne=!!E.specularIntensityMap,le=ut&&!!E.transmissionMap,Q=ut&&!!E.thicknessMap,Dt=!!E.gradientMap,Mt=!!E.alphaMap,Lt=E.alphaTest>0,Xt=!!E.alphaHash,Et=!!E.extensions;let Jt=ua;E.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Jt=o.toneMapping);const Vt={shaderID:ct,shaderType:E.type,shaderName:E.name,vertexShader:V,fragmentShader:mt,defines:E.defines,customVertexShaderID:Ct,customFragmentShaderID:$,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:vt,batchingColor:vt&&H._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&H.instanceColor!==null,instancingMorph:Ft&&H.morphTexture!==null,outputColorSpace:ht===null?o.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:De.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:wt,matcap:Xe,envMap:pe,envMapMode:pe&&rt.mapping,envMapCubeUVHeight:nt,aoMap:ge,lightMap:xe,bumpMap:ee,normalMap:ie,displacementMap:ke,emissiveMap:mn,normalMapObjectSpace:ie&&E.normalMapType===b1,normalMapTangentSpace:ie&&E.normalMapType===Kp,packedNormalMap:ie&&E.normalMapType===Kp&&Y3(E.normalMap.format),metalnessMap:ze,roughnessMap:nn,anisotropy:J,anisotropyMap:pt,clearcoat:rn,clearcoatMap:Rt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:_t,dispersion:Pe,retroreflection:O,iridescence:T,iridescenceMap:yt,iridescenceThicknessMap:Nt,sheen:it,sheenColorMap:jt,sheenRoughnessMap:zt,specularMap:It,specularColorMap:kt,specularIntensityMap:ne,transmission:ut,transmissionMap:le,thicknessMap:Q,gradientMap:Dt,opaque:E.transparent===!1&&E.blending===wl&&E.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Lt,alphaHash:Xt,combine:E.combine,mapUv:wt&&R(E.map.channel),aoMapUv:ge&&R(E.aoMap.channel),lightMapUv:xe&&R(E.lightMap.channel),bumpMapUv:ee&&R(E.bumpMap.channel),normalMapUv:ie&&R(E.normalMap.channel),displacementMapUv:ke&&R(E.displacementMap.channel),emissiveMapUv:mn&&R(E.emissiveMap.channel),metalnessMapUv:ze&&R(E.metalnessMap.channel),roughnessMapUv:nn&&R(E.roughnessMap.channel),anisotropyMapUv:pt&&R(E.anisotropyMap.channel),clearcoatMapUv:Rt&&R(E.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&R(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&R(E.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&R(E.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&R(E.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&R(E.sheenColorMap.channel),sheenRoughnessMapUv:zt&&R(E.sheenRoughnessMap.channel),specularMapUv:It&&R(E.specularMap.channel),specularColorMapUv:kt&&R(E.specularColorMap.channel),specularIntensityMapUv:ne&&R(E.specularIntensityMap.channel),transmissionMapUv:le&&R(E.transmissionMap.channel),thicknessMapUv:Q&&R(E.thicknessMap.channel),alphaMapUv:Mt&&R(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ie||J),vertexNormals:!!Z.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(wt||Mt),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Z.attributes.normal===void 0&&ie===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Tt,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:At,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Jt,decodeVideoTexture:wt&&E.map.isVideoTexture===!0&&De.getTransfer(E.map.colorSpace)===Ze,decodeVideoTextureEmissive:mn&&E.emissiveMap.isVideoTexture===!0&&De.getTransfer(E.emissiveMap.colorSpace)===Ze,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ia,flipSided:E.side===ei,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Et&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&E.extensions.multiDraw===!0||vt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Vt.vertexUv1s=p.has(1),Vt.vertexUv2s=p.has(2),Vt.vertexUv3s=p.has(3),p.clear(),Vt}function M(E){const C=[];if(E.shaderID?C.push(E.shaderID):(C.push(E.customVertexShaderID),C.push(E.customFragmentShaderID)),E.defines!==void 0)for(const F in E.defines)C.push(F),C.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(x(C,E),I(C,E),C.push(o.outputColorSpace)),C.push(E.customProgramCacheKey),C.join()}function x(E,C){E.push(C.precision),E.push(C.outputColorSpace),E.push(C.envMapMode),E.push(C.envMapCubeUVHeight),E.push(C.mapUv),E.push(C.alphaMapUv),E.push(C.lightMapUv),E.push(C.aoMapUv),E.push(C.bumpMapUv),E.push(C.normalMapUv),E.push(C.displacementMapUv),E.push(C.emissiveMapUv),E.push(C.metalnessMapUv),E.push(C.roughnessMapUv),E.push(C.anisotropyMapUv),E.push(C.clearcoatMapUv),E.push(C.clearcoatNormalMapUv),E.push(C.clearcoatRoughnessMapUv),E.push(C.iridescenceMapUv),E.push(C.iridescenceThicknessMapUv),E.push(C.sheenColorMapUv),E.push(C.sheenRoughnessMapUv),E.push(C.specularMapUv),E.push(C.specularColorMapUv),E.push(C.specularIntensityMapUv),E.push(C.transmissionMapUv),E.push(C.thicknessMapUv),E.push(C.combine),E.push(C.fogExp2),E.push(C.sizeAttenuation),E.push(C.morphTargetsCount),E.push(C.morphAttributeCount),E.push(C.numSunLights),E.push(C.numDirLights),E.push(C.numPointLights),E.push(C.numSpotLights),E.push(C.numSpotLightMaps),E.push(C.numHemiLights),E.push(C.numRectAreaLights),E.push(C.numSunLightShadows),E.push(C.numDirLightShadows),E.push(C.numPointLightShadows),E.push(C.numSpotLightShadows),E.push(C.numSpotLightShadowsWithMaps),E.push(C.numLightProbes),E.push(C.shadowMapType),E.push(C.toneMapping),E.push(C.numClippingPlanes),E.push(C.numClipIntersection),E.push(C.depthPacking)}function I(E,C){d.disableAll(),C.instancing&&d.enable(0),C.instancingColor&&d.enable(1),C.instancingMorph&&d.enable(2),C.matcap&&d.enable(3),C.envMap&&d.enable(4),C.normalMapObjectSpace&&d.enable(5),C.normalMapTangentSpace&&d.enable(6),C.clearcoat&&d.enable(7),C.iridescence&&d.enable(8),C.alphaTest&&d.enable(9),C.vertexColors&&d.enable(10),C.vertexAlphas&&d.enable(11),C.vertexUv1s&&d.enable(12),C.vertexUv2s&&d.enable(13),C.vertexUv3s&&d.enable(14),C.vertexTangents&&d.enable(15),C.anisotropy&&d.enable(16),C.alphaHash&&d.enable(17),C.batching&&d.enable(18),C.dispersion&&d.enable(19),C.retroreflection&&d.enable(24),C.batchingColor&&d.enable(20),C.gradientMap&&d.enable(21),C.packedNormalMap&&d.enable(22),C.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),C.numLightProbeGrids>0&&d.enable(22),C.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function k(E){const C=y[E.type];let F;if(C){const P=ra[C];F=fT.clone(P.uniforms)}else F=E.uniforms;return F}function D(E,C){let F=S.get(C);return F!==void 0?++F.usedTimes:(F=new X3(o,C,E,l),m.push(F),S.set(C,F)),F}function L(E){if(--E.usedTimes===0){const C=m.indexOf(E);m[C]=m[m.length-1],m.pop(),S.delete(E.cacheKey),E.destroy()}}function w(E){h.remove(E)}function N(){h.dispose()}return{getParameters:U,getProgramCacheKey:M,getUniforms:k,acquireProgram:D,releaseProgram:L,releaseShaderCache:w,programs:m,dispose:N}}function K3(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,p){o.get(d)[h]=p}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function Q3(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function VS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function XS(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function h(v,y,R,U,M,x){let I=o[e];return I===void 0?(I={id:v.id,object:v,geometry:y,material:R,materialVariant:d(v),groupOrder:U,renderOrder:v.renderOrder,z:M,group:x},o[e]=I):(I.id=v.id,I.object=v,I.geometry=y,I.material=R,I.materialVariant=d(v),I.groupOrder=U,I.renderOrder=v.renderOrder,I.z=M,I.group=x),e++,I}function p(v,y,R,U,M,x,I){I.reversedDepth===!0&&(M=-M);const k=h(v,y,R,U,M,x);R.transmission>0?r.push(k):R.transparent===!0?l.push(k):i.push(k)}function m(v,y,R,U,M,x){const I=h(v,y,R,U,M,x);R.transmission>0?r.unshift(I):R.transparent===!0?l.unshift(I):i.unshift(I)}function S(v,y){i.length>1&&i.sort(v||Q3),r.length>1&&r.sort(y||VS),l.length>1&&l.sort(y||VS)}function g(){for(let v=e,y=o.length;v<y;v++){const R=o[v];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:p,unshift:m,finish:g,sort:S}}function J3(){let o=new WeakMap;function e(r,l){const c=o.get(r);let d;return c===void 0?(d=new XS,o.set(r,[d])):l>=c.length?(d=new XS,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function j3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new Y,color:new Le};break;case"SpotLight":i={position:new Y,direction:new Y,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Y,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Y,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return o[e.id]=i,i}}}function $3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let tC=0;function eC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function nC(o){const e=new j3,i=$3(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Y);const l=new Y,c=new Je,d=new Je;function h(m){let S=0,g=0,v=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let y=0,R=0,U=0,M=0,x=0,I=0,k=0,D=0,L=0,w=0,N=0,E=0,C=0,F=0;m.sort(eC);for(let H=0,K=m.length;H<K;H++){const W=m[H],Z=W.color,B=W.intensity,G=W.distance;let rt=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===as?rt=W.shadow.map.texture:rt=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)S+=Z.r*B,g+=Z.g*B,v+=Z.b*B;else if(W.isLightProbe){for(let nt=0;nt<9;nt++)r.probe[nt].addScaledVector(W.sh.coefficients[nt],B);F++}else if(W.isSunLight){const nt=e.get(W);if(nt.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const ct=W.shadow,gt=i.get(W);gt.shadowIntensity=ct.intensity,gt.shadowBias=ct.bias,gt.shadowNormalBias=ct.normalBias,gt.shadowRadius=ct.radius,gt.shadowMapSize.copy(ct.mapSize).multiply(ct.getFrameExtents()),r.sunShadow[R]=gt,r.sunShadowMap[R]=rt;const bt=ct.getViewportCount();for(let At=0;At<bt;At++)r.sunShadowMatrix[U+At]=ct.getMatrix(At),r.sunShadowCascade[U+At]=ct._cascadeData[At];U+=bt,R++}r.sun[y]=nt,y++}else if(W.isDirectionalLight){const nt=e.get(W);if(nt.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const ct=W.shadow,gt=i.get(W);gt.shadowIntensity=ct.intensity,gt.shadowBias=ct.bias,gt.shadowNormalBias=ct.normalBias,gt.shadowRadius=ct.radius,gt.shadowMapSize=ct.mapSize,r.directionalShadow[M]=gt,r.directionalShadowMap[M]=rt,r.directionalShadowMatrix[M]=W.shadow.matrix,L++}r.directional[M]=nt,M++}else if(W.isSpotLight){const nt=e.get(W);nt.position.setFromMatrixPosition(W.matrixWorld),nt.color.copy(Z).multiplyScalar(B),nt.distance=G,nt.coneCos=Math.cos(W.angle),nt.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),nt.decay=W.decay,r.spot[I]=nt;const ct=W.shadow;if(W.map&&(r.spotLightMap[E]=W.map,E++,ct.updateMatrices(W),W.castShadow&&C++),r.spotLightMatrix[I]=ct.matrix,W.castShadow){const gt=i.get(W);gt.shadowIntensity=ct.intensity,gt.shadowBias=ct.bias,gt.shadowNormalBias=ct.normalBias,gt.shadowRadius=ct.radius,gt.shadowMapSize=ct.mapSize,r.spotShadow[I]=gt,r.spotShadowMap[I]=rt,N++}I++}else if(W.isRectAreaLight){const nt=e.get(W);nt.color.copy(Z).multiplyScalar(B),nt.halfWidth.set(W.width*.5,0,0),nt.halfHeight.set(0,W.height*.5,0),r.rectArea[k]=nt,k++}else if(W.isPointLight){const nt=e.get(W);if(nt.color.copy(W.color).multiplyScalar(W.intensity),nt.distance=W.distance,nt.decay=W.decay,W.castShadow){const ct=W.shadow,gt=i.get(W);gt.shadowIntensity=ct.intensity,gt.shadowBias=ct.bias,gt.shadowNormalBias=ct.normalBias,gt.shadowRadius=ct.radius,gt.shadowMapSize=ct.mapSize,gt.shadowCameraNear=ct.camera.near,gt.shadowCameraFar=ct.camera.far,r.pointShadow[x]=gt,r.pointShadowMap[x]=rt,r.pointShadowMatrix[x]=W.shadow.matrix,w++}r.point[x]=nt,x++}else if(W.isHemisphereLight){const nt=e.get(W);nt.skyColor.copy(W.color).multiplyScalar(B),nt.groundColor.copy(W.groundColor).multiplyScalar(B),r.hemi[D]=nt,D++}}k>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Gt.LTC_FLOAT_1,r.rectAreaLTC2=Gt.LTC_FLOAT_2):(r.rectAreaLTC1=Gt.LTC_HALF_1,r.rectAreaLTC2=Gt.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=g,r.ambient[2]=v;const P=r.hash;(P.sunLength!==y||P.directionalLength!==M||P.pointLength!==x||P.spotLength!==I||P.rectAreaLength!==k||P.hemiLength!==D||P.numSunShadows!==R||P.numDirectionalShadows!==L||P.numPointShadows!==w||P.numSpotShadows!==N||P.numSpotMaps!==E||P.numLightProbes!==F)&&(r.sun.length=y,r.directional.length=M,r.spot.length=I,r.rectArea.length=k,r.point.length=x,r.hemi.length=D,r.sunShadow.length=R,r.sunShadowMap.length=R,r.sunShadowMatrix.length=U,r.sunShadowCascade.length=U,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.directionalShadowMatrix.length=L,r.pointShadow.length=w,r.pointShadowMap.length=w,r.pointShadowMatrix.length=w,r.spotShadow.length=N,r.spotShadowMap.length=N,r.spotLightMatrix.length=N+E-C,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=F,P.sunLength=y,P.directionalLength=M,P.pointLength=x,P.spotLength=I,P.rectAreaLength=k,P.hemiLength=D,P.numSunShadows=R,P.numDirectionalShadows=L,P.numPointShadows=w,P.numSpotShadows=N,P.numSpotMaps=E,P.numLightProbes=F,r.version=tC++)}function p(m,S){let g=0,v=0,y=0,R=0,U=0,M=0;const x=S.matrixWorldInverse;for(let I=0,k=m.length;I<k;I++){const D=m[I];if(D.isSunLight){const L=r.sun[g];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(x),g++}else if(D.isDirectionalLight){const L=r.directional[v];L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(x),v++}else if(D.isSpotLight){const L=r.spot[R];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(x),R++}else if(D.isRectAreaLight){const L=r.rectArea[U];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(x),d.identity(),c.copy(D.matrixWorld),c.premultiply(x),d.extractRotation(c),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),U++}else if(D.isPointLight){const L=r.point[y];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(x),y++}else if(D.isHemisphereLight){const L=r.hemi[M];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(x),M++}}}return{setup:h,setupView:p,state:r}}function kS(o){const e=new nC(o),i=[],r=[],l=[];function c(v){g.camera=v,i.length=0,r.length=0,l.length=0}function d(v){i.push(v)}function h(v){r.push(v)}function p(v){l.push(v)}function m(){e.setup(i)}function S(v){e.setupView(i,v)}const g={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:g,setupLights:m,setupLightsView:S,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function iC(o){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new kS(o),e.set(l,[h])):c>=d.length?(h=new kS(o),d.push(h)):h=d[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const aC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rC=`uniform sampler2D shadow_pass;
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
}`,sC=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],oC=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],WS=new Je,bl=new Y,rp=new Y;function lC(o,e,i){let r=new Rm;const l=new Oe,c=new Oe,d=new on,h=new mT,p=new gT,m={},S=i.maxTextureSize,g={[gi]:ei,[ei]:gi,[Ia]:Ia},v=new ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:aC,fragmentShader:rC}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const R=new Zn;R.setAttribute("position",new Ha(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new pn(R,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let x=this.type;this.render=function(w,N,E){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||w.length===0)return;this.type===n1&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Uc);const C=o.getRenderTarget(),F=o.getActiveCubeFace(),P=o.getActiveMipmapLevel(),H=o.state;H.setBlending(Fa),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const K=x!==this.type;K&&N.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(Z=>Z.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,Z=w.length;W<Z;W++){const B=w[W],G=B.shadow;if(G===void 0){oe("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const rt=G.getFrameExtents();l.multiply(rt),c.copy(G.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/rt.x),l.x=c.x*rt.x,G.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/rt.y),l.y=c.y*rt.y,G.mapSize.y=c.y));const nt=o.state.buffers.depth.getReversed();if(G.camera._reversedDepth=nt,G.map===null||K===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Rl){if(B.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Gi(l.x,l.y,{format:as,type:da,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new Pl(l.x,l.y,oa),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=Ga,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn}else B.isPointLight?(G.map=new Zx(l.x),G.map.depthTexture=new uT(l.x,fa)):(G.map=new Gi(l.x,l.y),G.map.depthTexture=new Pl(l.x,l.y,fa)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=Ga,this.type===Uc?(G.map.depthTexture.compareFunction=nt?Tm:Em,G.map.depthTexture.minFilter=Hn,G.map.depthTexture.magFilter=Hn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==l.x||G.map.height!==l.y)&&G.map.setSize(l.x,l.y);const ct=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();B.isPointLight!==!0&&G.updateMatrices(B,E);for(let gt=0;gt<ct;gt++){const bt=G.getCamera(gt);if(B.isPointLight){const At=G.camera,V=G.matrix,mt=B.distance||At.far;mt!==At.far&&(At.far=mt,At.updateProjectionMatrix()),bl.setFromMatrixPosition(B.matrixWorld),At.position.copy(bl),rp.copy(At.position),rp.add(sC[gt]),At.up.copy(oC[gt]),At.lookAt(rp),At.updateMatrixWorld(),V.makeTranslation(-bl.x,-bl.y,-bl.z),WS.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),G._frustum.setFromProjectionMatrix(WS,At.coordinateSystem,At.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,gt),o.clear();else{gt===0&&(o.setRenderTarget(G.map),o.clear());const At=G.getViewport(gt);d.set(c.x*At.x,c.y*At.y,c.x*At.z,c.y*At.w),H.viewport(d)}r=G.getFrustum(gt),D(N,E,bt,B,this.type)}G.isPointLightShadow!==!0&&this.type===Rl&&I(G,E),G.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(C,F,P)};function I(w,N){const E=e.update(U);v.defines.VSM_SAMPLES!==w.blurSamples&&(v.defines.VSM_SAMPLES=w.blurSamples,y.defines.VSM_SAMPLES=w.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),w.mapPass===null?w.mapPass=new Gi(l.x,l.y,{format:as,type:da}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),v.uniforms.shadow_pass.value=w.map.depthTexture,v.uniforms.resolution.value.set(w.map.width,w.map.height),v.uniforms.radius.value=w.radius,o.setRenderTarget(w.mapPass),o.clear(),o.renderBufferDirect(N,null,E,v,U,null),y.uniforms.shadow_pass.value=w.mapPass.texture,y.uniforms.resolution.value.set(w.map.width,w.map.height),y.uniforms.radius.value=w.radius,o.setRenderTarget(w.map),o.clear(),o.renderBufferDirect(N,null,E,y,U,null)}function k(w,N,E,C){let F=null;const P=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)F=P;else if(F=E.isPointLight===!0?p:h,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const H=F.uuid,K=N.uuid;let W=m[H];W===void 0&&(W={},m[H]=W);let Z=W[K];Z===void 0&&(Z=F.clone(),W[K]=Z,N.addEventListener("dispose",L)),F=Z}if(F.visible=N.visible,F.wireframe=N.wireframe,C===Rl?F.side=N.shadowSide!==null?N.shadowSide:N.side:F.side=N.shadowSide!==null?N.shadowSide:g[N.side],F.alphaMap=N.alphaMap,F.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,F.map=N.map,F.clipShadows=N.clipShadows,F.clippingPlanes=N.clippingPlanes,F.clipIntersection=N.clipIntersection,F.displacementMap=N.displacementMap,F.displacementScale=N.displacementScale,F.displacementBias=N.displacementBias,F.wireframeLinewidth=N.wireframeLinewidth,F.linewidth=N.linewidth,E.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const H=o.properties.get(F);H.light=E}return F}function D(w,N,E,C,F){if(w.visible===!1)return;if(w.layers.test(N.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&F===Rl)&&(!w.frustumCulled||w.intersectsFrustum(r))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);const K=e.update(w),W=w.material;if(Array.isArray(W)){const Z=K.groups;for(let B=0,G=Z.length;B<G;B++){const rt=Z[B],nt=W[rt.materialIndex];if(nt&&nt.visible){const ct=k(w,nt,C,F);w.onBeforeShadow(o,w,N,E,K,ct,rt),o.renderBufferDirect(E,null,K,ct,w,rt),w.onAfterShadow(o,w,N,E,K,ct,rt)}}}else if(W.visible){const Z=k(w,W,C,F);w.onBeforeShadow(o,w,N,E,K,Z,null),o.renderBufferDirect(E,null,K,Z,w,null),w.onAfterShadow(o,w,N,E,K,Z,null)}}const H=w.children;for(let K=0,W=H.length;K<W;K++)D(H[K],N,E,C,F)}function L(w){w.target.removeEventListener("dispose",L);for(const E in m){const C=m[E],F=w.target.uuid;F in C&&(C[F].dispose(),delete C[F])}}}function uC(o,e){function i(){let Q=!1;const Dt=new on;let Mt=null;const Lt=new on(0,0,0,0);return{setMask:function(Xt){Mt!==Xt&&!Q&&(o.colorMask(Xt,Xt,Xt,Xt),Mt=Xt)},setLocked:function(Xt){Q=Xt},setClear:function(Xt,Et,Jt,Vt,Ce){Ce===!0&&(Xt*=Vt,Et*=Vt,Jt*=Vt),Dt.set(Xt,Et,Jt,Vt),Lt.equals(Dt)===!1&&(o.clearColor(Xt,Et,Jt,Vt),Lt.copy(Dt))},reset:function(){Q=!1,Mt=null,Lt.set(-1,0,0,0)}}}function r(){let Q=!1,Dt=!1,Mt=null,Lt=null,Xt=null;return{setReversed:function(Et){if(Dt!==Et){const Jt=e.get("EXT_clip_control");Et?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Dt=Et;const Vt=Xt;Xt=null,this.setClear(Vt)}},getReversed:function(){return Dt},setTest:function(Et){Et?ht(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(Et){Mt!==Et&&!Q&&(o.depthMask(Et),Mt=Et)},setFunc:function(Et){if(Dt&&(Et=z1[Et]),Lt!==Et){switch(Et){case cp:o.depthFunc(o.NEVER);break;case fp:o.depthFunc(o.ALWAYS);break;case dp:o.depthFunc(o.LESS);break;case Nl:o.depthFunc(o.LEQUAL);break;case hp:o.depthFunc(o.EQUAL);break;case pp:o.depthFunc(o.GEQUAL);break;case mp:o.depthFunc(o.GREATER);break;case gp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Lt=Et}},setLocked:function(Et){Q=Et},setClear:function(Et){Xt!==Et&&(Xt=Et,Dt&&(Et=1-Et),o.clearDepth(Et))},reset:function(){Q=!1,Mt=null,Lt=null,Xt=null,Dt=!1}}}function l(){let Q=!1,Dt=null,Mt=null,Lt=null,Xt=null,Et=null,Jt=null,Vt=null,Ce=null;return{setTest:function(ue){Q||(ue?ht(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(ue){Dt!==ue&&!Q&&(o.stencilMask(ue),Dt=ue)},setFunc:function(ue,ni,_i){(Mt!==ue||Lt!==ni||Xt!==_i)&&(o.stencilFunc(ue,ni,_i),Mt=ue,Lt=ni,Xt=_i)},setOp:function(ue,ni,_i){(Et!==ue||Jt!==ni||Vt!==_i)&&(o.stencilOp(ue,ni,_i),Et=ue,Jt=ni,Vt=_i)},setLocked:function(ue){Q=ue},setClear:function(ue){Ce!==ue&&(o.clearStencil(ue),Ce=ue)},reset:function(){Q=!1,Dt=null,Mt=null,Lt=null,Xt=null,Et=null,Jt=null,Vt=null,Ce=null}}}const c=new i,d=new r,h=new l,p=new WeakMap,m=new WeakMap;let S={},g={},v={},y=new WeakMap,R=[],U=null,M=!1,x=null,I=null,k=null,D=null,L=null,w=null,N=null,E=new Le(0,0,0),C=0,F=!1,P=null,H=null,K=null,W=null,Z=null;const B=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,rt=0;const nt=o.getParameter(o.VERSION);nt.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(nt)[1]),G=rt>=1):nt.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),G=rt>=2);let ct=null,gt={};const bt=o.getParameter(o.SCISSOR_BOX),At=o.getParameter(o.VIEWPORT),V=new on().fromArray(bt),mt=new on().fromArray(At);function Ct(Q,Dt,Mt,Lt){const Xt=new Uint8Array(4),Et=o.createTexture();o.bindTexture(Q,Et),o.texParameteri(Q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<Mt;Jt++)Q===o.TEXTURE_3D||Q===o.TEXTURE_2D_ARRAY?o.texImage3D(Dt,0,o.RGBA,1,1,Lt,0,o.RGBA,o.UNSIGNED_BYTE,Xt):o.texImage2D(Dt+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Xt);return Et}const $={};$[o.TEXTURE_2D]=Ct(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=Ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=Ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=Ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ht(o.DEPTH_TEST),d.setFunc(Nl),ee(!1),ie(Qv),ht(o.CULL_FACE),ge(Fa);function ht(Q){S[Q]!==!0&&(o.enable(Q),S[Q]=!0)}function Tt(Q){S[Q]!==!1&&(o.disable(Q),S[Q]=!1)}function Ft(Q,Dt){return v[Q]!==Dt?(o.bindFramebuffer(Q,Dt),v[Q]=Dt,Q===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Dt),Q===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Dt),!0):!1}function vt(Q,Dt){let Mt=R,Lt=!1;if(Q){Mt=y.get(Dt),Mt===void 0&&(Mt=[],y.set(Dt,Mt));const Xt=Q.textures;if(Mt.length!==Xt.length||Mt[0]!==o.COLOR_ATTACHMENT0){for(let Et=0,Jt=Xt.length;Et<Jt;Et++)Mt[Et]=o.COLOR_ATTACHMENT0+Et;Mt.length=Xt.length,Lt=!0}}else Mt[0]!==o.BACK&&(Mt[0]=o.BACK,Lt=!0);Lt&&o.drawBuffers(Mt)}function wt(Q){return U!==Q?(o.useProgram(Q),U=Q,!0):!1}const Xe={[oo]:o.FUNC_ADD,[a1]:o.FUNC_SUBTRACT,[r1]:o.FUNC_REVERSE_SUBTRACT};Xe[s1]=o.MIN,Xe[o1]=o.MAX;const pe={[l1]:o.ZERO,[u1]:o.ONE,[c1]:o.SRC_COLOR,[vx]:o.SRC_ALPHA,[g1]:o.SRC_ALPHA_SATURATE,[p1]:o.DST_COLOR,[d1]:o.DST_ALPHA,[f1]:o.ONE_MINUS_SRC_COLOR,[Sx]:o.ONE_MINUS_SRC_ALPHA,[m1]:o.ONE_MINUS_DST_COLOR,[h1]:o.ONE_MINUS_DST_ALPHA,[_1]:o.CONSTANT_COLOR,[v1]:o.ONE_MINUS_CONSTANT_COLOR,[S1]:o.CONSTANT_ALPHA,[x1]:o.ONE_MINUS_CONSTANT_ALPHA};function ge(Q,Dt,Mt,Lt,Xt,Et,Jt,Vt,Ce,ue){if(Q===Fa){M===!0&&(Tt(o.BLEND),M=!1);return}if(M===!1&&(ht(o.BLEND),M=!0),Q!==i1){if(Q!==x||ue!==F){if((I!==oo||L!==oo)&&(o.blendEquation(o.FUNC_ADD),I=oo,L=oo),ue)switch(Q){case wl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Jv:o.blendFunc(o.ONE,o.ONE);break;case jv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case $v:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Fe("WebGLState: Invalid blending: ",Q);break}else switch(Q){case wl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Jv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case jv:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $v:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",Q);break}k=null,D=null,w=null,N=null,E.set(0,0,0),C=0,x=Q,F=ue}return}Xt=Xt||Dt,Et=Et||Mt,Jt=Jt||Lt,(Dt!==I||Xt!==L)&&(o.blendEquationSeparate(Xe[Dt],Xe[Xt]),I=Dt,L=Xt),(Mt!==k||Lt!==D||Et!==w||Jt!==N)&&(o.blendFuncSeparate(pe[Mt],pe[Lt],pe[Et],pe[Jt]),k=Mt,D=Lt,w=Et,N=Jt),(Vt.equals(E)===!1||Ce!==C)&&(o.blendColor(Vt.r,Vt.g,Vt.b,Ce),E.copy(Vt),C=Ce),x=Q,F=!1}function xe(Q,Dt){Q.side===Ia?Tt(o.CULL_FACE):ht(o.CULL_FACE);let Mt=Q.side===ei;Dt&&(Mt=!Mt),ee(Mt),Q.blending===wl&&Q.transparent===!1?ge(Fa):ge(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),d.setFunc(Q.depthFunc),d.setTest(Q.depthTest),d.setMask(Q.depthWrite),c.setMask(Q.colorWrite);const Lt=Q.stencilWrite;h.setTest(Lt),Lt&&(h.setMask(Q.stencilWriteMask),h.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),h.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),mn(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?ht(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ee(Q){P!==Q&&(Q?o.frontFace(o.CW):o.frontFace(o.CCW),P=Q)}function ie(Q){Q!==t1?(ht(o.CULL_FACE),Q!==H&&(Q===Qv?o.cullFace(o.BACK):Q===e1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),H=Q}function ke(Q){Q!==K&&(G&&o.lineWidth(Q),K=Q)}function mn(Q,Dt,Mt){Q?(ht(o.POLYGON_OFFSET_FILL),(W!==Dt||Z!==Mt)&&(W=Dt,Z=Mt,d.getReversed()&&(Dt=-Dt),o.polygonOffset(Dt,Mt))):Tt(o.POLYGON_OFFSET_FILL)}function ze(Q){Q?ht(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function nn(Q){Q===void 0&&(Q=o.TEXTURE0+B-1),ct!==Q&&(o.activeTexture(Q),ct=Q)}function J(Q,Dt,Mt){Mt===void 0&&(ct===null?Mt=o.TEXTURE0+B-1:Mt=ct);let Lt=gt[Mt];Lt===void 0&&(Lt={type:void 0,texture:void 0},gt[Mt]=Lt),(Lt.type!==Q||Lt.texture!==Dt)&&(ct!==Mt&&(o.activeTexture(Mt),ct=Mt),o.bindTexture(Q,Dt||$[Q]),Lt.type=Q,Lt.texture=Dt)}function rn(){const Q=gt[ct];Q!==void 0&&Q.type!==void 0&&(o.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function Pe(){try{o.compressedTexImage2D(...arguments)}catch(Q){Fe("WebGLState:",Q)}}function O(){try{o.compressedTexImage3D(...arguments)}catch(Q){Fe("WebGLState:",Q)}}function T(){try{o.texSubImage2D(...arguments)}catch(Q){Fe("WebGLState:",Q)}}function it(){try{o.texSubImage3D(...arguments)}catch(Q){Fe("WebGLState:",Q)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(Q){Fe("WebGLState:",Q)}}function pt(){try{o.compressedTexSubImage3D(...arguments)}catch(Q){Fe("WebGLState:",Q)}}function Rt(){try{o.texStorage2D(...arguments)}catch(Q){Fe("WebGLState:",Q)}}function Ut(){try{o.texStorage3D(...arguments)}catch(Q){Fe("WebGLState:",Q)}}function _t(){try{o.texImage2D(...arguments)}catch(Q){Fe("WebGLState:",Q)}}function yt(){try{o.texImage3D(...arguments)}catch(Q){Fe("WebGLState:",Q)}}function Nt(Q){return g[Q]!==void 0?g[Q]:o.getParameter(Q)}function jt(Q,Dt){g[Q]!==Dt&&(o.pixelStorei(Q,Dt),g[Q]=Dt)}function zt(Q){V.equals(Q)===!1&&(o.scissor(Q.x,Q.y,Q.z,Q.w),V.copy(Q))}function It(Q){mt.equals(Q)===!1&&(o.viewport(Q.x,Q.y,Q.z,Q.w),mt.copy(Q))}function kt(Q,Dt){let Mt=m.get(Dt);Mt===void 0&&(Mt=new WeakMap,m.set(Dt,Mt));let Lt=Mt.get(Q);Lt===void 0&&(Lt=o.getUniformBlockIndex(Dt,Q.name),Mt.set(Q,Lt))}function ne(Q,Dt){const Lt=m.get(Dt).get(Q);p.get(Dt)!==Lt&&(o.uniformBlockBinding(Dt,Lt,Q.__bindingPointIndex),p.set(Dt,Lt))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},g={},ct=null,gt={},v={},y=new WeakMap,R=[],U=null,M=!1,x=null,I=null,k=null,D=null,L=null,w=null,N=null,E=new Le(0,0,0),C=0,F=!1,P=null,H=null,K=null,W=null,Z=null,V.set(0,0,o.canvas.width,o.canvas.height),mt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ht,disable:Tt,bindFramebuffer:Ft,drawBuffers:vt,useProgram:wt,setBlending:ge,setMaterial:xe,setFlipSided:ee,setCullFace:ie,setLineWidth:ke,setPolygonOffset:mn,setScissorTest:ze,activeTexture:nn,bindTexture:J,unbindTexture:rn,compressedTexImage2D:Pe,compressedTexImage3D:O,texImage2D:_t,texImage3D:yt,pixelStorei:jt,getParameter:Nt,updateUBOMapping:kt,uniformBlockBinding:ne,texStorage2D:Rt,texStorage3D:Ut,texSubImage2D:T,texSubImage3D:it,compressedTexSubImage2D:ut,compressedTexSubImage3D:pt,scissor:zt,viewport:It,reset:le}}function cC(o,e,i,r,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Oe,S=new WeakMap,g=new Set;let v;const y=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(O,T){return R?new OffscreenCanvas(O,T):Xc("canvas")}function M(O,T,it){let ut=1;const pt=Pe(O);if((pt.width>it||pt.height>it)&&(ut=it/Math.max(pt.width,pt.height)),ut<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Rt=Math.floor(ut*pt.width),Ut=Math.floor(ut*pt.height);v===void 0&&(v=U(Rt,Ut));const _t=T?U(Rt,Ut):v;return _t.width=Rt,_t.height=Ut,_t.getContext("2d").drawImage(O,0,0,Rt,Ut),oe("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+Rt+"x"+Ut+")."),_t}else return"data"in O&&oe("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),O;return O}function x(O){return O.generateMipmaps}function I(O){o.generateMipmap(O)}function k(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(O,T,it,ut,pt,Rt=!1){if(O!==null){if(o[O]!==void 0)return o[O];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Ut;ut&&(Ut=e.get("EXT_texture_norm16"),Ut||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _t=T;if(T===o.RED&&(it===o.FLOAT&&(_t=o.R32F),it===o.HALF_FLOAT&&(_t=o.R16F),it===o.UNSIGNED_BYTE&&(_t=o.R8),it===o.UNSIGNED_SHORT&&Ut&&(_t=Ut.R16_EXT),it===o.SHORT&&Ut&&(_t=Ut.R16_SNORM_EXT)),T===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(_t=o.R8UI),it===o.UNSIGNED_SHORT&&(_t=o.R16UI),it===o.UNSIGNED_INT&&(_t=o.R32UI),it===o.BYTE&&(_t=o.R8I),it===o.SHORT&&(_t=o.R16I),it===o.INT&&(_t=o.R32I)),T===o.RG&&(it===o.FLOAT&&(_t=o.RG32F),it===o.HALF_FLOAT&&(_t=o.RG16F),it===o.UNSIGNED_BYTE&&(_t=o.RG8),it===o.UNSIGNED_SHORT&&Ut&&(_t=Ut.RG16_EXT),it===o.SHORT&&Ut&&(_t=Ut.RG16_SNORM_EXT)),T===o.RG_INTEGER&&(it===o.UNSIGNED_BYTE&&(_t=o.RG8UI),it===o.UNSIGNED_SHORT&&(_t=o.RG16UI),it===o.UNSIGNED_INT&&(_t=o.RG32UI),it===o.BYTE&&(_t=o.RG8I),it===o.SHORT&&(_t=o.RG16I),it===o.INT&&(_t=o.RG32I)),T===o.RGB_INTEGER&&(it===o.UNSIGNED_BYTE&&(_t=o.RGB8UI),it===o.UNSIGNED_SHORT&&(_t=o.RGB16UI),it===o.UNSIGNED_INT&&(_t=o.RGB32UI),it===o.BYTE&&(_t=o.RGB8I),it===o.SHORT&&(_t=o.RGB16I),it===o.INT&&(_t=o.RGB32I)),T===o.RGBA_INTEGER&&(it===o.UNSIGNED_BYTE&&(_t=o.RGBA8UI),it===o.UNSIGNED_SHORT&&(_t=o.RGBA16UI),it===o.UNSIGNED_INT&&(_t=o.RGBA32UI),it===o.BYTE&&(_t=o.RGBA8I),it===o.SHORT&&(_t=o.RGBA16I),it===o.INT&&(_t=o.RGBA32I)),T===o.RGB&&(it===o.UNSIGNED_SHORT&&Ut&&(_t=Ut.RGB16_EXT),it===o.SHORT&&Ut&&(_t=Ut.RGB16_SNORM_EXT),it===o.UNSIGNED_INT_5_9_9_9_REV&&(_t=o.RGB9_E5),it===o.UNSIGNED_INT_10F_11F_11F_REV&&(_t=o.R11F_G11F_B10F)),T===o.RGBA){const yt=Rt?Vc:De.getTransfer(pt);it===o.FLOAT&&(_t=o.RGBA32F),it===o.HALF_FLOAT&&(_t=o.RGBA16F),it===o.UNSIGNED_BYTE&&(_t=yt===Ze?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT&&Ut&&(_t=Ut.RGBA16_EXT),it===o.SHORT&&Ut&&(_t=Ut.RGBA16_SNORM_EXT),it===o.UNSIGNED_SHORT_4_4_4_4&&(_t=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(_t=o.RGB5_A1)}return(_t===o.R16F||_t===o.R32F||_t===o.RG16F||_t===o.RG32F||_t===o.RGBA16F||_t===o.RGBA32F)&&e.get("EXT_color_buffer_float"),_t}function L(O,T){let it;return O?T===null||T===fa||T===Ll?it=o.DEPTH24_STENCIL8:T===oa?it=o.DEPTH32F_STENCIL8:T===Ul&&(it=o.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===fa||T===Ll?it=o.DEPTH_COMPONENT24:T===oa?it=o.DEPTH_COMPONENT32F:T===Ul&&(it=o.DEPTH_COMPONENT16),it}function w(O,T){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==Pn&&O.minFilter!==Hn?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function N(O){const T=O.target;T.removeEventListener("dispose",N),C(T),T.isVideoTexture&&S.delete(T),T.isHTMLTexture&&g.delete(T)}function E(O){const T=O.target;T.removeEventListener("dispose",E),P(T)}function C(O){const T=r.get(O);if(T.__webglInit===void 0)return;const it=O.source,ut=y.get(it);if(ut){const pt=ut[T.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&F(O),Object.keys(ut).length===0&&y.delete(it)}r.remove(O)}function F(O){const T=r.get(O);o.deleteTexture(T.__webglTexture);const it=O.source,ut=y.get(it);delete ut[T.__cacheKey],d.memory.textures--}function P(O){const T=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(T.__webglFramebuffer[ut]))for(let pt=0;pt<T.__webglFramebuffer[ut].length;pt++)o.deleteFramebuffer(T.__webglFramebuffer[ut][pt]);else o.deleteFramebuffer(T.__webglFramebuffer[ut]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ut])}else{if(Array.isArray(T.__webglFramebuffer))for(let ut=0;ut<T.__webglFramebuffer.length;ut++)o.deleteFramebuffer(T.__webglFramebuffer[ut]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ut=0;ut<T.__webglColorRenderbuffer.length;ut++)T.__webglColorRenderbuffer[ut]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ut]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const it=O.textures;for(let ut=0,pt=it.length;ut<pt;ut++){const Rt=r.get(it[ut]);Rt.__webglTexture&&(o.deleteTexture(Rt.__webglTexture),d.memory.textures--),r.remove(it[ut])}r.remove(O)}let H=0;function K(){H=0}function W(){return H}function Z(O){H=O}function B(){const O=H;return O>=l.maxTextures&&oe("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+l.maxTextures),H+=1,O}function G(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function rt(O,T){const it=r.get(O);if(O.isVideoTexture&&J(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&it.__version!==O.version){const ut=O.image;if(ut===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(it,O,T);return}}else O.isExternalTexture&&(it.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+T)}function nt(O,T){const it=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&it.__version!==O.version){Tt(it,O,T);return}else O.isExternalTexture&&(it.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+T)}function ct(O,T){const it=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&it.__version!==O.version){Tt(it,O,T);return}i.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+T)}function gt(O,T){const it=r.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&it.__version!==O.version){Ft(it,O,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+T)}const bt={[_p]:o.REPEAT,[za]:o.CLAMP_TO_EDGE,[vp]:o.MIRRORED_REPEAT},At={[Pn]:o.NEAREST,[E1]:o.NEAREST_MIPMAP_NEAREST,[lc]:o.NEAREST_MIPMAP_LINEAR,[Hn]:o.LINEAR,[wh]:o.LINEAR_MIPMAP_NEAREST,[es]:o.LINEAR_MIPMAP_LINEAR},V={[R1]:o.NEVER,[U1]:o.ALWAYS,[C1]:o.LESS,[Em]:o.LEQUAL,[w1]:o.EQUAL,[Tm]:o.GEQUAL,[D1]:o.GREATER,[N1]:o.NOTEQUAL};function mt(O,T){if(T.type===oa&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Hn||T.magFilter===wh||T.magFilter===lc||T.magFilter===es||T.minFilter===Hn||T.minFilter===wh||T.minFilter===lc||T.minFilter===es)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,bt[T.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,bt[T.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,bt[T.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,At[T.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,At[T.minFilter]),T.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,V[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Pn||T.minFilter!==lc&&T.minFilter!==es||T.type===oa&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const it=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ct(O,T){let it=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",N));const ut=T.source;let pt=y.get(ut);pt===void 0&&(pt={},y.set(ut,pt));const Rt=G(T);if(Rt!==O.__cacheKey){pt[Rt]===void 0&&(pt[Rt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,it=!0),pt[Rt].usedTimes++;const Ut=pt[O.__cacheKey];Ut!==void 0&&(pt[O.__cacheKey].usedTimes--,Ut.usedTimes===0&&F(T)),O.__cacheKey=Rt,O.__webglTexture=pt[Rt].texture}return it}function $(O,T,it){return Math.floor(Math.floor(O/it)/T)}function ht(O,T,it,ut){const Rt=O.updateRanges;if(Rt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,it,ut,T.data);else{Rt.sort((jt,zt)=>jt.start-zt.start);let Ut=0;for(let jt=1;jt<Rt.length;jt++){const zt=Rt[Ut],It=Rt[jt],kt=zt.start+zt.count,ne=$(It.start,T.width,4),le=$(zt.start,T.width,4);It.start<=kt+1&&ne===le&&$(It.start+It.count-1,T.width,4)===ne?zt.count=Math.max(zt.count,It.start+It.count-zt.start):(++Ut,Rt[Ut]=It)}Rt.length=Ut+1;const _t=i.getParameter(o.UNPACK_ROW_LENGTH),yt=i.getParameter(o.UNPACK_SKIP_PIXELS),Nt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let jt=0,zt=Rt.length;jt<zt;jt++){const It=Rt[jt],kt=Math.floor(It.start/4),ne=Math.ceil(It.count/4),le=kt%T.width,Q=Math.floor(kt/T.width),Dt=ne,Mt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,le),i.pixelStorei(o.UNPACK_SKIP_ROWS,Q),i.texSubImage2D(o.TEXTURE_2D,0,le,Q,Dt,Mt,it,ut,T.data)}O.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,_t),i.pixelStorei(o.UNPACK_SKIP_PIXELS,yt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Nt)}}function Tt(O,T,it){let ut=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ut=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ut=o.TEXTURE_3D);const pt=Ct(O,T),Rt=T.source;i.bindTexture(ut,O.__webglTexture,o.TEXTURE0+it);const Ut=r.get(Rt);if(Rt.version!==Ut.__version||pt===!0){if(i.activeTexture(o.TEXTURE0+it),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Mt=De.getPrimaries(De.workingColorSpace),Lt=T.colorSpace===Er?null:De.getPrimaries(T.colorSpace),Xt=T.colorSpace===Er||Mt===Lt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}i.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment);let yt=M(T.image,!1,l.maxTextureSize);yt=rn(T,yt);const Nt=c.convert(T.format,T.colorSpace),jt=c.convert(T.type);let zt=D(T.internalFormat,Nt,jt,T.normalized,T.colorSpace,T.isVideoTexture);mt(ut,T);let It;const kt=T.mipmaps,ne=T.isVideoTexture!==!0,le=Ut.__version===void 0||pt===!0,Q=Rt.dataReady,Dt=w(T,yt);if(T.isDepthTexture)zt=L(T.format===ns,T.type),le&&(ne?i.texStorage2D(o.TEXTURE_2D,1,zt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,zt,yt.width,yt.height,0,Nt,jt,null));else if(T.isDataTexture)if(kt.length>0){ne&&le&&i.texStorage2D(o.TEXTURE_2D,Dt,zt,kt[0].width,kt[0].height);for(let Mt=0,Lt=kt.length;Mt<Lt;Mt++)It=kt[Mt],ne?Q&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,It.width,It.height,Nt,jt,It.data):i.texImage2D(o.TEXTURE_2D,Mt,zt,It.width,It.height,0,Nt,jt,It.data);T.generateMipmaps=!1}else ne?(le&&i.texStorage2D(o.TEXTURE_2D,Dt,zt,yt.width,yt.height),Q&&ht(T,yt,Nt,jt)):i.texImage2D(o.TEXTURE_2D,0,zt,yt.width,yt.height,0,Nt,jt,yt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ne&&le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,zt,kt[0].width,kt[0].height,yt.depth);for(let Mt=0,Lt=kt.length;Mt<Lt;Mt++)if(It=kt[Mt],T.format!==Hi)if(Nt!==null)if(ne){if(Q)if(T.layerUpdates.size>0){const Xt=ES(It.width,It.height,T.format,T.type);for(const Et of T.layerUpdates){const Jt=It.data.subarray(Et*Xt/It.data.BYTES_PER_ELEMENT,(Et+1)*Xt/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,Et,It.width,It.height,1,Nt,Jt)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,It.width,It.height,yt.depth,Nt,It.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,zt,It.width,It.height,yt.depth,0,It.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?Q&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,It.width,It.height,yt.depth,Nt,jt,It.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,zt,It.width,It.height,yt.depth,0,Nt,jt,It.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ne&&le&&i.texStorage2D(o.TEXTURE_2D,Dt,zt,kt[0].width,kt[0].height);for(let Mt=0,Lt=kt.length;Mt<Lt;Mt++)It=kt[Mt],T.format!==Hi?Nt!==null?ne?Q&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,It.width,It.height,Nt,It.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,zt,It.width,It.height,0,It.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?Q&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,It.width,It.height,Nt,jt,It.data):i.texImage2D(o.TEXTURE_2D,Mt,zt,It.width,It.height,0,Nt,jt,It.data)}else if(T.isDataArrayTexture)if(ne){if(le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,zt,yt.width,yt.height,yt.depth),Q)if(T.layerUpdates.size>0){const Mt=ES(yt.width,yt.height,T.format,T.type);for(const Lt of T.layerUpdates){const Xt=yt.data.subarray(Lt*Mt/yt.data.BYTES_PER_ELEMENT,(Lt+1)*Mt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Lt,yt.width,yt.height,1,Nt,jt,Xt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Nt,jt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,yt.width,yt.height,yt.depth,0,Nt,jt,yt.data);else if(T.isData3DTexture)ne?(le&&i.texStorage3D(o.TEXTURE_3D,Dt,zt,yt.width,yt.height,yt.depth),Q&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Nt,jt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,zt,yt.width,yt.height,yt.depth,0,Nt,jt,yt.data);else if(T.isFramebufferTexture){if(le)if(ne)i.texStorage2D(o.TEXTURE_2D,Dt,zt,yt.width,yt.height);else{let Mt=yt.width,Lt=yt.height;for(let Xt=0;Xt<Dt;Xt++)i.texImage2D(o.TEXTURE_2D,Xt,zt,Mt,Lt,0,Nt,jt,null),Mt>>=1,Lt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in o){const Mt=o.canvas;if(Mt.hasAttribute("layoutsubtree")||Mt.setAttribute("layoutsubtree","true"),yt.parentNode!==Mt){Mt.appendChild(yt),g.add(T),Mt.onpaint=Lt=>{const Xt=Lt.changedElements;for(const Et of g)Xt.includes(Et.image)&&(Et.needsUpdate=!0)},Mt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,yt);else{const Xt=o.RGBA,Et=o.RGBA,Jt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Xt,Et,Jt,yt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(kt.length>0){if(ne&&le){const Mt=Pe(kt[0]);i.texStorage2D(o.TEXTURE_2D,Dt,zt,Mt.width,Mt.height)}for(let Mt=0,Lt=kt.length;Mt<Lt;Mt++)It=kt[Mt],ne?Q&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Nt,jt,It):i.texImage2D(o.TEXTURE_2D,Mt,zt,Nt,jt,It);T.generateMipmaps=!1}else if(ne){if(le){const Mt=Pe(yt);i.texStorage2D(o.TEXTURE_2D,Dt,zt,Mt.width,Mt.height)}Q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Nt,jt,yt)}else i.texImage2D(o.TEXTURE_2D,0,zt,Nt,jt,yt);x(T)&&I(ut),Ut.__version=Rt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Ft(O,T,it){if(T.image.length!==6)return;const ut=Ct(O,T),pt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+it);const Rt=r.get(pt);if(pt.version!==Rt.__version||ut===!0){i.activeTexture(o.TEXTURE0+it);const Ut=De.getPrimaries(De.workingColorSpace),_t=T.colorSpace===Er?null:De.getPrimaries(T.colorSpace),yt=T.colorSpace===Er||Ut===_t?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Nt=T.isCompressedTexture||T.image[0].isCompressedTexture,jt=T.image[0]&&T.image[0].isDataTexture,zt=[];for(let Et=0;Et<6;Et++)!Nt&&!jt?zt[Et]=M(T.image[Et],!0,l.maxCubemapSize):zt[Et]=jt?T.image[Et].image:T.image[Et],zt[Et]=rn(T,zt[Et]);const It=zt[0],kt=c.convert(T.format,T.colorSpace),ne=c.convert(T.type),le=D(T.internalFormat,kt,ne,T.normalized,T.colorSpace),Q=T.isVideoTexture!==!0,Dt=Rt.__version===void 0||ut===!0,Mt=pt.dataReady;let Lt=w(T,It);mt(o.TEXTURE_CUBE_MAP,T);let Xt;if(Nt){Q&&Dt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,le,It.width,It.height);for(let Et=0;Et<6;Et++){Xt=zt[Et].mipmaps;for(let Jt=0;Jt<Xt.length;Jt++){const Vt=Xt[Jt];T.format!==Hi?kt!==null?Q?Mt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,0,0,Vt.width,Vt.height,kt,Vt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,le,Vt.width,Vt.height,0,Vt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,0,0,Vt.width,Vt.height,kt,ne,Vt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,le,Vt.width,Vt.height,0,kt,ne,Vt.data)}}}else{if(Xt=T.mipmaps,Q&&Dt){Xt.length>0&&Lt++;const Et=Pe(zt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,le,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(jt){Q?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,zt[Et].width,zt[Et].height,kt,ne,zt[Et].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,le,zt[Et].width,zt[Et].height,0,kt,ne,zt[Et].data);for(let Jt=0;Jt<Xt.length;Jt++){const Ce=Xt[Jt].image[Et].image;Q?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,0,0,Ce.width,Ce.height,kt,ne,Ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,le,Ce.width,Ce.height,0,kt,ne,Ce.data)}}else{Q?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,kt,ne,zt[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,le,kt,ne,zt[Et]);for(let Jt=0;Jt<Xt.length;Jt++){const Vt=Xt[Jt];Q?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,0,0,kt,ne,Vt.image[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,le,kt,ne,Vt.image[Et])}}}x(T)&&I(o.TEXTURE_CUBE_MAP),Rt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function vt(O,T,it,ut,pt,Rt){const Ut=c.convert(it.format,it.colorSpace),_t=c.convert(it.type),yt=D(it.internalFormat,Ut,_t,it.normalized,it.colorSpace),Nt=r.get(T),jt=r.get(it);if(jt.__renderTarget=T,!Nt.__hasExternalTextures){const zt=Math.max(1,T.width>>Rt),It=Math.max(1,T.height>>Rt);pt===o.TEXTURE_3D||pt===o.TEXTURE_2D_ARRAY?i.texImage3D(pt,Rt,yt,zt,It,T.depth,0,Ut,_t,null):i.texImage2D(pt,Rt,yt,zt,It,0,Ut,_t,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),nn(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ut,pt,jt.__webglTexture,0,ze(T)):(pt===o.TEXTURE_2D||pt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ut,pt,jt.__webglTexture,Rt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function wt(O,T,it){if(o.bindRenderbuffer(o.RENDERBUFFER,O),T.depthBuffer){const ut=T.depthTexture,pt=ut&&ut.isDepthTexture?ut.type:null,Rt=L(T.stencilBuffer,pt),Ut=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;nn(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ze(T),Rt,T.width,T.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,ze(T),Rt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Rt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,O)}else{const ut=T.textures;for(let pt=0;pt<ut.length;pt++){const Rt=ut[pt],Ut=c.convert(Rt.format,Rt.colorSpace),_t=c.convert(Rt.type),yt=D(Rt.internalFormat,Ut,_t,Rt.normalized,Rt.colorSpace);nn(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ze(T),yt,T.width,T.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,ze(T),yt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,yt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Xe(O,T,it){const ut=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pt=r.get(T.depthTexture);if(pt.__renderTarget=T,(!pt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ut){if(pt.__webglInit===void 0&&(pt.__webglInit=!0,T.depthTexture.addEventListener("dispose",N)),pt.__webglTexture===void 0){pt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),mt(o.TEXTURE_CUBE_MAP,T.depthTexture);const Nt=c.convert(T.depthTexture.format),jt=c.convert(T.depthTexture.type);let zt;T.depthTexture.format===Ga?zt=o.DEPTH_COMPONENT24:T.depthTexture.format===ns&&(zt=o.DEPTH24_STENCIL8);for(let It=0;It<6;It++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,zt,T.width,T.height,0,Nt,jt,null)}}else rt(T.depthTexture,0);const Rt=pt.__webglTexture,Ut=ze(T),_t=ut?o.TEXTURE_CUBE_MAP_POSITIVE_X+it:o.TEXTURE_2D,yt=T.depthTexture.format===ns?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ga)nn(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,_t,Rt,0,Ut):o.framebufferTexture2D(o.FRAMEBUFFER,yt,_t,Rt,0);else if(T.depthTexture.format===ns)nn(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,_t,Rt,0,Ut):o.framebufferTexture2D(o.FRAMEBUFFER,yt,_t,Rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pe(O){const T=r.get(O),it=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const ut=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ut){const pt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ut.removeEventListener("dispose",pt)};ut.addEventListener("dispose",pt),T.__depthDisposeCallback=pt}T.__boundDepthTexture=ut}if(O.depthTexture&&!T.__autoAllocateDepthBuffer)if(it)for(let ut=0;ut<6;ut++)Xe(T.__webglFramebuffer[ut],O,ut);else{const ut=O.texture.mipmaps;ut&&ut.length>0?Xe(T.__webglFramebuffer[0],O,0):Xe(T.__webglFramebuffer,O,0)}else if(it){T.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ut]),T.__webglDepthbuffer[ut]===void 0)T.__webglDepthbuffer[ut]=o.createRenderbuffer(),wt(T.__webglDepthbuffer[ut],O,!1);else{const pt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=T.__webglDepthbuffer[ut];o.bindRenderbuffer(o.RENDERBUFFER,Rt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,Rt)}}else{const ut=O.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),wt(T.__webglDepthbuffer,O,!1);else{const pt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Rt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,Rt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ge(O,T,it){const ut=r.get(O);T!==void 0&&vt(ut.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&pe(O)}function xe(O){const T=O.texture,it=r.get(O),ut=r.get(T);O.addEventListener("dispose",E);const pt=O.textures,Rt=O.isWebGLCubeRenderTarget===!0,Ut=pt.length>1;if(Ut||(ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture()),ut.__version=T.version,d.memory.textures++),Rt){it.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer[_t]=[];for(let yt=0;yt<T.mipmaps.length;yt++)it.__webglFramebuffer[_t][yt]=o.createFramebuffer()}else it.__webglFramebuffer[_t]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer=[];for(let _t=0;_t<T.mipmaps.length;_t++)it.__webglFramebuffer[_t]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(Ut)for(let _t=0,yt=pt.length;_t<yt;_t++){const Nt=r.get(pt[_t]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&nn(O)===!1){it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let _t=0;_t<pt.length;_t++){const yt=pt[_t];it.__webglColorRenderbuffer[_t]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[_t]);const Nt=c.convert(yt.format,yt.colorSpace),jt=c.convert(yt.type),zt=D(yt.internalFormat,Nt,jt,yt.normalized,yt.colorSpace,O.isXRRenderTarget===!0),It=ze(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,It,zt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+_t,o.RENDERBUFFER,it.__webglColorRenderbuffer[_t])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),wt(it.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Rt){i.bindTexture(o.TEXTURE_CUBE_MAP,ut.__webglTexture),mt(o.TEXTURE_CUBE_MAP,T);for(let _t=0;_t<6;_t++)if(T.mipmaps&&T.mipmaps.length>0)for(let yt=0;yt<T.mipmaps.length;yt++)vt(it.__webglFramebuffer[_t][yt],O,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,yt);else vt(it.__webglFramebuffer[_t],O,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);x(T)&&I(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ut){for(let _t=0,yt=pt.length;_t<yt;_t++){const Nt=pt[_t],jt=r.get(Nt);let zt=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(zt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(zt,jt.__webglTexture),mt(zt,Nt),vt(it.__webglFramebuffer,O,Nt,o.COLOR_ATTACHMENT0+_t,zt,0),x(Nt)&&I(zt)}i.unbindTexture()}else{let _t=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(_t=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(_t,ut.__webglTexture),mt(_t,T),T.mipmaps&&T.mipmaps.length>0)for(let yt=0;yt<T.mipmaps.length;yt++)vt(it.__webglFramebuffer[yt],O,T,o.COLOR_ATTACHMENT0,_t,yt);else vt(it.__webglFramebuffer,O,T,o.COLOR_ATTACHMENT0,_t,0);x(T)&&I(_t),i.unbindTexture()}O.depthBuffer&&pe(O)}function ee(O){const T=O.textures;for(let it=0,ut=T.length;it<ut;it++){const pt=T[it];if(x(pt)){const Rt=k(O),Ut=r.get(pt).__webglTexture;i.bindTexture(Rt,Ut),I(Rt),i.unbindTexture()}}}const ie=[],ke=[];function mn(O){if(O.samples>0){if(nn(O)===!1){const T=O.textures,it=O.width,ut=O.height;let pt=o.COLOR_BUFFER_BIT;const Rt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=r.get(O),_t=T.length>1;if(_t)for(let Nt=0;Nt<T.length;Nt++)i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const yt=O.texture.mipmaps;yt&&yt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Nt=0;Nt<T.length;Nt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(pt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(pt|=o.STENCIL_BUFFER_BIT)),_t){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[Nt]);const jt=r.get(T[Nt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,jt,0)}o.blitFramebuffer(0,0,it,ut,0,0,it,ut,pt,o.NEAREST),p===!0&&(ie.length=0,ke.length=0,ie.push(o.COLOR_ATTACHMENT0+Nt),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(ie.push(Rt),ke.push(Rt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ke)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),_t)for(let Nt=0;Nt<T.length;Nt++){i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[Nt]);const jt=r.get(T[Nt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,jt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&p){const T=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ze(O){return Math.min(l.maxSamples,O.samples)}function nn(O){const T=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function J(O){const T=d.render.frame;S.get(O)!==T&&(S.set(O,T),O.update())}function rn(O,T){const it=O.colorSpace,ut=O.format,pt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||it!==Gc&&it!==Er&&(De.getTransfer(it)===Ze?(ut!==Hi||pt!==mi)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",it)),T}function Pe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=B,this.resetTextureUnits=K,this.getTextureUnits=W,this.setTextureUnits=Z,this.setTexture2D=rt,this.setTexture2DArray=nt,this.setTexture3D=ct,this.setTextureCube=gt,this.rebindTextures=ge,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=nn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function fC(o,e){function i(r,l=Er){let c;const d=De.getTransfer(l);if(r===mi)return o.UNSIGNED_BYTE;if(r===vm)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Sm)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Nx)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Ux)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===wx)return o.BYTE;if(r===Dx)return o.SHORT;if(r===Ul)return o.UNSIGNED_SHORT;if(r===_m)return o.INT;if(r===fa)return o.UNSIGNED_INT;if(r===oa)return o.FLOAT;if(r===da)return o.HALF_FLOAT;if(r===Lx)return o.ALPHA;if(r===Ox)return o.RGB;if(r===Hi)return o.RGBA;if(r===Ga)return o.DEPTH_COMPONENT;if(r===ns)return o.DEPTH_STENCIL;if(r===Px)return o.RED;if(r===xm)return o.RED_INTEGER;if(r===as)return o.RG;if(r===Mm)return o.RG_INTEGER;if(r===ym)return o.RGBA_INTEGER;if(r===Lc||r===Oc||r===Pc||r===Ic)if(d===Ze)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Lc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Lc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ic)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sp||r===xp||r===Mp||r===yp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Sp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ep||r===Tp||r===bp||r===Ap||r===Rp||r===Bc||r===Cp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Ep||r===Tp)return d===Ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===bp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ap)return c.COMPRESSED_R11_EAC;if(r===Rp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Bc)return c.COMPRESSED_RG11_EAC;if(r===Cp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===wp||r===Dp||r===Np||r===Up||r===Lp||r===Op||r===Pp||r===Ip||r===zp||r===Fp||r===Bp||r===Hp||r===Gp||r===Vp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===wp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Dp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Np)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Up)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Lp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Op)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Pp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ip)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vp)return d===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xp||r===kp||r===Wp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Xp)return d===Ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Wp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===qp||r===Yp||r===Hc||r===Zp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===qp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Yp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ll?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const dC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hC=`
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

}`;class pC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Xx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ha({vertexShader:dC,fragmentShader:hC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new pn(new pa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mC extends rs{constructor(e,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",p=1,m=null,S=null,g=null,v=null,y=null,R=null;const U=typeof XRWebGLBinding<"u",M=new pC,x={},I=i.getContextAttributes();let k=null,D=null;const L=[],w=[],N=new Oe;let E=null,C=null;const F=new wi;F.viewport=new on;const P=new wi;P.viewport=new on;const H=[F,P],K=new ET;let W=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ht=L[$];return ht===void 0&&(ht=new Fh,L[$]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function($){let ht=L[$];return ht===void 0&&(ht=new Fh,L[$]=ht),ht.getGripSpace()},this.getHand=function($){let ht=L[$];return ht===void 0&&(ht=new Fh,L[$]=ht),ht.getHandSpace()};function B($){const ht=w.indexOf($.inputSource);if(ht===-1)return;const Tt=L[ht];Tt!==void 0&&(Tt.update($.inputSource,$.frame,m||d),Tt.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){l.removeEventListener("select",B),l.removeEventListener("selectstart",B),l.removeEventListener("selectend",B),l.removeEventListener("squeeze",B),l.removeEventListener("squeezestart",B),l.removeEventListener("squeezeend",B),l.removeEventListener("end",G),l.removeEventListener("inputsourceschange",rt);for(let $=0;$<L.length;$++){const ht=w[$];ht!==null&&(w[$]=null,L[$].disconnect(ht))}W=null,Z=null,M.reset();for(const $ in x)delete x[$];if(e.setRenderTarget(k),y=null,v=null,g=null,l=null,D=null,Ct.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(N.width,N.height,!1),C!==null){const $=C.camera;$.fov=C.fov,$.zoom=C.zoom,$.updateProjectionMatrix(),C=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){h=$,r.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function($){m=$},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&U&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(k=e.getRenderTarget(),l.addEventListener("select",B),l.addEventListener("selectstart",B),l.addEventListener("selectend",B),l.addEventListener("squeeze",B),l.addEventListener("squeezestart",B),l.addEventListener("squeezeend",B),l.addEventListener("end",G),l.addEventListener("inputsourceschange",rt),I.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(N),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Ft=null,vt=null;I.depth&&(vt=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=I.stencil?ns:Ga,Ft=I.stencil?Ll:fa);const wt={colorFormat:i.RGBA8,depthFormat:vt,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(wt),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new Gi(v.textureWidth,v.textureHeight,{format:Hi,type:mi,depthTexture:new Pl(v.textureWidth,v.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Tt={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new Gi(y.framebufferWidth,y.framebufferHeight,{format:Hi,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),Ct.setContext(l),Ct.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function rt($){for(let ht=0;ht<$.removed.length;ht++){const Tt=$.removed[ht],Ft=w.indexOf(Tt);Ft>=0&&(w[Ft]=null,L[Ft].disconnect(Tt))}for(let ht=0;ht<$.added.length;ht++){const Tt=$.added[ht];let Ft=w.indexOf(Tt);if(Ft===-1){for(let wt=0;wt<L.length;wt++)if(wt>=w.length){w.push(Tt),Ft=wt;break}else if(w[wt]===null){w[wt]=Tt,Ft=wt;break}if(Ft===-1)break}const vt=L[Ft];vt&&vt.connect(Tt)}}const nt=new Y,ct=new Y;function gt($,ht,Tt){nt.setFromMatrixPosition(ht.matrixWorld),ct.setFromMatrixPosition(Tt.matrixWorld);const Ft=nt.distanceTo(ct),vt=ht.projectionMatrix.elements,wt=Tt.projectionMatrix.elements,Xe=vt[14]/(vt[10]-1),pe=vt[14]/(vt[10]+1),ge=(vt[9]+1)/vt[5],xe=(vt[9]-1)/vt[5],ee=(vt[8]-1)/vt[0],ie=(wt[8]+1)/wt[0],ke=Xe*ee,mn=Xe*ie,ze=Ft/(-ee+ie),nn=ze*-ee;if(ht.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(nn),$.translateZ(ze),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),vt[10]===-1)$.projectionMatrix.copy(ht.projectionMatrix),$.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const J=Xe+ze,rn=pe+ze,Pe=ke-nn,O=mn+(Ft-nn),T=ge*pe/rn*J,it=xe*pe/rn*J;$.projectionMatrix.makePerspective(Pe,O,T,it,J,rn),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function bt($,ht){ht===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ht.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let ht=$.near,Tt=$.far;M.texture!==null&&(M.depthNear>0&&(ht=M.depthNear),M.depthFar>0&&(Tt=M.depthFar)),K.near=P.near=F.near=ht,K.far=P.far=F.far=Tt,(W!==K.near||Z!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),W=K.near,Z=K.far),K.layers.mask=$.layers.mask|6,F.layers.mask=K.layers.mask&-5,P.layers.mask=K.layers.mask&-3;const Ft=$.parent,vt=K.cameras;bt(K,Ft);for(let wt=0;wt<vt.length;wt++)bt(vt[wt],Ft);vt.length===2?gt(K,F,P):K.projectionMatrix.copy(F.projectionMatrix),C===null&&$.isPerspectiveCamera&&(C={camera:$,fov:$.fov,zoom:$.zoom}),At($,K,Ft)};function At($,ht,Tt){Tt===null?$.matrix.copy(ht.matrixWorld):($.matrix.copy(Tt.matrixWorld),$.matrix.invert(),$.matrix.multiply(ht.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ht.projectionMatrix),$.projectionMatrixInverse.copy(ht.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Qp*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function($){p=$,v!==null&&(v.fixedFoveation=$),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function($){return x[$]};let V=null;function mt($,ht){if(S=ht.getViewerPose(m||d),R=ht,S!==null){const Tt=S.views;y!==null&&(e.setRenderTargetFramebuffer(D,y.framebuffer),e.setRenderTarget(D));let Ft=!1;Tt.length!==K.cameras.length&&(K.cameras.length=0,Ft=!0);for(let pe=0;pe<Tt.length;pe++){const ge=Tt[pe];let xe=null;if(y!==null)xe=y.getViewport(ge);else{const ie=g.getViewSubImage(v,ge);xe=ie.viewport,pe===0&&(e.setRenderTargetTextures(D,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(D))}let ee=H[pe];ee===void 0&&(ee=new wi,ee.layers.enable(pe),ee.viewport=new on,H[pe]=ee),ee.matrix.fromArray(ge.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ge.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(xe.x,xe.y,xe.width,xe.height),pe===0&&(K.matrix.copy(ee.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ft===!0&&K.cameras.push(ee)}const vt=l.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&U){g=r.getBinding();const pe=g.getDepthInformation(Tt[0]);pe&&pe.isValid&&pe.texture&&M.init(pe,l.renderState)}if(vt&&vt.includes("camera-access")&&U){e.state.unbindTexture(),g=r.getBinding();for(let pe=0;pe<Tt.length;pe++){const ge=Tt[pe].camera;if(ge){let xe=x[ge];xe||(xe=new Xx,x[ge]=xe);const ee=g.getCameraImage(ge);xe.sourceTexture=ee}}}}for(let Tt=0;Tt<L.length;Tt++){const Ft=w[Tt],vt=L[Tt];Ft!==null&&vt!==void 0&&vt.update(Ft,ht,m||d)}V&&V($,ht),ht.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ht}),R=null}const Ct=new qx;Ct.setAnimationLoop(mt),this.setAnimationLoop=function($){V=$},this.dispose=function(){}}}const gC=new Je,$x=new fe;$x.set(-1,0,0,0,1,0,0,0,1);function _C(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,kx(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,I,k,D){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(M,x):x.isMeshLambertMaterial?(c(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(M,x),g(M,x)):x.isMeshPhongMaterial?(c(M,x),S(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,D)):x.isMeshMatcapMaterial?(c(M,x),R(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),U(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?p(M,x,I,k):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===ei&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===ei&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const I=e.get(x),k=I.envMap,D=I.envMapRotation;k&&(M.envMap.value=k,M.envMapRotation.value.setFromMatrix4(gC.makeRotationFromEuler(D)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply($x),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,I,k){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*I,M.scale.value=k*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function S(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,I){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ei&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.retroreflectivity>0&&(M.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function R(M,x){x.matcap&&(M.matcap.value=x.matcap)}function U(M,x){const I=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function vC(o,e,i,r){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,L){const w=L.program;r.uniformBlockBinding(D,w)}function m(D,L){let w=l[D.id];w===void 0&&(M(D),w=S(D),l[D.id]=w,D.addEventListener("dispose",I));const N=L.program;r.updateUBOMapping(D,N);const E=e.render.frame;c[D.id]!==E&&(v(D),c[D.id]=E)}function S(D){const L=g();D.__bindingPointIndex=L;const w=o.createBuffer(),N=D.__size,E=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,N,E),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,w),w}function g(){for(let D=0;D<h;D++)if(d.indexOf(D)===-1)return d.push(D),D;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const L=l[D.id],w=D.uniforms,N=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let E=0,C=w.length;E<C;E++){const F=w[E];if(Array.isArray(F))for(let P=0,H=F.length;P<H;P++)y(F[P],E,P,N);else y(F,E,0,N)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(D,L,w,N){if(U(D,L,w,N)===!0){const E=D.__offset,C=D.value;if(Array.isArray(C)){let F=0;for(let P=0;P<C.length;P++){const H=C[P],K=x(H);R(H,D.__data,F),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(F+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(C,D.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,E,D.__data)}}function R(D,L,w){typeof D=="number"||typeof D=="boolean"?L[0]=D:D.isMatrix3?(L[0]=D.elements[0],L[1]=D.elements[1],L[2]=D.elements[2],L[3]=0,L[4]=D.elements[3],L[5]=D.elements[4],L[6]=D.elements[5],L[7]=0,L[8]=D.elements[6],L[9]=D.elements[7],L[10]=D.elements[8],L[11]=0):ArrayBuffer.isView(D)?L.set(new D.constructor(D.buffer,D.byteOffset,L.length)):D.toArray(L,w)}function U(D,L,w,N){const E=D.value,C=L+"_"+w;if(N[C]===void 0)return typeof E=="number"||typeof E=="boolean"?N[C]=E:ArrayBuffer.isView(E)?N[C]=E.slice():N[C]=E.clone(),!0;{const F=N[C];if(typeof E=="number"||typeof E=="boolean"){if(F!==E)return N[C]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(F.equals(E)===!1)return F.copy(E),!0}}return!1}function M(D){const L=D.uniforms;let w=0;const N=16;for(let C=0,F=L.length;C<F;C++){const P=Array.isArray(L[C])?L[C]:[L[C]];for(let H=0,K=P.length;H<K;H++){const W=P[H],Z=Array.isArray(W.value)?W.value:[W.value];for(let B=0,G=Z.length;B<G;B++){const rt=Z[B],nt=x(rt),ct=w%N,gt=ct%nt.boundary,bt=ct+gt;w+=gt,bt!==0&&N-bt<nt.storage&&(w+=N-bt),W.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=nt.storage}}}const E=w%N;return E>0&&(w+=N-E),D.__size=w,D.__cache={},this}function x(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(L.boundary=16,L.storage=D.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",D),L}function I(D){const L=D.target;L.removeEventListener("dispose",I);const w=d.indexOf(L.__bindingPointIndex);d.splice(w,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function k(){for(const D in l)o.deleteBuffer(l[D]);d=[],l={},c={}}return{bind:p,update:m,dispose:k}}const SC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let aa=null;function xC(){return aa===null&&(aa=new oT(SC,16,16,as,da),aa.name="DFG_LUT",aa.minFilter=Hn,aa.magFilter=Hn,aa.wrapS=za,aa.wrapT=za,aa.generateMipmaps=!1,aa.needsUpdate=!0),aa}class MC{constructor(e={}){const{canvas:i=P1(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:y=mi}=e;this.isWebGLRenderer=!0;let R;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=r.getContextAttributes().alpha}else R=d;const U=y,M=new Set([ym,Mm,xm]),x=new Set([mi,fa,Ul,Ll,vm,Sm]),I=new Uint32Array(4),k=new Int32Array(4),D=new Y;let L=null,w=null;const N=[],E=[];let C=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ua,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let P=!1,H=null,K=null,W=null,Z=null;this._outputColorSpace=pi;let B=0,G=0,rt=null,nt=-1,ct=null;const gt=new on,bt=new on;let At=null;const V=new Le(0);let mt=0,Ct=i.width,$=i.height,ht=1,Tt=null,Ft=null;const vt=new on(0,0,Ct,$),wt=new on(0,0,Ct,$);let Xe=!1;const pe=new Rm;let ge=!1,xe=!1;const ee=new Je,ie=new Y,ke=new on,mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function nn(){return rt===null?ht:1}let J=r;function rn(b,X){return i.getContext(b,X)}let Pe,O,T,it,ut,pt,Rt,Ut,_t,yt,Nt,jt,zt,It,kt,ne,le,Q,Dt,Mt,Lt,Xt,Et;try{const b={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:S,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${gm}`),i.addEventListener("webglcontextlost",Ce,!1),i.addEventListener("webglcontextrestored",ue,!1),i.addEventListener("webglcontextcreationerror",ni,!1),J===null){const X="webgl2";if(J=rn(X,b),J===null)throw rn(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(b){throw i.removeEventListener("webglcontextlost",Ce,!1),i.removeEventListener("webglcontextrestored",ue,!1),i.removeEventListener("webglcontextcreationerror",ni,!1),Fe("WebGLRenderer: "+b.message),b}function Jt(){Pe=new xR(J),Pe.init(),Lt=new fC(J,Pe),O=new cR(J,Pe,e,Lt),T=new uC(J,Pe),O.reversedDepthBuffer&&v&&T.buffers.depth.setReversed(!0),K=J.createFramebuffer(),W=J.createFramebuffer(),Z=J.createFramebuffer(),it=new ER(J),ut=new K3,pt=new cC(J,Pe,T,ut,O,Lt,it),Rt=new SR(F),Ut=new bT(J),Xt=new lR(J,Ut),_t=new MR(J,Ut,it,Xt),yt=new bR(J,_t,Ut,Xt,it),Q=new TR(J,O,pt),kt=new fR(ut),Nt=new Z3(F,Rt,Pe,O,Xt,kt),jt=new _C(F,ut),zt=new J3,It=new iC(Pe),le=new oR(F,Rt,T,yt,R,p),ne=new lC(F,yt,O),Et=new vC(J,it,O,T),Dt=new uR(J,Pe,it),Mt=new yR(J,Pe,it),it.programs=Nt.programs,F.capabilities=O,F.extensions=Pe,F.properties=ut,F.renderLists=zt,F.shadowMap=ne,F.state=T,F.info=it}U!==mi&&(C=new RR(U,i.width,i.height,h,l,c));const Vt=new mC(F,J);this.xr=Vt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const b=Pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(b){b!==void 0&&(ht=b,this.setSize(Ct,$,!1))},this.getSize=function(b){return b.set(Ct,$)},this.setSize=function(b,X,dt=!0){if(Vt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ct=b,$=X,i.width=Math.floor(b*ht),i.height=Math.floor(X*ht),dt===!0&&(i.style.width=b+"px",i.style.height=X+"px"),C!==null&&C.setSize(i.width,i.height),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(Ct*ht,$*ht).floor()},this.setDrawingBufferSize=function(b,X,dt){Ct=b,$=X,ht=dt,i.width=Math.floor(b*dt),i.height=Math.floor(X*dt),this.setViewport(0,0,b,X)},this.setEffects=function(b){if(U===mi){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let X=0;X<b.length;X++)if(b[X].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(gt)},this.getViewport=function(b){return b.copy(vt)},this.setViewport=function(b,X,dt,st){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,X,dt,st),T.viewport(gt.copy(vt).multiplyScalar(ht).round())},this.getScissor=function(b){return b.copy(wt)},this.setScissor=function(b,X,dt,st){b.isVector4?wt.set(b.x,b.y,b.z,b.w):wt.set(b,X,dt,st),T.scissor(bt.copy(wt).multiplyScalar(ht).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(b){T.setScissorTest(Xe=b)},this.setOpaqueSort=function(b){Tt=b},this.setTransparentSort=function(b){Ft=b},this.getClearColor=function(b){return b.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(b=!0,X=!0,dt=!0){let st=0;if(b){let ot=!1;if(rt!==null){const Bt=rt.texture.format;ot=M.has(Bt)}if(ot){const Bt=rt.texture.type,Wt=x.has(Bt),Ot=le.getClearColor(),Zt=le.getClearAlpha(),Kt=Ot.r,re=Ot.g,ce=Ot.b;Wt?(I[0]=Kt,I[1]=re,I[2]=ce,I[3]=Zt,J.clearBufferuiv(J.COLOR,0,I)):(k[0]=Kt,k[1]=re,k[2]=ce,k[3]=Zt,J.clearBufferiv(J.COLOR,0,k))}else st|=J.COLOR_BUFFER_BIT}X&&(st|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),dt&&(st|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&J.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),H=b},this.dispose=function(){i.removeEventListener("webglcontextlost",Ce,!1),i.removeEventListener("webglcontextrestored",ue,!1),i.removeEventListener("webglcontextcreationerror",ni,!1),le.dispose(),zt.dispose(),It.dispose(),ut.dispose(),Rt.dispose(),yt.dispose(),Xt.dispose(),Et.dispose(),Nt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Rr),Vt.removeEventListener("sessionend",Xa),Xi.stop()};function Ce(b){b.preventDefault(),nS("WebGLRenderer: Context Lost."),P=!0}function ue(){nS("WebGLRenderer: Context Restored."),P=!1;const b=it.autoReset,X=ne.enabled,dt=ne.autoUpdate,st=ne.needsUpdate,ot=ne.type;Jt(),it.autoReset=b,ne.enabled=X,ne.autoUpdate=dt,ne.needsUpdate=st,ne.type=ot}function ni(b){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function _i(b){const X=b.target;X.removeEventListener("dispose",_i),Kc(X)}function Kc(b){ss(b),ut.remove(b)}function ss(b){const X=ut.get(b).programs;X!==void 0&&(X.forEach(function(dt){Nt.releaseProgram(dt)}),b.isShaderMaterial&&Nt.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,dt,st,ot,Bt){X===null&&(X=mn);const Wt=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,Ot=Co(b,X,dt,st,ot);T.setMaterial(st,Wt);let Zt=dt.index,Kt=1;if(st.wireframe===!0){if(Zt=_t.getWireframeAttribute(dt),Zt===void 0)return;Kt=2}const re=dt.drawRange,ce=dt.attributes.position;let qt=re.start*Kt,Me=(re.start+re.count)*Kt;Bt!==null&&(qt=Math.max(qt,Bt.start*Kt),Me=Math.min(Me,(Bt.start+Bt.count)*Kt)),Zt!==null?(qt=Math.max(qt,0),Me=Math.min(Me,Zt.count)):ce!=null&&(qt=Math.max(qt,0),Me=Math.min(Me,ce.count));const _e=Me-qt;if(_e<0||_e===1/0)return;Xt.setup(ot,st,Ot,dt,Zt);let Ke,Ge=Dt;if(Zt!==null&&(Ke=Ut.get(Zt),Ge=Mt,Ge.setIndex(Ke)),ot.isMesh)st.wireframe===!0?(T.setLineWidth(st.wireframeLinewidth*nn()),Ge.setMode(J.LINES)):Ge.setMode(J.TRIANGLES);else if(ot.isLine){let Mn=st.linewidth;Mn===void 0&&(Mn=1),T.setLineWidth(Mn*nn()),ot.isLineSegments?Ge.setMode(J.LINES):ot.isLineLoop?Ge.setMode(J.LINE_LOOP):Ge.setMode(J.LINE_STRIP)}else ot.isPoints?Ge.setMode(J.POINTS):ot.isSprite&&Ge.setMode(J.TRIANGLES);if(ot.isBatchedMesh)if(Pe.get("WEBGL_multi_draw"))Ge.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{const Mn=ot._multiDrawStarts,Ht=ot._multiDrawCounts,ln=ot._multiDrawCount,we=Zt?Ut.get(Zt).bytesPerElement:1,Vn=ut.get(st).currentProgram.getUniforms();for(let ii=0;ii<ln;ii++)Vn.setValue(J,"_gl_DrawID",ii),Ge.render(Mn[ii]/we,Ht[ii])}else if(ot.isInstancedMesh)Ge.renderInstances(qt,_e,ot.count);else if(dt.isInstancedBufferGeometry){const Mn=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Ht=Math.min(dt.instanceCount,Mn);Ge.renderInstances(qt,_e,Ht)}else Ge.render(qt,_e)};function Ar(b,X,dt,st){H!==null&&b.isNodeMaterial&&H.setObject(st,b),ge===!0&&kt.setState(b,dt,!1),b.transparent===!0&&b.side===Ia&&b.forceSinglePass===!1?(b.side=ei,b.needsUpdate=!0,Cr(b,X,st),b.side=gi,b.needsUpdate=!0,Cr(b,X,st),b.side=Ia):Cr(b,X,st)}this.compile=function(b,X,dt=null){dt===null&&(dt=b),H!==null&&H.renderStart(b,X,dt),w=It.get(dt),w.init(X),E.push(w),dt.traverseVisible(function(ot){ot.isLight&&ot.layers.test(X.layers)&&(w.pushLight(ot),ot.castShadow&&w.pushShadow(ot))}),b!==dt&&b.traverseVisible(function(ot){ot.isLight&&ot.layers.test(X.layers)&&(w.pushLight(ot),ot.castShadow&&w.pushShadow(ot))}),w.setupLights(),H!==null&&H.updateLights(w.state.lightsArray),xe=this.localClippingEnabled,ge=kt.init(this.clippingPlanes,xe),ge===!0&&kt.setGlobalState(this.clippingPlanes,X),H!==null&&ne.render(w.state.shadowsArray,dt,X);const st=new Set;return b.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;const Bt=ot.material;if(Bt)if(Array.isArray(Bt))for(let Wt=0;Wt<Bt.length;Wt++){const Ot=Bt[Wt];Ar(Ot,dt,X,ot),st.add(Ot)}else Ar(Bt,dt,X,ot),st.add(Bt)}),w=E.pop(),H!==null&&H.renderEnd(),st},this.compileAsync=function(b,X,dt=null){const st=this.compile(b,X,dt);return new Promise(ot=>{function Bt(){if(st.forEach(function(Wt){const Zt=ut.get(Wt).currentProgram;(Zt===void 0||Zt.isReady())&&st.delete(Wt)}),st.size===0){ot(b);return}setTimeout(Bt,10)}Pe.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Va=null;function ma(b){Va&&Va(b)}function Rr(){Xi.stop()}function Xa(){Xi.start()}const Xi=new qx;Xi.setAnimationLoop(ma),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(b){Va=b,Vt.setAnimationLoop(b),b===null?Xi.stop():Xi.start()},Vt.addEventListener("sessionstart",Rr),Vt.addEventListener("sessionend",Xa),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;H!==null&&H.renderStart(b,X);const dt=Vt.enabled===!0&&Vt.isPresenting===!0,st=C!==null&&(rt===null||dt)&&C.begin(F,rt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(X),X=Vt.getCamera()),b.isScene===!0&&b.onBeforeRender(F,b,X,rt),w=It.get(b,E.length),w.init(X),w.state.textureUnits=pt.getTextureUnits(),E.push(w),ee.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),pe.setFromProjectionMatrix(ee,la,X.reversedDepth),xe=this.localClippingEnabled,ge=kt.init(this.clippingPlanes,xe),L=zt.get(b,N.length),L.init(),N.push(L),Vt.enabled===!0&&Vt.isPresenting===!0){const Wt=F.xr.getDepthSensingMesh();Wt!==null&&Eo(Wt,X,-1/0,F.sortObjects)}Eo(b,X,0,F.sortObjects),L.finish(),H!==null&&H.updateLights(w.state.lightsArray),F.sortObjects===!0&&L.sort(Tt,Ft),ze=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,ze&&le.addToRenderList(L,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&kt.beginShadows();const ot=w.state.shadowsArray;if(ne.render(ot,b,X),ge===!0&&kt.endShadows(),(st&&C.hasRenderPass())===!1){const Wt=L.opaque,Ot=L.transmissive;if(w.setupLights(),X.isArrayCamera){const Zt=X.cameras;if(Ot.length>0)for(let Kt=0,re=Zt.length;Kt<re;Kt++){const ce=Zt[Kt];os(Wt,Ot,b,ce)}ze&&le.render(b);for(let Kt=0,re=Zt.length;Kt<re;Kt++){const ce=Zt[Kt];To(L,b,ce,ce.viewport)}}else Ot.length>0&&os(Wt,Ot,b,X),ze&&le.render(b),To(L,b,X)}rt!==null&&G===0&&(pt.updateMultisampleRenderTarget(rt),pt.updateRenderTargetMipmap(rt)),st&&C.end(F),b.isScene===!0&&b.onAfterRender(F,b,X),Xt.resetDefaultState(),nt=-1,ct=null,E.pop(),E.length>0?(w=E[E.length-1],pt.setTextureUnits(w.state.textureUnits),ge===!0&&kt.setGlobalState(F.clippingPlanes,w.state.camera)):w=null,N.pop(),N.length>0?L=N[N.length-1]:L=null,H!==null&&H.renderEnd()};function Eo(b,X,dt,st){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)dt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(pe)){st&&ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ee);const Wt=yt.update(b),Ot=b.material;Ot.visible&&L.push(b,Wt,Ot,dt,ke.z,null,X)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(pe))){const Wt=yt.update(b),Ot=b.material;if(st&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ke.copy(b.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),ke.copy(Wt.boundingSphere.center)),ke.applyMatrix4(b.matrixWorld).applyMatrix4(ee)),Array.isArray(Ot)){const Zt=Wt.groups;for(let Kt=0,re=Zt.length;Kt<re;Kt++){const ce=Zt[Kt],qt=Ot[ce.materialIndex];qt&&qt.visible&&L.push(b,Wt,qt,dt,ke.z,ce,X)}}else Ot.visible&&L.push(b,Wt,Ot,dt,ke.z,null,X)}}const Bt=b.children;for(let Wt=0,Ot=Bt.length;Wt<Ot;Wt++)Eo(Bt[Wt],X,dt,st)}function To(b,X,dt,st){const{opaque:ot,transmissive:Bt,transparent:Wt}=b;w.setupLightsView(dt),ge===!0&&kt.setGlobalState(F.clippingPlanes,dt),st&&T.viewport(gt.copy(st)),ot.length>0&&ki(ot,X,dt),Bt.length>0&&ki(Bt,X,dt),Wt.length>0&&ki(Wt,X,dt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function os(b,X,dt,st){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[st.id]===void 0){const qt=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[st.id]=new Gi(1,1,{generateMipmaps:!0,type:qt?da:mi,minFilter:es,samples:Math.max(4,O.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:De.workingColorSpace})}const Bt=w.state.transmissionRenderTarget[st.id],Wt=st.viewport||gt;Bt.setSize(Wt.z*F.transmissionResolutionScale,Wt.w*F.transmissionResolutionScale);const Ot=F.getRenderTarget(),Zt=F.getActiveCubeFace(),Kt=F.getActiveMipmapLevel();F.setRenderTarget(Bt),F.getClearColor(V),mt=F.getClearAlpha(),mt<1&&F.setClearColor(16777215,.5),F.clear(),ze&&le.render(dt);const re=F.toneMapping;F.toneMapping=ua;const ce=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),w.setupLightsView(st),ge===!0&&kt.setGlobalState(F.clippingPlanes,st),ki(b,dt,st),pt.updateMultisampleRenderTarget(Bt),pt.updateRenderTargetMipmap(Bt),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Me=0,_e=X.length;Me<_e;Me++){const Ke=X[Me],{object:Ge,geometry:Mn,material:Ht,group:ln}=Ke;if(Ht.side===Ia&&Ge.layers.test(st.layers)){const we=Ht.side;Ht.side=ei,Ht.needsUpdate=!0,Hl(Ge,dt,st,Mn,Ht,ln),Ht.side=we,Ht.needsUpdate=!0,qt=!0}}qt===!0&&(pt.updateMultisampleRenderTarget(Bt),pt.updateRenderTargetMipmap(Bt))}F.setRenderTarget(Ot,Zt,Kt),F.setClearColor(V,mt),ce!==void 0&&(st.viewport=ce),F.toneMapping=re}function ki(b,X,dt){const st=X.isScene===!0?X.overrideMaterial:null;for(let ot=0,Bt=b.length;ot<Bt;ot++){const Wt=b[ot],{object:Ot,geometry:Zt,group:Kt}=Wt;let re=Wt.material;re.allowOverride===!0&&st!==null&&(re=st),Ot.layers.test(dt.layers)&&Hl(Ot,X,dt,Zt,re,Kt)}}function Hl(b,X,dt,st,ot,Bt){H!==null&&ot.isNodeMaterial&&H.setObject(b,ot),b.onBeforeRender(F,X,dt,st,ot,Bt),b.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ot.onBeforeRender(F,X,dt,st,b,Bt),ot.transparent===!0&&ot.side===Ia&&ot.forceSinglePass===!1?(ot.side=ei,ot.needsUpdate=!0,F.renderBufferDirect(dt,X,st,ot,b,Bt),ot.side=gi,ot.needsUpdate=!0,F.renderBufferDirect(dt,X,st,ot,b,Bt),ot.side=Ia):F.renderBufferDirect(dt,X,st,ot,b,Bt),b.onAfterRender(F,X,dt,st,ot,Bt)}function Cr(b,X,dt){X.isScene!==!0&&(X=mn);const st=ut.get(b),ot=w.state.lights,Bt=w.state.shadowsArray,Wt=ot.state.version,Ot=Nt.getParameters(b,ot.state,Bt,X,dt,w.state.lightProbeGridArray),Zt=Nt.getProgramCacheKey(Ot);let Kt=st.programs;st.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?X.environment:null,st.fog=X.fog;const re=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;st.envMap=Rt.get(b.envMap||st.environment,re),st.envMapRotation=st.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,Kt===void 0&&(b.addEventListener("dispose",_i),Kt=new Map,st.programs=Kt);let ce=Kt.get(Zt);if(ce!==void 0){if(st.currentProgram===ce&&st.lightsStateVersion===Wt)return Ao(b,Ot),ce}else Ot.uniforms=Nt.getUniforms(b),H!==null&&b.isNodeMaterial&&H.build(b,dt,Ot),b.onBeforeCompile(Ot,F),ce=Nt.acquireProgram(Ot,Zt),Kt.set(Zt,ce),st.uniforms=Ot.uniforms;const qt=st.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qt.clippingPlanes=kt.uniform),Ao(b,Ot),st.needsLights=Vl(b),st.lightsStateVersion=Wt,st.needsLights&&(qt.ambientLightColor.value=ot.state.ambient,qt.lightProbe.value=ot.state.probe,qt.sunLights.value=ot.state.sun,qt.sunLightShadows.value=ot.state.sunShadow,qt.directionalLights.value=ot.state.directional,qt.directionalLightShadows.value=ot.state.directionalShadow,qt.spotLights.value=ot.state.spot,qt.spotLightShadows.value=ot.state.spotShadow,qt.rectAreaLights.value=ot.state.rectArea,qt.ltc_1.value=ot.state.rectAreaLTC1,qt.ltc_2.value=ot.state.rectAreaLTC2,qt.pointLights.value=ot.state.point,qt.pointLightShadows.value=ot.state.pointShadow,qt.hemisphereLights.value=ot.state.hemi,qt.sunShadowMatrix.value=ot.state.sunShadowMatrix,qt.sunShadowCascade.value=ot.state.sunShadowCascade,qt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,qt.spotLightMatrix.value=ot.state.spotLightMatrix,qt.spotLightMap.value=ot.state.spotLightMap,qt.pointShadowMatrix.value=ot.state.pointShadowMatrix),st.lightProbeGrid=w.state.lightProbeGridArray.length>0,st.currentProgram=ce,st.uniformsList=null,ce}function bo(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=zc.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function Ao(b,X){const dt=ut.get(b);dt.outputColorSpace=X.outputColorSpace,dt.batching=X.batching,dt.batchingColor=X.batchingColor,dt.instancing=X.instancing,dt.instancingColor=X.instancingColor,dt.instancingMorph=X.instancingMorph,dt.skinning=X.skinning,dt.morphTargets=X.morphTargets,dt.morphNormals=X.morphNormals,dt.morphColors=X.morphColors,dt.morphTargetsCount=X.morphTargetsCount,dt.numClippingPlanes=X.numClippingPlanes,dt.numIntersection=X.numClipIntersection,dt.vertexAlphas=X.vertexAlphas,dt.vertexTangents=X.vertexTangents,dt.toneMapping=X.toneMapping}function Ro(b,X){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;D.setFromMatrixPosition(X.matrixWorld);for(let dt=0,st=b.length;dt<st;dt++){const ot=b[dt];if(ot.texture!==null&&ot.boundingBox.containsPoint(D))return ot}return null}function Co(b,X,dt,st,ot){X.isScene!==!0&&(X=mn),pt.resetTextureUnits();const Bt=X.fog,Wt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?X.environment:null,Ot=rt===null?F.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:De.workingColorSpace,Zt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Kt=Rt.get(st.envMap||Wt,Zt),re=st.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,ce=!!dt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),qt=!!dt.morphAttributes.position,Me=!!dt.morphAttributes.normal,_e=!!dt.morphAttributes.color;let Ke=ua;st.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ke=F.toneMapping);const Ge=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,Mn=Ge!==void 0?Ge.length:0,Ht=ut.get(st),ln=w.state.lights;if(ge===!0&&(xe===!0||b!==ct)){const be=b===ct&&st.id===nt;kt.setState(st,b,be)}let we=!1;st.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==ln.state.version||Ht.outputColorSpace!==Ot||ot.isBatchedMesh&&Ht.batching===!1||!ot.isBatchedMesh&&Ht.batching===!0||ot.isBatchedMesh&&Ht.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&Ht.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&Ht.instancing===!1||!ot.isInstancedMesh&&Ht.instancing===!0||ot.isSkinnedMesh&&Ht.skinning===!1||!ot.isSkinnedMesh&&Ht.skinning===!0||ot.isInstancedMesh&&Ht.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Ht.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Ht.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Ht.instancingMorph===!1&&ot.morphTexture!==null||Ht.envMap!==Kt||st.fog===!0&&Ht.fog!==Bt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==kt.numPlanes||Ht.numIntersection!==kt.numIntersection)||Ht.vertexAlphas!==re||Ht.vertexTangents!==ce||Ht.morphTargets!==qt||Ht.morphNormals!==Me||Ht.morphColors!==_e||Ht.toneMapping!==Ke||Ht.morphTargetsCount!==Mn||!!Ht.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,Ht.__version=st.version);let Vn=Ht.currentProgram;we===!0&&(Vn=Cr(st,X,ot),H&&st.isNodeMaterial&&H.onUpdateProgram(st,Vn,Ht));let ii=!1,Wi=!1,ve=!1;const Be=Vn.getUniforms(),$e=Ht.uniforms;if(T.useProgram(Vn.program)&&(ii=!0,Wi=!0,ve=!0),st.id!==nt&&(nt=st.id,Wi=!0),Ht.needsLights){const be=Ro(w.state.lightProbeGridArray,ot);Ht.lightProbeGrid!==be&&(Ht.lightProbeGrid=be,Wi=!0)}if(ii||ct!==b){T.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Be.setValue(J,"projectionMatrix",b.projectionMatrix),Be.setValue(J,"viewMatrix",b.matrixWorldInverse);const un=Be.map.cameraPosition;un!==void 0&&un.setValue(J,ie.setFromMatrixPosition(b.matrixWorld)),O.logarithmicDepthBuffer&&Be.setValue(J,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Be.setValue(J,"isOrthographic",b.isOrthographicCamera===!0),ct!==b&&(ct=b,Wi=!0,ve=!0)}if(Ht.needsLights&&(ln.state.sunShadowMap.length>0&&Be.setValue(J,"sunShadowMap",ln.state.sunShadowMap,pt),ln.state.directionalShadowMap.length>0&&Be.setValue(J,"directionalShadowMap",ln.state.directionalShadowMap,pt),ln.state.spotShadowMap.length>0&&Be.setValue(J,"spotShadowMap",ln.state.spotShadowMap,pt),ln.state.pointShadowMap.length>0&&Be.setValue(J,"pointShadowMap",ln.state.pointShadowMap,pt)),ot.isSkinnedMesh){Be.setOptional(J,ot,"bindMatrix"),Be.setOptional(J,ot,"bindMatrixInverse");const be=ot.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),Be.setValue(J,"boneTexture",be.boneTexture,pt))}ot.isBatchedMesh&&(Be.setOptional(J,ot,"batchingTexture"),Be.setValue(J,"batchingTexture",ot._matricesTexture,pt),Be.setOptional(J,ot,"batchingIdTexture"),Be.setValue(J,"batchingIdTexture",ot._indirectTexture,pt),Be.setOptional(J,ot,"batchingColorTexture"),ot._colorsTexture!==null&&Be.setValue(J,"batchingColorTexture",ot._colorsTexture,pt));const ai=dt.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&Q.update(ot,dt,Vn),(Wi||Ht.receiveShadow!==ot.receiveShadow)&&(Ht.receiveShadow=ot.receiveShadow,Be.setValue(J,"receiveShadow",ot.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&X.environment!==null&&($e.envMapIntensity.value=X.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=xC()),Wi){if(Be.setValue(J,"toneMappingExposure",F.toneMappingExposure),Ht.needsLights&&Gl($e,ve),Bt&&st.fog===!0&&jt.refreshFogUniforms($e,Bt),jt.refreshMaterialUniforms($e,st,ht,$,w.state.transmissionRenderTarget[b.id]),Ht.needsLights&&Ht.lightProbeGrid){const be=Ht.lightProbeGrid;$e.probesSH.value=be.texture,$e.probesMin.value.copy(be.boundingBox.min),$e.probesMax.value.copy(be.boundingBox.max),$e.probesResolution.value.copy(be.resolution)}zc.upload(J,bo(Ht),$e,pt)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(zc.upload(J,bo(Ht),$e,pt),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Be.setValue(J,"center",ot.center),Be.setValue(J,"modelViewMatrix",ot.modelViewMatrix),Be.setValue(J,"normalMatrix",ot.normalMatrix),Be.setValue(J,"modelMatrix",ot.matrixWorld),st.uniformsGroups!==void 0){const be=st.uniformsGroups;for(let un=0,ga=be.length;un<ga;un++){const Xl=be[un];Et.update(Xl,Vn),Et.bind(Xl,Vn)}}return Vn}function Gl(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.sunLights.needsUpdate=X,b.sunLightShadows.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function Vl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(b,X,dt){const st=ut.get(b);st.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),ut.get(b.texture).__webglTexture=X,ut.get(b.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:dt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,X){const dt=ut.get(b);dt.__webglFramebuffer=X,dt.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(b,X=0,dt=0){rt=b,B=X,G=dt;let st=null,ot=!1,Bt=!1;if(b){const Ot=ut.get(b);if(Ot.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(J.FRAMEBUFFER,Ot.__webglFramebuffer),gt.copy(b.viewport),bt.copy(b.scissor),At=b.scissorTest,T.viewport(gt),T.scissor(bt),T.setScissorTest(At),nt=-1;return}else if(Ot.__webglFramebuffer===void 0)pt.setupRenderTarget(b);else if(Ot.__hasExternalTextures)pt.rebindTextures(b,ut.get(b.texture).__webglTexture,ut.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const re=b.depthTexture;if(Ot.__boundDepthTexture!==re){if(re!==null&&ut.has(re)&&(b.width!==re.image.width||b.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(b)}}const Zt=b.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Bt=!0);const Kt=ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Kt[X])?st=Kt[X][dt]:st=Kt[X],ot=!0):b.samples>0&&pt.useMultisampledRTT(b)===!1?st=ut.get(b).__webglMultisampledFramebuffer:Array.isArray(Kt)?st=Kt[dt]:st=Kt,gt.copy(b.viewport),bt.copy(b.scissor),At=b.scissorTest}else gt.copy(vt).multiplyScalar(ht).floor(),bt.copy(wt).multiplyScalar(ht).floor(),At=Xe;if(dt!==0&&(st=K),T.bindFramebuffer(J.FRAMEBUFFER,st)&&T.drawBuffers(b,st),T.viewport(gt),T.scissor(bt),T.setScissorTest(At),ot){const Ot=ut.get(b.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ot.__webglTexture,dt)}else if(Bt){const Ot=X;for(let Zt=0;Zt<b.textures.length;Zt++){const Kt=ut.get(b.textures[Zt]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Zt,Kt.__webglTexture,dt,Ot)}}else if(b!==null&&dt!==0){const Ot=ut.get(b.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Ot.__webglTexture,dt)}nt=-1};function vi(b){const X=ut.get(b);return(X.__readFormat!==b.format||X.__readType!==b.type)&&(X.__readFormat=b.format,X.__readType=b.type,X.__formatReadable=O.textureFormatReadable(b.format),X.__typeReadable=O.textureTypeReadable(b.type)),X}this.readRenderTargetPixels=function(b,X,dt,st,ot,Bt,Wt,Ot=0){if(!(b&&b.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Wt!==void 0&&(Zt=Zt[Wt]),Zt){T.bindFramebuffer(J.FRAMEBUFFER,Zt);try{const Kt=b.textures[Ot],re=Kt.format,ce=Kt.type;b.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ot);const qt=vi(Kt);if(qt.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qt.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-st&&dt>=0&&dt<=b.height-ot&&J.readPixels(X,dt,st,ot,Lt.convert(re),Lt.convert(ce),Bt)}finally{const Kt=rt!==null?ut.get(rt).__webglFramebuffer:null;T.bindFramebuffer(J.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(b,X,dt,st,ot,Bt,Wt,Ot=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Wt!==void 0&&(Zt=Zt[Wt]),Zt)if(X>=0&&X<=b.width-st&&dt>=0&&dt<=b.height-ot){T.bindFramebuffer(J.FRAMEBUFFER,Zt);const Kt=b.textures[Ot],re=Kt.format,ce=Kt.type;b.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ot);const qt=vi(Kt);if(qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,Me),J.bufferData(J.PIXEL_PACK_BUFFER,Bt.byteLength,J.STREAM_READ),J.readPixels(X,dt,st,ot,Lt.convert(re),Lt.convert(ce),0),J.bindBuffer(J.PIXEL_PACK_BUFFER,null);const _e=rt!==null?ut.get(rt).__webglFramebuffer:null;T.bindFramebuffer(J.FRAMEBUFFER,_e);const Ke=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await I1(J,Ke,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,Me),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,Bt),J.bindBuffer(J.PIXEL_PACK_BUFFER,null),J.deleteBuffer(Me),J.deleteSync(Ke),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,X=null,dt=0){const st=Math.pow(2,-dt),ot=Math.floor(b.image.width*st),Bt=Math.floor(b.image.height*st),Wt=X!==null?X.x:0,Ot=X!==null?X.y:0;pt.setTexture2D(b,0),J.copyTexSubImage2D(J.TEXTURE_2D,dt,0,0,Wt,Ot,ot,Bt),T.unbindTexture()},this.copyTextureToTexture=function(b,X,dt=null,st=null,ot=0,Bt=0){let Wt,Ot,Zt,Kt,re,ce,qt,Me,_e;const Ke=b.isCompressedTexture?b.mipmaps[Bt]:b.image;if(dt!==null)Wt=dt.max.x-dt.min.x,Ot=dt.max.y-dt.min.y,Zt=dt.isBox3?dt.max.z-dt.min.z:1,Kt=dt.min.x,re=dt.min.y,ce=dt.isBox3?dt.min.z:0;else{const $e=Math.pow(2,-ot);Wt=Math.floor(Ke.width*$e),Ot=Math.floor(Ke.height*$e),b.isDataArrayTexture?Zt=Ke.depth:b.isData3DTexture?Zt=Math.floor(Ke.depth*$e):Zt=1,Kt=0,re=0,ce=0}st!==null?(qt=st.x,Me=st.y,_e=st.z):(qt=0,Me=0,_e=0);const Ge=Lt.convert(X.format),Mn=Lt.convert(X.type);let Ht;X.isData3DTexture?(pt.setTexture3D(X,0),Ht=J.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(pt.setTexture2DArray(X,0),Ht=J.TEXTURE_2D_ARRAY):(pt.setTexture2D(X,0),Ht=J.TEXTURE_2D),T.activeTexture(J.TEXTURE0),T.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,X.flipY),T.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),T.pixelStorei(J.UNPACK_ALIGNMENT,X.unpackAlignment);const ln=T.getParameter(J.UNPACK_ROW_LENGTH),we=T.getParameter(J.UNPACK_IMAGE_HEIGHT),Vn=T.getParameter(J.UNPACK_SKIP_PIXELS),ii=T.getParameter(J.UNPACK_SKIP_ROWS),Wi=T.getParameter(J.UNPACK_SKIP_IMAGES);T.pixelStorei(J.UNPACK_ROW_LENGTH,Ke.width),T.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Ke.height),T.pixelStorei(J.UNPACK_SKIP_PIXELS,Kt),T.pixelStorei(J.UNPACK_SKIP_ROWS,re),T.pixelStorei(J.UNPACK_SKIP_IMAGES,ce);const ve=b.isDataArrayTexture||b.isData3DTexture,Be=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){const $e=ut.get(b),ai=ut.get(X),be=ut.get($e.__renderTarget),un=ut.get(ai.__renderTarget);T.bindFramebuffer(J.READ_FRAMEBUFFER,be.__webglFramebuffer),T.bindFramebuffer(J.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let ga=0;ga<Zt;ga++)ve&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,ut.get(b).__webglTexture,ot,ce+ga),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,ut.get(X).__webglTexture,Bt,_e+ga)),J.blitFramebuffer(Kt,re,Wt,Ot,qt,Me,Wt,Ot,J.DEPTH_BUFFER_BIT,J.NEAREST);T.bindFramebuffer(J.READ_FRAMEBUFFER,null),T.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(ot!==0||b.isRenderTargetTexture||ut.has(b)){const $e=ut.get(b),ai=ut.get(X);T.bindFramebuffer(J.READ_FRAMEBUFFER,W),T.bindFramebuffer(J.DRAW_FRAMEBUFFER,Z);for(let be=0;be<Zt;be++)ve?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,$e.__webglTexture,ot,ce+be):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,$e.__webglTexture,ot),Be?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,ai.__webglTexture,Bt,_e+be):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,ai.__webglTexture,Bt),ot!==0?J.blitFramebuffer(Kt,re,Wt,Ot,qt,Me,Wt,Ot,J.COLOR_BUFFER_BIT,J.NEAREST):Be?J.copyTexSubImage3D(Ht,Bt,qt,Me,_e+be,Kt,re,Wt,Ot):J.copyTexSubImage2D(Ht,Bt,qt,Me,Kt,re,Wt,Ot);T.bindFramebuffer(J.READ_FRAMEBUFFER,null),T.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else Be?b.isDataTexture||b.isData3DTexture?J.texSubImage3D(Ht,Bt,qt,Me,_e,Wt,Ot,Zt,Ge,Mn,Ke.data):X.isCompressedArrayTexture?J.compressedTexSubImage3D(Ht,Bt,qt,Me,_e,Wt,Ot,Zt,Ge,Ke.data):J.texSubImage3D(Ht,Bt,qt,Me,_e,Wt,Ot,Zt,Ge,Mn,Ke):b.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,Bt,qt,Me,Wt,Ot,Ge,Mn,Ke.data):b.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,Bt,qt,Me,Ke.width,Ke.height,Ge,Ke.data):J.texSubImage2D(J.TEXTURE_2D,Bt,qt,Me,Wt,Ot,Ge,Mn,Ke);T.pixelStorei(J.UNPACK_ROW_LENGTH,ln),T.pixelStorei(J.UNPACK_IMAGE_HEIGHT,we),T.pixelStorei(J.UNPACK_SKIP_PIXELS,Vn),T.pixelStorei(J.UNPACK_SKIP_ROWS,ii),T.pixelStorei(J.UNPACK_SKIP_IMAGES,Wi),Bt===0&&X.generateMipmaps&&J.generateMipmap(Ht),T.unbindTexture()},this.initRenderTarget=function(b){ut.get(b).__webglFramebuffer===void 0&&pt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?pt.setTextureCube(b,0):b.isData3DTexture?pt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?pt.setTexture2DArray(b,0):pt.setTexture2D(b,0),T.unbindTexture()},this.resetState=function(){B=0,G=0,rt=null,T.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(e),i.unpackColorSpace=De._getUnpackColorSpace()}}const vo=o=>{const e=new Image,i=new Gn(e);return i.colorSpace=pi,e.onload=()=>{i.needsUpdate=!0},e.src=o.toDataURL("image/png"),i};function So(o){const e=new Uint32Array(1);return crypto.getRandomValues(e),Promise.resolve(e[0]%o+1)}var yC=_x();function xo({isRolling:o,error:e,result:i}){return yC.createPortal($t.jsx("p",{className:"hint",children:o?"Rolling...":e||(i!==null?`You rolled ${i}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")}),document.body)}const fo=Math.PI/180,EC=3,TC=7,bC=.98,Dl=o=>1-(1-o)**3,tM=o=>new Ie().setFromEuler(new Vi(o.x*fo,o.y*fo,o.z*fo,"XYZ")),sp=o=>(o%360+540)%360-180,eM=o=>{const e=new Y(o.x,o.y,o.z),i=e.length();return i<1e-9?new Y(0,1,0):(e.divideScalar(i),o.w<0&&e.negate(),e)},AC=(o,e)=>{const i=c=>tM({x:o.x+(e.x-o.x)*Dl(c),y:o.y+(e.y-o.y)*Dl(c),z:o.z+(e.z-o.z)*Dl(c)}),r=i(bC),l=i(1);return eM(l.multiply(r.clone().invert()))},RC=(o,e,i)=>{const r=tM(o),l=eM(r.clone().invert().multiply(e)).applyQuaternion(r).normalize(),c=Math.random()*Math.PI,d=new Ie().setFromAxisAngle(l,-c).multiply(e),h=new Vi().setFromQuaternion(d,"XYZ"),p={x:h.x/fo,y:h.y/fo,z:h.z/fo},m=[];for(let g=EC;g<=TC;g++){const v=i-g;if(!(v<1))for(const y of[1,-1])for(const R of[1,-1])for(const U of[1,-1]){const M={x:o.x+y*360*g,y:o.y+R*360*v,z:o.z+U*360*i};M.x+=sp(p.x-M.x),M.y+=sp(p.y-M.y),M.z+=sp(p.z-M.z);const x=AC(o,M).dot(l);m.push({rotation:M,dot:x})}}const S=m.filter(g=>g.dot>0);return S.length>0?S[Math.floor(Math.random()*S.length)].rotation:m.reduce((g,v)=>v.dot>g.dot?v:g).rotation},ca=Math.PI/180,qS=65,YS=.5,CC=10,wC=1500,DC=750,NC=260,ZS=(o,e,i)=>Math.min(i,Math.max(e,o)),UC=o=>{const e=new Vi().setFromQuaternion(o,"XYZ");return{x:e.x/ca,y:e.y/ca,z:e.z/ca}};function Mo({fetchRoll:o,resolveTarget:e,initialRotation:i={x:0,y:0,z:0}}){const r=Te.useRef(null),l=Te.useRef({...i}),c=Te.useRef({...i}),d=Te.useRef(null),h=Te.useRef(null),p=Te.useRef(null),m=Te.useRef(!1),[S,g]=Te.useState(!1),[v,y]=Te.useState(!1),[R,U]=Te.useState(null),[M,x]=Te.useState(null),I=Te.useRef({fetchRoll:o,resolveTarget:e});I.current={fetchRoll:o,resolveTarget:e};const k=Te.useCallback(P=>{l.current=P,r.current?.rotation.set(P.x*ca,P.y*ca,P.z*ca)},[]),D=Te.useCallback((P,H)=>{p.current&&cancelAnimationFrame(p.current);const K={...l.current},W=performance.now();return new Promise(Z=>{const B=G=>{const rt=Math.min((G-W)/H,1),nt=Dl(rt);k({x:K.x+(P.x-K.x)*nt,y:K.y+(P.y-K.y)*nt,z:K.z+(P.z-K.z)*nt}),rt<1?p.current=requestAnimationFrame(B):(p.current=null,Z())};p.current=requestAnimationFrame(B)})},[k]),L=Te.useCallback((P,H)=>{p.current&&cancelAnimationFrame(p.current);const K=r.current;if(!K)return Promise.resolve();const W=K.quaternion.clone(),Z=performance.now();return new Promise(B=>{const G=rt=>{const nt=Math.min((rt-Z)/H,1);K.quaternion.slerpQuaternions(W,P,Dl(nt)),l.current=UC(K.quaternion),nt<1?p.current=requestAnimationFrame(G):(p.current=null,B())};p.current=requestAnimationFrame(G)})},[]),w=Te.useCallback(async()=>{m.current=!0,g(!0),U(null),x(null);try{const P=await I.current.fetchRoll(),H=I.current.resolveTarget(P),K=l.current,W=RC(K,H,CC);await D(W,wC),await L(H,DC),c.current=l.current,g(!1),m.current=!1,U(P)}catch(P){g(!1),m.current=!1,x(P instanceof Error?P.message:"Roll failed.")}},[L,D]),N=Te.useCallback(P=>{if(m.current)return;const H=P.currentTarget.getBoundingClientRect();d.current={centerX:H.left+H.width/2,centerY:H.top+H.height/2,halfWidth:H.width/2,halfHeight:H.height/2,nx:0,ny:0},P.currentTarget.setPointerCapture(P.pointerId),y(!0)},[]),E=Te.useCallback(P=>{const H=d.current;!H||m.current||(H.nx=ZS((P.clientX-H.centerX)/H.halfWidth,-1,1),H.ny=ZS((P.clientY-H.centerY)/H.halfHeight,-1,1),!h.current&&(h.current=requestAnimationFrame(()=>{h.current=null;const K=c.current;k({x:K.x-H.ny*qS,y:K.y+H.nx*qS,z:K.z})})))},[k]),C=Te.useCallback(()=>{const P=d.current;if(!P)return;d.current=null,y(!1),h.current&&(cancelAnimationFrame(h.current),h.current=null),Math.abs(P.nx)>=YS||Math.abs(P.ny)>=YS?w():D(c.current,NC)},[D,w]),F=Te.useCallback(()=>{p.current&&cancelAnimationFrame(p.current)},[]);return{meshRef:r,rotationRef:l,cancelAnimation:F,isRolling:S,isDragging:v,error:M,result:R,onPointerDown:N,onPointerMove:E,onPointerUp:C}}let Tr=null,Fc=0,ho=null,KS=!1;const LC=()=>KS?!1:(KS=!0,!0),OC=()=>{if(ho!==null&&(clearTimeout(ho),ho=null),Fc+=1,!Tr){const o=new wi(28,1,.1,100);o.position.set(0,0,7),o.lookAt(0,0,0);const e=new MC({alpha:!0,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setClearColor(0,0),Tr={renderer:e,camera:o}}return Tr},PC=()=>{Fc-=1,!(Fc>0||ho!==null)&&(ho=setTimeout(()=>{ho=null,!(Fc>0||!Tr)&&(Tr.renderer.domElement.remove(),Tr.renderer.dispose(),Tr.renderer.forceContextLoss(),Tr=null)},0))},nM={red:{hex:14034996,cssTop:[214,40,52],cssBottom:[140,18,28],label:"#ffffff"},green:{hex:769384,cssTop:[11,189,104],cssBottom:[9,165,90],label:"#ffffff"},white:{hex:15790320,cssTop:[240,240,240],cssBottom:[200,200,200],label:"#111827"},black:{hex:1052691,cssTop:[16,16,19],cssBottom:[3,3,5],label:"#ffffff"},blue:{hex:1785819,cssTop:[27,63,219],cssBottom:[17,38,140],label:"#ffffff"},yellow:{hex:16761856,cssTop:[255,196,0],cssBottom:[214,152,0],label:"#111827"}},Dm=[4,6,8,10,12,20],Nm=["red","yellow","green","blue","black","white"];function QS(o,e){return o[(o.indexOf(e)+1)%o.length]}const op={sides:6,color:"red",translucent:!0},IC=.87,zC=o=>o?IC:1;function FC(){const o=new URLSearchParams(window.location.search),e=Number(o.get("s")),i=Dm.includes(e)?e:op.sides,r=o.get("c")?.toLowerCase(),l=r!==void 0&&Nm.includes(r)?r:op.color,c=(o.get("translucent")??o.get("t"))?.toLowerCase(),d=c==="true"?!0:c==="false"?!1:op.translucent;return{sides:i,color:l,translucent:d}}function yo({color:o,translucent:e,meshRef:i,rotationRef:r,cancelAnimation:l,buildMesh:c}){const d=Te.useRef(null),h=Te.useRef(null),p=Te.useRef(null),m=Te.useRef(c);return m.current=c,Te.useEffect(()=>{const S=new j1,g=m.current({palette:nM[o],opacity:zC(e),translucent:e});g.rotation.set(r.current.x*ca,r.current.y*ca,r.current.z*ca),S.add(g),S.add(new MT(16777215,1)),S.add(new _T(16777215,12303291,1));const v=new xT(16777215,1);return v.position.set(3,4,5),S.add(v),i.current=g,h.current=S,()=>{l(),g.geometry.dispose(),g.material.dispose(),g.children.forEach(y=>{const R=y;R.geometry.dispose(),R.material.map?.dispose(),R.material.dispose()}),i.current=null,h.current=null}},[o,e,i,r,l]),Te.useEffect(()=>{const S=d.current;if(!S)return;const{renderer:g,camera:v}=OC(),y=()=>{const M=S.clientWidth,x=S.clientHeight;g.setSize(M,x,!1),v.aspect=M/x,v.updateProjectionMatrix()},R=new ResizeObserver(y);R.observe(S),y(),h.current&&g.render(h.current,v),LC()&&g.getContext().finish(),S.appendChild(g.domElement);const U=()=>{p.current=requestAnimationFrame(U),h.current&&g.render(h.current,v)};return U(),()=>{g.domElement.remove(),R.disconnect(),p.current&&cancelAnimationFrame(p.current),PC()}},[]),{mountRef:d}}const BC=1.01,HC=2,GC=.95,VC=1.9,XC=.07,Al=512,JS=[.246667,.5,.753333],kC=.055733,WC="#ffffff",qC=[[0,0,1],[0,1,0],[1,0,0],[-1,0,0],[0,-1,0],[0,0,-1]],YC={1:[[2,2]],2:[[1,1],[3,3]],3:[[1,1],[2,2],[3,3]],4:[[1,1],[1,3],[3,1],[3,3]],5:[[1,1],[1,3],[2,2],[3,1],[3,3]],6:[[1,1],[1,3],[2,1],[2,3],[3,1],[3,3]]},jS=(o,e,i)=>[o[0]+(e[0]-o[0])*i,o[1]+(e[1]-o[1])*i,o[2]+(e[2]-o[2])*i],ZC=o=>{const e=[],i=o/2,r=[1,-1];for(const l of[0,1,2]){const[c,d]=[0,1,2].filter(h=>h!==l);for(const h of r){const p=[[1,1],[1,-1],[-1,-1],[-1,1]].map(([S,g])=>{const v=[0,0,0];return v[l]=h,v[c]=S,v[d]=g,v}),m=[];for(let S=0;S<4;S++){const g=p[S],v=p[(S+1)%4];m.push(jS(g,v,i)),m.push(jS(v,g,i))}e.push(m)}}for(const l of r)for(const c of r)for(const d of r)e.push([[l*(1-o),c,d],[l,c*(1-o),d],[l,c,d*(1-o)]]);return e},KC=ZC(XC),QC=o=>{const e=o.reduce((l,c)=>l+c[0],0)/o.length,i=o.reduce((l,c)=>l+c[1],0)/o.length,r=o.reduce((l,c)=>l+c[2],0)/o.length;return new Y(e,i,r)},JC=(o,e)=>{const[i,r,l]=o,c=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=c[1]*d[2]-c[2]*d[1],p=c[2]*d[0]-c[0]*d[2],m=c[0]*d[1]-c[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),g=new Y(h/S,p/S,m/S);return g.dot(e)<0&&g.negate(),g},jC=o=>{const e=new Y(...o).normalize(),i=Math.abs(e.y)>.9?new Y(0,0,1):new Y(0,1,0),r=i.clone().sub(e.clone().multiplyScalar(i.dot(e))).normalize(),l=new Y().crossVectors(r,e).normalize(),c=new Je().makeBasis(l,r,e);return{normal:e,up:r,orientation:new Ie().setFromRotationMatrix(c)}},$S=qC.map(jC),$C=o=>{const e=new Y(0,0,1),i=new Ie().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Ie().setFromAxisAngle(new Y(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},tx=(o,e,i)=>{const r=document.createElement("canvas");r.width=Al,r.height=Al;const l=r.getContext("2d");if(!l)return null;const c=kC*Al;l.fillStyle=e;for(const[p,m]of YC[o]){const S=JS[m-1]*Al,g=JS[p-1]*Al;l.beginPath(),l.arc(S,g,c,0,Math.PI*2),l.fill()}const d=vo(r),h=new br({map:d,transparent:!0,side:gi,depthWrite:!1});return new pn(new pa(i,i),h)};function t2({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:r,cancelAnimation:l,isRolling:c,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=Mo({fetchRoll:()=>So(6),resolveTarget:y=>$C($S[y-1])}),{mountRef:v}=yo({color:o,translucent:e,meshRef:i,rotationRef:r,cancelAnimation:l,buildMesh:({palette:y,opacity:R,translucent:U})=>{const M=new Zn,x=[],I=[];for(const w of KC){const N=QC(w),E=JC(w,N),C=E.x,F=E.y,P=E.z,[H,K,W]=w,Z=[K[0]-H[0],K[1]-H[1],K[2]-H[2]],B=[W[0]-H[0],W[1]-H[1],W[2]-H[2]],G=Z[1]*B[2]-Z[2]*B[1],rt=Z[2]*B[0]-Z[0]*B[2],nt=Z[0]*B[1]-Z[1]*B[0],gt=G*N.x+rt*N.y+nt*N.z>=0?w:[...w].reverse();for(let bt=1;bt<gt.length-1;bt++)x.push(...gt[0],...gt[bt],...gt[bt+1]),I.push(C,F,P,C,F,P,C,F,P)}M.setAttribute("position",new hn(x,3)),M.setAttribute("normal",new hn(I,3));const k=new pn(M,new go({color:y.hex,roughness:.4,metalness:0,flatShading:!1,transparent:U,opacity:R,depthWrite:!U})),D=new Ie().setFromAxisAngle(new Y(0,1,0),Math.PI);return $S.forEach((w,N)=>{const E=N+1,C=tx(E,y.label,HC);if(!C)return;C.position.copy(w.normal).multiplyScalar(BC),C.quaternion.copy(w.orientation),C.renderOrder=1,k.add(C);const F=tx(E,WC,VC);F&&(F.renderOrder=-1,F.position.copy(w.normal).multiplyScalar(GC),F.quaternion.copy(w.orientation).multiply(D),k.add(F))}),k}});return $t.jsxs("div",{className:`stage stage--six-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(xo,{isRolling:c,error:h,result:p})]})}const ex=.8,Pa=[[.981495,.981495,.981495],[.981495,-.981495,-.981495],[-.981495,.981495,-.981495],[-.981495,-.981495,.981495]],sa=[[1,3,2],[0,2,3],[0,3,1],[0,1,2]],$p=[1,2,3,4],nx=[[-.122687,-.736122,-.122687],[-.736122,-.122687,-.122687],[-.122687,-.122687,-.736122],[-.122687,.736122,.122687],[-.736122,.122687,.122687],[-.122687,.122687,.736122],[.122687,-.122687,.736122],[.122687,-.736122,.122687],[.736122,-.122687,.122687],[.736122,.122687,-.122687],[.122687,.122687,-.736122],[.122687,.736122,-.122687]],e2=[180,180,0,180,0,180,0,180,180,0,180,180],n2={x:-177.2356,y:55.25,z:45},lp=(o,e,i)=>[o[0]+(e[0]-o[0])*i,o[1]+(e[1]-o[1])*i,o[2]+(e[2]-o[2])*i],iM=(o,e)=>{const[i,r,l]=o,c=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=c[1]*d[2]-c[2]*d[1],p=c[2]*d[0]-c[0]*d[2],m=c[0]*d[1]-c[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),g=new Y(h/S,p/S,m/S);return g.dot(e)<0&&g.negate(),g},aM=o=>{const e=o.reduce((l,c)=>l+c[0],0)/o.length,i=o.reduce((l,c)=>l+c[1],0)/o.length,r=o.reduce((l,c)=>l+c[2],0)/o.length;return new Y(e,i,r)},tm=sa.map(o=>{const e=o.map(r=>Pa[r]),i=aM(e);return{normal:iM(e,i),center:i}}),i2=.07,a2=o=>{const e=[];for(const i of sa){const r=[];for(let l=0;l<3;l++){const c=Pa[i[l]],d=Pa[i[(l+1)%3]],h=Math.hypot(d[0]-c[0],d[1]-c[1],d[2]-c[2]),p=o/h;r.push(lp(c,d,p)),r.push(lp(d,c,p))}e.push(r)}for(let i=0;i<Pa.length;i++){const r=[];for(let l=0;l<Pa.length;l++){if(l===i)continue;const c=Pa[i],d=Pa[l],h=Math.hypot(d[0]-c[0],d[1]-c[1],d[2]-c[2]);r.push(lp(c,d,o/h))}e.push(r)}return e},r2=a2(i2),s2=(o,e)=>{const i=sa[o][e],r=sa[o][(e+1)%3];for(let l=0;l<sa.length;l++)if(l!==o&&sa[l].includes(i)&&sa[l].includes(r))return $p[l];return $p[o]},o2=o=>{const{normal:e}=tm[o],i=new Ie().setFromUnitVectors(e,new Y(0,-1,0)),r=(o+1)%sa.length,l=tm[r].normal.clone().applyQuaternion(i),c=Math.atan2(l.x,l.z);return new Ie().setFromAxisAngle(new Y(0,1,0),-c).multiply(i)},l2="#ffffff",ix=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const l=vo(i),c=new br({map:l,transparent:!0,side:gi,depthWrite:!1});return new pn(new pa(ex,ex),c)};function u2({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:r,cancelAnimation:l,isRolling:c,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=Mo({fetchRoll:()=>So(4),resolveTarget:y=>o2($p.indexOf(y)),initialRotation:n2}),{mountRef:v}=yo({color:o,translucent:e,meshRef:i,rotationRef:r,cancelAnimation:l,buildMesh:({palette:y,opacity:R,translucent:U})=>{const M=new Zn,x=[],I=[];for(const w of r2){const N=w,E=aM(N),C=iM(N,E),F=C.x,P=C.y,H=C.z,[K,W,Z]=N,B=[W[0]-K[0],W[1]-K[1],W[2]-K[2]],G=[Z[0]-K[0],Z[1]-K[1],Z[2]-K[2]],rt=B[1]*G[2]-B[2]*G[1],nt=B[2]*G[0]-B[0]*G[2],ct=B[0]*G[1]-B[1]*G[0],bt=rt*E.x+nt*E.y+ct*E.z>=0?N:[...N].reverse();for(let At=1;At<bt.length-1;At++)x.push(...bt[0],...bt[At],...bt[At+1]),I.push(F,P,H,F,P,H,F,P,H)}M.setAttribute("position",new hn(x,3)),M.setAttribute("normal",new hn(I,3));const k=new pn(M,new go({color:y.hex,roughness:.4,metalness:0,flatShading:!1,transparent:U,opacity:R,depthWrite:!U})),D=new Ie().setFromAxisAngle(new Y(1,0,0),Math.PI),L=()=>{tm.forEach(({normal:w,center:N},E)=>{for(let C=0;C<3;C++){const F=E*3+C,P=s2(E,C),H=sa[E][C],K=sa[E][(C+1)%3],W=new Y().addVectors(new Y(...Pa[H]),new Y(...Pa[K])).multiplyScalar(.5),Z=N.clone().sub(W).normalize(),B=new Y().crossVectors(Z,w),G=new Ie().setFromRotationMatrix(new Je().makeBasis(B,Z,w)),rt=new Ie().setFromAxisAngle(new Y(0,0,1),e2[F]*ca),nt=ix(P,y.label);nt&&(nt.renderOrder=1,nt.position.copy(new Y(...nx[F])).addScaledVector(w,.01),nt.quaternion.copy(G),k.add(nt));const ct=ix(P,l2);ct&&(ct.renderOrder=-1,ct.position.copy(new Y(...nx[F])).addScaledVector(w,-.05),ct.quaternion.copy(G).multiply(rt).multiply(D),k.add(ct))}})};return document.fonts.load("700 160px dice-font").then(L),k}});return $t.jsxs("div",{className:`stage stage--four-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(xo,{isRolling:c,error:h,result:p})]})}const ax=1.08,rx=.864,rM=[[1,1,1],[-1,1,1],[-1,1,-1],[1,1,-1],[1,-1,1],[-1,-1,1],[-1,-1,-1],[1,-1,-1]],c2=o=>{const e=new Y(...o).normalize(),i=Math.abs(e.y)>.9?new Y(0,0,1):new Y(0,1,0),r=i.clone().sub(e.clone().multiplyScalar(i.dot(e))).normalize(),l=new Y().crossVectors(r,e).normalize(),c=new Je().makeBasis(l,r,e);return{normal:e,up:r,orientation:new Ie().setFromRotationMatrix(c)}},sx=rM.map(c2),up=(o,e,i)=>[o[0]+(e[0]-o[0])*i,o[1]+(e[1]-o[1])*i,o[2]+(e[2]-o[2])*i],f2=(o,e)=>{const[i,r,l]=o,c=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=c[1]*d[2]-c[2]*d[1],p=c[2]*d[0]-c[0]*d[2],m=c[0]*d[1]-c[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),g=new Y(h/S,p/S,m/S);return g.dot(e)<0&&g.negate(),g},sM=o=>{const e=o.reduce((l,c)=>l+c[0],0)/o.length,i=o.reduce((l,c)=>l+c[1],0)/o.length,r=o.reduce((l,c)=>l+c[2],0)/o.length;return new Y(e,i,r)},d2=.07,so=1.7,ts=[[so,0,0],[-so,0,0],[0,so,0],[0,-so,0],[0,0,so],[0,0,-so]],h2=rM.map(([o,e,i])=>[o>0?0:1,e>0?2:3,i>0?4:5]),p2=o=>{const e=[];for(const i of h2){const r=[];for(let l=0;l<3;l++){const c=ts[i[l]],d=ts[i[(l+1)%3]],h=Math.hypot(d[0]-c[0],d[1]-c[1],d[2]-c[2]),p=o/h;r.push(up(c,d,p)),r.push(up(d,c,p))}e.push(r)}for(let i=0;i<ts.length;i++){const r=[];for(let p=0;p<ts.length;p++){if(Math.floor(p/2)===Math.floor(i/2))continue;const S=ts[i],g=ts[p],v=Math.hypot(g[0]-S[0],g[1]-S[1],g[2]-S[2]);r.push(up(S,g,o/v))}const l=sM(r),c=new Y(...ts[i]).normalize(),d=new Y(...r[0]).sub(l),h=new Y().crossVectors(c,d);r.sort((p,m)=>{const S=new Y(...p).sub(l),g=new Y(...m).sub(l);return Math.atan2(S.dot(h),S.dot(d))-Math.atan2(g.dot(h),g.dot(d))}),e.push(r)}return e},m2=p2(d2),g2=o=>{const e=new Y(0,0,1),i=new Ie().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Ie().setFromAxisAngle(new Y(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},_2="#ffffff",ox=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 200px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.shadowColor="rgba(0, 0, 0, 0.35)",r.shadowBlur=6,r.fillText(String(o),128,136);const l=vo(i),c=new br({map:l,transparent:!0,side:gi,depthWrite:!1});return new pn(new pa(rx,rx),c)};function v2({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:r,cancelAnimation:l,isRolling:c,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=Mo({fetchRoll:()=>So(8),resolveTarget:y=>g2(sx[y-1])}),{mountRef:v}=yo({color:o,translucent:e,meshRef:i,rotationRef:r,cancelAnimation:l,buildMesh:({palette:y,opacity:R,translucent:U})=>{const M=new Zn,x=[],I=[];for(const w of m2){const N=sM(w),E=f2(w,N),C=E.x,F=E.y,P=E.z,[H,K,W]=w,Z=[K[0]-H[0],K[1]-H[1],K[2]-H[2]],B=[W[0]-H[0],W[1]-H[1],W[2]-H[2]],G=Z[1]*B[2]-Z[2]*B[1],rt=Z[2]*B[0]-Z[0]*B[2],nt=Z[0]*B[1]-Z[1]*B[0],gt=G*N.x+rt*N.y+nt*N.z>=0?w:[...w].reverse();for(let bt=1;bt<gt.length-1;bt++)x.push(...gt[0],...gt[bt],...gt[bt+1]),I.push(C,F,P,C,F,P,C,F,P)}M.setAttribute("position",new hn(x,3)),M.setAttribute("normal",new hn(I,3));const k=new pn(M,new go({color:y.hex,roughness:.46,metalness:.08,flatShading:!0,transparent:U,opacity:R,depthWrite:!U})),D=new Ie().setFromAxisAngle(new Y(0,1,0),Math.PI),L=()=>{sx.forEach((w,N)=>{const E=N+1,C=ox(E,y.label);if(!C)return;C.position.copy(w.normal).multiplyScalar(ax),C.quaternion.copy(w.orientation),C.renderOrder=1,k.add(C);const F=ox(E,_2);F&&(F.renderOrder=-1,F.position.copy(w.normal).multiplyScalar(ax-.2),F.quaternion.copy(w.orientation).multiply(D),k.add(F))})};return document.fonts.load("700 200px dice-font").then(L),k}});return $t.jsxs("div",{className:`stage stage--eight-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(xo,{isRolling:c,error:h,result:p})]})}const lx=.77,oM=2.2,S2=.85,kc=oM*.9*S2,Mr=oM*.65,em=kc*.105573,nm=kc*.8,Nc=(kc-nm)/(kc-em),im=[...[0,1,2,3,4].map(o=>[Nc*Mr*Math.cos(o*2*Math.PI/5),nm,Nc*Mr*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Nc*Mr*Math.cos((o+.5)*2*Math.PI/5),-nm,Nc*Mr*Math.sin((o+.5)*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Mr*Math.cos(o*2*Math.PI/5),em,Mr*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Mr*Math.cos((o+.5)*2*Math.PI/5),-em,Mr*Math.sin((o+.5)*2*Math.PI/5)])],am=[[0,10,15,11,1],[1,11,16,12,2],[2,12,17,13,3],[3,13,18,14,4],[4,14,19,10,0],[5,6,16,11,15],[6,7,17,12,16],[7,8,18,13,17],[8,9,19,14,18],[9,5,15,10,19],[0,1,2,3,4],[5,6,7,8,9]],rm=[1,3,5,7,9,8,6,4,2,10],lM=(o,e)=>{const[i,r,l]=o,c=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=c[1]*d[2]-c[2]*d[1],p=c[2]*d[0]-c[0]*d[2],m=c[0]*d[1]-c[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),g=new Y(h/S,p/S,m/S);return g.dot(e)<0&&g.negate(),g},sm=o=>{const e=o.reduce((l,c)=>l+c[0],0)/o.length,i=o.reduce((l,c)=>l+c[1],0)/o.length,r=o.reduce((l,c)=>l+c[2],0)/o.length;return new Y(e,i,r)},x2=o=>{const e=am[o].map(p=>im[p]),i=sm(e),r=lM(e,i),l=Math.abs(r.y)>.9?new Y(0,0,1):new Y(0,1,0),c=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),d=new Y().crossVectors(c,r).normalize(),h=new Je().makeBasis(d,c,r);return{normal:r,up:c,orientation:new Ie().setFromRotationMatrix(h)}},ux=Array.from({length:rm.length},(o,e)=>x2(e)),M2=o=>{const e=new Y(0,0,1),i=new Ie().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Ie().setFromAxisAngle(new Y(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},y2="#ffffff",cx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 180px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o===10?0:o),128,136);const l=vo(i),c=new br({map:l,transparent:!0,side:gi,depthWrite:!1});return new pn(new pa(lx,lx),c)};function E2({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:r,cancelAnimation:l,isRolling:c,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=Mo({fetchRoll:()=>So(10),resolveTarget:y=>M2(ux[rm.indexOf(y)])}),{mountRef:v}=yo({color:o,translucent:e,meshRef:i,rotationRef:r,cancelAnimation:l,buildMesh:({palette:y,opacity:R,translucent:U})=>{const M=new Zn,x=[],I=[];for(const w of am){const N=w.map(At=>im[At]),E=sm(N),C=lM(N,E),F=C.x,P=C.y,H=C.z,[K,W,Z]=N,B=[W[0]-K[0],W[1]-K[1],W[2]-K[2]],G=[Z[0]-K[0],Z[1]-K[1],Z[2]-K[2]],rt=B[1]*G[2]-B[2]*G[1],nt=B[2]*G[0]-B[0]*G[2],ct=B[0]*G[1]-B[1]*G[0],bt=rt*E.x+nt*E.y+ct*E.z>=0?N:[...N].reverse();for(let At=1;At<bt.length-1;At++)x.push(...bt[0],...bt[At],...bt[At+1]),I.push(F,P,H,F,P,H,F,P,H)}M.setAttribute("position",new hn(x,3)),M.setAttribute("normal",new hn(I,3));const k=new pn(M,new go({color:y.hex,roughness:.4,metalness:0,flatShading:!1,transparent:U,opacity:R,depthWrite:!U})),D=new Ie().setFromAxisAngle(new Y(0,1,0),Math.PI),L=()=>{ux.forEach((w,N)=>{const E=rm[N],C=cx(E,y.label);if(!C)return;const F=sm(am[N].map(H=>im[H]));C.position.copy(F),C.position.addScaledVector(w.normal,.01),C.quaternion.copy(w.orientation),C.renderOrder=1,k.add(C);const P=cx(E,y2);P&&(P.renderOrder=-1,P.position.copy(F),P.position.addScaledVector(w.normal,-.05),P.quaternion.copy(w.orientation).multiply(D),k.add(P))})};return document.fonts.load("700 180px dice-font").then(L),k}});return $t.jsxs("div",{className:`stage stage--ten-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(xo,{isRolling:c,error:h,result:p})]})}const fx=1,om=[[.981495,.981495,.981495],[.981495,.981495,-.981495],[.981495,-.981495,.981495],[.981495,-.981495,-.981495],[-.981495,.981495,.981495],[-.981495,.981495,-.981495],[-.981495,-.981495,.981495],[-.981495,-.981495,-.981495],[0,.606598,1.588093],[0,.606598,-1.588093],[0,-.606598,1.588093],[0,-.606598,-1.588093],[.606598,1.588093,0],[.606598,-1.588093,0],[-.606598,1.588093,0],[-.606598,-1.588093,0],[1.588093,0,.606598],[1.588093,0,-.606598],[-1.588093,0,.606598],[-1.588093,0,-.606598]],lm=[[14,12,1,9,5],[4,8,0,12,14],[1,12,0,16,17],[19,18,4,14,5],[7,19,5,9,11],[11,9,1,17,3],[2,16,0,8,10],[10,8,4,18,6],[17,16,2,13,3],[7,15,6,18,19],[7,11,3,13,15],[15,13,2,10,6]],um=[1,2,3,4,5,6,8,7,9,10,11,12],uM=(o,e)=>{const[i,r,l]=o,c=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=c[1]*d[2]-c[2]*d[1],p=c[2]*d[0]-c[0]*d[2],m=c[0]*d[1]-c[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),g=new Y(h/S,p/S,m/S);return g.dot(e)<0&&g.negate(),g},cm=o=>{const e=o.reduce((l,c)=>l+c[0],0)/o.length,i=o.reduce((l,c)=>l+c[1],0)/o.length,r=o.reduce((l,c)=>l+c[2],0)/o.length;return new Y(e,i,r)},T2=o=>{const e=lm[o].map(p=>om[p]),i=cm(e),r=uM(e,i),l=Math.abs(r.y)>.9?new Y(0,0,1):new Y(0,1,0),c=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),d=new Y().crossVectors(c,r).normalize(),h=new Je().makeBasis(d,c,r);return{normal:r,up:c,orientation:new Ie().setFromRotationMatrix(h)}},dx=Array.from({length:um.length},(o,e)=>T2(e)),b2=o=>{const e=new Y(0,0,1),i=new Ie().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Ie().setFromAxisAngle(new Y(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},A2="#ffffff",hx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const l=vo(i),c=new br({map:l,transparent:!0,side:gi,depthWrite:!1});return new pn(new pa(fx,fx),c)};function R2({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:r,cancelAnimation:l,isRolling:c,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=Mo({fetchRoll:()=>So(12),resolveTarget:y=>b2(dx[um.indexOf(y)])}),{mountRef:v}=yo({color:o,translucent:e,meshRef:i,rotationRef:r,cancelAnimation:l,buildMesh:({palette:y,opacity:R,translucent:U})=>{const M=new Zn,x=[],I=[];for(const w of lm){const N=w.map(At=>om[At]),E=cm(N),C=uM(N,E),F=C.x,P=C.y,H=C.z,[K,W,Z]=N,B=[W[0]-K[0],W[1]-K[1],W[2]-K[2]],G=[Z[0]-K[0],Z[1]-K[1],Z[2]-K[2]],rt=B[1]*G[2]-B[2]*G[1],nt=B[2]*G[0]-B[0]*G[2],ct=B[0]*G[1]-B[1]*G[0],bt=rt*E.x+nt*E.y+ct*E.z>=0?N:[...N].reverse();for(let At=1;At<bt.length-1;At++)x.push(...bt[0],...bt[At],...bt[At+1]),I.push(F,P,H,F,P,H,F,P,H)}M.setAttribute("position",new hn(x,3)),M.setAttribute("normal",new hn(I,3));const k=new pn(M,new go({color:y.hex,roughness:.4,metalness:0,flatShading:!1,transparent:U,opacity:R,depthWrite:!U})),D=new Ie().setFromAxisAngle(new Y(0,1,0),Math.PI),L=()=>{dx.forEach((w,N)=>{const E=um[N],C=hx(E,y.label);if(!C)return;const F=cm(lm[N].map(H=>om[H]));C.position.copy(F),C.position.addScaledVector(w.normal,.01),C.quaternion.copy(w.orientation),C.renderOrder=1,k.add(C);const P=hx(E,A2);P&&(P.renderOrder=-1,P.position.copy(F),P.position.addScaledVector(w.normal,-.05),P.quaternion.copy(w.orientation).multiply(D),k.add(P))})};return document.fonts.load("700 160px dice-font").then(L),k}});return $t.jsxs("div",{className:`stage stage--twelve-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(xo,{isRolling:c,error:h,result:p})]})}const px=.9,fm=[[0,.893743,1.446106],[0,.893743,-1.446106],[0,-.893743,1.446106],[0,-.893743,-1.446106],[.893743,1.446106,0],[.893743,-1.446106,0],[-.893743,1.446106,0],[-.893743,-1.446106,0],[1.446106,0,.893743],[1.446106,0,-.893743],[-1.446106,0,.893743],[-1.446106,0,-.893743]],dm=[[6,4,1],[0,4,6],[11,6,1],[1,4,9],[8,4,0],[0,6,10],[4,8,9],[11,10,6],[1,3,11],[9,3,1],[0,2,8],[10,2,0],[9,8,5],[7,10,11],[3,7,11],[9,5,3],[2,5,8],[10,7,2],[3,5,7],[7,5,2]],hm=[1,2,3,4,5,6,7,8,9,10,12,11,13,14,16,15,18,17,19,20],cM=(o,e)=>{const[i,r,l]=o,c=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=c[1]*d[2]-c[2]*d[1],p=c[2]*d[0]-c[0]*d[2],m=c[0]*d[1]-c[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),g=new Y(h/S,p/S,m/S);return g.dot(e)<0&&g.negate(),g},pm=o=>{const e=o.reduce((l,c)=>l+c[0],0)/o.length,i=o.reduce((l,c)=>l+c[1],0)/o.length,r=o.reduce((l,c)=>l+c[2],0)/o.length;return new Y(e,i,r)},C2=o=>{const e=dm[o].map(p=>fm[p]),i=pm(e),r=cM(e,i),l=Math.abs(r.y)>.9?new Y(0,0,1):new Y(0,1,0),c=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),d=new Y().crossVectors(c,r).normalize(),h=new Je().makeBasis(d,c,r);return{normal:r,up:c,orientation:new Ie().setFromRotationMatrix(h)}},mx=Array.from({length:hm.length},(o,e)=>C2(e)),w2=o=>{const e=new Y(0,0,1),i=new Ie().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Ie().setFromAxisAngle(new Y(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},D2="#ffffff",gx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const l=vo(i),c=new br({map:l,transparent:!0,side:gi,depthWrite:!1});return new pn(new pa(px,px),c)};function N2({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:r,cancelAnimation:l,isRolling:c,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=Mo({fetchRoll:()=>So(20),resolveTarget:y=>w2(mx[hm.indexOf(y)])}),{mountRef:v}=yo({color:o,translucent:e,meshRef:i,rotationRef:r,cancelAnimation:l,buildMesh:({palette:y,opacity:R,translucent:U})=>{const M=new Zn,x=[],I=[];for(const w of dm){const N=w.map(At=>fm[At]),E=pm(N),C=cM(N,E),F=C.x,P=C.y,H=C.z,[K,W,Z]=N,B=[W[0]-K[0],W[1]-K[1],W[2]-K[2]],G=[Z[0]-K[0],Z[1]-K[1],Z[2]-K[2]],rt=B[1]*G[2]-B[2]*G[1],nt=B[2]*G[0]-B[0]*G[2],ct=B[0]*G[1]-B[1]*G[0],bt=rt*E.x+nt*E.y+ct*E.z>=0?N:[...N].reverse();for(let At=1;At<bt.length-1;At++)x.push(...bt[0],...bt[At],...bt[At+1]),I.push(F,P,H,F,P,H,F,P,H)}M.setAttribute("position",new hn(x,3)),M.setAttribute("normal",new hn(I,3));const k=new pn(M,new go({color:y.hex,roughness:.4,metalness:0,flatShading:!1,transparent:U,opacity:R,depthWrite:!U})),D=new Ie().setFromAxisAngle(new Y(0,1,0),Math.PI),L=()=>{mx.forEach((w,N)=>{const E=hm[N],C=gx(E,y.label);if(!C)return;const F=pm(dm[N].map(H=>fm[H]));C.position.copy(F),C.position.addScaledVector(w.normal,.01),C.quaternion.copy(w.orientation),C.renderOrder=1,k.add(C);const P=gx(E,D2);P&&(P.renderOrder=-1,P.position.copy(F),P.position.addScaledVector(w.normal,-.05),P.quaternion.copy(w.orientation).multiply(D),k.add(P))})};return document.fonts.load("700 160px dice-font").then(L),k}});return $t.jsxs("div",{className:`stage stage--twenty-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(xo,{isRolling:c,error:h,result:p})]})}function U2({sides:o=6,color:e="red",translucent:i=!0}){switch(o){case 4:return $t.jsx(u2,{color:e,translucent:i});case 6:return $t.jsx(t2,{color:e,translucent:i});case 8:return $t.jsx(v2,{color:e,translucent:i});case 10:return $t.jsx(E2,{color:e,translucent:i});case 12:return $t.jsx(R2,{color:e,translucent:i});case 20:return $t.jsx(N2,{color:e,translucent:i});default:return null}}const L2=[0,45,90,135];function O2({isOpen:o,onClick:e,ref:i}){return $t.jsx("button",{ref:i,type:"button",className:"icon-button settings-button","aria-label":"Settings","aria-haspopup":"dialog","aria-expanded":o,onClick:e,children:$t.jsxs("span",{className:"settings-button__cog","aria-hidden":"true",children:[L2.map(r=>$t.jsx("span",{className:`settings-button__tooth settings-button__tooth--${r}`},r)),$t.jsx("span",{className:"settings-button__hub"})]})})}const P2='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';function I2({sides:o,color:e,translucent:i,onSettingsChange:r,onClose:l}){const c=Te.useRef(null),d=Te.useRef(null);return Te.useEffect(()=>{d.current?.focus();const h=p=>{if(p.key==="Escape"){l();return}if(p.key!=="Tab")return;const m=c.current;if(!m)return;const S=Array.from(m.querySelectorAll(P2));if(S.length===0)return;const g=S[0],v=S[S.length-1],y=document.activeElement;if(!m.contains(y)){p.preventDefault(),(p.shiftKey?v:g).focus();return}p.shiftKey&&y===g?(p.preventDefault(),v.focus()):!p.shiftKey&&y===v&&(p.preventDefault(),g.focus())};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[l]),$t.jsxs("div",{ref:c,className:"settings-dialog",role:"dialog","aria-modal":"true","aria-label":"Settings",children:[$t.jsxs("div",{className:"settings-dialog__content",children:[$t.jsx("fieldset",{className:"sides-picker","aria-label":"Sides",children:$t.jsx("div",{className:"sides-picker__options",children:Dm.map((h,p)=>$t.jsxs(Te.Fragment,{children:[p>0&&$t.jsx("span",{className:"sides-picker__divider","aria-hidden":"true"}),$t.jsxs("span",{className:"sides-picker__option",children:[$t.jsx("input",{className:"sides-picker__input",type:"radio",name:"sides",id:`sides-${h}`,value:h,checked:o===h,onChange:()=>r({sides:h})}),$t.jsx("label",{className:"sides-picker__label",htmlFor:`sides-${h}`,children:h})]})]},h))})}),$t.jsx("fieldset",{className:"color-picker","aria-label":"Color",children:$t.jsx("div",{className:"color-picker__options",children:Nm.map(h=>$t.jsxs("span",{className:"color-picker__option",children:[$t.jsx("input",{className:"color-picker__input",type:"radio",name:"color",id:`color-${h}`,value:h,checked:e===h,"aria-label":h,onChange:()=>r({color:h})}),$t.jsx("label",{className:"color-picker__label",htmlFor:`color-${h}`,style:{backgroundColor:`rgb(${nM[h].cssTop.join(" ")})`}})]},h))})}),$t.jsxs("label",{className:"translucent-toggle",children:[$t.jsx("input",{className:"translucent-toggle__input",type:"checkbox",checked:i,onChange:h=>r({translucent:h.target.checked})}),$t.jsx("span",{className:"translucent-toggle__text",children:"Translucent"}),$t.jsx("span",{className:"translucent-toggle__track","aria-hidden":"true",children:$t.jsx("span",{className:"translucent-toggle__knob"})})]})]}),$t.jsx("button",{ref:d,type:"button",className:"icon-button settings-dialog__close","aria-label":"Close",onClick:l,children:$t.jsxs("span",{className:"settings-dialog__x","aria-hidden":"true",children:[$t.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--45"}),$t.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--135"})]})})]})}function z2(){const[o,e]=Te.useState(()=>FC()),[i,r]=Te.useState(!1),l=Te.useRef(null),c=Te.useCallback(h=>{e(p=>({...p,...h}))},[]),d=Te.useCallback(()=>{r(!1),l.current?.focus()},[]);return Te.useEffect(()=>{const h=p=>{if(i||p.ctrlKey||p.altKey||p.metaKey)return;const m=p.key.toLowerCase();m==="s"?e(S=>({...S,sides:QS(Dm,S.sides)})):m==="c"?e(S=>({...S,color:QS(Nm,S.color)})):m==="t"&&e(S=>({...S,translucent:!S.translucent}))};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[i]),$t.jsxs($t.Fragment,{children:[$t.jsx(O2,{ref:l,isOpen:i,onClick:()=>r(!0)}),i&&$t.jsx(I2,{sides:o.sides,color:o.color,translucent:o.translucent,onSettingsChange:c,onClose:d}),$t.jsx(U2,{sides:o.sides,color:o.color,translucent:o.translucent})]})}const fM=document.getElementById("root");if(!fM)throw new Error("Root element was not found.");$E.createRoot(fM).render($t.jsx(Te.StrictMode,{children:$t.jsx(z2,{})}));

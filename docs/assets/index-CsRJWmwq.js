(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var wh={exports:{}},bl={};var Zv;function jE(){if(Zv)return bl;Zv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return bl.Fragment=e,bl.jsx=i,bl.jsxs=i,bl}var Kv;function $E(){return Kv||(Kv=1,wh.exports=jE()),wh.exports}var te=$E(),Dh={exports:{}},oe={};var Qv;function t1(){if(Qv)return oe;Qv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),E=Symbol.iterator;function R(H){return H===null||typeof H!="object"?null:(H=E&&H[E]||H["@@iterator"],typeof H=="function"?H:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,M={};function L(H,lt,Et){this.props=H,this.context=lt,this.refs=M,this.updater=Et||C}L.prototype.isReactComponent={},L.prototype.setState=function(H,lt){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,lt,"setState")},L.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function X(){}X.prototype=L.prototype;function D(H,lt,Et){this.props=H,this.context=lt,this.refs=M,this.updater=Et||C}var w=D.prototype=new X;w.constructor=D,x(w,L.prototype),w.isPureReactComponent=!0;var U=Array.isArray;function z(){}var T={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function P(H,lt,Et){var et=Et.ref;return{$$typeof:o,type:H,key:lt,ref:et!==void 0?et:null,props:Et}}function I(H,lt){return P(H.type,lt,H.props)}function F(H){return typeof H=="object"&&H!==null&&H.$$typeof===o}function W(H){var lt={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(Et){return lt[Et]})}var G=/\/+/g;function Y(H,lt){return typeof H=="object"&&H!==null&&H.key!=null?W(""+H.key):lt.toString(36)}function V(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(z,z):(H.status="pending",H.then(function(lt){H.status==="pending"&&(H.status="fulfilled",H.value=lt)},function(lt){H.status==="pending"&&(H.status="rejected",H.reason=lt)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function k(H,lt,Et,et,pt){var bt=typeof H;(bt==="undefined"||bt==="boolean")&&(H=null);var Ft=!1;if(H===null)Ft=!0;else switch(bt){case"bigint":case"string":case"number":Ft=!0;break;case"object":switch(H.$$typeof){case o:case e:Ft=!0;break;case S:return Ft=H._init,k(Ft(H._payload),lt,Et,et,pt)}}if(Ft)return pt=pt(H),Ft=et===""?"."+Y(H,0):et,U(pt)?(Et="",Ft!=null&&(Et=Ft.replace(G,"$&/")+"/"),k(pt,lt,Et,"",function(Xe){return Xe})):pt!=null&&(F(pt)&&(pt=I(pt,Et+(pt.key==null||H&&H.key===pt.key?"":(""+pt.key).replace(G,"$&/")+"/")+Ft)),lt.push(pt)),1;Ft=0;var vt=et===""?".":et+":";if(U(H))for(var Rt=0;Rt<H.length;Rt++)et=H[Rt],bt=vt+Y(et,Rt),Ft+=k(et,lt,Et,bt,pt);else if(Rt=R(H),typeof Rt=="function")for(H=Rt.call(H),Rt=0;!(et=H.next()).done;)et=et.value,bt=vt+Y(et,Rt++),Ft+=k(et,lt,Et,bt,pt);else if(bt==="object"){if(typeof H.then=="function")return k(V(H),lt,Et,et,pt);throw lt=String(H),Error("Objects are not valid as a React child (found: "+(lt==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":lt)+"). If you meant to render a collection of children, use an array instead.")}return Ft}function tt(H,lt,Et){if(H==null)return H;var et=[],pt=0;return k(H,et,"","",function(bt){return lt.call(Et,bt,pt++)}),et}function Q(H){if(H._status===-1){var lt=H._result,Et=lt();Et.then(function(et){(H._status===0||H._status===-1)&&(H._status=1,H._result=et,Et.status===void 0&&(Et.status="fulfilled",Et.value=et))},function(et){(H._status===0||H._status===-1)&&(H._status=2,H._result=et,Et.status===void 0&&(Et.status="rejected",Et.reason=et))}),H._status===-1&&(H._status=0,H._result=Et)}if(H._status===1)return H._result.default;throw H._result}var at=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var lt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(lt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)};function gt(H){var lt=T.T,Et={};Et.types=lt!==null?lt.types:null,T.T=Et;try{var et=H(),pt=T.S;pt!==null&&pt(Et,et),typeof et=="object"&&et!==null&&typeof et.then=="function"&&et.then(z,at)}catch(bt){at(bt)}finally{lt!==null&&Et.types!==null&&(lt.types=Et.types),T.T=lt}}function wt(H){var lt=T.T;if(lt!==null){var Et=lt.types;Et===null?lt.types=[H]:Et.indexOf(H)===-1&&Et.push(H)}else gt(wt.bind(null,H))}var Nt={map:tt,forEach:function(H,lt,Et){tt(H,function(){lt.apply(this,arguments)},Et)},count:function(H){var lt=0;return tt(H,function(){lt++}),lt},toArray:function(H){return tt(H,function(lt){return lt})||[]},only:function(H){if(!F(H))throw Error("React.Children.only expected to receive a single React element child.");return H}};return oe.Activity=g,oe.Children=Nt,oe.Component=L,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=D,oe.StrictMode=r,oe.Suspense=p,oe.ViewTransition=v,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,oe.__COMPILER_RUNTIME={__proto__:null,c:function(H){return T.H.useMemoCache(H)}},oe.addTransitionType=wt,oe.cache=function(H){return function(){return H.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(H,lt,Et){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var et=x({},H.props),pt=H.key;if(lt!=null)for(bt in lt.key!==void 0&&(pt=""+lt.key),lt)!N.call(lt,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&lt.ref===void 0||(et[bt]=lt[bt]);var bt=arguments.length-2;if(bt===1)et.children=Et;else if(1<bt){for(var Ft=Array(bt),vt=0;vt<bt;vt++)Ft[vt]=arguments[vt+2];et.children=Ft}return P(H.type,pt,et)},oe.createContext=function(H){return H={$$typeof:d,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:u,_context:H},H},oe.createElement=function(H,lt,Et){var et,pt={},bt=null;if(lt!=null)for(et in lt.key!==void 0&&(bt=""+lt.key),lt)N.call(lt,et)&&et!=="key"&&et!=="__self"&&et!=="__source"&&(pt[et]=lt[et]);var Ft=arguments.length-2;if(Ft===1)pt.children=Et;else if(1<Ft){for(var vt=Array(Ft),Rt=0;Rt<Ft;Rt++)vt[Rt]=arguments[Rt+2];pt.children=vt}if(H&&H.defaultProps)for(et in Ft=H.defaultProps,Ft)pt[et]===void 0&&(pt[et]=Ft[et]);return P(H,bt,pt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(H){return{$$typeof:h,render:H}},oe.isValidElement=F,oe.lazy=function(H){return{$$typeof:S,_payload:{_status:-1,_result:H},_init:Q}},oe.memo=function(H,lt){return{$$typeof:m,type:H,compare:lt===void 0?null:lt}},oe.startTransition=gt,oe.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},oe.use=function(H){return T.H.use(H)},oe.useActionState=function(H,lt,Et){return T.H.useActionState(H,lt,Et)},oe.useCallback=function(H,lt){return T.H.useCallback(H,lt)},oe.useContext=function(H){return T.H.useContext(H)},oe.useDebugValue=function(){},oe.useDeferredValue=function(H,lt){return T.H.useDeferredValue(H,lt)},oe.useEffect=function(H,lt){return T.H.useEffect(H,lt)},oe.useEffectEvent=function(H){return T.H.useEffectEvent(H)},oe.useId=function(){return T.H.useId()},oe.useImperativeHandle=function(H,lt,Et){return T.H.useImperativeHandle(H,lt,Et)},oe.useInsertionEffect=function(H,lt){return T.H.useInsertionEffect(H,lt)},oe.useLayoutEffect=function(H,lt){return T.H.useLayoutEffect(H,lt)},oe.useMemo=function(H,lt){return T.H.useMemo(H,lt)},oe.useOptimistic=function(H,lt){return T.H.useOptimistic(H,lt)},oe.useReducer=function(H,lt,Et){return T.H.useReducer(H,lt,Et)},oe.useRef=function(H){return T.H.useRef(H)},oe.useState=function(H){return T.H.useState(H)},oe.useSyncExternalStore=function(H,lt,Et){return T.H.useSyncExternalStore(H,lt,Et)},oe.useTransition=function(){return T.H.useTransition()},oe.version="19.3.0",oe}var Jv;function Em(){return Jv||(Jv=1,Dh.exports=t1()),Dh.exports}var $t=Em(),Nh={exports:{}},Al={},Uh={exports:{}},Lh={};var jv;function e1(){return jv||(jv=1,(function(o){function e(V,k){var tt=V.length;V.push(k);t:for(;0<tt;){var Q=tt-1>>>1,at=V[Q];if(0<l(at,k))V[Q]=k,V[tt]=at,tt=Q;else break t}}function i(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var k=V[0],tt=V.pop();if(tt!==k){V[0]=tt;t:for(var Q=0,at=V.length,gt=at>>>1;Q<gt;){var wt=2*(Q+1)-1,Nt=V[wt],H=wt+1,lt=V[H];if(0>l(Nt,tt))H<at&&0>l(lt,Nt)?(V[Q]=lt,V[H]=tt,Q=H):(V[Q]=Nt,V[wt]=tt,Q=wt);else if(H<at&&0>l(lt,tt))V[Q]=lt,V[H]=tt,Q=H;else break t}}return k}function l(V,k){var tt=V.sortIndex-k.sortIndex;return tt!==0?tt:V.id-k.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],S=1,g=null,v=3,E=!1,R=!1,C=!1,x=!1,M=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function D(V){for(var k=i(m);k!==null;){if(k.callback===null)r(m);else if(k.startTime<=V)r(m),k.sortIndex=k.expirationTime,e(p,k);else break;k=i(m)}}function w(V){if(C=!1,D(V),!R)if(i(p)!==null)R=!0,U||(U=!0,F());else{var k=i(m);k!==null&&Y(w,k.startTime-V)}}var U=!1,z=-1,T=5,N=-1;function P(){return x?!0:!(o.unstable_now()-N<T)}function I(){if(x=!1,U){var V=o.unstable_now();N=V;var k=!0;try{t:{R=!1,C&&(C=!1,L(z),z=-1),E=!0;var tt=v;try{e:{for(D(V),g=i(p);g!==null&&!(g.expirationTime>V&&P());){var Q=g.callback;if(typeof Q=="function"){g.callback=null,v=g.priorityLevel;var at=Q(g.expirationTime<=V);if(V=o.unstable_now(),typeof at=="function"){g.callback=at,D(V),k=!0;break e}g===i(p)&&r(p),D(V)}else r(p);g=i(p)}if(g!==null)k=!0;else{var gt=i(m);gt!==null&&Y(w,gt.startTime-V),k=!1}}break t}finally{g=null,v=tt,E=!1}k=void 0}}finally{k?F():U=!1}}}var F;if(typeof X=="function")F=function(){X(I)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,G=W.port2;W.port1.onmessage=I,F=function(){G.postMessage(null)}}else F=function(){M(I,0)};function Y(V,k){z=M(function(){V(o.unstable_now())},k)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(V){switch(v){case 1:case 2:case 3:var k=3;break;default:k=v}var tt=v;v=k;try{return V()}finally{v=tt}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(V,k){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var tt=v;v=V;try{return k()}finally{v=tt}},o.unstable_scheduleCallback=function(V,k,tt){var Q=o.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?Q+tt:Q):tt=Q,V){case 1:var at=-1;break;case 2:at=250;break;case 5:at=1073741823;break;case 4:at=1e4;break;default:at=5e3}return at=tt+at,V={id:S++,callback:k,priorityLevel:V,startTime:tt,expirationTime:at,sortIndex:-1},tt>Q?(V.sortIndex=tt,e(m,V),i(p)===null&&V===i(m)&&(C?(L(z),z=-1):C=!0,Y(w,tt-Q))):(V.sortIndex=at,e(p,V),R||E||(R=!0,U||(U=!0,F()))),V},o.unstable_shouldYield=P,o.unstable_wrapCallback=function(V){var k=v;return function(){var tt=v;v=k;try{return V.apply(this,arguments)}finally{v=tt}}}})(Lh)),Lh}var $v;function n1(){return $v||($v=1,Uh.exports=e1()),Uh.exports}var Oh={exports:{}},In={};var tS;function i1(){if(tS)return In;tS=1;var o=Em();function e(S){var g="https://react.dev/errors/"+S;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+S+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(S,g,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:E==null?null:E===d?d:""+E,children:S,containerInfo:g,implementation:v}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(S,g){if(S==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,In.browser=function(S){return{$$typeof:u,_reason:S}},In.createPortal=function(S,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return h(S,g,null,v)},In.flushSync=function(S){var g=p.T,v=r.p;try{if(p.T=null,r.p=2,S)return S()}finally{p.T=g,r.p=v,r.d.f()}},In.preconnect=function(S,g){typeof S=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(S,g))},In.prefetchDNS=function(S){typeof S=="string"&&r.d.D(S)},In.preinit=function(S,g){if(typeof S=="string"&&g&&typeof g.as=="string"){var v=g.as,E=m(v,g.crossOrigin),R=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?r.d.S(S,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:R,fetchPriority:C}):v==="script"&&r.d.X(S,{crossOrigin:E,integrity:R,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},In.preinitModule=function(S,g){if(typeof S=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);r.d.M(S,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&r.d.M(S)},In.preload=function(S,g){if(typeof S=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,E=m(v,g.crossOrigin);r.d.L(S,v,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},In.preloadModule=function(S,g){if(typeof S=="string")if(g){var v=m(g.as,g.crossOrigin);r.d.m(S,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else r.d.m(S)},In.requestFormReset=function(S){r.d.r(S)},In.unstable_batchedUpdates=function(S,g){return S(g)},In.useFormState=function(S,g,v){return p.H.useFormState(S,g,v)},In.useFormStatus=function(){return p.H.useHostTransitionStatus()},In.version="19.3.0",In}var eS;function bx(){if(eS)return Oh.exports;eS=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Oh.exports=i1(),Oh.exports}var nS;function a1(){if(nS)return Al;nS=1;var o=n1(),e=Em(),i=bx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),t;if(f===s)return p(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var _=!1,A=c.child;A;){if(A===a){_=!0,a=c,s=f;break}if(A===s){_=!0,s=c,a=f;break}A=A.sibling}if(!_){for(A=f.child;A;){if(A===a){_=!0,a=f,s=c;break}if(A===s){_=!0,s=f,a=c;break}A=A.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}function g(t,n,a,s,c,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,c,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,a,s,c,f))return!0;t=t.sibling}return!1}function v(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function E(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function R(t){var n=[null,null],a=v(t);return a===null||C(n,t,a.child,{foundSelf:!1}),n}function C(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&C(t,n,a.child,s))return!0;a=a.sibling}return!1}function x(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var M=null,L=null;function X(t,n,a){return t===a?!0:t===n?(M=t,!0):!1}function D(t,n,a){return t===a?(L=t,!1):t===n?(L!==null&&(M=t),!0):!1}function w(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function U(t,n,a){for(var s=0,c=t;c;c=a(c))s++;c=0;for(var f=n;f;f=a(f))c++;for(;0<s-c;)t=a(t),s--;for(;0<c-s;)n=a(n),c--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var z=Object.assign,T=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),gt=Symbol.for("react.activity"),wt=Symbol.for("react.legacy_hidden"),Nt=Symbol.for("react.memo_cache_sentinel"),H=Symbol.for("react.view_transition"),lt=Symbol.for("react.recoverable"),Et=Symbol.iterator;function et(t){return t===null||typeof t!="object"?null:(t=Et&&t[Et]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Symbol.for("react.client.reference");function bt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case W:return"Profiler";case F:return"StrictMode";case k:return"Suspense";case tt:return"SuspenseList";case gt:return"Activity";case H:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case P:return"Portal";case Y:return t.displayName||"Context";case G:return(t._context.displayName||"Context")+".Consumer";case V:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Q:return n=t.displayName||null,n!==null?n:bt(t.type)||"Memo";case at:n=t._payload,t=t._init;try{return bt(t(n))}catch{}}return null}var Ft=Array.isArray,vt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Xe={pending:!1,data:null,method:null,action:null},me=[],_e=-1;function Me(t){return{current:t}}function ne(t){0>_e||(t.current=me[_e],me[_e]=null,_e--)}function ae(t,n){_e++,me[_e]=t.current,t.current=n}var ke=Me(null),gn=Me(null),ze=Me(null),nn=Me(null);function j(t,n){switch(ae(ze,n),ae(gn,t),ae(ke,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?iv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=iv(n),t=av(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ne(ke),ae(ke,t)}function sn(){ne(ke),ne(gn),ne(ze)}function Pe(t){var n=t.memoizedState;n!==null&&(Ws._currentValue=n.memoizedState,ae(nn,t)),n=ke.current;var a=av(n,t.type);n!==a&&(ae(gn,t),ae(ke,a))}function O(t){gn.current===t&&(ne(ke),ne(gn)),nn.current===t&&(ne(nn),Ws._currentValue=Xe)}var y,rt;function ft(t){if(y===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);y=n&&n[1]||"",rt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+y+t+rt}var mt=!1;function At(t,n){if(!t||mt)return"";mt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(Pt){var $=Pt}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(Pt){$=Pt}xt=!1;try{var ut=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),xt=!0,new t}finally{xt&&(ut!==void 0?Object.defineProperty(t.prototype,"props",ut):delete t.prototype.props)}}}else{try{throw Error()}catch(Pt){$=Pt}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(Pt){if(Pt&&$&&typeof Pt.stack=="string")return[Pt.stack,$.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],A=f[1];if(_&&A){var B=_.split(`
`),it=A.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<it.length&&!it[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===it.length)for(s=B.length-1,c=it.length-1;1<=s&&0<=c&&B[s]!==it[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==it[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==it[c]){var dt=`
`+B[s].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=s&&0<=c);break}}}finally{mt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ft(a):""}function Ut(t,n){switch(t.tag){case 26:case 27:case 5:return ft(t.type);case 16:return ft("Lazy");case 13:return t.child!==n&&n!==null?ft("Suspense Fallback"):ft("Suspense");case 19:return ft("SuspenseList");case 0:case 15:return At(t.type,!1);case 11:return At(t.type.render,!1);case 1:return At(t.type,!0);case 31:return ft("Activity");case 30:return ft("ViewTransition");default:return""}}function _t(t){try{var n="",a=null;do n+=Ut(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var yt=Object.prototype.hasOwnProperty,Dt=o.unstable_scheduleCallback,jt=o.unstable_cancelCallback,zt=o.unstable_shouldYield,It=o.unstable_requestPaint,kt=o.unstable_now,ie=o.unstable_getCurrentPriorityLevel,ce=o.unstable_ImmediatePriority,J=o.unstable_UserBlockingPriority,Ct=o.unstable_NormalPriority,Mt=o.unstable_LowPriority,Lt=o.unstable_IdlePriority,Xt=o.log,Tt=o.unstable_setDisableYieldValue,Jt=null,Vt=null;function Ce(t){if(typeof Xt=="function"&&Tt(t),Vt&&typeof Vt.setStrictMode=="function")try{Vt.setStrictMode(Jt,t)}catch{}}var ue=Math.clz32?Math.clz32:af,ai=Math.log,vi=Math.LN2;function af(t){return t>>>=0,t===0?32:31-(ai(t)/vi|0)|0}var os=256,Ar=262144,Va=4194304;function ma(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Rr(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var A=s&134217727;return A!==0?(s=A&~f,s!==0?c=ma(s):(_&=A,_!==0?c=ma(_):a||(a=A&~t,a!==0&&(c=ma(a))))):(A=s&~f,A!==0?c=ma(A):_!==0?c=ma(_):a||(a=s&~t,a!==0&&(c=ma(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Xa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ki(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-ue(a),c=1<<s;n|=t[s],a&=~c}return n}function No(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uo(){var t=Va;return Va<<=1,(Va&62914560)===0&&(Va=4194304),t}function ls(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Wi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Zl(t,n,a,s,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,B=t.expirationTimes,it=t.hiddenUpdates;for(a=_&~a;0<a;){var dt=31-ue(a),xt=1<<dt;A[dt]=0,B[dt]=-1;var $=it[dt];if($!==null)for(it[dt]=null,dt=0;dt<$.length;dt++){var ut=$[dt];ut!==null&&(ut.lane&=-536870913)}a&=~xt}s!==0&&Cr(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Cr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-ue(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Lo(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-ue(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Oo(t,n){var a=n&-n;return a=(a&42)!==0?1:Po(a),(a&(t.suspendedLanes|n))!==0?0:a}function Po(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Io(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Kl(){var t=Rt.p;return t!==0?t:(t=window.event,t===void 0?32:Gv(t.type))}function Ql(t,n){var a=Rt.p;try{return Rt.p=t,n()}finally{Rt.p=a}}var Si=Math.random().toString(36).slice(2),b="__reactFiber$"+Si,q="__reactProps$"+Si,ht="__reactContainer$"+Si,ot="__reactEvents$"+Si,ct="__reactListeners$"+Si,Bt="__reactHandles$"+Si,Wt="__reactResources$"+Si,Ot="__reactMarker$"+Si,Zt="__reactLoad$"+Si;function Kt(t){delete t[b],delete t[q],delete t[ct],delete t[Bt]}function se(t){var n;if(n=t[b])return n;for(var a=t.parentNode;a;){if(n=a[ht]||a[b]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Mv(t);t!==null;){if(a=t[b])return a;t=Mv(t)}return n}t=a,a=t.parentNode}return null}function fe(t){if(t=t[b]||t[ht]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function qt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ye(t){var n=t[Wt];return n||(n=t[Wt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ve(t){t[Ot]=!0}function Ke(t){t[Zt]=void 0}var Ge=new Set,yn={};function Ht(t,n){cn(t,n),cn(t+"Capture",n)}function cn(t,n){for(yn[t]=n,t=0;t<n.length;t++)Ge.add(n[t])}var we=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kn={},ri={};function qi(t){return yt.call(ri,t)?!0:yt.call(kn,t)?!1:we.test(t)?ri[t]=!0:(kn[t]=!0,!1)}var Se=!1;function Be(){var t=Se;return Se=!1,t}function $e(t,n,a){if(qi(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function si(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function be(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function un(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ga(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jl(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function rf(t){if(!t._valueTracker){var n=ga(t)?"checked":"value";t._valueTracker=Jl(t,n,""+t[n])}}function Wm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=ga(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var SM=/[\n"\\]/g;function xi(t){return t.replace(SM,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function sf(t,n,a,s,c,f,_,A){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+un(n)):t.value!==""+un(n)&&(t.value=""+un(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?of(t,un(t.value)):of(t,un(n)):a!=null?of(t,un(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+un(A):t.removeAttribute("name")}function qm(t,n,a,s,c,f,_,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){rf(t);return}a=a!=null?""+un(a):"",n=n!=null?""+un(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=A?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),rf(t)}function of(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function cs(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+un(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Ym(t,n,a){if(n!=null&&(n=""+un(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+un(a):""}function Zm(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Ft(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=un(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),rf(t)}function us(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var xM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Km(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||xM.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Qm(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",Se=!0);for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&(Km(t,c,s),Se=!0)}else for(var f in n)n.hasOwnProperty(f)&&Km(t,f,n[f])}function lf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var MM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jl(t){return yM.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yi(){}var cf=null;function uf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fs=null,ds=null;function Jm(t){var n=fe(t);if(n&&(t=n.stateNode)){var a=t[q]||null;t:switch(t=n.stateNode,n.type){case"input":if(sf(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[q]||null;if(!c)throw Error(r(90));sf(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Wm(s)}break t;case"textarea":Ym(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&cs(t,!!a.multiple,n,!1)}}}var ff=!1;function jm(t,n,a){if(ff)return t(n,a);ff=!0;try{var s=t(n);return s}finally{if(ff=!1,(fs!==null||ds!==null)&&(jc(),fs&&(n=fs,t=ds,ds=fs=null,Jm(n),t)))for(n=0;n<t.length;n++)Jm(t[n])}}function zo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[q]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var _a=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),df=!1;if(_a)try{var Fo={};Object.defineProperty(Fo,"passive",{get:function(){df=!0}}),window.addEventListener("test",Fo,Fo),window.removeEventListener("test",Fo,Fo)}catch{df=!1}var ka=null,hf=null,$l=null;function $m(){if($l)return $l;var t,n=hf,a=n.length,s,c="value"in ka?ka.value:ka.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===c[f-s];s++);return $l=c.slice(t,1<s?1-s:void 0)}function tc(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ec(){return!0}function t0(){return!1}function Wn(t){function n(a,s,c,f,_){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ec:t0,this.isPropagationStopped=t0,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ec)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ec)},persist:function(){},isPersistent:ec}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nc=Wn(Wa),Bo=z({},Wa,{view:0,detail:0}),EM=Wn(Bo),pf,mf,Ho,ic=z({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_f,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ho&&(Ho&&t.type==="mousemove"?(pf=t.screenX-Ho.screenX,mf=t.screenY-Ho.screenY):mf=pf=0,Ho=t),pf)},movementY:function(t){return"movementY"in t?t.movementY:mf}}),e0=Wn(ic),TM=z({},ic,{dataTransfer:0}),bM=Wn(TM),AM=z({},Bo,{relatedTarget:0}),gf=Wn(AM),RM=z({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),CM=Wn(RM),wM=z({},Wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),DM=Wn(wM),NM=z({},Wa,{data:0}),n0=Wn(NM),UM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},OM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PM(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=OM[t])?!!n[t]:!1}function _f(){return PM}var IM=z({},Bo,{key:function(t){if(t.key){var n=UM[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=tc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?LM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_f,charCode:function(t){return t.type==="keypress"?tc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zM=Wn(IM),FM=z({},ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),i0=Wn(FM),BM=z({},Wa,{submitter:0}),HM=Wn(BM),GM=z({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_f}),VM=Wn(GM),XM=z({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),kM=Wn(XM),WM=z({},ic,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qM=Wn(WM),YM=z({},Wa,{newState:0,oldState:0,source:0}),ZM=Wn(YM),KM=[9,13,27,32],vf=_a&&"CompositionEvent"in window,Go=null;_a&&"documentMode"in document&&(Go=document.documentMode);var QM=_a&&"TextEvent"in window&&!Go,a0=_a&&(!vf||Go&&8<Go&&11>=Go),r0=" ",s0=!1;function o0(t,n){switch(t){case"keyup":return KM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hs=!1;function JM(t,n){switch(t){case"compositionend":return l0(n);case"keypress":return n.which!==32?null:(s0=!0,r0);case"textInput":return t=n.data,t===r0&&s0?null:t;default:return null}}function jM(t,n){if(hs)return t==="compositionend"||!vf&&o0(t,n)?(t=$m(),$l=hf=ka=null,hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return a0&&n.locale!=="ko"?null:n.data;default:return null}}var $M={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function c0(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!$M[t.type]:n==="textarea"}function u0(t,n,a,s){fs?ds?ds.push(s):ds=[s]:fs=s,n=au(n,"onChange"),0<n.length&&(a=new nc("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Vo=null,Xo=null;function ty(t){J_(t,0)}function ac(t){var n=qt(t);if(Wm(n))return t}function f0(t,n){if(t==="change")return n}var d0=!1;if(_a){var Sf;if(_a){var xf="oninput"in document;if(!xf){var h0=document.createElement("div");h0.setAttribute("oninput","return;"),xf=typeof h0.oninput=="function"}Sf=xf}else Sf=!1;d0=Sf&&(!document.documentMode||9<document.documentMode)}function p0(){Vo&&(Vo.detachEvent("onpropertychange",m0),Xo=Vo=null)}function m0(t){if(t.propertyName==="value"&&ac(Xo)){var n=[];u0(n,Xo,t,uf(t)),jm(ty,n)}}function ey(t,n,a){t==="focusin"?(p0(),Vo=n,Xo=a,Vo.attachEvent("onpropertychange",m0)):t==="focusout"&&p0()}function ny(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ac(Xo)}function iy(t,n){if(t==="click")return ac(n)}function ay(t,n){if(t==="input"||t==="change")return ac(n)}function ry(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var oi=typeof Object.is=="function"?Object.is:ry;function ko(t,n){if(oi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!yt.call(n,c)||!oi(t[c],n[c]))return!1}return!0}function Mf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function g0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _0(t,n){var a=g0(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=g0(a)}}function v0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?v0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function S0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Mf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Mf(t.document)}return n}function yf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var sy=_a&&"documentMode"in document&&11>=document.documentMode,ps=null,Ef=null,Wo=null,Tf=!1;function x0(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tf||ps==null||ps!==Mf(s)||(s=ps,"selectionStart"in s&&yf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Wo&&ko(Wo,s)||(Wo=s,s=au(Ef,"onSelect"),0<s.length&&(n=new nc("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=ps)))}function wr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ms={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionrun:wr("Transition","TransitionRun"),transitionstart:wr("Transition","TransitionStart"),transitioncancel:wr("Transition","TransitionCancel"),transitionend:wr("Transition","TransitionEnd")},bf={},M0={};_a&&(M0=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function Dr(t){if(bf[t])return bf[t];if(!ms[t])return t;var n=ms[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in M0)return bf[t]=n[a];return t}var y0=Dr("animationend"),E0=Dr("animationiteration"),T0=Dr("animationstart"),oy=Dr("transitionrun"),ly=Dr("transitionstart"),cy=Dr("transitioncancel"),b0=Dr("transitionend"),A0=new Map,Af="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Af.push("scrollEnd");function Ni(t,n){A0.set(t,n),Ht(n,[t])}var uy=0;function va(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Pi.identifierPrefix;var a=uy++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function R0(t){if(t==null||typeof t=="string")return t;var n=null,a=Ps;if(a!==null)for(var s=0;s<a.length;s++){var c=t[a[s]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??t.default}function Sa(t,n){return t=R0(t),n=R0(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var rc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Mi=[],gs=0,Rf=0;function sc(){for(var t=gs,n=Rf=gs=0;n<t;){var a=Mi[n];Mi[n++]=null;var s=Mi[n];Mi[n++]=null;var c=Mi[n];Mi[n++]=null;var f=Mi[n];if(Mi[n++]=null,s!==null&&c!==null){var _=s.pending;_===null?c.next=c:(c.next=_.next,_.next=c),s.pending=c}f!==0&&C0(a,c,f)}}function oc(t,n,a,s){Mi[gs++]=t,Mi[gs++]=n,Mi[gs++]=a,Mi[gs++]=s,Rf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Cf(t,n,a,s){return oc(t,n,a,s),lc(t)}function Nr(t,n){return oc(t,null,null,n),lc(t)}function C0(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-ue(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function lc(t){if(50<hl)throw hl=0,Jc=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var _s={};function fy(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,n,a,s){return new fy(t,n,a,s)}function wf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xa(t,n){var a=t.alternate;return a===null?(a=Jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function w0(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function cc(t,n,a,s,c,f){var _=0;if(s=t,typeof s=="function")wf(s)&&(_=1);else if(typeof s=="string")_=BE(t,a,ke.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case gt:return t=Jn(31,a,n,c),t.elementType=gt,t.lanes=f,t;case I:return Ur(a.children,c,f,n);case F:_=8,c|=24;break;case W:return t=Jn(12,a,n,c|2),t.elementType=W,t.lanes=f,t;case k:return t=Jn(13,a,n,c),t.elementType=k,t.lanes=f,t;case tt:return t=Jn(19,a,n,c),t.elementType=tt,t.lanes=f,t;case wt:case H:return t=c|32,t=Jn(30,a,n,t),t.elementType=H,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case Y:_=10;break t;case G:_=9;break t;case V:_=11;break t;case Q:_=14;break t;case at:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Jn(_,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Ur(t,n,a,s){return t=Jn(7,t,s,n),t.lanes=a,t}function Df(t,n,a){return t=Jn(6,t,null,n),t.lanes=a,t}function D0(t){var n=Jn(18,null,null,0);return n.stateNode=t,n}function Nf(t,n,a){return n=Jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var N0=new WeakMap;function yi(t,n){if(typeof t=="object"&&t!==null){var a=N0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:_t(n)},N0.set(t,n),n)}return{value:t,source:n,stack:_t(n)}}var vs=[],Ss=0,uc=null,qo=0,Ei=[],Ti=0,qa=null,Zi=1,Ki="";function Ma(t,n){vs[Ss++]=qo,vs[Ss++]=uc,uc=t,qo=n}function U0(t,n,a){Ei[Ti++]=Zi,Ei[Ti++]=Ki,Ei[Ti++]=qa,qa=t;var s=Zi;t=Ki;var c=32-ue(s)-1;s&=~(1<<c),a+=1;var f=32-ue(n)+c;if(30<f){var _=c-c%5;f=(s&(1<<_)-1).toString(32),s>>=_,c-=_,Zi=1<<32-ue(n)+c|a<<c|s,Ki=f+t}else Zi=1<<f|a<<c|s,Ki=t}function fc(t){t.return!==null&&(Ma(t,1),U0(t,1,0))}function Uf(t){for(;t===uc;)uc=vs[--Ss],vs[Ss]=null,qo=vs[--Ss],vs[Ss]=null;for(;t===qa;)qa=Ei[--Ti],Ei[Ti]=null,Ki=Ei[--Ti],Ei[Ti]=null,Zi=Ei[--Ti],Ei[Ti]=null}function L0(t,n){Ei[Ti++]=Zi,Ei[Ti++]=Ki,Ei[Ti++]=qa,Zi=n.id,Ki=n.overflow,qa=t}var An=null,tn=null,xe=!1,Ya=null,bi=!1,Lf=Error(r(519));function Za(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yo(yi(n,t)),Lf}function O0(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[b]=t,n[q]=s,a){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(a=0;a<ml.length;a++)Te(ml[a],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),qm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),Zm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||ev(n.textContent,a)?(s.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),s.onScroll!=null&&Te("scroll",n),s.onScrollEnd!=null&&Te("scrollend",n),s.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||Za(t,!0)}function dc(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:An=An.return}}function xs(t){if(t!==An)return!1;if(!xe)return dc(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ch(t.type,t.memoizedProps)),a=!a),a&&tn&&Za(t),dc(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=xv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=xv(t)}else n===27?(n=tn,ur(t.type)?(t=vh,vh=null,tn=t):tn=n):tn=An?Ri(t.stateNode.nextSibling):null;return!0}function Lr(){tn=An=null,xe=!1}function Of(){var t=Ya;return t!==null&&(ti===null?ti=t:ti.push.apply(ti,t),Ya=null),t}function Yo(t){Ya===null?Ya=[t]:Ya.push(t)}var Pf=Me(null),Or=null,ya=null;function Ka(t,n,a){ae(Pf,n._currentValue),n._currentValue=a}function Ea(t){t._currentValue=Pf.current,ne(Pf)}function hc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function If(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var B=0;B<n.length;B++)if(A.context===n[B]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),hc(f.return,a,t),s||(_=null);break t}f=A.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),hc(_,a,t),_=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,_=c.alternate,_!==null&&(_.lanes|=a),hc(c.return,a,t),_=c.child,_=_!==null?_.sibling:null):_=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Pr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var A=c.type;oi(c.pendingProps.value,_.value)||(t!==null?t.push(A):t=[A])}}else if(c===nn.current){if(_=c.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Ws):t=[Ws])}c=c.return}return t!==null&&If(n,t,a,s),n.flags|=262144,t!==null}function pc(t){for(t=t.firstContext;t!==null;){if(!oi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ir(t){Or=t,ya=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nn(t){return P0(Or,t)}function mc(t,n){return Or===null&&Ir(t),P0(t,n)}function P0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ya===null){if(t===null)throw Error(r(308));ya=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ya=ya.next=n;return a}var dy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},hy=o.unstable_scheduleCallback,py=o.unstable_NormalPriority,_n={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zf(){return{controller:new dy,data:new Map,refCount:0}}function Zo(t){t.refCount--,t.refCount===0&&hy(py,function(){t.controller.abort()})}function I0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Ko=null;function my(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Qo=null,Ff=0,zr=0,Ms=null;function gy(t,n){if(Qo===null){var a=Qo=[];Ff=0,zr=th(),Ms={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Ff++,n.then(z0,z0),n}function z0(){if(--Ff===0&&(Ko=null,Qo!==null)){Ms!==null&&(Ms.status="fulfilled");var t=Qo;Qo=null,zr=0,Ms=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function _y(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var F0=vt.S;vt.S=function(t,n){if(D_=kt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&gy(t,n),Ko!==null)for(var a=Bs;a!==null;)I0(a,Ko),a=a.next;if(a=t.types,a!==null){for(var s=Bs;s!==null;)I0(s,a),s=s.next;if(zr!==0){s=Ko,s===null&&(s=Ko=[]);for(var c=0;c<a.length;c++){var f=a[c];s.indexOf(f)===-1&&s.push(f)}}}F0!==null&&F0(t,n)};var Fr=Me(null);function Bf(){var t=Fr.current;return t!==null?t:je.pooledCache}function gc(t,n){n===null?ae(Fr,Fr.current):ae(Fr,n.pool)}function B0(){var t=Bf();return t===null?null:{parent:_n._currentValue,pool:t}}var ys=Error(r(460)),Hf=Error(r(474)),_c=Error(r(542)),vc={then:function(){}};function H0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function G0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,X0(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(t=je,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,X0(t),t}throw Hr=n,ys}}function Br(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Hr=a,ys):a}}var Hr=null;function V0(){if(Hr===null)throw Error(r(459));var t=Hr;return Hr=null,t}function X0(t){if(t===ys||t===_c)throw Error(r(483))}var Es=null,Jo=0;function Sc(t){var n=Jo;return Jo+=1,Es===null&&(Es=[]),G0(Es,t,n)}function Qa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function xc(t,n){throw n.$$typeof===T?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function k0(t){function n(nt,Z){if(t){var st=nt.deletions;st===null?(nt.deletions=[Z],nt.flags|=16):st.push(Z)}}function a(nt,Z){if(!t)return null;for(;Z!==null;)n(nt,Z),Z=Z.sibling;return null}function s(nt){for(var Z=new Map;nt!==null;)nt.key===null?Z.set(nt.index,nt):Z.set(nt.key,nt),nt=nt.sibling;return Z}function c(nt,Z){return nt=xa(nt,Z),nt.index=0,nt.sibling=null,nt}function f(nt,Z,st){return nt.index=st,t?(st=nt.alternate,st!==null?(st=st.index,st<Z?(nt.flags|=2,Z):st):(nt.flags|=134217730,Z)):(nt.flags|=1048576,Z)}function _(nt){return t&&nt.alternate===null&&(nt.flags|=134217730),nt}function A(nt,Z,st,St){return Z===null||Z.tag!==6?(Z=Df(st,nt.mode,St),Z.return=nt,Z):(Z=c(Z,st),Z.return=nt,Z)}function B(nt,Z,st,St){var Yt=st.type;return Yt===I?(nt=dt(nt,Z,st.props.children,St,st.key),Qa(nt,st),nt):Z!==null&&(Z.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===at&&Br(Yt)===Z.type)?(Z=c(Z,st.props),Qa(Z,st),Z.return=nt,Z):(Z=cc(st.type,st.key,st.props,null,nt.mode,St),Qa(Z,st),Z.return=nt,Z)}function it(nt,Z,st,St){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==st.containerInfo||Z.stateNode.implementation!==st.implementation?(Z=Nf(st,nt.mode,St),Z.return=nt,Z):(Z=c(Z,st.children||[]),Z.return=nt,Z)}function dt(nt,Z,st,St,Yt){return Z===null||Z.tag!==7?(Z=Ur(st,nt.mode,St,Yt),Z.return=nt,Z):(Z=c(Z,st),Z.return=nt,Z)}function xt(nt,Z,st){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Df(""+Z,nt.mode,st),Z.return=nt,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case N:return st=cc(Z.type,Z.key,Z.props,null,nt.mode,st),Qa(st,Z),st.return=nt,st;case P:return Z=Nf(Z,nt.mode,st),Z.return=nt,Z;case at:return Z=Br(Z),xt(nt,Z,st)}if(Ft(Z)||et(Z))return Z=Ur(Z,nt.mode,st,null),Z.return=nt,Z;if(typeof Z.then=="function")return xt(nt,Sc(Z),st);if(Z.$$typeof===Y)return xt(nt,mc(nt,Z),st);xc(nt,Z)}return null}function $(nt,Z,st,St){var Yt=Z!==null?Z.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return Yt!==null?null:A(nt,Z,""+st,St);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case N:return st.key===Yt?B(nt,Z,st,St):null;case P:return st.key===Yt?it(nt,Z,st,St):null;case at:return st=Br(st),$(nt,Z,st,St)}if(Ft(st)||et(st))return Yt!==null?null:dt(nt,Z,st,St,null);if(typeof st.then=="function")return $(nt,Z,Sc(st),St);if(st.$$typeof===Y)return $(nt,Z,mc(nt,st),St);xc(nt,st)}return null}function ut(nt,Z,st,St,Yt){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return nt=nt.get(st)||null,A(Z,nt,""+St,Yt);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case N:return nt=nt.get(St.key===null?st:St.key)||null,B(Z,nt,St,Yt);case P:return nt=nt.get(St.key===null?st:St.key)||null,it(Z,nt,St,Yt);case at:return St=Br(St),ut(nt,Z,st,St,Yt)}if(Ft(St)||et(St))return nt=nt.get(st)||null,dt(Z,nt,St,Yt,null);if(typeof St.then=="function")return ut(nt,Z,st,Sc(St),Yt);if(St.$$typeof===Y)return ut(nt,Z,st,mc(Z,St),Yt);xc(Z,St)}return null}function Pt(nt,Z,st,St){for(var Yt=null,Re=null,ee=Z,re=Z=0,xn=null;ee!==null&&re<st.length;re++){ee.index>re?(xn=ee,ee=null):xn=ee.sibling;var Ue=$(nt,ee,st[re],St);if(Ue===null){ee===null&&(ee=xn);break}t&&ee&&Ue.alternate===null&&n(nt,ee),Z=f(Ue,Z,re),Re===null?Yt=Ue:Re.sibling=Ue,Re=Ue,ee=xn}if(re===st.length)return a(nt,ee),xe&&Ma(nt,re),Yt;if(ee===null){for(;re<st.length;re++)ee=xt(nt,st[re],St),ee!==null&&(Z=f(ee,Z,re),Re===null?Yt=ee:Re.sibling=ee,Re=ee);return xe&&Ma(nt,re),Yt}for(ee=s(ee);re<st.length;re++)xn=ut(ee,nt,re,st[re],St),xn!==null&&(t&&(Ue=xn.alternate,Ue!==null&&ee.delete(Ue.key===null?re:Ue.key)),Z=f(xn,Z,re),Re===null?Yt=xn:Re.sibling=xn,Re=xn);return t&&ee.forEach(function(mr){return n(nt,mr)}),xe&&Ma(nt,re),Yt}function Qt(nt,Z,st,St){if(st==null)throw Error(r(151));for(var Yt=null,Re=null,ee=Z,re=Z=0,xn=null,Ue=st.next();ee!==null&&!Ue.done;re++,Ue=st.next()){ee.index>re?(xn=ee,ee=null):xn=ee.sibling;var mr=$(nt,ee,Ue.value,St);if(mr===null){ee===null&&(ee=xn);break}t&&ee&&mr.alternate===null&&n(nt,ee),Z=f(mr,Z,re),Re===null?Yt=mr:Re.sibling=mr,Re=mr,ee=xn}if(Ue.done)return a(nt,ee),xe&&Ma(nt,re),Yt;if(ee===null){for(;!Ue.done;re++,Ue=st.next())Ue=xt(nt,Ue.value,St),Ue!==null&&(Z=f(Ue,Z,re),Re===null?Yt=Ue:Re.sibling=Ue,Re=Ue);return xe&&Ma(nt,re),Yt}for(ee=s(ee);!Ue.done;re++,Ue=st.next())Ue=ut(ee,nt,re,Ue.value,St),Ue!==null&&(t&&(xn=Ue.alternate,xn!==null&&ee.delete(xn.key===null?re:xn.key)),Z=f(Ue,Z,re),Re===null?Yt=Ue:Re.sibling=Ue,Re=Ue);return t&&ee.forEach(function(JE){return n(nt,JE)}),xe&&Ma(nt,re),Yt}function pe(nt,Z,st,St){if(typeof st=="object"&&st!==null&&st.type===I&&st.key===null&&st.props.ref===void 0&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case N:t:{for(var Yt=st.key;Z!==null;){if(Z.key===Yt){if(Yt=st.type,Yt===I){if(Z.tag===7){a(nt,Z.sibling),St=c(Z,st.props.children),Qa(St,st),St.return=nt,nt=St;break t}}else if(Z.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===at&&Br(Yt)===Z.type){a(nt,Z.sibling),St=c(Z,st.props),Qa(St,st),St.return=nt,nt=St;break t}a(nt,Z);break}else n(nt,Z);Z=Z.sibling}st.type===I?(St=Ur(st.props.children,nt.mode,St,st.key),Qa(St,st),St.return=nt,nt=St):(St=cc(st.type,st.key,st.props,null,nt.mode,St),Qa(St,st),St.return=nt,nt=St)}return _(nt);case P:t:{for(Yt=st.key;Z!==null;){if(Z.key===Yt)if(Z.tag===4&&Z.stateNode.containerInfo===st.containerInfo&&Z.stateNode.implementation===st.implementation){a(nt,Z.sibling),St=c(Z,st.children||[]),St.return=nt,nt=St;break t}else{a(nt,Z);break}else n(nt,Z);Z=Z.sibling}St=Nf(st,nt.mode,St),St.return=nt,nt=St}return _(nt);case at:return st=Br(st),pe(nt,Z,st,St)}if(Ft(st))return Pt(nt,Z,st,St);if(et(st)){if(Yt=et(st),typeof Yt!="function")throw Error(r(150));return st=Yt.call(st),Qt(nt,Z,st,St)}if(typeof st.then=="function")return pe(nt,Z,Sc(st),St);if(st.$$typeof===Y)return pe(nt,Z,mc(nt,st),St);xc(nt,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,Z!==null&&Z.tag===6?(a(nt,Z.sibling),St=c(Z,st),St.return=nt,nt=St):(a(nt,Z),St=Df(st,nt.mode,St),St.return=nt,nt=St),_(nt)):a(nt,Z)}return function(nt,Z,st,St){try{Jo=0;var Yt=pe(nt,Z,st,St);return Es=null,Yt}catch(ee){if(ee===ys||ee===_c)throw ee;var Re=Jn(29,ee,null,nt.mode);return Re.lanes=St,Re.return=nt,Re}}}var Gr=k0(!0),W0=k0(!1),Ja=!1;function Gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ja(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function $a(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(He&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=lc(t),C0(t,null,a),n}return oc(t,s,n,a),lc(t)}function jo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Lo(t,a)}}function Xf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var kf=!1;function $o(){if(kf){var t=Ms;if(t!==null)throw t}}function tl(t,n,a,s){kf=!1;var c=t.updateQueue;Ja=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var B=A,it=B.next;B.next=null,_===null?f=it:_.next=it,_=B;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==_&&(A===null?dt.firstBaseUpdate=it:A.next=it,dt.lastBaseUpdate=B))}if(f!==null){var xt=c.baseState;_=0,dt=it=B=null,A=f;do{var $=A.lane&-536870913,ut=$!==A.lane;if(ut?(Ae&$)===$:(s&$)===$){$!==0&&$===zr&&(kf=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Pt=t,Qt=A;$=n;var pe=a;switch(Qt.tag){case 1:if(Pt=Qt.payload,typeof Pt=="function"){xt=Pt.call(pe,xt,$);break t}xt=Pt;break t;case 3:Pt.flags=Pt.flags&-65537|128;case 0:if(Pt=Qt.payload,$=typeof Pt=="function"?Pt.call(pe,xt,$):Pt,$==null)break t;xt=z({},xt,$);break t;case 2:Ja=!0}}$=A.callback,$!==null&&(t.flags|=64,ut&&(t.flags|=8192),ut=c.callbacks,ut===null?c.callbacks=[$]:ut.push($))}else ut={lane:$,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?(it=dt=ut,B=xt):dt=dt.next=ut,_|=$;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;ut=A,A=ut.next,ut.next=null,c.lastBaseUpdate=ut,c.shared.pending=null}}while(!0);dt===null&&(B=xt),c.baseState=B,c.firstBaseUpdate=it,c.lastBaseUpdate=dt,f===null&&(c.shared.lanes=0),sr|=_,t.lanes=_,t.memoizedState=xt}}function q0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Y0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)q0(a[t],n)}var tr=Me(null),Mc=Me(0);function Z0(t,n){t=Ca,ae(Mc,t),ae(tr,n),Ca=t|n.baseLanes}function Wf(){ae(Mc,Ca),ae(tr,tr.current)}function qf(){Ca=Mc.current,ne(tr),ne(Mc)}var Un=Me(null),Bn=null;function er(t){var n=t.alternate;ae(Ln,Ln.current&1),ae(Un,t),Bn===null&&(n===null||tr.current!==null||n.memoizedState!==null)&&(Bn=t)}function Yf(t){ae(Ln,Ln.current),ae(Un,t),Bn===null&&(Bn=t)}function K0(t){t.tag===22?(ae(Ln,Ln.current),ae(Un,t),Bn===null&&(Bn=t)):nr()}function nr(){ae(Ln,Ln.current),ae(Un,Un.current)}function li(t){ne(Un),Bn===t&&(Bn=null),ne(Ln)}var Ln=Me(0);function el(t,n){ae(Un,Un.current),ae(Ln,n)}function Zf(t){ne(Ln),ne(Un),Bn===t&&(Bn=null)}function yc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||gh(a)||_h(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ta=0,he=null,Qe=null,vn=null,Ec=!1,Ts=!1,Vr=!1,Tc=0,nl=0,bs=null,vy=0;function fn(){throw Error(r(321))}function Kf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!oi(t[a],n[a]))return!1;return!0}function Qf(t,n,a,s,c,f){return Ta=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,vt.H=t===null||t.memoizedState===null?Ug:Lg,Vr=!1,f=a(s,c),Vr=!1,Ts&&(f=J0(n,a,s,c)),Q0(t),f}function Q0(t){vt.H=Nc;var n=Qe!==null&&Qe.next!==null;if(Ta=0,vn=Qe=he=null,Ec=!1,nl=0,bs=null,n)throw Error(r(300));t===null||Sn||(t=t.dependencies,t!==null&&pc(t)&&(Sn=!0))}function J0(t,n,a,s){he=t;var c=0;do{if(Ts&&(bs=null),nl=0,Ts=!1,25<=c)throw Error(r(301));if(c+=1,vn=Qe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}vt.H=Ay,f=n(a,s)}while(Ts);return f}function Sy(){var t=vt.H,n=t.useState()[0];return n=typeof n.then=="function"?il(n):n,t=t.useState()[0],(Qe!==null?Qe.memoizedState:null)!==t&&(he.flags|=1024),n}function Jf(){var t=Tc!==0;return Tc=0,t}function jf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function $f(t){if(Ec){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ec=!1}Ta=0,vn=Qe=he=null,Ts=!1,nl=Tc=0,bs=null}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?he.memoizedState=vn=t:vn=vn.next=t,vn}function hn(){if(Qe===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var n=vn===null?he.memoizedState:vn.next;if(n!==null)vn=n,Qe=t;else{if(t===null)throw he.alternate===null?Error(r(467)):Error(r(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},vn===null?he.memoizedState=vn=t:vn=vn.next=t}return vn}function bc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function il(t){var n=nl;return nl+=1,bs===null&&(bs=[]),t=G0(bs,t,n),n=he,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,vt.H=n===null||n.memoizedState===null?Ug:Lg),t}function Ac(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return il(t);if(t.$$typeof===lt)return;if(t.$$typeof===Y)return Nn(t)}throw Error(r(438,String(t)))}function td(t){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bc(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=Nt;return n.index++,a}function ba(t,n){return typeof n=="function"?n(t):n}function Rc(t){var n=hn();return ed(n,Qe,t)}function ed(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var A=_=null,B=null,it=n,dt=!1;do{var xt=it.lane&-536870913;if(xt!==it.lane?(Ae&xt)===xt:(Ta&xt)===xt){var $=it.revertLane;if($===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),xt===zr&&(dt=!0);else if((Ta&$)===$){it=it.next,$===zr&&(dt=!0);continue}else xt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},B===null?(A=B=xt,_=f):B=B.next=xt,he.lanes|=$,sr|=$;xt=it.action,Vr&&a(f,xt),f=it.hasEagerState?it.eagerState:a(f,xt)}else $={lane:xt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},B===null?(A=B=$,_=f):B=B.next=$,he.lanes|=xt,sr|=xt;it=it.next}while(it!==null&&it!==n);if(B===null?_=f:B.next=A,!oi(f,t.memoizedState)&&(Sn=!0,dt&&(a=Ms,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function nd(t){var n=hn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);oi(f,n.memoizedState)||(Sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function j0(t,n,a){var s=he,c=hn(),f=xe;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!oi((Qe||c).memoizedState,a);if(_&&(c.memoizedState=a,Sn=!0),c=c.queue,rd(eg.bind(null,s,c,t),[t]),t=c.getSnapshot!==n||_||vn!==null&&(vn.memoizedState.tag&1)!==0,As(t?9:8,{destroy:void 0},tg.bind(null,s,c,a,n),null),t){if(s.flags|=2048,je===null)throw Error(r(349));f||(Ta&127)!==0||$0(s,n,a)}return a}function $0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=bc(),he.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function tg(t,n,a,s){n.value=a,n.getSnapshot=s,ng(n)&&ig(t)}function eg(t,n,a){return a(function(){ng(n)&&ig(t)})}function ng(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!oi(t,a)}catch{return!0}}function ig(t){var n=Nr(t,2);n!==null&&ei(n,t,2)}function id(t){var n=qn();if(typeof t=="function"){var a=t;if(t=a(),Vr){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},n}function ag(t,n,a,s){return t.baseState=a,ed(t,Qe,typeof s=="function"?s:ba)}function xy(t,n,a,s,c){if(Dc(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};vt.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,rg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function rg(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=vt.T,_={};_.types=f!==null?f.types:null,vt.T=_;try{var A=a(c,s),B=vt.S;B!==null&&B(_,A),sg(t,n,A)}catch(it){ad(t,n,it)}finally{f!==null&&_.types!==null&&(f.types=_.types),vt.T=f}}else try{f=a(c,s),sg(t,n,f)}catch(it){ad(t,n,it)}}function sg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){og(t,n,s)},function(s){return ad(t,n,s)}):og(t,n,a)}function og(t,n,a){n.status="fulfilled",n.value=a,lg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,rg(t,a)))}function ad(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,lg(n),n=n.next;while(n!==s)}t.action=null}function lg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function cg(t,n){return n}function ug(t,n){if(xe){var a=je.formState;if(a!==null){t:{var s=he;if(xe){if(tn){e:{for(var c=tn,f=bi;c.nodeType!==8;){if(!f){c=null;break e}if(c=Ri(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){tn=Ri(c.nextSibling),s=c.data==="F!";break t}}Za(s)}s=!1}s&&(n=a[0])}}return a=qn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cg,lastRenderedState:n},a.queue=s,a=wg.bind(null,he,s),s.dispatch=a,s=id(!1),f=ud.bind(null,he,!1,s.queue),s=qn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=xy.bind(null,he,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function fg(t){var n=hn();return dg(n,Qe,t)}function dg(t,n,a){if(n=ed(t,n,cg)[0],t=Rc(ba)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=il(n)}catch(_){throw _===ys?_c:_}else s=n;n=hn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(he.flags|=2048,As(9,{destroy:void 0},My.bind(null,c,a),null)),[s,f,t]}function My(t,n){t.action=n}function hg(t){var n=hn(),a=Qe;if(a!==null)return dg(n,a,t);hn(),n=n.memoizedState,a=hn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function As(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=he.updateQueue,n===null&&(n=bc(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function pg(){return hn().memoizedState}function Cc(t,n,a,s){var c=qn();he.flags|=t,c.memoizedState=As(1|n,{destroy:void 0},a,s===void 0?null:s)}function wc(t,n,a,s){var c=hn();s=s===void 0?null:s;var f=c.memoizedState.inst;Qe!==null&&s!==null&&Kf(s,Qe.memoizedState.deps)?c.memoizedState=As(n,f,a,s):(he.flags|=t,c.memoizedState=As(1|n,f,a,s))}function mg(t,n){Cc(8390656,8,t,n)}function rd(t,n){wc(2048,8,t,n)}function yy(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=bc(),he.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function gg(t){var n=hn().memoizedState;return yy({ref:n,nextImpl:t}),function(){if((He&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function _g(t,n){return wc(4,2,t,n)}function vg(t,n){return wc(4,4,t,n)}function Sg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function xg(t,n,a){a=a!=null?a.concat([t]):null,wc(4,4,Sg.bind(null,n,t),a)}function sd(){}function Mg(t,n){var a=hn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Kf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function yg(t,n){var a=hn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Kf(n,s[1]))return s[0];if(s=t(),Vr){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[s,n],s}function od(t,n,a){return a===void 0||(Ta&1073741824)!==0&&(Ae&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=U_(),he.lanes|=t,sr|=t,a)}function Eg(t,n,a,s){return oi(a,n)?a:tr.current!==null?(t=od(t,a,s),oi(t,n)||(Sn=!0),t):(Ta&106)===0||(Ta&1073741824)!==0&&(Ae&261930)===0?(Sn=!0,t.memoizedState=a):(t=U_(),he.lanes|=t,sr|=t,n)}function Tg(t,n,a,s,c){var f=Rt.p;Rt.p=f!==0&&8>f?f:8;var _=vt.T,A={};A.types=_!==null?_.types:null,vt.T=A,ud(t,!1,n,a);try{var B=c(),it=vt.S;if(it!==null&&it(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var dt=_y(B,s);al(t,n,dt,di(t))}else al(t,n,s,di(t))}catch(xt){al(t,n,{then:function(){},status:"rejected",reason:xt},di())}finally{Rt.p=f,_!==null&&A.types!==null&&(_.types=A.types),vt.T=_}}function Ey(){}function ld(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=bg(t).queue;Tg(t,c,n,Xe,a===null?Ey:function(){return Ag(t),a(s)})}function bg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Xe,baseState:Xe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:Xe},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Ag(t){var n=bg(t);n.next===null&&(n=t.alternate.memoizedState),al(t,n.next.queue,{},di())}function cd(){return Nn(Ws)}function Rg(){return hn().memoizedState}function Cg(){return hn().memoizedState}function Ty(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=di();t=ja(a);var s=$a(n,t,a);s!==null&&(ei(s,n,a),jo(s,n,a)),n={cache:zf()},t.payload=n;return}n=n.return}}function by(t,n,a){var s=di();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dc(t)?Dg(n,a):(a=Cf(t,n,a,s),a!==null&&(ei(a,t,s),Ng(a,n,s)))}function wg(t,n,a){var s=di();al(t,n,a,s)}function al(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dc(t))Dg(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,A=f(_,a);if(c.hasEagerState=!0,c.eagerState=A,oi(A,_))return oc(t,n,c,0),je===null&&sc(),!1}catch{}if(a=Cf(t,n,c,s),a!==null)return ei(a,t,s),Ng(a,n,s),!0}return!1}function ud(t,n,a,s){if(s={lane:2,revertLane:th(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Dc(t)){if(n)throw Error(r(479))}else n=Cf(t,a,s,2),n!==null&&ei(n,t,2)}function Dc(t){var n=t.alternate;return t===he||n!==null&&n===he}function Dg(t,n){Ts=Ec=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Ng(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Lo(t,a)}}var Nc={readContext:Nn,use:Ac,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn,useEffectEvent:fn},Ug={readContext:Nn,use:Ac,useCallback:function(t,n){return qn().memoizedState=[t,n===void 0?null:n],t},useContext:Nn,useEffect:mg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Cc(4194308,4,Sg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Cc(4194308,4,t,n)},useInsertionEffect:function(t,n){Cc(4,2,t,n)},useMemo:function(t,n){var a=qn();n=n===void 0?null:n;var s=t();if(Vr){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=qn();if(a!==void 0){var c=a(n);if(Vr){Ce(!0);try{a(n)}finally{Ce(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=by.bind(null,he,t),[s.memoizedState,t]},useRef:function(t){var n=qn();return t={current:t},n.memoizedState=t},useState:function(t){t=id(t);var n=t.queue,a=wg.bind(null,he,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:sd,useDeferredValue:function(t,n){var a=qn();return od(a,t,n)},useTransition:function(){var t=id(!1);return t=Tg.bind(null,he,t.queue,!0,!1),qn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=he,c=qn();if(xe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),je===null)throw Error(r(349));(Ae&127)!==0||$0(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,mg(eg.bind(null,s,f,t),[t]),s.flags|=2048,As(9,{destroy:void 0},tg.bind(null,s,f,a,n),null),a},useId:function(){var t=qn(),n=je.identifierPrefix;if(xe){var a=Ki,s=Zi;a=(s&~(1<<32-ue(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=vy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:cd,useFormState:ug,useActionState:ug,useOptimistic:function(t){var n=qn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ud.bind(null,he,!0,a),a.dispatch=n,[t,n]},useMemoCache:td,useCacheRefresh:function(){return qn().memoizedState=Ty.bind(null,he)},useEffectEvent:function(t){var n=qn(),a={impl:t};return n.memoizedState=a,function(){if((He&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Lg={readContext:Nn,use:Ac,useCallback:Mg,useContext:Nn,useEffect:rd,useImperativeHandle:xg,useInsertionEffect:_g,useLayoutEffect:vg,useMemo:yg,useReducer:Rc,useRef:pg,useState:function(){return Rc(ba)},useDebugValue:sd,useDeferredValue:function(t,n){var a=hn();return Eg(a,Qe.memoizedState,t,n)},useTransition:function(){var t=Rc(ba)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:il(t),n]},useSyncExternalStore:j0,useId:Rg,useHostTransitionStatus:cd,useFormState:fg,useActionState:fg,useOptimistic:function(t,n){var a=hn();return ag(a,Qe,t,n)},useMemoCache:td,useCacheRefresh:Cg,useEffectEvent:gg},Ay={readContext:Nn,use:Ac,useCallback:Mg,useContext:Nn,useEffect:rd,useImperativeHandle:xg,useInsertionEffect:_g,useLayoutEffect:vg,useMemo:yg,useReducer:nd,useRef:pg,useState:function(){return nd(ba)},useDebugValue:sd,useDeferredValue:function(t,n){var a=hn();return Qe===null?od(a,t,n):Eg(a,Qe.memoizedState,t,n)},useTransition:function(){var t=nd(ba)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:il(t),n]},useSyncExternalStore:j0,useId:Rg,useHostTransitionStatus:cd,useFormState:hg,useActionState:hg,useOptimistic:function(t,n){var a=hn();return Qe!==null?ag(a,Qe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:td,useCacheRefresh:Cg,useEffectEvent:gg};function fd(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:z({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var dd={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=di(),c=ja(s);c.payload=n,a!=null&&(c.callback=a),n=$a(t,c,s),n!==null&&(ei(n,t,s),jo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=di(),c=ja(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=$a(t,c,s),n!==null&&(ei(n,t,s),jo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=di(),s=ja(a);s.tag=2,n!=null&&(s.callback=n),n=$a(t,s,a),n!==null&&(ei(n,t,a),jo(n,t,a))}};function Og(t,n,a,s,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!ko(a,s)||!ko(c,f):!0}function Pg(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&dd.enqueueReplaceState(n,n.state,null)}function Xr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=z({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Ig(t){rc(t)}function zg(t){console.error(t)}function Fg(t){rc(t)}function Uc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Bg(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function hd(t,n,a){return a=ja(a),a.tag=3,a.payload={element:null},a.callback=function(){Uc(t,n)},a}function Hg(t){return t=ja(t),t.tag=3,t}function Gg(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Bg(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Bg(n,a,s),typeof c!="function"&&(or===null?or=new Set([this]):or.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function Ry(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Pr(n,a,c,!0),a=Un.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Bn===null?$c():a.alternate===null&&dn===0&&(dn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===vc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Jd(t,s,c)),!1;case 22:return a.flags|=65536,s===vc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Jd(t,s,c)),!1}throw Error(r(435,a.tag))}return Jd(t,s,c),$c(),!1}if(xe)return n=Un.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Lf&&(t=Error(r(422),{cause:s}),Yo(yi(t,a)))):(s!==Lf&&(n=Error(r(423),{cause:s}),Yo(yi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=yi(s,a),c=hd(t.stateNode,s,c),Xf(t,c),dn!==4&&(dn=2)),!1;var f=Error(r(520),{cause:s});if(f=yi(f,a),dl===null?dl=[f]:dl.push(f),dn!==4&&(dn=2),n===null)return!0;s=yi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=hd(a.stateNode,s,t),Xf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(or===null||!or.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Hg(c),Gg(c,t,a,s),Xf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var pd=Error(r(461)),Sn=!1;function En(t,n,a,s){n.child=t===null?W0(n,null,a,s):Gr(n,t.child,a,s)}function Vg(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var A in s)A!=="ref"&&(_[A]=s[A])}else _=s;return Ir(n),s=Qf(t,n,a,_,f,c),A=Jf(),t!==null&&!Sn?(jf(t,n,c),Aa(t,n,c)):(xe&&A&&fc(n),n.flags|=1,En(t,n,s,c),n.child)}function Xg(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!wf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,kg(t,n,f,s,c)):(t=cc(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!yd(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:ko,a(_,s)&&t.ref===n.ref)return Aa(t,n,c)}return n.flags|=1,t=xa(f,s),t.ref=n.ref,t.return=n,n.child=t}function kg(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(ko(f,s)&&t.ref===n.ref)if(Sn=!1,n.pendingProps=s=f,yd(t,c))(t.flags&131072)!==0&&(Sn=!0);else return n.lanes=t.lanes,Aa(t,n,c)}return md(t,n,a,s,c)}function Wg(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return qg(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&gc(n,f!==null?f.cachePool:null),f!==null?Z0(n,f):Wf(),K0(n);else return s=n.lanes=536870912,qg(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(gc(n,f.cachePool),Z0(n,f),nr(),n.memoizedState=null):(t!==null&&gc(n,null),Wf(),nr());return En(t,n,c,a),n.child}function rl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function qg(t,n,a,s,c){var f=Bf();return f=f===null?null:{parent:_n._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&gc(n,null),Wf(),K0(n),t!==null&&Pr(t,n,s,!0),n.childLanes=c,null}function Lc(t,n){return n=Oc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Yg(t,n,a){return Gr(n,t.child,null,a),t=Lc(n,n.pendingProps),t.flags|=2,li(n),n.memoizedState=null,t}function Cy(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(s.mode==="hidden")return t=Lc(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},rl(null,t);if(Yf(n),(t=tn)?(t=Sv(t,bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:qa!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=D0(t),a.return=n,n.child=a,An=n,tn=null)):t=null,t===null)throw Za(n);return n.lanes=536870912,null}return Lc(n,s)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Yf(n),c)if(n.flags&256)n.flags&=-257,n=Yg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Sn||Pr(t,n,a,!1),c=(a&t.childLanes)!==0,Sn||c){if(tr.current===null){if(s=je,s!==null&&(_=Oo(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Nr(t,_),ei(s,t,_),pd;$c()}n=Yg(t,n,a)}else t=f.treeContext,tn=Ri(_.nextSibling),An=n,xe=!0,Ya=null,bi=!1,t!==null&&L0(n,t),n=Lc(n,s),n.flags|=134221824;return n}return t=xa(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Rs(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function md(t,n,a,s,c){return Ir(n),a=Qf(t,n,a,s,void 0,c),s=Jf(),t!==null&&!Sn?(jf(t,n,c),Aa(t,n,c)):(xe&&s&&fc(n),n.flags|=1,En(t,n,a,c),n.child)}function Zg(t,n,a,s,c,f){return Ir(n),n.updateQueue=null,a=J0(n,s,a,c),Q0(t),s=Jf(),t!==null&&!Sn?(jf(t,n,f),Aa(t,n,f)):(xe&&s&&fc(n),n.flags|=1,En(t,n,a,f),n.child)}function Kg(t,n,a,s,c){if(Ir(n),n.stateNode===null){var f=_s,_=a.contextType;typeof _=="object"&&_!==null&&(f=Nn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=dd,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Gf(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Nn(_):_s,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(fd(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&dd.enqueueReplaceState(f,f.state,null),tl(n,s,f,c),$o(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,B=Xr(a,A);f.props=B;var it=f.context,dt=a.contextType;_=_s,typeof dt=="object"&&dt!==null&&(_=Nn(dt));var xt=a.getDerivedStateFromProps;dt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||it!==_)&&Pg(n,f,s,_),Ja=!1;var $=n.memoizedState;f.state=$,tl(n,s,f,c),$o(),it=n.memoizedState,A||$!==it||Ja?(typeof xt=="function"&&(fd(n,a,xt,s),it=n.memoizedState),(B=Ja||Og(n,a,B,s,$,it,_))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=it),f.props=s,f.state=it,f.context=_,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Vf(t,n),_=n.memoizedProps,dt=Xr(a,_),f.props=dt,xt=n.pendingProps,$=f.context,it=a.contextType,B=_s,typeof it=="object"&&it!==null&&(B=Nn(it)),A=a.getDerivedStateFromProps,(it=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==xt||$!==B)&&Pg(n,f,s,B),Ja=!1,$=n.memoizedState,f.state=$,tl(n,s,f,c),$o();var ut=n.memoizedState;_!==xt||$!==ut||Ja||t!==null&&t.dependencies!==null&&pc(t.dependencies)?(typeof A=="function"&&(fd(n,a,A,s),ut=n.memoizedState),(dt=Ja||Og(n,a,dt,s,$,ut,B)||t!==null&&t.dependencies!==null&&pc(t.dependencies))?(it||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ut,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ut,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ut),f.props=s,f.state=ut,f.context=B,s=dt):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Rs(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Gr(n,t.child,null,c),n.child=Gr(n,null,a,c)):En(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Aa(t,n,c),t}function Qg(t,n,a,s){return Lr(),n.flags|=256,En(t,n,a,s),n.child}var gd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _d(t){return{baseLanes:t,cachePool:B0()}}function vd(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=fi),t}function Jg(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(Ln.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(c?er(n):nr(),(t=tn)?(t=Sv(t,bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:qa!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=D0(t),a.return=n,n.child=a,An=n,tn=null)):t=null,t===null)throw Za(n);return _h(t)?n.lanes=32:n.lanes=536870912,null}return f=s.children,s=s.fallback,c?(nr(),c=n.mode,f=Oc({mode:"hidden",children:f},c),s=Ur(s,c,a,null),f.return=n,s.return=n,f.sibling=s,n.child=f,s=n.child,s.memoizedState=_d(a),s.childLanes=vd(t,_,a),n.memoizedState=gd,rl(null,s)):(er(n),Sd(n,f))}var A=t.memoizedState;if(A!==null){var B=A.dehydrated;if(B!==null)return wy(t,n,f,_,s,B,A,a)}return c?(nr(),c=s.fallback,f=n.mode,A=t.child,B=A.sibling,s=xa(A,{mode:"hidden",children:s.children}),s.subtreeFlags=A.subtreeFlags&1206910976,B!==null?c=xa(B,c):(c=Ur(c,f,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,rl(null,s),s=n.child,c=t.child.memoizedState,c===null?c=_d(a):(f=c.cachePool,f!==null?(A=_n._currentValue,f=f.parent!==A?{parent:A,pool:A}:f):f=B0(),c={baseLanes:c.baseLanes|a,cachePool:f}),s.memoizedState=c,s.childLanes=vd(t,_,a),n.memoizedState=gd,rl(t.child,s)):(er(n),a=t.child,t=a.sibling,a=xa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Sd(t,n){return n=Oc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Oc(t,n){return t=Jn(22,t,null,n),t.lanes=0,t}function Pc(t,n,a){return Gr(n,t.child,null,a),t=Sd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function wy(t,n,a,s,c,f,_,A){if(a)return n.flags&256?(er(n),n.flags&=-257,Pc(t,n,A)):n.memoizedState!==null?(nr(),n.child=t.child,n.flags|=128,null):(nr(),f=c.fallback,_=n.mode,c=Oc({mode:"visible",children:c.children},_),f=Ur(f,_,A,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Gr(n,t.child,null,A),c=n.child,c.memoizedState=_d(A),c.childLanes=vd(t,s,A),n.memoizedState=gd,rl(null,c));if(er(n),_h(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var B=s.dgst;return s=B,s!==""&&(c=Error(r(419)),c.stack="",c.digest=s,Yo({value:c,source:null,stack:null})),Pc(t,n,A)}if(Sn||Pr(t,n,A,!1),s=(A&t.childLanes)!==0,Sn||s){if(tr.current!==null)return Pc(t,n,A);if(s=je,s!==null&&(c=Oo(s,A),c!==0&&c!==_.retryLane))throw _.retryLane=c,Nr(t,c),ei(s,t,c),pd;return gh(f)||$c(),Pc(t,n,A)}return gh(f)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,tn=Ri(f.nextSibling),An=n,xe=!0,Ya=null,bi=!1,t!==null&&L0(n,t),n=Sd(n,c.children),n.flags|=134221824,n)}function jg(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),hc(t.return,n,a)}function $g(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&yc(a)===null&&(n=t),t=t.sibling}return n}function Ic(t,n,a,s,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function xd(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function Md(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var _=Ln.current;if(n.flags&128)return el(n,_),null;var A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,el(n,_),c==="backwards"&&t!==null?(xd(t),En(t,n,s,a),xd(t)):En(t,n,s,a),s=xe?qo:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jg(t,a,n);else if(t.tag===19)jg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"backwards":a=$g(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,xd(n)),Ic(n,!0,c,null,f,s);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&yc(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Ic(n,!0,a,null,f,s);break;case"together":Ic(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=$g(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Ic(n,!1,c,a,f,s)}return n.child}function t_(t,n,a){var s=n.pendingProps;return Ka(n,n.type,s.value),En(t,n,s.children,a),n.child}function Aa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),sr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Pr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=xa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=xa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function yd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&pc(t)))}function Dy(t,n,a){switch(n.tag){case 3:j(n,n.stateNode.containerInfo),Ka(n,_n,t.memoizedState.cache),Lr();break;case 27:case 5:Pe(n);break;case 4:j(n,n.stateNode.containerInfo);break;case 10:Ka(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Yf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return er(n),n.flags|=128,null;s=Pr(t,n,a,!1);var c=n.child.childLanes;return s||(a&c)!==0?Jg(t,n,a):(er(n),t=Aa(t,n,a),t!==null?t.sibling:null)}er(n);break;case 19:if(n.flags&128)return Md(t,n,a);if(c=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Pr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Md(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),el(n,Ln.current),s)break;return null;case 22:return n.lanes=0,Wg(t,n,a,n.pendingProps);case 24:Ka(n,_n,t.memoizedState.cache)}return Aa(t,n,a)}function e_(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Sn=!0;else{if(!yd(t,a)&&(n.flags&128)===0)return Sn=!1,Dy(t,n,a);Sn=(t.flags&131072)!==0}else Sn=!1,xe&&(n.flags&1048576)!==0&&U0(n,qo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Br(n.elementType),n.type=t,typeof t=="function")wf(t)?(s=Xr(t,s),n.tag=1,n=Kg(null,n,t,s,a)):(n.tag=0,n=md(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===V){n.tag=11,n=Vg(null,n,t,s,a);break t}else if(c===Q){n.tag=14,n=Xg(null,n,t,s,a);break t}else if(c===Y){n.tag=10,n.type=t,n=t_(null,n,a);break t}}throw n=bt(t)||t,Error(r(306,n,""))}}return n;case 0:return md(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Xr(s,n.pendingProps),Kg(t,n,s,c,a);case 3:t:{if(j(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Vf(t,n),tl(n,s,null,a);var _=n.memoizedState;if(s=_.cache,Ka(n,_n,s),s!==f.cache&&If(n,[_n],a,!0),$o(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Qg(t,n,s,a);break t}else if(s!==c){c=yi(Error(r(424)),n),Yo(c),n=Qg(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,tn=Ri(t.firstChild),An=n,xe=!0,Ya=null,bi=!0,a=W0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Lr(),s===c){n=Aa(t,n,a);break t}En(t,n,s,a)}n=n.child}return n;case 26:return Rs(t,n),t===null?(a=Av(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(n.stateNode=rv(n.type,n.pendingProps,ze.current,n)):n.memoizedState=Av(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Pe(n),t===null&&xe&&(s=n.stateNode=yv(n.type,n.pendingProps,ze.current),An=n,bi=!0,c=tn,ur(n.type)?(vh=c,tn=Ri(s.firstChild)):tn=c),En(t,n,n.pendingProps.children,a),Rs(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((c=s=tn)&&(s=TE(s,n.type,n.pendingProps,bi),s!==null?(n.stateNode=s,An=n,tn=Ri(s.firstChild),bi=!1,c=!0):c=!1),c||Za(n)),Pe(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,s=f.children,ch(c,f)?s=null:_!==null&&ch(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Qf(t,n,Sy,null,null,a),Ws._currentValue=c),Rs(t,n),En(t,n,s,a),n.child;case 6:return t===null&&xe&&((t=a=tn)&&(a=bE(a,n.pendingProps,bi),a!==null?(n.stateNode=a,An=n,tn=null,t=!0):t=!1),t||Za(n)),null;case 13:return Jg(t,n,a);case 4:return j(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Gr(n,null,s,a):En(t,n,s,a),n.child;case 11:return Vg(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Rs(t,n),En(t,n,s,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return t_(t,n,a);case 9:return c=n.type._context,s=n.pendingProps.children,Ir(n),c=Nn(c),s=s(c),n.flags|=1,En(t,n,s,a),n.child;case 14:return Xg(t,n,n.type,n.pendingProps,a);case 15:return kg(t,n,n.type,n.pendingProps,a);case 19:return Md(t,n,a);case 31:return Cy(t,n,a);case 22:return Wg(t,n,a,n.pendingProps);case 24:return Ir(n),s=Nn(_n),t===null?(c=Bf(),c===null&&(c=je,f=zf(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Gf(n),Ka(n,_n,c)):((t.lanes&a)!==0&&(Vf(t,n),tl(n,null,null,a),$o()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ka(n,_n,s)):(s=f.cache,Ka(n,_n,s),s!==c.cache&&If(n,[_n],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:xe&&fc(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:Rs(t,n),En(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ra(t){t.flags|=4}function Ed(t,n,a,s,c){var f;if((f=(t.mode&32)!==0)&&(f=a===null?Dv(n,s):Dv(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(I_())t.flags|=8192;else throw Hr=vc,Hf}else t.flags&=-16777217}function n_(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Nv(n))if(I_())t.flags|=8192;else throw Hr=vc,Hf}function zc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Uo():536870912,t.lanes|=n,Us|=n)}function sl(t,n){if(!xe)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&1206910976,s|=c.flags&1206910976,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Ny(t,n,a){var s=n.pendingProps;switch(Uf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ea(_n),sn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(xs(n)?Ra(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Of())),en(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Ra(n),f!==null?(en(n),n_(n,f)):(en(n),Ed(n,c,null,s,a))):f?f!==t.memoizedState?(Ra(n),en(n),n_(n,f)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Ra(n),en(n),Ed(n,c,t,s,a)),null;case 27:if(O(n),a=ze.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ra(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return en(n),n.subtreeFlags&=-33554433,null}t=ke.current,xs(n)?O0(n):(t=yv(c,s,a),n.stateNode=t,Ra(n))}return en(n),n.subtreeFlags&=-33554433,null;case 5:if(O(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ra(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return en(n),n.subtreeFlags&=-33554433,null}if(f=ke.current,xs(n))O0(n);else{var _=_l(ze.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(c,{is:s.is}):_.createElement(c)}}f[b]=n,f[q]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Pn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ra(n)}}return en(n),n.subtreeFlags&=-33554433,Ed(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ra(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=ze.current,xs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=An,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[b]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||ev(t.nodeValue,a)),t||Za(n,!0)}else t=_l(t).createTextNode(s),t[b]=n,n.stateNode=t}return en(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=xs(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[b]=n}else Lr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else a=Of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(li(n),n):(li(n),null);if((n.flags&128)!==0)throw Error(r(558))}return en(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=xs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[b]=n}else Lr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),c=!1}else c=Of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(li(n),n):(li(n),null)}return li(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),zc(n,n.updateQueue),en(n),null);case 4:return sn(),t===null&&ah(n.stateNode.containerInfo),n.flags|=67108864,en(n),null;case 10:return Ea(n.type),en(n),null;case 19:if(Zf(n),s=n.memoizedState,s===null)return en(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)sl(s,!1);else{if(dn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=yc(t),f!==null){for(n.flags|=128,sl(s,!1),t=f.updateQueue,n.updateQueue=t,zc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)w0(a,t),a=a.sibling;return el(n,Ln.current&1|2),xe&&Ma(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&kt()>Kc&&(n.flags|=128,c=!0,sl(s,!1),n.lanes=4194304)}else{if(!c)if(t=yc(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,zc(n,t),sl(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!f.alternate&&!xe)return en(n),null}else 2*kt()-s.renderingStartTime>Kc&&a!==536870912&&(n.flags|=128,c=!0,sl(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=kt(),t.sibling=null,f=Ln.current,f=c?f&1|2:f&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||xe?el(n,f):(a=f,ae(Un,n),ae(Ln,a),Bn===null&&(Bn=n)),xe&&Ma(n,s.treeForkCount),t}return en(n),null;case 22:case 23:return li(n),qf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&zc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&ne(Fr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ea(_n),en(n),null;case 25:return null;case 30:return n.flags|=33554432,en(n),null}throw Error(r(156,n.tag))}function Uy(t,n){switch(Uf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ea(_n),sn(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return O(n),null;case 31:if(n.memoizedState!==null){if(li(n),n.alternate===null)throw Error(r(340));Lr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(li(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Lr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Zf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return sn(),null;case 10:return Ea(n.type),null;case 22:case 23:return li(n),qf(),t!==null&&ne(Fr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ea(_n),null;case 25:return null;default:return null}}function i_(t,n){switch(Uf(n),n.tag){case 3:Ea(_n),sn();break;case 26:case 27:case 5:O(n);break;case 4:sn();break;case 31:n.memoizedState!==null&&li(n);break;case 13:li(n);break;case 19:Zf(n);break;case 10:Ea(n.type);break;case 22:case 23:li(n),qf(),t!==null&&ne(Fr);break;case 24:Ea(_n)}}function ol(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==c)}}catch(A){qe(n,n.return,A)}}function ir(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var _=s.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,c=n;var B=a,it=A;try{it()}catch(dt){qe(c,B,dt)}}}s=s.next}while(s!==f)}}catch(dt){qe(n,n.return,dt)}}function a_(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Y0(n,a)}catch(s){qe(t,t.return,s)}}}function r_(t,n,a){a.props=Xr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){qe(t,n,s)}}function Qi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var c=t.stateNode,f=va(t.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=dv(f)),s=c.ref;break;case 7:if(t.stateNode===null){var _=new hi(t);g(t.child,!1,yE,_,void 0,void 0),t.stateNode=_}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(A){qe(t,n,A)}}function On(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){qe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){qe(t,n,c)}else a.current=null}function Fc(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)vv(t.stateNode,n[a])}function s_(t){for(var n=t.return;n!==null&&(bd(n)&&vv(t.stateNode,n.stateNode),!Td(n));)n=n.return}function ll(t){for(var n=t.return;n!==null&&(bd(n)&&EE(t.stateNode,n.stateNode),!Td(n));)n=n.return}function Td(t){return t.tag===5||t.tag===3||t.tag===27}function bd(t){return t&&t.tag===7&&t.stateNode!==null}function Ad(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){qe(t,t.return,c)}}function Rd(t,n,a){try{var s=t.stateNode;aE(s,t.type,a,n),s[q]=n}catch(c){qe(t,t.return,c)}}function o_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ur(t.type)||t.tag===4}function Cd(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||o_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ur(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wd(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi)),Fc(t,s),Se=!0;else if(c!==4&&(c===27&&(Fc(t,s),s=null,ur(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(wd(t,n,a,s),t=t.sibling;t!==null;)wd(t,n,a,s),t=t.sibling}function Bc(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Fc(t,s),Se=!0;else if(c!==4&&(c===27&&(Fc(t,s),s=null,ur(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Bc(t,n,a,s),t=t.sibling;t!==null;)Bc(t,n,a,s),t=t.sibling}function l_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Pn(n,s,a),n[b]=t,n[q]=a}catch(f){qe(t,t.return,f)}}var Hc=!1,ci=null;function c_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Hc=!0)}var Ji=null;function u_(){var t=Ji;return Ji=null,t}var jn=0;function Cs(t,n,a,s,c){return jn=0,f_(t.child,n,a,s,c)}function f_(t,n,a,s,c){for(var f=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(s!==null){var A=dh(_);s.push(A),A.view&&(f=!0)}else f||dh(_).view&&(f=!0);Hc=!0,uv(_,jn===0?n:n+"_"+jn,a),jn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c||f_(t.child,n,a,s,c)&&(f=!0));t=t.sibling}return f}function ji(t,n){for(;t!==null;)t.tag===5?fv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||ji(t.child,n)),t=t.sibling}function Gc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Gc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=Sa(n.default,n.share),n!=="none"&&(Cs(t,a,n,null,!1)||ji(t.child,!1))}t=t.sibling}}function Dd(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,c=va(s,a),f=Sa(s.default,a.paired?s.share:s.enter);f!=="none"?Cs(t,c,f,null,!1)?(Gc(t),a.paired||n||Is(t,s.onEnter)):ji(t.child,!1):Gc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Dd(t,n),t=t.sibling;else Gc(t)}function Nd(t){if(ci!==null&&ci.size!==0){var n=ci;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var c=n.get(s);if(c!==void 0){var f=Sa(a.default,a.share);if(f!=="none"&&(Cs(t,s,f,null,!1)?(f=t.stateNode,c.paired=f,f.paired=c,Is(t,a.onShare)):ji(t.child,!1)),n.delete(s),n.size===0)break}}}Nd(t)}t=t.sibling}}}function Ud(t){if(t.tag===30){var n=t.memoizedProps,a=va(n,t.stateNode),s=ci!==null?ci.get(a):void 0,c=Sa(n.default,s!==void 0?n.share:n.exit);c!=="none"&&(Cs(t,a,c,null,!1)?s!==void 0?(c=t.stateNode,s.paired=c,c.paired=s,ci.delete(a),Is(t,n.onShare)):Is(t,n.onExit):ji(t.child,!1)),ci!==null&&Nd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Ud(t),t=t.sibling;else ci!==null&&Nd(t)}function d_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=va(n,t.stateNode);n=Sa(n.default,n.update),t.flags&=-5,n!=="none"&&Cs(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&d_(t);t=t.sibling}}function Ld(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,ji(t.child,!1))}Ld(t)}t=t.sibling}}function Vc(t){if(t.tag===30)t.stateNode.paired=null,ji(t.child,!1),Ld(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Vc(t),t=t.sibling;else Ld(t)}function h_(t){for(t=t.child;t!==null;)t.tag===30?ji(t.child,!1):(t.subtreeFlags&33554432)!==0&&h_(t),t=t.sibling}function Od(t,n,a,s,c,f,_){for(var A=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(f!==null&&jn<f.length){var it=f[jn],dt=dh(B);(it.view||dt.view)&&(A=!0);var xt;if(xt=(t.flags&4)===0)if(dt.clip)xt=!0;else{xt=it.rect;var $=dt.rect;xt=xt.y!==$.y||xt.x!==$.x||xt.height!==$.height||xt.width!==$.width}xt&&(t.flags|=4),dt.abs?dt=!it.abs:(it=it.rect,dt=dt.rect,dt=it.height!==dt.height||it.width!==dt.width),dt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&uv(B,jn===0?a:a+"_"+jn,c),A&&(t.flags&4)!==0||(Ji===null&&(Ji=[]),Ji.push(B,jn===0?s:s+"_"+jn,n.memoizedProps)),jn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:Od(t,n.child,a,s,c,f,_)&&(A=!0));n=n.sibling}return A}function p_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,c=va(a,s),f=Sa(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,s=t;var A=t.child;jn=0,c=Od(s,A,c,c,f,_,!1),(t.flags&4)!==0&&c&&Is(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&p_(t);t=t.sibling}}var Rn=!1,Ve=!1,$i=!1,Pd=!1,m_=typeof WeakSet=="function"?WeakSet:Set,Cn=null,ta=!1,cl=!1,Xc=!1,Id=!1;function Ly(t,n,a){if(t=t.containerInfo,oh=qs,t=S0(t),yf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var f=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break t}var A=0,B=-1,it=-1,dt=0,xt=0,$=t,ut=null;e:for(;;){for(var Pt;$!==s||f!==0&&$.nodeType!==3||(B=A+f),$!==_||c!==0&&$.nodeType!==3||(it=A+c),$.nodeType===3&&(A+=$.nodeValue.length),(Pt=$.firstChild)!==null;)ut=$,$=Pt;for(;;){if($===t)break e;if(ut===s&&++dt===f&&(B=A),ut===_&&++xt===c&&(it=A),(Pt=$.nextSibling)!==null)break;$=ut,ut=$.parentNode}$=Pt}s=B===-1||it===-1?null:{start:B,end:it}}else s=null}s=s||{start:0,end:0}}else s=null;for(lh={focusedElem:t,selectionRange:s},qs=!1,a=(a&335544064)===a,Cn=n,n=a?9270:1024;Cn!==null;){if(t=Cn,a&&(s=t.deletions,s!==null))for(f=0;f<s.length;f++)a&&Ud(s[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&c_(t),kc(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&Ud(s),kc(a);continue}else if(s!==null&&s.memoizedState!==null){a&&c_(t),kc(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,Cn=s):(a&&d_(t),kc(a))}}ci=null}function kc(t){for(;Cn!==null;){var n=Cn,a=t,s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&s!==null){a=void 0,c=s.memoizedProps,s=s.memoizedState;var f=n.stateNode;try{var _=Xr(n.type,c);a=f.getSnapshotBeforeUpdate(_,s),f.__reactInternalSnapshotBeforeUpdate=a}catch(A){qe(n,n.return,A)}}break;case 3:if((c&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)mh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":mh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=va(s.memoizedProps,s.stateNode),c=n.memoizedProps,c=Sa(c.default,c.update),c!=="none"&&Cs(s,a,c,s.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Cn=s;break}Cn=n.return}}function g_(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ea(t,a),s&4&&ol(5,a);break;case 1:if(ea(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){qe(a,a.return,_)}else{var c=Xr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){qe(a,a.return,_)}}s&64&&a_(a),s&512&&Qi(a,a.return);break;case 3:if(ea(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Y0(t,n)}catch(_){qe(a,a.return,_)}}break;case 27:n===null&&s&4&&l_(a);case 26:case 5:ea(t,a),n===null&&s&4&&Ad(a),s&512&&Qi(a,a.return);break;case 12:ea(t,a);break;case 31:ea(t,a),s&4&&x_(t,a);break;case 13:ea(t,a),s&4&&M_(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Wy.bind(null,a),AE(t,a))));break;case 22:if(s=a.memoizedState!==null||Rn,!s){var f=n!==null&&n.memoizedState!==null||Ve;n=Rn,c=Ve,Rn=s,(Ve=f)&&!c?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Oi(t,a,s)):ea(t,a),Rn=n,Ve=c}break;case 30:ea(t,a),s&512&&Qi(a,a.return);break;case 7:s&512&&Qi(a,a.return);default:ea(t,a)}}function zd(t,n){for(t=t.child;t!==null;)__(t,n),t=t.sibling}function __(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var c=t.stateNode,f=t.memoizedProps.style,_=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(B){qe(t,t.return,B)}Fd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Se=!0}catch(B){qe(t,t.return,B)}break;case 18:try{var A=t.stateNode;n?cv(A,!0):cv(t.stateNode,!1)}catch(B){qe(t,t.return,B)}break;case 22:case 23:t.memoizedState===null&&zd(t,n);break;default:zd(t,n)}}function Fd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:__(a,s);break t;case 22:a.memoizedState===null&&Fd(a,s);break t;default:Fd(a,s)}}t=t.sibling}}function v_(t){var n=t.alternate;n!==null&&(t.alternate=null,v_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Kt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,$n=!1;function Ui(t,n,a){for(a=a.child;a!==null;)S_(t,n,a),a=a.sibling}function S_(t,n,a){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Jt,a)}catch{}switch(a.tag){case 26:Ve||On(a,n),Ui(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ve&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ve||On(a,n),ll(a);var s=rn,c=$n;ur(a.type)&&(rn=a.stateNode,$n=!1),Ui(t,n,a),Ev(a.stateNode,a.type,a.memoizedProps),rn=s,$n=c;break;case 5:Ve||On(a,n),ll(a);case 6:if(a.tag===6&&ll(a),s=rn,c=$n,rn=null,Ui(t,n,a),rn=s,$n=c,rn!==null)if($n)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode),Se=!0}catch(f){qe(a,n,f)}else try{rn.removeChild(a.stateNode),Se=!0}catch(f){qe(a,n,f)}break;case 18:rn!==null&&($n?(t=rn,lv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ys(t)):lv(rn,a.stateNode));break;case 4:s=rn,c=$n,rn=a.stateNode.containerInfo,$n=!0,Ui(t,n,a),rn=s,$n=c;break;case 0:case 11:case 14:case 15:ir(2,a,n),Ve||ir(4,a,n),Ui(t,n,a);break;case 1:Ve||(On(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&r_(a,n,s)),Ui(t,n,a);break;case 21:Ui(t,n,a);break;case 22:Ve=(s=Ve)||a.memoizedState!==null,Ui(t,n,a),Ve=s;break;case 30:On(a,n),Ui(t,n,a);break;case 7:Ve||On(a,n),Ui(t,n,a);break;default:Ui(t,n,a)}}function x_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ys(t)}catch(a){qe(n,n.return,a)}}}function M_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ys(t)}catch(a){qe(n,n.return,a)}}function Oy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new m_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new m_),n;default:throw Error(r(435,t.tag))}}function Wc(t,n){var a=Oy(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=qy.bind(null,t,s);s.then(c,c)}})}function Yn(t,n,a){var s=n.deletions;if(s!==null)for(var c=0;c<s.length;c++){var f=s[c],_=t,A=n,B=A;t:for(;B!==null;){switch(B.tag){case 27:if(ur(B.type)){rn=B.stateNode,$n=!1;break t}break;case 5:rn=B.stateNode,$n=!1;break t;case 3:case 4:rn=B.stateNode.containerInfo,$n=!0;break t}B=B.return}if(rn===null)throw Error(r(160));S_(_,A,f),rn=null,$n=!1,_=f.alternate,_!==null&&(_.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)y_(n,t,a),n=n.sibling}var Li=null;function y_(t,n,a){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(c&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var f=0;f<s.length;f++){var _=s[f];_.ref.impl=_.nextImpl}Yn(n,t,a),Zn(t),c&4&&(ir(3,t,t.return),ol(3,t),ir(5,t,t.return));break;case 1:Yn(n,t,a),Zn(t),c&512&&(Ve||s===null||On(s,s.return)),c&64&&Rn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Li,Yn(n,t,a),Zn(t),c&512&&(Ve||s===null||On(s,s.return)),c&4)if(c=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(Rn)t.stateNode=rv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,c=f.ownerDocument||f;e:switch(n){case"title":s=c.getElementsByTagName("title")[0],(!s||s[Ot]||s[b]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=c.createElement(n),c.head.insertBefore(s,c.querySelector("head > title"))),Pn(s,n,a),s[b]=t,ve(s),n=s;break t;case"link":if(f=wv("link","href",c).get(n+(a.href||""))){for(_=0;_<f.length;_++)if(s=f[_],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(_,1);break e}}s=c.createElement(n),Pn(s,n,a),c.head.appendChild(s);break;case"meta":if(f=wv("meta","content",c).get(n+(a.content||""))){for(_=0;_<f.length;_++)if(s=f[_],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(_,1);break e}}s=c.createElement(n),Pn(s,n,a),c.head.appendChild(s);break;default:throw Error(r(468,n))}s[b]=t,ve(s),n=s}t.stateNode=n}else Rn||yh(f,t.type,t.stateNode);else t.stateNode=Cv(f,a,t.memoizedProps);else c!==a?(c===null?(n=s.stateNode,n===null||Ve||n.parentNode.removeChild(n)):c.count--,a===null?Rn||yh(f,t.type,t.stateNode):Cv(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Rd(t,t.memoizedProps,s.memoizedProps);break;case 27:Yn(n,t,a),Zn(t),c&512&&(Ve||s===null||On(s,s.return)),s!==null&&c&4&&Rd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(f=$i,$i=!1,Yn(n,t,a),$i=f,Zn(t),c&512&&(Ve||s===null||On(s,s.return)),t.flags&32){n=t.stateNode;try{us(n,""),Se=!0}catch(dt){qe(t,t.return,dt)}}c&4&&t.stateNode!=null&&(n=t.memoizedProps,Rd(t,n,s!==null?s.memoizedProps:n)),c&1024&&(Pd=!0);break;case 6:if(Yn(n,t,a),Zn(t),c&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Se=!0}catch(dt){qe(t,t.return,dt)}}break;case 3:if(Se=!1,su=null,f=Li,Li=vl(n.containerInfo),Yn(n,t,a),Li=f,Zn(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Ys(n.containerInfo)}catch(dt){qe(t,t.return,dt)}Pd&&(Pd=!1,E_(t)),Se=!1;break;case 4:c=$i,$i=Rn,s=Be(),f=Li,Li=vl(t.stateNode.containerInfo),Yn(n,t,a),Zn(t),Li=f,Se&&cl&&(Xc=!0),Se=s,$i=c;break;case 12:Yn(n,t,a),Zn(t);break;case 31:Yn(n,t,a),Zn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Wc(t,n)));break;case 13:Yn(n,t,a),Zn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Zc=kt()),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Wc(t,n)));break;case 22:f=t.memoizedState!==null,_=s!==null&&s.memoizedState!==null;var A=Rn,B=Ve,it=$i;Rn=A||f,$i=it||f,Ve=B||_,Yn(n,t,a),Ve=B,$i=it,Rn=A,Zn(t),c&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||s===null||_||Rn||Ve||(n=_||Ve,a=Rn,s=Ve,Rn=f||Rn,Ve=n,ar(t,2),Rn=a,Ve=s),!f&&$i||zd(t,f)),c&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Wc(t,a))));break;case 19:Yn(n,t,a),Zn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Wc(t,n)));break;case 30:c&512&&(Ve||s===null||On(s,s.return)),c=Be(),f=cl,_=(a&335544064)===a,A=t.memoizedProps,cl=_&&Sa(A.default,A.update)!=="none",Yn(n,t,a),Zn(t),_&&s!==null&&Se&&(t.flags|=4),cl=f,Se=c;break;case 21:break;case 7:c&512&&(Ve||s===null||On(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Yn(n,t,a),Zn(t)}}function Zn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(o_(s)){a=s;break}s=s.return}s=null;for(var c=t.return;c!==null;){if(bd(c)){var f=c.stateNode;s===null?s=[f]:s.push(f)}if(Td(c))break;c=c.return}var _=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var A=a.stateNode,B=Cd(t);Bc(t,B,A,_);break;case 5:var it=a.stateNode;a.flags&32&&(us(it,""),a.flags&=-33);var dt=Cd(t);Bc(t,dt,it,_);break;case 3:case 4:var xt=a.stateNode.containerInfo,$=Cd(t);wd(t,$,xt,_);break;default:throw Error(r(161))}}catch(ut){qe(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function E_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;E_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,qs=!0,n.reset(),qs=!1),t=t.sibling}}function ws(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)T_(n,t),n=n.sibling;else p_(n)}function T_(t,n){var a=t.alternate;if(a===null)Dd(t,!1);else switch(t.tag){case 3:if(Id=ta=!1,u_(),ws(n,t),!ta&&!Xc){if(t=Ji,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var c=t[s+1];fv(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Id=!0}Ji=null;break;case 5:ws(n,t);break;case 4:s=ta,ta=!1,ws(n,t),ta&&(Xc=!0),ta=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Dd(t,!1):ws(n,t));break;case 30:s=ta,c=u_(),ta=!1,ws(n,t),ta&&(t.flags|=4);var f=t.memoizedProps,_=t.stateNode;n=va(f,_),_=va(a.memoizedProps,_);var A=Sa(f.default,f.update);A==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,jn=0,n=Od(t,a,n,_,A,f,!0),jn!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Is(t,t.memoizedProps.onUpdate),Ji=c):c!==null&&(c.push.apply(c,Ji),Ji=c),ta=(t.flags&32)!==0?!0:s;break;default:ws(n,t)}}function ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)g_(t,n.alternate,n),n=n.sibling}function ar(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:ir(4,a,a.return),ar(a,s);break;case 1:On(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&r_(a,a.return,c),ar(a,s);break;case 27:(s&2)!==0&&Ev(a.stateNode,a.type,a.memoizedProps);case 5:On(a,a.return),a.tag!==5&&a.tag!==27||ll(a),ar(a,s);break;case 6:ll(a);break;case 26:On(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Ve||c.parentNode.removeChild(c),ar(a,s);break;case 22:a.memoizedState===null&&ar(a,s);break;case 30:On(a,a.return),ar(a,s);break;case 7:On(a,a.return);default:ar(a,s)}t=t.sibling}}function Oi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,_=f.flags,A=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Oi(c,f,a),ol(4,f);break;case 1:if(Oi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(dt){qe(s,s.return,dt)}if(s=f,c=s.updateQueue,c!==null){var B=s.stateNode;try{var it=c.shared.hiddenCallbacks;if(it!==null)for(c.shared.hiddenCallbacks=null,c=0;c<it.length;c++)q0(it[c],B)}catch(dt){qe(s,s.return,dt)}}A&&_&64&&a_(f),Qi(f,f.return);break;case 27:(a&2)!==0&&l_(f);case 5:f.tag!==5&&f.tag!==27||s_(f),Oi(c,f,a),A&&s===null&&_&4&&Ad(f),Qi(f,f.return);break;case 6:s_(f);break;case 26:B=f.stateNode,f.memoizedState!==null||B===null||Rn||yh(vl(B.ownerDocument),f.type,B),Oi(c,f,a),A&&s===null&&_&4&&Ad(f),Qi(f,f.return);break;case 12:Oi(c,f,a);break;case 31:Oi(c,f,a),A&&_&4&&x_(c,f);break;case 13:Oi(c,f,a),A&&_&4&&M_(c,f);break;case 22:f.memoizedState===null&&Oi(c,f,a),Qi(f,f.return);break;case 30:Oi(c,f,a),Qi(f,f.return);break;case 7:Qi(f,f.return);default:Oi(c,f,a)}n=n.sibling}}function Bd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Zo(a))}function Hd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Zo(t))}function Ai(t,n,a,s){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)b_(t,n,a,s),n=n.sibling;else c&&h_(n)}function b_(t,n,a,s){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Vc(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(t,n,a,s),f&2048&&ol(9,n);break;case 1:Ai(t,n,a,s);break;case 3:Ai(t,n,a,s),c&&Id&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Zo(f)));break;case 12:if(f&2048){Ai(t,n,a,s),f=n.stateNode;try{var _=n.memoizedProps,A=_.id,B=_.onPostCommit;typeof B=="function"&&B(A,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(it){qe(n,n.return,it)}}else Ai(t,n,a,s);break;case 31:Ai(t,n,a,s);break;case 13:Ai(t,n,a,s);break;case 23:break;case 22:_=n.stateNode,A=n.alternate,n.memoizedState!==null?(c&&A!==null&&A.memoizedState===null&&Vc(A),_._visibility&2?Ai(t,n,a,s):ul(t,n)):(c&&A!==null&&A.memoizedState!==null&&Vc(n),_._visibility&2?Ai(t,n,a,s):(_._visibility|=2,Ds(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Bd(A,n);break;case 24:Ai(t,n,a,s),f&2048&&Hd(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(ji(f.child,!0),ji(n.child,!0))),Ai(t,n,a,s);break;default:Ai(t,n,a,s)}}function Ds(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,A=a,B=s,it=_.flags;switch(_.tag){case 0:case 11:case 15:Ds(f,_,A,B,c),ol(8,_);break;case 23:break;case 22:var dt=_.stateNode;_.memoizedState!==null?dt._visibility&2?Ds(f,_,A,B,c):ul(f,_):(dt._visibility|=2,Ds(f,_,A,B,c)),c&&it&2048&&Bd(_.alternate,_);break;case 24:Ds(f,_,A,B,c),c&&it&2048&&Hd(_.alternate,_);break;default:Ds(f,_,A,B,c)}n=n.sibling}}function ul(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:ul(a,s),c&2048&&Bd(s.alternate,s);break;case 24:ul(a,s),c&2048&&Hd(s.alternate,s);break;default:ul(a,s)}n=n.sibling}}var kr=8192;function Wr(t,n,a){if(t.subtreeFlags&kr)for(t=t.child;t!==null;)A_(t,n,a),t=t.sibling}function A_(t,n,a){switch(t.tag){case 26:Wr(t,n,a),t.flags&kr&&(t.memoizedState!==null?HE(a,Li,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Lv(a,t)));break;case 5:Wr(t,n,a),t.flags&kr&&(t=t.stateNode,(n&335544128)===n&&Lv(a,t));break;case 3:case 4:var s=Li;Li=vl(t.stateNode.containerInfo),Wr(t,n,a),Li=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=kr,kr=16777216,Wr(t,n,a),kr=s):Wr(t,n,a));break;case 30:if((t.flags&kr)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var c=t.stateNode;c.paired=null,ci===null&&(ci=new Map),ci.set(s,c)}Wr(t,n,a);break;default:Wr(t,n,a)}}function R_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function fl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Cn=s,w_(s,t)}R_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)C_(t),t=t.sibling}function C_(t){switch(t.tag){case 0:case 11:case 15:fl(t),t.flags&2048&&ir(9,t,t.return);break;case 3:fl(t);break;case 12:fl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,qc(t)):fl(t);break;default:fl(t)}}function qc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Cn=s,w_(s,t)}R_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ir(8,n,n.return),qc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,qc(n));break;default:qc(n)}t=t.sibling}}function w_(t,n){for(;Cn!==null;){var a=Cn;switch(a.tag){case 0:case 11:case 15:ir(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Zo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Cn=s;else t:for(a=t;Cn!==null;){s=Cn;var c=s.sibling,f=s.return;if(v_(s),s===a){Cn=null;break t}if(c!==null){c.return=f,Cn=c;break t}Cn=f}}}var Py={getCacheForType:function(t){var n=Nn(_n),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Nn(_n).controller.signal}},Iy=typeof WeakMap=="function"?WeakMap:Map,He=0,je=null,Ee=null,Ae=0,We=0,ui=null,rr=!1,Ns=!1,Gd=!1,Ca=0,dn=0,sr=0,qr=0,Yc=0,fi=0,Us=0,dl=null,ti=null,Vd=!1,Zc=0,D_=0,Kc=1/0,Qc=null,or=null,on=0,Pi=null,Yr=null,na=0,Xd=0,kd=null,N_=null,Ls=null,Os=null,Ps=null,hl=0,Jc=null;function di(){return(He&2)!==0&&Ae!==0?Ae&-Ae:vt.T!==null?th():Kl()}function U_(){if(fi===0)if((Ae&536870912)===0||xe){var t=Ar;Ar<<=1,(Ar&3932160)===0&&(Ar=262144),fi=t}else fi=536870912;return t=Un.current,t!==null&&(t.flags|=32),fi}function Is(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=dv(va(t.memoizedProps,a))),Os===null&&(Os=[]),Os.push(n.bind(null,s))}}function ei(t,n,a){(t===je&&(We===2||We===9)||t.cancelPendingCommit!==null)&&(zs(t,0),lr(t,Ae,fi,!1)),Wi(t,a),((He&2)===0||t!==je)&&(t===je&&((He&2)===0&&(qr|=a),dn===4&&lr(t,Ae,fi,!1)),ia(t))}function L_(t,n,a){if((He&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Xa(t,n),c=s?By(t,n):qd(t,n,!0),f=s;do{if(c===0){Ns&&!s&&lr(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!zy(a)){c=qd(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var A=t;c=dl;var B=A.current.memoizedState.isDehydrated;if(B&&(zs(A,_).flags|=256),_=qd(A,_,!1),_!==2&&_!==6){if(Gd&&!B){A.errorRecoveryDisabledLanes|=f,qr|=f,c=4;break t}f=ti,ti=c,f!==null&&(ti===null?ti=f:ti.push.apply(ti,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){zs(t,0),lr(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:lr(s,n,fi,!rr);break t;case 2:ti=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Zc+300-kt(),10<c)){if(lr(s,n,fi,!rr),Rr(s,0,!0)!==0)break t;na=n,s.timeoutHandle=fh(O_.bind(null,s,a,ti,Qc,Vd,n,fi,qr,Us,rr,f,"Throttled",-0,0),c);break t}O_(s,a,ti,Qc,Vd,n,fi,qr,Us,rr,f,null,-0,0)}}break}while(!0);ia(t)}function O_(t,n,a,s,c,f,_,A,B,it,dt,xt,$,ut){t.timeoutHandle=-1;var Pt=n.subtreeFlags,Qt=(f&335544064)===f;if(xt=null,(Qt||Pt&8192||(Pt&16785408)===16785408)&&(xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},ci=null,A_(n,f,xt),Qt&&(Pt=xt,Qt=t.containerInfo,Qt=(Qt.nodeType===9?Qt:Qt.ownerDocument).__reactViewTransition,Qt!=null&&(Pt.count++,Pt.waitingForViewTransition=!0,Pt=Ml.bind(Pt),Qt.finished.then(Pt,Pt))),Pt=(f&62914560)===f?Zc-kt():(f&4194048)===f?D_-kt():0,Pt=GE(xt,Pt),Pt!==null)){na=f,t.cancelPendingCommit=Pt(V_.bind(null,t,n,f,a,s,c,_,A,B,it,dt,xt,null,$,ut)),lr(t,f,_,!it);return}V_(t,n,f,a,s,c,_,A,B,it,dt,xt)}function zy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!oi(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function lr(t,n,a,s){n=ki(t,n),n&=~Yc,n&=~qr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-ue(c),_=1<<f;s[f]=-1,c&=~_}a!==0&&Cr(t,a,n)}function jc(){return(He&6)===0?(pl(0),!1):!0}function Wd(){if(Ee!==null){if(We===0)var t=Ee.return;else t=Ee,ya=Or=null,$f(t),Es=null,Jo=0,t=Ee;for(;t!==null;)i_(t.alternate,t),t=t.return;Ee=null}}function zs(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,oE(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),na=0,Wd(),je=t,Ee=a=xa(t.current,null),Ae=n,We=0,ui=null,rr=!1,Ns=Xa(t,n),Gd=!1,Us=fi=Yc=qr=sr=dn=0,ti=dl=null,Vd=!1,Ca=ki(t,n),sc(),a}function P_(t,n){he=null,vt.H=Nc,n===ys||n===_c?(n=V0(),We=3):n===Hf?(n=V0(),We=4):We=n===pd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ui=n,Ee===null&&(dn=1,Uc(t,yi(n,t.current)))}function I_(){var t=Un.current;return t===null?!0:(Ae&4194048)===Ae?Bn===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?t===Bn:!1}function z_(){var t=vt.H;return vt.H=Nc,t===null?Nc:t}function F_(){var t=vt.A;return vt.A=Py,t}function $c(){dn=4,rr||(Ae&4194048)!==Ae&&Un.current!==null||(Ns=!0),(sr&134217727)===0&&(qr&134217727)===0||je===null||lr(je,Ae,fi,!1)}function qd(t,n,a){var s=He;He|=2;var c=z_(),f=F_();(je!==t||Ae!==n)&&(Qc=null,zs(t,n)),n=!1;var _=dn;t:do try{if(We!==0&&Ee!==null){var A=Ee,B=ui;switch(We){case 8:Wd(),_=6;break t;case 3:case 2:case 9:case 6:Un.current===null&&(n=!0);var it=We;if(We=0,ui=null,Fs(t,A,B,it),a&&Ns){_=0;break t}break;default:it=We,We=0,ui=null,Fs(t,A,B,it)}}Fy(),_=dn;break}catch(dt){P_(t,dt)}while(!0);return n&&t.shellSuspendCounter++,ya=Or=null,He=s,vt.H=c,vt.A=f,Ee===null&&(je=null,Ae=0,sc()),_}function Fy(){for(;Ee!==null;)B_(Ee)}function By(t,n){var a=He;He|=2;var s=z_(),c=F_();je!==t||Ae!==n?(Qc=null,Kc=kt()+500,zs(t,n)):Ns=Xa(t,n);t:do try{if(We!==0&&Ee!==null){n=Ee;var f=ui;e:switch(We){case 1:We=0,ui=null,Fs(t,n,f,1);break;case 2:case 9:if(H0(f)){We=0,ui=null,H_(n);break}n=function(){We!==2&&We!==9||je!==t||(We=7),ia(t)},f.then(n,n);break t;case 3:We=7;break t;case 4:We=5;break t;case 7:H0(f)?(We=0,ui=null,H_(n)):(We=0,ui=null,Fs(t,n,f,7));break;case 5:var _=null;switch(Ee.tag){case 26:_=Ee.memoizedState;case 5:case 27:var A=Ee;if(_?Nv(_):A.stateNode.complete){We=0,ui=null;var B=A.sibling;if(B!==null)Ee=B;else{var it=A.return;it!==null?(Ee=it,tu(it)):Ee=null}break e}}We=0,ui=null,Fs(t,n,f,5);break;case 6:We=0,ui=null,Fs(t,n,f,6);break;case 8:Wd(),dn=6;break t;default:throw Error(r(462))}}Hy();break}catch(dt){P_(t,dt)}while(!0);return ya=Or=null,vt.H=s,vt.A=c,He=a,Ee!==null?0:(je=null,Ae=0,sc(),dn)}function Hy(){for(;Ee!==null&&!zt();)B_(Ee)}function B_(t){var n=e_(t.alternate,t,Ca);t.memoizedProps=t.pendingProps,n===null?tu(t):Ee=n}function H_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Zg(a,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=Zg(a,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:$f(n);var s=n;s===An&&(xe?(dc(s),s.tag===5&&s.stateNode!=null&&(tn=s.stateNode)):(dc(s),xe=!0));default:i_(a,n),n=Ee=w0(n,Ca),n=e_(a,n,Ca)}t.memoizedProps=t.pendingProps,n===null?tu(t):Ee=n}function Fs(t,n,a,s){ya=Or=null,$f(n),Es=null,Jo=0;var c=n.return;try{if(Ry(t,c,n,a,Ae)){dn=1,Uc(t,yi(a,t.current)),Ee=null;return}}catch(f){if(c!==null)throw Ee=c,f;dn=1,Uc(t,yi(a,t.current)),Ee=null;return}n.flags&32768?(xe||s===1?t=!0:Ns||(Ae&536870912)!==0?t=!1:(rr=t=!0,(s===2||s===9||s===3||s===6)&&(s=Un.current,s!==null&&s.tag===13&&(s.flags|=16384))),G_(n,t)):tu(n)}function tu(t){var n=t;do{if((n.flags&32768)!==0){G_(n,rr);return}t=n.return;var a=Ny(n.alternate,n,Ca);if(a!==null){Ee=a;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=t}while(n!==null);dn===0&&(dn=5)}function G_(t,n){do{var a=Uy(t.alternate,t);if(a!==null){a.flags&=32767,Ee=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Ee=t;return}Ee=t=a}while(t!==null);dn=6,Ee=null}function V_(t,n,a,s,c,f,_,A,B,it,dt,xt){t.cancelPendingCommit=null;do eu();while(on!==0);if((He&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===je&&(Ee=je=null,Ae=0),Yr=n,Pi=t,na=a,kd=c,N_=s,Gy(t,n,a,_,A,B,xt)}}function Gy(t,n,a,s,c,f,_){var A=n.lanes|n.childLanes;if(Xd=A,A|=Rf,Zl(t,a,A,s,c,f),Os=null,(a&335544064)===a?(Ps=my(t),s=10262):(Ps=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,Yy(Ct,function(){return Qd(),null})):(t.callbackNode=null,t.callbackPriority=0),Hc=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=vt.T,vt.T=null,c=Rt.p,Rt.p=2,f=He,He|=4;try{Ly(t,n,a)}finally{He=f,Rt.p=c,vt.T=s}}on=1,Hc?Ls=hE(_,t.containerInfo,Ps,Yd,Zd,Xy,Kd,Qd,Vy):(Yd(),Zd(),Kd())}function Vy(t){if(on!==0){var n=Pi.onRecoverableError;n(t,{componentStack:null})}}function Xy(){on===3&&(on=0,T_(Yr,Pi),on=4)}function Yd(){if(on===1){on=0;var t=Pi,n=Yr,a=na,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=vt.T,vt.T=null;var c=Rt.p;Rt.p=2;var f=He;He|=4;try{cl=Xc=!1,y_(n,t,a),a=lh;var _=S0(t.containerInfo),A=a.focusedElem,B=a.selectionRange;if(_!==A&&A&&A.ownerDocument&&v0(A.ownerDocument.documentElement,A)){if(B!==null&&yf(A)){var it=B.start,dt=B.end;if(dt===void 0&&(dt=it),"selectionStart"in A)A.selectionStart=it,A.selectionEnd=Math.min(dt,A.value.length);else{var xt=A.ownerDocument||document,$=xt&&xt.defaultView||window;if($.getSelection){var ut=$.getSelection(),Pt=A.textContent.length,Qt=Math.min(B.start,Pt),pe=B.end===void 0?Qt:Math.min(B.end,Pt);!ut.extend&&Qt>pe&&(_=pe,pe=Qt,Qt=_);var nt=_0(A,Qt),Z=_0(A,pe);if(nt&&Z&&(ut.rangeCount!==1||ut.anchorNode!==nt.node||ut.anchorOffset!==nt.offset||ut.focusNode!==Z.node||ut.focusOffset!==Z.offset)){var st=xt.createRange();st.setStart(nt.node,nt.offset),ut.removeAllRanges(),Qt>pe?(ut.addRange(st),ut.extend(Z.node,Z.offset)):(st.setEnd(Z.node,Z.offset),ut.addRange(st))}}}}for(xt=[],ut=A;ut=ut.parentNode;)ut.nodeType===1&&xt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xt.length;A++){var St=xt[A];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}qs=!!oh,lh=oh=null}finally{He=f,Rt.p=c,vt.T=s}}t.current=n,on=2}}function Zd(){if(on===2){on=0;var t=Pi,n=Yr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=vt.T,vt.T=null;var s=Rt.p;Rt.p=2;var c=He;He|=4;try{g_(t,n.alternate,n)}finally{He=c,Rt.p=s,vt.T=a}}on=3}}function Kd(){if(on===4||on===3){on=0;var t=Ls;Ls=null,It();var n=Pi,a=Yr,s=na,c=N_,f=(s&335544064)===s?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?on=5:(on=0,Yr=Pi=null,X_(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(or=null),Io(s),a=a.stateNode,Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Jt,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=vt.T,f=Rt.p,Rt.p=2,vt.T=null;try{for(var _=n.onRecoverableError,A=0;A<c.length;A++){var B=c[A];_(B.value,{componentStack:B.stack})}}finally{vt.T=a,Rt.p=f}}if(c=Os,_=Ps,Ps=null,c!==null&&(Os=null,_===null&&(_=[]),t!==null))for(B=0;B<c.length;B++)a=(0,c[B])(_),a!==void 0&&t.finished.finally(a);(na&3)!==0&&eu(),ia(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===Jc?hl++:(hl=0,Jc=n):(hl=0,Jc=null),pl(0)}}function X_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Zo(n)))}function eu(){return Ls!==null&&(Ls.skipTransition(),Ls=null),Yd(),Zd(),Kd(),Qd()}function Qd(){if(on!==5)return!1;var t=Pi,n=Xd;Xd=0;var a=Io(na),s=vt.T,c=Rt.p;try{Rt.p=32>a?32:a,vt.T=null,a=kd,kd=null;var f=Pi,_=na;if(on=0,Yr=Pi=null,na=0,(He&6)!==0)throw Error(r(331));var A=He;if(He|=4,C_(f.current),b_(f,f.current,_,a),He=A,pl(0,!1),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Jt,f)}catch{}return!0}finally{Rt.p=c,vt.T=s,X_(t,n)}}function k_(t,n,a){n=yi(a,n),n=hd(t.stateNode,n,2),t=$a(t,n,2),t!==null&&(Wi(t,2),ia(t))}function qe(t,n,a){if(t.tag===3)k_(t,t,a);else for(;n!==null;){if(n.tag===3){k_(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(or===null||!or.has(s))){t=yi(a,t),a=Hg(2),s=$a(n,a,2),s!==null&&(Gg(a,s,n,t),Wi(s,2),ia(s));break}}n=n.return}}function Jd(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Iy;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Gd=!0,c.add(a),t=ky.bind(null,t,n,a),n.then(t,t))}function ky(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,je===t&&(Ae&a)===a&&((dn===4||dn===3&&(Ae&62914560)===Ae&&300>kt()-Zc)&&(He&2)===0?zs(t,0):Yc|=a,Us===Ae&&(Us=0)),ia(t)}function W_(t,n){n===0&&(n=Uo()),t=Nr(t,n),t!==null&&(Wi(t,n),ia(t))}function Wy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),W_(t,a)}function qy(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),W_(t,a)}function Yy(t,n){return Dt(t,n)}var Bs=null,Hs=null,jd=!1,nu=!1,$d=!1,cr=0;function ia(t){t!==Hs&&t.next===null&&(Hs===null?Bs=Hs=t:Hs=Hs.next=t),nu=!0,jd||(jd=!0,Ky())}function pl(t,n){if(!$d&&nu){$d=!0;do for(var a=!1,s=Bs;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var _=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-ue(42|t)+1)-1,f&=c&~(_&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,K_(s,f))}else f=Ae,f=Rr(s,s===je?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Xa(s,f)||(a=!0,K_(s,f));s=s.next}while(a);$d=!1}}function Zy(){q_()}function q_(){nu=jd=!1;var t=0;cr!==0&&sE()&&(t=cr);for(var n=kt(),a=null,s=Bs;s!==null;){var c=s.next,f=Y_(s,n);f===0?(s.next=null,a===null?Bs=c:a.next=c,c===null&&(Hs=a)):(a=s,(t!==0||(f&3)!==0)&&(nu=!0)),s=c}on!==0&&on!==5||pl(t),cr!==0&&(cr=0)}function Y_(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-ue(f),A=1<<_,B=c[_];B===-1?((A&a)===0||(A&s)!==0)&&(c[_]=No(A,n)):B<=n&&(t.expiredLanes|=A),f&=~A}if(n=je,a=Ae,a=Rr(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(We===2||We===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&jt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Xa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&jt(s),Io(a)){case 2:case 8:a=J;break;case 32:a=Ct;break;case 268435456:a=Lt;break;default:a=Ct}return s=Z_.bind(null,t),a=Dt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&jt(s),t.callbackPriority=2,t.callbackNode=null,2}function Z_(t,n){if(on!==0&&on!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(eu()&&t.callbackNode!==a)return null;var s=Ae;return s=Rr(t,t===je?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(L_(t,s,n),Y_(t,kt()),t.callbackNode!=null&&t.callbackNode===a?Z_.bind(null,t):null)}function K_(t,n){if(eu())return null;L_(t,n,!0)}function Ky(){lE(function(){(He&6)!==0?Dt(ce,Zy):q_()})}function th(){if(cr===0){var t=zr;t===0&&(t=os,os<<=1,(os&261888)===0&&(os=256)),cr=t}return cr}function Q_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:jl(t)}function Qy(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Q_((c[q]||null).action),_=s.submitter;_&&(n=(n=_[q]||null)?Q_(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var A=new nc("action","action",null,s,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(cr!==0){var B=new FormData(c,_);ld(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(A.preventDefault(),B=new FormData(c,_),ld(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var eh=0;eh<Af.length;eh++){var nh=Af[eh],Jy=nh.toLowerCase(),jy=nh[0].toUpperCase()+nh.slice(1);Ni(Jy,"on"+jy)}Ni(y0,"onAnimationEnd"),Ni(E0,"onAnimationIteration"),Ni(T0,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(oy,"onTransitionRun"),Ni(ly,"onTransitionStart"),Ni(cy,"onTransitionCancel"),Ni(b0,"onTransitionEnd"),cn("onMouseEnter",["mouseout","mouseover"]),cn("onMouseLeave",["mouseout","mouseover"]),cn("onPointerEnter",["pointerout","pointerover"]),cn("onPointerLeave",["pointerout","pointerover"]),Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$y=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ml));function J_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var A=s[_],B=A.instance,it=A.currentTarget;if(A=A.listener,B!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=it;try{f(c)}catch(dt){rc(dt)}c.currentTarget=null,f=B}else for(_=0;_<s.length;_++){if(A=s[_],B=A.instance,it=A.currentTarget,A=A.listener,B!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=it;try{f(c)}catch(dt){rc(dt)}c.currentTarget=null,f=B}}}}function Te(t,n){var a=n[ot];a===void 0&&(a=n[ot]=new Set);var s=t+"__bubble";a.has(s)||(j_(n,t,2,!1),a.add(s))}function ih(t,n,a){var s=0;n&&(s|=4),j_(a,t,s,n)}var iu="_reactListening"+Math.random().toString(36).slice(2);function ah(t){if(!t[iu]){t[iu]=!0,Ge.forEach(function(a){a!=="selectionchange"&&($y.has(a)||ih(a,!1,t),ih(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[iu]||(n[iu]=!0,ih("selectionchange",!1,n))}}function j_(t,n,a,s){switch(Gv(n)){case 2:var c=WE;break;case 8:c=qE;break;default:c=Th}a=c.bind(null,n,a,t),c=void 0,!df||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function rh(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var A=s.stateNode.containerInfo;if(A===c)break;if(_===4)for(_=s.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;A!==null;){if(_=se(A),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){s=f=_;continue t}A=A.parentNode}}s=s.return}jm(function(){var it=f,dt=uf(a),xt=[];t:{var $=A0.get(t);if($!==void 0){var ut=nc,Pt=t;switch(t){case"keypress":if(tc(a)===0)break t;case"keydown":case"keyup":ut=zM;break;case"focusin":Pt="focus",ut=gf;break;case"focusout":Pt="blur",ut=gf;break;case"beforeblur":case"afterblur":ut=gf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=e0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=bM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=VM;break;case y0:case E0:case T0:ut=CM;break;case b0:ut=kM;break;case"scroll":case"scrollend":ut=EM;break;case"wheel":ut=qM;break;case"copy":case"cut":case"paste":ut=DM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=i0;break;case"submit":ut=HM;break;case"toggle":case"beforetoggle":ut=ZM}var Qt=(n&4)!==0,pe=!Qt&&(t==="scroll"||t==="scrollend"),nt=Qt?$!==null?$+"Capture":null:$;Qt=[];for(var Z=it,st;Z!==null;){var St=Z;if(st=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||st===null||nt===null||(St=zo(Z,nt),St!=null&&Qt.push(gl(Z,St,st))),pe)break;Z=Z.return}0<Qt.length&&($=new ut($,Pt,null,a,dt),xt.push({event:$,listeners:Qt}))}}if((n&7)===0){t:{if(ut=t==="mouseover"||t==="pointerover",$=t==="mouseout"||t==="pointerout",ut&&a!==cf&&(Pt=a.relatedTarget||a.fromElement)&&(se(Pt)||Pt[ht]))break t;($||ut)&&(Pt=dt.window===dt?dt:(ut=dt.ownerDocument)?ut.defaultView||ut.parentWindow:window,$?(ut=a.relatedTarget||a.toElement,$=it,ut=ut?se(ut):null,ut!==null&&(pe=u(ut),Qt=ut.tag,ut!==pe||Qt!==5&&Qt!==27&&Qt!==6)&&(ut=null)):($=null,ut=it),$!==ut&&(Qt=e0,St="onMouseLeave",nt="onMouseEnter",Z="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=i0,St="onPointerLeave",nt="onPointerEnter",Z="pointer"),pe=$==null?Pt:qt($),st=ut==null?Pt:qt(ut),Pt=new Qt(St,Z+"leave",$,a,dt),Pt.target=pe,Pt.relatedTarget=st,St=null,se(dt)===it&&(Qt=new Qt(nt,Z+"enter",ut,a,dt),Qt.target=st,Qt.relatedTarget=pe,St=Qt),pe=St,Qt=$&&ut?U($,ut,tE):null,$!==null&&$_(xt,Pt,$,Qt,!1),ut!==null&&pe!==null&&$_(xt,pe,ut,Qt,!0)))}t:{if($=it?qt(it):window,ut=$.nodeName&&$.nodeName.toLowerCase(),ut==="select"||ut==="input"&&$.type==="file")var Yt=f0;else if(c0($))if(d0)Yt=ay;else{Yt=ny;var Re=ey}else ut=$.nodeName,!ut||ut.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?it&&lf(it.elementType)&&(Yt=f0):Yt=iy;if(Yt&&(Yt=Yt(t,it))){u0(xt,Yt,a,dt);break t}Re&&Re(t,$,it)}switch(Re=it?qt(it):window,t){case"focusin":(c0(Re)||Re.contentEditable==="true")&&(ps=Re,Ef=it,Wo=null);break;case"focusout":Wo=Ef=ps=null;break;case"mousedown":Tf=!0;break;case"contextmenu":case"mouseup":case"dragend":Tf=!1,x0(xt,a,dt);break;case"selectionchange":if(sy)break;case"keydown":case"keyup":x0(xt,a,dt)}var ee;if(vf)t:{switch(t){case"compositionstart":var re="onCompositionStart";break t;case"compositionend":re="onCompositionEnd";break t;case"compositionupdate":re="onCompositionUpdate";break t}re=void 0}else hs?o0(t,a)&&(re="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(a0&&a.locale!=="ko"&&(hs||re!=="onCompositionStart"?re==="onCompositionEnd"&&hs&&(ee=$m()):(ka=dt,hf="value"in ka?ka.value:ka.textContent,hs=!0)),Re=au(it,re),0<Re.length&&(re=new n0(re,t,null,a,dt),xt.push({event:re,listeners:Re}),ee?re.data=ee:(ee=l0(a),ee!==null&&(re.data=ee)))),(ee=QM?JM(t,a):jM(t,a))&&(re=au(it,"onBeforeInput"),0<re.length&&(Re=new n0("onBeforeInput","beforeinput",null,a,dt),xt.push({event:Re,listeners:re}),Re.data=ee)),Qy(xt,t,it,a,dt)}J_(xt,n)})}function gl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function au(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zo(t,a),c!=null&&s.unshift(gl(t,c,f)),c=zo(t,n),c!=null&&s.push(gl(t,c,f))),t.tag===3)return s;t=t.return}return[]}function tE(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function $_(t,n,a,s,c){for(var f=n._reactName,_=[];a!==null&&a!==s;){var A=a,B=A.alternate,it=A.stateNode;if(A=A.tag,B!==null&&B===s)break;A!==5&&A!==26&&A!==27||it===null||(B=it,c?(it=zo(a,f),it!=null&&_.unshift(gl(a,it,B))):c||(it=zo(a,f),it!=null&&_.push(gl(a,it,B)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var eE=/\r\n?/g,nE=/\u0000|\uFFFD/g;function tv(t){return(typeof t=="string"?t:""+t).replace(eE,`
`).replace(nE,"")}function ev(t,n){return n=tv(n),tv(t)===n}function Ye(t,n,a,s,c,f){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||us(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&us(t,""+s);else return;break;case"className":si(t,"class",s);break;case"tabIndex":si(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":si(t,a,s);break;case"style":Qm(t,s,f);return;case"data":if(n!=="object"){si(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=jl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ye(t,n,"name",c.name,c,null),Ye(t,n,"formEncType",c.formEncType,c,null),Ye(t,n,"formMethod",c.formMethod,c,null),Ye(t,n,"formTarget",c.formTarget,c,null)):(Ye(t,n,"encType",c.encType,c,null),Ye(t,n,"method",c.method,c,null),Ye(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=jl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Yi);return;case"onScroll":s!=null&&Te("scroll",t);return;case"onScrollEnd":s!=null&&Te("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=jl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Te("beforetoggle",t),Te("toggle",t),$e(t,"popover",s);break;case"xlinkActuate":be(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":be(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":be(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":be(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":be(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":be(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":be(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":be(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":be(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":$e(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=MM.get(a)||a,$e(t,a,s);else return}Se=!0}function sh(t,n,a,s,c,f){switch(a){case"style":Qm(t,s,f);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")us(t,s);else if(typeof s=="number"||typeof s=="bigint")us(t,""+s);else return;break;case"onScroll":s!=null&&Te("scroll",t);return;case"onScrollEnd":s!=null&&Te("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Yi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!yn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=t[q]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,c),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,s,c);break t}Se=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):$e(t,a,s)}return}Se=!0}function Pn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",t),Te("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ye(t,n,f,_,a,null)}}c&&Ye(t,n,"srcSet",a.srcSet,a,null),s&&Ye(t,n,"src",a.src,a,null);return;case"input":Te("invalid",t);var A=f=_=c=null,B=null,it=null;for(s in a)if(a.hasOwnProperty(s)){var dt=a[s];if(dt!=null)switch(s){case"name":c=dt;break;case"type":_=dt;break;case"checked":B=dt;break;case"defaultChecked":it=dt;break;case"value":f=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Ye(t,n,s,dt,a,null)}}qm(t,f,A,B,it,_,c,!1);return;case"select":Te("invalid",t),s=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":_=A;break;case"multiple":s=A;default:Ye(t,n,c,A,a,null)}n=f,a=_,t.multiple=!!s,n!=null?cs(t,!!s,n,!1):a!=null&&cs(t,!!s,a,!0);return;case"textarea":Te("invalid",t),f=c=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":s=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Ye(t,n,_,A,a,null)}Zm(t,s,c,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(s=a[B],s!=null)&&(B==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ye(t,n,B,s,a,null));return;case"dialog":Te("beforetoggle",t),Te("toggle",t),Te("cancel",t),Te("close",t);break;case"iframe":case"object":Te("load",t);break;case"video":case"audio":for(s=0;s<ml.length;s++)Te(ml[s],t);break;case"image":Te("error",t),Te("load",t);break;case"details":Te("toggle",t);break;case"embed":case"source":case"link":Te("error",t),Te("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(s=a[it],s!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ye(t,n,it,s,a,null)}return;default:if(lf(n)){for(dt in a)a.hasOwnProperty(dt)&&(s=a[dt],s!==void 0&&sh(t,n,dt,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&Ye(t,n,A,s,a,null))}var iE={};function aE(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,A=null,B=null,it=null,dt=null;for(ut in a){var xt=a[ut];if(a.hasOwnProperty(ut)&&xt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":B=xt;default:s.hasOwnProperty(ut)||Ye(t,n,ut,null,s,xt)}}for(var $ in s){var ut=s[$];if(xt=a[$],s.hasOwnProperty($)&&(ut!=null||xt!=null))switch($){case"type":ut!==xt&&(Se=!0),f=ut;break;case"name":ut!==xt&&(Se=!0),c=ut;break;case"checked":ut!==xt&&(Se=!0),it=ut;break;case"defaultChecked":ut!==xt&&(Se=!0),dt=ut;break;case"value":ut!==xt&&(Se=!0),_=ut;break;case"defaultValue":ut!==xt&&(Se=!0),A=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:ut!==xt&&Ye(t,n,$,ut,s,xt)}}sf(t,_,A,B,it,dt,f,c);return;case"select":ut=_=A=$=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ut=B;default:s.hasOwnProperty(f)||Ye(t,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":f!==B&&(Se=!0),$=f;break;case"defaultValue":f!==B&&(Se=!0),A=f;break;case"multiple":f!==B&&(Se=!0),_=f;default:f!==B&&Ye(t,n,c,f,s,B)}n=A,a=_,s=ut,$!=null?cs(t,!!a,$,!1):!!s!=!!a&&(n!=null?cs(t,!!a,n,!0):cs(t,!!a,a?[]:"",!1));return;case"textarea":ut=$=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ye(t,n,A,null,s,c)}for(_ in s)if(c=s[_],f=a[_],s.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":c!==f&&(Se=!0),$=c;break;case"defaultValue":c!==f&&(Se=!0),ut=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ye(t,n,_,c,s,f)}Ym(t,$,ut);return;case"option":for(var Pt in a)$=a[Pt],a.hasOwnProperty(Pt)&&$!=null&&!s.hasOwnProperty(Pt)&&(Pt==="selected"?t.selected=!1:Ye(t,n,Pt,null,s,$));for(B in s)$=s[B],ut=a[B],s.hasOwnProperty(B)&&$!==ut&&($!=null||ut!=null)&&(B==="selected"?($!==ut&&(Se=!0),t.selected=$&&typeof $!="function"&&typeof $!="symbol"):Ye(t,n,B,$,s,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)$=a[Qt],a.hasOwnProperty(Qt)&&$!=null&&!s.hasOwnProperty(Qt)&&Ye(t,n,Qt,null,s,$);for(it in s)if($=s[it],ut=a[it],s.hasOwnProperty(it)&&$!==ut&&($!=null||ut!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:Ye(t,n,it,$,s,ut)}return;default:if(lf(n)){for(var pe in a)$=a[pe],a.hasOwnProperty(pe)&&$!==void 0&&!s.hasOwnProperty(pe)&&sh(t,n,pe,void 0,s,$);for(dt in s)$=s[dt],ut=a[dt],!s.hasOwnProperty(dt)||$===ut||$===void 0&&ut===void 0||sh(t,n,dt,$,s,ut);return}}for(var nt in a)$=a[nt],a.hasOwnProperty(nt)&&$!=null&&!s.hasOwnProperty(nt)&&Ye(t,n,nt,null,s,$);for(xt in s)$=s[xt],ut=a[xt],!s.hasOwnProperty(xt)||$===ut||$==null&&ut==null||Ye(t,n,xt,$,s,ut)}function nv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function rE(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,_=c.initiatorType,A=c.duration;if(f&&A&&nv(_)){for(_=0,A=c.responseEnd,s+=1;s<a.length;s++){var B=a[s],it=B.startTime;if(it>A)break;var dt=B.transferSize,xt=B.initiatorType;dt&&nv(xt)&&(B=B.responseEnd,_+=dt*(B<A?1:(A-it)/(B-it)))}if(--s,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var oh=null,lh=null;function _l(t){return t.nodeType===9?t:t.ownerDocument}function iv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function av(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function rv(t,n,a,s){return a=_l(a).createElement(t),a[b]=s,a[q]=n,Pn(a,t,n),ve(a),a}function ch(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var uh=null;function sE(){var t=window.event;return t&&t.type==="popstate"?t===uh?!1:(uh=t,!0):(uh=null,!1)}var fh=typeof setTimeout=="function"?setTimeout:void 0,oE=typeof clearTimeout=="function"?clearTimeout:void 0,sv=typeof Promise=="function"?Promise:void 0,ov=typeof requestAnimationFrame=="function"?requestAnimationFrame:fh,lE=typeof queueMicrotask=="function"?queueMicrotask:typeof sv<"u"?function(t){return sv.resolve(null).then(t).catch(cE)}:fh;function cE(t){setTimeout(function(){throw t})}function ur(t){return t==="head"}function lv(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),Ys(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Sh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Sh(a);for(var f=a.firstChild;f;){var _=f.nextSibling,A=f.nodeName;f[Ot]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Sh(t.ownerDocument.body);a=c}while(a);Ys(n)}function cv(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function uv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var c=s=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function fv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function uE(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function dh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return uE(n,a,t)}function fE(t){return t.documentElement.clientHeight}function dE(t){this.addEventListener("load",t),this.addEventListener("error",t)}function hE(t,n,a,s,c,f,_,A,B){var it=n.nodeType===9?n:n.ownerDocument;try{var dt=it.startViewTransition({update:function(){var $=it.defaultView,ut=$.navigation&&$.navigation.transition,Pt=it.fonts.status;s();var Qt=[];if(Pt==="loaded"&&(fE(it),it.fonts.status==="loading"&&Qt.push(it.fonts.ready)),Pt=Qt.length,t!==null)for(var pe=t.suspenseyImages,nt=0,Z=0;Z<pe.length;Z++){var st=pe[Z];if(!st.complete){var St=st.getBoundingClientRect();if(0<St.bottom&&0<St.right&&St.top<$.innerHeight&&St.left<$.innerWidth){if(nt+=Uv(st),nt>ou){Qt.length=Pt;break}st=new Promise(dE.bind(st)),Qt.push(st)}}}if(0<Qt.length)return $=Promise.race([Promise.all(Qt),new Promise(function(Yt){return setTimeout(Yt,500)})]).then(c,c),(ut?Promise.allSettled([ut.finished,$]):$).then(f,f);if(c(),ut)return ut.finished.then(f,f);f()},types:a});it.__reactViewTransition=dt;var xt=[];return dt.ready.then(function(){for(var $=it.documentElement.getAnimations({subtree:!0}),ut=0;ut<$.length;ut++){var Pt=$[ut],Qt=Pt.effect,pe=Qt.pseudoElement;if(pe!=null&&pe.startsWith("::view-transition")){xt.push(Pt),Pt=Qt.getKeyframes();for(var nt=pe=void 0,Z=!0,st=0;st<Pt.length;st++){var St=Pt[st],Yt=St.width;if(pe===void 0)pe=Yt;else if(pe!==Yt){Z=!1;break}if(Yt=St.height,nt===void 0)nt=Yt;else if(nt!==Yt){Z=!1;break}delete St.width,delete St.height,St.transform==="none"&&delete St.transform}Z&&pe!==void 0&&nt!==void 0&&(Qt.setKeyframes(Pt),Z=getComputedStyle(Qt.target,Qt.pseudoElement),Z.width!==pe||Z.height!==nt)&&(Z=Pt[0],Z.width=pe,Z.height=nt,Z=Pt[Pt.length-1],Z.width=pe,Z.height=nt,Qt.setKeyframes(Pt))}}_()},function($){it.__reactViewTransition===dt&&(it.__reactViewTransition=null);try{typeof $=="object"&&$!==null&&$.name==="InvalidStateError"&&($.message==="View transition was skipped because document visibility state is hidden."||$.message==="Skipping view transition because document visibility state has become hidden."||$.message==="Skipping view transition because viewport size changed."||$.message==="Transition was aborted because of invalid state")&&($=null),$!==null&&B($)}finally{s(),c(),_()}}),dt.finished.finally(function(){for(var $=0;$<xt.length;$++)xt[$].cancel();it.__reactViewTransition===dt&&(it.__reactViewTransition=null),A()}),dt}catch{return s(),c(),_(),null}}function Zr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Zr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:z({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Zr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===t&&f.pseudoElement===n&&s.push(a[c])}return s},Zr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function dv(t){return{name:t,group:new Zr("group",t),imagePair:new Zr("image-pair",t),old:new Zr("old",t),new:new Zr("new",t)}}function hi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}hi.prototype.addEventListener=function(t,n,a){var s=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(pv(f,t,n,a)===-1){var _=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(B){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),s!==null&&(c=_.removeEventListener.bind(_,t,n,a),s.addEventListener("abort",c,{once:!0}),c=s.removeEventListener.bind(s,"abort",c)),s=Gs(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:c}),g(this._fragmentFiber.child,!1,pE,t,A,s)}this._eventListeners=f}};function pE(t,n,a,s){return x(t).addEventListener(n,a,s),!1}hi.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=pv(s,t,n,a),n!==-1)){var c=s[n];a=c.attachedListener;var f=c.cleanup;c=Gs(c.optionsOrUseCapture),g(this._fragmentFiber.child,!1,mE,t,a,c),s.splice(n,1),f!==null&&f()}};function mE(t,n,a,s){return x(t).removeEventListener(n,a,s),!1}function Gs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function hv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function pv(t,n,a,s){if(t.length===0)return-1;s=hv(s);for(var c=0;c<t.length;c++){var f=t[c];if(f.type===n&&f.listener===a&&hv(f.optionsOrUseCapture)===s)return c}return-1}hi.prototype.dispatchEvent=function(t){var n=v(this._fragmentFiber);if(n===null)return!0;n=x(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];s.addEventListener(f.type,f.attachedListener,Gs(f.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(c=0;c<a.length;c++)f=a[c],s.removeEventListener(f.type,f.attachedListener,Gs(f.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},hi.prototype.focus=function(t){g(this._fragmentFiber.child,!0,mv,t,void 0,void 0)};function mv(t,n){return t.tag===6?!1:(t=x(t),RE(t,n))}hi.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,hh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!mv(n[a],t);a--);};function hh(t,n){return n.push(t),!1}hi.prototype.blur=function(){var t=v(this._fragmentFiber);t!==null&&(t=x(t),t=_l(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,gE,t,void 0,void 0))};function gE(t,n){return t.tag===6?!1:(t=x(t),t===n||t.contains(n)?(n.blur(),!0):!1)}hi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,_E,t,void 0,void 0)};function _E(t,n){return t.tag===6||(t=x(t),n.observe(t)),!1}hi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,vE,t,void 0,void 0);for(var a=n=0;a<Ii.length;a++){var s=Ii[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Ii[n++]=s}Ii.length=n}};function vE(t,n){return t.tag===6||(t=x(t),n.unobserve(t)),!1}var Ii=[],ph=!1;function SE(t,n,a){Ii.push({fragmentInstance:t,observer:n,instance:a}),ph||(ph=!0,CE(function(){ph=!1;var s=Ii;Ii=[];for(var c=0;c<s.length;c++){var f=s[c];f.observer.unobserve(f.instance)}}))}hi.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,xE,t,void 0,void 0),t};function xE(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=x(t),n.push.apply(n,t.getClientRects());return!1}hi.prototype.getRootNode=function(t){var n=v(this._fragmentFiber);return n===null?this:x(n).getRootNode(t)},hi.prototype.compareDocumentPosition=function(t){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,hh,a,void 0,void 0);var s=x(n);if(a.length===0){if(a=s,E(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=s=a.compareDocumentPosition(t);return a===t?c=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=R(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(t=x(a).compareDocumentPosition(t),c=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=x(a[0]),c=x(a[a.length-1]);var f=E(this._fragmentFiber)?n.parentElement:s;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),A=c.compareDocumentPosition(t),B=_&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=s&&f&&_&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||f&&c===t||B||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!f&&c===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||ME(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function ME(t,n,a,s,c){var f=se(c);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;t:{for(f=n,n=v(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=U(a,f,w),n===null?n=!1:(g(n,!0,X,f,a),f=M,M=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===s)&&(n=U(s,f,w),n===null?n=!1:(g(n,!0,D,f,s),f=M,L=M=null,n=f!==null)),n):!1}function gv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}hi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];g(this._fragmentFiber.child,!1,hh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=R(this._fragmentFiber);if(s=a?s[1]||s[0]||v(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=x(s),gv(t,a);return}if(s=x(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var c=n[s];c.tag===6?(c=x(c),gv(c,a)):x(c).scrollIntoView(t),s+=a?-1:1}};function yE(t,n){return t=x(t),_v(t,n),!1}function _v(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function vv(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.addEventListener(c.type,c.attachedListener,Gs(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var _=0,A=0;A<Ii.length;A++){var B=Ii[A];(B.fragmentInstance!==n||B.observer!==f||B.instance!==t)&&(Ii[_++]=B)}Ii.length=_,f.observe(t)}),_v(t,n))}function EE(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.removeEventListener(c.type,c.attachedListener,Gs(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?SE(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function mh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":mh(a),Kt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function TE(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ot])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ri(t.nextSibling),t===null)break}return null}function bE(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ri(t.nextSibling),t===null))return null;return t}function Sv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ri(t.nextSibling),t===null))return null;return t}function gh(t){return t.data==="$?"||t.data==="$~"}function _h(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function AE(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Ri(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var vh=null;function xv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ri(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Mv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function RE(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function CE(t){ov(function(){ov(function(n){return t(n)})})}function yv(t,n,a){switch(n=_l(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Ev(t,n,a){for(var s in a){var c=a[s];a.hasOwnProperty(s)&&c!=null&&Ye(t,n,s,null,iE,c)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Yi&&(t.onclick=null),Kt(t)}function Sh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Kt(t)}var Ci=new Map,Tv=new Set;function vl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var wa=Rt.d;Rt.d={f:wE,r:DE,D:NE,C:UE,L:LE,m:OE,X:IE,S:PE,M:zE};function wE(){var t=wa.f(),n=jc();return t||n}function DE(t){var n=fe(t);n!==null&&n.tag===5&&n.type==="form"?Ag(n):wa.r(t)}var Vs=typeof document>"u"?null:document;function bv(t,n,a){var s=Vs;if(s&&typeof n=="string"&&n){var c=xi(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Tv.has(c)||(Tv.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Pn(n,"link",t),ve(n),s.head.appendChild(n)))}}function NE(t){wa.D(t),bv("dns-prefetch",t,null)}function UE(t,n){wa.C(t,n),bv("preconnect",t,n)}function LE(t,n,a){wa.L(t,n,a);var s=Vs;if(s&&t&&n){var c='link[rel="preload"][as="'+xi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+xi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+xi(a.imageSizes)+'"]')):c+='[href="'+xi(t)+'"]';var f=c;switch(n){case"style":f=Xs(t);break;case"script":f=ks(t)}if(!(Ci.has(f)||(t=z({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ci.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(Sl(f))||n==="script"&&s.querySelector(xl(f))))){var _=s.createElement("link");Pn(_,"link",t),n==="style"&&(_[Zt]=!0,_.onload=_.onerror=function(){Ke(_)}),ve(_),s.head.appendChild(_)}}}function OE(t,n){wa.m(t,n);var a=Vs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+xi(s)+'"][href="'+xi(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ks(t)}if(!Ci.has(f)&&(t=z({rel:"modulepreload",href:t},n),Ci.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xl(f)))return}s=a.createElement("link"),Pn(s,"link",t),ve(s),a.head.appendChild(s)}}}function PE(t,n,a){wa.S(t,n,a);var s=Vs;if(s&&t){var c=ye(s).hoistableStyles,f=Xs(t);n=n||"default";var _=c.get(f);if(!_){var A={loading:0,preload:null};if(_=s.querySelector(Sl(f)))A.loading=5;else{t=z({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ci.get(f))&&xh(t,a);var B=_=s.createElement("link");ve(B),Pn(B,"link",t),B._p=new Promise(function(it,dt){B.onload=it,B.onerror=dt}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ru(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:A},c.set(f,_)}}}function IE(t,n){wa.X(t,n);var a=Vs;if(a&&t){var s=ye(a).hoistableScripts,c=ks(t),f=s.get(c);f||(f=a.querySelector(xl(c)),f||(t=z({src:t,async:!0},n),(n=Ci.get(c))&&Mh(t,n),f=a.createElement("script"),ve(f),Pn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function zE(t,n){wa.M(t,n);var a=Vs;if(a&&t){var s=ye(a).hoistableScripts,c=ks(t),f=s.get(c);f||(f=a.querySelector(xl(c)),f||(t=z({src:t,async:!0,type:"module"},n),(n=Ci.get(c))&&Mh(t,n),f=a.createElement("script"),ve(f),Pn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Av(t,n,a,s){var c=(c=ze.current)?vl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Xs(a.href),n=ye(c).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Xs(a.href);var f=ye(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(Sl(t)))?f._p||(_.instance=f,_.state.loading=5):(f=Ci.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ci.set(t,f)),FE(c,t,f,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=ks(a),n=ye(c).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Xs(t){return'href="'+xi(t)+'"'}function Sl(t){return'link[rel="stylesheet"]['+t+"]"}function Rv(t){return z({},t,{"data-precedence":t.precedence,precedence:null})}function FE(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Zt]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Zt]=!0,n.onload=n.onerror=Ke.bind(null,n),Pn(n,"link",a),ve(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function ks(t){return'[src="'+xi(t)+'"]'}function xl(t){return"script[async]"+t}function Cv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+xi(a.href)+'"]');if(s)return n.instance=s,ve(s),s;var c=z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),ve(s),Pn(s,"style",c),ru(s,a.precedence,t),n.instance=s;case"stylesheet":c=Xs(a.href);var f=t.querySelector(Sl(c));if(f)return n.state.loading|=4,n.instance=f,ve(f),f;s=Rv(a),(c=Ci.get(c))&&xh(s,c),f=(t.ownerDocument||t).createElement("link"),ve(f);var _=f;return _._p=new Promise(function(A,B){_.onload=A,_.onerror=B}),Pn(f,"link",s),n.state.loading|=4,ru(f,a.precedence,t),n.instance=f;case"script":return f=ks(a.src),(c=t.querySelector(xl(f)))?(n.instance=c,ve(c),c):(s=a,(c=Ci.get(f))&&(s=z({},a),Mh(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),ve(c),Pn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,ru(s,a.precedence,t));return n.instance}function ru(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,_=0;_<s.length;_++){var A=s[_];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function xh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Mh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var su=null;function wv(t,n,a){if(su===null){var s=new Map,c=su=new Map;c.set(a,s)}else c=su,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Ot]||f[b]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var A=s.get(_);A?A.push(f):s.set(_,[f])}}return s}function yh(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function BE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Dv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Nv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Uv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Lv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Uv(n),t.suspenseyImages.push(n)),t=VE.bind(t),n.decode().then(t,t))}function HE(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Xs(s.href),f=n.querySelector(Sl(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Ml.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,ve(f);return}f=n.ownerDocument||n,s=Rv(s),(c=Ci.get(c))&&xh(s,c),f=f.createElement("link"),ve(f);var _=f;_._p=new Promise(function(A,B){_.onload=A,_.onerror=B}),Pn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ml.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ou=0;function GE(t,n){return t.stylesheets&&t.count===0&&cu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&cu(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&ou===0&&(ou=62500*rE());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&cu(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>ou?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Ov(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)cu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function Ml(){this.count--,Ov(this)}function VE(){this.imgCount--,Ov(this)}var lu=null;function cu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,lu=new Map,n.forEach(XE,t),lu=null,Ml.call(t))}function XE(t,n){if(!(n.state.loading&4)){var a=lu.get(t);if(a)var s=a.get(null);else{a=new Map,lu.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,c),a.set(_,c),this.count++,s=Ml.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Ws={$$typeof:Y,Provider:null,Consumer:null,_currentValue:Xe,_currentValue2:Xe,_threadCount:0};function kE(t,n,a,s,c,f,_,A,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ls(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ls(0),this.hiddenUpdates=ls(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function Pv(t,n,a,s,c,f,_,A,B,it,dt,xt){return t=new kE(t,n,a,_,B,it,dt,xt,A),n=1,f===!0&&(n|=24),f=Jn(3,null,null,n),t.current=f,f.stateNode=t,n=zf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Gf(f),t}function Iv(t){return t?(t=_s,t):_s}function zv(t,n,a,s,c,f){c=Iv(c),s.context===null?s.context=c:s.pendingContext=c,s=ja(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=$a(t,s,n),a!==null&&(ei(a,t,n),jo(a,t,n))}function Fv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Eh(t,n){Fv(t,n),(t=t.alternate)&&Fv(t,n)}function Bv(t){if(t.tag===13||t.tag===31){var n=Nr(t,67108864);n!==null&&ei(n,t,67108864),Eh(t,67108864)}}function Hv(t){if(t.tag===13||t.tag===31){var n=di();n=Po(n);var a=Nr(t,n);a!==null&&ei(a,t,n),Eh(t,n)}}var qs=!0;function WE(t,n,a,s){var c=vt.T;vt.T=null;var f=Rt.p;try{Rt.p=2,Th(t,n,a,s)}finally{Rt.p=f,vt.T=c}}function qE(t,n,a,s){var c=vt.T;vt.T=null;var f=Rt.p;try{Rt.p=8,Th(t,n,a,s)}finally{Rt.p=f,vt.T=c}}function Th(t,n,a,s){if(qs){var c=bh(s);if(c===null)rh(t,n,s,uu,a),Vv(t,s);else if(ZE(c,t,n,a,s))s.stopPropagation();else if(Vv(t,s),n&4&&-1<YE.indexOf(t)){for(;c!==null;){var f=fe(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=ma(f.pendingLanes);if(_!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var B=1<<31-ue(_);A.entanglements[1]|=B,_&=~B}ia(f),(He&6)===0&&(Kc=kt()+500,pl(0))}}break;case 31:case 13:A=Nr(f,2),A!==null&&ei(A,f,2),jc(),Eh(f,2)}if(f=bh(s),f===null&&rh(t,n,s,uu,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else rh(t,n,s,null,a)}}function bh(t){return t=uf(t),Ah(t)}var uu=null;function Ah(t){if(uu=null,t=se(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return uu=t,null}function Gv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ie()){case ce:return 2;case J:return 8;case Ct:case Mt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var Rh=!1,fr=null,dr=null,hr=null,yl=new Map,El=new Map,pr=[],YE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vv(t,n){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":yl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":El.delete(n.pointerId)}}function Tl(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=fe(n),n!==null&&Bv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function ZE(t,n,a,s,c){switch(n){case"focusin":return fr=Tl(fr,t,n,a,s,c),!0;case"dragenter":return dr=Tl(dr,t,n,a,s,c),!0;case"mouseover":return hr=Tl(hr,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return yl.set(f,Tl(yl.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,El.set(f,Tl(El.get(f)||null,t,n,a,s,c)),!0}return!1}function Xv(t){var n=se(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Ql(t.priority,function(){Hv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ql(t.priority,function(){Hv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=bh(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);cf=s,a.target.dispatchEvent(s),cf=null}else return n=fe(a),n!==null&&Bv(n),t.blockedOn=a,!1;n.shift()}return!0}function kv(t,n,a){fu(t)&&a.delete(n)}function KE(){Rh=!1,fr!==null&&fu(fr)&&(fr=null),dr!==null&&fu(dr)&&(dr=null),hr!==null&&fu(hr)&&(hr=null),yl.forEach(kv),El.forEach(kv)}function du(t,n){t.blockedOn===n&&(t.blockedOn=null,Rh||(Rh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,KE)))}var hu=null;function Wv(t){hu!==t&&(hu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){hu===t&&(hu=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Ah(s||a)===null)continue;break}var f=fe(a);f!==null&&(t.splice(n,3),n-=3,ld(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function Ys(t){function n(B){return du(B,t)}fr!==null&&du(fr,t),dr!==null&&du(dr,t),hr!==null&&du(hr,t),yl.forEach(n),El.forEach(n);for(var a=0;a<pr.length;a++){var s=pr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<pr.length&&(a=pr[0],a.blockedOn===null);)Xv(a),a.blockedOn===null&&pr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],_=c[q]||null;if(typeof f=="function")_||Wv(a);else if(_){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[q]||null)A=_.formAction;else if(Ah(c)!==null)continue}else A=_.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),Wv(a)}}}function qv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Ch(t){this._internalRoot=t}pu.prototype.render=Ch.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=di();zv(a,s,t,n,null,null)},pu.prototype.unmount=Ch.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;zv(t.current,2,null,t,null,null),jc(),n[ht]=null}};function pu(t){this._internalRoot=t}pu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Kl();t={blockedOn:null,target:t,priority:n};for(var a=0;a<pr.length&&n!==0&&n<pr[a].priority;a++);pr.splice(a,0,t),a===0&&Xv(t)}};var Yv=e.version;if(Yv!=="19.3.0")throw Error(r(527,Yv,"19.3.0"));Rt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var QE={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:vt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mu.isDisabled&&mu.supportsFiber)try{Jt=mu.inject(QE),Vt=mu}catch{}}return Al.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Ig,f=zg,_=Fg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Pv(t,1,!1,null,null,a,s,null,c,f,_,qv),t[ht]=n.current,ah(t),new Ch(n)},Al.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Ig,_=zg,A=Fg,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Pv(t,1,!0,n,a??null,s,c,B,f,_,A,qv),n.context=Iv(null),a=n.current,s=di(),s=Po(s),c=ja(s),c.callback=null,$a(a,c,s),a=s,n.current.lanes=a,Wi(n,a),ia(n),t[ht]=n.current,ah(t),new pu(n)},Al.version="19.3.0",Al}var iS;function r1(){if(iS)return Nh.exports;iS=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Nh.exports=a1(),Nh.exports}var s1=r1();const Tm="186",o1=0,aS=1,l1=2,Hu=1,c1=2,Pl=3,_i=0,ii=1,Ia=2,Fa=0,zl=1,rS=2,sS=3,oS=4,u1=5,lo=100,f1=101,d1=102,h1=103,p1=104,m1=200,g1=201,_1=202,v1=203,Ax=204,Rx=205,S1=206,x1=207,M1=208,y1=209,E1=210,T1=211,b1=212,A1=213,R1=214,vp=0,Sp=1,xp=2,Bl=3,Mp=4,yp=5,Ep=6,Tp=7,Cx=0,C1=1,w1=2,ua=0,wx=1,Dx=2,Nx=3,Ux=4,Lx=5,Ox=6,Px=7,Ix=300,is=301,mo=302,Ph=303,Ih=304,tf=306,bp=1e3,za=1001,Ap=1002,zn=1003,D1=1004,gu=1005,Vn=1006,zh=1007,es=1008,gi=1009,zx=1010,Fx=1011,Hl=1012,bm=1013,fa=1014,la=1015,da=1016,Am=1017,Rm=1018,Gl=1020,Bx=35902,Hx=35899,Gx=1021,Vx=1022,Gi=1023,Ga=1026,ns=1027,Xx=1028,Cm=1029,as=1030,wm=1031,Dm=1033,Gu=33776,Vu=33777,Xu=33778,ku=33779,Rp=35840,Cp=35841,wp=35842,Dp=35843,Np=36196,Up=37492,Lp=37496,Op=37488,Pp=37489,Yu=37490,Ip=37491,zp=37808,Fp=37809,Bp=37810,Hp=37811,Gp=37812,Vp=37813,Xp=37814,kp=37815,Wp=37816,qp=37817,Yp=37818,Zp=37819,Kp=37820,Qp=37821,Jp=36492,jp=36494,$p=36495,tm=36283,em=36284,Zu=36285,nm=36286,N1=3200,im=0,U1=1,Er="",Dn="srgb",Ku="srgb-linear",Qu="linear",Ze="srgb",Fh=7680,L1=519,O1=512,P1=513,I1=514,Nm=515,z1=516,F1=517,Um=518,B1=519,H1=35044,lS="300 es",ca=2e3,Vl=2001;function G1(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ju(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function V1(){const o=Ju("canvas");return o.style.display="block",o}const cS={};function uS(...o){const e="THREE."+o.shift();console.log(e,...o)}function kx(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function le(...o){o=kx(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Fe(...o){o=kx(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function uo(...o){const e=o.join(" ");e in cS||(cS[e]=!0,le(...o))}function X1(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const k1={[vp]:Sp,[xp]:Ep,[Mp]:Tp,[Bl]:yp,[Sp]:vp,[Ep]:xp,[Tp]:Mp,[yp]:Bl};class rs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bh=Math.PI/180,am=180/Math.PI;function kl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Hn[o&255]+Hn[o>>8&255]+Hn[o>>16&255]+Hn[o>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[i&63|128]+Hn[i>>8&255]+"-"+Hn[i>>16&255]+Hn[i>>24&255]+Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]).toLowerCase()}function Ne(o,e,i){return Math.max(e,Math.min(i,o))}function W1(o,e){return(o%e+e)%e}function Hh(o,e,i){return(1-i)*o+i*e}function Rl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ni(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Hm=class Hm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ne(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ne(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hm.prototype.isVector2=!0;let Oe=Hm;class Ie{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let p=r[l+0],m=r[l+1],S=r[l+2],g=r[l+3],v=u[d+0],E=u[d+1],R=u[d+2],C=u[d+3];if(g!==C||p!==v||m!==E||S!==R){let x=p*v+m*E+S*R+g*C;x<0&&(v=-v,E=-E,R=-R,C=-C,x=-x);let M=1-h;if(x<.9995){const L=Math.acos(x),X=Math.sin(L);M=Math.sin(M*L)/X,h=Math.sin(h*L)/X,p=p*M+v*h,m=m*M+E*h,S=S*M+R*h,g=g*M+C*h}else{p=p*M+v*h,m=m*M+E*h,S=S*M+R*h,g=g*M+C*h;const L=1/Math.sqrt(p*p+m*m+S*S+g*g);p*=L,m*=L,S*=L,g*=L}}e[i]=p,e[i+1]=m,e[i+2]=S,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],p=r[l+1],m=r[l+2],S=r[l+3],g=u[d],v=u[d+1],E=u[d+2],R=u[d+3];return e[i]=h*R+S*g+p*E-m*v,e[i+1]=p*R+S*v+m*g-h*E,e[i+2]=m*R+S*E+h*v-p*g,e[i+3]=S*R-h*g-p*v-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(r/2),S=h(l/2),g=h(u/2),v=p(r/2),E=p(l/2),R=p(u/2);switch(d){case"XYZ":this._x=v*S*g+m*E*R,this._y=m*E*g-v*S*R,this._z=m*S*R+v*E*g,this._w=m*S*g-v*E*R;break;case"YXZ":this._x=v*S*g+m*E*R,this._y=m*E*g-v*S*R,this._z=m*S*R-v*E*g,this._w=m*S*g+v*E*R;break;case"ZXY":this._x=v*S*g-m*E*R,this._y=m*E*g+v*S*R,this._z=m*S*R+v*E*g,this._w=m*S*g-v*E*R;break;case"ZYX":this._x=v*S*g-m*E*R,this._y=m*E*g+v*S*R,this._z=m*S*R-v*E*g,this._w=m*S*g+v*E*R;break;case"YZX":this._x=v*S*g+m*E*R,this._y=m*E*g+v*S*R,this._z=m*S*R-v*E*g,this._w=m*S*g-v*E*R;break;case"XZY":this._x=v*S*g-m*E*R,this._y=m*E*g-v*S*R,this._z=m*S*R+v*E*g,this._w=m*S*g+v*E*R;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],p=i[9],m=i[2],S=i[6],g=i[10],v=r+h+g;if(v>0){const E=.5/Math.sqrt(v+1);this._w=.25/E,this._x=(S-p)*E,this._y=(u-m)*E,this._z=(d-l)*E}else if(r>h&&r>g){const E=2*Math.sqrt(1+r-h-g);this._w=(S-p)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(u+m)/E}else if(h>g){const E=2*Math.sqrt(1+h-r-g);this._w=(u-m)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(p+S)/E}else{const E=2*Math.sqrt(1+g-r-h);this._w=(d-l)/E,this._x=(u+m)/E,this._y=(p+S)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ne(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,p=i._y,m=i._z,S=i._w;return this._x=r*S+d*h+l*m-u*p,this._y=l*S+d*p+u*h-r*m,this._z=u*S+d*m+r*p-l*h,this._w=d*S-r*h-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,u=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),S=Math.sin(m);p=Math.sin(p*m)/S,i=Math.sin(i*m)/S,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Gm=class Gm{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(fS.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(fS.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*r),S=2*(h*i-u*l),g=2*(u*r-d*i);return this.x=i+p*m+d*g-h*S,this.y=r+p*S+h*m-u*g,this.z=l+p*g+u*S-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this.z=Ne(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this.z=Ne(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ne(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*d-r*p,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Gh.copy(this).projectOnVector(e),this.sub(Gh)}reflect(e){return this.sub(Gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ne(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gm.prototype.isVector3=!0;let K=Gm;const Gh=new K,fS=new Ie,Vm=class Vm{constructor(e,i,r,l,u,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m)}set(e,i,r,l,u,d,h,p,m){const S=this.elements;return S[0]=e,S[1]=l,S[2]=h,S[3]=i,S[4]=u,S[5]=p,S[6]=r,S[7]=d,S[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],S=r[4],g=r[7],v=r[2],E=r[5],R=r[8],C=l[0],x=l[3],M=l[6],L=l[1],X=l[4],D=l[7],w=l[2],U=l[5],z=l[8];return u[0]=d*C+h*L+p*w,u[3]=d*x+h*X+p*U,u[6]=d*M+h*D+p*z,u[1]=m*C+S*L+g*w,u[4]=m*x+S*X+g*U,u[7]=m*M+S*D+g*z,u[2]=v*C+E*L+R*w,u[5]=v*x+E*X+R*U,u[8]=v*M+E*D+R*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8];return i*d*S-i*h*m-r*u*S+r*h*p+l*u*m-l*d*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8],g=S*d-h*m,v=h*p-S*u,E=m*u-d*p,R=i*g+r*v+l*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=g*C,e[1]=(l*m-S*r)*C,e[2]=(h*r-l*d)*C,e[3]=v*C,e[4]=(S*i-l*p)*C,e[5]=(l*u-h*i)*C,e[6]=E*C,e[7]=(r*p-m*i)*C,e[8]=(d*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return uo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vh.makeScale(e,i)),this}rotate(e){return uo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vh.makeRotation(-e)),this}translate(e,i){return uo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Vm.prototype.isMatrix3=!0;let de=Vm;const Vh=new de,dS=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hS=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q1(){const o={enabled:!0,workingColorSpace:Ku,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ze&&(l.r=Ba(l.r),l.g=Ba(l.g),l.b=Ba(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ze&&(l.r=fo(l.r),l.g=fo(l.g),l.b=fo(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Er?Qu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return uo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return uo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ku]:{primaries:e,whitePoint:r,transfer:Qu,toXYZ:dS,fromXYZ:hS,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:r,transfer:Ze,toXYZ:dS,fromXYZ:hS,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),o}const De=q1();function Ba(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function fo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Zs;class Y1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Zs===void 0&&(Zs=Ju("canvas")),Zs.width=e.width,Zs.height=e.height;const l=Zs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Zs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ju("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Ba(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ba(i[r]/255)*255):i[r]=Ba(i[r]);return{data:i,width:e.width,height:e.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Z1=0;class Lm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=kl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Xh(l[d].image)):u.push(Xh(l[d]))}else u=Xh(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Xh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Y1.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(le("Texture: Unable to serialize Texture."),{})}let K1=0;const kh=new K;class Xn extends rs{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=za,l=za,u=Vn,d=es,h=Gi,p=gi,m=Xn.DEFAULT_ANISOTROPY,S=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=kl(),this.name="",this.source=new Lm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kh).x}get height(){return this.source.getSize(kh).y}get depth(){return this.source.getSize(kh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){le(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ix)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bp:e.x=e.x-Math.floor(e.x);break;case za:e.x=e.x<0?0:1;break;case Ap:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bp:e.y=e.y-Math.floor(e.y);break;case za:e.y=e.y<0?0:1;break;case Ap:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Ix;Xn.DEFAULT_ANISOTROPY=1;const Xm=class Xm{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],S=p[4],g=p[8],v=p[1],E=p[5],R=p[9],C=p[2],x=p[6],M=p[10];if(Math.abs(S-v)<.01&&Math.abs(g-C)<.01&&Math.abs(R-x)<.01){if(Math.abs(S+v)<.1&&Math.abs(g+C)<.1&&Math.abs(R+x)<.1&&Math.abs(m+E+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const X=(m+1)/2,D=(E+1)/2,w=(M+1)/2,U=(S+v)/4,z=(g+C)/4,T=(R+x)/4;return X>D&&X>w?X<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(X),l=U/r,u=z/r):D>w?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=U/l,u=T/l):w<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(w),r=z/u,l=T/u),this.set(r,l,u,i),this}let L=Math.sqrt((x-R)*(x-R)+(g-C)*(g-C)+(v-S)*(v-S));return Math.abs(L)<.001&&(L=1),this.x=(x-R)/L,this.y=(g-C)/L,this.z=(v-S)/L,this.w=Math.acos((m+E+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this.z=Ne(this.z,e.z,i.z),this.w=Ne(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this.z=Ne(this.z,e,i),this.w=Ne(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ne(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xm.prototype.isVector4=!0;let ln=Xm;class Q1 extends rs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},u=new Xn(l),d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Lm(l)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends Q1{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Wx extends Xn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=zn,this.minFilter=zn,this.wrapR=za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class J1 extends Xn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=zn,this.minFilter=zn,this.wrapR=za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const $u=class $u{constructor(e,i,r,l,u,d,h,p,m,S,g,v,E,R,C,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m,S,g,v,E,R,C,x)}set(e,i,r,l,u,d,h,p,m,S,g,v,E,R,C,x){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=l,M[1]=u,M[5]=d,M[9]=h,M[13]=p,M[2]=m,M[6]=S,M[10]=g,M[14]=v,M[3]=E,M[7]=R,M[11]=C,M[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $u().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Ks.setFromMatrixColumn(e,0).length(),u=1/Ks.setFromMatrixColumn(e,1).length(),d=1/Ks.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),S=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const v=d*S,E=d*g,R=h*S,C=h*g;i[0]=p*S,i[4]=-p*g,i[8]=m,i[1]=E+R*m,i[5]=v-C*m,i[9]=-h*p,i[2]=C-v*m,i[6]=R+E*m,i[10]=d*p}else if(e.order==="YXZ"){const v=p*S,E=p*g,R=m*S,C=m*g;i[0]=v+C*h,i[4]=R*h-E,i[8]=d*m,i[1]=d*g,i[5]=d*S,i[9]=-h,i[2]=E*h-R,i[6]=C+v*h,i[10]=d*p}else if(e.order==="ZXY"){const v=p*S,E=p*g,R=m*S,C=m*g;i[0]=v-C*h,i[4]=-d*g,i[8]=R+E*h,i[1]=E+R*h,i[5]=d*S,i[9]=C-v*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const v=d*S,E=d*g,R=h*S,C=h*g;i[0]=p*S,i[4]=R*m-E,i[8]=v*m+C,i[1]=p*g,i[5]=C*m+v,i[9]=E*m-R,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const v=d*p,E=d*m,R=h*p,C=h*m;i[0]=p*S,i[4]=C-v*g,i[8]=R*g+E,i[1]=g,i[5]=d*S,i[9]=-h*S,i[2]=-m*S,i[6]=E*g+R,i[10]=v-C*g}else if(e.order==="XZY"){const v=d*p,E=d*m,R=h*p,C=h*m;i[0]=p*S,i[4]=-g,i[8]=m*S,i[1]=v*g+C,i[5]=d*S,i[9]=E*g-R,i[2]=R*g-E,i[6]=h*S,i[10]=C*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j1,e,$1)}lookAt(e,i,r){const l=this.elements;return pi.subVectors(e,i),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),gr.crossVectors(r,pi),gr.lengthSq()===0&&(Math.abs(r.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),gr.crossVectors(r,pi)),gr.normalize(),_u.crossVectors(pi,gr),l[0]=gr.x,l[4]=_u.x,l[8]=pi.x,l[1]=gr.y,l[5]=_u.y,l[9]=pi.y,l[2]=gr.z,l[6]=_u.z,l[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],S=r[1],g=r[5],v=r[9],E=r[13],R=r[2],C=r[6],x=r[10],M=r[14],L=r[3],X=r[7],D=r[11],w=r[15],U=l[0],z=l[4],T=l[8],N=l[12],P=l[1],I=l[5],F=l[9],W=l[13],G=l[2],Y=l[6],V=l[10],k=l[14],tt=l[3],Q=l[7],at=l[11],gt=l[15];return u[0]=d*U+h*P+p*G+m*tt,u[4]=d*z+h*I+p*Y+m*Q,u[8]=d*T+h*F+p*V+m*at,u[12]=d*N+h*W+p*k+m*gt,u[1]=S*U+g*P+v*G+E*tt,u[5]=S*z+g*I+v*Y+E*Q,u[9]=S*T+g*F+v*V+E*at,u[13]=S*N+g*W+v*k+E*gt,u[2]=R*U+C*P+x*G+M*tt,u[6]=R*z+C*I+x*Y+M*Q,u[10]=R*T+C*F+x*V+M*at,u[14]=R*N+C*W+x*k+M*gt,u[3]=L*U+X*P+D*G+w*tt,u[7]=L*z+X*I+D*Y+w*Q,u[11]=L*T+X*F+D*V+w*at,u[15]=L*N+X*W+D*k+w*gt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],p=e[9],m=e[13],S=e[2],g=e[6],v=e[10],E=e[14],R=e[3],C=e[7],x=e[11],M=e[15],L=p*E-m*v,X=h*E-m*g,D=h*v-p*g,w=d*E-m*S,U=d*v-p*S,z=d*g-h*S;return i*(C*L-x*X+M*D)-r*(R*L-x*w+M*U)+l*(R*X-C*w+M*z)-u*(R*D-C*U+x*z)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[1],d=e[5],h=e[9],p=e[2],m=e[6],S=e[10];return i*(d*S-h*m)-r*(u*S-h*p)+l*(u*m-d*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8],g=e[9],v=e[10],E=e[11],R=e[12],C=e[13],x=e[14],M=e[15],L=i*h-r*d,X=i*p-l*d,D=i*m-u*d,w=r*p-l*h,U=r*m-u*h,z=l*m-u*p,T=S*C-g*R,N=S*x-v*R,P=S*M-E*R,I=g*x-v*C,F=g*M-E*C,W=v*M-E*x,G=L*W-X*F+D*I+w*P-U*N+z*T;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/G;return e[0]=(h*W-p*F+m*I)*Y,e[1]=(l*F-r*W-u*I)*Y,e[2]=(C*z-x*U+M*w)*Y,e[3]=(v*U-g*z-E*w)*Y,e[4]=(p*P-d*W-m*N)*Y,e[5]=(i*W-l*P+u*N)*Y,e[6]=(x*D-R*z-M*X)*Y,e[7]=(S*z-v*D+E*X)*Y,e[8]=(d*F-h*P+m*T)*Y,e[9]=(r*P-i*F-u*T)*Y,e[10]=(R*U-C*D+M*L)*Y,e[11]=(g*D-S*U-E*L)*Y,e[12]=(h*N-d*I-p*T)*Y,e[13]=(i*I-r*N+l*T)*Y,e[14]=(C*X-R*w-x*L)*Y,e[15]=(S*w-g*X+v*L)*Y,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,p=e.z,m=u*d,S=u*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,S*h+r,S*p-l*d,0,m*p-l*h,S*p+l*d,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,p=i._w,m=u+u,S=d+d,g=h+h,v=u*m,E=u*S,R=u*g,C=d*S,x=d*g,M=h*g,L=p*m,X=p*S,D=p*g,w=r.x,U=r.y,z=r.z;return l[0]=(1-(C+M))*w,l[1]=(E+D)*w,l[2]=(R-X)*w,l[3]=0,l[4]=(E-D)*U,l[5]=(1-(v+M))*U,l[6]=(x+L)*U,l[7]=0,l[8]=(R+X)*z,l[9]=(x-L)*z,l[10]=(1-(v+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinantAffine();if(u===0)return r.set(1,1,1),i.identity(),this;let d=Ks.set(l[0],l[1],l[2]).length();const h=Ks.set(l[4],l[5],l[6]).length(),p=Ks.set(l[8],l[9],l[10]).length();u<0&&(d=-d),zi.copy(this);const m=1/d,S=1/h,g=1/p;return zi.elements[0]*=m,zi.elements[1]*=m,zi.elements[2]*=m,zi.elements[4]*=S,zi.elements[5]*=S,zi.elements[6]*=S,zi.elements[8]*=g,zi.elements[9]*=g,zi.elements[10]*=g,i.setFromRotationMatrix(zi),r.x=d,r.y=h,r.z=p,this}makePerspective(e,i,r,l,u,d,h=ca,p=!1){const m=this.elements,S=2*u/(i-e),g=2*u/(r-l),v=(i+e)/(i-e),E=(r+l)/(r-l);let R,C;if(p)R=u/(d-u),C=d*u/(d-u);else if(h===ca)R=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===Vl)R=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=E,m[13]=0,m[2]=0,m[6]=0,m[10]=R,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=ca,p=!1){const m=this.elements,S=2/(i-e),g=2/(r-l),v=-(i+e)/(i-e),E=-(r+l)/(r-l);let R,C;if(p)R=1/(d-u),C=d/(d-u);else if(h===ca)R=-2/(d-u),C=-(d+u)/(d-u);else if(h===Vl)R=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=g,m[9]=0,m[13]=E,m[2]=0,m[6]=0,m[10]=R,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};$u.prototype.isMatrix4=!0;let Je=$u;const Ks=new K,zi=new Je,j1=new K(0,0,0),$1=new K(1,1,1),gr=new K,_u=new K,pi=new K,pS=new Je,mS=new Ie;class Xi{constructor(e=0,i=0,r=0,l=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],p=l[1],m=l[5],S=l[9],g=l[2],v=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,E),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,E),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ne(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,E),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Ne(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,m),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-S,E),this._y=0);break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return pS.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pS,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return mS.setFromEuler(this),this.setFromQuaternion(mS,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class qx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tT=0;const gS=new K,Qs=new Ie,Da=new Je,vu=new K,Cl=new K,eT=new K,nT=new Ie,_S=new K(1,0,0),vS=new K(0,1,0),SS=new K(0,0,1),xS={type:"added"},iT={type:"removed"},Js={type:"childadded",child:null},Wh={type:"childremoved",child:null};class Fn extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=kl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new K,i=new Xi,r=new Ie,l=new K(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new de}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Qs.setFromAxisAngle(e,i),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,i){return Qs.setFromAxisAngle(e,i),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(_S,e)}rotateY(e){return this.rotateOnAxis(vS,e)}rotateZ(e){return this.rotateOnAxis(SS,e)}translateOnAxis(e,i){return gS.copy(e).applyQuaternion(this.quaternion),this.position.add(gS.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(_S,e)}translateY(e){return this.translateOnAxis(vS,e)}translateZ(e){return this.translateOnAxis(SS,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Da.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?vu.copy(e):vu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Da.lookAt(Cl,vu,this.up):Da.lookAt(vu,Cl,this.up),this.quaternion.setFromRotationMatrix(Da),l&&(Da.extractRotation(l.matrixWorld),Qs.setFromRotationMatrix(Da),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xS),Js.child=e,this.dispatchEvent(Js),Js.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(iT),Wh.child=e,this.dispatchEvent(Wh),Wh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Da.multiply(e.parent.matrixWorld)),e.applyMatrix4(Da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xS),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cl,e,eT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cl,nT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const u=this.children;for(let d=0,h=u.length;d<h;d++)u[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,S=p.length;m<S;m++){const g=p[m];u(e.shapes,g)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(e.materials,this.material[p]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),S=d(e.images),g=d(e.shapes),v=d(e.skeletons),E=d(e.animations),R=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),S.length>0&&(r.images=S),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),E.length>0&&(r.animations=E),R.length>0&&(r.nodes=R)}return r.object=l,r;function d(h){const p=[];for(const m in h){const S=h[m];delete S.metadata,p.push(S)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Fn.DEFAULT_UP=new K(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Su extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aT={type:"move"};class qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Su,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Su,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Su,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const C of e.hand.values()){const x=i.getJointPose(C,r),M=this._getHandJoint(m,C);x!==null&&(M.matrix.fromArray(x.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=x.radius),M.visible=x!==null}const S=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],v=S.position.distanceTo(g.position),E=.02,R=.005;m.inputState.pinching&&v>E+R?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=E-R&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(aT)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Su;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},xu={h:0,s:0,l:0};function Yh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Le{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=De.workingColorSpace){return this.r=e,this.g=i,this.b=r,De.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=De.workingColorSpace){if(e=W1(e,1),i=Ne(i,0,1),r=Ne(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=Yh(d,u,e+1/3),this.g=Yh(d,u,e),this.b=Yh(d,u,e-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(e,i=Dn){function r(u){u!==void 0&&parseFloat(u)<1&&le("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:le("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Dn){const r=Yx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ba(e.r),this.g=Ba(e.g),this.b=Ba(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return De.workingToColorSpace(Gn.copy(this),e),Math.round(Ne(Gn.r*255,0,255))*65536+Math.round(Ne(Gn.g*255,0,255))*256+Math.round(Ne(Gn.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=De.workingColorSpace){De.workingToColorSpace(Gn.copy(this),i);const r=Gn.r,l=Gn.g,u=Gn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let p,m;const S=(h+d)/2;if(h===d)p=0,m=0;else{const g=d-h;switch(m=S<=.5?g/(d+h):g/(2-d-h),d){case r:p=(l-u)/g+(l<u?6:0);break;case l:p=(u-r)/g+2;break;case u:p=(r-l)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=S,e}getRGB(e,i=De.workingColorSpace){return De.workingToColorSpace(Gn.copy(this),i),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Dn){De.workingToColorSpace(Gn.copy(this),e);const i=Gn.r,r=Gn.g,l=Gn.b;return e!==Dn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+i,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(_r),e.getHSL(xu);const r=Hh(_r.h,xu.h,i),l=Hh(_r.s,xu.s,i),u=Hh(_r.l,xu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Le;Le.NAMES=Yx;class _o extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Fi=new K,Na=new K,Zh=new K,Ua=new K,js=new K,$s=new K,MS=new K,Kh=new K,Qh=new K,Jh=new K,jh=new ln,$h=new ln,tp=new ln;class Hi{constructor(e=new K,i=new K,r=new K){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Fi.subVectors(e,i),l.cross(Fi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Fi.subVectors(l,i),Na.subVectors(r,i),Zh.subVectors(e,i);const d=Fi.dot(Fi),h=Fi.dot(Na),p=Fi.dot(Zh),m=Na.dot(Na),S=Na.dot(Zh),g=d*m-h*h;if(g===0)return u.set(0,0,0),null;const v=1/g,E=(m*p-h*S)*v,R=(d*S-h*p)*v;return u.set(1-E-R,R,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getInterpolation(e,i,r,l,u,d,h,p){return this.getBarycoord(e,i,r,l,Ua)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ua.x),p.addScaledVector(d,Ua.y),p.addScaledVector(h,Ua.z),p)}static getInterpolatedAttribute(e,i,r,l,u,d){return jh.setScalar(0),$h.setScalar(0),tp.setScalar(0),jh.fromBufferAttribute(e,i),$h.fromBufferAttribute(e,r),tp.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(jh,u.x),d.addScaledVector($h,u.y),d.addScaledVector(tp,u.z),d}static isFrontFacing(e,i,r,l){return Fi.subVectors(r,i),Na.subVectors(e,i),Fi.cross(Na).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Na.subVectors(this.a,this.b),Fi.cross(Na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Hi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Hi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;js.subVectors(l,r),$s.subVectors(u,r),Kh.subVectors(e,r);const p=js.dot(Kh),m=$s.dot(Kh);if(p<=0&&m<=0)return i.copy(r);Qh.subVectors(e,l);const S=js.dot(Qh),g=$s.dot(Qh);if(S>=0&&g<=S)return i.copy(l);const v=p*g-S*m;if(v<=0&&p>=0&&S<=0)return d=p/(p-S),i.copy(r).addScaledVector(js,d);Jh.subVectors(e,u);const E=js.dot(Jh),R=$s.dot(Jh);if(R>=0&&E<=R)return i.copy(u);const C=E*m-p*R;if(C<=0&&m>=0&&R<=0)return h=m/(m-R),i.copy(r).addScaledVector($s,h);const x=S*R-E*g;if(x<=0&&g-S>=0&&E-R>=0)return MS.subVectors(u,l),h=(g-S)/(g-S+(E-R)),i.copy(l).addScaledVector(MS,h);const M=1/(x+C+v);return d=C*M,h=v*M,i.copy(r).addScaledVector(js,d).addScaledVector($s,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Wl{constructor(e=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Bi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Bi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Bi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Bi):Bi.fromBufferAttribute(u,d),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Mu.copy(r.boundingBox)),Mu.applyMatrix4(e.matrixWorld),this.union(Mu)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wl),yu.subVectors(this.max,wl),to.subVectors(e.a,wl),eo.subVectors(e.b,wl),no.subVectors(e.c,wl),vr.subVectors(eo,to),Sr.subVectors(no,eo),Kr.subVectors(to,no);let i=[0,-vr.z,vr.y,0,-Sr.z,Sr.y,0,-Kr.z,Kr.y,vr.z,0,-vr.x,Sr.z,0,-Sr.x,Kr.z,0,-Kr.x,-vr.y,vr.x,0,-Sr.y,Sr.x,0,-Kr.y,Kr.x,0];return!ep(i,to,eo,no,yu)||(i=[1,0,0,0,1,0,0,0,1],!ep(i,to,eo,no,yu))?!1:(Eu.crossVectors(vr,Sr),i=[Eu.x,Eu.y,Eu.z],ep(i,to,eo,no,yu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(La[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),La[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),La[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),La[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),La[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),La[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),La[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),La[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(La),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const La=[new K,new K,new K,new K,new K,new K,new K,new K],Bi=new K,Mu=new Wl,to=new K,eo=new K,no=new K,vr=new K,Sr=new K,Kr=new K,wl=new K,yu=new K,Eu=new K,Qr=new K;function ep(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){Qr.fromArray(o,u);const h=l.x*Math.abs(Qr.x)+l.y*Math.abs(Qr.y)+l.z*Math.abs(Qr.z),p=e.dot(Qr),m=i.dot(Qr),S=r.dot(Qr);if(Math.max(-Math.max(p,m,S),Math.min(p,m,S))>h)return!1}return!0}const Mn=new K,Tu=new Oe;let rT=0;class Ha extends rs{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=H1,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Tu.fromBufferAttribute(this,i),Tu.applyMatrix3(e),this.setXY(i,Tu.x,Tu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix3(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix4(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.applyNormalMatrix(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.transformDirection(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Rl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ni(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Rl(i,this.array)),i}setX(e,i){return this.normalized&&(i=ni(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Rl(i,this.array)),i}setY(e,i){return this.normalized&&(i=ni(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Rl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ni(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Rl(i,this.array)),i}setW(e,i){return this.normalized&&(i=ni(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ni(i,this.array),r=ni(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=ni(i,this.array),r=ni(r,this.array),l=ni(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=ni(i,this.array),r=ni(r,this.array),l=ni(l,this.array),u=ni(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Zx extends Ha{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Kx extends Ha{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class pn extends Ha{constructor(e,i,r){super(new Float32Array(e),i,r)}}const sT=new Wl,Dl=new K,np=new K;class Om{constructor(e=new K,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):sT.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dl.subVectors(e,this.center);const i=Dl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Dl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(np.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dl.copy(e.center).add(np)),this.expandByPoint(Dl.copy(e.center).sub(np))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let oT=0;const wi=new Je,ip=new Fn,io=new K,mi=new Wl,Nl=new Wl,wn=new K;class Qn extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=kl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(G1(e)?Kx:Zx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new de().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,i,r){return wi.makeTranslation(e,i,r),this.applyMatrix4(wi),this}scale(e,i,r){return wi.makeScale(e,i,r),this.applyMatrix4(wi),this}lookAt(e){return ip.lookAt(e),ip.updateMatrix(),this.applyMatrix4(ip.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new pn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];mi.setFromBufferAttribute(u),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Om);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Nl.setFromBufferAttribute(h),this.morphTargetsRelative?(wn.addVectors(mi.min,Nl.min),mi.expandByPoint(wn),wn.addVectors(mi.max,Nl.max),mi.expandByPoint(wn)):(mi.expandByPoint(Nl.min),mi.expandByPoint(Nl.max))}mi.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)wn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(wn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,S=h.count;m<S;m++)wn.fromBufferAttribute(h,m),p&&(io.fromBufferAttribute(e,m),wn.add(io)),l=Math.max(l,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new Ha(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const h=[],p=[];for(let T=0;T<r.count;T++)h[T]=new K,p[T]=new K;const m=new K,S=new K,g=new K,v=new Oe,E=new Oe,R=new Oe,C=new K,x=new K;function M(T,N,P){m.fromBufferAttribute(r,T),S.fromBufferAttribute(r,N),g.fromBufferAttribute(r,P),v.fromBufferAttribute(u,T),E.fromBufferAttribute(u,N),R.fromBufferAttribute(u,P),S.sub(m),g.sub(m),E.sub(v),R.sub(v);const I=1/(E.x*R.y-R.x*E.y);isFinite(I)&&(C.copy(S).multiplyScalar(R.y).addScaledVector(g,-E.y).multiplyScalar(I),x.copy(g).multiplyScalar(E.x).addScaledVector(S,-R.x).multiplyScalar(I),h[T].add(C),h[N].add(C),h[P].add(C),p[T].add(x),p[N].add(x),p[P].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let T=0,N=L.length;T<N;++T){const P=L[T],I=P.start,F=P.count;for(let W=I,G=I+F;W<G;W+=3)M(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const X=new K,D=new K,w=new K,U=new K;function z(T){w.fromBufferAttribute(l,T),U.copy(w);const N=h[T];X.copy(N),X.sub(w.multiplyScalar(w.dot(N))).normalize(),D.crossVectors(U,N);const I=D.dot(p[T])<0?-1:1;d.setXYZW(T,X.x,X.y,X.z,I)}for(let T=0,N=L.length;T<N;++T){const P=L[T],I=P.start,F=P.count;for(let W=I,G=I+F;W<G;W+=3)z(e.getX(W+0)),z(e.getX(W+1)),z(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Ha(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,E=r.count;v<E;v++)r.setXYZ(v,0,0,0);const l=new K,u=new K,d=new K,h=new K,p=new K,m=new K,S=new K,g=new K;if(e)for(let v=0,E=e.count;v<E;v+=3){const R=e.getX(v+0),C=e.getX(v+1),x=e.getX(v+2);l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,x),S.subVectors(d,u),g.subVectors(l,u),S.cross(g),h.fromBufferAttribute(r,R),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,x),h.add(S),p.add(S),m.add(S),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let v=0,E=i.count;v<E;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),S.subVectors(d,u),g.subVectors(l,u),S.cross(g),r.setXYZ(v+0,S.x,S.y,S.z),r.setXYZ(v+1,S.x,S.y,S.z),r.setXYZ(v+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)wn.fromBufferAttribute(e,i),wn.normalize(),e.setXYZ(i,wn.x,wn.y,wn.z)}toNonIndexed(){function e(h,p){const m=h.array,S=h.itemSize,g=h.normalized,v=new m.constructor(p.length*S);let E=0,R=0;for(let C=0,x=p.length;C<x;C++){h.isInterleavedBufferAttribute?E=p[C]*h.data.stride+h.offset:E=p[C]*S;for(let M=0;M<S;M++)v[R++]=m[E++]}return new Ha(v,S,g)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Qn,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let S=0,g=m.length;S<g;S++){const v=m[S],E=e(v,r);p.push(E)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],S=[];for(let g=0,v=m.length;g<v;g++){const E=m[g];S.push(E.toJSON(e.data))}S.length>0&&(l[p]=S,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const S=l[m];this.setAttribute(m,S.clone(i))}const u=e.morphAttributes;for(const m in u){const S=[],g=u[m];for(let v=0,E=g.length;v<E;v++)S.push(g[v].clone(i));this.morphAttributes[m]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,S=d.length;m<S;m++){const g=d[m];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ap=new K,lT=new K,cT=new de;class yr{constructor(e=new K(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=ap.subVectors(r,i).cross(lT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(ap),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/u;return r===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||cT.getNormalMatrix(e),l=this.coplanarPoint(ap).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let uT=0;class ql extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=kl(),this.name="",this.type="Material",this.blending=zl,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ax,this.blendDst=Rx,this.blendEquation=lo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Bl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fh,this.stencilZFail=Fh,this.stencilZPass=Fh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){le(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new yr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Oe().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Oa=new K,rp=new K,bu=new K,Au=new K;class fT{constructor(e=new K,i=new K(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Oa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Oa.copy(this.origin).addScaledVector(this.direction,i),Oa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){rp.copy(e).add(i).multiplyScalar(.5),bu.copy(i).sub(e).normalize(),Au.copy(this.origin).sub(rp);const u=e.distanceTo(i)*.5,d=-this.direction.dot(bu),h=Au.dot(this.direction),p=-Au.dot(bu),m=Au.lengthSq(),S=Math.abs(1-d*d);let g,v,E,R;if(S>0)if(g=d*p-h,v=d*h-p,R=u*S,g>=0)if(v>=-R)if(v<=R){const C=1/S;g*=C,v*=C,E=g*(g+d*v+2*h)+v*(d*g+v+2*p)+m}else v=u,g=Math.max(0,-(d*v+h)),E=-g*g+v*(v+2*p)+m;else v=-u,g=Math.max(0,-(d*v+h)),E=-g*g+v*(v+2*p)+m;else v<=-R?(g=Math.max(0,-(-d*u+h)),v=g>0?-u:Math.min(Math.max(-u,-p),u),E=-g*g+v*(v+2*p)+m):v<=R?(g=0,v=Math.min(Math.max(-u,-p),u),E=v*(v+2*p)+m):(g=Math.max(0,-(d*u+h)),v=g>0?u:Math.min(Math.max(-u,-p),u),E=-g*g+v*(v+2*p)+m);else v=d>0?-u:u,g=Math.max(0,-(d*v+h)),E=-g*g+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(rp).addScaledVector(bu,v),E}intersectSphere(e,i){if(e.radius<0)return null;Oa.subVectors(e.center,this.origin);const r=Oa.dot(this.direction),l=Oa.dot(Oa)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,p;const m=1/this.direction.x,S=1/this.direction.y,g=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,l=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,l=(e.min.x-v.x)*m),S>=0?(u=(e.min.y-v.y)*S,d=(e.max.y-v.y)*S):(u=(e.max.y-v.y)*S,d=(e.min.y-v.y)*S),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),g>=0?(h=(e.min.z-v.z)*g,p=(e.max.z-v.z)*g):(h=(e.max.z-v.z)*g,p=(e.min.z-v.z)*g),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Oa)!==null}intersectTriangle(e,i,r,l,u){const d=this.origin,h=this.direction,p=h.x,m=h.y,S=h.z,g=e.x-d.x,v=e.y-d.y,E=e.z-d.z,R=i.x-d.x,C=i.y-d.y,x=i.z-d.z,M=r.x-d.x,L=r.y-d.y,X=r.z-d.z,D=Math.abs(p),w=Math.abs(m),U=Math.abs(S);let z,T,N,P,I,F,W,G,Y,V,k,tt;if(D>=w&&D>=U?(N=p,F=g,Y=R,tt=M,p>=0?(z=m,T=S,P=v,I=E,W=C,G=x,V=L,k=X):(z=S,T=m,P=E,I=v,W=x,G=C,V=X,k=L)):w>=U?(N=m,F=v,Y=C,tt=L,m>=0?(z=S,T=p,P=E,I=g,W=x,G=R,V=X,k=M):(z=p,T=S,P=g,I=E,W=R,G=x,V=M,k=X)):(N=S,F=E,Y=x,tt=X,S>=0?(z=p,T=m,P=g,I=v,W=R,G=C,V=M,k=L):(z=m,T=p,P=v,I=g,W=C,G=R,V=L,k=M)),N===0)return null;const Q=z/N,at=T/N,gt=1/N,wt=P-Q*F,Nt=I-at*F,H=W-Q*Y,lt=G-at*Y,Et=V-Q*tt,et=k-at*tt,pt=Et*lt-et*H,bt=wt*et-Nt*Et,Ft=H*Nt-lt*wt;if(l){if(pt<0||bt<0||Ft<0)return null}else if((pt<0||bt<0||Ft<0)&&(pt>0||bt>0||Ft>0))return null;const vt=pt+bt+Ft;if(vt===0)return null;const Rt=gt*(pt*F+bt*Y+Ft*tt);return(vt>0?Rt<0:Rt>0)?null:this.at(Rt/vt,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class br extends ql{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Cx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yS=new Je,Jr=new fT,Ru=new Om,ES=new K,Cu=new K,wu=new K,Du=new K,sp=new K,Nu=new K,TS=new K,Uu=new K;class mn extends Fn{constructor(e=new Qn,i=new br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){Nu.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const S=h[p],g=u[p];S!==0&&(sp.fromBufferAttribute(g,e),d?Nu.addScaledVector(sp,S):Nu.addScaledVector(sp.sub(i),S))}i.add(Nu)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ru.copy(r.boundingSphere),Ru.applyMatrix4(u),Jr.copy(e.ray).recast(e.near),!(Ru.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Ru,ES)===null||Jr.origin.distanceToSquared(ES)>(e.far-e.near)**2))&&(yS.copy(u).invert(),Jr.copy(e.ray).applyMatrix4(yS),!(r.boundingBox!==null&&Jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Jr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,S=u.attributes.uv1,g=u.attributes.normal,v=u.groups,E=u.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,C=v.length;R<C;R++){const x=v[R],M=d[x.materialIndex],L=Math.max(x.start,E.start),X=Math.min(h.count,Math.min(x.start+x.count,E.start+E.count));for(let D=L,w=X;D<w;D+=3){const U=h.getX(D),z=h.getX(D+1),T=h.getX(D+2);l=Lu(this,M,e,r,m,S,g,U,z,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),C=Math.min(h.count,E.start+E.count);for(let x=R,M=C;x<M;x+=3){const L=h.getX(x),X=h.getX(x+1),D=h.getX(x+2);l=Lu(this,d,e,r,m,S,g,L,X,D),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let R=0,C=v.length;R<C;R++){const x=v[R],M=d[x.materialIndex],L=Math.max(x.start,E.start),X=Math.min(p.count,Math.min(x.start+x.count,E.start+E.count));for(let D=L,w=X;D<w;D+=3){const U=D,z=D+1,T=D+2;l=Lu(this,M,e,r,m,S,g,U,z,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),C=Math.min(p.count,E.start+E.count);for(let x=R,M=C;x<M;x+=3){const L=x,X=x+1,D=x+2;l=Lu(this,d,e,r,m,S,g,L,X,D),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function dT(o,e,i,r,l,u,d,h){let p;if(e.side===ii?p=r.intersectTriangle(d,u,l,!0,h):p=r.intersectTriangle(l,u,d,e.side===_i,h),p===null)return null;Uu.copy(h),Uu.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Uu);return m<i.near||m>i.far?null:{distance:m,point:Uu.clone(),object:o}}function Lu(o,e,i,r,l,u,d,h,p,m){o.getVertexPosition(h,Cu),o.getVertexPosition(p,wu),o.getVertexPosition(m,Du);const S=dT(o,e,i,r,Cu,wu,Du,TS);if(S){const g=new K;Hi.getBarycoord(TS,Cu,wu,Du,g),l&&(S.uv=Hi.getInterpolatedAttribute(l,h,p,m,g,new Oe)),u&&(S.uv1=Hi.getInterpolatedAttribute(u,h,p,m,g,new Oe)),d&&(S.normal=Hi.getInterpolatedAttribute(d,h,p,m,g,new K),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new K,materialIndex:0};Hi.getNormal(Cu,wu,Du,v.normal),S.face=v,S.barycoord=g}return S}class hT extends Xn{constructor(e=null,i=1,r=1,l,u,d,h,p,m=zn,S=zn,g,v){super(null,d,h,p,m,S,l,u,g,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jr=new Om,pT=new Oe(.5,.5),Ou=new K;class Pm{constructor(e=new yr,i=new yr,r=new yr,l=new yr,u=new yr,d=new yr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ca,r=!1){const l=this.planes,u=e.elements,d=u[0],h=u[1],p=u[2],m=u[3],S=u[4],g=u[5],v=u[6],E=u[7],R=u[8],C=u[9],x=u[10],M=u[11],L=u[12],X=u[13],D=u[14],w=u[15];if(l[0].setComponents(m-d,E-S,M-R,w-L).normalize(),l[1].setComponents(m+d,E+S,M+R,w+L).normalize(),l[2].setComponents(m+h,E+g,M+C,w+X).normalize(),l[3].setComponents(m-h,E-g,M-C,w-X).normalize(),r)l[4].setComponents(p,v,x,D).normalize(),l[5].setComponents(m-p,E-v,M-x,w-D).normalize();else if(l[4].setComponents(m-p,E-v,M-x,w-D).normalize(),i===ca)l[5].setComponents(m+p,E+v,M+x,w+D).normalize();else if(i===Vl)l[5].setComponents(p,v,x,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){jr.center.set(0,0,0);const i=pT.distanceTo(e.center);return jr.radius=.7071067811865476+i,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ou.x=l.normal.x>0?e.max.x:e.min.x,Ou.y=l.normal.y>0?e.max.y:e.min.y,Ou.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ou)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qx extends Xn{constructor(e=[],i=is,r,l,u,d,h,p,m,S){super(e,i,r,l,u,d,h,p,m,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vo extends Xn{constructor(e,i,r,l,u,d,h,p,m){super(e,i,r,l,u,d,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xl extends Xn{constructor(e,i,r=fa,l,u,d,h=zn,p=zn,m,S=Ga,g=1){if(S!==Ga&&S!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:g};super(v,l,u,d,h,p,S,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class mT extends Xl{constructor(e,i=fa,r=is,l,u,d=zn,h=zn,p,m=Ga){const S={width:e,height:e,depth:1},g=[S,S,S,S,S,S];super(e,e,i,r,l,u,d,h,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Jx extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yl extends Qn{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],S=[],g=[];let v=0,E=0;R("z","y","x",-1,-1,r,i,e,d,u,0),R("z","y","x",1,-1,r,i,-e,d,u,1),R("x","z","y",1,1,e,r,i,l,d,2),R("x","z","y",1,-1,e,r,-i,l,d,3),R("x","y","z",1,-1,e,i,r,l,u,4),R("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new pn(m,3)),this.setAttribute("normal",new pn(S,3)),this.setAttribute("uv",new pn(g,2));function R(C,x,M,L,X,D,w,U,z,T,N){const P=D/z,I=w/T,F=D/2,W=w/2,G=U/2,Y=z+1,V=T+1;let k=0,tt=0;const Q=new K;for(let at=0;at<V;at++){const gt=at*I-W;for(let wt=0;wt<Y;wt++){const Nt=wt*P-F;Q[C]=Nt*L,Q[x]=gt*X,Q[M]=G,m.push(Q.x,Q.y,Q.z),Q[C]=0,Q[x]=0,Q[M]=U>0?1:-1,S.push(Q.x,Q.y,Q.z),g.push(wt/z),g.push(1-at/T),k+=1}}for(let at=0;at<T;at++)for(let gt=0;gt<z;gt++){const wt=v+gt+Y*at,Nt=v+gt+Y*(at+1),H=v+(gt+1)+Y*(at+1),lt=v+(gt+1)+Y*at;p.push(wt,Nt,lt),p.push(Nt,H,lt),tt+=6}h.addGroup(E,tt,N),E+=tt,v+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class pa extends Qn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,S=p+1,g=e/h,v=i/p,E=[],R=[],C=[],x=[];for(let M=0;M<S;M++){const L=M*v-d;for(let X=0;X<m;X++){const D=X*g-u;R.push(D,-L,0),C.push(0,0,1),x.push(X/h),x.push(1-M/p)}}for(let M=0;M<p;M++)for(let L=0;L<h;L++){const X=L+m*M,D=L+m*(M+1),w=L+1+m*(M+1),U=L+1+m*M;E.push(X,D,U),E.push(D,w,U)}this.setIndex(E),this.setAttribute("position",new pn(R,3)),this.setAttribute("normal",new pn(C,3)),this.setAttribute("uv",new pn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.widthSegments,e.heightSegments)}}function go(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];if(bS(l))l.isRenderTargetTexture?(le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(bS(l[0])){const u=[];for(let d=0,h=l.length;d<h;d++)u[d]=l[d].clone();e[i][r]=u}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Kn(o){const e={};for(let i=0;i<o.length;i++){const r=go(o[i]);for(const l in r)e[l]=r[l]}return e}function bS(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function gT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function jx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const _T={clone:go,merge:Kn};var vT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ST=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ha extends ql{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vT,this.fragmentShader=ST,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=gT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Le().setHex(l.value);break;case"v2":this.uniforms[r].value=new Oe().fromArray(l.value);break;case"v3":this.uniforms[r].value=new K().fromArray(l.value);break;case"v4":this.uniforms[r].value=new ln().fromArray(l.value);break;case"m3":this.uniforms[r].value=new de().fromArray(l.value);break;case"m4":this.uniforms[r].value=new Je().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class xT extends ha{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class So extends ql{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=im,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class MT extends ql{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=N1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yT extends ql{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Im extends Fn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=i}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class xo extends Im{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const op=new Je,AS=new K,RS=new K;class ET{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pm,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera;AS.setFromMatrixPosition(e.matrixWorld),i.position.copy(AS),RS.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(RS),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(e,i,r,l){op.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(op,e.coordinateSystem,e.reversedDepth);const u=this._frameExtents,d=l?l.z/u.x:1,h=l?l.w/u.y:1,p=l?l.x/u.x:0,m=l?l.y/u.y:0;e.coordinateSystem===Vl||e.reversedDepth?i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,1,0,0,0,0,1):i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,.5,.5,0,0,0,1),i.multiply(op)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Pu=new K,Iu=new Ie,aa=new K;class $x extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=ca,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pu,Iu,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pu,Iu,aa.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Pu,Iu,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pu,Iu,aa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xr=new K,CS=new Oe,wS=new Oe;class Di extends $x{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=am*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return am*2*Math.atan(Math.tan(Bh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,i){return this.getViewBounds(e,CS,wS),i.subVectors(wS,CS)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Bh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class zm extends $x{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=S*this.view.offsetY,p=h-S*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class TT extends ET{constructor(){super(new zm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mo extends Im{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new TT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class yo extends Im{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const ao=-90,ro=1;class bT extends Fn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Di(ao,ro,e,i);l.layers=this.layers,this.add(l);const u=new Di(ao,ro,e,i);u.layers=this.layers,this.add(u);const d=new Di(ao,ro,e,i);d.layers=this.layers,this.add(d);const h=new Di(ao,ro,e,i);h.layers=this.layers,this.add(h);const p=new Di(ao,ro,e,i);p.layers=this.layers,this.add(p);const m=new Di(ao,ro,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,p]=i;for(const m of i)this.remove(m);if(e===ca)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Vl)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,p,m,S]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,1,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,4,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(g,v,E),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class AT extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const km=class km{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const u=this.elements;return u[0]=e,u[2]=i,u[1]=r,u[3]=l,this}};km.prototype.isMatrix2=!0;let DS=km;function NS(o,e,i,r){const l=RT(r);switch(i){case Gx:return o*e;case Xx:return o*e/l.components*l.byteLength;case Cm:return o*e/l.components*l.byteLength;case as:return o*e*2/l.components*l.byteLength;case wm:return o*e*2/l.components*l.byteLength;case Vx:return o*e*3/l.components*l.byteLength;case Gi:return o*e*4/l.components*l.byteLength;case Dm:return o*e*4/l.components*l.byteLength;case Gu:case Vu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Xu:case ku:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Cp:case Dp:return Math.max(o,16)*Math.max(e,8)/4;case Rp:case wp:return Math.max(o,8)*Math.max(e,8)/2;case Np:case Up:case Op:case Pp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Lp:case Yu:case Ip:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case zp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Fp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Bp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Hp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Gp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Vp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Xp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case kp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Wp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case qp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Yp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Zp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Kp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Qp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Jp:case jp:case $p:return Math.ceil(o/4)*Math.ceil(e/4)*16;case tm:case em:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Zu:case nm:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function RT(o){switch(o){case gi:case zx:return{byteLength:1,components:1};case Hl:case Fx:case da:return{byteLength:2,components:1};case Am:case Rm:return{byteLength:2,components:4};case fa:case bm:case la:return{byteLength:4,components:1};case Bx:case Hx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tm}}));typeof window<"u"&&(window.__THREE__?le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tm);function tM(){let o=null,e=!1,i=null,r=null;function l(u,d){r=o.requestAnimationFrame(l),i(u,d)}return{start:function(){e!==!0&&i!==null&&o!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function CT(o){const e=new WeakMap;function i(h,p){const m=h.array,S=h.usage,g=m.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,m,S),h.onUploadCallback();let E;if(m instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)E=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=o.SHORT;else if(m instanceof Uint32Array)E=o.UNSIGNED_INT;else if(m instanceof Int32Array)E=o.INT;else if(m instanceof Int8Array)E=o.BYTE;else if(m instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,p,m){const S=p.array,g=p.updateRanges;if(o.bindBuffer(m,h),g.length===0)o.bufferSubData(m,0,S);else{g.sort((E,R)=>E.start-R.start);let v=0;for(let E=1;E<g.length;E++){const R=g[v],C=g[E];C.start<=R.start+R.count+1?R.count=Math.max(R.count,C.start+C.count-R.start):(++v,g[v]=C)}g.length=v+1;for(let E=0,R=g.length;E<R;E++){const C=g[E];o.bufferSubData(m,C.start*S.BYTES_PER_ELEMENT,S,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=e.get(h);(!S||S.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:u,update:d}}var wT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DT=`#ifdef USE_ALPHAHASH
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
#endif`,NT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PT=`#ifdef USE_AOMAP
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
#endif`,IT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zT=`#ifdef USE_BATCHING
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
#endif`,FT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,VT=`#ifdef USE_IRIDESCENCE
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
#endif`,XT=`#ifdef USE_BUMPMAP
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
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,KT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,QT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,JT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jT=`#define PI 3.141592653589793
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
} // validated`,$T=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tb=`vec3 transformedNormal = objectNormal;
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
#endif`,eb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ab=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",sb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ob=`#ifdef USE_ENVMAP
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
#endif`,lb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
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
#endif`,ub=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fb=`#ifdef USE_ENVMAP
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
#endif`,db=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gb=`#ifdef USE_GRADIENTMAP
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
}`,_b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Mb=`#ifdef USE_ENVMAP
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
#endif`,yb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ab=`PhysicalMaterial material;
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
#endif`,Rb=`uniform sampler2D dfgLUT;
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
}`,Cb=`
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
#endif`,wb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Db=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ib=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bb=`#if defined( USE_POINTS_UV )
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
#endif`,Hb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wb=`#ifdef USE_MORPHTARGETS
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
#endif`,qb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jb=`#ifdef USE_NORMALMAP
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
#endif`,$b=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pA=`float getShadowMask() {
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
}`,mA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gA=`#ifdef USE_SKINNING
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
#endif`,_A=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vA=`#ifdef USE_SKINNING
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
#endif`,SA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,EA=`#ifdef USE_TRANSMISSION
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
#endif`,TA=`#ifdef USE_TRANSMISSION
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
#endif`,bA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DA=`uniform sampler2D t2D;
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
}`,NA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,LA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PA=`#include <common>
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
}`,IA=`#if DEPTH_PACKING == 3200
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
}`,zA=`#define DISTANCE
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
}`,FA=`#define DISTANCE
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
}`,BA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GA=`uniform float scale;
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
}`,VA=`uniform vec3 diffuse;
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
}`,XA=`#include <common>
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
}`,kA=`uniform vec3 diffuse;
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
}`,WA=`#define LAMBERT
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
}`,qA=`#define LAMBERT
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
}`,YA=`#define MATCAP
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
}`,ZA=`#define MATCAP
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
}`,KA=`#define NORMAL
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
}`,QA=`#define NORMAL
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
}`,JA=`#define PHONG
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
}`,jA=`#define PHONG
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
}`,$A=`#define STANDARD
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
}`,tR=`#define STANDARD
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
}`,eR=`#define TOON
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
}`,nR=`#define TOON
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
}`,iR=`uniform float size;
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
}`,aR=`uniform vec3 diffuse;
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
}`,rR=`#include <common>
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
}`,sR=`uniform vec3 color;
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
}`,oR=`uniform float rotation;
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
}`,lR=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:wT,alphahash_pars_fragment:DT,alphamap_fragment:NT,alphamap_pars_fragment:UT,alphatest_fragment:LT,alphatest_pars_fragment:OT,aomap_fragment:PT,aomap_pars_fragment:IT,batching_pars_vertex:zT,batching_vertex:FT,begin_vertex:BT,beginnormal_vertex:HT,bsdfs:GT,iridescence_fragment:VT,bumpmap_pars_fragment:XT,clipping_planes_fragment:kT,clipping_planes_pars_fragment:WT,clipping_planes_pars_vertex:qT,clipping_planes_vertex:YT,color_fragment:ZT,color_pars_fragment:KT,color_pars_vertex:QT,color_vertex:JT,common:jT,cube_uv_reflection_fragment:$T,defaultnormal_vertex:tb,displacementmap_pars_vertex:eb,displacementmap_vertex:nb,emissivemap_fragment:ib,emissivemap_pars_fragment:ab,colorspace_fragment:rb,colorspace_pars_fragment:sb,envmap_fragment:ob,envmap_common_pars_fragment:lb,envmap_pars_fragment:cb,envmap_pars_vertex:ub,envmap_physical_pars_fragment:Mb,envmap_vertex:fb,fog_vertex:db,fog_pars_vertex:hb,fog_fragment:pb,fog_pars_fragment:mb,gradientmap_pars_fragment:gb,lightmap_pars_fragment:_b,lights_lambert_fragment:vb,lights_lambert_pars_fragment:Sb,lights_pars_begin:xb,lights_toon_fragment:yb,lights_toon_pars_fragment:Eb,lights_phong_fragment:Tb,lights_phong_pars_fragment:bb,lights_physical_fragment:Ab,lights_physical_pars_fragment:Rb,lights_fragment_begin:Cb,lights_fragment_maps:wb,lights_fragment_end:Db,lightprobes_pars_fragment:Nb,logdepthbuf_fragment:Ub,logdepthbuf_pars_fragment:Lb,logdepthbuf_pars_vertex:Ob,logdepthbuf_vertex:Pb,map_fragment:Ib,map_pars_fragment:zb,map_particle_fragment:Fb,map_particle_pars_fragment:Bb,metalnessmap_fragment:Hb,metalnessmap_pars_fragment:Gb,morphinstance_vertex:Vb,morphcolor_vertex:Xb,morphnormal_vertex:kb,morphtarget_pars_vertex:Wb,morphtarget_vertex:qb,normal_fragment_begin:Yb,normal_fragment_maps:Zb,normal_pars_fragment:Kb,normal_pars_vertex:Qb,normal_vertex:Jb,normalmap_pars_fragment:jb,clearcoat_normal_fragment_begin:$b,clearcoat_normal_fragment_maps:tA,clearcoat_pars_fragment:eA,iridescence_pars_fragment:nA,opaque_fragment:iA,packing:aA,premultiplied_alpha_fragment:rA,project_vertex:sA,dithering_fragment:oA,dithering_pars_fragment:lA,roughnessmap_fragment:cA,roughnessmap_pars_fragment:uA,shadowmap_pars_fragment:fA,shadowmap_pars_vertex:dA,shadowmap_vertex:hA,shadowmask_pars_fragment:pA,skinbase_vertex:mA,skinning_pars_vertex:gA,skinning_vertex:_A,skinnormal_vertex:vA,specularmap_fragment:SA,specularmap_pars_fragment:xA,tonemapping_fragment:MA,tonemapping_pars_fragment:yA,transmission_fragment:EA,transmission_pars_fragment:TA,uv_pars_fragment:bA,uv_pars_vertex:AA,uv_vertex:RA,worldpos_vertex:CA,background_vert:wA,background_frag:DA,backgroundCube_vert:NA,backgroundCube_frag:UA,cube_vert:LA,cube_frag:OA,depth_vert:PA,depth_frag:IA,distance_vert:zA,distance_frag:FA,equirect_vert:BA,equirect_frag:HA,linedashed_vert:GA,linedashed_frag:VA,meshbasic_vert:XA,meshbasic_frag:kA,meshlambert_vert:WA,meshlambert_frag:qA,meshmatcap_vert:YA,meshmatcap_frag:ZA,meshnormal_vert:KA,meshnormal_frag:QA,meshphong_vert:JA,meshphong_frag:jA,meshphysical_vert:$A,meshphysical_frag:tR,meshtoon_vert:eR,meshtoon_frag:nR,points_vert:iR,points_frag:aR,shadow_vert:rR,shadow_frag:sR,sprite_vert:oR,sprite_frag:lR},Gt={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},sa={basic:{uniforms:Kn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Kn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Kn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Kn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Kn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new Le(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Kn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Kn([Gt.points,Gt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Kn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Kn([Gt.common,Gt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Kn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Kn([Gt.sprite,Gt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:Kn([Gt.common,Gt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:Kn([Gt.lights,Gt.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};sa.physical={uniforms:Kn([sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const zu={r:0,b:0,g:0},cR=new Je,eM=new de;eM.set(-1,0,0,0,1,0,0,0,1);function uR(o,e,i,r,l,u){const d=new Le(0);let h=l===!0?0:1,p,m,S=null,g=0,v=null;function E(L){let X=L.isScene===!0?L.background:null;if(X&&X.isTexture){const D=L.backgroundBlurriness>0;X=e.get(X,D)}return X}function R(L){let X=!1;const D=E(L);D===null?x(d,h):D&&D.isColor&&(x(D,1),X=!0);const w=o.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,u):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||X)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function C(L,X){const D=E(X);D&&(D.isCubeTexture||D.mapping===tf)?(m===void 0&&(m=new mn(new Yl(1,1,1),new ha({name:"BackgroundCubeMaterial",uniforms:go(sa.backgroundCube.uniforms),vertexShader:sa.backgroundCube.vertexShader,fragmentShader:sa.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(w,U,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=D,m.material.uniforms.backgroundBlurriness.value=X.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(cR.makeRotationFromEuler(X.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(eM),m.material.toneMapped=De.getTransfer(D.colorSpace)!==Ze,(S!==D||g!==D.version||v!==o.toneMapping)&&(m.material.needsUpdate=!0,S=D,g=D.version,v=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new mn(new pa(2,2),new ha({name:"BackgroundMaterial",uniforms:go(sa.background.uniforms),vertexShader:sa.background.vertexShader,fragmentShader:sa.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,p.material.toneMapped=De.getTransfer(D.colorSpace)!==Ze,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(S!==D||g!==D.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,S=D,g=D.version,v=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,X){L.getRGB(zu,jx(o)),i.buffers.color.setClear(zu.r,zu.g,zu.b,X,u)}function M(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,X=1){d.set(L),h=X,x(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,x(d,h)},render:R,addToRenderList:C,dispose:M}}function fR(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=v(null);let u=l,d=!1;function h(I,F,W,G,Y){let V=!1;const k=g(I,G,W,F);u!==k&&(u=k,m(u.object)),V=E(I,G,W,Y),V&&R(I,G,W,Y),Y!==null&&e.update(Y,o.ELEMENT_ARRAY_BUFFER),(V||d)&&(d=!1,D(I,F,W,G),Y!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function p(){return o.createVertexArray()}function m(I){return o.bindVertexArray(I)}function S(I){return o.deleteVertexArray(I)}function g(I,F,W,G){const Y=G.wireframe===!0;let V=r[F.id];V===void 0&&(V={},r[F.id]=V);const k=I.isInstancedMesh===!0?I.id:0;let tt=V[k];tt===void 0&&(tt={},V[k]=tt);let Q=tt[W.id];Q===void 0&&(Q={},tt[W.id]=Q);let at=Q[Y];return at===void 0&&(at=v(p()),Q[Y]=at),at}function v(I){const F=[],W=[],G=[];for(let Y=0;Y<i;Y++)F[Y]=0,W[Y]=0,G[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:G,object:I,attributes:{},index:null}}function E(I,F,W,G){const Y=u.attributes,V=F.attributes;let k=0;const tt=W.getAttributes();for(const Q in tt)if(tt[Q].location>=0){const gt=Y[Q];let wt=V[Q];if(wt===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(wt=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(wt=I.instanceColor)),gt===void 0||gt.attribute!==wt||wt&&gt.data!==wt.data)return!0;k++}return u.attributesNum!==k||u.index!==G}function R(I,F,W,G){const Y={},V=F.attributes;let k=0;const tt=W.getAttributes();for(const Q in tt)if(tt[Q].location>=0){let gt=V[Q];gt===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(gt=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(gt=I.instanceColor));const wt={};wt.attribute=gt,gt&&gt.data&&(wt.data=gt.data),Y[Q]=wt,k++}u.attributes=Y,u.attributesNum=k,u.index=G}function C(){const I=u.newAttributes;for(let F=0,W=I.length;F<W;F++)I[F]=0}function x(I){M(I,0)}function M(I,F){const W=u.newAttributes,G=u.enabledAttributes,Y=u.attributeDivisors;W[I]=1,G[I]===0&&(o.enableVertexAttribArray(I),G[I]=1),Y[I]!==F&&(o.vertexAttribDivisor(I,F),Y[I]=F)}function L(){const I=u.newAttributes,F=u.enabledAttributes;for(let W=0,G=F.length;W<G;W++)F[W]!==I[W]&&(o.disableVertexAttribArray(W),F[W]=0)}function X(I,F,W,G,Y,V,k){k===!0?o.vertexAttribIPointer(I,F,W,Y,V):o.vertexAttribPointer(I,F,W,G,Y,V)}function D(I,F,W,G){C();const Y=G.attributes,V=W.getAttributes(),k=F.defaultAttributeValues;for(const tt in V){const Q=V[tt];if(Q.location>=0){let at=Y[tt];if(at===void 0&&(tt==="instanceMatrix"&&I.instanceMatrix&&(at=I.instanceMatrix),tt==="instanceColor"&&I.instanceColor&&(at=I.instanceColor)),at!==void 0){const gt=at.normalized,wt=at.itemSize,Nt=e.get(at);if(Nt===void 0)continue;const H=Nt.buffer,lt=Nt.type,Et=Nt.bytesPerElement,et=lt===o.INT||lt===o.UNSIGNED_INT||at.gpuType===bm;if(at.isInterleavedBufferAttribute){const pt=at.data,bt=pt.stride,Ft=at.offset;if(pt.isInstancedInterleavedBuffer){for(let vt=0;vt<Q.locationSize;vt++)M(Q.location+vt,pt.meshPerAttribute);I.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let vt=0;vt<Q.locationSize;vt++)x(Q.location+vt);o.bindBuffer(o.ARRAY_BUFFER,H);for(let vt=0;vt<Q.locationSize;vt++)X(Q.location+vt,wt/Q.locationSize,lt,gt,bt*Et,(Ft+wt/Q.locationSize*vt)*Et,et)}else{if(at.isInstancedBufferAttribute){for(let pt=0;pt<Q.locationSize;pt++)M(Q.location+pt,at.meshPerAttribute);I.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let pt=0;pt<Q.locationSize;pt++)x(Q.location+pt);o.bindBuffer(o.ARRAY_BUFFER,H);for(let pt=0;pt<Q.locationSize;pt++)X(Q.location+pt,wt/Q.locationSize,lt,gt,wt*Et,wt/Q.locationSize*pt*Et,et)}}else if(k!==void 0){const gt=k[tt];if(gt!==void 0)switch(gt.length){case 2:o.vertexAttrib2fv(Q.location,gt);break;case 3:o.vertexAttrib3fv(Q.location,gt);break;case 4:o.vertexAttrib4fv(Q.location,gt);break;default:o.vertexAttrib1fv(Q.location,gt)}}}}L()}function w(){N();for(const I in r){const F=r[I];for(const W in F){const G=F[W];for(const Y in G){const V=G[Y];for(const k in V)S(V[k].object),delete V[k];delete G[Y]}}delete r[I]}}function U(I){if(r[I.id]===void 0)return;const F=r[I.id];for(const W in F){const G=F[W];for(const Y in G){const V=G[Y];for(const k in V)S(V[k].object),delete V[k];delete G[Y]}}delete r[I.id]}function z(I){for(const F in r){const W=r[F];for(const G in W){const Y=W[G];if(Y[I.id]===void 0)continue;const V=Y[I.id];for(const k in V)S(V[k].object),delete V[k];delete Y[I.id]}}}function T(I){for(const F in r){const W=r[F],G=I.isInstancedMesh===!0?I.id:0,Y=W[G];if(Y!==void 0){for(const V in Y){const k=Y[V];for(const tt in k)S(k[tt].object),delete k[tt];delete Y[V]}delete W[G],Object.keys(W).length===0&&delete r[F]}}}function N(){P(),d=!0,u!==l&&(u=l,m(u.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:N,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:x,disableUnusedAttributes:L}}function dR(o,e,i){let r;function l(p){r=p}function u(p,m){o.drawArrays(r,p,m),i.update(m,r,1)}function d(p,m,S){S!==0&&(o.drawArraysInstanced(r,p,m,S),i.update(m,r,S))}function h(p,m,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,S);let v=0;for(let E=0;E<S;E++)v+=m[E];i.update(v,r,1)}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function hR(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Gi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const T=z===da&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==gi&&z!==la&&!T&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const S=p(m);S!==m&&(le("WebGLRenderer:",m,"not supported, using",S,"instead."),m=S);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),X=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),w=o.getParameter(o.MAX_SAMPLES),U=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:E,maxVertexTextures:R,maxTextureSize:C,maxCubemapSize:x,maxAttributes:M,maxVertexUniforms:L,maxVaryings:X,maxFragmentUniforms:D,maxSamples:w,samples:U}}function pR(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new yr,h=new de,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const E=g.length!==0||v||r!==0||l;return l=v,r=g.length,E},this.beginShadows=function(){u=!0,S(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,v){i=S(g,v,0)},this.setState=function(g,v,E){const R=g.clippingPlanes,C=g.clipIntersection,x=g.clipShadows,M=o.get(g);if(!l||R===null||R.length===0||u&&!x)u?S(null):m();else{const L=u?0:r,X=L*4;let D=M.clippingState||null;p.value=D,D=S(R,v,X,E);for(let w=0;w!==X;++w)D[w]=i[w];M.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(g,v,E,R){const C=g!==null?g.length:0;let x=null;if(C!==0){if(x=p.value,R!==!0||x===null){const M=E+C*4,L=v.matrixWorldInverse;h.getNormalMatrix(L),(x===null||x.length<M)&&(x=new Float32Array(M));for(let X=0,D=E;X!==C;++X,D+=4)d.copy(g[X]).applyMatrix4(L,h),d.normal.toArray(x,D),x[D+3]=d.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,x}}const co=4,mR=6,gR=20,_R=256,Ul=new zm,US=new Le;let lp=null,cp=0,up=0,fp=!1;const vR=new K,$r=new K;class LS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=vR}=u;lp=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),up=this._renderer.getActiveMipmapLevel(),fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=IS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=PS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lp,cp,up),this._renderer.xr.enabled=fp,e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===is||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lp=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),up=this._renderer.getActiveMipmapLevel(),fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:da,format:Gi,colorSpace:Ku,depthBuffer:!1},l=OS(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=OS(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=SR(u)),this._blurMaterial=MR(u,e,i),this._ggxMaterial=xR(u,e,i)}return l}_compileMaterial(e){const i=new mn(new Qn,e);this._renderer.compile(i,Ul)}_sceneToCubeUV(e,i,r,l,u){const p=new Di(90,1,i,r),m=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,E=g.toneMapping;g.getClearColor(US),g.toneMapping=ua,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mn(new Yl,new br({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,x=C.material;let M=!1;const L=e.background;L?L.isColor&&(x.color.copy(L),e.background=null,M=!0):(x.color.copy(US),M=!0);for(let X=0;X<6;X++){const D=X%3;D===0?(p.up.set(0,m[X],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+S[X],u.y,u.z)):D===1?(p.up.set(0,0,m[X]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+S[X],u.z)):(p.up.set(0,m[X],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+S[X]));const w=this._cubeSize;so(l,D*w,X>2?w:0,w,w),g.setRenderTarget(l),M&&g.render(C,p),g.render(e,p)}g.toneMapping=E,g.autoClear=v,e.background=L}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===is||e.mapping===mo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=IS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=PS());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=e;const p=this._cubeSize;so(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,Ul)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),g=Math.sqrt(m*m-S*S),v=m*1.25,E=g*v,{_lodMax:R}=this,C=this._sizeLods[r],x=3*C*(r>R-co?r-R+co:0),M=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=E,p.mipInt.value=R-i,so(u,x,M,3*C,2*C),l.setRenderTarget(u),l.render(h,Ul),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=R-r,so(e,x,M,3*C,2*C),l.setRenderTarget(e),l.render(h,Ul)}_blur(e,i,r,l){const u=this._pingPongRenderTarget,d=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(e,u,i,r,d),this._blurPass(u,e,r,r,d)}_blurPass(e,i,r,l,u){const d=this._renderer,h=this._blurMaterial,p=this._lodMeshes[l];p.material=h;const m=h.uniforms;m.envMap.value=e.texture,m.sigma.value=u,m.mipInt.value=this._lodMax-r;const S=this._sizeLods[l],g=3*S*(l>this._lodMax-co?l-this._lodMax+co:0),v=4*(this._cubeSize-S);so(i,g,v,3*S,2*S),d.setRenderTarget(i),d.render(p,Ul)}}function SR(o){const e=[],i=[];let r=o;const l=o-co+1+mR;for(let u=0;u<l;u++){const d=Math.pow(2,r);e.push(d);const h=1/(d-2),p=-h,m=1+h,S=[p,p,m,p,m,m,p,p,m,m,p,m],g=6,v=6,E=3,R=new Float32Array(E*v*g),C=new Float32Array(E*v*g);for(let M=0;M<g;M++){const L=M%3*2/3-1,X=M>2?0:-1,D=[L,X,0,L+2/3,X,0,L+2/3,X+1,0,L,X,0,L+2/3,X+1,0,L,X+1,0];R.set(D,E*v*M);for(let w=0;w<v;w++){const U=S[w*2]*2-1,z=S[w*2+1]*2-1;M===0?$r.set(1,z,U):M===1?$r.set(-U,1,-z):M===2?$r.set(-U,z,1):M===3?$r.set(-1,z,-U):M===4?$r.set(-U,-1,z):$r.set(U,z,-1),$r.toArray(C,(M*v+w)*E)}}const x=new Qn;x.setAttribute("position",new Ha(R,E)),x.setAttribute("outputDirection",new Ha(C,E)),i.push(new mn(x,null)),r>co&&r--}return{lodMeshes:i,sizeLods:e}}function OS(o,e,i){const r=new Vi(o,e,i);return r.texture.mapping=tf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function so(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function xR(o,e,i){return new ha({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_R,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ef(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function MR(o,e,i){return new ha({name:"SphericalGaussianBlur",defines:{SAMPLES:gR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ef(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function PS(){return new ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ef(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function IS(){return new ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function ef(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class nM extends Vi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Qx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Yl(5,5,5),u=new ha({name:"CubemapFromEquirect",uniforms:go(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ii,blending:Fa});u.uniforms.tEquirect.value=i;const d=new mn(l,u),h=i.minFilter;return i.minFilter===es&&(i.minFilter=Vn),new bT(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}function yR(o){let e=new WeakMap,i=new WeakMap,r=null;function l(v,E=!1){return v==null?null:E?d(v):u(v)}function u(v){if(v&&v.isTexture){const E=v.mapping;if(E===Ph||E===Ih)if(e.has(v)){const R=e.get(v).texture;return h(R,v.mapping)}else{const R=v.image;if(R&&R.height>0){const C=new nM(R.height);return C.fromEquirectangularTexture(o,v),e.set(v,C),v.addEventListener("dispose",m),h(C.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const E=v.mapping,R=E===Ph||E===Ih,C=E===is||E===mo;if(R||C){let x=i.get(v);const M=x!==void 0?x.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==M)return r===null&&(r=new LS(o)),x=R?r.fromEquirectangular(v,x):r.fromCubemap(v,x),x.texture.pmremVersion=v.pmremVersion,i.set(v,x),x.texture;if(x!==void 0)return x.texture;{const L=v.image;return R&&L&&L.height>0||C&&L&&p(L)?(r===null&&(r=new LS(o)),x=R?r.fromEquirectangular(v):r.fromCubemap(v),x.texture.pmremVersion=v.pmremVersion,i.set(v,x),v.addEventListener("dispose",S),x.texture):null}}}return v}function h(v,E){return E===Ph?v.mapping=is:E===Ih&&(v.mapping=mo),v}function p(v){let E=0;const R=6;for(let C=0;C<R;C++)v[C]!==void 0&&E++;return E===R}function m(v){const E=v.target;E.removeEventListener("dispose",m);const R=e.get(E);R!==void 0&&(e.delete(E),R.dispose())}function S(v){const E=v.target;E.removeEventListener("dispose",S);const R=i.get(E);R!==void 0&&(i.delete(E),R.dispose())}function g(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:g}}function ER(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&uo("WebGLRenderer: "+r+" extension not supported."),l}}}function TR(o,e,i,r){const l={},u=new WeakMap;function d(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const R in v.attributes)e.remove(v.attributes[R]);v.removeEventListener("dispose",d),delete l[v.id];const E=u.get(v);E&&(e.remove(E),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(g,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function p(g){const v=g.attributes;for(const E in v)e.update(v[E],o.ARRAY_BUFFER)}function m(g){const v=[],E=g.index,R=g.attributes.position;let C=0;if(R===void 0)return;if(E!==null){const L=E.array;C=E.version;for(let X=0,D=L.length;X<D;X+=3){const w=L[X+0],U=L[X+1],z=L[X+2];v.push(w,U,U,z,z,w)}}else{const L=R.array;C=R.version;for(let X=0,D=L.length/3-1;X<D;X+=3){const w=X+0,U=X+1,z=X+2;v.push(w,U,U,z,z,w)}}const x=new(R.count>=65535?Kx:Zx)(v,1);x.version=C;const M=u.get(g);M&&e.remove(M),u.set(g,x)}function S(g){const v=u.get(g);if(v){const E=g.index;E!==null&&v.version<E.version&&m(g)}else m(g);return u.get(g)}return{get:h,update:p,getWireframeAttribute:S}}function bR(o,e,i){let r;function l(g){r=g}let u,d;function h(g){u=g.type,d=g.bytesPerElement}function p(g,v){o.drawElements(r,v,u,g*d),i.update(v,r,1)}function m(g,v,E){E!==0&&(o.drawElementsInstanced(r,v,u,g*d,E),i.update(v,r,E))}function S(g,v,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,u,g,0,E);let C=0;for(let x=0;x<E;x++)C+=v[x];i.update(C,r,1)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=S}function AR(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:Fe("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function RR(o,e,i){const r=new WeakMap,l=new ln;function u(d,h,p){const m=d.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=S!==void 0?S.length:0;let v=r.get(h);if(v===void 0||v.count!==g){let P=function(){T.dispose(),r.delete(h),h.removeEventListener("dispose",P)};var E=P;v!==void 0&&v.texture.dispose();const R=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],X=h.morphAttributes.color||[];let D=0;R===!0&&(D=1),C===!0&&(D=2),x===!0&&(D=3);let w=h.attributes.position.count*D,U=1;w>e.maxTextureSize&&(U=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const z=new Float32Array(w*U*4*g),T=new Wx(z,w,U,g);T.type=la,T.needsUpdate=!0;const N=D*4;for(let I=0;I<g;I++){const F=M[I],W=L[I],G=X[I],Y=w*U*4*I;for(let V=0;V<F.count;V++){const k=V*N;R===!0&&(l.fromBufferAttribute(F,V),z[Y+k+0]=l.x,z[Y+k+1]=l.y,z[Y+k+2]=l.z,z[Y+k+3]=0),C===!0&&(l.fromBufferAttribute(W,V),z[Y+k+4]=l.x,z[Y+k+5]=l.y,z[Y+k+6]=l.z,z[Y+k+7]=0),x===!0&&(l.fromBufferAttribute(G,V),z[Y+k+8]=l.x,z[Y+k+9]=l.y,z[Y+k+10]=l.z,z[Y+k+11]=G.itemSize===4?l.w:1)}}v={count:g,texture:T,size:new Oe(w,U)},r.set(h,v),h.addEventListener("dispose",P)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let x=0;x<m.length;x++)R+=m[x];const C=h.morphTargetsRelative?1:1-R;p.getUniforms().setValue(o,"morphTargetBaseInfluence",C),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:u}}function CR(o,e,i,r,l){let u=new WeakMap;function d(m){const S=l.render.frame,g=m.geometry,v=e.get(m,g);if(u.get(v)!==S&&(e.update(v),u.set(v,S)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==S&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),u.set(m,S))),m.isSkinnedMesh){const E=m.skeleton;u.get(E)!==S&&(E.update(),u.set(E,S))}return v}function h(){u=new WeakMap}function p(m){const S=m.target;S.removeEventListener("dispose",p),r.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:h}}const wR={[wx]:"LINEAR_TONE_MAPPING",[Dx]:"REINHARD_TONE_MAPPING",[Nx]:"CINEON_TONE_MAPPING",[Ux]:"ACES_FILMIC_TONE_MAPPING",[Ox]:"AGX_TONE_MAPPING",[Px]:"NEUTRAL_TONE_MAPPING",[Lx]:"CUSTOM_TONE_MAPPING"};function DR(o,e,i,r,l,u){const d=new Vi(e,i,{type:o,depthBuffer:l,stencilBuffer:u,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null;const m=new Qn;m.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new pn([0,2,0,0,2,0],2));const S=new xT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new mn(m,S),v=new zm(-1,1,1,-1,0,1);let E=null,R=null,C=!1,x,M=null,L=[],X=!1;this.setSize=function(D,w){d.setSize(D,w),h!==null&&h.setSize(D,w),p!==null&&p.setSize(D,w);for(let U=0;U<L.length;U++){const z=L[U];z.setSize&&z.setSize(D,w)}},this.setEffects=function(D){L=D,X=L.length>0&&L[0].isRenderPass===!0;const w=d.width,U=d.height;L.length>0&&h===null&&(h=new Vi(w,U,{type:da,depthBuffer:!1,stencilBuffer:!1}),p=new Vi(w,U,{type:da,depthBuffer:!1,stencilBuffer:!1}));for(let z=0;z<L.length;z++){const T=L[z];T.setSize&&T.setSize(w,U)}},this.begin=function(D,w){if(C||D.toneMapping===ua&&L.length===0)return!1;if(M=w,w!==null){const U=w.width,z=w.height;(d.width!==U||d.height!==z)&&this.setSize(U,z)}return X===!1&&D.setRenderTarget(d),x=D.toneMapping,D.toneMapping=ua,!0},this.hasRenderPass=function(){return X},this.end=function(D,w){D.toneMapping=x,C=!0;let U=d,z=h;for(let T=0;T<L.length;T++){const N=L[T];N.enabled!==!1&&(N.render(D,z,U,w),N.needsSwap!==!1&&(U=z,z=z===h?p:h))}if(E!==D.outputColorSpace||R!==D.toneMapping){E=D.outputColorSpace,R=D.toneMapping,S.defines={},De.getTransfer(E)===Ze&&(S.defines.SRGB_TRANSFER="");const T=wR[R];T&&(S.defines[T]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=U.texture,D.setRenderTarget(M),D.render(g,v),M=null,C=!1},this.isCompositing=function(){return C},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),m.dispose(),S.dispose()}}const iM=new Xn,rm=new Xl(1,1),aM=new Wx,rM=new J1,sM=new Qx,zS=[],FS=[],BS=new Float32Array(16),HS=new Float32Array(9),GS=new Float32Array(4);function Eo(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=zS[l];if(u===void 0&&(u=new Float32Array(l),zS[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function Tn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function bn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function nf(o,e){let i=FS[e];i===void 0&&(i=new Int32Array(e),FS[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function NR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function UR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;o.uniform2fv(this.addr,e),bn(i,e)}}function LR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Tn(i,e))return;o.uniform3fv(this.addr,e),bn(i,e)}}function OR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;o.uniform4fv(this.addr,e),bn(i,e)}}function PR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Tn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),bn(i,e)}else{if(Tn(i,r))return;GS.set(r),o.uniformMatrix2fv(this.addr,!1,GS),bn(i,r)}}function IR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Tn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),bn(i,e)}else{if(Tn(i,r))return;HS.set(r),o.uniformMatrix3fv(this.addr,!1,HS),bn(i,r)}}function zR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Tn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),bn(i,e)}else{if(Tn(i,r))return;BS.set(r),o.uniformMatrix4fv(this.addr,!1,BS),bn(i,r)}}function FR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function BR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;o.uniform2iv(this.addr,e),bn(i,e)}}function HR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;o.uniform3iv(this.addr,e),bn(i,e)}}function GR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;o.uniform4iv(this.addr,e),bn(i,e)}}function VR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function XR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;o.uniform2uiv(this.addr,e),bn(i,e)}}function kR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;o.uniform3uiv(this.addr,e),bn(i,e)}}function WR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;o.uniform4uiv(this.addr,e),bn(i,e)}}function qR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(rm.compareFunction=i.isReversedDepthBuffer()?Um:Nm,u=rm):u=iM,i.setTexture2D(e||u,l)}function YR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||rM,l)}function ZR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||sM,l)}function KR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||aM,l)}function QR(o){switch(o){case 5126:return NR;case 35664:return UR;case 35665:return LR;case 35666:return OR;case 35674:return PR;case 35675:return IR;case 35676:return zR;case 5124:case 35670:return FR;case 35667:case 35671:return BR;case 35668:case 35672:return HR;case 35669:case 35673:return GR;case 5125:return VR;case 36294:return XR;case 36295:return kR;case 36296:return WR;case 35678:case 36198:case 36298:case 36306:case 35682:return qR;case 35679:case 36299:case 36307:return YR;case 35680:case 36300:case 36308:case 36293:return ZR;case 36289:case 36303:case 36311:case 36292:return KR}}function JR(o,e){o.uniform1fv(this.addr,e)}function jR(o,e){const i=Eo(e,this.size,2);o.uniform2fv(this.addr,i)}function $R(o,e){const i=Eo(e,this.size,3);o.uniform3fv(this.addr,i)}function t3(o,e){const i=Eo(e,this.size,4);o.uniform4fv(this.addr,i)}function e3(o,e){const i=Eo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function n3(o,e){const i=Eo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function i3(o,e){const i=Eo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function a3(o,e){o.uniform1iv(this.addr,e)}function r3(o,e){o.uniform2iv(this.addr,e)}function s3(o,e){o.uniform3iv(this.addr,e)}function o3(o,e){o.uniform4iv(this.addr,e)}function l3(o,e){o.uniform1uiv(this.addr,e)}function c3(o,e){o.uniform2uiv(this.addr,e)}function u3(o,e){o.uniform3uiv(this.addr,e)}function f3(o,e){o.uniform4uiv(this.addr,e)}function d3(o,e,i){const r=this.cache,l=e.length,u=nf(i,l);Tn(r,u)||(o.uniform1iv(this.addr,u),bn(r,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=rm:d=iM;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,u[h])}function h3(o,e,i){const r=this.cache,l=e.length,u=nf(i,l);Tn(r,u)||(o.uniform1iv(this.addr,u),bn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||rM,u[d])}function p3(o,e,i){const r=this.cache,l=e.length,u=nf(i,l);Tn(r,u)||(o.uniform1iv(this.addr,u),bn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||sM,u[d])}function m3(o,e,i){const r=this.cache,l=e.length,u=nf(i,l);Tn(r,u)||(o.uniform1iv(this.addr,u),bn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||aM,u[d])}function g3(o){switch(o){case 5126:return JR;case 35664:return jR;case 35665:return $R;case 35666:return t3;case 35674:return e3;case 35675:return n3;case 35676:return i3;case 5124:case 35670:return a3;case 35667:case 35671:return r3;case 35668:case 35672:return s3;case 35669:case 35673:return o3;case 5125:return l3;case 36294:return c3;case 36295:return u3;case 36296:return f3;case 35678:case 36198:case 36298:case 36306:case 35682:return d3;case 35679:case 36299:case 36307:return h3;case 35680:case 36300:case 36308:case 36293:return p3;case 36289:case 36303:case 36311:case 36292:return m3}}class _3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=QR(i.type)}}class v3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=g3(i.type)}}class S3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const dp=/(\w+)(\])?(\[|\.)?/g;function VS(o,e){o.seq.push(e),o.map[e.id]=e}function x3(o,e,i){const r=o.name,l=r.length;for(dp.lastIndex=0;;){const u=dp.exec(r),d=dp.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){VS(i,m===void 0?new _3(h,o,e):new v3(h,o,e));break}else{let g=i.map[h];g===void 0&&(g=new S3(h),VS(i,g)),i=g}}}class Wu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=e.getActiveUniform(i,d),p=e.getUniformLocation(i,h.name);x3(h,p,this)}const l=[],u=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function XS(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const M3=37297;let y3=0;function E3(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const kS=new de;function T3(o){De._getMatrix(kS,De.workingColorSpace,o);const e=`mat3( ${kS.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case Qu:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function WS(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+E3(o.getShaderSource(e),h)}else return u}function b3(o,e){const i=T3(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const A3={[wx]:"Linear",[Dx]:"Reinhard",[Nx]:"Cineon",[Ux]:"ACESFilmic",[Ox]:"AgX",[Px]:"Neutral",[Lx]:"Custom"};function R3(o,e){const i=A3[e];return i===void 0?(le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fu=new K;function C3(){De.getLuminanceCoefficients(Fu);const o=Fu.x.toFixed(4),e=Fu.y.toFixed(4),i=Fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Il).join(`
`)}function D3(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function N3(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Il(o){return o!==""}function qS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function YS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U3=/^[ \t]*#include +<([\w\d./]+)>/gm;function sm(o){return o.replace(U3,O3)}const L3=new Map;function O3(o,e){let i=ge[e];if(i===void 0){const r=L3.get(e);if(r!==void 0)i=ge[r],le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sm(i)}const P3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ZS(o){return o.replace(P3,I3)}function I3(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function KS(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const z3={[Hu]:"SHADOWMAP_TYPE_PCF",[Pl]:"SHADOWMAP_TYPE_VSM"};function F3(o){return z3[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const B3={[is]:"ENVMAP_TYPE_CUBE",[mo]:"ENVMAP_TYPE_CUBE",[tf]:"ENVMAP_TYPE_CUBE_UV"};function H3(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":B3[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const G3={[mo]:"ENVMAP_MODE_REFRACTION"};function V3(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":G3[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const X3={[Cx]:"ENVMAP_BLENDING_MULTIPLY",[C1]:"ENVMAP_BLENDING_MIX",[w1]:"ENVMAP_BLENDING_ADD"};function k3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":X3[o.combine]||"ENVMAP_BLENDING_NONE"}function W3(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function q3(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=F3(i),m=H3(i),S=V3(i),g=k3(i),v=W3(i),E=w3(i),R=D3(u),C=l.createProgram();let x,M,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Il).join(`
`),x.length>0&&(x+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Il).join(`
`),M.length>0&&(M+=`
`)):(x=[KS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Il).join(`
`),M=[KS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+S:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ua?"#define TONE_MAPPING":"",i.toneMapping!==ua?ge.tonemapping_pars_fragment:"",i.toneMapping!==ua?R3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,b3("linearToOutputTexel",i.outputColorSpace),C3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Il).join(`
`)),d=sm(d),d=qS(d,i),d=YS(d,i),h=sm(h),h=qS(h,i),h=YS(h,i),d=ZS(d),h=ZS(h),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,M=["#define varying in",i.glslVersion===lS?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===lS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const X=L+x+d,D=L+M+h,w=XS(l,l.VERTEX_SHADER,X),U=XS(l,l.FRAGMENT_SHADER,D);l.attachShader(C,w),l.attachShader(C,U),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(I){if(o.debug.checkShaderErrors){const F=l.getProgramInfoLog(C)||"",W=l.getShaderInfoLog(w)||"",G=l.getShaderInfoLog(U)||"",Y=F.trim(),V=W.trim(),k=G.trim();let tt=!0,Q=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(tt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,w,U);else{const at=WS(l,w,"vertex"),gt=WS(l,U,"fragment");Fe("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Y+`
`+at+`
`+gt)}else Y!==""?le("WebGLProgram: Program Info Log:",Y):(V===""||k==="")&&(Q=!1);Q&&(I.diagnostics={runnable:tt,programLog:Y,vertexShader:{log:V,prefix:x},fragmentShader:{log:k,prefix:M}})}l.deleteShader(w),l.deleteShader(U),T=new Wu(l,C),N=N3(l,C)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let N;this.getAttributes=function(){return N===void 0&&z(this),N};let P=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=l.getProgramParameter(C,M3)),P},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=y3++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=w,this.fragmentShader=U,this}let Y3=0;class Z3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new K3(e),i.set(e,r)),r}}class K3{constructor(e){this.id=Y3++,this.code=e,this.usedTimes=0}}function Q3(o){return o===as||o===Yu||o===Zu}function J3(o,e,i,r,l,u){const d=new qx,h=new Z3,p=new Set,m=[],S=new Map,g=r.logarithmicDepthBuffer;let v=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(T){return p.add(T),T===0?"uv":`uv${T}`}function C(T,N,P,I,F,W){const G=I.fog,Y=F.geometry,V=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?I.environment:null,k=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,tt=e.get(T.envMap||V,k),Q=tt&&tt.mapping===tf?tt.image.height:null,at=E[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&le("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const gt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,wt=gt!==void 0?gt.length:0;let Nt=0;Y.morphAttributes.position!==void 0&&(Nt=1),Y.morphAttributes.normal!==void 0&&(Nt=2),Y.morphAttributes.color!==void 0&&(Nt=3);let H,lt,Et,et;if(at){const Ce=sa[at];H=Ce.vertexShader,lt=Ce.fragmentShader}else{H=T.vertexShader,lt=T.fragmentShader;const Ce=h.getVertexShaderStage(T),ue=h.getFragmentShaderStage(T);h.update(T,Ce,ue),Et=Ce.id,et=ue.id}const pt=o.getRenderTarget(),bt=o.state.buffers.depth.getReversed(),Ft=F.isInstancedMesh===!0,vt=F.isBatchedMesh===!0,Rt=!!T.map,Xe=!!T.matcap,me=!!tt,_e=!!T.aoMap,Me=!!T.lightMap,ne=!!T.bumpMap&&T.wireframe===!1,ae=!!T.normalMap,ke=!!T.displacementMap,gn=!!T.emissiveMap,ze=!!T.metalnessMap,nn=!!T.roughnessMap,j=T.anisotropy>0,sn=T.clearcoat>0,Pe=T.dispersion>0,O=T.retroreflectivity>0,y=T.iridescence>0,rt=T.sheen>0,ft=T.transmission>0,mt=j&&!!T.anisotropyMap,At=sn&&!!T.clearcoatMap,Ut=sn&&!!T.clearcoatNormalMap,_t=sn&&!!T.clearcoatRoughnessMap,yt=y&&!!T.iridescenceMap,Dt=y&&!!T.iridescenceThicknessMap,jt=rt&&!!T.sheenColorMap,zt=rt&&!!T.sheenRoughnessMap,It=!!T.specularMap,kt=!!T.specularColorMap,ie=!!T.specularIntensityMap,ce=ft&&!!T.transmissionMap,J=ft&&!!T.thicknessMap,Ct=!!T.gradientMap,Mt=!!T.alphaMap,Lt=T.alphaTest>0,Xt=!!T.alphaHash,Tt=!!T.extensions;let Jt=ua;T.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Jt=o.toneMapping);const Vt={shaderID:at,shaderType:T.type,shaderName:T.name,vertexShader:H,fragmentShader:lt,defines:T.defines,customVertexShaderID:Et,customFragmentShaderID:et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:vt,batchingColor:vt&&F._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&F.instanceColor!==null,instancingMorph:Ft&&F.morphTexture!==null,outputColorSpace:pt===null?o.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:De.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Rt,matcap:Xe,envMap:me,envMapMode:me&&tt.mapping,envMapCubeUVHeight:Q,aoMap:_e,lightMap:Me,bumpMap:ne,normalMap:ae,displacementMap:ke,emissiveMap:gn,normalMapObjectSpace:ae&&T.normalMapType===U1,normalMapTangentSpace:ae&&T.normalMapType===im,packedNormalMap:ae&&T.normalMapType===im&&Q3(T.normalMap.format),metalnessMap:ze,roughnessMap:nn,anisotropy:j,anisotropyMap:mt,clearcoat:sn,clearcoatMap:At,clearcoatNormalMap:Ut,clearcoatRoughnessMap:_t,dispersion:Pe,retroreflection:O,iridescence:y,iridescenceMap:yt,iridescenceThicknessMap:Dt,sheen:rt,sheenColorMap:jt,sheenRoughnessMap:zt,specularMap:It,specularColorMap:kt,specularIntensityMap:ie,transmission:ft,transmissionMap:ce,thicknessMap:J,gradientMap:Ct,opaque:T.transparent===!1&&T.blending===zl&&T.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Lt,alphaHash:Xt,combine:T.combine,mapUv:Rt&&R(T.map.channel),aoMapUv:_e&&R(T.aoMap.channel),lightMapUv:Me&&R(T.lightMap.channel),bumpMapUv:ne&&R(T.bumpMap.channel),normalMapUv:ae&&R(T.normalMap.channel),displacementMapUv:ke&&R(T.displacementMap.channel),emissiveMapUv:gn&&R(T.emissiveMap.channel),metalnessMapUv:ze&&R(T.metalnessMap.channel),roughnessMapUv:nn&&R(T.roughnessMap.channel),anisotropyMapUv:mt&&R(T.anisotropyMap.channel),clearcoatMapUv:At&&R(T.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&R(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&R(T.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&R(T.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&R(T.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&R(T.sheenColorMap.channel),sheenRoughnessMapUv:zt&&R(T.sheenRoughnessMap.channel),specularMapUv:It&&R(T.specularMap.channel),specularColorMapUv:kt&&R(T.specularColorMap.channel),specularIntensityMapUv:ie&&R(T.specularIntensityMap.channel),transmissionMapUv:ce&&R(T.transmissionMap.channel),thicknessMapUv:J&&R(T.thicknessMap.channel),alphaMapUv:Mt&&R(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ae||j),vertexNormals:!!Y.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(Rt||Mt),fog:!!G,useFog:T.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Y.attributes.normal===void 0&&ae===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:bt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Nt,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:Jt,decodeVideoTexture:Rt&&T.map.isVideoTexture===!0&&De.getTransfer(T.map.colorSpace)===Ze,decodeVideoTextureEmissive:gn&&T.emissiveMap.isVideoTexture===!0&&De.getTransfer(T.emissiveMap.colorSpace)===Ze,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ia,flipSided:T.side===ii,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Tt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&T.extensions.multiDraw===!0||vt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Vt.vertexUv1s=p.has(1),Vt.vertexUv2s=p.has(2),Vt.vertexUv3s=p.has(3),p.clear(),Vt}function x(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)N.push(P),N.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(M(N,T),L(N,T),N.push(o.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function M(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numSunLights),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numSunLightShadows),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function L(T,N){d.disableAll(),N.instancing&&d.enable(0),N.instancingColor&&d.enable(1),N.instancingMorph&&d.enable(2),N.matcap&&d.enable(3),N.envMap&&d.enable(4),N.normalMapObjectSpace&&d.enable(5),N.normalMapTangentSpace&&d.enable(6),N.clearcoat&&d.enable(7),N.iridescence&&d.enable(8),N.alphaTest&&d.enable(9),N.vertexColors&&d.enable(10),N.vertexAlphas&&d.enable(11),N.vertexUv1s&&d.enable(12),N.vertexUv2s&&d.enable(13),N.vertexUv3s&&d.enable(14),N.vertexTangents&&d.enable(15),N.anisotropy&&d.enable(16),N.alphaHash&&d.enable(17),N.batching&&d.enable(18),N.dispersion&&d.enable(19),N.retroreflection&&d.enable(24),N.batchingColor&&d.enable(20),N.gradientMap&&d.enable(21),N.packedNormalMap&&d.enable(22),N.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reversedDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),N.numLightProbeGrids>0&&d.enable(22),N.hasPositionAttribute&&d.enable(23),T.push(d.mask)}function X(T){const N=E[T.type];let P;if(N){const I=sa[N];P=_T.clone(I.uniforms)}else P=T.uniforms;return P}function D(T,N){let P=S.get(N);return P!==void 0?++P.usedTimes:(P=new q3(o,N,T,l),m.push(P),S.set(N,P)),P}function w(T){if(--T.usedTimes===0){const N=m.indexOf(T);m[N]=m[m.length-1],m.pop(),S.delete(T.cacheKey),T.destroy()}}function U(T){h.remove(T)}function z(){h.dispose()}return{getParameters:C,getProgramCacheKey:x,getUniforms:X,acquireProgram:D,releaseProgram:w,releaseShaderCache:U,programs:m,dispose:z}}function j3(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,p){o.get(d)[h]=p}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function $3(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function QS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function JS(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(v){let E=0;return v.isInstancedMesh&&(E+=2),v.isSkinnedMesh&&(E+=1),E}function h(v,E,R,C,x,M){let L=o[e];return L===void 0?(L={id:v.id,object:v,geometry:E,material:R,materialVariant:d(v),groupOrder:C,renderOrder:v.renderOrder,z:x,group:M},o[e]=L):(L.id=v.id,L.object=v,L.geometry=E,L.material=R,L.materialVariant=d(v),L.groupOrder=C,L.renderOrder=v.renderOrder,L.z=x,L.group=M),e++,L}function p(v,E,R,C,x,M,L){L.reversedDepth===!0&&(x=-x);const X=h(v,E,R,C,x,M);R.transmission>0?r.push(X):R.transparent===!0?l.push(X):i.push(X)}function m(v,E,R,C,x,M){const L=h(v,E,R,C,x,M);R.transmission>0?r.unshift(L):R.transparent===!0?l.unshift(L):i.unshift(L)}function S(v,E){i.length>1&&i.sort(v||$3),r.length>1&&r.sort(E||QS),l.length>1&&l.sort(E||QS)}function g(){for(let v=e,E=o.length;v<E;v++){const R=o[v];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:p,unshift:m,finish:g,sort:S}}function tC(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new JS,o.set(r,[d])):l>=u.length?(d=new JS,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function eC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new K,color:new Le};break;case"SpotLight":i={position:new K,direction:new K,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new K,halfWidth:new K,halfHeight:new K};break}return o[e.id]=i,i}}}function nC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let iC=0;function aC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function rC(o){const e=new eC,i=nC(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new K);const l=new K,u=new Je,d=new Je;function h(m){let S=0,g=0,v=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let E=0,R=0,C=0,x=0,M=0,L=0,X=0,D=0,w=0,U=0,z=0,T=0,N=0,P=0;m.sort(aC);for(let F=0,W=m.length;F<W;F++){const G=m[F],Y=G.color,V=G.intensity,k=G.distance;let tt=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===as?tt=G.shadow.map.texture:tt=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)S+=Y.r*V,g+=Y.g*V,v+=Y.b*V;else if(G.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(G.sh.coefficients[Q],V);P++}else if(G.isSunLight){const Q=e.get(G);if(Q.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const at=G.shadow,gt=i.get(G);gt.shadowIntensity=at.intensity,gt.shadowBias=at.bias,gt.shadowNormalBias=at.normalBias,gt.shadowRadius=at.radius,gt.shadowMapSize.copy(at.mapSize).multiply(at.getFrameExtents()),r.sunShadow[R]=gt,r.sunShadowMap[R]=tt;const wt=at.getViewportCount();for(let Nt=0;Nt<wt;Nt++)r.sunShadowMatrix[C+Nt]=at.getMatrix(Nt),r.sunShadowCascade[C+Nt]=at._cascadeData[Nt];C+=wt,R++}r.sun[E]=Q,E++}else if(G.isDirectionalLight){const Q=e.get(G);if(Q.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const at=G.shadow,gt=i.get(G);gt.shadowIntensity=at.intensity,gt.shadowBias=at.bias,gt.shadowNormalBias=at.normalBias,gt.shadowRadius=at.radius,gt.shadowMapSize=at.mapSize,r.directionalShadow[x]=gt,r.directionalShadowMap[x]=tt,r.directionalShadowMatrix[x]=G.shadow.matrix,w++}r.directional[x]=Q,x++}else if(G.isSpotLight){const Q=e.get(G);Q.position.setFromMatrixPosition(G.matrixWorld),Q.color.copy(Y).multiplyScalar(V),Q.distance=k,Q.coneCos=Math.cos(G.angle),Q.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),Q.decay=G.decay,r.spot[L]=Q;const at=G.shadow;if(G.map&&(r.spotLightMap[T]=G.map,T++,at.updateMatrices(G),G.castShadow&&N++),r.spotLightMatrix[L]=at.matrix,G.castShadow){const gt=i.get(G);gt.shadowIntensity=at.intensity,gt.shadowBias=at.bias,gt.shadowNormalBias=at.normalBias,gt.shadowRadius=at.radius,gt.shadowMapSize=at.mapSize,r.spotShadow[L]=gt,r.spotShadowMap[L]=tt,z++}L++}else if(G.isRectAreaLight){const Q=e.get(G);Q.color.copy(Y).multiplyScalar(V),Q.halfWidth.set(G.width*.5,0,0),Q.halfHeight.set(0,G.height*.5,0),r.rectArea[X]=Q,X++}else if(G.isPointLight){const Q=e.get(G);if(Q.color.copy(G.color).multiplyScalar(G.intensity),Q.distance=G.distance,Q.decay=G.decay,G.castShadow){const at=G.shadow,gt=i.get(G);gt.shadowIntensity=at.intensity,gt.shadowBias=at.bias,gt.shadowNormalBias=at.normalBias,gt.shadowRadius=at.radius,gt.shadowMapSize=at.mapSize,gt.shadowCameraNear=at.camera.near,gt.shadowCameraFar=at.camera.far,r.pointShadow[M]=gt,r.pointShadowMap[M]=tt,r.pointShadowMatrix[M]=G.shadow.matrix,U++}r.point[M]=Q,M++}else if(G.isHemisphereLight){const Q=e.get(G);Q.skyColor.copy(G.color).multiplyScalar(V),Q.groundColor.copy(G.groundColor).multiplyScalar(V),r.hemi[D]=Q,D++}}X>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Gt.LTC_FLOAT_1,r.rectAreaLTC2=Gt.LTC_FLOAT_2):(r.rectAreaLTC1=Gt.LTC_HALF_1,r.rectAreaLTC2=Gt.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=g,r.ambient[2]=v;const I=r.hash;(I.sunLength!==E||I.directionalLength!==x||I.pointLength!==M||I.spotLength!==L||I.rectAreaLength!==X||I.hemiLength!==D||I.numSunShadows!==R||I.numDirectionalShadows!==w||I.numPointShadows!==U||I.numSpotShadows!==z||I.numSpotMaps!==T||I.numLightProbes!==P)&&(r.sun.length=E,r.directional.length=x,r.spot.length=L,r.rectArea.length=X,r.point.length=M,r.hemi.length=D,r.sunShadow.length=R,r.sunShadowMap.length=R,r.sunShadowMatrix.length=C,r.sunShadowCascade.length=C,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.directionalShadowMatrix.length=w,r.pointShadow.length=U,r.pointShadowMap.length=U,r.pointShadowMatrix.length=U,r.spotShadow.length=z,r.spotShadowMap.length=z,r.spotLightMatrix.length=z+T-N,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=P,I.sunLength=E,I.directionalLength=x,I.pointLength=M,I.spotLength=L,I.rectAreaLength=X,I.hemiLength=D,I.numSunShadows=R,I.numDirectionalShadows=w,I.numPointShadows=U,I.numSpotShadows=z,I.numSpotMaps=T,I.numLightProbes=P,r.version=iC++)}function p(m,S){let g=0,v=0,E=0,R=0,C=0,x=0;const M=S.matrixWorldInverse;for(let L=0,X=m.length;L<X;L++){const D=m[L];if(D.isSunLight){const w=r.sun[g];w.direction.setFromMatrixPosition(D.matrixWorld),w.direction.transformDirection(M),g++}else if(D.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),v++}else if(D.isSpotLight){const w=r.spot[R];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),R++}else if(D.isRectAreaLight){const w=r.rectArea[C];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(M),d.identity(),u.copy(D.matrixWorld),u.premultiply(M),d.extractRotation(u),w.halfWidth.set(D.width*.5,0,0),w.halfHeight.set(0,D.height*.5,0),w.halfWidth.applyMatrix4(d),w.halfHeight.applyMatrix4(d),C++}else if(D.isPointLight){const w=r.point[E];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(M),E++}else if(D.isHemisphereLight){const w=r.hemi[x];w.direction.setFromMatrixPosition(D.matrixWorld),w.direction.transformDirection(M),x++}}}return{setup:h,setupView:p,state:r}}function jS(o){const e=new rC(o),i=[],r=[],l=[];function u(v){g.camera=v,i.length=0,r.length=0,l.length=0}function d(v){i.push(v)}function h(v){r.push(v)}function p(v){l.push(v)}function m(){e.setup(i)}function S(v){e.setupView(i,v)}const g={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:g,setupLights:m,setupLightsView:S,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function sC(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new jS(o),e.set(l,[h])):u>=d.length?(h=new jS(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const oC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lC=`uniform sampler2D shadow_pass;
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
}`,cC=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],uC=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],$S=new Je,Ll=new K,hp=new K;function fC(o,e,i){let r=new Pm;const l=new Oe,u=new Oe,d=new ln,h=new MT,p=new yT,m={},S=i.maxTextureSize,g={[_i]:ii,[ii]:_i,[Ia]:Ia},v=new ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:oC,fragmentShader:lC}),E=v.clone();E.defines.HORIZONTAL_PASS=1;const R=new Qn;R.setAttribute("position",new Ha(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new mn(R,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hu;let M=this.type;this.render=function(U,z,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||U.length===0)return;this.type===c1&&(le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hu);const N=o.getRenderTarget(),P=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),F=o.state;F.setBlending(Fa),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=M!==this.type;W&&z.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(Y=>Y.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,Y=U.length;G<Y;G++){const V=U[G],k=V.shadow;if(k===void 0){le("WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const tt=k.getFrameExtents();l.multiply(tt),u.copy(k.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(u.x=Math.floor(S/tt.x),l.x=u.x*tt.x,k.mapSize.x=u.x),l.y>S&&(u.y=Math.floor(S/tt.y),l.y=u.y*tt.y,k.mapSize.y=u.y));const Q=o.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Q,k.map===null||W===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Pl){if(V.isPointLight){le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Vi(l.x,l.y,{format:as,type:da,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),k.map.texture.name=V.name+".shadowMap",k.map.depthTexture=new Xl(l.x,l.y,la),k.map.depthTexture.name=V.name+".shadowMapDepth",k.map.depthTexture.format=Ga,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=zn,k.map.depthTexture.magFilter=zn}else V.isPointLight?(k.map=new nM(l.x),k.map.depthTexture=new mT(l.x,fa)):(k.map=new Vi(l.x,l.y),k.map.depthTexture=new Xl(l.x,l.y,fa)),k.map.depthTexture.name=V.name+".shadowMap",k.map.depthTexture.format=Ga,this.type===Hu?(k.map.depthTexture.compareFunction=Q?Um:Nm,k.map.depthTexture.minFilter=Vn,k.map.depthTexture.magFilter=Vn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=zn,k.map.depthTexture.magFilter=zn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==l.x||k.map.height!==l.y)&&k.map.setSize(l.x,l.y);const at=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();V.isPointLight!==!0&&k.updateMatrices(V,T);for(let gt=0;gt<at;gt++){const wt=k.getCamera(gt);if(V.isPointLight){const Nt=k.camera,H=k.matrix,lt=V.distance||Nt.far;lt!==Nt.far&&(Nt.far=lt,Nt.updateProjectionMatrix()),Ll.setFromMatrixPosition(V.matrixWorld),Nt.position.copy(Ll),hp.copy(Nt.position),hp.add(cC[gt]),Nt.up.copy(uC[gt]),Nt.lookAt(hp),Nt.updateMatrixWorld(),H.makeTranslation(-Ll.x,-Ll.y,-Ll.z),$S.multiplyMatrices(Nt.projectionMatrix,Nt.matrixWorldInverse),k._frustum.setFromProjectionMatrix($S,Nt.coordinateSystem,Nt.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)o.setRenderTarget(k.map,gt),o.clear();else{gt===0&&(o.setRenderTarget(k.map),o.clear());const Nt=k.getViewport(gt);d.set(u.x*Nt.x,u.y*Nt.y,u.x*Nt.z,u.y*Nt.w),F.viewport(d)}r=k.getFrustum(gt),D(z,T,wt,V,this.type)}k.isPointLightShadow!==!0&&this.type===Pl&&L(k,T),k.needsUpdate=!1}M=this.type,x.needsUpdate=!1,o.setRenderTarget(N,P,I)};function L(U,z){const T=e.update(C);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,E.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,E.needsUpdate=!0),U.mapPass===null?U.mapPass=new Vi(l.x,l.y,{format:as,type:da}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),v.uniforms.shadow_pass.value=U.map.depthTexture,v.uniforms.resolution.value.set(U.map.width,U.map.height),v.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(z,null,T,v,C,null),E.uniforms.shadow_pass.value=U.mapPass.texture,E.uniforms.resolution.value.set(U.map.width,U.map.height),E.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(z,null,T,E,C,null)}function X(U,z,T,N){let P=null;const I=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(I!==void 0)P=I;else if(P=T.isPointLight===!0?p:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const F=P.uuid,W=z.uuid;let G=m[F];G===void 0&&(G={},m[F]=G);let Y=G[W];Y===void 0&&(Y=P.clone(),G[W]=Y,z.addEventListener("dispose",w)),P=Y}if(P.visible=z.visible,P.wireframe=z.wireframe,N===Pl?P.side=z.shadowSide!==null?z.shadowSide:z.side:P.side=z.shadowSide!==null?z.shadowSide:g[z.side],P.alphaMap=z.alphaMap,P.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,P.map=z.map,P.clipShadows=z.clipShadows,P.clippingPlanes=z.clippingPlanes,P.clipIntersection=z.clipIntersection,P.displacementMap=z.displacementMap,P.displacementScale=z.displacementScale,P.displacementBias=z.displacementBias,P.wireframeLinewidth=z.wireframeLinewidth,P.linewidth=z.linewidth,T.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=o.properties.get(P);F.light=T}return P}function D(U,z,T,N,P){if(U.visible===!1)return;if(U.layers.test(z.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&P===Pl)&&(!U.frustumCulled||U.intersectsFrustum(r))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const W=e.update(U),G=U.material;if(Array.isArray(G)){const Y=W.groups;for(let V=0,k=Y.length;V<k;V++){const tt=Y[V],Q=G[tt.materialIndex];if(Q&&Q.visible){const at=X(U,Q,N,P);U.onBeforeShadow(o,U,z,T,W,at,tt),o.renderBufferDirect(T,null,W,at,U,tt),U.onAfterShadow(o,U,z,T,W,at,tt)}}}else if(G.visible){const Y=X(U,G,N,P);U.onBeforeShadow(o,U,z,T,W,Y,null),o.renderBufferDirect(T,null,W,Y,U,null),U.onAfterShadow(o,U,z,T,W,Y,null)}}const F=U.children;for(let W=0,G=F.length;W<G;W++)D(F[W],z,T,N,P)}function w(U){U.target.removeEventListener("dispose",w);for(const T in m){const N=m[T],P=U.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}}function dC(o,e){function i(){let J=!1;const Ct=new ln;let Mt=null;const Lt=new ln(0,0,0,0);return{setMask:function(Xt){Mt!==Xt&&!J&&(o.colorMask(Xt,Xt,Xt,Xt),Mt=Xt)},setLocked:function(Xt){J=Xt},setClear:function(Xt,Tt,Jt,Vt,Ce){Ce===!0&&(Xt*=Vt,Tt*=Vt,Jt*=Vt),Ct.set(Xt,Tt,Jt,Vt),Lt.equals(Ct)===!1&&(o.clearColor(Xt,Tt,Jt,Vt),Lt.copy(Ct))},reset:function(){J=!1,Mt=null,Lt.set(-1,0,0,0)}}}function r(){let J=!1,Ct=!1,Mt=null,Lt=null,Xt=null;return{setReversed:function(Tt){if(Ct!==Tt){const Jt=e.get("EXT_clip_control");Tt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Ct=Tt;const Vt=Xt;Xt=null,this.setClear(Vt)}},getReversed:function(){return Ct},setTest:function(Tt){Tt?pt(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(Tt){Mt!==Tt&&!J&&(o.depthMask(Tt),Mt=Tt)},setFunc:function(Tt){if(Ct&&(Tt=k1[Tt]),Lt!==Tt){switch(Tt){case vp:o.depthFunc(o.NEVER);break;case Sp:o.depthFunc(o.ALWAYS);break;case xp:o.depthFunc(o.LESS);break;case Bl:o.depthFunc(o.LEQUAL);break;case Mp:o.depthFunc(o.EQUAL);break;case yp:o.depthFunc(o.GEQUAL);break;case Ep:o.depthFunc(o.GREATER);break;case Tp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Lt=Tt}},setLocked:function(Tt){J=Tt},setClear:function(Tt){Xt!==Tt&&(Xt=Tt,Ct&&(Tt=1-Tt),o.clearDepth(Tt))},reset:function(){J=!1,Mt=null,Lt=null,Xt=null,Ct=!1}}}function l(){let J=!1,Ct=null,Mt=null,Lt=null,Xt=null,Tt=null,Jt=null,Vt=null,Ce=null;return{setTest:function(ue){J||(ue?pt(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(ue){Ct!==ue&&!J&&(o.stencilMask(ue),Ct=ue)},setFunc:function(ue,ai,vi){(Mt!==ue||Lt!==ai||Xt!==vi)&&(o.stencilFunc(ue,ai,vi),Mt=ue,Lt=ai,Xt=vi)},setOp:function(ue,ai,vi){(Tt!==ue||Jt!==ai||Vt!==vi)&&(o.stencilOp(ue,ai,vi),Tt=ue,Jt=ai,Vt=vi)},setLocked:function(ue){J=ue},setClear:function(ue){Ce!==ue&&(o.clearStencil(ue),Ce=ue)},reset:function(){J=!1,Ct=null,Mt=null,Lt=null,Xt=null,Tt=null,Jt=null,Vt=null,Ce=null}}}const u=new i,d=new r,h=new l,p=new WeakMap,m=new WeakMap;let S={},g={},v={},E=new WeakMap,R=[],C=null,x=!1,M=null,L=null,X=null,D=null,w=null,U=null,z=null,T=new Le(0,0,0),N=0,P=!1,I=null,F=null,W=null,G=null,Y=null;const V=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,tt=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(Q)[1]),k=tt>=1):Q.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),k=tt>=2);let at=null,gt={};const wt=o.getParameter(o.SCISSOR_BOX),Nt=o.getParameter(o.VIEWPORT),H=new ln().fromArray(wt),lt=new ln().fromArray(Nt);function Et(J,Ct,Mt,Lt){const Xt=new Uint8Array(4),Tt=o.createTexture();o.bindTexture(J,Tt),o.texParameteri(J,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(J,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<Mt;Jt++)J===o.TEXTURE_3D||J===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,Lt,0,o.RGBA,o.UNSIGNED_BYTE,Xt):o.texImage2D(Ct+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Xt);return Tt}const et={};et[o.TEXTURE_2D]=Et(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=Et(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=Et(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=Et(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),pt(o.DEPTH_TEST),d.setFunc(Bl),ne(!1),ae(aS),pt(o.CULL_FACE),_e(Fa);function pt(J){S[J]!==!0&&(o.enable(J),S[J]=!0)}function bt(J){S[J]!==!1&&(o.disable(J),S[J]=!1)}function Ft(J,Ct){return v[J]!==Ct?(o.bindFramebuffer(J,Ct),v[J]=Ct,J===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ct),J===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function vt(J,Ct){let Mt=R,Lt=!1;if(J){Mt=E.get(Ct),Mt===void 0&&(Mt=[],E.set(Ct,Mt));const Xt=J.textures;if(Mt.length!==Xt.length||Mt[0]!==o.COLOR_ATTACHMENT0){for(let Tt=0,Jt=Xt.length;Tt<Jt;Tt++)Mt[Tt]=o.COLOR_ATTACHMENT0+Tt;Mt.length=Xt.length,Lt=!0}}else Mt[0]!==o.BACK&&(Mt[0]=o.BACK,Lt=!0);Lt&&o.drawBuffers(Mt)}function Rt(J){return C!==J?(o.useProgram(J),C=J,!0):!1}const Xe={[lo]:o.FUNC_ADD,[f1]:o.FUNC_SUBTRACT,[d1]:o.FUNC_REVERSE_SUBTRACT};Xe[h1]=o.MIN,Xe[p1]=o.MAX;const me={[m1]:o.ZERO,[g1]:o.ONE,[_1]:o.SRC_COLOR,[Ax]:o.SRC_ALPHA,[E1]:o.SRC_ALPHA_SATURATE,[M1]:o.DST_COLOR,[S1]:o.DST_ALPHA,[v1]:o.ONE_MINUS_SRC_COLOR,[Rx]:o.ONE_MINUS_SRC_ALPHA,[y1]:o.ONE_MINUS_DST_COLOR,[x1]:o.ONE_MINUS_DST_ALPHA,[T1]:o.CONSTANT_COLOR,[b1]:o.ONE_MINUS_CONSTANT_COLOR,[A1]:o.CONSTANT_ALPHA,[R1]:o.ONE_MINUS_CONSTANT_ALPHA};function _e(J,Ct,Mt,Lt,Xt,Tt,Jt,Vt,Ce,ue){if(J===Fa){x===!0&&(bt(o.BLEND),x=!1);return}if(x===!1&&(pt(o.BLEND),x=!0),J!==u1){if(J!==M||ue!==P){if((L!==lo||w!==lo)&&(o.blendEquation(o.FUNC_ADD),L=lo,w=lo),ue)switch(J){case zl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case rS:o.blendFunc(o.ONE,o.ONE);break;case sS:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case oS:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Fe("WebGLState: Invalid blending: ",J);break}else switch(J){case zl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case rS:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case sS:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oS:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",J);break}X=null,D=null,U=null,z=null,T.set(0,0,0),N=0,M=J,P=ue}return}Xt=Xt||Ct,Tt=Tt||Mt,Jt=Jt||Lt,(Ct!==L||Xt!==w)&&(o.blendEquationSeparate(Xe[Ct],Xe[Xt]),L=Ct,w=Xt),(Mt!==X||Lt!==D||Tt!==U||Jt!==z)&&(o.blendFuncSeparate(me[Mt],me[Lt],me[Tt],me[Jt]),X=Mt,D=Lt,U=Tt,z=Jt),(Vt.equals(T)===!1||Ce!==N)&&(o.blendColor(Vt.r,Vt.g,Vt.b,Ce),T.copy(Vt),N=Ce),M=J,P=!1}function Me(J,Ct){J.side===Ia?bt(o.CULL_FACE):pt(o.CULL_FACE);let Mt=J.side===ii;Ct&&(Mt=!Mt),ne(Mt),J.blending===zl&&J.transparent===!1?_e(Fa):_e(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),d.setFunc(J.depthFunc),d.setTest(J.depthTest),d.setMask(J.depthWrite),u.setMask(J.colorWrite);const Lt=J.stencilWrite;h.setTest(Lt),Lt&&(h.setMask(J.stencilWriteMask),h.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),h.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),gn(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?pt(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ne(J){I!==J&&(J?o.frontFace(o.CW):o.frontFace(o.CCW),I=J)}function ae(J){J!==o1?(pt(o.CULL_FACE),J!==F&&(J===aS?o.cullFace(o.BACK):J===l1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),F=J}function ke(J){J!==W&&(k&&o.lineWidth(J),W=J)}function gn(J,Ct,Mt){J?(pt(o.POLYGON_OFFSET_FILL),(G!==Ct||Y!==Mt)&&(G=Ct,Y=Mt,d.getReversed()&&(Ct=-Ct),o.polygonOffset(Ct,Mt))):bt(o.POLYGON_OFFSET_FILL)}function ze(J){J?pt(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function nn(J){J===void 0&&(J=o.TEXTURE0+V-1),at!==J&&(o.activeTexture(J),at=J)}function j(J,Ct,Mt){Mt===void 0&&(at===null?Mt=o.TEXTURE0+V-1:Mt=at);let Lt=gt[Mt];Lt===void 0&&(Lt={type:void 0,texture:void 0},gt[Mt]=Lt),(Lt.type!==J||Lt.texture!==Ct)&&(at!==Mt&&(o.activeTexture(Mt),at=Mt),o.bindTexture(J,Ct||et[J]),Lt.type=J,Lt.texture=Ct)}function sn(){const J=gt[at];J!==void 0&&J.type!==void 0&&(o.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function Pe(){try{o.compressedTexImage2D(...arguments)}catch(J){Fe("WebGLState:",J)}}function O(){try{o.compressedTexImage3D(...arguments)}catch(J){Fe("WebGLState:",J)}}function y(){try{o.texSubImage2D(...arguments)}catch(J){Fe("WebGLState:",J)}}function rt(){try{o.texSubImage3D(...arguments)}catch(J){Fe("WebGLState:",J)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(J){Fe("WebGLState:",J)}}function mt(){try{o.compressedTexSubImage3D(...arguments)}catch(J){Fe("WebGLState:",J)}}function At(){try{o.texStorage2D(...arguments)}catch(J){Fe("WebGLState:",J)}}function Ut(){try{o.texStorage3D(...arguments)}catch(J){Fe("WebGLState:",J)}}function _t(){try{o.texImage2D(...arguments)}catch(J){Fe("WebGLState:",J)}}function yt(){try{o.texImage3D(...arguments)}catch(J){Fe("WebGLState:",J)}}function Dt(J){return g[J]!==void 0?g[J]:o.getParameter(J)}function jt(J,Ct){g[J]!==Ct&&(o.pixelStorei(J,Ct),g[J]=Ct)}function zt(J){H.equals(J)===!1&&(o.scissor(J.x,J.y,J.z,J.w),H.copy(J))}function It(J){lt.equals(J)===!1&&(o.viewport(J.x,J.y,J.z,J.w),lt.copy(J))}function kt(J,Ct){let Mt=m.get(Ct);Mt===void 0&&(Mt=new WeakMap,m.set(Ct,Mt));let Lt=Mt.get(J);Lt===void 0&&(Lt=o.getUniformBlockIndex(Ct,J.name),Mt.set(J,Lt))}function ie(J,Ct){const Lt=m.get(Ct).get(J);p.get(Ct)!==Lt&&(o.uniformBlockBinding(Ct,Lt,J.__bindingPointIndex),p.set(Ct,Lt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},g={},at=null,gt={},v={},E=new WeakMap,R=[],C=null,x=!1,M=null,L=null,X=null,D=null,w=null,U=null,z=null,T=new Le(0,0,0),N=0,P=!1,I=null,F=null,W=null,G=null,Y=null,H.set(0,0,o.canvas.width,o.canvas.height),lt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:pt,disable:bt,bindFramebuffer:Ft,drawBuffers:vt,useProgram:Rt,setBlending:_e,setMaterial:Me,setFlipSided:ne,setCullFace:ae,setLineWidth:ke,setPolygonOffset:gn,setScissorTest:ze,activeTexture:nn,bindTexture:j,unbindTexture:sn,compressedTexImage2D:Pe,compressedTexImage3D:O,texImage2D:_t,texImage3D:yt,pixelStorei:jt,getParameter:Dt,updateUBOMapping:kt,uniformBlockBinding:ie,texStorage2D:At,texStorage3D:Ut,texSubImage2D:y,texSubImage3D:rt,compressedTexSubImage2D:ft,compressedTexSubImage3D:mt,scissor:zt,viewport:It,reset:ce}}function hC(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Oe,S=new WeakMap,g=new Set;let v;const E=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(O,y){return R?new OffscreenCanvas(O,y):Ju("canvas")}function x(O,y,rt){let ft=1;const mt=Pe(O);if((mt.width>rt||mt.height>rt)&&(ft=rt/Math.max(mt.width,mt.height)),ft<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const At=Math.floor(ft*mt.width),Ut=Math.floor(ft*mt.height);v===void 0&&(v=C(At,Ut));const _t=y?C(At,Ut):v;return _t.width=At,_t.height=Ut,_t.getContext("2d").drawImage(O,0,0,At,Ut),le("WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+At+"x"+Ut+")."),_t}else return"data"in O&&le("WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),O;return O}function M(O){return O.generateMipmaps}function L(O){o.generateMipmap(O)}function X(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(O,y,rt,ft,mt,At=!1){if(O!==null){if(o[O]!==void 0)return o[O];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Ut;ft&&(Ut=e.get("EXT_texture_norm16"),Ut||le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _t=y;if(y===o.RED&&(rt===o.FLOAT&&(_t=o.R32F),rt===o.HALF_FLOAT&&(_t=o.R16F),rt===o.UNSIGNED_BYTE&&(_t=o.R8),rt===o.UNSIGNED_SHORT&&Ut&&(_t=Ut.R16_EXT),rt===o.SHORT&&Ut&&(_t=Ut.R16_SNORM_EXT)),y===o.RED_INTEGER&&(rt===o.UNSIGNED_BYTE&&(_t=o.R8UI),rt===o.UNSIGNED_SHORT&&(_t=o.R16UI),rt===o.UNSIGNED_INT&&(_t=o.R32UI),rt===o.BYTE&&(_t=o.R8I),rt===o.SHORT&&(_t=o.R16I),rt===o.INT&&(_t=o.R32I)),y===o.RG&&(rt===o.FLOAT&&(_t=o.RG32F),rt===o.HALF_FLOAT&&(_t=o.RG16F),rt===o.UNSIGNED_BYTE&&(_t=o.RG8),rt===o.UNSIGNED_SHORT&&Ut&&(_t=Ut.RG16_EXT),rt===o.SHORT&&Ut&&(_t=Ut.RG16_SNORM_EXT)),y===o.RG_INTEGER&&(rt===o.UNSIGNED_BYTE&&(_t=o.RG8UI),rt===o.UNSIGNED_SHORT&&(_t=o.RG16UI),rt===o.UNSIGNED_INT&&(_t=o.RG32UI),rt===o.BYTE&&(_t=o.RG8I),rt===o.SHORT&&(_t=o.RG16I),rt===o.INT&&(_t=o.RG32I)),y===o.RGB_INTEGER&&(rt===o.UNSIGNED_BYTE&&(_t=o.RGB8UI),rt===o.UNSIGNED_SHORT&&(_t=o.RGB16UI),rt===o.UNSIGNED_INT&&(_t=o.RGB32UI),rt===o.BYTE&&(_t=o.RGB8I),rt===o.SHORT&&(_t=o.RGB16I),rt===o.INT&&(_t=o.RGB32I)),y===o.RGBA_INTEGER&&(rt===o.UNSIGNED_BYTE&&(_t=o.RGBA8UI),rt===o.UNSIGNED_SHORT&&(_t=o.RGBA16UI),rt===o.UNSIGNED_INT&&(_t=o.RGBA32UI),rt===o.BYTE&&(_t=o.RGBA8I),rt===o.SHORT&&(_t=o.RGBA16I),rt===o.INT&&(_t=o.RGBA32I)),y===o.RGB&&(rt===o.UNSIGNED_SHORT&&Ut&&(_t=Ut.RGB16_EXT),rt===o.SHORT&&Ut&&(_t=Ut.RGB16_SNORM_EXT),rt===o.UNSIGNED_INT_5_9_9_9_REV&&(_t=o.RGB9_E5),rt===o.UNSIGNED_INT_10F_11F_11F_REV&&(_t=o.R11F_G11F_B10F)),y===o.RGBA){const yt=At?Qu:De.getTransfer(mt);rt===o.FLOAT&&(_t=o.RGBA32F),rt===o.HALF_FLOAT&&(_t=o.RGBA16F),rt===o.UNSIGNED_BYTE&&(_t=yt===Ze?o.SRGB8_ALPHA8:o.RGBA8),rt===o.UNSIGNED_SHORT&&Ut&&(_t=Ut.RGBA16_EXT),rt===o.SHORT&&Ut&&(_t=Ut.RGBA16_SNORM_EXT),rt===o.UNSIGNED_SHORT_4_4_4_4&&(_t=o.RGBA4),rt===o.UNSIGNED_SHORT_5_5_5_1&&(_t=o.RGB5_A1)}return(_t===o.R16F||_t===o.R32F||_t===o.RG16F||_t===o.RG32F||_t===o.RGBA16F||_t===o.RGBA32F)&&e.get("EXT_color_buffer_float"),_t}function w(O,y){let rt;return O?y===null||y===fa||y===Gl?rt=o.DEPTH24_STENCIL8:y===la?rt=o.DEPTH32F_STENCIL8:y===Hl&&(rt=o.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===fa||y===Gl?rt=o.DEPTH_COMPONENT24:y===la?rt=o.DEPTH_COMPONENT32F:y===Hl&&(rt=o.DEPTH_COMPONENT16),rt}function U(O,y){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==zn&&O.minFilter!==Vn?Math.log2(Math.max(y.width,y.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?y.mipmaps.length:1}function z(O){const y=O.target;y.removeEventListener("dispose",z),N(y),y.isVideoTexture&&S.delete(y),y.isHTMLTexture&&g.delete(y)}function T(O){const y=O.target;y.removeEventListener("dispose",T),I(y)}function N(O){const y=r.get(O);if(y.__webglInit===void 0)return;const rt=O.source,ft=E.get(rt);if(ft){const mt=ft[y.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&P(O),Object.keys(ft).length===0&&E.delete(rt)}r.remove(O)}function P(O){const y=r.get(O);o.deleteTexture(y.__webglTexture);const rt=O.source,ft=E.get(rt);delete ft[y.__cacheKey],d.memory.textures--}function I(O){const y=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(y.__webglFramebuffer[ft]))for(let mt=0;mt<y.__webglFramebuffer[ft].length;mt++)o.deleteFramebuffer(y.__webglFramebuffer[ft][mt]);else o.deleteFramebuffer(y.__webglFramebuffer[ft]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[ft])}else{if(Array.isArray(y.__webglFramebuffer))for(let ft=0;ft<y.__webglFramebuffer.length;ft++)o.deleteFramebuffer(y.__webglFramebuffer[ft]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ft=0;ft<y.__webglColorRenderbuffer.length;ft++)y.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[ft]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const rt=O.textures;for(let ft=0,mt=rt.length;ft<mt;ft++){const At=r.get(rt[ft]);At.__webglTexture&&(o.deleteTexture(At.__webglTexture),d.memory.textures--),r.remove(rt[ft])}r.remove(O)}let F=0;function W(){F=0}function G(){return F}function Y(O){F=O}function V(){const O=F;return O>=l.maxTextures&&le("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+l.maxTextures),F+=1,O}function k(O){const y=[];return y.push(O.wrapS),y.push(O.wrapT),y.push(O.wrapR||0),y.push(O.magFilter),y.push(O.minFilter),y.push(O.anisotropy),y.push(O.internalFormat),y.push(O.format),y.push(O.type),y.push(O.generateMipmaps),y.push(O.premultiplyAlpha),y.push(O.flipY),y.push(O.unpackAlignment),y.push(O.colorSpace),y.join()}function tt(O,y){const rt=r.get(O);if(O.isVideoTexture&&j(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&rt.__version!==O.version){const ft=O.image;if(ft===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(rt,O,y);return}}else O.isExternalTexture&&(rt.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,rt.__webglTexture,o.TEXTURE0+y)}function Q(O,y){const rt=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&rt.__version!==O.version){bt(rt,O,y);return}else O.isExternalTexture&&(rt.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,rt.__webglTexture,o.TEXTURE0+y)}function at(O,y){const rt=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&rt.__version!==O.version){bt(rt,O,y);return}i.bindTexture(o.TEXTURE_3D,rt.__webglTexture,o.TEXTURE0+y)}function gt(O,y){const rt=r.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&rt.__version!==O.version){Ft(rt,O,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture,o.TEXTURE0+y)}const wt={[bp]:o.REPEAT,[za]:o.CLAMP_TO_EDGE,[Ap]:o.MIRRORED_REPEAT},Nt={[zn]:o.NEAREST,[D1]:o.NEAREST_MIPMAP_NEAREST,[gu]:o.NEAREST_MIPMAP_LINEAR,[Vn]:o.LINEAR,[zh]:o.LINEAR_MIPMAP_NEAREST,[es]:o.LINEAR_MIPMAP_LINEAR},H={[O1]:o.NEVER,[B1]:o.ALWAYS,[P1]:o.LESS,[Nm]:o.LEQUAL,[I1]:o.EQUAL,[Um]:o.GEQUAL,[z1]:o.GREATER,[F1]:o.NOTEQUAL};function lt(O,y){if(y.type===la&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Vn||y.magFilter===zh||y.magFilter===gu||y.magFilter===es||y.minFilter===Vn||y.minFilter===zh||y.minFilter===gu||y.minFilter===es)&&le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,wt[y.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,wt[y.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,wt[y.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Nt[y.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Nt[y.minFilter]),y.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,H[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===zn||y.minFilter!==gu&&y.minFilter!==es||y.type===la&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const rt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function Et(O,y){let rt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,y.addEventListener("dispose",z));const ft=y.source;let mt=E.get(ft);mt===void 0&&(mt={},E.set(ft,mt));const At=k(y);if(At!==O.__cacheKey){mt[At]===void 0&&(mt[At]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,rt=!0),mt[At].usedTimes++;const Ut=mt[O.__cacheKey];Ut!==void 0&&(mt[O.__cacheKey].usedTimes--,Ut.usedTimes===0&&P(y)),O.__cacheKey=At,O.__webglTexture=mt[At].texture}return rt}function et(O,y,rt){return Math.floor(Math.floor(O/rt)/y)}function pt(O,y,rt,ft){const At=O.updateRanges;if(At.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,rt,ft,y.data);else{At.sort((jt,zt)=>jt.start-zt.start);let Ut=0;for(let jt=1;jt<At.length;jt++){const zt=At[Ut],It=At[jt],kt=zt.start+zt.count,ie=et(It.start,y.width,4),ce=et(zt.start,y.width,4);It.start<=kt+1&&ie===ce&&et(It.start+It.count-1,y.width,4)===ie?zt.count=Math.max(zt.count,It.start+It.count-zt.start):(++Ut,At[Ut]=It)}At.length=Ut+1;const _t=i.getParameter(o.UNPACK_ROW_LENGTH),yt=i.getParameter(o.UNPACK_SKIP_PIXELS),Dt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let jt=0,zt=At.length;jt<zt;jt++){const It=At[jt],kt=Math.floor(It.start/4),ie=Math.ceil(It.count/4),ce=kt%y.width,J=Math.floor(kt/y.width),Ct=ie,Mt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),i.pixelStorei(o.UNPACK_SKIP_ROWS,J),i.texSubImage2D(o.TEXTURE_2D,0,ce,J,Ct,Mt,rt,ft,y.data)}O.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,_t),i.pixelStorei(o.UNPACK_SKIP_PIXELS,yt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Dt)}}function bt(O,y,rt){let ft=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ft=o.TEXTURE_3D);const mt=Et(O,y),At=y.source;i.bindTexture(ft,O.__webglTexture,o.TEXTURE0+rt);const Ut=r.get(At);if(At.version!==Ut.__version||mt===!0){if(i.activeTexture(o.TEXTURE0+rt),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const Mt=De.getPrimaries(De.workingColorSpace),Lt=y.colorSpace===Er?null:De.getPrimaries(y.colorSpace),Xt=y.colorSpace===Er||Mt===Lt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment);let yt=x(y.image,!1,l.maxTextureSize);yt=sn(y,yt);const Dt=u.convert(y.format,y.colorSpace),jt=u.convert(y.type);let zt=D(y.internalFormat,Dt,jt,y.normalized,y.colorSpace,y.isVideoTexture);lt(ft,y);let It;const kt=y.mipmaps,ie=y.isVideoTexture!==!0,ce=Ut.__version===void 0||mt===!0,J=At.dataReady,Ct=U(y,yt);if(y.isDepthTexture)zt=w(y.format===ns,y.type),ce&&(ie?i.texStorage2D(o.TEXTURE_2D,1,zt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,zt,yt.width,yt.height,0,Dt,jt,null));else if(y.isDataTexture)if(kt.length>0){ie&&ce&&i.texStorage2D(o.TEXTURE_2D,Ct,zt,kt[0].width,kt[0].height);for(let Mt=0,Lt=kt.length;Mt<Lt;Mt++)It=kt[Mt],ie?J&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,It.width,It.height,Dt,jt,It.data):i.texImage2D(o.TEXTURE_2D,Mt,zt,It.width,It.height,0,Dt,jt,It.data);y.generateMipmaps=!1}else ie?(ce&&i.texStorage2D(o.TEXTURE_2D,Ct,zt,yt.width,yt.height),J&&pt(y,yt,Dt,jt)):i.texImage2D(o.TEXTURE_2D,0,zt,yt.width,yt.height,0,Dt,jt,yt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ie&&ce&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,zt,kt[0].width,kt[0].height,yt.depth);for(let Mt=0,Lt=kt.length;Mt<Lt;Mt++)if(It=kt[Mt],y.format!==Gi)if(Dt!==null)if(ie){if(J)if(y.layerUpdates.size>0){const Xt=NS(It.width,It.height,y.format,y.type);for(const Tt of y.layerUpdates){const Jt=It.data.subarray(Tt*Xt/It.data.BYTES_PER_ELEMENT,(Tt+1)*Xt/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,Tt,It.width,It.height,1,Dt,Jt)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,It.width,It.height,yt.depth,Dt,It.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,zt,It.width,It.height,yt.depth,0,It.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?J&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,It.width,It.height,yt.depth,Dt,jt,It.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,zt,It.width,It.height,yt.depth,0,Dt,jt,It.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ie&&ce&&i.texStorage2D(o.TEXTURE_2D,Ct,zt,kt[0].width,kt[0].height);for(let Mt=0,Lt=kt.length;Mt<Lt;Mt++)It=kt[Mt],y.format!==Gi?Dt!==null?ie?J&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,It.width,It.height,Dt,It.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,zt,It.width,It.height,0,It.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?J&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,It.width,It.height,Dt,jt,It.data):i.texImage2D(o.TEXTURE_2D,Mt,zt,It.width,It.height,0,Dt,jt,It.data)}else if(y.isDataArrayTexture)if(ie){if(ce&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,zt,yt.width,yt.height,yt.depth),J)if(y.layerUpdates.size>0){const Mt=NS(yt.width,yt.height,y.format,y.type);for(const Lt of y.layerUpdates){const Xt=yt.data.subarray(Lt*Mt/yt.data.BYTES_PER_ELEMENT,(Lt+1)*Mt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Lt,yt.width,yt.height,1,Dt,jt,Xt)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Dt,jt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,yt.width,yt.height,yt.depth,0,Dt,jt,yt.data);else if(y.isData3DTexture)ie?(ce&&i.texStorage3D(o.TEXTURE_3D,Ct,zt,yt.width,yt.height,yt.depth),J&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Dt,jt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,zt,yt.width,yt.height,yt.depth,0,Dt,jt,yt.data);else if(y.isFramebufferTexture){if(ce)if(ie)i.texStorage2D(o.TEXTURE_2D,Ct,zt,yt.width,yt.height);else{let Mt=yt.width,Lt=yt.height;for(let Xt=0;Xt<Ct;Xt++)i.texImage2D(o.TEXTURE_2D,Xt,zt,Mt,Lt,0,Dt,jt,null),Mt>>=1,Lt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in o){const Mt=o.canvas;if(Mt.hasAttribute("layoutsubtree")||Mt.setAttribute("layoutsubtree","true"),yt.parentNode!==Mt){Mt.appendChild(yt),g.add(y),Mt.onpaint=Lt=>{const Xt=Lt.changedElements;for(const Tt of g)Xt.includes(Tt.image)&&(Tt.needsUpdate=!0)},Mt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,yt);else{const Xt=o.RGBA,Tt=o.RGBA,Jt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Xt,Tt,Jt,yt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(kt.length>0){if(ie&&ce){const Mt=Pe(kt[0]);i.texStorage2D(o.TEXTURE_2D,Ct,zt,Mt.width,Mt.height)}for(let Mt=0,Lt=kt.length;Mt<Lt;Mt++)It=kt[Mt],ie?J&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt,jt,It):i.texImage2D(o.TEXTURE_2D,Mt,zt,Dt,jt,It);y.generateMipmaps=!1}else if(ie){if(ce){const Mt=Pe(yt);i.texStorage2D(o.TEXTURE_2D,Ct,zt,Mt.width,Mt.height)}J&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Dt,jt,yt)}else i.texImage2D(o.TEXTURE_2D,0,zt,Dt,jt,yt);M(y)&&L(ft),Ut.__version=At.version,y.onUpdate&&y.onUpdate(y)}O.__version=y.version}function Ft(O,y,rt){if(y.image.length!==6)return;const ft=Et(O,y),mt=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+rt);const At=r.get(mt);if(mt.version!==At.__version||ft===!0){i.activeTexture(o.TEXTURE0+rt);const Ut=De.getPrimaries(De.workingColorSpace),_t=y.colorSpace===Er?null:De.getPrimaries(y.colorSpace),yt=y.colorSpace===Er||Ut===_t?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Dt=y.isCompressedTexture||y.image[0].isCompressedTexture,jt=y.image[0]&&y.image[0].isDataTexture,zt=[];for(let Tt=0;Tt<6;Tt++)!Dt&&!jt?zt[Tt]=x(y.image[Tt],!0,l.maxCubemapSize):zt[Tt]=jt?y.image[Tt].image:y.image[Tt],zt[Tt]=sn(y,zt[Tt]);const It=zt[0],kt=u.convert(y.format,y.colorSpace),ie=u.convert(y.type),ce=D(y.internalFormat,kt,ie,y.normalized,y.colorSpace),J=y.isVideoTexture!==!0,Ct=At.__version===void 0||ft===!0,Mt=mt.dataReady;let Lt=U(y,It);lt(o.TEXTURE_CUBE_MAP,y);let Xt;if(Dt){J&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,ce,It.width,It.height);for(let Tt=0;Tt<6;Tt++){Xt=zt[Tt].mipmaps;for(let Jt=0;Jt<Xt.length;Jt++){const Vt=Xt[Jt];y.format!==Gi?kt!==null?J?Mt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt,0,0,Vt.width,Vt.height,kt,Vt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt,ce,Vt.width,Vt.height,0,Vt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt,0,0,Vt.width,Vt.height,kt,ie,Vt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt,ce,Vt.width,Vt.height,0,kt,ie,Vt.data)}}}else{if(Xt=y.mipmaps,J&&Ct){Xt.length>0&&Lt++;const Tt=Pe(zt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,ce,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(jt){J?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,zt[Tt].width,zt[Tt].height,kt,ie,zt[Tt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,ce,zt[Tt].width,zt[Tt].height,0,kt,ie,zt[Tt].data);for(let Jt=0;Jt<Xt.length;Jt++){const Ce=Xt[Jt].image[Tt].image;J?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt+1,0,0,Ce.width,Ce.height,kt,ie,Ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt+1,ce,Ce.width,Ce.height,0,kt,ie,Ce.data)}}else{J?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,kt,ie,zt[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,ce,kt,ie,zt[Tt]);for(let Jt=0;Jt<Xt.length;Jt++){const Vt=Xt[Jt];J?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt+1,0,0,kt,ie,Vt.image[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Jt+1,ce,kt,ie,Vt.image[Tt])}}}M(y)&&L(o.TEXTURE_CUBE_MAP),At.__version=mt.version,y.onUpdate&&y.onUpdate(y)}O.__version=y.version}function vt(O,y,rt,ft,mt,At){const Ut=u.convert(rt.format,rt.colorSpace),_t=u.convert(rt.type),yt=D(rt.internalFormat,Ut,_t,rt.normalized,rt.colorSpace),Dt=r.get(y),jt=r.get(rt);if(jt.__renderTarget=y,!Dt.__hasExternalTextures){const zt=Math.max(1,y.width>>At),It=Math.max(1,y.height>>At);mt===o.TEXTURE_3D||mt===o.TEXTURE_2D_ARRAY?i.texImage3D(mt,At,yt,zt,It,y.depth,0,Ut,_t,null):i.texImage2D(mt,At,yt,zt,It,0,Ut,_t,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),nn(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,mt,jt.__webglTexture,0,ze(y)):(mt===o.TEXTURE_2D||mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,mt,jt.__webglTexture,At),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Rt(O,y,rt){if(o.bindRenderbuffer(o.RENDERBUFFER,O),y.depthBuffer){const ft=y.depthTexture,mt=ft&&ft.isDepthTexture?ft.type:null,At=w(y.stencilBuffer,mt),Ut=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;nn(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ze(y),At,y.width,y.height):rt?o.renderbufferStorageMultisample(o.RENDERBUFFER,ze(y),At,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,At,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,O)}else{const ft=y.textures;for(let mt=0;mt<ft.length;mt++){const At=ft[mt],Ut=u.convert(At.format,At.colorSpace),_t=u.convert(At.type),yt=D(At.internalFormat,Ut,_t,At.normalized,At.colorSpace);nn(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ze(y),yt,y.width,y.height):rt?o.renderbufferStorageMultisample(o.RENDERBUFFER,ze(y),yt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,yt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Xe(O,y,rt){const ft=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const mt=r.get(y.depthTexture);if(mt.__renderTarget=y,(!mt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ft){if(mt.__webglInit===void 0&&(mt.__webglInit=!0,y.depthTexture.addEventListener("dispose",z)),mt.__webglTexture===void 0){mt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),lt(o.TEXTURE_CUBE_MAP,y.depthTexture);const Dt=u.convert(y.depthTexture.format),jt=u.convert(y.depthTexture.type);let zt;y.depthTexture.format===Ga?zt=o.DEPTH_COMPONENT24:y.depthTexture.format===ns&&(zt=o.DEPTH24_STENCIL8);for(let It=0;It<6;It++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,zt,y.width,y.height,0,Dt,jt,null)}}else tt(y.depthTexture,0);const At=mt.__webglTexture,Ut=ze(y),_t=ft?o.TEXTURE_CUBE_MAP_POSITIVE_X+rt:o.TEXTURE_2D,yt=y.depthTexture.format===ns?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ga)nn(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,_t,At,0,Ut):o.framebufferTexture2D(o.FRAMEBUFFER,yt,_t,At,0);else if(y.depthTexture.format===ns)nn(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,_t,At,0,Ut):o.framebufferTexture2D(o.FRAMEBUFFER,yt,_t,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function me(O){const y=r.get(O),rt=O.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==O.depthTexture){const ft=O.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ft){const mt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ft.removeEventListener("dispose",mt)};ft.addEventListener("dispose",mt),y.__depthDisposeCallback=mt}y.__boundDepthTexture=ft}if(O.depthTexture&&!y.__autoAllocateDepthBuffer)if(rt)for(let ft=0;ft<6;ft++)Xe(y.__webglFramebuffer[ft],O,ft);else{const ft=O.texture.mipmaps;ft&&ft.length>0?Xe(y.__webglFramebuffer[0],O,0):Xe(y.__webglFramebuffer,O,0)}else if(rt){y.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[ft]),y.__webglDepthbuffer[ft]===void 0)y.__webglDepthbuffer[ft]=o.createRenderbuffer(),Rt(y.__webglDepthbuffer[ft],O,!1);else{const mt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=y.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,At),o.framebufferRenderbuffer(o.FRAMEBUFFER,mt,o.RENDERBUFFER,At)}}else{const ft=O.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),Rt(y.__webglDepthbuffer,O,!1);else{const mt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,At),o.framebufferRenderbuffer(o.FRAMEBUFFER,mt,o.RENDERBUFFER,At)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function _e(O,y,rt){const ft=r.get(O);y!==void 0&&vt(ft.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),rt!==void 0&&me(O)}function Me(O){const y=O.texture,rt=r.get(O),ft=r.get(y);O.addEventListener("dispose",T);const mt=O.textures,At=O.isWebGLCubeRenderTarget===!0,Ut=mt.length>1;if(Ut||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=y.version,d.memory.textures++),At){rt.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0){rt.__webglFramebuffer[_t]=[];for(let yt=0;yt<y.mipmaps.length;yt++)rt.__webglFramebuffer[_t][yt]=o.createFramebuffer()}else rt.__webglFramebuffer[_t]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){rt.__webglFramebuffer=[];for(let _t=0;_t<y.mipmaps.length;_t++)rt.__webglFramebuffer[_t]=o.createFramebuffer()}else rt.__webglFramebuffer=o.createFramebuffer();if(Ut)for(let _t=0,yt=mt.length;_t<yt;_t++){const Dt=r.get(mt[_t]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&nn(O)===!1){rt.__webglMultisampledFramebuffer=o.createFramebuffer(),rt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let _t=0;_t<mt.length;_t++){const yt=mt[_t];rt.__webglColorRenderbuffer[_t]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,rt.__webglColorRenderbuffer[_t]);const Dt=u.convert(yt.format,yt.colorSpace),jt=u.convert(yt.type),zt=D(yt.internalFormat,Dt,jt,yt.normalized,yt.colorSpace,O.isXRRenderTarget===!0),It=ze(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,It,zt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+_t,o.RENDERBUFFER,rt.__webglColorRenderbuffer[_t])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(rt.__webglDepthRenderbuffer=o.createRenderbuffer(),Rt(rt.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(At){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),lt(o.TEXTURE_CUBE_MAP,y);for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)vt(rt.__webglFramebuffer[_t][yt],O,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,yt);else vt(rt.__webglFramebuffer[_t],O,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);M(y)&&L(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ut){for(let _t=0,yt=mt.length;_t<yt;_t++){const Dt=mt[_t],jt=r.get(Dt);let zt=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(zt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(zt,jt.__webglTexture),lt(zt,Dt),vt(rt.__webglFramebuffer,O,Dt,o.COLOR_ATTACHMENT0+_t,zt,0),M(Dt)&&L(zt)}i.unbindTexture()}else{let _t=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(_t=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(_t,ft.__webglTexture),lt(_t,y),y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)vt(rt.__webglFramebuffer[yt],O,y,o.COLOR_ATTACHMENT0,_t,yt);else vt(rt.__webglFramebuffer,O,y,o.COLOR_ATTACHMENT0,_t,0);M(y)&&L(_t),i.unbindTexture()}O.depthBuffer&&me(O)}function ne(O){const y=O.textures;for(let rt=0,ft=y.length;rt<ft;rt++){const mt=y[rt];if(M(mt)){const At=X(O),Ut=r.get(mt).__webglTexture;i.bindTexture(At,Ut),L(At),i.unbindTexture()}}}const ae=[],ke=[];function gn(O){if(O.samples>0){if(nn(O)===!1){const y=O.textures,rt=O.width,ft=O.height;let mt=o.COLOR_BUFFER_BIT;const At=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=r.get(O),_t=y.length>1;if(_t)for(let Dt=0;Dt<y.length;Dt++)i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const yt=O.texture.mipmaps;yt&&yt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Dt=0;Dt<y.length;Dt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(mt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(mt|=o.STENCIL_BUFFER_BIT)),_t){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[Dt]);const jt=r.get(y[Dt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,jt,0)}o.blitFramebuffer(0,0,rt,ft,0,0,rt,ft,mt,o.NEAREST),p===!0&&(ae.length=0,ke.length=0,ae.push(o.COLOR_ATTACHMENT0+Dt),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(ae.push(At),ke.push(At),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ke)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),_t)for(let Dt=0;Dt<y.length;Dt++){i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[Dt]);const jt=r.get(y[Dt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,jt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&p){const y=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function ze(O){return Math.min(l.maxSamples,O.samples)}function nn(O){const y=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function j(O){const y=d.render.frame;S.get(O)!==y&&(S.set(O,y),O.update())}function sn(O,y){const rt=O.colorSpace,ft=O.format,mt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||rt!==Ku&&rt!==Er&&(De.getTransfer(rt)===Ze?(ft!==Gi||mt!==gi)&&le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",rt)),y}function Pe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.getTextureUnits=G,this.setTextureUnits=Y,this.setTexture2D=tt,this.setTexture2DArray=Q,this.setTexture3D=at,this.setTextureCube=gt,this.rebindTextures=_e,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=nn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function pC(o,e){function i(r,l=Er){let u;const d=De.getTransfer(l);if(r===gi)return o.UNSIGNED_BYTE;if(r===Am)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Rm)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Bx)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Hx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===zx)return o.BYTE;if(r===Fx)return o.SHORT;if(r===Hl)return o.UNSIGNED_SHORT;if(r===bm)return o.INT;if(r===fa)return o.UNSIGNED_INT;if(r===la)return o.FLOAT;if(r===da)return o.HALF_FLOAT;if(r===Gx)return o.ALPHA;if(r===Vx)return o.RGB;if(r===Gi)return o.RGBA;if(r===Ga)return o.DEPTH_COMPONENT;if(r===ns)return o.DEPTH_STENCIL;if(r===Xx)return o.RED;if(r===Cm)return o.RED_INTEGER;if(r===as)return o.RG;if(r===wm)return o.RG_INTEGER;if(r===Dm)return o.RGBA_INTEGER;if(r===Gu||r===Vu||r===Xu||r===ku)if(d===Ze)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Gu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Gu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ku)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rp||r===Cp||r===wp||r===Dp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Rp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Np||r===Up||r===Lp||r===Op||r===Pp||r===Yu||r===Ip)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Np||r===Up)return d===Ze?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Lp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Op)return u.COMPRESSED_R11_EAC;if(r===Pp)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Yu)return u.COMPRESSED_RG11_EAC;if(r===Ip)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===zp||r===Fp||r===Bp||r===Hp||r===Gp||r===Vp||r===Xp||r===kp||r===Wp||r===qp||r===Yp||r===Zp||r===Kp||r===Qp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===zp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qp)return d===Ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Jp||r===jp||r===$p)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Jp)return d===Ze?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$p)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===tm||r===em||r===Zu||r===nm)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===tm)return u.COMPRESSED_RED_RGTC1_EXT;if(r===em)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zu)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nm)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const mC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gC=`
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

}`;class _C{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Jx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ha({vertexShader:mC,fragmentShader:gC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new mn(new pa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vC extends rs{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",p=1,m=null,S=null,g=null,v=null,E=null,R=null;const C=typeof XRWebGLBinding<"u",x=new _C,M={},L=i.getContextAttributes();let X=null,D=null;const w=[],U=[],z=new Oe;let T=null,N=null;const P=new Di;P.viewport=new ln;const I=new Di;I.viewport=new ln;const F=[P,I],W=new AT;let G=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let pt=w[et];return pt===void 0&&(pt=new qh,w[et]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(et){let pt=w[et];return pt===void 0&&(pt=new qh,w[et]=pt),pt.getGripSpace()},this.getHand=function(et){let pt=w[et];return pt===void 0&&(pt=new qh,w[et]=pt),pt.getHandSpace()};function V(et){const pt=U.indexOf(et.inputSource);if(pt===-1)return;const bt=w[pt];bt!==void 0&&(bt.update(et.inputSource,et.frame,m||d),bt.dispatchEvent({type:et.type,data:et.inputSource}))}function k(){l.removeEventListener("select",V),l.removeEventListener("selectstart",V),l.removeEventListener("selectend",V),l.removeEventListener("squeeze",V),l.removeEventListener("squeezestart",V),l.removeEventListener("squeezeend",V),l.removeEventListener("end",k),l.removeEventListener("inputsourceschange",tt);for(let et=0;et<w.length;et++){const pt=U[et];pt!==null&&(U[et]=null,w[et].disconnect(pt))}G=null,Y=null,x.reset();for(const et in M)delete M[et];if(e.setRenderTarget(X),E=null,v=null,g=null,l=null,D=null,Et.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),N!==null){const et=N.camera;et.fov=N.fov,et.zoom=N.zoom,et.updateProjectionMatrix(),N=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){u=et,r.isPresenting===!0&&le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){h=et,r.isPresenting===!0&&le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(et){m=et},this.getBaseLayer=function(){return v!==null?v:E},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(X=e.getRenderTarget(),l.addEventListener("select",V),l.addEventListener("selectstart",V),l.addEventListener("selectend",V),l.addEventListener("squeeze",V),l.addEventListener("squeezestart",V),l.addEventListener("squeezeend",V),l.addEventListener("end",k),l.addEventListener("inputsourceschange",tt),L.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ft=null,vt=null;L.depth&&(vt=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=L.stencil?ns:Ga,Ft=L.stencil?Gl:fa);const Rt={colorFormat:i.RGBA8,depthFormat:vt,scaleFactor:u};g=this.getBinding(),v=g.createProjectionLayer(Rt),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new Vi(v.textureWidth,v.textureHeight,{format:Gi,type:gi,depthTexture:new Xl(v.textureWidth,v.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const bt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),D=new Vi(E.framebufferWidth,E.framebufferHeight,{format:Gi,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),Et.setContext(l),Et.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function tt(et){for(let pt=0;pt<et.removed.length;pt++){const bt=et.removed[pt],Ft=U.indexOf(bt);Ft>=0&&(U[Ft]=null,w[Ft].disconnect(bt))}for(let pt=0;pt<et.added.length;pt++){const bt=et.added[pt];let Ft=U.indexOf(bt);if(Ft===-1){for(let Rt=0;Rt<w.length;Rt++)if(Rt>=U.length){U.push(bt),Ft=Rt;break}else if(U[Rt]===null){U[Rt]=bt,Ft=Rt;break}if(Ft===-1)break}const vt=w[Ft];vt&&vt.connect(bt)}}const Q=new K,at=new K;function gt(et,pt,bt){Q.setFromMatrixPosition(pt.matrixWorld),at.setFromMatrixPosition(bt.matrixWorld);const Ft=Q.distanceTo(at),vt=pt.projectionMatrix.elements,Rt=bt.projectionMatrix.elements,Xe=vt[14]/(vt[10]-1),me=vt[14]/(vt[10]+1),_e=(vt[9]+1)/vt[5],Me=(vt[9]-1)/vt[5],ne=(vt[8]-1)/vt[0],ae=(Rt[8]+1)/Rt[0],ke=Xe*ne,gn=Xe*ae,ze=Ft/(-ne+ae),nn=ze*-ne;if(pt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(nn),et.translateZ(ze),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),vt[10]===-1)et.projectionMatrix.copy(pt.projectionMatrix),et.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const j=Xe+ze,sn=me+ze,Pe=ke-nn,O=gn+(Ft-nn),y=_e*me/sn*j,rt=Me*me/sn*j;et.projectionMatrix.makePerspective(Pe,O,y,rt,j,sn),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function wt(et,pt){pt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(pt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let pt=et.near,bt=et.far;x.texture!==null&&(x.depthNear>0&&(pt=x.depthNear),x.depthFar>0&&(bt=x.depthFar)),W.near=I.near=P.near=pt,W.far=I.far=P.far=bt,(G!==W.near||Y!==W.far)&&(l.updateRenderState({depthNear:W.near,depthFar:W.far}),G=W.near,Y=W.far),W.layers.mask=et.layers.mask|6,P.layers.mask=W.layers.mask&-5,I.layers.mask=W.layers.mask&-3;const Ft=et.parent,vt=W.cameras;wt(W,Ft);for(let Rt=0;Rt<vt.length;Rt++)wt(vt[Rt],Ft);vt.length===2?gt(W,P,I):W.projectionMatrix.copy(P.projectionMatrix),N===null&&et.isPerspectiveCamera&&(N={camera:et,fov:et.fov,zoom:et.zoom}),Nt(et,W,Ft)};function Nt(et,pt,bt){bt===null?et.matrix.copy(pt.matrixWorld):(et.matrix.copy(bt.matrixWorld),et.matrix.invert(),et.matrix.multiply(pt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(pt.projectionMatrix),et.projectionMatrixInverse.copy(pt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=am*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(v===null&&E===null))return p},this.setFoveation=function(et){p=et,v!==null&&(v.fixedFoveation=et),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=et)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(W)},this.getCameraTexture=function(et){return M[et]};let H=null;function lt(et,pt){if(S=pt.getViewerPose(m||d),R=pt,S!==null){const bt=S.views;E!==null&&(e.setRenderTargetFramebuffer(D,E.framebuffer),e.setRenderTarget(D));let Ft=!1;bt.length!==W.cameras.length&&(W.cameras.length=0,Ft=!0);for(let me=0;me<bt.length;me++){const _e=bt[me];let Me=null;if(E!==null)Me=E.getViewport(_e);else{const ae=g.getViewSubImage(v,_e);Me=ae.viewport,me===0&&(e.setRenderTargetTextures(D,ae.colorTexture,ae.depthStencilTexture),e.setRenderTarget(D))}let ne=F[me];ne===void 0&&(ne=new Di,ne.layers.enable(me),ne.viewport=new ln,F[me]=ne),ne.matrix.fromArray(_e.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(_e.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Me.x,Me.y,Me.width,Me.height),me===0&&(W.matrix.copy(ne.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ft===!0&&W.cameras.push(ne)}const vt=l.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=r.getBinding();const me=g.getDepthInformation(bt[0]);me&&me.isValid&&me.texture&&x.init(me,l.renderState)}if(vt&&vt.includes("camera-access")&&C){e.state.unbindTexture(),g=r.getBinding();for(let me=0;me<bt.length;me++){const _e=bt[me].camera;if(_e){let Me=M[_e];Me||(Me=new Jx,M[_e]=Me);const ne=g.getCameraImage(_e);Me.sourceTexture=ne}}}}for(let bt=0;bt<w.length;bt++){const Ft=U[bt],vt=w[bt];Ft!==null&&vt!==void 0&&vt.update(Ft,pt,m||d)}H&&H(et,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),R=null}const Et=new tM;Et.setAnimationLoop(lt),this.setAnimationLoop=function(et){H=et},this.dispose=function(){}}}const SC=new Je,oM=new de;oM.set(-1,0,0,0,1,0,0,0,1);function xC(o,e){function i(x,M){x.matrixAutoUpdate===!0&&x.updateMatrix(),M.value.copy(x.matrix)}function r(x,M){M.color.getRGB(x.fogColor.value,jx(o)),M.isFog?(x.fogNear.value=M.near,x.fogFar.value=M.far):M.isFogExp2&&(x.fogDensity.value=M.density)}function l(x,M,L,X,D){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?u(x,M):M.isMeshLambertMaterial?(u(x,M),M.envMap&&(x.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(u(x,M),g(x,M)):M.isMeshPhongMaterial?(u(x,M),S(x,M),M.envMap&&(x.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(u(x,M),v(x,M),M.isMeshPhysicalMaterial&&E(x,M,D)):M.isMeshMatcapMaterial?(u(x,M),R(x,M)):M.isMeshDepthMaterial?u(x,M):M.isMeshDistanceMaterial?(u(x,M),C(x,M)):M.isMeshNormalMaterial?u(x,M):M.isLineBasicMaterial?(d(x,M),M.isLineDashedMaterial&&h(x,M)):M.isPointsMaterial?p(x,M,L,X):M.isSpriteMaterial?m(x,M):M.isShadowMaterial?(x.color.value.copy(M.color),x.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function u(x,M){x.opacity.value=M.opacity,M.color&&x.diffuse.value.copy(M.color),M.emissive&&x.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(x.map.value=M.map,i(M.map,x.mapTransform)),M.alphaMap&&(x.alphaMap.value=M.alphaMap,i(M.alphaMap,x.alphaMapTransform)),M.bumpMap&&(x.bumpMap.value=M.bumpMap,i(M.bumpMap,x.bumpMapTransform),x.bumpScale.value=M.bumpScale,M.side===ii&&(x.bumpScale.value*=-1)),M.normalMap&&(x.normalMap.value=M.normalMap,i(M.normalMap,x.normalMapTransform),x.normalScale.value.copy(M.normalScale),M.side===ii&&x.normalScale.value.negate()),M.displacementMap&&(x.displacementMap.value=M.displacementMap,i(M.displacementMap,x.displacementMapTransform),x.displacementScale.value=M.displacementScale,x.displacementBias.value=M.displacementBias),M.emissiveMap&&(x.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,x.emissiveMapTransform)),M.specularMap&&(x.specularMap.value=M.specularMap,i(M.specularMap,x.specularMapTransform)),M.alphaTest>0&&(x.alphaTest.value=M.alphaTest);const L=e.get(M),X=L.envMap,D=L.envMapRotation;X&&(x.envMap.value=X,x.envMapRotation.value.setFromMatrix4(SC.makeRotationFromEuler(D)).transpose(),X.isCubeTexture&&X.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(oM),x.reflectivity.value=M.reflectivity,x.ior.value=M.ior,x.refractionRatio.value=M.refractionRatio),M.lightMap&&(x.lightMap.value=M.lightMap,x.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,x.lightMapTransform)),M.aoMap&&(x.aoMap.value=M.aoMap,x.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,x.aoMapTransform))}function d(x,M){x.diffuse.value.copy(M.color),x.opacity.value=M.opacity,M.map&&(x.map.value=M.map,i(M.map,x.mapTransform))}function h(x,M){x.dashSize.value=M.dashSize,x.totalSize.value=M.dashSize+M.gapSize,x.scale.value=M.scale}function p(x,M,L,X){x.diffuse.value.copy(M.color),x.opacity.value=M.opacity,x.size.value=M.size*L,x.scale.value=X*.5,M.map&&(x.map.value=M.map,i(M.map,x.uvTransform)),M.alphaMap&&(x.alphaMap.value=M.alphaMap,i(M.alphaMap,x.alphaMapTransform)),M.alphaTest>0&&(x.alphaTest.value=M.alphaTest)}function m(x,M){x.diffuse.value.copy(M.color),x.opacity.value=M.opacity,x.rotation.value=M.rotation,M.map&&(x.map.value=M.map,i(M.map,x.mapTransform)),M.alphaMap&&(x.alphaMap.value=M.alphaMap,i(M.alphaMap,x.alphaMapTransform)),M.alphaTest>0&&(x.alphaTest.value=M.alphaTest)}function S(x,M){x.specular.value.copy(M.specular),x.shininess.value=Math.max(M.shininess,1e-4)}function g(x,M){M.gradientMap&&(x.gradientMap.value=M.gradientMap)}function v(x,M){x.metalness.value=M.metalness,M.metalnessMap&&(x.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,x.metalnessMapTransform)),x.roughness.value=M.roughness,M.roughnessMap&&(x.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,x.roughnessMapTransform)),M.envMap&&(x.envMapIntensity.value=M.envMapIntensity)}function E(x,M,L){x.ior.value=M.ior,M.sheen>0&&(x.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),x.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(x.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,x.sheenColorMapTransform)),M.sheenRoughnessMap&&(x.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,x.sheenRoughnessMapTransform))),M.clearcoat>0&&(x.clearcoat.value=M.clearcoat,x.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(x.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,x.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(x.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===ii&&x.clearcoatNormalScale.value.negate())),M.dispersion>0&&(x.dispersion.value=M.dispersion),M.retroreflectivity>0&&(x.retroreflectivity.value=M.retroreflectivity),M.iridescence>0&&(x.iridescence.value=M.iridescence,x.iridescenceIOR.value=M.iridescenceIOR,x.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(x.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,x.iridescenceMapTransform)),M.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),M.transmission>0&&(x.transmission.value=M.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),M.transmissionMap&&(x.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,x.transmissionMapTransform)),x.thickness.value=M.thickness,M.thicknessMap&&(x.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=M.attenuationDistance,x.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(x.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(x.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=M.specularIntensity,x.specularColor.value.copy(M.specularColor),M.specularColorMap&&(x.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,x.specularColorMapTransform)),M.specularIntensityMap&&(x.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,x.specularIntensityMapTransform))}function R(x,M){M.matcap&&(x.matcap.value=M.matcap)}function C(x,M){const L=e.get(M).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function MC(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,w){const U=w.program;r.uniformBlockBinding(D,U)}function m(D,w){let U=l[D.id];U===void 0&&(x(D),U=S(D),l[D.id]=U,D.addEventListener("dispose",L));const z=w.program;r.updateUBOMapping(D,z);const T=e.render.frame;u[D.id]!==T&&(v(D),u[D.id]=T)}function S(D){const w=g();D.__bindingPointIndex=w;const U=o.createBuffer(),z=D.__size,T=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,z,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,w,U),U}function g(){for(let D=0;D<h;D++)if(d.indexOf(D)===-1)return d.push(D),D;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const w=l[D.id],U=D.uniforms,z=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,w);for(let T=0,N=U.length;T<N;T++){const P=U[T];if(Array.isArray(P))for(let I=0,F=P.length;I<F;I++)E(P[I],T,I,z);else E(P,T,0,z)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(D,w,U,z){if(C(D,w,U,z)===!0){const T=D.__offset,N=D.value;if(Array.isArray(N)){let P=0;for(let I=0;I<N.length;I++){const F=N[I],W=M(F);R(F,D.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(N,D.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,T,D.__data)}}function R(D,w,U){typeof D=="number"||typeof D=="boolean"?w[0]=D:D.isMatrix3?(w[0]=D.elements[0],w[1]=D.elements[1],w[2]=D.elements[2],w[3]=0,w[4]=D.elements[3],w[5]=D.elements[4],w[6]=D.elements[5],w[7]=0,w[8]=D.elements[6],w[9]=D.elements[7],w[10]=D.elements[8],w[11]=0):ArrayBuffer.isView(D)?w.set(new D.constructor(D.buffer,D.byteOffset,w.length)):D.toArray(w,U)}function C(D,w,U,z){const T=D.value,N=w+"_"+U;if(z[N]===void 0)return typeof T=="number"||typeof T=="boolean"?z[N]=T:ArrayBuffer.isView(T)?z[N]=T.slice():z[N]=T.clone(),!0;{const P=z[N];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return z[N]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(P.equals(T)===!1)return P.copy(T),!0}}return!1}function x(D){const w=D.uniforms;let U=0;const z=16;for(let N=0,P=w.length;N<P;N++){const I=Array.isArray(w[N])?w[N]:[w[N]];for(let F=0,W=I.length;F<W;F++){const G=I[F],Y=Array.isArray(G.value)?G.value:[G.value];for(let V=0,k=Y.length;V<k;V++){const tt=Y[V],Q=M(tt),at=U%z,gt=at%Q.boundary,wt=at+gt;U+=gt,wt!==0&&z-wt<Q.storage&&(U+=z-wt),G.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=U,U+=Q.storage}}}const T=U%z;return T>0&&(U+=z-T),D.__size=U,D.__cache={},this}function M(D){const w={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(w.boundary=4,w.storage=4):D.isVector2?(w.boundary=8,w.storage=8):D.isVector3||D.isColor?(w.boundary=16,w.storage=12):D.isVector4?(w.boundary=16,w.storage=16):D.isMatrix3?(w.boundary=48,w.storage=48):D.isMatrix4?(w.boundary=64,w.storage=64):D.isTexture?le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(w.boundary=16,w.storage=D.byteLength):le("WebGLRenderer: Unsupported uniform value type.",D),w}function L(D){const w=D.target;w.removeEventListener("dispose",L);const U=d.indexOf(w.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(l[w.id]),delete l[w.id],delete u[w.id]}function X(){for(const D in l)o.deleteBuffer(l[D]);d=[],l={},u={}}return{bind:p,update:m,dispose:X}}const yC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ra=null;function EC(){return ra===null&&(ra=new hT(yC,16,16,as,da),ra.name="DFG_LUT",ra.minFilter=Vn,ra.magFilter=Vn,ra.wrapS=za,ra.wrapT=za,ra.generateMipmaps=!1,ra.needsUpdate=!0),ra}class TC{constructor(e={}){const{canvas:i=V1(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:E=gi}=e;this.isWebGLRenderer=!0;let R;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=r.getContextAttributes().alpha}else R=d;const C=E,x=new Set([Dm,wm,Cm]),M=new Set([gi,fa,Hl,Gl,Am,Rm]),L=new Uint32Array(4),X=new Int32Array(4),D=new K;let w=null,U=null;const z=[],T=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ua,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,F=null,W=null,G=null,Y=null;this._outputColorSpace=Dn;let V=0,k=0,tt=null,Q=-1,at=null;const gt=new ln,wt=new ln;let Nt=null;const H=new Le(0);let lt=0,Et=i.width,et=i.height,pt=1,bt=null,Ft=null;const vt=new ln(0,0,Et,et),Rt=new ln(0,0,Et,et);let Xe=!1;const me=new Pm;let _e=!1,Me=!1;const ne=new Je,ae=new K,ke=new ln,gn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function nn(){return tt===null?pt:1}let j=r;function sn(b,q){return i.getContext(b,q)}let Pe,O,y,rt,ft,mt,At,Ut,_t,yt,Dt,jt,zt,It,kt,ie,ce,J,Ct,Mt,Lt,Xt,Tt;try{const b={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:S,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Tm}`),i.addEventListener("webglcontextlost",Ce,!1),i.addEventListener("webglcontextrestored",ue,!1),i.addEventListener("webglcontextcreationerror",ai,!1),j===null){const q="webgl2";if(j=sn(q,b),j===null)throw sn(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(b){throw i.removeEventListener("webglcontextlost",Ce,!1),i.removeEventListener("webglcontextrestored",ue,!1),i.removeEventListener("webglcontextcreationerror",ai,!1),Fe("WebGLRenderer: "+b.message),b}function Jt(){Pe=new ER(j),Pe.init(),Lt=new pC(j,Pe),O=new hR(j,Pe,e,Lt),y=new dC(j,Pe),O.reversedDepthBuffer&&v&&y.buffers.depth.setReversed(!0),W=j.createFramebuffer(),G=j.createFramebuffer(),Y=j.createFramebuffer(),rt=new AR(j),ft=new j3,mt=new hC(j,Pe,y,ft,O,Lt,rt),At=new yR(P),Ut=new CT(j),Xt=new fR(j,Ut),_t=new TR(j,Ut,rt,Xt),yt=new CR(j,_t,Ut,Xt,rt),J=new RR(j,O,mt),kt=new pR(ft),Dt=new J3(P,At,Pe,O,Xt,kt),jt=new xC(P,ft),zt=new tC,It=new sC(Pe),ce=new uR(P,At,y,yt,R,p),ie=new fC(P,yt,O),Tt=new MC(j,rt,O,y),Ct=new dR(j,Pe,rt),Mt=new bR(j,Pe,rt),rt.programs=Dt.programs,P.capabilities=O,P.extensions=Pe,P.properties=ft,P.renderLists=zt,P.shadowMap=ie,P.state=y,P.info=rt}C!==gi&&(N=new DR(C,i.width,i.height,h,l,u));const Vt=new vC(P,j);this.xr=Vt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const b=Pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(b){b!==void 0&&(pt=b,this.setSize(Et,et,!1))},this.getSize=function(b){return b.set(Et,et)},this.setSize=function(b,q,ht=!0){if(Vt.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}Et=b,et=q,i.width=Math.floor(b*pt),i.height=Math.floor(q*pt),ht===!0&&(i.style.width=b+"px",i.style.height=q+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(Et*pt,et*pt).floor()},this.setDrawingBufferSize=function(b,q,ht){Et=b,et=q,pt=ht,i.width=Math.floor(b*ht),i.height=Math.floor(q*ht),this.setViewport(0,0,b,q)},this.setEffects=function(b){if(C===gi){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let q=0;q<b.length;q++)if(b[q].isOutputPass===!0){le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(gt)},this.getViewport=function(b){return b.copy(vt)},this.setViewport=function(b,q,ht,ot){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,q,ht,ot),y.viewport(gt.copy(vt).multiplyScalar(pt).round())},this.getScissor=function(b){return b.copy(Rt)},this.setScissor=function(b,q,ht,ot){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,q,ht,ot),y.scissor(wt.copy(Rt).multiplyScalar(pt).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(b){y.setScissorTest(Xe=b)},this.setOpaqueSort=function(b){bt=b},this.setTransparentSort=function(b){Ft=b},this.getClearColor=function(b){return b.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(b=!0,q=!0,ht=!0){let ot=0;if(b){let ct=!1;if(tt!==null){const Bt=tt.texture.format;ct=x.has(Bt)}if(ct){const Bt=tt.texture.type,Wt=M.has(Bt),Ot=ce.getClearColor(),Zt=ce.getClearAlpha(),Kt=Ot.r,se=Ot.g,fe=Ot.b;Wt?(L[0]=Kt,L[1]=se,L[2]=fe,L[3]=Zt,j.clearBufferuiv(j.COLOR,0,L)):(X[0]=Kt,X[1]=se,X[2]=fe,X[3]=Zt,j.clearBufferiv(j.COLOR,0,X))}else ot|=j.COLOR_BUFFER_BIT}q&&(ot|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ht&&(ot|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&j.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){i.removeEventListener("webglcontextlost",Ce,!1),i.removeEventListener("webglcontextrestored",ue,!1),i.removeEventListener("webglcontextcreationerror",ai,!1),ce.dispose(),zt.dispose(),It.dispose(),ft.dispose(),At.dispose(),yt.dispose(),Xt.dispose(),Tt.dispose(),Dt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Rr),Vt.removeEventListener("sessionend",Xa),ki.stop()};function Ce(b){b.preventDefault(),uS("WebGLRenderer: Context Lost."),I=!0}function ue(){uS("WebGLRenderer: Context Restored."),I=!1;const b=rt.autoReset,q=ie.enabled,ht=ie.autoUpdate,ot=ie.needsUpdate,ct=ie.type;Jt(),rt.autoReset=b,ie.enabled=q,ie.autoUpdate=ht,ie.needsUpdate=ot,ie.type=ct}function ai(b){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function vi(b){const q=b.target;q.removeEventListener("dispose",vi),af(q)}function af(b){os(b),ft.remove(b)}function os(b){const q=ft.get(b).programs;q!==void 0&&(q.forEach(function(ht){Dt.releaseProgram(ht)}),b.isShaderMaterial&&Dt.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,ht,ot,ct,Bt){q===null&&(q=gn);const Wt=ct.isMesh&&ct.matrixWorld.determinantAffine()<0,Ot=Io(b,q,ht,ot,ct);y.setMaterial(ot,Wt);let Zt=ht.index,Kt=1;if(ot.wireframe===!0){if(Zt=_t.getWireframeAttribute(ht),Zt===void 0)return;Kt=2}const se=ht.drawRange,fe=ht.attributes.position;let qt=se.start*Kt,ye=(se.start+se.count)*Kt;Bt!==null&&(qt=Math.max(qt,Bt.start*Kt),ye=Math.min(ye,(Bt.start+Bt.count)*Kt)),Zt!==null?(qt=Math.max(qt,0),ye=Math.min(ye,Zt.count)):fe!=null&&(qt=Math.max(qt,0),ye=Math.min(ye,fe.count));const ve=ye-qt;if(ve<0||ve===1/0)return;Xt.setup(ct,ot,Ot,ht,Zt);let Ke,Ge=Ct;if(Zt!==null&&(Ke=Ut.get(Zt),Ge=Mt,Ge.setIndex(Ke)),ct.isMesh)ot.wireframe===!0?(y.setLineWidth(ot.wireframeLinewidth*nn()),Ge.setMode(j.LINES)):Ge.setMode(j.TRIANGLES);else if(ct.isLine){let yn=ot.linewidth;yn===void 0&&(yn=1),y.setLineWidth(yn*nn()),ct.isLineSegments?Ge.setMode(j.LINES):ct.isLineLoop?Ge.setMode(j.LINE_LOOP):Ge.setMode(j.LINE_STRIP)}else ct.isPoints?Ge.setMode(j.POINTS):ct.isSprite&&Ge.setMode(j.TRIANGLES);if(ct.isBatchedMesh)if(Pe.get("WEBGL_multi_draw"))Ge.renderMultiDraw(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount);else{const yn=ct._multiDrawStarts,Ht=ct._multiDrawCounts,cn=ct._multiDrawCount,we=Zt?Ut.get(Zt).bytesPerElement:1,kn=ft.get(ot).currentProgram.getUniforms();for(let ri=0;ri<cn;ri++)kn.setValue(j,"_gl_DrawID",ri),Ge.render(yn[ri]/we,Ht[ri])}else if(ct.isInstancedMesh)Ge.renderInstances(qt,ve,ct.count);else if(ht.isInstancedBufferGeometry){const yn=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,Ht=Math.min(ht.instanceCount,yn);Ge.renderInstances(qt,ve,Ht)}else Ge.render(qt,ve)};function Ar(b,q,ht,ot){F!==null&&b.isNodeMaterial&&F.setObject(ot,b),_e===!0&&kt.setState(b,ht,!1),b.transparent===!0&&b.side===Ia&&b.forceSinglePass===!1?(b.side=ii,b.needsUpdate=!0,Cr(b,q,ot),b.side=_i,b.needsUpdate=!0,Cr(b,q,ot),b.side=Ia):Cr(b,q,ot)}this.compile=function(b,q,ht=null){ht===null&&(ht=b),F!==null&&F.renderStart(b,q,ht),U=It.get(ht),U.init(q),T.push(U),ht.traverseVisible(function(ct){ct.isLight&&ct.layers.test(q.layers)&&(U.pushLight(ct),ct.castShadow&&U.pushShadow(ct))}),b!==ht&&b.traverseVisible(function(ct){ct.isLight&&ct.layers.test(q.layers)&&(U.pushLight(ct),ct.castShadow&&U.pushShadow(ct))}),U.setupLights(),F!==null&&F.updateLights(U.state.lightsArray),Me=this.localClippingEnabled,_e=kt.init(this.clippingPlanes,Me),_e===!0&&kt.setGlobalState(this.clippingPlanes,q),F!==null&&ie.render(U.state.shadowsArray,ht,q);const ot=new Set;return b.traverse(function(ct){if(!(ct.isMesh||ct.isPoints||ct.isLine||ct.isSprite))return;const Bt=ct.material;if(Bt)if(Array.isArray(Bt))for(let Wt=0;Wt<Bt.length;Wt++){const Ot=Bt[Wt];Ar(Ot,ht,q,ct),ot.add(Ot)}else Ar(Bt,ht,q,ct),ot.add(Bt)}),U=T.pop(),F!==null&&F.renderEnd(),ot},this.compileAsync=function(b,q,ht=null){const ot=this.compile(b,q,ht);return new Promise(ct=>{function Bt(){if(ot.forEach(function(Wt){const Zt=ft.get(Wt).currentProgram;(Zt===void 0||Zt.isReady())&&ot.delete(Wt)}),ot.size===0){ct(b);return}setTimeout(Bt,10)}Pe.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Va=null;function ma(b){Va&&Va(b)}function Rr(){ki.stop()}function Xa(){ki.start()}const ki=new tM;ki.setAnimationLoop(ma),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(b){Va=b,Vt.setAnimationLoop(b),b===null?ki.stop():ki.start()},Vt.addEventListener("sessionstart",Rr),Vt.addEventListener("sessionend",Xa),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(b,q);const ht=Vt.enabled===!0&&Vt.isPresenting===!0,ot=N!==null&&(tt===null||ht)&&N.begin(P,tt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(q),q=Vt.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,q,tt),U=It.get(b,T.length),U.init(q),U.state.textureUnits=mt.getTextureUnits(),T.push(U),ne.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),me.setFromProjectionMatrix(ne,ca,q.reversedDepth),Me=this.localClippingEnabled,_e=kt.init(this.clippingPlanes,Me),w=zt.get(b,z.length),w.init(),z.push(w),Vt.enabled===!0&&Vt.isPresenting===!0){const Wt=P.xr.getDepthSensingMesh();Wt!==null&&No(Wt,q,-1/0,P.sortObjects)}No(b,q,0,P.sortObjects),w.finish(),F!==null&&F.updateLights(U.state.lightsArray),P.sortObjects===!0&&w.sort(bt,Ft),ze=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,ze&&ce.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_e===!0&&kt.beginShadows();const ct=U.state.shadowsArray;if(ie.render(ct,b,q),_e===!0&&kt.endShadows(),(ot&&N.hasRenderPass())===!1){const Wt=w.opaque,Ot=w.transmissive;if(U.setupLights(),q.isArrayCamera){const Zt=q.cameras;if(Ot.length>0)for(let Kt=0,se=Zt.length;Kt<se;Kt++){const fe=Zt[Kt];ls(Wt,Ot,b,fe)}ze&&ce.render(b);for(let Kt=0,se=Zt.length;Kt<se;Kt++){const fe=Zt[Kt];Uo(w,b,fe,fe.viewport)}}else Ot.length>0&&ls(Wt,Ot,b,q),ze&&ce.render(b),Uo(w,b,q)}tt!==null&&k===0&&(mt.updateMultisampleRenderTarget(tt),mt.updateRenderTargetMipmap(tt)),ot&&N.end(P),b.isScene===!0&&b.onAfterRender(P,b,q),Xt.resetDefaultState(),Q=-1,at=null,T.pop(),T.length>0?(U=T[T.length-1],mt.setTextureUnits(U.state.textureUnits),_e===!0&&kt.setGlobalState(P.clippingPlanes,U.state.camera)):U=null,z.pop(),z.length>0?w=z[z.length-1]:w=null,F!==null&&F.renderEnd()};function No(b,q,ht,ot){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)ht=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLightProbeGrid)U.pushLightProbeGrid(b);else if(b.isLight)U.pushLight(b),b.castShadow&&U.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(me)){ot&&ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ne);const Wt=yt.update(b),Ot=b.material;Ot.visible&&w.push(b,Wt,Ot,ht,ke.z,null,q)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(me))){const Wt=yt.update(b),Ot=b.material;if(ot&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ke.copy(b.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),ke.copy(Wt.boundingSphere.center)),ke.applyMatrix4(b.matrixWorld).applyMatrix4(ne)),Array.isArray(Ot)){const Zt=Wt.groups;for(let Kt=0,se=Zt.length;Kt<se;Kt++){const fe=Zt[Kt],qt=Ot[fe.materialIndex];qt&&qt.visible&&w.push(b,Wt,qt,ht,ke.z,fe,q)}}else Ot.visible&&w.push(b,Wt,Ot,ht,ke.z,null,q)}}const Bt=b.children;for(let Wt=0,Ot=Bt.length;Wt<Ot;Wt++)No(Bt[Wt],q,ht,ot)}function Uo(b,q,ht,ot){const{opaque:ct,transmissive:Bt,transparent:Wt}=b;U.setupLightsView(ht),_e===!0&&kt.setGlobalState(P.clippingPlanes,ht),ot&&y.viewport(gt.copy(ot)),ct.length>0&&Wi(ct,q,ht),Bt.length>0&&Wi(Bt,q,ht),Wt.length>0&&Wi(Wt,q,ht),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ls(b,q,ht,ot){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ot.id]===void 0){const qt=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ot.id]=new Vi(1,1,{generateMipmaps:!0,type:qt?da:gi,minFilter:es,samples:Math.max(4,O.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:De.workingColorSpace})}const Bt=U.state.transmissionRenderTarget[ot.id],Wt=ot.viewport||gt;Bt.setSize(Wt.z*P.transmissionResolutionScale,Wt.w*P.transmissionResolutionScale);const Ot=P.getRenderTarget(),Zt=P.getActiveCubeFace(),Kt=P.getActiveMipmapLevel();P.setRenderTarget(Bt),P.getClearColor(H),lt=P.getClearAlpha(),lt<1&&P.setClearColor(16777215,.5),P.clear(),ze&&ce.render(ht);const se=P.toneMapping;P.toneMapping=ua;const fe=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),U.setupLightsView(ot),_e===!0&&kt.setGlobalState(P.clippingPlanes,ot),Wi(b,ht,ot),mt.updateMultisampleRenderTarget(Bt),mt.updateRenderTargetMipmap(Bt),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let ye=0,ve=q.length;ye<ve;ye++){const Ke=q[ye],{object:Ge,geometry:yn,material:Ht,group:cn}=Ke;if(Ht.side===Ia&&Ge.layers.test(ot.layers)){const we=Ht.side;Ht.side=ii,Ht.needsUpdate=!0,Zl(Ge,ht,ot,yn,Ht,cn),Ht.side=we,Ht.needsUpdate=!0,qt=!0}}qt===!0&&(mt.updateMultisampleRenderTarget(Bt),mt.updateRenderTargetMipmap(Bt))}P.setRenderTarget(Ot,Zt,Kt),P.setClearColor(H,lt),fe!==void 0&&(ot.viewport=fe),P.toneMapping=se}function Wi(b,q,ht){const ot=q.isScene===!0?q.overrideMaterial:null;for(let ct=0,Bt=b.length;ct<Bt;ct++){const Wt=b[ct],{object:Ot,geometry:Zt,group:Kt}=Wt;let se=Wt.material;se.allowOverride===!0&&ot!==null&&(se=ot),Ot.layers.test(ht.layers)&&Zl(Ot,q,ht,Zt,se,Kt)}}function Zl(b,q,ht,ot,ct,Bt){F!==null&&ct.isNodeMaterial&&F.setObject(b,ct),b.onBeforeRender(P,q,ht,ot,ct,Bt),b.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ct.onBeforeRender(P,q,ht,ot,b,Bt),ct.transparent===!0&&ct.side===Ia&&ct.forceSinglePass===!1?(ct.side=ii,ct.needsUpdate=!0,P.renderBufferDirect(ht,q,ot,ct,b,Bt),ct.side=_i,ct.needsUpdate=!0,P.renderBufferDirect(ht,q,ot,ct,b,Bt),ct.side=Ia):P.renderBufferDirect(ht,q,ot,ct,b,Bt),b.onAfterRender(P,q,ht,ot,ct,Bt)}function Cr(b,q,ht){q.isScene!==!0&&(q=gn);const ot=ft.get(b),ct=U.state.lights,Bt=U.state.shadowsArray,Wt=ct.state.version,Ot=Dt.getParameters(b,ct.state,Bt,q,ht,U.state.lightProbeGridArray),Zt=Dt.getProgramCacheKey(Ot);let Kt=ot.programs;ot.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?q.environment:null,ot.fog=q.fog;const se=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;ot.envMap=At.get(b.envMap||ot.environment,se),ot.envMapRotation=ot.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,Kt===void 0&&(b.addEventListener("dispose",vi),Kt=new Map,ot.programs=Kt);let fe=Kt.get(Zt);if(fe!==void 0){if(ot.currentProgram===fe&&ot.lightsStateVersion===Wt)return Oo(b,Ot),fe}else Ot.uniforms=Dt.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,ht,Ot),b.onBeforeCompile(Ot,P),fe=Dt.acquireProgram(Ot,Zt),Kt.set(Zt,fe),ot.uniforms=Ot.uniforms;const qt=ot.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qt.clippingPlanes=kt.uniform),Oo(b,Ot),ot.needsLights=Ql(b),ot.lightsStateVersion=Wt,ot.needsLights&&(qt.ambientLightColor.value=ct.state.ambient,qt.lightProbe.value=ct.state.probe,qt.sunLights.value=ct.state.sun,qt.sunLightShadows.value=ct.state.sunShadow,qt.directionalLights.value=ct.state.directional,qt.directionalLightShadows.value=ct.state.directionalShadow,qt.spotLights.value=ct.state.spot,qt.spotLightShadows.value=ct.state.spotShadow,qt.rectAreaLights.value=ct.state.rectArea,qt.ltc_1.value=ct.state.rectAreaLTC1,qt.ltc_2.value=ct.state.rectAreaLTC2,qt.pointLights.value=ct.state.point,qt.pointLightShadows.value=ct.state.pointShadow,qt.hemisphereLights.value=ct.state.hemi,qt.sunShadowMatrix.value=ct.state.sunShadowMatrix,qt.sunShadowCascade.value=ct.state.sunShadowCascade,qt.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,qt.spotLightMatrix.value=ct.state.spotLightMatrix,qt.spotLightMap.value=ct.state.spotLightMap,qt.pointShadowMatrix.value=ct.state.pointShadowMatrix),ot.lightProbeGrid=U.state.lightProbeGridArray.length>0,ot.currentProgram=fe,ot.uniformsList=null,fe}function Lo(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=Wu.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function Oo(b,q){const ht=ft.get(b);ht.outputColorSpace=q.outputColorSpace,ht.batching=q.batching,ht.batchingColor=q.batchingColor,ht.instancing=q.instancing,ht.instancingColor=q.instancingColor,ht.instancingMorph=q.instancingMorph,ht.skinning=q.skinning,ht.morphTargets=q.morphTargets,ht.morphNormals=q.morphNormals,ht.morphColors=q.morphColors,ht.morphTargetsCount=q.morphTargetsCount,ht.numClippingPlanes=q.numClippingPlanes,ht.numIntersection=q.numClipIntersection,ht.vertexAlphas=q.vertexAlphas,ht.vertexTangents=q.vertexTangents,ht.toneMapping=q.toneMapping}function Po(b,q){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;D.setFromMatrixPosition(q.matrixWorld);for(let ht=0,ot=b.length;ht<ot;ht++){const ct=b[ht];if(ct.texture!==null&&ct.boundingBox.containsPoint(D))return ct}return null}function Io(b,q,ht,ot,ct){q.isScene!==!0&&(q=gn),mt.resetTextureUnits();const Bt=q.fog,Wt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?q.environment:null,Ot=tt===null?P.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:De.workingColorSpace,Zt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,Kt=At.get(ot.envMap||Wt,Zt),se=ot.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,fe=!!ht.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),qt=!!ht.morphAttributes.position,ye=!!ht.morphAttributes.normal,ve=!!ht.morphAttributes.color;let Ke=ua;ot.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ke=P.toneMapping);const Ge=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,yn=Ge!==void 0?Ge.length:0,Ht=ft.get(ot),cn=U.state.lights;if(_e===!0&&(Me===!0||b!==at)){const be=b===at&&ot.id===Q;kt.setState(ot,b,be)}let we=!1;ot.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==cn.state.version||Ht.outputColorSpace!==Ot||ct.isBatchedMesh&&Ht.batching===!1||!ct.isBatchedMesh&&Ht.batching===!0||ct.isBatchedMesh&&Ht.batchingColor===!0&&ct._colorsTexture===null||ct.isBatchedMesh&&Ht.batchingColor===!1&&ct._colorsTexture!==null||ct.isInstancedMesh&&Ht.instancing===!1||!ct.isInstancedMesh&&Ht.instancing===!0||ct.isSkinnedMesh&&Ht.skinning===!1||!ct.isSkinnedMesh&&Ht.skinning===!0||ct.isInstancedMesh&&Ht.instancingColor===!0&&ct.instanceColor===null||ct.isInstancedMesh&&Ht.instancingColor===!1&&ct.instanceColor!==null||ct.isInstancedMesh&&Ht.instancingMorph===!0&&ct.morphTexture===null||ct.isInstancedMesh&&Ht.instancingMorph===!1&&ct.morphTexture!==null||Ht.envMap!==Kt||ot.fog===!0&&Ht.fog!==Bt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==kt.numPlanes||Ht.numIntersection!==kt.numIntersection)||Ht.vertexAlphas!==se||Ht.vertexTangents!==fe||Ht.morphTargets!==qt||Ht.morphNormals!==ye||Ht.morphColors!==ve||Ht.toneMapping!==Ke||Ht.morphTargetsCount!==yn||!!Ht.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,Ht.__version=ot.version);let kn=Ht.currentProgram;we===!0&&(kn=Cr(ot,q,ct),F&&ot.isNodeMaterial&&F.onUpdateProgram(ot,kn,Ht));let ri=!1,qi=!1,Se=!1;const Be=kn.getUniforms(),$e=Ht.uniforms;if(y.useProgram(kn.program)&&(ri=!0,qi=!0,Se=!0),ot.id!==Q&&(Q=ot.id,qi=!0),Ht.needsLights){const be=Po(U.state.lightProbeGridArray,ct);Ht.lightProbeGrid!==be&&(Ht.lightProbeGrid=be,qi=!0)}if(ri||at!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Be.setValue(j,"projectionMatrix",b.projectionMatrix),Be.setValue(j,"viewMatrix",b.matrixWorldInverse);const un=Be.map.cameraPosition;un!==void 0&&un.setValue(j,ae.setFromMatrixPosition(b.matrixWorld)),O.logarithmicDepthBuffer&&Be.setValue(j,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Be.setValue(j,"isOrthographic",b.isOrthographicCamera===!0),at!==b&&(at=b,qi=!0,Se=!0)}if(Ht.needsLights&&(cn.state.sunShadowMap.length>0&&Be.setValue(j,"sunShadowMap",cn.state.sunShadowMap,mt),cn.state.directionalShadowMap.length>0&&Be.setValue(j,"directionalShadowMap",cn.state.directionalShadowMap,mt),cn.state.spotShadowMap.length>0&&Be.setValue(j,"spotShadowMap",cn.state.spotShadowMap,mt),cn.state.pointShadowMap.length>0&&Be.setValue(j,"pointShadowMap",cn.state.pointShadowMap,mt)),ct.isSkinnedMesh){Be.setOptional(j,ct,"bindMatrix"),Be.setOptional(j,ct,"bindMatrixInverse");const be=ct.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),Be.setValue(j,"boneTexture",be.boneTexture,mt))}ct.isBatchedMesh&&(Be.setOptional(j,ct,"batchingTexture"),Be.setValue(j,"batchingTexture",ct._matricesTexture,mt),Be.setOptional(j,ct,"batchingIdTexture"),Be.setValue(j,"batchingIdTexture",ct._indirectTexture,mt),Be.setOptional(j,ct,"batchingColorTexture"),ct._colorsTexture!==null&&Be.setValue(j,"batchingColorTexture",ct._colorsTexture,mt));const si=ht.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&J.update(ct,ht,kn),(qi||Ht.receiveShadow!==ct.receiveShadow)&&(Ht.receiveShadow=ct.receiveShadow,Be.setValue(j,"receiveShadow",ct.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&q.environment!==null&&($e.envMapIntensity.value=q.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=EC()),qi){if(Be.setValue(j,"toneMappingExposure",P.toneMappingExposure),Ht.needsLights&&Kl($e,Se),Bt&&ot.fog===!0&&jt.refreshFogUniforms($e,Bt),jt.refreshMaterialUniforms($e,ot,pt,et,U.state.transmissionRenderTarget[b.id]),Ht.needsLights&&Ht.lightProbeGrid){const be=Ht.lightProbeGrid;$e.probesSH.value=be.texture,$e.probesMin.value.copy(be.boundingBox.min),$e.probesMax.value.copy(be.boundingBox.max),$e.probesResolution.value.copy(be.resolution)}Wu.upload(j,Lo(Ht),$e,mt)}if(ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Wu.upload(j,Lo(Ht),$e,mt),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Be.setValue(j,"center",ct.center),Be.setValue(j,"modelViewMatrix",ct.modelViewMatrix),Be.setValue(j,"normalMatrix",ct.normalMatrix),Be.setValue(j,"modelMatrix",ct.matrixWorld),ot.uniformsGroups!==void 0){const be=ot.uniformsGroups;for(let un=0,ga=be.length;un<ga;un++){const Jl=be[un];Tt.update(Jl,kn),Tt.bind(Jl,kn)}}return kn}function Kl(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.sunLights.needsUpdate=q,b.sunLightShadows.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function Ql(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(b,q,ht){const ot=ft.get(b);ot.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),ft.get(b.texture).__webglTexture=q,ft.get(b.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ht,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,q){const ht=ft.get(b);ht.__webglFramebuffer=q,ht.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(b,q=0,ht=0){tt=b,V=q,k=ht;let ot=null,ct=!1,Bt=!1;if(b){const Ot=ft.get(b);if(Ot.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(j.FRAMEBUFFER,Ot.__webglFramebuffer),gt.copy(b.viewport),wt.copy(b.scissor),Nt=b.scissorTest,y.viewport(gt),y.scissor(wt),y.setScissorTest(Nt),Q=-1;return}else if(Ot.__webglFramebuffer===void 0)mt.setupRenderTarget(b);else if(Ot.__hasExternalTextures)mt.rebindTextures(b,ft.get(b.texture).__webglTexture,ft.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const se=b.depthTexture;if(Ot.__boundDepthTexture!==se){if(se!==null&&ft.has(se)&&(b.width!==se.image.width||b.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");mt.setupDepthRenderbuffer(b)}}const Zt=b.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Bt=!0);const Kt=ft.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Kt[q])?ot=Kt[q][ht]:ot=Kt[q],ct=!0):b.samples>0&&mt.useMultisampledRTT(b)===!1?ot=ft.get(b).__webglMultisampledFramebuffer:Array.isArray(Kt)?ot=Kt[ht]:ot=Kt,gt.copy(b.viewport),wt.copy(b.scissor),Nt=b.scissorTest}else gt.copy(vt).multiplyScalar(pt).floor(),wt.copy(Rt).multiplyScalar(pt).floor(),Nt=Xe;if(ht!==0&&(ot=W),y.bindFramebuffer(j.FRAMEBUFFER,ot)&&y.drawBuffers(b,ot),y.viewport(gt),y.scissor(wt),y.setScissorTest(Nt),ct){const Ot=ft.get(b.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ot.__webglTexture,ht)}else if(Bt){const Ot=q;for(let Zt=0;Zt<b.textures.length;Zt++){const Kt=ft.get(b.textures[Zt]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Zt,Kt.__webglTexture,ht,Ot)}}else if(b!==null&&ht!==0){const Ot=ft.get(b.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ot.__webglTexture,ht)}Q=-1};function Si(b){const q=ft.get(b);return(q.__readFormat!==b.format||q.__readType!==b.type)&&(q.__readFormat=b.format,q.__readType=b.type,q.__formatReadable=O.textureFormatReadable(b.format),q.__typeReadable=O.textureTypeReadable(b.type)),q}this.readRenderTargetPixels=function(b,q,ht,ot,ct,Bt,Wt,Ot=0){if(!(b&&b.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=ft.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Wt!==void 0&&(Zt=Zt[Wt]),Zt){y.bindFramebuffer(j.FRAMEBUFFER,Zt);try{const Kt=b.textures[Ot],se=Kt.format,fe=Kt.type;b.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ot);const qt=Si(Kt);if(qt.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qt.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-ot&&ht>=0&&ht<=b.height-ct&&j.readPixels(q,ht,ot,ct,Lt.convert(se),Lt.convert(fe),Bt)}finally{const Kt=tt!==null?ft.get(tt).__webglFramebuffer:null;y.bindFramebuffer(j.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(b,q,ht,ot,ct,Bt,Wt,Ot=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=ft.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Wt!==void 0&&(Zt=Zt[Wt]),Zt)if(q>=0&&q<=b.width-ot&&ht>=0&&ht<=b.height-ct){y.bindFramebuffer(j.FRAMEBUFFER,Zt);const Kt=b.textures[Ot],se=Kt.format,fe=Kt.type;b.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ot);const qt=Si(Kt);if(qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,ye),j.bufferData(j.PIXEL_PACK_BUFFER,Bt.byteLength,j.STREAM_READ),j.readPixels(q,ht,ot,ct,Lt.convert(se),Lt.convert(fe),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);const ve=tt!==null?ft.get(tt).__webglFramebuffer:null;y.bindFramebuffer(j.FRAMEBUFFER,ve);const Ke=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await X1(j,Ke,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,ye),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Bt),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(ye),j.deleteSync(Ke),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,q=null,ht=0){const ot=Math.pow(2,-ht),ct=Math.floor(b.image.width*ot),Bt=Math.floor(b.image.height*ot),Wt=q!==null?q.x:0,Ot=q!==null?q.y:0;mt.setTexture2D(b,0),j.copyTexSubImage2D(j.TEXTURE_2D,ht,0,0,Wt,Ot,ct,Bt),y.unbindTexture()},this.copyTextureToTexture=function(b,q,ht=null,ot=null,ct=0,Bt=0){let Wt,Ot,Zt,Kt,se,fe,qt,ye,ve;const Ke=b.isCompressedTexture?b.mipmaps[Bt]:b.image;if(ht!==null)Wt=ht.max.x-ht.min.x,Ot=ht.max.y-ht.min.y,Zt=ht.isBox3?ht.max.z-ht.min.z:1,Kt=ht.min.x,se=ht.min.y,fe=ht.isBox3?ht.min.z:0;else{const $e=Math.pow(2,-ct);Wt=Math.floor(Ke.width*$e),Ot=Math.floor(Ke.height*$e),b.isDataArrayTexture?Zt=Ke.depth:b.isData3DTexture?Zt=Math.floor(Ke.depth*$e):Zt=1,Kt=0,se=0,fe=0}ot!==null?(qt=ot.x,ye=ot.y,ve=ot.z):(qt=0,ye=0,ve=0);const Ge=Lt.convert(q.format),yn=Lt.convert(q.type);let Ht;q.isData3DTexture?(mt.setTexture3D(q,0),Ht=j.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(mt.setTexture2DArray(q,0),Ht=j.TEXTURE_2D_ARRAY):(mt.setTexture2D(q,0),Ht=j.TEXTURE_2D),y.activeTexture(j.TEXTURE0),y.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,q.flipY),y.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),y.pixelStorei(j.UNPACK_ALIGNMENT,q.unpackAlignment);const cn=y.getParameter(j.UNPACK_ROW_LENGTH),we=y.getParameter(j.UNPACK_IMAGE_HEIGHT),kn=y.getParameter(j.UNPACK_SKIP_PIXELS),ri=y.getParameter(j.UNPACK_SKIP_ROWS),qi=y.getParameter(j.UNPACK_SKIP_IMAGES);y.pixelStorei(j.UNPACK_ROW_LENGTH,Ke.width),y.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ke.height),y.pixelStorei(j.UNPACK_SKIP_PIXELS,Kt),y.pixelStorei(j.UNPACK_SKIP_ROWS,se),y.pixelStorei(j.UNPACK_SKIP_IMAGES,fe);const Se=b.isDataArrayTexture||b.isData3DTexture,Be=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const $e=ft.get(b),si=ft.get(q),be=ft.get($e.__renderTarget),un=ft.get(si.__renderTarget);y.bindFramebuffer(j.READ_FRAMEBUFFER,be.__webglFramebuffer),y.bindFramebuffer(j.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let ga=0;ga<Zt;ga++)Se&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ft.get(b).__webglTexture,ct,fe+ga),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ft.get(q).__webglTexture,Bt,ve+ga)),j.blitFramebuffer(Kt,se,Wt,Ot,qt,ye,Wt,Ot,j.DEPTH_BUFFER_BIT,j.NEAREST);y.bindFramebuffer(j.READ_FRAMEBUFFER,null),y.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ct!==0||b.isRenderTargetTexture||ft.has(b)){const $e=ft.get(b),si=ft.get(q);y.bindFramebuffer(j.READ_FRAMEBUFFER,G),y.bindFramebuffer(j.DRAW_FRAMEBUFFER,Y);for(let be=0;be<Zt;be++)Se?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,$e.__webglTexture,ct,fe+be):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,$e.__webglTexture,ct),Be?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,si.__webglTexture,Bt,ve+be):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,si.__webglTexture,Bt),ct!==0?j.blitFramebuffer(Kt,se,Wt,Ot,qt,ye,Wt,Ot,j.COLOR_BUFFER_BIT,j.NEAREST):Be?j.copyTexSubImage3D(Ht,Bt,qt,ye,ve+be,Kt,se,Wt,Ot):j.copyTexSubImage2D(Ht,Bt,qt,ye,Kt,se,Wt,Ot);y.bindFramebuffer(j.READ_FRAMEBUFFER,null),y.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Be?b.isDataTexture||b.isData3DTexture?j.texSubImage3D(Ht,Bt,qt,ye,ve,Wt,Ot,Zt,Ge,yn,Ke.data):q.isCompressedArrayTexture?j.compressedTexSubImage3D(Ht,Bt,qt,ye,ve,Wt,Ot,Zt,Ge,Ke.data):j.texSubImage3D(Ht,Bt,qt,ye,ve,Wt,Ot,Zt,Ge,yn,Ke):b.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Bt,qt,ye,Wt,Ot,Ge,yn,Ke.data):b.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Bt,qt,ye,Ke.width,Ke.height,Ge,Ke.data):j.texSubImage2D(j.TEXTURE_2D,Bt,qt,ye,Wt,Ot,Ge,yn,Ke);y.pixelStorei(j.UNPACK_ROW_LENGTH,cn),y.pixelStorei(j.UNPACK_IMAGE_HEIGHT,we),y.pixelStorei(j.UNPACK_SKIP_PIXELS,kn),y.pixelStorei(j.UNPACK_SKIP_ROWS,ri),y.pixelStorei(j.UNPACK_SKIP_IMAGES,qi),Bt===0&&q.generateMipmaps&&j.generateMipmap(Ht),y.unbindTexture()},this.initRenderTarget=function(b){ft.get(b).__webglFramebuffer===void 0&&mt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?mt.setTextureCube(b,0):b.isData3DTexture?mt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?mt.setTexture2DArray(b,0):mt.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){V=0,k=0,tt=null,y.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(e),i.unpackColorSpace=De._getUnpackColorSpace()}}function To(o){const e=new Uint32Array(1);return crypto.getRandomValues(e),Promise.resolve(e[0]%o+1)}let Tr=null,qu=0,ho=null,tx=!1;const bo=()=>tx?!1:(tx=!0,!0),Ao=()=>{if(ho!==null&&(clearTimeout(ho),ho=null),qu+=1,!Tr){const o=new Di(28,1,.1,100);o.position.set(0,0,7),o.lookAt(0,0,0);const e=new TC({alpha:!0,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setClearColor(0,0),Tr={renderer:e,camera:o}}return Tr},Ro=()=>{qu-=1,!(qu>0||ho!==null)&&(ho=setTimeout(()=>{ho=null,!(qu>0||!Tr)&&(Tr.renderer.domElement.remove(),Tr.renderer.dispose(),Tr.renderer.forceContextLoss(),Tr=null)},0))},ss={red:{hex:14034996,cssTop:[214,40,52],cssBottom:[140,18,28],label:"#ffffff"},green:{hex:769384,cssTop:[11,189,104],cssBottom:[9,165,90],label:"#ffffff"},white:{hex:15790320,cssTop:[240,240,240],cssBottom:[200,200,200],label:"#111827"},black:{hex:1052691,cssTop:[16,16,19],cssBottom:[3,3,5],label:"#ffffff"},blue:{hex:1785819,cssTop:[27,63,219],cssBottom:[17,38,140],label:"#ffffff"},yellow:{hex:16761856,cssTop:[255,196,0],cssBottom:[214,152,0],label:"#111827"}},Fm=[4,6,8,10,12,20],Bm=["red","yellow","green","blue","black","white"];function ex(o,e){return o[(o.indexOf(e)+1)%o.length]}const pp={sides:6,color:"red",translucent:!0},bC=.87,Co=o=>o?bC:1;function AC(){const o=new URLSearchParams(window.location.search),e=Number(o.get("s")),i=Fm.includes(e)?e:pp.sides,r=o.get("c")?.toLowerCase(),l=r!==void 0&&Bm.includes(r)?r:pp.color,u=(o.get("translucent")??o.get("t"))?.toLowerCase(),d=u==="true"?!0:u==="false"?!1:pp.translucent;return{sides:i,color:l,translucent:d}}var RC=bx();function wo({isRolling:o,error:e,result:i}){return RC.createPortal(te.jsx("p",{className:"hint",children:o?"Rolling...":e||(i!==null?`You rolled ${i}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")}),document.body)}const po=Math.PI/180,CC=3,wC=7,DC=.98,Fl=o=>1-(1-o)**3,lM=o=>new Ie().setFromEuler(new Xi(o.x*po,o.y*po,o.z*po,"XYZ")),mp=o=>(o%360+540)%360-180,cM=o=>{const e=new K(o.x,o.y,o.z),i=e.length();return i<1e-9?new K(0,1,0):(e.divideScalar(i),o.w<0&&e.negate(),e)},NC=(o,e)=>{const i=u=>lM({x:o.x+(e.x-o.x)*Fl(u),y:o.y+(e.y-o.y)*Fl(u),z:o.z+(e.z-o.z)*Fl(u)}),r=i(DC),l=i(1);return cM(l.multiply(r.clone().invert()))},UC=(o,e,i)=>{const r=lM(o),l=cM(r.clone().invert().multiply(e)).applyQuaternion(r).normalize(),u=Math.random()*Math.PI,d=new Ie().setFromAxisAngle(l,-u).multiply(e),h=new Xi().setFromQuaternion(d,"XYZ"),p={x:h.x/po,y:h.y/po,z:h.z/po},m=[];for(let g=CC;g<=wC;g++){const v=i-g;if(!(v<1))for(const E of[1,-1])for(const R of[1,-1])for(const C of[1,-1]){const x={x:o.x+E*360*g,y:o.y+R*360*v,z:o.z+C*360*i};x.x+=mp(p.x-x.x),x.y+=mp(p.y-x.y),x.z+=mp(p.z-x.z);const M=NC(o,x).dot(l);m.push({rotation:x,dot:M})}}const S=m.filter(g=>g.dot>0);return S.length>0?S[Math.floor(Math.random()*S.length)].rotation:m.reduce((g,v)=>v.dot>g.dot?v:g).rotation},an=Math.PI/180,nx=65,ix=.5,LC=10,OC=1500,PC=750,IC=260,ax=(o,e,i)=>Math.min(i,Math.max(e,o)),zC=o=>{const e=new Xi().setFromQuaternion(o,"XYZ");return{x:e.x/an,y:e.y/an,z:e.z/an}};function Do({fetchRoll:o,resolveTarget:e,initialRotation:i={x:0,y:0,z:0}}){const r=$t.useRef(null),l=$t.useRef({...i}),u=$t.useRef({...i}),d=$t.useRef(null),h=$t.useRef(null),p=$t.useRef(null),m=$t.useRef(!1),[S,g]=$t.useState(!1),[v,E]=$t.useState(!1),[R,C]=$t.useState(null),[x,M]=$t.useState(null),L=$t.useRef({fetchRoll:o,resolveTarget:e});L.current={fetchRoll:o,resolveTarget:e};const X=$t.useCallback(I=>{l.current=I,r.current?.rotation.set(I.x*an,I.y*an,I.z*an)},[]),D=$t.useCallback((I,F)=>{p.current&&cancelAnimationFrame(p.current);const W={...l.current},G=performance.now();return new Promise(Y=>{const V=k=>{const tt=Math.min((k-G)/F,1),Q=Fl(tt);X({x:W.x+(I.x-W.x)*Q,y:W.y+(I.y-W.y)*Q,z:W.z+(I.z-W.z)*Q}),tt<1?p.current=requestAnimationFrame(V):(p.current=null,Y())};p.current=requestAnimationFrame(V)})},[X]),w=$t.useCallback((I,F)=>{p.current&&cancelAnimationFrame(p.current);const W=r.current;if(!W)return Promise.resolve();const G=W.quaternion.clone(),Y=performance.now();return new Promise(V=>{const k=tt=>{const Q=Math.min((tt-Y)/F,1);W.quaternion.slerpQuaternions(G,I,Fl(Q)),l.current=zC(W.quaternion),Q<1?p.current=requestAnimationFrame(k):(p.current=null,V())};p.current=requestAnimationFrame(k)})},[]),U=$t.useCallback(async()=>{m.current=!0,g(!0),C(null),M(null);try{const I=await L.current.fetchRoll(),F=L.current.resolveTarget(I),W=l.current,G=UC(W,F,LC);await D(G,OC),await w(F,PC),u.current=l.current,g(!1),m.current=!1,C(I)}catch(I){g(!1),m.current=!1,M(I instanceof Error?I.message:"Roll failed.")}},[w,D]),z=$t.useCallback(I=>{if(m.current)return;const F=I.currentTarget.getBoundingClientRect();d.current={centerX:F.left+F.width/2,centerY:F.top+F.height/2,halfWidth:F.width/2,halfHeight:F.height/2,nx:0,ny:0},I.currentTarget.setPointerCapture(I.pointerId),E(!0)},[]),T=$t.useCallback(I=>{const F=d.current;!F||m.current||(F.nx=ax((I.clientX-F.centerX)/F.halfWidth,-1,1),F.ny=ax((I.clientY-F.centerY)/F.halfHeight,-1,1),!h.current&&(h.current=requestAnimationFrame(()=>{h.current=null;const W=u.current;X({x:W.x-F.ny*nx,y:W.y+F.nx*nx,z:W.z})})))},[X]),N=$t.useCallback(()=>{const I=d.current;if(!I)return;d.current=null,E(!1),h.current&&(cancelAnimationFrame(h.current),h.current=null),Math.abs(I.nx)>=ix||Math.abs(I.ny)>=ix?U():D(u.current,IC)},[D,U]),P=$t.useCallback(()=>{p.current&&cancelAnimationFrame(p.current)},[]);return{meshRef:r,rotationRef:l,cancelAnimation:P,isRolling:S,isDragging:v,error:x,result:R,onPointerDown:z,onPointerMove:T,onPointerUp:N}}const FC=1.01,BC=2,HC=.95,GC=1.9,VC=.07,Ol=512,rx=[.246667,.5,.753333],XC=.055733,kC="#ffffff",WC=[[0,0,1],[0,1,0],[1,0,0],[-1,0,0],[0,-1,0],[0,0,-1]],qC={1:[[2,2]],2:[[1,1],[3,3]],3:[[1,1],[2,2],[3,3]],4:[[1,1],[1,3],[3,1],[3,3]],5:[[1,1],[1,3],[2,2],[3,1],[3,3]],6:[[1,1],[1,3],[2,1],[2,3],[3,1],[3,3]]},sx=(o,e,i)=>[o[0]+(e[0]-o[0])*i,o[1]+(e[1]-o[1])*i,o[2]+(e[2]-o[2])*i],YC=o=>{const e=[],i=o/2,r=[1,-1];for(const l of[0,1,2]){const[u,d]=[0,1,2].filter(h=>h!==l);for(const h of r){const p=[[1,1],[1,-1],[-1,-1],[-1,1]].map(([S,g])=>{const v=[0,0,0];return v[l]=h,v[u]=S,v[d]=g,v}),m=[];for(let S=0;S<4;S++){const g=p[S],v=p[(S+1)%4];m.push(sx(g,v,i)),m.push(sx(v,g,i))}e.push(m)}}for(const l of r)for(const u of r)for(const d of r)e.push([[l*(1-o),u,d],[l,u*(1-o),d],[l,u,d*(1-o)]]);return e},ZC=YC(VC),KC=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new K(e,i,r)},QC=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),g=new K(h/S,p/S,m/S);return g.dot(e)<0&&g.negate(),g},JC=o=>{const e=new K(...o).normalize(),i=Math.abs(e.y)>.9?new K(0,0,1):new K(0,1,0),r=i.clone().sub(e.clone().multiplyScalar(i.dot(e))).normalize(),l=new K().crossVectors(r,e).normalize(),u=new Je().makeBasis(l,r,e);return{normal:e,up:r,orientation:new Ie().setFromRotationMatrix(u)}},ox=WC.map(JC),jC=o=>{const e=new K(0,0,1),i=new Ie().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Ie().setFromAxisAngle(new K(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},lx=(o,e,i)=>{const r=document.createElement("canvas");r.width=Ol,r.height=Ol;const l=r.getContext("2d");if(!l)return null;const u=XC*Ol;l.fillStyle=e;for(const[p,m]of qC[o]){const S=rx[m-1]*Ol,g=rx[p-1]*Ol;l.beginPath(),l.arc(S,g,u,0,Math.PI*2),l.fill()}const d=new vo(r);d.colorSpace=Dn;const h=new br({map:d,transparent:!0,side:_i,depthWrite:!1});return new mn(new pa(i,i),h)};function $C({color:o="red",translucent:e=!0}){const i=$t.useRef(null),r=$t.useRef(null),l=$t.useRef(null),{meshRef:u,rotationRef:d,cancelAnimation:h,isRolling:p,isDragging:m,error:S,result:g,onPointerDown:v,onPointerMove:E,onPointerUp:R}=Do({fetchRoll:()=>To(6),resolveTarget:C=>jC(ox[C-1])});return $t.useEffect(()=>{const C=new _o,x=new Qn,M=[],L=[];for(const N of ZC){const P=KC(N),I=QC(N,P),F=I.x,W=I.y,G=I.z,[Y,V,k]=N,tt=[V[0]-Y[0],V[1]-Y[1],V[2]-Y[2]],Q=[k[0]-Y[0],k[1]-Y[1],k[2]-Y[2]],at=tt[1]*Q[2]-tt[2]*Q[1],gt=tt[2]*Q[0]-tt[0]*Q[2],wt=tt[0]*Q[1]-tt[1]*Q[0],H=at*P.x+gt*P.y+wt*P.z>=0?N:[...N].reverse();for(let lt=1;lt<H.length-1;lt++)M.push(...H[0],...H[lt],...H[lt+1]),L.push(F,W,G,F,W,G,F,W,G)}x.setAttribute("position",new pn(M,3)),x.setAttribute("normal",new pn(L,3));const X=ss[o],D=Co(e),w=new mn(x,new So({color:X.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:D,depthWrite:!e}));w.rotation.set(d.current.x*an,d.current.y*an,d.current.z*an);const U=new Ie().setFromAxisAngle(new K(0,1,0),Math.PI);ox.forEach((N,P)=>{const I=P+1,F=lx(I,X.label,BC);if(!F)return;F.position.copy(N.normal).multiplyScalar(FC),F.quaternion.copy(N.orientation),F.renderOrder=1,w.add(F);const W=lx(I,kC,GC);W&&(W.renderOrder=-1,W.position.copy(N.normal).multiplyScalar(HC),W.quaternion.copy(N.orientation).multiply(U),w.add(W))}),C.add(w),C.add(new yo(16777215,1)),C.add(new xo(16777215,12303291,1));const T=new Mo(16777215,1);return T.position.set(3,4,5),C.add(T),u.current=w,r.current=C,()=>{h(),w.geometry.dispose(),w.material.dispose(),w.children.forEach(N=>{const P=N;P.geometry.dispose(),P.material.map?.dispose(),P.material.dispose()}),u.current=null,r.current=null}},[o,e,u,d,h]),$t.useEffect(()=>{const C=i.current;if(!C)return;const{renderer:x,camera:M}=Ao(),L=()=>{const w=C.clientWidth,U=C.clientHeight;x.setSize(w,U,!1),M.aspect=w/U,M.updateProjectionMatrix()},X=new ResizeObserver(L);X.observe(C),L(),r.current&&x.render(r.current,M),bo()&&x.getContext().finish(),C.appendChild(x.domElement);const D=()=>{l.current=requestAnimationFrame(D),r.current&&x.render(r.current,M)};return D(),()=>{x.domElement.remove(),X.disconnect(),l.current&&cancelAnimationFrame(l.current),Ro()}},[]),te.jsxs("div",{className:`stage stage--six-sided${m?" is-dragging":""}`,onPointerDown:v,onPointerMove:E,onPointerUp:R,onPointerCancel:R,children:[te.jsx("div",{ref:i,className:"three-scene"}),te.jsx(wo,{isRolling:p,error:S,result:g})]})}const cx=.8,Pa=[[.981495,.981495,.981495],[.981495,-.981495,-.981495],[-.981495,.981495,-.981495],[-.981495,-.981495,.981495]],oa=[[1,3,2],[0,2,3],[0,3,1],[0,1,2]],om=[1,2,3,4],ux=[[-.122687,-.736122,-.122687],[-.736122,-.122687,-.122687],[-.122687,-.122687,-.736122],[-.122687,.736122,.122687],[-.736122,.122687,.122687],[-.122687,.122687,.736122],[.122687,-.122687,.736122],[.122687,-.736122,.122687],[.736122,-.122687,.122687],[.736122,.122687,-.122687],[.122687,.122687,-.736122],[.122687,.736122,-.122687]],t2=[180,180,0,180,0,180,0,180,180,0,180,180],e2={x:-177.2356,y:55.25,z:45},gp=(o,e,i)=>[o[0]+(e[0]-o[0])*i,o[1]+(e[1]-o[1])*i,o[2]+(e[2]-o[2])*i],uM=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),g=new K(h/S,p/S,m/S);return g.dot(e)<0&&g.negate(),g},fM=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new K(e,i,r)},lm=oa.map(o=>{const e=o.map(r=>Pa[r]),i=fM(e);return{normal:uM(e,i),center:i}}),n2=.07,i2=o=>{const e=[];for(const i of oa){const r=[];for(let l=0;l<3;l++){const u=Pa[i[l]],d=Pa[i[(l+1)%3]],h=Math.hypot(d[0]-u[0],d[1]-u[1],d[2]-u[2]),p=o/h;r.push(gp(u,d,p)),r.push(gp(d,u,p))}e.push(r)}for(let i=0;i<Pa.length;i++){const r=[];for(let l=0;l<Pa.length;l++){if(l===i)continue;const u=Pa[i],d=Pa[l],h=Math.hypot(d[0]-u[0],d[1]-u[1],d[2]-u[2]);r.push(gp(u,d,o/h))}e.push(r)}return e},a2=i2(n2),r2=(o,e)=>{const i=oa[o][e],r=oa[o][(e+1)%3];for(let l=0;l<oa.length;l++)if(l!==o&&oa[l].includes(i)&&oa[l].includes(r))return om[l];return om[o]},s2=o=>{const{normal:e}=lm[o],i=new Ie().setFromUnitVectors(e,new K(0,-1,0)),r=(o+1)%oa.length,l=lm[r].normal.clone().applyQuaternion(i),u=Math.atan2(l.x,l.z);return new Ie().setFromAxisAngle(new K(0,1,0),-u).multiply(i)},o2="#ffffff",fx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const l=new vo(i);l.colorSpace=Dn;const u=new br({map:l,transparent:!0,side:_i,depthWrite:!1});return new mn(new pa(cx,cx),u)};function l2({color:o="red",translucent:e=!0}){const i=$t.useRef(null),r=$t.useRef(null),l=$t.useRef(null),{meshRef:u,rotationRef:d,cancelAnimation:h,isRolling:p,isDragging:m,error:S,result:g,onPointerDown:v,onPointerMove:E,onPointerUp:R}=Do({fetchRoll:()=>To(4),resolveTarget:C=>s2(om.indexOf(C)),initialRotation:e2});return $t.useEffect(()=>{const C=new _o,x=new Qn,M=[],L=[];for(const N of a2){const P=N,I=fM(P),F=uM(P,I),W=F.x,G=F.y,Y=F.z,[V,k,tt]=P,Q=[k[0]-V[0],k[1]-V[1],k[2]-V[2]],at=[tt[0]-V[0],tt[1]-V[1],tt[2]-V[2]],gt=Q[1]*at[2]-Q[2]*at[1],wt=Q[2]*at[0]-Q[0]*at[2],Nt=Q[0]*at[1]-Q[1]*at[0],lt=gt*I.x+wt*I.y+Nt*I.z>=0?P:[...P].reverse();for(let Et=1;Et<lt.length-1;Et++)M.push(...lt[0],...lt[Et],...lt[Et+1]),L.push(W,G,Y,W,G,Y,W,G,Y)}x.setAttribute("position",new pn(M,3)),x.setAttribute("normal",new pn(L,3));const X=ss[o],D=Co(e),w=new mn(x,new So({color:X.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:D,depthWrite:!e}));w.rotation.set(d.current.x*an,d.current.y*an,d.current.z*an);const U=new Ie().setFromAxisAngle(new K(1,0,0),Math.PI),z=()=>{lm.forEach(({normal:N,center:P},I)=>{for(let F=0;F<3;F++){const W=I*3+F,G=r2(I,F),Y=oa[I][F],V=oa[I][(F+1)%3],k=new K().addVectors(new K(...Pa[Y]),new K(...Pa[V])).multiplyScalar(.5),tt=P.clone().sub(k).normalize(),Q=new K().crossVectors(tt,N),at=new Ie().setFromRotationMatrix(new Je().makeBasis(Q,tt,N)),gt=new Ie().setFromAxisAngle(new K(0,0,1),t2[W]*an),wt=fx(G,X.label);wt&&(wt.renderOrder=1,wt.position.copy(new K(...ux[W])).addScaledVector(N,.01),wt.quaternion.copy(at),w.add(wt));const Nt=fx(G,o2);Nt&&(Nt.renderOrder=-1,Nt.position.copy(new K(...ux[W])).addScaledVector(N,-.05),Nt.quaternion.copy(at).multiply(gt).multiply(U),w.add(Nt))}})};document.fonts.load("700 160px dice-font").then(z),C.add(w),C.add(new yo(16777215,1)),C.add(new xo(16777215,12303291,1));const T=new Mo(16777215,1);return T.position.set(3,4,5),C.add(T),u.current=w,r.current=C,()=>{h(),x.dispose(),w.material.dispose(),w.children.forEach(N=>{const P=N;P.geometry.dispose(),P.material.map?.dispose(),P.material.dispose()}),u.current=null,r.current=null}},[o,e,u,d,h]),$t.useEffect(()=>{const C=i.current;if(!C)return;const{renderer:x,camera:M}=Ao(),L=()=>{const w=C.clientWidth,U=C.clientHeight;x.setSize(w,U,!1),M.aspect=w/U,M.updateProjectionMatrix()},X=new ResizeObserver(L);X.observe(C),L(),r.current&&x.render(r.current,M),bo()&&x.getContext().finish(),C.appendChild(x.domElement);const D=()=>{l.current=requestAnimationFrame(D),r.current&&x.render(r.current,M)};return D(),()=>{x.domElement.remove(),X.disconnect(),l.current&&cancelAnimationFrame(l.current),Ro()}},[]),te.jsxs("div",{className:`stage stage--four-sided${m?" is-dragging":""}`,onPointerDown:v,onPointerMove:E,onPointerUp:R,onPointerCancel:R,children:[te.jsx("div",{ref:i,className:"three-scene"}),te.jsx(wo,{isRolling:p,error:S,result:g})]})}const dx=1.08,hx=.864,dM=[[1,1,1],[-1,1,1],[-1,1,-1],[1,1,-1],[1,-1,1],[-1,-1,1],[-1,-1,-1],[1,-1,-1]],c2=o=>{const e=new K(...o).normalize(),i=Math.abs(e.y)>.9?new K(0,0,1):new K(0,1,0),r=i.clone().sub(e.clone().multiplyScalar(i.dot(e))).normalize(),l=new K().crossVectors(r,e).normalize(),u=new Je().makeBasis(l,r,e);return{normal:e,up:r,orientation:new Ie().setFromRotationMatrix(u)}},px=dM.map(c2),_p=(o,e,i)=>[o[0]+(e[0]-o[0])*i,o[1]+(e[1]-o[1])*i,o[2]+(e[2]-o[2])*i],u2=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),g=new K(h/S,p/S,m/S);return g.dot(e)<0&&g.negate(),g},hM=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new K(e,i,r)},f2=.07,oo=1.7,ts=[[oo,0,0],[-oo,0,0],[0,oo,0],[0,-oo,0],[0,0,oo],[0,0,-oo]],d2=dM.map(([o,e,i])=>[o>0?0:1,e>0?2:3,i>0?4:5]),h2=o=>{const e=[];for(const i of d2){const r=[];for(let l=0;l<3;l++){const u=ts[i[l]],d=ts[i[(l+1)%3]],h=Math.hypot(d[0]-u[0],d[1]-u[1],d[2]-u[2]),p=o/h;r.push(_p(u,d,p)),r.push(_p(d,u,p))}e.push(r)}for(let i=0;i<ts.length;i++){const r=[];for(let p=0;p<ts.length;p++){if(Math.floor(p/2)===Math.floor(i/2))continue;const S=ts[i],g=ts[p],v=Math.hypot(g[0]-S[0],g[1]-S[1],g[2]-S[2]);r.push(_p(S,g,o/v))}const l=hM(r),u=new K(...ts[i]).normalize(),d=new K(...r[0]).sub(l),h=new K().crossVectors(u,d);r.sort((p,m)=>{const S=new K(...p).sub(l),g=new K(...m).sub(l);return Math.atan2(S.dot(h),S.dot(d))-Math.atan2(g.dot(h),g.dot(d))}),e.push(r)}return e},p2=h2(f2),m2=o=>{const e=new K(0,0,1),i=new Ie().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Ie().setFromAxisAngle(new K(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},g2="#ffffff",mx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 200px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.shadowColor="rgba(0, 0, 0, 0.35)",r.shadowBlur=6,r.fillText(String(o),128,136);const l=new vo(i);l.colorSpace=Dn;const u=new br({map:l,transparent:!0,side:_i,depthWrite:!1});return new mn(new pa(hx,hx),u)};function _2({color:o="red",translucent:e=!0}){const i=$t.useRef(null),r=$t.useRef(null),l=$t.useRef(null),{meshRef:u,rotationRef:d,cancelAnimation:h,isRolling:p,isDragging:m,error:S,result:g,onPointerDown:v,onPointerMove:E,onPointerUp:R}=Do({fetchRoll:()=>To(8),resolveTarget:C=>m2(px[C-1])});return $t.useEffect(()=>{const C=new _o,x=ss[o],M=Co(e),L=new Qn,X=[],D=[];for(const N of p2){const P=hM(N),I=u2(N,P),F=I.x,W=I.y,G=I.z,[Y,V,k]=N,tt=[V[0]-Y[0],V[1]-Y[1],V[2]-Y[2]],Q=[k[0]-Y[0],k[1]-Y[1],k[2]-Y[2]],at=tt[1]*Q[2]-tt[2]*Q[1],gt=tt[2]*Q[0]-tt[0]*Q[2],wt=tt[0]*Q[1]-tt[1]*Q[0],H=at*P.x+gt*P.y+wt*P.z>=0?N:[...N].reverse();for(let lt=1;lt<H.length-1;lt++)X.push(...H[0],...H[lt],...H[lt+1]),D.push(F,W,G,F,W,G,F,W,G)}L.setAttribute("position",new pn(X,3)),L.setAttribute("normal",new pn(D,3));const w=new mn(L,new So({color:x.hex,roughness:.46,metalness:.08,flatShading:!0,transparent:e,opacity:M,depthWrite:!e}));w.rotation.set(d.current.x*an,d.current.y*an,d.current.z*an);const U=new Ie().setFromAxisAngle(new K(0,1,0),Math.PI),z=()=>{px.forEach((N,P)=>{const I=P+1,F=mx(I,x.label);if(!F)return;F.position.copy(N.normal).multiplyScalar(dx),F.quaternion.copy(N.orientation),F.renderOrder=1,w.add(F);const W=mx(I,g2);W&&(W.renderOrder=-1,W.position.copy(N.normal).multiplyScalar(dx-.2),W.quaternion.copy(N.orientation).multiply(U),w.add(W))})};document.fonts.load("700 200px dice-font").then(z),C.add(w),C.add(new yo(16777215,1)),C.add(new xo(16777215,12303291,1));const T=new Mo(16777215,1);return T.position.set(3,4,5),C.add(T),u.current=w,r.current=C,()=>{h(),w.geometry.dispose(),w.material.dispose(),w.children.forEach(N=>{const P=N;P.geometry.dispose(),P.material.map?.dispose(),P.material.dispose()}),u.current=null,r.current=null}},[o,e,u,d,h]),$t.useEffect(()=>{const C=i.current;if(!C)return;const{renderer:x,camera:M}=Ao(),L=()=>{const w=C.clientWidth,U=C.clientHeight;x.setSize(w,U,!1),M.aspect=w/U,M.updateProjectionMatrix()},X=new ResizeObserver(L);X.observe(C),L(),r.current&&x.render(r.current,M),bo()&&x.getContext().finish(),C.appendChild(x.domElement);const D=()=>{l.current=requestAnimationFrame(D),r.current&&x.render(r.current,M)};return D(),()=>{x.domElement.remove(),X.disconnect(),l.current&&cancelAnimationFrame(l.current),Ro()}},[]),te.jsxs("div",{className:`stage stage--eight-sided${m?" is-dragging":""}`,onPointerDown:v,onPointerMove:E,onPointerUp:R,onPointerCancel:R,children:[te.jsx("div",{ref:i,className:"three-scene"}),te.jsx(wo,{isRolling:p,error:S,result:g})]})}const gx=.77,pM=2.2,v2=.85,ju=pM*.9*v2,Mr=pM*.65,cm=ju*.105573,um=ju*.8,Bu=(ju-um)/(ju-cm),fm=[...[0,1,2,3,4].map(o=>[Bu*Mr*Math.cos(o*2*Math.PI/5),um,Bu*Mr*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Bu*Mr*Math.cos((o+.5)*2*Math.PI/5),-um,Bu*Mr*Math.sin((o+.5)*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Mr*Math.cos(o*2*Math.PI/5),cm,Mr*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Mr*Math.cos((o+.5)*2*Math.PI/5),-cm,Mr*Math.sin((o+.5)*2*Math.PI/5)])],dm=[[0,10,15,11,1],[1,11,16,12,2],[2,12,17,13,3],[3,13,18,14,4],[4,14,19,10,0],[5,6,16,11,15],[6,7,17,12,16],[7,8,18,13,17],[8,9,19,14,18],[9,5,15,10,19],[0,1,2,3,4],[5,6,7,8,9]],hm=[1,3,5,7,9,8,6,4,2,10],mM=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),g=new K(h/S,p/S,m/S);return g.dot(e)<0&&g.negate(),g},pm=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new K(e,i,r)},S2=o=>{const e=dm[o].map(p=>fm[p]),i=pm(e),r=mM(e,i),l=Math.abs(r.y)>.9?new K(0,0,1):new K(0,1,0),u=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),d=new K().crossVectors(u,r).normalize(),h=new Je().makeBasis(d,u,r);return{normal:r,up:u,orientation:new Ie().setFromRotationMatrix(h)}},_x=Array.from({length:hm.length},(o,e)=>S2(e)),x2=o=>{const e=new K(0,0,1),i=new Ie().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Ie().setFromAxisAngle(new K(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},M2="#ffffff",vx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 180px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o===10?0:o),128,136);const l=new vo(i);l.colorSpace=Dn;const u=new br({map:l,transparent:!0,side:_i,depthWrite:!1});return new mn(new pa(gx,gx),u)};function y2({color:o="red",translucent:e=!0}){const i=$t.useRef(null),r=$t.useRef(null),l=$t.useRef(null),{meshRef:u,rotationRef:d,cancelAnimation:h,isRolling:p,isDragging:m,error:S,result:g,onPointerDown:v,onPointerMove:E,onPointerUp:R}=Do({fetchRoll:()=>To(10),resolveTarget:C=>x2(_x[hm.indexOf(C)])});return $t.useEffect(()=>{const C=new _o,x=new Qn,M=[],L=[];for(const N of dm){const P=N.map(Et=>fm[Et]),I=pm(P),F=mM(P,I),W=F.x,G=F.y,Y=F.z,[V,k,tt]=P,Q=[k[0]-V[0],k[1]-V[1],k[2]-V[2]],at=[tt[0]-V[0],tt[1]-V[1],tt[2]-V[2]],gt=Q[1]*at[2]-Q[2]*at[1],wt=Q[2]*at[0]-Q[0]*at[2],Nt=Q[0]*at[1]-Q[1]*at[0],lt=gt*I.x+wt*I.y+Nt*I.z>=0?P:[...P].reverse();for(let Et=1;Et<lt.length-1;Et++)M.push(...lt[0],...lt[Et],...lt[Et+1]),L.push(W,G,Y,W,G,Y,W,G,Y)}x.setAttribute("position",new pn(M,3)),x.setAttribute("normal",new pn(L,3));const X=ss[o],D=Co(e),w=new mn(x,new So({color:X.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:D,depthWrite:!e}));w.rotation.set(d.current.x*an,d.current.y*an,d.current.z*an);const U=new Ie().setFromAxisAngle(new K(0,1,0),Math.PI),z=()=>{_x.forEach((N,P)=>{const I=hm[P],F=vx(I,X.label);if(!F)return;const W=pm(dm[P].map(Y=>fm[Y]));F.position.copy(W),F.position.addScaledVector(N.normal,.01),F.quaternion.copy(N.orientation),F.renderOrder=1,w.add(F);const G=vx(I,M2);G&&(G.renderOrder=-1,G.position.copy(W),G.position.addScaledVector(N.normal,-.05),G.quaternion.copy(N.orientation).multiply(U),w.add(G))})};document.fonts.load("700 180px dice-font").then(z),C.add(w),C.add(new yo(16777215,1)),C.add(new xo(16777215,12303291,1));const T=new Mo(16777215,1);return T.position.set(3,4,5),C.add(T),u.current=w,r.current=C,()=>{h(),x.dispose(),w.material.dispose(),w.children.forEach(N=>{const P=N;P.geometry.dispose(),P.material.map?.dispose(),P.material.dispose()}),u.current=null,r.current=null}},[o,e,u,d,h]),$t.useEffect(()=>{const C=i.current;if(!C)return;const{renderer:x,camera:M}=Ao(),L=()=>{const w=C.clientWidth,U=C.clientHeight;x.setSize(w,U,!1),M.aspect=w/U,M.updateProjectionMatrix()},X=new ResizeObserver(L);X.observe(C),L(),r.current&&x.render(r.current,M),bo()&&x.getContext().finish(),C.appendChild(x.domElement);const D=()=>{l.current=requestAnimationFrame(D),r.current&&x.render(r.current,M)};return D(),()=>{x.domElement.remove(),X.disconnect(),l.current&&cancelAnimationFrame(l.current),Ro()}},[]),te.jsxs("div",{className:`stage stage--ten-sided${m?" is-dragging":""}`,onPointerDown:v,onPointerMove:E,onPointerUp:R,onPointerCancel:R,children:[te.jsx("div",{ref:i,className:"three-scene"}),te.jsx(wo,{isRolling:p,error:S,result:g})]})}const Sx=1,mm=[[.981495,.981495,.981495],[.981495,.981495,-.981495],[.981495,-.981495,.981495],[.981495,-.981495,-.981495],[-.981495,.981495,.981495],[-.981495,.981495,-.981495],[-.981495,-.981495,.981495],[-.981495,-.981495,-.981495],[0,.606598,1.588093],[0,.606598,-1.588093],[0,-.606598,1.588093],[0,-.606598,-1.588093],[.606598,1.588093,0],[.606598,-1.588093,0],[-.606598,1.588093,0],[-.606598,-1.588093,0],[1.588093,0,.606598],[1.588093,0,-.606598],[-1.588093,0,.606598],[-1.588093,0,-.606598]],gm=[[14,12,1,9,5],[4,8,0,12,14],[1,12,0,16,17],[19,18,4,14,5],[7,19,5,9,11],[11,9,1,17,3],[2,16,0,8,10],[10,8,4,18,6],[17,16,2,13,3],[7,15,6,18,19],[7,11,3,13,15],[15,13,2,10,6]],_m=[1,2,3,4,5,6,8,7,9,10,11,12],gM=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),g=new K(h/S,p/S,m/S);return g.dot(e)<0&&g.negate(),g},vm=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new K(e,i,r)},E2=o=>{const e=gm[o].map(p=>mm[p]),i=vm(e),r=gM(e,i),l=Math.abs(r.y)>.9?new K(0,0,1):new K(0,1,0),u=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),d=new K().crossVectors(u,r).normalize(),h=new Je().makeBasis(d,u,r);return{normal:r,up:u,orientation:new Ie().setFromRotationMatrix(h)}},xx=Array.from({length:_m.length},(o,e)=>E2(e)),T2=o=>{const e=new K(0,0,1),i=new Ie().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Ie().setFromAxisAngle(new K(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},b2="#ffffff",Mx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const l=new vo(i);l.colorSpace=Dn;const u=new br({map:l,transparent:!0,side:_i,depthWrite:!1});return new mn(new pa(Sx,Sx),u)};function A2({color:o="red",translucent:e=!0}){const i=$t.useRef(null),r=$t.useRef(null),l=$t.useRef(null),{meshRef:u,rotationRef:d,cancelAnimation:h,isRolling:p,isDragging:m,error:S,result:g,onPointerDown:v,onPointerMove:E,onPointerUp:R}=Do({fetchRoll:()=>To(12),resolveTarget:C=>T2(xx[_m.indexOf(C)])});return $t.useEffect(()=>{const C=new _o,x=new Qn,M=[],L=[];for(const N of gm){const P=N.map(Et=>mm[Et]),I=vm(P),F=gM(P,I),W=F.x,G=F.y,Y=F.z,[V,k,tt]=P,Q=[k[0]-V[0],k[1]-V[1],k[2]-V[2]],at=[tt[0]-V[0],tt[1]-V[1],tt[2]-V[2]],gt=Q[1]*at[2]-Q[2]*at[1],wt=Q[2]*at[0]-Q[0]*at[2],Nt=Q[0]*at[1]-Q[1]*at[0],lt=gt*I.x+wt*I.y+Nt*I.z>=0?P:[...P].reverse();for(let Et=1;Et<lt.length-1;Et++)M.push(...lt[0],...lt[Et],...lt[Et+1]),L.push(W,G,Y,W,G,Y,W,G,Y)}x.setAttribute("position",new pn(M,3)),x.setAttribute("normal",new pn(L,3));const X=ss[o],D=Co(e),w=new mn(x,new So({color:X.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:D,depthWrite:!e}));w.rotation.set(d.current.x*an,d.current.y*an,d.current.z*an);const U=new Ie().setFromAxisAngle(new K(0,1,0),Math.PI),z=()=>{xx.forEach((N,P)=>{const I=_m[P],F=Mx(I,X.label);if(!F)return;const W=vm(gm[P].map(Y=>mm[Y]));F.position.copy(W),F.position.addScaledVector(N.normal,.01),F.quaternion.copy(N.orientation),F.renderOrder=1,w.add(F);const G=Mx(I,b2);G&&(G.renderOrder=-1,G.position.copy(W),G.position.addScaledVector(N.normal,-.05),G.quaternion.copy(N.orientation).multiply(U),w.add(G))})};document.fonts.load("700 160px dice-font").then(z),C.add(w),C.add(new yo(16777215,1)),C.add(new xo(16777215,12303291,1));const T=new Mo(16777215,1);return T.position.set(3,4,5),C.add(T),u.current=w,r.current=C,()=>{h(),x.dispose(),w.material.dispose(),w.children.forEach(N=>{const P=N;P.geometry.dispose(),P.material.map?.dispose(),P.material.dispose()}),u.current=null,r.current=null}},[o,e,u,d,h]),$t.useEffect(()=>{const C=i.current;if(!C)return;const{renderer:x,camera:M}=Ao(),L=()=>{const w=C.clientWidth,U=C.clientHeight;x.setSize(w,U,!1),M.aspect=w/U,M.updateProjectionMatrix()},X=new ResizeObserver(L);X.observe(C),L(),r.current&&x.render(r.current,M),bo()&&x.getContext().finish(),C.appendChild(x.domElement);const D=()=>{l.current=requestAnimationFrame(D),r.current&&x.render(r.current,M)};return D(),()=>{x.domElement.remove(),X.disconnect(),l.current&&cancelAnimationFrame(l.current),Ro()}},[]),te.jsxs("div",{className:`stage stage--twelve-sided${m?" is-dragging":""}`,onPointerDown:v,onPointerMove:E,onPointerUp:R,onPointerCancel:R,children:[te.jsx("div",{ref:i,className:"three-scene"}),te.jsx(wo,{isRolling:p,error:S,result:g})]})}const yx=.9,Sm=[[0,.893743,1.446106],[0,.893743,-1.446106],[0,-.893743,1.446106],[0,-.893743,-1.446106],[.893743,1.446106,0],[.893743,-1.446106,0],[-.893743,1.446106,0],[-.893743,-1.446106,0],[1.446106,0,.893743],[1.446106,0,-.893743],[-1.446106,0,.893743],[-1.446106,0,-.893743]],xm=[[6,4,1],[0,4,6],[11,6,1],[1,4,9],[8,4,0],[0,6,10],[4,8,9],[11,10,6],[1,3,11],[9,3,1],[0,2,8],[10,2,0],[9,8,5],[7,10,11],[3,7,11],[9,5,3],[2,5,8],[10,7,2],[3,5,7],[7,5,2]],Mm=[1,2,3,4,5,6,7,8,9,10,12,11,13,14,16,15,18,17,19,20],_M=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),g=new K(h/S,p/S,m/S);return g.dot(e)<0&&g.negate(),g},ym=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new K(e,i,r)},R2=o=>{const e=xm[o].map(p=>Sm[p]),i=ym(e),r=_M(e,i),l=Math.abs(r.y)>.9?new K(0,0,1):new K(0,1,0),u=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),d=new K().crossVectors(u,r).normalize(),h=new Je().makeBasis(d,u,r);return{normal:r,up:u,orientation:new Ie().setFromRotationMatrix(h)}},Ex=Array.from({length:Mm.length},(o,e)=>R2(e)),C2=o=>{const e=new K(0,0,1),i=new Ie().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Ie().setFromAxisAngle(new K(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},w2="#ffffff",Tx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const l=new vo(i);l.colorSpace=Dn;const u=new br({map:l,transparent:!0,side:_i,depthWrite:!1});return new mn(new pa(yx,yx),u)};function D2({color:o="red",translucent:e=!0}){const i=$t.useRef(null),r=$t.useRef(null),l=$t.useRef(null),{meshRef:u,rotationRef:d,cancelAnimation:h,isRolling:p,isDragging:m,error:S,result:g,onPointerDown:v,onPointerMove:E,onPointerUp:R}=Do({fetchRoll:()=>To(20),resolveTarget:C=>C2(Ex[Mm.indexOf(C)])});return $t.useEffect(()=>{const C=new _o,x=new Qn,M=[],L=[];for(const N of xm){const P=N.map(Et=>Sm[Et]),I=ym(P),F=_M(P,I),W=F.x,G=F.y,Y=F.z,[V,k,tt]=P,Q=[k[0]-V[0],k[1]-V[1],k[2]-V[2]],at=[tt[0]-V[0],tt[1]-V[1],tt[2]-V[2]],gt=Q[1]*at[2]-Q[2]*at[1],wt=Q[2]*at[0]-Q[0]*at[2],Nt=Q[0]*at[1]-Q[1]*at[0],lt=gt*I.x+wt*I.y+Nt*I.z>=0?P:[...P].reverse();for(let Et=1;Et<lt.length-1;Et++)M.push(...lt[0],...lt[Et],...lt[Et+1]),L.push(W,G,Y,W,G,Y,W,G,Y)}x.setAttribute("position",new pn(M,3)),x.setAttribute("normal",new pn(L,3));const X=ss[o],D=Co(e),w=new mn(x,new So({color:X.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:D,depthWrite:!e}));w.rotation.set(d.current.x*an,d.current.y*an,d.current.z*an);const U=new Ie().setFromAxisAngle(new K(0,1,0),Math.PI),z=()=>{Ex.forEach((N,P)=>{const I=Mm[P],F=Tx(I,X.label);if(!F)return;const W=ym(xm[P].map(Y=>Sm[Y]));F.position.copy(W),F.position.addScaledVector(N.normal,.01),F.quaternion.copy(N.orientation),F.renderOrder=1,w.add(F);const G=Tx(I,w2);G&&(G.renderOrder=-1,G.position.copy(W),G.position.addScaledVector(N.normal,-.05),G.quaternion.copy(N.orientation).multiply(U),w.add(G))})};document.fonts.load("700 160px dice-font").then(z),C.add(w),C.add(new yo(16777215,1)),C.add(new xo(16777215,12303291,1));const T=new Mo(16777215,1);return T.position.set(3,4,5),C.add(T),u.current=w,r.current=C,()=>{h(),x.dispose(),w.material.dispose(),w.children.forEach(N=>{const P=N;P.geometry.dispose(),P.material.map?.dispose(),P.material.dispose()}),u.current=null,r.current=null}},[o,e,u,d,h]),$t.useEffect(()=>{const C=i.current;if(!C)return;const{renderer:x,camera:M}=Ao(),L=()=>{const w=C.clientWidth,U=C.clientHeight;x.setSize(w,U,!1),M.aspect=w/U,M.updateProjectionMatrix()},X=new ResizeObserver(L);X.observe(C),L(),r.current&&x.render(r.current,M),bo()&&x.getContext().finish(),C.appendChild(x.domElement);const D=()=>{l.current=requestAnimationFrame(D),r.current&&x.render(r.current,M)};return D(),()=>{x.domElement.remove(),X.disconnect(),l.current&&cancelAnimationFrame(l.current),Ro()}},[]),te.jsxs("div",{className:`stage stage--twenty-sided${m?" is-dragging":""}`,onPointerDown:v,onPointerMove:E,onPointerUp:R,onPointerCancel:R,children:[te.jsx("div",{ref:i,className:"three-scene"}),te.jsx(wo,{isRolling:p,error:S,result:g})]})}function N2({sides:o=6,color:e="red",translucent:i=!0}){switch(o){case 4:return te.jsx(l2,{color:e,translucent:i});case 6:return te.jsx($C,{color:e,translucent:i});case 8:return te.jsx(_2,{color:e,translucent:i});case 10:return te.jsx(y2,{color:e,translucent:i});case 12:return te.jsx(A2,{color:e,translucent:i});case 20:return te.jsx(D2,{color:e,translucent:i});default:return null}}const U2=[0,45,90,135];function L2({isOpen:o,onClick:e,ref:i}){return te.jsx("button",{ref:i,type:"button",className:"icon-button settings-button","aria-label":"Settings","aria-haspopup":"dialog","aria-expanded":o,onClick:e,children:te.jsxs("span",{className:"settings-button__cog","aria-hidden":"true",children:[U2.map(r=>te.jsx("span",{className:`settings-button__tooth settings-button__tooth--${r}`},r)),te.jsx("span",{className:"settings-button__hub"})]})})}const O2='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';function P2({sides:o,color:e,translucent:i,onSettingsChange:r,onClose:l}){const u=$t.useRef(null),d=$t.useRef(null);return $t.useEffect(()=>{d.current?.focus();const h=p=>{if(p.key==="Escape"){l();return}if(p.key!=="Tab")return;const m=u.current;if(!m)return;const S=Array.from(m.querySelectorAll(O2));if(S.length===0)return;const g=S[0],v=S[S.length-1],E=document.activeElement;if(!m.contains(E)){p.preventDefault(),(p.shiftKey?v:g).focus();return}p.shiftKey&&E===g?(p.preventDefault(),v.focus()):!p.shiftKey&&E===v&&(p.preventDefault(),g.focus())};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[l]),te.jsxs("div",{ref:u,className:"settings-dialog",role:"dialog","aria-modal":"true","aria-label":"Settings",children:[te.jsxs("div",{className:"settings-dialog__content",children:[te.jsx("fieldset",{className:"sides-picker","aria-label":"Sides",children:te.jsx("div",{className:"sides-picker__options",children:Fm.map((h,p)=>te.jsxs($t.Fragment,{children:[p>0&&te.jsx("span",{className:"sides-picker__divider","aria-hidden":"true"}),te.jsxs("span",{className:"sides-picker__option",children:[te.jsx("input",{className:"sides-picker__input",type:"radio",name:"sides",id:`sides-${h}`,value:h,checked:o===h,onChange:()=>r({sides:h})}),te.jsx("label",{className:"sides-picker__label",htmlFor:`sides-${h}`,children:h})]})]},h))})}),te.jsx("fieldset",{className:"color-picker","aria-label":"Color",children:te.jsx("div",{className:"color-picker__options",children:Bm.map(h=>te.jsxs("span",{className:"color-picker__option",children:[te.jsx("input",{className:"color-picker__input",type:"radio",name:"color",id:`color-${h}`,value:h,checked:e===h,"aria-label":h,onChange:()=>r({color:h})}),te.jsx("label",{className:"color-picker__label",htmlFor:`color-${h}`,style:{backgroundColor:`rgb(${ss[h].cssTop.join(" ")})`}})]},h))})}),te.jsxs("label",{className:"translucent-toggle",children:[te.jsx("input",{className:"translucent-toggle__input",type:"checkbox",checked:i,onChange:h=>r({translucent:h.target.checked})}),te.jsx("span",{className:"translucent-toggle__text",children:"Translucent"}),te.jsx("span",{className:"translucent-toggle__track","aria-hidden":"true",children:te.jsx("span",{className:"translucent-toggle__knob"})})]})]}),te.jsx("button",{ref:d,type:"button",className:"icon-button settings-dialog__close","aria-label":"Close",onClick:l,children:te.jsxs("span",{className:"settings-dialog__x","aria-hidden":"true",children:[te.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--45"}),te.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--135"})]})})]})}function I2(){const[o,e]=$t.useState(()=>AC()),[i,r]=$t.useState(!1),l=$t.useRef(null),u=$t.useCallback(h=>{e(p=>({...p,...h}))},[]),d=$t.useCallback(()=>{r(!1),l.current?.focus()},[]);return $t.useEffect(()=>{const h=p=>{if(i||p.ctrlKey||p.altKey||p.metaKey)return;const m=p.key.toLowerCase();m==="s"?e(S=>({...S,sides:ex(Fm,S.sides)})):m==="c"?e(S=>({...S,color:ex(Bm,S.color)})):m==="t"&&e(S=>({...S,translucent:!S.translucent}))};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[i]),te.jsxs(te.Fragment,{children:[te.jsx(L2,{ref:l,isOpen:i,onClick:()=>r(!0)}),i&&te.jsx(P2,{sides:o.sides,color:o.color,translucent:o.translucent,onSettingsChange:u,onClose:d}),te.jsx(N2,{sides:o.sides,color:o.color,translucent:o.translucent})]})}const vM=document.getElementById("root");if(!vM)throw new Error("Root element was not found.");s1.createRoot(vM).render(te.jsx($t.StrictMode,{children:te.jsx(I2,{})}));

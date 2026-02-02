var Cy=Object.defineProperty;var Sy=(n,e,t)=>e in n?Cy(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ct=(n,e,t)=>Sy(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function Mn(n){return n.renderCount=n.renderCount||0,n.varCounter=0,n.state={newer:{state:[],states:[]}},n.global={blocked:[]}}function _i(){return ue.stateConfig.support}function Ji(n){return He(n.context),ue.stateConfig.support=n}const Ve=function(){};let Be=[];const wi=[];let pt=[],ot=[],or=[];const he={locks:0};function Ry(n,e){e.textContent=n}function at(){he.locks>0||Py()}function Py(){++he.locks,Vy(),--he.locks,ky()}function ky(){Dy();const n=or;or=[];for(const e of n)e[0](...e[1])}function xy(){for(const n of wi)n[0](...n[1])}function Vy(){const n=wi.length;xy(),wi.splice(0,n);for(const e of pt)e[0](...e[1]);for(const e of ot)e[0](...e[1]);for(const e of Be)e[0](...e[1])}function Dy(){Be=[],pt=[],ot=[]}function is(n,e){wi.push([Ny,[n,e]])}function Ny(n,e){const t=n.parentNode;n||console.debug("no element by",{_caller:e,element:n}),t||console.debug("no parentNode by",{_caller:e,element:n}),t.removeChild(n)}function cn(n,e,t){n.parentNode.insertBefore(e,n)}function gt(n,e){n.appendChild(e)}const ar=typeof document=="object"&&document.createElement("div");function Oy(n){return ar.innerHTML=n,document.createTextNode(ar.innerHTML)}function Ed(n,e,t=Ve,r){const s=Oy(e);cn(n,s),t(s)}function My(n,e,t=Ve){ar.innerHTML=e;const r=document.createTextNode(ar.textContent);cn(n,r),t(r)}function Ly(n,e,t){ar.innerHTML=e;const r=document.createTextNode(ar.textContent);gt(n,r),t(r)}const Ln="";var Ti;(function(n){n.string="string",n.number="number",n.boolean="boolean",n.undefined="undefined"})(Ti||(Ti={}));var te;(function(n){n.function="function",n.date="date",n.unknown="unknown",n.object="object"})(te||(te={}));const Fy=Date.now(),G={tag:"html",dom:"dom",templater:"templater",tagComponent:"tagComponent",tagArray:"tagArray",host:"host",subscribe:"subscribe",signal:"signal",renderOnce:"renderOnce",stateRender:"stateRender",version:Fy};function bd(n){if(!n)return!1;switch(n.tagJsType){case G.dom:case G.tag:case G.templater:return!0}return!1}function ws(n){const e=n==null?void 0:n.tagJsType;return e===G.tagComponent||e===G.stateRender}function Uy(n){return Gi(n)&&typeof n.subscribe===te.function}function Tr(n){return n&&ln(n.then)}function ln(n){return typeof n===te.function}function Gi(n){return typeof n===te.object&&n!==null}function Xe(n){return Array.isArray(n)}function tc(n){const e=n.state;if(e&&e.newest&&e.newest)return e.newest;if(n.parentContext)return tc(n.parentContext)}function Ts(n){let e=n;for(;e.ownerSupport&&!ws(e.templater);)e=e.ownerSupport;const r=e.context.state;return r&&r.newest||e}function jy(...n){return n}function vd(n){const e=ue.stateConfig;return e.states[e.statesIndex]=n,++e.statesIndex,n(jy)}function By(n){const e=ue.stateConfig,t=e.statesIndex,l=Ts(e.prevSupport).context.state.older.states[t];let h=[];l(function(...m){return h=m,l.lastValues=h,m});const f=function(...m){return h};return e.states[e.statesIndex]=n,++e.statesIndex,n(f)}function Id(n){He(n);const e=ue.stateConfig;e.handlers.handler=Ad,e.handlers.statesHandler=vd,e.rearray=[];const t=e.state=[],r=e.states=[];e.statesIndex=0;const s=n.state=n.state||{};s.newer={state:t,states:r}}class Hy{}function qy(n){const[e]=n(Hy),[t]=n(e);return[e,t]}function $y(n){const e=n.callback;if(!e)return n.defaultValue;const[t]=qy(e);return t}function zy(){const n=ue.stateConfig,t=n.rearray[n.state.length];return n.state.push(t),t.defaultValue}function Ad(n){var o,c;const e=ue.stateConfig,t=yt();if(!t||!t.state){const l="State requested but TaggedJs is not currently rendering a tag or host";throw console.error(l,{config:e,context:t,function:(c=(o=e.support)==null?void 0:o.templater.wrapper)==null?void 0:c.original}),new Error(l)}const r=t.state.newer;e.state=r.state;let s=n;if(typeof n===te.function&&(s=n()),typeof s===te.function){const l=s;s=function(...f){return l(...f)},s.original=l}const i={get:function(){return $y(i)},defaultValue:s};return e.state.push(i),s}function Wy(n){const e=new X,t=r=>{const s=[],i=[],o=(p,m)=>{if(s[m]=!0,i[m]=p,s.length===n.length){for(const R of s)if(!R)return;r(i,h)}},c=[...n],h=c.shift().subscribe(p=>o(p,0)),f=c.map((p,m)=>p.subscribe(v=>o(v,m+1)));return h.subscriptions=f,h};return e.subscribeWith=t,e}function Jy(n,e){const t=n.findIndex(r=>r.callback===e);t!==-1&&n.splice(t,1)}function Gy(n,e,t){const r=X.globalSubCount$;X.globalSubCount$.next(r.value+1);const s=function(){s.unsubscribe()};return s.callback=e,s.subscriptions=[],s.unsubscribe=function(){return Ky(s,t,e)},s.add=i=>(s.subscriptions.push(i),s),s.next=i=>{e(i,s)},s}function Cd(n,e,t){const r=[...e],s=r.shift(),i=f=>{if(r.length)return Cd(f,r,t);t(f)};let o=i;const h=s(n,{setHandler:f=>o=f,next:i});o(h)}function Ky(n,e,t){Jy(e,t);const r=X.globalSubCount$;X.globalSubCount$.next(r.value-1),n.unsubscribe=()=>n;const s=n.subscriptions;for(const i of s)i.unsubscribe();return n}const Zn=class Zn{constructor(e,t){ct(this,"onSubscription");ct(this,"methods",[]);ct(this,"isSubject",!0);ct(this,"subscribers",[]);ct(this,"subscribeWith");ct(this,"value");ct(this,"set",this.next.bind(this));this.onSubscription=t,arguments.length>0&&(this.value=e)}subscribe(e){const t=Gy(this,e,this.subscribers),r=this.subscribeWith;if(r){if(this.methods.length){const s=e;e=i=>{Cd(i,this.methods,o=>s(o,t))}}return r(e)}return this.subscribers.push(t),this.onSubscription&&this.onSubscription(t),t}next(e){this.value=e,this.emit()}emit(){const e=this.value,t=this.subscribers;for(const r of t)r.callback(e,r)}toPromise(){return new Promise(e=>{this.subscribe((t,r)=>{r.unsubscribe(),e(t)})})}toCallback(e){const t=this.subscribe((r,s)=>{const i=s==null?void 0:s.unsubscribe;i?i():setTimeout(()=>t.unsubscribe(),0),e(r)});return t}pipe(...e){const t=[];"value"in this&&t.push(this.value);const r=new Zn(...t);return r.setMethods(e),r.subscribeWith=s=>this.subscribe(s),r.next=s=>this.next(s),r}setMethods(e){this.methods=e}static all(e){const t=e.map(r=>Uy(r)?r:new Zn(r,i=>(i.next(r),i)));return Wy(t)}};ct(Zn,"globalSubCount$",new Zn(0));let X=Zn;const Qy=new X(void 0,function(e){_i()||e.next()}),ue={stateConfig:{state:[],version:Date.now(),handlers:{handler:Ad,statesHandler:vd}},tagClosed$:Qy};function Yy(n,e){const r=n.templater.tag.values;for(const s of e)Xy(r,s,n);return e}function Xy(n,e,t){if(e.deleted)return;const r=e.valueIndex,s=n[r],i=e.tagJsVar;He(e),i.processUpdate(s,e,t,n),De(),e.value=s}function Sd(n,e){const t=n.context.contexts;Zy(n,e),++he.locks,Yy(n,t),--he.locks,at()}function Zy(n,e){const t=e.templater,r=e.templater.tag,s=t.values||r.values,i=n.templater.tag;i.values=s}function e_(n,e){return va(n,e)}function va(n,e){if(n===null||typeof n!==te.object||e<0)return n;if(n instanceof Date)return new Date(n);if(n instanceof RegExp)return new RegExp(n);const t=Xe(n)?[]:Object.create(Object.getPrototypeOf(n));if(Xe(n))for(let r=0;r<n.length;r++)t[r]=va(n[r],e-1);else for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=va(n[r],e-1));return t}function Rd(n,e,t){return nc(n,e,t)}function nc(n,e,t){return n===e||r_(n,e)||t<0?!0:typeof n===te.object&&typeof e===te.object?n instanceof Date&&e instanceof Date?n.getTime()===e.getTime():Xe(n)&&Xe(e)?n_(n,e,t-1):Xe(n)||Xe(e)?!1:t_(n,e,t-1):!1}function t_(n,e,t){const r=Object.keys(n),s=Object.keys(e);if(r.length===0&&s.length===0)return!0;if(r.length!==s.length)return!1;for(const i of r)if(!s.includes(i)||!nc(n[i],e[i],t-1))return!1;return!0}function n_(n,e,t){if(n.length!==e.length)return!1;for(let r=0;r<n.length;r++)if(!nc(n[r],e[r],t-1))return!1;return!0}function r_(n,e){return ln(n)&&ln(e)&&n.toString()===e.toString()}function bu(n){return n.map(rc)}function rc(n,e){const t=n,r=n==null?void 0:n.tagJsType;if(r)switch(r){case G.signal:case G.subscribe:case G.stateRender:return;case G.dom:case G.tag:case G.templater:return bu(t.values)}return Xe(n)?bu(t):e_(n,e)}function Pd(n,e){const t=n.length;for(let r=0;r<t;++r){const s=n[r],i=e[r];if(Xe(s)&&Xe(i)){if(s===i)continue;return 3}if(!(typeof s===te.function&&typeof i===te.function)){if(typeof s===te.object){if(!s&&!i)continue;if(typeof e===te.object){const o=Object.entries(s);for(const c of o)if(!s_(c,i))return 3.1}continue}if(s!==i)return 3.3}}return!1}function s_([n,e],t){const r=t[n];return typeof e===te.function&&typeof r===te.function?!0:r===e}function kd(n,e){const t=n.context.providers;if(t)for(const r of t)for(let s=r.children.length-1;s>=0;--s)r.children[s].context.global===e&&r.children.splice(s,1);n.context.destroy$.next(),n.context.renderCount=0}function Ia(n,e){for(const t of n){const r=t.lastArray;if(r){Ia(r,e);continue}const s=t.value;if((s==null?void 0:s.tagJsType)===G.subscribe){s.destroy(t,e),t.deleted=!0;continue}const i=t.global;if(!i)continue;const o=t.state.newest,c=i.subscriptions;c&&c.forEach(Vd),ws(o.templater)&&kd(o,i);const l=t.contexts;Ia(l,o),i.deleted=!0}}function xd(n,e=[],t=[]){for(const r of n){const s=r.global;if(!s)continue;const i=r.state.newest;if(i){e.push(i);const c=s.subscriptions;c&&t.push(...c)}const o=r.contexts;o&&xd(o,e,t)}return{tags:e,subs:t}}function Vd(n){n.unsubscribe()}function Fn(n,e,t){const r=e.tagJsVar.tagJsType;return r&&["tag-conversion","element"].includes(r)?(e.tagJsVar.processUpdate(n,e,t,[]),e.value=n,0):n===e.value?0:(++e.updateCount,no(e,n,t))}function Dd(n,e,t,r,s){const i=e.context;if(i.locked=3,t.target=t.target||r,He(t),t.inputsHandler){const o=e.propsConfig;t.inputsHandler(o)}t.tagJsVar.processInit(n,t,e,s,r),De(),t.value=n,delete i.locked}function Ki(n){switch(n){case void 0:case!1:case null:return Ln}return n}function i_(n,e){const t=Ki(n);if(e.paint){e.paint[1][1]=t;return}const r=e.simpleValueElm;pt.push([Ry,[t,r]])}function o_(n,e){e.value=n,e.oldTagJsVar=e.tagJsVar,e.tagJsVar=Ld(n);const t=e.placeholder,r=Ki(n),s=e.paint=[Ed,[t,r,function(o){e.simpleValueElm=o,delete e.paint},"processNowRegularValue"]];Be.push(s)}function Es(n){if(n.startsWith("class."))return"class";const e=a_(n);return e!==!1?e:n.startsWith("style.")?"style":!1}function a_(n){switch(n){case"autoselect":case"autoSelect":return"autoselect";case"autofocus":case"autoFocus":return"autofocus"}return!1}function Nd(n,e,t,r){switch(r){case"autofocus":or.push([f_,[t]]);return;case"autoselect":or.push([d_,[t]]);return;case"style":{const s=n.split(".");pt.push([c_,[t,s,e]]);return}case"class":l_(n,e,t);return}throw new Error(`Invalid special attribute of ${r}. ${n}`)}function c_(n,e,t){const r=e[1];n.style[r]=t,n.style.setProperty(r,t)}function l_(n,e,t){const r=n.split(".");if(r.shift(),e){for(const s of r)pt.push([u_,[t,s]]);return}for(const s of r)pt.push([h_,[t,s]])}function u_(n,e){n.classList.add(e)}function h_(n,e){n.classList.remove(e)}function d_(n){n.select()}function f_(n){n.focus()}function p_(n,e,t){typeof n[e]!="object"&&(n[e]={});for(const r in t){const s=t[r];pt.push([y_,[n,e,r,s]])}if(n[e].setProperty)for(const r in t){const s=t[r];pt.push([m_,[n,e,r,s]])}}function g_(n,e,t){n.setAttribute(e,"")}function un(n,e,t){if(Gi(t))return p_(n,e,t);Od(n,e,t)}function ea(n,e,t){t?n[e]=!0:n[e]=!1}function Od(n,e,t){if(n[e]=t,t===void 0||t===!1||t===null){n.removeAttribute(e);return}n.setAttribute(e,t)}function m_(n,e,t,r){n[e].setProperty(t,r)}function y_(n,e,t,r){n[e][t]=r}function __(n,e,t,r,s){const i=n(),o={component:!1,tagJsType:"dynamic-attr",matchesInjection:h=>{const f=c.tagJsVar;if(f.matchesInjection)return f.matchesInjection(h,c)},hasValueChanged:(h,f,p)=>{const m=n();return c.tagJsVar.hasValueChanged(m,c,p)},processInit:Ve,processInitAttribute:Ve,destroy:(h,f)=>{c.tagJsVar.destroy(c,f)},processUpdate:(h,f,p,m)=>{++f.updateCount;const v=h();c.tagJsVar.processUpdate(v,c,p,m),c.value=v}},c={updateCount:0,isAttr:!0,target:r,parentContext:e,value:i,tagJsVar:Un(i),valueIndex:-1,withinOwnerElement:!0,destroy$:new X,render$:new X},l={updateCount:0,isAttr:!0,contexts:[c],target:r,parentContext:e,value:n,tagJsVar:o,valueIndex:-1,withinOwnerElement:!0,destroy$:new X,render$:new X};return c.tagJsVar.processInitAttribute(t,i,r,c.tagJsVar,c,{},s),l}function w_(n,e,t,r,s,i,o){return t.target=r,t.howToSet=s,t.attrName=n,t.isSpecial=o,e!=null&&e.tagJsType?T_(n,e,t,i,r):Qi(n,e,r,s,o,t)}function T_(n,e,t,r,s){e.processInitAttribute(n,e,s,e,t,r,un),t.tagJsVar=e}function Qi(n,e,t,r,s,i){if(typeof e=="function")return __(e,i,n,t,r);if(s)return Nd(n,e,t,s);r(t,n,e)}function Md(n,e,t,r,s,i){const o=e.tagJsVar,c=n;if(o.hasValueChanged(c,e,t)>0){o.destroy(e,t),r.removeAttribute(s);const h=Un(n);h.isAttr=!0,h.processInitAttribute(s,n,r,h,e,t,i),e.tagJsVar=h;return}}function E_(n,e,t,r,s,i,o){r.destroy=b_,r.hasValueChanged=A_,r.processUpdate=(l,h,f)=>Md(l,h,f,t,n,o);const c=Es(n);Qi(n,e,t,o,c,s),s.tagJsVar=r}function b_(n){const e=n.target,t=n.attrName;e.removeAttribute(t)}function Ld(n){return{component:!1,tagJsType:"simple",value:n,processInitAttribute:E_,processInit:I_,destroy:Fd,hasValueChanged:C_,processUpdate:v_}}function v_(n,e,t){return n===e.value?0:no(e,n,t)}function I_(n,e,t,r,s){const i=Ki(n);r=e.placeholder;const o=e.paint=[Ed,[r,i,function(l){e.simpleValueElm=l,delete e.paint},"processSimpleValueInit"]];Be.push(o)}function Fd(n){if(!n.simpleValueElm&&n.paint){n.paint[0]=Ve;return}const e=n.simpleValueElm;delete n.simpleValueElm,is(e,"deleteSimpleValue")}function A_(n,e){return n==null||n===e.value?0:6}function C_(n,e){return n==null||typeof n!==te.object?(i_(n,e),0):(Fd(e),6)}function S_(n,e){return Xe(n)?0:(Bd(e),9)}function Ud(n){return{component:!1,tagJsType:"array",value:n,processInitAttribute:Ve,processInit:P_,processUpdate:R_,hasValueChanged:S_,destroy:Bd}}function R_(n,e,t){if(++e.updateCount,Array.isArray(n)){Ei(e,n,t);return}Fn(n,e,t)===0&&Ei(e,n,t)}function P_(n,e,t,r,s){Ei(e,n,t,s)}function Un(n){return(n==null?void 0:n.tagJsType)?n:k_(n)}function k_(n){return Xe(n)?Ud(n):Ld(n)}function bs(n,e,t,r){return{updateCount:0,value:n,destroy$:new X,render$:new X,tagJsVar:Un(n),withinOwnerElement:t,parentContext:r,valueIndex:r.varCounter}}function x_(n,e,t,r){const s=bs(n,e,t,r);return e.push(s),++r.varCounter,s}function sc(n,e,t,r,s){const i=document.createTextNode(Ln),o=bs(n,t,!0,e.context);return o.withinOwnerElement=!1,o.placeholder=i,s||(o.placeholder=r),Dd(n,e,o,s,r),s&&ot.push([gt,[s,i]]),o}function Ei(n,e,t,r){const s=n.lastArray===void 0;s&&(n.lastArray=[]);const i=n.lastArray;let o=n.placeholder,c=0;const l=[];if(!s){for(let f=0;f<i.length;++f){const p=i[f];if(p.value===null){l.push(p);continue}const m=N_(e,f,i,c);if(m===0){l.push(p);continue}if(m===2){f=f-1;continue}c=c+m}n.lastArray=l}const h=e.length;for(let f=0;f<h;++f)o=V_(e,f,n.lastArray,t,o,r).placeholder}function V_(n,e,t,r,s,i){const o=jd(n[e]),c=t[e];if(c)return D_(o,c,t,r,e,s,i);const l=sc(o,r,t,s,i);return t.push(l),o&&(l.arrayValue=(o==null?void 0:o.arrayValue)||l.arrayValue||e),l}function D_(n,e,t,r,s,i,o){if(t.length>s)return Array.isArray(n)?(e.tagJsVar.processUpdate(n,e,r,[]),e.value=n,e):(Fn(n,e,r),e);const l=sc(n,r,t,i,o);return t.push(l),l}function jd(n){return typeof n=="function"&&n.tagJsType===void 0&&(n=n()),n}function N_(n,e,t,r){const s=n.length-1,i=e-r,o=i<0||s<i,c=t[e];if(o)return ic(c),1;c.arrayValue===void 0&&(c.arrayValue=e);const l=c.arrayValue,h=jd(n[e]);return O_(l,h,c,t,e)}function O_(n,e,t,r,s){const i=e.arrayValue||s;return n!==i?(ic(t),r.splice(s,1),2):0}function ic(n){const e=n.global;M_(e,n)}function M_(n,e){var t;if(n&&((t=e.state)!=null&&t.oldest)){const r=e.state.oldest;Er(r,n);return}e.tagJsVar.destroy(e,{})}function Bd(n){++n.updateCount;const e=n.lastArray;Hd(n,e)}function Hd(n,e){for(let t=0;t<e.length;++t)ic(e[t]);delete n.lastArray}function os(n){for(let e=n.length-1;e>=0;--e){const t=n[e];L_(t),n.splice(e,1)}}function L_(n){const e=n.marker;e&&is(e,"destroyMarker");const t=n.domElement;is(t,"destroyClone")}function oc(n,e){const t=n.contexts;F_(t,e),os(n.htmlDomMeta)}function F_(n,e){var t;for(const r of n){if(r.withinOwnerElement){const l=r.tagJsVar;if(l&&l.tagJsType==="host"){const h=r.supportOwner,f=l.destroy(r,h);Tr(f)&&e.push(f)}continue}const s=r.lastArray;if(s){Hd(r,s);continue}const i=r.simpleValueElm;if(i){delete r.simpleValueElm,is(i,"smartRemoveByContext");continue}const o=r.global;if(o===void 0)continue;if(o.deleted=!0,(t=r.state)==null?void 0:t.oldest){oc(r,e);continue}}}function Er(n,e){const t=n.context;e.deleted=!0,t.renderCount=0;const r=[],s=t.contexts;return Ia(s,n),n.templater.wrapper&&kd(n,e),oc(t,r),delete t.state,delete t.contexts,delete t.returnValue,delete t.providers,r}function Yi(n,e){var r;const t=vu(n,e);return!t&&((r=e.templater.tag)!=null&&r._innerHTML)&&vu(n.outerHTML,e)?!0:t}function vu(n,e){const t=n.templater,r=e.templater,s=(t==null?void 0:t.tag)||n,i=r.tag;if((t==null?void 0:t.tagJsType)===G.stateRender)return t.dom===r.dom;switch(s.tagJsType){case G.dom:return(i==null?void 0:i.tagJsType)!==G.dom?!1:U_(s,i);case G.tag:return j_(s,i,n,e)}throw new Error(`unknown tagJsType of ${s.tagJsType}`)}function U_(n,e){const t=n.dom,r=e.dom;return t===r}function j_(n,e,t,r){const s=n.strings,i=e.strings;if(s.length!==i.length||!s.every((h,f)=>i[f].length===h.length))return!1;const c=t.templater.values||n.values,l=r.templater.values||e.values;return B_(c,l)}function B_(n,e){return n.length===e.length?!!e.every(function(i,o){const c=n[o];return typeof i===te.function&&typeof c===te.function?i.toString()===c.toString():!0}):!1}function vs(n){++n.updateCount;const e=n.global,r=n.state.newest;delete n.inputsHandler,delete n.updatesHandler,Er(r,e),H_(n)}function H_(n){n.htmlDomMeta=[],delete n.contexts,delete n.state,delete n.global,n.renderCount=0}function q_(n,e){var o,c,l;const t=(o=e.state)==null?void 0:o.newest,r=bd(n),s=n;return r?Yi(s,t)?0:7:(n==null?void 0:n.tagJsType)?((c=n.wrapper)==null?void 0:c.original)===((l=e.value.wrapper)==null?void 0:l.original)?0:88:8}function Xi(n,e){var c;const t=e.global,r=(c=e.state)==null?void 0:c.newest,s=bd(n),i=n;if(s)return Yi(i,r)?(Ca(e,n,r),0):(Er(r,t),Mn(e),7);if(n==null?void 0:n.tagJsType){const f=e.state.newest.ownerSupport;return Ca(e,n,f)===!0?0:88}return vs(e),8}function $_(n,e,t,r,s,i,o){const c=document.createTextNode(Ln),l=s>0,h=x_(n,e,l,r);return h.placeholder=c,h.target=i,i?ot.push([gt,[i,c]]):Be.push([cn,[o,c,"attachDynamicDom.attachDynamicDom"]]),Dd(n,t,h,i,o),h}function z_(n,e){return W_(n,e)}function W_(n,e,t=[]){const r=n.context;t.push({support:n,renderCount:r.renderCount,provider:e});const s=e.children;for(let i=s.length-1;i>=0;--i){const o=s[i],c=o.context;t.push({support:o,renderCount:c.renderCount,provider:e})}return t}function J_(n){const t=n.context.providers;if(!t)return[];const r=[];for(const s of t){const i=s.owner,o=z_(i,s);r.push(...o.map(G_))}return r}function G_(n){return n.support}function K_(n){const e=n.context;return uc(n.templater)?Wd(n):zd(n,n,e)}function ac(n,e,t){return n}function Q_(n){return typeof n!==te.object||!n||n.tagJsType}function Y_(n,e,t,r,s,i){var c;const o=Object.keys(n);for(const l of o){const h=n[l],f=e[l],p=cc(f,h,t,r,i,s+1);h===p||(c=Object.getOwnPropertyDescriptor(n,l))!=null&&c.set||(n[l]=p)}return n}function X_(n,e,t,r,s,i){for(let o=n.length-1;o>=0;--o){const c=n[o],l=e[o];n[o]=cc(l,c,t,r,i,s+1)}return n}function cc(n,e,t,r,s,i){return n==null||i>s?e:typeof n===te.function?e.mem?(n.mem=e.mem,e):(n.mem=e,n):Q_(e)?e:Xe(e)?X_(e,n,t,r,i,s):Y_(e,n,t,r,i,s)}function Z_(n,e,t){var m;const r=t.global,s=t.state.newest,i=s.templater.wrapper;let o=e.templater.wrapper,c=!1;const l=e.templater.tagJsType,h=G.stateRender===l||G.renderOnce===l;if(h)c=e.templater.tagJsType===G.renderOnce||Yi(s,e);else if(i&&o){((m=s.templater.tag)==null?void 0:m._innerHTML)&&(o=e.outerHTML);const R=i.original,V=o.original;c=R===V}const f=e.templater;if(!c){nw(t,f,n);return}if(h||UT(s,f)){if(t.locked){r.blocked.push(e);return}as(e),++t.renderCount}}function ew(n,e,t,r,s,i=-1){const o=e.context;if(!o.global||!o.state.newest){const v=ac(r);r.push(...v);const R=n.propsConfig;return R.castProps=v,r}e=o.state.newest||e;const f=e.propsConfig.castProps,p=[];for(let v=0;v<r.length;++v){const R=r[v],V=f[v],P=cc(V,R,n,t,s,i+1);p.push(P)}const m=n.propsConfig;return m.castProps=p,p}function tw(n,e){const t=n.context,r=t.global;let s=-1;const i=t.providers=t.providers||[],o=i.length-1;for(;s++<o;){const c=i[s];let l=-1;const h=c.children.length-1;for(;l++<h;){const f=c.children[l];if(r===f.context.global){c.children.splice(l,1),c.children.push(e);return}}}}function nw(n,e,t){const r=n.global,s=n.state.oldest;Er(s,r),Mn(n),e.processInit(e,n,t,n.placeholder)}function Aa(n){const e=n.context,t=e.global,{subs:r,tags:s}=xd(e.contexts);Iu(e);for(const o of s){if(o.context.global.deleted===!0)return;Iu(o.context)}t.subscriptions&&r.forEach(Vd),Mn(e)}function Iu(n){n.global.deleted=!0,oc(n,[]),delete n.contexts}function qd(n,e,t,r){const s=e.original,i=n.tagJsType===G.stateRender,o=ue.stateConfig;Ji(t);let c;i?c=n():(c=s(...r),typeof c===te.function&&c.tagJsType===void 0&&(c=c()));const l=t.context;return c||console.log("bad tag",{context:l,result:e,templater:n,originalFunction:s}),l.returnValue=c,t.returnValue=c,c.templater=n,n.tag=c,l.state.newer={...o},l.inputsHandler&&l.inputsHandler(r),De(),t}function rw(n,e){const t=n.context;++t.renderCount,sw(n.context),ue.tagClosed$.next(e)}function sw(n){iw(n),ow()}function iw(n){const e=ue.stateConfig,t=n||e.context;t.state=t.state||{},t.state.newer={...e};const r=e.support;t.state.newest=r}function ow(){const n=ue.stateConfig;delete n.prevSupport,delete n.support,delete n.state,delete n.states,De()}function $d(n,e,t,r){let s;const i=n.templater;if(i.tagJsType===G.stateRender){const o=i;s=As(i,t,r,n.appSupport),qd(i,o,s)}else{const o=i.wrapper;s=o(n,t,e)}return rw(s,r),s.ownerSupport=n.ownerSupport,s}function aw(n){const e=ue.stateConfig;return e.rearray=n,e.state=[],e.states=[],e.statesIndex=0,e.handlers.handler=zy,e.handlers.statesHandler=By,e}function cw(n,e,t){aw(t);const r=ue.stateConfig;r.prevSupport=e,Ji(n)}function lw(n,e,t,r){const i=t.state.older.state;return cw(n,e,i),$d(n,e,t,r)}function lc(n,e,t,r){Id(n.context),Ji(n);const s=$d(n,e,t,r);return De(),s}function uw(n){var r;const e=n==null?void 0:n.context,t=e==null?void 0:e.state;return(r=t==null?void 0:t.older)==null?void 0:r.state}function hw(n,e,t){let r;uw(e)?r=lw(n,e,t):r=lc(n,e,t);const i=!e||Yi(e,r);if(i){if(e){const o=e.templater.tag;if(o&&t.renderCount>0){const c=e==null?void 0:e.templater,l=c==null?void 0:c.tag;dw(o,e,l)}}}else{tw(e,r),Aa(e);const o=r.context;o.state.oldest=r,o.state.newest=r}return r.ownerSupport=n.ownerSupport,{support:r,wasLikeTags:i}}function dw(n,e,t){if(n.tagJsType===G.dom){const r=t==null?void 0:t.dom,s=n.dom;r!==s&&Aa(e);return}if(t){const r=t.strings;if(r){const s=r==null?void 0:r.length,i=n.strings.length;s!==i&&Aa(e)}}}function zd(n,e,t){const r=hw(e,n,t);if(r.wasLikeTags){const s=t.state.oldest;return Sd(s,r.support),r.support}return ff(e,t)}function uc(n){return G.templater===n.tagJsType}function as(n){const e=n.context,t=e.global,r=n.templater,s=uc(r);if(e.locked)return t.blocked.push(n),n;if(s)return Wd(n);e.locked=4,t.blocked.length&&(n=t.blocked.pop(),t.blocked=[]);const i=zd(e.state.newest,n,e);return delete e.locked,i}function Wd(n){const r=Ts(n).context.state.newest;return as(r)}function fw(n,e){const t=e.context.global;return t&&t.deleted?!1:!!pw(n,e)}function pw(n,e){const t=n.props,s=e.propsConfig.latest;if(Jd(t,s))return!0;switch(n.propWatch){case Je.IMMUTABLE:return Pf(t,s);case Je.SHALLOW:return Pd(t,s)}return!Rd(t,s,eo)}function Jd(n,e){const t=n.length,r=e.length;return t!==r}function bi(n,e=[]){const t=n.context,r=n.templater,s=uc(r),i=n.ownerSupport;if(t.locked)return e.push(n),e;if(s)return bi(i,e);const o=n.context.global;if(o&&o.deleted===!0)return e;const c=n,l=ws(c.templater),h=n.templater.tagJsType,p=i&&h!==G.stateRender&&(!l||fw(c.templater,c));if(c.context.providers){const v=J_(c);e.push(...v)}return p?(bi(i,e),l&&e.push(c),e):(e.push(c),e)}function hc(n){++he.locks,n.forEach(gw),--he.locks,at()}function gw(n){const e=n.context;if(!e.global){e.tagJsVar.processUpdate(e.value,e,n.ownerSupport,[]);return}const r=e.state;as(r.newest)}function Gd(n,e,{resolvePromise:t,resolveValue:r}){return Tr(n)?n.then(mw(e,t)):r(n)}function mw(n,e){return t=>{const r=n.context,s=r.global;if(r.deleted===!0||(s==null?void 0:s.deleted)===!0)return e(t);const i=bi(n);return hc(i),e(t)}}function yw(n,e){const t=e.context.global,r=function(i,o){if(t.deleted!==!0)return _w(r.tagFunction,r.support,i,o)};return r.tagFunction=n,r.support=e,r}function _w(n,e,t,r){const s=Ts(e),i=s.context;i.locked=1;const o=n.apply(t,r);return delete i.locked,Kd(o,s)}function Kd(n,e){const t=e.context.global;if(t!=null&&t.deleted)return;const r=bi(e);return hc(r),Gd(n,e,{resolvePromise:Ew,resolveValue:bw})}const ww="no-data-ever",Tw="promise-no-data-ever";function Ew(){return Tw}function bw(){return ww}function Qd(n,e,t){const r=t[e];if(r){let i=!1;if(n.originalStopPropagation=n.stopPropagation,n.stopPropagation=function(){i=!0,n.originalStopPropagation.call(n),n.stopPropagation=n.originalStopPropagation,delete n.originalStopPropagation},r(n),n.defaultPrevented||i)return}const s=t.parentNode;s&&Qd(n,e,s)}function Yd(n,e,t,r){const s=n.appElement,i=vw(e);e==="blur"&&(e="focusout");const c=n.context.events;if(!c[e]){const l=function(f){Qd(f,i,f.target)};c[e]=l,s.addEventListener(e,l)}t[i]=r,t[e]=r}function vw(n){return n==="blur"&&(n="focusout"),"_"+n}function Xd(n,e,t,r){const s=function(...i){return s.tagFunction(n,i)};s.tagFunction=e,s.support=t,Yd(t.appSupport,r,n,s)}function Zd(n){return n==null||n===!1}function ef(n,e,t,r,s,i,o){if(Zd(e))return;const c=[];if(typeof e===te.object){for(const l in e){const h=Es(l),f=e[l],m=rf(l,f,n,t,r,un,i,o,h);m!==void 0&&(Array.isArray(m)?c.push(...m):c.push(m))}return c}e.length!==0&&s(t,e,Ln)}function Iw(n,e,t,r,s,i,o,c){if(t){if(Zd(e)||e===""){r.removeAttribute(t);return}if(typeof t===te.object)if(typeof e===te.object)for(const f in t)f in e||pt.push([Au,[r,f]]);else for(const f in t)pt.push([Au,[r,f]])}const l=ef(n,e,r,s,i,o,c);l&&o.push(...l)}function Au(n,e){n.removeAttribute(e)}function tf(n,e,t,r){const s=e,i=n;if(i!=null&&i.tagJsType){const c=e.value;if(!(c!=null&&c.tagJsType)){i.isAttr=!0,He(e),i.processInitAttribute(s.attrName,n,s.target,i,s,t,un),De(),s.tagJsVar=i;return}c.hasValueChanged(i,e,t);return}if(s.isNameOnly){Iw(r,n,s.value,s.target,t,s.howToSet,[],s.parentContext),s.value=n;return}const o=s.target;Pw(n,s.attrName,s,o,t,s.howToSet,s.isSpecial),e.value=n}const Te=":tagvar",mt=":",vi=new RegExp(Te+"(\\d+)"+mt,"g");function nf(n){return n.search&&n.startsWith(Te)?n.search(vi):-1}function Aw(n,e,t,r,s,i,o){const c=r.length,l=[];e.forEach(f=>{if(nf(f)>=0){const m=r.length,v=Un(f),R={updateCount:0,isAttr:!0,target:t,attrName:n,withinOwnerElement:!0,tagJsVar:v,valueIndex:o.varCounter,parentContext:o,destroy$:new X,render$:new X};v.processUpdate=function(N,U,J,Ae){++U.updateCount,h(Ae)};const V=i[m];R.value=V,l.push(R),++o.varCounter}});function h(f){const p=Cw(e,f,c).join("");s(t,n,p)}return h(i),l}function Cw(n,e,t){return n.reduce((r,s)=>{if(nf(s)>=0){const o=t++,c=e[o];return r.push(c),r}return r.push(s),r},[])}function Sw(n,e,t,r,s,i,o,c,l){if(typeof e===te.function)return++s.varCounter,of(e,o,n,t);const h=Un(e),f={updateCount:0,isAttr:!0,target:t,attrName:n,howToSet:i,value:e,withinOwnerElement:!0,tagJsVar:h,destroy$:new X,render$:new X,valueIndex:l,parentContext:s};return r.push(f),h.processUpdate=tf,w_(n,e,f,t,i,o,c),f.value=e,f}function Cu(n){return Gi(n)&&"TagJsTag"in n?n.tagJsVar:-1}function Rw(n,e,t,r,s,i,o,c,l){const h=bs(n,e||[],!0,t);return h.target=c,h.valueIndex=s,h.isAttr=!0,h.isNameOnly=l,h.stateOwner=Ts(i),h.supportOwner=i,He(h),r.processInitAttribute(o,n,c,r,h,i,un),De(),h.oldTagJsVar=h.tagJsVar,h.tagJsVar=r,h}function rf(n,e,t,r,s,i,o,c,l){const h=Cu(n);let f=h>=0||e===void 0&&typeof n!="string",p=t[h];e!=null&&e.tagJsType?p=e:n!=null&&n.tagJsType&&(f=!0,p=n,e=n);const m=p;if(m!=null&&m.tagJsType)return Rw(e,[],c,m,h,s,n,r,f);if(f){h===-1&&f&&(p=n);const R=bs(p,[],!0,c);R.valueIndex=h,R.isAttr=!0,R.target=r,R.isNameOnly=!0,R.howToSet=i;const V=R.tagJsVar;V.processUpdate=tf;const P=ef(t,p,r,s,i,o,c);return P&&o.push(...P),R}if(Array.isArray(e))return Aw(n,e,r,[],i,t,s.context);const v=Cu(e);if(v>=0){const R=t[v];return Sw(n,R,r,[],c,i,s,l,v)}return Qi(n,e,r,i,l,c)}function Pw(n,e,t,r,s,i,o){return ln(n)?kw(s,n,r,e,o,i):sf(n,r,e,o,i,s)}function sf(n,e,t,r,s,i){if(r!==!1){Nd(t,n,e,r);return}switch(n){case void 0:case!1:case null:pt.push([xw,[e,t]]);return}if(ln(n))return Xd(e,n,i,t);s(e,t,n)}function kw(n,e,t,r,s,i,o){var f;const c=n.templater.wrapper;return((c==null?void 0:c.tagJsType)||((f=c==null?void 0:c.original)==null?void 0:f.tagJsType))===G.renderOnce?sf(e,t,r,s,i,n):of(e,n,r,t)}function of(n,e,t,r){return n=yw(n,e),Xd(r,n,e,t)}function xw(n,e){n.removeAttribute(e)}function af(n,e,t,r,s){for(const i of n){const o=i[0],c=i[1],l=i[2]||!1;let h=i.length>1?un:g_;i[3]&&(h=i[3]);const f=s.contexts,p=rf(o,c,e,t,r,h,f,s,l)||void 0;typeof p=="object"&&(f.push(p),++s.varCounter)}}function Vw(n,e,t,r,s,i,o){e.at&&af(e.at,t,n,r,s),i?ot.push([gt,[i,n,"appendToAttachDomElement"]]):Be.push([cn,[o,n,"insertBeforeAttachDomElement"]])}function cf(n,e,t,r,s,i,o){const c=t.context,l=c.contexts;r=c;const h=[];i&&o===void 0&&(o=document.createTextNode(Ln),ot.push([gt,[i,o]]),i=void 0);for(let f=0;f<n.length;++f){const p=n[f],m=p.v;if(!isNaN(m)){const N=Number(m),U=e[N];if(ln(U)&&U.tagJsType===void 0){++r.varCounter;continue}const Ae=$_(U,l,t,r,s,i,o);Ae.valueIndex=N;continue}const R={};if(h.push(R),p.nn==="text"){Dw(R,p,i,o);continue}const V=R.domElement=document.createElement(p.nn),P={updateCount:0,isAttrs:!0,target:V,parentContext:r,contexts:[],destroy$:new X,render$:new X,tagJsVar:{tagJsType:"new-parent-context"},valueIndex:-1,withinOwnerElement:!0};P.varCounter=0,Vw(V,p,e,t,P,i,o),P.target=V,p.ch&&(R.ch=cf(p.ch,e,t,P,s+1,V,o).dom)}return{dom:h,contexts:l}}function Dw(n,e,t,r){const s=n,i=s.tc=e.tc;if(t){ot.push([Ly,[t,i,function(c){s.domElement=c}]]);return}Be.push([My,[r,i,function(c){s.domElement=c}]])}const lf=/(:tagvar\d+:)/,Su="ondoubleclick",Nw=/([:_a-zA-Z0-9\-.]+)\s*(?:=\s*"([^"]*)"|=\s*(\S+))?/g,Ow=/<\/?([a-zA-Z0-9-]+)((?:\s+[a-zA-Z_:*][\w:.-]*(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?)+\s*|\s*)\/?>/g;function Mw(n){const e=[],t=[],r=[];let s=null,i=-1,o=0;const c=new RegExp(Ow,"g");for(n=Fw(n);o<n.length;){const l=c.exec(n);if(!l)break;const[h,f,p]=l,m=h.startsWith("</"),v=h.endsWith("/>");if(o<l.index){const N=n.slice(o,l.index);if(N.trim()){const U=Pu(N);for(let J of U)J.startsWith(Te)&&J.search(lf)>=0&&J.search(hf)===-1&&(J=Te+ ++i+mt),Ru(s,t,J)}}if(o=l.index+h.length,m){s=r.pop()||null;continue}const R=[];let V;for(;(V=Nw.exec(p))!==null;)i=qw(V,i,e,R);const P={nn:f};R.length&&(P.at=R),s?(s.ch||(s.ch=[]),s.ch.push(P)):t.push(P),v||(r.push(s),s=P)}if(o<n.length){const l=n.slice(o);if(l.trim()){const h=Pu(l);for(const f of h)f.startsWith(Te)&&++i,Ru(s,t,f)}}return t}const Lw=new RegExp("(<!--[\\s\\S]*?-->)","g");function Fw(n){return n.replace(Lw,function(e){return e.replace(/\[l t\]/g,"[l&nbsp;t]").replace(/\[g t\]/g,"[g&nbsp;t]").replace(/</g,"[l t]").replace(/>/g,"[g t]")})}function Uw(n){return n.startsWith("on")?n.length===Su.length&&n===Su?"dblclick":n.slice(2,n.length):n}function Ru(n,e,t){const r={nn:"text",tc:jw(t)};Bw(n,e,r)}function jw(n){return n.replace(/(\[l t\]!--[\s\S]*?--\[g t\])/g,function(e){return e.replace(/\[l t\]/g,"<").replace(/\[g t\]/g,">").replace(/\[l&nbsp;t\]/g,"[l t]").replace(/\[g&nbsp;t\]/g,"[g t]")})}function Bw(n,e,t){n?(n.ch||(n.ch=[]),n.ch.push(t)):e.push(t)}function Pu(n){return n.split(lf).filter(Hw)}function Hw(n){return n!==""}function qw(n,e,t,r){const s=n[1]||n[3]||n[5];let o=n[2]||n[4]||n[6];if(s===void 0)return e;const c=n[2]!=="",l=o===void 0&&c,h=s.toLowerCase(),f=h.startsWith("on")?Uw(h):h;if(l){if(s.slice(0,Te.length)===Te){const J=Te+ ++e+mt;return t.push(["at",J]),r.push([J]),e}if(n[0].startsWith(s)&&n[0].slice(s.length,n[0].length).search(/\s+$/)>=0)return r.push([f]),e;const N=n[3];if(N.search(hf)>=0){o=N;const J=[f,o];return r.push(J),e}else o=Te+ ++e+mt}c||(o=n[2]);const p=o.split(zw).filter(R=>R.length>0);p.length>1&&(o=p,p.forEach(R=>{R.search(vi)>=0&&++e}));const m=[f,o],v=Es(h);return v&&m.push(v),f==="style"?(r.unshift(m),e):(r.push(m),e)}const $w=new RegExp(Te+"(\\d+)"+mt,"gi"),zw=new RegExp("("+Te+"\\d+"+mt+")","gi"),uf=Te.slice(0,Te.length-1),hf=new RegExp(uf+"&#x72;(\\d+)"+mt,"gi"),Ww=uf+"&#x72;$1"+mt;function Jw(n,e){const t=Gw(n,e).join("");return Mw(t)}function Gw(n,e){return Kw(n,e)}function Kw(n,e){const t=[];for(let r=0;r<n.length;++r){const i=n[r].replace($w,Ww);if(r<e.length){t.push(i+Te+r+mt);continue}t.push(i)}return Qw(t,n,e),t}function Qw(n,e,t){const r=t.length-e.length;if(r>0)for(let s=r;s>0;--s)n.push(Te+(e.length+s-1)+mt)}const Yw="ch";function df(n,e,t=[],r=[]){const s=n;for(let i=0;i<s.length;i++){const o=[...r,i],c=s[i];if(c.at){const l=c.at;c.at=Zw(l,e)}if(c.ch){const l=c.ch,h=[...o,Yw];c.ch=df(l,e,t,h)}i=Xw(c,e,s,i)}return s}function Xw(n,e,t,r){if(n.nn!=="text")return r;const s=n;let i=s.tc;if(typeof i!==Ti.string)return r;let o;for(;(o=vi.exec(i))!==null;){const c=o[1],l=parseInt(c,10);if(!isNaN(l)&&l<e){const f=Te+l+mt,p=i.slice(o.index+f.length);t.splice(r,1,{nn:"text",v:l}),i=p,vi.lastIndex=0}}return s.tc=i,r}function Zw(n,e){const t=[];for(const r of n){const[s,i,o]=r;if(s.startsWith(Te)){const c=parseInt(s.replace(Te,""),10);if(!isNaN(c)&&c<e){t.push([{tagJsVar:c}]);continue}}if(typeof i===Ti.string&&i.startsWith(Te)){const c=parseInt(i.replace(Te,""),10);if(!isNaN(c)&&c<e){t.push([s,{tagJsVar:c},o]);continue}}t.push(r)}return t}function eT(n,e,t){return!!(t&&t.strings.length===n.length&&t.strings.every((s,i)=>s===n[i])&&t.values.length===e.length)}function tT(n){const e=n.map(nT);return e.push(n.length),Number(e.join(""))}function nT(n){return n.length}const ku={};function rT(n,e){const t=tT(n),r=ku[t];if(r&&eT(n,e,r))return r.domMetaMap;const i=Jw(n,e),o=df(i,e.length),c={interpolation:void 0,string:void 0,strings:n,values:e,domMetaMap:o};return ku[t]=c,o}function Zi(n,e,t){const r=n.context;r.state=r.state||{};const s=r.state;s.oldest=n,s.newest=n,r.state.older=r.state.newer,++he.locks;const i=sT(n,n.context,e,t);return r.htmlDomMeta=i.dom,--he.locks,i}function sT(n,e,t,r){const s=iT(n),o=n.templater.tag.values,c=[],l=n.context;return e=l,l.contexts=c,cf(s,o,n,e,0,t,r)}function iT(n){const t=n.templater.tag;if(t.tagJsType===G.dom)return t.dom;const r=t.strings;return rT(r,t.values)}function ff(n,e){const t=e.state.newest,r=e.placeholder;return t.ownerSupport=n,Zi(t,void 0,r),t}function pf(n,e,t){const r=qT(n,e,e.appSupport,t);return t.contexts=t.contexts||[],r}function gf(n,e,t,r,s){const i=pf(n,t,e);i.ownerSupport=t;const o=Zi(i,r,r?void 0:s);for(const c of o.dom)c.marker&&(r?ot.push([gt,[r,c.marker]]):Be.push([cn,[s,c.marker,"subMarker"]])),c.domElement&&(r?ot.push([gt,[r,c.domElement,"subAppendTo"]]):Be.push([cn,[s,c.domElement,"subInsertBefore"]]));return i}function oT(n,e,t,r,s){if(e.state={},e.inputsHandler){const i=t.propsConfig;e.inputsHandler(i)}return s?gf(n,e,t,s,r):ff(t,e)}function mf(n,e){const t={component:!1,tagJsType:G.templater,processInit:oT,processInitAttribute:Ve,processUpdate:Fn,hasValueChanged:Xi,destroy:vs,propWatch:n,props:e,key:function(s){return t.arrayValue=s,t},matchesInjection(r,s){var i;if(t.wrapper===r||((i=t.wrapper)==null?void 0:i.original)===(r==null?void 0:r.original))return s}};return t}const cs=[];function aT(n,e){return function(s,i,o){const c=yf(n,s,o),l=s.ownerSupport,h=As(n,i,l,s.appSupport,c);return qd(n,e,h,c)}}function yf(n,e,t){const r=n.propWatch===Je.DEEP?eo:kf,s=n.props,i=e.propsConfig;let o=i.castProps;const c=t==null?void 0:t.propsConfig,l=c==null?void 0:c.castProps;return l&&(i.castProps=l,o=ew(e,t,t.ownerSupport,s,r)),o||ac(s)}function cT(n,e,t){const r=mf(Je.DEEP);r.tagJsType=n.tagJsType;const s=pf(r,t,e);function i(){return r.tag=n(),s}return r.wrapper=i,i.tagJsType=n.tagJsType,i.original=n.original||n,s}function lT(n,e,t,r,s){Mn(e);const i=cT(n,e,t);return lc(i,void 0,e),gf(i.templater,e,t,s,r)}function uT(n,e){const t=Zi(n,e,void 0);for(const r of t.dom)r.domElement&&ot.push([gt,[e,r.domElement]]),r.marker&&ot.push([gt,[e,r.marker]]);return n}function hT(n,e,t,r,s){const i=JT(n,e,t,r,s);return i.hasEmitted||_f(n,i),i}function _f(n,e){const r=n.Observables[0];if(!e.hasEmitted){if("withDefault"in n){e.subValueHandler(n.withDefault,0);return}if("value"in r){e.subValueHandler(r.value,0);return}return}const s=e.lastValues[0].value;e.subValueHandler(s,0)}function dT(n,e,t,r,s,i){e.destroy=Of;const o=Es(n),c=function(f,p){Qi(n,f,t,un,o,s),Sa(p)},l=Nf(e.Observables,i,c,e,s);return s.subContext=l,s.value=e,s.tagJsVar=e,e.processUpdate=function(f,p,m){return Md(f,s,m,t,n,un)},{subContext:l,onOutput:c}}function fT(n,e,t,r,s,i){const{subContext:o}=dT(n,e,t,e,s,i);o.hasEmitted||pT(e,o)}function pT(n,e){var o;const r=e.tagJsVar.onOutput;let i=((o=n.Observables[0])==null?void 0:o.value)||n.withDefault;n.callback&&(i=n.callback(i)),r(i,!0,e)}function gT(n,e,t){return{component:!1,onOutput:Ve,tagJsType:G.subscribe,processInitAttribute:fT,processInit:hT,hasValueChanged:mT,processUpdate:Ve,destroy:GT,callback:t,withDefault:e,Observables:[n]}}function mT(n,e){if(!(n!=null&&n.tagJsType))return 1;const t=n.Observables;if(!t)return 2;const s=e.value.Observables;return!s||s.length!==t.length?3:t.every((o,c)=>o===s[c])?0:4}function yT(n,e,t,r){if(!e||!e.tagJsType||e.tagJsType!==n)return r.tagJsVar.destroy(r,t),to(e,r,t,99),99}function _T(n,e,t){const r=e.subContext,s=yT(G.subscribe,n,t,e);return s||(!r||!r.hasEmitted||(r.tagJsVar=n,r.valuesHandler(r.lastValues,0)),0)}function wT(n,e){++n.updateCount;const t=n.subContext,r=wf(t,e);return delete n.subContext,r}function wf(n,e){n.deleted=!0;const t=n.appendMarker;if(t&&(is(t,"deleteSubContext"),delete n.appendMarker),!n.hasEmitted)return;const r=n.contextItem;return r.tagJsVar.destroy(r,e),76}function Tf(n,e,t,r){return e.hasEmitted=!0,e.contextItem=sc(n,t,[],r)}function Ef(n,e,t){var o;++e.updateCount;const s=n.owner._innerHTML;s.processInit=s.oldProcessInit;const i=(o=e.subContext)==null?void 0:o.contextItem;no(i,s,t)}function TT(n,e,t,r,s){e.subContext={},n.processUpdate=Ef,ET(n,t,e,r,s)}function ET(n,e,t,r,s){const{appendMarker:i,insertBefore:o}=Df(s,r),c=t.subContext;c.appendMarker=i;const h=n.owner._innerHTML;h.processInit=h.oldProcessInit,Tf(h,c,e,o)}function bf(){return{component:!1,tagJsType:"innerHTML",hasValueChanged:()=>0,processInitAttribute:Ve,processInit:TT,processUpdate:Ef,destroy:wT}}function et(n){if(!n)return Ve;const e=yt();if(!e)throw new Error("output must be used in render sync with a parent context");const t=tc(e);if(!t)throw new Error("output must be used in render sync fashion");if(n.wrapped===!0)return n;const r=(...s)=>{const i=t.ownerSupport;return bT(s,n,i.context)};return r.wrapped=!0,r}function bT(n,e,t){He(t);const s=e(...n);return De(),or.push([()=>{const i=t.global;if(i===void 0||i.deleted===!0){++he.locks;const c=t;c.tagJsVar.processUpdate(c.value,c,void 0,[]),--he.locks,at();return}++he.locks,K_(void 0),--he.locks,at()},[]]),s}function vT(n,e,t,r){const s={component:!1,tagJsType:"tag-conversion",processInitAttribute:Ve,processInit:(i,o,c)=>{if(n.inputsHandler){const h=t.propsConfig;n.inputsHandler(h)}if(e.inputsHandler){const h=t.propsConfig;e.inputsHandler(h)}if(o.inputsHandler){const h=t.propsConfig;o.inputsHandler(h)}const l=n.returnValue;return e.tagJsVar.processInit(l,e,t,r.placeholder)},processUpdate:(i,o,c)=>{if(o.locked||o.deleted)return;++o.updateCount;const h=o.value.tagJsType,p=(i==null?void 0:i.tagJsType)!==h;if(q_(i,o)||p||s.hasValueChanged(i,o,t)){s.destroy(o,t),to(i,o,c,789);return}o.locked=467,o.render$.next();const R=o.returnValue;IT(e,i,o,R,t),delete o.locked},hasValueChanged:(i,o,c)=>{const l=n.returnValue;return e.tagJsVar.hasValueChanged(l,e,c)},destroy:(i,o)=>{++n.updateCount,n.deleted=!0,delete n.returnValue;const c=e.tagJsVar.destroy(e,t);return Tr(c)?c.then(()=>{const l=xu(n);return at(),l}):(n.destroy$.next(),xu(n))}};return s}function vf(n,e,t){const r=n.context,s=n.returnValue,i=Un(s);delete r.global,r.contexts=[];const o={updateCount:0,value:s,tagJsVar:i,destroy$:new X,render$:new X,placeholder:r.placeholder,valueIndex:-1,withinOwnerElement:!0,parentContext:r,contexts:r.contexts},c=vT(r,o,n,t);return r.tagJsVar=c,i.processInit(s,o,n,t.placeholder),n}function If(n,e,t){const r=As(n,e,t,t==null?void 0:t.appSupport),s=r.propsConfig;if(s){const o=n.tagJsType!==G.tagComponent?[]:yf(n,r);s.castProps=o}return lc(r,e.state.newest,e)}function Af(n,e,t){const r=If(n,e,t),s=r.templater.tag;return["dom","html"].includes(s.tagJsType)?(Zi(r,void 0,e.placeholder),r):vf(r,r.ownerSupport,e)}function IT(n,e,t,r,s){const i=ac(e.props);n.value.props=i;const o=s.propsConfig;if(o&&(o.castProps=i),(e==null?void 0:e.tagJsType)==="tagComponent"){if(n.inputsHandler=t.inputsHandler,n.updatesHandler=t.updatesHandler,t.value=e,t.inputsHandler){He(t);const c=t.inputsHandler;c(i),De()}if(t.updatesHandler){He(t);const c=t.updatesHandler;c(i),De()}}n.tagJsVar.processUpdate(r,n,s,[]),n.value=r}function xu(n,e){delete n.returnValue,delete n.global,n.contexts=[],n.htmlDomMeta=[],delete n.inputsHandler,delete n.updatesHandler}function AT(n,e,t,r){const s=If(n,e,t),i=s.templater.tag;return["dom","html"].includes(i.tagJsType)?uT(s,r):vf(s,t,e)}function Cf(n,e,t,r,s){return Mn(e),s?AT(n,e,t,s):Af(n,e,t)}function CT(n){var s,i;const e=yt();if(!e)throw new Error("tag.inject can only be called within a tag or host context");let t=e.parentContext;for(;t;){const o=t.contexts;if(o){for(const c of o)if(c.isAttr&&((s=c.tagJsVar)!=null&&s.matchesInjection)){const l=c.tagJsVar.matchesInjection(n,c);if(l!==void 0)return l.returnValue}}if((i=t.tagJsVar)!=null&&i.matchesInjection&&t.tagJsVar.matchesInjection(n,t))return t.returnValue;t=t.parentContext}const r=`Could not find parent context for tag.inject ${n}`;throw console.error(r,{targetItem:n,context:e}),new Error(r)}function Ze(n){return ue.stateConfig.handlers.handler(n)}function ST(n){return Ze(()=>{var r;const e=n(),t=_i();return(r=t==null?void 0:t.context)!=null&&r.global?Gd(e,t,{resolvePromise:RT,resolveValue:PT}):e}),F}function RT(n){return n}function PT(n){return n}function Sf(n){return Ze(function(){yt().destroy$.toCallback(n)}),F}function kT(n){const e=yt(),t=i=>{const o=yt();He(e);const c=n();return De(),He(o),c},r=e.render$.subscribe(()=>{t()}),s=t();return F.onDestroy(()=>r.unsubscribe()),s}let xT=0;const Yr=Rf("click"),er=Rf("mousedown");function Rf(n){return function(t){const r=it(t);return Ze(()=>{Uf().addEventListener(n,r)}),r}}const VT={get:Uf,onclick:Yr,click:Yr,onClick:Yr,mousedown:er,onmousedown:er,onMouseDown:er};Is("onclick",Yr);Is("click",Yr);Is("onMouseDown",er);Is("onmousedown",er);Is("mousedown",er);function Is(n,e){Object.defineProperty(F,n,{get(){return e},set(t){return e(t)}})}var Je;(function(n){n.DEEP="deep",n.SHALLOW="shallow",n.NONE="none",n.IMMUTABLE="immutable"})(Je||(Je={}));function F(n,e=Je.SHALLOW){const t=function(...o){const c=mf(e,o);c.tagJsType=G.tagComponent,c.processInit=Cf,c.hasValueChanged=Xi;const l=aT(c,t);return l.original=n,c.wrapper=l,c},r=n;t.original=n,r.tags=cs,r.setUse=ue,r.ValueTypes=G,r.tagIndex=xT++,cs.push(t);const s=t;return s.inputs=i=>{const o=yt();return o.inputsHandler=i,!0},s.updates=i=>{const o=yt();return o.updatesHandler=i,!0},s.getInnerHTML=bf,s}function DT(n){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")}function NT(){throw new Error("Do not call tag.renderOnce as a function but instead set it as: `(props) => tag.renderOnce = () => html`` `")}function OT(){throw new Error("Do not call tag.use as a function but instead set it as: `(props) => tag.use = (use) => html`` `")}F.element=VT;F.renderOnce=NT;F.use=OT;F.deepPropWatch=F;F.route=DT;F.inject=CT;F.output=et;F.onInit=ST;F.onDestroy=Sf;F.onRender=kT;F.getInnerHTML=bf;F.app=function(n){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")};F.immutableProps=function(e){return F(e,Je.IMMUTABLE)};F.watchProps=function(e){return F(e,Je.SHALLOW)};Object.defineProperty(F,"renderOnce",{set(n){n.tagJsType=G.renderOnce,n.processInit=lT,n.processUpdate=Fn,n.destroy=vs,n.hasValueChanged=function(){return 0}}});Object.defineProperty(F,"use",{set(n){n.original={setUse:ue,tags:cs},n.tagJsType=G.stateRender,n.processInit=Cf,n.processUpdate=Fn,n.hasValueChanged=Xi,n.destroy=vs}});Object.defineProperty(F,"promise",{set(n){ZT(n)}});function MT(n,e,t){if(Jd(n,e))return 11;switch(t){case Je.NONE:return 1;case Je.SHALLOW:return Pd(n,e);case Je.IMMUTABLE:return Pf(n,e)}return LT(n,e)}function LT(n,e){let t=n,r=e;return t=[...n],r=[...e||[]],t.every((i,o)=>FT(i,o,t,r))?!1:7}function FT(n,e,t,r){const s=r[e];if(typeof n===te.object){const i={...n},o={...s||{}};return Object.entries(i).every(([l,h])=>Vu(h,o[l],()=>{delete i[l],delete o[l]}))}return Vu(n,s,function(){t.splice(e,1),r.splice(e,1)})}function Vu(n,e,t){if(typeof n!==te.function)return Rd(n,e,eo)?4:!1;if(typeof e!==te.function)return!1;const s=e==null?void 0:e.original;s&&(e=s),n.original&&(n=n.original);const o=n.toString(),c=e.toString();return o===c?(t(),5):(t(),6)}function UT(n,e){const t=e.props,s=n.propsConfig.latest;return MT(t,s,n.templater.propWatch)}function Pf(n,e){const t=n.length;for(let r=0;r<t;++r){const s=n[r],i=e[r];if(s!==i)return 2}return!1}const kf=3,eo=10;function jT(n,e,t){const r=n.templater;if(r.tagJsType!==G.stateRender){switch(r.propWatch){case Je.IMMUTABLE:return n.propsConfig={latest:e,castProps:t};case Je.SHALLOW:return n.propsConfig={latest:e.map(BT),castProps:t}}return n.propsConfig={latest:e.map(HT),castProps:t}}}function BT(n){return rc(n,kf)}function HT(n){return rc(n,eo)}function xf(n,e,t){const r={templater:n,context:e,castedProps:t,appSupport:void 0},s=e.global;return s.blocked=[],e.state||(e.state={newer:{state:[],states:[]}}),r}function Vf(n,e,t,r){e.appSupport=t||e;const s=n.props;return s&&(e.propsConfig=jT(e,s,r)),e}function qT(n,e,t,r,s){const i={templater:n,context:r,castedProps:s,appSupport:void 0};return i.ownerSupport=e,i.appSupport=t,i}function As(n,e,t,r,s){const i=xf(n,e,s);return i.ownerSupport=t||i,i.ownerSupport.appSupport=r||i.ownerSupport,Vf(n,i,r,s)}function $T(n,e,t,r){let s=t.templater||t;const i=n.templater.tag;i&&i._innerHTML&&(s=t._innerHTML);const o=As(s,e,r,r.appSupport),l=n.context.state.oldest;Sd(l,o)}function Ca(n,e,t){if(ws(e))return n.global===void 0&&Mn(n),n.oldTagJsVar=n.tagJsVar,n.tagJsVar=e,zT(e,n,t),!0;if(n.global){n.oldTagJsVar=n.tagJsVar,n.tagJsVar=e;const i=n.state.newest;if(i)return typeof e===te.function||$T(i,n,e,t),!0}if(n.inputsHandler){const i=t.propsConfig;n.inputsHandler(i)}return e.processInit(e,n,t,n.placeholder),n.oldTagJsVar=n.tagJsVar,n.tagJsVar=e,!0}function zT(n,e,t){if(!e.state.newest){if(e.inputsHandler){const s=t.propsConfig;e.inputsHandler(s)}n.processInit(n,e,t,e.placeholder);return}const r=As(n,e,t,t.appSupport);Z_(t,r,e)}function to(n,e,t,r){const s=n&&n.tagJsType;if(delete e.deleted,s){if(s===G.renderOnce)return;Ca(e,n,t);return}if(Xe(n)){Ei(e,n,t),e.oldTagJsVar=e.tagJsVar,e.tagJsVar=Ud(n);return}if(typeof n===te.function){e.value=n;return}r&&o_(n,e)}function no(n,e,t){const s=n.tagJsVar.hasValueChanged(e,n,t);return s===0||to(e,n,t,s),s}function Df(n,e){let t;return n&&(t=e=document.createTextNode(Ln),ot.push([gt,[n,e]])),{appendMarker:t,insertBefore:e}}function WT(n,e,t){const r=_T(n,e,t);if(e.hasEmitted!==!0){const s=e.value.Observables;if(!s||!("value"in s[0]))return}if(r===0&&n.callback){const s=e.subContext;_f(n,s)}}function JT(n,e,t,r,s){const i=n.Observables,{appendMarker:o,insertBefore:c}=Df(s,r);let l=function(p,m,v){Tf(p,v,t,c),Sa(m),l=v.tagJsVar.onOutput=function(V,P,N){const U=N.contextItem;no(U,V,t),U.tagJsVar.processUpdate(V,U,t,[V]),U.value=V,Sa(P)}};const h=Nf(i,t,(f,p,m)=>l(f,p,m),n,e);return h.appendMarker=o,e.subContext=h,n.processUpdate=WT,n.onOutput=l,h}function Nf(n,e,t,r,s){function i(h,f){var p;l.lastValues[f]={value:h,tagJsVar:Un(h),oldTagJsVar:(p=l.lastValues[f])==null?void 0:p.tagJsVar},o(l.lastValues,f)}function o(h,f){const p=l.tagJsVar;if(p==null?void 0:p.callback){He(s);const R=p.callback(...h.map(V=>V.value));t(R,c,l),De();return}const v=h[f].value;t(v,c,l)}let c=!0;const l={lastValues:[],subValueHandler:i,valuesHandler:o,tagJsVar:r,subscriptions:[]};return n.forEach((h,f)=>{c=!0,l.subscriptions.push(h.subscribe(p=>i(p,f))),c=!1}),r.onOutput=t,l}function Of(n){const e=n.subContext;if(!e)return;e.subscriptions.forEach(r=>r.unsubscribe()),delete n.subContext}function GT(n,e){++n.updateCount;const t=n.subContext;return Of(n),wf(t,e)}function Sa(n){n||ue.stateConfig.support||at()}class Mf extends X{constructor(t){super(t);ct(this,"value");this.value=t}subscribe(t){const r=super.subscribe(t);return t(this.value,r),r}}const Lf=((n,e)=>dc(n,e).pastResult),KT=n=>n;function QT(n){const e=(t,r)=>dc(t,r,n).pastResult;return e.setup=n,fc(()=>e,e),e}const dc=(n,e,{init:t,before:r,final:s=KT}={})=>{const i=Ze({pastResult:void 0,values:void 0}),c=typeof n=="function"?n():n,l=i.values===void 0;let h=0;l&&typeof n=="function"&&F.onRender(()=>{if(++h,h===1)return;const p=n();f(p)});function f(p){if(i.values===void 0){if(r&&!r(p))return i.values=p,i;const V=(t||e)(p,i.values);return i.pastResult=s(V),i.values=p,i}if(p.every((R,V)=>R===i.values[V]))return i;if(r&&!r(p))return i.values=p,i;const v=e(p,i.values);return i.pastResult=s(v),i.values.length=0,i.values.push(...p),i}return f(c)};function fc(n,e){return Object.defineProperty(e,"noInit",{get(){const t=n();return t.setup.init=()=>{},t}}),Object.defineProperty(e,"asSubject",{get(){const t=n(),r=Ze(()=>_i()),s=Ze(()=>new Mf(void 0)),i=Ze(()=>({state:ue.stateConfig.state,states:ue.stateConfig.states})),o=(c,l)=>(dc(c,(f,p)=>{const m=_i(),v=l(f,p);m!==r&&(i.state,r.context.state.older),s.next(v)},t.setup),s);return o.setup=t.setup,fc(()=>o,o),o}}),Object.defineProperty(e,"truthy",{get(){const t=n();return t.setup.before=r=>r.every(s=>s),t}}),e}fc(()=>QT({}),Lf);class pc extends Error{constructor(t,r,s={}){super(t);ct(this,"details");this.name=pc.name,this.details={...s,errorCode:r}}}class gc extends pc{constructor(e,t){super(e,"sync-callback-error",t),this.name=gc.name}}function YT(n,e,t,...r){const s=t(...r),i=tc(n);if(!i)return s;if(i.context.global)as(i);else{const o=i.context;o.tagJsVar.processUpdate(o.value,o,i.ownerSupport,[])}return Tr(s)&&s.finally(()=>{if(n.global)as(i);else{const o=i.context;o.tagJsVar.processUpdate(o.value,o,i.ownerSupport,[])}}),s}function it(n){const e=yt(),t=Ze({callback:n}),r=Ze(()=>Ff(e,ue.stateConfig,t));return t.callback=n,r}function Ff(n,e,t){const r=e.states;return function(...i){const o=YT(n,r,t.callback,...i);return at(),o}}new gc("callback() was called outside of synchronous rendering. Use `callback = callbackMaker()` to create a callback that could be called out of sync with rendering");const XT=()=>{};function ZT(n){const e=yt(),t=Ze({callback:XT}),r=Ze({current:void 0}),s=Ze(()=>Ff(e,ue.stateConfig,t));if(r.current!==n){r.current=n;const i=n;n.then(()=>{r.current===i&&s()})}}function yt(){return ue.stateConfig.context}function Uf(){return yt().target}function He(n){return ue.stateConfig.context=n}function De(){delete ue.stateConfig.context}function e0(n,e,t,r,s,i,o){const c=document.createTextNode(Ln);if(cs.push(t.wrapper||{original:t}),i.placeholder=c,e.isApp=!0,!s)throw new Error(`Cannot tagElement, element received is type ${typeof s} and not type Element`);s.destroy=function(){const p=i.events;for(const v in p){const R=p[v];s.removeEventListener(v,R)}i.events={},++he.locks;const m=Er(f,e);return--he.locks,at(),m},++he.locks;const l=document.createDocumentFragment();l.appendChild(c);const f=Af(t,i,{appSupport:{appElement:s,context:i},appElement:s,context:i,isRoot:!0});return f.appElement=s,o&&(r.tag=f.templater.tag),--he.locks,at(),s.appendChild(l),{support:f,tags:cs,ValueTypes:G}}function t0(n,e,t){const r=xf(n,e);return Vf(n,r,r),r.appElement=t,r.context=e,e.state.oldest||(e.state.oldest=r,e.state.older=e.state.newer),e.state.newest=r,r}typeof document=="object"&&(document.taggedJs&&console.warn("🏷️🏷️ Multiple versions of taggedjs are loaded. May cause issues."),document.taggedJs=!0);const ta=[],Du="__taggedjs_tag_element__";function n0(n,e,t){const r=e[Du],s=ta.findIndex(m=>m.element===e);if((r||s>=0)&&console.warn("tagElement called multiple times for the same element",{element:e}),s>=0){const m=ta[s].support;Er(m,m.context.global),ta.splice(s,1)}e[Du]=!0,e.innerHTML="";let i=(()=>h(t));i.propWatch=Je.NONE,i.tagJsType=G.stateRender,i.processUpdate=Fn,i.props=[t],i.isApp=!0;const o=r0(i,e),c=o.global,l=o.state.newest;Id(l.context),Ji(l);let h=n(t);const f=typeof h==te.function;f||(ws(h)?(o.state.newest.propsConfig={latest:[t],castProps:[t]},i.propWatch=h.propWatch,i.tagJsType=h.tagJsType,i.wrapper=h.wrapper,i=h):(i.tag=h,h=n));const p=e0(n,c,i,h,e,o,f);return De(),p}function r0(n,e){const t={component:!1,tagJsType:"templater",hasValueChanged:Xi,destroy:vs,processInitAttribute:Ve,processInit:function(){console.debug("do nothing app function")},processUpdate:Fn},r={updateCount:0,value:n,valueIndex:0,varCounter:0,destroy$:new X,render$:new X,withinOwnerElement:!1,renderCount:0,global:void 0,state:{},tagJsVar:t};return Mn(r),r.events={},t0(n,r,e),r}function s0(n){return Array.isArray(n)&&Object.prototype.hasOwnProperty.call(n,"raw")}function Pe(n,e){return function(t,r,s){if(s0(r)){const i=r.reduce((o,c,l)=>o+c+(s[l]??""),"");return e(t,[n,i])}return e(t,[n,r])}}function i0(n,e,t){const r=Cs(n,n.elementFunctions);return jf(r,e,t)}function jf(n,e,t){function r(s){return r.toCallback(s)}return r.toCallback=t,n.listeners.push([e,r]),n.allListeners.push([e,r]),n}function Ie(n,e){const t=Cs(n,n.elementFunctions);return t.attributes.push(e),yc(t,e[1]),Pn(e[0])?cr(e[0],t):Pn(e[1])&&cr(e[1],t),t}function o0(n,e){const t=Cs(n,n.elementFunctions);return Object.entries(e).map(r=>{t.attributes.push(r),yc(t,r[1]),Pn(r[0])?cr(r[0],t):Pn(r[1])&&cr(r[1],t)}),t}const a0=Pe("style",Ie),c0=Pe("id",Ie),l0=Pe("class",Ie),u0=Pe("href",Ie),h0=Pe("value",Ie),d0=Pe("placeholder",Ie),f0=Pe("src",Ie),p0=Pe("title",Ie),g0=Pe("type",Ie),m0=Pe("checked",Ie),y0=Pe("disabled",Ie),_0=Pe("selected",Ie),w0=Pe("minLength",Ie),T0=Pe("maxLength",Ie),E0=Pe("open",Ie),b0=Pe("cellpadding",Ie),v0=Pe("cellspacing",Ie),I0=Pe("border",Ie);function Bf(n,e){return n.attributes.push(e),yc(n,e[1]),Pn(e[0])?cr(e[0],n):Pn(e[1])&&cr(e[1],n),n}function mc(n){function e(r){return function(s){return i0(n,r,s)}}return{onClose:e("onclose"),onCancel:e("oncancel"),onDoubleClick:e("ondblclick"),onClick:e("click"),onBlur:e("onblur"),onChange:e("onchange"),onInput:e("oninput"),contextMenu:e("contextmenu"),onMousedown:e("onmousedown"),onMouseup:e("onmouseup"),onMouseover:e("onmouseover"),onMouseout:e("onmouseout"),onKeydown:e("onkeydown"),onKeyup:e("onkeyup"),attr:(...r)=>Ie(n,r),attrs:r=>o0(n,r),key:function(r){return this.arrayValue=r,this},style:Se(a0,n),id:Se(c0,n),class:Se(l0,n),href:Se(u0,n),value:Se(h0,n),placeholder:Se(d0,n),src:Se(f0,n),type:Se(g0,n),title:Se(p0,n),checked:Se(m0,n),disabled:Se(y0,n),selected:Se(_0,n),cellSpacing:Se(v0,n),cellPadding:Se(b0,n),border:Se(I0,n),minLength:Se(w0,n),maxLength:Se(T0,n),open:Se(E0,n)}}function yc(n,e){let t=1;e!=null&&typeof e!="function"&&typeof e.length=="number"&&(t+=e.length),n.contentId+=t}function Se(n,e){return((t,...r)=>n(e,t,r))}function A0(n,e,t){if(Gi(t)){Object.entries(t).forEach(([r,s])=>{s?n.classList.add(r):n.classList.remove(r)});return}Od(n,e,t)}function cr(n,e){e.contexts||(e.contexts=[]),e.contexts.push(n),++e.contentId}function Pn(n){return Array.isArray(n)||ln(n)||(n==null?void 0:n.tagJsType)}function Zs(n,e){return(t,r)=>Bf(t,[n,r,!1,e])}function ye(n){return(e,t)=>jf(e,n,t)}const C0={onClick:ye("click"),onDoubleClick:ye("ondblclick"),onDblClick:ye("ondblclick"),onBlur:ye("onblur"),onChange:ye("onchange"),onCancel:ye("oncancel"),onClose:ye("onclose"),onInput:ye("oninput"),onMousedown:ye("onmousedown"),onMouseDown:ye("onmousedown"),onMouseup:ye("onmouseup"),onMouseUp:ye("onmouseup"),onMouseover:ye("onmouseover"),onMouseOver:ye("onmouseup"),onMouseout:ye("onmouseout"),onMouseOut:ye("onmouseout"),onKeyup:ye("onkeyup"),onKeyUp:ye("onkeyup"),onKeydown:ye("onkeydown"),onKeyDown:ye("onkeydown")},Nu={checked:Zs("checked",ea),disabled:Zs("disabled",ea),selected:Zs("selected",ea),class:Zs("class",A0),...C0};function S0(n,e){return Object.entries(e).reduce((r,[s,i])=>s in Nu?Nu[s](n,i):Bf(n,[s,i,!1,un]),n)}function R0(n){return Hf(n)}function Hf(n){const e=P0(n.attributes),t=qf(n.innerHTML);return`<${n.tagName}${e}>${t}</${n.tagName}>`}function P0(n){if(!n||n.length===0)return"";const e=[];return n.forEach(t=>{const r=t[0];if(typeof r!="string"||r.length===0)return;const s=zf(t[1]);if(s===!0){e.push(r);return}s===!1||s===void 0||s===null||e.push(`${r}="${$f(String(s))}"`)}),e.length>0?` ${e.join(" ")}`:""}function qf(n){return!n||n.length===0?"":n.map(e=>{const t=zf(e);return k0(t)?Hf(t):Array.isArray(t)?qf(t):t==null||t===!1?"":$f(String(t))}).join("")}function k0(n){return!!n&&typeof n=="object"&&typeof n.tagName=="string"}function $f(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function zf(n){return typeof n=="function"?n():n}function Wf(n,e){++n.updateCount;const t=n.contexts,r=[];if(n.paintCommands){for(let s=Be.length-1;s>=0;--s){const i=Be[s],o=n.paintCommands.indexOf(i);if(o>=0&&(Be.splice(s,1),n.paintCommands.splice(o,1),n.paintCommands.length===0))break}delete n.paintCommands,na(n);return}if(t.length&&(Ii(t,e,r),t.length=0,r.length)){const s=n.htmlDomMeta;return n.deleted=!0,Promise.all(r).then(()=>{++he.locks,os(s),na(n),--he.locks,at()})}os(n.htmlDomMeta),na(n)}function na(n){n.htmlDomMeta=[],delete n.contexts,n.deleted=!0}function Ii(n,e,t){const r=n[0],s=r.tagJsVar.destroy(r,e);if(r.deleted=!0,Tr(s))return t.push(s.then(()=>{if(n.length>1)return Ii(n.slice(1,n.length),e,t)}));if(r.htmlDomMeta&&(os(r.htmlDomMeta),delete r.htmlDomMeta),n.length>1)return Ii(n.slice(1,n.length),e,t)}function Jf(n,e,t){if(e.locked||e.deleted===!0)return;if(++e.updateCount,_c(n,e)){Wf(e,t),e.htmlDomMeta=[],delete e.deleted,to(n,e,t,789);return}const i=e.contexts,o=n.contexts||[],c=e.tagJsVar.allListeners;if(n.allListeners.forEach((h,f)=>{const p=c[f][1];p.toCallback=h[1].toCallback}),i.length!==o.length)throw console.info("context mismatch",{value:n,context:e,conValues:i.map(h=>h.value),vContexts:o,deleted:e.deleted}),new Error("super issue discovered");e.locked=79,i.forEach((h,f)=>{h.tagJsVar.processUpdate(o[f],h,t)}),delete e.locked}function _c(n,e){if(e.value===n)return 0;if(!n||n.tagJsType!=="element")return 1;const s=n.contentId,i=e.value.contentId;if(s!==i)return 1;const o=n.innerHTML.length,c=e.value.innerHTML.length;return o!==c?1:0}function x0(n,e,t,r,s){const i=[],o={updateCount:0,parentContext:t,contexts:i,target:e,value:n,htmlDomMeta:[],tagJsVar:{component:!1,tagJsType:"dynamic-text",hasValueChanged:()=>0,processInit:Ve,processInitAttribute:Ve,destroy:(p,m)=>{++o.updateCount,i.forEach(v=>v.tagJsVar.destroy(v,m))},processUpdate:(p,m,v,R)=>{++o.updateCount,He(h);let V=p(h);const P=o.underFunction;delete o.underFunction,V instanceof Function&&!V.tagJsType&&(P&&V.toString()===P.toString()?V=h.value:(o.underFunction=V,V=V()));const N=h.tagJsVar.processUpdate(V,h,v,R);return h.value=V,m.value=p,De(),N}},valueIndex:-1,withinOwnerElement:!0,destroy$:new X,render$:new X};He(o);let c=n();ln(c)&&!c.tagJsType&&(o.underFunction=c,c=c());const h=Kf(c,o,e,r,s);return t.contexts.push(o),De(),h}function Gf(n,e,t,r,s){n.forEach(i=>{switch(typeof i){case"string":case"boolean":case"number":return Ou(i,r,s);case"function":{if(i.tagJsType==="element")break;return x0(i,r,e,t,s)}}if(i==null)return Ou(i,r,s);if(i.tagJsType==="element"){const c=Qf(i,e,t,e.contexts);Be.push([s,[r,c]]),e.htmlDomMeta.push({nn:c.tagName,domElement:c,at:[]});return}return Kf(i,e,r,t,s)})}function Kf(n,e,t,r,s){const i=bs(n,[],!0,e);if(e.contexts.push(i),i.target=t,i.placeholder=document.createTextNode(""),Be.push([s,[t,i.placeholder]]),He(i),i.inputsHandler){const c=r.propsConfig;i.inputsHandler(c)}return i.tagJsVar.processInit(n,i,r,i.placeholder),De(),i}function Ou(n,e,t){const r=Ki(n),s=document.createTextNode(r);return Be.push([t,[e,s]]),s}function Qf(n,e,t,r){const s=document.createElement(n.tagName);return e.target=s,n.attributes.forEach(i=>{const o=i[0];typeof o=="string"&&(i[2]=Es(o))}),af(n.attributes,[],s,t,e),Gf(n.innerHTML,e,t,s,gt),n.listeners.forEach((i,o)=>V0(n,o,t,i,s)),s}function V0(n,e,t,r,s){const i=(...o)=>{const l=n.listeners[e][1],h=Ts(t),f=h.context.updateCount;h.context.locked=1,++he.locks,He(h.context);const p=l(...o);return--he.locks,delete h.context.locked,De(),f===h.context.updateCount?Kd(p,h):(at(),Tr(p)?p.then(()=>{const v=h.context.state.newest;return hc([v]),"promise-no-data-ever"}):"no-data-ever")};Yd(t.appSupport,r[0],s,i)}function D0(n,e,t,r){e.contexts=e.contexts||[],e.htmlDomMeta=[],e.locked=34;const s=Qf(n,e,t,e.contexts);delete e.locked;const i=[cn,[r,s,"htmlTag.processInit"]];Be.push(i),e.paintCommands=[i],or.push([()=>{delete e.paintCommands},[]]);const o={nn:n.tagName,domElement:s,at:n.attributes};return e.htmlDomMeta=[o],s}function L(n){const t=Cs({component:!1,tagJsType:"element",processInitAttribute:Ve,processInit:D0,destroy:Wf,processUpdate:Jf,hasValueChanged:_c,tagName:n,innerHTML:[],attributes:[],contentId:0,listeners:[],allListeners:[],elementFunctions:mc});return t.tagName=n,t}function Cs(n,e){const t=(...r)=>{const s={...t};return s.attributes=[...t.attributes],s.listeners=[...t.listeners],s.allListeners=[...t.allListeners],r.length>0&&typeof r[0]=="object"&&!Array.isArray(r[0])&&!r[0].tagJsType&&(S0(s,r[0]),r.splice(0,1)),s.innerHTML=r,r.forEach(i=>{if(Pn(i)){if(i.tagJsType==="element"){s.allListeners.push(...i.allListeners),i.contexts&&(s.contexts?(s.contexts.push(...i.contexts),++s.contentId):(s.contexts=i.contexts,++s.contentId));return}N0(i,s)}}),s};return Object.assign(t,n),Object.assign(t,mc(t)),t.attributes=[...n.attributes],t.listeners=[...n.listeners],t.allListeners=[...n.allListeners],t.toString=function(){return R0(this)},t}function N0(n,e){e.contexts||(e.contexts=[]),e.contexts.push(n)}const jt=O0();function O0(){const e=Cs({component:!1,tagJsType:"element",processInitAttribute:Ve,processInit:M0,destroy:L0,processUpdate:Jf,hasValueChanged:_c,tagName:"no-element",innerHTML:[],attributes:[],contentId:0,listeners:[],allListeners:[],elementFunctions:mc});return e.tagName="no-element",e}function M0(n,e,t,r){e.contexts=e.contexts||[],e.htmlDomMeta=[],Gf(n.innerHTML,e,t,r,cn)}function L0(n,e){++n.updateCount;const t=n.contexts,r=[];if(t.length&&(Ii(t,e,r),t.length=0,r.length)){const s=n.htmlDomMeta;return Promise.all(r).then(()=>{++he.locks,os(s),--he.locks,at()})}}const pe=L("button"),F0=L("select"),Mu=L("option"),tt=L("input");L("textarea");L("html");L("head");const Yf=L("title");L("meta");L("link");const lr=L("style");L("body");L("script");L("noscript");const U0=L("hr"),j0=L("h1"),Cn=L("h2"),Xf=L("h3");L("h4");L("h5");L("h6");L("ol");const Lu=L("ul"),Gn=L("li"),C=L("div");L("main");const ra=L("section");L("header");L("footer");L("form");const ro=L("fieldset");L("legend");L("dialog");L("pre");L("table");L("tr");L("td");L("th");L("thead");L("tbody");L("tfoot");const B0=L("iframe"),ne=L("a"),H0=L("u"),ee=L("img"),z=L("br"),Xr=L("label"),Vt=L("p"),ce=L("small"),se=L("span");L("strong");const q0=L("b");L("sup");L("nav");L("figure");L("figcaption");L("code");L("canvas");const ai=L("svg"),Pt=L("path"),ei=L("polygon"),$0=L("rect");L("details");L("summary");const Zf=F(({date:n})=>{const e=performance.now().toString().replace(/\./g,"_"),t=`${e}-days-plus`,r=W0();let s;o(),Zf.updates(p=>{const m=n;[{date:n}]=p,n!=m&&(l(),i())}),n=n||new Date;function i(){const m=n-new Date;if(m<0){f({days:0,hours:0,minutes:0,seconds:0}),c();return}let v=Math.floor(m/(1e3*60*60*24));const R=Math.floor(m%(1e3*60*60*24)/(1e3*60*60)),V=Math.floor(m%(1e3*60*60)/(1e3*60)),P=Math.floor(m%(1e3*60)/1e3);f({days:v,hours:R,minutes:V,seconds:P})}function o(){s=setInterval(i,kt)}function c(){clearInterval(s),s=void 0}F.onDestroy(c);function l(){c(),o()}function h(p,m,v){const R=document.createElement("span");if(R.classList.add("wrap"),R.innerText=m,p.appendChild(R),p.children.length===1)return;function V(){requestAnimationFrame(()=>{R.classList.add("changed"),requestAnimationFrame(()=>{setTimeout(()=>{p.removeChild(R)},200)})})}setTimeout(V,v.speed-1)}const f=it(p=>{const m={...p};let{days:v}=m;const R=document.getElementById(t);R&&(v>99?(m.days=99,R.style.display=""):R.style.display="none",Object.entries(m).forEach(([V,P])=>{const N=z0(P),U=r[V];N[0]!=U[0].value$.value&&(U[0].value$.next(N[0]),h(document.getElementById(`${e}-${V}-0`),N[0],U[0])),N[1]!=U[1].value$.value&&(U[1].value$.next(N[1]),h(document.getElementById(`${e}-${V}-1`),N[1],U[1]))}))});return jt(lr(`
      .countdown {
        /*line-height: 1.75em;*/
        background: black;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        font-family: Arial, sans-serif;
        padding: .3em;
        border:1px solid white;
        border-left:0;
        border-right:0;
        gap: .5em;
      }

      .digit-container {
        display: flex;
        justify-content: center;
        align-items: center;
        color:black;
      }

      .digit {
        position:relative;
        margin: 0.1rem;
      }

      .digit .wrap, .digit .placeholder {
        box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.1), inset 0 -5px 10px rgba(0, 0, 0, 0.1);
        margin:0;
        text-align: center;
        font-weight: bold;
        font-size: 2rem;
        padding: .3em;
        border: 2px solid black;
        border-radius: 5px;
        background-color: white;
        display:flex;
      }

      .digit .wrap{
        position: absolute;
      }

      .digit .wrap.changed {
        animation: fade-out 130ms ease forwards;
        z-index:1
      }

      .digit .line {
        z-index:2;
        position:absolute;
        top:50%;
        border-top:1px solid black;
        opacity: .2;
        width: 100%;
      }

      .label {
        color:white;
        text-align: center;
      }

      @keyframes fade-out {
        0% {
          opacity: 1;
        }
        
        100% {
          transform: rotateX(90deg);
          opacity: 1;
        }
      }
    `),C.class`countdown`(C(C.class`digit-container`(se.class`digit`(C.class`line`,se.id`${e}-days-0`,se.class`placeholder`("0")),se.class`digit`(C.class`line`,se.id`${e}-days-1`,se.class`placeholder`("0")),se.id`${e}-days-plus`.class`label`.style`display:none`("+")),C.class`label`("Days")),C(C.class`digit-container`(se.class`digit`(C.class`line`,se.id`${e}-hours-0`,se.class`placeholder`("0")),se.class`digit`(C.class`line`,se.id`${e}-hours-1`,se.class`placeholder`("0"))),C.class`label`("Hours")),C(C.class`digit-container`(se.class`digit`(C.class`line`,se.id`${e}-minutes-0`,se.class`placeholder`("0")),se.class`digit`(C.class`line`,se.id`${e}-minutes-1`,se.class`placeholder`("0"))),C.class`label`.contextMenu(l)("Minutes")),C(C.class`digit-container`(se.class`digit`(C.class`line`,se.id`${e}-seconds-0`,se.class`placeholder`("0")),se.class`digit`(C.class`line`,se.id`${e}-seconds-1`,se.class`placeholder`("0"))),C.class`label`.contextMenu(c)("Seconds"))))});function z0(n){const e=n%10;return[Math.floor(n/10),e]}const kt=1e3;function W0(){return{days:[{speed:kt*60*60*24*10,value$:new X},{speed:kt*60*60*24,value$:new X}],hours:[{speed:kt*60*60*10,value$:new X},{speed:kt*60*60,value$:new X}],minutes:[{speed:kt*60*10,value$:new X},{speed:kt*60,value$:new X}],seconds:[{speed:kt*10,value$:new X},{speed:kt,value$:new X}]}}const J0=()=>{};var Fu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},G0=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},tp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,v=h&63;l||(v=64,o||(m=64)),r.push(t[f],t[p],t[m],t[v])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ep(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):G0(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new K0;const m=i<<2|c>>4;if(r.push(m),h!==64){const v=c<<4&240|h>>2;if(r.push(v),p!==64){const R=h<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class K0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Q0=function(n){const e=ep(n);return tp.encodeByteArray(e,!0)},Ai=function(n){return Q0(n).replace(/\./g,"")},np=function(n){try{return tp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=()=>Y0().__FIREBASE_DEFAULTS__,Z0=()=>{if(typeof process>"u"||typeof Fu>"u")return;const n=Fu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},eE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&np(n[1]);return e&&JSON.parse(e)},so=()=>{try{return J0()||X0()||Z0()||eE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},rp=n=>{var e,t;return(t=(e=so())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},tE=n=>{const e=rp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},sp=()=>{var n;return(n=so())==null?void 0:n.config},ip=n=>{var e;return(e=so())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function op(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ai(JSON.stringify(t)),Ai(JSON.stringify(o)),""].join(".")}const Zr={};function sE(){const n={prod:[],emulator:[]};for(const e of Object.keys(Zr))Zr[e]?n.emulator.push(e):n.prod.push(e);return n}function iE(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Uu=!1;function ap(n,e){if(typeof window>"u"||typeof document>"u"||!br(window.location.host)||Zr[n]===e||Zr[n]||Uu)return;Zr[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=sE().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,v){m.setAttribute("width","24"),m.setAttribute("id",v),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Uu=!0,o()},m}function f(m,v){m.setAttribute("id",v),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=iE(r),v=t("text"),R=document.getElementById(v)||document.createElement("span"),V=t("learnmore"),P=document.getElementById(V)||document.createElement("a"),N=t("preprendIcon"),U=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const J=m.element;c(J),f(P,V);const Ae=h();l(U,N),J.append(U,R,P,Ae),document.body.appendChild(J)}i?(R.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function aE(){var e;const n=(e=so())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function uE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hE(){const n=qe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function dE(){return!aE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fE(){try{return typeof indexedDB=="object"}catch{return!1}}function pE(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE="FirebaseError";class Bt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=gE,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ss.prototype.create)}}class Ss{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?mE(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Bt(s,c,r)}}function mE(n,e){return n.replace(yE,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const yE=/\{\$([^}]+)}/g;function _E(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function kn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(ju(i)&&ju(o)){if(!kn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ju(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wE(n,e){const t=new TE(n,e);return t.subscribe.bind(t)}class TE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");EE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=sa),s.error===void 0&&(s.error=sa),s.complete===void 0&&(s.complete=sa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function EE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function sa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(n){return n&&n._delegate?n._delegate:n}class xn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new nE;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IE(e))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vn){return this.instances.has(e)}getOptions(e=vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vn){return this.component?this.component.multipleInstances?e:vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vE(n){return n===vn?void 0:n}function IE(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new bE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const CE={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},SE=K.INFO,RE={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},PE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=RE[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wc{constructor(e){this.name=e,this._logLevel=SE,this._logHandler=PE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const kE=(n,e)=>e.some(t=>n instanceof t);let Bu,Hu;function xE(){return Bu||(Bu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VE(){return Hu||(Hu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cp=new WeakMap,Ra=new WeakMap,lp=new WeakMap,ia=new WeakMap,Tc=new WeakMap;function DE(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(tn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&cp.set(t,n)}).catch(()=>{}),Tc.set(e,n),e}function NE(n){if(Ra.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Ra.set(n,e)}let Pa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ra.get(n);if(e==="objectStoreNames")return n.objectStoreNames||lp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return tn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function OE(n){Pa=n(Pa)}function ME(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(oa(this),e,...t);return lp.set(r,e.sort?e.sort():[e]),tn(r)}:VE().includes(n)?function(...e){return n.apply(oa(this),e),tn(cp.get(this))}:function(...e){return tn(n.apply(oa(this),e))}}function LE(n){return typeof n=="function"?ME(n):(n instanceof IDBTransaction&&NE(n),kE(n,xE())?new Proxy(n,Pa):n)}function tn(n){if(n instanceof IDBRequest)return DE(n);if(ia.has(n))return ia.get(n);const e=LE(n);return e!==n&&(ia.set(n,e),Tc.set(e,n)),e}const oa=n=>Tc.get(n);function FE(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=tn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(tn(o.result),l.oldVersion,l.newVersion,tn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const UE=["get","getKey","getAll","getAllKeys","count"],jE=["put","add","delete","clear"],aa=new Map;function qu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(aa.get(e))return aa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=jE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||UE.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return aa.set(e,i),i}OE(n=>({...n,get:(e,t,r)=>qu(e,t)||n.get(e,t,r),has:(e,t)=>!!qu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(HE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function HE(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ka="@firebase/app",$u="0.14.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new wc("@firebase/app"),qE="@firebase/app-compat",$E="@firebase/analytics-compat",zE="@firebase/analytics",WE="@firebase/app-check-compat",JE="@firebase/app-check",GE="@firebase/auth",KE="@firebase/auth-compat",QE="@firebase/database",YE="@firebase/data-connect",XE="@firebase/database-compat",ZE="@firebase/functions",eb="@firebase/functions-compat",tb="@firebase/installations",nb="@firebase/installations-compat",rb="@firebase/messaging",sb="@firebase/messaging-compat",ib="@firebase/performance",ob="@firebase/performance-compat",ab="@firebase/remote-config",cb="@firebase/remote-config-compat",lb="@firebase/storage",ub="@firebase/storage-compat",hb="@firebase/firestore",db="@firebase/ai",fb="@firebase/firestore-compat",pb="firebase",gb="12.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="[DEFAULT]",mb={[ka]:"fire-core",[qE]:"fire-core-compat",[zE]:"fire-analytics",[$E]:"fire-analytics-compat",[JE]:"fire-app-check",[WE]:"fire-app-check-compat",[GE]:"fire-auth",[KE]:"fire-auth-compat",[QE]:"fire-rtdb",[YE]:"fire-data-connect",[XE]:"fire-rtdb-compat",[ZE]:"fire-fn",[eb]:"fire-fn-compat",[tb]:"fire-iid",[nb]:"fire-iid-compat",[rb]:"fire-fcm",[sb]:"fire-fcm-compat",[ib]:"fire-perf",[ob]:"fire-perf-compat",[ab]:"fire-rc",[cb]:"fire-rc-compat",[lb]:"fire-gcs",[ub]:"fire-gcs-compat",[hb]:"fire-fst",[fb]:"fire-fst-compat",[db]:"fire-vertex","fire-js":"fire-js",[pb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Map,yb=new Map,Va=new Map;function zu(n,e){try{n.container.addComponent(e)}catch(t){Mt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ur(n){const e=n.name;if(Va.has(e))return Mt.debug(`There were multiple attempts to register component ${e}.`),!1;Va.set(e,n);for(const t of Ci.values())zu(t,n);for(const t of yb.values())zu(t,n);return!0}function Ec(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function nt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nn=new Ss("app","Firebase",_b);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=gb;function up(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:xa,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw nn.create("bad-app-name",{appName:String(s)});if(t||(t=sp()),!t)throw nn.create("no-options");const i=Ci.get(s);if(i){if(kn(t,i.options)&&kn(r,i.config))return i;throw nn.create("duplicate-app",{appName:s})}const o=new AE(s);for(const l of Va.values())o.addComponent(l);const c=new wb(t,r,o);return Ci.set(s,c),c}function hp(n=xa){const e=Ci.get(n);if(!e&&n===xa&&sp())return up();if(!e)throw nn.create("no-app",{appName:n});return e}function rn(n,e,t){let r=mb[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mt.warn(o.join(" "));return}ur(new xn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb="firebase-heartbeat-database",Eb=1,ls="firebase-heartbeat-store";let ca=null;function dp(){return ca||(ca=FE(Tb,Eb,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ls)}catch(t){console.warn(t)}}}}).catch(n=>{throw nn.create("idb-open",{originalErrorMessage:n.message})})),ca}async function bb(n){try{const t=(await dp()).transaction(ls),r=await t.objectStore(ls).get(fp(n));return await t.done,r}catch(e){if(e instanceof Bt)Mt.warn(e.message);else{const t=nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mt.warn(t.message)}}}async function Wu(n,e){try{const r=(await dp()).transaction(ls,"readwrite");await r.objectStore(ls).put(e,fp(n)),await r.done}catch(t){if(t instanceof Bt)Mt.warn(t.message);else{const r=nn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Mt.warn(r.message)}}}function fp(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=1024,Ib=30;class Ab{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Sb(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ju();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Ib){const o=Rb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Mt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ju(),{heartbeatsToSend:r,unsentEntries:s}=Cb(this._heartbeatsCache.heartbeats),i=Ai(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Mt.warn(t),""}}}function Ju(){return new Date().toISOString().substring(0,10)}function Cb(n,e=vb){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Gu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Gu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Sb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fE()?pE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await bb(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Wu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Wu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Gu(n){return Ai(JSON.stringify({version:2,heartbeats:n})).length}function Rb(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(n){ur(new xn("platform-logger",e=>new BE(e),"PRIVATE")),ur(new xn("heartbeat",e=>new Ab(e),"PRIVATE")),rn(ka,$u,n),rn(ka,$u,"esm2020"),rn("fire-js","")}Pb("");var kb="firebase",xb="12.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn(kb,xb,"app");function pp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vb=pp,gp=new Ss("auth","Firebase",pp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new wc("@firebase/auth");function Db(n,...e){Si.logLevel<=K.WARN&&Si.warn(`Auth (${vr}): ${n}`,...e)}function ci(n,...e){Si.logLevel<=K.ERROR&&Si.error(`Auth (${vr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(n,...e){throw vc(n,...e)}function ht(n,...e){return vc(n,...e)}function bc(n,e,t){const r={...Vb(),[e]:t};return new Ss("auth","Firebase",r).create(e,{appName:n.name})}function sn(n){return bc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mp(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&St(n,"argument-error"),bc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return gp.create(n,...e)}function H(n,e,...t){if(!n)throw vc(e,...t)}function Dt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ci(e),new Error(e)}function Lt(n,e){n||Dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Nb(){return Ku()==="http:"||Ku()==="https:"}function Ku(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nb()||lE()||"connection"in navigator)?navigator.onLine:!0}function Mb(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t){this.shortDelay=e,this.longDelay=t,Lt(t>e,"Short delay should be less than long delay!"),this.isMobile=oE()||uE()}get(){return Ob()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(n,e){Lt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ub=new Ps(3e4,6e4);function Ac(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ir(n,e,t,r,s={}){return _p(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Rs({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...i};return cE()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&br(n.emulatorConfig.host)&&(h.credentials="include"),yp.fetch()(await wp(n,n.config.apiHost,t,c),h)})}async function _p(n,e,t){n._canInitEmulator=!1;const r={...Lb,...e};try{const s=new Bb(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ti(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ti(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ti(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw ti(n,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw bc(n,f,h);St(n,f)}}catch(s){if(s instanceof Bt)throw s;St(n,"network-request-failed",{message:String(s)})}}async function jb(n,e,t,r,s={}){const i=await Ir(n,e,t,r,s);return"mfaPendingCredential"in i&&St(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function wp(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Ic(n.config,s):`${n.config.apiScheme}://${s}`;return Fb.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class Bb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ht(this.auth,"network-request-failed")),Ub.get())})}}function ti(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ht(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hb(n,e){return Ir(n,"POST","/v1/accounts:delete",e)}async function Ri(n,e){return Ir(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qb(n,e=!1){const t=$e(n),r=await t.getIdToken(e),s=Cc(r);H(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:es(la(s.auth_time)),issuedAtTime:es(la(s.iat)),expirationTime:es(la(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function la(n){return Number(n)*1e3}function Cc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ci("JWT malformed, contained fewer than 3 sections"),null;try{const s=np(t);return s?JSON.parse(s):(ci("Failed to decode base64 JWT payload"),null)}catch(s){return ci("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Qu(n){const e=Cc(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Bt&&$b(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function $b({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=es(this.lastLoginAt),this.creationTime=es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(n){var p;const e=n.auth,t=await n.getIdToken(),r=await us(n,Ri(e,{idToken:t}));H(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Tp(s.providerUserInfo):[],o=Jb(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Na(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function Wb(n){const e=$e(n);await Pi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jb(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Tp(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gb(n,e){const t=await _p(n,{},async()=>{const r=Rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await wp(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&br(n.emulatorConfig.host)&&(l.credentials="include"),yp.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Kb(n,e){return Ir(n,"POST","/v2/accounts:revokeToken",Ac(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=Qu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Gb(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new tr;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tr,this.toJSON())}_performRefresh(){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class lt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new zb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Na(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await us(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return qb(this,e)}reload(){return Wb(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new lt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Pi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nt(this.auth.app))return Promise.reject(sn(this.auth));const e=await this.getIdToken();return await us(this,Hb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:v,providerData:R,stsTokenManager:V}=t;H(p&&V,e,"internal-error");const P=tr.fromJSON(this.name,V);H(typeof p=="string",e,"internal-error"),Gt(r,e.name),Gt(s,e.name),H(typeof m=="boolean",e,"internal-error"),H(typeof v=="boolean",e,"internal-error"),Gt(i,e.name),Gt(o,e.name),Gt(c,e.name),Gt(l,e.name),Gt(h,e.name),Gt(f,e.name);const N=new lt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:P,createdAt:h,lastLoginAt:f});return R&&Array.isArray(R)&&(N.providerData=R.map(U=>({...U}))),l&&(N._redirectEventId=l),N}static async _fromIdTokenResponse(e,t,r=!1){const s=new tr;s.updateFromServerResponse(t);const i=new lt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Pi(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];H(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Tp(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new tr;c.updateFromIdToken(r);const l=new lt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Na(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=new Map;function Nt(n){Lt(n instanceof Function,"Expected a class definition");let e=Yu.get(n);return e?(Lt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Yu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ep.type="NONE";const Xu=Ep;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(n,e,t){return`firebase:${n}:${e}:${t}`}class nr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=li(this.userKey,s.apiKey,i),this.fullPersistenceKey=li("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ri(this.auth,{idToken:e}).catch(()=>{});return t?lt._fromGetAccountInfoResponse(this.auth,t,e):null}return lt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new nr(Nt(Xu),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Nt(Xu);const o=li(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const m=await Ri(e,{idToken:f}).catch(()=>{});if(!m)break;p=await lt._fromGetAccountInfoResponse(e,m,f)}else p=lt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new nr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new nr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ap(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sp(e))return"Blackberry";if(Rp(e))return"Webos";if(vp(e))return"Safari";if((e.includes("chrome/")||Ip(e))&&!e.includes("edge/"))return"Chrome";if(Cp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bp(n=qe()){return/firefox\//i.test(n)}function vp(n=qe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ip(n=qe()){return/crios\//i.test(n)}function Ap(n=qe()){return/iemobile/i.test(n)}function Cp(n=qe()){return/android/i.test(n)}function Sp(n=qe()){return/blackberry/i.test(n)}function Rp(n=qe()){return/webos/i.test(n)}function Sc(n=qe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Qb(n=qe()){var e;return Sc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Yb(){return hE()&&document.documentMode===10}function Pp(n=qe()){return Sc(n)||Cp(n)||Rp(n)||Sp(n)||/windows phone/i.test(n)||Ap(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(n,e=[]){let t;switch(n){case"Browser":t=Zu(qe());break;case"Worker":t=`${Zu(qe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${vr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb(n,e={}){return Ir(n,"GET","/v2/passwordPolicy",Ac(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=6;class tv{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??ev,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eh(this),this.idTokenSubscription=new eh(this),this.beforeStateQueue=new Xb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Nt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await nr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ri(this,{idToken:e}),r=await lt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(nt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Pi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nt(this.app))return Promise.reject(sn(this));const t=e?$e(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nt(this.app)?Promise.reject(sn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nt(this.app)?Promise.reject(sn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Zb(this),t=new tv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ss("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Kb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Nt(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await nr.create(this,[Nt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Db(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ar(n){return $e(n)}class eh{constructor(e){this.auth=e,this.observer=null,this.addObserver=wE(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rv(n){Rc=n}function sv(n){return Rc.loadJS(n)}function iv(){return Rc.gapiScript}function ov(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(n,e){const t=Ec(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(kn(i,e??{}))return s;St(s,"already-initialized")}return t.initialize({options:e})}function cv(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Nt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lv(n,e,t){const r=Ar(n);H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=xp(e),{host:o,port:c}=uv(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){H(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),H(kn(h,r.config.emulator)&&kn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,br(o)?(op(`${i}//${o}${l}`),ap("Auth",!0)):hv()}function xp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function uv(n){const e=xp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:th(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:th(o)}}}function th(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function hv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dt("not implemented")}_getIdTokenResponse(e){return Dt("not implemented")}_linkToIdToken(e,t){return Dt("not implemented")}_getReauthenticationResolver(e){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr(n,e){return jb(n,"POST","/v1/accounts:signInWithIdp",Ac(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv="http://localhost";class Vn extends Vp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):St("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new Vn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return rr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,rr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,rr(e,t)}buildRequest(){const e={requestUri:dv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Rs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends io{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends ks{constructor(){super("facebook.com")}static credential(e){return Vn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Vn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return xt.credential(t,r)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends ks{constructor(){super("github.com")}static credential(e){return Vn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com";Yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends ks{constructor(){super("twitter.com")}static credential(e,t){return Vn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Xt.credential(t,r)}catch{return null}}}Xt.TWITTER_SIGN_IN_METHOD="twitter.com";Xt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await lt._fromIdTokenResponse(e,r,s),o=nh(r);return new hr({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=nh(r);return new hr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function nh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends Bt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ki.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ki(e,t,r,s)}}function Dp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ki._fromErrorAndOperation(n,i,e,r):i})}async function fv(n,e,t=!1){const r=await us(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return hr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pv(n,e,t=!1){const{auth:r}=n;if(nt(r.app))return Promise.reject(sn(r));const s="reauthenticate";try{const i=await us(n,Dp(r,s,e,n),t);H(i.idToken,r,"internal-error");const o=Cc(i.idToken);H(o,r,"internal-error");const{sub:c}=o;return H(n.uid===c,r,"user-mismatch"),hr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&St(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gv(n,e,t=!1){if(nt(n.app))return Promise.reject(sn(n));const r="signIn",s=await Dp(n,r,e),i=await hr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(n,e){return $e(n).setPersistence(e)}function yv(n,e,t,r){return $e(n).onIdTokenChanged(e,t,r)}function _v(n,e,t){return $e(n).beforeAuthStateChanged(e,t)}function wv(n,e,t,r){return $e(n).onAuthStateChanged(e,t,r)}function Tv(n){return $e(n).signOut()}const xi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xi,"1"),this.storage.removeItem(xi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=1e3,bv=10;class Op extends Np{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Yb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,bv):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Ev)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Op.type="LOCAL";const Mp=Op;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp extends Np{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Lp.type="SESSION";const Pc=Lp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new oo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,i)),l=await vv(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=kc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return window}function Av(n){bt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function Cv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Rv(){return Fp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="firebaseLocalStorageDb",Pv=1,Vi="firebaseLocalStorage",jp="fbase_key";class xs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ao(n,e){return n.transaction([Vi],e?"readwrite":"readonly").objectStore(Vi)}function kv(){const n=indexedDB.deleteDatabase(Up);return new xs(n).toPromise()}function Oa(){const n=indexedDB.open(Up,Pv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Vi,{keyPath:jp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Vi)?e(r):(r.close(),await kv(),e(await Oa()))})})}async function rh(n,e,t){const r=ao(n,!0).put({[jp]:e,value:t});return new xs(r).toPromise()}async function xv(n,e){const t=ao(n,!1).get(e),r=await new xs(t).toPromise();return r===void 0?null:r.value}function sh(n,e){const t=ao(n,!0).delete(e);return new xs(t).toPromise()}const Vv=800,Dv=3;class Bp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Oa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Dv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oo._getInstance(Rv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await Cv(),!this.activeServiceWorker)return;this.sender=new Iv(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Oa();return await rh(e,xi,"1"),await sh(e,xi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>rh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>xv(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>sh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ao(s,!1).getAll();return new xs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bp.type="LOCAL";const Hp=Bp;new Ps(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(n,e){return e?Nt(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends Vp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Nv(n){return gv(n.auth,new Vc(n),n.bypassAuthState)}function Ov(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),pv(t,new Vc(n),n.bypassAuthState)}async function Mv(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),fv(t,new Vc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nv;case"linkViaPopup":case"linkViaRedirect":return Mv;case"reauthViaPopup":case"reauthViaRedirect":return Ov;default:St(this.auth,"internal-error")}}resolve(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=new Ps(2e3,1e4);async function Fv(n,e,t){if(nt(n.app))return Promise.reject(ht(n,"operation-not-supported-in-this-environment"));const r=Ar(n);mp(n,e,io);const s=xc(r,t);return new In(r,"signInViaPopup",e,s).executeNotNull()}class In extends qp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,In.currentPopupAction&&In.currentPopupAction.cancel(),In.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Lt(this.filter.length===1,"Popup operations only handle one event");const e=kc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,In.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lv.get())};e()}}In.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv="pendingRedirect",ui=new Map;class jv extends qp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ui.get(this.auth._key());if(!e){try{const r=await Bv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ui.set(this.auth._key(),e)}return this.bypassAuthState||ui.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bv(n,e){const t=zp(e),r=$p(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function Hv(n,e){return $p(n)._set(zp(e),"true")}function qv(n,e){ui.set(n._key(),e)}function $p(n){return Nt(n._redirectPersistence)}function zp(n){return li(Uv,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(n,e,t){return zv(n,e,t)}async function zv(n,e,t){if(nt(n.app))return Promise.reject(sn(n));const r=Ar(n);mp(n,e,io),await r._initializationPromise;const s=xc(r,t);return await Hv(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function Wv(n,e){return await Ar(n)._initializationPromise,Wp(n,e,!1)}async function Wp(n,e,t=!1){if(nt(n.app))return Promise.reject(sn(n));const r=Ar(n),s=xc(r,e),o=await new jv(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=600*1e3;class Gv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Kv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Jp(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(ht(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jv&&this.cachedEventUids.clear(),this.cachedEventUids.has(ih(e))}saveEventToCache(e){this.cachedEventUids.add(ih(e)),this.lastProcessedEventTime=Date.now()}}function ih(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Jp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Kv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qv(n,e={}){return Ir(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xv=/^https?/;async function Zv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Qv(n);for(const t of e)try{if(eI(t))return}catch{}St(n,"unauthorized-domain")}function eI(n){const e=Da(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Xv.test(t))return!1;if(Yv.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=new Ps(3e4,6e4);function oh(){const n=bt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function nI(n){return new Promise((e,t)=>{var s,i,o;function r(){oh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oh(),t(ht(n,"network-request-failed"))},timeout:tI.get()})}if((i=(s=bt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=bt().gapi)!=null&&o.load)r();else{const c=ov("iframefcb");return bt()[c]=()=>{gapi.load?r():t(ht(n,"network-request-failed"))},sv(`${iv()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw hi=null,e})}let hi=null;function rI(n){return hi=hi||nI(n),hi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=new Ps(5e3,15e3),iI="__/auth/iframe",oI="emulator/auth/iframe",aI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lI(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ic(e,oI):`https://${n.config.authDomain}/${iI}`,r={apiKey:e.apiKey,appName:n.name,v:vr},s=cI.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Rs(r).slice(1)}`}async function uI(n){const e=await rI(n),t=bt().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:lI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ht(n,"network-request-failed"),c=bt().setTimeout(()=>{i(o)},sI.get());function l(){bt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dI=500,fI=600,pI="_blank",gI="http://localhost";class ah{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mI(n,e,t,r=dI,s=fI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...hI,width:r.toString(),height:s.toString(),top:i,left:o},h=qe().toLowerCase();t&&(c=Ip(h)?pI:t),bp(h)&&(e=e||gI,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[v,R])=>`${m}${v}=${R},`,"");if(Qb(h)&&c!=="_self")return yI(e||"",c),new ah(null);const p=window.open(e||"",c,f);H(p,n,"popup-blocked");try{p.focus()}catch{}return new ah(p)}function yI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="__/auth/handler",wI="emulator/auth/handler",TI=encodeURIComponent("fac");async function ch(n,e,t,r,s,i){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:vr,eventId:s};if(e instanceof io){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",_E(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ks){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${TI}=${encodeURIComponent(l)}`:"";return`${EI(n)}?${Rs(c).slice(1)}${h}`}function EI({config:n}){return n.emulator?Ic(n,wI):`https://${n.authDomain}/${_I}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua="webStorageSupport";class bI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pc,this._completeRedirectFn=Wp,this._overrideRedirectResult=qv}async _openPopup(e,t,r,s){var o;Lt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await ch(e,t,r,Da(),s);return mI(e,i,kc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await ch(e,t,r,Da(),s);return Av(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Lt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await uI(e),r=new Gv(e);return t.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ua,{type:ua},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[ua];i!==void 0&&t(!!i),St(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Zv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Pp()||vp()||Sc()}}const vI=bI;var lh="@firebase/auth",uh="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CI(n){ur(new xn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kp(n)},h=new nv(r,s,i,l);return cv(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ur(new xn("auth-internal",e=>{const t=Ar(e.getProvider("auth").getImmediate());return(r=>new II(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(lh,uh,AI(n)),rn(lh,uh,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=300,RI=ip("authIdTokenMaxAge")||SI;let hh=null;const PI=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>RI)return;const s=t==null?void 0:t.token;hh!==s&&(hh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function kI(n=hp()){const e=Ec(n,"auth");if(e.isInitialized())return e.getImmediate();const t=av(n,{popupRedirectResolver:vI,persistence:[Hp,Mp,Pc]}),r=ip("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=PI(i.toString());_v(t,o,()=>o(t.currentUser)),yv(t,c=>o(c))}}const s=rp("auth");return s&&lv(t,`http://${s}`),t}function xI(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}rv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ht("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",xI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CI("Browser");var dh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var on,Gp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function w(){}w.prototype=y.prototype,E.F=y.prototype,E.prototype=new w,E.prototype.constructor=E,E.D=function(b,T,A){for(var _=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)_[Ge-2]=arguments[Ge];return y.prototype[T].apply(b,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,y,w){w||(w=0);const b=Array(16);if(typeof y=="string")for(var T=0;T<16;++T)b[T]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(T=0;T<16;++T)b[T]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=E.g[0],w=E.g[1],T=E.g[2];let A=E.g[3],_;_=y+(A^w&(T^A))+b[0]+3614090360&4294967295,y=w+(_<<7&4294967295|_>>>25),_=A+(T^y&(w^T))+b[1]+3905402710&4294967295,A=y+(_<<12&4294967295|_>>>20),_=T+(w^A&(y^w))+b[2]+606105819&4294967295,T=A+(_<<17&4294967295|_>>>15),_=w+(y^T&(A^y))+b[3]+3250441966&4294967295,w=T+(_<<22&4294967295|_>>>10),_=y+(A^w&(T^A))+b[4]+4118548399&4294967295,y=w+(_<<7&4294967295|_>>>25),_=A+(T^y&(w^T))+b[5]+1200080426&4294967295,A=y+(_<<12&4294967295|_>>>20),_=T+(w^A&(y^w))+b[6]+2821735955&4294967295,T=A+(_<<17&4294967295|_>>>15),_=w+(y^T&(A^y))+b[7]+4249261313&4294967295,w=T+(_<<22&4294967295|_>>>10),_=y+(A^w&(T^A))+b[8]+1770035416&4294967295,y=w+(_<<7&4294967295|_>>>25),_=A+(T^y&(w^T))+b[9]+2336552879&4294967295,A=y+(_<<12&4294967295|_>>>20),_=T+(w^A&(y^w))+b[10]+4294925233&4294967295,T=A+(_<<17&4294967295|_>>>15),_=w+(y^T&(A^y))+b[11]+2304563134&4294967295,w=T+(_<<22&4294967295|_>>>10),_=y+(A^w&(T^A))+b[12]+1804603682&4294967295,y=w+(_<<7&4294967295|_>>>25),_=A+(T^y&(w^T))+b[13]+4254626195&4294967295,A=y+(_<<12&4294967295|_>>>20),_=T+(w^A&(y^w))+b[14]+2792965006&4294967295,T=A+(_<<17&4294967295|_>>>15),_=w+(y^T&(A^y))+b[15]+1236535329&4294967295,w=T+(_<<22&4294967295|_>>>10),_=y+(T^A&(w^T))+b[1]+4129170786&4294967295,y=w+(_<<5&4294967295|_>>>27),_=A+(w^T&(y^w))+b[6]+3225465664&4294967295,A=y+(_<<9&4294967295|_>>>23),_=T+(y^w&(A^y))+b[11]+643717713&4294967295,T=A+(_<<14&4294967295|_>>>18),_=w+(A^y&(T^A))+b[0]+3921069994&4294967295,w=T+(_<<20&4294967295|_>>>12),_=y+(T^A&(w^T))+b[5]+3593408605&4294967295,y=w+(_<<5&4294967295|_>>>27),_=A+(w^T&(y^w))+b[10]+38016083&4294967295,A=y+(_<<9&4294967295|_>>>23),_=T+(y^w&(A^y))+b[15]+3634488961&4294967295,T=A+(_<<14&4294967295|_>>>18),_=w+(A^y&(T^A))+b[4]+3889429448&4294967295,w=T+(_<<20&4294967295|_>>>12),_=y+(T^A&(w^T))+b[9]+568446438&4294967295,y=w+(_<<5&4294967295|_>>>27),_=A+(w^T&(y^w))+b[14]+3275163606&4294967295,A=y+(_<<9&4294967295|_>>>23),_=T+(y^w&(A^y))+b[3]+4107603335&4294967295,T=A+(_<<14&4294967295|_>>>18),_=w+(A^y&(T^A))+b[8]+1163531501&4294967295,w=T+(_<<20&4294967295|_>>>12),_=y+(T^A&(w^T))+b[13]+2850285829&4294967295,y=w+(_<<5&4294967295|_>>>27),_=A+(w^T&(y^w))+b[2]+4243563512&4294967295,A=y+(_<<9&4294967295|_>>>23),_=T+(y^w&(A^y))+b[7]+1735328473&4294967295,T=A+(_<<14&4294967295|_>>>18),_=w+(A^y&(T^A))+b[12]+2368359562&4294967295,w=T+(_<<20&4294967295|_>>>12),_=y+(w^T^A)+b[5]+4294588738&4294967295,y=w+(_<<4&4294967295|_>>>28),_=A+(y^w^T)+b[8]+2272392833&4294967295,A=y+(_<<11&4294967295|_>>>21),_=T+(A^y^w)+b[11]+1839030562&4294967295,T=A+(_<<16&4294967295|_>>>16),_=w+(T^A^y)+b[14]+4259657740&4294967295,w=T+(_<<23&4294967295|_>>>9),_=y+(w^T^A)+b[1]+2763975236&4294967295,y=w+(_<<4&4294967295|_>>>28),_=A+(y^w^T)+b[4]+1272893353&4294967295,A=y+(_<<11&4294967295|_>>>21),_=T+(A^y^w)+b[7]+4139469664&4294967295,T=A+(_<<16&4294967295|_>>>16),_=w+(T^A^y)+b[10]+3200236656&4294967295,w=T+(_<<23&4294967295|_>>>9),_=y+(w^T^A)+b[13]+681279174&4294967295,y=w+(_<<4&4294967295|_>>>28),_=A+(y^w^T)+b[0]+3936430074&4294967295,A=y+(_<<11&4294967295|_>>>21),_=T+(A^y^w)+b[3]+3572445317&4294967295,T=A+(_<<16&4294967295|_>>>16),_=w+(T^A^y)+b[6]+76029189&4294967295,w=T+(_<<23&4294967295|_>>>9),_=y+(w^T^A)+b[9]+3654602809&4294967295,y=w+(_<<4&4294967295|_>>>28),_=A+(y^w^T)+b[12]+3873151461&4294967295,A=y+(_<<11&4294967295|_>>>21),_=T+(A^y^w)+b[15]+530742520&4294967295,T=A+(_<<16&4294967295|_>>>16),_=w+(T^A^y)+b[2]+3299628645&4294967295,w=T+(_<<23&4294967295|_>>>9),_=y+(T^(w|~A))+b[0]+4096336452&4294967295,y=w+(_<<6&4294967295|_>>>26),_=A+(w^(y|~T))+b[7]+1126891415&4294967295,A=y+(_<<10&4294967295|_>>>22),_=T+(y^(A|~w))+b[14]+2878612391&4294967295,T=A+(_<<15&4294967295|_>>>17),_=w+(A^(T|~y))+b[5]+4237533241&4294967295,w=T+(_<<21&4294967295|_>>>11),_=y+(T^(w|~A))+b[12]+1700485571&4294967295,y=w+(_<<6&4294967295|_>>>26),_=A+(w^(y|~T))+b[3]+2399980690&4294967295,A=y+(_<<10&4294967295|_>>>22),_=T+(y^(A|~w))+b[10]+4293915773&4294967295,T=A+(_<<15&4294967295|_>>>17),_=w+(A^(T|~y))+b[1]+2240044497&4294967295,w=T+(_<<21&4294967295|_>>>11),_=y+(T^(w|~A))+b[8]+1873313359&4294967295,y=w+(_<<6&4294967295|_>>>26),_=A+(w^(y|~T))+b[15]+4264355552&4294967295,A=y+(_<<10&4294967295|_>>>22),_=T+(y^(A|~w))+b[6]+2734768916&4294967295,T=A+(_<<15&4294967295|_>>>17),_=w+(A^(T|~y))+b[13]+1309151649&4294967295,w=T+(_<<21&4294967295|_>>>11),_=y+(T^(w|~A))+b[4]+4149444226&4294967295,y=w+(_<<6&4294967295|_>>>26),_=A+(w^(y|~T))+b[11]+3174756917&4294967295,A=y+(_<<10&4294967295|_>>>22),_=T+(y^(A|~w))+b[2]+718787259&4294967295,T=A+(_<<15&4294967295|_>>>17),_=w+(A^(T|~y))+b[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.v=function(E,y){y===void 0&&(y=E.length);const w=y-this.blockSize,b=this.C;let T=this.h,A=0;for(;A<y;){if(T==0)for(;A<=w;)s(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<y;)if(b[T++]=E.charCodeAt(A++),T==this.blockSize){s(this,b),T=0;break}}else for(;A<y;)if(b[T++]=E[A++],T==this.blockSize){s(this,b),T=0;break}}this.h=T,this.o+=y},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;y=this.o*8;for(var w=E.length-8;w<E.length;++w)E[w]=y&255,y/=256;for(this.v(E),E=Array(16),y=0,w=0;w<4;++w)for(let b=0;b<32;b+=8)E[y++]=this.g[w]>>>b&255;return E};function i(E,y){var w=c;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=y(E)}function o(E,y){this.h=y;const w=[];let b=!0;for(let T=E.length-1;T>=0;T--){const A=E[T]|0;b&&A==y||(w[T]=A,b=!1)}this.g=w}var c={};function l(E){return-128<=E&&E<128?i(E,function(y){return new o([y|0],y<0?-1:0)}):new o([E|0],E<0?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(E<0)return P(h(-E));const y=[];let w=1;for(let b=0;E>=w;b++)y[b]=E/w|0,w*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return P(f(E.substring(1),y));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(y,8));let b=p;for(let A=0;A<E.length;A+=8){var T=Math.min(8,E.length-A);const _=parseInt(E.substring(A,A+T),y);T<8?(T=h(Math.pow(y,T)),b=b.j(T).add(h(_))):(b=b.j(w),b=b.add(h(_)))}return b}var p=l(0),m=l(1),v=l(16777216);n=o.prototype,n.m=function(){if(V(this))return-P(this).m();let E=0,y=1;for(let w=0;w<this.g.length;w++){const b=this.i(w);E+=(b>=0?b:4294967296+b)*y,y*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(V(this))return"-"+P(this).toString(E);const y=h(Math.pow(E,6));var w=this;let b="";for(;;){const T=Ae(w,y).g;w=N(w,T.j(y));let A=((w.g.length>0?w.g[0]:w.h)>>>0).toString(E);if(w=T,R(w))return A+b;for(;A.length<6;)A="0"+A;b=A+b}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(let y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function V(E){return E.h==-1}n.l=function(E){return E=N(this,E),V(E)?-1:R(E)?0:1};function P(E){const y=E.g.length,w=[];for(let b=0;b<y;b++)w[b]=~E.g[b];return new o(w,~E.h).add(m)}n.abs=function(){return V(this)?P(this):this},n.add=function(E){const y=Math.max(this.g.length,E.g.length),w=[];let b=0;for(let T=0;T<=y;T++){let A=b+(this.i(T)&65535)+(E.i(T)&65535),_=(A>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);b=_>>>16,A&=65535,_&=65535,w[T]=_<<16|A}return new o(w,w[w.length-1]&-2147483648?-1:0)};function N(E,y){return E.add(P(y))}n.j=function(E){if(R(this)||R(E))return p;if(V(this))return V(E)?P(this).j(P(E)):P(P(this).j(E));if(V(E))return P(this.j(P(E)));if(this.l(v)<0&&E.l(v)<0)return h(this.m()*E.m());const y=this.g.length+E.g.length,w=[];for(var b=0;b<2*y;b++)w[b]=0;for(b=0;b<this.g.length;b++)for(let T=0;T<E.g.length;T++){const A=this.i(b)>>>16,_=this.i(b)&65535,Ge=E.i(T)>>>16,yn=E.i(T)&65535;w[2*b+2*T]+=_*yn,U(w,2*b+2*T),w[2*b+2*T+1]+=A*yn,U(w,2*b+2*T+1),w[2*b+2*T+1]+=_*Ge,U(w,2*b+2*T+1),w[2*b+2*T+2]+=A*Ge,U(w,2*b+2*T+2)}for(E=0;E<y;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=y;E<2*y;E++)w[E]=0;return new o(w,0)};function U(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function J(E,y){this.g=E,this.h=y}function Ae(E,y){if(R(y))throw Error("division by zero");if(R(E))return new J(p,p);if(V(E))return y=Ae(P(E),y),new J(P(y.g),P(y.h));if(V(y))return y=Ae(E,P(y)),new J(P(y.g),y.h);if(E.g.length>30){if(V(E)||V(y))throw Error("slowDivide_ only works with positive integers.");for(var w=m,b=y;b.l(E)<=0;)w=Qe(w),b=Qe(b);var T=Oe(w,1),A=Oe(b,1);for(b=Oe(b,2),w=Oe(w,2);!R(b);){var _=A.add(b);_.l(E)<=0&&(T=T.add(w),A=_),b=Oe(b,1),w=Oe(w,1)}return y=N(E,T.j(y)),new J(T,y)}for(T=p;E.l(y)>=0;){for(w=Math.max(1,Math.floor(E.m()/y.m())),b=Math.ceil(Math.log(w)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),A=h(w),_=A.j(y);V(_)||_.l(E)>0;)w-=b,A=h(w),_=A.j(y);R(A)&&(A=m),T=T.add(A),E=N(E,_)}return new J(T,E)}n.B=function(E){return Ae(this,E).h},n.and=function(E){const y=Math.max(this.g.length,E.g.length),w=[];for(let b=0;b<y;b++)w[b]=this.i(b)&E.i(b);return new o(w,this.h&E.h)},n.or=function(E){const y=Math.max(this.g.length,E.g.length),w=[];for(let b=0;b<y;b++)w[b]=this.i(b)|E.i(b);return new o(w,this.h|E.h)},n.xor=function(E){const y=Math.max(this.g.length,E.g.length),w=[];for(let b=0;b<y;b++)w[b]=this.i(b)^E.i(b);return new o(w,this.h^E.h)};function Qe(E){const y=E.g.length+1,w=[];for(let b=0;b<y;b++)w[b]=E.i(b)<<1|E.i(b-1)>>>31;return new o(w,E.h)}function Oe(E,y){const w=y>>5;y%=32;const b=E.g.length-w,T=[];for(let A=0;A<b;A++)T[A]=y>0?E.i(A+w)>>>y|E.i(A+w+1)<<32-y:E.i(A+w);return new o(T,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Gp=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,on=o}).apply(typeof dh<"u"?dh:typeof self<"u"?self:typeof window<"u"?window:{});var ni=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kp,Jr,Qp,di,Ma,Yp,Xp,Zp;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ni=="object"&&ni];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var I=a[g];if(!(I in d))break e;d=d[I]}a=a[a.length-1],g=d[a],u=u(g),u!=g&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var d=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&d.push([g,u[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,d){return a.call.apply(a.bind,arguments)}function h(a,u,d){return h=l,h.apply(null,arguments)}function f(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,I,S){for(var D=Array(arguments.length-2),W=2;W<arguments.length;W++)D[W-2]=arguments[W];return u.prototype[I].apply(g,D)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function v(a){const u=a.length;if(u>0){const d=Array(u);for(let g=0;g<u;g++)d[g]=a[g];return d}return[]}function R(a,u){for(let g=1;g<arguments.length;g++){const I=arguments[g];var d=typeof I;if(d=d!="object"?d:I?Array.isArray(I)?"array":d:"null",d=="array"||d=="object"&&typeof I.length=="number"){d=a.length||0;const S=I.length||0;a.length=d+S;for(let D=0;D<S;D++)a[d+D]=I[D]}else a.push(I)}}class V{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function P(a){o.setTimeout(()=>{throw a},0)}function N(){var a=E;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class U{constructor(){this.h=this.g=null}add(u,d){const g=J.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var J=new V(()=>new Ae,a=>a.reset());class Ae{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Qe,Oe=!1,E=new U,y=()=>{const a=Promise.resolve(void 0);Qe=()=>{a.then(w)}};function w(){for(var a;a=N();){try{a.h.call(a.g)}catch(d){P(d)}var u=J;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}Oe=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a})();function _(a){return/^[\s\xa0]*$/.test(a)}function Ge(a,u){T.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}p(Ge,T),Ge.prototype.init=function(a,u){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ge.Z.h.call(this)},Ge.prototype.h=function(){Ge.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var yn="closure_listenable_"+(Math.random()*1e6|0),Gm=0;function Km(a,u,d,g,I){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=I,this.key=++Gm,this.da=this.fa=!1}function Fs(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Us(a,u,d){for(const g in a)u.call(d,a[g],g,a)}function Qm(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function El(a){const u={};for(const d in a)u[d]=a[d];return u}const bl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vl(a,u){let d,g;for(let I=1;I<arguments.length;I++){g=arguments[I];for(d in g)a[d]=g[d];for(let S=0;S<bl.length;S++)d=bl[S],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function js(a){this.src=a,this.g={},this.h=0}js.prototype.add=function(a,u,d,g,I){const S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);const D=xo(a,u,g,I);return D>-1?(u=a[D],d||(u.fa=!1)):(u=new Km(u,this.src,S,!!g,I),u.fa=d,a.push(u)),u};function ko(a,u){const d=u.type;if(d in a.g){var g=a.g[d],I=Array.prototype.indexOf.call(g,u,void 0),S;(S=I>=0)&&Array.prototype.splice.call(g,I,1),S&&(Fs(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function xo(a,u,d,g){for(let I=0;I<a.length;++I){const S=a[I];if(!S.da&&S.listener==u&&S.capture==!!d&&S.ha==g)return I}return-1}var Vo="closure_lm_"+(Math.random()*1e6|0),Do={};function Il(a,u,d,g,I){if(Array.isArray(u)){for(let S=0;S<u.length;S++)Il(a,u[S],d,g,I);return null}return d=Sl(d),a&&a[yn]?a.J(u,d,c(g)?!!g.capture:!1,I):Ym(a,u,d,!1,g,I)}function Ym(a,u,d,g,I,S){if(!u)throw Error("Invalid event type");const D=c(I)?!!I.capture:!!I;let W=Oo(a);if(W||(a[Vo]=W=new js(a)),d=W.add(u,d,g,D,S),d.proxy)return d;if(g=Xm(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)A||(I=D),I===void 0&&(I=!1),a.addEventListener(u.toString(),g,I);else if(a.attachEvent)a.attachEvent(Cl(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Xm(){function a(d){return u.call(a.src,a.listener,d)}const u=Zm;return a}function Al(a,u,d,g,I){if(Array.isArray(u))for(var S=0;S<u.length;S++)Al(a,u[S],d,g,I);else g=c(g)?!!g.capture:!!g,d=Sl(d),a&&a[yn]?(a=a.i,S=String(u).toString(),S in a.g&&(u=a.g[S],d=xo(u,d,g,I),d>-1&&(Fs(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[S],a.h--)))):a&&(a=Oo(a))&&(u=a.g[u.toString()],a=-1,u&&(a=xo(u,d,g,I)),(d=a>-1?u[a]:null)&&No(d))}function No(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[yn])ko(u.i,a);else{var d=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(d,g,a.capture):u.detachEvent?u.detachEvent(Cl(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=Oo(u))?(ko(d,a),d.h==0&&(d.src=null,u[Vo]=null)):Fs(a)}}}function Cl(a){return a in Do?Do[a]:Do[a]="on"+a}function Zm(a,u){if(a.da)a=!0;else{u=new Ge(u,this);const d=a.listener,g=a.ha||a.src;a.fa&&No(a),a=d.call(g,u)}return a}function Oo(a){return a=a[Vo],a instanceof js?a:null}var Mo="__closure_events_fn_"+(Math.random()*1e9>>>0);function Sl(a){return typeof a=="function"?a:(a[Mo]||(a[Mo]=function(u){return a.handleEvent(u)}),a[Mo])}function Me(){b.call(this),this.i=new js(this),this.M=this,this.G=null}p(Me,b),Me.prototype[yn]=!0,Me.prototype.removeEventListener=function(a,u,d,g){Al(this,a,u,d,g)};function ze(a,u){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new T(u,a);else if(u instanceof T)u.target=u.target||a;else{var I=u;u=new T(g,a),vl(u,I)}I=!0;let S,D;if(d)for(D=d.length-1;D>=0;D--)S=u.g=d[D],I=Bs(S,g,!0,u)&&I;if(S=u.g=a,I=Bs(S,g,!0,u)&&I,I=Bs(S,g,!1,u)&&I,d)for(D=0;D<d.length;D++)S=u.g=d[D],I=Bs(S,g,!1,u)&&I}Me.prototype.N=function(){if(Me.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let g=0;g<d.length;g++)Fs(d[g]);delete a.g[u],a.h--}}this.G=null},Me.prototype.J=function(a,u,d,g){return this.i.add(String(a),u,!1,d,g)},Me.prototype.K=function(a,u,d,g){return this.i.add(String(a),u,!0,d,g)};function Bs(a,u,d,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let I=!0;for(let S=0;S<u.length;++S){const D=u[S];if(D&&!D.da&&D.capture==d){const W=D.listener,be=D.ha||D.src;D.fa&&ko(a.i,D),I=W.call(be,g)!==!1&&I}}return I&&!g.defaultPrevented}function ey(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function Rl(a){a.g=ey(()=>{a.g=null,a.i&&(a.i=!1,Rl(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class ty extends b{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Rl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function kr(a){b.call(this),this.h=a,this.g={}}p(kr,b);var Pl=[];function kl(a){Us(a.g,function(u,d){this.g.hasOwnProperty(d)&&No(u)},a),a.g={}}kr.prototype.N=function(){kr.Z.N.call(this),kl(this)},kr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lo=o.JSON.stringify,ny=o.JSON.parse,ry=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function xl(){}function Vl(){}var xr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Fo(){T.call(this,"d")}p(Fo,T);function Uo(){T.call(this,"c")}p(Uo,T);var _n={},Dl=null;function Hs(){return Dl=Dl||new Me}_n.Ia="serverreachability";function Nl(a){T.call(this,_n.Ia,a)}p(Nl,T);function Vr(a){const u=Hs();ze(u,new Nl(u))}_n.STAT_EVENT="statevent";function Ol(a,u){T.call(this,_n.STAT_EVENT,a),this.stat=u}p(Ol,T);function We(a){const u=Hs();ze(u,new Ol(u,a))}_n.Ja="timingevent";function Ml(a,u){T.call(this,_n.Ja,a),this.size=u}p(Ml,T);function Dr(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Nr(){this.g=!0}Nr.prototype.ua=function(){this.g=!1};function sy(a,u,d,g,I,S){a.info(function(){if(a.g)if(S){var D="",W=S.split("&");for(let ie=0;ie<W.length;ie++){var be=W[ie].split("=");if(be.length>1){const Ce=be[0];be=be[1];const Tt=Ce.split("_");D=Tt.length>=2&&Tt[1]=="type"?D+(Ce+"="+be+"&"):D+(Ce+"=redacted&")}}}else D=null;else D=S;return"XMLHTTP REQ ("+g+") [attempt "+I+"]: "+u+`
`+d+`
`+D})}function iy(a,u,d,g,I,S,D){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+I+"]: "+u+`
`+d+`
`+S+" "+D})}function zn(a,u,d,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+ay(a,d)+(g?" "+g:"")})}function oy(a,u){a.info(function(){return"TIMEOUT: "+u})}Nr.prototype.info=function(){};function ay(a,u){if(!a.g)return u;if(!u)return null;try{const S=JSON.parse(u);if(S){for(a=0;a<S.length;a++)if(Array.isArray(S[a])){var d=S[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var I=g[0];if(I!="noop"&&I!="stop"&&I!="close")for(let D=1;D<g.length;D++)g[D]=""}}}}return Lo(S)}catch{return u}}var qs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ll={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Fl;function jo(){}p(jo,xl),jo.prototype.g=function(){return new XMLHttpRequest},Fl=new jo;function Or(a){return encodeURIComponent(String(a))}function cy(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function Ht(a,u,d,g){this.j=a,this.i=u,this.l=d,this.S=g||1,this.V=new kr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ul}function Ul(){this.i=null,this.g="",this.h=!1}var jl={},Bo={};function Ho(a,u,d){a.M=1,a.A=zs(wt(u)),a.u=d,a.R=!0,Bl(a,null)}function Bl(a,u){a.F=Date.now(),$s(a),a.B=wt(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),eu(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Ul,a.g=_u(a.j,d?u:null,!a.u),a.P>0&&(a.O=new ty(h(a.Y,a,a.g),a.P)),u=a.V,d=a.g,g=a.ba;var I="readystatechange";Array.isArray(I)||(I&&(Pl[0]=I.toString()),I=Pl);for(let S=0;S<I.length;S++){const D=Il(d,I[S],g||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=a.J?El(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),Vr(),sy(a.i,a.v,a.B,a.l,a.S,a.u)}Ht.prototype.ba=function(a){a=a.target;const u=this.O;u&&zt(a)==3?u.j():this.Y(a)},Ht.prototype.Y=function(a){try{if(a==this.g)e:{const W=zt(this.g),be=this.g.ya(),ie=this.g.ca();if(!(W<3)&&(W!=3||this.g&&(this.h.h||this.g.la()||au(this.g)))){this.K||W!=4||be==7||(be==8||ie<=0?Vr(3):Vr(2)),qo(this);var u=this.g.ca();this.X=u;var d=ly(this);if(this.o=u==200,iy(this.i,this.v,this.B,this.l,this.S,W,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,I=this.g;if((g=I.g?I.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(g)){var S=g;break t}}S=null}if(a=S)zn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,$o(this,a);else{this.o=!1,this.m=3,We(12),wn(this),Mr(this);break e}}if(this.R){a=!0;let Ce;for(;!this.K&&this.C<d.length;)if(Ce=uy(this,d),Ce==Bo){W==4&&(this.m=4,We(14),a=!1),zn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ce==jl){this.m=4,We(15),zn(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else zn(this.i,this.l,Ce,null),$o(this,Ce);if(Hl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||d.length!=0||this.h.h||(this.m=1,We(16),a=!1),this.o=this.o&&a,!a)zn(this.i,this.l,d,"[Invalid Chunked Response]"),wn(this),Mr(this);else if(d.length>0&&!this.W){this.W=!0;var D=this.j;D.g==this&&D.aa&&!D.P&&(D.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Xo(D),D.P=!0,We(11))}}else zn(this.i,this.l,d,null),$o(this,d);W==4&&wn(this),this.o&&!this.K&&(W==4?pu(this.j,this):(this.o=!1,$s(this)))}else Iy(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,We(12)):(this.m=0,We(13)),wn(this),Mr(this)}}}catch{}finally{}};function ly(a){if(!Hl(a))return a.g.la();const u=au(a.g);if(u==="")return"";let d="";const g=u.length,I=zt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return wn(a),Mr(a),"";a.h.i=new o.TextDecoder}for(let S=0;S<g;S++)a.h.h=!0,d+=a.h.i.decode(u[S],{stream:!(I&&S==g-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function Hl(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function uy(a,u){var d=a.C,g=u.indexOf(`
`,d);return g==-1?Bo:(d=Number(u.substring(d,g)),isNaN(d)?jl:(g+=1,g+d>u.length?Bo:(u=u.slice(g,g+d),a.C=g+d,u)))}Ht.prototype.cancel=function(){this.K=!0,wn(this)};function $s(a){a.T=Date.now()+a.H,ql(a,a.H)}function ql(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Dr(h(a.aa,a),u)}function qo(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Ht.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(oy(this.i,this.B),this.M!=2&&(Vr(),We(17)),wn(this),this.m=2,Mr(this)):ql(this,this.T-a)};function Mr(a){a.j.I==0||a.K||pu(a.j,a)}function wn(a){qo(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,kl(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function $o(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||zo(d.h,a))){if(!a.L&&zo(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var I=g;if(I[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Qs(d),Gs(d);else break e;Yo(d),We(18)}}else d.xa=I[1],0<d.xa-d.K&&I[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Dr(h(d.Va,d),6e3));Wl(d.h)<=1&&d.ta&&(d.ta=void 0)}else En(d,11)}else if((a.L||d.g==a)&&Qs(d),!_(u))for(I=d.Ba.g.parse(u),u=0;u<I.length;u++){let ie=I[u];const Ce=ie[0];if(!(Ce<=d.K))if(d.K=Ce,ie=ie[1],d.I==2)if(ie[0]=="c"){d.M=ie[1],d.ba=ie[2];const Tt=ie[3];Tt!=null&&(d.ka=Tt,d.j.info("VER="+d.ka));const bn=ie[4];bn!=null&&(d.za=bn,d.j.info("SVER="+d.za));const Wt=ie[5];Wt!=null&&typeof Wt=="number"&&Wt>0&&(g=1.5*Wt,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Jt=a.g;if(Jt){const Xs=Jt.g?Jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xs){var S=g.h;S.g||Xs.indexOf("spdy")==-1&&Xs.indexOf("quic")==-1&&Xs.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Wo(S,S.h),S.h=null))}if(g.G){const Zo=Jt.g?Jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Zo&&(g.wa=Zo,ae(g.J,g.G,Zo))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var D=a;if(g.na=yu(g,g.L?g.ba:null,g.W),D.L){Jl(g.h,D);var W=D,be=g.O;be&&(W.H=be),W.D&&(qo(W),$s(W)),g.g=D}else du(g);d.i.length>0&&Ks(d)}else ie[0]!="stop"&&ie[0]!="close"||En(d,7);else d.I==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?En(d,7):Qo(d):ie[0]!="noop"&&d.l&&d.l.qa(ie),d.A=0)}}Vr(4)}catch{}}var hy=class{constructor(a,u){this.g=a,this.map=u}};function $l(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function zl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wl(a){return a.h?1:a.g?a.g.size:0}function zo(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Wo(a,u){a.g?a.g.add(u):a.h=u}function Jl(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}$l.prototype.cancel=function(){if(this.i=Gl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Gl(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return v(a.i)}var Kl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dy(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let I,S=null;g>=0?(I=a[d].substring(0,g),S=a[d].substring(g+1)):I=a[d],u(I,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function qt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof qt?(this.l=a.l,Lr(this,a.j),this.o=a.o,this.g=a.g,Fr(this,a.u),this.h=a.h,Jo(this,tu(a.i)),this.m=a.m):a&&(u=String(a).match(Kl))?(this.l=!1,Lr(this,u[1]||"",!0),this.o=Ur(u[2]||""),this.g=Ur(u[3]||"",!0),Fr(this,u[4]),this.h=Ur(u[5]||"",!0),Jo(this,u[6]||"",!0),this.m=Ur(u[7]||"")):(this.l=!1,this.i=new Br(null,this.l))}qt.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(jr(u,Ql,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(jr(u,Ql,!0),"@"),a.push(Or(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(jr(d,d.charAt(0)=="/"?gy:py,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",jr(d,yy)),a.join("")},qt.prototype.resolve=function(a){const u=wt(this);let d=!!a.j;d?Lr(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var g=a.h;if(d)Fr(u,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var I=u.h.lastIndexOf("/");I!=-1&&(g=u.h.slice(0,I+1)+g)}if(I=g,I==".."||I==".")g="";else if(I.indexOf("./")!=-1||I.indexOf("/.")!=-1){g=I.lastIndexOf("/",0)==0,I=I.split("/");const S=[];for(let D=0;D<I.length;){const W=I[D++];W=="."?g&&D==I.length&&S.push(""):W==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),g&&D==I.length&&S.push("")):(S.push(W),g=!0)}g=S.join("/")}else g=I}return d?u.h=g:d=a.i.toString()!=="",d?Jo(u,tu(a.i)):d=!!a.m,d&&(u.m=a.m),u};function wt(a){return new qt(a)}function Lr(a,u,d){a.j=d?Ur(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Fr(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Jo(a,u,d){u instanceof Br?(a.i=u,_y(a.i,a.l)):(d||(u=jr(u,my)),a.i=new Br(u,a.l))}function ae(a,u,d){a.i.set(u,d)}function zs(a){return ae(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ur(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function jr(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,fy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function fy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ql=/[#\/\?@]/g,py=/[#\?:]/g,gy=/[#\?]/g,my=/[#\?@]/g,yy=/#/g;function Br(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Tn(a){a.g||(a.g=new Map,a.h=0,a.i&&dy(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Br.prototype,n.add=function(a,u){Tn(this),this.i=null,a=Wn(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Yl(a,u){Tn(a),u=Wn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Xl(a,u){return Tn(a),u=Wn(a,u),a.g.has(u)}n.forEach=function(a,u){Tn(this),this.g.forEach(function(d,g){d.forEach(function(I){a.call(u,I,g,this)},this)},this)};function Zl(a,u){Tn(a);let d=[];if(typeof u=="string")Xl(a,u)&&(d=d.concat(a.g.get(Wn(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}n.set=function(a,u){return Tn(this),this.i=null,a=Wn(this,a),Xl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=Zl(this,a),a.length>0?String(a[0]):u):u};function eu(a,u,d){Yl(a,u),d.length>0&&(a.i=null,a.g.set(Wn(a,u),v(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var d=u[g];const I=Or(d);d=Zl(this,d);for(let S=0;S<d.length;S++){let D=I;d[S]!==""&&(D+="="+Or(d[S])),a.push(D)}}return this.i=a.join("&")};function tu(a){const u=new Br;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function Wn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function _y(a,u){u&&!a.j&&(Tn(a),a.i=null,a.g.forEach(function(d,g){const I=g.toLowerCase();g!=I&&(Yl(this,g),eu(this,I,d))},a)),a.j=u}function wy(a,u){const d=new Nr;if(o.Image){const g=new Image;g.onload=f($t,d,"TestLoadImage: loaded",!0,u,g),g.onerror=f($t,d,"TestLoadImage: error",!1,u,g),g.onabort=f($t,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=f($t,d,"TestLoadImage: timeout",!1,u,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function Ty(a,u){const d=new Nr,g=new AbortController,I=setTimeout(()=>{g.abort(),$t(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(S=>{clearTimeout(I),S.ok?$t(d,"TestPingServer: ok",!0,u):$t(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),$t(d,"TestPingServer: error",!1,u)})}function $t(a,u,d,g,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),g(d)}catch{}}function Ey(){this.g=new ry}function Go(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Go,xl),Go.prototype.g=function(){return new Ws(this.i,this.h)};function Ws(a,u){Me.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Ws,Me),n=Ws.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,qr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Hr(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,qr(this)),this.g&&(this.readyState=3,qr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;nu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function nu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Hr(this):qr(this),this.readyState==3&&nu(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Hr(this))},n.Na=function(a){this.g&&(this.response=a,Hr(this))},n.ga=function(){this.g&&Hr(this)};function Hr(a){a.readyState=4,a.l=null,a.j=null,a.B=null,qr(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function qr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ws.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ru(a){let u="";return Us(a,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function Ko(a,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=ru(d),typeof a=="string"?d!=null&&Or(d):ae(a,u,d))}function fe(a){Me.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(fe,Me);var by=/^https?$/i,vy=["POST","PUT"];n=fe.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Fl.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(S){su(this,S);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var I in g)d.set(I,g[I]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const S of g.keys())d.set(S,g.get(S));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),I=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(vy,u,void 0)>=0)||g||I||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,D]of d)this.g.setRequestHeader(S,D);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(S){su(this,S)}};function su(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,iu(a),Js(a)}function iu(a){a.A||(a.A=!0,ze(a,"complete"),ze(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ze(this,"complete"),ze(this,"abort"),Js(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Js(this,!0)),fe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ou(this):this.Xa())},n.Xa=function(){ou(this)};function ou(a){if(a.h&&typeof i<"u"){if(a.v&&zt(a)==4)setTimeout(a.Ca.bind(a),0);else if(ze(a,"readystatechange"),zt(a)==4){a.h=!1;try{const S=a.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=S===0){let D=String(a.D).match(Kl)[1]||null;!D&&o.self&&o.self.location&&(D=o.self.location.protocol.slice(0,-1)),g=!by.test(D?D.toLowerCase():"")}d=g}if(d)ze(a,"complete"),ze(a,"success");else{a.o=6;try{var I=zt(a)>2?a.g.statusText:""}catch{I=""}a.l=I+" ["+a.ca()+"]",iu(a)}}finally{Js(a)}}}}function Js(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||ze(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function zt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return zt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),ny(u)}};function au(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Iy(a){const u={};a=(a.g&&zt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var d=cy(a[g]);const I=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=u[I]||[];u[I]=S,S.push(d)}Qm(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $r(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function cu(a){this.za=0,this.i=[],this.j=new Nr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$r("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$r("baseRetryDelayMs",5e3,a),this.Za=$r("retryDelaySeedMs",1e4,a),this.Ta=$r("forwardChannelMaxRetries",2,a),this.va=$r("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new $l(a&&a.concurrentRequestLimit),this.Ba=new Ey,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=cu.prototype,n.ka=8,n.I=1,n.connect=function(a,u,d,g){We(0),this.W=a,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=yu(this,null,this.W),Ks(this)};function Qo(a){if(lu(a),a.I==3){var u=a.V++,d=wt(a.J);if(ae(d,"SID",a.M),ae(d,"RID",u),ae(d,"TYPE","terminate"),zr(a,d),u=new Ht(a,a.j,u),u.M=2,u.A=zs(wt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=_u(u.j,null),u.g.ea(u.A)),u.F=Date.now(),$s(u)}mu(a)}function Gs(a){a.g&&(Xo(a),a.g.cancel(),a.g=null)}function lu(a){Gs(a),a.v&&(o.clearTimeout(a.v),a.v=null),Qs(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ks(a){if(!zl(a.h)&&!a.m){a.m=!0;var u=a.Ea;Qe||y(),Oe||(Qe(),Oe=!0),E.add(u,a),a.D=0}}function Ay(a,u){return Wl(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Dr(h(a.Ea,a,u),gu(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const I=new Ht(this,this.j,a);let S=this.o;if(this.U&&(S?(S=El(S),vl(S,this.U)):S=this.U),this.u!==null||this.R||(I.J=S,S=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=hu(this,I,u),d=wt(this.J),ae(d,"RID",a),ae(d,"CVER",22),this.G&&ae(d,"X-HTTP-Session-Id",this.G),zr(this,d),S&&(this.R?u="headers="+Or(ru(S))+"&"+u:this.u&&Ko(d,this.u,S)),Wo(this.h,I),this.Ra&&ae(d,"TYPE","init"),this.S?(ae(d,"$req",u),ae(d,"SID","null"),I.U=!0,Ho(I,d,null)):Ho(I,d,u),this.I=2}}else this.I==3&&(a?uu(this,a):this.i.length==0||zl(this.h)||uu(this))};function uu(a,u){var d;u?d=u.l:d=a.V++;const g=wt(a.J);ae(g,"SID",a.M),ae(g,"RID",d),ae(g,"AID",a.K),zr(a,g),a.u&&a.o&&Ko(g,a.u,a.o),d=new Ht(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=hu(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Wo(a.h,d),Ho(d,g,u)}function zr(a,u){a.H&&Us(a.H,function(d,g){ae(u,g,d)}),a.l&&Us({},function(d,g){ae(u,g,d)})}function hu(a,u,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var I=a.i;let W=-1;for(;;){const be=["count="+d];W==-1?d>0?(W=I[0].g,be.push("ofs="+W)):W=0:be.push("ofs="+W);let ie=!0;for(let Ce=0;Ce<d;Ce++){var S=I[Ce].g;const Tt=I[Ce].map;if(S-=W,S<0)W=Math.max(0,I[Ce].g-100),ie=!1;else try{S="req"+S+"_"||"";try{var D=Tt instanceof Map?Tt:Object.entries(Tt);for(const[bn,Wt]of D){let Jt=Wt;c(Wt)&&(Jt=Lo(Wt)),be.push(S+bn+"="+encodeURIComponent(Jt))}}catch(bn){throw be.push(S+"type="+encodeURIComponent("_badmap")),bn}}catch{g&&g(Tt)}}if(ie){D=be.join("&");break e}}D=void 0}return a=a.i.splice(0,d),u.G=a,D}function du(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;Qe||y(),Oe||(Qe(),Oe=!0),E.add(u,a),a.A=0}}function Yo(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Dr(h(a.Da,a),gu(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,fu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Dr(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,We(10),Gs(this),fu(this))};function Xo(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function fu(a){a.g=new Ht(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=wt(a.na);ae(u,"RID","rpc"),ae(u,"SID",a.M),ae(u,"AID",a.K),ae(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&ae(u,"TO",a.ia),ae(u,"TYPE","xmlhttp"),zr(a,u),a.u&&a.o&&Ko(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=zs(wt(u)),d.u=null,d.R=!0,Bl(d,a)}n.Va=function(){this.C!=null&&(this.C=null,Gs(this),Yo(this),We(19))};function Qs(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function pu(a,u){var d=null;if(a.g==u){Qs(a),Xo(a),a.g=null;var g=2}else if(zo(a.h,u))d=u.G,Jl(a.h,u),g=1;else return;if(a.I!=0){if(u.o)if(g==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var I=a.D;g=Hs(),ze(g,new Ml(g,d)),Ks(a)}else du(a);else if(I=u.m,I==3||I==0&&u.X>0||!(g==1&&Ay(a,u)||g==2&&Yo(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),I){case 1:En(a,5);break;case 4:En(a,10);break;case 3:En(a,6);break;default:En(a,2)}}}function gu(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function En(a,u){if(a.j.info("Error code "+u),u==2){var d=h(a.bb,a),g=a.Ua;const I=!g;g=new qt(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Lr(g,"https"),zs(g),I?wy(g.toString(),d):Ty(g.toString(),d)}else We(2);a.I=0,a.l&&a.l.pa(u),mu(a),lu(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function mu(a){if(a.I=0,a.ja=[],a.l){const u=Gl(a.h);(u.length!=0||a.i.length!=0)&&(R(a.ja,u),R(a.ja,a.i),a.h.i.length=0,v(a.i),a.i.length=0),a.l.oa()}}function yu(a,u,d){var g=d instanceof qt?wt(d):new qt(d);if(g.g!="")u&&(g.g=u+"."+g.g),Fr(g,g.u);else{var I=o.location;g=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;const S=new qt(null);g&&Lr(S,g),u&&(S.g=u),I&&Fr(S,I),d&&(S.h=d),g=S}return d=a.G,u=a.wa,d&&u&&ae(g,d,u),ae(g,"VER",a.ka),zr(a,g),g}function _u(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new fe(new Go({ab:d})):new fe(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function wu(){}n=wu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ys(){}Ys.prototype.g=function(a,u){return new Ye(a,u)};function Ye(a,u){Me.call(this),this.g=new cu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!_(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!_(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Jn(this)}p(Ye,Me),Ye.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ye.prototype.close=function(){Qo(this.g)},Ye.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Lo(a),a=d);u.i.push(new hy(u.Ya++,a)),u.I==3&&Ks(u)},Ye.prototype.N=function(){this.g.l=null,delete this.j,Qo(this.g),delete this.g,Ye.Z.N.call(this)};function Tu(a){Fo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}p(Tu,Fo);function Eu(){Uo.call(this),this.status=1}p(Eu,Uo);function Jn(a){this.g=a}p(Jn,wu),Jn.prototype.ra=function(){ze(this.g,"a")},Jn.prototype.qa=function(a){ze(this.g,new Tu(a))},Jn.prototype.pa=function(a){ze(this.g,new Eu)},Jn.prototype.oa=function(){ze(this.g,"b")},Ys.prototype.createWebChannel=Ys.prototype.g,Ye.prototype.send=Ye.prototype.o,Ye.prototype.open=Ye.prototype.m,Ye.prototype.close=Ye.prototype.close,Zp=function(){return new Ys},Xp=function(){return Hs()},Yp=_n,Ma={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},qs.NO_ERROR=0,qs.TIMEOUT=8,qs.HTTP_ERROR=6,di=qs,Ll.COMPLETE="complete",Qp=Ll,Vl.EventType=xr,xr.OPEN="a",xr.CLOSE="b",xr.ERROR="c",xr.MESSAGE="d",Me.prototype.listen=Me.prototype.J,Jr=Vl,fe.prototype.listenOnce=fe.prototype.K,fe.prototype.getLastError=fe.prototype.Ha,fe.prototype.getLastErrorCode=fe.prototype.ya,fe.prototype.getStatus=fe.prototype.ca,fe.prototype.getResponseJson=fe.prototype.La,fe.prototype.getResponseText=fe.prototype.la,fe.prototype.send=fe.prototype.ea,fe.prototype.setWithCredentials=fe.prototype.Fa,Kp=fe}).apply(typeof ni<"u"?ni:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cr="12.8.0";function VI(n){Cr=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new wc("@firebase/firestore");function Kn(){return Dn.logLevel}function M(n,...e){if(Dn.logLevel<=K.DEBUG){const t=e.map(Dc);Dn.debug(`Firestore (${Cr}): ${n}`,...t)}}function Ft(n,...e){if(Dn.logLevel<=K.ERROR){const t=e.map(Dc);Dn.error(`Firestore (${Cr}): ${n}`,...t)}}function dr(n,...e){if(Dn.logLevel<=K.WARN){const t=e.map(Dc);Dn.warn(`Firestore (${Cr}): ${n}`,...t)}}function Dc(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,eg(n,r,t)}function eg(n,e,t){let r=`FIRESTORE (${Cr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ft(r),new Error(r)}function re(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||eg(e,s,r)}function $(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Bt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ue.UNAUTHENTICATED)))}shutdown(){}}class NI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class OI{constructor(e){this.t=e,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){re(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Ot;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ot,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ot)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string",31837,{l:r}),new tg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string",2055,{h:e}),new Ue(e)}}class MI{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class LI{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new MI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ue.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class fh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,nt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){re(this.o===void 0,3512);const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new fh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new fh(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=UI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function Q(n,e){return n<e?-1:n>e?1:0}function La(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return ha(s)===ha(i)?Q(s,i):ha(s)?1:-1}return Q(n.length,e.length)}const jI=55296,BI=57343;function ha(n){const e=n.charCodeAt(0);return e>=jI&&e<=BI}function fr(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="__name__";class Et{constructor(e,t,r){t===void 0?t=0:t>e.length&&B(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&B(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Et.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Et?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Et.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return Q(e.length,t.length)}static compareSegments(e,t){const r=Et.isNumericId(e),s=Et.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Et.extractNumericId(e).compare(Et.extractNumericId(t)):La(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return on.fromString(e.substring(4,e.length-2))}}class oe extends Et{construct(e,t,r){return new oe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new oe(t)}static emptyPath(){return new oe([])}}const HI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xe extends Et{construct(e,t,r){return new xe(e,t,r)}static isValidIdentifier(e){return HI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ph}static keyField(){return new xe([ph])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new O(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new O(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xe(t)}static emptyPath(){return new xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(oe.fromString(e))}static fromName(e){return new j(oe.fromString(e).popFirst(5))}static empty(){return new j(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new oe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(n,e,t){if(!t)throw new O(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function qI(n,e,t,r){if(e===!0&&r===!0)throw new O(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function gh(n){if(!j.isDocumentKey(n))throw new O(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function mh(n){if(j.isDocumentKey(n))throw new O(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function rg(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function co(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B(12329,{type:typeof n})}function dt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=co(n);throw new O(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n,e){const t={typeString:n};return e&&(t.value=e),t}function Vs(n,e){if(!rg(n))throw new O(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new O(k.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=-62135596800,_h=1e6;class le{static now(){return le.fromMillis(Date.now())}static fromDate(e){return le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*_h);return new le(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<yh)throw new O(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_h}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Vs(e,le._jsonSchema))return new le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-yh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}le._jsonSchemaVersion="firestore/timestamp/1.0",le._jsonSchema={type:Ee("string",le._jsonSchemaVersion),seconds:Ee("number"),nanoseconds:Ee("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromTimestamp(e){return new q(e)}static min(){return new q(new le(0,0))}static max(){return new q(new le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=-1;function $I(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=q.fromTimestamp(r===1e9?new le(t+1,0):new le(t,r));return new hn(s,j.empty(),e)}function zI(n){return new hn(n.readTime,n.key,hs)}class hn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new hn(q.min(),j.empty(),hs)}static max(){return new hn(q.max(),j.empty(),hs)}}function WI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class GI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==JI)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):x.reject(t)}static resolve(e){return new x(((t,r)=>{t(e)}))}static reject(e){return new x(((t,r)=>{r(e)}))}static waitFor(e){return new x(((t,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&t()}),(l=>r(l)))})),o=!0,i===s&&t()}))}static or(e){let t=x.resolve(!1);for(const r of e)t=t.next((s=>s?x.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new x(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next((f=>{o[h]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,t){return new x(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function KI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Rr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}lo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=-1;function uo(n){return n==null}function Di(n){return n===0&&1/n==-1/0}function QI(n){return typeof n=="number"&&Number.isInteger(n)&&!Di(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="";function YI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=wh(e)),e=XI(n.get(t),e);return wh(e)}function XI(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case sg:t+="";break;default:t+=i}}return t}function wh(n){return n+sg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function jn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ig(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){this.comparator=e,this.root=t||ke.EMPTY}insert(e,t){return new de(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ri(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ri(this.root,e,this.comparator,!1)}getReverseIterator(){return new ri(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ri(this.root,e,this.comparator,!0)}}class ri{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ke.RED,this.left=s??ke.EMPTY,this.right=i??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ke(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ke.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw B(43730,{key:this.key,value:this.value});if(this.right.isRed())throw B(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw B(27949);return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw B(57766)}get value(){throw B(16141)}get color(){throw B(16727)}get left(){throw B(29726)}get right(){throw B(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new ke(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Eh(this.data.getIterator())}getIteratorFrom(e){return new Eh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ve(this.comparator);return t.data=e,t}}class Eh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.fields=e,e.sort(xe.comparator)}static empty(){return new ut([])}unionWith(e){let t=new ve(xe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ut(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new og("Invalid base64 string: "+i):i}})(e);return new Ne(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Ne(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ne.EMPTY_BYTE_STRING=new Ne("");const ZI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dn(n){if(re(!!n,39018),typeof n=="string"){let e=0;const t=ZI.exec(n);if(re(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ge(n.seconds),nanos:ge(n.nanos)}}function ge(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fn(n){return typeof n=="string"?Ne.fromBase64String(n):Ne.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="server_timestamp",cg="__type__",lg="__previous_value__",ug="__local_write_time__";function Mc(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[cg])==null?void 0:r.stringValue)===ag}function ho(n){const e=n.mapValue.fields[lg];return Mc(e)?ho(e):e}function ds(n){const e=dn(n.mapValue.fields[ug].timestampValue);return new le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,t,r,s,i,o,c,l,h,f,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const Ni="(default)";class fs{constructor(e,t){this.projectId=e,this.database=t||Ni}static empty(){return new fs("","")}get isDefaultDatabase(){return this.database===Ni}isEqual(e){return e instanceof fs&&e.projectId===this.projectId&&e.database===this.database}}function tA(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new O(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fs(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="__type__",nA="__max__",si={mapValue:{}},dg="__vector__",Oi="value";function pn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Mc(n)?4:sA(n)?9007199254740991:rA(n)?10:11:B(28295,{value:n})}function Rt(n,e){if(n===e)return!0;const t=pn(n);if(t!==pn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ds(n).isEqual(ds(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=dn(s.timestampValue),c=dn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return fn(s.bytesValue).isEqual(fn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return ge(s.geoPointValue.latitude)===ge(i.geoPointValue.latitude)&&ge(s.geoPointValue.longitude)===ge(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return ge(s.integerValue)===ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ge(s.doubleValue),c=ge(i.doubleValue);return o===c?Di(o)===Di(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return fr(n.arrayValue.values||[],e.arrayValue.values||[],Rt);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Th(o)!==Th(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Rt(o[l],c[l])))return!1;return!0})(n,e);default:return B(52216,{left:n})}}function ps(n,e){return(n.values||[]).find((t=>Rt(t,e)))!==void 0}function pr(n,e){if(n===e)return 0;const t=pn(n),r=pn(e);if(t!==r)return Q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=ge(i.integerValue||i.doubleValue),l=ge(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return bh(n.timestampValue,e.timestampValue);case 4:return bh(ds(n),ds(e));case 5:return La(n.stringValue,e.stringValue);case 6:return(function(i,o){const c=fn(i),l=fn(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=Q(c[h],l[h]);if(f!==0)return f}return Q(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=Q(ge(i.latitude),ge(o.latitude));return c!==0?c:Q(ge(i.longitude),ge(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return vh(n.arrayValue,e.arrayValue);case 10:return(function(i,o){var m,v,R,V;const c=i.fields||{},l=o.fields||{},h=(m=c[Oi])==null?void 0:m.arrayValue,f=(v=l[Oi])==null?void 0:v.arrayValue,p=Q(((R=h==null?void 0:h.values)==null?void 0:R.length)||0,((V=f==null?void 0:f.values)==null?void 0:V.length)||0);return p!==0?p:vh(h,f)})(n.mapValue,e.mapValue);case 11:return(function(i,o){if(i===si.mapValue&&o===si.mapValue)return 0;if(i===si.mapValue)return 1;if(o===si.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=La(l[p],f[p]);if(m!==0)return m;const v=pr(c[l[p]],h[f[p]]);if(v!==0)return v}return Q(l.length,f.length)})(n.mapValue,e.mapValue);default:throw B(23264,{he:t})}}function bh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=dn(n),r=dn(e),s=Q(t.seconds,r.seconds);return s!==0?s:Q(t.nanos,r.nanos)}function vh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=pr(t[s],r[s]);if(i)return i}return Q(t.length,r.length)}function gr(n){return Fa(n)}function Fa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=dn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return fn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return j.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Fa(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Fa(t.fields[o])}`;return s+"}"})(n.mapValue):B(61005,{value:n})}function fi(n){switch(pn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ho(n);return e?16+fi(e):16;case 5:return 2*n.stringValue.length;case 6:return fn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+fi(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return jn(r.fields,((i,o)=>{s+=i.length+fi(o)})),s})(n.mapValue);default:throw B(13486,{value:n})}}function Ih(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ua(n){return!!n&&"integerValue"in n}function Lc(n){return!!n&&"arrayValue"in n}function Ah(n){return!!n&&"nullValue"in n}function Ch(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function pi(n){return!!n&&"mapValue"in n}function rA(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[hg])==null?void 0:r.stringValue)===dg}function ts(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return jn(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=ts(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ts(n.arrayValue.values[t]);return e}return{...n}}function sA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===nA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.value=e}static empty(){return new rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!pi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ts(t)}setAll(e){let t=xe.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=ts(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());pi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];pi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){jn(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new rt(ts(this.value))}}function fg(n){const e=[];return jn(n.fields,((t,r)=>{const s=new xe([t]);if(pi(r)){const i=fg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new je(e,0,q.min(),q.min(),q.min(),rt.empty(),0)}static newFoundDocument(e,t,r,s){return new je(e,1,t,q.min(),r,s,0)}static newNoDocument(e,t){return new je(e,2,t,q.min(),q.min(),rt.empty(),0)}static newUnknownDocument(e,t){return new je(e,3,t,q.min(),q.min(),rt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t){this.position=e,this.inclusive=t}}function Sh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),t.key):r=pr(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Rt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t="asc"){this.field=e,this.dir=t}}function iA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{}class we extends pg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new aA(e,t,r):t==="array-contains"?new uA(e,r):t==="in"?new hA(e,r):t==="not-in"?new dA(e,r):t==="array-contains-any"?new fA(e,r):new we(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new cA(e,r):new lA(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(pr(t,this.value)):t!==null&&pn(this.value)===pn(t)&&this.matchesComparison(pr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _t extends pg{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new _t(e,t)}matches(e){return gg(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function gg(n){return n.op==="and"}function mg(n){return oA(n)&&gg(n)}function oA(n){for(const e of n.filters)if(e instanceof _t)return!1;return!0}function ja(n){if(n instanceof we)return n.field.canonicalString()+n.op.toString()+gr(n.value);if(mg(n))return n.filters.map((e=>ja(e))).join(",");{const e=n.filters.map((t=>ja(t))).join(",");return`${n.op}(${e})`}}function yg(n,e){return n instanceof we?(function(r,s){return s instanceof we&&r.op===s.op&&r.field.isEqual(s.field)&&Rt(r.value,s.value)})(n,e):n instanceof _t?(function(r,s){return s instanceof _t&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&yg(o,s.filters[c])),!0):!1})(n,e):void B(19439)}function _g(n){return n instanceof we?(function(t){return`${t.field.canonicalString()} ${t.op} ${gr(t.value)}`})(n):n instanceof _t?(function(t){return t.op.toString()+" {"+t.getFilters().map(_g).join(" ,")+"}"})(n):"Filter"}class aA extends we{constructor(e,t,r){super(e,t,r),this.key=j.fromName(r.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class cA extends we{constructor(e,t){super(e,"in",t),this.keys=wg("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class lA extends we{constructor(e,t){super(e,"not-in",t),this.keys=wg("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function wg(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>j.fromName(r.referenceValue)))}class uA extends we{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Lc(t)&&ps(t.arrayValue,this.value)}}class hA extends we{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ps(this.value.arrayValue,t)}}class dA extends we{constructor(e,t){super(e,"not-in",t)}matches(e){if(ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ps(this.value.arrayValue,t)}}class fA extends we{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Lc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ps(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Ph(n,e=null,t=[],r=[],s=null,i=null,o=null){return new pA(n,e,t,r,s,i,o)}function Fc(n){const e=$(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>ja(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),uo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>gr(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>gr(r))).join(",")),e.Te=t}return e.Te}function Uc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!iA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!yg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Rh(n.startAt,e.startAt)&&Rh(n.endAt,e.endAt)}function Ba(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function gA(n,e,t,r,s,i,o,c){return new Ds(n,e,t,r,s,i,o,c)}function fo(n){return new Ds(n)}function kh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function mA(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Tg(n){return n.collectionGroup!==null}function ns(n){const e=$(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ve(xe.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Li(i,r))})),t.has(xe.keyField().canonicalString())||e.Ie.push(new Li(xe.keyField(),r))}return e.Ie}function vt(n){const e=$(n);return e.Ee||(e.Ee=yA(e,ns(n))),e.Ee}function yA(n,e){if(n.limitType==="F")return Ph(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Li(s.field,i)}));const t=n.endAt?new Mi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Mi(n.startAt.position,n.startAt.inclusive):null;return Ph(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ha(n,e){const t=n.filters.concat([e]);return new Ds(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function qa(n,e,t){return new Ds(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function po(n,e){return Uc(vt(n),vt(e))&&n.limitType===e.limitType}function Eg(n){return`${Fc(vt(n))}|lt:${n.limitType}`}function Qn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>_g(s))).join(", ")}]`),uo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>gr(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>gr(s))).join(",")),`Target(${r})`})(vt(n))}; limitType=${n.limitType})`}function go(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):j.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of ns(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const h=Sh(o,c,l);return o.inclusive?h<=0:h<0})(r.startAt,ns(r),s)||r.endAt&&!(function(o,c,l){const h=Sh(o,c,l);return o.inclusive?h>=0:h>0})(r.endAt,ns(r),s))})(n,e)}function _A(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function bg(n){return(e,t)=>{let r=!1;for(const s of ns(n)){const i=wA(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function wA(n,e,t){const r=n.field.isKeyField()?j.comparator(e.key,t.key):(function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?pr(l,h):B(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){jn(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return ig(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA=new de(j.comparator);function Ut(){return TA}const vg=new de(j.comparator);function Gr(...n){let e=vg;for(const t of n)e=e.insert(t.key,t);return e}function Ig(n){let e=vg;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function An(){return rs()}function Ag(){return rs()}function rs(){return new Bn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const EA=new de(j.comparator),bA=new ve(j.comparator);function Y(...n){let e=bA;for(const t of n)e=e.add(t);return e}const vA=new ve(Q);function IA(){return vA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Di(e)?"-0":e}}function Cg(n){return{integerValue:""+n}}function AA(n,e){return QI(e)?Cg(e):jc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this._=void 0}}function CA(n,e,t){return n instanceof gs?(function(s,i){const o={fields:{[cg]:{stringValue:ag},[ug]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Mc(i)&&(i=ho(i)),i&&(o.fields[lg]=i),{mapValue:o}})(t,e):n instanceof ms?Rg(n,e):n instanceof ys?Pg(n,e):(function(s,i){const o=Sg(s,i),c=xh(o)+xh(s.Ae);return Ua(o)&&Ua(s.Ae)?Cg(c):jc(s.serializer,c)})(n,e)}function SA(n,e,t){return n instanceof ms?Rg(n,e):n instanceof ys?Pg(n,e):t}function Sg(n,e){return n instanceof Fi?(function(r){return Ua(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class gs extends mo{}class ms extends mo{constructor(e){super(),this.elements=e}}function Rg(n,e){const t=kg(e);for(const r of n.elements)t.some((s=>Rt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class ys extends mo{constructor(e){super(),this.elements=e}}function Pg(n,e){let t=kg(e);for(const r of n.elements)t=t.filter((s=>!Rt(s,r)));return{arrayValue:{values:t}}}class Fi extends mo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function xh(n){return ge(n.integerValue||n.doubleValue)}function kg(n){return Lc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,t){this.field=e,this.transform=t}}function PA(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof ms&&s instanceof ms||r instanceof ys&&s instanceof ys?fr(r.elements,s.elements,Rt):r instanceof Fi&&s instanceof Fi?Rt(r.Ae,s.Ae):r instanceof gs&&s instanceof gs})(n.transform,e.transform)}class kA{constructor(e,t){this.version=e,this.transformResults=t}}class It{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new It}static exists(e){return new It(void 0,e)}static updateTime(e){return new It(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class yo{}function xg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Bc(n.key,It.none()):new Ns(n.key,n.data,It.none());{const t=n.data,r=rt.empty();let s=new ve(xe.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Hn(n.key,r,new ut(s.toArray()),It.none())}}function xA(n,e,t){n instanceof Ns?(function(s,i,o){const c=s.value.clone(),l=Dh(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Hn?(function(s,i,o){if(!gi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Dh(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Vg(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function ss(n,e,t,r){return n instanceof Ns?(function(i,o,c,l){if(!gi(i.precondition,o))return c;const h=i.value.clone(),f=Nh(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof Hn?(function(i,o,c,l){if(!gi(i.precondition,o))return c;const h=Nh(i.fieldTransforms,l,o),f=o.data;return f.setAll(Vg(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,o,c){return gi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function VA(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Sg(r.transform,s||null);i!=null&&(t===null&&(t=rt.empty()),t.set(r.field,i))}return t||null}function Vh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&fr(r,s,((i,o)=>PA(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ns extends yo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Hn extends yo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Vg(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Dh(n,e,t){const r=new Map;re(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,SA(o,c,t[s]))}return r}function Nh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,CA(i,o,e))}return r}class Bc extends yo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DA extends yo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&xA(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ss(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ss(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Ag();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=xg(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Y())}isEqual(e){return this.batchId===e.batchId&&fr(this.mutations,e.mutations,((t,r)=>Vh(t,r)))&&fr(this.baseMutations,e.baseMutations,((t,r)=>Vh(t,r)))}}class Hc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){re(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return EA})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Hc(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e,Z;function LA(n){switch(n){case k.OK:return B(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return B(15467,{code:n})}}function Dg(n){if(n===void 0)return Ft("GRPC error has no .code"),k.UNKNOWN;switch(n){case _e.OK:return k.OK;case _e.CANCELLED:return k.CANCELLED;case _e.UNKNOWN:return k.UNKNOWN;case _e.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case _e.INTERNAL:return k.INTERNAL;case _e.UNAVAILABLE:return k.UNAVAILABLE;case _e.UNAUTHENTICATED:return k.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case _e.NOT_FOUND:return k.NOT_FOUND;case _e.ALREADY_EXISTS:return k.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return k.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case _e.ABORTED:return k.ABORTED;case _e.OUT_OF_RANGE:return k.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return k.UNIMPLEMENTED;case _e.DATA_LOSS:return k.DATA_LOSS;default:return B(39323,{code:n})}}(Z=_e||(_e={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=new on([4294967295,4294967295],0);function Oh(n){const e=FA().encode(n),t=new Gp;return t.update(e),new Uint8Array(t.digest())}function Mh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new on([t,r],0),new on([s,i],0)]}class qc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Kr(`Invalid padding: ${t}`);if(r<0)throw new Kr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Kr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Kr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=on.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(on.fromNumber(r)));return s.compare(UA)===1&&(s=new on([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Oh(e),[r,s]=Mh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new qc(i,s,t);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=Oh(e),[r,s]=Mh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Kr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Os.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new _o(q.min(),s,new de(Q),Ut(),Y())}}class Os{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Os(r,t,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Ng{constructor(e,t){this.targetId=e,this.Ce=t}}class Og{constructor(e,t,r=Ne.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Lh{constructor(){this.ve=0,this.Fe=Fh(),this.Me=Ne.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Y(),t=Y(),r=Y();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:B(38017,{changeType:i})}})),new Os(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=Fh()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,re(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class jA{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ut(),this.He=ii(),this.Je=ii(),this.Ze=new de(Q)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:B(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Ba(i))if(r===0){const o=new j(i.path);this.et(t,o,je.newNoDocument(o,q.min()))}else re(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=fn(r).toUint8Array()}catch(l){if(l instanceof og)return dr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new qc(o,s,i)}catch(l){return dr(l instanceof Kr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Ba(c.target)){const l=new j(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,je.newNoDocument(l,e))}i.Be&&(t.set(o,i.ke()),i.Ke())}}));let r=Y();this.Je.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new _o(e,t,this.Ze,this.je,r);return this.je=Ut(),this.He=ii(),this.Je=ii(),this.Ze=new de(Q),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Lh,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new ve(Q),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new ve(Q),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Lh),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ii(){return new de(j.comparator)}function Fh(){return new de(j.comparator)}const BA={asc:"ASCENDING",desc:"DESCENDING"},HA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qA={and:"AND",or:"OR"};class $A{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function $a(n,e){return n.useProto3Json||uo(e)?e:{value:e}}function Ui(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function zA(n,e){return Ui(n,e.toTimestamp())}function At(n){return re(!!n,49232),q.fromTimestamp((function(t){const r=dn(t);return new le(r.seconds,r.nanos)})(n))}function $c(n,e){return za(n,e).canonicalString()}function za(n,e){const t=(function(s){return new oe(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Lg(n){const e=oe.fromString(n);return re(Hg(e),10190,{key:e.toString()}),e}function Wa(n,e){return $c(n.databaseId,e.path)}function da(n,e){const t=Lg(e);if(t.get(1)!==n.databaseId.projectId)throw new O(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j(Ug(t))}function Fg(n,e){return $c(n.databaseId,e)}function WA(n){const e=Lg(n);return e.length===4?oe.emptyPath():Ug(e)}function Ja(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ug(n){return re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Uh(n,e,t){return{name:Wa(n,e),fields:t.value.mapValue.fields}}function JA(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:B(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(re(f===void 0||typeof f=="string",58123),Ne.fromBase64String(f||"")):(re(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ne.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(h){const f=h.code===void 0?k.UNKNOWN:Dg(h.code);return new O(f,h.message||"")})(o);t=new Og(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=da(n,r.document.name),i=At(r.document.updateTime),o=r.document.createTime?At(r.document.createTime):q.min(),c=new rt({mapValue:{fields:r.document.fields}}),l=je.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new mi(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=da(n,r.document),i=r.readTime?At(r.readTime):q.min(),o=je.newNoDocument(s,i),c=r.removedTargetIds||[];t=new mi([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=da(n,r.document),i=r.removedTargetIds||[];t=new mi([],i,s,null)}else{if(!("filter"in e))return B(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new MA(s,i),c=r.targetId;t=new Ng(c,o)}}return t}function GA(n,e){let t;if(e instanceof Ns)t={update:Uh(n,e.key,e.value)};else if(e instanceof Bc)t={delete:Wa(n,e.key)};else if(e instanceof Hn)t={update:Uh(n,e.key,e.data),updateMask:r1(e.fieldMask)};else{if(!(e instanceof DA))return B(16599,{dt:e.type});t={verify:Wa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof gs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ms)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ys)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Fi)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw B(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:zA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B(27497)})(n,e.precondition)),t}function KA(n,e){return n&&n.length>0?(re(e!==void 0,14353),n.map((t=>(function(s,i){let o=s.updateTime?At(s.updateTime):At(i);return o.isEqual(q.min())&&(o=At(i)),new kA(o,s.transformResults||[])})(t,e)))):[]}function QA(n,e){return{documents:[Fg(n,e.path)]}}function YA(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Fg(n,s);const i=(function(h){if(h.length!==0)return Bg(_t.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(h){if(h.length!==0)return h.map((f=>(function(m){return{field:Yn(m.field),direction:e1(m.dir)}})(f)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=$a(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:s}}function XA(n){let e=WA(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){re(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(p){const m=jg(p);return m instanceof _t&&mg(m)?m.getFilters():[m]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((m=>(function(R){return new Li(Xn(R.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(m)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,uo(m)?null:m})(t.limit));let l=null;t.startAt&&(l=(function(p){const m=!!p.before,v=p.values||[];return new Mi(v,m)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const m=!p.before,v=p.values||[];return new Mi(v,m)})(t.endAt)),gA(e,s,o,i,c,"F",l,h)}function ZA(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function jg(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Xn(t.unaryFilter.field);return we.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xn(t.unaryFilter.field);return we.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xn(t.unaryFilter.field);return we.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xn(t.unaryFilter.field);return we.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return B(61313);default:return B(60726)}})(n):n.fieldFilter!==void 0?(function(t){return we.create(Xn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return B(58110);default:return B(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return _t.create(t.compositeFilter.filters.map((r=>jg(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B(1026)}})(t.compositeFilter.op))})(n):B(30097,{filter:n})}function e1(n){return BA[n]}function t1(n){return HA[n]}function n1(n){return qA[n]}function Yn(n){return{fieldPath:n.canonicalString()}}function Xn(n){return xe.fromServerFormat(n.fieldPath)}function Bg(n){return n instanceof we?(function(t){if(t.op==="=="){if(Ch(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NAN"}};if(Ah(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ch(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NOT_NAN"}};if(Ah(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yn(t.field),op:t1(t.op),value:t.value}}})(n):n instanceof _t?(function(t){const r=t.getFilters().map((s=>Bg(s)));return r.length===1?r[0]:{compositeFilter:{op:n1(t.op),filters:r}}})(n):B(54877,{filter:n})}function r1(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Hg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function qg(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t,r,s,i=q.min(),o=q.min(),c=Ne.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new en(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new en(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new en(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new en(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.yt=e}}function i1(n){const e=XA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?qa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(){this.Sn=new a1}addToCollectionParentIndex(e,t){return this.Sn.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(hn.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(hn.min())}updateCollectionGroup(e,t,r){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class a1{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ve(oe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ve(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$g=41943040;class Ke{static withCacheSize(e){return new Ke(e,Ke.DEFAULT_COLLECTION_PERCENTILE,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ke.DEFAULT_COLLECTION_PERCENTILE=10,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ke.DEFAULT=new Ke($g,Ke.DEFAULT_COLLECTION_PERCENTILE,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ke.DISABLED=new Ke(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new mr(0)}static ar(){return new mr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="LruGarbageCollector",c1=1048576;function Hh([n,e],[t,r]){const s=Q(n,t);return s===0?Q(e,r):s}class l1{constructor(e){this.Pr=e,this.buffer=new ve(Hh),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Hh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class u1{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){M(Bh,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Rr(t)?M(Bh,"Ignoring IndexedDB error during garbage collection: ",t):await Sr(t)}await this.Ar(3e5)}))}}class h1{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return x.resolve(lo.ce);const r=new l1(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(jh)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jh):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),Kn()<=K.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function d1(n,e){return new h1(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(){this.changes=new Bn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?x.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&ss(r.mutation,s,ut.empty(),le.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Y()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Y()){const s=An();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let o=Gr();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=An();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Y())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,r,s){let i=Ut();const o=rs(),c=(function(){return rs()})();return t.forEach(((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Hn)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ss(f.mutation,h,f.mutation.getFieldMask(),le.now())):o.set(h.key,ut.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,f)=>o.set(h,f))),t.forEach(((h,f)=>c.set(h,new p1(f,o.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,t){const r=rs();let s=new de(((o,c)=>o-c)),i=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const h=t.get(l);if(h===null)return;let f=r.get(l)||ut.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||Y()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Ag();f.forEach((m=>{if(!i.has(m)){const v=xg(t.get(m),r.get(m));v!==null&&p.set(m,v),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return x.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return mA(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Tg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):x.resolve(An());let c=hs,l=i;return o.next((h=>x.forEach(h,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?x.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,Y()))).next((f=>({batchId:c,changes:Ig(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next((r=>{let s=Gr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Gr();return this.indexManager.getCollectionParents(e,i).next((c=>x.forEach(c,(l=>{const h=(function(p,m){return new Ds(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((o=>{i.forEach(((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,je.newInvalidDocument(f)))}));let c=Gr();return o.forEach(((l,h)=>{const f=i.get(l);f!==void 0&&ss(f.mutation,h,ut.empty(),le.now()),go(t,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return x.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:At(s.createTime)}})(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:i1(s.bundledQuery),readTime:At(s.readTime)}})(t)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(){this.overlays=new de(j.comparator),this.Lr=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const r=An();return x.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.bt(e,t,i)})),x.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(r)),x.resolve()}getOverlaysForCollection(e,t,r){const s=An(),i=t.length+1,o=new j(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return x.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new de(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=An(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=An(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=s)););return x.resolve(c)}bt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new OA(t,r));let i=this.Lr.get(t);i===void 0&&(i=Y(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(){this.sessionToken=Ne.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.kr=new ve(Re.Kr),this.qr=new ve(Re.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new Re(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Re(e,t))}Qr(e,t){e.forEach((r=>this.removeReference(r,t)))}Gr(e){const t=new j(new oe([])),r=new Re(t,e),s=new Re(t,e+1),i=[];return this.qr.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new j(new oe([])),r=new Re(t,e),s=new Re(t,e+1);let i=Y();return this.qr.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new Re(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Re{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return j.comparator(e.key,t.key)||Q(e.Hr,t.Hr)}static Ur(e,t){return Q(e.Hr,t.Hr)||j.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new ve(Re.Kr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new NA(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new Re(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,t){return x.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?Oc:this.Yn-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Re(t,0),s=new Re(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],(o=>{const c=this.Zr(o.Hr);i.push(c)})),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ve(Q);return t.forEach((s=>{const i=new Re(s,0),o=new Re(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],(c=>{r=r.add(c.Hr)}))})),x.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const o=new Re(new j(i),0);let c=new ve(Q);return this.Jr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),o),x.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){re(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return x.forEach(t.mutations,(s=>{const i=new Re(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=r}))}nr(e){}containsKey(e,t){const r=new Re(t,0),s=this.Jr.firstAfterOrEqual(r);return x.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this.ti=e,this.docs=(function(){return new de(j.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return x.resolve(r?r.document.mutableCopy():je.newInvalidDocument(t))}getEntries(e,t){let r=Ut();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():je.newInvalidDocument(s))})),x.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Ut();const o=t.path,c=new j(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||WI(zI(f),r)<=0||(s.has(f.key)||go(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,t,r,s){B(9500)}ni(e,t){return x.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new E1(this)}getSize(e){return x.resolve(this.size)}}class E1 extends f1{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)})),x.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e){this.persistence=e,this.ri=new Bn((t=>Fc(t)),Uc),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.ii=0,this.si=new zc,this.targetCount=0,this.oi=mr._r()}forEachTarget(e,t){return this.ri.forEach(((r,s)=>t(s))),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),x.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new mr(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.lr(t),x.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),x.waitFor(i).next((()=>s))}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return x.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),x.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),x.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),x.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return x.resolve(r)}containsKey(e,t){return x.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,t){this._i={},this.overlays={},this.ai=new lo(0),this.ui=!1,this.ui=!0,this.ci=new _1,this.referenceDelegate=e(this),this.li=new b1(this),this.indexManager=new o1,this.remoteDocumentCache=(function(s){return new T1(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new s1(t),this.Pi=new m1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new y1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new w1(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const s=new v1(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((i=>this.referenceDelegate.Ii(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return x.or(Object.values(this._i).map((r=>()=>r.containsKey(e,t))))}}class v1 extends GI{constructor(e){super(),this.currentSequenceNumber=e}}class Wc{constructor(e){this.persistence=e,this.Ri=new zc,this.Ai=null}static Vi(e){return new Wc(e)}get di(){if(this.Ai)return this.Ai;throw B(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),x.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),x.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.di.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.di,(r=>{const s=j.fromPath(r);return this.mi(e,s).next((i=>{i||t.removeEntry(s,q.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return x.or([()=>x.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ji{constructor(e,t){this.persistence=e,this.fi=new Bn((r=>YI(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=d1(this,t)}static Vi(e,t){return new ji(e,t)}Ti(){}Ii(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}mr(e,t){return x.forEach(this.fi,((r,s)=>this.wr(e,r,s).next((i=>i?x.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(r++,i.removeEntry(o,q.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),x.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=fi(e.data.value)),t}wr(e,t,r){return x.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return x.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=Y(),s=Y();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Jc(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return dE()?8:KI(qe())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ps(e,t,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new I1;return this.ys(e,t,o).next((c=>{if(i.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>i.result))}ws(e,t,r,s){return r.documentReadCount<this.Vs?(Kn()<=K.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Qn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),x.resolve()):(Kn()<=K.DEBUG&&M("QueryEngine","Query:",Qn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Kn()<=K.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Qn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vt(t))):x.resolve())}gs(e,t){if(kh(t))return x.resolve(null);let r=vt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=qa(t,null,"F"),r=vt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Y(...i);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.bs(t,c);return this.Ss(t,h,o,l.readTime)?this.gs(e,qa(t,null,"F")):this.Ds(e,h,t,l)}))))})))))}ps(e,t,r,s){return kh(t)||s.isEqual(q.min())?x.resolve(null):this.fs.getDocuments(e,r).next((i=>{const o=this.bs(t,i);return this.Ss(t,o,r,s)?x.resolve(null):(Kn()<=K.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qn(t)),this.Ds(e,o,t,$I(s,hs)).next((c=>c)))}))}bs(e,t){let r=new ve(bg(e));return t.forEach(((s,i)=>{go(e,i)&&(r=r.add(i))})),r}Ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return Kn()<=K.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Qn(t)),this.fs.getDocumentsMatchingQuery(e,t,hn.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="LocalStore",C1=3e8;class S1{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new de(Q),this.Fs=new Bn((i=>Fc(i)),Uc),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new g1(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function R1(n,e,t,r){return new S1(n,e,t,r)}async function Wg(n,e){const t=$(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=Y();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next((h=>({Ns:h,removedBatchIds:o,addedBatchIds:c})))}))}))}function P1(n,e){const t=$(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,f){const p=h.batch,m=p.keys();let v=x.resolve();return m.forEach((R=>{v=v.next((()=>f.getEntry(l,R))).next((V=>{const P=h.docVersions.get(R);re(P!==null,48541),V.version.compareTo(P)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))}))})),v.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=Y();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Jg(n){const e=$(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function k1(n,e){const t=$(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(t.li.removeMatchingKeys(i,f.removedDocuments,p).next((()=>t.li.addMatchingKeys(i,f.addedDocuments,p))));let v=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(Ne.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),s=s.insert(p,v),(function(V,P,N){return V.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=C1?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0})(m,v,f)&&c.push(t.li.updateTargetData(i,v))}));let l=Ut(),h=Y();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(x1(i,o,e.documentUpdates).next((f=>{l=f.Bs,h=f.Ls}))),!r.isEqual(q.min())){const f=t.li.getLastRemoteSnapshotVersion(i).next((p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return x.waitFor(c).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(t.vs=s,i)))}function x1(n,e,t){let r=Y(),s=Y();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let o=Ut();return t.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):M(Gc,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function V1(n,e){const t=$(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Oc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function D1(n,e){const t=$(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.li.getTargetData(r,e).next((i=>i?(s=i,x.resolve(s)):t.li.allocateTargetId(r).next((o=>(s=new en(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r}))}async function Ga(n,e,t){const r=$(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Rr(o))throw o;M(Gc,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function qh(n,e,t){const r=$(n);let s=q.min(),i=Y();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,h,f){const p=$(l),m=p.Fs.get(f);return m!==void 0?x.resolve(p.vs.get(m)):p.li.getTargetData(h,f)})(r,o,vt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,t?s:q.min(),t?i:Y()))).next((c=>(N1(r,_A(e),c),{documents:c,ks:i})))))}function N1(n,e,t){let r=n.Ms.get(e)||q.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Ms.set(e,r)}class $h{constructor(){this.activeTargetIds=IA()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class O1{constructor(){this.vo=new $h,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new $h,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="ConnectivityMonitor";class Wh{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){M(zh,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){M(zh,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oi=null;function Ka(){return oi===null?oi=(function(){return 268435456+Math.round(2147483648*Math.random())})():oi++,"0x"+oi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="RestConnection",L1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class F1{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Ni?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const o=Ka(),c=this.Qo(e,t.toUriEncodedString());M(fa,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:h}=new URL(c),f=br(h);return this.zo(e,c,l,r,f).then((p=>(M(fa,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw dr(fa,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}jo(e,t,r,s,i,o){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Cr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Qo(e,t){const r=L1[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="WebChannelConnection",Wr=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class sr extends F1{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!sr.c_){const e=Xp();Wr(e,Yp.STAT_EVENT,(t=>{t.stat===Ma.PROXY?M(Le,"STAT_EVENT: detected buffering proxy"):t.stat===Ma.NOPROXY&&M(Le,"STAT_EVENT: detected no buffering proxy")})),sr.c_=!0}}zo(e,t,r,s,i){const o=Ka();return new Promise(((c,l)=>{const h=new Kp;h.setWithCredentials(!0),h.listenOnce(Qp.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case di.NO_ERROR:const p=h.getResponseJson();M(Le,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case di.TIMEOUT:M(Le,`RPC '${e}' ${o} timed out`),l(new O(k.DEADLINE_EXCEEDED,"Request time out"));break;case di.HTTP_ERROR:const m=h.getStatus();if(M(Le,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const R=v==null?void 0:v.error;if(R&&R.status&&R.message){const V=(function(N){const U=N.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(U)>=0?U:k.UNKNOWN})(R.status);l(new O(V,R.message))}else l(new O(k.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new O(k.UNAVAILABLE,"Connection failed."));break;default:B(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{M(Le,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);M(Le,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",f,r,15)}))}T_(e,t,r){const s=Ka(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=i.join("");M(Le,`Creating RPC '${e}' stream ${s}: ${h}`,c);const f=o.createWebChannel(h,c);this.I_(f);let p=!1,m=!1;const v=new U1({Ho:R=>{m?M(Le,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(p||(M(Le,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),M(Le,`RPC '${e}' stream ${s} sending:`,R),f.send(R))},Jo:()=>f.close()});return Wr(f,Jr.EventType.OPEN,(()=>{m||(M(Le,`RPC '${e}' stream ${s} transport opened.`),v.i_())})),Wr(f,Jr.EventType.CLOSE,(()=>{m||(m=!0,M(Le,`RPC '${e}' stream ${s} transport closed`),v.o_(),this.E_(f))})),Wr(f,Jr.EventType.ERROR,(R=>{m||(m=!0,dr(Le,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),v.o_(new O(k.UNAVAILABLE,"The operation could not be completed")))})),Wr(f,Jr.EventType.MESSAGE,(R=>{var V;if(!m){const P=R.data[0];re(!!P,16349);const N=P,U=(N==null?void 0:N.error)||((V=N[0])==null?void 0:V.error);if(U){M(Le,`RPC '${e}' stream ${s} received error:`,U);const J=U.status;let Ae=(function(E){const y=_e[E];if(y!==void 0)return Dg(y)})(J),Qe=U.message;Ae===void 0&&(Ae=k.INTERNAL,Qe="Unknown error status: "+J+" with message "+U.message),m=!0,v.o_(new O(Ae,Qe)),f.close()}else M(Le,`RPC '${e}' stream ${s} received:`,P),v.__(P)}})),sr.u_(),setTimeout((()=>{v.s_()}),0),v}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Zp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(n){return new sr(n)}function pa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(n){return new $A(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sr.c_=!1;class Gg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="PersistentStream";class Kg{constructor(e,t,r,s,i,o,c,l){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Gg(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(Ft(t.toString()),Ft("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new O(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return M(Jh,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(M(Jh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class B1 extends Kg{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=JA(this.serializer,e),r=(function(i){if(!("targetChange"in i))return q.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?At(o.readTime):q.min()})(e);return this.listener.J_(t,r)}Z_(e){const t={};t.database=Ja(this.serializer),t.addTarget=(function(i,o){let c;const l=o.target;if(c=Ba(l)?{documents:QA(i,l)}:{query:YA(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Mg(i,o.resumeToken);const h=$a(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(q.min())>0){c.readTime=Ui(i,o.snapshotVersion.toTimestamp());const h=$a(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=ZA(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=Ja(this.serializer),t.removeTarget=e,this.K_(t)}}class H1 extends Kg{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,re(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=KA(e.writeResults,e.commitTime),r=At(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Ja(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>GA(this.serializer,r)))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{}class $1 extends q1{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new O(k.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,za(t,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(k.UNKNOWN,i.toString())}))}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,za(t,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(k.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function z1(n,e,t,r){return new $1(n,e,t,r)}class W1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ft(t),this.aa=!1):M("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn="RemoteStore";class J1{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((o=>{r.enqueueAndForget((async()=>{qn(this)&&(M(Nn,"Restarting streams for network reachability change."),await(async function(l){const h=$(l);h.Ea.add(4),await Ms(h),h.Va.set("Unknown"),h.Ea.delete(4),await To(h)})(this))}))})),this.Va=new W1(r,s)}}async function To(n){if(qn(n))for(const e of n.Ra)await e(!0)}async function Ms(n){for(const e of n.Ra)await e(!1)}function Qg(n,e){const t=$(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Xc(t)?Yc(t):Pr(t).O_()&&Qc(t,e))}function Kc(n,e){const t=$(n),r=Pr(t);t.Ia.delete(e),r.O_()&&Yg(t,e),t.Ia.size===0&&(r.O_()?r.L_():qn(t)&&t.Va.set("Unknown"))}function Qc(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Pr(n).Z_(e)}function Yg(n,e){n.da.$e(e),Pr(n).X_(e)}function Yc(n){n.da=new jA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Pr(n).start(),n.Va.ua()}function Xc(n){return qn(n)&&!Pr(n).x_()&&n.Ia.size>0}function qn(n){return $(n).Ea.size===0}function Xg(n){n.da=void 0}async function G1(n){n.Va.set("Online")}async function K1(n){n.Ia.forEach(((e,t)=>{Qc(n,e)}))}async function Q1(n,e){Xg(n),Xc(n)?(n.Va.ha(e),Yc(n)):n.Va.set("Unknown")}async function Y1(n,e,t){if(n.Va.set("Online"),e instanceof Og&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.da.removeTarget(c))})(n,e)}catch(r){M(Nn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bi(n,r)}else if(e instanceof mi?n.da.Xe(e):e instanceof Ng?n.da.st(e):n.da.tt(e),!t.isEqual(q.min()))try{const r=await Jg(n.localStore);t.compareTo(r)>=0&&await(function(i,o){const c=i.da.Tt(o);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,h)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(Ne.EMPTY_BYTE_STRING,f.snapshotVersion)),Yg(i,l);const p=new en(f.target,l,h,f.sequenceNumber);Qc(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){M(Nn,"Failed to raise snapshot:",r),await Bi(n,r)}}async function Bi(n,e,t){if(!Rr(e))throw e;n.Ea.add(1),await Ms(n),n.Va.set("Offline"),t||(t=()=>Jg(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{M(Nn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await To(n)}))}function Zg(n,e){return e().catch((t=>Bi(n,t,e)))}async function Eo(n){const e=$(n),t=gn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Oc;for(;X1(e);)try{const s=await V1(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,Z1(e,s)}catch(s){await Bi(e,s)}em(e)&&tm(e)}function X1(n){return qn(n)&&n.Ta.length<10}function Z1(n,e){n.Ta.push(e);const t=gn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function em(n){return qn(n)&&!gn(n).x_()&&n.Ta.length>0}function tm(n){gn(n).start()}async function eC(n){gn(n).ra()}async function tC(n){const e=gn(n);for(const t of n.Ta)e.ea(t.mutations)}async function nC(n,e,t){const r=n.Ta.shift(),s=Hc.from(r,e,t);await Zg(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Eo(n)}async function rC(n,e){e&&gn(n).Y_&&await(async function(r,s){if((function(o){return LA(o)&&o!==k.ABORTED})(s.code)){const i=r.Ta.shift();gn(r).B_(),await Zg(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Eo(r)}})(n,e),em(n)&&tm(n)}async function Gh(n,e){const t=$(n);t.asyncQueue.verifyOperationInProgress(),M(Nn,"RemoteStore received new credentials");const r=qn(t);t.Ea.add(3),await Ms(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await To(t)}async function sC(n,e){const t=$(n);e?(t.Ea.delete(2),await To(t)):e||(t.Ea.add(2),await Ms(t),t.Va.set("Unknown"))}function Pr(n){return n.ma||(n.ma=(function(t,r,s){const i=$(t);return i.sa(),new B1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:G1.bind(null,n),Yo:K1.bind(null,n),t_:Q1.bind(null,n),J_:Y1.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Xc(n)?Yc(n):n.Va.set("Unknown")):(await n.ma.stop(),Xg(n))}))),n.ma}function gn(n){return n.fa||(n.fa=(function(t,r,s){const i=$(t);return i.sa(),new H1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:eC.bind(null,n),t_:rC.bind(null,n),ta:tC.bind(null,n),na:nC.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await Eo(n)):(await n.fa.stop(),n.Ta.length>0&&(M(Nn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new Zc(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function el(n,e){if(Ft("AsyncQueue",`${e}: ${n}`),Rr(n))return new O(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{static emptySet(e){return new ir(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||j.comparator(t.key,r.key):(t,r)=>j.comparator(t.key,r.key),this.keyedMap=Gr(),this.sortedSet=new de(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ir)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ir;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.ga=new de(j.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):B(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class yr{constructor(e,t,r,s,i,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new yr(e,t,ir.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&po(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class oC{constructor(){this.queries=Qh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=$(t),i=s.queries;s.queries=Qh(),i.forEach(((o,c)=>{for(const l of c.ba)l.onError(r)}))})(this,new O(k.ABORTED,"Firestore shutting down"))}}function Qh(){return new Bn((n=>Eg(n)),po)}async function tl(n,e){const t=$(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new iC,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=el(o,`Initialization of query '${Qn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.ba.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&rl(t)}async function nl(n,e){const t=$(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function aC(n,e){const t=$(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.ba)c.Fa(s)&&(r=!0);o.wa=s}}r&&rl(t)}function cC(n,e,t){const r=$(n),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(t);r.queries.delete(e)}function rl(n){n.Ca.forEach((e=>{e.next()}))}var Qa,Yh;(Yh=Qa||(Qa={})).Ma="default",Yh.Cache="cache";class sl{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new yr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=yr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Qa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.key=e}}class rm{constructor(e){this.key=e}}class lC{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Y(),this.mutatedKeys=Y(),this.eu=bg(e),this.tu=new ir(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new Kh,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),v=go(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),V=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let P=!1;m&&v?m.data.isEqual(v.data)?R!==V&&(r.track({type:3,doc:v}),P=!0):this.su(m,v)||(r.track({type:2,doc:v}),P=!0,(l&&this.eu(v,l)>0||h&&this.eu(v,h)<0)&&(c=!0)):!m&&v?(r.track({type:0,doc:v}),P=!0):m&&!v&&(r.track({type:1,doc:m}),P=!0,(l||h)&&(c=!0)),P&&(v?(o=o.add(v),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(v,R){const V=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B(20277,{Vt:P})}};return V(v)-V(R)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,h=l!==this.Xa;return this.Xa=l,o.length!==0||h?{snapshot:new yr(this.query,e.tu,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Kh,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Y(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const t=[];return e.forEach((r=>{this.Ya.has(r)||t.push(new rm(r))})),this.Ya.forEach((r=>{e.has(r)||t.push(new nm(r))})),t}cu(e){this.Za=e.ks,this.Ya=Y();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return yr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const il="SyncEngine";class uC{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class hC{constructor(e){this.key=e,this.hu=!1}}class dC{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Bn((c=>Eg(c)),po),this.Iu=new Map,this.Eu=new Set,this.Ru=new de(j.comparator),this.Au=new Map,this.Vu=new zc,this.du={},this.mu=new Map,this.fu=mr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function fC(n,e,t=!0){const r=lm(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await sm(r,e,t,!0),s}async function pC(n,e){const t=lm(n);await sm(t,e,!0,!1)}async function sm(n,e,t,r){const s=await D1(n.localStore,vt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await gC(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Qg(n.remoteStore,s),c}async function gC(n,e,t,r,s){n.pu=(p,m,v)=>(async function(V,P,N,U){let J=P.view.ru(N);J.Ss&&(J=await qh(V.localStore,P.query,!1).then((({documents:E})=>P.view.ru(E,J))));const Ae=U&&U.targetChanges.get(P.targetId),Qe=U&&U.targetMismatches.get(P.targetId)!=null,Oe=P.view.applyChanges(J,V.isPrimaryClient,Ae,Qe);return Zh(V,P.targetId,Oe.au),Oe.snapshot})(n,p,m,v);const i=await qh(n.localStore,e,!0),o=new lC(e,i.ks),c=o.ru(i.documents),l=Os.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=o.applyChanges(c,n.isPrimaryClient,l);Zh(n,t,h.au);const f=new uC(e,t,o);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function mC(n,e,t){const r=$(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!po(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ga(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Kc(r.remoteStore,s.targetId),Ya(r,s.targetId)})).catch(Sr)):(Ya(r,s.targetId),await Ga(r.localStore,s.targetId,!0))}async function yC(n,e){const t=$(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Kc(t.remoteStore,r.targetId))}async function _C(n,e,t){const r=AC(n);try{const s=await(function(o,c){const l=$(o),h=le.now(),f=c.reduce(((v,R)=>v.add(R.key)),Y());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let R=Ut(),V=Y();return l.xs.getEntries(v,f).next((P=>{R=P,R.forEach(((N,U)=>{U.isValidDocument()||(V=V.add(N))}))})).next((()=>l.localDocuments.getOverlayedDocuments(v,R))).next((P=>{p=P;const N=[];for(const U of c){const J=VA(U,p.get(U.key).overlayedDocument);J!=null&&N.push(new Hn(U.key,J,fg(J.value.mapValue),It.exists(!0)))}return l.mutationQueue.addMutationBatch(v,h,N,c)})).next((P=>{m=P;const N=P.applyToLocalDocumentSet(p,V);return l.documentOverlayCache.saveOverlays(v,P.batchId,N)}))})).then((()=>({batchId:m.batchId,changes:Ig(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let h=o.du[o.currentUser.toKey()];h||(h=new de(Q)),h=h.insert(c,l),o.du[o.currentUser.toKey()]=h})(r,s.batchId,t),await Ls(r,s.changes),await Eo(r.remoteStore)}catch(s){const i=el(s,"Failed to persist write");t.reject(i)}}async function im(n,e){const t=$(n);try{const r=await k1(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Au.get(i);o&&(re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?re(o.hu,14607):s.removedDocuments.size>0&&(re(o.hu,42227),o.hu=!1))})),await Ls(t,r,e)}catch(r){await Sr(r)}}function Xh(n,e,t){const r=$(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=$(o);l.onlineState=c;let h=!1;l.queries.forEach(((f,p)=>{for(const m of p.ba)m.va(c)&&(h=!0)})),h&&rl(l)})(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wC(n,e,t){const r=$(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new de(j.comparator);o=o.insert(i,je.newNoDocument(i,q.min()));const c=Y().add(i),l=new _o(q.min(),new Map,new de(Q),o,c);await im(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),ol(r)}else await Ga(r.localStore,e,!1).then((()=>Ya(r,e,t))).catch(Sr)}async function TC(n,e){const t=$(n),r=e.batch.batchId;try{const s=await P1(t.localStore,e);am(t,r,null),om(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ls(t,s)}catch(s){await Sr(s)}}async function EC(n,e,t){const r=$(n);try{const s=await(function(o,c){const l=$(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next((p=>(re(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>l.localDocuments.getDocuments(h,f)))}))})(r.localStore,e);am(r,e,t),om(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ls(r,s)}catch(s){await Sr(s)}}function om(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function am(n,e,t){const r=$(n);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Ya(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((r=>{n.Vu.containsKey(r)||cm(n,r)}))}function cm(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Kc(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),ol(n))}function Zh(n,e,t){for(const r of t)r instanceof nm?(n.Vu.addReference(r.key,e),bC(n,r)):r instanceof rm?(M(il,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||cm(n,r.key)):B(19791,{wu:r})}function bC(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(r)||(M(il,"New document in limbo: "+t),n.Eu.add(r),ol(n))}function ol(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new j(oe.fromString(e)),r=n.fu.next();n.Au.set(r,new hC(t)),n.Ru=n.Ru.insert(t,r),Qg(n.remoteStore,new en(vt(fo(t.path)),r,"TargetPurposeLimboResolution",lo.ce))}}async function Ls(n,e,t){const r=$(n),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,t).then((h=>{var f;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Jc.Es(l.targetId,h);i.push(p)}})))})),await Promise.all(o),r.Pu.J_(s),await(async function(l,h){const f=$(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>x.forEach(h,(m=>x.forEach(m.Ts,(v=>f.persistence.referenceDelegate.addReference(p,m.targetId,v))).next((()=>x.forEach(m.Is,(v=>f.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))))))}catch(p){if(!Rr(p))throw p;M(Gc,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const v=f.vs.get(m),R=v.snapshotVersion,V=v.withLastLimboFreeSnapshotVersion(R);f.vs=f.vs.insert(m,V)}}})(r.localStore,i))}async function vC(n,e){const t=$(n);if(!t.currentUser.isEqual(e)){M(il,"User change. New user:",e.toKey());const r=await Wg(t.localStore,e);t.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new O(k.CANCELLED,o))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ls(t,r.Ns)}}function IC(n,e){const t=$(n),r=t.Au.get(e);if(r&&r.hu)return Y().add(r.key);{let s=Y();const i=t.Iu.get(e);if(!i)return s;for(const o of i){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function lm(n){const e=$(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=im.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wC.bind(null,e),e.Pu.J_=aC.bind(null,e.eventManager),e.Pu.yu=cC.bind(null,e.eventManager),e}function AC(n){const e=$(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EC.bind(null,e),e}class Hi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wo(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return R1(this.persistence,new A1,e.initialUser,this.serializer)}Cu(e){return new zg(Wc.Vi,this.serializer)}Du(e){return new O1}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hi.provider={build:()=>new Hi};class CC extends Hi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){re(this.persistence.referenceDelegate instanceof ji,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new u1(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ke.withCacheSize(this.cacheSizeBytes):Ke.DEFAULT;return new zg((r=>ji.Vi(r,t)),this.serializer)}}class Xa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vC.bind(null,this.syncEngine),await sC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new oC})()}createDatastore(e){const t=wo(e.databaseInfo.databaseId),r=j1(e.databaseInfo);return z1(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,o,c){return new J1(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Xh(this.syncEngine,t,0)),(function(){return Wh.v()?new Wh:new M1})())}createSyncEngine(e,t){return(function(s,i,o,c,l,h,f){const p=new dC(s,i,o,c,l,h);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=$(s);M(Nn,"RemoteStore shutting down."),i.Ea.add(5),await Ms(i),i.Aa.shutdown(),i.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Xa.provider={build:()=>new Xa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ft("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="FirestoreClient";class SC{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Ue.UNAUTHENTICATED,this.clientId=Nc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{M(mn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(M(mn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=el(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function ga(n,e){n.asyncQueue.verifyOperationInProgress(),M(mn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Wg(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function ed(n,e){n.asyncQueue.verifyOperationInProgress();const t=await RC(n);M(mn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Gh(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Gh(e.remoteStore,s))),n._onlineComponents=e}async function RC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(mn,"Using user provided OfflineComponentProvider");try{await ga(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;dr("Error using user provided cache. Falling back to memory cache: "+t),await ga(n,new Hi)}}else M(mn,"Using default OfflineComponentProvider"),await ga(n,new CC(void 0));return n._offlineComponents}async function um(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(mn,"Using user provided OnlineComponentProvider"),await ed(n,n._uninitializedComponentsProvider._online)):(M(mn,"Using default OnlineComponentProvider"),await ed(n,new Xa))),n._onlineComponents}function PC(n){return um(n).then((e=>e.syncEngine))}async function qi(n){const e=await um(n),t=e.eventManager;return t.onListen=fC.bind(null,e.syncEngine),t.onUnlisten=mC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=pC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=yC.bind(null,e.syncEngine),t}function kC(n,e,t,r){const s=new al(r),i=new sl(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>tl(await qi(n),i))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>nl(await qi(n),i)))}}function xC(n,e,t={}){const r=new Ot;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,h){const f=new al({next:m=>{f.Nu(),o.enqueueAndForget((()=>nl(i,p)));const v=m.docs.has(c);!v&&m.fromCache?h.reject(new O(k.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&l&&l.source==="server"?h.reject(new O(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new sl(fo(c.path),f,{includeMetadataChanges:!0,Ka:!0});return tl(i,p)})(await qi(n),n.asyncQueue,e,t,r))),r.promise}function VC(n,e,t={}){const r=new Ot;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,h){const f=new al({next:m=>{f.Nu(),o.enqueueAndForget((()=>nl(i,p))),m.fromCache&&l.source==="server"?h.reject(new O(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new sl(c,f,{includeMetadataChanges:!0,Ka:!0});return tl(i,p)})(await qi(n),n.asyncQueue,e,t,r))),r.promise}function DC(n,e){const t=new Ot;return n.asyncQueue.enqueueAndForget((async()=>_C(await PC(n),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC="ComponentProvider",td=new Map;function OC(n,e,t,r,s){return new eA(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,hm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm="firestore.googleapis.com",nd=!0;class rd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new O(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dm,this.ssl=nd}else this.host=e.host,this.ssl=e.ssl??nd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=$g;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<c1)throw new O(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hm(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new DI;switch(r.type){case"firstParty":return new LI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=td.get(t);r&&(M(NC,"Removing Datastore"),td.delete(t),r.terminate())})(this),Promise.resolve()}}function MC(n,e,t,r={}){var h;n=dt(n,bo);const s=br(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(op(`https://${c}`),ap("Firestore",!0)),i.host!==dm&&i.host!==c&&dr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!kn(l,o)&&(n._setSettings(l),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Ue.MOCK_USER;else{f=rE(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new O(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ue(m)}n._authCredentials=new NI(new tg(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $n(this.firestore,e,this._query)}}class me{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new an(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new me(this.firestore,e,this._key)}toJSON(){return{type:me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Vs(t,me._jsonSchema))return new me(e,r||null,new j(oe.fromString(t.referencePath)))}}me._jsonSchemaVersion="firestore/documentReference/1.0",me._jsonSchema={type:Ee("string",me._jsonSchemaVersion),referencePath:Ee("string")};class an extends $n{constructor(e,t,r){super(e,t,fo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new me(this.firestore,null,new j(e))}withConverter(e){return new an(this.firestore,e,this._path)}}function LC(n,e,...t){if(n=$e(n),ng("collection","path",e),n instanceof bo){const r=oe.fromString(e,...t);return mh(r),new an(n,null,r)}{if(!(n instanceof me||n instanceof an))throw new O(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return mh(r),new an(n.firestore,null,r)}}function cl(n,e,...t){if(n=$e(n),arguments.length===1&&(e=Nc.newId()),ng("doc","path",e),n instanceof bo){const r=oe.fromString(e,...t);return gh(r),new me(n,null,new j(r))}{if(!(n instanceof me||n instanceof an))throw new O(k.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return gh(r),new me(n.firestore,n instanceof an?n.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="AsyncQueue";class id{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Gg(this,"async_queue_retry"),this._c=()=>{const r=pa();r&&M(sd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=pa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=pa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ot;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Rr(e))throw e;M(sd,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Ft("INTERNAL UNHANDLED ERROR: ",od(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Zc.createAndSchedule(this,e,t,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&B(47125,{Pc:od(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function od(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class On extends bo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new id,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new id(e),this._firestoreClient=void 0,await e}}}function FC(n,e){const t=typeof n=="object"?n:hp(),r=typeof n=="string"?n:Ni,s=Ec(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=tE("firestore");i&&MC(s,...i)}return s}function vo(n){if(n._terminated)throw new O(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||UC(n),n._firestoreClient}function UC(n){var r,s,i,o;const e=n._freezeSettings(),t=OC(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new SC(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this._byteString=e}static fromBase64String(e){try{return new st(Ne.fromBase64String(e))}catch(t){throw new O(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new st(Ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:st._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Vs(e,st._jsonSchema))return st.fromBase64String(e.bytes)}}st._jsonSchemaVersion="firestore/bytes/1.0",st._jsonSchema={type:Ee("string",st._jsonSchemaVersion),bytes:Ee("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ct._jsonSchemaVersion}}static fromJSON(e){if(Vs(e,Ct._jsonSchema))return new Ct(e.latitude,e.longitude)}}Ct._jsonSchemaVersion="firestore/geoPoint/1.0",Ct._jsonSchema={type:Ee("string",Ct._jsonSchemaVersion),latitude:Ee("number"),longitude:Ee("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ft._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Vs(e,ft._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ft(e.vectorValues);throw new O(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ft._jsonSchemaVersion="firestore/vectorValue/1.0",ft._jsonSchema={type:Ee("string",ft._jsonSchemaVersion),vectorValues:Ee("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=/^__.*__$/;class BC{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Hn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ns(e,this.data,t,this.fieldTransforms)}}function pm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B(40011,{dataSource:n})}}class ul{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new ul({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return $i(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(pm(this.dataSource)&&jC.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class HC{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||wo(e)}createContext(e,t,r,s=!1){return new ul({dataSource:e,methodName:t,targetDoc:r,path:xe.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gm(n){const e=n._freezeSettings(),t=wo(n._databaseId);return new HC(n._databaseId,!!e.ignoreUndefinedProperties,t)}function qC(n,e,t,r,s,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);_m("Data must be an object, but it was:",o,r);const c=mm(r,o);let l,h;if(i.merge)l=new ut(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Io(e,p,t);if(!o.contains(m))throw new O(k.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);JC(f,m)||f.push(m)}l=new ut(f),h=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,h=o.fieldTransforms;return new BC(new rt(c),l,h)}class hl extends ll{_toFieldTransform(e){return new RA(e.path,new gs)}isEqual(e){return e instanceof hl}}function $C(n,e,t,r=!1){return dl(t,n.createContext(r?4:3,e))}function dl(n,e){if(ym(n=$e(n)))return _m("Unsupported field value:",e,n),mm(n,e);if(n instanceof ll)return(function(r,s){if(!pm(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=dl(c,s.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return AA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=le.fromDate(r);return{timestampValue:Ui(s.serializer,i)}}if(r instanceof le){const i=new le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ui(s.serializer,i)}}if(r instanceof Ct)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof st)return{bytesValue:Mg(s.serializer,r._byteString)};if(r instanceof me){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$c(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ft)return(function(o,c){const l=o instanceof ft?o.toArray():o;return{mapValue:{fields:{[hg]:{stringValue:dg},[Oi]:{arrayValue:{values:l.map((f=>{if(typeof f!="number")throw c.createError("VectorValues must only contain numeric values.");return jc(c.serializer,f)}))}}}}}})(r,s);if(qg(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${co(r)}`)})(n,e)}function mm(n,e){const t={};return ig(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jn(n,((r,s)=>{const i=dl(s,e.childContextForField(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function ym(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof le||n instanceof Ct||n instanceof st||n instanceof me||n instanceof ll||n instanceof ft||qg(n))}function _m(n,e,t){if(!ym(t)||!rg(t)){const r=co(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function Io(n,e,t){if((e=$e(e))instanceof fm)return e._internalPath;if(typeof e=="string")return WC(n,e);throw $i("Field path arguments must be of type string or ",n,!1,void 0,t)}const zC=new RegExp("[~\\*/\\[\\]]");function WC(n,e,t){if(e.search(zC)>=0)throw $i(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new fm(...e.split("."))._internalPath}catch{throw $i(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function $i(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new O(k.INVALID_ARGUMENT,c+n+l)}function JC(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{convertValue(e,t="none"){switch(pn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(fn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw B(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return jn(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Oi].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>ge(o.doubleValue)));return new ft(t)}convertGeoPoint(e){return new Ct(ge(e.latitude),ge(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ho(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ds(e));default:return null}}convertTimestamp(e){const t=dn(e);return new le(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=oe.fromString(e);re(Hg(r),9688,{name:e});const s=new fs(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(t)||Ft(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends GC{constructor(e){super(),this.firestore=e}convertBytes(e){return new st(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new me(this.firestore,null,t)}}function _r(){return new hl("serverTimestamp")}const ad="@firebase/firestore",cd="4.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Io("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class KC extends wm{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pl{}class QC extends pl{}function YC(n,e,...t){let r=[];e instanceof pl&&r.push(e),r=r.concat(t),(function(i){const o=i.filter((l=>l instanceof gl)).length,c=i.filter((l=>l instanceof Ao)).length;if(o>1||o>0&&c>0)throw new O(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Ao extends QC{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ao(e,t,r)}_apply(e){const t=this._parse(e);return Em(e._query,t),new $n(e.firestore,e.converter,Ha(e._query,t))}_parse(e){const t=gm(e.firestore);return(function(i,o,c,l,h,f,p){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new O(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){hd(p,f);const R=[];for(const V of p)R.push(ud(l,i,V));m={arrayValue:{values:R}}}else m=ud(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||hd(p,f),m=$C(c,o,p,f==="in"||f==="not-in");return we.create(h,f,m)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function XC(n,e,t){const r=e,s=Io("where",n);return Ao._create(s,r,t)}class gl extends pl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new gl(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:_t.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Em(o,l),o=Ha(o,l)})(e._query,t),new $n(e.firestore,e.converter,Ha(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ud(n,e,t){if(typeof(t=$e(t))=="string"){if(t==="")throw new O(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tg(e)&&t.indexOf("/")!==-1)throw new O(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(oe.fromString(t));if(!j.isDocumentKey(r))throw new O(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ih(n,new j(r))}if(t instanceof me)return Ih(n,t._key);throw new O(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${co(t)}.`)}function hd(n,e){if(!Array.isArray(n)||n.length===0)throw new O(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Em(n,e){const t=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new O(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function ZC(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Qr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sn extends wm{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new yi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Io("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Sn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Sn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Sn._jsonSchema={type:Ee("string",Sn._jsonSchemaVersion),bundleSource:Ee("string","DocumentSnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class yi extends Sn{data(e={}){return super.data(e)}}class Rn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Qr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new yi(this._firestore,this._userDataWriter,r.key,r,new Qr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new yi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Qr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new yi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Qr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:eS(c.type),doc:l,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Rn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Nc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function eS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn._jsonSchemaVersion="firestore/querySnapshot/1.0",Rn._jsonSchema={type:Ee("string",Rn._jsonSchemaVersion),bundleSource:Ee("string","QuerySnapshot"),bundleName:Ee("string"),bundle:Ee("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(n){n=dt(n,me);const e=dt(n.firestore,On),t=vo(e);return xC(t,n._key).then((r=>vm(e,n,r)))}function tS(n){n=dt(n,$n);const e=dt(n.firestore,On),t=vo(e),r=new fl(e);return Tm(n._query),VC(t,n._query).then((s=>new Rn(e,r,n,s)))}function _s(n,e,t){n=dt(n,me);const r=dt(n.firestore,On),s=ZC(n.converter,e,t),i=gm(r);return bm(r,[qC(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,It.none())])}function nS(n){return bm(dt(n.firestore,On),[new Bc(n._key,It.none())])}function rS(n,...e){var h,f,p;n=$e(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||ld(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(ld(e[r])){const m=e[r];e[r]=(h=m.next)==null?void 0:h.bind(m),e[r+1]=(f=m.error)==null?void 0:f.bind(m),e[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let i,o,c;if(n instanceof me)o=dt(n.firestore,On),c=fo(n._key.path),i={next:m=>{e[r]&&e[r](vm(o,n,m))},error:e[r+1],complete:e[r+2]};else{const m=dt(n,$n);o=dt(m.firestore,On),c=m._query;const v=new fl(o);i={next:R=>{e[r]&&e[r](new Rn(o,v,m,R))},error:e[r+1],complete:e[r+2]},Tm(n._query)}const l=vo(o);return kC(l,c,s,i)}function bm(n,e){const t=vo(n);return DC(t,e)}function vm(n,e,t){const r=t.docs.get(e._key),s=new fl(n);return new Sn(n,s,e._key,r,new Qr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){VI(vr),ur(new xn("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new On(new OI(r.getProvider("auth-internal")),new FI(o,r.getProvider("app-check-internal")),tA(o,s),o);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),rn(ad,cd,e),rn(ad,cd,"esm2020")})();const sS={apiKey:"AIzaSyCvK7ounDvKzgKGHK30uCFqDUbqZkoOGJc",authDomain:"cardy-hardy.firebaseapp.com",projectId:"cardy-hardy",storageBucket:"cardy-hardy.firebasestorage.app",messagingSenderId:"756160918063",appId:"1:756160918063:web:830975f45634054dfe8cda",measurementId:"G-MXM77YZD95"};let ma=null,ya=null,_a=null,wa=null;const Im=()=>(ma||(ma=up(sS)),ma),wr=()=>(ya||(ya=kI(Im())),ya),dd=()=>(_a||(_a=new xt),_a),So=()=>(wa||(wa=FC(Im())),wa),Am=()=>cl(So(),"admins","list"),Cm=()=>cl(So(),"config","site"),ml=n=>cl(So(),"users",n),Sm=()=>LC(So(),"users"),Za=(n="")=>n.trim().toLowerCase(),iS=()=>typeof navigator<"u"&&/iPad|iPhone|iPod/i.test(navigator.userAgent||""),oS=async()=>{const n=[{key:"indexedDB",value:Hp},{key:"local",value:Mp},{key:"session",value:Pc}];let e=null;for(const t of n)try{return await mv(wr(),t.value),{persistence:t.key,error:null}}catch(r){e=r,console.warn(`Failed to set ${t.key} persistence`,r)}return{persistence:"none",error:e}},aS=async()=>{let n=null,e=null;try{e=await Wv(wr())}catch(r){n=r,console.error("Firebase redirect sign-in failed",r)}const t=await oS();return{redirectError:n,redirectResult:e,persistence:t}},Rm=async()=>{try{return await Fv(wr(),dd())}catch(n){if(!iS())throw n;return console.warn("Popup sign-in failed on iOS, falling back to redirect",n),$v(wr(),dd())}},zi=()=>(console.log("start signout"),Tv(wr()).then(()=>{console.log("signout completed")})),cS=n=>wv(wr(),n),Pm=async()=>{const n=await Co(Am());if(!n.exists())return[];const e=n.data();return Array.isArray(e.items)?e.items:[]},lS=async(n="")=>(await Pm()).map(Za).includes(Za(n)),uS=async n=>_s(Am(),{items:n.map(Za).filter(Boolean),updatedAt:_r()},{merge:!0}),yl=async()=>{const n=await Co(Cm());if(!n.exists())return null;const e=n.data();return typeof e.nextMeetupDate=="number"?e.nextMeetupDate:null},hS=async n=>_s(Cm(),{nextMeetupDate:n,updatedAt:_r()},{merge:!0}),dS=async n=>{const e=ml(n.id),t=await Co(e),r={email:n.email,firstName:n.firstName,lastName:n.lastName,...n.userType?{userType:n.userType}:{},updatedAt:_r()};return t.exists()?_s(e,r,{merge:!0}):_s(e,{...r,createdAt:_r()})},fS=async n=>{const e=n==null?void 0:n.uid;if(!e)return!1;const t=ml(e);if((await Co(t)).exists())return!0;const s=(n.email||"").trim().toLowerCase();if(s&&!(await tS(YC(Sm(),XC("email","==",s)))).empty)return!0;const i=n.displayName||"",[o="",...c]=i.trim().split(/\s+/),l=c.join(" ");return await _s(t,{email:s,firstName:o,lastName:l,userType:"unverified",createdAt:_r(),updatedAt:_r()}),!0},km=()=>{const n=new Mf([]),e=rS(Sm(),t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));r.sort((s,i)=>{var l,h,f,p,m,v,R,V,P,N;const o=(l=s==null?void 0:s.createdAt)!=null&&l.seconds?s.createdAt.seconds*1e3:((m=(p=(f=(h=s==null?void 0:s.createdAt)==null?void 0:h.toDate)==null?void 0:f.call(h))==null?void 0:p.getTime)==null?void 0:m.call(p))??0;return((v=i==null?void 0:i.createdAt)!=null&&v.seconds?i.createdAt.seconds*1e3:((N=(P=(V=(R=i==null?void 0:i.createdAt)==null?void 0:R.toDate)==null?void 0:V.call(R))==null?void 0:P.getTime)==null?void 0:N.call(P))??0)-o}),n.next(r)},t=>{console.error("Failed to listen to users",t)});return n.unsubscribe=e,n},pS=async n=>n?(await nS(ml(n)),!0):!1,xm=({onUser:n,toast:e})=>{if(typeof n!="function")throw new Error("startAuthFlow requires an onUser callback.");aS().then(({redirectError:t,redirectResult:r,persistence:s})=>{var i,o;t&&((i=e==null?void 0:e.error)==null||i.call(e,"Sign-in failed after redirect. Try again.")),s!=null&&s.error&&((o=e==null?void 0:e.error)==null||o.call(e,"Safari blocked login storage. Check cookie settings.")),r!=null&&r.user&&n(r.user,"redirectResult")}).catch(t=>{var r;console.error("Failed to prepare auth",t),(r=e==null?void 0:e.error)==null||r.call(e,"Sign-in setup failed. Try again.")}),cS(t=>{n(t,"onAuthChanged")})},gS=async({user:n,mountSso:e,toast:t,onDenied:r,onPermissionsError:s}={})=>{var o,c;let i=!1;try{i=await lS((n==null?void 0:n.email)||"")}catch(l){return console.error("Failed to load admin list",l),s==null||s(l),(o=t==null?void 0:t.error)==null||o.call(t,"Unable to verify access. Check Firestore rules."),e==null||e("denied",(n==null?void 0:n.email)||"","auth:permissions"),!1}return i?!0:(r==null||r(),(c=t==null?void 0:t.error)==null||c.call(t,`Signed in as ${(n==null?void 0:n.email)||"unknown"} but not authorized.`),e==null||e("denied",(n==null?void 0:n.email)||"","auth:denied"),!1)},Vm=async({user:n,mountSso:e,toast:t,setCurrentUser:r,onSignedOut:s,onDenied:i,onAuthorized:o,reason:c=""}={})=>{if(!n)return r==null||r(null),s==null||s(),e==null||e("login","","auth:logged-out"),!1;try{await fS(n)}catch(h){console.warn("Failed to ensure user profile",h)}return await gS({user:n,mountSso:e,toast:t,onDenied:i,onPermissionsError:i})?(r==null||r(n),o==null||o(n,c),!0):!1},_l=F(({status:n,userEmail:e,adminEmail:t,onSignIn:r,onSignOut:s})=>(_l.inputs(i=>{[{status:n,userEmail:e,adminEmail:t,onSignIn:r,onSignOut:s}]=i,r=et(r),s=et(s)}),[()=>n==="loading"?ra.class`panel auth-panel`(Vt("Checking login...")):n==="denied"?ra.class`panel auth-panel`(Cn("Access denied"),Vt.class`auth-warning`(()=>e||"This account"," is not authorized."),Vt("Please be patient as we review your account to become verified status."),C.class`auth-actions`(pe({type:"button",class:"add-button",onClick:s},"Sign out"))):ra.class`panel auth-panel`(Cn("Sign in"),Vt("Use Google to access admin tools."),C.class`auth-actions`(pe({type:"button",class:"add-button",onClick:r},"Sign in with Google")))])),mS=F(()=>{let n=[];const e=it(()=>{});F.promise=Pm().then(o=>{n=Array.isArray(o)?o:[],e()}).catch(o=>{console.error("Failed to load admin list",o)});const t=(o,c)=>{n=n.map((l,h)=>h===o?c:l),e()},r=()=>{n=[...n,""],e()},s=o=>{n=n.filter((c,l)=>l!==o),e()},i=()=>uS(n).then(()=>{alert("saved")}).catch(o=>{console.error("Failed to save admin list",o)});return ro.style`border:0;padding:0;margin:0;`(C.style`display:flex;flex-direction:column;gap:0.6em;`(o=>(n.length?n:[""]).map((c,l)=>C.style`display:flex;gap:0.6em;align-items:center;`(tt.type`text`.value(h=>c).onInput(h=>t(l,h.target.value)).style`width:100%`,pe.onClick(()=>s(l))("remove")))),C.style`display:flex;gap:0.6em;align-items:center;margin-top:0.8em;flex-wrap:wrap;`(pe.onClick(r)("add"),pe.onClick(i)("save to firestore")))});function Dm({startDateTime:n,message:e,subject:t}){n=new Date(n);const{year:r,month:s}=wl(n),i=("0"+(n.getDate()+1)).slice(-2),o=Wi(n),c=new Date(new Date(n).setHours(n.getHours()+2)),l=Wi(c),h=encodeURIComponent(e),f=encodeURIComponent(t);return`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${r}${s}${i}${o}%2F${r}${s}${i}${l}&details=${h}&location=&text=${f}`}function Nm({startDateTime:n,message:e,subject:t}){n=new Date(n);const{year:r,month:s,day:i,hours:o}=wl(n),l=new Date(new Date(n).setHours(n.getHours()+2)).getHours(),h=encodeURIComponent(e.replace(/\n/g,"<br>")),f=encodeURIComponent(t);return`https://outlook.live.com/calendar/0/action/compose?allday=false&body=${h}&enddt=${r}-${s}-${i}T${l}%3A00%3A00&location=&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=${r}-${s}-${i}T${o}%3A00%3A00&subject=${f}`}function Om({startDateTime:n,message:e,subject:t}){n=new Date(n);const{year:r,month:s}=wl(n),i=("0"+(n.getDate()+1)).slice(-2),o=Wi(n),c=new Date(new Date(n).setHours(n.getHours()+2)),l=Wi(c);return`BEGIN:VCALENDAR
VERSION:2.0
PRODID:${t}
BEGIN:VEVENT
DTSTART:${r}${s}${i}${o}
DTEND:${r}${s}${i}${l}
DTSTAMP:${r}${s}14T181547Z
SUMMARY:${t}
DESCRIPTION:${e.replace(/\n/g,"\\n")}
UID:79992
END:VEVENT
END:VCALENDAR`}function wl(n){n=new Date(n);const e=n.getFullYear(),t=("0"+(n.getMonth()+1)).slice(-2),r=("0"+n.getDate()).slice(-2),s=n.getHours();return{year:e,month:t,day:r,hours:s}}function Wi(n){const e=String(n.getUTCHours()).padStart(2,"0"),t=String(n.getUTCMinutes()).padStart(2,"0"),r=String(n.getUTCSeconds()).padStart(2,"0");return`T${e}${t}${r}Z`}const Mm=F(n=>{Mm.updates(t=>[n]=t);const e=new Date(n);return C({style:"text-align:center;"},C(se("🗓️ ",e.toLocaleString("default",{weekday:"long"}),", ",e.toLocaleString("default",{month:"long"})," ",e.getDate(),Lm(e))),t=>Zf({date:n}),yS(e))});function yS(n){return C({style:"font-size:.65em;opacity:.7"},_S(n))}function Ta(n,e){const t={hour:"numeric",minute:"numeric",hour12:!0,timeZone:e,timeZoneName:"short"};return new Intl.DateTimeFormat("en-US",t).format(n)}function _S(n){const e=Ta(n,"America/New_York"),t=Ta(n,"America/Chicago"),r=Ta(n,"America/Los_Angeles");return`${e} / ${t} / ${r}`}const Fe={subject:"Cary Hardy Patreon meetup",message:`
    Link to virtual meeting is posted to Patreon on a day of meeting
  
    https://www.patreon.com/caryhardy
  `.trim().replace(/    /g,"")},Ro=F(({date:n,showLearnMore:e=!0})=>{n=new Date(n),Ro.updates(h=>{[{date:n,showLearnMore:e}]=h});let t=!1;const r=Dm({startDateTime:n,message:Fe.message,subject:Fe.subject}),s=Nm({startDateTime:n,message:Fe.message,subject:Fe.subject}),i=[{type:"google",url:r},{type:"outlook",url:s}],o=Om({startDateTime:n,message:Fe.message,subject:Fe.subject});var c=new Blob([o],{type:"text/calendar"});const l=window.URL.createObjectURL(c);return jt(C({style:"padding:.5em;"},"Countdown until the next, Patreon LE only, group meetup"),()=>Mm(n),C.style`white-space:nowrap;font-size:.7em;opacity:.8`("save meetup to your calendar using links below 👇"),C({style:"background-color:black;padding:0 0 .2em 0;"},C({style:"white-space:nowrap;font-size:.5em;opacity:.6"},"choose your calendar type below"),C({style:"display:flex;gap:1em;justify-content: center;"},i.map(h=>fd(h.type,{href:h.url},h.type==="google"?ee({src:"assets/media/gmail-logo-2.png",alt:"",width:"48",height:"48",border:"0"}):ee({src:"assets/media/outlook-icon.png",alt:"",width:"48",height:"48",border:"0"})).key(h)),fd("ical",{href:l,download:"cary-hardy-meetup.ics"},ai({viewBox:"0 0 170 170",fill:"currentColor",width:"48",height:"48"},Yf("Apple Logo"),ee({src:"assets/media/ical.png",alt:"",width:"48",height:"48",border:"0"})))),z,C(ce({style:"font-size:0.7em;"},H0(ne({onClick:()=>t=!t,style:"color:white;"},"⬜️ qr invite codes here"))))),Vt({style:"font-size:0.8em;opacity:0.7;line-height:0.9em;"},ce("🔗 A link to virtual meetup is posted on day of meetup,",z,"in the LE ONLY 💬 chat on Patreon.")),()=>e&&C.style`padding:.8em;font-size: .7em;`(ne.class`no-a-style`.href`meetup.html`(pe.type`button`("learn more"))))});function Lm(n){var e=n.getDate(),t="th";return e===1||e===21||e===31?"st":e===2||e===22?"nd":e===3||e===23?"rd":t}const fd=(n,e,t)=>ne({class:"small-icon-link",...e,target:"_blank"},C.class`small-icon`(t),ce({style:"font-size:0.5em;"},n));function Ea(n){var e=document.createElement("textarea");e.value=n,document.body.appendChild(e),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(e)}const Fm=F(({nextMeetupDate:n,onQrUrlChange:e})=>{Fm.inputs(i=>{[{nextMeetupDate:n,onQrUrlChange:e}]=i,e=et(e)});const t=Dm({startDateTime:n,message:Fe.message,subject:Fe.subject}),r=Nm({startDateTime:n,message:Fe.message,subject:Fe.subject}),s=Om({startDateTime:n,message:Fe.message,subject:Fe.subject});return ro.style`border:0;padding:0;margin:0;`(C(C.style`display:flex;flex-wrap:wrap;gap:1em`(C(Xr("Message"),C(tt.type`text`.value(i=>Fe.message).onChange(i=>Fe.message=i.target.value).style`width:100%`)),C(Xr("Subject"),C(tt.type`text`.value(i=>Fe.subject).onChange(i=>Fe.subject=i.target.value).style`width:100%`))),z,z,C.style`display:flex;flex-wrap:wrap;gap:1em;flex-direction:column;`(C.style`display:flex;flex-grow:1`(ai.attr("xmlns","http://www.w3.org/2000/svg").attr("viewBox","0 0 48 48").attr("width","48").attr("height","48")($0.attr("width","22").attr("height","22").attr("x","13").attr("y","13").attr("fill","#fff"),ei.attr("fill","#1e88e5").attr("points","25.68,20.92 26.688,22.36 28.272,21.208 28.272,29.56 30,29.56 30,18.616 28.56,18.616"),Pt.attr("fill","#1e88e5").attr("d","M22.943,23.745c0.625-0.574,1.013-1.37,1.013-2.249c0-1.747-1.533-3.168-3.417-3.168 c-1.602,0-2.972,1.009-3.33,2.453l1.657,0.421c0.165-0.664,0.868-1.146,1.673-1.146c0.942,0,1.709,0.646,1.709,1.44 c0,0.794-0.767,1.44-1.709,1.44h-0.997v1.728h0.997c1.081,0,1.993,0.751,1.993,1.64c0,0.904-0.866,1.64-1.931,1.64 c-0.962,0-1.784-0.61-1.914-1.418L17,26.802c0.262,1.636,1.81,2.87,3.6,2.87c2.007,0,3.64-1.511,3.64-3.368 C24.24,25.281,23.736,24.363,22.943,23.745z"),ei.attr("fill","#fbc02d").attr("points","34,42 14,42 13,38 14,34 34,34 35,38"),ei.attr("fill","#4caf50").attr("points","38,35 42,34 42,14 38,13 34,14 34,34"),Pt.attr("fill","#1e88e5").attr("d","M34,14l1-4l-1-4H9C7.343,6,6,7.343,6,9v25l4,1l4-1V14H34z"),ei.attr("fill","#e53935").attr("points","34,34 34,42 42,34"),Pt.attr("fill","#1565c0").attr("d","M39,6h-5v8h8V9C42,7.343,40.657,6,39,6z"),Pt.attr("fill","#1565c0").attr("d","M9,42h5v-8H6v5C6,40.657,7.343,42,9,42z")),tt.type`text`.style`width:100%`.value(t),pe.onClick(()=>Ea(t))("copy"),pe.onClick(()=>e(t))("qr")),C.style`display:flex;flex:1`(ai.attr("xmlns","http://www.w3.org/2000/svg").attr("viewBox","0 0 48 48").attr("width","48").attr("height","48")(Pt.attr("fill","#03A9F4").attr("d","M21,31c0,1.104,0.896,2,2,2h17c1.104,0,2-0.896,2-2V16c0-1.104-0.896-2-2-2H23c-1.104,0-2,0.896-2,2V31z"),Pt.attr("fill","#B3E5FC").attr("d","M42,16.975V16c0-0.428-0.137-0.823-0.367-1.148l-11.264,6.932l-7.542-4.656L22.125,19l8.459,5L42,16.975z"),Pt.attr("fill","#0277BD").attr("d","M27 41.46L6 37.46 6 9.46 27 5.46z"),Pt.attr("fill","#FFF").attr("d","M21.216,18.311c-1.098-1.275-2.546-1.913-4.328-1.913c-1.892,0-3.408,0.669-4.554,2.003c-1.144,1.337-1.719,3.088-1.719,5.246c0,2.045,0.564,3.714,1.69,4.986c1.126,1.273,2.592,1.91,4.378,1.91c1.84,0,3.331-0.652,4.474-1.975c1.143-1.313,1.712-3.043,1.712-5.199C22.869,21.281,22.318,19.595,21.216,18.311z M19.049,26.735c-0.568,0.769-1.339,1.152-2.313,1.152c-0.939,0-1.699-0.394-2.285-1.187c-0.581-0.785-0.87-1.861-0.87-3.211c0-1.336,0.289-2.414,0.87-3.225c0.586-0.81,1.368-1.211,2.355-1.211c0.962,0,1.718,0.393,2.267,1.178c0.555,0.795,0.833,1.895,0.833,3.31C19.907,24.906,19.618,25.968,19.049,26.735z")),tt.type`text`.style`width:100%`.value(r),pe.onClick(()=>Ea(r))("copy"),pe.onClick(()=>e(r))("qr")),C.style`display:flex;flex:1`(ai.attr("viewBox","0 0 170 170").attr("fill","currentColor").attr("width","48").attr("height","48")(Yf("Apple Logo"),Pt.attr("d","M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.24z")),tt.type`text`.style`width:100%`.value(s),pe.onClick(()=>Ea(s))("copy")))))}),Um=F(({nextMeetupDate:n,date:e,time:t,onDate:r,onSave:s})=>(Um.inputs(i=>{[{nextMeetupDate:n,date:e,time:t,onDate:r,onSave:s}]=i,r=et(r),s=et(s)}),ro.style`border:0;padding:0;margin:0;`(i=>jm({date:e,time:t,onDate:r}),C.style`margin-top:0.6em;`(pe.onClick(s)("save to firestore")),U0,C.style`text-align:center;`(i=>Ro({date:n}))))),jm=F(({date:n,time:e,onDate:t})=>{let r=new Date(n+" "+e).getTime();jm.inputs(o=>{[{date:n,time:e,onDate:t}]=o,t=et(t),r=new Date(n+" "+e).getTime()});const s=o=>{const c=o.target.value;t(new Date(c+" "+e).getTime())},i=o=>{const c=o.target.value;t(new Date(n+" "+c).getTime())};return C.style`display:flex;flex-wrap:wrap;gap:1em`(C(Xr("Date"),C(tt.type`date`.value(o=>n).onChange(s).style`width:100%`)),C(Xr.attr("for","time")("Time"),C(tt.type`time`.value(o=>e).onChange(i).style`width:100%`)),C(Xr.attr("for","time")("UTC"),C(o=>r)))}),wS=F(n=>{const e=Ze(()=>"qrTestElm"+performance.now()),t=()=>{const s=document.getElementById(e);s.innerHTML="",new QRCode(s,{text:n,width:300,height:300,colorDark:"#000000",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.L})},r=()=>{if(typeof QRCode>"u"){var s=document.createElement("script");s.type="text/javascript",s.src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js",s.onload=t,document.head.appendChild(s);return}t()};return Lf.noInit([n],()=>{t()}),C({id:e,oninit:r})}),Bm=F(({qrUrl:n,onQrUrlChange:e})=>(Bm.inputs(t=>{[{qrUrl:n,onQrUrlChange:e}]=t,e=et(e)}),ro.style`border:0;padding:0;margin:0;`(tt.type`text`.attr("placeholder","paste website address").value(t=>n).attr("maxlength","1000").onKeyup(t=>e(t.target.value)),C.style`display:flex;justify-content: center;`(t=>n&&wS(n)))));function pd(n){const e=new Date(n),t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),i=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0");return{date:`${t}-${r}-${s}`,time:`${i}:${o}`}}let gd=!1;const Hm=F(n=>(e=Date.now(),t="",{date:r,time:s}=pd(Number(e)))=>{Hm.inputs(([l])=>{et(l)});function i(){const l=pd(Number(e));r=l.date,s=l.time}gd||(gd=!0,F.promise=yl().then(l=>{typeof l=="number"&&(e=l,i())}).catch(l=>{console.error("Failed to load next meetup date",l)}));const o=()=>hS(Number(e)).then(()=>{alert("saved")}).catch(l=>{console.error("Failed to save meetup date",l)}),c=F(({labelText:l,flex:h,contentNode:f})=>{c.inputs(v=>[{labelText:l,flex:h,contentNode:f}]=v);let p=!1;const m=()=>{p=!p};return C.style`flex:${h};min-width:500px;background:#1f1f1f;border:1px solid rgba(255,255,255,0.3);border-radius:0.8em;overflow:hidden;`(C.onClick(m).style`cursor:pointer;padding:0.75em 1em;color:#fff;user-select:none;font-weight:600;display:flex;gap:0.6em;align-items:center;`(C.style`width:1em;text-align:center;`(()=>p?"▼":"▶"),C(l)),()=>p?C.style`padding:0.8em 1em;border-top:1px solid rgba(255,255,255,0.2);`(v=>f):"")});return C.style`max-width:1200px;margin:0 auto;padding:0 1em;`(Xf(ee.src`assets/media/icon.png`.style`width:40px;margin-right:10px;`,"Hardy Tools"),C.style`display:flex;flex-wrap:wrap;gap:1em;text-align:left;`(l=>c({labelText:"QR Maker",flex:"1",contentNode:Bm({qrUrl:t,onQrUrlChange:h=>{t=h}})}),l=>c({labelText:"Calendar Links",flex:"2",contentNode:Fm({nextMeetupDate:e,onQrUrlChange:h=>{t=h}})}),l=>c({labelText:"meeting tools",flex:"1",contentNode:Um({nextMeetupDate:e,date:r,time:s,onDate:h=>{e=h,i()},onSave:o})}),l=>c({labelText:"admin users",flex:"1",contentNode:mS}),C.style`flex:1;min-width:320px;background:#1f1f1f;border:1px solid rgba(255,255,255,0.3);border-radius:0.8em;overflow:hidden;`(ne({href:"admin/user.html",style:"display:block;padding:0.9em 1em;color:#fff;text-decoration:none;font-weight:600;text-align:center;"},"Open Users Admin"))),z)}),Tl=F(n=>{Tl.inputs(([s])=>{n=et(s)});const e=()=>{window.location.href="/index.html"},t=()=>{window.open("https://github.com/AckerApple/cary-hardy","_blank")},r=()=>{window.location.href="/admin/user.html"};return[pe({type:"button",class:"top-nav-pill",onClick:e},"🏠 home"),pe({type:"button",class:"top-nav-pill",onClick:()=>{window.location.href="/admin.html"}},"⭐️ admin home"),pe({type:"button",class:"top-nav-pill",onClick:t},"🔗 code base"),pe({type:"button",class:"top-nav-pill",onClick:r},"👥 users"),pe({type:"button",class:"top-nav-pill",onClick:n},"🚪 logout")]});let md=!1;const TS=F(()=>md?"":(md=!0,lr(`
    .top-nav {
      background: rgba(0, 0, 0, 0.95);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      gap: 0.45em;
      justify-content: center;
      align-items: center;
      padding: 0.45em 0.8em;
      z-index: 200;
      flex-wrap: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
    }
    .top-nav-fixed {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }
    .top-nav-spacer {
      visibility: hidden;
    }
    .top-nav-pill {
      padding: 0.12em 0.55em;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      font-size: 0.5em;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-decoration: none;
      transition: transform 0.2s ease, background 0.2s ease;
      white-space: nowrap;
      flex: 0 0 auto;
    }
    .top-nav-pill:hover {
      transform: translateY(-1px);
      background: rgba(255, 255, 255, 0.2);
    }
    @media (max-height: 450px) {
      .top-nav {
        padding: 0.3em 0.6em;
        gap: 0.35em;
      }
      .top-nav-pill {
        font-size: 0.45em;
        padding: 0.1em 0.45em;
      }
    }
  `))),ec=F(({className:n="top-nav",content:e})=>(ec.inputs(t=>{[{className:n,content:e}]=t}),C.class`${n}`(typeof e=="function"?e():e))),Po=F(n=>(Po.inputs(e=>{[n]=e}),jt(TS(),ec({className:"top-nav top-nav-fixed",content:n}),ec({className:"top-nav top-nav-spacer",content:n}))));let yd=!1;const IS=F(()=>{let n="loading",e="",t=null;const r=it((c,l="",h="")=>{n=c,e=l}),s=it(c=>{t=c,console.log("currentUser",t),c||(n="login")}),i=()=>{r("login","","auth:logged-out"),n="login"},o=it((c,l="")=>{n="authorized",e=(c==null?void 0:c.email)||""});return yd||(yd=!0,xm({onUser:(c,l)=>{Vm({user:c,mountSso:r,setCurrentUser:s,onSignedOut:i,onDenied:()=>{r("denied",(t==null?void 0:t.email)||"","auth:denied")},onAuthorized:o,reason:l})},toast:{error:c=>console.warn(c)}})),jt(lr(`
      .auth-panel {
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        padding: 1.5em;
        background: rgba(0, 0, 0, 0.6);
        max-width: 520px;
        margin: 0 auto 2em auto;
      }

      .auth-actions {
        margin-top: 1em;
        display: flex;
        gap: 0.75em;
      }

      .auth-warning {
        color: #f6c177;
      }
    `),c=>qm(n,e,i))}),qm=F((n,e,t)=>{qm.inputs(s=>{[n,e,t]=s,t=et(t)});const r=()=>zi().then(t).catch(s=>{console.error("Failed to sign out",s)});return[()=>n==="authorized"?jt(Po(()=>Tl(r)),Hm(t)):C(_l({status:n,userEmail:e,adminEmail:"",onSignIn:()=>Rm().catch(s=>{console.error("Failed to sign in",s)}),onSignOut:()=>(n="login",zi().catch(s=>{console.error("Failed to sign out",s)}))}))]}),$m=F(({user:n,onEdit:e,formatCreatedAt:t})=>($m.inputs(r=>{[{user:n,onEdit:e,formatCreatedAt:t}]=r}),C.style`display:grid;grid-template-columns:1.1fr 1.4fr 0.7fr 0.7fr auto;gap:0.6em;align-items:center;padding:0.4em 0;`(C(`${n.firstName||""} ${n.lastName||""}`.trim()||"—"),C.style`opacity:0.85;`(n.email||"—"),ce.style`opacity:0.85;color:${n.userType==="verified"?"#6fe3a1":"#f26d6d"};`(n.userType||"unverified"),ce.style`opacity:0.7;`(t(n.createdAt)),pe.type`button`.onClick(e).style`border:0;background:transparent;color:#fff;cursor:pointer;font-size:1.1em;`.attr("title","Edit user")("✏️")))),zm=F(({userId:n,createdAtLabel:e,editUser:t,isSaving:r,isDeleting:s,onChange:i,onSave:o,onDelete:c,onCancel:l})=>{zm.inputs(f=>{[{userId:n,createdAtLabel:e,editUser:t,isSaving:r,isDeleting:s,onChange:i,onSave:o,onDelete:c,onCancel:l}]=f});const h=f=>{i({...t,...f})};return C.style`margin-top:1em;padding-top:1em;border-top:1px solid rgba(255,255,255,0.15);display:grid;gap:0.6em;`(C.style`font-weight:600;`("Edit User"),ce.style`opacity:0.6;`("User ID: ",f=>n),ce.style`opacity:0.6;`("Created at: ",f=>e),C.style`display:grid;grid-template-columns:120px 1fr;gap:0.6em;align-items:center;`(ce.style`opacity:0.7;`("Email"),tt.type`email`.value(f=>(t==null?void 0:t.email)||"").onInput(f=>{var p;h({email:((p=f==null?void 0:f.target)==null?void 0:p.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),ce.style`opacity:0.7;`("First name"),tt.type`text`.value(f=>(t==null?void 0:t.firstName)||"").onInput(f=>{var p;h({firstName:((p=f==null?void 0:f.target)==null?void 0:p.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),ce.style`opacity:0.7;`("Last name"),tt.type`text`.value(f=>(t==null?void 0:t.lastName)||"").onInput(f=>{var p;h({lastName:((p=f==null?void 0:f.target)==null?void 0:p.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),ce.style`opacity:0.7;`("Status"),F0.value(f=>(t==null?void 0:t.userType)==="verified"?"verified":"unverified").onChange(f=>{var p;h({userType:((p=f==null?void 0:f.target)==null?void 0:p.value)==="verified"?"verified":"unverified"})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(f=>Mu.value`unverified`.selected(p=>t.userType==="unverified")("unverified"),f=>Mu.value`verified`.selected(p=>t.userType==="verified")("verified"))),C.style`display:flex;gap:0.6em;`(pe.type`button`.onClick(o).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:#1b1b1b;color:#fff;cursor:pointer;`(f=>r?"Saving...":"Save to Firestore"),pe.type`button`.onClick(c).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:#4b1111;color:#fff;cursor:pointer;`(f=>s?"Deleting...":"Delete"),pe.type`button`.onClick(l).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;cursor:pointer;`("Cancel")))});let _d=!1,ba=!1,Zt=km(),Kt=(Zt==null?void 0:Zt.unsubscribe)||null;F(()=>{let n="loading",e="",t=null;const r=it((c,l="",h="")=>{n=c,e=l}),s=it(c=>{t=c,c||(n="login")}),i=()=>{r("login","","auth:logged-out"),n="login"},o=it((c,l="")=>{n="authorized",e=(c==null?void 0:c.email)||""});return _d||(_d=!0,xm({onUser:(c,l)=>{Vm({user:c,mountSso:r,setCurrentUser:s,onSignedOut:i,onDenied:()=>{r("denied",(t==null?void 0:t.email)||"","auth:denied")},onAuthorized:o,reason:l})},toast:{error:c=>console.warn(c)}})),jt(lr(`
      .auth-panel {
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        padding: 1.5em;
        background: rgba(0, 0, 0, 0.6);
        max-width: 520px;
        margin: 0 auto 2em auto;
      }

      .users-page {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 1em;
      }

      .users-card {
        background: #1f1f1f;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 0.8em;
        padding: 1em 1.2em;
        color: rgba(255, 255, 255, 0.9);
      }

      .users-actions {
        margin-top: 1em;
        display: flex;
        gap: 0.75em;
        flex-wrap: wrap;
      }

      .users-actions a {
        display: inline-block;
        padding: 0.6em 1em;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: #fff;
        text-decoration: none;
        font-weight: 600;
      }
    `),c=>Wm(n,e,i))});const Wm=F((n,e,t)=>(Wm.inputs(r=>{[n,e,t]=r,t=et(t)}),[()=>n==="authorized"?Jm(t):C(_l({status:n,userEmail:e,adminEmail:"",onSignIn:()=>Rm().catch(r=>{console.error("Failed to sign in",r)}),onSignOut:()=>(n="login",zi().catch(r=>{console.error("Failed to sign out",r)}))}))])),Jm=F(n=>{Jm.inputs(([P])=>{n=et(P)});const e=()=>zi().then(n).catch(P=>{console.error("Failed to sign out",P)});let t=!1,r=!1,s=!1,i="",o=null,c=null,l=null;const h=P=>P?typeof P.toDate=="function"?P.toDate().toLocaleDateString():typeof P=="number"?new Date(P).toLocaleDateString():P.seconds?new Date(P.seconds*1e3).toLocaleDateString():"-":"-",f=P=>{if(!P)return"-";let N=null;return typeof P.toDate=="function"?N=P.toDate():typeof P=="number"?N=new Date(P):P.seconds&&(N=new Date(P.seconds*1e3)),N?N.toLocaleString():"-"},p=()=>{Kt&&(Kt(),Kt=null),t=!0,i="",Zt=km(),Kt=(Zt==null?void 0:Zt.unsubscribe)||null},m=P=>{o=P.id,c=P.createdAt??null,l={...P}},v=()=>{o=null,c=null,l=null},R=()=>{if(!o||r)return;r=!0,i="";const P={id:o,email:((l==null?void 0:l.email)||"").trim(),firstName:((l==null?void 0:l.firstName)||"").trim(),lastName:((l==null?void 0:l.lastName)||"").trim(),userType:(l==null?void 0:l.userType)==="verified"?"verified":"unverified"};F.promise=dS(P).then(()=>{v()}).catch(N=>{console.error("Failed to save user",N),i="Failed to save user."}).finally(()=>{r=!1})},V=()=>{!o||s||confirm("Delete this user?")&&(s=!0,i="",F.promise=pS(o).then(()=>{v()}).catch(P=>{console.error("Failed to delete user",P),i="Failed to delete user."}).finally(()=>{s=!1}))};return ba||(ba=!0,Kt?t=!0:p()),Sf(()=>{Kt&&(Kt(),Kt=null),ba=!1}),jt(Po(()=>Tl(e)),C.class`users-page`(Xf("Users Admin"),C.class`users-card`(C.style`margin-top:0.75em;display:grid;gap:0.5em;`(P=>i?Vt.style`color:#f6c177;`(i):"",gT(Zt,null,P=>P===null?ce.style`opacity:0.7;`("Loading users..."):(t=!1,console.log("user items",{items:P,isLoading:t}),P.length?P.map(N=>$m({user:N,onEdit:()=>m(N),formatCreatedAt:h}).key(N.id)):ce.style`opacity:0.7;`("No users found.")))),P=>o?zm({userId:o,createdAtLabel:f(c),editUser:l,isSaving:r,isDeleting:s,onChange:N=>{l=N},onSave:R,onDelete:V,onCancel:v}):"",z,C.class`users-actions`(ne.href`../admin.html`("Back to Admin Tools")))))});let wd=!1;const AS=F(()=>(n=0,e=!0,t=Date.now()-1e3,r=it(()=>{}),s=setTimeout(it(()=>e=!1),5e3),i=!wd&&(()=>{wd=!0,F.promise=yl().then(o=>{typeof o=="number"&&(t=o,r())}).catch(o=>{console.error("Failed to load next meetup date",o)})})())=>C(Po(()=>[ne.href`#links`.class`top-nav-pill`("links"),ne.href`#merch`.class`top-nav-pill`("merch & more"),ne.href`#youtube`.class`top-nav-pill`("youtube"),ne.href`#awards`.class`top-nav-pill`("awards"),ne.href`./admin.html`.class`top-nav-pill`("👤")]),C(C.style`
      width: 100%;
      height: 175px;
      background-image: url('assets/media/youtube-channel-banner.jpg');
      background-size: contain;
      background-position: top center;
      background-repeat: repeat-x;
    `,lr(`
      .hover-spin {
        transition: transform 0.3s ease;
      }
      .hover-spin:hover {
        transform: rotate(360deg) scale(1.1);
      }
      .merch-section {
        background: linear-gradient(135deg, rgba(255,0,100,0.1), rgba(0,255,255,0.1));
        border-radius: 20px;
        padding: 2em 1em;
        margin: 0 1em 2em 1em;
        max-width: calc(100vw - 2em);
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
      }
      .merch-section::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
        transform: rotate(45deg);
        animation: shimmer 3s infinite;
      }
      @keyframes shimmer {
        0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
        100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
      }
      .merch-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2em;
        position: relative;
        z-index: 1;
      }
      .merch-item {
        position: relative;
        border-radius: 15px;
        overflow: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      }
      .merch-item:hover {
        transform: translateY(-10px) scale(1.05);
        box-shadow: 0 10px 30px rgba(255,255,255,0.2);
      }
      .merch-item img {
        width: 100%;
        height: auto;
        display: block;
      }
      .sticker-callout {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 120px;
        animation: pulse 2s infinite;
        z-index: 100;
        filter: drop-shadow(0 0 20px rgba(255,255,0,0.5));
      }
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
      .hero-text {
        font-size: clamp(1.2em, 3vw, 1.5em);
        text-align: left;
        background: linear-gradient(45deg, #ff0080, #00ffff, #ff0080);
        background-size: 200% 200%;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        -webkit-text-fill-color: transparent;
        animation: gradient 3s ease infinite;
        margin: 0.5em 1em;
        line-height: 1.2;
        padding: 0;
        display: inline-block;
        font-weight: bold;
      }
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .welcome-text {
        font-size: clamp(1.5em, 5vw, 2.5em);
        text-align: center;
        background: linear-gradient(90deg, #ff0000, #ffff00, #ff0000);
        background-size: 300% 300%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: welcome-gradient 6s ease infinite;
        line-height: 1.2;
        font-weight: bold;
        font-style: italic;
      }
      @keyframes welcome-gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .section-anchor {
        scroll-margin-top: 70px;
      }
    `),ee.attr("src","assets/media/sticker.png").class`sticker-callout`.style`transition: opacity 0.5s ease;`.attr("style.opacity",o=>e?1:0).onClick(()=>window.scrollTo({top:document.querySelector(".merch-section").offsetTop,behavior:"smooth"})).attr("alt","Super Wow Limited Edition"),C.onClick(()=>++n)(lr(`
        .carousel-3d-wrapper {
          width: 100%;
          height: 45vh;
          min-height: 350px;
          max-height: 450px;
          position: relative;
          overflow: hidden;
          perspective: 1000px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 1em 0;
        }

        .carousel-3d {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: carousel-rotate 120s infinite linear;
        }

        .carousel-3d-item {
          position: absolute;
          width: 240px;
          height: 300px;
          left: 50%;
          top: 50%;
          margin-left: -120px;
          margin-top: -150px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          background: #000;
        }

        .carousel-3d-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .carousel-3d-item:nth-child(1) { transform: rotateY(0deg) translateZ(320px); }
        .carousel-3d-item:nth-child(2) { transform: rotateY(60deg) translateZ(320px); }
        .carousel-3d-item:nth-child(3) { transform: rotateY(120deg) translateZ(320px); }
        .carousel-3d-item:nth-child(4) { transform: rotateY(180deg) translateZ(320px); }
        .carousel-3d-item:nth-child(5) { transform: rotateY(240deg) translateZ(320px); }
        .carousel-3d-item:nth-child(6) { transform: rotateY(300deg) translateZ(320px); }


        @keyframes carousel-rotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(-360deg); }
        }

        .carousel-title {
          text-align: center;
          font-size: clamp(2.5em, 7vw, 5em);
          background: linear-gradient(90deg, #ff0080, #00ffff, #ff0080);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s linear infinite;
          font-weight: bold;
          margin: 0 0 0.5em 0;
          text-transform: uppercase;
          letter-spacing: 3px;
        }

        @keyframes shine {
          to { background-position: 200% center; }
        }

        .carousel-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
          color: white;
          padding: 1em;
          text-align: center;
          font-weight: bold;
          transform: translateY(0);
          opacity: 0.9;
        }


        @media (max-width: 768px) {
          .carousel-3d-item {
            width: 200px;
            height: 250px;
            margin-left: -100px;
            margin-top: -125px;
          }
          .carousel-3d-item:nth-child(1) { transform: rotateY(0deg) translateZ(250px); }
          .carousel-3d-item:nth-child(2) { transform: rotateY(60deg) translateZ(250px); }
          .carousel-3d-item:nth-child(3) { transform: rotateY(120deg) translateZ(250px); }
          .carousel-3d-item:nth-child(4) { transform: rotateY(180deg) translateZ(250px); }
          .carousel-3d-item:nth-child(5) { transform: rotateY(240deg) translateZ(250px); }
          .carousel-3d-item:nth-child(6) { transform: rotateY(300deg) translateZ(250px); }
        }
        @media (max-width: 520px) {
          .carousel-3d-wrapper {
            margin: 0.35em 0 0.6em;
          }
        }
      `),C.class`bounce-in`.style`--fx-index:5;`(C.class`carousel-3d-wrapper`(C.class`carousel-3d`(C.class`carousel-3d-item`(ee.attr("src","assets/media/unnamed.jpg").attr("alt","Cary Hardy")),C.class`carousel-3d-item`(ee.attr("src","assets/media/Cary-Hardy.jpg").attr("alt","Cary Hardy")),C.class`carousel-3d-item`(ee.attr("src","assets/media/cool_shots/CH_chill.jpg").attr("alt","Cary Hardy Chill")),C.class`carousel-3d-item`(ee.attr("src","assets/media/cool_shots/CH_kong.jpg").attr("alt","Cary Hardy Kong")),C.class`carousel-3d-item`(ee.attr("src","assets/media/cool_shots/CH_machines.jpg").attr("alt","Cary Hardy Machines")),C.class`carousel-3d-item`(ee.attr("src","assets/media/cool_shots/playfield_red.jpg").attr("alt","Playfield")))),o=>n>4&&C.style`text-align: center; margin-top: 2em;`(ne.href`./admin.html`.style`color:white; text-decoration: underline;`("🔨 admin tools")))),C.class`bounce-in`.style`--fx-index:1; text-align: center; max-width: 900px; margin: 0 auto;`(Cn.class`welcome-text`("Welcome to where I talk and do everything pinball")),z,C.style`text-align: center;`(ee.attr("src","assets/media/pewpew+cary.png").attr("alt","Pew Pew Cary Hardy").style`max-width: 900px; width: 100%; height: auto;`),z,z,z,C.class`bounce-in section-anchor`.attr("id","links").style`--fx-index:5; display: flex; align-items: center; margin: 1em 0;`(C.style`flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`,ce.style`padding: 0 1em; color: rgba(255,255,255,0.8); white-space: nowrap;`("links"),C.style`
          flex: 1;
          height: 1px;
          background: linear-gradient(270deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));
        `),C.style`display:flex;flex-wrap:wrap;gap:1em;justify-content: center;`(ne.href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`.class`bounce-in link-icon`.style`--fx-index: 2;`(ee.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3ElEQVR4Ae2WIQzDIBBFEdPV6Ip6L2Y3Me9NMzuB98GbWrysqHf1otWYismm+vYFTRCEhXXjJrjkmSslLwHgi8vjxkoRKAL/J0BCSHAHGhjQgxHMwIKnY/Px+taNHd2/Bmg3p4wKuIH0Y1RQAB+ugDJxDgn0GQVMSMBmFJhDApSTYwLLQtR13xNAo0oWINS6ErXtpxInX0CmC3g1TURNkypQ+QL1IYG9hiFFRPIL8C8B/ybkO4bsFxH7Vcz+GLE/x5yBRL+LZDVQkTi2Ochn70dimQpFspKKi0AReAF/IVUTZ3/BGQAAAABJRU5ErkJggg==").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),ne.href`https://rumble.com/c/c-2975430`.class`bounce-in link-icon`.style`--fx-index: 3;`(ee.attr("src","https://rumble.com/i/favicon-v4.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),ne.href`https://twitter.com/cary_hardy`.class`bounce-in link-icon`.style`--fx-index: 4;`(ee.attr("src","https://cdn-icons-png.flaticon.com/512/124/124021.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),ne.href`https://www.instagram.com/caryhardypinball/`.class`bounce-in link-icon`.style`--fx-index: 5;`(ee.attr("src","https://cdn-icons-png.flaticon.com/256/1409/1409946.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),ne.href`https://www.patreon.com/caryhardy`.class`bounce-in link-icon`.style`--fx-index: 6;`(ee.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUUFRj///8AAADe39+AgIE8PT4MDhF3eHhDREUREhUKCxD7+/sFBwwAAAYNDxLl5eWlpabFxcbw8PC/v8BKS0wXGBzLy8yGhoevr7Dv7+9jZGV9fX63t7giIybZ2dlubm+Wl5gpKiwzMzZZWVtiYmRTVFaPj5ChoaJHSEo5OTy9mcuCAAAEZElEQVR4nO3c6XaiQBCGYSgHtVkEcUNjJFFjzP3f4IDOklEnVDc9VDPne/7j8T0szdZ4HgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRlQncSpbG8moRxclkqDic6C3ZlEjyNbpXP3H8aEnn7+WFTL7U5zPcLovCf/l0DtPLvpMGQseSkWnPjb7PlLs2jeqkoT3fL7Sqo1iZn8c7Qt/vCAaMwpv0mS++X9f11cfyguIO/zmRUqGJ6ywaP8n5sBO8Hil3ZJ00K43i+zf/eV8un5zjpKKGBfqFK3mZf513NDuTEatQtVETZmhNYrceMXGjULFTx5uHh5bG0DOUT9QpDKiJ+YDWCZPLjo1ZhEkx1+mrLgLoNuqNTSGeNLfTXj42FEzUK6e2LIfCLxINsIr+Qjsxj6K3oKJrILqTAYBO9SkU3VG5hPDcOrPdFwfNUZqEio33wp6Xg0M8rVGHRJtD3M7kTcV5h8qQ10D/wJLYrsgqHzy12wqu12HbKKVThtm2g72+lEjmFVLbdRiv5Ruh6kVGonpftA6vj6UJmJTIKaWQj0PeFViKncGencCezJzYXUmkn0I9KkRGjsVAlrLsyHIWbhfGh4bYaXz6XuOBvLKSTrUDfH0msxOZCS8eZ2s7FQkX2Av1I66lWR4WJrSPphcSQ2FRIFk5Jf8sENtOGQhVb3A3rK2HnCofj1tdNn+32E9cK46O10bCWCoyIDYU0snDh9FtUdn+oaSq0ON7XBG5mNBW+2C1cOVeYvNstPLlXmNktfEEhCq0X2j7SuLcf/v/H0kcvhbXh3niYlFbP2taH7h+zNRSGbR4b3kvPzp2XqudWzw1v7djvdXZW6JGVO/o/Td27PrR8MBUYLBoLww+bhaxXczsu9Gzea8tdvJvoUcsn+J9J3IhiFFp6tlYTeb7WWDjZW7vbtnuVeLzGeLpm7fJC4MKCVTj8sHQzKt+LzFLgPAO2dKyRWYWcwnBuZSXmHzITTThvm9i50Jc4n+EWDl8tXGAMBG7oswutjIkbqRfbWIWKWr+tIHFVccV7NzE0f0H4Kg3EZiUw36CldsfTSPA9aO5b0O2uE6WOo5d/zixU1OIJhmQg/119ZX5+WohO8OLPt1ChYeLWExoJrzTmzCizffFEooFa856M9sUX6TmIerPzSPcG8eBNeuqa7gxLOmvdP51KT1zz9GfJxuGK/SQjH8Xi8ysNZjor2jOviLNAehe8MJitHqojYyrp7CA/QfbCZD6+SmhefHnISYuxM59VMPxqREzj1V9X5HJ1dmT91Uy/i1F/1mRRbgfpH9cc0XqwLR37wIlxoXfZWsNxeXovtrPpdLYt3k/lfOHEVwY+a1Po1SerSbXG1KKiqrWaOPCFgVstC6/Uxb/5g61ZKXQaCvsPhf2Hwv5DYf+hsP9Q2H8o7D8U9h8K+w+F/YfC/jP/nndfqNfz+FawkP5XVqnwjuy7EwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATvgOQzxF32eUYx8AAAAASUVORK5CYII=").attr("alt","Patreon").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),ne.href`https://silverballswag.com/collections/cary-hardy`.class`bounce-in link-icon`.style`--fx-index: 7;`(ee.attr("src","https://cdn.shopify.com/s/files/1/0255/0271/1853/files/silverball_swag_logo_color_360x.png?v=1614300719").attr("alt","silverball_swag").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),ne.href`https://www.facebook.com/hardypinball`.class`bounce-in link-icon`.style`--fx-index: 8;`(ee.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAApVBMVEUYd/L///8Pc/EqgPIZePEXdvKhwPgAa/ATdPGmy/q1zfn9//8Yd/Pf6vwAcfH8/f8Sefrq8/3x9/73+//M3vsPd/nX6Pwcf/4Gef8Ac/kAavSz0PkrhPscf/p1q/zk7f2Es/rA1/pAjPiNufxIk/x6rPpXmftpovqVwPudxflEk/cwiPvF3vtcnPodfPJQmPVnnfVlpvmrxvl1rPaVvftzqPyHtfk2FCUeAAAPm0lEQVR4nN2di3raOgyA7eCUjJjcw0pDCqHcaaFsdO//aMdOoIU1ATu2CGf6zlm/dW3iH8myLcsWwlBi2+wP1w2DYZQsX6bz7Wrc2mwIIZtNa7zazn+/LJNoGISue/xhGEFQD3YDfxh1XnarluH0Hz0v9jxqUooQouxr/vfHvmO0VruXTjT0AxeqIboJi4b63agzehtTh3F4jIpwQfwrIsc/8u8wVC92zPHb6FfU9e2vJ+gTvYS8iWEve5jONgyOaSzHKOi+C/9+Dkqp5zib2fQh64WHp+gTjYT8ww+j5XS2pjGllFSBlaCi3HgNaz2bLqMQa1WkLkLuL+zecj5OrUJ1onSnnBRRKx2/L3p28UAtooeQt8Zfbgc/DTO3Smm6AyO3Wmr8HGyXPtalSB2E/BPPdtZjbOY9qybeCacZPxrzzNXTI3UQht3lpO/RwnGo8qHC59LH/njZDTW0To2Qf8Z+NFrHXtEwZbwvTIK8eD2KfKyqSVUd+tnzoC/jN0UROSN1Ns+Zr9hCBULWT4LkYxBTHbZZQUnjwUfiKzkdFR3ayXyQj3sgfAUioXQwT1TstC4h+1Bf31OqseuVM/L/vPTttb4aa+twuIs9Pc7zOiaJ492wbkPrEDKb8RfksfiAbwDI/38kC7+eV62lwyBbcf9yE74DI6HxKgvqNLYOYTRKY3IjBX4yEhSno+gGhDYOOxOHopvyoWKuS51JJ5S2VDlC9vTeNPVuynZCicx02pPtjZI6tJOJBTbCXydkq6uJ7OAoQ+jiYJTHJBrhKxgJ9UaB1NgoQeji7qTfGNwREaH+pCeDKEEYJql3uxHiAqWXJhLLKnFCf+94tx0iqhGdvfiKQ5iw+0ybJjsIn+p7z11RSxUjdHH0RiujgreWHPEtEkQUIrRxNqb30AWPwtrijTOxgVGE0MUJoXeiv4NwRJIIaVFIh8unRkfBMuEj49NSpPEChOGi6VGwXAjqLwRGjeuEwd67M/0VkofjXq4vqK4SBi+p2dRE9LIwl2qm1xGvERaATcNUigDiFcJwn96bjzkXhnilL14kdPHCM5tmuChsyegtLg8alwhtvOzfZxf8Eta6/vLi0H+BkA30T3dtobkwDTxdHPqrCV2ckbuaqpULH/pJdgHxgg6j8d3NZMqEDRp0fCEIV03YffsfaLAQ4r115Qn9Z8g9l5PWmeRvkbUc9is/nyuXxBWEbriHN9EjHDIty+BiWZZ5zLWRQzW9fVjRFcsJmRt1YPkOmTSW0263HYtsDsK/47Sf2u2+YZhHVJGWUKfKoVbosMeDToB8XD9Mb5vx2+9F8trzQzuXMBj2Xl9/LBej3Wwy3pi5akXmHHwLrqIrlhHaOJh4kBufzD4Z3WS6fL0QUAqHUfJjMX1ftcQeGU+C0pG/VIf2qA/mRrnRWQ6Z/UkOn7nr2qfmZduue5otFA4XhtiD+6PSqU0JoY0TsJ0J7jzM9uaj08sh3EvTLQaa/3NH0E6Jl5QpsUyHvQmQH833jPvGRySVXyFIyLripFfy6yWE4dSCsVG2YiVGextJbnSKEXIlWtOSlVQJYQcoAYFbqEOWcvsq4oQ8/ybtXCe0cTSBicvkgO89+YRnUUIm3iT61hW/6TAYOUCTGWIZf+S3cKUIkTP61gW+EWYp0P4EMTbLK95TlZCtMtLsGqG/iiE0yNyA0+rUApTRIUHx6m8/fU7o4AR+m9wp8+FCIFcKRfvzbcRHo6huqEYod0Sy8yrIcQbD1k/jMzGCcGslNKIETJHAyYNEyLkdDByX/pwL2jYSpmreXGRuwPMd26c0Nu5KFz9w4TIW4UoaAFeVdI0IfFaARoagDcJNE2IqDFEEaArbZ4QORFKIA9qN01IUD9BQPH8Qpom5LF99AJ5OKZ5Qu8F/f7HCX+jefxPE8ZztP3HdbhFkFOa5gnZpAYBrg7vgZCOUQsqlMelcUJCWwgs0MalcUJEN4xS9SFmpQgTVj9BMc5IOKEqIDKc/Jjy8cunsL+3NwKEm7bxXb4eptg6DddvOx+/HipFJCHqwq9zmagGOVQZSfuH5mIG5xJu1YKNhHkadUKw6htM/LWaDu+fcGhZKoTM06iOh7CELs7UdlXYeDi+ax26eNlW0gCb06wUA1HQhL/VCNm8VHVtAUto461SwJqvLVTXh9CeRi3mT+Kd8hoflNDGgaHkCfka/889E7o4aiu5Uh6nUY21ARMqpjHwWJtqvBSY8M+TmgL6iXLMG9jT7NQGC9SOlPctgAknavNuvm+huvcESxhs1AYLrxUq7x9CEtq4p7a8I3z/UHUPGJLQxYlaNlG+B6y6jw+rw4Wao8n38fnNbPdKiPFvR0WHBDkJz6ehSvFEWMJ3JVdKqMXzaRRzogAJbeyrhaGKnCie13a3hD21CATJ89pUcxMBCfkdsWqOhl+qhLD7SykSAtoPf6gFkYr8UtUcYVDCvaWkxEOOMM/zvlNCWy3H/jPP25+q7A1AEvrviiGMQ66+/XCvOuwpDRZf5y3UzsxAEr62lDbXPs/M4N5MoUPDEdo42SjwnZ57ClU6NCeEkl8qZRkI+jq7pnT+MN9dqxYRXVX9qv2itu30ef4wP0Oq8GFV73KbgrvcVTvcaipEJ2dIw3eV8cK0qsR0hHa5nYonKG3jMyOdH88Bw53lFjn3xHRYsUFI1OqAktOz3GDn8ZvLNiHEPDmPz2QLk7/XZD5NvMVfhGD3YjSpw/N7MfjdJiBXKDVHSI3Tu03y+2kgDgE2RshUeH4/TX7HEIA02A/7r2eE+T1R/5QOvfH5PVHc18QAZtqcDuNvd33h7hrgovLGCOm3+9qA7txriJAQp+TOPZB7E5shJEUI6huh/6zfTJuy0vK7L3E20H6jWUOE5feX2vkdtP8CIcnvoP188fk9wrqV2ARh9T3C/C5o3aN+Mzqsvgua3+f9v9fhhfu8McCd7I1YqfdeeSc7v1dfrxIb0eGle/W110a4OSGvjfDXNX8l9S30va8BHV6rb1HUKNEnDRBeq1Giuc7MrQlZJ5xdrjOD81pB/2NCgVpBOJg6+i6hvC0hEar3xGt26btj8NY6NEVqdvG6a9reeFNCwbpruLgKU5Pc2EpFa+fl9Q/12OkNCZnvoKL1DzXWsLwloUwNS311SG9ppRJ1SA+1ZHUg3oyQ15JdSdSSzesB/78IiZeWdcJKQl7TWYe3uRUhybOBpWo6u+Feh7e5ESFThWxdblzUVlfW4m0ICbNR6drqTLoaQho3IcyLyVUU5b5IiCNemEUN8RaEDJBeqtZTTchzkFUN9QaEHBBlF55/QYfMoT6ppbTcgJD1Qfp08Wr7C4Rs/Fwq7n3fgDAvfHTpLZcIedhGrSvewEpN7+/AjAwhW0ntU5X0OXhCM91fufb9CiEOXjhiXUZYQtYsM325VublGiFHRLUtFZSQIBHA64QM0avtUSEJeZu8/fVCPdcJcbjoo5paBCTkgP2FQOkFAUKMl0+0Xl+EI2StoU9LkcaLELKhn9Sbo4IR8pkMEalhI6hDG2fjWhM4QB3ScSZ2P5UQIU92f/OQfMEpGELeDvomWnVQjJA9rPtM5dUIQsjbQJ+rl0v1CJn4e4N3RilGAELC97Gd/fUKPfKEOExS2VwNEEISp4lIgR55Qmapkz6VGhm1E/J39yddmZNWEoTsscHIk7JUzYTcQqk3CqSOkskQ8uYkE0tCjdp1SK1JInmHoRwhe3hvKrHY0EvI5qHptCdbIFpSh+zpYWfiUCQGqY+Qv446k04ofQ2lLCGXaJQKJoXrIiR8JI7TUZ0C2HUIcZDNYqGEYo1WSuNVJlVa+Ch1CFmr/QV5FPA3Wghz5/1IFn69Eu21dMhluIs9cm0ap4Ewf4EX74ZXH1QhdQnZiPT6nnJTvWStyoT5s2n6/oprH6eurUPetmQ+MOmlFYciYT7C08Fcdgg8EwVC9qEGyccgvrDRqEbIF0nx4CMJ6isQq+mQi589D/LN1FLK+oQkj9f3N8+Z+CqiXNQIefv96M+aO50yxNqEeSCtvx5FPq7nQb9EVYdcwu5y0veKAZIoE+YOmk2w+5NlV2KRVCk6CBmF+7ozHuO8MjRRIsyt04wfjV3mqmqvEB2EhSPwl9vBT4OeDR+ShNzUiWn8HGyXPlZyLyeih5C1hjent3gfp4b1FVyVICxs0zLS8XzROz5Qh+gixMVH7vZ+TWdralBOSYSqdPLqgHn0jP3WejZdRiHWpb5cNBLiot+EvexhOts4judRQUJKvdjZzKYPWS/Eenrfl+glPIjtd6POaD5G7VTgp9M2Hb+NfkU9P0fTfdkNCCEXN/CHvc5e4Cf3nWjoB2D3hYERFsYm0m4X6zbMM/kPzEctXgZffqYAAAAASUVORK5CYII=").attr("alt","Facebook").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`)),z,z,z,C.class`bounce-in section-anchor`.attr("id","merch").style`--fx-index:8;`(Cn.class`hero-text`("PINBALL MERCH & MORE")),C.class`merch-section bounce-in`.style`--fx-index:9;`(C.style`display: flex; flex-direction: column; align-items: center; gap: 3em;`(C.style`display: flex; flex-direction: column; align-items: center; gap: 1em;`(C.class`merch-item`.style`max-width: 900px; margin: 0 auto;`(ne.href`https://buy.stripe.com/eVq14f9f01zi3Vn7mN00003`.attr("target","_blank")(ee.attr("src","assets/media/wrong_kong_shirts.jpg").attr("alt","Wrong Kong Shirt"))),ne.attr("target","_blank").href`https://buy.stripe.com/eVq14f9f01zi3Vn7mN00003`.style`display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: 250px; text-align: center;`.onMouseover(o=>o.target.style.transform="scale(1.1)").onMouseout(o=>o.target.style.transform="scale(1)")("Get your 'Wrong Kong!' T-Shirt"),ne.attr("target","_blank").href`https://buy.stripe.com/5kQdR11My7XGbnPePf00005`.style`display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: 250px; text-align: center;`.onMouseover(o=>o.target.style.transform="scale(1.1)").onMouseout(o=>o.target.style.transform="scale(1)")("🇦🇺 Wrong Kong for Australia residents")),C.style`display: flex; flex-direction: column; align-items: center; gap: 1em;`(C.class`merch-item`.style`max-width: 900px; margin: 0 auto;`(ne.href`https://buy.stripe.com/5kA4j775zaRsdHy9AA`.attr("target","_blank")(ee.attr("src","assets/media/merch-on-glass.jpg").attr("alt","Pinball Merchandise"))),ne.attr("target","_blank").href`https://buy.stripe.com/5kA4j775zaRsdHy9AA`.class`bounce-in`.style`--fx-index: 11; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: 250px; text-align: center;`.onMouseover(o=>o.target.style.transform="scale(1.1)").onMouseout(o=>o.target.style.transform="scale(1)")("More guns than Wick T-shirt"))),C.style`text-align: center; margin-top: 2em; display: flex; flex-direction: column; gap: 2em; align-items: center;`(ne.attr("target","_blank").href`https://silverballswag.com/collections/cary-hardy`.class`bounce-in`.style`--fx-index: 12; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: 250px; text-align: center;`.onMouseover(o=>o.target.style.transform="scale(1.1)").onMouseout(o=>o.target.style.transform="scale(1)")("SHOP SILVERBALL SWAG"))),z,z,C.class`bounce-in section-anchor`.attr("id","youtube").style`--fx-index:5; display: flex; align-items: center; margin: 1em 0;`(C.style`flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`,ce.style`padding: 0 1em; white-space: nowrap;`(ne.href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`.attr("target","_blank").style`color: rgba(255,255,255,0.8); text-decoration: underline; text-underline-offset: 2px;`("youtube channel")),C.style`flex: 1; height: 1px; background: linear-gradient(270deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`),C.style`text-align: center;`(C.class`bounce-in`.style`max-width: 900px;margin: auto;--fx-index:12`(B0.attr("src","https://www.youtube.com/embed/JFkiAk44Ntk").attr("frameborder","0").attr("allowfullscreen","").style`width: 100%;height: 500px;`),C.style`text-align: center; margin-top: 2em;`(ne.attr("target","_blank").href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`.class`bounce-in`.style`--fx-index: 13; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: 250px; text-align: center;`.onMouseover(o=>o.target.style.transform="scale(1.1)").onMouseout(o=>o.target.style.transform="scale(1)")("Goto My Channel")),z,z,z,z,C.class`fade-in`.style`--fx-index:16`(o=>Date.now()<t&&jt(C.class`bounce-in`.style`--fx-index:5; display: flex; align-items: center; margin: 1em 0;`(C.style`flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`,ce.style`padding: 0 1em; color: rgba(255,255,255,0.8); white-space: nowrap;`("live meetups"),C.style`flex: 1; height: 1px; background: linear-gradient(270deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`),C.style`margin-top: 2em; display: flex; flex-wrap: wrap; justify-content: center; gap: 2em;`(C.class`bounce-in`.style`--fx-index:17; position: relative; max-width: 500px; width: 90%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(255,0,100,0.3), 0 15px 40px rgba(0,255,255,0.2); transform: perspective(1000px) rotateX(2deg);`(C.style`position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, rgba(255,0,100,0.2), rgba(0,255,255,0.2), rgba(255,0,100,0.2)); animation: shimmer 4s infinite;`,ee.attr("src","assets/media/meetup-screenshot.jpg").attr("alt","Pinball Community Live Meetup").style`width: 100%; height: auto; display: block; position: relative; z-index: 1;`,C.style`position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5em; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); z-index: 2;`(C.style`color: white; font-weight: bold; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-size: 1.1em;`("Monthly Live Meetups"))),C.class`bounce-in`.style`--fx-index:18; position: relative; max-width: 500px; width: 90%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,255,255,0.3), 0 15px 40px rgba(255,0,100,0.2); transform: perspective(1000px) rotateX(-2deg);`(C.style`position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, rgba(0,255,255,0.2), rgba(255,0,100,0.2), rgba(0,255,255,0.2)); animation: shimmer 4s infinite; animation-delay: 2s;`,ee.attr("src","assets/media/meetup-screenshot2.jpg").attr("alt","Pinball Community Live Meetup 2").style`width: 100%; height: auto; display: block; position: relative; z-index: 1;`,C.style`position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5em; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); z-index: 2;`(C.style`color: white; font-weight: bold; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-size: 1.1em;`("Live Discussion & Q&A")))),C.style`margin-top: 2em;`(c=>Ro({date:t,showLearnMore:!0})))),z,z,z,z,ee.class`bounce-in reflection`.attr("alt","Cary Hardy logo").attr("src","https://cdn.shopify.com/s/files/1/0255/0271/1853/collections/Front_1200x1200.png").style`--fx-index:12;width: 55vw;min-width: 200px;max-width: 400px;`,z,z,z,z,z,C.class`bounce-in section-anchor`.attr("id","awards").style`--fx-index:13;`(Cn.class`hero-text`("AWARD WINNING WORK & CONTENT")),C.class`merch-section bounce-in`.style`margin: 2em auto; --fx-index:13;`(C.style`display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 2em; margin: 1em 0;`(C.style`flex: 0 1 calc(90% - 1.5em); min-width: 250px; max-width: 500px; max-height: 600px; overflow: hidden;`(ee.attr("alt","PATB Award").attr("src","assets/media/awards/PBaTB award.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,ce.style`color: white; display: block; text-align: center;`("PATB Award")),C.style`flex: 0 1 calc(90% - 1.5em); min-width: 250px; max-width: 500px; max-height: 600px; overflow: hidden;`(ee.attr("alt","Twipy Award").attr("src","assets/media/awards/Twipy.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,ce.style`color: white; display: block; text-align: center;`("Twipy Award")),C.style`flex: 0 1 calc(90% - 1.5em); min-width: 250px; max-width: 500px; max-height: 600px; overflow: hidden;`(ee.attr("alt","PATB Awards").attr("src","assets/media/awards/PatB awards.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,ce.style`color: white; display: block; text-align: center;`("PATB Awards")),C.style`flex: 0 1 calc(90% - 1.5em); min-width: 250px; max-width: 500px; max-height: 600px; overflow: hidden;`(ee.attr("alt","Cary Hardy and Steve Ritchie handshaking").attr("src","assets/media/awards/photo0.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,ce.style`color: white; display: block; text-align: center;`("TPF 2024")),C.style`flex: 0 1 calc(90% - 1.5em); min-width: 250px; max-width: 500px; max-height: 600px; overflow: hidden;`(ee.attr("alt","Cary Hardy holding award").attr("src","assets/media/awards/photo2.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,ce.style`color: white; display: block; text-align: center;`("TPF 2024")),C.style`flex: 0 1 calc(90% - 1.5em); min-width: 250px; max-width: 500px; max-height: 600px; overflow: hidden;`(ee.attr("alt","Earth Shaker award").attr("src","assets/media/awards/EarthShakerAward.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,ce.style`color: white; display: block; text-align: center;`("TPF 2024")),C.style`flex: 0 1 calc(90% - 1.5em); min-width: 250px; max-width: 500px; max-height: 600px; overflow: hidden;`(ee.attr("alt","TPF 2022").attr("src","assets/media/awards/TPF 2022.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,ce.style`color: white; display: block; text-align: center;`("TPF 2022")),C.style`flex: 0 1 calc(90% - 1.5em); min-width: 250px; max-width: 500px; max-height: 600px; overflow: hidden;`(ee.attr("alt","Cary Hardy owned pinball machine").attr("src","assets/media/awards/photo3.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,ce.style`color: white; display: block; text-align: center;`("TPF 2022")),C.style`flex: 0 1 calc(90% - 1.5em); min-width: 250px; max-width: 500px; max-height: 600px; overflow: hidden;`(ee.attr("alt","Cary Hardy holding award").attr("src","assets/media/awards/photo1.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,ce.style`color: white; display: block; text-align: center;`("TPF 2022")))),z,z,z,z,C("📧",ne.href`mailto:hardypinball@gmail.com?subject=website contact&body=Hello, found your email through your website%0A%0A%0A`.style`color:white`("hardypinball@gmail.com")),z,z,z,z)))),ES=L("img");let Td=!1;const CS=F(()=>{let n=Date.now()-1e3;const e=it(()=>{}),t=()=>new Date(n),r=()=>{const s=document.getElementById("count-clock");s&&n0(Ro,s,{date:t(),showLearnMore:!window.location.href.includes("meetup.html")})};return setTimeout(r,0),Td||(Td=!0,F.promise=yl().then(s=>{typeof s=="number"&&(n=s,e(),r())}).catch(s=>{console.error("Failed to load next meetup date",s)})),jt(ES({class:"bounce-in reflection",alt:"Cary Hardy logo",src:"https://cdn.shopify.com/s/files/1/0255/0271/1853/collections/Front_1200x1200.png",style:"--fx-index:0;width: 55vw;min-width: 200px;max-width: 400px;"}),C({class:"bounce-in",style:"--fx-index:1"},j0("Meet & talk everything pinball!"),Vt("for Patreon LE supporters"),C({style:"font-size:.8em;opacity: .7;"},"😎 come experience the hype")),z,C({class:"bounce-in",style:"--fx-index:2"},C({id:"count-clock"})),z,C({class:"bounce-in",style:"--fx-index:3;text-align: center;"},C({style:"display: inline-block;"},C({style:`
          max-width: 900px;
          background-color:#333;border-radius: .7em;
          margin:.5em;text-align: justify;
          border:1px solid rgba(255,255,255,.5);
          color:rgba(255,255,255,.85);
        `},C({style:"padding:0em 2em;"},C({style:"line-height: 1.5em;"},Vt("And if that sounds interesting to you, consider joining us!"),Vt("By becoming a ",ne({class:"color-inherit",href:"https://www.patreon.com/caryhardy/membership"},"Cary Hardy LE supporter")," before ",s=>t().toLocaleString("default",{month:"long"})," ",s=>t().getDate(),s=>Lm(t()),", you will receive an LE only Patreon ",se({style:"white-space: nowrap;"},"💬 message"),", ",q0("before the meeting start time"),", with an invite ",se({style:"white-space: nowrap;"},"🔗 link")," to join this very exclusive meeting.")),z,Cn("How does the meeting work?"),Lu(Gn("🍺 It mostly works because of beer. Come 🍻 cheers with us!"),Gn("🛎️ Make sure you have Patreon notifications turned on to ensure you receive invite link 1 hour before meeting"),Gn("Meeting software is Google Meets, which is a browser based application. No installation will be required."),Gn("Link to meeting is provided 1 hour before meeting. Must be ",ne({class:"color-inherit",href:"https://www.patreon.com/caryhardy/membership"},"Patreon LE member"))),z,Cn("😮 When issues arise"),Lu(Gn("Watch your Patreon messages."),Gn("In the event of meeting cancellation or disruption due to unforeseen circumstances, a makeup meeting will be communicated directly from Cary Hardy."))),C({style:"text-align: center;"},"⚪️ ",ne({class:"color-inherit",href:"https://www.patreon.com/caryhardy/membership"},"Patreon memberships")," ⚪️")))),z,z,C({class:"bounce-in",style:"--fx-index:4;text-align: center;"},C({style:"padding:.8em;font-size: .7em;"},ne({class:"no-a-style",href:"index.html"},pe({type:"button"},"🔙 home")))))});export{IS as a,AS as h,CS as m,n0 as t};

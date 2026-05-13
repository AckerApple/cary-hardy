var e0=Object.defineProperty;var t0=(n,e,t)=>e in n?e0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ct=(n,e,t)=>t0(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function Gs(n){return n.renderCount=n.renderCount||0,n.varCounter=0,n.state={newer:{state:[],states:[]}},n.global={blocked:[]}}function Yi(){return _e.stateConfig.support}function Ao(n){return ze(n.context),_e.stateConfig.support=n}const qe=function(){};let ht=[];const xt=[];let mt=[],Co=[],un=[],Qc=!1;const cn=[],n0=400;let vr=0;const mc=new Map,me={locks:0};function r0(n,e){const t=mc.get(n);if(t!==void 0&&t>=vr){cn[t]=e;return}const r=cn.length;cn.push(e),mc.set(n,r)}function s0(n,e){e.textContent=n}function et(){me.locks>0||i0()}function i0(){++me.locks,Ff(),--me.locks,Mf(),o0()}function Mf(){c0();const n=un;un=[];for(const e of n)e[0](...e[1])}function o0(){Qc||!cn.length||a0()}function a0(){Qc=!0,requestAnimationFrame(Uf)}function Uf(){++me.locks;let n=0;for(;vr<cn.length&&n<n0;){const e=cn[vr];++vr,e[0](...e[1]),++n}if(Ff(),Mf(),--me.locks,vr<cn.length){requestAnimationFrame(Uf);return}cn.length=0,vr=0,mc.clear(),Qc=!1}function Ff(){const n=xt.length;for(let e=0;e<n;++e){const t=xt[e];t[0](...t[1])}if(n===xt.length)xt.length=0;else{let e=0;for(let t=n;t<xt.length;++t)xt[e]=xt[t],++e;xt.length=e}for(const e of mt)e[0](...e[1]);for(const e of Co)e[0](...e[1]);for(const e of ht)e[0](...e[1])}function c0(){ht=[],mt=[],Co=[]}function Ns(n,e){xt.push([l0,[n,e]])}function l0(n,e){n||console.debug("no element by",{_caller:e,element:n});const t=n.parentNode;t||console.debug("no parentNode by",{_caller:e,element:n}),t.removeChild(n)}function Yc(n,e,t){n.parentNode.insertBefore(e,n)}function Xc(n,e){n.appendChild(e)}typeof document=="object"&&document.createElement("div");function u0(n){return document.createTextNode(n)}function jf(n,e,t=qe,r){const s=u0(e);Yc(n,s),t(s)}const Ws="";var Vh;(function(n){n.string="string",n.number="number",n.boolean="boolean",n.undefined="undefined"})(Vh||(Vh={}));var he;(function(n){n.function="function",n.date="date",n.unknown="unknown",n.object="object"})(he||(he={}));const h0=Date.now(),ue={tag:"html",dom:"dom",templater:"templater",tagComponent:"tagComponent",tagArray:"tagArray",host:"host",subscribe:"subscribe",signal:"signal",stateRender:"stateRender",version:h0};function Bf(n){if(!n)return!1;switch(n.tagJsType){case ue.dom:case ue.tag:case ue.templater:return!0}return!1}function Js(n){const e=n==null?void 0:n.tagJsType;return e===ue.tagComponent||e===ue.stateRender}function d0(n){return Ro(n)&&typeof n.subscribe===he.function}function nr(n){return n&&Qn(n.then)}function Qn(n){return typeof n===he.function}function Ro(n){return typeof n===he.object&&n!==null}function Ze(n){return Array.isArray(n)}function Zc(n){const e=n.state;if(e&&e.newest&&e.newest)return e.newest;if(n.parentContext)return Zc(n.parentContext)}function ko(n){let e=n;for(;e.ownerSupport&&!Js(e.templater);)e=e.ownerSupport;const r=e.context.state;return r&&r.newest||e}function f0(...n){return n}function $f(n){const e=_e.stateConfig;return e.states[e.statesIndex]=n,++e.statesIndex,n(f0)}function p0(n){const e=_e.stateConfig,t=e.statesIndex,l=ko(e.prevSupport).context.state.older.states[t];let u=[];l(function(...m){return u=m,l.lastValues=u,m});const d=function(...m){return u};return e.states[e.statesIndex]=n,++e.statesIndex,n(d)}function Hf(n){ze(n);const e=_e.stateConfig;e.handlers.handler=qf,e.handlers.statesHandler=$f,e.rearray=[];const t=e.state=[],r=e.states=[];e.statesIndex=0;const s=n.state=n.state||{};s.newer={state:t,states:r}}class g0{}function m0(n){const[e]=n(g0),[t]=n(e);return[e,t]}function y0(n){const e=n.callback;if(!e)return n.defaultValue;const[t]=m0(e);return t}function _0(){const n=_e.stateConfig,t=n.rearray[n.state.length];return n.state.push(t),t.defaultValue}function qf(n){var o,c;const e=_e.stateConfig,t=dt();if(!t||!t.state){const l="State requested but TaggedJs is not currently rendering a tag or host";throw console.error(l,{config:e,context:t,function:(c=(o=e.support)==null?void 0:o.templater.wrapper)==null?void 0:c.original}),new Error(l)}const r=t.state.newer;e.state=r.state;let s=n;if(typeof n===he.function&&(s=n()),typeof s===he.function){const l=s;s=function(...d){return l(...d)},s.original=l}const i={get:function(){return y0(i)},defaultValue:s};return e.state.push(i),s}function b0(n){const e=new ae,t=r=>{const s=[],i=[],o=(p,m)=>{if(s[m]=!0,i[m]=p,s.length===n.length){for(const v of s)if(!v)return;r(i,u)}},c=[...n],u=c.shift().subscribe(p=>o(p,0)),d=c.map((p,m)=>p.subscribe(E=>o(E,m+1)));return u.subscriptions=d,u};return e.subscribeWith=t,e}function w0(n,e){const t=n.findIndex(r=>r.callback===e);t!==-1&&n.splice(t,1)}function T0(n,e,t){const r=ae.globalSubCount$;ae.globalSubCount$.next(r.value+1);const s=function(){s.unsubscribe()};return s.callback=e,s.subscriptions=[],s.unsubscribe=function(){return E0(s,t,e)},s.add=i=>(s.subscriptions.push(i),s),s.next=i=>{e(i,s)},s}function zf(n,e,t){const r=[...e],s=r.shift(),i=d=>{if(r.length)return zf(d,r,t);t(d)};let o=i;const u=s(n,{setHandler:d=>o=d,next:i});o(u)}function E0(n,e,t){w0(e,t);const r=ae.globalSubCount$;ae.globalSubCount$.next(r.value-1),n.unsubscribe=()=>n;const s=n.subscriptions;for(const i of s)i.unsubscribe();return n}const kr=class kr{constructor(e,t){ct(this,"onSubscription");ct(this,"methods",[]);ct(this,"isSubject",!0);ct(this,"subscribers",[]);ct(this,"subscribeWith");ct(this,"value");ct(this,"set",this.next.bind(this));this.onSubscription=t,arguments.length>0&&(this.value=e)}subscribe(e){const t=T0(this,e,this.subscribers),r=this.subscribeWith;if(r){if(this.methods.length){const s=e;e=i=>{zf(i,this.methods,o=>s(o,t))}}return r(e)}return this.subscribers.push(t),this.onSubscription&&this.onSubscription(t),t}next(e){this.value=e,this.emit()}emit(){const e=this.value,t=this.subscribers;for(const r of t)r.callback(e,r)}toPromise(){return new Promise(e=>{this.subscribe((t,r)=>{r.unsubscribe(),e(t)})})}toCallback(e){const t=this.subscribe((r,s)=>{const i=s==null?void 0:s.unsubscribe;i?i():setTimeout(()=>{t.unsubscribe()},0),e(r)});return t}pipe(...e){const t=[];"value"in this&&t.push(this.value);const r=new kr(...t);return r.setMethods(e),r.subscribeWith=s=>this.subscribe(s),r.next=s=>this.next(s),r}setMethods(e){this.methods=e}static all(e){const t=e.map(r=>d0(r)?r:new kr(r,i=>(i.next(r),i)));return b0(t)}};ct(kr,"globalSubCount$",new kr(0));let ae=kr;const v0=new ae(void 0,function(e){Yi()||e.next()}),_e={stateConfig:{state:[],version:Date.now(),handlers:{handler:qf,statesHandler:$f}},tagClosed$:v0};function I0(n,e){const r=n.templater.tag.values;for(const s of e)A0(r,s,n);return e}function A0(n,e,t){if(e.deleted)return;const r=e.tagJsVar;ze(e),r.processUpdate("",e,t,n),Ne()}function Gf(n,e){if(!n)return;const r=n.context.contexts;C0(n,e),++me.locks,I0(n,r),--me.locks,et()}function C0(n,e){const t=e.templater,r=e.templater.tag,s=t.values||r.values,i=n.templater.tag;i.values=s}function R0(n,e){return yc(n,e)}function yc(n,e){if(n===null||typeof n!==he.object||e<0)return n;if(n instanceof Date)return new Date(n);if(n instanceof RegExp)return new RegExp(n);const t=Ze(n)?[]:Object.create(Object.getPrototypeOf(n));if(Ze(n))for(let r=0;r<n.length;r++)t[r]=yc(n[r],e-1);else for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=yc(n[r],e-1));return t}function k0(n,e,t){return el(n,e,t)}function el(n,e,t){return n===e||x0(n,e)||t<0?!0:typeof n===he.object&&typeof e===he.object?n instanceof Date&&e instanceof Date?n.getTime()===e.getTime():Ze(n)&&Ze(e)?P0(n,e,t-1):Ze(n)||Ze(e)?!1:S0(n,e,t-1):!1}function S0(n,e,t){const r=Object.keys(n),s=Object.keys(e);if(r.length===0&&s.length===0)return!0;if(r.length!==s.length)return!1;for(const i of r)if(!s.includes(i)||!el(n[i],e[i],t-1))return!1;return!0}function P0(n,e,t){if(n.length!==e.length)return!1;for(let r=0;r<n.length;r++)if(!el(n[r],e[r],t-1))return!1;return!0}function x0(n,e){return Qn(n)&&Qn(e)&&n.toString()===e.toString()}function Nh(n){return n.map(tl)}function tl(n,e){const t=n,r=n==null?void 0:n.tagJsType;if(r)switch(r){case ue.signal:case ue.subscribe:case ue.stateRender:return;case ue.dom:case ue.tag:case ue.templater:return Nh(t.values)}return Ze(n)?Nh(t):R0(n,e)}function V0(n,e){const t=n.length;for(let r=0;r<t;++r){const s=n[r],i=e[r];if(Ze(s)&&Ze(i)){if(s===i)continue;return 3}if(!(typeof s===he.function&&typeof i===he.function)){if(typeof s===he.object){if(!s&&!i)continue;if(typeof e===he.object){const o=Object.entries(s);for(const c of o)if(!N0(c,i))return 3.1}continue}if(s!==i)return 3.3}}return!1}function N0([n,e],t){const r=t[n];return typeof e===he.function&&typeof r===he.function?!0:r===e}function nl(n,e,t){return n}function D0(n){return typeof n!==he.object||!n||n.tagJsType}function O0(n,e,t,r,s,i){var c;const o=Object.keys(n);for(const l of o){const u=n[l],d=e[l],p=rl(d,u,t,r,i,s+1);u===p||(c=Object.getOwnPropertyDescriptor(n,l))!=null&&c.set||(n[l]=p)}return n}function L0(n,e,t,r,s,i){for(let o=n.length-1;o>=0;--o){const c=n[o],l=e[o];n[o]=rl(l,c,t,r,i,s+1)}return n}function rl(n,e,t,r,s,i){return n==null||i>s?e:typeof n===he.function?e.mem?(n.mem=e.mem,e):(n.mem=e,n):D0(e)?e:Ze(e)?L0(e,n,t,r,i,s):O0(e,n,t,r,i,s)}function M0(n,e,t,r,s,i=-1){const o=e.context;if(!o.global||!o.state.newest){const E=nl(r);r.push(...E);const v=n.propsConfig;return v.castProps=E,r}e=o.state.newest||e;const d=e.propsConfig.castProps,p=[];for(let E=0;E<r.length;++E){const v=r[E],C=d[E],D=rl(C,v,n,t,s,i+1);p.push(D)}const m=n.propsConfig;return m.castProps=p,p}function U0(n,e){const t=n.context,r=t.global;let s=-1;const i=t.providers=t.providers||[],o=i.length-1;for(;s++<o;){const c=i[s];let l=-1;const u=c.children.length-1;for(;l++<u;){const d=c.children[l];if(r===d.context.global){c.children.splice(l,1),c.children.push(e);return}}}}function Wf(n,e){const t=n.context.providers;if(t)for(const r of t)for(let s=r.children.length-1;s>=0;--s)r.children[s].context.global===e&&r.children.splice(s,1);n.context.destroy$.next(),n.context.renderCount=0}function _c(n,e){for(const t of n){const r=t.lastArray;if(r){_c(r,e);continue}const s=t.value;if((s==null?void 0:s.tagJsType)===ue.subscribe){s.destroy(t,e),t.deleted=!0;continue}const i=t.global;if(!i)continue;const o=t.state.newest,c=i.subscriptions;c&&c.forEach(Kf),Js(o.templater)&&Wf(o,i);const l=t.contexts;_c(l,o),i.deleted=!0}}function Jf(n,e=[],t=[]){for(const r of n){const s=r.global;if(!s)continue;const i=r.state.newest;if(i){e.push(i);const c=s.subscriptions;c&&t.push(...c)}const o=r.contexts;o&&Jf(o,e,t)}return{tags:e,subs:t}}function Kf(n){n.unsubscribe()}function Ks(n,e){const t=n.context;e.deleted=!0,t.renderCount=0;const r=[],s=t.contexts;return _c(s,n),n.templater.wrapper&&Wf(n,e),il(t,r),delete t.state,delete t.contexts,delete t.returnValue,delete t.providers,r}function F0(n,e,t,r,s){const i=e==null?void 0:e.arrayValue;let c=n!==(i||s);return c===!1&&i===void 0&&t.tagJsVar.hasValueChanged(e,t,void 0)&&(c=!0),c?(sl(t),r.splice(s,1),2):0}function sl(n){const e=n.global;j0(e,n)}function j0(n,e){var t;if(n&&((t=e.state)!=null&&t.oldest)){const r=e.state.oldest;Ks(r,n);return}e.tagJsVar.destroy(e,{})}function Qf(n){++n.updateCount;const e=n.lastArray;e&&Yf(n,e)}function Yf(n,e){for(let t=0;t<e.length;++t)sl(e[t]);delete n.lastArray}function Ds(n){for(let e=n.length-1;e>=0;--e){const t=n[e];B0(t),n.splice(e,1)}}function B0(n){const e=n.marker;e&&Ns(e,"destroyMarker");const t=n.domElement;Ns(t,"destroyClone")}function il(n,e){n.contexts&&$0(n.contexts,e),n.htmlDomMeta&&Ds(n.htmlDomMeta)}function $0(n,e){var t;for(const r of n){if(r.withinOwnerElement){const l=r.tagJsVar;if(l&&l.tagJsType==="host"){const u=r.supportOwner,d=l.destroy(r,u);nr(d)&&e.push(d)}continue}const s=r.lastArray;if(s){Yf(r,s);continue}const i=r.simpleValueElm;if(i){delete r.simpleValueElm,Ns(i,"smartRemoveByContext");continue}const o=r.global;if(o===void 0)continue;if(o.deleted=!0,(t=r.state)==null?void 0:t.oldest){il(r,e);continue}}}function bc(n){const e=n.context,t=e.global,r=e.contexts;if(r){const{subs:s,tags:i}=Jf(r);for(const c of i){if(c.context.global.deleted===!0)return;Dh(c.context)}t.subscriptions&&s.forEach(Kf)}Dh(e),Gs(e)}function Dh(n){n.global.deleted=!0,il(n,[]),delete n.contexts}function Xf(n,e,t,r){const s=e.original,i=n.tagJsType===ue.stateRender,o=_e.stateConfig;Ao(t);let c;if(i?c=n():(c=s(...r),typeof c===he.function&&c.tagJsType===void 0&&(c=c())),!c)throw new Error(`A tag cannot return a value of type ${c===null?"null":typeof c}`);const l=t.context;return l.returnValue=c,t.returnValue=c,n.tag=c,l.state.newer={...o},Ne(),t}function H0(n,e){const t=n.context;++t.renderCount,q0(n.context),_e.tagClosed$.next(e)}function q0(n){z0(n),G0()}function z0(n){const e=_e.stateConfig,t=n||e.context;t.state=t.state||{},t.state.newer={...e};const r=e.support;t.state.newest=r}function G0(){const n=_e.stateConfig;delete n.prevSupport,delete n.support,delete n.state,delete n.states,Ne()}function Zf(n,e,t,r){let s;const i=n.templater;if(i.tagJsType===ue.stateRender){const o=i;s=Oo(i,t,r,n.appSupport),Xf(i,o,s)}else{const o=i.wrapper;s=o(n,t,e)}return H0(s,r),s.ownerSupport=n.ownerSupport,s}function W0(n){const e=_e.stateConfig;return e.rearray=n,e.state=[],e.states=[],e.statesIndex=0,e.handlers.handler=_0,e.handlers.statesHandler=p0,e}function J0(n,e,t){W0(t);const r=_e.stateConfig;r.prevSupport=e,Ao(n)}function K0(n,e,t,r){const i=t.state.older.state;return J0(n,e,i),Zf(n,e,t,r)}function ep(n,e,t,r){Hf(n.context),Ao(n);const s=Zf(n,e,t,r);return Ne(),s}function Q0(n){var r;const e=n==null?void 0:n.context,t=e==null?void 0:e.state;return(r=t==null?void 0:t.older)==null?void 0:r.state}function ol(n,e){var r;const t=Oh(n,e);return!t&&((r=e.templater.tag)!=null&&r._innerHTML)&&Oh(n.outerHTML,e)?!0:t}function Oh(n,e){const t=n.templater,r=e.templater,s=(t==null?void 0:t.tag)||n,i=r.tag;if((t==null?void 0:t.tagJsType)===ue.stateRender)return t.dom===r.dom;if(!i&&!s.returnValue)return!0;if(!s.returnValue)return!1;throw new Error(`unknown tagJsType of ${s.tagJsType}`)}function Y0(n,e,t){let r;Q0(e)?r=K0(n,e,t):r=ep(n,e,t);const i=!e||ol(e,r);if(i){if(e){const o=e.templater.tag;if(o&&t.renderCount>0){const c=e==null?void 0:e.templater,l=c==null?void 0:c.tag;X0(o,e,l)}}}else{U0(e,r),bc(e);const o=r.context;o.state.oldest=r,o.state.newest=r}return r.ownerSupport=n.ownerSupport,{support:r,wasLikeTags:i}}function X0(n,e,t){if(n.tagJsType===ue.dom){const r=t==null?void 0:t.dom,s=n.dom;r!==s&&bc(e);return}if(t){const r=t.strings;if(r){const s=r==null?void 0:r.length,i=n.strings.length;s!==i&&bc(e)}}}function Z0(n,e,t){const r=Y0(e,n,t);if(r.wasLikeTags){const s=t.state.oldest;return Gf(s,r.support),r.support}}function eb(n){const e=n.context;return Z0(n,n,e)}function ne(n){if(!n)return qe;const e=dt();if(!e)throw new Error("output must be used in render sync with a parent context");const t=Zc(e);if(!t)throw new Error("output must be used in render sync fashion");if(n.wrapped===!0)return n;const r=(...s)=>{const i=t.ownerSupport;return tb(s,n,i.context)};return r.wrapped=!0,r}function tb(n,e,t){ze(t);const r=e(...n);return nb(r,t)}function nb(n,e){Ne();const r=()=>{const s=e.global;if(s===void 0||s.deleted===!0){++me.locks;const o=e;o.tagJsVar.processUpdate(o.value,o,void 0,[]),--me.locks,et();return}++me.locks,eb(void 0),--me.locks,et()};return nr(n)&&n.then(()=>{un.push([r,[]])}),un.push([r,[]]),n}function rb(n,e){++n.updateCount;const t=n.subContext,r=tp(t,e);return delete n.subContext,r}function tp(n,e){n.deleted=!0;const t=n.appendMarker;if(t&&(Ns(t,"deleteSubContext"),delete n.appendMarker),!n.hasEmitted)return;const r=n.contextItem;return r.tagJsVar.destroy(r,e),76}function sb(n,e,t,r){const s=e.tagJsType;if(!e||!s||s!==n)return r.tagJsVar.destroy(r,t),Ys(e,r,t,99),99}function ib(n,e,t){const r=e.subContext,s=sb(ue.subscribe,n,t,e);return s||(!r||!r.hasEmitted||(r.tagJsVar=n,r.valuesHandler(r.lastValues,0)),0)}function ob(n,e,t,r,s){const i=e.context;if(i.locked=3,t.target=t.target||r,ze(t),t.inputsHandler){const o=e.propsConfig;t.inputsHandler(o)}t.tagJsVar.processInit(n,t,e,s,r),Ne(),t.value=n,delete i.locked}function So(n){switch(n){case void 0:case!1:case null:return Ws}return n}function ab(n,e){const t=So(n);if(e.paint){e.paint[1][1]=t;return}const r=e.simpleValueElm;mt.push([s0,[t,r]])}function cb(n,e){e.value=n,e.oldTagJsVar=e.tagJsVar,e.tagJsVar=ip(n);const t=e.placeholder,r=So(n),s=e.paint=[jf,[t,r,function(o){e.simpleValueElm=o,delete e.paint},"processNowRegularValue"]];ht.push(s)}function Po(n,e){if(n.startsWith("class."))return"class";if(n.startsWith("style."))return"style";const t=lb(n);return t!==!1?t:n==="value"&&e==="SELECT"?"value":!1}function lb(n){switch(n){case"autoselect":case"autoSelect":return"autoselect";case"autofocus":case"autoFocus":return"autofocus"}return!1}function ub(n,e,t){typeof n[e]!="object"&&(n[e]={});for(const r in t){const s=t[r];mt.push([pb,[n,e,r,s]])}if(n[e].setProperty)for(const r in t){const s=t[r];mt.push([fb,[n,e,r,s]])}}function hb(n,e,t){n.setAttribute(e,"")}function Mt(n,e,t){if(Ro(t))return ub(n,e,t);np(n,e,t)}function db(n,e,t){t?n[e]=!0:n[e]=!1}function np(n,e,t){if(n[e]=t,t===void 0||t===!1||t===null){n.removeAttribute(e);return}n.setAttribute(e,t)}function fb(n,e,t,r){n[e].setProperty(t,r)}function pb(n,e,t,r){n[e][t]=r}function rp(n,e,t,r){switch(r){case"autofocus":un.push([wb,[t]]);return;case"autoselect":un.push([bb,[t]]);return;case"style":{const s=n.split(".");mt.push([gb,[t,s,e]]);return}case"class":mb(n,e,t);return;case"value":Mt(t,n,e),un.push([s=>{s.value=e},[t]]);return}throw new Error(`Invalid special attribute of ${r}. ${n}`)}function gb(n,e,t){const r=e[1];n.style[r]=t,n.style.setProperty(r,t)}function mb(n,e,t){const r=n.split(".");if(r.shift(),e){for(const s of r)mt.push([yb,[t,s]]);return}for(const s of r)mt.push([_b,[t,s]])}function yb(n,e){n.classList.add(e)}function _b(n,e){n.classList.remove(e)}function bb(n){n.select()}function wb(n){n.focus()}function Tb(n,e,t,r,s){const i=n(),o={component:!1,tagJsType:"dynamic-attr",matchesInjection:u=>{const d=c.tagJsVar;if(d.matchesInjection)return d.matchesInjection(u,c)},hasValueChanged:(u,d,p)=>{const m=n();return c.tagJsVar.hasValueChanged(m,c,p)},processInit:qe,processInitAttribute:qe,destroy:(u,d)=>{c.tagJsVar.destroy(c,d)},processUpdate:(u,d,p,m)=>{++d.updateCount;const E=u();c.tagJsVar.processUpdate(E,c,p,m),c.value=E}},c={description:"sub-context",updateCount:0,isAttr:!0,target:r,parentContext:e,value:i,tagJsVar:In(i),withinOwnerElement:!0,destroy$:new ae,render$:new ae},l={description:"override-context",updateCount:0,isAttr:!0,contexts:[c],target:r,parentContext:e,value:n,tagJsVar:o,withinOwnerElement:!0,destroy$:new ae,render$:new ae};return c.tagJsVar.processInitAttribute(t,i,r,c.tagJsVar,c,{},s),l}function Eb(n,e,t,r,s,i,o){return t.target=r,t.howToSet=s,t.attrName=n,t.isSpecial=o,e!=null&&e.tagJsType?vb(n,e,t,i,r):xo(n,e,r,s,o,t)}function vb(n,e,t,r,s){e.processInitAttribute(n,e,s,e,t,r,Mt),t.tagJsVar=e}function xo(n,e,t,r,s,i){if(typeof e=="function")return Tb(e,i,n,t,r);if(s)return rp(n,e,t,s);r(t,n,e)}function sp(n,e,t,r,s,i){const o=e.tagJsVar,c=n;if(o.hasValueChanged(c,e,t)>0){o.destroy(e,t),r.removeAttribute(s);const u=In(n);u.isAttr=!0,u.processInitAttribute(s,n,r,u,e,t,i),e.tagJsVar=u;return}}function Ib(n,e,t,r,s,i,o){r.destroy=Ab,r.hasValueChanged=kb,r.processUpdate=(l,u,d)=>sp(l,u,d,t,n,o);const c=Po(n,t.tagName);xo(n,e,t,o,c,s),s.tagJsVar=r}function Ab(n){const e=n.target,t=n.attrName;e.removeAttribute(t)}function ip(n){return{component:!1,tagJsType:"simple",value:n,processInitAttribute:Ib,processInit:Rb,destroy:op,hasValueChanged:Sb,processUpdate:Cb}}function Cb(n,e,t){return n===e.value?0:cl(e,n,t)}function Rb(n,e,t,r,s){const i=So(n);r=e.placeholder;const o=e.paint=[jf,[r,i,function(l){e.simpleValueElm=l,delete e.paint},"processSimpleValueInit"]];ht.push(o)}function op(n){const e=n.simpleValueElm;if(!e){if(n.paint){n.paint[0]=qe;return}if(n.value===void 0||n.value===!1||n.value===null)return}delete n.simpleValueElm,Ns(e,"deleteSimpleValue")}function kb(n,e){return n==null||n===e.value?0:6}function Sb(n,e){return n==null||![he.object,he.function].includes(typeof n)?(ab(n,e),0):(op(e),6)}function Pb(n,e){return Ze(n)?0:9}function rr(n,e,t){const r=e.tagJsVar.processUpdate(n,e,t,[]);return e.value=n,r||0}const Lh=Symbol("not-casted"),xb=[];function Xi(n,e,t,r){const s=n.lastArray===void 0;s&&(n.lastArray=[]);const i=n.lastArray;let o=n.placeholder;const c=e.length,l=new Array(c).fill(Lh),u=function(E){const v=l[E];if(v!==Lh)return v;const C=Mb(e[E]);return l[E]=C,C};let d=s?!1:c!==i.length;s||(d=Vb(i,e,n,d,u).batchUpdates);const p=n.lastArray;for(let m=0;m<c;++m)o=Nb(m,p,t,d,u,o,r).placeholder}function Vb(n,e,t,r,s){const i=[];let o=0;const c=e.length-1;for(let l=0;l<n.length;++l){const u=n[l];if(u.locked===1&&(r=!0),u.value===null){i.push(u);continue}const d=Ob(l,n,o,c,s);if(d===0){i.push(u);continue}if(d===2){l=l-1;continue}o=o+d}return t.lastArray=i,{batchUpdates:r}}function Nb(n,e,t,r,s,i,o){const c=s(n),l=e[n];if(l)return Db(c,l,t,r);const u=cp(c,t,e,i,o);return e.push(u),c&&(u.arrayValue=c.arrayValue||u.arrayValue),u}function Db(n,e,t,r,s,i){return r?(r0(e,[Lb,[n,e,t]]),e.value=n,e):Array.isArray(n)?(e.tagJsVar.processUpdate(n,e,t,xb),e.value=n,e):(rr(n,e,t),e)}function Ob(n,e,t,r,s){const i=n-t,o=i<0||r<i,c=e[n];if(o)return sl(c),1;c.arrayValue===void 0&&(c.arrayValue=n);const l=c.arrayValue,u=s(n);return F0(l,u,c,e,n)}function Lb(n,e,t){rr(n,e,t)}function Mb(n){if(typeof n!="function")return n;const e=n;return e.tagJsType!==void 0?n:e()}function ap(n){return{component:!1,tagJsType:"array",value:n,processInitAttribute:qe,processInit:Fb,processUpdate:Ub,hasValueChanged:Pb,destroy:Qf}}function Ub(n,e,t){++e.updateCount;const s=e.tagJsVar.hasValueChanged(n,e,t);return s?(Qf(e),Ys(n,e,t,s),s):Array.isArray(n)||rr(n,e,t)===0?(Xi(e,n,t),0):1}function Fb(n,e,t,r,s){Xi(e,n,t,s)}function In(n){return(n==null?void 0:n.tagJsType)?n:jb(n)}function jb(n){return Ze(n)?ap(n):ip(n)}function Vo(n,e,t,r,s){return{description:"getNewContext",updateCount:0,value:n,destroy$:new ae,render$:new ae,tagJsVar:s||In(n),withinOwnerElement:t,parentContext:r}}function cp(n,e,t,r,s){const i=document.createTextNode(Ws),o=Vo(n,t,!0,e.context);return o.withinOwnerElement=!1,o.placeholder=i,s||(o.placeholder=r),ob(n,e,o,s,r),s&&Co.push([Xc,[s,i]]),o}function lp(n,e,t,r){return e.hasEmitted=!0,e.contextItem=cp(n,t,[],r)}function up(n,e,t){var o;++e.updateCount;const s=n.owner._innerHTML;s.processInit=s.oldProcessInit;const i=(o=e.subContext)==null?void 0:o.contextItem;cl(i,s,t)}function Bb(n,e,t,r,s){e.subContext={},n.processUpdate=up,$b(n,t,e,r,s)}function $b(n,e,t,r,s){const{appendMarker:i,insertBefore:o}=Cp(s,r),c=t.subContext;c.appendMarker=i;const u=n.owner._innerHTML;u.processInit=u.oldProcessInit,lp(u,c,e,o)}function hp(){return{component:!1,tagJsType:"innerHTML",hasValueChanged:()=>0,processInitAttribute:qe,processInit:Bb,processUpdate:up,destroy:rb}}function No(n){++n.updateCount;const e=n.global,r=n.state.newest;delete n.inputsHandler,delete n.updatesHandler,Ks(r,e),Hb(n)}function Hb(n){n.htmlDomMeta=[],delete n.contexts,delete n.state,delete n.global,n.renderCount=0}function qb(n,e){var o;const t=(o=e.state)==null?void 0:o.newest,r=Bf(n),s=n;if(r)return ol(s,t)?0:7;if(n==null?void 0:n.tagJsType){const c=e.value;if(!c&&n)return 88;const l=c.wrapper,u=n.wrapper;return(u==null?void 0:u.original)===(l==null?void 0:l.original)?0:88}return 8}function Do(n,e){var c;const t=e.global,r=(c=e.state)==null?void 0:c.newest,s=Bf(n),i=n;if(s)return ol(i,r)?(wc(e,n,r),0):(Ks(r,t),Gs(e),7);if(n==null?void 0:n.tagJsType){const d=e.state.newest.ownerSupport;return wc(e,n,d)===!0?0:88}return No(e),8}function zb(n,e){const t={component:!1,tagJsType:ue.templater,processInit:"",processInitAttribute:qe,processUpdate:rr,hasValueChanged:Do,destroy:No,propWatch:n,props:e,key:function(s){return t.arrayValue=s,t},matchesInjection(r,s){var i;if(t.wrapper===r||((i=t.wrapper)==null?void 0:i.original)===(r==null?void 0:r.original))return s}};return t}const Os=[];function Gb(n,e){return function(s,i,o){const c=dp(n,s,o),l=s.ownerSupport,u=Oo(n,i,l,s.appSupport,c);return Xf(n,e,u,c)}}function dp(n,e,t){const r=n.propWatch===yt.DEEP?al:vp,s=n.props,i=e.propsConfig;let o=i.castProps;const c=t==null?void 0:t.propsConfig,l=c==null?void 0:c.castProps;return l&&(i.castProps=l,o=M0(e,t,t.ownerSupport,s,r)),o||nl(s)}function Wb(n,e,t,r,s){const i=Pw(n,e,t,r,s);return i.hasEmitted||fp(n,i),i}function fp(n,e){const r=n.Observables[0];if(!e.hasEmitted){if("withDefault"in n){e.subValueHandler(n.withDefault,0);return}if("value"in r){e.subValueHandler(r.value,0);return}return}const s=e.lastValues[0].value;e.subValueHandler(s,0)}function Jb(n,e,t,r,s,i){e.destroy=kp;const o=Po(n,t.tagName),c=function(d,p){xo(n,d,t,Mt,o,s),Tc(p)},l=Rp(e.Observables,i,c,e,s);return s.subContext=l,s.value=e,s.tagJsVar=e,e.processUpdate=function(d,p,m){return sp(d,s,m,t,n,Mt)},{subContext:l,onOutput:c}}function Kb(n,e,t,r,s,i){const{subContext:o}=Jb(n,e,t,e,s,i);o.hasEmitted||Qb(e,o)}function Qb(n,e){var o;const r=e.tagJsVar.onOutput;let i=((o=n.Observables[0])==null?void 0:o.value)||n.withDefault;n.callback&&(i=n.callback(i)),r(i,!0,e)}function Yb(n,e,t){return{component:!1,onOutput:qe,tagJsType:ue.subscribe,processInitAttribute:Kb,processInit:Wb,hasValueChanged:Xb,processUpdate:qe,destroy:xw,callback:t,withDefault:e,Observables:[n]}}function Xb(n,e){if(!(n!=null&&n.tagJsType))return 1;const t=n.Observables;if(!t)return 2;const s=e.value.Observables;return!s||s.length!==t.length?3:t.every((o,c)=>o===s[c])?0:4}function Zb(n,e,t,r){const s={component:!1,tagJsType:"tag-conversion",processInitAttribute:qe,processInit:(i,o,c)=>{const l=n.returnValue;return e.tagJsVar.processInit(l,e,t,r.placeholder)},processUpdate:(i,o,c)=>{if(o.locked||o.deleted)return;++o.updateCount;const l=o.value,u=l==null?void 0:l.tagJsType,p=(i==null?void 0:i.tagJsType)!==u;if(qb(i,o)||p||s.hasValueChanged(i,o,t)){s.destroy(o,t),Ys(i,o,c,789);return}o.locked=467,o.render$.next();const v=o.returnValue;ew(e,i,o,v,t),delete o.locked},hasValueChanged:(i,o,c)=>{const l=n.returnValue;return e.tagJsVar.hasValueChanged(l,e,c)},destroy:(i,o)=>{++n.updateCount,n.deleted=!0,delete n.returnValue;const c=e.tagJsVar.destroy(e,t);return nr(c)?c.then(()=>{const l=Mh(n);return et(),l}):(n.destroy$.next(),Mh(n))}};return s}function pp(n,e,t){const r=n.context,s=n.returnValue,i=In(s);delete r.global,r.contexts=[];const o={updateCount:0,value:s,tagJsVar:i,destroy$:new ae,render$:new ae,placeholder:r.placeholder,withinOwnerElement:!0,parentContext:r,contexts:r.contexts},c=Zb(r,o,n,t);return r.subContext=o,r.tagJsVar=c,i.processInit(s,o,n,t.placeholder),n}function gp(n,e,t){const r=Oo(n,e,t,t==null?void 0:t.appSupport),s=r.propsConfig;if(s){const o=n.tagJsType!==ue.tagComponent?[]:dp(n,r);s.castProps=o}return ep(r,e.state.newest,e)}function mp(n,e,t){const r=gp(n,e,t);return r.templater.tag?pp(r,r.ownerSupport,e):r}function ew(n,e,t,r,s){const i=nl(e.props),o=n.value;o.props=i;const c=s.propsConfig;if(c&&(c.castProps=i),(e==null?void 0:e.tagJsType)==="tagComponent"){if(n.inputsHandler=t.inputsHandler,n.updatesHandler=t.updatesHandler,t.value=e,t.inputsHandler){ze(t);const l=t.inputsHandler;l(i),Ne()}if(t.updatesHandler){ze(t);const l=t.updatesHandler;l(i),Ne()}}n.tagJsVar.processUpdate(r,n,s,[]),n.value=r}function Mh(n,e){delete n.returnValue,delete n.global,n.contexts=[],n.htmlDomMeta=[],delete n.inputsHandler,delete n.updatesHandler}function tw(n,e,t,r){const s=gp(n,e,t);return pp(s,t,e)}function yp(n,e,t,r,s){return Gs(e),s?tw(n,e,t):mp(n,e,t)}function nw(n){var s,i;const e=dt();if(!e)throw new Error("tag.inject can only be called within a tag or host context");let t=e.parentContext;for(;t;){const o=t.contexts;if(o){for(const c of o)if(c.isAttr&&((s=c.tagJsVar)!=null&&s.matchesInjection)){const l=c.tagJsVar.matchesInjection(n,c);if(l!==void 0)return l.returnValue}}if((i=t.tagJsVar)!=null&&i.matchesInjection&&t.tagJsVar.matchesInjection(n,t))return t.returnValue;t=t.parentContext}const r=`Could not find parent context for tag.inject ${n}`;throw console.error(r,{targetItem:n,context:e}),new Error(r)}function rw(n,e){return sw(n,e)}function sw(n,e,t=[]){const r=n.context;t.push({support:n,renderCount:r.renderCount,provider:e});const s=e.children;for(let i=s.length-1;i>=0;--i){const o=s[i],c=o.context;t.push({support:o,renderCount:c.renderCount,provider:e})}return t}function iw(n){const t=n.context.providers;if(!t)return[];const r=[];for(const s of t){const i=s.owner,o=rw(i,s);r.push(...o.map(ow))}return r}function ow(n){return n.support}function aw(n){return ue.templater===n.tagJsType}function cw(n,e){const t=e.context.global;return t&&t.deleted?!1:!!lw(n,e)}function lw(n,e){const t=n.props,s=e.propsConfig.latest;if(uw(t,s))return!0;switch(n.propWatch){case yt.IMMUTABLE:return vw(t,s);case yt.SHALLOW:return V0(t,s)}return!k0(t,s,al)}function uw(n,e){const t=n.length,r=e.length;return t!==r}function Zi(n,e=[]){const t=n.context,r=n.templater,s=aw(r),i=n.ownerSupport;if(t.locked)return e.push(n),e;if(s)return Zi(i,e);const o=n.context.global;if(o&&o.deleted===!0)return e;const c=n,l=Js(c.templater),u=n.templater.tagJsType,p=i&&u!==ue.stateRender&&(!l||cw(c.templater,c));if(c.context.providers){const E=iw(c);e.push(...E)}return p?(Zi(i,e),l&&e.push(c),e):(e.push(c),e)}const hw=[];function _p(n){++me.locks;for(let e=0;e<n.length;++e)bp(n[e]);--me.locks,et()}function dw(n){++me.locks,bp(n),--me.locks,et()}function bp(n){const e=n.context;e.tagJsVar.processUpdate(e.value,e,n.ownerSupport,hw)}function wp(n,e,{resolvePromise:t,resolveValue:r}){return nr(n)?n.then(fw(e,t)):r(n)}function fw(n,e){return t=>{const r=n.context,s=r.global;if(r.deleted===!0||(s==null?void 0:s.deleted)===!0)return e(t);const i=Zi(n);return _p(i),e(t)}}function it(n){return _e.stateConfig.handlers.handler(n)}function pw(n){return it(()=>{var r;const e=n(),t=Yi();return(r=t==null?void 0:t.context)!=null&&r.global?wp(e,t,{resolvePromise:gw,resolveValue:mw}):e}),L}function gw(n){return n}function mw(n){return n}function An(n){return it(function(){dt().destroy$.toCallback(n)}),L}function yw(n,e,t,...r){const s=t(...r),i=Zc(n);if(!i)return s;if(!i.context.global){const o=i.context;o.tagJsVar.processUpdate(o.value,o,i.ownerSupport,[])}return nr(s)&&s.finally(()=>{if(!n.global){const o=i.context;o.tagJsVar.processUpdate(o.value,o,i.ownerSupport,[])}}),s}function we(n){const e=dt(),t=it({callback:n}),r=it(()=>Tp(e,_e.stateConfig,t));return t.callback=n,r}function Tp(n,e,t){const r=e.states;return function(...i){const o=yw(n,r,t.callback,...i);return et(),o}}function _w(n){const e=dt(),t=i=>{ze(e);const o=n();return Ne(),o},r=e.render$.subscribe(()=>{t()}),s=t();return L.onDestroy(()=>r.unsubscribe()),s}let bw=0;const Cs=Ep("click"),Sr=Ep("mousedown");function Ep(n){return function(t){const r=we(t);return it(()=>{Pp().addEventListener(n,r)}),r}}const ww={get:Pp,onclick:Cs,click:Cs,onClick:Cs,mousedown:Sr,onmousedown:Sr,onMouseDown:Sr};Qs("onclick",Cs);Qs("click",Cs);Qs("onMouseDown",Sr);Qs("onmousedown",Sr);Qs("mousedown",Sr);function Qs(n,e){Object.defineProperty(L,n,{get(){return e},set(t){return e(t)}})}var yt;(function(n){n.DEEP="deep",n.SHALLOW="shallow",n.NONE="none",n.IMMUTABLE="immutable"})(yt||(yt={}));function L(n,e=yt.SHALLOW){if(dt())throw new Error("A TaggedJs tag was created within a running tag. All component tags must be created outside of anyother tag");const r=function(...c){const l=zb(e,c);l.tagJsType=ue.tagComponent,l.processInit=yp,l.hasValueChanged=Do;const u=Gb(l,r);return u.original=n,l.wrapper=u,l},s=n;r.original=n,s.tags=Os,s.setUse=_e,s.ValueTypes=ue,s.tagIndex=bw++,Os.push(r);const i=r;return i.inputs=o=>{const c=dt();c.inputsHandler=o;const l=c.tagJsVar;return o(l.props),!0},i.updates=o=>{const c=dt();return c.updatesHandler=o,!0},i.getInnerHTML=hp,i}function Tw(n){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")}function Ew(){throw new Error("Do not call tag.use as a function but instead set it as: `(props) => tag.use = (use) => html`` `")}L.element=ww;L.use=Ew;L.deepPropWatch=L;L.route=Tw;L.inject=nw;L.output=ne;L.onInit=pw;L.onDestroy=An;L.callback=we;L.onRender=_w;L.getInnerHTML=hp;L.app=function(n){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")};L.immutableProps=function(e){return L(e,yt.IMMUTABLE)};L.watchProps=function(e){return L(e,yt.SHALLOW)};Object.defineProperty(L,"use",{set(n){n.original={setUse:_e,tags:Os},n.tagJsType=ue.stateRender,n.processInit=yp,n.processUpdate=rr,n.hasValueChanged=Do,n.destroy=No}});Object.defineProperty(L,"promise",{set(n){Ow(n)}});function vw(n,e){const t=n.length;for(let r=0;r<t;++r){const s=n[r],i=e[r];if(s!==i)return 2}return!1}const vp=3,al=10;function Iw(n,e,t){const r=n.templater;if(r.tagJsType!==ue.stateRender){switch(r.propWatch){case yt.IMMUTABLE:return n.propsConfig={latest:e,castProps:t};case yt.SHALLOW:return n.propsConfig={latest:e.map(Aw),castProps:t}}return n.propsConfig={latest:e.map(Cw),castProps:t}}}function Aw(n){return tl(n,vp)}function Cw(n){return tl(n,al)}function Ip(n,e,t){const r={templater:n,context:e,castedProps:t,appSupport:void 0},s=e.global;return s.blocked=[],e.state||(e.state={newer:{state:[],states:[]}}),r}function Ap(n,e,t,r){e.appSupport=t||e;const s=n.props;return s&&(e.propsConfig=Iw(e,s,r)),e}function Oo(n,e,t,r,s){const i=Ip(n,e,s);return i.ownerSupport=t||i,i.ownerSupport.appSupport=r||i.ownerSupport,Ap(n,i,r,s)}function Rw(n,e,t,r){let s=t.templater||t;const i=n.templater.tag;i&&i._innerHTML&&(s=t._innerHTML);const o=Oo(s,e,r,r.appSupport),l=n.context.state.oldest;Gf(l,o)}function wc(n,e,t){if(Js(e))return n.global===void 0&&Gs(n),n.oldTagJsVar=n.tagJsVar,n.tagJsVar=e,kw(e,n,t),!0;if(n.global){n.oldTagJsVar=n.tagJsVar,n.tagJsVar=e;const i=n.state.newest;if(i)return typeof e===he.function||Rw(i,n,e,t),!0}if(n.inputsHandler){const i=t.propsConfig;n.inputsHandler(i)}return e.processInit(e,n,t,n.placeholder),n.oldTagJsVar=n.tagJsVar,n.tagJsVar=e,!0}function kw(n,e,t){if(!e.state.newest){if(e.inputsHandler){const r=t.propsConfig;e.inputsHandler(r)}n.processInit(n,e,t,e.placeholder);return}}function Ys(n,e,t,r){const s=n&&n.tagJsType;if(delete e.deleted,s){wc(e,n,t);return}if(Ze(n)){Xi(e,n,t),e.oldTagJsVar=e.tagJsVar,e.tagJsVar=ap(n);return}if(typeof n===he.function){e.value=n;return}r&&cb(n,e)}function cl(n,e,t){const s=n.tagJsVar.hasValueChanged(e,n,t);return s===0||Ys(e,n,t,s),s}function Cp(n,e){let t;return n&&(t=e=document.createTextNode(Ws),Co.push([Xc,[n,e]])),{appendMarker:t,insertBefore:e}}function Sw(n,e,t){const r=ib(n,e,t);if(e.hasEmitted!==!0){const s=e.value.Observables;if(!s||!("value"in s[0]))return}if(r===0&&n.callback){const s=e.subContext;fp(n,s)}}function Pw(n,e,t,r,s){const i=n.Observables,{appendMarker:o,insertBefore:c}=Cp(s,r);let l=function(p,m,E){lp(p,E,t,c),Tc(m),l=E.tagJsVar.onOutput=function(C,D,O){const x=O.contextItem;cl(x,C,t),x.tagJsVar.processUpdate(C,x,t,[C]),x.value=C,Tc(D)}};const u=Rp(i,t,(d,p,m)=>l(d,p,m),n,e);return u.appendMarker=o,e.subContext=u,n.processUpdate=Sw,n.onOutput=l,u}function Rp(n,e,t,r,s){function i(u,d){var p;l.lastValues[d]={value:u,tagJsVar:In(u),oldTagJsVar:(p=l.lastValues[d])==null?void 0:p.tagJsVar},o(l.lastValues,d)}function o(u,d){const p=l.tagJsVar;if(p==null?void 0:p.callback){ze(s);const v=p.callback(...u.map(C=>C.value));t(v,c,l),Ne();return}const E=u[d].value;t(E,c,l)}let c=!0;const l={lastValues:[],subValueHandler:i,valuesHandler:o,tagJsVar:r,subscriptions:[]};return n.forEach((u,d)=>{c=!0,l.subscriptions.push(u.subscribe(p=>i(p,d))),c=!1}),r.onOutput=t,l}function kp(n){const e=n.subContext;if(!e)return;e.subscriptions.forEach(r=>r.unsubscribe()),delete n.subContext}function xw(n,e){++n.updateCount;const t=n.subContext;return kp(n),tp(t,e)}function Tc(n){n||_e.stateConfig.support||et()}class zt extends ae{constructor(t){super(t);ct(this,"value");this.value=t}subscribe(t){const r=super.subscribe(t);return t(this.value,r),r}}const Sp=((n,e)=>ll(n,e).pastResult),Vw=n=>n;function Nw(n){const e=(t,r)=>ll(t,r,n).pastResult;return e.setup=n,ul(()=>e,e),e}const ll=(n,e,{init:t,before:r,final:s=Vw}={})=>{const i=it({pastResult:void 0,values:void 0}),c=typeof n=="function"?n():n,l=i.values===void 0;let u=0;l&&typeof n=="function"&&L.onRender(()=>{if(++u,u===1)return;const p=n();d(p)});function d(p){if(i.values===void 0){if(r&&!r(p))return i.values=p,i;const C=(t||e)(p,i.values);return i.pastResult=s(C),i.values=p,i}if(p.every((v,C)=>v===i.values[C]))return i;if(r&&!r(p))return i.values=p,i;const E=e(p,i.values);return i.pastResult=s(E),i.values.length=0,i.values.push(...p),i}return d(c)};function ul(n,e){return Object.defineProperty(e,"noInit",{get(){const t=n();return t.setup.init=()=>{},t}}),Object.defineProperty(e,"asSubject",{get(){const t=n(),r=it(()=>Yi()),s=it(()=>new zt(void 0));it(()=>({state:_e.stateConfig.state,states:_e.stateConfig.states}));const i=(o,c)=>(ll(o,(u,d)=>{const p=Yi(),m=c(u,d);p!==r&&r.context.state.older,s.next(m)},t.setup),s);return i.setup=t.setup,ul(()=>i,i),i}}),Object.defineProperty(e,"truthy",{get(){const t=n();return t.setup.before=r=>r.every(s=>s),t}}),e}ul(()=>Nw({}),Sp);class hl extends Error{constructor(t,r,s={}){super(t);ct(this,"details");this.name=hl.name,this.details={...s,errorCode:r}}}class dl extends hl{constructor(e,t){super(e,"sync-callback-error",t),this.name=dl.name}}new dl("callback() was called outside of synchronous rendering. Use `callback = callbackMaker()` to create a callback that could be called out of sync with rendering");const Dw=()=>{};function Ow(n){const e=dt(),t=it({callback:Dw}),r=it({current:void 0}),s=it(()=>Tp(e,_e.stateConfig,t));if(r.current!==n){r.current=n;const i=n;n.then(()=>{r.current===i&&s()})}}function dt(){return _e.stateConfig.context}function Pp(){return dt().target}const Fi=[];function ze(n){return Fi.push(n),_e.stateConfig.context=n}function Ne(){Fi.pop(),_e.stateConfig.context=Fi[Fi.length-1]}function Lw(n,e,t,r,s,i,o){const c=document.createTextNode(Ws);if(Os.push(t.wrapper||{original:t}),i.placeholder=c,e.isApp=!0,!s)throw new Error(`Cannot tagElement, element received is type ${typeof s} and not type Element`);s.destroy=function(){const p=i.events;for(const E in p){const v=p[E];s.removeEventListener(E,v)}i.events={},++me.locks;const m=Ks(d,e);return--me.locks,et(),m},++me.locks;const l=document.createDocumentFragment();l.appendChild(c);const d=mp(t,i,{appSupport:{appElement:s,context:i},appElement:s,context:i,isRoot:!0});return d.appElement=s,o&&(r.tag=d.templater.tag),--me.locks,et(),s.appendChild(l),{support:d,tags:Os,ValueTypes:ue}}function Mw(n,e,t){const r=Ip(n,e);return Ap(n,r,r),r.appElement=t,r.context=e,e.state.oldest||(e.state.oldest=r,e.state.older=e.state.newer),e.state.newest=r,r}typeof document=="object"&&(document.taggedJs&&console.warn("🏷️🏷️ Multiple versions of taggedjs are loaded. May cause issues."),document.taggedJs=!0);const Da=[],Uh="__taggedjs_tag_element__";function Uw(n,e,t){const r=e[Uh],s=Da.findIndex(m=>m.element===e);if((r||s>=0)&&console.warn("tagElement called multiple times for the same element",{element:e}),s>=0){const m=Da[s].support;Ks(m,m.context.global),Da.splice(s,1)}e[Uh]=!0,e.innerHTML="";let i=(()=>u(t));i.propWatch=yt.NONE,i.tagJsType=ue.stateRender,i.processUpdate=rr,i.props=[t],i.isApp=!0;const o=Fw(i,e),c=o.global,l=o.state.newest;Hf(l.context),Ao(l);let u=n(t);const d=typeof u==he.function;d||(Js(u)?(o.state.newest.propsConfig={latest:[t],castProps:[t]},i.propWatch=u.propWatch,i.tagJsType=u.tagJsType,i.wrapper=u.wrapper,i=u):(i.tag=u,u=n));const p=Lw(n,c,i,u,e,o,d);return Ne(),p}function Fw(n,e){const t={component:!1,tagJsType:"templater",hasValueChanged:Do,destroy:No,processInitAttribute:qe,processInit:function(){console.debug("do nothing app function")},processUpdate:rr},r={updateCount:0,value:n,varCounter:0,destroy$:new ae,render$:new ae,withinOwnerElement:!1,renderCount:0,global:void 0,state:{},tagJsVar:t};return Gs(r),r.events={},Mw(n,r,e),r}const xp=":tagvar",jw=":";function Bw(n){return Array.isArray(n)&&Object.prototype.hasOwnProperty.call(n,"raw")}function $w(n,e){return function(r,s,i){if(Bw(s)){const o=[];for(let l=0;l<s.length;++l)o.push(s[l]),l<i.length&&o.push(String(i[l]??""));const c=o.join("");return e(r,[n,c])}return e(r,[n,s])}}const Hw=[["alt","alt"],["ariaLabel","aria-label"],["referrerPolicy","referrerpolicy"],["autoFocus","autoFocus"],["border","border"],["id","id"],["for","for"],["fill","fill"],["content","content"],["charset","charset"],["cellPadding","cellpadding"],["cellSpacing","cellspacing"],["class","class"],["href","href"],["lang","lang"],["label","label"],["loading","loading"],["value","value"],["placeholder","placeholder"],["src","src"],["title","title"],["width","width"],["height","height"],["type","type"],["min","min"],["max","max"],["step","step"],["name","name"],["wrap","wrap"],["checked","checked"],["disabled","disabled"],["selected","selected"],["minLength","minLength"],["maxLength","maxLength"],["inputMode","inputMode"],["open","open"],["rel","rel"],["required","required"],["readonly","readonly"],["readOnly","readonly"],["rows","rows"],["style","style"],["target","target"],["viewBox","viewBox"],["valign","valign"]];function qw(n,e,t){const r=Xs(n,n.elementFunctions);return Vp(r,e,t)}function Vp(n,e,t){function r(s){return r.toCallback(s)}return r.toCallback=t,n.listeners.push([e,r]),n.allListeners.push([e,r]),n}function Np(n,e){const t=Xs(n,n.elementFunctions);return Xw(e[0],e[1],t),t}function zw(n,e){const t=Xs(n,n.elementFunctions);for(const r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;const s=e[r];t.attributes.push([r,s]),Op(t,s),Ls(r)?to(r,t):Ls(s)&&to(s,t)}return t}const Gw=Object.fromEntries(Hw.map(([n,e])=>[n,$w(e,Np)])),Ww=[["onClose","onclose"],["onCancel","oncancel"],["onDoubleClick","ondblclick"],["onClick","click"],["onBlur","onblur"],["onChange","onchange"],["onInput","oninput"],["contextMenu","contextmenu"],["onMouseDown","onmousedown"],["onMouseUp","onmouseup"],["onMouseOver","onmouseover"],["onMouseOut","onmouseout"],["onKeyDown","onkeydown"],["onKeyUp","onkeyup"]];function Dp(n,e){return n.attributes.push(e),Op(n,e[1]),Ls(e[0])?to(e[0],n):Ls(e[1])&&to(e[1],n),n}const Jw=(()=>{const n=Object.fromEntries(Ww.map(([r,s])=>[r,function(o){return qw(this,s,o)}])),e=Object.fromEntries(Object.entries(Gw).map(([r,s])=>[r,Kw(s)])),t=e.id;return e.id=function(...s){const i=s[0];return this.arrayValue=typeof i=="function"?i():i,t.apply(this,s)},{...n,attr:function(...s){return Np(this,s)},attrs:function(s){return zw(this,s)},key:function(r){return this.arrayValue=r,this},...e}})();function eo(n){return Jw}function Op(n,e){let t=1;e!=null&&typeof e!="function"&&typeof e.length=="number"&&(t+=e.length),n.contentId+=t}function Kw(n){return(function(t,...r){return n(this,t,r)})}function Qw(n,e,t){if(Ro(t)){for(const r in t){if(!Object.prototype.hasOwnProperty.call(t,r))continue;t[r]?n.classList.add(r):n.classList.remove(r)}return}np(n,e,t)}function to(n,e){e.contexts||(e.contexts=[]),e.contexts.push(n),++e.contentId}function Ls(n){return Array.isArray(n)||Qn(n)||(n==null?void 0:n.tagJsType)}function Fh(n,e){return(t,r)=>Dp(t,[n,r,!1,e])}function ve(n){return(e,t)=>Vp(e,n,t)}const Yw=Object.fromEntries([["onClick",ve("click")],["onDoubleClick",ve("ondblclick")],["onDblClick",ve("ondblclick")],["onDblClick",ve("ondblclick")],["onBlur",ve("onblur")],["onChange",ve("onchange")],["onCancel",ve("oncancel")],["onClose",ve("onclose")],["onInput",ve("oninput")],["onMousedown",ve("onmousedown")],["onMouseDown",ve("onmousedown")],["onMouseup",ve("onmouseup")],["onMouseUp",ve("onmouseup")],["onMouseover",ve("onmouseover")],["onMouseOver",ve("onmouseup")],["onMouseout",ve("onmouseout")],["onMouseOut",ve("onmouseout")],["onKeyup",ve("onkeyup")],["onKeyUp",ve("onkeyup")],["onKeydown",ve("onkeydown")],["onKeyDown",ve("onkeydown")]]),jh=Object.assign(Object.fromEntries(["checked","disabled","selected"].map(n=>[n,Fh(n,db)])),{class:Fh("class",Qw)},Yw);function Xw(n,e,t){return n in jh?jh[n](t,e):Dp(t,[n,e,!1,Mt])}function Zw(n){return Lp(n)}function Lp(n){const e=eT(n.attributes),t=Mp(n.innerHTML);return`<${n.tagName}${e}>${t}</${n.tagName}>`}function eT(n){if(!n||n.length===0)return"";const e=[];return n.forEach(t=>{const r=t[0];if(typeof r!="string"||r.length===0)return;const s=Fp(t[1]);if(s===!0){e.push(r);return}s===!1||s===void 0||s===null||e.push(`${r}="${Up(String(s))}"`)}),e.length>0?` ${e.join(" ")}`:""}function Mp(n){return!n||n.length===0?"":n.map(e=>{const t=Fp(e);return tT(t)?Lp(t):Array.isArray(t)?Mp(t):t==null||t===!1?"":Up(String(t))}).join("")}function tT(n){return!!n&&typeof n=="object"&&typeof n.tagName=="string"}function Up(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Fp(n){return typeof n=="function"?n():n}function jp(n,e){++n.updateCount;const t=n.contexts,r=[];if(n.paintCommands){for(let s=ht.length-1;s>=0;--s){const i=ht[s],o=n.paintCommands.indexOf(i);if(o>=0&&(ht.splice(s,1),n.paintCommands.splice(o,1),n.paintCommands.length===0))break}delete n.paintCommands,Oa(n);return}if(t.length&&(no(t,e,r),t.length=0,r.length)){const s=n.htmlDomMeta;return n.deleted=!0,Promise.all(r).then(()=>{++me.locks,Ds(s),Oa(n),--me.locks,et()})}Ds(n.htmlDomMeta),Oa(n)}function Oa(n){n.htmlDomMeta=[],delete n.contexts,n.deleted=!0}function no(n,e,t){const r=n[0],s=r.tagJsVar.destroy(r,e);if(r.deleted=!0,nr(s))return t.push(s.then(()=>{if(n.length>1)return no(n.slice(1,n.length),e,t)}));if(r.htmlDomMeta&&(Ds(r.htmlDomMeta),delete r.htmlDomMeta),n.length>1)return no(n.slice(1,n.length),e,t)}function Bp(n,e,t){if(e.deleted===!0)return;if(++e.updateCount,fl(n,e)){jp(e,t),e.htmlDomMeta=[],delete e.deleted,Ys(n,e,t,789);return}const i=e.contexts,o=n.contexts||[],c=e.tagJsVar,l=n,u=c.allListeners,d=l.allListeners;for(let p=0;p<d.length;++p){const m=d[p],E=u[p][1];E.toCallback=m[1].toCallback}if(i.length!==o.length){const p=new Array(i.length);for(let m=0;m<i.length;++m)p[m]=i[m].value;throw console.info("context mismatch",{value:n,context:e,conValues:p,vContexts:o,deleted:e.deleted,contexts:i}),new Error(`Expected ${i.length} contexts but got ${o.length}`)}e.locked=79;for(let p=0;p<i.length;++p){const m=i[p];m.tagJsVar.processUpdate(o[p],m,t)}delete e.locked}function fl(n,e){if(!n)return 1;const t=e.value;if(t===n)return 0;if(n.tagJsType!=="element"||t===null)return 1;const r=n,s=t,i=r.contentId,o=s.contentId;if(i!==o)return 1;const c=r.innerHTML.length,l=s.innerHTML.length;return c!==l?1:0}function $p(n,e,t){const r=t[e];if(r){let i=!1;if(n.originalStopPropagation=n.stopPropagation,n.stopPropagation=function(){i=!0,n.originalStopPropagation.call(n),n.stopPropagation=n.originalStopPropagation,delete n.originalStopPropagation},r(n),n.defaultPrevented||i)return}const s=t.parentNode;s&&$p(n,e,s)}function Hp(n,e,t,r){const s=n.appElement,i=nT(e);e==="blur"&&(e="focusout");const c=n.context.events;if(!c[e]){const l=function(d){$p(d,i,d.target)};c[e]=l,s.addEventListener(e,l)}t[i]=r,t[e]=r}function nT(n){return n==="blur"&&(n="focusout"),"_"+n}function rT(n,e){const t=e.context.global,r=function(i,o){if(t.deleted!==!0)return sT(r.tagFunction,r.support,i,o)};return r.tagFunction=n,r.support=e,r}function sT(n,e,t,r){const s=ko(e),i=s.context;i.locked=1;const o=n.apply(t,r);return delete i.locked,qp(o,s)}function qp(n,e){const t=e.context.global;if(t!=null&&t.deleted)return;const r=Zi(e);return _p(r),wp(n,e,{resolvePromise:aT,resolveValue:cT})}const iT="no-data-ever",oT="promise-no-data-ever";function aT(){return oT}function cT(){return iT}function zp(n,e,t,r){const s=function(...i){return s.tagFunction(n,i)};s.tagFunction=e,s.support=t,Hp(t.appSupport,r,n,s)}function Gp(n){return n==null||n===!1}function Wp(n,e,t,r,s,i,o,c,l){const u=Vo(n,[],!0,t);return u.description="tagJsVar-attr",u.target=c,u.isAttr=!0,u.isNameOnly=l,u.stateOwner=ko(i),u.supportOwner=i,ze(u),r.processInitAttribute(o,n,c,r,u,i,Mt),Ne(),u.oldTagJsVar=u.tagJsVar,u.tagJsVar=r,u}function Jp(n,e,t,r,s,i,o,c){if(Gp(e))return;const l=typeof e;if(l===he.object){for(const u in e)Bh(u,t,e,n,r,i,o,i);return i}if(l==="function"){const u=lT(c);c.tagJsVar=u,ze(c);const d=e(c),p=In(d);if(Ne(),p!=null&&p.tagJsType){c.state={newer:{state:[],states:[]}};const m=Wp(p,i,o,p,-1,r,"attr",t,!0);return m.tagJsVar=p,c.subContext=m,i}return Bh("attr",t,e,n||[],r,i,o,i),i}e.length!==0&&s(t,e,Ws)}function Bh(n,e,t,r,s,i,o,c){const l=Po(n,e.tagName),u=t[n],p=Qp(n,u,r,e,s,Mt,i,o,l);p!==void 0&&(Array.isArray(p)?c.push(...p):c.push(p))}function lT(n){return{tagJsType:"relay",component:!1,hasValueChanged:(t,r,s)=>r.subContext.tagJsVar.hasValueChanged(t,r.subContext,s),processInitAttribute:(t,r,s,i,o,c,l)=>o.subContext.tagJsVar.processInitAttribute(t,r,s,i,o.subContext,c,l),destroy:(t,r)=>t.subContext.tagJsVar.destroy(t.subContext,r),processUpdate:(t,r,s,i)=>{const o=t(r.subContext);return r.subContext.tagJsVar.processUpdate(o,r.subContext,s,i)},processInit:(t,r,s,i,o)=>r.subContext.tagJsVar.processInit(t,r.subContext,s,i,o),matchesInjection:t=>n.subContext.tagJsVar.matchesInjection(t,n.subContext)}}function uT(n,e,t,r,s,i,o,c,l){if(t){if(Gp(e)||e===""){r.removeAttribute(t);return}if(typeof t===he.object)if(typeof e===he.object)for(const p in t)p in e||mt.push([$h,[r,p]]);else for(const p in t)mt.push([$h,[r,p]])}const u=Jp(n,e,r,s,i,o,c,l);u&&o.push(...u)}function $h(n,e){n.removeAttribute(e)}function hT(n,e,t,r){const s=e,i=n;if(i!=null&&i.tagJsType){const c=e.value;if(!(c!=null&&c.tagJsType)){i.isAttr=!0,ze(e),i.processInitAttribute(s.attrName,n,s.target,i,s,t,Mt),Ne(),s.tagJsVar=i;return}c.hasValueChanged(i,e,t);return}if(s.isNameOnly){uT(r,n,s.value,s.target,t,s.howToSet,[],s.parentContext,s),s.value=n;return}const o=s.target;mT(n,s.attrName,s,o,t,s.howToSet,s.isSpecial),e.value=n}const dT=new RegExp(xp+"(\\d+)"+jw,"g");function Kp(n){return n.search&&n.startsWith(xp)?n.search(dT):-1}function fT(n,e,t,r,s,i,o){const c=r.length,l=[];e.forEach(d=>{if(Kp(d)>=0){const m=r.length,E=In(d),v={description:"attribute-array-item",updateCount:0,isAttr:!0,target:t,attrName:n,withinOwnerElement:!0,tagJsVar:E,parentContext:o,destroy$:new ae,render$:new ae};E.processUpdate=function(O,x,M,G){++x.updateCount,u(G)};const C=i[m];v.value=C,l.push(v),++o.varCounter}});function u(d){const p=pT(e,d,c).join("");s(t,n,p)}return u(i),l}function pT(n,e,t){return n.reduce((r,s)=>{if(Kp(s)>=0){const o=t++,c=e[o];return r.push(c),r}return r.push(s),r},[])}function gT(n,e,t,r,s,i,o,c,l){if(typeof e===he.function)return++s.varCounter,Yp(e,o,n,t);const u=In(e),d={description:"dynamic-attribute",updateCount:0,isAttr:!0,target:t,attrName:n,howToSet:i,value:e,withinOwnerElement:!0,tagJsVar:u,destroy$:new ae,render$:new ae,parentContext:s};return r.push(d),u.processUpdate=hT,Eb(n,e,d,t,i,o,c),d.value=e,d}function Hh(n){return Ro(n)&&"TagJsTag"in n?n.tagJsVar:-1}function Qp(n,e,t,r,s,i,o,c,l){const u=Hh(n);let d=u>=0||e===void 0&&typeof n!="string",p=t[u];e!=null&&e.tagJsType?p=e:(n!=null&&n.tagJsType||typeof n=="function")&&(d=!0,p=n,e=n);const m=p;if(m!=null&&m.tagJsType)return Wp(e,o,c,m,u,s,n,r,d);if(d){u===-1&&d&&(p=n);const v=Vo(p,[],!0,c);return v.description="processAttribute",v.isAttr=!0,v.target=r,v.isNameOnly=!0,v.howToSet=i,Jp(t,p,r,s,i,o,c,v),v}if(Array.isArray(e))return fT(n,e,r,[],i,t,s.context);const E=Hh(e);if(E>=0){const v=t[E];return gT(n,v,r,[],c,i,s,l)}return xo(n,e,r,i,l,c)}function mT(n,e,t,r,s,i,o){return Qn(n)?_T(s,n,r,e):yT(n,r,e,o,i,s)}function yT(n,e,t,r,s,i){if(r!==!1){rp(t,n,e,r);return}switch(n){case void 0:case!1:case null:mt.push([bT,[e,t]]);return}if(Qn(n))return zp(e,n,i,t);s(e,t,n)}function _T(n,e,t,r){return Yp(e,n,r,t)}function Yp(n,e,t,r){return n=rT(n,e),zp(r,n,e,t)}function bT(n,e){n.removeAttribute(e)}function wT(n,e,t,r,s){for(const i of n){const o=i[0],c=i[1],l=i[2]||!1;let u=i.length>1?Mt:hb;i[3]&&(u=i[3]);const d=s.contexts,p=Qp(o,c,e,t,r,u,d,s,l)||void 0;typeof p=="object"&&(d.push(p),++s.varCounter)}}function TT(n,e,t,r,s){const i=[],o={updateCount:0,parentContext:t,contexts:i,target:e,value:n,htmlDomMeta:[],tagJsVar:{component:!1,tagJsType:"dynamic-text",hasValueChanged:()=>0,processInit:qe,processInitAttribute:qe,destroy:(p,m)=>{++o.updateCount,i.forEach(E=>E.tagJsVar.destroy(E,m))},processUpdate:(p,m,E,v)=>{++o.updateCount,ze(u);let C=p(u);const D=o.underFunction;delete o.underFunction,C instanceof Function&&!C.tagJsType&&(D&&C.toString()===D.toString()?C=u.value:(o.underFunction=C,C=C()));const O=u.tagJsVar.processUpdate(C,u,E,v);return u.value=C,m.value=p,Ne(),O}},withinOwnerElement:!0,destroy$:new ae,render$:new ae};ze(o);let c=n();Qn(c)&&!c.tagJsType&&(o.underFunction=c,c=c());const u=Zp(c,o,e,r,s);return t.contexts.push(o),o.subContext=u,Ne(),u}function Xp(n,e,t,r,s){n.forEach(i=>{switch(typeof i){case"string":case"boolean":case"number":return qh(i,r,s);case"function":{if(i.tagJsType==="element")break;return TT(i,r,e,t,s)}}if(i==null)return qh(i,r,s);if(i.tagJsType==="element"){const c=eg(i,e,t,e.contexts);ht.push([s,[r,c]]),e.htmlDomMeta.push({nn:c.tagName,domElement:c,at:[]});return}return Zp(i,e,r,t,s)})}function Zp(n,e,t,r,s){const i=Vo(n,[],!0,e);if(e.contexts.push(i),i.target=t,i.placeholder=document.createTextNode(""),ht.push([s,[t,i.placeholder]]),ze(i),i.inputsHandler){const c=r.propsConfig;i.inputsHandler(c)}return i.tagJsVar.processInit(n,i,r,i.placeholder),Ne(),i}function qh(n,e,t){const r=So(n),s=document.createTextNode(r);return ht.push([t,[e,s]]),s}function eg(n,e,t,r){const s=n.tagName,i=document.createElement(s);e.target=i;const o=n.attributes;for(let l=0;l<o.length;++l){const u=o[l],d=u[0];typeof d=="string"&&(u[2]=Po(d,s))}wT(o,[],i,t,e),Xp(n.innerHTML,e,t,i,Xc);const c=n.listeners;for(let l=0;l<c.length;++l)ET(n,l,t,c[l],i);return i}function ET(n,e,t,r,s){const i=r[0],o=(...c)=>{const u=n.listeners[e][1],d=ko(t),p=d.context,m=p.updateCount;p.locked=1,++me.locks,ze(p);const E=u(...c);return--me.locks,delete p.locked,Ne(),m===p.updateCount?qp(E,d):(et(),nr(E)?E.then(()=>{const C=d.context.state.newest;return dw(C),"promise-no-data-ever"}):"no-data-ever")};Hp(t.appSupport,i,s,o)}function vT(n,e,t,r){e.contexts=e.contexts||[],e.htmlDomMeta=[],e.locked=34;const s=eg(n,e,t,e.contexts);delete e.locked;const i=[Yc,[r,s,"htmlTag.processInit"]];ht.push(i),e.paintCommands=[i],un.push([()=>{delete e.paintCommands},[]]);const o={nn:n.tagName,domElement:s,at:n.attributes};return e.htmlDomMeta=[o],s}function $(n){const t=Xs({component:!1,tagJsType:"element",processInitAttribute:qe,processInit:vT,destroy:jp,processUpdate:Bp,hasValueChanged:fl,tagName:n,innerHTML:[],attributes:[],contentId:0,listeners:[],allListeners:[],elementFunctions:eo},eo);return t.tagName=n,t}function Xs(n,e){const t=function r(...s){const i={...r};i.attributes=pr(r.attributes),i.listeners=pr(r.listeners),i.allListeners=pr(r.allListeners);let o=i.contexts;i.innerHTML=s;for(let c=0;c<s.length;++c){const l=s[c];if(Ls(l)){if(l.tagJsType==="element"){zh(i.allListeners,l.allListeners),l.contexts&&(o||(o=[],i.contexts=o),zh(o,l.contexts),++i.contentId);continue}o||(o=[],i.contexts=o),o.push(l)}}return i};return Object.assign(t,n),IT(t,e(t)),t.attributes=pr(n.attributes),t.listeners=pr(n.listeners),t.allListeners=pr(n.allListeners),t.toString=function(){return Zw(this)},t}function pr(n){return n.length?n.slice():[]}function zh(n,e){for(let t=0;t<e.length;++t)n.push(e[t])}function IT(n,e){for(const t in e){const r=e[t];try{n[t]=r}catch{Object.defineProperty(n,t,{value:r,writable:!0,configurable:!0,enumerable:!1})}}}const De=AT();function AT(){const e=Xs({component:!1,tagJsType:"element",processInitAttribute:qe,processInit:CT,destroy:RT,processUpdate:Bp,hasValueChanged:fl,tagName:"no-element",innerHTML:[],attributes:[],contentId:0,listeners:[],allListeners:[],elementFunctions:eo},eo);return e.tagName="no-element",e}function CT(n,e,t,r){e.contexts=e.contexts||[],e.htmlDomMeta=[],Xp(n.innerHTML,e,t,r,Yc)}function RT(n,e){++n.updateCount;const t=n.contexts,r=[];if(t.length&&(no(t,e,r),t.length=0,r.length)){const s=n.htmlDomMeta;return Promise.all(r).then(()=>{++me.locks,Ds(s),--me.locks,et()})}}const K=$("button"),pl=$("select"),Wn=$("option"),kT=$("optgroup"),be=$("input"),Lo=$("textarea");$("html");$("head");const tg=$("title");$("meta");$("link");const Ut=$("style");$("body");$("script");$("noscript");const ST=$("hr"),gl=$("h1"),vt=$("h2"),bt=$("h3");$("h4");$("h5");$("h6");$("ol");const Gh=$("ul"),gr=$("li"),y=$("div");$("main");const La=$("section");$("header");$("footer");$("form");const Mo=$("fieldset");$("legend");$("dialog");$("pre");$("table");$("tr");$("td");$("th");$("thead");$("tbody");$("tfoot");const ng=$("iframe"),H=$("a"),PT=$("u"),Z=$("img"),Q=$("br"),ye=$("label"),ce=$("p"),q=$("small"),te=$("span"),qr=$("strong"),xT=$("b");$("sup");$("nav");$("figure");$("figcaption");$("code");$("canvas");const ji=$("svg"),Pt=$("path"),Si=$("polygon"),VT=$("rect");$("details");$("summary");const rg=L(({date:n})=>{const e=performance.now().toString().replace(/\./g,"_"),t=`${e}-days-plus`,r=DT();let s;o(),rg.updates(p=>{const m=n;[{date:n}]=p,n!=m&&(l(),i())}),n=n||new Date;function i(){const m=n-new Date;if(m<0){d({days:0,hours:0,minutes:0,seconds:0}),c();return}let E=Math.floor(m/(1e3*60*60*24));const v=Math.floor(m%(1e3*60*60*24)/(1e3*60*60)),C=Math.floor(m%(1e3*60*60)/(1e3*60)),D=Math.floor(m%(1e3*60)/1e3);d({days:E,hours:v,minutes:C,seconds:D})}function o(){s=setInterval(i,Vt)}function c(){clearInterval(s),s=void 0}L.onDestroy(c);function l(){c(),o()}function u(p,m,E){const v=document.createElement("span");if(v.classList.add("wrap"),v.innerText=m,p.appendChild(v),p.children.length===1)return;function C(){requestAnimationFrame(()=>{v.classList.add("changed"),requestAnimationFrame(()=>{setTimeout(()=>{p.removeChild(v)},200)})})}setTimeout(C,E.speed-1)}const d=we(p=>{const m={...p};let{days:E}=m;const v=document.getElementById(t);v&&(E>99?(m.days=99,v.style.display=""):v.style.display="none",Object.entries(m).forEach(([C,D])=>{const O=NT(D),x=r[C];O[0]!=x[0].value$.value&&(x[0].value$.next(O[0]),u(document.getElementById(`${e}-${C}-0`),O[0],x[0])),O[1]!=x[1].value$.value&&(x[1].value$.next(O[1]),u(document.getElementById(`${e}-${C}-1`),O[1],x[1]))}))});return De(Ut(`
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
    `),y.class`countdown`(y(y.class`digit-container`(te.class`digit`(y.class`line`,te.id`${e}-days-0`,te.class`placeholder`("0")),te.class`digit`(y.class`line`,te.id`${e}-days-1`,te.class`placeholder`("0")),te.id`${e}-days-plus`.class`label`.style`display:none`("+")),y.class`label`("Days")),y(y.class`digit-container`(te.class`digit`(y.class`line`,te.id`${e}-hours-0`,te.class`placeholder`("0")),te.class`digit`(y.class`line`,te.id`${e}-hours-1`,te.class`placeholder`("0"))),y.class`label`("Hours")),y(y.class`digit-container`(te.class`digit`(y.class`line`,te.id`${e}-minutes-0`,te.class`placeholder`("0")),te.class`digit`(y.class`line`,te.id`${e}-minutes-1`,te.class`placeholder`("0"))),y.class`label`.contextMenu(l)("Minutes")),y(y.class`digit-container`(te.class`digit`(y.class`line`,te.id`${e}-seconds-0`,te.class`placeholder`("0")),te.class`digit`(y.class`line`,te.id`${e}-seconds-1`,te.class`placeholder`("0"))),y.class`label`.contextMenu(c)("Seconds"))))});function NT(n){const e=n%10;return[Math.floor(n/10),e]}const Vt=1e3;function DT(){return{days:[{speed:Vt*60*60*24*10,value$:new ae},{speed:Vt*60*60*24,value$:new ae}],hours:[{speed:Vt*60*60*10,value$:new ae},{speed:Vt*60*60,value$:new ae}],minutes:[{speed:Vt*60*10,value$:new ae},{speed:Vt*60,value$:new ae}],seconds:[{speed:Vt*10,value$:new ae},{speed:Vt,value$:new ae}]}}const OT=()=>{};var Wh={};/**
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
 */const sg=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},LT=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ig={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,E=u&63;l||(E=64,o||(m=64)),r.push(t[d],t[p],t[m],t[E])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(sg(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):LT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new MT;const m=i<<2|c>>4;if(r.push(m),u!==64){const E=c<<4&240|u>>2;if(r.push(E),p!==64){const v=u<<6&192|p;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class MT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UT=function(n){const e=sg(n);return ig.encodeByteArray(e,!0)},ro=function(n){return UT(n).replace(/\./g,"")},og=function(n){try{return ig.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function FT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jT=()=>FT().__FIREBASE_DEFAULTS__,BT=()=>{if(typeof process>"u"||typeof Wh>"u")return;const n=Wh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$T=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&og(n[1]);return e&&JSON.parse(e)},Uo=()=>{try{return OT()||jT()||BT()||$T()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ag=n=>{var e,t;return(t=(e=Uo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},HT=n=>{const e=ag(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},cg=()=>{var n;return(n=Uo())==null?void 0:n.config},lg=n=>{var e;return(e=Uo())==null?void 0:e[`_${n}`]};/**
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
 */class qT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function zr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ug(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function zT(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ro(JSON.stringify(t)),ro(JSON.stringify(o)),""].join(".")}const Rs={};function GT(){const n={prod:[],emulator:[]};for(const e of Object.keys(Rs))Rs[e]?n.emulator.push(e):n.prod.push(e);return n}function WT(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Jh=!1;function hg(n,e){if(typeof window>"u"||typeof document>"u"||!zr(window.location.host)||Rs[n]===e||Rs[n]||Jh)return;Rs[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=GT().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,E){m.setAttribute("width","24"),m.setAttribute("id",E),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Jh=!0,o()},m}function d(m,E){m.setAttribute("id",E),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=WT(r),E=t("text"),v=document.getElementById(E)||document.createElement("span"),C=t("learnmore"),D=document.getElementById(C)||document.createElement("a"),O=t("preprendIcon"),x=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const M=m.element;c(M),d(D,C);const G=u();l(x,O),M.append(x,v,D,G),document.body.appendChild(M)}i?(v.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,v.innerText="Preview backend running in this workspace."),v.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function JT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function KT(){var e;const n=(e=Uo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function YT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function XT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZT(){const n=Ge();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function eE(){return!KT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tE(){try{return typeof indexedDB=="object"}catch{return!1}}function nE(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const rE="FirebaseError";class Gt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=rE,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zs.prototype.create)}}class Zs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?sE(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Gt(s,c,r)}}function sE(n,e){return n.replace(iE,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const iE=/\{\$([^}]+)}/g;function oE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Yn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Kh(i)&&Kh(o)){if(!Yn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Kh(n){return n!==null&&typeof n=="object"}/**
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
 */function ei(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function aE(n,e){const t=new cE(n,e);return t.subscribe.bind(t)}class cE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");lE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ma),s.error===void 0&&(s.error=Ma),s.complete===void 0&&(s.complete=Ma);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ma(){}/**
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
 */function We(n){return n&&n._delegate?n._delegate:n}class Xn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qn="[DEFAULT]";/**
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
 */class uE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new qT;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dE(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hE(n){return n===qn?void 0:n}function dE(n){return n.instantiationMode==="EAGER"}/**
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
 */class fE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new uE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(re||(re={}));const pE={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},gE=re.INFO,mE={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},yE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=mE[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ml{constructor(e){this.name=e,this._logLevel=gE,this._logHandler=yE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const _E=(n,e)=>e.some(t=>n instanceof t);let Qh,Yh;function bE(){return Qh||(Qh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wE(){return Yh||(Yh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dg=new WeakMap,Ec=new WeakMap,fg=new WeakMap,Ua=new WeakMap,yl=new WeakMap;function TE(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(hn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&dg.set(t,n)}).catch(()=>{}),yl.set(e,n),e}function EE(n){if(Ec.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Ec.set(n,e)}let vc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ec.get(n);if(e==="objectStoreNames")return n.objectStoreNames||fg.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return hn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function vE(n){vc=n(vc)}function IE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Fa(this),e,...t);return fg.set(r,e.sort?e.sort():[e]),hn(r)}:wE().includes(n)?function(...e){return n.apply(Fa(this),e),hn(dg.get(this))}:function(...e){return hn(n.apply(Fa(this),e))}}function AE(n){return typeof n=="function"?IE(n):(n instanceof IDBTransaction&&EE(n),_E(n,bE())?new Proxy(n,vc):n)}function hn(n){if(n instanceof IDBRequest)return TE(n);if(Ua.has(n))return Ua.get(n);const e=AE(n);return e!==n&&(Ua.set(n,e),yl.set(e,n)),e}const Fa=n=>yl.get(n);function CE(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=hn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(hn(o.result),l.oldVersion,l.newVersion,hn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const RE=["get","getKey","getAll","getAllKeys","count"],kE=["put","add","delete","clear"],ja=new Map;function Xh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ja.get(e))return ja.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=kE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||RE.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),s&&l.done]))[0]};return ja.set(e,i),i}vE(n=>({...n,get:(e,t,r)=>Xh(e,t)||n.get(e,t,r),has:(e,t)=>!!Xh(e,t)||n.has(e,t)}));/**
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
 */class SE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(PE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function PE(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ic="@firebase/app",Zh="0.14.7";/**
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
 */const Ft=new ml("@firebase/app"),xE="@firebase/app-compat",VE="@firebase/analytics-compat",NE="@firebase/analytics",DE="@firebase/app-check-compat",OE="@firebase/app-check",LE="@firebase/auth",ME="@firebase/auth-compat",UE="@firebase/database",FE="@firebase/data-connect",jE="@firebase/database-compat",BE="@firebase/functions",$E="@firebase/functions-compat",HE="@firebase/installations",qE="@firebase/installations-compat",zE="@firebase/messaging",GE="@firebase/messaging-compat",WE="@firebase/performance",JE="@firebase/performance-compat",KE="@firebase/remote-config",QE="@firebase/remote-config-compat",YE="@firebase/storage",XE="@firebase/storage-compat",ZE="@firebase/firestore",ev="@firebase/ai",tv="@firebase/firestore-compat",nv="firebase",rv="12.8.0";/**
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
 */const Ac="[DEFAULT]",sv={[Ic]:"fire-core",[xE]:"fire-core-compat",[NE]:"fire-analytics",[VE]:"fire-analytics-compat",[OE]:"fire-app-check",[DE]:"fire-app-check-compat",[LE]:"fire-auth",[ME]:"fire-auth-compat",[UE]:"fire-rtdb",[FE]:"fire-data-connect",[jE]:"fire-rtdb-compat",[BE]:"fire-fn",[$E]:"fire-fn-compat",[HE]:"fire-iid",[qE]:"fire-iid-compat",[zE]:"fire-fcm",[GE]:"fire-fcm-compat",[WE]:"fire-perf",[JE]:"fire-perf-compat",[KE]:"fire-rc",[QE]:"fire-rc-compat",[YE]:"fire-gcs",[XE]:"fire-gcs-compat",[ZE]:"fire-fst",[tv]:"fire-fst-compat",[ev]:"fire-vertex","fire-js":"fire-js",[nv]:"fire-js-all"};/**
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
 */const so=new Map,iv=new Map,Cc=new Map;function ed(n,e){try{n.container.addComponent(e)}catch(t){Ft.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Or(n){const e=n.name;if(Cc.has(e))return Ft.debug(`There were multiple attempts to register component ${e}.`),!1;Cc.set(e,n);for(const t of so.values())ed(t,n);for(const t of iv.values())ed(t,n);return!0}function _l(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function nt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ov={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dn=new Zs("app","Firebase",ov);/**
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
 */class av{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dn.create("app-deleted",{appName:this._name})}}/**
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
 */const Gr=rv;function pg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ac,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw dn.create("bad-app-name",{appName:String(s)});if(t||(t=cg()),!t)throw dn.create("no-options");const i=so.get(s);if(i){if(Yn(t,i.options)&&Yn(r,i.config))return i;throw dn.create("duplicate-app",{appName:s})}const o=new fE(s);for(const l of Cc.values())o.addComponent(l);const c=new av(t,r,o);return so.set(s,c),c}function gg(n=Ac){const e=so.get(n);if(!e&&n===Ac&&cg())return pg();if(!e)throw dn.create("no-app",{appName:n});return e}function fn(n,e,t){let r=sv[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ft.warn(o.join(" "));return}Or(new Xn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const cv="firebase-heartbeat-database",lv=1,Ms="firebase-heartbeat-store";let Ba=null;function mg(){return Ba||(Ba=CE(cv,lv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ms)}catch(t){console.warn(t)}}}}).catch(n=>{throw dn.create("idb-open",{originalErrorMessage:n.message})})),Ba}async function uv(n){try{const t=(await mg()).transaction(Ms),r=await t.objectStore(Ms).get(yg(n));return await t.done,r}catch(e){if(e instanceof Gt)Ft.warn(e.message);else{const t=dn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ft.warn(t.message)}}}async function td(n,e){try{const r=(await mg()).transaction(Ms,"readwrite");await r.objectStore(Ms).put(e,yg(n)),await r.done}catch(t){if(t instanceof Gt)Ft.warn(t.message);else{const r=dn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ft.warn(r.message)}}}function yg(n){return`${n.name}!${n.options.appId}`}/**
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
 */const hv=1024,dv=30;class fv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gv(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=nd();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>dv){const o=mv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ft.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nd(),{heartbeatsToSend:r,unsentEntries:s}=pv(this._heartbeatsCache.heartbeats),i=ro(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ft.warn(t),""}}}function nd(){return new Date().toISOString().substring(0,10)}function pv(n,e=hv){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),rd(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),rd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class gv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tE()?nE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await uv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return td(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return td(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function rd(n){return ro(JSON.stringify({version:2,heartbeats:n})).length}function mv(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function yv(n){Or(new Xn("platform-logger",e=>new SE(e),"PRIVATE")),Or(new Xn("heartbeat",e=>new fv(e),"PRIVATE")),fn(Ic,Zh,n),fn(Ic,Zh,"esm2020"),fn("fire-js","")}yv("");var _v="firebase",bv="12.8.0";/**
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
 */fn(_v,bv,"app");function _g(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wv=_g,bg=new Zs("auth","Firebase",_g());/**
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
 */const io=new ml("@firebase/auth");function Tv(n,...e){io.logLevel<=re.WARN&&io.warn(`Auth (${Gr}): ${n}`,...e)}function Bi(n,...e){io.logLevel<=re.ERROR&&io.error(`Auth (${Gr}): ${n}`,...e)}/**
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
 */function kt(n,...e){throw wl(n,...e)}function ft(n,...e){return wl(n,...e)}function bl(n,e,t){const r={...wv(),[e]:t};return new Zs("auth","Firebase",r).create(e,{appName:n.name})}function pn(n){return bl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wg(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&kt(n,"argument-error"),bl(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return bg.create(n,...e)}function J(n,e,...t){if(!n)throw wl(e,...t)}function Dt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Bi(e),new Error(e)}function jt(n,e){n||Dt(e)}/**
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
 */function Rc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Ev(){return sd()==="http:"||sd()==="https:"}function sd(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function vv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ev()||YT()||"connection"in navigator)?navigator.onLine:!0}function Iv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ti{constructor(e,t){this.shortDelay=e,this.longDelay=t,jt(t>e,"Short delay should be less than long delay!"),this.isMobile=JT()||XT()}get(){return vv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tl(n,e){jt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Tg{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Av={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Cv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Rv=new ti(3e4,6e4);function El(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Wr(n,e,t,r,s={}){return Eg(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=ei({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:l,...i};return QT()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&zr(n.emulatorConfig.host)&&(u.credentials="include"),Tg.fetch()(await vg(n,n.config.apiHost,t,c),u)})}async function Eg(n,e,t){n._canInitEmulator=!1;const r={...Av,...e};try{const s=new Sv(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Pi(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pi(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Pi(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Pi(n,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw bl(n,d,u);kt(n,d)}}catch(s){if(s instanceof Gt)throw s;kt(n,"network-request-failed",{message:String(s)})}}async function kv(n,e,t,r,s={}){const i=await Wr(n,e,t,r,s);return"mfaPendingCredential"in i&&kt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function vg(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Tl(n.config,s):`${n.config.apiScheme}://${s}`;return Cv.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class Sv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ft(this.auth,"network-request-failed")),Rv.get())})}}function Pi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ft(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function Pv(n,e){return Wr(n,"POST","/v1/accounts:delete",e)}async function oo(n,e){return Wr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ks(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xv(n,e=!1){const t=We(n),r=await t.getIdToken(e),s=vl(r);J(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ks($a(s.auth_time)),issuedAtTime:ks($a(s.iat)),expirationTime:ks($a(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $a(n){return Number(n)*1e3}function vl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Bi("JWT malformed, contained fewer than 3 sections"),null;try{const s=og(t);return s?JSON.parse(s):(Bi("Failed to decode base64 JWT payload"),null)}catch(s){return Bi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function id(n){const e=vl(n);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Us(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Gt&&Vv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Vv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Nv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class kc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ks(this.lastLoginAt),this.creationTime=ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ao(n){var p;const e=n.auth,t=await n.getIdToken(),r=await Us(n,oo(e,{idToken:t}));J(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Ig(s.providerUserInfo):[],o=Ov(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new kc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function Dv(n){const e=We(n);await ao(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ov(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ig(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Lv(n,e){const t=await Eg(n,{},async()=>{const r=ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await vg(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&zr(n.emulatorConfig.host)&&(l.credentials="include"),Tg.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Mv(n,e){return Wr(n,"POST","/v2/accounts:revokeToken",El(n,e))}/**
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
 */class Pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):id(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){J(e.length!==0,"internal-error");const t=id(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Lv(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Pr;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pr,this.toJSON())}_performRefresh(){return Dt("not implemented")}}/**
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
 */function Zt(n,e){J(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class lt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Nv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new kc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Us(this,this.stsTokenManager.getToken(this.auth,e));return J(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return xv(this,e)}reload(){return Dv(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new lt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ao(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nt(this.auth.app))return Promise.reject(pn(this.auth));const e=await this.getIdToken();return await Us(this,Pv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:E,providerData:v,stsTokenManager:C}=t;J(p&&C,e,"internal-error");const D=Pr.fromJSON(this.name,C);J(typeof p=="string",e,"internal-error"),Zt(r,e.name),Zt(s,e.name),J(typeof m=="boolean",e,"internal-error"),J(typeof E=="boolean",e,"internal-error"),Zt(i,e.name),Zt(o,e.name),Zt(c,e.name),Zt(l,e.name),Zt(u,e.name),Zt(d,e.name);const O=new lt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:D,createdAt:u,lastLoginAt:d});return v&&Array.isArray(v)&&(O.providerData=v.map(x=>({...x}))),l&&(O._redirectEventId=l),O}static async _fromIdTokenResponse(e,t,r=!1){const s=new Pr;s.updateFromServerResponse(t);const i=new lt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ao(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];J(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ig(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Pr;c.updateFromIdToken(r);const l=new lt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new kc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const od=new Map;function Ot(n){jt(n instanceof Function,"Expected a class definition");let e=od.get(n);return e?(jt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,od.set(n,e),e)}/**
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
 */class Ag{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ag.type="NONE";const ad=Ag;/**
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
 */function $i(n,e,t){return`firebase:${n}:${e}:${t}`}class xr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$i(this.userKey,s.apiKey,i),this.fullPersistenceKey=$i("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await oo(this.auth,{idToken:e}).catch(()=>{});return t?lt._fromGetAccountInfoResponse(this.auth,t,e):null}return lt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new xr(Ot(ad),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ot(ad);const o=$i(r,e.config.apiKey,e.name);let c=null;for(const u of t)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const m=await oo(e,{idToken:d}).catch(()=>{});if(!m)break;p=await lt._fromGetAccountInfoResponse(e,m,d)}else p=lt._fromJSON(e,d);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new xr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new xr(i,e,r))}}/**
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
 */function cd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xg(e))return"Blackberry";if(Vg(e))return"Webos";if(Rg(e))return"Safari";if((e.includes("chrome/")||kg(e))&&!e.includes("edge/"))return"Chrome";if(Pg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cg(n=Ge()){return/firefox\//i.test(n)}function Rg(n=Ge()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kg(n=Ge()){return/crios\//i.test(n)}function Sg(n=Ge()){return/iemobile/i.test(n)}function Pg(n=Ge()){return/android/i.test(n)}function xg(n=Ge()){return/blackberry/i.test(n)}function Vg(n=Ge()){return/webos/i.test(n)}function Il(n=Ge()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Uv(n=Ge()){var e;return Il(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Fv(){return ZT()&&document.documentMode===10}function Ng(n=Ge()){return Il(n)||Pg(n)||Vg(n)||xg(n)||/windows phone/i.test(n)||Sg(n)}/**
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
 */function Dg(n,e=[]){let t;switch(n){case"Browser":t=cd(Ge());break;case"Worker":t=`${cd(Ge())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Gr}/${r}`}/**
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
 */class jv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Bv(n,e={}){return Wr(n,"GET","/v2/passwordPolicy",El(n,e))}/**
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
 */const $v=6;class Hv{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??$v,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class qv{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ld(this),this.idTokenSubscription=new ld(this),this.beforeStateQueue=new jv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ot(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await xr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await oo(this,{idToken:e}),r=await lt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(nt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ao(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Iv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nt(this.app))return Promise.reject(pn(this));const t=e?We(e):null;return t&&J(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nt(this.app)?Promise.reject(pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nt(this.app)?Promise.reject(pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Bv(this),t=new Hv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Mv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ot(e)||this._popupRedirectResolver;J(t,this,"argument-error"),this.redirectPersistenceManager=await xr.create(this,[Ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Tv(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Jr(n){return We(n)}class ld{constructor(e){this.auth=e,this.observer=null,this.addObserver=aE(t=>this.observer=t)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Al={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zv(n){Al=n}function Gv(n){return Al.loadJS(n)}function Wv(){return Al.gapiScript}function Jv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Kv(n,e){const t=_l(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Yn(i,e??{}))return s;kt(s,"already-initialized")}return t.initialize({options:e})}function Qv(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ot);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Yv(n,e,t){const r=Jr(n);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Og(e),{host:o,port:c}=Xv(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},d=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(Yn(u,r.config.emulator)&&Yn(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,zr(o)?(ug(`${i}//${o}${l}`),hg("Auth",!0)):Zv()}function Og(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Xv(n){const e=Og(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ud(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ud(o)}}}function ud(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Zv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Lg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dt("not implemented")}_getIdTokenResponse(e){return Dt("not implemented")}_linkToIdToken(e,t){return Dt("not implemented")}_getReauthenticationResolver(e){return Dt("not implemented")}}/**
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
 */async function Vr(n,e){return kv(n,"POST","/v1/accounts:signInWithIdp",El(n,e))}/**
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
 */const eI="http://localhost";class Zn extends Lg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):kt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new Zn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Vr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Vr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Vr(e,t)}buildRequest(){const e={requestUri:eI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ei(t)}return e}}/**
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
 */class Fo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ni extends Fo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sn extends ni{constructor(){super("facebook.com")}static credential(e){return Zn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";sn.PROVIDER_ID="facebook.com";/**
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
 */class Nt extends ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Zn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Nt.credential(t,r)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
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
 */class on extends ni{constructor(){super("github.com")}static credential(e){return Zn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
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
 */class an extends ni{constructor(){super("twitter.com")}static credential(e,t){return Zn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return an.credential(t,r)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
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
 */class Lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await lt._fromIdTokenResponse(e,r,s),o=hd(r);return new Lr({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=hd(r);return new Lr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function hd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class co extends Gt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,co.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new co(e,t,r,s)}}function Mg(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?co._fromErrorAndOperation(n,i,e,r):i})}async function tI(n,e,t=!1){const r=await Us(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Lr._forOperation(n,"link",r)}/**
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
 */async function nI(n,e,t=!1){const{auth:r}=n;if(nt(r.app))return Promise.reject(pn(r));const s="reauthenticate";try{const i=await Us(n,Mg(r,s,e,n),t);J(i.idToken,r,"internal-error");const o=vl(i.idToken);J(o,r,"internal-error");const{sub:c}=o;return J(n.uid===c,r,"user-mismatch"),Lr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&kt(r,"user-mismatch"),i}}/**
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
 */async function rI(n,e,t=!1){if(nt(n.app))return Promise.reject(pn(n));const r="signIn",s=await Mg(n,r,e),i=await Lr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}/**
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
 */function sI(n,e){return We(n).setPersistence(e)}function iI(n,e,t,r){return We(n).onIdTokenChanged(e,t,r)}function oI(n,e,t){return We(n).beforeAuthStateChanged(e,t)}function aI(n,e,t,r){return We(n).onAuthStateChanged(e,t,r)}function cI(n){return We(n).signOut()}const lo="__sak";/**
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
 */class Ug{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(lo,"1"),this.storage.removeItem(lo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const lI=1e3,uI=10;class Fg extends Ug{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ng(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Fv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,uI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},lI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fg.type="LOCAL";const jg=Fg;/**
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
 */class Bg extends Ug{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Bg.type="SESSION";const Cl=Bg;/**
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
 */function hI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class jo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new jo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(t.origin,i)),l=await hI(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jo.receivers=[];/**
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
 */function Rl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class dI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Rl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function It(){return window}function fI(n){It().location.href=n}/**
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
 */function $g(){return typeof It().WorkerGlobalScope<"u"&&typeof It().importScripts=="function"}async function pI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function mI(){return $g()?self:null}/**
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
 */const Hg="firebaseLocalStorageDb",yI=1,uo="firebaseLocalStorage",qg="fbase_key";class ri{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Bo(n,e){return n.transaction([uo],e?"readwrite":"readonly").objectStore(uo)}function _I(){const n=indexedDB.deleteDatabase(Hg);return new ri(n).toPromise()}function Sc(){const n=indexedDB.open(Hg,yI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(uo,{keyPath:qg})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(uo)?e(r):(r.close(),await _I(),e(await Sc()))})})}async function dd(n,e,t){const r=Bo(n,!0).put({[qg]:e,value:t});return new ri(r).toPromise()}async function bI(n,e){const t=Bo(n,!1).get(e),r=await new ri(t).toPromise();return r===void 0?null:r.value}function fd(n,e){const t=Bo(n,!0).delete(e);return new ri(t).toPromise()}const wI=800,TI=3;class zg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>TI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $g()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jo._getInstance(mI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await pI(),!this.activeServiceWorker)return;this.sender=new dI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sc();return await dd(e,lo,"1"),await fd(e,lo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>dd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>bI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>fd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Bo(s,!1).getAll();return new ri(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zg.type="LOCAL";const Gg=zg;new ti(3e4,6e4);/**
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
 */function kl(n,e){return e?Ot(e):(J(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Sl extends Lg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Vr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Vr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function EI(n){return rI(n.auth,new Sl(n),n.bypassAuthState)}function vI(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),nI(t,new Sl(n),n.bypassAuthState)}async function II(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),tI(t,new Sl(n),n.bypassAuthState)}/**
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
 */class Wg{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EI;case"linkViaPopup":case"linkViaRedirect":return II;case"reauthViaPopup":case"reauthViaRedirect":return vI;default:kt(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const AI=new ti(2e3,1e4);async function CI(n,e,t){if(nt(n.app))return Promise.reject(ft(n,"operation-not-supported-in-this-environment"));const r=Jr(n);wg(n,e,Fo);const s=kl(r,t);return new zn(r,"signInViaPopup",e,s).executeNotNull()}class zn extends Wg{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,zn.currentPopupAction&&zn.currentPopupAction.cancel(),zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=Rl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AI.get())};e()}}zn.currentPopupAction=null;/**
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
 */const RI="pendingRedirect",Hi=new Map;class kI extends Wg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Hi.get(this.auth._key());if(!e){try{const r=await SI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Hi.set(this.auth._key(),e)}return this.bypassAuthState||Hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SI(n,e){const t=Kg(e),r=Jg(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function PI(n,e){return Jg(n)._set(Kg(e),"true")}function xI(n,e){Hi.set(n._key(),e)}function Jg(n){return Ot(n._redirectPersistence)}function Kg(n){return $i(RI,n.config.apiKey,n.name)}/**
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
 */function VI(n,e,t){return NI(n,e,t)}async function NI(n,e,t){if(nt(n.app))return Promise.reject(pn(n));const r=Jr(n);wg(n,e,Fo),await r._initializationPromise;const s=kl(r,t);return await PI(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function DI(n,e){return await Jr(n)._initializationPromise,Qg(n,e,!1)}async function Qg(n,e,t=!1){if(nt(n.app))return Promise.reject(pn(n));const r=Jr(n),s=kl(r,e),o=await new kI(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const OI=600*1e3;class LI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Yg(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(ft(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OI&&this.cachedEventUids.clear(),this.cachedEventUids.has(pd(e))}saveEventToCache(e){this.cachedEventUids.add(pd(e)),this.lastProcessedEventTime=Date.now()}}function pd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Yg({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yg(n);default:return!1}}/**
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
 */async function UI(n,e={}){return Wr(n,"GET","/v1/projects",e)}/**
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
 */const FI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jI=/^https?/;async function BI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await UI(n);for(const t of e)try{if($I(t))return}catch{}kt(n,"unauthorized-domain")}function $I(n){const e=Rc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!jI.test(t))return!1;if(FI.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const HI=new ti(3e4,6e4);function gd(){const n=It().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function qI(n){return new Promise((e,t)=>{var s,i,o;function r(){gd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gd(),t(ft(n,"network-request-failed"))},timeout:HI.get()})}if((i=(s=It().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=It().gapi)!=null&&o.load)r();else{const c=Jv("iframefcb");return It()[c]=()=>{gapi.load?r():t(ft(n,"network-request-failed"))},Gv(`${Wv()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw qi=null,e})}let qi=null;function zI(n){return qi=qi||qI(n),qi}/**
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
 */const GI=new ti(5e3,15e3),WI="__/auth/iframe",JI="emulator/auth/iframe",KI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YI(n){const e=n.config;J(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Tl(e,JI):`https://${n.config.authDomain}/${WI}`,r={apiKey:e.apiKey,appName:n.name,v:Gr},s=QI.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ei(r).slice(1)}`}async function XI(n){const e=await zI(n),t=It().gapi;return J(t,n,"internal-error"),e.open({where:document.body,url:YI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ft(n,"network-request-failed"),c=It().setTimeout(()=>{i(o)},GI.get());function l(){It().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const ZI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},e1=500,t1=600,n1="_blank",r1="http://localhost";class md{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function s1(n,e,t,r=e1,s=t1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...ZI,width:r.toString(),height:s.toString(),top:i,left:o},u=Ge().toLowerCase();t&&(c=kg(u)?n1:t),Cg(u)&&(e=e||r1,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[E,v])=>`${m}${E}=${v},`,"");if(Uv(u)&&c!=="_self")return i1(e||"",c),new md(null);const p=window.open(e||"",c,d);J(p,n,"popup-blocked");try{p.focus()}catch{}return new md(p)}function i1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const o1="__/auth/handler",a1="emulator/auth/handler",c1=encodeURIComponent("fac");async function yd(n,e,t,r,s,i){J(n.config.authDomain,n,"auth-domain-config-required"),J(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Gr,eventId:s};if(e instanceof Fo){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",oE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof ni){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await n._getAppCheckToken(),u=l?`#${c1}=${encodeURIComponent(l)}`:"";return`${l1(n)}?${ei(c).slice(1)}${u}`}function l1({config:n}){return n.emulator?Tl(n,a1):`https://${n.authDomain}/${o1}`}/**
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
 */const Ha="webStorageSupport";class u1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cl,this._completeRedirectFn=Qg,this._overrideRedirectResult=xI}async _openPopup(e,t,r,s){var o;jt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await yd(e,t,r,Rc(),s);return s1(e,i,Rl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await yd(e,t,r,Rc(),s);return fI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(jt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await XI(e),r=new LI(e);return t.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ha,{type:Ha},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Ha];i!==void 0&&t(!!i),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=BI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ng()||Rg()||Il()}}const h1=u1;var _d="@firebase/auth",bd="1.12.0";/**
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
 */class d1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function f1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function p1(n){Or(new Xn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dg(n)},u=new qv(r,s,i,l);return Qv(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Or(new Xn("auth-internal",e=>{const t=Jr(e.getProvider("auth").getImmediate());return(r=>new d1(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(_d,bd,f1(n)),fn(_d,bd,"esm2020")}/**
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
 */const g1=300,m1=lg("authIdTokenMaxAge")||g1;let wd=null;const y1=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>m1)return;const s=t==null?void 0:t.token;wd!==s&&(wd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _1(n=gg()){const e=_l(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Kv(n,{popupRedirectResolver:h1,persistence:[Gg,jg,Cl]}),r=lg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=y1(i.toString());oI(t,o,()=>o(t.currentUser)),iI(t,c=>o(c))}}const s=ag("auth");return s&&Yv(t,`http://${s}`),t}function b1(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}zv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ft("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",b1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});p1("Browser");var Td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gn,Xg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,b){function w(){}w.prototype=b.prototype,_.F=b.prototype,_.prototype=new w,_.prototype.constructor=_,_.D=function(A,I,k){for(var T=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)T[Qe-2]=arguments[Qe];return b.prototype[I].apply(A,T)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,b,w){w||(w=0);const A=Array(16);if(typeof b=="string")for(var I=0;I<16;++I)A[I]=b.charCodeAt(w++)|b.charCodeAt(w++)<<8|b.charCodeAt(w++)<<16|b.charCodeAt(w++)<<24;else for(I=0;I<16;++I)A[I]=b[w++]|b[w++]<<8|b[w++]<<16|b[w++]<<24;b=_.g[0],w=_.g[1],I=_.g[2];let k=_.g[3],T;T=b+(k^w&(I^k))+A[0]+3614090360&4294967295,b=w+(T<<7&4294967295|T>>>25),T=k+(I^b&(w^I))+A[1]+3905402710&4294967295,k=b+(T<<12&4294967295|T>>>20),T=I+(w^k&(b^w))+A[2]+606105819&4294967295,I=k+(T<<17&4294967295|T>>>15),T=w+(b^I&(k^b))+A[3]+3250441966&4294967295,w=I+(T<<22&4294967295|T>>>10),T=b+(k^w&(I^k))+A[4]+4118548399&4294967295,b=w+(T<<7&4294967295|T>>>25),T=k+(I^b&(w^I))+A[5]+1200080426&4294967295,k=b+(T<<12&4294967295|T>>>20),T=I+(w^k&(b^w))+A[6]+2821735955&4294967295,I=k+(T<<17&4294967295|T>>>15),T=w+(b^I&(k^b))+A[7]+4249261313&4294967295,w=I+(T<<22&4294967295|T>>>10),T=b+(k^w&(I^k))+A[8]+1770035416&4294967295,b=w+(T<<7&4294967295|T>>>25),T=k+(I^b&(w^I))+A[9]+2336552879&4294967295,k=b+(T<<12&4294967295|T>>>20),T=I+(w^k&(b^w))+A[10]+4294925233&4294967295,I=k+(T<<17&4294967295|T>>>15),T=w+(b^I&(k^b))+A[11]+2304563134&4294967295,w=I+(T<<22&4294967295|T>>>10),T=b+(k^w&(I^k))+A[12]+1804603682&4294967295,b=w+(T<<7&4294967295|T>>>25),T=k+(I^b&(w^I))+A[13]+4254626195&4294967295,k=b+(T<<12&4294967295|T>>>20),T=I+(w^k&(b^w))+A[14]+2792965006&4294967295,I=k+(T<<17&4294967295|T>>>15),T=w+(b^I&(k^b))+A[15]+1236535329&4294967295,w=I+(T<<22&4294967295|T>>>10),T=b+(I^k&(w^I))+A[1]+4129170786&4294967295,b=w+(T<<5&4294967295|T>>>27),T=k+(w^I&(b^w))+A[6]+3225465664&4294967295,k=b+(T<<9&4294967295|T>>>23),T=I+(b^w&(k^b))+A[11]+643717713&4294967295,I=k+(T<<14&4294967295|T>>>18),T=w+(k^b&(I^k))+A[0]+3921069994&4294967295,w=I+(T<<20&4294967295|T>>>12),T=b+(I^k&(w^I))+A[5]+3593408605&4294967295,b=w+(T<<5&4294967295|T>>>27),T=k+(w^I&(b^w))+A[10]+38016083&4294967295,k=b+(T<<9&4294967295|T>>>23),T=I+(b^w&(k^b))+A[15]+3634488961&4294967295,I=k+(T<<14&4294967295|T>>>18),T=w+(k^b&(I^k))+A[4]+3889429448&4294967295,w=I+(T<<20&4294967295|T>>>12),T=b+(I^k&(w^I))+A[9]+568446438&4294967295,b=w+(T<<5&4294967295|T>>>27),T=k+(w^I&(b^w))+A[14]+3275163606&4294967295,k=b+(T<<9&4294967295|T>>>23),T=I+(b^w&(k^b))+A[3]+4107603335&4294967295,I=k+(T<<14&4294967295|T>>>18),T=w+(k^b&(I^k))+A[8]+1163531501&4294967295,w=I+(T<<20&4294967295|T>>>12),T=b+(I^k&(w^I))+A[13]+2850285829&4294967295,b=w+(T<<5&4294967295|T>>>27),T=k+(w^I&(b^w))+A[2]+4243563512&4294967295,k=b+(T<<9&4294967295|T>>>23),T=I+(b^w&(k^b))+A[7]+1735328473&4294967295,I=k+(T<<14&4294967295|T>>>18),T=w+(k^b&(I^k))+A[12]+2368359562&4294967295,w=I+(T<<20&4294967295|T>>>12),T=b+(w^I^k)+A[5]+4294588738&4294967295,b=w+(T<<4&4294967295|T>>>28),T=k+(b^w^I)+A[8]+2272392833&4294967295,k=b+(T<<11&4294967295|T>>>21),T=I+(k^b^w)+A[11]+1839030562&4294967295,I=k+(T<<16&4294967295|T>>>16),T=w+(I^k^b)+A[14]+4259657740&4294967295,w=I+(T<<23&4294967295|T>>>9),T=b+(w^I^k)+A[1]+2763975236&4294967295,b=w+(T<<4&4294967295|T>>>28),T=k+(b^w^I)+A[4]+1272893353&4294967295,k=b+(T<<11&4294967295|T>>>21),T=I+(k^b^w)+A[7]+4139469664&4294967295,I=k+(T<<16&4294967295|T>>>16),T=w+(I^k^b)+A[10]+3200236656&4294967295,w=I+(T<<23&4294967295|T>>>9),T=b+(w^I^k)+A[13]+681279174&4294967295,b=w+(T<<4&4294967295|T>>>28),T=k+(b^w^I)+A[0]+3936430074&4294967295,k=b+(T<<11&4294967295|T>>>21),T=I+(k^b^w)+A[3]+3572445317&4294967295,I=k+(T<<16&4294967295|T>>>16),T=w+(I^k^b)+A[6]+76029189&4294967295,w=I+(T<<23&4294967295|T>>>9),T=b+(w^I^k)+A[9]+3654602809&4294967295,b=w+(T<<4&4294967295|T>>>28),T=k+(b^w^I)+A[12]+3873151461&4294967295,k=b+(T<<11&4294967295|T>>>21),T=I+(k^b^w)+A[15]+530742520&4294967295,I=k+(T<<16&4294967295|T>>>16),T=w+(I^k^b)+A[2]+3299628645&4294967295,w=I+(T<<23&4294967295|T>>>9),T=b+(I^(w|~k))+A[0]+4096336452&4294967295,b=w+(T<<6&4294967295|T>>>26),T=k+(w^(b|~I))+A[7]+1126891415&4294967295,k=b+(T<<10&4294967295|T>>>22),T=I+(b^(k|~w))+A[14]+2878612391&4294967295,I=k+(T<<15&4294967295|T>>>17),T=w+(k^(I|~b))+A[5]+4237533241&4294967295,w=I+(T<<21&4294967295|T>>>11),T=b+(I^(w|~k))+A[12]+1700485571&4294967295,b=w+(T<<6&4294967295|T>>>26),T=k+(w^(b|~I))+A[3]+2399980690&4294967295,k=b+(T<<10&4294967295|T>>>22),T=I+(b^(k|~w))+A[10]+4293915773&4294967295,I=k+(T<<15&4294967295|T>>>17),T=w+(k^(I|~b))+A[1]+2240044497&4294967295,w=I+(T<<21&4294967295|T>>>11),T=b+(I^(w|~k))+A[8]+1873313359&4294967295,b=w+(T<<6&4294967295|T>>>26),T=k+(w^(b|~I))+A[15]+4264355552&4294967295,k=b+(T<<10&4294967295|T>>>22),T=I+(b^(k|~w))+A[6]+2734768916&4294967295,I=k+(T<<15&4294967295|T>>>17),T=w+(k^(I|~b))+A[13]+1309151649&4294967295,w=I+(T<<21&4294967295|T>>>11),T=b+(I^(w|~k))+A[4]+4149444226&4294967295,b=w+(T<<6&4294967295|T>>>26),T=k+(w^(b|~I))+A[11]+3174756917&4294967295,k=b+(T<<10&4294967295|T>>>22),T=I+(b^(k|~w))+A[2]+718787259&4294967295,I=k+(T<<15&4294967295|T>>>17),T=w+(k^(I|~b))+A[9]+3951481745&4294967295,_.g[0]=_.g[0]+b&4294967295,_.g[1]=_.g[1]+(I+(T<<21&4294967295|T>>>11))&4294967295,_.g[2]=_.g[2]+I&4294967295,_.g[3]=_.g[3]+k&4294967295}r.prototype.v=function(_,b){b===void 0&&(b=_.length);const w=b-this.blockSize,A=this.C;let I=this.h,k=0;for(;k<b;){if(I==0)for(;k<=w;)s(this,_,k),k+=this.blockSize;if(typeof _=="string"){for(;k<b;)if(A[I++]=_.charCodeAt(k++),I==this.blockSize){s(this,A),I=0;break}}else for(;k<b;)if(A[I++]=_[k++],I==this.blockSize){s(this,A),I=0;break}}this.h=I,this.o+=b},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var b=1;b<_.length-8;++b)_[b]=0;b=this.o*8;for(var w=_.length-8;w<_.length;++w)_[w]=b&255,b/=256;for(this.v(_),_=Array(16),b=0,w=0;w<4;++w)for(let A=0;A<32;A+=8)_[b++]=this.g[w]>>>A&255;return _};function i(_,b){var w=c;return Object.prototype.hasOwnProperty.call(w,_)?w[_]:w[_]=b(_)}function o(_,b){this.h=b;const w=[];let A=!0;for(let I=_.length-1;I>=0;I--){const k=_[I]|0;A&&k==b||(w[I]=k,A=!1)}this.g=w}var c={};function l(_){return-128<=_&&_<128?i(_,function(b){return new o([b|0],b<0?-1:0)}):new o([_|0],_<0?-1:0)}function u(_){if(isNaN(_)||!isFinite(_))return p;if(_<0)return D(u(-_));const b=[];let w=1;for(let A=0;_>=w;A++)b[A]=_/w|0,w*=4294967296;return new o(b,0)}function d(_,b){if(_.length==0)throw Error("number format error: empty string");if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(_.charAt(0)=="-")return D(d(_.substring(1),b));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=u(Math.pow(b,8));let A=p;for(let k=0;k<_.length;k+=8){var I=Math.min(8,_.length-k);const T=parseInt(_.substring(k,k+I),b);I<8?(I=u(Math.pow(b,I)),A=A.j(I).add(u(T))):(A=A.j(w),A=A.add(u(T)))}return A}var p=l(0),m=l(1),E=l(16777216);n=o.prototype,n.m=function(){if(C(this))return-D(this).m();let _=0,b=1;for(let w=0;w<this.g.length;w++){const A=this.i(w);_+=(A>=0?A:4294967296+A)*b,b*=4294967296}return _},n.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(v(this))return"0";if(C(this))return"-"+D(this).toString(_);const b=u(Math.pow(_,6));var w=this;let A="";for(;;){const I=G(w,b).g;w=O(w,I.j(b));let k=((w.g.length>0?w.g[0]:w.h)>>>0).toString(_);if(w=I,v(w))return k+A;for(;k.length<6;)k="0"+k;A=k+A}},n.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function v(_){if(_.h!=0)return!1;for(let b=0;b<_.g.length;b++)if(_.g[b]!=0)return!1;return!0}function C(_){return _.h==-1}n.l=function(_){return _=O(this,_),C(_)?-1:v(_)?0:1};function D(_){const b=_.g.length,w=[];for(let A=0;A<b;A++)w[A]=~_.g[A];return new o(w,~_.h).add(m)}n.abs=function(){return C(this)?D(this):this},n.add=function(_){const b=Math.max(this.g.length,_.g.length),w=[];let A=0;for(let I=0;I<=b;I++){let k=A+(this.i(I)&65535)+(_.i(I)&65535),T=(k>>>16)+(this.i(I)>>>16)+(_.i(I)>>>16);A=T>>>16,k&=65535,T&=65535,w[I]=T<<16|k}return new o(w,w[w.length-1]&-2147483648?-1:0)};function O(_,b){return _.add(D(b))}n.j=function(_){if(v(this)||v(_))return p;if(C(this))return C(_)?D(this).j(D(_)):D(D(this).j(_));if(C(_))return D(this.j(D(_)));if(this.l(E)<0&&_.l(E)<0)return u(this.m()*_.m());const b=this.g.length+_.g.length,w=[];for(var A=0;A<2*b;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(let I=0;I<_.g.length;I++){const k=this.i(A)>>>16,T=this.i(A)&65535,Qe=_.i(I)>>>16,Rn=_.i(I)&65535;w[2*A+2*I]+=T*Rn,x(w,2*A+2*I),w[2*A+2*I+1]+=k*Rn,x(w,2*A+2*I+1),w[2*A+2*I+1]+=T*Qe,x(w,2*A+2*I+1),w[2*A+2*I+2]+=k*Qe,x(w,2*A+2*I+2)}for(_=0;_<b;_++)w[_]=w[2*_+1]<<16|w[2*_];for(_=b;_<2*b;_++)w[_]=0;return new o(w,0)};function x(_,b){for(;(_[b]&65535)!=_[b];)_[b+1]+=_[b]>>>16,_[b]&=65535,b++}function M(_,b){this.g=_,this.h=b}function G(_,b){if(v(b))throw Error("division by zero");if(v(_))return new M(p,p);if(C(_))return b=G(D(_),b),new M(D(b.g),D(b.h));if(C(b))return b=G(_,D(b)),new M(D(b.g),b.h);if(_.g.length>30){if(C(_)||C(b))throw Error("slowDivide_ only works with positive integers.");for(var w=m,A=b;A.l(_)<=0;)w=P(w),A=P(A);var I=F(w,1),k=F(A,1);for(A=F(A,2),w=F(w,2);!v(A);){var T=k.add(A);T.l(_)<=0&&(I=I.add(w),k=T),A=F(A,1),w=F(w,1)}return b=O(_,I.j(b)),new M(I,b)}for(I=p;_.l(b)>=0;){for(w=Math.max(1,Math.floor(_.m()/b.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),k=u(w),T=k.j(b);C(T)||T.l(_)>0;)w-=A,k=u(w),T=k.j(b);v(k)&&(k=m),I=I.add(k),_=O(_,T)}return new M(I,_)}n.B=function(_){return G(this,_).h},n.and=function(_){const b=Math.max(this.g.length,_.g.length),w=[];for(let A=0;A<b;A++)w[A]=this.i(A)&_.i(A);return new o(w,this.h&_.h)},n.or=function(_){const b=Math.max(this.g.length,_.g.length),w=[];for(let A=0;A<b;A++)w[A]=this.i(A)|_.i(A);return new o(w,this.h|_.h)},n.xor=function(_){const b=Math.max(this.g.length,_.g.length),w=[];for(let A=0;A<b;A++)w[A]=this.i(A)^_.i(A);return new o(w,this.h^_.h)};function P(_){const b=_.g.length+1,w=[];for(let A=0;A<b;A++)w[A]=_.i(A)<<1|_.i(A-1)>>>31;return new o(w,_.h)}function F(_,b){const w=b>>5;b%=32;const A=_.g.length-w,I=[];for(let k=0;k<A;k++)I[k]=b>0?_.i(k+w)>>>b|_.i(k+w+1)<<32-b:_.i(k+w);return new o(I,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Xg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,gn=o}).apply(typeof Td<"u"?Td:typeof self<"u"?self:typeof window<"u"?window:{});var xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zg,Ts,em,zi,Pc,tm,nm,rm;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof xi=="object"&&xi];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var R=a[g];if(!(R in f))break e;f=f[R]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var f=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&f.push([g,h[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,f){return a.call.apply(a.bind,arguments)}function u(a,h,f){return u=l,u.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,R,S){for(var U=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)U[ee-2]=arguments[ee];return h.prototype[R].apply(g,U)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function E(a){const h=a.length;if(h>0){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function v(a,h){for(let g=1;g<arguments.length;g++){const R=arguments[g];var f=typeof R;if(f=f!="object"?f:R?Array.isArray(R)?"array":f:"null",f=="array"||f=="object"&&typeof R.length=="number"){f=a.length||0;const S=R.length||0;a.length=f+S;for(let U=0;U<S;U++)a[f+U]=R[U]}else a.push(R)}}class C{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(a){o.setTimeout(()=>{throw a},0)}function O(){var a=_;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class x{constructor(){this.h=this.g=null}add(h,f){const g=M.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var M=new C(()=>new G,a=>a.reset());class G{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let P,F=!1,_=new x,b=()=>{const a=Promise.resolve(void 0);P=()=>{a.then(w)}};function w(){for(var a;a=O();){try{a.h.call(a.g)}catch(f){D(f)}var h=M;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}F=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var k=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a})();function T(a){return/^[\s\xa0]*$/.test(a)}function Qe(a,h){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Qe,I),Qe.prototype.init=function(a,h){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Qe.Z.h.call(this)},Qe.prototype.h=function(){Qe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Rn="closure_listenable_"+(Math.random()*1e6|0),E_=0;function v_(a,h,f,g,R){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=R,this.key=++E_,this.da=this.fa=!1}function pi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function gi(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function I_(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function xu(a){const h={};for(const f in a)h[f]=a[f];return h}const Vu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nu(a,h){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)a[f]=g[f];for(let S=0;S<Vu.length;S++)f=Vu[S],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function mi(a){this.src=a,this.g={},this.h=0}mi.prototype.add=function(a,h,f,g,R){const S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);const U=ha(a,h,g,R);return U>-1?(h=a[U],f||(h.fa=!1)):(h=new v_(h,this.src,S,!!g,R),h.fa=f,a.push(h)),h};function ua(a,h){const f=h.type;if(f in a.g){var g=a.g[f],R=Array.prototype.indexOf.call(g,h,void 0),S;(S=R>=0)&&Array.prototype.splice.call(g,R,1),S&&(pi(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ha(a,h,f,g){for(let R=0;R<a.length;++R){const S=a[R];if(!S.da&&S.listener==h&&S.capture==!!f&&S.ha==g)return R}return-1}var da="closure_lm_"+(Math.random()*1e6|0),fa={};function Du(a,h,f,g,R){if(Array.isArray(h)){for(let S=0;S<h.length;S++)Du(a,h[S],f,g,R);return null}return f=Mu(f),a&&a[Rn]?a.J(h,f,c(g)?!!g.capture:!1,R):A_(a,h,f,!1,g,R)}function A_(a,h,f,g,R,S){if(!h)throw Error("Invalid event type");const U=c(R)?!!R.capture:!!R;let ee=ga(a);if(ee||(a[da]=ee=new mi(a)),f=ee.add(h,f,g,U,S),f.proxy)return f;if(g=C_(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)k||(R=U),R===void 0&&(R=!1),a.addEventListener(h.toString(),g,R);else if(a.attachEvent)a.attachEvent(Lu(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function C_(){function a(f){return h.call(a.src,a.listener,f)}const h=R_;return a}function Ou(a,h,f,g,R){if(Array.isArray(h))for(var S=0;S<h.length;S++)Ou(a,h[S],f,g,R);else g=c(g)?!!g.capture:!!g,f=Mu(f),a&&a[Rn]?(a=a.i,S=String(h).toString(),S in a.g&&(h=a.g[S],f=ha(h,f,g,R),f>-1&&(pi(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[S],a.h--)))):a&&(a=ga(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ha(h,f,g,R)),(f=a>-1?h[a]:null)&&pa(f))}function pa(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Rn])ua(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(Lu(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=ga(h))?(ua(f,a),f.h==0&&(f.src=null,h[da]=null)):pi(a)}}}function Lu(a){return a in fa?fa[a]:fa[a]="on"+a}function R_(a,h){if(a.da)a=!0;else{h=new Qe(h,this);const f=a.listener,g=a.ha||a.src;a.fa&&pa(a),a=f.call(g,h)}return a}function ga(a){return a=a[da],a instanceof mi?a:null}var ma="__closure_events_fn_"+(Math.random()*1e9>>>0);function Mu(a){return typeof a=="function"?a:(a[ma]||(a[ma]=function(h){return a.handleEvent(h)}),a[ma])}function Fe(){A.call(this),this.i=new mi(this),this.M=this,this.G=null}p(Fe,A),Fe.prototype[Rn]=!0,Fe.prototype.removeEventListener=function(a,h,f,g){Ou(this,a,h,f,g)};function Je(a,h){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new I(h,a);else if(h instanceof I)h.target=h.target||a;else{var R=h;h=new I(g,a),Nu(h,R)}R=!0;let S,U;if(f)for(U=f.length-1;U>=0;U--)S=h.g=f[U],R=yi(S,g,!0,h)&&R;if(S=h.g=a,R=yi(S,g,!0,h)&&R,R=yi(S,g,!1,h)&&R,f)for(U=0;U<f.length;U++)S=h.g=f[U],R=yi(S,g,!1,h)&&R}Fe.prototype.N=function(){if(Fe.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let g=0;g<f.length;g++)pi(f[g]);delete a.g[h],a.h--}}this.G=null},Fe.prototype.J=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},Fe.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function yi(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let R=!0;for(let S=0;S<h.length;++S){const U=h[S];if(U&&!U.da&&U.capture==f){const ee=U.listener,Se=U.ha||U.src;U.fa&&ua(a.i,U),R=ee.call(Se,g)!==!1&&R}}return R&&!g.defaultPrevented}function k_(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Uu(a){a.g=k_(()=>{a.g=null,a.i&&(a.i=!1,Uu(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class S_ extends A{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Uu(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function es(a){A.call(this),this.h=a,this.g={}}p(es,A);var Fu=[];function ju(a){gi(a.g,function(h,f){this.g.hasOwnProperty(f)&&pa(h)},a),a.g={}}es.prototype.N=function(){es.Z.N.call(this),ju(this)},es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ya=o.JSON.stringify,P_=o.JSON.parse,x_=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Bu(){}function $u(){}var ts={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function _a(){I.call(this,"d")}p(_a,I);function ba(){I.call(this,"c")}p(ba,I);var kn={},Hu=null;function _i(){return Hu=Hu||new Fe}kn.Ia="serverreachability";function qu(a){I.call(this,kn.Ia,a)}p(qu,I);function ns(a){const h=_i();Je(h,new qu(h))}kn.STAT_EVENT="statevent";function zu(a,h){I.call(this,kn.STAT_EVENT,a),this.stat=h}p(zu,I);function Ke(a){const h=_i();Je(h,new zu(h,a))}kn.Ja="timingevent";function Gu(a,h){I.call(this,kn.Ja,a),this.size=h}p(Gu,I);function rs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ss(){this.g=!0}ss.prototype.ua=function(){this.g=!1};function V_(a,h,f,g,R,S){a.info(function(){if(a.g)if(S){var U="",ee=S.split("&");for(let de=0;de<ee.length;de++){var Se=ee[de].split("=");if(Se.length>1){const xe=Se[0];Se=Se[1];const Tt=xe.split("_");U=Tt.length>=2&&Tt[1]=="type"?U+(xe+"="+Se+"&"):U+(xe+"=redacted&")}}}else U=null;else U=S;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+h+`
`+f+`
`+U})}function N_(a,h,f,g,R,S,U){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+h+`
`+f+`
`+S+" "+U})}function hr(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+O_(a,f)+(g?" "+g:"")})}function D_(a,h){a.info(function(){return"TIMEOUT: "+h})}ss.prototype.info=function(){};function O_(a,h){if(!a.g)return h;if(!h)return null;try{const S=JSON.parse(h);if(S){for(a=0;a<S.length;a++)if(Array.isArray(S[a])){var f=S[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var R=g[0];if(R!="noop"&&R!="stop"&&R!="close")for(let U=1;U<g.length;U++)g[U]=""}}}}return ya(S)}catch{return h}}var bi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Wu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ju;function wa(){}p(wa,Bu),wa.prototype.g=function(){return new XMLHttpRequest},Ju=new wa;function is(a){return encodeURIComponent(String(a))}function L_(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function Wt(a,h,f,g){this.j=a,this.i=h,this.l=f,this.S=g||1,this.V=new es(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ku}function Ku(){this.i=null,this.g="",this.h=!1}var Qu={},Ta={};function Ea(a,h,f){a.M=1,a.A=Ti(wt(h)),a.u=f,a.R=!0,Yu(a,null)}function Yu(a,h){a.F=Date.now(),wi(a),a.B=wt(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),uh(f.i,"t",g),a.C=0,f=a.j.L,a.h=new Ku,a.g=kh(a.j,f?h:null,!a.u),a.P>0&&(a.O=new S_(u(a.Y,a,a.g),a.P)),h=a.V,f=a.g,g=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(Fu[0]=R.toString()),R=Fu);for(let S=0;S<R.length;S++){const U=Du(f,R[S],g||h.handleEvent,!1,h.h||h);if(!U)break;h.g[U.key]=U}h=a.J?xu(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),ns(),V_(a.i,a.v,a.B,a.l,a.S,a.u)}Wt.prototype.ba=function(a){a=a.target;const h=this.O;h&&Qt(a)==3?h.j():this.Y(a)},Wt.prototype.Y=function(a){try{if(a==this.g)e:{const ee=Qt(this.g),Se=this.g.ya(),de=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||yh(this.g)))){this.K||ee!=4||Se==7||(Se==8||de<=0?ns(3):ns(2)),va(this);var h=this.g.ca();this.X=h;var f=M_(this);if(this.o=h==200,N_(this.i,this.v,this.B,this.l,this.S,ee,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,R=this.g;if((g=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var S=g;break t}}S=null}if(a=S)hr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ia(this,a);else{this.o=!1,this.m=3,Ke(12),Sn(this),os(this);break e}}if(this.R){a=!0;let xe;for(;!this.K&&this.C<f.length;)if(xe=U_(this,f),xe==Ta){ee==4&&(this.m=4,Ke(14),a=!1),hr(this.i,this.l,null,"[Incomplete Response]");break}else if(xe==Qu){this.m=4,Ke(15),hr(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else hr(this.i,this.l,xe,null),Ia(this,xe);if(Xu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||f.length!=0||this.h.h||(this.m=1,Ke(16),a=!1),this.o=this.o&&a,!a)hr(this.i,this.l,f,"[Invalid Chunked Response]"),Sn(this),os(this);else if(f.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Va(U),U.P=!0,Ke(11))}}else hr(this.i,this.l,f,null),Ia(this,f);ee==4&&Sn(this),this.o&&!this.K&&(ee==4?Ih(this.j,this):(this.o=!1,wi(this)))}else X_(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,Ke(12)):(this.m=0,Ke(13)),Sn(this),os(this)}}}catch{}finally{}};function M_(a){if(!Xu(a))return a.g.la();const h=yh(a.g);if(h==="")return"";let f="";const g=h.length,R=Qt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Sn(a),os(a),"";a.h.i=new o.TextDecoder}for(let S=0;S<g;S++)a.h.h=!0,f+=a.h.i.decode(h[S],{stream:!(R&&S==g-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function Xu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function U_(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Ta:(f=Number(h.substring(f,g)),isNaN(f)?Qu:(g+=1,g+f>h.length?Ta:(h=h.slice(g,g+f),a.C=g+f,h)))}Wt.prototype.cancel=function(){this.K=!0,Sn(this)};function wi(a){a.T=Date.now()+a.H,Zu(a,a.H)}function Zu(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=rs(u(a.aa,a),h)}function va(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Wt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(D_(this.i,this.B),this.M!=2&&(ns(),Ke(17)),Sn(this),this.m=2,os(this)):Zu(this,this.T-a)};function os(a){a.j.I==0||a.K||Ih(a.j,a)}function Sn(a){va(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,ju(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Ia(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||Aa(f.h,a))){if(!a.L&&Aa(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Ci(f),Ii(f);else break e;xa(f),Ke(18)}}else f.xa=R[1],0<f.xa-f.K&&R[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=rs(u(f.Va,f),6e3));nh(f.h)<=1&&f.ta&&(f.ta=void 0)}else xn(f,11)}else if((a.L||f.g==a)&&Ci(f),!T(h))for(R=f.Ba.g.parse(h),h=0;h<R.length;h++){let de=R[h];const xe=de[0];if(!(xe<=f.K))if(f.K=xe,de=de[1],f.I==2)if(de[0]=="c"){f.M=de[1],f.ba=de[2];const Tt=de[3];Tt!=null&&(f.ka=Tt,f.j.info("VER="+f.ka));const Vn=de[4];Vn!=null&&(f.za=Vn,f.j.info("SVER="+f.za));const Yt=de[5];Yt!=null&&typeof Yt=="number"&&Yt>0&&(g=1.5*Yt,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Xt=a.g;if(Xt){const ki=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ki){var S=g.h;S.g||ki.indexOf("spdy")==-1&&ki.indexOf("quic")==-1&&ki.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Ca(S,S.h),S.h=null))}if(g.G){const Na=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;Na&&(g.wa=Na,pe(g.J,g.G,Na))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var U=a;if(g.na=Rh(g,g.L?g.ba:null,g.W),U.L){rh(g.h,U);var ee=U,Se=g.O;Se&&(ee.H=Se),ee.D&&(va(ee),wi(ee)),g.g=U}else Eh(g);f.i.length>0&&Ai(f)}else de[0]!="stop"&&de[0]!="close"||xn(f,7);else f.I==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?xn(f,7):Pa(f):de[0]!="noop"&&f.l&&f.l.qa(de),f.A=0)}}ns(4)}catch{}}var F_=class{constructor(a,h){this.g=a,this.map=h}};function eh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function th(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function nh(a){return a.h?1:a.g?a.g.size:0}function Aa(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ca(a,h){a.g?a.g.add(h):a.h=h}function rh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}eh.prototype.cancel=function(){if(this.i=sh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function sh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return E(a.i)}var ih=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function j_(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let R,S=null;g>=0?(R=a[f].substring(0,g),S=a[f].substring(g+1)):R=a[f],h(R,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Jt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Jt?(this.l=a.l,as(this,a.j),this.o=a.o,this.g=a.g,cs(this,a.u),this.h=a.h,Ra(this,hh(a.i)),this.m=a.m):a&&(h=String(a).match(ih))?(this.l=!1,as(this,h[1]||"",!0),this.o=ls(h[2]||""),this.g=ls(h[3]||"",!0),cs(this,h[4]),this.h=ls(h[5]||"",!0),Ra(this,h[6]||"",!0),this.m=ls(h[7]||"")):(this.l=!1,this.i=new hs(null,this.l))}Jt.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(us(h,oh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(us(h,oh,!0),"@"),a.push(is(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(us(f,f.charAt(0)=="/"?H_:$_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",us(f,z_)),a.join("")},Jt.prototype.resolve=function(a){const h=wt(this);let f=!!a.j;f?as(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var g=a.h;if(f)cs(h,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var R=h.h.lastIndexOf("/");R!=-1&&(g=h.h.slice(0,R+1)+g)}if(R=g,R==".."||R==".")g="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){g=R.lastIndexOf("/",0)==0,R=R.split("/");const S=[];for(let U=0;U<R.length;){const ee=R[U++];ee=="."?g&&U==R.length&&S.push(""):ee==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),g&&U==R.length&&S.push("")):(S.push(ee),g=!0)}g=S.join("/")}else g=R}return f?h.h=g:f=a.i.toString()!=="",f?Ra(h,hh(a.i)):f=!!a.m,f&&(h.m=a.m),h};function wt(a){return new Jt(a)}function as(a,h,f){a.j=f?ls(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function cs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Ra(a,h,f){h instanceof hs?(a.i=h,G_(a.i,a.l)):(f||(h=us(h,q_)),a.i=new hs(h,a.l))}function pe(a,h,f){a.i.set(h,f)}function Ti(a){return pe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ls(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function us(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,B_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function B_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var oh=/[#\/\?@]/g,$_=/[#\?:]/g,H_=/[#\?]/g,q_=/[#\?@]/g,z_=/#/g;function hs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Pn(a){a.g||(a.g=new Map,a.h=0,a.i&&j_(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=hs.prototype,n.add=function(a,h){Pn(this),this.i=null,a=dr(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function ah(a,h){Pn(a),h=dr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function ch(a,h){return Pn(a),h=dr(a,h),a.g.has(h)}n.forEach=function(a,h){Pn(this),this.g.forEach(function(f,g){f.forEach(function(R){a.call(h,R,g,this)},this)},this)};function lh(a,h){Pn(a);let f=[];if(typeof h=="string")ch(a,h)&&(f=f.concat(a.g.get(dr(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}n.set=function(a,h){return Pn(this),this.i=null,a=dr(this,a),ch(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=lh(this,a),a.length>0?String(a[0]):h):h};function uh(a,h,f){ah(a,h),f.length>0&&(a.i=null,a.g.set(dr(a,h),E(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var f=h[g];const R=is(f);f=lh(this,f);for(let S=0;S<f.length;S++){let U=R;f[S]!==""&&(U+="="+is(f[S])),a.push(U)}}return this.i=a.join("&")};function hh(a){const h=new hs;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function dr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function G_(a,h){h&&!a.j&&(Pn(a),a.i=null,a.g.forEach(function(f,g){const R=g.toLowerCase();g!=R&&(ah(this,g),uh(this,R,f))},a)),a.j=h}function W_(a,h){const f=new ss;if(o.Image){const g=new Image;g.onload=d(Kt,f,"TestLoadImage: loaded",!0,h,g),g.onerror=d(Kt,f,"TestLoadImage: error",!1,h,g),g.onabort=d(Kt,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(Kt,f,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function J_(a,h){const f=new ss,g=new AbortController,R=setTimeout(()=>{g.abort(),Kt(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(S=>{clearTimeout(R),S.ok?Kt(f,"TestPingServer: ok",!0,h):Kt(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),Kt(f,"TestPingServer: error",!1,h)})}function Kt(a,h,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function K_(){this.g=new x_}function ka(a){this.i=a.Sb||null,this.h=a.ab||!1}p(ka,Bu),ka.prototype.g=function(){return new Ei(this.i,this.h)};function Ei(a,h){Fe.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Ei,Fe),n=Ei.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,fs(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ds(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,fs(this)),this.g&&(this.readyState=3,fs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;dh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function dh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ds(this):fs(this),this.readyState==3&&dh(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,ds(this))},n.Na=function(a){this.g&&(this.response=a,ds(this))},n.ga=function(){this.g&&ds(this)};function ds(a){a.readyState=4,a.l=null,a.j=null,a.B=null,fs(a)}n.setRequestHeader=function(a,h){this.A.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function fs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function fh(a){let h="";return gi(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Sa(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=fh(f),typeof a=="string"?f!=null&&is(f):pe(a,h,f))}function Ee(a){Fe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ee,Fe);var Q_=/^https?$/i,Y_=["POST","PUT"];n=Ee.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ju.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(S){ph(this,S);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const S of g.keys())f.set(S,g.get(S));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(S=>S.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Y_,h,void 0)>=0)||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,U]of f)this.g.setRequestHeader(S,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(S){ph(this,S)}};function ph(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,gh(a),vi(a)}function gh(a){a.A||(a.A=!0,Je(a,"complete"),Je(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Je(this,"complete"),Je(this,"abort"),vi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vi(this,!0)),Ee.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?mh(this):this.Xa())},n.Xa=function(){mh(this)};function mh(a){if(a.h&&typeof i<"u"){if(a.v&&Qt(a)==4)setTimeout(a.Ca.bind(a),0);else if(Je(a,"readystatechange"),Qt(a)==4){a.h=!1;try{const S=a.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=S===0){let U=String(a.D).match(ih)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),g=!Q_.test(U?U.toLowerCase():"")}f=g}if(f)Je(a,"complete"),Je(a,"success");else{a.o=6;try{var R=Qt(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",gh(a)}}finally{vi(a)}}}}function vi(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||Je(a,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Qt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Qt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),P_(h)}};function yh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function X_(a){const h={};a=(a.g&&Qt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var f=L_(a[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const S=h[R]||[];h[R]=S,S.push(f)}I_(h,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ps(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function _h(a){this.za=0,this.i=[],this.j=new ss,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ps("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ps("baseRetryDelayMs",5e3,a),this.Za=ps("retryDelaySeedMs",1e4,a),this.Ta=ps("forwardChannelMaxRetries",2,a),this.va=ps("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new eh(a&&a.concurrentRequestLimit),this.Ba=new K_,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=_h.prototype,n.ka=8,n.I=1,n.connect=function(a,h,f,g){Ke(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Rh(this,null,this.W),Ai(this)};function Pa(a){if(bh(a),a.I==3){var h=a.V++,f=wt(a.J);if(pe(f,"SID",a.M),pe(f,"RID",h),pe(f,"TYPE","terminate"),gs(a,f),h=new Wt(a,a.j,h),h.M=2,h.A=Ti(wt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=kh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),wi(h)}Ch(a)}function Ii(a){a.g&&(Va(a),a.g.cancel(),a.g=null)}function bh(a){Ii(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ci(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ai(a){if(!th(a.h)&&!a.m){a.m=!0;var h=a.Ea;P||b(),F||(P(),F=!0),_.add(h,a),a.D=0}}function Z_(a,h){return nh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=rs(u(a.Ea,a,h),Ah(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new Wt(this,this.j,a);let S=this.o;if(this.U&&(S?(S=xu(S),Nu(S,this.U)):S=this.U),this.u!==null||this.R||(R.J=S,S=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Th(this,R,h),f=wt(this.J),pe(f,"RID",a),pe(f,"CVER",22),this.G&&pe(f,"X-HTTP-Session-Id",this.G),gs(this,f),S&&(this.R?h="headers="+is(fh(S))+"&"+h:this.u&&Sa(f,this.u,S)),Ca(this.h,R),this.Ra&&pe(f,"TYPE","init"),this.S?(pe(f,"$req",h),pe(f,"SID","null"),R.U=!0,Ea(R,f,null)):Ea(R,f,h),this.I=2}}else this.I==3&&(a?wh(this,a):this.i.length==0||th(this.h)||wh(this))};function wh(a,h){var f;h?f=h.l:f=a.V++;const g=wt(a.J);pe(g,"SID",a.M),pe(g,"RID",f),pe(g,"AID",a.K),gs(a,g),a.u&&a.o&&Sa(g,a.u,a.o),f=new Wt(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Th(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ca(a.h,f),Ea(f,g,h)}function gs(a,h){a.H&&gi(a.H,function(f,g){pe(h,g,f)}),a.l&&gi({},function(f,g){pe(h,g,f)})}function Th(a,h,f){f=Math.min(a.i.length,f);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var R=a.i;let ee=-1;for(;;){const Se=["count="+f];ee==-1?f>0?(ee=R[0].g,Se.push("ofs="+ee)):ee=0:Se.push("ofs="+ee);let de=!0;for(let xe=0;xe<f;xe++){var S=R[xe].g;const Tt=R[xe].map;if(S-=ee,S<0)ee=Math.max(0,R[xe].g-100),de=!1;else try{S="req"+S+"_"||"";try{var U=Tt instanceof Map?Tt:Object.entries(Tt);for(const[Vn,Yt]of U){let Xt=Yt;c(Yt)&&(Xt=ya(Yt)),Se.push(S+Vn+"="+encodeURIComponent(Xt))}}catch(Vn){throw Se.push(S+"type="+encodeURIComponent("_badmap")),Vn}}catch{g&&g(Tt)}}if(de){U=Se.join("&");break e}}U=void 0}return a=a.i.splice(0,f),h.G=a,U}function Eh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;P||b(),F||(P(),F=!0),_.add(h,a),a.A=0}}function xa(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=rs(u(a.Da,a),Ah(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,vh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=rs(u(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ke(10),Ii(this),vh(this))};function Va(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function vh(a){a.g=new Wt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=wt(a.na);pe(h,"RID","rpc"),pe(h,"SID",a.M),pe(h,"AID",a.K),pe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&pe(h,"TO",a.ia),pe(h,"TYPE","xmlhttp"),gs(a,h),a.u&&a.o&&Sa(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Ti(wt(h)),f.u=null,f.R=!0,Yu(f,a)}n.Va=function(){this.C!=null&&(this.C=null,Ii(this),xa(this),Ke(19))};function Ci(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Ih(a,h){var f=null;if(a.g==h){Ci(a),Va(a),a.g=null;var g=2}else if(Aa(a.h,h))f=h.G,rh(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var R=a.D;g=_i(),Je(g,new Gu(g,f)),Ai(a)}else Eh(a);else if(R=h.m,R==3||R==0&&h.X>0||!(g==1&&Z_(a,h)||g==2&&xa(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),R){case 1:xn(a,5);break;case 4:xn(a,10);break;case 3:xn(a,6);break;default:xn(a,2)}}}function Ah(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function xn(a,h){if(a.j.info("Error code "+h),h==2){var f=u(a.bb,a),g=a.Ua;const R=!g;g=new Jt(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||as(g,"https"),Ti(g),R?W_(g.toString(),f):J_(g.toString(),f)}else Ke(2);a.I=0,a.l&&a.l.pa(h),Ch(a),bh(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function Ch(a){if(a.I=0,a.ja=[],a.l){const h=sh(a.h);(h.length!=0||a.i.length!=0)&&(v(a.ja,h),v(a.ja,a.i),a.h.i.length=0,E(a.i),a.i.length=0),a.l.oa()}}function Rh(a,h,f){var g=f instanceof Jt?wt(f):new Jt(f);if(g.g!="")h&&(g.g=h+"."+g.g),cs(g,g.u);else{var R=o.location;g=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;const S=new Jt(null);g&&as(S,g),h&&(S.g=h),R&&cs(S,R),f&&(S.h=f),g=S}return f=a.G,h=a.wa,f&&h&&pe(g,f,h),pe(g,"VER",a.ka),gs(a,g),g}function kh(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ee(new ka({ab:f})):new Ee(a.ma),h.Fa(a.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sh(){}n=Sh.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ri(){}Ri.prototype.g=function(a,h){return new Xe(a,h)};function Xe(a,h){Fe.call(this),this.g=new _h(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!T(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new fr(this)}p(Xe,Fe),Xe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Xe.prototype.close=function(){Pa(this.g)},Xe.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=ya(a),a=f);h.i.push(new F_(h.Ya++,a)),h.I==3&&Ai(h)},Xe.prototype.N=function(){this.g.l=null,delete this.j,Pa(this.g),delete this.g,Xe.Z.N.call(this)};function Ph(a){_a.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Ph,_a);function xh(){ba.call(this),this.status=1}p(xh,ba);function fr(a){this.g=a}p(fr,Sh),fr.prototype.ra=function(){Je(this.g,"a")},fr.prototype.qa=function(a){Je(this.g,new Ph(a))},fr.prototype.pa=function(a){Je(this.g,new xh)},fr.prototype.oa=function(){Je(this.g,"b")},Ri.prototype.createWebChannel=Ri.prototype.g,Xe.prototype.send=Xe.prototype.o,Xe.prototype.open=Xe.prototype.m,Xe.prototype.close=Xe.prototype.close,rm=function(){return new Ri},nm=function(){return _i()},tm=kn,Pc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},bi.NO_ERROR=0,bi.TIMEOUT=8,bi.HTTP_ERROR=6,zi=bi,Wu.COMPLETE="complete",em=Wu,$u.EventType=ts,ts.OPEN="a",ts.CLOSE="b",ts.ERROR="c",ts.MESSAGE="d",Fe.prototype.listen=Fe.prototype.J,Ts=$u,Ee.prototype.listenOnce=Ee.prototype.K,Ee.prototype.getLastError=Ee.prototype.Ha,Ee.prototype.getLastErrorCode=Ee.prototype.ya,Ee.prototype.getStatus=Ee.prototype.ca,Ee.prototype.getResponseJson=Ee.prototype.La,Ee.prototype.getResponseText=Ee.prototype.la,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Fa,Zg=Ee}).apply(typeof xi<"u"?xi:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class $e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
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
 */let Kr="12.8.0";function w1(n){Kr=n}/**
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
 */const er=new ml("@firebase/firestore");function Ir(){return er.logLevel}function B(n,...e){if(er.logLevel<=re.DEBUG){const t=e.map(Pl);er.debug(`Firestore (${Kr}): ${n}`,...t)}}function Bt(n,...e){if(er.logLevel<=re.ERROR){const t=e.map(Pl);er.error(`Firestore (${Kr}): ${n}`,...t)}}function Mr(n,...e){if(er.logLevel<=re.WARN){const t=e.map(Pl);er.warn(`Firestore (${Kr}): ${n}`,...t)}}function Pl(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function W(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,sm(n,r,t)}function sm(n,e,t){let r=`FIRESTORE (${Kr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Bt(r),new Error(r)}function le(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||sm(e,s,r)}function X(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Gt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Lt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class im{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class T1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t($e.UNAUTHENTICATED)))}shutdown(){}}class E1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class v1{constructor(e){this.t=e,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){le(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Lt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Lt,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Lt)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string",31837,{l:r}),new im(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string",2055,{h:e}),new $e(e)}}class I1{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class A1{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new I1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t($e.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ed{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class C1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,nt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){le(this.o===void 0,3512);const r=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ed(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(le(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ed(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function R1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class xl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=R1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function se(n,e){return n<e?-1:n>e?1:0}function xc(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return qa(s)===qa(i)?se(s,i):qa(s)?1:-1}return se(n.length,e.length)}const k1=55296,S1=57343;function qa(n){const e=n.charCodeAt(0);return e>=k1&&e<=S1}function Ur(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const vd="__name__";class Et{constructor(e,t,r){t===void 0?t=0:t>e.length&&W(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&W(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Et.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Et?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Et.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return se(e.length,t.length)}static compareSegments(e,t){const r=Et.isNumericId(e),s=Et.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Et.extractNumericId(e).compare(Et.extractNumericId(t)):xc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gn.fromString(e.substring(4,e.length-2))}}class fe extends Et{construct(e,t,r){return new fe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new fe(t)}static emptyPath(){return new fe([])}}const P1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Le extends Et{construct(e,t,r){return new Le(e,t,r)}static isValidIdentifier(e){return P1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Le.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vd}static keyField(){return new Le([vd])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new j(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new j(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Le(t)}static emptyPath(){return new Le([])}}/**
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
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(fe.fromString(e))}static fromName(e){return new z(fe.fromString(e).popFirst(5))}static empty(){return new z(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return fe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new fe(e.slice()))}}/**
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
 */function om(n,e,t){if(!t)throw new j(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function x1(n,e,t,r){if(e===!0&&r===!0)throw new j(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Id(n){if(!z.isDocumentKey(n))throw new j(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ad(n){if(z.isDocumentKey(n))throw new j(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function am(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function $o(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W(12329,{type:typeof n})}function ot(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$o(n);throw new j(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ke(n,e){const t={typeString:n};return e&&(t.value=e),t}function si(n,e){if(!am(n))throw new j(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new j(V.INVALID_ARGUMENT,t);return!0}/**
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
 */const Cd=-62135596800,Rd=1e6;class ge{static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Rd);return new ge(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Cd)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rd}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(si(e,ge._jsonSchema))return new ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Cd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ge._jsonSchemaVersion="firestore/timestamp/1.0",ge._jsonSchema={type:ke("string",ge._jsonSchemaVersion),seconds:ke("number"),nanoseconds:ke("number")};/**
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
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new ge(0,0))}static max(){return new Y(new ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Fs=-1;function V1(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new ge(t+1,0):new ge(t,r));return new yn(s,z.empty(),e)}function N1(n){return new yn(n.readTime,n.key,Fs)}class yn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new yn(Y.min(),z.empty(),Fs)}static max(){return new yn(Y.max(),z.empty(),Fs)}}function D1(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(n.documentKey,e.documentKey),t!==0?t:se(n.largestBatchId,e.largestBatchId))}/**
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
 */const O1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class L1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Qr(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==O1)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):N.reject(t)}static resolve(e){return new N(((t,r)=>{t(e)}))}static reject(e){return new N(((t,r)=>{r(e)}))}static waitFor(e){return new N(((t,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&t()}),(l=>r(l)))})),o=!0,i===s&&t()}))}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next((s=>s?N.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new N(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next((d=>{o[u]=d,++c,c===i&&r(o)}),(d=>s(d)))}}))}static doWhile(e,t){return new N(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function M1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Yr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ho{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ho.ce=-1;/**
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
 */const Vl=-1;function qo(n){return n==null}function ho(n){return n===0&&1/n==-1/0}function U1(n){return typeof n=="number"&&Number.isInteger(n)&&!ho(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const cm="";function F1(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=kd(e)),e=j1(n.get(t),e);return kd(e)}function j1(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case cm:t+="";break;default:t+=i}}return t}function kd(n){return n+cm+""}/**
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
 */function Sd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function sr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function lm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Te{constructor(e,t){this.comparator=e,this.root=t||Oe.EMPTY}insert(e,t){return new Te(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vi(this.root,e,this.comparator,!0)}}class Vi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Oe.RED,this.left=s??Oe.EMPTY,this.right=i??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Oe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Oe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pe{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Pd(this.data.getIterator())}getIteratorFrom(e){return new Pd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Pe(this.comparator);return t.data=e,t}}class Pd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ut{constructor(e){this.fields=e,e.sort(Le.comparator)}static empty(){return new ut([])}unionWith(e){let t=new Pe(Le.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ut(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ur(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class um extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ue{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new um("Invalid base64 string: "+i):i}})(e);return new Ue(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Ue(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const B1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _n(n){if(le(!!n,39018),typeof n=="string"){let e=0;const t=B1.exec(n);if(le(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(n.seconds),nanos:Ie(n.nanos)}}function Ie(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function bn(n){return typeof n=="string"?Ue.fromBase64String(n):Ue.fromUint8Array(n)}/**
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
 */const hm="server_timestamp",dm="__type__",fm="__previous_value__",pm="__local_write_time__";function Nl(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[dm])==null?void 0:r.stringValue)===hm}function zo(n){const e=n.mapValue.fields[fm];return Nl(e)?zo(e):e}function js(n){const e=_n(n.mapValue.fields[pm].timestampValue);return new ge(e.seconds,e.nanos)}/**
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
 */class $1{constructor(e,t,r,s,i,o,c,l,u,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=d,this.apiKey=p}}const fo="(default)";class Bs{constructor(e,t){this.projectId=e,this.database=t||fo}static empty(){return new Bs("","")}get isDefaultDatabase(){return this.database===fo}isEqual(e){return e instanceof Bs&&e.projectId===this.projectId&&e.database===this.database}}function H1(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new j(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bs(n.options.projectId,e)}/**
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
 */const gm="__type__",q1="__max__",Ni={mapValue:{}},mm="__vector__",po="value";function wn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Nl(n)?4:G1(n)?9007199254740991:z1(n)?10:11:W(28295,{value:n})}function St(n,e){if(n===e)return!0;const t=wn(n);if(t!==wn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return js(n).isEqual(js(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=_n(s.timestampValue),c=_n(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return bn(s.bytesValue).isEqual(bn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ie(s.geoPointValue.latitude)===Ie(i.geoPointValue.latitude)&&Ie(s.geoPointValue.longitude)===Ie(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ie(s.integerValue)===Ie(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ie(s.doubleValue),c=Ie(i.doubleValue);return o===c?ho(o)===ho(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return Ur(n.arrayValue.values||[],e.arrayValue.values||[],St);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Sd(o)!==Sd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!St(o[l],c[l])))return!1;return!0})(n,e);default:return W(52216,{left:n})}}function $s(n,e){return(n.values||[]).find((t=>St(t,e)))!==void 0}function Fr(n,e){if(n===e)return 0;const t=wn(n),r=wn(e);if(t!==r)return se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return se(n.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=Ie(i.integerValue||i.doubleValue),l=Ie(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return xd(n.timestampValue,e.timestampValue);case 4:return xd(js(n),js(e));case 5:return xc(n.stringValue,e.stringValue);case 6:return(function(i,o){const c=bn(i),l=bn(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const d=se(c[u],l[u]);if(d!==0)return d}return se(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=se(Ie(i.latitude),Ie(o.latitude));return c!==0?c:se(Ie(i.longitude),Ie(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Vd(n.arrayValue,e.arrayValue);case 10:return(function(i,o){var m,E,v,C;const c=i.fields||{},l=o.fields||{},u=(m=c[po])==null?void 0:m.arrayValue,d=(E=l[po])==null?void 0:E.arrayValue,p=se(((v=u==null?void 0:u.values)==null?void 0:v.length)||0,((C=d==null?void 0:d.values)==null?void 0:C.length)||0);return p!==0?p:Vd(u,d)})(n.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Ni.mapValue&&o===Ni.mapValue)return 0;if(i===Ni.mapValue)return 1;if(o===Ni.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=xc(l[p],d[p]);if(m!==0)return m;const E=Fr(c[l[p]],u[d[p]]);if(E!==0)return E}return se(l.length,d.length)})(n.mapValue,e.mapValue);default:throw W(23264,{he:t})}}function xd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return se(n,e);const t=_n(n),r=_n(e),s=se(t.seconds,r.seconds);return s!==0?s:se(t.nanos,r.nanos)}function Vd(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Fr(t[s],r[s]);if(i)return i}return se(t.length,r.length)}function jr(n){return Vc(n)}function Vc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=_n(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return bn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return z.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Vc(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Vc(t.fields[o])}`;return s+"}"})(n.mapValue):W(61005,{value:n})}function Gi(n){switch(wn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zo(n);return e?16+Gi(e):16;case 5:return 2*n.stringValue.length;case 6:return bn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Gi(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return sr(r.fields,((i,o)=>{s+=i.length+Gi(o)})),s})(n.mapValue);default:throw W(13486,{value:n})}}function Nd(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Nc(n){return!!n&&"integerValue"in n}function Dl(n){return!!n&&"arrayValue"in n}function Dd(n){return!!n&&"nullValue"in n}function Od(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Wi(n){return!!n&&"mapValue"in n}function z1(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[gm])==null?void 0:r.stringValue)===mm}function Ss(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return sr(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Ss(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ss(n.arrayValue.values[t]);return e}return{...n}}function G1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===q1}/**
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
 */class rt{constructor(e){this.value=e}static empty(){return new rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Wi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ss(t)}setAll(e){let t=Le.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=Ss(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Wi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return St(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Wi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){sr(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new rt(Ss(this.value))}}function ym(n){const e=[];return sr(n.fields,((t,r)=>{const s=new Le([t]);if(Wi(r)){const i=ym(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new ut(e)}/**
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
 */class He{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new He(e,0,Y.min(),Y.min(),Y.min(),rt.empty(),0)}static newFoundDocument(e,t,r,s){return new He(e,1,t,Y.min(),r,s,0)}static newNoDocument(e,t){return new He(e,2,t,Y.min(),Y.min(),rt.empty(),0)}static newUnknownDocument(e,t){return new He(e,3,t,Y.min(),Y.min(),rt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class go{constructor(e,t){this.position=e,this.inclusive=t}}function Ld(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),t.key):r=Fr(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Md(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!St(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class mo{constructor(e,t="asc"){this.field=e,this.dir=t}}function W1(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class _m{}class Re extends _m{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new K1(e,t,r):t==="array-contains"?new X1(e,r):t==="in"?new Z1(e,r):t==="not-in"?new eA(e,r):t==="array-contains-any"?new tA(e,r):new Re(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Q1(e,r):new Y1(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Fr(t,this.value)):t!==null&&wn(this.value)===wn(t)&&this.matchesComparison(Fr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _t extends _m{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new _t(e,t)}matches(e){return bm(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function bm(n){return n.op==="and"}function wm(n){return J1(n)&&bm(n)}function J1(n){for(const e of n.filters)if(e instanceof _t)return!1;return!0}function Dc(n){if(n instanceof Re)return n.field.canonicalString()+n.op.toString()+jr(n.value);if(wm(n))return n.filters.map((e=>Dc(e))).join(",");{const e=n.filters.map((t=>Dc(t))).join(",");return`${n.op}(${e})`}}function Tm(n,e){return n instanceof Re?(function(r,s){return s instanceof Re&&r.op===s.op&&r.field.isEqual(s.field)&&St(r.value,s.value)})(n,e):n instanceof _t?(function(r,s){return s instanceof _t&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&Tm(o,s.filters[c])),!0):!1})(n,e):void W(19439)}function Em(n){return n instanceof Re?(function(t){return`${t.field.canonicalString()} ${t.op} ${jr(t.value)}`})(n):n instanceof _t?(function(t){return t.op.toString()+" {"+t.getFilters().map(Em).join(" ,")+"}"})(n):"Filter"}class K1 extends Re{constructor(e,t,r){super(e,t,r),this.key=z.fromName(r.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class Q1 extends Re{constructor(e,t){super(e,"in",t),this.keys=vm("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Y1 extends Re{constructor(e,t){super(e,"not-in",t),this.keys=vm("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function vm(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>z.fromName(r.referenceValue)))}class X1 extends Re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Dl(t)&&$s(t.arrayValue,this.value)}}class Z1 extends Re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$s(this.value.arrayValue,t)}}class eA extends Re{constructor(e,t){super(e,"not-in",t)}matches(e){if($s(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$s(this.value.arrayValue,t)}}class tA extends Re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Dl(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>$s(this.value.arrayValue,r)))}}/**
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
 */class nA{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Ud(n,e=null,t=[],r=[],s=null,i=null,o=null){return new nA(n,e,t,r,s,i,o)}function Ol(n){const e=X(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Dc(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),qo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>jr(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>jr(r))).join(",")),e.Te=t}return e.Te}function Ll(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!W1(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Tm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Md(n.startAt,e.startAt)&&Md(n.endAt,e.endAt)}function Oc(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ii{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function rA(n,e,t,r,s,i,o,c){return new ii(n,e,t,r,s,i,o,c)}function Go(n){return new ii(n)}function Fd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function sA(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Im(n){return n.collectionGroup!==null}function Ps(n){const e=X(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Pe(Le.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new mo(i,r))})),t.has(Le.keyField().canonicalString())||e.Ie.push(new mo(Le.keyField(),r))}return e.Ie}function At(n){const e=X(n);return e.Ee||(e.Ee=iA(e,Ps(n))),e.Ee}function iA(n,e){if(n.limitType==="F")return Ud(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new mo(s.field,i)}));const t=n.endAt?new go(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new go(n.startAt.position,n.startAt.inclusive):null;return Ud(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Lc(n,e){const t=n.filters.concat([e]);return new ii(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Mc(n,e,t){return new ii(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Wo(n,e){return Ll(At(n),At(e))&&n.limitType===e.limitType}function Am(n){return`${Ol(At(n))}|lt:${n.limitType}`}function Ar(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Em(s))).join(", ")}]`),qo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>jr(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>jr(s))).join(",")),`Target(${r})`})(At(n))}; limitType=${n.limitType})`}function Jo(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Ps(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=Ld(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,Ps(r),s)||r.endAt&&!(function(o,c,l){const u=Ld(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,Ps(r),s))})(n,e)}function oA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Cm(n){return(e,t)=>{let r=!1;for(const s of Ps(n)){const i=aA(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function aA(n,e,t){const r=n.field.isKeyField()?z.comparator(e.key,t.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Fr(l,u):W(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W(19790,{direction:n.dir})}}/**
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
 */class ir{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){sr(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return lm(this.inner)}size(){return this.innerSize}}/**
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
 */const cA=new Te(z.comparator);function $t(){return cA}const Rm=new Te(z.comparator);function Es(...n){let e=Rm;for(const t of n)e=e.insert(t.key,t);return e}function km(n){let e=Rm;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Gn(){return xs()}function Sm(){return xs()}function xs(){return new ir((n=>n.toString()),((n,e)=>n.isEqual(e)))}const lA=new Te(z.comparator),uA=new Pe(z.comparator);function ie(...n){let e=uA;for(const t of n)e=e.add(t);return e}const hA=new Pe(se);function dA(){return hA}/**
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
 */function Ml(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ho(e)?"-0":e}}function Pm(n){return{integerValue:""+n}}function fA(n,e){return U1(e)?Pm(e):Ml(n,e)}/**
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
 */class Ko{constructor(){this._=void 0}}function pA(n,e,t){return n instanceof Hs?(function(s,i){const o={fields:{[dm]:{stringValue:hm},[pm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Nl(i)&&(i=zo(i)),i&&(o.fields[fm]=i),{mapValue:o}})(t,e):n instanceof qs?Vm(n,e):n instanceof zs?Nm(n,e):(function(s,i){const o=xm(s,i),c=jd(o)+jd(s.Ae);return Nc(o)&&Nc(s.Ae)?Pm(c):Ml(s.serializer,c)})(n,e)}function gA(n,e,t){return n instanceof qs?Vm(n,e):n instanceof zs?Nm(n,e):t}function xm(n,e){return n instanceof yo?(function(r){return Nc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Hs extends Ko{}class qs extends Ko{constructor(e){super(),this.elements=e}}function Vm(n,e){const t=Dm(e);for(const r of n.elements)t.some((s=>St(s,r)))||t.push(r);return{arrayValue:{values:t}}}class zs extends Ko{constructor(e){super(),this.elements=e}}function Nm(n,e){let t=Dm(e);for(const r of n.elements)t=t.filter((s=>!St(s,r)));return{arrayValue:{values:t}}}class yo extends Ko{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function jd(n){return Ie(n.integerValue||n.doubleValue)}function Dm(n){return Dl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class mA{constructor(e,t){this.field=e,this.transform=t}}function yA(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof qs&&s instanceof qs||r instanceof zs&&s instanceof zs?Ur(r.elements,s.elements,St):r instanceof yo&&s instanceof yo?St(r.Ae,s.Ae):r instanceof Hs&&s instanceof Hs})(n.transform,e.transform)}class _A{constructor(e,t){this.version=e,this.transformResults=t}}class pt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pt}static exists(e){return new pt(void 0,e)}static updateTime(e){return new pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ji(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Qo{}function Om(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ul(n.key,pt.none()):new oi(n.key,n.data,pt.none());{const t=n.data,r=rt.empty();let s=new Pe(Le.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new or(n.key,r,new ut(s.toArray()),pt.none())}}function bA(n,e,t){n instanceof oi?(function(s,i,o){const c=s.value.clone(),l=$d(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof or?(function(s,i,o){if(!Ji(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=$d(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Lm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Vs(n,e,t,r){return n instanceof oi?(function(i,o,c,l){if(!Ji(i.precondition,o))return c;const u=i.value.clone(),d=Hd(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(n,e,t,r):n instanceof or?(function(i,o,c,l){if(!Ji(i.precondition,o))return c;const u=Hd(i.fieldTransforms,l,o),d=o.data;return d.setAll(Lm(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,o,c){return Ji(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function wA(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=xm(r.transform,s||null);i!=null&&(t===null&&(t=rt.empty()),t.set(r.field,i))}return t||null}function Bd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ur(r,s,((i,o)=>yA(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class oi extends Qo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class or extends Qo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Lm(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function $d(n,e,t){const r=new Map;le(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,gA(o,c,t[s]))}return r}function Hd(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,pA(i,o,e))}return r}class Ul extends Qo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TA extends Qo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class EA{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&bA(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Vs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Vs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Sm();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=Om(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ie())}isEqual(e){return this.batchId===e.batchId&&Ur(this.mutations,e.mutations,((t,r)=>Bd(t,r)))&&Ur(this.baseMutations,e.baseMutations,((t,r)=>Bd(t,r)))}}class Fl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){le(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return lA})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Fl(e,t,r,s)}}/**
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
 */class vA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class IA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ce,oe;function AA(n){switch(n){case V.OK:return W(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return W(15467,{code:n})}}function Mm(n){if(n===void 0)return Bt("GRPC error has no .code"),V.UNKNOWN;switch(n){case Ce.OK:return V.OK;case Ce.CANCELLED:return V.CANCELLED;case Ce.UNKNOWN:return V.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return V.INTERNAL;case Ce.UNAVAILABLE:return V.UNAVAILABLE;case Ce.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ce.NOT_FOUND:return V.NOT_FOUND;case Ce.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ce.ABORTED:return V.ABORTED;case Ce.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ce.DATA_LOSS:return V.DATA_LOSS;default:return W(39323,{code:n})}}(oe=Ce||(Ce={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function CA(){return new TextEncoder}/**
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
 */const RA=new gn([4294967295,4294967295],0);function qd(n){const e=CA().encode(n),t=new Xg;return t.update(e),new Uint8Array(t.digest())}function zd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new gn([t,r],0),new gn([s,i],0)]}class jl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new vs(`Invalid padding: ${t}`);if(r<0)throw new vs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new vs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=gn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(gn.fromNumber(r)));return s.compare(RA)===1&&(s=new gn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=qd(e),[r,s]=zd(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new jl(i,s,t);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=qd(e),[r,s]=zd(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Yo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ai.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Yo(Y.min(),s,new Te(se),$t(),ie())}}class ai{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ai(r,t,ie(),ie(),ie())}}/**
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
 */class Ki{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Um{constructor(e,t){this.targetId=e,this.Ce=t}}class Fm{constructor(e,t,r=Ue.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Gd{constructor(){this.ve=0,this.Fe=Wd(),this.Me=Ue.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ie(),t=ie(),r=ie();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:W(38017,{changeType:i})}})),new ai(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=Wd()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,le(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class kA{constructor(e){this.Ge=e,this.ze=new Map,this.je=$t(),this.He=Di(),this.Je=Di(),this.Ze=new Te(se)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:W(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Oc(i))if(r===0){const o=new z(i.path);this.et(t,o,He.newNoDocument(o,Y.min()))}else le(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,u)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=bn(r).toUint8Array()}catch(l){if(l instanceof um)return Mr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new jl(o,s,i)}catch(l){return Mr(l instanceof vs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Oc(c.target)){const l=new z(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,He.newNoDocument(l,e))}i.Be&&(t.set(o,i.ke()),i.Ke())}}));let r=ie();this.Je.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new Yo(e,t,this.Ze,this.je,r);return this.je=$t(),this.He=Di(),this.Je=Di(),this.Ze=new Te(se),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Gd,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Pe(se),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Pe(se),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Gd),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Di(){return new Te(z.comparator)}function Wd(){return new Te(z.comparator)}const SA={asc:"ASCENDING",desc:"DESCENDING"},PA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xA={and:"AND",or:"OR"};class VA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Uc(n,e){return n.useProto3Json||qo(e)?e:{value:e}}function _o(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function NA(n,e){return _o(n,e.toTimestamp())}function Ct(n){return le(!!n,49232),Y.fromTimestamp((function(t){const r=_n(t);return new ge(r.seconds,r.nanos)})(n))}function Bl(n,e){return Fc(n,e).canonicalString()}function Fc(n,e){const t=(function(s){return new fe(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Bm(n){const e=fe.fromString(n);return le(Gm(e),10190,{key:e.toString()}),e}function jc(n,e){return Bl(n.databaseId,e.path)}function za(n,e){const t=Bm(e);if(t.get(1)!==n.databaseId.projectId)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new z(Hm(t))}function $m(n,e){return Bl(n.databaseId,e)}function DA(n){const e=Bm(n);return e.length===4?fe.emptyPath():Hm(e)}function Bc(n){return new fe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Hm(n){return le(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Jd(n,e,t){return{name:jc(n,e),fields:t.value.mapValue.fields}}function OA(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:W(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,d){return u.useProto3Json?(le(d===void 0||typeof d=="string",58123),Ue.fromBase64String(d||"")):(le(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ue.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const d=u.code===void 0?V.UNKNOWN:Mm(u.code);return new j(d,u.message||"")})(o);t=new Fm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=za(n,r.document.name),i=Ct(r.document.updateTime),o=r.document.createTime?Ct(r.document.createTime):Y.min(),c=new rt({mapValue:{fields:r.document.fields}}),l=He.newFoundDocument(s,i,o,c),u=r.targetIds||[],d=r.removedTargetIds||[];t=new Ki(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=za(n,r.document),i=r.readTime?Ct(r.readTime):Y.min(),o=He.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Ki([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=za(n,r.document),i=r.removedTargetIds||[];t=new Ki([],i,s,null)}else{if(!("filter"in e))return W(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new IA(s,i),c=r.targetId;t=new Um(c,o)}}return t}function LA(n,e){let t;if(e instanceof oi)t={update:Jd(n,e.key,e.value)};else if(e instanceof Ul)t={delete:jc(n,e.key)};else if(e instanceof or)t={update:Jd(n,e.key,e.data),updateMask:zA(e.fieldMask)};else{if(!(e instanceof TA))return W(16599,{dt:e.type});t={verify:jc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof Hs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof qs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof zs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof yo)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw W(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:NA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:W(27497)})(n,e.precondition)),t}function MA(n,e){return n&&n.length>0?(le(e!==void 0,14353),n.map((t=>(function(s,i){let o=s.updateTime?Ct(s.updateTime):Ct(i);return o.isEqual(Y.min())&&(o=Ct(i)),new _A(o,s.transformResults||[])})(t,e)))):[]}function UA(n,e){return{documents:[$m(n,e.path)]}}function FA(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=$m(n,s);const i=(function(u){if(u.length!==0)return zm(_t.create(u,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((d=>(function(m){return{field:Cr(m.field),direction:$A(m.dir)}})(d)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Uc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:t,parent:s}}function jA(n){let e=DA(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){le(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(p){const m=qm(p);return m instanceof _t&&wm(m)?m.getFilters():[m]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((m=>(function(v){return new mo(Rr(v.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(v.direction))})(m)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,qo(m)?null:m})(t.limit));let l=null;t.startAt&&(l=(function(p){const m=!!p.before,E=p.values||[];return new go(E,m)})(t.startAt));let u=null;return t.endAt&&(u=(function(p){const m=!p.before,E=p.values||[];return new go(E,m)})(t.endAt)),rA(e,s,o,i,c,"F",l,u)}function BA(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function qm(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Rr(t.unaryFilter.field);return Re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Rr(t.unaryFilter.field);return Re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rr(t.unaryFilter.field);return Re.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Rr(t.unaryFilter.field);return Re.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Re.create(Rr(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return _t.create(t.compositeFilter.filters.map((r=>qm(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return W(1026)}})(t.compositeFilter.op))})(n):W(30097,{filter:n})}function $A(n){return SA[n]}function HA(n){return PA[n]}function qA(n){return xA[n]}function Cr(n){return{fieldPath:n.canonicalString()}}function Rr(n){return Le.fromServerFormat(n.fieldPath)}function zm(n){return n instanceof Re?(function(t){if(t.op==="=="){if(Od(t.value))return{unaryFilter:{field:Cr(t.field),op:"IS_NAN"}};if(Dd(t.value))return{unaryFilter:{field:Cr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Od(t.value))return{unaryFilter:{field:Cr(t.field),op:"IS_NOT_NAN"}};if(Dd(t.value))return{unaryFilter:{field:Cr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cr(t.field),op:HA(t.op),value:t.value}}})(n):n instanceof _t?(function(t){const r=t.getFilters().map((s=>zm(s)));return r.length===1?r[0]:{compositeFilter:{op:qA(t.op),filters:r}}})(n):W(54877,{filter:n})}function zA(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Gm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Wm(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class ln{constructor(e,t,r,s,i=Y.min(),o=Y.min(),c=Ue.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class GA{constructor(e){this.yt=e}}function WA(n){const e=jA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Mc(e,e.limit,"L"):e}/**
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
 */class JA{constructor(){this.Sn=new KA}addToCollectionParentIndex(e,t){return this.Sn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(yn.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(yn.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class KA{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Pe(fe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Pe(fe.comparator)).toArray()}}/**
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
 */const Kd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Jm=41943040;class Ye{static withCacheSize(e){return new Ye(e,Ye.DEFAULT_COLLECTION_PERCENTILE,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ye.DEFAULT_COLLECTION_PERCENTILE=10,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ye.DEFAULT=new Ye(Jm,Ye.DEFAULT_COLLECTION_PERCENTILE,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ye.DISABLED=new Ye(-1,0,0);/**
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
 */class Br{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Br(0)}static ar(){return new Br(-1)}}/**
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
 */const Qd="LruGarbageCollector",QA=1048576;function Yd([n,e],[t,r]){const s=se(n,t);return s===0?se(e,r):s}class YA{constructor(e){this.Pr=e,this.buffer=new Pe(Yd),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Yd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class XA{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){B(Qd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Yr(t)?B(Qd,"Ignoring IndexedDB error during garbage collection: ",t):await Qr(t)}await this.Ar(3e5)}))}}class ZA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return N.resolve(Ho.ce);const r=new YA(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Kd)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Kd):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,o,c,l,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),Ir()<=re.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-d}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function eC(n,e){return new ZA(n,e)}/**
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
 */class tC{constructor(){this.changes=new ir((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,He.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class nC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class rC{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Vs(r.mutation,s,ut.empty(),ge.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,ie()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=ie()){const s=Gn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let o=Es();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=Gn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,ie())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,r,s){let i=$t();const o=xs(),c=(function(){return xs()})();return t.forEach(((l,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof or)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Vs(d.mutation,u,d.mutation.getFieldMask(),ge.now())):o.set(u.key,ut.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,d)=>o.set(u,d))),t.forEach(((u,d)=>c.set(u,new nC(d,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,t){const r=xs();let s=new Te(((o,c)=>o-c)),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let d=r.get(l)||ut.empty();d=c.applyToLocalView(u,d),r.set(l,d);const p=(s.get(c.batchId)||ie()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,d=l.value,p=Sm();d.forEach((m=>{if(!i.has(m)){const E=Om(t.get(m),r.get(m));E!==null&&p.set(m,E),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return N.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return sA(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Im(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):N.resolve(Gn());let c=Fs,l=i;return o.next((u=>N.forEach(u,((d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?N.resolve():this.remoteDocumentCache.getEntry(e,d).next((m=>{l=l.insert(d,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,ie()))).next((d=>({batchId:c,changes:km(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next((r=>{let s=Es();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Es();return this.indexManager.getCollectionParents(e,i).next((c=>N.forEach(c,(l=>{const u=(function(p,m){return new ii(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((d=>{d.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,He.newInvalidDocument(d)))}));let c=Es();return o.forEach(((l,u)=>{const d=i.get(l);d!==void 0&&Vs(d.mutation,u,ut.empty(),ge.now()),Jo(t,u)&&(c=c.insert(l,u))})),c}))}}/**
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
 */class sC{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return N.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Ct(s.createTime)}})(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:WA(s.bundledQuery),readTime:Ct(s.readTime)}})(t)),N.resolve()}}/**
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
 */class iC{constructor(){this.overlays=new Te(z.comparator),this.Lr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Gn();return N.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.bt(e,t,i)})),N.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const s=Gn(),i=t.length+1,o=new z(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return N.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Te(((u,d)=>u-d));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Gn(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const c=Gn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,d)=>c.set(u,d))),!(c.size()>=s)););return N.resolve(c)}bt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vA(t,r));let i=this.Lr.get(t);i===void 0&&(i=ie(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
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
 */class oC{constructor(){this.sessionToken=Ue.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class $l{constructor(){this.kr=new Pe(Ve.Kr),this.qr=new Pe(Ve.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new Ve(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Ve(e,t))}Qr(e,t){e.forEach((r=>this.removeReference(r,t)))}Gr(e){const t=new z(new fe([])),r=new Ve(t,e),s=new Ve(t,e+1),i=[];return this.qr.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new z(new fe([])),r=new Ve(t,e),s=new Ve(t,e+1);let i=ie();return this.qr.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new Ve(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return z.comparator(e.key,t.key)||se(e.Hr,t.Hr)}static Ur(e,t){return se(e.Hr,t.Hr)||z.comparator(e.key,t.key)}}/**
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
 */class aC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Pe(Ve.Kr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new EA(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new Ve(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,t){return N.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?Vl:this.Yn-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ve(t,0),s=new Ve(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],(o=>{const c=this.Zr(o.Hr);i.push(c)})),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Pe(se);return t.forEach((s=>{const i=new Ve(s,0),o=new Ve(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],(c=>{r=r.add(c.Hr)}))})),N.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;z.isDocumentKey(i)||(i=i.child(""));const o=new Ve(new z(i),0);let c=new Pe(se);return this.Jr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Hr)),!0)}),o),N.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){le(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return N.forEach(t.mutations,(s=>{const i=new Ve(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=r}))}nr(e){}containsKey(e,t){const r=new Ve(t,0),s=this.Jr.firstAfterOrEqual(r);return N.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class cC{constructor(e){this.ti=e,this.docs=(function(){return new Te(z.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():He.newInvalidDocument(t))}getEntries(e,t){let r=$t();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():He.newInvalidDocument(s))})),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=$t();const o=t.path,c=new z(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||D1(N1(d),r)<=0||(s.has(d.key)||Jo(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,t,r,s){W(9500)}ni(e,t){return N.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new lC(this)}getSize(e){return N.resolve(this.size)}}class lC extends tC{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)})),N.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class uC{constructor(e){this.persistence=e,this.ri=new ir((t=>Ol(t)),Ll),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new $l,this.targetCount=0,this.oi=Br._r()}forEachTarget(e,t){return this.ri.forEach(((r,s)=>t(s))),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),N.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Br(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.lr(t),N.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),N.waitFor(i).next((()=>s))}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.si.containsKey(t))}}/**
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
 */class Km{constructor(e,t){this._i={},this.overlays={},this.ai=new Ho(0),this.ui=!1,this.ui=!0,this.ci=new oC,this.referenceDelegate=e(this),this.li=new uC(this),this.indexManager=new JA,this.remoteDocumentCache=(function(s){return new cC(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new GA(t),this.Pi=new sC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new aC(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){B("MemoryPersistence","Starting transaction:",e);const s=new hC(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((i=>this.referenceDelegate.Ii(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return N.or(Object.values(this._i).map((r=>()=>r.containsKey(e,t))))}}class hC extends L1{constructor(e){super(),this.currentSequenceNumber=e}}class Hl{constructor(e){this.persistence=e,this.Ri=new $l,this.Ai=null}static Vi(e){return new Hl(e)}get di(){if(this.Ai)return this.Ai;throw W(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),N.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.di.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.di,(r=>{const s=z.fromPath(r);return this.mi(e,s).next((i=>{i||t.removeEntry(s,Y.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return N.or([()=>N.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class bo{constructor(e,t){this.persistence=e,this.fi=new ir((r=>F1(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=eC(this,t)}static Vi(e,t){return new bo(e,t)}Ti(){}Ii(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}mr(e,t){return N.forEach(this.fi,((r,s)=>this.wr(e,r,s).next((i=>i?N.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(r++,i.removeEntry(o,Y.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),N.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Gi(e.data.value)),t}wr(e,t,r){return N.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ql{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=ie(),s=ie();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ql(e,t.fromCache,r,s)}}/**
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
 */class dC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class fC{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return eE()?8:M1(Ge())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ps(e,t,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new dC;return this.ys(e,t,o).next((c=>{if(i.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>i.result))}ws(e,t,r,s){return r.documentReadCount<this.Vs?(Ir()<=re.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Ar(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),N.resolve()):(Ir()<=re.DEBUG&&B("QueryEngine","Query:",Ar(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Ir()<=re.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Ar(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,At(t))):N.resolve())}gs(e,t){if(Fd(t))return N.resolve(null);let r=At(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Mc(t,null,"F"),r=At(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=ie(...i);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.bs(t,c);return this.Ss(t,u,o,l.readTime)?this.gs(e,Mc(t,null,"F")):this.Ds(e,u,t,l)}))))})))))}ps(e,t,r,s){return Fd(t)||s.isEqual(Y.min())?N.resolve(null):this.fs.getDocuments(e,r).next((i=>{const o=this.bs(t,i);return this.Ss(t,o,r,s)?N.resolve(null):(Ir()<=re.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ar(t)),this.Ds(e,o,t,V1(s,Fs)).next((c=>c)))}))}bs(e,t){let r=new Pe(Cm(e));return t.forEach(((s,i)=>{Jo(e,i)&&(r=r.add(i))})),r}Ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return Ir()<=re.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Ar(t)),this.fs.getDocumentsMatchingQuery(e,t,yn.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const zl="LocalStore",pC=3e8;class gC{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new Te(se),this.Fs=new ir((i=>Ol(i)),Ll),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rC(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function mC(n,e,t,r){return new gC(n,e,t,r)}async function Qm(n,e){const t=X(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=ie();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){c.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next((u=>({Ns:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function yC(n,e){const t=X(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,d){const p=u.batch,m=p.keys();let E=N.resolve();return m.forEach((v=>{E=E.next((()=>d.getEntry(l,v))).next((C=>{const D=u.docVersions.get(v);le(D!==null,48541),C.version.compareTo(D)<0&&(p.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),d.addEntry(C)))}))})),E.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=ie();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Ym(n){const e=X(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function _C(n,e){const t=X(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((d,p)=>{const m=s.get(p);if(!m)return;c.push(t.li.removeMatchingKeys(i,d.removedDocuments,p).next((()=>t.li.addMatchingKeys(i,d.addedDocuments,p))));let E=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(Ue.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),s=s.insert(p,E),(function(C,D,O){return C.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=pC?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0})(m,E,d)&&c.push(t.li.updateTargetData(i,E))}));let l=$t(),u=ie();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(bC(i,o,e.documentUpdates).next((d=>{l=d.Bs,u=d.Ls}))),!r.isEqual(Y.min())){const d=t.li.getLastRemoteSnapshotVersion(i).next((p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return N.waitFor(c).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(t.vs=s,i)))}function bC(n,e,t){let r=ie(),s=ie();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let o=$t();return t.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):B(zl,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function wC(n,e){const t=X(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Vl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function TC(n,e){const t=X(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.li.getTargetData(r,e).next((i=>i?(s=i,N.resolve(s)):t.li.allocateTargetId(r).next((o=>(s=new ln(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r}))}async function $c(n,e,t){const r=X(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Yr(o))throw o;B(zl,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Xd(n,e,t){const r=X(n);let s=Y.min(),i=ie();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,d){const p=X(l),m=p.Fs.get(d);return m!==void 0?N.resolve(p.vs.get(m)):p.li.getTargetData(u,d)})(r,o,At(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,t?s:Y.min(),t?i:ie()))).next((c=>(EC(r,oA(e),c),{documents:c,ks:i})))))}function EC(n,e,t){let r=n.Ms.get(e)||Y.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Ms.set(e,r)}class Zd{constructor(){this.activeTargetIds=dA()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vC{constructor(){this.vo=new Zd,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Zd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class IC{Mo(e){}shutdown(){}}/**
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
 */const ef="ConnectivityMonitor";class tf{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){B(ef,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){B(ef,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oi=null;function Hc(){return Oi===null?Oi=(function(){return 268435456+Math.round(2147483648*Math.random())})():Oi++,"0x"+Oi.toString(16)}/**
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
 */const Ga="RestConnection",AC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class CC{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===fo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const o=Hc(),c=this.Qo(e,t.toUriEncodedString());B(Ga,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:u}=new URL(c),d=zr(u);return this.zo(e,c,l,r,d).then((p=>(B(Ga,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Mr(Ga,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}jo(e,t,r,s,i,o){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Kr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Qo(e,t){const r=AC[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class RC{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const je="WebChannelConnection",ms=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Nr extends CC{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Nr.c_){const e=nm();ms(e,tm.STAT_EVENT,(t=>{t.stat===Pc.PROXY?B(je,"STAT_EVENT: detected buffering proxy"):t.stat===Pc.NOPROXY&&B(je,"STAT_EVENT: detected no buffering proxy")})),Nr.c_=!0}}zo(e,t,r,s,i){const o=Hc();return new Promise(((c,l)=>{const u=new Zg;u.setWithCredentials(!0),u.listenOnce(em.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case zi.NO_ERROR:const p=u.getResponseJson();B(je,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case zi.TIMEOUT:B(je,`RPC '${e}' ${o} timed out`),l(new j(V.DEADLINE_EXCEEDED,"Request time out"));break;case zi.HTTP_ERROR:const m=u.getStatus();if(B(je,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let E=u.getResponseJson();Array.isArray(E)&&(E=E[0]);const v=E==null?void 0:E.error;if(v&&v.status&&v.message){const C=(function(O){const x=O.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(x)>=0?x:V.UNKNOWN})(v.status);l(new j(C,v.message))}else l(new j(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new j(V.UNAVAILABLE,"Connection failed."));break;default:W(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{B(je,`RPC '${e}' ${o} completed.`)}}));const d=JSON.stringify(s);B(je,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",d,r,15)}))}T_(e,t,r){const s=Hc(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const u=i.join("");B(je,`Creating RPC '${e}' stream ${s}: ${u}`,c);const d=o.createWebChannel(u,c);this.I_(d);let p=!1,m=!1;const E=new RC({Ho:v=>{m?B(je,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(p||(B(je,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),B(je,`RPC '${e}' stream ${s} sending:`,v),d.send(v))},Jo:()=>d.close()});return ms(d,Ts.EventType.OPEN,(()=>{m||(B(je,`RPC '${e}' stream ${s} transport opened.`),E.i_())})),ms(d,Ts.EventType.CLOSE,(()=>{m||(m=!0,B(je,`RPC '${e}' stream ${s} transport closed`),E.o_(),this.E_(d))})),ms(d,Ts.EventType.ERROR,(v=>{m||(m=!0,Mr(je,`RPC '${e}' stream ${s} transport errored. Name:`,v.name,"Message:",v.message),E.o_(new j(V.UNAVAILABLE,"The operation could not be completed")))})),ms(d,Ts.EventType.MESSAGE,(v=>{var C;if(!m){const D=v.data[0];le(!!D,16349);const O=D,x=(O==null?void 0:O.error)||((C=O[0])==null?void 0:C.error);if(x){B(je,`RPC '${e}' stream ${s} received error:`,x);const M=x.status;let G=(function(_){const b=Ce[_];if(b!==void 0)return Mm(b)})(M),P=x.message;G===void 0&&(G=V.INTERNAL,P="Unknown error status: "+M+" with message "+x.message),m=!0,E.o_(new j(G,P)),d.close()}else B(je,`RPC '${e}' stream ${s} received:`,D),E.__(D)}})),Nr.u_(),setTimeout((()=>{E.s_()}),0),E}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return rm()}}/**
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
 */function kC(n){return new Nr(n)}function Wa(){return typeof document<"u"?document:null}/**
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
 */function Xo(n){return new VA(n,!0)}/**
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
 */Nr.c_=!1;class Xm{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const nf="PersistentStream";class Zm{constructor(e,t,r,s,i,o,c,l){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Xm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Bt(t.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new j(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return B(nf,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(B(nf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class SC extends Zm{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=OA(this.serializer,e),r=(function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Ct(o.readTime):Y.min()})(e);return this.listener.J_(t,r)}Z_(e){const t={};t.database=Bc(this.serializer),t.addTarget=(function(i,o){let c;const l=o.target;if(c=Oc(l)?{documents:UA(i,l)}:{query:FA(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=jm(i,o.resumeToken);const u=Uc(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(Y.min())>0){c.readTime=_o(i,o.snapshotVersion.toTimestamp());const u=Uc(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=BA(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=Bc(this.serializer),t.removeTarget=e,this.K_(t)}}class PC extends Zm{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return le(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){le(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=MA(e.writeResults,e.commitTime),r=Ct(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Bc(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>LA(this.serializer,r)))};this.K_(t)}}/**
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
 */class xC{}class VC extends xC{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Fc(t,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(V.UNKNOWN,i.toString())}))}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,Fc(t,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(V.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function NC(n,e,t,r){return new VC(n,e,t,r)}class DC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Bt(t),this.aa=!1):B("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const tr="RemoteStore";class OC{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((o=>{r.enqueueAndForget((async()=>{ar(this)&&(B(tr,"Restarting streams for network reachability change."),await(async function(l){const u=X(l);u.Ea.add(4),await ci(u),u.Va.set("Unknown"),u.Ea.delete(4),await Zo(u)})(this))}))})),this.Va=new DC(r,s)}}async function Zo(n){if(ar(n))for(const e of n.Ra)await e(!0)}async function ci(n){for(const e of n.Ra)await e(!1)}function ey(n,e){const t=X(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Kl(t)?Jl(t):Xr(t).O_()&&Wl(t,e))}function Gl(n,e){const t=X(n),r=Xr(t);t.Ia.delete(e),r.O_()&&ty(t,e),t.Ia.size===0&&(r.O_()?r.L_():ar(t)&&t.Va.set("Unknown"))}function Wl(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xr(n).Z_(e)}function ty(n,e){n.da.$e(e),Xr(n).X_(e)}function Jl(n){n.da=new kA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Xr(n).start(),n.Va.ua()}function Kl(n){return ar(n)&&!Xr(n).x_()&&n.Ia.size>0}function ar(n){return X(n).Ea.size===0}function ny(n){n.da=void 0}async function LC(n){n.Va.set("Online")}async function MC(n){n.Ia.forEach(((e,t)=>{Wl(n,e)}))}async function UC(n,e){ny(n),Kl(n)?(n.Va.ha(e),Jl(n)):n.Va.set("Unknown")}async function FC(n,e,t){if(n.Va.set("Online"),e instanceof Fm&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.da.removeTarget(c))})(n,e)}catch(r){B(tr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wo(n,r)}else if(e instanceof Ki?n.da.Xe(e):e instanceof Um?n.da.st(e):n.da.tt(e),!t.isEqual(Y.min()))try{const r=await Ym(n.localStore);t.compareTo(r)>=0&&await(function(i,o){const c=i.da.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ia.get(u);d&&i.Ia.set(u,d.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const d=i.Ia.get(l);if(!d)return;i.Ia.set(l,d.withResumeToken(Ue.EMPTY_BYTE_STRING,d.snapshotVersion)),ty(i,l);const p=new ln(d.target,l,u,d.sequenceNumber);Wl(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){B(tr,"Failed to raise snapshot:",r),await wo(n,r)}}async function wo(n,e,t){if(!Yr(e))throw e;n.Ea.add(1),await ci(n),n.Va.set("Offline"),t||(t=()=>Ym(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{B(tr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Zo(n)}))}function ry(n,e){return e().catch((t=>wo(n,t,e)))}async function ea(n){const e=X(n),t=Tn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Vl;for(;jC(e);)try{const s=await wC(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,BC(e,s)}catch(s){await wo(e,s)}sy(e)&&iy(e)}function jC(n){return ar(n)&&n.Ta.length<10}function BC(n,e){n.Ta.push(e);const t=Tn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function sy(n){return ar(n)&&!Tn(n).x_()&&n.Ta.length>0}function iy(n){Tn(n).start()}async function $C(n){Tn(n).ra()}async function HC(n){const e=Tn(n);for(const t of n.Ta)e.ea(t.mutations)}async function qC(n,e,t){const r=n.Ta.shift(),s=Fl.from(r,e,t);await ry(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await ea(n)}async function zC(n,e){e&&Tn(n).Y_&&await(async function(r,s){if((function(o){return AA(o)&&o!==V.ABORTED})(s.code)){const i=r.Ta.shift();Tn(r).B_(),await ry(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await ea(r)}})(n,e),sy(n)&&iy(n)}async function rf(n,e){const t=X(n);t.asyncQueue.verifyOperationInProgress(),B(tr,"RemoteStore received new credentials");const r=ar(t);t.Ea.add(3),await ci(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Zo(t)}async function GC(n,e){const t=X(n);e?(t.Ea.delete(2),await Zo(t)):e||(t.Ea.add(2),await ci(t),t.Va.set("Unknown"))}function Xr(n){return n.ma||(n.ma=(function(t,r,s){const i=X(t);return i.sa(),new SC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:LC.bind(null,n),Yo:MC.bind(null,n),t_:UC.bind(null,n),J_:FC.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Kl(n)?Jl(n):n.Va.set("Unknown")):(await n.ma.stop(),ny(n))}))),n.ma}function Tn(n){return n.fa||(n.fa=(function(t,r,s){const i=X(t);return i.sa(),new PC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:$C.bind(null,n),t_:zC.bind(null,n),ta:HC.bind(null,n),na:qC.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await ea(n)):(await n.fa.stop(),n.Ta.length>0&&(B(tr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Ql{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new Ql(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yl(n,e){if(Bt("AsyncQueue",`${e}: ${n}`),Yr(n))return new j(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Dr{static emptySet(e){return new Dr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||z.comparator(t.key,r.key):(t,r)=>z.comparator(t.key,r.key),this.keyedMap=Es(),this.sortedSet=new Te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Dr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Dr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class sf{constructor(){this.ga=new Te(z.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):W(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class $r{constructor(e,t,r,s,i,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new $r(e,t,Dr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class WC{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class JC{constructor(){this.queries=of(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=X(t),i=s.queries;s.queries=of(),i.forEach(((o,c)=>{for(const l of c.ba)l.onError(r)}))})(this,new j(V.ABORTED,"Firestore shutting down"))}}function of(){return new ir((n=>Am(n)),Wo)}async function Xl(n,e){const t=X(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new WC,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Yl(o,`Initialization of query '${Ar(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.ba.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&eu(t)}async function Zl(n,e){const t=X(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function KC(n,e){const t=X(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.ba)c.Fa(s)&&(r=!0);o.wa=s}}r&&eu(t)}function QC(n,e,t){const r=X(n),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(t);r.queries.delete(e)}function eu(n){n.Ca.forEach((e=>{e.next()}))}var qc,af;(af=qc||(qc={})).Ma="default",af.Cache="cache";class tu{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new $r(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=$r.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==qc.Cache}}/**
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
 */class oy{constructor(e){this.key=e}}class ay{constructor(e){this.key=e}}class YC{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ie(),this.mutatedKeys=ie(),this.eu=Cm(e),this.tu=new Dr(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new sf,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,p)=>{const m=s.get(d),E=Jo(this.query,p)?p:null,v=!!m&&this.mutatedKeys.has(m.key),C=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let D=!1;m&&E?m.data.isEqual(E.data)?v!==C&&(r.track({type:3,doc:E}),D=!0):this.su(m,E)||(r.track({type:2,doc:E}),D=!0,(l&&this.eu(E,l)>0||u&&this.eu(E,u)<0)&&(c=!0)):!m&&E?(r.track({type:0,doc:E}),D=!0):m&&!E&&(r.track({type:1,doc:m}),D=!0,(l||u)&&(c=!0)),D&&(E?(o=o.add(E),i=C?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Ss:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((d,p)=>(function(E,v){const C=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{Vt:D})}};return C(E)-C(v)})(d.type,p.type)||this.eu(d.doc,p.doc))),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,u=l!==this.Xa;return this.Xa=l,o.length!==0||u?{snapshot:new $r(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new sf,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ie(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const t=[];return e.forEach((r=>{this.Ya.has(r)||t.push(new ay(r))})),this.Ya.forEach((r=>{e.has(r)||t.push(new oy(r))})),t}cu(e){this.Za=e.ks,this.Ya=ie();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return $r.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const nu="SyncEngine";class XC{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ZC{constructor(e){this.key=e,this.hu=!1}}class e2{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ir((c=>Am(c)),Wo),this.Iu=new Map,this.Eu=new Set,this.Ru=new Te(z.comparator),this.Au=new Map,this.Vu=new $l,this.du={},this.mu=new Map,this.fu=Br.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function t2(n,e,t=!0){const r=fy(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await cy(r,e,t,!0),s}async function n2(n,e){const t=fy(n);await cy(t,e,!0,!1)}async function cy(n,e,t,r){const s=await TC(n.localStore,At(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await r2(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&ey(n.remoteStore,s),c}async function r2(n,e,t,r,s){n.pu=(p,m,E)=>(async function(C,D,O,x){let M=D.view.ru(O);M.Ss&&(M=await Xd(C.localStore,D.query,!1).then((({documents:_})=>D.view.ru(_,M))));const G=x&&x.targetChanges.get(D.targetId),P=x&&x.targetMismatches.get(D.targetId)!=null,F=D.view.applyChanges(M,C.isPrimaryClient,G,P);return lf(C,D.targetId,F.au),F.snapshot})(n,p,m,E);const i=await Xd(n.localStore,e,!0),o=new YC(e,i.ks),c=o.ru(i.documents),l=ai.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(c,n.isPrimaryClient,l);lf(n,t,u.au);const d=new XC(e,t,o);return n.Tu.set(e,d),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),u.snapshot}async function s2(n,e,t){const r=X(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!Wo(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await $c(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Gl(r.remoteStore,s.targetId),zc(r,s.targetId)})).catch(Qr)):(zc(r,s.targetId),await $c(r.localStore,s.targetId,!0))}async function i2(n,e){const t=X(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Gl(t.remoteStore,r.targetId))}async function o2(n,e,t){const r=f2(n);try{const s=await(function(o,c){const l=X(o),u=ge.now(),d=c.reduce(((E,v)=>E.add(v.key)),ie());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(E=>{let v=$t(),C=ie();return l.xs.getEntries(E,d).next((D=>{v=D,v.forEach(((O,x)=>{x.isValidDocument()||(C=C.add(O))}))})).next((()=>l.localDocuments.getOverlayedDocuments(E,v))).next((D=>{p=D;const O=[];for(const x of c){const M=wA(x,p.get(x.key).overlayedDocument);M!=null&&O.push(new or(x.key,M,ym(M.value.mapValue),pt.exists(!0)))}return l.mutationQueue.addMutationBatch(E,u,O,c)})).next((D=>{m=D;const O=D.applyToLocalDocumentSet(p,C);return l.documentOverlayCache.saveOverlays(E,D.batchId,O)}))})).then((()=>({batchId:m.batchId,changes:km(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.du[o.currentUser.toKey()];u||(u=new Te(se)),u=u.insert(c,l),o.du[o.currentUser.toKey()]=u})(r,s.batchId,t),await li(r,s.changes),await ea(r.remoteStore)}catch(s){const i=Yl(s,"Failed to persist write");t.reject(i)}}async function ly(n,e){const t=X(n);try{const r=await _C(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Au.get(i);o&&(le(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?le(o.hu,14607):s.removedDocuments.size>0&&(le(o.hu,42227),o.hu=!1))})),await li(t,r,e)}catch(r){await Qr(r)}}function cf(n,e,t){const r=X(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=X(o);l.onlineState=c;let u=!1;l.queries.forEach(((d,p)=>{for(const m of p.ba)m.va(c)&&(u=!0)})),u&&eu(l)})(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function a2(n,e,t){const r=X(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Te(z.comparator);o=o.insert(i,He.newNoDocument(i,Y.min()));const c=ie().add(i),l=new Yo(Y.min(),new Map,new Te(se),o,c);await ly(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),ru(r)}else await $c(r.localStore,e,!1).then((()=>zc(r,e,t))).catch(Qr)}async function c2(n,e){const t=X(n),r=e.batch.batchId;try{const s=await yC(t.localStore,e);hy(t,r,null),uy(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await li(t,s)}catch(s){await Qr(s)}}async function l2(n,e,t){const r=X(n);try{const s=await(function(o,c){const l=X(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let d;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(le(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d))).next((()=>l.localDocuments.getDocuments(u,d)))}))})(r.localStore,e);hy(r,e,t),uy(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await li(r,s)}catch(s){await Qr(s)}}function uy(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function hy(n,e,t){const r=X(n);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function zc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((r=>{n.Vu.containsKey(r)||dy(n,r)}))}function dy(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Gl(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),ru(n))}function lf(n,e,t){for(const r of t)r instanceof oy?(n.Vu.addReference(r.key,e),u2(n,r)):r instanceof ay?(B(nu,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||dy(n,r.key)):W(19791,{wu:r})}function u2(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(r)||(B(nu,"New document in limbo: "+t),n.Eu.add(r),ru(n))}function ru(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new z(fe.fromString(e)),r=n.fu.next();n.Au.set(r,new ZC(t)),n.Ru=n.Ru.insert(t,r),ey(n.remoteStore,new ln(At(Go(t.path)),r,"TargetPurposeLimboResolution",Ho.ce))}}async function li(n,e,t){const r=X(n),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,t).then((u=>{var d;if((u||t)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=ql.Es(l.targetId,u);i.push(p)}})))})),await Promise.all(o),r.Pu.J_(s),await(async function(l,u){const d=X(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>N.forEach(u,(m=>N.forEach(m.Ts,(E=>d.persistence.referenceDelegate.addReference(p,m.targetId,E))).next((()=>N.forEach(m.Is,(E=>d.persistence.referenceDelegate.removeReference(p,m.targetId,E)))))))))}catch(p){if(!Yr(p))throw p;B(zl,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const E=d.vs.get(m),v=E.snapshotVersion,C=E.withLastLimboFreeSnapshotVersion(v);d.vs=d.vs.insert(m,C)}}})(r.localStore,i))}async function h2(n,e){const t=X(n);if(!t.currentUser.isEqual(e)){B(nu,"User change. New user:",e.toKey());const r=await Qm(t.localStore,e);t.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new j(V.CANCELLED,o))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await li(t,r.Ns)}}function d2(n,e){const t=X(n),r=t.Au.get(e);if(r&&r.hu)return ie().add(r.key);{let s=ie();const i=t.Iu.get(e);if(!i)return s;for(const o of i){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function fy(n){const e=X(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ly.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=d2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=a2.bind(null,e),e.Pu.J_=KC.bind(null,e.eventManager),e.Pu.yu=QC.bind(null,e.eventManager),e}function f2(n){const e=X(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=c2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=l2.bind(null,e),e}class To{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xo(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return mC(this.persistence,new fC,e.initialUser,this.serializer)}Cu(e){return new Km(Hl.Vi,this.serializer)}Du(e){return new vC}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}To.provider={build:()=>new To};class p2 extends To{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){le(this.persistence.referenceDelegate instanceof bo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new XA(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ye.withCacheSize(this.cacheSizeBytes):Ye.DEFAULT;return new Km((r=>bo.Vi(r,t)),this.serializer)}}class Gc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=h2.bind(null,this.syncEngine),await GC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new JC})()}createDatastore(e){const t=Xo(e.databaseInfo.databaseId),r=kC(e.databaseInfo);return NC(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,o,c){return new OC(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>cf(this.syncEngine,t,0)),(function(){return tf.v()?new tf:new IC})())}createSyncEngine(e,t){return(function(s,i,o,c,l,u,d){const p=new e2(s,i,o,c,l,u);return d&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=X(s);B(tr,"RemoteStore shutting down."),i.Ea.add(5),await ci(i),i.Aa.shutdown(),i.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Gc.provider={build:()=>new Gc};/**
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
 */class su{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Bt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const En="FirestoreClient";class g2{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=$e.UNAUTHENTICATED,this.clientId=xl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{B(En,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(B(En,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Yl(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Ja(n,e){n.asyncQueue.verifyOperationInProgress(),B(En,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Qm(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function uf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await m2(n);B(En,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>rf(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>rf(e.remoteStore,s))),n._onlineComponents=e}async function m2(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B(En,"Using user provided OfflineComponentProvider");try{await Ja(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Mr("Error using user provided cache. Falling back to memory cache: "+t),await Ja(n,new To)}}else B(En,"Using default OfflineComponentProvider"),await Ja(n,new p2(void 0));return n._offlineComponents}async function py(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B(En,"Using user provided OnlineComponentProvider"),await uf(n,n._uninitializedComponentsProvider._online)):(B(En,"Using default OnlineComponentProvider"),await uf(n,new Gc))),n._onlineComponents}function y2(n){return py(n).then((e=>e.syncEngine))}async function Eo(n){const e=await py(n),t=e.eventManager;return t.onListen=t2.bind(null,e.syncEngine),t.onUnlisten=s2.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=n2.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=i2.bind(null,e.syncEngine),t}function _2(n,e,t,r){const s=new su(r),i=new tu(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>Xl(await Eo(n),i))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>Zl(await Eo(n),i)))}}function b2(n,e,t={}){const r=new Lt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const d=new su({next:m=>{d.Nu(),o.enqueueAndForget((()=>Zl(i,p)));const E=m.docs.has(c);!E&&m.fromCache?u.reject(new j(V.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&l&&l.source==="server"?u.reject(new j(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new tu(Go(c.path),d,{includeMetadataChanges:!0,Ka:!0});return Xl(i,p)})(await Eo(n),n.asyncQueue,e,t,r))),r.promise}function w2(n,e,t={}){const r=new Lt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const d=new su({next:m=>{d.Nu(),o.enqueueAndForget((()=>Zl(i,p))),m.fromCache&&l.source==="server"?u.reject(new j(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new tu(c,d,{includeMetadataChanges:!0,Ka:!0});return Xl(i,p)})(await Eo(n),n.asyncQueue,e,t,r))),r.promise}function T2(n,e){const t=new Lt;return n.asyncQueue.enqueueAndForget((async()=>o2(await y2(n),e,t))),t.promise}/**
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
 */function gy(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const E2="ComponentProvider",hf=new Map;function v2(n,e,t,r,s){return new $1(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,gy(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const my="firestore.googleapis.com",df=!0;class ff{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new j(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=my,this.ssl=df}else this.host=e.host,this.ssl=e.ssl??df;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Jm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<QA)throw new j(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}x1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gy(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ta{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ff({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ff(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new T1;switch(r.type){case"firstParty":return new A1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=hf.get(t);r&&(B(E2,"Removing Datastore"),hf.delete(t),r.terminate())})(this),Promise.resolve()}}function I2(n,e,t,r={}){var u;n=ot(n,ta);const s=zr(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(ug(`https://${c}`),hg("Firestore",!0)),i.host!==my&&i.host!==c&&Mr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Yn(l,o)&&(n._setSettings(l),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=$e.MOCK_USER;else{d=zT(r.mockUserToken,(u=n._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new j(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new $e(m)}n._authCredentials=new E1(new im(d,p))}}/**
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
 */class cr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new cr(this.firestore,e,this._query)}}class Ae{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ae(this.firestore,e,this._key)}toJSON(){return{type:Ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(si(t,Ae._jsonSchema))return new Ae(e,r||null,new z(fe.fromString(t.referencePath)))}}Ae._jsonSchemaVersion="firestore/documentReference/1.0",Ae._jsonSchema={type:ke("string",Ae._jsonSchemaVersion),referencePath:ke("string")};class mn extends cr{constructor(e,t,r){super(e,t,Go(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ae(this.firestore,null,new z(e))}withConverter(e){return new mn(this.firestore,e,this._path)}}function ui(n,e,...t){if(n=We(n),om("collection","path",e),n instanceof ta){const r=fe.fromString(e,...t);return Ad(r),new mn(n,null,r)}{if(!(n instanceof Ae||n instanceof mn))throw new j(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(fe.fromString(e,...t));return Ad(r),new mn(n.firestore,null,r)}}function Cn(n,e,...t){if(n=We(n),arguments.length===1&&(e=xl.newId()),om("doc","path",e),n instanceof ta){const r=fe.fromString(e,...t);return Id(r),new Ae(n,null,new z(r))}{if(!(n instanceof Ae||n instanceof mn))throw new j(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(fe.fromString(e,...t));return Id(r),new Ae(n.firestore,n instanceof mn?n.converter:null,new z(r))}}/**
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
 */const pf="AsyncQueue";class gf{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Xm(this,"async_queue_retry"),this._c=()=>{const r=Wa();r&&B(pf,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Wa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Wa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Lt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Yr(e))throw e;B(pf,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Bt("INTERNAL UNHANDLED ERROR: ",mf(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Ql.createAndSchedule(this,e,t,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&W(47125,{Pc:mf(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function mf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class vn extends ta{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new gf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gf(e),this._firestoreClient=void 0,await e}}}function A2(n,e){const t=typeof n=="object"?n:gg(),r=typeof n=="string"?n:fo,s=_l(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=HT("firestore");i&&I2(s,...i)}return s}function na(n){if(n._terminated)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||C2(n),n._firestoreClient}function C2(n){var r,s,i,o;const e=n._freezeSettings(),t=v2(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new g2(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class st{constructor(e){this._byteString=e}static fromBase64String(e){try{return new st(Ue.fromBase64String(e))}catch(t){throw new j(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new st(Ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:st._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(si(e,st._jsonSchema))return st.fromBase64String(e.bytes)}}st._jsonSchemaVersion="firestore/bytes/1.0",st._jsonSchema={type:ke("string",st._jsonSchemaVersion),bytes:ke("string")};/**
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
 */class yy{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class iu{constructor(e){this._methodName=e}}/**
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
 */class Rt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Rt._jsonSchemaVersion}}static fromJSON(e){if(si(e,Rt._jsonSchema))return new Rt(e.latitude,e.longitude)}}Rt._jsonSchemaVersion="firestore/geoPoint/1.0",Rt._jsonSchema={type:ke("string",Rt._jsonSchemaVersion),latitude:ke("number"),longitude:ke("number")};/**
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
 */class gt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:gt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(si(e,gt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new gt(e.vectorValues);throw new j(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}gt._jsonSchemaVersion="firestore/vectorValue/1.0",gt._jsonSchema={type:ke("string",gt._jsonSchemaVersion),vectorValues:ke("object")};/**
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
 */const R2=/^__.*__$/;class k2{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new or(e,this.data,this.fieldMask,t,this.fieldTransforms):new oi(e,this.data,t,this.fieldTransforms)}}function _y(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{dataSource:n})}}class ou{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new ou({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return vo(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(_y(this.dataSource)&&R2.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class S2{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Xo(e)}createContext(e,t,r,s=!1){return new ou({dataSource:e,methodName:t,targetDoc:r,path:Le.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function au(n){const e=n._freezeSettings(),t=Xo(n._databaseId);return new S2(n._databaseId,!!e.ignoreUndefinedProperties,t)}function by(n,e,t,r,s,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);Ey("Data must be an object, but it was:",o,r);const c=wy(r,o);let l,u;if(i.merge)l=new ut(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=ra(e,p,t);if(!o.contains(m))throw new j(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);N2(d,m)||d.push(m)}l=new ut(d),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new k2(new rt(c),l,u)}class cu extends iu{_toFieldTransform(e){return new mA(e.path,new Hs)}isEqual(e){return e instanceof cu}}function P2(n,e,t,r=!1){return lu(t,n.createContext(r?4:3,e))}function lu(n,e){if(Ty(n=We(n)))return Ey("Unsupported field value:",e,n),wy(n,e);if(n instanceof iu)return(function(r,s){if(!_y(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=lu(c,s.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ge.fromDate(r);return{timestampValue:_o(s.serializer,i)}}if(r instanceof ge){const i=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_o(s.serializer,i)}}if(r instanceof Rt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof st)return{bytesValue:jm(s.serializer,r._byteString)};if(r instanceof Ae){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof gt)return(function(o,c){const l=o instanceof gt?o.toArray():o;return{mapValue:{fields:{[gm]:{stringValue:mm},[po]:{arrayValue:{values:l.map((d=>{if(typeof d!="number")throw c.createError("VectorValues must only contain numeric values.");return Ml(c.serializer,d)}))}}}}}})(r,s);if(Wm(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${$o(r)}`)})(n,e)}function wy(n,e){const t={};return lm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sr(n,((r,s)=>{const i=lu(s,e.childContextForField(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Ty(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ge||n instanceof Rt||n instanceof st||n instanceof Ae||n instanceof iu||n instanceof gt||Wm(n))}function Ey(n,e,t){if(!Ty(t)||!am(t)){const r=$o(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function ra(n,e,t){if((e=We(e))instanceof yy)return e._internalPath;if(typeof e=="string")return V2(n,e);throw vo("Field path arguments must be of type string or ",n,!1,void 0,t)}const x2=new RegExp("[~\\*/\\[\\]]");function V2(n,e,t){if(e.search(x2)>=0)throw vo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new yy(...e.split("."))._internalPath}catch{throw vo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function vo(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new j(V.INVALID_ARGUMENT,c+n+l)}function N2(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class D2{convertValue(e,t="none"){switch(wn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw W(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return sr(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[po].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>Ie(o.doubleValue)));return new gt(t)}convertGeoPoint(e){return new Rt(Ie(e.latitude),Ie(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=zo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(js(e));default:return null}}convertTimestamp(e){const t=_n(e);return new ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=fe.fromString(e);le(Gm(r),9688,{name:e});const s=new Bs(r.get(1),r.get(3)),i=new z(r.popFirst(5));return s.isEqual(t)||Bt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class uu extends D2{constructor(e){super(),this.firestore=e}convertBytes(e){return new st(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ae(this.firestore,null,t)}}function Me(){return new cu("serverTimestamp")}const yf="@firebase/firestore",_f="4.10.0";/**
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
 */function bf(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class vy{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new O2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(ra("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class O2 extends vy{data(){return super.data()}}/**
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
 */function Iy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hu{}class L2 extends hu{}function du(n,e,...t){let r=[];e instanceof hu&&r.push(e),r=r.concat(t),(function(i){const o=i.filter((l=>l instanceof pu)).length,c=i.filter((l=>l instanceof sa)).length;if(o>1||o>0&&c>0)throw new j(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class sa extends L2{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new sa(e,t,r)}_apply(e){const t=this._parse(e);return Ay(e._query,t),new cr(e.firestore,e.converter,Lc(e._query,t))}_parse(e){const t=au(e.firestore);return(function(i,o,c,l,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new j(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Tf(p,d);const v=[];for(const C of p)v.push(wf(l,i,C));m={arrayValue:{values:v}}}else m=wf(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Tf(p,d),m=P2(c,o,p,d==="in"||d==="not-in");return Re.create(u,d,m)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function fu(n,e,t){const r=e,s=ra("where",n);return sa._create(s,r,t)}class pu extends hu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new pu(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:_t.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Ay(o,l),o=Lc(o,l)})(e._query,t),new cr(e.firestore,e.converter,Lc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function wf(n,e,t){if(typeof(t=We(t))=="string"){if(t==="")throw new j(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Im(e)&&t.indexOf("/")!==-1)throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(fe.fromString(t));if(!z.isDocumentKey(r))throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Nd(n,new z(r))}if(t instanceof Ae)return Nd(n,t._key);throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$o(t)}.`)}function Tf(n,e){if(!Array.isArray(n)||n.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ay(n,e){const t=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Cy(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Is{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jn extends vy{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ra("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Jn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Jn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Jn._jsonSchema={type:ke("string",Jn._jsonSchemaVersion),bundleSource:ke("string","DocumentSnapshot"),bundleName:ke("string"),bundle:ke("string")};class Qi extends Jn{data(e={}){return super.data(e)}}class Kn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Is(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Qi(this._firestore,this._userDataWriter,r.key,r,new Is(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Qi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Is(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new Qi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Is(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:M2(c.type),doc:l,oldIndex:u,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Kn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function M2(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W(61501,{type:n})}}/**
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
 */Kn._jsonSchemaVersion="firestore/querySnapshot/1.0",Kn._jsonSchema={type:ke("string",Kn._jsonSchemaVersion),bundleSource:ke("string","QuerySnapshot"),bundleName:ke("string"),bundle:ke("string")};/**
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
 */function hi(n){n=ot(n,Ae);const e=ot(n.firestore,vn),t=na(e);return b2(t,n._key).then((r=>Ry(e,n,r)))}function di(n){n=ot(n,cr);const e=ot(n.firestore,vn),t=na(e),r=new uu(e);return Iy(n._query),w2(t,n._query).then((s=>new Kn(e,r,n,s)))}function Ht(n,e,t){n=ot(n,Ae);const r=ot(n.firestore,vn),s=Cy(n.converter,e,t),i=au(r);return mu(r,[by(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,pt.none())])}function fi(n){return mu(ot(n.firestore,vn),[new Ul(n._key,pt.none())])}function gu(n,e){const t=ot(n.firestore,vn),r=Cn(n),s=Cy(n.converter,e),i=au(n.firestore);return mu(t,[by(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,pt.exists(!1))]).then((()=>r))}function lr(n,...e){var u,d,p;n=We(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||bf(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(bf(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(d=m.error)==null?void 0:d.bind(m),e[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let i,o,c;if(n instanceof Ae)o=ot(n.firestore,vn),c=Go(n._key.path),i={next:m=>{e[r]&&e[r](Ry(o,n,m))},error:e[r+1],complete:e[r+2]};else{const m=ot(n,cr);o=ot(m.firestore,vn),c=m._query;const E=new uu(o);i={next:v=>{e[r]&&e[r](new Kn(o,E,m,v))},error:e[r+1],complete:e[r+2]},Iy(n._query)}const l=na(o);return _2(l,c,s,i)}function mu(n,e){const t=na(n);return T2(t,e)}function Ry(n,e,t){const r=t.docs.get(e._key),s=new uu(n);return new Jn(n,s,e._key,r,new Is(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){w1(Gr),Or(new Xn("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new vn(new v1(r.getProvider("auth-internal")),new C1(o,r.getProvider("app-check-internal")),H1(o,s),o);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),fn(yf,_f,e),fn(yf,_f,"esm2020")})();const U2={apiKey:"AIzaSyCvK7ounDvKzgKGHK30uCFqDUbqZkoOGJc",authDomain:"cardy-hardy.firebaseapp.com",projectId:"cardy-hardy",storageBucket:"cardy-hardy.firebasestorage.app",messagingSenderId:"756160918063",appId:"1:756160918063:web:830975f45634054dfe8cda",measurementId:"G-MXM77YZD95"};let Ka=null,Qa=null,Ya=null,Xa=null;const ky=()=>(Ka||(Ka=pg(U2)),Ka),Hr=()=>(Qa||(Qa=_1(ky())),Qa),Ef=()=>(Ya||(Ya=new Nt),Ya),at=()=>(Xa||(Xa=A2(ky())),Xa),Sy=()=>Cn(at(),"admins","list"),Py=()=>Cn(at(),"config","site"),yu=n=>Cn(at(),"users",n),xy=()=>ui(at(),"users"),_u=()=>ui(at(),"games"),Vy=n=>Cn(at(),"games",n),bu=()=>ui(at(),"manufacturers"),Ny=n=>Cn(at(),"manufacturers",n),wu=()=>ui(at(),"gameRatings"),Wc=n=>Cn(at(),"gameRatings",n),ia=()=>ui(at(),"currentGames"),Dy=n=>Cn(at(),"currentGames",n),Jc=(n="")=>n.trim().toLowerCase(),F2=()=>typeof navigator<"u"&&/iPad|iPhone|iPod/i.test(navigator.userAgent||""),j2=async()=>{const n=[{key:"indexedDB",value:Gg},{key:"local",value:jg},{key:"session",value:Cl}];let e=null;for(const t of n)try{return await sI(Hr(),t.value),{persistence:t.key,error:null}}catch(r){e=r,console.warn(`Failed to set ${t.key} persistence`,r)}return{persistence:"none",error:e}},B2=async()=>{let n=null,e=null;try{e=await DI(Hr())}catch(r){n=r,console.error("Firebase redirect sign-in failed",r)}const t=await j2();return{redirectError:n,redirectResult:e,persistence:t}},Tu=async()=>{try{return await CI(Hr(),Ef())}catch(n){if(!F2())throw n;return console.warn("Popup sign-in failed on iOS, falling back to redirect",n),VI(Hr(),Ef())}},qt=()=>(console.log("start signout"),cI(Hr()).then(()=>{console.log("signout completed")})),$2=n=>aI(Hr(),n),Oy=async()=>{const n=await hi(Sy());if(!n.exists())return[];const e=n.data();return Array.isArray(e.items)?e.items:[]},H2=async(n="")=>(await Oy()).map(Jc).includes(Jc(n)),q2=async n=>Ht(Sy(),{items:n.map(Jc).filter(Boolean),updatedAt:Me()},{merge:!0}),Eu=async()=>{const n=await hi(Py());if(!n.exists())return null;const e=n.data();return typeof e.nextMeetupDate=="number"?e.nextMeetupDate:null},z2=async n=>Ht(Py(),{nextMeetupDate:n,updatedAt:Me()},{merge:!0}),G2=async n=>{const e=yu(n.id),t=await hi(e),r={email:n.email,firstName:n.firstName,lastName:n.lastName,...n.userType?{userType:n.userType}:{},updatedAt:Me()};return t.exists()?Ht(e,r,{merge:!0}):Ht(e,{...r,createdAt:Me()})},W2=async n=>{const e=n==null?void 0:n.uid;if(!e)return!1;const t=yu(e);if((await hi(t)).exists())return!0;const s=(n.email||"").trim().toLowerCase();if(s&&!(await di(du(xy(),fu("email","==",s)))).empty)return!0;const i=n.displayName||"",[o="",...c]=i.trim().split(/\s+/),l=c.join(" ");return await Ht(t,{email:s,firstName:o,lastName:l,userType:"unverified",createdAt:Me(),updatedAt:Me()}),!0},J2=()=>{const n=new zt([]),e=lr(xy(),t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));r.sort((s,i)=>{var l,u,d,p,m,E,v,C,D,O;const o=(l=s==null?void 0:s.createdAt)!=null&&l.seconds?s.createdAt.seconds*1e3:((m=(p=(d=(u=s==null?void 0:s.createdAt)==null?void 0:u.toDate)==null?void 0:d.call(u))==null?void 0:p.getTime)==null?void 0:m.call(p))??0;return((E=i==null?void 0:i.createdAt)!=null&&E.seconds?i.createdAt.seconds*1e3:((O=(D=(C=(v=i==null?void 0:i.createdAt)==null?void 0:v.toDate)==null?void 0:C.call(v))==null?void 0:D.getTime)==null?void 0:O.call(D))??0)-o}),n.next(r)},t=>{console.error("Failed to listen to users",t)});return n.unsubscribe=e,n},K2=async n=>n?(await fi(yu(n)),!0):!1,oa=()=>{const n=new zt([]),e=lr(_u(),t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));n.next(Uy(r))},t=>{console.error("Failed to listen to games",t)});return n.unsubscribe=e,n},Ly=()=>{const n=new zt([]),e=lr(bu(),t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));n.next(Fy(r))},t=>{console.error("Failed to listen to manufacturers",t)});return n.unsubscribe=e,n},Q2=async()=>{const e=(await di(bu())).docs.map(t=>({id:t.id,...t.data()}));return Fy(e)},Y2=async n=>{const e=fR(n);return n.id?Ht(Ny(n.id),{...e,updatedAt:Me()},{merge:!0}):gu(bu(),{...e,createdAt:Me(),updatedAt:Me()})},X2=async n=>n?(await fi(Ny(n)),!0):!1,My=async()=>{const e=(await di(_u())).docs.map(t=>({id:t.id,...t.data()}));return Uy(e)},Z2=async n=>{const e=dR(n);return n.id?Ht(Vy(n.id),{...e,updatedAt:Me()},{merge:!0}):gu(_u(),{...e,createdAt:Me(),updatedAt:Me()})},eR=async n=>n?(await fi(Vy(n)),!0):!1,tR=()=>{const n=new zt([]),e=lr(wu(),t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));n.next(Iu(r))},t=>{console.error("Failed to listen to game ratings",t)});return n.unsubscribe=e,n},nR=()=>{const n=new zt([]),e=lr(du(wu(),fu("isVisible","==",!0)),t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));n.next(Iu(r))},t=>{console.error("Failed to listen to visible game ratings",t)});return n.unsubscribe=e,n},rR=async()=>{const e=(await di(wu())).docs.map(t=>({id:t.id,...t.data()}));return Iu(e)},sR=async n=>{const e=pR(n),t=n.id||n.gameId;if(!t)throw new Error("Game rating requires a gameId.");const r=await hi(Wc(t));return Ht(Wc(t),{...e,updatedAt:Me(),...r.exists()?{}:{createdAt:Me()}},{merge:!0})},iR=async n=>n?(await fi(Wc(n)),!0):!1,oR=()=>{const n=new zt([]),e=lr(ia(),t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));n.next(vu(r))},t=>{console.error("Failed to listen to current games",t)});return n.unsubscribe=e,n},aR=()=>{const n=new zt([]),e=lr(du(ia(),fu("isVisible","==",!0)),t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));n.next(vu(r))},t=>{console.error("Failed to listen to visible current games",t)});return n.unsubscribe=e,n},cR=async()=>{const e=(await di(ia())).docs.map(t=>({id:t.id,...t.data()}));return vu(e)},lR=async n=>{const e=hR(n);return n.id?Ht(Dy(n.id),{...e,updatedAt:Me()},{merge:!0}):gu(ia(),{...e,createdAt:Me(),updatedAt:Me()})},uR=async n=>n?(await fi(Dy(n)),!0):!1,hR=n=>{const e={gameId:(n.gameId||"").trim(),dateAddedToCollection:n.dateAddedToCollection,notes:(n.notes||"").trim(),isVisible:n.isVisible!==!1};return n.title&&(e.title=n.title.trim()),n.imageUrl&&(e.imageUrl=n.imageUrl.trim()),n.manufacturer&&(e.manufacturer=n.manufacturer.trim()),typeof n.yearReleased=="number"&&!Number.isNaN(n.yearReleased)&&(e.yearReleased=n.yearReleased),e},dR=n=>{const e={title:(n.title||"").trim(),manufacturerId:(n.manufacturerId||"").trim(),imageUrl:(n.imageUrl||"").trim(),manufacturer:(n.manufacturer||"").trim(),notes:(n.notes||"").trim()};return typeof n.yearReleased=="number"&&!Number.isNaN(n.yearReleased)?e.yearReleased=n.yearReleased:e.yearReleased=null,e},fR=n=>({name:(n.name||"").trim(),logoUrl:(n.logoUrl||"").trim(),opinions:(n.opinions||"").trim()}),pR=n=>{const e=typeof n.rating=="number"&&!Number.isNaN(n.rating)?Math.max(0,Math.min(10,n.rating)):null,t=Array.isArray(n.videos)?n.videos.map(r=>({url:((r==null?void 0:r.url)||"").trim(),description:((r==null?void 0:r.description)||"").trim()})).filter(r=>r.url||r.description):[];return{gameId:(n.gameId||"").trim(),rating:e,review:(n.review||"").trim(),videos:t,isVisible:n.isVisible!==!1}},vf=n=>{if(!n)return 0;if(typeof n.toDate=="function")return n.toDate().getTime();if(typeof n=="number")return n;if(n.seconds)return n.seconds*1e3;const e=new Date(n).getTime();return Number.isNaN(e)?0:e},vu=n=>[...n].sort((e,t)=>vf(t.dateAddedToCollection)-vf(e.dateAddedToCollection)),Uy=n=>[...n].sort((e,t)=>String(e.title||"").localeCompare(String(t.title||""),void 0,{sensitivity:"base"})),Fy=n=>[...n].sort((e,t)=>String(e.name||"").localeCompare(String(t.name||""),void 0,{sensitivity:"base"})),Iu=n=>[...n].sort((e,t)=>Number(t.rating||0)-Number(e.rating||0)||String(e.gameId||"").localeCompare(String(t.gameId||""),void 0,{sensitivity:"base"})),Au=({onUser:n,toast:e})=>{if(typeof n!="function")throw new Error("startAuthFlow requires an onUser callback.");B2().then(({redirectError:t,redirectResult:r,persistence:s})=>{var i,o;t&&((i=e==null?void 0:e.error)==null||i.call(e,"Sign-in failed after redirect. Try again.")),s!=null&&s.error&&((o=e==null?void 0:e.error)==null||o.call(e,"Safari blocked login storage. Check cookie settings.")),r!=null&&r.user&&n(r.user,"redirectResult")}).catch(t=>{var r;console.error("Failed to prepare auth",t),(r=e==null?void 0:e.error)==null||r.call(e,"Sign-in setup failed. Try again.")}),$2(t=>{n(t,"onAuthChanged")})},gR=async({user:n,mountSso:e,toast:t,onDenied:r,onPermissionsError:s}={})=>{var o,c;let i=!1;try{i=await H2((n==null?void 0:n.email)||"")}catch(l){return console.error("Failed to load admin list",l),s==null||s(l),(o=t==null?void 0:t.error)==null||o.call(t,"Unable to verify access. Check Firestore rules."),e==null||e("denied",(n==null?void 0:n.email)||"","auth:permissions"),!1}return i?!0:(r==null||r(),(c=t==null?void 0:t.error)==null||c.call(t,`Signed in as ${(n==null?void 0:n.email)||"unknown"} but not authorized.`),e==null||e("denied",(n==null?void 0:n.email)||"","auth:denied"),!1)},Cu=async({user:n,mountSso:e,toast:t,setCurrentUser:r,onSignedOut:s,onDenied:i,onAuthorized:o,reason:c=""}={})=>{if(!n)return r==null||r(null),s==null||s(),e==null||e("login","","auth:logged-out"),!1;try{await W2(n)}catch(u){console.warn("Failed to ensure user profile",u)}return await gR({user:n,mountSso:e,toast:t,onDenied:i,onPermissionsError:i})?(r==null||r(n),o==null||o(n,c),!0):!1},aa=L(({status:n,userEmail:e,adminEmail:t,onSignIn:r,onSignOut:s})=>(aa.inputs(i=>{[{status:n,userEmail:e,adminEmail:t,onSignIn:r,onSignOut:s}]=i,r=ne(r),s=ne(s)}),[()=>n==="loading"?La.class`panel auth-panel`(ce("Checking login...")):n==="denied"?La.class`panel auth-panel`(vt("Access denied"),ce.class`auth-warning`(()=>e||"This account"," is not authorized."),ce("Please be patient as we review your account to become verified status."),y.class`auth-actions`(K.type`button`.class`add-button`.onClick(s)("Sign out"))):La.class`panel auth-panel`(vt("Sign in"),ce("Use Google to access admin tools."),y.class`auth-actions`(K.type`button`.class`add-button`.onClick(r)("Sign in with Google")))])),mR=L(()=>{let n=[];const e=we(()=>{});L.promise=Oy().then(o=>{n=Array.isArray(o)?o:[],e()}).catch(o=>{console.error("Failed to load admin list",o)});const t=(o,c)=>{n=n.map((l,u)=>u===o?c:l),e()},r=()=>{n=[...n,""],e()},s=o=>{n=n.filter((c,l)=>l!==o),e()},i=()=>q2(n).then(()=>{alert("saved")}).catch(o=>{console.error("Failed to save admin list",o)});return Mo.style`border:0;padding:0;margin:0;`(y.style`display:flex;flex-direction:column;gap:0.6em;`(o=>(n.length?n:[""]).map((c,l)=>y.style`display:flex;gap:0.6em;align-items:center;`(be.type`text`.value(u=>c).onInput(u=>t(l,u.target.value)).style`width:100%`,K.onClick(()=>s(l))("remove")))),y.style`display:flex;gap:0.6em;align-items:center;margin-top:0.8em;flex-wrap:wrap;`(K.onClick(r)("add"),K.onClick(i)("save to firestore")))});function jy({startDateTime:n,message:e,subject:t}){n=new Date(n);const{year:r,month:s}=Ru(n),i=("0"+(n.getDate()+1)).slice(-2),o=Io(n),c=new Date(new Date(n).setHours(n.getHours()+2)),l=Io(c),u=encodeURIComponent(e),d=encodeURIComponent(t);return`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${r}${s}${i}${o}%2F${r}${s}${i}${l}&details=${u}&location=&text=${d}`}function By({startDateTime:n,message:e,subject:t}){n=new Date(n);const{year:r,month:s,day:i,hours:o}=Ru(n),l=new Date(new Date(n).setHours(n.getHours()+2)).getHours(),u=encodeURIComponent(e.replace(/\n/g,"<br>")),d=encodeURIComponent(t);return`https://outlook.live.com/calendar/0/action/compose?allday=false&body=${u}&enddt=${r}-${s}-${i}T${l}%3A00%3A00&location=&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=${r}-${s}-${i}T${o}%3A00%3A00&subject=${d}`}function $y({startDateTime:n,message:e,subject:t}){n=new Date(n);const{year:r,month:s}=Ru(n),i=("0"+(n.getDate()+1)).slice(-2),o=Io(n),c=new Date(new Date(n).setHours(n.getHours()+2)),l=Io(c);return`BEGIN:VCALENDAR
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
END:VCALENDAR`}function Ru(n){n=new Date(n);const e=n.getFullYear(),t=("0"+(n.getMonth()+1)).slice(-2),r=("0"+n.getDate()).slice(-2),s=n.getHours();return{year:e,month:t,day:r,hours:s}}function Io(n){const e=String(n.getUTCHours()).padStart(2,"0"),t=String(n.getUTCMinutes()).padStart(2,"0"),r=String(n.getUTCSeconds()).padStart(2,"0");return`T${e}${t}${r}Z`}const Hy=L(n=>{Hy.updates(t=>[n]=t);const e=new Date(n);return y.style`text-align:center;`(y(te("🗓️ ",e.toLocaleString("default",{weekday:"long"}),", ",e.toLocaleString("default",{month:"long"})," ",e.getDate(),qy(e))),t=>rg({date:n}),yR(e))});function yR(n){return y.style`font-size:.65em;opacity:.7`(_R(n))}function Za(n,e){const t={hour:"numeric",minute:"numeric",hour12:!0,timeZone:e,timeZoneName:"short"};return new Intl.DateTimeFormat("en-US",t).format(n)}function _R(n){const e=Za(n,"America/New_York"),t=Za(n,"America/Chicago"),r=Za(n,"America/Los_Angeles");return`${e} / ${t} / ${r}`}const Be={subject:"Cary Hardy Patreon meetup",message:`
    Link to virtual meeting is posted to Patreon on a day of meeting
  
    https://www.patreon.com/caryhardy
  `.trim().replace(/    /g,"")},ca=L(({date:n,showLearnMore:e=!0})=>{n=new Date(n),ca.updates(u=>{[{date:n,showLearnMore:e}]=u});let t=!1;const r=jy({startDateTime:n,message:Be.message,subject:Be.subject}),s=By({startDateTime:n,message:Be.message,subject:Be.subject}),i=[{type:"google",url:r},{type:"outlook",url:s}],o=$y({startDateTime:n,message:Be.message,subject:Be.subject});var c=new Blob([o],{type:"text/calendar"});const l=window.URL.createObjectURL(c);return De(y.style`padding:.5em;`("Countdown until the next, Patreon LE only, group meetup"),()=>Hy(n),y.style`white-space:nowrap;font-size:.7em;opacity:.8`("save meetup to your calendar using links below 👇"),y.style`background-color:black;padding:0 0 .2em 0;`(y.style`white-space:nowrap;font-size:.5em;opacity:.6`("choose your calendar type below"),y.style`display:flex;gap:1em;justify-content: center;`(i.map(u=>If(u.type,{href:u.url},u.type==="google"?Z.src`assets/media/gmail-logo-2.png`.width`48`.height`48`.border`0`:Z.src`assets/media/outlook-icon.png`.width`48`.height`48`.border`0`).key(u)),If("ical",{href:l,download:"cary-hardy-meetup.ics"},ji.viewBox`0 0 170 170`.fill`currentColor`.width`48`.height`48`(tg("Apple Logo"),Z.src`assets/media/ical.png`.width`48`.height`48`.border`0`))),Q,y(q.style`font-size:0.7em;`(PT(H.onClick(()=>t=!t).style`color:white;`("⬜️ qr invite codes here"))))),ce.style`font-size:0.8em;opacity:0.7;line-height:0.9em;`(q("🔗 A link to virtual meetup is posted on day of meetup,",Q,"in the LE ONLY 💬 chat on Patreon.")),()=>e&&y.style`padding:.8em;font-size: .7em;`(H.class`no-a-style`.href`meetup.html`(K.type`button`("learn more"))))});function qy(n){var e=n.getDate(),t="th";return e===1||e===21||e===31?"st":e===2||e===22?"nd":e===3||e===23?"rd":t}const If=(n,e,t)=>{const r=H.class`small-icon-link`.href`${e.href}`.attr("target","_blank");return(e.download?r.attr("download",e.download):r)(y.class`small-icon`(t),q.style`font-size:0.5em;`(n))};function ec(n){var e=document.createElement("textarea");e.value=n,document.body.appendChild(e),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(e)}const zy=L(({nextMeetupDate:n,onQrUrlChange:e})=>{zy.inputs(i=>{[{nextMeetupDate:n,onQrUrlChange:e}]=i,e=ne(e)});const t=jy({startDateTime:n,message:Be.message,subject:Be.subject}),r=By({startDateTime:n,message:Be.message,subject:Be.subject}),s=$y({startDateTime:n,message:Be.message,subject:Be.subject});return Mo.style`border:0;padding:0;margin:0;`(y(y.style`display:flex;flex-wrap:wrap;gap:1em`(y(ye("Message"),y(be.type`text`.value(i=>Be.message).onChange(i=>Be.message=i.target.value).style`width:100%`)),y(ye("Subject"),y(be.type`text`.value(i=>Be.subject).onChange(i=>Be.subject=i.target.value).style`width:100%`))),Q,Q,y.style`display:flex;flex-wrap:wrap;gap:1em;flex-direction:column;`(y.style`display:flex;flex-grow:1`(ji.attr("xmlns","http://www.w3.org/2000/svg").attr("viewBox","0 0 48 48").attr("width","48").attr("height","48")(VT.attr("width","22").attr("height","22").attr("x","13").attr("y","13").attr("fill","#fff"),Si.attr("fill","#1e88e5").attr("points","25.68,20.92 26.688,22.36 28.272,21.208 28.272,29.56 30,29.56 30,18.616 28.56,18.616"),Pt.attr("fill","#1e88e5").attr("d","M22.943,23.745c0.625-0.574,1.013-1.37,1.013-2.249c0-1.747-1.533-3.168-3.417-3.168 c-1.602,0-2.972,1.009-3.33,2.453l1.657,0.421c0.165-0.664,0.868-1.146,1.673-1.146c0.942,0,1.709,0.646,1.709,1.44 c0,0.794-0.767,1.44-1.709,1.44h-0.997v1.728h0.997c1.081,0,1.993,0.751,1.993,1.64c0,0.904-0.866,1.64-1.931,1.64 c-0.962,0-1.784-0.61-1.914-1.418L17,26.802c0.262,1.636,1.81,2.87,3.6,2.87c2.007,0,3.64-1.511,3.64-3.368 C24.24,25.281,23.736,24.363,22.943,23.745z"),Si.attr("fill","#fbc02d").attr("points","34,42 14,42 13,38 14,34 34,34 35,38"),Si.attr("fill","#4caf50").attr("points","38,35 42,34 42,14 38,13 34,14 34,34"),Pt.attr("fill","#1e88e5").attr("d","M34,14l1-4l-1-4H9C7.343,6,6,7.343,6,9v25l4,1l4-1V14H34z"),Si.attr("fill","#e53935").attr("points","34,34 34,42 42,34"),Pt.attr("fill","#1565c0").attr("d","M39,6h-5v8h8V9C42,7.343,40.657,6,39,6z"),Pt.attr("fill","#1565c0").attr("d","M9,42h5v-8H6v5C6,40.657,7.343,42,9,42z")),be.type`text`.style`width:100%`.value(t),K.onClick(()=>ec(t))("copy"),K.onClick(()=>e(t))("qr")),y.style`display:flex;flex:1`(ji.attr("xmlns","http://www.w3.org/2000/svg").attr("viewBox","0 0 48 48").attr("width","48").attr("height","48")(Pt.attr("fill","#03A9F4").attr("d","M21,31c0,1.104,0.896,2,2,2h17c1.104,0,2-0.896,2-2V16c0-1.104-0.896-2-2-2H23c-1.104,0-2,0.896-2,2V31z"),Pt.attr("fill","#B3E5FC").attr("d","M42,16.975V16c0-0.428-0.137-0.823-0.367-1.148l-11.264,6.932l-7.542-4.656L22.125,19l8.459,5L42,16.975z"),Pt.attr("fill","#0277BD").attr("d","M27 41.46L6 37.46 6 9.46 27 5.46z"),Pt.attr("fill","#FFF").attr("d","M21.216,18.311c-1.098-1.275-2.546-1.913-4.328-1.913c-1.892,0-3.408,0.669-4.554,2.003c-1.144,1.337-1.719,3.088-1.719,5.246c0,2.045,0.564,3.714,1.69,4.986c1.126,1.273,2.592,1.91,4.378,1.91c1.84,0,3.331-0.652,4.474-1.975c1.143-1.313,1.712-3.043,1.712-5.199C22.869,21.281,22.318,19.595,21.216,18.311z M19.049,26.735c-0.568,0.769-1.339,1.152-2.313,1.152c-0.939,0-1.699-0.394-2.285-1.187c-0.581-0.785-0.87-1.861-0.87-3.211c0-1.336,0.289-2.414,0.87-3.225c0.586-0.81,1.368-1.211,2.355-1.211c0.962,0,1.718,0.393,2.267,1.178c0.555,0.795,0.833,1.895,0.833,3.31C19.907,24.906,19.618,25.968,19.049,26.735z")),be.type`text`.style`width:100%`.value(r),K.onClick(()=>ec(r))("copy"),K.onClick(()=>e(r))("qr")),y.style`display:flex;flex:1`(ji.attr("viewBox","0 0 170 170").attr("fill","currentColor").attr("width","48").attr("height","48")(tg("Apple Logo"),Pt.attr("d","M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.24z")),be.type`text`.style`width:100%`.value(s),K.onClick(()=>ec(s))("copy")))))}),Gy=L(({nextMeetupDate:n,date:e,time:t,onDate:r,onSave:s})=>(Gy.inputs(i=>{[{nextMeetupDate:n,date:e,time:t,onDate:r,onSave:s}]=i,r=ne(r),s=ne(s)}),Mo.style`border:0;padding:0;margin:0;`(i=>Wy({date:e,time:t,onDate:r}),y.style`margin-top:0.6em;`(K.onClick(s)("save to firestore")),ST,y.style`text-align:center;`(i=>ca({date:n}))))),Wy=L(({date:n,time:e,onDate:t})=>{let r=new Date(n+" "+e).getTime();Wy.inputs(o=>{[{date:n,time:e,onDate:t}]=o,t=ne(t),r=new Date(n+" "+e).getTime()});const s=o=>{const c=o.target.value;t(new Date(c+" "+e).getTime())},i=o=>{const c=o.target.value;t(new Date(n+" "+c).getTime())};return y.style`display:flex;flex-wrap:wrap;gap:1em`(y(ye("Date"),y(be.type`date`.value(o=>n).onChange(s).style`width:100%`)),y(ye.attr("for","time")("Time"),y(be.type`time`.value(o=>e).onChange(i).style`width:100%`)),y(ye.attr("for","time")("UTC"),y(o=>r)))});let Li=null;const bR=()=>window.QRCode?Promise.resolve():Li||(Li=new Promise((n,e)=>{const t=document.createElement("script");t.type="text/javascript",t.src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js",t.onload=()=>n(),t.onerror=()=>e(new Error("Failed to load QRCode library")),document.head.appendChild(t)}),Li),Jy=L(n=>{Jy.updates(i=>{i[0]!==n&&([n]=i,s())});const e=`qr-code-${Math.random().toString(36).slice(2,12)}`,t=()=>{window.requestAnimationFrame(s)},r=()=>{const i=window.QRCode;if(!i||!n)return;const o=document.getElementById(e);o&&(o.innerHTML="",new i(o,{text:n,width:300,height:300,colorDark:"#000000",colorLight:"#ffffff",correctLevel:i.CorrectLevel.L}))},s=()=>{bR().then(r).catch(i=>{console.error("Failed to render QR code",i)})};return Sp([n],t),y.id`${e}`}),Ky=L(({qrUrl:n,onQrUrlChange:e})=>(Ky.inputs(t=>{[{qrUrl:n,onQrUrlChange:e}]=t,e=ne(e),console.log("latest qrUrl",{qrUrl:n,x:t})}),Mo.style`border:0;padding:0;margin:0;`(be.type`text`.placeholder`paste website address`.value(t=>n).maxLength`1000`.onKeyUp(t=>(n=t.target.value,e(t.target.value))).onInput(t=>(n=t.target.value,e(t.target.value))),y.style`display:flex;flex-direction:column;align-items:center;gap:0.5em;`(t=>n&&Jy(n),t=>n&&q.style`max-width:300px;overflow-wrap:anywhere;text-align:center;opacity:0.75;line-height:1.3;`(r=>n)))));function Af(n){const e=new Date(n),t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),i=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0");return{date:`${t}-${r}-${s}`,time:`${i}:${o}`}}let Cf=!1;const Qy=L(n=>(e=Date.now(),t="",{date:r,time:s}=Af(Number(e)))=>{Qy.inputs(([c])=>{ne(c)});function i(){const c=Af(Number(e));r=c.date,s=c.time}Cf||(Cf=!0,L.promise=Eu().then(c=>{typeof c=="number"&&(e=c,i())}).catch(c=>{console.error("Failed to load next meetup date",c)}));const o=()=>z2(Number(e)).then(()=>{alert("saved")}).catch(c=>{console.error("Failed to save meetup date",c)});return y.style`max-width:1200px;margin:0 auto;padding:0 1em;`(bt(Z.src`assets/media/icon.png`.style`width:40px;margin-right:10px;`,"Hardy Tools"),y.style`display:flex;flex-wrap:wrap;gap:1em;text-align:left;`(c=>(console.log("rerendering qr maker",{qrUrl:t}),As({labelText:"QR Maker",flex:"1",contentNode:()=>Ky({qrUrl:t,onQrUrlChange:l=>{t=l,console.debug("qrUrl changed!",t)}})})),c=>As({labelText:"Calendar Links",flex:"2",contentNode:zy({nextMeetupDate:e,onQrUrlChange:l=>{t=l}})}),c=>As({labelText:"meeting tools",flex:"1",contentNode:Gy({nextMeetupDate:e,date:r,time:s,onDate:l=>{e=l,i()},onSave:o})}),c=>As({labelText:"admin users",flex:"1",contentNode:mR}),y.style`flex:1;min-width:min(320px, 100%);background:#1f1f1f;border:1px solid rgba(255,255,255,0.3);border-radius:0.8em;overflow:hidden;`(H.href`/admin/user.html`.style`display:block;padding:0.9em 1em;color:#fff;text-decoration:none;font-weight:600;text-align:center;`("👥 Open Users Admin")),y.style`flex:1;min-width:min(320px, 100%);background:linear-gradient(135deg, rgba(185,28,28,0.58), rgba(249,115,22,0.42), rgba(250,204,21,0.24));border:1px solid rgba(255,185,62,0.55);border-radius:0.8em;overflow:hidden;`(H.href`/admin/current-games.html`.style`display:block;padding:0.9em 1em;color:#fff;text-decoration:none;font-weight:800;text-align:center;`("🎮 Current Game Lineup")),y.style`flex:1;min-width:min(320px, 100%);background:#1f1f1f;border:1px solid rgba(255,185,62,0.55);border-radius:0.8em;overflow:hidden;`(H.href`/admin/games.html`.style`display:block;padding:0.9em 1em;color:#fff;text-decoration:none;font-weight:800;text-align:center;`("🕹️ Games Database")),y.style`flex:1;min-width:min(320px, 100%);background:#1f1f1f;border:1px solid rgba(255,185,62,0.55);border-radius:0.8em;overflow:hidden;`(H.href`/admin/manufacturers.html`.style`display:block;padding:0.9em 1em;color:#fff;text-decoration:none;font-weight:800;text-align:center;`("🏭 Manufacturers Database")),y.style`flex:1;min-width:min(320px, 100%);background:#1f1f1f;border:1px solid rgba(255,185,62,0.55);border-radius:0.8em;overflow:hidden;`(H.href`/admin/game-ratings.html`.style`display:block;padding:0.9em 1em;color:#fff;text-decoration:none;font-weight:800;text-align:center;`("⭐ Game Ratings"))),Q)}),As=L(({labelText:n,flex:e,contentNode:t})=>{As.inputs(i=>[{labelText:n,flex:e,contentNode:t}]=i);let r=!1;const s=()=>{r=!r};return y.style`flex:${e};min-width:min(500px, 100%);background:#1f1f1f;border:1px solid rgba(255,255,255,0.3);border-radius:0.8em;overflow:hidden;`(y.onClick(s).style`cursor:pointer;padding:0.75em 1em;color:#fff;user-select:none;font-weight:600;display:flex;gap:0.6em;align-items:center;`(y.style`width:1em;text-align:center;`(()=>r?"▼":"▶"),y(n)),()=>r?y.style`padding:0.8em 1em;border-top:1px solid rgba(255,255,255,0.2);`(i=>t):"")}),ur=L(n=>{ur.inputs(([i])=>{n=ne(i)});let e=!1;const t=we(()=>{}),r=()=>{e=!1,t()},s=()=>{e=!e,t()};return De(y.class`admin-nav-layout`(y.class`admin-nav-left`(K.type`button`.class`top-nav-pill`.attr("aria-expanded",i=>e?"true":"false").onClick(s)("☰ menu")),y(),y.class`admin-nav-right`(H.href`/index.html`.class`top-nav-pill`("🏠 home"),K.type`button`.class`top-nav-pill`.onClick(n)("🚪 logout"))),i=>e?De(K.type`button`.class`admin-menu-backdrop`.onClick(r).attr("aria-label","Close menu")(""),y.class`admin-menu-panel`.attr("role","menu")(H.href`/admin.html`.class`top-nav-pill`.attr("role","menuitem")("⭐ admin home"),H.href`/admin/current-games.html`.class`top-nav-pill`.attr("role","menuitem")("🎮 lineup"),H.href`/admin/games.html`.class`top-nav-pill`.attr("role","menuitem")("🕹️ games"),H.href`/admin/manufacturers.html`.class`top-nav-pill`.attr("role","menuitem")("🏭 manufacturers"),H.href`/admin/game-ratings.html`.class`top-nav-pill`.attr("role","menuitem")("⭐ ratings"),H.href`/admin/user.html`.class`top-nav-pill`.attr("role","menuitem")("👥 users"),H.href`https://github.com/AckerApple/cary-hardy`.class`top-nav-pill`.attr("role","menuitem").attr("target","_blank").attr("rel","noopener noreferrer")("🔗 code base"))):"")});let Rf=!1;const wR=L(()=>Rf?"":(Rf=!0,Ut(`
    .top-nav-shell {
      width: 100%;
      max-width: 100vw;
      box-sizing: border-box;
      background: #000;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      z-index: 200;
    }
    .top-nav {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      box-sizing: border-box;
      background: rgba(0, 0, 0, 0.95);
      padding: 0.45em 0.8em;
      z-index: 200;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
    }
    .top-nav-row {
      width: max-content;
      min-width: 100%;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      gap: 0.45em;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
    }
    .top-nav-fixed {
      width: 100%;
      max-width: 100vw;
      box-sizing: border-box;
      position: sticky;
      top: 0;
    }
    .top-nav-inner {
      width: 100%;
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
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
    .admin-nav-layout {
      position: relative;
      width: 100%;
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 0.6em;
      align-items: center;
    }
    .admin-nav-left,
    .admin-nav-right {
      display: flex;
      gap: 0.45em;
      align-items: center;
      min-width: 0;
    }
    .admin-nav-right {
      justify-content: flex-end;
    }
    .admin-menu-backdrop {
      position: fixed;
      inset: 0;
      z-index: 240;
      border: 0;
      padding: 0;
      margin: 0;
      background: rgba(0,0,0,0.18);
      cursor: default;
    }
    .admin-menu-panel {
      position: fixed;
      left: 0.8em;
      top: 3.1em;
      z-index: 260;
      min-width: 190px;
      padding: 0.5em;
      display: grid;
      gap: 0.35em;
      background: rgba(8, 8, 8, 0.98);
      border: 1px solid rgba(255,255,255,0.22);
      border-radius: 0.7em;
      box-shadow: 0 18px 42px rgba(0,0,0,0.5);
    }
    .admin-menu-panel .top-nav-pill {
      width: 100%;
      text-align: left;
      font-size: 0.56em;
      padding: 0.45em 0.7em;
    }
    @media (max-height: 450px) {
      .top-nav {
        padding: 0.3em 0.6em;
      }
      .top-nav-row {
        gap: 0.35em;
      }
      .top-nav-pill {
        font-size: 0.45em;
        padding: 0.1em 0.45em;
      }
    }
  `))),Yy=L(({className:n="top-nav",content:e})=>(Yy.inputs(t=>{[{className:n,content:e}]=t}),y.class`${n}`(y.class`top-nav-row`(typeof e=="function"?e():e)))),tt=L(n=>(tt.inputs(e=>{[n]=e}),De(wR(),y.class`top-nav-shell top-nav-fixed`(Yy({className:"top-nav top-nav-inner",content:n})))));let kf=!1;const QR=L(()=>{let n="loading",e="",t=null;const r=we((c,l="",u="")=>{n=c,e=l}),s=we(c=>{t=c,console.log("currentUser",t),c||(n="login")}),i=()=>{r("login","","auth:logged-out"),n="login"},o=we((c,l="")=>{n="authorized",e=(c==null?void 0:c.email)||""});return kf||(kf=!0,Au({onUser:(c,l)=>{Cu({user:c,mountSso:r,setCurrentUser:s,onSignedOut:i,onDenied:()=>{r("denied",(t==null?void 0:t.email)||"","auth:denied")},onAuthorized:o,reason:l})},toast:{error:c=>console.warn(c)}})),De(Ut(`
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
    `),c=>Xy(n,e,i))}),Xy=L((n,e,t)=>{Xy.inputs(s=>{[n,e,t]=s,t=ne(t)});const r=()=>qt().then(t).catch(s=>{console.error("Failed to sign out",s)});return[()=>n==="authorized"?De(tt(()=>ur(r)),Qy(t)):y(aa({status:n,userEmail:e,adminEmail:"",onSignIn:()=>Tu().catch(s=>{console.error("Failed to sign in",s)}),onSignOut:()=>(n="login",qt().catch(s=>{console.error("Failed to sign out",s)}))}))]}),Zy=L(({user:n,onEdit:e,formatCreatedAt:t})=>(Zy.inputs(r=>{[{user:n,onEdit:e,formatCreatedAt:t}]=r}),y.style`display:grid;grid-template-columns:1.1fr 1.4fr 0.7fr 0.7fr auto;gap:0.6em;align-items:center;padding:0.4em 0;`(y(r=>`${n.firstName||""} ${n.lastName||""}`.trim()||"—"),y.style`opacity:0.85;`(r=>n.email||"—"),q.style`opacity:0.85;color:${n.userType==="verified"?"#6fe3a1":"#f26d6d"};`(r=>n.userType||"unverified"),q.style`opacity:0.7;`(r=>t(n.createdAt)),K.type`button`.onClick(e).style`border:0;background:transparent;color:#fff;cursor:pointer;font-size:1.1em;`.attr("title","Edit user")("✏️")))),e_=L(({userId:n,createdAtLabel:e,editUser:t,isSaving:r,isDeleting:s,onChange:i,onSave:o,onDelete:c,onCancel:l})=>{e_.inputs(d=>{[{userId:n,createdAtLabel:e,editUser:t,isSaving:r,isDeleting:s,onChange:i,onSave:o,onDelete:c,onCancel:l}]=d});const u=d=>{i({...t,...d})};return y.style`margin-top:1em;padding-top:1em;border-top:1px solid rgba(255,255,255,0.15);display:grid;gap:0.6em;`(y.style`font-weight:600;`("Edit User"),q.style`opacity:0.6;`("User ID: ",d=>n),q.style`opacity:0.6;`("Created at: ",d=>e),y.style`display:grid;grid-template-columns:120px 1fr;gap:0.6em;align-items:center;`(q.style`opacity:0.7;`("Email"),be.type`email`.value(d=>(t==null?void 0:t.email)||"").onInput(d=>{var p;u({email:((p=d==null?void 0:d.target)==null?void 0:p.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),q.style`opacity:0.7;`("First name"),be.type`text`.value(d=>(t==null?void 0:t.firstName)||"").onInput(d=>{var p;u({firstName:((p=d==null?void 0:d.target)==null?void 0:p.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),q.style`opacity:0.7;`("Last name"),be.type`text`.value(d=>(t==null?void 0:t.lastName)||"").onInput(d=>{var p;u({lastName:((p=d==null?void 0:d.target)==null?void 0:p.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),q.style`opacity:0.7;`("Status"),pl.value(d=>(t==null?void 0:t.userType)==="verified"?"verified":"unverified").onChange(d=>{var p;u({userType:((p=d==null?void 0:d.target)==null?void 0:p.value)==="verified"?"verified":"unverified"})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(d=>Wn.value`unverified`.selected(p=>t.userType==="unverified")("unverified"),d=>Wn.value`verified`.selected(p=>t.userType==="verified")("verified"))),y.style`display:flex;gap:0.6em;`(K.type`button`.onClick(o).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:#1b1b1b;color:#fff;cursor:pointer;`(d=>r?"Saving...":"Save to Firestore"),K.type`button`.onClick(c).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:#4b1111;color:#fff;cursor:pointer;`(d=>s?"Deleting...":"Delete"),K.type`button`.onClick(l).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;cursor:pointer;`("Cancel")))});let Sf=!1,tc=!1,ys=new zt(null),en=null;const YR=L(()=>{let n="loading",e="",t=null;const r=we((c,l="",u="")=>{n=c,e=l}),s=we(c=>{t=c,c||(n="login")}),i=()=>{r("login","","auth:logged-out"),n="login"},o=we((c,l="")=>{n="authorized",e=(c==null?void 0:c.email)||""});return Sf||(Sf=!0,Au({onUser:(c,l)=>{Cu({user:c,mountSso:r,setCurrentUser:s,onSignedOut:i,onDenied:()=>{r("denied",(t==null?void 0:t.email)||"","auth:denied")},onAuthorized:o,reason:l})},toast:{error:c=>console.warn(c)}})),De(Ut(`
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
    `),c=>t_(n,e,i))}),t_=L((n,e,t)=>(t_.inputs(r=>{[n,e,t]=r,t=ne(t)}),[()=>n==="authorized"?n_(t):y(aa({status:n,userEmail:e,adminEmail:"",onSignIn:()=>Tu().catch(r=>{console.error("Failed to sign in",r)}),onSignOut:()=>(n="login",qt().catch(r=>{console.error("Failed to sign out",r)}))}))])),n_=L(n=>{n_.inputs(([O])=>{n=ne(O)});const e=()=>qt().then(n).catch(O=>{console.error("Failed to sign out",O)});let t=!1,r=!1,s=!1,i="",o=null,c=null,l=null;const u=we(()=>{}),d=O=>O?typeof O.toDate=="function"?O.toDate().toLocaleDateString():typeof O=="number"?new Date(O).toLocaleDateString():O.seconds?new Date(O.seconds*1e3).toLocaleDateString():"-":"-",p=O=>{if(!O)return"-";let x=null;return typeof O.toDate=="function"?x=O.toDate():typeof O=="number"?x=new Date(O):O.seconds&&(x=new Date(O.seconds*1e3)),x?x.toLocaleString():"-"},m=()=>{en&&(en(),en=null),t=!0,i="",u(),ys=J2(),en=(ys==null?void 0:ys.unsubscribe)||null},E=O=>{o=O.id,c=O.createdAt??null,l={...O},u()},v=()=>{o=null,c=null,l=null,u()},C=()=>{if(!o||r)return;r=!0,i="",u();const O={id:o,email:((l==null?void 0:l.email)||"").trim(),firstName:((l==null?void 0:l.firstName)||"").trim(),lastName:((l==null?void 0:l.lastName)||"").trim(),userType:(l==null?void 0:l.userType)==="verified"?"verified":"unverified"};L.promise=G2(O).then(()=>{v()}).catch(x=>{console.error("Failed to save user",x),i="Failed to save user.",u()}).finally(()=>{r=!1,u()})},D=()=>{!o||s||confirm("Delete this user?")&&(s=!0,i="",u(),L.promise=K2(o).then(()=>{v()}).catch(O=>{console.error("Failed to delete user",O),i="Failed to delete user.",u()}).finally(()=>{s=!1,u()}))};return tc||(tc=!0,en?t=!0:m()),An(()=>{en&&(en(),en=null),tc=!1}),De(tt(()=>ur(e)),y.class`users-page`(bt("Users Admin"),y.class`users-card`(y.style`margin-top:0.75em;display:grid;gap:0.5em;`(O=>i?ce.style`color:#f6c177;`(i):"",Yb(ys,null,O=>O===null?q.style`opacity:0.7;`("Loading users..."):(t=!1,console.log("user items",{items:O,isLoading:t}),O.length?O.map(x=>Zy({user:x,onEdit:()=>E(x),formatCreatedAt:d}).key(x.id)):q.style`opacity:0.7;`("No users found.")))),O=>o?e_({userId:o,createdAtLabel:p(c),editUser:l,isSaving:r,isDeleting:s,onChange:x=>{l=x,u()},onSave:C,onDelete:D,onCancel:v}):"",Q,y.class`users-actions`(H.href`../admin.html`("Back to Admin Tools")))))}),TR=`
  .admin-pill-button {
    border: 1px solid rgba(255, 185, 62, 0.55);
    border-radius: 999px;
    background: linear-gradient(90deg, #b91c1c, #f97316, #facc15);
    color: #fff;
    font-weight: 800;
    padding: 0.6em 1em;
    text-decoration: none;
  }

  .admin-secondary-button {
    border: 1px solid rgba(255,255,255,0.28);
    border-radius: 999px;
    background: rgba(0,0,0,0.25);
    color: #fff;
    font-weight: 700;
    padding: 0.55em 0.9em;
  }

  .admin-danger-button {
    border: 1px solid rgba(248,113,113,0.5);
    border-radius: 999px;
    background: #4b1111;
    color: #fff;
    font-weight: 700;
    padding: 0.55em 0.9em;
  }

  .admin-crud-page {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1em 2em;
    text-align: left;
  }

  .admin-crud-header {
    display: flex;
    gap: 1em;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .admin-crud-card {
    background: #1f1f1f;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.8em;
    padding: 1em;
    color: rgba(255, 255, 255, 0.92);
  }

  .admin-crud-list {
    display: grid;
    gap: 0.6em;
  }

  .admin-crud-row {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(0, 0, 0, 0.32);
    color: #fff;
    border-radius: 0.7em;
    padding: 0.65em;
    display: grid;
    grid-template-columns: 72px 1fr auto;
    gap: 0.8em;
    align-items: center;
    text-align: left;
  }

  .admin-crud-row:hover {
    border-color: rgba(255, 185, 62, 0.65);
    background: rgba(255, 185, 62, 0.08);
  }

  .admin-crud-thumb {
    width: 72px;
    height: 72px;
    border-radius: 0.6em;
    object-fit: cover;
    background: #111;
    border: 1px solid rgba(255, 255, 255, 0.14);
  }

  .admin-crud-thumb-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f6c177;
    font-weight: 800;
    font-size: 1.45em;
  }

  .admin-crud-modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 500;
    background: rgba(0,0,0,0.72);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: auto;
    padding: 1.2em;
  }

  .admin-crud-modal {
    width: min(760px, 100%);
    margin: 1em auto;
    background: #181818;
    border: 1px solid rgba(255, 185, 62, 0.35);
    border-radius: 0.8em;
    box-shadow: 0 22px 80px rgba(0,0,0,0.6);
    padding: 1em;
  }

  .admin-crud-form-grid {
    display: grid;
    grid-template-columns: 160px 1fr;
    gap: 0.65em 0.8em;
    align-items: center;
  }

  .admin-crud-form-grid input,
  .admin-crud-form-grid select,
  .admin-crud-form-grid textarea {
    width: 100%;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 0.5em;
    background: #101010;
    color: #fff;
    padding: 0.55em;
  }

  .admin-crud-form-grid input[type="date"],
  .admin-crud-form-grid select {
    color-scheme: dark;
  }

  .admin-crud-form-grid input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
    opacity: 0.85;
  }

  .admin-crud-form-grid textarea {
    min-height: 120px;
    resize: vertical;
  }

  .admin-field-with-link {
    display: grid;
    gap: 0.22em;
  }

  .admin-inline-edit-link {
    justify-self: end;
    color: rgba(255, 255, 255, 0.68);
    font-size: 0.72em;
    line-height: 1.2;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .admin-inline-edit-link:hover {
    color: #f6c177;
  }

  .admin-crud-modal-actions {
    margin-top: 1em;
    display: flex;
    gap: 0.7em;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (max-width: 720px) {
    .admin-crud-row {
      grid-template-columns: 58px 1fr;
    }
    .admin-crud-row > small {
      grid-column: 2;
    }
    .admin-crud-row > .admin-rating-badge-cell {
      grid-column: 2;
      justify-self: end;
    }
    .admin-crud-thumb {
      width: 58px;
      height: 58px;
    }
    .admin-crud-form-grid {
      grid-template-columns: 1fr;
    }
  }
`,la=(n,e="")=>{let t=!1;return L(()=>{let r="loading",s="",i=null;const o=we((d,p="",m="")=>{r=d,s=p}),c=we(d=>{i=d,d||(r="login")}),l=()=>{o("login","","auth:logged-out"),r="login"},u=we((d,p="")=>{r="authorized",s=(d==null?void 0:d.email)||""});return t||(t=!0,Au({onUser:(d,p)=>{Cu({user:d,mountSso:o,setCurrentUser:c,onSignedOut:l,onDenied:()=>o("denied",(i==null?void 0:i.email)||"","auth:denied"),onAuthorized:u,reason:p})},toast:{error:d=>console.warn(d)}})),De(Ut(`${TR}
${e}`),d=>r_(r,s,l,n))})},r_=L((n,e,t,r)=>(r_.inputs(s=>{[n,e,t,r]=s,t=ne(t)}),[()=>n==="authorized"?r(t):y(aa({status:n,userEmail:e,adminEmail:"",onSignIn:()=>Tu().catch(s=>console.error("Failed to sign in",s)),onSignOut:()=>(n="login",qt().catch(s=>console.error("Failed to sign out",s)))}))])),ku=L(({value:n,games:e,isLoaded:t,fieldError:r,onChange:s})=>{ku.inputs(o=>{[{value:n,games:e,isLoaded:t,fieldError:r,onChange:s}]=o,s=ne(s)});const i=()=>r?"#f87171":"rgba(255,255,255,0.2)";return y.class`admin-field-with-link`(pl.value(o=>n||"").onChange(o=>{var c;s(((c=o==null?void 0:o.target)==null?void 0:c.value)||"")}).attr("aria-invalid",o=>r?"true":"false").attr("title",o=>r||"").attr("style.borderColor",o=>i())(o=>ER(n,e,t)),H.href`/admin/games.html`.class`admin-inline-edit-link`("edit games"))}),ER=(n,e,t)=>{const r=IR(e),s=!n||e.some(i=>i.id===n);return[Wn.value``(i=>vR(e,t)),s?"":Wn.value`${n}`(n),r.map(({manufacturer:i,items:o})=>kT.label(i)(o.map(c=>Wn.value`${c.id}`(AR(c)))))]},vR=(n,e)=>e?n.length?"Select a game":"Add games first":"Loading games...",IR=n=>{const e=new Map;return n.forEach(t=>{const r=String(t.manufacturer||"Unknown Manufacturer").trim()||"Unknown Manufacturer";e.set(r,[...e.get(r)||[],t])}),[...e.entries()].sort(([t],[r])=>t.localeCompare(r,void 0,{sensitivity:"base"})).map(([t,r])=>({manufacturer:t,items:[...r].sort((s,i)=>String(s.title||"").localeCompare(String(i.title||""),void 0,{sensitivity:"base"}))}))},AR=n=>[n.title||"Untitled game",n.yearReleased?String(n.yearReleased):""].filter(Boolean).join(" - "),nc=()=>({gameId:"",dateAddedToCollection:"",notes:"",isVisible:!0});let rc=!1,_s=null,tn=null,Nn=null,Mi=null,nn=null,Dn=null;const XR=la(n=>s_(n)),s_=L(n=>{s_.inputs(([P])=>{n=ne(P)});const e=()=>qt().then(n).catch(P=>{console.error("Failed to sign out",P)});let t=!1,r=!1,s="",i={},o=!1,c=null,l=nc(),u=_s,d=Mi;const p=we(()=>{}),m=()=>{tn&&(tn(),tn=null),Nn&&(Nn(),Nn=null),u=null,_s=null,s="",p();const P=oR();tn=(P==null?void 0:P.unsubscribe)||null;const F=P.subscribe(_=>{u=_,_s=_,console.debug("Current games list updated",{count:(_==null?void 0:_.length)||0,items:_}),p()});Nn=()=>F.unsubscribe()},E=()=>{nn&&(nn(),nn=null),Dn&&(Dn(),Dn=null),d=null,Mi=null,p();const P=oa();nn=(P==null?void 0:P.unsubscribe)||null;const F=P.subscribe(_=>{d=_,Mi=_,console.debug("Game library updated",{count:(_==null?void 0:_.length)||0,items:_}),p()});Dn=()=>F.unsubscribe()},v=()=>cR().then(P=>{console.debug("Current games list refreshed",{count:P.length,items:P}),u=P,_s=P,p()}).catch(P=>{console.error("Failed to refresh current games list",P),s="Saved, but failed to refresh the game list. Reload the page to confirm.",p()}),C=()=>{c=null,l=nc(),s="",i={},o=!0,p()},D=P=>{c=P.id,l={id:P.id,gameId:P.gameId||"",title:P.title||"",dateAddedToCollection:a_(P.dateAddedToCollection),imageUrl:P.imageUrl||"",manufacturer:P.manufacturer||"",yearReleased:Pf(P.yearReleased),notes:P.notes||"",isVisible:P.isVisible!==!1},s="",i={},o=!0,p()},O=()=>{t||r||(c=null,l=nc(),s="",i={},o=!1,p())},x=()=>{const P={};!l.gameId&&!(l.title||"").trim()&&(P.gameId="Game is required."),l.dateAddedToCollection||(P.dateAddedToCollection="Date Added to Collection is required."),l.yearReleased!==null&&typeof l.yearReleased<"u"&&Number.isNaN(Number(l.yearReleased))&&(P.yearReleased="Year Released must be numeric."),i=P;const F=Object.values(P);return F.length?F[0]:""},M=()=>{if(t){console.debug("Current game save ignored because a save is already running");return}const P=x();if(P){s=P,console.warn("Current game save blocked by validation",{fieldErrors:i,game:l}),p();return}t=!0,s="",i={},p(),console.debug("Saving current game",{id:c||null,game:l}),L.promise=lR({...l,id:c||void 0,gameId:(l.gameId||"").trim(),title:(l.title||"").trim(),imageUrl:(l.imageUrl||"").trim(),manufacturer:(l.manufacturer||"").trim(),notes:(l.notes||"").trim(),yearReleased:Pf(l.yearReleased),isVisible:l.isVisible!==!1}).then(()=>(console.debug("Current game saved",{id:c||null}),t=!1,O(),v())).catch(F=>{console.error("Failed to save current game",F),s="Failed to save game. Check the fields and try again.",p()}).finally(()=>{t=!1,p()})},G=()=>{!c||r||confirm("Delete this game from the current lineup?")&&(r=!0,s="",p(),L.promise=uR(c).then(()=>(r=!1,O(),v())).catch(P=>{console.error("Failed to delete current game",P),s="Failed to delete game.",p()}).finally(()=>{r=!1,p()}))};return rc||(rc=!0,tn||m(),nn||E()),An(()=>{tn&&(tn(),tn=null),Nn&&(Nn(),Nn=null),nn&&(nn(),nn=null),Dn&&(Dn(),Dn=null),rc=!1,_s=null,Mi=null}),De(tt(()=>ur(e)),y.class`admin-crud-page`(y.class`admin-crud-header`(bt("Current Game Lineup"),K.type`button`.class`admin-pill-button`.onClick(C)("Add")),y.class`admin-crud-card`(ce.style`margin-top:0;opacity:0.78;`("Manage the Firestore currentGames collection used by the public lineup page."),P=>s&&!o?ce.style`color:#f6c177;`(s):"",y.class`admin-crud-list`(P=>u===null?q.style`opacity:0.7;`("Loading games..."):u.length?u.map(F=>i_({game:CR(F,d||[]),onClick:D}).key(F.id)):q.style`opacity:0.7;`("No games found. Use Add Game to create the first one.")),y.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(H.href`../lineup.html`.class`admin-secondary-button`("View Public Lineup"))),P=>o?o_({isEditing:!!c,editGame:l,gameLibrary:d||[],isGameLibraryLoaded:d!==null,errorMessage:s,fieldErrors:i,isSaving:t,isDeleting:r,onChange:F=>{var _;l=F,i={...i,gameId:F.gameId||(_=F.title)!=null&&_.trim()?"":i.gameId,dateAddedToCollection:F.dateAddedToCollection?"":i.dateAddedToCollection,yearReleased:F.yearReleased===null||!Number.isNaN(Number(F.yearReleased))?"":i.yearReleased},p()},onSave:M,onDelete:G,onCancel:O}):""))}),i_=L(({game:n,onClick:e})=>(i_.inputs(t=>{[{game:n,onClick:e}]=t,e=ne(e)}),K.type`button`.class`admin-crud-row`.onClick(()=>e(n))(t=>n.imageUrl?Z.class`admin-crud-thumb`.src`${n.imageUrl}`.attr("alt",r=>n.title||"Game image"):y.class`admin-crud-thumb admin-crud-thumb-placeholder`("PB"),y(qr(t=>n.title||"Untitled game"),y.style`margin-top:0.15em;opacity:0.74;`(q(t=>[n.manufacturer||"",n.yearReleased?String(n.yearReleased):""].filter(Boolean).join(" · ")||"No manufacturer/year"))),q.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(te.style`font-size:0.78em;text-transform:uppercase;`("Collected Date"),te(t=>[RR(n.dateAddedToCollection),n.isVisible===!1?" · Hidden":""].join("")))))),CR=(n,e)=>{const t=e.find(r=>r.id===n.gameId);return{...n,title:(t==null?void 0:t.title)||n.title||"",imageUrl:(t==null?void 0:t.imageUrl)||n.imageUrl||"",manufacturer:(t==null?void 0:t.manufacturer)||n.manufacturer||"",yearReleased:(t==null?void 0:t.yearReleased)??n.yearReleased??null}},o_=L(({isEditing:n,editGame:e,gameLibrary:t,isGameLibraryLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:c,onChange:l,onSave:u,onDelete:d,onCancel:p})=>{o_.inputs(C=>{[{isEditing:n,editGame:e,gameLibrary:t,isGameLibraryLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:c,onChange:l,onSave:u,onDelete:d,onCancel:p}]=C,l=ne(l),u=ne(u),d=ne(d),p=ne(p)});const m=C=>{l({...e,...C})},E=C=>i[C]?"#f87171":"rgba(255,255,255,0.2)",v=C=>i[C]?"#fca5a5":"inherit";return y.class`admin-crud-modal-backdrop`(y.class`admin-crud-modal`(y.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(y(bt.style`margin:0;`(n?"Edit Game":"Add Game"),q.style`opacity:0.72;`(n?"Update this current lineup entry.":"Create a new current lineup entry.")),K.type`button`.class`admin-secondary-button`.onClick(p)("Cancel")),C=>s?ce.style`color:#f6c177;`(s):"",C=>Object.values(i).filter(Boolean).length?y.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(Object.values(i).filter(Boolean).map(D=>q(D))):"",y.class`admin-crud-form-grid`.style`margin-top:1em;`(ye.attr("style.color",C=>v("gameId"))("Game"),C=>ku({value:e.gameId||"",games:t,isLoaded:r,fieldError:i.gameId,onChange:D=>m({gameId:D})}).key(`${r?"loaded":"loading"}-${t.length}`),ye.attr("style.color",C=>v("dateAddedToCollection"))("Date Added to Collection"),be.type`date`.value(C=>e.dateAddedToCollection||"").onInput(C=>{var D;m({dateAddedToCollection:((D=C==null?void 0:C.target)==null?void 0:D.value)||""})}).attr("aria-invalid",C=>i.dateAddedToCollection?"true":"false").attr("title",C=>i.dateAddedToCollection||"").attr("style.borderColor",C=>E("dateAddedToCollection"))(),ye("Notes"),Lo.value(C=>e.notes||"").onInput(C=>{var D;m({notes:((D=C==null?void 0:C.target)==null?void 0:D.value)||""})})(),ye("Visible on public page"),ye.style`display:flex;gap:0.5em;align-items:center;`(be.type`checkbox`.attr("checked",C=>e.isVisible!==!1?"checked":null).onChange(C=>{var D;m({isVisible:!!((D=C==null?void 0:C.target)!=null&&D.checked)})})(),te(C=>e.isVisible!==!1?"Visible":"Hidden"))),y.class`admin-crud-modal-actions`(y.style`display:flex;gap:0.7em;flex-wrap:wrap;`(K.type`button`.class`admin-pill-button`.attr("disabled",C=>o?"disabled":null).onClick(u)(C=>o?"Saving...":"Save"),K.type`button`.class`admin-secondary-button`.attr("disabled",C=>o?"disabled":null).onClick(p)("Cancel")),C=>n?K.type`button`.class`admin-danger-button`.attr("disabled",D=>c?"disabled":null).onClick(d)(D=>c?"Deleting...":"Delete"):"")))}),Pf=n=>{if(typeof n=="number"&&!Number.isNaN(n))return n;if(n===""||n===null||typeof n>"u")return null;const e=Number(n);return Number.isNaN(e)?null:e},a_=n=>n?typeof n=="string"?n.slice(0,10):typeof n.toDate=="function"?n.toDate().toISOString().slice(0,10):n.seconds?new Date(n.seconds*1e3).toISOString().slice(0,10):"":"",RR=n=>{const e=a_(n);if(!e)return"No date";const t=new Date(`${e}T12:00:00`);return Number.isNaN(t.getTime())?e:t.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})},sc=()=>({title:"",imageUrl:"",manufacturerId:"",manufacturer:"",yearReleased:null,notes:""});let ic=!1,bs=null,On=null,mr=null,Ui=null,Ln=null,yr=null;const ZR=la(n=>c_(n)),c_=L(n=>{c_.inputs(([P])=>{n=ne(P)});const e=()=>qt().then(n).catch(P=>console.error("Failed to sign out",P));let t=bs,r=Ui,s=!1,i=null,o=sc(),c=!1,l=!1,u="",d={};const p=we(()=>{}),m=()=>{On&&On(),mr&&mr(),t=null,bs=null,p();const P=oa();On=(P==null?void 0:P.unsubscribe)||null;const F=P.subscribe(_=>{t=_,bs=_,p()});mr=()=>F.unsubscribe()},E=()=>My().then(P=>{t=P,bs=P,p()}).catch(P=>{console.error("Failed to refresh games",P),u="Saved, but failed to refresh games. Reload the page to confirm.",p()}),v=()=>{Ln&&Ln(),yr&&yr(),r=null,Ui=null,p();const P=Ly();Ln=(P==null?void 0:P.unsubscribe)||null;const F=P.subscribe(_=>{r=_,Ui=_,p()});yr=()=>F.unsubscribe()},C=()=>{i=null,o=sc(),u="",d={},s=!0,p()},D=P=>{i=P.id,o={id:P.id,title:P.title||"",imageUrl:P.imageUrl||"",manufacturerId:P.manufacturerId||"",manufacturer:P.manufacturer||"",yearReleased:Vf(P.yearReleased),notes:P.notes||""},u="",d={},s=!0,p()},O=()=>{c||l||(i=null,o=sc(),u="",d={},s=!1,p())},x=()=>{const P={};o.title.trim()||(P.title="Game Title is required."),o.yearReleased!==null&&Number.isNaN(Number(o.yearReleased))&&(P.yearReleased="Year Released must be numeric."),d=P;const F=Object.values(P);return F.length?F[0]:""},M=()=>{if(c)return;const P=x();if(P){u=P,p();return}c=!0,u="",d={},p();const F=(r||[]).find(_=>_.id===o.manufacturerId);L.promise=Z2({...o,id:i||void 0,title:o.title.trim(),imageUrl:(o.imageUrl||"").trim(),manufacturerId:(o.manufacturerId||"").trim(),manufacturer:((F==null?void 0:F.name)||o.manufacturer||"").trim(),yearReleased:Vf(o.yearReleased),notes:(o.notes||"").trim()}).then(()=>(c=!1,O(),E())).catch(_=>{console.error("Failed to save game",_),u="Failed to save game. Check the fields and try again.",p()}).finally(()=>{c=!1,p()})},G=()=>{!i||l||confirm("Delete this game from the games collection? Existing lineup entries or ratings may still reference it.")&&(l=!0,u="",p(),L.promise=eR(i).then(()=>(l=!1,O(),E())).catch(P=>{console.error("Failed to delete game",P),u="Failed to delete game.",p()}).finally(()=>{l=!1,p()}))};return ic||(ic=!0,On||m(),Ln||v()),An(()=>{On&&On(),mr&&mr(),Ln&&Ln(),yr&&yr(),On=null,mr=null,Ln=null,yr=null,bs=null,Ui=null,ic=!1}),De(tt(()=>ur(e)),y.class`admin-crud-page`(y.class`admin-crud-header`(bt("Games Database"),K.type`button`.class`admin-pill-button`.onClick(C)("Add")),y.class`admin-crud-card`(ce.style`margin-top:0;opacity:0.78;`("Manage canonical games used by lineup and ratings."),P=>u&&!s?ce.style`color:#f6c177;`(u):"",y.class`admin-crud-list`(P=>{if(r===null)return q.style`opacity:0.7;`("Loading manufacturers...");if(!r.length)return q.style`opacity:0.7;`("No manufacturers found. Add a manufacturer first.");if(t===null)return q.style`opacity:0.7;`("Loading games...");const F=t.filter(_=>!r.some(b=>l_(_,b)));return[...r.map(_=>Kc({manufacturer:_,games:kR(_,t||[]),onGameClick:D}).key(_.id)),F.length?Kc({manufacturer:{id:"unmatched",name:"Unmatched Games",logoUrl:"",opinions:"Games without a matching manufacturer link."},games:F,onGameClick:D}).key("unmatched"):""]}),y.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(H.href`../admin/current-games.html`.class`admin-secondary-button`("Lineup Admin"),H.href`../admin/manufacturers.html`.class`admin-secondary-button`("Manufacturers Admin"),H.href`../admin/game-ratings.html`.class`admin-secondary-button`("Ratings Admin"))),P=>s?h_({isEditing:!!i,editGame:o,manufacturers:r||[],errorMessage:u,fieldErrors:d,isSaving:c,isDeleting:l,onChange:F=>{var _,b;o=F,d={...d,title:(_=F.title)!=null&&_.trim()?"":d.title,manufacturerId:F.manufacturerId||(b=F.manufacturer)!=null&&b.trim()?"":d.manufacturerId,yearReleased:F.yearReleased===null||!Number.isNaN(Number(F.yearReleased))?"":d.yearReleased},p()},onSave:M,onDelete:G,onCancel:O}):""))}),Kc=L(({manufacturer:n,games:e,onGameClick:t})=>(Kc.inputs(r=>{[{manufacturer:n,games:e,onGameClick:t}]=r,t=ne(t)}),y.style`display:grid;gap:0.55em;padding:0.85em 0;border-top:1px solid rgba(255,255,255,0.12);`(y.style`display:flex;align-items:center;justify-content:space-between;gap:1em;flex-wrap:wrap;`(y.style`display:flex;align-items:center;gap:0.75em;min-width:0;`(r=>n.logoUrl?Z.class`admin-crud-thumb`.style`width:46px;height:46px;`.src`${n.logoUrl}`.attr("alt",s=>n.name||"Manufacturer logo"):y.class`admin-crud-thumb admin-crud-thumb-placeholder`.style`width:46px;height:46px;font-size:1em;`(s=>(n.name||"?").slice(0,2).toUpperCase()),y.style`min-width:0;`(qr(r=>n.name||"Untitled manufacturer"),y.style`margin-top:0.12em;opacity:0.66;`(q(r=>`${e.length} game${e.length===1?"":"s"}`))))),r=>e.length?y.style`display:grid;gap:0.55em;`(e.map(s=>u_({game:s,manufacturers:[n],onClick:t}).key(s.id))):q.style`opacity:0.7;`("No games for this manufacturer yet.")))),kR=(n,e)=>e.filter(t=>l_(t,n)),l_=(n,e)=>n.manufacturerId===e.id||xf(n.manufacturer)===xf(e.name),u_=L(({game:n,manufacturers:e,onClick:t})=>(u_.inputs(r=>{[{game:n,manufacturers:e,onClick:t}]=r,t=ne(t)}),K.type`button`.class`admin-crud-row`.onClick(()=>t(n))(r=>n.imageUrl?Z.class`admin-crud-thumb`.src`${n.imageUrl}`.attr("alt",s=>n.title||"Game image"):y.class`admin-crud-thumb admin-crud-thumb-placeholder`("PB"),y(qr(r=>n.title||"Untitled game"),y.style`margin-top:0.15em;opacity:0.74;`(q(r=>[SR(n,e),n.yearReleased?String(n.yearReleased):""].filter(Boolean).join(" - ")||"No manufacturer/year"))),q.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(te.style`font-size:0.78em;text-transform:uppercase;`("Game ID"),te(r=>n.id))))),SR=(n,e)=>{const t=e.find(r=>r.id===n.manufacturerId);return(t==null?void 0:t.name)||n.manufacturer||""},xf=n=>String(n||"").trim().toLowerCase(),h_=L(({isEditing:n,editGame:e,manufacturers:t,errorMessage:r,fieldErrors:s,isSaving:i,isDeleting:o,onChange:c,onSave:l,onDelete:u,onCancel:d})=>{h_.inputs(v=>{[{isEditing:n,editGame:e,manufacturers:t,errorMessage:r,fieldErrors:s,isSaving:i,isDeleting:o,onChange:c,onSave:l,onDelete:u,onCancel:d}]=v,c=ne(c),l=ne(l),u=ne(u),d=ne(d)});const p=v=>c({...e,...v}),m=v=>s[v]?"#f87171":"rgba(255,255,255,0.2)",E=v=>s[v]?"#fca5a5":"inherit";return y.class`admin-crud-modal-backdrop`(y.class`admin-crud-modal`(y.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(y(bt.style`margin:0;`(n?"Edit Game":"Add Game"),q.style`opacity:0.72;`("Manage the canonical machine record.")),K.type`button`.class`admin-secondary-button`.onClick(d)("Cancel")),v=>r?ce.style`color:#f6c177;`(r):"",v=>Object.values(s).filter(Boolean).length?y.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(Object.values(s).filter(Boolean).map(C=>q(C))):"",y.class`admin-crud-form-grid`.style`margin-top:1em;`(ye.attr("style.color",v=>E("title"))("Game Title"),be.type`text`.value(v=>e.title||"").onInput(v=>{var C;p({title:((C=v==null?void 0:v.target)==null?void 0:C.value)||""})}).attr("aria-invalid",v=>s.title?"true":"false").attr("title",v=>s.title||"").attr("style.borderColor",v=>m("title"))(),ye("Game Image URL"),be.type`url`.value(v=>e.imageUrl||"").onInput(v=>{var C;p({imageUrl:((C=v==null?void 0:v.target)==null?void 0:C.value)||""})})(),ye.attr("style.color",v=>E("manufacturerId"))("Manufacturer"),y.class`admin-field-with-link`(pl.value(v=>e.manufacturerId||"").onChange(v=>{var C;p({manufacturerId:((C=v==null?void 0:v.target)==null?void 0:C.value)||""})}).attr("aria-invalid",v=>s.manufacturerId?"true":"false").attr("title",v=>s.manufacturerId||"").attr("style.borderColor",v=>m("manufacturerId"))([Wn.value``(t.length?"Select a manufacturer":"Add a manufacturer first"),...t.map(v=>Wn.value`${v.id}`(v.name||"Untitled manufacturer"))]),H.href`/admin/manufacturers.html`.class`admin-inline-edit-link`("edit manufacturers")),ye.attr("style.color",v=>E("yearReleased"))("Year Released"),be.type`number`.value(v=>e.yearReleased??"").onInput(v=>{var C;p({yearReleased:PR((C=v==null?void 0:v.target)==null?void 0:C.value)})}).attr("aria-invalid",v=>s.yearReleased?"true":"false").attr("title",v=>s.yearReleased||"").attr("style.borderColor",v=>m("yearReleased"))(),ye("Notes"),Lo.value(v=>e.notes||"").onInput(v=>{var C;p({notes:((C=v==null?void 0:v.target)==null?void 0:C.value)||""})})()),y.class`admin-crud-modal-actions`(y.style`display:flex;gap:0.7em;flex-wrap:wrap;`(K.type`button`.class`admin-pill-button`.attr("disabled",v=>i?"disabled":null).onClick(l)(v=>i?"Saving...":"Save"),K.type`button`.class`admin-secondary-button`.attr("disabled",v=>i?"disabled":null).onClick(d)("Cancel")),v=>n?K.type`button`.class`admin-danger-button`.attr("disabled",C=>o?"disabled":null).onClick(u)(C=>o?"Deleting...":"Delete"):"")))}),PR=n=>{if(n===""||n===null||typeof n>"u")return null;const e=Number(n);return Number.isNaN(e)?null:e},Vf=n=>{if(typeof n=="number"&&!Number.isNaN(n))return n;if(n===""||n===null||typeof n>"u")return null;const e=Number(n);return Number.isNaN(e)?null:e},xR=new URL(""+new URL("rating-badge-CCDAE7Ja.png",import.meta.url).href,import.meta.url).href,Su=L(({rating:n,size:e=82})=>{Su.inputs(r=>{[{rating:n,size:e=82}]=r});const t=VR(n);return y.class`rating-badge`.attr("aria-label",r=>t?`Rating ${t} out of 10`:"Not rated").attr("title",r=>t?`${t}/10`:"Not rated").style`
      width:${e}px;
      height:${e}px;
      position:relative;
      display:inline-block;
      flex:0 0 auto;
    `(Z.src`${xR}`.attr("alt","").attr("aria-hidden","true").style`
          width:100%;
          height:100%;
          display:block;
          object-fit:contain;
        `(),t?te.style`
            position:absolute;
            left:50%;
            top:40%;
            transform:translate(-50%, -50%);
            color:#061b36;
            font-family:Georgia, 'Times New Roman', serif;
            font-weight:900;
            font-size:${Math.round(e*.27)}px;
            line-height:1;
            letter-spacing:0;
            text-align:center;
            white-space:nowrap;
            text-shadow:0 1px 0 rgba(255,255,255,0.28);
          `(t):"")}),VR=n=>typeof n!="number"||Number.isNaN(n)?"":n.toFixed(1).replace(/\.0$/,""),oc=()=>({gameId:"",rating:null,review:"",videos:[],isVisible:!0});let ac=!1,cc=null,ws=null,Mn=null,_r=null;const ek=la(n=>d_(n)),d_=L(n=>{d_.inputs(([_])=>{n=ne(_)});const e=()=>qt().then(n).catch(_=>console.error("Failed to sign out",_));let t=cc,r=ws,s=!1,i=null,o=oc(),c=!1,l=!1,u="",d={};const p=we(()=>{}),m=()=>{Mn&&Mn(),_r&&_r(),r=null,ws=null,p();const _=tR();Mn=(_==null?void 0:_.unsubscribe)||null;const b=_.subscribe(w=>{r=w,ws=w,p()});_r=()=>b.unsubscribe()},E=()=>rR().then(_=>{r=_,ws=_,p()}).catch(_=>{console.error("Failed to refresh game ratings",_),u="Saved, but failed to refresh ratings. Reload the page to confirm.",p()}),v=()=>My().then(_=>{t=_,cc=_,p()}).catch(_=>{console.error("Failed to refresh games",_)}),C=()=>t!==null?Promise.resolve(t):(p(),v().then(()=>t||[])),D=()=>{i=null,o={...oc()},u="",d={},s=!0,p(),L.promise=C()},O=_=>{const b=_.id||_.gameId;i=b||null,o={id:b,gameId:_.gameId||_.id||"",rating:typeof _.rating=="number"?_.rating:null,review:_.review||"",videos:Array.isArray(_.videos)?_.videos:[],isVisible:_.isVisible!==!1},u="",d={},s=!0,p(),L.promise=C()},x=()=>{c||l||(i=null,o=oc(),d={},u="",s=!1,p())},M=()=>{const _={};o.gameId||(_.gameId="Game is required."),o.rating===null||Number.isNaN(Number(o.rating))?_.rating="Rating is required.":(Number(o.rating)<0||Number(o.rating)>10)&&(_.rating="Rating must be between 0 and 10."),d=_;const b=Object.values(_);return b.length?b[0]:""},G=()=>{if(c)return;const _=M();if(_){u=_,p();return}c=!0,u="",p(),L.promise=sR({...o,id:o.gameId,rating:Number(o.rating),review:(o.review||"").trim(),videos:DR(o.videos),isVisible:o.isVisible!==!1}).then(()=>(c=!1,x(),E())).catch(b=>{console.error("Failed to save game rating",b),u="Failed to save rating. Check the fields and try again.",p()}).finally(()=>{c=!1,p()})},P=()=>{!i||l||confirm("Delete this game rating?")&&(l=!0,u="",p(),L.promise=iR(i).then(()=>(l=!1,x(),E())).catch(_=>{console.error("Failed to delete game rating",_),u="Failed to delete rating.",p()}).finally(()=>{l=!1,p()}))};ac||(ac=!0,Mn||m()),An(()=>{Mn&&Mn(),_r&&_r(),Mn=null,_r=null,cc=null,ws=null,ac=!1});const F=()=>r===null?q.style`opacity:0.7;`("Loading ratings..."):r.length?r.map(_=>f_({rating:_,game:NR(_,t||[]),onClick:O}).key(_.id||_.gameId)):"";return De(tt(()=>ur(e)),y.class`admin-crud-page`(y.class`admin-crud-header`(bt("Game Ratings"),K.type`button`.class`admin-pill-button`.onClick(D)("Add")),y.class`admin-crud-card`(_=>u&&!s?ce.style`color:#f6c177;`(u):"",y.class`admin-crud-list`(_=>F()),y.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(H.href`../ratings.html`.class`admin-secondary-button`("View Public Ratings"))),_=>s?p_({isEditing:!!i,editRating:o,games:t||[],isGamesLoaded:t!==null,errorMessage:u,fieldErrors:d,isSaving:c,isDeleting:l,onChange:b=>{o=b,d={...d,gameId:b.gameId?"":d.gameId,rating:b.rating!==null&&!Number.isNaN(Number(b.rating))?"":d.rating},p()},onSave:G,onDelete:P,onCancel:x}):""))}),f_=L(({game:n,rating:e,onClick:t})=>(f_.inputs(r=>{[{game:n,rating:e,onClick:t}]=r,t=ne(t)}),K.type`button`.class`admin-crud-row`.onClick(()=>t(e))(r=>n!=null&&n.imageUrl?Z.class`admin-crud-thumb`.src`${n.imageUrl}`.attr("alt",s=>n.title||"Game image"):y.class`admin-crud-thumb admin-crud-thumb-placeholder`("PB"),y(qr(r=>(n==null?void 0:n.title)||e.gameId||e.id||"Untitled game"),y.style`margin-top:0.15em;opacity:0.74;`(q(r=>[(n==null?void 0:n.manufacturer)||"",n!=null&&n.yearReleased?String(n.yearReleased):""].filter(Boolean).join(" - ")||"No manufacturer/year"))),y.class`admin-rating-badge-cell`.style`display:grid;justify-items:end;gap:0.25em;`(r=>typeof(e==null?void 0:e.rating)=="number"&&!Number.isNaN(e.rating)?Su({rating:e.rating}):q.style`opacity:0.72;`("Not rated"),r=>(e==null?void 0:e.isVisible)===!1?q.style`opacity:0.72;`("Hidden"):"")))),p_=L(({isEditing:n,editRating:e,games:t,isGamesLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:c,onChange:l,onSave:u,onDelete:d,onCancel:p})=>{p_.inputs(x=>{[{isEditing:n,editRating:e,games:t,isGamesLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:c,onChange:l,onSave:u,onDelete:d,onCancel:p}]=x,l=ne(l),u=ne(u),d=ne(d),p=ne(p)});const m=x=>{l({...e,...x})},E=(x,M)=>{var P,F;const G=[...e.videos||[]];G[x]={url:((P=G[x])==null?void 0:P.url)||"",description:((F=G[x])==null?void 0:F.description)||"",...M},m({videos:G})},v=()=>{m({videos:[...e.videos||[],{url:"",description:""}]})},C=x=>{m({videos:(e.videos||[]).filter((M,G)=>G!==x)})},D=x=>i[x]?"#f87171":"rgba(255,255,255,0.2)",O=x=>i[x]?"#fca5a5":"inherit";return y.class`admin-crud-modal-backdrop`(y.class`admin-crud-modal`(y.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(y(bt.style`margin:0;`(x=>n?"Edit Rating":"Add Rating"),q.style`opacity:0.72;`("Create or update the public rating for this game.")),K.type`button`.class`admin-secondary-button`.onClick(p)("Cancel")),x=>s?ce.style`color:#f6c177;`(s):"",x=>Object.values(i).filter(Boolean).length?y.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(Object.values(i).filter(Boolean).map(M=>q(M))):"",y.class`admin-crud-form-grid`.style`margin-top:1em;`(ye.attr("style.color",x=>O("gameId"))("Game"),x=>ku({value:e.gameId||"",games:t,isLoaded:r,fieldError:i.gameId,onChange:M=>m({gameId:M})}).key(`${r?"loaded":"loading"}-${t.length}`),ye.attr("style.color",x=>O("rating"))("Rating"),be.type`number`.attr("min","0").attr("max","10").attr("step","0.1").value(x=>e.rating??"").onInput(x=>{var M;m({rating:OR((M=x==null?void 0:x.target)==null?void 0:M.value)})}).attr("aria-invalid",x=>i.rating?"true":"false").attr("title",x=>i.rating||"").attr("style.borderColor",x=>D("rating"))(),ye("Review"),Lo.value(x=>e.review||"").onInput(x=>{var M;m({review:((M=x==null?void 0:x.target)==null?void 0:M.value)||""})})(),ye("Videos"),y.style`display:grid;gap:0.6em;`(x=>(e.videos||[]).length?(e.videos||[]).map((M,G)=>y.style`display:grid;grid-template-columns:1fr 1fr auto;gap:0.5em;align-items:center;`(be.type`url`.value(P=>M.url||"").attr("placeholder","Video URL").onInput(P=>{var F;E(G,{url:((F=P==null?void 0:P.target)==null?void 0:F.value)||""})})(),be.type`text`.value(P=>M.description||"").attr("placeholder","Description").onInput(P=>{var F;E(G,{description:((F=P==null?void 0:P.target)==null?void 0:F.value)||""})})(),K.type`button`.class`admin-secondary-button`.onClick(()=>C(G))("Remove"))):q.style`opacity:0.72;`("No videos linked."),K.type`button`.class`admin-secondary-button`.onClick(v)("Add Video")),ye("Visible on public page"),ye.style`display:flex;gap:0.5em;align-items:center;`(be.type`checkbox`.attr("checked",x=>e.isVisible!==!1?"checked":null).onChange(x=>{var M;m({isVisible:!!((M=x==null?void 0:x.target)!=null&&M.checked)})})(),te(x=>e.isVisible!==!1?"Visible":"Hidden"))),y.class`admin-crud-modal-actions`(y.style`display:flex;gap:0.7em;flex-wrap:wrap;`(K.type`button`.class`admin-pill-button`.attr("disabled",x=>o?"disabled":null).onClick(u)(x=>o?"Saving...":"Save"),K.type`button`.class`admin-secondary-button`.attr("disabled",x=>o?"disabled":null).onClick(p)("Cancel")),x=>n?K.type`button`.class`admin-danger-button`.attr("disabled",M=>c?"disabled":null).onClick(d)(M=>c?"Deleting...":"Delete"):"")))}),NR=(n,e)=>{const t=n.gameId||n.id;return e.find(r=>r.id===t)||null},DR=n=>Array.isArray(n)?n.map(e=>({url:((e==null?void 0:e.url)||"").trim(),description:((e==null?void 0:e.description)||"").trim()})).filter(e=>e.url||e.description):[],OR=n=>{if(n===""||n===null||typeof n>"u")return null;const e=Number(n);return Number.isNaN(e)?null:e},lc=()=>({name:"",logoUrl:"",opinions:""});let uc=!1,Un=null,Fn=null,br=null;const tk=la(n=>g_(n)),g_=L(n=>{g_.inputs(([M])=>{n=ne(M)});const e=()=>qt().then(n).catch(M=>console.error("Failed to sign out",M));let t=Un,r=!1,s=null,i=lc(),o=!1,c=!1,l="",u={};const d=()=>{Fn&&Fn(),br&&br(),t=null,Un=null;const M=Ly();Fn=(M==null?void 0:M.unsubscribe)||null;const G=M.subscribe(P=>{t=P,Un=P});br=()=>G.unsubscribe()},p=()=>Q2().then(M=>{t=M,Un=M}).catch(M=>{console.error("Failed to refresh manufacturers",M),l="Saved, but failed to refresh manufacturers. Reload the page to confirm."});L.promise=p();const m=(M,G)=>{const P=t||Un||[],F={...P.find(w=>w.id===M)||{},...G,id:M},_=P.some(w=>w.id===M),b=LR(_?P.map(w=>w.id===M?F:w):[...P,F]);t=b,Un=b},E=()=>{s=null,i=lc(),l="",u={},r=!0},v=M=>{s=M.id,i={id:M.id,name:M.name||"",logoUrl:M.logoUrl||"",opinions:M.opinions||""},l="",u={},r=!0},C=()=>{o||c||(s=null,i=lc(),l="",u={},r=!1)},D=()=>{const M={};i.name.trim()||(M.name="Manufacturer Name is required."),u=M;const G=Object.values(M);return G.length?G[0]:""},O=()=>{if(o)return;const M=D();if(M){l=M;return}o=!0,l="",u={};const G={...i,id:s||void 0,name:i.name.trim(),logoUrl:(i.logoUrl||"").trim(),opinions:(i.opinions||"").trim()},P=s;return Y2(G).then(F=>{const _=P||(F==null?void 0:F.id);_&&m(_,G),o=!1,C()}).catch(F=>{console.error("Failed to save manufacturer",F),l="Failed to save manufacturer. Check the fields and try again."}).finally(()=>{o=!1})},x=()=>{!s||c||confirm("Delete this manufacturer? Existing games may still reference it.")&&(c=!0,l="",L.promise=X2(s).then(()=>(c=!1,C(),p())).catch(M=>{console.error("Failed to delete manufacturer",M),l="Failed to delete manufacturer."}).finally(()=>{c=!1}))};return uc||(uc=!0,Fn||d()),An(()=>{Fn&&Fn(),br&&br(),Fn=null,br=null,Un=null,uc=!1}),De(tt(()=>ur(e)),y.class`admin-crud-page`(y.class`admin-crud-header`(bt("Manufacturers Database"),K.type`button`.class`admin-pill-button`.onClick(E)("Add")),y.class`admin-crud-card`(M=>l&&!r?ce.style`color:#f6c177;`(l):"",y.class`admin-crud-list`(M=>t===null?q.style`opacity:0.7;`("Loading manufacturers..."):t.length?t.map(G=>m_({manufacturer:G,onClick:v}).key(G.id)):q.style`opacity:0.7;`("No manufacturers found. Use Add Manufacturer to create the first one.")),y.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(H.href`../admin/games.html`.class`admin-secondary-button`("Games Admin"))),M=>r?y_({isEditing:!!s,editManufacturer:i,errorMessage:l,fieldErrors:u,isSaving:o,isDeleting:c,onChange:G=>{var P;i=G,u={...u,name:(P=G.name)!=null&&P.trim()?"":u.name}},onSave:O,onDelete:x,onCancel:C}):""))}),LR=n=>[...n].sort((e,t)=>String(e.name||"").localeCompare(String(t.name||""),void 0,{sensitivity:"base"})),m_=L(({manufacturer:n,onClick:e})=>(m_.inputs(t=>{[{manufacturer:n,onClick:e}]=t,e=ne(e)}),K.type`button`.class`admin-crud-row`.onClick(()=>e(n))(t=>n.logoUrl?Z.class`admin-crud-thumb`.src`${n.logoUrl}`.attr("alt",r=>n.name||"Manufacturer logo"):y.class`admin-crud-thumb admin-crud-thumb-placeholder`(r=>MR(n.name)),y(qr(t=>n.name||"Untitled manufacturer"),y.style`margin-top:0.15em;opacity:0.74;`(q(t=>n.opinions||"No opinions"))),q.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(te.style`font-size:0.78em;text-transform:uppercase;`("Manufacturer ID"),te(t=>n.id))))),MR=(n="")=>(n.trim().charAt(0)||"M").toUpperCase(),y_=L(({isEditing:n,editManufacturer:e,errorMessage:t,fieldErrors:r,isSaving:s,isDeleting:i,onChange:o,onSave:c,onDelete:l,onCancel:u})=>{y_.inputs(E=>{[{isEditing:n,editManufacturer:e,errorMessage:t,fieldErrors:r,isSaving:s,isDeleting:i,onChange:o,onSave:c,onDelete:l,onCancel:u}]=E,o=ne(o),c=ne(c),l=ne(l),u=ne(u)});const d=E=>o({...e,...E}),p=E=>r[E]?"#f87171":"rgba(255,255,255,0.2)",m=E=>r[E]?"#fca5a5":"inherit";return y.class`admin-crud-modal-backdrop`(y.class`admin-crud-modal`(y.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(y(bt.style`margin:0;`(n?"Edit Manufacturer":"Add Manufacturer"),q.style`opacity:0.72;`("Manage the canonical manufacturer record.")),K.type`button`.class`admin-secondary-button`.onClick(u)("Cancel")),E=>t?ce.style`color:#f6c177;`(t):"",E=>Object.values(r).filter(Boolean).length?y.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(Object.values(r).filter(Boolean).map(v=>q(v))):"",y.class`admin-crud-form-grid`.style`margin-top:1em;`(ye.attr("style.color",E=>m("name"))("Manufacturer Name"),be.type`text`.value(E=>e.name||"").onInput(E=>{var v;d({name:((v=E==null?void 0:E.target)==null?void 0:v.value)||""})}).attr("aria-invalid",E=>r.name?"true":"false").attr("title",E=>r.name||"").attr("style.borderColor",E=>p("name"))(),ye("Logo URL"),be.type`url`.value(E=>e.logoUrl||"").onInput(E=>{var v;d({logoUrl:((v=E==null?void 0:E.target)==null?void 0:v.value)||""})})(),ye("Opinions"),Lo.value(E=>e.opinions||"").onInput(E=>{var v;d({opinions:((v=E==null?void 0:E.target)==null?void 0:v.value)||""})})()),y.class`admin-crud-modal-actions`(y.style`display:flex;gap:0.7em;flex-wrap:wrap;`(K.type`button`.class`admin-pill-button`.attr("disabled",E=>s?"disabled":null).onClick(c)(E=>s?"Saving...":"Save"),K.type`button`.class`admin-secondary-button`.attr("disabled",E=>s?"disabled":null).onClick(u)("Cancel")),E=>n?K.type`button`.class`admin-danger-button`.attr("disabled",v=>i?"disabled":null).onClick(l)(v=>i?"Deleting...":"Delete"):"")))}),Zr=L(()=>[H.href`/index.html`.class`top-nav-pill`("🏠"),H.href`/meetup.html`.class`top-nav-pill`("🗓️ meetups"),H.href`/lineup.html`.class`top-nav-pill`("🎮 lineup"),H.href`/ratings.html`.class`top-nav-pill`("⭐ ratings"),H.href`/index.html#links`.class`top-nav-pill`("🔗 links"),H.href`/index.html#merch`.class`top-nav-pill`("🛍️ merch & more"),H.href`/index.html#youtube`.class`top-nav-pill`("📺 youtube"),H.href`/index.html#awards`.class`top-nav-pill`("🏆 awards"),H.href`/admin.html`.class`top-nav-pill`("👤")]);let hc=!1,rn=null,jn=null,Bn=null,$n=null;const nk=L((n=null,e=null,t=we(()=>{}))=>{const r=()=>{rn&&(rn(),rn=null),jn&&(jn(),jn=null),Bn&&(Bn(),Bn=null),$n&&($n(),$n=null);const s=aR();rn=(s==null?void 0:s.unsubscribe)||null;const i=s.subscribe(l=>{n=l,console.debug("Visible current lineup games",{count:(l==null?void 0:l.length)||0,games:l}),t()});jn=()=>i.unsubscribe();const o=oa();Bn=(o==null?void 0:o.unsubscribe)||null;const c=o.subscribe(l=>{e=l,console.debug("Current lineup game library",{count:(l==null?void 0:l.length)||0,games:l}),t()});$n=()=>c.unsubscribe()};return hc||(hc=!0,rn||r()),An(()=>{rn&&(rn(),rn=null),jn&&(jn(),jn=null),Bn&&(Bn(),Bn=null),$n&&($n(),$n=null),hc=!1}),De(tt(()=>Zr()),Ut(`
      .lineup-page {
        min-height: 100vh;
        padding: 0 1em 3em;
        overflow: hidden;
      }

      .lineup-hero {
        width: min(1120px, 100%);
        margin: 0 auto;
        padding: 1.25em 0 0.5em;
        text-align: center;
      }

      .lineup-brand-strip {
        width: 100%;
        height: 150px;
        background-image: url('assets/media/youtube-channel-banner.jpg');
        background-size: contain;
        background-position: top center;
        background-repeat: repeat-x;
        border-bottom: 1px solid rgba(255,255,255,0.12);
      }

      .lineup-title {
        font-size: clamp(2em, 6vw, 4.6em);
        line-height: 1.04;
        margin: 0.18em 0 0.08em;
        background: linear-gradient(90deg, #ff0000, #ff7a00, #ffff00, #ff0000);
        background-size: 300% 300%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: lineup-title-glow 7s ease infinite;
        font-weight: 900;
        font-style: italic;
      }

      @keyframes lineup-title-glow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      .lineup-subtitle {
        margin: 0 auto;
        max-width: 680px;
        color: rgba(255,255,255,0.82);
        font-weight: 700;
      }

      .lineup-grid {
        width: min(1120px, 100%);
        margin: 1.4em auto 0;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1em;
      }

      .lineup-game-card {
        position: relative;
        min-height: 320px;
        overflow: hidden;
        border-radius: 18px;
        background: #070707;
        border: 1px solid rgba(255,255,255,0.12);
        box-shadow: 0 18px 48px rgba(0,0,0,0.36);
      }

      .lineup-game-card::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(185,28,28,0.2), rgba(249,115,22,0.12), rgba(250,204,21,0.12));
        pointer-events: none;
        z-index: 1;
      }

      .lineup-game-card img {
        width: 100%;
        height: 100%;
        min-height: 320px;
        object-fit: cover;
        display: block;
        transform: scale(1.01);
        transition: transform 0.25s ease;
      }

      .lineup-game-card:hover img {
        transform: scale(1.05);
      }

      .lineup-placeholder {
        width: 100%;
        height: 100%;
        min-height: 320px;
        display: flex;
        align-items: center;
        justify-content: center;
        background:
          radial-gradient(circle at 30% 25%, rgba(250,204,21,0.35), transparent 28%),
          radial-gradient(circle at 72% 34%, rgba(239,68,68,0.34), transparent 24%),
          linear-gradient(145deg, #111, #250909 52%, #3a1c00);
      }

      .lineup-placeholder span {
        width: 118px;
        height: 118px;
        border-radius: 999px;
        border: 4px solid rgba(255,255,255,0.68);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #facc15;
        font-weight: 900;
        letter-spacing: 0;
        box-shadow: 0 0 40px rgba(250,204,21,0.3);
      }

      .lineup-card-copy {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        padding: 3.4em 0.9em 0.9em;
        background: linear-gradient(to top, rgba(0,0,0,0.94), rgba(0,0,0,0.58), transparent);
      }

      .lineup-card-title {
        display: block;
        color: #fff;
        font-size: 1.1em;
        line-height: 1.08;
        text-shadow: 0 2px 12px rgba(0,0,0,0.8);
      }

      .lineup-card-date {
        display: block;
        margin-top: 0.25em;
        color: #f6c177;
        font-weight: 700;
      }

      .lineup-empty {
        width: min(680px, calc(100% - 2em));
        margin: 1.5em auto;
        padding: 1em;
        border-radius: 18px;
        border: 1px solid rgba(255,255,255,0.16);
        background: rgba(0,0,0,0.35);
        text-align: center;
      }

      @media (min-width: 680px) {
        .lineup-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (min-width: 980px) {
        .lineup-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (min-width: 1280px) {
        .lineup-grid {
          grid-template-columns: repeat(4, 1fr);
        }
      }

      @media (max-width: 520px) {
        .lineup-brand-strip {
          height: 96px;
        }
        .lineup-page {
          padding-left: 0.65em;
          padding-right: 0.65em;
        }
        .lineup-game-card,
        .lineup-game-card img,
        .lineup-placeholder {
          min-height: 280px;
        }
      }
    `),y.class`lineup-page`(y.class`lineup-brand-strip`(),y.class`lineup-hero`(vt.class`lineup-title`("Cary's Current Lineup"),ce.class`lineup-subtitle`("A list of my current games."),y.style`margin-top:0.9em;`(H.href`/index.html`.class`top-nav-pill`("Back Home"))),s=>{if(n===null)return y.class`lineup-results`(y.class`lineup-empty`("Loading current lineup..."));const i=n.filter(o=>o.isVisible!==!1).map(o=>UR(o,e||[]));return i.length?y.class`lineup-results`(y.class`lineup-grid`(i.map(o=>__(o).key(o.id)))):y.class`lineup-results`(y.class`lineup-empty`("No current lineup games are visible yet."))}))}),UR=(n,e)=>{const t=e.find(r=>r.id===n.gameId);return{...n,title:(t==null?void 0:t.title)||n.title||"",imageUrl:(t==null?void 0:t.imageUrl)||n.imageUrl||"",manufacturer:(t==null?void 0:t.manufacturer)||n.manufacturer||"",yearReleased:(t==null?void 0:t.yearReleased)??n.yearReleased??null}},__=L(n=>(__.inputs(([e])=>{n=e}),y.class`lineup-game-card bounce-in`(n.imageUrl?Z.src`${n.imageUrl}`.attr("alt",n.title||"Pinball game"):y.class`lineup-placeholder`(te("PB")),y.class`lineup-card-copy`(qr.class`lineup-card-title`(n.title||"Untitled Game"),q.class`lineup-card-date`("Collected ",jR(n.dateAddedToCollection)))))),FR=n=>n?typeof n=="string"?n.slice(0,10):typeof n.toDate=="function"?n.toDate().toISOString().slice(0,10):n.seconds?new Date(n.seconds*1e3).toISOString().slice(0,10):"":"",jR=n=>{const e=FR(n);if(!e)return"recently";const t=new Date(`${e}T12:00:00`);return Number.isNaN(t.getTime())?e:t.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})};let dc=!1,Hn=null,wr=null,Tr=null,Er=null,fc=!1,pc=!1;const rk=L((n=null,e=null,t=we(()=>{}))=>{const r=()=>{Hn&&Hn(),wr&&wr(),Tr&&Tr(),Er&&Er();const s=nR();let i=!1;Hn=(s==null?void 0:s.unsubscribe)||null;const o=s.subscribe(d=>{if(!i&&n===null&&Array.isArray(d)&&!d.length){i=!0;return}i=!0,n=d,fc=!0,console.debug("Visible game ratings",{count:(d==null?void 0:d.length)||0,ratings:d}),t()});wr=()=>o.unsubscribe();const c=oa();let l=!1;Tr=(c==null?void 0:c.unsubscribe)||null;const u=c.subscribe(d=>{if(!l&&e===null&&Array.isArray(d)&&!d.length){l=!0;return}l=!0,e=d,pc=!0,console.debug("Game ratings library",{count:(d==null?void 0:d.length)||0,games:d}),t()});Er=()=>u.unsubscribe()};return dc||(dc=!0,Hn||r()),An(()=>{Hn&&Hn(),wr&&wr(),Tr&&Tr(),Er&&Er(),Hn=null,wr=null,Tr=null,Er=null,dc=!1,fc=!1,pc=!1}),De(tt(()=>Zr()),Ut(`
      .ratings-page {
        min-height: 100vh;
        padding: 0 1em 3em;
        overflow: hidden;
      }

      .ratings-hero {
        width: min(1120px, 100%);
        margin: 0 auto;
        padding: 1.25em 0 0.5em;
        text-align: center;
      }

      .ratings-brand-strip {
        width: 100%;
        height: 150px;
        background-image: url('assets/media/youtube-channel-banner.jpg');
        background-size: contain;
        background-position: top center;
        background-repeat: repeat-x;
        border-bottom: 1px solid rgba(255,255,255,0.12);
      }

      .ratings-title {
        font-size: clamp(2em, 6vw, 4.6em);
        line-height: 1.04;
        margin: 0.18em 0 0.08em;
        background: linear-gradient(90deg, #ff0000, #ff7a00, #ffff00, #ff0000);
        background-size: 300% 300%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: ratings-title-glow 7s ease infinite;
        font-weight: 900;
        font-style: italic;
      }

      @keyframes ratings-title-glow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      .ratings-subtitle {
        margin: 0 auto;
        max-width: 680px;
        color: rgba(255,255,255,0.82);
        font-weight: 700;
      }

      .ratings-grid {
        width: min(1120px, 100%);
        margin: 1.4em auto 0;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1em;
      }

      .rating-card {
        overflow: hidden;
        border-radius: 18px;
        background: #090909;
        border: 1px solid rgba(255,255,255,0.12);
        box-shadow: 0 18px 48px rgba(0,0,0,0.36);
        display: grid;
      }

      .rating-card-media {
        min-height: 260px;
        background:
          radial-gradient(circle at 30% 25%, rgba(250,204,21,0.35), transparent 28%),
          radial-gradient(circle at 72% 34%, rgba(239,68,68,0.34), transparent 24%),
          linear-gradient(145deg, #111, #250909 52%, #3a1c00);
      }

      .rating-card-media .rating-video-frame {
        border-radius: 0;
        min-height: 260px;
      }

      .rating-card-media img {
        width: 100%;
        height: 100%;
        min-height: 260px;
        object-fit: cover;
        display: block;
      }

      .rating-card-placeholder {
        min-height: 260px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #facc15;
        font-weight: 900;
        font-size: 2em;
      }

      .rating-card-copy {
        padding: 1.1em 0.9em;
        display: grid;
        gap: 0.75em;
      }

      .rating-card-title {
        color: #fff;
        font-size: 1.2em;
        line-height: 1.1;
      }

      .rating-summary {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
      }

      .rating-score {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex: 0 0 auto;
      }

      .rating-details {
        min-width: 0;
        display: grid;
        gap: 0.35em;
        justify-items: start;
        text-align: left;
        align-content: center;
      }

      .rating-meta {
        color: rgba(255,255,255,0.9);
        font-size: 1.05em;
        line-height: 1.2;
        font-weight: 800;
      }

      .rating-review {
        margin: 0;
        color: rgba(255,255,255,0.82);
        line-height: 1.42;
      }

      .rating-videos {
        display: grid;
        gap: 0.75em;
        margin-top: 0.25em;
      }

      .rating-video {
        display: grid;
        gap: 0.35em;
      }

      .rating-video-frame {
        width: 100%;
        aspect-ratio: 16 / 9;
        border: 0;
        border-radius: 12px;
        background: #000;
        display: block;
      }

      .rating-video-link {
        border: 1px solid rgba(255,255,255,0.22);
        border-radius: 999px;
        color: #fff;
        padding: 0.45em 0.7em;
        text-decoration: none;
        font-weight: 800;
        background: rgba(0,0,0,0.32);
      }

      .ratings-empty {
        width: min(680px, calc(100% - 2em));
        margin: 1.5em auto;
        padding: 1em;
        border-radius: 18px;
        border: 1px solid rgba(255,255,255,0.16);
        background: rgba(0,0,0,0.35);
        text-align: center;
      }

      @media (min-width: 760px) {
        .ratings-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (min-width: 1120px) {
        .ratings-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (max-width: 520px) {
        .ratings-brand-strip {
          height: 96px;
        }
        .ratings-page {
          padding-left: 0.65em;
          padding-right: 0.65em;
        }
        .rating-summary {
          justify-content: flex-start;
        }
      }
    `),y.class`ratings-page`(y.class`ratings-brand-strip`(),y.class`ratings-hero`(vt.class`ratings-title`("Cary's Game Ratings")),s=>{if(!fc||!pc||n===null||e===null)return y.class`ratings-empty`("Loading game ratings...");const i=n.filter(o=>o.isVisible!==!1).map(o=>BR(o,e||[]));return i.length?y.class`ratings-grid`(i.map(o=>b_(o).key(o.id))):y.class`ratings-empty`("No public game ratings are visible yet.")}))}),BR=(n,e)=>{const t=n.gameId||n.id;return{...n,gameId:t,game:e.find(r=>r.id===t)}},b_=L(n=>{b_.inputs(([o])=>{n=o});const e=n.game||{},t=String(e.title||"Untitled game"),r=HR(n),s=qR(r),i=s?r.filter(o=>o!==s).reverse():r.reverse();return y.class`rating-card bounce-in`(y.class`rating-card-media`(s?T_(s):y.class`rating-card-placeholder`(t.slice(0,2).toUpperCase())),y.class`rating-card-copy`(y.class`rating-summary`(y.class`rating-score`(typeof n.rating=="number"&&!Number.isNaN(n.rating)?Su({rating:n.rating,size:108}):q.style`color:#f6c177;font-weight:900;`("Not rated")),y.class`rating-details`(e.title?q.class`rating-meta`([e.manufacturer||"",e.yearReleased?String(e.yearReleased):""].filter(Boolean).join(" - ")||"No manufacturer/year"):"",n.review?ce.class`rating-review`(n.review):"")),i.length?$R(i):""))}),$R=n=>n.length?y.class`rating-videos`(n.map(e=>w_(e).key(e.url))):"",HR=n=>Array.isArray(n.videos)?n.videos.filter(e=>!!(e!=null&&e.url)):[],qR=n=>[...n].reverse().find(e=>Pu(e.url))||null,w_=L(n=>{w_.inputs(([r])=>{n=r});const e=Pu(n.url),t=n.description||"Watch video";return y.class`rating-video`(e?T_(n):"",H.href`${n.url}`.class`rating-video-link`.attr("target","_blank").attr("rel","noopener noreferrer")(t))}),T_=n=>ng.class`rating-video-frame`.attr("src",Pu(n.url)).attr("title",n.description||"Watch video").attr("loading","lazy").attr("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share").attr("allowfullscreen","")(),Pu=n=>{const e=zR(n);return e?`https://www.youtube.com/embed/${e}`:""},zR=n=>{try{const e=new URL(n),t=e.hostname.replace(/^www\./,"");if(t==="youtu.be")return gc(e.pathname.split("/").filter(Boolean)[0]);if(t==="youtube.com"||t==="m.youtube.com"){if(e.pathname==="/watch")return gc(e.searchParams.get("v")||"");const[r,s]=e.pathname.split("/").filter(Boolean);if(r==="embed"||r==="shorts"||r==="live")return gc(s)}}catch(e){console.warn("Invalid rating video URL",{url:n,error:e})}return""},gc=(n="")=>/^[a-zA-Z0-9_-]{6,}$/.test(n)?n:"";let Nf=!1;const sk=L(()=>(n=0,e=!0,t=Date.now()-1e3,r=we(()=>{}),s=setTimeout(we(()=>e=!1),5e3),i=!Nf&&(()=>{Nf=!0,L.promise=Eu().then(o=>{typeof o=="number"&&(t=o,r())}).catch(o=>{console.error("Failed to load next meetup date",o)})})())=>y(tt(()=>Zr()),y(y.style`
      width: 100%;
      height: 175px;
      background-image: url('assets/media/youtube-channel-banner.jpg');
      background-size: contain;
      background-position: top center;
      background-repeat: repeat-x;
    `,Ut(`
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
    `),Z.attr("src","assets/media/sticker.png").class`sticker-callout`.style`transition: opacity 0.5s ease;`.attr("style.opacity",o=>e?1:0).onClick(()=>window.scrollTo({top:document.querySelector(".merch-section").offsetTop,behavior:"smooth"})).attr("alt","Super Wow Limited Edition"),y.onClick(()=>++n)(Ut(`
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
      `),y.class`bounce-in`.style`--fx-index:5;`(y.class`carousel-3d-wrapper`(y.class`carousel-3d`(y.class`carousel-3d-item`(Z.attr("src","assets/media/unnamed.jpg").attr("alt","Cary Hardy")),y.class`carousel-3d-item`(Z.attr("src","assets/media/Cary-Hardy.jpg").attr("alt","Cary Hardy")),y.class`carousel-3d-item`(Z.attr("src","assets/media/cool_shots/CH_chill.jpg").attr("alt","Cary Hardy Chill")),y.class`carousel-3d-item`(Z.attr("src","assets/media/cool_shots/CH_kong.jpg").attr("alt","Cary Hardy Kong")),y.class`carousel-3d-item`(Z.attr("src","assets/media/cool_shots/CH_machines.jpg").attr("alt","Cary Hardy Machines")),y.class`carousel-3d-item`(Z.attr("src","assets/media/cool_shots/playfield_red.jpg").attr("alt","Playfield")))),o=>n>4&&y.style`text-align: center; margin-top: 2em;`(H.href`./admin.html`.style`color:white; text-decoration: underline;`("🔨 admin tools")))),y.class`bounce-in`.style`--fx-index:1; text-align: center; max-width: 900px; margin: 0 auto;`(vt.class`welcome-text`("Welcome to where I talk and do everything pinball")),Q,y.style`text-align: center;`(Z.attr("src","assets/media/pewpew+cary.png").attr("alt","Pew Pew Cary Hardy").style`max-width: 900px; width: 100%; height: auto;`),Q,Q,Q,y.class`bounce-in section-anchor`.attr("id","links").style`--fx-index:5; display: flex; align-items: center; margin: 1em 0;`(y.style`flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`,q.style`padding: 0 1em; color: rgba(255,255,255,0.8); white-space: nowrap;`("links"),y.style`
          flex: 1;
          height: 1px;
          background: linear-gradient(270deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));
        `),y.style`display:flex;flex-wrap:wrap;gap:1em;justify-content: center;`(H.href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`.class`bounce-in link-icon`.style`--fx-index: 2;`(Z.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3ElEQVR4Ae2WIQzDIBBFEdPV6Ip6L2Y3Me9NMzuB98GbWrysqHf1otWYismm+vYFTRCEhXXjJrjkmSslLwHgi8vjxkoRKAL/J0BCSHAHGhjQgxHMwIKnY/Px+taNHd2/Bmg3p4wKuIH0Y1RQAB+ugDJxDgn0GQVMSMBmFJhDApSTYwLLQtR13xNAo0oWINS6ErXtpxInX0CmC3g1TURNkypQ+QL1IYG9hiFFRPIL8C8B/ybkO4bsFxH7Vcz+GLE/x5yBRL+LZDVQkTi2Ochn70dimQpFspKKi0AReAF/IVUTZ3/BGQAAAABJRU5ErkJggg==").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),H.href`https://rumble.com/c/c-2975430`.class`bounce-in link-icon`.style`--fx-index: 3;`(Z.attr("src","https://rumble.com/i/favicon-v4.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),H.href`https://twitter.com/cary_hardy`.class`bounce-in link-icon`.style`--fx-index: 4;`(Z.attr("src","https://cdn-icons-png.flaticon.com/512/124/124021.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),H.href`https://www.instagram.com/caryhardypinball/`.class`bounce-in link-icon`.style`--fx-index: 5;`(Z.attr("src","https://cdn-icons-png.flaticon.com/256/1409/1409946.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),H.href`https://www.patreon.com/caryhardy`.class`bounce-in link-icon`.style`--fx-index: 6;`(Z.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUUFRj///8AAADe39+AgIE8PT4MDhF3eHhDREUREhUKCxD7+/sFBwwAAAYNDxLl5eWlpabFxcbw8PC/v8BKS0wXGBzLy8yGhoevr7Dv7+9jZGV9fX63t7giIybZ2dlubm+Wl5gpKiwzMzZZWVtiYmRTVFaPj5ChoaJHSEo5OTy9mcuCAAAEZElEQVR4nO3c6XaiQBCGYSgHtVkEcUNjJFFjzP3f4IDOklEnVDc9VDPne/7j8T0szdZ4HgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRlQncSpbG8moRxclkqDic6C3ZlEjyNbpXP3H8aEnn7+WFTL7U5zPcLovCf/l0DtPLvpMGQseSkWnPjb7PlLs2jeqkoT3fL7Sqo1iZn8c7Qt/vCAaMwpv0mS++X9f11cfyguIO/zmRUqGJ6ywaP8n5sBO8Hil3ZJ00K43i+zf/eV8un5zjpKKGBfqFK3mZf513NDuTEatQtVETZmhNYrceMXGjULFTx5uHh5bG0DOUT9QpDKiJ+YDWCZPLjo1ZhEkx1+mrLgLoNuqNTSGeNLfTXj42FEzUK6e2LIfCLxINsIr+Qjsxj6K3oKJrILqTAYBO9SkU3VG5hPDcOrPdFwfNUZqEio33wp6Xg0M8rVGHRJtD3M7kTcV5h8qQ10D/wJLYrsgqHzy12wqu12HbKKVThtm2g72+lEjmFVLbdRiv5Ruh6kVGonpftA6vj6UJmJTIKaWQj0PeFViKncGencCezJzYXUmkn0I9KkRGjsVAlrLsyHIWbhfGh4bYaXz6XuOBvLKSTrUDfH0msxOZCS8eZ2s7FQkX2Av1I66lWR4WJrSPphcSQ2FRIFk5Jf8sENtOGQhVb3A3rK2HnCofj1tdNn+32E9cK46O10bCWCoyIDYU0snDh9FtUdn+oaSq0ON7XBG5mNBW+2C1cOVeYvNstPLlXmNktfEEhCq0X2j7SuLcf/v/H0kcvhbXh3niYlFbP2taH7h+zNRSGbR4b3kvPzp2XqudWzw1v7djvdXZW6JGVO/o/Td27PrR8MBUYLBoLww+bhaxXczsu9Gzea8tdvJvoUcsn+J9J3IhiFFp6tlYTeb7WWDjZW7vbtnuVeLzGeLpm7fJC4MKCVTj8sHQzKt+LzFLgPAO2dKyRWYWcwnBuZSXmHzITTThvm9i50Jc4n+EWDl8tXGAMBG7oswutjIkbqRfbWIWKWr+tIHFVccV7NzE0f0H4Kg3EZiUw36CldsfTSPA9aO5b0O2uE6WOo5d/zixU1OIJhmQg/119ZX5+WohO8OLPt1ChYeLWExoJrzTmzCizffFEooFa856M9sUX6TmIerPzSPcG8eBNeuqa7gxLOmvdP51KT1zz9GfJxuGK/SQjH8Xi8ysNZjor2jOviLNAehe8MJitHqojYyrp7CA/QfbCZD6+SmhefHnISYuxM59VMPxqREzj1V9X5HJ1dmT91Uy/i1F/1mRRbgfpH9cc0XqwLR37wIlxoXfZWsNxeXovtrPpdLYt3k/lfOHEVwY+a1Po1SerSbXG1KKiqrWaOPCFgVstC6/Uxb/5g61ZKXQaCvsPhf2Hwv5DYf+hsP9Q2H8o7D8U9h8K+w+F/YfC/jP/nndfqNfz+FawkP5XVqnwjuy7EwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATvgOQzxF32eUYx8AAAAASUVORK5CYII=").attr("alt","Patreon").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),H.href`https://silverballswag.com/collections/cary-hardy`.class`bounce-in link-icon`.style`--fx-index: 7;`(Z.attr("src","https://cdn.shopify.com/s/files/1/0255/0271/1853/files/silverball_swag_logo_color_360x.png?v=1614300719").attr("alt","silverball_swag").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),H.href`https://www.facebook.com/hardypinball`.class`bounce-in link-icon`.style`--fx-index: 8;`(Z.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAApVBMVEUYd/L///8Pc/EqgPIZePEXdvKhwPgAa/ATdPGmy/q1zfn9//8Yd/Pf6vwAcfH8/f8Sefrq8/3x9/73+//M3vsPd/nX6Pwcf/4Gef8Ac/kAavSz0PkrhPscf/p1q/zk7f2Es/rA1/pAjPiNufxIk/x6rPpXmftpovqVwPudxflEk/cwiPvF3vtcnPodfPJQmPVnnfVlpvmrxvl1rPaVvftzqPyHtfk2FCUeAAAPm0lEQVR4nN2di3raOgyA7eCUjJjcw0pDCqHcaaFsdO//aMdOoIU1ATu2CGf6zlm/dW3iH8myLcsWwlBi2+wP1w2DYZQsX6bz7Wrc2mwIIZtNa7zazn+/LJNoGISue/xhGEFQD3YDfxh1XnarluH0Hz0v9jxqUooQouxr/vfHvmO0VruXTjT0AxeqIboJi4b63agzehtTh3F4jIpwQfwrIsc/8u8wVC92zPHb6FfU9e2vJ+gTvYS8iWEve5jONgyOaSzHKOi+C/9+Dkqp5zib2fQh64WHp+gTjYT8ww+j5XS2pjGllFSBlaCi3HgNaz2bLqMQa1WkLkLuL+zecj5OrUJ1onSnnBRRKx2/L3p28UAtooeQt8Zfbgc/DTO3Smm6AyO3Wmr8HGyXPtalSB2E/BPPdtZjbOY9qybeCacZPxrzzNXTI3UQht3lpO/RwnGo8qHC59LH/njZDTW0To2Qf8Z+NFrHXtEwZbwvTIK8eD2KfKyqSVUd+tnzoC/jN0UROSN1Ns+Zr9hCBULWT4LkYxBTHbZZQUnjwUfiKzkdFR3ayXyQj3sgfAUioXQwT1TstC4h+1Bf31OqseuVM/L/vPTttb4aa+twuIs9Pc7zOiaJ492wbkPrEDKb8RfksfiAbwDI/38kC7+eV62lwyBbcf9yE74DI6HxKgvqNLYOYTRKY3IjBX4yEhSno+gGhDYOOxOHopvyoWKuS51JJ5S2VDlC9vTeNPVuynZCicx02pPtjZI6tJOJBTbCXydkq6uJ7OAoQ+jiYJTHJBrhKxgJ9UaB1NgoQeji7qTfGNwREaH+pCeDKEEYJql3uxHiAqWXJhLLKnFCf+94tx0iqhGdvfiKQ5iw+0ybJjsIn+p7z11RSxUjdHH0RiujgreWHPEtEkQUIrRxNqb30AWPwtrijTOxgVGE0MUJoXeiv4NwRJIIaVFIh8unRkfBMuEj49NSpPEChOGi6VGwXAjqLwRGjeuEwd67M/0VkofjXq4vqK4SBi+p2dRE9LIwl2qm1xGvERaATcNUigDiFcJwn96bjzkXhnilL14kdPHCM5tmuChsyegtLg8alwhtvOzfZxf8Eta6/vLi0H+BkA30T3dtobkwDTxdHPqrCV2ckbuaqpULH/pJdgHxgg6j8d3NZMqEDRp0fCEIV03YffsfaLAQ4r115Qn9Z8g9l5PWmeRvkbUc9is/nyuXxBWEbriHN9EjHDIty+BiWZZ5zLWRQzW9fVjRFcsJmRt1YPkOmTSW0263HYtsDsK/47Sf2u2+YZhHVJGWUKfKoVbosMeDToB8XD9Mb5vx2+9F8trzQzuXMBj2Xl9/LBej3Wwy3pi5akXmHHwLrqIrlhHaOJh4kBufzD4Z3WS6fL0QUAqHUfJjMX1ftcQeGU+C0pG/VIf2qA/mRrnRWQ6Z/UkOn7nr2qfmZduue5otFA4XhtiD+6PSqU0JoY0TsJ0J7jzM9uaj08sh3EvTLQaa/3NH0E6Jl5QpsUyHvQmQH833jPvGRySVXyFIyLripFfy6yWE4dSCsVG2YiVGextJbnSKEXIlWtOSlVQJYQcoAYFbqEOWcvsq4oQ8/ybtXCe0cTSBicvkgO89+YRnUUIm3iT61hW/6TAYOUCTGWIZf+S3cKUIkTP61gW+EWYp0P4EMTbLK95TlZCtMtLsGqG/iiE0yNyA0+rUApTRIUHx6m8/fU7o4AR+m9wp8+FCIFcKRfvzbcRHo6huqEYod0Sy8yrIcQbD1k/jMzGCcGslNKIETJHAyYNEyLkdDByX/pwL2jYSpmreXGRuwPMd26c0Nu5KFz9w4TIW4UoaAFeVdI0IfFaARoagDcJNE2IqDFEEaArbZ4QORFKIA9qN01IUD9BQPH8Qpom5LF99AJ5OKZ5Qu8F/f7HCX+jefxPE8ZztP3HdbhFkFOa5gnZpAYBrg7vgZCOUQsqlMelcUJCWwgs0MalcUJEN4xS9SFmpQgTVj9BMc5IOKEqIDKc/Jjy8cunsL+3NwKEm7bxXb4eptg6DddvOx+/HipFJCHqwq9zmagGOVQZSfuH5mIG5xJu1YKNhHkadUKw6htM/LWaDu+fcGhZKoTM06iOh7CELs7UdlXYeDi+ax26eNlW0gCb06wUA1HQhL/VCNm8VHVtAUto461SwJqvLVTXh9CeRi3mT+Kd8hoflNDGgaHkCfka/889E7o4aiu5Uh6nUY21ARMqpjHwWJtqvBSY8M+TmgL6iXLMG9jT7NQGC9SOlPctgAknavNuvm+huvcESxhs1AYLrxUq7x9CEtq4p7a8I3z/UHUPGJLQxYlaNlG+B6y6jw+rw4Wao8n38fnNbPdKiPFvR0WHBDkJz6ehSvFEWMJ3JVdKqMXzaRRzogAJbeyrhaGKnCie13a3hD21CATJ89pUcxMBCfkdsWqOhl+qhLD7SykSAtoPf6gFkYr8UtUcYVDCvaWkxEOOMM/zvlNCWy3H/jPP25+q7A1AEvrviiGMQ66+/XCvOuwpDRZf5y3UzsxAEr62lDbXPs/M4N5MoUPDEdo42SjwnZ57ClU6NCeEkl8qZRkI+jq7pnT+MN9dqxYRXVX9qv2itu30ef4wP0Oq8GFV73KbgrvcVTvcaipEJ2dIw3eV8cK0qsR0hHa5nYonKG3jMyOdH88Bw53lFjn3xHRYsUFI1OqAktOz3GDn8ZvLNiHEPDmPz2QLk7/XZD5NvMVfhGD3YjSpw/N7MfjdJiBXKDVHSI3Tu03y+2kgDgE2RshUeH4/TX7HEIA02A/7r2eE+T1R/5QOvfH5PVHc18QAZtqcDuNvd33h7hrgovLGCOm3+9qA7txriJAQp+TOPZB7E5shJEUI6huh/6zfTJuy0vK7L3E20H6jWUOE5feX2vkdtP8CIcnvoP188fk9wrqV2ARh9T3C/C5o3aN+Mzqsvgua3+f9v9fhhfu8McCd7I1YqfdeeSc7v1dfrxIb0eGle/W110a4OSGvjfDXNX8l9S30va8BHV6rb1HUKNEnDRBeq1Giuc7MrQlZJ5xdrjOD81pB/2NCgVpBOJg6+i6hvC0hEar3xGt26btj8NY6NEVqdvG6a9reeFNCwbpruLgKU5Pc2EpFa+fl9Q/12OkNCZnvoKL1DzXWsLwloUwNS311SG9ppRJ1SA+1ZHUg3oyQ15JdSdSSzesB/78IiZeWdcJKQl7TWYe3uRUhybOBpWo6u+Feh7e5ESFThWxdblzUVlfW4m0ICbNR6drqTLoaQho3IcyLyVUU5b5IiCNemEUN8RaEDJBeqtZTTchzkFUN9QaEHBBlF55/QYfMoT6ppbTcgJD1Qfp08Wr7C4Rs/Fwq7n3fgDAvfHTpLZcIedhGrSvewEpN7+/AjAwhW0ntU5X0OXhCM91fufb9CiEOXjhiXUZYQtYsM325VublGiFHRLUtFZSQIBHA64QM0avtUSEJeZu8/fVCPdcJcbjoo5paBCTkgP2FQOkFAUKMl0+0Xl+EI2StoU9LkcaLELKhn9Sbo4IR8pkMEalhI6hDG2fjWhM4QB3ScSZ2P5UQIU92f/OQfMEpGELeDvomWnVQjJA9rPtM5dUIQsjbQJ+rl0v1CJn4e4N3RilGAELC97Gd/fUKPfKEOExS2VwNEEISp4lIgR55Qmapkz6VGhm1E/J39yddmZNWEoTsscHIk7JUzYTcQqk3CqSOkskQ8uYkE0tCjdp1SK1JInmHoRwhe3hvKrHY0EvI5qHptCdbIFpSh+zpYWfiUCQGqY+Qv446k04ofQ2lLCGXaJQKJoXrIiR8JI7TUZ0C2HUIcZDNYqGEYo1WSuNVJlVa+Ch1CFmr/QV5FPA3Wghz5/1IFn69Eu21dMhluIs9cm0ap4Ewf4EX74ZXH1QhdQnZiPT6nnJTvWStyoT5s2n6/oprH6eurUPetmQ+MOmlFYciYT7C08Fcdgg8EwVC9qEGyccgvrDRqEbIF0nx4CMJ6isQq+mQi589D/LN1FLK+oQkj9f3N8+Z+CqiXNQIefv96M+aO50yxNqEeSCtvx5FPq7nQb9EVYdcwu5y0veKAZIoE+YOmk2w+5NlV2KRVCk6CBmF+7ozHuO8MjRRIsyt04wfjV3mqmqvEB2EhSPwl9vBT4OeDR+ShNzUiWn8HGyXPlZyLyeih5C1hjent3gfp4b1FVyVICxs0zLS8XzROz5Qh+gixMVH7vZ+TWdralBOSYSqdPLqgHn0jP3WejZdRiHWpb5cNBLiot+EvexhOts4judRQUJKvdjZzKYPWS/Eenrfl+glPIjtd6POaD5G7VTgp9M2Hb+NfkU9P0fTfdkNCCEXN/CHvc5e4Cf3nWjoB2D3hYERFsYm0m4X6zbMM/kPzEctXgZffqYAAAAASUVORK5CYII=").attr("alt","Facebook").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`)),Q,Q,Q,y.class`bounce-in section-anchor`.attr("id","merch").style`--fx-index:8;`(vt.class`hero-text`("PINBALL MERCH & MORE")),y.class`merch-section bounce-in`.style`--fx-index:9;`(y.style`display: flex; flex-direction: column; align-items: center; gap: 3em;`(y.style`display: flex; flex-direction: column; align-items: center; gap: 1em;`(y.class`merch-item`.style`max-width: 900px; margin: 0 auto;`(H.href`https://buy.stripe.com/eVq14f9f01zi3Vn7mN00003`.attr("target","_blank")(Z.attr("src","assets/media/wrong_kong_shirts.jpg").attr("alt","Wrong Kong Shirt"))),H.attr("target","_blank").href`https://buy.stripe.com/eVq14f9f01zi3Vn7mN00003`.style`display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(o=>o.target.style.transform="scale(1.1)").onMouseOut(o=>o.target.style.transform="scale(1)")("Get your 'Wrong Kong!' T-Shirt"),H.attr("target","_blank").href`https://buy.stripe.com/5kQdR11My7XGbnPePf00005`.style`display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(o=>o.target.style.transform="scale(1.1)").onMouseOut(o=>o.target.style.transform="scale(1)")("🇦🇺 Wrong Kong for Australia residents")),y.style`display: flex; flex-direction: column; align-items: center; gap: 1em;`(y.class`merch-item`.style`max-width: 900px; margin: 0 auto;`(H.href`https://buy.stripe.com/5kA4j775zaRsdHy9AA`.attr("target","_blank")(Z.attr("src","assets/media/merch-on-glass.jpg").attr("alt","Pinball Merchandise"))),H.attr("target","_blank").href`https://buy.stripe.com/5kA4j775zaRsdHy9AA`.class`bounce-in`.style`--fx-index: 11; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(o=>o.target.style.transform="scale(1.1)").onMouseOut(o=>o.target.style.transform="scale(1)")("More guns than Wick T-shirt"))),y.style`text-align: center; margin-top: 2em; display: flex; flex-direction: column; gap: 2em; align-items: center;`(H.attr("target","_blank").href`https://silverballswag.com/collections/cary-hardy`.class`bounce-in`.style`--fx-index: 12; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(o=>o.target.style.transform="scale(1.1)").onMouseOut(o=>o.target.style.transform="scale(1)")("SHOP SILVERBALL SWAG"))),Q,Q,y.class`bounce-in section-anchor`.attr("id","youtube").style`--fx-index:5; display: flex; align-items: center; margin: 1em 0;`(y.style`flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`,q.style`padding: 0 1em; white-space: nowrap;`(H.href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`.attr("target","_blank").style`color: rgba(255,255,255,0.8); text-decoration: underline; text-underline-offset: 2px;`("youtube channel")),y.style`flex: 1; height: 1px; background: linear-gradient(270deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`),y.style`text-align: center;`(y.class`bounce-in`.style`max-width: 900px;margin: auto;--fx-index:12`(ng.attr("src","https://www.youtube.com/embed/JFkiAk44Ntk").attr("frameborder","0").attr("allowfullscreen","").style`width: 100%;height: 500px;`),y.style`text-align: center; margin-top: 2em;`(H.attr("target","_blank").href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`.class`bounce-in`.style`--fx-index: 13; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(o=>o.target.style.transform="scale(1.1)").onMouseOut(o=>o.target.style.transform="scale(1)")("Goto My Channel")),Q,Q,Q,Q,y.class`fade-in`.style`--fx-index:16`(o=>Date.now()<t&&De(y.class`bounce-in`.style`--fx-index:5; display: flex; align-items: center; margin: 1em 0;`(y.style`flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`,q.style`padding: 0 1em; color: rgba(255,255,255,0.8); white-space: nowrap;`("live meetups"),y.style`flex: 1; height: 1px; background: linear-gradient(270deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`),y.style`margin-top: 2em; display: flex; flex-wrap: wrap; justify-content: center; gap: 2em;`(y.class`bounce-in`.style`--fx-index:17; position: relative; max-width: 500px; width: 90%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(255,0,100,0.3), 0 15px 40px rgba(0,255,255,0.2); transform: perspective(1000px) rotateX(2deg);`(y.style`position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, rgba(255,0,100,0.2), rgba(0,255,255,0.2), rgba(255,0,100,0.2)); animation: shimmer 4s infinite;`,Z.attr("src","assets/media/meetup-screenshot.jpg").attr("alt","Pinball Community Live Meetup").style`width: 100%; height: auto; display: block; position: relative; z-index: 1;`,y.style`position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5em; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); z-index: 2;`(y.style`color: white; font-weight: bold; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-size: 1.1em;`("Monthly Live Meetups"))),y.class`bounce-in`.style`--fx-index:18; position: relative; max-width: 500px; width: 90%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,255,255,0.3), 0 15px 40px rgba(255,0,100,0.2); transform: perspective(1000px) rotateX(-2deg);`(y.style`position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, rgba(0,255,255,0.2), rgba(255,0,100,0.2), rgba(0,255,255,0.2)); animation: shimmer 4s infinite; animation-delay: 2s;`,Z.attr("src","assets/media/meetup-screenshot2.jpg").attr("alt","Pinball Community Live Meetup 2").style`width: 100%; height: auto; display: block; position: relative; z-index: 1;`,y.style`position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5em; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); z-index: 2;`(y.style`color: white; font-weight: bold; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-size: 1.1em;`("Live Discussion & Q&A")))),y.style`margin-top: 2em;`(c=>ca({date:t,showLearnMore:!0})))),Q,Q,Q,Q,Z.class`bounce-in reflection`.attr("alt","Cary Hardy logo").attr("src","https://cdn.shopify.com/s/files/1/0255/0271/1853/collections/Front_1200x1200.png").style`--fx-index:12;width: 55vw;min-width: 200px;max-width: 400px;`,Q,Q,Q,Q,Q,y.class`bounce-in section-anchor`.attr("id","awards").style`--fx-index:13;`(vt.class`hero-text`("AWARD WINNING WORK & CONTENT")),y.class`merch-section bounce-in`.style`margin: 2em auto; --fx-index:13;`(y.style`display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 2em; margin: 1em 0;`(y.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Z.attr("alt","PATB Award").attr("src","assets/media/awards/PBaTB award.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,q.style`color: white; display: block; text-align: center;`("PATB Award")),y.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Z.attr("alt","Twipy Award").attr("src","assets/media/awards/Twipy.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,q.style`color: white; display: block; text-align: center;`("Twipy Award")),y.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Z.attr("alt","PATB Awards").attr("src","assets/media/awards/PatB awards.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,q.style`color: white; display: block; text-align: center;`("PATB Awards")),y.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Z.attr("alt","Cary Hardy and Steve Ritchie handshaking").attr("src","assets/media/awards/photo0.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,q.style`color: white; display: block; text-align: center;`("TPF 2024")),y.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Z.attr("alt","Cary Hardy holding award").attr("src","assets/media/awards/photo2.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,q.style`color: white; display: block; text-align: center;`("TPF 2024")),y.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Z.attr("alt","Earth Shaker award").attr("src","assets/media/awards/EarthShakerAward.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,q.style`color: white; display: block; text-align: center;`("TPF 2024")),y.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Z.attr("alt","TPF 2022").attr("src","assets/media/awards/TPF 2022.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,q.style`color: white; display: block; text-align: center;`("TPF 2022")),y.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Z.attr("alt","Cary Hardy owned pinball machine").attr("src","assets/media/awards/photo3.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,q.style`color: white; display: block; text-align: center;`("TPF 2022")),y.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Z.attr("alt","Cary Hardy holding award").attr("src","assets/media/awards/photo1.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,q.style`color: white; display: block; text-align: center;`("TPF 2022")))),Q,Q,Q,Q,y("📧",H.href`mailto:hardypinball@gmail.com?subject=website contact&body=Hello, found your email through your website%0A%0A%0A`.style`color:white`("hardypinball@gmail.com")),Q,Q,Q,Q)))),GR=$("img");let Df=!1;const ik=L(()=>{let n=Date.now()-1e3;const e=we(()=>{}),t=()=>new Date(n),r=()=>{const s=document.getElementById("count-clock");s&&Uw(ca,s,{date:t(),showLearnMore:!window.location.href.includes("meetup.html")})};return setTimeout(r,0),Df||(Df=!0,L.promise=Eu().then(s=>{typeof s=="number"&&(n=s,e(),r())}).catch(s=>{console.error("Failed to load next meetup date",s)})),De(tt(()=>Zr()),GR.class`bounce-in reflection`.alt`Cary Hardy logo`.src`https://cdn.shopify.com/s/files/1/0255/0271/1853/collections/Front_1200x1200.png`.style`--fx-index:0;width: 55vw;min-width: 200px;max-width: 400px;`,y.class`bounce-in`.style`--fx-index:1`(gl.style`line-height: 1.3;`("Meet & talk everything pinball!"),ce("for Patreon LE supporters"),y.style`font-size:.8em;opacity: .7;`("😎 come experience the hype")),Q,y.class`bounce-in`.style`--fx-index:2`(y.id`count-clock`),Q,y.class`bounce-in`.style`--fx-index:3;text-align: center;`(y.style`display: inline-block;`(y.style`\n          max-width: 900px;\n          background-color:#333;border-radius: .7em;\n          margin:.5em;text-align: justify;\n          border:1px solid rgba(255,255,255,.5);\n          color:rgba(255,255,255,.85);\n        `(y.style`padding:0em 2em;`(y.style`line-height: 1.5em;`(ce("And if that sounds interesting to you, consider joining us!"),ce("By becoming a ",H.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`("Cary Hardy LE supporter")," before ",s=>t().toLocaleString("default",{month:"long"})," ",s=>t().getDate(),s=>qy(t()),", you will receive an LE only Patreon ",te.style`white-space: nowrap;`("💬 message"),", ",xT("before the meeting start time"),", with an invite ",te.style`white-space: nowrap;`("🔗 link")," to join this very exclusive meeting.")),Q,vt("How does the meeting work?"),Gh(gr("🍺 It mostly works because of beer. Come 🍻 cheers with us!"),gr("🛎️ Make sure you have Patreon notifications turned on to ensure you receive invite link 1 hour before meeting"),gr("Meeting software is Google Meets, which is a browser based application. No installation will be required."),gr("Link to meeting is provided 1 hour before meeting. Must be ",H.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`("Patreon LE member"))),Q,vt("😮 When issues arise"),Gh(gr("Watch your Patreon messages."),gr("In the event of meeting cancellation or disruption due to unforeseen circumstances, a makeup meeting will be communicated directly from Cary Hardy."))),y.style`text-align: center;`("⚪️ ",H.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`("Patreon memberships")," ⚪️")))),Q,Q,y.class`bounce-in`.style`--fx-index:4;text-align: center;`(y.style`padding:.8em;font-size: .7em;`(H.class`no-a-style`.href`index.html`(K.type`button`("🔙 home")))))}),ok=L(()=>{const t=new URLSearchParams(window.location.search).get("session_id")||""||"not found";return y(tt(()=>Zr()),y.class`wrap`(y.class`card`(gl("Thank you!"),ce("✅ Your payment was received successfully."),Q,ce("We really appreciate your support as we grow CaryHardy.com"),Q,ce("At Pinball at the Beach, please find Cary or Acker or email ",H.href`mailto:acker.dawn.apple@gmail.com?subject=PATB Cary key box`("acker.dawn.apple@gmail.com")),Q,ce.class`muted`("Session ID: ",te.class`session-id`(r=>t)),H.class`cta`.href`/index.html`("Back to CaryHardy.com"))))}),Of=["/assets/media/product-images/key-box/IMG_1477.heic.jpeg","/assets/media/product-images/key-box/Main.jpg","/assets/media/product-images/key-box/IMG_1472.heic.jpeg","/assets/media/product-images/key-box/IMG_1474.heic.jpeg","/assets/media/product-images/key-box/IMG_1475.heic.jpeg"],Lf="https://buy.stripe.com/aFabJ02XDe7K7GrgXv4F202",WR=L(()=>{let n=Of[0],e=Lf;return WR.inputs(t=>{[{checkoutUrl:e=Lf}={}]=t}),y(tt(()=>Zr()),y.class`product-wrap`(y.class`product-hero`(y.class`product-info`(gl("Cary Hardy Key Box"),bt("🏖️ PATB Pickup only. Priced for LE only members only"),ce("Cary Hardy Key Box"),ce("LE Members only pricing"),vt("$15.00 ",te.style`font-size:0.6em;opacity:0.75;font-weight:400;`("+ $1 processing + tax")),ce.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`("🇺🇸 Made in America"),ce.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`("🚫 🤖 No artificial intellegence used"),ce.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`("🥳 Fun to assemble Cary Hardy logo that is then functional as your pinball keys holder!"),H.href(t=>e).class`buy-button`.attr("target","_blank")("Buy Now")),y.class`product-media`(Z.attr("src",t=>n).attr("alt","Key Box main photo").class`main-image`,y.class`gallery`(Of.map(t=>y.class`gallery-item`.class(r=>t===n?"is-active":"").onClick(()=>{n=t})(Z.attr("src",t).attr("alt","Key Box photo").class`gallery-image`)))))))});export{QR as a,YR as b,XR as c,ek as d,nk as e,rk as f,ZR as g,sk as h,ik as i,ok as j,WR as k,tk as m,Uw as t};

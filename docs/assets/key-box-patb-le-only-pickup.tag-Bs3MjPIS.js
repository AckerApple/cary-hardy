var By=Object.defineProperty;var Hy=(n,e,t)=>e in n?By(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var it=(n,e,t)=>Hy(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function _s(n){return n.renderCount=n.renderCount||0,n.varCounter=0,n.state={newer:{state:[],states:[]}},n.global={blocked:[]}}function bi(){return de.stateConfig.support}function Wi(n){return Be(n.context),de.stateConfig.support=n}const je=function(){};let ct=[];const Ct=[];let ft=[],Ji=[],nn=[],oc=!1;const en=[],qy=400;let Qn=0;const Sa=new Map,he={locks:0};function $y(n,e){const t=Sa.get(n);if(t!==void 0&&t>=Qn){en[t]=e;return}const r=en.length;en.push(e),Sa.set(n,r)}function zy(n,e){e.textContent=n}function Xe(){he.locks>0||Gy()}function Gy(){++he.locks,Fd(),--he.locks,Ld(),Wy()}function Ld(){Ky();const n=nn;nn=[];for(const e of n)e[0](...e[1])}function Wy(){oc||!en.length||Jy()}function Jy(){oc=!0,requestAnimationFrame(Md)}function Md(){++he.locks;let n=0;for(;Qn<en.length&&n<qy;){const e=en[Qn];++Qn,e[0](...e[1]),++n}if(Fd(),Ld(),--he.locks,Qn<en.length){requestAnimationFrame(Md);return}en.length=0,Qn=0,Sa.clear(),oc=!1}function Fd(){const n=Ct.length;for(let e=0;e<n;++e){const t=Ct[e];t[0](...t[1])}if(n===Ct.length)Ct.length=0;else{let e=0;for(let t=n;t<Ct.length;++t)Ct[e]=Ct[t],++e;Ct.length=e}for(const e of ft)e[0](...e[1]);for(const e of Ji)e[0](...e[1]);for(const e of ct)e[0](...e[1])}function Ky(){ct=[],ft=[],Ji=[]}function is(n,e){Ct.push([Qy,[n,e]])}function Qy(n,e){n||console.debug("no element by",{_caller:e,element:n});const t=n.parentNode;t||console.debug("no parentNode by",{_caller:e,element:n}),t.removeChild(n)}function ac(n,e,t){n.parentNode.insertBefore(e,n)}function cc(n,e){n.appendChild(e)}typeof document=="object"&&document.createElement("div");function Yy(n){return document.createTextNode(n)}function Ud(n,e,t=je,r){const s=Yy(e);ac(n,s),t(s)}const ws="";var Vu;(function(n){n.string="string",n.number="number",n.boolean="boolean",n.undefined="undefined"})(Vu||(Vu={}));var oe;(function(n){n.function="function",n.date="date",n.unknown="unknown",n.object="object"})(oe||(oe={}));const Xy=Date.now(),ie={tag:"html",dom:"dom",templater:"templater",tagComponent:"tagComponent",tagArray:"tagArray",host:"host",subscribe:"subscribe",signal:"signal",stateRender:"stateRender",version:Xy};function jd(n){if(!n)return!1;switch(n.tagJsType){case ie.dom:case ie.tag:case ie.templater:return!0}return!1}function bs(n){const e=n==null?void 0:n.tagJsType;return e===ie.tagComponent||e===ie.stateRender}function Zy(n){return Ki(n)&&typeof n.subscribe===oe.function}function Mn(n){return n&&xn(n.then)}function xn(n){return typeof n===oe.function}function Ki(n){return typeof n===oe.object&&n!==null}function Ye(n){return Array.isArray(n)}function lc(n){const e=n.state;if(e&&e.newest&&e.newest)return e.newest;if(n.parentContext)return lc(n.parentContext)}function Qi(n){let e=n;for(;e.ownerSupport&&!bs(e.templater);)e=e.ownerSupport;const r=e.context.state;return r&&r.newest||e}function e_(...n){return n}function Bd(n){const e=de.stateConfig;return e.states[e.statesIndex]=n,++e.statesIndex,n(e_)}function t_(n){const e=de.stateConfig,t=e.statesIndex,l=Qi(e.prevSupport).context.state.older.states[t];let h=[];l(function(...m){return h=m,l.lastValues=h,m});const f=function(...m){return h};return e.states[e.statesIndex]=n,++e.statesIndex,n(f)}function Hd(n){Be(n);const e=de.stateConfig;e.handlers.handler=qd,e.handlers.statesHandler=Bd,e.rearray=[];const t=e.state=[],r=e.states=[];e.statesIndex=0;const s=n.state=n.state||{};s.newer={state:t,states:r}}class n_{}function r_(n){const[e]=n(n_),[t]=n(e);return[e,t]}function s_(n){const e=n.callback;if(!e)return n.defaultValue;const[t]=r_(e);return t}function i_(){const n=de.stateConfig,t=n.rearray[n.state.length];return n.state.push(t),t.defaultValue}function qd(n){var o,c;const e=de.stateConfig,t=lt();if(!t||!t.state){const l="State requested but TaggedJs is not currently rendering a tag or host";throw console.error(l,{config:e,context:t,function:(c=(o=e.support)==null?void 0:o.templater.wrapper)==null?void 0:c.original}),new Error(l)}const r=t.state.newer;e.state=r.state;let s=n;if(typeof n===oe.function&&(s=n()),typeof s===oe.function){const l=s;s=function(...f){return l(...f)},s.original=l}const i={get:function(){return s_(i)},defaultValue:s};return e.state.push(i),s}function o_(n){const e=new ne,t=r=>{const s=[],i=[],o=(p,m)=>{if(s[m]=!0,i[m]=p,s.length===n.length){for(const R of s)if(!R)return;r(i,h)}},c=[...n],h=c.shift().subscribe(p=>o(p,0)),f=c.map((p,m)=>p.subscribe(y=>o(y,m+1)));return h.subscriptions=f,h};return e.subscribeWith=t,e}function a_(n,e){const t=n.findIndex(r=>r.callback===e);t!==-1&&n.splice(t,1)}function c_(n,e,t){const r=ne.globalSubCount$;ne.globalSubCount$.next(r.value+1);const s=function(){s.unsubscribe()};return s.callback=e,s.subscriptions=[],s.unsubscribe=function(){return l_(s,t,e)},s.add=i=>(s.subscriptions.push(i),s),s.next=i=>{e(i,s)},s}function $d(n,e,t){const r=[...e],s=r.shift(),i=f=>{if(r.length)return $d(f,r,t);t(f)};let o=i;const h=s(n,{setHandler:f=>o=f,next:i});o(h)}function l_(n,e,t){a_(e,t);const r=ne.globalSubCount$;ne.globalSubCount$.next(r.value-1),n.unsubscribe=()=>n;const s=n.subscriptions;for(const i of s)i.unsubscribe();return n}const tr=class tr{constructor(e,t){it(this,"onSubscription");it(this,"methods",[]);it(this,"isSubject",!0);it(this,"subscribers",[]);it(this,"subscribeWith");it(this,"value");it(this,"set",this.next.bind(this));this.onSubscription=t,arguments.length>0&&(this.value=e)}subscribe(e){const t=c_(this,e,this.subscribers),r=this.subscribeWith;if(r){if(this.methods.length){const s=e;e=i=>{$d(i,this.methods,o=>s(o,t))}}return r(e)}return this.subscribers.push(t),this.onSubscription&&this.onSubscription(t),t}next(e){this.value=e,this.emit()}emit(){const e=this.value,t=this.subscribers;for(const r of t)r.callback(e,r)}toPromise(){return new Promise(e=>{this.subscribe((t,r)=>{r.unsubscribe(),e(t)})})}toCallback(e){const t=this.subscribe((r,s)=>{const i=s==null?void 0:s.unsubscribe;i?i():setTimeout(()=>{t.unsubscribe()},0),e(r)});return t}pipe(...e){const t=[];"value"in this&&t.push(this.value);const r=new tr(...t);return r.setMethods(e),r.subscribeWith=s=>this.subscribe(s),r.next=s=>this.next(s),r}setMethods(e){this.methods=e}static all(e){const t=e.map(r=>Zy(r)?r:new tr(r,i=>(i.next(r),i)));return o_(t)}};it(tr,"globalSubCount$",new tr(0));let ne=tr;const u_=new ne(void 0,function(e){bi()||e.next()}),de={stateConfig:{state:[],version:Date.now(),handlers:{handler:qd,statesHandler:Bd}},tagClosed$:u_};function h_(n,e){const r=n.templater.tag.values;for(const s of e)d_(r,s,n);return e}function d_(n,e,t){if(e.deleted)return;const r=e.tagJsVar;Be(e),r.processUpdate("",e,t,n),Pe()}function zd(n,e){if(!n)return;const r=n.context.contexts;f_(n,e),++he.locks,h_(n,r),--he.locks,Xe()}function f_(n,e){const t=e.templater,r=e.templater.tag,s=t.values||r.values,i=n.templater.tag;i.values=s}function p_(n,e){return ka(n,e)}function ka(n,e){if(n===null||typeof n!==oe.object||e<0)return n;if(n instanceof Date)return new Date(n);if(n instanceof RegExp)return new RegExp(n);const t=Ye(n)?[]:Object.create(Object.getPrototypeOf(n));if(Ye(n))for(let r=0;r<n.length;r++)t[r]=ka(n[r],e-1);else for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=ka(n[r],e-1));return t}function g_(n,e,t){return uc(n,e,t)}function uc(n,e,t){return n===e||__(n,e)||t<0?!0:typeof n===oe.object&&typeof e===oe.object?n instanceof Date&&e instanceof Date?n.getTime()===e.getTime():Ye(n)&&Ye(e)?y_(n,e,t-1):Ye(n)||Ye(e)?!1:m_(n,e,t-1):!1}function m_(n,e,t){const r=Object.keys(n),s=Object.keys(e);if(r.length===0&&s.length===0)return!0;if(r.length!==s.length)return!1;for(const i of r)if(!s.includes(i)||!uc(n[i],e[i],t-1))return!1;return!0}function y_(n,e,t){if(n.length!==e.length)return!1;for(let r=0;r<n.length;r++)if(!uc(n[r],e[r],t-1))return!1;return!0}function __(n,e){return xn(n)&&xn(e)&&n.toString()===e.toString()}function Du(n){return n.map(hc)}function hc(n,e){const t=n,r=n==null?void 0:n.tagJsType;if(r)switch(r){case ie.signal:case ie.subscribe:case ie.stateRender:return;case ie.dom:case ie.tag:case ie.templater:return Du(t.values)}return Ye(n)?Du(t):p_(n,e)}function w_(n,e){const t=n.length;for(let r=0;r<t;++r){const s=n[r],i=e[r];if(Ye(s)&&Ye(i)){if(s===i)continue;return 3}if(!(typeof s===oe.function&&typeof i===oe.function)){if(typeof s===oe.object){if(!s&&!i)continue;if(typeof e===oe.object){const o=Object.entries(s);for(const c of o)if(!b_(c,i))return 3.1}continue}if(s!==i)return 3.3}}return!1}function b_([n,e],t){const r=t[n];return typeof e===oe.function&&typeof r===oe.function?!0:r===e}function dc(n,e,t){return n}function T_(n){return typeof n!==oe.object||!n||n.tagJsType}function E_(n,e,t,r,s,i){var c;const o=Object.keys(n);for(const l of o){const h=n[l],f=e[l],p=fc(f,h,t,r,i,s+1);h===p||(c=Object.getOwnPropertyDescriptor(n,l))!=null&&c.set||(n[l]=p)}return n}function v_(n,e,t,r,s,i){for(let o=n.length-1;o>=0;--o){const c=n[o],l=e[o];n[o]=fc(l,c,t,r,i,s+1)}return n}function fc(n,e,t,r,s,i){return n==null||i>s?e:typeof n===oe.function?e.mem?(n.mem=e.mem,e):(n.mem=e,n):T_(e)?e:Ye(e)?v_(e,n,t,r,i,s):E_(e,n,t,r,i,s)}function I_(n,e,t,r,s,i=-1){const o=e.context;if(!o.global||!o.state.newest){const y=dc(r);r.push(...y);const R=n.propsConfig;return R.castProps=y,r}e=o.state.newest||e;const f=e.propsConfig.castProps,p=[];for(let y=0;y<r.length;++y){const R=r[y],x=f[y],N=fc(x,R,n,t,s,i+1);p.push(N)}const m=n.propsConfig;return m.castProps=p,p}function A_(n,e){const t=n.context,r=t.global;let s=-1;const i=t.providers=t.providers||[],o=i.length-1;for(;s++<o;){const c=i[s];let l=-1;const h=c.children.length-1;for(;l++<h;){const f=c.children[l];if(r===f.context.global){c.children.splice(l,1),c.children.push(e);return}}}}function Gd(n,e){const t=n.context.providers;if(t)for(const r of t)for(let s=r.children.length-1;s>=0;--s)r.children[s].context.global===e&&r.children.splice(s,1);n.context.destroy$.next(),n.context.renderCount=0}function Pa(n,e){for(const t of n){const r=t.lastArray;if(r){Pa(r,e);continue}const s=t.value;if((s==null?void 0:s.tagJsType)===ie.subscribe){s.destroy(t,e),t.deleted=!0;continue}const i=t.global;if(!i)continue;const o=t.state.newest,c=i.subscriptions;c&&c.forEach(Jd),bs(o.templater)&&Gd(o,i);const l=t.contexts;Pa(l,o),i.deleted=!0}}function Wd(n,e=[],t=[]){for(const r of n){const s=r.global;if(!s)continue;const i=r.state.newest;if(i){e.push(i);const c=s.subscriptions;c&&t.push(...c)}const o=r.contexts;o&&Wd(o,e,t)}return{tags:e,subs:t}}function Jd(n){n.unsubscribe()}function Ts(n,e){const t=n.context;e.deleted=!0,t.renderCount=0;const r=[],s=t.contexts;return Pa(s,n),n.templater.wrapper&&Gd(n,e),gc(t,r),delete t.state,delete t.contexts,delete t.returnValue,delete t.providers,r}function C_(n,e,t,r,s){const i=e==null?void 0:e.arrayValue;let c=n!==(i||s);return c===!1&&i===void 0&&t.tagJsVar.hasValueChanged(e,t,void 0)&&(c=!0),c?(pc(t),r.splice(s,1),2):0}function pc(n){const e=n.global;R_(e,n)}function R_(n,e){var t;if(n&&((t=e.state)!=null&&t.oldest)){const r=e.state.oldest;Ts(r,n);return}e.tagJsVar.destroy(e,{})}function Kd(n){++n.updateCount;const e=n.lastArray;e&&Qd(n,e)}function Qd(n,e){for(let t=0;t<e.length;++t)pc(e[t]);delete n.lastArray}function os(n){for(let e=n.length-1;e>=0;--e){const t=n[e];S_(t),n.splice(e,1)}}function S_(n){const e=n.marker;e&&is(e,"destroyMarker");const t=n.domElement;is(t,"destroyClone")}function gc(n,e){n.contexts&&k_(n.contexts,e),n.htmlDomMeta&&os(n.htmlDomMeta)}function k_(n,e){var t;for(const r of n){if(r.withinOwnerElement){const l=r.tagJsVar;if(l&&l.tagJsType==="host"){const h=r.supportOwner,f=l.destroy(r,h);Mn(f)&&e.push(f)}continue}const s=r.lastArray;if(s){Qd(r,s);continue}const i=r.simpleValueElm;if(i){delete r.simpleValueElm,is(i,"smartRemoveByContext");continue}const o=r.global;if(o===void 0)continue;if(o.deleted=!0,(t=r.state)==null?void 0:t.oldest){gc(r,e);continue}}}function xa(n){const e=n.context,t=e.global,r=e.contexts;if(r){const{subs:s,tags:i}=Wd(r);for(const c of i){if(c.context.global.deleted===!0)return;Nu(c.context)}t.subscriptions&&s.forEach(Jd)}Nu(e),_s(e)}function Nu(n){n.global.deleted=!0,gc(n,[]),delete n.contexts}function Yd(n,e,t,r){const s=e.original,i=n.tagJsType===ie.stateRender,o=de.stateConfig;Wi(t);let c;if(i?c=n():(c=s(...r),typeof c===oe.function&&c.tagJsType===void 0&&(c=c())),!c)throw new Error(`A tag cannot return a value of type ${c===null?"null":typeof c}`);const l=t.context;return l.returnValue=c,t.returnValue=c,n.tag=c,l.state.newer={...o},Pe(),t}function P_(n,e){const t=n.context;++t.renderCount,x_(n.context),de.tagClosed$.next(e)}function x_(n){V_(n),D_()}function V_(n){const e=de.stateConfig,t=n||e.context;t.state=t.state||{},t.state.newer={...e};const r=e.support;t.state.newest=r}function D_(){const n=de.stateConfig;delete n.prevSupport,delete n.support,delete n.state,delete n.states,Pe()}function Xd(n,e,t,r){let s;const i=n.templater;if(i.tagJsType===ie.stateRender){const o=i;s=so(i,t,r,n.appSupport),Yd(i,o,s)}else{const o=i.wrapper;s=o(n,t,e)}return P_(s,r),s.ownerSupport=n.ownerSupport,s}function N_(n){const e=de.stateConfig;return e.rearray=n,e.state=[],e.states=[],e.statesIndex=0,e.handlers.handler=i_,e.handlers.statesHandler=t_,e}function O_(n,e,t){N_(t);const r=de.stateConfig;r.prevSupport=e,Wi(n)}function L_(n,e,t,r){const i=t.state.older.state;return O_(n,e,i),Xd(n,e,t,r)}function Zd(n,e,t,r){Hd(n.context),Wi(n);const s=Xd(n,e,t,r);return Pe(),s}function M_(n){var r;const e=n==null?void 0:n.context,t=e==null?void 0:e.state;return(r=t==null?void 0:t.older)==null?void 0:r.state}function mc(n,e){var r;const t=Ou(n,e);return!t&&((r=e.templater.tag)!=null&&r._innerHTML)&&Ou(n.outerHTML,e)?!0:t}function Ou(n,e){const t=n.templater,r=e.templater,s=(t==null?void 0:t.tag)||n,i=r.tag;if((t==null?void 0:t.tagJsType)===ie.stateRender)return t.dom===r.dom;if(!i&&!s.returnValue)return!0;if(!s.returnValue)return!1;throw new Error(`unknown tagJsType of ${s.tagJsType}`)}function F_(n,e,t){let r;M_(e)?r=L_(n,e,t):r=Zd(n,e,t);const i=!e||mc(e,r);if(i){if(e){const o=e.templater.tag;if(o&&t.renderCount>0){const c=e==null?void 0:e.templater,l=c==null?void 0:c.tag;U_(o,e,l)}}}else{A_(e,r),xa(e);const o=r.context;o.state.oldest=r,o.state.newest=r}return r.ownerSupport=n.ownerSupport,{support:r,wasLikeTags:i}}function U_(n,e,t){if(n.tagJsType===ie.dom){const r=t==null?void 0:t.dom,s=n.dom;r!==s&&xa(e);return}if(t){const r=t.strings;if(r){const s=r==null?void 0:r.length,i=n.strings.length;s!==i&&xa(e)}}}function j_(n,e,t){const r=F_(e,n,t);if(r.wasLikeTags){const s=t.state.oldest;return zd(s,r.support),r.support}}function B_(n){const e=n.context;return j_(n,n,e)}function Te(n){if(!n)return je;const e=lt();if(!e)throw new Error("output must be used in render sync with a parent context");const t=lc(e);if(!t)throw new Error("output must be used in render sync fashion");if(n.wrapped===!0)return n;const r=(...s)=>{const i=t.ownerSupport;return H_(s,n,i.context)};return r.wrapped=!0,r}function H_(n,e,t){Be(t);const r=e(...n);return q_(r,t)}function q_(n,e){Pe();const r=()=>{const s=e.global;if(s===void 0||s.deleted===!0){++he.locks;const o=e;o.tagJsVar.processUpdate(o.value,o,void 0,[]),--he.locks,Xe();return}++he.locks,B_(void 0),--he.locks,Xe()};return Mn(n)&&n.then(()=>{nn.push([r,[]])}),nn.push([r,[]]),n}function $_(n,e){++n.updateCount;const t=n.subContext,r=ef(t,e);return delete n.subContext,r}function ef(n,e){n.deleted=!0;const t=n.appendMarker;if(t&&(is(t,"deleteSubContext"),delete n.appendMarker),!n.hasEmitted)return;const r=n.contextItem;return r.tagJsVar.destroy(r,e),76}function z_(n,e,t,r){const s=e.tagJsType;if(!e||!s||s!==n)return r.tagJsVar.destroy(r,t),vs(e,r,t,99),99}function G_(n,e,t){const r=e.subContext,s=z_(ie.subscribe,n,t,e);return s||(!r||!r.hasEmitted||(r.tagJsVar=n,r.valuesHandler(r.lastValues,0)),0)}function W_(n,e,t,r,s){const i=e.context;if(i.locked=3,t.target=t.target||r,Be(t),t.inputsHandler){const o=e.propsConfig;t.inputsHandler(o)}t.tagJsVar.processInit(n,t,e,s,r),Pe(),t.value=n,delete i.locked}function Yi(n){switch(n){case void 0:case!1:case null:return ws}return n}function J_(n,e){const t=Yi(n);if(e.paint){e.paint[1][1]=t;return}const r=e.simpleValueElm;ft.push([zy,[t,r]])}function K_(n,e){e.value=n,e.oldTagJsVar=e.tagJsVar,e.tagJsVar=sf(n);const t=e.placeholder,r=Yi(n),s=e.paint=[Ud,[t,r,function(o){e.simpleValueElm=o,delete e.paint},"processNowRegularValue"]];ct.push(s)}function Xi(n,e){if(n.startsWith("class."))return"class";if(n.startsWith("style."))return"style";const t=Q_(n);return t!==!1?t:n==="value"&&e==="SELECT"?"value":!1}function Q_(n){switch(n){case"autoselect":case"autoSelect":return"autoselect";case"autofocus":case"autoFocus":return"autofocus"}return!1}function Y_(n,e,t){typeof n[e]!="object"&&(n[e]={});for(const r in t){const s=t[r];ft.push([t0,[n,e,r,s]])}if(n[e].setProperty)for(const r in t){const s=t[r];ft.push([e0,[n,e,r,s]])}}function X_(n,e,t){n.setAttribute(e,"")}function Nt(n,e,t){if(Ki(t))return Y_(n,e,t);tf(n,e,t)}function Z_(n,e,t){t?n[e]=!0:n[e]=!1}function tf(n,e,t){if(n[e]=t,t===void 0||t===!1||t===null){n.removeAttribute(e);return}n.setAttribute(e,t)}function e0(n,e,t,r){n[e].setProperty(t,r)}function t0(n,e,t,r){n[e][t]=r}function nf(n,e,t,r){switch(r){case"autofocus":nn.push([a0,[t]]);return;case"autoselect":nn.push([o0,[t]]);return;case"style":{const s=n.split(".");ft.push([n0,[t,s,e]]);return}case"class":r0(n,e,t);return;case"value":Nt(t,n,e),nn.push([s=>{s.value=e},[t]]);return}throw new Error(`Invalid special attribute of ${r}. ${n}`)}function n0(n,e,t){const r=e[1];n.style[r]=t,n.style.setProperty(r,t)}function r0(n,e,t){const r=n.split(".");if(r.shift(),e){for(const s of r)ft.push([s0,[t,s]]);return}for(const s of r)ft.push([i0,[t,s]])}function s0(n,e){n.classList.add(e)}function i0(n,e){n.classList.remove(e)}function o0(n){n.select()}function a0(n){n.focus()}function c0(n,e,t,r,s){const i=n(),o={component:!1,tagJsType:"dynamic-attr",matchesInjection:h=>{const f=c.tagJsVar;if(f.matchesInjection)return f.matchesInjection(h,c)},hasValueChanged:(h,f,p)=>{const m=n();return c.tagJsVar.hasValueChanged(m,c,p)},processInit:je,processInitAttribute:je,destroy:(h,f)=>{c.tagJsVar.destroy(c,f)},processUpdate:(h,f,p,m)=>{++f.updateCount;const y=h();c.tagJsVar.processUpdate(y,c,p,m),c.value=y}},c={description:"sub-context",updateCount:0,isAttr:!0,target:r,parentContext:e,value:i,tagJsVar:_n(i),withinOwnerElement:!0,destroy$:new ne,render$:new ne},l={description:"override-context",updateCount:0,isAttr:!0,contexts:[c],target:r,parentContext:e,value:n,tagJsVar:o,withinOwnerElement:!0,destroy$:new ne,render$:new ne};return c.tagJsVar.processInitAttribute(t,i,r,c.tagJsVar,c,{},s),l}function l0(n,e,t,r,s,i,o){return t.target=r,t.howToSet=s,t.attrName=n,t.isSpecial=o,e!=null&&e.tagJsType?u0(n,e,t,i,r):Zi(n,e,r,s,o,t)}function u0(n,e,t,r,s){e.processInitAttribute(n,e,s,e,t,r,Nt),t.tagJsVar=e}function Zi(n,e,t,r,s,i){if(typeof e=="function")return c0(e,i,n,t,r);if(s)return nf(n,e,t,s);r(t,n,e)}function rf(n,e,t,r,s,i){const o=e.tagJsVar,c=n;if(o.hasValueChanged(c,e,t)>0){o.destroy(e,t),r.removeAttribute(s);const h=_n(n);h.isAttr=!0,h.processInitAttribute(s,n,r,h,e,t,i),e.tagJsVar=h;return}}function h0(n,e,t,r,s,i,o){r.destroy=d0,r.hasValueChanged=g0,r.processUpdate=(l,h,f)=>rf(l,h,f,t,n,o);const c=Xi(n,t.tagName);Zi(n,e,t,o,c,s),s.tagJsVar=r}function d0(n){const e=n.target,t=n.attrName;e.removeAttribute(t)}function sf(n){return{component:!1,tagJsType:"simple",value:n,processInitAttribute:h0,processInit:p0,destroy:of,hasValueChanged:m0,processUpdate:f0}}function f0(n,e,t){return n===e.value?0:_c(e,n,t)}function p0(n,e,t,r,s){const i=Yi(n);r=e.placeholder;const o=e.paint=[Ud,[r,i,function(l){e.simpleValueElm=l,delete e.paint},"processSimpleValueInit"]];ct.push(o)}function of(n){const e=n.simpleValueElm;if(!e){if(n.paint){n.paint[0]=je;return}if(n.value===void 0||n.value===!1||n.value===null)return}delete n.simpleValueElm,is(e,"deleteSimpleValue")}function g0(n,e){return n==null||n===e.value?0:6}function m0(n,e){return n==null||![oe.object,oe.function].includes(typeof n)?(J_(n,e),0):(of(e),6)}function y0(n,e){return Ye(n)?0:9}function Fn(n,e,t){const r=e.tagJsVar.processUpdate(n,e,t,[]);return e.value=n,r||0}const Lu=Symbol("not-casted"),_0=[];function Ti(n,e,t,r){const s=n.lastArray===void 0;s&&(n.lastArray=[]);const i=n.lastArray;let o=n.placeholder;const c=e.length,l=new Array(c).fill(Lu),h=function(y){const R=l[y];if(R!==Lu)return R;const x=I0(e[y]);return l[y]=x,x};let f=s?!1:c!==i.length;s||(f=w0(i,e,n,f,h).batchUpdates);const p=n.lastArray;for(let m=0;m<c;++m)o=b0(m,p,t,f,h,o,r).placeholder}function w0(n,e,t,r,s){const i=[];let o=0;const c=e.length-1;for(let l=0;l<n.length;++l){const h=n[l];if(h.locked===1&&(r=!0),h.value===null){i.push(h);continue}const f=E0(l,n,o,c,s);if(f===0){i.push(h);continue}if(f===2){l=l-1;continue}o=o+f}return t.lastArray=i,{batchUpdates:r}}function b0(n,e,t,r,s,i,o){const c=s(n),l=e[n];if(l)return T0(c,l,t,r);const h=cf(c,t,e,i,o);return e.push(h),c&&(h.arrayValue=c.arrayValue||h.arrayValue),h}function T0(n,e,t,r,s,i){return r?($y(e,[v0,[n,e,t]]),e.value=n,e):Array.isArray(n)?(e.tagJsVar.processUpdate(n,e,t,_0),e.value=n,e):(Fn(n,e,t),e)}function E0(n,e,t,r,s){const i=n-t,o=i<0||r<i,c=e[n];if(o)return pc(c),1;c.arrayValue===void 0&&(c.arrayValue=n);const l=c.arrayValue,h=s(n);return C_(l,h,c,e,n)}function v0(n,e,t){Fn(n,e,t)}function I0(n){if(typeof n!="function")return n;const e=n;return e.tagJsType!==void 0?n:e()}function af(n){return{component:!1,tagJsType:"array",value:n,processInitAttribute:je,processInit:C0,processUpdate:A0,hasValueChanged:y0,destroy:Kd}}function A0(n,e,t){++e.updateCount;const s=e.tagJsVar.hasValueChanged(n,e,t);return s?(Kd(e),vs(n,e,t,s),s):Array.isArray(n)||Fn(n,e,t)===0?(Ti(e,n,t),0):1}function C0(n,e,t,r,s){Ti(e,n,t,s)}function _n(n){return(n==null?void 0:n.tagJsType)?n:R0(n)}function R0(n){return Ye(n)?af(n):sf(n)}function eo(n,e,t,r,s){return{description:"getNewContext",updateCount:0,value:n,destroy$:new ne,render$:new ne,tagJsVar:s||_n(n),withinOwnerElement:t,parentContext:r}}function cf(n,e,t,r,s){const i=document.createTextNode(ws),o=eo(n,t,!0,e.context);return o.withinOwnerElement=!1,o.placeholder=i,s||(o.placeholder=r),W_(n,e,o,s,r),s&&Ji.push([cc,[s,i]]),o}function lf(n,e,t,r){return e.hasEmitted=!0,e.contextItem=cf(n,t,[],r)}function uf(n,e,t){var o;++e.updateCount;const s=n.owner._innerHTML;s.processInit=s.oldProcessInit;const i=(o=e.subContext)==null?void 0:o.contextItem;_c(i,s,t)}function S0(n,e,t,r,s){e.subContext={},n.processUpdate=uf,k0(n,t,e,r,s)}function k0(n,e,t,r,s){const{appendMarker:i,insertBefore:o}=Rf(s,r),c=t.subContext;c.appendMarker=i;const h=n.owner._innerHTML;h.processInit=h.oldProcessInit,lf(h,c,e,o)}function hf(){return{component:!1,tagJsType:"innerHTML",hasValueChanged:()=>0,processInitAttribute:je,processInit:S0,processUpdate:uf,destroy:$_}}function to(n){++n.updateCount;const e=n.global,r=n.state.newest;delete n.inputsHandler,delete n.updatesHandler,Ts(r,e),P0(n)}function P0(n){n.htmlDomMeta=[],delete n.contexts,delete n.state,delete n.global,n.renderCount=0}function x0(n,e){var o;const t=(o=e.state)==null?void 0:o.newest,r=jd(n),s=n;if(r)return mc(s,t)?0:7;if(n==null?void 0:n.tagJsType){const c=e.value;if(!c&&n)return 88;const l=c.wrapper,h=n.wrapper;return(h==null?void 0:h.original)===(l==null?void 0:l.original)?0:88}return 8}function no(n,e){var c;const t=e.global,r=(c=e.state)==null?void 0:c.newest,s=jd(n),i=n;if(s)return mc(i,r)?(Va(e,n,r),0):(Ts(r,t),_s(e),7);if(n==null?void 0:n.tagJsType){const f=e.state.newest.ownerSupport;return Va(e,n,f)===!0?0:88}return to(e),8}function V0(n,e){const t={component:!1,tagJsType:ie.templater,processInit:"",processInitAttribute:je,processUpdate:Fn,hasValueChanged:no,destroy:to,propWatch:n,props:e,key:function(s){return t.arrayValue=s,t},matchesInjection(r,s){var i;if(t.wrapper===r||((i=t.wrapper)==null?void 0:i.original)===(r==null?void 0:r.original))return s}};return t}const as=[];function D0(n,e){return function(s,i,o){const c=df(n,s,o),l=s.ownerSupport,h=so(n,i,l,s.appSupport,c);return Yd(n,e,h,c)}}function df(n,e,t){const r=n.propWatch===pt.DEEP?yc:If,s=n.props,i=e.propsConfig;let o=i.castProps;const c=t==null?void 0:t.propsConfig,l=c==null?void 0:c.castProps;return l&&(i.castProps=l,o=I_(e,t,t.ownerSupport,s,r)),o||dc(s)}function N0(n,e,t,r,s){const i=mw(n,e,t,r,s);return i.hasEmitted||ff(n,i),i}function ff(n,e){const r=n.Observables[0];if(!e.hasEmitted){if("withDefault"in n){e.subValueHandler(n.withDefault,0);return}if("value"in r){e.subValueHandler(r.value,0);return}return}const s=e.lastValues[0].value;e.subValueHandler(s,0)}function O0(n,e,t,r,s,i){e.destroy=kf;const o=Xi(n,t.tagName),c=function(f,p){Zi(n,f,t,Nt,o,s),Da(p)},l=Sf(e.Observables,i,c,e,s);return s.subContext=l,s.value=e,s.tagJsVar=e,e.processUpdate=function(f,p,m){return rf(f,s,m,t,n,Nt)},{subContext:l,onOutput:c}}function L0(n,e,t,r,s,i){const{subContext:o}=O0(n,e,t,e,s,i);o.hasEmitted||M0(e,o)}function M0(n,e){var o;const r=e.tagJsVar.onOutput;let i=((o=n.Observables[0])==null?void 0:o.value)||n.withDefault;n.callback&&(i=n.callback(i)),r(i,!0,e)}function pf(n,e,t){return{component:!1,onOutput:je,tagJsType:ie.subscribe,processInitAttribute:L0,processInit:N0,hasValueChanged:F0,processUpdate:je,destroy:yw,callback:t,withDefault:e,Observables:[n]}}function F0(n,e){if(!(n!=null&&n.tagJsType))return 1;const t=n.Observables;if(!t)return 2;const s=e.value.Observables;return!s||s.length!==t.length?3:t.every((o,c)=>o===s[c])?0:4}function U0(n,e,t,r){const s={component:!1,tagJsType:"tag-conversion",processInitAttribute:je,processInit:(i,o,c)=>{const l=n.returnValue;return e.tagJsVar.processInit(l,e,t,r.placeholder)},processUpdate:(i,o,c)=>{if(o.locked||o.deleted)return;++o.updateCount;const l=o.value,h=l==null?void 0:l.tagJsType,p=(i==null?void 0:i.tagJsType)!==h;if(x0(i,o)||p||s.hasValueChanged(i,o,t)){s.destroy(o,t),vs(i,o,c,789);return}o.locked=467,o.render$.next();const R=o.returnValue;j0(e,i,o,R,t),delete o.locked},hasValueChanged:(i,o,c)=>{const l=n.returnValue;return e.tagJsVar.hasValueChanged(l,e,c)},destroy:(i,o)=>{++n.updateCount,n.deleted=!0,delete n.returnValue;const c=e.tagJsVar.destroy(e,t);return Mn(c)?c.then(()=>{const l=Mu(n);return Xe(),l}):(n.destroy$.next(),Mu(n))}};return s}function gf(n,e,t){const r=n.context,s=n.returnValue,i=_n(s);delete r.global,r.contexts=[];const o={updateCount:0,value:s,tagJsVar:i,destroy$:new ne,render$:new ne,placeholder:r.placeholder,withinOwnerElement:!0,parentContext:r,contexts:r.contexts},c=U0(r,o,n,t);return r.subContext=o,r.tagJsVar=c,i.processInit(s,o,n,t.placeholder),n}function mf(n,e,t){const r=so(n,e,t,t==null?void 0:t.appSupport),s=r.propsConfig;if(s){const o=n.tagJsType!==ie.tagComponent?[]:df(n,r);s.castProps=o}return Zd(r,e.state.newest,e)}function yf(n,e,t){const r=mf(n,e,t);return r.templater.tag?gf(r,r.ownerSupport,e):r}function j0(n,e,t,r,s){const i=dc(e.props),o=n.value;o.props=i;const c=s.propsConfig;if(c&&(c.castProps=i),(e==null?void 0:e.tagJsType)==="tagComponent"){if(n.inputsHandler=t.inputsHandler,n.updatesHandler=t.updatesHandler,t.value=e,t.inputsHandler){Be(t);const l=t.inputsHandler;l(i),Pe()}if(t.updatesHandler){Be(t);const l=t.updatesHandler;l(i),Pe()}}n.tagJsVar.processUpdate(r,n,s,[]),n.value=r}function Mu(n,e){delete n.returnValue,delete n.global,n.contexts=[],n.htmlDomMeta=[],delete n.inputsHandler,delete n.updatesHandler}function B0(n,e,t,r){const s=mf(n,e,t);return gf(s,t,e)}function _f(n,e,t,r,s){return _s(e),s?B0(n,e,t):yf(n,e,t)}function H0(n){var s,i;const e=lt();if(!e)throw new Error("tag.inject can only be called within a tag or host context");let t=e.parentContext;for(;t;){const o=t.contexts;if(o){for(const c of o)if(c.isAttr&&((s=c.tagJsVar)!=null&&s.matchesInjection)){const l=c.tagJsVar.matchesInjection(n,c);if(l!==void 0)return l.returnValue}}if((i=t.tagJsVar)!=null&&i.matchesInjection&&t.tagJsVar.matchesInjection(n,t))return t.returnValue;t=t.parentContext}const r=`Could not find parent context for tag.inject ${n}`;throw console.error(r,{targetItem:n,context:e}),new Error(r)}function q0(n,e){return $0(n,e)}function $0(n,e,t=[]){const r=n.context;t.push({support:n,renderCount:r.renderCount,provider:e});const s=e.children;for(let i=s.length-1;i>=0;--i){const o=s[i],c=o.context;t.push({support:o,renderCount:c.renderCount,provider:e})}return t}function z0(n){const t=n.context.providers;if(!t)return[];const r=[];for(const s of t){const i=s.owner,o=q0(i,s);r.push(...o.map(G0))}return r}function G0(n){return n.support}function W0(n){return ie.templater===n.tagJsType}function J0(n,e){const t=e.context.global;return t&&t.deleted?!1:!!K0(n,e)}function K0(n,e){const t=n.props,s=e.propsConfig.latest;if(Q0(t,s))return!0;switch(n.propWatch){case pt.IMMUTABLE:return lw(t,s);case pt.SHALLOW:return w_(t,s)}return!g_(t,s,yc)}function Q0(n,e){const t=n.length,r=e.length;return t!==r}function Ei(n,e=[]){const t=n.context,r=n.templater,s=W0(r),i=n.ownerSupport;if(t.locked)return e.push(n),e;if(s)return Ei(i,e);const o=n.context.global;if(o&&o.deleted===!0)return e;const c=n,l=bs(c.templater),h=n.templater.tagJsType,p=i&&h!==ie.stateRender&&(!l||J0(c.templater,c));if(c.context.providers){const y=z0(c);e.push(...y)}return p?(Ei(i,e),l&&e.push(c),e):(e.push(c),e)}const Y0=[];function wf(n){++he.locks;for(let e=0;e<n.length;++e)bf(n[e]);--he.locks,Xe()}function X0(n){++he.locks,bf(n),--he.locks,Xe()}function bf(n){const e=n.context;e.tagJsVar.processUpdate(e.value,e,n.ownerSupport,Y0)}function Tf(n,e,{resolvePromise:t,resolveValue:r}){return Mn(n)?n.then(Z0(e,t)):r(n)}function Z0(n,e){return t=>{const r=n.context,s=r.global;if(r.deleted===!0||(s==null?void 0:s.deleted)===!0)return e(t);const i=Ei(n);return wf(i),e(t)}}function nt(n){return de.stateConfig.handlers.handler(n)}function ew(n){return nt(()=>{var r;const e=n(),t=bi();return(r=t==null?void 0:t.context)!=null&&r.global?Tf(e,t,{resolvePromise:tw,resolveValue:nw}):e}),F}function tw(n){return n}function nw(n){return n}function ro(n){return nt(function(){lt().destroy$.toCallback(n)}),F}function rw(n,e,t,...r){const s=t(...r),i=lc(n);if(!i)return s;if(!i.context.global){const o=i.context;o.tagJsVar.processUpdate(o.value,o,i.ownerSupport,[])}return Mn(s)&&s.finally(()=>{if(!n.global){const o=i.context;o.tagJsVar.processUpdate(o.value,o,i.ownerSupport,[])}}),s}function Ae(n){const e=lt(),t=nt({callback:n}),r=nt(()=>Ef(e,de.stateConfig,t));return t.callback=n,r}function Ef(n,e,t){const r=e.states;return function(...i){const o=rw(n,r,t.callback,...i);return Xe(),o}}function sw(n){const e=lt(),t=i=>{Be(e);const o=n();return Pe(),o},r=e.render$.subscribe(()=>{t()}),s=t();return F.onDestroy(()=>r.unsubscribe()),s}let iw=0;const Xr=vf("click"),nr=vf("mousedown");function vf(n){return function(t){const r=Ae(t);return nt(()=>{xf().addEventListener(n,r)}),r}}const ow={get:xf,onclick:Xr,click:Xr,onClick:Xr,mousedown:nr,onmousedown:nr,onMouseDown:nr};Es("onclick",Xr);Es("click",Xr);Es("onMouseDown",nr);Es("onmousedown",nr);Es("mousedown",nr);function Es(n,e){Object.defineProperty(F,n,{get(){return e},set(t){return e(t)}})}var pt;(function(n){n.DEEP="deep",n.SHALLOW="shallow",n.NONE="none",n.IMMUTABLE="immutable"})(pt||(pt={}));function F(n,e=pt.SHALLOW){if(lt())throw new Error("A TaggedJs tag was created within a running tag. All component tags must be created outside of anyother tag");const r=function(...c){const l=V0(e,c);l.tagJsType=ie.tagComponent,l.processInit=_f,l.hasValueChanged=no;const h=D0(l,r);return h.original=n,l.wrapper=h,l},s=n;r.original=n,s.tags=as,s.setUse=de,s.ValueTypes=ie,s.tagIndex=iw++,as.push(r);const i=r;return i.inputs=o=>{const c=lt();c.inputsHandler=o;const l=c.tagJsVar;return o(l.props),!0},i.updates=o=>{const c=lt();return c.updatesHandler=o,!0},i.getInnerHTML=hf,i}function aw(n){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")}function cw(){throw new Error("Do not call tag.use as a function but instead set it as: `(props) => tag.use = (use) => html`` `")}F.element=ow;F.use=cw;F.deepPropWatch=F;F.route=aw;F.inject=H0;F.output=Te;F.onInit=ew;F.onDestroy=ro;F.callback=Ae;F.onRender=sw;F.getInnerHTML=hf;F.app=function(n){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")};F.immutableProps=function(e){return F(e,pt.IMMUTABLE)};F.watchProps=function(e){return F(e,pt.SHALLOW)};Object.defineProperty(F,"use",{set(n){n.original={setUse:de,tags:as},n.tagJsType=ie.stateRender,n.processInit=_f,n.processUpdate=Fn,n.hasValueChanged=no,n.destroy=to}});Object.defineProperty(F,"promise",{set(n){Tw(n)}});function lw(n,e){const t=n.length;for(let r=0;r<t;++r){const s=n[r],i=e[r];if(s!==i)return 2}return!1}const If=3,yc=10;function uw(n,e,t){const r=n.templater;if(r.tagJsType!==ie.stateRender){switch(r.propWatch){case pt.IMMUTABLE:return n.propsConfig={latest:e,castProps:t};case pt.SHALLOW:return n.propsConfig={latest:e.map(hw),castProps:t}}return n.propsConfig={latest:e.map(dw),castProps:t}}}function hw(n){return hc(n,If)}function dw(n){return hc(n,yc)}function Af(n,e,t){const r={templater:n,context:e,castedProps:t,appSupport:void 0},s=e.global;return s.blocked=[],e.state||(e.state={newer:{state:[],states:[]}}),r}function Cf(n,e,t,r){e.appSupport=t||e;const s=n.props;return s&&(e.propsConfig=uw(e,s,r)),e}function so(n,e,t,r,s){const i=Af(n,e,s);return i.ownerSupport=t||i,i.ownerSupport.appSupport=r||i.ownerSupport,Cf(n,i,r,s)}function fw(n,e,t,r){let s=t.templater||t;const i=n.templater.tag;i&&i._innerHTML&&(s=t._innerHTML);const o=so(s,e,r,r.appSupport),l=n.context.state.oldest;zd(l,o)}function Va(n,e,t){if(bs(e))return n.global===void 0&&_s(n),n.oldTagJsVar=n.tagJsVar,n.tagJsVar=e,pw(e,n,t),!0;if(n.global){n.oldTagJsVar=n.tagJsVar,n.tagJsVar=e;const i=n.state.newest;if(i)return typeof e===oe.function||fw(i,n,e,t),!0}if(n.inputsHandler){const i=t.propsConfig;n.inputsHandler(i)}return e.processInit(e,n,t,n.placeholder),n.oldTagJsVar=n.tagJsVar,n.tagJsVar=e,!0}function pw(n,e,t){if(!e.state.newest){if(e.inputsHandler){const r=t.propsConfig;e.inputsHandler(r)}n.processInit(n,e,t,e.placeholder);return}}function vs(n,e,t,r){const s=n&&n.tagJsType;if(delete e.deleted,s){Va(e,n,t);return}if(Ye(n)){Ti(e,n,t),e.oldTagJsVar=e.tagJsVar,e.tagJsVar=af(n);return}if(typeof n===oe.function){e.value=n;return}r&&K_(n,e)}function _c(n,e,t){const s=n.tagJsVar.hasValueChanged(e,n,t);return s===0||vs(e,n,t,s),s}function Rf(n,e){let t;return n&&(t=e=document.createTextNode(ws),Ji.push([cc,[n,e]])),{appendMarker:t,insertBefore:e}}function gw(n,e,t){const r=G_(n,e,t);if(e.hasEmitted!==!0){const s=e.value.Observables;if(!s||!("value"in s[0]))return}if(r===0&&n.callback){const s=e.subContext;ff(n,s)}}function mw(n,e,t,r,s){const i=n.Observables,{appendMarker:o,insertBefore:c}=Rf(s,r);let l=function(p,m,y){lf(p,y,t,c),Da(m),l=y.tagJsVar.onOutput=function(x,N,D){const V=D.contextItem;_c(V,x,t),V.tagJsVar.processUpdate(x,V,t,[x]),V.value=x,Da(N)}};const h=Sf(i,t,(f,p,m)=>l(f,p,m),n,e);return h.appendMarker=o,e.subContext=h,n.processUpdate=gw,n.onOutput=l,h}function Sf(n,e,t,r,s){function i(h,f){var p;l.lastValues[f]={value:h,tagJsVar:_n(h),oldTagJsVar:(p=l.lastValues[f])==null?void 0:p.tagJsVar},o(l.lastValues,f)}function o(h,f){const p=l.tagJsVar;if(p==null?void 0:p.callback){Be(s);const R=p.callback(...h.map(x=>x.value));t(R,c,l),Pe();return}const y=h[f].value;t(y,c,l)}let c=!0;const l={lastValues:[],subValueHandler:i,valuesHandler:o,tagJsVar:r,subscriptions:[]};return n.forEach((h,f)=>{c=!0,l.subscriptions.push(h.subscribe(p=>i(p,f))),c=!1}),r.onOutput=t,l}function kf(n){const e=n.subContext;if(!e)return;e.subscriptions.forEach(r=>r.unsubscribe()),delete n.subContext}function yw(n,e){++n.updateCount;const t=n.subContext;return kf(n),ef(t,e)}function Da(n){n||de.stateConfig.support||Xe()}class wr extends ne{constructor(t){super(t);it(this,"value");this.value=t}subscribe(t){const r=super.subscribe(t);return t(this.value,r),r}}const Pf=((n,e)=>wc(n,e).pastResult),_w=n=>n;function ww(n){const e=(t,r)=>wc(t,r,n).pastResult;return e.setup=n,bc(()=>e,e),e}const wc=(n,e,{init:t,before:r,final:s=_w}={})=>{const i=nt({pastResult:void 0,values:void 0}),c=typeof n=="function"?n():n,l=i.values===void 0;let h=0;l&&typeof n=="function"&&F.onRender(()=>{if(++h,h===1)return;const p=n();f(p)});function f(p){if(i.values===void 0){if(r&&!r(p))return i.values=p,i;const x=(t||e)(p,i.values);return i.pastResult=s(x),i.values=p,i}if(p.every((R,x)=>R===i.values[x]))return i;if(r&&!r(p))return i.values=p,i;const y=e(p,i.values);return i.pastResult=s(y),i.values.length=0,i.values.push(...p),i}return f(c)};function bc(n,e){return Object.defineProperty(e,"noInit",{get(){const t=n();return t.setup.init=()=>{},t}}),Object.defineProperty(e,"asSubject",{get(){const t=n(),r=nt(()=>bi()),s=nt(()=>new wr(void 0));nt(()=>({state:de.stateConfig.state,states:de.stateConfig.states}));const i=(o,c)=>(wc(o,(h,f)=>{const p=bi(),m=c(h,f);p!==r&&r.context.state.older,s.next(m)},t.setup),s);return i.setup=t.setup,bc(()=>i,i),i}}),Object.defineProperty(e,"truthy",{get(){const t=n();return t.setup.before=r=>r.every(s=>s),t}}),e}bc(()=>ww({}),Pf);class Tc extends Error{constructor(t,r,s={}){super(t);it(this,"details");this.name=Tc.name,this.details={...s,errorCode:r}}}class Ec extends Tc{constructor(e,t){super(e,"sync-callback-error",t),this.name=Ec.name}}new Ec("callback() was called outside of synchronous rendering. Use `callback = callbackMaker()` to create a callback that could be called out of sync with rendering");const bw=()=>{};function Tw(n){const e=lt(),t=nt({callback:bw}),r=nt({current:void 0}),s=nt(()=>Ef(e,de.stateConfig,t));if(r.current!==n){r.current=n;const i=n;n.then(()=>{r.current===i&&s()})}}function lt(){return de.stateConfig.context}function xf(){return lt().target}const ci=[];function Be(n){return ci.push(n),de.stateConfig.context=n}function Pe(){ci.pop(),de.stateConfig.context=ci[ci.length-1]}function Ew(n,e,t,r,s,i,o){const c=document.createTextNode(ws);if(as.push(t.wrapper||{original:t}),i.placeholder=c,e.isApp=!0,!s)throw new Error(`Cannot tagElement, element received is type ${typeof s} and not type Element`);s.destroy=function(){const p=i.events;for(const y in p){const R=p[y];s.removeEventListener(y,R)}i.events={},++he.locks;const m=Ts(f,e);return--he.locks,Xe(),m},++he.locks;const l=document.createDocumentFragment();l.appendChild(c);const f=yf(t,i,{appSupport:{appElement:s,context:i},appElement:s,context:i,isRoot:!0});return f.appElement=s,o&&(r.tag=f.templater.tag),--he.locks,Xe(),s.appendChild(l),{support:f,tags:as,ValueTypes:ie}}function vw(n,e,t){const r=Af(n,e);return Cf(n,r,r),r.appElement=t,r.context=e,e.state.oldest||(e.state.oldest=r,e.state.older=e.state.newer),e.state.newest=r,r}typeof document=="object"&&(document.taggedJs&&console.warn("🏷️🏷️ Multiple versions of taggedjs are loaded. May cause issues."),document.taggedJs=!0);const ra=[],Fu="__taggedjs_tag_element__";function Iw(n,e,t){const r=e[Fu],s=ra.findIndex(m=>m.element===e);if((r||s>=0)&&console.warn("tagElement called multiple times for the same element",{element:e}),s>=0){const m=ra[s].support;Ts(m,m.context.global),ra.splice(s,1)}e[Fu]=!0,e.innerHTML="";let i=(()=>h(t));i.propWatch=pt.NONE,i.tagJsType=ie.stateRender,i.processUpdate=Fn,i.props=[t],i.isApp=!0;const o=Aw(i,e),c=o.global,l=o.state.newest;Hd(l.context),Wi(l);let h=n(t);const f=typeof h==oe.function;f||(bs(h)?(o.state.newest.propsConfig={latest:[t],castProps:[t]},i.propWatch=h.propWatch,i.tagJsType=h.tagJsType,i.wrapper=h.wrapper,i=h):(i.tag=h,h=n));const p=Ew(n,c,i,h,e,o,f);return Pe(),p}function Aw(n,e){const t={component:!1,tagJsType:"templater",hasValueChanged:no,destroy:to,processInitAttribute:je,processInit:function(){console.debug("do nothing app function")},processUpdate:Fn},r={updateCount:0,value:n,varCounter:0,destroy$:new ne,render$:new ne,withinOwnerElement:!1,renderCount:0,global:void 0,state:{},tagJsVar:t};return _s(r),r.events={},vw(n,r,e),r}const Vf=":tagvar",Cw=":";function Rw(n){return Array.isArray(n)&&Object.prototype.hasOwnProperty.call(n,"raw")}function Sw(n,e){return function(r,s,i){if(Rw(s)){const o=[];for(let l=0;l<s.length;++l)o.push(s[l]),l<i.length&&o.push(String(i[l]??""));const c=o.join("");return e(r,[n,c])}return e(r,[n,s])}}const kw=[["alt","alt"],["ariaLabel","aria-label"],["referrerPolicy","referrerpolicy"],["autoFocus","autoFocus"],["border","border"],["id","id"],["for","for"],["fill","fill"],["content","content"],["charset","charset"],["cellPadding","cellpadding"],["cellSpacing","cellspacing"],["class","class"],["href","href"],["lang","lang"],["loading","loading"],["value","value"],["placeholder","placeholder"],["src","src"],["title","title"],["width","width"],["height","height"],["type","type"],["min","min"],["max","max"],["step","step"],["name","name"],["wrap","wrap"],["checked","checked"],["disabled","disabled"],["selected","selected"],["minLength","minLength"],["maxLength","maxLength"],["inputMode","inputMode"],["open","open"],["rel","rel"],["required","required"],["readonly","readonly"],["readOnly","readonly"],["rows","rows"],["style","style"],["target","target"],["viewBox","viewBox"],["valign","valign"]];function Pw(n,e,t){const r=Is(n,n.elementFunctions);return Df(r,e,t)}function Df(n,e,t){function r(s){return r.toCallback(s)}return r.toCallback=t,n.listeners.push([e,r]),n.allListeners.push([e,r]),n}function Nf(n,e){const t=Is(n,n.elementFunctions);return Fw(e[0],e[1],t),t}function xw(n,e){const t=Is(n,n.elementFunctions);for(const r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;const s=e[r];t.attributes.push([r,s]),Lf(t,s),cs(r)?Ii(r,t):cs(s)&&Ii(s,t)}return t}const Vw=Object.fromEntries(kw.map(([n,e])=>[n,Sw(e,Nf)])),Dw=[["onClose","onclose"],["onCancel","oncancel"],["onDoubleClick","ondblclick"],["onClick","click"],["onBlur","onblur"],["onChange","onchange"],["onInput","oninput"],["contextMenu","contextmenu"],["onMouseDown","onmousedown"],["onMouseUp","onmouseup"],["onMouseOver","onmouseover"],["onMouseOut","onmouseout"],["onKeyDown","onkeydown"],["onKeyUp","onkeyup"]];function Of(n,e){return n.attributes.push(e),Lf(n,e[1]),cs(e[0])?Ii(e[0],n):cs(e[1])&&Ii(e[1],n),n}const Nw=(()=>{const n=Object.fromEntries(Dw.map(([r,s])=>[r,function(o){return Pw(this,s,o)}])),e=Object.fromEntries(Object.entries(Vw).map(([r,s])=>[r,Ow(s)])),t=e.id;return e.id=function(...s){const i=s[0];return this.arrayValue=typeof i=="function"?i():i,t.apply(this,s)},{...n,attr:function(...s){return Nf(this,s)},attrs:function(s){return xw(this,s)},key:function(r){return this.arrayValue=r,this},...e}})();function vi(n){return Nw}function Lf(n,e){let t=1;e!=null&&typeof e!="function"&&typeof e.length=="number"&&(t+=e.length),n.contentId+=t}function Ow(n){return(function(t,...r){return n(this,t,r)})}function Lw(n,e,t){if(Ki(t)){for(const r in t){if(!Object.prototype.hasOwnProperty.call(t,r))continue;t[r]?n.classList.add(r):n.classList.remove(r)}return}tf(n,e,t)}function Ii(n,e){e.contexts||(e.contexts=[]),e.contexts.push(n),++e.contentId}function cs(n){return Array.isArray(n)||xn(n)||(n==null?void 0:n.tagJsType)}function Uu(n,e){return(t,r)=>Of(t,[n,r,!1,e])}function me(n){return(e,t)=>Df(e,n,t)}const Mw=Object.fromEntries([["onClick",me("click")],["onDoubleClick",me("ondblclick")],["onDblClick",me("ondblclick")],["onDblClick",me("ondblclick")],["onBlur",me("onblur")],["onChange",me("onchange")],["onCancel",me("oncancel")],["onClose",me("onclose")],["onInput",me("oninput")],["onMousedown",me("onmousedown")],["onMouseDown",me("onmousedown")],["onMouseup",me("onmouseup")],["onMouseUp",me("onmouseup")],["onMouseover",me("onmouseover")],["onMouseOver",me("onmouseup")],["onMouseout",me("onmouseout")],["onMouseOut",me("onmouseout")],["onKeyup",me("onkeyup")],["onKeyUp",me("onkeyup")],["onKeydown",me("onkeydown")],["onKeyDown",me("onkeydown")]]),ju=Object.assign(Object.fromEntries(["checked","disabled","selected"].map(n=>[n,Uu(n,Z_)])),{class:Uu("class",Lw)},Mw);function Fw(n,e,t){return n in ju?ju[n](t,e):Of(t,[n,e,!1,Nt])}function Uw(n){return Mf(n)}function Mf(n){const e=jw(n.attributes),t=Ff(n.innerHTML);return`<${n.tagName}${e}>${t}</${n.tagName}>`}function jw(n){if(!n||n.length===0)return"";const e=[];return n.forEach(t=>{const r=t[0];if(typeof r!="string"||r.length===0)return;const s=jf(t[1]);if(s===!0){e.push(r);return}s===!1||s===void 0||s===null||e.push(`${r}="${Uf(String(s))}"`)}),e.length>0?` ${e.join(" ")}`:""}function Ff(n){return!n||n.length===0?"":n.map(e=>{const t=jf(e);return Bw(t)?Mf(t):Array.isArray(t)?Ff(t):t==null||t===!1?"":Uf(String(t))}).join("")}function Bw(n){return!!n&&typeof n=="object"&&typeof n.tagName=="string"}function Uf(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function jf(n){return typeof n=="function"?n():n}function Bf(n,e){++n.updateCount;const t=n.contexts,r=[];if(n.paintCommands){for(let s=ct.length-1;s>=0;--s){const i=ct[s],o=n.paintCommands.indexOf(i);if(o>=0&&(ct.splice(s,1),n.paintCommands.splice(o,1),n.paintCommands.length===0))break}delete n.paintCommands,sa(n);return}if(t.length&&(Ai(t,e,r),t.length=0,r.length)){const s=n.htmlDomMeta;return n.deleted=!0,Promise.all(r).then(()=>{++he.locks,os(s),sa(n),--he.locks,Xe()})}os(n.htmlDomMeta),sa(n)}function sa(n){n.htmlDomMeta=[],delete n.contexts,n.deleted=!0}function Ai(n,e,t){const r=n[0],s=r.tagJsVar.destroy(r,e);if(r.deleted=!0,Mn(s))return t.push(s.then(()=>{if(n.length>1)return Ai(n.slice(1,n.length),e,t)}));if(r.htmlDomMeta&&(os(r.htmlDomMeta),delete r.htmlDomMeta),n.length>1)return Ai(n.slice(1,n.length),e,t)}function Hf(n,e,t){if(e.deleted===!0)return;if(++e.updateCount,vc(n,e)){Bf(e,t),e.htmlDomMeta=[],delete e.deleted,vs(n,e,t,789);return}const i=e.contexts,o=n.contexts||[],c=e.tagJsVar,l=n,h=c.allListeners,f=l.allListeners;for(let p=0;p<f.length;++p){const m=f[p],y=h[p][1];y.toCallback=m[1].toCallback}if(i.length!==o.length){const p=new Array(i.length);for(let m=0;m<i.length;++m)p[m]=i[m].value;throw console.info("context mismatch",{value:n,context:e,conValues:p,vContexts:o,deleted:e.deleted,contexts:i}),new Error(`Expected ${i.length} contexts but got ${o.length}`)}e.locked=79;for(let p=0;p<i.length;++p){const m=i[p];m.tagJsVar.processUpdate(o[p],m,t)}delete e.locked}function vc(n,e){if(!n)return 1;const t=e.value;if(t===n)return 0;if(n.tagJsType!=="element"||t===null)return 1;const r=n,s=t,i=r.contentId,o=s.contentId;if(i!==o)return 1;const c=r.innerHTML.length,l=s.innerHTML.length;return c!==l?1:0}function qf(n,e,t){const r=t[e];if(r){let i=!1;if(n.originalStopPropagation=n.stopPropagation,n.stopPropagation=function(){i=!0,n.originalStopPropagation.call(n),n.stopPropagation=n.originalStopPropagation,delete n.originalStopPropagation},r(n),n.defaultPrevented||i)return}const s=t.parentNode;s&&qf(n,e,s)}function $f(n,e,t,r){const s=n.appElement,i=Hw(e);e==="blur"&&(e="focusout");const c=n.context.events;if(!c[e]){const l=function(f){qf(f,i,f.target)};c[e]=l,s.addEventListener(e,l)}t[i]=r,t[e]=r}function Hw(n){return n==="blur"&&(n="focusout"),"_"+n}function qw(n,e){const t=e.context.global,r=function(i,o){if(t.deleted!==!0)return $w(r.tagFunction,r.support,i,o)};return r.tagFunction=n,r.support=e,r}function $w(n,e,t,r){const s=Qi(e),i=s.context;i.locked=1;const o=n.apply(t,r);return delete i.locked,zf(o,s)}function zf(n,e){const t=e.context.global;if(t!=null&&t.deleted)return;const r=Ei(e);return wf(r),Tf(n,e,{resolvePromise:Ww,resolveValue:Jw})}const zw="no-data-ever",Gw="promise-no-data-ever";function Ww(){return Gw}function Jw(){return zw}function Gf(n,e,t,r){const s=function(...i){return s.tagFunction(n,i)};s.tagFunction=e,s.support=t,$f(t.appSupport,r,n,s)}function Wf(n){return n==null||n===!1}function Jf(n,e,t,r,s,i,o,c,l){const h=eo(n,[],!0,t);return h.description="tagJsVar-attr",h.target=c,h.isAttr=!0,h.isNameOnly=l,h.stateOwner=Qi(i),h.supportOwner=i,Be(h),r.processInitAttribute(o,n,c,r,h,i,Nt),Pe(),h.oldTagJsVar=h.tagJsVar,h.tagJsVar=r,h}function Kf(n,e,t,r,s,i,o,c){if(Wf(e))return;const l=typeof e;if(l===oe.object){for(const h in e)Bu(h,t,e,n,r,i,o,i);return i}if(l==="function"){const h=Kw(c);c.tagJsVar=h,Be(c);const f=e(c),p=_n(f);if(Pe(),p!=null&&p.tagJsType){c.state={newer:{state:[],states:[]}};const m=Jf(p,i,o,p,-1,r,"attr",t,!0);return m.tagJsVar=p,c.subContext=m,i}return Bu("attr",t,e,n||[],r,i,o,i),i}e.length!==0&&s(t,e,ws)}function Bu(n,e,t,r,s,i,o,c){const l=Xi(n,e.tagName),h=t[n],p=Yf(n,h,r,e,s,Nt,i,o,l);p!==void 0&&(Array.isArray(p)?c.push(...p):c.push(p))}function Kw(n){return{tagJsType:"relay",component:!1,hasValueChanged:(t,r,s)=>r.subContext.tagJsVar.hasValueChanged(t,r.subContext,s),processInitAttribute:(t,r,s,i,o,c,l)=>o.subContext.tagJsVar.processInitAttribute(t,r,s,i,o.subContext,c,l),destroy:(t,r)=>t.subContext.tagJsVar.destroy(t.subContext,r),processUpdate:(t,r,s,i)=>{const o=t(r.subContext);return r.subContext.tagJsVar.processUpdate(o,r.subContext,s,i)},processInit:(t,r,s,i,o)=>r.subContext.tagJsVar.processInit(t,r.subContext,s,i,o),matchesInjection:t=>n.subContext.tagJsVar.matchesInjection(t,n.subContext)}}function Qw(n,e,t,r,s,i,o,c,l){if(t){if(Wf(e)||e===""){r.removeAttribute(t);return}if(typeof t===oe.object)if(typeof e===oe.object)for(const p in t)p in e||ft.push([Hu,[r,p]]);else for(const p in t)ft.push([Hu,[r,p]])}const h=Kf(n,e,r,s,i,o,c,l);h&&o.push(...h)}function Hu(n,e){n.removeAttribute(e)}function Yw(n,e,t,r){const s=e,i=n;if(i!=null&&i.tagJsType){const c=e.value;if(!(c!=null&&c.tagJsType)){i.isAttr=!0,Be(e),i.processInitAttribute(s.attrName,n,s.target,i,s,t,Nt),Pe(),s.tagJsVar=i;return}c.hasValueChanged(i,e,t);return}if(s.isNameOnly){Qw(r,n,s.value,s.target,t,s.howToSet,[],s.parentContext,s),s.value=n;return}const o=s.target;nb(n,s.attrName,s,o,t,s.howToSet,s.isSpecial),e.value=n}const Xw=new RegExp(Vf+"(\\d+)"+Cw,"g");function Qf(n){return n.search&&n.startsWith(Vf)?n.search(Xw):-1}function Zw(n,e,t,r,s,i,o){const c=r.length,l=[];e.forEach(f=>{if(Qf(f)>=0){const m=r.length,y=_n(f),R={description:"attribute-array-item",updateCount:0,isAttr:!0,target:t,attrName:n,withinOwnerElement:!0,tagJsVar:y,parentContext:o,destroy$:new ne,render$:new ne};y.processUpdate=function(D,V,G,ve){++V.updateCount,h(ve)};const x=i[m];R.value=x,l.push(R),++o.varCounter}});function h(f){const p=eb(e,f,c).join("");s(t,n,p)}return h(i),l}function eb(n,e,t){return n.reduce((r,s)=>{if(Qf(s)>=0){const o=t++,c=e[o];return r.push(c),r}return r.push(s),r},[])}function tb(n,e,t,r,s,i,o,c,l){if(typeof e===oe.function)return++s.varCounter,Xf(e,o,n,t);const h=_n(e),f={description:"dynamic-attribute",updateCount:0,isAttr:!0,target:t,attrName:n,howToSet:i,value:e,withinOwnerElement:!0,tagJsVar:h,destroy$:new ne,render$:new ne,parentContext:s};return r.push(f),h.processUpdate=Yw,l0(n,e,f,t,i,o,c),f.value=e,f}function qu(n){return Ki(n)&&"TagJsTag"in n?n.tagJsVar:-1}function Yf(n,e,t,r,s,i,o,c,l){const h=qu(n);let f=h>=0||e===void 0&&typeof n!="string",p=t[h];e!=null&&e.tagJsType?p=e:(n!=null&&n.tagJsType||typeof n=="function")&&(f=!0,p=n,e=n);const m=p;if(m!=null&&m.tagJsType)return Jf(e,o,c,m,h,s,n,r,f);if(f){h===-1&&f&&(p=n);const R=eo(p,[],!0,c);return R.description="processAttribute",R.isAttr=!0,R.target=r,R.isNameOnly=!0,R.howToSet=i,Kf(t,p,r,s,i,o,c,R),R}if(Array.isArray(e))return Zw(n,e,r,[],i,t,s.context);const y=qu(e);if(y>=0){const R=t[y];return tb(n,R,r,[],c,i,s,l)}return Zi(n,e,r,i,l,c)}function nb(n,e,t,r,s,i,o){return xn(n)?sb(s,n,r,e):rb(n,r,e,o,i,s)}function rb(n,e,t,r,s,i){if(r!==!1){nf(t,n,e,r);return}switch(n){case void 0:case!1:case null:ft.push([ib,[e,t]]);return}if(xn(n))return Gf(e,n,i,t);s(e,t,n)}function sb(n,e,t,r){return Xf(e,n,r,t)}function Xf(n,e,t,r){return n=qw(n,e),Gf(r,n,e,t)}function ib(n,e){n.removeAttribute(e)}function ob(n,e,t,r,s){for(const i of n){const o=i[0],c=i[1],l=i[2]||!1;let h=i.length>1?Nt:X_;i[3]&&(h=i[3]);const f=s.contexts,p=Yf(o,c,e,t,r,h,f,s,l)||void 0;typeof p=="object"&&(f.push(p),++s.varCounter)}}function ab(n,e,t,r,s){const i=[],o={updateCount:0,parentContext:t,contexts:i,target:e,value:n,htmlDomMeta:[],tagJsVar:{component:!1,tagJsType:"dynamic-text",hasValueChanged:()=>0,processInit:je,processInitAttribute:je,destroy:(p,m)=>{++o.updateCount,i.forEach(y=>y.tagJsVar.destroy(y,m))},processUpdate:(p,m,y,R)=>{++o.updateCount,Be(h);let x=p(h);const N=o.underFunction;delete o.underFunction,x instanceof Function&&!x.tagJsType&&(N&&x.toString()===N.toString()?x=h.value:(o.underFunction=x,x=x()));const D=h.tagJsVar.processUpdate(x,h,y,R);return h.value=x,m.value=p,Pe(),D}},withinOwnerElement:!0,destroy$:new ne,render$:new ne};Be(o);let c=n();xn(c)&&!c.tagJsType&&(o.underFunction=c,c=c());const h=ep(c,o,e,r,s);return t.contexts.push(o),o.subContext=h,Pe(),h}function Zf(n,e,t,r,s){n.forEach(i=>{switch(typeof i){case"string":case"boolean":case"number":return $u(i,r,s);case"function":{if(i.tagJsType==="element")break;return ab(i,r,e,t,s)}}if(i==null)return $u(i,r,s);if(i.tagJsType==="element"){const c=tp(i,e,t,e.contexts);ct.push([s,[r,c]]),e.htmlDomMeta.push({nn:c.tagName,domElement:c,at:[]});return}return ep(i,e,r,t,s)})}function ep(n,e,t,r,s){const i=eo(n,[],!0,e);if(e.contexts.push(i),i.target=t,i.placeholder=document.createTextNode(""),ct.push([s,[t,i.placeholder]]),Be(i),i.inputsHandler){const c=r.propsConfig;i.inputsHandler(c)}return i.tagJsVar.processInit(n,i,r,i.placeholder),Pe(),i}function $u(n,e,t){const r=Yi(n),s=document.createTextNode(r);return ct.push([t,[e,s]]),s}function tp(n,e,t,r){const s=n.tagName,i=document.createElement(s);e.target=i;const o=n.attributes;for(let l=0;l<o.length;++l){const h=o[l],f=h[0];typeof f=="string"&&(h[2]=Xi(f,s))}ob(o,[],i,t,e),Zf(n.innerHTML,e,t,i,cc);const c=n.listeners;for(let l=0;l<c.length;++l)cb(n,l,t,c[l],i);return i}function cb(n,e,t,r,s){const i=r[0],o=(...c)=>{const h=n.listeners[e][1],f=Qi(t),p=f.context,m=p.updateCount;p.locked=1,++he.locks,Be(p);const y=h(...c);return--he.locks,delete p.locked,Pe(),m===p.updateCount?zf(y,f):(Xe(),Mn(y)?y.then(()=>{const x=f.context.state.newest;return X0(x),"promise-no-data-ever"}):"no-data-ever")};$f(t.appSupport,i,s,o)}function lb(n,e,t,r){e.contexts=e.contexts||[],e.htmlDomMeta=[],e.locked=34;const s=tp(n,e,t,e.contexts);delete e.locked;const i=[ac,[r,s,"htmlTag.processInit"]];ct.push(i),e.paintCommands=[i],nn.push([()=>{delete e.paintCommands},[]]);const o={nn:n.tagName,domElement:s,at:n.attributes};return e.htmlDomMeta=[o],s}function U(n){const t=Is({component:!1,tagJsType:"element",processInitAttribute:je,processInit:lb,destroy:Bf,processUpdate:Hf,hasValueChanged:vc,tagName:n,innerHTML:[],attributes:[],contentId:0,listeners:[],allListeners:[],elementFunctions:vi},vi);return t.tagName=n,t}function Is(n,e){const t=function r(...s){const i={...r};i.attributes=Wn(r.attributes),i.listeners=Wn(r.listeners),i.allListeners=Wn(r.allListeners);let o=i.contexts;i.innerHTML=s;for(let c=0;c<s.length;++c){const l=s[c];if(cs(l)){if(l.tagJsType==="element"){zu(i.allListeners,l.allListeners),l.contexts&&(o||(o=[],i.contexts=o),zu(o,l.contexts),++i.contentId);continue}o||(o=[],i.contexts=o),o.push(l)}}return i};return Object.assign(t,n),ub(t,e(t)),t.attributes=Wn(n.attributes),t.listeners=Wn(n.listeners),t.allListeners=Wn(n.allListeners),t.toString=function(){return Uw(this)},t}function Wn(n){return n.length?n.slice():[]}function zu(n,e){for(let t=0;t<e.length;++t)n.push(e[t])}function ub(n,e){for(const t in e){const r=e[t];try{n[t]=r}catch{Object.defineProperty(n,t,{value:r,writable:!0,configurable:!0,enumerable:!1})}}}const st=hb();function hb(){const e=Is({component:!1,tagJsType:"element",processInitAttribute:je,processInit:db,destroy:fb,processUpdate:Hf,hasValueChanged:vc,tagName:"no-element",innerHTML:[],attributes:[],contentId:0,listeners:[],allListeners:[],elementFunctions:vi},vi);return e.tagName="no-element",e}function db(n,e,t,r){e.contexts=e.contexts||[],e.htmlDomMeta=[],Zf(n.innerHTML,e,t,r,ac)}function fb(n,e){++n.updateCount;const t=n.contexts,r=[];if(t.length&&(Ai(t,e,r),t.length=0,r.length)){const s=n.htmlDomMeta;return Promise.all(r).then(()=>{++he.locks,os(s),--he.locks,Xe()})}}const se=U("button"),pb=U("select"),Gu=U("option");U("optgroup");const ke=U("input"),gb=U("textarea");U("html");U("head");const np=U("title");U("meta");U("link");const un=U("style");U("body");U("script");U("noscript");const mb=U("hr"),Ic=U("h1"),xt=U("h2"),As=U("h3");U("h4");U("h5");U("h6");U("ol");const Wu=U("ul"),Jn=U("li"),T=U("div");U("main");const ia=U("section");U("header");U("footer");U("form");const io=U("fieldset");U("legend");U("dialog");U("pre");U("table");U("tr");U("td");U("th");U("thead");U("tbody");U("tfoot");const yb=U("iframe"),W=U("a"),_b=U("u"),K=U("img"),q=U("br"),Qe=U("label"),ge=U("p"),te=U("small"),ee=U("span"),rp=U("strong"),wb=U("b");U("sup");U("nav");U("figure");U("figcaption");U("code");U("canvas");const li=U("svg"),At=U("path"),ei=U("polygon"),bb=U("rect");U("details");U("summary");const sp=F(({date:n})=>{const e=performance.now().toString().replace(/\./g,"_"),t=`${e}-days-plus`,r=Eb();let s;o(),sp.updates(p=>{const m=n;[{date:n}]=p,n!=m&&(l(),i())}),n=n||new Date;function i(){const m=n-new Date;if(m<0){f({days:0,hours:0,minutes:0,seconds:0}),c();return}let y=Math.floor(m/(1e3*60*60*24));const R=Math.floor(m%(1e3*60*60*24)/(1e3*60*60)),x=Math.floor(m%(1e3*60*60)/(1e3*60)),N=Math.floor(m%(1e3*60)/1e3);f({days:y,hours:R,minutes:x,seconds:N})}function o(){s=setInterval(i,Rt)}function c(){clearInterval(s),s=void 0}F.onDestroy(c);function l(){c(),o()}function h(p,m,y){const R=document.createElement("span");if(R.classList.add("wrap"),R.innerText=m,p.appendChild(R),p.children.length===1)return;function x(){requestAnimationFrame(()=>{R.classList.add("changed"),requestAnimationFrame(()=>{setTimeout(()=>{p.removeChild(R)},200)})})}setTimeout(x,y.speed-1)}const f=Ae(p=>{const m={...p};let{days:y}=m;const R=document.getElementById(t);R&&(y>99?(m.days=99,R.style.display=""):R.style.display="none",Object.entries(m).forEach(([x,N])=>{const D=Tb(N),V=r[x];D[0]!=V[0].value$.value&&(V[0].value$.next(D[0]),h(document.getElementById(`${e}-${x}-0`),D[0],V[0])),D[1]!=V[1].value$.value&&(V[1].value$.next(D[1]),h(document.getElementById(`${e}-${x}-1`),D[1],V[1]))}))});return st(un(`
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
    `),T.class`countdown`(T(T.class`digit-container`(ee.class`digit`(T.class`line`,ee.id`${e}-days-0`,ee.class`placeholder`("0")),ee.class`digit`(T.class`line`,ee.id`${e}-days-1`,ee.class`placeholder`("0")),ee.id`${e}-days-plus`.class`label`.style`display:none`("+")),T.class`label`("Days")),T(T.class`digit-container`(ee.class`digit`(T.class`line`,ee.id`${e}-hours-0`,ee.class`placeholder`("0")),ee.class`digit`(T.class`line`,ee.id`${e}-hours-1`,ee.class`placeholder`("0"))),T.class`label`("Hours")),T(T.class`digit-container`(ee.class`digit`(T.class`line`,ee.id`${e}-minutes-0`,ee.class`placeholder`("0")),ee.class`digit`(T.class`line`,ee.id`${e}-minutes-1`,ee.class`placeholder`("0"))),T.class`label`.contextMenu(l)("Minutes")),T(T.class`digit-container`(ee.class`digit`(T.class`line`,ee.id`${e}-seconds-0`,ee.class`placeholder`("0")),ee.class`digit`(T.class`line`,ee.id`${e}-seconds-1`,ee.class`placeholder`("0"))),T.class`label`.contextMenu(c)("Seconds"))))});function Tb(n){const e=n%10;return[Math.floor(n/10),e]}const Rt=1e3;function Eb(){return{days:[{speed:Rt*60*60*24*10,value$:new ne},{speed:Rt*60*60*24,value$:new ne}],hours:[{speed:Rt*60*60*10,value$:new ne},{speed:Rt*60*60,value$:new ne}],minutes:[{speed:Rt*60*10,value$:new ne},{speed:Rt*60,value$:new ne}],seconds:[{speed:Rt*10,value$:new ne},{speed:Rt,value$:new ne}]}}const vb=()=>{};var Ju={};/**
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
 */const ip=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ib=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},op={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,y=h&63;l||(y=64,o||(m=64)),r.push(t[f],t[p],t[m],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ip(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ib(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new Ab;const m=i<<2|c>>4;if(r.push(m),h!==64){const y=c<<4&240|h>>2;if(r.push(y),p!==64){const R=h<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ab extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cb=function(n){const e=ip(n);return op.encodeByteArray(e,!0)},Ci=function(n){return Cb(n).replace(/\./g,"")},ap=function(n){try{return op.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Rb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sb=()=>Rb().__FIREBASE_DEFAULTS__,kb=()=>{if(typeof process>"u"||typeof Ju>"u")return;const n=Ju.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Pb=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ap(n[1]);return e&&JSON.parse(e)},oo=()=>{try{return vb()||Sb()||kb()||Pb()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},cp=n=>{var e,t;return(t=(e=oo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},xb=n=>{const e=cp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},lp=()=>{var n;return(n=oo())==null?void 0:n.config},up=n=>{var e;return(e=oo())==null?void 0:e[`_${n}`]};/**
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
 */class Vb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function br(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hp(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Db(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ci(JSON.stringify(t)),Ci(JSON.stringify(o)),""].join(".")}const Zr={};function Nb(){const n={prod:[],emulator:[]};for(const e of Object.keys(Zr))Zr[e]?n.emulator.push(e):n.prod.push(e);return n}function Ob(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ku=!1;function dp(n,e){if(typeof window>"u"||typeof document>"u"||!br(window.location.host)||Zr[n]===e||Zr[n]||Ku)return;Zr[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=Nb().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Ku=!0,o()},m}function f(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=Ob(r),y=t("text"),R=document.getElementById(y)||document.createElement("span"),x=t("learnmore"),N=document.getElementById(x)||document.createElement("a"),D=t("preprendIcon"),V=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const G=m.element;c(G),f(N,x);const ve=h();l(V,D),G.append(V,R,N,ve),document.body.appendChild(G)}i?(R.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function Mb(){var e;const n=(e=oo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ub(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bb(){const n=He();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Hb(){return!Mb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qb(){try{return typeof indexedDB=="object"}catch{return!1}}function $b(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const zb="FirebaseError";class Ut extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=zb,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cs.prototype.create)}}class Cs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Gb(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Ut(s,c,r)}}function Gb(n,e){return n.replace(Wb,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Wb=/\{\$([^}]+)}/g;function Jb(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Vn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Qu(i)&&Qu(o)){if(!Vn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Qu(n){return n!==null&&typeof n=="object"}/**
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
 */function Rs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Kb(n,e){const t=new Qb(n,e);return t.subscribe.bind(t)}class Qb{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Yb(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=oa),s.error===void 0&&(s.error=oa),s.complete===void 0&&(s.complete=oa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yb(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function oa(){}/**
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
 */function qe(n){return n&&n._delegate?n._delegate:n}class Dn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Cn="[DEFAULT]";/**
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
 */class Xb{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Vb;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eT(e))try{this.getOrInitializeService({instanceIdentifier:Cn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cn){return this.instances.has(e)}getOptions(e=Cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zb(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cn){return this.component?this.component.multipleInstances?e:Cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zb(n){return n===Cn?void 0:n}function eT(n){return n.instantiationMode==="EAGER"}/**
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
 */class tT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xb(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const nT={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},rT=Q.INFO,sT={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},iT=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=sT[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ac{constructor(e){this.name=e,this._logLevel=rT,this._logHandler=iT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const oT=(n,e)=>e.some(t=>n instanceof t);let Yu,Xu;function aT(){return Yu||(Yu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cT(){return Xu||(Xu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fp=new WeakMap,Na=new WeakMap,pp=new WeakMap,aa=new WeakMap,Cc=new WeakMap;function lT(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(rn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&fp.set(t,n)}).catch(()=>{}),Cc.set(e,n),e}function uT(n){if(Na.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Na.set(n,e)}let Oa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Na.get(n);if(e==="objectStoreNames")return n.objectStoreNames||pp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return rn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function hT(n){Oa=n(Oa)}function dT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ca(this),e,...t);return pp.set(r,e.sort?e.sort():[e]),rn(r)}:cT().includes(n)?function(...e){return n.apply(ca(this),e),rn(fp.get(this))}:function(...e){return rn(n.apply(ca(this),e))}}function fT(n){return typeof n=="function"?dT(n):(n instanceof IDBTransaction&&uT(n),oT(n,aT())?new Proxy(n,Oa):n)}function rn(n){if(n instanceof IDBRequest)return lT(n);if(aa.has(n))return aa.get(n);const e=fT(n);return e!==n&&(aa.set(n,e),Cc.set(e,n)),e}const ca=n=>Cc.get(n);function pT(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=rn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(rn(o.result),l.oldVersion,l.newVersion,rn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const gT=["get","getKey","getAll","getAllKeys","count"],mT=["put","add","delete","clear"],la=new Map;function Zu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(la.get(e))return la.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=mT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||gT.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return la.set(e,i),i}hT(n=>({...n,get:(e,t,r)=>Zu(e,t)||n.get(e,t,r),has:(e,t)=>!!Zu(e,t)||n.has(e,t)}));/**
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
 */class yT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_T(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function _T(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const La="@firebase/app",eh="0.14.7";/**
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
 */const Ot=new Ac("@firebase/app"),wT="@firebase/app-compat",bT="@firebase/analytics-compat",TT="@firebase/analytics",ET="@firebase/app-check-compat",vT="@firebase/app-check",IT="@firebase/auth",AT="@firebase/auth-compat",CT="@firebase/database",RT="@firebase/data-connect",ST="@firebase/database-compat",kT="@firebase/functions",PT="@firebase/functions-compat",xT="@firebase/installations",VT="@firebase/installations-compat",DT="@firebase/messaging",NT="@firebase/messaging-compat",OT="@firebase/performance",LT="@firebase/performance-compat",MT="@firebase/remote-config",FT="@firebase/remote-config-compat",UT="@firebase/storage",jT="@firebase/storage-compat",BT="@firebase/firestore",HT="@firebase/ai",qT="@firebase/firestore-compat",$T="firebase",zT="12.8.0";/**
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
 */const Ma="[DEFAULT]",GT={[La]:"fire-core",[wT]:"fire-core-compat",[TT]:"fire-analytics",[bT]:"fire-analytics-compat",[vT]:"fire-app-check",[ET]:"fire-app-check-compat",[IT]:"fire-auth",[AT]:"fire-auth-compat",[CT]:"fire-rtdb",[RT]:"fire-data-connect",[ST]:"fire-rtdb-compat",[kT]:"fire-fn",[PT]:"fire-fn-compat",[xT]:"fire-iid",[VT]:"fire-iid-compat",[DT]:"fire-fcm",[NT]:"fire-fcm-compat",[OT]:"fire-perf",[LT]:"fire-perf-compat",[MT]:"fire-rc",[FT]:"fire-rc-compat",[UT]:"fire-gcs",[jT]:"fire-gcs-compat",[BT]:"fire-fst",[qT]:"fire-fst-compat",[HT]:"fire-vertex","fire-js":"fire-js",[$T]:"fire-js-all"};/**
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
 */const Ri=new Map,WT=new Map,Fa=new Map;function th(n,e){try{n.container.addComponent(e)}catch(t){Ot.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function cr(n){const e=n.name;if(Fa.has(e))return Ot.debug(`There were multiple attempts to register component ${e}.`),!1;Fa.set(e,n);for(const t of Ri.values())th(t,n);for(const t of WT.values())th(t,n);return!0}function Rc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ze(n){return n==null?!1:n.settings!==void 0}/**
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
 */const JT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sn=new Cs("app","Firebase",JT);/**
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
 */class KT{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sn.create("app-deleted",{appName:this._name})}}/**
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
 */const Tr=zT;function gp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ma,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw sn.create("bad-app-name",{appName:String(s)});if(t||(t=lp()),!t)throw sn.create("no-options");const i=Ri.get(s);if(i){if(Vn(t,i.options)&&Vn(r,i.config))return i;throw sn.create("duplicate-app",{appName:s})}const o=new tT(s);for(const l of Fa.values())o.addComponent(l);const c=new KT(t,r,o);return Ri.set(s,c),c}function mp(n=Ma){const e=Ri.get(n);if(!e&&n===Ma&&lp())return gp();if(!e)throw sn.create("no-app",{appName:n});return e}function on(n,e,t){let r=GT[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ot.warn(o.join(" "));return}cr(new Dn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const QT="firebase-heartbeat-database",YT=1,ls="firebase-heartbeat-store";let ua=null;function yp(){return ua||(ua=pT(QT,YT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ls)}catch(t){console.warn(t)}}}}).catch(n=>{throw sn.create("idb-open",{originalErrorMessage:n.message})})),ua}async function XT(n){try{const t=(await yp()).transaction(ls),r=await t.objectStore(ls).get(_p(n));return await t.done,r}catch(e){if(e instanceof Ut)Ot.warn(e.message);else{const t=sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ot.warn(t.message)}}}async function nh(n,e){try{const r=(await yp()).transaction(ls,"readwrite");await r.objectStore(ls).put(e,_p(n)),await r.done}catch(t){if(t instanceof Ut)Ot.warn(t.message);else{const r=sn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ot.warn(r.message)}}}function _p(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ZT=1024,eE=30;class tE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rE(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=rh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>eE){const o=sE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ot.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=rh(),{heartbeatsToSend:r,unsentEntries:s}=nE(this._heartbeatsCache.heartbeats),i=Ci(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ot.warn(t),""}}}function rh(){return new Date().toISOString().substring(0,10)}function nE(n,e=ZT){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),sh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),sh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class rE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qb()?$b().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await XT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return nh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return nh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function sh(n){return Ci(JSON.stringify({version:2,heartbeats:n})).length}function sE(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function iE(n){cr(new Dn("platform-logger",e=>new yT(e),"PRIVATE")),cr(new Dn("heartbeat",e=>new tE(e),"PRIVATE")),on(La,eh,n),on(La,eh,"esm2020"),on("fire-js","")}iE("");var oE="firebase",aE="12.8.0";/**
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
 */on(oE,aE,"app");function wp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cE=wp,bp=new Cs("auth","Firebase",wp());/**
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
 */const Si=new Ac("@firebase/auth");function lE(n,...e){Si.logLevel<=Q.WARN&&Si.warn(`Auth (${Tr}): ${n}`,...e)}function ui(n,...e){Si.logLevel<=Q.ERROR&&Si.error(`Auth (${Tr}): ${n}`,...e)}/**
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
 */function vt(n,...e){throw kc(n,...e)}function ut(n,...e){return kc(n,...e)}function Sc(n,e,t){const r={...cE(),[e]:t};return new Cs("auth","Firebase",r).create(e,{appName:n.name})}function an(n){return Sc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tp(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&vt(n,"argument-error"),Sc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function kc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return bp.create(n,...e)}function H(n,e,...t){if(!n)throw kc(e,...t)}function kt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ui(e),new Error(e)}function Lt(n,e){n||kt(e)}/**
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
 */function Ua(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function uE(){return ih()==="http:"||ih()==="https:"}function ih(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function hE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uE()||Ub()||"connection"in navigator)?navigator.onLine:!0}function dE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ss{constructor(e,t){this.shortDelay=e,this.longDelay=t,Lt(t>e,"Short delay should be less than long delay!"),this.isMobile=Lb()||jb()}get(){return hE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pc(n,e){Lt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ep{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const pE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gE=new Ss(3e4,6e4);function xc(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Er(n,e,t,r,s={}){return vp(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Rs({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...i};return Fb()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&br(n.emulatorConfig.host)&&(h.credentials="include"),Ep.fetch()(await Ip(n,n.config.apiHost,t,c),h)})}async function vp(n,e,t){n._canInitEmulator=!1;const r={...fE,...e};try{const s=new yE(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ti(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ti(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ti(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw ti(n,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Sc(n,f,h);vt(n,f)}}catch(s){if(s instanceof Ut)throw s;vt(n,"network-request-failed",{message:String(s)})}}async function mE(n,e,t,r,s={}){const i=await Er(n,e,t,r,s);return"mfaPendingCredential"in i&&vt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ip(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Pc(n.config,s):`${n.config.apiScheme}://${s}`;return pE.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class yE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ut(this.auth,"network-request-failed")),gE.get())})}}function ti(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ut(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function _E(n,e){return Er(n,"POST","/v1/accounts:delete",e)}async function ki(n,e){return Er(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function es(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wE(n,e=!1){const t=qe(n),r=await t.getIdToken(e),s=Vc(r);H(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:es(ha(s.auth_time)),issuedAtTime:es(ha(s.iat)),expirationTime:es(ha(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ha(n){return Number(n)*1e3}function Vc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ui("JWT malformed, contained fewer than 3 sections"),null;try{const s=ap(t);return s?JSON.parse(s):(ui("Failed to decode base64 JWT payload"),null)}catch(s){return ui("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function oh(n){const e=Vc(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function us(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ut&&bE(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function bE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class TE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ja{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=es(this.lastLoginAt),this.creationTime=es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pi(n){var p;const e=n.auth,t=await n.getIdToken(),r=await us(n,ki(e,{idToken:t}));H(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Ap(s.providerUserInfo):[],o=vE(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ja(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function EE(n){const e=qe(n);await Pi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vE(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ap(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function IE(n,e){const t=await vp(n,{},async()=>{const r=Rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await Ip(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&br(n.emulatorConfig.host)&&(l.credentials="include"),Ep.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function AE(n,e){return Er(n,"POST","/v2/accounts:revokeToken",xc(n,e))}/**
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
 */class rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=oh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await IE(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new rr;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rr,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
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
 */function Wt(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ot{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new TE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ja(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await us(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wE(this,e)}reload(){return EE(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ot({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Pi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ze(this.auth.app))return Promise.reject(an(this.auth));const e=await this.getIdToken();return await us(this,_E(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:y,providerData:R,stsTokenManager:x}=t;H(p&&x,e,"internal-error");const N=rr.fromJSON(this.name,x);H(typeof p=="string",e,"internal-error"),Wt(r,e.name),Wt(s,e.name),H(typeof m=="boolean",e,"internal-error"),H(typeof y=="boolean",e,"internal-error"),Wt(i,e.name),Wt(o,e.name),Wt(c,e.name),Wt(l,e.name),Wt(h,e.name),Wt(f,e.name);const D=new ot({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:N,createdAt:h,lastLoginAt:f});return R&&Array.isArray(R)&&(D.providerData=R.map(V=>({...V}))),l&&(D._redirectEventId=l),D}static async _fromIdTokenResponse(e,t,r=!1){const s=new rr;s.updateFromServerResponse(t);const i=new ot({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Pi(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];H(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ap(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new rr;c.updateFromIdToken(r);const l=new ot({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ja(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const ah=new Map;function Pt(n){Lt(n instanceof Function,"Expected a class definition");let e=ah.get(n);return e?(Lt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ah.set(n,e),e)}/**
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
 */class Cp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Cp.type="NONE";const ch=Cp;/**
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
 */function hi(n,e,t){return`firebase:${n}:${e}:${t}`}class sr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=hi(this.userKey,s.apiKey,i),this.fullPersistenceKey=hi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ki(this.auth,{idToken:e}).catch(()=>{});return t?ot._fromGetAccountInfoResponse(this.auth,t,e):null}return ot._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new sr(Pt(ch),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Pt(ch);const o=hi(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const m=await ki(e,{idToken:f}).catch(()=>{});if(!m)break;p=await ot._fromGetAccountInfoResponse(e,m,f)}else p=ot._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new sr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new sr(i,e,r))}}/**
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
 */function lh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vp(e))return"Blackberry";if(Dp(e))return"Webos";if(Sp(e))return"Safari";if((e.includes("chrome/")||kp(e))&&!e.includes("edge/"))return"Chrome";if(xp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rp(n=He()){return/firefox\//i.test(n)}function Sp(n=He()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kp(n=He()){return/crios\//i.test(n)}function Pp(n=He()){return/iemobile/i.test(n)}function xp(n=He()){return/android/i.test(n)}function Vp(n=He()){return/blackberry/i.test(n)}function Dp(n=He()){return/webos/i.test(n)}function Dc(n=He()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function CE(n=He()){var e;return Dc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function RE(){return Bb()&&document.documentMode===10}function Np(n=He()){return Dc(n)||xp(n)||Dp(n)||Vp(n)||/windows phone/i.test(n)||Pp(n)}/**
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
 */function Op(n,e=[]){let t;switch(n){case"Browser":t=lh(He());break;case"Worker":t=`${lh(He())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Tr}/${r}`}/**
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
 */class SE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function kE(n,e={}){return Er(n,"GET","/v2/passwordPolicy",xc(n,e))}/**
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
 */const PE=6;class xE{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??PE,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class VE{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uh(this),this.idTokenSubscription=new uh(this),this.beforeStateQueue=new SE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await sr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ki(this,{idToken:e}),r=await ot._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ze(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Pi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ze(this.app))return Promise.reject(an(this));const t=e?qe(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ze(this.app)?Promise.reject(an(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ze(this.app)?Promise.reject(an(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kE(this),t=new xE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Cs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await AE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pt(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await sr.create(this,[Pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Op(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Ze(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&lE(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function vr(n){return qe(n)}class uh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kb(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Nc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function DE(n){Nc=n}function NE(n){return Nc.loadJS(n)}function OE(){return Nc.gapiScript}function LE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function ME(n,e){const t=Rc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Vn(i,e??{}))return s;vt(s,"already-initialized")}return t.initialize({options:e})}function FE(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Pt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function UE(n,e,t){const r=vr(n);H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Lp(e),{host:o,port:c}=jE(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){H(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),H(Vn(h,r.config.emulator)&&Vn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,br(o)?(hp(`${i}//${o}${l}`),dp("Auth",!0)):BE()}function Lp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function jE(n){const e=Lp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:hh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:hh(o)}}}function hh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function BE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Mp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kt("not implemented")}_getIdTokenResponse(e){return kt("not implemented")}_linkToIdToken(e,t){return kt("not implemented")}_getReauthenticationResolver(e){return kt("not implemented")}}/**
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
 */async function ir(n,e){return mE(n,"POST","/v1/accounts:signInWithIdp",xc(n,e))}/**
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
 */const HE="http://localhost";class Nn extends Mp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new Nn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ir(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ir(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ir(e,t)}buildRequest(){const e={requestUri:HE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Rs(t)}return e}}/**
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
 */class ao{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ks extends ao{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yt extends ks{constructor(){super("facebook.com")}static credential(e){return Nn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yt.PROVIDER_ID="facebook.com";/**
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
 */class St extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return St.credential(t,r)}catch{return null}}}St.GOOGLE_SIGN_IN_METHOD="google.com";St.PROVIDER_ID="google.com";/**
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
 */class Xt extends ks{constructor(){super("github.com")}static credential(e){return Nn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com";Xt.PROVIDER_ID="github.com";/**
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
 */class Zt extends ks{constructor(){super("twitter.com")}static credential(e,t){return Nn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Zt.credential(t,r)}catch{return null}}}Zt.TWITTER_SIGN_IN_METHOD="twitter.com";Zt.PROVIDER_ID="twitter.com";/**
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
 */class lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await ot._fromIdTokenResponse(e,r,s),o=dh(r);return new lr({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=dh(r);return new lr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function dh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class xi extends Ut{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,xi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new xi(e,t,r,s)}}function Fp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xi._fromErrorAndOperation(n,i,e,r):i})}async function qE(n,e,t=!1){const r=await us(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return lr._forOperation(n,"link",r)}/**
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
 */async function $E(n,e,t=!1){const{auth:r}=n;if(Ze(r.app))return Promise.reject(an(r));const s="reauthenticate";try{const i=await us(n,Fp(r,s,e,n),t);H(i.idToken,r,"internal-error");const o=Vc(i.idToken);H(o,r,"internal-error");const{sub:c}=o;return H(n.uid===c,r,"user-mismatch"),lr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&vt(r,"user-mismatch"),i}}/**
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
 */async function zE(n,e,t=!1){if(Ze(n.app))return Promise.reject(an(n));const r="signIn",s=await Fp(n,r,e),i=await lr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}/**
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
 */function GE(n,e){return qe(n).setPersistence(e)}function WE(n,e,t,r){return qe(n).onIdTokenChanged(e,t,r)}function JE(n,e,t){return qe(n).beforeAuthStateChanged(e,t)}function KE(n,e,t,r){return qe(n).onAuthStateChanged(e,t,r)}function QE(n){return qe(n).signOut()}const Vi="__sak";/**
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
 */class Up{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vi,"1"),this.storage.removeItem(Vi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const YE=1e3,XE=10;class jp extends Up{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Np(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);RE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,XE):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},YE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jp.type="LOCAL";const Bp=jp;/**
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
 */class Hp extends Up{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Hp.type="SESSION";const Oc=Hp;/**
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
 */function ZE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class co{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new co(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,i)),l=await ZE(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}co.receivers=[];/**
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
 */function Lc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ev{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Lc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function wt(){return window}function tv(n){wt().location.href=n}/**
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
 */function qp(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function nv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function sv(){return qp()?self:null}/**
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
 */const $p="firebaseLocalStorageDb",iv=1,Di="firebaseLocalStorage",zp="fbase_key";class Ps{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function lo(n,e){return n.transaction([Di],e?"readwrite":"readonly").objectStore(Di)}function ov(){const n=indexedDB.deleteDatabase($p);return new Ps(n).toPromise()}function Ba(){const n=indexedDB.open($p,iv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Di,{keyPath:zp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Di)?e(r):(r.close(),await ov(),e(await Ba()))})})}async function fh(n,e,t){const r=lo(n,!0).put({[zp]:e,value:t});return new Ps(r).toPromise()}async function av(n,e){const t=lo(n,!1).get(e),r=await new Ps(t).toPromise();return r===void 0?null:r.value}function ph(n,e){const t=lo(n,!0).delete(e);return new Ps(t).toPromise()}const cv=800,lv=3;class Gp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ba(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>lv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=co._getInstance(sv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await nv(),!this.activeServiceWorker)return;this.sender=new ev(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ba();return await fh(e,Vi,"1"),await ph(e,Vi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>fh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>av(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ph(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=lo(s,!1).getAll();return new Ps(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gp.type="LOCAL";const Wp=Gp;new Ss(3e4,6e4);/**
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
 */function Mc(n,e){return e?Pt(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Fc extends Mp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ir(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ir(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ir(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function uv(n){return zE(n.auth,new Fc(n),n.bypassAuthState)}function hv(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),$E(t,new Fc(n),n.bypassAuthState)}async function dv(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),qE(t,new Fc(n),n.bypassAuthState)}/**
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
 */class Jp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uv;case"linkViaPopup":case"linkViaRedirect":return dv;case"reauthViaPopup":case"reauthViaRedirect":return hv;default:vt(this.auth,"internal-error")}}resolve(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fv=new Ss(2e3,1e4);async function pv(n,e,t){if(Ze(n.app))return Promise.reject(ut(n,"operation-not-supported-in-this-environment"));const r=vr(n);Tp(n,e,ao);const s=Mc(r,t);return new Rn(r,"signInViaPopup",e,s).executeNotNull()}class Rn extends Jp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Rn.currentPopupAction&&Rn.currentPopupAction.cancel(),Rn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Lt(this.filter.length===1,"Popup operations only handle one event");const e=Lc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fv.get())};e()}}Rn.currentPopupAction=null;/**
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
 */const gv="pendingRedirect",di=new Map;class mv extends Jp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=di.get(this.auth._key());if(!e){try{const r=await yv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}di.set(this.auth._key(),e)}return this.bypassAuthState||di.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yv(n,e){const t=Qp(e),r=Kp(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function _v(n,e){return Kp(n)._set(Qp(e),"true")}function wv(n,e){di.set(n._key(),e)}function Kp(n){return Pt(n._redirectPersistence)}function Qp(n){return hi(gv,n.config.apiKey,n.name)}/**
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
 */function bv(n,e,t){return Tv(n,e,t)}async function Tv(n,e,t){if(Ze(n.app))return Promise.reject(an(n));const r=vr(n);Tp(n,e,ao),await r._initializationPromise;const s=Mc(r,t);return await _v(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function Ev(n,e){return await vr(n)._initializationPromise,Yp(n,e,!1)}async function Yp(n,e,t=!1){if(Ze(n.app))return Promise.reject(an(n));const r=vr(n),s=Mc(r,e),o=await new mv(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const vv=600*1e3;class Iv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Av(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Xp(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(ut(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vv&&this.cachedEventUids.clear(),this.cachedEventUids.has(gh(e))}saveEventToCache(e){this.cachedEventUids.add(gh(e)),this.lastProcessedEventTime=Date.now()}}function gh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Xp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Av(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xp(n);default:return!1}}/**
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
 */async function Cv(n,e={}){return Er(n,"GET","/v1/projects",e)}/**
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
 */const Rv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sv=/^https?/;async function kv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Cv(n);for(const t of e)try{if(Pv(t))return}catch{}vt(n,"unauthorized-domain")}function Pv(n){const e=Ua(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Sv.test(t))return!1;if(Rv.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const xv=new Ss(3e4,6e4);function mh(){const n=wt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Vv(n){return new Promise((e,t)=>{var s,i,o;function r(){mh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mh(),t(ut(n,"network-request-failed"))},timeout:xv.get()})}if((i=(s=wt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=wt().gapi)!=null&&o.load)r();else{const c=LE("iframefcb");return wt()[c]=()=>{gapi.load?r():t(ut(n,"network-request-failed"))},NE(`${OE()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw fi=null,e})}let fi=null;function Dv(n){return fi=fi||Vv(n),fi}/**
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
 */const Nv=new Ss(5e3,15e3),Ov="__/auth/iframe",Lv="emulator/auth/iframe",Mv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Uv(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Pc(e,Lv):`https://${n.config.authDomain}/${Ov}`,r={apiKey:e.apiKey,appName:n.name,v:Tr},s=Fv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Rs(r).slice(1)}`}async function jv(n){const e=await Dv(n),t=wt().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:Uv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ut(n,"network-request-failed"),c=wt().setTimeout(()=>{i(o)},Nv.get());function l(){wt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Bv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hv=500,qv=600,$v="_blank",zv="http://localhost";class yh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gv(n,e,t,r=Hv,s=qv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...Bv,width:r.toString(),height:s.toString(),top:i,left:o},h=He().toLowerCase();t&&(c=kp(h)?$v:t),Rp(h)&&(e=e||zv,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[y,R])=>`${m}${y}=${R},`,"");if(CE(h)&&c!=="_self")return Wv(e||"",c),new yh(null);const p=window.open(e||"",c,f);H(p,n,"popup-blocked");try{p.focus()}catch{}return new yh(p)}function Wv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Jv="__/auth/handler",Kv="emulator/auth/handler",Qv=encodeURIComponent("fac");async function _h(n,e,t,r,s,i){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Tr,eventId:s};if(e instanceof ao){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Jb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ks){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${Qv}=${encodeURIComponent(l)}`:"";return`${Yv(n)}?${Rs(c).slice(1)}${h}`}function Yv({config:n}){return n.emulator?Pc(n,Kv):`https://${n.authDomain}/${Jv}`}/**
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
 */const da="webStorageSupport";class Xv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oc,this._completeRedirectFn=Yp,this._overrideRedirectResult=wv}async _openPopup(e,t,r,s){var o;Lt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await _h(e,t,r,Ua(),s);return Gv(e,i,Lc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await _h(e,t,r,Ua(),s);return tv(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Lt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await jv(e),r=new Iv(e);return t.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(da,{type:da},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[da];i!==void 0&&t(!!i),vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Np()||Sp()||Dc()}}const Zv=Xv;var wh="@firebase/auth",bh="1.12.0";/**
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
 */class eI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nI(n){cr(new Dn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Op(n)},h=new VE(r,s,i,l);return FE(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),cr(new Dn("auth-internal",e=>{const t=vr(e.getProvider("auth").getImmediate());return(r=>new eI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(wh,bh,tI(n)),on(wh,bh,"esm2020")}/**
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
 */const rI=300,sI=up("authIdTokenMaxAge")||rI;let Th=null;const iI=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>sI)return;const s=t==null?void 0:t.token;Th!==s&&(Th=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function oI(n=mp()){const e=Rc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ME(n,{popupRedirectResolver:Zv,persistence:[Wp,Bp,Oc]}),r=up("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=iI(i.toString());JE(t,o,()=>o(t.currentUser)),WE(t,c=>o(c))}}const s=cp("auth");return s&&UE(t,`http://${s}`),t}function aI(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}DE({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ut("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",aI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nI("Browser");var Eh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cn,Zp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function b(){}b.prototype=_.prototype,v.F=_.prototype,v.prototype=new b,v.prototype.constructor=v,v.D=function(I,E,C){for(var w=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)w[Ge-2]=arguments[Ge];return _.prototype[E].apply(I,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,_,b){b||(b=0);const I=Array(16);if(typeof _=="string")for(var E=0;E<16;++E)I[E]=_.charCodeAt(b++)|_.charCodeAt(b++)<<8|_.charCodeAt(b++)<<16|_.charCodeAt(b++)<<24;else for(E=0;E<16;++E)I[E]=_[b++]|_[b++]<<8|_[b++]<<16|_[b++]<<24;_=v.g[0],b=v.g[1],E=v.g[2];let C=v.g[3],w;w=_+(C^b&(E^C))+I[0]+3614090360&4294967295,_=b+(w<<7&4294967295|w>>>25),w=C+(E^_&(b^E))+I[1]+3905402710&4294967295,C=_+(w<<12&4294967295|w>>>20),w=E+(b^C&(_^b))+I[2]+606105819&4294967295,E=C+(w<<17&4294967295|w>>>15),w=b+(_^E&(C^_))+I[3]+3250441966&4294967295,b=E+(w<<22&4294967295|w>>>10),w=_+(C^b&(E^C))+I[4]+4118548399&4294967295,_=b+(w<<7&4294967295|w>>>25),w=C+(E^_&(b^E))+I[5]+1200080426&4294967295,C=_+(w<<12&4294967295|w>>>20),w=E+(b^C&(_^b))+I[6]+2821735955&4294967295,E=C+(w<<17&4294967295|w>>>15),w=b+(_^E&(C^_))+I[7]+4249261313&4294967295,b=E+(w<<22&4294967295|w>>>10),w=_+(C^b&(E^C))+I[8]+1770035416&4294967295,_=b+(w<<7&4294967295|w>>>25),w=C+(E^_&(b^E))+I[9]+2336552879&4294967295,C=_+(w<<12&4294967295|w>>>20),w=E+(b^C&(_^b))+I[10]+4294925233&4294967295,E=C+(w<<17&4294967295|w>>>15),w=b+(_^E&(C^_))+I[11]+2304563134&4294967295,b=E+(w<<22&4294967295|w>>>10),w=_+(C^b&(E^C))+I[12]+1804603682&4294967295,_=b+(w<<7&4294967295|w>>>25),w=C+(E^_&(b^E))+I[13]+4254626195&4294967295,C=_+(w<<12&4294967295|w>>>20),w=E+(b^C&(_^b))+I[14]+2792965006&4294967295,E=C+(w<<17&4294967295|w>>>15),w=b+(_^E&(C^_))+I[15]+1236535329&4294967295,b=E+(w<<22&4294967295|w>>>10),w=_+(E^C&(b^E))+I[1]+4129170786&4294967295,_=b+(w<<5&4294967295|w>>>27),w=C+(b^E&(_^b))+I[6]+3225465664&4294967295,C=_+(w<<9&4294967295|w>>>23),w=E+(_^b&(C^_))+I[11]+643717713&4294967295,E=C+(w<<14&4294967295|w>>>18),w=b+(C^_&(E^C))+I[0]+3921069994&4294967295,b=E+(w<<20&4294967295|w>>>12),w=_+(E^C&(b^E))+I[5]+3593408605&4294967295,_=b+(w<<5&4294967295|w>>>27),w=C+(b^E&(_^b))+I[10]+38016083&4294967295,C=_+(w<<9&4294967295|w>>>23),w=E+(_^b&(C^_))+I[15]+3634488961&4294967295,E=C+(w<<14&4294967295|w>>>18),w=b+(C^_&(E^C))+I[4]+3889429448&4294967295,b=E+(w<<20&4294967295|w>>>12),w=_+(E^C&(b^E))+I[9]+568446438&4294967295,_=b+(w<<5&4294967295|w>>>27),w=C+(b^E&(_^b))+I[14]+3275163606&4294967295,C=_+(w<<9&4294967295|w>>>23),w=E+(_^b&(C^_))+I[3]+4107603335&4294967295,E=C+(w<<14&4294967295|w>>>18),w=b+(C^_&(E^C))+I[8]+1163531501&4294967295,b=E+(w<<20&4294967295|w>>>12),w=_+(E^C&(b^E))+I[13]+2850285829&4294967295,_=b+(w<<5&4294967295|w>>>27),w=C+(b^E&(_^b))+I[2]+4243563512&4294967295,C=_+(w<<9&4294967295|w>>>23),w=E+(_^b&(C^_))+I[7]+1735328473&4294967295,E=C+(w<<14&4294967295|w>>>18),w=b+(C^_&(E^C))+I[12]+2368359562&4294967295,b=E+(w<<20&4294967295|w>>>12),w=_+(b^E^C)+I[5]+4294588738&4294967295,_=b+(w<<4&4294967295|w>>>28),w=C+(_^b^E)+I[8]+2272392833&4294967295,C=_+(w<<11&4294967295|w>>>21),w=E+(C^_^b)+I[11]+1839030562&4294967295,E=C+(w<<16&4294967295|w>>>16),w=b+(E^C^_)+I[14]+4259657740&4294967295,b=E+(w<<23&4294967295|w>>>9),w=_+(b^E^C)+I[1]+2763975236&4294967295,_=b+(w<<4&4294967295|w>>>28),w=C+(_^b^E)+I[4]+1272893353&4294967295,C=_+(w<<11&4294967295|w>>>21),w=E+(C^_^b)+I[7]+4139469664&4294967295,E=C+(w<<16&4294967295|w>>>16),w=b+(E^C^_)+I[10]+3200236656&4294967295,b=E+(w<<23&4294967295|w>>>9),w=_+(b^E^C)+I[13]+681279174&4294967295,_=b+(w<<4&4294967295|w>>>28),w=C+(_^b^E)+I[0]+3936430074&4294967295,C=_+(w<<11&4294967295|w>>>21),w=E+(C^_^b)+I[3]+3572445317&4294967295,E=C+(w<<16&4294967295|w>>>16),w=b+(E^C^_)+I[6]+76029189&4294967295,b=E+(w<<23&4294967295|w>>>9),w=_+(b^E^C)+I[9]+3654602809&4294967295,_=b+(w<<4&4294967295|w>>>28),w=C+(_^b^E)+I[12]+3873151461&4294967295,C=_+(w<<11&4294967295|w>>>21),w=E+(C^_^b)+I[15]+530742520&4294967295,E=C+(w<<16&4294967295|w>>>16),w=b+(E^C^_)+I[2]+3299628645&4294967295,b=E+(w<<23&4294967295|w>>>9),w=_+(E^(b|~C))+I[0]+4096336452&4294967295,_=b+(w<<6&4294967295|w>>>26),w=C+(b^(_|~E))+I[7]+1126891415&4294967295,C=_+(w<<10&4294967295|w>>>22),w=E+(_^(C|~b))+I[14]+2878612391&4294967295,E=C+(w<<15&4294967295|w>>>17),w=b+(C^(E|~_))+I[5]+4237533241&4294967295,b=E+(w<<21&4294967295|w>>>11),w=_+(E^(b|~C))+I[12]+1700485571&4294967295,_=b+(w<<6&4294967295|w>>>26),w=C+(b^(_|~E))+I[3]+2399980690&4294967295,C=_+(w<<10&4294967295|w>>>22),w=E+(_^(C|~b))+I[10]+4293915773&4294967295,E=C+(w<<15&4294967295|w>>>17),w=b+(C^(E|~_))+I[1]+2240044497&4294967295,b=E+(w<<21&4294967295|w>>>11),w=_+(E^(b|~C))+I[8]+1873313359&4294967295,_=b+(w<<6&4294967295|w>>>26),w=C+(b^(_|~E))+I[15]+4264355552&4294967295,C=_+(w<<10&4294967295|w>>>22),w=E+(_^(C|~b))+I[6]+2734768916&4294967295,E=C+(w<<15&4294967295|w>>>17),w=b+(C^(E|~_))+I[13]+1309151649&4294967295,b=E+(w<<21&4294967295|w>>>11),w=_+(E^(b|~C))+I[4]+4149444226&4294967295,_=b+(w<<6&4294967295|w>>>26),w=C+(b^(_|~E))+I[11]+3174756917&4294967295,C=_+(w<<10&4294967295|w>>>22),w=E+(_^(C|~b))+I[2]+718787259&4294967295,E=C+(w<<15&4294967295|w>>>17),w=b+(C^(E|~_))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(E+(w<<21&4294967295|w>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+C&4294967295}r.prototype.v=function(v,_){_===void 0&&(_=v.length);const b=_-this.blockSize,I=this.C;let E=this.h,C=0;for(;C<_;){if(E==0)for(;C<=b;)s(this,v,C),C+=this.blockSize;if(typeof v=="string"){for(;C<_;)if(I[E++]=v.charCodeAt(C++),E==this.blockSize){s(this,I),E=0;break}}else for(;C<_;)if(I[E++]=v[C++],E==this.blockSize){s(this,I),E=0;break}}this.h=E,this.o+=_},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;_=this.o*8;for(var b=v.length-8;b<v.length;++b)v[b]=_&255,_/=256;for(this.v(v),v=Array(16),_=0,b=0;b<4;++b)for(let I=0;I<32;I+=8)v[_++]=this.g[b]>>>I&255;return v};function i(v,_){var b=c;return Object.prototype.hasOwnProperty.call(b,v)?b[v]:b[v]=_(v)}function o(v,_){this.h=_;const b=[];let I=!0;for(let E=v.length-1;E>=0;E--){const C=v[E]|0;I&&C==_||(b[E]=C,I=!1)}this.g=b}var c={};function l(v){return-128<=v&&v<128?i(v,function(_){return new o([_|0],_<0?-1:0)}):new o([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return N(h(-v));const _=[];let b=1;for(let I=0;v>=b;I++)_[I]=v/b|0,b*=4294967296;return new o(_,0)}function f(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return N(f(v.substring(1),_));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=h(Math.pow(_,8));let I=p;for(let C=0;C<v.length;C+=8){var E=Math.min(8,v.length-C);const w=parseInt(v.substring(C,C+E),_);E<8?(E=h(Math.pow(_,E)),I=I.j(E).add(h(w))):(I=I.j(b),I=I.add(h(w)))}return I}var p=l(0),m=l(1),y=l(16777216);n=o.prototype,n.m=function(){if(x(this))return-N(this).m();let v=0,_=1;for(let b=0;b<this.g.length;b++){const I=this.i(b);v+=(I>=0?I:4294967296+I)*_,_*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(R(this))return"0";if(x(this))return"-"+N(this).toString(v);const _=h(Math.pow(v,6));var b=this;let I="";for(;;){const E=ve(b,_).g;b=D(b,E.j(_));let C=((b.g.length>0?b.g[0]:b.h)>>>0).toString(v);if(b=E,R(b))return C+I;for(;C.length<6;)C="0"+C;I=C+I}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function R(v){if(v.h!=0)return!1;for(let _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function x(v){return v.h==-1}n.l=function(v){return v=D(this,v),x(v)?-1:R(v)?0:1};function N(v){const _=v.g.length,b=[];for(let I=0;I<_;I++)b[I]=~v.g[I];return new o(b,~v.h).add(m)}n.abs=function(){return x(this)?N(this):this},n.add=function(v){const _=Math.max(this.g.length,v.g.length),b=[];let I=0;for(let E=0;E<=_;E++){let C=I+(this.i(E)&65535)+(v.i(E)&65535),w=(C>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);I=w>>>16,C&=65535,w&=65535,b[E]=w<<16|C}return new o(b,b[b.length-1]&-2147483648?-1:0)};function D(v,_){return v.add(N(_))}n.j=function(v){if(R(this)||R(v))return p;if(x(this))return x(v)?N(this).j(N(v)):N(N(this).j(v));if(x(v))return N(this.j(N(v)));if(this.l(y)<0&&v.l(y)<0)return h(this.m()*v.m());const _=this.g.length+v.g.length,b=[];for(var I=0;I<2*_;I++)b[I]=0;for(I=0;I<this.g.length;I++)for(let E=0;E<v.g.length;E++){const C=this.i(I)>>>16,w=this.i(I)&65535,Ge=v.i(E)>>>16,wn=v.i(E)&65535;b[2*I+2*E]+=w*wn,V(b,2*I+2*E),b[2*I+2*E+1]+=C*wn,V(b,2*I+2*E+1),b[2*I+2*E+1]+=w*Ge,V(b,2*I+2*E+1),b[2*I+2*E+2]+=C*Ge,V(b,2*I+2*E+2)}for(v=0;v<_;v++)b[v]=b[2*v+1]<<16|b[2*v];for(v=_;v<2*_;v++)b[v]=0;return new o(b,0)};function V(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function G(v,_){this.g=v,this.h=_}function ve(v,_){if(R(_))throw Error("division by zero");if(R(v))return new G(p,p);if(x(v))return _=ve(N(v),_),new G(N(_.g),N(_.h));if(x(_))return _=ve(v,N(_)),new G(N(_.g),_.h);if(v.g.length>30){if(x(v)||x(_))throw Error("slowDivide_ only works with positive integers.");for(var b=m,I=_;I.l(v)<=0;)b=Je(b),I=Je(I);var E=Ne(b,1),C=Ne(I,1);for(I=Ne(I,2),b=Ne(b,2);!R(I);){var w=C.add(I);w.l(v)<=0&&(E=E.add(b),C=w),I=Ne(I,1),b=Ne(b,1)}return _=D(v,E.j(_)),new G(E,_)}for(E=p;v.l(_)>=0;){for(b=Math.max(1,Math.floor(v.m()/_.m())),I=Math.ceil(Math.log(b)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),C=h(b),w=C.j(_);x(w)||w.l(v)>0;)b-=I,C=h(b),w=C.j(_);R(C)&&(C=m),E=E.add(C),v=D(v,w)}return new G(E,v)}n.B=function(v){return ve(this,v).h},n.and=function(v){const _=Math.max(this.g.length,v.g.length),b=[];for(let I=0;I<_;I++)b[I]=this.i(I)&v.i(I);return new o(b,this.h&v.h)},n.or=function(v){const _=Math.max(this.g.length,v.g.length),b=[];for(let I=0;I<_;I++)b[I]=this.i(I)|v.i(I);return new o(b,this.h|v.h)},n.xor=function(v){const _=Math.max(this.g.length,v.g.length),b=[];for(let I=0;I<_;I++)b[I]=this.i(I)^v.i(I);return new o(b,this.h^v.h)};function Je(v){const _=v.g.length+1,b=[];for(let I=0;I<_;I++)b[I]=v.i(I)<<1|v.i(I-1)>>>31;return new o(b,v.h)}function Ne(v,_){const b=_>>5;_%=32;const I=v.g.length-b,E=[];for(let C=0;C<I;C++)E[C]=_>0?v.i(C+b)>>>_|v.i(C+b+1)<<32-_:v.i(C+b);return new o(E,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Zp=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,cn=o}).apply(typeof Eh<"u"?Eh:typeof self<"u"?self:typeof window<"u"?window:{});var ni=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eg,Wr,tg,pi,Ha,ng,rg,sg;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ni=="object"&&ni];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var A=a[g];if(!(A in d))break e;d=d[A]}a=a[a.length-1],g=d[a],u=u(g),u!=g&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var d=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&d.push([g,u[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,d){return a.call.apply(a.bind,arguments)}function h(a,u,d){return h=l,h.apply(null,arguments)}function f(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,A,S){for(var O=Array(arguments.length-2),J=2;J<arguments.length;J++)O[J-2]=arguments[J];return u.prototype[A].apply(g,O)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function y(a){const u=a.length;if(u>0){const d=Array(u);for(let g=0;g<u;g++)d[g]=a[g];return d}return[]}function R(a,u){for(let g=1;g<arguments.length;g++){const A=arguments[g];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=a.length||0;const S=A.length||0;a.length=d+S;for(let O=0;O<S;O++)a[d+O]=A[O]}else a.push(A)}}class x{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function N(a){o.setTimeout(()=>{throw a},0)}function D(){var a=v;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class V{constructor(){this.h=this.g=null}add(u,d){const g=G.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var G=new x(()=>new ve,a=>a.reset());class ve{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Je,Ne=!1,v=new V,_=()=>{const a=Promise.resolve(void 0);Je=()=>{a.then(b)}};function b(){for(var a;a=D();){try{a.h.call(a.g)}catch(d){N(d)}var u=G;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}Ne=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var C=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a})();function w(a){return/^[\s\xa0]*$/.test(a)}function Ge(a,u){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}p(Ge,E),Ge.prototype.init=function(a,u){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ge.Z.h.call(this)},Ge.prototype.h=function(){Ge.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var wn="closure_listenable_"+(Math.random()*1e6|0),ly=0;function uy(a,u,d,g,A){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=A,this.key=++ly,this.da=this.fa=!1}function Us(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function js(a,u,d){for(const g in a)u.call(d,a[g],g,a)}function hy(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function xl(a){const u={};for(const d in a)u[d]=a[d];return u}const Vl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Dl(a,u){let d,g;for(let A=1;A<arguments.length;A++){g=arguments[A];for(d in g)a[d]=g[d];for(let S=0;S<Vl.length;S++)d=Vl[S],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Bs(a){this.src=a,this.g={},this.h=0}Bs.prototype.add=function(a,u,d,g,A){const S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);const O=No(a,u,g,A);return O>-1?(u=a[O],d||(u.fa=!1)):(u=new uy(u,this.src,S,!!g,A),u.fa=d,a.push(u)),u};function Do(a,u){const d=u.type;if(d in a.g){var g=a.g[d],A=Array.prototype.indexOf.call(g,u,void 0),S;(S=A>=0)&&Array.prototype.splice.call(g,A,1),S&&(Us(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function No(a,u,d,g){for(let A=0;A<a.length;++A){const S=a[A];if(!S.da&&S.listener==u&&S.capture==!!d&&S.ha==g)return A}return-1}var Oo="closure_lm_"+(Math.random()*1e6|0),Lo={};function Nl(a,u,d,g,A){if(Array.isArray(u)){for(let S=0;S<u.length;S++)Nl(a,u[S],d,g,A);return null}return d=Ml(d),a&&a[wn]?a.J(u,d,c(g)?!!g.capture:!1,A):dy(a,u,d,!1,g,A)}function dy(a,u,d,g,A,S){if(!u)throw Error("Invalid event type");const O=c(A)?!!A.capture:!!A;let J=Fo(a);if(J||(a[Oo]=J=new Bs(a)),d=J.add(u,d,g,O,S),d.proxy)return d;if(g=fy(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)C||(A=O),A===void 0&&(A=!1),a.addEventListener(u.toString(),g,A);else if(a.attachEvent)a.attachEvent(Ll(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function fy(){function a(d){return u.call(a.src,a.listener,d)}const u=py;return a}function Ol(a,u,d,g,A){if(Array.isArray(u))for(var S=0;S<u.length;S++)Ol(a,u[S],d,g,A);else g=c(g)?!!g.capture:!!g,d=Ml(d),a&&a[wn]?(a=a.i,S=String(u).toString(),S in a.g&&(u=a.g[S],d=No(u,d,g,A),d>-1&&(Us(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[S],a.h--)))):a&&(a=Fo(a))&&(u=a.g[u.toString()],a=-1,u&&(a=No(u,d,g,A)),(d=a>-1?u[a]:null)&&Mo(d))}function Mo(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[wn])Do(u.i,a);else{var d=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(d,g,a.capture):u.detachEvent?u.detachEvent(Ll(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=Fo(u))?(Do(d,a),d.h==0&&(d.src=null,u[Oo]=null)):Us(a)}}}function Ll(a){return a in Lo?Lo[a]:Lo[a]="on"+a}function py(a,u){if(a.da)a=!0;else{u=new Ge(u,this);const d=a.listener,g=a.ha||a.src;a.fa&&Mo(a),a=d.call(g,u)}return a}function Fo(a){return a=a[Oo],a instanceof Bs?a:null}var Uo="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ml(a){return typeof a=="function"?a:(a[Uo]||(a[Uo]=function(u){return a.handleEvent(u)}),a[Uo])}function Oe(){I.call(this),this.i=new Bs(this),this.M=this,this.G=null}p(Oe,I),Oe.prototype[wn]=!0,Oe.prototype.removeEventListener=function(a,u,d,g){Ol(this,a,u,d,g)};function $e(a,u){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new E(u,a);else if(u instanceof E)u.target=u.target||a;else{var A=u;u=new E(g,a),Dl(u,A)}A=!0;let S,O;if(d)for(O=d.length-1;O>=0;O--)S=u.g=d[O],A=Hs(S,g,!0,u)&&A;if(S=u.g=a,A=Hs(S,g,!0,u)&&A,A=Hs(S,g,!1,u)&&A,d)for(O=0;O<d.length;O++)S=u.g=d[O],A=Hs(S,g,!1,u)&&A}Oe.prototype.N=function(){if(Oe.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let g=0;g<d.length;g++)Us(d[g]);delete a.g[u],a.h--}}this.G=null},Oe.prototype.J=function(a,u,d,g){return this.i.add(String(a),u,!1,d,g)},Oe.prototype.K=function(a,u,d,g){return this.i.add(String(a),u,!0,d,g)};function Hs(a,u,d,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let A=!0;for(let S=0;S<u.length;++S){const O=u[S];if(O&&!O.da&&O.capture==d){const J=O.listener,Ie=O.ha||O.src;O.fa&&Do(a.i,O),A=J.call(Ie,g)!==!1&&A}}return A&&!g.defaultPrevented}function gy(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function Fl(a){a.g=gy(()=>{a.g=null,a.i&&(a.i=!1,Fl(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class my extends I{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Fl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function kr(a){I.call(this),this.h=a,this.g={}}p(kr,I);var Ul=[];function jl(a){js(a.g,function(u,d){this.g.hasOwnProperty(d)&&Mo(u)},a),a.g={}}kr.prototype.N=function(){kr.Z.N.call(this),jl(this)},kr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jo=o.JSON.stringify,yy=o.JSON.parse,_y=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Bl(){}function Hl(){}var Pr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Bo(){E.call(this,"d")}p(Bo,E);function Ho(){E.call(this,"c")}p(Ho,E);var bn={},ql=null;function qs(){return ql=ql||new Oe}bn.Ia="serverreachability";function $l(a){E.call(this,bn.Ia,a)}p($l,E);function xr(a){const u=qs();$e(u,new $l(u))}bn.STAT_EVENT="statevent";function zl(a,u){E.call(this,bn.STAT_EVENT,a),this.stat=u}p(zl,E);function ze(a){const u=qs();$e(u,new zl(u,a))}bn.Ja="timingevent";function Gl(a,u){E.call(this,bn.Ja,a),this.size=u}p(Gl,E);function Vr(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Dr(){this.g=!0}Dr.prototype.ua=function(){this.g=!1};function wy(a,u,d,g,A,S){a.info(function(){if(a.g)if(S){var O="",J=S.split("&");for(let ae=0;ae<J.length;ae++){var Ie=J[ae].split("=");if(Ie.length>1){const Re=Ie[0];Ie=Ie[1];const yt=Re.split("_");O=yt.length>=2&&yt[1]=="type"?O+(Re+"="+Ie+"&"):O+(Re+"=redacted&")}}}else O=null;else O=S;return"XMLHTTP REQ ("+g+") [attempt "+A+"]: "+u+`
`+d+`
`+O})}function by(a,u,d,g,A,S,O){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+A+"]: "+u+`
`+d+`
`+S+" "+O})}function $n(a,u,d,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ey(a,d)+(g?" "+g:"")})}function Ty(a,u){a.info(function(){return"TIMEOUT: "+u})}Dr.prototype.info=function(){};function Ey(a,u){if(!a.g)return u;if(!u)return null;try{const S=JSON.parse(u);if(S){for(a=0;a<S.length;a++)if(Array.isArray(S[a])){var d=S[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var A=g[0];if(A!="noop"&&A!="stop"&&A!="close")for(let O=1;O<g.length;O++)g[O]=""}}}}return jo(S)}catch{return u}}var $s={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Wl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Jl;function qo(){}p(qo,Bl),qo.prototype.g=function(){return new XMLHttpRequest},Jl=new qo;function Nr(a){return encodeURIComponent(String(a))}function vy(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function Bt(a,u,d,g){this.j=a,this.i=u,this.l=d,this.S=g||1,this.V=new kr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Kl}function Kl(){this.i=null,this.g="",this.h=!1}var Ql={},$o={};function zo(a,u,d){a.M=1,a.A=Gs(mt(u)),a.u=d,a.R=!0,Yl(a,null)}function Yl(a,u){a.F=Date.now(),zs(a),a.B=mt(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),uu(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Kl,a.g=Su(a.j,d?u:null,!a.u),a.P>0&&(a.O=new my(h(a.Y,a,a.g),a.P)),u=a.V,d=a.g,g=a.ba;var A="readystatechange";Array.isArray(A)||(A&&(Ul[0]=A.toString()),A=Ul);for(let S=0;S<A.length;S++){const O=Nl(d,A[S],g||u.handleEvent,!1,u.h||u);if(!O)break;u.g[O.key]=O}u=a.J?xl(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),xr(),wy(a.i,a.v,a.B,a.l,a.S,a.u)}Bt.prototype.ba=function(a){a=a.target;const u=this.O;u&&$t(a)==3?u.j():this.Y(a)},Bt.prototype.Y=function(a){try{if(a==this.g)e:{const J=$t(this.g),Ie=this.g.ya(),ae=this.g.ca();if(!(J<3)&&(J!=3||this.g&&(this.h.h||this.g.la()||yu(this.g)))){this.K||J!=4||Ie==7||(Ie==8||ae<=0?xr(3):xr(2)),Go(this);var u=this.g.ca();this.X=u;var d=Iy(this);if(this.o=u==200,by(this.i,this.v,this.B,this.l,this.S,J,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,A=this.g;if((g=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(g)){var S=g;break t}}S=null}if(a=S)$n(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Wo(this,a);else{this.o=!1,this.m=3,ze(12),Tn(this),Or(this);break e}}if(this.R){a=!0;let Re;for(;!this.K&&this.C<d.length;)if(Re=Ay(this,d),Re==$o){J==4&&(this.m=4,ze(14),a=!1),$n(this.i,this.l,null,"[Incomplete Response]");break}else if(Re==Ql){this.m=4,ze(15),$n(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else $n(this.i,this.l,Re,null),Wo(this,Re);if(Xl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),J!=4||d.length!=0||this.h.h||(this.m=1,ze(16),a=!1),this.o=this.o&&a,!a)$n(this.i,this.l,d,"[Invalid Chunked Response]"),Tn(this),Or(this);else if(d.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),ta(O),O.P=!0,ze(11))}}else $n(this.i,this.l,d,null),Wo(this,d);J==4&&Tn(this),this.o&&!this.K&&(J==4?Iu(this.j,this):(this.o=!1,zs(this)))}else Uy(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,ze(12)):(this.m=0,ze(13)),Tn(this),Or(this)}}}catch{}finally{}};function Iy(a){if(!Xl(a))return a.g.la();const u=yu(a.g);if(u==="")return"";let d="";const g=u.length,A=$t(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Tn(a),Or(a),"";a.h.i=new o.TextDecoder}for(let S=0;S<g;S++)a.h.h=!0,d+=a.h.i.decode(u[S],{stream:!(A&&S==g-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function Xl(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Ay(a,u){var d=a.C,g=u.indexOf(`
`,d);return g==-1?$o:(d=Number(u.substring(d,g)),isNaN(d)?Ql:(g+=1,g+d>u.length?$o:(u=u.slice(g,g+d),a.C=g+d,u)))}Bt.prototype.cancel=function(){this.K=!0,Tn(this)};function zs(a){a.T=Date.now()+a.H,Zl(a,a.H)}function Zl(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Vr(h(a.aa,a),u)}function Go(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Bt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Ty(this.i,this.B),this.M!=2&&(xr(),ze(17)),Tn(this),this.m=2,Or(this)):Zl(this,this.T-a)};function Or(a){a.j.I==0||a.K||Iu(a.j,a)}function Tn(a){Go(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,jl(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function Wo(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||Jo(d.h,a))){if(!a.L&&Jo(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var A=g;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Ys(d),Ks(d);else break e;ea(d),ze(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Vr(h(d.Va,d),6e3));nu(d.h)<=1&&d.ta&&(d.ta=void 0)}else vn(d,11)}else if((a.L||d.g==a)&&Ys(d),!w(u))for(A=d.Ba.g.parse(u),u=0;u<A.length;u++){let ae=A[u];const Re=ae[0];if(!(Re<=d.K))if(d.K=Re,ae=ae[1],d.I==2)if(ae[0]=="c"){d.M=ae[1],d.ba=ae[2];const yt=ae[3];yt!=null&&(d.ka=yt,d.j.info("VER="+d.ka));const In=ae[4];In!=null&&(d.za=In,d.j.info("SVER="+d.za));const zt=ae[5];zt!=null&&typeof zt=="number"&&zt>0&&(g=1.5*zt,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Gt=a.g;if(Gt){const Zs=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zs){var S=g.h;S.g||Zs.indexOf("spdy")==-1&&Zs.indexOf("quic")==-1&&Zs.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Ko(S,S.h),S.h=null))}if(g.G){const na=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;na&&(g.wa=na,le(g.J,g.G,na))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var O=a;if(g.na=Ru(g,g.L?g.ba:null,g.W),O.L){ru(g.h,O);var J=O,Ie=g.O;Ie&&(J.H=Ie),J.D&&(Go(J),zs(J)),g.g=O}else Eu(g);d.i.length>0&&Qs(d)}else ae[0]!="stop"&&ae[0]!="close"||vn(d,7);else d.I==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?vn(d,7):Zo(d):ae[0]!="noop"&&d.l&&d.l.qa(ae),d.A=0)}}xr(4)}catch{}}var Cy=class{constructor(a,u){this.g=a,this.map=u}};function eu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function tu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function nu(a){return a.h?1:a.g?a.g.size:0}function Jo(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Ko(a,u){a.g?a.g.add(u):a.h=u}function ru(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}eu.prototype.cancel=function(){if(this.i=su(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function su(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return y(a.i)}var iu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ry(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let A,S=null;g>=0?(A=a[d].substring(0,g),S=a[d].substring(g+1)):A=a[d],u(A,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Ht(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Ht?(this.l=a.l,Lr(this,a.j),this.o=a.o,this.g=a.g,Mr(this,a.u),this.h=a.h,Qo(this,hu(a.i)),this.m=a.m):a&&(u=String(a).match(iu))?(this.l=!1,Lr(this,u[1]||"",!0),this.o=Fr(u[2]||""),this.g=Fr(u[3]||"",!0),Mr(this,u[4]),this.h=Fr(u[5]||"",!0),Qo(this,u[6]||"",!0),this.m=Fr(u[7]||"")):(this.l=!1,this.i=new jr(null,this.l))}Ht.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Ur(u,ou,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ur(u,ou,!0),"@"),a.push(Nr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ur(d,d.charAt(0)=="/"?Py:ky,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ur(d,Vy)),a.join("")},Ht.prototype.resolve=function(a){const u=mt(this);let d=!!a.j;d?Lr(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var g=a.h;if(d)Mr(u,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var A=u.h.lastIndexOf("/");A!=-1&&(g=u.h.slice(0,A+1)+g)}if(A=g,A==".."||A==".")g="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){g=A.lastIndexOf("/",0)==0,A=A.split("/");const S=[];for(let O=0;O<A.length;){const J=A[O++];J=="."?g&&O==A.length&&S.push(""):J==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),g&&O==A.length&&S.push("")):(S.push(J),g=!0)}g=S.join("/")}else g=A}return d?u.h=g:d=a.i.toString()!=="",d?Qo(u,hu(a.i)):d=!!a.m,d&&(u.m=a.m),u};function mt(a){return new Ht(a)}function Lr(a,u,d){a.j=d?Fr(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Mr(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Qo(a,u,d){u instanceof jr?(a.i=u,Dy(a.i,a.l)):(d||(u=Ur(u,xy)),a.i=new jr(u,a.l))}function le(a,u,d){a.i.set(u,d)}function Gs(a){return le(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Fr(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ur(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Sy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Sy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ou=/[#\/\?@]/g,ky=/[#\?:]/g,Py=/[#\?]/g,xy=/[#\?@]/g,Vy=/#/g;function jr(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function En(a){a.g||(a.g=new Map,a.h=0,a.i&&Ry(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=jr.prototype,n.add=function(a,u){En(this),this.i=null,a=zn(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function au(a,u){En(a),u=zn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function cu(a,u){return En(a),u=zn(a,u),a.g.has(u)}n.forEach=function(a,u){En(this),this.g.forEach(function(d,g){d.forEach(function(A){a.call(u,A,g,this)},this)},this)};function lu(a,u){En(a);let d=[];if(typeof u=="string")cu(a,u)&&(d=d.concat(a.g.get(zn(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}n.set=function(a,u){return En(this),this.i=null,a=zn(this,a),cu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=lu(this,a),a.length>0?String(a[0]):u):u};function uu(a,u,d){au(a,u),d.length>0&&(a.i=null,a.g.set(zn(a,u),y(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var d=u[g];const A=Nr(d);d=lu(this,d);for(let S=0;S<d.length;S++){let O=A;d[S]!==""&&(O+="="+Nr(d[S])),a.push(O)}}return this.i=a.join("&")};function hu(a){const u=new jr;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function zn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Dy(a,u){u&&!a.j&&(En(a),a.i=null,a.g.forEach(function(d,g){const A=g.toLowerCase();g!=A&&(au(this,g),uu(this,A,d))},a)),a.j=u}function Ny(a,u){const d=new Dr;if(o.Image){const g=new Image;g.onload=f(qt,d,"TestLoadImage: loaded",!0,u,g),g.onerror=f(qt,d,"TestLoadImage: error",!1,u,g),g.onabort=f(qt,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=f(qt,d,"TestLoadImage: timeout",!1,u,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function Oy(a,u){const d=new Dr,g=new AbortController,A=setTimeout(()=>{g.abort(),qt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(S=>{clearTimeout(A),S.ok?qt(d,"TestPingServer: ok",!0,u):qt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),qt(d,"TestPingServer: error",!1,u)})}function qt(a,u,d,g,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),g(d)}catch{}}function Ly(){this.g=new _y}function Yo(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Yo,Bl),Yo.prototype.g=function(){return new Ws(this.i,this.h)};function Ws(a,u){Oe.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Ws,Oe),n=Ws.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Hr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Br(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Hr(this)),this.g&&(this.readyState=3,Hr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;du(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function du(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Br(this):Hr(this),this.readyState==3&&du(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Br(this))},n.Na=function(a){this.g&&(this.response=a,Br(this))},n.ga=function(){this.g&&Br(this)};function Br(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Hr(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Hr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ws.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function fu(a){let u="";return js(a,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function Xo(a,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=fu(d),typeof a=="string"?d!=null&&Nr(d):le(a,u,d))}function pe(a){Oe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(pe,Oe);var My=/^https?$/i,Fy=["POST","PUT"];n=pe.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Jl.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(S){pu(this,S);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var A in g)d.set(A,g[A]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const S of g.keys())d.set(S,g.get(S));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),A=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Fy,u,void 0)>=0)||g||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,O]of d)this.g.setRequestHeader(S,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(S){pu(this,S)}};function pu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,gu(a),Js(a)}function gu(a){a.A||(a.A=!0,$e(a,"complete"),$e(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,$e(this,"complete"),$e(this,"abort"),Js(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Js(this,!0)),pe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?mu(this):this.Xa())},n.Xa=function(){mu(this)};function mu(a){if(a.h&&typeof i<"u"){if(a.v&&$t(a)==4)setTimeout(a.Ca.bind(a),0);else if($e(a,"readystatechange"),$t(a)==4){a.h=!1;try{const S=a.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=S===0){let O=String(a.D).match(iu)[1]||null;!O&&o.self&&o.self.location&&(O=o.self.location.protocol.slice(0,-1)),g=!My.test(O?O.toLowerCase():"")}d=g}if(d)$e(a,"complete"),$e(a,"success");else{a.o=6;try{var A=$t(a)>2?a.g.statusText:""}catch{A=""}a.l=A+" ["+a.ca()+"]",gu(a)}}finally{Js(a)}}}}function Js(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||$e(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function $t(a){return a.g?a.g.readyState:0}n.ca=function(){try{return $t(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),yy(u)}};function yu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Uy(a){const u={};a=(a.g&&$t(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(w(a[g]))continue;var d=vy(a[g]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=u[A]||[];u[A]=S,S.push(d)}hy(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function qr(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function _u(a){this.za=0,this.i=[],this.j=new Dr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=qr("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=qr("baseRetryDelayMs",5e3,a),this.Za=qr("retryDelaySeedMs",1e4,a),this.Ta=qr("forwardChannelMaxRetries",2,a),this.va=qr("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new eu(a&&a.concurrentRequestLimit),this.Ba=new Ly,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=_u.prototype,n.ka=8,n.I=1,n.connect=function(a,u,d,g){ze(0),this.W=a,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Ru(this,null,this.W),Qs(this)};function Zo(a){if(wu(a),a.I==3){var u=a.V++,d=mt(a.J);if(le(d,"SID",a.M),le(d,"RID",u),le(d,"TYPE","terminate"),$r(a,d),u=new Bt(a,a.j,u),u.M=2,u.A=Gs(mt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=Su(u.j,null),u.g.ea(u.A)),u.F=Date.now(),zs(u)}Cu(a)}function Ks(a){a.g&&(ta(a),a.g.cancel(),a.g=null)}function wu(a){Ks(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ys(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Qs(a){if(!tu(a.h)&&!a.m){a.m=!0;var u=a.Ea;Je||_(),Ne||(Je(),Ne=!0),v.add(u,a),a.D=0}}function jy(a,u){return nu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Vr(h(a.Ea,a,u),Au(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const A=new Bt(this,this.j,a);let S=this.o;if(this.U&&(S?(S=xl(S),Dl(S,this.U)):S=this.U),this.u!==null||this.R||(A.J=S,S=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Tu(this,A,u),d=mt(this.J),le(d,"RID",a),le(d,"CVER",22),this.G&&le(d,"X-HTTP-Session-Id",this.G),$r(this,d),S&&(this.R?u="headers="+Nr(fu(S))+"&"+u:this.u&&Xo(d,this.u,S)),Ko(this.h,A),this.Ra&&le(d,"TYPE","init"),this.S?(le(d,"$req",u),le(d,"SID","null"),A.U=!0,zo(A,d,null)):zo(A,d,u),this.I=2}}else this.I==3&&(a?bu(this,a):this.i.length==0||tu(this.h)||bu(this))};function bu(a,u){var d;u?d=u.l:d=a.V++;const g=mt(a.J);le(g,"SID",a.M),le(g,"RID",d),le(g,"AID",a.K),$r(a,g),a.u&&a.o&&Xo(g,a.u,a.o),d=new Bt(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=Tu(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ko(a.h,d),zo(d,g,u)}function $r(a,u){a.H&&js(a.H,function(d,g){le(u,g,d)}),a.l&&js({},function(d,g){le(u,g,d)})}function Tu(a,u,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var A=a.i;let J=-1;for(;;){const Ie=["count="+d];J==-1?d>0?(J=A[0].g,Ie.push("ofs="+J)):J=0:Ie.push("ofs="+J);let ae=!0;for(let Re=0;Re<d;Re++){var S=A[Re].g;const yt=A[Re].map;if(S-=J,S<0)J=Math.max(0,A[Re].g-100),ae=!1;else try{S="req"+S+"_"||"";try{var O=yt instanceof Map?yt:Object.entries(yt);for(const[In,zt]of O){let Gt=zt;c(zt)&&(Gt=jo(zt)),Ie.push(S+In+"="+encodeURIComponent(Gt))}}catch(In){throw Ie.push(S+"type="+encodeURIComponent("_badmap")),In}}catch{g&&g(yt)}}if(ae){O=Ie.join("&");break e}}O=void 0}return a=a.i.splice(0,d),u.G=a,O}function Eu(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;Je||_(),Ne||(Je(),Ne=!0),v.add(u,a),a.A=0}}function ea(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Vr(h(a.Da,a),Au(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,vu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Vr(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ze(10),Ks(this),vu(this))};function ta(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function vu(a){a.g=new Bt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=mt(a.na);le(u,"RID","rpc"),le(u,"SID",a.M),le(u,"AID",a.K),le(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&le(u,"TO",a.ia),le(u,"TYPE","xmlhttp"),$r(a,u),a.u&&a.o&&Xo(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Gs(mt(u)),d.u=null,d.R=!0,Yl(d,a)}n.Va=function(){this.C!=null&&(this.C=null,Ks(this),ea(this),ze(19))};function Ys(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Iu(a,u){var d=null;if(a.g==u){Ys(a),ta(a),a.g=null;var g=2}else if(Jo(a.h,u))d=u.G,ru(a.h,u),g=1;else return;if(a.I!=0){if(u.o)if(g==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var A=a.D;g=qs(),$e(g,new Gl(g,d)),Qs(a)}else Eu(a);else if(A=u.m,A==3||A==0&&u.X>0||!(g==1&&jy(a,u)||g==2&&ea(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),A){case 1:vn(a,5);break;case 4:vn(a,10);break;case 3:vn(a,6);break;default:vn(a,2)}}}function Au(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function vn(a,u){if(a.j.info("Error code "+u),u==2){var d=h(a.bb,a),g=a.Ua;const A=!g;g=new Ht(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Lr(g,"https"),Gs(g),A?Ny(g.toString(),d):Oy(g.toString(),d)}else ze(2);a.I=0,a.l&&a.l.pa(u),Cu(a),wu(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function Cu(a){if(a.I=0,a.ja=[],a.l){const u=su(a.h);(u.length!=0||a.i.length!=0)&&(R(a.ja,u),R(a.ja,a.i),a.h.i.length=0,y(a.i),a.i.length=0),a.l.oa()}}function Ru(a,u,d){var g=d instanceof Ht?mt(d):new Ht(d);if(g.g!="")u&&(g.g=u+"."+g.g),Mr(g,g.u);else{var A=o.location;g=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;const S=new Ht(null);g&&Lr(S,g),u&&(S.g=u),A&&Mr(S,A),d&&(S.h=d),g=S}return d=a.G,u=a.wa,d&&u&&le(g,d,u),le(g,"VER",a.ka),$r(a,g),g}function Su(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new pe(new Yo({ab:d})):new pe(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ku(){}n=ku.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Xs(){}Xs.prototype.g=function(a,u){return new Ke(a,u)};function Ke(a,u){Oe.call(this),this.g=new _u(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!w(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!w(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Gn(this)}p(Ke,Oe),Ke.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ke.prototype.close=function(){Zo(this.g)},Ke.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=jo(a),a=d);u.i.push(new Cy(u.Ya++,a)),u.I==3&&Qs(u)},Ke.prototype.N=function(){this.g.l=null,delete this.j,Zo(this.g),delete this.g,Ke.Z.N.call(this)};function Pu(a){Bo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}p(Pu,Bo);function xu(){Ho.call(this),this.status=1}p(xu,Ho);function Gn(a){this.g=a}p(Gn,ku),Gn.prototype.ra=function(){$e(this.g,"a")},Gn.prototype.qa=function(a){$e(this.g,new Pu(a))},Gn.prototype.pa=function(a){$e(this.g,new xu)},Gn.prototype.oa=function(){$e(this.g,"b")},Xs.prototype.createWebChannel=Xs.prototype.g,Ke.prototype.send=Ke.prototype.o,Ke.prototype.open=Ke.prototype.m,Ke.prototype.close=Ke.prototype.close,sg=function(){return new Xs},rg=function(){return qs()},ng=bn,Ha={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},$s.NO_ERROR=0,$s.TIMEOUT=8,$s.HTTP_ERROR=6,pi=$s,Wl.COMPLETE="complete",tg=Wl,Hl.EventType=Pr,Pr.OPEN="a",Pr.CLOSE="b",Pr.ERROR="c",Pr.MESSAGE="d",Oe.prototype.listen=Oe.prototype.J,Wr=Hl,pe.prototype.listenOnce=pe.prototype.K,pe.prototype.getLastError=pe.prototype.Ha,pe.prototype.getLastErrorCode=pe.prototype.ya,pe.prototype.getStatus=pe.prototype.ca,pe.prototype.getResponseJson=pe.prototype.La,pe.prototype.getResponseText=pe.prototype.la,pe.prototype.send=pe.prototype.ea,pe.prototype.setWithCredentials=pe.prototype.Fa,eg=pe}).apply(typeof ni<"u"?ni:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
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
 */let Ir="12.8.0";function cI(n){Ir=n}/**
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
 */const On=new Ac("@firebase/firestore");function Yn(){return On.logLevel}function M(n,...e){if(On.logLevel<=Q.DEBUG){const t=e.map(Uc);On.debug(`Firestore (${Ir}): ${n}`,...t)}}function Mt(n,...e){if(On.logLevel<=Q.ERROR){const t=e.map(Uc);On.error(`Firestore (${Ir}): ${n}`,...t)}}function ur(n,...e){if(On.logLevel<=Q.WARN){const t=e.map(Uc);On.warn(`Firestore (${Ir}): ${n}`,...t)}}function Uc(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function B(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,ig(n,r,t)}function ig(n,e,t){let r=`FIRESTORE (${Ir}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Mt(r),new Error(r)}function re(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||ig(e,s,r)}function z(n,e){return n}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Ut{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class og{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Fe.UNAUTHENTICATED)))}shutdown(){}}class uI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class hI{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){re(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Vt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vt,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vt)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string",31837,{l:r}),new og(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string",2055,{h:e}),new Fe(e)}}class dI{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class fI{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new dI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Fe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class vh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ze(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){re(this.o===void 0,3512);const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new vh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new vh(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function gI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class jc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=gI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function Y(n,e){return n<e?-1:n>e?1:0}function qa(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return fa(s)===fa(i)?Y(s,i):fa(s)?1:-1}return Y(n.length,e.length)}const mI=55296,yI=57343;function fa(n){const e=n.charCodeAt(0);return e>=mI&&e<=yI}function hr(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const Ih="__name__";class _t{constructor(e,t,r){t===void 0?t=0:t>e.length&&B(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&B(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return _t.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _t?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=_t.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return Y(e.length,t.length)}static compareSegments(e,t){const r=_t.isNumericId(e),s=_t.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?_t.extractNumericId(e).compare(_t.extractNumericId(t)):qa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return cn.fromString(e.substring(4,e.length-2))}}class ce extends _t{construct(e,t,r){return new ce(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ce(t)}static emptyPath(){return new ce([])}}const _I=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends _t{construct(e,t,r){return new Ve(e,t,r)}static isValidIdentifier(e){return _I.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ih}static keyField(){return new Ve([Ih])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new L(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new L(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(t)}static emptyPath(){return new Ve([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(ce.fromString(e))}static fromName(e){return new j(ce.fromString(e).popFirst(5))}static empty(){return new j(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new ce(e.slice()))}}/**
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
 */function ag(n,e,t){if(!t)throw new L(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function wI(n,e,t,r){if(e===!0&&r===!0)throw new L(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ah(n){if(!j.isDocumentKey(n))throw new L(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ch(n){if(j.isDocumentKey(n))throw new L(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function cg(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function uo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B(12329,{type:typeof n})}function rt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=uo(n);throw new L(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ee(n,e){const t={typeString:n};return e&&(t.value=e),t}function xs(n,e){if(!cg(n))throw new L(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new L(k.INVALID_ARGUMENT,t);return!0}/**
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
 */const Rh=-62135596800,Sh=1e6;class ue{static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Sh);return new ue(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Rh)throw new L(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Sh}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ue._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(xs(e,ue._jsonSchema))return new ue(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ue._jsonSchemaVersion="firestore/timestamp/1.0",ue._jsonSchema={type:Ee("string",ue._jsonSchemaVersion),seconds:Ee("number"),nanoseconds:Ee("number")};/**
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
 */class ${static fromTimestamp(e){return new $(e)}static min(){return new $(new ue(0,0))}static max(){return new $(new ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const hs=-1;function bI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=$.fromTimestamp(r===1e9?new ue(t+1,0):new ue(t,r));return new hn(s,j.empty(),e)}function TI(n){return new hn(n.readTime,n.key,hs)}class hn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new hn($.min(),j.empty(),hs)}static max(){return new hn($.max(),j.empty(),hs)}}function EI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
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
 */const vI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class II{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ar(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==vI)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):P.reject(t)}static resolve(e){return new P(((t,r)=>{t(e)}))}static reject(e){return new P(((t,r)=>{r(e)}))}static waitFor(e){return new P(((t,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&t()}),(l=>r(l)))})),o=!0,i===s&&t()}))}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next((s=>s?P.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new P(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next((f=>{o[h]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,t){return new P(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function AI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Cr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ho{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ho.ce=-1;/**
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
 */const Bc=-1;function fo(n){return n==null}function Ni(n){return n===0&&1/n==-1/0}function CI(n){return typeof n=="number"&&Number.isInteger(n)&&!Ni(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const lg="";function RI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=kh(e)),e=SI(n.get(t),e);return kh(e)}function SI(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case lg:t+="";break;default:t+=i}}return t}function kh(n){return n+lg+""}/**
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
 */function Ph(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Un(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ug(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class fe{constructor(e,t){this.comparator=e,this.root=t||xe.EMPTY}insert(e,t){return new fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ri(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ri(this.root,e,this.comparator,!1)}getReverseIterator(){return new ri(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ri(this.root,e,this.comparator,!0)}}class ri{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??xe.RED,this.left=s??xe.EMPTY,this.right=i??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new xe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw B(43730,{key:this.key,value:this.value});if(this.right.isRed())throw B(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw B(27949);return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw B(57766)}get value(){throw B(16141)}get color(){throw B(16727)}get left(){throw B(29726)}get right(){throw B(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ce{constructor(e){this.comparator=e,this.data=new fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xh(this.data.getIterator())}getIteratorFrom(e){return new xh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ce(this.comparator);return t.data=e,t}}class xh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class at{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new at([])}unionWith(e){let t=new Ce(Ve.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new at(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return hr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class hg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class De{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new hg("Invalid base64 string: "+i):i}})(e);return new De(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new De(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}De.EMPTY_BYTE_STRING=new De("");const kI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dn(n){if(re(!!n,39018),typeof n=="string"){let e=0;const t=kI.exec(n);if(re(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(n.seconds),nanos:ye(n.nanos)}}function ye(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fn(n){return typeof n=="string"?De.fromBase64String(n):De.fromUint8Array(n)}/**
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
 */const dg="server_timestamp",fg="__type__",pg="__previous_value__",gg="__local_write_time__";function Hc(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[fg])==null?void 0:r.stringValue)===dg}function po(n){const e=n.mapValue.fields[pg];return Hc(e)?po(e):e}function ds(n){const e=dn(n.mapValue.fields[gg].timestampValue);return new ue(e.seconds,e.nanos)}/**
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
 */class PI{constructor(e,t,r,s,i,o,c,l,h,f,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const Oi="(default)";class fs{constructor(e,t){this.projectId=e,this.database=t||Oi}static empty(){return new fs("","")}get isDefaultDatabase(){return this.database===Oi}isEqual(e){return e instanceof fs&&e.projectId===this.projectId&&e.database===this.database}}function xI(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new L(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fs(n.options.projectId,e)}/**
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
 */const mg="__type__",VI="__max__",si={mapValue:{}},yg="__vector__",Li="value";function pn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Hc(n)?4:NI(n)?9007199254740991:DI(n)?10:11:B(28295,{value:n})}function It(n,e){if(n===e)return!0;const t=pn(n);if(t!==pn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ds(n).isEqual(ds(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=dn(s.timestampValue),c=dn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return fn(s.bytesValue).isEqual(fn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return ye(s.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(s.geoPointValue.longitude)===ye(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return ye(s.integerValue)===ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ye(s.doubleValue),c=ye(i.doubleValue);return o===c?Ni(o)===Ni(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return hr(n.arrayValue.values||[],e.arrayValue.values||[],It);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Ph(o)!==Ph(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!It(o[l],c[l])))return!1;return!0})(n,e);default:return B(52216,{left:n})}}function ps(n,e){return(n.values||[]).find((t=>It(t,e)))!==void 0}function dr(n,e){if(n===e)return 0;const t=pn(n),r=pn(e);if(t!==r)return Y(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=ye(i.integerValue||i.doubleValue),l=ye(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return Vh(n.timestampValue,e.timestampValue);case 4:return Vh(ds(n),ds(e));case 5:return qa(n.stringValue,e.stringValue);case 6:return(function(i,o){const c=fn(i),l=fn(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=Y(c[h],l[h]);if(f!==0)return f}return Y(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=Y(ye(i.latitude),ye(o.latitude));return c!==0?c:Y(ye(i.longitude),ye(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Dh(n.arrayValue,e.arrayValue);case 10:return(function(i,o){var m,y,R,x;const c=i.fields||{},l=o.fields||{},h=(m=c[Li])==null?void 0:m.arrayValue,f=(y=l[Li])==null?void 0:y.arrayValue,p=Y(((R=h==null?void 0:h.values)==null?void 0:R.length)||0,((x=f==null?void 0:f.values)==null?void 0:x.length)||0);return p!==0?p:Dh(h,f)})(n.mapValue,e.mapValue);case 11:return(function(i,o){if(i===si.mapValue&&o===si.mapValue)return 0;if(i===si.mapValue)return 1;if(o===si.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=qa(l[p],f[p]);if(m!==0)return m;const y=dr(c[l[p]],h[f[p]]);if(y!==0)return y}return Y(l.length,f.length)})(n.mapValue,e.mapValue);default:throw B(23264,{he:t})}}function Vh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=dn(n),r=dn(e),s=Y(t.seconds,r.seconds);return s!==0?s:Y(t.nanos,r.nanos)}function Dh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=dr(t[s],r[s]);if(i)return i}return Y(t.length,r.length)}function fr(n){return $a(n)}function $a(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=dn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return fn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return j.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=$a(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${$a(t.fields[o])}`;return s+"}"})(n.mapValue):B(61005,{value:n})}function gi(n){switch(pn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=po(n);return e?16+gi(e):16;case 5:return 2*n.stringValue.length;case 6:return fn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+gi(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Un(r.fields,((i,o)=>{s+=i.length+gi(o)})),s})(n.mapValue);default:throw B(13486,{value:n})}}function Nh(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function za(n){return!!n&&"integerValue"in n}function qc(n){return!!n&&"arrayValue"in n}function Oh(n){return!!n&&"nullValue"in n}function Lh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function mi(n){return!!n&&"mapValue"in n}function DI(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[mg])==null?void 0:r.stringValue)===yg}function ts(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Un(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=ts(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ts(n.arrayValue.values[t]);return e}return{...n}}function NI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===VI}/**
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
 */class et{constructor(e){this.value=e}static empty(){return new et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!mi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ts(t)}setAll(e){let t=Ve.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=ts(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());mi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return It(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];mi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Un(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new et(ts(this.value))}}function _g(n){const e=[];return Un(n.fields,((t,r)=>{const s=new Ve([t]);if(mi(r)){const i=_g(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new at(e)}/**
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
 */class Ue{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Ue(e,0,$.min(),$.min(),$.min(),et.empty(),0)}static newFoundDocument(e,t,r,s){return new Ue(e,1,t,$.min(),r,s,0)}static newNoDocument(e,t){return new Ue(e,2,t,$.min(),$.min(),et.empty(),0)}static newUnknownDocument(e,t){return new Ue(e,3,t,$.min(),$.min(),et.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Mi{constructor(e,t){this.position=e,this.inclusive=t}}function Mh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),t.key):r=dr(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!It(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Fi{constructor(e,t="asc"){this.field=e,this.dir=t}}function OI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class wg{}class be extends wg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new MI(e,t,r):t==="array-contains"?new jI(e,r):t==="in"?new BI(e,r):t==="not-in"?new HI(e,r):t==="array-contains-any"?new qI(e,r):new be(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new FI(e,r):new UI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(dr(t,this.value)):t!==null&&pn(this.value)===pn(t)&&this.matchesComparison(dr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gt extends wg{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new gt(e,t)}matches(e){return bg(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function bg(n){return n.op==="and"}function Tg(n){return LI(n)&&bg(n)}function LI(n){for(const e of n.filters)if(e instanceof gt)return!1;return!0}function Ga(n){if(n instanceof be)return n.field.canonicalString()+n.op.toString()+fr(n.value);if(Tg(n))return n.filters.map((e=>Ga(e))).join(",");{const e=n.filters.map((t=>Ga(t))).join(",");return`${n.op}(${e})`}}function Eg(n,e){return n instanceof be?(function(r,s){return s instanceof be&&r.op===s.op&&r.field.isEqual(s.field)&&It(r.value,s.value)})(n,e):n instanceof gt?(function(r,s){return s instanceof gt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&Eg(o,s.filters[c])),!0):!1})(n,e):void B(19439)}function vg(n){return n instanceof be?(function(t){return`${t.field.canonicalString()} ${t.op} ${fr(t.value)}`})(n):n instanceof gt?(function(t){return t.op.toString()+" {"+t.getFilters().map(vg).join(" ,")+"}"})(n):"Filter"}class MI extends be{constructor(e,t,r){super(e,t,r),this.key=j.fromName(r.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class FI extends be{constructor(e,t){super(e,"in",t),this.keys=Ig("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class UI extends be{constructor(e,t){super(e,"not-in",t),this.keys=Ig("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ig(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>j.fromName(r.referenceValue)))}class jI extends be{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qc(t)&&ps(t.arrayValue,this.value)}}class BI extends be{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ps(this.value.arrayValue,t)}}class HI extends be{constructor(e,t){super(e,"not-in",t)}matches(e){if(ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ps(this.value.arrayValue,t)}}class qI extends be{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ps(this.value.arrayValue,r)))}}/**
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
 */class $I{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Uh(n,e=null,t=[],r=[],s=null,i=null,o=null){return new $I(n,e,t,r,s,i,o)}function $c(n){const e=z(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Ga(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),fo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>fr(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>fr(r))).join(",")),e.Te=t}return e.Te}function zc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!OI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Eg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Fh(n.startAt,e.startAt)&&Fh(n.endAt,e.endAt)}function Wa(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Vs{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function zI(n,e,t,r,s,i,o,c){return new Vs(n,e,t,r,s,i,o,c)}function go(n){return new Vs(n)}function jh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function GI(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ag(n){return n.collectionGroup!==null}function ns(n){const e=z(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ce(Ve.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Fi(i,r))})),t.has(Ve.keyField().canonicalString())||e.Ie.push(new Fi(Ve.keyField(),r))}return e.Ie}function bt(n){const e=z(n);return e.Ee||(e.Ee=WI(e,ns(n))),e.Ee}function WI(n,e){if(n.limitType==="F")return Uh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Fi(s.field,i)}));const t=n.endAt?new Mi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Mi(n.startAt.position,n.startAt.inclusive):null;return Uh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ja(n,e){const t=n.filters.concat([e]);return new Vs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ka(n,e,t){return new Vs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function mo(n,e){return zc(bt(n),bt(e))&&n.limitType===e.limitType}function Cg(n){return`${$c(bt(n))}|lt:${n.limitType}`}function Xn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>vg(s))).join(", ")}]`),fo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>fr(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>fr(s))).join(",")),`Target(${r})`})(bt(n))}; limitType=${n.limitType})`}function yo(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):j.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of ns(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const h=Mh(o,c,l);return o.inclusive?h<=0:h<0})(r.startAt,ns(r),s)||r.endAt&&!(function(o,c,l){const h=Mh(o,c,l);return o.inclusive?h>=0:h>0})(r.endAt,ns(r),s))})(n,e)}function JI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Rg(n){return(e,t)=>{let r=!1;for(const s of ns(n)){const i=KI(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function KI(n,e,t){const r=n.field.isKeyField()?j.comparator(e.key,t.key):(function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?dr(l,h):B(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B(19790,{direction:n.dir})}}/**
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
 */class jn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Un(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return ug(this.inner)}size(){return this.innerSize}}/**
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
 */const QI=new fe(j.comparator);function Ft(){return QI}const Sg=new fe(j.comparator);function Jr(...n){let e=Sg;for(const t of n)e=e.insert(t.key,t);return e}function kg(n){let e=Sg;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Sn(){return rs()}function Pg(){return rs()}function rs(){return new jn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const YI=new fe(j.comparator),XI=new Ce(j.comparator);function X(...n){let e=XI;for(const t of n)e=e.add(t);return e}const ZI=new Ce(Y);function eA(){return ZI}/**
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
 */function Gc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ni(e)?"-0":e}}function xg(n){return{integerValue:""+n}}function tA(n,e){return CI(e)?xg(e):Gc(n,e)}/**
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
 */class _o{constructor(){this._=void 0}}function nA(n,e,t){return n instanceof gs?(function(s,i){const o={fields:{[fg]:{stringValue:dg},[gg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Hc(i)&&(i=po(i)),i&&(o.fields[pg]=i),{mapValue:o}})(t,e):n instanceof ms?Dg(n,e):n instanceof ys?Ng(n,e):(function(s,i){const o=Vg(s,i),c=Bh(o)+Bh(s.Ae);return za(o)&&za(s.Ae)?xg(c):Gc(s.serializer,c)})(n,e)}function rA(n,e,t){return n instanceof ms?Dg(n,e):n instanceof ys?Ng(n,e):t}function Vg(n,e){return n instanceof Ui?(function(r){return za(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class gs extends _o{}class ms extends _o{constructor(e){super(),this.elements=e}}function Dg(n,e){const t=Og(e);for(const r of n.elements)t.some((s=>It(s,r)))||t.push(r);return{arrayValue:{values:t}}}class ys extends _o{constructor(e){super(),this.elements=e}}function Ng(n,e){let t=Og(e);for(const r of n.elements)t=t.filter((s=>!It(s,r)));return{arrayValue:{values:t}}}class Ui extends _o{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Bh(n){return ye(n.integerValue||n.doubleValue)}function Og(n){return qc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class sA{constructor(e,t){this.field=e,this.transform=t}}function iA(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof ms&&s instanceof ms||r instanceof ys&&s instanceof ys?hr(r.elements,s.elements,It):r instanceof Ui&&s instanceof Ui?It(r.Ae,s.Ae):r instanceof gs&&s instanceof gs})(n.transform,e.transform)}class oA{constructor(e,t){this.version=e,this.transformResults=t}}class ht{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ht}static exists(e){return new ht(void 0,e)}static updateTime(e){return new ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class wo{}function Lg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Wc(n.key,ht.none()):new Ds(n.key,n.data,ht.none());{const t=n.data,r=et.empty();let s=new Ce(Ve.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Bn(n.key,r,new at(s.toArray()),ht.none())}}function aA(n,e,t){n instanceof Ds?(function(s,i,o){const c=s.value.clone(),l=qh(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Bn?(function(s,i,o){if(!yi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=qh(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Mg(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function ss(n,e,t,r){return n instanceof Ds?(function(i,o,c,l){if(!yi(i.precondition,o))return c;const h=i.value.clone(),f=$h(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof Bn?(function(i,o,c,l){if(!yi(i.precondition,o))return c;const h=$h(i.fieldTransforms,l,o),f=o.data;return f.setAll(Mg(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,o,c){return yi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function cA(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Vg(r.transform,s||null);i!=null&&(t===null&&(t=et.empty()),t.set(r.field,i))}return t||null}function Hh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&hr(r,s,((i,o)=>iA(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ds extends wo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Bn extends wo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Mg(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function qh(n,e,t){const r=new Map;re(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,rA(o,c,t[s]))}return r}function $h(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,nA(i,o,e))}return r}class Wc extends wo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lA extends wo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class uA{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&aA(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ss(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ss(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Pg();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=Lg(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument($.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),X())}isEqual(e){return this.batchId===e.batchId&&hr(this.mutations,e.mutations,((t,r)=>Hh(t,r)))&&hr(this.baseMutations,e.baseMutations,((t,r)=>Hh(t,r)))}}class Jc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){re(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return YI})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Jc(e,t,r,s)}}/**
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
 */class hA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class dA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var we,Z;function fA(n){switch(n){case k.OK:return B(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return B(15467,{code:n})}}function Fg(n){if(n===void 0)return Mt("GRPC error has no .code"),k.UNKNOWN;switch(n){case we.OK:return k.OK;case we.CANCELLED:return k.CANCELLED;case we.UNKNOWN:return k.UNKNOWN;case we.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case we.INTERNAL:return k.INTERNAL;case we.UNAVAILABLE:return k.UNAVAILABLE;case we.UNAUTHENTICATED:return k.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case we.NOT_FOUND:return k.NOT_FOUND;case we.ALREADY_EXISTS:return k.ALREADY_EXISTS;case we.PERMISSION_DENIED:return k.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case we.ABORTED:return k.ABORTED;case we.OUT_OF_RANGE:return k.OUT_OF_RANGE;case we.UNIMPLEMENTED:return k.UNIMPLEMENTED;case we.DATA_LOSS:return k.DATA_LOSS;default:return B(39323,{code:n})}}(Z=we||(we={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function pA(){return new TextEncoder}/**
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
 */const gA=new cn([4294967295,4294967295],0);function zh(n){const e=pA().encode(n),t=new Zp;return t.update(e),new Uint8Array(t.digest())}function Gh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new cn([t,r],0),new cn([s,i],0)]}class Kc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Kr(`Invalid padding: ${t}`);if(r<0)throw new Kr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Kr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Kr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=cn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(cn.fromNumber(r)));return s.compare(gA)===1&&(s=new cn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=zh(e),[r,s]=Gh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Kc(i,s,t);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=zh(e),[r,s]=Gh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Kr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class bo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ns.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new bo($.min(),s,new fe(Y),Ft(),X())}}class Ns{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ns(r,t,X(),X(),X())}}/**
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
 */class _i{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Ug{constructor(e,t){this.targetId=e,this.Ce=t}}class jg{constructor(e,t,r=De.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Wh{constructor(){this.ve=0,this.Fe=Jh(),this.Me=De.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=X(),t=X(),r=X();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:B(38017,{changeType:i})}})),new Ns(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=Jh()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,re(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class mA{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ft(),this.He=ii(),this.Je=ii(),this.Ze=new fe(Y)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:B(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Wa(i))if(r===0){const o=new j(i.path);this.et(t,o,Ue.newNoDocument(o,$.min()))}else re(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=fn(r).toUint8Array()}catch(l){if(l instanceof hg)return ur("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Kc(o,s,i)}catch(l){return ur(l instanceof Kr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Wa(c.target)){const l=new j(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Ue.newNoDocument(l,e))}i.Be&&(t.set(o,i.ke()),i.Ke())}}));let r=X();this.Je.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new bo(e,t,this.Ze,this.je,r);return this.je=Ft(),this.He=ii(),this.Je=ii(),this.Ze=new fe(Y),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Wh,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Ce(Y),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Ce(Y),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Wh),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ii(){return new fe(j.comparator)}function Jh(){return new fe(j.comparator)}const yA={asc:"ASCENDING",desc:"DESCENDING"},_A={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wA={and:"AND",or:"OR"};class bA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qa(n,e){return n.useProto3Json||fo(e)?e:{value:e}}function ji(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function TA(n,e){return ji(n,e.toTimestamp())}function Tt(n){return re(!!n,49232),$.fromTimestamp((function(t){const r=dn(t);return new ue(r.seconds,r.nanos)})(n))}function Qc(n,e){return Ya(n,e).canonicalString()}function Ya(n,e){const t=(function(s){return new ce(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Hg(n){const e=ce.fromString(n);return re(Wg(e),10190,{key:e.toString()}),e}function Xa(n,e){return Qc(n.databaseId,e.path)}function pa(n,e){const t=Hg(e);if(t.get(1)!==n.databaseId.projectId)throw new L(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j($g(t))}function qg(n,e){return Qc(n.databaseId,e)}function EA(n){const e=Hg(n);return e.length===4?ce.emptyPath():$g(e)}function Za(n){return new ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function $g(n){return re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Kh(n,e,t){return{name:Xa(n,e),fields:t.value.mapValue.fields}}function vA(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:B(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(re(f===void 0||typeof f=="string",58123),De.fromBase64String(f||"")):(re(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),De.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(h){const f=h.code===void 0?k.UNKNOWN:Fg(h.code);return new L(f,h.message||"")})(o);t=new jg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=pa(n,r.document.name),i=Tt(r.document.updateTime),o=r.document.createTime?Tt(r.document.createTime):$.min(),c=new et({mapValue:{fields:r.document.fields}}),l=Ue.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new _i(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=pa(n,r.document),i=r.readTime?Tt(r.readTime):$.min(),o=Ue.newNoDocument(s,i),c=r.removedTargetIds||[];t=new _i([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=pa(n,r.document),i=r.removedTargetIds||[];t=new _i([],i,s,null)}else{if(!("filter"in e))return B(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new dA(s,i),c=r.targetId;t=new Ug(c,o)}}return t}function IA(n,e){let t;if(e instanceof Ds)t={update:Kh(n,e.key,e.value)};else if(e instanceof Wc)t={delete:Xa(n,e.key)};else if(e instanceof Bn)t={update:Kh(n,e.key,e.data),updateMask:DA(e.fieldMask)};else{if(!(e instanceof lA))return B(16599,{dt:e.type});t={verify:Xa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof gs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ms)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ys)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ui)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw B(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:TA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B(27497)})(n,e.precondition)),t}function AA(n,e){return n&&n.length>0?(re(e!==void 0,14353),n.map((t=>(function(s,i){let o=s.updateTime?Tt(s.updateTime):Tt(i);return o.isEqual($.min())&&(o=Tt(i)),new oA(o,s.transformResults||[])})(t,e)))):[]}function CA(n,e){return{documents:[qg(n,e.path)]}}function RA(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=qg(n,s);const i=(function(h){if(h.length!==0)return Gg(gt.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(h){if(h.length!==0)return h.map((f=>(function(m){return{field:Zn(m.field),direction:PA(m.dir)}})(f)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Qa(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:s}}function SA(n){let e=EA(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){re(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(p){const m=zg(p);return m instanceof gt&&Tg(m)?m.getFilters():[m]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((m=>(function(R){return new Fi(er(R.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(m)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,fo(m)?null:m})(t.limit));let l=null;t.startAt&&(l=(function(p){const m=!!p.before,y=p.values||[];return new Mi(y,m)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const m=!p.before,y=p.values||[];return new Mi(y,m)})(t.endAt)),zI(e,s,o,i,c,"F",l,h)}function kA(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function zg(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=er(t.unaryFilter.field);return be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=er(t.unaryFilter.field);return be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=er(t.unaryFilter.field);return be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=er(t.unaryFilter.field);return be.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return B(61313);default:return B(60726)}})(n):n.fieldFilter!==void 0?(function(t){return be.create(er(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return B(58110);default:return B(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return gt.create(t.compositeFilter.filters.map((r=>zg(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B(1026)}})(t.compositeFilter.op))})(n):B(30097,{filter:n})}function PA(n){return yA[n]}function xA(n){return _A[n]}function VA(n){return wA[n]}function Zn(n){return{fieldPath:n.canonicalString()}}function er(n){return Ve.fromServerFormat(n.fieldPath)}function Gg(n){return n instanceof be?(function(t){if(t.op==="=="){if(Lh(t.value))return{unaryFilter:{field:Zn(t.field),op:"IS_NAN"}};if(Oh(t.value))return{unaryFilter:{field:Zn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Lh(t.value))return{unaryFilter:{field:Zn(t.field),op:"IS_NOT_NAN"}};if(Oh(t.value))return{unaryFilter:{field:Zn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zn(t.field),op:xA(t.op),value:t.value}}})(n):n instanceof gt?(function(t){const r=t.getFilters().map((s=>Gg(s)));return r.length===1?r[0]:{compositeFilter:{op:VA(t.op),filters:r}}})(n):B(54877,{filter:n})}function DA(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Wg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Jg(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class tn{constructor(e,t,r,s,i=$.min(),o=$.min(),c=De.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new tn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class NA{constructor(e){this.yt=e}}function OA(n){const e=SA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ka(e,e.limit,"L"):e}/**
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
 */class LA{constructor(){this.Sn=new MA}addToCollectionParentIndex(e,t){return this.Sn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(hn.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(hn.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class MA{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ce(ce.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ce(ce.comparator)).toArray()}}/**
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
 */const Qh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Kg=41943040;class We{static withCacheSize(e){return new We(e,We.DEFAULT_COLLECTION_PERCENTILE,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */We.DEFAULT_COLLECTION_PERCENTILE=10,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,We.DEFAULT=new We(Kg,We.DEFAULT_COLLECTION_PERCENTILE,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),We.DISABLED=new We(-1,0,0);/**
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
 */class pr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new pr(0)}static ar(){return new pr(-1)}}/**
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
 */const Yh="LruGarbageCollector",FA=1048576;function Xh([n,e],[t,r]){const s=Y(n,t);return s===0?Y(e,r):s}class UA{constructor(e){this.Pr=e,this.buffer=new Ce(Xh),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Xh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class jA{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){M(Yh,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Cr(t)?M(Yh,"Ignoring IndexedDB error during garbage collection: ",t):await Ar(t)}await this.Ar(3e5)}))}}class BA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return P.resolve(ho.ce);const r=new UA(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Qh)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qh):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),Yn()<=Q.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function HA(n,e){return new BA(n,e)}/**
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
 */class qA{constructor(){this.changes=new jn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ue.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $A{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class zA{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&ss(r.mutation,s,at.empty(),ue.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,X()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=X()){const s=Sn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let o=Jr();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=Sn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,X())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,r,s){let i=Ft();const o=rs(),c=(function(){return rs()})();return t.forEach(((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Bn)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ss(f.mutation,h,f.mutation.getFieldMask(),ue.now())):o.set(h.key,at.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,f)=>o.set(h,f))),t.forEach(((h,f)=>c.set(h,new $A(f,o.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,t){const r=rs();let s=new fe(((o,c)=>o-c)),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const h=t.get(l);if(h===null)return;let f=r.get(l)||at.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||X()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Pg();f.forEach((m=>{if(!i.has(m)){const y=Lg(t.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return P.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return GI(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ag(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(Sn());let c=hs,l=i;return o.next((h=>P.forEach(h,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,X()))).next((f=>({batchId:c,changes:kg(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next((r=>{let s=Jr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Jr();return this.indexManager.getCollectionParents(e,i).next((c=>P.forEach(c,(l=>{const h=(function(p,m){return new Vs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((o=>{i.forEach(((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ue.newInvalidDocument(f)))}));let c=Jr();return o.forEach(((l,h)=>{const f=i.get(l);f!==void 0&&ss(f.mutation,h,at.empty(),ue.now()),yo(t,h)&&(c=c.insert(l,h))})),c}))}}/**
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
 */class GA{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return P.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Tt(s.createTime)}})(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:OA(s.bundledQuery),readTime:Tt(s.readTime)}})(t)),P.resolve()}}/**
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
 */class WA{constructor(){this.overlays=new fe(j.comparator),this.Lr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Sn();return P.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.bt(e,t,i)})),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=Sn(),i=t.length+1,o=new j(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new fe(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Sn(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Sn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=s)););return P.resolve(c)}bt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new hA(t,r));let i=this.Lr.get(t);i===void 0&&(i=X(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
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
 */class JA{constructor(){this.sessionToken=De.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class Yc{constructor(){this.kr=new Ce(Se.Kr),this.qr=new Ce(Se.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new Se(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Se(e,t))}Qr(e,t){e.forEach((r=>this.removeReference(r,t)))}Gr(e){const t=new j(new ce([])),r=new Se(t,e),s=new Se(t,e+1),i=[];return this.qr.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new j(new ce([])),r=new Se(t,e),s=new Se(t,e+1);let i=X();return this.qr.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new Se(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Se{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return j.comparator(e.key,t.key)||Y(e.Hr,t.Hr)}static Ur(e,t){return Y(e.Hr,t.Hr)||j.comparator(e.key,t.key)}}/**
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
 */class KA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Ce(Se.Kr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uA(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new Se(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Bc:this.Yn-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Se(t,0),s=new Se(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],(o=>{const c=this.Zr(o.Hr);i.push(c)})),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ce(Y);return t.forEach((s=>{const i=new Se(s,0),o=new Se(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],(c=>{r=r.add(c.Hr)}))})),P.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const o=new Se(new j(i),0);let c=new Ce(Y);return this.Jr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),o),P.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){re(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return P.forEach(t.mutations,(s=>{const i=new Se(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=r}))}nr(e){}containsKey(e,t){const r=new Se(t,0),s=this.Jr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class QA{constructor(e){this.ti=e,this.docs=(function(){return new fe(j.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Ue.newInvalidDocument(t))}getEntries(e,t){let r=Ft();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ue.newInvalidDocument(s))})),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Ft();const o=t.path,c=new j(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||EI(TI(f),r)<=0||(s.has(f.key)||yo(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){B(9500)}ni(e,t){return P.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new YA(this)}getSize(e){return P.resolve(this.size)}}class YA extends qA{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)})),P.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class XA{constructor(e){this.persistence=e,this.ri=new jn((t=>$c(t)),zc),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.ii=0,this.si=new Yc,this.targetCount=0,this.oi=pr._r()}forEachTarget(e,t){return this.ri.forEach(((r,s)=>t(s))),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),P.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new pr(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.lr(t),P.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),P.waitFor(i).next((()=>s))}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.si.containsKey(t))}}/**
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
 */class Qg{constructor(e,t){this._i={},this.overlays={},this.ai=new ho(0),this.ui=!1,this.ui=!0,this.ci=new JA,this.referenceDelegate=e(this),this.li=new XA(this),this.indexManager=new LA,this.remoteDocumentCache=(function(s){return new QA(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new NA(t),this.Pi=new GA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new WA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new KA(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const s=new ZA(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((i=>this.referenceDelegate.Ii(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return P.or(Object.values(this._i).map((r=>()=>r.containsKey(e,t))))}}class ZA extends II{constructor(e){super(),this.currentSequenceNumber=e}}class Xc{constructor(e){this.persistence=e,this.Ri=new Yc,this.Ai=null}static Vi(e){return new Xc(e)}get di(){if(this.Ai)return this.Ai;throw B(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.di.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,(r=>{const s=j.fromPath(r);return this.mi(e,s).next((i=>{i||t.removeEntry(s,$.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Bi{constructor(e,t){this.persistence=e,this.fi=new jn((r=>RI(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=HA(this,t)}static Vi(e,t){return new Bi(e,t)}Ti(){}Ii(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}mr(e,t){return P.forEach(this.fi,((r,s)=>this.wr(e,r,s).next((i=>i?P.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(r++,i.removeEntry(o,$.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=gi(e.data.value)),t}wr(e,t,r){return P.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Zc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=X(),s=X();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Zc(e,t.fromCache,r,s)}}/**
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
 */class e1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class t1{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Hb()?8:AI(He())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ps(e,t,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new e1;return this.ys(e,t,o).next((c=>{if(i.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>i.result))}ws(e,t,r,s){return r.documentReadCount<this.Vs?(Yn()<=Q.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Xn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(Yn()<=Q.DEBUG&&M("QueryEngine","Query:",Xn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Yn()<=Q.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Xn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bt(t))):P.resolve())}gs(e,t){if(jh(t))return P.resolve(null);let r=bt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Ka(t,null,"F"),r=bt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=X(...i);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.bs(t,c);return this.Ss(t,h,o,l.readTime)?this.gs(e,Ka(t,null,"F")):this.Ds(e,h,t,l)}))))})))))}ps(e,t,r,s){return jh(t)||s.isEqual($.min())?P.resolve(null):this.fs.getDocuments(e,r).next((i=>{const o=this.bs(t,i);return this.Ss(t,o,r,s)?P.resolve(null):(Yn()<=Q.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xn(t)),this.Ds(e,o,t,bI(s,hs)).next((c=>c)))}))}bs(e,t){let r=new Ce(Rg(e));return t.forEach(((s,i)=>{yo(e,i)&&(r=r.add(i))})),r}Ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return Yn()<=Q.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Xn(t)),this.fs.getDocumentsMatchingQuery(e,t,hn.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const el="LocalStore",n1=3e8;class r1{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new fe(Y),this.Fs=new jn((i=>$c(i)),zc),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zA(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function s1(n,e,t,r){return new r1(n,e,t,r)}async function Yg(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=X();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next((h=>({Ns:h,removedBatchIds:o,addedBatchIds:c})))}))}))}function i1(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,f){const p=h.batch,m=p.keys();let y=P.resolve();return m.forEach((R=>{y=y.next((()=>f.getEntry(l,R))).next((x=>{const N=h.docVersions.get(R);re(N!==null,48541),x.version.compareTo(N)<0&&(p.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))}))})),y.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=X();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Xg(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function o1(n,e){const t=z(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(t.li.removeMatchingKeys(i,f.removedDocuments,p).next((()=>t.li.addMatchingKeys(i,f.addedDocuments,p))));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(De.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),(function(x,N,D){return x.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=n1?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0})(m,y,f)&&c.push(t.li.updateTargetData(i,y))}));let l=Ft(),h=X();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(a1(i,o,e.documentUpdates).next((f=>{l=f.Bs,h=f.Ls}))),!r.isEqual($.min())){const f=t.li.getLastRemoteSnapshotVersion(i).next((p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return P.waitFor(c).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(t.vs=s,i)))}function a1(n,e,t){let r=X(),s=X();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let o=Ft();return t.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual($.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):M(el,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function c1(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Bc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function l1(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.li.getTargetData(r,e).next((i=>i?(s=i,P.resolve(s)):t.li.allocateTargetId(r).next((o=>(s=new tn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r}))}async function ec(n,e,t){const r=z(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Cr(o))throw o;M(el,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Zh(n,e,t){const r=z(n);let s=$.min(),i=X();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,h,f){const p=z(l),m=p.Fs.get(f);return m!==void 0?P.resolve(p.vs.get(m)):p.li.getTargetData(h,f)})(r,o,bt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,t?s:$.min(),t?i:X()))).next((c=>(u1(r,JI(e),c),{documents:c,ks:i})))))}function u1(n,e,t){let r=n.Ms.get(e)||$.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Ms.set(e,r)}class ed{constructor(){this.activeTargetIds=eA()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class h1{constructor(){this.vo=new ed,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new ed,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class d1{Mo(e){}shutdown(){}}/**
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
 */const td="ConnectivityMonitor";class nd{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){M(td,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){M(td,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let oi=null;function tc(){return oi===null?oi=(function(){return 268435456+Math.round(2147483648*Math.random())})():oi++,"0x"+oi.toString(16)}/**
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
 */const ga="RestConnection",f1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class p1{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Oi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const o=tc(),c=this.Qo(e,t.toUriEncodedString());M(ga,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:h}=new URL(c),f=br(h);return this.zo(e,c,l,r,f).then((p=>(M(ga,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw ur(ga,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}jo(e,t,r,s,i,o){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ir})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Qo(e,t){const r=f1[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class g1{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Le="WebChannelConnection",zr=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class or extends p1{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!or.c_){const e=rg();zr(e,ng.STAT_EVENT,(t=>{t.stat===Ha.PROXY?M(Le,"STAT_EVENT: detected buffering proxy"):t.stat===Ha.NOPROXY&&M(Le,"STAT_EVENT: detected no buffering proxy")})),or.c_=!0}}zo(e,t,r,s,i){const o=tc();return new Promise(((c,l)=>{const h=new eg;h.setWithCredentials(!0),h.listenOnce(tg.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case pi.NO_ERROR:const p=h.getResponseJson();M(Le,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case pi.TIMEOUT:M(Le,`RPC '${e}' ${o} timed out`),l(new L(k.DEADLINE_EXCEEDED,"Request time out"));break;case pi.HTTP_ERROR:const m=h.getStatus();if(M(Le,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let y=h.getResponseJson();Array.isArray(y)&&(y=y[0]);const R=y==null?void 0:y.error;if(R&&R.status&&R.message){const x=(function(D){const V=D.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(V)>=0?V:k.UNKNOWN})(R.status);l(new L(x,R.message))}else l(new L(k.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new L(k.UNAVAILABLE,"Connection failed."));break;default:B(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{M(Le,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);M(Le,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",f,r,15)}))}T_(e,t,r){const s=tc(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=i.join("");M(Le,`Creating RPC '${e}' stream ${s}: ${h}`,c);const f=o.createWebChannel(h,c);this.I_(f);let p=!1,m=!1;const y=new g1({Ho:R=>{m?M(Le,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(p||(M(Le,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),M(Le,`RPC '${e}' stream ${s} sending:`,R),f.send(R))},Jo:()=>f.close()});return zr(f,Wr.EventType.OPEN,(()=>{m||(M(Le,`RPC '${e}' stream ${s} transport opened.`),y.i_())})),zr(f,Wr.EventType.CLOSE,(()=>{m||(m=!0,M(Le,`RPC '${e}' stream ${s} transport closed`),y.o_(),this.E_(f))})),zr(f,Wr.EventType.ERROR,(R=>{m||(m=!0,ur(Le,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),y.o_(new L(k.UNAVAILABLE,"The operation could not be completed")))})),zr(f,Wr.EventType.MESSAGE,(R=>{var x;if(!m){const N=R.data[0];re(!!N,16349);const D=N,V=(D==null?void 0:D.error)||((x=D[0])==null?void 0:x.error);if(V){M(Le,`RPC '${e}' stream ${s} received error:`,V);const G=V.status;let ve=(function(v){const _=we[v];if(_!==void 0)return Fg(_)})(G),Je=V.message;ve===void 0&&(ve=k.INTERNAL,Je="Unknown error status: "+G+" with message "+V.message),m=!0,y.o_(new L(ve,Je)),f.close()}else M(Le,`RPC '${e}' stream ${s} received:`,N),y.__(N)}})),or.u_(),setTimeout((()=>{y.s_()}),0),y}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return sg()}}/**
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
 */function m1(n){return new or(n)}function ma(){return typeof document<"u"?document:null}/**
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
 */function To(n){return new bA(n,!0)}/**
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
 */or.c_=!1;class Zg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const rd="PersistentStream";class em{constructor(e,t,r,s,i,o,c,l){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Zg(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(Mt(t.toString()),Mt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new L(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return M(rd,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(M(rd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class y1 extends em{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=vA(this.serializer,e),r=(function(i){if(!("targetChange"in i))return $.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?$.min():o.readTime?Tt(o.readTime):$.min()})(e);return this.listener.J_(t,r)}Z_(e){const t={};t.database=Za(this.serializer),t.addTarget=(function(i,o){let c;const l=o.target;if(c=Wa(l)?{documents:CA(i,l)}:{query:RA(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Bg(i,o.resumeToken);const h=Qa(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo($.min())>0){c.readTime=ji(i,o.snapshotVersion.toTimestamp());const h=Qa(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=kA(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=Za(this.serializer),t.removeTarget=e,this.K_(t)}}class _1 extends em{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,re(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=AA(e.writeResults,e.commitTime),r=Tt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Za(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>IA(this.serializer,r)))};this.K_(t)}}/**
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
 */class w1{}class b1 extends w1{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new L(k.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Ya(t,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(k.UNKNOWN,i.toString())}))}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,Ya(t,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(k.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function T1(n,e,t,r){return new b1(n,e,t,r)}class E1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Mt(t),this.aa=!1):M("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ln="RemoteStore";class v1{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((o=>{r.enqueueAndForget((async()=>{Hn(this)&&(M(Ln,"Restarting streams for network reachability change."),await(async function(l){const h=z(l);h.Ea.add(4),await Os(h),h.Va.set("Unknown"),h.Ea.delete(4),await Eo(h)})(this))}))})),this.Va=new E1(r,s)}}async function Eo(n){if(Hn(n))for(const e of n.Ra)await e(!0)}async function Os(n){for(const e of n.Ra)await e(!1)}function tm(n,e){const t=z(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),sl(t)?rl(t):Rr(t).O_()&&nl(t,e))}function tl(n,e){const t=z(n),r=Rr(t);t.Ia.delete(e),r.O_()&&nm(t,e),t.Ia.size===0&&(r.O_()?r.L_():Hn(t)&&t.Va.set("Unknown"))}function nl(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Rr(n).Z_(e)}function nm(n,e){n.da.$e(e),Rr(n).X_(e)}function rl(n){n.da=new mA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Rr(n).start(),n.Va.ua()}function sl(n){return Hn(n)&&!Rr(n).x_()&&n.Ia.size>0}function Hn(n){return z(n).Ea.size===0}function rm(n){n.da=void 0}async function I1(n){n.Va.set("Online")}async function A1(n){n.Ia.forEach(((e,t)=>{nl(n,e)}))}async function C1(n,e){rm(n),sl(n)?(n.Va.ha(e),rl(n)):n.Va.set("Unknown")}async function R1(n,e,t){if(n.Va.set("Online"),e instanceof jg&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.da.removeTarget(c))})(n,e)}catch(r){M(Ln,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hi(n,r)}else if(e instanceof _i?n.da.Xe(e):e instanceof Ug?n.da.st(e):n.da.tt(e),!t.isEqual($.min()))try{const r=await Xg(n.localStore);t.compareTo(r)>=0&&await(function(i,o){const c=i.da.Tt(o);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,h)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(De.EMPTY_BYTE_STRING,f.snapshotVersion)),nm(i,l);const p=new tn(f.target,l,h,f.sequenceNumber);nl(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){M(Ln,"Failed to raise snapshot:",r),await Hi(n,r)}}async function Hi(n,e,t){if(!Cr(e))throw e;n.Ea.add(1),await Os(n),n.Va.set("Offline"),t||(t=()=>Xg(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{M(Ln,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Eo(n)}))}function sm(n,e){return e().catch((t=>Hi(n,t,e)))}async function vo(n){const e=z(n),t=gn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Bc;for(;S1(e);)try{const s=await c1(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,k1(e,s)}catch(s){await Hi(e,s)}im(e)&&om(e)}function S1(n){return Hn(n)&&n.Ta.length<10}function k1(n,e){n.Ta.push(e);const t=gn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function im(n){return Hn(n)&&!gn(n).x_()&&n.Ta.length>0}function om(n){gn(n).start()}async function P1(n){gn(n).ra()}async function x1(n){const e=gn(n);for(const t of n.Ta)e.ea(t.mutations)}async function V1(n,e,t){const r=n.Ta.shift(),s=Jc.from(r,e,t);await sm(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await vo(n)}async function D1(n,e){e&&gn(n).Y_&&await(async function(r,s){if((function(o){return fA(o)&&o!==k.ABORTED})(s.code)){const i=r.Ta.shift();gn(r).B_(),await sm(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await vo(r)}})(n,e),im(n)&&om(n)}async function sd(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),M(Ln,"RemoteStore received new credentials");const r=Hn(t);t.Ea.add(3),await Os(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Eo(t)}async function N1(n,e){const t=z(n);e?(t.Ea.delete(2),await Eo(t)):e||(t.Ea.add(2),await Os(t),t.Va.set("Unknown"))}function Rr(n){return n.ma||(n.ma=(function(t,r,s){const i=z(t);return i.sa(),new y1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:I1.bind(null,n),Yo:A1.bind(null,n),t_:C1.bind(null,n),J_:R1.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),sl(n)?rl(n):n.Va.set("Unknown")):(await n.ma.stop(),rm(n))}))),n.ma}function gn(n){return n.fa||(n.fa=(function(t,r,s){const i=z(t);return i.sa(),new _1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:P1.bind(null,n),t_:D1.bind(null,n),ta:x1.bind(null,n),na:V1.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await vo(n)):(await n.fa.stop(),n.Ta.length>0&&(M(Ln,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class il{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new il(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ol(n,e){if(Mt("AsyncQueue",`${e}: ${n}`),Cr(n))return new L(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class ar{static emptySet(e){return new ar(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||j.comparator(t.key,r.key):(t,r)=>j.comparator(t.key,r.key),this.keyedMap=Jr(),this.sortedSet=new fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ar)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ar;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class id{constructor(){this.ga=new fe(j.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):B(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class gr{constructor(e,t,r,s,i,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new gr(e,t,ar.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class O1{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class L1{constructor(){this.queries=od(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=z(t),i=s.queries;s.queries=od(),i.forEach(((o,c)=>{for(const l of c.ba)l.onError(r)}))})(this,new L(k.ABORTED,"Firestore shutting down"))}}function od(){return new jn((n=>Cg(n)),mo)}async function al(n,e){const t=z(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new O1,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=ol(o,`Initialization of query '${Xn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.ba.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&ll(t)}async function cl(n,e){const t=z(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function M1(n,e){const t=z(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.ba)c.Fa(s)&&(r=!0);o.wa=s}}r&&ll(t)}function F1(n,e,t){const r=z(n),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(t);r.queries.delete(e)}function ll(n){n.Ca.forEach((e=>{e.next()}))}var nc,ad;(ad=nc||(nc={})).Ma="default",ad.Cache="cache";class ul{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new gr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=gr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==nc.Cache}}/**
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
 */class am{constructor(e){this.key=e}}class cm{constructor(e){this.key=e}}class U1{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=X(),this.mutatedKeys=X(),this.eu=Rg(e),this.tu=new ar(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new id,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),y=yo(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),x=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let N=!1;m&&y?m.data.isEqual(y.data)?R!==x&&(r.track({type:3,doc:y}),N=!0):this.su(m,y)||(r.track({type:2,doc:y}),N=!0,(l&&this.eu(y,l)>0||h&&this.eu(y,h)<0)&&(c=!0)):!m&&y?(r.track({type:0,doc:y}),N=!0):m&&!y&&(r.track({type:1,doc:m}),N=!0,(l||h)&&(c=!0)),N&&(y?(o=o.add(y),i=x?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(y,R){const x=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B(20277,{Vt:N})}};return x(y)-x(R)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,h=l!==this.Xa;return this.Xa=l,o.length!==0||h?{snapshot:new gr(this.query,e.tu,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new id,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=X(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const t=[];return e.forEach((r=>{this.Ya.has(r)||t.push(new cm(r))})),this.Ya.forEach((r=>{e.has(r)||t.push(new am(r))})),t}cu(e){this.Za=e.ks,this.Ya=X();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return gr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const hl="SyncEngine";class j1{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class B1{constructor(e){this.key=e,this.hu=!1}}class H1{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new jn((c=>Cg(c)),mo),this.Iu=new Map,this.Eu=new Set,this.Ru=new fe(j.comparator),this.Au=new Map,this.Vu=new Yc,this.du={},this.mu=new Map,this.fu=pr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function q1(n,e,t=!0){const r=pm(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await lm(r,e,t,!0),s}async function $1(n,e){const t=pm(n);await lm(t,e,!0,!1)}async function lm(n,e,t,r){const s=await l1(n.localStore,bt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await z1(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&tm(n.remoteStore,s),c}async function z1(n,e,t,r,s){n.pu=(p,m,y)=>(async function(x,N,D,V){let G=N.view.ru(D);G.Ss&&(G=await Zh(x.localStore,N.query,!1).then((({documents:v})=>N.view.ru(v,G))));const ve=V&&V.targetChanges.get(N.targetId),Je=V&&V.targetMismatches.get(N.targetId)!=null,Ne=N.view.applyChanges(G,x.isPrimaryClient,ve,Je);return ld(x,N.targetId,Ne.au),Ne.snapshot})(n,p,m,y);const i=await Zh(n.localStore,e,!0),o=new U1(e,i.ks),c=o.ru(i.documents),l=Ns.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=o.applyChanges(c,n.isPrimaryClient,l);ld(n,t,h.au);const f=new j1(e,t,o);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function G1(n,e,t){const r=z(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!mo(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ec(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&tl(r.remoteStore,s.targetId),rc(r,s.targetId)})).catch(Ar)):(rc(r,s.targetId),await ec(r.localStore,s.targetId,!0))}async function W1(n,e){const t=z(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),tl(t.remoteStore,r.targetId))}async function J1(n,e,t){const r=tC(n);try{const s=await(function(o,c){const l=z(o),h=ue.now(),f=c.reduce(((y,R)=>y.add(R.key)),X());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(y=>{let R=Ft(),x=X();return l.xs.getEntries(y,f).next((N=>{R=N,R.forEach(((D,V)=>{V.isValidDocument()||(x=x.add(D))}))})).next((()=>l.localDocuments.getOverlayedDocuments(y,R))).next((N=>{p=N;const D=[];for(const V of c){const G=cA(V,p.get(V.key).overlayedDocument);G!=null&&D.push(new Bn(V.key,G,_g(G.value.mapValue),ht.exists(!0)))}return l.mutationQueue.addMutationBatch(y,h,D,c)})).next((N=>{m=N;const D=N.applyToLocalDocumentSet(p,x);return l.documentOverlayCache.saveOverlays(y,N.batchId,D)}))})).then((()=>({batchId:m.batchId,changes:kg(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let h=o.du[o.currentUser.toKey()];h||(h=new fe(Y)),h=h.insert(c,l),o.du[o.currentUser.toKey()]=h})(r,s.batchId,t),await Ls(r,s.changes),await vo(r.remoteStore)}catch(s){const i=ol(s,"Failed to persist write");t.reject(i)}}async function um(n,e){const t=z(n);try{const r=await o1(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Au.get(i);o&&(re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?re(o.hu,14607):s.removedDocuments.size>0&&(re(o.hu,42227),o.hu=!1))})),await Ls(t,r,e)}catch(r){await Ar(r)}}function cd(n,e,t){const r=z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=z(o);l.onlineState=c;let h=!1;l.queries.forEach(((f,p)=>{for(const m of p.ba)m.va(c)&&(h=!0)})),h&&ll(l)})(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function K1(n,e,t){const r=z(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new fe(j.comparator);o=o.insert(i,Ue.newNoDocument(i,$.min()));const c=X().add(i),l=new bo($.min(),new Map,new fe(Y),o,c);await um(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),dl(r)}else await ec(r.localStore,e,!1).then((()=>rc(r,e,t))).catch(Ar)}async function Q1(n,e){const t=z(n),r=e.batch.batchId;try{const s=await i1(t.localStore,e);dm(t,r,null),hm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ls(t,s)}catch(s){await Ar(s)}}async function Y1(n,e,t){const r=z(n);try{const s=await(function(o,c){const l=z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next((p=>(re(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>l.localDocuments.getDocuments(h,f)))}))})(r.localStore,e);dm(r,e,t),hm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ls(r,s)}catch(s){await Ar(s)}}function hm(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function dm(n,e,t){const r=z(n);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function rc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((r=>{n.Vu.containsKey(r)||fm(n,r)}))}function fm(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(tl(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),dl(n))}function ld(n,e,t){for(const r of t)r instanceof am?(n.Vu.addReference(r.key,e),X1(n,r)):r instanceof cm?(M(hl,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||fm(n,r.key)):B(19791,{wu:r})}function X1(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(r)||(M(hl,"New document in limbo: "+t),n.Eu.add(r),dl(n))}function dl(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new j(ce.fromString(e)),r=n.fu.next();n.Au.set(r,new B1(t)),n.Ru=n.Ru.insert(t,r),tm(n.remoteStore,new tn(bt(go(t.path)),r,"TargetPurposeLimboResolution",ho.ce))}}async function Ls(n,e,t){const r=z(n),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,t).then((h=>{var f;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Zc.Es(l.targetId,h);i.push(p)}})))})),await Promise.all(o),r.Pu.J_(s),await(async function(l,h){const f=z(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>P.forEach(h,(m=>P.forEach(m.Ts,(y=>f.persistence.referenceDelegate.addReference(p,m.targetId,y))).next((()=>P.forEach(m.Is,(y=>f.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))))))}catch(p){if(!Cr(p))throw p;M(el,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const y=f.vs.get(m),R=y.snapshotVersion,x=y.withLastLimboFreeSnapshotVersion(R);f.vs=f.vs.insert(m,x)}}})(r.localStore,i))}async function Z1(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){M(hl,"User change. New user:",e.toKey());const r=await Yg(t.localStore,e);t.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new L(k.CANCELLED,o))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ls(t,r.Ns)}}function eC(n,e){const t=z(n),r=t.Au.get(e);if(r&&r.hu)return X().add(r.key);{let s=X();const i=t.Iu.get(e);if(!i)return s;for(const o of i){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function pm(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=um.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=K1.bind(null,e),e.Pu.J_=M1.bind(null,e.eventManager),e.Pu.yu=F1.bind(null,e.eventManager),e}function tC(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Q1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Y1.bind(null,e),e}class qi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=To(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return s1(this.persistence,new t1,e.initialUser,this.serializer)}Cu(e){return new Qg(Xc.Vi,this.serializer)}Du(e){return new h1}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qi.provider={build:()=>new qi};class nC extends qi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){re(this.persistence.referenceDelegate instanceof Bi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new jA(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?We.withCacheSize(this.cacheSizeBytes):We.DEFAULT;return new Qg((r=>Bi.Vi(r,t)),this.serializer)}}class sc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Z1.bind(null,this.syncEngine),await N1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new L1})()}createDatastore(e){const t=To(e.databaseInfo.databaseId),r=m1(e.databaseInfo);return T1(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,o,c){return new v1(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>cd(this.syncEngine,t,0)),(function(){return nd.v()?new nd:new d1})())}createSyncEngine(e,t){return(function(s,i,o,c,l,h,f){const p=new H1(s,i,o,c,l,h);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=z(s);M(Ln,"RemoteStore shutting down."),i.Ea.add(5),await Os(i),i.Aa.shutdown(),i.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}sc.provider={build:()=>new sc};/**
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
 */class fl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Mt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const mn="FirestoreClient";class rC{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Fe.UNAUTHENTICATED,this.clientId=jc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{M(mn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(M(mn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ol(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function ya(n,e){n.asyncQueue.verifyOperationInProgress(),M(mn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Yg(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function ud(n,e){n.asyncQueue.verifyOperationInProgress();const t=await sC(n);M(mn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>sd(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>sd(e.remoteStore,s))),n._onlineComponents=e}async function sC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(mn,"Using user provided OfflineComponentProvider");try{await ya(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;ur("Error using user provided cache. Falling back to memory cache: "+t),await ya(n,new qi)}}else M(mn,"Using default OfflineComponentProvider"),await ya(n,new nC(void 0));return n._offlineComponents}async function gm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(mn,"Using user provided OnlineComponentProvider"),await ud(n,n._uninitializedComponentsProvider._online)):(M(mn,"Using default OnlineComponentProvider"),await ud(n,new sc))),n._onlineComponents}function iC(n){return gm(n).then((e=>e.syncEngine))}async function $i(n){const e=await gm(n),t=e.eventManager;return t.onListen=q1.bind(null,e.syncEngine),t.onUnlisten=G1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=$1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=W1.bind(null,e.syncEngine),t}function oC(n,e,t,r){const s=new fl(r),i=new ul(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>al(await $i(n),i))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>cl(await $i(n),i)))}}function aC(n,e,t={}){const r=new Vt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,h){const f=new fl({next:m=>{f.Nu(),o.enqueueAndForget((()=>cl(i,p)));const y=m.docs.has(c);!y&&m.fromCache?h.reject(new L(k.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&l&&l.source==="server"?h.reject(new L(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new ul(go(c.path),f,{includeMetadataChanges:!0,Ka:!0});return al(i,p)})(await $i(n),n.asyncQueue,e,t,r))),r.promise}function cC(n,e,t={}){const r=new Vt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,h){const f=new fl({next:m=>{f.Nu(),o.enqueueAndForget((()=>cl(i,p))),m.fromCache&&l.source==="server"?h.reject(new L(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new ul(c,f,{includeMetadataChanges:!0,Ka:!0});return al(i,p)})(await $i(n),n.asyncQueue,e,t,r))),r.promise}function lC(n,e){const t=new Vt;return n.asyncQueue.enqueueAndForget((async()=>J1(await iC(n),e,t))),t.promise}/**
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
 */function mm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const uC="ComponentProvider",hd=new Map;function hC(n,e,t,r,s){return new PI(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,mm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const ym="firestore.googleapis.com",dd=!0;class fd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new L(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ym,this.ssl=dd}else this.host=e.host,this.ssl=e.ssl??dd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Kg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<FA)throw new L(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mm(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new L(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new L(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new L(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Io{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new lI;switch(r.type){case"firstParty":return new fI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=hd.get(t);r&&(M(uC,"Removing Datastore"),hd.delete(t),r.terminate())})(this),Promise.resolve()}}function dC(n,e,t,r={}){var h;n=rt(n,Io);const s=br(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(hp(`https://${c}`),dp("Firestore",!0)),i.host!==ym&&i.host!==c&&ur("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Vn(l,o)&&(n._setSettings(l),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Fe.MOCK_USER;else{f=Db(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new L(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Fe(m)}n._authCredentials=new uI(new og(f,p))}}/**
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
 */class qn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qn(this.firestore,e,this._query)}}class _e{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _e(this.firestore,e,this._key)}toJSON(){return{type:_e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(xs(t,_e._jsonSchema))return new _e(e,r||null,new j(ce.fromString(t.referencePath)))}}_e._jsonSchemaVersion="firestore/documentReference/1.0",_e._jsonSchema={type:Ee("string",_e._jsonSchemaVersion),referencePath:Ee("string")};class ln extends qn{constructor(e,t,r){super(e,t,go(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _e(this.firestore,null,new j(e))}withConverter(e){return new ln(this.firestore,e,this._path)}}function _m(n,e,...t){if(n=qe(n),ag("collection","path",e),n instanceof Io){const r=ce.fromString(e,...t);return Ch(r),new ln(n,null,r)}{if(!(n instanceof _e||n instanceof ln))throw new L(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ce.fromString(e,...t));return Ch(r),new ln(n.firestore,null,r)}}function Ms(n,e,...t){if(n=qe(n),arguments.length===1&&(e=jc.newId()),ag("doc","path",e),n instanceof Io){const r=ce.fromString(e,...t);return Ah(r),new _e(n,null,new j(r))}{if(!(n instanceof _e||n instanceof ln))throw new L(k.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ce.fromString(e,...t));return Ah(r),new _e(n.firestore,n instanceof ln?n.converter:null,new j(r))}}/**
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
 */const pd="AsyncQueue";class gd{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Zg(this,"async_queue_retry"),this._c=()=>{const r=ma();r&&M(pd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=ma();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ma();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Vt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Cr(e))throw e;M(pd,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Mt("INTERNAL UNHANDLED ERROR: ",md(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=il.createAndSchedule(this,e,t,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&B(47125,{Pc:md(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function md(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class yn extends Io{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new gd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gd(e),this._firestoreClient=void 0,await e}}}function fC(n,e){const t=typeof n=="object"?n:mp(),r=typeof n=="string"?n:Oi,s=Rc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=xb("firestore");i&&dC(s,...i)}return s}function Ao(n){if(n._terminated)throw new L(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||pC(n),n._firestoreClient}function pC(n){var r,s,i,o;const e=n._freezeSettings(),t=hC(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new rC(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(n._componentsProvider))}/**
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
 */class tt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tt(De.fromBase64String(e))}catch(t){throw new L(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new tt(De.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:tt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(xs(e,tt._jsonSchema))return tt.fromBase64String(e.bytes)}}tt._jsonSchemaVersion="firestore/bytes/1.0",tt._jsonSchema={type:Ee("string",tt._jsonSchemaVersion),bytes:Ee("string")};/**
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
 */class wm{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class pl{constructor(e){this._methodName=e}}/**
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
 */class Et{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Et._jsonSchemaVersion}}static fromJSON(e){if(xs(e,Et._jsonSchema))return new Et(e.latitude,e.longitude)}}Et._jsonSchemaVersion="firestore/geoPoint/1.0",Et._jsonSchema={type:Ee("string",Et._jsonSchemaVersion),latitude:Ee("number"),longitude:Ee("number")};/**
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
 */class dt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:dt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(xs(e,dt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new dt(e.vectorValues);throw new L(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dt._jsonSchemaVersion="firestore/vectorValue/1.0",dt._jsonSchema={type:Ee("string",dt._jsonSchemaVersion),vectorValues:Ee("object")};/**
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
 */const gC=/^__.*__$/;class mC{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Bn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ds(e,this.data,t,this.fieldTransforms)}}function bm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B(40011,{dataSource:n})}}class gl{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new gl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return zi(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(bm(this.dataSource)&&gC.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class yC{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||To(e)}createContext(e,t,r,s=!1){return new gl({dataSource:e,methodName:t,targetDoc:r,path:Ve.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ml(n){const e=n._freezeSettings(),t=To(n._databaseId);return new yC(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Tm(n,e,t,r,s,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);Im("Data must be an object, but it was:",o,r);const c=Em(r,o);let l,h;if(i.merge)l=new at(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Co(e,p,t);if(!o.contains(m))throw new L(k.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);TC(f,m)||f.push(m)}l=new at(f),h=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,h=o.fieldTransforms;return new mC(new et(c),l,h)}class yl extends pl{_toFieldTransform(e){return new sA(e.path,new gs)}isEqual(e){return e instanceof yl}}function _C(n,e,t,r=!1){return _l(t,n.createContext(r?4:3,e))}function _l(n,e){if(vm(n=qe(n)))return Im("Unsupported field value:",e,n),Em(n,e);if(n instanceof pl)return(function(r,s){if(!bm(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=_l(c,s.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ue.fromDate(r);return{timestampValue:ji(s.serializer,i)}}if(r instanceof ue){const i=new ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ji(s.serializer,i)}}if(r instanceof Et)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof tt)return{bytesValue:Bg(s.serializer,r._byteString)};if(r instanceof _e){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Qc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof dt)return(function(o,c){const l=o instanceof dt?o.toArray():o;return{mapValue:{fields:{[mg]:{stringValue:yg},[Li]:{arrayValue:{values:l.map((f=>{if(typeof f!="number")throw c.createError("VectorValues must only contain numeric values.");return Gc(c.serializer,f)}))}}}}}})(r,s);if(Jg(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${uo(r)}`)})(n,e)}function Em(n,e){const t={};return ug(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Un(n,((r,s)=>{const i=_l(s,e.childContextForField(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function vm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ue||n instanceof Et||n instanceof tt||n instanceof _e||n instanceof pl||n instanceof dt||Jg(n))}function Im(n,e,t){if(!vm(t)||!cg(t)){const r=uo(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function Co(n,e,t){if((e=qe(e))instanceof wm)return e._internalPath;if(typeof e=="string")return bC(n,e);throw zi("Field path arguments must be of type string or ",n,!1,void 0,t)}const wC=new RegExp("[~\\*/\\[\\]]");function bC(n,e,t){if(e.search(wC)>=0)throw zi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new wm(...e.split("."))._internalPath}catch{throw zi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function zi(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new L(k.INVALID_ARGUMENT,c+n+l)}function TC(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class EC{convertValue(e,t="none"){switch(pn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(fn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw B(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Un(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Li].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>ye(o.doubleValue)));return new dt(t)}convertGeoPoint(e){return new Et(ye(e.latitude),ye(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=po(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ds(e));default:return null}}convertTimestamp(e){const t=dn(e);return new ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ce.fromString(e);re(Wg(r),9688,{name:e});const s=new fs(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(t)||Mt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class wl extends EC{constructor(e){super(),this.firestore=e}convertBytes(e){return new tt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _e(this.firestore,null,t)}}function Dt(){return new yl("serverTimestamp")}const yd="@firebase/firestore",_d="4.10.0";/**
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
 */function wd(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class Am{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Co("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class vC extends Am{data(){return super.data()}}/**
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
 */function Cm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bl{}class IC extends bl{}function Rm(n,e,...t){let r=[];e instanceof bl&&r.push(e),r=r.concat(t),(function(i){const o=i.filter((l=>l instanceof Tl)).length,c=i.filter((l=>l instanceof Ro)).length;if(o>1||o>0&&c>0)throw new L(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Ro extends IC{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ro(e,t,r)}_apply(e){const t=this._parse(e);return km(e._query,t),new qn(e.firestore,e.converter,Ja(e._query,t))}_parse(e){const t=ml(e.firestore);return(function(i,o,c,l,h,f,p){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new L(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Td(p,f);const R=[];for(const x of p)R.push(bd(l,i,x));m={arrayValue:{values:R}}}else m=bd(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Td(p,f),m=_C(c,o,p,f==="in"||f==="not-in");return be.create(h,f,m)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Sm(n,e,t){const r=e,s=Co("where",n);return Ro._create(s,r,t)}class Tl extends bl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Tl(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:gt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)km(o,l),o=Ja(o,l)})(e._query,t),new qn(e.firestore,e.converter,Ja(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function bd(n,e,t){if(typeof(t=qe(t))=="string"){if(t==="")throw new L(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ag(e)&&t.indexOf("/")!==-1)throw new L(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ce.fromString(t));if(!j.isDocumentKey(r))throw new L(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Nh(n,new j(r))}if(t instanceof _e)return Nh(n,t._key);throw new L(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${uo(t)}.`)}function Td(n,e){if(!Array.isArray(n)||n.length===0)throw new L(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function km(n,e){const t=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new L(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Pm(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Qr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kn extends Am{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new wi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Co("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=kn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}kn._jsonSchemaVersion="firestore/documentSnapshot/1.0",kn._jsonSchema={type:Ee("string",kn._jsonSchemaVersion),bundleSource:Ee("string","DocumentSnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class wi extends kn{data(e={}){return super.data(e)}}class Pn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Qr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new wi(this._firestore,this._userDataWriter,r.key,r,new Qr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new wi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Qr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new wi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Qr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:AC(c.type),doc:l,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Pn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=jc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function AC(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B(61501,{type:n})}}/**
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
 */Pn._jsonSchemaVersion="firestore/querySnapshot/1.0",Pn._jsonSchema={type:Ee("string",Pn._jsonSchemaVersion),bundleSource:Ee("string","QuerySnapshot"),bundleName:Ee("string"),bundle:Ee("string")};/**
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
 */function So(n){n=rt(n,_e);const e=rt(n.firestore,yn),t=Ao(e);return aC(t,n._key).then((r=>Dm(e,n,r)))}function xm(n){n=rt(n,qn);const e=rt(n.firestore,yn),t=Ao(e),r=new wl(e);return Cm(n._query),cC(t,n._query).then((s=>new Pn(e,r,n,s)))}function mr(n,e,t){n=rt(n,_e);const r=rt(n.firestore,yn),s=Pm(n.converter,e,t),i=ml(r);return vl(r,[Tm(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,ht.none())])}function Vm(n){return vl(rt(n.firestore,yn),[new Wc(n._key,ht.none())])}function CC(n,e){const t=rt(n.firestore,yn),r=Ms(n),s=Pm(n.converter,e),i=ml(n.firestore);return vl(t,[Tm(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,ht.exists(!1))]).then((()=>r))}function El(n,...e){var h,f,p;n=qe(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||wd(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(wd(e[r])){const m=e[r];e[r]=(h=m.next)==null?void 0:h.bind(m),e[r+1]=(f=m.error)==null?void 0:f.bind(m),e[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let i,o,c;if(n instanceof _e)o=rt(n.firestore,yn),c=go(n._key.path),i={next:m=>{e[r]&&e[r](Dm(o,n,m))},error:e[r+1],complete:e[r+2]};else{const m=rt(n,qn);o=rt(m.firestore,yn),c=m._query;const y=new wl(o);i={next:R=>{e[r]&&e[r](new Pn(o,y,m,R))},error:e[r+1],complete:e[r+2]},Cm(n._query)}const l=Ao(o);return oC(l,c,s,i)}function vl(n,e){const t=Ao(n);return lC(t,e)}function Dm(n,e,t){const r=t.docs.get(e._key),s=new wl(n);return new kn(n,s,e._key,r,new Qr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){cI(Tr),cr(new Dn("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new yn(new hI(r.getProvider("auth-internal")),new pI(o,r.getProvider("app-check-internal")),xI(o,s),o);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),on(yd,_d,e),on(yd,_d,"esm2020")})();const RC={apiKey:"AIzaSyCvK7ounDvKzgKGHK30uCFqDUbqZkoOGJc",authDomain:"cardy-hardy.firebaseapp.com",projectId:"cardy-hardy",storageBucket:"cardy-hardy.firebasestorage.app",messagingSenderId:"756160918063",appId:"1:756160918063:web:830975f45634054dfe8cda",measurementId:"G-MXM77YZD95"};let _a=null,wa=null,ba=null,Ta=null;const Nm=()=>(_a||(_a=gp(RC)),_a),yr=()=>(wa||(wa=oI(Nm())),wa),Ed=()=>(ba||(ba=new St),ba),Sr=()=>(Ta||(Ta=fC(Nm())),Ta),Om=()=>Ms(Sr(),"admins","list"),Lm=()=>Ms(Sr(),"config","site"),Il=n=>Ms(Sr(),"users",n),Mm=()=>_m(Sr(),"users"),ko=()=>_m(Sr(),"currentGames"),Fm=n=>Ms(Sr(),"currentGames",n),ic=(n="")=>n.trim().toLowerCase(),SC=()=>typeof navigator<"u"&&/iPad|iPhone|iPod/i.test(navigator.userAgent||""),kC=async()=>{const n=[{key:"indexedDB",value:Wp},{key:"local",value:Bp},{key:"session",value:Oc}];let e=null;for(const t of n)try{return await GE(yr(),t.value),{persistence:t.key,error:null}}catch(r){e=r,console.warn(`Failed to set ${t.key} persistence`,r)}return{persistence:"none",error:e}},PC=async()=>{let n=null,e=null;try{e=await Ev(yr())}catch(r){n=r,console.error("Firebase redirect sign-in failed",r)}const t=await kC();return{redirectError:n,redirectResult:e,persistence:t}},Al=async()=>{try{return await pv(yr(),Ed())}catch(n){if(!SC())throw n;return console.warn("Popup sign-in failed on iOS, falling back to redirect",n),bv(yr(),Ed())}},_r=()=>(console.log("start signout"),QE(yr()).then(()=>{console.log("signout completed")})),xC=n=>KE(yr(),n),Um=async()=>{const n=await So(Om());if(!n.exists())return[];const e=n.data();return Array.isArray(e.items)?e.items:[]},VC=async(n="")=>(await Um()).map(ic).includes(ic(n)),DC=async n=>mr(Om(),{items:n.map(ic).filter(Boolean),updatedAt:Dt()},{merge:!0}),Cl=async()=>{const n=await So(Lm());if(!n.exists())return null;const e=n.data();return typeof e.nextMeetupDate=="number"?e.nextMeetupDate:null},NC=async n=>mr(Lm(),{nextMeetupDate:n,updatedAt:Dt()},{merge:!0}),OC=async n=>{const e=Il(n.id),t=await So(e),r={email:n.email,firstName:n.firstName,lastName:n.lastName,...n.userType?{userType:n.userType}:{},updatedAt:Dt()};return t.exists()?mr(e,r,{merge:!0}):mr(e,{...r,createdAt:Dt()})},LC=async n=>{const e=n==null?void 0:n.uid;if(!e)return!1;const t=Il(e);if((await So(t)).exists())return!0;const s=(n.email||"").trim().toLowerCase();if(s&&!(await xm(Rm(Mm(),Sm("email","==",s)))).empty)return!0;const i=n.displayName||"",[o="",...c]=i.trim().split(/\s+/),l=c.join(" ");return await mr(t,{email:s,firstName:o,lastName:l,userType:"unverified",createdAt:Dt(),updatedAt:Dt()}),!0},MC=()=>{const n=new wr([]),e=El(Mm(),t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));r.sort((s,i)=>{var l,h,f,p,m,y,R,x,N,D;const o=(l=s==null?void 0:s.createdAt)!=null&&l.seconds?s.createdAt.seconds*1e3:((m=(p=(f=(h=s==null?void 0:s.createdAt)==null?void 0:h.toDate)==null?void 0:f.call(h))==null?void 0:p.getTime)==null?void 0:m.call(p))??0;return((y=i==null?void 0:i.createdAt)!=null&&y.seconds?i.createdAt.seconds*1e3:((D=(N=(x=(R=i==null?void 0:i.createdAt)==null?void 0:R.toDate)==null?void 0:x.call(R))==null?void 0:N.getTime)==null?void 0:D.call(N))??0)-o}),n.next(r)},t=>{console.error("Failed to listen to users",t)});return n.unsubscribe=e,n},FC=async n=>n?(await Vm(Il(n)),!0):!1,UC=()=>{const n=new wr([]),e=El(ko(),t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));n.next(Rl(r))},t=>{console.error("Failed to listen to current games",t)});return n.unsubscribe=e,n},jC=()=>{const n=new wr([]),e=El(Rm(ko(),Sm("isVisible","==",!0)),t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));n.next(Rl(r))},t=>{console.error("Failed to listen to visible current games",t)});return n.unsubscribe=e,n},BC=async()=>{const e=(await xm(ko())).docs.map(t=>({id:t.id,...t.data()}));return Rl(e)},HC=async n=>{const e=$C(n);return n.id?mr(Fm(n.id),{...e,updatedAt:Dt()},{merge:!0}):CC(ko(),{...e,createdAt:Dt(),updatedAt:Dt()})},qC=async n=>n?(await Vm(Fm(n)),!0):!1,$C=n=>{const e={title:(n.title||"").trim(),dateAddedToCollection:n.dateAddedToCollection,imageUrl:(n.imageUrl||"").trim(),manufacturer:(n.manufacturer||"").trim(),notes:(n.notes||"").trim(),isVisible:n.isVisible!==!1};return typeof n.yearReleased=="number"&&!Number.isNaN(n.yearReleased)?e.yearReleased=n.yearReleased:e.yearReleased=null,e},vd=n=>{if(!n)return 0;if(typeof n.toDate=="function")return n.toDate().getTime();if(typeof n=="number")return n;if(n.seconds)return n.seconds*1e3;const e=new Date(n).getTime();return Number.isNaN(e)?0:e},Rl=n=>[...n].sort((e,t)=>vd(t.dateAddedToCollection)-vd(e.dateAddedToCollection)),Sl=({onUser:n,toast:e})=>{if(typeof n!="function")throw new Error("startAuthFlow requires an onUser callback.");PC().then(({redirectError:t,redirectResult:r,persistence:s})=>{var i,o;t&&((i=e==null?void 0:e.error)==null||i.call(e,"Sign-in failed after redirect. Try again.")),s!=null&&s.error&&((o=e==null?void 0:e.error)==null||o.call(e,"Safari blocked login storage. Check cookie settings.")),r!=null&&r.user&&n(r.user,"redirectResult")}).catch(t=>{var r;console.error("Failed to prepare auth",t),(r=e==null?void 0:e.error)==null||r.call(e,"Sign-in setup failed. Try again.")}),xC(t=>{n(t,"onAuthChanged")})},zC=async({user:n,mountSso:e,toast:t,onDenied:r,onPermissionsError:s}={})=>{var o,c;let i=!1;try{i=await VC((n==null?void 0:n.email)||"")}catch(l){return console.error("Failed to load admin list",l),s==null||s(l),(o=t==null?void 0:t.error)==null||o.call(t,"Unable to verify access. Check Firestore rules."),e==null||e("denied",(n==null?void 0:n.email)||"","auth:permissions"),!1}return i?!0:(r==null||r(),(c=t==null?void 0:t.error)==null||c.call(t,`Signed in as ${(n==null?void 0:n.email)||"unknown"} but not authorized.`),e==null||e("denied",(n==null?void 0:n.email)||"","auth:denied"),!1)},kl=async({user:n,mountSso:e,toast:t,setCurrentUser:r,onSignedOut:s,onDenied:i,onAuthorized:o,reason:c=""}={})=>{if(!n)return r==null||r(null),s==null||s(),e==null||e("login","","auth:logged-out"),!1;try{await LC(n)}catch(h){console.warn("Failed to ensure user profile",h)}return await zC({user:n,mountSso:e,toast:t,onDenied:i,onPermissionsError:i})?(r==null||r(n),o==null||o(n,c),!0):!1},Po=F(({status:n,userEmail:e,adminEmail:t,onSignIn:r,onSignOut:s})=>(Po.inputs(i=>{[{status:n,userEmail:e,adminEmail:t,onSignIn:r,onSignOut:s}]=i,r=Te(r),s=Te(s)}),[()=>n==="loading"?ia.class`panel auth-panel`(ge("Checking login...")):n==="denied"?ia.class`panel auth-panel`(xt("Access denied"),ge.class`auth-warning`(()=>e||"This account"," is not authorized."),ge("Please be patient as we review your account to become verified status."),T.class`auth-actions`(se.type`button`.class`add-button`.onClick(s)("Sign out"))):ia.class`panel auth-panel`(xt("Sign in"),ge("Use Google to access admin tools."),T.class`auth-actions`(se.type`button`.class`add-button`.onClick(r)("Sign in with Google")))])),GC=F(()=>{let n=[];const e=Ae(()=>{});F.promise=Um().then(o=>{n=Array.isArray(o)?o:[],e()}).catch(o=>{console.error("Failed to load admin list",o)});const t=(o,c)=>{n=n.map((l,h)=>h===o?c:l),e()},r=()=>{n=[...n,""],e()},s=o=>{n=n.filter((c,l)=>l!==o),e()},i=()=>DC(n).then(()=>{alert("saved")}).catch(o=>{console.error("Failed to save admin list",o)});return io.style`border:0;padding:0;margin:0;`(T.style`display:flex;flex-direction:column;gap:0.6em;`(o=>(n.length?n:[""]).map((c,l)=>T.style`display:flex;gap:0.6em;align-items:center;`(ke.type`text`.value(h=>c).onInput(h=>t(l,h.target.value)).style`width:100%`,se.onClick(()=>s(l))("remove")))),T.style`display:flex;gap:0.6em;align-items:center;margin-top:0.8em;flex-wrap:wrap;`(se.onClick(r)("add"),se.onClick(i)("save to firestore")))});function jm({startDateTime:n,message:e,subject:t}){n=new Date(n);const{year:r,month:s}=Pl(n),i=("0"+(n.getDate()+1)).slice(-2),o=Gi(n),c=new Date(new Date(n).setHours(n.getHours()+2)),l=Gi(c),h=encodeURIComponent(e),f=encodeURIComponent(t);return`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${r}${s}${i}${o}%2F${r}${s}${i}${l}&details=${h}&location=&text=${f}`}function Bm({startDateTime:n,message:e,subject:t}){n=new Date(n);const{year:r,month:s,day:i,hours:o}=Pl(n),l=new Date(new Date(n).setHours(n.getHours()+2)).getHours(),h=encodeURIComponent(e.replace(/\n/g,"<br>")),f=encodeURIComponent(t);return`https://outlook.live.com/calendar/0/action/compose?allday=false&body=${h}&enddt=${r}-${s}-${i}T${l}%3A00%3A00&location=&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=${r}-${s}-${i}T${o}%3A00%3A00&subject=${f}`}function Hm({startDateTime:n,message:e,subject:t}){n=new Date(n);const{year:r,month:s}=Pl(n),i=("0"+(n.getDate()+1)).slice(-2),o=Gi(n),c=new Date(new Date(n).setHours(n.getHours()+2)),l=Gi(c);return`BEGIN:VCALENDAR
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
END:VCALENDAR`}function Pl(n){n=new Date(n);const e=n.getFullYear(),t=("0"+(n.getMonth()+1)).slice(-2),r=("0"+n.getDate()).slice(-2),s=n.getHours();return{year:e,month:t,day:r,hours:s}}function Gi(n){const e=String(n.getUTCHours()).padStart(2,"0"),t=String(n.getUTCMinutes()).padStart(2,"0"),r=String(n.getUTCSeconds()).padStart(2,"0");return`T${e}${t}${r}Z`}const qm=F(n=>{qm.updates(t=>[n]=t);const e=new Date(n);return T.style`text-align:center;`(T(ee("🗓️ ",e.toLocaleString("default",{weekday:"long"}),", ",e.toLocaleString("default",{month:"long"})," ",e.getDate(),$m(e))),t=>sp({date:n}),WC(e))});function WC(n){return T.style`font-size:.65em;opacity:.7`(JC(n))}function Ea(n,e){const t={hour:"numeric",minute:"numeric",hour12:!0,timeZone:e,timeZoneName:"short"};return new Intl.DateTimeFormat("en-US",t).format(n)}function JC(n){const e=Ea(n,"America/New_York"),t=Ea(n,"America/Chicago"),r=Ea(n,"America/Los_Angeles");return`${e} / ${t} / ${r}`}const Me={subject:"Cary Hardy Patreon meetup",message:`
    Link to virtual meeting is posted to Patreon on a day of meeting
  
    https://www.patreon.com/caryhardy
  `.trim().replace(/    /g,"")},xo=F(({date:n,showLearnMore:e=!0})=>{n=new Date(n),xo.updates(h=>{[{date:n,showLearnMore:e}]=h});let t=!1;const r=jm({startDateTime:n,message:Me.message,subject:Me.subject}),s=Bm({startDateTime:n,message:Me.message,subject:Me.subject}),i=[{type:"google",url:r},{type:"outlook",url:s}],o=Hm({startDateTime:n,message:Me.message,subject:Me.subject});var c=new Blob([o],{type:"text/calendar"});const l=window.URL.createObjectURL(c);return st(T.style`padding:.5em;`("Countdown until the next, Patreon LE only, group meetup"),()=>qm(n),T.style`white-space:nowrap;font-size:.7em;opacity:.8`("save meetup to your calendar using links below 👇"),T.style`background-color:black;padding:0 0 .2em 0;`(T.style`white-space:nowrap;font-size:.5em;opacity:.6`("choose your calendar type below"),T.style`display:flex;gap:1em;justify-content: center;`(i.map(h=>Id(h.type,{href:h.url},h.type==="google"?K.src`assets/media/gmail-logo-2.png`.width`48`.height`48`.border`0`:K.src`assets/media/outlook-icon.png`.width`48`.height`48`.border`0`).key(h)),Id("ical",{href:l,download:"cary-hardy-meetup.ics"},li.viewBox`0 0 170 170`.fill`currentColor`.width`48`.height`48`(np("Apple Logo"),K.src`assets/media/ical.png`.width`48`.height`48`.border`0`))),q,T(te.style`font-size:0.7em;`(_b(W.onClick(()=>t=!t).style`color:white;`("⬜️ qr invite codes here"))))),ge.style`font-size:0.8em;opacity:0.7;line-height:0.9em;`(te("🔗 A link to virtual meetup is posted on day of meetup,",q,"in the LE ONLY 💬 chat on Patreon.")),()=>e&&T.style`padding:.8em;font-size: .7em;`(W.class`no-a-style`.href`meetup.html`(se.type`button`("learn more"))))});function $m(n){var e=n.getDate(),t="th";return e===1||e===21||e===31?"st":e===2||e===22?"nd":e===3||e===23?"rd":t}const Id=(n,e,t)=>{const r=W.class`small-icon-link`.href`${e.href}`.attr("target","_blank");return(e.download?r.attr("download",e.download):r)(T.class`small-icon`(t),te.style`font-size:0.5em;`(n))};function va(n){var e=document.createElement("textarea");e.value=n,document.body.appendChild(e),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(e)}const zm=F(({nextMeetupDate:n,onQrUrlChange:e})=>{zm.inputs(i=>{[{nextMeetupDate:n,onQrUrlChange:e}]=i,e=Te(e)});const t=jm({startDateTime:n,message:Me.message,subject:Me.subject}),r=Bm({startDateTime:n,message:Me.message,subject:Me.subject}),s=Hm({startDateTime:n,message:Me.message,subject:Me.subject});return io.style`border:0;padding:0;margin:0;`(T(T.style`display:flex;flex-wrap:wrap;gap:1em`(T(Qe("Message"),T(ke.type`text`.value(i=>Me.message).onChange(i=>Me.message=i.target.value).style`width:100%`)),T(Qe("Subject"),T(ke.type`text`.value(i=>Me.subject).onChange(i=>Me.subject=i.target.value).style`width:100%`))),q,q,T.style`display:flex;flex-wrap:wrap;gap:1em;flex-direction:column;`(T.style`display:flex;flex-grow:1`(li.attr("xmlns","http://www.w3.org/2000/svg").attr("viewBox","0 0 48 48").attr("width","48").attr("height","48")(bb.attr("width","22").attr("height","22").attr("x","13").attr("y","13").attr("fill","#fff"),ei.attr("fill","#1e88e5").attr("points","25.68,20.92 26.688,22.36 28.272,21.208 28.272,29.56 30,29.56 30,18.616 28.56,18.616"),At.attr("fill","#1e88e5").attr("d","M22.943,23.745c0.625-0.574,1.013-1.37,1.013-2.249c0-1.747-1.533-3.168-3.417-3.168 c-1.602,0-2.972,1.009-3.33,2.453l1.657,0.421c0.165-0.664,0.868-1.146,1.673-1.146c0.942,0,1.709,0.646,1.709,1.44 c0,0.794-0.767,1.44-1.709,1.44h-0.997v1.728h0.997c1.081,0,1.993,0.751,1.993,1.64c0,0.904-0.866,1.64-1.931,1.64 c-0.962,0-1.784-0.61-1.914-1.418L17,26.802c0.262,1.636,1.81,2.87,3.6,2.87c2.007,0,3.64-1.511,3.64-3.368 C24.24,25.281,23.736,24.363,22.943,23.745z"),ei.attr("fill","#fbc02d").attr("points","34,42 14,42 13,38 14,34 34,34 35,38"),ei.attr("fill","#4caf50").attr("points","38,35 42,34 42,14 38,13 34,14 34,34"),At.attr("fill","#1e88e5").attr("d","M34,14l1-4l-1-4H9C7.343,6,6,7.343,6,9v25l4,1l4-1V14H34z"),ei.attr("fill","#e53935").attr("points","34,34 34,42 42,34"),At.attr("fill","#1565c0").attr("d","M39,6h-5v8h8V9C42,7.343,40.657,6,39,6z"),At.attr("fill","#1565c0").attr("d","M9,42h5v-8H6v5C6,40.657,7.343,42,9,42z")),ke.type`text`.style`width:100%`.value(t),se.onClick(()=>va(t))("copy"),se.onClick(()=>e(t))("qr")),T.style`display:flex;flex:1`(li.attr("xmlns","http://www.w3.org/2000/svg").attr("viewBox","0 0 48 48").attr("width","48").attr("height","48")(At.attr("fill","#03A9F4").attr("d","M21,31c0,1.104,0.896,2,2,2h17c1.104,0,2-0.896,2-2V16c0-1.104-0.896-2-2-2H23c-1.104,0-2,0.896-2,2V31z"),At.attr("fill","#B3E5FC").attr("d","M42,16.975V16c0-0.428-0.137-0.823-0.367-1.148l-11.264,6.932l-7.542-4.656L22.125,19l8.459,5L42,16.975z"),At.attr("fill","#0277BD").attr("d","M27 41.46L6 37.46 6 9.46 27 5.46z"),At.attr("fill","#FFF").attr("d","M21.216,18.311c-1.098-1.275-2.546-1.913-4.328-1.913c-1.892,0-3.408,0.669-4.554,2.003c-1.144,1.337-1.719,3.088-1.719,5.246c0,2.045,0.564,3.714,1.69,4.986c1.126,1.273,2.592,1.91,4.378,1.91c1.84,0,3.331-0.652,4.474-1.975c1.143-1.313,1.712-3.043,1.712-5.199C22.869,21.281,22.318,19.595,21.216,18.311z M19.049,26.735c-0.568,0.769-1.339,1.152-2.313,1.152c-0.939,0-1.699-0.394-2.285-1.187c-0.581-0.785-0.87-1.861-0.87-3.211c0-1.336,0.289-2.414,0.87-3.225c0.586-0.81,1.368-1.211,2.355-1.211c0.962,0,1.718,0.393,2.267,1.178c0.555,0.795,0.833,1.895,0.833,3.31C19.907,24.906,19.618,25.968,19.049,26.735z")),ke.type`text`.style`width:100%`.value(r),se.onClick(()=>va(r))("copy"),se.onClick(()=>e(r))("qr")),T.style`display:flex;flex:1`(li.attr("viewBox","0 0 170 170").attr("fill","currentColor").attr("width","48").attr("height","48")(np("Apple Logo"),At.attr("d","M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.24z")),ke.type`text`.style`width:100%`.value(s),se.onClick(()=>va(s))("copy")))))}),Gm=F(({nextMeetupDate:n,date:e,time:t,onDate:r,onSave:s})=>(Gm.inputs(i=>{[{nextMeetupDate:n,date:e,time:t,onDate:r,onSave:s}]=i,r=Te(r),s=Te(s)}),io.style`border:0;padding:0;margin:0;`(i=>Wm({date:e,time:t,onDate:r}),T.style`margin-top:0.6em;`(se.onClick(s)("save to firestore")),mb,T.style`text-align:center;`(i=>xo({date:n}))))),Wm=F(({date:n,time:e,onDate:t})=>{let r=new Date(n+" "+e).getTime();Wm.inputs(o=>{[{date:n,time:e,onDate:t}]=o,t=Te(t),r=new Date(n+" "+e).getTime()});const s=o=>{const c=o.target.value;t(new Date(c+" "+e).getTime())},i=o=>{const c=o.target.value;t(new Date(n+" "+c).getTime())};return T.style`display:flex;flex-wrap:wrap;gap:1em`(T(Qe("Date"),T(ke.type`date`.value(o=>n).onChange(s).style`width:100%`)),T(Qe.attr("for","time")("Time"),T(ke.type`time`.value(o=>e).onChange(i).style`width:100%`)),T(Qe.attr("for","time")("UTC"),T(o=>r)))});let ai=null;const KC=()=>window.QRCode?Promise.resolve():ai||(ai=new Promise((n,e)=>{const t=document.createElement("script");t.type="text/javascript",t.src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js",t.onload=()=>n(),t.onerror=()=>e(new Error("Failed to load QRCode library")),document.head.appendChild(t)}),ai),Jm=F(n=>{Jm.updates(i=>{i[0]!==n&&([n]=i,s())});const e=`qr-code-${Math.random().toString(36).slice(2,12)}`,t=()=>{window.requestAnimationFrame(s)},r=()=>{const i=window.QRCode;if(!i||!n)return;const o=document.getElementById(e);o&&(o.innerHTML="",new i(o,{text:n,width:300,height:300,colorDark:"#000000",colorLight:"#ffffff",correctLevel:i.CorrectLevel.L}))},s=()=>{KC().then(r).catch(i=>{console.error("Failed to render QR code",i)})};return Pf([n],t),T.id`${e}`}),Km=F(({qrUrl:n,onQrUrlChange:e})=>(Km.inputs(t=>{[{qrUrl:n,onQrUrlChange:e}]=t,e=Te(e),console.log("latest qrUrl",{qrUrl:n,x:t})}),io.style`border:0;padding:0;margin:0;`(ke.type`text`.placeholder`paste website address`.value(t=>n).maxLength`1000`.onKeyUp(t=>(n=t.target.value,e(t.target.value))).onInput(t=>(n=t.target.value,e(t.target.value))),T.style`display:flex;flex-direction:column;align-items:center;gap:0.5em;`(t=>n&&Jm(n),t=>n&&te.style`max-width:300px;overflow-wrap:anywhere;text-align:center;opacity:0.75;line-height:1.3;`(r=>n)))));function Ad(n){const e=new Date(n),t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),i=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0");return{date:`${t}-${r}-${s}`,time:`${i}:${o}`}}let Cd=!1;const Qm=F(n=>(e=Date.now(),t="",{date:r,time:s}=Ad(Number(e)))=>{Qm.inputs(([c])=>{Te(c)});function i(){const c=Ad(Number(e));r=c.date,s=c.time}Cd||(Cd=!0,F.promise=Cl().then(c=>{typeof c=="number"&&(e=c,i())}).catch(c=>{console.error("Failed to load next meetup date",c)}));const o=()=>NC(Number(e)).then(()=>{alert("saved")}).catch(c=>{console.error("Failed to save meetup date",c)});return T.style`max-width:1200px;margin:0 auto;padding:0 1em;`(As(K.src`assets/media/icon.png`.style`width:40px;margin-right:10px;`,"Hardy Tools"),T.style`display:flex;flex-wrap:wrap;gap:1em;text-align:left;`(c=>(console.log("rerendering qr maker",{qrUrl:t}),Yr({labelText:"QR Maker",flex:"1",contentNode:()=>Km({qrUrl:t,onQrUrlChange:l=>{t=l,console.debug("qrUrl changed!",t)}})})),c=>Yr({labelText:"Calendar Links",flex:"2",contentNode:zm({nextMeetupDate:e,onQrUrlChange:l=>{t=l}})}),c=>Yr({labelText:"meeting tools",flex:"1",contentNode:Gm({nextMeetupDate:e,date:r,time:s,onDate:l=>{e=l,i()},onSave:o})}),c=>Yr({labelText:"admin users",flex:"1",contentNode:GC}),T.style`flex:1;min-width:min(320px, 100%);background:#1f1f1f;border:1px solid rgba(255,255,255,0.3);border-radius:0.8em;overflow:hidden;`(W.href`/admin/user.html`.style`display:block;padding:0.9em 1em;color:#fff;text-decoration:none;font-weight:600;text-align:center;`("Open Users Admin")),T.style`flex:1;min-width:min(320px, 100%);background:linear-gradient(135deg, rgba(185,28,28,0.58), rgba(249,115,22,0.42), rgba(250,204,21,0.24));border:1px solid rgba(255,185,62,0.55);border-radius:0.8em;overflow:hidden;`(W.href`/admin/current-games.html`.style`display:block;padding:0.9em 1em;color:#fff;text-decoration:none;font-weight:800;text-align:center;`("Current Game Lineup"))),q)}),Yr=F(({labelText:n,flex:e,contentNode:t})=>{Yr.inputs(i=>[{labelText:n,flex:e,contentNode:t}]=i);let r=!1;const s=()=>{r=!r};return T.style`flex:${e};min-width:min(500px, 100%);background:#1f1f1f;border:1px solid rgba(255,255,255,0.3);border-radius:0.8em;overflow:hidden;`(T.onClick(s).style`cursor:pointer;padding:0.75em 1em;color:#fff;user-select:none;font-weight:600;display:flex;gap:0.6em;align-items:center;`(T.style`width:1em;text-align:center;`(()=>r?"▼":"▶"),T(n)),()=>r?T.style`padding:0.8em 1em;border-top:1px solid rgba(255,255,255,0.2);`(i=>t):"")}),Vo=F(n=>{Vo.inputs(([i])=>{n=Te(i)});const e=()=>{window.location.href="/index.html"},t=()=>{window.open("https://github.com/AckerApple/cary-hardy","_blank")},r=()=>{window.location.href="/admin/user.html"},s=()=>{window.location.href="/admin/current-games.html"};return[se.type`button`.class`top-nav-pill`.onClick(e)("🏠 home"),se.type`button`.class`top-nav-pill`.onClick(()=>{window.location.href="/admin.html"})("⭐️ admin home"),se.type`button`.class`top-nav-pill`.onClick(s)("🎮 lineup"),se.type`button`.class`top-nav-pill`.onClick(t)("🔗 code base"),se.type`button`.class`top-nav-pill`.onClick(r)("👥 users"),se.type`button`.class`top-nav-pill`.onClick(n)("🚪 logout")]});let Rd=!1;const QC=F(()=>Rd?"":(Rd=!0,un(`
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
    @media (min-width: 1024px) {
      .top-nav-inner {
        max-width: 900px;
      }
    }
  `))),Ym=F(({className:n="top-nav",content:e})=>(Ym.inputs(t=>{[{className:n,content:e}]=t}),T.class`${n}`(T.class`top-nav-row`(typeof e=="function"?e():e)))),jt=F(n=>(jt.inputs(e=>{[n]=e}),st(QC(),T.class`top-nav-shell top-nav-fixed`(Ym({className:"top-nav top-nav-inner",content:n})))));let Sd=!1;const iR=F(()=>{let n="loading",e="",t=null;const r=Ae((c,l="",h="")=>{n=c,e=l}),s=Ae(c=>{t=c,console.log("currentUser",t),c||(n="login")}),i=()=>{r("login","","auth:logged-out"),n="login"},o=Ae((c,l="")=>{n="authorized",e=(c==null?void 0:c.email)||""});return Sd||(Sd=!0,Sl({onUser:(c,l)=>{kl({user:c,mountSso:r,setCurrentUser:s,onSignedOut:i,onDenied:()=>{r("denied",(t==null?void 0:t.email)||"","auth:denied")},onAuthorized:o,reason:l})},toast:{error:c=>console.warn(c)}})),st(un(`
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
    `),c=>Xm(n,e,i))}),Xm=F((n,e,t)=>{Xm.inputs(s=>{[n,e,t]=s,t=Te(t)});const r=()=>_r().then(t).catch(s=>{console.error("Failed to sign out",s)});return[()=>n==="authorized"?st(jt(()=>Vo(r)),Qm(t)):T(Po({status:n,userEmail:e,adminEmail:"",onSignIn:()=>Al().catch(s=>{console.error("Failed to sign in",s)}),onSignOut:()=>(n="login",_r().catch(s=>{console.error("Failed to sign out",s)}))}))]}),Zm=F(({user:n,onEdit:e,formatCreatedAt:t})=>(Zm.inputs(r=>{[{user:n,onEdit:e,formatCreatedAt:t}]=r}),T.style`display:grid;grid-template-columns:1.1fr 1.4fr 0.7fr 0.7fr auto;gap:0.6em;align-items:center;padding:0.4em 0;`(T(`${n.firstName||""} ${n.lastName||""}`.trim()||"—"),T.style`opacity:0.85;`(n.email||"—"),te.style`opacity:0.85;color:${n.userType==="verified"?"#6fe3a1":"#f26d6d"};`(n.userType||"unverified"),te.style`opacity:0.7;`(t(n.createdAt)),se.type`button`.onClick(e).style`border:0;background:transparent;color:#fff;cursor:pointer;font-size:1.1em;`.attr("title","Edit user")("✏️")))),ey=F(({userId:n,createdAtLabel:e,editUser:t,isSaving:r,isDeleting:s,onChange:i,onSave:o,onDelete:c,onCancel:l})=>{ey.inputs(f=>{[{userId:n,createdAtLabel:e,editUser:t,isSaving:r,isDeleting:s,onChange:i,onSave:o,onDelete:c,onCancel:l}]=f});const h=f=>{i({...t,...f})};return T.style`margin-top:1em;padding-top:1em;border-top:1px solid rgba(255,255,255,0.15);display:grid;gap:0.6em;`(T.style`font-weight:600;`("Edit User"),te.style`opacity:0.6;`("User ID: ",f=>n),te.style`opacity:0.6;`("Created at: ",f=>e),T.style`display:grid;grid-template-columns:120px 1fr;gap:0.6em;align-items:center;`(te.style`opacity:0.7;`("Email"),ke.type`email`.value(f=>(t==null?void 0:t.email)||"").onInput(f=>{var p;h({email:((p=f==null?void 0:f.target)==null?void 0:p.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),te.style`opacity:0.7;`("First name"),ke.type`text`.value(f=>(t==null?void 0:t.firstName)||"").onInput(f=>{var p;h({firstName:((p=f==null?void 0:f.target)==null?void 0:p.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),te.style`opacity:0.7;`("Last name"),ke.type`text`.value(f=>(t==null?void 0:t.lastName)||"").onInput(f=>{var p;h({lastName:((p=f==null?void 0:f.target)==null?void 0:p.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),te.style`opacity:0.7;`("Status"),pb.value(f=>(t==null?void 0:t.userType)==="verified"?"verified":"unverified").onChange(f=>{var p;h({userType:((p=f==null?void 0:f.target)==null?void 0:p.value)==="verified"?"verified":"unverified"})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(f=>Gu.value`unverified`.selected(p=>t.userType==="unverified")("unverified"),f=>Gu.value`verified`.selected(p=>t.userType==="verified")("verified"))),T.style`display:flex;gap:0.6em;`(se.type`button`.onClick(o).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:#1b1b1b;color:#fff;cursor:pointer;`(f=>r?"Saving...":"Save to Firestore"),se.type`button`.onClick(c).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:#4b1111;color:#fff;cursor:pointer;`(f=>s?"Deleting...":"Delete"),se.type`button`.onClick(l).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;cursor:pointer;`("Cancel")))});let kd=!1,Ia=!1,Gr=new wr(null),Jt=null;const oR=F(()=>{let n="loading",e="",t=null;const r=Ae((c,l="",h="")=>{n=c,e=l}),s=Ae(c=>{t=c,c||(n="login")}),i=()=>{r("login","","auth:logged-out"),n="login"},o=Ae((c,l="")=>{n="authorized",e=(c==null?void 0:c.email)||""});return kd||(kd=!0,Sl({onUser:(c,l)=>{kl({user:c,mountSso:r,setCurrentUser:s,onSignedOut:i,onDenied:()=>{r("denied",(t==null?void 0:t.email)||"","auth:denied")},onAuthorized:o,reason:l})},toast:{error:c=>console.warn(c)}})),st(un(`
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
    `),c=>ty(n,e,i))}),ty=F((n,e,t)=>(ty.inputs(r=>{[n,e,t]=r,t=Te(t)}),[()=>n==="authorized"?ny(t):T(Po({status:n,userEmail:e,adminEmail:"",onSignIn:()=>Al().catch(r=>{console.error("Failed to sign in",r)}),onSignOut:()=>(n="login",_r().catch(r=>{console.error("Failed to sign out",r)}))}))])),ny=F(n=>{ny.inputs(([D])=>{n=Te(D)});const e=()=>_r().then(n).catch(D=>{console.error("Failed to sign out",D)});let t=!1,r=!1,s=!1,i="",o=null,c=null,l=null;const h=Ae(()=>{}),f=D=>D?typeof D.toDate=="function"?D.toDate().toLocaleDateString():typeof D=="number"?new Date(D).toLocaleDateString():D.seconds?new Date(D.seconds*1e3).toLocaleDateString():"-":"-",p=D=>{if(!D)return"-";let V=null;return typeof D.toDate=="function"?V=D.toDate():typeof D=="number"?V=new Date(D):D.seconds&&(V=new Date(D.seconds*1e3)),V?V.toLocaleString():"-"},m=()=>{Jt&&(Jt(),Jt=null),t=!0,i="",h(),Gr=MC(),Jt=(Gr==null?void 0:Gr.unsubscribe)||null},y=D=>{o=D.id,c=D.createdAt??null,l={...D},h()},R=()=>{o=null,c=null,l=null,h()},x=()=>{if(!o||r)return;r=!0,i="",h();const D={id:o,email:((l==null?void 0:l.email)||"").trim(),firstName:((l==null?void 0:l.firstName)||"").trim(),lastName:((l==null?void 0:l.lastName)||"").trim(),userType:(l==null?void 0:l.userType)==="verified"?"verified":"unverified"};F.promise=OC(D).then(()=>{R()}).catch(V=>{console.error("Failed to save user",V),i="Failed to save user.",h()}).finally(()=>{r=!1,h()})},N=()=>{!o||s||confirm("Delete this user?")&&(s=!0,i="",h(),F.promise=FC(o).then(()=>{R()}).catch(D=>{console.error("Failed to delete user",D),i="Failed to delete user.",h()}).finally(()=>{s=!1,h()}))};return Ia||(Ia=!0,Jt?t=!0:m()),ro(()=>{Jt&&(Jt(),Jt=null),Ia=!1}),st(jt(()=>Vo(e)),T.class`users-page`(As("Users Admin"),T.class`users-card`(T.style`margin-top:0.75em;display:grid;gap:0.5em;`(D=>i?ge.style`color:#f6c177;`(i):"",pf(Gr,null,D=>D===null?te.style`opacity:0.7;`("Loading users..."):(t=!1,console.log("user items",{items:D,isLoading:t}),D.length?D.map(V=>Zm({user:V,onEdit:()=>y(V),formatCreatedAt:f}).key(V.id)):te.style`opacity:0.7;`("No users found.")))),D=>o?ey({userId:o,createdAtLabel:p(c),editUser:l,isSaving:r,isDeleting:s,onChange:V=>{l=V,h()},onSave:x,onDelete:N,onCancel:R}):"",q,T.class`users-actions`(W.href`../admin.html`("Back to Admin Tools")))))}),Aa=()=>({title:"",dateAddedToCollection:"",imageUrl:"",manufacturer:"",yearReleased:null,notes:"",isVisible:!0});let Pd=!1,Ca=!1,Kn=new wr(null),Kt=null;const aR=F(()=>{let n="loading",e="",t=null;const r=Ae((c,l="",h="")=>{n=c,e=l}),s=Ae(c=>{t=c,c||(n="login")}),i=()=>{r("login","","auth:logged-out"),n="login"},o=Ae((c,l="")=>{n="authorized",e=(c==null?void 0:c.email)||""});return Pd||(Pd=!0,Sl({onUser:(c,l)=>{kl({user:c,mountSso:r,setCurrentUser:s,onSignedOut:i,onDenied:()=>{r("denied",(t==null?void 0:t.email)||"","auth:denied")},onAuthorized:o,reason:l})},toast:{error:c=>console.warn(c)}})),st(un(`
      .auth-panel {
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        padding: 1.5em;
        background: rgba(0, 0, 0, 0.6);
        max-width: 520px;
        margin: 0 auto 2em auto;
      }

      .games-admin-page {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 1em 2em;
        text-align: left;
      }

      .games-admin-header {
        display: flex;
        gap: 1em;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
      }

      .games-admin-card {
        background: #1f1f1f;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 0.8em;
        padding: 1em;
        color: rgba(255, 255, 255, 0.92);
      }

      .games-admin-list {
        display: grid;
        gap: 0.6em;
      }

      .games-admin-row {
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

      .games-admin-row:hover {
        border-color: rgba(255, 185, 62, 0.65);
        background: rgba(255, 185, 62, 0.08);
      }

      .game-thumb {
        width: 72px;
        height: 72px;
        border-radius: 0.6em;
        object-fit: cover;
        background: #111;
        border: 1px solid rgba(255, 255, 255, 0.14);
      }

      .game-thumb-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #f6c177;
        font-weight: 800;
        font-size: 1.45em;
      }

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

      .games-modal-backdrop {
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

      .games-modal {
        width: min(760px, 100%);
        margin: 1em auto;
        background: #181818;
        border: 1px solid rgba(255, 185, 62, 0.35);
        border-radius: 0.8em;
        box-shadow: 0 22px 80px rgba(0,0,0,0.6);
        padding: 1em;
      }

      .games-form-grid {
        display: grid;
        grid-template-columns: 180px 1fr;
        gap: 0.65em 0.8em;
        align-items: center;
      }

      .games-form-grid input,
      .games-form-grid textarea {
        width: 100%;
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 0.5em;
        background: #101010;
        color: #fff;
        padding: 0.55em;
      }

      .games-form-grid input[type="date"] {
        color-scheme: dark;
      }

      .games-form-grid input[type="date"]::-webkit-calendar-picker-indicator {
        filter: invert(1);
        opacity: 0.85;
      }

      .games-form-grid textarea {
        min-height: 110px;
        resize: vertical;
      }

      .games-modal-actions {
        margin-top: 1em;
        display: flex;
        gap: 0.7em;
        justify-content: space-between;
        flex-wrap: wrap;
      }

      @media (max-width: 720px) {
        .games-admin-row {
          grid-template-columns: 58px 1fr;
        }
        .games-admin-row > small {
          grid-column: 2;
        }
        .game-thumb {
          width: 58px;
          height: 58px;
        }
        .games-form-grid {
          grid-template-columns: 1fr;
        }
      }
    `),c=>ry(n,e,i))}),ry=F((n,e,t)=>(ry.inputs(r=>{[n,e,t]=r,t=Te(t)}),[()=>n==="authorized"?sy(t):T(Po({status:n,userEmail:e,adminEmail:"",onSignIn:()=>Al().catch(r=>{console.error("Failed to sign in",r)}),onSignOut:()=>(n="login",_r().catch(r=>{console.error("Failed to sign out",r)}))}))])),sy=F(n=>{sy.inputs(([V])=>{n=Te(V)});const e=()=>_r().then(n).catch(V=>{console.error("Failed to sign out",V)});let t=!1,r=!1,s="",i={},o=!1,c=null,l=Aa();const h=Ae(()=>{}),f=()=>{Kt&&(Kt(),Kt=null),s="",h(),Kn=UC(),Kt=(Kn==null?void 0:Kn.unsubscribe)||null},p=()=>BC().then(V=>{console.debug("Current games list refreshed",{count:V.length,items:V}),Kn.next(V)}).catch(V=>{console.error("Failed to refresh current games list",V),s="Saved, but failed to refresh the game list. Reload the page to confirm.",h()}),m=()=>{c=null,l=Aa(),s="",i={},o=!0,h()},y=V=>{c=V.id,l={id:V.id,title:V.title||"",dateAddedToCollection:ay(V.dateAddedToCollection),imageUrl:V.imageUrl||"",manufacturer:V.manufacturer||"",yearReleased:xd(V.yearReleased),notes:V.notes||"",isVisible:V.isVisible!==!1},s="",i={},o=!0,h()},R=()=>{t||r||(c=null,l=Aa(),s="",i={},o=!1,h())},x=()=>{const V={};l.title.trim()||(V.title="Game Title is required."),l.dateAddedToCollection||(V.dateAddedToCollection="Date Added to Collection is required."),l.yearReleased!==null&&Number.isNaN(Number(l.yearReleased))&&(V.yearReleased="Year Released must be numeric."),i=V;const G=Object.values(V);return G.length?G[0]:""},N=()=>{if(t){console.debug("Current game save ignored because a save is already running");return}const V=x();if(V){s=V,console.warn("Current game save blocked by validation",{fieldErrors:i,game:l}),h();return}t=!0,s="",i={},h(),console.debug("Saving current game",{id:c||null,game:l}),F.promise=HC({...l,id:c||void 0,title:l.title.trim(),imageUrl:(l.imageUrl||"").trim(),manufacturer:(l.manufacturer||"").trim(),notes:(l.notes||"").trim(),yearReleased:xd(l.yearReleased),isVisible:l.isVisible!==!1}).then(()=>(console.debug("Current game saved",{id:c||null}),t=!1,R(),p())).catch(G=>{console.error("Failed to save current game",G),s="Failed to save game. Check the fields and try again.",h()}).finally(()=>{t=!1,h()})},D=()=>{!c||r||confirm("Delete this game from the current lineup?")&&(r=!0,s="",h(),F.promise=qC(c).then(()=>(r=!1,R(),p())).catch(V=>{console.error("Failed to delete current game",V),s="Failed to delete game.",h()}).finally(()=>{r=!1,h()}))};return Ca||(Ca=!0,Kt||f()),ro(()=>{Kt&&(Kt(),Kt=null),Ca=!1}),st(jt(()=>Vo(e)),T.class`games-admin-page`(T.class`games-admin-header`(As("Current Game Lineup"),se.type`button`.class`admin-pill-button`.onClick(m)("Add Game")),T.class`games-admin-card`(ge.style`margin-top:0;opacity:0.78;`("Manage the Firestore currentGames collection used by the public lineup page."),V=>s&&!o?ge.style`color:#f6c177;`(s):"",T.class`games-admin-list`(pf(Kn,null,V=>V===null?te.style`opacity:0.7;`("Loading games..."):V.length?V.map(G=>iy({game:G,onClick:()=>y(G)}).key(G.id)):te.style`opacity:0.7;`("No games found. Use Add Game to create the first one."))),T.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(W.href`../admin.html`.class`admin-secondary-button`("Back to Admin Tools"),W.href`../lineup.html`.class`admin-secondary-button`("View Public Lineup"))),V=>o?oy({isEditing:!!c,editGame:l,errorMessage:s,fieldErrors:i,isSaving:t,isDeleting:r,onChange:G=>{var ve;l=G,i={...i,title:(ve=G.title)!=null&&ve.trim()?"":i.title,dateAddedToCollection:G.dateAddedToCollection?"":i.dateAddedToCollection,yearReleased:G.yearReleased===null||!Number.isNaN(Number(G.yearReleased))?"":i.yearReleased},h()},onSave:N,onDelete:D,onCancel:R}):""))}),iy=F(({game:n,onClick:e})=>(iy.inputs(t=>{[{game:n,onClick:e}]=t,e=Te(e)}),se.type`button`.class`games-admin-row`.onClick(e)(n.imageUrl?K.class`game-thumb`.src`${n.imageUrl}`.attr("alt",n.title||"Game image"):T.class`game-thumb game-thumb-placeholder`("PB"),T(rp(n.title||"Untitled game"),T.style`margin-top:0.15em;opacity:0.74;`(te([n.manufacturer||"",n.yearReleased?String(n.yearReleased):""].filter(Boolean).join(" · ")||"No manufacturer/year"))),te.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(ee.style`font-size:0.78em;text-transform:uppercase;`("Collected Date"),ee(XC(n.dateAddedToCollection),n.isVisible===!1?" · Hidden":""))))),oy=F(({isEditing:n,editGame:e,errorMessage:t,fieldErrors:r,isSaving:s,isDeleting:i,onChange:o,onSave:c,onDelete:l,onCancel:h})=>{oy.inputs(y=>{[{isEditing:n,editGame:e,errorMessage:t,fieldErrors:r,isSaving:s,isDeleting:i,onChange:o,onSave:c,onDelete:l,onCancel:h}]=y,o=Te(o),c=Te(c),l=Te(l),h=Te(h)});const f=y=>{o({...e,...y})},p=y=>r[y]?"#f87171":"rgba(255,255,255,0.2)",m=y=>r[y]?"#fca5a5":"inherit";return T.class`games-modal-backdrop`(T.class`games-modal`(T.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(T(As.style`margin:0;`(n?"Edit Game":"Add Game"),te.style`opacity:0.72;`(n?"Update this current lineup entry.":"Create a new current lineup entry.")),se.type`button`.class`admin-secondary-button`.onClick(h)("Cancel")),y=>t?ge.style`color:#f6c177;`(t):"",y=>Object.values(r).filter(Boolean).length?T.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(Object.values(r).filter(Boolean).map(R=>te(R))):"",T.class`games-form-grid`.style`margin-top:1em;`(Qe.attr("style.color",y=>m("title"))("Game Title"),ke.type`text`.value(y=>e.title||"").onInput(y=>{var R;f({title:((R=y==null?void 0:y.target)==null?void 0:R.value)||""})}).attr("aria-invalid",y=>r.title?"true":"false").attr("title",y=>r.title||"").attr("style.borderColor",y=>p("title"))(),Qe.attr("style.color",y=>m("dateAddedToCollection"))("Date Added to Collection"),ke.type`date`.value(y=>e.dateAddedToCollection||"").onInput(y=>{var R;f({dateAddedToCollection:((R=y==null?void 0:y.target)==null?void 0:R.value)||""})}).attr("aria-invalid",y=>r.dateAddedToCollection?"true":"false").attr("title",y=>r.dateAddedToCollection||"").attr("style.borderColor",y=>p("dateAddedToCollection"))(),Qe("Game Image URL"),ke.type`url`.value(y=>e.imageUrl||"").onInput(y=>{var R;f({imageUrl:((R=y==null?void 0:y.target)==null?void 0:R.value)||""})})(),Qe("Manufacturer"),ke.type`text`.value(y=>e.manufacturer||"").onInput(y=>{var R;f({manufacturer:((R=y==null?void 0:y.target)==null?void 0:R.value)||""})})(),Qe.attr("style.color",y=>m("yearReleased"))("Year Released"),ke.type`number`.value(y=>e.yearReleased??"").onInput(y=>{var R;f({yearReleased:YC((R=y==null?void 0:y.target)==null?void 0:R.value)})}).attr("aria-invalid",y=>r.yearReleased?"true":"false").attr("title",y=>r.yearReleased||"").attr("style.borderColor",y=>p("yearReleased"))(),Qe("Notes"),gb.value(y=>e.notes||"").onInput(y=>{var R;f({notes:((R=y==null?void 0:y.target)==null?void 0:R.value)||""})})(),Qe("Visible on public page"),Qe.style`display:flex;gap:0.5em;align-items:center;`(ke.type`checkbox`.attr("checked",y=>e.isVisible!==!1?"checked":null).onChange(y=>{var R;f({isVisible:!!((R=y==null?void 0:y.target)!=null&&R.checked)})})(),ee(e.isVisible!==!1?"Visible":"Hidden"))),T.class`games-modal-actions`(T.style`display:flex;gap:0.7em;flex-wrap:wrap;`(se.type`button`.class`admin-pill-button`.attr("disabled",y=>s?"disabled":null).onClick(c)(y=>s?"Saving...":"Save"),se.type`button`.class`admin-secondary-button`.attr("disabled",y=>s?"disabled":null).onClick(h)("Cancel")),y=>n?se.type`button`.class`admin-danger-button`.attr("disabled",R=>i?"disabled":null).onClick(l)(R=>i?"Deleting...":"Delete"):"")))}),YC=n=>{if(n===""||n===null||typeof n>"u")return null;const e=Number(n);return Number.isNaN(e)?null:e},xd=n=>{if(typeof n=="number"&&!Number.isNaN(n))return n;if(n===""||n===null||typeof n>"u")return null;const e=Number(n);return Number.isNaN(e)?null:e},ay=n=>n?typeof n=="string"?n.slice(0,10):typeof n.toDate=="function"?n.toDate().toISOString().slice(0,10):n.seconds?new Date(n.seconds*1e3).toISOString().slice(0,10):"":"",XC=n=>{const e=ay(n);if(!e)return"No date";const t=new Date(`${e}T12:00:00`);return Number.isNaN(t.getTime())?e:t.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})},Fs=F(()=>[W.href`/index.html`.class`top-nav-pill`("🏠"),W.href`/meetup.html`.class`top-nav-pill`("🗓️ meetups"),W.href`/lineup.html`.class`top-nav-pill`("🎮 lineup"),W.href`/index.html#links`.class`top-nav-pill`("🔗 links"),W.href`/index.html#merch`.class`top-nav-pill`("🛍️ merch & more"),W.href`/index.html#youtube`.class`top-nav-pill`("📺 youtube"),W.href`/index.html#awards`.class`top-nav-pill`("🏆 awards"),W.href`/admin.html`.class`top-nav-pill`("👤")]);let Ra=!1,Qt=null,An=null;const cR=F((n=null,e=Ae(()=>{}))=>{const t=()=>{Qt&&(Qt(),Qt=null),An&&(An(),An=null);const r=jC();Qt=(r==null?void 0:r.unsubscribe)||null;const s=r.subscribe(i=>{n=i,console.debug("Visible current lineup games",{count:(i==null?void 0:i.length)||0,games:i}),e()});An=()=>s.unsubscribe()};return Ra||(Ra=!0,Qt||t()),ro(()=>{Qt&&(Qt(),Qt=null),An&&(An(),An=null),Ra=!1}),st(jt(()=>Fs()),un(`
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
    `),T.class`lineup-page`(T.class`lineup-brand-strip`(),T.class`lineup-hero`(xt.class`lineup-title`("Cary's Current Lineup"),ge.class`lineup-subtitle`("A list of my current games."),T.style`margin-top:0.9em;`(W.href`/index.html`.class`top-nav-pill`("Back Home"))),r=>{if(n===null)return T.class`lineup-results`(T.class`lineup-empty`("Loading current lineup..."));const s=n.filter(i=>i.isVisible!==!1);return s.length?T.class`lineup-results`(T.class`lineup-grid`(s.map(i=>cy(i).key(i.id)))):T.class`lineup-results`(T.class`lineup-empty`("No current lineup games are visible yet."))}))}),cy=F(n=>(cy.inputs(([e])=>{n=e}),T.class`lineup-game-card bounce-in`(n.imageUrl?K.src`${n.imageUrl}`.attr("alt",n.title||"Pinball game"):T.class`lineup-placeholder`(ee("PB")),T.class`lineup-card-copy`(rp.class`lineup-card-title`(n.title||"Untitled Game"),te.class`lineup-card-date`("Added ",eR(n.dateAddedToCollection)))))),ZC=n=>n?typeof n=="string"?n.slice(0,10):typeof n.toDate=="function"?n.toDate().toISOString().slice(0,10):n.seconds?new Date(n.seconds*1e3).toISOString().slice(0,10):"":"",eR=n=>{const e=ZC(n);if(!e)return"recently";const t=new Date(`${e}T12:00:00`);return Number.isNaN(t.getTime())?e:t.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})};let Vd=!1;const lR=F(()=>(n=0,e=!0,t=Date.now()-1e3,r=Ae(()=>{}),s=setTimeout(Ae(()=>e=!1),5e3),i=!Vd&&(()=>{Vd=!0,F.promise=Cl().then(o=>{typeof o=="number"&&(t=o,r())}).catch(o=>{console.error("Failed to load next meetup date",o)})})())=>T(jt(()=>Fs()),T(T.style`
      width: 100%;
      height: 175px;
      background-image: url('assets/media/youtube-channel-banner.jpg');
      background-size: contain;
      background-position: top center;
      background-repeat: repeat-x;
    `,un(`
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
    `),K.attr("src","assets/media/sticker.png").class`sticker-callout`.style`transition: opacity 0.5s ease;`.attr("style.opacity",o=>e?1:0).onClick(()=>window.scrollTo({top:document.querySelector(".merch-section").offsetTop,behavior:"smooth"})).attr("alt","Super Wow Limited Edition"),T.onClick(()=>++n)(un(`
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
      `),T.class`bounce-in`.style`--fx-index:5;`(T.class`carousel-3d-wrapper`(T.class`carousel-3d`(T.class`carousel-3d-item`(K.attr("src","assets/media/unnamed.jpg").attr("alt","Cary Hardy")),T.class`carousel-3d-item`(K.attr("src","assets/media/Cary-Hardy.jpg").attr("alt","Cary Hardy")),T.class`carousel-3d-item`(K.attr("src","assets/media/cool_shots/CH_chill.jpg").attr("alt","Cary Hardy Chill")),T.class`carousel-3d-item`(K.attr("src","assets/media/cool_shots/CH_kong.jpg").attr("alt","Cary Hardy Kong")),T.class`carousel-3d-item`(K.attr("src","assets/media/cool_shots/CH_machines.jpg").attr("alt","Cary Hardy Machines")),T.class`carousel-3d-item`(K.attr("src","assets/media/cool_shots/playfield_red.jpg").attr("alt","Playfield")))),o=>n>4&&T.style`text-align: center; margin-top: 2em;`(W.href`./admin.html`.style`color:white; text-decoration: underline;`("🔨 admin tools")))),T.class`bounce-in`.style`--fx-index:1; text-align: center; max-width: 900px; margin: 0 auto;`(xt.class`welcome-text`("Welcome to where I talk and do everything pinball")),q,T.style`text-align: center;`(K.attr("src","assets/media/pewpew+cary.png").attr("alt","Pew Pew Cary Hardy").style`max-width: 900px; width: 100%; height: auto;`),q,q,q,T.class`bounce-in section-anchor`.attr("id","links").style`--fx-index:5; display: flex; align-items: center; margin: 1em 0;`(T.style`flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`,te.style`padding: 0 1em; color: rgba(255,255,255,0.8); white-space: nowrap;`("links"),T.style`
          flex: 1;
          height: 1px;
          background: linear-gradient(270deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));
        `),T.style`display:flex;flex-wrap:wrap;gap:1em;justify-content: center;`(W.href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`.class`bounce-in link-icon`.style`--fx-index: 2;`(K.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3ElEQVR4Ae2WIQzDIBBFEdPV6Ip6L2Y3Me9NMzuB98GbWrysqHf1otWYismm+vYFTRCEhXXjJrjkmSslLwHgi8vjxkoRKAL/J0BCSHAHGhjQgxHMwIKnY/Px+taNHd2/Bmg3p4wKuIH0Y1RQAB+ugDJxDgn0GQVMSMBmFJhDApSTYwLLQtR13xNAo0oWINS6ErXtpxInX0CmC3g1TURNkypQ+QL1IYG9hiFFRPIL8C8B/ybkO4bsFxH7Vcz+GLE/x5yBRL+LZDVQkTi2Ochn70dimQpFspKKi0AReAF/IVUTZ3/BGQAAAABJRU5ErkJggg==").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),W.href`https://rumble.com/c/c-2975430`.class`bounce-in link-icon`.style`--fx-index: 3;`(K.attr("src","https://rumble.com/i/favicon-v4.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),W.href`https://twitter.com/cary_hardy`.class`bounce-in link-icon`.style`--fx-index: 4;`(K.attr("src","https://cdn-icons-png.flaticon.com/512/124/124021.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),W.href`https://www.instagram.com/caryhardypinball/`.class`bounce-in link-icon`.style`--fx-index: 5;`(K.attr("src","https://cdn-icons-png.flaticon.com/256/1409/1409946.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),W.href`https://www.patreon.com/caryhardy`.class`bounce-in link-icon`.style`--fx-index: 6;`(K.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUUFRj///8AAADe39+AgIE8PT4MDhF3eHhDREUREhUKCxD7+/sFBwwAAAYNDxLl5eWlpabFxcbw8PC/v8BKS0wXGBzLy8yGhoevr7Dv7+9jZGV9fX63t7giIybZ2dlubm+Wl5gpKiwzMzZZWVtiYmRTVFaPj5ChoaJHSEo5OTy9mcuCAAAEZElEQVR4nO3c6XaiQBCGYSgHtVkEcUNjJFFjzP3f4IDOklEnVDc9VDPne/7j8T0szdZ4HgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRlQncSpbG8moRxclkqDic6C3ZlEjyNbpXP3H8aEnn7+WFTL7U5zPcLovCf/l0DtPLvpMGQseSkWnPjb7PlLs2jeqkoT3fL7Sqo1iZn8c7Qt/vCAaMwpv0mS++X9f11cfyguIO/zmRUqGJ6ywaP8n5sBO8Hil3ZJ00K43i+zf/eV8un5zjpKKGBfqFK3mZf513NDuTEatQtVETZmhNYrceMXGjULFTx5uHh5bG0DOUT9QpDKiJ+YDWCZPLjo1ZhEkx1+mrLgLoNuqNTSGeNLfTXj42FEzUK6e2LIfCLxINsIr+Qjsxj6K3oKJrILqTAYBO9SkU3VG5hPDcOrPdFwfNUZqEio33wp6Xg0M8rVGHRJtD3M7kTcV5h8qQ10D/wJLYrsgqHzy12wqu12HbKKVThtm2g72+lEjmFVLbdRiv5Ruh6kVGonpftA6vj6UJmJTIKaWQj0PeFViKncGencCezJzYXUmkn0I9KkRGjsVAlrLsyHIWbhfGh4bYaXz6XuOBvLKSTrUDfH0msxOZCS8eZ2s7FQkX2Av1I66lWR4WJrSPphcSQ2FRIFk5Jf8sENtOGQhVb3A3rK2HnCofj1tdNn+32E9cK46O10bCWCoyIDYU0snDh9FtUdn+oaSq0ON7XBG5mNBW+2C1cOVeYvNstPLlXmNktfEEhCq0X2j7SuLcf/v/H0kcvhbXh3niYlFbP2taH7h+zNRSGbR4b3kvPzp2XqudWzw1v7djvdXZW6JGVO/o/Td27PrR8MBUYLBoLww+bhaxXczsu9Gzea8tdvJvoUcsn+J9J3IhiFFp6tlYTeb7WWDjZW7vbtnuVeLzGeLpm7fJC4MKCVTj8sHQzKt+LzFLgPAO2dKyRWYWcwnBuZSXmHzITTThvm9i50Jc4n+EWDl8tXGAMBG7oswutjIkbqRfbWIWKWr+tIHFVccV7NzE0f0H4Kg3EZiUw36CldsfTSPA9aO5b0O2uE6WOo5d/zixU1OIJhmQg/119ZX5+WohO8OLPt1ChYeLWExoJrzTmzCizffFEooFa856M9sUX6TmIerPzSPcG8eBNeuqa7gxLOmvdP51KT1zz9GfJxuGK/SQjH8Xi8ysNZjor2jOviLNAehe8MJitHqojYyrp7CA/QfbCZD6+SmhefHnISYuxM59VMPxqREzj1V9X5HJ1dmT91Uy/i1F/1mRRbgfpH9cc0XqwLR37wIlxoXfZWsNxeXovtrPpdLYt3k/lfOHEVwY+a1Po1SerSbXG1KKiqrWaOPCFgVstC6/Uxb/5g61ZKXQaCvsPhf2Hwv5DYf+hsP9Q2H8o7D8U9h8K+w+F/YfC/jP/nndfqNfz+FawkP5XVqnwjuy7EwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATvgOQzxF32eUYx8AAAAASUVORK5CYII=").attr("alt","Patreon").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),W.href`https://silverballswag.com/collections/cary-hardy`.class`bounce-in link-icon`.style`--fx-index: 7;`(K.attr("src","https://cdn.shopify.com/s/files/1/0255/0271/1853/files/silverball_swag_logo_color_360x.png?v=1614300719").attr("alt","silverball_swag").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),W.href`https://www.facebook.com/hardypinball`.class`bounce-in link-icon`.style`--fx-index: 8;`(K.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAApVBMVEUYd/L///8Pc/EqgPIZePEXdvKhwPgAa/ATdPGmy/q1zfn9//8Yd/Pf6vwAcfH8/f8Sefrq8/3x9/73+//M3vsPd/nX6Pwcf/4Gef8Ac/kAavSz0PkrhPscf/p1q/zk7f2Es/rA1/pAjPiNufxIk/x6rPpXmftpovqVwPudxflEk/cwiPvF3vtcnPodfPJQmPVnnfVlpvmrxvl1rPaVvftzqPyHtfk2FCUeAAAPm0lEQVR4nN2di3raOgyA7eCUjJjcw0pDCqHcaaFsdO//aMdOoIU1ATu2CGf6zlm/dW3iH8myLcsWwlBi2+wP1w2DYZQsX6bz7Wrc2mwIIZtNa7zazn+/LJNoGISue/xhGEFQD3YDfxh1XnarluH0Hz0v9jxqUooQouxr/vfHvmO0VruXTjT0AxeqIboJi4b63agzehtTh3F4jIpwQfwrIsc/8u8wVC92zPHb6FfU9e2vJ+gTvYS8iWEve5jONgyOaSzHKOi+C/9+Dkqp5zib2fQh64WHp+gTjYT8ww+j5XS2pjGllFSBlaCi3HgNaz2bLqMQa1WkLkLuL+zecj5OrUJ1onSnnBRRKx2/L3p28UAtooeQt8Zfbgc/DTO3Smm6AyO3Wmr8HGyXPtalSB2E/BPPdtZjbOY9qybeCacZPxrzzNXTI3UQht3lpO/RwnGo8qHC59LH/njZDTW0To2Qf8Z+NFrHXtEwZbwvTIK8eD2KfKyqSVUd+tnzoC/jN0UROSN1Ns+Zr9hCBULWT4LkYxBTHbZZQUnjwUfiKzkdFR3ayXyQj3sgfAUioXQwT1TstC4h+1Bf31OqseuVM/L/vPTttb4aa+twuIs9Pc7zOiaJ492wbkPrEDKb8RfksfiAbwDI/38kC7+eV62lwyBbcf9yE74DI6HxKgvqNLYOYTRKY3IjBX4yEhSno+gGhDYOOxOHopvyoWKuS51JJ5S2VDlC9vTeNPVuynZCicx02pPtjZI6tJOJBTbCXydkq6uJ7OAoQ+jiYJTHJBrhKxgJ9UaB1NgoQeji7qTfGNwREaH+pCeDKEEYJql3uxHiAqWXJhLLKnFCf+94tx0iqhGdvfiKQ5iw+0ybJjsIn+p7z11RSxUjdHH0RiujgreWHPEtEkQUIrRxNqb30AWPwtrijTOxgVGE0MUJoXeiv4NwRJIIaVFIh8unRkfBMuEj49NSpPEChOGi6VGwXAjqLwRGjeuEwd67M/0VkofjXq4vqK4SBi+p2dRE9LIwl2qm1xGvERaATcNUigDiFcJwn96bjzkXhnilL14kdPHCM5tmuChsyegtLg8alwhtvOzfZxf8Eta6/vLi0H+BkA30T3dtobkwDTxdHPqrCV2ckbuaqpULH/pJdgHxgg6j8d3NZMqEDRp0fCEIV03YffsfaLAQ4r115Qn9Z8g9l5PWmeRvkbUc9is/nyuXxBWEbriHN9EjHDIty+BiWZZ5zLWRQzW9fVjRFcsJmRt1YPkOmTSW0263HYtsDsK/47Sf2u2+YZhHVJGWUKfKoVbosMeDToB8XD9Mb5vx2+9F8trzQzuXMBj2Xl9/LBej3Wwy3pi5akXmHHwLrqIrlhHaOJh4kBufzD4Z3WS6fL0QUAqHUfJjMX1ftcQeGU+C0pG/VIf2qA/mRrnRWQ6Z/UkOn7nr2qfmZduue5otFA4XhtiD+6PSqU0JoY0TsJ0J7jzM9uaj08sh3EvTLQaa/3NH0E6Jl5QpsUyHvQmQH833jPvGRySVXyFIyLripFfy6yWE4dSCsVG2YiVGextJbnSKEXIlWtOSlVQJYQcoAYFbqEOWcvsq4oQ8/ybtXCe0cTSBicvkgO89+YRnUUIm3iT61hW/6TAYOUCTGWIZf+S3cKUIkTP61gW+EWYp0P4EMTbLK95TlZCtMtLsGqG/iiE0yNyA0+rUApTRIUHx6m8/fU7o4AR+m9wp8+FCIFcKRfvzbcRHo6huqEYod0Sy8yrIcQbD1k/jMzGCcGslNKIETJHAyYNEyLkdDByX/pwL2jYSpmreXGRuwPMd26c0Nu5KFz9w4TIW4UoaAFeVdI0IfFaARoagDcJNE2IqDFEEaArbZ4QORFKIA9qN01IUD9BQPH8Qpom5LF99AJ5OKZ5Qu8F/f7HCX+jefxPE8ZztP3HdbhFkFOa5gnZpAYBrg7vgZCOUQsqlMelcUJCWwgs0MalcUJEN4xS9SFmpQgTVj9BMc5IOKEqIDKc/Jjy8cunsL+3NwKEm7bxXb4eptg6DddvOx+/HipFJCHqwq9zmagGOVQZSfuH5mIG5xJu1YKNhHkadUKw6htM/LWaDu+fcGhZKoTM06iOh7CELs7UdlXYeDi+ax26eNlW0gCb06wUA1HQhL/VCNm8VHVtAUto461SwJqvLVTXh9CeRi3mT+Kd8hoflNDGgaHkCfka/889E7o4aiu5Uh6nUY21ARMqpjHwWJtqvBSY8M+TmgL6iXLMG9jT7NQGC9SOlPctgAknavNuvm+huvcESxhs1AYLrxUq7x9CEtq4p7a8I3z/UHUPGJLQxYlaNlG+B6y6jw+rw4Wao8n38fnNbPdKiPFvR0WHBDkJz6ehSvFEWMJ3JVdKqMXzaRRzogAJbeyrhaGKnCie13a3hD21CATJ89pUcxMBCfkdsWqOhl+qhLD7SykSAtoPf6gFkYr8UtUcYVDCvaWkxEOOMM/zvlNCWy3H/jPP25+q7A1AEvrviiGMQ66+/XCvOuwpDRZf5y3UzsxAEr62lDbXPs/M4N5MoUPDEdo42SjwnZ57ClU6NCeEkl8qZRkI+jq7pnT+MN9dqxYRXVX9qv2itu30ef4wP0Oq8GFV73KbgrvcVTvcaipEJ2dIw3eV8cK0qsR0hHa5nYonKG3jMyOdH88Bw53lFjn3xHRYsUFI1OqAktOz3GDn8ZvLNiHEPDmPz2QLk7/XZD5NvMVfhGD3YjSpw/N7MfjdJiBXKDVHSI3Tu03y+2kgDgE2RshUeH4/TX7HEIA02A/7r2eE+T1R/5QOvfH5PVHc18QAZtqcDuNvd33h7hrgovLGCOm3+9qA7txriJAQp+TOPZB7E5shJEUI6huh/6zfTJuy0vK7L3E20H6jWUOE5feX2vkdtP8CIcnvoP188fk9wrqV2ARh9T3C/C5o3aN+Mzqsvgua3+f9v9fhhfu8McCd7I1YqfdeeSc7v1dfrxIb0eGle/W110a4OSGvjfDXNX8l9S30va8BHV6rb1HUKNEnDRBeq1Giuc7MrQlZJ5xdrjOD81pB/2NCgVpBOJg6+i6hvC0hEar3xGt26btj8NY6NEVqdvG6a9reeFNCwbpruLgKU5Pc2EpFa+fl9Q/12OkNCZnvoKL1DzXWsLwloUwNS311SG9ppRJ1SA+1ZHUg3oyQ15JdSdSSzesB/78IiZeWdcJKQl7TWYe3uRUhybOBpWo6u+Feh7e5ESFThWxdblzUVlfW4m0ICbNR6drqTLoaQho3IcyLyVUU5b5IiCNemEUN8RaEDJBeqtZTTchzkFUN9QaEHBBlF55/QYfMoT6ppbTcgJD1Qfp08Wr7C4Rs/Fwq7n3fgDAvfHTpLZcIedhGrSvewEpN7+/AjAwhW0ntU5X0OXhCM91fufb9CiEOXjhiXUZYQtYsM325VublGiFHRLUtFZSQIBHA64QM0avtUSEJeZu8/fVCPdcJcbjoo5paBCTkgP2FQOkFAUKMl0+0Xl+EI2StoU9LkcaLELKhn9Sbo4IR8pkMEalhI6hDG2fjWhM4QB3ScSZ2P5UQIU92f/OQfMEpGELeDvomWnVQjJA9rPtM5dUIQsjbQJ+rl0v1CJn4e4N3RilGAELC97Gd/fUKPfKEOExS2VwNEEISp4lIgR55Qmapkz6VGhm1E/J39yddmZNWEoTsscHIk7JUzYTcQqk3CqSOkskQ8uYkE0tCjdp1SK1JInmHoRwhe3hvKrHY0EvI5qHptCdbIFpSh+zpYWfiUCQGqY+Qv446k04ofQ2lLCGXaJQKJoXrIiR8JI7TUZ0C2HUIcZDNYqGEYo1WSuNVJlVa+Ch1CFmr/QV5FPA3Wghz5/1IFn69Eu21dMhluIs9cm0ap4Ewf4EX74ZXH1QhdQnZiPT6nnJTvWStyoT5s2n6/oprH6eurUPetmQ+MOmlFYciYT7C08Fcdgg8EwVC9qEGyccgvrDRqEbIF0nx4CMJ6isQq+mQi589D/LN1FLK+oQkj9f3N8+Z+CqiXNQIefv96M+aO50yxNqEeSCtvx5FPq7nQb9EVYdcwu5y0veKAZIoE+YOmk2w+5NlV2KRVCk6CBmF+7ozHuO8MjRRIsyt04wfjV3mqmqvEB2EhSPwl9vBT4OeDR+ShNzUiWn8HGyXPlZyLyeih5C1hjent3gfp4b1FVyVICxs0zLS8XzROz5Qh+gixMVH7vZ+TWdralBOSYSqdPLqgHn0jP3WejZdRiHWpb5cNBLiot+EvexhOts4judRQUJKvdjZzKYPWS/Eenrfl+glPIjtd6POaD5G7VTgp9M2Hb+NfkU9P0fTfdkNCCEXN/CHvc5e4Cf3nWjoB2D3hYERFsYm0m4X6zbMM/kPzEctXgZffqYAAAAASUVORK5CYII=").attr("alt","Facebook").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`)),q,q,q,T.class`bounce-in section-anchor`.attr("id","merch").style`--fx-index:8;`(xt.class`hero-text`("PINBALL MERCH & MORE")),T.class`merch-section bounce-in`.style`--fx-index:9;`(T.style`display: flex; flex-direction: column; align-items: center; gap: 3em;`(T.style`display: flex; flex-direction: column; align-items: center; gap: 1em;`(T.class`merch-item`.style`max-width: 900px; margin: 0 auto;`(W.href`https://buy.stripe.com/eVq14f9f01zi3Vn7mN00003`.attr("target","_blank")(K.attr("src","assets/media/wrong_kong_shirts.jpg").attr("alt","Wrong Kong Shirt"))),W.attr("target","_blank").href`https://buy.stripe.com/eVq14f9f01zi3Vn7mN00003`.style`display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(o=>o.target.style.transform="scale(1.1)").onMouseOut(o=>o.target.style.transform="scale(1)")("Get your 'Wrong Kong!' T-Shirt"),W.attr("target","_blank").href`https://buy.stripe.com/5kQdR11My7XGbnPePf00005`.style`display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(o=>o.target.style.transform="scale(1.1)").onMouseOut(o=>o.target.style.transform="scale(1)")("🇦🇺 Wrong Kong for Australia residents")),T.style`display: flex; flex-direction: column; align-items: center; gap: 1em;`(T.class`merch-item`.style`max-width: 900px; margin: 0 auto;`(W.href`https://buy.stripe.com/5kA4j775zaRsdHy9AA`.attr("target","_blank")(K.attr("src","assets/media/merch-on-glass.jpg").attr("alt","Pinball Merchandise"))),W.attr("target","_blank").href`https://buy.stripe.com/5kA4j775zaRsdHy9AA`.class`bounce-in`.style`--fx-index: 11; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(o=>o.target.style.transform="scale(1.1)").onMouseOut(o=>o.target.style.transform="scale(1)")("More guns than Wick T-shirt"))),T.style`text-align: center; margin-top: 2em; display: flex; flex-direction: column; gap: 2em; align-items: center;`(W.attr("target","_blank").href`https://silverballswag.com/collections/cary-hardy`.class`bounce-in`.style`--fx-index: 12; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(o=>o.target.style.transform="scale(1.1)").onMouseOut(o=>o.target.style.transform="scale(1)")("SHOP SILVERBALL SWAG"))),q,q,T.class`bounce-in section-anchor`.attr("id","youtube").style`--fx-index:5; display: flex; align-items: center; margin: 1em 0;`(T.style`flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`,te.style`padding: 0 1em; white-space: nowrap;`(W.href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`.attr("target","_blank").style`color: rgba(255,255,255,0.8); text-decoration: underline; text-underline-offset: 2px;`("youtube channel")),T.style`flex: 1; height: 1px; background: linear-gradient(270deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`),T.style`text-align: center;`(T.class`bounce-in`.style`max-width: 900px;margin: auto;--fx-index:12`(yb.attr("src","https://www.youtube.com/embed/JFkiAk44Ntk").attr("frameborder","0").attr("allowfullscreen","").style`width: 100%;height: 500px;`),T.style`text-align: center; margin-top: 2em;`(W.attr("target","_blank").href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`.class`bounce-in`.style`--fx-index: 13; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(o=>o.target.style.transform="scale(1.1)").onMouseOut(o=>o.target.style.transform="scale(1)")("Goto My Channel")),q,q,q,q,T.class`fade-in`.style`--fx-index:16`(o=>Date.now()<t&&st(T.class`bounce-in`.style`--fx-index:5; display: flex; align-items: center; margin: 1em 0;`(T.style`flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`,te.style`padding: 0 1em; color: rgba(255,255,255,0.8); white-space: nowrap;`("live meetups"),T.style`flex: 1; height: 1px; background: linear-gradient(270deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`),T.style`margin-top: 2em; display: flex; flex-wrap: wrap; justify-content: center; gap: 2em;`(T.class`bounce-in`.style`--fx-index:17; position: relative; max-width: 500px; width: 90%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(255,0,100,0.3), 0 15px 40px rgba(0,255,255,0.2); transform: perspective(1000px) rotateX(2deg);`(T.style`position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, rgba(255,0,100,0.2), rgba(0,255,255,0.2), rgba(255,0,100,0.2)); animation: shimmer 4s infinite;`,K.attr("src","assets/media/meetup-screenshot.jpg").attr("alt","Pinball Community Live Meetup").style`width: 100%; height: auto; display: block; position: relative; z-index: 1;`,T.style`position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5em; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); z-index: 2;`(T.style`color: white; font-weight: bold; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-size: 1.1em;`("Monthly Live Meetups"))),T.class`bounce-in`.style`--fx-index:18; position: relative; max-width: 500px; width: 90%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,255,255,0.3), 0 15px 40px rgba(255,0,100,0.2); transform: perspective(1000px) rotateX(-2deg);`(T.style`position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, rgba(0,255,255,0.2), rgba(255,0,100,0.2), rgba(0,255,255,0.2)); animation: shimmer 4s infinite; animation-delay: 2s;`,K.attr("src","assets/media/meetup-screenshot2.jpg").attr("alt","Pinball Community Live Meetup 2").style`width: 100%; height: auto; display: block; position: relative; z-index: 1;`,T.style`position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5em; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); z-index: 2;`(T.style`color: white; font-weight: bold; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-size: 1.1em;`("Live Discussion & Q&A")))),T.style`margin-top: 2em;`(c=>xo({date:t,showLearnMore:!0})))),q,q,q,q,K.class`bounce-in reflection`.attr("alt","Cary Hardy logo").attr("src","https://cdn.shopify.com/s/files/1/0255/0271/1853/collections/Front_1200x1200.png").style`--fx-index:12;width: 55vw;min-width: 200px;max-width: 400px;`,q,q,q,q,q,T.class`bounce-in section-anchor`.attr("id","awards").style`--fx-index:13;`(xt.class`hero-text`("AWARD WINNING WORK & CONTENT")),T.class`merch-section bounce-in`.style`margin: 2em auto; --fx-index:13;`(T.style`display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 2em; margin: 1em 0;`(T.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(K.attr("alt","PATB Award").attr("src","assets/media/awards/PBaTB award.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,te.style`color: white; display: block; text-align: center;`("PATB Award")),T.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(K.attr("alt","Twipy Award").attr("src","assets/media/awards/Twipy.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,te.style`color: white; display: block; text-align: center;`("Twipy Award")),T.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(K.attr("alt","PATB Awards").attr("src","assets/media/awards/PatB awards.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,te.style`color: white; display: block; text-align: center;`("PATB Awards")),T.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(K.attr("alt","Cary Hardy and Steve Ritchie handshaking").attr("src","assets/media/awards/photo0.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,te.style`color: white; display: block; text-align: center;`("TPF 2024")),T.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(K.attr("alt","Cary Hardy holding award").attr("src","assets/media/awards/photo2.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,te.style`color: white; display: block; text-align: center;`("TPF 2024")),T.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(K.attr("alt","Earth Shaker award").attr("src","assets/media/awards/EarthShakerAward.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,te.style`color: white; display: block; text-align: center;`("TPF 2024")),T.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(K.attr("alt","TPF 2022").attr("src","assets/media/awards/TPF 2022.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,te.style`color: white; display: block; text-align: center;`("TPF 2022")),T.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(K.attr("alt","Cary Hardy owned pinball machine").attr("src","assets/media/awards/photo3.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,te.style`color: white; display: block; text-align: center;`("TPF 2022")),T.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(K.attr("alt","Cary Hardy holding award").attr("src","assets/media/awards/photo1.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,te.style`color: white; display: block; text-align: center;`("TPF 2022")))),q,q,q,q,T("📧",W.href`mailto:hardypinball@gmail.com?subject=website contact&body=Hello, found your email through your website%0A%0A%0A`.style`color:white`("hardypinball@gmail.com")),q,q,q,q)))),tR=U("img");let Dd=!1;const uR=F(()=>{let n=Date.now()-1e3;const e=Ae(()=>{}),t=()=>new Date(n),r=()=>{const s=document.getElementById("count-clock");s&&Iw(xo,s,{date:t(),showLearnMore:!window.location.href.includes("meetup.html")})};return setTimeout(r,0),Dd||(Dd=!0,F.promise=Cl().then(s=>{typeof s=="number"&&(n=s,e(),r())}).catch(s=>{console.error("Failed to load next meetup date",s)})),st(jt(()=>Fs()),tR.class`bounce-in reflection`.alt`Cary Hardy logo`.src`https://cdn.shopify.com/s/files/1/0255/0271/1853/collections/Front_1200x1200.png`.style`--fx-index:0;width: 55vw;min-width: 200px;max-width: 400px;`,T.class`bounce-in`.style`--fx-index:1`(Ic.style`line-height: 1.3;`("Meet & talk everything pinball!"),ge("for Patreon LE supporters"),T.style`font-size:.8em;opacity: .7;`("😎 come experience the hype")),q,T.class`bounce-in`.style`--fx-index:2`(T.id`count-clock`),q,T.class`bounce-in`.style`--fx-index:3;text-align: center;`(T.style`display: inline-block;`(T.style`\n          max-width: 900px;\n          background-color:#333;border-radius: .7em;\n          margin:.5em;text-align: justify;\n          border:1px solid rgba(255,255,255,.5);\n          color:rgba(255,255,255,.85);\n        `(T.style`padding:0em 2em;`(T.style`line-height: 1.5em;`(ge("And if that sounds interesting to you, consider joining us!"),ge("By becoming a ",W.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`("Cary Hardy LE supporter")," before ",s=>t().toLocaleString("default",{month:"long"})," ",s=>t().getDate(),s=>$m(t()),", you will receive an LE only Patreon ",ee.style`white-space: nowrap;`("💬 message"),", ",wb("before the meeting start time"),", with an invite ",ee.style`white-space: nowrap;`("🔗 link")," to join this very exclusive meeting.")),q,xt("How does the meeting work?"),Wu(Jn("🍺 It mostly works because of beer. Come 🍻 cheers with us!"),Jn("🛎️ Make sure you have Patreon notifications turned on to ensure you receive invite link 1 hour before meeting"),Jn("Meeting software is Google Meets, which is a browser based application. No installation will be required."),Jn("Link to meeting is provided 1 hour before meeting. Must be ",W.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`("Patreon LE member"))),q,xt("😮 When issues arise"),Wu(Jn("Watch your Patreon messages."),Jn("In the event of meeting cancellation or disruption due to unforeseen circumstances, a makeup meeting will be communicated directly from Cary Hardy."))),T.style`text-align: center;`("⚪️ ",W.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`("Patreon memberships")," ⚪️")))),q,q,T.class`bounce-in`.style`--fx-index:4;text-align: center;`(T.style`padding:.8em;font-size: .7em;`(W.class`no-a-style`.href`index.html`(se.type`button`("🔙 home")))))}),hR=F(()=>{const t=new URLSearchParams(window.location.search).get("session_id")||""||"not found";return T(jt(()=>Fs()),T.class`wrap`(T.class`card`(Ic("Thank you!"),ge("✅ Your payment was received successfully."),q,ge("We really appreciate your support as we grow CaryHardy.com"),q,ge("At Pinball at the Beach, please find Cary or Acker or email ",W.href`mailto:acker.dawn.apple@gmail.com?subject=PATB Cary key box`("acker.dawn.apple@gmail.com")),q,ge.class`muted`("Session ID: ",ee.class`session-id`(r=>t)),W.class`cta`.href`/index.html`("Back to CaryHardy.com"))))}),Nd=["/assets/media/product-images/key-box/IMG_1477.heic.jpeg","/assets/media/product-images/key-box/Main.jpg","/assets/media/product-images/key-box/IMG_1472.heic.jpeg","/assets/media/product-images/key-box/IMG_1474.heic.jpeg","/assets/media/product-images/key-box/IMG_1475.heic.jpeg"],Od="https://buy.stripe.com/aFabJ02XDe7K7GrgXv4F202",nR=F(()=>{let n=Nd[0],e=Od;return nR.inputs(t=>{[{checkoutUrl:e=Od}={}]=t}),T(jt(()=>Fs()),T.class`product-wrap`(T.class`product-hero`(T.class`product-info`(Ic("Cary Hardy Key Box"),As("🏖️ PATB Pickup only. Priced for LE only members only"),ge("Cary Hardy Key Box"),ge("LE Members only pricing"),xt("$15.00 ",ee.style`font-size:0.6em;opacity:0.75;font-weight:400;`("+ $1 processing + tax")),ge.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`("🇺🇸 Made in America"),ge.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`("🚫 🤖 No artificial intellegence used"),ge.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`("🥳 Fun to assemble Cary Hardy logo that is then functional as your pinball keys holder!"),W.href(t=>e).class`buy-button`.attr("target","_blank")("Buy Now")),T.class`product-media`(K.attr("src",t=>n).attr("alt","Key Box main photo").class`main-image`,T.class`gallery`(Nd.map(t=>T.class`gallery-item`.class(r=>t===n?"is-active":"").onClick(()=>{n=t})(K.attr("src",t).attr("alt","Key Box photo").class`gallery-image`)))))))});export{iR as a,oR as b,aR as c,cR as d,hR as e,lR as h,nR as k,uR as m,Iw as t};

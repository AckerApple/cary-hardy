var q0=Object.defineProperty;var G0=(n,e,t)=>e in n?q0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ht=(n,e,t)=>G0(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function hi(n){return n.renderCount=n.renderCount||0,n.varCounter=0,n.state={newer:{state:[],states:[]}},n.global={blocked:[]}}function mo(){return Te.stateConfig.support}function zo(n){return We(n.context),Te.stateConfig.support=n}const Ge=function(){};let mt=[];const Ot=[];let wt=[],qo=[],gn=[],El=!1;const pn=[],W0=400;let Lr=0;const Fc=new Map,we={locks:0};function J0(n,e){const t=Fc.get(n);if(t!==void 0&&t>=Lr){pn[t]=e;return}const r=pn.length;pn.push(e),Fc.set(n,r)}function K0(n,e){e.textContent=n}function it(){we.locks>0||Q0()}function Q0(){++we.locks,bp(),--we.locks,yp(),Y0()}function yp(){Z0();const n=gn;gn=[];for(const e of n)e[0](...e[1])}function Y0(){El||!pn.length||X0()}function X0(){El=!0,requestAnimationFrame(_p)}function _p(){++we.locks;let n=0;for(;Lr<pn.length&&n<W0;){const e=pn[Lr];++Lr,e[0](...e[1]),++n}if(bp(),yp(),--we.locks,Lr<pn.length){requestAnimationFrame(_p);return}pn.length=0,Lr=0,Fc.clear(),El=!1}function bp(){const n=Ot.length;for(let e=0;e<n;++e){const t=Ot[e];t[0](...t[1])}if(n===Ot.length)Ot.length=0;else{let e=0;for(let t=n;t<Ot.length;++t)Ot[e]=Ot[t],++e;Ot.length=e}for(const e of wt)e[0](...e[1]);for(const e of qo)e[0](...e[1]);for(const e of mt)e[0](...e[1])}function Z0(){mt=[],wt=[],qo=[]}function Zs(n,e){Ot.push([eb,[n,e]])}function eb(n,e){n||console.debug("no element by",{_caller:e,element:n});const t=n.parentNode;t||console.debug("no parentNode by",{_caller:e,element:n}),t.removeChild(n)}function Il(n,e,t){n.parentNode.insertBefore(e,n)}function vl(n,e){n.appendChild(e)}typeof document=="object"&&document.createElement("div");function tb(n){return document.createTextNode(n)}function wp(n,e,t=Ge,r){const s=tb(e);Il(n,s),t(s)}const fi="";var rh;(function(n){n.string="string",n.number="number",n.boolean="boolean",n.undefined="undefined"})(rh||(rh={}));var fe;(function(n){n.function="function",n.date="date",n.unknown="unknown",n.object="object"})(fe||(fe={}));const nb=Date.now(),he={tag:"html",dom:"dom",templater:"templater",tagComponent:"tagComponent",tagArray:"tagArray",host:"host",subscribe:"subscribe",signal:"signal",stateRender:"stateRender",version:nb};function Tp(n){if(!n)return!1;switch(n.tagJsType){case he.dom:case he.tag:case he.templater:return!0}return!1}function pi(n){const e=n==null?void 0:n.tagJsType;return e===he.tagComponent||e===he.stateRender}function rb(n){return Go(n)&&typeof n.subscribe===fe.function}function dr(n){return n&&ir(n.then)}function ir(n){return typeof n===fe.function}function Go(n){return typeof n===fe.object&&n!==null}function st(n){return Array.isArray(n)}function Al(n){const e=n.state;if(e&&e.newest&&e.newest)return e.newest;if(n.parentContext)return Al(n.parentContext)}function Wo(n){let e=n;for(;e.ownerSupport&&!pi(e.templater);)e=e.ownerSupport;const r=e.context.state;return r&&r.newest||e}function sb(...n){return n}function Ep(n){const e=Te.stateConfig;return e.states[e.statesIndex]=n,++e.statesIndex,n(sb)}function ib(n){const e=Te.stateConfig,t=e.statesIndex,l=Wo(e.prevSupport).context.state.older.states[t];let u=[];l(function(...m){return u=m,l.lastValues=u,m});const h=function(...m){return u};return e.states[e.statesIndex]=n,++e.statesIndex,n(h)}function Ip(n){We(n);const e=Te.stateConfig;e.handlers.handler=vp,e.handlers.statesHandler=Ep,e.rearray=[];const t=e.state=[],r=e.states=[];e.statesIndex=0;const s=n.state=n.state||{};s.newer={state:t,states:r}}class ob{}function ab(n){const[e]=n(ob),[t]=n(e);return[e,t]}function cb(n){const e=n.callback;if(!e)return n.defaultValue;const[t]=ab(e);return t}function lb(){const n=Te.stateConfig,t=n.rearray[n.state.length];return n.state.push(t),t.defaultValue}function vp(n){var o,c;const e=Te.stateConfig,t=gt();if(!t||!t.state){const l="State requested but TaggedJs is not currently rendering a tag or host";throw console.error(l,{config:e,context:t,function:(c=(o=e.support)==null?void 0:o.templater.wrapper)==null?void 0:c.original}),new Error(l)}const r=t.state.newer;e.state=r.state;let s=n;if(typeof n===fe.function&&(s=n()),typeof s===fe.function){const l=s;s=function(...h){return l(...h)},s.original=l}const i={get:function(){return cb(i)},defaultValue:s};return e.state.push(i),s}function ub(n){const e=new le,t=r=>{const s=[],i=[],o=(f,m)=>{if(s[m]=!0,i[m]=f,s.length===n.length){for(const I of s)if(!I)return;r(i,u)}},c=[...n],u=c.shift().subscribe(f=>o(f,0)),h=c.map((f,m)=>f.subscribe(w=>o(w,m+1)));return u.subscriptions=h,u};return e.subscribeWith=t,e}function db(n,e){const t=n.findIndex(r=>r.callback===e);t!==-1&&n.splice(t,1)}function hb(n,e,t){const r=le.globalSubCount$;le.globalSubCount$.next(r.value+1);const s=function(){s.unsubscribe()};return s.callback=e,s.subscriptions=[],s.unsubscribe=function(){return fb(s,t,e)},s.add=i=>(s.subscriptions.push(i),s),s.next=i=>{e(i,s)},s}function Ap(n,e,t){const r=[...e],s=r.shift(),i=h=>{if(r.length)return Ap(h,r,t);t(h)};let o=i;const u=s(n,{setHandler:h=>o=h,next:i});o(u)}function fb(n,e,t){db(e,t);const r=le.globalSubCount$;le.globalSubCount$.next(r.value-1),n.unsubscribe=()=>n;const s=n.subscriptions;for(const i of s)i.unsubscribe();return n}const $r=class $r{constructor(e,t){ht(this,"onSubscription");ht(this,"methods",[]);ht(this,"isSubject",!0);ht(this,"subscribers",[]);ht(this,"subscribeWith");ht(this,"value");ht(this,"set",this.next.bind(this));this.onSubscription=t,arguments.length>0&&(this.value=e)}subscribe(e){const t=hb(this,e,this.subscribers),r=this.subscribeWith;if(r){if(this.methods.length){const s=e;e=i=>{Ap(i,this.methods,o=>s(o,t))}}return r(e)}return this.subscribers.push(t),this.onSubscription&&this.onSubscription(t),t}next(e){this.value=e,this.emit()}emit(){const e=this.value,t=this.subscribers;for(const r of t)r.callback(e,r)}toPromise(){return new Promise(e=>{this.subscribe((t,r)=>{r.unsubscribe(),e(t)})})}toCallback(e){const t=this.subscribe((r,s)=>{const i=s==null?void 0:s.unsubscribe;i?i():setTimeout(()=>{t.unsubscribe()},0),e(r)});return t}pipe(...e){const t=[];"value"in this&&t.push(this.value);const r=new $r(...t);return r.setMethods(e),r.subscribeWith=s=>this.subscribe(s),r.next=s=>this.next(s),r}setMethods(e){this.methods=e}static all(e){const t=e.map(r=>rb(r)?r:new $r(r,i=>(i.next(r),i)));return ub(t)}};ht($r,"globalSubCount$",new $r(0));let le=$r;const pb=new le(void 0,function(e){mo()||e.next()}),Te={stateConfig:{state:[],version:Date.now(),handlers:{handler:vp,statesHandler:Ep}},tagClosed$:pb};function mb(n,e){const r=n.templater.tag.values;for(const s of e)gb(r,s,n);return e}function gb(n,e,t){if(e.deleted)return;const r=e.tagJsVar;We(e),r.processUpdate("",e,t,n),Me()}function Cp(n,e){if(!n)return;const r=n.context.contexts;yb(n,e),++we.locks,mb(n,r),--we.locks,it()}function yb(n,e){const t=e.templater,r=e.templater.tag,s=t.values||r.values,i=n.templater.tag;i.values=s}function _b(n,e){return Uc(n,e)}function Uc(n,e){if(n===null||typeof n!==fe.object||e<0)return n;if(n instanceof Date)return new Date(n);if(n instanceof RegExp)return new RegExp(n);const t=st(n)?[]:Object.create(Object.getPrototypeOf(n));if(st(n))for(let r=0;r<n.length;r++)t[r]=Uc(n[r],e-1);else for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=Uc(n[r],e-1));return t}function bb(n,e,t){return Cl(n,e,t)}function Cl(n,e,t){return n===e||Eb(n,e)||t<0?!0:typeof n===fe.object&&typeof e===fe.object?n instanceof Date&&e instanceof Date?n.getTime()===e.getTime():st(n)&&st(e)?Tb(n,e,t-1):st(n)||st(e)?!1:wb(n,e,t-1):!1}function wb(n,e,t){const r=Object.keys(n),s=Object.keys(e);if(r.length===0&&s.length===0)return!0;if(r.length!==s.length)return!1;for(const i of r)if(!s.includes(i)||!Cl(n[i],e[i],t-1))return!1;return!0}function Tb(n,e,t){if(n.length!==e.length)return!1;for(let r=0;r<n.length;r++)if(!Cl(n[r],e[r],t-1))return!1;return!0}function Eb(n,e){return ir(n)&&ir(e)&&n.toString()===e.toString()}function sh(n){return n.map(Rl)}function Rl(n,e){const t=n,r=n==null?void 0:n.tagJsType;if(r)switch(r){case he.signal:case he.subscribe:case he.stateRender:return;case he.dom:case he.tag:case he.templater:return sh(t.values)}return st(n)?sh(t):_b(n,e)}function Ib(n,e){const t=n.length;for(let r=0;r<t;++r){const s=n[r],i=e[r];if(st(s)&&st(i)){if(s===i)continue;return 3}if(!(typeof s===fe.function&&typeof i===fe.function)){if(typeof s===fe.object){if(!s&&!i)continue;if(typeof e===fe.object){const o=Object.entries(s);for(const c of o)if(!vb(c,i))return 3.1}continue}if(s!==i)return 3.3}}return!1}function vb([n,e],t){const r=t[n];return typeof e===fe.function&&typeof r===fe.function?!0:r===e}function kl(n,e,t){return n}function Ab(n){return typeof n!==fe.object||!n||n.tagJsType}function Cb(n,e,t,r,s,i){var c;const o=Object.keys(n);for(const l of o){const u=n[l],h=e[l],f=Sl(h,u,t,r,i,s+1);u===f||(c=Object.getOwnPropertyDescriptor(n,l))!=null&&c.set||(n[l]=f)}return n}function Rb(n,e,t,r,s,i){for(let o=n.length-1;o>=0;--o){const c=n[o],l=e[o];n[o]=Sl(l,c,t,r,i,s+1)}return n}function Sl(n,e,t,r,s,i){return n==null||i>s?e:typeof n===fe.function?e.mem?(n.mem=e.mem,e):(n.mem=e,n):Ab(e)?e:st(e)?Rb(e,n,t,r,i,s):Cb(e,n,t,r,i,s)}function kb(n,e,t,r,s,i=-1){const o=e.context;if(!o.global||!o.state.newest){const w=kl(r);r.push(...w);const I=n.propsConfig;return I.castProps=w,r}e=o.state.newest||e;const h=e.propsConfig.castProps,f=[];for(let w=0;w<r.length;++w){const I=r[w],v=h[w],D=Sl(v,I,n,t,s,i+1);f.push(D)}const m=n.propsConfig;return m.castProps=f,f}function Sb(n,e){const t=n.context,r=t.global;let s=-1;const i=t.providers=t.providers||[],o=i.length-1;for(;s++<o;){const c=i[s];let l=-1;const u=c.children.length-1;for(;l++<u;){const h=c.children[l];if(r===h.context.global){c.children.splice(l,1),c.children.push(e);return}}}}function Rp(n,e){const t=n.context.providers;if(t)for(const r of t)for(let s=r.children.length-1;s>=0;--s)r.children[s].context.global===e&&r.children.splice(s,1);n.context.destroy$.next(),n.context.renderCount=0}function $c(n,e){for(const t of n){const r=t.lastArray;if(r){$c(r,e);continue}const s=t.value;if((s==null?void 0:s.tagJsType)===he.subscribe){s.destroy(t,e),t.deleted=!0;continue}const i=t.global;if(!i)continue;const o=t.state.newest,c=i.subscriptions;c&&c.forEach(Sp),pi(o.templater)&&Rp(o,i);const l=t.contexts;$c(l,o),i.deleted=!0}}function kp(n,e=[],t=[]){for(const r of n){const s=r.global;if(!s)continue;const i=r.state.newest;if(i){e.push(i);const c=s.subscriptions;c&&t.push(...c)}const o=r.contexts;o&&kp(o,e,t)}return{tags:e,subs:t}}function Sp(n){n.unsubscribe()}function mi(n,e){const t=n.context;e.deleted=!0,t.renderCount=0;const r=[],s=t.contexts;return $c(s,n),n.templater.wrapper&&Rp(n,e),xl(t,r),delete t.state,delete t.contexts,delete t.returnValue,delete t.providers,r}function Pb(n,e,t,r,s){const i=e==null?void 0:e.arrayValue;let c=n!==(i||s);return c===!1&&i===void 0&&t.tagJsVar.hasValueChanged(e,t,void 0)&&(c=!0),c?(Pl(t),r.splice(s,1),2):0}function Pl(n){const e=n.global;xb(e,n)}function xb(n,e){var t;if(n&&((t=e.state)!=null&&t.oldest)){const r=e.state.oldest;mi(r,n);return}e.tagJsVar.destroy(e,{})}function Pp(n){++n.updateCount;const e=n.lastArray;e&&xp(n,e)}function xp(n,e){for(let t=0;t<e.length;++t)Pl(e[t]);delete n.lastArray}function ei(n){for(let e=n.length-1;e>=0;--e){const t=n[e];Vb(t),n.splice(e,1)}}function Vb(n){const e=n.marker;e&&Zs(e,"destroyMarker");const t=n.domElement;Zs(t,"destroyClone")}function xl(n,e){n.contexts&&Db(n.contexts,e),n.htmlDomMeta&&ei(n.htmlDomMeta)}function Db(n,e){var t;for(const r of n){if(r.withinOwnerElement){const l=r.tagJsVar;if(l&&l.tagJsType==="host"){const u=r.supportOwner,h=l.destroy(r,u);dr(h)&&e.push(h)}continue}const s=r.lastArray;if(s){xp(r,s);continue}const i=r.simpleValueElm;if(i){delete r.simpleValueElm,Zs(i,"smartRemoveByContext");continue}const o=r.global;if(o===void 0)continue;if(o.deleted=!0,(t=r.state)==null?void 0:t.oldest){xl(r,e);continue}}}function Bc(n){const e=n.context,t=e.global,r=e.contexts;if(r){const{subs:s,tags:i}=kp(r);for(const c of i){if(c.context.global.deleted===!0)return;ih(c.context)}t.subscriptions&&s.forEach(Sp)}ih(e),hi(e)}function ih(n){n.global.deleted=!0,xl(n,[]),delete n.contexts}function Vp(n,e,t,r){const s=e.original,i=n.tagJsType===he.stateRender,o=Te.stateConfig;zo(t);let c;if(i?c=n():(c=s(...r),typeof c===fe.function&&c.tagJsType===void 0&&(c=c())),!c)throw new Error(`A tag cannot return a value of type ${c===null?"null":typeof c}`);const l=t.context;return l.returnValue=c,t.returnValue=c,n.tag=c,l.state.newer={...o},Me(),t}function Nb(n,e){const t=n.context;++t.renderCount,Lb(n.context),Te.tagClosed$.next(e)}function Lb(n){Mb(n),Ob()}function Mb(n){const e=Te.stateConfig,t=n||e.context;t.state=t.state||{},t.state.newer={...e};const r=e.support;t.state.newest=r}function Ob(){const n=Te.stateConfig;delete n.prevSupport,delete n.support,delete n.state,delete n.states,Me()}function Dp(n,e,t,r){let s;const i=n.templater;if(i.tagJsType===he.stateRender){const o=i;s=ea(i,t,r,n.appSupport),Vp(i,o,s)}else{const o=i.wrapper;s=o(n,t,e)}return Nb(s,r),s.ownerSupport=n.ownerSupport,s}function Fb(n){const e=Te.stateConfig;return e.rearray=n,e.state=[],e.states=[],e.statesIndex=0,e.handlers.handler=lb,e.handlers.statesHandler=ib,e}function Ub(n,e,t){Fb(t);const r=Te.stateConfig;r.prevSupport=e,zo(n)}function $b(n,e,t,r){const i=t.state.older.state;return Ub(n,e,i),Dp(n,e,t,r)}function Np(n,e,t,r){Ip(n.context),zo(n);const s=Dp(n,e,t,r);return Me(),s}function Bb(n){var r;const e=n==null?void 0:n.context,t=e==null?void 0:e.state;return(r=t==null?void 0:t.older)==null?void 0:r.state}function Vl(n,e){var r;const t=oh(n,e);return!t&&((r=e.templater.tag)!=null&&r._innerHTML)&&oh(n.outerHTML,e)?!0:t}function oh(n,e){const t=n.templater,r=e.templater,s=(t==null?void 0:t.tag)||n,i=r.tag;if((t==null?void 0:t.tagJsType)===he.stateRender)return t.dom===r.dom;if(!i&&!s.returnValue)return!0;if(!s.returnValue)return!1;throw new Error(`unknown tagJsType of ${s.tagJsType}`)}function jb(n,e,t){let r;Bb(e)?r=$b(n,e,t):r=Np(n,e,t);const i=!e||Vl(e,r);if(i){if(e){const o=e.templater.tag;if(o&&t.renderCount>0){const c=e==null?void 0:e.templater,l=c==null?void 0:c.tag;Hb(o,e,l)}}}else{Sb(e,r),Bc(e);const o=r.context;o.state.oldest=r,o.state.newest=r}return r.ownerSupport=n.ownerSupport,{support:r,wasLikeTags:i}}function Hb(n,e,t){if(n.tagJsType===he.dom){const r=t==null?void 0:t.dom,s=n.dom;r!==s&&Bc(e);return}if(t){const r=t.strings;if(r){const s=r==null?void 0:r.length,i=n.strings.length;s!==i&&Bc(e)}}}function zb(n,e,t){const r=jb(e,n,t);if(r.wasLikeTags){const s=t.state.oldest;return Cp(s,r.support),r.support}}function qb(n){const e=n.context;return zb(n,n,e)}function K(n){if(!n)return Ge;const e=gt();if(!e)throw new Error("output must be used in render sync with a parent context");const t=Al(e);if(!t)throw new Error("output must be used in render sync fashion");if(n.wrapped===!0)return n;const r=(...s)=>{const i=t.ownerSupport;return Gb(s,n,i.context)};return r.wrapped=!0,r}function Gb(n,e,t){We(t);const r=e(...n);return Wb(r,t)}function Wb(n,e){Me();const r=()=>{const s=e.global;if(s===void 0||s.deleted===!0){++we.locks;const o=e;o.tagJsVar.processUpdate(o.value,o,void 0,[]),--we.locks,it();return}++we.locks,qb(void 0),--we.locks,it()};return dr(n)&&n.then(()=>{gn.push([r,[]])}),gn.push([r,[]]),n}function Jb(n,e){++n.updateCount;const t=n.subContext,r=Lp(t,e);return delete n.subContext,r}function Lp(n,e){n.deleted=!0;const t=n.appendMarker;if(t&&(Zs(t,"deleteSubContext"),delete n.appendMarker),!n.hasEmitted)return;const r=n.contextItem;return r.tagJsVar.destroy(r,e),76}function Kb(n,e,t,r){const s=e.tagJsType;if(!e||!s||s!==n)return r.tagJsVar.destroy(r,t),yi(e,r,t,99),99}function Qb(n,e,t){const r=e.subContext,s=Kb(he.subscribe,n,t,e);return s||(!r||!r.hasEmitted||(r.tagJsVar=n,r.valuesHandler(r.lastValues,0)),0)}function Yb(n,e,t,r,s){const i=e.context;if(i.locked=3,t.target=t.target||r,We(t),t.inputsHandler){const o=e.propsConfig;t.inputsHandler(o)}t.tagJsVar.processInit(n,t,e,s,r),Me(),t.value=n,delete i.locked}function Jo(n){switch(n){case void 0:case!1:case null:return fi}return n}function Xb(n,e){const t=Jo(n);if(e.paint){e.paint[1][1]=t;return}const r=e.simpleValueElm;wt.push([K0,[t,r]])}function Zb(n,e){e.value=n,e.oldTagJsVar=e.tagJsVar,e.tagJsVar=Up(n);const t=e.placeholder,r=Jo(n),s=e.paint=[wp,[t,r,function(o){e.simpleValueElm=o,delete e.paint},"processNowRegularValue"]];mt.push(s)}function Ko(n,e){if(n.startsWith("class."))return"class";if(n.startsWith("style."))return"style";const t=ew(n);return t!==!1?t:n==="value"&&e==="SELECT"?"value":!1}function ew(n){switch(n){case"autoselect":case"autoSelect":return"autoselect";case"autofocus":case"autoFocus":return"autofocus"}return!1}function tw(n,e,t){typeof n[e]!="object"&&(n[e]={});for(const r in t){const s=t[r];wt.push([iw,[n,e,r,s]])}if(n[e].setProperty)for(const r in t){const s=t[r];wt.push([sw,[n,e,r,s]])}}function nw(n,e,t){n.setAttribute(e,"")}function zt(n,e,t){if(Go(t))return tw(n,e,t);Mp(n,e,t)}function rw(n,e,t){t?n[e]=!0:n[e]=!1}function Mp(n,e,t){if(n[e]=t,t===void 0||t===!1||t===null){n.removeAttribute(e);return}n.setAttribute(e,t)}function sw(n,e,t,r){n[e].setProperty(t,r)}function iw(n,e,t,r){n[e][t]=r}function Op(n,e,t,r){switch(r){case"autofocus":gn.push([dw,[t]]);return;case"autoselect":gn.push([uw,[t]]);return;case"style":{const s=n.split(".");wt.push([ow,[t,s,e]]);return}case"class":aw(n,e,t);return;case"value":zt(t,n,e),gn.push([s=>{s.value=e},[t]]);return}throw new Error(`Invalid special attribute of ${r}. ${n}`)}function ow(n,e,t){const r=e[1];n.style[r]=t,n.style.setProperty(r,t)}function aw(n,e,t){const r=n.split(".");if(r.shift(),e){for(const s of r)wt.push([cw,[t,s]]);return}for(const s of r)wt.push([lw,[t,s]])}function cw(n,e){n.classList.add(e)}function lw(n,e){n.classList.remove(e)}function uw(n){n.select()}function dw(n){n.focus()}function hw(n,e,t,r,s){const i=n(),o={component:!1,tagJsType:"dynamic-attr",matchesInjection:u=>{const h=c.tagJsVar;if(h.matchesInjection)return h.matchesInjection(u,c)},hasValueChanged:(u,h,f)=>{const m=n();return c.tagJsVar.hasValueChanged(m,c,f)},processInit:Ge,processInitAttribute:Ge,destroy:(u,h)=>{c.tagJsVar.destroy(c,h)},processUpdate:(u,h,f,m)=>{++h.updateCount;const w=u();c.tagJsVar.processUpdate(w,c,f,m),c.value=w}},c={description:"sub-context",updateCount:0,isAttr:!0,target:r,parentContext:e,value:i,tagJsVar:Pn(i),withinOwnerElement:!0,destroy$:new le,render$:new le},l={description:"override-context",updateCount:0,isAttr:!0,contexts:[c],target:r,parentContext:e,value:n,tagJsVar:o,withinOwnerElement:!0,destroy$:new le,render$:new le};return c.tagJsVar.processInitAttribute(t,i,r,c.tagJsVar,c,{},s),l}function fw(n,e,t,r,s,i,o){return t.target=r,t.howToSet=s,t.attrName=n,t.isSpecial=o,e!=null&&e.tagJsType?pw(n,e,t,i,r):Qo(n,e,r,s,o,t)}function pw(n,e,t,r,s){e.processInitAttribute(n,e,s,e,t,r,zt),t.tagJsVar=e}function Qo(n,e,t,r,s,i){if(typeof e=="function")return hw(e,i,n,t,r);if(s)return Op(n,e,t,s);r(t,n,e)}function Fp(n,e,t,r,s,i){const o=e.tagJsVar,c=n;if(o.hasValueChanged(c,e,t)>0){o.destroy(e,t),r.removeAttribute(s);const u=Pn(n);u.isAttr=!0,u.processInitAttribute(s,n,r,u,e,t,i),e.tagJsVar=u;return}}function mw(n,e,t,r,s,i,o){r.destroy=gw,r.hasValueChanged=bw,r.processUpdate=(l,u,h)=>Fp(l,u,h,t,n,o);const c=Ko(n,t.tagName);Qo(n,e,t,o,c,s),s.tagJsVar=r}function gw(n){const e=n.target,t=n.attrName;e.removeAttribute(t)}function Up(n){return{component:!1,tagJsType:"simple",value:n,processInitAttribute:mw,processInit:_w,destroy:$p,hasValueChanged:ww,processUpdate:yw}}function yw(n,e,t){return n===e.value?0:Ll(e,n,t)}function _w(n,e,t,r,s){const i=Jo(n);r=e.placeholder;const o=e.paint=[wp,[r,i,function(l){e.simpleValueElm=l,delete e.paint},"processSimpleValueInit"]];mt.push(o)}function $p(n){const e=n.simpleValueElm;if(!e){if(n.paint){n.paint[0]=Ge;return}if(n.value===void 0||n.value===!1||n.value===null)return}delete n.simpleValueElm,Zs(e,"deleteSimpleValue")}function bw(n,e){return n==null||n===e.value?0:6}function ww(n,e){return n==null||![fe.object,fe.function].includes(typeof n)?(Xb(n,e),0):($p(e),6)}function Tw(n,e){return st(n)?0:9}function hr(n,e,t){const r=e.tagJsVar.processUpdate(n,e,t,[]);return e.value=n,r||0}const ah=Symbol("not-casted"),Ew=[];function go(n,e,t,r){const s=n.lastArray===void 0;s&&(n.lastArray=[]);const i=n.lastArray;let o=n.placeholder;const c=e.length,l=new Array(c).fill(ah),u=function(w){const I=l[w];if(I!==ah)return I;const v=kw(e[w]);return l[w]=v,v};let h=s?!1:c!==i.length;s||(h=Iw(i,e,n,h,u).batchUpdates);const f=n.lastArray;for(let m=0;m<c;++m)o=vw(m,f,t,h,u,o,r).placeholder}function Iw(n,e,t,r,s){const i=[];let o=0;const c=e.length-1;for(let l=0;l<n.length;++l){const u=n[l];if(u.locked===1&&(r=!0),u.value===null){i.push(u);continue}const h=Cw(l,n,o,c,s);if(h===0){i.push(u);continue}if(h===2){l=l-1;continue}o=o+h}return t.lastArray=i,{batchUpdates:r}}function vw(n,e,t,r,s,i,o){const c=s(n),l=e[n];if(l)return Aw(c,l,t,r);const u=jp(c,t,e,i,o);return e.push(u),c&&(u.arrayValue=c.arrayValue||u.arrayValue),u}function Aw(n,e,t,r,s,i){return r?(J0(e,[Rw,[n,e,t]]),e.value=n,e):Array.isArray(n)?(e.tagJsVar.processUpdate(n,e,t,Ew),e.value=n,e):(hr(n,e,t),e)}function Cw(n,e,t,r,s){const i=n-t,o=i<0||r<i,c=e[n];if(o)return Pl(c),1;c.arrayValue===void 0&&(c.arrayValue=n);const l=c.arrayValue,u=s(n);return Pb(l,u,c,e,n)}function Rw(n,e,t){hr(n,e,t)}function kw(n){if(typeof n!="function")return n;const e=n;return e.tagJsType!==void 0?n:e()}function Bp(n){return{component:!1,tagJsType:"array",value:n,processInitAttribute:Ge,processInit:Pw,processUpdate:Sw,hasValueChanged:Tw,destroy:Pp}}function Sw(n,e,t){++e.updateCount;const s=e.tagJsVar.hasValueChanged(n,e,t);return s?(Pp(e),yi(n,e,t,s),s):Array.isArray(n)||hr(n,e,t)===0?(go(e,n,t),0):1}function Pw(n,e,t,r,s){go(e,n,t,s)}function Pn(n){return(n==null?void 0:n.tagJsType)?n:xw(n)}function xw(n){return st(n)?Bp(n):Up(n)}function Yo(n,e,t,r,s){return{description:"getNewContext",updateCount:0,value:n,destroy$:new le,render$:new le,tagJsVar:s||Pn(n),withinOwnerElement:t,parentContext:r}}function jp(n,e,t,r,s){const i=document.createTextNode(fi),o=Yo(n,t,!0,e.context);return o.withinOwnerElement=!1,o.placeholder=i,s||(o.placeholder=r),Yb(n,e,o,s,r),s&&qo.push([vl,[s,i]]),o}function Hp(n,e,t,r){return e.hasEmitted=!0,e.contextItem=jp(n,t,[],r)}function zp(n,e,t){var o;++e.updateCount;const s=n.owner._innerHTML;s.processInit=s.oldProcessInit;const i=(o=e.subContext)==null?void 0:o.contextItem;Ll(i,s,t)}function Vw(n,e,t,r,s){e.subContext={},n.processUpdate=zp,Dw(n,t,e,r,s)}function Dw(n,e,t,r,s){const{appendMarker:i,insertBefore:o}=um(s,r),c=t.subContext;c.appendMarker=i;const u=n.owner._innerHTML;u.processInit=u.oldProcessInit,Hp(u,c,e,o)}function qp(){return{component:!1,tagJsType:"innerHTML",hasValueChanged:()=>0,processInitAttribute:Ge,processInit:Vw,processUpdate:zp,destroy:Jb}}function Xo(n){++n.updateCount;const e=n.global,r=n.state.newest;delete n.inputsHandler,delete n.updatesHandler,mi(r,e),Nw(n)}function Nw(n){n.htmlDomMeta=[],delete n.contexts,delete n.state,delete n.global,n.renderCount=0}function Lw(n,e){var o;const t=(o=e.state)==null?void 0:o.newest,r=Tp(n),s=n;if(r)return Vl(s,t)?0:7;if(n==null?void 0:n.tagJsType){const c=e.value;if(!c&&n)return 88;const l=c.wrapper,u=n.wrapper;return(u==null?void 0:u.original)===(l==null?void 0:l.original)?0:88}return 8}function Zo(n,e){var c;const t=e.global,r=(c=e.state)==null?void 0:c.newest,s=Tp(n),i=n;if(s)return Vl(i,r)?(jc(e,n,r),0):(mi(r,t),hi(e),7);if(n==null?void 0:n.tagJsType){const h=e.state.newest.ownerSupport;return jc(e,n,h)===!0?0:88}return Xo(e),8}function Gp(n){return Dl(n)}function Mw(n){const e=Ow(n.attributes),t=Wp(n.innerHTML);return`<${n.tagName}${e}>${t}</${n.tagName}>`}function Ow(n){if(!n||n.length===0)return"";const e=[];return n.forEach(t=>{const r=t[0];if(typeof r!="string"||r.length===0)return;const s=Kp(t[1]);if(s===!0){e.push(r);return}s===!1||s===void 0||s===null||e.push(`${r}="${Jp(String(s))}"`)}),e.length>0?` ${e.join(" ")}`:""}function Wp(n){return!n||n.length===0?"":n.map(Dl).join("")}function Dl(n){const e=Kp(n);return Fw(e)?Mw(e):Uw(e)?$w(e):Array.isArray(e)?Wp(e):e==null||e===!1?"":Jp(String(e))}function Fw(n){return!!n&&typeof n=="object"&&typeof n.tagName=="string"}function Uw(n){return!!n&&typeof n=="object"&&n.tagJsType===he.tagComponent}function $w(n){var r;const e=(r=n.wrapper)==null?void 0:r.original;if(typeof e!="function")return"";let t=e(...n.props);return typeof t===fe.function&&t.tagJsType===void 0&&(t=t()),Dl(t)}function Jp(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Kp(n){return typeof n=="function"?n():n}function Bw(n,e){const t={component:!1,tagJsType:he.templater,processInit:"",processInitAttribute:Ge,processUpdate:hr,hasValueChanged:Zo,destroy:Xo,propWatch:n,props:e,get outerHTML(){return Gp(this)},key:function(s){return t.arrayValue=s,t},matchesInjection(r,s){var i;if(t.wrapper===r||((i=t.wrapper)==null?void 0:i.original)===(r==null?void 0:r.original))return s}};return t}const ti=[];function jw(n,e){return function(s,i,o){const c=Qp(n,s,o),l=s.ownerSupport,u=ea(n,i,l,s.appSupport,c);return Vp(n,e,u,c)}}function Qp(n,e,t){const r=n.propWatch===Tt.DEEP?Nl:am,s=n.props,i=e.propsConfig;let o=i.castProps;const c=t==null?void 0:t.propsConfig,l=c==null?void 0:c.castProps;return l&&(i.castProps=l,o=kb(e,t,t.ownerSupport,s,r)),o||kl(s)}function Hw(n,e,t,r,s){const i=CT(n,e,t,r,s);return i.hasEmitted||Yp(n,i),i}function Yp(n,e){const r=n.Observables[0];if(!e.hasEmitted){if("withDefault"in n){e.subValueHandler(n.withDefault,0);return}if("value"in r){e.subValueHandler(r.value,0);return}return}const s=e.lastValues[0].value;e.subValueHandler(s,0)}function zw(n,e,t,r,s,i){e.destroy=hm;const o=Ko(n,t.tagName),c=function(h,f){Qo(n,h,t,zt,o,s),Hc(f)},l=dm(e.Observables,i,c,e,s);return s.subContext=l,s.value=e,s.tagJsVar=e,e.processUpdate=function(h,f,m){return Fp(h,s,m,t,n,zt)},{subContext:l,onOutput:c}}function qw(n,e,t,r,s,i){const{subContext:o}=zw(n,e,t,e,s,i);o.hasEmitted||Gw(e,o)}function Gw(n,e){var o;const r=e.tagJsVar.onOutput;let i=((o=n.Observables[0])==null?void 0:o.value)||n.withDefault;n.callback&&(i=n.callback(i)),r(i,!0,e)}function Ww(n,e,t){return{component:!1,onOutput:Ge,tagJsType:he.subscribe,processInitAttribute:qw,processInit:Hw,hasValueChanged:Jw,processUpdate:Ge,destroy:RT,callback:t,withDefault:e,Observables:[n]}}function Jw(n,e){if(!(n!=null&&n.tagJsType))return 1;const t=n.Observables;if(!t)return 2;const s=e.value.Observables;return!s||s.length!==t.length?3:t.every((o,c)=>o===s[c])?0:4}function Kw(n,e,t,r){const s={component:!1,tagJsType:"tag-conversion",processInitAttribute:Ge,processInit:(i,o,c)=>{const l=n.returnValue;return e.tagJsVar.processInit(l,e,t,r.placeholder)},processUpdate:(i,o,c)=>{if(o.locked||o.deleted)return;++o.updateCount;const l=o.value,u=l==null?void 0:l.tagJsType,f=(i==null?void 0:i.tagJsType)!==u;if(Lw(i,o)||f||s.hasValueChanged(i,o,t)){s.destroy(o,t),yi(i,o,c,789);return}o.locked=467,o.render$.next();const I=o.returnValue;Qw(e,i,o,I,t),delete o.locked},hasValueChanged:(i,o,c)=>{const l=n.returnValue;return e.tagJsVar.hasValueChanged(l,e,c)},destroy:(i,o)=>{++n.updateCount,n.deleted=!0,delete n.returnValue;const c=e.tagJsVar.destroy(e,t);return dr(c)?c.then(()=>{const l=ch(n);return it(),l}):(n.destroy$.next(),ch(n))}};return s}function Xp(n,e,t){const r=n.context,s=n.returnValue,i=Pn(s);delete r.global,r.contexts=[];const o={updateCount:0,value:s,tagJsVar:i,destroy$:new le,render$:new le,placeholder:r.placeholder,withinOwnerElement:!0,parentContext:r,contexts:r.contexts},c=Kw(r,o,n,t);return r.subContext=o,r.tagJsVar=c,i.processInit(s,o,n,t.placeholder),n}function Zp(n,e,t){const r=ea(n,e,t,t==null?void 0:t.appSupport),s=r.propsConfig;if(s){const o=n.tagJsType!==he.tagComponent?[]:Qp(n,r);s.castProps=o}return Np(r,e.state.newest,e)}function em(n,e,t){const r=Zp(n,e,t);return r.templater.tag?Xp(r,r.ownerSupport,e):r}function Qw(n,e,t,r,s){const i=kl(e.props),o=n.value;o.props=i;const c=s.propsConfig;if(c&&(c.castProps=i),(e==null?void 0:e.tagJsType)==="tagComponent"){if(n.inputsHandler=t.inputsHandler,n.updatesHandler=t.updatesHandler,t.value=e,t.inputsHandler){We(t);const l=t.inputsHandler;l(i),Me()}if(t.updatesHandler){We(t);const l=t.updatesHandler;l(i),Me()}}n.tagJsVar.processUpdate(r,n,s,[]),n.value=r}function ch(n,e){delete n.returnValue,delete n.global,n.contexts=[],n.htmlDomMeta=[],delete n.inputsHandler,delete n.updatesHandler}function Yw(n,e,t,r){const s=Zp(n,e,t);return Xp(s,t,e)}function tm(n,e,t,r,s){return hi(e),s?Yw(n,e,t):em(n,e,t)}function Xw(n){var s,i;const e=gt();if(!e)throw new Error("tag.inject can only be called within a tag or host context");let t=e.parentContext;for(;t;){const o=t.contexts;if(o){for(const c of o)if(c.isAttr&&((s=c.tagJsVar)!=null&&s.matchesInjection)){const l=c.tagJsVar.matchesInjection(n,c);if(l!==void 0)return l.returnValue}}if((i=t.tagJsVar)!=null&&i.matchesInjection&&t.tagJsVar.matchesInjection(n,t))return t.returnValue;t=t.parentContext}const r=`Could not find parent context for tag.inject ${n}`;throw console.error(r,{targetItem:n,context:e}),new Error(r)}function Zw(n,e){return eT(n,e)}function eT(n,e,t=[]){const r=n.context;t.push({support:n,renderCount:r.renderCount,provider:e});const s=e.children;for(let i=s.length-1;i>=0;--i){const o=s[i],c=o.context;t.push({support:o,renderCount:c.renderCount,provider:e})}return t}function tT(n){const t=n.context.providers;if(!t)return[];const r=[];for(const s of t){const i=s.owner,o=Zw(i,s);r.push(...o.map(nT))}return r}function nT(n){return n.support}function rT(n){return he.templater===n.tagJsType}function sT(n,e){const t=e.context.global;return t&&t.deleted?!1:!!iT(n,e)}function iT(n,e){const t=n.props,s=e.propsConfig.latest;if(oT(t,s))return!0;switch(n.propWatch){case Tt.IMMUTABLE:return bT(t,s);case Tt.SHALLOW:return Ib(t,s)}return!bb(t,s,Nl)}function oT(n,e){const t=n.length,r=e.length;return t!==r}function yo(n,e=[]){const t=n.context,r=n.templater,s=rT(r),i=n.ownerSupport;if(t.locked)return e.push(n),e;if(s)return yo(i,e);const o=n.context.global;if(o&&o.deleted===!0)return e;const c=n,l=pi(c.templater),u=n.templater.tagJsType,f=i&&u!==he.stateRender&&(!l||sT(c.templater,c));if(c.context.providers){const w=tT(c);e.push(...w)}return f?(yo(i,e),l&&e.push(c),e):(e.push(c),e)}const aT=[];function nm(n){++we.locks;for(let e=0;e<n.length;++e)rm(n[e]);--we.locks,it()}function cT(n){++we.locks,rm(n),--we.locks,it()}function rm(n){const e=n.context;e.tagJsVar.processUpdate(e.value,e,n.ownerSupport,aT)}function sm(n,e,{resolvePromise:t,resolveValue:r}){return dr(n)?n.then(lT(e,t)):r(n)}function lT(n,e){return t=>{const r=n.context,s=r.global;if(r.deleted===!0||(s==null?void 0:s.deleted)===!0)return e(t);const i=yo(n);return nm(i),e(t)}}function lt(n){return Te.stateConfig.handlers.handler(n)}function uT(n){return lt(()=>{var r;const e=n(),t=mo();return(r=t==null?void 0:t.context)!=null&&r.global?sm(e,t,{resolvePromise:dT,resolveValue:hT}):e}),M}function dT(n){return n}function hT(n){return n}function Kt(n){return lt(function(){gt().destroy$.toCallback(n)}),M}function fT(n,e,t,...r){const s=t(...r),i=Al(n);if(!i)return s;if(!i.context.global){const o=i.context;o.tagJsVar.processUpdate(o.value,o,i.ownerSupport,[])}return dr(s)&&s.finally(()=>{if(!n.global){const o=i.context;o.tagJsVar.processUpdate(o.value,o,i.ownerSupport,[])}}),s}function me(n){const e=gt(),t=lt({callback:n}),r=lt(()=>im(e,Te.stateConfig,t));return t.callback=n,r}function im(n,e,t){const r=e.states;return function(...i){const o=fT(n,r,t.callback,...i);return it(),o}}function pT(n){const e=gt(),t=i=>{We(e);const o=n();return Me(),o},r=e.render$.subscribe(()=>{t()}),s=t();return M.onDestroy(()=>r.unsubscribe()),s}let mT=0;const Gs=om("click"),Br=om("mousedown");function om(n){return function(t){const r=me(t);return lt(()=>{pm().addEventListener(n,r)}),r}}const gT={get:pm,onclick:Gs,click:Gs,onClick:Gs,mousedown:Br,onmousedown:Br,onMouseDown:Br};gi("onclick",Gs);gi("click",Gs);gi("onMouseDown",Br);gi("onmousedown",Br);gi("mousedown",Br);function gi(n,e){Object.defineProperty(M,n,{get(){return e},set(t){return e(t)}})}var Tt;(function(n){n.DEEP="deep",n.SHALLOW="shallow",n.NONE="none",n.IMMUTABLE="immutable"})(Tt||(Tt={}));function M(n,e=Tt.SHALLOW){if(gt())throw new Error("A TaggedJs tag was created within a running tag. All component tags must be created outside of anyother tag");const r=function(...c){const l=Bw(e,c);l.tagJsType=he.tagComponent,l.processInit=tm,l.hasValueChanged=Zo;const u=jw(l,r);return u.original=n,l.wrapper=u,l},s=n;r.original=n,s.tags=ti,s.setUse=Te,s.ValueTypes=he,s.tagIndex=mT++,ti.push(r);const i=r;return i.inputs=o=>{const c=gt();c.inputsHandler=o;const l=c.tagJsVar;return o(l.props),!0},i.updates=o=>{const c=gt();return c.updatesHandler=o,!0},i.getInnerHTML=qp,i}function yT(n){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")}function _T(){throw new Error("Do not call tag.use as a function but instead set it as: `(props) => tag.use = (use) => html`` `")}M.element=gT;M.use=_T;M.deepPropWatch=M;M.route=yT;M.inject=Xw;M.output=K;M.onInit=uT;M.onDestroy=Kt;M.callback=me;M.onRender=pT;M.getInnerHTML=qp;M.app=function(n){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")};M.immutableProps=function(e){return M(e,Tt.IMMUTABLE)};M.watchProps=function(e){return M(e,Tt.SHALLOW)};Object.defineProperty(M,"use",{set(n){n.original={setUse:Te,tags:ti},n.tagJsType=he.stateRender,n.processInit=tm,n.processUpdate=hr,n.hasValueChanged=Zo,n.destroy=Xo}});Object.defineProperty(M,"promise",{set(n){xT(n)}});function bT(n,e){const t=n.length;for(let r=0;r<t;++r){const s=n[r],i=e[r];if(s!==i)return 2}return!1}const am=3,Nl=10;function wT(n,e,t){const r=n.templater;if(r.tagJsType!==he.stateRender){switch(r.propWatch){case Tt.IMMUTABLE:return n.propsConfig={latest:e,castProps:t};case Tt.SHALLOW:return n.propsConfig={latest:e.map(TT),castProps:t}}return n.propsConfig={latest:e.map(ET),castProps:t}}}function TT(n){return Rl(n,am)}function ET(n){return Rl(n,Nl)}function cm(n,e,t){const r={templater:n,context:e,castedProps:t,appSupport:void 0},s=e.global;return s.blocked=[],e.state||(e.state={newer:{state:[],states:[]}}),r}function lm(n,e,t,r){e.appSupport=t||e;const s=n.props;return s&&(e.propsConfig=wT(e,s,r)),e}function ea(n,e,t,r,s){const i=cm(n,e,s);return i.ownerSupport=t||i,i.ownerSupport.appSupport=r||i.ownerSupport,lm(n,i,r,s)}function IT(n,e,t,r){let s=t.templater||t;const i=n.templater.tag;i&&i._innerHTML&&(s=t._innerHTML);const o=ea(s,e,r,r.appSupport),l=n.context.state.oldest;Cp(l,o)}function jc(n,e,t){if(pi(e))return n.global===void 0&&hi(n),n.oldTagJsVar=n.tagJsVar,n.tagJsVar=e,vT(e,n,t),!0;if(n.global){n.oldTagJsVar=n.tagJsVar,n.tagJsVar=e;const i=n.state.newest;if(i)return typeof e===fe.function||IT(i,n,e,t),!0}if(n.inputsHandler){const i=t.propsConfig;n.inputsHandler(i)}return e.processInit(e,n,t,n.placeholder),n.oldTagJsVar=n.tagJsVar,n.tagJsVar=e,!0}function vT(n,e,t){if(!e.state.newest){if(e.inputsHandler){const r=t.propsConfig;e.inputsHandler(r)}n.processInit(n,e,t,e.placeholder);return}}function yi(n,e,t,r){const s=n&&n.tagJsType;if(delete e.deleted,s){jc(e,n,t);return}if(st(n)){go(e,n,t),e.oldTagJsVar=e.tagJsVar,e.tagJsVar=Bp(n);return}if(typeof n===fe.function){e.value=n;return}r&&Zb(n,e)}function Ll(n,e,t){const s=n.tagJsVar.hasValueChanged(e,n,t);return s===0||yi(e,n,t,s),s}function um(n,e){let t;return n&&(t=e=document.createTextNode(fi),qo.push([vl,[n,e]])),{appendMarker:t,insertBefore:e}}function AT(n,e,t){const r=Qb(n,e,t);if(e.hasEmitted!==!0){const s=e.value.Observables;if(!s||!("value"in s[0]))return}if(r===0&&n.callback){const s=e.subContext;Yp(n,s)}}function CT(n,e,t,r,s){const i=n.Observables,{appendMarker:o,insertBefore:c}=um(s,r);let l=function(f,m,w){Hp(f,w,t,c),Hc(m),l=w.tagJsVar.onOutput=function(v,D,O){const C=O.contextItem;Ll(C,v,t),C.tagJsVar.processUpdate(v,C,t,[v]),C.value=v,Hc(D)}};const u=dm(i,t,(h,f,m)=>l(h,f,m),n,e);return u.appendMarker=o,e.subContext=u,n.processUpdate=AT,n.onOutput=l,u}function dm(n,e,t,r,s){function i(u,h){var f;l.lastValues[h]={value:u,tagJsVar:Pn(u),oldTagJsVar:(f=l.lastValues[h])==null?void 0:f.tagJsVar},o(l.lastValues,h)}function o(u,h){const f=l.tagJsVar;if(f==null?void 0:f.callback){We(s);const I=f.callback(...u.map(v=>v.value));t(I,c,l),Me();return}const w=u[h].value;t(w,c,l)}let c=!0;const l={lastValues:[],subValueHandler:i,valuesHandler:o,tagJsVar:r,subscriptions:[]};return n.forEach((u,h)=>{c=!0,l.subscriptions.push(u.subscribe(f=>i(f,h))),c=!1}),r.onOutput=t,l}function hm(n){const e=n.subContext;if(!e)return;e.subscriptions.forEach(r=>r.unsubscribe()),delete n.subContext}function RT(n,e){++n.updateCount;const t=n.subContext;return hm(n),Lp(t,e)}function Hc(n){n||Te.stateConfig.support||it()}class vt extends le{constructor(t){super(t);ht(this,"value");this.value=t}subscribe(t){const r=super.subscribe(t);return t(this.value,r),r}}const fm=((n,e)=>Ml(n,e).pastResult),kT=n=>n;function ST(n){const e=(t,r)=>Ml(t,r,n).pastResult;return e.setup=n,Ol(()=>e,e),e}const Ml=(n,e,{init:t,before:r,final:s=kT}={})=>{const i=lt({pastResult:void 0,values:void 0}),c=typeof n=="function"?n():n,l=i.values===void 0;let u=0;l&&typeof n=="function"&&M.onRender(()=>{if(++u,u===1)return;const f=n();h(f)});function h(f){if(i.values===void 0){if(r&&!r(f))return i.values=f,i;const v=(t||e)(f,i.values);return i.pastResult=s(v),i.values=f,i}if(f.every((I,v)=>I===i.values[v]))return i;if(r&&!r(f))return i.values=f,i;const w=e(f,i.values);return i.pastResult=s(w),i.values.length=0,i.values.push(...f),i}return h(c)};function Ol(n,e){return Object.defineProperty(e,"noInit",{get(){const t=n();return t.setup.init=()=>{},t}}),Object.defineProperty(e,"asSubject",{get(){const t=n(),r=lt(()=>mo()),s=lt(()=>new vt(void 0));lt(()=>({state:Te.stateConfig.state,states:Te.stateConfig.states}));const i=(o,c)=>(Ml(o,(u,h)=>{const f=mo(),m=c(u,h);f!==r&&r.context.state.older,s.next(m)},t.setup),s);return i.setup=t.setup,Ol(()=>i,i),i}}),Object.defineProperty(e,"truthy",{get(){const t=n();return t.setup.before=r=>r.every(s=>s),t}}),e}Ol(()=>ST({}),fm);class Fl extends Error{constructor(t,r,s={}){super(t);ht(this,"details");this.name=Fl.name,this.details={...s,errorCode:r}}}class Ul extends Fl{constructor(e,t){super(e,"sync-callback-error",t),this.name=Ul.name}}new Ul("callback() was called outside of synchronous rendering. Use `callback = callbackMaker()` to create a callback that could be called out of sync with rendering");const PT=()=>{};function xT(n){const e=gt(),t=lt({callback:PT}),r=lt({current:void 0}),s=lt(()=>im(e,Te.stateConfig,t));if(r.current!==n){r.current=n;const i=n;n.then(()=>{r.current===i&&s()})}}function gt(){return Te.stateConfig.context}function pm(){return gt().target}const no=[];function We(n){return no.push(n),Te.stateConfig.context=n}function Me(){no.pop(),Te.stateConfig.context=no[no.length-1]}function VT(n,e,t,r,s,i,o){const c=document.createTextNode(fi);if(ti.push(t.wrapper||{original:t}),i.placeholder=c,e.isApp=!0,!s)throw new Error(`Cannot tagElement, element received is type ${typeof s} and not type Element`);s.destroy=function(){const f=i.events;for(const w in f){const I=f[w];s.removeEventListener(w,I)}i.events={},++we.locks;const m=mi(h,e);return--we.locks,it(),m},++we.locks;const l=document.createDocumentFragment();l.appendChild(c);const h=em(t,i,{appSupport:{appElement:s,context:i},appElement:s,context:i,isRoot:!0});return h.appElement=s,o&&(r.tag=h.templater.tag),--we.locks,it(),s.appendChild(l),{support:h,tags:ti,ValueTypes:he}}function DT(n,e,t){const r=cm(n,e);return lm(n,r,r),r.appElement=t,r.context=e,e.state.oldest||(e.state.oldest=r,e.state.older=e.state.newer),e.state.newest=r,r}typeof document=="object"&&(document.taggedJs&&console.warn("🏷️🏷️ Multiple versions of taggedjs are loaded. May cause issues."),document.taggedJs=!0);const tc=[],lh="__taggedjs_tag_element__";function NT(n,e,t){const r=e[lh],s=tc.findIndex(w=>w.element===e);if((r||s>=0)&&console.warn("tagElement called multiple times for the same element",{element:e}),s>=0){const w=tc[s].support;mi(w,w.context.global),tc.splice(s,1)}e[lh]=!0,e.innerHTML="";let i=(()=>h(...t));i.propWatch=Tt.NONE,i.tagJsType=he.stateRender,i.processUpdate=hr,i.props=[t],i.isApp=!0;const o=LT(i,e),c=o.global,l=o.state.newest;Ip(l.context),zo(l);let h=n(...t||[]);const f=typeof h==fe.function;f||(pi(h)?(o.state.newest.propsConfig={latest:[t],castProps:[t]},i.propWatch=h.propWatch,i.tagJsType=h.tagJsType,i.wrapper=h.wrapper,i=h):(i.tag=h,h=n));const m=VT(n,c,i,h,e,o,f);return Me(),m}function LT(n,e){const t={component:!1,tagJsType:"templater",hasValueChanged:Zo,destroy:Xo,processInitAttribute:Ge,processInit:function(){console.debug("do nothing app function")},processUpdate:hr},r={updateCount:0,value:n,varCounter:0,destroy$:new le,render$:new le,withinOwnerElement:!1,renderCount:0,global:void 0,state:{},tagJsVar:t};return hi(r),r.events={},DT(n,r,e),r}const mm=":tagvar",MT=":";function OT(n){return Array.isArray(n)&&Object.prototype.hasOwnProperty.call(n,"raw")}function FT(n,e){return function(r,s,i){if(OT(s)){const o=[];for(let l=0;l<s.length;++l)o.push(s[l]),l<i.length&&o.push(String(i[l]??""));const c=o.join("");return e(r,[n,c])}return e(r,[n,s])}}const UT=[["alt","alt"],["ariaLabel","aria-label"],["referrerPolicy","referrerpolicy"],["autoFocus","autoFocus"],["border","border"],["id","id"],["for","for"],["fill","fill"],["content","content"],["charset","charset"],["cellPadding","cellpadding"],["cellSpacing","cellspacing"],["class","class"],["href","href"],["lang","lang"],["label","label"],["loading","loading"],["value","value"],["placeholder","placeholder"],["src","src"],["title","title"],["width","width"],["height","height"],["type","type"],["min","min"],["max","max"],["step","step"],["name","name"],["wrap","wrap"],["checked","checked"],["disabled","disabled"],["selected","selected"],["minLength","minLength"],["maxLength","maxLength"],["inputMode","inputMode"],["open","open"],["rel","rel"],["required","required"],["readonly","readonly"],["readOnly","readonly"],["rows","rows"],["style","style"],["target","target"],["viewBox","viewBox"],["valign","valign"]];function $T(n,e,t){const r=_i(n,n.elementFunctions);return gm(r,e,t)}function gm(n,e,t){function r(s){return r.toCallback(s)}return r.toCallback=t,n.listeners.push([e,r]),n.allListeners.push([e,r]),n}function ym(n,e){const t=_i(n,n.elementFunctions);return JT(e[0],e[1],t),t}function BT(n,e){const t=_i(n,n.elementFunctions);for(const r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;const s=e[r];t.attributes.push([r,s]),bm(t,s),ni(r)?bo(r,t):ni(s)&&bo(s,t)}return t}const jT=Object.fromEntries(UT.map(([n,e])=>[n,FT(e,ym)])),HT=[["onClose","onclose"],["onCancel","oncancel"],["onDoubleClick","ondblclick"],["onClick","click"],["onBlur","onblur"],["onChange","onchange"],["onSubmit","onsubmit"],["onInput","oninput"],["contextMenu","contextmenu"],["onMouseDown","onmousedown"],["onMouseUp","onmouseup"],["onMouseOver","onmouseover"],["onMouseOut","onmouseout"],["onKeyDown","onkeydown"],["onKeyUp","onkeyup"]];function _m(n,e){return n.attributes.push(e),bm(n,e[1]),ni(e[0])?bo(e[0],n):ni(e[1])&&bo(e[1],n),n}const zT=(()=>{const n=Object.fromEntries(HT.map(([r,s])=>[r,function(o){return $T(this,s,o)}])),e=Object.fromEntries(Object.entries(jT).map(([r,s])=>[r,qT(s)])),t=e.id;return e.id=function(...s){const i=s[0];return this.arrayValue=typeof i=="function"?i():i,t.apply(this,s)},{...n,attr:function(...s){return ym(this,s)},attrs:function(s){return BT(this,s)},key:function(r){return this.arrayValue=r,this},...e}})();function _o(n){return zT}function bm(n,e){let t=1;e!=null&&typeof e!="function"&&typeof e.length=="number"&&(t+=e.length),n.contentId+=t}function qT(n){return(function(t,...r){return n(this,t,r)})}function GT(n,e,t){if(Go(t)){for(const r in t){if(!Object.prototype.hasOwnProperty.call(t,r))continue;t[r]?n.classList.add(r):n.classList.remove(r)}return}Mp(n,e,t)}function bo(n,e){e.contexts||(e.contexts=[]),e.contexts.push(n),++e.contentId}function ni(n){return Array.isArray(n)||ir(n)||(n==null?void 0:n.tagJsType)}function uh(n,e){return(t,r)=>_m(t,[n,r,!1,e])}function Ae(n){return(e,t)=>gm(e,n,t)}const WT=Object.fromEntries([["onClick",Ae("click")],["onDoubleClick",Ae("ondblclick")],["onDblClick",Ae("ondblclick")],["onDblClick",Ae("ondblclick")],["onBlur",Ae("onblur")],["onChange",Ae("onchange")],["onCancel",Ae("oncancel")],["onClose",Ae("onclose")],["onInput",Ae("oninput")],["onMousedown",Ae("onmousedown")],["onMouseDown",Ae("onmousedown")],["onMouseup",Ae("onmouseup")],["onMouseUp",Ae("onmouseup")],["onMouseover",Ae("onmouseover")],["onMouseOver",Ae("onmouseup")],["onMouseout",Ae("onmouseout")],["onMouseOut",Ae("onmouseout")],["onKeyup",Ae("onkeyup")],["onKeyUp",Ae("onkeyup")],["onKeydown",Ae("onkeydown")],["onKeyDown",Ae("onkeydown")]]),dh=Object.assign(Object.fromEntries(["checked","disabled","selected"].map(n=>[n,uh(n,rw)])),{class:uh("class",GT)},WT);function JT(n,e,t){return n in dh?dh[n](t,e):_m(t,[n,e,!1,zt])}function wm(n,e){++n.updateCount;const t=n.contexts,r=[];if(n.paintCommands){for(let s=mt.length-1;s>=0;--s){const i=mt[s],o=n.paintCommands.indexOf(i);if(o>=0&&(mt.splice(s,1),n.paintCommands.splice(o,1),n.paintCommands.length===0))break}delete n.paintCommands,nc(n);return}if(t.length&&(wo(t,e,r),t.length=0,r.length)){const s=n.htmlDomMeta;return n.deleted=!0,Promise.all(r).then(()=>{++we.locks,ei(s),nc(n),--we.locks,it()})}ei(n.htmlDomMeta),nc(n)}function nc(n){n.htmlDomMeta=[],delete n.contexts,n.deleted=!0}function wo(n,e,t){const r=n[0],s=r.tagJsVar.destroy(r,e);if(r.deleted=!0,dr(s))return t.push(s.then(()=>{if(n.length>1)return wo(n.slice(1,n.length),e,t)}));if(r.htmlDomMeta&&(ei(r.htmlDomMeta),delete r.htmlDomMeta),n.length>1)return wo(n.slice(1,n.length),e,t)}function Tm(n,e,t){if(e.deleted===!0)return;if(++e.updateCount,$l(n,e)){wm(e,t),e.htmlDomMeta=[],delete e.deleted,yi(n,e,t,789);return}const i=e.contexts,o=n.contexts||[],c=e.tagJsVar,l=n,u=c.allListeners,h=l.allListeners;for(let f=0;f<h.length;++f){const m=h[f],w=u[f][1];w.toCallback=m[1].toCallback}if(i.length!==o.length){const f=new Array(i.length);for(let m=0;m<i.length;++m)f[m]=i[m].value;throw console.info("context mismatch",{value:n,context:e,conValues:f,vContexts:o,deleted:e.deleted,contexts:i}),new Error(`Expected ${i.length} contexts but got ${o.length}`)}e.locked=79;for(let f=0;f<i.length;++f){const m=i[f];m.tagJsVar.processUpdate(o[f],m,t)}delete e.locked}function $l(n,e){if(!n)return 1;const t=e.value;if(t===n)return 0;if(n.tagJsType!=="element"||t===null)return 1;const r=n,s=t,i=r.contentId,o=s.contentId;if(i!==o)return 1;const c=r.innerHTML.length,l=s.innerHTML.length;return c!==l?1:0}function Em(n,e,t){const r=t[e];if(r){let i=!1;if(n.originalStopPropagation=n.stopPropagation,n.stopPropagation=function(){i=!0,n.originalStopPropagation.call(n),n.stopPropagation=n.originalStopPropagation,delete n.originalStopPropagation},r(n),n.defaultPrevented||i)return}const s=t.parentNode;s&&Em(n,e,s)}function Im(n,e,t,r){const s=n.appElement,i=KT(e);e==="blur"&&(e="focusout");const c=n.context.events;if(!c[e]){const l=function(h){Em(h,i,h.target)};c[e]=l,s.addEventListener(e,l)}t[i]=r,t[e]=r}function KT(n){return n==="blur"&&(n="focusout"),"_"+n}function QT(n,e){const t=e.context.global,r=function(i,o){if(t.deleted!==!0)return YT(r.tagFunction,r.support,i,o)};return r.tagFunction=n,r.support=e,r}function YT(n,e,t,r){const s=Wo(e),i=s.context;i.locked=1;const o=n.apply(t,r);return delete i.locked,vm(o,s)}function vm(n,e){const t=e.context.global;if(t!=null&&t.deleted)return;const r=yo(e);return nm(r),sm(n,e,{resolvePromise:eE,resolveValue:tE})}const XT="no-data-ever",ZT="promise-no-data-ever";function eE(){return ZT}function tE(){return XT}function Am(n,e,t,r){const s=function(...i){return s.tagFunction(n,i)};s.tagFunction=e,s.support=t,Im(t.appSupport,r,n,s)}function Cm(n){return n==null||n===!1}function Rm(n,e,t,r,s,i,o,c,l){const u=Yo(n,[],!0,t);return u.description="tagJsVar-attr",u.target=c,u.isAttr=!0,u.isNameOnly=l,u.stateOwner=Wo(i),u.supportOwner=i,We(u),r.processInitAttribute(o,n,c,r,u,i,zt),Me(),u.oldTagJsVar=u.tagJsVar,u.tagJsVar=r,u}function km(n,e,t,r,s,i,o,c){if(Cm(e))return;const l=typeof e;if(l===fe.object){for(const u in e)hh(u,t,e,n,r,i,o,i);return i}if(l==="function"){const u=nE(c);c.tagJsVar=u,We(c);const h=e(c),f=Pn(h);if(Me(),f!=null&&f.tagJsType){c.state={newer:{state:[],states:[]}};const m=Rm(f,i,o,f,-1,r,"attr",t,!0);return m.tagJsVar=f,c.subContext=m,i}return hh("attr",t,e,n||[],r,i,o,i),i}e.length!==0&&s(t,e,fi)}function hh(n,e,t,r,s,i,o,c){const l=Ko(n,e.tagName),u=t[n],f=Pm(n,u,r,e,s,zt,i,o,l);f!==void 0&&(Array.isArray(f)?c.push(...f):c.push(f))}function nE(n){return{tagJsType:"relay",component:!1,hasValueChanged:(t,r,s)=>r.subContext.tagJsVar.hasValueChanged(t,r.subContext,s),processInitAttribute:(t,r,s,i,o,c,l)=>o.subContext.tagJsVar.processInitAttribute(t,r,s,i,o.subContext,c,l),destroy:(t,r)=>t.subContext.tagJsVar.destroy(t.subContext,r),processUpdate:(t,r,s,i)=>{const o=t(r.subContext);return r.subContext.tagJsVar.processUpdate(o,r.subContext,s,i)},processInit:(t,r,s,i,o)=>r.subContext.tagJsVar.processInit(t,r.subContext,s,i,o),matchesInjection:t=>n.subContext.tagJsVar.matchesInjection(t,n.subContext)}}function rE(n,e,t,r,s,i,o,c,l){if(t){if(Cm(e)||e===""){r.removeAttribute(t);return}if(typeof t===fe.object)if(typeof e===fe.object)for(const f in t)f in e||wt.push([fh,[r,f]]);else for(const f in t)wt.push([fh,[r,f]])}const u=km(n,e,r,s,i,o,c,l);u&&o.push(...u)}function fh(n,e){n.removeAttribute(e)}function sE(n,e,t,r){const s=e,i=n;if(i!=null&&i.tagJsType){const c=e.value;if(!(c!=null&&c.tagJsType)){i.isAttr=!0,We(e),i.processInitAttribute(s.attrName,n,s.target,i,s,t,zt),Me(),s.tagJsVar=i;return}c.hasValueChanged(i,e,t);return}if(s.isNameOnly){rE(r,n,s.value,s.target,t,s.howToSet,[],s.parentContext,s),s.value=n;return}const o=s.target;lE(n,s.attrName,s,o,t,s.howToSet,s.isSpecial),e.value=n}const iE=new RegExp(mm+"(\\d+)"+MT,"g");function Sm(n){return n.search&&n.startsWith(mm)?n.search(iE):-1}function oE(n,e,t,r,s,i,o){const c=r.length,l=[];e.forEach(h=>{if(Sm(h)>=0){const m=r.length,w=Pn(h),I={description:"attribute-array-item",updateCount:0,isAttr:!0,target:t,attrName:n,withinOwnerElement:!0,tagJsVar:w,parentContext:o,destroy$:new le,render$:new le};w.processUpdate=function(O,C,V,$){++C.updateCount,u($)};const v=i[m];I.value=v,l.push(I),++o.varCounter}});function u(h){const f=aE(e,h,c).join("");s(t,n,f)}return u(i),l}function aE(n,e,t){return n.reduce((r,s)=>{if(Sm(s)>=0){const o=t++,c=e[o];return r.push(c),r}return r.push(s),r},[])}function cE(n,e,t,r,s,i,o,c,l){if(typeof e===fe.function)return++s.varCounter,xm(e,o,n,t);const u=Pn(e),h={description:"dynamic-attribute",updateCount:0,isAttr:!0,target:t,attrName:n,howToSet:i,value:e,withinOwnerElement:!0,tagJsVar:u,destroy$:new le,render$:new le,parentContext:s};return r.push(h),u.processUpdate=sE,fw(n,e,h,t,i,o,c),h.value=e,h}function ph(n){return Go(n)&&"TagJsTag"in n?n.tagJsVar:-1}function Pm(n,e,t,r,s,i,o,c,l){const u=ph(n);let h=u>=0||e===void 0&&typeof n!="string",f=t[u];e!=null&&e.tagJsType?f=e:(n!=null&&n.tagJsType||typeof n=="function")&&(h=!0,f=n,e=n);const m=f;if(m!=null&&m.tagJsType)return Rm(e,o,c,m,u,s,n,r,h);if(h){u===-1&&h&&(f=n);const I=Yo(f,[],!0,c);return I.description="processAttribute",I.isAttr=!0,I.target=r,I.isNameOnly=!0,I.howToSet=i,km(t,f,r,s,i,o,c,I),I}if(Array.isArray(e))return oE(n,e,r,[],i,t,s.context);const w=ph(e);if(w>=0){const I=t[w];return cE(n,I,r,[],c,i,s,l)}return Qo(n,e,r,i,l,c)}function lE(n,e,t,r,s,i,o){return ir(n)?dE(s,n,r,e):uE(n,r,e,o,i,s)}function uE(n,e,t,r,s,i){if(r!==!1){Op(t,n,e,r);return}switch(n){case void 0:case!1:case null:wt.push([hE,[e,t]]);return}if(ir(n))return Am(e,n,i,t);s(e,t,n)}function dE(n,e,t,r){return xm(e,n,r,t)}function xm(n,e,t,r){return n=QT(n,e),Am(r,n,e,t)}function hE(n,e){n.removeAttribute(e)}function fE(n,e,t,r,s){for(const i of n){const o=i[0],c=i[1],l=i[2]||!1;let u=i.length>1?zt:nw;i[3]&&(u=i[3]);const h=s.contexts,f=Pm(o,c,e,t,r,u,h,s,l)||void 0;typeof f=="object"&&(h.push(f),++s.varCounter)}}function pE(n,e,t,r,s){const i=[],o={updateCount:0,parentContext:t,contexts:i,target:e,value:n,htmlDomMeta:[],tagJsVar:{component:!1,tagJsType:"dynamic-text",hasValueChanged:()=>0,processInit:Ge,processInitAttribute:Ge,destroy:(f,m)=>{++o.updateCount,i.forEach(w=>w.tagJsVar.destroy(w,m))},processUpdate:(f,m,w,I)=>{++o.updateCount,We(u);let v=f(u);const D=o.underFunction;delete o.underFunction,v instanceof Function&&!v.tagJsType&&(D&&v.toString()===D.toString()?v=u.value:(o.underFunction=v,v=v()));const O=u.tagJsVar.processUpdate(v,u,w,I);return u.value=v,m.value=f,Me(),O}},withinOwnerElement:!0,destroy$:new le,render$:new le};We(o);let c=n();ir(c)&&!c.tagJsType&&(o.underFunction=c,c=c());const u=Dm(c,o,e,r,s);return t.contexts.push(o),o.subContext=u,Me(),u}function Vm(n,e,t,r,s){n.forEach(i=>{switch(typeof i){case"string":case"boolean":case"number":return mh(i,r,s);case"function":{if(i.tagJsType==="element")break;return pE(i,r,e,t,s)}}if(i==null)return mh(i,r,s);if(i.tagJsType==="element"){const c=Nm(i,e,t,e.contexts);mt.push([s,[r,c]]),e.htmlDomMeta.push({nn:c.tagName,domElement:c,at:[]});return}return Dm(i,e,r,t,s)})}function Dm(n,e,t,r,s){const i=Yo(n,[],!0,e);if(e.contexts.push(i),i.target=t,i.placeholder=document.createTextNode(""),mt.push([s,[t,i.placeholder]]),We(i),i.inputsHandler){const c=r.propsConfig;i.inputsHandler(c)}return i.tagJsVar.processInit(n,i,r,i.placeholder),Me(),i}function mh(n,e,t){const r=Jo(n),s=document.createTextNode(r);return mt.push([t,[e,s]]),s}function Nm(n,e,t,r){const s=n.tagName,i=document.createElement(s);e.target=i;const o=n.attributes;for(let l=0;l<o.length;++l){const u=o[l],h=u[0];typeof h=="string"&&(u[2]=Ko(h,s))}fE(o,[],i,t,e),Vm(n.innerHTML,e,t,i,vl);const c=n.listeners;for(let l=0;l<c.length;++l)mE(n,l,t,c[l],i);return i}function mE(n,e,t,r,s){const i=r[0],o=(...c)=>{const u=n.listeners[e][1],h=Wo(t),f=h.context,m=f.updateCount;f.locked=1,++we.locks,We(f);const w=u(...c);return--we.locks,delete f.locked,Me(),m===f.updateCount?vm(w,h):(it(),dr(w)?w.then(()=>{const v=h.context.state.newest;return cT(v),"promise-no-data-ever"}):"no-data-ever")};Im(t.appSupport,i,s,o)}function gE(n,e,t,r){e.contexts=e.contexts||[],e.htmlDomMeta=[],e.locked=34;const s=Nm(n,e,t,e.contexts);delete e.locked;const i=[Il,[r,s,"htmlTag.processInit"]];mt.push(i),e.paintCommands=[i],gn.push([()=>{delete e.paintCommands},[]]);const o={nn:n.tagName,domElement:s,at:n.attributes};return e.htmlDomMeta=[o],s}function H(n){const t=_i({component:!1,tagJsType:"element",processInitAttribute:Ge,processInit:gE,destroy:wm,processUpdate:Tm,hasValueChanged:$l,tagName:n,innerHTML:[],attributes:[],contentId:0,listeners:[],allListeners:[],elementFunctions:_o},_o);return t.tagName=n,t}function _i(n,e){const t=function r(...s){const i={...r};i.attributes=Ir(r.attributes),i.listeners=Ir(r.listeners),i.allListeners=Ir(r.allListeners);let o=i.contexts;i.innerHTML=s;for(let c=0;c<s.length;++c){const l=s[c];if(ni(l)){if(l.tagJsType==="element"){gh(i.allListeners,l.allListeners),l.contexts&&(o||(o=[],i.contexts=o),gh(o,l.contexts),++i.contentId);continue}o||(o=[],i.contexts=o),o.push(l)}}return i};return Object.assign(t,n),yE(t,e(t)),t.attributes=Ir(n.attributes),t.listeners=Ir(n.listeners),t.allListeners=Ir(n.allListeners),t.toString=function(){return Gp(this)},t}function Ir(n){return n.length?n.slice():[]}function gh(n,e){for(let t=0;t<e.length;++t)n.push(e[t])}function yE(n,e){for(const t in e){const r=e[t];try{n[t]=r}catch{Object.defineProperty(n,t,{value:r,writable:!0,configurable:!0,enumerable:!1})}}}const ve=_E();function _E(){const e=_i({component:!1,tagJsType:"element",processInitAttribute:Ge,processInit:bE,destroy:wE,processUpdate:Tm,hasValueChanged:$l,tagName:"no-element",innerHTML:[],attributes:[],contentId:0,listeners:[],allListeners:[],elementFunctions:_o},_o);return e.tagName="no-element",e}function bE(n,e,t,r){e.contexts=e.contexts||[],e.htmlDomMeta=[],Vm(n.innerHTML,e,t,r,Il)}function wE(n,e){++n.updateCount;const t=n.contexts,r=[];if(t.length&&(wo(t,e,r),t.length=0,r.length)){const s=n.htmlDomMeta;return Promise.all(r).then(()=>{++we.locks,ei(s),--we.locks,it()})}}const G=H("button"),Bl=H("select"),nr=H("option"),TE=H("optgroup"),ue=H("input"),ns=H("textarea");H("html");H("head");const Lm=H("title");H("meta");H("link");const Vt=H("style");H("body");H("script");H("noscript");const Mm=H("hr"),jl=H("h1"),Ze=H("h2"),et=H("h3");H("h4");H("h5");H("h6");H("ol");const yh=H("ul"),vr=H("li"),g=H("div");H("main");const rc=H("section");H("header");H("footer");H("form");const ta=H("fieldset");H("legend");H("dialog");H("pre");H("table");H("tr");H("td");H("th");H("thead");H("tbody");H("tfoot");const Om=H("iframe"),q=H("a"),EE=H("u"),Y=H("img"),pe=H("br"),ce=H("label"),oe=H("p"),z=H("small"),Z=H("span"),fr=H("strong"),IE=H("b");H("sup");H("nav");H("figure");H("figcaption");H("code");H("canvas");const ro=H("svg"),Mt=H("path"),qi=H("polygon"),vE=H("rect");H("details");H("summary");const Fm=M(({date:n})=>{const e=performance.now().toString().replace(/\./g,"_"),t=`${e}-days-plus`,r=CE();let s;o(),Fm.updates(f=>{const m=n;[{date:n}]=f,n!=m&&(l(),i())}),n=n||new Date;function i(){const m=n-new Date;if(m<0){h({days:0,hours:0,minutes:0,seconds:0}),c();return}let w=Math.floor(m/(1e3*60*60*24));const I=Math.floor(m%(1e3*60*60*24)/(1e3*60*60)),v=Math.floor(m%(1e3*60*60)/(1e3*60)),D=Math.floor(m%(1e3*60)/1e3);h({days:w,hours:I,minutes:v,seconds:D})}function o(){s=setInterval(i,Ft)}function c(){clearInterval(s),s=void 0}M.onDestroy(c);function l(){c(),o()}function u(f,m,w){const I=document.createElement("span");if(I.classList.add("wrap"),I.innerText=m,f.appendChild(I),f.children.length===1)return;function v(){requestAnimationFrame(()=>{I.classList.add("changed"),requestAnimationFrame(()=>{setTimeout(()=>{f.removeChild(I)},200)})})}setTimeout(v,w.speed-1)}const h=me(f=>{const m={...f};let{days:w}=m;const I=document.getElementById(t);I&&(w>99?(m.days=99,I.style.display=""):I.style.display="none",Object.entries(m).forEach(([v,D])=>{const O=AE(D),C=r[v];O[0]!=C[0].value$.value&&(C[0].value$.next(O[0]),u(document.getElementById(`${e}-${v}-0`),O[0],C[0])),O[1]!=C[1].value$.value&&(C[1].value$.next(O[1]),u(document.getElementById(`${e}-${v}-1`),O[1],C[1]))}))});return ve(Vt(`
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
    `),g.class`countdown`(g(g.class`digit-container`(Z.class`digit`(g.class`line`,Z.id`${e}-days-0`,Z.class`placeholder`("0")),Z.class`digit`(g.class`line`,Z.id`${e}-days-1`,Z.class`placeholder`("0")),Z.id`${e}-days-plus`.class`label`.style`display:none`("+")),g.class`label`("Days")),g(g.class`digit-container`(Z.class`digit`(g.class`line`,Z.id`${e}-hours-0`,Z.class`placeholder`("0")),Z.class`digit`(g.class`line`,Z.id`${e}-hours-1`,Z.class`placeholder`("0"))),g.class`label`("Hours")),g(g.class`digit-container`(Z.class`digit`(g.class`line`,Z.id`${e}-minutes-0`,Z.class`placeholder`("0")),Z.class`digit`(g.class`line`,Z.id`${e}-minutes-1`,Z.class`placeholder`("0"))),g.class`label`.contextMenu(l)("Minutes")),g(g.class`digit-container`(Z.class`digit`(g.class`line`,Z.id`${e}-seconds-0`,Z.class`placeholder`("0")),Z.class`digit`(g.class`line`,Z.id`${e}-seconds-1`,Z.class`placeholder`("0"))),g.class`label`.contextMenu(c)("Seconds"))))});function AE(n){const e=n%10;return[Math.floor(n/10),e]}const Ft=1e3;function CE(){return{days:[{speed:Ft*60*60*24*10,value$:new le},{speed:Ft*60*60*24,value$:new le}],hours:[{speed:Ft*60*60*10,value$:new le},{speed:Ft*60*60,value$:new le}],minutes:[{speed:Ft*60*10,value$:new le},{speed:Ft*60,value$:new le}],seconds:[{speed:Ft*10,value$:new le},{speed:Ft,value$:new le}]}}const RE=()=>{};var _h={};/**
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
 */const Um=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},kE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$m={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,h=i>>2,f=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,w=u&63;l||(w=64,o||(m=64)),r.push(t[h],t[f],t[m],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Um(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):kE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const f=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||u==null||f==null)throw new SE;const m=i<<2|c>>4;if(r.push(m),u!==64){const w=c<<4&240|u>>2;if(r.push(w),f!==64){const I=u<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class SE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const PE=function(n){const e=Um(n);return $m.encodeByteArray(e,!0)},To=function(n){return PE(n).replace(/\./g,"")},Bm=function(n){try{return $m.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const VE=()=>xE().__FIREBASE_DEFAULTS__,DE=()=>{if(typeof process>"u"||typeof _h>"u")return;const n=_h.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},NE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Bm(n[1]);return e&&JSON.parse(e)},na=()=>{try{return RE()||VE()||DE()||NE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},jm=n=>{var e,t;return(t=(e=na())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},LE=n=>{const e=jm(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Hm=()=>{var n;return(n=na())==null?void 0:n.config},zm=n=>{var e;return(e=na())==null?void 0:e[`_${n}`]};/**
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
 */class ME{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function rs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function qm(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function OE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[To(JSON.stringify(t)),To(JSON.stringify(o)),""].join(".")}const Ws={};function FE(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ws))Ws[e]?n.emulator.push(e):n.prod.push(e);return n}function UE(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let bh=!1;function Gm(n,e){if(typeof window>"u"||typeof document>"u"||!rs(window.location.host)||Ws[n]===e||Ws[n]||bh)return;Ws[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=FE().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{bh=!0,o()},m}function h(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=UE(r),w=t("text"),I=document.getElementById(w)||document.createElement("span"),v=t("learnmore"),D=document.getElementById(v)||document.createElement("a"),O=t("preprendIcon"),C=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const V=m.element;c(V),h(D,v);const $=u();l(C,O),V.append(C,I,D,$),document.body.appendChild(V)}i?(I.innerText="Preview backend disconnected.",C.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(C.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $E(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function BE(){var e;const n=(e=na())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function HE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function zE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qE(){const n=Je();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function GE(){return!BE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function WE(){try{return typeof indexedDB=="object"}catch{return!1}}function JE(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const KE="FirebaseError";class Qt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=KE,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bi.prototype.create)}}class bi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?QE(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Qt(s,c,r)}}function QE(n,e){return n.replace(YE,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const YE=/\{\$([^}]+)}/g;function XE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function or(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(wh(i)&&wh(o)){if(!or(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function wh(n){return n!==null&&typeof n=="object"}/**
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
 */function wi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ZE(n,e){const t=new eI(n,e);return t.subscribe.bind(t)}class eI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");tI(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=sc),s.error===void 0&&(s.error=sc),s.complete===void 0&&(s.complete=sc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function sc(){}/**
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
 */function Ke(n){return n&&n._delegate?n._delegate:n}class ar{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xn="[DEFAULT]";/**
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
 */class nI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ME;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sI(e))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xn){return this.instances.has(e)}getOptions(e=Xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rI(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xn){return this.component?this.component.multipleInstances?e:Xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rI(n){return n===Xn?void 0:n}function sI(n){return n.instantiationMode==="EAGER"}/**
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
 */class iI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(re||(re={}));const oI={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},aI=re.INFO,cI={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},lI=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=cI[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hl{constructor(e){this.name=e,this._logLevel=aI,this._logHandler=lI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const uI=(n,e)=>e.some(t=>n instanceof t);let Th,Eh;function dI(){return Th||(Th=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hI(){return Eh||(Eh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wm=new WeakMap,zc=new WeakMap,Jm=new WeakMap,ic=new WeakMap,zl=new WeakMap;function fI(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(yn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Wm.set(t,n)}).catch(()=>{}),zl.set(e,n),e}function pI(n){if(zc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});zc.set(n,e)}let qc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return zc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Jm.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function mI(n){qc=n(qc)}function gI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(oc(this),e,...t);return Jm.set(r,e.sort?e.sort():[e]),yn(r)}:hI().includes(n)?function(...e){return n.apply(oc(this),e),yn(Wm.get(this))}:function(...e){return yn(n.apply(oc(this),e))}}function yI(n){return typeof n=="function"?gI(n):(n instanceof IDBTransaction&&pI(n),uI(n,dI())?new Proxy(n,qc):n)}function yn(n){if(n instanceof IDBRequest)return fI(n);if(ic.has(n))return ic.get(n);const e=yI(n);return e!==n&&(ic.set(n,e),zl.set(e,n)),e}const oc=n=>zl.get(n);function _I(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=yn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yn(o.result),l.oldVersion,l.newVersion,yn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const bI=["get","getKey","getAll","getAllKeys","count"],wI=["put","add","delete","clear"],ac=new Map;function Ih(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ac.get(e))return ac.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=wI.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bI.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),s&&l.done]))[0]};return ac.set(e,i),i}mI(n=>({...n,get:(e,t,r)=>Ih(e,t)||n.get(e,t,r),has:(e,t)=>!!Ih(e,t)||n.has(e,t)}));/**
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
 */class TI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(EI(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function EI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gc="@firebase/app",vh="0.14.7";/**
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
 */const qt=new Hl("@firebase/app"),II="@firebase/app-compat",vI="@firebase/analytics-compat",AI="@firebase/analytics",CI="@firebase/app-check-compat",RI="@firebase/app-check",kI="@firebase/auth",SI="@firebase/auth-compat",PI="@firebase/database",xI="@firebase/data-connect",VI="@firebase/database-compat",DI="@firebase/functions",NI="@firebase/functions-compat",LI="@firebase/installations",MI="@firebase/installations-compat",OI="@firebase/messaging",FI="@firebase/messaging-compat",UI="@firebase/performance",$I="@firebase/performance-compat",BI="@firebase/remote-config",jI="@firebase/remote-config-compat",HI="@firebase/storage",zI="@firebase/storage-compat",qI="@firebase/firestore",GI="@firebase/ai",WI="@firebase/firestore-compat",JI="firebase",KI="12.8.0";/**
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
 */const Wc="[DEFAULT]",QI={[Gc]:"fire-core",[II]:"fire-core-compat",[AI]:"fire-analytics",[vI]:"fire-analytics-compat",[RI]:"fire-app-check",[CI]:"fire-app-check-compat",[kI]:"fire-auth",[SI]:"fire-auth-compat",[PI]:"fire-rtdb",[xI]:"fire-data-connect",[VI]:"fire-rtdb-compat",[DI]:"fire-fn",[NI]:"fire-fn-compat",[LI]:"fire-iid",[MI]:"fire-iid-compat",[OI]:"fire-fcm",[FI]:"fire-fcm-compat",[UI]:"fire-perf",[$I]:"fire-perf-compat",[BI]:"fire-rc",[jI]:"fire-rc-compat",[HI]:"fire-gcs",[zI]:"fire-gcs-compat",[qI]:"fire-fst",[WI]:"fire-fst-compat",[GI]:"fire-vertex","fire-js":"fire-js",[JI]:"fire-js-all"};/**
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
 */const Eo=new Map,YI=new Map,Jc=new Map;function Ah(n,e){try{n.container.addComponent(e)}catch(t){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Wr(n){const e=n.name;if(Jc.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;Jc.set(e,n);for(const t of Eo.values())Ah(t,n);for(const t of YI.values())Ah(t,n);return!0}function ql(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ot(n){return n==null?!1:n.settings!==void 0}/**
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
 */const XI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_n=new bi("app","Firebase",XI);/**
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
 */class ZI{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
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
 */const ss=KI;function Km(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Wc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw _n.create("bad-app-name",{appName:String(s)});if(t||(t=Hm()),!t)throw _n.create("no-options");const i=Eo.get(s);if(i){if(or(t,i.options)&&or(r,i.config))return i;throw _n.create("duplicate-app",{appName:s})}const o=new iI(s);for(const l of Jc.values())o.addComponent(l);const c=new ZI(t,r,o);return Eo.set(s,c),c}function Qm(n=Wc){const e=Eo.get(n);if(!e&&n===Wc&&Hm())return Km();if(!e)throw _n.create("no-app",{appName:n});return e}function bn(n,e,t){let r=QI[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(o.join(" "));return}Wr(new ar(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const e1="firebase-heartbeat-database",t1=1,ri="firebase-heartbeat-store";let cc=null;function Ym(){return cc||(cc=_I(e1,t1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ri)}catch(t){console.warn(t)}}}}).catch(n=>{throw _n.create("idb-open",{originalErrorMessage:n.message})})),cc}async function n1(n){try{const t=(await Ym()).transaction(ri),r=await t.objectStore(ri).get(Xm(n));return await t.done,r}catch(e){if(e instanceof Qt)qt.warn(e.message);else{const t=_n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(t.message)}}}async function Ch(n,e){try{const r=(await Ym()).transaction(ri,"readwrite");await r.objectStore(ri).put(e,Xm(n)),await r.done}catch(t){if(t instanceof Qt)qt.warn(t.message);else{const r=_n.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});qt.warn(r.message)}}}function Xm(n){return`${n.name}!${n.options.appId}`}/**
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
 */const r1=1024,s1=30;class i1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new a1(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Rh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>s1){const o=c1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){qt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Rh(),{heartbeatsToSend:r,unsentEntries:s}=o1(this._heartbeatsCache.heartbeats),i=To(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return qt.warn(t),""}}}function Rh(){return new Date().toISOString().substring(0,10)}function o1(n,e=r1){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),kh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),kh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class a1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WE()?JE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await n1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ch(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ch(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function kh(n){return To(JSON.stringify({version:2,heartbeats:n})).length}function c1(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function l1(n){Wr(new ar("platform-logger",e=>new TI(e),"PRIVATE")),Wr(new ar("heartbeat",e=>new i1(e),"PRIVATE")),bn(Gc,vh,n),bn(Gc,vh,"esm2020"),bn("fire-js","")}l1("");var u1="firebase",d1="12.8.0";/**
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
 */bn(u1,d1,"app");function Zm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h1=Zm,eg=new bi("auth","Firebase",Zm());/**
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
 */const Io=new Hl("@firebase/auth");function f1(n,...e){Io.logLevel<=re.WARN&&Io.warn(`Auth (${ss}): ${n}`,...e)}function so(n,...e){Io.logLevel<=re.ERROR&&Io.error(`Auth (${ss}): ${n}`,...e)}/**
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
 */function Dt(n,...e){throw Wl(n,...e)}function yt(n,...e){return Wl(n,...e)}function Gl(n,e,t){const r={...h1(),[e]:t};return new bi("auth","Firebase",r).create(e,{appName:n.name})}function wn(n){return Gl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tg(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Dt(n,"argument-error"),Gl(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return eg.create(n,...e)}function Q(n,e,...t){if(!n)throw Wl(e,...t)}function Bt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw so(e),new Error(e)}function Gt(n,e){n||Bt(e)}/**
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
 */function Kc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function p1(){return Sh()==="http:"||Sh()==="https:"}function Sh(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function m1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(p1()||HE()||"connection"in navigator)?navigator.onLine:!0}function g1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ti{constructor(e,t){this.shortDelay=e,this.longDelay=t,Gt(t>e,"Short delay should be less than long delay!"),this.isMobile=$E()||zE()}get(){return m1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jl(n,e){Gt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ng{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const y1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const _1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],b1=new Ti(3e4,6e4);function Kl(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function is(n,e,t,r,s={}){return rg(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=wi({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:l,...i};return jE()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&rs(n.emulatorConfig.host)&&(u.credentials="include"),ng.fetch()(await sg(n,n.config.apiHost,t,c),u)})}async function rg(n,e,t){n._canInitEmulator=!1;const r={...y1,...e};try{const s=new T1(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Gi(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gi(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Gi(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Gi(n,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Gl(n,h,u);Dt(n,h)}}catch(s){if(s instanceof Qt)throw s;Dt(n,"network-request-failed",{message:String(s)})}}async function w1(n,e,t,r,s={}){const i=await is(n,e,t,r,s);return"mfaPendingCredential"in i&&Dt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function sg(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Jl(n.config,s):`${n.config.apiScheme}://${s}`;return _1.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class T1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(yt(this.auth,"network-request-failed")),b1.get())})}}function Gi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=yt(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function E1(n,e){return is(n,"POST","/v1/accounts:delete",e)}async function vo(n,e){return is(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Js(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function I1(n,e=!1){const t=Ke(n),r=await t.getIdToken(e),s=Ql(r);Q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Js(lc(s.auth_time)),issuedAtTime:Js(lc(s.iat)),expirationTime:Js(lc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function lc(n){return Number(n)*1e3}function Ql(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return so("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bm(t);return s?JSON.parse(s):(so("Failed to decode base64 JWT payload"),null)}catch(s){return so("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ph(n){const e=Ql(n);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function si(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Qt&&v1(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function v1({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class A1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ao(n){var f;const e=n.auth,t=await n.getIdToken(),r=await si(n,vo(e,{idToken:t}));Q(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(f=s.providerUserInfo)!=null&&f.length?ig(s.providerUserInfo):[],o=R1(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Qc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function C1(n){const e=Ke(n);await Ao(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function R1(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ig(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function k1(n,e){const t=await rg(n,{},async()=>{const r=wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await sg(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&rs(n.emulatorConfig.host)&&(l.credentials="include"),ng.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function S1(n,e){return is(n,"POST","/v2/accounts:revokeToken",Kl(n,e))}/**
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
 */class jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ph(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const t=Ph(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await k1(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new jr;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jr,this.toJSON())}_performRefresh(){return Bt("not implemented")}}/**
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
 */function on(n,e){Q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ft{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new A1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await si(this,this.stsTokenManager.getToken(this.auth,e));return Q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return I1(this,e)}reload(){return C1(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ft({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ao(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ot(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await si(this,E1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:w,providerData:I,stsTokenManager:v}=t;Q(f&&v,e,"internal-error");const D=jr.fromJSON(this.name,v);Q(typeof f=="string",e,"internal-error"),on(r,e.name),on(s,e.name),Q(typeof m=="boolean",e,"internal-error"),Q(typeof w=="boolean",e,"internal-error"),on(i,e.name),on(o,e.name),on(c,e.name),on(l,e.name),on(u,e.name),on(h,e.name);const O=new ft({uid:f,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:w,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:D,createdAt:u,lastLoginAt:h});return I&&Array.isArray(I)&&(O.providerData=I.map(C=>({...C}))),l&&(O._redirectEventId=l),O}static async _fromIdTokenResponse(e,t,r=!1){const s=new jr;s.updateFromServerResponse(t);const i=new ft({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ao(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ig(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new jr;c.updateFromIdToken(r);const l=new ft({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Qc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const xh=new Map;function jt(n){Gt(n instanceof Function,"Expected a class definition");let e=xh.get(n);return e?(Gt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,xh.set(n,e),e)}/**
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
 */class og{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}og.type="NONE";const Vh=og;/**
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
 */function io(n,e,t){return`firebase:${n}:${e}:${t}`}class Hr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=io(this.userKey,s.apiKey,i),this.fullPersistenceKey=io("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await vo(this.auth,{idToken:e}).catch(()=>{});return t?ft._fromGetAccountInfoResponse(this.auth,t,e):null}return ft._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Hr(jt(Vh),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||jt(Vh);const o=io(r,e.config.apiKey,e.name);let c=null;for(const u of t)try{const h=await u._get(o);if(h){let f;if(typeof h=="string"){const m=await vo(e,{idToken:h}).catch(()=>{});if(!m)break;f=await ft._fromGetAccountInfoResponse(e,m,h)}else f=ft._fromJSON(e,h);u!==i&&(c=f),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Hr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Hr(i,e,r))}}/**
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
 */function Dh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ug(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ag(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hg(e))return"Blackberry";if(fg(e))return"Webos";if(cg(e))return"Safari";if((e.includes("chrome/")||lg(e))&&!e.includes("edge/"))return"Chrome";if(dg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ag(n=Je()){return/firefox\//i.test(n)}function cg(n=Je()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lg(n=Je()){return/crios\//i.test(n)}function ug(n=Je()){return/iemobile/i.test(n)}function dg(n=Je()){return/android/i.test(n)}function hg(n=Je()){return/blackberry/i.test(n)}function fg(n=Je()){return/webos/i.test(n)}function Yl(n=Je()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function P1(n=Je()){var e;return Yl(n)&&!!((e=window.navigator)!=null&&e.standalone)}function x1(){return qE()&&document.documentMode===10}function pg(n=Je()){return Yl(n)||dg(n)||fg(n)||hg(n)||/windows phone/i.test(n)||ug(n)}/**
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
 */function mg(n,e=[]){let t;switch(n){case"Browser":t=Dh(Je());break;case"Worker":t=`${Dh(Je())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ss}/${r}`}/**
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
 */class V1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function D1(n,e={}){return is(n,"GET","/v2/passwordPolicy",Kl(n,e))}/**
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
 */const N1=6;class L1{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??N1,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class M1{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nh(this),this.idTokenSubscription=new Nh(this),this.beforeStateQueue=new V1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=jt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Hr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await vo(this,{idToken:e}),r=await ft._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ao(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=g1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ot(this.app))return Promise.reject(wn(this));const t=e?Ke(e):null;return t&&Q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ot(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ot(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await D1(this),t=new L1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new bi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await S1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&jt(e)||this._popupRedirectResolver;Q(t,this,"argument-error"),this.redirectPersistenceManager=await Hr.create(this,[jt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&f1(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function os(n){return Ke(n)}class Nh{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZE(t=>this.observer=t)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Xl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function O1(n){Xl=n}function F1(n){return Xl.loadJS(n)}function U1(){return Xl.gapiScript}function $1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function B1(n,e){const t=ql(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(or(i,e??{}))return s;Dt(s,"already-initialized")}return t.initialize({options:e})}function j1(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(jt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function H1(n,e,t){const r=os(n);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=gg(e),{host:o,port:c}=z1(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(or(u,r.config.emulator)&&or(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,rs(o)?(qm(`${i}//${o}${l}`),Gm("Auth",!0)):q1()}function gg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function z1(n){const e=gg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Lh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Lh(o)}}}function Lh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function q1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class yg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Bt("not implemented")}_getIdTokenResponse(e){return Bt("not implemented")}_linkToIdToken(e,t){return Bt("not implemented")}_getReauthenticationResolver(e){return Bt("not implemented")}}/**
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
 */async function zr(n,e){return w1(n,"POST","/v1/accounts:signInWithIdp",Kl(n,e))}/**
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
 */const G1="http://localhost";class cr extends yg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new cr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return zr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,zr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zr(e,t)}buildRequest(){const e={requestUri:G1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wi(t)}return e}}/**
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
 */class ra{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ei extends ra{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class dn extends Ei{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
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
 */class $t extends Ei{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cr._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return $t.credential(t,r)}catch{return null}}}$t.GOOGLE_SIGN_IN_METHOD="google.com";$t.PROVIDER_ID="google.com";/**
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
 */class hn extends Ei{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.GITHUB_SIGN_IN_METHOD="github.com";hn.PROVIDER_ID="github.com";/**
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
 */class fn extends Ei{constructor(){super("twitter.com")}static credential(e,t){return cr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return fn.credential(t,r)}catch{return null}}}fn.TWITTER_SIGN_IN_METHOD="twitter.com";fn.PROVIDER_ID="twitter.com";/**
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
 */class Jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await ft._fromIdTokenResponse(e,r,s),o=Mh(r);return new Jr({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Mh(r);return new Jr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Mh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Co extends Qt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Co.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Co(e,t,r,s)}}function _g(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Co._fromErrorAndOperation(n,i,e,r):i})}async function W1(n,e,t=!1){const r=await si(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Jr._forOperation(n,"link",r)}/**
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
 */async function J1(n,e,t=!1){const{auth:r}=n;if(ot(r.app))return Promise.reject(wn(r));const s="reauthenticate";try{const i=await si(n,_g(r,s,e,n),t);Q(i.idToken,r,"internal-error");const o=Ql(i.idToken);Q(o,r,"internal-error");const{sub:c}=o;return Q(n.uid===c,r,"user-mismatch"),Jr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Dt(r,"user-mismatch"),i}}/**
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
 */async function K1(n,e,t=!1){if(ot(n.app))return Promise.reject(wn(n));const r="signIn",s=await _g(n,r,e),i=await Jr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}/**
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
 */function Q1(n,e){return Ke(n).setPersistence(e)}function Y1(n,e,t,r){return Ke(n).onIdTokenChanged(e,t,r)}function X1(n,e,t){return Ke(n).beforeAuthStateChanged(e,t)}function Z1(n,e,t,r){return Ke(n).onAuthStateChanged(e,t,r)}function ev(n){return Ke(n).signOut()}const Ro="__sak";/**
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
 */class bg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ro,"1"),this.storage.removeItem(Ro),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const tv=1e3,nv=10;class wg extends bg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);x1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,nv):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},tv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}wg.type="LOCAL";const Tg=wg;/**
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
 */class Eg extends bg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Eg.type="SESSION";const Zl=Eg;/**
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
 */function rv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class sa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new sa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(t.origin,i)),l=await rv(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sa.receivers=[];/**
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
 */function eu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class sv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=eu("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function kt(){return window}function iv(n){kt().location.href=n}/**
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
 */function Ig(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function ov(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function av(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function cv(){return Ig()?self:null}/**
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
 */const vg="firebaseLocalStorageDb",lv=1,ko="firebaseLocalStorage",Ag="fbase_key";class Ii{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ia(n,e){return n.transaction([ko],e?"readwrite":"readonly").objectStore(ko)}function uv(){const n=indexedDB.deleteDatabase(vg);return new Ii(n).toPromise()}function Yc(){const n=indexedDB.open(vg,lv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ko,{keyPath:Ag})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ko)?e(r):(r.close(),await uv(),e(await Yc()))})})}async function Oh(n,e,t){const r=ia(n,!0).put({[Ag]:e,value:t});return new Ii(r).toPromise()}async function dv(n,e){const t=ia(n,!1).get(e),r=await new Ii(t).toPromise();return r===void 0?null:r.value}function Fh(n,e){const t=ia(n,!0).delete(e);return new Ii(t).toPromise()}const hv=800,fv=3;class Cg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>fv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ig()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sa._getInstance(cv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await ov(),!this.activeServiceWorker)return;this.sender=new sv(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||av()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yc();return await Oh(e,Ro,"1"),await Fh(e,Ro),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Oh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>dv(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ia(s,!1).getAll();return new Ii(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cg.type="LOCAL";const Rg=Cg;new Ti(3e4,6e4);/**
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
 */function tu(n,e){return e?jt(e):(Q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class nu extends yg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function pv(n){return K1(n.auth,new nu(n),n.bypassAuthState)}function mv(n){const{auth:e,user:t}=n;return Q(t,e,"internal-error"),J1(t,new nu(n),n.bypassAuthState)}async function gv(n){const{auth:e,user:t}=n;return Q(t,e,"internal-error"),W1(t,new nu(n),n.bypassAuthState)}/**
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
 */class kg{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pv;case"linkViaPopup":case"linkViaRedirect":return gv;case"reauthViaPopup":case"reauthViaRedirect":return mv;default:Dt(this.auth,"internal-error")}}resolve(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const yv=new Ti(2e3,1e4);async function _v(n,e,t){if(ot(n.app))return Promise.reject(yt(n,"operation-not-supported-in-this-environment"));const r=os(n);tg(n,e,ra);const s=tu(r,t);return new er(r,"signInViaPopup",e,s).executeNotNull()}class er extends kg{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,er.currentPopupAction&&er.currentPopupAction.cancel(),er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Gt(this.filter.length===1,"Popup operations only handle one event");const e=eu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yv.get())};e()}}er.currentPopupAction=null;/**
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
 */const bv="pendingRedirect",oo=new Map;class wv extends kg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=oo.get(this.auth._key());if(!e){try{const r=await Tv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}oo.set(this.auth._key(),e)}return this.bypassAuthState||oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Tv(n,e){const t=Pg(e),r=Sg(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function Ev(n,e){return Sg(n)._set(Pg(e),"true")}function Iv(n,e){oo.set(n._key(),e)}function Sg(n){return jt(n._redirectPersistence)}function Pg(n){return io(bv,n.config.apiKey,n.name)}/**
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
 */function vv(n,e,t){return Av(n,e,t)}async function Av(n,e,t){if(ot(n.app))return Promise.reject(wn(n));const r=os(n);tg(n,e,ra),await r._initializationPromise;const s=tu(r,t);return await Ev(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function Cv(n,e){return await os(n)._initializationPromise,xg(n,e,!1)}async function xg(n,e,t=!1){if(ot(n.app))return Promise.reject(wn(n));const r=os(n),s=tu(r,e),o=await new wv(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Rv=600*1e3;class kv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Vg(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(yt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uh(e))}saveEventToCache(e){this.cachedEventUids.add(Uh(e)),this.lastProcessedEventTime=Date.now()}}function Uh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Vg({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vg(n);default:return!1}}/**
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
 */async function Pv(n,e={}){return is(n,"GET","/v1/projects",e)}/**
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
 */const xv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vv=/^https?/;async function Dv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Pv(n);for(const t of e)try{if(Nv(t))return}catch{}Dt(n,"unauthorized-domain")}function Nv(n){const e=Kc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Vv.test(t))return!1;if(xv.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Lv=new Ti(3e4,6e4);function $h(){const n=kt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Mv(n){return new Promise((e,t)=>{var s,i,o;function r(){$h(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$h(),t(yt(n,"network-request-failed"))},timeout:Lv.get()})}if((i=(s=kt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=kt().gapi)!=null&&o.load)r();else{const c=$1("iframefcb");return kt()[c]=()=>{gapi.load?r():t(yt(n,"network-request-failed"))},F1(`${U1()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw ao=null,e})}let ao=null;function Ov(n){return ao=ao||Mv(n),ao}/**
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
 */const Fv=new Ti(5e3,15e3),Uv="__/auth/iframe",$v="emulator/auth/iframe",Bv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hv(n){const e=n.config;Q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Jl(e,$v):`https://${n.config.authDomain}/${Uv}`,r={apiKey:e.apiKey,appName:n.name,v:ss},s=jv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${wi(r).slice(1)}`}async function zv(n){const e=await Ov(n),t=kt().gapi;return Q(t,n,"internal-error"),e.open({where:document.body,url:Hv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=yt(n,"network-request-failed"),c=kt().setTimeout(()=>{i(o)},Fv.get());function l(){kt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const qv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gv=500,Wv=600,Jv="_blank",Kv="http://localhost";class Bh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Qv(n,e,t,r=Gv,s=Wv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...qv,width:r.toString(),height:s.toString(),top:i,left:o},u=Je().toLowerCase();t&&(c=lg(u)?Jv:t),ag(u)&&(e=e||Kv,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[w,I])=>`${m}${w}=${I},`,"");if(P1(u)&&c!=="_self")return Yv(e||"",c),new Bh(null);const f=window.open(e||"",c,h);Q(f,n,"popup-blocked");try{f.focus()}catch{}return new Bh(f)}function Yv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Xv="__/auth/handler",Zv="emulator/auth/handler",eA=encodeURIComponent("fac");async function jh(n,e,t,r,s,i){Q(n.config.authDomain,n,"auth-domain-config-required"),Q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ss,eventId:s};if(e instanceof ra){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",XE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Ei){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await n._getAppCheckToken(),u=l?`#${eA}=${encodeURIComponent(l)}`:"";return`${tA(n)}?${wi(c).slice(1)}${u}`}function tA({config:n}){return n.emulator?Jl(n,Zv):`https://${n.authDomain}/${Xv}`}/**
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
 */const uc="webStorageSupport";class nA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zl,this._completeRedirectFn=xg,this._overrideRedirectResult=Iv}async _openPopup(e,t,r,s){var o;Gt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await jh(e,t,r,Kc(),s);return Qv(e,i,eu())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await jh(e,t,r,Kc(),s);return iv(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Gt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await zv(e),r=new kv(e);return t.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(uc,{type:uc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[uc];i!==void 0&&t(!!i),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Dv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return pg()||cg()||Yl()}}const rA=nA;var Hh="@firebase/auth",zh="1.12.0";/**
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
 */class sA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function iA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oA(n){Wr(new ar("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mg(n)},u=new M1(r,s,i,l);return j1(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Wr(new ar("auth-internal",e=>{const t=os(e.getProvider("auth").getImmediate());return(r=>new sA(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(Hh,zh,iA(n)),bn(Hh,zh,"esm2020")}/**
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
 */const aA=300,cA=zm("authIdTokenMaxAge")||aA;let qh=null;const lA=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>cA)return;const s=t==null?void 0:t.token;qh!==s&&(qh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function uA(n=Qm()){const e=ql(n,"auth");if(e.isInitialized())return e.getImmediate();const t=B1(n,{popupRedirectResolver:rA,persistence:[Rg,Tg,Zl]}),r=zm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=lA(i.toString());X1(t,o,()=>o(t.currentUser)),Y1(t,c=>o(c))}}const s=jm("auth");return s&&H1(t,`http://${s}`),t}function dA(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}O1({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=yt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",dA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oA("Browser");var Gh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tn,Dg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function T(){}T.prototype=_.prototype,E.F=_.prototype,E.prototype=new T,E.prototype.constructor=E,E.D=function(R,A,S){for(var b=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)b[ne-2]=arguments[ne];return _.prototype[A].apply(R,b)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,T){T||(T=0);const R=Array(16);if(typeof _=="string")for(var A=0;A<16;++A)R[A]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(A=0;A<16;++A)R[A]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=E.g[0],T=E.g[1],A=E.g[2];let S=E.g[3],b;b=_+(S^T&(A^S))+R[0]+3614090360&4294967295,_=T+(b<<7&4294967295|b>>>25),b=S+(A^_&(T^A))+R[1]+3905402710&4294967295,S=_+(b<<12&4294967295|b>>>20),b=A+(T^S&(_^T))+R[2]+606105819&4294967295,A=S+(b<<17&4294967295|b>>>15),b=T+(_^A&(S^_))+R[3]+3250441966&4294967295,T=A+(b<<22&4294967295|b>>>10),b=_+(S^T&(A^S))+R[4]+4118548399&4294967295,_=T+(b<<7&4294967295|b>>>25),b=S+(A^_&(T^A))+R[5]+1200080426&4294967295,S=_+(b<<12&4294967295|b>>>20),b=A+(T^S&(_^T))+R[6]+2821735955&4294967295,A=S+(b<<17&4294967295|b>>>15),b=T+(_^A&(S^_))+R[7]+4249261313&4294967295,T=A+(b<<22&4294967295|b>>>10),b=_+(S^T&(A^S))+R[8]+1770035416&4294967295,_=T+(b<<7&4294967295|b>>>25),b=S+(A^_&(T^A))+R[9]+2336552879&4294967295,S=_+(b<<12&4294967295|b>>>20),b=A+(T^S&(_^T))+R[10]+4294925233&4294967295,A=S+(b<<17&4294967295|b>>>15),b=T+(_^A&(S^_))+R[11]+2304563134&4294967295,T=A+(b<<22&4294967295|b>>>10),b=_+(S^T&(A^S))+R[12]+1804603682&4294967295,_=T+(b<<7&4294967295|b>>>25),b=S+(A^_&(T^A))+R[13]+4254626195&4294967295,S=_+(b<<12&4294967295|b>>>20),b=A+(T^S&(_^T))+R[14]+2792965006&4294967295,A=S+(b<<17&4294967295|b>>>15),b=T+(_^A&(S^_))+R[15]+1236535329&4294967295,T=A+(b<<22&4294967295|b>>>10),b=_+(A^S&(T^A))+R[1]+4129170786&4294967295,_=T+(b<<5&4294967295|b>>>27),b=S+(T^A&(_^T))+R[6]+3225465664&4294967295,S=_+(b<<9&4294967295|b>>>23),b=A+(_^T&(S^_))+R[11]+643717713&4294967295,A=S+(b<<14&4294967295|b>>>18),b=T+(S^_&(A^S))+R[0]+3921069994&4294967295,T=A+(b<<20&4294967295|b>>>12),b=_+(A^S&(T^A))+R[5]+3593408605&4294967295,_=T+(b<<5&4294967295|b>>>27),b=S+(T^A&(_^T))+R[10]+38016083&4294967295,S=_+(b<<9&4294967295|b>>>23),b=A+(_^T&(S^_))+R[15]+3634488961&4294967295,A=S+(b<<14&4294967295|b>>>18),b=T+(S^_&(A^S))+R[4]+3889429448&4294967295,T=A+(b<<20&4294967295|b>>>12),b=_+(A^S&(T^A))+R[9]+568446438&4294967295,_=T+(b<<5&4294967295|b>>>27),b=S+(T^A&(_^T))+R[14]+3275163606&4294967295,S=_+(b<<9&4294967295|b>>>23),b=A+(_^T&(S^_))+R[3]+4107603335&4294967295,A=S+(b<<14&4294967295|b>>>18),b=T+(S^_&(A^S))+R[8]+1163531501&4294967295,T=A+(b<<20&4294967295|b>>>12),b=_+(A^S&(T^A))+R[13]+2850285829&4294967295,_=T+(b<<5&4294967295|b>>>27),b=S+(T^A&(_^T))+R[2]+4243563512&4294967295,S=_+(b<<9&4294967295|b>>>23),b=A+(_^T&(S^_))+R[7]+1735328473&4294967295,A=S+(b<<14&4294967295|b>>>18),b=T+(S^_&(A^S))+R[12]+2368359562&4294967295,T=A+(b<<20&4294967295|b>>>12),b=_+(T^A^S)+R[5]+4294588738&4294967295,_=T+(b<<4&4294967295|b>>>28),b=S+(_^T^A)+R[8]+2272392833&4294967295,S=_+(b<<11&4294967295|b>>>21),b=A+(S^_^T)+R[11]+1839030562&4294967295,A=S+(b<<16&4294967295|b>>>16),b=T+(A^S^_)+R[14]+4259657740&4294967295,T=A+(b<<23&4294967295|b>>>9),b=_+(T^A^S)+R[1]+2763975236&4294967295,_=T+(b<<4&4294967295|b>>>28),b=S+(_^T^A)+R[4]+1272893353&4294967295,S=_+(b<<11&4294967295|b>>>21),b=A+(S^_^T)+R[7]+4139469664&4294967295,A=S+(b<<16&4294967295|b>>>16),b=T+(A^S^_)+R[10]+3200236656&4294967295,T=A+(b<<23&4294967295|b>>>9),b=_+(T^A^S)+R[13]+681279174&4294967295,_=T+(b<<4&4294967295|b>>>28),b=S+(_^T^A)+R[0]+3936430074&4294967295,S=_+(b<<11&4294967295|b>>>21),b=A+(S^_^T)+R[3]+3572445317&4294967295,A=S+(b<<16&4294967295|b>>>16),b=T+(A^S^_)+R[6]+76029189&4294967295,T=A+(b<<23&4294967295|b>>>9),b=_+(T^A^S)+R[9]+3654602809&4294967295,_=T+(b<<4&4294967295|b>>>28),b=S+(_^T^A)+R[12]+3873151461&4294967295,S=_+(b<<11&4294967295|b>>>21),b=A+(S^_^T)+R[15]+530742520&4294967295,A=S+(b<<16&4294967295|b>>>16),b=T+(A^S^_)+R[2]+3299628645&4294967295,T=A+(b<<23&4294967295|b>>>9),b=_+(A^(T|~S))+R[0]+4096336452&4294967295,_=T+(b<<6&4294967295|b>>>26),b=S+(T^(_|~A))+R[7]+1126891415&4294967295,S=_+(b<<10&4294967295|b>>>22),b=A+(_^(S|~T))+R[14]+2878612391&4294967295,A=S+(b<<15&4294967295|b>>>17),b=T+(S^(A|~_))+R[5]+4237533241&4294967295,T=A+(b<<21&4294967295|b>>>11),b=_+(A^(T|~S))+R[12]+1700485571&4294967295,_=T+(b<<6&4294967295|b>>>26),b=S+(T^(_|~A))+R[3]+2399980690&4294967295,S=_+(b<<10&4294967295|b>>>22),b=A+(_^(S|~T))+R[10]+4293915773&4294967295,A=S+(b<<15&4294967295|b>>>17),b=T+(S^(A|~_))+R[1]+2240044497&4294967295,T=A+(b<<21&4294967295|b>>>11),b=_+(A^(T|~S))+R[8]+1873313359&4294967295,_=T+(b<<6&4294967295|b>>>26),b=S+(T^(_|~A))+R[15]+4264355552&4294967295,S=_+(b<<10&4294967295|b>>>22),b=A+(_^(S|~T))+R[6]+2734768916&4294967295,A=S+(b<<15&4294967295|b>>>17),b=T+(S^(A|~_))+R[13]+1309151649&4294967295,T=A+(b<<21&4294967295|b>>>11),b=_+(A^(T|~S))+R[4]+4149444226&4294967295,_=T+(b<<6&4294967295|b>>>26),b=S+(T^(_|~A))+R[11]+3174756917&4294967295,S=_+(b<<10&4294967295|b>>>22),b=A+(_^(S|~T))+R[2]+718787259&4294967295,A=S+(b<<15&4294967295|b>>>17),b=T+(S^(A|~_))+R[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(A+(b<<21&4294967295|b>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+S&4294967295}r.prototype.v=function(E,_){_===void 0&&(_=E.length);const T=_-this.blockSize,R=this.C;let A=this.h,S=0;for(;S<_;){if(A==0)for(;S<=T;)s(this,E,S),S+=this.blockSize;if(typeof E=="string"){for(;S<_;)if(R[A++]=E.charCodeAt(S++),A==this.blockSize){s(this,R),A=0;break}}else for(;S<_;)if(R[A++]=E[S++],A==this.blockSize){s(this,R),A=0;break}}this.h=A,this.o+=_},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;_=this.o*8;for(var T=E.length-8;T<E.length;++T)E[T]=_&255,_/=256;for(this.v(E),E=Array(16),_=0,T=0;T<4;++T)for(let R=0;R<32;R+=8)E[_++]=this.g[T]>>>R&255;return E};function i(E,_){var T=c;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=_(E)}function o(E,_){this.h=_;const T=[];let R=!0;for(let A=E.length-1;A>=0;A--){const S=E[A]|0;R&&S==_||(T[A]=S,R=!1)}this.g=T}var c={};function l(E){return-128<=E&&E<128?i(E,function(_){return new o([_|0],_<0?-1:0)}):new o([E|0],E<0?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return f;if(E<0)return D(u(-E));const _=[];let T=1;for(let R=0;E>=T;R++)_[R]=E/T|0,T*=4294967296;return new o(_,0)}function h(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return D(h(E.substring(1),_));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=u(Math.pow(_,8));let R=f;for(let S=0;S<E.length;S+=8){var A=Math.min(8,E.length-S);const b=parseInt(E.substring(S,S+A),_);A<8?(A=u(Math.pow(_,A)),R=R.j(A).add(u(b))):(R=R.j(T),R=R.add(u(b)))}return R}var f=l(0),m=l(1),w=l(16777216);n=o.prototype,n.m=function(){if(v(this))return-D(this).m();let E=0,_=1;for(let T=0;T<this.g.length;T++){const R=this.i(T);E+=(R>=0?R:4294967296+R)*_,_*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(I(this))return"0";if(v(this))return"-"+D(this).toString(E);const _=u(Math.pow(E,6));var T=this;let R="";for(;;){const A=$(T,_).g;T=O(T,A.j(_));let S=((T.g.length>0?T.g[0]:T.h)>>>0).toString(E);if(T=A,I(T))return S+R;for(;S.length<6;)S="0"+S;R=S+R}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function I(E){if(E.h!=0)return!1;for(let _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function v(E){return E.h==-1}n.l=function(E){return E=O(this,E),v(E)?-1:I(E)?0:1};function D(E){const _=E.g.length,T=[];for(let R=0;R<_;R++)T[R]=~E.g[R];return new o(T,~E.h).add(m)}n.abs=function(){return v(this)?D(this):this},n.add=function(E){const _=Math.max(this.g.length,E.g.length),T=[];let R=0;for(let A=0;A<=_;A++){let S=R+(this.i(A)&65535)+(E.i(A)&65535),b=(S>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);R=b>>>16,S&=65535,b&=65535,T[A]=b<<16|S}return new o(T,T[T.length-1]&-2147483648?-1:0)};function O(E,_){return E.add(D(_))}n.j=function(E){if(I(this)||I(E))return f;if(v(this))return v(E)?D(this).j(D(E)):D(D(this).j(E));if(v(E))return D(this.j(D(E)));if(this.l(w)<0&&E.l(w)<0)return u(this.m()*E.m());const _=this.g.length+E.g.length,T=[];for(var R=0;R<2*_;R++)T[R]=0;for(R=0;R<this.g.length;R++)for(let A=0;A<E.g.length;A++){const S=this.i(R)>>>16,b=this.i(R)&65535,ne=E.i(A)>>>16,$e=E.i(A)&65535;T[2*R+2*A]+=b*$e,C(T,2*R+2*A),T[2*R+2*A+1]+=S*$e,C(T,2*R+2*A+1),T[2*R+2*A+1]+=b*ne,C(T,2*R+2*A+1),T[2*R+2*A+2]+=S*ne,C(T,2*R+2*A+2)}for(E=0;E<_;E++)T[E]=T[2*E+1]<<16|T[2*E];for(E=_;E<2*_;E++)T[E]=0;return new o(T,0)};function C(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function V(E,_){this.g=E,this.h=_}function $(E,_){if(I(_))throw Error("division by zero");if(I(E))return new V(f,f);if(v(E))return _=$(D(E),_),new V(D(_.g),D(_.h));if(v(_))return _=$(E,D(_)),new V(D(_.g),_.h);if(E.g.length>30){if(v(E)||v(_))throw Error("slowDivide_ only works with positive integers.");for(var T=m,R=_;R.l(E)<=0;)T=P(T),R=P(R);var A=F(T,1),S=F(R,1);for(R=F(R,2),T=F(T,2);!I(R);){var b=S.add(R);b.l(E)<=0&&(A=A.add(T),S=b),R=F(R,1),T=F(T,1)}return _=O(E,A.j(_)),new V(A,_)}for(A=f;E.l(_)>=0;){for(T=Math.max(1,Math.floor(E.m()/_.m())),R=Math.ceil(Math.log(T)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),S=u(T),b=S.j(_);v(b)||b.l(E)>0;)T-=R,S=u(T),b=S.j(_);I(S)&&(S=m),A=A.add(S),E=O(E,b)}return new V(A,E)}n.B=function(E){return $(this,E).h},n.and=function(E){const _=Math.max(this.g.length,E.g.length),T=[];for(let R=0;R<_;R++)T[R]=this.i(R)&E.i(R);return new o(T,this.h&E.h)},n.or=function(E){const _=Math.max(this.g.length,E.g.length),T=[];for(let R=0;R<_;R++)T[R]=this.i(R)|E.i(R);return new o(T,this.h|E.h)},n.xor=function(E){const _=Math.max(this.g.length,E.g.length),T=[];for(let R=0;R<_;R++)T[R]=this.i(R)^E.i(R);return new o(T,this.h^E.h)};function P(E){const _=E.g.length+1,T=[];for(let R=0;R<_;R++)T[R]=E.i(R)<<1|E.i(R-1)>>>31;return new o(T,E.h)}function F(E,_){const T=_>>5;_%=32;const R=E.g.length-T,A=[];for(let S=0;S<R;S++)A[S]=_>0?E.i(S+T)>>>_|E.i(S+T+1)<<32-_:E.i(S+T);return new o(A,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Dg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Tn=o}).apply(typeof Gh<"u"?Gh:typeof self<"u"?self:typeof window<"u"?window:{});var Wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ng,js,Lg,co,Xc,Mg,Og,Fg;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wi=="object"&&Wi];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function s(a,d){if(d)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var k=a[y];if(!(k in p))break e;p=p[k]}a=a[a.length-1],y=p[a],d=d(y),d!=y&&d!=null&&e(p,a,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(d){var p=[],y;for(y in d)Object.prototype.hasOwnProperty.call(d,y)&&p.push([y,d[y]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function l(a,d,p){return a.call.apply(a.bind,arguments)}function u(a,d,p){return u=l,u.apply(null,arguments)}function h(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function f(a,d){function p(){}p.prototype=d.prototype,a.Z=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(y,k,x){for(var U=Array(arguments.length-2),te=2;te<arguments.length;te++)U[te-2]=arguments[te];return d.prototype[k].apply(y,U)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const d=a.length;if(d>0){const p=Array(d);for(let y=0;y<d;y++)p[y]=a[y];return p}return[]}function I(a,d){for(let y=1;y<arguments.length;y++){const k=arguments[y];var p=typeof k;if(p=p!="object"?p:k?Array.isArray(k)?"array":p:"null",p=="array"||p=="object"&&typeof k.length=="number"){p=a.length||0;const x=k.length||0;a.length=p+x;for(let U=0;U<x;U++)a[p+U]=k[U]}else a.push(k)}}class v{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function D(a){o.setTimeout(()=>{throw a},0)}function O(){var a=E;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class C{constructor(){this.h=this.g=null}add(d,p){const y=V.get();y.set(d,p),this.h?this.h.next=y:this.g=y,this.h=y}}var V=new v(()=>new $,a=>a.reset());class ${constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let P,F=!1,E=new C,_=()=>{const a=Promise.resolve(void 0);P=()=>{a.then(T)}};function T(){for(var a;a=O();){try{a.h.call(a.g)}catch(p){D(p)}var d=V;d.j(a),d.h<100&&(d.h++,a.next=d.g,d.g=a)}F=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,d),o.removeEventListener("test",p,d)}catch{}return a})();function b(a){return/^[\s\xa0]*$/.test(a)}function ne(a,d){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,d)}f(ne,A),ne.prototype.init=function(a,d){const p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget,d||(p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement)),this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ne.Z.h.call(this)},ne.prototype.h=function(){ne.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $e="closure_listenable_"+(Math.random()*1e6|0),f0=0;function p0(a,d,p,y,k){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!y,this.ha=k,this.key=++f0,this.da=this.fa=!1}function Pi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function xi(a,d,p){for(const y in a)d.call(p,a[y],y,a)}function m0(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function nd(a){const d={};for(const p in a)d[p]=a[p];return d}const rd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sd(a,d){let p,y;for(let k=1;k<arguments.length;k++){y=arguments[k];for(p in y)a[p]=y[p];for(let x=0;x<rd.length;x++)p=rd[x],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function Vi(a){this.src=a,this.g={},this.h=0}Vi.prototype.add=function(a,d,p,y,k){const x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);const U=Va(a,d,y,k);return U>-1?(d=a[U],p||(d.fa=!1)):(d=new p0(d,this.src,x,!!y,k),d.fa=p,a.push(d)),d};function xa(a,d){const p=d.type;if(p in a.g){var y=a.g[p],k=Array.prototype.indexOf.call(y,d,void 0),x;(x=k>=0)&&Array.prototype.splice.call(y,k,1),x&&(Pi(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Va(a,d,p,y){for(let k=0;k<a.length;++k){const x=a[k];if(!x.da&&x.listener==d&&x.capture==!!p&&x.ha==y)return k}return-1}var Da="closure_lm_"+(Math.random()*1e6|0),Na={};function id(a,d,p,y,k){if(Array.isArray(d)){for(let x=0;x<d.length;x++)id(a,d[x],p,y,k);return null}return p=cd(p),a&&a[$e]?a.J(d,p,c(y)?!!y.capture:!1,k):g0(a,d,p,!1,y,k)}function g0(a,d,p,y,k,x){if(!d)throw Error("Invalid event type");const U=c(k)?!!k.capture:!!k;let te=Ma(a);if(te||(a[Da]=te=new Vi(a)),p=te.add(d,p,y,U,x),p.proxy)return p;if(y=y0(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)S||(k=U),k===void 0&&(k=!1),a.addEventListener(d.toString(),y,k);else if(a.attachEvent)a.attachEvent(ad(d.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function y0(){function a(p){return d.call(a.src,a.listener,p)}const d=_0;return a}function od(a,d,p,y,k){if(Array.isArray(d))for(var x=0;x<d.length;x++)od(a,d[x],p,y,k);else y=c(y)?!!y.capture:!!y,p=cd(p),a&&a[$e]?(a=a.i,x=String(d).toString(),x in a.g&&(d=a.g[x],p=Va(d,p,y,k),p>-1&&(Pi(d[p]),Array.prototype.splice.call(d,p,1),d.length==0&&(delete a.g[x],a.h--)))):a&&(a=Ma(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Va(d,p,y,k)),(p=a>-1?d[a]:null)&&La(p))}function La(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[$e])xa(d.i,a);else{var p=a.type,y=a.proxy;d.removeEventListener?d.removeEventListener(p,y,a.capture):d.detachEvent?d.detachEvent(ad(p),y):d.addListener&&d.removeListener&&d.removeListener(y),(p=Ma(d))?(xa(p,a),p.h==0&&(p.src=null,d[Da]=null)):Pi(a)}}}function ad(a){return a in Na?Na[a]:Na[a]="on"+a}function _0(a,d){if(a.da)a=!0;else{d=new ne(d,this);const p=a.listener,y=a.ha||a.src;a.fa&&La(a),a=p.call(y,d)}return a}function Ma(a){return a=a[Da],a instanceof Vi?a:null}var Oa="__closure_events_fn_"+(Math.random()*1e9>>>0);function cd(a){return typeof a=="function"?a:(a[Oa]||(a[Oa]=function(d){return a.handleEvent(d)}),a[Oa])}function Be(){R.call(this),this.i=new Vi(this),this.M=this,this.G=null}f(Be,R),Be.prototype[$e]=!0,Be.prototype.removeEventListener=function(a,d,p,y){od(this,a,d,p,y)};function Ye(a,d){var p,y=a.G;if(y)for(p=[];y;y=y.G)p.push(y);if(a=a.M,y=d.type||d,typeof d=="string")d=new A(d,a);else if(d instanceof A)d.target=d.target||a;else{var k=d;d=new A(y,a),sd(d,k)}k=!0;let x,U;if(p)for(U=p.length-1;U>=0;U--)x=d.g=p[U],k=Di(x,y,!0,d)&&k;if(x=d.g=a,k=Di(x,y,!0,d)&&k,k=Di(x,y,!1,d)&&k,p)for(U=0;U<p.length;U++)x=d.g=p[U],k=Di(x,y,!1,d)&&k}Be.prototype.N=function(){if(Be.Z.N.call(this),this.i){var a=this.i;for(const d in a.g){const p=a.g[d];for(let y=0;y<p.length;y++)Pi(p[y]);delete a.g[d],a.h--}}this.G=null},Be.prototype.J=function(a,d,p,y){return this.i.add(String(a),d,!1,p,y)},Be.prototype.K=function(a,d,p,y){return this.i.add(String(a),d,!0,p,y)};function Di(a,d,p,y){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();let k=!0;for(let x=0;x<d.length;++x){const U=d[x];if(U&&!U.da&&U.capture==p){const te=U.listener,Ve=U.ha||U.src;U.fa&&xa(a.i,U),k=te.call(Ve,y)!==!1&&k}}return k&&!y.defaultPrevented}function b0(a,d){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(a,d||0)}function ld(a){a.g=b0(()=>{a.g=null,a.i&&(a.i=!1,ld(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class w0 extends R{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ld(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _s(a){R.call(this),this.h=a,this.g={}}f(_s,R);var ud=[];function dd(a){xi(a.g,function(d,p){this.g.hasOwnProperty(p)&&La(d)},a),a.g={}}_s.prototype.N=function(){_s.Z.N.call(this),dd(this)},_s.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fa=o.JSON.stringify,T0=o.JSON.parse,E0=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function hd(){}function fd(){}var bs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ua(){A.call(this,"d")}f(Ua,A);function $a(){A.call(this,"c")}f($a,A);var xn={},pd=null;function Ni(){return pd=pd||new Be}xn.Ia="serverreachability";function md(a){A.call(this,xn.Ia,a)}f(md,A);function ws(a){const d=Ni();Ye(d,new md(d))}xn.STAT_EVENT="statevent";function gd(a,d){A.call(this,xn.STAT_EVENT,a),this.stat=d}f(gd,A);function Xe(a){const d=Ni();Ye(d,new gd(d,a))}xn.Ja="timingevent";function yd(a,d){A.call(this,xn.Ja,a),this.size=d}f(yd,A);function Ts(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},d)}function Es(){this.g=!0}Es.prototype.ua=function(){this.g=!1};function I0(a,d,p,y,k,x){a.info(function(){if(a.g)if(x){var U="",te=x.split("&");for(let ge=0;ge<te.length;ge++){var Ve=te[ge].split("=");if(Ve.length>1){const Ne=Ve[0];Ve=Ve[1];const Ct=Ne.split("_");U=Ct.length>=2&&Ct[1]=="type"?U+(Ne+"="+Ve+"&"):U+(Ne+"=redacted&")}}}else U=null;else U=x;return"XMLHTTP REQ ("+y+") [attempt "+k+"]: "+d+`
`+p+`
`+U})}function v0(a,d,p,y,k,x,U){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+k+"]: "+d+`
`+p+`
`+x+" "+U})}function wr(a,d,p,y){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+C0(a,p)+(y?" "+y:"")})}function A0(a,d){a.info(function(){return"TIMEOUT: "+d})}Es.prototype.info=function(){};function C0(a,d){if(!a.g)return d;if(!d)return null;try{const x=JSON.parse(d);if(x){for(a=0;a<x.length;a++)if(Array.isArray(x[a])){var p=x[a];if(!(p.length<2)){var y=p[1];if(Array.isArray(y)&&!(y.length<1)){var k=y[0];if(k!="noop"&&k!="stop"&&k!="close")for(let U=1;U<y.length;U++)y[U]=""}}}}return Fa(x)}catch{return d}}var Li={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},_d={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},bd;function Ba(){}f(Ba,hd),Ba.prototype.g=function(){return new XMLHttpRequest},bd=new Ba;function Is(a){return encodeURIComponent(String(a))}function R0(a){var d=1;a=a.split(":");const p=[];for(;d>0&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function Zt(a,d,p,y){this.j=a,this.i=d,this.l=p,this.S=y||1,this.V=new _s(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new wd}function wd(){this.i=null,this.g="",this.h=!1}var Td={},ja={};function Ha(a,d,p){a.M=1,a.A=Oi(At(d)),a.u=p,a.R=!0,Ed(a,null)}function Ed(a,d){a.F=Date.now(),Mi(a),a.B=At(a.A);var p=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),Ld(p.i,"t",y),a.C=0,p=a.j.L,a.h=new wd,a.g=Zd(a.j,p?d:null,!a.u),a.P>0&&(a.O=new w0(u(a.Y,a,a.g),a.P)),d=a.V,p=a.g,y=a.ba;var k="readystatechange";Array.isArray(k)||(k&&(ud[0]=k.toString()),k=ud);for(let x=0;x<k.length;x++){const U=id(p,k[x],y||d.handleEvent,!1,d.h||d);if(!U)break;d.g[U.key]=U}d=a.J?nd(a.J):{},a.u?(a.v||(a.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,d)):(a.v="GET",a.g.ea(a.B,a.v,null,d)),ws(),I0(a.i,a.v,a.B,a.l,a.S,a.u)}Zt.prototype.ba=function(a){a=a.target;const d=this.O;d&&nn(a)==3?d.j():this.Y(a)},Zt.prototype.Y=function(a){try{if(a==this.g)e:{const te=nn(this.g),Ve=this.g.ya(),ge=this.g.ca();if(!(te<3)&&(te!=3||this.g&&(this.h.h||this.g.la()||jd(this.g)))){this.K||te!=4||Ve==7||(Ve==8||ge<=0?ws(3):ws(2)),za(this);var d=this.g.ca();this.X=d;var p=k0(this);if(this.o=d==200,v0(this.i,this.v,this.B,this.l,this.S,te,d),this.o){if(this.U&&!this.L){t:{if(this.g){var y,k=this.g;if((y=k.g?k.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(y)){var x=y;break t}}x=null}if(a=x)wr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,qa(this,a);else{this.o=!1,this.m=3,Xe(12),Vn(this),vs(this);break e}}if(this.R){a=!0;let Ne;for(;!this.K&&this.C<p.length;)if(Ne=S0(this,p),Ne==ja){te==4&&(this.m=4,Xe(14),a=!1),wr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ne==Td){this.m=4,Xe(15),wr(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else wr(this.i,this.l,Ne,null),qa(this,Ne);if(Id(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||p.length!=0||this.h.h||(this.m=1,Xe(16),a=!1),this.o=this.o&&a,!a)wr(this.i,this.l,p,"[Invalid Chunked Response]"),Vn(this),vs(this);else if(p.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Za(U),U.P=!0,Xe(11))}}else wr(this.i,this.l,p,null),qa(this,p);te==4&&Vn(this),this.o&&!this.K&&(te==4?Kd(this.j,this):(this.o=!1,Mi(this)))}else H0(this.g),d==400&&p.indexOf("Unknown SID")>0?(this.m=3,Xe(12)):(this.m=0,Xe(13)),Vn(this),vs(this)}}}catch{}finally{}};function k0(a){if(!Id(a))return a.g.la();const d=jd(a.g);if(d==="")return"";let p="";const y=d.length,k=nn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Vn(a),vs(a),"";a.h.i=new o.TextDecoder}for(let x=0;x<y;x++)a.h.h=!0,p+=a.h.i.decode(d[x],{stream:!(k&&x==y-1)});return d.length=0,a.h.g+=p,a.C=0,a.h.g}function Id(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function S0(a,d){var p=a.C,y=d.indexOf(`
`,p);return y==-1?ja:(p=Number(d.substring(p,y)),isNaN(p)?Td:(y+=1,y+p>d.length?ja:(d=d.slice(y,y+p),a.C=y+p,d)))}Zt.prototype.cancel=function(){this.K=!0,Vn(this)};function Mi(a){a.T=Date.now()+a.H,vd(a,a.H)}function vd(a,d){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ts(u(a.aa,a),d)}function za(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Zt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(A0(this.i,this.B),this.M!=2&&(ws(),Xe(17)),Vn(this),this.m=2,vs(this)):vd(this,this.T-a)};function vs(a){a.j.I==0||a.K||Kd(a.j,a)}function Vn(a){za(a);var d=a.O;d&&typeof d.dispose=="function"&&d.dispose(),a.O=null,dd(a.V),a.g&&(d=a.g,a.g=null,d.abort(),d.dispose())}function qa(a,d){try{var p=a.j;if(p.I!=0&&(p.g==a||Ga(p.h,a))){if(!a.L&&Ga(p.h,a)&&p.I==3){try{var y=p.Ba.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var k=y;if(k[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)ji(p),$i(p);else break e;Xa(p),Xe(18)}}else p.xa=k[1],0<p.xa-p.K&&k[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Ts(u(p.Va,p),6e3));Rd(p.h)<=1&&p.ta&&(p.ta=void 0)}else Nn(p,11)}else if((a.L||p.g==a)&&ji(p),!b(d))for(k=p.Ba.g.parse(d),d=0;d<k.length;d++){let ge=k[d];const Ne=ge[0];if(!(Ne<=p.K))if(p.K=Ne,ge=ge[1],p.I==2)if(ge[0]=="c"){p.M=ge[1],p.ba=ge[2];const Ct=ge[3];Ct!=null&&(p.ka=Ct,p.j.info("VER="+p.ka));const Ln=ge[4];Ln!=null&&(p.za=Ln,p.j.info("SVER="+p.za));const rn=ge[5];rn!=null&&typeof rn=="number"&&rn>0&&(y=1.5*rn,p.O=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const sn=a.g;if(sn){const zi=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zi){var x=y.h;x.g||zi.indexOf("spdy")==-1&&zi.indexOf("quic")==-1&&zi.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Wa(x,x.h),x.h=null))}if(y.G){const ec=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;ec&&(y.wa=ec,_e(y.J,y.G,ec))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),y=p;var U=a;if(y.na=Xd(y,y.L?y.ba:null,y.W),U.L){kd(y.h,U);var te=U,Ve=y.O;Ve&&(te.H=Ve),te.D&&(za(te),Mi(te)),y.g=U}else Wd(y);p.i.length>0&&Bi(p)}else ge[0]!="stop"&&ge[0]!="close"||Nn(p,7);else p.I==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?Nn(p,7):Ya(p):ge[0]!="noop"&&p.l&&p.l.qa(ge),p.A=0)}}ws(4)}catch{}}var P0=class{constructor(a,d){this.g=a,this.map=d}};function Ad(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Cd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Rd(a){return a.h?1:a.g?a.g.size:0}function Ga(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Wa(a,d){a.g?a.g.add(d):a.h=d}function kd(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Ad.prototype.cancel=function(){if(this.i=Sd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Sd(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.G);return d}return w(a.i)}var Pd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function x0(a,d){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const y=a[p].indexOf("=");let k,x=null;y>=0?(k=a[p].substring(0,y),x=a[p].substring(y+1)):k=a[p],d(k,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function en(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;a instanceof en?(this.l=a.l,As(this,a.j),this.o=a.o,this.g=a.g,Cs(this,a.u),this.h=a.h,Ja(this,Md(a.i)),this.m=a.m):a&&(d=String(a).match(Pd))?(this.l=!1,As(this,d[1]||"",!0),this.o=Rs(d[2]||""),this.g=Rs(d[3]||"",!0),Cs(this,d[4]),this.h=Rs(d[5]||"",!0),Ja(this,d[6]||"",!0),this.m=Rs(d[7]||"")):(this.l=!1,this.i=new Ss(null,this.l))}en.prototype.toString=function(){const a=[];var d=this.j;d&&a.push(ks(d,xd,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(ks(d,xd,!0),"@"),a.push(Is(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(ks(p,p.charAt(0)=="/"?N0:D0,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",ks(p,M0)),a.join("")},en.prototype.resolve=function(a){const d=At(this);let p=!!a.j;p?As(d,a.j):p=!!a.o,p?d.o=a.o:p=!!a.g,p?d.g=a.g:p=a.u!=null;var y=a.h;if(p)Cs(d,a.u);else if(p=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var k=d.h.lastIndexOf("/");k!=-1&&(y=d.h.slice(0,k+1)+y)}if(k=y,k==".."||k==".")y="";else if(k.indexOf("./")!=-1||k.indexOf("/.")!=-1){y=k.lastIndexOf("/",0)==0,k=k.split("/");const x=[];for(let U=0;U<k.length;){const te=k[U++];te=="."?y&&U==k.length&&x.push(""):te==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),y&&U==k.length&&x.push("")):(x.push(te),y=!0)}y=x.join("/")}else y=k}return p?d.h=y:p=a.i.toString()!=="",p?Ja(d,Md(a.i)):p=!!a.m,p&&(d.m=a.m),d};function At(a){return new en(a)}function As(a,d,p){a.j=p?Rs(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Cs(a,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);a.u=d}else a.u=null}function Ja(a,d,p){d instanceof Ss?(a.i=d,O0(a.i,a.l)):(p||(d=ks(d,L0)),a.i=new Ss(d,a.l))}function _e(a,d,p){a.i.set(d,p)}function Oi(a){return _e(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Rs(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ks(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,V0),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function V0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var xd=/[#\/\?@]/g,D0=/[#\?:]/g,N0=/[#\?]/g,L0=/[#\?@]/g,M0=/#/g;function Ss(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Dn(a){a.g||(a.g=new Map,a.h=0,a.i&&x0(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}n=Ss.prototype,n.add=function(a,d){Dn(this),this.i=null,a=Tr(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function Vd(a,d){Dn(a),d=Tr(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Dd(a,d){return Dn(a),d=Tr(a,d),a.g.has(d)}n.forEach=function(a,d){Dn(this),this.g.forEach(function(p,y){p.forEach(function(k){a.call(d,k,y,this)},this)},this)};function Nd(a,d){Dn(a);let p=[];if(typeof d=="string")Dd(a,d)&&(p=p.concat(a.g.get(Tr(a,d))));else for(a=Array.from(a.g.values()),d=0;d<a.length;d++)p=p.concat(a[d]);return p}n.set=function(a,d){return Dn(this),this.i=null,a=Tr(this,a),Dd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},n.get=function(a,d){return a?(a=Nd(this,a),a.length>0?String(a[0]):d):d};function Ld(a,d,p){Vd(a,d),p.length>0&&(a.i=null,a.g.set(Tr(a,d),w(p)),a.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(let y=0;y<d.length;y++){var p=d[y];const k=Is(p);p=Nd(this,p);for(let x=0;x<p.length;x++){let U=k;p[x]!==""&&(U+="="+Is(p[x])),a.push(U)}}return this.i=a.join("&")};function Md(a){const d=new Ss;return d.i=a.i,a.g&&(d.g=new Map(a.g),d.h=a.h),d}function Tr(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function O0(a,d){d&&!a.j&&(Dn(a),a.i=null,a.g.forEach(function(p,y){const k=y.toLowerCase();y!=k&&(Vd(this,y),Ld(this,k,p))},a)),a.j=d}function F0(a,d){const p=new Es;if(o.Image){const y=new Image;y.onload=h(tn,p,"TestLoadImage: loaded",!0,d,y),y.onerror=h(tn,p,"TestLoadImage: error",!1,d,y),y.onabort=h(tn,p,"TestLoadImage: abort",!1,d,y),y.ontimeout=h(tn,p,"TestLoadImage: timeout",!1,d,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else d(!1)}function U0(a,d){const p=new Es,y=new AbortController,k=setTimeout(()=>{y.abort(),tn(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:y.signal}).then(x=>{clearTimeout(k),x.ok?tn(p,"TestPingServer: ok",!0,d):tn(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(k),tn(p,"TestPingServer: error",!1,d)})}function tn(a,d,p,y,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),y(p)}catch{}}function $0(){this.g=new E0}function Ka(a){this.i=a.Sb||null,this.h=a.ab||!1}f(Ka,hd),Ka.prototype.g=function(){return new Fi(this.i,this.h)};function Fi(a,d){Be.call(this),this.H=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Fi,Be),n=Fi.prototype,n.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=d,this.readyState=1,xs(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(d.body=a),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ps(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,xs(this)),this.g&&(this.readyState=3,xs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Od(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Od(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Ps(this):xs(this),this.readyState==3&&Od(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Ps(this))},n.Na=function(a){this.g&&(this.response=a,Ps(this))},n.ga=function(){this.g&&Ps(this)};function Ps(a){a.readyState=4,a.l=null,a.j=null,a.B=null,xs(a)}n.setRequestHeader=function(a,d){this.A.append(a,d)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function xs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Fi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Fd(a){let d="";return xi(a,function(p,y){d+=y,d+=":",d+=p,d+=`\r
`}),d}function Qa(a,d,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=Fd(p),typeof a=="string"?p!=null&&Is(p):_e(a,d,p))}function Ie(a){Be.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Ie,Be);var B0=/^https?$/i,j0=["POST","PUT"];n=Ie.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,d,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():bd.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(x){Ud(this,x);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var k in y)p.set(k,y[k]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const x of y.keys())p.set(x,y.get(x));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(x=>x.toLowerCase()=="content-type"),k=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(j0,d,void 0)>=0)||y||k||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,U]of p)this.g.setRequestHeader(x,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(x){Ud(this,x)}};function Ud(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.o=5,$d(a),Ui(a)}function $d(a){a.A||(a.A=!0,Ye(a,"complete"),Ye(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ye(this,"complete"),Ye(this,"abort"),Ui(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ui(this,!0)),Ie.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Bd(this):this.Xa())},n.Xa=function(){Bd(this)};function Bd(a){if(a.h&&typeof i<"u"){if(a.v&&nn(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ye(a,"readystatechange"),nn(a)==4){a.h=!1;try{const x=a.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var y;if(y=x===0){let U=String(a.D).match(Pd)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),y=!B0.test(U?U.toLowerCase():"")}p=y}if(p)Ye(a,"complete"),Ye(a,"success");else{a.o=6;try{var k=nn(a)>2?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.ca()+"]",$d(a)}}finally{Ui(a)}}}}function Ui(a,d){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,d||Ye(a,"ready");try{p.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function nn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return nn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),T0(d)}};function jd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function H0(a){const d={};a=(a.g&&nn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(b(a[y]))continue;var p=R0(a[y]);const k=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const x=d[k]||[];d[k]=x,x.push(p)}m0(d,function(y){return y.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vs(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function Hd(a){this.za=0,this.i=[],this.j=new Es,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Vs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Vs("baseRetryDelayMs",5e3,a),this.Za=Vs("retryDelaySeedMs",1e4,a),this.Ta=Vs("forwardChannelMaxRetries",2,a),this.va=Vs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Ad(a&&a.concurrentRequestLimit),this.Ba=new $0,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Hd.prototype,n.ka=8,n.I=1,n.connect=function(a,d,p,y){Xe(0),this.W=a,this.H=d||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.J=Xd(this,null,this.W),Bi(this)};function Ya(a){if(zd(a),a.I==3){var d=a.V++,p=At(a.J);if(_e(p,"SID",a.M),_e(p,"RID",d),_e(p,"TYPE","terminate"),Ds(a,p),d=new Zt(a,a.j,d),d.M=2,d.A=Oi(At(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=d.A,p=!0),p||(d.g=Zd(d.j,null),d.g.ea(d.A)),d.F=Date.now(),Mi(d)}Yd(a)}function $i(a){a.g&&(Za(a),a.g.cancel(),a.g=null)}function zd(a){$i(a),a.v&&(o.clearTimeout(a.v),a.v=null),ji(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Bi(a){if(!Cd(a.h)&&!a.m){a.m=!0;var d=a.Ea;P||_(),F||(P(),F=!0),E.add(d,a),a.D=0}}function z0(a,d){return Rd(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=d.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ts(u(a.Ea,a,d),Qd(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const k=new Zt(this,this.j,a);let x=this.o;if(this.U&&(x?(x=nd(x),sd(x,this.U)):x=this.U),this.u!==null||this.R||(k.J=x,x=null),this.S)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,d>4096){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Gd(this,k,d),p=At(this.J),_e(p,"RID",a),_e(p,"CVER",22),this.G&&_e(p,"X-HTTP-Session-Id",this.G),Ds(this,p),x&&(this.R?d="headers="+Is(Fd(x))+"&"+d:this.u&&Qa(p,this.u,x)),Wa(this.h,k),this.Ra&&_e(p,"TYPE","init"),this.S?(_e(p,"$req",d),_e(p,"SID","null"),k.U=!0,Ha(k,p,null)):Ha(k,p,d),this.I=2}}else this.I==3&&(a?qd(this,a):this.i.length==0||Cd(this.h)||qd(this))};function qd(a,d){var p;d?p=d.l:p=a.V++;const y=At(a.J);_e(y,"SID",a.M),_e(y,"RID",p),_e(y,"AID",a.K),Ds(a,y),a.u&&a.o&&Qa(y,a.u,a.o),p=new Zt(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),d&&(a.i=d.G.concat(a.i)),d=Gd(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Wa(a.h,p),Ha(p,y,d)}function Ds(a,d){a.H&&xi(a.H,function(p,y){_e(d,y,p)}),a.l&&xi({},function(p,y){_e(d,y,p)})}function Gd(a,d,p){p=Math.min(a.i.length,p);const y=a.l?u(a.l.Ka,a.l,a):null;e:{var k=a.i;let te=-1;for(;;){const Ve=["count="+p];te==-1?p>0?(te=k[0].g,Ve.push("ofs="+te)):te=0:Ve.push("ofs="+te);let ge=!0;for(let Ne=0;Ne<p;Ne++){var x=k[Ne].g;const Ct=k[Ne].map;if(x-=te,x<0)te=Math.max(0,k[Ne].g-100),ge=!1;else try{x="req"+x+"_"||"";try{var U=Ct instanceof Map?Ct:Object.entries(Ct);for(const[Ln,rn]of U){let sn=rn;c(rn)&&(sn=Fa(rn)),Ve.push(x+Ln+"="+encodeURIComponent(sn))}}catch(Ln){throw Ve.push(x+"type="+encodeURIComponent("_badmap")),Ln}}catch{y&&y(Ct)}}if(ge){U=Ve.join("&");break e}}U=void 0}return a=a.i.splice(0,p),d.G=a,U}function Wd(a){if(!a.g&&!a.v){a.Y=1;var d=a.Da;P||_(),F||(P(),F=!0),E.add(d,a),a.A=0}}function Xa(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ts(u(a.Da,a),Qd(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Jd(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ts(u(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Xe(10),$i(this),Jd(this))};function Za(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Jd(a){a.g=new Zt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var d=At(a.na);_e(d,"RID","rpc"),_e(d,"SID",a.M),_e(d,"AID",a.K),_e(d,"CI",a.F?"0":"1"),!a.F&&a.ia&&_e(d,"TO",a.ia),_e(d,"TYPE","xmlhttp"),Ds(a,d),a.u&&a.o&&Qa(d,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Oi(At(d)),p.u=null,p.R=!0,Ed(p,a)}n.Va=function(){this.C!=null&&(this.C=null,$i(this),Xa(this),Xe(19))};function ji(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Kd(a,d){var p=null;if(a.g==d){ji(a),Za(a),a.g=null;var y=2}else if(Ga(a.h,d))p=d.G,kd(a.h,d),y=1;else return;if(a.I!=0){if(d.o)if(y==1){p=d.u?d.u.length:0,d=Date.now()-d.F;var k=a.D;y=Ni(),Ye(y,new yd(y,p)),Bi(a)}else Wd(a);else if(k=d.m,k==3||k==0&&d.X>0||!(y==1&&z0(a,d)||y==2&&Xa(a)))switch(p&&p.length>0&&(d=a.h,d.i=d.i.concat(p)),k){case 1:Nn(a,5);break;case 4:Nn(a,10);break;case 3:Nn(a,6);break;default:Nn(a,2)}}}function Qd(a,d){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*d}function Nn(a,d){if(a.j.info("Error code "+d),d==2){var p=u(a.bb,a),y=a.Ua;const k=!y;y=new en(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||As(y,"https"),Oi(y),k?F0(y.toString(),p):U0(y.toString(),p)}else Xe(2);a.I=0,a.l&&a.l.pa(d),Yd(a),zd(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Xe(2)):(this.j.info("Failed to ping google.com"),Xe(1))};function Yd(a){if(a.I=0,a.ja=[],a.l){const d=Sd(a.h);(d.length!=0||a.i.length!=0)&&(I(a.ja,d),I(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function Xd(a,d,p){var y=p instanceof en?At(p):new en(p);if(y.g!="")d&&(y.g=d+"."+y.g),Cs(y,y.u);else{var k=o.location;y=k.protocol,d=d?d+"."+k.hostname:k.hostname,k=+k.port;const x=new en(null);y&&As(x,y),d&&(x.g=d),k&&Cs(x,k),p&&(x.h=p),y=x}return p=a.G,d=a.wa,p&&d&&_e(y,p,d),_e(y,"VER",a.ka),Ds(a,y),y}function Zd(a,d,p){if(d&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Aa&&!a.ma?new Ie(new Ka({ab:p})):new Ie(a.ma),d.Fa(a.L),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function eh(){}n=eh.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Hi(){}Hi.prototype.g=function(a,d){return new rt(a,d)};function rt(a,d){Be.call(this),this.g=new Hd(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(a?a["X-WebChannel-Client-Profile"]=d.sa:a={"X-WebChannel-Client-Profile":d.sa}),this.g.U=a,(a=d&&d.Qb)&&!b(a)&&(this.g.u=a),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!b(d)&&(this.g.G=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Er(this)}f(rt,Be),rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},rt.prototype.close=function(){Ya(this.g)},rt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Fa(a),a=p);d.i.push(new P0(d.Ya++,a)),d.I==3&&Bi(d)},rt.prototype.N=function(){this.g.l=null,delete this.j,Ya(this.g),delete this.g,rt.Z.N.call(this)};function th(a){Ua.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}f(th,Ua);function nh(){$a.call(this),this.status=1}f(nh,$a);function Er(a){this.g=a}f(Er,eh),Er.prototype.ra=function(){Ye(this.g,"a")},Er.prototype.qa=function(a){Ye(this.g,new th(a))},Er.prototype.pa=function(a){Ye(this.g,new nh)},Er.prototype.oa=function(){Ye(this.g,"b")},Hi.prototype.createWebChannel=Hi.prototype.g,rt.prototype.send=rt.prototype.o,rt.prototype.open=rt.prototype.m,rt.prototype.close=rt.prototype.close,Fg=function(){return new Hi},Og=function(){return Ni()},Mg=xn,Xc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Li.NO_ERROR=0,Li.TIMEOUT=8,Li.HTTP_ERROR=6,co=Li,_d.COMPLETE="complete",Lg=_d,fd.EventType=bs,bs.OPEN="a",bs.CLOSE="b",bs.ERROR="c",bs.MESSAGE="d",Be.prototype.listen=Be.prototype.J,js=fd,Ie.prototype.listenOnce=Ie.prototype.K,Ie.prototype.getLastError=Ie.prototype.Ha,Ie.prototype.getLastErrorCode=Ie.prototype.ya,Ie.prototype.getStatus=Ie.prototype.ca,Ie.prototype.getResponseJson=Ie.prototype.La,Ie.prototype.getResponseText=Ie.prototype.la,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Fa,Ng=Ie}).apply(typeof Wi<"u"?Wi:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
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
 */let as="12.8.0";function hA(n){as=n}/**
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
 */const lr=new Hl("@firebase/firestore");function Mr(){return lr.logLevel}function j(n,...e){if(lr.logLevel<=re.DEBUG){const t=e.map(ru);lr.debug(`Firestore (${as}): ${n}`,...t)}}function Wt(n,...e){if(lr.logLevel<=re.ERROR){const t=e.map(ru);lr.error(`Firestore (${as}): ${n}`,...t)}}function Kr(n,...e){if(lr.logLevel<=re.WARN){const t=e.map(ru);lr.warn(`Firestore (${as}): ${n}`,...t)}}function ru(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function J(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Ug(n,r,t)}function Ug(n,e,t){let r=`FIRESTORE (${as}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Wt(r),new Error(r)}function de(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Ug(e,s,r)}function ee(n,e){return n}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Qt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ht{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class $g{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ze.UNAUTHENTICATED)))}shutdown(){}}class pA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class mA{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){de(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Ht;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ht,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ht)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string",31837,{l:r}),new $g(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string",2055,{h:e}),new ze(e)}}class gA{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class yA{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new gA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ze.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _A{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ot(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){de(this.o===void 0,3512);const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Wh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(de(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Wh(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function bA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class su{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=bA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function se(n,e){return n<e?-1:n>e?1:0}function Zc(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return dc(s)===dc(i)?se(s,i):dc(s)?1:-1}return se(n.length,e.length)}const wA=55296,TA=57343;function dc(n){const e=n.charCodeAt(0);return e>=wA&&e<=TA}function Qr(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const Jh="__name__";class Rt{constructor(e,t,r){t===void 0?t=0:t>e.length&&J(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&J(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Rt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Rt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Rt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return se(e.length,t.length)}static compareSegments(e,t){const r=Rt.isNumericId(e),s=Rt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Rt.extractNumericId(e).compare(Rt.extractNumericId(t)):Zc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tn.fromString(e.substring(4,e.length-2))}}class ye extends Rt{construct(e,t,r){return new ye(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ye(t)}static emptyPath(){return new ye([])}}const EA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends Rt{construct(e,t,r){return new Fe(e,t,r)}static isValidIdentifier(e){return EA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Jh}static keyField(){return new Fe([Jh])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new B(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new B(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(t)}static emptyPath(){return new Fe([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(ye.fromString(e))}static fromName(e){return new W(ye.fromString(e).popFirst(5))}static empty(){return new W(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new ye(e.slice()))}}/**
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
 */function Bg(n,e,t){if(!t)throw new B(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function IA(n,e,t,r){if(e===!0&&r===!0)throw new B(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Kh(n){if(!W.isDocumentKey(n))throw new B(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Qh(n){if(W.isDocumentKey(n))throw new B(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function jg(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function oa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":J(12329,{type:typeof n})}function ut(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=oa(n);throw new B(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Pe(n,e){const t={typeString:n};return e&&(t.value=e),t}function vi(n,e){if(!jg(n))throw new B(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new B(N.INVALID_ARGUMENT,t);return!0}/**
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
 */const Yh=-62135596800,Xh=1e6;class be{static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Xh);return new be(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Yh)throw new B(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xh}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:be._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vi(e,be._jsonSchema))return new be(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Yh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}be._jsonSchemaVersion="firestore/timestamp/1.0",be._jsonSchema={type:Pe("string",be._jsonSchemaVersion),seconds:Pe("number"),nanoseconds:Pe("number")};/**
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
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new be(0,0))}static max(){return new X(new be(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ii=-1;function vA(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=X.fromTimestamp(r===1e9?new be(t+1,0):new be(t,r));return new In(s,W.empty(),e)}function AA(n){return new In(n.readTime,n.key,ii)}class In{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new In(X.min(),W.empty(),ii)}static max(){return new In(X.max(),W.empty(),ii)}}function CA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=W.comparator(n.documentKey,e.documentKey),t!==0?t:se(n.largestBatchId,e.largestBatchId))}/**
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
 */const RA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function cs(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==RA)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):L.reject(t)}static resolve(e){return new L(((t,r)=>{t(e)}))}static reject(e){return new L(((t,r)=>{r(e)}))}static waitFor(e){return new L(((t,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&t()}),(l=>r(l)))})),o=!0,i===s&&t()}))}static or(e){let t=L.resolve(!1);for(const r of e)t=t.next((s=>s?L.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new L(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next((h=>{o[u]=h,++c,c===i&&r(o)}),(h=>s(h)))}}))}static doWhile(e,t){return new L(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function SA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ls(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class aa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}aa.ce=-1;/**
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
 */const iu=-1;function ca(n){return n==null}function So(n){return n===0&&1/n==-1/0}function PA(n){return typeof n=="number"&&Number.isInteger(n)&&!So(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Hg="";function xA(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Zh(e)),e=VA(n.get(t),e);return Zh(e)}function VA(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Hg:t+="";break;default:t+=i}}return t}function Zh(n){return n+Hg+""}/**
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
 */function ef(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function pr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function zg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ee{constructor(e,t){this.comparator=e,this.root=t||Oe.EMPTY}insert(e,t){return new Ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ji(this.root,e,this.comparator,!0)}}class Ji{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Oe.RED,this.left=s??Oe.EMPTY,this.right=i??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Oe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Oe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class De{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tf(this.data.getIterator())}getIteratorFrom(e){return new tf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new De(this.comparator);return t.data=e,t}}class tf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class pt{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new pt([])}unionWith(e){let t=new De(Fe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new pt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class qg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ue{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qg("Invalid base64 string: "+i):i}})(e);return new Ue(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Ue(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const DA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vn(n){if(de(!!n,39018),typeof n=="string"){let e=0;const t=DA.exec(n);if(de(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(n.seconds),nanos:Ce(n.nanos)}}function Ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function An(n){return typeof n=="string"?Ue.fromBase64String(n):Ue.fromUint8Array(n)}/**
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
 */const Gg="server_timestamp",Wg="__type__",Jg="__previous_value__",Kg="__local_write_time__";function ou(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Wg])==null?void 0:r.stringValue)===Gg}function la(n){const e=n.mapValue.fields[Jg];return ou(e)?la(e):e}function oi(n){const e=vn(n.mapValue.fields[Kg].timestampValue);return new be(e.seconds,e.nanos)}/**
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
 */class NA{constructor(e,t,r,s,i,o,c,l,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=f}}const Po="(default)";class ai{constructor(e,t){this.projectId=e,this.database=t||Po}static empty(){return new ai("","")}get isDefaultDatabase(){return this.database===Po}isEqual(e){return e instanceof ai&&e.projectId===this.projectId&&e.database===this.database}}function LA(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new B(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ai(n.options.projectId,e)}/**
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
 */const Qg="__type__",MA="__max__",Ki={mapValue:{}},Yg="__vector__",xo="value";function Cn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ou(n)?4:FA(n)?9007199254740991:OA(n)?10:11:J(28295,{value:n})}function Nt(n,e){if(n===e)return!0;const t=Cn(n);if(t!==Cn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return oi(n).isEqual(oi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=vn(s.timestampValue),c=vn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return An(s.bytesValue).isEqual(An(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ce(s.geoPointValue.latitude)===Ce(i.geoPointValue.latitude)&&Ce(s.geoPointValue.longitude)===Ce(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ce(s.integerValue)===Ce(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ce(s.doubleValue),c=Ce(i.doubleValue);return o===c?So(o)===So(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return Qr(n.arrayValue.values||[],e.arrayValue.values||[],Nt);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(ef(o)!==ef(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Nt(o[l],c[l])))return!1;return!0})(n,e);default:return J(52216,{left:n})}}function ci(n,e){return(n.values||[]).find((t=>Nt(t,e)))!==void 0}function Yr(n,e){if(n===e)return 0;const t=Cn(n),r=Cn(e);if(t!==r)return se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return se(n.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=Ce(i.integerValue||i.doubleValue),l=Ce(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return nf(n.timestampValue,e.timestampValue);case 4:return nf(oi(n),oi(e));case 5:return Zc(n.stringValue,e.stringValue);case 6:return(function(i,o){const c=An(i),l=An(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const h=se(c[u],l[u]);if(h!==0)return h}return se(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=se(Ce(i.latitude),Ce(o.latitude));return c!==0?c:se(Ce(i.longitude),Ce(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return rf(n.arrayValue,e.arrayValue);case 10:return(function(i,o){var m,w,I,v;const c=i.fields||{},l=o.fields||{},u=(m=c[xo])==null?void 0:m.arrayValue,h=(w=l[xo])==null?void 0:w.arrayValue,f=se(((I=u==null?void 0:u.values)==null?void 0:I.length)||0,((v=h==null?void 0:h.values)==null?void 0:v.length)||0);return f!==0?f:rf(u,h)})(n.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Ki.mapValue&&o===Ki.mapValue)return 0;if(i===Ki.mapValue)return 1;if(o===Ki.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const m=Zc(l[f],h[f]);if(m!==0)return m;const w=Yr(c[l[f]],u[h[f]]);if(w!==0)return w}return se(l.length,h.length)})(n.mapValue,e.mapValue);default:throw J(23264,{he:t})}}function nf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return se(n,e);const t=vn(n),r=vn(e),s=se(t.seconds,r.seconds);return s!==0?s:se(t.nanos,r.nanos)}function rf(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Yr(t[s],r[s]);if(i)return i}return se(t.length,r.length)}function Xr(n){return el(n)}function el(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=vn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return An(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return W.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=el(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${el(t.fields[o])}`;return s+"}"})(n.mapValue):J(61005,{value:n})}function lo(n){switch(Cn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=la(n);return e?16+lo(e):16;case 5:return 2*n.stringValue.length;case 6:return An(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+lo(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return pr(r.fields,((i,o)=>{s+=i.length+lo(o)})),s})(n.mapValue);default:throw J(13486,{value:n})}}function sf(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function tl(n){return!!n&&"integerValue"in n}function au(n){return!!n&&"arrayValue"in n}function of(n){return!!n&&"nullValue"in n}function af(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function uo(n){return!!n&&"mapValue"in n}function OA(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Qg])==null?void 0:r.stringValue)===Yg}function Ks(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return pr(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Ks(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ks(n.arrayValue.values[t]);return e}return{...n}}function FA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===MA}/**
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
 */class at{constructor(e){this.value=e}static empty(){return new at({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!uo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(t)}setAll(e){let t=Fe.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=Ks(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());uo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Nt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];uo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){pr(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new at(Ks(this.value))}}function Xg(n){const e=[];return pr(n.fields,((t,r)=>{const s=new Fe([t]);if(uo(r)){const i=Xg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new pt(e)}/**
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
 */class qe{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new qe(e,0,X.min(),X.min(),X.min(),at.empty(),0)}static newFoundDocument(e,t,r,s){return new qe(e,1,t,X.min(),r,s,0)}static newNoDocument(e,t){return new qe(e,2,t,X.min(),X.min(),at.empty(),0)}static newUnknownDocument(e,t){return new qe(e,3,t,X.min(),X.min(),at.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vo{constructor(e,t){this.position=e,this.inclusive=t}}function cf(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),t.key):r=Yr(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function lf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Nt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Do{constructor(e,t="asc"){this.field=e,this.dir=t}}function UA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Zg{}class Se extends Zg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new BA(e,t,r):t==="array-contains"?new zA(e,r):t==="in"?new qA(e,r):t==="not-in"?new GA(e,r):t==="array-contains-any"?new WA(e,r):new Se(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new jA(e,r):new HA(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Yr(t,this.value)):t!==null&&Cn(this.value)===Cn(t)&&this.matchesComparison(Yr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Et extends Zg{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Et(e,t)}matches(e){return ey(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ey(n){return n.op==="and"}function ty(n){return $A(n)&&ey(n)}function $A(n){for(const e of n.filters)if(e instanceof Et)return!1;return!0}function nl(n){if(n instanceof Se)return n.field.canonicalString()+n.op.toString()+Xr(n.value);if(ty(n))return n.filters.map((e=>nl(e))).join(",");{const e=n.filters.map((t=>nl(t))).join(",");return`${n.op}(${e})`}}function ny(n,e){return n instanceof Se?(function(r,s){return s instanceof Se&&r.op===s.op&&r.field.isEqual(s.field)&&Nt(r.value,s.value)})(n,e):n instanceof Et?(function(r,s){return s instanceof Et&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&ny(o,s.filters[c])),!0):!1})(n,e):void J(19439)}function ry(n){return n instanceof Se?(function(t){return`${t.field.canonicalString()} ${t.op} ${Xr(t.value)}`})(n):n instanceof Et?(function(t){return t.op.toString()+" {"+t.getFilters().map(ry).join(" ,")+"}"})(n):"Filter"}class BA extends Se{constructor(e,t,r){super(e,t,r),this.key=W.fromName(r.referenceValue)}matches(e){const t=W.comparator(e.key,this.key);return this.matchesComparison(t)}}class jA extends Se{constructor(e,t){super(e,"in",t),this.keys=sy("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class HA extends Se{constructor(e,t){super(e,"not-in",t),this.keys=sy("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function sy(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>W.fromName(r.referenceValue)))}class zA extends Se{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return au(t)&&ci(t.arrayValue,this.value)}}class qA extends Se{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ci(this.value.arrayValue,t)}}class GA extends Se{constructor(e,t){super(e,"not-in",t)}matches(e){if(ci(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ci(this.value.arrayValue,t)}}class WA extends Se{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!au(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ci(this.value.arrayValue,r)))}}/**
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
 */class JA{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function uf(n,e=null,t=[],r=[],s=null,i=null,o=null){return new JA(n,e,t,r,s,i,o)}function cu(n){const e=ee(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>nl(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),ca(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Xr(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Xr(r))).join(",")),e.Te=t}return e.Te}function lu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!UA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ny(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!lf(n.startAt,e.startAt)&&lf(n.endAt,e.endAt)}function rl(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ai{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function KA(n,e,t,r,s,i,o,c){return new Ai(n,e,t,r,s,i,o,c)}function ua(n){return new Ai(n)}function df(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function QA(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function iy(n){return n.collectionGroup!==null}function Qs(n){const e=ee(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new De(Fe.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Do(i,r))})),t.has(Fe.keyField().canonicalString())||e.Ie.push(new Do(Fe.keyField(),r))}return e.Ie}function St(n){const e=ee(n);return e.Ee||(e.Ee=YA(e,Qs(n))),e.Ee}function YA(n,e){if(n.limitType==="F")return uf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Do(s.field,i)}));const t=n.endAt?new Vo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Vo(n.startAt.position,n.startAt.inclusive):null;return uf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function sl(n,e){const t=n.filters.concat([e]);return new Ai(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function il(n,e,t){return new Ai(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function da(n,e){return lu(St(n),St(e))&&n.limitType===e.limitType}function oy(n){return`${cu(St(n))}|lt:${n.limitType}`}function Or(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>ry(s))).join(", ")}]`),ca(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Xr(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Xr(s))).join(",")),`Target(${r})`})(St(n))}; limitType=${n.limitType})`}function ha(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):W.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Qs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=cf(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,Qs(r),s)||r.endAt&&!(function(o,c,l){const u=cf(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,Qs(r),s))})(n,e)}function XA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ay(n){return(e,t)=>{let r=!1;for(const s of Qs(n)){const i=ZA(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ZA(n,e,t){const r=n.field.isKeyField()?W.comparator(e.key,t.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Yr(l,u):J(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return J(19790,{direction:n.dir})}}/**
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
 */class mr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){pr(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return zg(this.inner)}size(){return this.innerSize}}/**
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
 */const eC=new Ee(W.comparator);function Jt(){return eC}const cy=new Ee(W.comparator);function Hs(...n){let e=cy;for(const t of n)e=e.insert(t.key,t);return e}function ly(n){let e=cy;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function tr(){return Ys()}function uy(){return Ys()}function Ys(){return new mr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const tC=new Ee(W.comparator),nC=new De(W.comparator);function ie(...n){let e=nC;for(const t of n)e=e.add(t);return e}const rC=new De(se);function sC(){return rC}/**
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
 */function uu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:So(e)?"-0":e}}function dy(n){return{integerValue:""+n}}function iC(n,e){return PA(e)?dy(e):uu(n,e)}/**
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
 */class fa{constructor(){this._=void 0}}function oC(n,e,t){return n instanceof li?(function(s,i){const o={fields:{[Wg]:{stringValue:Gg},[Kg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ou(i)&&(i=la(i)),i&&(o.fields[Jg]=i),{mapValue:o}})(t,e):n instanceof ui?fy(n,e):n instanceof di?py(n,e):(function(s,i){const o=hy(s,i),c=hf(o)+hf(s.Ae);return tl(o)&&tl(s.Ae)?dy(c):uu(s.serializer,c)})(n,e)}function aC(n,e,t){return n instanceof ui?fy(n,e):n instanceof di?py(n,e):t}function hy(n,e){return n instanceof No?(function(r){return tl(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class li extends fa{}class ui extends fa{constructor(e){super(),this.elements=e}}function fy(n,e){const t=my(e);for(const r of n.elements)t.some((s=>Nt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class di extends fa{constructor(e){super(),this.elements=e}}function py(n,e){let t=my(e);for(const r of n.elements)t=t.filter((s=>!Nt(s,r)));return{arrayValue:{values:t}}}class No extends fa{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function hf(n){return Ce(n.integerValue||n.doubleValue)}function my(n){return au(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class cC{constructor(e,t){this.field=e,this.transform=t}}function lC(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof ui&&s instanceof ui||r instanceof di&&s instanceof di?Qr(r.elements,s.elements,Nt):r instanceof No&&s instanceof No?Nt(r.Ae,s.Ae):r instanceof li&&s instanceof li})(n.transform,e.transform)}class uC{constructor(e,t){this.version=e,this.transformResults=t}}class _t{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new _t}static exists(e){return new _t(void 0,e)}static updateTime(e){return new _t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ho(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class pa{}function gy(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new du(n.key,_t.none()):new Ci(n.key,n.data,_t.none());{const t=n.data,r=at.empty();let s=new De(Fe.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new gr(n.key,r,new pt(s.toArray()),_t.none())}}function dC(n,e,t){n instanceof Ci?(function(s,i,o){const c=s.value.clone(),l=pf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof gr?(function(s,i,o){if(!ho(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=pf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(yy(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Xs(n,e,t,r){return n instanceof Ci?(function(i,o,c,l){if(!ho(i.precondition,o))return c;const u=i.value.clone(),h=mf(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(n,e,t,r):n instanceof gr?(function(i,o,c,l){if(!ho(i.precondition,o))return c;const u=mf(i.fieldTransforms,l,o),h=o.data;return h.setAll(yy(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((f=>f.field)))})(n,e,t,r):(function(i,o,c){return ho(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function hC(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=hy(r.transform,s||null);i!=null&&(t===null&&(t=at.empty()),t.set(r.field,i))}return t||null}function ff(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Qr(r,s,((i,o)=>lC(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ci extends pa{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class gr extends pa{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yy(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function pf(n,e,t){const r=new Map;de(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,aC(o,c,t[s]))}return r}function mf(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,oC(i,o,e))}return r}class du extends pa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fC extends pa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pC{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&dC(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Xs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Xs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=uy();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=gy(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ie())}isEqual(e){return this.batchId===e.batchId&&Qr(this.mutations,e.mutations,((t,r)=>ff(t,r)))&&Qr(this.baseMutations,e.baseMutations,((t,r)=>ff(t,r)))}}class hu{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){de(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return tC})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new hu(e,t,r,s)}}/**
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
 */class mC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ke,ae;function yC(n){switch(n){case N.OK:return J(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return J(15467,{code:n})}}function _y(n){if(n===void 0)return Wt("GRPC error has no .code"),N.UNKNOWN;switch(n){case ke.OK:return N.OK;case ke.CANCELLED:return N.CANCELLED;case ke.UNKNOWN:return N.UNKNOWN;case ke.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case ke.INTERNAL:return N.INTERNAL;case ke.UNAVAILABLE:return N.UNAVAILABLE;case ke.UNAUTHENTICATED:return N.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case ke.NOT_FOUND:return N.NOT_FOUND;case ke.ALREADY_EXISTS:return N.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return N.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case ke.ABORTED:return N.ABORTED;case ke.OUT_OF_RANGE:return N.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return N.UNIMPLEMENTED;case ke.DATA_LOSS:return N.DATA_LOSS;default:return J(39323,{code:n})}}(ae=ke||(ke={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function _C(){return new TextEncoder}/**
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
 */const bC=new Tn([4294967295,4294967295],0);function gf(n){const e=_C().encode(n),t=new Dg;return t.update(e),new Uint8Array(t.digest())}function yf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Tn([t,r],0),new Tn([s,i],0)]}class fu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new zs(`Invalid padding: ${t}`);if(r<0)throw new zs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new zs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new zs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Tn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Tn.fromNumber(r)));return s.compare(bC)===1&&(s=new Tn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=gf(e),[r,s]=yf(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new fu(i,s,t);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=gf(e),[r,s]=yf(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class zs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ma{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ri.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ma(X.min(),s,new Ee(se),Jt(),ie())}}class Ri{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ri(r,t,ie(),ie(),ie())}}/**
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
 */class fo{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=s}}class by{constructor(e,t){this.targetId=e,this.Ce=t}}class wy{constructor(e,t,r=Ue.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class _f{constructor(){this.ve=0,this.Fe=bf(),this.Me=Ue.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ie(),t=ie(),r=ie();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:J(38017,{changeType:i})}})),new Ri(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=bf()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,de(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class wC{constructor(e){this.Ge=e,this.ze=new Map,this.je=Jt(),this.He=Qi(),this.Je=Qi(),this.Ze=new Ee(se)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:J(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(rl(i))if(r===0){const o=new W(i.path);this.et(t,o,qe.newNoDocument(o,X.min()))}else de(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,u)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=An(r).toUint8Array()}catch(l){if(l instanceof qg)return Kr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new fu(o,s,i)}catch(l){return Kr(l instanceof zs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&rl(c.target)){const l=new W(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,qe.newNoDocument(l,e))}i.Be&&(t.set(o,i.ke()),i.Ke())}}));let r=ie();this.Je.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new ma(e,t,this.Ze,this.je,r);return this.je=Jt(),this.He=Qi(),this.Je=Qi(),this.Ze=new Ee(se),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new _f,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new De(se),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new De(se),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||j("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new _f),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Qi(){return new Ee(W.comparator)}function bf(){return new Ee(W.comparator)}const TC={asc:"ASCENDING",desc:"DESCENDING"},EC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IC={and:"AND",or:"OR"};class vC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ol(n,e){return n.useProto3Json||ca(e)?e:{value:e}}function Lo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ty(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function AC(n,e){return Lo(n,e.toTimestamp())}function Pt(n){return de(!!n,49232),X.fromTimestamp((function(t){const r=vn(t);return new be(r.seconds,r.nanos)})(n))}function pu(n,e){return al(n,e).canonicalString()}function al(n,e){const t=(function(s){return new ye(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Ey(n){const e=ye.fromString(n);return de(Ry(e),10190,{key:e.toString()}),e}function cl(n,e){return pu(n.databaseId,e.path)}function hc(n,e){const t=Ey(e);if(t.get(1)!==n.databaseId.projectId)throw new B(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new W(vy(t))}function Iy(n,e){return pu(n.databaseId,e)}function CC(n){const e=Ey(n);return e.length===4?ye.emptyPath():vy(e)}function ll(n){return new ye(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function vy(n){return de(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function wf(n,e,t){return{name:cl(n,e),fields:t.value.mapValue.fields}}function RC(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:J(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,h){return u.useProto3Json?(de(h===void 0||typeof h=="string",58123),Ue.fromBase64String(h||"")):(de(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Ue.fromUint8Array(h||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const h=u.code===void 0?N.UNKNOWN:_y(u.code);return new B(h,u.message||"")})(o);t=new wy(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=hc(n,r.document.name),i=Pt(r.document.updateTime),o=r.document.createTime?Pt(r.document.createTime):X.min(),c=new at({mapValue:{fields:r.document.fields}}),l=qe.newFoundDocument(s,i,o,c),u=r.targetIds||[],h=r.removedTargetIds||[];t=new fo(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=hc(n,r.document),i=r.readTime?Pt(r.readTime):X.min(),o=qe.newNoDocument(s,i),c=r.removedTargetIds||[];t=new fo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=hc(n,r.document),i=r.removedTargetIds||[];t=new fo([],i,s,null)}else{if(!("filter"in e))return J(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new gC(s,i),c=r.targetId;t=new by(c,o)}}return t}function kC(n,e){let t;if(e instanceof Ci)t={update:wf(n,e.key,e.value)};else if(e instanceof du)t={delete:cl(n,e.key)};else if(e instanceof gr)t={update:wf(n,e.key,e.data),updateMask:OC(e.fieldMask)};else{if(!(e instanceof fC))return J(16599,{dt:e.type});t={verify:cl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof li)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ui)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof di)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof No)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw J(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:AC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J(27497)})(n,e.precondition)),t}function SC(n,e){return n&&n.length>0?(de(e!==void 0,14353),n.map((t=>(function(s,i){let o=s.updateTime?Pt(s.updateTime):Pt(i);return o.isEqual(X.min())&&(o=Pt(i)),new uC(o,s.transformResults||[])})(t,e)))):[]}function PC(n,e){return{documents:[Iy(n,e.path)]}}function xC(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Iy(n,s);const i=(function(u){if(u.length!==0)return Cy(Et.create(u,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((h=>(function(m){return{field:Fr(m.field),direction:NC(m.dir)}})(h)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=ol(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:t,parent:s}}function VC(n){let e=CC(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){de(r===1,65062);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=(function(f){const m=Ay(f);return m instanceof Et&&ty(m)?m.getFilters():[m]})(t.where));let o=[];t.orderBy&&(o=(function(f){return f.map((m=>(function(I){return new Do(Ur(I.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(I.direction))})(m)))})(t.orderBy));let c=null;t.limit&&(c=(function(f){let m;return m=typeof f=="object"?f.value:f,ca(m)?null:m})(t.limit));let l=null;t.startAt&&(l=(function(f){const m=!!f.before,w=f.values||[];return new Vo(w,m)})(t.startAt));let u=null;return t.endAt&&(u=(function(f){const m=!f.before,w=f.values||[];return new Vo(w,m)})(t.endAt)),KA(e,s,o,i,c,"F",l,u)}function DC(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ay(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ur(t.unaryFilter.field);return Se.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ur(t.unaryFilter.field);return Se.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ur(t.unaryFilter.field);return Se.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ur(t.unaryFilter.field);return Se.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Se.create(Ur(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Et.create(t.compositeFilter.filters.map((r=>Ay(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J(1026)}})(t.compositeFilter.op))})(n):J(30097,{filter:n})}function NC(n){return TC[n]}function LC(n){return EC[n]}function MC(n){return IC[n]}function Fr(n){return{fieldPath:n.canonicalString()}}function Ur(n){return Fe.fromServerFormat(n.fieldPath)}function Cy(n){return n instanceof Se?(function(t){if(t.op==="=="){if(af(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NAN"}};if(of(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(af(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NOT_NAN"}};if(of(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fr(t.field),op:LC(t.op),value:t.value}}})(n):n instanceof Et?(function(t){const r=t.getFilters().map((s=>Cy(s)));return r.length===1?r[0]:{compositeFilter:{op:MC(t.op),filters:r}}})(n):J(54877,{filter:n})}function OC(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ry(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function ky(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class mn{constructor(e,t,r,s,i=X.min(),o=X.min(),c=Ue.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new mn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class FC{constructor(e){this.yt=e}}function UC(n){const e=VC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?il(e,e.limit,"L"):e}/**
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
 */class $C{constructor(){this.Sn=new BC}addToCollectionParentIndex(e,t){return this.Sn.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(In.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(In.min())}updateCollectionGroup(e,t,r){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class BC{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new De(ye.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new De(ye.comparator)).toArray()}}/**
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
 */const Tf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Sy=41943040;class tt{static withCacheSize(e){return new tt(e,tt.DEFAULT_COLLECTION_PERCENTILE,tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */tt.DEFAULT_COLLECTION_PERCENTILE=10,tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tt.DEFAULT=new tt(Sy,tt.DEFAULT_COLLECTION_PERCENTILE,tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tt.DISABLED=new tt(-1,0,0);/**
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
 */class Zr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Zr(0)}static ar(){return new Zr(-1)}}/**
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
 */const Ef="LruGarbageCollector",jC=1048576;function If([n,e],[t,r]){const s=se(n,t);return s===0?se(e,r):s}class HC{constructor(e){this.Pr=e,this.buffer=new De(If),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();If(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class zC{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){j(Ef,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ls(t)?j(Ef,"Ignoring IndexedDB error during garbage collection: ",t):await cs(t)}await this.Ar(3e5)}))}}class qC{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return L.resolve(aa.ce);const r=new HC(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Tf)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Tf):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,o,c,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((f=>(f>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s)))).next((f=>(r=f,c=Date.now(),this.removeTargets(e,r,t)))).next((f=>(i=f,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((f=>(u=Date.now(),Mr()<=re.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${f} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f}))))}}function GC(n,e){return new qC(n,e)}/**
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
 */class WC{constructor(){this.changes=new mr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,qe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?L.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class JC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class KC{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Xs(r.mutation,s,pt.empty(),be.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,ie()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=ie()){const s=tr();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let o=Hs();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=tr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,ie())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,r,s){let i=Jt();const o=Ys(),c=(function(){return Ys()})();return t.forEach(((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof gr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Xs(h.mutation,u,h.mutation.getFieldMask(),be.now())):o.set(u.key,pt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,h)=>o.set(u,h))),t.forEach(((u,h)=>c.set(u,new JC(h,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,t){const r=Ys();let s=new Ee(((o,c)=>o-c)),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let h=r.get(l)||pt.empty();h=c.applyToLocalView(u,h),r.set(l,h);const f=(s.get(c.batchId)||ie()).add(l);s=s.insert(c.batchId,f)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,h=l.value,f=uy();h.forEach((m=>{if(!i.has(m)){const w=gy(t.get(m),r.get(m));w!==null&&f.set(m,w),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return L.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return QA(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):iy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):L.resolve(tr());let c=ii,l=i;return o.next((u=>L.forEach(u,((h,f)=>(c<f.largestBatchId&&(c=f.largestBatchId),i.get(h)?L.resolve():this.remoteDocumentCache.getEntry(e,h).next((m=>{l=l.insert(h,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,ie()))).next((h=>({batchId:c,changes:ly(h)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new W(t)).next((r=>{let s=Hs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Hs();return this.indexManager.getCollectionParents(e,i).next((c=>L.forEach(c,(l=>{const u=(function(f,m){return new Ai(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((h=>{h.forEach(((f,m)=>{o=o.insert(f,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,qe.newInvalidDocument(h)))}));let c=Hs();return o.forEach(((l,u)=>{const h=i.get(l);h!==void 0&&Xs(h.mutation,u,pt.empty(),be.now()),ha(t,u)&&(c=c.insert(l,u))})),c}))}}/**
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
 */class QC{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return L.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Pt(s.createTime)}})(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:UC(s.bundledQuery),readTime:Pt(s.readTime)}})(t)),L.resolve()}}/**
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
 */class YC{constructor(){this.overlays=new Ee(W.comparator),this.Lr=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const r=tr();return L.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.bt(e,t,i)})),L.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(r)),L.resolve()}getOverlaysForCollection(e,t,r){const s=tr(),i=t.length+1,o=new W(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ee(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=tr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const c=tr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,h)=>c.set(u,h))),!(c.size()>=s)););return L.resolve(c)}bt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mC(t,r));let i=this.Lr.get(t);i===void 0&&(i=ie(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
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
 */class XC{constructor(){this.sessionToken=Ue.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
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
 */class mu{constructor(){this.kr=new De(Le.Kr),this.qr=new De(Le.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new Le(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Le(e,t))}Qr(e,t){e.forEach((r=>this.removeReference(r,t)))}Gr(e){const t=new W(new ye([])),r=new Le(t,e),s=new Le(t,e+1),i=[];return this.qr.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new W(new ye([])),r=new Le(t,e),s=new Le(t,e+1);let i=ie();return this.qr.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new Le(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return W.comparator(e.key,t.key)||se(e.Hr,t.Hr)}static Ur(e,t){return se(e.Hr,t.Hr)||W.comparator(e.key,t.key)}}/**
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
 */class ZC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new De(Le.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pC(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new Le(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,t){return L.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?iu:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Le(t,0),s=new Le(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],(o=>{const c=this.Zr(o.Hr);i.push(c)})),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new De(se);return t.forEach((s=>{const i=new Le(s,0),o=new Le(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],(c=>{r=r.add(c.Hr)}))})),L.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const o=new Le(new W(i),0);let c=new De(se);return this.Jr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Hr)),!0)}),o),L.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){de(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return L.forEach(t.mutations,(s=>{const i=new Le(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=r}))}nr(e){}containsKey(e,t){const r=new Le(t,0),s=this.Jr.firstAfterOrEqual(r);return L.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class e2{constructor(e){this.ti=e,this.docs=(function(){return new Ee(W.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return L.resolve(r?r.document.mutableCopy():qe.newInvalidDocument(t))}getEntries(e,t){let r=Jt();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():qe.newInvalidDocument(s))})),L.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Jt();const o=t.path,c=new W(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||CA(AA(h),r)<=0||(s.has(h.key)||ha(t,h))&&(i=i.insert(h.key,h.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,t,r,s){J(9500)}ni(e,t){return L.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new t2(this)}getSize(e){return L.resolve(this.size)}}class t2 extends WC{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)})),L.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class n2{constructor(e){this.persistence=e,this.ri=new mr((t=>cu(t)),lu),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.ii=0,this.si=new mu,this.targetCount=0,this.oi=Zr._r()}forEachTarget(e,t){return this.ri.forEach(((r,s)=>t(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),L.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Zr(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.lr(t),L.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),L.waitFor(i).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return L.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),L.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),L.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return L.resolve(r)}containsKey(e,t){return L.resolve(this.si.containsKey(t))}}/**
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
 */class Py{constructor(e,t){this._i={},this.overlays={},this.ai=new aa(0),this.ui=!1,this.ui=!0,this.ci=new XC,this.referenceDelegate=e(this),this.li=new n2(this),this.indexManager=new $C,this.remoteDocumentCache=(function(s){return new e2(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new FC(t),this.Pi=new QC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new YC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new ZC(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){j("MemoryPersistence","Starting transaction:",e);const s=new r2(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((i=>this.referenceDelegate.Ii(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return L.or(Object.values(this._i).map((r=>()=>r.containsKey(e,t))))}}class r2 extends kA{constructor(e){super(),this.currentSequenceNumber=e}}class gu{constructor(e){this.persistence=e,this.Ri=new mu,this.Ai=null}static Vi(e){return new gu(e)}get di(){if(this.Ai)return this.Ai;throw J(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),L.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),L.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.di.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,(r=>{const s=W.fromPath(r);return this.mi(e,s).next((i=>{i||t.removeEntry(s,X.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return L.or([()=>L.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Mo{constructor(e,t){this.persistence=e,this.fi=new mr((r=>xA(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=GC(this,t)}static Vi(e,t){return new Mo(e,t)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}mr(e,t){return L.forEach(this.fi,((r,s)=>this.wr(e,r,s).next((i=>i?L.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(r++,i.removeEntry(o,X.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),L.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=lo(e.data.value)),t}wr(e,t,r){return L.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class yu{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=ie(),s=ie();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new yu(e,t.fromCache,r,s)}}/**
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
 */class s2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class i2{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return GE()?8:SA(Je())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ps(e,t,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new s2;return this.ys(e,t,o).next((c=>{if(i.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>i.result))}ws(e,t,r,s){return r.documentReadCount<this.Vs?(Mr()<=re.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",Or(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(Mr()<=re.DEBUG&&j("QueryEngine","Query:",Or(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Mr()<=re.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",Or(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,St(t))):L.resolve())}gs(e,t){if(df(t))return L.resolve(null);let r=St(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=il(t,null,"F"),r=St(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=ie(...i);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.bs(t,c);return this.Ss(t,u,o,l.readTime)?this.gs(e,il(t,null,"F")):this.Ds(e,u,t,l)}))))})))))}ps(e,t,r,s){return df(t)||s.isEqual(X.min())?L.resolve(null):this.fs.getDocuments(e,r).next((i=>{const o=this.bs(t,i);return this.Ss(t,o,r,s)?L.resolve(null):(Mr()<=re.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Or(t)),this.Ds(e,o,t,vA(s,ii)).next((c=>c)))}))}bs(e,t){let r=new De(ay(e));return t.forEach(((s,i)=>{ha(e,i)&&(r=r.add(i))})),r}Ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return Mr()<=re.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Or(t)),this.fs.getDocumentsMatchingQuery(e,t,In.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const _u="LocalStore",o2=3e8;class a2{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new Ee(se),this.Fs=new mr((i=>cu(i)),lu),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KC(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function c2(n,e,t,r){return new a2(n,e,t,r)}async function xy(n,e){const t=ee(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=ie();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){c.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return t.localDocuments.getDocuments(r,l).next((u=>({Ns:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function l2(n,e){const t=ee(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,h){const f=u.batch,m=f.keys();let w=L.resolve();return m.forEach((I=>{w=w.next((()=>h.getEntry(l,I))).next((v=>{const D=u.docVersions.get(I);de(D!==null,48541),v.version.compareTo(D)<0&&(f.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),h.addEntry(v)))}))})),w.next((()=>c.mutationQueue.removeMutationBatch(l,f)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=ie();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Vy(n){const e=ee(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function u2(n,e){const t=ee(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((h,f)=>{const m=s.get(f);if(!m)return;c.push(t.li.removeMatchingKeys(i,h.removedDocuments,f).next((()=>t.li.addMatchingKeys(i,h.addedDocuments,f))));let w=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?w=w.withResumeToken(Ue.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):h.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(h.resumeToken,r)),s=s.insert(f,w),(function(v,D,O){return v.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=o2?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0})(m,w,h)&&c.push(t.li.updateTargetData(i,w))}));let l=Jt(),u=ie();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))})),c.push(d2(i,o,e.documentUpdates).next((h=>{l=h.Bs,u=h.Ls}))),!r.isEqual(X.min())){const h=t.li.getLastRemoteSnapshotVersion(i).next((f=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(h)}return L.waitFor(c).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(t.vs=s,i)))}function d2(n,e,t){let r=ie(),s=ie();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let o=Jt();return t.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):j(_u,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function h2(n,e){const t=ee(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=iu),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function f2(n,e){const t=ee(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.li.getTargetData(r,e).next((i=>i?(s=i,L.resolve(s)):t.li.allocateTargetId(r).next((o=>(s=new mn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r}))}async function ul(n,e,t){const r=ee(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!ls(o))throw o;j(_u,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function vf(n,e,t){const r=ee(n);let s=X.min(),i=ie();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,h){const f=ee(l),m=f.Fs.get(h);return m!==void 0?L.resolve(f.vs.get(m)):f.li.getTargetData(u,h)})(r,o,St(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,t?s:X.min(),t?i:ie()))).next((c=>(p2(r,XA(e),c),{documents:c,ks:i})))))}function p2(n,e,t){let r=n.Ms.get(e)||X.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Ms.set(e,r)}class Af{constructor(){this.activeTargetIds=sC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class m2{constructor(){this.vo=new Af,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Af,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class g2{Mo(e){}shutdown(){}}/**
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
 */const Cf="ConnectivityMonitor";class Rf{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){j(Cf,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){j(Cf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yi=null;function dl(){return Yi===null?Yi=(function(){return 268435456+Math.round(2147483648*Math.random())})():Yi++,"0x"+Yi.toString(16)}/**
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
 */const fc="RestConnection",y2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class _2{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Po?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const o=dl(),c=this.Qo(e,t.toUriEncodedString());j(fc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:u}=new URL(c),h=rs(u);return this.zo(e,c,l,r,h).then((f=>(j(fc,`Received RPC '${e}' ${o}: `,f),f)),(f=>{throw Kr(fc,`RPC '${e}' ${o} failed with error: `,f,"url: ",c,"request:",r),f}))}jo(e,t,r,s,i,o){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+as})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Qo(e,t){const r=y2[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class b2{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const je="WebChannelConnection",Ns=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class qr extends _2{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!qr.c_){const e=Og();Ns(e,Mg.STAT_EVENT,(t=>{t.stat===Xc.PROXY?j(je,"STAT_EVENT: detected buffering proxy"):t.stat===Xc.NOPROXY&&j(je,"STAT_EVENT: detected no buffering proxy")})),qr.c_=!0}}zo(e,t,r,s,i){const o=dl();return new Promise(((c,l)=>{const u=new Ng;u.setWithCredentials(!0),u.listenOnce(Lg.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case co.NO_ERROR:const f=u.getResponseJson();j(je,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),c(f);break;case co.TIMEOUT:j(je,`RPC '${e}' ${o} timed out`),l(new B(N.DEADLINE_EXCEEDED,"Request time out"));break;case co.HTTP_ERROR:const m=u.getStatus();if(j(je,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const I=w==null?void 0:w.error;if(I&&I.status&&I.message){const v=(function(O){const C=O.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(C)>=0?C:N.UNKNOWN})(I.status);l(new B(v,I.message))}else l(new B(N.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new B(N.UNAVAILABLE,"Connection failed."));break;default:J(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{j(je,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(s);j(je,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",h,r,15)}))}T_(e,t,r){const s=dl(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const u=i.join("");j(je,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);this.I_(h);let f=!1,m=!1;const w=new b2({Ho:I=>{m?j(je,`Not sending because RPC '${e}' stream ${s} is closed:`,I):(f||(j(je,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),j(je,`RPC '${e}' stream ${s} sending:`,I),h.send(I))},Jo:()=>h.close()});return Ns(h,js.EventType.OPEN,(()=>{m||(j(je,`RPC '${e}' stream ${s} transport opened.`),w.i_())})),Ns(h,js.EventType.CLOSE,(()=>{m||(m=!0,j(je,`RPC '${e}' stream ${s} transport closed`),w.o_(),this.E_(h))})),Ns(h,js.EventType.ERROR,(I=>{m||(m=!0,Kr(je,`RPC '${e}' stream ${s} transport errored. Name:`,I.name,"Message:",I.message),w.o_(new B(N.UNAVAILABLE,"The operation could not be completed")))})),Ns(h,js.EventType.MESSAGE,(I=>{var v;if(!m){const D=I.data[0];de(!!D,16349);const O=D,C=(O==null?void 0:O.error)||((v=O[0])==null?void 0:v.error);if(C){j(je,`RPC '${e}' stream ${s} received error:`,C);const V=C.status;let $=(function(E){const _=ke[E];if(_!==void 0)return _y(_)})(V),P=C.message;$===void 0&&($=N.INTERNAL,P="Unknown error status: "+V+" with message "+C.message),m=!0,w.o_(new B($,P)),h.close()}else j(je,`RPC '${e}' stream ${s} received:`,D),w.__(D)}})),qr.u_(),setTimeout((()=>{w.s_()}),0),w}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Fg()}}/**
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
 */function w2(n){return new qr(n)}function pc(){return typeof document<"u"?document:null}/**
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
 */function ga(n){return new vC(n,!0)}/**
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
 */qr.c_=!1;class Dy{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const kf="PersistentStream";class Ny{constructor(e,t,r,s,i,o,c,l){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Dy(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Wt(t.toString()),Wt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new B(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return j(kf,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(j(kf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class T2 extends Ny{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=RC(this.serializer,e),r=(function(i){if(!("targetChange"in i))return X.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Pt(o.readTime):X.min()})(e);return this.listener.J_(t,r)}Z_(e){const t={};t.database=ll(this.serializer),t.addTarget=(function(i,o){let c;const l=o.target;if(c=rl(l)?{documents:PC(i,l)}:{query:xC(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Ty(i,o.resumeToken);const u=ol(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(X.min())>0){c.readTime=Lo(i,o.snapshotVersion.toTimestamp());const u=ol(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=DC(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=ll(this.serializer),t.removeTarget=e,this.K_(t)}}class E2 extends Ny{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return de(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){de(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=SC(e.writeResults,e.commitTime),r=Pt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=ll(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>kC(this.serializer,r)))};this.K_(t)}}/**
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
 */class I2{}class v2 extends I2{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new B(N.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,al(t,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(N.UNKNOWN,i.toString())}))}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,al(t,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(N.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function A2(n,e,t,r){return new v2(n,e,t,r)}class C2{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Wt(t),this.aa=!1):j("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ur="RemoteStore";class R2{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((o=>{r.enqueueAndForget((async()=>{yr(this)&&(j(ur,"Restarting streams for network reachability change."),await(async function(l){const u=ee(l);u.Ea.add(4),await ki(u),u.Va.set("Unknown"),u.Ea.delete(4),await ya(u)})(this))}))})),this.Va=new C2(r,s)}}async function ya(n){if(yr(n))for(const e of n.Ra)await e(!0)}async function ki(n){for(const e of n.Ra)await e(!1)}function Ly(n,e){const t=ee(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Eu(t)?Tu(t):us(t).O_()&&wu(t,e))}function bu(n,e){const t=ee(n),r=us(t);t.Ia.delete(e),r.O_()&&My(t,e),t.Ia.size===0&&(r.O_()?r.L_():yr(t)&&t.Va.set("Unknown"))}function wu(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}us(n).Z_(e)}function My(n,e){n.da.$e(e),us(n).X_(e)}function Tu(n){n.da=new wC({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),us(n).start(),n.Va.ua()}function Eu(n){return yr(n)&&!us(n).x_()&&n.Ia.size>0}function yr(n){return ee(n).Ea.size===0}function Oy(n){n.da=void 0}async function k2(n){n.Va.set("Online")}async function S2(n){n.Ia.forEach(((e,t)=>{wu(n,e)}))}async function P2(n,e){Oy(n),Eu(n)?(n.Va.ha(e),Tu(n)):n.Va.set("Unknown")}async function x2(n,e,t){if(n.Va.set("Online"),e instanceof wy&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.da.removeTarget(c))})(n,e)}catch(r){j(ur,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Oo(n,r)}else if(e instanceof fo?n.da.Xe(e):e instanceof by?n.da.st(e):n.da.tt(e),!t.isEqual(X.min()))try{const r=await Vy(n.localStore);t.compareTo(r)>=0&&await(function(i,o){const c=i.da.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.Ia.get(u);h&&i.Ia.set(u,h.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const h=i.Ia.get(l);if(!h)return;i.Ia.set(l,h.withResumeToken(Ue.EMPTY_BYTE_STRING,h.snapshotVersion)),My(i,l);const f=new mn(h.target,l,u,h.sequenceNumber);wu(i,f)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){j(ur,"Failed to raise snapshot:",r),await Oo(n,r)}}async function Oo(n,e,t){if(!ls(e))throw e;n.Ea.add(1),await ki(n),n.Va.set("Offline"),t||(t=()=>Vy(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{j(ur,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await ya(n)}))}function Fy(n,e){return e().catch((t=>Oo(n,t,e)))}async function _a(n){const e=ee(n),t=Rn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:iu;for(;V2(e);)try{const s=await h2(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,D2(e,s)}catch(s){await Oo(e,s)}Uy(e)&&$y(e)}function V2(n){return yr(n)&&n.Ta.length<10}function D2(n,e){n.Ta.push(e);const t=Rn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Uy(n){return yr(n)&&!Rn(n).x_()&&n.Ta.length>0}function $y(n){Rn(n).start()}async function N2(n){Rn(n).ra()}async function L2(n){const e=Rn(n);for(const t of n.Ta)e.ea(t.mutations)}async function M2(n,e,t){const r=n.Ta.shift(),s=hu.from(r,e,t);await Fy(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await _a(n)}async function O2(n,e){e&&Rn(n).Y_&&await(async function(r,s){if((function(o){return yC(o)&&o!==N.ABORTED})(s.code)){const i=r.Ta.shift();Rn(r).B_(),await Fy(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await _a(r)}})(n,e),Uy(n)&&$y(n)}async function Sf(n,e){const t=ee(n);t.asyncQueue.verifyOperationInProgress(),j(ur,"RemoteStore received new credentials");const r=yr(t);t.Ea.add(3),await ki(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ya(t)}async function F2(n,e){const t=ee(n);e?(t.Ea.delete(2),await ya(t)):e||(t.Ea.add(2),await ki(t),t.Va.set("Unknown"))}function us(n){return n.ma||(n.ma=(function(t,r,s){const i=ee(t);return i.sa(),new T2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:k2.bind(null,n),Yo:S2.bind(null,n),t_:P2.bind(null,n),J_:x2.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Eu(n)?Tu(n):n.Va.set("Unknown")):(await n.ma.stop(),Oy(n))}))),n.ma}function Rn(n){return n.fa||(n.fa=(function(t,r,s){const i=ee(t);return i.sa(),new E2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:N2.bind(null,n),t_:O2.bind(null,n),ta:L2.bind(null,n),na:M2.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await _a(n)):(await n.fa.stop(),n.Ta.length>0&&(j(ur,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Iu{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new Iu(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vu(n,e){if(Wt("AsyncQueue",`${e}: ${n}`),ls(n))return new B(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Gr{static emptySet(e){return new Gr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||W.comparator(t.key,r.key):(t,r)=>W.comparator(t.key,r.key),this.keyedMap=Hs(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Gr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Gr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Pf{constructor(){this.ga=new Ee(W.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):J(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class es{constructor(e,t,r,s,i,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new es(e,t,Gr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&da(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class U2{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class $2{constructor(){this.queries=xf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=ee(t),i=s.queries;s.queries=xf(),i.forEach(((o,c)=>{for(const l of c.ba)l.onError(r)}))})(this,new B(N.ABORTED,"Firestore shutting down"))}}function xf(){return new mr((n=>oy(n)),da)}async function Au(n,e){const t=ee(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new U2,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=vu(o,`Initialization of query '${Or(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.ba.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Ru(t)}async function Cu(n,e){const t=ee(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function B2(n,e){const t=ee(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.ba)c.Fa(s)&&(r=!0);o.wa=s}}r&&Ru(t)}function j2(n,e,t){const r=ee(n),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(t);r.queries.delete(e)}function Ru(n){n.Ca.forEach((e=>{e.next()}))}var hl,Vf;(Vf=hl||(hl={})).Ma="default",Vf.Cache="cache";class ku{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==hl.Cache}}/**
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
 */class By{constructor(e){this.key=e}}class jy{constructor(e){this.key=e}}class H2{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ie(),this.mutatedKeys=ie(),this.eu=ay(e),this.tu=new Gr(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new Pf,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((h,f)=>{const m=s.get(h),w=ha(this.query,f)?f:null,I=!!m&&this.mutatedKeys.has(m.key),v=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let D=!1;m&&w?m.data.isEqual(w.data)?I!==v&&(r.track({type:3,doc:w}),D=!0):this.su(m,w)||(r.track({type:2,doc:w}),D=!0,(l&&this.eu(w,l)>0||u&&this.eu(w,u)<0)&&(c=!0)):!m&&w?(r.track({type:0,doc:w}),D=!0):m&&!w&&(r.track({type:1,doc:m}),D=!0,(l||u)&&(c=!0)),D&&(w?(o=o.add(w),i=v?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Ss:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((h,f)=>(function(w,I){const v=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{Vt:D})}};return v(w)-v(I)})(h.type,f.type)||this.eu(h.doc,f.doc))),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,u=l!==this.Xa;return this.Xa=l,o.length!==0||u?{snapshot:new es(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Pf,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ie(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const t=[];return e.forEach((r=>{this.Ya.has(r)||t.push(new jy(r))})),this.Ya.forEach((r=>{e.has(r)||t.push(new By(r))})),t}cu(e){this.Za=e.ks,this.Ya=ie();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return es.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Su="SyncEngine";class z2{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class q2{constructor(e){this.key=e,this.hu=!1}}class G2{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new mr((c=>oy(c)),da),this.Iu=new Map,this.Eu=new Set,this.Ru=new Ee(W.comparator),this.Au=new Map,this.Vu=new mu,this.du={},this.mu=new Map,this.fu=Zr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function W2(n,e,t=!0){const r=Jy(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Hy(r,e,t,!0),s}async function J2(n,e){const t=Jy(n);await Hy(t,e,!0,!1)}async function Hy(n,e,t,r){const s=await f2(n.localStore,St(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await K2(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Ly(n.remoteStore,s),c}async function K2(n,e,t,r,s){n.pu=(f,m,w)=>(async function(v,D,O,C){let V=D.view.ru(O);V.Ss&&(V=await vf(v.localStore,D.query,!1).then((({documents:E})=>D.view.ru(E,V))));const $=C&&C.targetChanges.get(D.targetId),P=C&&C.targetMismatches.get(D.targetId)!=null,F=D.view.applyChanges(V,v.isPrimaryClient,$,P);return Nf(v,D.targetId,F.au),F.snapshot})(n,f,m,w);const i=await vf(n.localStore,e,!0),o=new H2(e,i.ks),c=o.ru(i.documents),l=Ri.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(c,n.isPrimaryClient,l);Nf(n,t,u.au);const h=new z2(e,t,o);return n.Tu.set(e,h),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),u.snapshot}async function Q2(n,e,t){const r=ee(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!da(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ul(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&bu(r.remoteStore,s.targetId),fl(r,s.targetId)})).catch(cs)):(fl(r,s.targetId),await ul(r.localStore,s.targetId,!0))}async function Y2(n,e){const t=ee(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),bu(t.remoteStore,r.targetId))}async function X2(n,e,t){const r=iR(n);try{const s=await(function(o,c){const l=ee(o),u=be.now(),h=c.reduce(((w,I)=>w.add(I.key)),ie());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(w=>{let I=Jt(),v=ie();return l.xs.getEntries(w,h).next((D=>{I=D,I.forEach(((O,C)=>{C.isValidDocument()||(v=v.add(O))}))})).next((()=>l.localDocuments.getOverlayedDocuments(w,I))).next((D=>{f=D;const O=[];for(const C of c){const V=hC(C,f.get(C.key).overlayedDocument);V!=null&&O.push(new gr(C.key,V,Xg(V.value.mapValue),_t.exists(!0)))}return l.mutationQueue.addMutationBatch(w,u,O,c)})).next((D=>{m=D;const O=D.applyToLocalDocumentSet(f,v);return l.documentOverlayCache.saveOverlays(w,D.batchId,O)}))})).then((()=>({batchId:m.batchId,changes:ly(f)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.du[o.currentUser.toKey()];u||(u=new Ee(se)),u=u.insert(c,l),o.du[o.currentUser.toKey()]=u})(r,s.batchId,t),await Si(r,s.changes),await _a(r.remoteStore)}catch(s){const i=vu(s,"Failed to persist write");t.reject(i)}}async function zy(n,e){const t=ee(n);try{const r=await u2(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Au.get(i);o&&(de(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?de(o.hu,14607):s.removedDocuments.size>0&&(de(o.hu,42227),o.hu=!1))})),await Si(t,r,e)}catch(r){await cs(r)}}function Df(n,e,t){const r=ee(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=ee(o);l.onlineState=c;let u=!1;l.queries.forEach(((h,f)=>{for(const m of f.ba)m.va(c)&&(u=!0)})),u&&Ru(l)})(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Z2(n,e,t){const r=ee(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ee(W.comparator);o=o.insert(i,qe.newNoDocument(i,X.min()));const c=ie().add(i),l=new ma(X.min(),new Map,new Ee(se),o,c);await zy(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),Pu(r)}else await ul(r.localStore,e,!1).then((()=>fl(r,e,t))).catch(cs)}async function eR(n,e){const t=ee(n),r=e.batch.batchId;try{const s=await l2(t.localStore,e);Gy(t,r,null),qy(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Si(t,s)}catch(s){await cs(s)}}async function tR(n,e,t){const r=ee(n);try{const s=await(function(o,c){const l=ee(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let h;return l.mutationQueue.lookupMutationBatch(u,c).next((f=>(de(f!==null,37113),h=f.keys(),l.mutationQueue.removeMutationBatch(u,f)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h))).next((()=>l.localDocuments.getDocuments(u,h)))}))})(r.localStore,e);Gy(r,e,t),qy(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Si(r,s)}catch(s){await cs(s)}}function qy(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Gy(n,e,t){const r=ee(n);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function fl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((r=>{n.Vu.containsKey(r)||Wy(n,r)}))}function Wy(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(bu(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Pu(n))}function Nf(n,e,t){for(const r of t)r instanceof By?(n.Vu.addReference(r.key,e),nR(n,r)):r instanceof jy?(j(Su,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||Wy(n,r.key)):J(19791,{wu:r})}function nR(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(r)||(j(Su,"New document in limbo: "+t),n.Eu.add(r),Pu(n))}function Pu(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new W(ye.fromString(e)),r=n.fu.next();n.Au.set(r,new q2(t)),n.Ru=n.Ru.insert(t,r),Ly(n.remoteStore,new mn(St(ua(t.path)),r,"TargetPurposeLimboResolution",aa.ce))}}async function Si(n,e,t){const r=ee(n),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,t).then((u=>{var h;if((u||t)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=yu.Es(l.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.J_(s),await(async function(l,u){const h=ee(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(f=>L.forEach(u,(m=>L.forEach(m.Ts,(w=>h.persistence.referenceDelegate.addReference(f,m.targetId,w))).next((()=>L.forEach(m.Is,(w=>h.persistence.referenceDelegate.removeReference(f,m.targetId,w)))))))))}catch(f){if(!ls(f))throw f;j(_u,"Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const w=h.vs.get(m),I=w.snapshotVersion,v=w.withLastLimboFreeSnapshotVersion(I);h.vs=h.vs.insert(m,v)}}})(r.localStore,i))}async function rR(n,e){const t=ee(n);if(!t.currentUser.isEqual(e)){j(Su,"User change. New user:",e.toKey());const r=await xy(t.localStore,e);t.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new B(N.CANCELLED,o))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Si(t,r.Ns)}}function sR(n,e){const t=ee(n),r=t.Au.get(e);if(r&&r.hu)return ie().add(r.key);{let s=ie();const i=t.Iu.get(e);if(!i)return s;for(const o of i){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function Jy(n){const e=ee(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=zy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Z2.bind(null,e),e.Pu.J_=B2.bind(null,e.eventManager),e.Pu.yu=j2.bind(null,e.eventManager),e}function iR(n){const e=ee(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tR.bind(null,e),e}class Fo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ga(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return c2(this.persistence,new i2,e.initialUser,this.serializer)}Cu(e){return new Py(gu.Vi,this.serializer)}Du(e){return new m2}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fo.provider={build:()=>new Fo};class oR extends Fo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){de(this.persistence.referenceDelegate instanceof Mo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new zC(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?tt.withCacheSize(this.cacheSizeBytes):tt.DEFAULT;return new Py((r=>Mo.Vi(r,t)),this.serializer)}}class pl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Df(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rR.bind(null,this.syncEngine),await F2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new $2})()}createDatastore(e){const t=ga(e.databaseInfo.databaseId),r=w2(e.databaseInfo);return A2(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,o,c){return new R2(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Df(this.syncEngine,t,0)),(function(){return Rf.v()?new Rf:new g2})())}createSyncEngine(e,t){return(function(s,i,o,c,l,u,h){const f=new G2(s,i,o,c,l,u);return h&&(f.gu=!0),f})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=ee(s);j(ur,"RemoteStore shutting down."),i.Ea.add(5),await ki(i),i.Aa.shutdown(),i.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}pl.provider={build:()=>new pl};/**
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
 */class xu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Wt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const kn="FirestoreClient";class aR{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=ze.UNAUTHENTICATED,this.clientId=su.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{j(kn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(j(kn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=vu(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function mc(n,e){n.asyncQueue.verifyOperationInProgress(),j(kn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await xy(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Lf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await cR(n);j(kn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Sf(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Sf(e.remoteStore,s))),n._onlineComponents=e}async function cR(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j(kn,"Using user provided OfflineComponentProvider");try{await mc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Kr("Error using user provided cache. Falling back to memory cache: "+t),await mc(n,new Fo)}}else j(kn,"Using default OfflineComponentProvider"),await mc(n,new oR(void 0));return n._offlineComponents}async function Ky(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j(kn,"Using user provided OnlineComponentProvider"),await Lf(n,n._uninitializedComponentsProvider._online)):(j(kn,"Using default OnlineComponentProvider"),await Lf(n,new pl))),n._onlineComponents}function lR(n){return Ky(n).then((e=>e.syncEngine))}async function Uo(n){const e=await Ky(n),t=e.eventManager;return t.onListen=W2.bind(null,e.syncEngine),t.onUnlisten=Q2.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=J2.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Y2.bind(null,e.syncEngine),t}function uR(n,e,t,r){const s=new xu(r),i=new ku(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>Au(await Uo(n),i))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>Cu(await Uo(n),i)))}}function dR(n,e,t={}){const r=new Ht;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const h=new xu({next:m=>{h.Nu(),o.enqueueAndForget((()=>Cu(i,f)));const w=m.docs.has(c);!w&&m.fromCache?u.reject(new B(N.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&l&&l.source==="server"?u.reject(new B(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new ku(ua(c.path),h,{includeMetadataChanges:!0,Ka:!0});return Au(i,f)})(await Uo(n),n.asyncQueue,e,t,r))),r.promise}function hR(n,e,t={}){const r=new Ht;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const h=new xu({next:m=>{h.Nu(),o.enqueueAndForget((()=>Cu(i,f))),m.fromCache&&l.source==="server"?u.reject(new B(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new ku(c,h,{includeMetadataChanges:!0,Ka:!0});return Au(i,f)})(await Uo(n),n.asyncQueue,e,t,r))),r.promise}function fR(n,e){const t=new Ht;return n.asyncQueue.enqueueAndForget((async()=>X2(await lR(n),e,t))),t.promise}/**
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
 */function Qy(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const pR="ComponentProvider",Mf=new Map;function mR(n,e,t,r,s){return new NA(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Qy(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const Yy="firestore.googleapis.com",Of=!0;class Ff{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Yy,this.ssl=Of}else this.host=e.host,this.ssl=e.ssl??Of;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Sy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jC)throw new B(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qy(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ba{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ff({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ff(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new fA;switch(r.type){case"firstParty":return new yA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Mf.get(t);r&&(j(pR,"Removing Datastore"),Mf.delete(t),r.terminate())})(this),Promise.resolve()}}function gR(n,e,t,r={}){var u;n=ut(n,ba);const s=rs(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(qm(`https://${c}`),Gm("Firestore",!0)),i.host!==Yy&&i.host!==c&&Kr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!or(l,o)&&(n._setSettings(l),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=ze.MOCK_USER;else{h=OE(r.mockUserToken,(u=n._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new B(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ze(m)}n._authCredentials=new pA(new $g(h,f))}}/**
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
 */class _r{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _r(this.firestore,e,this._query)}}class Re{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new En(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Re(this.firestore,e,this._key)}toJSON(){return{type:Re._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(vi(t,Re._jsonSchema))return new Re(e,r||null,new W(ye.fromString(t.referencePath)))}}Re._jsonSchemaVersion="firestore/documentReference/1.0",Re._jsonSchema={type:Pe("string",Re._jsonSchemaVersion),referencePath:Pe("string")};class En extends _r{constructor(e,t,r){super(e,t,ua(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new W(e))}withConverter(e){return new En(this.firestore,e,this._path)}}function ds(n,e,...t){if(n=Ke(n),Bg("collection","path",e),n instanceof ba){const r=ye.fromString(e,...t);return Qh(r),new En(n,null,r)}{if(!(n instanceof Re||n instanceof En))throw new B(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ye.fromString(e,...t));return Qh(r),new En(n.firestore,null,r)}}function Yt(n,e,...t){if(n=Ke(n),arguments.length===1&&(e=su.newId()),Bg("doc","path",e),n instanceof ba){const r=ye.fromString(e,...t);return Kh(r),new Re(n,null,new W(r))}{if(!(n instanceof Re||n instanceof En))throw new B(N.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ye.fromString(e,...t));return Kh(r),new Re(n.firestore,n instanceof En?n.converter:null,new W(r))}}/**
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
 */const Uf="AsyncQueue";class $f{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Dy(this,"async_queue_retry"),this._c=()=>{const r=pc();r&&j(Uf,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=pc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=pc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ht;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ls(e))throw e;j(Uf,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Wt("INTERNAL UNHANDLED ERROR: ",Bf(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Iu.createAndSchedule(this,e,t,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&J(47125,{Pc:Bf(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Bf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Sn extends ba{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new $f,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $f(e),this._firestoreClient=void 0,await e}}}function yR(n,e){const t=typeof n=="object"?n:Qm(),r=typeof n=="string"?n:Po,s=ql(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=LE("firestore");i&&gR(s,...i)}return s}function wa(n){if(n._terminated)throw new B(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||_R(n),n._firestoreClient}function _R(n){var r,s,i,o;const e=n._freezeSettings(),t=mR(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new aR(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class ct{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ct(Ue.fromBase64String(e))}catch(t){throw new B(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ct(Ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ct._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vi(e,ct._jsonSchema))return ct.fromBase64String(e.bytes)}}ct._jsonSchemaVersion="firestore/bytes/1.0",ct._jsonSchema={type:Pe("string",ct._jsonSchemaVersion),bytes:Pe("string")};/**
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
 */class Xy{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Vu{constructor(e){this._methodName=e}}/**
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
 */class xt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xt._jsonSchemaVersion}}static fromJSON(e){if(vi(e,xt._jsonSchema))return new xt(e.latitude,e.longitude)}}xt._jsonSchemaVersion="firestore/geoPoint/1.0",xt._jsonSchema={type:Pe("string",xt._jsonSchemaVersion),latitude:Pe("number"),longitude:Pe("number")};/**
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
 */class bt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:bt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vi(e,bt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new bt(e.vectorValues);throw new B(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}bt._jsonSchemaVersion="firestore/vectorValue/1.0",bt._jsonSchema={type:Pe("string",bt._jsonSchemaVersion),vectorValues:Pe("object")};/**
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
 */const bR=/^__.*__$/;class wR{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new gr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ci(e,this.data,t,this.fieldTransforms)}}function Zy(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J(40011,{dataSource:n})}}class Du{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Du({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return $o(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Zy(this.dataSource)&&bR.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class TR{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ga(e)}createContext(e,t,r,s=!1){return new Du({dataSource:e,methodName:t,targetDoc:r,path:Fe.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nu(n){const e=n._freezeSettings(),t=ga(n._databaseId);return new TR(n._databaseId,!!e.ignoreUndefinedProperties,t)}function e_(n,e,t,r,s,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);r_("Data must be an object, but it was:",o,r);const c=t_(r,o);let l,u;if(i.merge)l=new pt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const m=Ta(e,f,t);if(!o.contains(m))throw new B(N.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);AR(h,m)||h.push(m)}l=new pt(h),u=o.fieldTransforms.filter((f=>l.covers(f.field)))}else l=null,u=o.fieldTransforms;return new wR(new at(c),l,u)}class Lu extends Vu{_toFieldTransform(e){return new cC(e.path,new li)}isEqual(e){return e instanceof Lu}}function ER(n,e,t,r=!1){return Mu(t,n.createContext(r?4:3,e))}function Mu(n,e){if(n_(n=Ke(n)))return r_("Unsupported field value:",e,n),t_(n,e);if(n instanceof Vu)return(function(r,s){if(!Zy(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=Mu(c,s.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=Ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return iC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=be.fromDate(r);return{timestampValue:Lo(s.serializer,i)}}if(r instanceof be){const i=new be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Lo(s.serializer,i)}}if(r instanceof xt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ct)return{bytesValue:Ty(s.serializer,r._byteString)};if(r instanceof Re){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:pu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof bt)return(function(o,c){const l=o instanceof bt?o.toArray():o;return{mapValue:{fields:{[Qg]:{stringValue:Yg},[xo]:{arrayValue:{values:l.map((h=>{if(typeof h!="number")throw c.createError("VectorValues must only contain numeric values.");return uu(c.serializer,h)}))}}}}}})(r,s);if(ky(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${oa(r)}`)})(n,e)}function t_(n,e){const t={};return zg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pr(n,((r,s)=>{const i=Mu(s,e.childContextForField(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function n_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof be||n instanceof xt||n instanceof ct||n instanceof Re||n instanceof Vu||n instanceof bt||ky(n))}function r_(n,e,t){if(!n_(t)||!jg(t)){const r=oa(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function Ta(n,e,t){if((e=Ke(e))instanceof Xy)return e._internalPath;if(typeof e=="string")return vR(n,e);throw $o("Field path arguments must be of type string or ",n,!1,void 0,t)}const IR=new RegExp("[~\\*/\\[\\]]");function vR(n,e,t){if(e.search(IR)>=0)throw $o(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Xy(...e.split("."))._internalPath}catch{throw $o(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function $o(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new B(N.INVALID_ARGUMENT,c+n+l)}function AR(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class CR{convertValue(e,t="none"){switch(Cn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(An(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return pr(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[xo].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>Ce(o.doubleValue)));return new bt(t)}convertGeoPoint(e){return new xt(Ce(e.latitude),Ce(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=la(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(oi(e));default:return null}}convertTimestamp(e){const t=vn(e);return new be(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ye.fromString(e);de(Ry(r),9688,{name:e});const s=new ai(r.get(1),r.get(3)),i=new W(r.popFirst(5));return s.isEqual(t)||Wt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class Ou extends CR{constructor(e){super(),this.firestore=e}convertBytes(e){return new ct(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,t)}}function xe(){return new Lu("serverTimestamp")}const jf="@firebase/firestore",Hf="4.10.0";/**
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
 */function zf(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class s_{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Ta("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class RR extends s_{data(){return super.data()}}/**
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
 */function i_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fu{}class kR extends Fu{}function Ea(n,e,...t){let r=[];e instanceof Fu&&r.push(e),r=r.concat(t),(function(i){const o=i.filter((l=>l instanceof Uu)).length,c=i.filter((l=>l instanceof Ia)).length;if(o>1||o>0&&c>0)throw new B(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Ia extends kR{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ia(e,t,r)}_apply(e){const t=this._parse(e);return o_(e._query,t),new _r(e.firestore,e.converter,sl(e._query,t))}_parse(e){const t=Nu(e.firestore);return(function(i,o,c,l,u,h,f){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new B(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Gf(f,h);const I=[];for(const v of f)I.push(qf(l,i,v));m={arrayValue:{values:I}}}else m=qf(l,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Gf(f,h),m=ER(c,o,f,h==="in"||h==="not-in");return Se.create(u,h,m)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function va(n,e,t){const r=e,s=Ta("where",n);return Ia._create(s,r,t)}class Uu extends Fu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Uu(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Et.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)o_(o,l),o=sl(o,l)})(e._query,t),new _r(e.firestore,e.converter,sl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function qf(n,e,t){if(typeof(t=Ke(t))=="string"){if(t==="")throw new B(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!iy(e)&&t.indexOf("/")!==-1)throw new B(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ye.fromString(t));if(!W.isDocumentKey(r))throw new B(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sf(n,new W(r))}if(t instanceof Re)return sf(n,t._key);throw new B(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oa(t)}.`)}function Gf(n,e){if(!Array.isArray(n)||n.length===0)throw new B(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function o_(n,e){const t=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new B(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function a_(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class qs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rr extends s_{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new po(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ta("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=rr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}rr._jsonSchemaVersion="firestore/documentSnapshot/1.0",rr._jsonSchema={type:Pe("string",rr._jsonSchemaVersion),bundleSource:Pe("string","DocumentSnapshot"),bundleName:Pe("string"),bundle:Pe("string")};class po extends rr{data(e={}){return super.data(e)}}class sr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new qs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new po(this._firestore,this._userDataWriter,r.key,r,new qs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new po(s._firestore,s._userDataWriter,c.doc.key,c.doc,new qs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new po(s._firestore,s._userDataWriter,c.doc.key,c.doc,new qs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:SR(c.type),doc:l,oldIndex:u,newIndex:h}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=sr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=su.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function SR(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:n})}}/**
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
 */sr._jsonSchemaVersion="firestore/querySnapshot/1.0",sr._jsonSchema={type:Pe("string",sr._jsonSchemaVersion),bundleSource:Pe("string","QuerySnapshot"),bundleName:Pe("string"),bundle:Pe("string")};/**
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
 */function hs(n){n=ut(n,Re);const e=ut(n.firestore,Sn),t=wa(e);return dR(t,n._key).then((r=>c_(e,n,r)))}function fs(n){n=ut(n,_r);const e=ut(n.firestore,Sn),t=wa(e),r=new Ou(e);return i_(n._query),hR(t,n._query).then((s=>new sr(e,r,n,s)))}function It(n,e,t){n=ut(n,Re);const r=ut(n.firestore,Sn),s=a_(n.converter,e,t),i=Nu(r);return Bu(r,[e_(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,_t.none())])}function ps(n){return Bu(ut(n.firestore,Sn),[new du(n._key,_t.none())])}function $u(n,e){const t=ut(n.firestore,Sn),r=Yt(n),s=a_(n.converter,e),i=Nu(n.firestore);return Bu(t,[e_(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,_t.exists(!1))]).then((()=>r))}function Xt(n,...e){var u,h,f;n=Ke(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||zf(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(zf(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(h=m.error)==null?void 0:h.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let i,o,c;if(n instanceof Re)o=ut(n.firestore,Sn),c=ua(n._key.path),i={next:m=>{e[r]&&e[r](c_(o,n,m))},error:e[r+1],complete:e[r+2]};else{const m=ut(n,_r);o=ut(m.firestore,Sn),c=m._query;const w=new Ou(o);i={next:I=>{e[r]&&e[r](new sr(o,w,m,I))},error:e[r+1],complete:e[r+2]},i_(n._query)}const l=wa(o);return uR(l,c,s,i)}function Bu(n,e){const t=wa(n);return fR(t,e)}function c_(n,e,t){const r=t.docs.get(e._key),s=new Ou(n);return new rr(n,s,e._key,r,new qs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){hA(ss),Wr(new ar("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Sn(new mA(r.getProvider("auth-internal")),new _A(o,r.getProvider("app-check-internal")),LA(o,s),o);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),bn(jf,Hf,e),bn(jf,Hf,"esm2020")})();const PR={apiKey:"AIzaSyCvK7ounDvKzgKGHK30uCFqDUbqZkoOGJc",authDomain:"cardy-hardy.firebaseapp.com",projectId:"cardy-hardy",storageBucket:"cardy-hardy.firebasestorage.app",messagingSenderId:"756160918063",appId:"1:756160918063:web:830975f45634054dfe8cda",measurementId:"G-MXM77YZD95"};let gc=null,yc=null,_c=null,bc=null;const l_=()=>(gc||(gc=Km(PR)),gc),ts=()=>(yc||(yc=uA(l_())),yc),Wf=()=>(_c||(_c=new $t),_c),nt=()=>(bc||(bc=yR(l_())),bc),u_=()=>Yt(nt(),"admins","list"),d_=()=>Yt(nt(),"config","site"),ju=n=>Yt(nt(),"users",n),h_=()=>ds(nt(),"users"),f_=()=>ds(nt(),"games"),Bo=n=>Yt(nt(),"games",n),Hu=()=>ds(nt(),"manufacturers"),p_=n=>Yt(nt(),"manufacturers",n),zu=()=>ds(nt(),"gameRatings"),ml=n=>Yt(nt(),"gameRatings",n),Aa=()=>ds(nt(),"currentGames"),m_=n=>Yt(nt(),"currentGames",n),Ca=()=>ds(nt(),"pastOwnedGames"),g_=n=>Yt(nt(),"pastOwnedGames",n),gl=(n="")=>n.trim().toLowerCase(),xR=()=>typeof navigator<"u"&&/iPad|iPhone|iPod/i.test(navigator.userAgent||""),VR=async()=>{const n=[{key:"indexedDB",value:Rg},{key:"local",value:Tg},{key:"session",value:Zl}];let e=null;for(const t of n)try{return await Q1(ts(),t.value),{persistence:t.key,error:null}}catch(r){e=r,console.warn(`Failed to set ${t.key} persistence`,r)}return{persistence:"none",error:e}},DR=async()=>{let n=null,e=null;try{e=await Cv(ts())}catch(r){n=r,console.error("Firebase redirect sign-in failed",r)}const t=await VR();return{redirectError:n,redirectResult:e,persistence:t}},qu=async()=>{try{return await _v(ts(),Wf())}catch(n){if(!xR())throw n;return console.warn("Popup sign-in failed on iOS, falling back to redirect",n),vv(ts(),Wf())}},dt=()=>(console.log("start signout"),ev(ts()).then(()=>{console.log("signout completed")})),NR=n=>Z1(ts(),n),y_=async()=>{const n=await hs(u_());if(!n.exists())return[];const e=n.data();return Array.isArray(e.items)?e.items:[]},LR=async(n="")=>(await y_()).map(gl).includes(gl(n)),MR=async n=>It(u_(),{items:n.map(gl).filter(Boolean),updatedAt:xe()},{merge:!0}),Ra=async()=>{const n=await hs(d_());if(!n.exists())return null;const e=n.data();return typeof e.nextMeetupDate=="number"?e.nextMeetupDate:null},OR=async n=>It(d_(),{nextMeetupDate:n,updatedAt:xe()},{merge:!0}),FR=async n=>{const e=ju(n.id),t=await hs(e),r={email:n.email,firstName:n.firstName,lastName:n.lastName,...n.userType?{userType:n.userType}:{},updatedAt:xe()};return t.exists()?It(e,r,{merge:!0}):It(e,{...r,createdAt:xe()})},UR=async n=>{const e=n==null?void 0:n.uid;if(!e)return!1;const t=ju(e);if((await hs(t)).exists())return!0;const s=(n.email||"").trim().toLowerCase();if(s&&!(await fs(Ea(h_(),va("email","==",s)))).empty)return!0;const i=n.displayName||"",[o="",...c]=i.trim().split(/\s+/),l=c.join(" ");return await It(t,{email:s,firstName:o,lastName:l,userType:"unverified",createdAt:xe(),updatedAt:xe()}),!0},$R=()=>{const n=new vt([]),e=Xt(h_(),t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));r.sort((s,i)=>{var l,u,h,f,m,w,I,v,D,O;const o=(l=s==null?void 0:s.createdAt)!=null&&l.seconds?s.createdAt.seconds*1e3:((m=(f=(h=(u=s==null?void 0:s.createdAt)==null?void 0:u.toDate)==null?void 0:h.call(u))==null?void 0:f.getTime)==null?void 0:m.call(f))??0;return((w=i==null?void 0:i.createdAt)!=null&&w.seconds?i.createdAt.seconds*1e3:((O=(D=(v=(I=i==null?void 0:i.createdAt)==null?void 0:I.toDate)==null?void 0:v.call(I))==null?void 0:D.getTime)==null?void 0:O.call(D))??0)-o}),n.next(r)},t=>{console.error("Failed to listen to users",t)});return n.unsubscribe=e,n},BR=async n=>n?(await ps(ju(n)),!0):!1,ms=()=>{const n=new vt([]),e=Xt(f_(),t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));n.next(E_(r))},t=>{console.error("Failed to listen to games",t)});return n.unsubscribe=e,n},__=()=>{const n=new vt([]),e=Xt(Hu(),t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));n.next(I_(r))},t=>{console.error("Failed to listen to manufacturers",t)});return n.unsubscribe=e,n},jR=async()=>{const e=(await fs(Hu())).docs.map(t=>({id:t.id,...t.data()}));return I_(e)},HR=async n=>{const e=ak(n);return n.id?It(p_(n.id),{...e,updatedAt:xe()},{merge:!0}):$u(Hu(),{...e,createdAt:xe(),updatedAt:xe()})},Jf=async n=>n?(await ps(p_(n)),!0):!1,Gu=async()=>{const e=(await fs(f_())).docs.map(t=>({id:t.id,...t.data()}));return E_(e)},b_=async n=>{const e=ok(n);if(n.id)return It(Bo(n.id),{...e,updatedAt:xe()},{merge:!0});const t=await uk(e.title);return await It(Bo(t),{...e,createdAt:xe(),updatedAt:xe()}),{id:t}},Kf=async n=>n?(await ps(Bo(n)),!0):!1,zR=()=>{const n=new vt([]),e=Xt(zu(),t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));n.next(Ku(r))},t=>{console.error("Failed to listen to game ratings",t)});return n.unsubscribe=e,n},qR=()=>{const n=new vt([]),e=Xt(Ea(zu(),va("isVisible","==",!0)),t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));n.next(Ku(r))},t=>{console.error("Failed to listen to visible game ratings",t)});return n.unsubscribe=e,n},GR=async()=>{const e=(await fs(zu())).docs.map(t=>({id:t.id,...t.data()}));return Ku(e)},WR=async n=>{const e=ck(n),t=n.id||n.gameId;if(!t)throw new Error("Game rating requires a gameId.");const r=await hs(ml(t));return It(ml(t),{...e,updatedAt:xe(),...r.exists()?{}:{createdAt:xe()}},{merge:!0})},JR=async n=>n?(await ps(ml(n)),!0):!1,KR=()=>{const n=new vt([]),e=Xt(Aa(),t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));n.next(Wu(r))},t=>{console.error("Failed to listen to current games",t)});return n.unsubscribe=e,n},QR=()=>{const n=new vt([]),e=Xt(Ea(Aa(),va("isVisible","==",!0)),t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));n.next(Wu(r))},t=>{console.error("Failed to listen to visible current games",t)});return n.unsubscribe=e,n},YR=async()=>{const e=(await fs(Aa())).docs.map(t=>({id:t.id,...t.data()}));return Wu(e)},XR=async n=>{const e=sk(n);return n.id?It(m_(n.id),{...e,updatedAt:xe()},{merge:!0}):$u(Aa(),{...e,createdAt:xe(),updatedAt:xe()})},ZR=async n=>n?(await ps(m_(n)),!0):!1,ek=()=>{const n=new vt([]),e=Xt(Ca(),t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));n.next(Ju(r))},t=>{console.error("Failed to listen to past owned games",t)});return n.unsubscribe=e,n},tk=()=>{const n=new vt([]),e=Xt(Ea(Ca(),va("isVisible","==",!0)),t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));n.next(Ju(r))},t=>{console.error("Failed to listen to visible past owned games",t)});return n.unsubscribe=e,n},w_=async()=>{const e=(await fs(Ca())).docs.map(t=>({id:t.id,...t.data()}));return Ju(e)},T_=async n=>{const e=ik(n);return n.id?It(g_(n.id),{...e,updatedAt:xe()},{merge:!0}):$u(Ca(),{...e,createdAt:xe(),updatedAt:xe()})},nk=async n=>n?(await ps(g_(n)),!0):!1,rk=async(n,e=[])=>{const t=await w_(),r=new Set(t.flatMap(c=>Qf(c))),s=dk(e);let i=0,o=0;for(const c of n){const l=(c.title||"").trim();if(!l){o+=1;continue}const u=Qf(c);if(u.some(m=>r.has(m))){o+=1;continue}const f=await hk({title:l,manufacturer:c.manufacturer||"",yearReleased:c.yearReleased??null,imageUrl:c.imageUrl||"",notes:c.pinsideUrl?`Imported from ${c.pinsideUrl}`:""},s);await T_({gameId:f.id,title:"",imageUrl:"",manufacturer:"",yearReleased:null,dateAddedToCollection:c.dateAddedToCollection||"",dateRemovedFromCollection:c.dateRemovedFromCollection||"",notes:"",isVisible:!0,pinsideUrl:c.pinsideUrl||"",pinsideId:c.pinsideId||"",sourceTitle:l,source:"pinside"}),u.forEach(m=>r.add(m)),i+=1}return{added:i,skipped:o,total:n.length}},sk=n=>{const e={gameId:(n.gameId||"").trim(),dateAddedToCollection:n.dateAddedToCollection,notes:(n.notes||"").trim(),isVisible:n.isVisible!==!1};return n.title&&(e.title=n.title.trim()),n.imageUrl&&(e.imageUrl=n.imageUrl.trim()),n.manufacturer&&(e.manufacturer=n.manufacturer.trim()),typeof n.yearReleased=="number"&&!Number.isNaN(n.yearReleased)&&(e.yearReleased=n.yearReleased),e},ik=n=>{const e={gameId:(n.gameId||"").trim(),title:(n.title||"").trim(),dateAddedToCollection:(n.dateAddedToCollection||"").trim(),dateRemovedFromCollection:(n.dateRemovedFromCollection||"").trim(),notes:(n.notes||"").trim(),isVisible:n.isVisible!==!1,pinsideUrl:(n.pinsideUrl||"").trim(),pinsideId:(n.pinsideId||"").trim(),sourceTitle:(n.sourceTitle||"").trim(),source:(n.source||"").trim()};return n.imageUrl&&(e.imageUrl=n.imageUrl.trim()),n.manufacturer&&(e.manufacturer=n.manufacturer.trim()),typeof n.yearReleased=="number"&&!Number.isNaN(n.yearReleased)?e.yearReleased=n.yearReleased:e.yearReleased=null,e},ok=n=>{const e=Array.isArray(n.dataLinks)?n.dataLinks.map(r=>({title:((r==null?void 0:r.title)||"").trim(),url:((r==null?void 0:r.url)||"").trim()})).filter(r=>r.title||r.url):[],t={title:(n.title||"").trim(),manufacturerId:(n.manufacturerId||"").trim(),imageUrl:(n.imageUrl||"").trim(),manufacturer:(n.manufacturer||"").trim(),notes:(n.notes||"").trim(),dataLinks:e};return typeof n.yearReleased=="number"&&!Number.isNaN(n.yearReleased)?t.yearReleased=n.yearReleased:t.yearReleased=null,t},ak=n=>({name:(n.name||"").trim(),logoUrl:(n.logoUrl||"").trim(),opinions:(n.opinions||"").trim()}),ck=n=>{const e=typeof n.rating=="number"&&!Number.isNaN(n.rating)?Math.max(0,Math.min(10,n.rating)):null,t=Array.isArray(n.videos)?n.videos.map(r=>({url:((r==null?void 0:r.url)||"").trim(),description:((r==null?void 0:r.description)||"").trim()})).filter(r=>r.url||r.description):[];return{gameId:(n.gameId||"").trim(),rating:e,review:(n.review||"").trim(),videos:t,isVisible:n.isVisible!==!1}},jo=n=>{if(!n)return 0;if(typeof n.toDate=="function")return n.toDate().getTime();if(typeof n=="number")return n;if(n.seconds)return n.seconds*1e3;const e=new Date(n).getTime();return Number.isNaN(e)?0:e},Wu=n=>[...n].sort((e,t)=>jo(t.dateAddedToCollection)-jo(e.dateAddedToCollection)),Ju=n=>[...n].sort((e,t)=>jo(t.dateRemovedFromCollection||t.dateAddedToCollection)-jo(e.dateRemovedFromCollection||e.dateAddedToCollection)||String(e.title||"").localeCompare(String(t.title||""),void 0,{sensitivity:"base"})),E_=n=>[...n].sort((e,t)=>String(e.title||"").localeCompare(String(t.title||""),void 0,{sensitivity:"base"})),I_=n=>[...n].sort((e,t)=>String(e.name||"").localeCompare(String(t.name||""),void 0,{sensitivity:"base"})),Ku=n=>[...n].sort((e,t)=>Number(t.rating||0)-Number(e.rating||0)||String(e.gameId||"").localeCompare(String(t.gameId||""),void 0,{sensitivity:"base"})),Qu=n=>String(n||"").toLowerCase().replace(/\([^)]*\)/g,"").replace(/[^a-z0-9]+/g," ").trim(),lk=n=>String(n||"").trim().toLowerCase().replace(/['’]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"game",uk=async n=>{const e=lk(n);let t=e,r=2;for(;(await hs(Bo(t))).exists();)t=`${e}-${r}`,r+=1;return t},dk=n=>new Map(n.map(e=>[Qu(e.title),e]).filter(([e])=>e)),hk=async(n,e)=>{const t=Qu(n.title),r=e.get(t);if(r)return r;const i={id:(await b_({title:n.title,manufacturer:n.manufacturer||"",yearReleased:n.yearReleased??null,imageUrl:n.imageUrl||"",notes:n.notes||""})).id,title:n.title,manufacturer:n.manufacturer||"",yearReleased:n.yearReleased??null,imageUrl:n.imageUrl||"",notes:n.notes||""};return e.set(t,i),i},Qf=n=>{const e=Qu(n.title||n.sourceTitle),t=!!(n.pinsideUrl||n.pinsideId),r=!!(n.dateAddedToCollection||n.dateRemovedFromCollection),s=[e,String(n.dateAddedToCollection||"").trim(),String(n.dateRemovedFromCollection||"").trim()].filter(Boolean).join("|");return[n.pinsideUrl?`url:${String(n.pinsideUrl).trim().toLowerCase()}`:"",n.pinsideId?`pinside:${String(n.pinsideId).trim().toLowerCase()}`:"",r&&s?`history:${s}`:"",!t&&!r&&e?`title:${e}`:""].filter(Boolean)},Yu=({onUser:n,toast:e})=>{if(typeof n!="function")throw new Error("startAuthFlow requires an onUser callback.");DR().then(({redirectError:t,redirectResult:r,persistence:s})=>{var i,o;t&&((i=e==null?void 0:e.error)==null||i.call(e,"Sign-in failed after redirect. Try again.")),s!=null&&s.error&&((o=e==null?void 0:e.error)==null||o.call(e,"Safari blocked login storage. Check cookie settings.")),r!=null&&r.user&&n(r.user,"redirectResult")}).catch(t=>{var r;console.error("Failed to prepare auth",t),(r=e==null?void 0:e.error)==null||r.call(e,"Sign-in setup failed. Try again.")}),NR(t=>{n(t,"onAuthChanged")})},fk=async({user:n,mountSso:e,toast:t,onDenied:r,onPermissionsError:s}={})=>{var o,c;let i=!1;try{i=await LR((n==null?void 0:n.email)||"")}catch(l){return console.error("Failed to load admin list",l),s==null||s(l),(o=t==null?void 0:t.error)==null||o.call(t,"Unable to verify access. Check Firestore rules."),e==null||e("denied",(n==null?void 0:n.email)||"","auth:permissions"),!1}return i?!0:(r==null||r(),(c=t==null?void 0:t.error)==null||c.call(t,`Signed in as ${(n==null?void 0:n.email)||"unknown"} but not authorized.`),e==null||e("denied",(n==null?void 0:n.email)||"","auth:denied"),!1)},Xu=async({user:n,mountSso:e,toast:t,setCurrentUser:r,onSignedOut:s,onDenied:i,onAuthorized:o,reason:c=""}={})=>{if(!n)return r==null||r(null),s==null||s(),e==null||e("login","","auth:logged-out"),!1;try{await UR(n)}catch(u){console.warn("Failed to ensure user profile",u)}return await fk({user:n,mountSso:e,toast:t,onDenied:i,onPermissionsError:i})?(r==null||r(n),o==null||o(n,c),!0):!1},ka=M(({status:n,userEmail:e,adminEmail:t,onSignIn:r,onSignOut:s})=>(ka.inputs(i=>{[{status:n,userEmail:e,adminEmail:t,onSignIn:r,onSignOut:s}]=i,r=K(r),s=K(s)}),[()=>n==="loading"?rc.class`panel auth-panel`(oe("Checking login...")):n==="denied"?rc.class`panel auth-panel`(Ze("Access denied"),oe.class`auth-warning`(()=>e||"This account"," is not authorized."),oe("Please be patient as we review your account to become verified status."),g.class`auth-actions`(G.type`button`.class`add-button`.onClick(s)("Sign out"))):rc.class`panel auth-panel`(Ze("Sign in"),oe("Use Google to access admin tools."),g.class`auth-actions`(G.type`button`.class`add-button`.onClick(r)("Sign in with Google")))])),pk=M(()=>{let n=[];const e=me(()=>{});M.promise=y_().then(o=>{n=Array.isArray(o)?o:[],e()}).catch(o=>{console.error("Failed to load admin list",o)});const t=(o,c)=>{n=n.map((l,u)=>u===o?c:l),e()},r=()=>{n=[...n,""],e()},s=o=>{n=n.filter((c,l)=>l!==o),e()},i=()=>MR(n).then(()=>{alert("saved")}).catch(o=>{console.error("Failed to save admin list",o)});return ta.style`border:0;padding:0;margin:0;`(g.style`display:flex;flex-direction:column;gap:0.6em;`(o=>(n.length?n:[""]).map((c,l)=>g.style`display:flex;gap:0.6em;align-items:center;`(ue.type`text`.value(u=>c).onInput(u=>t(l,u.target.value)).style`width:100%`,G.onClick(()=>s(l))("🗑️ remove")))),g.style`display:flex;gap:0.6em;align-items:center;margin-top:0.8em;flex-wrap:wrap;`(G.onClick(r)("add"),G.onClick(i)("save to firestore")))});function v_({startDateTime:n,message:e,subject:t}){n=new Date(n);const{year:r,month:s}=Zu(n),i=("0"+(n.getDate()+1)).slice(-2),o=Ho(n),c=new Date(new Date(n).setHours(n.getHours()+2)),l=Ho(c),u=encodeURIComponent(e),h=encodeURIComponent(t);return`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${r}${s}${i}${o}%2F${r}${s}${i}${l}&details=${u}&location=&text=${h}`}function A_({startDateTime:n,message:e,subject:t}){n=new Date(n);const{year:r,month:s,day:i,hours:o}=Zu(n),l=new Date(new Date(n).setHours(n.getHours()+2)).getHours(),u=encodeURIComponent(e.replace(/\n/g,"<br>")),h=encodeURIComponent(t);return`https://outlook.live.com/calendar/0/action/compose?allday=false&body=${u}&enddt=${r}-${s}-${i}T${l}%3A00%3A00&location=&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=${r}-${s}-${i}T${o}%3A00%3A00&subject=${h}`}function C_({startDateTime:n,message:e,subject:t}){n=new Date(n);const{year:r,month:s}=Zu(n),i=("0"+(n.getDate()+1)).slice(-2),o=Ho(n),c=new Date(new Date(n).setHours(n.getHours()+2)),l=Ho(c);return`BEGIN:VCALENDAR
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
END:VCALENDAR`}function Zu(n){n=new Date(n);const e=n.getFullYear(),t=("0"+(n.getMonth()+1)).slice(-2),r=("0"+n.getDate()).slice(-2),s=n.getHours();return{year:e,month:t,day:r,hours:s}}function Ho(n){const e=String(n.getUTCHours()).padStart(2,"0"),t=String(n.getUTCMinutes()).padStart(2,"0"),r=String(n.getUTCSeconds()).padStart(2,"0");return`T${e}${t}${r}Z`}const R_=M(n=>{R_.updates(t=>[n]=t);const e=new Date(n);return g.style`text-align:center;`(g(Z("🗓️ ",e.toLocaleString("default",{weekday:"long"}),", ",e.toLocaleString("default",{month:"long"})," ",e.getDate(),k_(e))),t=>Fm({date:n}),mk(e))});function mk(n){return g.style`font-size:.65em;opacity:.7`(gk(n))}function wc(n,e){const t={hour:"numeric",minute:"numeric",hour12:!0,timeZone:e,timeZoneName:"short"};return new Intl.DateTimeFormat("en-US",t).format(n)}function gk(n){const e=wc(n,"America/New_York"),t=wc(n,"America/Chicago"),r=wc(n,"America/Los_Angeles");return`${e} / ${t} / ${r}`}const He={subject:"Cary Hardy Patreon meetup",message:`
    Link to virtual meeting is posted to Patreon on a day of meeting
  
    https://www.patreon.com/caryhardy
  `.trim().replace(/    /g,"")},Sa=M(({date:n,showLearnMore:e=!0})=>{n=new Date(n),Sa.updates(u=>{[{date:n,showLearnMore:e}]=u});let t=!1;const r=v_({startDateTime:n,message:He.message,subject:He.subject}),s=A_({startDateTime:n,message:He.message,subject:He.subject}),i=[{type:"google",url:r},{type:"outlook",url:s}],o=C_({startDateTime:n,message:He.message,subject:He.subject});var c=new Blob([o],{type:"text/calendar"});const l=window.URL.createObjectURL(c);return ve(g.style`padding:.5em;`("Countdown until the next, Patreon LE only, group meetup"),()=>R_(n),g.style`white-space:nowrap;font-size:.7em;opacity:.8`("save meetup to your calendar using links below 👇"),g.style`background-color:black;padding:0 0 .2em 0;`(g.style`white-space:nowrap;font-size:.5em;opacity:.6`("choose your calendar type below"),g.style`display:flex;gap:1em;justify-content: center;`(i.map(u=>Yf(u.type,{href:u.url},u.type==="google"?Y.src`assets/media/gmail-logo-2.png`.width`48`.height`48`.border`0`:Y.src`assets/media/outlook-icon.png`.width`48`.height`48`.border`0`).key(u)),Yf("ical",{href:l,download:"cary-hardy-meetup.ics"},ro.viewBox`0 0 170 170`.fill`currentColor`.width`48`.height`48`(Lm("Apple Logo"),Y.src`assets/media/ical.png`.width`48`.height`48`.border`0`))),pe,g(z.style`font-size:0.7em;`(EE(q.onClick(()=>t=!t).style`color:white;`("⬜️ qr invite codes here"))))),oe.style`font-size:0.8em;opacity:0.7;line-height:0.9em;`(z("🔗 A link to virtual meetup is posted on day of meetup,",pe,"in the LE ONLY 💬 chat on Patreon.")),()=>e&&g.style`padding:.8em;font-size: .7em;`(q.class`no-a-style`.href`meetup.html`(G.type`button`("learn more"))))});function k_(n){var e=n.getDate(),t="th";return e===1||e===21||e===31?"st":e===2||e===22?"nd":e===3||e===23?"rd":t}const Yf=(n,e,t)=>{const r=q.class`small-icon-link`.href`${e.href}`.attr("target","_blank");return(e.download?r.attr("download",e.download):r)(g.class`small-icon`(t),z.style`font-size:0.5em;`(n))};function Tc(n){var e=document.createElement("textarea");e.value=n,document.body.appendChild(e),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(e)}const S_=M(({nextMeetupDate:n,onQrUrlChange:e})=>{S_.inputs(i=>{[{nextMeetupDate:n,onQrUrlChange:e}]=i,e=K(e)});const t=v_({startDateTime:n,message:He.message,subject:He.subject}),r=A_({startDateTime:n,message:He.message,subject:He.subject}),s=C_({startDateTime:n,message:He.message,subject:He.subject});return ta.style`border:0;padding:0;margin:0;`(g(g.style`display:flex;flex-wrap:wrap;gap:1em`(g(ce("Message"),g(ue.type`text`.value(i=>He.message).onChange(i=>He.message=i.target.value).style`width:100%`)),g(ce("Subject"),g(ue.type`text`.value(i=>He.subject).onChange(i=>He.subject=i.target.value).style`width:100%`))),pe,pe,g.style`display:flex;flex-wrap:wrap;gap:1em;flex-direction:column;`(g.style`display:flex;flex-grow:1`(ro.attr("xmlns","http://www.w3.org/2000/svg").attr("viewBox","0 0 48 48").attr("width","48").attr("height","48")(vE.attr("width","22").attr("height","22").attr("x","13").attr("y","13").attr("fill","#fff"),qi.attr("fill","#1e88e5").attr("points","25.68,20.92 26.688,22.36 28.272,21.208 28.272,29.56 30,29.56 30,18.616 28.56,18.616"),Mt.attr("fill","#1e88e5").attr("d","M22.943,23.745c0.625-0.574,1.013-1.37,1.013-2.249c0-1.747-1.533-3.168-3.417-3.168 c-1.602,0-2.972,1.009-3.33,2.453l1.657,0.421c0.165-0.664,0.868-1.146,1.673-1.146c0.942,0,1.709,0.646,1.709,1.44 c0,0.794-0.767,1.44-1.709,1.44h-0.997v1.728h0.997c1.081,0,1.993,0.751,1.993,1.64c0,0.904-0.866,1.64-1.931,1.64 c-0.962,0-1.784-0.61-1.914-1.418L17,26.802c0.262,1.636,1.81,2.87,3.6,2.87c2.007,0,3.64-1.511,3.64-3.368 C24.24,25.281,23.736,24.363,22.943,23.745z"),qi.attr("fill","#fbc02d").attr("points","34,42 14,42 13,38 14,34 34,34 35,38"),qi.attr("fill","#4caf50").attr("points","38,35 42,34 42,14 38,13 34,14 34,34"),Mt.attr("fill","#1e88e5").attr("d","M34,14l1-4l-1-4H9C7.343,6,6,7.343,6,9v25l4,1l4-1V14H34z"),qi.attr("fill","#e53935").attr("points","34,34 34,42 42,34"),Mt.attr("fill","#1565c0").attr("d","M39,6h-5v8h8V9C42,7.343,40.657,6,39,6z"),Mt.attr("fill","#1565c0").attr("d","M9,42h5v-8H6v5C6,40.657,7.343,42,9,42z")),ue.type`text`.style`width:100%`.value(t),G.onClick(()=>Tc(t))("copy"),G.onClick(()=>e(t))("qr")),g.style`display:flex;flex:1`(ro.attr("xmlns","http://www.w3.org/2000/svg").attr("viewBox","0 0 48 48").attr("width","48").attr("height","48")(Mt.attr("fill","#03A9F4").attr("d","M21,31c0,1.104,0.896,2,2,2h17c1.104,0,2-0.896,2-2V16c0-1.104-0.896-2-2-2H23c-1.104,0-2,0.896-2,2V31z"),Mt.attr("fill","#B3E5FC").attr("d","M42,16.975V16c0-0.428-0.137-0.823-0.367-1.148l-11.264,6.932l-7.542-4.656L22.125,19l8.459,5L42,16.975z"),Mt.attr("fill","#0277BD").attr("d","M27 41.46L6 37.46 6 9.46 27 5.46z"),Mt.attr("fill","#FFF").attr("d","M21.216,18.311c-1.098-1.275-2.546-1.913-4.328-1.913c-1.892,0-3.408,0.669-4.554,2.003c-1.144,1.337-1.719,3.088-1.719,5.246c0,2.045,0.564,3.714,1.69,4.986c1.126,1.273,2.592,1.91,4.378,1.91c1.84,0,3.331-0.652,4.474-1.975c1.143-1.313,1.712-3.043,1.712-5.199C22.869,21.281,22.318,19.595,21.216,18.311z M19.049,26.735c-0.568,0.769-1.339,1.152-2.313,1.152c-0.939,0-1.699-0.394-2.285-1.187c-0.581-0.785-0.87-1.861-0.87-3.211c0-1.336,0.289-2.414,0.87-3.225c0.586-0.81,1.368-1.211,2.355-1.211c0.962,0,1.718,0.393,2.267,1.178c0.555,0.795,0.833,1.895,0.833,3.31C19.907,24.906,19.618,25.968,19.049,26.735z")),ue.type`text`.style`width:100%`.value(r),G.onClick(()=>Tc(r))("copy"),G.onClick(()=>e(r))("qr")),g.style`display:flex;flex:1`(ro.attr("viewBox","0 0 170 170").attr("fill","currentColor").attr("width","48").attr("height","48")(Lm("Apple Logo"),Mt.attr("d","M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.24z")),ue.type`text`.style`width:100%`.value(s),G.onClick(()=>Tc(s))("copy")))))});let Xf=!1;const P_=M(n=>(e=Date.now())=>(P_.inputs(([t])=>{K(t)}),Xf||(Xf=!0,M.promise=Ra().then(t=>{typeof t=="number"&&(e=t)}).catch(t=>{console.error("Failed to load next meetup date",t)})),g.style`max-width:1200px;margin:0 auto;padding:0 1em;`(et(Y.src`assets/media/icon.png`.style`width:40px;margin-right:10px;`,"Hardy Tools"),g.style`display:flex;flex-wrap:wrap;gap:1em;text-align:left;`(Ut({href:"/admin/qr-maker.html",title:"🔗 QR Maker",description:"Create a QR code from any link and preview the encoded URL before using it."}),t=>yl({labelText:"Calendar Links",flex:"2",contentNode:S_({nextMeetupDate:e,onQrUrlChange:r=>{window.location.href=`/admin/qr-maker.html?url=${encodeURIComponent(r)}`}})}),Ut({href:"/admin/meeting-tools.html",title:"📅 Meeting Tools",description:"Update the next meetup date, save it to Firestore, and preview the public countdown."}),t=>yl({labelText:"admin users",flex:"1",contentNode:pk}),Ut({href:"/admin/user.html",title:"👥 Open Users Admin",description:"Manage authorized admin users and account access."}),Ut({href:"/admin/current-games.html",title:"🎮 Current Game Lineup",description:"Choose which games appear in the public current lineup."}),Ut({href:"/admin/past-owned-games.html",title:"📜 Past Games Owned",description:"Track previously owned games and sync new items from Pinside history."}),Ut({href:"/admin/games.html",title:"🕹️ Games Database",description:"Maintain canonical game details used by lineup and ratings."}),Ut({href:"/admin/manufacturers.html",title:"🏭 Manufacturers Database",description:"Edit manufacturer records and logos for the game database."}),Ut({href:"/admin/game-ratings.html",title:"⭐ Game Ratings",description:"Create and update public ratings, reviews, and related videos."})),pe))),Ut=M(({href:n,title:e,description:t})=>(Ut.inputs(r=>{[{href:n,title:e,description:t}]=r}),g.style`flex:1;min-width:min(320px, 100%);background:#1f1f1f;border:1px solid rgba(255,185,62,0.55);border-radius:0.8em;overflow:hidden;`(q.href`${n}`.style`display:block;padding:0.9em 1em;color:#fff;text-decoration:none;`(g.style`font-weight:800;text-align:center;`(e),oe.style`margin:0.45em 0 0;color:rgba(255,255,255,0.72);font-size:0.82em;line-height:1.35;text-align:center;`(t))))),yl=M(({labelText:n,flex:e,contentNode:t})=>{yl.inputs(i=>[{labelText:n,flex:e,contentNode:t}]=i);let r=!1;const s=()=>{r=!r};return g.style`flex:${e};min-width:min(500px, 100%);background:#1f1f1f;border:1px solid rgba(255,255,255,0.3);border-radius:0.8em;overflow:hidden;`(g.onClick(s).style`cursor:pointer;padding:0.75em 1em;color:#fff;user-select:none;font-weight:600;display:flex;gap:0.6em;align-items:center;`(g.style`width:1em;text-align:center;`(()=>r?"▼":"▶"),g(n)),()=>r?g.style`padding:0.8em 1em;border-top:1px solid rgba(255,255,255,0.2);`(i=>t):"")}),Lt=M(n=>{Lt.inputs(([i])=>{n=K(i)});let e=!1;const t=me(()=>{}),r=()=>{e=!1,t()},s=()=>{e=!e,t()};return ve(g.class`admin-nav-layout`(g.class`admin-nav-left`(G.type`button`.class`top-nav-pill`.attr("aria-expanded",i=>e?"true":"false").onClick(s)("☰ menu")),g(),g.class`admin-nav-right`(q.href`/index.html`.class`top-nav-pill`("🏠 home"),G.type`button`.class`top-nav-pill`.onClick(n)("🚪 logout"))),i=>e?ve(G.type`button`.class`admin-menu-backdrop`.onClick(r).attr("aria-label","Close menu")(""),g.class`admin-menu-panel`.attr("role","menu")(q.href`/admin.html`.class`top-nav-pill`.attr("role","menuitem")("🏠 admin home"),q.href`/admin/qr-maker.html`.class`top-nav-pill`.attr("role","menuitem")("🔗 qr maker"),q.href`/admin/meeting-tools.html`.class`top-nav-pill`.attr("role","menuitem")("📅 meeting tools"),q.href`/admin/current-games.html`.class`top-nav-pill`.attr("role","menuitem")("🎮 current lineup"),q.href`/admin/past-owned-games.html`.class`top-nav-pill`.attr("role","menuitem")("📜 past games"),q.href`/admin/games.html`.class`top-nav-pill`.attr("role","menuitem")("🕹️ games"),q.href`/admin/manufacturers.html`.class`top-nav-pill`.attr("role","menuitem")("🏭 manufacturers"),q.href`/admin/game-ratings.html`.class`top-nav-pill`.attr("role","menuitem")("⭐ ratings"),q.href`/admin/user.html`.class`top-nav-pill`.attr("role","menuitem")("👥 users"),q.href`https://github.com/AckerApple/cary-hardy`.class`top-nav-pill`.attr("role","menuitem").attr("target","_blank").attr("rel","noopener noreferrer")("🔗 code base"))):"")});let Zf=!1;const yk=M(()=>Zf?"":(Zf=!0,Vt(`
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
  `))),x_=M(({className:n="top-nav",content:e})=>(x_.inputs(t=>{[{className:n,content:e}]=t}),g.class`${n}`(g.class`top-nav-row`(typeof e=="function"?e():e)))),Qe=M(n=>(Qe.inputs(e=>{[n]=e}),ve(yk(),g.class`top-nav-shell top-nav-fixed`(x_({className:"top-nav top-nav-inner",content:n}))))),V_=M(({nextMeetupDate:n,date:e,time:t,onDate:r,onSave:s})=>(V_.inputs(i=>{[{nextMeetupDate:n,date:e,time:t,onDate:r,onSave:s}]=i,r=K(r),s=K(s)}),ta.style`border:0;padding:0;margin:0;`(i=>D_({date:e,time:t,onDate:r}),g.style`margin-top:0.6em;`(G.onClick(s)("save to firestore")),Mm,g.style`text-align:center;`(i=>Sa({date:n}))))),D_=M(({date:n,time:e,onDate:t})=>{let r=new Date(n+" "+e).getTime();D_.inputs(o=>{[{date:n,time:e,onDate:t}]=o,t=K(t),r=new Date(n+" "+e).getTime()});const s=o=>{const c=o.target.value;t(new Date(c+" "+e).getTime())},i=o=>{const c=o.target.value;t(new Date(n+" "+c).getTime())};return g.style`display:flex;flex-wrap:wrap;gap:1em`(g(ce("Date"),g(ue.type`date`.value(o=>n).onChange(s).style`width:100%`)),g(ce.attr("for","time")("Time"),g(ue.type`time`.value(o=>e).onChange(i).style`width:100%`)),g(ce.attr("for","time")("UTC"),g(o=>r)))});function ep(n){const e=new Date(n),t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),i=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0");return{date:`${t}-${r}-${s}`,time:`${i}:${o}`}}let tp=!1;const lS=M(()=>{let n="loading",e="",t=null;const r=me((c,l="",u="")=>{n=c,e=l}),s=me(c=>{t=c,console.log("currentUser",t),c||(n="login")}),i=()=>{r("login","","auth:logged-out"),n="login"},o=me((c,l="")=>{n="authorized",e=(c==null?void 0:c.email)||""});return tp||(tp=!0,Yu({onUser:(c,l)=>{Xu({user:c,mountSso:r,setCurrentUser:s,onSignedOut:i,onDenied:()=>{r("denied",(t==null?void 0:t.email)||"","auth:denied")},onAuthorized:o,reason:l})},toast:{error:c=>console.warn(c)}})),ve(Vt(`
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
    `),c=>N_(n,e,i))}),N_=M((n,e,t)=>{N_.inputs(s=>{[n,e,t]=s,t=K(t)});const r=()=>dt().then(t).catch(s=>{console.error("Failed to sign out",s)});return[()=>n==="authorized"?ve(Qe(()=>Lt(r)),P_(t)):g(ka({status:n,userEmail:e,adminEmail:"",onSignIn:()=>qu().catch(s=>{console.error("Failed to sign in",s)}),onSignOut:()=>(n="login",dt().catch(s=>{console.error("Failed to sign out",s)}))}))]}),L_=M(({user:n,onEdit:e,formatCreatedAt:t})=>(L_.inputs(r=>{[{user:n,onEdit:e,formatCreatedAt:t}]=r}),g.style`display:grid;grid-template-columns:1.1fr 1.4fr 0.7fr 0.7fr auto;gap:0.6em;align-items:center;padding:0.4em 0;`(g(r=>`${n.firstName||""} ${n.lastName||""}`.trim()||"—"),g.style`opacity:0.85;`(r=>n.email||"—"),z.style`opacity:0.85;color:${n.userType==="verified"?"#6fe3a1":"#f26d6d"};`(r=>n.userType||"unverified"),z.style`opacity:0.7;`(r=>t(n.createdAt)),G.type`button`.onClick(e).style`border:0;background:transparent;color:#fff;cursor:pointer;font-size:1.1em;`.attr("title","Edit user")("✏️")))),M_=M(({userId:n,createdAtLabel:e,editUser:t,isSaving:r,isDeleting:s,onChange:i,onSave:o,onDelete:c,onCancel:l})=>{M_.inputs(h=>{[{userId:n,createdAtLabel:e,editUser:t,isSaving:r,isDeleting:s,onChange:i,onSave:o,onDelete:c,onCancel:l}]=h});const u=h=>{i({...t,...h})};return g.style`margin-top:1em;padding-top:1em;border-top:1px solid rgba(255,255,255,0.15);display:grid;gap:0.6em;`(g.style`font-weight:600;`("Edit User"),z.style`opacity:0.6;`("User ID: ",h=>n),z.style`opacity:0.6;`("Created at: ",h=>e),g.style`display:grid;grid-template-columns:120px 1fr;gap:0.6em;align-items:center;`(z.style`opacity:0.7;`("Email"),ue.type`email`.value(h=>(t==null?void 0:t.email)||"").onInput(h=>{var f;u({email:((f=h==null?void 0:h.target)==null?void 0:f.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),z.style`opacity:0.7;`("First name"),ue.type`text`.value(h=>(t==null?void 0:t.firstName)||"").onInput(h=>{var f;u({firstName:((f=h==null?void 0:h.target)==null?void 0:f.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),z.style`opacity:0.7;`("Last name"),ue.type`text`.value(h=>(t==null?void 0:t.lastName)||"").onInput(h=>{var f;u({lastName:((f=h==null?void 0:h.target)==null?void 0:f.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),z.style`opacity:0.7;`("Status"),Bl.value(h=>(t==null?void 0:t.userType)==="verified"?"verified":"unverified").onChange(h=>{var f;u({userType:((f=h==null?void 0:h.target)==null?void 0:f.value)==="verified"?"verified":"unverified"})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(h=>nr.value`unverified`.selected(f=>t.userType==="unverified")("unverified"),h=>nr.value`verified`.selected(f=>t.userType==="verified")("verified"))),g.style`display:flex;gap:0.6em;`(G.type`button`.onClick(o).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:#1b1b1b;color:#fff;cursor:pointer;`(h=>r?"Saving...":"Save to Firestore"),G.type`button`.onClick(c).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:#4b1111;color:#fff;cursor:pointer;`(h=>s?"🗑️ Deleting...":"🗑️ Delete"),G.type`button`.onClick(l).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;cursor:pointer;`("Cancel")))});let np=!1,Ec=!1,Ls=new vt(null),an=null;const uS=M(()=>{let n="loading",e="",t=null;const r=me((c,l="",u="")=>{n=c,e=l}),s=me(c=>{t=c,c||(n="login")}),i=()=>{r("login","","auth:logged-out"),n="login"},o=me((c,l="")=>{n="authorized",e=(c==null?void 0:c.email)||""});return np||(np=!0,Yu({onUser:(c,l)=>{Xu({user:c,mountSso:r,setCurrentUser:s,onSignedOut:i,onDenied:()=>{r("denied",(t==null?void 0:t.email)||"","auth:denied")},onAuthorized:o,reason:l})},toast:{error:c=>console.warn(c)}})),ve(Vt(`
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
    `),c=>O_(n,e,i))}),O_=M((n,e,t)=>(O_.inputs(r=>{[n,e,t]=r,t=K(t)}),[()=>n==="authorized"?F_(t):g(ka({status:n,userEmail:e,adminEmail:"",onSignIn:()=>qu().catch(r=>{console.error("Failed to sign in",r)}),onSignOut:()=>(n="login",dt().catch(r=>{console.error("Failed to sign out",r)}))}))])),F_=M(n=>{F_.inputs(([O])=>{n=K(O)});const e=()=>dt().then(n).catch(O=>{console.error("Failed to sign out",O)});let t=!1,r=!1,s=!1,i="",o=null,c=null,l=null;const u=me(()=>{}),h=O=>O?typeof O.toDate=="function"?O.toDate().toLocaleDateString():typeof O=="number"?new Date(O).toLocaleDateString():O.seconds?new Date(O.seconds*1e3).toLocaleDateString():"-":"-",f=O=>{if(!O)return"-";let C=null;return typeof O.toDate=="function"?C=O.toDate():typeof O=="number"?C=new Date(O):O.seconds&&(C=new Date(O.seconds*1e3)),C?C.toLocaleString():"-"},m=()=>{an&&(an(),an=null),t=!0,i="",u(),Ls=$R(),an=(Ls==null?void 0:Ls.unsubscribe)||null},w=O=>{o=O.id,c=O.createdAt??null,l={...O},u()},I=()=>{o=null,c=null,l=null,u()},v=()=>{if(!o||r)return;r=!0,i="",u();const O={id:o,email:((l==null?void 0:l.email)||"").trim(),firstName:((l==null?void 0:l.firstName)||"").trim(),lastName:((l==null?void 0:l.lastName)||"").trim(),userType:(l==null?void 0:l.userType)==="verified"?"verified":"unverified"};M.promise=FR(O).then(()=>{I()}).catch(C=>{console.error("Failed to save user",C),i="Failed to save user.",u()}).finally(()=>{r=!1,u()})},D=()=>{!o||s||confirm("Delete this user?")&&(s=!0,i="",u(),M.promise=BR(o).then(()=>{I()}).catch(O=>{console.error("Failed to delete user",O),i="Failed to delete user.",u()}).finally(()=>{s=!1,u()}))};return Ec||(Ec=!0,an?t=!0:m()),Kt(()=>{an&&(an(),an=null),Ec=!1}),ve(Qe(()=>Lt(e)),g.class`users-page`(et("👥 Users Admin"),g.class`users-card`(g.style`margin-top:0.75em;display:grid;gap:0.5em;`(O=>i?oe.style`color:#f6c177;`(i):"",Ww(Ls,null,O=>O===null?z.style`opacity:0.7;`("Loading users..."):(t=!1,console.log("user items",{items:O,isLoading:t}),O.length?O.map(C=>L_({user:C,onEdit:()=>w(C),formatCreatedAt:h}).key(C.id)):z.style`opacity:0.7;`("No users found.")))),O=>o?M_({userId:o,createdAtLabel:f(c),editUser:l,isSaving:r,isDeleting:s,onChange:C=>{l=C,u()},onSave:v,onDelete:D,onCancel:I}):"",pe,g.class`users-actions`(q.href`../admin.html`("Back to Admin Tools")))))}),_k=`
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
`,br=(n,e="")=>{let t=!1;return M(()=>{let r="loading",s="",i=null;const o=me((h,f="",m="")=>{r=h,s=f}),c=me(h=>{i=h,h||(r="login")}),l=()=>{o("login","","auth:logged-out"),r="login"},u=me((h,f="")=>{r="authorized",s=(h==null?void 0:h.email)||""});return t||(t=!0,Yu({onUser:(h,f)=>{Xu({user:h,mountSso:o,setCurrentUser:c,onSignedOut:l,onDenied:()=>o("denied",(i==null?void 0:i.email)||"","auth:denied"),onAuthorized:u,reason:f})},toast:{error:h=>console.warn(h)}})),ve(Vt(`${_k}
${e}`),h=>U_(r,s,l,n))})},U_=M((n,e,t,r)=>(U_.inputs(s=>{[n,e,t,r]=s,t=K(t)}),[()=>n==="authorized"?r(t):g(ka({status:n,userEmail:e,adminEmail:"",onSignIn:()=>qu().catch(s=>console.error("Failed to sign in",s)),onSignOut:()=>(n="login",dt().catch(s=>console.error("Failed to sign out",s)))}))])),Pa=M(({value:n,games:e,isLoaded:t,fieldError:r,onChange:s})=>{Pa.inputs(o=>{[{value:n,games:e,isLoaded:t,fieldError:r,onChange:s}]=o,s=K(s)});const i=()=>r?"#f87171":"rgba(255,255,255,0.2)";return g.class`admin-field-with-link`(Bl.value(o=>n||"").onChange(o=>{var c;s(((c=o==null?void 0:o.target)==null?void 0:c.value)||"")}).attr("aria-invalid",o=>r?"true":"false").attr("title",o=>r||"").attr("style.borderColor",o=>i())(o=>bk(n,e,t)),q.href`/admin/games.html`.class`admin-inline-edit-link`("edit games"))}),bk=(n,e,t)=>{const r=Tk(e),s=!n||e.some(i=>i.id===n);return[nr.value``(i=>wk(e,t)),s?"":nr.value`${n}`(`Missing game: ${n}`),r.map(({manufacturer:i,items:o})=>TE.label(i)(o.map(c=>nr.value`${c.id}`(Ek(c)))))]},wk=(n,e)=>e?n.length?"Select a game":"Add games first":"Loading games...",Tk=n=>{const e=new Map;return n.forEach(t=>{const r=String(t.manufacturer||"Unknown Manufacturer").trim()||"Unknown Manufacturer";e.set(r,[...e.get(r)||[],t])}),[...e.entries()].sort(([t],[r])=>t.localeCompare(r,void 0,{sensitivity:"base"})).map(([t,r])=>({manufacturer:t,items:[...r].sort((s,i)=>String(s.title||"").localeCompare(String(i.title||""),void 0,{sensitivity:"base"}))}))},Ek=n=>[n.title||"Untitled game",n.yearReleased?String(n.yearReleased):""].filter(Boolean).join(" - "),Ic=()=>({gameId:"",dateAddedToCollection:"",notes:"",isVisible:!0});let vc=!1,Ms=null,cn=null,Mn=null,Xi=null,ln=null,On=null;const dS=br(n=>$_(n)),$_=M(n=>{$_.inputs(([P])=>{n=K(P)});const e=()=>dt().then(n).catch(P=>{console.error("Failed to sign out",P)});let t=!1,r=!1,s="",i={},o=!1,c=null,l=Ic(),u=Ms,h=Xi;const f=me(()=>{}),m=()=>{cn&&(cn(),cn=null),Mn&&(Mn(),Mn=null),u=null,Ms=null,s="",f();const P=KR();cn=(P==null?void 0:P.unsubscribe)||null;const F=P.subscribe(E=>{u=E,Ms=E,console.debug("Current games list updated",{count:(E==null?void 0:E.length)||0,items:E}),f()});Mn=()=>F.unsubscribe()},w=()=>{ln&&(ln(),ln=null),On&&(On(),On=null),h=null,Xi=null,f();const P=ms();ln=(P==null?void 0:P.unsubscribe)||null;const F=P.subscribe(E=>{h=E,Xi=E,console.debug("Game library updated",{count:(E==null?void 0:E.length)||0,items:E}),f()});On=()=>F.unsubscribe()},I=()=>YR().then(P=>{console.debug("Current games list refreshed",{count:P.length,items:P}),u=P,Ms=P,f()}).catch(P=>{console.error("Failed to refresh current games list",P),s="Saved, but failed to refresh the game list. Reload the page to confirm.",f()}),v=()=>{c=null,l=Ic(),s="",i={},o=!0,f()},D=P=>{c=P.id,l={id:P.id,gameId:P.gameId||"",title:P.title||"",dateAddedToCollection:H_(P.dateAddedToCollection),imageUrl:P.imageUrl||"",manufacturer:P.manufacturer||"",yearReleased:rp(P.yearReleased),notes:P.notes||"",isVisible:P.isVisible!==!1},s="",i={},o=!0,f()},O=()=>{t||r||(c=null,l=Ic(),s="",i={},o=!1,f())},C=()=>{const P={};!l.gameId&&!(l.title||"").trim()&&(P.gameId="Game is required."),l.dateAddedToCollection||(P.dateAddedToCollection="Date Added to Collection is required."),l.yearReleased!==null&&typeof l.yearReleased<"u"&&Number.isNaN(Number(l.yearReleased))&&(P.yearReleased="Year Released must be numeric."),i=P;const F=Object.values(P);return F.length?F[0]:""},V=()=>{if(t){console.debug("Current game save ignored because a save is already running");return}const P=C();if(P){s=P,console.warn("Current game save blocked by validation",{fieldErrors:i,game:l}),f();return}t=!0,s="",i={},f(),console.debug("Saving current game",{id:c||null,game:l}),M.promise=XR({...l,id:c||void 0,gameId:(l.gameId||"").trim(),title:(l.title||"").trim(),imageUrl:(l.imageUrl||"").trim(),manufacturer:(l.manufacturer||"").trim(),notes:(l.notes||"").trim(),yearReleased:rp(l.yearReleased),isVisible:l.isVisible!==!1}).then(()=>(console.debug("Current game saved",{id:c||null}),t=!1,O(),I())).catch(F=>{console.error("Failed to save current game",F),s="Failed to save game. Check the fields and try again.",f()}).finally(()=>{t=!1,f()})},$=()=>{!c||r||confirm("Delete this game from the current lineup?")&&(r=!0,s="",f(),M.promise=ZR(c).then(()=>(r=!1,O(),I())).catch(P=>{console.error("Failed to delete current game",P),s="Failed to delete game.",f()}).finally(()=>{r=!1,f()}))};return vc||(vc=!0,cn||m(),ln||w()),Kt(()=>{cn&&(cn(),cn=null),Mn&&(Mn(),Mn=null),ln&&(ln(),ln=null),On&&(On(),On=null),vc=!1,Ms=null,Xi=null}),ve(Qe(()=>Lt(e)),g.class`admin-crud-page`(g.class`admin-crud-header`(et("🎮 Current Game Lineup"),G.type`button`.class`admin-pill-button`.onClick(v)("Add")),g.class`admin-crud-card`(oe.style`margin-top:0;opacity:0.78;`("Manage the Firestore currentGames collection used by the public lineup page."),P=>s&&!o?oe.style`color:#f6c177;`(s):"",g.class`admin-crud-list`(P=>u===null?z.style`opacity:0.7;`("Loading games..."):u.length?u.map(F=>B_({game:Ik(F,h||[]),onClick:D}).key(F.id)):z.style`opacity:0.7;`("No games found. Use Add Game to create the first one.")),g.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(q.href`../lineup.html`.class`admin-secondary-button`("View Public Lineup"))),P=>o?j_({isEditing:!!c,editGame:l,gameLibrary:h||[],isGameLibraryLoaded:h!==null,errorMessage:s,fieldErrors:i,isSaving:t,isDeleting:r,onChange:F=>{var E;l=F,i={...i,gameId:F.gameId||(E=F.title)!=null&&E.trim()?"":i.gameId,dateAddedToCollection:F.dateAddedToCollection?"":i.dateAddedToCollection,yearReleased:F.yearReleased===null||!Number.isNaN(Number(F.yearReleased))?"":i.yearReleased},f()},onSave:V,onDelete:$,onCancel:O}):""))}),B_=M(({game:n,onClick:e})=>(B_.inputs(t=>{[{game:n,onClick:e}]=t,e=K(e)}),G.type`button`.class`admin-crud-row`.onClick(()=>e(n))(t=>n.imageUrl?Y.class`admin-crud-thumb`.src`${n.imageUrl}`.attr("alt",r=>n.title||"Game image"):g.class`admin-crud-thumb admin-crud-thumb-placeholder`("PB"),g(fr(t=>n.title||"Untitled game"),g.style`margin-top:0.15em;opacity:0.74;`(z(t=>[n.manufacturer||"",n.yearReleased?String(n.yearReleased):""].filter(Boolean).join(" · ")||"No manufacturer/year"))),z.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(Z.style`font-size:0.78em;text-transform:uppercase;`("Collected Date"),Z(t=>[vk(n.dateAddedToCollection),n.isVisible===!1?" · Hidden":""].join("")))))),Ik=(n,e)=>{const t=e.find(r=>r.id===n.gameId);return{...n,title:(t==null?void 0:t.title)||n.title||"",imageUrl:(t==null?void 0:t.imageUrl)||n.imageUrl||"",manufacturer:(t==null?void 0:t.manufacturer)||n.manufacturer||"",yearReleased:(t==null?void 0:t.yearReleased)??n.yearReleased??null}},j_=M(({isEditing:n,editGame:e,gameLibrary:t,isGameLibraryLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:c,onChange:l,onSave:u,onDelete:h,onCancel:f})=>{j_.inputs(v=>{[{isEditing:n,editGame:e,gameLibrary:t,isGameLibraryLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:c,onChange:l,onSave:u,onDelete:h,onCancel:f}]=v,l=K(l),u=K(u),h=K(h),f=K(f)});const m=v=>{l({...e,...v})},w=v=>i[v]?"#f87171":"rgba(255,255,255,0.2)",I=v=>i[v]?"#fca5a5":"inherit";return g.class`admin-crud-modal-backdrop`(g.class`admin-crud-modal`(g.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(g(et.style`margin:0;`(n?"Edit Game":"Add Game"),z.style`opacity:0.72;`(n?"Update this current lineup entry.":"Create a new current lineup entry.")),G.type`button`.class`admin-secondary-button`.onClick(f)("Cancel")),v=>s?oe.style`color:#f6c177;`(s):"",v=>Object.values(i).filter(Boolean).length?g.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(Object.values(i).filter(Boolean).map(D=>z(D))):"",g.class`admin-crud-form-grid`.style`margin-top:1em;`(ce.attr("style.color",v=>I("gameId"))("Game"),v=>Pa({value:e.gameId||"",games:t,isLoaded:r,fieldError:i.gameId,onChange:D=>m({gameId:D})}).key(`${r?"loaded":"loading"}-${t.length}`),ce.attr("style.color",v=>I("dateAddedToCollection"))("Date Added to Collection"),ue.type`date`.value(v=>e.dateAddedToCollection||"").onInput(v=>{var D;m({dateAddedToCollection:((D=v==null?void 0:v.target)==null?void 0:D.value)||""})}).attr("aria-invalid",v=>i.dateAddedToCollection?"true":"false").attr("title",v=>i.dateAddedToCollection||"").attr("style.borderColor",v=>w("dateAddedToCollection"))(),ce("Notes"),ns.value(v=>e.notes||"").onInput(v=>{var D;m({notes:((D=v==null?void 0:v.target)==null?void 0:D.value)||""})})(),ce("Visible on public page"),ce.style`display:flex;gap:0.5em;align-items:center;`(ue.type`checkbox`.attr("checked",v=>e.isVisible!==!1?"checked":null).onChange(v=>{var D;m({isVisible:!!((D=v==null?void 0:v.target)!=null&&D.checked)})})(),Z(v=>e.isVisible!==!1?"Visible":"Hidden"))),g.class`admin-crud-modal-actions`(g.style`display:flex;gap:0.7em;flex-wrap:wrap;`(G.type`button`.class`admin-pill-button`.attr("disabled",v=>o?"disabled":null).onClick(u)(v=>o?"Saving...":"Save"),G.type`button`.class`admin-secondary-button`.attr("disabled",v=>o?"disabled":null).onClick(f)("Cancel")),v=>n?G.type`button`.class`admin-danger-button`.attr("disabled",D=>c?"disabled":null).onClick(h)(D=>c?"🗑️ Deleting...":"🗑️ Delete"):"")))}),rp=n=>{if(typeof n=="number"&&!Number.isNaN(n))return n;if(n===""||n===null||typeof n>"u")return null;const e=Number(n);return Number.isNaN(e)?null:e},H_=n=>n?typeof n=="string"?n.slice(0,10):typeof n.toDate=="function"?n.toDate().toISOString().slice(0,10):n.seconds?new Date(n.seconds*1e3).toISOString().slice(0,10):"":"",vk=n=>{const e=H_(n);if(!e)return"No date";const t=new Date(`${e}T12:00:00`);return Number.isNaN(t.getTime())?e:t.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})},Ac=()=>({title:"",imageUrl:"",manufacturerId:"",manufacturer:"",yearReleased:null,notes:"",dataLinks:[]});let Cc=!1,Os=null,Fn=null,Ar=null,Zi=null,Un=null,Cr=null;const hS=br(n=>z_(n)),z_=M(n=>{z_.inputs(([P])=>{n=K(P)});const e=()=>dt().then(n).catch(P=>console.error("Failed to sign out",P));let t=Os,r=Zi,s=!1,i=null,o=Ac(),c=!1,l=!1,u="",h={};const f=me(()=>{}),m=()=>{Fn&&Fn(),Ar&&Ar(),t=null,Os=null,f();const P=ms();Fn=(P==null?void 0:P.unsubscribe)||null;const F=P.subscribe(E=>{t=E,Os=E,f()});Ar=()=>F.unsubscribe()},w=()=>Gu().then(P=>{t=P,Os=P,f()}).catch(P=>{console.error("Failed to refresh games",P),u="Saved, but failed to refresh games. Reload the page to confirm.",f()}),I=()=>{Un&&Un(),Cr&&Cr(),r=null,Zi=null,f();const P=__();Un=(P==null?void 0:P.unsubscribe)||null;const F=P.subscribe(E=>{r=E,Zi=E,f()});Cr=()=>F.unsubscribe()},v=()=>{i=null,o=Ac(),u="",h={},s=!0,f()},D=P=>{i=P.id,o={id:P.id,title:P.title||"",imageUrl:P.imageUrl||"",manufacturerId:P.manufacturerId||"",manufacturer:P.manufacturer||"",yearReleased:ip(P.yearReleased),notes:P.notes||"",dataLinks:Zn(P.dataLinks)},u="",h={},s=!0,f()},O=()=>{c||l||(i=null,o=Ac(),u="",h={},s=!1,f())},C=()=>{const P={},F=(o.id||"").trim();i&&!F&&(P.id="Game ID is required."),i&&F.includes("/")&&(P.id="Game ID cannot include /."),i&&F!==i&&(t||[]).some(_=>_.id===F)&&(P.id="A game with this ID already exists."),o.title.trim()||(P.title="Game Title is required."),o.yearReleased!==null&&Number.isNaN(Number(o.yearReleased))&&(P.yearReleased="Year Released must be numeric."),h=P;const E=Object.values(P);return E.length?E[0]:""},V=()=>{if(c)return;const P=C();if(P){u=P,f();return}c=!0,u="",h={},f();const F=(r||[]).find(_=>_.id===o.manufacturerId),E=i?(o.id||"").trim():void 0;M.promise=b_({...o,id:E||void 0,title:o.title.trim(),imageUrl:(o.imageUrl||"").trim(),manufacturerId:(o.manufacturerId||"").trim(),manufacturer:((F==null?void 0:F.name)||o.manufacturer||"").trim(),yearReleased:ip(o.yearReleased),notes:(o.notes||"").trim(),dataLinks:Zn(o.dataLinks)}).then(()=>{if(i&&E&&E!==i)return Kf(i)}).then(()=>(c=!1,O(),w())).catch(_=>{console.error("Failed to save game",_),u="Failed to save game. Check the fields and try again.",f()}).finally(()=>{c=!1,f()})},$=()=>{!i||l||confirm("Delete this game from the games collection? Existing lineup entries or ratings may still reference it.")&&(l=!0,u="",f(),M.promise=Kf(i).then(()=>(l=!1,O(),w())).catch(P=>{console.error("Failed to delete game",P),u="Failed to delete game.",f()}).finally(()=>{l=!1,f()}))};return Cc||(Cc=!0,Fn||m(),Un||I()),Kt(()=>{Fn&&Fn(),Ar&&Ar(),Un&&Un(),Cr&&Cr(),Fn=null,Ar=null,Un=null,Cr=null,Os=null,Zi=null,Cc=!1}),ve(Qe(()=>Lt(e)),g.class`admin-crud-page`(g.class`admin-crud-header`(et("🕹️ Games Database"),G.type`button`.class`admin-pill-button`.onClick(v)("Add")),g.class`admin-crud-card`(oe.style`margin-top:0;opacity:0.78;`("Manage canonical games used by lineup and ratings."),P=>u&&!s?oe.style`color:#f6c177;`(u):"",g.class`admin-crud-list`(P=>{if(r===null)return z.style`opacity:0.7;`("Loading manufacturers...");if(!r.length)return z.style`opacity:0.7;`("No manufacturers found. Add a manufacturer first.");if(t===null)return z.style`opacity:0.7;`("Loading games...");const F=t.filter(E=>!r.some(_=>q_(E,_)));return[...r.map(E=>_l({manufacturer:E,games:Ak(E,t||[]),onGameClick:D}).key(E.id)),F.length?_l({manufacturer:{id:"unmatched",name:"Unmatched Games",logoUrl:"",opinions:"Games without a matching manufacturer link."},games:F,onGameClick:D}).key("unmatched"):""]}),g.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(q.href`../admin/current-games.html`.class`admin-secondary-button`("Lineup Admin"),q.href`../admin/manufacturers.html`.class`admin-secondary-button`("Manufacturers Admin"),q.href`../admin/game-ratings.html`.class`admin-secondary-button`("Ratings Admin"))),P=>s?W_({isEditing:!!i,editGame:o,manufacturers:r||[],errorMessage:u,fieldErrors:h,isSaving:c,isDeleting:l,onChange:F=>{var E,_,T;o=F,h={...h,id:(E=F.id)!=null&&E.trim()?"":h.id,title:(_=F.title)!=null&&_.trim()?"":h.title,manufacturerId:F.manufacturerId||(T=F.manufacturer)!=null&&T.trim()?"":h.manufacturerId,yearReleased:F.yearReleased===null||!Number.isNaN(Number(F.yearReleased))?"":h.yearReleased},f()},onSave:V,onDelete:$,onCancel:O}):""))}),_l=M(({manufacturer:n,games:e,onGameClick:t})=>(_l.inputs(r=>{[{manufacturer:n,games:e,onGameClick:t}]=r,t=K(t)}),g.style`display:grid;gap:0.55em;padding:0.85em 0;border-top:1px solid rgba(255,255,255,0.12);`(g.style`display:flex;align-items:center;justify-content:space-between;gap:1em;flex-wrap:wrap;`(g.style`display:flex;align-items:center;gap:0.75em;min-width:0;`(r=>n.logoUrl?Y.class`admin-crud-thumb`.style`width:46px;height:46px;`.src`${n.logoUrl}`.attr("alt",s=>n.name||"Manufacturer logo"):g.class`admin-crud-thumb admin-crud-thumb-placeholder`.style`width:46px;height:46px;font-size:1em;`(s=>(n.name||"?").slice(0,2).toUpperCase()),g.style`min-width:0;`(fr(r=>n.name||"Untitled manufacturer"),g.style`margin-top:0.12em;opacity:0.66;`(z(r=>`${e.length} game${e.length===1?"":"s"}`))))),r=>e.length?g.style`display:grid;gap:0.55em;`(e.map(s=>G_({game:s,manufacturers:[n],onClick:t}).key(s.id))):z.style`opacity:0.7;`("No games for this manufacturer yet.")))),Ak=(n,e)=>e.filter(t=>q_(t,n)),q_=(n,e)=>n.manufacturerId===e.id||sp(n.manufacturer)===sp(e.name),G_=M(({game:n,manufacturers:e,onClick:t})=>(G_.inputs(r=>{[{game:n,manufacturers:e,onClick:t}]=r,t=K(t)}),G.type`button`.class`admin-crud-row`.onClick(()=>t(n))(r=>n.imageUrl?Y.class`admin-crud-thumb`.src`${n.imageUrl}`.attr("alt",s=>n.title||"Game image"):g.class`admin-crud-thumb admin-crud-thumb-placeholder`("PB"),g(fr(r=>n.title||"Untitled game"),g.style`margin-top:0.15em;opacity:0.74;`(z(r=>[Ck(n,e),n.yearReleased?String(n.yearReleased):""].filter(Boolean).join(" - ")||"No manufacturer/year"))),z.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(Z.style`font-size:0.78em;text-transform:uppercase;`("Game ID"),Z(r=>n.id))))),Ck=(n,e)=>{const t=e.find(r=>r.id===n.manufacturerId);return(t==null?void 0:t.name)||n.manufacturer||""},sp=n=>String(n||"").trim().toLowerCase(),W_=M(({isEditing:n,editGame:e,manufacturers:t,errorMessage:r,fieldErrors:s,isSaving:i,isDeleting:o,onChange:c,onSave:l,onDelete:u,onCancel:h})=>{W_.inputs(C=>{[{isEditing:n,editGame:e,manufacturers:t,errorMessage:r,fieldErrors:s,isSaving:i,isDeleting:o,onChange:c,onSave:l,onDelete:u,onCancel:h}]=C,c=K(c),l=K(l),u=K(u),h=K(h)});const f=C=>c({...e,...C}),m=(C,V)=>{var P,F;const $=Zn(e.dataLinks,!0);$[C]={title:((P=$[C])==null?void 0:P.title)||"",url:((F=$[C])==null?void 0:F.url)||"",...V},f({dataLinks:$})},w=()=>{f({dataLinks:[...Zn(e.dataLinks,!0),{title:"",url:""}]})},I=C=>{f({dataLinks:Zn(e.dataLinks,!0).filter((V,$)=>$!==C)})},v=C=>s[C]?"#f87171":"rgba(255,255,255,0.2)",D=C=>s[C]?"#fca5a5":"inherit",O=C=>{var V;C.key!=="Enter"||C.shiftKey||C.metaKey||C.ctrlKey||C.altKey||String(((V=C.target)==null?void 0:V.tagName)||"").toLowerCase()!=="textarea"&&(C.preventDefault(),l())};return g.class`admin-crud-modal-backdrop`(g.class`admin-crud-modal`.onKeyDown(O)(g.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(g(et.style`margin:0;`(n?"Edit Game":"Add Game"),z.style`opacity:0.72;`("Manage the canonical machine record.")),G.type`button`.class`admin-secondary-button`.onClick(h)("Cancel")),C=>r?oe.style`color:#f6c177;`(r):"",C=>Object.values(s).filter(Boolean).length?g.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(Object.values(s).filter(Boolean).map(V=>z(V))):"",g.class`admin-crud-form-grid`.style`margin-top:1em;`(C=>n?[ce.attr("style.color",V=>D("id"))("Game ID"),g.style`display:grid;gap:0.28em;`(ue.type`text`.value(V=>e.id||"").onInput(V=>{var $;f({id:(($=V==null?void 0:V.target)==null?void 0:$.value)||""})}).attr("aria-invalid",V=>s.id?"true":"false").attr("title",V=>s.id||"").attr("style.borderColor",V=>v("id"))(),z.style`color:#f6c177;line-height:1.35;`("Changing this value can change or break links to this game."))]:"",ce.attr("style.color",C=>D("title"))("Game Title"),ue.type`text`.value(C=>e.title||"").onInput(C=>{var V;f({title:((V=C==null?void 0:C.target)==null?void 0:V.value)||""})}).attr("aria-invalid",C=>s.title?"true":"false").attr("title",C=>s.title||"").attr("style.borderColor",C=>v("title"))(),ce("Game Image URL"),ue.type`url`.value(C=>e.imageUrl||"").onInput(C=>{var V;f({imageUrl:((V=C==null?void 0:C.target)==null?void 0:V.value)||""})})(),ce.attr("style.color",C=>D("manufacturerId"))("Manufacturer"),g.class`admin-field-with-link`(Bl.value(C=>e.manufacturerId||"").onChange(C=>{var V;f({manufacturerId:((V=C==null?void 0:C.target)==null?void 0:V.value)||""})}).attr("aria-invalid",C=>s.manufacturerId?"true":"false").attr("title",C=>s.manufacturerId||"").attr("style.borderColor",C=>v("manufacturerId"))([nr.value``(t.length?"Select a manufacturer":"Add a manufacturer first"),...t.map(C=>nr.value`${C.id}`(C.name||"Untitled manufacturer"))]),q.href`/admin/manufacturers.html`.class`admin-inline-edit-link`("edit manufacturers")),ce.attr("style.color",C=>D("yearReleased"))("Year Released"),ue.type`number`.value(C=>e.yearReleased??"").onInput(C=>{var V;f({yearReleased:Rk((V=C==null?void 0:C.target)==null?void 0:V.value)})}).attr("aria-invalid",C=>s.yearReleased?"true":"false").attr("title",C=>s.yearReleased||"").attr("style.borderColor",C=>v("yearReleased"))(),ce("Notes"),ns.value(C=>e.notes||"").onInput(C=>{var V;f({notes:((V=C==null?void 0:C.target)==null?void 0:V.value)||""})})(),ce("Data Links"),g.style`display:grid;gap:0.55em;`(C=>Zn(e.dataLinks,!0).length?Zn(e.dataLinks,!0).map((V,$)=>g.style`display:grid;grid-template-columns:1fr 1fr auto;gap:0.45em;align-items:center;`(ue.type`text`.placeholder`Title`.value(P=>V.title||"").onInput(P=>{var F;m($,{title:((F=P==null?void 0:P.target)==null?void 0:F.value)||""})})(),ue.type`url`.placeholder`URL`.value(P=>V.url||"").onInput(P=>{var F;m($,{url:((F=P==null?void 0:P.target)==null?void 0:F.value)||""})})(),G.type`button`.class`admin-danger-button`.onClick(()=>I($))("🗑️ Delete")).key(`data-link-${$}`)):z.style`opacity:0.72;`("No data links added."),g(G.type`button`.class`admin-secondary-button`.onClick(w)("Add Data Link")))),g.class`admin-crud-modal-actions`(g.style`display:flex;gap:0.7em;flex-wrap:wrap;`(G.type`button`.class`admin-pill-button`.attr("disabled",C=>i?"disabled":null).onClick(l)(C=>i?"Saving...":"Save"),G.type`button`.class`admin-secondary-button`.attr("disabled",C=>i?"disabled":null).onClick(h)("Cancel")),C=>n?G.type`button`.class`admin-danger-button`.attr("disabled",V=>o?"disabled":null).onClick(u)(V=>o?"🗑️ Deleting...":"🗑️ Delete"):"")))}),Rk=n=>{if(n===""||n===null||typeof n>"u")return null;const e=Number(n);return Number.isNaN(e)?null:e},ip=n=>{if(typeof n=="number"&&!Number.isNaN(n))return n;if(n===""||n===null||typeof n>"u")return null;const e=Number(n);return Number.isNaN(e)?null:e},Zn=(n,e=!1)=>Array.isArray(n)?n.map(t=>({title:((t==null?void 0:t.title)||"").trim(),url:((t==null?void 0:t.url)||"").trim()})).filter(t=>e||t.title||t.url):[],kk=new URL(""+new URL("rating-badge-CCDAE7Ja.png",import.meta.url).href,import.meta.url).href,ed=M(({rating:n,size:e=82})=>{ed.inputs(r=>{[{rating:n,size:e=82}]=r});const t=Sk(n);return g.class`rating-badge`.attr("aria-label",r=>t?`Rating ${t} out of 10`:"Not rated").attr("title",r=>t?`${t}/10`:"Not rated").style`
      width:${e}px;
      height:${e}px;
      position:relative;
      display:inline-block;
      flex:0 0 auto;
    `(Y.src`${kk}`.attr("alt","").attr("aria-hidden","true").style`
          width:100%;
          height:100%;
          display:block;
          object-fit:contain;
        `(),t?Z.style`
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
          `(t):"")}),Sk=n=>typeof n!="number"||Number.isNaN(n)?"":n.toFixed(1).replace(/\.0$/,""),Rc=()=>({gameId:"",rating:null,review:"",videos:[],isVisible:!0});let kc=!1,Fs=null,Us=null,$n=null,Rr=null,Bn=null,kr=null;const fS=br(n=>J_(n)),J_=M(n=>{J_.inputs(([_])=>{n=K(_)});const e=()=>dt().then(n).catch(_=>console.error("Failed to sign out",_));let t=Fs,r=Us,s=!1,i=null,o=Rc(),c=!1,l=!1,u="",h={};const f=me(()=>{}),m=()=>{$n&&$n(),Rr&&Rr(),r=null,Us=null,f();const _=zR();$n=(_==null?void 0:_.unsubscribe)||null;const T=_.subscribe(me(R=>{r=R,Us=R}));Rr=()=>T.unsubscribe()},w=()=>{Bn&&Bn(),kr&&kr(),t=null,Fs=null,f();const _=ms();Bn=(_==null?void 0:_.unsubscribe)||null;const T=_.subscribe(me(R=>{t=R,Fs=R}));kr=()=>T.unsubscribe()},I=()=>GR().then(_=>{r=_,Us=_,f()}).catch(_=>{console.error("Failed to refresh game ratings",_),u="Saved, but failed to refresh ratings. Reload the page to confirm.",f()}),v=()=>Gu().then(_=>{t=_,Fs=_,f()}).catch(_=>{console.error("Failed to refresh games",_)}),D=()=>t!==null?Promise.resolve(t):(f(),v().then(()=>t||[])),O=()=>{i=null,o={...Rc()},u="",h={},s=!0,f(),M.promise=D()},C=_=>{const T=_.id||_.gameId;i=T||null,o={id:T,gameId:_.gameId||_.id||"",rating:typeof _.rating=="number"?_.rating:null,review:_.review||"",videos:Array.isArray(_.videos)?_.videos:[],isVisible:_.isVisible!==!1},u="",h={},s=!0,f(),M.promise=D()},V=()=>{c||l||(i=null,o=Rc(),h={},u="",s=!1,f())},$=()=>{const _={};o.gameId||(_.gameId="Game is required."),o.rating===null||Number.isNaN(Number(o.rating))?_.rating="Rating is required.":(Number(o.rating)<0||Number(o.rating)>10)&&(_.rating="Rating must be between 0 and 10."),h=_;const T=Object.values(_);return T.length?T[0]:""},P=()=>{if(c)return;const _=$();if(_){u=_,f();return}c=!0,u="",f(),M.promise=WR({...o,id:o.gameId,rating:Number(o.rating),review:(o.review||"").trim(),videos:xk(o.videos),isVisible:o.isVisible!==!1}).then(()=>(c=!1,V(),I())).catch(T=>{console.error("Failed to save game rating",T),u="Failed to save rating. Check the fields and try again.",f()}).finally(()=>{c=!1,f()})},F=()=>{!i||l||confirm("Delete this game rating?")&&(l=!0,u="",f(),M.promise=JR(i).then(()=>(l=!1,V(),I())).catch(_=>{console.error("Failed to delete game rating",_),u="Failed to delete rating.",f()}).finally(()=>{l=!1,f()}))};kc||(kc=!0,$n||m(),Bn||w()),Kt(()=>{$n&&$n(),Rr&&Rr(),Bn&&Bn(),kr&&kr(),$n=null,Rr=null,Bn=null,kr=null,Fs=null,Us=null,kc=!1});const E=()=>r===null?z.style`opacity:0.7;`("Loading ratings..."):r.length?r.map(_=>K_({rating:_,game:Pk(_,t||[]),onClick:C}).key(_.id||_.gameId)):"";return ve(Qe(()=>Lt(e)),g.class`admin-crud-page`(g.class`admin-crud-header`(et("⭐ Game Ratings"),G.type`button`.class`admin-pill-button`.onClick(O)("Add")),g.class`admin-crud-card`(_=>u&&!s?oe.style`color:#f6c177;`(u):"",g.class`admin-crud-list`(_=>E()),g.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(q.href`../ratings.html`.class`admin-secondary-button`("View Public Ratings"))),_=>s?Q_({isEditing:!!i,editRating:o,games:t||[],isGamesLoaded:t!==null,errorMessage:u,fieldErrors:h,isSaving:c,isDeleting:l,onChange:T=>{o=T,h={...h,gameId:T.gameId?"":h.gameId,rating:T.rating!==null&&!Number.isNaN(Number(T.rating))?"":h.rating},f()},onSave:P,onDelete:F,onCancel:V}):""))}),K_=M(({game:n,rating:e,onClick:t})=>(K_.inputs(r=>{[{game:n,rating:e,onClick:t}]=r,t=K(t)}),G.type`button`.class`admin-crud-row`.onClick(()=>t(e))(r=>n!=null&&n.imageUrl?Y.class`admin-crud-thumb`.src`${n.imageUrl}`.attr("alt",s=>n.title||"Game image"):g.class`admin-crud-thumb admin-crud-thumb-placeholder`("PB"),g(fr(r=>(n==null?void 0:n.title)||e.gameId||e.id||"Untitled game"),g.style`margin-top:0.15em;opacity:0.74;`(z(r=>[(n==null?void 0:n.manufacturer)||"",n!=null&&n.yearReleased?String(n.yearReleased):""].filter(Boolean).join(" - ")||"No manufacturer/year"))),g.class`admin-rating-badge-cell`.style`display:grid;justify-items:end;gap:0.25em;`(r=>typeof(e==null?void 0:e.rating)=="number"&&!Number.isNaN(e.rating)?ed({rating:e.rating}):z.style`opacity:0.72;`("Not rated"),r=>(e==null?void 0:e.isVisible)===!1?z.style`opacity:0.72;`("Hidden"):"")))),Q_=M(({isEditing:n,editRating:e,games:t,isGamesLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:c,onChange:l,onSave:u,onDelete:h,onCancel:f})=>{Q_.inputs(C=>{[{isEditing:n,editRating:e,games:t,isGamesLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:c,onChange:l,onSave:u,onDelete:h,onCancel:f}]=C,l=K(l),u=K(u),h=K(h),f=K(f)});const m=C=>{l({...e,...C})},w=(C,V)=>{var P,F;const $=[...e.videos||[]];$[C]={url:((P=$[C])==null?void 0:P.url)||"",description:((F=$[C])==null?void 0:F.description)||"",...V},m({videos:$})},I=()=>{m({videos:[...e.videos||[],{url:"",description:""}]})},v=C=>{m({videos:(e.videos||[]).filter((V,$)=>$!==C)})},D=C=>i[C]?"#f87171":"rgba(255,255,255,0.2)",O=C=>i[C]?"#fca5a5":"inherit";return g.class`admin-crud-modal-backdrop`(g.class`admin-crud-modal`(g.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(g(et.style`margin:0;`(C=>n?"Edit Rating":"Add Rating"),z.style`opacity:0.72;`("Create or update the public rating for this game.")),G.type`button`.class`admin-secondary-button`.onClick(f)("Cancel")),C=>s?oe.style`color:#f6c177;`(s):"",C=>Object.values(i).filter(Boolean).length?g.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(Object.values(i).filter(Boolean).map(V=>z(V))):"",g.class`admin-crud-form-grid`.style`margin-top:1em;`(ce.attr("style.color",C=>O("gameId"))("Game"),C=>Pa({value:e.gameId||"",games:t,isLoaded:r,fieldError:i.gameId,onChange:V=>m({gameId:V})}).key(`${r?"loaded":"loading"}-${t.length}`),ce.attr("style.color",C=>O("rating"))("Rating"),ue.type`number`.attr("min","0").attr("max","10").attr("step","0.1").value(C=>e.rating??"").onInput(C=>{var V;m({rating:Vk((V=C==null?void 0:C.target)==null?void 0:V.value)})}).attr("aria-invalid",C=>i.rating?"true":"false").attr("title",C=>i.rating||"").attr("style.borderColor",C=>D("rating"))(),ce("Review"),ns.value(C=>e.review||"").onInput(C=>{var V;m({review:((V=C==null?void 0:C.target)==null?void 0:V.value)||""})})(),ce("Videos"),g.style`display:grid;gap:0.6em;`(C=>(e.videos||[]).length?(e.videos||[]).map((V,$)=>g.style`display:grid;gap:0.45em;border:1px solid rgba(255,255,255,0.12);border-radius:0.55em;padding:0.65em;background:rgba(0,0,0,0.18);`(g.style`display:grid;grid-template-columns:1fr auto;gap:0.45em;align-items:center;`(ue.type`url`.style`width:100%;`.value(P=>V.url||"").attr("placeholder","YouTube video URL").onInput(P=>{var F;w($,{url:((F=P==null?void 0:P.target)==null?void 0:F.value)||""})})(),P=>V.url?q.href`${V.url}`.class`admin-secondary-button`.style`text-decoration:none;`.attr("target","_blank").attr("rel","noopener noreferrer").attr("title","Open video link")("🔗"):""),ue.type`text`.style`width:100%;`.value(P=>V.description||"").attr("placeholder","Description").onInput(P=>{var F;w($,{description:((F=P==null?void 0:P.target)==null?void 0:F.value)||""})})(),g.style`display:flex;justify-content:flex-end;`(G.type`button`.class`admin-secondary-button`.onClick(()=>v($))("🗑️ Remove")))):z.style`opacity:0.72;`("No videos linked."),G.type`button`.class`admin-secondary-button`.onClick(I)("Add Video")),ce("Visible on public page"),ce.style`display:flex;gap:0.5em;align-items:center;`(ue.type`checkbox`.attr("checked",C=>e.isVisible!==!1?"checked":null).onChange(C=>{var V;m({isVisible:!!((V=C==null?void 0:C.target)!=null&&V.checked)})})(),Z(C=>e.isVisible!==!1?"Visible":"Hidden"))),g.class`admin-crud-modal-actions`(g.style`display:flex;gap:0.7em;flex-wrap:wrap;`(G.type`button`.class`admin-pill-button`.attr("disabled",C=>o?"disabled":null).onClick(u)(C=>o?"Saving...":"Save"),G.type`button`.class`admin-secondary-button`.attr("disabled",C=>o?"disabled":null).onClick(f)("Cancel")),C=>n?G.type`button`.class`admin-danger-button`.attr("disabled",V=>c?"disabled":null).onClick(h)(V=>c?"🗑️ Deleting...":"🗑️ Delete"):"")))}),Pk=(n,e)=>{const t=n.gameId||n.id;return e.find(r=>r.id===t)||null},xk=n=>Array.isArray(n)?n.map(e=>({url:((e==null?void 0:e.url)||"").trim(),description:((e==null?void 0:e.description)||"").trim()})).filter(e=>e.url||e.description):[],Vk=n=>{if(n===""||n===null||typeof n>"u")return null;const e=Number(n);return Number.isNaN(e)?null:e},Sc=()=>({name:"",logoUrl:"",opinions:""});let Pc=!1,jn=null,Hn=null,Sr=null;const pS=br(n=>Y_(n)),Y_=M(n=>{Y_.inputs(([V])=>{n=K(V)});const e=()=>dt().then(n).catch(V=>console.error("Failed to sign out",V));let t=jn,r=!1,s=null,i=Sc(),o=!1,c=!1,l="",u={};const h=()=>{Hn&&Hn(),Sr&&Sr(),t=null,jn=null;const V=__();Hn=(V==null?void 0:V.unsubscribe)||null;const $=V.subscribe(P=>{t=P,jn=P});Sr=()=>$.unsubscribe()},f=()=>jR().then(V=>{t=V,jn=V}).catch(V=>{console.error("Failed to refresh manufacturers",V),l="Saved, but failed to refresh manufacturers. Reload the page to confirm."});M.promise=f();const m=(V,$)=>{const P=t||jn||[],F={...P.find(T=>T.id===V)||{},...$,id:V},E=P.some(T=>T.id===V),_=Dk(E?P.map(T=>T.id===V?F:T):[...P,F]);t=_,jn=_},w=()=>{s=null,i=Sc(),l="",u={},r=!0},I=V=>{s=V.id,i={id:V.id,name:V.name||"",logoUrl:V.logoUrl||"",opinions:V.opinions||""},l="",u={},r=!0},v=()=>{o||c||(s=null,i=Sc(),l="",u={},r=!1)},D=()=>{const V={},$=(i.id||"").trim();s&&!$&&(V.id="Manufacturer ID is required."),s&&$.includes("/")&&(V.id="Manufacturer ID cannot include /."),s&&$!==s&&(t||[]).some(F=>F.id===$)&&(V.id="A manufacturer with this ID already exists."),i.name.trim()||(V.name="Manufacturer Name is required."),u=V;const P=Object.values(V);return P.length?P[0]:""},O=()=>{if(o)return;const V=D();if(V){l=V;return}o=!0,l="",u={};const $={...i,id:s?(i.id||"").trim():void 0,name:i.name.trim(),logoUrl:(i.logoUrl||"").trim(),opinions:(i.opinions||"").trim()},P=s;return HR($).then(F=>{const E=$.id||P||(F==null?void 0:F.id);if(E&&m(E,$),P&&E&&E!==P)return Jf(P)}).then(()=>(o=!1,v(),f())).catch(F=>{console.error("Failed to save manufacturer",F),l="Failed to save manufacturer. Check the fields and try again."}).finally(()=>{o=!1})},C=()=>{!s||c||confirm("Delete this manufacturer? Existing games may still reference it.")&&(c=!0,l="",M.promise=Jf(s).then(()=>(c=!1,v(),f())).catch(V=>{console.error("Failed to delete manufacturer",V),l="Failed to delete manufacturer."}).finally(()=>{c=!1}))};return Pc||(Pc=!0,Hn||h()),Kt(()=>{Hn&&Hn(),Sr&&Sr(),Hn=null,Sr=null,jn=null,Pc=!1}),ve(Qe(()=>Lt(e)),g.class`admin-crud-page`(g.class`admin-crud-header`(et("🏭 Manufacturers Database"),G.type`button`.class`admin-pill-button`.onClick(w)("Add")),g.class`admin-crud-card`(V=>l&&!r?oe.style`color:#f6c177;`(l):"",g.class`admin-crud-list`(V=>t===null?z.style`opacity:0.7;`("Loading manufacturers..."):t.length?t.map($=>X_({manufacturer:$,onClick:I}).key($.id)):z.style`opacity:0.7;`("No manufacturers found. Use Add Manufacturer to create the first one.")),g.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(q.href`../admin/games.html`.class`admin-secondary-button`("Games Admin"))),V=>r?Z_({isEditing:!!s,editManufacturer:i,errorMessage:l,fieldErrors:u,isSaving:o,isDeleting:c,onChange:$=>{var P,F;i=$,u={...u,id:(P=$.id)!=null&&P.trim()?"":u.id,name:(F=$.name)!=null&&F.trim()?"":u.name}},onSave:O,onDelete:C,onCancel:v}):""))}),Dk=n=>[...n].sort((e,t)=>String(e.name||"").localeCompare(String(t.name||""),void 0,{sensitivity:"base"})),X_=M(({manufacturer:n,onClick:e})=>(X_.inputs(t=>{[{manufacturer:n,onClick:e}]=t,e=K(e)}),G.type`button`.class`admin-crud-row`.onClick(()=>e(n))(t=>n.logoUrl?Y.class`admin-crud-thumb`.src`${n.logoUrl}`.attr("alt",r=>n.name||"Manufacturer logo"):g.class`admin-crud-thumb admin-crud-thumb-placeholder`(r=>Nk(n.name)),g(fr(t=>n.name||"Untitled manufacturer"),g.style`margin-top:0.15em;opacity:0.74;`(z(t=>n.opinions||"No opinions"))),z.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(Z.style`font-size:0.78em;text-transform:uppercase;`("Manufacturer ID"),Z(t=>n.id))))),Nk=(n="")=>(n.trim().charAt(0)||"M").toUpperCase(),Z_=M(({isEditing:n,editManufacturer:e,errorMessage:t,fieldErrors:r,isSaving:s,isDeleting:i,onChange:o,onSave:c,onDelete:l,onCancel:u})=>{Z_.inputs(I=>{[{isEditing:n,editManufacturer:e,errorMessage:t,fieldErrors:r,isSaving:s,isDeleting:i,onChange:o,onSave:c,onDelete:l,onCancel:u}]=I,o=K(o),c=K(c),l=K(l),u=K(u)});const h=I=>o({...e,...I}),f=I=>r[I]?"#f87171":"rgba(255,255,255,0.2)",m=I=>r[I]?"#fca5a5":"inherit",w=I=>{var v;I.key!=="Enter"||I.shiftKey||I.metaKey||I.ctrlKey||I.altKey||String(((v=I.target)==null?void 0:v.tagName)||"").toLowerCase()!=="textarea"&&(I.preventDefault(),c())};return g.class`admin-crud-modal-backdrop`(g.class`admin-crud-modal`.onKeyDown(w)(g.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(g(et.style`margin:0;`(n?"Edit Manufacturer":"Add Manufacturer"),z.style`opacity:0.72;`("Manage the canonical manufacturer record.")),G.type`button`.class`admin-secondary-button`.onClick(u)("Cancel")),I=>t?oe.style`color:#f6c177;`(t):"",I=>Object.values(r).filter(Boolean).length?g.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(Object.values(r).filter(Boolean).map(v=>z(v))):"",g.class`admin-crud-form-grid`.style`margin-top:1em;`(I=>n?[ce.attr("style.color",v=>m("id"))("Manufacturer ID"),g.style`display:grid;gap:0.28em;`(ue.type`text`.value(v=>e.id||"").onInput(v=>{var D;h({id:((D=v==null?void 0:v.target)==null?void 0:D.value)||""})}).attr("aria-invalid",v=>r.id?"true":"false").attr("title",v=>r.id||"").attr("style.borderColor",v=>f("id"))(),z.style`color:#f6c177;line-height:1.35;`("Changing this value can change or break links to this manufacturer."))]:"",ce.attr("style.color",I=>m("name"))("Manufacturer Name"),ue.type`text`.value(I=>e.name||"").onInput(I=>{var v;h({name:((v=I==null?void 0:I.target)==null?void 0:v.value)||""})}).attr("aria-invalid",I=>r.name?"true":"false").attr("title",I=>r.name||"").attr("style.borderColor",I=>f("name"))(),ce("Logo URL"),ue.type`url`.value(I=>e.logoUrl||"").onInput(I=>{var v;h({logoUrl:((v=I==null?void 0:I.target)==null?void 0:v.value)||""})})(),ce("Opinions"),ns.value(I=>e.opinions||"").onInput(I=>{var v;h({opinions:((v=I==null?void 0:I.target)==null?void 0:v.value)||""})})()),g.class`admin-crud-modal-actions`(g.style`display:flex;gap:0.7em;flex-wrap:wrap;`(G.type`button`.class`admin-pill-button`.attr("disabled",I=>s?"disabled":null).onClick(c)(I=>s?"Saving...":"Save"),G.type`button`.class`admin-secondary-button`.attr("disabled",I=>s?"disabled":null).onClick(u)("Cancel")),I=>n?G.type`button`.class`admin-danger-button`.attr("disabled",v=>i?"disabled":null).onClick(l)(v=>i?"🗑️ Deleting...":"🗑️ Delete"):"")))});let op=!1,eo=null;const mS=br(n=>e0(n)),e0=M(n=>(e=eo||Date.now(),{date:t,time:r}=ep(Number(e)))=>{e0.inputs(([l])=>{n=K(l)});const s=me(()=>{});function i(){const l=ep(Number(e));t=l.date,r=l.time}op||(op=!0,M.promise=Ra().then(l=>{typeof l=="number"&&(e=l,eo=l,i(),s())}).catch(l=>{console.error("Failed to load next meetup date",l)}));const o=()=>dt().then(n).catch(l=>{console.error("Failed to sign out",l)}),c=()=>OR(Number(e)).then(()=>{eo=Number(e),alert("saved")}).catch(l=>{console.error("Failed to save meetup date",l)});return ve(Qe(()=>Lt(o)),g.class`admin-crud-page`(g.class`admin-crud-header`(et(Y.src`../assets/media/icon.png`.style`width:40px;margin-right:10px;`,"📅 Meeting Tools")),g.class`admin-crud-card`(V_({nextMeetupDate:e,date:t,time:r,onDate:l=>{e=l,eo=l,i(),s()},onSave:c}))))}),Lk="https://pinside.com/pinball/community/pinsiders/thecapn/collection/history",xc=()=>({gameId:"",title:"",dateAddedToCollection:"",dateRemovedFromCollection:"",notes:"",isVisible:!0,pinsideUrl:"",pinsideId:"",source:""});let Vc=!1,$s=null,zn=null,Pr=null,Bs=null,qn=null,xr=null;const gS=br(n=>t0(n)),t0=M(n=>{t0.inputs(([b])=>{n=K(b)});const e=()=>dt().then(n).catch(b=>console.error("Failed to sign out",b));let t=!1,r=!1,s=!1,i="",o="",c="",l=!1,u={},h=!1,f=null,m=xc(),w=$s,I=Bs;const v=me(()=>{}),D=()=>{zn&&zn(),Pr&&Pr(),w=null,$s=null,i="",v();const b=ek();zn=(b==null?void 0:b.unsubscribe)||null;const ne=b.subscribe($e=>{w=$e,$s=$e,v()});Pr=()=>ne.unsubscribe()},O=()=>{qn&&qn(),xr&&xr(),I=null,Bs=null,v();const b=ms();qn=(b==null?void 0:b.unsubscribe)||null;const ne=b.subscribe($e=>{I=$e,Bs=$e,v()});xr=()=>ne.unsubscribe()},C=()=>w_().then(b=>{w=b,$s=b,v()}).catch(b=>{console.error("Failed to refresh past owned games list",b),i="Saved, but failed to refresh the game list. Reload the page to confirm.",v()}),V=()=>Gu().then(b=>{I=b,Bs=b,v()}).catch(b=>{console.error("Failed to refresh games library",b),i="Saved, but failed to refresh the games library. Reload the page to confirm.",v()}),$=()=>{f=null,m=xc(),i="",u={},h=!0,v()},P=b=>{f=b.id,m={id:b.id,gameId:b.gameId||"",title:"",dateAddedToCollection:bl(b.dateAddedToCollection),dateRemovedFromCollection:bl(b.dateRemovedFromCollection),imageUrl:b.imageUrl||"",manufacturer:b.manufacturer||"",yearReleased:lp(b.yearReleased),notes:b.notes||"",isVisible:b.isVisible!==!1,pinsideUrl:b.pinsideUrl||"",pinsideId:b.pinsideId||"",source:b.source||""},i="",u={},h=!0,v()},F=()=>{t||r||(f=null,m=xc(),i="",u={},h=!1,v())},E=()=>{const b={};return m.gameId||(b.gameId="Game is required."),m.yearReleased!==null&&typeof m.yearReleased<"u"&&Number.isNaN(Number(m.yearReleased))&&(b.yearReleased="Year must be numeric."),u=b,Object.values(b)[0]||""},_=()=>{if(t)return;const b=E();if(b){i=b,v();return}t=!0,i="",u={},v(),M.promise=T_({...m,id:f||void 0,gameId:(m.gameId||"").trim(),title:"",imageUrl:(m.imageUrl||"").trim(),manufacturer:(m.manufacturer||"").trim(),notes:(m.notes||"").trim(),pinsideUrl:(m.pinsideUrl||"").trim(),pinsideId:(m.pinsideId||"").trim(),source:(m.source||"").trim(),yearReleased:lp(m.yearReleased),isVisible:m.isVisible!==!1}).then(()=>(t=!1,F(),C())).catch(ne=>{console.error("Failed to save past owned game",ne),i="Failed to save game. Check the fields and try again.",v()}).finally(()=>{t=!1,v()})},T=()=>{!f||r||confirm("Delete this past owned game?")&&(r=!0,i="",v(),M.promise=nk(f).then(()=>(r=!1,F(),C())).catch(b=>{console.error("Failed to delete past owned game",b),i="Failed to delete game.",v()}).finally(()=>{r=!1,v()}))},R=b=>{if(!b.length){o="No Pinside games were found. Paste the copied Pinside history text and try again.",v();return}s=!0,o=`Found ${b.length} Pinside game${b.length===1?"":"s"}. Syncing new items only...`,v(),M.promise=rk(b,I||[]).then(ne=>(o=`Sync complete. Added ${ne.added}; skipped ${ne.skipped} already-present item${ne.skipped===1?"":"s"}.`,V().then(C))).catch(ne=>{console.error("Failed to sync Pinside games",ne),o="Sync failed while writing to Firestore. Check permissions and try again.",v()}).finally(()=>{s=!1,v()})},A=()=>{const b=Fk(c);R(b)},S=()=>{l=!l,v()};return Vc||(Vc=!0,zn||D(),qn||O()),Kt(()=>{zn&&zn(),Pr&&Pr(),qn&&qn(),xr&&xr(),zn=null,Pr=null,qn=null,xr=null,Vc=!1,$s=null,Bs=null}),ve(Qe(()=>Lt(e)),g.class`admin-crud-page`(g.class`admin-crud-header`(et("📜 Past Games Owned"),g.style`display:flex;gap:0.75em;align-items:center;flex-wrap:wrap;`(z.style`opacity:0.72;`(b=>w===null?"Loading count...":`${w.length} past game${w.length===1?"":"s"}`),G.type`button`.class`admin-pill-button`.onClick($)("Add"))),g.class`admin-crud-card`.style`margin-bottom:1em;`(g.style`display:flex;gap:0.75em;flex-wrap:wrap;align-items:center;`(G.type`button`.class`admin-secondary-button`.attr("aria-expanded",b=>l?"true":"false").onClick(S)("Pinside Sync")),b=>l?g.style`margin-top:0.9em;`(oe.style`margin-top:0;opacity:0.78;`("Paste copied Pinside history text to add missing past-owned games. Imported games are created in the games database and linked here."),g.style`display:flex;gap:0.75em;flex-wrap:wrap;align-items:center;`(q.href`${Lk}`.class`admin-secondary-button`.attr("target","_blank").attr("rel","noopener noreferrer")("Open Pinside History"),G.type`button`.class`admin-pill-button`.attr("disabled",ne=>s?"disabled":null).onClick(A)("Sync Pasted Text")),ne=>o?oe.style`color:#f6c177;`(o):"",ns.placeholder`Paste copied Pinside history text here.`.value(ne=>c).onInput(ne=>{var $e;c=(($e=ne==null?void 0:ne.target)==null?void 0:$e.value)||"",v()}).style`margin-top:0.8em;width:100%;min-height:120px;`()):""),g.class`admin-crud-card`(oe.style`margin-top:0;opacity:0.78;`("Manage the Firestore pastOwnedGames collection."),b=>i&&!h?oe.style`color:#f6c177;`(i):"",g.class`admin-crud-list`(b=>w===null?z.style`opacity:0.7;`("Loading games..."):w.length?Ok(w).map(ne=>n0({game:Mk(ne,I||[]),onClick:P}).key(ne.id)):z.style`opacity:0.7;`("No past owned games found. Use Add or paste Pinside history text."))),b=>h?r0({isEditing:!!f,editGame:m,gameLibrary:I||[],isGameLibraryLoaded:I!==null,errorMessage:i,fieldErrors:u,isSaving:t,isDeleting:r,onChange:ne=>{m=ne,u={...u,gameId:ne.gameId?"":u.gameId},v()},onSave:_,onDelete:T,onCancel:F}):""))}),n0=M(({game:n,onClick:e})=>(n0.inputs(t=>{[{game:n,onClick:e}]=t,e=K(e)}),G.type`button`.class`admin-crud-row`.onClick(()=>e(n))(t=>n.imageUrl?Y.class`admin-crud-thumb`.src`${n.imageUrl}`.attr("alt",r=>n.title||"Game image"):g.class`admin-crud-thumb admin-crud-thumb-placeholder`("PB"),g(fr(t=>n.title||"Untitled game"),g.style`margin-top:0.15em;opacity:0.74;`(z(t=>[n.manufacturer||"",n.yearReleased?String(n.yearReleased):""].filter(Boolean).join(" · ")||"No manufacturer/year",t=>n.gameId&&n.isMissingGame?Z.style`color:#f87171;font-weight:700;`(` · Missing game: ${n.gameId}`):"",t=>n.source==="pinside"?" · Pinside":""))),z.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(Z.style`font-size:0.78em;text-transform:uppercase;`("Past Owned"),Z(t=>[up(n.dateAddedToCollection),n.dateRemovedFromCollection?` to ${up(n.dateRemovedFromCollection)}`:"",n.isVisible===!1?" · Hidden":""].join("")))))),Mk=(n,e)=>{const t=e.find(r=>r.id===n.gameId);return{...n,title:(t==null?void 0:t.title)||n.title||n.sourceTitle||"",imageUrl:(t==null?void 0:t.imageUrl)||n.imageUrl||"",manufacturer:(t==null?void 0:t.manufacturer)||n.manufacturer||"",yearReleased:(t==null?void 0:t.yearReleased)??n.yearReleased??null,isMissingGame:!!(n.gameId&&!t)}},Ok=n=>[...n].sort((e,t)=>{const r=(e.gameId||"").localeCompare(t.gameId||"",void 0,{sensitivity:"base"});return r||(e.id||"").localeCompare(t.id||"",void 0,{sensitivity:"base"})}),r0=M(({isEditing:n,editGame:e,gameLibrary:t,isGameLibraryLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:c,onChange:l,onSave:u,onDelete:h,onCancel:f})=>{r0.inputs(w=>{[{isEditing:n,editGame:e,gameLibrary:t,isGameLibraryLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:c,onChange:l,onSave:u,onDelete:h,onCancel:f}]=w,l=K(l),u=K(u),h=K(h),f=K(f)});const m=w=>{l({...e,...w})};return g.class`admin-crud-modal-backdrop`(g.class`admin-crud-modal`(g.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(g(et.style`margin:0;`(n?"Edit Past Game":"Add Past Game"),z.style`opacity:0.72;`(n?"Update this past owned entry.":"Create a new past owned entry.")),G.type`button`.class`admin-secondary-button`.onClick(f)("Cancel")),w=>s?oe.style`color:#f6c177;`(s):"",g.class`admin-crud-form-grid`.style`margin-top:1em;`(ce("Game"),w=>Pa({value:e.gameId||"",games:t,isLoaded:r,fieldError:i.gameId,onChange:I=>m({gameId:I})}).key(`${r?"loaded":"loading"}-${t.length}`),ce("Date Added to Collection"),ue.type`date`.value(w=>e.dateAddedToCollection||"").onInput(w=>{var I;m({dateAddedToCollection:((I=w==null?void 0:w.target)==null?void 0:I.value)||""})})(),ce("Date Removed from Collection"),ue.type`date`.value(w=>e.dateRemovedFromCollection||"").onInput(w=>{var I;m({dateRemovedFromCollection:((I=w==null?void 0:w.target)==null?void 0:I.value)||""})})(),ce("Pinside URL"),ue.type`url`.value(w=>e.pinsideUrl||"").onInput(w=>{var I;m({pinsideUrl:((I=w==null?void 0:w.target)==null?void 0:I.value)||""})})(),ce("Notes"),ns.value(w=>e.notes||"").onInput(w=>{var I;m({notes:((I=w==null?void 0:w.target)==null?void 0:I.value)||""})})(),ce("Visible on public page"),ce.style`display:flex;gap:0.5em;align-items:center;`(ue.type`checkbox`.attr("checked",w=>e.isVisible!==!1?"checked":null).onChange(w=>{var I;m({isVisible:!!((I=w==null?void 0:w.target)!=null&&I.checked)})})(),Z(w=>e.isVisible!==!1?"Visible":"Hidden"))),g.class`admin-crud-modal-actions`(g.style`display:flex;gap:0.7em;flex-wrap:wrap;`(G.type`button`.class`admin-pill-button`.attr("disabled",w=>o?"disabled":null).onClick(u)(w=>o?"Saving...":"Save"),G.type`button`.class`admin-secondary-button`.attr("disabled",w=>o?"disabled":null).onClick(f)("Cancel")),w=>n?G.type`button`.class`admin-danger-button`.attr("disabled",I=>c?"disabled":null).onClick(h)(I=>c?"🗑️ Deleting...":"🗑️ Delete"):"")))}),Fk=n=>{if(!n.trim())return[];const e=Uk(n);return e.length?e:$k(n)},Uk=n=>{const e=new DOMParser().parseFromString(n,"text/html"),t=Array.from(e.querySelectorAll('a[href*="/pinball/machine/"]')),r=new Map;return t.forEach(s=>{var I;const i=s0(s.textContent||s.getAttribute("title")||"");if(!i||i.length<2)return;const o=s.getAttribute("href")||"",c=o.startsWith("http")?o:`https://pinside.com${o}`,l=s.closest("tr, li, article, .game, .machine, .collection-item")||s.parentElement,u=l==null?void 0:l.querySelector("img"),h=(u==null?void 0:u.getAttribute("src"))||(u==null?void 0:u.getAttribute("data-src"))||"",m=((l==null?void 0:l.textContent)||"").match(/\b(19\d{2}|20\d{2})\b/),w=((I=c.split("/pinball/machine/")[1])==null?void 0:I.split(/[/?#]/)[0])||"";r.set(c,{title:i,pinsideUrl:c,pinsideId:w,imageUrl:h.startsWith("//")?`https:${h}`:h,yearReleased:m?Number(m[1]):null})}),[...r.values()].sort((s,i)=>s.title.localeCompare(i.title,void 0,{sensitivity:"base"}))},$k=n=>{const e=n.split(/\r?\n/).map(s=>s.trim()).filter(Boolean),t=[];let r=0;for(;r<e.length;){const s=s0(e[r]||""),i=e[r+1]||"",o=ap(i);if(!s||!o){r+=1;continue}const c={title:s,manufacturer:o.manufacturer,yearReleased:o.yearReleased};for(r+=2;r<e.length;){const l=e[r];if(ap(e[r+1]||"")&&!Bk(l))break;const h=cp(l,"Purchased"),f=cp(l,"Sold");h?c.dateAddedToCollection=h:f&&(c.dateRemovedFromCollection=f),r+=1}t.push(c)}return t},ap=n=>{const e=n.match(/^(.+),\s*(19\d{2}|20\d{2})$/);return e?{manufacturer:e[1].trim(),yearReleased:Number(e[2])}:null},Bk=n=>/^(Purchased|Sold)\s+[A-Za-z]+\s+\d{4}$/i.test(n),cp=(n,e)=>{const t=n.match(new RegExp(`^${e}\\s+([A-Za-z]+)\\s+(\\d{4})$`,"i"));if(!t)return"";const r=jk.findIndex(s=>s.toLowerCase()===t[1].toLowerCase());return r<0?"":`${t[2]}-${String(r+1).padStart(2,"0")}-01`},jk=["January","February","March","April","May","June","July","August","September","October","November","December"],s0=n=>n.replace(/\s+/g," ").replace(/\b(details|machine|view)\b/gi,"").trim(),lp=n=>{if(typeof n=="number"&&!Number.isNaN(n))return n;if(n===""||n===null||typeof n>"u")return null;const e=Number(n);return Number.isNaN(e)?null:e},bl=n=>n?typeof n=="string"?n.slice(0,10):typeof n.toDate=="function"?n.toDate().toISOString().slice(0,10):n.seconds?new Date(n.seconds*1e3).toISOString().slice(0,10):"":"",up=n=>{const e=bl(n);if(!e)return"No date";const t=new Date(`${e}T12:00:00`);return Number.isNaN(t.getTime())?e:t.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})};let to=null;const Hk=()=>window.QRCode?Promise.resolve():to||(to=new Promise((n,e)=>{const t=document.createElement("script");t.type="text/javascript",t.src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js",t.onload=()=>n(),t.onerror=()=>e(new Error("Failed to load QRCode library")),document.head.appendChild(t)}),to),i0=M(n=>{i0.updates(i=>{i[0]!==n&&([n]=i,s())});const e=`qr-code-${Math.random().toString(36).slice(2,12)}`,t=()=>{window.requestAnimationFrame(s)},r=()=>{const i=window.QRCode;if(!i||!n)return;const o=document.getElementById(e);o&&(o.innerHTML="",new i(o,{text:n,width:300,height:300,colorDark:"#000000",colorLight:"#ffffff",correctLevel:i.CorrectLevel.L}))},s=()=>{Hk().then(r).catch(i=>{console.error("Failed to render QR code",i)})};return fm([n],t),g.id`${e}`}),o0=M(({qrUrl:n,onQrUrlChange:e})=>(o0.inputs(t=>{[{qrUrl:n,onQrUrlChange:e}]=t,e=K(e),console.log("latest qrUrl",{qrUrl:n,x:t})}),ta.style`border:0;padding:0;margin:0;`(ue.type`text`.placeholder`paste website address`.value(t=>n).maxLength`1000`.onKeyUp(t=>(n=t.target.value,e(t.target.value))).onInput(t=>(n=t.target.value,e(t.target.value))),g.style`display:flex;flex-direction:column;align-items:center;gap:0.5em;`(t=>n&&i0(n),t=>n&&z.style`max-width:300px;overflow-wrap:anywhere;text-align:center;opacity:0.75;line-height:1.3;`(r=>n))))),yS=br(n=>a0(n)),a0=M(n=>(e=new URLSearchParams(window.location.search).get("url")||"")=>{a0.inputs(([s])=>{n=K(s)});const t=me(()=>{}),r=()=>dt().then(n).catch(s=>{console.error("Failed to sign out",s)});return ve(Qe(()=>Lt(r)),g.class`admin-crud-page`(g.class`admin-crud-header`(et(Y.src`../assets/media/icon.png`.style`width:40px;margin-right:10px;`,"🔗 QR Maker")),g.class`admin-crud-card`(o0({qrUrl:e,onQrUrlChange:s=>{e=s,t()}}))))}),gs=M(()=>[q.href`/index.html`.class`top-nav-pill`("🏠"),q.href`/meetup.html`.class`top-nav-pill`("🗓️ meetups"),q.href`/lineup.html`.class`top-nav-pill`("🎮 games"),q.href`/ratings.html`.class`top-nav-pill`("⭐ ratings"),q.href`/index.html#links`.class`top-nav-pill`("🔗 links"),q.href`/index.html#merch`.class`top-nav-pill`("👕 merch & more"),q.href`/index.html#youtube`.class`top-nav-pill`("📺 youtube"),q.href`/index.html#awards`.class`top-nav-pill`("🏆 awards"),q.href`/admin.html`.class`top-nav-pill`("👤")]);let dp=!1;const zk=M(()=>dp?"":(dp=!0,Vt(`
    .public-footer {
      width: 100%;
      box-sizing: border-box;
      margin-top: 3em;
      padding: 0.65em 0.9em;
      background: #000;
      border-top: 1px solid rgba(255,255,255,0.14);
      color: rgba(255,255,255,0.82);
      font-size: 0.58em;
    }
    .public-footer-inner {
      width: min(1120px, 100%);
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1em;
    }
    .public-footer a {
      color: rgba(255,255,255,0.9);
      text-decoration: none;
    }
    .public-footer a:hover {
      color: #fff;
      text-decoration: underline;
      text-underline-offset: 0.18em;
    }
  `))),ys=M(()=>ve(zk(),g.class`public-footer`(g.class`public-footer-inner`(q.href`mailto:hardypinball@gmail.com?subject=website contact&body=Hello, found your email through your website%0A%0A%0A`("📧 hardypinball@gmail.com"),q.href`#top`.onClick(n=>{n.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})("⬆️ Top")))));let Dc=!1,un=null,Gn=null,Wn=null,Jn=null,Kn=null,Qn=null;const _S=M((n=null,e=null,t=null,r=me(()=>{}))=>{const s=()=>{un&&(un(),un=null),Gn&&(Gn(),Gn=null),Wn&&(Wn(),Wn=null),Jn&&(Jn(),Jn=null),Kn&&(Kn(),Kn=null),Qn&&(Qn(),Qn=null);const i=QR();un=(i==null?void 0:i.unsubscribe)||null;const o=i.subscribe(f=>{n=f,console.debug("Visible current lineup games",{count:(f==null?void 0:f.length)||0,games:f}),r()});Gn=()=>o.unsubscribe();const c=tk();Wn=(c==null?void 0:c.unsubscribe)||null;const l=c.subscribe(f=>{e=f,console.debug("Visible past owned games",{count:(f==null?void 0:f.length)||0,games:f}),r()});Jn=()=>l.unsubscribe();const u=ms();Kn=(u==null?void 0:u.unsubscribe)||null;const h=u.subscribe(f=>{t=f,console.debug("Current lineup game library",{count:(f==null?void 0:f.length)||0,games:f}),r()});Qn=()=>h.unsubscribe()};return Dc||(Dc=!0,un||s()),Kt(()=>{un&&(un(),un=null),Gn&&(Gn(),Gn=null),Wn&&(Wn(),Wn=null),Jn&&(Jn(),Jn=null),Kn&&(Kn(),Kn=null),Qn&&(Qn(),Qn=null),Dc=!1}),ve(Qe(()=>gs()),Vt(`
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
        gap: 1.4em 1em;
      }

      .lineup-game-item {
        display: grid;
        gap: 0.75em;
        margin-bottom: 1.7em;
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
        margin: 0;
        color: #f6c177;
        font-weight: 700;
        line-height: 1.25;
        text-align: center;
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

      .lineup-section-break {
        width: min(1120px, 100%);
        margin: 2.4em auto 1.4em;
        border: 0;
        border-top: 1px solid rgba(255,255,255,0.22);
      }

      .lineup-section-title {
        width: min(1120px, 100%);
        margin: 0 auto;
        color: #fff;
        font-size: clamp(1.5em, 4vw, 2.6em);
        line-height: 1.08;
        font-weight: 900;
        font-style: italic;
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
    `),g.class`lineup-page`(g.class`lineup-brand-strip`(),g.class`lineup-hero`(Ze.class`lineup-title`("Cary's Current Lineup"),oe.class`lineup-subtitle`("A list of my current games.")),i=>{if(n===null)return g.class`lineup-results`(g.class`lineup-empty`("Loading current lineup..."));const o=n.filter(c=>c.isVisible!==!1).map(c=>qk(c,t||[]));return o.length?g.class`lineup-results`(g.class`lineup-grid`(o.map(c=>wl({game:c,detail:[`Collected ${Kk(c.dateAddedToCollection)}`,Yk(c)]}).key(c.id)))):g.class`lineup-results`(g.class`lineup-empty`("No current lineup games are visible yet."))},Mm.class`lineup-section-break`(),Ze.class`lineup-section-title`("Past Games Owned"),i=>{if(e===null)return g.class`lineup-results`(g.class`lineup-empty`("Loading past games..."));const o=e.filter(c=>c.isVisible!==!1).sort(Gk).map(c=>Wk(c,t||[]));return o.length?g.class`lineup-results`(g.class`lineup-grid`(o.map(c=>wl({game:c,detail:Qk(c)}).key(`past-${c.id}`)))):g.class`lineup-results`(g.class`lineup-empty`("No past owned games are visible yet."))}),ys())}),qk=(n,e)=>{const t=c0(e,n.gameId);return{...n,title:(t==null?void 0:t.title)||n.title||"",imageUrl:(t==null?void 0:t.imageUrl)||n.imageUrl||"",manufacturer:(t==null?void 0:t.manufacturer)||n.manufacturer||"",yearReleased:(t==null?void 0:t.yearReleased)??n.yearReleased??null}},Gk=(n,e)=>String(n.gameId||"").localeCompare(String(e.gameId||""),void 0,{sensitivity:"base"})||String(n.id||"").localeCompare(String(e.id||""),void 0,{sensitivity:"base"}),Wk=(n,e)=>{const t=c0(e,n.gameId),r=Jk(n.gameId||n.id);return{...n,title:(t==null?void 0:t.title)||n.title||n.sourceTitle||r,imageUrl:(t==null?void 0:t.imageUrl)||n.imageUrl||"",manufacturer:(t==null?void 0:t.manufacturer)||n.manufacturer||"",yearReleased:(t==null?void 0:t.yearReleased)??n.yearReleased??null}},c0=(n,e)=>{const t=hp(e);return t&&(n.find(r=>r.id===e)||n.find(r=>hp(r.id)===t))||null},hp=n=>String(n||"").trim().toLowerCase(),Jk=n=>String(n||"").trim().replace(/[-_]+/g," ").replace(/\s+/g," ").replace(/\b\w/g,e=>e.toUpperCase()),wl=M(({game:n,detail:e})=>(wl.inputs(t=>{[{game:n,detail:e}]=t}),g.class`lineup-game-item bounce-in`(g.class`lineup-game-card`(n.imageUrl?Y.src`${n.imageUrl}`.attr("alt",n.title||"Pinball game"):g.class`lineup-placeholder`(Z(Xk(n.title))),g.class`lineup-card-copy`(fr.class`lineup-card-title`(n.title||"Untitled Game"))),z.class`lineup-card-date`(Array.isArray(e)?e.map(t=>g(t)):e)))),l0=n=>n?typeof n=="string"?n.slice(0,10):typeof n.toDate=="function"?n.toDate().toISOString().slice(0,10):n.seconds?new Date(n.seconds*1e3).toISOString().slice(0,10):"":"",Kk=n=>{const e=l0(n);if(!e)return"recently";const t=new Date(`${e}T12:00:00`);return Number.isNaN(t.getTime())?e:t.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})},Qk=n=>{const e=Tl(n.dateAddedToCollection),t=Tl(n.dateRemovedFromCollection);if(!e||!t)return"Time not recorded";const r=Math.max(0,(t.getTime()-e.getTime())/(365.2425*24*60*60*1e3)),s=Math.floor(r);if(s>=1)return`${s} year${s===1?"":"s"} owned`;const i=Math.max(1,Math.round(r*12));return`${i} month${i===1?"":"s"} owned`},Yk=n=>{const e=Tl(n.dateAddedToCollection);if(!e)return"Ownership date unknown";const t=Math.max(0,(Date.now()-e.getTime())/(365.2425*24*60*60*1e3));if(t<1)return"first year owned";const r=Math.floor(t);return`${r} year${r===1?"":"s"} owned`},Xk=n=>{const e=String(n||"").trim().split(/\s+/).filter(Boolean);return e.length>=2?`${e[0][0]}${e[1][0]}`.toUpperCase():(e[0]||"PB").slice(0,2).toUpperCase()},Tl=n=>{const e=l0(n);if(!e)return null;const t=new Date(`${e}T12:00:00`);return Number.isNaN(t.getTime())?null:t};let Nc=!1,Yn=null,Vr=null,Dr=null,Nr=null,Lc=!1,Mc=!1;const bS=M((n=null,e=null,t=me(()=>{}))=>{const r=()=>{Yn&&Yn(),Vr&&Vr(),Dr&&Dr(),Nr&&Nr();const s=qR();let i=!1;Yn=(s==null?void 0:s.unsubscribe)||null;const o=s.subscribe(h=>{if(!i&&n===null&&Array.isArray(h)&&!h.length){i=!0;return}i=!0,n=h,Lc=!0,console.debug("Visible game ratings",{count:(h==null?void 0:h.length)||0,ratings:h}),t()});Vr=()=>o.unsubscribe();const c=ms();let l=!1;Dr=(c==null?void 0:c.unsubscribe)||null;const u=c.subscribe(h=>{if(!l&&e===null&&Array.isArray(h)&&!h.length){l=!0;return}l=!0,e=h,Mc=!0,console.debug("Game ratings library",{count:(h==null?void 0:h.length)||0,games:h}),t()});Nr=()=>u.unsubscribe()};return Nc||(Nc=!0,Yn||r()),Kt(()=>{Yn&&Yn(),Vr&&Vr(),Dr&&Dr(),Nr&&Nr(),Yn=null,Vr=null,Dr=null,Nr=null,Nc=!1,Lc=!1,Mc=!1}),ve(Qe(()=>gs()),Vt(`
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
    `),g.class`ratings-page`(g.class`ratings-brand-strip`(),g.class`ratings-hero`(Ze.class`ratings-title`("Cary's Game Ratings")),s=>{if(!Lc||!Mc||n===null||e===null)return g.class`ratings-empty`("Loading game ratings...");const i=n.filter(o=>o.isVisible!==!1).map(o=>Zk(o,e||[]));return i.length?g.class`ratings-grid`(i.map(o=>u0(o).key(o.id))):g.class`ratings-empty`("No public game ratings are visible yet.")}),ys())}),Zk=(n,e)=>{const t=n.gameId||n.id;return{...n,gameId:t,game:e.find(r=>r.id===t)}},u0=M(n=>{u0.inputs(([o])=>{n=o});const e=n.game||{},t=String(e.title||"Untitled game"),r=tS(n),s=nS(r),i=s?r.filter(o=>o!==s).reverse():r.reverse();return g.class`rating-card bounce-in`(g.class`rating-card-media`(s?h0(s):g.class`rating-card-placeholder`(t.slice(0,2).toUpperCase())),g.class`rating-card-copy`(g.class`rating-summary`(g.class`rating-score`(typeof n.rating=="number"&&!Number.isNaN(n.rating)?ed({rating:n.rating,size:108}):z.style`color:#f6c177;font-weight:900;`("Not rated")),g.class`rating-details`(e.title?z.class`rating-meta`([e.manufacturer||"",e.yearReleased?String(e.yearReleased):""].filter(Boolean).join(" - ")||"No manufacturer/year"):"",n.review?oe.class`rating-review`(n.review):"")),i.length?eS(i):""))}),eS=n=>n.length?g.class`rating-videos`(n.map(e=>d0(e).key(e.url))):"",tS=n=>Array.isArray(n.videos)?n.videos.filter(e=>!!(e!=null&&e.url)):[],nS=n=>[...n].reverse().find(e=>td(e.url))||null,d0=M(n=>{d0.inputs(([r])=>{n=r});const e=td(n.url),t=n.description||"Watch video";return g.class`rating-video`(e?h0(n):"",q.href`${n.url}`.class`rating-video-link`.attr("target","_blank").attr("rel","noopener noreferrer")(t))}),h0=n=>Om.class`rating-video-frame`.attr("src",td(n.url)).attr("title",n.description||"Watch video").attr("loading","lazy").attr("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share").attr("allowfullscreen","")(),td=n=>{const e=rS(n);return e?`https://www.youtube.com/embed/${e}`:""},rS=n=>{try{const e=new URL(n),t=e.hostname.replace(/^www\./,"");if(t==="youtu.be")return Oc(e.pathname.split("/").filter(Boolean)[0]);if(t==="youtube.com"||t==="m.youtube.com"){if(e.pathname==="/watch")return Oc(e.searchParams.get("v")||"");const[r,s]=e.pathname.split("/").filter(Boolean);if(r==="embed"||r==="shorts"||r==="live")return Oc(s)}}catch(e){console.warn("Invalid rating video URL",{url:n,error:e})}return""},Oc=(n="")=>/^[a-zA-Z0-9_-]{6,}$/.test(n)?n:"";let fp=!1;const wS=M(()=>(n=0,e=!0,t=!1,r=!1,s=!1,i=!1,o=!1,c=Date.now()-1e3,l=me(()=>{}),u=setTimeout(me(()=>e=!1),5e3),h=!fp&&(()=>{fp=!0,M.promise=Ra().then(f=>{typeof f=="number"&&(c=f,l())}).catch(f=>{console.error("Failed to load next meetup date",f)})})())=>g(Qe(()=>gs()),g(g.style`
      width: 100%;
      height: 175px;
      background-image: url('assets/media/youtube-channel-banner.jpg');
      background-size: contain;
      background-position: top center;
      background-repeat: repeat-x;
    `,Vt(`
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
      .fold-section-toggle {
        width: min(920px, calc(100% - 2em));
        margin: 0 auto;
        padding: 0.8em 1em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1em;
        border: 1px solid rgba(255,255,255,0.24);
        border-radius: 12px;
        background:
          linear-gradient(90deg, rgba(255,0,128,0.18), rgba(0,255,255,0.12)),
          rgba(0,0,0,0.55);
        color: #fff;
        cursor: pointer;
        box-shadow: 0 14px 36px rgba(0,0,0,0.32);
      }
      .fold-section-toggle:hover {
        border-color: rgba(255,255,255,0.42);
        background:
          linear-gradient(90deg, rgba(255,0,128,0.24), rgba(0,255,255,0.18)),
          rgba(0,0,0,0.62);
      }
      .fold-section-toggle .hero-text {
        margin: 0;
      }
      .fold-section-icon {
        width: 2.2em;
        height: 2.2em;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        background: rgba(255,255,255,0.1);
        border: 1px solid rgba(255,255,255,0.22);
        font-size: 0.8em;
      }
      .fold-section-actions {
        display: flex;
        align-items: center;
        gap: 0.55em;
        flex: 0 0 auto;
      }
      .fold-section-badge {
        min-width: 3.2em;
        padding: 0.35em 0.55em;
        border-radius: 999px;
        background: rgba(246,193,119,0.16);
        border: 1px solid rgba(246,193,119,0.36);
        color: #f6c177;
        font-size: 0.8em;
        font-weight: 900;
        line-height: 1;
        text-align: center;
      }
      .fold-section-content {
        overflow: hidden;
      }
    `),Y.attr("src","assets/media/sticker.png").class`sticker-callout`.style`transition: opacity 0.5s ease;`.attr("style.opacity",f=>e?1:0).onClick(()=>window.scrollTo({top:document.querySelector(".merch-section").offsetTop,behavior:"smooth"})).attr("alt","Super Wow Limited Edition"),g.onClick(()=>++n)(Vt(`
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
      `),g.class`bounce-in`.style`--fx-index:5;`(g.class`carousel-3d-wrapper`(g.class`carousel-3d`(g.class`carousel-3d-item`(Y.attr("src","assets/media/unnamed.jpg").attr("alt","Cary Hardy")),g.class`carousel-3d-item`(Y.attr("src","assets/media/Cary-Hardy.jpg").attr("alt","Cary Hardy")),g.class`carousel-3d-item`(Y.attr("src","assets/media/cool_shots/CH_chill.jpg").attr("alt","Cary Hardy Chill")),g.class`carousel-3d-item`(Y.attr("src","assets/media/cool_shots/CH_kong.jpg").attr("alt","Cary Hardy Kong")),g.class`carousel-3d-item`(Y.attr("src","assets/media/cool_shots/CH_machines.jpg").attr("alt","Cary Hardy Machines")),g.class`carousel-3d-item`(Y.attr("src","assets/media/cool_shots/playfield_red.jpg").attr("alt","Playfield")))),f=>n>4&&g.style`text-align: center; margin-top: 2em;`(q.href`./admin.html`.style`color:white; text-decoration: underline;`("🔨 admin tools")))),g.class`bounce-in`.style`--fx-index:1; text-align: center; max-width: 900px; margin: 0 auto;`(Ze.class`welcome-text`("Welcome to where I talk and do everything pinball")),pe,g.style`text-align: center;`(Y.attr("src","assets/media/pewpew+cary.png").attr("alt","Pew Pew Cary Hardy").style`max-width: 900px; width: 100%; height: auto;`),pe,pe,pe,g.class`bounce-in section-anchor`.attr("id","merch").style`--fx-index:3;`(G.type`button`.class`fold-section-toggle`.attr("aria-expanded",f=>o?"true":"false").onClick(()=>o=!o)(Ze.class`hero-text`("👕 PINBALL MERCH & MORE"),g.class`fold-section-icon`(f=>o?"▲":"▼"))),f=>o?g.class`merch-section bounce-in fold-section-content`.style`--fx-index:2;`(g.style`display: flex; flex-direction: column; align-items: center; gap: 3em;`(g.style`display: flex; flex-direction: column; align-items: center; gap: 1em;`(g.class`merch-item`.style`max-width: 900px; margin: 0 auto;`(q.href`https://buy.stripe.com/eVq14f9f01zi3Vn7mN00003`.attr("target","_blank")(Y.attr("src","assets/media/wrong_kong_shirts.jpg").attr("alt","Wrong Kong Shirt"))),q.attr("target","_blank").href`https://buy.stripe.com/eVq14f9f01zi3Vn7mN00003`.style`display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(m=>m.target.style.transform="scale(1.1)").onMouseOut(m=>m.target.style.transform="scale(1)")("Get your 'Wrong Kong!' T-Shirt"),q.attr("target","_blank").href`https://buy.stripe.com/5kQdR11My7XGbnPePf00005`.style`display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(m=>m.target.style.transform="scale(1.1)").onMouseOut(m=>m.target.style.transform="scale(1)")("🇦🇺 Wrong Kong for Australia residents")),g.style`display: flex; flex-direction: column; align-items: center; gap: 1em;`(g.class`merch-item`.style`max-width: 900px; margin: 0 auto;`(q.href`https://buy.stripe.com/5kA4j775zaRsdHy9AA`.attr("target","_blank")(Y.attr("src","assets/media/merch-on-glass.jpg").attr("alt","Pinball Merchandise"))),q.attr("target","_blank").href`https://buy.stripe.com/5kA4j775zaRsdHy9AA`.class`bounce-in`.style`--fx-index: 9; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(m=>m.target.style.transform="scale(1.1)").onMouseOut(m=>m.target.style.transform="scale(1)")("More guns than Wick T-shirt"))),g.style`text-align: center; margin-top: 2em; display: flex; flex-direction: column; gap: 2em; align-items: center;`(q.attr("target","_blank").href`https://silverballswag.com/collections/cary-hardy`.class`bounce-in`.style`--fx-index: 9; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(m=>m.target.style.transform="scale(1.1)").onMouseOut(m=>m.target.style.transform="scale(1)")("SHOP SILVERBALL SWAG"))):"",pe,g.class`bounce-in section-anchor`.attr("id","links").style`--fx-index:4;`(G.type`button`.class`fold-section-toggle`.attr("aria-expanded",f=>i?"true":"false").onClick(()=>i=!i)(Ze.class`hero-text`("🔗 LINKS"),g.class`fold-section-icon`(f=>i?"▲":"▼"))),f=>i?g.class`fold-section-content`.style`display:flex;flex-wrap:wrap;gap:1em;justify-content: center;padding-top:1em;`(q.href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`.class`bounce-in link-icon`.style`--fx-index: 2;`(Y.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3ElEQVR4Ae2WIQzDIBBFEdPV6Ip6L2Y3Me9NMzuB98GbWrysqHf1otWYismm+vYFTRCEhXXjJrjkmSslLwHgi8vjxkoRKAL/J0BCSHAHGhjQgxHMwIKnY/Px+taNHd2/Bmg3p4wKuIH0Y1RQAB+ugDJxDgn0GQVMSMBmFJhDApSTYwLLQtR13xNAo0oWINS6ErXtpxInX0CmC3g1TURNkypQ+QL1IYG9hiFFRPIL8C8B/ybkO4bsFxH7Vcz+GLE/x5yBRL+LZDVQkTi2Ochn70dimQpFspKKi0AReAF/IVUTZ3/BGQAAAABJRU5ErkJggg==").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),q.href`https://rumble.com/c/c-2975430`.class`bounce-in link-icon`.style`--fx-index: 3;`(Y.attr("src","https://rumble.com/i/favicon-v4.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),q.href`https://twitter.com/cary_hardy`.class`bounce-in link-icon`.style`--fx-index: 4;`(Y.attr("src","https://cdn-icons-png.flaticon.com/512/124/124021.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),q.href`https://www.instagram.com/caryhardypinball/`.class`bounce-in link-icon`.style`--fx-index: 5;`(Y.attr("src","https://cdn-icons-png.flaticon.com/256/1409/1409946.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),q.href`https://www.patreon.com/caryhardy`.class`bounce-in link-icon`.style`--fx-index: 6;`(Y.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUUFRj///8AAADe39+AgIE8PT4MDhF3eHhDREUREhUKCxD7+/sFBwwAAAYNDxLl5eWlpabFxcbw8PC/v8BKS0wXGBzLy8yGhoevr7Dv7+9jZGV9fX63t7giIybZ2dlubm+Wl5gpKiwzMzZZWVtiYmRTVFaPj5ChoaJHSEo5OTy9mcuCAAAEZElEQVR4nO3c6XaiQBCGYSgHtVkEcUNjJFFjzP3f4IDOklEnVDc9VDPne/7j8T0szdZ4HgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRlQncSpbG8moRxclkqDic6C3ZlEjyNbpXP3H8aEnn7+WFTL7U5zPcLovCf/l0DtPLvpMGQseSkWnPjb7PlLs2jeqkoT3fL7Sqo1iZn8c7Qt/vCAaMwpv0mS++X9f11cfyguIO/zmRUqGJ6ywaP8n5sBO8Hil3ZJ00K43i+zf/eV8un5zjpKKGBfqFK3mZf513NDuTEatQtVETZmhNYrceMXGjULFTx5uHh5bG0DOUT9QpDKiJ+YDWCZPLjo1ZhEkx1+mrLgLoNuqNTSGeNLfTXj42FEzUK6e2LIfCLxINsIr+Qjsxj6K3oKJrILqTAYBO9SkU3VG5hPDcOrPdFwfNUZqEio33wp6Xg0M8rVGHRJtD3M7kTcV5h8qQ10D/wJLYrsgqHzy12wqu12HbKKVThtm2g72+lEjmFVLbdRiv5Ruh6kVGonpftA6vj6UJmJTIKaWQj0PeFViKncGencCezJzYXUmkn0I9KkRGjsVAlrLsyHIWbhfGh4bYaXz6XuOBvLKSTrUDfH0msxOZCS8eZ2s7FQkX2Av1I66lWR4WJrSPphcSQ2FRIFk5Jf8sENtOGQhVb3A3rK2HnCofj1tdNn+32E9cK46O10bCWCoyIDYU0snDh9FtUdn+oaSq0ON7XBG5mNBW+2C1cOVeYvNstPLlXmNktfEEhCq0X2j7SuLcf/v/H0kcvhbXh3niYlFbP2taH7h+zNRSGbR4b3kvPzp2XqudWzw1v7djvdXZW6JGVO/o/Td27PrR8MBUYLBoLww+bhaxXczsu9Gzea8tdvJvoUcsn+J9J3IhiFFp6tlYTeb7WWDjZW7vbtnuVeLzGeLpm7fJC4MKCVTj8sHQzKt+LzFLgPAO2dKyRWYWcwnBuZSXmHzITTThvm9i50Jc4n+EWDl8tXGAMBG7oswutjIkbqRfbWIWKWr+tIHFVccV7NzE0f0H4Kg3EZiUw36CldsfTSPA9aO5b0O2uE6WOo5d/zixU1OIJhmQg/119ZX5+WohO8OLPt1ChYeLWExoJrzTmzCizffFEooFa856M9sUX6TmIerPzSPcG8eBNeuqa7gxLOmvdP51KT1zz9GfJxuGK/SQjH8Xi8ysNZjor2jOviLNAehe8MJitHqojYyrp7CA/QfbCZD6+SmhefHnISYuxM59VMPxqREzj1V9X5HJ1dmT91Uy/i1F/1mRRbgfpH9cc0XqwLR37wIlxoXfZWsNxeXovtrPpdLYt3k/lfOHEVwY+a1Po1SerSbXG1KKiqrWaOPCFgVstC6/Uxb/5g61ZKXQaCvsPhf2Hwv5DYf+hsP9Q2H8o7D8U9h8K+w+F/YfC/jP/nndfqNfz+FawkP5XVqnwjuy7EwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATvgOQzxF32eUYx8AAAAASUVORK5CYII=").attr("alt","Patreon").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),q.href`https://silverballswag.com/collections/cary-hardy`.class`bounce-in link-icon`.style`--fx-index: 7;`(Y.attr("src","https://cdn.shopify.com/s/files/1/0255/0271/1853/files/silverball_swag_logo_color_360x.png?v=1614300719").attr("alt","silverball_swag").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),q.href`https://www.facebook.com/hardypinball`.class`bounce-in link-icon`.style`--fx-index: 8;`(Y.attr("src","https://cdn-icons-png.flaticon.com/256/124/124010.png").attr("alt","Facebook").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`)):"",pe,g.class`bounce-in section-anchor`.attr("id","games").style`--fx-index:5;`(q.href`/lineup.html`.class`fold-section-toggle`.style`text-decoration:none;box-sizing:border-box;`(Ze.class`hero-text`("🎮 GAMES"))),pe,g.class`bounce-in section-anchor`.attr("id","youtube").style`--fx-index:5;`(G.type`button`.class`fold-section-toggle`.attr("aria-expanded",f=>s?"true":"false").onClick(()=>s=!s)(Ze.class`hero-text`("📺 YOUTUBE CHANNEL"),g.class`fold-section-actions`(g.class`fold-section-badge`("+12K subs"),g.class`fold-section-icon`(f=>s?"▲":"▼")))),pe,f=>s?g.class`fold-section-content`.style`text-align: center; margin-top: 2em;`(g.class`bounce-in`.style`max-width: 900px;padding-top:1em;margin:auto;--fx-index:2`(Om.attr("src","https://www.youtube.com/embed/JFkiAk44Ntk").attr("frameborder","0").attr("allowfullscreen","").style`width: 100%;height: 500px;`),g.style`text-align: center; margin-top: 2em;`(q.attr("target","_blank").href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`.class`bounce-in`.style`--fx-index: 5; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(m=>m.target.style.transform="scale(1.1)").onMouseOut(m=>m.target.style.transform="scale(1)")("Goto My Channel")),pe,pe):"",g.class`fade-in`.style`--fx-index:6`(f=>Date.now()<c&&ve(g.class`bounce-in section-anchor`.attr("id","live-meetups").style`--fx-index:5;`(G.type`button`.class`fold-section-toggle`.attr("aria-expanded",m=>r?"true":"false").onClick(()=>r=!r)(Ze.class`hero-text`("🗓️ LIVE MEETUPS"),g.class`fold-section-actions`(g.class`fold-section-badge`(m=>sS(c)),g.class`fold-section-icon`(m=>r?"▲":"▼")))),m=>r?g.class`fold-section-content bounce-in`.style`--fx-index:2;`(g.style`margin-top: 2em; display: flex; flex-wrap: wrap; justify-content: center; gap: 2em;`(g.style`position: relative; max-width: 500px; width: 90%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(255,0,100,0.3), 0 15px 40px rgba(0,255,255,0.2); transform: perspective(1000px) rotateX(2deg);`(g.style`position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, rgba(255,0,100,0.2), rgba(0,255,255,0.2), rgba(255,0,100,0.2)); animation: shimmer 4s infinite;`,Y.attr("src","assets/media/meetup-screenshot.jpg").attr("alt","Pinball Community Live Meetup").style`width: 100%; height: auto; display: block; position: relative; z-index: 1;`,g.style`position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5em; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); z-index: 2;`(g.style`color: white; font-weight: bold; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-size: 1.1em;`("Monthly Live Meetups"))),g.style`position: relative; max-width: 500px; width: 90%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,255,255,0.3), 0 15px 40px rgba(255,0,100,0.2); transform: perspective(1000px) rotateX(-2deg);`(g.style`position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, rgba(0,255,255,0.2), rgba(255,0,100,0.2), rgba(0,255,255,0.2)); animation: shimmer 4s infinite; animation-delay: 2s;`,Y.attr("src","assets/media/meetup-screenshot2.jpg").attr("alt","Pinball Community Live Meetup 2").style`width: 100%; height: auto; display: block; position: relative; z-index: 1;`,g.style`position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5em; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); z-index: 2;`(g.style`color: white; font-weight: bold; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-size: 1.1em;`("Live Discussion & Q&A")))),g.style`margin-top: 2em;`(w=>Sa({date:c,showLearnMore:!0}))):"")),pe,g.class`bounce-in section-anchor`.attr("id","awards").style`--fx-index:7;`(G.type`button`.class`fold-section-toggle`.attr("aria-expanded",f=>t?"true":"false").onClick(()=>t=!t)(Ze.class`hero-text`("🏆 AWARD WINNING WORK & CONTENT"),g.class`fold-section-icon`(f=>t?"▲":"▼"))),f=>t?g.class`merch-section bounce-in fold-section-content`.style`margin: 2em auto; --fx-index:2;`(g.style`display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 2em; margin: 1em 0;`(g.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","PATB Award").attr("src","assets/media/awards/PBaTB award.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,z.style`color: white; display: block; text-align: center;`("PATB Award")),g.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","Twipy Award").attr("src","assets/media/awards/Twipy.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,z.style`color: white; display: block; text-align: center;`("Twipy Award")),g.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","PATB Awards").attr("src","assets/media/awards/PatB awards.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,z.style`color: white; display: block; text-align: center;`("PATB Awards")),g.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","Cary Hardy and Steve Ritchie handshaking").attr("src","assets/media/awards/photo0.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,z.style`color: white; display: block; text-align: center;`("TPF 2024")),g.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","Cary Hardy holding award").attr("src","assets/media/awards/photo2.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,z.style`color: white; display: block; text-align: center;`("TPF 2024")),g.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","Earth Shaker award").attr("src","assets/media/awards/EarthShakerAward.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,z.style`color: white; display: block; text-align: center;`("TPF 2024")),g.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","TPF 2022").attr("src","assets/media/awards/TPF 2022.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,z.style`color: white; display: block; text-align: center;`("TPF 2022")),g.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","Cary Hardy owned pinball machine").attr("src","assets/media/awards/photo3.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,z.style`color: white; display: block; text-align: center;`("TPF 2022")),g.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","Cary Hardy holding award").attr("src","assets/media/awards/photo1.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,z.style`color: white; display: block; text-align: center;`("TPF 2022")))):"",pe,pe,Y.class`bounce-in reflection`.attr("alt","Cary Hardy logo").attr("src","https://cdn.shopify.com/s/files/1/0255/0271/1853/collections/Front_1200x1200.png").style`--fx-index:8;width: 55vw;min-width: 200px;max-width: 400px;`,f=>ys()))),sS=n=>`${Math.max(0,Math.ceil((n-Date.now())/864e5))}d`,iS=H("img");let pp=!1;const TS=M(()=>{let n=Date.now()-1e3;const e=me(()=>{}),t=()=>new Date(n),r=()=>{const s=document.getElementById("count-clock");s&&NT(Sa,s,{date:t(),showLearnMore:!window.location.href.includes("meetup.html")})};return setTimeout(r,0),pp||(pp=!0,M.promise=Ra().then(s=>{typeof s=="number"&&(n=s,e(),r())}).catch(s=>{console.error("Failed to load next meetup date",s)})),ve(Qe(()=>gs()),iS.class`bounce-in reflection`.alt`Cary Hardy logo`.src`https://cdn.shopify.com/s/files/1/0255/0271/1853/collections/Front_1200x1200.png`.style`--fx-index:0;width: 55vw;min-width: 200px;max-width: 400px;`,g.class`bounce-in`.style`--fx-index:1`(jl.style`line-height: 1.3;`("Meet & talk everything pinball!"),oe("for Patreon LE supporters"),g.style`font-size:.8em;opacity: .7;`("😎 come experience the hype")),pe,g.class`bounce-in`.style`--fx-index:2`(g.id`count-clock`),pe,g.class`bounce-in`.style`--fx-index:3;text-align: center;`(g.style`display: inline-block;`(g.style`\n          max-width: 900px;\n          background-color:#333;border-radius: .7em;\n          margin:.5em;text-align: justify;\n          border:1px solid rgba(255,255,255,.5);\n          color:rgba(255,255,255,.85);\n        `(g.style`padding:0em 2em;`(g.style`line-height: 1.5em;`(oe("And if that sounds interesting to you, consider joining us!"),oe("By becoming a ",q.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`("Cary Hardy LE supporter")," before ",s=>t().toLocaleString("default",{month:"long"})," ",s=>t().getDate(),s=>k_(t()),", you will receive an LE only Patreon ",Z.style`white-space: nowrap;`("💬 message"),", ",IE("before the meeting start time"),", with an invite ",Z.style`white-space: nowrap;`("🔗 link")," to join this very exclusive meeting.")),pe,Ze("How does the meeting work?"),yh(vr("🍺 It mostly works because of beer. Come 🍻 cheers with us!"),vr("🛎️ Make sure you have Patreon notifications turned on to ensure you receive invite link 1 hour before meeting"),vr("Meeting software is Google Meets, which is a browser based application. No installation will be required."),vr("Link to meeting is provided 1 hour before meeting. Must be ",q.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`("Patreon LE member"))),pe,Ze("😮 When issues arise"),yh(vr("Watch your Patreon messages."),vr("In the event of meeting cancellation or disruption due to unforeseen circumstances, a makeup meeting will be communicated directly from Cary Hardy."))),g.style`text-align: center;`("⚪️ ",q.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`("Patreon memberships")," ⚪️")))),pe,pe,g.class`bounce-in`.style`--fx-index:4;text-align: center;`(g.style`padding:.8em;font-size: .7em;`(q.class`no-a-style`.href`index.html`(G.type`button`("🔙 home")))),ys())}),ES=M(()=>{const t=new URLSearchParams(window.location.search).get("session_id")||""||"not found";return g(Qe(()=>gs()),g.class`wrap`(g.class`card`(jl("Thank you!"),oe("✅ Your payment was received successfully."),pe,oe("We really appreciate your support as we grow CaryHardy.com"),pe,oe("At Pinball at the Beach, please find Cary or Acker or email ",q.href`mailto:acker.dawn.apple@gmail.com?subject=PATB Cary key box`("acker.dawn.apple@gmail.com")),pe,oe.class`muted`("Session ID: ",Z.class`session-id`(r=>t)),q.class`cta`.href`/index.html`("Back to CaryHardy.com"))),ys())}),mp=["/assets/media/product-images/key-box/IMG_1477.heic.jpeg","/assets/media/product-images/key-box/Main.jpg","/assets/media/product-images/key-box/IMG_1472.heic.jpeg","/assets/media/product-images/key-box/IMG_1474.heic.jpeg","/assets/media/product-images/key-box/IMG_1475.heic.jpeg"],gp="https://buy.stripe.com/aFabJ02XDe7K7GrgXv4F202",oS=M(()=>{let n=mp[0],e=gp;return oS.inputs(t=>{[{checkoutUrl:e=gp}={}]=t}),g(Qe(()=>gs()),g.class`product-wrap`(g.class`product-hero`(g.class`product-info`(jl("Cary Hardy Key Box"),et("🏖️ PATB Pickup only. Priced for LE only members only"),oe("Cary Hardy Key Box"),oe("LE Members only pricing"),Ze("$15.00 ",Z.style`font-size:0.6em;opacity:0.75;font-weight:400;`("+ $1 processing + tax")),oe.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`("🇺🇸 Made in America"),oe.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`("🚫 🤖 No artificial intellegence used"),oe.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`("🥳 Fun to assemble Cary Hardy logo that is then functional as your pinball keys holder!"),q.href(t=>e).class`buy-button`.attr("target","_blank")("Buy Now")),g.class`product-media`(Y.attr("src",t=>n).attr("alt","Key Box main photo").class`main-image`,g.class`gallery`(mp.map(t=>g.class`gallery-item`.class(r=>t===n?"is-active":"").onClick(()=>{n=t})(Y.attr("src",t).attr("alt","Key Box photo").class`gallery-image`)))))),ys())});export{lS as a,uS as b,dS as c,pS as d,fS as e,_S as f,hS as g,wS as h,bS as i,TS as j,ES as k,oS as l,mS as m,gS as p,yS as q,NT as t};

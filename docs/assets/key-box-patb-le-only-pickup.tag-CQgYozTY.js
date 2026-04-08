var hy=Object.defineProperty;var dy=(n,e,t)=>e in n?hy(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var nt=(n,e,t)=>dy(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function us(n){return n.renderCount=n.renderCount||0,n.varCounter=0,n.state={newer:{state:[],states:[]}},n.global={blocked:[]}}function ci(){return he.stateConfig.support}function Li(n){return Fe(n.context),he.stateConfig.support=n}const Me=function(){};let it=[];const It=[];let lt=[],Mi=[],En=[],$a=!1;const Kt=[],fy=400;let qn=0;const da=new Map,ue={locks:0};function py(n,e){const t=da.get(n);if(t!==void 0&&t>=qn){Kt[t]=e;return}const r=Kt.length;Kt.push(e),da.set(n,r)}function gy(n,e){e.textContent=n}function Qe(){ue.locks>0||my()}function my(){++ue.locks,yd(),--ue.locks,gd(),yy()}function gd(){wy();const n=En;En=[];for(const e of n)e[0](...e[1])}function yy(){$a||!Kt.length||_y()}function _y(){$a=!0,requestAnimationFrame(md)}function md(){++ue.locks;let n=0;for(;qn<Kt.length&&n<fy;){const e=Kt[qn];++qn,e[0](...e[1]),++n}if(yd(),gd(),--ue.locks,qn<Kt.length){requestAnimationFrame(md);return}Kt.length=0,qn=0,da.clear(),$a=!1}function yd(){const n=It.length;for(let e=0;e<n;++e){const t=It[e];t[0](...t[1])}if(n===It.length)It.length=0;else{let e=0;for(let t=n;t<It.length;++t)It[e]=It[t],++e;It.length=e}for(const e of lt)e[0](...e[1]);for(const e of Mi)e[0](...e[1]);for(const e of it)e[0](...e[1])}function wy(){it=[],lt=[],Mi=[]}function Qr(n,e){It.push([Ty,[n,e]])}function Ty(n,e){n||console.debug("no element by",{_caller:e,element:n});const t=n.parentNode;t||console.debug("no parentNode by",{_caller:e,element:n}),t.removeChild(n)}function za(n,e,t){n.parentNode.insertBefore(e,n)}function Wa(n,e){n.appendChild(e)}const fu=typeof document=="object"&&document.createElement("div");function Ey(n){return fu.innerHTML=n,document.createTextNode(fu.innerHTML)}function _d(n,e,t=Me,r){const s=Ey(e);za(n,s),t(s)}const hs="";var pu;(function(n){n.string="string",n.number="number",n.boolean="boolean",n.undefined="undefined"})(pu||(pu={}));var re;(function(n){n.function="function",n.date="date",n.unknown="unknown",n.object="object"})(re||(re={}));const by=Date.now(),ne={tag:"html",dom:"dom",templater:"templater",tagComponent:"tagComponent",tagArray:"tagArray",host:"host",subscribe:"subscribe",signal:"signal",stateRender:"stateRender",version:by};function wd(n){if(!n)return!1;switch(n.tagJsType){case ne.dom:case ne.tag:case ne.templater:return!0}return!1}function ds(n){const e=n==null?void 0:n.tagJsType;return e===ne.tagComponent||e===ne.stateRender}function vy(n){return Fi(n)&&typeof n.subscribe===re.function}function dr(n){return n&&In(n.then)}function In(n){return typeof n===re.function}function Fi(n){return typeof n===re.object&&n!==null}function Ge(n){return Array.isArray(n)}function Ja(n){const e=n.state;if(e&&e.newest&&e.newest)return e.newest;if(n.parentContext)return Ja(n.parentContext)}function Ui(n){let e=n;for(;e.ownerSupport&&!ds(e.templater);)e=e.ownerSupport;const r=e.context.state;return r&&r.newest||e}function Iy(...n){return n}function Td(n){const e=he.stateConfig;return e.states[e.statesIndex]=n,++e.statesIndex,n(Iy)}function Ay(n){const e=he.stateConfig,t=e.statesIndex,l=Ui(e.prevSupport).context.state.older.states[t];let h=[];l(function(...m){return h=m,l.lastValues=h,m});const f=function(...m){return h};return e.states[e.statesIndex]=n,++e.statesIndex,n(f)}function Ed(n){Fe(n);const e=he.stateConfig;e.handlers.handler=bd,e.handlers.statesHandler=Td,e.rearray=[];const t=e.state=[],r=e.states=[];e.statesIndex=0;const s=n.state=n.state||{};s.newer={state:t,states:r}}class Cy{}function Sy(n){const[e]=n(Cy),[t]=n(e);return[e,t]}function Ry(n){const e=n.callback;if(!e)return n.defaultValue;const[t]=Sy(e);return t}function Py(){const n=he.stateConfig,t=n.rearray[n.state.length];return n.state.push(t),t.defaultValue}function bd(n){var o,c;const e=he.stateConfig,t=Tt();if(!t||!t.state){const l="State requested but TaggedJs is not currently rendering a tag or host";throw console.error(l,{config:e,context:t,function:(c=(o=e.support)==null?void 0:o.templater.wrapper)==null?void 0:c.original}),new Error(l)}const r=t.state.newer;e.state=r.state;let s=n;if(typeof n===re.function&&(s=n()),typeof s===re.function){const l=s;s=function(...f){return l(...f)},s.original=l}const i={get:function(){return Ry(i)},defaultValue:s};return e.state.push(i),s}function ky(n){const e=new Z,t=r=>{const s=[],i=[],o=(p,m)=>{if(s[m]=!0,i[m]=p,s.length===n.length){for(const R of s)if(!R)return;r(i,h)}},c=[...n],h=c.shift().subscribe(p=>o(p,0)),f=c.map((p,m)=>p.subscribe(v=>o(v,m+1)));return h.subscriptions=f,h};return e.subscribeWith=t,e}function xy(n,e){const t=n.findIndex(r=>r.callback===e);t!==-1&&n.splice(t,1)}function Vy(n,e,t){const r=Z.globalSubCount$;Z.globalSubCount$.next(r.value+1);const s=function(){s.unsubscribe()};return s.callback=e,s.subscriptions=[],s.unsubscribe=function(){return Dy(s,t,e)},s.add=i=>(s.subscriptions.push(i),s),s.next=i=>{e(i,s)},s}function vd(n,e,t){const r=[...e],s=r.shift(),i=f=>{if(r.length)return vd(f,r,t);t(f)};let o=i;const h=s(n,{setHandler:f=>o=f,next:i});o(h)}function Dy(n,e,t){xy(e,t);const r=Z.globalSubCount$;Z.globalSubCount$.next(r.value-1),n.unsubscribe=()=>n;const s=n.subscriptions;for(const i of s)i.unsubscribe();return n}const Gn=class Gn{constructor(e,t){nt(this,"onSubscription");nt(this,"methods",[]);nt(this,"isSubject",!0);nt(this,"subscribers",[]);nt(this,"subscribeWith");nt(this,"value");nt(this,"set",this.next.bind(this));this.onSubscription=t,arguments.length>0&&(this.value=e)}subscribe(e){const t=Vy(this,e,this.subscribers),r=this.subscribeWith;if(r){if(this.methods.length){const s=e;e=i=>{vd(i,this.methods,o=>s(o,t))}}return r(e)}return this.subscribers.push(t),this.onSubscription&&this.onSubscription(t),t}next(e){this.value=e,this.emit()}emit(){const e=this.value,t=this.subscribers;for(const r of t)r.callback(e,r)}toPromise(){return new Promise(e=>{this.subscribe((t,r)=>{r.unsubscribe(),e(t)})})}toCallback(e){const t=this.subscribe((r,s)=>{const i=s==null?void 0:s.unsubscribe;i?i():setTimeout(()=>{t.unsubscribe()},0),e(r)});return t}pipe(...e){const t=[];"value"in this&&t.push(this.value);const r=new Gn(...t);return r.setMethods(e),r.subscribeWith=s=>this.subscribe(s),r.next=s=>this.next(s),r}setMethods(e){this.methods=e}static all(e){const t=e.map(r=>vy(r)?r:new Gn(r,i=>(i.next(r),i)));return ky(t)}};nt(Gn,"globalSubCount$",new Gn(0));let Z=Gn;const Ny=new Z(void 0,function(e){ci()||e.next()}),he={stateConfig:{state:[],version:Date.now(),handlers:{handler:bd,statesHandler:Td}},tagClosed$:Ny};function Oy(n,e){const r=n.templater.tag.values;for(const s of e)Ly(r,s,n);return e}function Ly(n,e,t){if(e.deleted)return;const r=e.tagJsVar;Fe(e),r.processUpdate("",e,t,n),Ce()}function Id(n,e){if(!n)return;const r=n.context.contexts;My(n,e),++ue.locks,Oy(n,r),--ue.locks,Qe()}function My(n,e){const t=e.templater,r=e.templater.tag,s=t.values||r.values,i=n.templater.tag;i.values=s}function Fy(n,e){return fa(n,e)}function fa(n,e){if(n===null||typeof n!==re.object||e<0)return n;if(n instanceof Date)return new Date(n);if(n instanceof RegExp)return new RegExp(n);const t=Ge(n)?[]:Object.create(Object.getPrototypeOf(n));if(Ge(n))for(let r=0;r<n.length;r++)t[r]=fa(n[r],e-1);else for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=fa(n[r],e-1));return t}function Uy(n,e,t){return Ga(n,e,t)}function Ga(n,e,t){return n===e||Hy(n,e)||t<0?!0:typeof n===re.object&&typeof e===re.object?n instanceof Date&&e instanceof Date?n.getTime()===e.getTime():Ge(n)&&Ge(e)?By(n,e,t-1):Ge(n)||Ge(e)?!1:jy(n,e,t-1):!1}function jy(n,e,t){const r=Object.keys(n),s=Object.keys(e);if(r.length===0&&s.length===0)return!0;if(r.length!==s.length)return!1;for(const i of r)if(!s.includes(i)||!Ga(n[i],e[i],t-1))return!1;return!0}function By(n,e,t){if(n.length!==e.length)return!1;for(let r=0;r<n.length;r++)if(!Ga(n[r],e[r],t-1))return!1;return!0}function Hy(n,e){return In(n)&&In(e)&&n.toString()===e.toString()}function gu(n){return n.map(Ka)}function Ka(n,e){const t=n,r=n==null?void 0:n.tagJsType;if(r)switch(r){case ne.signal:case ne.subscribe:case ne.stateRender:return;case ne.dom:case ne.tag:case ne.templater:return gu(t.values)}return Ge(n)?gu(t):Fy(n,e)}function qy(n,e){const t=n.length;for(let r=0;r<t;++r){const s=n[r],i=e[r];if(Ge(s)&&Ge(i)){if(s===i)continue;return 3}if(!(typeof s===re.function&&typeof i===re.function)){if(typeof s===re.object){if(!s&&!i)continue;if(typeof e===re.object){const o=Object.entries(s);for(const c of o)if(!$y(c,i))return 3.1}continue}if(s!==i)return 3.3}}return!1}function $y([n,e],t){const r=t[n];return typeof e===re.function&&typeof r===re.function?!0:r===e}function Qa(n,e,t){return n}function zy(n){return typeof n!==re.object||!n||n.tagJsType}function Wy(n,e,t,r,s,i){var c;const o=Object.keys(n);for(const l of o){const h=n[l],f=e[l],p=Ya(f,h,t,r,i,s+1);h===p||(c=Object.getOwnPropertyDescriptor(n,l))!=null&&c.set||(n[l]=p)}return n}function Jy(n,e,t,r,s,i){for(let o=n.length-1;o>=0;--o){const c=n[o],l=e[o];n[o]=Ya(l,c,t,r,i,s+1)}return n}function Ya(n,e,t,r,s,i){return n==null||i>s?e:typeof n===re.function?e.mem?(n.mem=e.mem,e):(n.mem=e,n):zy(e)?e:Ge(e)?Jy(e,n,t,r,i,s):Wy(e,n,t,r,i,s)}function Gy(n,e,t,r,s,i=-1){const o=e.context;if(!o.global||!o.state.newest){const v=Qa(r);r.push(...v);const R=n.propsConfig;return R.castProps=v,r}e=o.state.newest||e;const f=e.propsConfig.castProps,p=[];for(let v=0;v<r.length;++v){const R=r[v],x=f[v],D=Ya(x,R,n,t,s,i+1);p.push(D)}const m=n.propsConfig;return m.castProps=p,p}function Ky(n,e){const t=n.context,r=t.global;let s=-1;const i=t.providers=t.providers||[],o=i.length-1;for(;s++<o;){const c=i[s];let l=-1;const h=c.children.length-1;for(;l++<h;){const f=c.children[l];if(r===f.context.global){c.children.splice(l,1),c.children.push(e);return}}}}function Ad(n,e){const t=n.context.providers;if(t)for(const r of t)for(let s=r.children.length-1;s>=0;--s)r.children[s].context.global===e&&r.children.splice(s,1);n.context.destroy$.next(),n.context.renderCount=0}function pa(n,e){for(const t of n){const r=t.lastArray;if(r){pa(r,e);continue}const s=t.value;if((s==null?void 0:s.tagJsType)===ne.subscribe){s.destroy(t,e),t.deleted=!0;continue}const i=t.global;if(!i)continue;const o=t.state.newest,c=i.subscriptions;c&&c.forEach(Sd),ds(o.templater)&&Ad(o,i);const l=t.contexts;pa(l,o),i.deleted=!0}}function Cd(n,e=[],t=[]){for(const r of n){const s=r.global;if(!s)continue;const i=r.state.newest;if(i){e.push(i);const c=s.subscriptions;c&&t.push(...c)}const o=r.contexts;o&&Cd(o,e,t)}return{tags:e,subs:t}}function Sd(n){n.unsubscribe()}function fs(n,e){const t=n.context;e.deleted=!0,t.renderCount=0;const r=[],s=t.contexts;return pa(s,n),n.templater.wrapper&&Ad(n,e),Za(t,r),delete t.state,delete t.contexts,delete t.returnValue,delete t.providers,r}function Qy(n,e,t,r,s){const i=e==null?void 0:e.arrayValue;let c=n!==(i||s);return c===!1&&i===void 0&&t.tagJsVar.hasValueChanged(e,t,void 0)&&(c=!0),c?(Xa(t),r.splice(s,1),2):0}function Xa(n){const e=n.global;Yy(e,n)}function Yy(n,e){var t;if(n&&((t=e.state)!=null&&t.oldest)){const r=e.state.oldest;fs(r,n);return}e.tagJsVar.destroy(e,{})}function Rd(n){++n.updateCount;const e=n.lastArray;e&&Pd(n,e)}function Pd(n,e){for(let t=0;t<e.length;++t)Xa(e[t]);delete n.lastArray}function Yr(n){for(let e=n.length-1;e>=0;--e){const t=n[e];Xy(t),n.splice(e,1)}}function Xy(n){const e=n.marker;e&&Qr(e,"destroyMarker");const t=n.domElement;Qr(t,"destroyClone")}function Za(n,e){n.contexts&&Zy(n.contexts,e),n.htmlDomMeta&&Yr(n.htmlDomMeta)}function Zy(n,e){var t;for(const r of n){if(r.withinOwnerElement){const l=r.tagJsVar;if(l&&l.tagJsType==="host"){const h=r.supportOwner,f=l.destroy(r,h);dr(f)&&e.push(f)}continue}const s=r.lastArray;if(s){Pd(r,s);continue}const i=r.simpleValueElm;if(i){delete r.simpleValueElm,Qr(i,"smartRemoveByContext");continue}const o=r.global;if(o===void 0)continue;if(o.deleted=!0,(t=r.state)==null?void 0:t.oldest){Za(r,e);continue}}}function ga(n){const e=n.context,t=e.global,r=e.contexts;if(r){const{subs:s,tags:i}=Cd(r);for(const c of i){if(c.context.global.deleted===!0)return;mu(c.context)}t.subscriptions&&s.forEach(Sd)}mu(e),us(e)}function mu(n){n.global.deleted=!0,Za(n,[]),delete n.contexts}function kd(n,e,t,r){const s=e.original,i=n.tagJsType===ne.stateRender,o=he.stateConfig;Li(t);let c;if(i?c=n():(c=s(...r),typeof c===re.function&&c.tagJsType===void 0&&(c=c())),!c)throw new Error(`A tag cannot return a value of type ${c===null?"null":typeof c}`);const l=t.context;return l.returnValue=c,t.returnValue=c,n.tag=c,l.state.newer={...o},Ce(),t}function e_(n,e){const t=n.context;++t.renderCount,t_(n.context),he.tagClosed$.next(e)}function t_(n){n_(n),r_()}function n_(n){const e=he.stateConfig,t=n||e.context;t.state=t.state||{},t.state.newer={...e};const r=e.support;t.state.newest=r}function r_(){const n=he.stateConfig;delete n.prevSupport,delete n.support,delete n.state,delete n.states,Ce()}function xd(n,e,t,r){let s;const i=n.templater;if(i.tagJsType===ne.stateRender){const o=i;s=Wi(i,t,r,n.appSupport),kd(i,o,s)}else{const o=i.wrapper;s=o(n,t,e)}return e_(s,r),s.ownerSupport=n.ownerSupport,s}function s_(n){const e=he.stateConfig;return e.rearray=n,e.state=[],e.states=[],e.statesIndex=0,e.handlers.handler=Py,e.handlers.statesHandler=Ay,e}function i_(n,e,t){s_(t);const r=he.stateConfig;r.prevSupport=e,Li(n)}function o_(n,e,t,r){const i=t.state.older.state;return i_(n,e,i),xd(n,e,t,r)}function Vd(n,e,t,r){Ed(n.context),Li(n);const s=xd(n,e,t,r);return Ce(),s}function a_(n){var r;const e=n==null?void 0:n.context,t=e==null?void 0:e.state;return(r=t==null?void 0:t.older)==null?void 0:r.state}function ec(n,e){var r;const t=yu(n,e);return!t&&((r=e.templater.tag)!=null&&r._innerHTML)&&yu(n.outerHTML,e)?!0:t}function yu(n,e){const t=n.templater,r=e.templater,s=(t==null?void 0:t.tag)||n,i=r.tag;if((t==null?void 0:t.tagJsType)===ne.stateRender)return t.dom===r.dom;if(!i&&!s.returnValue)return!0;if(!s.returnValue)return!1;throw new Error(`unknown tagJsType of ${s.tagJsType}`)}function c_(n,e,t){let r;a_(e)?r=o_(n,e,t):r=Vd(n,e,t);const i=!e||ec(e,r);if(i){if(e){const o=e.templater.tag;if(o&&t.renderCount>0){const c=e==null?void 0:e.templater,l=c==null?void 0:c.tag;l_(o,e,l)}}}else{Ky(e,r),ga(e);const o=r.context;o.state.oldest=r,o.state.newest=r}return r.ownerSupport=n.ownerSupport,{support:r,wasLikeTags:i}}function l_(n,e,t){if(n.tagJsType===ne.dom){const r=t==null?void 0:t.dom,s=n.dom;r!==s&&ga(e);return}if(t){const r=t.strings;if(r){const s=r==null?void 0:r.length,i=n.strings.length;s!==i&&ga(e)}}}function u_(n,e,t){const r=c_(e,n,t);if(r.wasLikeTags){const s=t.state.oldest;return Id(s,r.support),r.support}}function h_(n){const e=n.context;return u_(n,n,e)}function Ye(n){if(!n)return Me;const e=Tt();if(!e)throw new Error("output must be used in render sync with a parent context");const t=Ja(e);if(!t)throw new Error("output must be used in render sync fashion");if(n.wrapped===!0)return n;const r=(...s)=>{const i=t.ownerSupport;return d_(s,n,i.context)};return r.wrapped=!0,r}function d_(n,e,t){Fe(t);const s=e(...n);return Ce(),En.push([()=>{const i=t.global;if(i===void 0||i.deleted===!0){++ue.locks;const c=t;c.tagJsVar.processUpdate(c.value,c,void 0,[]),--ue.locks,Qe();return}++ue.locks,h_(void 0),--ue.locks,Qe()},[]]),s}function f_(n,e){++n.updateCount;const t=n.subContext,r=Dd(t,e);return delete n.subContext,r}function Dd(n,e){n.deleted=!0;const t=n.appendMarker;if(t&&(Qr(t,"deleteSubContext"),delete n.appendMarker),!n.hasEmitted)return;const r=n.contextItem;return r.tagJsVar.destroy(r,e),76}function p_(n,e,t,r){const s=e.tagJsType;if(!e||!s||s!==n)return r.tagJsVar.destroy(r,t),gs(e,r,t,99),99}function g_(n,e,t){const r=e.subContext,s=p_(ne.subscribe,n,t,e);return s||(!r||!r.hasEmitted||(r.tagJsVar=n,r.valuesHandler(r.lastValues,0)),0)}function m_(n,e,t,r,s){const i=e.context;if(i.locked=3,t.target=t.target||r,Fe(t),t.inputsHandler){const o=e.propsConfig;t.inputsHandler(o)}t.tagJsVar.processInit(n,t,e,s,r),Ce(),t.value=n,delete i.locked}function ji(n){switch(n){case void 0:case!1:case null:return hs}return n}function y_(n,e){const t=ji(n);if(e.paint){e.paint[1][1]=t;return}const r=e.simpleValueElm;lt.push([gy,[t,r]])}function __(n,e){e.value=n,e.oldTagJsVar=e.tagJsVar,e.tagJsVar=Md(n);const t=e.placeholder,r=ji(n),s=e.paint=[_d,[t,r,function(o){e.simpleValueElm=o,delete e.paint},"processNowRegularValue"]];it.push(s)}function Bi(n,e){if(n.startsWith("class."))return"class";if(n.startsWith("style."))return"style";const t=w_(n);return t!==!1?t:n==="value"&&e==="SELECT"?"value":!1}function w_(n){switch(n){case"autoselect":case"autoSelect":return"autoselect";case"autofocus":case"autoFocus":return"autofocus"}return!1}function T_(n,e,t){typeof n[e]!="object"&&(n[e]={});for(const r in t){const s=t[r];lt.push([I_,[n,e,r,s]])}if(n[e].setProperty)for(const r in t){const s=t[r];lt.push([v_,[n,e,r,s]])}}function E_(n,e,t){n.setAttribute(e,"")}function kt(n,e,t){if(Fi(t))return T_(n,e,t);Nd(n,e,t)}function b_(n,e,t){t?n[e]=!0:n[e]=!1}function Nd(n,e,t){if(n[e]=t,t===void 0||t===!1||t===null){n.removeAttribute(e);return}n.setAttribute(e,t)}function v_(n,e,t,r){n[e].setProperty(t,r)}function I_(n,e,t,r){n[e][t]=r}function Od(n,e,t,r){switch(r){case"autofocus":En.push([k_,[t]]);return;case"autoselect":En.push([P_,[t]]);return;case"style":{const s=n.split(".");lt.push([A_,[t,s,e]]);return}case"class":C_(n,e,t);return;case"value":kt(t,n,e),En.push([s=>{s.value=e},[t]]);return}throw new Error(`Invalid special attribute of ${r}. ${n}`)}function A_(n,e,t){const r=e[1];n.style[r]=t,n.style.setProperty(r,t)}function C_(n,e,t){const r=n.split(".");if(r.shift(),e){for(const s of r)lt.push([S_,[t,s]]);return}for(const s of r)lt.push([R_,[t,s]])}function S_(n,e){n.classList.add(e)}function R_(n,e){n.classList.remove(e)}function P_(n){n.select()}function k_(n){n.focus()}function x_(n,e,t,r,s){const i=n(),o={component:!1,tagJsType:"dynamic-attr",matchesInjection:h=>{const f=c.tagJsVar;if(f.matchesInjection)return f.matchesInjection(h,c)},hasValueChanged:(h,f,p)=>{const m=n();return c.tagJsVar.hasValueChanged(m,c,p)},processInit:Me,processInitAttribute:Me,destroy:(h,f)=>{c.tagJsVar.destroy(c,f)},processUpdate:(h,f,p,m)=>{++f.updateCount;const v=h();c.tagJsVar.processUpdate(v,c,p,m),c.value=v}},c={description:"sub-context",updateCount:0,isAttr:!0,target:r,parentContext:e,value:i,tagJsVar:hn(i),withinOwnerElement:!0,destroy$:new Z,render$:new Z},l={description:"override-context",updateCount:0,isAttr:!0,contexts:[c],target:r,parentContext:e,value:n,tagJsVar:o,withinOwnerElement:!0,destroy$:new Z,render$:new Z};return c.tagJsVar.processInitAttribute(t,i,r,c.tagJsVar,c,{},s),l}function V_(n,e,t,r,s,i,o){return t.target=r,t.howToSet=s,t.attrName=n,t.isSpecial=o,e!=null&&e.tagJsType?D_(n,e,t,i,r):Hi(n,e,r,s,o,t)}function D_(n,e,t,r,s){e.processInitAttribute(n,e,s,e,t,r,kt),t.tagJsVar=e}function Hi(n,e,t,r,s,i){if(typeof e=="function")return x_(e,i,n,t,r);if(s)return Od(n,e,t,s);r(t,n,e)}function Ld(n,e,t,r,s,i){const o=e.tagJsVar,c=n;if(o.hasValueChanged(c,e,t)>0){o.destroy(e,t),r.removeAttribute(s);const h=hn(n);h.isAttr=!0,h.processInitAttribute(s,n,r,h,e,t,i),e.tagJsVar=h;return}}function N_(n,e,t,r,s,i,o){r.destroy=O_,r.hasValueChanged=F_,r.processUpdate=(l,h,f)=>Ld(l,h,f,t,n,o);const c=Bi(n,t.tagName);Hi(n,e,t,o,c,s),s.tagJsVar=r}function O_(n){const e=n.target,t=n.attrName;e.removeAttribute(t)}function Md(n){return{component:!1,tagJsType:"simple",value:n,processInitAttribute:N_,processInit:M_,destroy:Fd,hasValueChanged:U_,processUpdate:L_}}function L_(n,e,t){return n===e.value?0:nc(e,n,t)}function M_(n,e,t,r,s){const i=ji(n);r=e.placeholder;const o=e.paint=[_d,[r,i,function(l){e.simpleValueElm=l,delete e.paint},"processSimpleValueInit"]];it.push(o)}function Fd(n){const e=n.simpleValueElm;if(!e){if(n.paint){n.paint[0]=Me;return}if(n.value===void 0||n.value===!1||n.value===null)return}delete n.simpleValueElm,Qr(e,"deleteSimpleValue")}function F_(n,e){return n==null||n===e.value?0:6}function U_(n,e){return n==null||![re.object,re.function].includes(typeof n)?(y_(n,e),0):(Fd(e),6)}function j_(n,e){return Ge(n)?0:9}function xn(n,e,t){const r=e.tagJsVar.processUpdate(n,e,t,[]);return e.value=n,r||0}const _u=Symbol("not-casted"),B_=[];function li(n,e,t,r){const s=n.lastArray===void 0;s&&(n.lastArray=[]);const i=n.lastArray;let o=n.placeholder;const c=e.length,l=new Array(c).fill(_u),h=function(v){const R=l[v];if(R!==_u)return R;const x=J_(e[v]);return l[v]=x,x};let f=s?!1:c!==i.length;s||(f=H_(i,e,n,f,h).batchUpdates);const p=n.lastArray;for(let m=0;m<c;++m)o=q_(m,p,t,f,h,o,r).placeholder}function H_(n,e,t,r,s){const i=[];let o=0;const c=e.length-1;for(let l=0;l<n.length;++l){const h=n[l];if(h.locked===1&&(r=!0),h.value===null){i.push(h);continue}const f=z_(l,n,o,c,s);if(f===0){i.push(h);continue}if(f===2){l=l-1;continue}o=o+f}return t.lastArray=i,{batchUpdates:r}}function q_(n,e,t,r,s,i,o){const c=s(n),l=e[n];if(l)return $_(c,l,t,r);const h=jd(c,t,e,i,o);return e.push(h),c&&(h.arrayValue=c.arrayValue||h.arrayValue),h}function $_(n,e,t,r,s,i){return r?(py(e,[W_,[n,e,t]]),e.value=n,e):Array.isArray(n)?(e.tagJsVar.processUpdate(n,e,t,B_),e.value=n,e):(xn(n,e,t),e)}function z_(n,e,t,r,s){const i=n-t,o=i<0||r<i,c=e[n];if(o)return Xa(c),1;c.arrayValue===void 0&&(c.arrayValue=n);const l=c.arrayValue,h=s(n);return Qy(l,h,c,e,n)}function W_(n,e,t){xn(n,e,t)}function J_(n){if(typeof n!="function")return n;const e=n;return e.tagJsType!==void 0?n:e()}function Ud(n){return{component:!1,tagJsType:"array",value:n,processInitAttribute:Me,processInit:K_,processUpdate:G_,hasValueChanged:j_,destroy:Rd}}function G_(n,e,t){++e.updateCount;const s=e.tagJsVar.hasValueChanged(n,e,t);return s?(Rd(e),gs(n,e,t,s),s):Array.isArray(n)||xn(n,e,t)===0?(li(e,n,t),0):1}function K_(n,e,t,r,s){li(e,n,t,s)}function hn(n){return(n==null?void 0:n.tagJsType)?n:Q_(n)}function Q_(n){return Ge(n)?Ud(n):Md(n)}function qi(n,e,t,r,s){return{description:"getNewContext",updateCount:0,value:n,destroy$:new Z,render$:new Z,tagJsVar:s||hn(n),withinOwnerElement:t,parentContext:r}}function jd(n,e,t,r,s){const i=document.createTextNode(hs),o=qi(n,t,!0,e.context);return o.withinOwnerElement=!1,o.placeholder=i,s||(o.placeholder=r),m_(n,e,o,s,r),s&&Mi.push([Wa,[s,i]]),o}function Bd(n,e,t,r){return e.hasEmitted=!0,e.contextItem=jd(n,t,[],r)}function Hd(n,e,t){var o;++e.updateCount;const s=n.owner._innerHTML;s.processInit=s.oldProcessInit;const i=(o=e.subContext)==null?void 0:o.contextItem;nc(i,s,t)}function Y_(n,e,t,r,s){e.subContext={},n.processUpdate=Hd,X_(n,t,e,r,s)}function X_(n,e,t,r,s){const{appendMarker:i,insertBefore:o}=of(s,r),c=t.subContext;c.appendMarker=i;const h=n.owner._innerHTML;h.processInit=h.oldProcessInit,Bd(h,c,e,o)}function qd(){return{component:!1,tagJsType:"innerHTML",hasValueChanged:()=>0,processInitAttribute:Me,processInit:Y_,processUpdate:Hd,destroy:f_}}function $i(n){++n.updateCount;const e=n.global,r=n.state.newest;delete n.inputsHandler,delete n.updatesHandler,fs(r,e),Z_(n)}function Z_(n){n.htmlDomMeta=[],delete n.contexts,delete n.state,delete n.global,n.renderCount=0}function ew(n,e){var o;const t=(o=e.state)==null?void 0:o.newest,r=wd(n),s=n;if(r)return ec(s,t)?0:7;if(n==null?void 0:n.tagJsType){const c=e.value;if(!c&&n)return 88;const l=c.wrapper,h=n.wrapper;return(h==null?void 0:h.original)===(l==null?void 0:l.original)?0:88}return 8}function zi(n,e){var c;const t=e.global,r=(c=e.state)==null?void 0:c.newest,s=wd(n),i=n;if(s)return ec(i,r)?(ma(e,n,r),0):(fs(r,t),us(e),7);if(n==null?void 0:n.tagJsType){const f=e.state.newest.ownerSupport;return ma(e,n,f)===!0?0:88}return $i(e),8}function tw(n,e){const t={component:!1,tagJsType:ne.templater,processInit:"",processInitAttribute:Me,processUpdate:xn,hasValueChanged:zi,destroy:$i,propWatch:n,props:e,key:function(s){return t.arrayValue=s,t},matchesInjection(r,s){var i;if(t.wrapper===r||((i=t.wrapper)==null?void 0:i.original)===(r==null?void 0:r.original))return s}};return t}const Xr=[];function nw(n,e){return function(s,i,o){const c=$d(n,s,o),l=s.ownerSupport,h=Wi(n,i,l,s.appSupport,c);return kd(n,e,h,c)}}function $d(n,e,t){const r=n.propWatch===ut.DEEP?tc:nf,s=n.props,i=e.propsConfig;let o=i.castProps;const c=t==null?void 0:t.propsConfig,l=c==null?void 0:c.castProps;return l&&(i.castProps=l,o=Gy(e,t,t.ownerSupport,s,r)),o||Qa(s)}function rw(n,e,t,r,s){const i=jw(n,e,t,r,s);return i.hasEmitted||zd(n,i),i}function zd(n,e){const r=n.Observables[0];if(!e.hasEmitted){if("withDefault"in n){e.subValueHandler(n.withDefault,0);return}if("value"in r){e.subValueHandler(r.value,0);return}return}const s=e.lastValues[0].value;e.subValueHandler(s,0)}function sw(n,e,t,r,s,i){e.destroy=cf;const o=Bi(n,t.tagName),c=function(f,p){Hi(n,f,t,kt,o,s),ya(p)},l=af(e.Observables,i,c,e,s);return s.subContext=l,s.value=e,s.tagJsVar=e,e.processUpdate=function(f,p,m){return Ld(f,s,m,t,n,kt)},{subContext:l,onOutput:c}}function iw(n,e,t,r,s,i){const{subContext:o}=sw(n,e,t,e,s,i);o.hasEmitted||ow(e,o)}function ow(n,e){var o;const r=e.tagJsVar.onOutput;let i=((o=n.Observables[0])==null?void 0:o.value)||n.withDefault;n.callback&&(i=n.callback(i)),r(i,!0,e)}function aw(n,e,t){return{component:!1,onOutput:Me,tagJsType:ne.subscribe,processInitAttribute:iw,processInit:rw,hasValueChanged:cw,processUpdate:Me,destroy:Bw,callback:t,withDefault:e,Observables:[n]}}function cw(n,e){if(!(n!=null&&n.tagJsType))return 1;const t=n.Observables;if(!t)return 2;const s=e.value.Observables;return!s||s.length!==t.length?3:t.every((o,c)=>o===s[c])?0:4}function lw(n,e,t,r){const s={component:!1,tagJsType:"tag-conversion",processInitAttribute:Me,processInit:(i,o,c)=>{const l=n.returnValue;return e.tagJsVar.processInit(l,e,t,r.placeholder)},processUpdate:(i,o,c)=>{if(o.locked||o.deleted)return;++o.updateCount;const l=o.value,h=l==null?void 0:l.tagJsType,p=(i==null?void 0:i.tagJsType)!==h;if(ew(i,o)||p||s.hasValueChanged(i,o,t)){s.destroy(o,t),gs(i,o,c,789);return}o.locked=467,o.render$.next();const R=o.returnValue;uw(e,i,o,R,t),delete o.locked},hasValueChanged:(i,o,c)=>{const l=n.returnValue;return e.tagJsVar.hasValueChanged(l,e,c)},destroy:(i,o)=>{++n.updateCount,n.deleted=!0,delete n.returnValue;const c=e.tagJsVar.destroy(e,t);return dr(c)?c.then(()=>{const l=wu(n);return Qe(),l}):(n.destroy$.next(),wu(n))}};return s}function Wd(n,e,t){const r=n.context,s=n.returnValue,i=hn(s);delete r.global,r.contexts=[];const o={updateCount:0,value:s,tagJsVar:i,destroy$:new Z,render$:new Z,placeholder:r.placeholder,withinOwnerElement:!0,parentContext:r,contexts:r.contexts},c=lw(r,o,n,t);return r.subContext=o,r.tagJsVar=c,i.processInit(s,o,n,t.placeholder),n}function Jd(n,e,t){const r=Wi(n,e,t,t==null?void 0:t.appSupport),s=r.propsConfig;if(s){const o=n.tagJsType!==ne.tagComponent?[]:$d(n,r);s.castProps=o}return Vd(r,e.state.newest,e)}function Gd(n,e,t){const r=Jd(n,e,t);return r.templater.tag?Wd(r,r.ownerSupport,e):r}function uw(n,e,t,r,s){const i=Qa(e.props),o=n.value;o.props=i;const c=s.propsConfig;if(c&&(c.castProps=i),(e==null?void 0:e.tagJsType)==="tagComponent"){if(n.inputsHandler=t.inputsHandler,n.updatesHandler=t.updatesHandler,t.value=e,t.inputsHandler){Fe(t);const l=t.inputsHandler;l(i),Ce()}if(t.updatesHandler){Fe(t);const l=t.updatesHandler;l(i),Ce()}}n.tagJsVar.processUpdate(r,n,s,[]),n.value=r}function wu(n,e){delete n.returnValue,delete n.global,n.contexts=[],n.htmlDomMeta=[],delete n.inputsHandler,delete n.updatesHandler}function hw(n,e,t,r){const s=Jd(n,e,t);return Wd(s,t,e)}function Kd(n,e,t,r,s){return us(e),s?hw(n,e,t):Gd(n,e,t)}function dw(n){var s,i;const e=Tt();if(!e)throw new Error("tag.inject can only be called within a tag or host context");let t=e.parentContext;for(;t;){const o=t.contexts;if(o){for(const c of o)if(c.isAttr&&((s=c.tagJsVar)!=null&&s.matchesInjection)){const l=c.tagJsVar.matchesInjection(n,c);if(l!==void 0)return l.returnValue}}if((i=t.tagJsVar)!=null&&i.matchesInjection&&t.tagJsVar.matchesInjection(n,t))return t.returnValue;t=t.parentContext}const r=`Could not find parent context for tag.inject ${n}`;throw console.error(r,{targetItem:n,context:e}),new Error(r)}function fw(n,e){return pw(n,e)}function pw(n,e,t=[]){const r=n.context;t.push({support:n,renderCount:r.renderCount,provider:e});const s=e.children;for(let i=s.length-1;i>=0;--i){const o=s[i],c=o.context;t.push({support:o,renderCount:c.renderCount,provider:e})}return t}function gw(n){const t=n.context.providers;if(!t)return[];const r=[];for(const s of t){const i=s.owner,o=fw(i,s);r.push(...o.map(mw))}return r}function mw(n){return n.support}function yw(n){return ne.templater===n.tagJsType}function _w(n,e){const t=e.context.global;return t&&t.deleted?!1:!!ww(n,e)}function ww(n,e){const t=n.props,s=e.propsConfig.latest;if(Tw(t,s))return!0;switch(n.propWatch){case ut.IMMUTABLE:return Dw(t,s);case ut.SHALLOW:return qy(t,s)}return!Uy(t,s,tc)}function Tw(n,e){const t=n.length,r=e.length;return t!==r}function ui(n,e=[]){const t=n.context,r=n.templater,s=yw(r),i=n.ownerSupport;if(t.locked)return e.push(n),e;if(s)return ui(i,e);const o=n.context.global;if(o&&o.deleted===!0)return e;const c=n,l=ds(c.templater),h=n.templater.tagJsType,p=i&&h!==ne.stateRender&&(!l||_w(c.templater,c));if(c.context.providers){const v=gw(c);e.push(...v)}return p?(ui(i,e),l&&e.push(c),e):(e.push(c),e)}const Ew=[];function Qd(n){++ue.locks;for(let e=0;e<n.length;++e)Yd(n[e]);--ue.locks,Qe()}function bw(n){++ue.locks,Yd(n),--ue.locks,Qe()}function Yd(n){const e=n.context;e.tagJsVar.processUpdate(e.value,e,n.ownerSupport,Ew)}function Xd(n,e,{resolvePromise:t,resolveValue:r}){return dr(n)?n.then(vw(e,t)):r(n)}function vw(n,e){return t=>{const r=n.context,s=r.global;if(r.deleted===!0||(s==null?void 0:s.deleted)===!0)return e(t);const i=ui(n);return Qd(i),e(t)}}function Ke(n){return he.stateConfig.handlers.handler(n)}function Iw(n){return Ke(()=>{var r;const e=n(),t=ci();return(r=t==null?void 0:t.context)!=null&&r.global?Xd(e,t,{resolvePromise:Aw,resolveValue:Cw}):e}),U}function Aw(n){return n}function Cw(n){return n}function Zd(n){return Ke(function(){Tt().destroy$.toCallback(n)}),U}function Sw(n,e,t,...r){const s=t(...r),i=Ja(n);if(!i)return s;if(!i.context.global){const o=i.context;o.tagJsVar.processUpdate(o.value,o,i.ownerSupport,[])}return dr(s)&&s.finally(()=>{if(!n.global){const o=i.context;o.tagJsVar.processUpdate(o.value,o,i.ownerSupport,[])}}),s}function ze(n){const e=Tt(),t=Ke({callback:n}),r=Ke(()=>ef(e,he.stateConfig,t));return t.callback=n,r}function ef(n,e,t){const r=e.states;return function(...i){const o=Sw(n,r,t.callback,...i);return Qe(),o}}function Rw(n){const e=Tt(),t=i=>{Fe(e);const o=n();return Ce(),o},r=e.render$.subscribe(()=>{t()}),s=t();return U.onDestroy(()=>r.unsubscribe()),s}let Pw=0;const Hr=tf("click"),Kn=tf("mousedown");function tf(n){return function(t){const r=ze(t);return Ke(()=>{hf().addEventListener(n,r)}),r}}const kw={get:hf,onclick:Hr,click:Hr,onClick:Hr,mousedown:Kn,onmousedown:Kn,onMouseDown:Kn};ps("onclick",Hr);ps("click",Hr);ps("onMouseDown",Kn);ps("onmousedown",Kn);ps("mousedown",Kn);function ps(n,e){Object.defineProperty(U,n,{get(){return e},set(t){return e(t)}})}var ut;(function(n){n.DEEP="deep",n.SHALLOW="shallow",n.NONE="none",n.IMMUTABLE="immutable"})(ut||(ut={}));function U(n,e=ut.SHALLOW){const t=function(...o){const c=tw(e,o);c.tagJsType=ne.tagComponent,c.processInit=Kd,c.hasValueChanged=zi;const l=nw(c,t);return l.original=n,c.wrapper=l,c},r=n;t.original=n,r.tags=Xr,r.setUse=he,r.ValueTypes=ne,r.tagIndex=Pw++,Xr.push(t);const s=t;return s.inputs=i=>{const o=Tt();o.inputsHandler=i;const c=o.tagJsVar;return i(c.props),!0},s.updates=i=>{const o=Tt();return o.updatesHandler=i,!0},s.getInnerHTML=qd,s}function xw(n){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")}function Vw(){throw new Error("Do not call tag.use as a function but instead set it as: `(props) => tag.use = (use) => html`` `")}U.element=kw;U.use=Vw;U.deepPropWatch=U;U.route=xw;U.inject=dw;U.output=Ye;U.onInit=Iw;U.onDestroy=Zd;U.callback=ze;U.onRender=Rw;U.getInnerHTML=qd;U.app=function(n){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")};U.immutableProps=function(e){return U(e,ut.IMMUTABLE)};U.watchProps=function(e){return U(e,ut.SHALLOW)};Object.defineProperty(U,"use",{set(n){n.original={setUse:he,tags:Xr},n.tagJsType=ne.stateRender,n.processInit=Kd,n.processUpdate=xn,n.hasValueChanged=zi,n.destroy=$i}});Object.defineProperty(U,"promise",{set(n){zw(n)}});function Dw(n,e){const t=n.length;for(let r=0;r<t;++r){const s=n[r],i=e[r];if(s!==i)return 2}return!1}const nf=3,tc=10;function Nw(n,e,t){const r=n.templater;if(r.tagJsType!==ne.stateRender){switch(r.propWatch){case ut.IMMUTABLE:return n.propsConfig={latest:e,castProps:t};case ut.SHALLOW:return n.propsConfig={latest:e.map(Ow),castProps:t}}return n.propsConfig={latest:e.map(Lw),castProps:t}}}function Ow(n){return Ka(n,nf)}function Lw(n){return Ka(n,tc)}function rf(n,e,t){const r={templater:n,context:e,castedProps:t,appSupport:void 0},s=e.global;return s.blocked=[],e.state||(e.state={newer:{state:[],states:[]}}),r}function sf(n,e,t,r){e.appSupport=t||e;const s=n.props;return s&&(e.propsConfig=Nw(e,s,r)),e}function Wi(n,e,t,r,s){const i=rf(n,e,s);return i.ownerSupport=t||i,i.ownerSupport.appSupport=r||i.ownerSupport,sf(n,i,r,s)}function Mw(n,e,t,r){let s=t.templater||t;const i=n.templater.tag;i&&i._innerHTML&&(s=t._innerHTML);const o=Wi(s,e,r,r.appSupport),l=n.context.state.oldest;Id(l,o)}function ma(n,e,t){if(ds(e))return n.global===void 0&&us(n),n.oldTagJsVar=n.tagJsVar,n.tagJsVar=e,Fw(e,n,t),!0;if(n.global){n.oldTagJsVar=n.tagJsVar,n.tagJsVar=e;const i=n.state.newest;if(i)return typeof e===re.function||Mw(i,n,e,t),!0}if(n.inputsHandler){const i=t.propsConfig;n.inputsHandler(i)}return e.processInit(e,n,t,n.placeholder),n.oldTagJsVar=n.tagJsVar,n.tagJsVar=e,!0}function Fw(n,e,t){if(!e.state.newest){if(e.inputsHandler){const r=t.propsConfig;e.inputsHandler(r)}n.processInit(n,e,t,e.placeholder);return}}function gs(n,e,t,r){const s=n&&n.tagJsType;if(delete e.deleted,s){ma(e,n,t);return}if(Ge(n)){li(e,n,t),e.oldTagJsVar=e.tagJsVar,e.tagJsVar=Ud(n);return}if(typeof n===re.function){e.value=n;return}r&&__(n,e)}function nc(n,e,t){const s=n.tagJsVar.hasValueChanged(e,n,t);return s===0||gs(e,n,t,s),s}function of(n,e){let t;return n&&(t=e=document.createTextNode(hs),Mi.push([Wa,[n,e]])),{appendMarker:t,insertBefore:e}}function Uw(n,e,t){const r=g_(n,e,t);if(e.hasEmitted!==!0){const s=e.value.Observables;if(!s||!("value"in s[0]))return}if(r===0&&n.callback){const s=e.subContext;zd(n,s)}}function jw(n,e,t,r,s){const i=n.Observables,{appendMarker:o,insertBefore:c}=of(s,r);let l=function(p,m,v){Bd(p,v,t,c),ya(m),l=v.tagJsVar.onOutput=function(x,D,V){const F=V.contextItem;nc(F,x,t),F.tagJsVar.processUpdate(x,F,t,[x]),F.value=x,ya(D)}};const h=af(i,t,(f,p,m)=>l(f,p,m),n,e);return h.appendMarker=o,e.subContext=h,n.processUpdate=Uw,n.onOutput=l,h}function af(n,e,t,r,s){function i(h,f){var p;l.lastValues[f]={value:h,tagJsVar:hn(h),oldTagJsVar:(p=l.lastValues[f])==null?void 0:p.tagJsVar},o(l.lastValues,f)}function o(h,f){const p=l.tagJsVar;if(p==null?void 0:p.callback){Fe(s);const R=p.callback(...h.map(x=>x.value));t(R,c,l),Ce();return}const v=h[f].value;t(v,c,l)}let c=!0;const l={lastValues:[],subValueHandler:i,valuesHandler:o,tagJsVar:r,subscriptions:[]};return n.forEach((h,f)=>{c=!0,l.subscriptions.push(h.subscribe(p=>i(p,f))),c=!1}),r.onOutput=t,l}function cf(n){const e=n.subContext;if(!e)return;e.subscriptions.forEach(r=>r.unsubscribe()),delete n.subContext}function Bw(n,e){++n.updateCount;const t=n.subContext;return cf(n),Dd(t,e)}function ya(n){n||he.stateConfig.support||Qe()}class lf extends Z{constructor(t){super(t);nt(this,"value");this.value=t}subscribe(t){const r=super.subscribe(t);return t(this.value,r),r}}const uf=((n,e)=>rc(n,e).pastResult),Hw=n=>n;function qw(n){const e=(t,r)=>rc(t,r,n).pastResult;return e.setup=n,sc(()=>e,e),e}const rc=(n,e,{init:t,before:r,final:s=Hw}={})=>{const i=Ke({pastResult:void 0,values:void 0}),c=typeof n=="function"?n():n,l=i.values===void 0;let h=0;l&&typeof n=="function"&&U.onRender(()=>{if(++h,h===1)return;const p=n();f(p)});function f(p){if(i.values===void 0){if(r&&!r(p))return i.values=p,i;const x=(t||e)(p,i.values);return i.pastResult=s(x),i.values=p,i}if(p.every((R,x)=>R===i.values[x]))return i;if(r&&!r(p))return i.values=p,i;const v=e(p,i.values);return i.pastResult=s(v),i.values.length=0,i.values.push(...p),i}return f(c)};function sc(n,e){return Object.defineProperty(e,"noInit",{get(){const t=n();return t.setup.init=()=>{},t}}),Object.defineProperty(e,"asSubject",{get(){const t=n(),r=Ke(()=>ci()),s=Ke(()=>new lf(void 0));Ke(()=>({state:he.stateConfig.state,states:he.stateConfig.states}));const i=(o,c)=>(rc(o,(h,f)=>{const p=ci(),m=c(h,f);p!==r&&r.context.state.older,s.next(m)},t.setup),s);return i.setup=t.setup,sc(()=>i,i),i}}),Object.defineProperty(e,"truthy",{get(){const t=n();return t.setup.before=r=>r.every(s=>s),t}}),e}sc(()=>qw({}),uf);class ic extends Error{constructor(t,r,s={}){super(t);nt(this,"details");this.name=ic.name,this.details={...s,errorCode:r}}}class oc extends ic{constructor(e,t){super(e,"sync-callback-error",t),this.name=oc.name}}new oc("callback() was called outside of synchronous rendering. Use `callback = callbackMaker()` to create a callback that could be called out of sync with rendering");const $w=()=>{};function zw(n){const e=Tt(),t=Ke({callback:$w}),r=Ke({current:void 0}),s=Ke(()=>ef(e,he.stateConfig,t));if(r.current!==n){r.current=n;const i=n;n.then(()=>{r.current===i&&s()})}}function Tt(){return he.stateConfig.context}function hf(){return Tt().target}const Qs=[];function Fe(n){return Qs.push(n),he.stateConfig.context=n}function Ce(){Qs.pop(),he.stateConfig.context=Qs[Qs.length-1]}function Ww(n,e,t,r,s,i,o){const c=document.createTextNode(hs);if(Xr.push(t.wrapper||{original:t}),i.placeholder=c,e.isApp=!0,!s)throw new Error(`Cannot tagElement, element received is type ${typeof s} and not type Element`);s.destroy=function(){const p=i.events;for(const v in p){const R=p[v];s.removeEventListener(v,R)}i.events={},++ue.locks;const m=fs(f,e);return--ue.locks,Qe(),m},++ue.locks;const l=document.createDocumentFragment();l.appendChild(c);const f=Gd(t,i,{appSupport:{appElement:s,context:i},appElement:s,context:i,isRoot:!0});return f.appElement=s,o&&(r.tag=f.templater.tag),--ue.locks,Qe(),s.appendChild(l),{support:f,tags:Xr,ValueTypes:ne}}function Jw(n,e,t){const r=rf(n,e);return sf(n,r,r),r.appElement=t,r.context=e,e.state.oldest||(e.state.oldest=r,e.state.older=e.state.newer),e.state.newest=r,r}typeof document=="object"&&(document.taggedJs&&console.warn("🏷️🏷️ Multiple versions of taggedjs are loaded. May cause issues."),document.taggedJs=!0);const $o=[],Tu="__taggedjs_tag_element__";function Gw(n,e,t){const r=e[Tu],s=$o.findIndex(m=>m.element===e);if((r||s>=0)&&console.warn("tagElement called multiple times for the same element",{element:e}),s>=0){const m=$o[s].support;fs(m,m.context.global),$o.splice(s,1)}e[Tu]=!0,e.innerHTML="";let i=(()=>h(t));i.propWatch=ut.NONE,i.tagJsType=ne.stateRender,i.processUpdate=xn,i.props=[t],i.isApp=!0;const o=Kw(i,e),c=o.global,l=o.state.newest;Ed(l.context),Li(l);let h=n(t);const f=typeof h==re.function;f||(ds(h)?(o.state.newest.propsConfig={latest:[t],castProps:[t]},i.propWatch=h.propWatch,i.tagJsType=h.tagJsType,i.wrapper=h.wrapper,i=h):(i.tag=h,h=n));const p=Ww(n,c,i,h,e,o,f);return Ce(),p}function Kw(n,e){const t={component:!1,tagJsType:"templater",hasValueChanged:zi,destroy:$i,processInitAttribute:Me,processInit:function(){console.debug("do nothing app function")},processUpdate:xn},r={updateCount:0,value:n,varCounter:0,destroy$:new Z,render$:new Z,withinOwnerElement:!1,renderCount:0,global:void 0,state:{},tagJsVar:t};return us(r),r.events={},Jw(n,r,e),r}const df=":tagvar",Qw=":";function Yw(n){return Array.isArray(n)&&Object.prototype.hasOwnProperty.call(n,"raw")}function Xw(n,e){return function(r,s,i){if(Yw(s)){const o=[];for(let l=0;l<s.length;++l)o.push(s[l]),l<i.length&&o.push(String(i[l]??""));const c=o.join("");return e(r,[n,c])}return e(r,[n,s])}}const Zw=[["alt","alt"],["ariaLabel","aria-label"],["referrerPolicy","referrerpolicy"],["autoFocus","autoFocus"],["border","border"],["id","id"],["for","for"],["fill","fill"],["content","content"],["charset","charset"],["cellPadding","cellpadding"],["cellSpacing","cellspacing"],["class","class"],["href","href"],["lang","lang"],["loading","loading"],["value","value"],["placeholder","placeholder"],["src","src"],["title","title"],["width","width"],["height","height"],["type","type"],["min","min"],["max","max"],["step","step"],["name","name"],["wrap","wrap"],["checked","checked"],["disabled","disabled"],["selected","selected"],["minLength","minLength"],["maxLength","maxLength"],["open","open"],["rel","rel"],["rows","rows"],["style","style"],["target","target"],["viewBox","viewBox"],["valign","valign"]];function e0(n,e,t){const r=ms(n,n.elementFunctions);return ff(r,e,t)}function ff(n,e,t){function r(s){return r.toCallback(s)}return r.toCallback=t,n.listeners.push([e,r]),n.allListeners.push([e,r]),n}function pf(n,e){const t=ms(n,n.elementFunctions);return c0(e[0],e[1],t),t}function t0(n,e){const t=ms(n,n.elementFunctions);for(const r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;const s=e[r];t.attributes.push([r,s]),mf(t,s),Zr(r)?di(r,t):Zr(s)&&di(s,t)}return t}const n0=Object.fromEntries(Zw.map(([n,e])=>[n,Xw(e,pf)])),r0=[["onClose","onclose"],["onCancel","oncancel"],["onDoubleClick","ondblclick"],["onClick","click"],["onBlur","onblur"],["onChange","onchange"],["onInput","oninput"],["contextMenu","contextmenu"],["onMouseDown","onmousedown"],["onMouseUp","onmouseup"],["onMouseOver","onmouseover"],["onMouseOut","onmouseout"],["onKeyDown","onkeydown"],["onKeyUp","onkeyup"]];function gf(n,e){return n.attributes.push(e),mf(n,e[1]),Zr(e[0])?di(e[0],n):Zr(e[1])&&di(e[1],n),n}const s0=(()=>{const n=Object.fromEntries(r0.map(([r,s])=>[r,function(o){return e0(this,s,o)}])),e=Object.fromEntries(Object.entries(n0).map(([r,s])=>[r,i0(s)])),t=e.id;return e.id=function(...s){const i=s[0];return this.arrayValue=typeof i=="function"?i():i,t.apply(this,s)},{...n,attr:function(...s){return pf(this,s)},attrs:function(s){return t0(this,s)},key:function(r){return this.arrayValue=r,this},...e}})();function hi(n){return s0}function mf(n,e){let t=1;e!=null&&typeof e!="function"&&typeof e.length=="number"&&(t+=e.length),n.contentId+=t}function i0(n){return(function(t,...r){return n(this,t,r)})}function o0(n,e,t){if(Fi(t)){for(const r in t){if(!Object.prototype.hasOwnProperty.call(t,r))continue;t[r]?n.classList.add(r):n.classList.remove(r)}return}Nd(n,e,t)}function di(n,e){e.contexts||(e.contexts=[]),e.contexts.push(n),++e.contentId}function Zr(n){return Array.isArray(n)||In(n)||(n==null?void 0:n.tagJsType)}function Eu(n,e){return(t,r)=>gf(t,[n,r,!1,e])}function ge(n){return(e,t)=>ff(e,n,t)}const a0=Object.fromEntries([["onClick",ge("click")],["onDoubleClick",ge("ondblclick")],["onDblClick",ge("ondblclick")],["onDblClick",ge("ondblclick")],["onBlur",ge("onblur")],["onChange",ge("onchange")],["onCancel",ge("oncancel")],["onClose",ge("onclose")],["onInput",ge("oninput")],["onMousedown",ge("onmousedown")],["onMouseDown",ge("onmousedown")],["onMouseup",ge("onmouseup")],["onMouseUp",ge("onmouseup")],["onMouseover",ge("onmouseover")],["onMouseOver",ge("onmouseup")],["onMouseout",ge("onmouseout")],["onMouseOut",ge("onmouseout")],["onKeyup",ge("onkeyup")],["onKeyUp",ge("onkeyup")],["onKeydown",ge("onkeydown")],["onKeyDown",ge("onkeydown")]]),bu=Object.assign(Object.fromEntries(["checked","disabled","selected"].map(n=>[n,Eu(n,b_)])),{class:Eu("class",o0)},a0);function c0(n,e,t){return n in bu?bu[n](t,e):gf(t,[n,e,!1,kt])}function l0(n){return yf(n)}function yf(n){const e=u0(n.attributes),t=_f(n.innerHTML);return`<${n.tagName}${e}>${t}</${n.tagName}>`}function u0(n){if(!n||n.length===0)return"";const e=[];return n.forEach(t=>{const r=t[0];if(typeof r!="string"||r.length===0)return;const s=Tf(t[1]);if(s===!0){e.push(r);return}s===!1||s===void 0||s===null||e.push(`${r}="${wf(String(s))}"`)}),e.length>0?` ${e.join(" ")}`:""}function _f(n){return!n||n.length===0?"":n.map(e=>{const t=Tf(e);return h0(t)?yf(t):Array.isArray(t)?_f(t):t==null||t===!1?"":wf(String(t))}).join("")}function h0(n){return!!n&&typeof n=="object"&&typeof n.tagName=="string"}function wf(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Tf(n){return typeof n=="function"?n():n}function Ef(n,e){++n.updateCount;const t=n.contexts,r=[];if(n.paintCommands){for(let s=it.length-1;s>=0;--s){const i=it[s],o=n.paintCommands.indexOf(i);if(o>=0&&(it.splice(s,1),n.paintCommands.splice(o,1),n.paintCommands.length===0))break}delete n.paintCommands,zo(n);return}if(t.length&&(fi(t,e,r),t.length=0,r.length)){const s=n.htmlDomMeta;return n.deleted=!0,Promise.all(r).then(()=>{++ue.locks,Yr(s),zo(n),--ue.locks,Qe()})}Yr(n.htmlDomMeta),zo(n)}function zo(n){n.htmlDomMeta=[],delete n.contexts,n.deleted=!0}function fi(n,e,t){const r=n[0],s=r.tagJsVar.destroy(r,e);if(r.deleted=!0,dr(s))return t.push(s.then(()=>{if(n.length>1)return fi(n.slice(1,n.length),e,t)}));if(r.htmlDomMeta&&(Yr(r.htmlDomMeta),delete r.htmlDomMeta),n.length>1)return fi(n.slice(1,n.length),e,t)}function bf(n,e,t){if(e.deleted===!0)return;if(++e.updateCount,ac(n,e)){Ef(e,t),e.htmlDomMeta=[],delete e.deleted,gs(n,e,t,789);return}const i=e.contexts,o=n.contexts||[],c=e.tagJsVar,l=n,h=c.allListeners,f=l.allListeners;for(let p=0;p<f.length;++p){const m=f[p],v=h[p][1];v.toCallback=m[1].toCallback}if(i.length!==o.length){const p=new Array(i.length);for(let m=0;m<i.length;++m)p[m]=i[m].value;throw console.info("context mismatch",{value:n,context:e,conValues:p,vContexts:o,deleted:e.deleted,contexts:i}),new Error(`Expected ${i.length} contexts but got ${o.length}`)}e.locked=79;for(let p=0;p<i.length;++p){const m=i[p];m.tagJsVar.processUpdate(o[p],m,t)}delete e.locked}function ac(n,e){if(!n)return 1;const t=e.value;if(t===n)return 0;if(n.tagJsType!=="element"||t===null)return 1;const r=n,s=t,i=r.contentId,o=s.contentId;if(i!==o)return 1;const c=r.innerHTML.length,l=s.innerHTML.length;return c!==l?1:0}function vf(n,e,t){const r=t[e];if(r){let i=!1;if(n.originalStopPropagation=n.stopPropagation,n.stopPropagation=function(){i=!0,n.originalStopPropagation.call(n),n.stopPropagation=n.originalStopPropagation,delete n.originalStopPropagation},r(n),n.defaultPrevented||i)return}const s=t.parentNode;s&&vf(n,e,s)}function If(n,e,t,r){const s=n.appElement,i=d0(e);e==="blur"&&(e="focusout");const c=n.context.events;if(!c[e]){const l=function(f){vf(f,i,f.target)};c[e]=l,s.addEventListener(e,l)}t[i]=r,t[e]=r}function d0(n){return n==="blur"&&(n="focusout"),"_"+n}function f0(n,e){const t=e.context.global,r=function(i,o){if(t.deleted!==!0)return p0(r.tagFunction,r.support,i,o)};return r.tagFunction=n,r.support=e,r}function p0(n,e,t,r){const s=Ui(e),i=s.context;i.locked=1;const o=n.apply(t,r);return delete i.locked,Af(o,s)}function Af(n,e){const t=e.context.global;if(t!=null&&t.deleted)return;const r=ui(e);return Qd(r),Xd(n,e,{resolvePromise:y0,resolveValue:_0})}const g0="no-data-ever",m0="promise-no-data-ever";function y0(){return m0}function _0(){return g0}function Cf(n,e,t,r){const s=function(...i){return s.tagFunction(n,i)};s.tagFunction=e,s.support=t,If(t.appSupport,r,n,s)}function Sf(n){return n==null||n===!1}function Rf(n,e,t,r,s,i,o,c,l){const h=qi(n,[],!0,t);return h.description="tagJsVar-attr",h.target=c,h.isAttr=!0,h.isNameOnly=l,h.stateOwner=Ui(i),h.supportOwner=i,Fe(h),r.processInitAttribute(o,n,c,r,h,i,kt),Ce(),h.oldTagJsVar=h.tagJsVar,h.tagJsVar=r,h}function Pf(n,e,t,r,s,i,o,c){if(Sf(e))return;const l=typeof e;if(l===re.object){for(const h in e)vu(h,t,e,n,r,i,o,i);return i}if(l==="function"){const h=w0(c);c.tagJsVar=h,Fe(c);const f=e(c),p=hn(f);if(Ce(),p!=null&&p.tagJsType){c.state={newer:{state:[],states:[]}};const m=Rf(p,i,o,p,-1,r,"attr",t,!0);return m.tagJsVar=p,c.subContext=m,i}return vu("attr",t,e,n||[],r,i,o,i),i}e.length!==0&&s(t,e,hs)}function vu(n,e,t,r,s,i,o,c){const l=Bi(n,e.tagName),h=t[n],p=xf(n,h,r,e,s,kt,i,o,l);p!==void 0&&(Array.isArray(p)?c.push(...p):c.push(p))}function w0(n){return{tagJsType:"relay",component:!1,hasValueChanged:(t,r,s)=>r.subContext.tagJsVar.hasValueChanged(t,r.subContext,s),processInitAttribute:(t,r,s,i,o,c,l)=>o.subContext.tagJsVar.processInitAttribute(t,r,s,i,o.subContext,c,l),destroy:(t,r)=>t.subContext.tagJsVar.destroy(t.subContext,r),processUpdate:(t,r,s,i)=>{const o=t(r.subContext);return r.subContext.tagJsVar.processUpdate(o,r.subContext,s,i)},processInit:(t,r,s,i,o)=>r.subContext.tagJsVar.processInit(t,r.subContext,s,i,o),matchesInjection:t=>n.subContext.tagJsVar.matchesInjection(t,n.subContext)}}function T0(n,e,t,r,s,i,o,c,l){if(t){if(Sf(e)||e===""){r.removeAttribute(t);return}if(typeof t===re.object)if(typeof e===re.object)for(const p in t)p in e||lt.push([Iu,[r,p]]);else for(const p in t)lt.push([Iu,[r,p]])}const h=Pf(n,e,r,s,i,o,c,l);h&&o.push(...h)}function Iu(n,e){n.removeAttribute(e)}function E0(n,e,t,r){const s=e,i=n;if(i!=null&&i.tagJsType){const c=e.value;if(!(c!=null&&c.tagJsType)){i.isAttr=!0,Fe(e),i.processInitAttribute(s.attrName,n,s.target,i,s,t,kt),Ce(),s.tagJsVar=i;return}c.hasValueChanged(i,e,t);return}if(s.isNameOnly){T0(r,n,s.value,s.target,t,s.howToSet,[],s.parentContext,s),s.value=n;return}const o=s.target;C0(n,s.attrName,s,o,t,s.howToSet,s.isSpecial),e.value=n}const b0=new RegExp(df+"(\\d+)"+Qw,"g");function kf(n){return n.search&&n.startsWith(df)?n.search(b0):-1}function v0(n,e,t,r,s,i,o){const c=r.length,l=[];e.forEach(f=>{if(kf(f)>=0){const m=r.length,v=hn(f),R={description:"attribute-array-item",updateCount:0,isAttr:!0,target:t,attrName:n,withinOwnerElement:!0,tagJsVar:v,parentContext:o,destroy$:new Z,render$:new Z};v.processUpdate=function(V,F,ie,ke){++F.updateCount,h(ke)};const x=i[m];R.value=x,l.push(R),++o.varCounter}});function h(f){const p=I0(e,f,c).join("");s(t,n,p)}return h(i),l}function I0(n,e,t){return n.reduce((r,s)=>{if(kf(s)>=0){const o=t++,c=e[o];return r.push(c),r}return r.push(s),r},[])}function A0(n,e,t,r,s,i,o,c,l){if(typeof e===re.function)return++s.varCounter,Vf(e,o,n,t);const h=hn(e),f={description:"dynamic-attribute",updateCount:0,isAttr:!0,target:t,attrName:n,howToSet:i,value:e,withinOwnerElement:!0,tagJsVar:h,destroy$:new Z,render$:new Z,parentContext:s};return r.push(f),h.processUpdate=E0,V_(n,e,f,t,i,o,c),f.value=e,f}function Au(n){return Fi(n)&&"TagJsTag"in n?n.tagJsVar:-1}function xf(n,e,t,r,s,i,o,c,l){const h=Au(n);let f=h>=0||e===void 0&&typeof n!="string",p=t[h];e!=null&&e.tagJsType?p=e:(n!=null&&n.tagJsType||typeof n=="function")&&(f=!0,p=n,e=n);const m=p;if(m!=null&&m.tagJsType)return Rf(e,o,c,m,h,s,n,r,f);if(f){h===-1&&f&&(p=n);const R=qi(p,[],!0,c);return R.description="processAttribute",R.isAttr=!0,R.target=r,R.isNameOnly=!0,R.howToSet=i,Pf(t,p,r,s,i,o,c,R),R}if(Array.isArray(e))return v0(n,e,r,[],i,t,s.context);const v=Au(e);if(v>=0){const R=t[v];return A0(n,R,r,[],c,i,s,l)}return Hi(n,e,r,i,l,c)}function C0(n,e,t,r,s,i,o){return In(n)?R0(s,n,r,e):S0(n,r,e,o,i,s)}function S0(n,e,t,r,s,i){if(r!==!1){Od(t,n,e,r);return}switch(n){case void 0:case!1:case null:lt.push([P0,[e,t]]);return}if(In(n))return Cf(e,n,i,t);s(e,t,n)}function R0(n,e,t,r){return Vf(e,n,r,t)}function Vf(n,e,t,r){return n=f0(n,e),Cf(r,n,e,t)}function P0(n,e){n.removeAttribute(e)}function k0(n,e,t,r,s){for(const i of n){const o=i[0],c=i[1],l=i[2]||!1;let h=i.length>1?kt:E_;i[3]&&(h=i[3]);const f=s.contexts,p=xf(o,c,e,t,r,h,f,s,l)||void 0;typeof p=="object"&&(f.push(p),++s.varCounter)}}function x0(n,e,t,r,s){const i=[],o={updateCount:0,parentContext:t,contexts:i,target:e,value:n,htmlDomMeta:[],tagJsVar:{component:!1,tagJsType:"dynamic-text",hasValueChanged:()=>0,processInit:Me,processInitAttribute:Me,destroy:(p,m)=>{++o.updateCount,i.forEach(v=>v.tagJsVar.destroy(v,m))},processUpdate:(p,m,v,R)=>{++o.updateCount,Fe(h);let x=p(h);const D=o.underFunction;delete o.underFunction,x instanceof Function&&!x.tagJsType&&(D&&x.toString()===D.toString()?x=h.value:(o.underFunction=x,x=x()));const V=h.tagJsVar.processUpdate(x,h,v,R);return h.value=x,m.value=p,Ce(),V}},withinOwnerElement:!0,destroy$:new Z,render$:new Z};Fe(o);let c=n();In(c)&&!c.tagJsType&&(o.underFunction=c,c=c());const h=Nf(c,o,e,r,s);return t.contexts.push(o),o.subContext=h,Ce(),h}function Df(n,e,t,r,s){n.forEach(i=>{switch(typeof i){case"string":case"boolean":case"number":return Cu(i,r,s);case"function":{if(i.tagJsType==="element")break;return x0(i,r,e,t,s)}}if(i==null)return Cu(i,r,s);if(i.tagJsType==="element"){const c=Of(i,e,t,e.contexts);it.push([s,[r,c]]),e.htmlDomMeta.push({nn:c.tagName,domElement:c,at:[]});return}return Nf(i,e,r,t,s)})}function Nf(n,e,t,r,s){const i=qi(n,[],!0,e);if(e.contexts.push(i),i.target=t,i.placeholder=document.createTextNode(""),it.push([s,[t,i.placeholder]]),Fe(i),i.inputsHandler){const c=r.propsConfig;i.inputsHandler(c)}return i.tagJsVar.processInit(n,i,r,i.placeholder),Ce(),i}function Cu(n,e,t){const r=ji(n),s=document.createTextNode(r);return it.push([t,[e,s]]),s}function Of(n,e,t,r){const s=n.tagName,i=document.createElement(s);e.target=i;const o=n.attributes;for(let l=0;l<o.length;++l){const h=o[l],f=h[0];typeof f=="string"&&(h[2]=Bi(f,s))}k0(o,[],i,t,e),Df(n.innerHTML,e,t,i,Wa);const c=n.listeners;for(let l=0;l<c.length;++l)V0(n,l,t,c[l],i);return i}function V0(n,e,t,r,s){const i=r[0],o=(...c)=>{const h=n.listeners[e][1],f=Ui(t),p=f.context,m=p.updateCount;p.locked=1,++ue.locks,Fe(p);const v=h(...c);return--ue.locks,delete p.locked,Ce(),m===p.updateCount?Af(v,f):(Qe(),dr(v)?v.then(()=>{const x=f.context.state.newest;return bw(x),"promise-no-data-ever"}):"no-data-ever")};If(t.appSupport,i,s,o)}function D0(n,e,t,r){e.contexts=e.contexts||[],e.htmlDomMeta=[],e.locked=34;const s=Of(n,e,t,e.contexts);delete e.locked;const i=[za,[r,s,"htmlTag.processInit"]];it.push(i),e.paintCommands=[i],En.push([()=>{delete e.paintCommands},[]]);const o={nn:n.tagName,domElement:s,at:n.attributes};return e.htmlDomMeta=[o],s}function M(n){const t=ms({component:!1,tagJsType:"element",processInitAttribute:Me,processInit:D0,destroy:Ef,processUpdate:bf,hasValueChanged:ac,tagName:n,innerHTML:[],attributes:[],contentId:0,listeners:[],allListeners:[],elementFunctions:hi},hi);return t.tagName=n,t}function ms(n,e){const t=function r(...s){const i={...r};i.attributes=Bn(r.attributes),i.listeners=Bn(r.listeners),i.allListeners=Bn(r.allListeners);let o=i.contexts;i.innerHTML=s;for(let c=0;c<s.length;++c){const l=s[c];if(Zr(l)){if(l.tagJsType==="element"){Su(i.allListeners,l.allListeners),l.contexts&&(o||(o=[],i.contexts=o),Su(o,l.contexts),++i.contentId);continue}o||(o=[],i.contexts=o),o.push(l)}}return i};return Object.assign(t,n),N0(t,e(t)),t.attributes=Bn(n.attributes),t.listeners=Bn(n.listeners),t.allListeners=Bn(n.allListeners),t.toString=function(){return l0(this)},t}function Bn(n){return n.length?n.slice():[]}function Su(n,e){for(let t=0;t<e.length;++t)n.push(e[t])}function N0(n,e){for(const t in e){const r=e[t];try{n[t]=r}catch{Object.defineProperty(n,t,{value:r,writable:!0,configurable:!0,enumerable:!1})}}}const Ot=O0();function O0(){const e=ms({component:!1,tagJsType:"element",processInitAttribute:Me,processInit:L0,destroy:M0,processUpdate:bf,hasValueChanged:ac,tagName:"no-element",innerHTML:[],attributes:[],contentId:0,listeners:[],allListeners:[],elementFunctions:hi},hi);return e.tagName="no-element",e}function L0(n,e,t,r){e.contexts=e.contexts||[],e.htmlDomMeta=[],Df(n.innerHTML,e,t,r,za)}function M0(n,e){++n.updateCount;const t=n.contexts,r=[];if(t.length&&(fi(t,e,r),t.length=0,r.length)){const s=n.htmlDomMeta;return Promise.all(r).then(()=>{++ue.locks,Yr(s),--ue.locks,Qe()})}}const pe=M("button"),F0=M("select"),Ru=M("option");M("optgroup");const Xe=M("input");M("textarea");M("html");M("head");const Lf=M("title");M("meta");M("link");const tr=M("style");M("body");M("script");M("noscript");const U0=M("hr"),cc=M("h1"),Yt=M("h2"),lc=M("h3");M("h4");M("h5");M("h6");M("ol");const Pu=M("ul"),Hn=M("li"),I=M("div");M("main");const Wo=M("section");M("header");M("footer");M("form");const Ji=M("fieldset");M("legend");M("dialog");M("pre");M("table");M("tr");M("td");M("th");M("thead");M("tbody");M("tfoot");const j0=M("iframe"),J=M("a"),B0=M("u"),Y=M("img"),q=M("br"),qr=M("label"),Ae=M("p"),ce=M("small"),ee=M("span");M("strong");const H0=M("b");M("sup");M("nav");M("figure");M("figcaption");M("code");M("canvas");const Ys=M("svg"),vt=M("path"),qs=M("polygon"),q0=M("rect");M("details");M("summary");const Mf=U(({date:n})=>{const e=performance.now().toString().replace(/\./g,"_"),t=`${e}-days-plus`,r=z0();let s;o(),Mf.updates(p=>{const m=n;[{date:n}]=p,n!=m&&(l(),i())}),n=n||new Date;function i(){const m=n-new Date;if(m<0){f({days:0,hours:0,minutes:0,seconds:0}),c();return}let v=Math.floor(m/(1e3*60*60*24));const R=Math.floor(m%(1e3*60*60*24)/(1e3*60*60)),x=Math.floor(m%(1e3*60*60)/(1e3*60)),D=Math.floor(m%(1e3*60)/1e3);f({days:v,hours:R,minutes:x,seconds:D})}function o(){s=setInterval(i,At)}function c(){clearInterval(s),s=void 0}U.onDestroy(c);function l(){c(),o()}function h(p,m,v){const R=document.createElement("span");if(R.classList.add("wrap"),R.innerText=m,p.appendChild(R),p.children.length===1)return;function x(){requestAnimationFrame(()=>{R.classList.add("changed"),requestAnimationFrame(()=>{setTimeout(()=>{p.removeChild(R)},200)})})}setTimeout(x,v.speed-1)}const f=ze(p=>{const m={...p};let{days:v}=m;const R=document.getElementById(t);R&&(v>99?(m.days=99,R.style.display=""):R.style.display="none",Object.entries(m).forEach(([x,D])=>{const V=$0(D),F=r[x];V[0]!=F[0].value$.value&&(F[0].value$.next(V[0]),h(document.getElementById(`${e}-${x}-0`),V[0],F[0])),V[1]!=F[1].value$.value&&(F[1].value$.next(V[1]),h(document.getElementById(`${e}-${x}-1`),V[1],F[1]))}))});return Ot(tr(`
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
    `),I.class`countdown`(I(I.class`digit-container`(ee.class`digit`(I.class`line`,ee.id`${e}-days-0`,ee.class`placeholder`("0")),ee.class`digit`(I.class`line`,ee.id`${e}-days-1`,ee.class`placeholder`("0")),ee.id`${e}-days-plus`.class`label`.style`display:none`("+")),I.class`label`("Days")),I(I.class`digit-container`(ee.class`digit`(I.class`line`,ee.id`${e}-hours-0`,ee.class`placeholder`("0")),ee.class`digit`(I.class`line`,ee.id`${e}-hours-1`,ee.class`placeholder`("0"))),I.class`label`("Hours")),I(I.class`digit-container`(ee.class`digit`(I.class`line`,ee.id`${e}-minutes-0`,ee.class`placeholder`("0")),ee.class`digit`(I.class`line`,ee.id`${e}-minutes-1`,ee.class`placeholder`("0"))),I.class`label`.contextMenu(l)("Minutes")),I(I.class`digit-container`(ee.class`digit`(I.class`line`,ee.id`${e}-seconds-0`,ee.class`placeholder`("0")),ee.class`digit`(I.class`line`,ee.id`${e}-seconds-1`,ee.class`placeholder`("0"))),I.class`label`.contextMenu(c)("Seconds"))))});function $0(n){const e=n%10;return[Math.floor(n/10),e]}const At=1e3;function z0(){return{days:[{speed:At*60*60*24*10,value$:new Z},{speed:At*60*60*24,value$:new Z}],hours:[{speed:At*60*60*10,value$:new Z},{speed:At*60*60,value$:new Z}],minutes:[{speed:At*60*10,value$:new Z},{speed:At*60,value$:new Z}],seconds:[{speed:At*10,value$:new Z},{speed:At,value$:new Z}]}}const W0=()=>{};var ku={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},J0=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Uf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,v=h&63;l||(v=64,o||(m=64)),r.push(t[f],t[p],t[m],t[v])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ff(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):J0(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new G0;const m=i<<2|c>>4;if(r.push(m),h!==64){const v=c<<4&240|h>>2;if(r.push(v),p!==64){const R=h<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class G0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const K0=function(n){const e=Ff(n);return Uf.encodeByteArray(e,!0)},pi=function(n){return K0(n).replace(/\./g,"")},jf=function(n){try{return Uf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Q0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Y0=()=>Q0().__FIREBASE_DEFAULTS__,X0=()=>{if(typeof process>"u"||typeof ku>"u")return;const n=ku.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Z0=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&jf(n[1]);return e&&JSON.parse(e)},Gi=()=>{try{return W0()||Y0()||X0()||Z0()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Bf=n=>{var e,t;return(t=(e=Gi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},eT=n=>{const e=Bf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Hf=()=>{var n;return(n=Gi())==null?void 0:n.config},qf=n=>{var e;return(e=Gi())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function fr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $f(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function nT(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[pi(JSON.stringify(t)),pi(JSON.stringify(o)),""].join(".")}const $r={};function rT(){const n={prod:[],emulator:[]};for(const e of Object.keys($r))$r[e]?n.emulator.push(e):n.prod.push(e);return n}function sT(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let xu=!1;function zf(n,e){if(typeof window>"u"||typeof document>"u"||!fr(window.location.host)||$r[n]===e||$r[n]||xu)return;$r[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=rT().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,v){m.setAttribute("width","24"),m.setAttribute("id",v),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{xu=!0,o()},m}function f(m,v){m.setAttribute("id",v),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=sT(r),v=t("text"),R=document.getElementById(v)||document.createElement("span"),x=t("learnmore"),D=document.getElementById(x)||document.createElement("a"),V=t("preprendIcon"),F=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const ie=m.element;c(ie),f(D,x);const ke=h();l(F,V),ie.append(F,R,D,ke),document.body.appendChild(ie)}i?(R.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function oT(){var e;const n=(e=Gi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function aT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function lT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uT(){const n=Ue();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function hT(){return!oT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dT(){try{return typeof indexedDB=="object"}catch{return!1}}function fT(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="FirebaseError";class Lt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=pT,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ys.prototype.create)}}class ys{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?gT(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Lt(s,c,r)}}function gT(n,e){return n.replace(mT,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const mT=/\{\$([^}]+)}/g;function yT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function An(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Vu(i)&&Vu(o)){if(!An(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Vu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _T(n,e){const t=new wT(n,e);return t.subscribe.bind(t)}class wT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");TT(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Jo),s.error===void 0&&(s.error=Jo),s.complete===void 0&&(s.complete=Jo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TT(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Jo(){}/**
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
 */function je(n){return n&&n._delegate?n._delegate:n}class Cn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _n="[DEFAULT]";/**
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
 */class ET{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new tT;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vT(e))try{this.getOrInitializeService({instanceIdentifier:_n})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_n){return this.instances.has(e)}getOptions(e=_n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bT(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_n){return this.component?this.component.multipleInstances?e:_n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bT(n){return n===_n?void 0:n}function vT(n){return n.instantiationMode==="EAGER"}/**
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
 */class IT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ET(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const AT={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},CT=G.INFO,ST={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},RT=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=ST[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uc{constructor(e){this.name=e,this._logLevel=CT,this._logHandler=RT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const PT=(n,e)=>e.some(t=>n instanceof t);let Du,Nu;function kT(){return Du||(Du=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xT(){return Nu||(Nu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wf=new WeakMap,_a=new WeakMap,Jf=new WeakMap,Go=new WeakMap,hc=new WeakMap;function VT(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Xt(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Wf.set(t,n)}).catch(()=>{}),hc.set(e,n),e}function DT(n){if(_a.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});_a.set(n,e)}let wa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return _a.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Jf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Xt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function NT(n){wa=n(wa)}function OT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ko(this),e,...t);return Jf.set(r,e.sort?e.sort():[e]),Xt(r)}:xT().includes(n)?function(...e){return n.apply(Ko(this),e),Xt(Wf.get(this))}:function(...e){return Xt(n.apply(Ko(this),e))}}function LT(n){return typeof n=="function"?OT(n):(n instanceof IDBTransaction&&DT(n),PT(n,kT())?new Proxy(n,wa):n)}function Xt(n){if(n instanceof IDBRequest)return VT(n);if(Go.has(n))return Go.get(n);const e=LT(n);return e!==n&&(Go.set(n,e),hc.set(e,n)),e}const Ko=n=>hc.get(n);function MT(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=Xt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Xt(o.result),l.oldVersion,l.newVersion,Xt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const FT=["get","getKey","getAll","getAllKeys","count"],UT=["put","add","delete","clear"],Qo=new Map;function Ou(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qo.get(e))return Qo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=UT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||FT.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return Qo.set(e,i),i}NT(n=>({...n,get:(e,t,r)=>Ou(e,t)||n.get(e,t,r),has:(e,t)=>!!Ou(e,t)||n.has(e,t)}));/**
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
 */class jT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(BT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function BT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ta="@firebase/app",Lu="0.14.7";/**
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
 */const xt=new uc("@firebase/app"),HT="@firebase/app-compat",qT="@firebase/analytics-compat",$T="@firebase/analytics",zT="@firebase/app-check-compat",WT="@firebase/app-check",JT="@firebase/auth",GT="@firebase/auth-compat",KT="@firebase/database",QT="@firebase/data-connect",YT="@firebase/database-compat",XT="@firebase/functions",ZT="@firebase/functions-compat",eE="@firebase/installations",tE="@firebase/installations-compat",nE="@firebase/messaging",rE="@firebase/messaging-compat",sE="@firebase/performance",iE="@firebase/performance-compat",oE="@firebase/remote-config",aE="@firebase/remote-config-compat",cE="@firebase/storage",lE="@firebase/storage-compat",uE="@firebase/firestore",hE="@firebase/ai",dE="@firebase/firestore-compat",fE="firebase",pE="12.8.0";/**
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
 */const Ea="[DEFAULT]",gE={[Ta]:"fire-core",[HT]:"fire-core-compat",[$T]:"fire-analytics",[qT]:"fire-analytics-compat",[WT]:"fire-app-check",[zT]:"fire-app-check-compat",[JT]:"fire-auth",[GT]:"fire-auth-compat",[KT]:"fire-rtdb",[QT]:"fire-data-connect",[YT]:"fire-rtdb-compat",[XT]:"fire-fn",[ZT]:"fire-fn-compat",[eE]:"fire-iid",[tE]:"fire-iid-compat",[nE]:"fire-fcm",[rE]:"fire-fcm-compat",[sE]:"fire-perf",[iE]:"fire-perf-compat",[oE]:"fire-rc",[aE]:"fire-rc-compat",[cE]:"fire-gcs",[lE]:"fire-gcs-compat",[uE]:"fire-fst",[dE]:"fire-fst-compat",[hE]:"fire-vertex","fire-js":"fire-js",[fE]:"fire-js-all"};/**
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
 */const gi=new Map,mE=new Map,ba=new Map;function Mu(n,e){try{n.container.addComponent(e)}catch(t){xt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function nr(n){const e=n.name;if(ba.has(e))return xt.debug(`There were multiple attempts to register component ${e}.`),!1;ba.set(e,n);for(const t of gi.values())Mu(t,n);for(const t of mE.values())Mu(t,n);return!0}function dc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ze(n){return n==null?!1:n.settings!==void 0}/**
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
 */const yE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zt=new ys("app","Firebase",yE);/**
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
 */class _E{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
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
 */const pr=pE;function Gf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ea,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Zt.create("bad-app-name",{appName:String(s)});if(t||(t=Hf()),!t)throw Zt.create("no-options");const i=gi.get(s);if(i){if(An(t,i.options)&&An(r,i.config))return i;throw Zt.create("duplicate-app",{appName:s})}const o=new IT(s);for(const l of ba.values())o.addComponent(l);const c=new _E(t,r,o);return gi.set(s,c),c}function Kf(n=Ea){const e=gi.get(n);if(!e&&n===Ea&&Hf())return Gf();if(!e)throw Zt.create("no-app",{appName:n});return e}function en(n,e,t){let r=gE[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xt.warn(o.join(" "));return}nr(new Cn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const wE="firebase-heartbeat-database",TE=1,es="firebase-heartbeat-store";let Yo=null;function Qf(){return Yo||(Yo=MT(wE,TE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(es)}catch(t){console.warn(t)}}}}).catch(n=>{throw Zt.create("idb-open",{originalErrorMessage:n.message})})),Yo}async function EE(n){try{const t=(await Qf()).transaction(es),r=await t.objectStore(es).get(Yf(n));return await t.done,r}catch(e){if(e instanceof Lt)xt.warn(e.message);else{const t=Zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xt.warn(t.message)}}}async function Fu(n,e){try{const r=(await Qf()).transaction(es,"readwrite");await r.objectStore(es).put(e,Yf(n)),await r.done}catch(t){if(t instanceof Lt)xt.warn(t.message);else{const r=Zt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});xt.warn(r.message)}}}function Yf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const bE=1024,vE=30;class IE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new CE(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Uu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>vE){const o=SE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Uu(),{heartbeatsToSend:r,unsentEntries:s}=AE(this._heartbeatsCache.heartbeats),i=pi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return xt.warn(t),""}}}function Uu(){return new Date().toISOString().substring(0,10)}function AE(n,e=bE){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ju(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ju(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class CE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dT()?fT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await EE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ju(n){return pi(JSON.stringify({version:2,heartbeats:n})).length}function SE(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function RE(n){nr(new Cn("platform-logger",e=>new jT(e),"PRIVATE")),nr(new Cn("heartbeat",e=>new IE(e),"PRIVATE")),en(Ta,Lu,n),en(Ta,Lu,"esm2020"),en("fire-js","")}RE("");var PE="firebase",kE="12.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en(PE,kE,"app");function Xf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xE=Xf,Zf=new ys("auth","Firebase",Xf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new uc("@firebase/auth");function VE(n,...e){mi.logLevel<=G.WARN&&mi.warn(`Auth (${pr}): ${n}`,...e)}function Xs(n,...e){mi.logLevel<=G.ERROR&&mi.error(`Auth (${pr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(n,...e){throw pc(n,...e)}function ot(n,...e){return pc(n,...e)}function fc(n,e,t){const r={...xE(),[e]:t};return new ys("auth","Firebase",r).create(e,{appName:n.name})}function tn(n){return fc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ep(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Et(n,"argument-error"),fc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Zf.create(n,...e)}function H(n,e,...t){if(!n)throw pc(e,...t)}function St(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Xs(e),new Error(e)}function Vt(n,e){n||St(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function DE(){return Bu()==="http:"||Bu()==="https:"}function Bu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DE()||cT()||"connection"in navigator)?navigator.onLine:!0}function OE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vt(t>e,"Short delay should be less than long delay!"),this.isMobile=iT()||lT()}get(){return NE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(n,e){Vt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;St("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;St("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;St("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],FE=new ws(3e4,6e4);function mc(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function gr(n,e,t,r,s={}){return np(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=_s({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...i};return aT()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&fr(n.emulatorConfig.host)&&(h.credentials="include"),tp.fetch()(await rp(n,n.config.apiHost,t,c),h)})}async function np(n,e,t){n._canInitEmulator=!1;const r={...LE,...e};try{const s=new jE(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $s(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $s(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $s(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw $s(n,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw fc(n,f,h);Et(n,f)}}catch(s){if(s instanceof Lt)throw s;Et(n,"network-request-failed",{message:String(s)})}}async function UE(n,e,t,r,s={}){const i=await gr(n,e,t,r,s);return"mfaPendingCredential"in i&&Et(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function rp(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?gc(n.config,s):`${n.config.apiScheme}://${s}`;return ME.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class jE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ot(this.auth,"network-request-failed")),FE.get())})}}function $s(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ot(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BE(n,e){return gr(n,"POST","/v1/accounts:delete",e)}async function yi(n,e){return gr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HE(n,e=!1){const t=je(n),r=await t.getIdToken(e),s=yc(r);H(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:zr(Xo(s.auth_time)),issuedAtTime:zr(Xo(s.iat)),expirationTime:zr(Xo(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xo(n){return Number(n)*1e3}function yc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Xs("JWT malformed, contained fewer than 3 sections"),null;try{const s=jf(t);return s?JSON.parse(s):(Xs("Failed to decode base64 JWT payload"),null)}catch(s){return Xs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Hu(n){const e=yc(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Lt&&qE(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function qE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zr(this.lastLoginAt),this.creationTime=zr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _i(n){var p;const e=n.auth,t=await n.getIdToken(),r=await ts(n,yi(e,{idToken:t}));H(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?sp(s.providerUserInfo):[],o=WE(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ia(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function zE(n){const e=je(n);await _i(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WE(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function sp(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JE(n,e){const t=await np(n,{},async()=>{const r=_s({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await rp(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&fr(n.emulatorConfig.host)&&(l.credentials="include"),tp.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function GE(n,e){return gr(n,"POST","/v2/accounts:revokeToken",mc(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=Hu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await JE(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Qn;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qn,this.toJSON())}_performRefresh(){return St("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class rt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new $E(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ia(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ts(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return HE(this,e)}reload(){return zE(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new rt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await _i(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ze(this.auth.app))return Promise.reject(tn(this.auth));const e=await this.getIdToken();return await ts(this,BE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:v,providerData:R,stsTokenManager:x}=t;H(p&&x,e,"internal-error");const D=Qn.fromJSON(this.name,x);H(typeof p=="string",e,"internal-error"),qt(r,e.name),qt(s,e.name),H(typeof m=="boolean",e,"internal-error"),H(typeof v=="boolean",e,"internal-error"),qt(i,e.name),qt(o,e.name),qt(c,e.name),qt(l,e.name),qt(h,e.name),qt(f,e.name);const V=new rt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:D,createdAt:h,lastLoginAt:f});return R&&Array.isArray(R)&&(V.providerData=R.map(F=>({...F}))),l&&(V._redirectEventId=l),V}static async _fromIdTokenResponse(e,t,r=!1){const s=new Qn;s.updateFromServerResponse(t);const i=new rt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _i(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];H(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?sp(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Qn;c.updateFromIdToken(r);const l=new rt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ia(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new Map;function Rt(n){Vt(n instanceof Function,"Expected a class definition");let e=qu.get(n);return e?(Vt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,qu.set(n,e),e)}/**
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
 */class ip{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ip.type="NONE";const $u=ip;/**
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
 */function Zs(n,e,t){return`firebase:${n}:${e}:${t}`}class Yn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Zs(this.userKey,s.apiKey,i),this.fullPersistenceKey=Zs("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await yi(this.auth,{idToken:e}).catch(()=>{});return t?rt._fromGetAccountInfoResponse(this.auth,t,e):null}return rt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Yn(Rt($u),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Rt($u);const o=Zs(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const m=await yi(e,{idToken:f}).catch(()=>{});if(!m)break;p=await rt._fromGetAccountInfoResponse(e,m,f)}else p=rt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Yn(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Yn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(op(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hp(e))return"Blackberry";if(dp(e))return"Webos";if(ap(e))return"Safari";if((e.includes("chrome/")||cp(e))&&!e.includes("edge/"))return"Chrome";if(up(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function op(n=Ue()){return/firefox\//i.test(n)}function ap(n=Ue()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cp(n=Ue()){return/crios\//i.test(n)}function lp(n=Ue()){return/iemobile/i.test(n)}function up(n=Ue()){return/android/i.test(n)}function hp(n=Ue()){return/blackberry/i.test(n)}function dp(n=Ue()){return/webos/i.test(n)}function _c(n=Ue()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function KE(n=Ue()){var e;return _c(n)&&!!((e=window.navigator)!=null&&e.standalone)}function QE(){return uT()&&document.documentMode===10}function fp(n=Ue()){return _c(n)||up(n)||dp(n)||hp(n)||/windows phone/i.test(n)||lp(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(n,e=[]){let t;switch(n){case"Browser":t=zu(Ue());break;case"Worker":t=`${zu(Ue())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${pr}/${r}`}/**
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
 */class YE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function XE(n,e={}){return gr(n,"GET","/v2/passwordPolicy",mc(n,e))}/**
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
 */const ZE=6;class eb{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??ZE,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wu(this),this.idTokenSubscription=new Wu(this),this.beforeStateQueue=new YE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Rt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Yn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await yi(this,{idToken:e}),r=await rt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ze(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _i(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ze(this.app))return Promise.reject(tn(this));const t=e?je(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ze(this.app)?Promise.reject(tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ze(this.app)?Promise.reject(tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await XE(this),t=new eb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ys("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await GE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Rt(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await Yn.create(this,[Rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Ze(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&VE(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function mr(n){return je(n)}class Wu{constructor(e){this.auth=e,this.observer=null,this.addObserver=_T(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nb(n){wc=n}function rb(n){return wc.loadJS(n)}function sb(){return wc.gapiScript}function ib(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(n,e){const t=dc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(An(i,e??{}))return s;Et(s,"already-initialized")}return t.initialize({options:e})}function ab(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Rt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cb(n,e,t){const r=mr(n);H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=gp(e),{host:o,port:c}=lb(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){H(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),H(An(h,r.config.emulator)&&An(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,fr(o)?($f(`${i}//${o}${l}`),zf("Auth",!0)):ub()}function gp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function lb(n){const e=gp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ju(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ju(o)}}}function Ju(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ub(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return St("not implemented")}_getIdTokenResponse(e){return St("not implemented")}_linkToIdToken(e,t){return St("not implemented")}_getReauthenticationResolver(e){return St("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(n,e){return UE(n,"POST","/v1/accounts:signInWithIdp",mc(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb="http://localhost";class Sn extends mp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Et("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new Sn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Xn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Xn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xn(e,t)}buildRequest(){const e={requestUri:hb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_s(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ts extends Ki{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Ts{constructor(){super("facebook.com")}static credential(e){return Sn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Ts{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Sn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ct.credential(t,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Ts{constructor(){super("github.com")}static credential(e){return Sn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.GITHUB_SIGN_IN_METHOD="github.com";Wt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Ts{constructor(){super("twitter.com")}static credential(e,t){return Sn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Jt.credential(t,r)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await rt._fromIdTokenResponse(e,r,s),o=Gu(r);return new rr({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Gu(r);return new rr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Gu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends Lt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,wi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new wi(e,t,r,s)}}function yp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?wi._fromErrorAndOperation(n,i,e,r):i})}async function db(n,e,t=!1){const r=await ts(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return rr._forOperation(n,"link",r)}/**
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
 */async function fb(n,e,t=!1){const{auth:r}=n;if(Ze(r.app))return Promise.reject(tn(r));const s="reauthenticate";try{const i=await ts(n,yp(r,s,e,n),t);H(i.idToken,r,"internal-error");const o=yc(i.idToken);H(o,r,"internal-error");const{sub:c}=o;return H(n.uid===c,r,"user-mismatch"),rr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Et(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pb(n,e,t=!1){if(Ze(n.app))return Promise.reject(tn(n));const r="signIn",s=await yp(n,r,e),i=await rr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(n,e){return je(n).setPersistence(e)}function mb(n,e,t,r){return je(n).onIdTokenChanged(e,t,r)}function yb(n,e,t){return je(n).beforeAuthStateChanged(e,t)}function _b(n,e,t,r){return je(n).onAuthStateChanged(e,t,r)}function wb(n){return je(n).signOut()}const Ti="__sak";/**
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
 */class _p{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ti,"1"),this.storage.removeItem(Ti),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=1e3,Eb=10;class wp extends _p{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);QE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Eb):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Tb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}wp.type="LOCAL";const Tp=wp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep extends _p{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ep.type="SESSION";const Tc=Ep;/**
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
 */function bb(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Qi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Qi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,i)),l=await bb(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class vb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Ec("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return window}function Ib(n){gt().location.href=n}/**
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
 */function bp(){return typeof gt().WorkerGlobalScope<"u"&&typeof gt().importScripts=="function"}async function Ab(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Sb(){return bp()?self:null}/**
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
 */const vp="firebaseLocalStorageDb",Rb=1,Ei="firebaseLocalStorage",Ip="fbase_key";class Es{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Yi(n,e){return n.transaction([Ei],e?"readwrite":"readonly").objectStore(Ei)}function Pb(){const n=indexedDB.deleteDatabase(vp);return new Es(n).toPromise()}function Aa(){const n=indexedDB.open(vp,Rb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ei,{keyPath:Ip})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ei)?e(r):(r.close(),await Pb(),e(await Aa()))})})}async function Ku(n,e,t){const r=Yi(n,!0).put({[Ip]:e,value:t});return new Es(r).toPromise()}async function kb(n,e){const t=Yi(n,!1).get(e),r=await new Es(t).toPromise();return r===void 0?null:r.value}function Qu(n,e){const t=Yi(n,!0).delete(e);return new Es(t).toPromise()}const xb=800,Vb=3;class Ap{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Aa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Vb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qi._getInstance(Sb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await Ab(),!this.activeServiceWorker)return;this.sender=new vb(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Aa();return await Ku(e,Ti,"1"),await Qu(e,Ti),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ku(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>kb(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Qu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Yi(s,!1).getAll();return new Es(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ap.type="LOCAL";const Cp=Ap;new ws(3e4,6e4);/**
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
 */function bc(n,e){return e?Rt(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class vc extends mp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Db(n){return pb(n.auth,new vc(n),n.bypassAuthState)}function Nb(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),fb(t,new vc(n),n.bypassAuthState)}async function Ob(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),db(t,new vc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Db;case"linkViaPopup":case"linkViaRedirect":return Ob;case"reauthViaPopup":case"reauthViaRedirect":return Nb;default:Et(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=new ws(2e3,1e4);async function Mb(n,e,t){if(Ze(n.app))return Promise.reject(ot(n,"operation-not-supported-in-this-environment"));const r=mr(n);ep(n,e,Ki);const s=bc(r,t);return new wn(r,"signInViaPopup",e,s).executeNotNull()}class wn extends Sp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,wn.currentPopupAction&&wn.currentPopupAction.cancel(),wn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=Ec();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lb.get())};e()}}wn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb="pendingRedirect",ei=new Map;class Ub extends Sp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ei.get(this.auth._key());if(!e){try{const r=await jb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ei.set(this.auth._key(),e)}return this.bypassAuthState||ei.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jb(n,e){const t=Pp(e),r=Rp(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function Bb(n,e){return Rp(n)._set(Pp(e),"true")}function Hb(n,e){ei.set(n._key(),e)}function Rp(n){return Rt(n._redirectPersistence)}function Pp(n){return Zs(Fb,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(n,e,t){return $b(n,e,t)}async function $b(n,e,t){if(Ze(n.app))return Promise.reject(tn(n));const r=mr(n);ep(n,e,Ki),await r._initializationPromise;const s=bc(r,t);return await Bb(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function zb(n,e){return await mr(n)._initializationPromise,kp(n,e,!1)}async function kp(n,e,t=!1){if(Ze(n.app))return Promise.reject(tn(n));const r=mr(n),s=bc(r,e),o=await new Ub(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=600*1e3;class Jb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!xp(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(ot(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yu(e))}saveEventToCache(e){this.cachedEventUids.add(Yu(e)),this.lastProcessedEventTime=Date.now()}}function Yu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function xp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(n,e={}){return gr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yb=/^https?/;async function Xb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Kb(n);for(const t of e)try{if(Zb(t))return}catch{}Et(n,"unauthorized-domain")}function Zb(n){const e=va(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Yb.test(t))return!1;if(Qb.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ev=new ws(3e4,6e4);function Xu(){const n=gt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function tv(n){return new Promise((e,t)=>{var s,i,o;function r(){Xu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xu(),t(ot(n,"network-request-failed"))},timeout:ev.get()})}if((i=(s=gt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=gt().gapi)!=null&&o.load)r();else{const c=ib("iframefcb");return gt()[c]=()=>{gapi.load?r():t(ot(n,"network-request-failed"))},rb(`${sb()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw ti=null,e})}let ti=null;function nv(n){return ti=ti||tv(n),ti}/**
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
 */const rv=new ws(5e3,15e3),sv="__/auth/iframe",iv="emulator/auth/iframe",ov={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},av=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cv(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?gc(e,iv):`https://${n.config.authDomain}/${sv}`,r={apiKey:e.apiKey,appName:n.name,v:pr},s=av.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${_s(r).slice(1)}`}async function lv(n){const e=await nv(n),t=gt().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:cv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ov,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ot(n,"network-request-failed"),c=gt().setTimeout(()=>{i(o)},rv.get());function l(){gt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const uv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hv=500,dv=600,fv="_blank",pv="http://localhost";class Zu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gv(n,e,t,r=hv,s=dv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...uv,width:r.toString(),height:s.toString(),top:i,left:o},h=Ue().toLowerCase();t&&(c=cp(h)?fv:t),op(h)&&(e=e||pv,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[v,R])=>`${m}${v}=${R},`,"");if(KE(h)&&c!=="_self")return mv(e||"",c),new Zu(null);const p=window.open(e||"",c,f);H(p,n,"popup-blocked");try{p.focus()}catch{}return new Zu(p)}function mv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const yv="__/auth/handler",_v="emulator/auth/handler",wv=encodeURIComponent("fac");async function eh(n,e,t,r,s,i){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:pr,eventId:s};if(e instanceof Ki){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",yT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ts){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${wv}=${encodeURIComponent(l)}`:"";return`${Tv(n)}?${_s(c).slice(1)}${h}`}function Tv({config:n}){return n.emulator?gc(n,_v):`https://${n.authDomain}/${yv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="webStorageSupport";class Ev{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tc,this._completeRedirectFn=kp,this._overrideRedirectResult=Hb}async _openPopup(e,t,r,s){var o;Vt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await eh(e,t,r,va(),s);return gv(e,i,Ec())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await eh(e,t,r,va(),s);return Ib(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Vt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await lv(e),r=new Jb(e);return t.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zo,{type:Zo},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Zo];i!==void 0&&t(!!i),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Xb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fp()||ap()||_c()}}const bv=Ev;var th="@firebase/auth",nh="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Av(n){nr(new Cn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pp(n)},h=new tb(r,s,i,l);return ab(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),nr(new Cn("auth-internal",e=>{const t=mr(e.getProvider("auth").getImmediate());return(r=>new vv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(th,nh,Iv(n)),en(th,nh,"esm2020")}/**
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
 */const Cv=300,Sv=qf("authIdTokenMaxAge")||Cv;let rh=null;const Rv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Sv)return;const s=t==null?void 0:t.token;rh!==s&&(rh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Pv(n=Kf()){const e=dc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ob(n,{popupRedirectResolver:bv,persistence:[Cp,Tp,Tc]}),r=qf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Rv(i.toString());yb(t,o,()=>o(t.currentUser)),mb(t,c=>o(c))}}const s=Bf("auth");return s&&cb(t,`http://${s}`),t}function kv(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}nb({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ot("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",kv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Av("Browser");var sh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nn,Vp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function w(){}w.prototype=y.prototype,E.F=y.prototype,E.prototype=new w,E.prototype.constructor=E,E.D=function(b,T,C){for(var _=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)_[qe-2]=arguments[qe];return y.prototype[T].apply(b,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,y,w){w||(w=0);const b=Array(16);if(typeof y=="string")for(var T=0;T<16;++T)b[T]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(T=0;T<16;++T)b[T]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=E.g[0],w=E.g[1],T=E.g[2];let C=E.g[3],_;_=y+(C^w&(T^C))+b[0]+3614090360&4294967295,y=w+(_<<7&4294967295|_>>>25),_=C+(T^y&(w^T))+b[1]+3905402710&4294967295,C=y+(_<<12&4294967295|_>>>20),_=T+(w^C&(y^w))+b[2]+606105819&4294967295,T=C+(_<<17&4294967295|_>>>15),_=w+(y^T&(C^y))+b[3]+3250441966&4294967295,w=T+(_<<22&4294967295|_>>>10),_=y+(C^w&(T^C))+b[4]+4118548399&4294967295,y=w+(_<<7&4294967295|_>>>25),_=C+(T^y&(w^T))+b[5]+1200080426&4294967295,C=y+(_<<12&4294967295|_>>>20),_=T+(w^C&(y^w))+b[6]+2821735955&4294967295,T=C+(_<<17&4294967295|_>>>15),_=w+(y^T&(C^y))+b[7]+4249261313&4294967295,w=T+(_<<22&4294967295|_>>>10),_=y+(C^w&(T^C))+b[8]+1770035416&4294967295,y=w+(_<<7&4294967295|_>>>25),_=C+(T^y&(w^T))+b[9]+2336552879&4294967295,C=y+(_<<12&4294967295|_>>>20),_=T+(w^C&(y^w))+b[10]+4294925233&4294967295,T=C+(_<<17&4294967295|_>>>15),_=w+(y^T&(C^y))+b[11]+2304563134&4294967295,w=T+(_<<22&4294967295|_>>>10),_=y+(C^w&(T^C))+b[12]+1804603682&4294967295,y=w+(_<<7&4294967295|_>>>25),_=C+(T^y&(w^T))+b[13]+4254626195&4294967295,C=y+(_<<12&4294967295|_>>>20),_=T+(w^C&(y^w))+b[14]+2792965006&4294967295,T=C+(_<<17&4294967295|_>>>15),_=w+(y^T&(C^y))+b[15]+1236535329&4294967295,w=T+(_<<22&4294967295|_>>>10),_=y+(T^C&(w^T))+b[1]+4129170786&4294967295,y=w+(_<<5&4294967295|_>>>27),_=C+(w^T&(y^w))+b[6]+3225465664&4294967295,C=y+(_<<9&4294967295|_>>>23),_=T+(y^w&(C^y))+b[11]+643717713&4294967295,T=C+(_<<14&4294967295|_>>>18),_=w+(C^y&(T^C))+b[0]+3921069994&4294967295,w=T+(_<<20&4294967295|_>>>12),_=y+(T^C&(w^T))+b[5]+3593408605&4294967295,y=w+(_<<5&4294967295|_>>>27),_=C+(w^T&(y^w))+b[10]+38016083&4294967295,C=y+(_<<9&4294967295|_>>>23),_=T+(y^w&(C^y))+b[15]+3634488961&4294967295,T=C+(_<<14&4294967295|_>>>18),_=w+(C^y&(T^C))+b[4]+3889429448&4294967295,w=T+(_<<20&4294967295|_>>>12),_=y+(T^C&(w^T))+b[9]+568446438&4294967295,y=w+(_<<5&4294967295|_>>>27),_=C+(w^T&(y^w))+b[14]+3275163606&4294967295,C=y+(_<<9&4294967295|_>>>23),_=T+(y^w&(C^y))+b[3]+4107603335&4294967295,T=C+(_<<14&4294967295|_>>>18),_=w+(C^y&(T^C))+b[8]+1163531501&4294967295,w=T+(_<<20&4294967295|_>>>12),_=y+(T^C&(w^T))+b[13]+2850285829&4294967295,y=w+(_<<5&4294967295|_>>>27),_=C+(w^T&(y^w))+b[2]+4243563512&4294967295,C=y+(_<<9&4294967295|_>>>23),_=T+(y^w&(C^y))+b[7]+1735328473&4294967295,T=C+(_<<14&4294967295|_>>>18),_=w+(C^y&(T^C))+b[12]+2368359562&4294967295,w=T+(_<<20&4294967295|_>>>12),_=y+(w^T^C)+b[5]+4294588738&4294967295,y=w+(_<<4&4294967295|_>>>28),_=C+(y^w^T)+b[8]+2272392833&4294967295,C=y+(_<<11&4294967295|_>>>21),_=T+(C^y^w)+b[11]+1839030562&4294967295,T=C+(_<<16&4294967295|_>>>16),_=w+(T^C^y)+b[14]+4259657740&4294967295,w=T+(_<<23&4294967295|_>>>9),_=y+(w^T^C)+b[1]+2763975236&4294967295,y=w+(_<<4&4294967295|_>>>28),_=C+(y^w^T)+b[4]+1272893353&4294967295,C=y+(_<<11&4294967295|_>>>21),_=T+(C^y^w)+b[7]+4139469664&4294967295,T=C+(_<<16&4294967295|_>>>16),_=w+(T^C^y)+b[10]+3200236656&4294967295,w=T+(_<<23&4294967295|_>>>9),_=y+(w^T^C)+b[13]+681279174&4294967295,y=w+(_<<4&4294967295|_>>>28),_=C+(y^w^T)+b[0]+3936430074&4294967295,C=y+(_<<11&4294967295|_>>>21),_=T+(C^y^w)+b[3]+3572445317&4294967295,T=C+(_<<16&4294967295|_>>>16),_=w+(T^C^y)+b[6]+76029189&4294967295,w=T+(_<<23&4294967295|_>>>9),_=y+(w^T^C)+b[9]+3654602809&4294967295,y=w+(_<<4&4294967295|_>>>28),_=C+(y^w^T)+b[12]+3873151461&4294967295,C=y+(_<<11&4294967295|_>>>21),_=T+(C^y^w)+b[15]+530742520&4294967295,T=C+(_<<16&4294967295|_>>>16),_=w+(T^C^y)+b[2]+3299628645&4294967295,w=T+(_<<23&4294967295|_>>>9),_=y+(T^(w|~C))+b[0]+4096336452&4294967295,y=w+(_<<6&4294967295|_>>>26),_=C+(w^(y|~T))+b[7]+1126891415&4294967295,C=y+(_<<10&4294967295|_>>>22),_=T+(y^(C|~w))+b[14]+2878612391&4294967295,T=C+(_<<15&4294967295|_>>>17),_=w+(C^(T|~y))+b[5]+4237533241&4294967295,w=T+(_<<21&4294967295|_>>>11),_=y+(T^(w|~C))+b[12]+1700485571&4294967295,y=w+(_<<6&4294967295|_>>>26),_=C+(w^(y|~T))+b[3]+2399980690&4294967295,C=y+(_<<10&4294967295|_>>>22),_=T+(y^(C|~w))+b[10]+4293915773&4294967295,T=C+(_<<15&4294967295|_>>>17),_=w+(C^(T|~y))+b[1]+2240044497&4294967295,w=T+(_<<21&4294967295|_>>>11),_=y+(T^(w|~C))+b[8]+1873313359&4294967295,y=w+(_<<6&4294967295|_>>>26),_=C+(w^(y|~T))+b[15]+4264355552&4294967295,C=y+(_<<10&4294967295|_>>>22),_=T+(y^(C|~w))+b[6]+2734768916&4294967295,T=C+(_<<15&4294967295|_>>>17),_=w+(C^(T|~y))+b[13]+1309151649&4294967295,w=T+(_<<21&4294967295|_>>>11),_=y+(T^(w|~C))+b[4]+4149444226&4294967295,y=w+(_<<6&4294967295|_>>>26),_=C+(w^(y|~T))+b[11]+3174756917&4294967295,C=y+(_<<10&4294967295|_>>>22),_=T+(y^(C|~w))+b[2]+718787259&4294967295,T=C+(_<<15&4294967295|_>>>17),_=w+(C^(T|~y))+b[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+C&4294967295}r.prototype.v=function(E,y){y===void 0&&(y=E.length);const w=y-this.blockSize,b=this.C;let T=this.h,C=0;for(;C<y;){if(T==0)for(;C<=w;)s(this,E,C),C+=this.blockSize;if(typeof E=="string"){for(;C<y;)if(b[T++]=E.charCodeAt(C++),T==this.blockSize){s(this,b),T=0;break}}else for(;C<y;)if(b[T++]=E[C++],T==this.blockSize){s(this,b),T=0;break}}this.h=T,this.o+=y},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;y=this.o*8;for(var w=E.length-8;w<E.length;++w)E[w]=y&255,y/=256;for(this.v(E),E=Array(16),y=0,w=0;w<4;++w)for(let b=0;b<32;b+=8)E[y++]=this.g[w]>>>b&255;return E};function i(E,y){var w=c;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=y(E)}function o(E,y){this.h=y;const w=[];let b=!0;for(let T=E.length-1;T>=0;T--){const C=E[T]|0;b&&C==y||(w[T]=C,b=!1)}this.g=w}var c={};function l(E){return-128<=E&&E<128?i(E,function(y){return new o([y|0],y<0?-1:0)}):new o([E|0],E<0?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(E<0)return D(h(-E));const y=[];let w=1;for(let b=0;E>=w;b++)y[b]=E/w|0,w*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return D(f(E.substring(1),y));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(y,8));let b=p;for(let C=0;C<E.length;C+=8){var T=Math.min(8,E.length-C);const _=parseInt(E.substring(C,C+T),y);T<8?(T=h(Math.pow(y,T)),b=b.j(T).add(h(_))):(b=b.j(w),b=b.add(h(_)))}return b}var p=l(0),m=l(1),v=l(16777216);n=o.prototype,n.m=function(){if(x(this))return-D(this).m();let E=0,y=1;for(let w=0;w<this.g.length;w++){const b=this.i(w);E+=(b>=0?b:4294967296+b)*y,y*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(x(this))return"-"+D(this).toString(E);const y=h(Math.pow(E,6));var w=this;let b="";for(;;){const T=ke(w,y).g;w=V(w,T.j(y));let C=((w.g.length>0?w.g[0]:w.h)>>>0).toString(E);if(w=T,R(w))return C+b;for(;C.length<6;)C="0"+C;b=C+b}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(let y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function x(E){return E.h==-1}n.l=function(E){return E=V(this,E),x(E)?-1:R(E)?0:1};function D(E){const y=E.g.length,w=[];for(let b=0;b<y;b++)w[b]=~E.g[b];return new o(w,~E.h).add(m)}n.abs=function(){return x(this)?D(this):this},n.add=function(E){const y=Math.max(this.g.length,E.g.length),w=[];let b=0;for(let T=0;T<=y;T++){let C=b+(this.i(T)&65535)+(E.i(T)&65535),_=(C>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);b=_>>>16,C&=65535,_&=65535,w[T]=_<<16|C}return new o(w,w[w.length-1]&-2147483648?-1:0)};function V(E,y){return E.add(D(y))}n.j=function(E){if(R(this)||R(E))return p;if(x(this))return x(E)?D(this).j(D(E)):D(D(this).j(E));if(x(E))return D(this.j(D(E)));if(this.l(v)<0&&E.l(v)<0)return h(this.m()*E.m());const y=this.g.length+E.g.length,w=[];for(var b=0;b<2*y;b++)w[b]=0;for(b=0;b<this.g.length;b++)for(let T=0;T<E.g.length;T++){const C=this.i(b)>>>16,_=this.i(b)&65535,qe=E.i(T)>>>16,dn=E.i(T)&65535;w[2*b+2*T]+=_*dn,F(w,2*b+2*T),w[2*b+2*T+1]+=C*dn,F(w,2*b+2*T+1),w[2*b+2*T+1]+=_*qe,F(w,2*b+2*T+1),w[2*b+2*T+2]+=C*qe,F(w,2*b+2*T+2)}for(E=0;E<y;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=y;E<2*y;E++)w[E]=0;return new o(w,0)};function F(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function ie(E,y){this.g=E,this.h=y}function ke(E,y){if(R(y))throw Error("division by zero");if(R(E))return new ie(p,p);if(x(E))return y=ke(D(E),y),new ie(D(y.g),D(y.h));if(x(y))return y=ke(E,D(y)),new ie(D(y.g),y.h);if(E.g.length>30){if(x(E)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var w=m,b=y;b.l(E)<=0;)w=We(w),b=We(b);var T=xe(w,1),C=xe(b,1);for(b=xe(b,2),w=xe(w,2);!R(b);){var _=C.add(b);_.l(E)<=0&&(T=T.add(w),C=_),b=xe(b,1),w=xe(w,1)}return y=V(E,T.j(y)),new ie(T,y)}for(T=p;E.l(y)>=0;){for(w=Math.max(1,Math.floor(E.m()/y.m())),b=Math.ceil(Math.log(w)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),C=h(w),_=C.j(y);x(_)||_.l(E)>0;)w-=b,C=h(w),_=C.j(y);R(C)&&(C=m),T=T.add(C),E=V(E,_)}return new ie(T,E)}n.B=function(E){return ke(this,E).h},n.and=function(E){const y=Math.max(this.g.length,E.g.length),w=[];for(let b=0;b<y;b++)w[b]=this.i(b)&E.i(b);return new o(w,this.h&E.h)},n.or=function(E){const y=Math.max(this.g.length,E.g.length),w=[];for(let b=0;b<y;b++)w[b]=this.i(b)|E.i(b);return new o(w,this.h|E.h)},n.xor=function(E){const y=Math.max(this.g.length,E.g.length),w=[];for(let b=0;b<y;b++)w[b]=this.i(b)^E.i(b);return new o(w,this.h^E.h)};function We(E){const y=E.g.length+1,w=[];for(let b=0;b<y;b++)w[b]=E.i(b)<<1|E.i(b-1)>>>31;return new o(w,E.h)}function xe(E,y){const w=y>>5;y%=32;const b=E.g.length-w,T=[];for(let C=0;C<b;C++)T[C]=y>0?E.i(C+w)>>>y|E.i(C+w+1)<<32-y:E.i(C+w);return new o(T,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Vp=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,nn=o}).apply(typeof sh<"u"?sh:typeof self<"u"?self:typeof window<"u"?window:{});var zs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dp,Fr,Np,ni,Ca,Op,Lp,Mp;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof zs=="object"&&zs];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var A=a[g];if(!(A in d))break e;d=d[A]}a=a[a.length-1],g=d[a],u=u(g),u!=g&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var d=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&d.push([g,u[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,d){return a.call.apply(a.bind,arguments)}function h(a,u,d){return h=l,h.apply(null,arguments)}function f(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,A,S){for(var N=Array(arguments.length-2),W=2;W<arguments.length;W++)N[W-2]=arguments[W];return u.prototype[A].apply(g,N)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function v(a){const u=a.length;if(u>0){const d=Array(u);for(let g=0;g<u;g++)d[g]=a[g];return d}return[]}function R(a,u){for(let g=1;g<arguments.length;g++){const A=arguments[g];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=a.length||0;const S=A.length||0;a.length=d+S;for(let N=0;N<S;N++)a[d+N]=A[N]}else a.push(A)}}class x{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function D(a){o.setTimeout(()=>{throw a},0)}function V(){var a=E;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class F{constructor(){this.h=this.g=null}add(u,d){const g=ie.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var ie=new x(()=>new ke,a=>a.reset());class ke{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let We,xe=!1,E=new F,y=()=>{const a=Promise.resolve(void 0);We=()=>{a.then(w)}};function w(){for(var a;a=V();){try{a.h.call(a.g)}catch(d){D(d)}var u=ie;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}xe=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var C=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a})();function _(a){return/^[\s\xa0]*$/.test(a)}function qe(a,u){T.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}p(qe,T),qe.prototype.init=function(a,u){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&qe.Z.h.call(this)},qe.prototype.h=function(){qe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var dn="closure_listenable_"+(Math.random()*1e6|0),Dm=0;function Nm(a,u,d,g,A){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=A,this.key=++Dm,this.da=this.fa=!1}function Rs(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ps(a,u,d){for(const g in a)u.call(d,a[g],g,a)}function Om(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function dl(a){const u={};for(const d in a)u[d]=a[d];return u}const fl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pl(a,u){let d,g;for(let A=1;A<arguments.length;A++){g=arguments[A];for(d in g)a[d]=g[d];for(let S=0;S<fl.length;S++)d=fl[S],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function ks(a){this.src=a,this.g={},this.h=0}ks.prototype.add=function(a,u,d,g,A){const S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);const N=Eo(a,u,g,A);return N>-1?(u=a[N],d||(u.fa=!1)):(u=new Nm(u,this.src,S,!!g,A),u.fa=d,a.push(u)),u};function To(a,u){const d=u.type;if(d in a.g){var g=a.g[d],A=Array.prototype.indexOf.call(g,u,void 0),S;(S=A>=0)&&Array.prototype.splice.call(g,A,1),S&&(Rs(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Eo(a,u,d,g){for(let A=0;A<a.length;++A){const S=a[A];if(!S.da&&S.listener==u&&S.capture==!!d&&S.ha==g)return A}return-1}var bo="closure_lm_"+(Math.random()*1e6|0),vo={};function gl(a,u,d,g,A){if(Array.isArray(u)){for(let S=0;S<u.length;S++)gl(a,u[S],d,g,A);return null}return d=_l(d),a&&a[dn]?a.J(u,d,c(g)?!!g.capture:!1,A):Lm(a,u,d,!1,g,A)}function Lm(a,u,d,g,A,S){if(!u)throw Error("Invalid event type");const N=c(A)?!!A.capture:!!A;let W=Ao(a);if(W||(a[bo]=W=new ks(a)),d=W.add(u,d,g,N,S),d.proxy)return d;if(g=Mm(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)C||(A=N),A===void 0&&(A=!1),a.addEventListener(u.toString(),g,A);else if(a.attachEvent)a.attachEvent(yl(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Mm(){function a(d){return u.call(a.src,a.listener,d)}const u=Fm;return a}function ml(a,u,d,g,A){if(Array.isArray(u))for(var S=0;S<u.length;S++)ml(a,u[S],d,g,A);else g=c(g)?!!g.capture:!!g,d=_l(d),a&&a[dn]?(a=a.i,S=String(u).toString(),S in a.g&&(u=a.g[S],d=Eo(u,d,g,A),d>-1&&(Rs(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[S],a.h--)))):a&&(a=Ao(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Eo(u,d,g,A)),(d=a>-1?u[a]:null)&&Io(d))}function Io(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[dn])To(u.i,a);else{var d=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(d,g,a.capture):u.detachEvent?u.detachEvent(yl(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=Ao(u))?(To(d,a),d.h==0&&(d.src=null,u[bo]=null)):Rs(a)}}}function yl(a){return a in vo?vo[a]:vo[a]="on"+a}function Fm(a,u){if(a.da)a=!0;else{u=new qe(u,this);const d=a.listener,g=a.ha||a.src;a.fa&&Io(a),a=d.call(g,u)}return a}function Ao(a){return a=a[bo],a instanceof ks?a:null}var Co="__closure_events_fn_"+(Math.random()*1e9>>>0);function _l(a){return typeof a=="function"?a:(a[Co]||(a[Co]=function(u){return a.handleEvent(u)}),a[Co])}function Ve(){b.call(this),this.i=new ks(this),this.M=this,this.G=null}p(Ve,b),Ve.prototype[dn]=!0,Ve.prototype.removeEventListener=function(a,u,d,g){ml(this,a,u,d,g)};function Be(a,u){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new T(u,a);else if(u instanceof T)u.target=u.target||a;else{var A=u;u=new T(g,a),pl(u,A)}A=!0;let S,N;if(d)for(N=d.length-1;N>=0;N--)S=u.g=d[N],A=xs(S,g,!0,u)&&A;if(S=u.g=a,A=xs(S,g,!0,u)&&A,A=xs(S,g,!1,u)&&A,d)for(N=0;N<d.length;N++)S=u.g=d[N],A=xs(S,g,!1,u)&&A}Ve.prototype.N=function(){if(Ve.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let g=0;g<d.length;g++)Rs(d[g]);delete a.g[u],a.h--}}this.G=null},Ve.prototype.J=function(a,u,d,g){return this.i.add(String(a),u,!1,d,g)},Ve.prototype.K=function(a,u,d,g){return this.i.add(String(a),u,!0,d,g)};function xs(a,u,d,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let A=!0;for(let S=0;S<u.length;++S){const N=u[S];if(N&&!N.da&&N.capture==d){const W=N.listener,Ee=N.ha||N.src;N.fa&&To(a.i,N),A=W.call(Ee,g)!==!1&&A}}return A&&!g.defaultPrevented}function Um(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function wl(a){a.g=Um(()=>{a.g=null,a.i&&(a.i=!1,wl(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class jm extends b{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:wl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Er(a){b.call(this),this.h=a,this.g={}}p(Er,b);var Tl=[];function El(a){Ps(a.g,function(u,d){this.g.hasOwnProperty(d)&&Io(u)},a),a.g={}}Er.prototype.N=function(){Er.Z.N.call(this),El(this)},Er.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var So=o.JSON.stringify,Bm=o.JSON.parse,Hm=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function bl(){}function vl(){}var br={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ro(){T.call(this,"d")}p(Ro,T);function Po(){T.call(this,"c")}p(Po,T);var fn={},Il=null;function Vs(){return Il=Il||new Ve}fn.Ia="serverreachability";function Al(a){T.call(this,fn.Ia,a)}p(Al,T);function vr(a){const u=Vs();Be(u,new Al(u))}fn.STAT_EVENT="statevent";function Cl(a,u){T.call(this,fn.STAT_EVENT,a),this.stat=u}p(Cl,T);function He(a){const u=Vs();Be(u,new Cl(u,a))}fn.Ja="timingevent";function Sl(a,u){T.call(this,fn.Ja,a),this.size=u}p(Sl,T);function Ir(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Ar(){this.g=!0}Ar.prototype.ua=function(){this.g=!1};function qm(a,u,d,g,A,S){a.info(function(){if(a.g)if(S){var N="",W=S.split("&");for(let se=0;se<W.length;se++){var Ee=W[se].split("=");if(Ee.length>1){const ve=Ee[0];Ee=Ee[1];const ft=ve.split("_");N=ft.length>=2&&ft[1]=="type"?N+(ve+"="+Ee+"&"):N+(ve+"=redacted&")}}}else N=null;else N=S;return"XMLHTTP REQ ("+g+") [attempt "+A+"]: "+u+`
`+d+`
`+N})}function $m(a,u,d,g,A,S,N){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+A+"]: "+u+`
`+d+`
`+S+" "+N})}function Fn(a,u,d,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Wm(a,d)+(g?" "+g:"")})}function zm(a,u){a.info(function(){return"TIMEOUT: "+u})}Ar.prototype.info=function(){};function Wm(a,u){if(!a.g)return u;if(!u)return null;try{const S=JSON.parse(u);if(S){for(a=0;a<S.length;a++)if(Array.isArray(S[a])){var d=S[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var A=g[0];if(A!="noop"&&A!="stop"&&A!="close")for(let N=1;N<g.length;N++)g[N]=""}}}}return So(S)}catch{return u}}var Ds={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Rl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Pl;function ko(){}p(ko,bl),ko.prototype.g=function(){return new XMLHttpRequest},Pl=new ko;function Cr(a){return encodeURIComponent(String(a))}function Jm(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function Mt(a,u,d,g){this.j=a,this.i=u,this.l=d,this.S=g||1,this.V=new Er(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new kl}function kl(){this.i=null,this.g="",this.h=!1}var xl={},xo={};function Vo(a,u,d){a.M=1,a.A=Os(dt(u)),a.u=d,a.R=!0,Vl(a,null)}function Vl(a,u){a.F=Date.now(),Ns(a),a.B=dt(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),zl(d.i,"t",g),a.C=0,d=a.j.L,a.h=new kl,a.g=lu(a.j,d?u:null,!a.u),a.P>0&&(a.O=new jm(h(a.Y,a,a.g),a.P)),u=a.V,d=a.g,g=a.ba;var A="readystatechange";Array.isArray(A)||(A&&(Tl[0]=A.toString()),A=Tl);for(let S=0;S<A.length;S++){const N=gl(d,A[S],g||u.handleEvent,!1,u.h||u);if(!N)break;u.g[N.key]=N}u=a.J?dl(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),vr(),qm(a.i,a.v,a.B,a.l,a.S,a.u)}Mt.prototype.ba=function(a){a=a.target;const u=this.O;u&&jt(a)==3?u.j():this.Y(a)},Mt.prototype.Y=function(a){try{if(a==this.g)e:{const W=jt(this.g),Ee=this.g.ya(),se=this.g.ca();if(!(W<3)&&(W!=3||this.g&&(this.h.h||this.g.la()||Xl(this.g)))){this.K||W!=4||Ee==7||(Ee==8||se<=0?vr(3):vr(2)),Do(this);var u=this.g.ca();this.X=u;var d=Gm(this);if(this.o=u==200,$m(this.i,this.v,this.B,this.l,this.S,W,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,A=this.g;if((g=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(g)){var S=g;break t}}S=null}if(a=S)Fn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,No(this,a);else{this.o=!1,this.m=3,He(12),pn(this),Sr(this);break e}}if(this.R){a=!0;let ve;for(;!this.K&&this.C<d.length;)if(ve=Km(this,d),ve==xo){W==4&&(this.m=4,He(14),a=!1),Fn(this.i,this.l,null,"[Incomplete Response]");break}else if(ve==xl){this.m=4,He(15),Fn(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Fn(this.i,this.l,ve,null),No(this,ve);if(Dl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||d.length!=0||this.h.h||(this.m=1,He(16),a=!1),this.o=this.o&&a,!a)Fn(this.i,this.l,d,"[Invalid Chunked Response]"),pn(this),Sr(this);else if(d.length>0&&!this.W){this.W=!0;var N=this.j;N.g==this&&N.aa&&!N.P&&(N.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Ho(N),N.P=!0,He(11))}}else Fn(this.i,this.l,d,null),No(this,d);W==4&&pn(this),this.o&&!this.K&&(W==4?iu(this.j,this):(this.o=!1,Ns(this)))}else ly(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,He(12)):(this.m=0,He(13)),pn(this),Sr(this)}}}catch{}finally{}};function Gm(a){if(!Dl(a))return a.g.la();const u=Xl(a.g);if(u==="")return"";let d="";const g=u.length,A=jt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return pn(a),Sr(a),"";a.h.i=new o.TextDecoder}for(let S=0;S<g;S++)a.h.h=!0,d+=a.h.i.decode(u[S],{stream:!(A&&S==g-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function Dl(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Km(a,u){var d=a.C,g=u.indexOf(`
`,d);return g==-1?xo:(d=Number(u.substring(d,g)),isNaN(d)?xl:(g+=1,g+d>u.length?xo:(u=u.slice(g,g+d),a.C=g+d,u)))}Mt.prototype.cancel=function(){this.K=!0,pn(this)};function Ns(a){a.T=Date.now()+a.H,Nl(a,a.H)}function Nl(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ir(h(a.aa,a),u)}function Do(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Mt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(zm(this.i,this.B),this.M!=2&&(vr(),He(17)),pn(this),this.m=2,Sr(this)):Nl(this,this.T-a)};function Sr(a){a.j.I==0||a.K||iu(a.j,a)}function pn(a){Do(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,El(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function No(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||Oo(d.h,a))){if(!a.L&&Oo(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var A=g;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)js(d),Fs(d);else break e;Bo(d),He(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ir(h(d.Va,d),6e3));Ml(d.h)<=1&&d.ta&&(d.ta=void 0)}else mn(d,11)}else if((a.L||d.g==a)&&js(d),!_(u))for(A=d.Ba.g.parse(u),u=0;u<A.length;u++){let se=A[u];const ve=se[0];if(!(ve<=d.K))if(d.K=ve,se=se[1],d.I==2)if(se[0]=="c"){d.M=se[1],d.ba=se[2];const ft=se[3];ft!=null&&(d.ka=ft,d.j.info("VER="+d.ka));const yn=se[4];yn!=null&&(d.za=yn,d.j.info("SVER="+d.za));const Bt=se[5];Bt!=null&&typeof Bt=="number"&&Bt>0&&(g=1.5*Bt,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Ht=a.g;if(Ht){const Hs=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hs){var S=g.h;S.g||Hs.indexOf("spdy")==-1&&Hs.indexOf("quic")==-1&&Hs.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Lo(S,S.h),S.h=null))}if(g.G){const qo=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;qo&&(g.wa=qo,ae(g.J,g.G,qo))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var N=a;if(g.na=cu(g,g.L?g.ba:null,g.W),N.L){Fl(g.h,N);var W=N,Ee=g.O;Ee&&(W.H=Ee),W.D&&(Do(W),Ns(W)),g.g=N}else ru(g);d.i.length>0&&Us(d)}else se[0]!="stop"&&se[0]!="close"||mn(d,7);else d.I==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?mn(d,7):jo(d):se[0]!="noop"&&d.l&&d.l.qa(se),d.A=0)}}vr(4)}catch{}}var Qm=class{constructor(a,u){this.g=a,this.map=u}};function Ol(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ll(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ml(a){return a.h?1:a.g?a.g.size:0}function Oo(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Lo(a,u){a.g?a.g.add(u):a.h=u}function Fl(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Ol.prototype.cancel=function(){if(this.i=Ul(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ul(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return v(a.i)}var jl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ym(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let A,S=null;g>=0?(A=a[d].substring(0,g),S=a[d].substring(g+1)):A=a[d],u(A,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Ft(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Ft?(this.l=a.l,Rr(this,a.j),this.o=a.o,this.g=a.g,Pr(this,a.u),this.h=a.h,Mo(this,Wl(a.i)),this.m=a.m):a&&(u=String(a).match(jl))?(this.l=!1,Rr(this,u[1]||"",!0),this.o=kr(u[2]||""),this.g=kr(u[3]||"",!0),Pr(this,u[4]),this.h=kr(u[5]||"",!0),Mo(this,u[6]||"",!0),this.m=kr(u[7]||"")):(this.l=!1,this.i=new Vr(null,this.l))}Ft.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(xr(u,Bl,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(xr(u,Bl,!0),"@"),a.push(Cr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(xr(d,d.charAt(0)=="/"?ey:Zm,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",xr(d,ny)),a.join("")},Ft.prototype.resolve=function(a){const u=dt(this);let d=!!a.j;d?Rr(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var g=a.h;if(d)Pr(u,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var A=u.h.lastIndexOf("/");A!=-1&&(g=u.h.slice(0,A+1)+g)}if(A=g,A==".."||A==".")g="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){g=A.lastIndexOf("/",0)==0,A=A.split("/");const S=[];for(let N=0;N<A.length;){const W=A[N++];W=="."?g&&N==A.length&&S.push(""):W==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),g&&N==A.length&&S.push("")):(S.push(W),g=!0)}g=S.join("/")}else g=A}return d?u.h=g:d=a.i.toString()!=="",d?Mo(u,Wl(a.i)):d=!!a.m,d&&(u.m=a.m),u};function dt(a){return new Ft(a)}function Rr(a,u,d){a.j=d?kr(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Pr(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Mo(a,u,d){u instanceof Vr?(a.i=u,ry(a.i,a.l)):(d||(u=xr(u,ty)),a.i=new Vr(u,a.l))}function ae(a,u,d){a.i.set(u,d)}function Os(a){return ae(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function kr(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function xr(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Xm),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Xm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Bl=/[#\/\?@]/g,Zm=/[#\?:]/g,ey=/[#\?]/g,ty=/[#\?@]/g,ny=/#/g;function Vr(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function gn(a){a.g||(a.g=new Map,a.h=0,a.i&&Ym(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Vr.prototype,n.add=function(a,u){gn(this),this.i=null,a=Un(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Hl(a,u){gn(a),u=Un(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function ql(a,u){return gn(a),u=Un(a,u),a.g.has(u)}n.forEach=function(a,u){gn(this),this.g.forEach(function(d,g){d.forEach(function(A){a.call(u,A,g,this)},this)},this)};function $l(a,u){gn(a);let d=[];if(typeof u=="string")ql(a,u)&&(d=d.concat(a.g.get(Un(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}n.set=function(a,u){return gn(this),this.i=null,a=Un(this,a),ql(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=$l(this,a),a.length>0?String(a[0]):u):u};function zl(a,u,d){Hl(a,u),d.length>0&&(a.i=null,a.g.set(Un(a,u),v(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var d=u[g];const A=Cr(d);d=$l(this,d);for(let S=0;S<d.length;S++){let N=A;d[S]!==""&&(N+="="+Cr(d[S])),a.push(N)}}return this.i=a.join("&")};function Wl(a){const u=new Vr;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function Un(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function ry(a,u){u&&!a.j&&(gn(a),a.i=null,a.g.forEach(function(d,g){const A=g.toLowerCase();g!=A&&(Hl(this,g),zl(this,A,d))},a)),a.j=u}function sy(a,u){const d=new Ar;if(o.Image){const g=new Image;g.onload=f(Ut,d,"TestLoadImage: loaded",!0,u,g),g.onerror=f(Ut,d,"TestLoadImage: error",!1,u,g),g.onabort=f(Ut,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=f(Ut,d,"TestLoadImage: timeout",!1,u,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function iy(a,u){const d=new Ar,g=new AbortController,A=setTimeout(()=>{g.abort(),Ut(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(S=>{clearTimeout(A),S.ok?Ut(d,"TestPingServer: ok",!0,u):Ut(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),Ut(d,"TestPingServer: error",!1,u)})}function Ut(a,u,d,g,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),g(d)}catch{}}function oy(){this.g=new Hm}function Fo(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Fo,bl),Fo.prototype.g=function(){return new Ls(this.i,this.h)};function Ls(a,u){Ve.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Ls,Ve),n=Ls.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Nr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Dr(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Nr(this)),this.g&&(this.readyState=3,Nr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Jl(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Jl(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Dr(this):Nr(this),this.readyState==3&&Jl(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Dr(this))},n.Na=function(a){this.g&&(this.response=a,Dr(this))},n.ga=function(){this.g&&Dr(this)};function Dr(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Nr(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Nr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Gl(a){let u="";return Ps(a,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function Uo(a,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Gl(d),typeof a=="string"?d!=null&&Cr(d):ae(a,u,d))}function fe(a){Ve.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(fe,Ve);var ay=/^https?$/i,cy=["POST","PUT"];n=fe.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Pl.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(S){Kl(this,S);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var A in g)d.set(A,g[A]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const S of g.keys())d.set(S,g.get(S));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),A=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(cy,u,void 0)>=0)||g||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,N]of d)this.g.setRequestHeader(S,N);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(S){Kl(this,S)}};function Kl(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,Ql(a),Ms(a)}function Ql(a){a.A||(a.A=!0,Be(a,"complete"),Be(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Be(this,"complete"),Be(this,"abort"),Ms(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ms(this,!0)),fe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Yl(this):this.Xa())},n.Xa=function(){Yl(this)};function Yl(a){if(a.h&&typeof i<"u"){if(a.v&&jt(a)==4)setTimeout(a.Ca.bind(a),0);else if(Be(a,"readystatechange"),jt(a)==4){a.h=!1;try{const S=a.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=S===0){let N=String(a.D).match(jl)[1]||null;!N&&o.self&&o.self.location&&(N=o.self.location.protocol.slice(0,-1)),g=!ay.test(N?N.toLowerCase():"")}d=g}if(d)Be(a,"complete"),Be(a,"success");else{a.o=6;try{var A=jt(a)>2?a.g.statusText:""}catch{A=""}a.l=A+" ["+a.ca()+"]",Ql(a)}}finally{Ms(a)}}}}function Ms(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||Be(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function jt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return jt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Bm(u)}};function Xl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ly(a){const u={};a=(a.g&&jt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var d=Jm(a[g]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=u[A]||[];u[A]=S,S.push(d)}Om(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Or(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Zl(a){this.za=0,this.i=[],this.j=new Ar,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Or("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Or("baseRetryDelayMs",5e3,a),this.Za=Or("retryDelaySeedMs",1e4,a),this.Ta=Or("forwardChannelMaxRetries",2,a),this.va=Or("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Ol(a&&a.concurrentRequestLimit),this.Ba=new oy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Zl.prototype,n.ka=8,n.I=1,n.connect=function(a,u,d,g){He(0),this.W=a,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=cu(this,null,this.W),Us(this)};function jo(a){if(eu(a),a.I==3){var u=a.V++,d=dt(a.J);if(ae(d,"SID",a.M),ae(d,"RID",u),ae(d,"TYPE","terminate"),Lr(a,d),u=new Mt(a,a.j,u),u.M=2,u.A=Os(dt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=lu(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Ns(u)}au(a)}function Fs(a){a.g&&(Ho(a),a.g.cancel(),a.g=null)}function eu(a){Fs(a),a.v&&(o.clearTimeout(a.v),a.v=null),js(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Us(a){if(!Ll(a.h)&&!a.m){a.m=!0;var u=a.Ea;We||y(),xe||(We(),xe=!0),E.add(u,a),a.D=0}}function uy(a,u){return Ml(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ir(h(a.Ea,a,u),ou(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const A=new Mt(this,this.j,a);let S=this.o;if(this.U&&(S?(S=dl(S),pl(S,this.U)):S=this.U),this.u!==null||this.R||(A.J=S,S=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=nu(this,A,u),d=dt(this.J),ae(d,"RID",a),ae(d,"CVER",22),this.G&&ae(d,"X-HTTP-Session-Id",this.G),Lr(this,d),S&&(this.R?u="headers="+Cr(Gl(S))+"&"+u:this.u&&Uo(d,this.u,S)),Lo(this.h,A),this.Ra&&ae(d,"TYPE","init"),this.S?(ae(d,"$req",u),ae(d,"SID","null"),A.U=!0,Vo(A,d,null)):Vo(A,d,u),this.I=2}}else this.I==3&&(a?tu(this,a):this.i.length==0||Ll(this.h)||tu(this))};function tu(a,u){var d;u?d=u.l:d=a.V++;const g=dt(a.J);ae(g,"SID",a.M),ae(g,"RID",d),ae(g,"AID",a.K),Lr(a,g),a.u&&a.o&&Uo(g,a.u,a.o),d=new Mt(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=nu(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Lo(a.h,d),Vo(d,g,u)}function Lr(a,u){a.H&&Ps(a.H,function(d,g){ae(u,g,d)}),a.l&&Ps({},function(d,g){ae(u,g,d)})}function nu(a,u,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var A=a.i;let W=-1;for(;;){const Ee=["count="+d];W==-1?d>0?(W=A[0].g,Ee.push("ofs="+W)):W=0:Ee.push("ofs="+W);let se=!0;for(let ve=0;ve<d;ve++){var S=A[ve].g;const ft=A[ve].map;if(S-=W,S<0)W=Math.max(0,A[ve].g-100),se=!1;else try{S="req"+S+"_"||"";try{var N=ft instanceof Map?ft:Object.entries(ft);for(const[yn,Bt]of N){let Ht=Bt;c(Bt)&&(Ht=So(Bt)),Ee.push(S+yn+"="+encodeURIComponent(Ht))}}catch(yn){throw Ee.push(S+"type="+encodeURIComponent("_badmap")),yn}}catch{g&&g(ft)}}if(se){N=Ee.join("&");break e}}N=void 0}return a=a.i.splice(0,d),u.G=a,N}function ru(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;We||y(),xe||(We(),xe=!0),E.add(u,a),a.A=0}}function Bo(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ir(h(a.Da,a),ou(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,su(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ir(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,He(10),Fs(this),su(this))};function Ho(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function su(a){a.g=new Mt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=dt(a.na);ae(u,"RID","rpc"),ae(u,"SID",a.M),ae(u,"AID",a.K),ae(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&ae(u,"TO",a.ia),ae(u,"TYPE","xmlhttp"),Lr(a,u),a.u&&a.o&&Uo(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Os(dt(u)),d.u=null,d.R=!0,Vl(d,a)}n.Va=function(){this.C!=null&&(this.C=null,Fs(this),Bo(this),He(19))};function js(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function iu(a,u){var d=null;if(a.g==u){js(a),Ho(a),a.g=null;var g=2}else if(Oo(a.h,u))d=u.G,Fl(a.h,u),g=1;else return;if(a.I!=0){if(u.o)if(g==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var A=a.D;g=Vs(),Be(g,new Sl(g,d)),Us(a)}else ru(a);else if(A=u.m,A==3||A==0&&u.X>0||!(g==1&&uy(a,u)||g==2&&Bo(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),A){case 1:mn(a,5);break;case 4:mn(a,10);break;case 3:mn(a,6);break;default:mn(a,2)}}}function ou(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function mn(a,u){if(a.j.info("Error code "+u),u==2){var d=h(a.bb,a),g=a.Ua;const A=!g;g=new Ft(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Rr(g,"https"),Os(g),A?sy(g.toString(),d):iy(g.toString(),d)}else He(2);a.I=0,a.l&&a.l.pa(u),au(a),eu(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),He(2)):(this.j.info("Failed to ping google.com"),He(1))};function au(a){if(a.I=0,a.ja=[],a.l){const u=Ul(a.h);(u.length!=0||a.i.length!=0)&&(R(a.ja,u),R(a.ja,a.i),a.h.i.length=0,v(a.i),a.i.length=0),a.l.oa()}}function cu(a,u,d){var g=d instanceof Ft?dt(d):new Ft(d);if(g.g!="")u&&(g.g=u+"."+g.g),Pr(g,g.u);else{var A=o.location;g=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;const S=new Ft(null);g&&Rr(S,g),u&&(S.g=u),A&&Pr(S,A),d&&(S.h=d),g=S}return d=a.G,u=a.wa,d&&u&&ae(g,d,u),ae(g,"VER",a.ka),Lr(a,g),g}function lu(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new fe(new Fo({ab:d})):new fe(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function uu(){}n=uu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Bs(){}Bs.prototype.g=function(a,u){return new Je(a,u)};function Je(a,u){Ve.call(this),this.g=new Zl(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!_(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!_(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new jn(this)}p(Je,Ve),Je.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Je.prototype.close=function(){jo(this.g)},Je.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=So(a),a=d);u.i.push(new Qm(u.Ya++,a)),u.I==3&&Us(u)},Je.prototype.N=function(){this.g.l=null,delete this.j,jo(this.g),delete this.g,Je.Z.N.call(this)};function hu(a){Ro.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}p(hu,Ro);function du(){Po.call(this),this.status=1}p(du,Po);function jn(a){this.g=a}p(jn,uu),jn.prototype.ra=function(){Be(this.g,"a")},jn.prototype.qa=function(a){Be(this.g,new hu(a))},jn.prototype.pa=function(a){Be(this.g,new du)},jn.prototype.oa=function(){Be(this.g,"b")},Bs.prototype.createWebChannel=Bs.prototype.g,Je.prototype.send=Je.prototype.o,Je.prototype.open=Je.prototype.m,Je.prototype.close=Je.prototype.close,Mp=function(){return new Bs},Lp=function(){return Vs()},Op=fn,Ca={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ds.NO_ERROR=0,Ds.TIMEOUT=8,Ds.HTTP_ERROR=6,ni=Ds,Rl.COMPLETE="complete",Np=Rl,vl.EventType=br,br.OPEN="a",br.CLOSE="b",br.ERROR="c",br.MESSAGE="d",Ve.prototype.listen=Ve.prototype.J,Fr=vl,fe.prototype.listenOnce=fe.prototype.K,fe.prototype.getLastError=fe.prototype.Ha,fe.prototype.getLastErrorCode=fe.prototype.ya,fe.prototype.getStatus=fe.prototype.ca,fe.prototype.getResponseJson=fe.prototype.La,fe.prototype.getResponseText=fe.prototype.la,fe.prototype.send=fe.prototype.ea,fe.prototype.setWithCredentials=fe.prototype.Fa,Dp=fe}).apply(typeof zs<"u"?zs:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yr="12.8.0";function xv(n){yr=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Rn=new uc("@firebase/firestore");function $n(){return Rn.logLevel}function L(n,...e){if(Rn.logLevel<=G.DEBUG){const t=e.map(Ic);Rn.debug(`Firestore (${yr}): ${n}`,...t)}}function Dt(n,...e){if(Rn.logLevel<=G.ERROR){const t=e.map(Ic);Rn.error(`Firestore (${yr}): ${n}`,...t)}}function sr(n,...e){if(Rn.logLevel<=G.WARN){const t=e.map(Ic);Rn.warn(`Firestore (${yr}): ${n}`,...t)}}function Ic(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Fp(n,r,t)}function Fp(n,e,t){let r=`FIRESTORE (${yr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Dt(r),new Error(r)}function te(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Fp(e,s,r)}function z(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Lt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Oe.UNAUTHENTICATED)))}shutdown(){}}class Dv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Nv{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){te(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Pt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Pt,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Pt)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string",31837,{l:r}),new Up(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string",2055,{h:e}),new Oe(e)}}class Ov{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Lv{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Ov(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Oe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ih{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ze(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){te(this.o===void 0,3512);const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ih(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(te(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ih(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Fv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function K(n,e){return n<e?-1:n>e?1:0}function Sa(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return ea(s)===ea(i)?K(s,i):ea(s)?1:-1}return K(n.length,e.length)}const Uv=55296,jv=57343;function ea(n){const e=n.charCodeAt(0);return e>=Uv&&e<=jv}function ir(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="__name__";class pt{constructor(e,t,r){t===void 0?t=0:t>e.length&&B(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&B(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return pt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof pt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=pt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return K(e.length,t.length)}static compareSegments(e,t){const r=pt.isNumericId(e),s=pt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?pt.extractNumericId(e).compare(pt.extractNumericId(t)):Sa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return nn.fromString(e.substring(4,e.length-2))}}class oe extends pt{construct(e,t,r){return new oe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new oe(t)}static emptyPath(){return new oe([])}}const Bv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends pt{construct(e,t,r){return new Re(e,t,r)}static isValidIdentifier(e){return Bv.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===oh}static keyField(){return new Re([oh])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(t)}static emptyPath(){return new Re([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function jp(n,e,t){if(!t)throw new O(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Hv(n,e,t,r){if(e===!0&&r===!0)throw new O(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ah(n){if(!j.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ch(n){if(j.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Bp(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Xi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B(12329,{type:typeof n})}function at(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xi(n);throw new O(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Te(n,e){const t={typeString:n};return e&&(t.value=e),t}function bs(n,e){if(!Bp(n))throw new O(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new O(P.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh=-62135596800,uh=1e6;class le{static now(){return le.fromMillis(Date.now())}static fromDate(e){return le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*uh);return new le(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<lh)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/uh}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(bs(e,le._jsonSchema))return new le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-lh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}le._jsonSchemaVersion="firestore/timestamp/1.0",le._jsonSchema={type:Te("string",le._jsonSchemaVersion),seconds:Te("number"),nanoseconds:Te("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${static fromTimestamp(e){return new $(e)}static min(){return new $(new le(0,0))}static max(){return new $(new le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ns=-1;function qv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=$.fromTimestamp(r===1e9?new le(t+1,0):new le(t,r));return new sn(s,j.empty(),e)}function $v(n){return new sn(n.readTime,n.key,ns)}class sn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new sn($.min(),j.empty(),ns)}static max(){return new sn($.max(),j.empty(),ns)}}function zv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:K(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _r(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Wv)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):k.reject(t)}static resolve(e){return new k(((t,r)=>{t(e)}))}static reject(e){return new k(((t,r)=>{r(e)}))}static waitFor(e){return new k(((t,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&t()}),(l=>r(l)))})),o=!0,i===s&&t()}))}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next((s=>s?k.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new k(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next((f=>{o[h]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,t){return new k(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function Gv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function wr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Zi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Zi.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=-1;function eo(n){return n==null}function bi(n){return n===0&&1/n==-1/0}function Kv(n){return typeof n=="number"&&Number.isInteger(n)&&!bi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="";function Qv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=hh(e)),e=Yv(n.get(t),e);return hh(e)}function Yv(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Hp:t+="";break;default:t+=i}}return t}function hh(n){return n+Hp+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Vn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function qp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){this.comparator=e,this.root=t||Se.EMPTY}insert(e,t){return new de(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ws(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ws(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ws(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ws(this.root,e,this.comparator,!0)}}class Ws{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Se.RED,this.left=s??Se.EMPTY,this.right=i??Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Se(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Se.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw B(43730,{key:this.key,value:this.value});if(this.right.isRed())throw B(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw B(27949);return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw B(57766)}get value(){throw B(16141)}get color(){throw B(16727)}get left(){throw B(29726)}get right(){throw B(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Se(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fh(this.data.getIterator())}getIteratorFrom(e){return new fh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new be(this.comparator);return t.data=e,t}}class fh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new st([])}unionWith(e){let t=new be(Re.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new st(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ir(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class $p extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $p("Invalid base64 string: "+i):i}})(e);return new Pe(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const Xv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function on(n){if(te(!!n,39018),typeof n=="string"){let e=0;const t=Xv.exec(n);if(te(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(n.seconds),nanos:me(n.nanos)}}function me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function an(n){return typeof n=="string"?Pe.fromBase64String(n):Pe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="server_timestamp",Wp="__type__",Jp="__previous_value__",Gp="__local_write_time__";function Sc(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Wp])==null?void 0:r.stringValue)===zp}function to(n){const e=n.mapValue.fields[Jp];return Sc(e)?to(e):e}function rs(n){const e=on(n.mapValue.fields[Gp].timestampValue);return new le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,t,r,s,i,o,c,l,h,f,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const vi="(default)";class ss{constructor(e,t){this.projectId=e,this.database=t||vi}static empty(){return new ss("","")}get isDefaultDatabase(){return this.database===vi}isEqual(e){return e instanceof ss&&e.projectId===this.projectId&&e.database===this.database}}function eI(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ss(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="__type__",tI="__max__",Js={mapValue:{}},Qp="__vector__",Ii="value";function cn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Sc(n)?4:rI(n)?9007199254740991:nI(n)?10:11:B(28295,{value:n})}function bt(n,e){if(n===e)return!0;const t=cn(n);if(t!==cn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return rs(n).isEqual(rs(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=on(s.timestampValue),c=on(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return an(s.bytesValue).isEqual(an(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return me(s.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return me(s.integerValue)===me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=me(s.doubleValue),c=me(i.doubleValue);return o===c?bi(o)===bi(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return ir(n.arrayValue.values||[],e.arrayValue.values||[],bt);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(dh(o)!==dh(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!bt(o[l],c[l])))return!1;return!0})(n,e);default:return B(52216,{left:n})}}function is(n,e){return(n.values||[]).find((t=>bt(t,e)))!==void 0}function or(n,e){if(n===e)return 0;const t=cn(n),r=cn(e);if(t!==r)return K(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=me(i.integerValue||i.doubleValue),l=me(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return ph(n.timestampValue,e.timestampValue);case 4:return ph(rs(n),rs(e));case 5:return Sa(n.stringValue,e.stringValue);case 6:return(function(i,o){const c=an(i),l=an(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=K(c[h],l[h]);if(f!==0)return f}return K(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=K(me(i.latitude),me(o.latitude));return c!==0?c:K(me(i.longitude),me(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return gh(n.arrayValue,e.arrayValue);case 10:return(function(i,o){var m,v,R,x;const c=i.fields||{},l=o.fields||{},h=(m=c[Ii])==null?void 0:m.arrayValue,f=(v=l[Ii])==null?void 0:v.arrayValue,p=K(((R=h==null?void 0:h.values)==null?void 0:R.length)||0,((x=f==null?void 0:f.values)==null?void 0:x.length)||0);return p!==0?p:gh(h,f)})(n.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Js.mapValue&&o===Js.mapValue)return 0;if(i===Js.mapValue)return 1;if(o===Js.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Sa(l[p],f[p]);if(m!==0)return m;const v=or(c[l[p]],h[f[p]]);if(v!==0)return v}return K(l.length,f.length)})(n.mapValue,e.mapValue);default:throw B(23264,{he:t})}}function ph(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return K(n,e);const t=on(n),r=on(e),s=K(t.seconds,r.seconds);return s!==0?s:K(t.nanos,r.nanos)}function gh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=or(t[s],r[s]);if(i)return i}return K(t.length,r.length)}function ar(n){return Ra(n)}function Ra(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=on(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return an(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return j.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ra(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ra(t.fields[o])}`;return s+"}"})(n.mapValue):B(61005,{value:n})}function ri(n){switch(cn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=to(n);return e?16+ri(e):16;case 5:return 2*n.stringValue.length;case 6:return an(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+ri(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Vn(r.fields,((i,o)=>{s+=i.length+ri(o)})),s})(n.mapValue);default:throw B(13486,{value:n})}}function mh(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Pa(n){return!!n&&"integerValue"in n}function Rc(n){return!!n&&"arrayValue"in n}function yh(n){return!!n&&"nullValue"in n}function _h(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function si(n){return!!n&&"mapValue"in n}function nI(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Kp])==null?void 0:r.stringValue)===Qp}function Wr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Vn(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Wr(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wr(n.arrayValue.values[t]);return e}return{...n}}function rI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===tI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.value=e}static empty(){return new et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!si(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wr(t)}setAll(e){let t=Re.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=Wr(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());si(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return bt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];si(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Vn(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new et(Wr(this.value))}}function Yp(n){const e=[];return Vn(n.fields,((t,r)=>{const s=new Re([t]);if(si(r)){const i=Yp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new st(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Le(e,0,$.min(),$.min(),$.min(),et.empty(),0)}static newFoundDocument(e,t,r,s){return new Le(e,1,t,$.min(),r,s,0)}static newNoDocument(e,t){return new Le(e,2,t,$.min(),$.min(),et.empty(),0)}static newUnknownDocument(e,t){return new Le(e,3,t,$.min(),$.min(),et.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ai{constructor(e,t){this.position=e,this.inclusive=t}}function wh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),t.key):r=or(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Th(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!bt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ci{constructor(e,t="asc"){this.field=e,this.dir=t}}function sI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Xp{}class we extends Xp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new oI(e,t,r):t==="array-contains"?new lI(e,r):t==="in"?new uI(e,r):t==="not-in"?new hI(e,r):t==="array-contains-any"?new dI(e,r):new we(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new aI(e,r):new cI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(or(t,this.value)):t!==null&&cn(this.value)===cn(t)&&this.matchesComparison(or(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ht extends Xp{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ht(e,t)}matches(e){return Zp(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Zp(n){return n.op==="and"}function eg(n){return iI(n)&&Zp(n)}function iI(n){for(const e of n.filters)if(e instanceof ht)return!1;return!0}function ka(n){if(n instanceof we)return n.field.canonicalString()+n.op.toString()+ar(n.value);if(eg(n))return n.filters.map((e=>ka(e))).join(",");{const e=n.filters.map((t=>ka(t))).join(",");return`${n.op}(${e})`}}function tg(n,e){return n instanceof we?(function(r,s){return s instanceof we&&r.op===s.op&&r.field.isEqual(s.field)&&bt(r.value,s.value)})(n,e):n instanceof ht?(function(r,s){return s instanceof ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&tg(o,s.filters[c])),!0):!1})(n,e):void B(19439)}function ng(n){return n instanceof we?(function(t){return`${t.field.canonicalString()} ${t.op} ${ar(t.value)}`})(n):n instanceof ht?(function(t){return t.op.toString()+" {"+t.getFilters().map(ng).join(" ,")+"}"})(n):"Filter"}class oI extends we{constructor(e,t,r){super(e,t,r),this.key=j.fromName(r.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class aI extends we{constructor(e,t){super(e,"in",t),this.keys=rg("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class cI extends we{constructor(e,t){super(e,"not-in",t),this.keys=rg("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function rg(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>j.fromName(r.referenceValue)))}class lI extends we{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Rc(t)&&is(t.arrayValue,this.value)}}class uI extends we{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&is(this.value.arrayValue,t)}}class hI extends we{constructor(e,t){super(e,"not-in",t)}matches(e){if(is(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!is(this.value.arrayValue,t)}}class dI extends we{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Rc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>is(this.value.arrayValue,r)))}}/**
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
 */class fI{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Eh(n,e=null,t=[],r=[],s=null,i=null,o=null){return new fI(n,e,t,r,s,i,o)}function Pc(n){const e=z(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>ka(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),eo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>ar(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>ar(r))).join(",")),e.Te=t}return e.Te}function kc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!sI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!tg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Th(n.startAt,e.startAt)&&Th(n.endAt,e.endAt)}function xa(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function pI(n,e,t,r,s,i,o,c){return new vs(n,e,t,r,s,i,o,c)}function no(n){return new vs(n)}function bh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function gI(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function sg(n){return n.collectionGroup!==null}function Jr(n){const e=z(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new be(Re.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ci(i,r))})),t.has(Re.keyField().canonicalString())||e.Ie.push(new Ci(Re.keyField(),r))}return e.Ie}function mt(n){const e=z(n);return e.Ee||(e.Ee=mI(e,Jr(n))),e.Ee}function mI(n,e){if(n.limitType==="F")return Eh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Ci(s.field,i)}));const t=n.endAt?new Ai(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ai(n.startAt.position,n.startAt.inclusive):null;return Eh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Va(n,e){const t=n.filters.concat([e]);return new vs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Da(n,e,t){return new vs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ro(n,e){return kc(mt(n),mt(e))&&n.limitType===e.limitType}function ig(n){return`${Pc(mt(n))}|lt:${n.limitType}`}function zn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>ng(s))).join(", ")}]`),eo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>ar(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>ar(s))).join(",")),`Target(${r})`})(mt(n))}; limitType=${n.limitType})`}function so(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):j.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Jr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const h=wh(o,c,l);return o.inclusive?h<=0:h<0})(r.startAt,Jr(r),s)||r.endAt&&!(function(o,c,l){const h=wh(o,c,l);return o.inclusive?h>=0:h>0})(r.endAt,Jr(r),s))})(n,e)}function yI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function og(n){return(e,t)=>{let r=!1;for(const s of Jr(n)){const i=_I(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function _I(n,e,t){const r=n.field.isKeyField()?j.comparator(e.key,t.key):(function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?or(l,h):B(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Vn(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return qp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=new de(j.comparator);function Nt(){return wI}const ag=new de(j.comparator);function Ur(...n){let e=ag;for(const t of n)e=e.insert(t.key,t);return e}function cg(n){let e=ag;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Tn(){return Gr()}function lg(){return Gr()}function Gr(){return new Dn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const TI=new de(j.comparator),EI=new be(j.comparator);function Q(...n){let e=EI;for(const t of n)e=e.add(t);return e}const bI=new be(K);function vI(){return bI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bi(e)?"-0":e}}function ug(n){return{integerValue:""+n}}function II(n,e){return Kv(e)?ug(e):xc(n,e)}/**
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
 */class io{constructor(){this._=void 0}}function AI(n,e,t){return n instanceof os?(function(s,i){const o={fields:{[Wp]:{stringValue:zp},[Gp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Sc(i)&&(i=to(i)),i&&(o.fields[Jp]=i),{mapValue:o}})(t,e):n instanceof as?dg(n,e):n instanceof cs?fg(n,e):(function(s,i){const o=hg(s,i),c=vh(o)+vh(s.Ae);return Pa(o)&&Pa(s.Ae)?ug(c):xc(s.serializer,c)})(n,e)}function CI(n,e,t){return n instanceof as?dg(n,e):n instanceof cs?fg(n,e):t}function hg(n,e){return n instanceof Si?(function(r){return Pa(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class os extends io{}class as extends io{constructor(e){super(),this.elements=e}}function dg(n,e){const t=pg(e);for(const r of n.elements)t.some((s=>bt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class cs extends io{constructor(e){super(),this.elements=e}}function fg(n,e){let t=pg(e);for(const r of n.elements)t=t.filter((s=>!bt(s,r)));return{arrayValue:{values:t}}}class Si extends io{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function vh(n){return me(n.integerValue||n.doubleValue)}function pg(n){return Rc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,t){this.field=e,this.transform=t}}function RI(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof as&&s instanceof as||r instanceof cs&&s instanceof cs?ir(r.elements,s.elements,bt):r instanceof Si&&s instanceof Si?bt(r.Ae,s.Ae):r instanceof os&&s instanceof os})(n.transform,e.transform)}class PI{constructor(e,t){this.version=e,this.transformResults=t}}class yt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new yt}static exists(e){return new yt(void 0,e)}static updateTime(e){return new yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ii(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class oo{}function gg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Vc(n.key,yt.none()):new Is(n.key,n.data,yt.none());{const t=n.data,r=et.empty();let s=new be(Re.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Nn(n.key,r,new st(s.toArray()),yt.none())}}function kI(n,e,t){n instanceof Is?(function(s,i,o){const c=s.value.clone(),l=Ah(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Nn?(function(s,i,o){if(!ii(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Ah(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(mg(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Kr(n,e,t,r){return n instanceof Is?(function(i,o,c,l){if(!ii(i.precondition,o))return c;const h=i.value.clone(),f=Ch(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof Nn?(function(i,o,c,l){if(!ii(i.precondition,o))return c;const h=Ch(i.fieldTransforms,l,o),f=o.data;return f.setAll(mg(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,o,c){return ii(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function xI(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=hg(r.transform,s||null);i!=null&&(t===null&&(t=et.empty()),t.set(r.field,i))}return t||null}function Ih(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ir(r,s,((i,o)=>RI(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Is extends oo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Nn extends oo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function mg(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Ah(n,e,t){const r=new Map;te(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,CI(o,c,t[s]))}return r}function Ch(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,AI(i,o,e))}return r}class Vc extends oo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VI extends oo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&kI(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Kr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Kr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=lg();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=gg(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument($.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Q())}isEqual(e){return this.batchId===e.batchId&&ir(this.mutations,e.mutations,((t,r)=>Ih(t,r)))&&ir(this.baseMutations,e.baseMutations,((t,r)=>Ih(t,r)))}}class Dc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){te(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return TI})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Dc(e,t,r,s)}}/**
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
 */class NI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class OI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e,X;function LI(n){switch(n){case P.OK:return B(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return B(15467,{code:n})}}function yg(n){if(n===void 0)return Dt("GRPC error has no .code"),P.UNKNOWN;switch(n){case _e.OK:return P.OK;case _e.CANCELLED:return P.CANCELLED;case _e.UNKNOWN:return P.UNKNOWN;case _e.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case _e.INTERNAL:return P.INTERNAL;case _e.UNAVAILABLE:return P.UNAVAILABLE;case _e.UNAUTHENTICATED:return P.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case _e.NOT_FOUND:return P.NOT_FOUND;case _e.ALREADY_EXISTS:return P.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return P.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case _e.ABORTED:return P.ABORTED;case _e.OUT_OF_RANGE:return P.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return P.UNIMPLEMENTED;case _e.DATA_LOSS:return P.DATA_LOSS;default:return B(39323,{code:n})}}(X=_e||(_e={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function MI(){return new TextEncoder}/**
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
 */const FI=new nn([4294967295,4294967295],0);function Sh(n){const e=MI().encode(n),t=new Vp;return t.update(e),new Uint8Array(t.digest())}function Rh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new nn([t,r],0),new nn([s,i],0)]}class Nc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new jr(`Invalid padding: ${t}`);if(r<0)throw new jr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new jr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new jr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=nn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(nn.fromNumber(r)));return s.compare(FI)===1&&(s=new nn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Sh(e),[r,s]=Rh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Nc(i,s,t);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=Sh(e),[r,s]=Rh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class jr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,As.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ao($.min(),s,new de(K),Nt(),Q())}}class As{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new As(r,t,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=s}}class _g{constructor(e,t){this.targetId=e,this.Ce=t}}class wg{constructor(e,t,r=Pe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ph{constructor(){this.ve=0,this.Fe=kh(),this.Me=Pe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Q(),t=Q(),r=Q();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:B(38017,{changeType:i})}})),new As(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=kh()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,te(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class UI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Nt(),this.He=Gs(),this.Je=Gs(),this.Ze=new de(K)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:B(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(xa(i))if(r===0){const o=new j(i.path);this.et(t,o,Le.newNoDocument(o,$.min()))}else te(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=an(r).toUint8Array()}catch(l){if(l instanceof $p)return sr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Nc(o,s,i)}catch(l){return sr(l instanceof jr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&xa(c.target)){const l=new j(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Le.newNoDocument(l,e))}i.Be&&(t.set(o,i.ke()),i.Ke())}}));let r=Q();this.Je.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new ao(e,t,this.Ze,this.je,r);return this.je=Nt(),this.He=Gs(),this.Je=Gs(),this.Ze=new de(K),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Ph,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new be(K),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new be(K),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ph),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Gs(){return new de(j.comparator)}function kh(){return new de(j.comparator)}const jI={asc:"ASCENDING",desc:"DESCENDING"},BI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},HI={and:"AND",or:"OR"};class qI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Na(n,e){return n.useProto3Json||eo(e)?e:{value:e}}function Ri(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function $I(n,e){return Ri(n,e.toTimestamp())}function _t(n){return te(!!n,49232),$.fromTimestamp((function(t){const r=on(t);return new le(r.seconds,r.nanos)})(n))}function Oc(n,e){return Oa(n,e).canonicalString()}function Oa(n,e){const t=(function(s){return new oe(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Eg(n){const e=oe.fromString(n);return te(Cg(e),10190,{key:e.toString()}),e}function La(n,e){return Oc(n.databaseId,e.path)}function ta(n,e){const t=Eg(e);if(t.get(1)!==n.databaseId.projectId)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j(vg(t))}function bg(n,e){return Oc(n.databaseId,e)}function zI(n){const e=Eg(n);return e.length===4?oe.emptyPath():vg(e)}function Ma(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function vg(n){return te(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function xh(n,e,t){return{name:La(n,e),fields:t.value.mapValue.fields}}function WI(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:B(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(te(f===void 0||typeof f=="string",58123),Pe.fromBase64String(f||"")):(te(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Pe.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(h){const f=h.code===void 0?P.UNKNOWN:yg(h.code);return new O(f,h.message||"")})(o);t=new wg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ta(n,r.document.name),i=_t(r.document.updateTime),o=r.document.createTime?_t(r.document.createTime):$.min(),c=new et({mapValue:{fields:r.document.fields}}),l=Le.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new oi(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ta(n,r.document),i=r.readTime?_t(r.readTime):$.min(),o=Le.newNoDocument(s,i),c=r.removedTargetIds||[];t=new oi([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ta(n,r.document),i=r.removedTargetIds||[];t=new oi([],i,s,null)}else{if(!("filter"in e))return B(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new OI(s,i),c=r.targetId;t=new _g(c,o)}}return t}function JI(n,e){let t;if(e instanceof Is)t={update:xh(n,e.key,e.value)};else if(e instanceof Vc)t={delete:La(n,e.key)};else if(e instanceof Nn)t={update:xh(n,e.key,e.data),updateMask:nA(e.fieldMask)};else{if(!(e instanceof VI))return B(16599,{dt:e.type});t={verify:La(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof os)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof as)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof cs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Si)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw B(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:$I(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B(27497)})(n,e.precondition)),t}function GI(n,e){return n&&n.length>0?(te(e!==void 0,14353),n.map((t=>(function(s,i){let o=s.updateTime?_t(s.updateTime):_t(i);return o.isEqual($.min())&&(o=_t(i)),new PI(o,s.transformResults||[])})(t,e)))):[]}function KI(n,e){return{documents:[bg(n,e.path)]}}function QI(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=bg(n,s);const i=(function(h){if(h.length!==0)return Ag(ht.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(h){if(h.length!==0)return h.map((f=>(function(m){return{field:Wn(m.field),direction:ZI(m.dir)}})(f)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Na(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:s}}function YI(n){let e=zI(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){te(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(p){const m=Ig(p);return m instanceof ht&&eg(m)?m.getFilters():[m]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((m=>(function(R){return new Ci(Jn(R.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(m)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,eo(m)?null:m})(t.limit));let l=null;t.startAt&&(l=(function(p){const m=!!p.before,v=p.values||[];return new Ai(v,m)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const m=!p.before,v=p.values||[];return new Ai(v,m)})(t.endAt)),pI(e,s,o,i,c,"F",l,h)}function XI(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ig(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Jn(t.unaryFilter.field);return we.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Jn(t.unaryFilter.field);return we.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jn(t.unaryFilter.field);return we.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Jn(t.unaryFilter.field);return we.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return B(61313);default:return B(60726)}})(n):n.fieldFilter!==void 0?(function(t){return we.create(Jn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return B(58110);default:return B(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return ht.create(t.compositeFilter.filters.map((r=>Ig(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B(1026)}})(t.compositeFilter.op))})(n):B(30097,{filter:n})}function ZI(n){return jI[n]}function eA(n){return BI[n]}function tA(n){return HI[n]}function Wn(n){return{fieldPath:n.canonicalString()}}function Jn(n){return Re.fromServerFormat(n.fieldPath)}function Ag(n){return n instanceof we?(function(t){if(t.op==="=="){if(_h(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NAN"}};if(yh(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_h(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NOT_NAN"}};if(yh(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wn(t.field),op:eA(t.op),value:t.value}}})(n):n instanceof ht?(function(t){const r=t.getFilters().map((s=>Ag(s)));return r.length===1?r[0]:{compositeFilter:{op:tA(t.op),filters:r}}})(n):B(54877,{filter:n})}function nA(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Cg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Sg(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t,r,s,i=$.min(),o=$.min(),c=Pe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.yt=e}}function sA(n){const e=YI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Da(e,e.limit,"L"):e}/**
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
 */class iA{constructor(){this.Sn=new oA}addToCollectionParentIndex(e,t){return this.Sn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(sn.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(sn.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class oA{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new be(oe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new be(oe.comparator)).toArray()}}/**
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
 */const Vh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rg=41943040;class $e{static withCacheSize(e){return new $e(e,$e.DEFAULT_COLLECTION_PERCENTILE,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$e.DEFAULT_COLLECTION_PERCENTILE=10,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$e.DEFAULT=new $e(Rg,$e.DEFAULT_COLLECTION_PERCENTILE,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$e.DISABLED=new $e(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new cr(0)}static ar(){return new cr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="LruGarbageCollector",aA=1048576;function Nh([n,e],[t,r]){const s=K(n,t);return s===0?K(e,r):s}class cA{constructor(e){this.Pr=e,this.buffer=new be(Nh),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Nh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class lA{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){L(Dh,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){wr(t)?L(Dh,"Ignoring IndexedDB error during garbage collection: ",t):await _r(t)}await this.Ar(3e5)}))}}class uA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return k.resolve(Zi.ce);const r=new cA(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(Vh)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vh):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),$n()<=G.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function hA(n,e){return new uA(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(){this.changes=new Dn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Kr(r.mutation,s,st.empty(),le.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Q()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Q()){const s=Tn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let o=Ur();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=Tn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Q())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,r,s){let i=Nt();const o=Gr(),c=(function(){return Gr()})();return t.forEach(((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Nn)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Kr(f.mutation,h,f.mutation.getFieldMask(),le.now())):o.set(h.key,st.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,f)=>o.set(h,f))),t.forEach(((h,f)=>c.set(h,new fA(f,o.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,t){const r=Gr();let s=new de(((o,c)=>o-c)),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const h=t.get(l);if(h===null)return;let f=r.get(l)||st.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||Q()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=lg();f.forEach((m=>{if(!i.has(m)){const v=gg(t.get(m),r.get(m));v!==null&&p.set(m,v),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return k.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return gI(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):sg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(Tn());let c=ns,l=i;return o.next((h=>k.forEach(h,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?k.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,Q()))).next((f=>({batchId:c,changes:cg(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next((r=>{let s=Ur();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Ur();return this.indexManager.getCollectionParents(e,i).next((c=>k.forEach(c,(l=>{const h=(function(p,m){return new vs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((o=>{i.forEach(((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Le.newInvalidDocument(f)))}));let c=Ur();return o.forEach(((l,h)=>{const f=i.get(l);f!==void 0&&Kr(f.mutation,h,st.empty(),le.now()),so(t,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return k.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:_t(s.createTime)}})(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:sA(s.bundledQuery),readTime:_t(s.readTime)}})(t)),k.resolve()}}/**
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
 */class mA{constructor(){this.overlays=new de(j.comparator),this.Lr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Tn();return k.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.bt(e,t,i)})),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=Tn(),i=t.length+1,o=new j(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new de(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Tn(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Tn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=s)););return k.resolve(c)}bt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new NI(t,r));let i=this.Lr.get(t);i===void 0&&(i=Q(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
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
 */class yA{constructor(){this.sessionToken=Pe.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(){this.kr=new be(Ie.Kr),this.qr=new be(Ie.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new Ie(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Ie(e,t))}Qr(e,t){e.forEach((r=>this.removeReference(r,t)))}Gr(e){const t=new j(new oe([])),r=new Ie(t,e),s=new Ie(t,e+1),i=[];return this.qr.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new j(new oe([])),r=new Ie(t,e),s=new Ie(t,e+1);let i=Q();return this.qr.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new Ie(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ie{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return j.comparator(e.key,t.key)||K(e.Hr,t.Hr)}static Ur(e,t){return K(e.Hr,t.Hr)||j.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new be(Ie.Kr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new DI(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new Ie(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,t){return k.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?Cc:this.Yn-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ie(t,0),s=new Ie(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],(o=>{const c=this.Zr(o.Hr);i.push(c)})),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new be(K);return t.forEach((s=>{const i=new Ie(s,0),o=new Ie(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],(c=>{r=r.add(c.Hr)}))})),k.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const o=new Ie(new j(i),0);let c=new be(K);return this.Jr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),o),k.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){te(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return k.forEach(t.mutations,(s=>{const i=new Ie(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=r}))}nr(e){}containsKey(e,t){const r=new Ie(t,0),s=this.Jr.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.ti=e,this.docs=(function(){return new de(j.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():Le.newInvalidDocument(t))}getEntries(e,t){let r=Nt();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Le.newInvalidDocument(s))})),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Nt();const o=t.path,c=new j(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||zv($v(f),r)<=0||(s.has(f.key)||so(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){B(9500)}ni(e,t){return k.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new TA(this)}getSize(e){return k.resolve(this.size)}}class TA extends dA{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)})),k.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.persistence=e,this.ri=new Dn((t=>Pc(t)),kc),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.ii=0,this.si=new Lc,this.targetCount=0,this.oi=cr._r()}forEachTarget(e,t){return this.ri.forEach(((r,s)=>t(s))),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),k.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new cr(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.lr(t),k.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),k.waitFor(i).next((()=>s))}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,t){this._i={},this.overlays={},this.ai=new Zi(0),this.ui=!1,this.ui=!0,this.ci=new yA,this.referenceDelegate=e(this),this.li=new EA(this),this.indexManager=new iA,this.remoteDocumentCache=(function(s){return new wA(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new rA(t),this.Pi=new gA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new mA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new _A(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){L("MemoryPersistence","Starting transaction:",e);const s=new bA(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((i=>this.referenceDelegate.Ii(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return k.or(Object.values(this._i).map((r=>()=>r.containsKey(e,t))))}}class bA extends Jv{constructor(e){super(),this.currentSequenceNumber=e}}class Mc{constructor(e){this.persistence=e,this.Ri=new Lc,this.Ai=null}static Vi(e){return new Mc(e)}get di(){if(this.Ai)return this.Ai;throw B(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),k.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.di.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.di,(r=>{const s=j.fromPath(r);return this.mi(e,s).next((i=>{i||t.removeEntry(s,$.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return k.or([()=>k.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Pi{constructor(e,t){this.persistence=e,this.fi=new Dn((r=>Qv(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=hA(this,t)}static Vi(e,t){return new Pi(e,t)}Ti(){}Ii(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}mr(e,t){return k.forEach(this.fi,((r,s)=>this.wr(e,r,s).next((i=>i?k.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(r++,i.removeEntry(o,$.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),k.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ri(e.data.value)),t}wr(e,t,r){return k.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=Q(),s=Q();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Fc(e,t.fromCache,r,s)}}/**
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
 */class vA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class IA{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return hT()?8:Gv(Ue())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ps(e,t,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new vA;return this.ys(e,t,o).next((c=>{if(i.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>i.result))}ws(e,t,r,s){return r.documentReadCount<this.Vs?($n()<=G.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",zn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):($n()<=G.DEBUG&&L("QueryEngine","Query:",zn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?($n()<=G.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",zn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mt(t))):k.resolve())}gs(e,t){if(bh(t))return k.resolve(null);let r=mt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Da(t,null,"F"),r=mt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Q(...i);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.bs(t,c);return this.Ss(t,h,o,l.readTime)?this.gs(e,Da(t,null,"F")):this.Ds(e,h,t,l)}))))})))))}ps(e,t,r,s){return bh(t)||s.isEqual($.min())?k.resolve(null):this.fs.getDocuments(e,r).next((i=>{const o=this.bs(t,i);return this.Ss(t,o,r,s)?k.resolve(null):($n()<=G.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),zn(t)),this.Ds(e,o,t,qv(s,ns)).next((c=>c)))}))}bs(e,t){let r=new be(og(e));return t.forEach(((s,i)=>{so(e,i)&&(r=r.add(i))})),r}Ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return $n()<=G.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",zn(t)),this.fs.getDocumentsMatchingQuery(e,t,sn.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="LocalStore",AA=3e8;class CA{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new de(K),this.Fs=new Dn((i=>Pc(i)),kc),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pA(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function SA(n,e,t,r){return new CA(n,e,t,r)}async function kg(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=Q();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next((h=>({Ns:h,removedBatchIds:o,addedBatchIds:c})))}))}))}function RA(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,f){const p=h.batch,m=p.keys();let v=k.resolve();return m.forEach((R=>{v=v.next((()=>f.getEntry(l,R))).next((x=>{const D=h.docVersions.get(R);te(D!==null,48541),x.version.compareTo(D)<0&&(p.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))}))})),v.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=Q();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function xg(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function PA(n,e){const t=z(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(t.li.removeMatchingKeys(i,f.removedDocuments,p).next((()=>t.li.addMatchingKeys(i,f.addedDocuments,p))));let v=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(Pe.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),s=s.insert(p,v),(function(x,D,V){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=AA?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0})(m,v,f)&&c.push(t.li.updateTargetData(i,v))}));let l=Nt(),h=Q();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(kA(i,o,e.documentUpdates).next((f=>{l=f.Bs,h=f.Ls}))),!r.isEqual($.min())){const f=t.li.getLastRemoteSnapshotVersion(i).next((p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return k.waitFor(c).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(t.vs=s,i)))}function kA(n,e,t){let r=Q(),s=Q();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let o=Nt();return t.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual($.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):L(Uc,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function xA(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Cc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function VA(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.li.getTargetData(r,e).next((i=>i?(s=i,k.resolve(s)):t.li.allocateTargetId(r).next((o=>(s=new Qt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r}))}async function Fa(n,e,t){const r=z(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!wr(o))throw o;L(Uc,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Oh(n,e,t){const r=z(n);let s=$.min(),i=Q();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,h,f){const p=z(l),m=p.Fs.get(f);return m!==void 0?k.resolve(p.vs.get(m)):p.li.getTargetData(h,f)})(r,o,mt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,t?s:$.min(),t?i:Q()))).next((c=>(DA(r,yI(e),c),{documents:c,ks:i})))))}function DA(n,e,t){let r=n.Ms.get(e)||$.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Ms.set(e,r)}class Lh{constructor(){this.activeTargetIds=vI()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NA{constructor(){this.vo=new Lh,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Lh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class OA{Mo(e){}shutdown(){}}/**
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
 */const Mh="ConnectivityMonitor";class Fh{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){L(Mh,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){L(Mh,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ks=null;function Ua(){return Ks===null?Ks=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ks++,"0x"+Ks.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="RestConnection",LA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class MA{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===vi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const o=Ua(),c=this.Qo(e,t.toUriEncodedString());L(na,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:h}=new URL(c),f=fr(h);return this.zo(e,c,l,r,f).then((p=>(L(na,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw sr(na,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}jo(e,t,r,s,i,o){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+yr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Qo(e,t){const r=LA[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="WebChannelConnection",Mr=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Zn extends MA{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Zn.c_){const e=Lp();Mr(e,Op.STAT_EVENT,(t=>{t.stat===Ca.PROXY?L(De,"STAT_EVENT: detected buffering proxy"):t.stat===Ca.NOPROXY&&L(De,"STAT_EVENT: detected no buffering proxy")})),Zn.c_=!0}}zo(e,t,r,s,i){const o=Ua();return new Promise(((c,l)=>{const h=new Dp;h.setWithCredentials(!0),h.listenOnce(Np.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case ni.NO_ERROR:const p=h.getResponseJson();L(De,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case ni.TIMEOUT:L(De,`RPC '${e}' ${o} timed out`),l(new O(P.DEADLINE_EXCEEDED,"Request time out"));break;case ni.HTTP_ERROR:const m=h.getStatus();if(L(De,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const R=v==null?void 0:v.error;if(R&&R.status&&R.message){const x=(function(V){const F=V.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(F)>=0?F:P.UNKNOWN})(R.status);l(new O(x,R.message))}else l(new O(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new O(P.UNAVAILABLE,"Connection failed."));break;default:B(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{L(De,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);L(De,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",f,r,15)}))}T_(e,t,r){const s=Ua(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=i.join("");L(De,`Creating RPC '${e}' stream ${s}: ${h}`,c);const f=o.createWebChannel(h,c);this.I_(f);let p=!1,m=!1;const v=new FA({Ho:R=>{m?L(De,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(p||(L(De,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),L(De,`RPC '${e}' stream ${s} sending:`,R),f.send(R))},Jo:()=>f.close()});return Mr(f,Fr.EventType.OPEN,(()=>{m||(L(De,`RPC '${e}' stream ${s} transport opened.`),v.i_())})),Mr(f,Fr.EventType.CLOSE,(()=>{m||(m=!0,L(De,`RPC '${e}' stream ${s} transport closed`),v.o_(),this.E_(f))})),Mr(f,Fr.EventType.ERROR,(R=>{m||(m=!0,sr(De,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),v.o_(new O(P.UNAVAILABLE,"The operation could not be completed")))})),Mr(f,Fr.EventType.MESSAGE,(R=>{var x;if(!m){const D=R.data[0];te(!!D,16349);const V=D,F=(V==null?void 0:V.error)||((x=V[0])==null?void 0:x.error);if(F){L(De,`RPC '${e}' stream ${s} received error:`,F);const ie=F.status;let ke=(function(E){const y=_e[E];if(y!==void 0)return yg(y)})(ie),We=F.message;ke===void 0&&(ke=P.INTERNAL,We="Unknown error status: "+ie+" with message "+F.message),m=!0,v.o_(new O(ke,We)),f.close()}else L(De,`RPC '${e}' stream ${s} received:`,D),v.__(D)}})),Zn.u_(),setTimeout((()=>{v.s_()}),0),v}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Mp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(n){return new Zn(n)}function ra(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(n){return new qI(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn.c_=!1;class Vg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="PersistentStream";class Dg{constructor(e,t,r,s,i,o,c,l){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Vg(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(Dt(t.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new O(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return L(Uh,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(L(Uh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class jA extends Dg{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=WI(this.serializer,e),r=(function(i){if(!("targetChange"in i))return $.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?$.min():o.readTime?_t(o.readTime):$.min()})(e);return this.listener.J_(t,r)}Z_(e){const t={};t.database=Ma(this.serializer),t.addTarget=(function(i,o){let c;const l=o.target;if(c=xa(l)?{documents:KI(i,l)}:{query:QI(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Tg(i,o.resumeToken);const h=Na(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo($.min())>0){c.readTime=Ri(i,o.snapshotVersion.toTimestamp());const h=Na(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=XI(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=Ma(this.serializer),t.removeTarget=e,this.K_(t)}}class BA extends Dg{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=GI(e.writeResults,e.commitTime),r=_t(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Ma(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>JI(this.serializer,r)))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{}class qA extends HA{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Oa(t,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(P.UNKNOWN,i.toString())}))}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,Oa(t,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(P.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function $A(n,e,t,r){return new qA(n,e,t,r)}class zA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Dt(t),this.aa=!1):L("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="RemoteStore";class WA{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((o=>{r.enqueueAndForget((async()=>{On(this)&&(L(Pn,"Restarting streams for network reachability change."),await(async function(l){const h=z(l);h.Ea.add(4),await Cs(h),h.Va.set("Unknown"),h.Ea.delete(4),await lo(h)})(this))}))})),this.Va=new zA(r,s)}}async function lo(n){if(On(n))for(const e of n.Ra)await e(!0)}async function Cs(n){for(const e of n.Ra)await e(!1)}function Ng(n,e){const t=z(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),qc(t)?Hc(t):Tr(t).O_()&&Bc(t,e))}function jc(n,e){const t=z(n),r=Tr(t);t.Ia.delete(e),r.O_()&&Og(t,e),t.Ia.size===0&&(r.O_()?r.L_():On(t)&&t.Va.set("Unknown"))}function Bc(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Tr(n).Z_(e)}function Og(n,e){n.da.$e(e),Tr(n).X_(e)}function Hc(n){n.da=new UI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Tr(n).start(),n.Va.ua()}function qc(n){return On(n)&&!Tr(n).x_()&&n.Ia.size>0}function On(n){return z(n).Ea.size===0}function Lg(n){n.da=void 0}async function JA(n){n.Va.set("Online")}async function GA(n){n.Ia.forEach(((e,t)=>{Bc(n,e)}))}async function KA(n,e){Lg(n),qc(n)?(n.Va.ha(e),Hc(n)):n.Va.set("Unknown")}async function QA(n,e,t){if(n.Va.set("Online"),e instanceof wg&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.da.removeTarget(c))})(n,e)}catch(r){L(Pn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ki(n,r)}else if(e instanceof oi?n.da.Xe(e):e instanceof _g?n.da.st(e):n.da.tt(e),!t.isEqual($.min()))try{const r=await xg(n.localStore);t.compareTo(r)>=0&&await(function(i,o){const c=i.da.Tt(o);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,h)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(Pe.EMPTY_BYTE_STRING,f.snapshotVersion)),Og(i,l);const p=new Qt(f.target,l,h,f.sequenceNumber);Bc(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){L(Pn,"Failed to raise snapshot:",r),await ki(n,r)}}async function ki(n,e,t){if(!wr(e))throw e;n.Ea.add(1),await Cs(n),n.Va.set("Offline"),t||(t=()=>xg(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{L(Pn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await lo(n)}))}function Mg(n,e){return e().catch((t=>ki(n,t,e)))}async function uo(n){const e=z(n),t=ln(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Cc;for(;YA(e);)try{const s=await xA(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,XA(e,s)}catch(s){await ki(e,s)}Fg(e)&&Ug(e)}function YA(n){return On(n)&&n.Ta.length<10}function XA(n,e){n.Ta.push(e);const t=ln(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Fg(n){return On(n)&&!ln(n).x_()&&n.Ta.length>0}function Ug(n){ln(n).start()}async function ZA(n){ln(n).ra()}async function e1(n){const e=ln(n);for(const t of n.Ta)e.ea(t.mutations)}async function t1(n,e,t){const r=n.Ta.shift(),s=Dc.from(r,e,t);await Mg(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await uo(n)}async function n1(n,e){e&&ln(n).Y_&&await(async function(r,s){if((function(o){return LI(o)&&o!==P.ABORTED})(s.code)){const i=r.Ta.shift();ln(r).B_(),await Mg(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await uo(r)}})(n,e),Fg(n)&&Ug(n)}async function jh(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),L(Pn,"RemoteStore received new credentials");const r=On(t);t.Ea.add(3),await Cs(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await lo(t)}async function r1(n,e){const t=z(n);e?(t.Ea.delete(2),await lo(t)):e||(t.Ea.add(2),await Cs(t),t.Va.set("Unknown"))}function Tr(n){return n.ma||(n.ma=(function(t,r,s){const i=z(t);return i.sa(),new jA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:JA.bind(null,n),Yo:GA.bind(null,n),t_:KA.bind(null,n),J_:QA.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),qc(n)?Hc(n):n.Va.set("Unknown")):(await n.ma.stop(),Lg(n))}))),n.ma}function ln(n){return n.fa||(n.fa=(function(t,r,s){const i=z(t);return i.sa(),new BA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:ZA.bind(null,n),t_:n1.bind(null,n),ta:e1.bind(null,n),na:t1.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await uo(n)):(await n.fa.stop(),n.Ta.length>0&&(L(Pn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new $c(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zc(n,e){if(Dt("AsyncQueue",`${e}: ${n}`),wr(n))return new O(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{static emptySet(e){return new er(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||j.comparator(t.key,r.key):(t,r)=>j.comparator(t.key,r.key),this.keyedMap=Ur(),this.sortedSet=new de(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof er)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new er;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this.ga=new de(j.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):B(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class lr{constructor(e,t,r,s,i,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new lr(e,t,er.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ro(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class i1{constructor(){this.queries=Hh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=z(t),i=s.queries;s.queries=Hh(),i.forEach(((o,c)=>{for(const l of c.ba)l.onError(r)}))})(this,new O(P.ABORTED,"Firestore shutting down"))}}function Hh(){return new Dn((n=>ig(n)),ro)}async function Wc(n,e){const t=z(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new s1,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=zc(o,`Initialization of query '${zn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.ba.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Gc(t)}async function Jc(n,e){const t=z(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function o1(n,e){const t=z(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.ba)c.Fa(s)&&(r=!0);o.wa=s}}r&&Gc(t)}function a1(n,e,t){const r=z(n),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(t);r.queries.delete(e)}function Gc(n){n.Ca.forEach((e=>{e.next()}))}var ja,qh;(qh=ja||(ja={})).Ma="default",qh.Cache="cache";class Kc{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new lr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=lr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ja.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e){this.key=e}}class Bg{constructor(e){this.key=e}}class c1{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Q(),this.mutatedKeys=Q(),this.eu=og(e),this.tu=new er(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new Bh,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),v=so(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),x=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let D=!1;m&&v?m.data.isEqual(v.data)?R!==x&&(r.track({type:3,doc:v}),D=!0):this.su(m,v)||(r.track({type:2,doc:v}),D=!0,(l&&this.eu(v,l)>0||h&&this.eu(v,h)<0)&&(c=!0)):!m&&v?(r.track({type:0,doc:v}),D=!0):m&&!v&&(r.track({type:1,doc:m}),D=!0,(l||h)&&(c=!0)),D&&(v?(o=o.add(v),i=x?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(v,R){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B(20277,{Vt:D})}};return x(v)-x(R)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,h=l!==this.Xa;return this.Xa=l,o.length!==0||h?{snapshot:new lr(this.query,e.tu,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Bh,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Q(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const t=[];return e.forEach((r=>{this.Ya.has(r)||t.push(new Bg(r))})),this.Ya.forEach((r=>{e.has(r)||t.push(new jg(r))})),t}cu(e){this.Za=e.ks,this.Ya=Q();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return lr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Qc="SyncEngine";class l1{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class u1{constructor(e){this.key=e,this.hu=!1}}class h1{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Dn((c=>ig(c)),ro),this.Iu=new Map,this.Eu=new Set,this.Ru=new de(j.comparator),this.Au=new Map,this.Vu=new Lc,this.du={},this.mu=new Map,this.fu=cr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function d1(n,e,t=!0){const r=Jg(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Hg(r,e,t,!0),s}async function f1(n,e){const t=Jg(n);await Hg(t,e,!0,!1)}async function Hg(n,e,t,r){const s=await VA(n.localStore,mt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await p1(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Ng(n.remoteStore,s),c}async function p1(n,e,t,r,s){n.pu=(p,m,v)=>(async function(x,D,V,F){let ie=D.view.ru(V);ie.Ss&&(ie=await Oh(x.localStore,D.query,!1).then((({documents:E})=>D.view.ru(E,ie))));const ke=F&&F.targetChanges.get(D.targetId),We=F&&F.targetMismatches.get(D.targetId)!=null,xe=D.view.applyChanges(ie,x.isPrimaryClient,ke,We);return zh(x,D.targetId,xe.au),xe.snapshot})(n,p,m,v);const i=await Oh(n.localStore,e,!0),o=new c1(e,i.ks),c=o.ru(i.documents),l=As.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=o.applyChanges(c,n.isPrimaryClient,l);zh(n,t,h.au);const f=new l1(e,t,o);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function g1(n,e,t){const r=z(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!ro(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Fa(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&jc(r.remoteStore,s.targetId),Ba(r,s.targetId)})).catch(_r)):(Ba(r,s.targetId),await Fa(r.localStore,s.targetId,!0))}async function m1(n,e){const t=z(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),jc(t.remoteStore,r.targetId))}async function y1(n,e,t){const r=I1(n);try{const s=await(function(o,c){const l=z(o),h=le.now(),f=c.reduce(((v,R)=>v.add(R.key)),Q());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let R=Nt(),x=Q();return l.xs.getEntries(v,f).next((D=>{R=D,R.forEach(((V,F)=>{F.isValidDocument()||(x=x.add(V))}))})).next((()=>l.localDocuments.getOverlayedDocuments(v,R))).next((D=>{p=D;const V=[];for(const F of c){const ie=xI(F,p.get(F.key).overlayedDocument);ie!=null&&V.push(new Nn(F.key,ie,Yp(ie.value.mapValue),yt.exists(!0)))}return l.mutationQueue.addMutationBatch(v,h,V,c)})).next((D=>{m=D;const V=D.applyToLocalDocumentSet(p,x);return l.documentOverlayCache.saveOverlays(v,D.batchId,V)}))})).then((()=>({batchId:m.batchId,changes:cg(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let h=o.du[o.currentUser.toKey()];h||(h=new de(K)),h=h.insert(c,l),o.du[o.currentUser.toKey()]=h})(r,s.batchId,t),await Ss(r,s.changes),await uo(r.remoteStore)}catch(s){const i=zc(s,"Failed to persist write");t.reject(i)}}async function qg(n,e){const t=z(n);try{const r=await PA(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Au.get(i);o&&(te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?te(o.hu,14607):s.removedDocuments.size>0&&(te(o.hu,42227),o.hu=!1))})),await Ss(t,r,e)}catch(r){await _r(r)}}function $h(n,e,t){const r=z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=z(o);l.onlineState=c;let h=!1;l.queries.forEach(((f,p)=>{for(const m of p.ba)m.va(c)&&(h=!0)})),h&&Gc(l)})(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _1(n,e,t){const r=z(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new de(j.comparator);o=o.insert(i,Le.newNoDocument(i,$.min()));const c=Q().add(i),l=new ao($.min(),new Map,new de(K),o,c);await qg(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),Yc(r)}else await Fa(r.localStore,e,!1).then((()=>Ba(r,e,t))).catch(_r)}async function w1(n,e){const t=z(n),r=e.batch.batchId;try{const s=await RA(t.localStore,e);zg(t,r,null),$g(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ss(t,s)}catch(s){await _r(s)}}async function T1(n,e,t){const r=z(n);try{const s=await(function(o,c){const l=z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next((p=>(te(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>l.localDocuments.getDocuments(h,f)))}))})(r.localStore,e);zg(r,e,t),$g(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ss(r,s)}catch(s){await _r(s)}}function $g(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function zg(n,e,t){const r=z(n);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Ba(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((r=>{n.Vu.containsKey(r)||Wg(n,r)}))}function Wg(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(jc(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Yc(n))}function zh(n,e,t){for(const r of t)r instanceof jg?(n.Vu.addReference(r.key,e),E1(n,r)):r instanceof Bg?(L(Qc,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||Wg(n,r.key)):B(19791,{wu:r})}function E1(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(r)||(L(Qc,"New document in limbo: "+t),n.Eu.add(r),Yc(n))}function Yc(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new j(oe.fromString(e)),r=n.fu.next();n.Au.set(r,new u1(t)),n.Ru=n.Ru.insert(t,r),Ng(n.remoteStore,new Qt(mt(no(t.path)),r,"TargetPurposeLimboResolution",Zi.ce))}}async function Ss(n,e,t){const r=z(n),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,t).then((h=>{var f;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Fc.Es(l.targetId,h);i.push(p)}})))})),await Promise.all(o),r.Pu.J_(s),await(async function(l,h){const f=z(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>k.forEach(h,(m=>k.forEach(m.Ts,(v=>f.persistence.referenceDelegate.addReference(p,m.targetId,v))).next((()=>k.forEach(m.Is,(v=>f.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))))))}catch(p){if(!wr(p))throw p;L(Uc,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const v=f.vs.get(m),R=v.snapshotVersion,x=v.withLastLimboFreeSnapshotVersion(R);f.vs=f.vs.insert(m,x)}}})(r.localStore,i))}async function b1(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){L(Qc,"User change. New user:",e.toKey());const r=await kg(t.localStore,e);t.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new O(P.CANCELLED,o))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ss(t,r.Ns)}}function v1(n,e){const t=z(n),r=t.Au.get(e);if(r&&r.hu)return Q().add(r.key);{let s=Q();const i=t.Iu.get(e);if(!i)return s;for(const o of i){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function Jg(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=qg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=v1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_1.bind(null,e),e.Pu.J_=o1.bind(null,e.eventManager),e.Pu.yu=a1.bind(null,e.eventManager),e}function I1(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=w1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=T1.bind(null,e),e}class xi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=co(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return SA(this.persistence,new IA,e.initialUser,this.serializer)}Cu(e){return new Pg(Mc.Vi,this.serializer)}Du(e){return new NA}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xi.provider={build:()=>new xi};class A1 extends xi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){te(this.persistence.referenceDelegate instanceof Pi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new lA(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?$e.withCacheSize(this.cacheSizeBytes):$e.DEFAULT;return new Pg((r=>Pi.Vi(r,t)),this.serializer)}}class Ha{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$h(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=b1.bind(null,this.syncEngine),await r1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new i1})()}createDatastore(e){const t=co(e.databaseInfo.databaseId),r=UA(e.databaseInfo);return $A(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,o,c){return new WA(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>$h(this.syncEngine,t,0)),(function(){return Fh.v()?new Fh:new OA})())}createSyncEngine(e,t){return(function(s,i,o,c,l,h,f){const p=new h1(s,i,o,c,l,h);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=z(s);L(Pn,"RemoteStore shutting down."),i.Ea.add(5),await Cs(i),i.Aa.shutdown(),i.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Ha.provider={build:()=>new Ha};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Dt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="FirestoreClient";class C1{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Oe.UNAUTHENTICATED,this.clientId=Ac.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{L(un,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(L(un,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=zc(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function sa(n,e){n.asyncQueue.verifyOperationInProgress(),L(un,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await kg(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Wh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await S1(n);L(un,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>jh(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>jh(e.remoteStore,s))),n._onlineComponents=e}async function S1(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(un,"Using user provided OfflineComponentProvider");try{await sa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;sr("Error using user provided cache. Falling back to memory cache: "+t),await sa(n,new xi)}}else L(un,"Using default OfflineComponentProvider"),await sa(n,new A1(void 0));return n._offlineComponents}async function Gg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(un,"Using user provided OnlineComponentProvider"),await Wh(n,n._uninitializedComponentsProvider._online)):(L(un,"Using default OnlineComponentProvider"),await Wh(n,new Ha))),n._onlineComponents}function R1(n){return Gg(n).then((e=>e.syncEngine))}async function Vi(n){const e=await Gg(n),t=e.eventManager;return t.onListen=d1.bind(null,e.syncEngine),t.onUnlisten=g1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=f1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=m1.bind(null,e.syncEngine),t}function P1(n,e,t,r){const s=new Xc(r),i=new Kc(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>Wc(await Vi(n),i))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>Jc(await Vi(n),i)))}}function k1(n,e,t={}){const r=new Pt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,h){const f=new Xc({next:m=>{f.Nu(),o.enqueueAndForget((()=>Jc(i,p)));const v=m.docs.has(c);!v&&m.fromCache?h.reject(new O(P.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&l&&l.source==="server"?h.reject(new O(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Kc(no(c.path),f,{includeMetadataChanges:!0,Ka:!0});return Wc(i,p)})(await Vi(n),n.asyncQueue,e,t,r))),r.promise}function x1(n,e,t={}){const r=new Pt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,h){const f=new Xc({next:m=>{f.Nu(),o.enqueueAndForget((()=>Jc(i,p))),m.fromCache&&l.source==="server"?h.reject(new O(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Kc(c,f,{includeMetadataChanges:!0,Ka:!0});return Wc(i,p)})(await Vi(n),n.asyncQueue,e,t,r))),r.promise}function V1(n,e){const t=new Pt;return n.asyncQueue.enqueueAndForget((async()=>y1(await R1(n),e,t))),t.promise}/**
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
 */function Kg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1="ComponentProvider",Jh=new Map;function N1(n,e,t,r,s){return new Zv(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Kg(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="firestore.googleapis.com",Gh=!0;class Kh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Qg,this.ssl=Gh}else this.host=e.host,this.ssl=e.ssl??Gh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Rg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<aA)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kg(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ho{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Vv;switch(r.type){case"firstParty":return new Lv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Jh.get(t);r&&(L(D1,"Removing Datastore"),Jh.delete(t),r.terminate())})(this),Promise.resolve()}}function O1(n,e,t,r={}){var h;n=at(n,ho);const s=fr(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&($f(`https://${c}`),zf("Firestore",!0)),i.host!==Qg&&i.host!==c&&sr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!An(l,o)&&(n._setSettings(l),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Oe.MOCK_USER;else{f=nT(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new O(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Oe(m)}n._authCredentials=new Dv(new Up(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ln(this.firestore,e,this._query)}}class ye{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ye(this.firestore,e,this._key)}toJSON(){return{type:ye._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(bs(t,ye._jsonSchema))return new ye(e,r||null,new j(oe.fromString(t.referencePath)))}}ye._jsonSchemaVersion="firestore/documentReference/1.0",ye._jsonSchema={type:Te("string",ye._jsonSchemaVersion),referencePath:Te("string")};class rn extends Ln{constructor(e,t,r){super(e,t,no(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ye(this.firestore,null,new j(e))}withConverter(e){return new rn(this.firestore,e,this._path)}}function L1(n,e,...t){if(n=je(n),jp("collection","path",e),n instanceof ho){const r=oe.fromString(e,...t);return ch(r),new rn(n,null,r)}{if(!(n instanceof ye||n instanceof rn))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return ch(r),new rn(n.firestore,null,r)}}function Zc(n,e,...t){if(n=je(n),arguments.length===1&&(e=Ac.newId()),jp("doc","path",e),n instanceof ho){const r=oe.fromString(e,...t);return ah(r),new ye(n,null,new j(r))}{if(!(n instanceof ye||n instanceof rn))throw new O(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return ah(r),new ye(n.firestore,n instanceof rn?n.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="AsyncQueue";class Yh{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Vg(this,"async_queue_retry"),this._c=()=>{const r=ra();r&&L(Qh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=ra();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ra();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Pt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!wr(e))throw e;L(Qh,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Dt("INTERNAL UNHANDLED ERROR: ",Xh(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=$c.createAndSchedule(this,e,t,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&B(47125,{Pc:Xh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Xh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class kn extends ho{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Yh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Yh(e),this._firestoreClient=void 0,await e}}}function M1(n,e){const t=typeof n=="object"?n:Kf(),r=typeof n=="string"?n:vi,s=dc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=eT("firestore");i&&O1(s,...i)}return s}function fo(n){if(n._terminated)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||F1(n),n._firestoreClient}function F1(n){var r,s,i,o;const e=n._freezeSettings(),t=N1(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new C1(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tt(Pe.fromBase64String(e))}catch(t){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new tt(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:tt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(bs(e,tt._jsonSchema))return tt.fromBase64String(e.bytes)}}tt._jsonSchemaVersion="firestore/bytes/1.0",tt._jsonSchema={type:Te("string",tt._jsonSchemaVersion),bytes:Te("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:wt._jsonSchemaVersion}}static fromJSON(e){if(bs(e,wt._jsonSchema))return new wt(e.latitude,e.longitude)}}wt._jsonSchemaVersion="firestore/geoPoint/1.0",wt._jsonSchema={type:Te("string",wt._jsonSchemaVersion),latitude:Te("number"),longitude:Te("number")};/**
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
 */class ct{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ct._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(bs(e,ct._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ct(e.vectorValues);throw new O(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ct._jsonSchemaVersion="firestore/vectorValue/1.0",ct._jsonSchema={type:Te("string",ct._jsonSchemaVersion),vectorValues:Te("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1=/^__.*__$/;class j1{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Nn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Is(e,this.data,t,this.fieldTransforms)}}function Xg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B(40011,{dataSource:n})}}class tl{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new tl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Di(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Xg(this.dataSource)&&U1.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class B1{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||co(e)}createContext(e,t,r,s=!1){return new tl({dataSource:e,methodName:t,targetDoc:r,path:Re.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zg(n){const e=n._freezeSettings(),t=co(n._databaseId);return new B1(n._databaseId,!!e.ignoreUndefinedProperties,t)}function H1(n,e,t,r,s,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);nm("Data must be an object, but it was:",o,r);const c=em(r,o);let l,h;if(i.merge)l=new st(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=po(e,p,t);if(!o.contains(m))throw new O(P.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);W1(f,m)||f.push(m)}l=new st(f),h=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,h=o.fieldTransforms;return new j1(new et(c),l,h)}class nl extends el{_toFieldTransform(e){return new SI(e.path,new os)}isEqual(e){return e instanceof nl}}function q1(n,e,t,r=!1){return rl(t,n.createContext(r?4:3,e))}function rl(n,e){if(tm(n=je(n)))return nm("Unsupported field value:",e,n),em(n,e);if(n instanceof el)return(function(r,s){if(!Xg(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=rl(c,s.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return II(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=le.fromDate(r);return{timestampValue:Ri(s.serializer,i)}}if(r instanceof le){const i=new le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ri(s.serializer,i)}}if(r instanceof wt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof tt)return{bytesValue:Tg(s.serializer,r._byteString)};if(r instanceof ye){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Oc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ct)return(function(o,c){const l=o instanceof ct?o.toArray():o;return{mapValue:{fields:{[Kp]:{stringValue:Qp},[Ii]:{arrayValue:{values:l.map((f=>{if(typeof f!="number")throw c.createError("VectorValues must only contain numeric values.");return xc(c.serializer,f)}))}}}}}})(r,s);if(Sg(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Xi(r)}`)})(n,e)}function em(n,e){const t={};return qp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vn(n,((r,s)=>{const i=rl(s,e.childContextForField(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function tm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof le||n instanceof wt||n instanceof tt||n instanceof ye||n instanceof el||n instanceof ct||Sg(n))}function nm(n,e,t){if(!tm(t)||!Bp(t)){const r=Xi(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function po(n,e,t){if((e=je(e))instanceof Yg)return e._internalPath;if(typeof e=="string")return z1(n,e);throw Di("Field path arguments must be of type string or ",n,!1,void 0,t)}const $1=new RegExp("[~\\*/\\[\\]]");function z1(n,e,t){if(e.search($1)>=0)throw Di(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Yg(...e.split("."))._internalPath}catch{throw Di(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Di(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new O(P.INVALID_ARGUMENT,c+n+l)}function W1(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{convertValue(e,t="none"){switch(cn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(an(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw B(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Vn(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Ii].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>me(o.doubleValue)));return new ct(t)}convertGeoPoint(e){return new wt(me(e.latitude),me(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=to(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(rs(e));default:return null}}convertTimestamp(e){const t=on(e);return new le(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=oe.fromString(e);te(Cg(r),9688,{name:e});const s=new ss(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(t)||Dt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class sl extends J1{constructor(e){super(),this.firestore=e}convertBytes(e){return new tt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ye(this.firestore,null,t)}}function ur(){return new nl("serverTimestamp")}const Zh="@firebase/firestore",ed="4.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new G1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(po("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class G1 extends rm{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class il{}class K1 extends il{}function Q1(n,e,...t){let r=[];e instanceof il&&r.push(e),r=r.concat(t),(function(i){const o=i.filter((l=>l instanceof ol)).length,c=i.filter((l=>l instanceof go)).length;if(o>1||o>0&&c>0)throw new O(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class go extends K1{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new go(e,t,r)}_apply(e){const t=this._parse(e);return im(e._query,t),new Ln(e.firestore,e.converter,Va(e._query,t))}_parse(e){const t=Zg(e.firestore);return(function(i,o,c,l,h,f,p){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new O(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){rd(p,f);const R=[];for(const x of p)R.push(nd(l,i,x));m={arrayValue:{values:R}}}else m=nd(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||rd(p,f),m=q1(c,o,p,f==="in"||f==="not-in");return we.create(h,f,m)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Y1(n,e,t){const r=e,s=po("where",n);return go._create(s,r,t)}class ol extends il{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ol(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:ht.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)im(o,l),o=Va(o,l)})(e._query,t),new Ln(e.firestore,e.converter,Va(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function nd(n,e,t){if(typeof(t=je(t))=="string"){if(t==="")throw new O(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sg(e)&&t.indexOf("/")!==-1)throw new O(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(oe.fromString(t));if(!j.isDocumentKey(r))throw new O(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return mh(n,new j(r))}if(t instanceof ye)return mh(n,t._key);throw new O(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xi(t)}.`)}function rd(n,e){if(!Array.isArray(n)||n.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function im(n,e){const t=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new O(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function X1(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Br{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bn extends rm{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ai(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(po("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=bn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}bn._jsonSchemaVersion="firestore/documentSnapshot/1.0",bn._jsonSchema={type:Te("string",bn._jsonSchemaVersion),bundleSource:Te("string","DocumentSnapshot"),bundleName:Te("string"),bundle:Te("string")};class ai extends bn{data(e={}){return super.data(e)}}class vn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Br(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new ai(this._firestore,this._userDataWriter,r.key,r,new Br(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new ai(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Br(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new ai(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Br(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:Z1(c.type),doc:l,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ac.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Z1(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B(61501,{type:n})}}/**
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
 */vn._jsonSchemaVersion="firestore/querySnapshot/1.0",vn._jsonSchema={type:Te("string",vn._jsonSchemaVersion),bundleSource:Te("string","QuerySnapshot"),bundleName:Te("string"),bundle:Te("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(n){n=at(n,ye);const e=at(n.firestore,kn),t=fo(e);return k1(t,n._key).then((r=>am(e,n,r)))}function eC(n){n=at(n,Ln);const e=at(n.firestore,kn),t=fo(e),r=new sl(e);return sm(n._query),x1(t,n._query).then((s=>new vn(e,r,n,s)))}function ls(n,e,t){n=at(n,ye);const r=at(n.firestore,kn),s=X1(n.converter,e,t),i=Zg(r);return om(r,[H1(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,yt.none())])}function tC(n){return om(at(n.firestore,kn),[new Vc(n._key,yt.none())])}function nC(n,...e){var h,f,p;n=je(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||td(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(td(e[r])){const m=e[r];e[r]=(h=m.next)==null?void 0:h.bind(m),e[r+1]=(f=m.error)==null?void 0:f.bind(m),e[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let i,o,c;if(n instanceof ye)o=at(n.firestore,kn),c=no(n._key.path),i={next:m=>{e[r]&&e[r](am(o,n,m))},error:e[r+1],complete:e[r+2]};else{const m=at(n,Ln);o=at(m.firestore,kn),c=m._query;const v=new sl(o);i={next:R=>{e[r]&&e[r](new vn(o,v,m,R))},error:e[r+1],complete:e[r+2]},sm(n._query)}const l=fo(o);return P1(l,c,s,i)}function om(n,e){const t=fo(n);return V1(t,e)}function am(n,e,t){const r=t.docs.get(e._key),s=new sl(n);return new bn(n,s,e._key,r,new Br(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){xv(pr),nr(new Cn("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new kn(new Nv(r.getProvider("auth-internal")),new Mv(o,r.getProvider("app-check-internal")),eI(o,s),o);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),en(Zh,ed,e),en(Zh,ed,"esm2020")})();const rC={apiKey:"AIzaSyCvK7ounDvKzgKGHK30uCFqDUbqZkoOGJc",authDomain:"cardy-hardy.firebaseapp.com",projectId:"cardy-hardy",storageBucket:"cardy-hardy.firebasestorage.app",messagingSenderId:"756160918063",appId:"1:756160918063:web:830975f45634054dfe8cda",measurementId:"G-MXM77YZD95"};let ia=null,oa=null,aa=null,ca=null;const cm=()=>(ia||(ia=Gf(rC)),ia),hr=()=>(oa||(oa=Pv(cm())),oa),sd=()=>(aa||(aa=new Ct),aa),yo=()=>(ca||(ca=M1(cm())),ca),lm=()=>Zc(yo(),"admins","list"),um=()=>Zc(yo(),"config","site"),al=n=>Zc(yo(),"users",n),hm=()=>L1(yo(),"users"),qa=(n="")=>n.trim().toLowerCase(),sC=()=>typeof navigator<"u"&&/iPad|iPhone|iPod/i.test(navigator.userAgent||""),iC=async()=>{const n=[{key:"indexedDB",value:Cp},{key:"local",value:Tp},{key:"session",value:Tc}];let e=null;for(const t of n)try{return await gb(hr(),t.value),{persistence:t.key,error:null}}catch(r){e=r,console.warn(`Failed to set ${t.key} persistence`,r)}return{persistence:"none",error:e}},oC=async()=>{let n=null,e=null;try{e=await zb(hr())}catch(r){n=r,console.error("Firebase redirect sign-in failed",r)}const t=await iC();return{redirectError:n,redirectResult:e,persistence:t}},dm=async()=>{try{return await Mb(hr(),sd())}catch(n){if(!sC())throw n;return console.warn("Popup sign-in failed on iOS, falling back to redirect",n),qb(hr(),sd())}},Ni=()=>(console.log("start signout"),wb(hr()).then(()=>{console.log("signout completed")})),aC=n=>_b(hr(),n),fm=async()=>{const n=await mo(lm());if(!n.exists())return[];const e=n.data();return Array.isArray(e.items)?e.items:[]},cC=async(n="")=>(await fm()).map(qa).includes(qa(n)),lC=async n=>ls(lm(),{items:n.map(qa).filter(Boolean),updatedAt:ur()},{merge:!0}),cl=async()=>{const n=await mo(um());if(!n.exists())return null;const e=n.data();return typeof e.nextMeetupDate=="number"?e.nextMeetupDate:null},uC=async n=>ls(um(),{nextMeetupDate:n,updatedAt:ur()},{merge:!0}),hC=async n=>{const e=al(n.id),t=await mo(e),r={email:n.email,firstName:n.firstName,lastName:n.lastName,...n.userType?{userType:n.userType}:{},updatedAt:ur()};return t.exists()?ls(e,r,{merge:!0}):ls(e,{...r,createdAt:ur()})},dC=async n=>{const e=n==null?void 0:n.uid;if(!e)return!1;const t=al(e);if((await mo(t)).exists())return!0;const s=(n.email||"").trim().toLowerCase();if(s&&!(await eC(Q1(hm(),Y1("email","==",s)))).empty)return!0;const i=n.displayName||"",[o="",...c]=i.trim().split(/\s+/),l=c.join(" ");return await ls(t,{email:s,firstName:o,lastName:l,userType:"unverified",createdAt:ur(),updatedAt:ur()}),!0},pm=()=>{const n=new lf([]),e=nC(hm(),t=>{const r=t.docs.map(s=>({id:s.id,...s.data()}));r.sort((s,i)=>{var l,h,f,p,m,v,R,x,D,V;const o=(l=s==null?void 0:s.createdAt)!=null&&l.seconds?s.createdAt.seconds*1e3:((m=(p=(f=(h=s==null?void 0:s.createdAt)==null?void 0:h.toDate)==null?void 0:f.call(h))==null?void 0:p.getTime)==null?void 0:m.call(p))??0;return((v=i==null?void 0:i.createdAt)!=null&&v.seconds?i.createdAt.seconds*1e3:((V=(D=(x=(R=i==null?void 0:i.createdAt)==null?void 0:R.toDate)==null?void 0:x.call(R))==null?void 0:D.getTime)==null?void 0:V.call(D))??0)-o}),n.next(r)},t=>{console.error("Failed to listen to users",t)});return n.unsubscribe=e,n},fC=async n=>n?(await tC(al(n)),!0):!1,gm=({onUser:n,toast:e})=>{if(typeof n!="function")throw new Error("startAuthFlow requires an onUser callback.");oC().then(({redirectError:t,redirectResult:r,persistence:s})=>{var i,o;t&&((i=e==null?void 0:e.error)==null||i.call(e,"Sign-in failed after redirect. Try again.")),s!=null&&s.error&&((o=e==null?void 0:e.error)==null||o.call(e,"Safari blocked login storage. Check cookie settings.")),r!=null&&r.user&&n(r.user,"redirectResult")}).catch(t=>{var r;console.error("Failed to prepare auth",t),(r=e==null?void 0:e.error)==null||r.call(e,"Sign-in setup failed. Try again.")}),aC(t=>{n(t,"onAuthChanged")})},pC=async({user:n,mountSso:e,toast:t,onDenied:r,onPermissionsError:s}={})=>{var o,c;let i=!1;try{i=await cC((n==null?void 0:n.email)||"")}catch(l){return console.error("Failed to load admin list",l),s==null||s(l),(o=t==null?void 0:t.error)==null||o.call(t,"Unable to verify access. Check Firestore rules."),e==null||e("denied",(n==null?void 0:n.email)||"","auth:permissions"),!1}return i?!0:(r==null||r(),(c=t==null?void 0:t.error)==null||c.call(t,`Signed in as ${(n==null?void 0:n.email)||"unknown"} but not authorized.`),e==null||e("denied",(n==null?void 0:n.email)||"","auth:denied"),!1)},mm=async({user:n,mountSso:e,toast:t,setCurrentUser:r,onSignedOut:s,onDenied:i,onAuthorized:o,reason:c=""}={})=>{if(!n)return r==null||r(null),s==null||s(),e==null||e("login","","auth:logged-out"),!1;try{await dC(n)}catch(h){console.warn("Failed to ensure user profile",h)}return await pC({user:n,mountSso:e,toast:t,onDenied:i,onPermissionsError:i})?(r==null||r(n),o==null||o(n,c),!0):!1},ll=U(({status:n,userEmail:e,adminEmail:t,onSignIn:r,onSignOut:s})=>(ll.inputs(i=>{[{status:n,userEmail:e,adminEmail:t,onSignIn:r,onSignOut:s}]=i,r=Ye(r),s=Ye(s)}),[()=>n==="loading"?Wo.class`panel auth-panel`(Ae("Checking login...")):n==="denied"?Wo.class`panel auth-panel`(Yt("Access denied"),Ae.class`auth-warning`(()=>e||"This account"," is not authorized."),Ae("Please be patient as we review your account to become verified status."),I.class`auth-actions`(pe.type`button`.class`add-button`.onClick(s)("Sign out"))):Wo.class`panel auth-panel`(Yt("Sign in"),Ae("Use Google to access admin tools."),I.class`auth-actions`(pe.type`button`.class`add-button`.onClick(r)("Sign in with Google")))])),gC=U(()=>{let n=[];const e=ze(()=>{});U.promise=fm().then(o=>{n=Array.isArray(o)?o:[],e()}).catch(o=>{console.error("Failed to load admin list",o)});const t=(o,c)=>{n=n.map((l,h)=>h===o?c:l),e()},r=()=>{n=[...n,""],e()},s=o=>{n=n.filter((c,l)=>l!==o),e()},i=()=>lC(n).then(()=>{alert("saved")}).catch(o=>{console.error("Failed to save admin list",o)});return Ji.style`border:0;padding:0;margin:0;`(I.style`display:flex;flex-direction:column;gap:0.6em;`(o=>(n.length?n:[""]).map((c,l)=>I.style`display:flex;gap:0.6em;align-items:center;`(Xe.type`text`.value(h=>c).onInput(h=>t(l,h.target.value)).style`width:100%`,pe.onClick(()=>s(l))("remove")))),I.style`display:flex;gap:0.6em;align-items:center;margin-top:0.8em;flex-wrap:wrap;`(pe.onClick(r)("add"),pe.onClick(i)("save to firestore")))});function ym({startDateTime:n,message:e,subject:t}){n=new Date(n);const{year:r,month:s}=ul(n),i=("0"+(n.getDate()+1)).slice(-2),o=Oi(n),c=new Date(new Date(n).setHours(n.getHours()+2)),l=Oi(c),h=encodeURIComponent(e),f=encodeURIComponent(t);return`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${r}${s}${i}${o}%2F${r}${s}${i}${l}&details=${h}&location=&text=${f}`}function _m({startDateTime:n,message:e,subject:t}){n=new Date(n);const{year:r,month:s,day:i,hours:o}=ul(n),l=new Date(new Date(n).setHours(n.getHours()+2)).getHours(),h=encodeURIComponent(e.replace(/\n/g,"<br>")),f=encodeURIComponent(t);return`https://outlook.live.com/calendar/0/action/compose?allday=false&body=${h}&enddt=${r}-${s}-${i}T${l}%3A00%3A00&location=&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=${r}-${s}-${i}T${o}%3A00%3A00&subject=${f}`}function wm({startDateTime:n,message:e,subject:t}){n=new Date(n);const{year:r,month:s}=ul(n),i=("0"+(n.getDate()+1)).slice(-2),o=Oi(n),c=new Date(new Date(n).setHours(n.getHours()+2)),l=Oi(c);return`BEGIN:VCALENDAR
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
END:VCALENDAR`}function ul(n){n=new Date(n);const e=n.getFullYear(),t=("0"+(n.getMonth()+1)).slice(-2),r=("0"+n.getDate()).slice(-2),s=n.getHours();return{year:e,month:t,day:r,hours:s}}function Oi(n){const e=String(n.getUTCHours()).padStart(2,"0"),t=String(n.getUTCMinutes()).padStart(2,"0"),r=String(n.getUTCSeconds()).padStart(2,"0");return`T${e}${t}${r}Z`}const Tm=U(n=>{Tm.updates(t=>[n]=t);const e=new Date(n);return I.style`text-align:center;`(I(ee("🗓️ ",e.toLocaleString("default",{weekday:"long"}),", ",e.toLocaleString("default",{month:"long"})," ",e.getDate(),Em(e))),t=>Mf({date:n}),mC(e))});function mC(n){return I.style`font-size:.65em;opacity:.7`(yC(n))}function la(n,e){const t={hour:"numeric",minute:"numeric",hour12:!0,timeZone:e,timeZoneName:"short"};return new Intl.DateTimeFormat("en-US",t).format(n)}function yC(n){const e=la(n,"America/New_York"),t=la(n,"America/Chicago"),r=la(n,"America/Los_Angeles");return`${e} / ${t} / ${r}`}const Ne={subject:"Cary Hardy Patreon meetup",message:`
    Link to virtual meeting is posted to Patreon on a day of meeting
  
    https://www.patreon.com/caryhardy
  `.trim().replace(/    /g,"")},_o=U(({date:n,showLearnMore:e=!0})=>{n=new Date(n),_o.updates(h=>{[{date:n,showLearnMore:e}]=h});let t=!1;const r=ym({startDateTime:n,message:Ne.message,subject:Ne.subject}),s=_m({startDateTime:n,message:Ne.message,subject:Ne.subject}),i=[{type:"google",url:r},{type:"outlook",url:s}],o=wm({startDateTime:n,message:Ne.message,subject:Ne.subject});var c=new Blob([o],{type:"text/calendar"});const l=window.URL.createObjectURL(c);return Ot(I.style`padding:.5em;`("Countdown until the next, Patreon LE only, group meetup"),()=>Tm(n),I.style`white-space:nowrap;font-size:.7em;opacity:.8`("save meetup to your calendar using links below 👇"),I.style`background-color:black;padding:0 0 .2em 0;`(I.style`white-space:nowrap;font-size:.5em;opacity:.6`("choose your calendar type below"),I.style`display:flex;gap:1em;justify-content: center;`(i.map(h=>id(h.type,{href:h.url},h.type==="google"?Y.src`assets/media/gmail-logo-2.png`.width`48`.height`48`.border`0`:Y.src`assets/media/outlook-icon.png`.width`48`.height`48`.border`0`).key(h)),id("ical",{href:l,download:"cary-hardy-meetup.ics"},Ys.viewBox`0 0 170 170`.fill`currentColor`.width`48`.height`48`(Lf("Apple Logo"),Y.src`assets/media/ical.png`.width`48`.height`48`.border`0`))),q,I(ce.style`font-size:0.7em;`(B0(J.onClick(()=>t=!t).style`color:white;`("⬜️ qr invite codes here"))))),Ae.style`font-size:0.8em;opacity:0.7;line-height:0.9em;`(ce("🔗 A link to virtual meetup is posted on day of meetup,",q,"in the LE ONLY 💬 chat on Patreon.")),()=>e&&I.style`padding:.8em;font-size: .7em;`(J.class`no-a-style`.href`meetup.html`(pe.type`button`("learn more"))))});function Em(n){var e=n.getDate(),t="th";return e===1||e===21||e===31?"st":e===2||e===22?"nd":e===3||e===23?"rd":t}const id=(n,e,t)=>{const r=J.class`small-icon-link`.href`${e.href}`.attr("target","_blank");return(e.download?r.attr("download",e.download):r)(I.class`small-icon`(t),ce.style`font-size:0.5em;`(n))};function ua(n){var e=document.createElement("textarea");e.value=n,document.body.appendChild(e),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(e)}const bm=U(({nextMeetupDate:n,onQrUrlChange:e})=>{bm.inputs(i=>{[{nextMeetupDate:n,onQrUrlChange:e}]=i,e=Ye(e)});const t=ym({startDateTime:n,message:Ne.message,subject:Ne.subject}),r=_m({startDateTime:n,message:Ne.message,subject:Ne.subject}),s=wm({startDateTime:n,message:Ne.message,subject:Ne.subject});return Ji.style`border:0;padding:0;margin:0;`(I(I.style`display:flex;flex-wrap:wrap;gap:1em`(I(qr("Message"),I(Xe.type`text`.value(i=>Ne.message).onChange(i=>Ne.message=i.target.value).style`width:100%`)),I(qr("Subject"),I(Xe.type`text`.value(i=>Ne.subject).onChange(i=>Ne.subject=i.target.value).style`width:100%`))),q,q,I.style`display:flex;flex-wrap:wrap;gap:1em;flex-direction:column;`(I.style`display:flex;flex-grow:1`(Ys.attr("xmlns","http://www.w3.org/2000/svg").attr("viewBox","0 0 48 48").attr("width","48").attr("height","48")(q0.attr("width","22").attr("height","22").attr("x","13").attr("y","13").attr("fill","#fff"),qs.attr("fill","#1e88e5").attr("points","25.68,20.92 26.688,22.36 28.272,21.208 28.272,29.56 30,29.56 30,18.616 28.56,18.616"),vt.attr("fill","#1e88e5").attr("d","M22.943,23.745c0.625-0.574,1.013-1.37,1.013-2.249c0-1.747-1.533-3.168-3.417-3.168 c-1.602,0-2.972,1.009-3.33,2.453l1.657,0.421c0.165-0.664,0.868-1.146,1.673-1.146c0.942,0,1.709,0.646,1.709,1.44 c0,0.794-0.767,1.44-1.709,1.44h-0.997v1.728h0.997c1.081,0,1.993,0.751,1.993,1.64c0,0.904-0.866,1.64-1.931,1.64 c-0.962,0-1.784-0.61-1.914-1.418L17,26.802c0.262,1.636,1.81,2.87,3.6,2.87c2.007,0,3.64-1.511,3.64-3.368 C24.24,25.281,23.736,24.363,22.943,23.745z"),qs.attr("fill","#fbc02d").attr("points","34,42 14,42 13,38 14,34 34,34 35,38"),qs.attr("fill","#4caf50").attr("points","38,35 42,34 42,14 38,13 34,14 34,34"),vt.attr("fill","#1e88e5").attr("d","M34,14l1-4l-1-4H9C7.343,6,6,7.343,6,9v25l4,1l4-1V14H34z"),qs.attr("fill","#e53935").attr("points","34,34 34,42 42,34"),vt.attr("fill","#1565c0").attr("d","M39,6h-5v8h8V9C42,7.343,40.657,6,39,6z"),vt.attr("fill","#1565c0").attr("d","M9,42h5v-8H6v5C6,40.657,7.343,42,9,42z")),Xe.type`text`.style`width:100%`.value(t),pe.onClick(()=>ua(t))("copy"),pe.onClick(()=>e(t))("qr")),I.style`display:flex;flex:1`(Ys.attr("xmlns","http://www.w3.org/2000/svg").attr("viewBox","0 0 48 48").attr("width","48").attr("height","48")(vt.attr("fill","#03A9F4").attr("d","M21,31c0,1.104,0.896,2,2,2h17c1.104,0,2-0.896,2-2V16c0-1.104-0.896-2-2-2H23c-1.104,0-2,0.896-2,2V31z"),vt.attr("fill","#B3E5FC").attr("d","M42,16.975V16c0-0.428-0.137-0.823-0.367-1.148l-11.264,6.932l-7.542-4.656L22.125,19l8.459,5L42,16.975z"),vt.attr("fill","#0277BD").attr("d","M27 41.46L6 37.46 6 9.46 27 5.46z"),vt.attr("fill","#FFF").attr("d","M21.216,18.311c-1.098-1.275-2.546-1.913-4.328-1.913c-1.892,0-3.408,0.669-4.554,2.003c-1.144,1.337-1.719,3.088-1.719,5.246c0,2.045,0.564,3.714,1.69,4.986c1.126,1.273,2.592,1.91,4.378,1.91c1.84,0,3.331-0.652,4.474-1.975c1.143-1.313,1.712-3.043,1.712-5.199C22.869,21.281,22.318,19.595,21.216,18.311z M19.049,26.735c-0.568,0.769-1.339,1.152-2.313,1.152c-0.939,0-1.699-0.394-2.285-1.187c-0.581-0.785-0.87-1.861-0.87-3.211c0-1.336,0.289-2.414,0.87-3.225c0.586-0.81,1.368-1.211,2.355-1.211c0.962,0,1.718,0.393,2.267,1.178c0.555,0.795,0.833,1.895,0.833,3.31C19.907,24.906,19.618,25.968,19.049,26.735z")),Xe.type`text`.style`width:100%`.value(r),pe.onClick(()=>ua(r))("copy"),pe.onClick(()=>e(r))("qr")),I.style`display:flex;flex:1`(Ys.attr("viewBox","0 0 170 170").attr("fill","currentColor").attr("width","48").attr("height","48")(Lf("Apple Logo"),vt.attr("d","M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.24z")),Xe.type`text`.style`width:100%`.value(s),pe.onClick(()=>ua(s))("copy")))))}),vm=U(({nextMeetupDate:n,date:e,time:t,onDate:r,onSave:s})=>(vm.inputs(i=>{[{nextMeetupDate:n,date:e,time:t,onDate:r,onSave:s}]=i,r=Ye(r),s=Ye(s)}),Ji.style`border:0;padding:0;margin:0;`(i=>Im({date:e,time:t,onDate:r}),I.style`margin-top:0.6em;`(pe.onClick(s)("save to firestore")),U0,I.style`text-align:center;`(i=>_o({date:n}))))),Im=U(({date:n,time:e,onDate:t})=>{let r=new Date(n+" "+e).getTime();Im.inputs(o=>{[{date:n,time:e,onDate:t}]=o,t=Ye(t),r=new Date(n+" "+e).getTime()});const s=o=>{const c=o.target.value;t(new Date(c+" "+e).getTime())},i=o=>{const c=o.target.value;t(new Date(n+" "+c).getTime())};return I.style`display:flex;flex-wrap:wrap;gap:1em`(I(qr("Date"),I(Xe.type`date`.value(o=>n).onChange(s).style`width:100%`)),I(qr.attr("for","time")("Time"),I(Xe.type`time`.value(o=>e).onChange(i).style`width:100%`)),I(qr.attr("for","time")("UTC"),I(o=>r)))}),_C=U(n=>{const e=Ke(()=>"qrTestElm"+performance.now()),t=()=>{const s=document.getElementById(e);s.innerHTML="",new QRCode(s,{text:n,width:300,height:300,colorDark:"#000000",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.L})},r=()=>{if(typeof QRCode>"u"){var s=document.createElement("script");s.type="text/javascript",s.src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js",s.onload=t,document.head.appendChild(s);return}t()};return uf.noInit([n],()=>{t()}),I.id`${e}`.attr("oninit",r)}),Am=U(({qrUrl:n,onQrUrlChange:e})=>(Am.inputs(t=>{[{qrUrl:n,onQrUrlChange:e}]=t,e=Ye(e)}),Ji.style`border:0;padding:0;margin:0;`(Xe.type`text`.attr("placeholder","paste website address").value(t=>n).attr("maxlength","1000").onKeyup(t=>e(t.target.value)),I.style`display:flex;justify-content: center;`(t=>n&&_C(n)))));function od(n){const e=new Date(n),t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),i=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0");return{date:`${t}-${r}-${s}`,time:`${i}:${o}`}}let ad=!1;const Cm=U(n=>(e=Date.now(),t="",{date:r,time:s}=od(Number(e)))=>{Cm.inputs(([l])=>{Ye(l)});function i(){const l=od(Number(e));r=l.date,s=l.time}ad||(ad=!0,U.promise=cl().then(l=>{typeof l=="number"&&(e=l,i())}).catch(l=>{console.error("Failed to load next meetup date",l)}));const o=()=>uC(Number(e)).then(()=>{alert("saved")}).catch(l=>{console.error("Failed to save meetup date",l)}),c=U(({labelText:l,flex:h,contentNode:f})=>{c.inputs(v=>[{labelText:l,flex:h,contentNode:f}]=v);let p=!1;const m=()=>{p=!p};return I.style`flex:${h};min-width:500px;background:#1f1f1f;border:1px solid rgba(255,255,255,0.3);border-radius:0.8em;overflow:hidden;`(I.onClick(m).style`cursor:pointer;padding:0.75em 1em;color:#fff;user-select:none;font-weight:600;display:flex;gap:0.6em;align-items:center;`(I.style`width:1em;text-align:center;`(()=>p?"▼":"▶"),I(l)),()=>p?I.style`padding:0.8em 1em;border-top:1px solid rgba(255,255,255,0.2);`(v=>f):"")});return I.style`max-width:1200px;margin:0 auto;padding:0 1em;`(lc(Y.src`assets/media/icon.png`.style`width:40px;margin-right:10px;`,"Hardy Tools"),I.style`display:flex;flex-wrap:wrap;gap:1em;text-align:left;`(l=>c({labelText:"QR Maker",flex:"1",contentNode:Am({qrUrl:t,onQrUrlChange:h=>{t=h}})}),l=>c({labelText:"Calendar Links",flex:"2",contentNode:bm({nextMeetupDate:e,onQrUrlChange:h=>{t=h}})}),l=>c({labelText:"meeting tools",flex:"1",contentNode:vm({nextMeetupDate:e,date:r,time:s,onDate:h=>{e=h,i()},onSave:o})}),l=>c({labelText:"admin users",flex:"1",contentNode:gC}),I.style`flex:1;min-width:320px;background:#1f1f1f;border:1px solid rgba(255,255,255,0.3);border-radius:0.8em;overflow:hidden;`(J.href`/admin/user.html`.style`display:block;padding:0.9em 1em;color:#fff;text-decoration:none;font-weight:600;text-align:center;`("Open Users Admin"))),q)}),hl=U(n=>{hl.inputs(([s])=>{n=Ye(s)});const e=()=>{window.location.href="/index.html"},t=()=>{window.open("https://github.com/AckerApple/cary-hardy","_blank")},r=()=>{window.location.href="/admin/user.html"};return[pe.type`button`.class`top-nav-pill`.onClick(e)("🏠 home"),pe.type`button`.class`top-nav-pill`.onClick(()=>{window.location.href="/admin.html"})("⭐️ admin home"),pe.type`button`.class`top-nav-pill`.onClick(t)("🔗 code base"),pe.type`button`.class`top-nav-pill`.onClick(r)("👥 users"),pe.type`button`.class`top-nav-pill`.onClick(n)("🚪 logout")]});let cd=!1;const wC=U(()=>cd?"":(cd=!0,tr(`
    .top-nav-shell {
      width: 100%;
      box-sizing: border-box;
      background: #000;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      z-index: 200;
    }
    .top-nav {
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      background: rgba(0, 0, 0, 0.95);
      display: flex;
      gap: 0.45em;
      justify-content: flex-start;
      align-items: center;
      padding: 0.45em 0.8em;
      z-index: 200;
      flex-wrap: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
    }
    .top-nav-fixed {
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
  `))),Sm=U(({className:n="top-nav",content:e})=>(Sm.inputs(t=>{[{className:n,content:e}]=t}),I.class`${n}`(typeof e=="function"?e():e))),Mn=U(n=>(Mn.inputs(e=>{[n]=e}),Ot(wC(),I.class`top-nav-shell top-nav-fixed`(Sm({className:"top-nav top-nav-inner",content:n})))));let ld=!1;const IC=U(()=>{let n="loading",e="",t=null;const r=ze((c,l="",h="")=>{n=c,e=l}),s=ze(c=>{t=c,console.log("currentUser",t),c||(n="login")}),i=()=>{r("login","","auth:logged-out"),n="login"},o=ze((c,l="")=>{n="authorized",e=(c==null?void 0:c.email)||""});return ld||(ld=!0,gm({onUser:(c,l)=>{mm({user:c,mountSso:r,setCurrentUser:s,onSignedOut:i,onDenied:()=>{r("denied",(t==null?void 0:t.email)||"","auth:denied")},onAuthorized:o,reason:l})},toast:{error:c=>console.warn(c)}})),Ot(tr(`
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
    `),c=>Rm(n,e,i))}),Rm=U((n,e,t)=>{Rm.inputs(s=>{[n,e,t]=s,t=Ye(t)});const r=()=>Ni().then(t).catch(s=>{console.error("Failed to sign out",s)});return[()=>n==="authorized"?Ot(Mn(()=>hl(r)),Cm(t)):I(ll({status:n,userEmail:e,adminEmail:"",onSignIn:()=>dm().catch(s=>{console.error("Failed to sign in",s)}),onSignOut:()=>(n="login",Ni().catch(s=>{console.error("Failed to sign out",s)}))}))]}),Pm=U(({user:n,onEdit:e,formatCreatedAt:t})=>(Pm.inputs(r=>{[{user:n,onEdit:e,formatCreatedAt:t}]=r}),I.style`display:grid;grid-template-columns:1.1fr 1.4fr 0.7fr 0.7fr auto;gap:0.6em;align-items:center;padding:0.4em 0;`(I(`${n.firstName||""} ${n.lastName||""}`.trim()||"—"),I.style`opacity:0.85;`(n.email||"—"),ce.style`opacity:0.85;color:${n.userType==="verified"?"#6fe3a1":"#f26d6d"};`(n.userType||"unverified"),ce.style`opacity:0.7;`(t(n.createdAt)),pe.type`button`.onClick(e).style`border:0;background:transparent;color:#fff;cursor:pointer;font-size:1.1em;`.attr("title","Edit user")("✏️")))),km=U(({userId:n,createdAtLabel:e,editUser:t,isSaving:r,isDeleting:s,onChange:i,onSave:o,onDelete:c,onCancel:l})=>{km.inputs(f=>{[{userId:n,createdAtLabel:e,editUser:t,isSaving:r,isDeleting:s,onChange:i,onSave:o,onDelete:c,onCancel:l}]=f});const h=f=>{i({...t,...f})};return I.style`margin-top:1em;padding-top:1em;border-top:1px solid rgba(255,255,255,0.15);display:grid;gap:0.6em;`(I.style`font-weight:600;`("Edit User"),ce.style`opacity:0.6;`("User ID: ",f=>n),ce.style`opacity:0.6;`("Created at: ",f=>e),I.style`display:grid;grid-template-columns:120px 1fr;gap:0.6em;align-items:center;`(ce.style`opacity:0.7;`("Email"),Xe.type`email`.value(f=>(t==null?void 0:t.email)||"").onInput(f=>{var p;h({email:((p=f==null?void 0:f.target)==null?void 0:p.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),ce.style`opacity:0.7;`("First name"),Xe.type`text`.value(f=>(t==null?void 0:t.firstName)||"").onInput(f=>{var p;h({firstName:((p=f==null?void 0:f.target)==null?void 0:p.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),ce.style`opacity:0.7;`("Last name"),Xe.type`text`.value(f=>(t==null?void 0:t.lastName)||"").onInput(f=>{var p;h({lastName:((p=f==null?void 0:f.target)==null?void 0:p.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),ce.style`opacity:0.7;`("Status"),F0.value(f=>(t==null?void 0:t.userType)==="verified"?"verified":"unverified").onChange(f=>{var p;h({userType:((p=f==null?void 0:f.target)==null?void 0:p.value)==="verified"?"verified":"unverified"})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(f=>Ru.value`unverified`.selected(p=>t.userType==="unverified")("unverified"),f=>Ru.value`verified`.selected(p=>t.userType==="verified")("verified"))),I.style`display:flex;gap:0.6em;`(pe.type`button`.onClick(o).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:#1b1b1b;color:#fff;cursor:pointer;`(f=>r?"Saving...":"Save to Firestore"),pe.type`button`.onClick(c).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:#4b1111;color:#fff;cursor:pointer;`(f=>s?"Deleting...":"Delete"),pe.type`button`.onClick(l).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;cursor:pointer;`("Cancel")))});let ud=!1,ha=!1,Gt=pm(),$t=(Gt==null?void 0:Gt.unsubscribe)||null;const AC=U(()=>{let n="loading",e="",t=null;const r=ze((c,l="",h="")=>{n=c,e=l}),s=ze(c=>{t=c,c||(n="login")}),i=()=>{r("login","","auth:logged-out"),n="login"},o=ze((c,l="")=>{n="authorized",e=(c==null?void 0:c.email)||""});return ud||(ud=!0,gm({onUser:(c,l)=>{mm({user:c,mountSso:r,setCurrentUser:s,onSignedOut:i,onDenied:()=>{r("denied",(t==null?void 0:t.email)||"","auth:denied")},onAuthorized:o,reason:l})},toast:{error:c=>console.warn(c)}})),Ot(tr(`
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
    `),c=>xm(n,e,i))}),xm=U((n,e,t)=>(xm.inputs(r=>{[n,e,t]=r,t=Ye(t)}),[()=>n==="authorized"?Vm(t):I(ll({status:n,userEmail:e,adminEmail:"",onSignIn:()=>dm().catch(r=>{console.error("Failed to sign in",r)}),onSignOut:()=>(n="login",Ni().catch(r=>{console.error("Failed to sign out",r)}))}))])),Vm=U(n=>{Vm.inputs(([V])=>{n=Ye(V)});const e=()=>Ni().then(n).catch(V=>{console.error("Failed to sign out",V)});let t=!1,r=!1,s=!1,i="",o=null,c=null,l=null;const h=ze(()=>{}),f=V=>V?typeof V.toDate=="function"?V.toDate().toLocaleDateString():typeof V=="number"?new Date(V).toLocaleDateString():V.seconds?new Date(V.seconds*1e3).toLocaleDateString():"-":"-",p=V=>{if(!V)return"-";let F=null;return typeof V.toDate=="function"?F=V.toDate():typeof V=="number"?F=new Date(V):V.seconds&&(F=new Date(V.seconds*1e3)),F?F.toLocaleString():"-"},m=()=>{$t&&($t(),$t=null),t=!0,i="",h(),Gt=pm(),$t=(Gt==null?void 0:Gt.unsubscribe)||null},v=V=>{o=V.id,c=V.createdAt??null,l={...V},h()},R=()=>{o=null,c=null,l=null,h()},x=()=>{if(!o||r)return;r=!0,i="",h();const V={id:o,email:((l==null?void 0:l.email)||"").trim(),firstName:((l==null?void 0:l.firstName)||"").trim(),lastName:((l==null?void 0:l.lastName)||"").trim(),userType:(l==null?void 0:l.userType)==="verified"?"verified":"unverified"};U.promise=hC(V).then(()=>{R()}).catch(F=>{console.error("Failed to save user",F),i="Failed to save user.",h()}).finally(()=>{r=!1,h()})},D=()=>{!o||s||confirm("Delete this user?")&&(s=!0,i="",h(),U.promise=fC(o).then(()=>{R()}).catch(V=>{console.error("Failed to delete user",V),i="Failed to delete user.",h()}).finally(()=>{s=!1,h()}))};return ha||(ha=!0,$t?t=!0:m()),Zd(()=>{$t&&($t(),$t=null),ha=!1}),Ot(Mn(()=>hl(e)),I.class`users-page`(lc("Users Admin"),I.class`users-card`(I.style`margin-top:0.75em;display:grid;gap:0.5em;`(V=>i?Ae.style`color:#f6c177;`(i):"",aw(Gt,null,V=>V===null?ce.style`opacity:0.7;`("Loading users..."):(t=!1,console.log("user items",{items:V,isLoading:t}),V.length?V.map(F=>Pm({user:F,onEdit:()=>v(F),formatCreatedAt:f}).key(F.id)):ce.style`opacity:0.7;`("No users found.")))),V=>o?km({userId:o,createdAtLabel:p(c),editUser:l,isSaving:r,isDeleting:s,onChange:F=>{l=F,h()},onSave:x,onDelete:D,onCancel:R}):"",q,I.class`users-actions`(J.href`../admin.html`("Back to Admin Tools")))))}),wo=U(()=>[J.href`/index.html`.class`top-nav-pill`("🏠"),J.href`/meetup.html`.class`top-nav-pill`("🗓️ meetups"),J.href`/index.html#links`.class`top-nav-pill`("🔗 links"),J.href`/index.html#merch`.class`top-nav-pill`("🛍️ merch & more"),J.href`/index.html#youtube`.class`top-nav-pill`("📺 youtube"),J.href`/index.html#awards`.class`top-nav-pill`("🏆 awards"),J.href`/admin.html`.class`top-nav-pill`("👤")]);let hd=!1;const CC=U(()=>(n=0,e=!0,t=Date.now()-1e3,r=ze(()=>{}),s=setTimeout(ze(()=>e=!1),5e3),i=!hd&&(()=>{hd=!0,U.promise=cl().then(o=>{typeof o=="number"&&(t=o,r())}).catch(o=>{console.error("Failed to load next meetup date",o)})})())=>I(Mn(()=>wo()),I(I.style`
      width: 100%;
      height: 175px;
      background-image: url('assets/media/youtube-channel-banner.jpg');
      background-size: contain;
      background-position: top center;
      background-repeat: repeat-x;
    `,tr(`
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
    `),Y.attr("src","assets/media/sticker.png").class`sticker-callout`.style`transition: opacity 0.5s ease;`.attr("style.opacity",o=>e?1:0).onClick(()=>window.scrollTo({top:document.querySelector(".merch-section").offsetTop,behavior:"smooth"})).attr("alt","Super Wow Limited Edition"),I.onClick(()=>++n)(tr(`
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
      `),I.class`bounce-in`.style`--fx-index:5;`(I.class`carousel-3d-wrapper`(I.class`carousel-3d`(I.class`carousel-3d-item`(Y.attr("src","assets/media/unnamed.jpg").attr("alt","Cary Hardy")),I.class`carousel-3d-item`(Y.attr("src","assets/media/Cary-Hardy.jpg").attr("alt","Cary Hardy")),I.class`carousel-3d-item`(Y.attr("src","assets/media/cool_shots/CH_chill.jpg").attr("alt","Cary Hardy Chill")),I.class`carousel-3d-item`(Y.attr("src","assets/media/cool_shots/CH_kong.jpg").attr("alt","Cary Hardy Kong")),I.class`carousel-3d-item`(Y.attr("src","assets/media/cool_shots/CH_machines.jpg").attr("alt","Cary Hardy Machines")),I.class`carousel-3d-item`(Y.attr("src","assets/media/cool_shots/playfield_red.jpg").attr("alt","Playfield")))),o=>n>4&&I.style`text-align: center; margin-top: 2em;`(J.href`./admin.html`.style`color:white; text-decoration: underline;`("🔨 admin tools")))),I.class`bounce-in`.style`--fx-index:1; text-align: center; max-width: 900px; margin: 0 auto;`(Yt.class`welcome-text`("Welcome to where I talk and do everything pinball")),q,I.style`text-align: center;`(Y.attr("src","assets/media/pewpew+cary.png").attr("alt","Pew Pew Cary Hardy").style`max-width: 900px; width: 100%; height: auto;`),q,q,q,I.class`bounce-in section-anchor`.attr("id","links").style`--fx-index:5; display: flex; align-items: center; margin: 1em 0;`(I.style`flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`,ce.style`padding: 0 1em; color: rgba(255,255,255,0.8); white-space: nowrap;`("links"),I.style`
          flex: 1;
          height: 1px;
          background: linear-gradient(270deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));
        `),I.style`display:flex;flex-wrap:wrap;gap:1em;justify-content: center;`(J.href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`.class`bounce-in link-icon`.style`--fx-index: 2;`(Y.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3ElEQVR4Ae2WIQzDIBBFEdPV6Ip6L2Y3Me9NMzuB98GbWrysqHf1otWYismm+vYFTRCEhXXjJrjkmSslLwHgi8vjxkoRKAL/J0BCSHAHGhjQgxHMwIKnY/Px+taNHd2/Bmg3p4wKuIH0Y1RQAB+ugDJxDgn0GQVMSMBmFJhDApSTYwLLQtR13xNAo0oWINS6ErXtpxInX0CmC3g1TURNkypQ+QL1IYG9hiFFRPIL8C8B/ybkO4bsFxH7Vcz+GLE/x5yBRL+LZDVQkTi2Ochn70dimQpFspKKi0AReAF/IVUTZ3/BGQAAAABJRU5ErkJggg==").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),J.href`https://rumble.com/c/c-2975430`.class`bounce-in link-icon`.style`--fx-index: 3;`(Y.attr("src","https://rumble.com/i/favicon-v4.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),J.href`https://twitter.com/cary_hardy`.class`bounce-in link-icon`.style`--fx-index: 4;`(Y.attr("src","https://cdn-icons-png.flaticon.com/512/124/124021.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),J.href`https://www.instagram.com/caryhardypinball/`.class`bounce-in link-icon`.style`--fx-index: 5;`(Y.attr("src","https://cdn-icons-png.flaticon.com/256/1409/1409946.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),J.href`https://www.patreon.com/caryhardy`.class`bounce-in link-icon`.style`--fx-index: 6;`(Y.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUUFRj///8AAADe39+AgIE8PT4MDhF3eHhDREUREhUKCxD7+/sFBwwAAAYNDxLl5eWlpabFxcbw8PC/v8BKS0wXGBzLy8yGhoevr7Dv7+9jZGV9fX63t7giIybZ2dlubm+Wl5gpKiwzMzZZWVtiYmRTVFaPj5ChoaJHSEo5OTy9mcuCAAAEZElEQVR4nO3c6XaiQBCGYSgHtVkEcUNjJFFjzP3f4IDOklEnVDc9VDPne/7j8T0szdZ4HgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRlQncSpbG8moRxclkqDic6C3ZlEjyNbpXP3H8aEnn7+WFTL7U5zPcLovCf/l0DtPLvpMGQseSkWnPjb7PlLs2jeqkoT3fL7Sqo1iZn8c7Qt/vCAaMwpv0mS++X9f11cfyguIO/zmRUqGJ6ywaP8n5sBO8Hil3ZJ00K43i+zf/eV8un5zjpKKGBfqFK3mZf513NDuTEatQtVETZmhNYrceMXGjULFTx5uHh5bG0DOUT9QpDKiJ+YDWCZPLjo1ZhEkx1+mrLgLoNuqNTSGeNLfTXj42FEzUK6e2LIfCLxINsIr+Qjsxj6K3oKJrILqTAYBO9SkU3VG5hPDcOrPdFwfNUZqEio33wp6Xg0M8rVGHRJtD3M7kTcV5h8qQ10D/wJLYrsgqHzy12wqu12HbKKVThtm2g72+lEjmFVLbdRiv5Ruh6kVGonpftA6vj6UJmJTIKaWQj0PeFViKncGencCezJzYXUmkn0I9KkRGjsVAlrLsyHIWbhfGh4bYaXz6XuOBvLKSTrUDfH0msxOZCS8eZ2s7FQkX2Av1I66lWR4WJrSPphcSQ2FRIFk5Jf8sENtOGQhVb3A3rK2HnCofj1tdNn+32E9cK46O10bCWCoyIDYU0snDh9FtUdn+oaSq0ON7XBG5mNBW+2C1cOVeYvNstPLlXmNktfEEhCq0X2j7SuLcf/v/H0kcvhbXh3niYlFbP2taH7h+zNRSGbR4b3kvPzp2XqudWzw1v7djvdXZW6JGVO/o/Td27PrR8MBUYLBoLww+bhaxXczsu9Gzea8tdvJvoUcsn+J9J3IhiFFp6tlYTeb7WWDjZW7vbtnuVeLzGeLpm7fJC4MKCVTj8sHQzKt+LzFLgPAO2dKyRWYWcwnBuZSXmHzITTThvm9i50Jc4n+EWDl8tXGAMBG7oswutjIkbqRfbWIWKWr+tIHFVccV7NzE0f0H4Kg3EZiUw36CldsfTSPA9aO5b0O2uE6WOo5d/zixU1OIJhmQg/119ZX5+WohO8OLPt1ChYeLWExoJrzTmzCizffFEooFa856M9sUX6TmIerPzSPcG8eBNeuqa7gxLOmvdP51KT1zz9GfJxuGK/SQjH8Xi8ysNZjor2jOviLNAehe8MJitHqojYyrp7CA/QfbCZD6+SmhefHnISYuxM59VMPxqREzj1V9X5HJ1dmT91Uy/i1F/1mRRbgfpH9cc0XqwLR37wIlxoXfZWsNxeXovtrPpdLYt3k/lfOHEVwY+a1Po1SerSbXG1KKiqrWaOPCFgVstC6/Uxb/5g61ZKXQaCvsPhf2Hwv5DYf+hsP9Q2H8o7D8U9h8K+w+F/YfC/jP/nndfqNfz+FawkP5XVqnwjuy7EwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATvgOQzxF32eUYx8AAAAASUVORK5CYII=").attr("alt","Patreon").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),J.href`https://silverballswag.com/collections/cary-hardy`.class`bounce-in link-icon`.style`--fx-index: 7;`(Y.attr("src","https://cdn.shopify.com/s/files/1/0255/0271/1853/files/silverball_swag_logo_color_360x.png?v=1614300719").attr("alt","silverball_swag").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),J.href`https://www.facebook.com/hardypinball`.class`bounce-in link-icon`.style`--fx-index: 8;`(Y.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAApVBMVEUYd/L///8Pc/EqgPIZePEXdvKhwPgAa/ATdPGmy/q1zfn9//8Yd/Pf6vwAcfH8/f8Sefrq8/3x9/73+//M3vsPd/nX6Pwcf/4Gef8Ac/kAavSz0PkrhPscf/p1q/zk7f2Es/rA1/pAjPiNufxIk/x6rPpXmftpovqVwPudxflEk/cwiPvF3vtcnPodfPJQmPVnnfVlpvmrxvl1rPaVvftzqPyHtfk2FCUeAAAPm0lEQVR4nN2di3raOgyA7eCUjJjcw0pDCqHcaaFsdO//aMdOoIU1ATu2CGf6zlm/dW3iH8myLcsWwlBi2+wP1w2DYZQsX6bz7Wrc2mwIIZtNa7zazn+/LJNoGISue/xhGEFQD3YDfxh1XnarluH0Hz0v9jxqUooQouxr/vfHvmO0VruXTjT0AxeqIboJi4b63agzehtTh3F4jIpwQfwrIsc/8u8wVC92zPHb6FfU9e2vJ+gTvYS8iWEve5jONgyOaSzHKOi+C/9+Dkqp5zib2fQh64WHp+gTjYT8ww+j5XS2pjGllFSBlaCi3HgNaz2bLqMQa1WkLkLuL+zecj5OrUJ1onSnnBRRKx2/L3p28UAtooeQt8Zfbgc/DTO3Smm6AyO3Wmr8HGyXPtalSB2E/BPPdtZjbOY9qybeCacZPxrzzNXTI3UQht3lpO/RwnGo8qHC59LH/njZDTW0To2Qf8Z+NFrHXtEwZbwvTIK8eD2KfKyqSVUd+tnzoC/jN0UROSN1Ns+Zr9hCBULWT4LkYxBTHbZZQUnjwUfiKzkdFR3ayXyQj3sgfAUioXQwT1TstC4h+1Bf31OqseuVM/L/vPTttb4aa+twuIs9Pc7zOiaJ492wbkPrEDKb8RfksfiAbwDI/38kC7+eV62lwyBbcf9yE74DI6HxKgvqNLYOYTRKY3IjBX4yEhSno+gGhDYOOxOHopvyoWKuS51JJ5S2VDlC9vTeNPVuynZCicx02pPtjZI6tJOJBTbCXydkq6uJ7OAoQ+jiYJTHJBrhKxgJ9UaB1NgoQeji7qTfGNwREaH+pCeDKEEYJql3uxHiAqWXJhLLKnFCf+94tx0iqhGdvfiKQ5iw+0ybJjsIn+p7z11RSxUjdHH0RiujgreWHPEtEkQUIrRxNqb30AWPwtrijTOxgVGE0MUJoXeiv4NwRJIIaVFIh8unRkfBMuEj49NSpPEChOGi6VGwXAjqLwRGjeuEwd67M/0VkofjXq4vqK4SBi+p2dRE9LIwl2qm1xGvERaATcNUigDiFcJwn96bjzkXhnilL14kdPHCM5tmuChsyegtLg8alwhtvOzfZxf8Eta6/vLi0H+BkA30T3dtobkwDTxdHPqrCV2ckbuaqpULH/pJdgHxgg6j8d3NZMqEDRp0fCEIV03YffsfaLAQ4r115Qn9Z8g9l5PWmeRvkbUc9is/nyuXxBWEbriHN9EjHDIty+BiWZZ5zLWRQzW9fVjRFcsJmRt1YPkOmTSW0263HYtsDsK/47Sf2u2+YZhHVJGWUKfKoVbosMeDToB8XD9Mb5vx2+9F8trzQzuXMBj2Xl9/LBej3Wwy3pi5akXmHHwLrqIrlhHaOJh4kBufzD4Z3WS6fL0QUAqHUfJjMX1ftcQeGU+C0pG/VIf2qA/mRrnRWQ6Z/UkOn7nr2qfmZduue5otFA4XhtiD+6PSqU0JoY0TsJ0J7jzM9uaj08sh3EvTLQaa/3NH0E6Jl5QpsUyHvQmQH833jPvGRySVXyFIyLripFfy6yWE4dSCsVG2YiVGextJbnSKEXIlWtOSlVQJYQcoAYFbqEOWcvsq4oQ8/ybtXCe0cTSBicvkgO89+YRnUUIm3iT61hW/6TAYOUCTGWIZf+S3cKUIkTP61gW+EWYp0P4EMTbLK95TlZCtMtLsGqG/iiE0yNyA0+rUApTRIUHx6m8/fU7o4AR+m9wp8+FCIFcKRfvzbcRHo6huqEYod0Sy8yrIcQbD1k/jMzGCcGslNKIETJHAyYNEyLkdDByX/pwL2jYSpmreXGRuwPMd26c0Nu5KFz9w4TIW4UoaAFeVdI0IfFaARoagDcJNE2IqDFEEaArbZ4QORFKIA9qN01IUD9BQPH8Qpom5LF99AJ5OKZ5Qu8F/f7HCX+jefxPE8ZztP3HdbhFkFOa5gnZpAYBrg7vgZCOUQsqlMelcUJCWwgs0MalcUJEN4xS9SFmpQgTVj9BMc5IOKEqIDKc/Jjy8cunsL+3NwKEm7bxXb4eptg6DddvOx+/HipFJCHqwq9zmagGOVQZSfuH5mIG5xJu1YKNhHkadUKw6htM/LWaDu+fcGhZKoTM06iOh7CELs7UdlXYeDi+ax26eNlW0gCb06wUA1HQhL/VCNm8VHVtAUto461SwJqvLVTXh9CeRi3mT+Kd8hoflNDGgaHkCfka/889E7o4aiu5Uh6nUY21ARMqpjHwWJtqvBSY8M+TmgL6iXLMG9jT7NQGC9SOlPctgAknavNuvm+huvcESxhs1AYLrxUq7x9CEtq4p7a8I3z/UHUPGJLQxYlaNlG+B6y6jw+rw4Wao8n38fnNbPdKiPFvR0WHBDkJz6ehSvFEWMJ3JVdKqMXzaRRzogAJbeyrhaGKnCie13a3hD21CATJ89pUcxMBCfkdsWqOhl+qhLD7SykSAtoPf6gFkYr8UtUcYVDCvaWkxEOOMM/zvlNCWy3H/jPP25+q7A1AEvrviiGMQ66+/XCvOuwpDRZf5y3UzsxAEr62lDbXPs/M4N5MoUPDEdo42SjwnZ57ClU6NCeEkl8qZRkI+jq7pnT+MN9dqxYRXVX9qv2itu30ef4wP0Oq8GFV73KbgrvcVTvcaipEJ2dIw3eV8cK0qsR0hHa5nYonKG3jMyOdH88Bw53lFjn3xHRYsUFI1OqAktOz3GDn8ZvLNiHEPDmPz2QLk7/XZD5NvMVfhGD3YjSpw/N7MfjdJiBXKDVHSI3Tu03y+2kgDgE2RshUeH4/TX7HEIA02A/7r2eE+T1R/5QOvfH5PVHc18QAZtqcDuNvd33h7hrgovLGCOm3+9qA7txriJAQp+TOPZB7E5shJEUI6huh/6zfTJuy0vK7L3E20H6jWUOE5feX2vkdtP8CIcnvoP188fk9wrqV2ARh9T3C/C5o3aN+Mzqsvgua3+f9v9fhhfu8McCd7I1YqfdeeSc7v1dfrxIb0eGle/W110a4OSGvjfDXNX8l9S30va8BHV6rb1HUKNEnDRBeq1Giuc7MrQlZJ5xdrjOD81pB/2NCgVpBOJg6+i6hvC0hEar3xGt26btj8NY6NEVqdvG6a9reeFNCwbpruLgKU5Pc2EpFa+fl9Q/12OkNCZnvoKL1DzXWsLwloUwNS311SG9ppRJ1SA+1ZHUg3oyQ15JdSdSSzesB/78IiZeWdcJKQl7TWYe3uRUhybOBpWo6u+Feh7e5ESFThWxdblzUVlfW4m0ICbNR6drqTLoaQho3IcyLyVUU5b5IiCNemEUN8RaEDJBeqtZTTchzkFUN9QaEHBBlF55/QYfMoT6ppbTcgJD1Qfp08Wr7C4Rs/Fwq7n3fgDAvfHTpLZcIedhGrSvewEpN7+/AjAwhW0ntU5X0OXhCM91fufb9CiEOXjhiXUZYQtYsM325VublGiFHRLUtFZSQIBHA64QM0avtUSEJeZu8/fVCPdcJcbjoo5paBCTkgP2FQOkFAUKMl0+0Xl+EI2StoU9LkcaLELKhn9Sbo4IR8pkMEalhI6hDG2fjWhM4QB3ScSZ2P5UQIU92f/OQfMEpGELeDvomWnVQjJA9rPtM5dUIQsjbQJ+rl0v1CJn4e4N3RilGAELC97Gd/fUKPfKEOExS2VwNEEISp4lIgR55Qmapkz6VGhm1E/J39yddmZNWEoTsscHIk7JUzYTcQqk3CqSOkskQ8uYkE0tCjdp1SK1JInmHoRwhe3hvKrHY0EvI5qHptCdbIFpSh+zpYWfiUCQGqY+Qv446k04ofQ2lLCGXaJQKJoXrIiR8JI7TUZ0C2HUIcZDNYqGEYo1WSuNVJlVa+Ch1CFmr/QV5FPA3Wghz5/1IFn69Eu21dMhluIs9cm0ap4Ewf4EX74ZXH1QhdQnZiPT6nnJTvWStyoT5s2n6/oprH6eurUPetmQ+MOmlFYciYT7C08Fcdgg8EwVC9qEGyccgvrDRqEbIF0nx4CMJ6isQq+mQi589D/LN1FLK+oQkj9f3N8+Z+CqiXNQIefv96M+aO50yxNqEeSCtvx5FPq7nQb9EVYdcwu5y0veKAZIoE+YOmk2w+5NlV2KRVCk6CBmF+7ozHuO8MjRRIsyt04wfjV3mqmqvEB2EhSPwl9vBT4OeDR+ShNzUiWn8HGyXPlZyLyeih5C1hjent3gfp4b1FVyVICxs0zLS8XzROz5Qh+gixMVH7vZ+TWdralBOSYSqdPLqgHn0jP3WejZdRiHWpb5cNBLiot+EvexhOts4judRQUJKvdjZzKYPWS/Eenrfl+glPIjtd6POaD5G7VTgp9M2Hb+NfkU9P0fTfdkNCCEXN/CHvc5e4Cf3nWjoB2D3hYERFsYm0m4X6zbMM/kPzEctXgZffqYAAAAASUVORK5CYII=").attr("alt","Facebook").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`)),q,q,q,I.class`bounce-in section-anchor`.attr("id","merch").style`--fx-index:8;`(Yt.class`hero-text`("PINBALL MERCH & MORE")),I.class`merch-section bounce-in`.style`--fx-index:9;`(I.style`display: flex; flex-direction: column; align-items: center; gap: 3em;`(I.style`display: flex; flex-direction: column; align-items: center; gap: 1em;`(I.class`merch-item`.style`max-width: 900px; margin: 0 auto;`(J.href`https://buy.stripe.com/eVq14f9f01zi3Vn7mN00003`.attr("target","_blank")(Y.attr("src","assets/media/wrong_kong_shirts.jpg").attr("alt","Wrong Kong Shirt"))),J.attr("target","_blank").href`https://buy.stripe.com/eVq14f9f01zi3Vn7mN00003`.style`display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(o=>o.target.style.transform="scale(1.1)").onMouseOut(o=>o.target.style.transform="scale(1)")("Get your 'Wrong Kong!' T-Shirt"),J.attr("target","_blank").href`https://buy.stripe.com/5kQdR11My7XGbnPePf00005`.style`display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(o=>o.target.style.transform="scale(1.1)").onMouseOut(o=>o.target.style.transform="scale(1)")("🇦🇺 Wrong Kong for Australia residents")),I.style`display: flex; flex-direction: column; align-items: center; gap: 1em;`(I.class`merch-item`.style`max-width: 900px; margin: 0 auto;`(J.href`https://buy.stripe.com/5kA4j775zaRsdHy9AA`.attr("target","_blank")(Y.attr("src","assets/media/merch-on-glass.jpg").attr("alt","Pinball Merchandise"))),J.attr("target","_blank").href`https://buy.stripe.com/5kA4j775zaRsdHy9AA`.class`bounce-in`.style`--fx-index: 11; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(o=>o.target.style.transform="scale(1.1)").onMouseOut(o=>o.target.style.transform="scale(1)")("More guns than Wick T-shirt"))),I.style`text-align: center; margin-top: 2em; display: flex; flex-direction: column; gap: 2em; align-items: center;`(J.attr("target","_blank").href`https://silverballswag.com/collections/cary-hardy`.class`bounce-in`.style`--fx-index: 12; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(o=>o.target.style.transform="scale(1.1)").onMouseOut(o=>o.target.style.transform="scale(1)")("SHOP SILVERBALL SWAG"))),q,q,I.class`bounce-in section-anchor`.attr("id","youtube").style`--fx-index:5; display: flex; align-items: center; margin: 1em 0;`(I.style`flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`,ce.style`padding: 0 1em; white-space: nowrap;`(J.href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`.attr("target","_blank").style`color: rgba(255,255,255,0.8); text-decoration: underline; text-underline-offset: 2px;`("youtube channel")),I.style`flex: 1; height: 1px; background: linear-gradient(270deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`),I.style`text-align: center;`(I.class`bounce-in`.style`max-width: 900px;margin: auto;--fx-index:12`(j0.attr("src","https://www.youtube.com/embed/JFkiAk44Ntk").attr("frameborder","0").attr("allowfullscreen","").style`width: 100%;height: 500px;`),I.style`text-align: center; margin-top: 2em;`(J.attr("target","_blank").href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`.class`bounce-in`.style`--fx-index: 13; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(o=>o.target.style.transform="scale(1.1)").onMouseOut(o=>o.target.style.transform="scale(1)")("Goto My Channel")),q,q,q,q,I.class`fade-in`.style`--fx-index:16`(o=>Date.now()<t&&Ot(I.class`bounce-in`.style`--fx-index:5; display: flex; align-items: center; margin: 1em 0;`(I.style`flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`,ce.style`padding: 0 1em; color: rgba(255,255,255,0.8); white-space: nowrap;`("live meetups"),I.style`flex: 1; height: 1px; background: linear-gradient(270deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`),I.style`margin-top: 2em; display: flex; flex-wrap: wrap; justify-content: center; gap: 2em;`(I.class`bounce-in`.style`--fx-index:17; position: relative; max-width: 500px; width: 90%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(255,0,100,0.3), 0 15px 40px rgba(0,255,255,0.2); transform: perspective(1000px) rotateX(2deg);`(I.style`position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, rgba(255,0,100,0.2), rgba(0,255,255,0.2), rgba(255,0,100,0.2)); animation: shimmer 4s infinite;`,Y.attr("src","assets/media/meetup-screenshot.jpg").attr("alt","Pinball Community Live Meetup").style`width: 100%; height: auto; display: block; position: relative; z-index: 1;`,I.style`position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5em; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); z-index: 2;`(I.style`color: white; font-weight: bold; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-size: 1.1em;`("Monthly Live Meetups"))),I.class`bounce-in`.style`--fx-index:18; position: relative; max-width: 500px; width: 90%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,255,255,0.3), 0 15px 40px rgba(255,0,100,0.2); transform: perspective(1000px) rotateX(-2deg);`(I.style`position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, rgba(0,255,255,0.2), rgba(255,0,100,0.2), rgba(0,255,255,0.2)); animation: shimmer 4s infinite; animation-delay: 2s;`,Y.attr("src","assets/media/meetup-screenshot2.jpg").attr("alt","Pinball Community Live Meetup 2").style`width: 100%; height: auto; display: block; position: relative; z-index: 1;`,I.style`position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5em; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); z-index: 2;`(I.style`color: white; font-weight: bold; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-size: 1.1em;`("Live Discussion & Q&A")))),I.style`margin-top: 2em;`(c=>_o({date:t,showLearnMore:!0})))),q,q,q,q,Y.class`bounce-in reflection`.attr("alt","Cary Hardy logo").attr("src","https://cdn.shopify.com/s/files/1/0255/0271/1853/collections/Front_1200x1200.png").style`--fx-index:12;width: 55vw;min-width: 200px;max-width: 400px;`,q,q,q,q,q,I.class`bounce-in section-anchor`.attr("id","awards").style`--fx-index:13;`(Yt.class`hero-text`("AWARD WINNING WORK & CONTENT")),I.class`merch-section bounce-in`.style`margin: 2em auto; --fx-index:13;`(I.style`display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 2em; margin: 1em 0;`(I.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","PATB Award").attr("src","assets/media/awards/PBaTB award.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,ce.style`color: white; display: block; text-align: center;`("PATB Award")),I.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","Twipy Award").attr("src","assets/media/awards/Twipy.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,ce.style`color: white; display: block; text-align: center;`("Twipy Award")),I.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","PATB Awards").attr("src","assets/media/awards/PatB awards.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,ce.style`color: white; display: block; text-align: center;`("PATB Awards")),I.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","Cary Hardy and Steve Ritchie handshaking").attr("src","assets/media/awards/photo0.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,ce.style`color: white; display: block; text-align: center;`("TPF 2024")),I.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","Cary Hardy holding award").attr("src","assets/media/awards/photo2.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,ce.style`color: white; display: block; text-align: center;`("TPF 2024")),I.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","Earth Shaker award").attr("src","assets/media/awards/EarthShakerAward.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,ce.style`color: white; display: block; text-align: center;`("TPF 2024")),I.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","TPF 2022").attr("src","assets/media/awards/TPF 2022.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,ce.style`color: white; display: block; text-align: center;`("TPF 2022")),I.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","Cary Hardy owned pinball machine").attr("src","assets/media/awards/photo3.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,ce.style`color: white; display: block; text-align: center;`("TPF 2022")),I.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","Cary Hardy holding award").attr("src","assets/media/awards/photo1.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,ce.style`color: white; display: block; text-align: center;`("TPF 2022")))),q,q,q,q,I("📧",J.href`mailto:hardypinball@gmail.com?subject=website contact&body=Hello, found your email through your website%0A%0A%0A`.style`color:white`("hardypinball@gmail.com")),q,q,q,q)))),TC=M("img");let dd=!1;const SC=U(()=>{let n=Date.now()-1e3;const e=ze(()=>{}),t=()=>new Date(n),r=()=>{const s=document.getElementById("count-clock");s&&Gw(_o,s,{date:t(),showLearnMore:!window.location.href.includes("meetup.html")})};return setTimeout(r,0),dd||(dd=!0,U.promise=cl().then(s=>{typeof s=="number"&&(n=s,e(),r())}).catch(s=>{console.error("Failed to load next meetup date",s)})),Ot(Mn(()=>wo()),TC.class`bounce-in reflection`.alt`Cary Hardy logo`.src`https://cdn.shopify.com/s/files/1/0255/0271/1853/collections/Front_1200x1200.png`.style`--fx-index:0;width: 55vw;min-width: 200px;max-width: 400px;`,I.class`bounce-in`.style`--fx-index:1`(cc.style`line-height: 1.3;`("Meet & talk everything pinball!"),Ae("for Patreon LE supporters"),I.style`font-size:.8em;opacity: .7;`("😎 come experience the hype")),q,I.class`bounce-in`.style`--fx-index:2`(I.id`count-clock`),q,I.class`bounce-in`.style`--fx-index:3;text-align: center;`(I.style`display: inline-block;`(I.style`\n          max-width: 900px;\n          background-color:#333;border-radius: .7em;\n          margin:.5em;text-align: justify;\n          border:1px solid rgba(255,255,255,.5);\n          color:rgba(255,255,255,.85);\n        `(I.style`padding:0em 2em;`(I.style`line-height: 1.5em;`(Ae("And if that sounds interesting to you, consider joining us!"),Ae("By becoming a ",J.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`("Cary Hardy LE supporter")," before ",s=>t().toLocaleString("default",{month:"long"})," ",s=>t().getDate(),s=>Em(t()),", you will receive an LE only Patreon ",ee.style`white-space: nowrap;`("💬 message"),", ",H0("before the meeting start time"),", with an invite ",ee.style`white-space: nowrap;`("🔗 link")," to join this very exclusive meeting.")),q,Yt("How does the meeting work?"),Pu(Hn("🍺 It mostly works because of beer. Come 🍻 cheers with us!"),Hn("🛎️ Make sure you have Patreon notifications turned on to ensure you receive invite link 1 hour before meeting"),Hn("Meeting software is Google Meets, which is a browser based application. No installation will be required."),Hn("Link to meeting is provided 1 hour before meeting. Must be ",J.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`("Patreon LE member"))),q,Yt("😮 When issues arise"),Pu(Hn("Watch your Patreon messages."),Hn("In the event of meeting cancellation or disruption due to unforeseen circumstances, a makeup meeting will be communicated directly from Cary Hardy."))),I.style`text-align: center;`("⚪️ ",J.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`("Patreon memberships")," ⚪️")))),q,q,I.class`bounce-in`.style`--fx-index:4;text-align: center;`(I.style`padding:.8em;font-size: .7em;`(J.class`no-a-style`.href`index.html`(pe.type`button`("🔙 home")))))}),RC=U(()=>{const t=new URLSearchParams(window.location.search).get("session_id")||""||"not found";return I(Mn(()=>wo()),I.class`wrap`(I.class`card`(cc("Thank you!"),Ae("✅ Your payment was received successfully."),q,Ae("We really appreciate your support as we grow CaryHardy.com"),q,Ae("At Pinball at the Beach, please find Cary or Acker or email ",J.href`mailto:acker.dawn.apple@gmail.com?subject=PATB Cary key box`("acker.dawn.apple@gmail.com")),q,Ae.class`muted`("Session ID: ",ee.class`session-id`(r=>t)),J.class`cta`.href`/index.html`("Back to CaryHardy.com"))))}),fd=["/assets/media/product-images/key-box/IMG_1477.heic.jpeg","/assets/media/product-images/key-box/Main.jpg","/assets/media/product-images/key-box/IMG_1472.heic.jpeg","/assets/media/product-images/key-box/IMG_1474.heic.jpeg","/assets/media/product-images/key-box/IMG_1475.heic.jpeg"],pd="https://buy.stripe.com/aFabJ02XDe7K7GrgXv4F202",EC=U(()=>{let n=fd[0],e=pd;return EC.inputs(t=>{[{checkoutUrl:e=pd}={}]=t}),I(Mn(()=>wo()),I.class`product-wrap`(I.class`product-hero`(I.class`product-info`(cc("Cary Hardy Key Box"),lc("🏖️ PATB Pickup only. Priced for LE only members only"),Ae("Cary Hardy Key Box"),Ae("LE Members only pricing"),Yt("$15.00 ",ee.style`font-size:0.6em;opacity:0.75;font-weight:400;`("+ $1 processing + tax")),Ae.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`("🇺🇸 Made in America"),Ae.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`("🚫 🤖 No artificial intellegence used"),Ae.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`("🥳 Fun to assemble Cary Hardy logo that is then functional as your pinball keys holder!"),J.href(t=>e).class`buy-button`.attr("target","_blank")("Buy Now")),I.class`product-media`(Y.attr("src",t=>n).attr("alt","Key Box main photo").class`main-image`,I.class`gallery`(fd.map(t=>I.class`gallery-item`.class(r=>t===n?"is-active":"").onClick(()=>{n=t})(Y.attr("src",t).attr("alt","Key Box photo").class`gallery-image`)))))))});export{IC as a,AC as b,RC as c,CC as h,EC as k,SC as m,Gw as t};
